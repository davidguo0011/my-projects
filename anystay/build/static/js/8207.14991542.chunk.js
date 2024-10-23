"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="adaf65b0-a091-5f66-bfbe-cd6780272890")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[8207],{9138:(i,e,t)=>{t.d(e,{A:()=>r});var n=t(2119),s=t(4936);const o=n.Ay.span`
    width: 28px;
    height: 28px;
    border: 5px solid ${s.J2.Grey3.color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${n.i7`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`} 1s linear infinite;
`;var a=t(579);function r(i){return(0,a.jsx)(o,{...i})}},8207:(i,e,t)=>{t.r(e),t.d(e,{default:()=>f});var n=t(5043),s=t(1142),o=t(7013),a=t(7607),r=t(9082),d=t(831),l=t(9135),g=t(9138),h=t(6879),c=t(579);const p=i=>{let{listing:e,deleteListing:t,internalName:o}=i;const[r,l]=(0,n.useState)(!1),[p,x]=(0,d.useRecoilState)(a.o);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s.Kl,{children:[(0,c.jsxs)(s.Ee,{to:e.draft?`/create-listing/${null===p||void 0===p?void 0:p.id}/${e.id}`:`/edit-listing/${e.id}`,style:{height:"100%"},children:[(0,c.jsx)(s.l1,{id:"yourListingResultImage",children:e.listingImages.length>0&&(0,c.jsx)(s.YH,{src:(0,h.A)(e.listingImages[0].key,800),alt:"img"})}),(0,c.jsx)(s.Dc,{children:e.propertyTitle?e.propertyTitle:"Finish your draft"}),o&&(0,c.jsx)(s.Le,{children:o}),(0,c.jsx)(s.Sb,{children:(0,c.jsx)(s.MQ,{status:e.status,draft:e.draft,children:e.draft?"Draft":"active"===e.status?"Active":"Inactive"})})]}),e.draft&&(0,c.jsx)(s.zP,{onClick:async()=>{l(!0),await t(e.id),l(!1)},children:r?(0,c.jsx)(g.A,{}):(0,c.jsx)(s.sD,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg",alt:"Delete button icon"})})]})})};var x=t(7426),m=t(8306);const f=()=>{const[i,e]=(0,n.useState)({}),[t,g]=(0,n.useState)(1),[h,f]=(0,n.useState)(1),[u,$]=(0,n.useState)(0),[_,w]=(0,n.useState)(!0),[y,b]=(0,d.useRecoilState)(a.o),[G,v]=(0,d.useRecoilState)(r.H),j=(0,n.useRef)(null),z=(0,n.useCallback)((async(i,t,n)=>{console.log("fetched"),await(0,x.p)("post","dev-anystay-listing","listings",{headers:{Authorization:G},body:{userHostModelId:null===y||void 0===y?void 0:y.id,exclusiveStartKey:i}}).then((async i=>{1===t&&($(i.body.totalItems),f(i.body.totalPages),j.current=i.body.exclusiveStartKeys),e(n?{[t]:i.body.listingsData}:e=>({...e,[t]:i.body.listingsData})),w(!1)})).catch((i=>console.log(i)))}),[G,null===y||void 0===y?void 0:y.id]);(0,n.useEffect)((()=>{z(null,1,!1)}),[z]);const A=async e=>{await(0,x.p)("del","dev-anystay-listing",`draft/${e}`,{headers:{Authorization:G,listingID:e},body:{listingmodelID:e}}).then((async n=>{if(n.success){let n=i[t].filter((i=>i.id!==e));const s=JSON.parse(JSON.stringify(y));y&&(s.ListingModels.items=y.ListingModels.items.filter((i=>i.id!==e))),b(s),j.current&&(0===n.length&&t>1?(await z(j.current[t-1],t-1,!0),g((i=>i-1))):await z(j.current[t],t,!0))}})).catch((i=>console.log(i)))};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m.A,{title:"Listings | Anystay"}),(0,c.jsx)(o.A,{hide:null}),(0,c.jsxs)(s.Op,{children:[(0,c.jsxs)(s.NF,{children:[0===u&&"Listings",u>0&&`${u} ${u>1?"listings":"listing"}`,(0,c.jsx)(s.js,{to:`/create-listing/${null===y||void 0===y?void 0:y.id}`,children:(0,c.jsx)(s.Ch,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg",alt:"Add a listing"})})]}),_&&(0,c.jsxs)(s.i0,{children:[(0,c.jsx)(s.BU,{}),(0,c.jsx)(s.bD,{})]}),!_&&u>0&&i[t]&&(0,c.jsx)(s.Zd,{children:(0,c.jsxs)(c.Fragment,{children:[i[t].map((function(i,e){return(0,c.jsx)(p,{deleteListing:A,listing:i,internalName:i.internalName},e)})),h>1&&(0,c.jsxs)(s.Cg,{children:[(0,c.jsx)(l.A,{page:t,onChange:async(e,t)=>{!i[t]&&j.current&&await z(j.current[t],t,!1),g(t),window.scrollTo(0,0)},count:h,size:"small"}),(0,c.jsxs)(s.LF,{children:["Showing ",t," of ",h," pages"]})]})]})}),!_&&0===u&&(0,c.jsxs)(s.i0,{children:[(0,c.jsx)(s.BU,{children:"No listings yet"}),(0,c.jsxs)(s.bD,{children:["Add your first listing to start ",(0,c.jsx)("br",{}),"getting bookings"]})]})]})]})}},1142:(i,e,t)=>{t.d(e,{BU:()=>b,Cg:()=>v,Ch:()=>u,Dc:()=>c,Ee:()=>$,Kl:()=>l,LF:()=>j,Le:()=>p,MQ:()=>m,NF:()=>r,Op:()=>a,Sb:()=>x,YH:()=>h,Zd:()=>d,bD:()=>G,i0:()=>y,js:()=>f,l1:()=>g,sD:()=>w,zP:()=>_});var n=t(2119),s=t(5475),o=t(4936);const a=n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    padding-top: 36px;
    margin-bottom: 80px;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding-top: 0;
        margin-top: 80px;
    }
    @media (min-width: 1280px) {
        padding: ${o.dB.spacing_800.padding};
        padding-top: 0;
    }
`,r=n.Ay.h1`
    font-size: ${o.$G.sans_900_semi.fontSize};
    line-height: ${o.$G.sans_900_semi.lineHeight};
    font-weight: ${o.$G.sans_900_semi.fontWeight};

    margin: 0;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        font-size: ${o.$G.sans_1000_semi.fontSize};
        line-height: ${o.$G.sans_1000_semi.lineHeight};
        font-weight: ${o.$G.sans_1000_semi.fontWeight};
        margin-top: 48px;
        margin-bottom: 32px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        margin: 0 auto;
        margin-top: 48px;
        margin-bottom: 32px;
    }
`,d=n.Ay.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: ${o.dB.spacing_300.gap};

    @media (min-width: 768px) {
        gap: ${o.dB.spacing_500.gap} 24px;
    }
`,l=n.Ay.div`
    width: calc(50% - 8px);
    overflow: hidden;
    position: relative;
    border: none;
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (min-width: 768px) {
        width: calc(33% - 16px);
    }

    @media (min-width: 1024px) {
        width: calc(25% - 18px);
    }

    @media (min-width: 1280px) {
        width: calc(20% - 19.2px);
    }
`,g=n.Ay.div`
    width: 100%;
    border-radius: ${o.Qk.radius_12.borderRadius};
    overflow: hidden;
    aspect-ratio: 1/1;
    background-color: ${o.J2.Grey3.color};

    @media (min-width: 768px) {
        aspect-ratio: 20/19;
    }
`,h=n.Ay.img`
    object-fit: cover;
    border-radius: ${o.Qk.radius_12.borderRadius};
    width: 100%;
    height: 100%;
`,c=n.Ay.p`
    margin: ${o.dB.spacing_250.margin} 0 0 0;
    font-size: ${o.$G.sans_350_semi.fontSize};
    line-height: ${o.$G.sans_350_semi.lineHeight};
    font-weight: ${o.$G.sans_350_semi.fontWeight};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
        font-size: ${o.$G.sans_400_semi.fontSize};
        line-height: ${o.$G.sans_400_semi.lineHeight};
    }
`,p=n.Ay.p`
    margin-top: 2px;
    font-size: ${o.$G.sans_300.fontSize};
    line-height: ${o.$G.sans_300.lineHeight};
    font-weight: ${o.$G.sans_300.fontWeight};
    color: ${o.J2.Grey.color};
`,x=n.Ay.div`
    width: calc(100% - 32px);
    align-items: center;

    @media (min-width: 768px) {
        grid-column: 1/2;
        grid-row: 1/2;
        align-self: flex-start;
        justify-self: flex-start;
        width: fit-content;
    }
`,m=n.Ay.p`
    font-size: ${o.Ox.sans_button_100.fontSize};
    line-height: ${o.Ox.sans_button_100.lineHeight};
    font-weight: ${o.Ox.sans_button_100.fontWeight};
    margin-top: 2px;
    text-transform: capitalize;
    color: ${i=>i.draft?o.J2.Yellow.color:"active"===i.status?o.J2.Green.color:o.J2.Red1.color};
`,f=(n.Ay.div`
    position: fixed;
    bottom: 89px;
    left: 0;
    background: ${o.J2.White.color};
    display: flex;
    align-items: center;
    z-index: 4;
    justify-content: center;
    width: 100%;
    padding: ${o.dB.spacing_400.padding};
    border-top: 1px solid ${o.J2.Grey2.color};
    border-bottom: 1px solid ${o.J2.Grey2.color};
`,(0,n.Ay)(s.N_)`
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: ${o.J2.Grey5.color};
    }
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
`),u=n.Ay.img`
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }
`,$=(0,n.Ay)(s.N_)`
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_=(n.Ay.div`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    margin: ${o.dB.spacing_300.margin};
    border-radius: ${o.Qk.radius_8.borderRadius};
    background: ${o.J2.White.color};
    box-shadow: ${o.E_.shadow_100.boxShadow};
    height: 25px;
    width: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${i=>"active"===i.status?o.J2.Green.color:o.J2.Red1.color};
    font-size: ${o.$G.sans_200_semi.fontSize};
    font-weight: ${o.$G.sans_200_semi.fontWeight};
    line-height: ${o.$G.sans_200_semi.lineHeight};
    z-index: 2;
    text-transform: capitalize;

    @media (min-width: 768px) {
        margin: ${o.dB.spacing_350.margin};
        margin-left: 32px;
        font-size: ${o.$G.sans_300_semi.fontSize};
        line-height: ${o.$G.sans_300_semi.lineHeight};
        height: 33px;
        box-shadow: none;
        height: unset;
        width: unset;
        padding: 0;
        align-self: flex-end;
    }
`,n.Ay.button`
    border-radius: ${o.Qk.radius_8.borderRadius};
    background: ${o.J2.White.color};
    box-shadow: ${o.E_.shadow_100.boxShadow};
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;
    z-index: 3;
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
`),w=n.Ay.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
    @media (min-width: 768px) {
        height: 20px;
        width: 20px;
    }
`,y=n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${o.dB.spacing_250.gap};
    margin-top: 16px;

    @media (min-width: 768px) {
        margin: 0 auto;
        margin-top: 32px;
    }
`,b=n.Ay.p`
    font-size: ${o.$G.sans_600_semi.fontSize};
    line-height: ${o.$G.sans_600_semi.lineHeight};
    font-weight: ${o.$G.sans_600_semi.fontWeight};
    color: ${o.J2.Grey1.color};
    margin: 0;
`,G=n.Ay.p`
    font-size: ${o.$G.sans_400.fontSize};
    font-weight: ${o.$G.sans_400.fontWeight};
    line-height: ${o.$G.sans_400.lineHeight};
    color: ${o.J2.Grey1.color};
    margin: 0;
`,v=(n.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 48px;
`,n.Ay.div`
    display: flex;
    padding-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    gap: ${o.dB.spacing_350.gap};
`,n.Ay.button`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background: ${o.J2.White.color};
    box-shadow: ${o.E_.shadow_100.boxShadow};
    cursor: pointer;
    @media (min-width: 1280px) {
        margin: 0 12px;
    }
`,n.Ay.img`
    width: 12px;
    object-fit: cover;
`,n.Ay.button`
    font-size: ${o.Ox.sans_button_100.fontSize};
    line-height: ${o.Ox.sans_button_100.lineHeight};
    font-weight: ${o.Ox.sans_button_100.fontWeight};
    height: 32px;
    width: 32px;
    border: none;
    border-radius: 50%;
    color: ${i=>i.selected?o.J2.White.color:o.J2.Black.color};
    background: ${i=>i.selected?o.J2.Blue.color:"none"};
    cursor: pointer;

    @media (min-width: 1280px) {
        font-size: ${o.Ox.sans_button_200.fontSize};
        line-height: ${o.Ox.sans_button_200.lineHeight};
        height: 44px;
        width: 44px;
    }
`,n.Ay.p`
    margin: 0 auto;
    font-size: ${o.$G.sans_200.fontSize};
    font-weight: ${o.$G.sans_200.fontWeight};

    line-height: ${o.$G.sans_200.lineHeight};
    @media (min-width: 1280px) {
        font-size: ${o.$G.sans_300.fontSize};
        line-height: ${o.$G.sans_300.lineHeight};
    }
`,(0,n.Ay)(s.N_)`
    height: 80px;
    width: 100%;
    background: ${o.J2.White.color};
    border-radius: ${o.Qk.radius_12.borderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${o.E_.shadow_100.boxShadow};
    text-decoration: none;
    margin: 0 auto;
    margin-bottom: 24px;
    padding: 18px 24px;
    max-width: 1024px;
    cursor: pointer;
`,n.Ay.p`
    font-size: ${o.$G.sans_300_semi.fontSize};
    line-height: ${o.$G.sans_300_semi.lineHeight};
    font-weight: ${o.$G.sans_300_semi.fontWeight};

    margin: 0;
`,n.Ay.p`
    font-size: ${o.$G.sans_200.fontSize};
    line-height: ${o.$G.sans_200.lineHeight};
    font-weight: ${o.$G.sans_200.fontWeight};

    margin: 0;
`,n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 32px;

    .MuiPaginationItem-page {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        font-weight: 600;
    }

    .MuiPaginationItem-page:hover {
        background-color: ${o.J2.Grey5.color};
    }

    .MuiPaginationItem-page.Mui-selected {
        background-color: ${o.J2.Blue.color} !important;
        color: ${o.J2.White.color};
        font-size: ${o.$G.sans_400_semi.fontSize};
        line-height: ${o.$G.sans_400_semi.lineHeight};
        font-weight: ${o.$G.sans_400_semi.fontWeight};
    }
`),j=n.Ay.p`
    font-size: ${o.$G.sans_400_semi.fontSize};
    line-height: ${o.$G.sans_400_semi.lineHeight};
    color: ${o.J2.Grey.color};
    font-weight: ${o.$G.sans_400_semi.fontWeight};
    margin: 0;
    margin-top: 24px;
`},6879:(i,e,t)=>{t.d(e,{A:()=>n});const n=(i,e)=>{const t=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${i}`,edits:{resize:{width:e,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(t)}`}}}]);
//# sourceMappingURL=8207.14991542.chunk.js.map
//# debugId=adaf65b0-a091-5f66-bfbe-cd6780272890
