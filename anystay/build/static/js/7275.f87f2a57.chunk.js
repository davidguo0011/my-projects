"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f05d415d-bf7c-53de-8e87-a7d3e306810e")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[7275],{9820:(e,i,n)=>{n.d(i,{A:()=>l});var t=n(2119),o=n(4936);const s=t.Ay.button`
    height: ${e=>e.size?e.size:"80px"};
    border-radius: ${o.Qk.radius_100.borderRadius};
    width: ${e=>e.size?e.size:"80px"};
    position: relative;
    background: ${e=>e.disabled?o.J2.Grey1.color:"red"===e.background?o.J2.Red.color:"blue"===e.background?o.J2.Blue.color:"black"===e.background?o.J2.Black.color:"grey"===e.background?o.J2.Grey1.color:"white"===e.background?o.J2.White.color:void 0};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${o.Ox.sans_button_200.fontSize};
    font-weight: ${o.Ox.sans_button_200.fontWeight};
    color: ${e=>e.isLoading?"transparent":o.J2.White.color};
    margin-top: auto;
    line-height: ${o.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${o.E_.shadow_100.boxShadow};
    transition:
        transform 0.2s,
        box-shadow 0.2s;
    &:hover {
        transform: ${e=>e.disabled?"none":"translateY(-5px)"};
        box-shadow: ${e=>e.disabled?"1px 3px 12px 0px rgba(0, 0, 0, 0.1)":"1px 3px 12px 0px rgba(0, 0, 0, 0.3)"};
    }

    &:active {
        transform: ${e=>e.disabled?"none":"translateY(0)"};
        box-shadow: ${e=>(e.disabled,"none")};
    }
`,a=t.Ay.img`
    width: ${e=>e.iconSize?e.iconSize:"40px"};
    display: flex;
    align-items: center;
    justify-content: center;
`;var d=n(308),r=n(579);const l=e=>{let{isLoading:i,children:n,disabled:t,background:o,src:l,iconSize:h,size:c,...g}=e;return(0,r.jsxs)(s,{...g,background:o,disabled:t,isLoading:i||!1,size:c,children:[i&&(0,r.jsx)(d.A,{height:"14px",color:"white",width:"32px",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n,!i&&(0,r.jsx)(a,{src:l||"https://d292awxalydr86.cloudfront.net/Universal+icons/Next.svg",alt:"Arrow Btn",iconSize:h})]})}},7275:(e,i,n)=>{n.r(i),n.d(i,{default:()=>Y});var t=n(5043),o=n(3216),s=n(2119),a=n(1791),d=n(5073),r=n(6442),l=n(7811),h=n(4936);const c=s.Ay.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        min-height: 100vh;
    }
`,g=s.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        max-width: 567px;
    }
    /* @media(min-width: 1280px) {
        margin-right: 90px;
    }
    @media(min-width: 1440px) {
        margin-right: 190px;
    } */
`,x=s.Ay.div`
    padding-top: 120px;
    width: 100%;
    display: flex;
    gap: ${h.dB.spacing_400.gap};
    margin-bottom: ${e=>0===e.pageIndex?"48px":"24px"};

    @media (min-width: 768px) {
        padding: 0;
        padding-top: 144px;
        margin-bottom: 12px !important;
    }
`,p=s.Ay.p`
    font-size: ${h.$G.sans_900_bold.fontSize};
    line-height: ${h.$G.sans_900_bold.lineHeight};

    margin: 0;
    font-weight: ${h.$G.sans_900_bold.fontWeight};

    @media (min-width: 768px) {
        font-size: ${h.$G.sans_1000_bold.fontSize};
        line-height: ${h.$G.sans_1000_bold.lineHeight};
    }
`,u=s.Ay.button`
    background: none;
    border: none;
    position: absolute;
    right: 24px;
    top: 20px;
    z-index: 100;
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};

    @media (min-width: 768px) {
        display: none;
    }
`,m=s.Ay.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`,b=(s.Ay.img`
    height: 18px;
    object-fit: cover;
`,s.Ay.p`
    font-size: ${h.$G.sans_500.fontSize};
    line-height: ${h.$G.sans_500.lineHeight};
    color: ${h.J2.Grey.color};
    margin: 0;
    font-weight: ${h.$G.sans_500.fontWeight};
    margin-bottom: 48px;
    @media (max-width: 767px) {
        display: none;
    }
`),y=s.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};

    margin: 0;
    margin-bottom: 24px;
`,$=s.Ay.div`
    @media (min-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`,f=s.Ay.div`
    display: flex;
    gap: ${h.dB.spacing_300.gap};
    margin-bottom: 32px;
`,w=s.Ay.button`
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 50%;
    background: none;
    cursor: pointer;
`,_=s.Ay.textarea`
    width: 100%;
    height: 314px;
    margin-bottom: 12px;
    padding: ${h.dB.spacing_300.padding};
    border: 1px solid ${h.J2.Grey1.color};
    border-radius: ${h.Qk.radius_12.borderRadius};
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};

    resize: none;

    ::placeholder {
        color: ${h.J2.Grey1.color};
    }
    @media (min-width: 768px) {
        height: 450px;
        width: 100%;
        margin-bottom: 16px;
    }
`,j=s.Ay.div`
    display: flex;
`,v=s.Ay.p`
    font-size: ${h.$G.sans_200.fontSize};
    font-weight: ${h.$G.sans_200.fontWeight};
    line-height: ${h.$G.sans_200.lineHeight};
    color: ${h.J2.Grey.color};
    margin: 0;
`,A=s.Ay.p`
    margin-left: auto;
    font-size: ${h.$G.sans_300_semi.fontSize};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
`,k=((0,s.Ay)(a.A)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    background: ${h.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${h.dB.spacing_300.gap};
    padding-left: 16px !important;
`,(0,s.Ay)(d.A)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    background: ${h.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${h.dB.spacing_300.gap};
    padding-left: 16px !important;
`,(0,s.Ay)(r.A)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    background: ${h.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${h.dB.spacing_300.gap};
    padding-left: 16px !important;
`,(0,s.Ay)(l.A)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    background: ${h.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${h.dB.spacing_300.gap};
    padding-left: 16px !important;
`,s.Ay.div`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    background: ${h.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${h.dB.spacing_300.gap};
    padding-left: 16px;
`,s.Ay.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;
`,s.Ay.p`
    font-size: ${h.$G.sans_200_semi.fontSize};
    font-weight: ${h.$G.sans_200_semi.fontWeight};
    line-height: ${h.$G.sans_200_semi.lineHeight};

    margin: 0;
`,s.Ay.div`
    @media (max-width: 1200px) {
        padding: 0 24px;
    }
`),z=s.Ay.div`
    height: 80px;
    position: fixed;
    right: 32px;
    bottom: 32px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 767px) {
        left: unset;
        z-index: 100;
        margin-top: auto;
        right: 24px;
        bottom: 24px;
    }
`;var G=n(8108),S=n(1869),C=n(9082),J=n(831),W=n(1852),L=n(579);function B(e){let{rating:i,setRating:n}=e;const t=(0,o.Zp)(),s=e=>{const t=[];for(let o=1;o<=5;o++)t.push((0,L.jsx)(w,{type:"button",onClick:()=>{n((i=>({...i,[e]:o})))},children:(0,L.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 31 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,L.jsx)("path",{d:"M14.2997 0.885909C14.7438 -0.181772 16.2562 -0.181774 16.7003 0.885907L19.8239 8.39584C20.0111 8.84595 20.4344 9.15349 20.9203 9.19244L29.0279 9.84243C30.1806 9.93484 30.6479 11.3733 29.7697 12.1256L23.5926 17.4169C23.2224 17.7341 23.0607 18.2317 23.1738 18.7059L25.061 26.6175C25.3293 27.7423 24.1057 28.6313 23.1189 28.0286L16.1776 23.7889C15.7616 23.5348 15.2384 23.5348 14.8224 23.7889L7.88113 28.0286C6.8943 28.6313 5.67067 27.7423 5.93898 26.6175L7.82619 18.7059C7.9393 18.2317 7.77762 17.7341 7.40739 17.4169L1.23025 12.1256C0.352056 11.3733 0.819438 9.93484 1.97209 9.84243L10.0797 9.19245C10.5656 9.15349 10.9889 8.84595 11.1761 8.39584L14.2997 0.885909Z",fill:i[e]>=o?h.J2.Red.color:h.J2.Grey2.color})})},o));return t},a=()=>{t(-1)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(x,{pageIndex:0,children:[(0,L.jsx)(u,{onClick:a,children:"Exit"}),(0,L.jsx)(m,{children:(0,L.jsx)(W.A,{onClick:a,type:"Close"})}),(0,L.jsx)(p,{children:"How was your stay?"})]}),(0,L.jsx)(b,{children:"Select what best describes your experience"}),(0,L.jsxs)($,{children:[(0,L.jsx)(y,{children:"Communication"}),(0,L.jsx)(f,{children:s("communication")})]}),(0,L.jsxs)($,{children:[(0,L.jsx)(y,{children:"Amenities"}),(0,L.jsx)(f,{children:s("amenities")})]}),(0,L.jsxs)($,{children:[(0,L.jsx)(y,{children:"Cleaning"}),(0,L.jsx)(f,{children:s("cleaning")})]}),(0,L.jsxs)($,{children:[(0,L.jsx)(y,{children:"Location"}),(0,L.jsx)(f,{children:s("location")})]}),(0,L.jsxs)($,{children:[(0,L.jsx)(y,{children:"Service"}),(0,L.jsx)(f,{children:s("service")})]}),(0,L.jsxs)($,{children:[(0,L.jsx)(y,{children:"Value"}),(0,L.jsx)(f,{children:s("value")})]})]})}function H(e){let{setPageIndex:i,text:n,setText:t}=e;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(x,{pageIndex:1,children:[(0,L.jsx)(u,{onClick:()=>{i(0)},children:"Exit"}),(0,L.jsx)(m,{children:(0,L.jsx)(W.A,{onClick:()=>{i(0)},type:"Arrow"})}),(0,L.jsx)(p,{children:"Write a review"})]}),(0,L.jsx)(b,{children:"Review your experience"}),(0,L.jsx)(_,{value:n,onChange:e=>(async e=>{let i=e.split("");e=i.slice(0,2500).join("").toString(),t(e)})(e.target.value),placeholder:"You can write anything you'd like to share about your experience staying here."}),(0,L.jsxs)(j,{style:{display:"flex"},children:[(0,L.jsx)(v,{children:"Your review is visible to anyone"}),(0,L.jsx)(A,{children:2500-n.length})]})]})}var I=n(7426),R=n(9820),E=n(8306);function Y(){const[e,i]=(0,J.useRecoilState)(S.e),[n,s]=(0,J.useRecoilState)(C.H),{listingId:a,bookingId:d}=(0,o.g)(),[r,l]=(0,t.useState)({communication:0,amenities:0,cleaning:0,location:0,service:0,value:0}),[h,x]=(0,t.useState)(""),[p,u]=(0,t.useState)(!1),[m,b]=(0,t.useState)(0),y=(0,o.Zp)(),$=(0,t.useCallback)((async()=>{u(!0);try{const e=await(0,I.p)("get","dev-anystay-booking","booking/review",{headers:{Authorization:n,bookingid:d}});e.success&&e.review&&(u(!1),y(`/your-booking/${d}`)),u(!1)}catch(e){console.log(e)}}),[n,d,y]);(0,t.useEffect)((()=>{$()}),[$]);return e?(0,L.jsxs)(t.Fragment,{children:[(0,L.jsx)(E.A,{title:"Review | Anystay"}),(0,L.jsx)(c,{children:(0,L.jsxs)(g,{children:[(0,L.jsxs)(k,{children:[0===m&&(0,L.jsx)(B,{rating:r,setRating:l}),1===m&&(0,L.jsx)(H,{setPageIndex:b,text:h,setText:x})]}),(0,L.jsx)(z,{children:(0,L.jsx)(R.A,{isLoading:p,disabled:p,background:"red",onClick:()=>{0===m?b(1):1===m?(async()=>{u(!0);try{e&&(await(0,I.p)("post","dev-anystay-booking","booking/review",{headers:{Authorization:n,bookingId:d},body:{userModelId:e.id,listingModelId:a,communication:r.communication,amenities:r.amenities,cleaning:r.cleaning,location:r.location,service:r.service,value:r.value,body:h}}),setTimeout((()=>{u(!1),y(`/your-stays/${e.id}`)}),1e3))}catch(i){console.log(i)}})():y(`/your-stays/${e.id}`)}})})]})}),(0,L.jsx)(G.A,{})]}):null}}}]);
//# sourceMappingURL=7275.f87f2a57.chunk.js.map
//# debugId=f05d415d-bf7c-53de-8e87-a7d3e306810e
