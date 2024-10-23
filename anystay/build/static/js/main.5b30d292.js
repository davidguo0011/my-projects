/*! For license information please see main.5b30d292.js.LICENSE.txt */

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f8841495-d469-5db2-8226-b1a7a0ea326e")}catch(e){}}();
(()=>{var e={3535:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o={aws_project_region:"ap-southeast-2",aws_appsync_graphqlEndpoint:"https://xwq7fm5dhzcxndfbzbadt3zxha.appsync-api.ap-southeast-2.amazonaws.com/graphql",aws_appsync_region:"ap-southeast-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_cognito_identity_pool_id:"ap-southeast-2:b71f4e0a-c244-4468-b65b-c1facac1d44c",aws_cognito_region:"ap-southeast-2",aws_user_pools_id:"ap-southeast-2_WMAnJcB4F",aws_user_pools_web_client_id:"3b3lv2g0vve2p3sutsqgmtqefk",oauth:{domain:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com"},aws_cognito_username_attributes:["EMAIL"],aws_cognito_social_providers:[],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:[],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL","PHONE_NUMBER"],aws_user_files_s3_bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",aws_user_files_s3_bucket_region:"ap-southeast-2"}},8306:(e,t,n)=>{"use strict";n.d(t,{A:()=>le});var o=n(5173),r=n.n(o),i=n(8161),a=n.n(i),s=n(2445),c=n.n(s),p=n(5043),l=n(2123),u=n.n(l),d="bodyAttributes",b="htmlAttributes",M="titleAttributes",f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},z=(Object.keys(f).map((function(e){return f[e]})),"charset"),h="cssText",O="href",A="http-equiv",m="innerHTML",g="itemprop",y="name",v="property",q="rel",_="src",W="target",w={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",S="defer",x="encodeSpecialCharacters",E="onChangeClientState",T="titleTemplate",C=Object.keys(w).reduce((function(e,t){return e[w[t]]=t,e}),{}),N=[f.NOSCRIPT,f.SCRIPT,f.STYLE],L="data-react-helmet",k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},B=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},D=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=V(e,f.TITLE),n=V(e,T);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var o=V(e,R);return t||o||void 0},j=function(e){return V(e,E)||function(){}},X=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return I({},e,t)}),{})},U=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[f.BASE]})).map((function(e){return e[f.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var o=Object.keys(n),r=0;r<o.length;r++){var i=o[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},F=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&J("Helmet: "+e+' should be of type "Array". Instead found type "'+k(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||n===q&&"canonical"===e[n].toLowerCase()||c===q&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==m&&s!==h&&s!==g||(n=s)}if(!n||!e[n])return!1;var p=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][p]&&(r[n][p]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),a=0;a<i.length;a++){var s=i[a],c=u()({},o[s],r[s]);o[s]=c}return e}),[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o.hasOwnProperty(t))return o[t]}return null},H=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){H(t)}),0)}}(),G=function(e){return clearTimeout(e)},K="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||H:n.g.requestAnimationFrame||H,Y="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:n.g.cancelAnimationFrame||G,J=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Q=null,Z=function(e,t){var n=e.baseTag,o=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,p=e.scriptTags,l=e.styleTags,u=e.title,d=e.titleAttributes;ne(f.BODY,o),ne(f.HTML,r),te(u,d);var b={baseTag:oe(f.BASE,n),linkTags:oe(f.LINK,i),metaTags:oe(f.META,a),noscriptTags:oe(f.NOSCRIPT,s),scriptTags:oe(f.SCRIPT,p),styleTags:oe(f.STYLE,l)},M={},z={};Object.keys(b).forEach((function(e){var t=b[e],n=t.newTags,o=t.oldTags;n.length&&(M[e]=n),o.length&&(z[e]=b[e].oldTags)})),t&&t(),c(e,M,z)},ee=function(e){return Array.isArray(e)?e.join(""):e},te=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ee(e)),ne(f.TITLE,t)},ne=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var o=n.getAttribute(L),r=o?o.split(","):[],i=[].concat(r),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],p=t[c]||"";n.getAttribute(c)!==p&&n.setAttribute(c,p),-1===r.indexOf(c)&&r.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var u=i.length-1;u>=0;u--)n.removeAttribute(i[u]);r.length===i.length?n.removeAttribute(L):n.getAttribute(L)!==a.join(",")&&n.setAttribute(L,a.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(f.HEAD),o=n.querySelectorAll(e+"["+L+"]"),r=Array.prototype.slice.call(o),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var o in t)if(t.hasOwnProperty(o))if(o===m)n.innerHTML=t.innerHTML;else if(o===h)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"===typeof t[o]?"":t[o];n.setAttribute(o,s)}n.setAttribute(L,"true"),r.some((function(e,t){return a=t,n.isEqualNode(e)}))?r.splice(a,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},re=function(e){return Object.keys(e).reduce((function(t,n){var o="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+o:o}),"")},ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[w[n]||n]=e[n],t}),t)},ae=function(e,t,n){switch(e){case f.TITLE:return{toComponent:function(){return function(e,t,n){var o,r=((o={key:t})[L]=!0,o),i=ie(n,r);return[p.createElement(f.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,o){var r=re(n),i=ee(t);return r?"<"+e+" "+L+'="true" '+r+">"+D(i,o)+"</"+e+">":"<"+e+" "+L+'="true">'+D(i,o)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case b:return{toComponent:function(){return ie(t)},toString:function(){return re(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,r=((o={key:n})[L]=!0,o);return Object.keys(t).forEach((function(e){var n=w[e]||e;if(n===m||n===h){var o=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=t[e]})),p.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,o){var r=Object.keys(o).filter((function(e){return!(e===m||e===h)})).reduce((function(e,t){var r="undefined"===typeof o[t]?t:t+'="'+D(o[t],n)+'"';return e?e+" "+r:r}),""),i=o.innerHTML||o.cssText||"",a=-1===N.indexOf(e);return t+"<"+e+" "+L+'="true" '+r+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},se=function(e){var t=e.baseTag,n=e.bodyAttributes,o=e.encode,r=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,p=e.styleTags,l=e.title,u=void 0===l?"":l,M=e.titleAttributes;return{base:ae(f.BASE,t,o),bodyAttributes:ae(d,n,o),htmlAttributes:ae(b,r,o),link:ae(f.LINK,i,o),meta:ae(f.META,a,o),noscript:ae(f.NOSCRIPT,s,o),script:ae(f.SCRIPT,c,o),style:ae(f.STYLE,p,o),title:ae(f.TITLE,{title:u,titleAttributes:M},o)}},ce=function(e){var t,n;return n=t=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!c()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:t};case f.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return I({},o,((t={})[n.type]=[].concat(o[n.type]||[],[I({},r,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,r=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(o.type){case f.TITLE:return I({},r,((t={})[o.type]=a,t.titleAttributes=I({},i),t));case f.BODY:return I({},r,{bodyAttributes:I({},i)});case f.HTML:return I({},r,{htmlAttributes:I({},i)})}return I({},r,((n={})[o.type]=I({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=I({},t);return Object.keys(e).forEach((function(t){var o;n=I({},n,((o={})[t]=e[t],o))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return p.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[C[n]||n]=e[n],t}),t)}(B(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},n.prototype.render=function(){var t=this.props,n=t.children,o=B(t,["children"]),r=I({},o);return n&&(r=this.mapChildrenToProps(n,r)),p.createElement(e,r)},P(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(p.Component),t.propTypes={base:r().object,bodyAttributes:r().object,children:r().oneOfType([r().arrayOf(r().node),r().node]),defaultTitle:r().string,defer:r().bool,encodeSpecialCharacters:r().bool,htmlAttributes:r().object,link:r().arrayOf(r().object),meta:r().arrayOf(r().object),noscript:r().arrayOf(r().object),onChangeClientState:r().func,script:r().arrayOf(r().object),style:r().arrayOf(r().object),title:r().string,titleAttributes:r().object,titleTemplate:r().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(a()((function(e){return{baseTag:U([O,W],e),bodyAttributes:X(d,e),defer:V(e,S),encode:V(e,x),htmlAttributes:X(b,e),linkTags:F(f.LINK,[q,O],e),metaTags:F(f.META,[y,z,A,v,g],e),noscriptTags:F(f.NOSCRIPT,[m],e),onChangeClientState:j(e),scriptTags:F(f.SCRIPT,[_,m],e),styleTags:F(f.STYLE,[h],e),title:$(e),titleAttributes:X(M,e)}}),(function(e){Q&&Y(Q),e.defer?Q=K((function(){Z(e,(function(){Q=null}))})):(Z(e),Q=null)}),se)((function(){return null})));ce.renderStatic=ce.rewind;var pe=n(579);const le=e=>{let{title:t="Anystay | Short & Long Stays, Holiday Homes, Rooms & More",description:n="Book the perfect Australian stay at the best prices with Anystay. Find amazing deals on the biggest range of accommodation in Australia.",imgUrl:o="https://d292awxalydr86.cloudfront.net/General/Stays+in+Australia.jpg",url:r="https://www.anystay.com.au/",jsonLd:i}=e;return(0,pe.jsxs)(ce,{children:[(0,pe.jsx)("title",{children:t}),(0,pe.jsx)("meta",{property:"og:title",content:t}),(0,pe.jsx)("meta",{property:"twitter:title",content:t}),(0,pe.jsx)("meta",{property:"og:type",content:"website"}),(0,pe.jsx)("meta",{name:"description",content:n}),(0,pe.jsx)("meta",{property:"twitter:description",content:n}),(0,pe.jsx)("meta",{property:"og:description",content:n}),(0,pe.jsx)("meta",{property:"og:url",content:r}),(0,pe.jsx)("meta",{property:"twitter:url",content:r}),(0,pe.jsx)("meta",{property:"og:image",content:o}),(0,pe.jsx)("meta",{property:"twitter:image",content:o}),(0,pe.jsx)("script",{type:"application/ld+json",children:JSON.stringify(i)})]})}},9697:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var o=n(7950),r=n(6779),i=n(579),a=n(5043);const s=e=>{let{children:t,noBackdrop:n,direction:o}=e;const s={initial:"horizontal"===o?{x:window.innerWidth}:{y:window.innerHeight},animate:"horizontal"===o?{x:0}:{y:0},transition:{ease:"easeOut",duration:.2},style:{position:"fixed",zIndex:102,width:"100%",height:"100%",bottom:0,left:0}};return(0,i.jsxs)("div",{children:[n?null:(0,i.jsx)("div",{style:{height:"100%",width:"100%",position:"fixed",left:0,bottom:0,zIndex:101,background:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(0px)"}}),(0,a.createElement)(r.P.div,{...s,key:"popupAnimation"},t)]})},c=e=>{let{children:t,noBackdrop:n,direction:r}=e;return(0,o.createPortal)((0,i.jsx)(s,{noBackdrop:n,direction:r,children:t}),document.getElementById("root"))}},1852:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var o=n(2119),r=n(4936);const i=o.Ay.div`
    position: ${e=>void 0!==e.mobileLeft||void 0!==e.mobileTop?"absolute":"unset"};
    ${e=>void 0!==e.mobileTop&&`top: ${"number"===typeof e.mobileTop?`${e.mobileTop}px`:e.mobileTop};`}
    ${e=>void 0!==e.mobileLeft&&`left: ${"number"===typeof e.mobileLeft?`${e.mobileLeft}px`:e.mobileLeft};`}
    display: flex;
    z-index: 1;
    @media (min-width: 768px) {
        position: ${e=>void 0!==e.desktopTop||void 0!==e.desktopLeft?"absolute":"unset"};
        ${e=>void 0!==e.desktopTop&&`top: ${"number"===typeof e.desktopTop?`${e.desktopTop}px`:e.desktopTop};`}
        ${e=>void 0!==e.desktopLeft&&`left: ${"number"===typeof e.desktopLeft?`${e.desktopLeft}px`:e.desktopLeft};`}
    }
`,a=o.Ay.button`
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
    border-radius: 50%;
    background: transparent;
    position: relative;
    touch-action: manipulation;
    display: inline-block;
    ${e=>e.disabled&&"pointer-events: none;"}

    &::before {
        content: "";
        width: 36px;
        height: 36px;
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: ${e=>e.hasBackground?`${r.J2.White.color}`:"none"};
        border: ${e=>e.hasBorder?`1px solid ${r.J2.Grey1.color}`:"none"};
    }
    &:hover::before {
        background-color: ${r.J2.Grey5.color};
    }
`,s=o.Ay.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    position: relative;
`,c=o.Ay.img`
    height: ${e=>"Arrow"===e.iconType?"16px":"100%"};
    width: ${e=>"Arrow"===e.iconType?"8px":"100%"};
    object-fit: cover;
`;var p=n(579);const l={Arrow:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",Close:"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg"},u=e=>{let{type:t,onClick:n,hasBackground:o,hasBorder:r,disabled:u,onTouchEnd:d,...b}=e;return(0,p.jsx)(i,{...b,children:(0,p.jsx)(a,{onClick:n,onTouchEnd:d,hasBackground:o,hasBorder:r,disabled:u,children:(0,p.jsx)(s,{children:(0,p.jsx)(c,{src:l[t],iconType:t,alt:"Back button icon"})})})})}},4204:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var o=n(2119),r=n(4936);const i=o.Ay.button`
    height: 48px;
    border-radius: 9px;
    width: 100%;
    position: relative;
    padding: 0 32px;
    background: ${e=>"red"===e.background?r.J2.Red.color:"blue"===e.background?r.J2.Blue.color:"black"===e.background?r.J2.Black.color:"grey"===e.background?r.J2.Grey1.color:void 0};
    background: ${e=>e.disabled&&r.J2.Grey1.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${r.Ox.sans_button_200.fontSize};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    color: ${e=>e.isLoading?"transparent":r.J2.White.color};
    margin-top: auto;
    line-height: ${r.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
`;var a=n(308),s=n(579);const c=e=>{let{isLoading:t,children:n,disabled:o,background:r,...c}=e;return(0,s.jsxs)(i,{...c,background:r,disabled:o,isLoading:t,children:[t&&(0,s.jsx)(a.A,{height:"14px",color:"white",width:"32px",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n]})}},1995:(e,t,n)=>{"use strict";n.d(t,{u:()=>o});const o=(e,t,n)=>{if(void 0===t&&void 0===n)return 0;let o=0;return e.bedrooms>1&&o++,e.bathrooms>0&&o++,e.priceRange.min===(t||0)&&e.priceRange.max===(n||1e3)||o++,o+=e.typeOfPlace.length+e.propertyType.length+e.optionsForYourStay.length+e.amenities.length+e.houseRules.length,o}},8108:(e,t,n)=>{"use strict";n.d(t,{A:()=>W});var o=n(831),r=n(2119),i=n(5475),a=n(4936);const s=r.Ay.footer`
    width: 100%;
    border-top: 1px solid ${a.J2.Grey2.color};
    background: ${a.J2.White.color};
    padding-bottom: 88px;
    @media (min-width: 768px) {
        padding-bottom: 0;
        margin-bottom: ${e=>e.location.includes("/listing")?"80px":0};
        height: 366px;
        ${e=>"/settings"===e.location&&"padding-right: 32px;"};
        ${e=>"/settings"===e.location&&"padding-left: 32px;"};
        ${e=>"/referral-page"===e.location&&"padding: 0 max(80px, calc(100% - 1280px) / 2);"};
    }
    @media (min-width: 1024px) {
        ${e=>"/settings"===e.location&&"padding-right: max(32px, calc(100% - 1024px) / 2);"};
        ${e=>"/settings"===e.location&&"padding-left: max(32px, calc(100% - 1024px) / 2);"};
    }
    @media (max-width: 767px) {
        ${e=>"/settings"===e.location?"background: none !important":null};
        ${e=>e.location.includes("/change-your-booking")?"padding-bottom: 32px":null}
    }
`,c=r.Ay.div`
    position: relative;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    .hidden {
        ${e=>e.location.includes("/change-your-booking")?"display: none !important":null};
    }

    @media (max-width: 767px) {
        ${e=>"/settings"===e.location?"flex-direction: column-reverse !important":null};
        ${e=>"/settings"===e.location?"align-items: center !important":null};
        .hidden {
            ${e=>"/settings"===e.location||e.location.includes("/change-your-booking")?"display: none !important":null};
        }
        .reverse {
            ${e=>"/settings"===e.location?"flex-direction: column-reverse !important;display: flex;align-items: center;gap: ${SpacingTheme.spacing_300.gap};margin-top: 24px":null};
        }
        .reverse div {
            ${e=>"/settings"===e.location?"margin-bottom: 0 !important":null};
        }
    }
    @media (min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin: 0 auto;
        ${e=>("/settings"===e.location||"/referral-page"===e.location)&&"margin: 0;"};
        padding: 0 32px;
        ${e=>"/settings"===e.location||"/referral-page"===e.location?"padding: 0 !important":null};
    }
    @media (min-width: 1024px) {
        ${e=>"/settings"===e.location||"/referral-page"===e.location?"max-width: 1280px !important":null};
        ${e=>e.location.includes("/list-your-place")?"max-width: 1152px !important":null};
    }
    @media (min-width: 1280px) {
        padding: 0 80px;
        ${e=>"/dashboard"===e.location?"max-width: 1280px !important; padding:0;":null};
        ${e=>"/edit-profile"===e.location?"max-width: 1152px !important; padding:0;":null};
        ${e=>e.location.includes("/listing")?"max-width: 1120px !important; padding:0;":null};
        ${e=>e.location.includes("/create-booking")||e.location.includes("/complete-booking")?"max-width: 1056px !important; padding:0;":null};
        ${e=>e.location.includes("/host/profile")?"max-width: 1152px !important; padding:0;":null};
        ${e=>e.location.includes("/list-your-place")?"max-width: 1152px !important; padding:0;":null};
    }
    @media (min-width: 1440px) {
        ${e=>e.location.includes("/create-booking")||e.location.includes("/complete-booking")?"max-width: 1240px !important; padding:0;":null};
    }
    @media (min-width: 1920px) {
        ${e=>e.location.includes("/create-booking")||e.location.includes("/complete-booking")?"max-width: 1152px !important; padding:0;":null};
    }
`,p=(r.Ay.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    margin-top: 32px;
`,r.Ay.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
    opacity: 50%;
`,r.Ay.p`
    font-size: ${a.$G.sans_200_bold.fontSize};
    color: ${a.J2.Grey.color};
    line-height: ${a.$G.sans_200_bold.lineHeight};
    padding-right: 24px;
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${a.$G.sans_300_bold.fontSize};
        line-height: ${a.$G.sans_300_bold.lineHeight};
    }
`,r.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`),l=r.Ay.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`,u=r.Ay.div`
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
`,d=r.Ay.p`
    text-decoration: none;
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`,b=r.Ay.p`
    text-decoration: none;
    font-size: ${a.$G.sans_700_semi.fontSize};
    line-height: ${a.$G.sans_700_semi.lineHeight};
    font-weight: ${a.$G.sans_700_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        width: 167px;
        margin-top: 48px;
        margin-bottom: 0;
    }
`,M=(0,r.Ay)(i.N_)`
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`,f=r.Ay.a`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`,z=r.Ay.p`
    text-decoration: none;
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};
    margin-top: 0px;
    margin-bottom: 16px;
`,h=r.Ay.div`
    width: 100%;
    height: 0px;
    background: ${a.J2.Grey1.color};
    margin-top: 24px;
    @media (max-width: 767px) {
        margin-top: 16px;
        border-bottom: 1px solid ${a.J2.Grey2.color};
    }
`,O=r.Ay.div`
    margin: 0;
    margin-top: 16px;
    /* margin-bottom: 8px; */
    @media (min-width: 768px) {
        width: 240px;
        margin-top: 16px;
    }
`,A=r.Ay.p`
    font-size: ${a.$G.sans_200.fontSize};
    font-weight: ${a.$G.sans_200.fontWeight};
    line-height: ${a.$G.sans_200.lineHeight};
    color: ${a.J2.Grey.color};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_200.fontSize};
        line-height: ${a.$G.sans_200.lineHeight};
    }
`,m=(r.Ay.div`
    margin-bottom: 16px;
    display: flex;
    gap: ${a.dB.spacing_300.gap};
    @media (min-width: 768px) {
        margin-bottom: 4px;
    }
`,r.Ay.div`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: ${a.dB.spacing_500.gap};
        height: 32px;
        margin-top: 200px;
        margin-bottom: 16px;
    }
    @media (max-width: 767px) {
        display: flex;
        align-items: center;
        gap: ${a.dB.spacing_500.gap};
        /* margin-left: auto; */
        margin-top: 24px;
        margin-bottom: 16px;
    }
`),g=((0,r.Ay)(i.N_)`
    font-size: ${a.$G.sans_200.fontSize};
    font-weight: ${a.$G.sans_200.fontWeight};
    gap: ${a.dB.spacing_300.gap};
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_300.fontSize};
        line-height: ${a.$G.sans_300.lineHeight};
    }
`,r.Ay.div`
    display: flex;
    gap: ${a.dB.spacing_300.gap};
    margin-bottom: 0px;
    height: 32px;
`),y=r.Ay.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
`;var v=n(3216),q=n(2204),_=n(579);const W=()=>{const e=(0,v.zy)(),[t,n]=(0,o.useRecoilState)(q.Z);return(0,_.jsx)(s,{location:e.pathname,children:(0,_.jsxs)(c,{location:e.pathname,children:[(0,_.jsxs)(p,{className:"hidden",children:[(0,_.jsx)(b,{children:"Support and guidebooks"}),(0,_.jsxs)(l,{children:[(0,_.jsx)(m,{className:"reverse",children:(0,_.jsxs)(g,{children:[(0,_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/anystay.com.au/",children:(0,_.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Footer/ig1.png",alt:"instagram icon"})}),(0,_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/anystay.com.au/",children:(0,_.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Footer/fb1.png",alt:"Facebook icon"})}),(0,_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tiktok.com/@anystay.com.au/",children:(0,_.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg",alt:"Tiktok icon"})})]})}),(0,_.jsx)(O,{children:(0,_.jsx)(A,{children:"\xa9 2023, Anystay Pty Ltd"})})]}),(0,_.jsx)(h,{})]}),(0,_.jsxs)(p,{className:"hidden",children:[(0,_.jsx)(d,{children:"Explore"}),(0,_.jsx)(M,{to:'search/Australia/ChIJ38WHZwf9KysRUhNblaFnglM/anyArrival/anyDeparture/%7B"typeOfPlace":[],"propertyType":[],"priceRange":%7B"min":0,"max":1000%7D,"guests":1,"adults":1,"children":0,"infants":0,"pets":0,"bedrooms":1,"bathrooms":0,"amenities":[],"services":[],"houseRules":[]%7D',children:(0,_.jsx)(z,{children:"Find a short stay"})}),(0,_.jsx)(M,{to:'search/Australia/ChIJ38WHZwf9KysRUhNblaFnglM/anyArrival/anyDeparture/%7B"typeOfPlace":[],"propertyType":[],"priceRange":%7B"min":0,"max":1000%7D,"guests":1,"adults":1,"children":0,"infants":0,"pets":0,"bedrooms":1,"bathrooms":0,"amenities":[],"services":[],"houseRules":[]%7D',children:(0,_.jsx)(z,{children:"Find a long stay"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/collections/3862266-guests",target:window.innerWidth>768?"_blank":"",rel:"noopener norefferer",children:(0,_.jsx)(z,{children:"Help for guests"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/articles/7007327-changes",target:window.innerWidth>768?"_blank":"",rel:"noopener norefferer",children:(0,_.jsx)(z,{children:"Change request"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/articles/7007448-refunds",target:window.innerWidth>768?"_blank":"",rel:"noopener norefferer",children:(0,_.jsx)(z,{children:"Refund request"})}),(0,_.jsx)(M,{to:"/referral-page",children:(0,_.jsx)(z,{children:"Invite a friend"})}),(0,_.jsx)(h,{})]}),(0,_.jsxs)(p,{className:"hidden",children:[(0,_.jsx)(d,{children:"Hosting"}),(0,_.jsx)(M,{to:t?"/your-listings/1":"/list-your-place",children:(0,_.jsx)(z,{children:"List your place"})}),(0,_.jsx)(M,{to:t?"/your-listings/1":"/list-your-place",children:(0,_.jsx)(z,{children:"List your room"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/collections/3862361-hosts",target:window.innerWidth>768?"_blank":"",rel:"noopener norefferer",children:(0,_.jsx)(z,{children:"Help for hosts"})}),(0,_.jsx)(M,{to:"/your-listings/1",children:(0,_.jsx)(z,{children:"Manage listings"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/articles/7016728-how-to-start-hosting",target:window.innerWidth>768?"_blank":"",rel:"noopener norefferer",children:(0,_.jsx)(z,{children:"Getting started"})}),(0,_.jsx)(M,{to:"/referral-page",children:(0,_.jsx)(z,{children:"Refer a host"})}),(0,_.jsx)(h,{})]}),(0,_.jsxs)(p,{className:"hidden",children:[(0,_.jsx)(d,{children:"Support"}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/",target:window.innerWidth>768?"_blank":"",rel:"noopener norefferer",children:(0,_.jsx)(z,{children:"Help Center"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/articles/7007340-cancellations",children:(0,_.jsx)(z,{children:"Cancellations"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/articles/7007327-changes",children:(0,_.jsx)(z,{children:"Changes"})}),(0,_.jsx)(f,{href:"https://help.anystay.com.au/en/articles/7007403-deposits",children:(0,_.jsx)(z,{children:"Deposits"})}),(0,_.jsx)(M,{to:"/terms-and-conditions",children:(0,_.jsx)(z,{children:"Term of use"})}),(0,_.jsx)(M,{to:"/privacy-policy",children:(0,_.jsx)(z,{children:"Privacy policy"})}),(0,_.jsx)(h,{})]}),(0,_.jsxs)(u,{children:[(0,_.jsx)(m,{className:"reverse",children:(0,_.jsxs)(g,{children:[(0,_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/anystay.com.au/",children:(0,_.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Footer/ig1.png",alt:"instagram icon"})}),(0,_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/anystay.com.au/",children:(0,_.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Footer/fb1.png",alt:"Facebook icon"})}),(0,_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tiktok.com/anystay.com.au/",children:(0,_.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg",alt:"Tiktok icon"})})]})}),(0,_.jsx)(O,{children:(0,_.jsx)(A,{children:"\xa9 2023, Anystay Pty Ltd"})})]})]})})}},4936:(e,t,n)=>{"use strict";n.d(t,{$G:()=>o,E_:()=>c,J2:()=>a,Ox:()=>r,Qk:()=>p,dB:()=>l,mh:()=>s,so:()=>i});const o={sans_100:{fontSize:"10.3px",lineHeight:"12px",fontWeight:"475"},sans_150:{fontSize:"11.3px",lineHeight:"12px",fontWeight:"475"},sans_200:{fontSize:"12.3px",lineHeight:"16px",fontWeight:"475"},sans_300:{fontSize:"14.3px",lineHeight:"18px",fontWeight:"475"},sans_350:{fontSize:"15.3px",lineHeight:"19px",fontWeight:"475"},sans_400:{fontSize:"16.3px",lineHeight:"20px",fontWeight:"475"},sans_500:{fontSize:"18.3px",lineHeight:"22px",fontWeight:"475"},sans_600:{fontSize:"20.3px",lineHeight:"24px",fontWeight:"475"},sans_700:{fontSize:"22.3px",lineHeight:"26px",fontWeight:"475"},sans_800:{fontSize:"24.3px",lineHeight:"28px",fontWeight:"475"},sans_900:{fontSize:"26.3px",lineHeight:"30px",fontWeight:"475"},sans_1000:{fontSize:"32.3px",lineHeight:"36px",fontWeight:"475"},sans_1100:{fontSize:"40.3px",lineHeight:"44px",fontWeight:"475"},sans_1200:{fontSize:"48.3px",lineHeight:"52px",fontWeight:"475"},sans_1300:{fontSize:"64.3px",lineHeight:"72px",fontWeight:"475"},sans_100_med:{fontSize:"10.4",lineHeight:"12px",fontWeight:"500"},sans_150_med:{fontSize:"11.4",lineHeight:"12px",fontWeight:"500"},sans_200_med:{fontSize:"12.3px",lineHeight:"16px",fontWeight:"500"},sans_300_med:{fontSize:"14.3px",lineHeight:"18px",fontWeight:"500"},sans_350_med:{fontSize:"15.3px",lineHeight:"19px",fontWeight:"500"},sans_400_med:{fontSize:"16.3px",lineHeight:"20px",fontWeight:"500"},sans_500_med:{fontSize:"18.3px",lineHeight:"22px",fontWeight:"500"},sans_600_med:{fontSize:"20.3px",lineHeight:"24px",fontWeight:"500"},sans_700_med:{fontSize:"22.3px",lineHeight:"26px",fontWeight:"500"},sans_800_med:{fontSize:"24.3px",lineHeight:"28px",fontWeight:"500"},sans_900_med:{fontSize:"26.3px",lineHeight:"30px",fontWeight:"500"},sans_1000_med:{fontSize:"32.3px",lineHeight:"36px",fontWeight:"500"},sans_1100_med:{fontSize:"40.3px",lineHeight:"44px",fontWeight:"500"},sans_1200_med:{fontSize:"48.3px",lineHeight:"52px",fontWeight:"500"},sans_1300_med:{fontSize:"64.3px",lineHeight:"72px",fontWeight:"500"},sans_100_semi:{fontSize:"10.4",lineHeight:"12px",fontWeight:"625"},sans_150_semi:{fontSize:"11.4",lineHeight:"12px",fontWeight:"625"},sans_200_semi:{fontSize:"12.3px",lineHeight:"16px",fontWeight:"625"},sans_300_semi:{fontSize:"14.3px",lineHeight:"18px",fontWeight:"625"},sans_350_semi:{fontSize:"15.3px",lineHeight:"19px",fontWeight:"625"},sans_400_semi:{fontSize:"16.3px",lineHeight:"20px",fontWeight:"625"},sans_500_semi:{fontSize:"18.3px",lineHeight:"22px",fontWeight:"625"},sans_600_semi:{fontSize:"20.3px",lineHeight:"24px",fontWeight:"625"},sans_700_semi:{fontSize:"22.3px",lineHeight:"26px",fontWeight:"625"},sans_800_semi:{fontSize:"24.3px",lineHeight:"28px",fontWeight:"625"},sans_900_semi:{fontSize:"26.3px",lineHeight:"30px",fontWeight:"625"},sans_1000_semi:{fontSize:"32.3px",lineHeight:"36px",fontWeight:"625"},sans_1100_semi:{fontSize:"40.3px",lineHeight:"44px",fontWeight:"625"},sans_1200_semi:{fontSize:"48.3px",lineHeight:"52px",fontWeight:"625"},sans_1300_semi:{fontSize:"64.3px",lineHeight:"72px",fontWeight:"625"},sans_100_bold:{fontSize:"10.4",lineHeight:"12px",fontWeight:"700"},sans_150_bold:{fontSize:"11.4",lineHeight:"12px",fontWeight:"700"},sans_200_bold:{fontSize:"12.3px",lineHeight:"16px",fontWeight:"700"},sans_300_bold:{fontSize:"14.3px",lineHeight:"18px",fontWeight:"700"},sans_350_bold:{fontSize:"15.3px",lineHeight:"19px",fontWeight:"700"},sans_400_bold:{fontSize:"16.3px",lineHeight:"20px",fontWeight:"700"},sans_500_bold:{fontSize:"18.3px",lineHeight:"22px",fontWeight:"700"},sans_600_bold:{fontSize:"20.3px",lineHeight:"24px",fontWeight:"700"},sans_700_bold:{fontSize:"22.3px",lineHeight:"26px",fontWeight:"700"},sans_800_bold:{fontSize:"24.3px",lineHeight:"28px",fontWeight:"700"},sans_900_bold:{fontSize:"26.3px",lineHeight:"30px",fontWeight:"700"},sans_1000_bold:{fontSize:"32.3px",lineHeight:"36px",fontWeight:"700"},sans_1100_bold:{fontSize:"40.3px",lineHeight:"44px",fontWeight:"700"},sans_1200_bold:{fontSize:"48.3px",lineHeight:"52px",fontWeight:"700"},sans_1300_bold:{fontSize:"64.3px",lineHeight:"72px",fontWeight:"700"}},r={sans_button_100:{fontSize:"14.3px",lineHeight:"18px",fontWeight:"625"},sans_button_200:{fontSize:"16.3px",lineHeight:"20px",fontWeight:"625"},sans_button_300:{fontSize:"18.3px",lineHeight:"22px",fontWeight:"625"},sans_button_100_light:{fontSize:"14.3px",lineHeight:"18px",fontWeight:"500"},sans_button_200_light:{fontSize:"16.3px",lineHeight:"20px",fontWeight:"500"},sans_button_300_light:{fontSize:"18.3px",lineHeight:"22px",fontWeight:"500"}},i={sans_text_100:{fontSize:"12.3px",lineHeight:"20px",fontWeight:"475"},sans_text_200:{fontSize:"14.3px",lineHeight:"22px",fontWeight:"475"},sans_text_300:{fontSize:"16.3px",lineHeight:"24px",fontWeight:"475"},sans_text_400:{fontSize:"18.3px",lineHeight:"26px",fontWeight:"475"}},a={Red:{color:"#ff3264"},Blue:{color:"#262626"},Black:{color:"#262626",opacityColor:"rgba(38, 38, 38, 0.15)"},Grey:{color:"#737373"},Grey1:{color:"#cccccc"},Grey2:{color:"#ebebeb"},Grey3:{color:"#f1f1f1"},Grey4:{color:"#f6f6f6"},Grey5:{color:"#fafafa"},Accent:{color:"#fdfaf9"},White:{color:"#ffffff"},Red1:{color:"#ed555b"},Yellow:{color:"#ffa01d"},Green:{color:"#30c300"},Red2:{color:"#e42151"},Khaki:{color:"#F7F4F0"}},s={Red:{background:"linear-gradient(93deg, #FF3266 0%, #E92C5A 49%, #D92364 100%);"},Black:{background:"linear-gradient(315deg, #1D1D1F 0%, #1D1D1F 49.5%, #545454 100%)"}},c={shadow_50:{boxShadow:"0px 2.5px 10px 0px rgba(0, 0, 0, 0.06)"},shadow_100:{boxShadow:"1.3px 3px 16px 0 rgba(0, 0, 0, 0.1)"},shadow_200:{boxShadow:"0 0 16px 0 rgba(0, 0, 0, 0.5)"},shadow_300:{boxShadow:"0 0 20px 8px rgba(0, 0, 0, 0.08)"},shadow_400:{boxShadow:"0 0 128px 0 rgba(0, 0, 0, 0.5)"}},p={radius_4:{borderRadius:"4px"},radius_8:{borderRadius:"8px"},radius_12:{borderRadius:"12px"},radius_16:{borderRadius:"16px"},radius_24:{borderRadius:"24px"},radius_32:{borderRadius:"32px"},radius_100:{borderRadius:"100px"}},l={spacing_100:{padding:"4px",margin:"4px",gap:"4px"},spacing_200:{padding:"8px",margin:"8px",gap:"8px"},spacing_250:{padding:"12px",margin:"12px",gap:"12px"},spacing_300:{padding:"16px",margin:"16px",gap:"16px"},spacing_350:{padding:"20px",margin:"20px",gap:"20px"},spacing_400:{padding:"24px",margin:"24px",gap:"24px"},spacing_500:{padding:"32px",margin:"32px",gap:"32px"},spacing_600:{padding:"48px",margin:"48px",gap:"48px"},spacing_700:{padding:"64px",margin:"64px",gap:"64px"},spacing_800:{padding:"80px",margin:"80px",gap:"80px"},spacing_900:{padding:"96px",margin:"96px",gap:"96px"},spacing_1000:{padding:"128px",margin:"128px",gap:"128px"}}},1372:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var o=n(5043),r=n(3832),i=n(1852),a=n(4204),s=n(9697),c=n(579);const p=(0,o.forwardRef)(((e,t)=>{let{children:n,closePopup:o,style:p,handleSave:l,disable:u,isContinueBtnLoading:d,btnText:b,btnColor:M,backBtnType:f,noBackBtn:z,noContinueBtn:h,desktopWidth:O,height:A,desktopHeight:m,backBtnBackground:g,cancelBtnText:y,cancelPopup:v,noBackdrop:q,onTouchEnd:_}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.A,{noBackdrop:q,children:(0,c.jsxs)(r.g_,{ref:t,style:p,desktopWidth:O,height:A,desktopHeight:m,children:[!z&&(0,c.jsx)(i.A,{onClick:()=>o(),type:f||"Close",mobileTop:24,mobileLeft:24,desktopTop:24,desktopLeft:24,hasBackground:g}),n,!h&&(0,c.jsxs)(r.sk,{children:[(0,c.jsx)(r.Zb,{disabled:d,onClick:()=>{void 0!==v?v():o()},onTouchEnd:_||void 0,children:y||"Cancel"}),(0,c.jsx)(a.A,{background:M||"black",style:{width:"unset",margin:"0"},onClick:l,disabled:u||!1,isLoading:d||!1,children:b||"Save"})]})]})})})}))},3832:(e,t,n)=>{"use strict";n.d(t,{GO:()=>b,Gj:()=>u,HN:()=>d,LZ:()=>l,Zb:()=>c,Zg:()=>i,g_:()=>a,sk:()=>s,xk:()=>p});var o=n(2119),r=n(4936);const i=o.Ay.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    border-radius: 14px 14px 0 0;
    box-shadow: ${r.E_.shadow_300.boxShadow};
    display: flex;
    background: ${r.J2.White.color};
    flex-direction: column;
    z-index: 102;
    align-items: center;
    min-height: fit-content;

    @media (min-width: 768px) {
        width: 560px;
        height: 100%;
        border-radius: 14px 0 0 0;
        top: 0;
        margin: 0 auto;
    }
`,a=o.Ay.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 14px 14px 0 0;
    box-shadow: ${r.E_.shadow_300.boxShadow};
    display: flex;
    background: ${r.J2.White.color};
    flex-direction: column;
    z-index: 102;
    align-items: center;
    min-height: fit-content;
    height: ${e=>e.height?e.height:"fit-content"};

    @media (min-width: 768px) {
        width: ${e=>e.desktopWidth?e.desktopWidth:"560px"};
        height: ${e=>e.desktopHeight?e.desktopHeight:e.height?e.height:"fit-content"};
        border-radius: 14px;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`,s=o.Ay.div`
    width: 100%;
    background-color: ${r.J2.White.color};
    display: flex;
    justify-content: space-between;
    /* border-top: 1px solid ${r.J2.Grey2.color}; */
    padding: ${r.dB.spacing_300.padding} ${r.dB.spacing_400.padding};
    margin-top: auto;
    @media (min-width: 768px) {
        padding: ${r.dB.spacing_300.padding} ${r.dB.spacing_400.padding} ${r.dB.spacing_400.padding};
        border-radius: 0 0 14px 14px;
    }
`,c=o.Ay.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    cursor: pointer;
    padding: 0;
`,p=o.Ay.div`
    width: 100%;
    overflow-y: scroll;
    margin-top: 48px;
    padding: 0 24px;
    flex: 1;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        margin-top: 64px;
    }
`,l=o.Ay.div`
    position: fixed;
    width: 100%;
    height: ${e=>e.mobileHeight?e.mobileHeight:"98%"};
    bottom: 0;
    left: 0;
    border-radius: ${e=>"100%"===e.mobileHeight?"0":"16px 16px 0 0"};
    box-shadow: ${r.E_.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${r.J2.White.color};
    z-index: 102;

    @media (min-width: 768px) {
        border-radius: unset;
        height: 100%;
    }
`,u=o.Ay.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${r.dB.spacing_600.padding} ${r.dB.spacing_400.padding} 0;
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding: ${r.dB.spacing_1000.padding} ${r.dB.spacing_300.padding} 0;
        width: calc(640px + 32px);
    }
`,d=o.Ay.div`
    background: ${r.J2.White.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${r.dB.spacing_300.padding} ${r.dB.spacing_400.padding};
    margin-top: auto;
    border-top: 1px solid ${r.J2.Grey2.color};
    @media (min-width: 768px) {
        padding: ${r.dB.spacing_300.padding} ${r.dB.spacing_800.padding};
    }
`,b=o.Ay.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    cursor: pointer;
`},4677:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var o=n(5043),r=n(7950);const i=n(2119).Ay.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 999;
`;var a=n(4175),s=n(579);const c=e=>{let{guestMode:t,reverse:n}=e;return(0,o.useEffect)((()=>(document.body.style.overflow="hidden",document.body.style.position="relative",document.body.style.height="100vh",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow="unset",document.body.style.position="unset",document.body.style.height="unset",document.documentElement.style.overflow="unset"})),[]),(0,s.jsx)(i,{children:(0,s.jsx)(a.A,{reverse:n,guestMode:t,width:60,height:60,speedSeconds:1})})},p=e=>{let{guestMode:t,reverse:n}=e;return(0,r.createPortal)((0,s.jsx)(c,{guestMode:t,reverse:n}),document.getElementById("root"))}},6495:(e,t,n)=>{"use strict";n.d(t,{$f:()=>b,BG:()=>P,CV:()=>F,EM:()=>Ae,Es:()=>Q,Fp:()=>c,Ft:()=>h,G0:()=>B,GC:()=>Oe,GK:()=>_e,H9:()=>ie,Hv:()=>l,IS:()=>E,Is:()=>be,Iz:()=>f,J7:()=>k,JO:()=>O,LC:()=>G,Lf:()=>$,Ln:()=>u,Nr:()=>we,OM:()=>H,Of:()=>y,Pe:()=>V,Pj:()=>Se,Pq:()=>me,QK:()=>d,Qv:()=>ne,RC:()=>ee,S_:()=>U,Se:()=>g,TU:()=>le,UL:()=>T,V4:()=>xe,V9:()=>ze,VB:()=>oe,VD:()=>M,Vj:()=>K,Vl:()=>C,WJ:()=>S,WT:()=>z,Xx:()=>he,Z8:()=>se,ZE:()=>re,ZU:()=>I,_k:()=>Y,_q:()=>ae,bm:()=>x,db:()=>Me,e_:()=>j,fT:()=>Z,hL:()=>J,i3:()=>te,iR:()=>We,ix:()=>X,jL:()=>q,jT:()=>A,l2:()=>ce,mZ:()=>D,mo:()=>L,nS:()=>W,nT:()=>qe,oV:()=>pe,qi:()=>Re,qr:()=>p,rz:()=>ye,sj:()=>ge,tW:()=>ue,v7:()=>fe,wl:()=>v,xL:()=>w,xO:()=>N,xg:()=>_,xp:()=>m,yv:()=>R,zC:()=>de,z_:()=>ve});var o=n(2119),r=n(5475),i=n(620),a=n(6779),s=n(4936);const c=o.Ay.nav`
    position: relative;
    @media (max-width: 767px) {
        position: ${e=>e.navbarMenu?"fixed":"relative"};
        display: ${e=>e.location.includes("/search")||"/"===e.location?"none":"flex"};
    }
    z-index: 101;
    background: ${s.J2.White.color};
    margin: 0 auto;
    width: 100%;
    height: 60px;
    padding: 0 24px;
    display: ${e=>e.location.includes("/create-booking")||e.location.includes("/complete-booking")?"none":"flex"};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: none;
    @media (min-width: 768px) {
        //home padding
        display: ${e=>(e.location.includes("/create-booking")||e.location.includes("/complete-booking")||e.location.includes("hospitable"))&&"none"};
        height: 80px;
        border-bottom: ${e=>e.location.includes("/your-stays")||e.location.includes("/saved-listings")||e.location.includes("/settings")||e.location.includes("/edit-profile")||e.location.includes("/profile")||e.location.includes("/security-settings")||e.location.includes("/payment-settings")||e.location.includes("/dashboard")||e.location.includes("/booking-request")||e.location.includes("/payout-settings")||e.location.includes("/payouts")||e.location.includes("/payment-details")||e.location.includes("/booking-receipt")||e.location.includes("/your-calendar")||e.location.includes("/your-listings")||e.location.includes("/edit-listing")||e.location.includes("/all-bookings")||e.location.includes("/create-booking")||e.location.includes("/complete-booking")||e.location.includes("/manage-payments")||e.location.includes("/host-conversation")||e.location.includes("/conversation")?`1px solid ${s.J2.Grey2.color}`:"none"};

        ${e=>e.location.includes("/your-stays")&&"padding: 0 32px;"}
        ${e=>e.location.includes("/booking-request")&&""}
        ${e=>e.location.includes("/referral-page")&&"padding: 0 max(calc((100% - 1280px) / 2), 80px);"};
        ${e=>e.location.includes("/settings")&&"padding: 0 32px;"}
    }
    @media (min-width: 1024px) {
        ${e=>e.location.includes("/settings")&&"padding: 0 max(32px, calc((100% - 1024px) / 2));"}
    }
    @media (min-width: 1280px) {
        ${e=>e.location.includes("/listing")&&"padding: 0 calc(50% - 570px);"}
        ${e=>e.location.includes("/your-stays")&&"padding: 0 96px;"}
    }
`,p=o.Ay.div`
    position: ${e=>e.location.includes("/listing")?"unset":"fixed"};
    top: 0;
    width: 100%;
    max-height: 60px;
    background: ${s.J2.White.color};
    //make sure the mobilenavbar menu is behind if navbarmenu is opened on mobile;
    z-index: ${e=>e.navbarMenu?"1002":"100"};
    box-shadow: rgba(0, 0, 0, 0.065);
    ${e=>(e.location.includes("/listing")||e.location.includes("create-listing"))&&"display: none;"}

    @media (max-width: 767px) {
        ${e=>e.location.includes("/listing")||e.location.includes("edit-profile")||e.location.includes("your-inbox")||e.location.includes("your-stays")||e.location.includes("settings")||e.location.includes("conversation")||e.location.includes("saved-listings")||e.location.includes("create-booking")||e.location.includes("payment-settings")||e.location.includes("your-booking")||e.location.includes("manage-payments")||e.location.includes("your-host-inbox")||e.location.includes("payouts")||e.location.includes("your-listings")||e.location.includes("booking-request")||e.location.includes("host-profile")||e.location.includes("profile")||e.location.includes("payment-details")||e.location.includes("edit-listing")||e.location.includes("your-calendar")||e.location.includes("all-bookings")||e.location.includes("referral-page")||e.location.includes("hospitable")?"display: none;":""}
    }

    @media (min-width: 768px) {
        max-height: 80px;
        /* Desktop nav bar shadow */
        box-shadow: ${e=>e.location.includes("-policy")||e.location.includes("-conditions")?"none !important":null};
    }
`,l=(0,o.Ay)(a.P.div)`
    @media (max-width: 767px) {
        display: none;
    }

    display: flex;
    height: 54px;
    width: 468px;
    border-radius: ${s.Qk.radius_100.borderRadius};
    align-items: center;
    padding: 0 20px;
    transition: 125ms;
    cursor: pointer;
    position: relative;
    background: ${s.J2.White.color};
    box-shadow:
        1px 3px 16px 0px rgba(0, 0, 0, 0.1),
        0 0 2px 0 rgba(0, 0, 0, 0.125);

    &:hover {
        box-shadow:
            1px 3px 20px 0px rgba(0, 0, 0, 0.12),
            0 0 2px 0 rgba(0, 0, 0, 0.04);
    }
`,u=o.Ay.div`
    @media (max-width: 767px) {
        display: none;
    }

    display: flex;
    gap: ${s.dB.spacing_500.gap};
    margin: 15px auto 0;
    position: relative;
`,d=(0,o.Ay)(r.N_)`
    background: none;
    border: none;
    color: ${e=>e.selected?s.J2.Black.color:s.J2.Grey.color};
    font-weight: ${e=>(e.selected,s.Ox.sans_button_100.fontWeight)};
    font-size: ${s.Ox.sans_button_100.fontSize};
    text-decoration: none;
    line-height: ${s.Ox.sans_button_100.lineHeight};
    cursor: pointer;
`,b=o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 34px;
`,M=o.Ay.div`
    width: 20px;
    height: 3px;
    background-color: ${s.J2.Black.color};

    // temporarily hidden
    display: none;
`,f=o.Ay.img`
    height: 20px;
    width: 20px;
    margin: auto;
    object-fit: cover;
    position: realtive;
`,z=o.Ay.div`
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-self: flex-start;
    flex-grow: 1;
    flex-basis: 0;
`,h=o.Ay.button`
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 36px;
    }
`,O=o.Ay.img`
    height: 32px;
    @media (min-width: 768px) {
        height: 36px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`,A=o.Ay.img`
    height: 32px;
    @media (min-width: 768px) {
        height: 36px;
    }
    @media (max-width: 767px), (min-width: 1025px) {
        display: none;
    }
`,m=o.Ay.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    flex-basis: 0;
`,g=o.Ay.button`
    @media (max-width: 1280px) {
        display: none;
    }
    padding: 11px 12px;
    border: none;
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.Ox.sans_button_100.fontWeight};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    text-decoration: none;
    background-color: transparent;
    border-radius: ${s.Qk.radius_100.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    cursor: pointer;

    &:hover {
        background-color: ${s.J2.Grey5.color};
    }
`,y=(o.Ay.img`
    height: 20px;
    width: 20px;
    object-fit: cover;
`,o.Ay.button`
    /* Notifications hidden on mobile until complete */
    display: none;
    position: relative;
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background-color: ${s.J2.Grey5.color};
        }
    }
`),v=(o.Ay.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>e.guestMode?s.J2.Red.color:s.J2.Blue.color};
    align-self: flex-start;
    justify-self: flex-end;
`,o.Ay.img`
    height: 24px;
    width: 24px;
`),q=o.Ay.div`
    position: relative;
    z-index: 100;
    margin-left: 14px;
    width: 44px;
    height: 44px;
    transition: 125ms;
    border: 3px solid ${s.J2.White.color};
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.12);
    }
`,_=o.Ay.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`,W=o.Ay.div`
    position: absolute;
    justify-self: flex-end;
    right: 0;
    top: 0;
    width: 100%;
    height: calc(100dvh - 60px);
    min-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    background: ${s.J2.White.color};
    padding: 60px ${s.dB.spacing_400.padding} ${s.dB.spacing_300.padding} ${s.dB.spacing_400.padding};
    text-align: left;

    @media (min-width: 768px) {
        min-height: unset;
        height: fit-content;
        width: 252px;
        border-radius: ${s.Qk.radius_12.borderRadius};
        padding: ${s.dB.spacing_200.padding} ${s.dB.spacing_350.padding};
        margin-top: 56px;
        box-shadow: ${s.E_.shadow_100.boxShadow};
    }
`,w=(0,o.Ay)(r.N_)`
    height: 64px;
    display: flex;
    justify-content: space-between;
    text-decoration: none;

    padding: 13px 20px;
    margin: 0 -20px;

    &:hover {
        background-color: ${s.J2.Grey5.color};
    }
`,R=o.Ay.div`
    display: flex;
    flex-direction: column;
`,S=o.Ay.div`
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    margin-bottom: 4px;
    text-align: left;
`,x=o.Ay.div`
    font-size: ${s.$G.sans_200.fontSize};
    font-weight: ${s.$G.sans_200.fontWeight};
    color: ${s.J2.Grey.color};
    line-height: ${s.$G.sans_200.lineHeight};
    text-align: left;
`,E=o.Ay.div`
    background-color: red;
    border-radius: 50%;
    margin-top: 5px;
    width: 8px;
    height: 8px;
    align-items: right;
`,T=o.Ay.button`
    display: flex;
    height: 44px;
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    margin: 0;
    cursor: pointer;
    border: none;
    background: none;
    text-align: left;
    align-items: center;
    padding: 0;
    text-decoration: none;
    padding: 13px 20px;
    margin: 0 -20px;

    &:hover {
        background-color: ${s.J2.Grey5.color};
    }
`,C=(0,o.Ay)(r.N_)`
    display: flex;
    height: 44px;
    gap: ${s.dB.spacing_300.gap};
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    margin: 0;
    cursor: pointer;
    border: none;
    background: none;
    text-align: left;
    align-items: center;
    padding: 13px 20px;
    text-decoration: none;
    margin: 0 -20px;

    &:hover {
        background-color: ${s.J2.Grey5.color};
    }
`,N=o.Ay.span`
    height: 1px;
    width: 100%;
    background: ${s.J2.Grey2.color};
    margin: ${s.dB.spacing_200.margin} 0;
`,L=o.Ay.a`
    height: 44px;
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    display: flex;
    align-items: center;
    gap: ${s.dB.spacing_300.gap};
    cursor: pointer;
    text-decoration: none;
    padding: 13px 20px;
    margin: 0 -20px;

    &:hover {
        background-color: ${s.J2.Grey5.color};
    }
`,k=o.Ay.img`
    height: 20px;
    width: 20px;
    margin-top: 2px;
    object-fit: cover;
`,P=(o.Ay.div`
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: space-evenly;
    z-index: 10;

    justify-self: flex-end;
    flex-direction: column;
`,o.Ay.button`
    font-size: ${s.Ox.sans_button_200.fontSize};
    font-weight: ${s.$G.sans_1000_semi.fontWeight};
    line-height: 0;
    cursor: pointer;
    background: none;
    border: 1px solid ${s.J2.Grey1.color};
    text-align: center;
    padding: 0 16px;
    height: 36px;
    border-radius: ${s.Qk.radius_100.borderRadius};
    transition: 0.2s;
    &:hover {
        background: ${s.J2.Grey5.color};
        border: none;
    }
    @media (min-width: 768px) {
        padding: 0 24px;
        height: 40px;
    }
`),I=(o.Ay.div`
    width: 100%;
    height: 2px;
    background: ${s.J2.Black.color};
    transition: 0.1s;
`,(0,o.Ay)(i.default)`
    font-size: ${s.$G.sans_300_semi.fontSize};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    height: 32px !important;
    line-height: ${s.$G.sans_300_semi.lineHeight};
    justify-self: center;
    border: none;
    background: none;
    outline: none;
    padding: 0;
    overflow: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    padding-bottom: 14px;
    width: 840px; /* To make the google autocomplete dropdown full width*/
    padding-left: 32px;
    margin-left: -32px;
    padding-right: calc(840px - 32px - 250px);
    &::-webkit-scrollbar {
        display: none;
    }
    &::placeholder {
        font-weight: ${s.$G.sans_300.fontWeight} !important;
        color: ${s.J2.Grey.color} !important;
    }
`),B=o.Ay.p`
    font-size: ${s.$G.sans_350_semi.fontSize};
    font-weight: ${s.$G.sans_350_semi.fontWeight};
    line-height: ${s.$G.sans_350_semi.lineHeight};
    text-align: center;
    margin: 0;
    white-space: nowrap; // was text-wrap but saying unknown property
`,D=o.Ay.p`
    width: 100%;
    font-size: ${s.$G.sans_200.fontSize};
    line-height: 19px;
    color: ${s.J2.Grey.color};
    font-weight: ${s.$G.sans_200.fontWeight};
    text-align: left;
    margin: 0;
    white-space: nowrap; // was text-wrap but saying unknown property
`,$=o.Ay.p`
    width: 100%;
    font-size: ${s.$G.sans_200.fontSize};
    line-height: 19px;
    color: ${s.J2.Grey.color};
    font-weight: ${s.$G.sans_200.fontWeight};
    text-align: right;
    margin: 0;
    white-space: nowrap; // was text-wrap but saying unknown property
`,j=o.Ay.div`
    width: 100%;
    min-height: calc(100vh - 12px);
    position: fixed;
    background: ${s.J2.White.color};
    z-index: 102;
    left: 0;
    bottom: 0;
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${s.E_.shadow_100.boxShadow};
    justify-content: space-between;

    @media (min-width: 768px) {
        width: 560px;
        border-radius: 14px;
        min-height: unset;
        height: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`,X=o.Ay.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`,U=o.Ay.p`
    font-size: ${s.$G.sans_600_bold.fontSize};
    line-height: ${s.$G.sans_600_bold.lineHeight};
    font-weight: ${s.$G.sans_600_bold.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_800_bold.fontSize};
        font-weight: ${s.$G.sans_800_bold.fontWeight};
        line-height: ${s.$G.sans_800_bold.lineHeight};
    }
`,F=o.Ay.p`
    margin: 0;
    margin-top: 12px;
    max-width: 240px;
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
`,V=o.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`,H=o.Ay.div`
    width: calc(100% - 48px);
    padding: ${s.dB.spacing_300.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        border: none;
        padding: ${s.dB.spacing_400.padding} 0;
        margin: 0;
    }
`,G=o.Ay.button`
    font-size: ${s.Ox.sans_button_200.fontSize};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    color: ${s.J2.Black.color};
`,K=(o.Ay.button`
    height: 48px;
    width: 104px;
    border-radius: 9px;
    color: ${s.J2.White.color};
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.Ox.sans_button_100.fontWeight};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    text-decoration: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${s.J2.Blue.color};

    @media (min-width: 768px) {
        width: 104px;
    }
`,o.Ay.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${s.J2.Grey3.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    align-self: center;
    margin-left: auto;
`),Y=o.Ay.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    width: calc(100% - 64px);
    max-width: 840px;
    height: 480px;
    background: ${s.J2.White.color};
    border-radius: ${s.Qk.radius_32.borderRadius};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    padding: ${s.dB.spacing_400.padding} ${s.dB.spacing_200.padding};
    z-index: 11;

    @media (min-width: 1280px) {
        margin-left: auto;
    }
`,J=(o.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${s.dB.spacing_500.gap};
    margin-bottom: 32px;
`,o.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    color: ${e=>e.selected?s.J2.Black.color:s.J2.Grey.color};
    padding-bottom: 7px;
    border-bottom: ${e=>e.selected?`2px solid ${s.J2.Black.color}`:"none"};
    margin: 0;
`,(0,o.Ay)(a.P.div)`
    position: relative;
    width: 100%;
    height: ${e=>e.location.includes("/search")||"/"===e.location?"84px":"68px"};
    background: ${s.J2.White.color};
    display: flex;
    justify-content: center;
    z-index: 102;
    align-items: ${e=>e.location.includes("/search")||"/"===e.location?"center":"start"};

    @media (min-width: 768px) {
        height: 96px;
        align-items: flex-start;
    }
`),Q=o.Ay.button`
    position: relative;
    height: 56px;
    padding: 0px;
    width: calc(100% - 48px);
    background: ${s.J2.White.color};
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    color: ${s.J2.Grey.color};
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: ${s.dB.spacing_250.gap};
    border-radius: ${s.Qk.radius_100.borderRadius};
    border: 0;
    box-shadow:
        1px 3px 16px 0px rgba(0, 0, 0, 0.1),
        0 0 2px 0 rgba(0, 0, 0, 0.025);
    flex-direction: row;
    @media (min-width: 768px) {
        display: none;
    }
`,Z=o.Ay.div`
    position: absolute;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`,ee=o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,te=(o.Ay.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${s.J2.Red.color};
    margin-right: 8px;
`,o.Ay.img`
    height: 10px;
    width: 10px;
`),ne=(o.Ay.button`
    font-size: ${s.Ox.sans_button_100.fontSize};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    font-weight: ${s.$G.sans_300.fontWeight};
    display: flex;
    align-items: center;
    gap: ${s.dB.spacing_300.gap};
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    z-index: 1100;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`,o.Ay.div`
    font-size: ${s.$G.sans_350_semi.fontSize};
    line-height: ${s.$G.sans_350_semi.lineHeight};
    font-weight: ${s.$G.sans_350_semi.fontWeight};
`),oe=o.Ay.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${s.$G.sans_200.fontSize};
    line-height: 17px;
    font-weight: ${s.$G.sans_200.fontWeight};
    color: ${s.J2.Grey.color};
`,re=(0,o.Ay)(a.P.div)`
    max-width: 840px;
    width: calc(100% - 64px);
    height: 64px;
    box-shadow:
        rgba(0, 0, 0, 0.1) 1px 3px 16px 0px,
        rgba(0, 0, 0, 0.04) 0px 0px 2px 0px;
    border-radius: ${s.Qk.radius_100.borderRadius};
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
        display: none;
    }
`,ie=(0,o.Ay)(a.P.button)`
    height: 48px;
    margin-left: auto;
    margin-right: 8px;
    background: ${s.mh.Red.background};
    border-radius: ${s.Qk.radius_100.borderRadius};
    align-items: center;
    font-size: ${s.Ox.sans_button_200.fontSize};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    color: ${s.J2.White.color};
    cursor: pointer;
    line-height: ${s.Ox.sans_button_200.lineHeight};
    border: none;
    display: flex;
    width: 112px;
    gap: 10px;
    padding: 0 18px;
    z-index: 11;
`,ae=o.Ay.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`,se=o.Ay.p`
    font-size: ${s.$G.sans_200_semi.fontSize};
    font-weight: ${s.$G.sans_200_semi.fontWeight};
    line-height: ${s.$G.sans_200_semi.lineHeight};
    margin: 0;
`,ce=o.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${e=>e.selected?s.$G.sans_300_semi.fontWeight:s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${e=>e.selected?s.J2.Black.color:s.J2.Grey.color};
    margin: 0;
    z-index: 10;
`,pe=(0,o.Ay)(a.P.div)`
    flex: 1;
    height: 100%;
    margin-left: 32px;
    display: flex;
    justify-content: space-between;
    max-width: 260px;
`,le=o.Ay.div`
    width: 93%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
`,ue=o.Ay.div`
    flex: 1;
    padding-left: 20px;
    height: 100%;
    padding: 13px 0 14px;
    display: flex;
    max-width: 160px;
`,de=o.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
`,be=o.Ay.div`
    width: 1px;
    height: 24px;
    background: ${s.J2.Grey2.color};
    margin: 0 32px 0 16px;
`,Me=o.Ay.div`
    flex: 1;
    height: 100%;
    padding: 13px 0 14px;
    display: flex;
    max-width: ${e=>e.fullWidth?"300px":"150px"};
`,fe=o.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
`,ze=o.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${e=>e.selected?s.$G.sans_300_semi.fontWeight:s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${e=>e.selected?s.J2.Black.color:s.J2.Grey.color};
    margin: 0;
    z-index: 10;
    white-space: nowrap;
`,he=(0,o.Ay)(a.P.div)`
    flex-wrap: wrap;
    display: flex;
    gap: ${s.dB.spacing_400.gap} 16px;
    position: absolute;
    top: 84px;
    right: 0;
    z-index: 11;
    left: 0;
    padding: ${s.dB.spacing_500.padding};
    border-radius: ${s.Qk.radius_32.borderRadius};
    background: ${s.J2.White.color};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 64px);
    max-width: 840px;
    z-index: 1000;
`,Oe=o.Ay.p`
    width: 100%;
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    color: ${s.J2.Black.color};
`,Ae=o.Ay.button`
    flex: 1 1 calc(25% - 16px); /* Adjusted to allow 4 buttons per row */
    height: 140px;
    background: blue;
    background: linear-gradient(193deg, rgba(0, 0, 0, 0) 16.24%, rgba(0, 0, 0, 0.13) 61.47%, rgba(0, 0, 0, 0.35) 84.92%), url(${e=>e.url});
    background-size: cover;
    background-position: center center;
    border: none;
    display: flex;
    align-items: end;
    justify-content: flex-start;
    border-radius: ${s.Qk.radius_12.borderRadius};
    cursor: pointer;
    padding: ${s.dB.spacing_300.padding};
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    color: ${s.J2.White.color};
`,me=o.Ay.div`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    position: absolute;
`,ge=o.Ay.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
`,ye=o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`,ve=o.Ay.div`
    display: flex;
`,qe=o.Ay.div`
    font-size: ${s.$G.sans_200.fontSize};
    line-height: 19px;
    font-weight: ${s.$G.sans_200.fontWeight};
    color: ${s.J2.Grey.color};
    margin: 0 4px;
`,_e=o.Ay.svg`
    width: 16px;
    height: 16x;
    margin: ${s.dB.spacing_300.margin} ${s.dB.spacing_250.margin} ${s.dB.spacing_300.margin} 0;
`,We=o.Ay.div`
    display: flex;
    flex-direction: column;

    margin-top: 72px;
    padding-bottom: 16px;

    width: 100%;
    height: 100%;

    background: ${s.J2.White.color};

    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        position: absolute;
        top: 0;
        right: 0;

        margin-top: 56px;
        padding: ${s.dB.spacing_400.padding} 0;

        width: 400px;
        /* width: 252px; */
        height: 700px;
        /* height: 440px; */

        border-radius: ${s.Qk.radius_12.borderRadius};
        box-shadow: ${s.E_.shadow_100.boxShadow};

        cursor: default;
    }
`,we=o.Ay.h1`
    font-size: ${s.$G.sans_900_bold.fontSize};
    font-weight: ${s.$G.sans_900_bold.fontWeight};
    line-height: ${s.$G.sans_900_bold.lineHeight};
    padding: 0 24px;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        font-size: ${s.$G.sans_700_semi.fontSize};
        font-weight: ${s.$G.sans_700_semi.fontWeight};
        line-height: ${s.$G.sans_700_semi.lineHeight};
        margin-bottom: 12px;
    }
`,Re=(o.Ay.div`
    width: 100%;
    height: 84px;
    display: flex;
    padding: ${s.dB.spacing_250.padding} ${s.dB.spacing_400.padding};

    cursor: pointer;
    &:hover {
        background: ${s.J2.Grey5.color};
    }
`,o.Ay.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${s.J2.Grey3.color};
`,o.Ay.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`,o.Ay.p`
    width: 55%;
    font-size: ${s.$G.sans_400_med.fontSize};
    font-weight: ${s.$G.sans_400_med.fontWeight};
    line-height: ${s.$G.sans_400_med.lineHeight};
    margin-left: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
`,o.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${s.J2.Grey.color};
    margin-left: auto;
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${s.dB.spacing_250.gap};
    margin: ${s.dB.spacing_400.margin} ${s.dB.spacing_400.margin} 0;
    width: 55%;
    @media (min-width: 768px) {
        align-items: center;
        margin: 52px auto 0;
    }
`),Se=o.Ay.h1`
    font-size: ${s.$G.sans_600_semi.fontSize};
    font-weight: ${s.$G.sans_600_semi.fontWeight};
    line-height: ${s.$G.sans_600_semi.lineHeight};
    color: ${s.J2.Grey1.color};
    text-align: left;
    @media (min-width: 768px) {
        text-align: center;
    }
`,xe=o.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    color: ${s.J2.Grey1.color};
    text-align: left;
    @media (min-width: 768px) {
        text-align: center;
    }
`},8411:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(9856),r=n(6495),i=n(579);const a=e=>{let{notificationsPopup:t,closeNotificationDropDown:n,setNotificationsPopup:a}=e;const s=(0,o.A)(t,(()=>{a(!1)}),!0);return(0,i.jsxs)(r.iR,{ref:s,children:[(0,i.jsx)(r.Nr,{children:"Notifications"}),(0,i.jsxs)(r.qi,{children:[(0,i.jsx)(r.Pj,{children:"No notifications"}),(0,i.jsx)(r.V4,{children:"Under construction..."})]})]})}},8893:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var o=n(5043),r=n(6495),i=n(4204),a=n(7607),s=n(2392),c=n(9082),p=n(831),l=n(9856),u=n(3216),d=n(9697),b=n(7426),M=n(579);const f=function(e){let{activated:t,closeSaveAndExitPopup:n}=e;const f=(0,l.A)(t,n),[z,h]=(0,o.useState)(!1),[O,A]=(0,p.useRecoilState)(s.n),[m,g]=(0,p.useRecoilState)(a.o),[y,v]=(0,p.useRecoilState)(c.H),q=(0,u.Zp)();return(0,M.jsx)(d.A,{children:(0,M.jsxs)(r.e_,{ref:f,children:[(0,M.jsx)("div",{}),(0,M.jsxs)(r.ix,{children:[(0,M.jsx)(r.Pe,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg",alt:"Tick icon"}),(0,M.jsx)(r.S_,{children:"Draft saved"}),(0,M.jsx)(r.CV,{children:"You can return to it at any time from your listings."})]}),(0,M.jsxs)(r.OM,{children:[(0,M.jsx)(r.LC,{onClick:()=>n(),type:"button",children:"Cancel"}),(0,M.jsx)(i.A,{background:"black",style:{width:"unset"},disabled:z,isLoading:z,onClick:async()=>{h(!0),await(async()=>{O.draftListing&&(O.listingID?await(0,b.p)("post","dev-anystay-listing",`draft/${O.listingID}`,{headers:{Authorization:y,listingID:O.listingID},body:{newListingData:O.draftListing}}).then((e=>{const t={...O.draftListing,id:e.body.updateListing.id};if(m){const e=JSON.parse(JSON.stringify(m));e.ListingModels.items=[...e.ListingModels.items,t],g(e),q(`/your-listings/${m.id}`)}})).catch((e=>console.log(e))):await(0,b.p)("put","dev-anystay-listing","draft",{headers:{Authorization:y},body:{newListingData:O.draftListing}}).then((e=>{const t={...O.draftListing,id:e.body.createListing.id};if(m){const e=JSON.parse(JSON.stringify(m));e.ListingModels.items=[...e.ListingModels.items,t],g(e),q(`/your-listings/${m.id}`)}})).catch((e=>console.log(e))))})(),n()},children:"Exit"})]})]})})}},1743:(e,t,n)=>{"use strict";n.d(t,{A:()=>b});n(5043);var o=n(7950),r=n(2119),i=n(6779),a=n(4936);const s=(0,r.Ay)(i.P.div)`
    height: 48px;
    position: fixed;
    bottom: 24px;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 16px;
    gap: ${a.dB.spacing_250.gap};
    z-index: 102;
    border-radius: ${a.Qk.radius_12.borderRadius};
    box-shadow: ${a.E_.shadow_100.boxShadow};
    background-color: white;

    @media(min-width: 768px){
        bottom: 32px;
    }
`,c=r.Ay.img`
    width: 24px;
    height: 24px;
`,p=r.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    font-style: normal;
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    white-space: nowrap;
`;var l=n(579);const u={initial:{y:"100vh",x:"-50%"},animate:{y:"0",x:"-50%"},exit:{y:"100vh",x:"-50%",transition:{duration:.5}},transition:{ease:"easeOut",duration:.2},key:"copiedToClipboard"},d=()=>(0,l.jsxs)(s,{...u,children:[(0,l.jsx)(c,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg",alt:"Verified contact icon"}),(0,l.jsx)(p,{children:"Copied to clipboard"})]}),b=()=>(0,o.createPortal)((0,l.jsx)(d,{}),document.getElementById("root"))},308:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var o=n(2119);const r=o.i7`
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
`,i=o.Ay.div`
    width: ${e=>e.width?e.width:"32px"};
    height: ${e=>e.height?e.height:" 14px"};
    background:
        radial-gradient(circle closest-side, ${e=>e.color} 90%, #0000) 0% 50%,
        radial-gradient(circle closest-side, ${e=>e.color} 90%, #0000) 50% 50%,
        radial-gradient(circle closest-side, ${e=>e.color} 90%, #0000) 100% 50%;
    background-size: 8px 8px;
    background-repeat: no-repeat;
    animation: ${r} 0.7s infinite linear;
`;var a=n(4936),s=n(579);const c=e=>{let{color:t,height:n,width:o,style:r}=e;const c="white"===t?a.J2.White.color:a.J2.Black.color;return(0,s.jsx)(i,{color:c,height:n,width:o,style:r})}},4175:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var o=n(5043),r=n(2119),i=n(4936);const a=r.Ay.svg`
    enable-background: new 0 0 356 356;
`,s=r.Ay.path`
    stroke-dashoffset: ${e=>e.reverse?"1395.0576171875px":0};
    stroke-dasharray: 1395.0576171875px;
    -webkit-transition: stroke-dashoffset ${e=>e.speedSeconds?`${e.speedSeconds}s`:"1s"} cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
    transition: stroke-dashoffset ${e=>e.speedSeconds?`${e.speedSeconds}s`:"1s"} cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
    fill: none;
    stroke: ${i.J2.Red.color};
    stroke-width: 26;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    ${e=>e.active&&`\n        stroke-dashoffset: ${e.reverse?0:"1395.0576171875px"};\n    `}
    margin-left: auto;
    margin-right: auto;
    width: 840px;
    display: flex;
    flex-direction: column;
`,Io=Lo.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    width: 352px;
    height: 304px;
    padding: ${ko.dB.spacing_500.padding};
    background: ${ko.J2.White.color};
    border-radius: ${ko.Qk.radius_32.borderRadius};
    box-shadow: ${ko.E_.shadow_100.boxShadow};
`,Bo=Lo.Ay.div`
    display: flex;
    justify-content: space-between;
`,Do=Lo.Ay.div`
    display: flex;
    flex-direction: column;
`,$o=Lo.Ay.p`
    font-size: ${ko.$G.sans_400_semi.fontSize};
    line-height: ${ko.$G.sans_400_semi.lineHeight};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};
    margin: 0;
`,jo=Lo.Ay.p`
    font-size: ${ko.$G.sans_300.fontSize};
    line-height: ${ko.$G.sans_300.lineHeight};
    font-weight: ${ko.$G.sans_300.fontWeight};
    color: ${ko.J2.Grey.color};
    margin: 0;
    margin-top: 4px;
`,Xo=Lo.Ay.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 110px;
`,Uo=Lo.Ay.button`
    height: 34px;
    width: 34px;
    border: 1px solid ${ko.J2.Grey1.color};
    background: none;
    border-radius: 50%;
    font-size: ${ko.Ox.sans_button_100.fontSize};
    cursor: pointer;
    font-weight: ${ko.Ox.sans_button_100.fontWeight};
    line-height: ${ko.Ox.sans_button_100.lineHeight};
`,Fo=Lo.Ay.p`
    font-size: ${ko.$G.sans_400.fontSize};
    line-height: ${ko.$G.sans_400.lineHeight};
    font-weight: ${ko.$G.sans_400.fontWeight};
`;var Vo=n(6779);const Ho=function(e){let{activated:t,setAddGuestPopup:n}=e;const[o,r]=(0,p.useRecoilState)(wo.hq),i=(0,To.A)(t,(()=>{n(!1)}),!0),a=[{id:1,name:"Adults",description:"Ages 18+",num:o.adults,setIncrement:()=>{r((e=>({...e,adults:e.adults+1,guests:e.guests+1})))},setDecrement:()=>{o.adults>0&&r((e=>({...e,adults:e.adults-1,guests:e.guests-1})))}},{id:2,name:"Children",description:"Ages 2-17",num:o.children,setIncrement:()=>{r((e=>({...e,children:e.children+1,guests:e.guests+1})))},setDecrement:()=>{o.children>0&&r((e=>({...e,children:e.children-1,guests:e.guests-1})))}},{id:3,name:"Infants",description:"Under 2",num:o.infants,setIncrement:()=>{r((e=>({...e,infants:e.infants+1})))},setDecrement:()=>{o.infants>0&&r((e=>({...e,infants:e.infants-1})))}},{id:4,name:"Pets",description:"Friendly animals",num:o.pets,setIncrement:()=>{r((e=>({...e,pets:e.pets+1})))},setDecrement:()=>{o.pets>0&&r((e=>({...e,pets:e.pets-1})))}}];return(0,yo.jsxs)(Vo.P.div,{initial:!1,animate:{y:t?"0vh":"100vh",opacity:t?1:0,visibility:t?"visible":"hidden",display:t?"block":"none"},transition:{duration:.1,ease:"easeInOut"},style:{position:"fixed",zIndex:"102",left:"0",right:"0",top:"164px"},children:[(0,yo.jsx)(Po,{children:(0,yo.jsx)(Io,{ref:i,children:a.map((e=>(0,yo.jsxs)(Bo,{children:[(0,yo.jsxs)(Do,{children:[(0,yo.jsx)($o,{children:e.name}),(0,yo.jsx)(jo,{children:e.description})]}),(0,yo.jsxs)(Xo,{children:[(0,yo.jsx)(Uo,{onClick:e.setDecrement,children:"-"}),(0,yo.jsx)(Fo,{children:e.num}),(0,yo.jsx)(Uo,{onClick:e.setIncrement,children:"+"})]})]},e.id)))})}),";"]})};var Go=n(7668),Ko=n(4348),Yo=n.n(Ko);function Jo(t){let{activated:n,setAddDatesPopup:o,setAddGuestPopup:r}=t;const i=(0,To.A)(n,(()=>{o(!1)}),!0),a=new Date,s=new Date(a.getTime()-864e5),[c,l]=(0,p.useRecoilState)(wo.IO),[u,d]=(0,e.useState)([new Date(c.startDate||a),new Date(c.endDate||a)]);return(0,yo.jsx)(Vo.P.div,{initial:!1,animate:{y:n?"0vh":"100vh",opacity:n?1:0,visibility:n?"visible":"hidden",display:n?"block":"none"},transition:{duration:.1,ease:"easeInOut"},style:{position:"fixed",zIndex:"102",left:"0",right:"0",top:"164px"},children:(0,yo.jsx)(_o._k,{ref:i,onClick:e=>e.stopPropagation(),children:(0,yo.jsx)(Go.t1,{select:"range",returnFormat:"jsdate",value:u,timezonePlugin:Go.k2,dataTimezone:"Australia/Brisbane",displayTimezone:"Australia/Brisbane",exclusiveEndDates:!1,minRange:2,min:s,pages:"auto",animate:!1,theme:"material",themeVariant:"light",showRangeLabels:!1,showOuterDays:!1,display:"inline",invalid:[s],onChange:e=>{var t,n;e.value&&e.value[0]&&e.value[1]?(t=e.value[0],n=e.value[1],l({...c,startDate:t,endDate:n}),d([new Date(t),new Date(n)]),setTimeout((()=>{o(!1),r(!0)}))):d(e.value)}})})})}Go.k2.moment=Yo();var Qo=n(1995),Zo=n(6138),er=n(9778);const tr=function(t){let{active:n,setNavbarSearchMenuActivated:o,setMobileSearchMenuActivated:r}=t;const[i,s]=(0,e.useState)(!1),[c,l]=(0,e.useState)(!1),[u,d]=(0,e.useState)(!1),[b,M]=(0,e.useState)(!1),f=(0,To.A)(n,(()=>{o(!1)}),!0),z=(0,a.zy)(),h=(0,a.Zp)(),[O,A]=(0,p.useRecoilState)(wo.hq),[m,g]=(0,p.useRecoilState)(wo.IO),[y,v]=(0,e.useState)(m.title?m.title:""),q=(0,e.useRef)(null),_=(0,Zo.A)(),W=(0,er.A)(),w=()=>{let e=O.adults+O.children,t=[];return e&&t.push(`${e} ${e>1?"guests":"guest"}`),O.infants&&t.push(`${O.infants} ${O.infants>1?"infants":"infant"}`),O.pets&&t.push(`${O.pets} ${O.pets>1?"pets":"pet"}`),t.join(", ")};(0,e.useEffect)((()=>{if(document.getElementById("googleAutocompleteInput")){const e=document.getElementById("googleAutocompleteInput");e&&e.setAttribute("autocomplete","off")}}),[]),(0,e.useEffect)((()=>{q.current&&q.current.focus()}),[]),(0,e.useEffect)((()=>{d(!y)}),[y]);const R=_?{initial:{height:0},animate:{height:96},exit:{height:0},transition:{duration:.125,ease:"easeInOut"}}:{};return(0,yo.jsxs)(e.Fragment,{children:[_&&n&&(0,yo.jsx)(Vo.P.div,{style:{height:"100vh",width:"100vw",position:"fixed",left:0,bottom:0,zIndex:10,background:"rgba(0, 0, 0, 0.06)",backdropFilter:"blur(7.5px)"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.125,ease:"easeInOut"}}),(0,yo.jsxs)(_o.hL,{...R,location:z.pathname,children:[(0,yo.jsxs)(_o.Es,{type:"button",onTouchEnd:W?()=>r(!0):void 0,onClick:W?void 0:()=>r(!0),ref:f,children:[(0,yo.jsx)(_o.fT,{children:(0,yo.jsx)(_o.Iz,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Search.svg",style:{margin:0},alt:"Search icon"})}),(0,yo.jsxs)(_o.RC,{children:[(0,yo.jsx)(_o.Qv,{children:m.title?m.title:"Australia"}),(0,yo.jsxs)(_o.VB,{children:[m.startDate&&m.endDate?`${m.startDate.toLocaleDateString("en-AU",{day:"numeric",month:"short"})} - ${m.endDate.toLocaleDateString("en-AU",{day:"numeric",month:"short"})}`:"Anytime",O.adults||O.children?` \u2022 ${w().split(", ")[0]}`:" \u2022 Add guests"]})]})]}),(0,yo.jsxs)(_o.ZE,{ref:f,initial:{y:-50,opacity:0,width:468},animate:{y:0,opacity:1,width:"calc(100% - 64px)"},exit:{y:-50,opacity:0,width:468},transition:{duration:.125,ease:"easeInOut"},children:[(0,yo.jsxs)(_o.oV,{style:{padding:0},initial:{width:80},animate:{width:280},exit:{width:80},transition:{duration:.125,ease:"easeInOut"},children:[(0,yo.jsxs)(_o.TU,{children:[(0,yo.jsx)(_o.Z8,{style:{paddingTop:"13px"},children:"Where"}),(0,yo.jsx)(_o.ZU,{id:"googleAutocompleteInput",apiKey:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",value:y,ref:q,onClick:()=>{y||(d(!0),s(!1),l(!1))},onChange:e=>{v(e.target.value)},onPlaceSelected:e=>{if(e.address_components){const t=e.address_components[0].types.includes("postal_code")?e.address_components[1].long_name:e.address_components[0].long_name;v(t),g((n=>{var o,r;return{...n,placeId:e.place_id,title:t,lat:null===(o=e.geometry.location)||void 0===o?void 0:o.lat(),lng:null===(r=e.geometry.location)||void 0===r?void 0:r.lng()}})),s(!0)}},placeholder:"Search anywhere",options:{types:["(regions)"],componentRestrictions:{country:["au","nz"]}}})]}),(0,yo.jsx)(_o.Vj,{style:{visibility:y?"visible":"hidden"},type:"button",onClick:()=>{s(!1),l(!1),v(""),g({...m,title:null,placeId:"ChIJ38WHZwf9KysRUhNblaFnglM",lat:null,lng:null})},children:(0,yo.jsx)(_o.i3,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg",alt:"Clear address"})})]}),(0,yo.jsx)(_o.Is,{}),(0,yo.jsxs)(_o.tW,{children:[(0,yo.jsxs)(_o.zC,{onClick:()=>{s(!0),l(!1),d(!1)},children:[(0,yo.jsx)(_o.Z8,{children:"When"}),(0,yo.jsx)(_o.l2,{selected:!(!m.startDate||!m.endDate),children:m.startDate&&m.endDate?`${m.startDate.toLocaleDateString("en-AU",{day:"numeric",month:"short"})} - ${m.endDate.toLocaleDateString("en-AU",{day:"numeric",month:"short"})}`:"Add dates"})]}),(0,yo.jsx)(_o.Vj,{style:{visibility:m.startDate||m.endDate?"visible":"hidden"},type:"button",onClick:()=>{s(!1),l(!1),d(!1),g({...m,startDate:null,endDate:null})},children:(0,yo.jsx)(_o.i3,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg",alt:"Clear dates"})})]}),(0,yo.jsx)(_o.Is,{}),(0,yo.jsxs)(_o.db,{fullWidth:O.pets>0&&O.infants>0,children:[(0,yo.jsxs)(_o.v7,{children:[(0,yo.jsx)(_o.Z8,{children:"Who"}),(0,yo.jsx)(_o.V9,{onClick:()=>{l(!0),d(!1),s(!1)},selected:!(!O.adults&&!O.children),children:O.adults||O.children?`${w()}`:"Add guests"})]}),(0,yo.jsx)(_o.Vj,{style:{marginRight:"15px",visibility:O.adults>0||O.children>0?"visible":"hidden"},type:"button",onClick:()=>{s(!1),l(!1),d(!1),A({...O,guests:0,adults:0,children:0,infants:0,pets:0})},children:(0,yo.jsx)(_o.i3,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg",alt:"Clear guests"})})]}),(0,yo.jsxs)(_o.H9,{type:"button",onClick:async()=>{d(!1),s(!1),l(!1);let e=m.title?m.title:"Australia",t=m.startDate?`${String(m.startDate.getDate()).padStart(2,"0")}-${String(m.startDate.getMonth()+1).padStart(2,"0")}-${m.startDate.getFullYear()}`:null,n=m.endDate?`${String(m.endDate.getDate()).padStart(2,"0")}-${String(m.endDate.getMonth()+1).padStart(2,"0")}-${m.endDate.getFullYear()}`:null;const r=JSON.parse(JSON.stringify(O));r.category="all",A(r);const i=["Australia"!==e?`location=${e}`:"","ChIJ38WHZwf9KysRUhNblaFnglM"!==m.placeId?`locationId=${m.placeId}`:"",t?`arrivalDate=${t}`:"",n?`departureDate=${n}`:"",m.lat?`lat=${m.lat}`:"",m.lng?`lng=${m.lng}`:"",(0,Qo.u)(m.searchFilters)>0||m.searchFilters.adults||m.searchFilters.children||m.searchFilters.infants||m.searchFilters.pets?`searchFilters=${JSON.stringify(m.searchFilters)}`:""].filter((e=>""!==e)).join("&");h("/search"+(i?`?${i}`:"")),o(!1)},initial:{width:100},animate:{width:112},exit:{width:100},children:[(0,yo.jsx)(_o._q,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/search-white.svg",alt:"Search icon"}),"Search"]}),u&&_&&(0,yo.jsx)(No,{input:y,setAddAddressPopup:d,setPlace:async e=>{v(e.address_components[0].long_name),g({...m,title:e.address_components[0].long_name,placeId:e.place_id,lat:e.geometry.lat,lng:e.geometry.lng}),s(!0)}}),i&&(0,yo.jsx)(Jo,{activated:i,setAddDatesPopup:s,setAddGuestPopup:l}),c&&(0,yo.jsx)(Ho,{activated:c,setAddGuestPopup:l})]})]},"navbar")]})};var nr=n(9136),or=n(2392),rr=n(4204),ir=n(6250);function ar(e){let{closeNavbarMenu:t,navbarMenu:n,setNavbarMenu:o}=e;const[r,i]=(0,p.useRecoilState)(Wo.e),[a,s]=(0,p.useRecoilState)(So.o),c=(0,p.useRecoilValue)(So.G),[l,u]=(0,p.useRecoilState)(Wo.n),[d,b]=(0,p.useRecoilState)(nr.c6),M=(0,To.A)(n,(()=>{o(!1)}),!0),f=()=>{if(a){const e=a.ListingModels.items.length>0;return(0,yo.jsx)(_o.Vl,{to:e?"/dashboard":"/list-your-place",onClick:async()=>{t()},style:{padding:"13px 20px"},children:e?"Switch to hosting":"Become a host"})}};var z;return r?l?(0,yo.jsxs)(_o.nS,{ref:M,children:[window.innerWidth<600&&(0,yo.jsx)(_o.xO,{style:{margin:0}}),(0,yo.jsxs)(_o.Vl,{to:window.innerWidth<768?`/your-inbox/${r.id}`:r.ConversationModels.items.length>0?`/conversation/${r.ConversationModels.items.at(-1).id}`:"/conversation/null",onClick:()=>{t()},style:{padding:"12px 20px"},children:[(0,yo.jsx)(_o.J7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(guest).svg",alt:"Messages icon"}),"Inbox"]}),(0,yo.jsxs)(_o.Vl,{to:`/your-stays/${null===r||void 0===r?void 0:r.id}`,onClick:()=>{t()},style:{padding:"12px 20px"},children:[(0,yo.jsx)(_o.J7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Stays.svg",alt:"Stays icon"}),"Stays"]}),(0,yo.jsxs)(_o.Vl,{to:`/saved-listings/${null===r||void 0===r?void 0:r.id}`,onClick:()=>{t()},style:{padding:"12px 20px"},children:[(0,yo.jsx)(_o.J7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Heart.svg",alt:"Saved icon"}),"Saved"]}),(0,yo.jsx)(_o.xO,{}),f(),(0,yo.jsx)(_o.mo,{target:window.innerWidth>768?"_blank":"",href:"https://help.anystay.com.au",style:{gap:"12px"},children:"Get support"}),(0,yo.jsx)(_o.Vl,{to:"/settings",onClick:()=>{t()},children:"Profile"}),(0,yo.jsx)(_o.xO,{}),(0,yo.jsxs)(_o.xL,{to:"/referral-page",onClick:()=>{t()},children:[(0,yo.jsxs)(_o.yv,{children:[(0,yo.jsx)(_o.WJ,{children:"Refer a friend"}),(0,yo.jsx)(_o.bm,{children:"Earn 10% off"})]}),(0,yo.jsx)(_o.IS,{})]}),(0,yo.jsx)(_o.Vl,{to:"/",onClick:async()=>{await(0,ir.y)(),t()},children:"Log out"})]}):l?(0,yo.jsx)(yo.Fragment,{}):(0,yo.jsxs)(_o.nS,{ref:M,children:[window.innerWidth<600&&(0,yo.jsx)(_o.xO,{style:{margin:0}}),(0,yo.jsxs)(_o.Vl,{to:window.innerWidth<768?`/your-host-inbox/${null===r||void 0===r?void 0:r.id}`:c&&c.length>0?`/host-conversation/${null===(z=c.at(-1))||void 0===z?void 0:z.id}`:"/host-conversation/null",onClick:()=>{t()},style:{padding:"12px 20px"},children:[(0,yo.jsx)(_o.J7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(host).svg",alt:"Messages icon"}),"Inbox"]}),(0,yo.jsxs)(_o.Vl,{to:"/your-calendar",onClick:()=>{t()},style:{padding:"12px 20px"},children:[(0,yo.jsx)(_o.J7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Calendar.svg",alt:"Messages icon"}),"Calendar"]}),(0,yo.jsxs)(_o.Vl,{to:`/your-listings/${null===a||void 0===a?void 0:a.id}`,onClick:()=>{t()},style:{padding:"12px 20px"},children:[(0,yo.jsx)(_o.J7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Listings.svg",alt:"Messages icon"}),"Listings"]}),(0,yo.jsxs)(_o.Vl,{to:"/payouts",onClick:()=>{t()},style:{padding:"12px 20px"},children:[(0,yo.jsx)(_o.J7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Payouts.svg",alt:"Messages icon"}),"Payouts"]}),(0,yo.jsx)(_o.xO,{}),(0,yo.jsx)(_o.Vl,{to:"/",onClick:async()=>{t()},children:"Switch to staying"}),(0,yo.jsx)(_o.mo,{target:window.innerWidth>768?"_blank":"",href:"https://help.anystay.com.au",style:{gap:"12px"},children:"Get support"}),(0,yo.jsx)(_o.Vl,{to:"/settings",onClick:()=>{t()},children:"Profile"}),(0,yo.jsx)(_o.xO,{style:{marginBottom:"8px"}}),(0,yo.jsxs)(_o.xL,{to:"/referral-page",onClick:()=>{t()},children:[(0,yo.jsxs)(_o.yv,{children:[(0,yo.jsx)(_o.WJ,{children:"Refer a friend"}),(0,yo.jsx)(_o.bm,{children:"Earn 10% off"})]}),(0,yo.jsx)(_o.IS,{})]}),(0,yo.jsx)(_o.Vl,{to:"/",onClick:async()=>{await(0,ir.y)(),t()},style:{padding:"13px 20px"},children:"Log out"})]}):(0,yo.jsxs)(_o.nS,{ref:M,children:[window.innerWidth<600&&(0,yo.jsx)(_o.xO,{style:{margin:0}}),(0,yo.jsx)(_o.UL,{onClick:()=>{b(!0),t()},children:"Sign up"}),(0,yo.jsx)(_o.UL,{onClick:()=>{b(!0),t()},children:"Log in"}),(0,yo.jsx)(_o.xO,{}),(0,yo.jsx)(_o.Vl,{to:"/list-your-place",onClick:()=>{t()},style:{padding:"13px 20px"},children:"Become a host"}),(0,yo.jsx)(_o.mo,{target:window.innerWidth>768?"_blank":"",href:"https://help.anystay.com.au",style:{gap:"12px"},children:"Get support"}),(0,yo.jsx)(_o.xO,{}),(0,yo.jsxs)(_o.xL,{to:"/referral-page",onClick:()=>{t()},children:[(0,yo.jsxs)(_o.yv,{children:[(0,yo.jsx)(_o.WJ,{children:"Refer a friend"}),(0,yo.jsx)(_o.bm,{children:"Earn 10% off"})]}),(0,yo.jsx)(_o.IS,{})]})]})}var sr=n(619),cr=n(8069),pr=n(8411);function lr(t){let{navbarMenu:n,setNavbarMenu:o,setNotificationsPopup:r,setSaveAndExitPopup:i,loggingIn:s,setNavbarSearchMenuActivated:c,notificationsPopup:l}=t;const u=(0,a.Zp)(),d=(0,a.zy)(),[b,M]=(0,p.useRecoilState)(or.n),[f,z]=(0,p.useRecoilState)(Wo.e),[h,O]=(0,p.useRecoilState)(So.o),[A,m]=(0,p.useRecoilState)(Wo.n),[g,y]=(0,p.useRecoilState)(nr.c6),[v,q]=(0,p.useRecoilState)(sr.B),[_,W]=(0,e.useState)(!1),[w,R]=(0,e.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"),[S,x]=(0,e.useState)(!0),E=async()=>{h?(W(!0),u(`/create-listing/${h&&h.id}`)):(y(!0),q("create-listing"))};(0,e.useEffect)((()=>{const e=()=>{window.scrollY>333?x(!1):x(!0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,e.useEffect)((()=>{if(f&&f.profilePicture){const e=(0,cr.A)(f.profilePicture,f.identityID,100);R(e)}else R("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png")}),[f]);return d.pathname.includes("/booking-request")?null:d.pathname.includes("/create-listing")?(0,yo.jsx)(yo.Fragment,{children:b.draftListing?(0,yo.jsx)(_o.BG,{type:"button",onClick:()=>i(!0),children:(window.innerWidth,"Exit")}):(0,yo.jsx)(_o.BG,{type:"button",onClick:()=>u(h?`/your-listings/${h.id}`:"/your-listings"),children:"Exit"})}):d.pathname.includes("/list-your-place")&&window.innerWidth>=768?S?null:(0,yo.jsxs)(rr.A,{isLoading:_,background:"black",disabled:_,style:{width:"unset",padding:"0 24px 0 20px",marginTop:"0",height:"48px",fontSize:"16px",borderRadius:"90px"},continueType:"button",onClick:E,children:[(0,yo.jsxs)(_o.GK,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,yo.jsx)("rect",{x:"10.5",width:"3",height:"24",rx:"1.5",fill:ko.J2.White.color}),(0,yo.jsx)("rect",{y:"13.5",width:"3",height:"24",rx:"1.5",transform:"rotate(-90 0 13.5)",fill:ko.J2.White.color})]}),"Create a listing"]}):(0,yo.jsxs)(_o.xp,{location:d.pathname,children:[f&&!A?(0,yo.jsx)(_o.Se,{onClick:()=>{u("/")},children:"Switch to staying"}):h&&h.ListingModels.items.length>0?(0,yo.jsx)(_o.Se,{onClick:()=>{c(!1),o(!1),u("/dashboard")},children:"Switch to hosting"}):(0,yo.jsx)(_o.Se,{onClick:e=>{e.stopPropagation(),c(!1),o(!1),u("/list-your-place")},children:"Create a listing"}),(0,yo.jsx)(_o.Of,{children:(0,yo.jsx)(_o.wl,{onClick:()=>{c(!1),o(!1),f?r(!0):y(!0)},src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Notifications+icon.png",alt:"Any stay nofications"})}),window.innerWidth>=768&&(0,yo.jsxs)(_o.jL,{children:[(0,yo.jsx)(_o.xg,{src:w,alt:"profile picture",onClick:()=>{r(!1),c(!1),o(!0)}}),n&&(0,yo.jsx)(ar,{closeNavbarMenu:()=>o(!1),navbarMenu:n,setNavbarMenu:o}),l&&(0,yo.jsx)(pr.A,{notificationsPopup:l,closeNotificationDropDown:()=>r(!1),setNotificationsPopup:r})]})]})}var ur=n(8893),dr=n(3546);function br(t){let{showFullPageLoading:n,loggingIn:o}=t;const r=(0,a.zy)(),[i,s]=(0,p.useRecoilState)(Wo.e),[c,l]=(0,p.useRecoilState)(Wo.n),[u,d]=(0,p.useRecoilState)(nr.C1),[b,M]=(0,p.useRecoilState)(nr.w8),[f,z]=(0,e.useState)(!1),[h,O]=(0,e.useState)(!1),[A,m]=(0,e.useState)(!1),g=(0,Zo.A)(),y=()=>g||f||u?!(!g||!b||f):"/"===r.pathname||r.pathname.includes("/search");return(0,e.useEffect)((()=>{u?(document.body.style.overflow="hidden",document.body.style.position="relative",document.body.style.height="100vh",document.documentElement.style.overflow="hidden"):(document.body.style.overflow="auto",document.body.style.position="unset",document.body.style.height="unset",document.documentElement.style.overflow="unset")}),[u,f]),(0,yo.jsxs)(_o.qr,{location:r.pathname,navbarMenu:f,children:[(0,yo.jsxs)(_o.Fp,{location:r.pathname,navbarMenu:f,children:[(0,yo.jsx)(Ro,{setNavbarMenu:z,setNavbarSearchMenuActivated:M}),i&&!c?(0,yo.jsx)(xo,{}):(0,yo.jsx)(Eo,{setNavbarSearchMenuActivated:M,navbarpopdownActive:y(),setNavbarMenu:z}),(0,yo.jsx)(lr,{navbarMenu:f,setNavbarMenu:z,setNotificationsPopup:m,notificationsPopup:A,setSaveAndExitPopup:O,loggingIn:o,setNavbarSearchMenuActivated:M})]}),h&&(0,yo.jsx)(ur.A,{closeSaveAndExitPopup:()=>O(!1),activated:h}),(0,yo.jsx)(dr.N,{children:y()&&(0,yo.jsx)(tr,{setNavbarSearchMenuActivated:M,setMobileSearchMenuActivated:d,active:y()})})]})}var Mr=n(4175);const fr=Lo.Ay.div`
    width: 100%;
`,zr=Lo.Ay.div`
    position: fixed;
    z-index: 102;
    left: 0;
    bottom: 0;
    height: ${e=>"PhonePopup"===e.pageName||"PasswordPopup"===e.pageName||"NewPasswordPopup"===e.pageName?"fit-content":"calc(100% - 12px)"};
    width: 100%;
    background: ${ko.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${ko.E_.shadow_300.boxShadow};
    overflow: scroll;
    padding: ${ko.dB.spacing_400.padding} ${ko.dB.spacing_400.padding} ${ko.dB.spacing_300.padding} ${ko.dB.spacing_400.padding};

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 560px;
        max-height: calc(100vh - 120px);
        border-radius: 14px;
        padding: ${e=>"AddProfilePhotoPopup"===e.pageName?"24px 24px 16px 24px":"24px"};
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: ${e=>"WelcomePopup"===e.pageName||"AddProfilePhotoPopup"===e.pageName?"600px":"fit-content"};
    }
`,hr=(Lo.Ay.div`
    position: fixed;
    padding: ${ko.dB.spacing_400.padding} ${ko.dB.spacing_400.padding} ${ko.dB.spacing_300.padding} ${ko.dB.spacing_400.padding};
    z-index: 102;
    left: 0;
    bottom: 0;
    width: 100%;
    max-height: calc(100vh - 120px);
    background: ${ko.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${ko.E_.shadow_300.boxShadow};
    overflow: scroll;
    height: fit-content;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 560px;
        border-radius: 14px;
        padding: ${ko.dB.spacing_400.padding};
        margin: auto;
        left: 0;
        right: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`,Lo.Ay.p`
    position: absolute;
    font-size: ${ko.$G.sans_400_semi.fontSize};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};
    line-height: ${ko.$G.sans_300_semi.lineHeight};
    justify-self: center;
    margin: 0;
`,Lo.Ay.button`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 12px;
    left: 12px;
    width: 40px;
    height: 40px;
    border-radius: ${ko.Qk.radius_100.borderRadius};

    &:hover {
        background-color: ${ko.J2.Grey5.color};
    }
`,Lo.Ay.button`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 12px;
    left: 12px;
    width: 40px;
    height: 40px;
    border-radius: ${ko.Qk.radius_100.borderRadius};
`,Lo.Ay.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
    margin: ${ko.dB.spacing_250.margin};
`,Lo.Ay.div`
    width: 100%;
    flex: 1;
    margin: 0;
`),Or=Lo.Ay.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: ${ko.dB.spacing_400.margin} auto ${ko.dB.spacing_500.margin};
`,Ar=Lo.Ay.img`
    width: 34px;
    height: 34px;
    margin: 0;

    @media (min-width: 768px) {
        width: 45px;
        height: 45px;
    }
`,mr=Lo.Ay.p`
    font-size: ${ko.$G.sans_900_semi.fontSize};
    line-height: ${ko.$G.sans_900_semi.lineHeight};
    font-weight: ${ko.$G.sans_900_semi.fontWeight};
`,gr=Lo.Ay.p`
    font-size: ${ko.$G.sans_400.fontSize};
    line-height: ${ko.$G.sans_400.lineHeight};
    font-weight: ${ko.$G.sans_400.fontWeight};
    color: ${ko.J2.Red1.color};
    margin-top: 16px;
`,yr=Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
`,vr=Lo.Ay.input`
    min-height: 54px;
    width: calc(100% - 16px);
    margin: ${ko.dB.spacing_400.margin} 0;
    padding: 0 16px;
    border: 1px solid ${e=>e.invalid?ko.J2.Red1.color:ko.J2.Grey1.color};
    border-radius: 9px;
    outline: none;
    font-size: ${ko.$G.sans_400.fontSize};

    &:focus {
    }

    @media (min-width: 768px) {
        margin-bottom: 32px;
    }
`,qr=Lo.Ay.p`
    font-size: ${ko.$G.sans_200.fontSize};
    font-weight: ${ko.$G.sans_200.fontWeight};
    line-height: ${ko.$G.sans_200.lineHeight};
    margin: ${ko.dB.spacing_250.margin} 0 ${ko.dB.spacing_300.margin};

    a {
        font-weight: ${ko.$G.sans_200_semi.fontWeight};
        text-decoration: underline;
        border: none;
        background: none;
    }

    @media (min-width: 768px) {
        width: 400px;
        height: 32px;
    }
`,_r=Lo.Ay.input`
    min-height: 50px;
    width: 100%;
    margin: ${ko.dB.spacing_250.margin} 0 ${ko.dB.spacing_400.margin};
    padding: 0;
    padding-left: 16px;
    border: ${e=>e.invalid?`1px solid ${ko.J2.Red1.color}`:`1px solid ${ko.J2.Grey1.color}`};
    border-radius: 9px;
    outline: none;
    font-size: ${ko.$G.sans_400.fontSize};
    line-height: ${ko.$G.sans_400.lineHeight};
    font-weight: ${ko.$G.sans_400.fontWeight};

    &:focus {
    }

    @media (min-width: 768px) {
        height: 54px;
        margin-top: 12px;
    }
`,Wr=Lo.Ay.input`
    min-height: 50px;
    width: 100%;
    margin: ${ko.dB.spacing_250.margin} 0 ${ko.dB.spacing_400.margin};
    padding: 0;
    padding-left: 16px;
    border: ${e=>e.invalid?`1px solid ${ko.J2.Red1.color}`:`1px solid ${ko.J2.Grey1.color}`};
    border-radius: 9px;
    outline: none;
    font-size: ${ko.$G.sans_400.fontSize};
    line-height: ${ko.$G.sans_400.lineHeight};
    font-weight: ${ko.$G.sans_400.fontWeight};

    &:focus {
        /* box-shadow: 0 0 3px ${ko.J2.Red.color}; */
    }

    @media (min-width: 768px) {
        height: 54px;
        margin-top: 12px;
    }
`,wr=Lo.Ay.label`
    margin: 0;
    font-size: ${ko.$G.sans_400_semi.fontSize};
    line-height: ${ko.$G.sans_400_semi.lineHeight};
    width: 100%;
    font-weight: ${ko.$G.sans_300_semi.fontWeight};
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: ${ko.$G.sans_300.fontSize};
        line-height: ${ko.$G.sans_300.lineHeight};
        font-weight: ${ko.$G.sans_300.fontWeight};
        color: ${ko.J2.Red1.color};
        display: ${e=>e.invalid?"block":"none"};
    }
`,Rr=Lo.Ay.p`
    width: 196px;
    height: 40px;
    font-size: ${ko.$G.sans_300.fontSize};
    font-style: normal;
    font-weight: ${ko.$G.sans_300.fontWeight};
    line-height: ${ko.$G.sans_300.lineHeight};
    text-align: center;
    margin-top: 12px;
    margin-bottom: 32px;
`,Sr=Lo.Ay.p`
    font-size: ${ko.$G.sans_500_semi.fontSize};
    font-style: normal;
    font-weight: ${ko.$G.sans_500_semi.fontWeight};
    line-height: ${ko.$G.sans_500_semi.lineHeight};
    width: 272px;
    text-align: center;
    margin: 0;
`,xr=Lo.Ay.button`
    height: 48px;
    border-radius: 9px;
    width: 100%;
    background: ${ko.J2.Red.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${ko.Ox.sans_button_100.fontSize};
    font-weight: ${ko.Ox.sans_button_100.fontWeight};
    color: ${ko.J2.White.color};
    margin-top: auto;
    line-height: ${ko.Ox.sans_button_100.lineHeight};
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ko.Ox.sans_button_200.fontSize};
        line-height: ${ko.Ox.sans_button_200.lineHeight};
    }
`,Er=(Lo.Ay.p`
    margin: 0;
    font-size: ${ko.$G.sans_300.fontSize};
    margin-bottom: 20px;
    font-weight: ${ko.$G.sans_300.fontWeight};
    text-decoration: ${e=>e.resendReady?"underline":"none"};
    cursor: pointer;
`,Lo.Ay.button`
    font-size: ${ko.Ox.sans_button_200.fontSize};
    line-height: ${ko.Ox.sans_button_200.lineHeight};
    font-weight: ${ko.Ox.sans_button_200.fontWeight};
    background: none;
    border: none;
    margin-bottom: 96px;
    padding: 0;
    align-self: flex-start;
    text-decoration: underline;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ko.$G.sans_400_semi.fontSize};
        line-height: ${ko.$G.sans_400_semi.lineHeight};
    }
`),Tr=(Lo.Ay.div`
    width: 100%;
`,Lo.Ay.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;

    .verification-code-input input {
        font-size: ${ko.$G.sans_400.fontSize} !important;
    }
`,Lo.Ay.div`
    text-decoration: underline;
    color: ${ko.J2.Black.color};
    font-size: ${ko.$G.sans_400_semi.fontSize};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};
    cursor: pointer;
`),Cr=(Lo.Ay.button`
    min-height: 48px;
    border-radius: 9px;
    width: 100%;
    background: ${ko.J2.Red.color};
    position: relative;
    display: flex;
    justify-content: center;
    justify-self: flex-end;
    align-items: center;
    border: none;
    font-size: ${ko.Ox.sans_button_100.fontSize};
    font-weight: ${ko.Ox.sans_button_100.fontWeight};
    color: ${ko.J2.White.color};
    line-height: ${ko.Ox.sans_button_100.lineHeight};
    margin-bottom: 48px;
    margin-top: auto;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ko.Ox.sans_button_200.fontSize};
        line-height: ${ko.Ox.sans_button_200.lineHeight};
    }
`,Lo.Ay.button`
    background: none;
    position: relative;
    display: flex;
    text-decoration: underline;
    border: none;
    font-size: ${ko.Ox.sans_button_200.fontSize};
    line-height: ${ko.Ox.sans_button_200.lineHeight};
    font-weight: ${ko.Ox.sans_button_200.fontWeight};
    cursor: pointer;
    margin: ${ko.dB.spacing_300.margin} auto 0;
`),Nr=(Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,Lo.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`),Lr=Lo.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`,kr=Lo.Ay.div`
    width: calc(100% - 16px);
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${ko.dB.spacing_300.gap};
    align-self: flex-start;
`,Pr=Lo.Ay.div`
    width: 100%;
    display: flex;
    align-self: flex-start;
    gap: ${ko.dB.spacing_250.gap};
`,Ir=Lo.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Br=(Lo.Ay.p`
    width: 100%;
    text-align: center;
    font-size: ${ko.$G.sans_400_semi.fontSize};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};
    line-height: ${ko.$G.sans_400_semi.lineHeight};
    margin-top: 48px;
    margin-bottom: 24px;
`,Lo.Ay.button`
    height: 48px;
    border-radius: 9px;
    border: 1px solid ${ko.J2.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    font-size: ${ko.Ox.sans_button_100.fontSize};
    cursor: pointer;
    font-weight: ${ko.Ox.sans_button_100.fontWeight};
    line-height: ${ko.Ox.sans_button_100.lineHeight};

    @media (min-width: 768px) {
        font-size: ${ko.Ox.sans_button_200.fontSize};
        line-height: ${ko.Ox.sans_button_200.lineHeight};
    }
`,Lo.Ay.p`
    width: 100%;
    text-align: center;
    font-size: ${ko.$G.sans_900_bold.fontSize};
    font-weight: ${ko.$G.sans_900_bold.fontWeight};
    line-height: ${ko.$G.sans_900_bold.lineHeight};
    margin-top: 0px;
    margin-bottom: 12px;
    max-width: 320px;

    @media (min-width: 768px) {
        font-size: ${ko.$G.sans_1000_bold.fontSize};
        line-height: ${ko.$G.sans_1000_bold.lineHeight};
    }
`),Dr=Lo.Ay.p`
    position: relative;
    max-width: 270px;
    width: 100%;
    text-align: center;
    font-size: ${ko.$G.sans_400.fontSize};
    font-weight: ${ko.$G.sans_400.fontWeight};
    line-height: ${ko.$G.sans_400.lineHeight};
    margin: 0 auto;
    margin-bottom: 84px;
`,$r=Lo.Ay.div`
    width: 128px;
    height: 128px;
    margin-top: 96px;
    margin-bottom: 32px;
`,jr=Lo.Ay.div`
    width: 100%;
    margin-top: auto;
`,Xr=Lo.Ay.button`
    width: 100%;
    background: none;
    border-radius: 9px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    font-size: ${ko.Ox.sans_button_200.fontSize};
    font-weight: ${ko.Ox.sans_button_200.fontWeight};
    line-height: ${ko.Ox.sans_button_200.lineHeight};
    color: ${ko.J2.White.color};
    background: ${ko.J2.Black.color};
    cursor: pointer;
    margin-top: 24px;
`,Ur=Lo.Ay.div`
    input {
        outline: none;
        border: none;
    }
`,Fr=Lo.Ay.img`
    width: 128px;
    height: 128px;
    object-fit: cover;
    border-radius: 50%;
`,Vr=Lo.Ay.p`
    text-align: center;
    width: 100%;
    margin-bottom: 42px;
    font-size: ${ko.$G.sans_700_semi.fontSize};
    font-weight: ${ko.$G.sans_700_semi.fontWeight};
    line-height: ${ko.$G.sans_700_semi.lineHeight};
    margin-top: 32px;

    span {
        cursor: pointer;
        color: ${ko.J2.Black.color} !important;
    }
`,Hr=Lo.Ay.p`
    font-size: ${ko.$G.sans_300.fontSize};
    font-weight: ${ko.$G.sans_300.fontWeight};
    line-height: ${ko.$G.sans_300.lineHeight};
    margin-top: auto;
    margin-bottom: 16px;
    color: ${ko.J2.Red1.color};
    opacity: ${e=>e.mfaInvalid?1:0};
`,Gr=Lo.Ay.p`
    margin-top: 12px;
    margin-bottom: 0px;
    font-size: ${ko.$G.sans_200.fontSize};
    text-align: left;
    font-weight: ${ko.$G.sans_200.fontWeight};
    color: ${e=>e.invalid?ko.J2.Red1.color:ko.J2.Black.color};
    line-height: ${ko.$G.sans_200.lineHeight};
    max-width: 360px;
`,Kr=Lo.Ay.button`
    height: 48px;
    width: 236px;
    background: ${ko.J2.White.color};
    display: flex;
    align-items: center;
    border: none;
    border-radius: ${ko.Qk.radius_100.borderRadius};
    cursor: pointer;
    margin: ${ko.dB.spacing_500.margin} auto ${ko.dB.spacing_200.margin};
    box-shadow: ${ko.E_.shadow_100.boxShadow};
`,Yr=Lo.Ay.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
    margin-left: auto;
`,Jr=Lo.Ay.p`
    font-size: ${ko.Ox.sans_button_200.fontSize};
    font-weight: ${ko.Ox.sans_button_200.fontWeight};
    line-height: ${ko.Ox.sans_button_200.lineHeight};
    justify-self: center;
    text-align: center;
    margin-left: 12px;
    margin-right: auto;
`,Qr=Lo.Ay.p`
    font-size: ${ko.$G.sans_300.fontSize};
    font-weight: ${ko.$G.sans_300.fontWeight};
    line-height: ${ko.$G.sans_300.lineHeight};
    color: ${ko.J2.Red1.color};
    margin: 0;
    display: ${e=>e.invalid?"block":"none"};
`,Zr=(Lo.Ay.p`
    margin-top: 32px;
    font-size: ${ko.$G.sans_600_bold.fontSize};
    line-height: ${ko.$G.sans_600_bold.lineHeight};
    font-weight: ${ko.$G.sans_600_bold.fontWeight};
    margin-bottom: 24px;
`,Lo.Ay.p`
    margin: 0;
    font-size: ${ko.$G.sans_300.fontSize};
    line-height: ${ko.$G.sans_300.lineHeight};
    max-width: 270px;
    font-weight: ${ko.$G.sans_300.fontWeight};
`,Lo.Ay.div`
    margin-top: 44px;
    margin-left: auto;
    margin-right: auto;
    & .verification-container {
        ${e=>e.mfaInvalid?`border: 1px solid ${ko.J2.Red1.color};`:null}
    }
`),ei=(Lo.Ay.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    margin: 0 auto;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${ko.J2.Grey1.color};
    font-size: ${ko.Ox.sans_button_100.fontSize};
    font-weight: ${ko.Ox.sans_button_100.fontWeight};
    line-height: ${ko.Ox.sans_button_100.lineHeight};
    text-decoration: none;
    background: none;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${ko.Ox.sans_button_200.fontSize};
        line-height: ${ko.Ox.sans_button_200.lineHeight};
        margin-top: auto;
        margin-bottom: 20px;
    }
`,Lo.Ay.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    margin: 0 auto;
    margin-top: auto;
    display: flex;
    align-items: center;
    background: ${ko.J2.Black.color};
    justify-content: center;
    border: none;
    font-size: ${ko.Ox.sans_button_200.fontSize};
    font-weight: ${ko.Ox.sans_button_200.fontWeight};
    line-height: ${ko.Ox.sans_button_200.lineHeight};
    color: ${ko.J2.White.color};
    text-decoration: none;
    cursor: pointer;
`),ti=(Lo.Ay.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    .mbsc-textfield-wrapper {
        display: none;
    }
`,Lo.Ay.a`
    font-size: ${ko.$G.sans_400.fontSize};
    font-weight: ${ko.$G.sans_400.fontWeight};
    line-height: ${ko.$G.sans_400.lineHeight};
    margin: 0;
    text-decoration: underline;
`,Lo.Ay.p`
    font-size: ${ko.$G.sans_800_bold.fontSize};
    line-height: ${ko.$G.sans_800_bold.lineHeight};
    font-weight: ${ko.$G.sans_800_bold.fontWeight};
    margin-top: 32px;
    margin-bottom: 24px;
`);Lo.Ay.p`
    margin: 0;
    font-size: ${ko.$G.sans_300.fontSize};
    max-width: 270px;
    font-weight: ${ko.$G.sans_300.fontWeight};
`;var ni=n(4886),oi=n(7426),ri=n(7445),ii=n(1121),ai=n(5370);const si=(0,p.atom)({key:"googleLoginErrState",default:void 0}),ci=(0,p.selector)({key:"googleLoginErrStateSelector",get:e=>{let{get:t}=e;return t(si)},set:(e,t)=>{let{set:n}=e;if(!(t instanceof p.DefaultValue))return n(si,t)}}),pi=t=>{let{setUsername:n,setPageName:o,setPhoneNumFromPhonePopup:r,handleKeyboardDismiss:i}=t;const[a,s]=(0,e.useState)(""),[c,l]=(0,e.useState)(!1),[u,d]=(0,e.useState)(!1),[b]=(0,ai.lT)(["referralCode"]),M=(0,e.useRef)(""),[f,z]=(0,p.useRecoilState)(ci),h=async()=>{z(""),new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/).test(a)?(d(!0),l(!1),r(a),await(0,oi.p)("post","dev-anystay-auth","user/exists",{body:{emailLogin:!1,username:a}}).then((async e=>{d(!1),"User already exists"===e.message?(n(e.username),o("PasswordPopup")):"User already exists but not attributes are verified"===e.message?o("SignInVerificationPopup"):"There are no users with that username"===e.message?o("SignUpFormPopup"):"The user signed up with google, you must sign in with email or google"===e.message?(l(!0),M.current="The user signed up with google, you must sign in with google"):console.log("signin not working")})).catch((e=>{d(!1),console.log(e)}))):l(!0)};return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},initial:{x:400},children:(0,yo.jsxs)(yr,{children:[(0,yo.jsxs)(Or,{children:[(0,yo.jsx)(mr,{children:"Sign up or log in"}),(0,yo.jsx)(mr,{children:"to continue exploring"})]}),(0,yo.jsx)(Ur,{children:(0,yo.jsx)(ni.Ay,{placeholder:"(000) 0000 0000",value:a,defaultCountry:"AU",style:{height:"54px",marginBottom:"16px",borderRadius:"10px",border:`1px solid ${c?ko.J2.Red1.color:ko.J2.Grey1.color}`,paddingLeft:"16px",paddingRight:"16px"},onChange:async e=>{l(!1),s(e)},onKeyDown:async e=>"Enter"===e.key?await h():null,onBlur:i})}),(0,yo.jsx)(rr.A,{style:{marginTop:"0px"},background:"black",isLoading:u,disabled:u,continueType:"submit",onClick:async()=>await h().catch((e=>console.log(e))),children:"Continue"}),(0,yo.jsx)(Gr,{invalid:c,children:c?M.current?M.current:"Invalid phone number, try again!":"We\u2019ll text you to confirm your number, standard rates apply."}),(0,yo.jsxs)(Kr,{onClick:()=>{const e={redirectURL:window.location.pathname+window.location.search,referralCode:b.referralCode,platform:"Google"};ri.N.federatedSignIn({provider:ii.CognitoHostedUIIdentityProvider.Google,customState:JSON.stringify(e)})},children:[(0,yo.jsx)(Yr,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Google.svg",alt:"Google icon"}),(0,yo.jsx)(Jr,{children:"Continue with google"})]})]})})};var li=n(9082);const ui=async e=>{if(e){const t=await(0,oi.p)("post","dev-anystay-user","user/identityid",{headers:{Authorization:e}});console.log(t)}};var di=n(470),bi=n(2877),Mi=n(7879),fi=n(5328),zi=n(2493),hi=n(4922);const Oi=async e=>{const t=await ri.N.currentSession(),n=t.getAccessToken().getJwtToken();let o=await(0,oi.p)("get","dev-anystay-user","user",{headers:{Authorization:n}}),r=o.body.userModel,i=o.body.userHostModel,a=o.body.stripeCustomerAccount,s=o.body.stripeAccount;if((0,l.hk)(go.L,!0),(0,l.hk)(di.D,JSON.parse(JSON.stringify(e))),(0,l.hk)(bi.M,r),(0,l.hk)(Mi.U,i),(0,l.hk)(fi.J,a),(0,l.hk)(zi._,s),(0,l.hk)(hi.z,n),((e,t)=>{mo.init("99fff4de5dfbfde32b38acb7924595b1"),mo.identify(e.id),mo.people.set({$ip:t})})(r,o.body.ip),(e=>{window.Intercom("boot",{api_base:"https://api-iam.intercom.io",app_id:"njsfur2t",email:`${e.email}`,guest_mode:e.guestMode})})(r),null===r.identityID){const e=t.getIdToken().getJwtToken();ui(e)}return{userHostModel:i,userModel:r}},Ai=t=>{let{phoneNumFromPhonePopup:n,setLoggingIn:o,username:r,setPageName:i,setCodeDeliveryDetails:s,setMfaInvalid:c,signInPasswordInvalid:l,setSignInPasswordInvalid:u,handleKeyboardDismiss:d,isGoogleAccountExist:b}=t;const[M,f]=(0,e.useState)(!1),[z,h]=(0,e.useState)(!1),[O,A]=(0,e.useState)(!1),[m,g]=(0,p.useRecoilState)(Wo.e),[y,v]=(0,p.useRecoilState)(li.H),[q,_]=(0,p.useRecoilState)(nr.c6),[W,w]=(0,e.useState)(""),[R,S]=(0,p.useRecoilState)(sr.B),[x,E]=(0,p.useRecoilState)(ci),[T,C]=(0,e.useState)(!1),[N,L]=(0,e.useState)(!1),k=(0,a.Zp)(),P=async e=>{try{e?(C(!1),o(!0),L(!0),await ri.N.signIn(r,e).then((async e=>{if("NEW_PASSWORD_REQUIRED"===e.challengeName)console.log("TRIGGERED"),A(e),f(!0),w(""),u(!1),o(!1),L(!1);else{const{userHostModel:t}=await Oi(e);"create-listing"===R&&t&&(k(`/create-listing/${t.id}`),S("")),u(!1),o(!1),E(""),_(!1)}})).catch((async e=>{console.log(e),o(!1),L(!1),"NotAuthorizedException"===e.code?"User is disabled."===e.message&&i("AccountDeactivatedPopup"):"UserNotConfirmedException"===e.code&&(s({Destination:n}),i("SignUpVerificationPopup"),await ri.N.resendSignUp(r).then((e=>{s(e.CodeDeliveryDetails)})).catch((e=>{"CodeMismatchException"===e.code?c(!0):"LimitExceededException"===e.code&&h(!0)}))),u(!0)}))):(C(!0),L(!1),console.log("password cannot be empty"))}catch(t){console.log(t)}};return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},initial:{x:400},children:(0,yo.jsxs)(yr,{children:[(0,yo.jsx)(Or,{children:M?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(mr,{children:"Create a new"}),(0,yo.jsx)(mr,{children:"permanent password"})]}):(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(mr,{children:"Log in to Anystay"}),(0,yo.jsx)(mr,{children:"with your password"}),b&&(0,yo.jsx)(gr,{children:"Account already exists, please enter your password to login"})]})}),(0,yo.jsx)(vr,{value:W,onChange:e=>w(e.target.value),invalid:l||T,style:{width:"100%",margin:"0",fontSize:"16px"},placeholder:"Password",type:"password",name:"password",onKeyDown:async e=>"Enter"===e.key?await P(W):null,onBlur:d}),(0,yo.jsxs)("div",{style:{display:"flex",gap:"8px",width:"100%",justifyContent:"space-between",marginTop:"16px"},children:[(0,yo.jsx)(Er,{onClick:()=>{i("NewPasswordPopup"),u(!1)},type:"button",children:"Forgot password?"}),(0,yo.jsx)(Qr,{invalid:l||z||T,children:z?"You exceeded your reset attempts, please try again later":l?"Invalid password":T?"Password cannot be empty":""})]}),(0,yo.jsx)(rr.A,{style:{position:"relative"},continueType:"button",isLoading:N,disabled:N,onClick:()=>{M?(async e=>{try{await ri.N.completeNewPassword(O,e,{}).then((async e=>{const{userHostModel:t}=await Oi(e);"create-listing"===R&&t&&(k(`/create-listing/${t.id}`),S("")),u(!1),o(!1),E(""),_(!1)})).catch((async e=>{console.log("DID NOT WORK"),console.log(e),o(!1),L(!1),"NotAuthorizedException"===e.code?"User is disabled."===e.message&&i("AccountDeactivatedPopup"):"UserNotConfirmedException"===e.code&&(s({Destination:n}),i("SignUpVerificationPopup"),await ri.N.resendSignUp(r).then((e=>{s(e.CodeDeliveryDetails)})).catch((e=>{"CodeMismatchException"===e.code?c(!0):"LimitExceededException"===e.code&&h(!0)}))),u(!0)}))}catch(t){console.log(t)}})(W):P(W)},background:"black",children:"Continue"})]})})},mi=t=>{let{setPageName:n,setNewPassword:o,newPassword:r,handleKeyboardDismiss:i}=t;const[a,s]=(0,e.useState)(!1),[c,p]=(0,e.useState)(!1),l=()=>{r&&r.length>=8&&""!==r?(p(!0),n("SignInVerificationPopup"),p(!1)):(p(!0),s(!0),p(!1))};return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},initial:{x:400},children:(0,yo.jsxs)(yr,{style:{height:"100%"},children:[(0,yo.jsxs)(Or,{style:{marginBottom:"0"},children:[(0,yo.jsx)(Sr,{children:"Create a password"}),(0,yo.jsx)(Rr,{children:"Never share your password with anyone."})]}),(0,yo.jsx)(vr,{style:{width:"100%",margin:"0",marginBottom:"12px"},placeholder:"New password",type:"password",value:r,onChange:async e=>{o(e.target.value),s(!1)},name:"password",onKeyDown:e=>"Enter"===e.key?l():null,onBlur:i}),(0,yo.jsx)(Hr,{mfaInvalid:a,children:"You must enter a valid password"}),(0,yo.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"72px",alignItems:"center"},children:[(0,yo.jsx)(Tr,{onClick:()=>n("PasswordPopup"),children:"Cancel"}),(0,yo.jsx)(rr.A,{background:"black",style:{position:"relative",width:"unset"},isLoading:c,continueType:"button",onClick:l,disabled:c,children:"Reset"})]})]})})};function gi(){const[e,t]=(0,p.useRecoilState)(nr.c6);return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},style:{height:"100%"},initial:{x:400},children:(0,yo.jsxs)(yr,{style:{height:"100%"},children:[(0,yo.jsxs)(Or,{children:[(0,yo.jsx)(Ar,{src:"https://d292awxalydr86.cloudfront.net/Branding/Ellipse+79.png",alt:"Anystay logo"}),(0,yo.jsx)(mr,{children:"Account deactivated."})]}),(0,yo.jsxs)(Vr,{style:{marginTop:"8px",marginBottom:"311px"},children:["Your account is currently deactivated.",(0,yo.jsx)("br",{}),(0,yo.jsx)("a",{style:{textDecoration:"underline",color:ko.J2.Black.color,marginTop:"8px"},href:"https://help.anystay.com.au",children:"Get support"})]}),(0,yo.jsx)(xr,{type:"button",onClick:()=>{t(!1)},children:"Continue"})]})})}const yi=()=>{const[e,t]=(0,p.useRecoilState)(nr.c6);return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},style:{height:"100%"},initial:{x:400},children:(0,yo.jsxs)(yr,{style:{height:"100%"},children:[(0,yo.jsxs)(Or,{children:[(0,yo.jsx)(Ar,{src:"https://d292awxalydr86.cloudfront.net/Branding/Ellipse+79.png",alt:"Anystay logo"}),(0,yo.jsx)(mr,{children:"Account suspended."})]}),(0,yo.jsxs)(Vr,{style:{marginTop:"8px",marginBottom:"331px"},children:["Your account is currently suspended.",(0,yo.jsx)("br",{}),(0,yo.jsx)("a",{style:{textDecoration:"underline",color:ko.J2.Black.color,marginTop:"8px"},href:"https://help.anystay.com.au",children:"Get support"})]}),(0,yo.jsx)(xr,{type:"button",onClick:()=>{t(!1)},children:"Continue"})]})})},vi=(0,p.atom)({key:"ipState",default:{ip:null,geoData:null,ipBlocked:!1,ipBlockedWarning:!1}}),qi=async()=>{await(0,oi.p)("get","dev-anystay-auth","user/ip",{headers:{}}).then((e=>{(0,l.hk)(vi,{ip:e.sourceIp,geoData:e.geoData,ipBlocked:!1,ipBlockedWarning:!1})})).catch((e=>{(0,l.hk)(vi,{ip:null,geoData:null,ipBlocked:!0,ipBlockedWarning:!0})}))};var _i=n(5173),Wi=n.n(_i),wi=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function Ri(){return Ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ri.apply(this,arguments)}function Si(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xi(e,t){return xi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},xi(e,t)}var Ei=function(t){var n,o;function r(){var e;return(e=t.call(this)||this).handleExpired=e.handleExpired.bind(Si(e)),e.handleErrored=e.handleErrored.bind(Si(e)),e.handleChange=e.handleChange.bind(Si(e)),e.handleRecaptchaRef=e.handleRecaptchaRef.bind(Si(e)),e}o=t,(n=r).prototype=Object.create(o.prototype),n.prototype.constructor=n,xi(n,o);var i=r.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var t=this.props,n=(t.sitekey,t.onChange,t.theme,t.type,t.tabindex,t.onExpired,t.onErrored,t.size,t.stoken,t.grecaptcha,t.badge,t.hl,t.isolated,function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,wi));return e.createElement("div",Ri({},n,{ref:this.handleRecaptchaRef}))},r}(e.Component);Ei.displayName="ReCAPTCHA",Ei.propTypes={sitekey:Wi().string.isRequired,onChange:Wi().func,grecaptcha:Wi().object,theme:Wi().oneOf(["dark","light"]),type:Wi().oneOf(["image","audio"]),tabindex:Wi().number,onExpired:Wi().func,onErrored:Wi().func,size:Wi().oneOf(["compact","normal","invisible"]),stoken:Wi().string,hl:Wi().string,badge:Wi().oneOf(["bottomright","bottomleft","inline"]),isolated:Wi().bool},Ei.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var Ti=n(219),Ci=n.n(Ti);function Ni(){return Ni=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ni.apply(this,arguments)}var Li={},ki=0;var Pi="onloadcallback";function Ii(){return"undefined"!==typeof window&&window.recaptchaOptions||{}}const Bi=(Di=function(){var e=Ii(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+Pi+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+Pi+"&render=explicit"},$i=($i={callbackName:Pi,globalName:"grecaptcha",attributes:Ii().nonce?{nonce:Ii().nonce}:{}})||{},function(t){var n=t.displayName||t.name||"Component",o=function(n){var o,r;function i(e,t){var o;return(o=n.call(this,e,t)||this).state={},o.__scriptURL="",o}r=n,(o=i).prototype=Object.create(r.prototype),o.prototype.constructor=o,o.__proto__=r;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+ki++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof Di?Di():Di,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=Li[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[$i.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),o=$i,r=o.globalName,i=o.callbackName,a=o.scriptId;if(r&&"undefined"!==typeof window[r]&&(Li[t]={loaded:!0,observers:{}}),Li[t]){var s=Li[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},Li[t]={loaded:!1,observers:c};var p=document.createElement("script");for(var l in p.src=t,p.async=!0,$i.attributes)p.setAttribute(l,$i.attributes[l]);a&&(p.id=a);var u=function(e){if(Li[t]){var n=Li[t].observers;for(var o in n)e(n[o])&&delete n[o]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),p.onload=function(){var e=Li[t];e&&(e.loaded=!0,u((function(t){return!i&&(t(e),!0)})))},p.onerror=function(){var e=Li[t];e&&(e.errored=!0,u((function(t){return t(e),!0})))},document.body.appendChild(p)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===$i.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var o=Li[e];o&&(delete o.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===$i.removeOnUnmount&&delete Li[e])},a.render=function(){var n=$i.globalName,o=this.props,r=(o.asyncScriptOnLoad,o.forwardedRef),i=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,["asyncScriptOnLoad","forwardedRef"]);return n&&"undefined"!==typeof window&&(i[n]="undefined"!==typeof window[n]?window[n]:void 0),i.ref=r,(0,e.createElement)(t,i)},i}(e.Component),r=(0,e.forwardRef)((function(t,n){return(0,e.createElement)(o,Ni({},t,{forwardedRef:n}))}));return r.displayName="AsyncScriptLoader("+n+")",r.propTypes={asyncScriptOnLoad:Wi().func},Ci()(r,t)})(Ei);var Di,$i;const ji=Bi;var Xi=n(6178),Ui=n.n(Xi);const Fi=t=>{let{ip:n,setPageName:o,ipBlockedWarning:r,emailSignUp:i,setUsername:a,phoneNumFromPhonePopup:s,setCodeDeliveryDetails:c,setSignUpPassword:p,setCreatingAccount:l,setEmailInvalid:u,setInvalidEmailContent:d,emailInvalid:b,invalidEmailContent:M,handleKeyboardDismiss:f}=t;const[z,h]=(0,e.useState)(""),[O,A]=(0,e.useState)(""),[m,g]=(0,e.useState)(""),[y,v]=(0,e.useState)(""),[q,_]=(0,e.useState)(""),[W,w]=(0,e.useState)(""),[R,S]=(0,e.useState)(""),[x,E]=(0,e.useState)(""),[T,C]=(0,e.useState)(""),[N,L]=(0,e.useState)(""),[k,P]=(0,e.useState)(!1),[I,B]=(0,e.useState)(!1),[D,$]=(0,e.useState)(!1),[j,X]=(0,e.useState)(!1),[U,F]=(0,e.useState)(!1),[V,H]=(0,e.useState)(!1),[G]=(0,ai.lT)(["referralCode"]),K=(0,Zo.A)(),Y=async()=>{let e=!1;z&&O?X(!1):(X(!0),e=!0),((e,t,n)=>{let o=new Date(Number(e),Number(t)-1,Number(n)),r=Date.now()-o.getTime(),i=new Date(r),a=Math.abs(i.getUTCFullYear()-1970);return a<18&&H(!0),!isNaN(Number(o))&&a>=18&&a<=110&&o.getFullYear()===Number(e)&&o.getMonth()===Number(t)-1&&o.getDate()===Number(n)})(W,q,y)?$(!1):($(!0),e=!0);/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(x)&&x?u(!1):(u(!0),d("Enter a valid email"),e=!0),T.length<8?(F(!0),e=!0):F(!1),n||await qi(),e||(l(!0),await(async()=>{let e=i?x:s,t=`${String(Number(y)).padStart(2,"0")}/${String(Number(q)).padStart(2,"0")}/${Number(W)}`;const r={username:e,password:T,attributes:{email:x,phone_number:i?null:s},validationData:{name:z,family_name:O,birthdate:t,"custom:ip":`${n}`,captchaValue:N,referralCode:G.referralCode,...i&&{"custom:phone_number":`${s}`}}};try{const e=await ri.N.signUp(r),t=e.user;a(t.username),p(T),c(e.codeDeliveryDetails),o("SignUpVerificationPopup")}catch(l){const e=l.toString();console.log(e),"UserLambdaValidationException: PreSignUp failed with error Email already exists in user pool."===e&&(u(!0),d("Someone has used this email."))}})(),l(!1))};return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},initial:{x:400},children:r?(0,yo.jsx)(Nr,{children:(0,yo.jsx)("h2",{children:"You must turn off ad block to sign up"})}):(0,yo.jsxs)(Nr,{children:[(0,yo.jsx)(Or,{style:{marginBottom:K?"16px":void 0},children:(0,yo.jsx)(mr,{children:"Welcome to Anystay"})}),(0,yo.jsxs)(wr,{invalid:j,htmlFor:"first_name",children:["Name ",(0,yo.jsx)("span",{children:"Enter a valid name"})]}),(0,yo.jsxs)(kr,{children:[(0,yo.jsx)(_r,{value:z,type:"text",onChange:e=>{""===e.target.value||" "===e.target.value.slice(-1)?h(e.target.value):/^[a-zA-Z ]+$/.test(e.target.value)&&h(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},invalid:j,placeholder:"First name",name:"first_name"}),(0,yo.jsx)(_r,{value:O,onChange:e=>{""===e.target.value||" "===e.target.value.slice(-1)?A(e.target.value):/^[a-zA-Z ]+$/.test(e.target.value)&&A(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},invalid:j,placeholder:"Last name",name:"last_name",type:"text"})]}),(0,yo.jsxs)(wr,{invalid:D,htmlFor:"date_of_birth",children:["Birthdate ",(0,yo.jsx)("span",{children:V?"You must be at least 18":"Enter a valid birthdate"})]}),(0,yo.jsx)(Pr,{children:(0,yo.jsx)(Wr,{type:"text",value:R,onChange:e=>{let t=e.target.value.replace(/[^\d]/g,"").slice(0,8);const n="deleteContentBackward"===e.nativeEvent.inputType;let o="";if(o=t.length<2||n&&2===t.length?t:t.length<4||n&&4===t.length?`${t.slice(0,2)} / ${t.slice(2)}`:`${t.slice(0,2)} / ${t.slice(2,4)} / ${t.slice(4,8)}`,S(o),14===o.length){Ui()(t,"DD / MM / YYYY",!0).isValid()?(console.log(11111111),$(!1)):(v(t.slice(0,2)),_(t.slice(2,4)),w(t.slice(4,8)))}else $(!1)},invalid:D||V,style:{marginLeft:0},placeholder:"DD / MM / YYYY",name:"day",id:"dob-anchor",onBlur:f})}),!i&&(0,yo.jsxs)(e.Fragment,{children:[(0,yo.jsxs)(wr,{invalid:b,htmlFor:"email",children:["Email ",(0,yo.jsx)("span",{children:M})]}),(0,yo.jsx)(_r,{invalid:b,value:x,onChange:e=>{E(e.target.value)},placeholder:"Example@gmail.com",name:"email",onBlur:f})]}),i&&(0,yo.jsxs)(e.Fragment,{children:[(0,yo.jsxs)(wr,{invalid:I,htmlFor:"email",children:["Phone ",(0,yo.jsx)("span",{children:"Enter a valid phone number"})]}),(0,yo.jsx)(_r,{invalid:I,value:m,onChange:e=>{g(e.target.value)},placeholder:"+61",name:"telephone"})]}),(0,yo.jsxs)(wr,{invalid:U,htmlFor:"password",children:["Password ",(0,yo.jsx)("span",{children:"8 characters minimum"})]}),(0,yo.jsx)(_r,{invalid:U,type:"password",value:T,onChange:e=>{C(e.target.value)},placeholder:"Create a password",name:"password",style:{marginBottom:"0px"},onBlur:f}),(0,yo.jsxs)(qr,{children:["By continuing, you accept our"," ",(0,yo.jsx)("a",{href:"/terms-and-conditions",target:window.innerWidth>768?"_blank":"",children:"Terms of Service"}),",",(0,yo.jsx)("a",{href:"/privacy-policy",target:window.innerWidth>768?"_blank":"",children:"Privacy Policy"})," ","and the"," ",(0,yo.jsx)("a",{href:"https://stripe.com/en-au/legal/connect-account",target:window.innerWidth>768?"_blank":"",rel:"noreferrer",children:"Stripe Connected Account Agreement"})]}),(0,yo.jsx)(ji,{sitekey:"6LfojLYpAAAAAFPBZBbicSKwLzLF8jBdBsG5ciFT",onChange:e=>{e&&L(e)},style:{width:"400px"}}),(0,yo.jsx)(rr.A,{style:K?{marginTop:"16px"}:{position:"fixed",bottom:"16px",width:"calc(100% - 48px)"},continueType:"button",disabled:!N,background:"black",isLoading:k,onClick:async()=>{P(!0),await Y(),P(!1)},children:"Continue"})]})})},Vi=e=>{let{profilePicture:t}=e;const[n,o]=(0,p.useRecoilState)(Wo.e),[r,i]=(0,p.useRecoilState)(nr.c6);return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},initial:{x:400},style:{height:"100%"},children:(0,yo.jsxs)(Ir,{pageName:"WelcomePopup",children:[(0,yo.jsx)($r,{style:{width:"128px",height:"128px"},children:(0,yo.jsx)(Fr,{style:{width:"128px",height:"128px"},src:t,alt:"Profile photo"})}),(0,yo.jsxs)(Br,{children:["Welcome to Anystay, ",n?n.firstName:"Guest"]}),(0,yo.jsx)(Dr,{children:"You're on your way to our homes and rooms for rent."}),(0,yo.jsx)(ei,{type:"button",onClick:()=>{i(!1)},children:"Start exploring"})]})})},Hi=async e=>{const t=await ri.N.currentSession(),n=t.getAccessToken().getJwtToken(),o=t.getIdToken().getJwtToken();let r=await(0,oi.p)("get","dev-anystay-user","user",{headers:{Authorization:n}}),i=r.body.userModel,a=r.body.userHostModel,s=r.body.stripeCustomerAccount,c=r.body.stripeAccount;(0,l.hk)(hi.z,n),ui(o),(0,l.hk)(go.L,!0),(0,l.hk)(di.D,JSON.parse(JSON.stringify(e))),(0,l.hk)(bi.M,i),(0,l.hk)(Mi.U,a),(0,l.hk)(fi.J,s),(0,l.hk)(zi._,c)};var Gi=n(9380),Ki=n.n(Gi);const Yi=t=>{let{username:n,signUpPassword:o,setPageName:r,codeDeliveryDetails:i,pageName:a,countdown:s,activateCountdown:c,resendNotReady:l,handleKeyboardDismiss:u}=t;const[d,b]=(0,e.useState)(!1),[M,f]=(0,e.useState)(!1),[z,h]=(0,e.useState)(""),[O,A]=(0,p.useRecoilState)(Wo.e),[m,g]=(0,p.useRecoilState)(li.H),[y,v]=(0,e.useState)(!1),q=(0,e.useCallback)((async()=>{l||(c(!0),await ri.N.resendSignUp(n).then((e=>{})).catch((e=>{"CodeMismatchException"===e.code?b(!0):"LimitExceededException"===e.code&&f(!0)})))}),[c,l,n]);if("SignUpVerificationPopup"!==a)return null;const _=async e=>{O&&null===O.identityID&&(0,oi.p)("post","dev-anystay-user","user/identityid",{headers:{Authorization:m},body:{identityID:e.identityId}})};return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},style:{height:"100%"},initial:{x:400},children:(0,yo.jsxs)(Lr,{children:[(0,yo.jsx)(Zr,{mfaInvalid:d,children:(0,yo.jsx)(Ki(),{value:z,length:6,placeholder:"",validChars:"0-9",autoFocus:!0,onChange:e=>{b(!1),h(e)},onComplete:async e=>{6===e.length&&await(async e=>{v(!0),await ri.N.confirmSignUp(n,e).then((async e=>{o?await ri.N.signIn(n,o).then((async e=>{let t=await ri.N.currentUserCredentials();_(t),await Hi(e),r("AddProfilePhotoPopup")})):r("PasswordPopup")})).catch((e=>{console.log(e),"CodeMismatchException"===e.code&&(b(!0),v(!1))}))})(e)},classNames:{container:"verification-container",character:"verification-character",characterInactive:"verification-character--inactive",characterSelected:"verification-character--selected"},onBlur:u})}),(0,yo.jsx)(Vr,{children:`We sent a 6 digit code to ${i?i.Destination:""}`}),(0,yo.jsx)(Hr,{mfaInvalid:d||M,children:M?"You exceeded your reset attempts, please try again later":"You have entered the wrong code, please try again"}),(0,yo.jsxs)(rr.A,{background:"black",style:{marginTop:"unset"},continueType:"button",onClick:q,disabled:l||y,isLoading:y,children:["Resend code ",l?`(${s})`:""]})]})})},Ji=t=>{let{username:n,mfaInvalid:o,setMfaInvalid:r,codeDeliveryDetails:i,setCodeDeliveryDetails:a,setPageName:s,pageName:c,countdown:l,activateCountdown:u,newPassword:d,setLoggingIn:b,resendNotReady:M,handleKeyboardDismiss:f}=t;const z=(0,e.useRef)(!0),[h,O]=((0,Zo.A)(),(0,p.useRecoilState)(nr.c6)),[A,m]=(0,e.useState)(!1),[g,y]=(0,e.useState)(""),[v,q]=(0,e.useState)(!1),_=(0,e.useCallback)((async()=>{M||(u(!0),await ri.N.forgotPassword(n).then((e=>{a(e.CodeDeliveryDetails)})).catch((e=>{"CodeMismatchException"===e.code?r(!0):"LimitExceededException"===e.code&&q(!0)})))}),[u,M,a,r,n]);if((0,e.useEffect)((()=>{M||("SignInVerificationPopup"===c&&z.current?(_(),z.current=!1):"SignInVerificationPopup"!==c&&(z.current=!0))}),[_,c,M]),"SignInVerificationPopup"!==c)return null;return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},style:{height:"100%"},initial:{x:400},children:(0,yo.jsxs)(yr,{style:{height:"100%"},children:[(0,yo.jsx)(Zr,{mfaInvalid:o,children:(0,yo.jsx)(Ki(),{value:g,length:6,placeholder:"",validChars:"0-9",autoFocus:!0,onChange:e=>{r(!1),y(e)},onComplete:e=>{6===e.length&&(async e=>{m(!0),await ri.N.forgotPasswordSubmit(n,e,d).then((async()=>{await ri.N.signIn(n,d).then((async e=>{m(!1),b(!0),await Oi(e),s("PhonePopup"),b(!1),O(!1)}))})).catch((e=>{b(!1),m(!1),"CodeMismatchException"===e.code?r(!0):"LimitExceededException"===e.code&&q(!0)}))})(e)},classNames:{container:"verification-container",character:"verification-character",characterInactive:"verification-character--inactive",characterSelected:"verification-character--selected"},onBlur:f})}),(0,yo.jsx)(Vr,{children:`We sent a 6 digit code to ${i?i.Destination:""}`}),(0,yo.jsx)(Hr,{mfaInvalid:o||v,children:v?"You exceeded your reset attempts, please try again later":"You have entered the wrong code, please try again"}),(0,yo.jsxs)(rr.A,{style:{marginTop:"unset"},isLoading:A,background:"black",continueType:"button",onClick:_,disabled:M||A,children:["Resend code ",M?`(${l})`:""]})]})})};var Qi=n(8581);const Zi=t=>{let{setPageName:n,profilePicture:o,setProfilePicture:r}=t;const[i,a]=(0,e.useState)(!1),[s,c]=(0,p.useRecoilState)(Wo.e),[l,u]=(0,p.useRecoilState)(li.H),d=(0,e.useRef)(null),b=e=>{d.current.click()};return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},initial:{x:400},style:{height:"100%"},children:(0,yo.jsxs)(Ir,{pageName:"AddProfilePhotoPopup",children:[(0,yo.jsx)($r,{onClick:b,children:(0,yo.jsx)(Fr,{src:o,alt:"Photo"})}),(0,yo.jsx)(Dr,{children:"Add a photo of you so hosts can recognise you better."}),(0,yo.jsxs)(jr,{children:[(0,yo.jsx)("input",{style:{visibility:"hidden"},className:"new-listing-image-upload-input-hidden",type:"file",name:"file",ref:d,onChange:async e=>{const t=e.target.files[0];try{let e=await Qi.d.put((e=>{for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=n.charAt(Math.floor(62*Math.random()));return t})(12),t,{contentType:"image/*",level:"protected"});await(async e=>{if(s)try{await(0,oi.p)("post","dev-anystay-user","user/profile/image",{headers:{Authorization:l},body:{profilePicture:e}});const t=(0,cr.A)(e,s.identityID,100);r(t)}catch(t){console.log(t)}})(e.key),(e=>{let t=JSON.parse(JSON.stringify(s));t.profilePicture=e,c(t)})(e.key),a(!0)}catch(n){console.log("Error uploading file: ",n)}}}),(0,yo.jsx)(Xr,{onClick:b,children:"Upload photo"}),(0,yo.jsx)(Cr,{type:"submit",onClick:()=>{n("WelcomePopup")},children:i?"Continue":"Do this later"})]})]})})},ea=(0,p.selector)({key:"ipSelector",get:e=>{let{get:t}=e;return t(vi)},set:(e,t)=>{let{set:n}=e;if(!(t instanceof p.DefaultValue))return n(vi,t)}});var ta=n(9697);const na=()=>{const[t,n]=(0,e.useState)(""),[o,r]=(0,e.useState)(""),[i,a]=(0,e.useState)(""),[s,c]=(0,e.useState)(""),[l,u]=(0,e.useState)(!1),[d,b]=(0,p.useRecoilState)(li.H),[M,f]=(0,p.useRecoilState)(Wo.e),[z,h]=(0,p.useRecoilState)(nr.c6),[O,A]=(0,e.useState)(!1),[m,g]=(0,e.useState)(!1);return(0,yo.jsx)(Vo.P.div,{animate:{x:0},transition:{duration:.2,ease:"easeInOut"},initial:{x:400},style:{marginTop:"32px"},children:(0,yo.jsxs)(Nr,{children:[(0,yo.jsxs)(wr,{invalid:O,htmlFor:"email",children:["Phone ",(0,yo.jsx)("span",{children:"Enter a valid phone number"})]}),(0,yo.jsx)(Ur,{children:(0,yo.jsx)(ni.Ay,{placeholder:"Enter your number to start",value:t,defaultCountry:"AU",style:{height:"54px",marginTop:"12px",marginBottom:"16px",borderRadius:"10px",border:`1px solid ${O?ko.J2.Red1.color:ko.J2.Grey1.color}`,paddingLeft:"16px",paddingRight:"16px"},onChange:e=>{n(e)}})}),(0,yo.jsxs)(wr,{invalid:m,htmlFor:"date_of_birth",children:["Birthdate ",(0,yo.jsx)("span",{children:"Enter a valid birthdate"})]}),(0,yo.jsxs)(Pr,{children:[(0,yo.jsx)(Wr,{type:"number",value:o,onChange:e=>{Number(e.target.value)>=0&&String(e.target.value).length<3&&r(e.target.value)},invalid:m,style:{marginBottom:0},placeholder:"DD",name:"day",id:"dob-anchor"}),(0,yo.jsx)(Wr,{type:"number",value:i,onChange:e=>{Number(e.target.value)>=0&&String(e.target.value).length<3&&a(e.target.value)},invalid:m,style:{marginBottom:0},placeholder:"MM",name:"month"}),(0,yo.jsx)(Wr,{type:"number",value:s,onChange:e=>{Number(e.target.value)>=0&&String(e.target.value).length<5&&c(e.target.value)},invalid:m,style:{marginBottom:0},placeholder:"YYYY",name:"year"})]}),(0,yo.jsxs)(qr,{children:["By continuing, you accept our"," ",(0,yo.jsx)("a",{href:"/terms-and-conditions",target:window.innerWidth>768?"_blank":"",children:"Terms of Service"}),", ",(0,yo.jsx)("br",{}),(0,yo.jsx)("a",{href:"/privacy-policy",target:window.innerWidth>768?"_blank":"",children:"Privacy Policy"})," ","and the"," ",(0,yo.jsx)("a",{href:"https://stripe.com/en-au/legal/connect-account",target:window.innerWidth>768?"_blank":"",rel:"noreferrer",children:"Stripe Connected Account Agreement"})]}),(0,yo.jsx)(rr.A,{continueType:"button",background:"black",onClick:async()=>{let e=!1;if(((e,t,n)=>{let o=new Date(Number(e),Number(t)-1,Number(n)),r=Date.now()-o.getTime(),i=new Date(r),a=Math.abs(i.getUTCFullYear()-1970);return!isNaN(Number(o))&&a>=18&&a<=110&&o.getFullYear()===Number(e)&&o.getMonth()===Number(t)-1&&o.getDate()===Number(n)})(s,i,o)?g(!1):(g(!0),e=!0),(e=>new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/).test(e))(t)?A(!1):(A(!0),e=!0),!e){u(!0);let e=new Date(Number(s),Number(i)-1,Number(o));try{const n=await(0,oi.p)("post","dev-anystay-auth","user/external/signup",{headers:{Authorization:d},body:{birthdate:e.toString(),phone:t}});if(console.log(n),n.success){const e=JSON.parse(JSON.stringify(M));e.externalSignOnCompleted=!0,e.dateOfBirth=`${o}/${i}/${s}`,e.phone=t,f(e),h(!1)}console.log("successfully updated phone and dob")}catch(n){console.log(n)}}},isLoading:l,disabled:l,children:"Continue"})]})})};var oa=n(2284),ra=n(1852);const ia=()=>{const[t,n]=(0,p.useRecoilState)(ea),[o,r]=(0,p.useRecoilState)(Wo.e),[i,a]=(0,p.useRecoilState)(nr.c6),[s,c]=(0,p.useRecoilState)(ci),[l,u]=(0,e.useState)(!1),[d,b]=(0,e.useState)(!1),[M,f,z]=(0,oa.A)(60),[h,O]=(0,e.useState)(""),[A,m]=(0,e.useState)(!1),[g,y]=(0,e.useState)("PhonePopup"),[v,q]=(0,e.useState)(""),[_,W]=(0,e.useState)(""),[w,R]=(0,e.useState)(!1),[S,x]=(0,e.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"),[E,T]=(0,e.useState)({}),[C,N]=(0,e.useState)(""),[L,k]=(0,e.useState)(!1),[P,I]=(0,e.useState)(!1),[B,D]=(0,e.useState)(""),$=(0,To.A)(i,(()=>{l||d||o&&o.externalSignOn&&!o.externalSignOnCompleted||(a(!1),y("PhonePopup"))}));(0,e.useEffect)((()=>{s&&(O(s),y("PasswordPopup"))}),[s]),(0,e.useEffect)((()=>{o||y("PhonePopup")}),[o]);const j=()=>{switch(g){case"PhonePopup":a(!1);break;case"PasswordPopup":case"SignUpVerificationPopup":y("PhonePopup");break;case"SignInVerificationPopup":case"NewPasswordPopup":y("PasswordPopup");break;case"WelcomePopup":y("AddProfilePhotoPopup");break;case"SignUpFormPopup":y(A?"EmailPopup":"PhonePopup");break;case"GoogleUserDetailsConfirmationPopup":o&&o.externalSignOn&&o.externalSignOnCompleted&&a(!1);break;default:c(""),a(!1)}};(0,e.useEffect)((()=>{i||k(!1)}),[i]),(0,e.useEffect)((()=>{o&&o.externalSignOn&&!o.externalSignOnCompleted&&(a(!0),y("GoogleUserDetailsConfirmationPopup"))}),[a,o]);const X=()=>{window.innerWidth<768&&window.scrollTo(0,0)};return(0,yo.jsx)(fr,{children:i&&(0,yo.jsxs)(ta.A,{children:[l&&(0,yo.jsx)(zr,{children:(0,yo.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"600px"},children:[(0,yo.jsx)(Mr.A,{width:"64",height:"64",guestMode:!0}),(0,yo.jsx)(ti,{children:"Logging in..."})]})}),d&&(0,yo.jsx)(zr,{children:(0,yo.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"346px"},children:[(0,yo.jsx)(Mr.A,{width:"64",height:"64",guestMode:!0}),(0,yo.jsx)(ti,{children:"Creating account..."})]})}),(0,yo.jsx)(zr,{ref:$,pageName:g,style:{display:l||d?"none":"flex"},children:(0,yo.jsxs)(hr,{children:["PhonePopup"===g?(0,yo.jsx)(ra.A,{type:"Close",onClick:j,mobileLeft:24,mobileTop:24}):(0,yo.jsx)(ra.A,{type:"Arrow",onClick:j,mobileLeft:24,mobileTop:24}),"PhonePopup"===g&&(0,yo.jsx)(pi,{setUsername:O,setPageName:y,setPhoneNumFromPhonePopup:W,handleKeyboardDismiss:X}),"PasswordPopup"===g&&(0,yo.jsx)(Ai,{setLoggingIn:u,username:h,setPageName:y,setCodeDeliveryDetails:T,signInPasswordInvalid:L,setSignInPasswordInvalid:k,phoneNumFromPhonePopup:_,setMfaInvalid:R,handleKeyboardDismiss:X,isGoogleAccountExist:!!s}),(0,yo.jsx)(Ji,{setPageName:y,username:h,mfaInvalid:w,setMfaInvalid:R,codeDeliveryDetails:E,setCodeDeliveryDetails:T,pageName:g,activateCountdown:f,countdown:M,newPassword:v,setLoggingIn:u,resendNotReady:z,handleKeyboardDismiss:X}),"NewPasswordPopup"===g&&(0,yo.jsx)(mi,{setPageName:y,setNewPassword:q,newPassword:v,handleKeyboardDismiss:X}),"AccountDeactivatedPopup"===g&&(0,yo.jsx)(gi,{}),"AccountSuspendedPopup"===g&&(0,yo.jsx)(yi,{}),"SignUpFormPopup"===g&&(0,yo.jsx)(Fi,{ip:t.ip,setCreatingAccount:b,setPageName:y,ipBlockedWarning:t.ipBlockedWarning,emailSignUp:A,setUsername:O,setCodeDeliveryDetails:T,setSignUpPassword:N,phoneNumFromPhonePopup:_,setEmailInvalid:I,setInvalidEmailContent:D,emailInvalid:P,invalidEmailContent:B,handleKeyboardDismiss:X}),"GoogleUserDetailsConfirmationPopup"===g&&(0,yo.jsx)(na,{}),"AddProfilePhotoPopup"===g&&(0,yo.jsx)(Zi,{setProfilePicture:x,profilePicture:S,setPageName:y}),"WelcomePopup"===g&&(0,yo.jsx)(Vi,{profilePicture:S}),(0,yo.jsx)(Yi,{username:h,signUpPassword:C,setPageName:y,pageName:g,codeDeliveryDetails:E,activateCountdown:f,countdown:M,resendNotReady:z,handleKeyboardDismiss:X})]})})]})})};var aa=n(4677),sa=n(8256),ca=n(4647),pa=n(9186),la=n(6450),ua=n(6750);const da=(0,la.Ay)({app:"Anystay",plugins:[(0,ua.A)({writeKey:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"})]});var ba=n(8108),Ma=n(1743),fa=n(1872),za=n(8840);const ha=(0,za.A)("facebookmessenger",(function(e,t){var n=t.appId,o=t.redirectUri,r=t.to;return"https://www.facebook.com/dialog/send"+(0,fa.A)({link:e,redirect_uri:o||e,app_id:n,to:r})}),(function(e){return{appId:e.appId,redirectUri:e.redirectUri,to:e.to}}),{windowWidth:1e3,windowHeight:820});var Oa=n(1791),Aa=n(6442),ma=n(7811),ga=n(5073),ya=n(1300);const va=(0,za.A)("pinterest",(function(e,t){var n=t.media,o=t.description;return(0,ya.A)(e,"pinterest.url"),(0,ya.A)(n,"pinterest.media"),"https://pinterest.com/pin/create/button/"+(0,fa.A)({url:e,media:n,description:o})}),(function(e){return{media:e.media,description:e.description}}),{windowWidth:1e3,windowHeight:730}),qa=Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    padding: 0 24px;

    @media (min-width: 768px) {
        padding: 0 80px;
        margin-top: 80px;
    }
`,_a=Lo.Ay.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 48px;
`,Wa=Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 400px;
    }
    @media (min-width: 1024px) {
        margin-right: 80px;
    }
`,wa=Lo.Ay.h1`
    font-size: ${ko.$G.sans_1000_semi.fontSize};
    line-height: ${ko.$G.sans_1000_semi.lineHeight};
    font-weight: ${ko.$G.sans_1000_semi.fontWeight};
    color: ${ko.J2.Black.color};
    display: flex;
    justify-content: flex-start;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        font-size: ${ko.$G.sans_1200_bold.fontSize};
        line-height: ${ko.$G.sans_1200_bold.lineHeight};
        font-weight: ${ko.$G.sans_1200_bold.fontWeight};
    }
`,Ra=Lo.Ay.div`
    width: 100%;
    height: 86px;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    border: 1px solid ${ko.J2.Grey3.color};
    border-radius: 9px;

    background-color: ${ko.J2.Grey5.color};
    justify-content: center;
    text-align: center;

    @media (min-width: 768px) {
        width: 400px;
        height: 54px;
        justify-content: flex-start;
        border: 1px solid ${ko.J2.Grey1.color};
        background-color: ${ko.J2.White.color};
    }
`,Sa=Lo.Ay.p`
    font-size: ${ko.$G.sans_400_semi.fontSize};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};
    line-height: ${ko.$G.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        margin-left: 16px;
    }
`,xa=Lo.Ay.button`
    display: none;

    @media (min-width: 768px) {
        display: block;
        position: absolute;
        height: 36px;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        background-color: ${ko.J2.White.color};
        border: none;
        border-radius: 7px;

        font-size: ${ko.Ox.sans_button_200.fontSize};
        line-height: ${ko.Ox.sans_button_200.lineHeight};
        font-weight: ${ko.Ox.sans_button_200.fontWeight};
        text-decoration: underline;
        text-align: center;
        cursor: pointer;
    }
`,Ea=Lo.Ay.div`
    display: grid;
    grid-template-columns: repeat(2, 192px);
    grid-template-rows: repeat(3, 54px);
    grid-gap: ${ko.dB.spacing_300.gap};

    background-color: ${ko.J2.White.color};
    justify-content: center;
`,Ta=(0,Lo.Ay)(ha)`
    background-color: ${ko.J2.White.color};
    border: 1px solid ${ko.J2.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${ko.dB.spacing_300.gap};
    cursor: pointer;
`,Ca=(0,Lo.Ay)(Oa.A)`
    background-color: ${ko.J2.White.color};
    border: 1px solid ${ko.J2.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${ko.dB.spacing_300.gap};
    cursor: pointer;
`,Na=(0,Lo.Ay)(Aa.A)`
    background-color: ${ko.J2.White.color};
    border: 1px solid ${ko.J2.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${ko.dB.spacing_300.gap};
    cursor: pointer;
`,La=(0,Lo.Ay)(ma.A)`
    background-color: ${ko.J2.White.color};
    border: 1px solid ${ko.J2.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${ko.dB.spacing_300.gap};
    cursor: pointer;
`,ka=(0,Lo.Ay)(ga.A)`
    background-color: ${ko.J2.White.color};
    border: 1px solid ${ko.J2.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${ko.dB.spacing_300.gap};
    cursor: pointer;
`,Pa=(0,Lo.Ay)(va)`
    background-color: ${ko.J2.White.color};
    border: 1px solid ${ko.J2.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    gap: ${ko.dB.spacing_300.gap};
    cursor: pointer;
`,Ia=Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ba=(0,Lo.Ay)(Oa.A)`
    width: 100%;
    height: 48px;
    background-color: ${ko.J2.Black.color} !important;
    color: ${ko.J2.White.color} !important;
    border: 1px solid ${ko.J2.Grey5.color};
    border-radius: 10px;
    box-shadow: ${ko.E_.shadow_100.boxShadow} !important;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${ko.dB.spacing_300.gap};
    cursor: pointer;
`,Da=Lo.Ay.div`
    display: flex;
    justify-content: center;
    font-size: ${ko.$G.sans_400_semi.fontSize};
    line-height: ${ko.$G.sans_400_semi.lineHeight};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};

    margin-top: 24px;
    text-decoration: underline;
`,$a=Lo.Ay.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;

    @media (min-width: 768px) {
        margin-left: 16px;
    }
`,ja=Lo.Ay.div`
    font-size: ${ko.Ox.sans_button_200.fontSize};
    line-height: ${ko.Ox.sans_button_200.lineHeight};
    font-weight: ${ko.Ox.sans_button_200.fontWeight};
    color: ${ko.J2.White.color};

    @media (min-width: 768px) {
        color: ${ko.J2.Black.color};
    }
`,Xa=Lo.Ay.div`
    display: none;

    @media (min-width: 1024px) {
        display: block;
        max-width: 800px;
        width: 100%;
    }
`,Ua=Lo.Ay.img`
    width: 100%;
    height: 508px;
    object-fit: cover;
    border-radius: ${ko.Qk.radius_12.borderRadius};
`,Fa=Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${ko.dB.spacing_900.margin} auto;
    max-width: 1280px;

    @media (min-width: 768px) {
        margin: ${ko.dB.spacing_800.margin} auto ${ko.dB.spacing_1000.margin};
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`,Va=Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 64px;
    justify-content: center;

    @media (min-width: 1024px) {
        flex: 1;
        margin-bottom: 0;
        margin-right: 48px;
        &:last-child {
            margin-right: 0;
        }
    }
`,Ha=Lo.Ay.div`
    font-size: ${ko.$G.sans_1200_semi.fontSize};
    line-height: ${ko.$G.sans_1200_semi.lineHeight};
    font-weight: ${ko.$G.sans_1200_semi.fontWeight};

    margin-right: 16px;
`,Ga=Lo.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        padding-top: 26px;
    }
`,Ka=Lo.Ay.div`
    font-size: ${ko.$G.sans_500_semi.fontSize};
    line-height: ${ko.$G.sans_500_semi.lineHeight};
    font-weight: ${ko.$G.sans_500_semi.fontWeight};
    color: ${ko.J2.Black.color};

    @media (min-width: 768px) {
        font-size: ${ko.$G.sans_700_semi.fontSize};
        line-height: ${ko.$G.sans_700_semi.lineHeight};
        font-weight: ${ko.$G.sans_700_semi.fontWeight};
    }
`,Ya=Lo.Ay.p`
    font-size: ${ko.so.sans_text_300.fontSize};
    line-height: ${ko.so.sans_text_300.lineHeight};
    font-weight: ${ko.so.sans_text_300.fontWeight};
    color: ${ko.J2.Grey.color};
    margin-top: 8px;

    @media (min-width: 1024px) {
        font-size: ${ko.so.sans_text_400.fontSize};
        line-height: ${ko.so.sans_text_400.lineHeight};
        font-weight: ${ko.so.sans_text_400.fontWeight};
        margin-top: 12px;
    }
`,Ja=Lo.Ay.button`
    height: 48px;
    padding: 0 24px;
    background-color: ${ko.J2.Black.color};
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    border: none;
    border-radius: ${ko.Qk.radius_100.borderRadius};
    color: ${ko.J2.White.color};
    cursor: pointer;
    position: fixed;
    bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${ko.dB.spacing_200.gap};
    z-index: 1;

    @media (min-width: 768px) {
        bottom: 32px;
    }
`,Qa=Lo.Ay.svg`
    width: 16px;
    height: 16px;
`,Za=Lo.Ay.p`
    font-size: ${ko.$G.sans_400_semi.fontSize};
    line-height: ${ko.$G.sans_400_semi.lineHeight};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};
    color: ${ko.J2.White.color};
`,es=Lo.Ay.div`
    border-radius: 14px 14px 0 0;
    width: 100%;
    height: calc(100% - 12px);
    background-color: ${ko.J2.White.color};
    box-shadow: ${ko.E_.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${ko.dB.spacing_300.padding} ${ko.dB.spacing_400.padding};

    @media (min-width: 768px) {
        width: 560px;
        height: 396px;
        margin: auto;
        padding: ${ko.dB.spacing_400.padding};
    }
`,ts=Lo.Ay.div`
    width: 100%;
    margin: 56px auto 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    @media (min-width: 768px) {
        width: 360px;
        margin: ${ko.dB.spacing_400.margin} auto ${ko.dB.spacing_500.margin};
    }
`,ns=Lo.Ay.p`
    font-size: ${ko.$G.sans_900_bold.fontSize};
    line-height: ${ko.$G.sans_900_bold.lineHeight};
    font-weight: ${ko.$G.sans_900_bold.fontWeight};
`,os=Lo.Ay.div`
    width: 100%;
`,rs=Lo.Ay.input`
    min-height: 50px;
    width: 100%;
    padding: 0;
    padding-left: 16px;
    border: 1px solid ${ko.J2.Grey1.color};
    border-radius: 9px;
    font-size: ${ko.$G.sans_400.fontSize};
    line-height: ${ko.$G.sans_400.lineHeight};
    font-weight: ${ko.$G.sans_400.fontWeight};

    &:focus {
    }

    @media (min-width: 768px) {
        height: 54px;
    }
`,is=Lo.Ay.p`
    margin-top: 12px;
    font-size: ${ko.$G.sans_300.fontSize};
    text-align: left;
    font-weight: ${ko.$G.sans_300.fontWeight};

    line-height: ${ko.$G.sans_300.lineHeight};
`;var as=n(8306),ss=n(1372);function cs(t){let{getCodePopup:n,handleClosePopup:o}=t;const[r,i]=(0,e.useState)(""),a=(0,To.A)(n,o),[s,c]=(0,e.useState)(!1);return(0,yo.jsx)(ss.A,{ref:a,backBtnType:"Close",closePopup:o,handleSave:async()=>{c(!0),await console.log("checkEmail function triggered"),c(!1)},disable:s,isContinueBtnLoading:s,btnText:"Get code",children:(0,yo.jsxs)(es,{children:[(0,yo.jsx)(ts,{children:(0,yo.jsx)(ns,{children:"Enter your email to get your discount code"})}),(0,yo.jsxs)(os,{children:[(0,yo.jsx)(rs,{value:r,onChange:e=>{i(e.target.value)},placeholder:"Example@gmail.com",name:"email"}),(0,yo.jsx)(is,{children:"You agree to receiving occasional marking emails from us"})]})]})})}const ps=()=>{const[t,n]=(0,e.useState)(!1),o=(0,Zo.A)(),r="t.ly/UejTz",[i,s]=(0,p.useRecoilState)(Wo.e),c=(0,a.Zp)(),[l,u]=(0,e.useState)(!1),d=()=>{u((e=>!e))},b=()=>{navigator.clipboard.writeText(r),n(!0),setTimeout((()=>{n(!1)}),2e3)};return(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(as.A,{title:"Referral | Anystay"}),!o&&(0,yo.jsx)(ra.A,{onClick:()=>{c(i?-1:"/")},type:"Arrow",mobileTop:24,mobileLeft:24}),(0,yo.jsxs)(qa,{children:[(0,yo.jsxs)(_a,{children:[(0,yo.jsxs)(Wa,{children:[(0,yo.jsx)(wa,{children:"Invite 5+ friends for 10% off stays in Australia"}),(0,yo.jsxs)(Ra,{children:[(0,yo.jsx)(Sa,{children:r}),o?(0,yo.jsx)(xa,{onClick:b,children:t?"Copied":"Copy link"}):(0,yo.jsx)($a,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Copy.svg",onClick:b}),(0,yo.jsx)(dr.N,{children:t&&(0,yo.jsx)(Ma.A,{})})]}),o?(0,yo.jsxs)(Ea,{children:[(0,yo.jsxs)(Ca,{url:"https://anystay.com.au",subject:"",separator:" ",body:"Come check out Anystay.com.au!",children:[(0,yo.jsx)($a,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg",alt:"Email Icon"}),(0,yo.jsx)(ja,{children:"Email"})]}),(0,yo.jsxs)(Ta,{url:"https://anystay.com.au",appId:"",children:[(0,yo.jsx)($a,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Messenger.svg",alt:"Messenger Icon"}),(0,yo.jsx)(ja,{children:"Messenger"})]}),(0,yo.jsxs)(La,{url:"https://anystay.com.au",separator:" ",children:[(0,yo.jsx)($a,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Whatsapp.svg",alt:"Whatsapp Icon"}),(0,yo.jsx)(ja,{children:"Whatsapp"})]}),(0,yo.jsxs)(ka,{quote:"Check out Anystay!",url:"https://anystay.com.au",hashtag:"#anystay",children:[(0,yo.jsx)($a,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg",alt:"Facebook Icon"}),(0,yo.jsx)(ja,{children:"Facebook"})]}),(0,yo.jsxs)(Na,{title:"Check out Anystay!",url:"https://anystay.com.au",children:[(0,yo.jsx)($a,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg",alt:"Twitter Icon"}),(0,yo.jsx)(ja,{children:"Twitter"})]}),(0,yo.jsxs)(Pa,{url:"https://anystay.com.au",media:"https://d292awxalydr86.cloudfront.net/Referral+page/Referral+hero.jpg",description:"Check out Anystay!",children:[(0,yo.jsx)($a,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Pinterest.svg",alt:"Pinterest Icon"}),(0,yo.jsx)(ja,{children:"Pinterest"})]})]}):(0,yo.jsxs)(Ia,{children:[(0,yo.jsx)(Ba,{url:"https://anystay.com.au",subject:"",separator:" ",body:"Come check out Anystay.com.au!",children:(0,yo.jsx)(ja,{children:"Share with Email"})}),(0,yo.jsx)(Da,{onClick:async()=>{if(navigator.share)try{await navigator.share({title:"Anystay",url:"http://anystay.com.au/referral-page"}),console.log("Share successful")}catch(e){console.error("Error sharing:",e)}else alert("Web Share is not supported in your browser.")},children:"Or, share another way"})]})]}),(0,yo.jsx)(Xa,{children:(0,yo.jsx)(Ua,{src:"https://d292awxalydr86.cloudfront.net/Referral+page/Referral+hero.jpg",alt:"Referral page image"})})]}),(0,yo.jsxs)(Fa,{children:[(0,yo.jsxs)(Va,{children:[o&&(0,yo.jsx)(Ha,{children:"1."}),(0,yo.jsxs)(Ga,{children:[o?(0,yo.jsx)(Ka,{children:"Share with 5 or more friends"}):(0,yo.jsx)(Ka,{children:"1. Share with 5 or more friends"}),(0,yo.jsx)(Ya,{children:"Invite 5 or more friends to join Anystay to get up to 10% off your first stay anywhere in Australia."})]})]}),(0,yo.jsxs)(Va,{children:[o&&(0,yo.jsx)(Ha,{children:"2."}),(0,yo.jsxs)(Ga,{children:[o?(0,yo.jsx)(Ka,{children:"Enter your email address"}):(0,yo.jsx)(Ka,{children:"2. Enter your email address"}),(0,yo.jsx)(Ya,{children:"We\u2019ll send a discount code to your email address."})]})]}),(0,yo.jsxs)(Va,{children:[o&&(0,yo.jsx)(Ha,{children:"3."}),(0,yo.jsxs)(Ga,{children:[o?(0,yo.jsx)(Ka,{children:"Use your coupon when booking"}):(0,yo.jsx)(Ka,{children:"3. Add coupon at checkout"}),(0,yo.jsx)(Ya,{children:"Find your next stay and apply your discount code to any property in Australia."})]})]})]}),(0,yo.jsxs)(Ja,{onClick:d,children:[(0,yo.jsx)(Qa,{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,yo.jsx)("path",{d:"M30 17.5V50M30 17.5H21.1607C19.8583 17.5 18.6092 16.9732 17.6883 16.0355C16.7674 15.0978 16.25 13.8261 16.25 12.5C16.25 11.1739 16.7674 9.90215 17.6883 8.96447C18.6092 8.02677 19.8583 7.5 21.1607 7.5C28.0357 7.5 30 17.5 30 17.5ZM30 17.5H38.8392C40.1417 17.5 41.3907 16.9732 42.3117 16.0355C43.2325 15.0978 43.75 13.8261 43.75 12.5C43.75 11.1739 43.2325 9.90215 42.3117 8.96447C41.3907 8.02677 40.1417 7.5 38.8392 7.5C31.9642 7.5 30 17.5 30 17.5ZM12.5 30H47.5V44.5C47.5 47.3002 47.5 48.7005 46.955 49.77C46.4757 50.7108 45.7108 51.4757 44.77 51.955C43.7005 52.5 42.3003 52.5 39.5 52.5H20.5C17.6997 52.5 16.2996 52.5 15.2301 51.955C14.2892 51.4757 13.5243 50.7108 13.045 49.77C12.5 48.7005 12.5 47.3002 12.5 44.5V30ZM11.5 30H48.5C49.9002 30 50.6003 30 51.135 29.7275C51.6055 29.4877 51.9878 29.1055 52.2275 28.635C52.5 28.1003 52.5 27.4002 52.5 26V21.5C52.5 20.0999 52.5 19.3998 52.2275 18.865C51.9878 18.3946 51.6055 18.0122 51.135 17.7725C50.6003 17.5 49.9002 17.5 48.5 17.5H11.5C10.0999 17.5 9.3998 17.5 8.86503 17.7725C8.39463 18.0122 8.01217 18.3946 7.77247 18.865C7.5 19.3998 7.5 20.0999 7.5 21.5V26C7.5 27.4002 7.5 28.1003 7.77247 28.635C8.01217 29.1055 8.39463 29.4877 8.86503 29.7275C9.3998 30 10.0999 30 11.5 30Z",stroke:ko.J2.White.color,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,yo.jsx)(Za,{children:"Get your code"})]})]}),(0,yo.jsx)(ba.A,{}),l&&(0,yo.jsx)(cs,{getCodePopup:l,handleClosePopup:d})]})},ls="8.22.0",us=globalThis;function ds(e,t,n){const o=n||us,r=o.__SENTRY__=o.__SENTRY__||{},i=r[ls]=r[ls]||{};return i[e]||(i[e]=t())}const bs="production";function Ms(){return fs(us),us}function fs(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||ls,t[ls]=t[ls]||{}}const zs=Object.prototype.toString;function hs(e){switch(zs.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return ws(e,Error)}}function Os(e,t){return zs.call(e)===`[object ${t}]`}function As(e){return Os(e,"ErrorEvent")}function ms(e){return Os(e,"DOMError")}function gs(e){return Os(e,"String")}function ys(e){return"object"===typeof e&&null!==e&&"__sentry_template_string__"in e&&"__sentry_template_values__"in e}function vs(e){return null===e||ys(e)||"object"!==typeof e&&"function"!==typeof e}function qs(e){return Os(e,"Object")}function _s(e){return"undefined"!==typeof Event&&ws(e,Event)}function Ws(e){return Boolean(e&&e.then&&"function"===typeof e.then)}function ws(e,t){try{return e instanceof t}catch(n){return!1}}function Rs(e){return!("object"!==typeof e||null===e||!e.__isVue&&!e._isVue)}const Ss=us,xs=80;function Es(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return"<unknown>";try{let n=e;const o=5,r=[];let i=0,a=0;const s=" > ",c=s.length;let p;const l=Array.isArray(t)?t:t.keyAttrs,u=!Array.isArray(t)&&t.maxStringLength||xs;for(;n&&i++<o&&(p=Ts(n,l),!("html"===p||i>1&&a+r.length*c+p.length>=u));)r.push(p),a+=p.length,n=n.parentNode;return r.reverse().join(s)}catch(n){return"<unknown>"}}function Ts(e,t){const n=e,o=[];if(!n||!n.tagName)return"";if(Ss.HTMLElement&&n instanceof HTMLElement&&n.dataset){if(n.dataset.sentryComponent)return n.dataset.sentryComponent;if(n.dataset.sentryElement)return n.dataset.sentryElement}o.push(n.tagName.toLowerCase());const r=t&&t.length?t.filter((e=>n.getAttribute(e))).map((e=>[e,n.getAttribute(e)])):null;if(r&&r.length)r.forEach((e=>{o.push(`[${e[0]}="${e[1]}"]`)}));else{n.id&&o.push(`#${n.id}`);const e=n.className;if(e&&gs(e)){const t=e.split(/\s+/);for(const e of t)o.push(`.${e}`)}}const i=["aria-label","type","name","title","alt"];for(const a of i){const e=n.getAttribute(a);e&&o.push(`[${a}="${e}"]`)}return o.join("")}function Cs(){try{return Ss.document.location.href}catch(e){return""}}function Ns(e){if(!Ss.HTMLElement)return null;let t=e;for(let n=0;n<5;n++){if(!t)return null;if(t instanceof HTMLElement){if(t.dataset.sentryComponent)return t.dataset.sentryComponent;if(t.dataset.sentryElement)return t.dataset.sentryElement}t=t.parentNode}return null}const Ls="undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,ks=["debug","info","warn","error","log","assert","trace"],Ps={};function Is(e){if(!("console"in us))return e();const t=us.console,n={},o=Object.keys(Ps);o.forEach((e=>{const o=Ps[e];n[e]=t[e],t[e]=o}));try{return e()}finally{o.forEach((e=>{t[e]=n[e]}))}}const Bs=function(){let e=!1;const t={enable:()=>{e=!0},disable:()=>{e=!1},isEnabled:()=>e};return Ls?ks.forEach((n=>{t[n]=function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e&&Is((()=>{us.console[n](`Sentry Logger [${n}]:`,...o)}))}})):ks.forEach((e=>{t[e]=()=>{}})),t}();function Ds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"string"!==typeof e||0===t||e.length<=t?e:`${e.slice(0,t)}...`}function $s(e,t){if(!Array.isArray(e))return"";const n=[];for(let r=0;r<e.length;r++){const t=e[r];try{Rs(t)?n.push("[VueViewModel]"):n.push(String(t))}catch(o){n.push("[value cannot be serialized]")}}return n.join(t)}function js(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!!gs(e)&&(Os(t,"RegExp")?t.test(e):!!gs(t)&&(n?e===t:e.includes(t)))}function Xs(e){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).some((n=>js(e,n,t)))}function Us(e,t,n){if(!(t in e))return;const o=e[t],r=n(o);"function"===typeof r&&Vs(r,o),e[t]=r}function Fs(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch(o){Ls&&Bs.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function Vs(e,t){try{const n=t.prototype||{};e.prototype=t.prototype=n,Fs(e,"__sentry_original__",t)}catch(n){}}function Hs(e){return e.__sentry_original__}function Gs(e){if(hs(e))return{message:e.message,name:e.name,stack:e.stack,...Ys(e)};if(_s(e)){const t={type:e.type,target:Ks(e.target),currentTarget:Ks(e.currentTarget),...Ys(e)};return"undefined"!==typeof CustomEvent&&ws(e,CustomEvent)&&(t.detail=e.detail),t}return e}function Ks(e){try{return t=e,"undefined"!==typeof Element&&ws(t,Element)?Es(e):Object.prototype.toString.call(e)}catch(n){return"<unknown>"}var t}function Ys(e){if("object"===typeof e&&null!==e){const t={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}return{}}function Js(e){return Qs(e,new Map)}function Qs(e,t){if(function(e){if(!qs(e))return!1;try{const t=Object.getPrototypeOf(e).constructor.name;return!t||"Object"===t}catch(t){return!0}}(e)){const n=t.get(e);if(void 0!==n)return n;const o={};t.set(e,o);for(const r of Object.keys(e))"undefined"!==typeof e[r]&&(o[r]=Qs(e[r],t));return o}if(Array.isArray(e)){const n=t.get(e);if(void 0!==n)return n;const o=[];return t.set(e,o),e.forEach((e=>{o.push(Qs(e,t))})),o}return e}function Zs(){const e=us,t=e.crypto||e.msCrypto;let n=()=>16*Math.random();try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(n=()=>{const e=new Uint8Array(1);return t.getRandomValues(e),e[0]})}catch(It){}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&n())>>e/4).toString(16)))}function ec(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function tc(e){const{message:t,event_id:n}=e;if(t)return t;const o=ec(e);return o?o.type&&o.value?`${o.type}: ${o.value}`:o.type||o.value||n||"<unknown>":n||"<unknown>"}function nc(e,t,n){const o=e.exception=e.exception||{},r=o.values=o.values||[],i=r[0]=r[0]||{};i.value||(i.value=t||""),i.type||(i.type=n||"Error")}function oc(e,t){const n=ec(e);if(!n)return;const o=n.mechanism;if(n.mechanism={type:"generic",handled:!0,...o,...t},t&&"data"in t){const e={...o&&o.data,...t.data};n.mechanism.data=e}}function rc(e){if(e&&e.__sentry_captured__)return!0;try{Fs(e,"__sentry_captured__",!0)}catch(t){}return!1}function ic(e){return Array.isArray(e)?e:[e]}function ac(){return{traceId:Zs(),spanId:Zs().substring(16)}}const sc=1e3;function cc(){return Date.now()/sc}const pc=function(){const{performance:e}=us;if(!e||!e.now)return cc;const t=Date.now()-e.now(),n=void 0==e.timeOrigin?t:e.timeOrigin;return()=>(n+e.now())/sc}();let lc;const uc=(()=>{const{performance:e}=us;if(!e||!e.now)return void(lc="none");const t=36e5,n=e.now(),o=Date.now(),r=e.timeOrigin?Math.abs(e.timeOrigin+n-o):t,i=r<t,a=e.timing&&e.timing.navigationStart,s="number"===typeof a?Math.abs(a+n-o):t;return i||s<t?r<=s?(lc="timeOrigin",e.timeOrigin):(lc="navigationStart",a):(lc="dateNow",o)})();function dc(e){const t=pc(),n={sid:Zs(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return Js({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"===typeof e.did||"string"===typeof e.did?`${e.did}`:void 0,duration:e.duration,abnormal_mechanism:e.abnormal_mechanism,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(n)};return e&&bc(n,e),n}function bc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||pc(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:Zs()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"===typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"===typeof t.duration)e.duration=t.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"===typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}const Mc="_sentrySpan";function fc(e,t){t?Fs(e,Mc,t):delete e[Mc]}function zc(e){return e[Mc]}class hc{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=ac()}clone(){const e=new hc;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},e._user=this._user,e._level=this._level,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._requestSession=this._requestSession,e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e._lastEventId=this._lastEventId,fc(e,zc(this)),e}setClient(e){this._client=e}setLastEventId(e){this._lastEventId=e}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&bc(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;const t="function"===typeof e?e(this):e,[n,o]=t instanceof Oc?[t.getScopeData(),t.getRequestSession()]:qs(t)?[e,e.requestSession]:[],{tags:r,extra:i,user:a,contexts:s,level:c,fingerprint:p=[],propagationContext:l}=n||{};return this._tags={...this._tags,...r},this._extra={...this._extra,...i},this._contexts={...this._contexts,...s},a&&Object.keys(a).length&&(this._user=a),c&&(this._level=c),p.length&&(this._fingerprint=p),l&&(this._propagationContext=l),o&&(this._requestSession=o),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._session=void 0,fc(this,void 0),this._attachments=[],this._propagationContext=ac(),this._notifyScopeListeners(),this}addBreadcrumb(e,t){const n="number"===typeof t?t:100;if(n<=0)return this;const o={timestamp:cc(),...e},r=this._breadcrumbs;return r.push(o),this._breadcrumbs=r.length>n?r.slice(-n):r,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:zc(this)}}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}captureException(e,t){const n=t&&t.event_id?t.event_id:Zs();if(!this._client)return Bs.warn("No client configured on scope - will not capture exception!"),n;const o=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:o,...t,event_id:n},this),n}captureMessage(e,t,n){const o=n&&n.event_id?n.event_id:Zs();if(!this._client)return Bs.warn("No client configured on scope - will not capture message!"),o;const r=new Error(e);return this._client.captureMessage(e,t,{originalException:e,syntheticException:r,...n,event_id:o},this),o}captureEvent(e,t){const n=t&&t.event_id?t.event_id:Zs();return this._client?(this._client.captureEvent(e,{...t,event_id:n},this),n):(Bs.warn("No client configured on scope - will not capture event!"),n)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}}const Oc=hc;class Ac{constructor(e,t){let n,o;n=e||new Oc,o=t||new Oc,this._stack=[{scope:n}],this._isolationScope=o}withScope(e){const t=this._pushScope();let n;try{n=e(t)}catch(o){throw this._popScope(),o}return Ws(n)?n.then((e=>(this._popScope(),e)),(e=>{throw this._popScope(),e})):(this._popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e}_popScope(){return!(this._stack.length<=1)&&!!this._stack.pop()}}function mc(){const e=fs(Ms());return e.stack=e.stack||new Ac(ds("defaultCurrentScope",(()=>new Oc)),ds("defaultIsolationScope",(()=>new Oc)))}function gc(e){return mc().withScope(e)}function yc(e,t){const n=mc();return n.withScope((()=>(n.getStackTop().scope=e,t(e))))}function vc(e){return mc().withScope((()=>e(mc().getIsolationScope())))}function qc(e){const t=fs(e);return t.acs?t.acs:{withIsolationScope:vc,withScope:gc,withSetScope:yc,withSetIsolationScope:(e,t)=>vc(t),getCurrentScope:()=>mc().getScope(),getIsolationScope:()=>mc().getIsolationScope()}}function _c(){return qc(Ms()).getCurrentScope()}function Wc(){return qc(Ms()).getIsolationScope()}function wc(){const e=qc(Ms());for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(2===n.length){const[t,o]=n;return t?e.withSetScope(t,o):e.withScope(o)}return e.withScope(n[0])}function Rc(){return _c().getClient()}const Sc=50,xc="?",Ec=/\(error: (.*)\)/,Tc=/captureMessage|captureException/;function Cc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const o=t.sort(((e,t)=>e[0]-t[0])).map((e=>e[1]));return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=[],i=e.split("\n");for(let a=t;a<i.length;a++){const e=i[a];if(e.length>1024)continue;const t=Ec.test(e)?e.replace(Ec,"$1"):e;if(!t.match(/\S*Error: /)){for(const e of o){const n=e(t);if(n){r.push(n);break}}if(r.length>=Sc+n)break}}return function(e){if(!e.length)return[];const t=Array.from(e);/sentryWrapped/.test(Nc(t).function||"")&&t.pop();t.reverse(),Tc.test(Nc(t).function||"")&&(t.pop(),Tc.test(Nc(t).function||"")&&t.pop());return t.slice(0,Sc).map((e=>({...e,filename:e.filename||Nc(t).filename,function:e.function||xc})))}(r.slice(n))}}function Nc(e){return e[e.length-1]||{}}const Lc="<anonymous>";function kc(e){try{return e&&"function"===typeof e&&e.name||Lc}catch(t){return Lc}}function Pc(e){const t=e.exception;if(t){const e=[];try{return t.values.forEach((t=>{t.stacktrace.frames&&e.push(...t.stacktrace.frames)})),e}catch(n){return}}}function Ic(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;try{return Dc("",e,t,n)}catch(o){return{ERROR:`**non-serializable** (${o})`}}}function Bc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:102400;const o=Ic(e,t);return r=o,function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(r))>n?Bc(e,t-1,n):o;var r}function Dc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1/0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){const e="function"===typeof WeakSet,t=e?new WeakSet:[];return[function(n){if(e)return!!t.has(n)||(t.add(n),!1);for(let e=0;e<t.length;e++)if(t[e]===n)return!0;return t.push(n),!1},function(n){if(e)t.delete(n);else for(let e=0;e<t.length;e++)if(t[e]===n){t.splice(e,1);break}}]}();const[i,a]=r;if(null==t||["number","boolean","string"].includes(typeof t)&&!Number.isNaN(t))return t;const s=function(e,t){try{if("domain"===e&&t&&"object"===typeof t&&t._events)return"[Domain]";if("domainEmitter"===e)return"[DomainEmitter]";if("undefined"!==typeof global&&t===global)return"[Global]";if("undefined"!==typeof window&&t===window)return"[Window]";if("undefined"!==typeof document&&t===document)return"[Document]";if(Rs(t))return"[VueViewModel]";if(qs(n=t)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n)return"[SyntheticEvent]";if("number"===typeof t&&t!==t)return"[NaN]";if("function"===typeof t)return`[Function: ${kc(t)}]`;if("symbol"===typeof t)return`[${String(t)}]`;if("bigint"===typeof t)return`[BigInt: ${String(t)}]`;const o=function(e){const t=Object.getPrototypeOf(e);return t?t.constructor.name:"null prototype"}(t);return/^HTML(\w*)Element$/.test(o)?`[HTMLElement: ${o}]`:`[object ${o}]`}catch(o){return`**non-serializable** (${o})`}var n}(e,t);if(!s.startsWith("[object "))return s;if(t.__sentry_skip_normalization__)return t;const c="number"===typeof t.__sentry_override_normalization_depth__?t.__sentry_override_normalization_depth__:n;if(0===c)return s.replace("object ","");if(i(t))return"[Circular ~]";const p=t;if(p&&"function"===typeof p.toJSON)try{return Dc("",p.toJSON(),c-1,o,r)}catch(b){}const l=Array.isArray(t)?[]:{};let u=0;const d=Gs(t);for(const M in d){if(!Object.prototype.hasOwnProperty.call(d,M))continue;if(u>=o){l[M]="[MaxProperties ~]";break}const e=d[M];l[M]=Dc(M,e,c-1,o,r),u++}return a(t),l}var $c;function jc(e){return new Uc((t=>{t(e)}))}function Xc(e){return new Uc(((t,n)=>{n(e)}))}!function(e){e[e.PENDING=0]="PENDING";e[e.RESOLVED=1]="RESOLVED";e[e.REJECTED=2]="REJECTED"}($c||($c={}));class Uc{constructor(e){Uc.prototype.__init.call(this),Uc.prototype.__init2.call(this),Uc.prototype.__init3.call(this),Uc.prototype.__init4.call(this),this._state=$c.PENDING,this._handlers=[];try{e(this._resolve,this._reject)}catch(t){this._reject(t)}}then(e,t){return new Uc(((n,o)=>{this._handlers.push([!1,t=>{if(e)try{n(e(t))}catch(r){o(r)}else n(t)},e=>{if(t)try{n(t(e))}catch(r){o(r)}else o(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new Uc(((t,n)=>{let o,r;return this.then((t=>{r=!1,o=t,e&&e()}),(t=>{r=!0,o=t,e&&e()})).then((()=>{r?n(o):t(o)}))}))}__init(){this._resolve=e=>{this._setResult($c.RESOLVED,e)}}__init2(){this._reject=e=>{this._setResult($c.REJECTED,e)}}__init3(){this._setResult=(e,t)=>{this._state===$c.PENDING&&(Ws(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init4(){this._executeHandlers=()=>{if(this._state===$c.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach((e=>{e[0]||(this._state===$c.RESOLVED&&e[1](this._value),this._state===$c.REJECTED&&e[2](this._value),e[0]=!0)}))}}}const Fc="undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;function Vc(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new Uc(((r,i)=>{const a=e[o];if(null===t||"function"!==typeof a)r(t);else{const s=a({...t},n);Fc&&a.id&&null===s&&Bs.log(`Event processor "${a.id}" dropped event`),Ws(s)?s.then((t=>Vc(e,t,n,o+1).then(r))).then(null,i):Vc(e,s,n,o+1).then(r).then(null,i)}}))}const Hc="baggage",Gc="sentry-",Kc=/^sentry-/,Yc=8192;function Jc(e){const t=function(e){if(!e||!gs(e)&&!Array.isArray(e))return;if(Array.isArray(e))return e.reduce(((e,t)=>{const n=Zc(t);return Object.entries(n).forEach((t=>{let[n,o]=t;e[n]=o})),e}),{});return Zc(e)}(e);if(!t)return;const n=Object.entries(t).reduce(((e,t)=>{let[n,o]=t;if(n.match(Kc)){e[n.slice(Gc.length)]=o}return e}),{});return Object.keys(n).length>0?n:void 0}function Qc(e){if(!e)return;return function(e){if(0===Object.keys(e).length)return;return Object.entries(e).reduce(((e,t,n)=>{let[o,r]=t;const i=`${encodeURIComponent(o)}=${encodeURIComponent(r)}`,a=0===n?i:`${e},${i}`;return a.length>Yc?(Ls&&Bs.warn(`Not adding key: ${o} with val: ${r} to baggage header due to exceeding baggage size limits.`),e):a}),"")}(Object.entries(e).reduce(((e,t)=>{let[n,o]=t;return o&&(e[`${Gc}${n}`]=o),e}),{}))}function Zc(e){return e.split(",").map((e=>e.split("=").map((e=>decodeURIComponent(e.trim()))))).reduce(((e,t)=>{let[n,o]=t;return n&&o&&(e[n]=o),e}),{})}const ep="sentry.source",tp="sentry.sample_rate",np="sentry.op",op="sentry.origin",rp="sentry.idle_span_finish_reason",ip="sentry.measurement_unit",ap="sentry.measurement_value",sp="sentry.exclusive_time",cp=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function pp(e,t){const n=function(e){if(!e)return;const t=e.match(cp);if(!t)return;let n;return"1"===t[3]?n=!0:"0"===t[3]&&(n=!1),{traceId:t[1],parentSampled:n,parentSpanId:t[2]}}(e),o=Jc(t),{traceId:r,parentSpanId:i,parentSampled:a}=n||{};return n?{traceId:r||Zs(),parentSpanId:i||Zs().substring(16),spanId:Zs().substring(16),sampled:a,dsc:o||{}}:{traceId:r||Zs(),spanId:Zs().substring(16)}}function lp(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zs(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Zs().substring(16),n=arguments.length>2?arguments[2]:void 0,o="";return void 0!==n&&(o=n?"-1":"-0"),`${e}-${t}${o}`}const up="_sentryMetrics";function dp(e){const t=e[up];if(!t)return;const n={};for(const[,[o,r]]of t){(n[o]||(n[o]=[])).push(Js(r))}return n}const bp=0,Mp=1,fp=2;function zp(e,t){e.setAttribute("http.response.status_code",t);const n=function(e){if(e<400&&e>=100)return{code:Mp};if(e>=400&&e<500)switch(e){case 401:return{code:fp,message:"unauthenticated"};case 403:return{code:fp,message:"permission_denied"};case 404:return{code:fp,message:"not_found"};case 409:return{code:fp,message:"already_exists"};case 413:return{code:fp,message:"failed_precondition"};case 429:return{code:fp,message:"resource_exhausted"};case 499:return{code:fp,message:"cancelled"};default:return{code:fp,message:"invalid_argument"}}if(e>=500&&e<600)switch(e){case 501:return{code:fp,message:"unimplemented"};case 503:return{code:fp,message:"unavailable"};case 504:return{code:fp,message:"deadline_exceeded"};default:return{code:fp,message:"internal_error"}}return{code:fp,message:"unknown_error"}}(t);"unknown_error"!==n.message&&e.setStatus(n)}const hp=1;function Op(e){const{spanId:t,traceId:n}=e.spanContext(),{data:o,op:r,parent_span_id:i,status:a,origin:s}=vp(e);return Js({parent_span_id:i,span_id:t,trace_id:n,data:o,op:r,status:a,origin:s})}function Ap(e){const{spanId:t,traceId:n}=e.spanContext(),{parent_span_id:o}=vp(e);return Js({parent_span_id:o,span_id:t,trace_id:n})}function mp(e){const{traceId:t,spanId:n}=e.spanContext();return lp(t,n,qp(e))}function gp(e){return"number"===typeof e?yp(e):Array.isArray(e)?e[0]+e[1]/1e9:e instanceof Date?yp(e.getTime()):pc()}function yp(e){return e>9999999999?e/1e3:e}function vp(e){if(function(e){return"function"===typeof e.getSpanJSON}(e))return e.getSpanJSON();try{const{spanId:t,traceId:n}=e.spanContext();if(function(e){const t=e;return!!t.attributes&&!!t.startTime&&!!t.name&&!!t.endTime&&!!t.status}(e)){const{attributes:o,startTime:r,name:i,endTime:a,parentSpanId:s,status:c}=e;return Js({span_id:t,trace_id:n,data:o,description:i,parent_span_id:s,start_timestamp:gp(r),timestamp:gp(a)||void 0,status:_p(c),op:o[np],origin:o[op],_metrics_summary:dp(e)})}return{span_id:t,trace_id:n}}catch(t){return{}}}function qp(e){const{traceFlags:t}=e.spanContext();return t===hp}function _p(e){if(e&&e.code!==bp)return e.code===Mp?"ok":e.message||"unknown_error"}const Wp="_sentryChildSpans",wp="_sentryRootSpan";function Rp(e,t){const n=e[wp]||e;Fs(t,wp,n),e[Wp]?e[Wp].add(t):Fs(e,Wp,new Set([t]))}function Sp(e){const t=new Set;return function e(n){if(!t.has(n)&&qp(n)){t.add(n);const o=n[Wp]?Array.from(n[Wp]):[];for(const t of o)e(t)}}(e),Array.from(t)}function xp(e){return e[wp]||e}function Ep(){const e=qc(Ms());return e.getActiveSpan?e.getActiveSpan():zc(_c())}const Tp="_frozenDsc";function Cp(e,t){Fs(e,Tp,t)}function Np(e,t){const n=t.getOptions(),{publicKey:o}=t.getDsn()||{},r=Js({environment:n.environment||bs,release:n.release,public_key:o,trace_id:e});return t.emit("createDsc",r),r}function Lp(e){const t=Rc();if(!t)return{};const n=Np(vp(e).trace_id||"",t),o=xp(e),r=o[Tp];if(r)return r;const i=o.spanContext().traceState,a=i&&i.get("sentry.dsc"),s=a&&Jc(a);if(s)return s;const c=vp(o),p=c.data||{},l=p[tp];null!=l&&(n.sample_rate=`${l}`);const u=p[ep],d=c.description;return"url"!==u&&d&&(n.transaction=d),n.sampled=String(qp(o)),t.emit("createDsc",n,o),n}function kp(e,t){const{fingerprint:n,span:o,breadcrumbs:r,sdkProcessingMetadata:i}=t;!function(e,t){const{extra:n,tags:o,user:r,contexts:i,level:a,transactionName:s}=t,c=Js(n);c&&Object.keys(c).length&&(e.extra={...c,...e.extra});const p=Js(o);p&&Object.keys(p).length&&(e.tags={...p,...e.tags});const l=Js(r);l&&Object.keys(l).length&&(e.user={...l,...e.user});const u=Js(i);u&&Object.keys(u).length&&(e.contexts={...u,...e.contexts});a&&(e.level=a);s&&"transaction"!==e.type&&(e.transaction=s)}(e,t),o&&function(e,t){e.contexts={trace:Ap(t),...e.contexts},e.sdkProcessingMetadata={dynamicSamplingContext:Lp(t),...e.sdkProcessingMetadata};const n=xp(t),o=vp(n).description;o&&!e.transaction&&"transaction"===e.type&&(e.transaction=o)}(e,o),function(e,t){e.fingerprint=e.fingerprint?ic(e.fingerprint):[],t&&(e.fingerprint=e.fingerprint.concat(t));e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}(e,n),function(e,t){const n=[...e.breadcrumbs||[],...t];e.breadcrumbs=n.length?n:void 0}(e,r),function(e,t){e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...t}}(e,i)}function Pp(e,t){const{extra:n,tags:o,user:r,contexts:i,level:a,sdkProcessingMetadata:s,breadcrumbs:c,fingerprint:p,eventProcessors:l,attachments:u,propagationContext:d,transactionName:b,span:M}=t;Ip(e,"extra",n),Ip(e,"tags",o),Ip(e,"user",r),Ip(e,"contexts",i),Ip(e,"sdkProcessingMetadata",s),a&&(e.level=a),b&&(e.transactionName=b),M&&(e.span=M),c.length&&(e.breadcrumbs=[...e.breadcrumbs,...c]),p.length&&(e.fingerprint=[...e.fingerprint,...p]),l.length&&(e.eventProcessors=[...e.eventProcessors,...l]),u.length&&(e.attachments=[...e.attachments,...u]),e.propagationContext={...e.propagationContext,...d}}function Ip(e,t,n){if(n&&Object.keys(n).length){e[t]={...e[t]};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[t][o]=n[o])}}function Bp(e,t,n,o,r,i){const{normalizeDepth:a=3,normalizeMaxBreadth:s=1e3}=e,c={...t,event_id:t.event_id||n.event_id||Zs(),timestamp:t.timestamp||cc()},p=n.integrations||e.integrations.map((e=>e.name));!function(e,t){const{environment:n,release:o,dist:r,maxValueLength:i=250}=t;"environment"in e||(e.environment="environment"in t?n:bs);void 0===e.release&&void 0!==o&&(e.release=o);void 0===e.dist&&void 0!==r&&(e.dist=r);e.message&&(e.message=Ds(e.message,i));const a=e.exception&&e.exception.values&&e.exception.values[0];a&&a.value&&(a.value=Ds(a.value,i));const s=e.request;s&&s.url&&(s.url=Ds(s.url,i))}(c,e),function(e,t){t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...t])}(c,p),r&&r.emit("applyFrameMetadata",t),void 0===t.type&&function(e,t){const n=us._sentryDebugIds;if(!n)return;let o;const r=Dp.get(t);r?o=r:(o=new Map,Dp.set(t,o));const i=Object.entries(n).reduce(((e,n)=>{let r,[i,a]=n;const s=o.get(i);s?r=s:(r=t(i),o.set(i,r));for(let t=r.length-1;t>=0;t--){const n=r[t];if(n.filename){e[n.filename]=a;break}}return e}),{});try{e.exception.values.forEach((e=>{e.stacktrace.frames.forEach((e=>{e.filename&&(e.debug_id=i[e.filename])}))}))}catch(a){}}(c,e.stackParser);const l=function(e,t){if(!t)return e;const n=e?e.clone():new Oc;return n.update(t),n}(o,n.captureContext);n.mechanism&&oc(c,n.mechanism);const u=r?r.getEventProcessors():[],d=ds("globalScope",(()=>new Oc)).getScopeData();if(i){Pp(d,i.getScopeData())}if(l){Pp(d,l.getScopeData())}const b=[...n.attachments||[],...d.attachments];b.length&&(n.attachments=b),kp(c,d);return Vc([...u,...d.eventProcessors],c,n).then((e=>(e&&function(e){const t={};try{e.exception.values.forEach((e=>{e.stacktrace.frames.forEach((e=>{e.debug_id&&(e.abs_path?t[e.abs_path]=e.debug_id:e.filename&&(t[e.filename]=e.debug_id),delete e.debug_id)}))}))}catch(o){}if(0===Object.keys(t).length)return;e.debug_meta=e.debug_meta||{},e.debug_meta.images=e.debug_meta.images||[];const n=e.debug_meta.images;Object.entries(t).forEach((e=>{let[t,o]=e;n.push({type:"sourcemap",code_file:t,debug_id:o})}))}(e),"number"===typeof a&&a>0?function(e,t,n){if(!e)return null;const o={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map((e=>({...e,...e.data&&{data:Ic(e.data,t,n)}})))},...e.user&&{user:Ic(e.user,t,n)},...e.contexts&&{contexts:Ic(e.contexts,t,n)},...e.extra&&{extra:Ic(e.extra,t,n)}};e.contexts&&e.contexts.trace&&o.contexts&&(o.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(o.contexts.trace.data=Ic(e.contexts.trace.data,t,n)));e.spans&&(o.spans=e.spans.map((e=>({...e,...e.data&&{data:Ic(e.data,t,n)}}))));return o}(e,a,s):e)))}const Dp=new WeakMap;function $p(e){if(e)return function(e){return e instanceof Oc||"function"===typeof e}(e)||function(e){return Object.keys(e).some((e=>jp.includes(e)))}(e)?{captureContext:e}:e}const jp=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function Xp(e,t){return _c().captureException(e,$p(t))}function Up(e,t){return _c().captureEvent(e,t)}function Fp(e,t){Wc().setContext(e,t)}function Vp(e){const t=Rc(),n=Wc(),o=_c(),{release:r,environment:i=bs}=t&&t.getOptions()||{},{userAgent:a}=us.navigator||{},s=dc({release:r,environment:i,user:o.getUser()||n.getUser(),...a&&{userAgent:a},...e}),c=n.getSession();return c&&"ok"===c.status&&bc(c,{status:"exited"}),Hp(),n.setSession(s),o.setSession(s),s}function Hp(){const e=Wc(),t=_c(),n=t.getSession()||e.getSession();n&&function(e,t){let n={};t?n={status:t}:"ok"===e.status&&(n={status:"exited"}),bc(e,n)}(n),Gp(),e.setSession(),t.setSession()}function Gp(){const e=Wc(),t=_c(),n=Rc(),o=t.getSession()||e.getSession();o&&n&&n.captureSession(o)}function Kp(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]?Hp():Gp()}const Yp=[];function Jp(e){const t=e.defaultIntegrations||[],n=e.integrations;let o;t.forEach((e=>{e.isDefaultInstance=!0})),o=Array.isArray(n)?[...t,...n]:"function"===typeof n?ic(n(t)):t;const r=function(e){const t={};return e.forEach((e=>{const{name:n}=e,o=t[n];o&&!o.isDefaultInstance&&e.isDefaultInstance||(t[n]=e)})),Object.values(t)}(o),i=r.findIndex((e=>"Debug"===e.name));if(i>-1){const[e]=r.splice(i,1);r.push(e)}return r}function Qp(e,t){for(const n of t)n&&n.afterAllSetup&&n.afterAllSetup(e)}function Zp(e,t,n){if(n[t.name])Fc&&Bs.log(`Integration skipped because it was already installed: ${t.name}`);else{if(n[t.name]=t,-1===Yp.indexOf(t.name)&&"function"===typeof t.setupOnce&&(t.setupOnce(),Yp.push(t.name)),t.setup&&"function"===typeof t.setup&&t.setup(e),"function"===typeof t.preprocessEvent){const n=t.preprocessEvent.bind(t);e.on("preprocessEvent",((t,o)=>n(t,o,e)))}if("function"===typeof t.processEvent){const n=t.processEvent.bind(t),o=Object.assign(((t,o)=>n(t,o,e)),{id:t.name});e.addEventProcessor(o)}Fc&&Bs.log(`Integration installed: ${t.name}`)}}const el=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/,"undefined is not an object (evaluating 'a.L')",'can\'t redefine non-configurable property "solana"',"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)","Can't find variable: _AutofillCallbackHandler"],tl=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:"InboundFilters",processEvent(t,n,o){const r=o.getOptions(),i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...e.disableErrorDefaults?[]:el],ignoreTransactions:[...e.ignoreTransactions||[],...t.ignoreTransactions||[]],ignoreInternal:void 0===e.ignoreInternal||e.ignoreInternal}}(e,r);return function(e,t){if(t.ignoreInternal&&function(e){try{return"SentryError"===e.exception.values[0].type}catch(t){}return!1}(e))return Fc&&Bs.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${tc(e)}`),!0;if(function(e,t){if(e.type||!t||!t.length)return!1;return function(e){const t=[];e.message&&t.push(e.message);let n;try{n=e.exception.values[e.exception.values.length-1]}catch(o){}n&&n.value&&(t.push(n.value),n.type&&t.push(`${n.type}: ${n.value}`));return t}(e).some((e=>Xs(e,t)))}(e,t.ignoreErrors))return Fc&&Bs.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${tc(e)}`),!0;if(function(e){if(e.type)return!1;if(!e.exception||!e.exception.values||0===e.exception.values.length)return!1;return!e.message&&!e.exception.values.some((e=>e.stacktrace||e.type&&"Error"!==e.type||e.value))}(e))return Fc&&Bs.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${tc(e)}`),!0;if(function(e,t){if("transaction"!==e.type||!t||!t.length)return!1;const n=e.transaction;return!!n&&Xs(n,t)}(e,t.ignoreTransactions))return Fc&&Bs.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${tc(e)}`),!0;if(function(e,t){if(!t||!t.length)return!1;const n=nl(e);return!!n&&Xs(n,t)}(e,t.denyUrls))return Fc&&Bs.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${tc(e)}.\nUrl: ${nl(e)}`),!0;if(!function(e,t){if(!t||!t.length)return!0;const n=nl(e);return!n||Xs(n,t)}(e,t.allowUrls))return Fc&&Bs.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${tc(e)}.\nUrl: ${nl(e)}`),!0;return!1}(t,i)?null:t}}};function nl(e){try{let n;try{n=e.exception.values[0].stacktrace.frames}catch(t){}return n?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(let t=e.length-1;t>=0;t--){const n=e[t];if(n&&"<anonymous>"!==n.filename&&"[native code]"!==n.filename)return n.filename||null}return null}(n):null}catch(n){return Fc&&Bs.error(`Cannot extract url for event ${tc(e)}`),null}}let ol;const rl=new WeakMap,il=()=>({name:"FunctionToString",setupOnce(){ol=Function.prototype.toString;try{Function.prototype.toString=function(){const e=Hs(this),t=rl.has(Rc())&&void 0!==e?e:this;for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return ol.apply(t,o)}}catch(e){}},setup(e){rl.set(e,!0)}}),al=()=>{let e;return{name:"Dedupe",processEvent(t){if(t.type)return t;try{if(function(e,t){if(!t)return!1;if(function(e,t){const n=e.message,o=t.message;if(!n&&!o)return!1;if(n&&!o||!n&&o)return!1;if(n!==o)return!1;if(!cl(e,t))return!1;if(!sl(e,t))return!1;return!0}(e,t))return!0;if(function(e,t){const n=pl(t),o=pl(e);if(!n||!o)return!1;if(n.type!==o.type||n.value!==o.value)return!1;if(!cl(e,t))return!1;if(!sl(e,t))return!1;return!0}(e,t))return!0;return!1}(t,e))return Fc&&Bs.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(n){}return e=t}}};function sl(e,t){let n=Pc(e),o=Pc(t);if(!n&&!o)return!0;if(n&&!o||!n&&o)return!1;if(o.length!==n.length)return!1;for(let r=0;r<o.length;r++){const e=o[r],t=n[r];if(e.filename!==t.filename||e.lineno!==t.lineno||e.colno!==t.colno||e.function!==t.function)return!1}return!0}function cl(e,t){let n=e.fingerprint,o=t.fingerprint;if(!n&&!o)return!0;if(n&&!o||!n&&o)return!1;try{return!(n.join("")!==o.join(""))}catch(r){return!1}}function pl(e){return e.exception&&e.exception.values&&e.exception.values[0]}function ll(e,t){!0===t.debug&&(Fc?Bs.enable():Is((()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})));_c().update(t.initialScope);const n=new e(t);return function(e){_c().setClient(e)}(n),n.init(),n}const ul=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function dl(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{host:n,path:o,pass:r,port:i,projectId:a,protocol:s,publicKey:c}=e;return`${s}://${c}${t&&r?`:${r}`:""}@${n}${i?`:${i}`:""}/${o?`${o}/`:o}${a}`}function bl(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function Ml(e){const t="string"===typeof e?function(e){const t=ul.exec(e);if(!t)return void Is((()=>{console.error(`Invalid Sentry Dsn: ${e}`)}));const[n,o,r="",i="",a="",s=""]=t.slice(1);let c="",p=s;const l=p.split("/");if(l.length>1&&(c=l.slice(0,-1).join("/"),p=l.pop()),p){const e=p.match(/^\d+/);e&&(p=e[0])}return bl({host:i,pass:r,path:c,projectId:p,port:a,protocol:n,publicKey:o})}(e):bl(e);if(t&&function(e){if(!Ls)return!0;const{port:t,projectId:n,protocol:o}=e;return!["protocol","publicKey","host","projectId"].find((t=>!e[t]&&(Bs.error(`Invalid Sentry Dsn: ${t} missing`),!0)))&&(n.match(/^\d+$/)?function(e){return"http"===e||"https"===e}(o)?!t||!isNaN(parseInt(t,10))||(Bs.error(`Invalid Sentry Dsn: Invalid port ${t}`),!1):(Bs.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),!1):(Bs.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),!1))}(t))return t}const fl="7";function zl(e){const t=e.protocol?`${e.protocol}:`:"",n=e.port?`:${e.port}`:"";return`${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`}function hl(e,t){return n={sentry_key:e.publicKey,sentry_version:fl,...t&&{sentry_client:`${t.name}/${t.version}`}},Object.keys(n).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`)).join("&");var n}function Ol(e,t,n){return t||`${function(e){return`${zl(e)}${e.projectId}/envelope/`}(e)}?${hl(e,n)}`}const Al=us;function ml(){if(!("fetch"in Al))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch(e){return!1}}function gl(e){return e&&/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}const yl={},vl={};function ql(e,t){yl[e]=yl[e]||[],yl[e].push(t)}function _l(e,t){vl[e]||(t(),vl[e]=!0)}function Wl(e,t){const n=e&&yl[e];if(n)for(const r of n)try{r(t)}catch(o){Ls&&Bs.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${kc(r)}\nError:`,o)}}const wl=us;const Rl=us;let Sl;function xl(e){const t="history";ql(t,e),_l(t,El)}function El(){if(!function(){const e=wl.chrome,t=e&&e.app&&e.app.runtime,n="history"in wl&&!!wl.history.pushState&&!!wl.history.replaceState;return!t&&n}())return;const e=Rl.onpopstate;function t(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];const r=n.length>2?n[2]:void 0;if(r){const e=Sl,t=String(r);Sl=t;Wl("history",{from:e,to:t})}return e.apply(this,n)}}Rl.onpopstate=function(){const t=Rl.location.href,n=Sl;Sl=t;if(Wl("history",{from:n,to:t}),e)try{for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return e.apply(this,r)}catch(a){}},Us(Rl.history,"pushState",t),Us(Rl.history,"replaceState",t)}function Tl(e){return[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]]}function Cl(e,t){const[n,o]=e;return[n,[...o,t]]}function Nl(e,t){const n=e[1];for(const o of n){if(t(o,o[0].type))return!0}return!1}function Ll(e){return us.__SENTRY__&&us.__SENTRY__.encodePolyfill?us.__SENTRY__.encodePolyfill(e):(new TextEncoder).encode(e)}function kl(e){const[t,n]=e;let o=JSON.stringify(t);function r(e){"string"===typeof o?o="string"===typeof e?o+e:[Ll(o),e]:o.push("string"===typeof e?Ll(e):e)}for(const a of n){const[e,t]=a;if(r(`\n${JSON.stringify(e)}\n`),"string"===typeof t||t instanceof Uint8Array)r(t);else{let e;try{e=JSON.stringify(t)}catch(i){e=JSON.stringify(Ic(t))}r(e)}}return"string"===typeof o?o:function(e){const t=e.reduce(((e,t)=>e+t.length),0),n=new Uint8Array(t);let o=0;for(const r of e)n.set(r,o),o+=r.length;return n}(o)}function Pl(e){return[{type:"span"},e]}function Il(e){const t="string"===typeof e.data?Ll(e.data):e.data;return[Js({type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),t]}const Bl={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket"};function Dl(e){return Bl[e]}function $l(e){if(!e||!e.sdk)return;const{name:t,version:n}=e.sdk;return{name:t,version:n}}function jl(e,t,n,o){const r=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:e.event_id,sent_at:(new Date).toISOString(),...t&&{sdk:t},...!!n&&o&&{dsn:dl(o)},...r&&{trace:Js({...r})}}}class Xl extends Error{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}function Ul(e){if("boolean"===typeof e)return Number(e);const t="string"===typeof e?parseFloat(e):e;if(!("number"!==typeof t||isNaN(t)||t<0||t>1))return t;Fc&&Bs.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`)}const Fl="Not capturing exception because it's already been captured.";class Vl{constructor(e){if(this._options=e,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],e.dsn?this._dsn=Ml(e.dsn):Fc&&Bs.warn("No DSN provided, client will not send events."),this._dsn){const t=Ol(this._dsn,e.tunnel,e._metadata?e._metadata.sdk:void 0);this._transport=e.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}}captureException(e,t,n){const o=Zs();if(rc(e))return Fc&&Bs.log(Fl),o;const r={event_id:o,...t};return this._process(this.eventFromException(e,r).then((e=>this._captureEvent(e,r,n)))),r.event_id}captureMessage(e,t,n,o){const r={event_id:Zs(),...n},i=ys(e)?e:String(e),a=vs(e)?this.eventFromMessage(i,t,r):this.eventFromException(e,r);return this._process(a.then((e=>this._captureEvent(e,r,o)))),r.event_id}captureEvent(e,t,n){const o=Zs();if(t&&t.originalException&&rc(t.originalException))return Fc&&Bs.log(Fl),o;const r={event_id:o,...t},i=(e.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(e,r,i||n)),r.event_id}captureSession(e){"string"!==typeof e.release?Fc&&Bs.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),bc(e,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(e){const t=this._transport;return t?(this.emit("flush"),this._isClientDoneProcessing(e).then((n=>t.flush(e).then((e=>n&&e))))):jc(!0)}close(e){return this.flush(e).then((e=>(this.getOptions().enabled=!1,this.emit("close"),e)))}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}init(){this._isEnabled()&&this._setupIntegrations()}getIntegrationByName(e){return this._integrations[e]}addIntegration(e){const t=this._integrations[e.name];Zp(this,e,this._integrations),t||Qp(this,[e])}sendEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.emit("beforeSendEvent",e,t);let n=function(e,t,n,o){const r=$l(n),i=e.type&&"replay_event"!==e.type?e.type:"event";!function(e,t){t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=[...e.sdk.integrations||[],...t.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...t.packages||[]])}(e,n&&n.sdk);const a=jl(e,r,o,t);return delete e.sdkProcessingMetadata,Tl(a,[[{type:i},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);for(const r of t.attachments||[])n=Cl(n,Il(r));const o=this.sendEnvelope(n);o&&o.then((t=>this.emit("afterSendEvent",e,t)),null)}sendSession(e){const t=function(e,t,n,o){const r=$l(n);return Tl({sent_at:(new Date).toISOString(),...r&&{sdk:r},...!!o&&t&&{dsn:dl(t)}},["aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()]])}(e,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(t)}recordDroppedEvent(e,t,n){if(this._options.sendClientReports){const o="number"===typeof n?n:1,r=`${e}:${t}`;Fc&&Bs.log(`Recording outcome: "${r}"${o>1?` (${o} times)`:""}`),this._outcomes[r]=(this._outcomes[r]||0)+o}}on(e,t){const n=this._hooks[e]=this._hooks[e]||[];return n.push(t),()=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)}}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];const r=this._hooks[e];r&&r.forEach((e=>e(...n)))}sendEnvelope(e){return this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport?this._transport.send(e).then(null,(e=>(Fc&&Bs.error("Error while sending event:",e),e))):(Fc&&Bs.error("Transport disabled"),jc({}))}_setupIntegrations(){const{integrations:e}=this._options;this._integrations=function(e,t){const n={};return t.forEach((t=>{t&&Zp(e,t,n)})),n}(this,e),Qp(this,e)}_updateSessionFromEvent(e,t){let n=!1,o=!1;const r=t.exception&&t.exception.values;if(r){o=!0;for(const e of r){const t=e.mechanism;if(t&&!1===t.handled){n=!0;break}}}const i="ok"===e.status;(i&&0===e.errors||i&&n)&&(bc(e,{...n&&{status:"crashed"},errors:e.errors||Number(o||n)}),this.captureSession(e))}_isClientDoneProcessing(e){return new Uc((t=>{let n=0;const o=setInterval((()=>{0==this._numProcessing?(clearInterval(o),t(!0)):(n+=1,e&&n>=e&&(clearInterval(o),t(!1)))}),1)}))}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Wc();const r=this.getOptions(),i=Object.keys(this._integrations);return!t.integrations&&i.length>0&&(t.integrations=i),this.emit("preprocessEvent",e,t),e.type||o.setLastEventId(e.event_id||t.event_id),Bp(r,e,t,n,this,o).then((e=>{if(null===e)return e;const t={...o.getPropagationContext(),...n?n.getPropagationContext():void 0};if(!(e.contexts&&e.contexts.trace)&&t){const{traceId:n,spanId:o,parentSpanId:r,dsc:i}=t;e.contexts={trace:Js({trace_id:n,span_id:o,parent_span_id:r}),...e.contexts};const a=i||Np(n,this);e.sdkProcessingMetadata={dynamicSamplingContext:a,...e.sdkProcessingMetadata}}return e}))}_captureEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return this._processEvent(e,t,n).then((e=>e.event_id),(e=>{if(Fc){const t=e;"log"===t.logLevel?Bs.log(t.message):Bs.warn(t)}}))}_processEvent(e,t,n){const o=this.getOptions(),{sampleRate:r}=o,i=Gl(e),a=Hl(e),s=e.type||"error",c=`before send for type \`${s}\``,p="undefined"===typeof r?void 0:Ul(r);if(a&&"number"===typeof p&&Math.random()>p)return this.recordDroppedEvent("sample_rate","error",e),Xc(new Xl(`Discarding event because it's not included in the random sample (sampling rate = ${r})`,"log"));const l="replay_event"===s?"replay":s,u=(e.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(e,t,n,u).then((n=>{if(null===n)throw this.recordDroppedEvent("event_processor",l,e),new Xl("An event processor returned `null`, will not send event.","log");if(t.data&&!0===t.data.__sentry__)return n;const r=function(e,t,n,o){const{beforeSend:r,beforeSendTransaction:i,beforeSendSpan:a}=t;if(Hl(n)&&r)return r(n,o);if(Gl(n)){if(n.spans&&a){const t=[];for(const o of n.spans){const n=a(o);n?t.push(n):e.recordDroppedEvent("before_send","span")}n.spans=t}if(i){if(n.spans){const e=n.spans.length;n.sdkProcessingMetadata={...n.sdkProcessingMetadata,spanCountBeforeProcessing:e}}return i(n,o)}}return n}(this,o,n,t);return function(e,t){const n=`${t} must return \`null\` or a valid event.`;if(Ws(e))return e.then((e=>{if(!qs(e)&&null!==e)throw new Xl(n);return e}),(e=>{throw new Xl(`${t} rejected with ${e}`)}));if(!qs(e)&&null!==e)throw new Xl(n);return e}(r,c)})).then((o=>{if(null===o){if(this.recordDroppedEvent("before_send",l,e),i){const t=1+(e.spans||[]).length;this.recordDroppedEvent("before_send","span",t)}throw new Xl(`${c} returned \`null\`, will not send event.`,"log")}const r=n&&n.getSession();if(!i&&r&&this._updateSessionFromEvent(r,o),i){const e=(o.sdkProcessingMetadata&&o.sdkProcessingMetadata.spanCountBeforeProcessing||0)-(o.spans?o.spans.length:0);e>0&&this.recordDroppedEvent("before_send","span",e)}const a=o.transaction_info;if(i&&a&&o.transaction!==e.transaction){const e="custom";o.transaction_info={...a,source:e}}return this.sendEvent(o,t),o})).then(null,(e=>{if(e instanceof Xl)throw e;throw this.captureException(e,{data:{__sentry__:!0},originalException:e}),new Xl(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)}))}_process(e){this._numProcessing++,e.then((e=>(this._numProcessing--,e)),(e=>(this._numProcessing--,e)))}_clearOutcomes(){const e=this._outcomes;return this._outcomes={},Object.entries(e).map((e=>{let[t,n]=e;const[o,r]=t.split(":");return{reason:o,category:r,quantity:n}}))}_flushOutcomes(){Fc&&Bs.log("Flushing outcomes...");const e=this._clearOutcomes();if(0===e.length)return void(Fc&&Bs.log("No outcomes to send"));if(!this._dsn)return void(Fc&&Bs.log("No dsn provided, will not send outcomes"));Fc&&Bs.log("Sending outcomes:",e);const t=(n=e,Tl((o=this._options.tunnel&&dl(this._dsn))?{dsn:o}:{},[[{type:"client_report"},{timestamp:r||cc(),discarded_events:n}]]));var n,o,r;this.sendEnvelope(t)}}function Hl(e){return void 0===e.type}function Gl(e){return"transaction"===e.type}function Kl(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[t],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"npm";const r=e._metadata||{};r.sdk||(r.sdk={name:`sentry.javascript.${t}`,packages:n.map((e=>({name:`${o}:@sentry/${e}`,version:ls}))),version:ls}),e._metadata=r}const Yl="undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;function Jl(e,t){const n=eu(e,t),o={type:t&&t.name,value:nu(t)};return n.length&&(o.stacktrace={frames:n}),void 0===o.type&&""===o.value&&(o.value="Unrecoverable error caught"),o}function Ql(e,t,n,o){const r=Rc(),i=r&&r.getOptions().normalizeDepth,a=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const n=e[t];if(n instanceof Error)return n}return}(t),s={__serialized__:Bc(t,i)};if(a)return{exception:{values:[Jl(e,a)]},extra:s};const c={exception:{values:[{type:_s(t)?t.constructor.name:o?"UnhandledRejection":"Error",value:iu(t,{isUnhandledRejection:o})}]},extra:s};if(n){const t=eu(e,n);t.length&&(c.exception.values[0].stacktrace={frames:t})}return c}function Zl(e,t){return{exception:{values:[Jl(e,t)]}}}function eu(e,t){const n=t.stacktrace||t.stack||"",o=function(e){if(e&&tu.test(e.message))return 1;return 0}(t),r=function(e){if("number"===typeof e.framesToPop)return e.framesToPop;return 0}(t);try{return e(n,o,r)}catch(i){}return[]}const tu=/Minified React error #\d+;/i;function nu(e){const t=e&&e.message;return t?t.error&&"string"===typeof t.error.message?t.error.message:t:"No error message"}function ou(e,t,n,o,r){let i;if(As(t)&&t.error){return Zl(e,t.error)}if(ms(t)||Os(t,"DOMException")){const r=t;if("stack"in t)i=Zl(e,t);else{const t=r.name||(ms(r)?"DOMError":"DOMException"),a=r.message?`${t}: ${r.message}`:t;i=ru(e,a,n,o),nc(i,a)}return"code"in r&&(i.tags={...i.tags,"DOMException.code":`${r.code}`}),i}if(hs(t))return Zl(e,t);if(qs(t)||_s(t)){return i=Ql(e,t,n,r),oc(i,{synthetic:!0}),i}return i=ru(e,t,n,o),nc(i,`${t}`,void 0),oc(i,{synthetic:!0}),i}function ru(e,t,n,o){const r={};if(o&&n){const o=eu(e,n);o.length&&(r.exception={values:[{value:t,stacktrace:{frames:o}}]})}if(ys(t)){const{__sentry_template_string__:e,__sentry_template_values__:n}=t;return r.logentry={message:e,params:n},r}return r.message=t,r}function iu(e,t){let{isUnhandledRejection:n}=t;const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;const n=Object.keys(Gs(e));n.sort();const o=n[0];if(!o)return"[object has no keys]";if(o.length>=t)return Ds(o,t);for(let r=n.length;r>0;r--){const e=n.slice(0,r).join(", ");if(!(e.length>t))return r===n.length?e:Ds(e,t)}return""}(e),r=n?"promise rejection":"exception";if(As(e))return`Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;if(_s(e)){return`Event \`${function(e){try{const t=Object.getPrototypeOf(e);return t?t.constructor.name:void 0}catch(t){}}(e)}\` (type=${e.type}) captured as ${r}`}return`Object captured as ${r} with keys: ${o}`}const au=us;let su=0;function cu(){return su>0}function pu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;if("function"!==typeof e)return e;try{const t=e.__sentry_wrapped__;if(t)return t;if(Hs(e))return e}catch(r){return e}const o=function(){const o=Array.prototype.slice.call(arguments);try{n&&"function"===typeof n&&n.apply(this,arguments);const r=o.map((e=>pu(e,t)));return e.apply(this,r)}catch(r){throw su++,setTimeout((()=>{su--})),wc((e=>{e.addEventProcessor((e=>(t.mechanism&&(nc(e,void 0,void 0),oc(e,t.mechanism)),e.extra={...e.extra,arguments:o},e))),Xp(r)})),r}};try{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t])}catch(i){}Vs(o,e),Fs(e,"__sentry_wrapped__",o);try{Object.getOwnPropertyDescriptor(o,"name").configurable&&Object.defineProperty(o,"name",{get:()=>e.name})}catch(i){}return o}class lu extends Vl{constructor(e){const t={parentSpanIsAlwaysRootSpan:!0,...e};Kl(t,"browser",["browser"],au.SENTRY_SDK_SOURCE||"npm"),super(t),t.sendClientReports&&au.document&&au.document.addEventListener("visibilitychange",(()=>{"hidden"===au.document.visibilityState&&this._flushOutcomes()}))}eventFromException(e,t){return function(e,t,n,o){const r=ou(e,t,n&&n.syntheticException||void 0,o);return oc(r),r.level="error",n&&n.event_id&&(r.event_id=n.event_id),jc(r)}(this._options.stackParser,e,t,this._options.attachStacktrace)}eventFromMessage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=arguments.length>2?arguments[2]:void 0;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info",o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;const i=ru(e,t,o&&o.syntheticException||void 0,r);return i.level=n,o&&o.event_id&&(i.event_id=o.event_id),jc(i)}(this._options.stackParser,e,t,n,this._options.attachStacktrace)}captureUserFeedback(e){if(!this._isEnabled())return void(Yl&&Bs.warn("SDK not enabled, will not capture user feedback."));const t=function(e,t){let{metadata:n,tunnel:o,dsn:r}=t;const i={event_id:e.event_id,sent_at:(new Date).toISOString(),...n&&n.sdk&&{sdk:{name:n.sdk.name,version:n.sdk.version}},...!!o&&!!r&&{dsn:dl(r)}},a=function(e){return[{type:"user_report"},e]}(e);return Tl(i,[a])}(e,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this.sendEnvelope(t)}_prepareEvent(e,t,n){return e.platform=e.platform||"javascript",super._prepareEvent(e,t,n)}}const uu=1e3;let du,bu,Mu;function fu(e){ql("dom",e),_l("dom",zu)}function zu(){if(!Rl.document)return;const e=Wl.bind(null,"dom"),t=hu(e,!0);Rl.document.addEventListener("click",t,!1),Rl.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach((t=>{const n=Rl[t]&&Rl[t].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(Us(n,"addEventListener",(function(t){return function(n,o,r){if("click"===n||"keypress"==n)try{const o=this,i=o.__sentry_instrumentation_handlers__=o.__sentry_instrumentation_handlers__||{},a=i[n]=i[n]||{refCount:0};if(!a.handler){const o=hu(e);a.handler=o,t.call(this,n,o,r)}a.refCount++}catch(i){}return t.call(this,n,o,r)}})),Us(n,"removeEventListener",(function(e){return function(t,n,o){if("click"===t||"keypress"==t)try{const n=this,r=n.__sentry_instrumentation_handlers__||{},i=r[t];i&&(i.refCount--,i.refCount<=0&&(e.call(this,t,i.handler,o),i.handler=void 0,delete r[t]),0===Object.keys(r).length&&delete n.__sentry_instrumentation_handlers__)}catch(r){}return e.call(this,t,n,o)}})))}))}function hu(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n=>{if(!n||n._sentryCaptured)return;const o=function(e){try{return e.target}catch(t){return null}}(n);if(function(e,t){return"keypress"===e&&(!t||!t.tagName||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&!t.isContentEditable)}(n.type,o))return;Fs(n,"_sentryCaptured",!0),o&&!o._sentryId&&Fs(o,"_sentryId",Zs());const r="keypress"===n.type?"input":n.type;if(!function(e){if(e.type!==bu)return!1;try{if(!e.target||e.target._sentryId!==Mu)return!1}catch(t){}return!0}(n)){e({event:n,name:r,global:t}),bu=n.type,Mu=o?o._sentryId:void 0}clearTimeout(du),du=Rl.setTimeout((()=>{Mu=void 0,bu=void 0}),uu)}}const Ou="__sentry_xhr_v3__";function Au(e){ql("xhr",e),_l("xhr",mu)}function mu(){if(!Rl.XMLHttpRequest)return;const e=XMLHttpRequest.prototype;Us(e,"open",(function(e){return function(){const t=1e3*pc();for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];const i=gs(o[0])?o[0].toUpperCase():void 0,a=function(e){if(gs(e))return e;try{return e.toString()}catch(t){}return}(o[1]);if(!i||!a)return e.apply(this,o);this[Ou]={method:i,url:a,request_headers:{}},"POST"===i&&a.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const s=()=>{const e=this[Ou];if(e&&4===this.readyState){try{e.status_code=this.status}catch(n){}Wl("xhr",{endTimestamp:1e3*pc(),startTimestamp:t,xhr:this})}};return"onreadystatechange"in this&&"function"===typeof this.onreadystatechange?Us(this,"onreadystatechange",(function(e){return function(){s();for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.apply(this,n)}})):this.addEventListener("readystatechange",s),Us(this,"setRequestHeader",(function(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];const[r,i]=n,a=this[Ou];return a&&gs(r)&&gs(i)&&(a.request_headers[r.toLowerCase()]=i),e.apply(this,n)}})),e.apply(this,o)}})),Us(e,"send",(function(e){return function(){const t=this[Ou];for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];if(!t)return e.apply(this,o);void 0!==o[0]&&(t.body=o[0]);return Wl("xhr",{startTimestamp:1e3*pc(),xhr:this}),e.apply(this,o)}}))}const gu=100;function yu(e,t){const n=Rc(),o=Wc();if(!n)return;const{beforeBreadcrumb:r=null,maxBreadcrumbs:i=gu}=n.getOptions();if(i<=0)return;const a={timestamp:cc(),...e},s=r?Is((()=>r(a,t))):a;null!==s&&(n.emit&&n.emit("beforeAddBreadcrumb",s,t),o.addBreadcrumb(s,i))}function vu(){"console"in us&&ks.forEach((function(e){e in us.console&&Us(us.console,e,(function(t){return Ps[e]=t,function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];Wl("console",{args:n,level:e});const r=Ps[e];r&&r.apply(us.console,n)}}))}))}function qu(e,t){const n="fetch";ql(n,e),_l(n,(()=>_u(void 0,t)))}function _u(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&!function(){if("string"===typeof EdgeRuntime)return!0;if(!ml())return!1;if(gl(Al.fetch))return!0;let e=!1;const t=Al.document;if(t&&"function"===typeof t.createElement)try{const n=t.createElement("iframe");n.hidden=!0,t.head.appendChild(n),n.contentWindow&&n.contentWindow.fetch&&(e=gl(n.contentWindow.fetch)),t.head.removeChild(n)}catch(n){Ls&&Bs.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",n)}return e}()||Us(us,"fetch",(function(t){return function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];const{method:i,url:a}=function(e){if(0===e.length)return{method:"GET",url:""};if(2===e.length){const[t,n]=e;return{url:Ru(t),method:wu(n,"method")?String(n.method).toUpperCase():"GET"}}const t=e[0];return{url:Ru(t),method:wu(t,"method")?String(t.method).toUpperCase():"GET"}}(o),s={args:o,fetchData:{method:i,url:a},startTimestamp:1e3*pc()};e||Wl("fetch",{...s});const c=(new Error).stack;return t.apply(us,o).then((async t=>{if(e)e(t);else{Wl("fetch",{...s,endTimestamp:1e3*pc(),response:t})}return t}),(t=>{if(!e){throw Wl("fetch",{...s,endTimestamp:1e3*pc(),error:t}),hs(t)&&void 0===t.stack&&(t.stack=c,Fs(t,"framesToPop",1)),t}}))}}))}async function Wu(e){let t;try{t=e.clone()}catch(n){}await function(e,t){if(e&&e.body){const n=e.body.getReader();async function o(e){let{done:t}=e;if(t)return Promise.resolve();try{const e=await Promise.race([n.read(),new Promise((e=>{setTimeout((()=>{e({done:!0})}),5e3)}))]);await o(e)}catch(r){}}n.read().then(o).then((()=>{t()})).catch((()=>{}))}}(t,(()=>{Wl("fetch-body-resolved",{endTimestamp:1e3*pc(),response:e})}))}function wu(e,t){return!!e&&"object"===typeof e&&!!e[t]}function Ru(e){return"string"===typeof e?e:e?wu(e,"url")?e.url:e.toString?e.toString():"":""}const Su=["fatal","error","warning","log","info","debug"];function xu(e){return"warn"===e?"warning":Su.includes(e)?e:"log"}function Eu(e){if(!e)return{};const t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const n=t[6]||"",o=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],search:n,hash:o,relative:t[5]+n+o}}const Tu=1024,Cu=function(){const e={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}};return{name:"Breadcrumbs",setup(t){e.console&&function(e){const t="console";ql(t,e),_l(t,vu)}(function(e){return function(t){if(Rc()!==e)return;const n={category:"console",data:{arguments:t.args,logger:"console"},level:xu(t.level),message:$s(t.args," ")};if("assert"===t.level){if(!1!==t.args[0])return;n.message=`Assertion failed: ${$s(t.args.slice(1)," ")||"console.assert"}`,n.data.arguments=t.args.slice(1)}yu(n,{input:t.args,level:t.level})}}(t)),e.dom&&fu(function(e,t){return function(n){if(Rc()!==e)return;let o,r,i="object"===typeof t?t.serializeAttribute:void 0,a="object"===typeof t&&"number"===typeof t.maxStringLength?t.maxStringLength:void 0;a&&a>Tu&&(Yl&&Bs.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`),a=Tu),"string"===typeof i&&(i=[i]);try{const e=n.event,t=function(e){return!!e&&!!e.target}(e)?e.target:e;o=Es(t,{keyAttrs:i,maxStringLength:a}),r=Ns(t)}catch(c){o="<unknown>"}if(0===o.length)return;const s={category:`ui.${n.name}`,message:o};r&&(s.data={"ui.component_name":r}),yu(s,{event:n.event,name:n.name,global:n.global})}}(t,e.dom)),e.xhr&&Au(function(e){return function(t){if(Rc()!==e)return;const{startTimestamp:n,endTimestamp:o}=t,r=t.xhr[Ou];if(!n||!o||!r)return;const{method:i,url:a,status_code:s,body:c}=r;yu({category:"xhr",data:{method:i,url:a,status_code:s},type:"http"},{xhr:t.xhr,input:c,startTimestamp:n,endTimestamp:o})}}(t)),e.fetch&&qu(function(e){return function(t){if(Rc()!==e)return;const{startTimestamp:n,endTimestamp:o}=t;if(o&&(!t.fetchData.url.match(/sentry_key/)||"POST"!==t.fetchData.method))if(t.error){yu({category:"fetch",data:t.fetchData,level:"error",type:"http"},{data:t.error,input:t.args,startTimestamp:n,endTimestamp:o})}else{const e=t.response;yu({category:"fetch",data:{...t.fetchData,status_code:e&&e.status},type:"http"},{input:t.args,response:e,startTimestamp:n,endTimestamp:o})}}}(t)),e.history&&xl(function(e){return function(t){if(Rc()!==e)return;let n=t.from,o=t.to;const r=Eu(au.location.href);let i=n?Eu(n):void 0;const a=Eu(o);i&&i.path||(i=r),r.protocol===a.protocol&&r.host===a.host&&(o=a.relative),r.protocol===i.protocol&&r.host===i.host&&(n=i.relative),yu({category:"navigation",data:{from:n,to:o}})}}(t)),e.sentry&&t.on("beforeSendEvent",function(e){return function(t){Rc()===e&&yu({category:"sentry."+("transaction"===t.type?"transaction":"event"),event_id:t.event_id,level:t.level,message:tc(t)},{event:t})}}(t))}}};const Nu=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Lu=function(){const e={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}};return{name:"BrowserApiErrors",setupOnce(){e.setTimeout&&Us(au,"setTimeout",ku),e.setInterval&&Us(au,"setInterval",ku),e.requestAnimationFrame&&Us(au,"requestAnimationFrame",Pu),e.XMLHttpRequest&&"XMLHttpRequest"in au&&Us(XMLHttpRequest.prototype,"send",Iu);const t=e.eventTarget;if(t){(Array.isArray(t)?t:Nu).forEach(Bu)}}}};function ku(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];const r=n[0];return n[0]=pu(r,{mechanism:{data:{function:kc(e)},handled:!1,type:"instrument"}}),e.apply(this,n)}}function Pu(e){return function(t){return e.apply(this,[pu(t,{mechanism:{data:{function:"requestAnimationFrame",handler:kc(e)},handled:!1,type:"instrument"}})])}}function Iu(e){return function(){const t=this;["onload","onerror","onprogress","onreadystatechange"].forEach((e=>{e in t&&"function"===typeof t[e]&&Us(t,e,(function(t){const n={mechanism:{data:{function:e,handler:kc(t)},handled:!1,type:"instrument"}},o=Hs(t);return o&&(n.mechanism.data.handler=kc(o)),pu(t,n)}))}));for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e.apply(this,o)}}function Bu(e){const t=au,n=t[e]&&t[e].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(Us(n,"addEventListener",(function(t){return function(n,o,r){try{"function"===typeof o.handleEvent&&(o.handleEvent=pu(o.handleEvent,{mechanism:{data:{function:"handleEvent",handler:kc(o),target:e},handled:!1,type:"instrument"}}))}catch(i){}return t.apply(this,[n,pu(o,{mechanism:{data:{function:"addEventListener",handler:kc(o),target:e},handled:!1,type:"instrument"}}),r])}})),Us(n,"removeEventListener",(function(e){return function(t,n,o){const r=n;try{const n=r&&r.__sentry_wrapped__;n&&e.call(this,t,n,o)}catch(i){}return e.call(this,t,r,o)}})))}let Du=null;function $u(e){const t="error";ql(t,e),_l(t,ju)}function ju(){Du=us.onerror,us.onerror=function(e,t,n,o,r){return Wl("error",{column:o,error:r,line:n,msg:e,url:t}),!(!Du||Du.__SENTRY_LOADER__)&&Du.apply(this,arguments)},us.onerror.__SENTRY_INSTRUMENTED__=!0}let Xu=null;function Uu(e){const t="unhandledrejection";ql(t,e),_l(t,Fu)}function Fu(){Xu=us.onunhandledrejection,us.onunhandledrejection=function(e){return Wl("unhandledrejection",e),!(Xu&&!Xu.__SENTRY_LOADER__)||Xu.apply(this,arguments)},us.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const Vu=function(){const e={onerror:!0,onunhandledrejection:!0,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}};return{name:"GlobalHandlers",setupOnce(){Error.stackTraceLimit=50},setup(t){e.onerror&&(!function(e){$u((t=>{const{stackParser:n,attachStacktrace:o}=Gu();if(Rc()!==e||cu())return;const{msg:r,url:i,line:a,column:s,error:c}=t,p=function(e,t,n,o){const r=e.exception=e.exception||{},i=r.values=r.values||[],a=i[0]=i[0]||{},s=a.stacktrace=a.stacktrace||{},c=s.frames=s.frames||[],p=isNaN(parseInt(o,10))?void 0:o,l=isNaN(parseInt(n,10))?void 0:n,u=gs(t)&&t.length>0?t:Cs();0===c.length&&c.push({colno:p,filename:u,function:xc,in_app:!0,lineno:l});return e}(ou(n,c||r,void 0,o,!1),i,a,s);p.level="error",Up(p,{originalException:c,mechanism:{handled:!1,type:"onerror"}})}))}(t),Hu("onerror")),e.onunhandledrejection&&(!function(e){Uu((t=>{const{stackParser:n,attachStacktrace:o}=Gu();if(Rc()!==e||cu())return;const r=function(e){if(vs(e))return e;try{if("reason"in e)return e.reason;if("detail"in e&&"reason"in e.detail)return e.detail.reason}catch(t){}return e}(t),i=vs(r)?{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(r)}`}]}}:ou(n,r,void 0,o,!0);i.level="error",Up(i,{originalException:r,mechanism:{handled:!1,type:"onunhandledrejection"}})}))}(t),Hu("onunhandledrejection"))}}};function Hu(e){Yl&&Bs.log(`Global Handler attached: ${e}`)}function Gu(){const e=Rc();return e&&e.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const Ku=()=>({name:"HttpContext",preprocessEvent(e){if(!au.navigator&&!au.location&&!au.document)return;const t=e.request&&e.request.url||au.location&&au.location.href,{referrer:n}=au.document||{},{userAgent:o}=au.navigator||{},r={...e.request&&e.request.headers,...n&&{Referer:n},...o&&{"User-Agent":o}},i={...e.request,...t&&{url:t},headers:r};e.request=i}});function Yu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:250,o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0;if(!i.exception||!i.exception.values||!a||!ws(a.originalException,Error))return;const s=i.exception.values.length>0?i.exception.values[i.exception.values.length-1]:void 0;var c,p;s&&(i.exception.values=(c=Ju(e,t,r,a.originalException,o,i.exception.values,s,0),p=n,c.map((e=>(e.value&&(e.value=Ds(e.value,p)),e)))))}function Ju(e,t,n,o,r,i,a,s){if(i.length>=n+1)return i;let c=[...i];if(ws(o[r],Error)){Qu(a,s);const i=e(t,o[r]),p=c.length;Zu(i,r,p,s),c=Ju(e,t,n,o[r],r,[i,...c],i,p)}return Array.isArray(o.errors)&&o.errors.forEach(((o,i)=>{if(ws(o,Error)){Qu(a,s);const p=e(t,o),l=c.length;Zu(p,`errors[${i}]`,l,s),c=Ju(e,t,n,o,r,[p,...c],p,l)}})),c}function Qu(e,t){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,..."AggregateError"===e.type&&{is_exception_group:!0},exception_id:t}}function Zu(e,t,n,o){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,type:"chained",source:t,exception_id:n,parent_id:o}}const ed=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.limit||5,n=e.key||"cause";return{name:"LinkedErrors",preprocessEvent(e,o,r){const i=r.getOptions();Yu(Jl,i.stackParser,i.maxValueLength,n,t,e,o)}}};function td(e,t,n,o){const r={filename:e,function:"<anonymous>"===t?xc:t,in_app:!0};return void 0!==n&&(r.lineno=n),void 0!==o&&(r.colno=o),r}const nd=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,od=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,rd=/\((\S*)(?::(\d+))(?::(\d+))\)/,id=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,ad=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,sd=Cc(...[[30,e=>{const t=nd.exec(e);if(t){const[,e,n,o]=t;return td(e,xc,+n,+o)}const n=od.exec(e);if(n){if(n[2]&&0===n[2].indexOf("eval")){const e=rd.exec(n[2]);e&&(n[2]=e[1],n[3]=e[2],n[4]=e[3])}const[e,t]=cd(n[1]||xc,n[2]);return td(t,e,n[3]?+n[3]:void 0,n[4]?+n[4]:void 0)}}],[50,e=>{const t=id.exec(e);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const e=ad.exec(t[3]);e&&(t[1]=t[1]||"eval",t[3]=e[1],t[4]=e[2],t[5]="")}let e=t[3],n=t[1]||xc;return[n,e]=cd(n,e),td(e,n,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}]]),cd=(e,t)=>{const n=-1!==e.indexOf("safari-extension"),o=-1!==e.indexOf("safari-web-extension");return n||o?[-1!==e.indexOf("@")?e.split("@")[0]:xc,n?`safari-extension:${t}`:`safari-web-extension:${t}`]:[e,t]},pd="undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,ld={};function ud(e){const t=ld[e];if(t)return t;let n=Rl[e];if(gl(n))return ld[e]=n.bind(Rl);const o=Rl.document;if(o&&"function"===typeof o.createElement)try{const t=o.createElement("iframe");t.hidden=!0,o.head.appendChild(t);const r=t.contentWindow;r&&r[e]&&(n=r[e]),o.head.removeChild(t)}catch(r){pd&&Bs.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,r)}return n?ld[e]=n.bind(Rl):n}function dd(e){ld[e]=void 0}function bd(){return ud("setTimeout")(...arguments)}function Md(e){const t=[];function n(e){return t.splice(t.indexOf(e),1)[0]||Promise.resolve(void 0)}return{$:t,add:function(o){if(!(void 0===e||t.length<e))return Xc(new Xl("Not adding Promise because buffer limit was reached."));const r=o();return-1===t.indexOf(r)&&t.push(r),r.then((()=>n(r))).then(null,(()=>n(r).then(null,(()=>{})))),r},drain:function(e){return new Uc(((n,o)=>{let r=t.length;if(!r)return n(!0);const i=setTimeout((()=>{e&&e>0&&n(!1)}),e);t.forEach((e=>{jc(e).then((()=>{--r||(clearTimeout(i),n(!0))}),o)}))}))}}}const fd=6e4;function zd(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return function(e,t){return e[t]||e.all||0}(e,t)>n}function hd(e,t){let{statusCode:n,headers:o}=t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();const i={...e},a=o&&o["x-sentry-rate-limits"],s=o&&o["retry-after"];if(a)for(const c of a.trim().split(",")){const[e,t,,,n]=c.split(":",5),o=parseInt(e,10),a=1e3*(isNaN(o)?60:o);if(t)for(const s of t.split(";"))"metric_bucket"===s&&n&&!n.split(";").includes("custom")||(i[s]=r+a);else i.all=r+a}else s?i.all=r+function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();const n=parseInt(`${e}`,10);if(!isNaN(n))return 1e3*n;const o=Date.parse(`${e}`);return isNaN(o)?fd:o-t}(s,r):429===n&&(i.all=r+6e4);return i}const Od=64;function Ad(e,t){if("event"===t||"transaction"===t)return Array.isArray(e)?e[1]:void 0}function md(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ud("fetch"),n=0,o=0;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Md(e.bufferSize||Od),o={};return{send:function(r){const i=[];if(Nl(r,((t,n)=>{const r=Dl(n);if(zd(o,r)){const o=Ad(t,n);e.recordDroppedEvent("ratelimit_backoff",r,o)}else i.push(t)})),0===i.length)return jc({});const a=Tl(r[0],i),s=t=>{Nl(a,((n,o)=>{const r=Ad(n,o);e.recordDroppedEvent(t,Dl(o),r)}))};return n.add((()=>t({body:kl(a)}).then((e=>(void 0!==e.statusCode&&(e.statusCode<200||e.statusCode>=300)&&Fc&&Bs.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),o=hd(o,e),e)),(e=>{throw s("network_error"),e})))).then((e=>e),(e=>{if(e instanceof Xl)return Fc&&Bs.error("Skipped sending event because buffer is full."),s("queue_overflow"),jc({});throw e}))},flush:e=>n.drain(e)}}(e,(function(r){const i=r.body.length;n+=i,o++;const a={body:r.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:n<=6e4&&o<15,...e.fetchOptions};if(!t)return dd("fetch"),Xc("No fetch implementation available");try{return t(e.url,a).then((e=>(n-=i,o--,{statusCode:e.status,headers:{"x-sentry-rate-limits":e.headers.get("X-Sentry-Rate-Limits"),"retry-after":e.headers.get("Retry-After")}})))}catch(s){return dd("fetch"),n-=i,o--,Xc(s)}}))}function gd(){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{defaultIntegrations:[tl(),il(),Lu(),Cu(),Vu(),ed(),al(),Ku()],release:"string"===typeof __SENTRY_RELEASE__?__SENTRY_RELEASE__:au.SENTRY_RELEASE&&au.SENTRY_RELEASE.id?au.SENTRY_RELEASE.id:void 0,autoSessionTracking:!0,sendClientReports:!0,...e}}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});if(function(){const e=au,t=e[e.chrome?"chrome":"browser"],n=t&&t.runtime&&t.runtime.id,o=au.location&&au.location.href||"",r=!!n&&au===au.top&&["chrome-extension:","moz-extension:","ms-browser-extension:"].some((e=>o.startsWith(`${e}//`))),i="undefined"!==typeof e.nw;return!!n&&!r&&!i}())return void Is((()=>{console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")}));Yl&&(ml()||Bs.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));const t={...e,stackParser:(n=e.stackParser||sd,Array.isArray(n)?Cc(...n):n),integrations:Jp(e),transport:e.transport||md};var n;const o=ll(lu,t);return e.autoSessionTracking&&function(){if("undefined"===typeof au.document)return void(Yl&&Bs.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));Vp({ignoreDuration:!0}),Kp(),xl((e=>{let{from:t,to:n}=e;void 0!==t&&t!==n&&(Vp({ignoreDuration:!0}),Kp())}))}(),o}function yd(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!au.document)return void(Yl&&Bs.error("Global document not defined in showReportDialog call"));const t=_c(),n=t.getClient(),o=n&&n.getDsn();if(!o)return void(Yl&&Bs.error("DSN not configured for showReportDialog call"));if(t&&(e.user={...t.getUser(),...e.user}),!e.eventId){const t=Wc().lastEventId();t&&(e.eventId=t)}const r=au.document.createElement("script");r.async=!0,r.crossOrigin="anonymous",r.src=function(e,t){const n=Ml(e);if(!n)return"";const o=`${zl(n)}embed/error-page/`;let r=`dsn=${dl(n)}`;for(const i in t)if("dsn"!==i&&"onClose"!==i)if("user"===i){const e=t.user;if(!e)continue;e.name&&(r+=`&name=${encodeURIComponent(e.name)}`),e.email&&(r+=`&email=${encodeURIComponent(e.email)}`)}else r+=`&${encodeURIComponent(i)}=${encodeURIComponent(t[i])}`;return`${o}?${r}`}(o,e),e.onLoad&&(r.onload=e.onLoad);const{onClose:i}=e;if(i){const e=t=>{if("__sentry_reportdialog_closed__"===t.data)try{i()}finally{au.removeEventListener("message",e)}};au.addEventListener("message",e)}const a=au.document.head||au.document.body;a?a.appendChild(r):Yl&&Bs.error("Not injecting report dialog. No injection point found in HTML")}function vd(e){if("boolean"===typeof __SENTRY_TRACING__&&!__SENTRY_TRACING__)return!1;const t=e||function(){const e=Rc();return e&&e.getOptions()}();return!!t&&(t.enableTracing||"tracesSampleRate"in t||"tracesSampler"in t)}class qd{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._traceId=e.traceId||Zs(),this._spanId=e.spanId||Zs().substring(16)}spanContext(){return{spanId:this._spanId,traceId:this._traceId,traceFlags:0}}end(e){}setAttribute(e,t){return this}setAttributes(e){return this}setStatus(e){return this}updateName(e){return this}isRecording(){return!1}addEvent(e,t,n){return this}addLink(e){return this}addLinks(e){return this}recordException(e,t){}}function _d(e){if(!e||0===e.length)return;const t={};return e.forEach((e=>{const n=e.attributes||{},o=n[ip],r=n[ap];"string"===typeof o&&"number"===typeof r&&(t[e.name]={value:r,unit:o})})),t}const Wd="_sentryScope",wd="_sentryIsolationScope";function Rd(e){return{scope:e[Wd],isolationScope:e[wd]}}class Sd{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._traceId=e.traceId||Zs(),this._spanId=e.spanId||Zs().substring(16),this._startTime=e.startTimestamp||pc(),this._attributes={},this.setAttributes({[op]:"manual",[np]:e.op,...e.attributes}),this._name=e.name,e.parentSpanId&&(this._parentSpanId=e.parentSpanId),"sampled"in e&&(this._sampled=e.sampled),e.endTimestamp&&(this._endTime=e.endTimestamp),this._events=[],this._isStandaloneSpan=e.isStandalone,this._endTime&&this._onSpanEnded()}addLink(e){return this}addLinks(e){return this}recordException(e,t){}spanContext(){const{_spanId:e,_traceId:t,_sampled:n}=this;return{spanId:e,traceId:t,traceFlags:n?hp:0}}setAttribute(e,t){return void 0===t?delete this._attributes[e]:this._attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach((t=>this.setAttribute(t,e[t]))),this}updateStartTime(e){this._startTime=gp(e)}setStatus(e){return this._status=e,this}updateName(e){return this._name=e,this}end(e){this._endTime||(this._endTime=gp(e),function(e){if(!Fc)return;const{description:t="< unknown name >",op:n="< unknown op >"}=vp(e),{spanId:o}=e.spanContext(),r=`[Tracing] Finishing "${n}" ${xp(e)===e?"root ":""}span "${t}" with ID ${o}`;Bs.log(r)}(this),this._onSpanEnded())}getSpanJSON(){return Js({data:this._attributes,description:this._name,op:this._attributes[np],parent_span_id:this._parentSpanId,span_id:this._spanId,start_timestamp:this._startTime,status:_p(this._status),timestamp:this._endTime,trace_id:this._traceId,origin:this._attributes[op],_metrics_summary:dp(this),profile_id:this._attributes["sentry.profile_id"],exclusive_time:this._attributes[sp],measurements:_d(this._events),is_segment:this._isStandaloneSpan&&xp(this)===this||void 0,segment_id:this._isStandaloneSpan?xp(this).spanContext().spanId:void 0})}isRecording(){return!this._endTime&&!!this._sampled}addEvent(e,t,n){Fc&&Bs.log("[Tracing] Adding an event to span:",e);const o=xd(t)?t:n||pc(),r=xd(t)?{}:t||{},i={name:e,time:gp(o),attributes:r};return this._events.push(i),this}isStandaloneSpan(){return!!this._isStandaloneSpan}_onSpanEnded(){const e=Rc();e&&e.emit("spanEnd",this);if(!(this._isStandaloneSpan||this===xp(this)))return;if(this._isStandaloneSpan)return void(this._sampled?function(e){const t=Rc();if(!t)return;const n=e[1];if(!n||0===n.length)return void t.recordDroppedEvent("before_send","span");const o=t.getTransport();o&&o.send(e).then(null,(e=>{Fc&&Bs.error("Error while sending span:",e)}))}(function(e,t){const n=Lp(e[0]),o=t&&t.getDsn(),r=t&&t.getOptions().tunnel,i={sent_at:(new Date).toISOString(),...function(e){return!!e.trace_id&&!!e.public_key}(n)&&{trace:n},...!!r&&o&&{dsn:dl(o)}},a=t&&t.getOptions().beforeSendSpan,s=a?e=>a(vp(e)):e=>vp(e),c=[];for(const p of e){const e=s(p);e&&c.push(Pl(e))}return Tl(i,c)}([this],e)):(Fc&&Bs.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),e&&e.recordDroppedEvent("sample_rate","span")));const t=this._convertSpanToTransaction();if(t){(Rd(this).scope||_c()).captureEvent(t)}}_convertSpanToTransaction(){if(!Ed(vp(this)))return;this._name||(Fc&&Bs.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this._name="<unlabeled transaction>");const{scope:e,isolationScope:t}=Rd(this),n=(e||_c()).getClient()||Rc();if(!0!==this._sampled)return Fc&&Bs.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),void(n&&n.recordDroppedEvent("sample_rate","transaction"));const o=Sp(this).filter((e=>e!==this&&!function(e){return e instanceof Sd&&e.isStandaloneSpan()}(e))).map((e=>vp(e))).filter(Ed),r=this._attributes[ep],i={contexts:{trace:Op(this)},spans:o.length>1e3?o.sort(((e,t)=>e.start_timestamp-t.start_timestamp)).slice(0,1e3):o,start_timestamp:this._startTime,timestamp:this._endTime,transaction:this._name,type:"transaction",sdkProcessingMetadata:{capturedSpanScope:e,capturedSpanIsolationScope:t,...Js({dynamicSamplingContext:Lp(this)})},_metrics_summary:dp(this),...r&&{transaction_info:{source:r}}},a=_d(this._events);return a&&Object.keys(a).length&&(Fc&&Bs.log("[Measurements] Adding measurements to transaction event",JSON.stringify(a,void 0,2)),i.measurements=a),i}}function xd(e){return e&&"number"===typeof e||e instanceof Date||Array.isArray(e)}function Ed(e){return!!e.start_timestamp&&!!e.timestamp&&!!e.span_id&&!!e.trace_id}const Td="__SENTRY_SUPPRESS_TRACING__";function Cd(e){const t=Pd();if(t.startInactiveSpan)return t.startInactiveSpan(e);const n=kd(e),{forceTransaction:o,parentSpan:r}=e;return(e.scope?t=>wc(e.scope,t):void 0!==r?e=>Nd(r,e):e=>e())((()=>{const t=_c(),r=Bd(t);return e.onlyIfParent&&!r?new qd:Ld({parentSpan:r,spanArguments:n,forceTransaction:o,scope:t})}))}function Nd(e,t){const n=Pd();return n.withActiveSpan?n.withActiveSpan(e,t):wc((n=>(fc(n,e||void 0),t(n))))}function Ld(e){let{parentSpan:t,spanArguments:n,forceTransaction:o,scope:r}=e;if(!vd())return new qd;const i=Wc();let a;if(t&&!o)a=function(e,t,n){const{spanId:o,traceId:r}=e.spanContext(),i=!t.getScopeData().sdkProcessingMetadata[Td]&&qp(e),a=i?new Sd({...n,parentSpanId:o,traceId:r,sampled:i}):new qd({traceId:r});Rp(e,a);const s=Rc();s&&(s.emit("spanStart",a),n.endTimestamp&&s.emit("spanEnd",a));return a}(t,r,n),Rp(t,a);else if(t){const e=Lp(t),{traceId:o,spanId:i}=t.spanContext(),s=qp(t);a=Id({traceId:o,parentSpanId:i,...n},r,s),Cp(a,e)}else{const{traceId:e,dsc:t,parentSpanId:o,sampled:s}={...i.getPropagationContext(),...r.getPropagationContext()};a=Id({traceId:e,parentSpanId:o,...n},r,s),t&&Cp(a,t)}return function(e){if(!Fc)return;const{description:t="< unknown name >",op:n="< unknown op >",parent_span_id:o}=vp(e),{spanId:r}=e.spanContext(),i=qp(e),a=xp(e),s=a===e,c=`[Tracing] Starting ${i?"sampled":"unsampled"} ${s?"root ":""}span`,p=[`op: ${n}`,`name: ${t}`,`ID: ${r}`];if(o&&p.push(`parent ID: ${o}`),!s){const{op:e,description:t}=vp(a);p.push(`root ID: ${a.spanContext().spanId}`),e&&p.push(`root op: ${e}`),t&&p.push(`root description: ${t}`)}Bs.log(`${c}\n  ${p.join("\n  ")}`)}(a),function(e,t,n){e&&(Fs(e,wd,n),Fs(e,Wd,t))}(a,r,i),a}function kd(e){const t={isStandalone:(e.experimental||{}).standalone,...e};if(e.startTime){const n={...t};return n.startTimestamp=gp(e.startTime),delete n.startTime,n}return t}function Pd(){return qc(Ms())}function Id(e,t,n){const o=Rc(),r=o&&o.getOptions()||{},{name:i="",attributes:a}=e,[s,c]=t.getScopeData().sdkProcessingMetadata[Td]?[!1]:function(e,t){if(!vd(e))return[!1];let n;n="function"===typeof e.tracesSampler?e.tracesSampler(t):void 0!==t.parentSampled?t.parentSampled:"undefined"!==typeof e.tracesSampleRate?e.tracesSampleRate:1;const o=Ul(n);return void 0===o?(Fc&&Bs.warn("[Tracing] Discarding transaction because of invalid sample rate."),[!1]):o?Math.random()<o?[!0,o]:(Fc&&Bs.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),[!1,o]):(Fc&&Bs.log("[Tracing] Discarding transaction because "+("function"===typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),[!1,o])}(r,{name:i,parentSampled:n,attributes:a,transactionContext:{name:i,parentSampled:n}}),p=new Sd({...e,attributes:{[ep]:"custom",...e.attributes},sampled:s});return void 0!==c&&p.setAttribute(tp,c),o&&o.emit("spanStart",p),p}function Bd(e){const t=zc(e);if(!t)return;const n=Rc();return(n?n.getOptions():{}).parentSpanIsAlwaysRootSpan?xp(t):t}const Dd=(e,t,n,o)=>{let r,i;return a=>{t.value>=0&&(a||o)&&(i=t.value-(r||0),(i||void 0===r)&&(r=t.value,t.delta=i,t.rating=((e,t)=>e>t[1]?"poor":e>t[0]?"needs-improvement":"good")(t.value,n),e(t)))}},$d=()=>Rl.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],jd=()=>{const e=$d();return e&&e.activationStart||0},Xd=(e,t)=>{const n=$d();let o="navigate";n&&(Rl.document&&Rl.document.prerendering||jd()>0?o="prerender":Rl.document&&Rl.document.wasDiscarded?o="restore":n.type&&(o=n.type.replace(/_/g,"-")));return{name:e,value:"undefined"===typeof t?-1:t,rating:"good",delta:0,entries:[],id:`v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:o}},Ud=(e,t,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(e)){const o=new PerformanceObserver((e=>{Promise.resolve().then((()=>{t(e.getEntries())}))}));return o.observe(Object.assign({type:e,buffered:!0},n||{})),o}}catch(o){}},Fd=e=>{const t=t=>{("pagehide"===t.type||Rl.document&&"hidden"===Rl.document.visibilityState)&&e(t)};Rl.document&&(addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0))},Vd=e=>{let t=!1;return n=>{t||(e(n),t=!0)}};let Hd=-1;const Gd=e=>{"hidden"===Rl.document.visibilityState&&Hd>-1&&(Hd="visibilitychange"===e.type?e.timeStamp:0,removeEventListener("visibilitychange",Gd,!0),removeEventListener("prerenderingchange",Gd,!0))},Kd=()=>(Rl.document&&Hd<0&&(Hd="hidden"!==Rl.document.visibilityState||Rl.document.prerendering?1/0:0,addEventListener("visibilitychange",Gd,!0),addEventListener("prerenderingchange",Gd,!0)),{get firstHiddenTime(){return Hd}}),Yd=e=>{Rl.document&&Rl.document.prerendering?addEventListener("prerenderingchange",(()=>e()),!0):e()},Jd=[1800,3e3],Qd=[.1,.25],Zd=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Yd((()=>{const n=Kd(),o=Xd("FCP");let r;const i=Ud("paint",(e=>{e.forEach((e=>{"first-contentful-paint"===e.name&&(i.disconnect(),e.startTime<n.firstHiddenTime&&(o.value=Math.max(e.startTime-jd(),0),o.entries.push(e),r(!0)))}))}));i&&(r=Dd(e,o,Jd,t.reportAllChanges))}))}(Vd((()=>{const n=Xd("CLS",0);let o,r=0,i=[];const a=e=>{e.forEach((e=>{if(!e.hadRecentInput){const t=i[0],n=i[i.length-1];r&&t&&n&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(r+=e.value,i.push(e)):(r=e.value,i=[e])}})),r>n.value&&(n.value=r,n.entries=i,o())},s=Ud("layout-shift",a);s&&(o=Dd(e,n,Qd,t.reportAllChanges),Fd((()=>{a(s.takeRecords()),o(!0)})),setTimeout(o,0))})))},eb=[100,300],tb=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Yd((()=>{const n=Kd(),o=Xd("FID");let r;const i=e=>{e.startTime<n.firstHiddenTime&&(o.value=e.processingStart-e.startTime,o.entries.push(e),r(!0))},a=e=>{e.forEach(i)},s=Ud("first-input",a);r=Dd(e,o,eb,t.reportAllChanges),s&&Fd(Vd((()=>{a(s.takeRecords()),s.disconnect()})))}))};let nb=0,ob=1/0,rb=0;const ib=e=>{e.forEach((e=>{e.interactionId&&(ob=Math.min(ob,e.interactionId),rb=Math.max(rb,e.interactionId),nb=rb?(rb-ob)/7+1:0)}))};let ab;const sb=()=>{"interactionCount"in performance||ab||(ab=Ud("event",ib,{type:"event",buffered:!0,durationThreshold:0}))},cb=[200,500],pb=()=>(ab?nb:performance.interactionCount||0)-0,lb=[],ub={},db=e=>{const t=lb[lb.length-1],n=ub[e.interactionId];if(n||lb.length<10||t&&e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{const t={id:e.interactionId,latency:e.duration,entries:[e]};ub[t.id]=t,lb.push(t)}lb.sort(((e,t)=>t.latency-e.latency)),lb.splice(10).forEach((e=>{delete ub[e.id]}))}},bb=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Yd((()=>{sb();const n=Xd("INP");let o;const r=e=>{e.forEach((e=>{if(e.interactionId&&db(e),"first-input"===e.entryType){!lb.some((t=>t.entries.some((t=>e.duration===t.duration&&e.startTime===t.startTime))))&&db(e)}}));const t=(()=>{const e=Math.min(lb.length-1,Math.floor(pb()/50));return lb[e]})();t&&t.latency!==n.value&&(n.value=t.latency,n.entries=t.entries,o())},i=Ud("event",r,{durationThreshold:null!=t.durationThreshold?t.durationThreshold:40});o=Dd(e,n,cb,t.reportAllChanges),i&&("PerformanceEventTiming"in Rl&&"interactionId"in PerformanceEventTiming.prototype&&i.observe({type:"first-input",buffered:!0}),Fd((()=>{r(i.takeRecords()),n.value<0&&pb()>0&&(n.value=0,n.entries=[]),o(!0)})))}))},Mb=[2500,4e3],fb={},zb=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Yd((()=>{const n=Kd(),o=Xd("LCP");let r;const i=e=>{const t=e[e.length-1];t&&t.startTime<n.firstHiddenTime&&(o.value=Math.max(t.startTime-jd(),0),o.entries=[t],r())},a=Ud("largest-contentful-paint",i);if(a){r=Dd(e,o,Mb,t.reportAllChanges);const n=Vd((()=>{fb[o.id]||(i(a.takeRecords()),a.disconnect(),fb[o.id]=!0,r(!0))}));["keydown","click"].forEach((e=>{Rl.document&&addEventListener(e,(()=>setTimeout(n,0)),!0)})),Fd(n)}}))},hb=[800,1800],Ob=e=>{Rl.document&&Rl.document.prerendering?Yd((()=>Ob(e))):Rl.document&&"complete"!==Rl.document.readyState?addEventListener("load",(()=>Ob(e)),!0):setTimeout(e,0)},Ab=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=Xd("TTFB"),o=Dd(e,n,hb,t.reportAllChanges);Ob((()=>{const e=$d();if(e){const t=e.responseStart;if(t<=0||t>performance.now())return;n.value=Math.max(t-jd(),0),n.entries=[e],o(!0)}}))},mb={},gb={};let yb,vb,qb,_b,Wb;function wb(e){return Ib("cls",e,Cb,yb,arguments.length>1&&void 0!==arguments[1]&&arguments[1])}function Rb(e){return Ib("lcp",e,Lb,qb,arguments.length>1&&void 0!==arguments[1]&&arguments[1])}function Sb(e){return Ib("fid",e,Nb,vb)}function xb(e){return Ib("inp",e,Pb,Wb)}function Eb(e,t){return Bb(e,t),gb[e]||(!function(e){const t={};"event"===e&&(t.durationThreshold=0);Ud(e,(t=>{Tb(e,{entries:t})}),t)}(e),gb[e]=!0),Db(e,t)}function Tb(e,t){const n=mb[e];if(n&&n.length)for(const r of n)try{r(t)}catch(o){pd&&Bs.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${kc(r)}\nError:`,o)}}function Cb(){return Zd((e=>{Tb("cls",{metric:e}),yb=e}),{reportAllChanges:!0})}function Nb(){return tb((e=>{Tb("fid",{metric:e}),vb=e}))}function Lb(){return zb((e=>{Tb("lcp",{metric:e}),qb=e}),{reportAllChanges:!0})}function kb(){return Ab((e=>{Tb("ttfb",{metric:e}),_b=e}))}function Pb(){return bb((e=>{Tb("inp",{metric:e}),Wb=e}))}function Ib(e,t,n,o){let r,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return Bb(e,t),gb[e]||(r=n(),gb[e]=!0),o&&t({metric:o}),Db(e,t,i?r:void 0)}function Bb(e,t){mb[e]=mb[e]||[],mb[e].push(t)}function Db(e,t,n){return()=>{n&&n();const o=mb[e];if(!o)return;const r=o.indexOf(t);-1!==r&&o.splice(r,1)}}function $b(e){return"number"===typeof e&&isFinite(e)}function jb(e,t,n,o){let{...r}=o;const i=vp(e).start_timestamp;return i&&i>t&&"function"===typeof e.updateStartTime&&e.updateStartTime(t),Nd(e,(()=>{const e=Cd({startTime:t,...r});return e&&e.end(n),e}))}function Xb(){return Rl&&Rl.addEventListener&&Rl.performance}function Ub(e){return e/1e3}const Fb=2147483647;let Vb,Hb,Gb=0,Kb={};function Yb(){const e=Xb();if(e&&uc){e.mark&&Rl.performance.mark("sentry-tracing-init");const t=Sb((e=>{let{metric:t}=e;const n=t.entries[t.entries.length-1];if(!n)return;const o=Ub(uc),r=Ub(n.startTime);pd&&Bs.log("[Measurements] Adding FID"),Kb.fid={value:t.value,unit:"millisecond"},Kb["mark.fid"]={value:o+r,unit:"second"}})),n=wb((e=>{let{metric:t}=e;const n=t.entries[t.entries.length-1];n&&(pd&&Bs.log("[Measurements] Adding CLS"),Kb.cls={value:t.value,unit:""},Hb=n)}),!0),o=Rb((e=>{let{metric:t}=e;const n=t.entries[t.entries.length-1];n&&(pd&&Bs.log("[Measurements] Adding LCP"),Kb.lcp={value:t.value,unit:"millisecond"},Vb=n)}),!0),r=function(){return e=e=>{let{metric:t}=e;t.entries[t.entries.length-1]&&(pd&&Bs.log("[Measurements] Adding TTFB"),Kb.ttfb={value:t.value,unit:"millisecond"})},Ib("ttfb",e,kb,_b);var e}();return()=>{t(),n(),o(),r()}}return()=>{}}function Jb(e){const t=Xb();if(!t||!Rl.performance.getEntries||!uc)return;pd&&Bs.log("[Tracing] Adding & adjusting spans using Performance API");const n=Ub(uc),o=t.getEntries(),{op:r,start_timestamp:i}=vp(e);if(o.slice(Gb).forEach((t=>{const o=Ub(t.startTime),a=Ub(Math.max(0,t.duration));if(!("navigation"===r&&i&&n+o<i))switch(t.entryType){case"navigation":!function(e,t,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((o=>{Qb(e,t,o,n)})),Qb(e,t,"secureConnection",n,"TLS/SSL","connectEnd"),Qb(e,t,"fetch",n,"cache","domainLookupStart"),Qb(e,t,"domainLookup",n,"DNS"),function(e,t,n){const o=n+Ub(t.requestStart),r=n+Ub(t.responseEnd),i=n+Ub(t.responseStart);t.responseEnd&&(jb(e,o,r,{op:"browser",name:"request",attributes:{[op]:"auto.ui.browser.metrics"}}),jb(e,i,r,{op:"browser",name:"response",attributes:{[op]:"auto.ui.browser.metrics"}}))}(e,t,n)}(e,t,n);break;case"mark":case"paint":case"measure":{!function(e,t,n,o,r){const i=$d(),a=Ub(i?i.requestStart:0),s=r+Math.max(n,a),c=r+n,p=c+o,l={[op]:"auto.resource.browser.metrics"};s!==c&&(l["sentry.browser.measure_happened_before_request"]=!0,l["sentry.browser.measure_start_time"]=s);jb(e,s,p,{name:t.name,op:t.entryType,attributes:l})}(e,t,o,a,n);const r=Kd(),i=t.startTime<r.firstHiddenTime;"first-paint"===t.name&&i&&(pd&&Bs.log("[Measurements] Adding FP"),Kb.fp={value:t.startTime,unit:"millisecond"}),"first-contentful-paint"===t.name&&i&&(pd&&Bs.log("[Measurements] Adding FCP"),Kb.fcp={value:t.startTime,unit:"millisecond"});break}case"resource":!function(e,t,n,o,r,i){if("xmlhttprequest"===t.initiatorType||"fetch"===t.initiatorType)return;const a=Eu(n),s={[op]:"auto.resource.browser.metrics"};Zb(s,t,"transferSize","http.response_transfer_size"),Zb(s,t,"encodedBodySize","http.response_content_length"),Zb(s,t,"decodedBodySize","http.decoded_response_content_length"),"renderBlockingStatus"in t&&(s["resource.render_blocking_status"]=t.renderBlockingStatus);a.protocol&&(s["url.scheme"]=a.protocol.split(":").pop());a.host&&(s["server.address"]=a.host);s["url.same_origin"]=n.includes(Rl.location.origin);const c=i+o,p=c+r;jb(e,c,p,{name:n.replace(Rl.location.origin,""),op:t.initiatorType?`resource.${t.initiatorType}`:"resource.other",attributes:s})}(e,t,t.name,o,a,n)}})),Gb=Math.max(o.length-1,0),function(e){const t=Rl.navigator;if(!t)return;const n=t.connection;n&&(n.effectiveType&&e.setAttribute("effectiveConnectionType",n.effectiveType),n.type&&e.setAttribute("connectionType",n.type),$b(n.rtt)&&(Kb["connection.rtt"]={value:n.rtt,unit:"millisecond"}));$b(t.deviceMemory)&&e.setAttribute("deviceMemory",`${t.deviceMemory} GB`);$b(t.hardwareConcurrency)&&e.setAttribute("hardwareConcurrency",String(t.hardwareConcurrency))}(e),"pageload"===r){!function(e){const t=$d();if(!t)return;const{responseStart:n,requestStart:o}=t;o<=n&&(pd&&Bs.log("[Measurements] Adding TTFB Request Time"),e["ttfb.requestTime"]={value:n-o,unit:"millisecond"})}(Kb),["fcp","fp","lcp"].forEach((e=>{const t=Kb[e];if(!t||!i||n>=i)return;const o=t.value,r=n+Ub(o),a=Math.abs(1e3*(r-i)),s=a-o;pd&&Bs.log(`[Measurements] Normalized ${e} from ${o} to ${a} (${s})`),t.value=a}));const t=Kb["mark.fid"];t&&Kb.fid&&(jb(e,t.value,t.value+Ub(Kb.fid.value),{name:"first input delay",op:"ui.action",attributes:{[op]:"auto.ui.browser.metrics"}}),delete Kb["mark.fid"]),"fcp"in Kb||delete Kb.cls,Object.entries(Kb).forEach((e=>{let[t,n]=e;!function(e,t,n){const o=Ep(),r=o&&xp(o);r&&r.addEvent(e,{[ap]:t,[ip]:n})}(t,n.value,n.unit)})),function(e){Vb&&(pd&&Bs.log("[Measurements] Adding LCP Data"),Vb.element&&e.setAttribute("lcp.element",Es(Vb.element)),Vb.id&&e.setAttribute("lcp.id",Vb.id),Vb.url&&e.setAttribute("lcp.url",Vb.url.trim().slice(0,200)),e.setAttribute("lcp.size",Vb.size));Hb&&Hb.sources&&(pd&&Bs.log("[Measurements] Adding CLS Data"),Hb.sources.forEach(((t,n)=>e.setAttribute(`cls.source.${n+1}`,Es(t.node)))))}(e)}Vb=void 0,Hb=void 0,Kb={}}function Qb(e,t,n,o,r,i){const a=i?t[i]:t[`${n}End`],s=t[`${n}Start`];s&&a&&jb(e,o+Ub(s),o+Ub(a),{op:"browser",name:r||n,attributes:{[op]:"auto.ui.browser.metrics"}})}function Zb(e,t,n,o){const r=t[n];null!=r&&r<Fb&&(e[o]=r)}const eM=[],tM=new Map;function nM(){if(Xb()&&uc){const e=xb((e=>{let{metric:t}=e;const n=Rc();if(!n||void 0==t.value)return;const o=t.entries.find((e=>e.duration===t.value&&oM[e.name]));if(!o)return;const{interactionId:r}=o,i=oM[o.name],a=n.getOptions(),s=Ub(uc+o.startTime),c=Ub(t.value),p=_c(),l=Ep(),u=l?xp(l):void 0,d=(null!=r?tM.get(r):void 0)||u,b=d?vp(d).description:p.getScopeData().transactionName,M=p.getUser(),f=n.getIntegrationByName("Replay"),z=f&&f.getReplayId(),h=void 0!==M?M.email||M.id||M.ip_address:void 0;let O;try{O=p.getScopeData().contexts.profile.profile_id}catch(m){}const A=Cd({name:Es(o.target),op:`ui.interaction.${i}`,attributes:Js({release:a.release,environment:a.environment,transaction:b,[sp]:t.value,[op]:"auto.http.browser.inp",user:h||void 0,profile_id:O||void 0,replay_id:z||void 0,"user_agent.original":Rl.navigator&&Rl.navigator.userAgent}),startTime:s,experimental:{standalone:!0}});A.addEvent("inp",{[ip]:"millisecond",[ap]:t.value}),A.end(s+c)}));return()=>{e()}}return()=>{}}const oM={click:"click",pointerdown:"click",pointerup:"click",mousedown:"click",mouseup:"click",touchstart:"click",touchend:"click",mouseover:"hover",mouseout:"hover",mouseenter:"hover",mouseleave:"hover",pointerover:"hover",pointerout:"hover",pointerenter:"hover",pointerleave:"hover",dragstart:"drag",dragend:"drag",drag:"drag",dragenter:"drag",dragleave:"drag",dragover:"drag",drop:"drag",keydown:"press",keyup:"press",keypress:"press",input:"press"};const rM={idleTimeout:1e3,finalTimeout:3e4,childSpanTimeout:15e3},iM="heartbeatFailed",aM="idleTimeout",sM="finalTimeout",cM="externalFinish";function pM(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Map;let o,r=!1,i=cM,a=!t.disableAutoFinish;const s=[],{idleTimeout:c=rM.idleTimeout,finalTimeout:p=rM.finalTimeout,childSpanTimeout:l=rM.childSpanTimeout,beforeSpanEnd:u}=t,d=Rc();if(!d||!vd())return new qd;const b=_c(),M=Ep(),f=function(e){const t=Cd(e);return fc(_c(),t),Fc&&Bs.log("[Tracing] Started span is an idle span"),t}(e);function z(){o&&(clearTimeout(o),o=void 0)}function h(e){z(),o=setTimeout((()=>{!r&&0===n.size&&a&&(i=aM,f.end(e))}),c)}function O(e){o=setTimeout((()=>{!r&&a&&(i=iM,f.end(e))}),l)}function A(e){r=!0,n.clear(),s.forEach((e=>e())),fc(b,M);const t=vp(f),{start_timestamp:o}=t;if(!o)return;(t.data||{})[rp]||f.setAttribute(rp,i),Bs.log(`[Tracing] Idle span "${t.op}" finished`);const a=Sp(f).filter((e=>e!==f));let l=0;a.forEach((t=>{t.isRecording()&&(t.setStatus({code:fp,message:"cancelled"}),t.end(e),Fc&&Bs.log("[Tracing] Cancelling span since span ended early",JSON.stringify(t,void 0,2)));const n=vp(t),{timestamp:o=0,start_timestamp:r=0}=n,i=r<=e,a=o-r<=(p+c)/1e3;if(Fc){const e=JSON.stringify(t,void 0,2);i?a||Bs.log("[Tracing] Discarding span since it finished after idle span final timeout",e):Bs.log("[Tracing] Discarding span since it happened after idle span was finished",e)}a&&i||(!function(e,t){e[Wp]&&e[Wp].delete(t)}(f,t),l++)})),l>0&&f.setAttribute("sentry.idle_span_discarded_spans",l)}return f.end=new Proxy(f.end,{apply(e,t,n){u&&u(f);const[o,...r]=n,i=gp(o||pc()),a=Sp(f).filter((e=>e!==f));if(!a.length)return A(i),Reflect.apply(e,t,[i,...r]);const s=a.map((e=>vp(e).timestamp)).filter((e=>!!e)),c=s.length?Math.max(...s):void 0,l=vp(f).start_timestamp,d=Math.min(l?l+p/1e3:1/0,Math.max(l||-1/0,Math.min(i,c||1/0)));return A(d),Reflect.apply(e,t,[d,...r])}}),s.push(d.on("spanStart",(e=>{if(r||e===f||vp(e).timestamp)return;var t;Sp(f).includes(e)&&(t=e.spanContext().spanId,z(),n.set(t,!0),O(pc()+l/1e3))}))),s.push(d.on("spanEnd",(e=>{var t;r||(t=e.spanContext().spanId,n.has(t)&&n.delete(t),0===n.size&&h(pc()+c/1e3))}))),s.push(d.on("idleSpanEnableAutoFinish",(e=>{e===f&&(a=!0,h(),n.size&&O())}))),t.disableAutoFinish||h(),setTimeout((()=>{r||(f.setStatus({code:fp,message:"deadline_exceeded"}),i=sM,f.end())}),p),f}let lM=!1;function uM(){const e=Ep(),t=e&&xp(e);if(t){const e="internal_error";Fc&&Bs.log(`[Tracing] Root span: ${e} -> Global error occured`),t.setStatus({code:fp,message:e})}}function dM(e,t,n,o){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"auto.http.browser";if(!e.fetchData)return;const i=vd()&&t(e.fetchData.url);if(e.endTimestamp&&i){const t=e.fetchData.__span;if(!t)return;const n=o[t];return void(n&&(!function(e,t){if(t.response){zp(e,t.response.status);const n=t.response&&t.response.headers&&t.response.headers.get("content-length");if(n){const t=parseInt(n);t>0&&e.setAttribute("http.response_content_length",t)}}else t.error&&e.setStatus({code:fp,message:"internal_error"});e.end()}(n,e),delete o[t]))}const a=_c(),s=Rc(),{method:c,url:p}=e.fetchData,l=function(e){try{return new URL(e).href}catch(t){return}}(p),u=l?Eu(l).host:void 0,d=!!Ep(),b=i&&d?Cd({name:`${c} ${p}`,attributes:{url:p,type:"fetch","http.method":c,"http.url":l,"server.address":u,[op]:r,[np]:"http.client"}}):new qd;if(e.fetchData.__span=b.spanContext().spanId,o[b.spanContext().spanId]=b,n(e.fetchData.url)&&s){const t=e.args[0];e.args[1]=e.args[1]||{};const n=e.args[1];n.headers=function(e,t,n,o,r){const i=Wc(),{traceId:a,spanId:s,sampled:c,dsc:p}={...i.getPropagationContext(),...n.getPropagationContext()},l=r?mp(r):lp(a,s,c),u=Qc(p||(r?Lp(r):Np(a,t))),d=o.headers||("undefined"!==typeof Request&&ws(e,Request)?e.headers:void 0);if(d){if("undefined"!==typeof Headers&&ws(d,Headers)){const e=new Headers(d);return e.append("sentry-trace",l),u&&e.append(Hc,u),e}if(Array.isArray(d)){const e=[...d,["sentry-trace",l]];return u&&e.push([Hc,u]),e}{const e="baggage"in d?d.baggage:void 0,t=[];return Array.isArray(e)?t.push(...e):e&&t.push(e),u&&t.push(u),{...d,"sentry-trace":l,baggage:t.length>0?t.join(","):void 0}}}return{"sentry-trace":l,baggage:u}}(t,s,a,n,vd()&&d?b:void 0)}return b}uM.tag="sentry_tracingErrorCallback";const bM=new WeakMap,MM=new Map,fM={traceFetch:!0,traceXHR:!0,enableHTTPTimings:!0};function zM(e,t){const{traceFetch:n,traceXHR:o,shouldCreateSpanForRequest:r,enableHTTPTimings:i,tracePropagationTargets:a}={traceFetch:fM.traceFetch,traceXHR:fM.traceXHR,...t},s="function"===typeof r?r:e=>!0,c=e=>function(e,t){const n=au.location&&au.location.href;if(n){let r,i;try{r=new URL(e,n),i=new URL(n).origin}catch(o){return!1}const a=r.origin===i;return t?Xs(r.toString(),t)||a&&Xs(r.pathname,t):a}{const n=!!e.match(/^\/(?!\/)/);return t?Xs(e,t):n}}(e,a),p={};n&&(e.addEventProcessor((e=>("transaction"===e.type&&e.spans&&e.spans.forEach((e=>{if("http.client"===e.op){const t=MM.get(e.span_id);t&&(e.timestamp=t/1e3,MM.delete(e.span_id))}})),e))),function(e){const t="fetch-body-resolved";ql(t,e),_l(t,(()=>_u(Wu)))}((e=>{if(e.response){const t=bM.get(e.response);t&&e.endTimestamp&&MM.set(t,e.endTimestamp)}})),qu((e=>{const t=dM(e,s,c,p);if(e.response&&e.fetchData.__span&&bM.set(e.response,e.fetchData.__span),t){const n=AM(e.fetchData.url),o=n?Eu(n).host:void 0;t.setAttributes({"http.url":n,"server.address":o})}i&&t&&hM(t)}))),o&&Au((e=>{const t=function(e,t,n,o){const r=e.xhr,i=r&&r[Ou];if(!r||r.__sentry_own_request__||!i)return;const a=vd()&&t(i.url);if(e.endTimestamp&&a){const e=r.__sentry_xhr_span_id__;if(!e)return;const t=o[e];return void(t&&void 0!==i.status_code&&(zp(t,i.status_code),t.end(),delete o[e]))}const s=AM(i.url),c=s?Eu(s).host:void 0,p=!!Ep(),l=a&&p?Cd({name:`${i.method} ${i.url}`,attributes:{type:"xhr","http.method":i.method,"http.url":s,url:i.url,"server.address":c,[op]:"auto.http.browser",[np]:"http.client"}}):new qd;r.__sentry_xhr_span_id__=l.spanContext().spanId,o[r.__sentry_xhr_span_id__]=l;const u=Rc();r.setRequestHeader&&n(i.url)&&u&&function(e,t,n){const o=_c(),r=Wc(),{traceId:i,spanId:a,sampled:s,dsc:c}={...r.getPropagationContext(),...o.getPropagationContext()},p=n&&vd()?mp(n):lp(i,a,s),l=Qc(c||(n?Lp(n):Np(i,t)));!function(e,t,n){try{e.setRequestHeader("sentry-trace",t),n&&e.setRequestHeader(Hc,n)}catch(It){}}(e,p,l)}(r,u,vd()&&p?l:void 0);return l}(e,s,c,p);i&&t&&hM(t)}))}function hM(e){const{url:t}=vp(e).data||{};if(!t||"string"!==typeof t)return;const n=Eb("resource",(o=>{let{entries:r}=o;r.forEach((o=>{if(function(e){return"resource"===e.entryType&&"initiatorType"in e&&"string"===typeof e.nextHopProtocol&&("fetch"===e.initiatorType||"xmlhttprequest"===e.initiatorType)}(o)&&o.name.endsWith(t)){(function(e){const{name:t,version:n}=function(e){let t="unknown",n="unknown",o="";for(const r of e){if("/"===r){[t,n]=e.split("/");break}if(!isNaN(Number(r))){t="h"===o?"http":o,n=e.split(o)[1];break}o+=r}o===e&&(t=o);return{name:t,version:n}}(e.nextHopProtocol),o=[];if(o.push(["network.protocol.version",n],["network.protocol.name",t]),!uc)return o;return[...o,["http.request.redirect_start",OM(e.redirectStart)],["http.request.fetch_start",OM(e.fetchStart)],["http.request.domain_lookup_start",OM(e.domainLookupStart)],["http.request.domain_lookup_end",OM(e.domainLookupEnd)],["http.request.connect_start",OM(e.connectStart)],["http.request.secure_connection_start",OM(e.secureConnectionStart)],["http.request.connection_end",OM(e.connectEnd)],["http.request.request_start",OM(e.requestStart)],["http.request.response_start",OM(e.responseStart)],["http.request.response_end",OM(e.responseEnd)]]})(o).forEach((t=>e.setAttribute(...t))),setTimeout(n)}}))}))}function OM(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return((uc||performance.timeOrigin)+e)/1e3}function AM(e){try{return new URL(e,au.location.origin).href}catch(t){return}}const mM={...rM,instrumentNavigation:!0,instrumentPageLoad:!0,markBackgroundSpan:!0,enableLongTask:!0,enableLongAnimationFrame:!1,enableInp:!0,_experiments:{},...fM},gM=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};lM||(lM=!0,$u(uM),Uu(uM));const{enableInp:t,enableLongTask:n,enableLongAnimationFrame:o,_experiments:{enableInteractions:r},beforeStartSpan:i,idleTimeout:a,finalTimeout:s,childSpanTimeout:c,markBackgroundSpan:p,traceFetch:l,traceXHR:u,shouldCreateSpanForRequest:d,enableHTTPTimings:b,instrumentPageLoad:M,instrumentNavigation:f}={...mM,...e},z=Yb();t&&nM(),o&&PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")?new PerformanceObserver((e=>{for(const t of e.getEntries()){if(!Ep())return;if(!t.scripts[0])return;const e=Ub(uc+t.startTime),n=Ub(t.duration),o={[op]:"auto.ui.browser.metrics"},r=t.scripts[0];if(r){const{invoker:e,invokerType:t,sourceURL:n,sourceFunctionName:i,sourceCharPosition:a}=r;o["browser.script.invoker"]=e,o["browser.script.invoker_type"]=t,n&&(o["code.filepath"]=n),i&&(o["code.function"]=i),-1!==a&&(o["browser.script.source_char_position"]=a)}const i=Cd({name:"Main UI thread blocked",op:"ui.long-animation-frame",startTime:e,attributes:o});i&&i.end(e+n)}})).observe({type:"long-animation-frame",buffered:!0}):n&&Eb("longtask",(e=>{let{entries:t}=e;for(const n of t){if(!Ep())return;const e=Ub(uc+n.startTime),t=Ub(n.duration),o=Cd({name:"Main UI thread blocked",op:"ui.long-task",startTime:e,attributes:{[op]:"auto.ui.browser.metrics"}});o&&o.end(e+t)}})),r&&Eb("event",(e=>{let{entries:t}=e;for(const n of t){if(!Ep())return;if("click"===n.name){const e=Ub(uc+n.startTime),t=Ub(n.duration),o={name:Es(n.target),op:`ui.interaction.${n.name}`,startTime:e,attributes:{[op]:"auto.ui.browser.metrics"}},r=Ns(n.target);r&&(o.attributes["ui.component_name"]=r);const i=Cd(o);i&&i.end(e+t)}}}));const h={name:void 0,source:void 0};function O(e,t){const n="pageload"===t.op,o=i?i(t):t,r=o.attributes||{};t.name!==o.name&&(r[ep]="custom",o.attributes=r),h.name=o.name,h.source=r[ep];const p=pM(o,{idleTimeout:a,finalTimeout:s,childSpanTimeout:c,disableAutoFinish:n,beforeSpanEnd:e=>{z(),Jb(e)}});function l(){["interactive","complete"].includes(au.document.readyState)&&e.emit("idleSpanEnableAutoFinish",p)}return n&&au.document&&(au.document.addEventListener("readystatechange",(()=>{l()})),l()),p}return{name:"BrowserTracing",afterAllSetup(e){let n,o=au.location&&au.location.href;e.on("startNavigationSpan",(t=>{Rc()===e&&(n&&!vp(n).timestamp&&(Yl&&Bs.log(`[Tracing] Finishing current root span with op: ${vp(n).op}`),n.end()),n=O(e,{op:"navigation",...t}))})),e.on("startPageLoadSpan",(function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Rc()!==e)return;n&&!vp(n).timestamp&&(Yl&&Bs.log(`[Tracing] Finishing current root span with op: ${vp(n).op}`),n.end());const r=pp(o.sentryTrace||vM("sentry-trace"),o.baggage||vM("baggage"));_c().setPropagationContext(r),n=O(e,{op:"pageload",...t})})),e.on("spanEnd",(e=>{const t=vp(e).op;if(e!==xp(e)||"navigation"!==t&&"pageload"!==t)return;const n=_c(),o=n.getPropagationContext();n.setPropagationContext({...o,sampled:void 0!==o.sampled?o.sampled:qp(e),dsc:o.dsc||Lp(e)})})),au.location&&(M&&yM(e,{name:au.location.pathname,startTime:uc?uc/1e3:void 0,attributes:{[ep]:"url",[op]:"auto.pageload.browser"}}),f&&xl((t=>{let{to:n,from:r}=t;void 0===r&&o&&-1!==o.indexOf(n)?o=void 0:r!==n&&(o=void 0,function(e,t){Wc().setPropagationContext(ac()),_c().setPropagationContext(ac()),e.emit("startNavigationSpan",t),_c().setTransactionName(t.name);const n=Ep();n&&vp(n).op}(e,{name:au.location.pathname,attributes:{[ep]:"url",[op]:"auto.navigation.browser"}}))}))),p&&(au&&au.document?au.document.addEventListener("visibilitychange",(()=>{const e=Ep();if(!e)return;const t=xp(e);if(au.document.hidden&&t){const e="cancelled",{op:n,status:o}=vp(t);Yl&&Bs.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`),o||t.setStatus({code:fp,message:e}),t.setAttribute("sentry.cancellation_reason","document.hidden"),t.end()}})):Yl&&Bs.warn("[Tracing] Could not set up background tab detection due to lack of global document")),r&&function(e,t,n,o){let r;const i=()=>{const i="ui.action.click",a=Ep(),s=a&&xp(a);if(s){const e=vp(s).op;if(["navigation","pageload"].includes(e))return void(Yl&&Bs.warn(`[Tracing] Did not create ${i} span because a pageload or navigation span is in progress.`))}r&&(r.setAttribute(rp,"interactionInterrupted"),r.end(),r=void 0),o.name?r=pM({name:o.name,op:i,attributes:{[ep]:o.source||"url"}},{idleTimeout:e,finalTimeout:t,childSpanTimeout:n}):Yl&&Bs.warn(`[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`)};au.document&&addEventListener("click",i,{once:!1,capture:!0})}(a,s,c,h),t&&function(){const e=e=>{let{entries:t}=e;const n=Ep(),o=n&&xp(n);t.forEach((e=>{if(!function(e){return"duration"in e}(e)||!o)return;const t=e.interactionId;if(null!=t&&!tM.has(t)){if(eM.length>10){const e=eM.shift();tM.delete(e)}eM.push(t),tM.set(t,o)}}))};Eb("event",e),Eb("first-input",e)}(),zM(e,{traceFetch:l,traceXHR:u,tracePropagationTargets:e.getOptions().tracePropagationTargets,shouldCreateSpanForRequest:d,enableHTTPTimings:b})}}};function yM(e,t,n){e.emit("startPageLoadSpan",t,n),_c().setTransactionName(t.name);const o=Ep();return"pageload"===(o&&vp(o).op)?o:void 0}function vM(e){const t=(n=`meta[name=${e}]`,Ss.document&&Ss.document.querySelector?Ss.document.querySelector(n):null);var n;return t?t.getAttribute("content"):void 0}let qM,_M,WM,wM,RM,SM=!1;const xM=new WeakSet;function EM(e){let t,n=e[0],o=1;for(;o<e.length;){const r=e[o],i=e[o+1];if(o+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(t=n,n=i(n)):"call"!==r&&"optionalCall"!==r||(n=i((function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n.call(t,...o)})),t=void 0)}return n}function TM(e,t){const n=t&&t.getDsn(),o=t&&t.getOptions().tunnel;return function(e,t){return!!t&&e.includes(t.host)}(e,n)||function(e,t){if(!t)return!1;return CM(e)===CM(t)}(e,o)}function CM(e){return"/"===e[e.length-1]?e.slice(0,-1):e}function NM(){return!("undefined"!==typeof __SENTRY_BROWSER_BUNDLE__&&__SENTRY_BROWSER_BUNDLE__)&&"[object process]"===Object.prototype.toString.call("undefined"!==typeof process?process:0)}function LM(){return"undefined"!==typeof window&&(!NM()||void 0!==us.process&&"renderer"===us.process.type)}const kM=us,PM="sentryReplaySession",IM="replay_event",BM="Unable to send Replay",DM=5e3,$M=5500,jM=15e4,XM=5e3,UM=2e7,FM=4999,VM=36e5;function HM(e,t){return null!=e?e:t()}function GM(e){let t,n=e[0],o=1;for(;o<e.length;){const r=e[o],i=e[o+1];if(o+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(t=n,n=i(n)):"call"!==r&&"optionalCall"!==r||(n=i((function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n.call(t,...o)})),t=void 0)}return n}var KM;function YM(e){const t=GM([e,"optionalAccess",e=>e.host]);return Boolean(GM([t,"optionalAccess",e=>e.shadowRoot])===e)}function JM(e){return"[object ShadowRoot]"===Object.prototype.toString.call(e)}function QM(e){try{const n=e.rules||e.cssRules;return n?((t=Array.from(n,ZM).join("")).includes(" background-clip: text;")&&!t.includes(" -webkit-background-clip: text;")&&(t=t.replace(" background-clip: text;"," -webkit-background-clip: text; background-clip: text;")),t):null}catch(n){return null}var t}function ZM(e){let t;if(function(e){return"styleSheet"in e}(e))try{t=QM(e.styleSheet)||function(e){const{cssText:t}=e;if(t.split('"').length<3)return t;const n=["@import",`url(${JSON.stringify(e.href)})`];return""===e.layerName?n.push("layer"):e.layerName&&n.push(`layer(${e.layerName})`),e.supportsText&&n.push(`supports(${e.supportsText})`),e.media.length&&n.push(e.media.mediaText),n.join(" ")+";"}(e)}catch(n){}else if(function(e){return"selectorText"in e}(e)&&e.selectorText.includes(":"))return function(e){const t=/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;return e.replace(t,"$1\\$2")}(e.cssText);return t||e.cssText}!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(KM||(KM={}));class ef{constructor(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap}getId(e){if(!e)return-1;return HM(GM([this,"access",e=>e.getMeta,"call",t=>t(e),"optionalAccess",e=>e.id]),(()=>-1))}getNode(e){return this.idNodeMap.get(e)||null}getIds(){return Array.from(this.idNodeMap.keys())}getMeta(e){return this.nodeMetaMap.get(e)||null}removeNodeFromMap(e){const t=this.getId(e);this.idNodeMap.delete(t),e.childNodes&&e.childNodes.forEach((e=>this.removeNodeFromMap(e)))}has(e){return this.idNodeMap.has(e)}hasNode(e){return this.nodeMetaMap.has(e)}add(e,t){const n=t.id;this.idNodeMap.set(n,e),this.nodeMetaMap.set(e,t)}replace(e,t){const n=this.getNode(e);if(n){const e=this.nodeMetaMap.get(n);e&&this.nodeMetaMap.set(t,e)}this.idNodeMap.set(e,t)}reset(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap}}function tf(e){let{maskInputOptions:t,tagName:n,type:o}=e;return"OPTION"===n&&(n="SELECT"),Boolean(t[n.toLowerCase()]||o&&t[o]||"password"===o||"INPUT"===n&&!o&&t.text)}function nf(e){let{isMasked:t,element:n,value:o,maskInputFn:r}=e,i=o||"";return t?(r&&(i=r(i,n)),"*".repeat(i.length)):i}function of(e){return e.toLowerCase()}function rf(e){return e.toUpperCase()}const af="__rrweb_original__";function sf(e){const t=e.type;return e.hasAttribute("data-rr-is-password")?"password":t?of(t):null}function cf(e,t,n){return"INPUT"!==t||"radio"!==n&&"checkbox"!==n?e.value:e.getAttribute("value")||""}function pf(e,t){let n;try{n=new URL(e,HM(t,(()=>window.location.href)))}catch(o){return null}return HM(GM([n.pathname.match(/\.([0-9a-z]+)(?:$)/i),"optionalAccess",e=>e[1]]),(()=>null))}const lf={};function uf(e){const t=lf[e];if(t)return t;const n=window.document;let o=window[e];if(n&&"function"===typeof n.createElement)try{const t=n.createElement("iframe");t.hidden=!0,n.head.appendChild(t);const r=t.contentWindow;r&&r[e]&&(o=r[e]),n.head.removeChild(t)}catch(r){}return lf[e]=o.bind(window)}function df(){return uf("setTimeout")(...arguments)}function bf(){return uf("clearTimeout")(...arguments)}let Mf=1;const ff=new RegExp("[^a-z0-9-_:]"),zf=-2;function hf(){return Mf++}let Of,Af;const mf=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,gf=/^(?:[a-z+]+:)?\/\//i,yf=/^www\..*/i,vf=/^(data:)([^,]*),(.*)/i;function qf(e,t){return(e||"").replace(mf,((e,n,o,r,i,a)=>{const s=o||i||a,c=n||r||"";if(!s)return e;if(gf.test(s)||yf.test(s))return`url(${c}${s}${c})`;if(vf.test(s))return`url(${c}${s}${c})`;if("/"===s[0])return`url(${c}${function(e){let t="";return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+s}${c})`;const p=t.split("/"),l=s.split("/");p.pop();for(const t of l)"."!==t&&(".."===t?p.pop():p.push(t));return`url(${c}${p.join("/")}${c})`}))}const _f=/^[^ \t\n\r\u000c]+/,Wf=/^[, \t\n\r\u000c]+/;function wf(e,t){if(!t||""===t.trim())return t;const n=e.createElement("a");return n.href=t,n.href}function Rf(e){return Boolean("svg"===e.tagName||e.ownerSVGElement)}function Sf(){const e=document.createElement("a");return e.href="",e.href}function xf(e,t,n,o,r,i){return o?"src"===n||"href"===n&&("use"!==t||"#"!==o[0])||"xlink:href"===n&&"#"!==o[0]?wf(e,o):"background"!==n||"table"!==t&&"td"!==t&&"th"!==t?"srcset"===n?function(e,t){if(""===t.trim())return t;let n=0;function o(e){let o;const r=e.exec(t.substring(n));return r?(o=r[0],n+=o.length,o):""}const r=[];for(;o(Wf),!(n>=t.length);){let i=o(_f);if(","===i.slice(-1))i=wf(e,i.substring(0,i.length-1)),r.push(i);else{let o="";i=wf(e,i);let a=!1;for(;;){const e=t.charAt(n);if(""===e){r.push((i+o).trim());break}if(a)")"===e&&(a=!1);else{if(","===e){n+=1,r.push((i+o).trim());break}"("===e&&(a=!0)}o+=e,n+=1}}}return r.join(", ")}(e,o):"style"===n?qf(o,Sf()):"object"===t&&"data"===n?wf(e,o):"function"===typeof i?i(n,o,r):o:wf(e,o):o}function Ef(e,t,n){return("video"===e||"audio"===e)&&"autoplay"===t}function Tf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return e?e.nodeType!==e.ELEMENT_NODE||o>n?-1:t(e)?o:Tf(e.parentNode,t,n,o+1):-1}function Cf(e,t){return n=>{const o=n;if(null===o)return!1;try{if(e)if("string"===typeof e){if(o.matches(`.${e}`))return!0}else if(function(e,t){for(let n=e.classList.length;n--;){const o=e.classList[n];if(t.test(o))return!0}return!1}(o,e))return!0;return!(!t||!o.matches(t))}catch(r){return!1}}}function Nf(e,t,n,o,r,i){try{const a=e.nodeType===e.ELEMENT_NODE?e:e.parentElement;if(null===a)return!1;if("INPUT"===a.tagName){const e=a.getAttribute("autocomplete");if(["current-password","new-password","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc"].includes(e))return!0}let s=-1,c=-1;if(i){if(c=Tf(a,Cf(o,r)),c<0)return!0;s=Tf(a,Cf(t,n),c>=0?c:1/0)}else{if(s=Tf(a,Cf(t,n)),s<0)return!1;c=Tf(a,Cf(o,r),s>=0?s:1/0)}return s>=0?!(c>=0)||s<=c:!(c>=0)&&!!i}catch(a){}return!!i}function Lf(e,t){const{doc:n,mirror:o,blockClass:r,blockSelector:i,unblockSelector:a,maskAllText:s,maskAttributeFn:c,maskTextClass:p,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d,inlineStylesheet:b,maskInputOptions:M={},maskTextFn:f,maskInputFn:z,dataURLOptions:h={},inlineImages:O,recordCanvas:A,keepIframeSrcFn:m,newlyAddedElement:g=!1}=t,y=function(e,t){if(!t.hasNode(e))return;const n=t.getId(e);return 1===n?void 0:n}(n,o);switch(e.nodeType){case e.DOCUMENT_NODE:return"CSS1Compat"!==e.compatMode?{type:KM.Document,childNodes:[],compatMode:e.compatMode}:{type:KM.Document,childNodes:[]};case e.DOCUMENT_TYPE_NODE:return{type:KM.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId,rootId:y};case e.ELEMENT_NODE:return function(e,t){const{doc:n,blockClass:o,blockSelector:r,unblockSelector:i,inlineStylesheet:a,maskInputOptions:s={},maskAttributeFn:c,maskInputFn:p,dataURLOptions:l={},inlineImages:u,recordCanvas:d,keepIframeSrcFn:b,newlyAddedElement:M=!1,rootId:f,maskAllText:z,maskTextClass:h,unmaskTextClass:O,maskTextSelector:A,unmaskTextSelector:m}=t,g=function(e,t,n,o){try{if(o&&e.matches(o))return!1;if("string"===typeof t){if(e.classList.contains(t))return!0}else for(let n=e.classList.length;n--;){const o=e.classList[n];if(t.test(o))return!0}if(n)return e.matches(n)}catch(r){}return!1}(e,o,r,i),y=function(e){if(e instanceof HTMLFormElement)return"form";const t=of(e.tagName);return ff.test(t)?"div":t}(e);let v={};const q=e.attributes.length;for(let w=0;w<q;w++){const t=e.attributes[w];t.name&&!Ef(y,t.name,t.value)&&(v[t.name]=xf(n,y,of(t.name),t.value,e,c))}if("link"===y&&a){const t=Array.from(n.styleSheets).find((t=>t.href===e.href));let o=null;t&&(o=QM(t)),o&&(delete v.rel,delete v.href,v._cssText=qf(o,t.href))}if("style"===y&&e.sheet&&!(e.innerText||e.textContent||"").trim().length){const t=QM(e.sheet);t&&(v._cssText=qf(t,Sf()))}if("input"===y||"textarea"===y||"select"===y||"option"===y){const t=e,n=sf(t),o=cf(t,rf(y),n),r=t.checked;if("submit"!==n&&"button"!==n&&o){const e=Nf(t,h,A,O,m,tf({type:n,tagName:rf(y),maskInputOptions:s}));v.value=nf({isMasked:e,element:t,value:o,maskInputFn:p})}r&&(v.checked=r)}"option"===y&&(e.selected&&!s.select?v.selected=!0:delete v.selected);if("canvas"===y&&d)if("2d"===e.__context)(function(e){const t=e.getContext("2d");if(!t)return!0;for(let n=0;n<e.width;n+=50)for(let o=0;o<e.height;o+=50){const r=t.getImageData,i=af in r?r[af]:r;if(new Uint32Array(i.call(t,n,o,Math.min(50,e.width-n),Math.min(50,e.height-o)).data.buffer).some((e=>0!==e)))return!1}return!0})(e)||(v.rr_dataURL=e.toDataURL(l.type,l.quality));else if(!("__context"in e)){const t=e.toDataURL(l.type,l.quality),n=document.createElement("canvas");n.width=e.width,n.height=e.height;t!==n.toDataURL(l.type,l.quality)&&(v.rr_dataURL=t)}if("img"===y&&u){Of||(Of=n.createElement("canvas"),Af=Of.getContext("2d"));const t=e,o=t.crossOrigin;t.crossOrigin="anonymous";const r=()=>{t.removeEventListener("load",r);try{Of.width=t.naturalWidth,Of.height=t.naturalHeight,Af.drawImage(t,0,0),v.rr_dataURL=Of.toDataURL(l.type,l.quality)}catch(e){console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)}o?v.crossOrigin=o:t.removeAttribute("crossorigin")};t.complete&&0!==t.naturalWidth?r():t.addEventListener("load",r)}"audio"!==y&&"video"!==y||(v.rr_mediaState=e.paused?"paused":"played",v.rr_mediaCurrentTime=e.currentTime);M||(e.scrollLeft&&(v.rr_scrollLeft=e.scrollLeft),e.scrollTop&&(v.rr_scrollTop=e.scrollTop));if(g){const{width:t,height:n}=e.getBoundingClientRect();v={class:v.class,rr_width:`${t}px`,rr_height:`${n}px`}}"iframe"!==y||b(v.src)||(g||e.contentDocument||(v.rr_src=v.src),delete v.src);let _;try{customElements.get(y)&&(_=!0)}catch(W){}return{type:KM.Element,tagName:y,attributes:v,childNodes:[],isSVG:Rf(e)||void 0,needBlock:g,rootId:f,isCustom:_}}(e,{doc:n,blockClass:r,blockSelector:i,unblockSelector:a,inlineStylesheet:b,maskAttributeFn:c,maskInputOptions:M,maskInputFn:z,dataURLOptions:h,inlineImages:O,recordCanvas:A,keepIframeSrcFn:m,newlyAddedElement:g,rootId:y,maskAllText:s,maskTextClass:p,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d});case e.TEXT_NODE:return function(e,t){const{maskAllText:n,maskTextClass:o,unmaskTextClass:r,maskTextSelector:i,unmaskTextSelector:a,maskTextFn:s,maskInputOptions:c,maskInputFn:p,rootId:l}=t,u=e.parentNode&&e.parentNode.tagName;let d=e.textContent;const b="STYLE"===u||void 0,M="SCRIPT"===u||void 0,f="TEXTAREA"===u||void 0;if(b&&d){try{e.nextSibling||e.previousSibling||GM([e,"access",e=>e.parentNode,"access",e=>e.sheet,"optionalAccess",e=>e.cssRules])&&(d=QM(e.parentNode.sheet))}catch(h){console.warn(`Cannot get CSS styles from text's parentNode. Error: ${h}`,e)}d=qf(d,Sf())}M&&(d="SCRIPT_PLACEHOLDER");const z=Nf(e,o,i,r,a,n);b||M||f||!d||!z||(d=s?s(d,e.parentElement):d.replace(/[\S]/g,"*"));f&&d&&(c.textarea||z)&&(d=p?p(d,e.parentNode):d.replace(/[\S]/g,"*"));if("OPTION"===u&&d){d=nf({isMasked:Nf(e,o,i,r,a,tf({type:null,tagName:u,maskInputOptions:c})),element:e,value:d,maskInputFn:p})}return{type:KM.Text,textContent:d||"",isStyle:b,rootId:l}}(e,{maskAllText:s,maskTextClass:p,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d,maskTextFn:f,maskInputOptions:M,maskInputFn:z,rootId:y});case e.CDATA_SECTION_NODE:return{type:KM.CDATA,textContent:"",rootId:y};case e.COMMENT_NODE:return{type:KM.Comment,textContent:e.textContent||"",rootId:y};default:return!1}}function kf(e){return void 0===e||null===e?"":e.toLowerCase()}function Pf(e,t){const{doc:n,mirror:o,blockClass:r,blockSelector:i,unblockSelector:a,maskAllText:s,maskTextClass:c,unmaskTextClass:p,maskTextSelector:l,unmaskTextSelector:u,skipChild:d=!1,inlineStylesheet:b=!0,maskInputOptions:M={},maskAttributeFn:f,maskTextFn:z,maskInputFn:h,slimDOMOptions:O,dataURLOptions:A={},inlineImages:m=!1,recordCanvas:g=!1,onSerialize:y,onIframeLoad:v,iframeLoadTimeout:q=5e3,onStylesheetLoad:_,stylesheetLoadTimeout:W=5e3,keepIframeSrcFn:w=()=>!1,newlyAddedElement:R=!1}=t;let{preserveWhiteSpace:S=!0}=t;const x=Lf(e,{doc:n,mirror:o,blockClass:r,blockSelector:i,maskAllText:s,unblockSelector:a,maskTextClass:c,unmaskTextClass:p,maskTextSelector:l,unmaskTextSelector:u,inlineStylesheet:b,maskInputOptions:M,maskAttributeFn:f,maskTextFn:z,maskInputFn:h,dataURLOptions:A,inlineImages:m,recordCanvas:g,keepIframeSrcFn:w,newlyAddedElement:R});if(!x)return console.warn(e,"not serialized"),null;let E;E=o.hasNode(e)?o.getId(e):!function(e,t){if(t.comment&&e.type===KM.Comment)return!0;if(e.type===KM.Element){if(t.script&&("script"===e.tagName||"link"===e.tagName&&("preload"===e.attributes.rel||"modulepreload"===e.attributes.rel)&&"script"===e.attributes.as||"link"===e.tagName&&"prefetch"===e.attributes.rel&&"string"===typeof e.attributes.href&&"js"===pf(e.attributes.href)))return!0;if(t.headFavicon&&("link"===e.tagName&&"shortcut icon"===e.attributes.rel||"meta"===e.tagName&&(kf(e.attributes.name).match(/^msapplication-tile(image|color)$/)||"application-name"===kf(e.attributes.name)||"icon"===kf(e.attributes.rel)||"apple-touch-icon"===kf(e.attributes.rel)||"shortcut icon"===kf(e.attributes.rel))))return!0;if("meta"===e.tagName){if(t.headMetaDescKeywords&&kf(e.attributes.name).match(/^description|keywords$/))return!0;if(t.headMetaSocial&&(kf(e.attributes.property).match(/^(og|twitter|fb):/)||kf(e.attributes.name).match(/^(og|twitter):/)||"pinterest"===kf(e.attributes.name)))return!0;if(t.headMetaRobots&&("robots"===kf(e.attributes.name)||"googlebot"===kf(e.attributes.name)||"bingbot"===kf(e.attributes.name)))return!0;if(t.headMetaHttpEquiv&&void 0!==e.attributes["http-equiv"])return!0;if(t.headMetaAuthorship&&("author"===kf(e.attributes.name)||"generator"===kf(e.attributes.name)||"framework"===kf(e.attributes.name)||"publisher"===kf(e.attributes.name)||"progid"===kf(e.attributes.name)||kf(e.attributes.property).match(/^article:/)||kf(e.attributes.property).match(/^product:/)))return!0;if(t.headMetaVerification&&("google-site-verification"===kf(e.attributes.name)||"yandex-verification"===kf(e.attributes.name)||"csrf-token"===kf(e.attributes.name)||"p:domain_verify"===kf(e.attributes.name)||"verify-v1"===kf(e.attributes.name)||"verification"===kf(e.attributes.name)||"shopify-checkout-api-token"===kf(e.attributes.name)))return!0}}return!1}(x,O)&&(S||x.type!==KM.Text||x.isStyle||x.textContent.replace(/^\s+|\s+$/gm,"").length)?hf():zf;const T=Object.assign(x,{id:E});if(o.add(e,T),E===zf)return null;y&&y(e);let C=!d;if(T.type===KM.Element){C=C&&!T.needBlock,delete T.needBlock;const t=e.shadowRoot;t&&JM(t)&&(T.isShadowHost=!0)}if((T.type===KM.Document||T.type===KM.Element)&&C){O.headWhitespace&&T.type===KM.Element&&"head"===T.tagName&&(S=!1);const t={doc:n,mirror:o,blockClass:r,blockSelector:i,maskAllText:s,unblockSelector:a,maskTextClass:c,unmaskTextClass:p,maskTextSelector:l,unmaskTextSelector:u,skipChild:d,inlineStylesheet:b,maskInputOptions:M,maskAttributeFn:f,maskTextFn:z,maskInputFn:h,slimDOMOptions:O,dataURLOptions:A,inlineImages:m,recordCanvas:g,preserveWhiteSpace:S,onSerialize:y,onIframeLoad:v,iframeLoadTimeout:q,onStylesheetLoad:_,stylesheetLoadTimeout:W,keepIframeSrcFn:w};for(const n of Array.from(e.childNodes)){const e=Pf(n,t);e&&T.childNodes.push(e)}if(function(e){return e.nodeType===e.ELEMENT_NODE}(e)&&e.shadowRoot)for(const n of Array.from(e.shadowRoot.childNodes)){const o=Pf(n,t);o&&(JM(e.shadowRoot)&&(o.isShadow=!0),T.childNodes.push(o))}}return e.parentNode&&YM(e.parentNode)&&JM(e.parentNode)&&(T.isShadow=!0),T.type===KM.Element&&"iframe"===T.tagName&&function(e,t,n){const o=e.contentWindow;if(!o)return;let r,i=!1;try{r=o.document.readyState}catch(s){return}if("complete"!==r){const o=df((()=>{i||(t(),i=!0)}),n);return void e.addEventListener("load",(()=>{bf(o),i=!0,t()}))}const a="about:blank";if(o.location.href!==a||e.src===a||""===e.src)return df(t,0),e.addEventListener("load",t);e.addEventListener("load",t)}(e,(()=>{const t=e.contentDocument;if(t&&v){const n=Pf(t,{doc:t,mirror:o,blockClass:r,blockSelector:i,unblockSelector:a,maskAllText:s,maskTextClass:c,unmaskTextClass:p,maskTextSelector:l,unmaskTextSelector:u,skipChild:!1,inlineStylesheet:b,maskInputOptions:M,maskAttributeFn:f,maskTextFn:z,maskInputFn:h,slimDOMOptions:O,dataURLOptions:A,inlineImages:m,recordCanvas:g,preserveWhiteSpace:S,onSerialize:y,onIframeLoad:v,iframeLoadTimeout:q,onStylesheetLoad:_,stylesheetLoadTimeout:W,keepIframeSrcFn:w});n&&v(e,n)}}),q),T.type===KM.Element&&"link"===T.tagName&&"string"===typeof T.attributes.rel&&("stylesheet"===T.attributes.rel||"preload"===T.attributes.rel&&"string"===typeof T.attributes.href&&"css"===pf(T.attributes.href))&&function(e,t,n){let o,r=!1;try{o=e.sheet}catch(a){return}if(o)return;const i=df((()=>{r||(t(),r=!0)}),n);e.addEventListener("load",(()=>{bf(i),r=!0,t()}))}(e,(()=>{if(_){const t=Pf(e,{doc:n,mirror:o,blockClass:r,blockSelector:i,unblockSelector:a,maskAllText:s,maskTextClass:c,unmaskTextClass:p,maskTextSelector:l,unmaskTextSelector:u,skipChild:!1,inlineStylesheet:b,maskInputOptions:M,maskAttributeFn:f,maskTextFn:z,maskInputFn:h,slimDOMOptions:O,dataURLOptions:A,inlineImages:m,recordCanvas:g,preserveWhiteSpace:S,onSerialize:y,onIframeLoad:v,iframeLoadTimeout:q,onStylesheetLoad:_,stylesheetLoadTimeout:W,keepIframeSrcFn:w});t&&_(e,t)}}),W),T}function If(e){let t,n=e[0],o=1;for(;o<e.length;){const r=e[o],i=e[o+1];if(o+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(t=n,n=i(n)):"call"!==r&&"optionalCall"!==r||(n=i((function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n.call(t,...o)})),t=void 0)}return n}function Bf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;const o={capture:!0,passive:!0};return n.addEventListener(e,t,o),()=>n.removeEventListener(e,t,o)}const Df="Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";let $f={map:{},getId:()=>(console.error(Df),-1),getNode:()=>(console.error(Df),null),removeNodeFromMap(){console.error(Df)},has:()=>(console.error(Df),!1),reset(){console.error(Df)}};function jf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=null,r=0;return function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];const c=Date.now();r||!1!==n.leading||(r=c);const p=t-(c-r),l=this;p<=0||p>t?(o&&(!function(){cz("clearTimeout")(...arguments)}(o),o=null),r=c,e.apply(l,a)):o||!1===n.trailing||(o=pz((()=>{r=!1===n.leading?0:Date.now(),o=null,e.apply(l,a)}),p))}}function Xf(e,t,n,o){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:window;const i=r.Object.getOwnPropertyDescriptor(e,t);return r.Object.defineProperty(e,t,o?n:{set(e){pz((()=>{n.set.call(this,e)}),0),i&&i.set&&i.set.call(this,e)}}),()=>Xf(e,t,i||{},!0)}function Uf(e,t,n){try{if(!(t in e))return()=>{};const o=e[t],r=n(o);return"function"===typeof r&&(r.prototype=r.prototype||{},Object.defineProperties(r,{__rrweb_original__:{enumerable:!1,value:o}})),e[t]=r,()=>{e[t]=o}}catch(o){return()=>{}}}"undefined"!==typeof window&&window.Proxy&&window.Reflect&&($f=new Proxy($f,{get:(e,t,n)=>("map"===t&&console.error(Df),Reflect.get(e,t,n))}));let Ff=Date.now;function Vf(e){const t=e.document;return{left:t.scrollingElement?t.scrollingElement.scrollLeft:void 0!==e.pageXOffset?e.pageXOffset:If([t,"optionalAccess",e=>e.documentElement,"access",e=>e.scrollLeft])||If([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.parentElement,"optionalAccess",e=>e.scrollLeft])||If([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.scrollLeft])||0,top:t.scrollingElement?t.scrollingElement.scrollTop:void 0!==e.pageYOffset?e.pageYOffset:If([t,"optionalAccess",e=>e.documentElement,"access",e=>e.scrollTop])||If([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.parentElement,"optionalAccess",e=>e.scrollTop])||If([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.scrollTop])||0}}function Hf(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function Gf(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function Kf(e){if(!e)return null;return e.nodeType===e.ELEMENT_NODE?e:e.parentElement}function Yf(e,t,n,o,r){if(!e)return!1;const i=Kf(e);if(!i)return!1;const a=Cf(t,n);if(!r){const e=o&&i.matches(o);return a(i)&&!e}const s=Tf(i,a);let c=-1;return!(s<0)&&(o&&(c=Tf(i,Cf(null,o))),s>-1&&c<0||s<c)}function Jf(e,t){return t.getId(e)===zf}function Qf(e,t){if(YM(e))return!1;const n=t.getId(e);return!t.has(n)||(!e.parentNode||e.parentNode.nodeType!==e.DOCUMENT_NODE)&&(!e.parentNode||Qf(e.parentNode,t))}function Zf(e){return Boolean(e.changedTouches)}function ez(e,t){return Boolean("IFRAME"===e.nodeName&&t.getMeta(e))}function tz(e,t){return Boolean("LINK"===e.nodeName&&e.nodeType===e.ELEMENT_NODE&&e.getAttribute&&"stylesheet"===e.getAttribute("rel")&&t.getMeta(e))}function nz(e){return Boolean(If([e,"optionalAccess",e=>e.shadowRoot]))}/[1-9][0-9]{12}/.test(Date.now().toString())||(Ff=()=>(new Date).getTime());class oz{constructor(){this.id=1,this.styleIDMap=new WeakMap,this.idStyleMap=new Map}getId(e){return t=this.styleIDMap.get(e),n=()=>-1,null!=t?t:n();var t,n}has(e){return this.styleIDMap.has(e)}add(e,t){if(this.has(e))return this.getId(e);let n;return n=void 0===t?this.id++:t,this.styleIDMap.set(e,n),this.idStyleMap.set(n,e),n}getStyle(e){return this.idStyleMap.get(e)||null}reset(){this.styleIDMap=new WeakMap,this.idStyleMap=new Map,this.id=1}generateId(){return this.id++}}function rz(e){let t=null;return If([e,"access",e=>e.getRootNode,"optionalCall",e=>e(),"optionalAccess",e=>e.nodeType])===Node.DOCUMENT_FRAGMENT_NODE&&e.getRootNode().host&&(t=e.getRootNode().host),t}function iz(e){const t=e.ownerDocument;if(!t)return!1;const n=function(e){let t,n=e;for(;t=rz(n);)n=t;return n}(e);return t.contains(n)}function az(e){const t=e.ownerDocument;return!!t&&(t.contains(e)||iz(e))}const sz={};function cz(e){const t=sz[e];if(t)return t;const n=window.document;let o=window[e];if(n&&"function"===typeof n.createElement)try{const t=n.createElement("iframe");t.hidden=!0,n.head.appendChild(t);const r=t.contentWindow;r&&r[e]&&(o=r[e]),n.head.removeChild(t)}catch(r){}return sz[e]=o.bind(window)}function pz(){return cz("setTimeout")(...arguments)}var lz=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(lz||{}),uz=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(uz||{}),dz=(e=>(e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel",e))(dz||{}),bz=(e=>(e[e.Mouse=0]="Mouse",e[e.Pen=1]="Pen",e[e.Touch=2]="Touch",e))(bz||{});function Mz(e){let t,n=e[0],o=1;for(;o<e.length;){const r=e[o],i=e[o+1];if(o+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(t=n,n=i(n)):"call"!==r&&"optionalCall"!==r||(n=i((function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n.call(t,...o)})),t=void 0)}return n}function fz(e){return"__ln"in e}class zz{constructor(){this.length=0,this.head=null,this.tail=null}get(e){if(e>=this.length)throw new Error("Position outside of list range");let t=this.head;for(let n=0;n<e;n++)t=Mz([t,"optionalAccess",e=>e.next])||null;return t}addNode(e){const t={value:e,previous:null,next:null};if(e.__ln=t,e.previousSibling&&fz(e.previousSibling)){const n=e.previousSibling.__ln.next;t.next=n,t.previous=e.previousSibling.__ln,e.previousSibling.__ln.next=t,n&&(n.previous=t)}else if(e.nextSibling&&fz(e.nextSibling)&&e.nextSibling.__ln.previous){const n=e.nextSibling.__ln.previous;t.previous=n,t.next=e.nextSibling.__ln,e.nextSibling.__ln.previous=t,n&&(n.next=t)}else this.head&&(this.head.previous=t),t.next=this.head,this.head=t;null===t.next&&(this.tail=t),this.length++}removeNode(e){const t=e.__ln;this.head&&(t.previous?(t.previous.next=t.next,t.next?t.next.previous=t.previous:this.tail=t.previous):(this.head=t.next,this.head?this.head.previous=null:this.tail=null),e.__ln&&delete e.__ln,this.length--)}}const hz=(e,t)=>`${e}@${t}`;class Oz{constructor(){this.frozen=!1,this.locked=!1,this.texts=[],this.attributes=[],this.attributeMap=new WeakMap,this.removes=[],this.mapRemoves=[],this.movedMap={},this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.processMutations=e=>{e.forEach(this.processMutation),this.emit()},this.emit=()=>{if(this.frozen||this.locked)return;const e=[],t=new Set,n=new zz,o=e=>{let t=e,n=zf;for(;n===zf;)t=t&&t.nextSibling,n=t&&this.mirror.getId(t);return n},r=r=>{if(!r.parentNode||!az(r))return;const i=YM(r.parentNode)?this.mirror.getId(rz(r)):this.mirror.getId(r.parentNode),a=o(r);if(-1===i||-1===a)return n.addNode(r);const s=Pf(r,{doc:this.doc,mirror:this.mirror,blockClass:this.blockClass,blockSelector:this.blockSelector,maskAllText:this.maskAllText,unblockSelector:this.unblockSelector,maskTextClass:this.maskTextClass,unmaskTextClass:this.unmaskTextClass,maskTextSelector:this.maskTextSelector,unmaskTextSelector:this.unmaskTextSelector,skipChild:!0,newlyAddedElement:!0,inlineStylesheet:this.inlineStylesheet,maskInputOptions:this.maskInputOptions,maskAttributeFn:this.maskAttributeFn,maskTextFn:this.maskTextFn,maskInputFn:this.maskInputFn,slimDOMOptions:this.slimDOMOptions,dataURLOptions:this.dataURLOptions,recordCanvas:this.recordCanvas,inlineImages:this.inlineImages,onSerialize:e=>{ez(e,this.mirror)&&this.iframeManager.addIframe(e),tz(e,this.mirror)&&this.stylesheetManager.trackLinkElement(e),nz(r)&&this.shadowDomManager.addShadowRoot(r.shadowRoot,this.doc)},onIframeLoad:(e,t)=>{this.iframeManager.attachIframe(e,t),e.contentWindow&&this.canvasManager.addWindow(e.contentWindow),this.shadowDomManager.observeAttachShadow(e)},onStylesheetLoad:(e,t)=>{this.stylesheetManager.attachLinkElement(e,t)}});s&&(e.push({parentId:i,nextId:a,node:s}),t.add(s.id))};for(;this.mapRemoves.length;)this.mirror.removeNodeFromMap(this.mapRemoves.shift());for(const s of this.movedSet)mz(this.removes,s,this.mirror)&&!this.movedSet.has(s.parentNode)||r(s);for(const s of this.addedSet)yz(this.droppedSet,s)||mz(this.removes,s,this.mirror)?yz(this.movedSet,s)?r(s):this.droppedSet.add(s):r(s);let i=null;for(;n.length;){let e=null;if(i){const t=this.mirror.getId(i.value.parentNode),n=o(i.value);-1!==t&&-1!==n&&(e=i)}if(!e){let t=n.tail;for(;t;){const n=t;if(t=t.previous,n){const t=this.mirror.getId(n.value.parentNode);if(-1===o(n.value))continue;if(-1!==t){e=n;break}{const t=n.value;if(t.parentNode&&t.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE){const o=t.parentNode.host;if(-1!==this.mirror.getId(o)){e=n;break}}}}}}if(!e){for(;n.head;)n.removeNode(n.head.value);break}i=e.previous,n.removeNode(e.value),r(e.value)}const a={texts:this.texts.map((e=>({id:this.mirror.getId(e.node),value:e.value}))).filter((e=>!t.has(e.id))).filter((e=>this.mirror.has(e.id))),attributes:this.attributes.map((e=>{const{attributes:t}=e;if("string"===typeof t.style){const n=JSON.stringify(e.styleDiff),o=JSON.stringify(e._unchangedStyles);n.length<t.style.length&&(n+o).split("var(").length===t.style.split("var(").length&&(t.style=e.styleDiff)}return{id:this.mirror.getId(e.node),attributes:t}})).filter((e=>!t.has(e.id))).filter((e=>this.mirror.has(e.id))),removes:this.removes,adds:e};(a.texts.length||a.attributes.length||a.removes.length||a.adds.length)&&(this.texts=[],this.attributes=[],this.attributeMap=new WeakMap,this.removes=[],this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.movedMap={},this.mutationCb(a))},this.processMutation=e=>{if(!Jf(e.target,this.mirror))switch(e.type){case"characterData":{const t=e.target.textContent;Yf(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!1)||t===e.oldValue||this.texts.push({value:Nf(e.target,this.maskTextClass,this.maskTextSelector,this.unmaskTextClass,this.unmaskTextSelector,this.maskAllText)&&t?this.maskTextFn?this.maskTextFn(t,Kf(e.target)):t.replace(/[\S]/g,"*"):t,node:e.target});break}case"attributes":{const n=e.target;let o=e.attributeName,r=e.target.getAttribute(o);if("value"===o){const t=sf(n),o=n.tagName;r=cf(n,o,t);const i=tf({maskInputOptions:this.maskInputOptions,tagName:o,type:t});r=nf({isMasked:Nf(e.target,this.maskTextClass,this.maskTextSelector,this.unmaskTextClass,this.unmaskTextSelector,i),element:n,value:r,maskInputFn:this.maskInputFn})}if(Yf(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!1)||r===e.oldValue)return;let i=this.attributeMap.get(e.target);if("IFRAME"===n.tagName&&"src"===o&&!this.keepIframeSrcFn(r)){if(n.contentDocument)return;o="rr_src"}if(i||(i={node:e.target,attributes:{},styleDiff:{},_unchangedStyles:{}},this.attributes.push(i),this.attributeMap.set(e.target,i)),"type"===o&&"INPUT"===n.tagName&&"password"===(e.oldValue||"").toLowerCase()&&n.setAttribute("data-rr-is-password","true"),!Ef(n.tagName,o)&&(i.attributes[o]=xf(this.doc,of(n.tagName),of(o),r,n,this.maskAttributeFn),"style"===o)){if(!this.unattachedDoc)try{this.unattachedDoc=document.implementation.createHTMLDocument()}catch(t){this.unattachedDoc=this.doc}const o=this.unattachedDoc.createElement("span");e.oldValue&&o.setAttribute("style",e.oldValue);for(const e of Array.from(n.style)){const t=n.style.getPropertyValue(e),r=n.style.getPropertyPriority(e);t!==o.style.getPropertyValue(e)||r!==o.style.getPropertyPriority(e)?i.styleDiff[e]=""===r?t:[t,r]:i._unchangedStyles[e]=[t,r]}for(const e of Array.from(o.style))""===n.style.getPropertyValue(e)&&(i.styleDiff[e]=!1)}break}case"childList":if(Yf(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!0))return;e.addedNodes.forEach((t=>this.genAdds(t,e.target))),e.removedNodes.forEach((t=>{const n=this.mirror.getId(t),o=YM(e.target)?this.mirror.getId(e.target.host):this.mirror.getId(e.target);Yf(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!1)||Jf(t,this.mirror)||!function(e,t){return-1!==t.getId(e)}(t,this.mirror)||(this.addedSet.has(t)?(Az(this.addedSet,t),this.droppedSet.add(t)):this.addedSet.has(e.target)&&-1===n||Qf(e.target,this.mirror)||(this.movedSet.has(t)&&this.movedMap[hz(n,o)]?Az(this.movedSet,t):this.removes.push({parentId:o,id:n,isShadow:!(!YM(e.target)||!JM(e.target))||void 0})),this.mapRemoves.push(t))}))}},this.genAdds=(e,t)=>{if(!this.processedNodeManager.inOtherBuffer(e,this)&&!this.addedSet.has(e)&&!this.movedSet.has(e)){if(this.mirror.hasNode(e)){if(Jf(e,this.mirror))return;this.movedSet.add(e);let n=null;t&&this.mirror.hasNode(t)&&(n=this.mirror.getId(t)),n&&-1!==n&&(this.movedMap[hz(this.mirror.getId(e),n)]=!0)}else this.addedSet.add(e),this.droppedSet.delete(e);Yf(e,this.blockClass,this.blockSelector,this.unblockSelector,!1)||(e.childNodes.forEach((e=>this.genAdds(e))),nz(e)&&e.shadowRoot.childNodes.forEach((t=>{this.processedNodeManager.add(t,this),this.genAdds(t,e)})))}}}init(e){["mutationCb","blockClass","blockSelector","unblockSelector","maskAllText","maskTextClass","unmaskTextClass","maskTextSelector","unmaskTextSelector","inlineStylesheet","maskInputOptions","maskAttributeFn","maskTextFn","maskInputFn","keepIframeSrcFn","recordCanvas","inlineImages","slimDOMOptions","dataURLOptions","doc","mirror","iframeManager","stylesheetManager","shadowDomManager","canvasManager","processedNodeManager"].forEach((t=>{this[t]=e[t]}))}freeze(){this.frozen=!0,this.canvasManager.freeze()}unfreeze(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()}isFrozen(){return this.frozen}lock(){this.locked=!0,this.canvasManager.lock()}unlock(){this.locked=!1,this.canvasManager.unlock(),this.emit()}reset(){this.shadowDomManager.reset(),this.canvasManager.reset()}}function Az(e,t){e.delete(t),t.childNodes.forEach((t=>Az(e,t)))}function mz(e,t,n){return 0!==e.length&&gz(e,t,n)}function gz(e,t,n){const{parentNode:o}=t;if(!o)return!1;const r=n.getId(o);return!!e.some((e=>e.id===r))||gz(e,o,n)}function yz(e,t){return 0!==e.size&&vz(e,t)}function vz(e,t){const{parentNode:n}=t;return!!n&&(!!e.has(n)||vz(e,n))}let qz;const _z=e=>{if(!qz)return e;return function(){try{return e(...arguments)}catch(t){if(qz&&!0===qz(t))return()=>{};throw t}}};function Wz(e){let t,n=e[0],o=1;for(;o<e.length;){const r=e[o],i=e[o+1];if(o+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(t=n,n=i(n)):"call"!==r&&"optionalCall"!==r||(n=i((function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n.call(t,...o)})),t=void 0)}return n}const wz=[];function Rz(e){try{if("composedPath"in e){const t=e.composedPath();if(t.length)return t[0]}else if("path"in e&&e.path.length)return e.path[0]}catch(t){}return e&&e.target}function Sz(e,t){const n=new Oz;wz.push(n),n.init(e);let o=window.MutationObserver||window.__rrMutationObserver;const r=Wz([window,"optionalAccess",e=>e.Zone,"optionalAccess",e=>e.__symbol__,"optionalCall",e=>e("MutationObserver")]);r&&window[r]&&(o=window[r]);const i=new o(_z((t=>{e.onMutation&&!1===e.onMutation(t)||n.processMutations.bind(n)(t)})));return i.observe(t,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),i}function xz(e){let{mouseInteractionCb:t,doc:n,mirror:o,blockClass:r,blockSelector:i,unblockSelector:a,sampling:s}=e;if(!1===s.mouseInteraction)return()=>{};const c=!0===s.mouseInteraction||void 0===s.mouseInteraction?{}:s.mouseInteraction,p=[];let l=null;return Object.keys(dz).filter((e=>Number.isNaN(Number(e))&&!e.endsWith("_Departed")&&!1!==c[e])).forEach((e=>{let s=of(e);const c=(e=>n=>{const s=Rz(n);if(Yf(s,r,i,a,!0))return;let c=null,p=e;if("pointerType"in n){switch(n.pointerType){case"mouse":c=bz.Mouse;break;case"touch":c=bz.Touch;break;case"pen":c=bz.Pen}c===bz.Touch?dz[e]===dz.MouseDown?p="TouchStart":dz[e]===dz.MouseUp&&(p="TouchEnd"):bz.Pen}else Zf(n)&&(c=bz.Touch);null!==c?(l=c,(p.startsWith("Touch")&&c===bz.Touch||p.startsWith("Mouse")&&c===bz.Mouse)&&(c=null)):dz[e]===dz.Click&&(c=l,l=null);const u=Zf(n)?n.changedTouches[0]:n;if(!u)return;const d=o.getId(s),{clientX:b,clientY:M}=u;_z(t)({type:dz[p],id:d,x:b,y:M,...null!==c&&{pointerType:c}})})(e);if(window.PointerEvent)switch(dz[e]){case dz.MouseDown:case dz.MouseUp:s=s.replace("mouse","pointer");break;case dz.TouchStart:case dz.TouchEnd:return}p.push(Bf(s,c,n))})),_z((()=>{p.forEach((e=>e()))}))}function Ez(e){let{scrollCb:t,doc:n,mirror:o,blockClass:r,blockSelector:i,unblockSelector:a,sampling:s}=e;return Bf("scroll",_z(jf(_z((e=>{const s=Rz(e);if(!s||Yf(s,r,i,a,!0))return;const c=o.getId(s);if(s===n&&n.defaultView){const e=Vf(n.defaultView);t({id:c,x:e.left,y:e.top})}else t({id:c,x:s.scrollLeft,y:s.scrollTop})})),s.scroll||100)),n)}const Tz=["INPUT","TEXTAREA","SELECT"],Cz=new WeakMap;function Nz(e){let{inputCb:t,doc:n,mirror:o,blockClass:r,blockSelector:i,unblockSelector:a,ignoreClass:s,ignoreSelector:c,maskInputOptions:p,maskInputFn:l,sampling:u,userTriggeredOnInput:d,maskTextClass:b,unmaskTextClass:M,maskTextSelector:f,unmaskTextSelector:z}=e;function h(e){let t=Rz(e);const o=e.isTrusted,u=t&&rf(t.tagName);if("OPTION"===u&&(t=t.parentElement),!t||!u||Tz.indexOf(u)<0||Yf(t,r,i,a,!0))return;const h=t;if(h.classList.contains(s)||c&&h.matches(c))return;const A=sf(t);let m=cf(h,u,A),g=!1;const y=tf({maskInputOptions:p,tagName:u,type:A}),v=Nf(t,b,f,M,z,y);"radio"!==A&&"checkbox"!==A||(g=t.checked),m=nf({isMasked:v,element:t,value:m,maskInputFn:l}),O(t,d?{text:m,isChecked:g,userTriggered:o}:{text:m,isChecked:g});const q=t.name;"radio"===A&&q&&g&&n.querySelectorAll(`input[type="radio"][name="${q}"]`).forEach((e=>{if(e!==t){const t=nf({isMasked:v,element:e,value:cf(e,u,A),maskInputFn:l});O(e,d?{text:t,isChecked:!g,userTriggered:!1}:{text:t,isChecked:!g})}}))}function O(e,n){const r=Cz.get(e);if(!r||r.text!==n.text||r.isChecked!==n.isChecked){Cz.set(e,n);const r=o.getId(e);_z(t)({...n,id:r})}}const A=("last"===u.input?["change"]:["input","change"]).map((e=>Bf(e,_z(h),n))),m=n.defaultView;if(!m)return()=>{A.forEach((e=>e()))};const g=m.Object.getOwnPropertyDescriptor(m.HTMLInputElement.prototype,"value"),y=[[m.HTMLInputElement.prototype,"value"],[m.HTMLInputElement.prototype,"checked"],[m.HTMLSelectElement.prototype,"value"],[m.HTMLTextAreaElement.prototype,"value"],[m.HTMLSelectElement.prototype,"selectedIndex"],[m.HTMLOptionElement.prototype,"selected"]];return g&&g.set&&A.push(...y.map((e=>Xf(e[0],e[1],{set(){_z(h)({target:this,isTrusted:!1})}},!1,m)))),_z((()=>{A.forEach((e=>e()))}))}function Lz(e){return function(e,t){if(Bz("CSSGroupingRule")&&e.parentRule instanceof CSSGroupingRule||Bz("CSSMediaRule")&&e.parentRule instanceof CSSMediaRule||Bz("CSSSupportsRule")&&e.parentRule instanceof CSSSupportsRule||Bz("CSSConditionRule")&&e.parentRule instanceof CSSConditionRule){const n=Array.from(e.parentRule.cssRules).indexOf(e);t.unshift(n)}else if(e.parentStyleSheet){const n=Array.from(e.parentStyleSheet.cssRules).indexOf(e);t.unshift(n)}return t}(e,[])}function kz(e,t,n){let o,r;return e?(e.ownerNode?o=t.getId(e.ownerNode):r=n.getId(e),{styleId:r,id:o}):{}}function Pz(e,t){let{mirror:n,stylesheetManager:o}=e,r=null;r="#document"===t.nodeName?n.getId(t):n.getId(t.host);const i="#document"===t.nodeName?Wz([t,"access",e=>e.defaultView,"optionalAccess",e=>e.Document]):Wz([t,"access",e=>e.ownerDocument,"optionalAccess",e=>e.defaultView,"optionalAccess",e=>e.ShadowRoot]),a=Wz([i,"optionalAccess",e=>e.prototype])?Object.getOwnPropertyDescriptor(Wz([i,"optionalAccess",e=>e.prototype]),"adoptedStyleSheets"):void 0;return null!==r&&-1!==r&&i&&a?(Object.defineProperty(t,"adoptedStyleSheets",{configurable:a.configurable,enumerable:a.enumerable,get(){return Wz([a,"access",e=>e.get,"optionalAccess",e=>e.call,"call",e=>e(this)])},set(e){const t=Wz([a,"access",e=>e.set,"optionalAccess",e=>e.call,"call",t=>t(this,e)]);if(null!==r&&-1!==r)try{o.adoptStyleSheets(e,r)}catch(n){}return t}}),_z((()=>{Object.defineProperty(t,"adoptedStyleSheets",{configurable:a.configurable,enumerable:a.enumerable,get:a.get,set:a.set})}))):()=>{}}function Iz(e){const t=e.doc.defaultView;if(!t)return()=>{};let n;e.recordDOM&&(n=Sz(e,e.doc));const o=function(e){let{mousemoveCb:t,sampling:n,doc:o,mirror:r}=e;if(!1===n.mousemove)return()=>{};const i="number"===typeof n.mousemove?n.mousemove:50,a="number"===typeof n.mousemoveCallback?n.mousemoveCallback:500;let s,c=[];const p=jf(_z((e=>{const n=Date.now()-s;t(c.map((e=>(e.timeOffset-=n,e))),e),c=[],s=null})),a),l=_z(jf(_z((e=>{const t=Rz(e),{clientX:n,clientY:o}=Zf(e)?e.changedTouches[0]:e;s||(s=Ff()),c.push({x:n,y:o,id:r.getId(t),timeOffset:Ff()-s}),p("undefined"!==typeof DragEvent&&e instanceof DragEvent?uz.Drag:e instanceof MouseEvent?uz.MouseMove:uz.TouchMove)})),i,{trailing:!1})),u=[Bf("mousemove",l,o),Bf("touchmove",l,o),Bf("drag",l,o)];return _z((()=>{u.forEach((e=>e()))}))}(e),r=xz(e),i=Ez(e),a=function(e,t){let{viewportResizeCb:n}=e,{win:o}=t,r=-1,i=-1;return Bf("resize",_z(jf(_z((()=>{const e=Hf(),t=Gf();r===e&&i===t||(n({width:Number(t),height:Number(e)}),r=e,i=t)})),200)),o)}(e,{win:t}),s=Nz(e),c=function(e){let{mediaInteractionCb:t,blockClass:n,blockSelector:o,unblockSelector:r,mirror:i,sampling:a,doc:s}=e;const c=_z((e=>jf(_z((a=>{const s=Rz(a);if(!s||Yf(s,n,o,r,!0))return;const{currentTime:c,volume:p,muted:l,playbackRate:u}=s;t({type:e,id:i.getId(s),currentTime:c,volume:p,muted:l,playbackRate:u})})),a.media||500))),p=[Bf("play",c(0),s),Bf("pause",c(1),s),Bf("seeked",c(2),s),Bf("volumechange",c(3),s),Bf("ratechange",c(4),s)];return _z((()=>{p.forEach((e=>e()))}))}(e);let p=()=>{},l=()=>{},u=()=>{},d=()=>{};e.recordDOM&&(p=function(e,t){let{styleSheetRuleCb:n,mirror:o,stylesheetManager:r}=e,{win:i}=t;if(!i.CSSStyleSheet||!i.CSSStyleSheet.prototype)return()=>{};const a=i.CSSStyleSheet.prototype.insertRule;i.CSSStyleSheet.prototype.insertRule=new Proxy(a,{apply:_z(((e,t,i)=>{const[a,s]=i,{id:c,styleId:p}=kz(t,o,r.styleMirror);return(c&&-1!==c||p&&-1!==p)&&n({id:c,styleId:p,adds:[{rule:a,index:s}]}),e.apply(t,i)}))});const s=i.CSSStyleSheet.prototype.deleteRule;let c,p;i.CSSStyleSheet.prototype.deleteRule=new Proxy(s,{apply:_z(((e,t,i)=>{const[a]=i,{id:s,styleId:c}=kz(t,o,r.styleMirror);return(s&&-1!==s||c&&-1!==c)&&n({id:s,styleId:c,removes:[{index:a}]}),e.apply(t,i)}))}),i.CSSStyleSheet.prototype.replace&&(c=i.CSSStyleSheet.prototype.replace,i.CSSStyleSheet.prototype.replace=new Proxy(c,{apply:_z(((e,t,i)=>{const[a]=i,{id:s,styleId:c}=kz(t,o,r.styleMirror);return(s&&-1!==s||c&&-1!==c)&&n({id:s,styleId:c,replace:a}),e.apply(t,i)}))})),i.CSSStyleSheet.prototype.replaceSync&&(p=i.CSSStyleSheet.prototype.replaceSync,i.CSSStyleSheet.prototype.replaceSync=new Proxy(p,{apply:_z(((e,t,i)=>{const[a]=i,{id:s,styleId:c}=kz(t,o,r.styleMirror);return(s&&-1!==s||c&&-1!==c)&&n({id:s,styleId:c,replaceSync:a}),e.apply(t,i)}))}));const l={};Dz("CSSGroupingRule")?l.CSSGroupingRule=i.CSSGroupingRule:(Dz("CSSMediaRule")&&(l.CSSMediaRule=i.CSSMediaRule),Dz("CSSConditionRule")&&(l.CSSConditionRule=i.CSSConditionRule),Dz("CSSSupportsRule")&&(l.CSSSupportsRule=i.CSSSupportsRule));const u={};return Object.entries(l).forEach((e=>{let[t,i]=e;u[t]={insertRule:i.prototype.insertRule,deleteRule:i.prototype.deleteRule},i.prototype.insertRule=new Proxy(u[t].insertRule,{apply:_z(((e,t,i)=>{const[a,s]=i,{id:c,styleId:p}=kz(t.parentStyleSheet,o,r.styleMirror);return(c&&-1!==c||p&&-1!==p)&&n({id:c,styleId:p,adds:[{rule:a,index:[...Lz(t),s||0]}]}),e.apply(t,i)}))}),i.prototype.deleteRule=new Proxy(u[t].deleteRule,{apply:_z(((e,t,i)=>{const[a]=i,{id:s,styleId:c}=kz(t.parentStyleSheet,o,r.styleMirror);return(s&&-1!==s||c&&-1!==c)&&n({id:s,styleId:c,removes:[{index:[...Lz(t),a]}]}),e.apply(t,i)}))})})),_z((()=>{i.CSSStyleSheet.prototype.insertRule=a,i.CSSStyleSheet.prototype.deleteRule=s,c&&(i.CSSStyleSheet.prototype.replace=c),p&&(i.CSSStyleSheet.prototype.replaceSync=p),Object.entries(l).forEach((e=>{let[t,n]=e;n.prototype.insertRule=u[t].insertRule,n.prototype.deleteRule=u[t].deleteRule}))}))}(e,{win:t}),l=Pz(e,e.doc),u=function(e,t){let{styleDeclarationCb:n,mirror:o,ignoreCSSAttributes:r,stylesheetManager:i}=e,{win:a}=t;const s=a.CSSStyleDeclaration.prototype.setProperty;a.CSSStyleDeclaration.prototype.setProperty=new Proxy(s,{apply:_z(((e,t,a)=>{const[c,p,l]=a;if(r.has(c))return s.apply(t,[c,p,l]);const{id:u,styleId:d}=kz(Wz([t,"access",e=>e.parentRule,"optionalAccess",e=>e.parentStyleSheet]),o,i.styleMirror);return(u&&-1!==u||d&&-1!==d)&&n({id:u,styleId:d,set:{property:c,value:p,priority:l},index:Lz(t.parentRule)}),e.apply(t,a)}))});const c=a.CSSStyleDeclaration.prototype.removeProperty;return a.CSSStyleDeclaration.prototype.removeProperty=new Proxy(c,{apply:_z(((e,t,a)=>{const[s]=a;if(r.has(s))return c.apply(t,[s]);const{id:p,styleId:l}=kz(Wz([t,"access",e=>e.parentRule,"optionalAccess",e=>e.parentStyleSheet]),o,i.styleMirror);return(p&&-1!==p||l&&-1!==l)&&n({id:p,styleId:l,remove:{property:s},index:Lz(t.parentRule)}),e.apply(t,a)}))}),_z((()=>{a.CSSStyleDeclaration.prototype.setProperty=s,a.CSSStyleDeclaration.prototype.removeProperty=c}))}(e,{win:t}),e.collectFonts&&(d=function(e){let{fontCb:t,doc:n}=e;const o=n.defaultView;if(!o)return()=>{};const r=[],i=new WeakMap,a=o.FontFace;o.FontFace=function(e,t,n){const o=new a(e,t,n);return i.set(o,{family:e,buffer:"string"!==typeof t,descriptors:n,fontSource:"string"===typeof t?t:JSON.stringify(Array.from(new Uint8Array(t)))}),o};const s=Uf(n.fonts,"add",(function(e){return function(n){return pz(_z((()=>{const e=i.get(n);e&&(t(e),i.delete(n))})),0),e.apply(this,[n])}}));return r.push((()=>{o.FontFace=a})),r.push(s),_z((()=>{r.forEach((e=>e()))}))}(e)));const b=function(e){const{doc:t,mirror:n,blockClass:o,blockSelector:r,unblockSelector:i,selectionCb:a}=e;let s=!0;const c=_z((()=>{const e=t.getSelection();if(!e||s&&Wz([e,"optionalAccess",e=>e.isCollapsed]))return;s=e.isCollapsed||!1;const c=[],p=e.rangeCount||0;for(let t=0;t<p;t++){const a=e.getRangeAt(t),{startContainer:s,startOffset:p,endContainer:l,endOffset:u}=a;Yf(s,o,r,i,!0)||Yf(l,o,r,i,!0)||c.push({start:n.getId(s),startOffset:p,end:n.getId(l),endOffset:u})}a({ranges:c})}));return c(),Bf("selectionchange",c)}(e),M=function(e){let{doc:t,customElementCb:n}=e;const o=t.defaultView;if(!o||!o.customElements)return()=>{};const r=Uf(o.customElements,"define",(function(e){return function(t,o,r){try{n({define:{name:t}})}catch(i){}return e.apply(this,[t,o,r])}}));return r}(e),f=[];for(const z of e.plugins)f.push(z.observer(z.callback,t,z.options));return _z((()=>{wz.forEach((e=>e.reset())),Wz([n,"optionalAccess",e=>e.disconnect,"call",e=>e()]),o(),r(),i(),a(),s(),c(),p(),l(),u(),d(),b(),M(),f.forEach((e=>e()))}))}function Bz(e){return"undefined"!==typeof window[e]}function Dz(e){return Boolean("undefined"!==typeof window[e]&&window[e].prototype&&"insertRule"in window[e].prototype&&"deleteRule"in window[e].prototype)}class $z{constructor(e){this.generateIdFn=e,this.iframeIdToRemoteIdMap=new WeakMap,this.iframeRemoteIdToIdMap=new WeakMap}getId(e,t,n,o){const r=n||this.getIdToRemoteIdMap(e),i=o||this.getRemoteIdToIdMap(e);let a=r.get(t);return a||(a=this.generateIdFn(),r.set(t,a),i.set(a,t)),a}getIds(e,t){const n=this.getIdToRemoteIdMap(e),o=this.getRemoteIdToIdMap(e);return t.map((t=>this.getId(e,t,n,o)))}getRemoteId(e,t,n){const o=n||this.getRemoteIdToIdMap(e);if("number"!==typeof t)return t;const r=o.get(t);return r||-1}getRemoteIds(e,t){const n=this.getRemoteIdToIdMap(e);return t.map((t=>this.getRemoteId(e,t,n)))}reset(e){if(!e)return this.iframeIdToRemoteIdMap=new WeakMap,void(this.iframeRemoteIdToIdMap=new WeakMap);this.iframeIdToRemoteIdMap.delete(e),this.iframeRemoteIdToIdMap.delete(e)}getIdToRemoteIdMap(e){let t=this.iframeIdToRemoteIdMap.get(e);return t||(t=new Map,this.iframeIdToRemoteIdMap.set(e,t)),t}getRemoteIdToIdMap(e){let t=this.iframeRemoteIdToIdMap.get(e);return t||(t=new Map,this.iframeRemoteIdToIdMap.set(e,t)),t}}function jz(e){let t,n=e[0],o=1;for(;o<e.length;){const r=e[o],i=e[o+1];if(o+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(t=n,n=i(n)):"call"!==r&&"optionalCall"!==r||(n=i((function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n.call(t,...o)})),t=void 0)}return n}class Xz{constructor(){this.crossOriginIframeMirror=new $z(hf),this.crossOriginIframeRootIdMap=new WeakMap}addIframe(){}addLoadListener(){}attachIframe(){}}class Uz{constructor(e){this.iframes=new WeakMap,this.crossOriginIframeMap=new WeakMap,this.crossOriginIframeMirror=new $z(hf),this.crossOriginIframeRootIdMap=new WeakMap,this.mutationCb=e.mutationCb,this.wrappedEmit=e.wrappedEmit,this.stylesheetManager=e.stylesheetManager,this.recordCrossOriginIframes=e.recordCrossOriginIframes,this.crossOriginIframeStyleMirror=new $z(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),this.mirror=e.mirror,this.recordCrossOriginIframes&&window.addEventListener("message",this.handleMessage.bind(this))}addIframe(e){this.iframes.set(e,!0),e.contentWindow&&this.crossOriginIframeMap.set(e.contentWindow,e)}addLoadListener(e){this.loadListener=e}attachIframe(e,t){this.mutationCb({adds:[{parentId:this.mirror.getId(e),nextId:null,node:t}],removes:[],texts:[],attributes:[],isAttachIframe:!0}),jz([this,"access",e=>e.loadListener,"optionalCall",t=>t(e)]),e.contentDocument&&e.contentDocument.adoptedStyleSheets&&e.contentDocument.adoptedStyleSheets.length>0&&this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets,this.mirror.getId(e.contentDocument))}handleMessage(e){const t=e;if("rrweb"!==t.data.type||t.origin!==t.data.origin)return;if(!e.source)return;const n=this.crossOriginIframeMap.get(e.source);if(!n)return;const o=this.transformCrossOriginEvent(n,t.data.event);o&&this.wrappedEmit(o,t.data.isCheckout)}transformCrossOriginEvent(e,t){switch(t.type){case lz.FullSnapshot:{this.crossOriginIframeMirror.reset(e),this.crossOriginIframeStyleMirror.reset(e),this.replaceIdOnNode(t.data.node,e);const n=t.data.node.id;return this.crossOriginIframeRootIdMap.set(e,n),this.patchRootIdOnNode(t.data.node,n),{timestamp:t.timestamp,type:lz.IncrementalSnapshot,data:{source:uz.Mutation,adds:[{parentId:this.mirror.getId(e),nextId:null,node:t.data.node}],removes:[],texts:[],attributes:[],isAttachIframe:!0}}}case lz.Meta:case lz.Load:case lz.DomContentLoaded:return!1;case lz.Plugin:return t;case lz.Custom:return this.replaceIds(t.data.payload,e,["id","parentId","previousId","nextId"]),t;case lz.IncrementalSnapshot:switch(t.data.source){case uz.Mutation:return t.data.adds.forEach((t=>{this.replaceIds(t,e,["parentId","nextId","previousId"]),this.replaceIdOnNode(t.node,e);const n=this.crossOriginIframeRootIdMap.get(e);n&&this.patchRootIdOnNode(t.node,n)})),t.data.removes.forEach((t=>{this.replaceIds(t,e,["parentId","id"])})),t.data.attributes.forEach((t=>{this.replaceIds(t,e,["id"])})),t.data.texts.forEach((t=>{this.replaceIds(t,e,["id"])})),t;case uz.Drag:case uz.TouchMove:case uz.MouseMove:return t.data.positions.forEach((t=>{this.replaceIds(t,e,["id"])})),t;case uz.ViewportResize:return!1;case uz.MediaInteraction:case uz.MouseInteraction:case uz.Scroll:case uz.CanvasMutation:case uz.Input:return this.replaceIds(t.data,e,["id"]),t;case uz.StyleSheetRule:case uz.StyleDeclaration:return this.replaceIds(t.data,e,["id"]),this.replaceStyleIds(t.data,e,["styleId"]),t;case uz.Font:return t;case uz.Selection:return t.data.ranges.forEach((t=>{this.replaceIds(t,e,["start","end"])})),t;case uz.AdoptedStyleSheet:return this.replaceIds(t.data,e,["id"]),this.replaceStyleIds(t.data,e,["styleIds"]),jz([t,"access",e=>e.data,"access",e=>e.styles,"optionalAccess",e=>e.forEach,"call",t=>t((t=>{this.replaceStyleIds(t,e,["styleId"])}))]),t}}return!1}replace(e,t,n,o){for(const r of o)(Array.isArray(t[r])||"number"===typeof t[r])&&(Array.isArray(t[r])?t[r]=e.getIds(n,t[r]):t[r]=e.getId(n,t[r]));return t}replaceIds(e,t,n){return this.replace(this.crossOriginIframeMirror,e,t,n)}replaceStyleIds(e,t,n){return this.replace(this.crossOriginIframeStyleMirror,e,t,n)}replaceIdOnNode(e,t){this.replaceIds(e,t,["id","rootId"]),"childNodes"in e&&e.childNodes.forEach((e=>{this.replaceIdOnNode(e,t)}))}patchRootIdOnNode(e,t){e.type===KM.Document||e.rootId||(e.rootId=t),"childNodes"in e&&e.childNodes.forEach((e=>{this.patchRootIdOnNode(e,t)}))}}class Fz{init(){}addShadowRoot(){}observeAttachShadow(){}reset(){}}class Vz{constructor(e){this.shadowDoms=new WeakSet,this.restoreHandlers=[],this.mutationCb=e.mutationCb,this.scrollCb=e.scrollCb,this.bypassOptions=e.bypassOptions,this.mirror=e.mirror,this.init()}init(){this.reset(),this.patchAttachShadow(Element,document)}addShadowRoot(e,t){if(!JM(e))return;if(this.shadowDoms.has(e))return;this.shadowDoms.add(e),this.bypassOptions.canvasManager.addShadowRoot(e);const n=Sz({...this.bypassOptions,doc:t,mutationCb:this.mutationCb,mirror:this.mirror,shadowDomManager:this},e);this.restoreHandlers.push((()=>n.disconnect())),this.restoreHandlers.push(Ez({...this.bypassOptions,scrollCb:this.scrollCb,doc:e,mirror:this.mirror})),pz((()=>{e.adoptedStyleSheets&&e.adoptedStyleSheets.length>0&&this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets,this.mirror.getId(e.host)),this.restoreHandlers.push(Pz({mirror:this.mirror,stylesheetManager:this.bypassOptions.stylesheetManager},e))}),0)}observeAttachShadow(e){e.contentWindow&&e.contentDocument&&this.patchAttachShadow(e.contentWindow.Element,e.contentDocument)}patchAttachShadow(e,t){const n=this;this.restoreHandlers.push(Uf(e.prototype,"attachShadow",(function(e){return function(o){const r=e.call(this,o);return this.shadowRoot&&az(this)&&n.addShadowRoot(this.shadowRoot,t),r}})))}reset(){this.restoreHandlers.forEach((e=>{try{e()}catch(t){}})),this.restoreHandlers=[],this.shadowDoms=new WeakSet,this.bypassOptions.canvasManager.resetShadowRoots()}}class Hz{reset(){}freeze(){}unfreeze(){}lock(){}unlock(){}snapshot(){}addWindow(){}addShadowRoot(){}resetShadowRoots(){}}class Gz{constructor(e){this.trackedLinkElements=new WeakSet,this.styleMirror=new oz,this.mutationCb=e.mutationCb,this.adoptedStyleSheetCb=e.adoptedStyleSheetCb}attachLinkElement(e,t){"_cssText"in t.attributes&&this.mutationCb({adds:[],removes:[],texts:[],attributes:[{id:t.id,attributes:t.attributes}]}),this.trackLinkElement(e)}trackLinkElement(e){this.trackedLinkElements.has(e)||(this.trackedLinkElements.add(e),this.trackStylesheetInLinkElement(e))}adoptStyleSheets(e,t){if(0===e.length)return;const n={id:t,styleIds:[]},o=[];for(const r of e){let e;this.styleMirror.has(r)?e=this.styleMirror.getId(r):(e=this.styleMirror.add(r),o.push({styleId:e,rules:Array.from(r.rules||CSSRule,((e,t)=>({rule:ZM(e),index:t})))})),n.styleIds.push(e)}o.length>0&&(n.styles=o),this.adoptedStyleSheetCb(n)}reset(){this.styleMirror.reset(),this.trackedLinkElements=new WeakSet}trackStylesheetInLinkElement(e){}}class Kz{constructor(){this.nodeMap=new WeakMap,this.loop=!0,this.periodicallyClear()}periodicallyClear(){!function(){cz("requestAnimationFrame")(...arguments)}((()=>{this.clear(),this.loop&&this.periodicallyClear()}))}inOtherBuffer(e,t){const n=this.nodeMap.get(e);return n&&Array.from(n).some((e=>e!==t))}add(e,t){this.nodeMap.set(e,(this.nodeMap.get(e)||new Set).add(t))}clear(){this.nodeMap=new WeakMap}destroy(){this.loop=!1}}let Yz,Jz;try{if(2!==Array.from([1],(e=>2*e))[0]){const e=document.createElement("iframe");document.body.appendChild(e),Array.from=EM([e,"access",e=>e.contentWindow,"optionalAccess",e=>e.Array,"access",e=>e.from])||Array.from,document.body.removeChild(e)}}catch(ZA){console.debug("Unable to override Array.from",ZA)}const Qz=new ef;function Zz(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{emit:t,checkoutEveryNms:n,checkoutEveryNth:o,blockClass:r="rr-block",blockSelector:i=null,unblockSelector:a=null,ignoreClass:s="rr-ignore",ignoreSelector:c=null,maskAllText:p=!1,maskTextClass:l="rr-mask",unmaskTextClass:u=null,maskTextSelector:d=null,unmaskTextSelector:b=null,inlineStylesheet:M=!0,maskAllInputs:f,maskInputOptions:z,slimDOMOptions:h,maskAttributeFn:O,maskInputFn:A,maskTextFn:m,maxCanvasSize:g=null,packFn:y,sampling:v={},dataURLOptions:q={},mousemoveWait:_,recordDOM:W=!0,recordCanvas:w=!1,recordCrossOriginIframes:R=!1,recordAfter:S=("DOMContentLoaded"===e.recordAfter?e.recordAfter:"load"),userTriggeredOnInput:x=!1,collectFonts:E=!1,inlineImages:T=!1,plugins:C,keepIframeSrcFn:N=()=>!1,ignoreCSSAttributes:L=new Set([]),errorHandler:k,onMutation:P,getCanvasManager:I}=e;qz=k;const B=!R||window.parent===window;let D=!1;if(!B)try{window.parent.document&&(D=!1)}catch(te){D=!0}if(B&&!t)throw new Error("emit function is required");void 0!==_&&void 0===v.mousemove&&(v.mousemove=_),Qz.reset();const $=!0===f?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,radio:!0,checkbox:!0}:void 0!==z?z:{},j=!0===h||"all"===h?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:"all"===h,headMetaDescKeywords:"all"===h}:h||{};let X;!function(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;"NodeList"in t&&!t.NodeList.prototype.forEach&&(t.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in t&&!t.DOMTokenList.prototype.forEach&&(t.DOMTokenList.prototype.forEach=Array.prototype.forEach),Node.prototype.contains||(Node.prototype.contains=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];let r=n[0];if(!(0 in n))throw new TypeError("1 argument is required");do{if(e===r)return!0}while(r=r&&r.parentNode);return!1})}();let U=0;const F=e=>{for(const t of C||[])t.eventProcessor&&(e=t.eventProcessor(e));return y&&!D&&(e=y(e)),e};Yz=(e,r)=>{const i=e;if(i.timestamp=Ff(),!EM([wz,"access",e=>e[0],"optionalAccess",e=>e.isFrozen,"call",e=>e()])||i.type===lz.FullSnapshot||i.type===lz.IncrementalSnapshot&&i.data.source===uz.Mutation||wz.forEach((e=>e.unfreeze())),B)EM([t,"optionalCall",e=>e(F(i),r)]);else if(D){const e={type:"rrweb",event:F(i),origin:window.location.origin,isCheckout:r};window.parent.postMessage(e,"*")}if(i.type===lz.FullSnapshot)X=i,U=0;else if(i.type===lz.IncrementalSnapshot){if(i.data.source===uz.Mutation&&i.data.isAttachIframe)return;U++;const e=o&&U>=o,t=n&&X&&i.timestamp-X.timestamp>n;(e||t)&&ee(!0)}};const V=e=>{Yz({type:lz.IncrementalSnapshot,data:{source:uz.Mutation,...e}})},H=e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.Scroll,...e}}),G=e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.CanvasMutation,...e}}),K=new Gz({mutationCb:V,adoptedStyleSheetCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.AdoptedStyleSheet,...e}})}),Y="boolean"===typeof __RRWEB_EXCLUDE_IFRAME__&&__RRWEB_EXCLUDE_IFRAME__?new Xz:new Uz({mirror:Qz,mutationCb:V,stylesheetManager:K,recordCrossOriginIframes:R,wrappedEmit:Yz});for(const oe of C||[])oe.getMirror&&oe.getMirror({nodeMirror:Qz,crossOriginIframeMirror:Y.crossOriginIframeMirror,crossOriginIframeStyleMirror:Y.crossOriginIframeStyleMirror});const J=new Kz,Q=function(e,t){try{return e?e(t):new Hz}catch(n){return console.warn("Unable to initialize CanvasManager"),new Hz}}(I,{mirror:Qz,win:window,mutationCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.CanvasMutation,...e}}),recordCanvas:w,blockClass:r,blockSelector:i,unblockSelector:a,maxCanvasSize:g,sampling:v.canvas,dataURLOptions:q,errorHandler:k}),Z="boolean"===typeof __RRWEB_EXCLUDE_SHADOW_DOM__&&__RRWEB_EXCLUDE_SHADOW_DOM__?new Fz:new Vz({mutationCb:V,scrollCb:H,bypassOptions:{onMutation:P,blockClass:r,blockSelector:i,unblockSelector:a,maskAllText:p,maskTextClass:l,unmaskTextClass:u,maskTextSelector:d,unmaskTextSelector:b,inlineStylesheet:M,maskInputOptions:$,dataURLOptions:q,maskAttributeFn:O,maskTextFn:m,maskInputFn:A,recordCanvas:w,inlineImages:T,sampling:v,slimDOMOptions:j,iframeManager:Y,stylesheetManager:K,canvasManager:Q,keepIframeSrcFn:N,processedNodeManager:J},mirror:Qz}),ee=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!W)return;Yz({type:lz.Meta,data:{href:window.location.href,width:Gf(),height:Hf()}},e),K.reset(),Z.init(),wz.forEach((e=>e.lock()));const t=function(e,t){const{mirror:n=new ef,blockClass:o="rr-block",blockSelector:r=null,unblockSelector:i=null,maskAllText:a=!1,maskTextClass:s="rr-mask",unmaskTextClass:c=null,maskTextSelector:p=null,unmaskTextSelector:l=null,inlineStylesheet:u=!0,inlineImages:d=!1,recordCanvas:b=!1,maskAllInputs:M=!1,maskAttributeFn:f,maskTextFn:z,maskInputFn:h,slimDOM:O=!1,dataURLOptions:A,preserveWhiteSpace:m,onSerialize:g,onIframeLoad:y,iframeLoadTimeout:v,onStylesheetLoad:q,stylesheetLoadTimeout:_,keepIframeSrcFn:W=()=>!1}=t||{};return Pf(e,{doc:e,mirror:n,blockClass:o,blockSelector:r,unblockSelector:i,maskAllText:a,maskTextClass:s,unmaskTextClass:c,maskTextSelector:p,unmaskTextSelector:l,skipChild:!1,inlineStylesheet:u,maskInputOptions:!0===M?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0}:!1===M?{}:M,maskAttributeFn:f,maskTextFn:z,maskInputFn:h,slimDOMOptions:!0===O||"all"===O?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaDescKeywords:"all"===O,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaAuthorship:!0,headMetaVerification:!0}:!1===O?{}:O,dataURLOptions:A,inlineImages:d,recordCanvas:b,preserveWhiteSpace:m,onSerialize:g,onIframeLoad:y,iframeLoadTimeout:v,onStylesheetLoad:q,stylesheetLoadTimeout:_,keepIframeSrcFn:W,newlyAddedElement:!1})}(document,{mirror:Qz,blockClass:r,blockSelector:i,unblockSelector:a,maskAllText:p,maskTextClass:l,unmaskTextClass:u,maskTextSelector:d,unmaskTextSelector:b,inlineStylesheet:M,maskAllInputs:$,maskAttributeFn:O,maskInputFn:A,maskTextFn:m,slimDOM:j,dataURLOptions:q,recordCanvas:w,inlineImages:T,onSerialize:e=>{ez(e,Qz)&&Y.addIframe(e),tz(e,Qz)&&K.trackLinkElement(e),nz(e)&&Z.addShadowRoot(e.shadowRoot,document)},onIframeLoad:(e,t)=>{Y.attachIframe(e,t),e.contentWindow&&Q.addWindow(e.contentWindow),Z.observeAttachShadow(e)},onStylesheetLoad:(e,t)=>{K.attachLinkElement(e,t)},keepIframeSrcFn:N});if(!t)return console.warn("Failed to snapshot the document");Yz({type:lz.FullSnapshot,data:{node:t,initialOffset:Vf(window)}}),wz.forEach((e=>e.unlock())),document.adoptedStyleSheets&&document.adoptedStyleSheets.length>0&&K.adoptStyleSheets(document.adoptedStyleSheets,Qz.getId(document))};Jz=ee;try{const e=[],t=e=>_z(Iz)({onMutation:P,mutationCb:V,mousemoveCb:(e,t)=>Yz({type:lz.IncrementalSnapshot,data:{source:t,positions:e}}),mouseInteractionCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.MouseInteraction,...e}}),scrollCb:H,viewportResizeCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.ViewportResize,...e}}),inputCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.Input,...e}}),mediaInteractionCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.MediaInteraction,...e}}),styleSheetRuleCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.StyleSheetRule,...e}}),styleDeclarationCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.StyleDeclaration,...e}}),canvasMutationCb:G,fontCb:e=>Yz({type:lz.IncrementalSnapshot,data:{source:uz.Font,...e}}),selectionCb:e=>{Yz({type:lz.IncrementalSnapshot,data:{source:uz.Selection,...e}})},customElementCb:e=>{Yz({type:lz.IncrementalSnapshot,data:{source:uz.CustomElement,...e}})},blockClass:r,ignoreClass:s,ignoreSelector:c,maskAllText:p,maskTextClass:l,unmaskTextClass:u,maskTextSelector:d,unmaskTextSelector:b,maskInputOptions:$,inlineStylesheet:M,sampling:v,recordDOM:W,recordCanvas:w,inlineImages:T,userTriggeredOnInput:x,collectFonts:E,doc:e,maskAttributeFn:O,maskInputFn:A,maskTextFn:m,keepIframeSrcFn:N,blockSelector:i,unblockSelector:a,slimDOMOptions:j,dataURLOptions:q,mirror:Qz,iframeManager:Y,stylesheetManager:K,shadowDomManager:Z,processedNodeManager:J,canvasManager:Q,ignoreCSSAttributes:L,plugins:EM([C,"optionalAccess",e=>e.filter,"call",e=>e((e=>e.observer)),"optionalAccess",e=>e.map,"call",e=>e((e=>({observer:e.observer,options:e.options,callback:t=>Yz({type:lz.Plugin,data:{plugin:e.name,payload:t}})})))])||[]},{});Y.addLoadListener((n=>{try{e.push(t(n.contentDocument))}catch(o){console.warn(o)}}));const n=()=>{ee(),e.push(t(document))};return"interactive"===document.readyState||"complete"===document.readyState?n():(e.push(Bf("DOMContentLoaded",(()=>{Yz({type:lz.DomContentLoaded,data:{}}),"DOMContentLoaded"===S&&n()}))),e.push(Bf("load",(()=>{Yz({type:lz.Load,data:{}}),"load"===S&&n()}),window))),()=>{e.forEach((e=>e())),J.destroy(),Jz=void 0,qz=void 0}}catch(ne){console.warn(ne)}}Zz.mirror=Qz,Zz.takeFullSnapshot=function(e){if(!Jz)throw new Error("please take full snapshot after start recording");Jz(e)};const eh=3;function th(e){return e>9999999999?e:1e3*e}function nh(e){return e>9999999999?e/1e3:e}function oh(e,t){"sentry.transaction"!==t.category&&(["ui.click","ui.input"].includes(t.category)?e.triggerUserActivity():e.checkAndHandleExpiredSession(),e.addUpdate((()=>(e.throttledAddEvent({type:lz.Custom,timestamp:1e3*(t.timestamp||0),data:{tag:"breadcrumb",payload:Ic(t,10,1e3)}}),"console"===t.category))))}const rh="button,a";function ih(e){return e.closest(rh)||e}function ah(e){const t=sh(e);return t&&t instanceof Element?ih(t):t}function sh(e){return function(e){return"object"===typeof e&&!!e&&"target"in e}(e)?e.target:e}let ch;function ph(e){return ch||(ch=[],Us(kM,"open",(function(e){return function(){if(ch)try{ch.forEach((e=>e()))}catch(r){}for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.apply(kM,n)}}))),ch.push(e),()=>{const t=ch?ch.indexOf(e):-1;t>-1&&ch.splice(t,1)}}class lh{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:oh;this._lastMutation=0,this._lastScroll=0,this._clicks=[],this._timeout=t.timeout/1e3,this._threshold=t.threshold/1e3,this._scollTimeout=t.scrollTimeout/1e3,this._replay=e,this._ignoreSelector=t.ignoreSelector,this._addBreadcrumbEvent=n}addListeners(){const e=ph((()=>{this._lastMutation=dh()}));this._teardown=()=>{e(),this._clicks=[],this._lastMutation=0,this._lastScroll=0}}removeListeners(){this._teardown&&this._teardown(),this._checkClickTimeout&&clearTimeout(this._checkClickTimeout)}handleClick(e,t){if(function(e,t){if(!uh.includes(e.tagName))return!0;if("INPUT"===e.tagName&&!["submit","button"].includes(e.getAttribute("type")||""))return!0;if("A"===e.tagName&&(e.hasAttribute("download")||e.hasAttribute("target")&&"_self"!==e.getAttribute("target")))return!0;if(t&&e.matches(t))return!0;return!1}(t,this._ignoreSelector)||!function(e){return!(!e.data||"number"!==typeof e.data.nodeId||!e.timestamp)}(e))return;const n={timestamp:nh(e.timestamp),clickBreadcrumb:e,clickCount:0,node:t};this._clicks.some((e=>e.node===n.node&&Math.abs(e.timestamp-n.timestamp)<1))||(this._clicks.push(n),1===this._clicks.length&&this._scheduleCheckClicks())}registerMutation(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();this._lastMutation=nh(e)}registerScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();this._lastScroll=nh(e)}registerClick(e){const t=ih(e);this._handleMultiClick(t)}_handleMultiClick(e){this._getClicks(e).forEach((e=>{e.clickCount++}))}_getClicks(e){return this._clicks.filter((t=>t.node===e))}_checkClicks(){const e=[],t=dh();this._clicks.forEach((n=>{!n.mutationAfter&&this._lastMutation&&(n.mutationAfter=n.timestamp<=this._lastMutation?this._lastMutation-n.timestamp:void 0),!n.scrollAfter&&this._lastScroll&&(n.scrollAfter=n.timestamp<=this._lastScroll?this._lastScroll-n.timestamp:void 0),n.timestamp+this._timeout<=t&&e.push(n)}));for(const n of e){const e=this._clicks.indexOf(n);e>-1&&(this._generateBreadcrumbs(n),this._clicks.splice(e,1))}this._clicks.length&&this._scheduleCheckClicks()}_generateBreadcrumbs(e){const t=this._replay,n=e.scrollAfter&&e.scrollAfter<=this._scollTimeout,o=e.mutationAfter&&e.mutationAfter<=this._threshold,r=!n&&!o,{clickCount:i,clickBreadcrumb:a}=e;if(r){const n=1e3*Math.min(e.mutationAfter||this._timeout,this._timeout),o=n<1e3*this._timeout?"mutation":"timeout",r={type:"default",message:a.message,timestamp:a.timestamp,category:"ui.slowClickDetected",data:{...a.data,url:kM.location.href,route:t.getCurrentRoute(),timeAfterClickMs:n,endReason:o,clickCount:i||1}};this._addBreadcrumbEvent(t,r)}else if(i>1){const e={type:"default",message:a.message,timestamp:a.timestamp,category:"ui.multiClick",data:{...a.data,url:kM.location.href,route:t.getCurrentRoute(),clickCount:i,metric:!0}};this._addBreadcrumbEvent(t,e)}}_scheduleCheckClicks(){this._checkClickTimeout&&clearTimeout(this._checkClickTimeout),this._checkClickTimeout=bd((()=>this._checkClicks()),1e3)}}const uh=["A","BUTTON","INPUT"];function dh(){return Date.now()/1e3}function bh(e,t){try{if(!function(e){return e.type===eh}(t))return;const{source:n}=t.data;if(n===uz.Mutation&&e.registerMutation(t.timestamp),n===uz.Scroll&&e.registerScroll(t.timestamp),function(e){return e.data.source===uz.MouseInteraction}(t)){const{type:n,id:o}=t.data,r=Zz.mirror.getNode(o);r instanceof HTMLElement&&n===dz.Click&&e.registerClick(r)}}catch(n){}}function Mh(e){return{timestamp:Date.now()/1e3,type:"default",...e}}var fh;!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(fh||(fh={}));const zh=new Set(["id","class","aria-label","role","name","alt","title","data-test-id","data-testid","disabled","aria-disabled","data-sentry-component"]);function hh(e){const t={};!e["data-sentry-component"]&&e["data-sentry-element"]&&(e["data-sentry-component"]=e["data-sentry-element"]);for(const n in e)if(zh.has(n)){let o=n;"data-testid"!==n&&"data-test-id"!==n||(o="testId"),t[o]=e[n]}return t}const Oh=e=>t=>{if(!e.isEnabled())return;const n=function(e){const{target:t,message:n}=function(e){const t="click"===e.name;let n,o=null;try{o=t?ah(e.event):sh(e.event),n=Es(o,{maxStringLength:200})||"<unknown>"}catch(r){n="<unknown>"}return{target:o,message:n}}(e);return Mh({category:`ui.${e.name}`,...Ah(t,n)})}(t);if(!n)return;const o="click"===t.name,r=o?t.event:void 0;var i,a,s;!(o&&e.clickDetector&&r&&r.target)||r.altKey||r.metaKey||r.ctrlKey||r.shiftKey||(i=e.clickDetector,a=n,s=ah(t.event),i.handleClick(a,s)),oh(e,n)};function Ah(e,t){const n=Zz.mirror.getId(e),o=n&&Zz.mirror.getNode(n),r=o&&Zz.mirror.getMeta(o),i=r&&function(e){return e.type===fh.Element}(r)?r:null;return{message:t,data:i?{nodeId:n,node:{id:n,tagName:i.tagName,textContent:Array.from(i.childNodes).map((e=>e.type===fh.Text&&e.textContent)).filter(Boolean).map((e=>e.trim())).join(""),attributes:hh(i.attributes)}}:{}}}function mh(e,t){if(!e.isEnabled())return;e.updateUserActivity();const n=function(e){const{metaKey:t,shiftKey:n,ctrlKey:o,altKey:r,key:i,target:a}=e;if(!a||function(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||e.isContentEditable}(a)||!i)return null;const s=t||o||r,c=1===i.length;if(!s&&c)return null;const p=Es(a,{maxStringLength:200})||"<unknown>",l=Ah(a,p);return Mh({category:"ui.keyDown",message:p,data:{...l.data,metaKey:t,shiftKey:n,ctrlKey:o,altKey:r,key:i}})}(t);n&&oh(e,n)}const gh={resource:function(e){const{entryType:t,initiatorType:n,name:o,responseEnd:r,startTime:i,decodedBodySize:a,encodedBodySize:s,responseStatus:c,transferSize:p}=e;if(["fetch","xmlhttprequest"].includes(n))return null;return{type:`${t}.${n}`,start:qh(i),end:qh(r),name:o,data:{size:p,statusCode:c,decodedBodySize:a,encodedBodySize:s}}},paint:function(e){const{duration:t,entryType:n,name:o,startTime:r}=e,i=qh(r);return{type:n,name:o,start:i,end:i+t,data:void 0}},navigation:function(e){const{entryType:t,name:n,decodedBodySize:o,duration:r,domComplete:i,encodedBodySize:a,domContentLoadedEventStart:s,domContentLoadedEventEnd:c,domInteractive:p,loadEventStart:l,loadEventEnd:u,redirectCount:d,startTime:b,transferSize:M,type:f}=e;if(0===r)return null;return{type:`${t}.${f}`,start:qh(b),end:qh(i),name:n,data:{size:M,decodedBodySize:o,encodedBodySize:a,duration:r,domInteractive:p,domContentLoadedEventStart:s,domContentLoadedEventEnd:c,loadEventStart:l,loadEventEnd:u,domComplete:i,redirectCount:d}}}};function yh(e,t){return n=>{let{metric:o}=n;t.replayPerformanceEntries.push(e(o))}}function vh(e){const t=gh[e.entryType];return t?t(e):null}function qh(e){return((uc||kM.performance.timeOrigin)+e)/1e3}function _h(e){const t=e.entries[e.entries.length-1];return Sh(e,"largest-contentful-paint",t&&t.element?[t.element]:void 0)}function Wh(e){const t=e.entries[e.entries.length-1],n=[];if(t&&t.sources)for(const o of t.sources)o.node&&n.push(o.node);return Sh(e,"cumulative-layout-shift",n)}function wh(e){const t=e.entries[e.entries.length-1];return Sh(e,"first-input-delay",t&&t.target?[t.target]:void 0)}function Rh(e){const t=e.entries[e.entries.length-1];return Sh(e,"interaction-to-next-paint",t&&t.target?[t.target]:void 0)}function Sh(e,t,n){const o=e.value,r=e.rating,i=qh(o);return{type:"web-vital",name:t,start:i,end:i,data:{value:o,size:o,rating:r,nodeIds:n?n.map((e=>Zz.mirror.getId(e))):void 0}}}const xh="undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,Eh='var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';function Th(e,t){xh&&(Bs.info(e),t&&Nh(e))}function Ch(e,t){xh&&(Bs.info(e),t&&bd((()=>{Nh(e)}),0))}function Nh(e){yu({category:"console",data:{logger:"replay"},level:"info",message:e},{level:"info"})}class Lh extends Error{constructor(){super("Event buffer exceeded maximum size of 20000000.")}}class kh{constructor(){this.events=[],this._totalSize=0,this.hasCheckout=!1}get hasEvents(){return this.events.length>0}get type(){return"sync"}destroy(){this.events=[]}async addEvent(e){const t=JSON.stringify(e).length;if(this._totalSize+=t,this._totalSize>UM)throw new Lh;this.events.push(e)}finish(){return new Promise((e=>{const t=this.events;this.clear(),e(JSON.stringify(t))}))}clear(){this.events=[],this._totalSize=0,this.hasCheckout=!1}getEarliestTimestamp(){const e=this.events.map((e=>e.timestamp)).sort()[0];return e?th(e):null}}class Ph{constructor(e){this._worker=e,this._id=0}ensureReady(){return this._ensureReadyPromise||(this._ensureReadyPromise=new Promise(((e,t)=>{this._worker.addEventListener("message",(n=>{let{data:o}=n;o.success?e():t()}),{once:!0}),this._worker.addEventListener("error",(e=>{t(e)}),{once:!0})}))),this._ensureReadyPromise}destroy(){Th("[Replay] Destroying compression worker"),this._worker.terminate()}postMessage(e,t){const n=this._getAndIncrementId();return new Promise(((o,r)=>{const i=t=>{let{data:a}=t;const s=a;if(s.method===e&&s.id===n){if(this._worker.removeEventListener("message",i),!s.success)return xh&&Bs.error("[Replay]",s.response),void r(new Error("Error in compression worker"));o(s.response)}};this._worker.addEventListener("message",i),this._worker.postMessage({id:n,method:e,arg:t})}))}_getAndIncrementId(){return this._id++}}class Ih{constructor(e){this._worker=new Ph(e),this._earliestTimestamp=null,this._totalSize=0,this.hasCheckout=!1}get hasEvents(){return!!this._earliestTimestamp}get type(){return"worker"}ensureReady(){return this._worker.ensureReady()}destroy(){this._worker.destroy()}addEvent(e){const t=th(e.timestamp);(!this._earliestTimestamp||t<this._earliestTimestamp)&&(this._earliestTimestamp=t);const n=JSON.stringify(e);return this._totalSize+=n.length,this._totalSize>UM?Promise.reject(new Lh):this._sendEventToWorker(n)}finish(){return this._finishRequest()}clear(){this._earliestTimestamp=null,this._totalSize=0,this.hasCheckout=!1,this._worker.postMessage("clear").then(null,(e=>{xh&&Bs.warn('[Replay] Sending "clear" message to worker failed',e)}))}getEarliestTimestamp(){return this._earliestTimestamp}_sendEventToWorker(e){return this._worker.postMessage("addEvent",e)}async _finishRequest(){const e=await this._worker.postMessage("finish");return this._earliestTimestamp=null,this._totalSize=0,e}}class Bh{constructor(e){this._fallback=new kh,this._compression=new Ih(e),this._used=this._fallback,this._ensureWorkerIsLoadedPromise=this._ensureWorkerIsLoaded()}get type(){return this._used.type}get hasEvents(){return this._used.hasEvents}get hasCheckout(){return this._used.hasCheckout}set hasCheckout(e){this._used.hasCheckout=e}destroy(){this._fallback.destroy(),this._compression.destroy()}clear(){return this._used.clear()}getEarliestTimestamp(){return this._used.getEarliestTimestamp()}addEvent(e){return this._used.addEvent(e)}async finish(){return await this.ensureWorkerIsLoaded(),this._used.finish()}ensureWorkerIsLoaded(){return this._ensureWorkerIsLoadedPromise}async _ensureWorkerIsLoaded(){try{await this._compression.ensureReady()}catch(e){return void Th("[Replay] Failed to load the compression worker, falling back to simple buffer")}await this._switchToCompressionWorker()}async _switchToCompressionWorker(){const{events:e,hasCheckout:t}=this._fallback,n=[];for(const r of e)n.push(this._compression.addEvent(r));this._compression.hasCheckout=t,this._used=this._compression;try{await Promise.all(n)}catch(o){xh&&Bs.warn("[Replay] Failed to add events when switching buffers.",o)}}}function Dh(e){let{useCompression:t,workerUrl:n}=e;if(t&&window.Worker){const e=function(e){try{const t=e||function(){if("undefined"===typeof __SENTRY_EXCLUDE_REPLAY_WORKER__||!__SENTRY_EXCLUDE_REPLAY_WORKER__)return function(){const e=new Blob([Eh]);return URL.createObjectURL(e)}();return""}();if(!t)return;Th("[Replay] Using compression worker"+(e?` from ${e}`:""));const n=new Worker(t);return new Bh(n)}catch(t){Th("[Replay] Failed to create compression worker")}}(n);if(e)return e}return Th("[Replay] Using simple buffer"),new kh}function $h(){try{return"sessionStorage"in kM&&!!kM.sessionStorage}catch(e){return!1}}function jh(e){!function(){if(!$h())return;try{kM.sessionStorage.removeItem(PM)}catch(e){}}(),e.session=void 0}function Xh(e){return void 0!==e&&Math.random()<e}function Uh(e){const t=Date.now();return{id:e.id||Zs(),started:e.started||t,lastActivity:e.lastActivity||t,segmentId:e.segmentId||0,sampled:e.sampled,previousSessionId:e.previousSessionId}}function Fh(e){if($h())try{kM.sessionStorage.setItem(PM,JSON.stringify(e))}catch(t){}}function Vh(e){let{sessionSampleRate:t,allowBuffering:n,stickySession:o=!1}=e,{previousSessionId:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=function(e,t){return Xh(e)?"session":!!t&&"buffer"}(t,n),a=Uh({sampled:i,previousSessionId:r});return o&&Fh(a),a}function Hh(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:+new Date;return null===e||void 0===t||t<0||0!==t&&e+t<=n}function Gh(e,t){let{maxReplayDuration:n,sessionIdleExpire:o,targetTime:r=Date.now()}=t;return Hh(e.started,n,r)||Hh(e.lastActivity,o,r)}function Kh(e,t){let{sessionIdleExpire:n,maxReplayDuration:o}=t;return!!Gh(e,{sessionIdleExpire:n,maxReplayDuration:o})&&("buffer"!==e.sampled||0!==e.segmentId)}function Yh(e,t){let{traceInternals:n,sessionIdleExpire:o,maxReplayDuration:r,previousSessionId:i}=e;const a=t.stickySession&&function(e){if(!$h())return null;try{const t=kM.sessionStorage.getItem(PM);if(!t)return null;const n=JSON.parse(t);return Ch("[Replay] Loading existing session",e),Uh(n)}catch(t){return null}}(n);return a?Kh(a,{sessionIdleExpire:o,maxReplayDuration:r})?(Ch("[Replay] Session in sessionStorage is expired, creating new one..."),Vh(t,{previousSessionId:a.id})):a:(Ch("[Replay] Creating new session",n),Vh(t,{previousSessionId:i}))}function Jh(e,t,n){return!!Zh(e,t)&&(Qh(e,t,n),!0)}async function Qh(e,t,n){if(!e.eventBuffer)return null;try{n&&"buffer"===e.recordingMode&&e.eventBuffer.clear(),n&&(e.eventBuffer.hasCheckout=!0);const o=function(e,t){try{if("function"===typeof t&&function(e){return e.type===lz.Custom}(e))return t(e)}catch(n){return xh&&Bs.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",n),null}return e}(t,e.getOptions().beforeAddRecordingEvent);if(!o)return;return await e.eventBuffer.addEvent(o)}catch(o){const t=o&&o instanceof Lh?"addEventSizeExceeded":"addEvent";e.handleException(o),await e.stop({reason:t});const n=Rc();n&&n.recordDroppedEvent("internal_sdk_error","replay")}}function Zh(e,t){if(!e.eventBuffer||e.isPaused()||!e.isEnabled())return!1;const n=th(t.timestamp);return!(n+e.timeouts.sessionIdlePause<Date.now())&&(!(n>e.getContext().initialTimestamp+e.getOptions().maxReplayDuration)||(Ch(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,e.getOptions()._experiments.traceInternals),!1))}function eO(e){return!e.type}function tO(e){return"transaction"===e.type}function nO(e){return"feedback"===e.type}function oO(e){return(t,n)=>{if(!e.isEnabled()||!eO(t)&&!tO(t))return;const o=n&&n.statusCode;!o||o<200||o>=300||(tO(t)?function(e,t){const n=e.getContext();t.contexts&&t.contexts.trace&&t.contexts.trace.trace_id&&n.traceIds.size<100&&n.traceIds.add(t.contexts.trace.trace_id)}(e,t):function(e,t){const n=e.getContext();t.event_id&&n.errorIds.size<100&&n.errorIds.add(t.event_id);if("buffer"!==e.recordingMode||!t.tags||!t.tags.replayId)return;const{beforeErrorSampling:o}=e.getOptions();if("function"===typeof o&&!o(t))return;bd((()=>{e.sendBufferedReplayOrFlush()}))}(e,t))}}function rO(e){return t=>{e.isEnabled()&&eO(t)&&function(e,t){const n=t.exception&&t.exception.values&&t.exception.values[0]&&t.exception.values[0].value;if("string"!==typeof n)return;if(n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/)||n.match(/(does not match server-rendered HTML|Hydration failed because)/i)){oh(e,Mh({category:"replay.hydrate-error",data:{url:Cs()}}))}}(e,t)}}function iO(e){const t=Rc();t&&t.on("beforeAddBreadcrumb",(t=>function(e,t){if(!e.isEnabled()||!aO(t))return;const n=function(e){if(!aO(e)||["fetch","xhr","sentry.event","sentry.transaction"].includes(e.category)||e.category.startsWith("ui."))return null;if("console"===e.category)return function(e){const t=e.data&&e.data.arguments;if(!Array.isArray(t)||0===t.length)return Mh(e);let n=!1;const o=t.map((e=>{if(!e)return e;if("string"===typeof e)return e.length>XM?(n=!0,`${e.slice(0,XM)}\u2026`):e;if("object"===typeof e)try{const t=Ic(e,7);return JSON.stringify(t).length>XM?(n=!0,`${JSON.stringify(t,null,2).slice(0,XM)}\u2026`):t}catch(t){}return e}));return Mh({...e,data:{...e.data,arguments:o,...n?{_meta:{warnings:["CONSOLE_ARG_TRUNCATED"]}}:{}}})}(e);return Mh(e)}(t);n&&oh(e,n)}(e,t)))}function aO(e){return!!e.category}function sO(e){return Object.assign(((t,n)=>{if(!e.isEnabled())return t;if(function(e){return"replay_event"===e.type}(t))return delete t.breadcrumbs,t;if(!eO(t)&&!tO(t)&&!nO(t))return t;if(!e.checkAndHandleExpiredSession())return t;if(nO(t))return e.flush(),t.contexts.feedback.replay_id=e.getSessionId(),function(e,t){e.triggerUserActivity(),e.addUpdate((()=>!t.timestamp||(e.throttledAddEvent({type:lz.Custom,timestamp:1e3*t.timestamp,data:{tag:"breadcrumb",payload:{timestamp:t.timestamp,type:"default",category:"sentry.feedback",data:{feedbackId:t.event_id}}}}),!1)))}(e,t),t;if(function(e,t){return!(e.type||!e.exception||!e.exception.values||!e.exception.values.length)&&!(!t.originalException||!t.originalException.__rrweb__)}(t,n)&&!e.getOptions()._experiments.captureExceptions)return xh&&Bs.log("[Replay] Ignoring error from rrweb internals",t),null;const o=function(e,t){return"buffer"===e.recordingMode&&t.message!==BM&&!(!t.exception||t.type)&&Xh(e.getOptions().errorSampleRate)}(e,t);return(o||"session"===e.recordingMode)&&(t.tags={...t.tags,replayId:e.getSessionId()}),t}),{id:"Replay"})}function cO(e,t){return t.map((t=>{let{type:n,start:o,end:r,name:i,data:a}=t;const s=e.throttledAddEvent({type:lz.Custom,timestamp:o,data:{tag:"performanceSpan",payload:{op:n,description:i,startTimestamp:o,endTimestamp:r,data:a}}});return"string"===typeof s?Promise.resolve(null):s}))}function pO(e){return t=>{if(!e.isEnabled())return;const n=function(e){const{from:t,to:n}=e,o=Date.now()/1e3;return{type:"navigation.push",start:o,end:o,name:n,data:{previous:t}}}(t);null!==n&&(e.getContext().urls.push(n.name),e.triggerUserActivity(),e.addUpdate((()=>(cO(e,[n]),!1))))}}function lO(e,t){e.isEnabled()&&null!==t&&(function(e,t){return(!xh||!e.getOptions()._experiments.traceInternals)&&TM(t,Rc())}(e,t.name)||e.addUpdate((()=>(cO(e,[t]),!0))))}function uO(e){if(!e)return;const t=new TextEncoder;try{if("string"===typeof e)return t.encode(e).length;if(e instanceof URLSearchParams)return t.encode(e.toString()).length;if(e instanceof FormData){const n=AO(e);return t.encode(n).length}if(e instanceof Blob)return e.size;if(e instanceof ArrayBuffer)return e.byteLength}catch(n){}}function dO(e){if(!e)return;const t=parseInt(e,10);return isNaN(t)?void 0:t}function bO(e){try{if("string"===typeof e)return[e];if(e instanceof URLSearchParams)return[e.toString()];if(e instanceof FormData)return[AO(e)];if(!e)return[void 0]}catch(t){return xh&&Bs.warn("[Replay] Failed to serialize body",e),[void 0,"BODY_PARSE_ERROR"]}return xh&&Bs.info("[Replay] Skipping network body because of body type",e),[void 0,"UNPARSEABLE_BODY_TYPE"]}function MO(e,t){if(!e)return{headers:{},size:void 0,_meta:{warnings:[t]}};const n={...e._meta},o=n.warnings||[];return n.warnings=[...o,t],e._meta=n,e}function fO(e,t){if(!t)return null;const{startTimestamp:n,endTimestamp:o,url:r,method:i,statusCode:a,request:s,response:c}=t;return{type:e,start:n/1e3,end:o/1e3,name:r,data:Js({method:i,statusCode:a,request:s,response:c})}}function zO(e){return{headers:{},size:e,_meta:{warnings:["URL_SKIPPED"]}}}function hO(e,t,n){if(!t&&0===Object.keys(e).length)return;if(!t)return{headers:e};if(!n)return{headers:e,size:t};const o={headers:e,size:t},{body:r,warnings:i}=function(e){if(!e||"string"!==typeof e)return{body:e};const t=e.length>jM,n=function(e){const t=e[0],n=e[e.length-1];return"["===t&&"]"===n||"{"===t&&"}"===n}(e);if(t){const t=e.slice(0,jM);return n?{body:t,warnings:["MAYBE_JSON_TRUNCATED"]}:{body:`${t}\u2026`,warnings:["TEXT_TRUNCATED"]}}if(n)try{return{body:JSON.parse(e)}}catch(o){}return{body:e}}(n);return o.body=r,i&&i.length>0&&(o._meta={warnings:i}),o}function OO(e,t){return Object.entries(e).reduce(((n,o)=>{let[r,i]=o;const a=r.toLowerCase();return t.includes(a)&&e[r]&&(n[a]=i),n}),{})}function AO(e){return new URLSearchParams(e).toString()}function mO(e,t){const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:kM.document.baseURI;if(e.startsWith("http://")||e.startsWith("https://")||e.startsWith(kM.location.origin))return e;const n=new URL(e,t);if(n.origin!==new URL(t).origin)return e;const o=n.href;if(!e.endsWith("/")&&o.endsWith("/"))return o.slice(0,-1);return o}(e);return Xs(n,t)}async function gO(e,t,n){try{const o=await async function(e,t,n){const o=Date.now(),{startTimestamp:r=o,endTimestamp:i=o}=t,{url:a,method:s,status_code:c=0,request_body_size:p,response_body_size:l}=e.data,u=mO(a,n.networkDetailAllowUrls)&&!mO(a,n.networkDetailDenyUrls),d=u?function(e,t,n){let{networkCaptureBodies:o,networkRequestHeaders:r}=e;const i=t?function(e,t){if(1===e.length&&"string"!==typeof e[0])return qO(e[0],t);if(2===e.length)return qO(e[1],t);return{}}(t,r):{};if(!o)return hO(i,n,void 0);const a=yO(t),[s,c]=bO(a),p=hO(i,n,s);if(c)return MO(p,c);return p}(n,t.input,p):zO(p),b=await async function(e,t,n,o){let{networkCaptureBodies:r,networkResponseHeaders:i}=t;if(!e&&void 0!==o)return zO(o);const a=n?vO(n.headers,i):{};if(!n||!r&&void 0!==o)return hO(a,o,void 0);const[s,c]=await async function(e){const t=function(e){try{return e.clone()}catch(t){xh&&Bs.warn("[Replay] Failed to clone response body",t)}}(e);if(!t)return[void 0,"BODY_PARSE_ERROR"];try{const e=await function(e){return new Promise(((t,n)=>{const o=bd((()=>n(new Error("Timeout while trying to read response body"))),500);(async function(e){return await e.text()})(e).then((e=>t(e)),(e=>n(e))).finally((()=>clearTimeout(o)))}))}(t);return[e]}catch(n){return xh&&Bs.warn("[Replay] Failed to get text body from response",n),[void 0,"BODY_PARSE_ERROR"]}}(n),p=function(e,t){let{networkCaptureBodies:n,responseBodySize:o,captureDetails:r,headers:i}=t;try{const t=e&&e.length&&void 0===o?uO(e):o;return r?hO(i,t,n?e:void 0):zO(t)}catch(a){return xh&&Bs.warn("[Replay] Failed to serialize response body",a),hO(i,o,void 0)}}(s,{networkCaptureBodies:r,responseBodySize:o,captureDetails:e,headers:a});if(c)return MO(p,c);return p}(u,n,t.response,l);return{startTimestamp:r,endTimestamp:i,url:a,method:s,statusCode:c,request:d,response:b}}(e,t,n),r=fO("resource.fetch",o);lO(n.replay,r)}catch(o){xh&&Bs.error("[Replay] Failed to capture fetch breadcrumb",o)}}function yO(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(2===e.length&&"object"===typeof e[1])return e[1].body}function vO(e,t){const n={};return t.forEach((t=>{e.get(t)&&(n[t]=e.get(t))})),n}function qO(e,t){if(!e)return{};const n=e.headers;return n?n instanceof Headers?vO(n,t):Array.isArray(n)?{}:OO(n,t):{}}async function _O(e,t,n){try{const o=function(e,t,n){const o=Date.now(),{startTimestamp:r=o,endTimestamp:i=o,input:a,xhr:s}=t,{url:c,method:p,status_code:l=0,request_body_size:u,response_body_size:d}=e.data;if(!c)return null;if(!s||!mO(c,n.networkDetailAllowUrls)||mO(c,n.networkDetailDenyUrls)){return{startTimestamp:r,endTimestamp:i,url:c,method:p,statusCode:l,request:zO(u),response:zO(d)}}const b=s[Ou],M=b?OO(b.request_headers,n.networkRequestHeaders):{},f=OO(function(e){const t=e.getAllResponseHeaders();if(!t)return{};return t.split("\r\n").reduce(((e,t)=>{const[n,o]=t.split(": ");return o&&(e[n.toLowerCase()]=o),e}),{})}(s),n.networkResponseHeaders),[z,h]=n.networkCaptureBodies?bO(a):[void 0],[O,A]=n.networkCaptureBodies?function(e){const t=[];try{return[e.responseText]}catch(n){t.push(n)}try{return function(e,t){try{if("string"===typeof e)return[e];if(e instanceof Document)return[e.body.outerHTML];if("json"===t&&e&&"object"===typeof e)return[JSON.stringify(e)];if(!e)return[void 0]}catch(n){return xh&&Bs.warn("[Replay] Failed to serialize body",e),[void 0,"BODY_PARSE_ERROR"]}return xh&&Bs.info("[Replay] Skipping network body because of body type",e),[void 0,"UNPARSEABLE_BODY_TYPE"]}(e.response,e.responseType)}catch(n){t.push(n)}return xh&&Bs.warn("[Replay] Failed to get xhr response body",...t),[void 0]}(s):[void 0],m=hO(M,u,z),g=hO(f,d,O);return{startTimestamp:r,endTimestamp:i,url:c,method:p,statusCode:l,request:h?MO(m,h):m,response:A?MO(g,A):g}}(e,t,n),r=fO("resource.xhr",o);lO(n.replay,r)}catch(o){xh&&Bs.error("[Replay] Failed to capture xhr breadcrumb",o)}}function WO(e,t){const{xhr:n,input:o}=t;if(!n)return;const r=uO(o),i=n.getResponseHeader("content-length")?dO(n.getResponseHeader("content-length")):function(e,t){try{return uO("json"===t&&e&&"object"===typeof e?JSON.stringify(e):e)}catch(n){return}}(n.response,n.responseType);void 0!==r&&(e.data.request_body_size=r),void 0!==i&&(e.data.response_body_size=i)}function wO(e){const t=Rc();try{const{networkDetailAllowUrls:n,networkDetailDenyUrls:o,networkCaptureBodies:r,networkRequestHeaders:i,networkResponseHeaders:a}=e.getOptions(),s={replay:e,networkDetailAllowUrls:n,networkDetailDenyUrls:o,networkCaptureBodies:r,networkRequestHeaders:i,networkResponseHeaders:a};t&&t.on("beforeAddBreadcrumb",((e,t)=>function(e,t,n){if(!t.data)return;try{(function(e){return"xhr"===e.category})(t)&&function(e){return e&&e.xhr}(n)&&(WO(t,n),_O(t,n,e)),function(e){return"fetch"===e.category}(t)&&function(e){return e&&e.response}(n)&&(!function(e,t){const{input:n,response:o}=t,r=uO(n?yO(n):void 0),i=o?dO(o.headers.get("content-length")):void 0;void 0!==r&&(e.data.request_body_size=r),void 0!==i&&(e.data.response_body_size=i)}(t,n),gO(t,n,e))}catch(o){xh&&Bs.warn("Error when enriching network breadcrumb")}}(s,e,t)))}catch(n){}}function RO(e){const t=Rc();fu(Oh(e)),xl(pO(e)),iO(e),wO(e);const n=sO(e);var o;o=n,Wc().addEventProcessor(o),t&&(t.on("beforeSendEvent",rO(e)),t.on("afterSendEvent",oO(e)),t.on("createDsc",(t=>{const n=e.getSessionId();if(n&&e.isEnabled()&&"session"===e.recordingMode){e.checkAndHandleExpiredSession()&&(t.replay_id=n)}})),t.on("spanStart",(t=>{e.lastActiveSpan=t})),t.on("spanEnd",(t=>{e.lastActiveSpan=t})),t.on("beforeSendFeedback",((t,n)=>{const o=e.getSessionId();n&&n.includeReplay&&e.isEnabled()&&o&&t.contexts&&t.contexts.feedback&&(t.contexts.feedback.replay_id=o)})))}function SO(e){const{jsHeapSizeLimit:t,totalJSHeapSize:n,usedJSHeapSize:o}=e,r=Date.now()/1e3;return{type:"memory",name:"memory",start:r,end:r,data:{memory:{jsHeapSizeLimit:t,totalJSHeapSize:n,usedJSHeapSize:o}}}}function xO(e){let t=!1;return(n,o)=>{if(!e.checkAndHandleExpiredSession())return void(xh&&Bs.warn("[Replay] Received replay event after session expired."));const r=o||!t;t=!0,e.clickDetector&&bh(e.clickDetector,n),e.addUpdate((()=>{if("buffer"===e.recordingMode&&r&&e.setInitialState(),!Jh(e,n,r))return!0;if(!r)return!1;if(function(e,t){if(!t||!e.session||0!==e.session.segmentId)return;Jh(e,function(e){const t=e.getOptions();return{type:lz.Custom,timestamp:Date.now(),data:{tag:"options",payload:{shouldRecordCanvas:e.isRecordingCanvas(),sessionSampleRate:t.sessionSampleRate,errorSampleRate:t.errorSampleRate,useCompressionOption:t.useCompression,blockAllMedia:t.blockAllMedia,maskAllText:t.maskAllText,maskAllInputs:t.maskAllInputs,useCompression:!!e.eventBuffer&&"worker"===e.eventBuffer.type,networkDetailHasUrls:t.networkDetailAllowUrls.length>0,networkCaptureBodies:t.networkCaptureBodies,networkRequestHasHeaders:t.networkRequestHeaders.length>0,networkResponseHasHeaders:t.networkResponseHeaders.length>0}}}}(e),!1)}(e,r),e.session&&e.session.previousSessionId)return!0;if("buffer"===e.recordingMode&&e.session&&e.eventBuffer){const t=e.eventBuffer.getEarliestTimestamp();t&&(Th(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`,e.getOptions()._experiments.traceInternals),e.session.started=t,e.getOptions().stickySession&&Fh(e.session))}return"session"===e.recordingMode&&e.flush(),!0}))}}async function EO(e){let{recordingData:t,replayId:n,segmentId:o,eventContext:r,timestamp:i,session:a}=e;const s=function(e){let t,{recordingData:n,headers:o}=e;const r=`${JSON.stringify(o)}\n`;if("string"===typeof n)t=`${r}${n}`;else{const e=(new TextEncoder).encode(r);t=new Uint8Array(e.length+n.length),t.set(e),t.set(n,e.length)}return t}({recordingData:t,headers:{segment_id:o}}),{urls:c,errorIds:p,traceIds:l,initialTimestamp:u}=r,d=Rc(),b=_c(),M=d&&d.getTransport(),f=d&&d.getDsn();if(!d||!M||!f||!a.sampled)return jc({});const z={type:IM,replay_start_timestamp:u/1e3,timestamp:i/1e3,error_ids:p,trace_ids:l,urls:c,replay_id:n,segment_id:o,replay_type:a.sampled},h=await async function(e){let{client:t,scope:n,replayId:o,event:r}=e;const i={event_id:o,integrations:"object"!==typeof t._integrations||null===t._integrations||Array.isArray(t._integrations)?void 0:Object.keys(t._integrations)};t.emit("preprocessEvent",r,i);const a=await Bp(t.getOptions(),r,i,n,t,Wc());if(!a)return null;a.platform=a.platform||"javascript";const s=t.getSdkMetadata(),{name:c,version:p}=s&&s.sdk||{};return a.sdk={...a.sdk,name:c||"sentry.javascript.unknown",version:p||"0.0.0"},a}({scope:b,client:d,replayId:n,event:z});if(!h)return d.recordDroppedEvent("event_processor","replay",z),Th("An event processor returned `null`, will not send event."),jc({});delete h.sdkProcessingMetadata;const O=function(e,t,n,o){return Tl(jl(e,$l(e),o,n),[[{type:"replay_event"},e],[{type:"replay_recording",length:"string"===typeof t?(new TextEncoder).encode(t).length:t.length},t]])}(h,s,f,d.getOptions().tunnel);let A;try{A=await M.send(O)}catch(ZA){const t=new Error(BM);try{t.cause=ZA}catch(g){}throw t}if("number"===typeof A.statusCode&&(A.statusCode<200||A.statusCode>=300))throw new TO(A.statusCode);const m=hd({},A);if(zd(m,"replay"))throw new CO(m);return A}class TO extends Error{constructor(e){super(`Transport returned status code ${e}`)}}class CO extends Error{constructor(e){super("Rate limit hit"),this.rateLimits=e}}async function NO(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{count:0,interval:5e3};const{recordingData:n,options:o}=e;if(n.length)try{return await EO(e),!0}catch(ZA){if(ZA instanceof TO||ZA instanceof CO)throw ZA;if(Fp("Replays",{_retryCount:t.count}),xh&&o._experiments&&o._experiments.captureExceptions&&Xp(ZA),t.count>=3){const e=new Error(`${BM} - max retries exceeded`);try{e.cause=ZA}catch(r){}throw e}return t.interval*=++t.count,new Promise(((o,r)=>{bd((async()=>{try{await NO(e,t),o(!0)}catch(n){r(n)}}),t.interval)}))}}const LO="__THROTTLED";function kO(e,t,n){const o=new Map;let r=!1;return function(){const i=Math.floor(Date.now()/1e3);if((e=>{const t=e-n;o.forEach(((e,n)=>{n<t&&o.delete(n)}))})(i),[...o.values()].reduce(((e,t)=>e+t),0)>=t){const e=r;return r=!0,e?"__SKIPPED":LO}r=!1;const a=o.get(i)||0;return o.set(i,a+1),e(...arguments)}}class PO{constructor(e){let{options:t,recordingOptions:n}=e;PO.prototype.__init.call(this),PO.prototype.__init2.call(this),PO.prototype.__init3.call(this),PO.prototype.__init4.call(this),PO.prototype.__init5.call(this),PO.prototype.__init6.call(this),this.eventBuffer=null,this.performanceEntries=[],this.replayPerformanceEntries=[],this.recordingMode="session",this.timeouts={sessionIdlePause:3e5,sessionIdleExpire:9e5},this._lastActivity=Date.now(),this._isEnabled=!1,this._isPaused=!1,this._requiresManualStart=!1,this._hasInitializedCoreListeners=!1,this._context={errorIds:new Set,traceIds:new Set,urls:[],initialTimestamp:Date.now(),initialUrl:""},this._recordingOptions=n,this._options=t,this._debouncedFlush=function(e,t,n){let o,r,i;const a=n&&n.maxWait?Math.max(n.maxWait,t):0;function s(){return c(),o=e(),o}function c(){void 0!==r&&clearTimeout(r),void 0!==i&&clearTimeout(i),r=i=void 0}function p(){return r&&clearTimeout(r),r=bd(s,t),a&&void 0===i&&(i=bd(s,a)),o}return p.cancel=c,p.flush=function(){return void 0!==r||void 0!==i?s():o},p}((()=>this._flush()),this._options.flushMinDelay,{maxWait:this._options.flushMaxDelay}),this._throttledAddEvent=kO(((e,t)=>function(e,t,n){return Zh(e,t)?Qh(e,t,n):Promise.resolve(null)}(this,e,t)),300,5);const{slowClickTimeout:o,slowClickIgnoreSelectors:r}=this.getOptions(),i=o?{threshold:Math.min(3e3,o),timeout:o,scrollTimeout:300,ignoreSelector:r?r.join(","):""}:void 0;i&&(this.clickDetector=new lh(this,i))}getContext(){return this._context}isEnabled(){return this._isEnabled}isPaused(){return this._isPaused}isRecordingCanvas(){return Boolean(this._canvas)}getOptions(){return this._options}handleException(e){xh&&Bs.error("[Replay]",e),xh&&this._options._experiments&&this._options._experiments.captureExceptions&&Xp(e)}initializeSampling(e){const{errorSampleRate:t,sessionSampleRate:n}=this._options,o=t<=0&&n<=0;this._requiresManualStart=o,o||(this._initializeSessionForSampling(e),this.session?!1!==this.session.sampled&&(this.recordingMode="buffer"===this.session.sampled&&0===this.session.segmentId?"buffer":"session",Ch(`[Replay] Starting replay in ${this.recordingMode} mode`,this._options._experiments.traceInternals),this._initializeRecording()):this.handleException(new Error("Unable to initialize and create session")))}start(){if(this._isEnabled&&"session"===this.recordingMode)return void(xh&&Bs.info("[Replay] Recording is already in progress"));if(this._isEnabled&&"buffer"===this.recordingMode)return void(xh&&Bs.info("[Replay] Buffering is in progress, call `flush()` to save the replay"));Ch("[Replay] Starting replay in session mode",this._options._experiments.traceInternals),this._updateUserActivity();const e=Yh({maxReplayDuration:this._options.maxReplayDuration,sessionIdleExpire:this.timeouts.sessionIdleExpire,traceInternals:this._options._experiments.traceInternals},{stickySession:this._options.stickySession,sessionSampleRate:1,allowBuffering:!1});this.session=e,this._initializeRecording()}startBuffering(){if(this._isEnabled)return void(xh&&Bs.info("[Replay] Buffering is in progress, call `flush()` to save the replay"));Ch("[Replay] Starting replay in buffer mode",this._options._experiments.traceInternals);const e=Yh({sessionIdleExpire:this.timeouts.sessionIdleExpire,maxReplayDuration:this._options.maxReplayDuration,traceInternals:this._options._experiments.traceInternals},{stickySession:this._options.stickySession,sessionSampleRate:0,allowBuffering:!0});this.session=e,this.recordingMode="buffer",this._initializeRecording()}startRecording(){try{const e=this._canvas;this._stopRecording=Zz({...this._recordingOptions,..."buffer"===this.recordingMode&&{checkoutEveryNms:6e4},emit:xO(this),onMutation:this._onMutationHandler,...e?{recordCanvas:e.recordCanvas,getCanvasManager:e.getCanvasManager,sampling:e.sampling,dataURLOptions:e.dataURLOptions}:{}})}catch(ZA){this.handleException(ZA)}}stopRecording(){try{return this._stopRecording&&(this._stopRecording(),this._stopRecording=void 0),!0}catch(ZA){return this.handleException(ZA),!1}}async stop(){let{forceFlush:e=!1,reason:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._isEnabled){this._isEnabled=!1;try{Th("[Replay] Stopping Replay"+(t?` triggered by ${t}`:""),this._options._experiments.traceInternals),this._removeListeners(),this.stopRecording(),this._debouncedFlush.cancel(),e&&await this._flush({force:!0}),this.eventBuffer&&this.eventBuffer.destroy(),this.eventBuffer=null,jh(this)}catch(ZA){this.handleException(ZA)}}}pause(){this._isPaused||(this._isPaused=!0,this.stopRecording(),Th("[Replay] Pausing replay",this._options._experiments.traceInternals))}resume(){this._isPaused&&this._checkSession()&&(this._isPaused=!1,this.startRecording(),Th("[Replay] Resuming replay",this._options._experiments.traceInternals))}async sendBufferedReplayOrFlush(){let{continueRecording:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("session"===this.recordingMode)return this.flushImmediate();const t=Date.now();Th("[Replay] Converting buffer to session",this._options._experiments.traceInternals),await this.flushImmediate();const n=this.stopRecording();e&&n&&"session"!==this.recordingMode&&(this.recordingMode="session",this.session&&(this._updateUserActivity(t),this._updateSessionActivity(t),this._maybeSaveSession()),this.startRecording())}addUpdate(e){const t=e();"buffer"!==this.recordingMode&&!0!==t&&this._debouncedFlush()}triggerUserActivity(){if(this._updateUserActivity(),this._stopRecording)this.checkAndHandleExpiredSession(),this._updateSessionActivity();else{if(!this._checkSession())return;this.resume()}}updateUserActivity(){this._updateUserActivity(),this._updateSessionActivity()}conditionalFlush(){return"buffer"===this.recordingMode?Promise.resolve():this.flushImmediate()}flush(){return this._debouncedFlush()}flushImmediate(){return this._debouncedFlush(),this._debouncedFlush.flush()}cancelFlush(){this._debouncedFlush.cancel()}getSessionId(){return this.session&&this.session.id}checkAndHandleExpiredSession(){if(!(this._lastActivity&&Hh(this._lastActivity,this.timeouts.sessionIdlePause)&&this.session&&"session"===this.session.sampled))return!!this._checkSession();this.pause()}setInitialState(){const e=`${kM.location.pathname}${kM.location.hash}${kM.location.search}`,t=`${kM.location.origin}${e}`;this.performanceEntries=[],this.replayPerformanceEntries=[],this._clearContext(),this._context.initialUrl=t,this._context.initialTimestamp=Date.now(),this._context.urls.push(t)}throttledAddEvent(e,t){const n=this._throttledAddEvent(e,t);if(n===LO){const e=Mh({category:"replay.throttled"});this.addUpdate((()=>!Jh(this,{type:5,timestamp:e.timestamp||0,data:{tag:"breadcrumb",payload:e,metric:!0}})))}return n}getCurrentRoute(){const e=this.lastActiveSpan||Ep(),t=e&&xp(e),n=(t&&vp(t).data||{})[ep];if(t&&n&&["route","custom"].includes(n))return vp(t).description}_initializeRecording(){this.setInitialState(),this._updateSessionActivity(),this.eventBuffer=Dh({useCompression:this._options.useCompression,workerUrl:this._options.workerUrl}),this._removeListeners(),this._addListeners(),this._isEnabled=!0,this._isPaused=!1,this.startRecording()}_initializeSessionForSampling(e){const t=this._options.errorSampleRate>0,n=Yh({sessionIdleExpire:this.timeouts.sessionIdleExpire,maxReplayDuration:this._options.maxReplayDuration,traceInternals:this._options._experiments.traceInternals,previousSessionId:e},{stickySession:this._options.stickySession,sessionSampleRate:this._options.sessionSampleRate,allowBuffering:t});this.session=n}_checkSession(){if(!this.session)return!1;const e=this.session;return!Kh(e,{sessionIdleExpire:this.timeouts.sessionIdleExpire,maxReplayDuration:this._options.maxReplayDuration})||(this._refreshSession(e),!1)}async _refreshSession(e){this._isEnabled&&(await this.stop({reason:"refresh session"}),this.initializeSampling(e.id))}_addListeners(){try{kM.document.addEventListener("visibilitychange",this._handleVisibilityChange),kM.addEventListener("blur",this._handleWindowBlur),kM.addEventListener("focus",this._handleWindowFocus),kM.addEventListener("keydown",this._handleKeyboardEvent),this.clickDetector&&this.clickDetector.addListeners(),this._hasInitializedCoreListeners||(RO(this),this._hasInitializedCoreListeners=!0)}catch(ZA){this.handleException(ZA)}this._performanceCleanupCallback=function(e){function t(t){e.performanceEntries.includes(t)||e.performanceEntries.push(t)}function n(e){let{entries:n}=e;n.forEach(t)}const o=[];return["navigation","paint","resource"].forEach((e=>{o.push(Eb(e,n))})),o.push(Rb(yh(_h,e)),wb(yh(Wh,e)),Sb(yh(wh,e)),xb(yh(Rh,e))),()=>{o.forEach((e=>e()))}}(this)}_removeListeners(){try{kM.document.removeEventListener("visibilitychange",this._handleVisibilityChange),kM.removeEventListener("blur",this._handleWindowBlur),kM.removeEventListener("focus",this._handleWindowFocus),kM.removeEventListener("keydown",this._handleKeyboardEvent),this.clickDetector&&this.clickDetector.removeListeners(),this._performanceCleanupCallback&&this._performanceCleanupCallback()}catch(ZA){this.handleException(ZA)}}__init(){this._handleVisibilityChange=()=>{"visible"===kM.document.visibilityState?this._doChangeToForegroundTasks():this._doChangeToBackgroundTasks()}}__init2(){this._handleWindowBlur=()=>{const e=Mh({category:"ui.blur"});this._doChangeToBackgroundTasks(e)}}__init3(){this._handleWindowFocus=()=>{const e=Mh({category:"ui.focus"});this._doChangeToForegroundTasks(e)}}__init4(){this._handleKeyboardEvent=e=>{mh(this,e)}}_doChangeToBackgroundTasks(e){if(!this.session)return;Gh(this.session,{maxReplayDuration:this._options.maxReplayDuration,sessionIdleExpire:this.timeouts.sessionIdleExpire})||(e&&this._createCustomBreadcrumb(e),this.conditionalFlush())}_doChangeToForegroundTasks(e){if(!this.session)return;this.checkAndHandleExpiredSession()?e&&this._createCustomBreadcrumb(e):Th("[Replay] Document has become active, but session has expired")}_updateUserActivity(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();this._lastActivity=e}_updateSessionActivity(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();this.session&&(this.session.lastActivity=e,this._maybeSaveSession())}_createCustomBreadcrumb(e){this.addUpdate((()=>{this.throttledAddEvent({type:lz.Custom,timestamp:e.timestamp||0,data:{tag:"breadcrumb",payload:e}})}))}_addPerformanceEntries(){const e=(t=this.performanceEntries,t.map(vh).filter(Boolean)).concat(this.replayPerformanceEntries);var t;return this.performanceEntries=[],this.replayPerformanceEntries=[],Promise.all(cO(this,e))}_clearContext(){this._context.errorIds.clear(),this._context.traceIds.clear(),this._context.urls=[]}_updateInitialTimestampFromEventBuffer(){const{session:e,eventBuffer:t}=this;if(!e||!t||this._requiresManualStart)return;if(e.segmentId)return;const n=t.getEarliestTimestamp();n&&n<this._context.initialTimestamp&&(this._context.initialTimestamp=n)}_popEventContext(){const e={initialTimestamp:this._context.initialTimestamp,initialUrl:this._context.initialUrl,errorIds:Array.from(this._context.errorIds),traceIds:Array.from(this._context.traceIds),urls:this._context.urls};return this._clearContext(),e}async _runFlush(){const e=this.getSessionId();if(this.session&&this.eventBuffer&&e){if(await this._addPerformanceEntries(),this.eventBuffer&&this.eventBuffer.hasEvents&&(await async function(e){try{return Promise.all(cO(e,[SO(kM.performance.memory)]))}catch(t){return[]}}(this),this.eventBuffer&&e===this.getSessionId()))try{this._updateInitialTimestampFromEventBuffer();const t=Date.now();if(t-this._context.initialTimestamp>this._options.maxReplayDuration+3e4)throw new Error("Session is too long, not sending replay");const n=this._popEventContext(),o=this.session.segmentId++;this._maybeSaveSession();const r=await this.eventBuffer.finish();await NO({replayId:e,recordingData:r,segmentId:o,eventContext:n,session:this.session,options:this.getOptions(),timestamp:t})}catch(ZA){this.handleException(ZA),this.stop({reason:"sendReplay"});const t=Rc();t&&t.recordDroppedEvent("send_error","replay")}}else xh&&Bs.error("[Replay] No session or eventBuffer found to flush.")}__init5(){var e=this;this._flush=async function(){let{force:t=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e._isEnabled&&!t)return;if(!e.checkAndHandleExpiredSession())return void(xh&&Bs.error("[Replay] Attempting to finish replay event after session expired."));if(!e.session)return;const n=e.session.started,o=Date.now()-n;e._debouncedFlush.cancel();const r=o<e._options.minReplayDuration,i=o>e._options.maxReplayDuration+5e3;if(r||i)return Th(`[Replay] Session duration (${Math.floor(o/1e3)}s) is too ${r?"short":"long"}, not sending replay.`,e._options._experiments.traceInternals),void(r&&e._debouncedFlush());const a=e.eventBuffer;if(a&&0===e.session.segmentId&&!a.hasCheckout&&Th("[Replay] Flushing initial segment without checkout.",e._options._experiments.traceInternals),!e._flushLock)return e._flushLock=e._runFlush(),await e._flushLock,void(e._flushLock=void 0);try{await e._flushLock}catch(ZA){xh&&Bs.error(ZA)}finally{e._debouncedFlush()}}}_maybeSaveSession(){this.session&&this._options.stickySession&&Fh(this.session)}__init6(){this._onMutationHandler=e=>{const t=e.length,n=this._options.mutationLimit,o=n&&t>n;if(t>this._options.mutationBreadcrumbLimit||o){const e=Mh({category:"replay.mutations",data:{count:t,limit:o}});this._createCustomBreadcrumb(e)}return!o||(this.stop({reason:"mutationLimit",forceFlush:"session"===this.recordingMode}),!1)}}}function IO(e,t){return[...e,...t].join(",")}const BO='img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',DO=["content-length","content-type","accept"];let $O=!1;class jO{static __initStatic(){this.id="Replay"}constructor(){let{flushMinDelay:e=DM,flushMaxDelay:t=$M,minReplayDuration:n=FM,maxReplayDuration:o=VM,stickySession:r=!0,useCompression:i=!0,workerUrl:a,_experiments:s={},maskAllText:c=!0,maskAllInputs:p=!0,blockAllMedia:l=!0,mutationBreadcrumbLimit:u=750,mutationLimit:d=1e4,slowClickTimeout:b=7e3,slowClickIgnoreSelectors:M=[],networkDetailAllowUrls:f=[],networkDetailDenyUrls:z=[],networkCaptureBodies:h=!0,networkRequestHeaders:O=[],networkResponseHeaders:A=[],mask:m=[],maskAttributes:g=["title","placeholder"],unmask:y=[],block:v=[],unblock:q=[],ignore:_=[],maskFn:W,beforeAddRecordingEvent:w,beforeErrorSampling:R}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.name=jO.id;const S=function(e){let{mask:t,unmask:n,block:o,unblock:r,ignore:i}=e;return{maskTextSelector:IO(t,[".sentry-mask","[data-sentry-mask]"]),unmaskTextSelector:IO(n,[]),blockSelector:IO(o,[".sentry-block","[data-sentry-block]",'base[href="/"]']),unblockSelector:IO(r,[]),ignoreSelector:IO(i,[".sentry-ignore","[data-sentry-ignore]",'input[type="file"]'])}}({mask:m,unmask:y,block:v,unblock:q,ignore:_});if(this._recordingOptions={maskAllInputs:p,maskAllText:c,maskInputOptions:{password:!0},maskTextFn:W,maskInputFn:W,maskAttributeFn:(e,t,n)=>function(e){let{el:t,key:n,maskAttributes:o,maskAllText:r,privacyOptions:i,value:a}=e;return r?i.unmaskTextSelector&&t.matches(i.unmaskTextSelector)?a:o.includes(n)||"value"===n&&"INPUT"===t.tagName&&["submit","button"].includes(t.getAttribute("type")||"")?a.replace(/[\S]/g,"*"):a:a}({maskAttributes:g,maskAllText:c,privacyOptions:S,key:e,value:t,el:n}),...S,slimDOMOptions:"all",inlineStylesheet:!0,inlineImages:!1,collectFonts:!0,errorHandler:e=>{try{e.__rrweb__=!0}catch(t){}}},this._initialOptions={flushMinDelay:e,flushMaxDelay:t,minReplayDuration:Math.min(n,15e3),maxReplayDuration:Math.min(o,VM),stickySession:r,useCompression:i,workerUrl:a,blockAllMedia:l,maskAllInputs:p,maskAllText:c,mutationBreadcrumbLimit:u,mutationLimit:d,slowClickTimeout:b,slowClickIgnoreSelectors:M,networkDetailAllowUrls:f,networkDetailDenyUrls:z,networkCaptureBodies:h,networkRequestHeaders:XO(O),networkResponseHeaders:XO(A),beforeAddRecordingEvent:w,beforeErrorSampling:R,_experiments:s},this._initialOptions.blockAllMedia&&(this._recordingOptions.blockSelector=this._recordingOptions.blockSelector?`${this._recordingOptions.blockSelector},${BO}`:BO),this._isInitialized&&LM())throw new Error("Multiple Sentry Session Replay instances are not supported");this._isInitialized=!0}get _isInitialized(){return $O}set _isInitialized(e){$O=e}afterAllSetup(e){LM()&&!this._replay&&(this._setup(e),this._initialize(e))}start(){this._replay&&this._replay.start()}startBuffering(){this._replay&&this._replay.startBuffering()}stop(){return this._replay?this._replay.stop({forceFlush:"session"===this._replay.recordingMode}):Promise.resolve()}flush(e){return this._replay?this._replay.isEnabled()?this._replay.sendBufferedReplayOrFlush(e):(this._replay.start(),Promise.resolve()):Promise.resolve()}getReplayId(){if(this._replay&&this._replay.isEnabled())return this._replay.getSessionId()}_initialize(e){this._replay&&(this._maybeLoadFromReplayCanvasIntegration(e),this._replay.initializeSampling())}_setup(e){const t=function(e,t){const n=t.getOptions(),o={sessionSampleRate:0,errorSampleRate:0,...Js(e)},r=Ul(n.replaysSessionSampleRate),i=Ul(n.replaysOnErrorSampleRate);null==r&&null==i&&Is((()=>{console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")}));null!=r&&(o.sessionSampleRate=r);null!=i&&(o.errorSampleRate=i);return o}(this._initialOptions,e);this._replay=new PO({options:t,recordingOptions:this._recordingOptions})}_maybeLoadFromReplayCanvasIntegration(e){try{const t=e.getIntegrationByName("ReplayCanvas");if(!t)return;this._replay._canvas=t.getOptions()}catch(t){}}}function XO(e){return[...DO,...e.map((e=>e.toLowerCase()))]}jO.__initStatic();const UO="undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;function FO(t,n,o){let{componentStack:r}=n;if(function(e){const t=e.match(/^([^.]+)/);return null!==t&&parseInt(t[0])>=17}(e.version)&&hs(t)&&r){const e=new Error(t.message);e.name=`React ErrorBoundary ${t.name}`,e.stack=r,function(e,t){const n=new WeakSet;!function e(t,o){if(!n.has(t))return t.cause?(n.add(t),e(t.cause,o)):void(t.cause=o)}(e,t)}(t,e)}return Xp(t,{...o,captureContext:{contexts:{react:{componentStack:r}}}})}const VO={componentStack:null,error:null,eventId:null};class HO extends e.Component{constructor(e){super(e),HO.prototype.__init.call(this),this.state=VO,this._openFallbackReportDialog=!0;const t=Rc();t&&e.showDialog&&(this._openFallbackReportDialog=!1,this._cleanupHook=t.on("afterSendEvent",(t=>{!t.type&&this._lastEventId&&t.event_id===this._lastEventId&&yd({...e.dialogOptions,eventId:this._lastEventId})})))}componentDidCatch(e,t){const{componentStack:n}=t,o=null==n?void 0:n,{beforeCapture:r,onError:i,showDialog:a,dialogOptions:s}=this.props;wc((c=>{r&&r(c,e,o);const p=FO(e,t,{mechanism:{handled:!!this.props.fallback}});i&&i(e,o,p),a&&(this._lastEventId=p,this._openFallbackReportDialog&&yd({...s,eventId:p})),this.setState({error:e,componentStack:n,eventId:p})}))}componentDidMount(){const{onMount:e}=this.props;e&&e()}componentWillUnmount(){const{error:e,componentStack:t,eventId:n}=this.state,{onUnmount:o}=this.props;o&&o(e,t,n),this._cleanupHook&&(this._cleanupHook(),this._cleanupHook=void 0)}__init(){this.resetErrorBoundary=()=>{const{onReset:e}=this.props,{error:t,componentStack:n,eventId:o}=this.state;e&&e(t,n,o),this.setState(VO)}}render(){const{fallback:t,children:n}=this.props,o=this.state;if(o.error){let n;return n="function"===typeof t?e.createElement(t,{error:o.error,componentStack:o.componentStack,resetError:this.resetErrorBoundary,eventId:o.eventId}):t,e.isValidElement(n)?n:(t&&UO&&Bs.warn("fallback did not produce a valid ReactElement"),null)}return"function"===typeof n?n():n}}function GO(){const t=(0,a.zy)(),[n,o]=(0,p.useRecoilState)(Wo.n),[r,i]=(0,p.useRecoilState)(Wo.e);return(0,e.useEffect)((()=>{t.pathname&&r&&(t.pathname.includes("/settings")||t.pathname.includes("/edit-profile")||t.pathname.includes("/security-settings")||t.pathname.includes("/payout-settings")||t.pathname.includes("/payment-settings")||t.pathname.includes("/referral-page")||t.pathname.includes("/host/profile")||t.pathname.includes("/guest/profile")||(t.pathname.includes("/your-listings")||t.pathname.includes("/your-calendar")||t.pathname.includes("/create-listing")||t.pathname.includes("/booking-request")||t.pathname.includes("/booking-receipt")||t.pathname.includes("/review-guest")||t.pathname.includes("/your-host-inbox")||t.pathname.includes("/host-conversation")||t.pathname.includes("/edit-listing")||t.pathname.includes("/dashboard")||t.pathname.includes("/all-bookings")||t.pathname.includes("/payouts")||t.pathname.includes("/payment-details")?o(!1):o(!0)))}),[t,o,null===r||void 0===r?void 0:r.guestMode]),(0,yo.jsx)(yo.Fragment,{})}const KO=Lo.Ay.div`
    width: 100vw;
    height: 100vh;
    padding: ${ko.dB.spacing_500.padding};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`,YO=Lo.Ay.button`
    width: 325px;
    background-color: ${ko.J2.White.color};
    padding: ${ko.dB.spacing_250.padding};
    border-radius: ${ko.Qk.radius_12.borderRadius};
    border: none;
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    cursor: pointer;
    display: flex;
    gap: ${ko.dB.spacing_300.gap};
`,JO=Lo.Ay.div`
    width: 24px;
    height: 24px;
`,QO=Lo.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${ko.dB.spacing_100.gap};
    align-items: flex-start;
`,ZO=Lo.Ay.h1`
    font-size: ${ko.$G.sans_400_semi.fontSize};
    line-height: ${ko.$G.sans_400_semi.lineHeight};
    font-weight: ${ko.$G.sans_400_semi.fontWeight};
`,eA=Lo.Ay.p`
    font-size: ${ko.$G.sans_300.fontSize};
    line-height: ${ko.$G.sans_300.lineHeight};
    font-weight: ${ko.$G.sans_300.fontWeight};
    color: ${ko.J2.Grey.color};
`,tA=()=>(0,yo.jsx)(KO,{children:(0,yo.jsxs)(YO,{onClick:()=>window.location.reload(),children:[(0,yo.jsx)(JO,{children:(0,yo.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,yo.jsxs)("g",{"clip-path":"url(#clip0_50431_11586)",children:[(0,yo.jsx)("path",{d:"M4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C10.4407 5 8.98566 5.44609 7.75543 6.21762",stroke:"#1D1D1F","stroke-width":"1.5","stroke-linecap":"round"}),(0,yo.jsx)("path",{d:"M9.23933 1.89844L7.49949 5.83966C7.27645 6.3449 7.50522 6.93529 8.01047 7.15833L11.9517 8.89817",stroke:"#1D1D1F","stroke-width":"1.5","stroke-linecap":"round"})]}),(0,yo.jsx)("defs",{children:(0,yo.jsx)("clipPath",{id:"clip0_50431_11586",children:(0,yo.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]})}),(0,yo.jsxs)(QO,{children:[(0,yo.jsx)(ZO,{children:"Something went wrong"}),(0,yo.jsx)(eA,{children:"This page couldn\u2019t be loaded, try again."})]})]})});var nA=n(9367);const oA=Lo.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,rA=(Lo.Ay.div`
    width: 640px;
    height: 480px;
    background: ${ko.J2.White.color};
    box-shadow: ${ko.E_.shadow_300.boxShadow};
    border-radius: ${ko.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 767px) {
        width: 400px;
    }
`,Lo.Ay.div`
    position: absolute;
    height: 36px;
    width: 36px;
    top: 14px;
    left: 14px;
    border-radius: ${ko.Qk.radius_100.borderRadius};
    border: none;
    margin: 0;
    background: ${ko.J2.White.color};
    box-shadow: ${ko.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Lo.Ay.div`
    aspect-ratio: 5 / 2;
    width: 100%;
    border-radius: ${ko.Qk.radius_12.borderRadius} 12px 0 0;
    background-color: ${ko.J2.Grey2.color};
    max-height: 260px;
`),iA=Lo.Ay.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${e=>e.imgLoading?"none":"unset"};
    border-radius: ${ko.Qk.radius_12.borderRadius} 12px 0 0;
`,aA=Lo.Ay.div`
    height: 224px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: ${ko.dB.spacing_500.gap};
    padding: ${ko.dB.spacing_500.padding};
`,sA=Lo.Ay.h1`
    width: 100%;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 30px;
        line-height: 34px;
    }
`,cA=(0,Lo.Ay)(c.N_)`
    width: 100%;
    min-height: 48px;
    border-radius: 9px;
    background: ${ko.J2.Black.color};
    color: ${ko.J2.White.color};
    text-decoration: none;
    font-size: 16px;
    font-weight: 575;
    line-height: 20px;
    text-align: center;
    padding-top: 14px;
    &:hover {
        background: ${ko.J2.Black.color};
    }
`,pA=(Lo.Ay.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`,()=>{const[t,n]=(0,e.useState)(!1),[o,r]=(0,ai.lT)(["firstVisit"]),[i,a]=(0,e.useState)(!0);(0,e.useEffect)((()=>{o.firstVisit||(r("firstVisit","true",{path:"/",maxAge:31536e3}),n(!0))}),[o,r]);const s=()=>{n(!t)},c=(0,To.A)(t,s,!0);return t?(0,yo.jsx)(oA,{children:(0,yo.jsxs)(ss.A,{ref:c,closePopup:s,desktopWidth:"640px",backBtnBackground:!0,noContinueBtn:!0,children:[(0,yo.jsx)(rA,{children:(0,yo.jsx)(iA,{src:"https://d292awxalydr86.cloudfront.net/General/Welcome+hero.jpg",alt:"Welcome to Anystay",onLoad:()=>{a(!1)},imgLoading:i})}),(0,yo.jsxs)(aA,{children:[(0,yo.jsx)(sA,{children:"Get 10% off your first Australian stay"}),(0,yo.jsx)(cA,{to:"/referral-page",onClick:s,children:"Get coupons"})]})]})}):null}),lA=()=>{const[t,n]=(0,p.useRecoilState)(nr.c6),[o,r]=(0,p.useRecoilState)(ci);return(0,e.useEffect)((()=>{(()=>{const e=new URLSearchParams(window.location.search),t=e.get("error"),o=e.get("error_description");t?o&&null!==o&&void 0!==o&&o.includes("GOOGLE_SIGN_IN_FAILED_EMAIL_EXISTS")&&(n(!0),r(null===o||void 0===o?void 0:o.split("USERNAME=")[1].replace(".","").trim())):r("")})()}),[o,t]),(0,yo.jsx)(yo.Fragment,{})},uA=(0,p.atom)({key:"pendingGoogleRedirectState",default:null}),dA=()=>{const t=(0,a.Zp)(),n=(0,p.useRecoilValue)(So.o),o=(0,p.useSetRecoilState)(uA),[r,i]=(0,e.useState)(!1),s=(0,p.useRecoilCallback)((e=>{let{snapshot:n,set:o}=e;return async e=>{if("/list-your-place"===e){const r=await n.getPromise(So.o);r&&r.id?(t(`/create-listing/${r.id}`),o(uA,null)):o(uA,e)}else t(e),o(uA,null)}}),[t]),c=(0,p.useRecoilCallback)((e=>{let{snapshot:i}=e;return async()=>{"/list-your-place"===await i.getPromise(uA)&&n&&n.id&&!r&&(t(`/create-listing/${n.id}`),o(null))}}),[n,t,o,r]);return(0,e.useEffect)((()=>{const e=ca.Y.listen("auth",(async e=>{if("customOAuthState"===e.payload.event&&e.payload.data){i(!0);try{const t=JSON.parse(e.payload.data);if("Google"===t.platform&&"/"!==t.redirectURL)return void s(t.redirectURL)}catch(t){console.error("Error handling auth state change:",t)}finally{i(!1)}}}));return()=>{e()}}),[s]),(0,e.useEffect)((()=>{c()}),[c]),null},bA=t=>{let{onSuccess:n}=t;const[o,r]=(0,p.useRecoilState)(li.H),[i,s]=(0,p.useRecoilState)(So.o),c=(0,a.zy)();return(0,e.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("hospitable_code");let t;e&&(t=(async e=>{const t=await(0,oi.p)("post","dev-anystay-hospitable","user/hospitable/init",{headers:{Authorization:o},body:{userHostModelId:null===i||void 0===i?void 0:i.id,authCode:e}});return null===t||void 0===t?void 0:t.success})(e));const r=setTimeout((()=>{n(t)}),1e3);return()=>clearTimeout(r)}),[c]),null};!function(t){const n={...t};Kl(n,"react"),Fp("react",{version:e.version}),gd(n)}({dsn:"https://ad815304989401de68858c7284549007@o4507525141430272.ingest.us.sentry.io/4507525143068672",integrations:[function(e){const t=gM({...e,instrumentPageLoad:!1,instrumentNavigation:!1}),{useEffect:n,useLocation:o,useNavigationType:r,createRoutesFromChildren:i,matchRoutes:a,stripBasename:s,instrumentPageLoad:c=!0,instrumentNavigation:p=!0}=e;return{...t,setup(){qM=n,_M=o,WM=r,RM=a,wM=i,SM=s||!1},afterAllSetup(e){t.afterAllSetup(e);const n=au&&au.location&&au.location.pathname;c&&n&&yM(e,{name:n,attributes:{[ep]:"url",[np]:"pageload",[op]:"auto.pageload.react.reactrouter_v6"}}),p&&xM.add(e)}}}({useEffect:e.useEffect,useLocation:a.zy,useNavigationType:a.wQ,createRoutesFromChildren:a.AV,matchRoutes:s.ue}),(e=>new jO(e))()],environment:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"dev",REACT_APP_BACKEND_ENDPOINT:"https://eepnxcip5k.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_BOOKING:"https://3861roos24.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_SEARCH:"https://vm1wiztm2b.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_USER:"https://uovmgj5b82.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_AUTH:"https://fg0tq4oo42.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_LISTING:"https://2ujwkkhmn0.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_MIXPANEL_TOKEN:"99fff4de5dfbfde32b38acb7924595b1",REACT_APP_INTERCOM_APP_ID:"njsfur2t",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",REACT_APP_STRIPE_PUBLIC_KEY:"pk_test_SSNwwcCynpo8Nkm7ELYKnEVU",REACT_APP_GOOGLE_RECAPTCHA_API_KEY:"6LfojLYpAAAAAFPBZBbicSKwLzLF8jBdBsG5ciFT",REACT_APP_IMAGE_BUCKET_NAME:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",REACT_APP_REDIRECT_URL:"http://localhost:3000/",REACT_APP_SSO_DOMAIN:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com",REACT_APP_SEGMENT_WRITE_KEY:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"}.REACT_APP_SENTRY_ENV,tracesSampleRate:1,replaysSessionSampleRate:.1,replaysOnErrorSampleRate:1});const MA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(4167),n.e(4192),n.e(3168),n.e(7013),n.e(7184),n.e(4490),n.e(5012)]).then(n.bind(n,5246)))),fA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(4192),n.e(7358)]).then(n.bind(n,204)))),zA=(0,e.lazy)((()=>Promise.all([n.e(7013),n.e(582)]).then(n.bind(n,582)))),hA=(0,e.lazy)((()=>Promise.all([n.e(4281),n.e(3915)]).then(n.bind(n,3915)))),OA=(0,e.lazy)((()=>n.e(5755).then(n.bind(n,5755)))),AA=(0,e.lazy)((()=>Promise.all([n.e(5070),n.e(2250)]).then(n.bind(n,2250)))),mA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(4167),n.e(9135),n.e(7184),n.e(5070),n.e(689)]).then(n.bind(n,5110)))),gA=(0,e.lazy)((()=>Promise.all([n.e(7013),n.e(6945)]).then(n.bind(n,6945)))),yA=(0,e.lazy)((()=>Promise.all([n.e(8730),n.e(8629)]).then(n.bind(n,8629)))),vA=(0,e.lazy)((()=>Promise.all([n.e(8730),n.e(8017)]).then(n.bind(n,8017)))),qA=(0,e.lazy)((()=>Promise.all([n.e(5070),n.e(1462)]).then(n.bind(n,1462)))),_A=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(4281),n.e(1648),n.e(8148),n.e(3504),n.e(4725)]).then(n.bind(n,4725)))),WA=(0,e.lazy)((()=>Promise.all([n.e(4167),n.e(9942),n.e(9376),n.e(166),n.e(593),n.e(9147)]).then(n.bind(n,9147)))),wA=(0,e.lazy)((()=>Promise.all([n.e(4167),n.e(9942),n.e(7013),n.e(3248),n.e(7316)]).then(n.bind(n,7316)))),RA=(0,e.lazy)((()=>Promise.all([n.e(7013),n.e(8672)]).then(n.bind(n,8672)))),SA=(0,e.lazy)((()=>Promise.all([n.e(7013),n.e(4812)]).then(n.bind(n,4812)))),xA=(0,e.lazy)((()=>Promise.all([n.e(4167),n.e(9942),n.e(9376),n.e(3248),n.e(8426)]).then(n.bind(n,8426)))),EA=(0,e.lazy)((()=>n.e(7275).then(n.bind(n,7275)))),TA=(0,e.lazy)((()=>n.e(7961).then(n.bind(n,7961)))),CA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(4167),n.e(9942),n.e(9135),n.e(4192),n.e(3168),n.e(7013),n.e(7184),n.e(4490),n.e(4029)]).then(n.bind(n,4029)))),NA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(9135),n.e(7013),n.e(8207)]).then(n.bind(n,8207)))),LA=(0,e.lazy)((()=>Promise.all([n.e(6156),n.e(7013),n.e(5021)]).then(n.bind(n,2076)))),kA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(9135),n.e(7013),n.e(6523)]).then(n.bind(n,6523)))),PA=(0,e.lazy)((()=>n.e(6480).then(n.bind(n,6480)))),IA=(0,e.lazy)((()=>Promise.all([n.e(9942),n.e(4281),n.e(1648),n.e(6435),n.e(3504),n.e(8902)]).then(n.bind(n,8902)))),BA=(0,e.lazy)((()=>Promise.all([n.e(4167),n.e(5940),n.e(166),n.e(593),n.e(3252)]).then(n.bind(n,3252)))),DA=(0,e.lazy)((()=>Promise.all([n.e(5940),n.e(166),n.e(8624)]).then(n.bind(n,8624)))),$A=(0,e.lazy)((()=>n.e(1080).then(n.bind(n,1080)))),jA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(9135),n.e(7013),n.e(9686)]).then(n.bind(n,9686)))),XA=(0,e.lazy)((()=>n.e(9233).then(n.bind(n,9233)))),UA=(0,e.lazy)((()=>Promise.all([n.e(9942),n.e(5508)]).then(n.bind(n,5508)))),FA=(0,e.lazy)((()=>n.e(2470).then(n.bind(n,2470)))),VA=(0,e.lazy)((()=>Promise.all([n.e(1526),n.e(1814),n.e(9135),n.e(7013),n.e(4178)]).then(n.bind(n,4178)))),HA=(0,e.lazy)((()=>n.e(6390).then(n.bind(n,6390)))),GA=(0,e.lazy)((()=>n.e(1705).then(n.bind(n,1705)))),KA=(0,e.lazy)((()=>n.e(1928).then(n.bind(n,1928)))),YA=(0,e.lazy)((()=>n.e(880).then(n.bind(n,880)))),JA=(0,e.lazy)((()=>Promise.all([n.e(6435),n.e(9305)]).then(n.bind(n,9305))));function QA(){const[n,i]=(0,e.useState)(!0),[s,u]=(0,e.useState)(!0),[d,b]=(0,ai.lT)(["referralCode"]),[M,f]=(0,e.useState)(null);(0,e.useEffect)((()=>{!function(){if(!r){let e=o.A;e.aws_cloud_logic_custom=[{name:"dev-anystay-user",endpoint:"https://uovmgj5b82.execute-api.ap-southeast-2.amazonaws.com/dev/",region:"ap-southeast-2"},{name:"dev-anystay-booking",endpoint:"https://3861roos24.execute-api.ap-southeast-2.amazonaws.com/dev/",region:"ap-southeast-2"},{name:"dev-anystay-search",endpoint:"https://vm1wiztm2b.execute-api.ap-southeast-2.amazonaws.com/dev/",region:"ap-southeast-2"},{name:"dev-anystay-auth",endpoint:"https://fg0tq4oo42.execute-api.ap-southeast-2.amazonaws.com/dev/",region:"ap-southeast-2"},{name:"dev-anystay-listing",endpoint:"https://2ujwkkhmn0.execute-api.ap-southeast-2.amazonaws.com/dev/",region:"ap-southeast-2"},{name:"dev-anystay-hostaway",endpoint:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"dev",REACT_APP_BACKEND_ENDPOINT:"https://eepnxcip5k.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_BOOKING:"https://3861roos24.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_SEARCH:"https://vm1wiztm2b.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_USER:"https://uovmgj5b82.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_AUTH:"https://fg0tq4oo42.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_LISTING:"https://2ujwkkhmn0.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_MIXPANEL_TOKEN:"99fff4de5dfbfde32b38acb7924595b1",REACT_APP_INTERCOM_APP_ID:"njsfur2t",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",REACT_APP_STRIPE_PUBLIC_KEY:"pk_test_SSNwwcCynpo8Nkm7ELYKnEVU",REACT_APP_GOOGLE_RECAPTCHA_API_KEY:"6LfojLYpAAAAAFPBZBbicSKwLzLF8jBdBsG5ciFT",REACT_APP_IMAGE_BUCKET_NAME:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",REACT_APP_REDIRECT_URL:"http://localhost:3000/",REACT_APP_SSO_DOMAIN:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com",REACT_APP_SEGMENT_WRITE_KEY:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"}.REACT_APP_BACKEND_HOSTAWAY}`,region:"ap-southeast-2"},{name:"dev-anystay-lodgify",endpoint:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"dev",REACT_APP_BACKEND_ENDPOINT:"https://eepnxcip5k.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_BOOKING:"https://3861roos24.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_SEARCH:"https://vm1wiztm2b.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_USER:"https://uovmgj5b82.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_AUTH:"https://fg0tq4oo42.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_LISTING:"https://2ujwkkhmn0.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_MIXPANEL_TOKEN:"99fff4de5dfbfde32b38acb7924595b1",REACT_APP_INTERCOM_APP_ID:"njsfur2t",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",REACT_APP_STRIPE_PUBLIC_KEY:"pk_test_SSNwwcCynpo8Nkm7ELYKnEVU",REACT_APP_GOOGLE_RECAPTCHA_API_KEY:"6LfojLYpAAAAAFPBZBbicSKwLzLF8jBdBsG5ciFT",REACT_APP_IMAGE_BUCKET_NAME:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",REACT_APP_REDIRECT_URL:"http://localhost:3000/",REACT_APP_SSO_DOMAIN:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com",REACT_APP_SEGMENT_WRITE_KEY:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"}.REACT_APP_BACKEND_LODGIFY}`,region:"ap-southeast-2"},{name:"dev-anystay-hospitable",endpoint:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"dev",REACT_APP_BACKEND_ENDPOINT:"https://eepnxcip5k.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_BOOKING:"https://3861roos24.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_SEARCH:"https://vm1wiztm2b.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_USER:"https://uovmgj5b82.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_AUTH:"https://fg0tq4oo42.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_LISTING:"https://2ujwkkhmn0.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_MIXPANEL_TOKEN:"99fff4de5dfbfde32b38acb7924595b1",REACT_APP_INTERCOM_APP_ID:"njsfur2t",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",REACT_APP_STRIPE_PUBLIC_KEY:"pk_test_SSNwwcCynpo8Nkm7ELYKnEVU",REACT_APP_GOOGLE_RECAPTCHA_API_KEY:"6LfojLYpAAAAAFPBZBbicSKwLzLF8jBdBsG5ciFT",REACT_APP_IMAGE_BUCKET_NAME:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",REACT_APP_REDIRECT_URL:"http://localhost:3000/",REACT_APP_SSO_DOMAIN:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com",REACT_APP_SEGMENT_WRITE_KEY:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"}.REACT_APP_BACKEND_HOSPITABLE}`,region:"ap-southeast-2"},{name:"dev-anystay-intelligence",endpoint:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"dev",REACT_APP_BACKEND_ENDPOINT:"https://eepnxcip5k.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_BOOKING:"https://3861roos24.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_SEARCH:"https://vm1wiztm2b.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_USER:"https://uovmgj5b82.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_AUTH:"https://fg0tq4oo42.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_LISTING:"https://2ujwkkhmn0.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_MIXPANEL_TOKEN:"99fff4de5dfbfde32b38acb7924595b1",REACT_APP_INTERCOM_APP_ID:"njsfur2t",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",REACT_APP_STRIPE_PUBLIC_KEY:"pk_test_SSNwwcCynpo8Nkm7ELYKnEVU",REACT_APP_GOOGLE_RECAPTCHA_API_KEY:"6LfojLYpAAAAAFPBZBbicSKwLzLF8jBdBsG5ciFT",REACT_APP_IMAGE_BUCKET_NAME:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",REACT_APP_REDIRECT_URL:"http://localhost:3000/",REACT_APP_SSO_DOMAIN:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com",REACT_APP_SEGMENT_WRITE_KEY:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"}.REACT_APP_BACKEND_INTELLIGENCE}`,region:"ap-southeast-2"}],e.oauth={domain:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com",scope:["email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"http://localhost:3000/",redirectSignOut:"http://localhost:3000/",responseType:"code"},t.H.configure({...e,Logging:{logStreamName:`${{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"dev",REACT_APP_BACKEND_ENDPOINT:"https://eepnxcip5k.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_BOOKING:"https://3861roos24.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_SEARCH:"https://vm1wiztm2b.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_USER:"https://uovmgj5b82.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_AUTH:"https://fg0tq4oo42.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_BACKEND_LISTING:"https://2ujwkkhmn0.execute-api.ap-southeast-2.amazonaws.com/dev/",REACT_APP_MIXPANEL_TOKEN:"99fff4de5dfbfde32b38acb7924595b1",REACT_APP_INTERCOM_APP_ID:"njsfur2t",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",REACT_APP_STRIPE_PUBLIC_KEY:"pk_test_SSNwwcCynpo8Nkm7ELYKnEVU",REACT_APP_GOOGLE_RECAPTCHA_API_KEY:"6LfojLYpAAAAAFPBZBbicSKwLzLF8jBdBsG5ciFT",REACT_APP_IMAGE_BUCKET_NAME:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",REACT_APP_REDIRECT_URL:"http://localhost:3000/",REACT_APP_SSO_DOMAIN:"anystay7893a3c5-7893a3c5-dev.auth.ap-southeast-2.amazoncognito.com",REACT_APP_SEGMENT_WRITE_KEY:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"}.REACT_APP_LOG_GROUP}`,logStreamGroup:`frontend-log-${(new Date).toISOString().split("T")[0]}`,region:"ap-southeast-2",LOG_LEVEL:"ERROR",pushToCloudWatch:!0}}),r=!0}}();(async()=>{await(async()=>{qi();const e=new sa.C("My-Logger");ca.Y.listen("auth",(t=>{let{payload:{event:n,data:o}}=t;switch(n){case"signIn":e.info("user signed in"),(0,l.hk)(di.D,JSON.parse(JSON.stringify(o)));break;case"cognitoHostedUI":console.log("GOOGLE SIGN IN DATA"),console.log(o);break;case"signUp":e.info("user signed up");break;case"signOut":e.info("user signed out"),(0,l.hk)(di.D,null);break;case"signIn_failure":e.error("user sign in failed");break;case"tokenRefresh":e.info("token refresh succeeded");break;case"tokenRefresh_failure":e.error("token refresh failed");break;case"configured":e.info("the Auth module is configured")}})),window.Intercom("boot",{api_base:"https://api-iam.intercom.io",app_id:"njsfur2t",custom_launcher_selector:".intercom_custom_launcher"}),await ri.N.currentAuthenticatedUser().then((async e=>{null!==e.username&&(await Oi(e),da.identify(e.username,{}))})).catch((async()=>{let e=await ri.N.currentUserCredentials();(0,l.hk)(pa.H,e.identityId),da.identify(e.identityId,{})}))})(),i(!1),u(!1)})()}),[]),(0,e.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("ref");e&&b("referralCode",e,{path:"/"})}),[b]);return(0,yo.jsx)(yo.Fragment,{children:(0,yo.jsx)(HO,{fallback:(0,yo.jsx)(tA,{}),children:(0,yo.jsx)(nA.vd,{children:(0,yo.jsxs)(p.RecoilRoot,{children:[(0,yo.jsx)(l.Ay,{}),!n||(z=window.location.pathname,"/"===z||z.includes("/listing")||z.includes("/search")||z.includes("/privacy-policy")||z.includes("/payment-policy")||z.includes("/terms-and-conditions")||z.includes("/list-your-place")||z.includes("/referral-page"))?(0,yo.jsxs)(c.Kd,{children:[(0,yo.jsx)(GO,{}),(0,yo.jsx)(br,{loggingIn:s,showFullPageLoading:i}),(0,yo.jsx)(lA,{}),(0,yo.jsx)(bA,{onSuccess:f}),(0,yo.jsx)(ia,{}),(0,yo.jsx)(dA,{}),(0,yo.jsx)(qo,{}),(0,yo.jsx)(pA,{}),(0,yo.jsxs)(a.BV,{children:[(0,yo.jsx)(a.qh,{path:"/hospitable/init/*",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(JA,{isSuccess:M,platform:"hospitable"})})}),(0,yo.jsx)(a.qh,{path:"/list-your-place",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(fA,{})})}),(0,yo.jsx)(a.qh,{path:"/create-booking/:id/:arrivalDate/:departureDate",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(BA,{})})}),(0,yo.jsx)(a.qh,{path:"/listing/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(WA,{})})}),(0,yo.jsx)(a.qh,{path:"/search",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(CA,{})})}),(0,yo.jsx)(a.qh,{path:"/support-center",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(KA,{})})}),(0,yo.jsx)(a.qh,{path:"/privacy-policy",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(HA,{})})}),(0,yo.jsx)(a.qh,{path:"/payment-policy",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(GA,{})})}),(0,yo.jsx)(a.qh,{path:"/terms-and-conditions",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(YA,{})})}),(0,yo.jsx)(a.qh,{path:"/guest/profile/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(AA,{})})}),(0,yo.jsx)(a.qh,{path:"/host/profile/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(mA,{})})}),(0,yo.jsxs)(a.qh,{element:(0,yo.jsx)(vo,{}),children:[(0,yo.jsx)(a.qh,{path:"/your-listings/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(NA,{})})}),(0,yo.jsx)(a.qh,{path:"/your-calendar",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(LA,{})})}),(0,yo.jsx)(a.qh,{path:"/create-listing/:userhostmodelID/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(IA,{})})}),(0,yo.jsx)(a.qh,{path:"/create-listing/:userhostmodelID",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(IA,{})})}),(0,yo.jsx)(a.qh,{path:"/booking-request/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(XA,{})})}),(0,yo.jsx)(a.qh,{path:"/booking-receipt/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(PA,{})})}),(0,yo.jsx)(a.qh,{path:"/complete-booking/:bookingID",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(BA,{})})}),(0,yo.jsx)(a.qh,{path:"/saved-listings/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(kA,{})})}),(0,yo.jsx)(a.qh,{path:"/your-booking/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(xA,{})})}),(0,yo.jsx)(a.qh,{path:"/review-stay/:bookingId/:listingId",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(EA,{})})}),(0,yo.jsx)(a.qh,{path:"/review-guest/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(TA,{})})}),(0,yo.jsx)(a.qh,{path:"/change-your-booking/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(DA,{})})}),(0,yo.jsx)(a.qh,{path:"/your-stays/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(wA,{})})}),(0,yo.jsx)(a.qh,{path:"/your-inbox/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(RA,{})})}),(0,yo.jsx)(a.qh,{path:"/your-host-inbox/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(SA,{})})}),(0,yo.jsx)(a.qh,{path:"/host-conversation/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(vA,{})})}),(0,yo.jsx)(a.qh,{path:"/conversation/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(yA,{})})}),(0,yo.jsx)(a.qh,{path:"/settings",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(zA,{})})}),(0,yo.jsx)(a.qh,{path:"/security-settings",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)($A,{})})}),(0,yo.jsx)(a.qh,{path:"/payout-settings",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(hA,{})})}),(0,yo.jsx)(a.qh,{path:"/payment-settings",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(OA,{})})}),(0,yo.jsx)(a.qh,{path:"/payouts",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(gA,{})})}),(0,yo.jsx)(a.qh,{path:"/edit-profile",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(qA,{})})}),(0,yo.jsx)(a.qh,{path:"/edit-listing/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(_A,{})})}),(0,yo.jsx)(a.qh,{path:"/manage-payments/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(UA,{})})}),(0,yo.jsx)(a.qh,{path:"/payment-details/:id",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(FA,{})})}),(0,yo.jsx)(a.qh,{path:"/dashboard",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(jA,{})})}),(0,yo.jsx)(a.qh,{path:"/all-bookings",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(VA,{})})})]}),(0,yo.jsx)(a.qh,{path:"/referral-page",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(ps,{})})}),(0,yo.jsx)(a.qh,{path:"/",element:(0,yo.jsx)(e.Suspense,{fallback:(0,yo.jsx)(yo.Fragment,{}),children:(0,yo.jsx)(MA,{})})}),(0,yo.jsx)(a.qh,{path:"*",element:(0,yo.jsx)(a.C5,{to:"/",replace:!0})})]})]}):(0,yo.jsx)(aa.A,{reverse:!1,guestMode:!0})]})})})});var z}mo.init("99fff4de5dfbfde32b38acb7924595b1");n(4391).createRoot(document.getElementById("root")).render((0,yo.jsx)(e.StrictMode,{children:(0,yo.jsx)(QA,{})}))})()})();
//# sourceMappingURL=main.5b30d292.js.map
//# debugId=f8841495-d469-5db2-8226-b1a7a0ea326e