(this.webpackJsonpserpost=this.webpackJsonpserpost||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.f53ae75f.svg"},21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(26),a(14)),i=a(15),s=a(19),m=a(16),u=a(20),d=a(17),E=a.n(d),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__logo"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("div",{className:"nav__title"},r.a.createElement("p",null,"Trackpe")))}}]),t}(n.Component),p=a(2),f=a(18),g=a.n(f),h=a(3),N=a.n(h);function b(e){var t=(new Date).getFullYear(),a=Object(n.useState)(""),c=Object(p.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)({isRegistered:!1}),s=Object(p.a)(i,2),m=(s[0],s[1]),u=Object(n.useState)(t.toString()),d=Object(p.a)(u,2),E=d[0],v=d[1],f=Object(n.useState)({origin:"",status:"",tracking:"",destiny:"",type:"",notice:"",notes:"",detail:[]}),h=Object(p.a)(f,2),b=h[0],w=h[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g.a.post("https://serpostapi20191121050851.azurewebsites.net/api/serpost",{Anio:E,Filtro:0,Tracking:o}).then((function(e){w({origin:e.data.origen,status:e.data.estadoEnvio,tracking:e.data.nroTracking,destiny:e.data.destino,type:e.data.tipoEnvio,notice:"",notes:e.data.observacion,detail:e.data.detalle}),N.a.fire({title:"Encontrado!",text:"Aqu\xed esta la info de tu paquete",icon:"success",confirmButtonText:"Ok"}),e.data.detalle.length&&m({isRegistered:!0})})).catch((function(e){console.log(e.response),N.a.fire({title:"Error!",text:"Aun no tenemos data de tu paquete",icon:"error",confirmButtonText:"Ok"})}))}},r.a.createElement("h2",null,"Datos de b\xfasqueda"),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group year"},r.a.createElement("label",{htmlFor:"country"},"A\xf1o del env\xedo"),r.a.createElement("select",{name:"country",id:"country",value:E,onChange:function(e){return v(e.target.value)}},r.a.createElement("option",{value:"2019",defaultValue:!0},"2019"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"))),r.a.createElement("div",{className:"form-group tracking"},r.a.createElement("label",{htmlFor:"tracking"},"Nro de tracking"),r.a.createElement("input",{type:"text",className:"form-input",value:o,onChange:function(e){return l(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group cta"},r.a.createElement("button",{id:"btn-search"},"Buscar"))),r.a.createElement("div",{className:"search-results"},r.a.createElement("h2",null,"Resultados de b\xfasqueda"),r.a.createElement("hr",null),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},r.a.createElement("i",{className:"icon icon-origen"}),"Origen"),r.a.createElement("textarea",{value:b.origin,readOnly:!0,rows:"1"})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},r.a.createElement("i",{className:"icon icon-estado"}),"Estado del Env\xedo"),r.a.createElement("textarea",{value:b.status,readOnly:!0,rows:"1"})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},r.a.createElement("i",{className:"icon icon-tracking"}),"Nro Tracking"),r.a.createElement("textarea",{value:b.tracking,readOnly:!0,rows:"1"})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},r.a.createElement("i",{className:"icon icon-destino"}),"Destino"),r.a.createElement("textarea",{value:b.destiny,readOnly:!0,rows:"1"})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},r.a.createElement("i",{className:"icon icon-tipo"}),"Tipo de Env\xedo"),r.a.createElement("textarea",{value:b.type,readOnly:!0,rows:"1"})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},r.a.createElement("i",{className:"icon icon-aviso"}),"Nro de Aviso"),r.a.createElement("textarea",{value:b.notice,readOnly:!0,rows:"1"})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},r.a.createElement("i",{className:"icon icon-observacion"}),"Observaci\xf3n"),r.a.createElement("textarea",{value:b.observacion,readOnly:!0,rows:"2"}))),r.a.createElement("div",{className:"history"},r.a.createElement("h2",null,"Historial"),r.a.createElement("hr",null),b.detail.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"history__date"},r.a.createElement("p",null,r.a.createElement("i",{className:"icon icon-check"}),e.fecha)),r.a.createElement("div",{className:"history__description"},r.a.createElement("textarea",{value:e.descripcion,readOnly:!0})))}))))}a(44);var w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(v,null),r.a.createElement("div",{className:"colorMode"},r.a.createElement("i",{className:"icon icon-moon"}," ",r.a.createElement("span",null,"Color Mode")))),r.a.createElement("div",{className:"content"},r.a.createElement(b,null)))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/serpost",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/serpost","/service-worker.js");w?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.672d1307.chunk.js.map