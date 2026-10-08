import{Ar as rh,Bn as ZE,Bt as Ae,C as Jo,Ct as oy,Dn as Sr,Dt as ro,En as Sh,Et as rl,Fn as WD,Fr as tl,Hn as Zp,Ht as B,In as WP,Ir as vD,J as Wf$1,Jn as dh,Kn as dE,Kt as Eh,Ln as Wf,Mr as sh,N as Oa,Nr as tD,On as UP,Pn as Vu,Pr as th,Qn as fh,Qt as GD,R as Rl,Rt as $D,Tn as S,U as Tl,Ut as BE,Wn as ae,Wr as zE,Xn as eD,Zn as el,an as IE,ar as jE,b as Il,bn as Pn,cr as ki,d as Fa,dn as Kc,dr as lh,er as g,fn as Kp,fr as mD,gn as ND,gt as km,hr as nh,ht as jm,in as Hu,ir as jD,kr as rD,kt as sy,mt as iy,n as Al,o as Dd,pr as mF,rt as ay,sn as JE,sr as je,st as de,tn as HE,tt as _a,un as KE,v as Hn,vn as PD,wn as Rv,xn as Pr,yn as PP,zn as Xu}from"./main-UXRXMP6L.js";import{_ as ko,a as J,b as rn$1,c as N,d as Po,g as ht$1,i as Ee,r as E,t as Bi}from"./chunk-BoXzFG2O.js";import{n as j,r as x}from"./chunk-Dds9tvyB.js";var rn=[`success`,`info`,`secondary`];var mt=`
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
`;var Gt={root:({instance:n})=>[`p-tag p-component`,{"p-tag-info":n.severity===`info`,"p-tag-success":n.severity===`success`,"p-tag-warn":n.severity===`warn`,"p-tag-danger":n.severity===`danger`,"p-tag-secondary":n.severity===`secondary`,"p-tag-contrast":n.severity===`contrast`,"p-tag-rounded":n.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var gt=(()=>{class n extends rl{name=`tag`;style=mt;classes=Gt;static ɵfac=(()=>{let e;return function(r){return(e||(e=Sr(n)))(r||n)}})();static ɵprov=B({token:n,factory:n.ɵfac})}return n})();var ht=new S(`TAG_INSTANCE`);var ft=(()=>{class n extends N{componentName=`Tag`;$pcTag=g(ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=g(gt);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()===`icon`&&(this._iconTemplate=e.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static ɵfac=(()=>{let e;return function(r){return(e||(e=Sr(n)))(r||n)}})();static ɵcmp=(function(){let e=[`icon`],i=[`*`];function r(b,d){if(b&1&&rh(0,`span`,4),b&2){let v=ZE(2);vD(v.cx(`icon`)),nh(`ngClass`,v.icon)(`pBind`,v.ptm(`icon`))}}function C(b,d){if(b&1&&(el(0),Kp(1,r,1,4,`span`,3),tl()),b&2){let v=ZE();Rv(),nh(`ngIf`,v.icon)}}function w(b,d){}function F(b,d){b&1&&Kp(0,w,0,0,`ng-template`)}function S(b,d){if(b&1&&(ki(0,`span`,2),Kp(1,F,1,0,null,5),Kc()),b&2){let v=ZE();vD(v.cx(`icon`)),nh(`pBind`,v.ptm(`icon`)),Rv(),nh(`ngTemplateOutlet`,v.iconTemplate||v._iconTemplate)}}return dE({type:n,selectors:[[`p-tag`]],contentQueries:function(d,v,R){if(d&1&&dh(R,e,4)(R,sy,4),d&2){let V;eD(V=tD())&&(v.iconTemplate=V.first),eD(V=tD())&&(v.templates=V)}},hostVars:3,hostBindings:function(d,v){d&2&&(th(`data-p`,v.dataP),vD(v.cn(v.cx(`root`),v.styleClass)))},inputs:{styleClass:`styleClass`,severity:`severity`,value:`value`,icon:`icon`,rounded:[2,`rounded`,`rounded`,UP]},features:[PD([gt,{provide:ht,useExisting:n},{provide:J,useExisting:n}]),IE([E]),Zp],ngContentSelectors:i,decls:5,vars:6,consts:[[4,`ngIf`],[3,`class`,`pBind`,4,`ngIf`],[3,`pBind`],[3,`class`,`ngClass`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[4,`ngTemplateOutlet`]],template:function(d,v){d&1&&(KE(),JE(0),Kp(1,C,2,1,`ng-container`,0)(2,S,2,4,`span`,1),ki(3,`span`,2),ND(4),Kc()),d&2&&(Rv(),nh(`ngIf`,!v.iconTemplate&&!v._iconTemplate),Rv(),nh(`ngIf`,v.iconTemplate||v._iconTemplate),Rv(),vD(v.cx(`label`)),nh(`pBind`,v.ptm(`label`)),Rv(),Sh(v.value))},dependencies:[Hn,Rl,Al,Il,ay,E],encapsulation:2})})()}return n})();var vt=`
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
`;var Xt={root:({instance:n})=>[`p-avatar p-component`,{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape===`circle`,"p-avatar-lg":n.size===`large`,"p-avatar-xl":n.size===`xlarge`}],label:`p-avatar-label`,icon:`p-avatar-icon`};var _t=(()=>{class n extends rl{name=`avatar`;style=vt;classes=Xt;static ɵfac=(()=>{let e;return function(r){return(e||(e=Sr(n)))(r||n)}})();static ɵprov=B({token:n,factory:n.ɵfac})}return n})();var yt=new S(`AVATAR_INSTANCE`);var bt=(()=>{class n extends N{componentName=`Avatar`;$pcAvatar=g(yt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label;icon;image;size=`normal`;shape=`square`;styleClass;ariaLabel;ariaLabelledBy;onImageError=new je;_componentStyle=g(_t);imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({[this.shape]:this.shape,[this.size]:this.size})}static ɵfac=(()=>{let e;return function(r){return(e||(e=Sr(n)))(r||n)}})();static ɵcmp=(function(){let e=[`*`];function i(S,b){if(S&1&&(ki(0,`span`,3),ND(1),Kc()),S&2){let d=ZE();vD(d.cx(`label`)),nh(`pBind`,d.ptm(`label`)),th(`data-p`,d.dataP),Rv(),Sh(d.label)}}function r(S,b){if(S&1&&rh(0,`span`,5),S&2){let d=ZE(2);vD(d.icon),nh(`pBind`,d.ptm(`icon`))(`ngClass`,d.cx(`icon`)),th(`data-p`,d.dataP)}}function C(S,b){if(S&1&&Kp(0,r,1,5,`span`,4),S&2){let d=ZE(),v=rD(5);nh(`ngIf`,d.icon)(`ngIfElse`,v)}}function w(S,b){if(S&1){let d=zE();ki(0,`img`,7),lh(`error`,function(R){Vu(d);let V=ZE(2);return Hu(V.imageError(R))}),Kc()}if(S&2){let d=ZE(2);nh(`pBind`,d.ptm(`image`))(`src`,d.image,Wf),th(`aria-label`,d.ariaLabel)(`data-p`,d.dataP)}}function F(S,b){if(S&1&&Kp(0,w,1,4,`img`,6),S&2){let d=ZE();nh(`ngIf`,d.image)}}return dE({type:n,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(b,d){b&2&&(th(`aria-label`,d.ariaLabel)(`aria-labelledby`,d.ariaLabelledBy)(`data-p`,d.dataP),vD(d.cn(d.cx(`root`),d.styleClass)))},inputs:{label:`label`,icon:`icon`,image:`image`,size:`size`,shape:`shape`,styleClass:`styleClass`,ariaLabel:`ariaLabel`,ariaLabelledBy:`ariaLabelledBy`},outputs:{onImageError:`onImageError`},features:[PD([_t,{provide:yt,useExisting:n},{provide:J,useExisting:n}]),IE([E]),Zp],ngContentSelectors:e,decls:6,vars:2,consts:[[`iconTemplate`,``],[`imageTemplate`,``],[3,`pBind`,`class`,4,`ngIf`,`ngIfElse`],[3,`pBind`],[3,`pBind`,`class`,`ngClass`,4,`ngIf`,`ngIfElse`],[3,`pBind`,`ngClass`],[3,`pBind`,`src`,`error`,4,`ngIf`],[3,`error`,`pBind`,`src`]],template:function(b,d){if(b&1&&(KE(),JE(0),Kp(1,i,2,5,`span`,2)(2,C,1,2,`ng-template`,null,0,GD)(4,F,1,1,`ng-template`,null,1,GD)),b&2){let v=rD(3);Rv(),nh(`ngIf`,d.label)(`ngIfElse`,v)}},dependencies:[Hn,Rl,Al,ay,E],encapsulation:2})})()}return n})();var Ut=`
    
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


    .p-card {
        display: block;
    }
`;var Wt={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var xt=(()=>{class n extends rl{name=`card`;style=Ut;classes=Wt;static ɵfac=(()=>{let e;return function(r){return(e||(e=Sr(n)))(r||n)}})();static ɵprov=B({token:n,factory:n.ɵfac})}return n})();var Tt=new S(`CARD_INSTANCE`);var It=(()=>{class n extends N{componentName=`Card`;$pcCard=g(Tt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(E,{self:!0});_componentStyle=g(xt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header;subheader;set style(e){ro(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ae(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template}})}static ɵfac=(()=>{let e;return function(r){return(e||(e=Sr(n)))(r||n)}})();static ɵcmp=(function(){let e=[`header`],i=[`title`],r=[`subtitle`],C=[`content`],w=[`footer`],F=[`*`,[[`p-header`]],[[`p-footer`]]],S=[`*`,`p-header`,`p-footer`];function b(y,M){y&1&&sh(0)}function d(y,M){if(y&1&&(ki(0,`div`,1),JE(1,1),Kp(2,b,1,0,`ng-container`,2),Kc()),y&2){let s=ZE();vD(s.cx(`header`)),nh(`pBind`,s.ptm(`header`)),Rv(2),nh(`ngTemplateOutlet`,s.headerTemplate||s._headerTemplate)}}function v(y,M){if(y&1&&(el(0),ND(1),tl()),y&2){let s=ZE(2);Rv(),Sh(s.header)}}function R(y,M){y&1&&sh(0)}function V(y,M){if(y&1&&(ki(0,`div`,1),Kp(1,v,2,1,`ng-container`,3)(2,R,1,0,`ng-container`,2),Kc()),y&2){let s=ZE();vD(s.cx(`title`)),nh(`pBind`,s.ptm(`title`)),Rv(),nh(`ngIf`,s.header&&!s._titleTemplate&&!s.titleTemplate),Rv(),nh(`ngTemplateOutlet`,s.titleTemplate||s._titleTemplate)}}function Me(y,M){if(y&1&&(el(0),ND(1),tl()),y&2){let s=ZE(2);Rv(),Sh(s.subheader)}}function Ne(y,M){y&1&&sh(0)}function Be(y,M){if(y&1&&(ki(0,`div`,1),Kp(1,Me,2,1,`ng-container`,3)(2,Ne,1,0,`ng-container`,2),Kc()),y&2){let s=ZE();vD(s.cx(`subtitle`)),nh(`pBind`,s.ptm(`subtitle`)),Rv(),nh(`ngIf`,s.subheader&&!s._subtitleTemplate&&!s.subtitleTemplate),Rv(),nh(`ngTemplateOutlet`,s.subtitleTemplate||s._subtitleTemplate)}}function Pe(y,M){y&1&&sh(0)}function Oe(y,M){y&1&&sh(0)}function Ee$1(y,M){if(y&1&&(ki(0,`div`,1),JE(1,2),Kp(2,Oe,1,0,`ng-container`,2),Kc()),y&2){let s=ZE();vD(s.cx(`footer`)),nh(`pBind`,s.ptm(`footer`)),Rv(2),nh(`ngTemplateOutlet`,s.footerTemplate||s._footerTemplate)}}return dE({type:n,selectors:[[`p-card`]],contentQueries:function(M,s,Q){if(M&1&&dh(Q,iy,5)(Q,oy,5)(Q,e,4)(Q,i,4)(Q,r,4)(Q,C,4)(Q,w,4)(Q,sy,4),M&2){let P;eD(P=tD())&&(s.headerFacet=P.first),eD(P=tD())&&(s.footerFacet=P.first),eD(P=tD())&&(s.headerTemplate=P.first),eD(P=tD())&&(s.titleTemplate=P.first),eD(P=tD())&&(s.subtitleTemplate=P.first),eD(P=tD())&&(s.contentTemplate=P.first),eD(P=tD())&&(s.footerTemplate=P.first),eD(P=tD())&&(s.templates=P)}},hostVars:4,hostBindings:function(M,s){M&2&&(mD(s._style()),vD(s.cn(s.cx(`root`),s.styleClass)))},inputs:{header:`header`,subheader:`subheader`,style:`style`,styleClass:`styleClass`},features:[PD([xt,{provide:Tt,useExisting:n},{provide:J,useExisting:n}]),IE([E]),Zp],ngContentSelectors:S,decls:8,vars:11,consts:[[3,`pBind`,`class`,4,`ngIf`],[3,`pBind`],[4,`ngTemplateOutlet`],[4,`ngIf`]],template:function(M,s){M&1&&(KE(F),Kp(0,d,3,4,`div`,0),ki(1,`div`,1),Kp(2,V,3,5,`div`,0)(3,Be,3,5,`div`,0),ki(4,`div`,1),JE(5),Kp(6,Pe,1,0,`ng-container`,2),Kc(),Kp(7,Ee$1,3,4,`div`,0),Kc()),M&2&&(nh(`ngIf`,s.headerFacet||s.headerTemplate||s._headerTemplate),Rv(),vD(s.cx(`body`)),nh(`pBind`,s.ptm(`body`)),Rv(),nh(`ngIf`,s.header||s.titleTemplate||s._titleTemplate),Rv(),nh(`ngIf`,s.subheader||s.subtitleTemplate||s._subtitleTemplate),Rv(),vD(s.cx(`content`)),nh(`pBind`,s.ptm(`content`)),Rv(2),nh(`ngTemplateOutlet`,s.contentTemplate||s._contentTemplate),Rv(),nh(`ngIf`,s.footerFacet||s.footerTemplate||s._footerTemplate))},dependencies:[Hn,Al,Il,ay,Ee,E],encapsulation:2})})()}return n})();var St=`
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
`;var Yt={root:({instance:n})=>[`p-carousel p-component`,{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}],header:`p-carousel-header`,contentContainer:`p-carousel-content-container`,content:`p-carousel-content`,pcPrevButton:({instance:n})=>[`p-carousel-prev-button`,{"p-disabled":n.isBackwardNavDisabled()}],viewport:`p-carousel-viewport`,itemList:`p-carousel-item-list`,itemClone:({instance:n,index:I})=>[`p-carousel-item p-carousel-item-clone`,{"p-carousel-item-active":n.totalShiftedItems*-1===n.value.length,"p-carousel-item-start":I===0,"p-carousel-item-end":n.clonedItemsForStarting.length-1===I}],item:({instance:n,index:I})=>[`p-carousel-item`,{"p-carousel-item-active":n.firstIndex()<=I&&n.lastIndex()>=I,"p-carousel-item-start":n.firstIndex()===I,"p-carousel-item-end":n.lastIndex()===I}],pcNextButton:({instance:n})=>[`p-carousel-next-button`,{"p-disabled":n.isForwardNavDisabled()}],indicatorList:({instance:n})=>[`p-carousel-indicator-list`,n.indicatorsContentClass],indicator:({instance:n,index:I})=>[`p-carousel-indicator`,{"p-carousel-indicator-active":n._page===I}],indicatorButton:({instance:n})=>[`p-carousel-indicator-button`,n.indicatorStyleClass],footer:`p-carousel-footer`};var wt=(()=>{class n extends rl{name=`carousel`;style=St;classes=Yt;static ɵfac=(()=>{let e;return function(r){return(e||(e=Sr(n)))(r||n)}})();static ɵprov=B({token:n,factory:n.ɵfac})}return n})();var Mt=(()=>{class n extends N{el;zone;componentName=`Carousel`;bindDirectiveInstance=g(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}get page(){return this._page}set page(e){this.isCreated&&e!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),e>this._page&&e<=this.totalDots()-1?this.step(-1,e):e<this._page&&this.step(1,e)),this._page=e}get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e}get numScroll(){return this._numVisible}set numScroll(e){this._numScroll=e}responsiveOptions;orientation=`horizontal`;verticalViewPortHeight=`300px`;contentClass=``;indicatorsContentClass=``;indicatorsContentStyle;indicatorStyleClass=``;indicatorStyle;get value(){return this._value}set value(e){this._value=e}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;styleClass;prevButtonProps={severity:`secondary`,text:!0,rounded:!0};nextButtonProps={severity:`secondary`,text:!0,rounded:!0};onPage=new je;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousIconTemplate;nextIconTemplate;_itemTemplate;_headerTemplate;_footerTemplate;_previousIconTemplate;_nextIconTemplate;window;_componentStyle=g(wt);constructor(e,i){super(),this.el=e,this.zone=i,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}onChanges(e){Wf$1(this.platformId)&&(e.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(e.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),e.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}templates;onAfterContentInit(){this.id=ht$1(`pn_id_`),Wf$1(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`previousicon`:this._previousIconTemplate=e.template;break;case`nexticon`:this._nextIconTemplate=e.template;break;default:this._itemTemplate=e.template}}),this.cd.detectChanges()}onAfterContentChecked(){if(Wf$1(this.platformId)){let e=this.isCircular(),i=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let r=this._page;this.totalDots()!==0&&r>=this.totalDots()&&(r=this.totalDots()-1,this._page=r,this.onPage.emit({page:this.page})),i=r*this._numScroll*-1,e&&(i-=this._numVisible),r===this.totalDots()-1&&this.remainingItems>0?(i+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,i!==this.totalShiftedItems&&(this.totalShiftedItems=i),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this._numVisible)}%, 0)`:`translate3d(${i*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}e&&(this.page===0?i=-1*this._numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement(`style`),this.carouselStyle.type=`text/css`,Fa(this.carouselStyle,`nonce`,this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle),Fa(this.carouselStyle,`nonce`,this.config?.csp()?.nonce));let e=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions&&!this.$unstyled()){this.responsiveOptions.sort((i,r)=>{let C=i.breakpoint,w=r.breakpoint,F=null;return C==null&&w!=null?F=-1:C!=null&&w==null?F=1:C==null&&w==null?F=0:typeof C==`string`&&typeof w==`string`?F=C.localeCompare(w,void 0,{numeric:!0}):F=C<w?-1:C>w?1:0,-1*F});for(let i=0;i<this.responsiveOptions.length;i++){let r=this.responsiveOptions[i];e+=`
                    @media screen and (max-width: ${r.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/r.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=e}calculatePosition(){if(this.responsiveOptions){let e={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<`u`){let i=window.innerWidth;for(let r=0;r<this.responsiveOptions.length;r++){let C=this.responsiveOptions[r];parseInt(C.breakpoint,10)>=i&&(e=C)}}if(this._numScroll!==e.numScroll){let i=this._page;i=Math.floor(i*this._numScroll/e.numScroll);let r=e.numScroll*this.page*-1;this.isCircular()&&(r-=e.numVisible),this.totalShiftedItems=r,this._numScroll=e.numScroll,this._page=i,this.onPage.emit({page:this.page})}this._numVisible!==e.numVisible&&(this._numVisible=e.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let e=this.totalDots();return e<=0?[]:Array(e).fill(0)}isVertical(){return this.orientation===`vertical`}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(e,i){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,i),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}navBackward(e,i){(this.isCircular()||this._page!==0)&&this.step(1,i),this.autoplayInterval&&this.stopAutoplay(),e&&e.cancelable&&e.preventDefault()}onDotClick(e,i){let r=this._page;this.autoplayInterval&&this.stopAutoplay(),i>r?this.navForward(e,i):i<r&&this.navBackward(e,i)}onIndicatorKeydown(e){switch(e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey()}}onRightKey(){let e=[...Dd(this.indicatorContent?.nativeElement,`[data-pc-section="indicator"]`)],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=[...Dd(this.indicatorContent?.nativeElement,`[data-pc-section="indicator"]`)],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...Dd(this.indicatorContent?.nativeElement,`[data-pc-section="indicator"]`)],i=e.findIndex(w=>jm(w,`data-p-highlight`)===!0),r=km(this.indicatorContent?.nativeElement,`[data-pc-section="indicator"] > button[tabindex="0"]`),C=e.findIndex(w=>w===r.parentElement);e[C].children[0].tabIndex=`-1`,e[i].children[0].tabIndex=`0`}findFocusedIndicatorIndex(){let e=[...Dd(this.indicatorContent?.nativeElement,`[data-pc-section="indicator"]`)],i=km(this.indicatorContent?.nativeElement,`[data-pc-section="indicator"] > button[tabindex="0"]`);return e.findIndex(r=>r===i?.parentElement)}changedFocusedIndicator(e,i){let r=[...Dd(this.indicatorContent?.nativeElement,`[data-pc-section="indicator"]`)];r[e].children[0].tabIndex=`-1`,r[i].children[0].tabIndex=`0`,r[i].children[0].focus()}step(e,i){let r=this.totalShiftedItems,C=this.isCircular();if(i!=null)r=this._numScroll*i*-1,C&&(r-=this._numVisible),this.isRemainingItemsAdded=!1;else{r+=this._numScroll*e,this.isRemainingItemsAdded&&(r+=this.remainingItems-this._numScroll*e,this.isRemainingItemsAdded=!1);let w=C?r+this._numVisible:r;i=Math.abs(Math.floor(w/this._numScroll))}C&&this.page===this.totalDots()-1&&e===-1?(r=-1*(this.value.length+this._numVisible),i=0):C&&this.page===0&&e===1?(r=0,i=this.totalDots()-1):i===this.totalDots()-1&&this.remainingItems>0&&(r+=this.remainingItems*-1-this._numScroll*e,this.isRemainingItemsAdded=!0),this.itemsContainer&&(!this.$unstyled()&&Oa(this.itemsContainer.nativeElement,`p-items-hidden`),this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${r*(100/this._numVisible)}%, 0)`:`translate3d(${r*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=r,this._page=i,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(e=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,e&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(!this.$unstyled()&&_a(this.itemsContainer.nativeElement,`p-items-hidden`),this.itemsContainer.nativeElement.style.transition=``,(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}changePageOnTouch(e,i){Math.abs(i)>this.swipeThreshold&&(i<0?this.navForward(e):this.navBackward(e))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria?.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria?.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria?.nextPageLabel:void 0}ariaSlideNumber(e){return this.config.translation.aria?this.config.translation.aria?.slideNumber?.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.config.translation.aria?this.config.translation.aria?.pageLabel?.replace(/{page}/g,e):void 0}getIndicatorPTOptions(e,i){return this.ptm(e,{context:{highlighted:i===this._page}})}getItemPTOptions(e,i){return this.ptm(e,{context:{index:i,active:this.firstIndex()<=i&&this.lastIndex()>=i,start:this.firstIndex()===i,end:this.lastIndex()===i}})}bindDocumentListeners(){Wf$1(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,`resize`,e=>{this.calculatePosition()})))}unbindDocumentListeners(){Wf$1(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static ɵfac=function(i){return new(i||n)(Pr(Pn),Pr(Ae))};static ɵcmp=(function(){let e=[`item`],i=[`header`],r=[`footer`],C=[`previousicon`],w=[`nexticon`],F=[`itemsContainer`],S=[`indicatorContent`],b=[[[`p-header`]],[[`p-footer`]]],d=[`p-header`,`p-footer`],v=a=>({height:a}),R=a=>({index:a}),V=a=>({$implicit:a});function Me(a,u){a&1&&sh(0)}function Ne(a,u){if(a&1&&(ki(0,`div`,5),JE(1),Kp(2,Me,1,0,`ng-container`,13),Kc()),a&2){let t=ZE();vD(t.cx(`header`)),nh(`pBind`,t.ptm(`header`)),Rv(2),nh(`ngTemplateOutlet`,t.headerTemplate)}}function Be(a,u){a&1&&(Xu(),rh(0,`svg`,18))}function Pe(a,u){a&1&&(Xu(),rh(0,`svg`,19))}function Oe(a,u){if(a&1&&(el(0),Kp(1,Be,1,0,`svg`,16)(2,Pe,1,0,`svg`,17),tl()),a&2){let t=ZE(3);Rv(),nh(`ngIf`,!t.isVertical()),Rv(),nh(`ngIf`,t.isVertical())}}function Ee$2(a,u){}function y(a,u){a&1&&Kp(0,Ee$2,0,0,`ng-template`)}function M(a,u){if(a&1&&(el(0),Kp(1,y,1,0,null,13),tl()),a&2){let t=ZE(3);Rv(),nh(`ngTemplateOutlet`,t.previousIconTemplate||t._previousIconTemplate)}}function s(a,u){if(a&1&&Kp(0,Oe,3,2,`ng-container`,15)(1,M,2,1,`ng-container`,15),a&2){let t=ZE(2);nh(`ngIf`,!t.previousIconTemplate&&!t._previousIconTemplate&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon)),Rv(),nh(`ngIf`,(t.previousIconTemplate||t._previousIconTemplate)&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon))}}function Q(a,u){if(a&1){let t=zE();ki(0,`p-button`,14),lh(`click`,function(l){Vu(t);let de=ZE();return Hu(de.navBackward(l))}),Kp(1,s,2,2,`ng-template`,null,1,GD),Kc()}if(a&2){let t=ZE();vD(t.cx(`pcPrevButton`)),nh(`text`,!0)(`buttonProps`,t.prevButtonProps)(`pt`,t.ptm(`pcPrevButton`))(`unstyled`,t.unstyled()),th(`aria-label`,t.ariaPrevButtonLabel())}}function P(a,u){a&1&&sh(0)}function Bt(a,u){if(a&1&&(ki(0,`div`,5),Kp(1,P,1,0,`ng-container`,20),Kc()),a&2){let t=u.$implicit,p=u.index,l=ZE();vD(l.cx(`itemClone`,jD(11,R,p))),nh(`pBind`,l.ptm(`itemClone`)),th(`aria-hidden`,l.totalShiftedItems*-1!==l.value.length)(`aria-label`,l.ariaSlideNumber(p))(`aria-roledescription`,l.ariaSlideLabel())(`data-p-carousel-item-active`,l.totalShiftedItems*-1===l.value.length+l._numVisible)(`data-p-carousel-item-start`,p===0)(`data-p-carousel-item-end`,l.clonedItemsForStarting&&l.clonedItemsForStarting.length-1===p),Rv(),nh(`ngTemplateOutlet`,l.itemTemplate||l._itemTemplate)(`ngTemplateOutletContext`,jD(13,V,t))}}function Pt(a,u){a&1&&sh(0)}function Ot(a,u){if(a&1&&(ki(0,`div`,21),Kp(1,Pt,1,0,`ng-container`,20),Kc()),a&2){let t=u.$implicit,p=u.index,l=ZE();vD(l.cx(`item`,jD(11,R,p))),nh(`pBind`,l.getItemPTOptions(`item`,p)),th(`aria-hidden`,!(l.firstIndex()<=p&&l.lastIndex()>=p))(`aria-label`,l.ariaSlideNumber(p))(`aria-roledescription`,l.ariaSlideLabel())(`data-p-carousel-item-active`,l.firstIndex()<=p&&l.lastIndex()>=p)(`data-p-carousel-item-start`,l.firstIndex()===p)(`data-p-carousel-item-end`,l.lastIndex()===p),Rv(),nh(`ngTemplateOutlet`,l.itemTemplate||l._itemTemplate)(`ngTemplateOutletContext`,jD(13,V,t))}}function Et(a,u){a&1&&sh(0)}function Ft(a,u){if(a&1&&(ki(0,`div`,5),Kp(1,Et,1,0,`ng-container`,20),Kc()),a&2){let t=u.$implicit,p=u.index,l=ZE();vD(l.cx(`itemClone`,jD(8,R,p))),nh(`pBind`,l.ptm(`itemClone`)),th(`data-p-carousel-item-active`,!1)(`data-p-carousel-item-start`,!1)(`data-p-carousel-item-end`,!1),Rv(),nh(`ngTemplateOutlet`,l.itemTemplate||l._itemTemplate)(`ngTemplateOutletContext`,jD(10,V,t))}}function kt(a,u){a&1&&(Xu(),rh(0,`svg`,25))}function Vt(a,u){a&1&&(Xu(),rh(0,`svg`,26))}function Dt(a,u){if(a&1&&(el(0),Kp(1,kt,1,0,`svg`,23)(2,Vt,1,0,`svg`,24),tl()),a&2){let t=ZE(3);Rv(),nh(`ngIf`,!t.isVertical()),Rv(),nh(`ngIf`,t.isVertical())}}function At(a,u){}function Lt(a,u){a&1&&Kp(0,At,0,0,`ng-template`)}function Rt(a,u){if(a&1&&(ki(0,`span`),Kp(1,Lt,1,0,null,13),Kc()),a&2){let t=ZE(3);Rv(),nh(`ngTemplateOutlet`,t.nextIconTemplate||t._nextIconTemplate)}}function jt(a,u){if(a&1&&Kp(0,Dt,3,2,`ng-container`,15)(1,Rt,2,1,`span`,15),a&2){let t=ZE(2);nh(`ngIf`,!t.nextIconTemplate&&!t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon)),Rv(),nh(`ngIf`,t.nextIconTemplate||t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon))}}function zt(a,u){if(a&1){let t=zE();ki(0,`p-button`,22),lh(`click`,function(l){Vu(t);let de=ZE();return Hu(de.navForward(l))}),Kp(1,jt,2,2,`ng-template`,null,1,GD),Kc()}if(a&2){let t=ZE();vD(t.cx(`pcNextButton`)),nh(`buttonProps`,t.nextButtonProps)(`text`,!0)(`pt`,t.ptm(`pcNextButton`))(`unstyled`,t.unstyled()),th(`aria-label`,t.ariaNextButtonLabel())}}function $t(a,u){if(a&1){let t=zE();ki(0,`li`,5)(1,`button`,28),lh(`click`,function(l){let de=Vu(t).index,Ht=ZE(2);return Hu(Ht.onDotClick(l,de))}),Kc()()}if(a&2){let t=u.index,p=ZE(2);vD(p.cx(`indicator`,jD(11,R,t))),nh(`pBind`,p.getIndicatorPTOptions(`indicator`,t)),th(`data-p-active`,p._page===t),Rv(),vD(p.cx(`indicatorButton`)),nh(`ngStyle`,p.indicatorStyle)(`tabindex`,p._page===t?0:-1)(`pBind`,p.getIndicatorPTOptions(`indicatorButton`,t)),th(`aria-label`,p.ariaPageLabel(t+1))(`aria-current`,p._page===t?`page`:void 0)}}function Qt(a,u){if(a&1){let t=zE();ki(0,`ul`,27,2),lh(`keydown`,function(l){Vu(t);let de=ZE();return Hu(de.onIndicatorKeydown(l))}),Kp(2,$t,2,13,`li`,9),Kc()}if(a&2){let t=ZE();vD(t.cx(`indicatorList`)),nh(`ngStyle`,t.indicatorsContentStyle)(`pBind`,t.ptm(`indicatorList`)),Rv(2),nh(`ngForOf`,t.totalDotsArray())}}function qt(a,u){a&1&&sh(0)}function Kt(a,u){if(a&1&&(ki(0,`div`,5),JE(1,1),Kp(2,qt,1,0,`ng-container`,13),Kc()),a&2){let t=ZE();vD(t.cx(`footer`)),nh(`pBind`,t.ptm(`footer`)),Rv(2),nh(`ngTemplateOutlet`,t.footerTemplate||t._footerTemplate)}}return dE({type:n,selectors:[[`p-carousel`]],contentQueries:function(u,t,p){if(u&1&&dh(p,iy,5)(p,oy,5)(p,e,4)(p,i,4)(p,r,4)(p,C,4)(p,w,4)(p,sy,4),u&2){let l;eD(l=tD())&&(t.headerFacet=l.first),eD(l=tD())&&(t.footerFacet=l.first),eD(l=tD())&&(t.itemTemplate=l.first),eD(l=tD())&&(t.headerTemplate=l.first),eD(l=tD())&&(t.footerTemplate=l.first),eD(l=tD())&&(t.previousIconTemplate=l.first),eD(l=tD())&&(t.nextIconTemplate=l.first),eD(l=tD())&&(t.templates=l)}},viewQuery:function(u,t){if(u&1&&fh(F,5)(S,5),u&2){let p;eD(p=tD())&&(t.itemsContainer=p.first),eD(p=tD())&&(t.indicatorContent=p.first)}},hostVars:4,hostBindings:function(u,t){u&2&&(th(`id`,t.id)(`role`,`region`),vD(t.cn(t.cx(`root`),t.styleClass)))},inputs:{page:`page`,numVisible:`numVisible`,numScroll:`numScroll`,responsiveOptions:`responsiveOptions`,orientation:`orientation`,verticalViewPortHeight:`verticalViewPortHeight`,contentClass:`contentClass`,indicatorsContentClass:`indicatorsContentClass`,indicatorsContentStyle:`indicatorsContentStyle`,indicatorStyleClass:`indicatorStyleClass`,indicatorStyle:`indicatorStyle`,value:`value`,circular:[2,`circular`,`circular`,UP],showIndicators:[2,`showIndicators`,`showIndicators`,UP],showNavigators:[2,`showNavigators`,`showNavigators`,UP],autoplayInterval:[2,`autoplayInterval`,`autoplayInterval`,WP],styleClass:`styleClass`,prevButtonProps:`prevButtonProps`,nextButtonProps:`nextButtonProps`},outputs:{onPage:`onPage`},features:[PD([wt,{provide:J,useExisting:n}]),IE([E]),Zp],ngContentSelectors:d,decls:13,vars:25,consts:[[`itemsContainer`,``],[`icon`,``],[`indicatorContent`,``],[3,`class`,`pBind`,4,`ngIf`],[3,`ngClass`,`pBind`],[3,`pBind`],[`attr.data-pc-group-section`,`navigator`,3,`class`,`text`,`buttonProps`,`pt`,`unstyled`,`click`,4,`ngIf`],[3,`touchend`,`touchstart`,`touchmove`,`ngStyle`,`pBind`],[3,`transitionend`,`pBind`],[3,`class`,`pBind`,4,`ngFor`,`ngForOf`],[`role`,`group`,3,`class`,`pBind`,4,`ngFor`,`ngForOf`],[`type`,`button`,`attr.data-pc-group-section`,`navigator`,3,`class`,`buttonProps`,`text`,`pt`,`unstyled`,`click`,4,`ngIf`],[3,`class`,`ngStyle`,`pBind`,`keydown`,4,`ngIf`],[4,`ngTemplateOutlet`],[`attr.data-pc-group-section`,`navigator`,3,`click`,`text`,`buttonProps`,`pt`,`unstyled`],[4,`ngIf`],[`data-p-icon`,`chevron-left`,4,`ngIf`],[`data-p-icon`,`chevron-up`,4,`ngIf`],[`data-p-icon`,`chevron-left`],[`data-p-icon`,`chevron-up`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`role`,`group`,3,`pBind`],[`type`,`button`,`attr.data-pc-group-section`,`navigator`,3,`click`,`buttonProps`,`text`,`pt`,`unstyled`],[`data-p-icon`,`chevron-right`,4,`ngIf`],[`data-p-icon`,`chevron-down`,4,`ngIf`],[`data-p-icon`,`chevron-right`],[`data-p-icon`,`chevron-down`],[3,`keydown`,`ngStyle`,`pBind`],[`type`,`button`,3,`click`,`ngStyle`,`tabindex`,`pBind`]],template:function(u,t){u&1&&(KE(b),Kp(0,Ne,3,4,`div`,3),ki(1,`div`,4)(2,`div`,5),Kp(3,Q,3,7,`p-button`,6),ki(4,`div`,7),lh(`touchend`,function(l){return t.onTouchEnd(l)})(`touchstart`,function(l){return t.onTouchStart(l)})(`touchmove`,function(l){return t.onTouchMove(l)}),ki(5,`div`,8,0),lh(`transitionend`,function(){return t.onTransitionEnd()}),Kp(7,Bt,2,15,`div`,9)(8,Ot,2,15,`div`,10)(9,Ft,2,12,`div`,9),Kc()(),Kp(10,zt,3,7,`p-button`,11),Kc(),Kp(11,Qt,3,5,`ul`,12),Kc(),Kp(12,Kt,3,4,`div`,3)),u&2&&(nh(`ngIf`,t.headerFacet||t.headerTemplate),Rv(),vD(t.contentClass),nh(`ngClass`,t.cx(`contentContainer`))(`pBind`,t.ptm(`contentContainer`)),Rv(),vD(t.cx(`content`)),nh(`pBind`,t.ptm(`content`)),th(`aria-live`,t.allowAutoplay?`polite`:`off`),Rv(),nh(`ngIf`,t.showNavigators),Rv(),vD(t.cx(`viewport`)),nh(`ngStyle`,jD(23,v,t.isVertical()?t.verticalViewPortHeight:`auto`))(`pBind`,t.ptm(`viewport`)),Rv(),vD(t.cx(`itemList`)),nh(`pBind`,t.ptm(`itemList`)),Rv(2),nh(`ngForOf`,t.clonedItemsForStarting),Rv(),nh(`ngForOf`,t.value),Rv(),nh(`ngForOf`,t.clonedItemsForFinishing),Rv(),nh(`ngIf`,t.showNavigators),Rv(),nh(`ngIf`,t.showIndicators),Rv(),nh(`ngIf`,t.footerFacet||t.footerTemplate||t._footerTemplate))},dependencies:[Hn,Rl,Jo,Al,Il,Tl,ko,Bi,rn$1,x,Po,j,ay,Ee,E],encapsulation:2})})()}return n})();function Zt(n,I){n&1&&rh(0,`p-avatar`,18)}function Jt(n,I){if(n&1&&(ki(0,`span`),ND(1),$D(2,`translate`),Kc(),ki(3,`p`),ND(4),$D(5,`translate`),Kc()),n&2){let e=ZE().$implicit;Rv(),Sh(WD(2,2,e.titleKey)),Rv(3),Sh(WD(5,4,e.descriptionKey))}}function en(n,I){if(n&1&&(rh(0,`p-tag`,17),$D(1,`translate`)),n&2){let e=I.$implicit;nh(`value`,WD(1,2,e.labelKey))(`severity`,e.severity)}}function tn(n,I){if(n&1){let e=zE();ki(0,`div`,19),rh(1,`p-button`,20),$D(2,`translate`),$D(3,`translate`),ki(4,`p-button`,21),$D(5,`translate`),$D(6,`translate`),lh(`onClick`,function(){Vu(e);let r=ZE().$implicit,C=ZE();return Hu(C.openService(r.id))}),Kc()()}if(n&2){let e=ZE().$implicit;Rv(),nh(`outlined`,!0)(`label`,WD(2,5,e.secondaryActionKey))(`ariaLabel`,WD(3,7,e.secondaryActionKey)),Rv(3),nh(`label`,WD(5,9,e.primaryActionKey))(`ariaLabel`,WD(6,11,e.primaryActionKey))}}function nn(n,I){if(n&1&&(ki(0,`p-card`,15),Kp(1,Zt,1,0,`ng-template`,null,3,GD)(3,Jt,6,6,`ng-template`,null,4,GD),ki(5,`div`,16),HE(6,en,2,4,`p-tag`,17,jE),Kc(),Kp(8,tn,7,13,`ng-template`,null,5,GD),Kc()),n&2){let e=I.$implicit;Rv(6),BE(e.tags)}}function an(n,I){n&1&&(ki(0,`span`,22),rh(1,`span`,23),Kc())}function on(n,I){n&1&&(ki(0,`span`,24),rh(1,`span`,25),Kc())}var Nt=class n{router=g(de);title=PP.required();description=PP.required();actionLabel=PP.required();items=PP.required();showNavigators=PP(!0);variant=PP(`muted`);textBtn=PP(!1);actionSeverity=PP(`secondary`);outlined=PP(!0);openService(I){this.router.navigate([`/services`,I])}responsiveOptions=[{breakpoint:`1023px`,numVisible:2,numScroll:1},{breakpoint:`639px`,numVisible:1,numScroll:1}];static ɵfac=function(e){return new(e||n)};static ɵcmp=dE({type:n,selectors:[[`elm-service-section`]],inputs:{title:[1,`title`],description:[1,`description`],actionLabel:[1,`actionLabel`],items:[1,`items`],showNavigators:[1,`showNavigators`],variant:[1,`variant`],textBtn:[1,`textBtn`],actionSeverity:[1,`actionSeverity`],outlined:[1,`outlined`]},decls:17,vars:17,consts:[[`item`,``],[`previousicon`,``],[`nexticon`,``],[`header`,``],[`title`,``],[`footer`,``],[1,`elm-service-section`],[1,`elm-service-section__inner`],[1,`elm-section-head`],[1,`d-flex`,`align-items-center`,`justify-content-between`,`gap-3`],[1,`elm-section-head__title`],[`type`,`button`,1,`flex-shrink-0`,3,`severity`,`text`,`outlined`,`label`,`ariaLabel`],[1,`elm-section-head__description`],[1,`elm-service-section__carousel`],[3,`value`,`numVisible`,`numScroll`,`showNavigators`,`responsiveOptions`],[`styleClass`,`elm-service-card`],[1,`elm-service-card__tags`,`d-flex`,`flex-wrap`],[3,`value`,`severity`],[`icon`,`elm checkmark-circle`,`shape`,`circle`,`aria-hidden`,`true`],[1,`d-flex`,`flex-wrap`,`gap-2`],[`type`,`button`,`size`,`small`,`severity`,`secondary`,3,`outlined`,`label`,`ariaLabel`],[`type`,`button`,`size`,`small`,3,`onClick`,`label`,`ariaLabel`],[`aria-hidden`,`true`,1,`p-carousel-prev-icon`],[1,`elm`,`chevron-left`],[`aria-hidden`,`true`,1,`p-carousel-next-icon`],[1,`elm`,`chevron-right`]],template:function(e,i){e&1&&(ki(0,`section`,6)(1,`div`,7)(2,`div`,8)(3,`div`,9)(4,`h2`,10),ND(5),Kc(),rh(6,`p-button`,11),Kc(),ki(7,`p`,12),ND(8),Kc()()(),ki(9,`div`,13)(10,`p-carousel`,14),Kp(11,nn,10,0,`ng-template`,null,0,GD)(13,an,2,0,`ng-template`,null,1,GD)(15,on,2,0,`ng-template`,null,2,GD),Kc()()()),e&2&&(Eh(`elm-service-section--brand`,i.variant()===`brand`)(`elm-service-section--navigators`,i.showNavigators()),th(`aria-label`,i.title()),Rv(5),Sh(i.title()),Rv(),nh(`severity`,i.actionSeverity())(`text`,i.textBtn)(`outlined`,i.outlined())(`label`,i.actionLabel())(`ariaLabel`,i.actionLabel()),Rv(2),Sh(i.description()),Rv(2),nh(`value`,i.items())(`numVisible`,4)(`numScroll`,1)(`showNavigators`,i.showNavigators())(`responsiveOptions`,i.responsiveOptions))},dependencies:[bt,rn$1,It,Mt,ft,mF],styles:[`[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .elm-service-section[_ngcontent-%COMP%]{background:var(--%NS%color-neutral-25);padding-block:var(--%NS%spacing-5xl)}[_nghost-%COMP%]   .elm-service-section--brand[_ngcontent-%COMP%]{background:var(--%NS%color-bg-brand-light)}[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{width:min(100%,80rem);margin-inline:auto}@media(min-width:300px)and (max-width:639px){[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{padding-inline:var(--%NS%spacing-xl)}}@media(min-width:640px)and (max-width:767px){[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{padding-inline:var(--%NS%spacing-xl)}}@media(min-width:768px)and (max-width:1023px){[_nghost-%COMP%]   .elm-service-section__inner[_ngcontent-%COMP%]{padding-inline:var(--%NS%spacing-xl)}}[_nghost-%COMP%]   .elm-service-section[_ngcontent-%COMP%]   .elm-section-head[_ngcontent-%COMP%]{margin-bottom:var(--%NS%spacing-4xl)}[_nghost-%COMP%]   .elm-service-section__carousel[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .elm-service-card{display:flex;flex-direction:column;width:100%;max-width:20rem;height:100%;gap:var(--%NS%spacing-3xl);padding:var(--%NS%spacing-xl);background:var(--%NS%color-bg-surface);border:var(--%NS%border-width) solid var(--%NS%color-border-secondary);border-radius:var(--%NS%radius-lg);box-shadow:none}[_nghost-%COMP%]     .elm-service-card .p-card-header{padding:0;margin:0}[_nghost-%COMP%]     .elm-service-card .p-avatar{width:3rem;height:3rem;background:var(--%NS%color-primary-25)}[_nghost-%COMP%]     .elm-service-card .p-avatar .elm{width:1.25rem;height:1.25rem;background-color:var(--%NS%color-primary-600)}[_nghost-%COMP%]     .elm-service-card .p-card-body{display:flex;flex:1;flex-direction:column;gap:var(--%NS%spacing-3xl);padding:0}[_nghost-%COMP%]     .elm-service-card .p-card-title h3, [_nghost-%COMP%]     .elm-service-card .p-card-title p, [_nghost-%COMP%]     .elm-service-card .p-card-subtitle h3, [_nghost-%COMP%]     .elm-service-card .p-card-subtitle p{margin:0}[_nghost-%COMP%]     .elm-service-card .p-card-title{display:flex;flex-direction:column;gap:var(--%NS%spacing-md)}[_nghost-%COMP%]     .elm-service-card .p-card-title span{margin:0;color:var(--%NS%color-text-primary);font-size:var(--%NS%font-size-text-lg);font-weight:var(--%NS%font-weight-bold);line-height:var(--%NS%line-height-text-lg)}[_nghost-%COMP%]     .elm-service-card .p-card-title p{color:var(--%NS%color-text-paragraph);font-size:var(--%NS%font-size-text-md);font-weight:var(--%NS%font-weight-regular);line-height:var(--%NS%line-height-text-md)}[_nghost-%COMP%]     .elm-service-card .p-card-content{padding:0}[_nghost-%COMP%]     .elm-service-card .elm-service-card__tags{gap:var(--%NS%spacing-md);margin:0}[_nghost-%COMP%]     .elm-service-card .p-card-footer{margin-top:auto;padding:0}[_nghost-%COMP%]     .p-carousel-content-container{display:grid;grid-template-columns:1fr auto auto;grid-template-areas:"viewport viewport viewport" "indicators prev next";align-items:center;row-gap:var(--%NS%spacing-3xl);column-gap:var(--%NS%spacing-md);overflow:visible;padding-inline:max(0px,(100% - 80rem) / 2)}@media(min-width:300px)and (max-width:639px){[_nghost-%COMP%]     .p-carousel-content-container{padding-inline:var(--%NS%spacing-xl)}}@media(min-width:640px)and (max-width:767px){[_nghost-%COMP%]     .p-carousel-content-container{padding-inline:var(--%NS%spacing-xl)}}@media(min-width:768px)and (max-width:1023px){[_nghost-%COMP%]     .p-carousel-content-container{padding-inline:var(--%NS%spacing-xl)}}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-content-container{grid-template-columns:auto auto 1fr;grid-template-areas:"viewport viewport viewport" "next prev indicators"}[_nghost-%COMP%]     .p-carousel-content{display:contents}[_nghost-%COMP%]     .p-carousel-viewport{grid-area:viewport;display:flex;justify-content:flex-end;width:100vw;margin-inline:calc(50% - 50vw);justify-self:center;overflow:hidden}@media(min-width:300px)and (max-width:639px){[_nghost-%COMP%]     .p-carousel-viewport{width:calc(100% + var(--%NS%spacing-xl) + var(--%NS%spacing-xl));margin-inline:calc(-1 * var(--%NS%spacing-xl))}}@media(min-width:640px)and (max-width:767px){[_nghost-%COMP%]     .p-carousel-viewport{width:calc(100% + var(--%NS%spacing-xl) + var(--%NS%spacing-xl));margin-inline:calc(-1 * var(--%NS%spacing-xl))}}@media(min-width:768px)and (max-width:1023px){[_nghost-%COMP%]     .p-carousel-viewport{width:calc(100% + var(--%NS%spacing-xl) + var(--%NS%spacing-xl));margin-inline:calc(-1 * var(--%NS%spacing-xl))}}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-viewport{transform:scaleX(-1)}[_nghost-%COMP%]     .p-carousel-item-list{display:flex;width:min(100%,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md))}[_nghost-%COMP%]     .p-carousel-item{display:flex;flex:0 0 min(100%,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md))!important;width:min(100%,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md));max-width:min(100%,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md));padding-inline:var(--%NS%spacing-md)}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-item{transform:scaleX(-1)}@media(min-width:640px){[_nghost-%COMP%]     .p-carousel-item-list{width:calc(2*min(50vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md)))}[_nghost-%COMP%]     .p-carousel-item{flex-basis:min(50vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md))!important;width:min(50vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md));max-width:min(50vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md))}}@media(min-width:1024px){[_nghost-%COMP%]     .p-carousel-item-list{width:calc(4*min(25vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md)))}[_nghost-%COMP%]     .p-carousel-item{flex-basis:min(25vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md))!important;width:min(25vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md));max-width:min(25vw,20rem + var(--%NS%spacing-md) + var(--%NS%spacing-md))}}[_nghost-%COMP%]     .p-items-hidden .p-carousel-item{visibility:visible}[_nghost-%COMP%]     .p-carousel-indicator-list{grid-area:indicators;justify-content:flex-start;width:100%;margin:0}html[dir=rtl]   [_nghost-%COMP%]     .p-carousel-indicator-list{justify-content:flex-end}[_nghost-%COMP%]     .elm-service-section:not(.elm-service-section--navigators) .p-carousel-indicator-list{grid-column:1/-1;justify-content:center}[_nghost-%COMP%]     .p-carousel-indicator-button{width:.5rem;height:.5rem;border:0;border-radius:var(--%NS%radius-full);background:var(--%NS%color-neutral-300)}[_nghost-%COMP%]     .p-carousel-indicator[data-p-active=true] .p-carousel-indicator-button{background:var(--%NS%color-primary-600)}[_nghost-%COMP%]     .p-carousel-prev-button{grid-area:prev}[_nghost-%COMP%]     .p-carousel-next-button{grid-area:next}[_nghost-%COMP%]     .p-carousel-prev-button .p-button, [_nghost-%COMP%]     .p-carousel-next-button .p-button{width:3rem;height:3rem;gap:0;padding:0;border-radius:var(--%NS%radius-full);background:transparent;border:none;color:var(--%NS%color-neutral-0)}[_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover{background:var(--%NS%color-primary-600)}[_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-next-icon, [_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-prev-icon, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-next-icon, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-prev-icon{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-next-icon span, [_nghost-%COMP%]     .p-carousel-prev-button .p-button:hover .p-carousel-prev-icon span, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-next-icon span, [_nghost-%COMP%]     .p-carousel-next-button .p-button:hover .p-carousel-prev-icon span{background-color:var(--%NS%color-neutral-0)}`]})};export{rn as a,ft as i,Mt as n,Nt as r,It as t};