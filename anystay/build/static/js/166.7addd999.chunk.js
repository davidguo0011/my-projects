"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="75917035-de4e-537f-8f38-a1b5d601725c")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[166],{2565:(e,t,i)=>{i.d(t,{A:()=>$});var n=i(5043),s=i(2119),a=i(4936);const o=s.Ay.div`
    position: fixed;
    width: 100%;
    left: 0;
    border-radius: 14px 14px 0 0;
    background: ${a.J2.White.color};
    bottom: 0;
    margin: 0;
    max-height: calc(600px + 10vh);
    box-shadow: ${a.E_.shadow_300.boxShadow};
    z-index: 102;
    padding: ${a.dB.spacing_400.padding} ${a.dB.spacing_400.padding} ${a.dB.spacing_300.padding};
    flex-direction: column;

    @media (min-width: 768px) {
        width: 560px;
        height: fit-content;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        padding: ${a.dB.spacing_400.padding};
        margin: auto;
        border-radius: 14px;
    }
    @media (min-width: 1280px) {
        width: 800px;
    }
`,d=s.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${a.dB.spacing_500.gap};
    justify-content: center;
`,r=(s.Ay.button`
    padding: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: flex-start;
    align-self: flex-start;
    background: none;
    border: none;
    cursor: pointer;
`,s.Ay.img`
    width: 16px;
    height: 16px;
`,s.Ay.div`
    padding-top: 24px;
    position: relative;
    width: 100%;
`),l=s.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    color: ${e=>e.selected?"hsla(0, 0%, 15%, 1)":"hsla(0, 0%, 41%, 1)"};
    margin: 0;
    padding-bottom: 4px;
`,c=s.Ay.div`
    position: relative;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
        padding-bottom: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        align-self: flex-end;
    }
`,h=s.Ay.button`
    margin: 0;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    color: hsla(0, 0%, 15%, 1);
    padding-bottom: 4px;
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
`;var g=i(4348),x=i.n(g),p=i(7668),u=i(4204),m=i(9856),f=i(9697),y=i(6138),b=i(579);function $(e){let{handleClickOutside:t,startDate:i,endDate:s,listing:a,saveFunc:g,cancelFunc:x,unavailableDates:$}=e;const[w,j]=(0,n.useState)(["anyArrival"!==i?i:null,"anyDeparture"!==s?s:null]),[v,_]=(0,n.useState)(null),[A,k]=(0,n.useState)(null),[G,S]=(0,n.useState)(!1),z=(0,y.A)(),D=(0,m.A)(!0,(()=>{G||t()})),C=(0,n.useCallback)((e=>{let t=0;"3-months"===e.availabilityRange?t=3:"6-months"===e.availabilityRange?t=6:"12-months"===e.availabilityRange?t=12:"18-months"===e.availabilityRange?t=18:"24-months"!==e.availabilityRange&&"all-future-dates"!==e.availabilityRange||(t=24);let i=null;const n=new Date;e.availabilityRange&&(i=new Date(n),i.setMonth(i.getMonth()+t)),_(i)}),[]),F=(0,n.useCallback)((e=>{let t=new Date;const i=J(new Date);e.advanceNotice>0?t.setDate(t.getDate()+e.advanceNotice):i>e.advanceNoticeTime&&t.setDate(t.getDate()+1),k(t)}),[]);(0,n.useEffect)((()=>{if(C(a),F(a),i&&s&&"anyArrival"!==i&&"anyDeparture"!==s){let e=new Date(i),t=new Date(s);j([e,t])}}),[s,a,C,F,i]);const B=e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e],J=e=>{const t=new Date(e);return 100*t.getHours()+t.getMinutes()};return(0,b.jsx)(f.A,{children:(0,b.jsxs)(o,{ref:D,children:[(0,b.jsxs)(d,{children:[(0,b.jsx)(l,{selected:!(w[0]&&!w[1]),children:w&&w[0]&&"anyArrival"!==w[0]?`${String(new Date(w[0]).getDate()).padStart(2,"0")} ${B(new Date(w[0]).getMonth())}`:"Arrive"}),(0,b.jsx)(l,{selected:!!w[0],children:w&&w[1]&&"anyArrival"!==w[1]?`${String(new Date(w[1]).getDate()).padStart(2,"0")} ${B(new Date(w[1]).getMonth())}`:"Depart"})]}),(0,b.jsx)(r,{children:(0,b.jsx)(p.t1,{select:"range",returnFormat:"jsdate",value:w,min:A||void 0,max:v||void 0,timezonePlugin:p.k2,dataTimezone:"Australia/Brisbane",displayTimezone:"Australia/Brisbane",minRange:a.minimumStay?a.minimumStay+1:2,maxRange:a.maximumStay?a.maximumStay+1:366,exclusiveEndDates:!1,pages:"auto",touchUi:!z,animate:!1,theme:"material",themeVariant:"light",showRangeLabels:!1,showOuterDays:!1,display:"inline",invalid:$||[],rangeEndInvalid:!0,inRangeInvalid:!1,onChange:e=>{j(e.value)}})}),(0,b.jsxs)(c,{children:[(0,b.jsx)(h,{onClick:x,type:"button",children:"Cancel"}),(0,b.jsx)(u.A,{disabled:!w[0]||!w[1]||G,onClick:async()=>{S(!0),await g(w),x()},continueType:"button",background:"black",style:{width:"unset"},isLoading:G,children:"Save"})]})]})})}p.k2.moment=x()},2342:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(5043),s=i(2119),a=i(4936);const o=s.Ay.div`
    min-height: 260px;
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
`,d=s.Ay.div`
    width: calc(100% - 48px);
    display: grid;
    margin: 0 24px;
    align-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        width: calc(100% - 48px);
        margin: 0 auto;
    }
`,r=s.Ay.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: center;
`,l=s.Ay.p`
    position: relative;
    font-size: ${a.$G.sans_500_semi.fontSize};
    font-weight: ${a.$G.sans_500_semi.fontWeight};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    color: ${a.J2.Black.color};
    text-align: center;
    margin: 0 auto;
`,c=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};
    max-width: 180px;
    text-align: center;
    margin: 0;
    margin-top: 12px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        margin-bottom: 16px;
    }

    strong {
        font-weight: ${a.$G.sans_300_semi.fontWeight};
    }
`,h=s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    border-top: 1px solid ${a.J2.Grey2.color};
    padding: ${a.dB.spacing_400.padding} 0 ${a.dB.spacing_400.padding};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        border: none !important;
        padding: ${a.dB.spacing_300.padding} 0 ${a.dB.spacing_300.padding};
    }
`,g=s.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${a.dB.spacing_100.gap};
`,x=s.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};
    margin: 0;
`,p=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};
    color: ${a.J2.Grey.color};
    margin: 0;
`,u=s.Ay.div`
    display: flex;
    align-items: center;
    width: 110px;
    justify-content: space-between;
`,m=s.Ay.button`
    height: 35px;
    width: 35px;
    border: 1px solid;
    border-color: ${e=>e.valid?a.J2.Grey1.color:a.J2.Grey2.color};
    background: none;
    border-radius: 50%;
    font-size: ${a.Ox.sans_button_300.fontSize};
    cursor: pointer;
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    color: ${e=>e.valid?a.J2.Black.color:a.J2.Grey2.color};
    line-height: ${a.Ox.sans_button_100.lineHeight};
`,f=s.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};
    color: ${a.J2.Grey1.color};
    margin: 0;
`;var y=i(9856),b=i(1372),$=i(579);function w(e){let{adults:t,children:i,infants:s,pets:w,listingOwnerData:j,listing:v,toggleGuests:_,updateGuests:A}=e;const[k,G]=(0,n.useState)(t),[S,z]=(0,n.useState)(i),[D,C]=(0,n.useState)(s),[F,B]=(0,n.useState)(w),[J,W]=(0,n.useState)(!1),R=(0,y.A)(!0,(()=>{J||_()}));return(0,$.jsx)(b.A,{style:{width:"480px"},ref:R,backBtnType:"Arrow",closePopup:_,handleSave:async()=>{W(!0),await A({adults:k,children:S,infants:D,pets:F}),_()},disable:J,isContinueBtnLoading:J,children:(0,$.jsxs)(o,{children:[(0,$.jsx)(d,{children:(0,$.jsxs)(r,{children:[(0,$.jsx)(l,{children:"Guests"}),(0,$.jsxs)(c,{children:[j?`${j.firstName}'s`:"This"," place has a maximum of",(0,$.jsxs)("strong",{children:[" ",v.guests," guests"]})]})]})}),(0,$.jsxs)(h,{children:[(0,$.jsxs)(g,{children:[(0,$.jsx)(x,{children:"Adults"}),(0,$.jsx)(p,{children:"Ages 18+"})]}),(0,$.jsxs)(u,{children:[(0,$.jsx)(m,{type:"button",valid:k>1,onClick:()=>{k>1&&G((e=>e-1))},children:"-"}),(0,$.jsx)(x,{children:k}),(0,$.jsx)(m,{type:"button",valid:k+S<v.guests,onClick:()=>{k+S<v.guests&&G((e=>e+1))},children:"+"})]})]}),(0,$.jsxs)(h,{children:[(0,$.jsxs)(g,{children:[(0,$.jsx)(x,{children:"Children"}),(0,$.jsx)(p,{children:"Ages 2 - 17"})]}),v.houseRules.includes("No children")?(0,$.jsx)(f,{children:"Not allowed"}):(0,$.jsxs)(u,{children:[(0,$.jsx)(m,{type:"button",valid:S>0,onClick:()=>{S>0&&z((e=>e-1))},children:"-"}),(0,$.jsx)(x,{children:S}),(0,$.jsx)(m,{type:"button",valid:k+S<v.guests,onClick:()=>{k+S<v.guests&&z((e=>e+1))},children:"+"})]})]}),(0,$.jsxs)(h,{children:[(0,$.jsxs)(g,{children:[(0,$.jsx)(x,{children:"Infants"}),(0,$.jsx)(p,{children:"Under 2"})]}),v.houseRules.includes("No infants")?(0,$.jsx)(f,{children:"Not allowed"}):(0,$.jsxs)(u,{children:[(0,$.jsx)(m,{type:"button",valid:D>0,onClick:()=>{D>0&&C((e=>e-1))},children:"-"}),(0,$.jsx)(x,{children:D}),(0,$.jsx)(m,{type:"button",valid:D<99,onClick:()=>{D<99&&C((e=>e+1))},children:"+"})]})]}),(0,$.jsxs)(h,{style:{borderBottom:`1px solid ${a.J2.Grey2.color}`},children:[(0,$.jsxs)(g,{children:[(0,$.jsx)(x,{children:"Pets"}),(0,$.jsx)(p,{children:"Friendly animals"})]}),v.houseRules.includes("No pets")?(0,$.jsx)(f,{children:"Not allowed"}):(0,$.jsxs)(u,{children:[(0,$.jsx)(m,{type:"button",valid:F>0,onClick:()=>{F>0&&B((e=>e-1))},children:"-"}),(0,$.jsx)(x,{children:F}),(0,$.jsx)(m,{type:"button",valid:F<99,onClick:()=>{F<99&&B((e=>e+1))},children:"+"})]})]})]})})}},9047:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(2119),s=i(4936);const a=n.Ay.div`
    z-index: 1000;
    left: 0;
    bottom: 0;
    width: 100%;
    height: fit-content;
    background: ${s.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-shadow: ${s.E_.shadow_300.boxShadow};
    padding: ${s.dB.spacing_400.padding};
    gap: ${s.dB.spacing_250.gap};

    @media (min-width: 768px) {
        width: 317px;
        left: unset;
        top: 0;
        margin-top: 28px;
        border-radius: 14px;
    }
`,o=n.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    margin: 0;
`,d=n.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,r=n.Ay.div`
    width: 100%;
    height: 20px;
    border-bottom: 1px solid ${s.J2.Grey2.color};
`,l=n.Ay.div`
    width: 100%;
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    font-weight: ${s.$G.sans_300.fontWeight};
    margin-top: 20px;
    margin-bottom: 118px;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`,c=n.Ay.div`
    width: 100%;
    height: 16px;
    padding-left: 24px;
    position: relative;
    margin-bottom: 24px;
    margin-top: -10px;
`,h=n.Ay.button`
    border: none;
    background-color: transparent;
    position: absolute;
    left: -7px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &:before {
        content: " ";
        position: absolute;
        left: 15px;
        height: 18px;
        width: 2.5px;
        background-color: black;
        transform: rotate(45deg);
    }
    &:after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 18px;
        width: 2.5px;
        background-color: black;
        transform: rotate(-45deg);
    }
`,g=n.Ay.button`
    width: 100%;
    height: 48px;
    font-weight: ${s.$G.sans_300_bold.fontWeight};
    font-size: ${s.Ox.sans_button_100.fontSize};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    align-items: center;
    justify-content: center;
    background-color: ${s.J2.Red.color};
    color: ${s.J2.White.color};
    border: none;
    border-radius: 9px;
`;var x=i(9856),p=i(9697),u=i(579);const m=e=>{let{bookingDetails:t,toggleModal:i}=e;const n=(0,x.A)(!0,i,!0);return(0,u.jsx)(u.Fragment,{children:window.innerWidth<768?(0,u.jsx)("div",{style:{height:"100vh",width:"100vw",position:"fixed",left:0,top:0,zIndex:101,background:"rgba(0, 0, 0, 0.25)",backdropFilter:"blur(0px)"},id:"loading-full-page-small-modal",onClick:i,children:(0,u.jsx)(p.A,{children:(0,u.jsxs)(a,{children:[(0,u.jsx)(c,{children:(0,u.jsx)(h,{onClick:i})}),t.nights>7&&(0,u.jsx)(d,{children:(0,u.jsx)(o,{children:`${t.nights} nights at $${(t.nightlyPrices.averagePrice/100).toFixed(2)} average per night`})}),t.nights<=7&&(0,u.jsx)(u.Fragment,{children:t.nightlyPrices.everydayPrices.map((e=>(0,u.jsxs)(d,{children:[(0,u.jsx)(o,{children:e.date}),(0,u.jsxs)(o,{children:["$",e.extraGuestFee?`${(e.price/100).toFixed(2)} (+$${(e.extraGuestFee/100).toFixed(2)} for ${e.extraGuests} extra guests)`:(e.price/100).toFixed(2)]})]},e.date)))}),(0,u.jsx)(r,{}),(0,u.jsxs)(l,{children:["Price shown is your final price ",(0,u.jsx)("br",{}),"including taxes and fees."]}),(0,u.jsx)(g,{onClick:i,children:"Done"})]})})}):(0,u.jsxs)(a,{onClick:i,ref:n,children:[(0,u.jsx)(c,{children:(0,u.jsx)(h,{onClick:i})}),t.nights>7&&(0,u.jsx)(o,{children:`${t.nights} nights at $${(t.nightlyPrices.averagePrice/100).toFixed(2)} average per night`}),t.nights<=7&&(0,u.jsx)(u.Fragment,{children:t.nightlyPrices.everydayPrices.map((e=>(0,u.jsxs)(d,{children:[(0,u.jsx)(o,{children:e.date}),(0,u.jsxs)(o,{children:["$",e.extraGuestFee?`${(e.price/100).toFixed(2)} (+$${(e.extraGuestFee/100).toFixed(2)} for ${e.extraGuests} extra guests)`:(e.price/100).toFixed(2)]})]},e.date)))}),(0,u.jsx)(r,{}),(0,u.jsxs)(l,{children:["Price shown is your final price ",(0,u.jsx)("br",{}),"including taxes and fees."]})]})})}},6879:(e,t,i)=>{i.d(t,{A:()=>n});const n=(e,t)=>{const i=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${e}`,edits:{resize:{width:t,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(i)}`}}}]);
//# sourceMappingURL=166.7addd999.chunk.js.map
//# debugId=75917035-de4e-537f-8f38-a1b5d601725c
