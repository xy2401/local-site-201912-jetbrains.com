(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{"/EEy":function(t,e,o){var n=o("KI45");o("GkXk");var d=n(o("Am66")),i=o("zAHd"),p=n(o("6YT/"));d.default.domReady((function(){fetch("https://resources.jetbrains.com/storage/products/resharper/data/plugins_list.json").then((function(t){return t.json()})).then((function(t){return(0,i.render)(p.default,{node:".js-plugins_list"}).update({data:t})})).catch((function(t){return console.log(t)}))}))},409:function(t,e,o){o("ctTR"),t.exports=o("/EEy")},"6YT/":function(t,e,o){var n=o("NpQd"),d=function(t,e,o){var n,d=e.length,i=document.createElement("div");for(i.innerHTML=o;d-- >0;)e[d].parentNode.removeChild(e.pop());for(d=n=i.childNodes.length-1;n>=0;n--)e.push(i.childNodes[n]);if(++d,8==t.nodeType){if(!t.parentNode)throw"Can not insert child view into parent node. You need append your view first and then update.";for(;d-- >0;)t.parentNode.insertBefore(e[d],t)}else for(;d-- >0;)t.appendChild(e[d])};function i(){n.call(this);var t=this,e=document.createElement("div"),o=new n.Map;e.setAttribute("class","wt-row wt-row_size_l"),this.__update__={data:function(d){n.loop(t,e,o,p,d,{value:"id"})}},this.onUpdate=function(t){o.forEach((function(e){e.update(e.__state__),e.update(t),e.update(e.__state__)}))},this.nodes=[e]}function p(){n.call(this),this.__state__={};var t=this,e=document.createElement("div"),o=document.createElement("h3"),i=document.createTextNode(""),p=document.createTextNode(""),c=document.createElement("p"),s=[],f=document.createComment("if"),m={},y=document.createComment("if"),v={},C=document.createElement("div"),b=document.createComment("if"),x={},w=document.createComment("if"),E={},k=document.createComment("if"),N={},A=document.createComment("if"),T={};o.appendChild(i),o.appendChild(p),o.setAttribute("class","wt-h3"),c.setAttribute("class","wt-text-2"),C.setAttribute("class","wt-offset-top-12"),e.appendChild(o),e.appendChild(c),e.appendChild(f),e.appendChild(y),e.appendChild(C),e.appendChild(b),e.appendChild(w),e.appendChild(k),e.appendChild(A),e.setAttribute("class","wt-col-6 wt-offset-top-48"),this.__update__={id:function(e){i.textContent=e.plugin,d(c,s,e.description),n.cond(t,f,m,a,e.features),n.cond(t,y,v,r,e.notes),n.cond(t,b,x,u,e.compatibles),n.cond(t,w,E,_,e.license),n.cond(t,k,N,l,e.url),n.cond(t,A,T,h,e.feedback)},key:function(t){p.textContent=t}},this.onUpdate=function(t){m.ref&&m.ref.update(t),v.ref&&v.ref.update(t),x.ref&&x.ref.update(t),E.ref&&E.ref.update(t),N.ref&&N.ref.update(t),T.ref&&T.ref.update(t)},this.nodes=[e]}function a(){n.call(this);var t=this,e=document.createElement("div"),o=document.createElement("strong"),d=document.createElement("ul"),i=new n.Map;o.appendChild(document.createTextNode("Features: ")),d.setAttribute("class","wt-ul wt-text-2_flow"),e.appendChild(o),e.appendChild(d),e.setAttribute("class","wt-text-2 wt-text-2_flow"),this.__update__={id:function(e){n.loop(t,d,i,c,e.features,{value:"feature"})}},this.onUpdate=function(t){i.forEach((function(e){e.update(e.__state__),e.update(t),e.update(e.__state__)}))},this.nodes=[e]}function c(){n.call(this),this.__state__={};var t=document.createElement("li"),e=[];this.__update__={feature:function(o){d(t,e,o)}},this.nodes=[t]}function r(){n.call(this);var t=document.createElement("p"),e=document.createElement("strong"),o=document.createComment("unsafe"),i=[];e.appendChild(document.createTextNode("Note: ")),t.appendChild(e),t.appendChild(o),t.setAttribute("class","wt-text-2"),this.__update__={id:function(t){d(o,i,t.notes)}},this.nodes=[t]}function u(){n.call(this);var t=this,e=document.createElement("p"),o=document.createElement("strong"),d=document.createComment("for"),i=new n.Map;o.appendChild(document.createTextNode("Compatible ReSharper versions: ")),e.appendChild(o),e.appendChild(d),e.setAttribute("class","wt-text-2"),this.__update__={id:function(e){n.loop(t,d,i,s,e.compatibles,{key:"key",value:"version"})}},this.onUpdate=function(t){i.forEach((function(e){e.update(e.__state__),e.update(t),e.update(e.__state__)}))},this.nodes=[e]}function s(){n.call(this),this.__state__={};var t=document.createTextNode(""),e=document.createTextNode("");this.__update__={key:function(e){t.textContent=e>0?", ":""},version:function(t){e.textContent=t}},this.nodes=[t,e]}function _(){n.call(this);var t=document.createElement("p"),e=document.createElement("strong"),o=document.createTextNode("");e.appendChild(document.createTextNode("License type: ")),t.appendChild(e),t.appendChild(o),t.setAttribute("class","wt-text-2"),this.__update__={id:function(t){o.textContent=t.license}},this.nodes=[t]}function l(){n.call(this);var t=document.createElement("p"),e=document.createElement("strong"),o=document.createElement("a"),d=document.createTextNode("");e.appendChild(document.createTextNode("Home page: ")),o.appendChild(d),o.setAttribute("target","_blank"),o.setAttribute("class","wt-link"),t.appendChild(e),t.appendChild(o),t.setAttribute("class","wt-text-2"),this.__update__={id:function(t){d.textContent=t.url,o.setAttribute("href",t.url)}},this.nodes=[t]}function h(){n.call(this);var t=this,e=document.createElement("p"),o=document.createElement("strong"),d=document.createComment("for"),i=new n.Map;o.appendChild(document.createTextNode("Feedback: ")),e.appendChild(o),e.appendChild(d),e.setAttribute("class","wt-text-2"),this.__update__={id:function(e){n.loop(t,d,i,f,e.feedback,{key:"key",value:"item"})}},this.onUpdate=function(t){i.forEach((function(e){e.update(e.__state__),e.update(t),e.update(e.__state__)}))},this.nodes=[e]}function f(){n.call(this),this.__state__={};var t=document.createTextNode(""),e=document.createElement("a"),o=document.createTextNode("");e.appendChild(o),e.setAttribute("target","_blank"),e.setAttribute("class","wt-link"),this.__update__={key:function(e){t.textContent=e>0?", ":""},item:function(t){o.textContent=t.name,e.setAttribute("href",t.link)}},this.nodes=[t,e]}i.prototype=Object.create(n.prototype),i.prototype.constructor=i,i.pool=[],i.prototype.update=function(t){void 0!==t.data&&this.__update__.data(t.data),this.onUpdate(t)},p.prototype=Object.create(n.prototype),p.prototype.constructor=p,p.pool=[],p.prototype.update=function(t){void 0!==t.id&&void 0!==t.__index__&&this.__update__.id(t.id),void 0!==t.key&&this.__update__.key(t.key),this.onUpdate(t)},a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.pool=[],a.prototype.update=function(t){void 0!==t.id&&this.__update__.id(t.id),this.onUpdate(t)},c.prototype=Object.create(n.prototype),c.prototype.constructor=c,c.pool=[],c.prototype.update=function(t){void 0!==t.feature&&void 0!==t.__index__&&this.__update__.feature(t.feature)},r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.pool=[],r.prototype.update=function(t){void 0!==t.id&&this.__update__.id(t.id)},u.prototype=Object.create(n.prototype),u.prototype.constructor=u,u.pool=[],u.prototype.update=function(t){void 0!==t.id&&this.__update__.id(t.id),this.onUpdate(t)},s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.pool=[],s.prototype.update=function(t){void 0!==t.key&&void 0!==t.__index__&&this.__update__.key(t.key),void 0!==t.version&&void 0!==t.__index__&&this.__update__.version(t.version)},_.prototype=Object.create(n.prototype),_.prototype.constructor=_,_.pool=[],_.prototype.update=function(t){void 0!==t.id&&this.__update__.id(t.id)},l.prototype=Object.create(n.prototype),l.prototype.constructor=l,l.pool=[],l.prototype.update=function(t){void 0!==t.id&&this.__update__.id(t.id)},h.prototype=Object.create(n.prototype),h.prototype.constructor=h,h.pool=[],h.prototype.update=function(t){void 0!==t.id&&this.__update__.id(t.id),this.onUpdate(t)},f.prototype=Object.create(n.prototype),f.prototype.constructor=f,f.pool=[],f.prototype.update=function(t){void 0!==t.key&&void 0!==t.__index__&&this.__update__.key(t.key),void 0!==t.item&&void 0!==t.__index__&&this.__update__.item(t.item)},t.exports=i}},[[409,0]]]);
//# sourceMappingURL=list.entry.e28828563935f5d67bdb.js.map