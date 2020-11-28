(this["webpackJsonpcovid-italia"]=this["webpackJsonpcovid-italia"]||[]).push([[0],{233:function(e,i,n){},430:function(e,i,n){},432:function(e,i,n){"use strict";n.r(i);var t=n(7),o=n(1),a=n.n(o),c=n(13),d=n.n(c),l=n(194),r=n(473),s=n(88),u=n(472),g=(n(233),n(193)),m=n(16),j=n(89),p=n(465),h=n(467),b=n(468),f=n(474),v=n(475),O=n(469),x=n(462),R=n(32),z=n(118),_=n.n(z),C=n(189),T=n.n(C),D=[],P=function(){return function(){var e=[];return T.a.get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json").then((function(e){return e.data})).then((function(i){return i.forEach((function(i){var n={data:i.data,stato:i.stato,codiceRegione:i.codice_regione,denominazioneRegione:i.denominazione_regione,lat:i.lat,long:i.lang,ricoveratiConSintomi:i.ricoverati_con_sintomi,terapiaIntensiva:i.terapia_intensiva,totaleOspedalizzati:i.totale_ospedalzzati,isolamentoDomiciliare:i.isolamento_domiciliare,totalePositivi:i.totale_positivi,variazioneTotalePositivi:i.variazione_totale_positivi,nuoviPositivi:i.nuovi_positivi,dimessiGuariti:i.dimessi_guariti,deceduti:0,decedutiTotali:i.deceduti,casiDaSospettoDiagnostico:i.casi_da_sospetto_diagnostico,casiDaScreening:i.casi_da_screening,totaleCasi:i.totale_casi,tamponi:0,tamponiTotali:i.tamponi,casiTestati:i.casi_testati,note:i.note};e.push(n)})),e})).catch((function(i){return console.error(i),e}))}().then((function(e){return e.forEach((function(e){D.push(e)})),D}))},S=[{codiceRegione:13,denominazioneRegione:"Abruzzo"},{codiceRegione:17,denominazioneRegione:"Basilicata"},{codiceRegione:18,denominazioneRegione:"Calabria"},{codiceRegione:15,denominazioneRegione:"Campania"},{codiceRegione:8,denominazioneRegione:"Emilia romagna"},{codiceRegione:6,denominazioneRegione:"Friuli Venezia Giulia"},{codiceRegione:12,denominazioneRegione:"Lazio"},{codiceRegione:7,denominazioneRegione:"Liguria"},{codiceRegione:3,denominazioneRegione:"Lombardia"},{codiceRegione:11,denominazioneRegione:"Marche"},{codiceRegione:14,denominazioneRegione:"Molise"},{codiceRegione:21,denominazioneRegione:"P.A. bolzano"},{codiceRegione:22,denominazioneRegione:"P.A. Trento"},{codiceRegione:1,denominazioneRegione:"Piemonte"},{codiceRegione:16,denominazioneRegione:"Puglia"},{codiceRegione:20,denominazioneRegione:"Sardegna"},{codiceRegione:19,denominazioneRegione:"Sicilia"},{codiceRegione:9,denominazioneRegione:"Toscana"},{codiceRegione:10,denominazioneRegione:"Umbria"},{codiceRegione:2,denominazioneRegione:"Valle D'Aosta"},{codiceRegione:5,denominazioneRegione:"Veneto"}],y=Object(x.a)((function(e){return{container:{padding:e.spacing(2,3)},formControl:{minWidth:200},lastUpdate:{textAlign:"right",padding:e.spacing(2)}}})),I={1:{value:1,description:"Pazienti degenti",field:"ricoveratiConSintomi"},2:{value:2,description:"Pazienti intensiva",field:"terapiaIntensiva"},3:{value:3,description:"Totale degenti",field:"totaleOspedalizzati"},4:{value:4,description:"Decessi giornalieri",field:"deceduti"},5:{value:5,description:"Decessi totali",field:"decedutiTotali"},6:{value:6,description:"Tamponi giornalieri",field:"tamponi"},7:{value:7,description:"Tamponi totali",field:"tamponiTotali"},8:{value:8,description:"Nuovi positivi",field:"nuoviPositivi"},9:{value:9,description:"Totale positivi",field:"totalePositivi"},10:{value:10,description:"Totale casi",field:"totaleCasi"}},M=function(){var e=y(),i=Object(o.useState)(0),n=Object(j.a)(i,2),a=n[0],c=n[1],d=Object(o.useState)(1),l=Object(j.a)(d,2),r=l[0],u=l[1],g=Object(o.useState)(),m=Object(j.a)(g,2),x=m[0],z=m[1];Object(o.useEffect)((function(){P().then((function(){c(3)}))}),[]),Object(o.useEffect)((function(){a&&z(function(e){var i=D.filter((function(i){return i.codiceRegione===e})),n=0,t=0;return i.forEach((function(e){e.deceduti=e.decedutiTotali-n,e.tamponi=e.tamponiTotali-t,n=e.decedutiTotali,t=e.tamponiTotali})),console.log("points",i),i}(a))}),[a]);var C=Object(o.useMemo)((function(){return x?x.map((function(e){return{data:_()(e.data).format("DD.MM.YYYY"),value:e[I[r].field]}})):[]}),[x,r]);return Object(t.jsx)(p.a,{maxWidth:"xl",className:e.container,children:Object(t.jsxs)(h.a,{container:!0,spacing:2,children:[Object(t.jsx)(h.a,{item:!0,xl:2,lg:2,md:3,sm:4,xs:6,children:Object(t.jsx)(b.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(t.jsx)(f.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:a,onChange:function(e){c(e.target.value)},placeholder:"Regione",children:S.map((function(e){return Object(t.jsx)(v.a,{value:e.codiceRegione,children:e.denominazioneRegione},"reg-".concat(e.codiceRegione))}))})})}),Object(t.jsx)(h.a,{item:!0,xl:2,lg:2,md:3,sm:4,xs:6,children:Object(t.jsx)(b.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(t.jsx)(f.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:r,onChange:function(e){u(e.target.value)},placeholder:"Grafico",children:Object.values(I).map((function(e){return Object(t.jsx)(v.a,{value:e.value,children:e.description},"gf-".concat(e.value))}))})})}),Object(t.jsx)(h.a,{item:!0,xl:8,lg:8,md:6,sm:4,xs:12,children:Object(t.jsx)("div",{className:e.lastUpdate,children:Object(t.jsxs)(O.a,{children:["Ultimo aggiornamento:"," ",x&&x.length?_()(x[x.length-1].data).format("DD/MM/YYYY"):"-"]})})}),Object(t.jsx)(h.a,{item:!0,xs:12,children:Object(t.jsx)(R.e,{width:"100%",height:700,children:Object(t.jsxs)(R.b,{data:C,margin:{top:5,right:30,left:20,bottom:5},children:[Object(t.jsx)(R.g,{dataKey:"data"}),Object(t.jsx)(R.h,{}),Object(t.jsx)(R.c,{strokeDasharray:"3 3"}),Object(t.jsx)(R.f,{}),Object(t.jsx)(R.d,{}),Object(t.jsx)(R.a,{type:"monotone",name:I[r].description,dataKey:"value",stroke:s.a[900],fill:s.a[700]})]})})}),Object(t.jsxs)(h.a,{item:!0,xs:12,style:{textAlign:"center",fontSize:"smaller"},children:["Data source:"," ",Object(t.jsx)("a",{href:"https://github.com/pcm-dpc/COVID-19",target:"_new",children:"Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile"})]})]})})},Y=function(){return Object(t.jsx)("div",{children:"page"})},E=n(470),w=n(471),A=Object(x.a)((function(){return{title:{flexGrow:1}}})),N=function(e){var i=e.title,n=A();return Object(t.jsx)(E.a,{position:"static",children:Object(t.jsx)(w.a,{children:Object(t.jsx)(O.a,{variant:"h6",className:n.title,children:i})})})},F=(n(430),function(){return Object(t.jsxs)(g.a,{children:[Object(t.jsx)(N,{title:"Covid-19 Italia"}),Object(t.jsxs)(m.c,{children:[Object(t.jsx)(m.a,{exact:!0,path:["/","/covid-19-italy"],children:Object(t.jsx)(M,{})}),Object(t.jsx)(m.a,{path:"/page",children:Object(t.jsx)(Y,{})})]})]})}),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,476)).then((function(i){var n=i.getCLS,t=i.getFID,o=i.getFCP,a=i.getLCP,c=i.getTTFB;n(e),t(e),o(e),a(e),c(e)}))},V={primary:{main:s.a[900]},secondary:u.a},k=Object(l.a)({palette:V});d.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(r.a,{theme:k,children:Object(t.jsx)(F,{})})}),document.getElementById("root")),L()}},[[432,1,2]]]);
//# sourceMappingURL=main.95289cbe.chunk.js.map