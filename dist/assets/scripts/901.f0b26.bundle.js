(self.webpackChunkvip_site_pratice_1=self.webpackChunkvip_site_pratice_1||[]).push([[901],{31901:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var a=t(67294),r=t(50632),i=t(7166),o=["antialias","engineOptions","adaptToDeviceRatio","sceneOptions","onRender","onSceneReady"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}const s=function(e){var n=e.antialias,t=e.engineOptions,r=e.adaptToDeviceRatio,s=e.sceneOptions,l=e.onRender,u=e.onSceneReady,f=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,o),p=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=p.current;if(e){var a=new i.D4V(e,n,t,r),o=new i.xsS(a,s);o.isReady()?u(o):o.onReadyObservable.addOnce((function(e){return u(e)})),a.runRenderLoop((function(){"function"==typeof l&&l(o),o.render()}));var c=function(){o.getEngine().resize()};return window&&window.addEventListener("resize",c),function(){o.getEngine().dispose(),window&&window.removeEventListener("resize",c)}}}),[n,t,r,s,l,u]),a.createElement("canvas",c({ref:p},f,{style:{width:"100%",height:"100%"}}))};t(96018);var l=function(e){console.log("onSceneReady",e);var n=new i.cEJ("camera1",new i.Pa4(0,0,10),e),t=e.getEngine().getRenderingCanvas();n.setTarget(new i.Pa4.Zero),n.attachControl(t,!0),new i.ezm("light",new i.Pa4(0,1,0),e).intensity=.7,i.n0n.AppendAsync("http://10.0.15.116:5500/src/pages/TestBabyloneCom/sceneGltfs/jifang/","jifang_0520.gltf",e).then((function(e){e.createDefaultCameraOrLight(!0,!0,!0),e.activeCamera.alpha+=Math.PI,console.log("scene",e.activeCamera)}))},u=function(e){},f=function(){return(0,a.useEffect)((function(){return l(new i.xsS)})),a.createElement(a.Fragment,null,a.createElement(s,{onSceneReady:l,onRender:u,antialias:void 0,engineOptions:void 0,adaptToDeviceRatio:void 0,sceneOptions:void 0}))};const p=function(){return a.createElement(a.Fragment,null,a.createElement(a.Suspense,{fallback:r.Z},a.createElement("div",{className:"test-babylone-com"},a.createElement(f,null))))}}}]);