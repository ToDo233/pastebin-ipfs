var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,l)=>{for(var o in l||(l={}))n.call(l,o)&&a(e,o,l[o]);if(t)for(var o of t(l))r.call(l,o)&&a(e,o,l[o]);return e};"undefined"!=typeof require&&require;export function __vite_legacy_guard(){import("data:text/javascript,")}import{m as o,R as i,j as s,A as u,T as d,I as c,M as p,a as m,D as f,L as h,b as g,n as y,c as b,d as v,e as w,f as x,u as P,r as S,P as B,C as O,g as j,_ as k,p as T,S as C,B as F,F as I,h as L,i as N,k as V,l as A}from"./vendor.59a4aa37.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const W=o((e=>({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})));function _(){const e=W(),[t,n]=i.useState(!1);return s("div",{className:e.root},s(u,{position:"static"},s(d,null,s(c,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:()=>n(!0)},s(p,null)),s(m,{variant:"h6",className:e.title},"Pastebin/IO")),s(f,{anchor:"left",open:t,onClose:()=>n(!1)},s(h,null,["Publish","Gallery","Cid","API Tests","API Docs"].map(((e,t)=>s(g,{button:!0,key:e,css:{width:"15rem"},onClick:()=>y("Publish"!==e?e.replace(" ","-").toLowerCase():"/")},s(b,null,s(t%2==0?v:w,null)),s(x,{primary:e}))))))))}function q(){const{handleSubmit:e,control:t,watch:n}=P(),[r,a]=S.exports.useState(""),o=n("encrypt",!0);return s(N,{maxWidth:"md"},s("div",{css:{position:"fixed",right:"60px",bottom:"60px"}},s(I,{color:"primary","aria-label":"add"},s(L,null))),s(B,null,s("div",{css:{display:"flex",margin:"1.5rem",marginLeft:"4rem",paddingTop:"1rem",paddingBottom:"1.5rem",width:"100%"}},s("form",{onSubmit:e((async e=>{var t;console.log(e);const n=new FormData;n.append("author",e.author),n.append("public",e.public),n.append("filename",null!=(t=e.filename)?t:"plain.txt");const a=new Blob([r],{type:"text/plain"});n.append("file",a);const l=await fetch("http://127.0.0.1:3939/api/v1/upload",{method:"POST",body:n,mode:"cors"}),o=await l.json();console.log(o)}))},s("div",{css:{width:"300px"}},s(O,{name:"filename",control:t,defaultValue:"",rules:{required:!0},render:({field:e})=>s(j,l({fullWidth:!0,label:"File name"},e))})),s("div",{css:{marginTop:"1rem",marginBottom:"1rem",minWidth:"800px"}},s(B,{variant:"outlined"},s(k,{value:r,onValueChange:e=>a(e),highlight:e=>T.exports.highlight(e,T.exports.languages.markup,"markup"),padding:14,tabSize:4,insertSpaces:!0,name:"code",placeholder:"Put something here..",style:{minHeight:"400px",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:13}}))),s("div",{css:{marginTop:"1rem",marginBottom:"1rem",width:"200px"}},s(O,{name:"author",control:t,defaultValue:"",render:({field:e})=>s(j,l({fullWidth:!0,label:"Author"},e))})),s("div",null,s(O,{name:"public",control:t,defaultValue:!0,render:({field:e})=>s(C,l({},e))}),"Show on gallery"),s("div",null,s(O,{name:"encrypt",control:t,defaultValue:!1,render:({field:e})=>s(C,l({},e))}),"Encrypt"),o&&s("div",{css:{marginTop:"1rem",marginBottom:"1rem",width:"200px"}},s(O,{name:"password",control:t,defaultValue:"",render:({field:e})=>s(j,l({fullWidth:!0,label:"Password"},e))})),s("div",{css:{marginTop:"1.5rem"}},s(F,{type:"submit",color:"primary",variant:"contained"},"Publish"))))))}function E(){return s("div",null,"dfsfsd")}function M(){return s("div",null,"dfsfsd")}function D(){return s("div",null,"dfsfsd")}function G(){return s("div",null,"dfsfsd")}const z=e=>s(q,null),R=e=>s(E,null),H=e=>s(M,null),K=e=>s(D,null),J=e=>s(G,null);function Q(){return s(V,null,s(z,{path:"/"}),s(R,{path:"/cid"}),s(H,{path:"/gallery"}),s(K,{path:"/api-tests"}),s(J,{path:"/api-docs"}))}function U(){return s(i.Fragment,null,s(_,null),s(Q,null))}A.render(s(i.StrictMode,null,s(U,null)),document.getElementById("root"));
