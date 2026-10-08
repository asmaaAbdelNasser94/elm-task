import{Ar as rh,Bn as ZE,Bt as Ae$1,Cr as pu,Dn as Sr,Dr as qp,Dt as ro,En as Sh,Et as rl,F as Oy,Fr as tl,Gn as ah,Gr as l,H as Ta,Hn as Zp,Ht as B,I as Pr,In as WP,Ir as vD,It as zm,J as Wf,Jn as dh,K as Vd,Kn as dE,Kr as m,Mn as Vm,Mr as sh,N as Oa,Nr as tD,O as Mm,On as UP,Pr as th,Q as Ym,Rn as Xc,T as L,Tn as S,U as Tl,Un as Zt,Vn as Za,Vr as wm,W as Tm,Wn as ae,X as Wy,Xn as eD,Y as Wm,Zn as el,_t as ld,an as IE,b as Il,bn as Pn,br as pE,c as Ed,cn as Jc,cr as ki,dn as Kc,dr as lh,er as g,fn as Kp,fr as mD,ft as hd,gn as ND,hr as nh,it as bm,jr as ri,jt as we$1,kn as VD,kt as sy,m as Gf,n as Al,on as Ih,ot as dd,p as Ge$1,pt as io,qr as o,rt as ay,sn as JE,sr as je$1,t as $m,tr as gr,tt as _a,un as KE,ur as lb,v as Hn,vn as PD,vr as oe,wn as Rv,x as Im,xn as Pr$1,y as Ia,yn as PP,yr as oh,zn as Xu}from"./main-UXRXMP6L.js";function G(...o){if(o){let e=[];for(let t=0;t<o.length;t++){let n=o[t];if(!n)continue;let i=typeof n;if(i===`string`||i===`number`)e.push(n);else if(i===`object`){let r=Array.isArray(n)?[G(...n)]:Object.entries(n).map(([a,l])=>l?a:void 0);e=r.length?e.concat(r.filter(a=>!!a)):e}}return e.join(` `).trim()}}var qe=Object.defineProperty;var Se=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty;var Qe=Object.prototype.propertyIsEnumerable;var Be=(o,e,t)=>e in o?qe(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var we=(o,e)=>{for(var t in e||(e={}))Ge.call(e,t)&&Be(o,t,e[t]);if(Se)for(var t of Se(e))Qe.call(e,t)&&Be(o,t,e[t]);return o};function xe(...o){if(o){let e=[];for(let t=0;t<o.length;t++){let n=o[t];if(!n)continue;let i=typeof n;if(i===`string`||i===`number`)e.push(n);else if(i===`object`){let r=Array.isArray(n)?[xe(...n)]:Object.entries(n).map(([a,l])=>l?a:void 0);e=r.length?e.concat(r.filter(a=>!!a)):e}}return e.join(` `).trim()}}function Ze(o){return typeof o==`function`&&`call`in o&&`apply`in o}function Xe({skipUndefined:o=!1},...e){return e?.reduce((t,n={})=>{for(let i in n){let r=n[i];if(!(o&&r===void 0))if(i===`style`)t.style=we(we({},t.style),n.style);else if(i===`class`||i===`className`)t[i]=xe(t[i],n[i]);else if(Ze(r)){let a=t[i];t[i]=a?(...l)=>{a(...l),r(...l)}:r}else t[i]=r}return t},{})}function Ht(...o){return Xe({skipUndefined:!1},...o)}var Et={};function ht(o=`pui_id_`){return Object.hasOwn(Et,o)||(Et[o]=0),Et[o]++,`${o}${Et[o]}`}var Te=(()=>{class o extends rl{name=`common`;static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵprov=B({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var J=new S(`PARENT_INSTANCE`);var N=(()=>{class o{document=g(gr);platformId=g(wm);el=g(Pn);injector=g(oe);cd=g(lb);renderer=g(Za);config=g(Vd);$parentInstance=g(J,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=g(Te);baseStyle=g(rl);scopedStyleEl;parent=this.$params.parent;cn=G;_themeScopedListener;themeChangeListenerMap=new Map;dt=PP();unstyled=PP();pt=PP();ptOptions=PP();$attrSelector=ht(`pc`);get $name(){return this.componentName||`UnknownComponent`}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=ae(void 0);directiveUnstyled=ae(void 0);$unstyled=Zt(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=Zt(()=>Ge$1(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>Ge$1(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||Ge$1(t,this.$params))}get $style(){return l(l({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){ri(t=>{this.document&&!Gf(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(`_themeScopedListener`,this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener(`_themeScopedListener`)})}),ri(t=>{this.document&&!Gf(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(`_loadCoreStyles`,this._loadCoreStyles))),t(()=>{this._offThemeChangeListener(`_loadCoreStyles`)})}),this._hook(`onBeforeInit`)}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook(`onInit`)}ngOnChanges(t){this.onChanges(t),this._hook(`onChanges`,t)}ngDoCheck(){this.onDoCheck(),this._hook(`onDoCheck`)}ngAfterContentInit(){this.onAfterContentInit(),this._hook(`onAfterContentInit`)}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook(`onAfterContentChecked`)}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,``),this.onAfterViewInit(),this._hook(`onAfterViewInit`)}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook(`onAfterViewChecked`)}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook(`onDestroy`)}_mergeProps(t,...n){return Ia(t)?t(...n):Ht(...n)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,n=``,i={}){return hd(t,n,i)}_hook(t,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);i?.(...n),r?.(...n)}}_load(){Wy.isStyleNameLoaded(`base`)||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),Wy.setLoadedStyleName(`base`)),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(`_load`,()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,`global.css`,this.$params);Pr(t)&&this.baseStyle.load(t,l({name:`global`},this.$styleOptions))}_loadCoreStyles(){!Wy.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),Wy.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()===`none`)){if(!L.isStyleNameLoaded(`common`)){let{primitive:t,semantic:n,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,l({name:`primitive-variables`},this.$styleOptions)),this.baseStyle.load(n?.css,l({name:`semantic-variables`},this.$styleOptions)),this.baseStyle.load(i?.css,l({name:`global-variables`},this.$styleOptions)),this.baseStyle.loadBaseStyle(l({name:`global-style`},this.$styleOptions),r),L.setLoadedStyleName(`common`)}if(!L.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,l({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(l({name:`${this.$style?.name}-style`},this.$styleOptions),n),L.setLoadedStyleName(this.$style?.name)}if(!L.isStyleNameLoaded(`layer-order`)){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,l({name:`layer-order`,first:!0},this.$styleOptions)),L.setLoadedStyleName(`layer-order`)}}}_loadScopedThemeStyles(t){let{css:n}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,l({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t,n=()=>{}){this._offThemeChangeListener(t),Wy.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(t,i),we$1.on(`theme:change`,i)}_removeThemeListeners(){this._offThemeChangeListener(`_themeScopedListener`),this._offThemeChangeListener(`_loadCoreStyles`),this._offThemeChangeListener(`_load`)}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(we$1.off(`theme:change`,this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},n=``,i={},r=!0){let a=/./g.test(n)&&!!i[n.split(`.`)[0]],{mergeSections:l$1=!0,mergeProps:p=!1}=this._getPropValue(`ptOptions`)?.()||this.config?.ptOptions?.()||{},d=r?a?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,u=a?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,n,m(l({},i),{global:d||{}})),f=this._getPTDatasets(n);return l$1||!l$1&&u?p?this._mergeProps(p,d,u,f):l(l(l({},d),u),f):l(l({},u),f)}_getPTDatasets(t=``){let n=`data-pc-`,i=t===`root`&&Pr(this.$pt()?.[`data-pc-section`]);return t!==`transition`&&m(l({},t===`root`&&m(l({[`${n}name`]:Ta(i?this.$pt()?.[`data-pc-section`]:this.$name)},i&&{[`${n}extend`]:Ta(this.$name)}),{[`${this.$attrSelector}`]:``})),{[`${n}section`]:Ta(t.includes(`.`)?t.split(`.`).at(-1)??``:t)})}_getPTClassValue(t,n,i){let r=this._getOptionValue(t,n,i);return dd(r)||bm(r)?{class:r}:r}_getPT(t,n=``,i){let r=(a,l=!1)=>{let p=i?i(a):a,d=Ta(n),u=Ta(this.$hostName||this.$name);return(l?d!==u?p?.[d]:void 0:p?.[d])??p};return t?.hasOwnProperty(`_usept`)?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t,!0)}_usePT(t,n,i,r){let a=l=>n?.call(this,l,i,r);if(t?.hasOwnProperty(`_usept`)){let{mergeSections:l$2=!0,mergeProps:p=!1}=t._usept||this.config?.ptOptions()||{},d=a(t.originalValue),u=a(t.value);return d===void 0&&u===void 0?void 0:dd(u)?u:dd(d)?d:l$2||!l$2&&u?p?this._mergeProps(p,d,u):l(l({},d),u):u}return a(t)}_useGlobalPT(t,n,i){return this._usePT(this.$globalPT,t,n,i)}_useDefaultPT(t,n,i){return this._usePT(this.$defaultPT,t,n,i)}ptm(t=``,n={}){return this._getPTValue(this.$pt(),t,l(l({},this.$params),n))}ptms(t,n={}){return t.reduce((i,r)=>(i=Ht(i,this.ptm(r,n))||{},i),{})}ptmo(t={},n=``,i={}){return this._getPTValue(t,n,l({instance:this},i),!1)}cx(t,n={}){return this.$unstyled()?void 0:G(this._getOptionValue(this.$style.classes,t,l(l({},this.$params),n)))}sx(t=``,n=!0,i={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,t,l(l({},this.$params),i)),a=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,l(l({},this.$params),i));return l(l({},a),r)}}static ɵfac=function(n){return new(n||o)};static ɵdir=qp({type:o,inputs:{dt:[1,`dt`],unstyled:[1,`unstyled`],pt:[1,`pt`],ptOptions:[1,`ptOptions`]},features:[PD([Te,rl]),Vm]})}return o})();var ft=class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=` `+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let n=t.trim().split(` `);for(let i=0;i<n.length;i++)e.classList.add(n[i])}else{let n=t.split(` `);for(let i=0;i<n.length;i++)e.className+=` `+n[i]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(`(^|\\b)`+t.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(i=>this.removeClass(e,i)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp(`(^| )`+t+`( |$)`,`gi`).test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,n=0;for(var i=0;i<t.length;i++){if(t[i]==e)return n;t[i].nodeType==1&&n++}return-1}static indexWithinGroup(e,t){let n=e.parentNode?e.parentNode.childNodes:[],i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].attributes&&n[r].attributes[t]&&n[r].nodeType==1&&i++}return-1}static appendOverlay(e,t,n=`self`){n!==`self`&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,n=`self`,i=!0){e&&t&&(i&&(e.style.minWidth=`${o.getOuterWidth(t)}px`),n===`self`?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,n=!0){let i=R=>{if(R)return getComputedStyle(R).getPropertyValue(`position`)===`relative`?R:i(R.parentElement)},r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=t.offsetHeight,l=t.getBoundingClientRect(),p=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),u=this.getViewport(),v=i(e)?.getBoundingClientRect()||{top:-1*p,left:-1*d},_,F,tt=`top`;l.top+a+r.height>u.height?(_=l.top-v.top-r.height,tt=`bottom`,l.top+_<0&&(_=-1*l.top)):(_=a+l.top-v.top,tt=`top`);let mt=l.left+r.width-u.width,kt=l.left-v.left;if(r.width>u.width?F=(l.left-v.left)*-1:mt>0?F=kt-mt:F=l.left-v.left,e.style.top=_+`px`,e.style.left=F+`px`,e.style.transformOrigin=tt,n){let R=io(/-anchor-gutter$/)?.value;e.style.marginTop=tt===`bottom`?`calc(${R??`2px`} * -1)`:R??``}}static absolutePosition(e,t,n=!0){let i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=i.height,a=i.width,l=t.offsetHeight,p=t.offsetWidth,d=t.getBoundingClientRect(),u=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),v=this.getViewport(),_,F;d.top+l+r>v.height?(_=d.top+u-r,e.style.transformOrigin=`bottom`,_<0&&(_=u)):(_=l+d.top+u,e.style.transformOrigin=`top`),d.left+a>v.width?F=Math.max(0,d.left+f+p-a):F=d.left+f,e.style.top=_+`px`,e.style.left=F+`px`,n&&(e.style.marginTop=origin===`bottom`?`calc(var(--p-anchor-gutter) * -1)`:`calc(var(--p-anchor-gutter))`)}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let n=this.getParents(e),i=/(auto|scroll)/,r=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue(`overflow`))||i.test(l.getPropertyValue(`overflowX`))||i.test(l.getPropertyValue(`overflowY`))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let p=l.split(`,`);for(let d of p){let u=this.findSingle(a,d);u&&r(u)&&t.push(u)}}a.nodeType!==9&&r(a)&&t.push(a)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility=`hidden`,e.style.display=`block`;let t=e.offsetHeight;return e.style.display=`none`,e.style.visibility=`visible`,t}static getHiddenElementOuterWidth(e){e.style.visibility=`hidden`,e.style.display=`block`;let t=e.offsetWidth;return e.style.display=`none`,e.style.visibility=`visible`,t}static getHiddenElementDimensions(e){let t={};return e.style.visibility=`hidden`,e.style.display=`block`,t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display=`none`,e.style.visibility=`visible`,t}static scrollInView(e,t){let n=getComputedStyle(e).getPropertyValue(`borderTopWidth`),i=n?parseFloat(n):0,r=getComputedStyle(e).getPropertyValue(`paddingTop`),a=r?parseFloat(r):0,l=e.getBoundingClientRect(),d=t.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,u=e.scrollTop,f=e.clientHeight,v=this.getOuterHeight(t);d<0?e.scrollTop=u+d:d+v>f&&(e.scrollTop=u+d-f+v)}static fadeIn(e,t){e.style.opacity=0;let n=+new Date,i=0,r=function(){i=+e.style.opacity.replace(`,`,`.`)+(new Date().getTime()-n)/t,e.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(e,t){var n=1,i=50,a=i/t;let l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),e.style.opacity=n},i)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1}).call(e,t)}static getOuterWidth(e,t){let n=e.offsetWidth;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,n=getComputedStyle(e);return t+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t}static width(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,n=getComputedStyle(e);return t+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),t}static getOuterHeight(e,t){let n=e.offsetHeight;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(e){let t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),t}static getViewport(){let e=window,t=document,n=t.documentElement,i=t.getElementsByTagName(`body`)[0];return{width:e.innerWidth||n.clientWidth||i.clientWidth,height:e.innerHeight||n.clientHeight||i.clientHeight}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let n=e.parentNode;if(!n)throw`Can't replace element`;return n.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent;if(e.indexOf(`MSIE `)>0)return!0;if(e.indexOf(`Trident/`)>0){e.indexOf(`rv:`);return!0}return e.indexOf(`Edge/`)>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw`Cannot append `+t+` to `+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw`Cannot remove `+e+` from `+t}static removeElement(e){`remove`in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement==`object`?e instanceof HTMLElement:e&&typeof e==`object`&&e!==null&&e.nodeType===1&&typeof e.nodeName==`string`}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement(`div`);t.className=`p-scrollbar-measure`,document.body.appendChild(t);let n=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement(`div`);e.className=`p-scrollbar-measure`,document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,n){e[t].apply(e,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf(`compatible`)<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||``,version:t[2]||`0`}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e==`number`&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<`u`&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=``){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=``){let n=this.find(e,this.getFocusableSelectorString(t)),i=[];for(let r of n){let a=getComputedStyle(r);this.isVisible(r)&&a.display!=`none`&&a.visibility!=`hidden`&&i.push(r)}return i}static getFocusableElement(e,t=``){let n=this.findSingle(e,this.getFocusableSelectorString(t));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!=`none`&&i.visibility!=`hidden`)return n}return null}static getFirstFocusableElement(e,t=``){let n=this.getFocusableElements(e,t);return n.length>0?n[0]:null}static getLastFocusableElement(e,t){let n=this.getFocusableElements(e,t);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,t=!1){let n=o.getFocusableElements(e),i=0;if(n&&n.length>0){let r=n.indexOf(n[0].ownerDocument.activeElement);t?r==-1||r===0?i=n.length-1:i=r-1:r!=-1&&r!==n.length-1&&(i=r+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case`document`:return document;case`window`:return window;case`@next`:return t?.nextElementSibling;case`@prev`:return t?.previousElementSibling;case`@parent`:return t?.parentElement;case`@grandparent`:return t?.parentElement?.parentElement;default:let n=typeof e;if(n===`string`)return document.querySelector(e);if(n===`object`&&e.hasOwnProperty(`nativeElement`))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let n=e.getAttribute(t);return isNaN(n)?n===`true`||n===`false`?n===`true`:n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e=`p-overflow-hidden`){document.body.style.setProperty(`--scrollbar-width`,this.calculateBodyScrollbarWidth()+`px`),this.addClass(document.body,e)}static unblockBodyScroll(e=`p-overflow-hidden`){document.body.style.removeProperty(`--scrollbar-width`),this.removeClass(document.body,e)}static createElement(e,t={},...n){if(e){let i=document.createElement(e);return this.setAttributes(i,t),i.append(...n),i}}static setAttribute(e,t=``,n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(t,n)}static setAttributes(e,t={}){if(this.isElement(e)){let n=(i,r)=>{let a=e?.$attrs?.[i]?[e?.$attrs?.[i]]:[];return[r].flat().reduce((l,p)=>{if(p!=null){let d=typeof p;if(d===`string`||d===`number`)l.push(p);else if(d===`object`){let u=Array.isArray(p)?n(i,p):Object.entries(p).map(([f,v])=>i===`style`&&(v||v===0)?`${f.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${v}`:v?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},a)};Object.entries(t).forEach(([i,r])=>{if(r!=null){let a=i.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),r):i===`pBind`?this.setAttributes(e,r):(r=i===`class`?[...new Set(n(`class`,r))].join(` `).trim():i===`style`?n(`style`,r).join(`;`).trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=r),e.setAttribute(i,r))}})}}static isFocusableElement(e,t=``){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}};function Bn(){Tm({variableName:Oy(`scrollbar.width`).name})}function wn(){Im({variableName:Oy(`scrollbar.width`).name})}var Pe=class{element;listener;scrollableParents;constructor(e,t=()=>{}){this.element=e,this.listener=t}bindScrollListener(){this.scrollableParents=ft.getScrollableParents(this.element);for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener(`scroll`,this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener(`scroll`,this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var _e=(()=>{class o extends N{autofocus=!1;focused=!1;platformId=g(wm);document=g(gr);host=g(Pn);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute(`autofocus`):this.host.nativeElement.setAttribute(`autofocus`,!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Wf(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=ft.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵdir=qp({type:o,selectors:[[``,`pAutoFocus`,``]],inputs:{autofocus:[0,`pAutoFocus`,`autofocus`]},features:[Zp]})}return o})();var E=(()=>{class o$1{el;renderer;pBind=PP(void 0);_attrs=ae(void 0);attrs=Zt(()=>this._attrs()||this.pBind());styles=Zt(()=>this.attrs()?.style);classes=Zt(()=>G(this.attrs()?.class));listeners=[];constructor(t,n){this.el=t,this.renderer=n,ri(()=>{let l=this.attrs()||{},{style:i,class:r}=l,a=o(l,[`style`,`class`]);for(let[p,d]of Object.entries(a))if(p.startsWith(`on`)&&typeof d==`function`){let u=p.slice(2).toLowerCase();if(!this.listeners.some(f=>f.eventName===u)){let f=this.renderer.listen(this.el.nativeElement,u,d);this.listeners.push({eventName:u,unlisten:f})}}else d==null?this.renderer.removeAttribute(this.el.nativeElement,p):(this.renderer.setAttribute(this.el.nativeElement,p,d.toString()),p in this.el.nativeElement&&(this.el.nativeElement[p]=d))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){ro(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static ɵfac=function(n){return new(n||o$1)(Pr$1(Pn),Pr$1(Za))};static ɵdir=qp({type:o$1,selectors:[[``,`pBind`,``]],hostVars:4,hostBindings:function(n,i){n&2&&(mD(i.styles()),vD(i.classes()))},inputs:{pBind:[1,`pBind`]}})}return o$1})();var Ee=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pE({type:o});static ɵinj=pu({})}return o})();var Ye=`
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }


    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;var Ke={root:({instance:o})=>{let e=typeof o.value==`function`?o.value():o.value,t=typeof o.size==`function`?o.size():o.size,n=typeof o.badgeSize==`function`?o.badgeSize():o.badgeSize,i=typeof o.severity==`function`?o.severity():o.severity;return[`p-badge p-component`,{"p-badge-circle":Pr(e)&&String(e).length===1,"p-badge-dot":ld(e),"p-badge-sm":t===`small`||n===`small`,"p-badge-lg":t===`large`||n===`large`,"p-badge-xl":t===`xlarge`||n===`xlarge`,"p-badge-info":i===`info`,"p-badge-success":i===`success`,"p-badge-warn":i===`warn`,"p-badge-danger":i===`danger`,"p-badge-secondary":i===`secondary`,"p-badge-contrast":i===`contrast`}]}};var De=(()=>{class o extends rl{name=`badge`;style=Ye;classes=Ke;static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵprov=B({token:o,factory:o.ɵfac})}return o})();var Ne=new S(`BADGE_INSTANCE`);var qt=(()=>{class o extends N{componentName=`Badge`;$pcBadge=g(Ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=PP();badgeSize=PP();size=PP();severity=PP();value=PP();badgeDisabled=PP(!1,{transform:UP});_componentStyle=g(De);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵcmp=dE({type:o,selectors:[[`p-badge`]],hostVars:5,hostBindings:function(n,i){n&2&&(th(`data-p`,i.dataP),vD(i.cn(i.cx(`root`),i.styleClass())),Ih(`display`,i.badgeDisabled()?`none`:null))},inputs:{styleClass:[1,`styleClass`],badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`]},features:[PD([De,{provide:Ne,useExisting:o},{provide:J,useExisting:o}]),IE([E]),Zp],decls:1,vars:1,template:function(n,i){n&1&&ND(0),n&2&&Sh(i.value())},dependencies:[Hn,ay,Ee],encapsulation:2})}return o})();var Me=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pE({type:o});static ɵinj=pu({imports:[qt,ay,ay]})}return o})();var tn={root:`p-fluid`};var Fe=(()=>{class o extends rl{name=`fluid`;classes=tn;static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵprov=B({token:o,factory:o.ɵfac})}return o})();var Ae=new S(`FLUID_INSTANCE`);var Le=(()=>{class o extends N{componentName=`Fluid`;$pcFluid=g(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=g(Fe);static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵcmp=(function(){return dE({type:o,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(i,r){i&2&&vD(r.cx(`root`))},features:[PD([Fe,{provide:Ae,useExisting:o},{provide:J,useExisting:o}]),IE([E]),Zp],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,r){i&1&&(KE(),JE(0))},dependencies:[Hn],encapsulation:2})})()}return o})();var en=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;var $e=(()=>{class o extends rl{name=`baseicon`;css=en;static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵprov=B({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var lt=(()=>{class o extends N{spin=!1;_componentStyle=g($e);getClassNames(){return G(`p-icon`,{"p-icon-spin":this.spin})}static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵcmp=(function(){return dE({type:o,selectors:[[`ng-component`]],hostAttrs:[`width`,`14`,`height`,`14`,`viewBox`,`0 0 14 14`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],hostVars:2,hostBindings:function(i,r){i&2&&vD(r.getClassNames())},inputs:{spin:[2,`spin`,`spin`,UP]},features:[PD([$e]),Zp],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,r){i&1&&(KE(),JE(0))},encapsulation:2})})()}return o})();var Po=(()=>{class o extends lt{static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵcmp=dE({type:o,selectors:[[``,`data-p-icon`,`chevron-down`]],features:[Zp],decls:1,vars:0,consts:[[`d`,`M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z`,`fill`,`currentColor`]],template:function(n,i){n&1&&(Xu(),oh(0,`path`,0))},encapsulation:2,changeDetection:1})}return o})();var ko=(()=>{class o extends lt{static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵcmp=dE({type:o,selectors:[[``,`data-p-icon`,`chevron-right`]],features:[Zp],decls:1,vars:0,consts:[[`d`,`M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z`,`fill`,`currentColor`]],template:function(n,i){n&1&&(Xu(),oh(0,`path`,0))},encapsulation:2,changeDetection:1})}return o})();var Oe=(()=>{class o extends lt{pathId;onInit(){this.pathId=`url(#`+ht()+`)`}static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵcmp=dE({type:o,selectors:[[``,`data-p-icon`,`spinner`]],features:[Zp],decls:5,vars:2,consts:[[`d`,`M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,i){n&1&&(Xu(),Jc(0,`g`),oh(1,`path`,0),Xc(),Jc(2,`defs`)(3,`clipPath`,1),oh(4,`rect`,2),Xc()()),n&2&&(th(`clip-path`,i.pathId),Rv(3),ah(`id`,i.pathId))},encapsulation:2,changeDetection:1})}return o})();var nn=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var on={root:`p-ink`};var Ve=(()=>{class o extends rl{name=`ripple`;style=nn;classes=on;static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵprov=B({token:o,factory:o.ɵfac})}return o})();var Re=(()=>{class o extends N{componentName=`Ripple`;zone=g(Ae$1);_componentStyle=g(Ve);animationListener;mouseDownListener;timeout;constructor(){super(),ri(()=>{Wf(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display===`none`)return;if(!this.$unstyled()&&Oa(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`false`),!$m(n)&&!Wm(n)){let l=Math.max(Mm(this.el.nativeElement),Ed(this.el.nativeElement));n.style.height=l+`px`,n.style.width=l+`px`}let i=zm(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-Wm(n)/2,a=t.pageY-i.top+this.document.body.scrollLeft-$m(n)/2;this.renderer.setStyle(n,`top`,a+`px`),this.renderer.setStyle(n,`left`,r+`px`),!this.$unstyled()&&_a(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let l=this.getInk();l&&(!this.$unstyled()&&Oa(l,`p-ink-active`),l.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className==`string`&&t[n].className.indexOf(`p-ink`)!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&Oa(t,`p-ink-active`),t.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&Oa(t.currentTarget,`p-ink-active`),t.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let t=this.renderer.createElement(`span`);this.renderer.addClass(t,`p-ink`),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,`data-p-ink`,`true`),this.renderer.setAttribute(t,`data-p-ink-active`,`false`),this.renderer.setAttribute(t,`aria-hidden`,`true`),this.renderer.setAttribute(t,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(t,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ym(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(n){return new(n||o)};static ɵdir=qp({type:o,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[PD([Ve]),Zp]})}return o})();var Wo=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pE({type:o});static ɵinj=pu({})}return o})();var je=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var sn={root:({instance:o})=>[`p-button p-component`,{"p-button-icon-only":o.hasIcon&&!o.label&&!o.buttonProps?.label&&!o.badge,"p-button-vertical":(o.iconPos===`top`||o.iconPos===`bottom`)&&o.label,"p-button-loading":o.loading||o.buttonProps?.loading,"p-button-link":o.link||o.buttonProps?.link,[`p-button-${o.severity||o.buttonProps?.severity}`]:o.severity||o.buttonProps?.severity,"p-button-raised":o.raised||o.buttonProps?.raised,"p-button-rounded":o.rounded||o.buttonProps?.rounded,"p-button-text":o.text||o.variant===`text`||o.buttonProps?.text||o.buttonProps?.variant===`text`,"p-button-outlined":o.outlined||o.variant===`outlined`||o.buttonProps?.outlined||o.buttonProps?.variant===`outlined`,"p-button-sm":o.size===`small`||o.buttonProps?.size===`small`,"p-button-lg":o.size===`large`||o.buttonProps?.size===`large`,"p-button-plain":o.plain||o.buttonProps?.plain,"p-button-fluid":o.hasFluid}],loadingIcon:`p-button-loading-icon`,icon:({instance:o})=>[`p-button-icon`,{[`p-button-icon-${o.iconPos||o.buttonProps?.iconPos}`]:o.label||o.buttonProps?.label,"p-button-icon-left":(o.iconPos===`left`||o.buttonProps?.iconPos===`left`)&&o.label||o.buttonProps?.label,"p-button-icon-right":(o.iconPos===`right`||o.buttonProps?.iconPos===`right`)&&o.label||o.buttonProps?.label,"p-button-icon-top":(o.iconPos===`top`||o.buttonProps?.iconPos===`top`)&&o.label||o.buttonProps?.label,"p-button-icon-bottom":(o.iconPos===`bottom`||o.buttonProps?.iconPos===`bottom`)&&o.label||o.buttonProps?.label},o.icon,o.buttonProps?.icon],spinnerIcon:({instance:o})=>Object.entries(o.cx(`icon`)).filter(([,e])=>!!e).reduce((e,[t])=>e+` ${t}`,`p-button-loading-icon`),label:`p-button-label`};var He=(()=>{class o extends rl{name=`button`;style=je;classes=sn;static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵprov=B({token:o,factory:o.ɵfac})}return o})();var Ue=new S(`BUTTON_INSTANCE`);var rn=(()=>{class o extends N{componentName=`Button`;hostName=``;$pcButton=g(Ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(E,{self:!0});_componentStyle=g(He);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}type=`button`;badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity=`secondary`;ariaLabel;autofocus;iconPos=`left`;icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=PP(void 0,{transform:UP});onClick=new je$1;onFocus=new je$1;onBlur=new je$1;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=g(Le,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case`content`:this._contentTemplate=t.template;break;case`icon`:this._iconTemplate=t.template;break;case`loadingicon`:this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant===`outlined`,text:this.text||this.variant===`text`,link:this.link,vertical:(this.iconPos===`top`||this.iconPos===`bottom`)&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static ɵfac=(()=>{let t;return function(i){return(t||(t=Sr(o)))(i||o)}})();static ɵcmp=(function(){let t=[`content`],n=[`loadingicon`],i=[`icon`],r=[`*`],a=(c,m)=>({class:c,pt:m});function l(c,m){c&1&&sh(0)}function p(c,m){if(c&1&&rh(0,`span`,7),c&2){let s=ZE(3);vD(s.cn(s.cx(`loadingIcon`),`pi-spin`,s.loadingIcon||(s.buttonProps==null?null:s.buttonProps.loadingIcon))),nh(`pBind`,s.ptm(`loadingIcon`)),th(`aria-hidden`,!0)}}function d(c,m){if(c&1&&(Xu(),rh(0,`svg`,8)),c&2){let s=ZE(3);vD(s.cn(s.cx(`loadingIcon`),s.cx(`spinnerIcon`))),nh(`pBind`,s.ptm(`loadingIcon`))(`spin`,!0),th(`aria-hidden`,!0)}}function u(c,m){if(c&1&&(el(0),Kp(1,p,1,4,`span`,3)(2,d,1,5,`svg`,6),tl()),c&2){let s=ZE(2);Rv(),nh(`ngIf`,s.loadingIcon||(s.buttonProps==null?null:s.buttonProps.loadingIcon)),Rv(),nh(`ngIf`,!(s.loadingIcon||s.buttonProps!=null&&s.buttonProps.loadingIcon))}}function f(c,m){}function v(c,m){if(c&1&&Kp(0,f,0,0,`ng-template`,9),c&2){let s=ZE(2);nh(`ngIf`,s.loadingIconTemplate||s._loadingIconTemplate)}}function _(c,m){if(c&1&&(el(0),Kp(1,u,3,2,`ng-container`,2)(2,v,1,1,null,5),tl()),c&2){let s=ZE();Rv(),nh(`ngIf`,!s.loadingIconTemplate&&!s._loadingIconTemplate),Rv(),nh(`ngTemplateOutlet`,s.loadingIconTemplate||s._loadingIconTemplate)(`ngTemplateOutletContext`,VD(3,a,s.cx(`loadingIcon`),s.ptm(`loadingIcon`)))}}function F(c,m){if(c&1&&rh(0,`span`,7),c&2){let s=ZE(2);vD(s.cn(s.cx(`icon`),s.icon||(s.buttonProps==null?null:s.buttonProps.icon))),nh(`pBind`,s.ptm(`icon`)),th(`data-p`,s.dataIconP)}}function tt(c,m){}function mt(c,m){if(c&1&&Kp(0,tt,0,0,`ng-template`,9),c&2){let s=ZE(2);nh(`ngIf`,!s.icon&&(s.iconTemplate||s._iconTemplate))}}function kt(c,m){if(c&1&&(el(0),Kp(1,F,1,4,`span`,3)(2,mt,1,1,null,5),tl()),c&2){let s=ZE();Rv(),nh(`ngIf`,(s.icon||(s.buttonProps==null?null:s.buttonProps.icon))&&!s.iconTemplate&&!s._iconTemplate),Rv(),nh(`ngTemplateOutlet`,s.iconTemplate||s._iconTemplate)(`ngTemplateOutletContext`,VD(3,a,s.cx(`icon`),s.ptm(`icon`)))}}function R(c,m){if(c&1&&(ki(0,`span`,7),ND(1),Kc()),c&2){let s=ZE();vD(s.cx(`label`)),nh(`pBind`,s.ptm(`label`)),th(`aria-hidden`,(s.icon||(s.buttonProps==null?null:s.buttonProps.icon))&&!(s.label||s.buttonProps!=null&&s.buttonProps.label))(`data-p`,s.dataLabelP),Rv(),Sh(s.label||(s.buttonProps==null?null:s.buttonProps.label))}}function We(c,m){if(c&1&&rh(0,`p-badge`,10),c&2){let s=ZE();nh(`value`,s.badge||(s.buttonProps==null?null:s.buttonProps.badge))(`severity`,s.badgeSeverity||(s.buttonProps==null?null:s.buttonProps.badgeSeverity))(`pt`,s.ptm(`pcBadge`))(`unstyled`,s.unstyled())}}return dE({type:o,selectors:[[`p-button`]],contentQueries:function(m,s,Q){if(m&1&&dh(Q,t,5)(Q,n,5)(Q,i,5)(Q,sy,4),m&2){let w;eD(w=tD())&&(s.contentTemplate=w.first),eD(w=tD())&&(s.loadingIconTemplate=w.first),eD(w=tD())&&(s.iconTemplate=w.first),eD(w=tD())&&(s.templates=w)}},inputs:{hostName:`hostName`,type:`type`,badge:`badge`,disabled:[2,`disabled`,`disabled`,UP],raised:[2,`raised`,`raised`,UP],rounded:[2,`rounded`,`rounded`,UP],text:[2,`text`,`text`,UP],plain:[2,`plain`,`plain`,UP],outlined:[2,`outlined`,`outlined`,UP],link:[2,`link`,`link`,UP],tabindex:[2,`tabindex`,`tabindex`,WP],size:`size`,variant:`variant`,style:`style`,styleClass:`styleClass`,badgeClass:`badgeClass`,badgeSeverity:`badgeSeverity`,ariaLabel:`ariaLabel`,autofocus:[2,`autofocus`,`autofocus`,UP],iconPos:`iconPos`,icon:`icon`,label:`label`,loading:[2,`loading`,`loading`,UP],loadingIcon:`loadingIcon`,severity:`severity`,buttonProps:`buttonProps`,fluid:[1,`fluid`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[PD([He,{provide:Ue,useExisting:o},{provide:J,useExisting:o}]),IE([E]),Zp],ngContentSelectors:r,decls:7,vars:17,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`ngStyle`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`],[3,`class`,`pBind`,4,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`,4,`ngIf`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`spinner`,3,`class`,`pBind`,`spin`,4,`ngIf`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`pBind`,`spin`],[3,`ngIf`],[3,`value`,`severity`,`pt`,`unstyled`]],template:function(m,s){m&1&&(KE(),ki(0,`button`,0),lh(`click`,function(w){return s.onClick.emit(w)})(`focus`,function(w){return s.onFocus.emit(w)})(`blur`,function(w){return s.onBlur.emit(w)}),JE(1),Kp(2,l,1,0,`ng-container`,1)(3,_,3,6,`ng-container`,2)(4,kt,3,6,`ng-container`,2)(5,R,2,6,`span`,3)(6,We,1,4,`p-badge`,4),Kc()),m&2&&(vD(s.cn(s.cx(`root`),s.styleClass,s.buttonProps==null?null:s.buttonProps.styleClass)),nh(`ngStyle`,s.style||(s.buttonProps==null?null:s.buttonProps.style))(`disabled`,s.disabled||s.loading||(s.buttonProps==null?null:s.buttonProps.disabled))(`pAutoFocus`,s.autofocus||(s.buttonProps==null?null:s.buttonProps.autofocus))(`pBind`,s.ptm(`root`)),th(`type`,s.type||(s.buttonProps==null?null:s.buttonProps.type))(`aria-label`,s.ariaLabel||(s.buttonProps==null?null:s.buttonProps.ariaLabel))(`tabindex`,s.tabindex||(s.buttonProps==null?null:s.buttonProps.tabindex))(`data-p`,s.dataP)(`data-p-disabled`,s.disabled||s.loading||(s.buttonProps==null?null:s.buttonProps.disabled))(`data-p-severity`,s.severity||(s.buttonProps==null?null:s.buttonProps.severity)),Rv(2),nh(`ngTemplateOutlet`,s.contentTemplate||s._contentTemplate),Rv(),nh(`ngIf`,s.loading||(s.buttonProps==null?null:s.buttonProps.loading)),Rv(),nh(`ngIf`,!(s.loading||s.buttonProps!=null&&s.buttonProps.loading)),Rv(),nh(`ngIf`,!s.contentTemplate&&!s._contentTemplate&&(s.label||(s.buttonProps==null?null:s.buttonProps.label))),Rv(),nh(`ngIf`,!s.contentTemplate&&!s._contentTemplate&&(s.badge||(s.buttonProps==null?null:s.buttonProps.badge))))},dependencies:[Hn,Al,Il,Tl,Re,_e,Oe,Me,qt,ay,E],encapsulation:2})})()}return o})();var Bi=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pE({type:o});static ɵinj=pu({imports:[Hn,rn,ay,ay]})}return o})();export{ko as _,J as a,rn as b,N as c,Po as d,Re as f,ht as g,ft as h,Ee as i,Oe as l,_e as m,Bn as n,Le as o,Wo as p,E as r,Me as s,Bi as t,Pe as u,lt as v,wn as x,qt as y};