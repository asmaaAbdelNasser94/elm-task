import{a as ze,b as $e}from"./chunk-ZSI6PASF.js";import{a as Le,b as H,c as G,i as f,j as se,o as je,p as Qe,t as le,u as qe}from"./chunk-24GJ2POT.js";import{A as De,Aa as q,N as Ne,Oa as K,P as Ae,b as Z,c as Ee,ca as te,d as Q,da as me,e as ke,f as J,fa as Re,g as $,h as ee,q as Fe,ua as ge,xa as re,ya as oe,za as ie}from"./chunk-BSUCRLQB.js";import{$ as be,$a as r,Ab as m,Bb as C,Cb as T,Ea as de,J as D,Ja as M,Jb as L,Lb as V,M as U,Ma as N,Na as A,O as _,Oa as c,Ob as j,Pb as z,Rb as b,T as B,U as O,Ua as v,V as ne,Xa as Ie,Za as Se,Zb as P,_ as ae,_a as we,ab as d,bb as u,cb as y,da as xe,gb as E,gc as Y,ha as I,hb as k,hc as Oe,ib as x,ja as Ce,jb as F,lb as S,mb as p,mc as Ve,nb as R,ob as w,pb as W,qb as Me,rb as g,sb as h,ta as Te,va as o,wb as ue,yb as Pe,zb as Be}from"./chunk-STC5BZO7.js";var Vi=["success","info","secondary"];var Ke=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var st=["icon"],lt=["*"];function ct(t,a){if(t&1&&y(0,"span",4),t&2){let e=p(2);m(e.cx("icon")),r("ngClass",e.icon)("pBind",e.ptm("icon"))}}function pt(t,a){if(t&1&&(E(0),c(1,ct,1,4,"span",3),k()),t&2){let e=p();o(),r("ngIf",e.icon)}}function dt(t,a){}function ut(t,a){t&1&&c(0,dt,0,0,"ng-template")}function mt(t,a){if(t&1&&(d(0,"span",2),c(1,ut,1,0,null,5),u()),t&2){let e=p();m(e.cx("icon")),r("pBind",e.ptm("icon")),o(),r("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var gt={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},He=(()=>{class t extends K{name="tag";style=Ke;classes=gt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Ge=new U("TAG_INSTANCE"),Xe=(()=>{class t extends G{componentName="Tag";$pcTag=_(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=_(He);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="icon"&&(this._iconTemplate=e.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-tag"]],contentQueries:function(n,i,s){if(n&1&&W(s,st,4)(s,ie,4),n&2){let l;g(l=h())&&(i.iconTemplate=l.first),g(l=h())&&(i.templates=l)}},hostVars:3,hostBindings:function(n,i){n&2&&(v("data-p",i.dataP),m(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",Y]},features:[L([He,{provide:Ge,useExisting:t},{provide:H,useExisting:t}]),N([f]),A],ngContentSelectors:lt,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(n,i){n&1&&(R(),w(0),c(1,pt,2,1,"ng-container",0)(2,mt,2,4,"span",1),d(3,"span",2),C(4),u()),n&2&&(o(),r("ngIf",!i.iconTemplate&&!i._iconTemplate),o(),r("ngIf",i.iconTemplate||i._iconTemplate),o(),m(i.cx("label")),r("pBind",i.ptm("label")),o(),T(i.value))},dependencies:[$,Z,Q,J,q,f],encapsulation:2,changeDetection:0})}return t})();var Ue=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var ht=["*"];function ft(t,a){if(t&1&&(d(0,"span",3),C(1),u()),t&2){let e=p();m(e.cx("label")),r("pBind",e.ptm("label")),v("data-p",e.dataP),o(),T(e.label)}}function vt(t,a){if(t&1&&y(0,"span",5),t&2){let e=p(2);m(e.icon),r("pBind",e.ptm("icon"))("ngClass",e.cx("icon")),v("data-p",e.dataP)}}function _t(t,a){if(t&1&&c(0,vt,1,5,"span",4),t&2){let e=p(),n=ue(5);r("ngIf",e.icon)("ngIfElse",n)}}function yt(t,a){if(t&1){let e=F();d(0,"img",7),S("error",function(i){B(e);let s=p(2);return O(s.imageError(i))}),u()}if(t&2){let e=p(2);r("pBind",e.ptm("image"))("src",e.image,Te),v("aria-label",e.ariaLabel)("data-p",e.dataP)}}function bt(t,a){if(t&1&&c(0,yt,1,4,"img",6),t&2){let e=p();r("ngIf",e.image)}}var xt={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},We=(()=>{class t extends K{name="avatar";style=Ue;classes=xt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var Ye=new U("AVATAR_INSTANCE"),Ze=(()=>{class t extends G{componentName="Avatar";$pcAvatar=_(Ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new ae;_componentStyle=_(We);imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({[this.shape]:this.shape,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,i){n&2&&(v("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("data-p",i.dataP),m(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[L([We,{provide:Ye,useExisting:t},{provide:H,useExisting:t}]),N([f]),A],ngContentSelectors:ht,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(n,i){if(n&1&&(R(),w(0),c(1,ft,2,5,"span",2)(2,_t,1,2,"ng-template",null,0,b)(4,bt,1,1,"ng-template",null,1,b)),n&2){let s=ue(3);o(),r("ngIf",i.label)("ngIfElse",s)}},dependencies:[$,Z,Q,q,f],encapsulation:2,changeDetection:0})}return t})();var Je=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Ct=["header"],Tt=["title"],It=["subtitle"],St=["content"],wt=["footer"],Mt=["*",[["p-header"]],[["p-footer"]]],Pt=["*","p-header","p-footer"];function Bt(t,a){t&1&&x(0)}function Ot(t,a){if(t&1&&(d(0,"div",1),w(1,1),c(2,Bt,1,0,"ng-container",2),u()),t&2){let e=p();m(e.cx("header")),r("pBind",e.ptm("header")),o(2),r("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Et(t,a){if(t&1&&(E(0),C(1),k()),t&2){let e=p(2);o(),T(e.header)}}function kt(t,a){t&1&&x(0)}function Ft(t,a){if(t&1&&(d(0,"div",1),c(1,Et,2,1,"ng-container",3)(2,kt,1,0,"ng-container",2),u()),t&2){let e=p();m(e.cx("title")),r("pBind",e.ptm("title")),o(),r("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),o(),r("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function Vt(t,a){if(t&1&&(E(0),C(1),k()),t&2){let e=p(2);o(),T(e.subheader)}}function Dt(t,a){t&1&&x(0)}function Nt(t,a){if(t&1&&(d(0,"div",1),c(1,Vt,2,1,"ng-container",3)(2,Dt,1,0,"ng-container",2),u()),t&2){let e=p();m(e.cx("subtitle")),r("pBind",e.ptm("subtitle")),o(),r("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),o(),r("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function At(t,a){t&1&&x(0)}function Rt(t,a){t&1&&x(0)}function Lt(t,a){if(t&1&&(d(0,"div",1),w(1,2),c(2,Rt,1,0,"ng-container",2),u()),t&2){let e=p();m(e.cx("footer")),r("pBind",e.ptm("footer")),o(2),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var jt=`
    ${Je}

    .p-card {
        display: block;
    }
`,zt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},et=(()=>{class t extends K{name="card";style=jt;classes=zt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var tt=new U("CARD_INSTANCE"),it=(()=>{class t extends G{componentName="Card";$pcCard=_(tt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(f,{self:!0});_componentStyle=_(et);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){De(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(n=>{this.el.nativeElement.style[n]=e[n]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=xe(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["p-card"]],contentQueries:function(n,i,s){if(n&1&&W(s,re,5)(s,oe,5)(s,Ct,4)(s,Tt,4)(s,It,4)(s,St,4)(s,wt,4)(s,ie,4),n&2){let l;g(l=h())&&(i.headerFacet=l.first),g(l=h())&&(i.footerFacet=l.first),g(l=h())&&(i.headerTemplate=l.first),g(l=h())&&(i.titleTemplate=l.first),g(l=h())&&(i.subtitleTemplate=l.first),g(l=h())&&(i.contentTemplate=l.first),g(l=h())&&(i.footerTemplate=l.first),g(l=h())&&(i.templates=l)}},hostVars:4,hostBindings:function(n,i){n&2&&(Be(i._style()),m(i.cn(i.cx("root"),i.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[L([et,{provide:tt,useExisting:t},{provide:H,useExisting:t}]),N([f]),A],ngContentSelectors:Pt,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,i){n&1&&(R(Mt),c(0,Ot,3,4,"div",0),d(1,"div",1),c(2,Ft,3,5,"div",0)(3,Nt,3,5,"div",0),d(4,"div",1),w(5),c(6,At,1,0,"ng-container",2),u(),c(7,Lt,3,4,"div",0),u()),n&2&&(r("ngIf",i.headerFacet||i.headerTemplate||i._headerTemplate),o(),m(i.cx("body")),r("pBind",i.ptm("body")),o(),r("ngIf",i.header||i.titleTemplate||i._titleTemplate),o(),r("ngIf",i.subheader||i.subtitleTemplate||i._subtitleTemplate),o(),m(i.cx("content")),r("pBind",i.ptm("content")),o(2),r("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),o(),r("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[$,Q,J,q,se,f],encapsulation:2,changeDetection:0})}return t})();var nt=`
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: row;
        gap: dt('carousel.content.gap');
    }

    .p-carousel-content:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-item-list {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-item-list:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-prev-button,
    .p-carousel-next-button {
        align-self: center;
        flex-shrink: 0;
    }

    .p-carousel-indicator-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: dt('carousel.indicator.list.padding');
        gap: dt('carousel.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-carousel-indicator-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('carousel.indicator.background');
        width: dt('carousel.indicator.width');
        height: dt('carousel.indicator.height');
        border: 0 none;
        transition:
            background dt('carousel.transition.duration'),
            color dt('carousel.transition.duration'),
            outline-color dt('carousel.transition.duration'),
            box-shadow dt('carousel.transition.duration');
        outline-color: transparent;
        border-radius: dt('carousel.indicator.border.radius');
        padding: 0;
        margin: 0;
        user-select: none;
        cursor: pointer;
    }

    .p-carousel-indicator-button:focus-visible {
        box-shadow: dt('carousel.indicator.focus.ring.shadow');
        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
        outline-offset: dt('carousel.indicator.focus.ring.offset');
    }

    .p-carousel-indicator-button:hover {
        background: dt('carousel.indicator.hover.background');
    }

    .p-carousel-indicator-active .p-carousel-indicator-button {
        background: dt('carousel.indicator.active.background');
    }

    .p-carousel-vertical .p-carousel-content {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-item-list {
        flex-direction: column;
        height: 100%;
    }

    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
`;var Qt=["item"],$t=["header"],qt=["footer"],Kt=["previousicon"],Ht=["nexticon"],Gt=["itemsContainer"],Xt=["indicatorContent"],Ut=[[["p-header"]],[["p-footer"]]],Wt=["p-header","p-footer"],Yt=t=>({height:t}),pe=t=>({index:t}),ye=t=>({$implicit:t});function Zt(t,a){t&1&&x(0)}function Jt(t,a){if(t&1&&(d(0,"div",5),w(1),c(2,Zt,1,0,"ng-container",13),u()),t&2){let e=p();m(e.cx("header")),r("pBind",e.ptm("header")),o(2),r("ngTemplateOutlet",e.headerTemplate)}}function ei(t,a){t&1&&(ne(),y(0,"svg",18))}function ti(t,a){t&1&&(ne(),y(0,"svg",19))}function ii(t,a){if(t&1&&(E(0),c(1,ei,1,0,"svg",16)(2,ti,1,0,"svg",17),k()),t&2){let e=p(3);o(),r("ngIf",!e.isVertical()),o(),r("ngIf",e.isVertical())}}function ni(t,a){}function ai(t,a){t&1&&c(0,ni,0,0,"ng-template")}function ri(t,a){if(t&1&&(E(0),c(1,ai,1,0,null,13),k()),t&2){let e=p(3);o(),r("ngTemplateOutlet",e.previousIconTemplate||e._previousIconTemplate)}}function oi(t,a){if(t&1&&c(0,ii,3,2,"ng-container",15)(1,ri,2,1,"ng-container",15),t&2){let e=p(2);r("ngIf",!e.previousIconTemplate&&!e._previousIconTemplate&&!(e.prevButtonProps!=null&&e.prevButtonProps.icon)),o(),r("ngIf",(e.previousIconTemplate||e._previousIconTemplate)&&!(e.prevButtonProps!=null&&e.prevButtonProps.icon))}}function si(t,a){if(t&1){let e=F();d(0,"p-button",14),S("click",function(i){B(e);let s=p();return O(s.navBackward(i))}),c(1,oi,2,2,"ng-template",null,1,b),u()}if(t&2){let e=p();m(e.cx("pcPrevButton")),r("text",!0)("buttonProps",e.prevButtonProps)("pt",e.ptm("pcPrevButton"))("unstyled",e.unstyled()),v("aria-label",e.ariaPrevButtonLabel())}}function li(t,a){t&1&&x(0)}function ci(t,a){if(t&1&&(d(0,"div",5),c(1,li,1,0,"ng-container",20),u()),t&2){let e=a.$implicit,n=a.index,i=p();m(i.cx("itemClone",V(11,pe,n))),r("pBind",i.ptm("itemClone")),v("aria-hidden",i.totalShiftedItems*-1!==i.value.length)("aria-label",i.ariaSlideNumber(n))("aria-roledescription",i.ariaSlideLabel())("data-p-carousel-item-active",i.totalShiftedItems*-1===i.value.length+i._numVisible)("data-p-carousel-item-start",n===0)("data-p-carousel-item-end",i.clonedItemsForStarting&&i.clonedItemsForStarting.length-1===n),o(),r("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",V(13,ye,e))}}function pi(t,a){t&1&&x(0)}function di(t,a){if(t&1&&(d(0,"div",21),c(1,pi,1,0,"ng-container",20),u()),t&2){let e=a.$implicit,n=a.index,i=p();m(i.cx("item",V(11,pe,n))),r("pBind",i.getItemPTOptions("item",n)),v("aria-hidden",!(i.firstIndex()<=n&&i.lastIndex()>=n))("aria-label",i.ariaSlideNumber(n))("aria-roledescription",i.ariaSlideLabel())("data-p-carousel-item-active",i.firstIndex()<=n&&i.lastIndex()>=n)("data-p-carousel-item-start",i.firstIndex()===n)("data-p-carousel-item-end",i.lastIndex()===n),o(),r("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",V(13,ye,e))}}function ui(t,a){t&1&&x(0)}function mi(t,a){if(t&1&&(d(0,"div",5),c(1,ui,1,0,"ng-container",20),u()),t&2){let e=a.$implicit,n=a.index,i=p();m(i.cx("itemClone",V(8,pe,n))),r("pBind",i.ptm("itemClone")),v("data-p-carousel-item-active",!1)("data-p-carousel-item-start",!1)("data-p-carousel-item-end",!1),o(),r("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",V(10,ye,e))}}function gi(t,a){t&1&&(ne(),y(0,"svg",25))}function hi(t,a){t&1&&(ne(),y(0,"svg",26))}function fi(t,a){if(t&1&&(E(0),c(1,gi,1,0,"svg",23)(2,hi,1,0,"svg",24),k()),t&2){let e=p(3);o(),r("ngIf",!e.isVertical()),o(),r("ngIf",e.isVertical())}}function vi(t,a){}function _i(t,a){t&1&&c(0,vi,0,0,"ng-template")}function yi(t,a){if(t&1&&(d(0,"span"),c(1,_i,1,0,null,13),u()),t&2){let e=p(3);o(),r("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function bi(t,a){if(t&1&&c(0,fi,3,2,"ng-container",15)(1,yi,2,1,"span",15),t&2){let e=p(2);r("ngIf",!e.nextIconTemplate&&!e._nextIconTemplate&&!(e.nextButtonProps!=null&&e.nextButtonProps.icon)),o(),r("ngIf",e.nextIconTemplate||e._nextIconTemplate&&!(e.nextButtonProps!=null&&e.nextButtonProps.icon))}}function xi(t,a){if(t&1){let e=F();d(0,"p-button",22),S("click",function(i){B(e);let s=p();return O(s.navForward(i))}),c(1,bi,2,2,"ng-template",null,1,b),u()}if(t&2){let e=p();m(e.cx("pcNextButton")),r("buttonProps",e.nextButtonProps)("text",!0)("pt",e.ptm("pcNextButton"))("unstyled",e.unstyled()),v("aria-label",e.ariaNextButtonLabel())}}function Ci(t,a){if(t&1){let e=F();d(0,"li",5)(1,"button",28),S("click",function(i){let s=B(e).index,l=p(2);return O(l.onDotClick(i,s))}),u()()}if(t&2){let e=a.index,n=p(2);m(n.cx("indicator",V(11,pe,e))),r("pBind",n.getIndicatorPTOptions("indicator",e)),v("data-p-active",n._page===e),o(),m(n.cx("indicatorButton")),r("ngStyle",n.indicatorStyle)("tabindex",n._page===e?0:-1)("pBind",n.getIndicatorPTOptions("indicatorButton",e)),v("aria-label",n.ariaPageLabel(e+1))("aria-current",n._page===e?"page":void 0)}}function Ti(t,a){if(t&1){let e=F();d(0,"ul",27,2),S("keydown",function(i){B(e);let s=p();return O(s.onIndicatorKeydown(i))}),c(2,Ci,2,13,"li",9),u()}if(t&2){let e=p();m(e.cx("indicatorList")),r("ngStyle",e.indicatorsContentStyle)("pBind",e.ptm("indicatorList")),o(2),r("ngForOf",e.totalDotsArray())}}function Ii(t,a){t&1&&x(0)}function Si(t,a){if(t&1&&(d(0,"div",5),w(1,1),c(2,Ii,1,0,"ng-container",13),u()),t&2){let e=p();m(e.cx("footer")),r("pBind",e.ptm("footer")),o(2),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var wi={root:({instance:t})=>["p-carousel p-component",{"p-carousel-vertical":t.isVertical(),"p-carousel-horizontal":!t.isVertical()}],header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:({instance:t})=>["p-carousel-prev-button",{"p-disabled":t.isBackwardNavDisabled()}],viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:({instance:t,index:a})=>["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":t.totalShiftedItems*-1===t.value.length,"p-carousel-item-start":a===0,"p-carousel-item-end":t.clonedItemsForStarting.length-1===a}],item:({instance:t,index:a})=>["p-carousel-item",{"p-carousel-item-active":t.firstIndex()<=a&&t.lastIndex()>=a,"p-carousel-item-start":t.firstIndex()===a,"p-carousel-item-end":t.lastIndex()===a}],pcNextButton:({instance:t})=>["p-carousel-next-button",{"p-disabled":t.isForwardNavDisabled()}],indicatorList:({instance:t})=>["p-carousel-indicator-list",t.indicatorsContentClass],indicator:({instance:t,index:a})=>["p-carousel-indicator",{"p-carousel-indicator-active":t._page===a}],indicatorButton:({instance:t})=>["p-carousel-indicator-button",t.indicatorStyleClass],footer:"p-carousel-footer"},at=(()=>{class t extends K{name="carousel";style=nt;classes=wi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=D({token:t,factory:t.\u0275fac})}return t})();var rt=(()=>{class t extends G{el;zone;componentName="Carousel";bindDirectiveInstance=_(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}get page(){return this._page}set page(e){this.isCreated&&e!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),e>this._page&&e<=this.totalDots()-1?this.step(-1,e):e<this._page&&this.step(1,e)),this._page=e}get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e}get numScroll(){return this._numVisible}set numScroll(e){this._numScroll=e}responsiveOptions;orientation="horizontal";verticalViewPortHeight="300px";contentClass="";indicatorsContentClass="";indicatorsContentStyle;indicatorStyleClass="";indicatorStyle;get value(){return this._value}set value(e){this._value=e}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;styleClass;prevButtonProps={severity:"secondary",text:!0,rounded:!0};nextButtonProps={severity:"secondary",text:!0,rounded:!0};onPage=new ae;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousIconTemplate;nextIconTemplate;_itemTemplate;_headerTemplate;_footerTemplate;_previousIconTemplate;_nextIconTemplate;window;_componentStyle=_(at);constructor(e,n){super(),this.el=e,this.zone=n,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}onChanges(e){ee(this.platformId)&&(e.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(e.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),e.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}templates;onAfterContentInit(){this.id=Le("pn_id_"),ee(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"previousicon":this._previousIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}}),this.cd.detectChanges()}onAfterContentChecked(){if(ee(this.platformId)){let e=this.isCircular(),n=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let i=this._page;this.totalDots()!==0&&i>=this.totalDots()&&(i=this.totalDots()-1,this._page=i,this.onPage.emit({page:this.page})),n=i*this._numScroll*-1,e&&(n-=this._numVisible),i===this.totalDots()-1&&this.remainingItems>0?(n+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,n!==this.totalShiftedItems&&(this.totalShiftedItems=n),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${n*(100/this._numVisible)}%, 0)`:`translate3d(${n*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}e&&(this.page===0?n=-1*this._numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",ge(this.carouselStyle,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle),ge(this.carouselStyle,"nonce",this.config?.csp()?.nonce));let e=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions&&!this.$unstyled()){this.responsiveOptions.sort((n,i)=>{let s=n.breakpoint,l=i.breakpoint,X=null;return s==null&&l!=null?X=-1:s!=null&&l==null?X=1:s==null&&l==null?X=0:typeof s=="string"&&typeof l=="string"?X=s.localeCompare(l,void 0,{numeric:!0}):X=s<l?-1:s>l?1:0,-1*X});for(let n=0;n<this.responsiveOptions.length;n++){let i=this.responsiveOptions[n];e+=`
                    @media screen and (max-width: ${i.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/i.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=e}calculatePosition(){if(this.responsiveOptions){let e={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let n=window.innerWidth;for(let i=0;i<this.responsiveOptions.length;i++){let s=this.responsiveOptions[i];parseInt(s.breakpoint,10)>=n&&(e=s)}}if(this._numScroll!==e.numScroll){let n=this._page;n=Math.floor(n*this._numScroll/e.numScroll);let i=e.numScroll*this.page*-1;this.isCircular()&&(i-=e.numVisible),this.totalShiftedItems=i,this._numScroll=e.numScroll,this._page=n,this.onPage.emit({page:this.page})}this._numVisible!==e.numVisible&&(this._numVisible=e.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let e=this.totalDots();return e<=0?[]:Array(e).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(e,n){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,n),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}navBackward(e,n){(this.isCircular()||this._page!==0)&&this.step(1,n),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}onDotClick(e,n){let i=this._page;this.autoplayInterval&&this.stopAutoplay(),n>i?this.navForward(e,n):n<i&&this.navBackward(e,n)}onIndicatorKeydown(e){switch(e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let e=[...te(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=[...te(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)}onTabKey(){let e=[...te(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],n=e.findIndex(l=>Re(l,"data-p-highlight")===!0),i=me(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),s=e.findIndex(l=>l===i.parentElement);e[s].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...te(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')],n=me(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(i=>i===n?.parentElement)}changedFocusedIndicator(e,n){let i=[...te(this.indicatorContent?.nativeElement,'[data-pc-section="indicator"]')];i[e].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()}step(e,n){let i=this.totalShiftedItems,s=this.isCircular();if(n!=null)i=this._numScroll*n*-1,s&&(i-=this._numVisible),this.isRemainingItemsAdded=!1;else{i+=this._numScroll*e,this.isRemainingItemsAdded&&(i+=this.remainingItems-this._numScroll*e,this.isRemainingItemsAdded=!1);let l=s?i+this._numVisible:i;n=Math.abs(Math.floor(l/this._numScroll))}s&&this.page===this.totalDots()-1&&e===-1?(i=-1*(this.value.length+this._numVisible),n=0):s&&this.page===0&&e===1?(i=0,n=this.totalDots()-1):n===this.totalDots()-1&&this.remainingItems>0&&(i+=this.remainingItems*-1-this._numScroll*e,this.isRemainingItemsAdded=!0),this.itemsContainer&&(!this.$unstyled()&&Ae(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this._numVisible)}%, 0)`:`translate3d(${i*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i,this._page=n,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(e=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,e&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(!this.$unstyled()&&Ne(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(e){let n=e.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchEnd(e){let n=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,n.pageY-this.startPos.y):this.changePageOnTouch(e,n.pageX-this.startPos.x)}changePageOnTouch(e,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(e):this.navBackward(e))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria?.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria?.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria?.nextPageLabel:void 0}ariaSlideNumber(e){return this.config.translation.aria?this.config.translation.aria?.slideNumber?.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.config.translation.aria?this.config.translation.aria?.pageLabel?.replace(/{page}/g,e):void 0}getIndicatorPTOptions(e,n){return this.ptm(e,{context:{highlighted:n===this._page}})}getItemPTOptions(e,n){return this.ptm(e,{context:{index:n,active:this.firstIndex()<=n&&this.lastIndex()>=n,start:this.firstIndex()===n,end:this.lastIndex()===n}})}bindDocumentListeners(){ee(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",e=>{this.calculatePosition()})))}unbindDocumentListeners(){ee(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static \u0275fac=function(n){return new(n||t)(de(Ce),de(be))};static \u0275cmp=M({type:t,selectors:[["p-carousel"]],contentQueries:function(n,i,s){if(n&1&&W(s,re,5)(s,oe,5)(s,Qt,4)(s,$t,4)(s,qt,4)(s,Kt,4)(s,Ht,4)(s,ie,4),n&2){let l;g(l=h())&&(i.headerFacet=l.first),g(l=h())&&(i.footerFacet=l.first),g(l=h())&&(i.itemTemplate=l.first),g(l=h())&&(i.headerTemplate=l.first),g(l=h())&&(i.footerTemplate=l.first),g(l=h())&&(i.previousIconTemplate=l.first),g(l=h())&&(i.nextIconTemplate=l.first),g(l=h())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&Me(Gt,5)(Xt,5),n&2){let s;g(s=h())&&(i.itemsContainer=s.first),g(s=h())&&(i.indicatorContent=s.first)}},hostVars:4,hostBindings:function(n,i){n&2&&(v("id",i.id)("role","region"),m(i.cn(i.cx("root"),i.styleClass)))},inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:[2,"circular","circular",Y],showIndicators:[2,"showIndicators","showIndicators",Y],showNavigators:[2,"showNavigators","showNavigators",Y],autoplayInterval:[2,"autoplayInterval","autoplayInterval",Oe],styleClass:"styleClass",prevButtonProps:"prevButtonProps",nextButtonProps:"nextButtonProps"},outputs:{onPage:"onPage"},features:[L([at,{provide:H,useExisting:t}]),N([f]),A],ngContentSelectors:Wt,decls:13,vars:25,consts:[["itemsContainer",""],["icon",""],["indicatorContent",""],[3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],[3,"pBind"],["attr.data-pc-group-section","navigator",3,"class","text","buttonProps","pt","unstyled","click",4,"ngIf"],[3,"touchend","touchstart","touchmove","ngStyle","pBind"],[3,"transitionend","pBind"],[3,"class","pBind",4,"ngFor","ngForOf"],["role","group",3,"class","pBind",4,"ngFor","ngForOf"],["type","button","attr.data-pc-group-section","navigator",3,"class","buttonProps","text","pt","unstyled","click",4,"ngIf"],[3,"class","ngStyle","pBind","keydown",4,"ngIf"],[4,"ngTemplateOutlet"],["attr.data-pc-group-section","navigator",3,"click","text","buttonProps","pt","unstyled"],[4,"ngIf"],["data-p-icon","chevron-left",4,"ngIf"],["data-p-icon","chevron-up",4,"ngIf"],["data-p-icon","chevron-left"],["data-p-icon","chevron-up"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","group",3,"pBind"],["type","button","attr.data-pc-group-section","navigator",3,"click","buttonProps","text","pt","unstyled"],["data-p-icon","chevron-right",4,"ngIf"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-right"],["data-p-icon","chevron-down"],[3,"keydown","ngStyle","pBind"],["type","button",3,"click","ngStyle","tabindex","pBind"]],template:function(n,i){n&1&&(R(Ut),c(0,Jt,3,4,"div",3),d(1,"div",4)(2,"div",5),c(3,si,3,7,"p-button",6),d(4,"div",7),S("touchend",function(l){return i.onTouchEnd(l)})("touchstart",function(l){return i.onTouchStart(l)})("touchmove",function(l){return i.onTouchMove(l)}),d(5,"div",8,0),S("transitionend",function(){return i.onTransitionEnd()}),c(7,ci,2,15,"div",9)(8,di,2,15,"div",10)(9,mi,2,12,"div",9),u()(),c(10,xi,3,7,"p-button",11),u(),c(11,Ti,3,5,"ul",12),u(),c(12,Si,3,4,"div",3)),n&2&&(r("ngIf",i.headerFacet||i.headerTemplate),o(),m(i.contentClass),r("ngClass",i.cx("contentContainer"))("pBind",i.ptm("contentContainer")),o(),m(i.cx("content")),r("pBind",i.ptm("content")),v("aria-live",i.allowAutoplay?"polite":"off"),o(),r("ngIf",i.showNavigators),o(),m(i.cx("viewport")),r("ngStyle",V(23,Yt,i.isVertical()?i.verticalViewPortHeight:"auto"))("pBind",i.ptm("viewport")),o(),m(i.cx("itemList")),r("pBind",i.ptm("itemList")),o(2),r("ngForOf",i.clonedItemsForStarting),o(),r("ngForOf",i.value),o(),r("ngForOf",i.clonedItemsForFinishing),o(),r("ngIf",i.showNavigators),o(),r("ngIf",i.showIndicators),o(),r("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[$,Z,Ee,Q,J,ke,Qe,qe,le,ze,je,$e,q,se,f],encapsulation:2,changeDetection:0})}return t})();function Mi(t,a){t&1&&y(0,"p-avatar",18)}function Pi(t,a){if(t&1&&(d(0,"span"),C(1),j(2,"translate"),u(),d(3,"p"),C(4),j(5,"translate"),u()),t&2){let e=p().$implicit;o(),T(z(2,2,e.titleKey)),o(3),T(z(5,4,e.descriptionKey))}}function Bi(t,a){if(t&1&&(y(0,"p-tag",17),j(1,"translate")),t&2){let e=a.$implicit;r("value",z(1,2,e.labelKey))("severity",e.severity)}}function Oi(t,a){if(t&1){let e=F();d(0,"div",19),y(1,"p-button",20),j(2,"translate"),j(3,"translate"),d(4,"p-button",21),j(5,"translate"),j(6,"translate"),S("onClick",function(){B(e);let i=p().$implicit,s=p();return O(s.openService(i.id))}),u()()}if(t&2){let e=p().$implicit;o(),r("outlined",!0)("label",z(2,5,e.secondaryActionKey))("ariaLabel",z(3,7,e.secondaryActionKey)),o(3),r("label",z(5,9,e.primaryActionKey))("ariaLabel",z(6,11,e.primaryActionKey))}}function Ei(t,a){if(t&1&&(d(0,"p-card",15),c(1,Mi,1,0,"ng-template",null,3,b)(3,Pi,6,6,"ng-template",null,4,b),d(5,"div",16),Se(6,Bi,2,4,"p-tag",17,Ie),u(),c(8,Oi,7,13,"ng-template",null,5,b),u()),t&2){let e=a.$implicit;o(6),we(e.tags)}}function ki(t,a){t&1&&(d(0,"span",22),y(1,"span",23),u())}function Fi(t,a){t&1&&(d(0,"span",24),y(1,"span",25),u())}var ot=class t{router=_(Fe);title=P.required();description=P.required();actionLabel=P.required();items=P.required();showNavigators=P(!0);variant=P("muted");textBtn=P(!1);actionSeverity=P("secondary");outlined=P(!0);openService(a){this.router.navigate(["/services",a])}responsiveOptions=[{breakpoint:"1023px",numVisible:2,numScroll:1},{breakpoint:"639px",numVisible:1,numScroll:1}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["elm-service-section"]],inputs:{title:[1,"title"],description:[1,"description"],actionLabel:[1,"actionLabel"],items:[1,"items"],showNavigators:[1,"showNavigators"],variant:[1,"variant"],textBtn:[1,"textBtn"],actionSeverity:[1,"actionSeverity"],outlined:[1,"outlined"]},decls:17,vars:17,consts:[["item",""],["previousicon",""],["nexticon",""],["header",""],["title",""],["footer",""],[1,"elm-service-section"],[1,"elm-service-section__inner"],[1,"elm-section-head"],[1,"d-flex","align-items-center","justify-content-between","gap-3"],[1,"elm-section-head__title"],["type","button",1,"flex-shrink-0",3,"severity","text","outlined","label","ariaLabel"],[1,"elm-section-head__description"],[1,"elm-service-section__carousel"],[3,"value","numVisible","numScroll","showNavigators","responsiveOptions"],["styleClass","elm-service-card"],[1,"elm-service-card__tags","d-flex","flex-wrap"],[3,"value","severity"],["icon","elm checkmark-circle","shape","circle","aria-hidden","true"],[1,"d-flex","flex-wrap","gap-2"],["type","button","size","small","severity","secondary",3,"outlined","label","ariaLabel"],["type","button","size","small",3,"onClick","label","ariaLabel"],["aria-hidden","true",1,"p-carousel-prev-icon"],[1,"elm","chevron-left"],["aria-hidden","true",1,"p-carousel-next-icon"],[1,"elm","chevron-right"]],template:function(e,n){e&1&&(d(0,"section",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"h2",10),C(5),u(),y(6,"p-button",11),u(),d(7,"p",12),C(8),u()()(),d(9,"div",13)(10,"p-carousel",14),c(11,Ei,10,0,"ng-template",null,0,b)(13,ki,2,0,"ng-template",null,1,b)(15,Fi,2,0,"ng-template",null,2,b),u()()()),e&2&&(Pe("elm-service-section--brand",n.variant()==="brand")("elm-service-section--navigators",n.showNavigators()),v("aria-label",n.title()),o(5),T(n.title()),o(),r("severity",n.actionSeverity())("text",n.textBtn)("outlined",n.outlined())("label",n.actionLabel())("ariaLabel",n.actionLabel()),o(2),T(n.description()),o(2),r("value",n.items())("numVisible",4)("numScroll",1)("showNavigators",n.showNavigators())("responsiveOptions",n.responsiveOptions))},dependencies:[Ze,le,it,rt,Xe,Ve],styles:['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .elm-service-section[_ngcontent-%COMP%]{background:var(--color-neutral-25);padding-block:var(--spacing-5xl)}[_nghost-%COMP%]   .elm-service-section--brand[_ngcontent-%COMP%]{background:var(--color-bg-brand-light)}[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{width:min(100%,80rem);margin-inline:auto}@media(min-width:300px)and (max-width:639px){[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{padding-inline:var(--spacing-xl)}}@media(min-width:640px)and (max-width:767px){[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{padding-inline:var(--spacing-xl)}}@media(min-width:768px)and (max-width:1023px){[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{padding-inline:var(--spacing-xl)}}[_nghost-%COMP%]   .elm-service-section[_ngcontent-%COMP%]   .elm-section-head[_ngcontent-%COMP%]{margin-bottom:var(--spacing-4xl)}[_nghost-%COMP%]   .elm-service-section__carousel[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .elm-service-card{display:flex;flex-direction:column;width:100%;max-width:20rem;height:100%;gap:var(--spacing-3xl);padding:var(--spacing-xl);background:var(--color-bg-surface);border:var(--border-width) solid var(--color-border-secondary);border-radius:var(--radius-lg);box-shadow:none}[_nghost-%COMP%]     .elm-service-card .p-card-header{padding:0;margin:0}[_nghost-%COMP%]     .elm-service-card .p-avatar{width:3rem;height:3rem;background:var(--color-primary-25)}[_nghost-%COMP%]     .elm-service-card .p-avatar .elm{width:1.25rem;height:1.25rem;background-color:var(--color-primary-600)}[_nghost-%COMP%]     .elm-service-card .p-card-body{display:flex;flex:1;flex-direction:column;gap:var(--spacing-3xl);padding:0}[_nghost-%COMP%]     .elm-service-card .p-card-title h3, [_nghost-%COMP%]     .elm-service-card .p-card-title p, [_nghost-%COMP%]     .elm-service-card .p-card-subtitle h3, [_nghost-%COMP%]     .elm-service-card .p-card-subtitle p{margin:0}[_nghost-%COMP%]     .elm-service-card .p-card-title{display:flex;flex-direction:column;gap:var(--spacing-md)}[_nghost-%COMP%]     .elm-service-card .p-card-title span{margin:0;color:var(--color-text-primary);font-size:var(--font-size-text-lg);font-weight:var(--font-weight-bold);line-height:var(--line-height-text-lg)}[_nghost-%COMP%]     .elm-service-card .p-card-title p{color:var(--color-text-paragraph);font-size:var(--font-size-text-md);font-weight:var(--font-weight-regular);line-height:var(--line-height-text-md)}[_nghost-%COMP%]     .elm-service-card .p-card-content{padding:0}[_nghost-%COMP%]     .elm-service-card .elm-service-card__tags{gap:var(--spacing-md);margin:0}[_nghost-%COMP%]     .elm-service-card .p-card-footer{margin-top:auto;padding:0}[_nghost-%COMP%]     .p-carousel-content-container{display:grid;grid-template-columns:1fr auto auto;grid-template-areas:"viewport viewport viewport" "indicators prev next";align-items:center;row-gap:var(--spacing-3xl);column-gap:var(--spacing-md);overflow:visible;padding-inline:max(0px,(100% - 80rem) / 2)}@media(min-width:300px)and (max-width:639px){[_nghost-%COMP%]     .p-carousel-content-container{padding-inline:var(--spacing-xl)}}@media(min-width:640px)and (max-width:767px){[_nghost-%COMP%]     .p-carousel-content-container{padding-inline:var(--spacing-xl)}}@media(min-width:768px)and (max-width:1023px){[_nghost-%COMP%]     .p-carousel-content-container{padding-inline:var(--spacing-xl)}}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-content-container{grid-template-columns:auto auto 1fr;grid-template-areas:"viewport viewport viewport" "next prev indicators"}[_nghost-%COMP%]     .p-carousel-content{display:contents}[_nghost-%COMP%]     .p-carousel-viewport{grid-area:viewport;display:flex;justify-content:flex-end;width:100vw;margin-inline:calc(50% - 50vw);justify-self:center;overflow:hidden}@media(min-width:300px)and (max-width:639px){[_nghost-%COMP%]     .p-carousel-viewport{width:calc(100% + var(--spacing-xl) + var(--spacing-xl));margin-inline:calc(-1 * var(--spacing-xl))}}@media(min-width:640px)and (max-width:767px){[_nghost-%COMP%]     .p-carousel-viewport{width:calc(100% + var(--spacing-xl) + var(--spacing-xl));margin-inline:calc(-1 * var(--spacing-xl))}}@media(min-width:768px)and (max-width:1023px){[_nghost-%COMP%]     .p-carousel-viewport{width:calc(100% + var(--spacing-xl) + var(--spacing-xl));margin-inline:calc(-1 * var(--spacing-xl))}}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-viewport{transform:scaleX(-1)}[_nghost-%COMP%]     .p-carousel-item-list{display:flex;width:min(100%,20rem + var(--spacing-md) + var(--spacing-md))}[_nghost-%COMP%]     .p-carousel-item{display:flex;flex:0 0 min(100%,20rem + var(--spacing-md) + var(--spacing-md))!important;width:min(100%,20rem + var(--spacing-md) + var(--spacing-md));max-width:min(100%,20rem + var(--spacing-md) + var(--spacing-md));padding-inline:var(--spacing-md)}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-item{transform:scaleX(-1)}@media(min-width:640px){[_nghost-%COMP%]     .p-carousel-item-list{width:calc(2*min(50vw,20rem + var(--spacing-md) + var(--spacing-md)))}[_nghost-%COMP%]     .p-carousel-item{flex-basis:min(50vw,20rem + var(--spacing-md) + var(--spacing-md))!important;width:min(50vw,20rem + var(--spacing-md) + var(--spacing-md));max-width:min(50vw,20rem + var(--spacing-md) + var(--spacing-md))}}@media(min-width:1024px){[_nghost-%COMP%]     .p-carousel-item-list{width:calc(4*min(25vw,20rem + var(--spacing-md) + var(--spacing-md)))}[_nghost-%COMP%]     .p-carousel-item{flex-basis:min(25vw,20rem + var(--spacing-md) + var(--spacing-md))!important;width:min(25vw,20rem + var(--spacing-md) + var(--spacing-md));max-width:min(25vw,20rem + var(--spacing-md) + var(--spacing-md))}}[_nghost-%COMP%]     .p-items-hidden .p-carousel-item{visibility:visible}[_nghost-%COMP%]     .p-carousel-indicator-list{grid-area:indicators;justify-content:flex-start;width:100%;margin:0}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-indicator-list{justify-content:flex-end}[_nghost-%COMP%]     .elm-service-section:not(.elm-service-section--navigators) .p-carousel-indicator-list{grid-column:1/-1;justify-content:center}[_nghost-%COMP%]     .p-carousel-indicator-button{width:.5rem;height:.5rem;border:0;border-radius:var(--radius-full);background:var(--color-neutral-300)}[_nghost-%COMP%]     .p-carousel-indicator[data-p-active=true] .p-carousel-indicator-button{background:var(--color-primary-600)}[_nghost-%COMP%]     .p-carousel-prev-button{grid-area:prev}[_nghost-%COMP%]     .p-carousel-next-button{grid-area:next}[_nghost-%COMP%]     .p-carousel-prev-button .p-button, [_nghost-%COMP%]     .p-carousel-next-button .p-button{width:3rem;height:3rem;gap:0;padding:0;border-radius:var(--radius-full);background:transparent;border:none;color:var(--color-neutral-0)}[_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover{background:var(--color-primary-600)}[_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-next-icon, [_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-prev-icon, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-next-icon, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-prev-icon{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-next-icon span, [_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-prev-icon span, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-next-icon span, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-prev-icon span{background-color:var(--color-neutral-0)}']})};export{rt as a,it as b,Vi as c,Xe as d,ot as e};
