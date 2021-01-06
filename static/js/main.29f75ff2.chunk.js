(this["webpackJsonpcovid-italia"]=this["webpackJsonpcovid-italia"]||[]).push([[0],{251:function(e,i,t){},449:function(e,i,t){},450:function(e,i,t){"use strict";t.r(i);var n=t(3),a=t(1),o=t.n(a),c=t(16),r=t.n(c),s=t(210),l=t(497),d=t(101),m=t(496),b=(t(251),t(131)),j=t(18),u=t(26),g=t(501),p=t(483),h=t(484),v=t(485),O=t(498),x=t(502),f=t(486),z=t(503),R=t(479),C=t(20),D=t(70),S=t.n(D),T=t(136),k=t(94),A=t.n(k),y=[],N=[],w=function(e){var i=[];return A.a.get(e).then((function(e){return e.data})).then((function(e){return e.forEach((function(e){var t={data:e.data,stato:e.stato,codiceRegione:e.codice_regione,denominazioneRegione:e.denominazione_regione,lat:e.lat,long:e.lang,ricoveratiConSintomi:e.ricoverati_con_sintomi,terapiaIntensiva:e.terapia_intensiva,totaleOspedalizzati:e.totale_ospedalzzati,isolamentoDomiciliare:e.isolamento_domiciliare,totalePositivi:e.totale_positivi,variazioneTotalePositivi:e.variazione_totale_positivi,nuoviPositivi:e.nuovi_positivi,dimessiGuariti:e.dimessi_guariti,deceduti:0,decedutiTotali:e.deceduti,casiDaSospettoDiagnostico:e.casi_da_sospetto_diagnostico,casiDaScreening:e.casi_da_screening,totaleCasi:e.totale_casi,tamponi:0,tamponiTotali:e.tamponi,positiviTamponi:0,casiTestati:e.casi_testati,note:e.note};i.push(t)})),i})).catch((function(e){return console.error(e),i}))},I=function(e,i){return Object(T.a)(Object(T.a)({},e),{},{deceduti:i?e.decedutiTotali-i.decedutiTotali:0,tamponi:i?e.tamponiTotali-i.tamponiTotali:0,totaleOspedalizzati:i?e.terapiaIntensiva+e.ricoveratiConSintomi:0,positiviTamponi:i&&e.tamponiTotali>i.tamponiTotali?Math.round(e.nuoviPositivi/(e.tamponiTotali-i.tamponiTotali)*1e4)/100:0})},_=[{codiceRegione:99,denominazioneRegione:"ITALIA",abbreviazione:"ITA"},{codiceRegione:13,denominazioneRegione:"Abruzzo",abbreviazione:"ABR"},{codiceRegione:17,denominazioneRegione:"Basilicata",abbreviazione:"BAS"},{codiceRegione:18,denominazioneRegione:"Calabria",abbreviazione:"CAL"},{codiceRegione:15,denominazioneRegione:"Campania",abbreviazione:"CAM"},{codiceRegione:8,denominazioneRegione:"Emilia romagna",abbreviazione:"EMR"},{codiceRegione:6,denominazioneRegione:"Friuli Venezia Giulia",abbreviazione:"FVG"},{codiceRegione:12,denominazioneRegione:"Lazio",abbreviazione:"LAZ"},{codiceRegione:7,denominazioneRegione:"Liguria",abbreviazione:"LIG"},{codiceRegione:3,denominazioneRegione:"Lombardia",abbreviazione:"LOM"},{codiceRegione:11,denominazioneRegione:"Marche",abbreviazione:"MAR"},{codiceRegione:14,denominazioneRegione:"Molise",abbreviazione:"MOL"},{codiceRegione:21,denominazioneRegione:"P.A. Bolzano",abbreviazione:"PAB"},{codiceRegione:22,denominazioneRegione:"P.A. Trento",abbreviazione:"PAT"},{codiceRegione:1,denominazioneRegione:"Piemonte",abbreviazione:"PIE"},{codiceRegione:16,denominazioneRegione:"Puglia",abbreviazione:"PUG"},{codiceRegione:20,denominazioneRegione:"Sardegna",abbreviazione:"SAR"},{codiceRegione:19,denominazioneRegione:"Sicilia",abbreviazione:"SIC"},{codiceRegione:9,denominazioneRegione:"Toscana",abbreviazione:"TOS"},{codiceRegione:10,denominazioneRegione:"Umbria",abbreviazione:"UMB"},{codiceRegione:2,denominazioneRegione:"Valle D'Aosta",abbreviazione:"VDA"},{codiceRegione:5,denominazioneRegione:"Veneto",abbreviazione:"VEN"}],P=Object(R.a)((function(e){return{container:{padding:e.spacing(2,3)},formControl:{minWidth:200},lastUpdate:{textAlign:"right",padding:e.spacing(2)},footer:{textAlign:"center",padding:e.spacing(2,0),backgroundColor:"#c0c0c0"}}})),M={1:{value:1,description:"Pazienti degenti",field:"ricoveratiConSintomi"},2:{value:2,description:"Pazienti intensiva",field:"terapiaIntensiva"},3:{value:3,description:"Totale degenti",field:"totaleOspedalizzati"},4:{value:4,description:"Decessi giornalieri",field:"deceduti"},5:{value:5,description:"Decessi totali",field:"decedutiTotali"},6:{value:6,description:"Tamponi giornalieri",field:"tamponi"},7:{value:7,description:"Tamponi totali",field:"tamponiTotali"},8:{value:8,description:"Nuovi positivi",field:"nuoviPositivi"},9:{value:9,description:"Totale positivi",field:"totalePositivi"},10:{value:10,description:"Totale casi",field:"totaleCasi"},11:{value:11,description:"% positivi/tamponi giornalieri",field:"positiviTamponi"}};function Y(e){var i=e.children,t=e.open,a=e.value;return Object(n.jsx)(g.a,{open:t,enterTouchDelay:0,placement:"top",title:a,arrow:!0,children:i})}var E=function(){var e=P(),i=Object(a.useState)(0),t=Object(u.a)(i,2),o=t[0],c=t[1],r=Object(a.useState)(1),s=Object(u.a)(r,2),l=s[0],m=s[1],b=Object(a.useState)(),j=Object(u.a)(b,2),g=j[0],R=j[1],D=Object(a.useState)([0,100]),T=Object(u.a)(D,2),k=T[0],A=T[1],E=Object(a.useState)(0),F=Object(u.a)(E,2),L=F[0],V=F[1],B=Object(a.useState)(100),G=Object(u.a)(B,2),U=G[0],K=G[1];Object(a.useEffect)((function(){Promise.all([w("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json"),w("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json")]).then((function(e){var i,t=Object(u.a)(e,2),n=t[0],a=t[1];y.splice(0,y.length),N.splice(0,N.length),n.forEach((function(e){y.push(e)})),a.forEach((function(e){N.push(I(e,i)),i=e}))})).then((function(){V(0),K(N.length-1),A([0,N.length-1]),c(99)}))}),[]),Object(a.useEffect)((function(){o&&R(99===o?N:function(e){var i;return y.filter((function(i){return i.codiceRegione===e})).map((function(e){var t=I(e,i);return i=e,t}))}(o))}),[o]);var H=Object(a.useMemo)((function(){return g?g.filter((function(e,i){return i>=k[0]&&i<=k[1]})).map((function(e){return{data:S()(e.data).format("DD.MM.YYYY"),value:e[M[l].field]}})):[]}),[g,l,k]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{maxWidth:"xl",className:e.container,children:Object(n.jsxs)(h.a,{container:!0,spacing:2,children:[Object(n.jsx)(h.a,{item:!0,xl:2,lg:2,md:3,sm:4,xs:6,children:Object(n.jsx)(v.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(n.jsx)(O.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:o,onChange:function(e){c(e.target.value)},placeholder:"Regione",children:_.map((function(e){return Object(n.jsx)(x.a,{value:e.codiceRegione,children:e.denominazioneRegione},"reg-".concat(e.codiceRegione))}))})})}),Object(n.jsx)(h.a,{item:!0,xl:2,lg:2,md:3,sm:4,xs:6,children:Object(n.jsx)(v.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(n.jsx)(O.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:l,onChange:function(e){m(e.target.value)},placeholder:"Grafico",children:Object.values(M).map((function(e){return Object(n.jsx)(x.a,{value:e.value,children:e.description},"gf-".concat(e.value))}))})})}),Object(n.jsx)(h.a,{item:!0,xl:8,lg:8,md:6,sm:4,xs:12,children:Object(n.jsx)("div",{className:e.lastUpdate,children:Object(n.jsxs)(f.a,{children:["Ultimo aggiornamento:"," ",g&&g.length?S()(g[g.length-1].data).format("DD/MM/YYYY"):"-"]})})}),Object(n.jsxs)(h.a,{item:!0,xs:12,children:[Object(n.jsx)(C.h,{width:"100%",height:700,children:Object(n.jsxs)(C.b,{data:H,margin:{top:5,right:30,left:20,bottom:5},children:[Object(n.jsx)(C.j,{dataKey:"data"}),Object(n.jsx)(C.k,{}),Object(n.jsx)(C.e,{strokeDasharray:"3 3"}),Object(n.jsx)(C.i,{}),Object(n.jsx)(C.g,{}),Object(n.jsx)(C.a,{type:"monotone",name:M[l].description,dataKey:"value",stroke:d.a[900],fill:d.a[700]})]})}),Object(n.jsx)(h.a,{item:!0,xs:12,style:{marginTop:"24px"},children:Object(n.jsx)(z.a,{value:k,min:L,max:U,valueLabelDisplay:"on",onChange:function(e,i){Array.isArray(i)&&A(i)},ValueLabelComponent:Y,valueLabelFormat:function(e){return N&&N.length?S()(N[e].data).format("DD.MM.YYYY"):e}})})]})]})}),Object(n.jsxs)("div",{className:e.footer,children:["Fonte dati:"," ",Object(n.jsx)("a",{href:"https://github.com/pcm-dpc/COVID-19",target:"_new",children:"Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile"})]})]})},F=t(8),L=t(24),V=t(488),B=t(500),G=t(487),U=t(504),K=t(100),H=t(489),W=t(490),J=[],X=function(){return A.a.get("https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json").then((function(e){return e.data})).then((function(e){var i=[];return e.data.forEach((function(e){var t={index:e.index,area:e.area,dosiSomministrate:e.dosi_somministrate,dosiConsegnate:e.dosi_consegnate,percentualeSomministrazione:e.percentuale_somministrazione,ultimoAggiornamento:e.ultimo_aggiornamento};i.push(t)})),i})).then((function(e){return J=e}))},Z=t(452),$=Object(R.a)((function(e){return{paper:{padding:e.spacing(1),minHeight:"100px"},title:{color:K.a[500]},paperContent:{display:"flex",flexDirection:"row",alignItems:"center","& *:last-child":{marginLeft:e.spacing(2),flexGrow:1,textAlign:"right",fontSize:"170%",fontWeight:"bold"}},bigIcon:{fontSize:"400%"}}})),q=function(e){var i=e.title,t=e.value,a=e.icon,o=e.percent,c=$();return Object(n.jsxs)(Z.a,{className:c.paper,children:[Object(n.jsx)(f.a,{variant:"h6",className:c.title,children:Object(n.jsx)("strong",{children:i})}),Object(n.jsxs)("div",{className:c.paperContent,children:[a||Object(n.jsx)("span",{children:"\xa0"}),Object(n.jsxs)("span",{children:[(new Intl.NumberFormat).format(t),o?" (".concat(o.toFixed(1),"%)"):""]})]})]})},Q=Object(R.a)((function(e){return{container:{padding:e.spacing(2,3)},buttons:{textAlign:"center"},lastUpdate:{textAlign:"right",padding:e.spacing(2)},bigIcon:{fontSize:"400%"},title:{color:K.a[500]},footer:{textAlign:"center",padding:e.spacing(2,0),backgroundColor:"#c0c0c0"},mb2:{marginBottom:e.spacing(2)}}})),ee=Object(F.a)((function(e){return{root:{color:e.palette.primary.main,"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.light}},padding:e.spacing(.75,2)},selected:{}}}),{withTheme:!0})(G.a),ie=function(){var e=Q(),i=Object(a.useState)(J),t=Object(u.a)(i,2),o=t[0],c=t[1],r=Object(a.useState)(0),s=Object(u.a)(r,2),l=s[0],m=s[1],b=Object(a.useState)(0),j=Object(u.a)(b,2),g=j[0],v=j[1],O=Object(a.useState)("values"),x=Object(u.a)(O,2),z=x[0],R=x[1],D=Object(a.useState)({}),T=Object(u.a)(D,2),k=T[0],A=T[1],y=Object(L.a)(),N=Object(V.a)(y.breakpoints.down("xs")),w=Object(V.a)(y.breakpoints.down("sm"));console.log("XS",N),console.log("SM",w);var I=Object(a.useCallback)((function(){var e={};_.forEach((function(i){e[i.abbreviazione]=i.denominazioneRegione})),A(e)}),[]);Object(a.useEffect)((function(){I(),X().then((function(e){c(e);var i=0,t=0;e.forEach((function(e){i+=e.dosiConsegnate,t+=e.dosiSomministrate})),m(i),v(t)}))}),[I]);var P=Object(a.useMemo)((function(){return o.sort((function(e,i){return e.area.localeCompare(i.area)})).map((function(e){return{regione:k[e.area]||e.area,"Dosi consegnate":e.dosiConsegnate,"Dosi somministrate":e.dosiSomministrate,"Percentuale somministrazioni":e.percentualeSomministrazione}}))}),[o,k]),M=Object(a.useMemo)((function(){var e;return o.forEach((function(i){var t=S()(i.ultimoAggiornamento);e&&!e.isBefore(t)||(e=t)})),e}),[o]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(p.a,{maxWidth:"xl",className:e.container,children:[Object(n.jsxs)(h.a,{container:!0,spacing:2,className:e.mb2,children:[Object(n.jsx)(B.a,{mdDown:!0,children:Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,md:6,lg:3})}),Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(n.jsx)(q,{title:"Consegnati",value:l,icon:Object(n.jsx)(H.a,{className:e.bigIcon})})}),Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(n.jsx)(q,{title:"Somministrati",value:g,icon:Object(n.jsx)(W.a,{className:e.bigIcon}),percent:0===l?0:100*g/l})}),Object(n.jsx)(B.a,{mdDown:!0,children:Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,md:6,lg:3})})]}),Object(n.jsxs)(h.a,{container:!0,spacing:2,children:[Object(n.jsx)(h.a,{item:!0,xs:12,sm:3,children:Object(n.jsx)(f.a,{variant:"h6",className:e.title,children:Object(n.jsx)("strong",{children:"Dati per regione"})})}),Object(n.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)("div",{className:e.buttons,children:Object(n.jsxs)(U.a,{size:"medium",value:z,exclusive:!0,onChange:function(e,i){R(i)},children:[Object(n.jsx)(ee,{value:"values",children:"Valori"}),Object(n.jsx)(ee,{value:"percent",children:"Percentuali"})]})})}),Object(n.jsx)(B.a,{xsDown:!0,children:Object(n.jsxs)(h.a,{item:!0,xs:12,sm:3,className:e.lastUpdate,children:["Ultimo aggiornamento: ",M?M.format("DD/MM/YYYY"):""]})})]}),Object(n.jsx)(C.h,{width:"100%",height:N?500:w?600:700,children:Object(n.jsxs)(C.d,{data:P,margin:{top:5,right:30,left:20,bottom:5},barGap:N?-3:w?-7:-15,children:[Object(n.jsx)(C.j,{dataKey:"regione",angle:-60,textAnchor:"end",height:130,interval:0}),Object(n.jsx)(C.k,{width:"values"===z?50:30}),Object(n.jsx)(C.e,{strokeDasharray:"3 3"}),Object(n.jsx)(C.i,{}),Object(n.jsx)(C.g,{}),"values"===z?Object(n.jsx)(C.c,{dataKey:"Dosi consegnate",stackId:"b",fill:d.a[700],stroke:d.a[900]}):null,"values"===z?Object(n.jsx)(C.c,{dataKey:"Dosi somministrate",stackId:"a",fill:d.a[400],stroke:d.a[600]}):Object(n.jsx)(C.c,{dataKey:"Percentuale somministrazioni",fill:d.a[700],stroke:d.a[900],children:w?null:Object(n.jsx)(C.f,{dataKey:"Percentuale somministrazioni",position:"top",formatter:function(e){return"".concat(Number.parseFloat(e).toFixed(1),"%")}})})]})})]}),Object(n.jsxs)("div",{className:e.footer,children:["Fonte dati:"," ",Object(n.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini",target:"_new",children:"Commissario straordinario per l'emergenza Covid-19"})]})]})},te=t(491),ne=t(492),ae=t(493),oe=t(494),ce=t(495),re=Object(R.a)((function(){return{title:{display:"flex",flexDirection:"column",flexGrow:1},subtitle:{lineHeight:"normal"},github:{color:"white"},link:{color:"white"}}})),se=function(e){var i=e.title,t=e.subtitle,o=e.linkName,c=e.link,r=re(),s=Object(j.f)(),l=Object(a.useCallback)((function(){window.open("https://github.com/ermannos/covid-19-italy","_new")}),[]);return Object(n.jsx)(te.a,{position:"static",children:Object(n.jsxs)(ne.a,{children:[Object(n.jsxs)("div",{className:r.title,children:[Object(n.jsx)(f.a,{variant:"h6",children:i}),Object(n.jsx)(f.a,{variant:"overline",className:r.subtitle,children:t})]}),Object(n.jsx)(ae.a,{className:r.link,color:"inherit",onClick:function(){s.push(c)},children:o}),Object(n.jsx)(oe.a,{className:r.github,onClick:l,title:"GitHub repository",children:Object(n.jsx)(ce.a,{})})]})})},le=(t(449),function(){return Object(n.jsx)(b.a,{basename:"/covid-19-italy",children:Object(n.jsxs)(j.c,{children:[Object(n.jsxs)(j.a,{exact:!0,path:["/"],children:[Object(n.jsx)(se,{title:"Covid-19 Italia",subtitle:"Andamento epidemia",linkName:"Vaccini",link:"/vaccini"}),Object(n.jsx)(E,{})]}),Object(n.jsxs)(j.a,{path:["/vaccini"],children:[Object(n.jsx)(se,{title:"Covid-19 Italia",subtitle:"Andamento campagna vaccinale",linkName:"Home",link:"/"}),Object(n.jsx)(ie,{})]})]})})}),de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,505)).then((function(i){var t=i.getCLS,n=i.getFID,a=i.getFCP,o=i.getLCP,c=i.getTTFB;t(e),n(e),a(e),o(e),c(e)}))},me={primary:{main:d.a[900]},secondary:m.a},be=Object(s.a)({palette:me});r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(l.a,{theme:be,children:Object(n.jsx)(le,{})})}),document.getElementById("root")),de()}},[[450,1,2]]]);
//# sourceMappingURL=main.29f75ff2.chunk.js.map