"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c7201f2b-4f01-5511-a0ab-21a54d389ff0")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[4812],{9138:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(2119),i=n(4936);const s=o.Ay.span`
    width: 28px;
    height: 28px;
    border: 5px solid ${i.J2.Grey3.color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${o.i7`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`} 1s linear infinite;
`;var r=n(579);function l(e){return(0,r.jsx)(s,{...e})}},4812:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var o=n(5043),i=n(7013),s=n(7382),r=n(8069),l=n(579);function a(e){let{conversation:t}=e;const[n,i]=(0,o.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png");(0,o.useEffect)((()=>{var e;if(null!==t&&void 0!==t&&null!==(e=t.UserModel)&&void 0!==e&&e.profilePicture){const e=(0,r.A)(t.UserModel.profilePicture,t.UserModel.identityID,100);i(e)}}),[t]);return(0,l.jsxs)(s.O,{to:`/host-conversation/${t.id}`,children:[(0,l.jsx)(s.gx,{src:n,alt:"Image of receipient"}),(0,l.jsxs)(s.RE,{children:[(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,l.jsx)(s.Ft,{guestSeen:t.hostSeen,children:t.UserModel.firstName}),(0,l.jsx)(s.gG,{guestSeen:t.hostSeen,children:(()=>{let e=new Date(t.updatedAt),n=((new Date).getTime()-e.getTime())/1e3/60/60;return n>24?`${Math.floor(n/24)}d`:n<1?`${Math.floor(60*n)}m`:`${Math.floor(n)}h`})()})]}),(0,l.jsx)(s.tS,{guestSeen:t.hostSeen,children:(()=>{const e=e=>e.length>25?e.substring(0,25)+"...":e;return 0===t.MessageModels.items.length?null:null!==t.MessageModels.items[0].body?e(t.MessageModels.items[0].body):null!==t.MessageModels.items[0].hostNoteBody?e(t.MessageModels.items[0].hostNoteBody):void 0})()}),(0,l.jsx)(s.gG,{children:(()=>{if(t){const e=`${(()=>{if(t)return t.BookingRequestModel.completed?t.BookingRequestModel.expired?"Expired":t.BookingRequestModel.declined?"Declined":t.BookingRequestModel.cancelled?"Cancelled":t.BookingRequestModel.confirmed?"Confirmed":"Requested":"Enquiry"})()} \u2022 ${(()=>{let e=new Date(t.BookingRequestModel.arrivalDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()} - ${(()=>{let e=new Date(t.BookingRequestModel.departureDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()} \u2022 ${t.BookingRequestModel.ListingModel.propertyTitle}`;return e.length>43?e.substring(0,40).trim()+"...":e}})()})]})]})}var d=n(4677),c=n(9138),g=n(7607),u=n(9082),h=n(831),f=n(3216),p=n(7426),x=n(8306);function $(){const e=(0,f.Zp)(),[t,n]=(0,o.useState)([]),[r,$]=(0,o.useState)(!1),y=(0,o.useRef)(null),m=(0,o.useRef)(null),b=(0,o.useRef)(!1),[_,v]=(0,h.useRecoilState)(g.o),[w,M]=(0,h.useRecoilState)(u.H),G=(0,o.useCallback)((()=>{if((()=>{var e,t;return(null===(e=y.current)||void 0===e?void 0:e.scrollHeight)>(null===(t=y.current)||void 0===t?void 0:t.clientHeight)})()&&!b.current){var e,t,n;if(null===m.current)return;$(Math.ceil(null===(e=y.current)||void 0===e?void 0:e.scrollTop)+(null===(t=y.current)||void 0===t?void 0:t.clientHeight)>=(null===(n=y.current)||void 0===n?void 0:n.scrollHeight))}}),[]),A=(0,o.useCallback)((async()=>{await(0,p.p)("post","dev-anystay-user","user/host/conversations",{headers:{Authorization:w},body:{userHostModelId:_.id,nextToken:null}}).then((e=>{if(console.log("hostInboxConversations",e),e.success)return m.current=e.body.nextToken,n(e.body.conversations),e.body.conversations})).catch((e=>(console.log(e),!1)))}),[w,_]),k=(0,o.useCallback)((async e=>{b.current=!0,await(0,p.p)("post","dev-anystay-user","user/host/conversations",{headers:{Authorization:w},body:{userHostModelId:_.id,nextToken:e}}).then((e=>{console.log(e),e.success&&(m.current=e.body.nextToken,$(!1),n((t=>[...t,...e.body.conversations])),b.current=!1)})).catch((e=>console.log(e)))}),[w,_]),j=(0,o.useCallback)((t=>{window.innerWidth>768&&t&&t.length>0&&e(`/host-conversation/${t[0].id}`)}),[e]);return(0,o.useEffect)((()=>{r&&m.current&&k(m.current)}),[k,r]),(0,o.useEffect)((()=>{const{current:e}=y;return null===e||void 0===e||e.addEventListener("scroll",G),()=>{null===e||void 0===e||e.removeEventListener("scroll",G)}}),[G]),(0,o.useEffect)((()=>{(async()=>{const e=await A();e&&j(e)})()}),[A,j]),_?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x.A,{title:"Inbox | Anystay"}),(0,l.jsx)(i.A,{hide:!1}),(0,l.jsxs)(s.JW,{ref:y,children:[(0,l.jsx)(s.qY,{children:"Inbox"}),t.length>0?(0,l.jsxs)(s.lm,{children:[t.map(((e,t)=>(0,l.jsx)(a,{conversation:e},t))),r&&(0,l.jsx)(s.a3,{children:(0,l.jsx)(c.A,{})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.bp,{children:"No messages yet"}),(0,l.jsx)(s.hU,{children:"All of your messages will appear here"})]})]})]}):(0,l.jsx)(d.A,{guestMode:!0,reverse:!1})}},7382:(e,t,n)=>{n.d(t,{Ft:()=>x,JW:()=>r,O:()=>u,RE:()=>p,a3:()=>g,bp:()=>a,gG:()=>y,gW:()=>h,gx:()=>f,hU:()=>d,lm:()=>c,qY:()=>l,tS:()=>$});var o=n(2119),i=n(5475),s=n(4936);const r=o.Ay.div`
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
`,l=o.Ay.h1`
    font-size: ${s.$G.sans_1000_semi.fontSize};
    line-height: ${s.$G.sans_1000_semi.lineHeight};
    font-weight: ${s.$G.sans_1000_semi.fontWeight};

    margin: 36px 0 12px;
    margin-right: auto;
`,a=o.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    color: ${s.J2.Grey1.color};
    margin: ${s.dB.spacing_500.margin} 0 ${s.dB.spacing_250.margin};
    margin-right: auto;
`,d=o.Ay.p`
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
`,c=((0,o.Ay)(i.N_)`
    text-decoration: none;
    border-top: 1px solid ${s.J2.Grey2.color};
    cursor: pointer;
`,o.Ay.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
`),g=o.Ay.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,u=(0,o.Ay)(i.N_)`
    width: 100%;
    padding: ${s.dB.spacing_300.padding} 0;
    text-decoration: none;
    display: flex;
    cursor: pointer;
`,h=o.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: ${s.Qk.radius_8.borderRadius};
    background: ${s.J2.Grey1.color};
`,f=o.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    border-radius: ${s.Qk.radius_100.borderRadius};
    background: ${s.J2.Grey1.color};
`,p=o.Ay.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    flex: 1;
`,x=o.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    font-weight: ${e=>e.guestSeen?s.$G.sans_300.fontWeight:s.$G.sans_300_semi.fontWeight};

    margin: 0;
`,$=o.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${e=>e.guestSeen?s.$G.sans_300.fontWeight:s.$G.sans_300_semi.fontWeight};

    line-height: ${s.$G.sans_300.lineHeight};
    margin: ${s.dB.spacing_100.margin} 0;
`,y=o.Ay.p`
    font-size: ${s.$G.sans_200.fontSize};
    font-weight: ${e=>(e.guestSeen,s.$G.sans_200.fontWeight)};
    line-height: ${s.$G.sans_200.lineHeight};
    color: ${s.J2.Grey.color};
    margin: 0;
`;(0,o.Ay)(i.N_)`
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
`,o.Ay.div`
    height: 1px;
    background: ${s.J2.Grey2.color};
    width: calc(100 - 48px);
    margin: ${s.dB.spacing_400.margin};
`,(0,o.Ay)(i.N_)`
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
`}}]);
//# sourceMappingURL=4812.de0788cc.chunk.js.map
//# debugId=c7201f2b-4f01-5511-a0ab-21a54d389ff0
