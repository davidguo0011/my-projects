"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="99c10eac-c8c9-598f-94dc-2b09b55c5fb9")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[8672],{9138:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(2119),o=t(4936);const s=i.Ay.span`
    width: 28px;
    height: 28px;
    border: 5px solid ${o.J2.Grey3.color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${i.i7`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`} 1s linear infinite;
`;var r=t(579);function l(e){return(0,r.jsx)(s,{...e})}},8672:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var i=t(5043),o=t(3216),s=t(7382),r=t(7013),l=t(6879),a=t(579);function d(e){var n,t;let{conversation:o}=e;const[r,d]=(0,i.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");(0,i.useEffect)((()=>{var e,n;if(null!==o&&void 0!==o&&null!==(e=o.BookingRequestModel)&&void 0!==e&&null!==(n=e.ListingModel)&&void 0!==n&&n.listingImages){const e=(0,l.A)(JSON.parse(o.BookingRequestModel.ListingModel.listingImages[0]).key,300);d(e)}}),[o]);return(0,a.jsxs)(s.O,{to:`/conversation/${o.id}`,children:[(0,a.jsx)(s.gW,{src:r,alt:"Image of receipient"}),(0,a.jsxs)(s.RE,{children:[(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,a.jsx)(s.Ft,{guestSeen:o.guestSeen,children:null===o||void 0===o||null===(n=o.UserHostModel)||void 0===n||null===(t=n.UserModel)||void 0===t?void 0:t.firstName}),(0,a.jsx)(s.gG,{guestSeen:o.guestSeen,children:(()=>{let e=new Date(o.updatedAt),n=((new Date).getTime()-e.getTime())/1e3/60/60;return n>24?`${Math.floor(n/24)}d`:n<1?`${Math.floor(60*n)}m`:`${Math.floor(n)}h`})()})]}),(0,a.jsx)(s.tS,{guestSeen:o.guestSeen,children:(()=>{const e=e=>e.length>25?e.substring(0,25)+"...":e;return 0===o.MessageModels.items.length?null:null!==o.MessageModels.items[0].body?e(o.MessageModels.items[0].body):null!==o.MessageModels.items[0].guestNoteBody?e(o.MessageModels.items[0].guestNoteBody):void 0})()}),(0,a.jsx)(s.gG,{children:(()=>{var e,n;const t=`${(()=>{var e,n,t,i,s;return null!==o&&void 0!==o&&null!==(e=o.BookingRequestModel)&&void 0!==e&&e.completed?null!==o&&void 0!==o&&null!==(n=o.BookingRequestModel)&&void 0!==n&&n.expired?"Expired":null!==o&&void 0!==o&&null!==(t=o.BookingRequestModel)&&void 0!==t&&t.declined?"Declined":null!==o&&void 0!==o&&null!==(i=o.BookingRequestModel)&&void 0!==i&&i.cancelled?"Cancelled":null!==o&&void 0!==o&&null!==(s=o.BookingRequestModel)&&void 0!==s&&s.confirmed?"Confirmed":"Requested":"Enquiry"})()} \u2022 ${(()=>{var e;let n=new Date(null===o||void 0===o||null===(e=o.BookingRequestModel)||void 0===e?void 0:e.arrivalDate);return`${n.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getUTCMonth()]}`})()} - ${(()=>{var e;let n=new Date(null===o||void 0===o||null===(e=o.BookingRequestModel)||void 0===e?void 0:e.departureDate);return`${n.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getUTCMonth()]}`})()} \u2022 ${null===o||void 0===o||null===(e=o.BookingRequestModel)||void 0===e||null===(n=e.ListingModel)||void 0===n?void 0:n.propertyTitle}`;return t.length>43?t.substring(0,40).trim()+"...":t})()})]})]})}var u=t(7426),c=t(9138),g=t(9082),h=t(831),p=t(8306);function f(){const[e,n]=(0,i.useState)([]),[t,l]=(0,h.useRecoilState)(g.H),[f,v]=(0,i.useState)(!1),x=(0,o.Zp)(),$=(0,i.useRef)(null),y=(0,i.useRef)(null),m=(0,i.useRef)(!1),b=(0,i.useCallback)((()=>{if((()=>{var e,n;return(null===(e=$.current)||void 0===e?void 0:e.scrollHeight)>(null===(n=$.current)||void 0===n?void 0:n.clientHeight)})()&&!m.current){var e,n,t;if(null===y.current)return;v(Math.ceil(null===(e=$.current)||void 0===e?void 0:e.scrollTop)+(null===(n=$.current)||void 0===n?void 0:n.clientHeight)>=(null===(t=$.current)||void 0===t?void 0:t.scrollHeight))}}),[]),_=(0,i.useCallback)((e=>{window.innerWidth>768&&(null===e||void 0===e?void 0:e.length)>0&&x(`/conversation/${e[0].id}`)}),[x]),w=(0,i.useCallback)((async()=>{await(0,u.p)("post","dev-anystay-user","user/guest/conversations",{headers:{Authorization:t},body:{nextToken:null}}).then((e=>{console.log(e),e.success&&(y.current=e.body.nextToken,n(e.body.conversations),_(e.body.conversations))}))}),[t,_]),G=(0,i.useCallback)((async e=>{m.current=!0,await(0,u.p)("post","dev-anystay-user","user/guest/conversations",{headers:{Authorization:t},body:{nextToken:e}}).then((e=>{console.log(e),e.success&&(y.current=e.body.nextToken,v(!1),n((n=>[...n,...e.body.conversations])),m.current=!1)})).catch((e=>console.log(e)))}),[t]);return(0,i.useEffect)((()=>{f&&G(y.current)}),[G,f]),(0,i.useEffect)((()=>{const{current:e}=$;return null===e||void 0===e||e.addEventListener("scroll",b),()=>{null===e||void 0===e||e.removeEventListener("scroll",b)}}),[b]),(0,i.useEffect)((()=>{w()}),[w]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.A,{title:"Inbox | Anystay"}),(0,a.jsx)(r.A,{hide:!1}),(0,a.jsxs)(s.JW,{ref:$,children:[(0,a.jsx)(s.qY,{children:"Inbox"}),e.length>0?(0,a.jsxs)(s.lm,{children:[e.map(((e,n)=>(0,a.jsx)(d,{conversation:e},n))),f&&(0,a.jsx)(s.a3,{children:(0,a.jsx)(c.A,{})})]}):(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(s.bp,{children:"No messages yet"}),(0,a.jsx)(s.hU,{children:"All of your messages will appear here"})]})]})]})}},7382:(e,n,t)=>{t.d(n,{Ft:()=>v,JW:()=>r,O:()=>g,RE:()=>f,a3:()=>c,bp:()=>a,gG:()=>$,gW:()=>h,gx:()=>p,hU:()=>d,lm:()=>u,qY:()=>l,tS:()=>x});var i=t(2119),o=t(5475),s=t(4936);const r=i.Ay.div`
    width: calc(100% - 48px);
    height: 100dvh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 24px;
    padding-bottom: 100px;
    //disable scrollbar
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,l=i.Ay.h1`
    font-size: ${s.$G.sans_1000_semi.fontSize};
    line-height: ${s.$G.sans_1000_semi.lineHeight};
    font-weight: ${s.$G.sans_1000_semi.fontWeight};

    margin: 36px 0 12px;
    margin-right: auto;
`,a=i.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    color: ${s.J2.Grey1.color};
    margin: ${s.dB.spacing_500.margin} 0 ${s.dB.spacing_250.margin};
    margin-right: auto;
`,d=i.Ay.p`
    font-size: ${s.$G.sans_500.fontSize};
    line-height: ${s.$G.sans_500.lineHeight};
    font-weight: ${s.$G.sans_500.fontWeight};
    color: ${s.J2.Grey1.color};
    max-width: 170px;
    margin: 0;
    margin-right: auto;

    @media (min-width: 768px) {
        max-width: 199px;
        font-size: ${s.$G.sans_400.fontSize};
        line-height: ${s.$G.sans_400.lineHeight};
    }
`,u=((0,i.Ay)(o.N_)`
    text-decoration: none;
    border-top: 1px solid ${s.J2.Grey2.color};
    cursor: pointer;
`,i.Ay.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
`),c=i.Ay.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,g=(0,i.Ay)(o.N_)`
    width: 100%;
    padding: ${s.dB.spacing_300.padding} 0;
    text-decoration: none;
    display: flex;
    cursor: pointer;
`,h=i.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: ${s.Qk.radius_8.borderRadius};
    background: ${s.J2.Grey1.color};
`,p=i.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: ${s.Qk.radius_100.borderRadius};
    background: ${s.J2.Grey1.color};
`,f=i.Ay.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    flex: 1;
`,v=i.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    font-weight: ${e=>e.guestSeen?s.$G.sans_300.fontWeight:s.$G.sans_300_semi.fontWeight};

    margin: 0;
`,x=i.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${e=>e.guestSeen?s.$G.sans_300.fontWeight:s.$G.sans_300_semi.fontWeight};

    line-height: ${s.$G.sans_300.lineHeight};
    margin: ${s.dB.spacing_100.margin} 0;
`,$=i.Ay.p`
    font-size: ${s.$G.sans_200.fontSize};
    font-weight: ${e=>(e.guestSeen,s.$G.sans_200.fontWeight)};
    line-height: ${s.$G.sans_200.lineHeight};
    color: ${s.J2.Grey.color};
    margin: 0;
`;(0,i.Ay)(o.N_)`
    width: calc(100 - 48px);
    margin: 0 24px;
    height: 50px;
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.Ox.sans_button_100.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: ${s.Ox.sans_button_100.lineHeight};
    cursor: pointer;
    border-radius: 9px;
`,i.Ay.div`
    height: 1px;
    background: ${s.J2.Grey2.color};
    width: calc(100 - 48px);
    margin: ${s.dB.spacing_400.margin};
`,(0,i.Ay)(o.N_)`
    width: calc(100% - 48px);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    font-size: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.$G.sans_300_bold.fontWeight};
    text-decoration: none;
    line-height: ${s.Ox.sans_button_100.lineHeight};
    background: ${s.J2.Red.color};
    margin-top: auto;
    border: none;
    color: ${s.J2.White.color};
    position: absolute;
    bottom: 114px;
    cursor: pointer;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 0px;
        background: ${s.J2.Grey1.color};
        top: -24px;
    }
`},6879:(e,n,t)=>{t.d(n,{A:()=>i});const i=(e,n)=>{const t=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${e}`,edits:{resize:{width:n,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(t)}`}}}]);
//# sourceMappingURL=8672.fd3fd143.chunk.js.map
//# debugId=99c10eac-c8c9-598f-94dc-2b09b55c5fb9
