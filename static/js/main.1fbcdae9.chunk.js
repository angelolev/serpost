(this.webpackJsonpserpost=this.webpackJsonpserpost||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.f53ae75f.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(14),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=a(8),p=a.n(d),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__logo"},r.a.createElement("img",{src:p.a,alt:""})),r.a.createElement("div",{className:"nav__title"},r.a.createElement("p",null,"Serpost")))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("select",{name:"country",id:"country"},r.a.createElement("option",{value:"",selected:!0},"2019"),r.a.createElement("option",{value:""},"2018"),r.a.createElement("option",{value:""},"2017"),r.a.createElement("option",{value:""},"2016"),r.a.createElement("option",{value:""},"2015"),r.a.createElement("option",{value:""},"2014"),r.a.createElement("option",{value:""},"2013"))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("h2",null,"Datos de b\xfasqueda"),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group year"},r.a.createElement("label",{htmlFor:"country"},"A\xf1o del env\xedo"),r.a.createElement(E,null)),r.a.createElement("div",{className:"form-group tracking"},r.a.createElement("label",{htmlFor:"tracking"},"Nro de tracking"),r.a.createElement("input",{type:"text",className:"form-input"})),r.a.createElement("div",{className:"form-group cta"},r.a.createElement("button",{id:"btn-search"},"Buscar")))}}]),t}(n.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-results"},r.a.createElement("h2",null,"Resultados de b\xfasqueda"),r.a.createElement("hr",null),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},"Origen"),r.a.createElement("input",{type:"text",className:"item__description",value:"",readOnly:!0})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},"Estado del Env\xedo"),r.a.createElement("input",{type:"text",className:"item__description",value:"",readOnly:!0})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},"Nro Tracking"),r.a.createElement("input",{type:"text",className:"item__description",value:"",readOnly:!0})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},"Destino"),r.a.createElement("input",{type:"text",className:"item__description",value:"",readOnly:!0})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},"Tipo de Env\xedo"),r.a.createElement("input",{type:"text",className:"item__description",value:"",readOnly:!0})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},"Nro de Aviso"),r.a.createElement("input",{type:"text",className:"item__description",value:"",readOnly:!0})),r.a.createElement("div",{className:"item"},r.a.createElement("p",{className:"item__feature"},"Observaci\xf3n"),r.a.createElement("input",{type:"text",className:"item__description",value:"",readOnly:!0})))}}]),t}(n.Component);a(15);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(v,null),r.a.createElement("div",{className:"colorMode"},r.a.createElement("i",{className:"icon icon-moon"}," ",r.a.createElement("span",null,"Color Mode")))),r.a.createElement("div",{className:"content"},r.a.createElement(f,null),r.a.createElement(h,null)))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/serpost",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/serpost","/service-worker.js");b?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.1fbcdae9.chunk.js.map