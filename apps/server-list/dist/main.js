export async function main(ns) {


	// Boilerplate
	const doc = globalThis['document']
	const id = 'server-list'
	globalThis[`${id}-version`] = '0.0.52'

	let vueLoaded
	const vueLoad = new Promise((resolve) => (vueLoaded = resolve))

	if (!doc.getElementById('vue-js-lib')) {
		const script = doc.createElement('script')
		script.id = 'vue-js-lib'
		script.src = 'https://cdn.jsdelivr.net/npm/vue@3.2.26/dist/vue.runtime.global.prod.js'
		script.onload = vueLoaded
		doc.head.insertAdjacentElement('beforeend', script)
	} else {
		vueLoaded()
	}



	// Add app's CSS and mount point
	doc.getElementById(id)?.remove()
	doc.body.insertAdjacentHTML('beforeend', `<section id="${id}"></section>`)

	doc.getElementById(`${id}-css`)?.remove()
	doc.head.insertAdjacentHTML('beforeend', `<style id="${id}-css">${bundledCss}</style>`)

	const updateApp = async ({ detail: { element, path }}) => {
		await ns.wget(path, ns.getScriptName())
		element.dispatchEvent(new CustomEvent('app:updated'))
	}

	doc.body.addEventListener('app:update:server-list', updateApp)

	// Unset some stuff on app death
	ns.atExit(() => {
		doc.getElementById(id)?.remove()
		doc.getElementById(`${id}-css`)?.remove()
		doc.body.removeEventListener('app:update:server-list', updateApp)


	})

	await vueLoad


	globalThis[`${id}-ns`] = ns


	// Let's go
	mount()


	while (doc.getElementById(id)) {
		await ns.asleep(2000)
	}

} 


















// App CSS
const bundledCss = ".app-container[data-v-9289dcfa]{bottom:0;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:1510}.app-container.app--can-resize .app[data-v-9289dcfa]{resize:both}.app-container.app--is-minimised .app[data-v-9289dcfa]{height:auto!important;min-height:0;min-width:0;resize:none}.app-container.app--is-minimised .app .app__content[data-v-9289dcfa]{display:none}.app-container *[data-v-9289dcfa]{box-sizing:border-box}.app-container .app[data-v-9289dcfa]{align-items:flex-start;border:1px solid #4E4E4E6B;display:inline-flex;flex-direction:column;left:0;height:500px;overflow:hidden;pointer-events:auto;position:absolute;resize:none;top:0;transform:translate(-50%,-52%);width:300px}.app-container .app__toolbar[data-v-9289dcfa]{background:#111;color:#fff;display:flex;padding:4px 3px 4px 8px;user-select:none;width:100%}.app-container .app__title[data-v-9289dcfa]{align-self:center;flex:0 1 100%;font-family:var(--font-family, monospace);font-size:13px;font-weight:700;line-height:1;margin:0 20px 0 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.app-container .app__cta-group[data-v-9289dcfa]{align-items:center;display:flex;flex:0 1 100%;justify-content:flex-end;margin-left:auto}.app-container .app__cta-group>*[data-v-9289dcfa]{background-position:50% 50%;background-size:14px auto;flex:0 1 auto}.app-container .app__cta-group .icon[data-v-9289dcfa]{width:16px}.app-container .app__cta-group .icon--restore[data-v-9289dcfa]{color:#d6cec8}.app-container .app__cta-group .icon--update[data-v-9289dcfa]{color:#6bd700}.app-container .app__cta-group .btn[data-v-9289dcfa]{background:none;border:none;color:#a9a9a9;cursor:pointer;display:flex}.app-container .app__icon[data-v-9289dcfa]{align-self:center;max-height:16px;margin-right:6px;object-fit:contain;width:16px}.app-container .app__menu[data-v-9289dcfa]{width:100%;background:#d4d0c8;color:#333;padding-left:5px;padding-bottom:2px}.app-container .app__menu span[data-v-9289dcfa]{border:1px inset transparent;cursor:pointer;font-size:15px;margin-right:12px;padding:0 1px}.app-container .app__menu span[data-v-9289dcfa]:hover{border:1px inset #BDBDBD}.app-container .app__content[data-v-9289dcfa]{flex:0 1 100%;overflow:auto;scrollbar-color:var(--primary, #272727) var(--primarydark, #B7B7B7);scrollbar-width:thin;width:100%}.app-container .app__content[data-v-9289dcfa]::-webkit-scrollbar{display:block;width:10px}.app-container .app__content[data-v-9289dcfa]::-webkit-scrollbar-track{background-color:var(--primarydark, #B7B7B7)}.app-container .app__content[data-v-9289dcfa]::-webkit-scrollbar-thumb{background-color:var(--primary, #272727)}.app-container .app .btn[data-v-9289dcfa]{background:none;box-shadow:none}.modal[data-v-01a1e9db]{background:#FFF;border:1px solid #0003;border-radius:6px;display:flex;flex-wrap:wrap;left:50%;padding:24px;position:absolute;top:50%;transform:translate(-50%,-50%);width:40vw}.modal__title[data-v-01a1e9db]{color:#212529;font-size:20px;font-weight:500;line-height:1.5;margin:0}.modal__message[data-v-01a1e9db]{line-height:1.4}.modal__ctas[data-v-01a1e9db],.modal__message[data-v-01a1e9db]{flex:1 0 100%;margin:16px 0 0}.modal__ctas[data-v-01a1e9db]{display:flex;justify-content:flex-end}.modal .cta[data-v-01a1e9db]{border:1px solid transparent;border-radius:4px;cursor:pointer;display:inline-block;font-weight:400;font-size:16px;line-height:1.5;margin-left:12px;padding:6px 12px;text-align:center;transition:.15s ease-in-out;transition-property:color,background-color,border-color,box-shadow;vertical-align:middle}.modal .cta[data-v-01a1e9db]:hover{text-decoration:none}.modal .cta--cancel[data-v-01a1e9db]{background-color:#6c757d;border-color:#6c757d;color:#fff}.modal .cta--cancel[data-v-01a1e9db]:hover{background-color:#5a6268;border-color:#545b62;color:#fff}.modal .cta--cancel[data-v-01a1e9db]:active{background-color:#545b62;border-color:#4e555b;color:#fff}.modal .cta--confirm[data-v-01a1e9db]{background-color:#28a745;border-color:#28a745;color:#fff}.modal .cta--confirm[data-v-01a1e9db]:hover{background-color:#218838;border-color:#1e7e34;color:#fff}.modal .cta--confirm[data-v-01a1e9db]:active{background-color:#1e7e34;border-color:#1c7430;color:#fff}.app-wrapper[data-v-4cc735b8],.update-modal[data-v-4cc735b8],button[data-v-4cc735b8]{font-family:Fira Sans,Trebuchet MS,Ubuntu,Helvetica,Arial,sans-serif}.update-modal[data-v-4cc735b8]{background:rgba(51,51,51,.7);height:100%;left:0;position:fixed;top:0;width:100%;z-index:1512}.server:first-child .cell[data-v-76ff388c]{padding-top:6px}.cell[data-v-76ff388c]{border:1px solid #3e3e3e2e;border-bottom:none;border-right:none;padding:3px}.cell--true[data-v-76ff388c]{color:#090}.cell--maybe[data-v-76ff388c]{color:#ff0}.cell--false[data-v-76ff388c]{color:#900}.cell--rooted[data-v-76ff388c],.cell--backdoored[data-v-76ff388c],.cell--player-owned[data-v-76ff388c]{text-align:center}.cell--contract .icon[data-v-76ff388c]{color:#ff0}.icon[data-v-76ff388c]{width:20px}.icon--true[data-v-76ff388c]{color:#0c0}.icon--maybe[data-v-76ff388c]{color:#ff0}.icon--false[data-v-76ff388c]{color:#c00}.icon--hidden[data-v-76ff388c]{display:none}.cta[data-v-76ff388c],.icon-cta[data-v-76ff388c]{background:none;border:none;cursor:pointer;outline:none;padding:0}.cta[data-v-76ff388c]{border-bottom:1px dotted;color:inherit;cursor:pointer}[data-v-067ea09c] .app-container .app{height:40vh;width:60vw}[data-v-067ea09c] .app-container .app__content{background:var(--backgroundprimary, #171A22);scrollbar-width:auto}.list[data-v-067ea09c]{align-content:flex-start;box-sizing:border-box;color:#fff;display:flex;flex-wrap:wrap;justify-content:flex-start;min-height:100%;padding:6px}.list[data-v-067ea09c],.list-table[data-v-067ea09c],.list thead[data-v-067ea09c],.list__head[data-v-067ea09c]{background:inherit}.list-table[data-v-067ea09c]{border-collapse:collapse;border-spacing:0;width:100%}.list__head[data-v-067ea09c]{position:sticky;top:0;transform:translateY(-1px)}.list__head[data-v-067ea09c]:after{background:#FFF;content:\"\";display:block;height:1px;left:0;position:absolute;top:100%;width:100%}.list__head .cell[data-v-067ea09c]{padding-bottom:6px}.list__head .cell--rooted[data-v-067ea09c],.list__head .cell--backdoored[data-v-067ea09c],.list__head .cell--player-owned[data-v-067ea09c],.list__head .cell--contracts[data-v-067ea09c]{text-align:center}.list__head .cell--sorting[data-v-067ea09c]{padding-right:8px;position:relative}.list__head .cell--sorting[data-v-067ea09c]:before{background:no-repeat 0 50%/100% auto url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9IjAgMCAzMzAgMTUwIj4KCTxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zMTUgMGgtMzAwYTE1IDE1IDAgMCAwLTkuMzcgMjYuNzEzbDE1MCAxMjBhMTUgMTUgMCAwIDAgOS4zNyAzLjI4N2MzLjMxNiAwIDYuNjMxLTEgOS4zNzEtMy4yODdsMTUwLTEyMGExNSAxNSAwIDAgMC05LjM3MS0yNi43MTN6IiAvPgo8L3N2Zz4K);content:\"\";height:100%;position:absolute;right:4px;top:0;width:12px}.list__head .cell[data-v-067ea09c]:not(.list__head .cell--sorting-reverse):before{transform:rotate(180deg)}.list .icon[data-v-067ea09c]{width:20px}[data-v-067ea09c] .cell,.cell[data-v-067ea09c]{padding-left:6px;padding-right:6px;white-space:nowrap}\n"

// Don't worry about it.
function mount() {
	const winnerdow = globalThis
	const rockument = globalThis['document'];
	var $t=Object.defineProperty,Et=Object.defineProperties;var St=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var K=(e,h,y)=>h in e?$t(e,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):e[h]=y,C=(e,h)=>{for(var y in h||(h={}))Vt.call(h,y)&&K(e,y,h[y]);if(L)for(var y of L(h))Mt.call(h,y)&&K(e,y,h[y]);return e},V=(e,h)=>Et(e,St(h));(function(e){"use strict";function h(n,t){rockument.body.dispatchEvent(new CustomEvent(n,{detail:t}))}const y=n=>{var a,o;const t=rockument.getElementById("terminal-input");if(!t)(a=winnerdow.appNotifier)==null||a.toast("The terminal must be visible","warning");else if(t.hasAttribute("disabled"))(o=winnerdow.appNotifier)==null||o.toast("The terminal must not be in use","warning");else{t.value=n;const s=Object.keys(t)[1];return t[s].onChange({target:t}),t[s].onKeyDown({keyCode:13,preventDefault:()=>null}),!0}return!1},$=n=>y(n.join("; ")),T=async(n,t)=>{const a=await fetch(t).then(o=>o.text());return G(a,n)?a:null},G=(n,t)=>{const a=n.split(".").map(Number),o=t.split(".").map(Number);for(let s=0;s<a.length;++s){if(a[s]>o[s])return!0;if(o[s]>a[s])return!1}return!1},W={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},j=[e.createElementVNode("g",{stroke:"currentColor","stroke-width":"1.5"},[e.createElementVNode("path",{d:"m3 3 12 12M15 3 3 15"})],-1)];function Q(n,t){return e.openBlock(),e.createElementBlock("svg",W,j)}var J={render:Q};const X={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},Y=[e.createElementVNode("path",{d:"M3 13h12v2H3z",fill:"currentColor"},null,-1)];function Z(n,t){return e.openBlock(),e.createElementBlock("svg",X,Y)}var ee={render:Z};const te={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},oe=[e.createStaticVNode('<path d="M5 1.5h11v3H5z"></path><g fill="currentColor" stroke="#000" stroke-width="1.6"><path d="M5.8 4.3h9.4v6.5H5.8z"></path><path d="M1.8 9h9.4v6.5H1.8z"></path></g><path d="M1 6.2h11v3H1z"></path>',3)];function ne(n,t){return e.openBlock(),e.createElementBlock("svg",te,oe)}var ae={render:ne};const se={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 417 417"},re=[e.createElementVNode("path",{fill:"#FFF",d:"M120 90h180v235H120z"},null,-1),e.createElementVNode("path",{fill:"currentColor",d:"M208.5 417a208.5 208.5 0 1 0 0-417 208.5 208.5 0 0 0 0 417zm-81.3-197.5 68.3-118.3a15 15 0 0 1 26 0l68.2 118.3a15 15 0 0 1-13 22.5h-33.2v66.2a15 15 0 0 1-15 15h-40a15 15 0 0 1-15-15V242h-33.3a15 15 0 0 1-13-22.5z"},null,-1)];function le(n,t){return e.openBlock(),e.createElementBlock("svg",se,re)}var ce={render:le},At="",B=(n,t)=>{const a=n.__vccOpts||n;for(const[o,s]of t)a[o]=s;return a};const ie={name:"AppContainer",components:{IconClose:J,IconMinimise:ee,IconRestore:ae,IconUpdate:ce},props:{title:{type:String,required:!0},availableUpdate:{type:[String,Promise],default:null},versionFilePath:{type:String,default:null},id:{type:String,default:null},options:{type:Object,default:()=>({})}},setup({options:n}){const t=e.ref(null),a=e.ref(!1),o=e.ref(),s=e.ref(),m=e.ref(),c=e.ref(),d=e.ref(),l=e.ref(),r=e.ref();let i={},u={};const p=e.ref(!1),_=Object.assign({canDrag:!0,canMinimise:!0,canResize:!0},n),N=()=>{const g=t.value.offsetWidth,b=t.value.offsetHeight;c.value=winnerdow.innerWidth,d.value=winnerdow.innerHeight,l.value=c.value/2-g/2,r.value=d.value/2-b/2};e.onMounted(()=>{_.canResize?new ResizeObserver(([{borderBoxSize:[{inlineSize:g,blockSize:b}]}])=>{a.value&&!p.value&&(o.value=g,s.value=b),a.value=!0}).observe(t.value):a.value=!0,_.canDrag&&N()});const k=({x:g,y:b,button:v})=>{if(!_.canDrag)return;const w=rockument.body;v||(i={x:g,y:b},o.value=t.value.offsetWidth,s.value=t.value.offsetHeight,u={x:l.value,y:r.value},c.value=winnerdow.innerWidth,d.value=winnerdow.innerHeight,w.addEventListener("mousemove",q),w.addEventListener("mouseup",f),w.addEventListener("mouseleave",f))},f=()=>{const g=rockument.body;g.removeEventListener("mousemove",q),g.removeEventListener("mouseup",f),g.removeEventListener("mouseleave",f)};e.onUnmounted(f);const q=({x:g,y:b})=>{let v=u.x+(g-i.x),w=u.y+(b-i.y);const F=v<0,Bt=v+o.value>c.value;(F||Bt)&&(F?v=0:v=c.value-o.value,u.x=v,i.x=Math.max(Math.min(g,c.value-5),5));const U=w<0,Ct=w+s.value>d.value;(U||Ct)&&(U?w=0:w=d.value-s.value,u.y=w,i.y=Math.max(Math.min(b,d.value),5)),l.value=v,r.value=w};return{isMinimised:p,left:l,process:t,processHeight:s,processWidth:o,top:r,windowOptions:_,beginGrabbing:k,setPosition:N,toggleMinimise:()=>{p.value||(m.value=s.value),p.value=!p.value,p.value||(s.value=m.value)}}}},de={class:"app__title"},me={class:"app__cta-group"},pe=["title"],_e={class:"app__content"};function he(n,t,a,o,s,m){const c=e.resolveComponent("icon-update"),d=e.resolveComponent("icon-minimise"),l=e.resolveComponent("icon-restore"),r=e.resolveComponent("icon-close");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["app-container",{"app--is-minimised":o.isMinimised,"app--can-resize":o.windowOptions.canResize}])},[e.createElementVNode("div",{ref:"process",class:"app",style:e.normalizeStyle({transform:`translate(${o.left}px, ${o.top}px)`,width:`${o.processWidth}px`,height:`${o.processHeight}px`})},[e.createElementVNode("div",{class:"app__toolbar",onMousedown:t[6]||(t[6]=(...i)=>o.beginGrabbing&&o.beginGrabbing(...i))},[e.createElementVNode("h1",de,e.toDisplayString(a.title),1),e.createElementVNode("div",me,[a.availableUpdate?(e.openBlock(),e.createElementBlock("button",{key:0,class:"btn btn--small app__cta-update-available",title:`Version ${a.availableUpdate} is available`,onClick:t[0]||(t[0]=i=>n.$emit("app:click:update")),onMousedown:t[1]||(t[1]=e.withModifiers(()=>{},["stop"]))},[e.createVNode(c,{class:"icon icon--update"})],40,pe)):e.createCommentVNode("",!0),o.windowOptions.canMinimise?(e.openBlock(),e.createElementBlock("button",{key:1,class:"btn btn--small app__cta-minimise",onClick:t[2]||(t[2]=(...i)=>o.toggleMinimise&&o.toggleMinimise(...i)),onMousedown:t[3]||(t[3]=e.withModifiers(()=>{},["stop"]))},[e.withDirectives(e.createVNode(d,{class:"icon icon--minimise"},null,512),[[e.vShow,!o.isMinimised]]),e.withDirectives(e.createVNode(l,{class:"icon icon--restore"},null,512),[[e.vShow,o.isMinimised]])],32)):e.createCommentVNode("",!0),e.createElementVNode("button",{class:"btn btn--small app__cta-close",title:"Close",onClick:t[4]||(t[4]=i=>n.$emit("app:close")),onMousedown:t[5]||(t[5]=e.withModifiers(()=>{},["stop"]))},[e.createVNode(r,{class:"icon icon--close"})],32)])],32),e.createElementVNode("div",_e,[e.renderSlot(n.$slots,"default",{},void 0,!0)])],4)],2)}var fe=B(ie,[["render",he],["__scopeId","data-v-9289dcfa"]]),Dt="";const ue={name:"UpdateModal",props:{appFilePath:{type:String,default:null},id:{type:String,default:null},version:{type:String,default:null}},setup({appFilePath:n,id:t}){const a=e.ref(null),o=e.ref(!1);return{element:a,hasUpdated:o,doUpdate:()=>h(`app:update:${t}`,{element:a.value,path:n}),updateComplete:()=>o.value=!0}}},M=n=>(e.pushScopeId("data-v-01a1e9db"),n=n(),e.popScopeId(),n),ye={class:"modal__title"},ge={class:"modal__ctas"},ke=M(()=>e.createElementVNode("h1",{class:"modal__title"}," App successfully updated ",-1)),we=M(()=>e.createElementVNode("p",{class:"modal__message"}," Restart the app in your own time to get the latest version. ",-1)),be={class:"modal__ctas"};function ve(n,t,a,o,s,m){return e.openBlock(),e.createElementBlock("div",{ref:"element",onClick:t[4]||(t[4]=e.withModifiers(c=>n.$emit("modal:close"),["stop"])),"onApp:updated":t[5]||(t[5]=(...c)=>o.updateComplete&&o.updateComplete(...c))},[e.createElementVNode("div",{class:"modal",onClick:t[3]||(t[3]=e.withModifiers(()=>{},["stop"]))},[o.hasUpdated?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[ke,we,e.createElementVNode("div",be,[e.createElementVNode("button",{class:"cta cta--confirm",onClick:t[2]||(t[2]=c=>n.$emit("modal:close"))}," Okay! ")])],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createElementVNode("h1",ye," Do you want to update to v"+e.toDisplayString(a.version)+"? ",1),e.createElementVNode("div",ge,[e.createElementVNode("button",{class:"cta cta--cancel",onClick:t[0]||(t[0]=c=>n.$emit("modal:close"))}," Nope "),e.createElementVNode("button",{class:"cta cta--confirm",onClick:t[1]||(t[1]=(...c)=>o.doUpdate&&o.doUpdate(...c))}," Sure! ")])],64))])],544)}var Ne=B(ue,[["render",ve],["__scopeId","data-v-01a1e9db"]]),Ht="";const Be={name:"AppWrapper",components:{AppContainer:fe,UpdateModal:Ne},props:{title:{type:String,default:null},id:{type:String,default:null},appFilePath:{type:String,default:null},versionFilePath:{type:String,default:null},windowOptions:{type:Object,default:()=>({})}},setup({appFilePath:n,id:t,versionFilePath:a}){const o=e.ref(!1),s=e.ref(null);return e.onMounted(async()=>{n&&a&&(s.value=await T(winnerdow[`${t}-version`]||"0.0.0",a))}),{availableUpdate:s,showUpdateModal:o,destroy:()=>rockument.getElementById(t).remove()}}},Ce={class:"app-wrapper"};function $e(n,t,a,o,s,m){const c=e.resolveComponent("app-container"),d=e.resolveComponent("update-modal");return e.openBlock(),e.createElementBlock("div",Ce,[e.createVNode(c,e.mergeProps({title:a.title,availableUpdate:o.availableUpdate,options:a.windowOptions},{class:"app-container","onApp:click:update":t[0]||(t[0]=l=>o.showUpdateModal=!0),"onApp:close":o.destroy}),{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default",{},void 0,!0)]),_:3},16,["onApp:close"]),o.showUpdateModal?(e.openBlock(),e.createBlock(d,e.mergeProps({key:0},{appFilePath:a.appFilePath,id:a.id},{version:o.availableUpdate,class:"update-modal","onModal:close":t[1]||(t[1]=l=>o.showUpdateModal=!1),"onApp:updated":t[2]||(t[2]=l=>o.availableUpdate=null)}),null,16,["version"])):e.createCommentVNode("",!0)])}var Ee=B(Be,[["render",$e],["__scopeId","data-v-4cc735b8"]]);const Se={viewBox:"0 0 489.6 489.6",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"icon"},Ve=[e.createElementVNode("path",{d:"m311.6 437.9-129.4 34.6 9.4-34.6H44.7V51.7h293v168.2l44.7-44.7V3.1H0v483.4h382.4V369.2z"},null,-1),e.createElementVNode("path",{d:"m235.1 364.9-20.2 74.6 75-19.8zm190.4-200.2L246.7 343.5l.4.4 63.8 63.7h.4l178.3-178.7zm-132.9-59.4H91.7c-6.2 0-11.7 5.1-11.7 11.7 0 6.2 5.1 11.7 11.7 11.7h200.9c6.2 0 11.7-5.1 11.7-11.7 0-6.3-5.5-11.7-11.7-11.7zm0 71.1H91.7c-6.2 0-11.7 5.1-11.7 11.7 0 6.2 5.1 11.7 11.7 11.7h200.9c6.2 0 11.7-5.1 11.7-11.7 0-6.3-5.5-11.7-11.7-11.7zm11.7 82.8c0-6.2-5.1-11.7-11.7-11.7H91.7c-6.2 0-11.7 5.1-11.7 11.7 0 6.2 5.1 11.7 11.7 11.7h200.9c6.2-.1 11.7-5.5 11.7-11.7z"},null,-1)];function Me(n,t){return e.openBlock(),e.createElementBlock("svg",Se,Ve)}var x={render:Me};const xe={viewBox:"0 0 53.25 53.25",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"icon"},Pe=[e.createElementVNode("path",{d:"M43.375 0h-33.5c-.101 0-.199.011-.295.03h-.004a1.49 1.49 0 0 0-.307.1c-.025.011-.047.026-.071.039-.071.036-.14.076-.204.123-.012.008-.025.012-.035.021-.02.014-.034.034-.053.05a1.474 1.474 0 0 0-.337.413c-.018.032-.037.063-.052.096-.032.07-.057.143-.078.218-.008.028-.02.055-.026.084a1.468 1.468 0 0 0-.038.326v43.378c0 .156.031.303.075.444.008.025.014.05.023.074.05.134.117.258.201.371.015.02.031.038.047.057.093.113.198.217.32.299l.004.002c.125.083.265.142.412.185.014.004.024.014.038.017l26.199 6.872a1.495 1.495 0 0 0 1.297-.264 1.5 1.5 0 0 0 .583-1.188V8.372a1.5 1.5 0 0 0-1.12-1.451L21.505 3h20.37v41.878a1.5 1.5 0 1 0 3 0V1.5a1.5 1.5 0 0 0-1.5-1.5zM23.933 28.838a1.502 1.502 0 0 1 1.855-1.03l7 2a1.5 1.5 0 0 1-.824 2.884l-7-2a1.5 1.5 0 0 1-1.031-1.854z"},null,-1)];function ze(n,t){return e.openBlock(),e.createElementBlock("svg",xe,Pe)}var E={render:ze};const Re={viewBox:"145 170 460 415",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"icon"},Ie=[e.createElementVNode("path",{d:"M512.9 530c3-.8 5.2-1.6 8.1-2.3a25.1 25.1 0 0 0 16.3-20 24.1 24.1 0 0 0-10.3-24.4c-4.5-3.7-9.7-6-14.8-8.1a88.5 88.5 0 0 1-11.9-6c-4.4-3-6-7.4-5.2-12.5.8-5.2 3.7-8.2 9-10.4a33.4 33.4 0 0 1 26.6 3.7c1.4-3 2.2-6 3.7-9.6 0 0 0-.8-.8-1.5-3-1.5-5.2-2.2-8.1-3l-10.4-2.2v-9.6h-9.6v10.4c-.7 0-1.5 0-2.2.7-4.5.7-9 3-12.6 6-11.1 8.8-12.6 25.8-.7 35.4a65 65 0 0 0 15.5 9 41 41 0 0 1 12.6 6.6c9.6 7.4 8.1 21.4-3 25.9-2.2.7-5.2 1.5-8.1 1.5a41 41 0 0 1-23-6.7c-.7 3-2.2 6-3 8.9 0 .7 0 1.5.8 2.2 3.7 2.2 7.4 3.7 11.9 4.4 3.7.8 6.6.8 10.3 1.5v10.4h10.4v-10.4z"},null,-1),e.createElementVNode("path",{d:"M510.7 393h-2.2a90.6 90.6 0 0 0-90.3 90.3 91.3 91.3 0 0 0 90.3 91 90.6 90.6 0 0 0 90.2-90.3 89.9 89.9 0 0 0-88-91zm0 161.3h-2.2a71 71 0 0 1 0-142h2.2a71 71 0 0 1 0 142z"},null,-1),e.createElementVNode("path",{d:"M564 350.8 368.6 181.4a11.6 11.6 0 0 0-16.3 0l-68 60.7v-13.4c0-7.4-6-13.3-13.4-13.3h-17c-7.4 0-13.3 6-13.3 13.3v50.4l-84.4 71.7a11.2 11.2 0 0 0 8.2 19.3h55.5v203.5h63.6V458a34.6 34.6 0 0 1 34-34.7c9.7 0 18.5 3.7 24.5 10.3 5.9 6 10.3 14.8 10.3 24.4v116.2h115.4a99.6 99.6 0 0 1-58.4-90.3c0-54 43.7-98.4 97.7-99.1v-14h48.8c10.4-.8 15.6-13.4 8.1-20zm-213.2-2.2h-26.6v-51.8h26.6zm46 0H370v-51.8h26.6z"},null,-1)];function Ae(n,t){return e.openBlock(),e.createElementBlock("svg",Re,Ie)}var P={render:Ae};const De={viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"icon"},He=[e.createElementVNode("path",{d:"M251.092.049C121.207 2.652 16.552 109.664 16.696 239.575c.083 75.073 34.866 141.875 89.043 185.668v70.062c0 9.22 7.475 16.696 16.696 16.696h33.391c9.22 0 16.696-7.475 16.696-16.696v-32.919c0-8.99 6.909-16.726 15.889-17.149 9.588-.451 17.503 7.188 17.503 16.677v33.391c0 9.22 7.475 16.696 16.696 16.696s16.696-7.475 16.696-16.696v-32.919c0-8.99 6.909-16.726 15.889-17.149 9.588-.451 17.503 7.188 17.503 16.677v33.391c0 9.22 7.475 16.696 16.696 16.696s16.696-7.475 16.696-16.696v-32.919c0-8.99 6.909-16.726 15.889-17.149 9.588-.451 17.503 7.188 17.503 16.677v33.391c0 9.22 7.475 16.696 16.696 16.696h33.391c9.22 0 16.696-7.475 16.696-16.696v-70.062c54.242-43.845 89.043-110.756 89.043-185.938C495.305 105.508 385.502-2.643 251.092.049zM150.261 322.783c-36.883 0-66.783-29.9-66.783-66.783s29.9-66.783 66.783-66.783 66.783 29.9 66.783 66.783-29.9 66.783-66.783 66.783zm150.934 61.891a16.642 16.642 0 0 1-11.804 4.892 16.643 16.643 0 0 1-11.805-4.892L256 363.087l-21.587 21.587c-6.521 6.521-17.087 6.521-23.609 0-6.521-6.521-6.521-17.087 0-23.609l33.391-33.391c6.521-6.521 17.087-6.521 23.609 0l33.391 33.391c6.523 6.522 6.523 17.087 0 23.609zm60.544-61.891c-36.883 0-66.783-29.9-66.783-66.783s29.9-66.783 66.783-66.783 66.783 29.9 66.783 66.783-29.9 66.783-66.783 66.783z"},null,-1)];function Oe(n,t){return e.openBlock(),e.createElementBlock("svg",De,He)}var S={render:Oe};const qe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.877 101.052"},Fe=[e.createElementVNode("path",{fill:"#fff",d:"M4.43 63.63A14.383 14.383 0 0 1 .003 53.52a14.393 14.393 0 0 1 4.015-10.281 14.372 14.372 0 0 1 10.106-4.425 14.373 14.373 0 0 1 10.283 4.012l24.787 23.851L98.543 3.989l1.768 1.349-1.77-1.355a2.27 2.27 0 0 1 .479-.466A14.383 14.383 0 0 1 109.243.022V.018l.176.016c3.623.24 7.162 1.85 9.775 4.766a14.383 14.383 0 0 1 3.662 10.412h.004l-.016.176a14.362 14.362 0 0 1-4.609 9.632L59.011 97.11l.004.004a2.157 2.157 0 0 1-.372.368 14.392 14.392 0 0 1-9.757 3.569 14.381 14.381 0 0 1-9.741-4.016L4.43 63.63z"},null,-1)];function Ue(n,t){return e.openBlock(),e.createElementBlock("svg",qe,Fe)}var Le={render:Ue},Wt="";const Ke={name:"ServerItem",components:{IconContract:x,IconDoor:E,IconSkull:S,IconTick:Le},props:{server:{type:Object,required:!0},cracksOwned:{type:Array,default:()=>[]}},setup(n){const t=d=>["home",...d.slice(1).map(l=>`connect ${l}`)],a=d=>[...t(d),...n.cracksOwned.slice(0,n.server.numOpenPortsRequired).map(l=>`run ${l}`),"run NUKE.exe"];return{backdoor:()=>$([...a(n.server.ancestors),"backdoor"]),connect:()=>$(t(n.server.ancestors)),root:()=>$(a(n.server.ancestors)),runContract:d=>$([...a(n.server.ancestors),`run ${d}`])}}},Te={class:"server"},Ge={class:"cell cell--rooted"},We=["title"],je={class:"cell cell--backdoored"},Qe=["title"],Je={class:"cell cell--player-owned"},Xe={class:"cell cell--contract"},Ye=["title","onClick"],Ze={class:"cell cell--hostname"},et=["title"],tt={class:"cell cell--required-hacking-skill"},ot={class:"cell cell--ram"},nt={class:"cell cell--security"},at={class:"cell cell--money"},st={class:"cell cell--growth"};function rt(n,t,a,o,s,m){const c=e.resolveComponent("icon-skull"),d=e.resolveComponent("icon-door"),l=e.resolveComponent("icon-tick"),r=e.resolveComponent("icon-contract");return e.openBlock(),e.createElementBlock("tr",Te,[e.createElementVNode("td",Ge,[e.createElementVNode("button",{class:"icon-cta",title:a.server.hasRoot.title,onClick:t[0]||(t[0]=(...i)=>o.root&&o.root(...i))},[e.createVNode(c,{class:e.normalizeClass(["icon icon--skull",[`icon--${a.server.hasRoot.className}`]])},null,8,["class"])],8,We)]),e.createElementVNode("td",je,[e.createElementVNode("button",{class:"icon-cta",title:a.server.hasBackdoor.title,onClick:t[1]||(t[1]=(...i)=>o.backdoor&&o.backdoor(...i))},[e.createVNode(d,{class:e.normalizeClass(["icon icon--door",[`icon--${a.server.hasBackdoor.className}`]])},null,8,["class"])],8,Qe)]),e.createElementVNode("td",Je,[a.server.purchasedByPlayer?(e.openBlock(),e.createBlock(l,{key:0,class:"icon icon--tick"})):e.createCommentVNode("",!0)]),e.createElementVNode("td",Xe,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.server.contracts,i=>(e.openBlock(),e.createElementBlock("button",{key:i,class:"icon-cta",title:`Run ${i}`,onClick:u=>o.runContract(i)},[e.createVNode(r,{class:"icon icon--door"})],8,Ye))),128))]),e.createElementVNode("td",Ze,[e.createElementVNode("button",{class:"cta",title:`Connect to ${a.server.hostname}`,onClick:t[2]||(t[2]=(...i)=>o.connect&&o.connect(...i))},e.toDisplayString(a.server.hostname),9,et)]),e.createElementVNode("td",tt,e.toDisplayString(a.server.requiredHackingSkillDisplay),1),e.createElementVNode("td",{class:e.normalizeClass(["cell cell--open-ports-required",[`cell--${a.server.portClass}`]])},e.toDisplayString(a.server.portDisplay),3),e.createElementVNode("td",ot,e.toDisplayString(a.server.ramUsed)+"/"+e.toDisplayString(a.server.maxRam),1),e.createElementVNode("td",nt,e.toDisplayString(a.server.difficultyDisplay),1),e.createElementVNode("td",at,e.toDisplayString(a.server.moneyAvailableFormatted)+" "+e.toDisplayString(a.server.moneyAvailablePercentageFormatted),1),e.createElementVNode("td",st,e.toDisplayString(a.server.serverGrowthDisplay),1)])}var lt=B(Ke,[["render",rt],["__scopeId","data-v-76ff388c"]]);const z=n=>pt(n).connections,ct=(n,t,a,o)=>{const s=new Intl.NumberFormat,m=new Intl.NumberFormat({currency:"USD"}),c=(l,r=["home"])=>Object.entries(l).map(([i,u])=>[V(C({},d(i)),{ancestors:r.concat(i)}),(u.connections?[...c(u.connections,r.concat(i))]:[]).flat()].flat()),d=l=>{const r=n.getServer(l),i=dt(r,o),u=mt(r,i,a),p=it(r,o),_=Math.round(r.moneyAvailable),N=Math.round(_/r.moneyMax*100),k=I(r.hackDifficulty,2),f=n.ls(l,".cct");return{hostname:r.hostname,purchasedByPlayer:r.purchasedByPlayer,requiredHackingSkill:r.requiredHackingSkill,requiredHackingSkillDisplay:s.format(r.requiredHackingSkill),hasBackdoor:u,hasRoot:i,openPortCount:r.openPortCount,numOpenPortsRequired:r.numOpenPortsRequired,portDisplay:r.purchasedByPlayer?"":r.numOpenPortsRequired,portClass:p,ramUsed:I(r.ramUsed,2),maxRam:r.maxRam,hackDifficulty:k,minDifficulty:r.minDifficulty,difficultyDisplay:_?`${k} (${r.minDifficulty})`:"",moneyAvailable:_,moneyAvailableFormatted:_?`$${m.format(_)}`:"",moneyAvailablePercentage:N,moneyAvailablePercentageFormatted:_?`(${N}%)`:"",moneyMax:r.moneyMax,serverGrowth:r.serverGrowth,serverGrowthDisplay:r.serverGrowth||"",sortHasBackdoor:u.status,sortHasRoot:i.status,contracts:f,contractsLength:f.length}};return c(t).flat()},it=(n,t)=>n.openPortCount>=n.numOpenPortsRequired?"true":t>=n.numOpenPortsRequired?"maybe":"false",dt=(n,t)=>{let a={className:"true",status:1,title:"This server is rooted"};return n.hasAdminRights||(t>=n.numOpenPortsRequired||n.openPortCount>n.numOpenPortsRequired?(a.className="maybe",a.status=0,a.title="Click to root"):(a.className="false",a.status=-1,a.title=`${n.hostname} needs ${n.numOpenPortsRequired} port${n.numOpenPortsRequired!==1?"s":""} open to root `)),a},mt=(n,{status:t},a)=>{let o={className:"true",title:"This server has a backdoor",status:1};return n.purchasedByPlayer?(o.className="hidden",o.status=-2):n.backdoorInstalled||(t===1&&a>=n.requiredHackingSkill?(o.className="maybe",o.status=0,o.title="Click to install backdoor"):(o.className="false",o.status=-1,o.title=`${n.hostname} has a minimum required hacking skill of ${n.requiredHackingSkill}`)),o},pt=n=>{const t=new Set,a={};return R(n,a,t),a},R=(n,t,a,o="home")=>{a.add(o);const s=n.scan(o).filter((m,c)=>c||o==="home");s.length&&(t.connections={}),s.forEach(m=>{t.connections[m]={},a.has(m)?t.connections[m].duplicate=!0:R(n,t.connections[m],a,m)})},I=(n,t)=>Number(n.toFixed(t));var jt="";const _t={components:{AppWrapper:Ee,IconDoor:E,IconLoan:P,IconSkull:S,ServerItem:lt},props:{id:{type:String,required:!0},appFilePath:{type:String,default:null},versionFilePath:{type:String,default:null}},setup({id:n}){const t=winnerdow[`${n}-ns`],a=e.ref(null),o=e.ref(!0),s=e.ref(z(t)),m=e.ref({}),c=e.ref([]),d=e.computed(()=>{var p;return ct(t,s.value,(p=m.value)==null?void 0:p.hacking,c.value.length).sort((_,N)=>{const k=_[a.value],f=N[a.value];return typeof k=="undefined"&&typeof f=="undefined"?0:typeof k=="string"?o.value?k.localeCompare(f):f.localeCompare(k):o.value?k-f:f-k})}),l=()=>{m.value=t==null?void 0:t.getPlayer(),c.value=r(t),s.value=z(t),setTimeout(l,2e3)};e.onMounted(l);function r(p){return["BruteSSH.exe","SQLInject.exe","HTTPWorm.exe","FTPCrack.exe","relaySMTP.exe"].filter(_=>p.fileExists(_))}return{headers:[{className:"rooted",sortKey:"sortHasRoot",title:"Is server rooted?",component:S},{className:"backdoored",sortKey:"sortHasBackdoor",title:"Is server backdoored?",component:E},{className:"player-owned",sortKey:"purchasedByPlayer",title:"Is server player-owned?",component:P},{className:"contracts",sortKey:"contractsLength",component:x},{className:"hostname",sortKey:"hostname",content:"Name"},{className:"required-hacking-skill",sortKey:"requiredHackingSkill",content:"Req. hack",title:"Required hacking skill"},{className:"open-ports-required",sortKey:"numOpenPortsRequired",content:"Ports",title:"Open ports required"},{className:"ram",sortKey:"maxRam",content:"RAM",title:"RAM in-use/total"},{className:"security",sortKey:"hackDifficulty",content:"Security",title:"Server security"},{className:"money",sortKey:"moneyMax",content:"Money",title:"Money available/max"},{className:"growth",sortKey:"serverGrowth",content:"Growth",title:"Growth"}],playerOwnedCracks:c,servers:d,sortAscending:o,sortKey:a,applySort:p=>{a.value===p?o.value=!o.value:(a.value=p,o.value=!1)}}}},ht={class:"list"},ft={class:"list-table"},ut={class:"list__head"},yt=["title","onClick"];function gt(n,t,a,o,s,m){const c=e.resolveComponent("server-item"),d=e.resolveComponent("app-wrapper");return e.openBlock(),e.createBlock(d,e.normalizeProps(e.guardReactiveProps(V(C({},n.$props),{title:"Server list"}))),{default:e.withCtx(()=>[e.createElementVNode("div",ht,[e.createElementVNode("table",ft,[e.createElementVNode("thead",null,[e.createElementVNode("tr",ut,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.headers,(l,r)=>(e.openBlock(),e.createElementBlock("td",{key:r,title:l.title,class:e.normalizeClass(["cell",[`cell--${l.className}`,{"cell--sorting":o.sortKey===l.sortKey,"cell--sorting-reverse":!o.sortAscending}]]),onClick:i=>o.applySort(l.sortKey)},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l.component))),e.createTextVNode(" "+e.toDisplayString(l.content),1)],10,yt))),128))])]),e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.servers,l=>(e.openBlock(),e.createBlock(c,{key:l.hostname,server:l,"cracks-owned":o.playerOwnedCracks},null,8,["server","cracks-owned"]))),128))])])])]),_:1},16)}var kt=B(_t,[["render",gt],["__scopeId","data-v-067ea09c"]]);const wt="server-list";var bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:wt}),vt={repositoryBranch:"master",repositoryRaw:"https://raw.githubusercontent.com/PhilipArmstead/bitburner-theme-browser"};const{repositoryBranch:A,repositoryRaw:D}=vt,H="server-list";var Nt={appFilePath:`${D}/${A}/apps/${H}/dist/main.js`,versionFilePath:`${D}/${A}/apps/${H}/dist/version.txt`},O=C(C({},Nt),bt);e.createApp(kt,O).mount(`#${O.id}`)})(Vue);

}