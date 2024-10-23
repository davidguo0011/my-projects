"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e5f97994-9e2f-5e05-a695-0c2eb92fa244")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[6480],{6480:(e,i,t)=>{t.r(i),t.d(i,{default:()=>A});var n=t(5043),s=t(2119),a=t(4936);const l=s.Ay.div`
    width: 100%;
    height: 100%;
    background: ${a.J2.White.color};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
`,o=s.Ay.div`
    margin: 0 24px;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        margin: 0;
        max-width: 722px;
    }
`,r=s.Ay.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
`,d=s.Ay.p`
    font-size: ${a.$G.sans_1000_bold.fontSize};
    font-weight: ${a.$G.sans_1000_bold.fontWeight};
    line-height: ${a.$G.sans_1000_bold.lineHeight};
    margin: 0;
`,g=s.Ay.button`
    height: 48px;
    width: 104px;
    border-radius: 9px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    border: 1px solid ${a.J2.Black.color};
    cursor: pointer;
`,c=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    color: ${a.J2.Grey.color};
    font-weight: ${a.$G.sans_300.fontWeight};
    margin: 0;
    margin-bottom: 32px;
`,h=s.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
`,u=s.Ay.p`
    font-size: ${a.$G.sans_400.fontSize};
    line-height: ${a.$G.sans_400.lineHeight};
    font-weight: ${a.$G.sans_400.fontWeight};
    margin: 0;
    margin-bottom: 32px;
`,$=s.Ay.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100%;
    border-top: 1px solid ${a.J2.Grey2.color};
    border-bottom: 1px solid ${a.J2.Grey2.color};
    padding: ${a.dB.spacing_500.padding} 0;
    height: 144px;
`,f=s.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    margin: 0;
    line-height: ${a.$G.sans_300_semi.lineHeight};
    align-self: flex-start;
    grid-row: 1/2;
`,y=s.Ay.p`
    font-size: ${a.$G.sans_600_semi.fontSize};
    font-weight: ${a.$G.sans_600_semi.fontWeight};
    margin: 0;
    line-height: ${a.$G.sans_600_semi.lineHeight};
    align-self: center;
    grid-row: 1/2;
`,x=s.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    font-weight: ${a.$G.sans_300.fontWeight};
    color: ${a.J2.Grey.color};
    margin: 0;
    line-height: ${a.$G.sans_300.lineHeight};
    align-self: flex-end;
    grid-row: 1/2;
`;var m=t(3216),p=t(9709),_=t(1869),b=t(9082),v=t(831),w=t(7426),G=t(8306),j=t(579);function A(){const[e,i]=(0,n.useState)(null),[t,s]=(0,n.useState)(""),[a,A]=(0,n.useState)(""),[S,k]=(0,n.useState)(""),[z,C]=(0,n.useState)(!1),[H,J]=(0,v.useRecoilState)(p.U),[W,F]=(0,v.useRecoilState)(_.e),[N,D]=(0,v.useRecoilState)(b.H),{id:R}=(0,m.g)(),T=(0,n.useCallback)((async()=>(await(0,w.p)("get","dev-anystay-booking",`booking/${R}`,{headers:{Authorization:N,bookingId:R}})).body.bookingRequest),[R,N]),O=(0,n.useCallback)((async()=>{var e;let i="";return null!==H&&void 0!==H&&null!==(e=H.individual)&&void 0!==e&&e.address&&H.individual.address.line1&&H.individual.address.city&&H.individual.address.state&&H.individual.address.country&&(i=`${H.individual.address.line2?`${H.individual.address.line2}/`:""}${H.individual.address.line1}, ${H.individual.address.city}, ${H.individual.address.state}, ${H.individual.address.country}`),i}),[H]),B=(0,n.useCallback)((()=>{let e=!1;return H&&H.company&&H.company.tax_id_provided&&(e=!0),e}),[H]),M=(0,n.useCallback)((async()=>{let e=await T(),t=await O(),n=B(),a=(e=>`${new Date(e.createdAt).getDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e.createdAt).getMonth()]} ${new Date(e.createdAt).getFullYear()}`)(e),l=W,o=`${null!==l&&void 0!==l&&l.firstName?l.firstName:""} ${null!==l&&void 0!==l&&l.lastName?l.lastName:""}`;k(t),i(e),s(o),A(a),C(n)}),[O,T,B,W]);return(0,n.useEffect)((()=>{M()}),[M]),(0,j.jsxs)(l,{children:[(0,j.jsx)(G.A,{title:"Receipt | Anystay"}),(0,j.jsxs)(o,{children:[(0,j.jsxs)(r,{children:[(0,j.jsx)(d,{children:"Tax invoice"}),(0,j.jsx)(g,{type:"button",onClick:()=>window.print(),children:"Print"})]}),(0,j.jsxs)(c,{children:[a," ",z?"- Tax ID Provided":null]}),(0,j.jsx)(h,{children:"Anystay Pty Ltd"}),(0,j.jsx)(u,{children:"60 Sherwood road, Toowong, QLD 4066"}),(0,j.jsx)(h,{children:t}),(0,j.jsx)(u,{children:S}),(0,j.jsxs)($,{children:[(0,j.jsx)(f,{style:{gridColumn:"1/2"},children:"Subtotal"}),(0,j.jsxs)(y,{style:{gridColumn:"1/2"},children:["$",e?Number(9*e.serviceFee/1e3).toFixed(2):0]}),(0,j.jsx)(x,{style:{gridColumn:"1/2"},children:"Before tax"}),(0,j.jsx)(f,{style:{gridColumn:"2/3"},children:"GST"}),(0,j.jsxs)(y,{style:{gridColumn:"2/3"},children:["$",e?Number(e.serviceFee/1e3).toFixed(2):0]}),(0,j.jsx)(x,{style:{gridColumn:"2/3"},children:"10%"}),(0,j.jsx)(f,{style:{gridColumn:"3/4"},children:"Total service fee"}),(0,j.jsxs)(y,{style:{gridColumn:"3/4"},children:["$",e?Number(e.serviceFee/100).toFixed(2):0]}),(0,j.jsx)(x,{style:{gridColumn:"3/4"},children:"After tax"})]})]})]})}},9709:(e,i,t)=>{t.d(i,{U:()=>a});var n=t(831),s=t(2493);const a=(0,n.selector)({key:"stripeAccountSelector",get:e=>{let{get:i}=e;return i(s._)},set:(e,i)=>{let{set:t}=e;return t(s._,i)}})}}]);
//# sourceMappingURL=6480.8be6008b.chunk.js.map
//# debugId=e5f97994-9e2f-5e05-a695-0c2eb92fa244
