"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8e4cc64e-90f7-5456-b85d-d5fd242f78f1")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[7961],{9820:(e,i,t)=>{t.d(i,{A:()=>l});var n=t(2119),o=t(4936);const a=n.Ay.button`
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
`,r=n.Ay.img`
    width: ${e=>e.iconSize?e.iconSize:"40px"};
    display: flex;
    align-items: center;
    justify-content: center;
`;var s=t(308),d=t(579);const l=e=>{let{isLoading:i,children:t,disabled:n,background:o,src:l,iconSize:h,size:x,...g}=e;return(0,d.jsxs)(a,{...g,background:o,disabled:n,isLoading:i||!1,size:x,children:[i&&(0,d.jsx)(s.A,{height:"14px",color:"white",width:"32px",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),t,!i&&(0,d.jsx)(r,{src:l||"https://d292awxalydr86.cloudfront.net/Universal+icons/Next.svg",alt:"Arrow Btn",iconSize:h})]})}},7961:(e,i,t)=>{t.r(i),t.d(i,{default:()=>L});var n=t(5043),o=t(2119),a=t(4936);const r=o.Ay.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        min-height: 100vh;
        flex-direction: row;
    }
    @media (max-width: 1200px) {
        padding: 0 24px;
    }
`,s=o.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
`,d=(o.Ay.div`
    height: 80px;
    position: absolute;
    right: 0;
    bottom: 126px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 767px) {
        position: fixed;
        left: unset;
        z-index: 100;
        margin-top: auto;
        bottom: 0;
        margin-bottom: 33px;
    }
`,o.Ay.div`
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
`),l=o.Ay.div`
    padding-top: 120px;
    width: 100%;
    display: flex;
    margin-bottom: ${e=>0===e.pageIndex?"48px":"24px"};

    @media (min-width: 768px) {
        padding: 0;
        padding-top: 144px;
        margin-bottom: 12px !important;
    }
`,h=o.Ay.div`
    @media (min-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`,x=o.Ay.div`
    width: 100%;
    margin: 0 auto;
`,g=o.Ay.p`
    font-size: ${a.$G.sans_900_bold.fontSize};
    line-height: ${a.$G.sans_900_bold.lineHeight};

    margin: 0;
    font-weight: ${a.$G.sans_900_bold.fontWeight};

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1000_bold.fontSize};
        line-height: ${a.$G.sans_1000_bold.lineHeight};
        margin-left: 16px;
    }
`,p=o.Ay.button`
    background: none;
    border: none;
    position: absolute;
    right: 24px;
    top: 20px;
    z-index: 100;
    font-size: ${a.$G.sans_400.fontSize};
    line-height: ${a.$G.sans_400.lineHeight};
    font-weight: ${a.$G.sans_400.fontWeight};

    @media (min-width: 768px) {
        display: none;
    }
`,c=o.Ay.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    @media (max-width: 767px) {
        display: none;
    }
`,u=(o.Ay.img`
    height: 18px;
    object-fit: cover;
`,o.Ay.p`
    font-size: ${a.$G.sans_500.fontSize};
    line-height: ${a.$G.sans_500.lineHeight};
    color: ${a.J2.Grey.color};
    margin: 0;
    font-weight: ${a.$G.sans_500.fontWeight};
    margin-bottom: 64px;
    @media (max-width: 767px) {
        display: none;
    }
`),b=o.Ay.div`
    display: flex;
    gap: ${a.dB.spacing_300.gap};
    margin: 0 auto;
    margin-bottom: 32px;
    cursor: pointer;
`,m=o.Ay.button`
    height: 35px;
    width: 35px;
    border: none;
    border-radius: 50%;
    background: none;
    cursor: pointer;
    padding: 0;
`,f=o.Ay.textarea`
    width: 100%;
    height: 314px;
    margin-bottom: 12px;
    padding: ${a.dB.spacing_300.padding};
    border: 1px solid ${a.J2.Grey1.color};
    border-radius: ${a.Qk.radius_12.borderRadius};
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};

    resize: none;

    ::placeholder {
        color: ${a.J2.Grey1.color};
    }
    @media (min-width: 768px) {
        height: 450px;
        width: 100%;
        margin-bottom: 16px;
    }
`,w=o.Ay.p`
    font-size: ${a.$G.sans_200.fontSize};
    font-weight: ${a.$G.sans_200.fontWeight};
    line-height: ${a.$G.sans_200.lineHeight};
    color: ${a.J2.Grey.color};
    margin: 0;
    margin-left: 24px;
    @media (min-width: 768px) {
        margin: 0;
    }
`,y=(o.Ay.div`
    position: fixed;
    z-index: 11;
    bottom: 0;
    left: 0;
    background: ${a.J2.White.color};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    padding: 0 24px;
    width: 100%;
    padding-bottom: 32px;

    @media (min-width: 768px) {
        display: none;
    }
`,o.Ay.div`
    height: 1px;
    width: 100%;
    background: ${a.J2.Grey2.color};
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
`,o.Ay.button`
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};

    text-decoration: underline;
    padding: 0;
    border: none;
    background: none;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    margin-top: 38px;
`,o.Ay.div`
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
`);var $=t(8108),v=t(9820),_=t(3216),j=t(1852),A=t(579);function k(e){let{rating:i,setRating:t}=e;const n=(0,_.Zp)(),o=()=>{n(-1)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(l,{pageIndex:0,children:[(0,A.jsx)(p,{onClick:o,children:"Exit"}),(0,A.jsx)(c,{children:(0,A.jsx)(j.A,{onClick:o,type:"Arrow"})}),(0,A.jsx)(g,{children:"How was your guest?"})]}),(0,A.jsx)(u,{children:"Select what best describes your experience"}),(0,A.jsx)(h,{children:(0,A.jsx)(b,{children:(e=>{const n=[];for(let o=1;o<=5;o++)n.push((0,A.jsx)(m,{type:"button",onClick:()=>{t((i=>({...i,[e]:o})))},children:(0,A.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 31 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,A.jsx)("path",{d:"M14.2997 0.885909C14.7438 -0.181772 16.2562 -0.181774 16.7003 0.885907L19.8239 8.39584C20.0111 8.84595 20.4344 9.15349 20.9203 9.19244L29.0279 9.84243C30.1806 9.93484 30.6479 11.3733 29.7697 12.1256L23.5926 17.4169C23.2224 17.7341 23.0607 18.2317 23.1738 18.7059L25.061 26.6175C25.3293 27.7423 24.1057 28.6313 23.1189 28.0286L16.1776 23.7889C15.7616 23.5348 15.2384 23.5348 14.8224 23.7889L7.88113 28.0286C6.8943 28.6313 5.67067 27.7423 5.93898 26.6175L7.82619 18.7059C7.9393 18.2317 7.77762 17.7341 7.40739 17.4169L1.23025 12.1256C0.352056 11.3733 0.819438 9.93484 1.97209 9.84243L10.0797 9.19245C10.5656 9.15349 10.9889 8.84595 11.1761 8.39584L14.2997 0.885909Z",fill:i[e]>=o?a.J2.Blue.color:a.J2.Grey2.color})})},o));return n})("overall")})})]})}function z(e){let{setReview:i,setPageIndex:t,review:n}=e;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(l,{pageIndex:1,children:[(0,A.jsx)(p,{onClick:()=>{t(0)},children:"Exit"}),(0,A.jsx)(c,{children:(0,A.jsx)(j.A,{onClick:()=>{t(0)},type:"Arrow"})}),(0,A.jsx)(g,{children:"Write a review"})]}),(0,A.jsx)(f,{value:n,onChange:e=>i(e.target.value),placeholder:"You can write anything you'd like to share about your experience staying here."}),(0,A.jsx)(w,{children:"Your review is visible to anyone"})]})}var G=t(9082),C=t(831),S=t(7426),J=t(8306);function L(){const{id:e}=(0,_.g)(),i=(0,_.Zp)(),[t,o]=(0,C.useRecoilState)(G.H),[a,l]=(0,n.useState)(!1),[h,g]=(0,n.useState)(0),[p,c]=(0,n.useState)({overall:null}),[u,b]=(0,n.useState)("");return(0,A.jsxs)(n.Fragment,{children:[(0,A.jsx)(J.A,{title:"Review | Anystay"}),(0,A.jsx)(r,{children:(0,A.jsxs)(y,{children:[(0,A.jsx)(s,{children:(0,A.jsxs)(x,{children:[0===h&&(0,A.jsx)(k,{setRating:c,rating:p}),1===h&&(0,A.jsx)(z,{setReview:b,review:u,setPageIndex:g})]})}),(0,A.jsx)(d,{children:(0,A.jsx)(v.A,{onClick:async()=>{0===h?g(1):(l(!0),await(async()=>{await(0,S.p)("put","dev-anystay-booking","user/review",{headers:{Authorization:t,bookingId:e},body:{body:u,bookingRequestId:e,overall:p.overall}}).then((e=>{i("/dashboard")})).catch((e=>console.log(e)))})(),l(!1))},background:"blue",isLoading:a,disabled:a})})]})}),(0,A.jsx)($.A,{})]})}}}]);
//# sourceMappingURL=7961.cc2fb51e.chunk.js.map
//# debugId=8e4cc64e-90f7-5456-b85d-d5fd242f78f1
