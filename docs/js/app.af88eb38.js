(function(e){function t(t){for(var i,s,o=t[0],c=t[1],d=t[2],u=0,p=[];u<o.length;u++)s=o[u],n[s]&&p.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},n={app:0},a=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var i=r("64a9"),n=r.n(i);n.a},"18e3":function(e,t,r){},"259d":function(e,t,r){"use strict";var i=r("18e3"),n=r.n(i);n.a},"3d87":function(e,t,r){},5490:function(e,t,r){"use strict";var i=r("bdf3"),n=r.n(i);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-column vh-100 sans-serif",attrs:{id:"app"}},[r("Header",{directives:[{name:"show",rawName:"v-show",value:!e.embedded,expression:"!embedded"}],staticClass:"bb b--black-20",attrs:{id:"top"}}),r("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[r("div",{class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[r("div",{staticClass:"container br bg-white b--light-gray overflow-auto pa2 bw2"},[r("div",{staticClass:"mb2"},[e._v("Enter your address:")]),r("div",{staticClass:"mb3",attrs:{id:"geocoder"}}),r("FeatureInfo"),r("Sites")],1)]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br b--gray bw2",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),r("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[r("Map"),r("div",{staticClass:"absolute bg-white f3 br bt bb br--right br-100 b--blue1 bw1 blue1 pa1 pointer grow fw8 top-2",attrs:{id:"sidebarToggle"},on:{click:e.toggleSidebar}},[e.sidebarOpen?e._e():r("span",[e._v("→")]),e.sidebarOpen?r("span",[e._v("←")]):e._e()]),r("div",{staticClass:"absolute h-100 w-100",staticStyle:{"pointer-events":"none"},attrs:{id:"overlay"}},[r("Legend")],1)],1)])],1)},a=[],s=(r("4917"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})}),o=[],c=r("768b"),d=(r("7514"),r("96cf"),r("3b8d")),l=r("cebc"),u=r("e192"),p=r.n(u),f=r("885b"),m=r.n(f),h=r("8936"),v=r.n(h),b=(r("7914"),new i["a"]),g=(r("ac6d"),r("c307"),r("b2e9"));function w(e){return{type:"FeatureCollection",features:e.filter(function(e){return"Yes"!==e.Hide&&e.Longitude&&e.Latitude}).map(function(e,t){return{type:"Feature",geometry:{type:"Point",coordinates:[+e.Longitude,+e.Latitude]},properties:Object(l["a"])({id:t},e)}})}}function _(e){return y.apply(this,arguments)}function y(){return y=Object(d["a"])(regeneratorRuntime.mark(function e(t){var r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDD5T6yrNUGMfIiIOakohs3_PrRUrqUEQX0m5BxZ9kQ8sqhbSEwPvPL9pwh-9RDKNXSUpblBC3Yws5/pub?output=csv",e.t0=w,e.next=4,g.csv(r);case 4:e.t1=e.sent,i=(0,e.t0)(e.t1),console.log(i),b.$emit("sites-loaded",i.features),console.log(i),t.U.addGeoJSON("sites",i),t.U.loadImage("OSHC-marker","markers/darkblue-map-marker.png"),t.U.loadImage("LDC-marker","markers/lightgreen-map-marker.png"),t.U.loadImage("KGN-marker","markers/red-map-marker.png"),t.U.loadImage("other-marker","markers/orange-map-marker.png"),t.U.loadImage("marker-highlight","markers/darkblue-map-marker.png"),t.U.addCircle("sites-circles","sites",{circleColor:["match",["get","Care_Type"],"OSHC","hsl(220,60%,40%)","LDC","hsl(140,60%,40%)","KGN","hsl(0,60%,40%)","black"],circleRadius:{stops:[[10,3],[12,5]]}}),t.U.addSymbol("sites-pins","sites",{iconImage:["match",["get","Care_Type"],"OSHC","OSHC-marker","LDC","LDC-marker","KGN","KGN-marker","other-marker"],iconSize:{stops:[[9,.25],[11,.5]]},iconOffset:[0,-30],textField:["step",["zoom"],"",13,["get","Service_Name"]],textOffset:[0,1],textOptional:!0,textSize:14,textHaloColor:"hsla(60,20%,90%,0.8)",textHaloWidth:2}),t.U.addGeoJSON("nearest-lines"),t.U.addLine("nearest-lines","nearest-lines",{lineColor:"hsla(220,50%,50%,0.8)",lineDasharray:[2,2]}),t.U.hoverPopup(["sites-circles","sites-pins"],function(e){return e.properties.Service_Name}),t.U.hoverPointer(["sites-pins","sites-circles"]),t.U.clickLayer(["sites-pins","sites-circles"],function(e){var t=Object(c["a"])(e.features,1),r=t[0];window.FeatureInfo.feature=r,window.Map.highlight(r),window.App.sidebarOpen=!0,document.getElementById("FeatureInfo").scrollIntoView()}),t.on("mousedown",function(){document.getElementById("map").clientWidth<150&&(window.App.sidebarOpen=!1)});case 23:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}function C(e,t){var r={type:"FeatureCollection",features:window.Sites.nearestSites.map(function(e){return{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[t.geometry.coordinates,e.geometry.coordinates]}}})};console.log(r),e.U.setData("nearest-lines",r)}var S={data:function(){return{selectedId:void 0}},mounted:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:p.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw",t=new p.a.Map({container:"map",center:[145.07,-37.652],maxBounds:[140.5,-39,150.5,-33],zoom:9.5,style:"https://api.maptiler.com/maps/bright/style.json?key=gXBOrR6nsbonH06fGES5",hash:"localhost"===window.location.hostname&&"loc"}),window.Map=this,this.map=t,window.map=t,this.initGeocoder(t),v.a.init(t,p.a),t.U.onLoad(function(){return _(t)}),b.$on("highlight-site",function(e){return r.highlight(e)});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{highlight:function(e){e&&(this.map.flyTo({center:e.geometry.coordinates,zoom:13}),window.FeatureInfo.feature=e,this.map.U.setIconSize("sites-pins",["case",["==",["get","id"],e.properties.id],.8,.4]))},zoomToBounds:function(e){this.map.fitBounds(e)},initGeocoder:function(e){var t=this,r=new m.a({mapboxgl:p.a,accessToken:p.a.accessToken,countries:"au",types:"region,postcode,district,place,locality,neighborhood,address",bbox:[141,-39,150.5,-33],filter:function(e){return e.context.find(function(e){var t=e.id,r=e.text;return t.match(/^region/)&&"Victoria"===r})}});document.getElementById("geocoder").appendChild(r.onAdd(e)),r.on("result",function(r){var i=r.result;console.log(i),b.$emit("geocode-result",i.geometry),t.$nextTick(function(){return C(e,i)})}).on("clear",function(){window.Sites.home=null})}}},k=S,O=(r("5490"),r("2877")),x=Object(O["a"])(k,s,o,!1,null,null,null);x.options.__file="Map.vue";var I=x.exports,L=function(){var e,t,r=this,i=r.$createElement,n=r._self._c||i;return n("div",{attrs:{id:"FeatureInfo"}},[r.feature?n("div",{staticClass:"ba b--gray pa2 br2 mt1 shadow-1 box",class:(e={},e[r.p.Care_Type.replace(" ","")]=!0,e)},[n("div",{staticClass:"f6 b mt1 Care_Type",class:(t={},t[r.p.Care_Type.replace(" ","")]=!0,t)},[r._v(r._s(r.careTypeLong))]),n("h1",{staticClass:"f4 tc bb b--black-20"},[r._v(r._s(r.p.Service_Name))]),n("table",r._l(r.fields,function(e){var t=e[0],i=e[1];return r.p[t]?n("tr",[n("th",{staticClass:"pt2 f6 tl v-top",domProps:{innerHTML:r._s(i)}}),n("td",{staticClass:"pt2 v-top pl2 f6 fw1"},[r._v(r._s(r.p[t]))])]):r._e()}),0),n("table",{staticClass:"w5 mt1"},[r._l(r.contactFields,function(e){var t,i=e[0],a=e[1];return r.p[i]?[n("tr",[n("th",{staticClass:"f6 tl"},[r._v(r._s(a))])]),n("tr",[n("td",{staticClass:"v-top f7 w1 pb2 fw1",class:(t={},t["key_"+i]=!0,t),domProps:{innerHTML:r._s(r.p[i])}})])]:r._e()})],2),n("div",{staticClass:"tc mobile-only"},[n("div",{staticClass:"link dim ph3 pv2 mb2 dib white bg-dark-blue pointer",on:{click:r.showOnMap}},[r._v("Show on map")])])]):n("div")])},$=[],T=(r("a481"),{name:"FeatureInfo",data:function(){return{feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"],fields:[["Location","Service_Location"],["Service_Status","Status"],["Service_Location","Type"],["Field_1","Provider name"],["phone","Provider<br>phone number"],["mobile","Mobile"]],contactFields:[["Service_Email","Provider email"],["address","Address"]]}},computed:{imageUrl:function(){return this.feature&&this.feature.properties.image_url},p:function(){return this.feature?Object(l["a"])({},this.feature.properties,{mobile:j(this.feature.properties.Service_Mobile_No),phone:j(this.feature.properties.Service_Phone_No!==this.feature.properties.Service_Mobile_No?this.feature.properties.Service_Phone_No:""),address:this.feature.properties.Address.replace(/(  | ([A-Z][A-Z][A-Z]))/,"<br>$2")}):{Care_Type:""}},careTypeLong:function(){return{OSHC:"Outside School Hours Care",LDC:"Long Day Care",KGN:"Kindergarten"}[this.p.Care_Type]}},created:function(){window.FeatureInfo=this},methods:{showOnMap:function(){b.$emit("toggle-sidebar",!1),b.$emit("highlight-site",this.site)}}});function j(e){if(e){return e=e.replace(/^([23])(\d\d\d\d)(\d\d\d\d)/,"0$1 $2 $3"),e=e.replace(/^(4\d\d)(\d\d\d)(\d\d\d)/,"0$1 $2 $3"),e=e.replace(/^(13\d\d)(\d\d\d)(\d\d\d)/,"$1 $2 $3"),e}}var P=T,U=(r("662e"),Object(O["a"])(P,L,$,!1,null,"4c4bea9f",null));U.options.__file="FeatureInfo.vue";var F=U.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.sites?r("div",{staticClass:"mt2",attrs:{id:"Sites"}},[e.home?r("div",{staticClass:"nearest"},[r("h3",[e._v("Nearest sites")]),e._l(e.nearestSites,function(t){return r("div",{staticClass:"site pointer glow o-70",class:{selected:e.selected(t)},on:{click:function(r){e.click(t)}}},[r("div",{staticClass:"name dib w-70 pa1"},[e._v(e._s(t.properties.Service_Name))]),r("div",{staticClass:"distance dib w-30 ph1 pv1"},[e._v(e._s(Math.round(t.distance))+" km")])])})],2):e._e()]):e._e()},M=[],E=r("75fc"),H=r("5d73"),G=r.n(H),D=(r("55dd"),r("6e1d")),A=r.n(D),z=r("34db"),B=r.n(z),R={name:"Sites",data:function(){return{sites:void 0,home:void 0}},created:function(){var e=this;window.Sites=this,b.$on("sites-loaded",function(t){return e.sites=t}),b.$on("geocode-result",function(t){return e.home=t.coordinates})},watch:{home:function(){if(this.home){var e=A()(this.home[1]),t=!0,r=!1,i=void 0;try{for(var n,a=G()(this.sites);!(t=(n=a.next()).done);t=!0){var s=n.value;s.distance=e.distance(this.home,s.geometry.coordinates)}}catch(o){r=!0,i=o}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}this.sites.sort(function(e,t){return e.distance-t.distance}),window.Map.zoomToBounds(this.bbox)}}},methods:{click:function(e){window.Map.highlight(e)},selected:function(e){return window.FeatureInfo.feature&&window.FeatureInfo.feature.properties.id===e.properties.id}},computed:{alphabetisedSites:function(){return this.sites.slice().sort(function(e,t){return e.properties.Name>t.properties.Name?1:-1})},nearestSites:function(){return this.sites.slice(0,5)},bbox:function(){var e={type:"Feature",properties:{},geometry:{type:"Point",coordinates:this.home}};return B.a.extent({type:"FeatureCollection",features:[e].concat(Object(E["a"])(this.nearestSites))})}}},K=R,J=(r("5bb4"),Object(O["a"])(K,N,M,!1,null,"116888d3",null));J.options.__file="Sites.vue";var Z=J.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative h-100",attrs:{id:"Legend"}},[r("div",{staticClass:"bg-white b--gray ba shadow-1 pa2 ma2 bottom absolute bottom-1",staticStyle:{"pointer-events":"auto"}},[r("div",{staticClass:"mb2"},[r("img",{staticClass:"mr2 v-mid w1",attrs:{src:"markers/darkblue-map-marker.png"}}),r("span",[e._v("Outside School Hours Care")])]),r("div",{staticClass:"mb2"},[r("img",{staticClass:"mr2 v-mid w1",attrs:{src:"markers/lightgreen-map-marker.png"}}),r("span",[e._v("Long Day Care")])]),r("div",[r("img",{staticClass:"mr2 v-mid w1",attrs:{src:"markers/red-map-marker.png"}}),r("span",[e._v("Kindergarten")])])])])}],V={name:"Legend",data:function(){return{}},created:function(){window.Legend=this}},W=V,q=Object(O["a"])(W,Q,X,!1,null,"9db00492",null);q.options.__file="Legend.vue";var Y=q.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Header"},[r("div",{staticClass:"inner"},[r("h1",[e._v("Approved VSPs")]),r("div",{staticClass:"logos"},[r("img",{staticClass:"education-state-logo",attrs:{src:"the-education-state-logo.png",height:"60",alt:"Education State"}}),r("img",{attrs:{src:"victoria-state-government-logo.png",height:"60",alt:"Department of Education and Training"}})])])])}],re={name:"Header",data:function(){return{}},created:function(){window.Header=this}},ie=re,ne=(r("259d"),r("e8c8"),Object(O["a"])(ie,ee,te,!1,null,"04630af2",null));ne.options.__file="Header.vue";var ae=ne.exports,se={name:"app",created:function(){var e=this;window.App=this,b.$on("toggle-sidebar",function(t){return e.sidebarOpen=t})},data:function(){return{sidebarOpen:!0,embedded:window.location.hash.match("embed")}},components:{Map:I,FeatureInfo:F,Sites:Z,Legend:Y,Header:ae},watch:{sidebarOpen:function(){this.$nextTick(function(){return window.map.resize()})}},methods:{toggleSidebar:function(){this.sidebarOpen=!this.sidebarOpen}}};r("948e");var oe=se,ce=(r("034f"),Object(O["a"])(oe,n,a,!1,null,null,null));ce.options.__file="App.vue";var de=ce.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(de)}}).$mount("#app")},"5bb4":function(e,t,r){"use strict";var i=r("d200"),n=r.n(i);n.a},"64a9":function(e,t,r){},"662e":function(e,t,r){"use strict";var i=r("3d87"),n=r.n(i);n.a},bdf3:function(e,t,r){},d200:function(e,t,r){},dcb7:function(e,t,r){},e8c8:function(e,t,r){"use strict";var i=r("dcb7"),n=r.n(i);n.a}});
//# sourceMappingURL=app.af88eb38.js.map