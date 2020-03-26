<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import U from 'mapbox-gl-utils';
const d3 = require('d3-fetch');
import { sheets2geojson } from 'sheets2geojson';

function toPins(rows) {
    return {
        type: 'FeatureCollection',
        features: rows.map((row, id) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [+row.Longitude, +row.Latitude],
            },
            properties: {
                id,
                ...row,
            },
        })),
    };
}
async function initMap(map) {
    // const d3 = require('d3-fetch');
    // const sheetID =
    //     '2PACX-1vTDD5T6yrNUGMfIiIOakohs3_PrRUrqUEQX0m5BxZ9kQ8sqhbSEwPvPL9pwh-9RDKNXSUpblBC3Yws5';
    const csvUrl =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDD5T6yrNUGMfIiIOakohs3_PrRUrqUEQX0m5BxZ9kQ8sqhbSEwPvPL9pwh-9RDKNXSUpblBC3Yws5/pub?output=csv';
    const points = toPins(await d3.csv(csvUrl));
    console.log(points);
    // console.log(sheets2geojson);
    // const points = await sheets2geojson(sheetID);

    console.log(points);
    map.U.addGeoJSON('sites', points);

    map.U.loadImage('OSHC-marker', 'markers/darkblue-map-marker.png');
    map.U.loadImage('LDC-marker', 'markers/lightgreen-map-marker.png');
    map.U.loadImage('KGN-marker', 'markers/red-map-marker.png');
    map.U.loadImage('other-marker', 'markers/orange-map-marker.png');
    map.U.loadImage('marker-highlight', 'markers/darkblue-map-marker.png');
    map.U.addCircle('sites-circles', 'sites', {
        circleColor: [
            'match',
            ['get', 'Care_Type'],
            'OSHC',
            'hsl(220,60%,40%)',
            'LDC',
            'hsl(140,60%,40%)',
            'KGN',
            'hsl(0,60%,40%)',
            'black',
        ],
        circleRadius: {
            stops: [
                [10, 3],
                [12, 5],
            ],
        },
    });

    map.U.addSymbol('sites-pins', 'sites', {
        iconImage: [
            'match',
            ['get', 'Care_Type'],
            'OSHC',
            'OSHC-marker',
            'LDC',
            'LDC-marker',
            'KGN',
            'KGN-marker',
            'other-marker',
        ],
        iconSize: {
            stops: [
                [9, 0.25],
                [11, 0.5],
            ],
        },
        iconOffset: [0, -30],
        textField: {
            stops: [
                [12.5, ''],
                [13, '{Name}'],
            ],
        },
        textOffset: [0, 1],
        textOptional: true,
        textSize: 14,
        textColor: 'hsl(331, 50%, 50%)',
    });
    map.U.hoverPopup(
        ['sites-circles', 'sites-pins'],
        f => f.properties.Service_Name
    );
    window.map = map;
    map.U.hoverPointer(['sites-pins', 'sites-circles']);
    map.U.clickLayer(
        ['sites-pins', 'sites-circles'],
        ({ features: [site] }) => {
            // console.log(e);
            window.FeatureInfo.feature = site;
            window.Map.highlight(site);
            window.App.sidebarOpen = true;
            document.getElementById('FeatureInfo').scrollIntoView();
        }
    );
    map.on('mousedown', () => {
        if (document.getElementById('map').clientWidth < 150) {
            window.App.sidebarOpen = false;
        }
    });

    window.Sites.sites = [...points.features];
}

function initGeocoder(map) {
    const geocoder = new MapboxGeocoder({
        mapboxgl,
        accessToken: mapboxgl.accessToken,
        countries: 'au',
        types: 'region,postcode,district,place,locality,neighborhood,address',
        bbox: [141, -38, 150.5, -33.5],
    });
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    geocoder
        .on('result', ({ result }) => {
            console.log(result);
            window.Sites.home = result.geometry.coordinates;
        })
        .on('clear', () => {
            window.Sites.home = null;
        });
}

export default {
    data: () => ({
        selectedId: undefined,
    }),
    async mounted() {
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [145, -37.8],
            zoom: 12,
            style: 'mapbox://styles/mapbox/light-v9',
        });
        window.Map = this;
        this.map = map;
        initGeocoder(map);

        U.init(map, mapboxgl);
        map.U.onLoad(() => initMap(map));
    },
    methods: {
        highlight(site) {
            this.map.flyTo({ center: site.geometry.coordinates, zoom: 13 });
            window.FeatureInfo.feature = site;

            // this.map.U.setIconImage('sites-pins', [
            //     'case',
            //     ['==', ['get', 'id'], site.properties.id],
            //     'marker-highlight',
            //     'marker',
            // ]);
            this.map.U.setIconSize('sites-pins', [
                'case',
                ['==', ['get', 'id'], site.properties.id],
                0.8,
                0.4,
            ]);
        },
        zoomToBounds(bbox) {
            this.map.fitBounds(bbox);
        },
    },
};
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
</script>

<style>
.mapboxgl-ctrl-geocoder {
    min-width: 270px !important;
}
</style>
