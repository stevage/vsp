<template lang="pug">
#FeatureInfo
    div.ba.b--gray.pa2.br3.mt1.shadow-1.box(:class="{ [p.Care_Type.replace(' ', '')]: true }" v-if="feature")
        .f6.ttu.b.mt1.Care_Type(:class="{ [p.Care_Type.replace(' ', '')]: true }") {{ p.Care_Type }}
        h1.f4 {{ p.Service_Name }}
        table
            tr(v-for="([key, title]) of fields" v-if="p[key]")
                th.tr.v-top {{ title }}
                td.v-top.pl2.f6 {{ p[key] }}
        //- h2.f5 Contact details
        //- table
        //-     tr(v-for="([key, title]) of contactFields" v-if="p[key]")
        //-         td.tr.v-top {{ title }}
        //-         td.v-top.pl2.f6.w1(:class="{ ['key_' + key]: true }") {{ p[key] }}
        //-     tr(v-if="p.Service_Email")
        //-         td(colspan="2") Email
        //-     tr(v-if="p.Service_Email")
        //-         td(colspan="2").key_Service_Email {{ p.Service_Email }}
        //-     tr(v-if="p.Service_Email")
        //-         td(colspan="2") Email
        //-     tr(v-if="p.Address")
        //-         td(colspan="2").key_Address {{ p.Address }}


        table.w5
            template(v-for="([key, title]) of contactFields" v-if="p[key]")
                tr
                    th.tl {{ title }}
                tr
                    td.v-top.f6.w1.pb2(:class="{ ['key_' + key]: true }") {{ p[key] }}


    div(v-else)
        h2 Click a site for more information.


</template>

<script>
export default {
    name: 'FeatureInfo',
    data: () => ({
        feature: undefined,
        ignoreProps: ['id', 'Longitude', 'Latitude', 'image_url'],
        fields: [
            ['MaxPlaces', 'Places'],
            ['Location', 'Service_Location'],
            ['Service_Status', 'Status'],
            ['Service_Location', 'Type'],
            ['Service_ID', 'ID'],
        ],
        contactFields: [
            ['Service_Phone_No', 'Phone number'],
            ['mobile', 'Mobile'],
            ['Service_Email', 'Email'],
            ['Address', 'Address'],
        ],
    }),
    computed: {
        imageUrl() {
            return this.feature && this.feature.properties.image_url;
        },
        p() {
            if (!this.feature) {
                return { Care_Type: '' };
            } else {
                return {
                    ...this.feature.properties,
                    mobile: formatMobile(
                        this.feature.properties.Service_Mobile_No
                    ),
                };
            }
        },
    },
    created() {
        window.FeatureInfo = this;
    },
};

function formatMobile(m) {
    if (!m) {
        return;
    }
    if (m.length === 9) {
        m = '0' + m;
    }
    return m.replace(/(\d\d\d\d)(\d\d\d)(\d\d\d)/, '$1 $2 $3');
}
</script>

<style scoped>
/* #FeatureInfo th {
    text-align: right;
    vertical-align: top;
}

td {
    vertical-align: top;

} */

.image {
    width: 100%;
}

.Care_Type.OSHC {
    color: hsl(220, 60%, 40%);
}
.Care_Type.LDC {
    color: hsl(160, 80%, 30%);
}
.Care_Type.KGN {
    color: hsl(0, 80%, 30%);
}

.box.OSHC {
    background: hsl(220, 60%, 97%);
}
.box.LDC {
    background: hsl(140, 80%, 95%);
}
.box.KGN {
    background: hsl(0, 80%, 95%);
}

.key_Service_Email {
    font-size: 12px;
}
.key_Address {
    font-size: 12px;
}
</style>
