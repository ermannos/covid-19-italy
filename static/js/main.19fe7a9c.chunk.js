(this["webpackJsonpcovid-italia"]=this["webpackJsonpcovid-italia"]||[]).push([[0],{255:function(e,i,t){},453:function(e,i,t){},454:function(e,i,t){"use strict";t.r(i);var a=t(3),n=t(1),o=t.n(n),c=t(16),r=t.n(c),s=t(214),l=t(504),d=t(107),m=t(503),u=(t(255),t(80)),j=t(19),g=t(21),v=t(508),b=t(487),p=t(488),O=t(489),h=t(505),x=t(509),f=t(490),z=t(491),S=t(510),D=t(483),R=t(18),C=t(28),_=t.n(C),P=t(37),N=t(72),A=t.n(N),y=[],M=[],k=function(e){var i=[];return A.a.get(e).then((function(e){return e.data})).then((function(e){return e.forEach((function(e){var t={data:e.data,stato:e.stato,codiceRegione:e.codice_regione,denominazioneRegione:e.denominazione_regione,lat:e.lat,long:e.lang,ricoveratiConSintomi:e.ricoverati_con_sintomi,terapiaIntensiva:e.terapia_intensiva,totaleOspedalizzati:e.totale_ospedalzzati,isolamentoDomiciliare:e.isolamento_domiciliare,totalePositivi:e.totale_positivi,variazioneTotalePositivi:e.variazione_totale_positivi,nuoviPositivi:e.nuovi_positivi,dimessiGuariti:e.dimessi_guariti,deceduti:0,decedutiTotali:e.deceduti,casiDaSospettoDiagnostico:e.casi_da_sospetto_diagnostico,casiDaScreening:e.casi_da_screening,totaleCasi:e.totale_casi,tamponi:0,tamponiTotali:e.tamponi,positiviTamponi:0,casiTestati:e.casi_testati,note:e.note};i.push(t)})),i})).catch((function(e){return console.error(e),i}))},F=function(e,i){return Object(P.a)(Object(P.a)({},e),{},{deceduti:i?e.decedutiTotali-i.decedutiTotali:0,tamponi:e.tamponiTotali-(i?i.tamponiTotali:0),totaleOspedalizzati:e.terapiaIntensiva+e.ricoveratiConSintomi,positiviTamponi:i&&e.tamponiTotali>i.tamponiTotali?Math.round(e.nuoviPositivi/(e.tamponiTotali-i.tamponiTotali)*1e4)/100:0})},T=function(e){var i;return y.filter((function(i){return i.codiceRegione===e})).map((function(e){var t=F(e,i);return i=e,t}))},I=function(){return Promise.all([k("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json"),k("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json")]).then((function(e){var i,t=Object(g.a)(e,2),a=t[0],n=t[1];y.splice(0,y.length),M.splice(0,M.length),a.forEach((function(e){y.push(e)})),n.forEach((function(e){M.push(F(e,i)),i=e}))}))},w=[{codiceRegione:99,denominazioneRegione:"ITALIA",abbreviazione:"ITA"},{codiceRegione:13,denominazioneRegione:"Abruzzo",abbreviazione:"ABR"},{codiceRegione:17,denominazioneRegione:"Basilicata",abbreviazione:"BAS"},{codiceRegione:18,denominazioneRegione:"Calabria",abbreviazione:"CAL"},{codiceRegione:15,denominazioneRegione:"Campania",abbreviazione:"CAM"},{codiceRegione:8,denominazioneRegione:"Emilia romagna",abbreviazione:"EMR"},{codiceRegione:6,denominazioneRegione:"Friuli Venezia Giulia",abbreviazione:"FVG"},{codiceRegione:12,denominazioneRegione:"Lazio",abbreviazione:"LAZ"},{codiceRegione:7,denominazioneRegione:"Liguria",abbreviazione:"LIG"},{codiceRegione:3,denominazioneRegione:"Lombardia",abbreviazione:"LOM"},{codiceRegione:11,denominazioneRegione:"Marche",abbreviazione:"MAR"},{codiceRegione:14,denominazioneRegione:"Molise",abbreviazione:"MOL"},{codiceRegione:21,denominazioneRegione:"P.A. Bolzano",abbreviazione:"PAB"},{codiceRegione:22,denominazioneRegione:"P.A. Trento",abbreviazione:"PAT"},{codiceRegione:1,denominazioneRegione:"Piemonte",abbreviazione:"PIE"},{codiceRegione:16,denominazioneRegione:"Puglia",abbreviazione:"PUG"},{codiceRegione:20,denominazioneRegione:"Sardegna",abbreviazione:"SAR"},{codiceRegione:19,denominazioneRegione:"Sicilia",abbreviazione:"SIC"},{codiceRegione:9,denominazioneRegione:"Toscana",abbreviazione:"TOS"},{codiceRegione:10,denominazioneRegione:"Umbria",abbreviazione:"UMB"},{codiceRegione:2,denominazioneRegione:"Valle D'Aosta",abbreviazione:"VDA"},{codiceRegione:5,denominazioneRegione:"Veneto",abbreviazione:"VEN"}],Y=Object(D.a)((function(e){return{container:{padding:e.spacing(2,3)},formControl:{minWidth:200,marginRight:e.spacing(1),marginBottom:e.spacing(1)},lastUpdate:{textAlign:"right",padding:e.spacing(1)},footer:{textAlign:"center",padding:e.spacing(2,0),backgroundColor:"#c0c0c0"}}})),E={1:{value:1,description:"Pazienti degenti",field:"ricoveratiConSintomi"},2:{value:2,description:"Pazienti intensiva",field:"terapiaIntensiva"},3:{value:3,description:"Totale degenti",field:"totaleOspedalizzati"},4:{value:4,description:"Decessi giornalieri",field:"deceduti"},5:{value:5,description:"Decessi totali",field:"decedutiTotali"},6:{value:6,description:"Tamponi giornalieri",field:"tamponi"},7:{value:7,description:"Tamponi totali",field:"tamponiTotali"},8:{value:8,description:"Nuovi positivi",field:"nuoviPositivi"},9:{value:9,description:"Totale positivi",field:"totalePositivi"},10:{value:10,description:"Totale casi",field:"totaleCasi"},11:{value:11,description:"% positivi/tamponi giornalieri",field:"positiviTamponi"}};function U(e){var i=e.children,t=e.open,n=e.value;return Object(a.jsx)(v.a,{open:t,enterTouchDelay:0,placement:"top",title:n,arrow:!0,children:i})}var B=function(){var e=Y(),i=Object(n.useState)(99),t=Object(g.a)(i,2),o=t[0],c=t[1],r=Object(n.useState)(1),s=Object(g.a)(r,2),l=s[0],m=s[1],u=Object(n.useState)(),v=Object(g.a)(u,2),D=v[0],C=v[1],P=Object(n.useState)([0,100]),N=Object(g.a)(P,2),A=N[0],y=N[1],k=Object(n.useState)(0),F=Object(g.a)(k,2),B=F[0],L=F[1],V=Object(n.useState)(100),K=Object(g.a)(V,2),G=K[0],H=K[1],W=Object(j.f)();Object(n.useEffect)((function(){I().then((function(){L(0),H(M.length-1),y([0,M.length-1]),c(99)}))}),[]),Object(n.useEffect)((function(){o&&C(99===o?M:T(o))}),[o]);var J=Object(n.useMemo)((function(){return D?D.filter((function(e,i){return i>=A[0]&&i<=A[1]})).map((function(e){return{data:_()(e.data).format("DD.MM.YYYY"),value:e[E[l].field]}})):[]}),[D,l,A]),Z=Object(n.useMemo)((function(){return w.find((function(e){return e.codiceRegione===o}))}),[o]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{maxWidth:"xl",className:e.container,children:Object(a.jsxs)(p.a,{container:!0,spacing:1,children:[Object(a.jsxs)(p.a,{item:!0,xl:6,lg:8,md:8,sm:7,xs:12,children:[Object(a.jsx)(O.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(a.jsx)(h.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:o,onChange:function(e){c(e.target.value)},placeholder:"Regione",children:w.map((function(e){return Object(a.jsx)(x.a,{value:e.codiceRegione,children:e.denominazioneRegione},"reg-".concat(e.codiceRegione))}))})}),Object(a.jsx)(O.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(a.jsx)(h.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",value:l,onChange:function(e){m(e.target.value)},placeholder:"Grafico",children:Object.values(E).map((function(e){return Object(a.jsx)(x.a,{value:e.value,children:e.description},"gf-".concat(e.value))}))})}),99===o?null:Object(a.jsx)(O.a,{variant:"outlined",size:"small",className:e.formControl,children:Object(a.jsxs)(f.a,{variant:"outlined",onClick:function(){W.push("/regione/".concat(null===Z||void 0===Z?void 0:Z.codiceRegione))},children:["Focus ",null===Z||void 0===Z?void 0:Z.denominazioneRegione]})})]}),Object(a.jsx)(p.a,{item:!0,xl:6,lg:4,md:4,sm:5,xs:12,children:Object(a.jsx)("div",{className:e.lastUpdate,children:Object(a.jsxs)(z.a,{children:["Ultimo aggiornamento:"," ",D&&D.length?_()(D[D.length-1].data).format("DD/MM/YYYY"):"-"]})})}),Object(a.jsxs)(p.a,{item:!0,xs:12,children:[Object(a.jsx)(R.h,{width:"100%",height:700,children:Object(a.jsxs)(R.b,{data:J,margin:{top:5,right:30,left:20,bottom:5},children:[Object(a.jsx)(R.j,{dataKey:"data"}),Object(a.jsx)(R.k,{}),Object(a.jsx)(R.e,{strokeDasharray:"3 3"}),Object(a.jsx)(R.i,{}),Object(a.jsx)(R.g,{}),Object(a.jsx)(R.a,{type:"monotone",name:E[l].description,dataKey:"value",stroke:d.a[900],fill:d.a[700]})]})}),Object(a.jsx)(p.a,{item:!0,xs:12,style:{marginTop:"24px"},children:Object(a.jsx)(S.a,{value:A,min:B,max:G,valueLabelDisplay:"on",onChange:function(e,i){Array.isArray(i)&&y(i)},ValueLabelComponent:U,valueLabelFormat:function(e){return M&&M.length?_()(M[e].data).format("DD.MM.YYYY"):e}})})]})]})}),Object(a.jsxs)("div",{className:e.footer,children:["Fonte dati:"," ",Object(a.jsx)("a",{href:"https://github.com/pcm-dpc/COVID-19",target:"_new",children:"Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile"})]})]})},L=t(8),V=t(25),K=t(493),G=t(507),H=t(492),W=t(511),J=t(103),Z=t(496),$=t(497),q=t(108),Q=t(498),X=t(105),ee=t(106),ie=t(104),te=t(494),ae=t(495),ne=[],oe=[],ce=[],re=function(){return A.a.get("https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json").then((function(e){return e.data})).then((function(e){var i=[];return e.data.forEach((function(e){var t={index:e.index,area:e.area,dosiSomministrate:e.dosi_somministrate,dosiConsegnate:e.dosi_consegnate,percentualeSomministrazione:e.percentuale_somministrazione,ultimoAggiornamento:e.ultimo_aggiornamento};i.push(t)})),i})).then((function(e){return ne=e}))},se=function(){return A.a.get("https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-summary-latest.json").then((function(e){return e.data})).then((function(e){var i=[];return e.data.forEach((function(e){var t={index:e.index,area:e.area,dataSomministrazione:e.data_somministrazione,totale:e.totale,sessoMaschile:e.sesso_maschile,sessoFemminile:e.sesso_femminile,categoriaOperatoriSanitariSociosanitari:e.categoria_operatori_sanitari_sociosanitari,categoriaPersonaleNonSanitario:e.categoria_personale_non_sanitario,categoriaOspitiRsa:e.categoria_ospiti_rsa,categoriaPersonaleScolastico:e.categoria_personale_scolastico,categoriaSoggettiFragili:e.categoria_soggetti_fragili,categoriaForzeArmate:e.categoria_forze_armate,categoriaAltro:e.categoria_altro,categoriaUnder50:e.categoria_under50||0,categoria5059:e.categoria_50_59||0,categoria6069:e.categoria_60_69,categoria7079:e.categoria_70_79,categoriaOver80:e.categoria_over80,primaDose:e.prima_dose,secondaDose:e.seconda_dose};i.push(t)})),i})).then((function(e){return oe=e}))},le=function(){return A.a.get("https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/consegne-vaccini-latest.json").then((function(e){return e.data})).then((function(e){var i=[];return e.data.forEach((function(e){var t={index:e.index,area:e.area,fornitore:e.fornitore.replace("Pfizer/BioNTech","Pfizer").replace("(AstraZeneca)",""),dataConsegna:e.data_consegna,numeroDosi:e.numero_dosi};i.push(t)})),i})).then((function(e){return ce=e}))},de=t(456),me=Object(D.a)((function(e){return{paper:{padding:e.spacing(1),minHeight:"80px"},title:{color:J.a[500]},paperContent:{display:"flex",flexDirection:"row",alignItems:"center"},value:{flexGrow:1,textAlign:"right",fontSize:"1.7rem",fontWeight:"bold"},addendum:{fontSize:"1.3rem"},bigIcon:{fontSize:"400%"}}})),ue=function(e){var i=e.title,t=e.value,n=e.icon,o=e.percent,c=e.delta,r=me();return Object(a.jsxs)(de.a,{className:r.paper,children:[Object(a.jsx)(z.a,{variant:"h6",className:r.title,children:Object(a.jsx)("strong",{children:i})}),Object(a.jsxs)("div",{className:r.paperContent,children:[n||Object(a.jsx)("span",{children:"\xa0"}),Object(a.jsxs)("span",{className:r.value,children:[(new Intl.NumberFormat).format(t),o?Object(a.jsx)("span",{className:r.addendum,children:" (".concat(o.toFixed(1),"%)")}):"",c?Object(a.jsx)("span",{className:r.addendum,children:" (".concat(c>0?"+":"").concat(Intl.NumberFormat().format(c),")")}):""]})]})]})},je=Object(D.a)((function(e){return{container:{padding:e.spacing(2,3)},buttons:{textAlign:"center"},lastUpdate:{textAlign:"right",padding:e.spacing(2)},bigIcon:{fontSize:"400%"},title:{color:J.a[500]},footer:{textAlign:"center",padding:e.spacing(2,0),backgroundColor:"#c0c0c0"},mb2:{marginBottom:e.spacing(2)}}})),ge=Object(L.a)((function(e){return{root:{color:e.palette.primary.main,"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.light}},padding:e.spacing(.75,2)},selected:{}}}),{withTheme:!0})(H.a),ve=function(){var e=je(),i=Object(n.useState)(ne),t=Object(g.a)(i,2),o=t[0],c=t[1],r=Object(n.useState)(0),s=Object(g.a)(r,2),l=s[0],m=s[1],u=Object(n.useState)(0),j=Object(g.a)(u,2),v=j[0],O=j[1],h=Object(n.useState)("values"),x=Object(g.a)(h,2),f=x[0],S=x[1],D=Object(n.useState)({}),C=Object(g.a)(D,2),N=C[0],A=C[1],y=Object(n.useState)([]),M=Object(g.a)(y,2),k=M[0],F=M[1],T=Object(n.useState)([]),I=Object(g.a)(T,2),Y=I[0],E=I[1],U=Object(V.a)(),B=Object(K.a)(U.breakpoints.down("xs")),L=Object(K.a)(U.breakpoints.down("sm")),H=Object(n.useCallback)((function(){var e={};w.forEach((function(i){e[i.abbreviazione]=i.denominazioneRegione})),A(e)}),[]);Object(n.useEffect)((function(){H(),re().then((function(e){c(e);var i=0,t=0;e.forEach((function(e){i+=e.dosiConsegnate,t+=e.dosiSomministrate})),m(i),O(t)})),se().then((function(){F(function(){var e={};return oe.forEach((function(i){if(e[i.area]){var t=e[i.area];t.categoriaOperatoriSanitariSociosanitari+=i.categoriaOperatoriSanitariSociosanitari,t.categoriaOspitiRsa+=i.categoriaOspitiRsa,t.categoriaUnder50+=i.categoriaUnder50,t.categoria5059+=i.categoria5059,t.categoria6069+=i.categoria6069,t.categoria7079+=i.categoria7079,t.categoriaOver80+=i.categoriaOver80,t.categoriaPersonaleNonSanitario+=i.categoriaPersonaleNonSanitario,t.categoriaPersonaleScolastico+=i.categoriaPersonaleScolastico,t.categoriaSoggettiFragili+=i.categoriaSoggettiFragili,t.categoriaForzeArmate+=i.categoriaForzeArmate,t.categoriaAltro+=i.categoriaAltro,t.primaDose+=i.primaDose,t.secondaDose+=i.secondaDose,t.sessoFemminile+=i.sessoFemminile,t.sessoMaschile+=i.sessoMaschile,t.totale+=i.totale}else e[i.area]=Object(P.a)(Object(P.a)({},i),{},{dataSomministrazione:void 0})})),Object.values(e).sort((function(e,i){return e.area>i.area?1:-1}))}())})),le().then((function(){E(function(){var e={};return ce.forEach((function(i){e[i.fornitore]?e[i.fornitore].numeroDosi+=i.numeroDosi:e[i.fornitore]=Object(P.a)(Object(P.a)({},i),{},{index:0,dataConsegna:"",area:""})})),Object.values(e)}())}))}),[H]);var J=Object(n.useMemo)((function(){return o.sort((function(e,i){return e.area.localeCompare(i.area)})).map((function(e){return{regione:N[e.area]||e.area,"Dosi consegnate":e.dosiConsegnate,"Dosi somministrate":e.dosiSomministrate,"Percentuale somministrazioni":e.percentualeSomministrazione}}))}),[o,N]),de=Object(n.useMemo)((function(){return k.map((function(e){return Object(P.a)({regione:N[e.area]||e.area},e)}))}),[k,N]),me=Object(n.useMemo)((function(){return Y.sort((function(e,i){return e.numeroDosi<i.numeroDosi?1:-1}))}),[Y]),ve=Object(n.useMemo)((function(){var e;return o.forEach((function(i){var t=_()(i.ultimoAggiornamento);e&&!e.isBefore(t)||(e=t)})),e}),[o]),be=function(e,i,t,n,o){return f===e?Object(a.jsx)(R.c,{dataKey:t,name:i,stackId:o,fill:n,stroke:n}):null};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(b.a,{maxWidth:"xl",className:e.container,children:[Object(a.jsxs)(p.a,{container:!0,spacing:2,className:e.mb2,children:[Object(a.jsx)(G.a,{mdDown:!0,children:Object(a.jsx)(p.a,{item:!0,xs:12,sm:6,md:6,lg:3})}),Object(a.jsx)(p.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(a.jsx)(ue,{title:"Consegnati",value:l,icon:Object(a.jsx)(te.a,{className:e.bigIcon})})}),Object(a.jsx)(p.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(a.jsx)(ue,{title:"Somministrati",value:v,icon:Object(a.jsx)(ae.a,{className:e.bigIcon}),percent:0===l?0:100*v/l})}),Object(a.jsx)(G.a,{mdDown:!0,children:Object(a.jsx)(p.a,{item:!0,xs:12,sm:6,md:6,lg:3})})]}),Object(a.jsxs)(p.a,{container:!0,spacing:2,children:[Object(a.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(z.a,{variant:"h6",className:e.title,children:Object(a.jsx)("strong",{children:"Dati per regione"})})}),Object(a.jsx)(G.a,{xsDown:!0,children:Object(a.jsxs)(p.a,{item:!0,sm:6,className:e.lastUpdate,children:["Ultimo aggiornamento: ",ve?ve.format("DD/MM/YYYY"):""]})}),Object(a.jsx)(p.a,{item:!0,sm:12,children:Object(a.jsx)("div",{className:e.buttons,children:Object(a.jsxs)(W.a,{size:"medium",value:f,exclusive:!0,onChange:function(e,i){S(i)},children:[Object(a.jsx)(ge,{value:"values",children:"Cons./som."}),Object(a.jsx)(ge,{value:"percent",children:"Sommin. (%)"}),Object(a.jsx)(ge,{value:"type",children:"Categoria"}),Object(a.jsx)(ge,{value:"sex",children:"Sesso"}),Object(a.jsx)(ge,{value:"dose",children:"Dose"}),Object(a.jsx)(ge,{value:"supplier",children:"Fornitore"})]})})})]}),Object(a.jsx)(R.h,{width:"100%",height:B?500:L?600:700,children:Object(a.jsxs)(R.d,{data:"type"===f||"sex"===f||"dose"===f?de:"supplier"===f?me:J,margin:{top:5,right:30,left:20,bottom:5},barGap:B?-3:L?-7:-15,children:[Object(a.jsx)(R.j,{dataKey:"supplier"===f?"fornitore":"regione",angle:-60,textAnchor:"end",height:130,interval:0}),Object(a.jsx)(R.k,{width:"percent"===f?30:70}),Object(a.jsx)(R.e,{strokeDasharray:"3 3"}),Object(a.jsx)(R.i,{}),Object(a.jsx)(R.g,{}),"values"===f?Object(a.jsx)(R.c,{dataKey:"Dosi consegnate",stackId:"b",fill:d.a[700],stroke:d.a[900]}):null,"values"===f?Object(a.jsx)(R.c,{dataKey:"Dosi somministrate",stackId:"a",fill:d.a[400],stroke:d.a[600]}):null,"percent"===f?Object(a.jsx)(R.c,{dataKey:"Percentuale somministrazioni",fill:Z.a[700],stroke:Z.a[900],children:L?null:Object(a.jsx)(R.f,{dataKey:"Percentuale somministrazioni",position:"top",formatter:function(e){return"".concat(Number.parseFloat(e).toFixed(1),"%")}})}):null,be("type","Operatori sanitari","categoriaOperatoriSanitariSociosanitari",$.a[700],"a"),be("type","Ospiti RSA","categoriaOspitiRsa",$.a[600],"a"),be("type","Personale non sanitario","categoriaPersonaleNonSanitario",$.a[500],"a"),be("type","Personale scolastico","categoriaPersonaleScolastico",$.a[400],"a"),be("type","Soggetti fragili","categoriaSoggettiFragili",$.a[300],"a"),be("type","Forze armate","categoriaForzeArmate",$.a[200],"a"),be("type","Altro","categoriaAltro",$.a[100],"a"),be("type","Under 50","categoriaUnder50",q.a[200],"a"),be("type","50-59 anni","categoria5059",q.a[300],"a"),be("type","60-69 anni","categoria6069",q.a[400],"a"),be("type","70-79 anni","categoria7079",q.a[500],"a"),be("type","Over 80","categoriaOver80",q.a[600],"a"),"sex"===f?Object(a.jsx)(R.c,{dataKey:"sessoMaschile",name:"Maschi",stackId:"a",fill:Q.a[400],stroke:Q.a[600]}):null,"sex"===f?Object(a.jsx)(R.c,{dataKey:"sessoFemminile",name:"Femmine",stackId:"a",fill:X.a[300],stroke:X.a[500]}):null,"dose"===f?Object(a.jsx)(R.c,{dataKey:"primaDose",name:"Prima dose",stackId:"a",fill:ee.a[700],stroke:ee.a[900]}):null,"dose"===f?Object(a.jsx)(R.c,{dataKey:"secondaDose",name:"Seconda dose",stackId:"a",fill:ee.a[400],stroke:ee.a[600]}):null,be("supplier","Dosi consegnate","numeroDosi",ie.a[600],"a")]})})]}),Object(a.jsxs)("div",{className:e.footer,children:["Fonte dati:"," ",Object(a.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini",target:"_new",children:"Commissario straordinario per l'emergenza Covid-19"})]})]})},be=t(499),pe=t(500),Oe=t(501),he=t(502),xe=Object(D.a)((function(){return{title:{display:"flex",flexDirection:"column",flexGrow:1},subtitle:{lineHeight:"normal"},github:{color:"white"},link:{color:"white"}}})),fe=function(e){var i=e.title,t=e.subtitle,o=e.linkName,c=e.link,r=xe(),s=Object(j.f)(),l=Object(n.useCallback)((function(){window.open("https://github.com/ermannos/covid-19-italy","_new")}),[]);return Object(a.jsx)(be.a,{position:"static",children:Object(a.jsxs)(pe.a,{children:[Object(a.jsxs)("div",{className:r.title,children:[Object(a.jsx)(z.a,{variant:"h6",children:i}),Object(a.jsx)(z.a,{variant:"overline",className:r.subtitle,children:t})]}),Object(a.jsx)(f.a,{className:r.link,color:"inherit",onClick:function(){s.push(c)},children:o}),Object(a.jsx)(Oe.a,{className:r.github,onClick:l,title:"GitHub repository",children:Object(a.jsx)(he.a,{})})]})})},ze=Object(D.a)((function(e){return{container:{minHeight:600,padding:e.spacing(2,3)},sectionTitle:{marginBottom:e.spacing(2)},section:{marginBottom:e.spacing(4)},subtitle:{fontSize:"60%"},footer:{textAlign:"center",padding:e.spacing(2,0),backgroundColor:"#c0c0c0"}}})),Se=function(){var e=ze(),i=Number.parseInt(Object(j.g)().code,10),t=Object(n.useState)([]),o=Object(g.a)(t,2),c=o[0],r=o[1],s=Object(n.useState)([]),l=Object(g.a)(s,2),d=l[0],m=l[1],u=Object(n.useState)([]),v=Object(g.a)(u,2),O=v[0],h=v[1],x=Object(n.useMemo)((function(){return w.find((function(e){return e.codiceRegione===i}))}),[i]);Object(n.useEffect)((function(){I().then((function(){r(T(i))})),se().then((function(){var e;m((e=(null===x||void 0===x?void 0:x.abbreviazione)||"?",oe.filter((function(i){return i.area===e})).sort((function(e,i){return e.dataSomministrazione>i.dataSomministrazione?1:-1}))))})),le().then((function(){var e;h((e=(null===x||void 0===x?void 0:x.abbreviazione)||"?",ce.filter((function(i){return i.area===e})).sort((function(e,i){return e.dataConsegna>i.dataConsegna?1:-1}))))}))}),[i,x]);var f=c.length?c[c.length-2]:void 0,S=c.length?c[c.length-1]:void 0,D=d.length?d[d.length-2]:void 0,R=d.length?d[d.length-1]:void 0,C=O.length>=4?O[O.length-4]:void 0,P=O.length>=3?O[O.length-3]:void 0,N=O.length>=2?O[O.length-2]:void 0,A=O.length?O[O.length-1]:void 0;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(fe,{title:"Covid-19 Italia",subtitle:"Focus ".concat(null===x||void 0===x?void 0:x.denominazioneRegione),linkName:"Home",link:"/"}),Object(a.jsxs)(b.a,{maxWidth:"xl",className:e.container,children:[Object(a.jsxs)(z.a,{variant:"h4",className:e.sectionTitle,children:["Situazione epidemia"," ",Object(a.jsx)("span",{className:e.subtitle,children:S?" al ".concat(_()(S.data).format("DD/MM/YYYY")):""})]}),Object(a.jsxs)(p.a,{container:!0,spacing:2,className:e.section,children:[Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Pazienti degenti",value:(null===S||void 0===S?void 0:S.ricoveratiConSintomi)||0,delta:((null===S||void 0===S?void 0:S.ricoveratiConSintomi)||0)-((null===f||void 0===f?void 0:f.ricoveratiConSintomi)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Pazienti intensiva",value:(null===S||void 0===S?void 0:S.terapiaIntensiva)||0,delta:((null===S||void 0===S?void 0:S.terapiaIntensiva)||0)-((null===f||void 0===f?void 0:f.terapiaIntensiva)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Pazienti deceduti",value:(null===S||void 0===S?void 0:S.deceduti)||0,delta:((null===S||void 0===S?void 0:S.deceduti)||0)-((null===f||void 0===f?void 0:f.deceduti)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Tamponi effettuati",value:(null===S||void 0===S?void 0:S.tamponi)||0,delta:((null===S||void 0===S?void 0:S.tamponi)||0)-((null===f||void 0===f?void 0:f.tamponi)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Tamponi positivi",value:(null===S||void 0===S?void 0:S.nuoviPositivi)||0,percent:(null===S||void 0===S?void 0:S.positiviTamponi)||0})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Attualmente positivi",value:(null===S||void 0===S?void 0:S.totalePositivi)||0,delta:((null===S||void 0===S?void 0:S.totalePositivi)||0)-((null===f||void 0===f?void 0:f.totalePositivi)||0)})})]}),Object(a.jsxs)(z.a,{variant:"h4",className:e.sectionTitle,children:["Campagna vaccinale",Object(a.jsx)("span",{className:e.subtitle,children:S?" al ".concat(_()(null===R||void 0===R?void 0:R.dataSomministrazione).format("DD/MM/YYYY")):""})]}),Object(a.jsxs)(p.a,{container:!0,spacing:2,className:e.section,children:[Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Vaccini somministrati",value:(null===R||void 0===R?void 0:R.totale)||0,delta:((null===R||void 0===R?void 0:R.totale)||0)-((null===D||void 0===D?void 0:D.totale)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Somm. prima dose",value:(null===R||void 0===R?void 0:R.primaDose)||0,delta:((null===R||void 0===R?void 0:R.primaDose)||0)-((null===D||void 0===D?void 0:D.primaDose)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Somm. seconda dose",value:(null===R||void 0===R?void 0:R.secondaDose)||0,delta:((null===R||void 0===R?void 0:R.secondaDose)||0)-((null===D||void 0===D?void 0:D.secondaDose)||0)})})]}),Object(a.jsxs)(p.a,{container:!0,spacing:2,className:e.section,children:[Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Operatori sanitari",value:(null===R||void 0===R?void 0:R.categoriaOperatoriSanitariSociosanitari)||0,delta:((null===R||void 0===R?void 0:R.categoriaOperatoriSanitariSociosanitari)||0)-((null===D||void 0===D?void 0:D.categoriaOperatoriSanitariSociosanitari)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Ospiti RSA",value:(null===R||void 0===R?void 0:R.categoriaOspitiRsa)||0,delta:((null===R||void 0===R?void 0:R.categoriaOspitiRsa)||0)-((null===D||void 0===D?void 0:D.categoriaOspitiRsa)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Under 50",value:(null===R||void 0===R?void 0:R.categoriaUnder50)||0,delta:((null===R||void 0===R?void 0:R.categoriaUnder50)||0)-((null===D||void 0===D?void 0:D.categoriaUnder50)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"50-59 anni",value:(null===R||void 0===R?void 0:R.categoria5059)||0,delta:((null===R||void 0===R?void 0:R.categoria5059)||0)-((null===D||void 0===D?void 0:D.categoria5059)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"60-69 anni",value:(null===R||void 0===R?void 0:R.categoria6069)||0,delta:((null===R||void 0===R?void 0:R.categoria6069)||0)-((null===D||void 0===D?void 0:D.categoria6069)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"70-79 anni",value:(null===R||void 0===R?void 0:R.categoria7079)||0,delta:((null===R||void 0===R?void 0:R.categoria7079)||0)-((null===D||void 0===D?void 0:D.categoria7079)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Over 80",value:(null===R||void 0===R?void 0:R.categoriaOver80)||0,delta:((null===R||void 0===R?void 0:R.categoriaOver80)||0)-((null===D||void 0===D?void 0:D.categoriaOver80)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Pers. non sanitario",value:(null===R||void 0===R?void 0:R.categoriaPersonaleNonSanitario)||0,delta:((null===R||void 0===R?void 0:R.categoriaPersonaleNonSanitario)||0)-((null===D||void 0===D?void 0:D.categoriaPersonaleNonSanitario)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Pers. scolastico",value:(null===R||void 0===R?void 0:R.categoriaPersonaleScolastico)||0,delta:((null===R||void 0===R?void 0:R.categoriaPersonaleScolastico)||0)-((null===D||void 0===D?void 0:D.categoriaPersonaleScolastico)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Sogg. fragili",value:(null===R||void 0===R?void 0:R.categoriaSoggettiFragili)||0,delta:((null===R||void 0===R?void 0:R.categoriaSoggettiFragili)||0)-((null===D||void 0===D?void 0:D.categoriaSoggettiFragili)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Forze armate",value:(null===R||void 0===R?void 0:R.categoriaForzeArmate)||0,delta:((null===R||void 0===R?void 0:R.categoriaForzeArmate)||0)-((null===D||void 0===D?void 0:D.categoriaForzeArmate)||0)})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:"Altro",value:(null===R||void 0===R?void 0:R.categoriaAltro)||0,delta:((null===R||void 0===R?void 0:R.categoriaAltro)||0)-((null===D||void 0===D?void 0:D.categoriaAltro)||0)})})]}),Object(a.jsx)(z.a,{variant:"h4",className:e.sectionTitle,children:"Ultime consegne vaccini"}),Object(a.jsxs)(p.a,{container:!0,spacing:2,className:e.section,children:[Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:C?"".concat(C.fornitore," - ").concat(_()(C.dataConsegna).format("DD MMM")):"",value:(null===P||void 0===P?void 0:P.numeroDosi)||0})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:P?"".concat(P.fornitore," - ").concat(_()(P.dataConsegna).format("DD MMM")):"",value:(null===P||void 0===P?void 0:P.numeroDosi)||0})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:N?"".concat(N.fornitore," - ").concat(_()(N.dataConsegna).format("DD MMM")):"",value:(null===N||void 0===N?void 0:N.numeroDosi)||0})}),Object(a.jsx)(p.a,{item:!0,md:3,sm:4,xs:12,children:Object(a.jsx)(ue,{title:A?"".concat(A.fornitore," - ").concat(_()(A.dataConsegna).format("DD MMM")):"",value:(null===A||void 0===A?void 0:A.numeroDosi)||0})})]})]}),Object(a.jsxs)("div",{className:e.footer,children:["Fonti dati:"," ",Object(a.jsx)("a",{href:"https://github.com/pcm-dpc/COVID-19",target:"_new",children:"Presidenza del Consiglio dei Ministri - Dipartimento della Protezione Civile"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini",target:"_new",children:"Commissario straordinario per l'emergenza Covid-19"})]})]})},De=(t(453),function(){return Object(a.jsx)(u.a,{basename:"/covid-19-italy",children:Object(a.jsxs)(j.c,{children:[Object(a.jsxs)(j.a,{exact:!0,path:["/"],children:[Object(a.jsx)(fe,{title:"Covid-19 Italia",subtitle:"Andamento epidemia",linkName:"Vaccini",link:"/vaccini"}),Object(a.jsx)(B,{})]}),Object(a.jsxs)(j.a,{path:["/vaccini"],children:[Object(a.jsx)(fe,{title:"Covid-19 Italia",subtitle:"Andamento campagna vaccinale",linkName:"Home",link:"/"}),Object(a.jsx)(ve,{})]}),Object(a.jsx)(j.a,{path:["/regione/:code"],children:Object(a.jsx)(Se,{})})]})})}),Re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,512)).then((function(i){var t=i.getCLS,a=i.getFID,n=i.getFCP,o=i.getLCP,c=i.getTTFB;t(e),a(e),n(e),o(e),c(e)}))},Ce={primary:{main:d.a[900]},secondary:m.a},_e=Object(s.a)({palette:Ce});r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(l.a,{theme:_e,children:Object(a.jsx)(De,{})})}),document.getElementById("root")),Re()}},[[454,1,2]]]);
//# sourceMappingURL=main.19fe7a9c.chunk.js.map