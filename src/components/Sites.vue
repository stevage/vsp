<template lang="pug">
#Sites(v-if="sites").mt2
    .nearest(v-if="home")
        h3 Nearest sites
        .site.pointer.glow.o-70(v-for="site in nearestSites" @click="click(site)" :class="{ selected: selected(site) }")
            .name.dib.w-70.pa1 {{ site.properties.Service_Name }}
            .distance.dib.w-30.ph1.pv1 {{ Math.round(site.distance) }} km
    //- .all(v-else)
        h3 All sites
        .site.pointer.glow.o-70(v-for="site in alphabetisedSites" @click="click(site)"  :class="{ selected: selected(site) }")
            .name.dib.w-70.pa1 {{ site.properties.Service_Name }}
</template>

<script>
import cheapRuler from 'cheap-ruler';
import geojsonBounds from 'geojson-bounds';
export default {
    name: 'Sites',
    data: () => ({
        sites: undefined,
        home: undefined,
    }),
    created() {
        window.Sites = this;
    },
    watch: {
        home() {
            const ruler = cheapRuler(this.home[1]);
            for (const site of this.sites) {
                console.log(
                    ruler.distance(this.home, site.geometry.coordinates)
                );
                site.distance = ruler.distance(
                    this.home,
                    site.geometry.coordinates
                );
            }
            this.sites.sort((a, b) => a.distance - b.distance);
            window.Map.zoomToBounds(this.bbox);
        },
    },
    methods: {
        click(site) {
            window.Map.highlight(site);
        },
        selected(site) {
            return (
                window.FeatureInfo.feature &&
                window.FeatureInfo.feature.properties.id === site.properties.id
            );
        },
    },
    computed: {
        alphabetisedSites() {
            return this.sites
                .slice()
                .sort((a, b) =>
                    a.properties.Name > b.properties.Name ? 1 : -1
                );
        },
        nearestSites() {
            return this.sites.slice(0, 5);
        },
        bbox() {
            const homePoint = {
                type: 'Feature',
                properties: {},
                geometry: { type: 'Point', coordinates: this.home },
            };
            return geojsonBounds.extent({
                type: 'FeatureCollection',
                features: [homePoint, ...this.nearestSites],
            });
        },
    },
};
</script>

<style scoped>
.site:hover {
    /* font-weight: bold; */
    color: black;
    background: hsla(163, 46.5%, 58.2%, 0.2);
}

.selected {
    /* background: hsl(333, 80%, 90%); */
    /* background: hsla(251, 72%, 14%, 0.2); */
    background: hsla(163, 46.5%, 58.2%, 0.5);
    border-bottom: 2px solid hsl(251, 72%, 14%);
    font-weight: bold;
}
</style>
