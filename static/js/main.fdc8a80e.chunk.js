(this.webpackJsonpfoodpin=this.webpackJsonpfoodpin||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/sprite.fac7acb2.svg"},,,function(e,t,a){e.exports=a(39)},,,,,,,,,,function(e,t,a){},function(e,t,a){var i={"./img-0.png":31,"./img-1.png":32,"./img-2.png":33,"./img-3.png":34,"./img-4.png":35,"./img-5.png":36,"./img-6.png":37,"./img-7.png":38};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=30},function(e,t,a){e.exports=a.p+"static/media/img-0.ad5d802e.png"},function(e,t,a){e.exports=a.p+"static/media/img-1.8a2b0947.png"},function(e,t,a){e.exports=a.p+"static/media/img-2.38e13b79.png"},function(e,t,a){e.exports=a.p+"static/media/img-3.334336d0.png"},function(e,t,a){e.exports=a.p+"static/media/img-4.555978c9.png"},function(e,t,a){e.exports=a.p+"static/media/img-5.adf7c805.png"},function(e,t,a){e.exports=a.p+"static/media/img-6.41e99f2c.png"},function(e,t,a){e.exports=a.p+"static/media/img-7.0c4c72a9.png"},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(5),c=a.n(r),o=a(4),s=a(6),l=a(12),m=(a(29),a(13)),p=a(14),d=a(17),u=a(15),h=a(18),f=function e(t){return{type:e,result:t.target.id}},g=function e(){return{type:e}},b=function e(){return{type:e}},v=function e(){return{type:e}},E=function e(t){return{type:e,val:t.target.id}},N=function e(){return{type:e}},w=function e(){return{type:e}},_=function e(){return{type:e}},O=a(16),k=a.n(O),y=function(e){return n.a.createElement("svg",{id:"".concat(e.id),className:"".concat(e.name),style:{fill:"".concat(e.fill)}},n.a.createElement("use",{id:"".concat(e.id),xlinkHref:"".concat(k.a,"#").concat(e.name)}))},j=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.props.scrollHandler),window.addEventListener("resize",this.props.resizeHandler)}},{key:"render",value:function(){var e=a(30)("./img-".concat(this.props.i,".png"));return n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"sidebar",style:{display:this.props.showSidebar?"flex":"none",animationName:this.props.openMenu?"":"fadeMenu"},onClick:this.props.sidebarCloseHandler},n.a.createElement("nav",{className:"sidebar_navigation",id:"menu",style:{animationName:this.props.openMenu?"sidebarOpen":"sidebarClose"}},n.a.createElement(y,{id:"sidebar_navigation",name:"icon-location-shopping"}),n.a.createElement("p",{id:"menu",className:"sidebar_navigation-item"},"breakfast"),n.a.createElement("p",{id:"menu",className:"sidebar_navigation-item"},"lunch"),n.a.createElement("p",{id:"menu",className:"sidebar_navigation-item"},"dinner"))),n.a.createElement("header",{className:this.props.bckShow?"header ".concat(this.props.color[this.props.i]):"header"},n.a.createElement("h4",{className:"header_title"},"FoodSpin"),n.a.createElement("nav",{className:"header_navigation"},n.a.createElement("p",{className:"header_navigation-item"},"breakfast"),n.a.createElement("p",{className:"header_navigation-item"},"lunch"),n.a.createElement("p",{className:"header_navigation-item"},"dinner")),n.a.createElement(y,{id:"header_navigation",name:"icon-location-shopping"}),n.a.createElement("div",{className:"header_menu",onClick:this.props.sidebarOpenHandler},n.a.createElement("div",{className:"header_menu-item top"}),n.a.createElement("div",{className:"header_menu-item middle"}),n.a.createElement("div",{className:"header_menu-item bottom"}))),n.a.createElement("div",{className:"carousel ".concat(this.props.color[this.props.i])},n.a.createElement("div",{className:"carousel_circle ".concat(this.props.color[this.props.i]),style:{transform:"rotate(".concat(this.props.rotate,"deg)")}},n.a.createElement("div",{className:"carousel_circle-item top"}," "),n.a.createElement("div",{className:"carousel_circle-item top-left"}," "),n.a.createElement("div",{className:"carousel_circle-item left"}," "),n.a.createElement("div",{className:"carousel_circle-item bottom-left"}," "),n.a.createElement("div",{className:"carousel_circle-item bottom"}," "),n.a.createElement("div",{className:"carousel_circle-item bottom-right"}," "),n.a.createElement("div",{className:"carousel_circle-item right"}," "),n.a.createElement("div",{className:"carousel_circle-item top-right"}," ")))," ",n.a.createElement("div",{className:"bottom-section"},n.a.createElement("div",{className:"description"},n.a.createElement("h1",{className:"description_price \n                                        ".concat(this.props.color[this.props.i]),id:this.props.animate?"text-animate":""},"$",this.props.price[this.props.i]),n.a.createElement("h2",{className:"description_title",id:this.props.animate?"text-animate":""},this.props.title[this.props.i]),n.a.createElement("p",{className:"description_text"},"lorem ipsum dolor sit amet loren ipsum dolor sit amet lorem ipsum dolor sit amet",this.props.text[this.props.i]),n.a.createElement("div",{className:"description_button \n                                         ".concat(this.props.color[this.props.i]),id:this.props.animate?"button-animate":""},n.a.createElement("p",{className:"description_button-text"}," add to card "))),n.a.createElement("div",{className:"controller"},n.a.createElement("div",{className:"controller_arrow left",id:"left",onClick:this.props.animateHandler},n.a.createElement(y,{id:"left",name:"icon-arrow-down2",onClick:this.props.animateHandler})),n.a.createElement("div",{className:"controller_middle",style:{transform:"rotate(".concat(this.props.circulate,"deg)"),backgroundImage:"url(".concat(e,")")}}),n.a.createElement("div",{className:"controller_arrow right",id:"right",onClick:this.props.animateHandler},n.a.createElement(y,{id:"right",name:"icon-arrow-down2",onClick:this.props.animateHandler})))," "),"  ")}}]),t}(i.Component),x=Object(s.b)((function(e){return{rotate:e.rotate,i:e.i,circulate:e.circulate,bckShow:e.bckShow,animate:e.animate,showSidebar:e.showSidebar,openMenu:e.openMenu,color:e.color,price:e.price,title:e.title,text:e.text}}),(function(e){return{animateHandler:function(t){e(function(e){return function(t){e.persist(),t(b()),setTimeout((function(){t(f(e))}),200),setTimeout((function(){t(g())}),501)}}(t))},sidebarOpenHandler:function(){return setTimeout((function(){e(v())}),200)},sidebarCloseHandler:function(t){e(function(e){return function(t){e.persist(),t(E(e)),setTimeout((function(){t(N())}),400)}}(t))},scrollHandler:function(){e(w())},resizeHandler:function(){e(_())}}}))(j),S=a(1),H={rotate:0,i:0,bckShow:!1,circulate:0,animate:!1,showSidebar:!1,openMenu:!1,price:[32,45,71,59,60,90,29,44],title:["green goddes chicken salad","salmon with vegetables","creamy pasta with broccoli","rigatoni with cheese","steak with vegetables","fresh carrot salad","kentucky chicken","lasanga with ketchup"],text:["lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet"],color:["pink","yellow","blue","green","violet","brown","aqua","magenta"]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=e.price.length-1;switch(t.type){case f:if("right"===t.result&&e.i<a)return Object(S.a)({},e,{circulate:e.circulate+360,rotate:e.rotate+45,i:e.i+1});if("right"===t.result&&e.i>=a)return Object(S.a)({},e,{circulate:e.circulate+360,rotate:e.rotate+45,i:0});if("left"===t.result&&e.i>0)return Object(S.a)({},e,{circulate:e.circulate-360,rotate:e.rotate-45,i:e.i-1});if("left"===t.result&&e.i>=0)return Object(S.a)({},e,{circulate:e.circulate-360,rotate:e.rotate-45,i:a});case v:return Object(S.a)({},e,{showSidebar:!0,openMenu:!0});case E:return"menu"!==t.val&&"sidebar_navigation"!==t.val?Object(S.a)({},e,{openMenu:!1}):Object(S.a)({},e);case N:return Object(S.a)({},e,{showSidebar:!1});case g:return Object(S.a)({},e,{animate:!1});case b:return Object(S.a)({},e,{animate:!0});case w:return window.scrollY>1?Object(S.a)({},e,{bckShow:!0}):Object(S.a)({},e,{bckShow:!1});case _:if(window.innerWidth>600)return Object(S.a)({},e,{showSidebar:!1})}return e},C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,T=Object(o.d)(M,C(Object(o.a)((function(e){return function(t){return function(a){console.log("[Middleware] Dispatching",a);var i=t(a);return console.log("[Middleware] next state",e.getState()),i}}}),l.a)));var D=function(){return n.a.createElement(s.a,{store:T},n.a.createElement(x,null))};c.a.render(n.a.createElement(D,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.fdc8a80e.chunk.js.map