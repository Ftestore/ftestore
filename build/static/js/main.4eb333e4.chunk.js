(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),s=(a(23),a(6)),m=a(1);var o=a(13);function i(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),m=Object(o.a)(c,2),i=m[0],u=m[1];if(a){var E=new XMLHttpRequest;E.open("GET","https://myproj-f08a3.firebaseio.com/tses.json"),E.responseType="json",E.onload=function(){var e=E.response;console.log("res",e),l(!1);var t=[];for(var a in e)e[a].tsesElement?(console.log(e[a].tsesElement),t.push(r.a.createElement("li",{key:a}," ",r.a.createElement(s.b,{to:"/aaa"},e[a].tsesElement)))):e[a].imageSrc&&(console.log(e[a].imageSrc),e[a].orgon?t.push(r.a.createElement("li",{key:a}," ",r.a.createElement(s.b,{to:"/asd"},r.a.createElement("img",{style:{width:e[a].orgon+"px"},src:e[a].imageSrc})))):t.push(r.a.createElement("li",{key:a}," ",r.a.createElement(s.b,{to:"/ttt"},r.a.createElement("img",{src:e[a].imageSrc})))));u(t)},E.send()}return r.a.createElement("div",{className:"header-large"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,i)))}var u=function(){var e=Object(m.f)().id;return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("h1",null,e))};function E(){return r.a.createElement("div",null,"admin")}function p(){return r.a.createElement("div",null,"Dashboard")}c.a.render(r.a.createElement(s.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/dash"},r.a.createElement(p,null)),r.a.createElement(m.a,{path:"/admin"},r.a.createElement(E,null)),r.a.createElement(m.a,{path:"/:id",children:r.a.createElement(u,null)}),r.a.createElement(m.a,{path:"/",exact:!0},r.a.createElement(u,null)))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4eb333e4.chunk.js.map