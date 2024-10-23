"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b98a5363-ac52-5698-90df-518f373b90f2")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[2470],{2470:(e,t,i)=>{i.r(t),i.d(t,{default:()=>me});var n=i(5043),o=i(7426),s=i(2119),r=i(5475),a=i(4936);const d=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin-top: 80px;
    }
`,l=s.Ay.div`
    padding-top: 48px;
    width: calc(100% - 48px);
    margin: 0 24px;
    padding-top: 64px;
    padding-bottom: 32px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        margin: 0 auto;
        width: calc(100% - 64px);
        max-width: 704px;
    }
`,g=(s.Ay.img`
    display: flex;
    align-items: center;
    height: 16px;
    object-fit: cover;
    margin-right: 24px;
`,s.Ay.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`,s.Ay.p`
    font-size: ${a.$G.sans_800_semi.fontSize};
    line-height: ${a.$G.sans_800_semi.lineHeight};
    font-weight: ${a.$G.sans_800_semi.fontWeight};
    color: ${a.J2.Black.color};
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1000_semi.fontSize};
        line-height: ${a.$G.sans_1000_semi.lineHeight};
        margin-left: 24px;
    }
`),h=(s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};

    font-weight: ${a.$G.sans_300.fontWeight};
    margin: 0;
    margin-left: auto;
`,s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${a.dB.spacing_400.padding} 0;
    border-top: 1px solid ${a.J2.Grey2.color};
    display: flex;
    gap: ${a.dB.spacing_300.gap};
    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 auto;
        gap: ${a.dB.spacing_300.gap};
        padding: ${a.dB.spacing_500.padding} 0;
        max-width: 704px;
    }
`),c=s.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${a.dB.spacing_100.gap};
`,p=s.Ay.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`,x=s.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    color: ${a.J2.Black.color};
    margin: 0;
`,f=s.Ay.p`
    font-size: ${a.$G.sans_500_semi.fontSize};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    font-weight: ${a.$G.sans_500_semi.fontWeight};
    margin: 0;
`,m=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};
    color: ${a.J2.Black.color};
    margin: 0;
    text-decoration: underline;
`,u=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};
    color: ${a.J2.Black.color};
    margin: 0;
`,$=s.Ay.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${a.dB.spacing_300.padding} 0;
    display: flex;
    gap: ${a.dB.spacing_300.gap};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        position: relative;
        max-width: 704px;
        padding: ${a.dB.spacing_500.padding} 0;
        margin: 0 auto;
        flex-direction: row;
    }
`,_=s.Ay.button`
    width: 100%;
    height: 48px;
    display: flex;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    color: ${a.J2.White.color};
    border: none;
    background: ${a.J2.Yellow.color};
    cursor: pointer;
`,b=s.Ay.button`
    width: 100%;
    height: 48px;
    display: flex;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    color: ${a.J2.White.color};
    border: none;
    background: ${e=>e.available?a.J2.Black.color:a.J2.Grey1.color};
    cursor: pointer;

    @media (min-width: 768px) {
        width: calc(50% - 8px);
    }
`,y=s.Ay.a`
    width: 100%;
    height: 50px;
    display: flex;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};

    border: 1px solid ${a.J2.Grey1.color};
    background: none;
    cursor: pointer;

    @media (min-width: 768px) {
        width: calc(50% - 8px);
    }
`,w=s.Ay.p`
    font-size: ${a.$G.sans_200.fontSize};
    margin: 0;
    margin-top: 12px;
    line-height: ${a.$G.sans_200.lineHeight};
    color: ${a.J2.Red1.color};
    font-weight: ${a.$G.sans_200.fontWeight};
`,G=(s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    border-bottom: 1px solid ${a.J2.Grey2.color};
    display: flex;
    gap: ${a.dB.spacing_400.gap};

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        max-width: 704px;
        margin: 0 auto;
    }
`,s.Ay.button`
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    color: ${e=>e.selected?a.J2.Black.color:a.J2.Grey.color};
    border: none;
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    background: none;
    padding: 0;
    cursor: pointer;
    padding-bottom: ${e=>e.selected?"8px":"11px"};
    border-bottom: ${e=>e.selected?`2px solid ${a.J2.Black.color}`:"none"};

    @media (min-width: 768px) {
        font-size: ${a.Ox.sans_button_300.fontSize};
        line-height: ${a.Ox.sans_button_300.lineHeight};
    }
`,s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${a.dB.spacing_500.padding} 0;
    border-top: 1px solid ${a.J2.Grey2.color};
    border-bottom: 1px solid ${a.J2.Grey2.color};
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 704px;
    }
`),A=s.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${a.dB.spacing_200.gap};
    margin-left: ${e=>e.secondRow?"24px":"0px"};
`,j=s.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};

    margin: 0;
`,z=s.Ay.div`
    width: 1px;
    height: 24px;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: flex-end;
    background: ${a.J2.Grey2.color};
`,k=s.Ay.p`
    font-size: ${a.$G.sans_500_semi.fontSize};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    font-weight: ${a.$G.sans_500_semi.fontWeight};

    margin: 0;
`,v=s.Ay.a`
    background: none;

    margin: 0 auto;
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    text-decoration: underline;

    @media (min-width: 768px) {
        order: 10;
    }
`,S=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};
    color: ${a.J2.Grey.color};
    margin: 0;
`,J=(s.Ay.img`
    height: 16px;
    z-index: 1;
    object-fit: cover;
    align-self: center;
    transform: rotate(180deg);
`,s.Ay.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    height: 632px;
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${a.J2.White.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${a.E_.shadow_300.boxShadow};

    @media (min-width: 768px) {
        // bottom: 0;
        left: 0;
        // top: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 32px;
        width: 550px;
        border-radius: 25px;
    }
`),B=s.Ay.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-top: 160px;
`,W=s.Ay.p`
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: ${a.$G.sans_600_bold.fontSize};
    line-height: ${a.$G.sans_600_bold.lineHeight};
    font-weight: ${a.$G.sans_600_bold.fontWeight};

    text-align: center;
`,H=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};

    max-width: 250px;
    margin: 0;
    text-align: center;
`,O=s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-top: auto;
    height: 1px;
    background: ${a.J2.Grey2.color};
`,R=s.Ay.button`
    width: calc(100% - 48px);
    margin: ${a.dB.spacing_400.margin};
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    color: ${a.J2.White.color};
    cursor: pointer;
    border: none;
    background: ${a.J2.Blue.color};
    font-weight: ${a.Ox.sans_button_100.fontWeight};
`,C=(s.Ay.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${a.J2.Grey1.color};
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    color: ${a.J2.White.color};
    width: 100%;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 35px;
    }
`,s.Ay.div`
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    background: ${a.J2.White.color};
    padding: ${a.dB.spacing_400.padding};
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    @media (min-width: 768px) {
        width: 560px;
        height: fit-content;
        border-radius: 14px;
    }
`),D=s.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};

    margin: 0;
    margin-bottom: 16px;
    align-self: center;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_500_semi.fontSize};
        line-height: ${a.$G.sans_500_semi.lineHeight};
    }
`,U=s.Ay.p`
    font-size: ${a.$G.sans_200.fontSize};
    font-weight: ${a.$G.sans_200.fontWeight};
    max-width: 220px;
    @media (min-width: 768px) {
        font-size: ${a.$G.sans_300.fontSize};
        line-height: ${a.$G.sans_300.lineHeight};
        max-width: 260px;
    }
    align-self: center;

    margin: 0;
    margin-bottom: 32px;
    text-align: center;
`,N=s.Ay.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    border-top: 1px solid ${a.J2.Grey2.color};
`,F=s.Ay.button`
    display: flex;
    padding-bottom: 24px;
    border: none;
    border-bottom: 1px solid ${a.J2.Grey2.color};
    background: none;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 24px;
    cursor: pointer;
`,P=s.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${a.dB.spacing_200.gap};
`,T=s.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    line-height: ${a.$G.sans_300_semi.lineHeight};

    margin: 0;
`,q=s.Ay.p`
    font-size: ${a.$G.sans_200.fontSize};
    font-weight: ${a.$G.sans_200.fontWeight};
    line-height: ${a.$G.sans_200.lineHeight};
    color: ${a.J2.Grey.color};
    margin: 0;
`,I=(s.Ay.textarea`
    padding: ${a.dB.spacing_300.padding};
    width: 100%;
    border-radius: ${a.Qk.radius_12.borderRadius};
    height: 150px;
    border: 1px solid ${a.J2.Grey1.color};
    margin: 0;
    margin-bottom: 96px;
    font-size: ${a.$G.sans_300.fontSize};
    font-weight: ${a.$G.sans_300.fontWeight};

    line-height: ${a.$G.sans_300.lineHeight};

    &::placeholder {
        color: ${a.J2.Grey1.color};
    }
`,s.Ay.div`
    width: 100%;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,s.Ay.button`
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    padding: 0;
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
`,s.Ay.button`
    width: 156px;
    height: 48px;
    border-radius: 9px;
    background: ${a.J2.Red1.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    border: none;
    color: ${a.J2.White.color};
    cursor: pointer;
`,s.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};

    margin: 0;
    margin-bottom: 16px;
`,s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};

    margin: 0;
`,s.Ay.button`
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    color: ${a.J2.White.color};
    width: 100%;
    height: 48px;
    border-radius: 9px;
    background: ${a.J2.Blue.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    border: none;
    cursor: pointer;
`,s.Ay.input`
    min-height: 50px;
    width: 100%;
    margin: 0;
    border-radius: 9px;
    border: 1px solid ${a.J2.Grey1.color};
    padding-left: 16px;
    outline: none;
    font-size: ${a.$G.sans_300.fontSize};
    font-weight: ${a.$G.sans_300.fontWeight};
    line-height: ${a.$G.sans_300.lineHeight};

    margin-bottom: 128px;

    // @media(min-width: 768px) {
    //     width: calc(100% - 88px);
    //     margin: 0 44px;
    //     font-size: 16px;
    //     line-height: 22px;
    // }
`,s.Ay.input`
    min-height: 50px;
    width: 100%;
    margin: 0;
    border-radius: 9px;
    border: 1px solid ${a.J2.Grey1.color};
    padding-left: 16px;
    outline: none;
    font-size: ${a.$G.sans_1000.fontSize};
    font-weight: ${a.$G.sans_1000.fontWeight};
    line-height: ${a.$G.sans_1000.lineHeight};

    strong {
        font-weight: ${a.$G.sans_1000_semi.fontWeight};
    }

    &::placeholder {
        color: ${a.J2.Grey1.color};
    }

    // @media(min-width: 768px) {
    //     width: calc(100% - 88px);
    //     margin: 0 44px;
    //     font-size: 16px;
    //     line-height: 22px;
    // }
`),M=s.Ay.div`
    margin-bottom: 128px;
`,Y=(0,s.Ay)(r.N_)`
    text-decoration: none;
    cursor: pointer;
`,L=s.Ay.img`
    height: 16px;
    object-fit: cover;
    align-self: center;
    justify-self: flex-end;
    margin-left: auto;
    grid-column: 2/3;
    grid-row: 1/2;
    transform: rotate(180deg);
`,Z=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,E=s.Ay.img`
    height: 64px;
    width: 64px;
    margin: 0 auto;
    margin-top: 160px;
    margin-bottom: 48px;
`,Q=s.Ay.p`
    font-size: ${a.$G.sans_800_bold.fontSize};
    font-weight: ${a.$G.sans_800_bold.fontWeight};
    line-height: ${a.$G.sans_800_bold.lineHeight};

    margin: 0;
    margin-bottom: 16px;
    text-align: center;
`,K=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};

    font-weight: ${a.$G.sans_300.fontWeight};
    margin: 0 auto;
    text-align: center;
    margin-bottom: 200px;
`,X=s.Ay.div`
    display: flex;
    flex-direction: column;
    max-width: 704px;
    width: 100%;
    margin: 0 auto;
`,V=s.Ay.div`
    height: calc(100vh - 80px);
`;var ee=i(9697),te=i(579);function ie(e){let{toggleSelected:t}=e;return(0,te.jsx)(ee.A,{children:(0,te.jsxs)(J,{children:[(0,te.jsx)(B,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"alert icon"}),(0,te.jsx)(W,{children:"Feature unavailable"}),(0,te.jsx)(H,{children:"Payment requests are not available in your region yet."}),(0,te.jsx)(O,{}),(0,te.jsx)(R,{type:"button",onClick:t,children:"Done"})]})})}var ne=i(9082),oe=i(831),se=i(9856),re=i(1372);function ae(e){let{bookingRequest:t,updateBookingRequest:i,togglePopup:s,guestUserModel:r}=e;const[a,d]=(0,n.useState)(0),[l,g]=(0,n.useState)(""),[h,c]=(0,n.useState)(""),[p,x]=(0,oe.useRecoilState)(ne.H),[f,m]=(0,n.useState)(null),[u,$]=(0,n.useState)(!1),[_,b]=(0,n.useState)(!1),y=(0,se.A)(!0,s);if(!t)return null;return(0,te.jsxs)(te.Fragment,{children:[0===a&&(0,te.jsx)(re.A,{ref:y,backBtnType:"Arrow",closePopup:s,noContinueBtn:!0,children:(0,te.jsxs)(C,{children:[(0,te.jsx)(D,{children:"Offer a refund"}),(0,te.jsx)(U,{children:"Please select a reason for your refund, it won't be shared with your guest."}),(0,te.jsxs)(N,{children:[(0,te.jsxs)(F,{type:"button",onClick:()=>{d(1),g("Refund for booking related issues")},children:[(0,te.jsxs)(P,{children:[(0,te.jsx)(T,{children:"Booking related"}),(0,te.jsx)(q,{children:"Refund for booking related issues"})]}),(0,te.jsx)("img",{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon",style:{width:"8px",objectFit:"cover",transform:"rotate(180deg)"}})]}),(0,te.jsxs)(F,{type:"button",onClick:()=>{d(1),g("Refund for property related issues")},children:[(0,te.jsxs)(P,{children:[(0,te.jsx)(T,{children:"Property related"}),(0,te.jsx)(q,{children:"Refund for property related issues"})]}),(0,te.jsx)("img",{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon",style:{width:"8px",objectFit:"cover",transform:"rotate(180deg)"}})]}),(0,te.jsxs)(F,{type:"button",onClick:()=>{d(1),g("Refund for service related issues")},children:[(0,te.jsxs)(P,{children:[(0,te.jsx)(T,{children:"Service related"}),(0,te.jsx)(q,{children:"Refund for service related issues"})]}),(0,te.jsx)("img",{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon",style:{width:"8px",objectFit:"cover",transform:"rotate(180deg)"}})]}),(0,te.jsxs)(F,{type:"button",onClick:()=>{d(1),g("Please describe reason for refund")},children:[(0,te.jsxs)(P,{children:[(0,te.jsx)(T,{children:"Other reasons"}),(0,te.jsx)(q,{children:"Please describe reason for refund"})]}),(0,te.jsx)("img",{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon",style:{width:"8px",objectFit:"cover",transform:"rotate(180deg)"}})]})]})]})}),1===a&&(0,te.jsx)(re.A,{ref:y,backBtnType:"Arrow",closePopup:s,handleSave:async()=>{b(!0),await(async()=>{const e=t.paymentAmount;100*Number(h)<=e?await(0,o.p)("put","dev-anystay-booking","booking/host/refund",{headers:{Authorization:p,bookingId:t.id},body:{bookingRequestId:t.id,refundReason:l,refundMessage:"test",refundAmount:100*Number(h)}}).then((e=>{console.log(e),m(e.body.refundRequest),c(""),i(e.body.bookingRequest),d(2)})).catch((e=>console.log(e))):($(!0),c(""))})(),b(!1)},btnColor:"blue",btnText:"Refund",disable:_,isContinueBtnLoading:_,children:(0,te.jsxs)(C,{children:[(0,te.jsx)(D,{children:"Refund amount"}),(0,te.jsxs)(U,{children:["You can refund your guest ",(0,te.jsx)("br",{}),"up to ",(0,te.jsxs)("strong",{children:["$",Number(t.paymentAmount/100).toFixed(2)," AUD"]})]}),(0,te.jsxs)(M,{children:[(0,te.jsx)(I,{onKeyDown:e=>{const{key:t}=e;"."===t&&h.includes(".")||""===h&&"."===t||""===h&&","===t||(c((e=>{let i=e;if("Backspace"===t)i=i.substring(0,i.length-1);else if(!Number.isNaN(parseInt(t))||","===t||"."===t){const n=h.split(".");if(h.includes(".")&&2===n.length&&n[1].length>=2&&"Backspace"!==t)return e;i+=t}return i})),$(!1))},value:""!==h?`$${h}`:"",onChange:e=>{},placeholder:"$0.00"}),u&&(0,te.jsxs)(w,{children:["You cannot refund more than ",(0,te.jsxs)("strong",{children:["$",Number(t.paymentAmount/100).toFixed(2)," AUD"]})]})]})]})}),2===a&&(0,te.jsx)(re.A,{ref:y,backBtnType:"Close",closePopup:s,cancelBtnText:"Details",btnText:"Done",children:(0,te.jsx)(C,{children:(0,te.jsxs)(Z,{children:[(0,te.jsx)(E,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg",alt:"Success tick"}),(0,te.jsxs)(Q,{children:["$",f?Number(f.refundAmount/100).toFixed(2):""," AUD"]}),(0,te.jsxs)(K,{children:["Refunded to ",r.firstName]})]})})})]})}var de=i(5850),le=i(3216),ge=i(6879);function he(e){let{transfer:t,imgKey:i}=e;const n=(0,le.Zp)();return(0,te.jsxs)(de.A5,{type:"button",onClick:()=>{n(`/booking-receipt/${t.metadata.bookingID?t.metadata.bookingID:""}`)},children:[(0,te.jsx)(de.sr,{src:(0,ge.A)(i,300),alt:""}),(0,te.jsxs)(de.HG,{children:[(0,te.jsx)(de.YO,{children:t.amount_reversed>0?`$${Number((t.amount-t.amount_reversed)/100).toFixed(2)} (-$${t.amount_reversed})`:`$${Number(t.amount/100).toFixed(2)}`}),(0,te.jsx)(de.U9,{children:`Paid on ${new Date(1e3*t.created).toLocaleDateString("au",{day:"numeric",month:"short"})}`})]}),(0,te.jsx)(de.Ze,{children:(0,te.jsx)(de.Gy,{style:{margin:0},src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"Listing header button"})})]})}var ce=i(4677),pe=i(8306),xe=i(8069),fe=i(1852);function me(){const{id:e}=(0,le.g)(),t=(0,le.Zp)(),[i,s]=(0,oe.useRecoilState)(ne.H),[r,w]=(0,n.useState)(null),[J,B]=(0,n.useState)(null),[W,H]=(0,n.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"),[O,R]=(0,n.useState)([]),[C,D]=(0,n.useState)(null),[U,N]=(0,n.useState)(!1),[F,P]=(0,n.useState)(!1),[T,q]=(0,n.useState)(!1),[I,M]=(0,n.useState)(!1),[Z,E]=(0,n.useState)(!1),[Q,K]=(0,n.useState)(!1),ee=()=>{Q?(window.Intercom("hide"),K(!1)):(window.Intercom("showNewMessage",""),K(!0))},re=(0,se.A)(Q,ee),de=(0,n.useCallback)((async()=>{try{let t=await(0,o.p)("get","dev-anystay-booking",`booking/${e}`,{headers:{Authorization:i,bookingId:e}});t=t.body.bookingRequest;let n=await(0,o.p)("get","dev-anystay-booking",`booking/transfers/${e}`,{headers:{Authorization:i,bookingId:e}});if(t.UserModel.profilePicture){const e=(0,xe.A)(t.UserModel.profilePicture,t.UserModel.identityID,100);H(e)}D(t.UserModel),w(t.ListingModel),B(t),M(t.changeRequested),q(t.refundRequested),R(n.body.transfers),(e=>{let t=new Date,i=new Date(e.departureDate);i.setUTCDate(i.getUTCDate()+60),e&&(e.cancelled||e.paymentAmount<=0||t.getTime()>=i.getTime()?E(!1):E(!0))})(t)}catch(t){console.log(t)}}),[e,i]);(0,n.useEffect)((()=>{de()}),[de]);return J&&r&&C?(0,te.jsxs)(V,{children:[(0,te.jsx)(pe.A,{title:"Settings | Anystay"}),F&&(0,te.jsx)(ae,{bookingRequest:J,togglePopup:()=>P(!1),updateBookingRequest:e=>{B(e)},guestUserModel:C}),U&&(0,te.jsx)(ie,{toggleSelected:()=>N(!1)}),(0,te.jsxs)(d,{children:[(0,te.jsxs)(l,{children:[(0,te.jsx)(fe.A,{onClick:()=>{t(-1)},type:"Arrow",mobileTop:24,mobileLeft:24}),(0,te.jsx)(g,{children:J&&`$${(J.bookingAmount/100).toFixed(2)} ${J.refundedAmount>0?`(-$${(J.refundedAmount/100).toFixed(2)})`:""}`})]}),(0,te.jsx)(Y,{to:`/booking-request/${J.id}`,children:(0,te.jsxs)(h,{children:[(0,te.jsx)(p,{src:W,alt:"profile image"}),(0,te.jsxs)(c,{children:[(0,te.jsx)(x,{style:{color:null===(null===J||void 0===J?void 0:J.confirmed)||I||T?a.J2.Yellow.color:a.J2.Black.color},children:J.cancelled?"Cancelled":T?"Refund requested":I?"Change requested":J.confirmed?"Confirmed":"Requested"}),(0,te.jsx)(f,{children:C?`${C.firstName}`:""}),(0,te.jsx)(m,{children:r?r.propertyTitle:null}),(0,te.jsxs)(u,{children:[(()=>{if(!J)return;let e=new Date(J.arrivalDate),t=new Date(J.departureDate);return(new Date(t.setUTCHours(0)).getTime()-new Date(e.setUTCHours(0)).getTime())/864e5})()," nights \xb7 ",J.guests," guests"]})]}),(0,te.jsx)(L,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:""})]})}),(0,te.jsxs)(G,{children:[(0,te.jsxs)(A,{style:{gridColumn:"1/2",gridRow:"1/2"},children:[(0,te.jsx)(j,{children:"Your payout"}),(0,te.jsxs)(k,{children:["$",Number(J.bookingAmount/100).toFixed(2)]}),(0,te.jsx)(S,{children:function(e){const t=new Date(e.replace("Z",""));return t.setDate(t.getDate()+1),t.toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}(J.arrivalDate)})]}),(0,te.jsx)(z,{}),(0,te.jsxs)(A,{style:{gridColumn:"2/3",gridRow:"1/2"},secondRow:!0,children:[(0,te.jsx)(j,{children:"Guest paid"}),(0,te.jsxs)(k,{children:["$",Number(J.paymentAmount/100).toFixed(2)]}),(0,te.jsx)(S,{children:new Date(J.createdAt.replace("Z","")).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})})]})]}),(0,te.jsx)($,{children:null===J.confirmed||I||T?(0,te.jsx)(_,{type:"button",onClick:()=>{J&&t(`/booking-request/${J.id}`)},children:"Respond"}):(0,te.jsxs)(te.Fragment,{children:[(0,te.jsxs)(b,{available:Z,type:"button",onClick:()=>{Z&&P(!0)},children:["Refund ",C?C.firstName:""]}),(0,te.jsx)(y,{type:"button",onClick:()=>{J&&t(`/booking-receipt/${J.id}`)},children:"Get receipt"})]})}),(0,te.jsx)(X,{children:O.map(((e,t)=>(0,te.jsx)(he,{transfer:e,imgKey:JSON.parse(r.listingImages[0]).key},t)))}),(0,te.jsx)(v,{onClick:ee,ref:re,children:"Need help with your payout?"})]})]}):(0,te.jsx)(ce.A,{guestMode:!0,reverse:!1})}},5850:(e,t,i)=>{i.d(t,{A5:()=>y,B5:()=>p,EC:()=>r,F3:()=>d,Gy:()=>v,HG:()=>G,Nn:()=>c,S$:()=>g,TC:()=>z,U9:()=>j,UC:()=>a,Wx:()=>$,YO:()=>A,Ze:()=>k,cX:()=>u,f6:()=>b,iA:()=>m,iO:()=>l,nG:()=>_,pj:()=>h,r0:()=>f,sr:()=>w,yt:()=>x});var n=i(2119),o=i(5475),s=i(4936);const r=n.Ay.div`
    margin: ${s.dB.spacing_500.margin} ${s.dB.spacing_400.margin};

    @media (min-width: 768px) {
        max-width: 1024px;
        margin: 0 32px;
        padding-top: 80px;
    }

    @media (min-width: 1024px) {
        margin: 0 auto;
        padding: ${s.dB.spacing_800.padding} 0;
    }
`,a=n.Ay.div`
    width: calc(100 - 48px);
    /* margin: ${s.dB.spacing_500.margin} ${s.dB.spacing_400.margin} 0px; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 32px;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${s.dB.spacing_600.margin} 0px 0px;
        padding: 0;
    }
`,d=n.Ay.h1`
    font-size: ${s.$G.sans_900_semi.fontSize};
    line-height: ${s.$G.sans_900_semi.lineHeight};
    font-weight: ${s.$G.sans_900_semi.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_1000_semi.fontSize};
        line-height: ${s.$G.sans_1000_semi.lineHeight};
    }
`,l=(0,n.Ay)(o.N_)`
    background: none;
    border: none;
    /* margin-right: 24px; */
    height: 16px;

    @media (min-width: 768px) {
        display: none;
    }
`,g=(n.Ay.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
`,n.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    font-weight: ${s.$G.sans_300_semi.fontWeight};

    line-height: ${s.$G.sans_300_semi.lineHeight};
    margin: 0;
`,n.Ay.div`
    margin: ${s.dB.spacing_400.margin} 0;
    border-radius: ${s.Qk.radius_12.borderRadius};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    display: grid;
    grid-template-columns: 100%;
    margin-bottom: 48px;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${s.dB.spacing_500.margin} 0px ${s.dB.spacing_600.margin};
        grid-template-rows: 100%;
        grid-template-columns: calc(50% - 11px) calc(50% - 11px);
        gap: ${s.dB.spacing_300.gap};
        box-shadow: none;
    }
`),h=n.Ay.div`
    border-bottom: 1px solid ${s.J2.Grey2.color};
    display: flex;
    gap: ${s.dB.spacing_400.gap};
`,c=n.Ay.div`
    position: relative;
`,p=n.Ay.button`
    padding: 0;
    width: fit-content;
    padding-bottom: 16px;
    background: none;
    border: none;
    border-bottom: ${e=>e.selected?`2px solid ${s.J2.Black.color}`:`2px solid ${s.J2.White.color}`};
    color: ${e=>e.selected?s.J2.Black.color:s.J2.Grey.color};
    font-size: ${s.Ox.sans_button_200.fontSize};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    cursor: pointer;
`,x=n.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${s.dB.spacing_350.padding} ${s.dB.spacing_400.padding} ${s.dB.spacing_300.padding};

    @media (min-width: 768px) {
        margin: 0;
        padding: ${s.dB.spacing_400.padding} ${s.dB.spacing_400.padding} ${s.dB.spacing_350.padding};
        border-radius: ${s.Qk.radius_12.borderRadius};
        box-shadow: ${s.E_.shadow_100.boxShadow};
    }
`,f=n.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    font-weight: ${s.$G.sans_300.fontWeight};

    margin: 0;
`,m=n.Ay.p`
    font-size: ${s.$G.sans_900_semi.fontSize};
    line-height: ${s.$G.sans_900_semi.lineHeight};
    font-weight: ${s.$G.sans_900_semi.fontWeight};

    margin: 0;
    margin-top: 12px;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_1000_semi.fontSize};
        line-height: ${s.$G.sans_1000_semi.lineHeight};
    }
`,u=n.Ay.div`
    height: 1px;
    width: calc(100% - 48px);
    background: ${s.J2.Grey2.color};
    justify-self: center;
    align-self: flex-end;
    grid-column: 1/2;
    grid-row: 1/2;

    @media (min-width: 768px) {
        display: none;
    }
`,$=(n.Ay.div`
    margin: ${s.dB.spacing_200.margin} ${s.dB.spacing_400.margin};
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto 1fr;
    border-bottom: 1px solid ${s.J2.Grey2.color};
    gap: ${s.dB.spacing_500.gap};
    height: 40px;
`,n.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    color: ${e=>e.selected?s.J2.Black.color:s.J2.Grey.color};
    padding-bottom: 8px;
    margin: 0;
    cursor: pointer;
`,n.Ay.div`
    width: 100%;
    height: 3px;
    background: ${s.J2.Black.color};
    align-self: flex-end;
    transition: 0.3s;
    grid-column: ${e=>e.selected?"1/2":"2/3"};
    grid-row: 1/2;
`,n.Ay.div`
    width: calc(100% - 48px);
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    gap: ${s.dB.spacing_250.gap};
    height: 100vh;
`),_=n.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    color: ${s.J2.Grey1.color};
    margin: 0;
`,b=n.Ay.p`
    font-size: ${s.$G.sans_500.fontSize};
    line-height: ${s.$G.sans_500.lineHeight};
    font-weight: ${s.$G.sans_500.fontWeight};
    color: ${s.J2.Grey1.color};
    margin: 0;
    max-width: 245px;
`,y=(n.Ay.div`
    width: calc(100% - 48px);
    border-bottom: 1px solid ${s.J2.Grey2.color};
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${s.dB.spacing_500.margin} 0px 0px;
    }
`,n.Ay.button`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: ${s.dB.spacing_400.padding} 0;
    background: none;
    width: 100%;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid ${s.J2.Grey2.color};
    text-align: left;
`),w=n.Ay.img`
    width: 48px;
    height: 48px;
    border-radius: 9px;
    object-fit: cover;
`,G=n.Ay.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    gap: ${s.dB.spacing_100.gap};
`,A=n.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    font-weight: ${s.$G.sans_400_semi.fontWeight};

    margin: 0;
    text-align: left;
`,j=n.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    font-weight: ${s.$G.sans_300.fontWeight};
    color: ${s.J2.Grey.color};
    margin: 0;
`,z=n.Ay.div`
    height: 32px;
    padding: 0 20px;
    border-radius: ${s.Qk.radius_8.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${s.Ox.sans_button_100.fontSize};
    line-height: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${s.$G.sans_300_bold.fontWeight};
    color: ${s.J2.White.color};
    border: none;
    background: ${e=>e.respondNeeded?`${s.J2.Yellow.color}`:`${s.J2.Black.color}`};
    justify-self: flex-end;
    margin-left: auto;
    cursor: pointer;
    max-width: 82px;
`,k=(n.Ay.button`
    height: 34px;
    width: 34px;
    border-radius: 50%;
    background: ${s.J2.White.color};
    box-shadow: 0px 1.5px 9px 1px rgba(0, 0, 0, 0.09);
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;
`,n.Ay.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`,n.Ay.button`
    padding: 0;
    background: ${e=>e.selected?s.J2.Black.color:"none"};
    text-decoration: none;
    border: none;
    font-size: ${s.Ox.sans_button_100.fontSize};
    height: 32px;
    width: 32px;
    border-radius: 50%;
    line-height: ${s.Ox.sans_button_100.fontSize};
    font-weight: ${e=>e.selected?s.$G.sans_300_bold.fontWeight:s.Ox.sans_button_100.fontWeight};
    color: ${e=>e.selected?s.J2.White.color:s.J2.Black.color};
`,n.Ay.p`
    font-size: ${s.$G.sans_200.fontSize};
    font-weight: ${s.$G.sans_200.fontWeight};
    line-height: ${s.$G.sans_200.lineHeight};

    width: fit-content;
    margin: 0 auto;
    margin-bottom: 180px;
`,n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1/3;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 122px;

    .MuiPaginationItem-page {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        font-weight: 600;
    }

    .MuiPaginationItem-page:hover {
        background-color: ${s.J2.Grey5.color};
    }

    .MuiPaginationItem-page.Mui-selected {
        background-color: ${s.J2.Blue.color} !important;
        color: ${s.J2.White.color};
        font-size: ${s.$G.sans_400_semi.fontSize};
        line-height: ${s.$G.sans_400_semi.lineHeight};
        font-weight: ${s.$G.sans_400_semi.fontWeight};
    }
`,n.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    color: ${s.J2.Grey.color};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    margin: 0;
    margin-top: 24px;
`,n.Ay.div`
    background: none;
    border-radius: ${s.Qk.radius_8.borderRadius};
    text-decoration: none;
    border: none;
    color: ${s.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    padding: 0 24px;
    font-size: ${s.Ox.sans_button_100.fontSize};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    font-weight: ${s.Ox.sans_button_100.fontWeight};
    cursor: pointer;
    margin-left: auto;
`),v=n.Ay.img`
    position: absolute;
    margin-top: 48px;
    width: 8px;
    height: 14px;
    align-self: flex-end;
    justify-self: center;
    object-fit: cover;
    transform: rotate(180deg);
`},6879:(e,t,i)=>{i.d(t,{A:()=>n});const n=(e,t)=>{const i=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${e}`,edits:{resize:{width:t,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(i)}`}}}]);
//# sourceMappingURL=2470.1b7a80d8.chunk.js.map
//# debugId=b98a5363-ac52-5698-90df-518f373b90f2
