(self.webpackChunkvip_site_pratice_1=self.webpackChunkvip_site_pratice_1||[]).push([[901],{31901:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var a=t(67294),r=t(50632),i=t(7166),o=["antialias","engineOptions","adaptToDeviceRatio","sceneOptions","onRender","onSceneReady"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}const s=function(e){var n=e.antialias,t=e.engineOptions,r=e.adaptToDeviceRatio,s=e.sceneOptions,l=e.onRender,u=e.onSceneReady,f=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,o),d=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=d.current;if(e){var a=new i.D4V(e,n,t,r),o=new i.xsS(a,s);o.isReady()?u(o):o.onReadyObservable.addOnce((function(e){return u(e)})),a.runRenderLoop((function(){"function"==typeof l&&l(o),o.render()}));var c=function(){o.getEngine().resize()};return window&&window.addEventListener("resize",c),function(){o.getEngine().dispose(),window&&window.removeEventListener("resize",c)}}}),[n,t,r,s,l,u]),a.createElement("canvas",c({ref:d},f,{style:{width:"100%",height:"100%"}}))};t(96018);var l=function(){var e=(0,a.useRef)(null),n=(0,a.useRef)(null),t=(0,a.useRef)(null),r=function(e){var n=e.pickInfo.pickedMesh,t=n.name;console.log("meshName",t,n)};return(0,a.useEffect)((function(){i.n0n.AppendAsync("http://10.0.15.116:5500/src/pages/TestBabyloneCom/sceneGltfs/jifang/","jifang_0520.gltf",n.current).then((function(e){e.activeCamera.alpha=Math.PI/2,e.activeCamera.beta=Math.PI/6,e.activeCamera.radius=.31;var n={};["jgq_002","jgq_001","dlj_002","dlj_001","lqq_002","lqq_001","bgq_002","bgq_001"].forEach((function(e){return n[e]=e})),e.meshes.forEach((function(t){t.actionManager=new i.kOu(e),n[t.id]&&(t.isVisible=!1)})),e.onPointerObservable.add(r,i.kD3.POINTERTAP),console.log("canvasRef",t.current)}))}),[]),a.createElement(a.Fragment,null,a.createElement(s,{onSceneReady:function(a){var r=a.getEngine().getRenderingCanvas(),o=new i.cEJ("FreeCamera",new i.Pa4(0,0,-1),a),c=new i.ezm("light",new i.Pa4(0,1,0),a);o.setTarget(i.Pa4.Zero()),o.attachControl(r,!0),c.intensity=.7,a.createDefaultCamera(!0,!0,!0),n.current=a,e.current=o,t.current=r},onRender:function(e){},antialias:void 0,engineOptions:void 0,adaptToDeviceRatio:void 0,sceneOptions:void 0}))};const u=function(){return a.createElement(a.Fragment,null,a.createElement(a.Suspense,{fallback:r.Z},a.createElement("div",{className:"test-babylone-com"},a.createElement(l,null))))}}}]);