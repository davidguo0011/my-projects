"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="67198807-7e28-5e5e-b300-3af45a95be26")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[1462],{9138:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(2119),o=i(4936);const a=n.Ay.span`
    width: 28px;
    height: 28px;
    border: 5px solid ${o.J2.Grey3.color};
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
`;var s=i(579);function r(e){return(0,s.jsx)(a,{...e})}},1462:(e,t,i)=>{i.r(t),i.d(t,{default:()=>De});var n=i(5043),o=i(336),a=i(8108),s=i(5070),r=i(2119),l=i(5475),d=i(4936);const c=r.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    margin: 0 24px;
    padding-bottom: 80px;

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
        max-width: 704px;
        margin: 0 auto;
        margin-top: 80px;
    }
    @media (min-width: 1280px) {
        max-width: 1024px;
    }
`,p=r.Ay.div`
    & .verification-container {
        ${e=>e.mfaInvalid?`border: 1px solid ${d.J2.Red1.color};`:null}
    }
`,h=(0,r.Ay)(l.N_)`
    font-size: ${d.Ox.sans_button_200.fontSize};
    line-height: ${d.Ox.sans_button_200.lineHeight};
    padding: 0;
    font-weight: ${d.Ox.sans_button_200.fontWeight};
    justify-self: flex-end;
    text-decoration: underline;
    align-self: center;
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
        display: none;
    }
`,g=r.Ay.p`
    text-align: left;
    width: 100%;
    margin: 0 auto;
    margin-top: 12px;
    margin-bottom: 96px;
    font-size: ${d.$G.sans_300.fontSize};
    color: ${e=>e.mfaInvalid||e.mfaExpired?d.J2.Red1.color:d.J2.Black.color};
    font-weight: ${d.$G.sans_300.fontWeight};
    line-height: ${d.$G.sans_300.lineHeight};

    span {
        color: ${d.J2.Black.color} !important;
    }
`,u=(r.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${d.dB.spacing_500.padding} 0;

    amplify-s3-image {
        min-height: 100% !important;
        img {
            min-height: 100% !important;
        }
    }
    @media (min-width: 1280px) {
        grid-column: 2/3;
    }
`,r.Ay.div`
    height: 96px;
    width: 96px;
    margin: ${d.dB.spacing_400.margin} 0;
    padding: 0;
    border-radius: 50%;

    cursor: pointer;
    position: relative;

    @media (min-width: 768px) {
        justify-self: center;
        height: 128px;
        width: 128px;
        margin-bottom: 0;
        margin-top: 40px;
    }
`),x=r.Ay.div`
    height: 100px;
    width: 100px;
    margin: ${d.dB.spacing_400.margin} 0;
    padding: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        height: 128px;
        width: 128px;
        margin-bottom: 0;
        margin-top: 40px;
    }
`,m=r.Ay.div`
    height: 100%;
    width: 100%;
`,f=r.Ay.div`
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    color: ${d.J2.White.color};
    font-size: ${d.$G.sans_200_semi.fontSize};
    font-weight: ${d.$G.sans_200_semi.fontWeight};
    line-height: ${d.$G.sans_200_semi.lineHeight};
    position: absolute;
    top: 0;
`,y=(r.Ay.p`
    font-size: ${d.$G.sans_600_semi.fontSize};
    line-height: ${d.$G.sans_600_semi.lineHeight};
    font-weight: ${d.$G.sans_600_semi.fontWeight};
    margin: ${d.dB.spacing_300.margin} 0;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        display: none;
    }
`,r.Ay.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${d.dB.spacing_250.padding};
    &:hover {
        background-color: ${d.J2.Grey5.color};
    }
`),$=r.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
    border-bottom: 1px solid ${d.J2.Grey2.color};
    cursor: pointer;
`,v=r.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`,b=r.Ay.label`
    font-size: ${d.$G.sans_400_semi.fontSize};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    cursor: pointer;
`,w=r.Ay.button`
    font-size: ${d.Ox.sans_button_100.fontSize};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    font-weight: ${d.Ox.sans_button_100.fontWeight};
    background: none;
    border: none;
    text-decoration: underline;
    padding: 0;
    cursor: pointer;
`,_=r.Ay.p`
    width: 100%;
    margin: ${d.dB.spacing_300.margin} 0 0px;
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    color: ${d.J2.Grey.color};

    @media (min-width: 768px) {
        margin: 21px 0 0px;
    }
`,A=(r.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,r.Ay.p`
    font-size: ${d.$G.sans_600_semi.fontSize};
    line-height: ${d.$G.sans_600_semi.lineHeight};
    font-weight: ${d.$G.sans_600_semi.fontWeight};
    margin: ${d.dB.spacing_300.margin} 0;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        display: none;
    }
`,r.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,r.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`),j=r.Ay.label`
    font-size: ${d.$G.sans_400_semi.fontSize};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    cursor: pointer;
`,S=r.Ay.button`
    font-size: ${d.Ox.sans_button_100.fontSize};
    font-weight: ${d.Ox.sans_button_100.fontWeight};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
`,G=r.Ay.p`
    width: 100%;
    margin: ${d.dB.spacing_300.margin} 0 0;
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    color: ${d.J2.Grey.color};
`,k=r.Ay.div`
    /* position: fixed; */
    height: fit-content;
    /* bottom: 0;
    left: 0; */
    overflow: hidden;
    overflow-y: auto;
    box-shadow: ${d.E_.shadow_300.boxShadow};
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${d.J2.White.color};
    /* z-index: 102; */
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${d.dB.spacing_400.padding} ${d.dB.spacing_400.padding} ${d.dB.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        /* border-radius: 14px; */
        margin: 0 auto;
        /* top: 50%;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        overflow-y: auto;
        padding: ${d.dB.spacing_400.padding};
    }
`,z=r.Ay.div`
    overflow: hidden;
    box-shadow: ${d.E_.shadow_300.boxShadow};
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${d.J2.White.color};
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: ${d.dB.spacing_400.padding};

    @media (min-width: 768px) {
        bottom: unset;
        width: 560px;
        margin: 0 auto;
    }
`,I=r.Ay.div`
    width: 100%;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
`,C=r.Ay.p`
    font-size: ${d.$G.sans_500_semi.fontSize};
    line-height: ${d.$G.sans_500_semi.lineHeight};
    font-weight: ${d.$G.sans_500_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
`,R=r.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    color: ${e=>e.invalid?d.J2.Red1.color:d.J2.Black.color};
    margin: 0 auto;
    margin-bottom: 32px;
    max-width: 200px;
    height: 36px;
`,B=r.Ay.textarea`
    width: 100%;
    border: 1px solid ${d.J2.Grey2.color};
    border-radius: 9px;
    height: 240px;
    outline: none;
    padding: ${d.dB.spacing_300.padding};
    resize: none;
    font-size: ${d.$G.sans_400.fontSize};
    line-height: ${d.$G.sans_400.lineHeight};

    &::placeholder {
        color: ${d.J2.Grey1.color};
    }
`,J=r.Ay.p`
    font-size: ${d.$G.sans_300_semi.fontSize};
    line-height: ${d.$G.sans_300_semi.lineHeight};
    font-weight: ${d.$G.sans_300_semi.fontWeight};
    margin: 0;
    margin-top: 12px;
    margin-left: auto;
`,N=r.Ay.input`
    width: 100%;
    border-radius: 9px;
    height: 55px;
    outline: none;
    font-size: ${d.$G.sans_400_semi.fontSize};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    padding: ${d.dB.spacing_100.padding};
    padding-left: 16px;
    border: ${e=>e.invalid?`1px solid ${d.J2.Red1.color}`:`1px solid ${d.J2.Grey1.color}`};

    &::placeholder {
        color: ${d.J2.Grey1.color};
    }
`,H=r.Ay.p`
    margin: 0;
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    margin-top: -4px;
    text-align: left;
    margin-bottom: 96px;
`,W=r.Ay.input`
    // width: calc(100% - 48px);
    border: 1px solid ${d.J2.Grey1.color};
    border-radius: 9px;
    height: 50px;
    outline: none;
    font-size: ${d.$G.sans_300_semi.fontSize};
    font-weight: ${d.$G.sans_300_semi.fontWeight};
    line-height: ${d.$G.sans_300_semi.lineHeight};
    padding: ${d.dB.spacing_100.padding};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &::placeholder {
        color: ${d.J2.Grey1.color};
    }
`,E=r.Ay.div`
    width: calc(100% - 16px);
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 50% 50%;
    gap: ${d.dB.spacing_300.gap};

    @media (min-width: 768px) {
    }
`,O=r.Ay.div`
    margin: 0 auto;
    display: flex;
    gap: ${d.dB.spacing_200.gap};
    margin-bottom: 96px;
`,U=(r.Ay.img`
    width: 100%;
    border-radius: 9px;
    height: 200px;
    object-fit: cover;
`,r.Ay.div`
    width: 100%;
    margin: 0 auto 96px;

    input {
        outline: none;
        border: none;
    }
`),L=(r.Ay.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
    background: ${d.J2.White.color};
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 102;
    box-shadow: ${d.E_.shadow_300.boxShadow};
    padding: ${d.dB.spacing_400.padding} ${d.dB.spacing_400.padding} ${d.dB.spacing_300.padding};
    padding-top: 48px;

    @media (min-width: 768px) {
        height: 600px !important;
        border-radius: 14px;
        width: 560px;
        padding: ${d.dB.spacing_400.padding};
        padding-top: 48px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }
`,r.Ay.p`
    font-size: ${d.$G.sans_500_semi.fontSize};
    font-weight: ${d.$G.sans_500_semi.fontWeight};
    line-height: ${d.$G.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        margin-top: 0px;
    }
`,r.Ay.p`
    font-size: ${d.$G.sans_200.fontSize};
    font-weight: ${d.$G.sans_200.fontWeight};
    line-height: ${d.$G.sans_200.lineHeight};
    margin: 0;
    margin-bottom: 32px;
    max-width: 234px;
    text-align: center;
    @media (min-width: 768px) {
        max-width: 282px;
        font-size: ${d.$G.sans_300.fontSize};
        line-height: ${d.$G.sans_300.lineHeight};
    }
`,r.Ay.button`
    width: 100%;
    height: ${e=>e.uploaded?"64px":"100px"};
    border-radius: 9px;
    color: ${d.J2.Grey.color};
    font-size: ${d.Ox.sans_button_100.fontSize};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px dashed ${d.J2.Grey1.color};
    cursor: pointer;
    padding: 0;

    @media (min-width: 768px) {
        height: ${e=>e.uploaded?"64px":"133px"};
        margin: 0 32px;
        width: 100%;
        font-size: ${d.Ox.sans_button_200.fontSize};
        line-height: ${d.Ox.sans_button_200.lineHeight};
        margin-bottom: 24px;
    }
`,r.Ay.input`
    grid-row: 1/2;
    grid-column: 1/2;
    opacity: 0;
    visibility: hidden;
    display: none;
    width: 100%;
    height: 100%;
    content: "";
    position: relative !important;
    cursor: pointer;
`,r.Ay.p`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    color: ${d.J2.Grey.color};
    line-height: ${d.$G.sans_300.lineHeight};
`,r.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`,r.Ay.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${d.dB.spacing_300.gap};
`,r.Ay.div`
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    @media (min-width: 768px) {
        height: 122px;
    }
`,r.Ay.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
    grid-column: 1/2;
    grid-row: 1/2;
`,r.Ay.button`
    grid-column: 1/2;
    grid-row: 1/2;
    height: 25px;
    width: 25px;
    background: ${d.J2.White.color};
    border-radius: ${d.Qk.radius_8.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: auto;
    margin-top: 8px;
    margin-right: 8px;
    cursor: pointer;
`,r.Ay.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
`,r.Ay.button`
    font-size: ${d.Ox.sans_button_300.fontSize};
    font-weight: ${d.Ox.sans_button_300.fontWeight};
    line-height: ${d.Ox.sans_button_300.lineHeight};
    padding: 0;
    background: none;
    border: none;
    margin: 0;
    text-decoration: underline;
    cursor: pointer;
`,r.Ay.button`
    font-size: ${d.Ox.sans_button_200.fontSize};
    line-height: ${d.Ox.sans_button_200.lineHeight};
    font-weight: ${d.Ox.sans_button_200.fontWeight};
    color: ${d.J2.White.color};
    margin: 0;
    background: ${d.J2.Blue.color};
    height: 48px;
    width: 104px;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 9px;
`,r.Ay.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    .mbsc-textfield-wrapper {
        display: none;
    }
`),T=r.Ay.div`
    margin-top: 20px;
    margin-bottom: 8px;
    width: calc(100vw - 14px);
    padding: ${d.dB.spacing_250.padding};
    margin-left: -12px;
    overflow-x: auto;
    display: flex;
    gap: ${d.dB.spacing_300.gap};
    padding-right: 24px;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        overflow-x: scroll;
        padding-right: 10px;
        width: 100%;
    }

    @media (min-width: 1280px) {
        margin: -10px;
    }
`,P=r.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 1280px) {
        flex-direction: row;
        gap: ${d.dB.spacing_600.gap};
    }
`,D=r.Ay.button`
    padding: ${d.dB.spacing_400.padding};
    display: flex;
    flex-direction: column;
    gap: ${d.dB.spacing_200.gap};
    background: none;
    border-radius: ${d.Qk.radius_12.borderRadius};
    border: none;
    box-shadow: ${d.E_.shadow_100.boxShadow};
    text-align: left;
    cursor: pointer;
    min-width: 100%;

    @media (min-width: 768px) {
        margin-bottom: 20px;
        width: 342px;
        min-width: 342px;
    }
`,V=(r.Ay.button`
    padding: ${d.dB.spacing_400.padding};
    display: flex;
    flex-direction: column;
    gap: ${d.dB.spacing_200.gap};
    background: none;
    border-radius: ${d.Qk.radius_12.borderRadius};
    border: 1px solid ${d.J2.Grey2.color};
    text-align: left;
    cursor: pointer;
    min-width: 223px;

    @media (min-width: 768px) {
        padding: ${d.dB.spacing_500.padding};
        width: 100%;
    }
`,r.Ay.input`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 0px;
    height: 0px;
    display: none;
`,r.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    margin: 0;
`),M=r.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    color: ${d.J2.Grey.color};
    font-weight: ${d.$G.sans_300.fontWeight};
    margin: 0;
    @media (min-width: 768px) {
        max-width: 240px;
    }
`,Y=r.Ay.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    display: none;
`,Z=r.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    margin: 0;
`,F=r.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    line-height: ${d.$G.sans_300.lineHeight};
    color: ${d.J2.Grey.color};
    margin: 0;
    margin-top: 8px;
`,Q=r.Ay.div`
    display: flex;
    align-items: flex-end;
    gap: ${d.dB.spacing_300.gap};
    margin-top: 24px;
`,K=r.Ay.img`
    height: 32px;
    width: 32px;
    border-radius: 9px;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 43px;
        width: 43px;
    }
`,q=r.Ay.button`
    font-weight: ${d.$G.sans_400.fontWeight};
    font-size: ${d.Ox.sans_button_200.fontSize};
    line-height: ${d.Ox.sans_button_200.fontSize};
    color: ${e=>e.selected?d.J2.Black.color:d.J2.Grey1.color};
    background: none;
    border: none;
    padding-bottom: 12px;
    border-bottom: 1px solid ${d.J2.Grey2.color};
    width: 100%;
    text-align: left;
    padding-left: 0;
    cursor: pointer;

    ::placeholder {
        font-weight: ${d.$G.sans_300.fontWeight};
    }

    @media (min-width: 768px) {
        max-width: 250px;
    }
`;var X=i(3535),ee=i(3216),te=i(1869),ie=i(831),ne=i(1852),oe=i(579);function ae(){const e=(0,ee.Zp)(),[t,i]=(0,ie.useRecoilState)(te.e);return t?(0,oe.jsxs)(s.ZB,{children:[(0,oe.jsx)(ne.A,{onClick:()=>{e(-1)},type:"Arrow",mobileLeft:24,mobileTop:24}),(0,oe.jsx)(s.CI,{children:"Edit profile"}),window.innerWidth>768&&(0,oe.jsx)(h,{to:t.guestMode?`/guest/profile/${t.id}`:`/host/profile/${t.id}`,children:"Go to profile"})]}):null}var se=i(7426),re=i(8581),le=i(8069);function de(){const[e,t]=(0,n.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"),[i,o]=(0,ie.useRecoilState)(te.e);return(0,n.useEffect)((()=>{if(null!==i&&void 0!==i&&i.profilePicture){const e=(0,le.A)(i.profilePicture,i.identityID,100);t(e)}}),[i]),(0,oe.jsx)(s._8,{src:e,alt:"Featured Listing Image"})}var ce=i(9138),pe=i(9082);function he(){const[e,t]=(0,ie.useRecoilState)(te.e),[i,o]=(0,ie.useRecoilState)(pe.H),[a,s]=(0,n.useState)(!1),r=n.useRef(null);return a?(0,oe.jsx)(x,{children:(0,oe.jsx)(ce.A,{})}):(0,oe.jsxs)(u,{onClick:()=>{r&&r.current.click()},children:[(0,oe.jsx)("input",{style:{position:"relative",display:"none"},className:"new-listing-image-upload-input-hidden",type:"file",name:"file",ref:r,onChange:async n=>{const o=n.target.files[0];try{o?await re.d.put((e=>{for(var t="profile-picture-",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=i.charAt(Math.floor(62*Math.random()));return t})(12),o,{level:"protected",contentType:"image/*"}).then((n=>{(async n=>{s(!0),await(0,se.p)("post","dev-anystay-user","user/profile/image",{headers:{Authorization:i},body:{profilePicture:n}}).then((i=>{const o=JSON.parse(JSON.stringify(e));o.profilePicture=n,t(o),s(!1)})).catch((e=>{s(!1),console.log(e)}))})(n.key)})):console.log("No file selected.")}catch(a){console.log("Error uploading file: ",a)}}}),(0,oe.jsx)(m,{children:(0,oe.jsx)(de,{})}),(0,oe.jsx)(f,{children:"Edit photo"})]})}var ge=i(9709);function ue(){var e,t,i;const[n,o]=(0,ie.useRecoilState)(te.e),[a,r]=(0,ie.useRecoilState)(ge.U);return n?(0,oe.jsxs)(s.Gp,{children:[(0,oe.jsxs)(s.Mk,{children:[(0,oe.jsx)(he,{}),(0,oe.jsxs)(s.I0,{children:[(0,oe.jsx)(s.fW,{children:n.firstName}),(0,oe.jsx)(s.ZH,{children:a&&"verified"===(null===a||void 0===a||null===(e=a.individual)||void 0===e?void 0:e.verification.status)?n.guestMode?"Verified guest":"Verified host":n.guestMode?(new Date(n.createdAt).getTime()-(new Date).getTime())/864e5<=14?"New guest":"Guest":(new Date(n.createdAt).getTime()-(new Date).getTime())/864e5<=14?"New host":"Host"}),(0,oe.jsx)(s.dJ,{to:n.guestMode?`/guest/profile/${n.id}`:`/host/profile/${n.id}`,children:"Go to profile"})]})]}),(0,oe.jsx)(s.yN,{}),(0,oe.jsxs)(s.Bq,{children:[(0,oe.jsxs)(s.oI,{children:[(0,oe.jsx)(s.Vl,{src:a&&"verified"===(null===a||void 0===a||null===(t=a.individual)||void 0===t?void 0:t.verification.status)?"https://d292awxalydr86.cloudfront.net/Universal+icons/Identity.svg":"https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg",alt:"Verified contact icon"}),(0,oe.jsx)(s.J2,{children:a&&"verified"===(null===a||void 0===a||null===(i=a.individual)||void 0===i?void 0:i.verification.status)?"ID verified":"ID unverified"})]}),(0,oe.jsxs)(s.oI,{children:[(0,oe.jsx)(s.Vl,{src:n.phoneConfirmed?"https://d292awxalydr86.cloudfront.net/Universal+icons/approved.svg":"https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg",alt:"Verified contact icon"}),(0,oe.jsx)(s.J2,{children:n.phoneConfirmed?"Phone verified":"Phone unverified"})]}),(0,oe.jsxs)(s.oI,{children:[(0,oe.jsx)(s.Vl,{src:n.emailConfirmed?"https://d292awxalydr86.cloudfront.net/Universal+icons/approved.svg":"https://d292awxalydr86.cloudfront.net/Universal+icons/not-approved.svg",alt:"Verified contact icon"}),(0,oe.jsx)(s.J2,{children:n.emailConfirmed?"Email verified":"Email unverified"})]})]})]}):null}function xe(){const e=(0,ee.Zp)();return(0,oe.jsxs)(D,{type:"button",onClick:()=>e("/security-settings"),children:[(0,oe.jsx)(V,{children:"Link your socials"}),(0,oe.jsx)(M,{children:"Introduce yourself to your community."})]})}const me=e=>{let{handleClick:t}=e;return(0,oe.jsxs)(D,{type:"button",onClick:t,children:[(0,oe.jsx)(V,{children:"Add a bio"}),(0,oe.jsx)(M,{children:"Introduce yourself by writing a short bio"})]})},fe=e=>{let{handleClick:t}=e;return(0,oe.jsxs)(D,{type:"button",onClick:t,children:[(0,oe.jsx)(V,{children:"Verify your email"}),(0,oe.jsx)(M,{children:"Confirm your email address to complete your account info."})]})},ye=e=>{let{handleClick:t}=e;return(0,oe.jsxs)(D,{type:"button",onClick:t,children:[(0,oe.jsx)(V,{children:"Verify your identity"}),(0,oe.jsx)(M,{children:"Give hosts confidence by verifying your identity"})]})};var $e=i(4886),ve=i(9856),be=i(1372);const we=e=>{let{active:t,toggleInput:i,setNewPhone:o}=e;const a=(0,ve.A)(t,(()=>i("phoneInputActive",!1))),[s,r]=(0,n.useState)(!1),[l,c]=(0,ie.useRecoilState)(pe.H),[p,h]=(0,n.useState)(!1),[g,u]=(0,n.useState)(!1),[x,m]=(0,ie.useRecoilState)(te.e),[f,y]=(0,n.useState)(x?x.phone:""),$=async e=>{await(0,se.p)("post","dev-anystay-auth","user/phone",{headers:{Authorization:l},body:{phone:e}}).then((t=>{t.success&&(o(e),i("phoneInputActive",!1),i("verifyUpdatePhoneInputActive",!0))})).catch((e=>{console.log(e),h(!0),"PHONE_NUMBER_EXISTS"===e.response.data.message&&u(!0)})),r(!1)};return(0,oe.jsx)(be.A,{ref:a,backBtnType:"Close",closePopup:()=>i("phoneInputActive",!1),handleSave:async()=>{var e;(e=f,new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/).test(e))?(r(!0),await $(f)):h(!0)},disable:f===(null===x||void 0===x?void 0:x.phone)||void 0===f||s,isContinueBtnLoading:s,children:(0,oe.jsxs)(k,{ref:a,children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Contact number"}),(0,oe.jsx)(R,{children:"Keep your contact number up to date so hosts can reach you."})]}),(0,oe.jsxs)(U,{children:[(0,oe.jsx)($e.Ay,{placeholder:"Enter phone number",value:f,defaultCountry:"AU",style:{height:"54px",borderRadius:"10px",border:`1px solid ${p?d.J2.Red1.color:d.J2.Grey1.color}`,paddingLeft:"16px"},onChange:e=>{y(e),h(!1),u(!1)}}),(0,oe.jsx)("p",{style:{color:d.J2.Red1.color,fontSize:"14px",marginTop:"12px",textAlign:"left",visibility:p?"visible":"hidden"},children:g?"This number has already been used":"Invalid phone number"})]})]})})};var _e=i(2284),Ae=i(9380),je=i.n(Ae);const Se=e=>{let{newPhone:t,active:i,toggleInput:o}=e;const a=(0,ve.A)(i,(()=>o("verifyUpdatePhoneInputActive",!1))),[s,r]=(0,n.useState)(""),[l,d]=(0,n.useState)(!0),[c,h]=(0,ie.useRecoilState)(te.e),[u,x]=(0,ie.useRecoilState)(pe.H),[m,f]=(0,n.useState)(!1),[y,$]=(0,n.useState)(!1),[v,b]=(0,_e.A)(60),w=(0,n.useCallback)((async()=>{await(0,se.p)("post","dev-anystay-auth","user/phone",{headers:{Authorization:u},body:{phone:t}}).then((e=>console.log(e))).catch((e=>{"LimitExceededException"===e.code&&$(!0)}))}),[u,t]);if(!i)return null;return(0,oe.jsx)(be.A,{ref:a,backBtnType:"Arrow",closePopup:()=>o("verifyUpdatePhoneInputActive",!1),handleSave:()=>{(async()=>{s&&await(0,se.p)("post","dev-anystay-auth","user/phone/confirm",{headers:{Authorization:u},body:{verificationCode:s}}).then((e=>{if(e.success){const e=JSON.parse(JSON.stringify(c));e.phone=t,h(e),o("verifyUpdatePhoneInputActive",!1)}else f(!0)})).catch((e=>{console.log(e),"CodeMismatchException"===e.response.data.message&&f(!0)}))})()},btnText:"Confirm",cancelPopup:()=>{l&&(async()=>{d(!1),await w(),b(!0),setTimeout((()=>{d(!0)}),6e4)})()},cancelBtnText:l?"Resend code?":`Try again in ${v}s`,children:(0,oe.jsxs)(k,{children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Verify new phone"}),(0,oe.jsx)(R,{children:"Please check your message for a verification code."})]}),(0,oe.jsx)(p,{mfaInvalid:m,children:(0,oe.jsx)(je(),{value:s,length:6,placeholder:"",validChars:"0-9",autoFocus:!0,onChange:e=>{f(!1),r(e)},classNames:{container:"verification-container",character:"verification-character",characterInactive:"verification-character--inactive",characterSelected:"verification-character--selected"}})}),(0,oe.jsx)(g,{mfaInvalid:m,children:y?"You have exceeded the attempts limit, please try again later":m?"You have entered the wrong code, please try again":`Enter the 6 digit code we sent to ${t}`})]})})};var Ge=i(7445),ke=i(7607);const ze=e=>{let{active:t,toggleInput:i,newEmail:o}=e;const a=(0,ve.A)(t,(()=>i("verifyUpdateEmailInputActive",!1))),[s,r]=(0,n.useState)(""),[l,d]=(0,n.useState)(!0),[c,h]=(0,n.useState)(!1),[u,x]=(0,n.useState)(!1),[m,f]=(0,n.useState)(!1),[y,$]=(0,ie.useRecoilState)(te.e),[v,b]=(0,ie.useRecoilState)(ke.o),[w,_]=(0,ie.useRecoilState)(pe.H),[A,j]=(0,_e.A)(60),S=(0,n.useCallback)((async()=>{const e=await Ge.N.currentAuthenticatedUser();await Ge.N.updateUserAttributes(e,{email:o}).then((e=>console.log(e))).catch((e=>{"LimitExceededException"===e.code&&x(!0)}))}),[o]);(0,n.useEffect)((()=>{f(!1)}),[]);return t?(0,oe.jsx)(be.A,{ref:a,backBtnType:"Arrow",closePopup:()=>i("verifyUpdateEmailInputActive",!1),handleSave:async()=>{h(!0),await(async e=>{const t=await Ge.N.currentAuthenticatedUser();await Ge.N.verifyUserAttributeSubmit(t,"email",e).then((async e=>{await(0,se.p)("post","dev-anystay-user","user/email",{headers:{Authorization:w},body:{stripeAccountID:null===v||void 0===v?void 0:v.stripeAccountID,email:o}}).then((e=>{const t=JSON.parse(JSON.stringify(y));t.email=o,$(t),i("verifyUpdateEmailInputActive",!1)})).catch((e=>console.log(e)))})).catch((e=>{"CodeMismatchException"===e.code&&f(!0)}))})(s),h(!1)},disable:""===s||s.length<6||c,isContinueBtnLoading:c,btnText:"Confirm",cancelPopup:()=>{l&&(async()=>{d(!1),await S(),j(!0),setTimeout((()=>{d(!0)}),6e4)})()},cancelBtnText:l?"Resend code?":`Try again in ${A}s`,children:(0,oe.jsxs)(k,{children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Verify new email"}),(0,oe.jsx)(R,{children:"Please check your email for a verification code."})]}),(0,oe.jsx)(p,{mfaInvalid:m,children:(0,oe.jsx)(je(),{value:s,length:6,placeholder:"",validChars:"0-9",autoFocus:!0,onChange:e=>{f(!1),r(e)},classNames:{container:"verification-container",character:"verification-character",characterInactive:"verification-character--inactive",characterSelected:"verification-character--selected"}})}),(0,oe.jsx)(g,{mfaInvalid:m,children:u?"You have exceeded the attempts limit, please try again later":m?"You have entered the wrong code, please try again.":`6 digit code sent to ${o}`})]})}):null},Ie=e=>{let{active:t,toggleInput:i}=e;const o=(0,ve.A)(t,(()=>i("verifyEmailInputActive",!1))),[a,s]=(0,n.useState)(""),[r,l]=(0,n.useState)(!0),[d,c]=(0,ie.useRecoilState)(te.e),[h,u]=(0,ie.useRecoilState)(pe.H),[x,m]=(0,n.useState)(!1),[f,y]=(0,n.useState)(!1),[$,v]=(0,n.useState)(!1),b=(0,n.useRef)(!0),[w,_]=(0,n.useState)(!1),[A,j]=(0,_e.A)(60),S=(0,n.useCallback)((async()=>{await(0,se.p)("post","dev-anystay-auth","user/email/verify",{headers:{Authorization:h},body:{}}).then((e=>console.log(e))).catch((e=>{434===e.response.status&&v(!0),e.code&&"LimitExceededException"===e.code&&v(!0)}))}),[h]),G=(0,n.useCallback)((async()=>{l(!1),await S(),j(!0),setTimeout((()=>{l(!0)}),6e4)}),[S,j]);(0,n.useEffect)((()=>{v(!1),y(!1),m(!1),s(""),t&&r&&b.current?(G(),b.current=!1):!t&&r&&(b.current=!0)}),[t,r,G]);let z=`6 digit code sent to ${null===d||void 0===d?void 0:d.email}`;x?z="You have entered the wrong code, please try again":f?z="Verification code expired, please request a new one":$&&(z="You have exceeded the attempts limit, please try again later");if(!t)return null;return(0,oe.jsx)(be.A,{ref:o,backBtnType:"Close",closePopup:()=>i("verifyEmailInputActive",!1),handleSave:async()=>{_(!0),await(async e=>{await(0,se.p)("post","dev-anystay-auth","user/email/verify/confirm",{headers:{Authorization:h},body:{verificationCode:e}}).then((e=>{console.log("res",e);const t=JSON.parse(JSON.stringify(d));t.emailConfirmed=!0,c(t),i("verifyEmailInputActive",!1)})).catch((e=>{432===e.response.status&&m(!0),433===e.response.status&&y(!0)}))})(a),_(!1)},disable:""===a||a.length<6||w,isContinueBtnLoading:w,btnText:"Verify",cancelPopup:()=>{v(!1),y(!1),m(!1),r&&G()},cancelBtnText:r?"Resend code?":`Try again in ${A}s`,children:(0,oe.jsxs)(k,{children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Verify your email"}),(0,oe.jsx)(R,{children:"Please check your email for a verification code."})]}),(0,oe.jsx)(p,{mfaInvalid:x,mfaExpired:f,children:(0,oe.jsx)(je(),{value:a,length:6,placeholder:"",validChars:"0-9",autoFocus:!0,onChange:e=>{m(!1),y(!1),s(e)},classNames:{container:"verification-container",character:"verification-character",characterInactive:"verification-character--inactive",characterSelected:"verification-character--selected"}})}),(0,oe.jsx)(g,{mfaInvalid:x,mfaExpired:f,children:z})]})})},Ce=e=>{let{active:t,toggleInput:i,setNewEmail:o}=e;const a=(0,ve.A)(t,(()=>i("emailInputActive",!1))),[s,r]=(0,ie.useRecoilState)(te.e),[l,c]=(0,ie.useRecoilState)(pe.H),[p,h]=(0,n.useState)(s?s.email:""),[g,u]=(0,n.useState)(!1),[x,m]=(0,n.useState)(!1),[f,y]=(0,n.useState)(""),$=async e=>{u(!0);try{const t=await(0,se.p)("post","dev-anystay-auth","user/email",{headers:{Authorization:l},body:{email:e}});return t.success||"LimitExceededException"!==t.message?t.success||y("Something went wrong. Please try again."):y("You have exceeded the limit of email sent. Please try again later."),i("emailInputActive",!1),o(e),i("verifyUpdateEmailInputActive",!0),!0}catch(t){return u(!1),y("Something went wrong. Please try again."),!1}};return(0,oe.jsx)(be.A,{ref:a,backBtnType:"Arrow",closePopup:()=>i("emailInputActive",!1),handleSave:async()=>{if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(p))return void m(!0);await $(p)||m(!0)},disable:p===(null===s||void 0===s?void 0:s.email)||""===p||g,isContinueBtnLoading:g,children:(0,oe.jsxs)(k,{children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Email address"}),(0,oe.jsx)(R,{children:"Check your inbox to confirm your email after any changes."})]}),(0,oe.jsx)(N,{invalid:x,value:p,onChange:e=>{h(e.target.value),m(!1)}}),(0,oe.jsx)("p",{style:{color:d.J2.Red1.color,fontSize:"12px",marginTop:"8px",marginBottom:"96px",textAlign:"left",visibility:x?"visible":"hidden"},children:f||"Please enter a valid email address."})]})})};var Re=i(7668);const Be=e=>{let{active:t,toggleInput:i}=e;const o=(0,ve.A)(t,(()=>i("dobInputActive",!1)),!0),[a,s]=(0,ie.useRecoilState)(te.e),[r,l]=(0,ie.useRecoilState)(pe.H),d=null===a||void 0===a?void 0:a.dateOfBirth,[c,p]=(0,n.useState)(!1),[h,g]=(0,n.useState)({month:d?Number(d.split("/")[1]):"",day:d?Number(d.split("/")[0]):"",year:d?Number(d.split("/")[2]):""}),[u,x]=(0,n.useState)(d?new Date(Number(d.split("/")[2]),Number(d.split("/")[1])-1,Number(d.split("/")[0])):null),[m,f]=(0,n.useState)(!1),[y,$]=(0,n.useState)(!1);return(0,oe.jsxs)(be.A,{ref:o,backBtnType:"Close",closePopup:()=>i("dobInputActive",!1),handleSave:async()=>{if(isNaN(Number(new Date(`${h.year}/${h.month}/${h.day}`))))return void $(!0);let e=((new Date).getTime()-new Date(Number(h.year),Number(h.month)-1,Number(h.day)).getTime())/31536e6;Math.floor(e)>=18&&Math.floor(e)<=120?(f(!0),await(async e=>{await(0,se.p)("post","dev-anystay-user","user/dob",{headers:{Authorization:r},body:{dob:e,day:Number(e.split("/")[0]),month:Number(e.split("/")[1]),year:Number(e.split("/")[2])}}).then((t=>{const i=JSON.parse(JSON.stringify(a));i.dateOfBirth=e,s(i)})).catch((e=>console.log(e)))})(`${String(h.day).padStart(2,"0")}/${String(h.month).padStart(2,"0")}/${h.year}`),i("dobInputActive",!1)):$(!0)},disable:(()=>{const e=d?Number(d.split("/")[0]):"",t=d?Number(d.split("/")[1]):"",i=d?Number(d.split("/")[2]):"";return!(h.day&&h.month&&h.year)||(Number(h.day)===e&&Number(h.month)===t&&Number(h.year)===i||!!m)})(),isContinueBtnLoading:m,btnColor:"black",children:[(0,oe.jsxs)(k,{children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Birthdate"}),(0,oe.jsx)(R,{invalid:y,children:y?"Please enter a valid date.":"Your date of birth must match your Government ID."})]}),(0,oe.jsxs)(O,{children:[(0,oe.jsx)(W,{type:"number",style:{width:"25%"},placeholder:"DD",value:h.day,onChange:e=>{$(!1),e.target.value.length<=2&&g({...h,day:e.target.value})},onClick:()=>{window.innerWidth<1280&&p(!0)}}),(0,oe.jsx)(W,{type:"number",style:{width:"25%"},placeholder:"MM",value:h.month,onChange:e=>{$(!1),e.target.value.length<=2&&g({...h,month:e.target.value})},onClick:()=>{window.innerWidth<1280&&p(!0)}}),(0,oe.jsx)(W,{type:"number",style:{width:"50%"},placeholder:"YYYY",value:h.year,onChange:e=>{$(!1),e.target.value.length<=4&&g({...h,year:e.target.value})},onClick:()=>{window.innerWidth<768&&p(!0)}})]})]}),(0,oe.jsx)(L,{children:(0,oe.jsx)(Re.t1,{controls:["date"],dateFormat:"DD/MM/YYYY",touchUi:!0,value:u,onChange:e=>{x(e.value),g({day:String(e.value.getDate()).padStart(2,"0"),month:String(e.value.getMonth()+1).padStart(2,"0"),year:e.value.getFullYear()}),p(!1)},isOpen:c,onCancel:()=>p(!1),theme:"material",cssClass:"#dob-datepicker-wrapper",responsive:{xsmall:{display:"bottom"},medium:{display:"center"}},inputComponent:!1})})]})},Je=e=>{let{active:t,toggleInput:i}=e;const o=(0,ve.A)(t,(()=>i("legalNameInputActive",!1))),[a,s]=(0,ie.useRecoilState)(te.e),[r,l]=(0,ie.useRecoilState)(pe.H),[d,c]=(0,n.useState)(a?a.firstName:""),[p,h]=(0,n.useState)(a?a.lastName:""),[g,u]=(0,n.useState)(!1);return(0,oe.jsx)(be.A,{ref:o,backBtnType:"Close",closePopup:()=>i("legalNameInputActive",!1),handleSave:async()=>{u(!0),await(async(e,t)=>{await(0,se.p)("post","dev-anystay-user","user/name",{headers:{Authorization:r},body:{firstName:e,lastName:t}}).then((n=>{const o=JSON.parse(JSON.stringify(a));o.firstName=e,o.lastName=t,s(o),i("legalNameInputActive",!1)})).catch((e=>console.log(e)))})(d,p)},disable:!d||!p||d===(null===a||void 0===a?void 0:a.firstName)&&p===(null===a||void 0===a?void 0:a.lastName)||!!g,isContinueBtnLoading:g,children:(0,oe.jsxs)(k,{children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Legal name"}),(0,oe.jsx)(R,{children:"Enter your full name as it appears on your ID."})]}),(0,oe.jsxs)(E,{children:[(0,oe.jsx)(N,{style:{margin:0,width:"100%",gridColumn:"1/2",gridRow:"1/2"},value:d,onChange:e=>{e.target.value.length>=90||(""===e.target.value||" "===e.target.value.slice(-1)?c(e.target.value):/^[a-zA-Z ]+$/.test(e.target.value)&&c(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)))}}),(0,oe.jsx)(H,{style:{gridColumn:"1/2",gridRow:"2/3"},children:"First name"}),(0,oe.jsx)(N,{style:{margin:0,width:"100%",gridColumn:"2/3",gridRow:"1/2"},value:p,onChange:e=>{e.target.value.length>=90||(""===e.target.value||" "===e.target.value.slice(-1)?h(e.target.value):/^[a-zA-Z ]+$/.test(e.target.value)&&h(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)))}}),(0,oe.jsx)(H,{style:{gridColumn:"2/3",gridRow:"2/3"},children:"Last name"})]})]})})},Ne=e=>{let{toggleInput:t,active:i}=e;const[o,a]=(0,ie.useRecoilState)(te.e),[s,r]=(0,ie.useRecoilState)(pe.H),[l,d]=(0,n.useState)(null!==o&&void 0!==o&&o.profileDescription?o.profileDescription:""),[c,p]=(0,n.useState)(!1),h=(0,ve.A)(i,(()=>t("aboutInputActive",!1)));return(0,oe.jsx)(be.A,{ref:h,backBtnType:"Close",closePopup:()=>t("aboutInputActive",!1),handleSave:async()=>{p(!0),await(async e=>{await(0,se.p)("post","dev-anystay-user","user/bio",{headers:{Authorization:s},body:{profileDescription:e}}).then((t=>{const i=JSON.parse(JSON.stringify(o));i.profileDescription=e,a(i)})).catch((e=>console.log(e))),t("aboutInputActive",!1)})(l)},disable:l===(null===o||void 0===o?void 0:o.profileDescription)||c,isContinueBtnLoading:c,children:(0,oe.jsxs)(z,{children:[(0,oe.jsxs)(I,{children:[(0,oe.jsx)(C,{children:"Bio"}),(0,oe.jsx)(R,{children:"Write something interesting about yourself."})]}),(0,oe.jsx)(B,{placeholder:"Start writing here",value:l,onChange:e=>{e.target.value.length<=500&&d(e.target.value)}}),(0,oe.jsx)(J,{children:500-l.length})]})})};var He=i(8306),We=i(5762),Ee=i(9697),Oe=i(4204);const Ue=e=>{let{selected:t,toggleSelected:i}=e;const o=(0,ve.A)(t,(()=>{p||i()})),[a,s]=(0,ie.useRecoilState)(te.e),[r,l]=(0,n.useState)(null!==a&&void 0!==a&&a.facebookURL?a.facebookURL:""),[d,c]=(0,ie.useRecoilState)(pe.H),[p,h]=(0,n.useState)(!1);return(0,oe.jsx)(Ee.A,{children:(0,oe.jsxs)(We.MZ,{ref:o,children:[(0,oe.jsx)(We.Ye,{type:"button",disabled:p,onClick:i,children:(0,oe.jsx)(We.Vt,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:""})}),(0,oe.jsx)(We.cZ,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg",alt:""}),(0,oe.jsx)(We.jv,{children:"Add your Facebook"}),(0,oe.jsx)(We.Rc,{children:"Enter your facebook @ to show on your profile."}),(0,oe.jsx)(We.Vw,{value:r,onChange:e=>l(e.target.value),placeholder:"anystay.com.au"}),(0,oe.jsxs)(We.Kc,{children:[(0,oe.jsx)(We.pk,{type:"button",disabled:p,onClick:i,children:"Cancel"}),(0,oe.jsx)(Oe.A,{background:"black",style:{width:"unset"},isLoading:p,disabled:p,onClick:()=>{h(!0),(async()=>{try{await(0,se.p)("post","dev-anystay-user","user/facebook",{headers:{Authorization:d},body:{facebookURL:r}});const e=JSON.parse(JSON.stringify(a));e.facebookURL=r,s(e),i()}catch(e){console.error(e),h(!1)}})()},children:"Add"})]})]})})},Le=e=>{let{toggleSelected:t,selected:i}=e;const[o,a]=(0,ie.useRecoilState)(te.e),s=(0,ve.A)(i,(()=>{p||t()})),[r,l]=(0,n.useState)(null!==o&&void 0!==o&&o.instagramURL?o.instagramURL:""),[d,c]=(0,ie.useRecoilState)(pe.H),[p,h]=(0,n.useState)(!1);return(0,oe.jsx)(Ee.A,{children:(0,oe.jsxs)(We.MZ,{ref:s,children:[(0,oe.jsx)(We.Ye,{type:"button",disabled:p,onClick:t,children:(0,oe.jsx)(We.Vt,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:""})}),(0,oe.jsx)(We.cZ,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Instagram.svg",alt:""}),(0,oe.jsx)(We.jv,{children:"Add your instagram"}),(0,oe.jsx)(We.Rc,{children:"Enter your instagram @ to show on your profile."}),(0,oe.jsx)(We.Vw,{value:r,onChange:e=>l(e.target.value),placeholder:"anystay.com.au"}),(0,oe.jsxs)(We.Kc,{children:[(0,oe.jsx)(We.pk,{type:"button",disabled:p,onClick:t,children:"Cancel"}),(0,oe.jsx)(Oe.A,{background:"black",style:{width:"unset"},isLoading:p,disabled:p,onClick:()=>{h(!0),(async()=>{try{await(0,se.p)("post","dev-anystay-user","user/instagram",{headers:{Authorization:d},body:{instagramURL:r}});const e=JSON.parse(JSON.stringify(o));e.instagramURL=r,a(e),t()}catch(e){console.error(e),h(!1)}})()},children:"Add"})]})]})})},Te=e=>{let{selected:t,toggleSelected:i}=e;const o=(0,ve.A)(t,(()=>{p||i()})),[a,s]=(0,ie.useRecoilState)(te.e),[r,l]=(0,n.useState)(null!==a&&void 0!==a&&a.twitterURL?a.twitterURL:""),[d,c]=(0,ie.useRecoilState)(pe.H),[p,h]=(0,n.useState)(!1);return(0,oe.jsx)(Ee.A,{children:(0,oe.jsxs)(We.MZ,{ref:o,children:[(0,oe.jsx)(We.Ye,{type:"button",disabled:p,onClick:i,children:(0,oe.jsx)(We.Vt,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:""})}),(0,oe.jsx)(We.cZ,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg",alt:""}),(0,oe.jsx)(We.jv,{children:"Add your X"}),(0,oe.jsx)(We.Rc,{children:"Enter your X @ to show on your profile."}),(0,oe.jsx)(We.Vw,{value:r,onChange:e=>l(e.target.value),placeholder:"AnystayApp"}),(0,oe.jsxs)(We.Kc,{children:[(0,oe.jsx)(We.pk,{type:"button",disabled:p,onClick:i,children:"Cancel"}),(0,oe.jsx)(Oe.A,{background:"black",style:{width:"unset"},isLoading:p,disabled:p,onClick:()=>{h(!0),(async()=>{try{await(0,se.p)("post","dev-anystay-user","user/twitter",{headers:{Authorization:d},body:{twitterURL:r}});const e=JSON.parse(JSON.stringify(a));e.twitterURL=r,s(e),i()}catch(e){console.error(e),h(!1)}})()},children:"Add"})]})]})})},Pe=e=>{let{selected:t,toggleSelected:i}=e;const o=(0,ve.A)(t,(()=>{p||i()})),[a,s]=(0,ie.useRecoilState)(te.e),[r,l]=(0,n.useState)(null!==a&&void 0!==a&&a.tiktokURL?a.tiktokURL:""),[d,c]=(0,ie.useRecoilState)(pe.H),[p,h]=(0,n.useState)(!1);return(0,oe.jsx)(Ee.A,{children:(0,oe.jsxs)(We.MZ,{ref:o,children:[(0,oe.jsx)(We.Ye,{type:"button",disabled:p,onClick:i,children:(0,oe.jsx)(We.Vt,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:""})}),(0,oe.jsx)(We.cZ,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg",alt:""}),(0,oe.jsx)(We.jv,{children:"Add your TikTok"}),(0,oe.jsx)(We.Rc,{children:"Enter your TikTok @ to show it on your profile"}),(0,oe.jsx)(We.Vw,{value:r,onChange:e=>l(e.target.value),placeholder:"@anystay.com.au"}),(0,oe.jsxs)(We.Kc,{children:[(0,oe.jsx)(We.pk,{type:"button",disabled:p,onClick:i,children:"Cancel"}),(0,oe.jsx)(Oe.A,{background:"black",style:{width:"unset"},isLoading:p,disabled:p,onClick:()=>{h(!0),(async()=>{try{await(0,se.p)("post","dev-anystay-user","user/tiktok",{headers:{Authorization:d},body:{tiktokURL:r}});const e=JSON.parse(JSON.stringify(a));e.tiktokURL=r,s(e),i()}catch(e){console.error(e),h(!1)}})()},children:"Add"})]})]})})};function De(){var e,t;const i=(0,ee.Zp)(),[o,r]=(0,ie.useRecoilState)(te.e),[l,d]=(0,ie.useRecoilState)(ge.U),[p,h]=(0,ie.useRecoilState)(pe.H),[g,u]=(0,n.useState)(""),[x,m]=(0,n.useState)(""),[f,k]=(0,n.useState)({aboutInputActive:!1,legalNameInputActive:!1,dobInputActive:!1,emailInputActive:!1,verifyEmailInputActive:!1,phoneInputActive:!1,idInputActive:!1,verifyUpdateEmailInputActive:!1,verifyUpdatePhoneInputActive:!1}),[z,I]=(0,n.useState)(!1),[C,R]=(0,n.useState)(!1),[B,J]=(0,n.useState)(!1),[N,H]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=z||C||B||N;document.body.style.overflow=e?"hidden":"unset"}),[z,C,B,N]);const W=(e,t)=>{k((i=>({...i,[e]:t})))};(0,n.useEffect)((()=>{o||i("/")}),[o,i]);return o?(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(He.A,{title:"Edit profile | Anystay"}),(0,oe.jsxs)(c,{children:[(0,oe.jsx)(ae,{}),(0,oe.jsxs)(P,{children:[(0,oe.jsx)(ue,{}),(0,oe.jsxs)(s.cC,{children:[(0,oe.jsxs)(T,{children:[!1===o.emailConfirmed&&(0,oe.jsx)(fe,{handleClick:()=>{W("verifyEmailInputActive",!0)}}),"verified"!==(null===l||void 0===l||null===(e=l.individual)||void 0===e||null===(t=e.verification)||void 0===t?void 0:t.status)&&(0,oe.jsx)(ye,{handleClick:()=>{i("/payout-settings"),W("idInputActive",!0)}}),(""===o.profileDescription||null===o.profileDescription)&&(0,oe.jsx)(me,{handleClick:()=>{W("aboutInputActive",!0)}}),null===o.instagramURL&&null===o.facebookURL&&null===o.twitterURL&&(0,oe.jsx)(xe,{})]}),(0,oe.jsx)(y,{children:(0,oe.jsxs)($,{onClick:()=>W("aboutInputActive",!0),children:[(0,oe.jsxs)(v,{children:[(0,oe.jsx)(b,{children:"Bio"}),(0,oe.jsx)(w,{onClick:()=>W("aboutInputActive",!0),children:"Edit"})]}),(0,oe.jsx)(_,{children:(()=>{if(o)return o.profileDescription?o.profileDescription.length>40?`${o.profileDescription.substr(0,40)}...`:o.profileDescription:"Add a bio"})()})]})}),(0,oe.jsx)(y,{children:(0,oe.jsxs)($,{onClick:()=>W("legalNameInputActive",!0),children:[(0,oe.jsxs)(A,{children:[(0,oe.jsx)(j,{children:"Name"}),(0,oe.jsx)(S,{onClick:()=>W("legalNameInputActive",!0),children:"Edit"})]}),(0,oe.jsx)(G,{children:`${o.firstName} ${o.lastName}`})]})}),(0,oe.jsx)(y,{children:(0,oe.jsxs)($,{onClick:()=>W("dobInputActive",!0),children:[(0,oe.jsxs)(A,{children:[(0,oe.jsx)(j,{children:"Birthdate"}),(0,oe.jsx)(S,{onClick:()=>W("dobInputActive",!0),children:"Edit"})]}),(0,oe.jsx)(G,{children:o.dateOfBirth})]})}),(0,oe.jsx)(y,{children:(0,oe.jsxs)($,{onClick:()=>{o.emailConfirmed?W("emailInputActive",!0):W("verifyEmailInputActive",!0)},children:[(0,oe.jsxs)(A,{children:[(0,oe.jsx)(j,{children:"Email address"}),o.emailConfirmed?(0,oe.jsx)(S,{onClick:()=>W("emailInputActive",!0),children:"Edit"}):(0,oe.jsx)("div",{style:{display:"flex",gap:"16px"},children:(0,oe.jsx)(S,{onClick:()=>W("verifyEmailInputActive",!0),children:"Edit"})})]}),(0,oe.jsx)(G,{children:o.email})]})}),(0,oe.jsx)(y,{children:(0,oe.jsxs)($,{onClick:()=>W("phoneInputActive",!0),children:[(0,oe.jsxs)(A,{children:[(0,oe.jsx)(j,{children:"Phone number"}),(0,oe.jsx)(S,{onClick:()=>W("phoneInputActive",!0),children:"Edit"})]}),(0,oe.jsx)(G,{children:o.phone})]})}),(0,oe.jsx)(y,{children:(0,oe.jsxs)($,{onClick:()=>{i("/payout-settings")},children:[(0,oe.jsxs)(A,{children:[(0,oe.jsx)(j,{children:"Government ID"}),(0,oe.jsx)(S,{onClick:()=>{i("/payout-settings")},children:"Edit"})]}),(0,oe.jsx)(G,{children:(()=>{var e,t,i,n;return l?"verified"===(null===l||void 0===l||null===(e=l.individual)||void 0===e||null===(t=e.verification)||void 0===t?void 0:t.status)?"Verified":"pending"===(null===l||void 0===l||null===(i=l.individual)||void 0===i||null===(n=i.verification)||void 0===n?void 0:n.status)?"Pending":"Not verified":"Please add a bank account first"})()})]})}),(0,oe.jsxs)(Y,{style:{marginTop:"24px"},children:[(0,oe.jsx)(Z,{children:"Social links"}),(0,oe.jsx)(F,{children:"Add social links to your profile"}),(0,oe.jsxs)(Q,{onClick:()=>I(!z),children:[(0,oe.jsx)(K,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Instagram.svg",alt:""}),(0,oe.jsx)(q,{type:"button",selected:Boolean(o.instagramURL),children:o.instagramURL?o.instagramURL:"@username"})]}),(0,oe.jsxs)(Q,{onClick:()=>R(!C),children:[(0,oe.jsx)(K,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg",alt:""}),(0,oe.jsx)(q,{type:"button",selected:Boolean(o.facebookURL),children:o.facebookURL?o.facebookURL:"@username"})]}),(0,oe.jsxs)(Q,{onClick:()=>J(!B),children:[(0,oe.jsx)(K,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg",alt:""}),(0,oe.jsx)(q,{type:"button",selected:Boolean(o.twitterURL),children:o.twitterURL?o.twitterURL:"@username"})]}),(0,oe.jsxs)(Q,{onClick:()=>H(!N),children:[(0,oe.jsx)(K,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Tiktok.svg",alt:""}),(0,oe.jsx)(q,{type:"button",selected:Boolean(o.tiktokURL),children:o.tiktokURL?o.tiktokURL:"@username"})]})]}),z&&(0,oe.jsx)(Le,{selected:z,toggleSelected:()=>I(!z)}),C&&(0,oe.jsx)(Ue,{selected:C,toggleSelected:()=>R(!C)}),B&&(0,oe.jsx)(Te,{selected:B,toggleSelected:()=>J(!B)}),N&&(0,oe.jsx)(Pe,{selected:N,toggleSelected:()=>H(!N)}),f.aboutInputActive&&(0,oe.jsx)(Ne,{toggleInput:W,active:f.aboutInputActive}),f.legalNameInputActive&&(0,oe.jsx)(Je,{toggleInput:W,active:f.legalNameInputActive}),f.dobInputActive&&(0,oe.jsx)(Be,{toggleInput:W,active:f.dobInputActive}),f.emailInputActive&&(0,oe.jsx)(Ce,{setNewEmail:m,active:f.emailInputActive,toggleInput:W}),f.phoneInputActive&&(0,oe.jsx)(we,{setNewPhone:u,active:f.phoneInputActive,toggleInput:W}),f.verifyEmailInputActive&&(0,oe.jsx)(Ie,{active:f.verifyEmailInputActive,toggleInput:W}),(0,oe.jsx)(ze,{newEmail:x,toggleInput:W,active:f.verifyUpdateEmailInputActive}),(0,oe.jsx)(Se,{newPhone:g,toggleInput:W,active:f.verifyUpdatePhoneInputActive})]})]})]}),(0,oe.jsx)(a.A,{})]}):null}o.H.configure(X.A)},5762:(e,t,i)=>{i.d(t,{Bw:()=>$,DB:()=>c,Gd:()=>w,Gs:()=>r,IL:()=>j,Ii:()=>k,Kc:()=>D,M$:()=>l,MZ:()=>W,NQ:()=>A,O3:()=>I,Q0:()=>M,Qp:()=>C,Rc:()=>T,S0:()=>f,Tr:()=>b,Vl:()=>Q,Vt:()=>O,Vw:()=>P,Wi:()=>z,Wt:()=>F,Ye:()=>E,_q:()=>B,cZ:()=>U,e0:()=>G,e8:()=>K,ew:()=>Y,g7:()=>S,jS:()=>y,jv:()=>L,kU:()=>p,lG:()=>H,lW:()=>d,mD:()=>m,mt:()=>R,nl:()=>X,oh:()=>s,pk:()=>V,r$:()=>N,r0:()=>x,s3:()=>_,tl:()=>Z,vH:()=>q,vg:()=>h,wC:()=>g,x7:()=>J,xV:()=>v,zO:()=>u});var n=i(2119),o=i(5475),a=i(4936);const s=n.Ay.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,r=(n.Ay.button`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`,n.Ay.div`
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    padding-bottom: 128px;

    @media (min-width: 768px) {
        padding: 80px 0 32px;
        width: calc(100% - 64px);
        ::-webkit-scrollbar {
            display: none;
        }
    }
`),l=n.Ay.div`
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    margin-top: 64px;
    @media (min-width: 768px) {
        position: relative;
        margin-top: 48px;
        padding-bottom: 4px;
        align-items: center;
    }
`,d=n.Ay.p`
    font-size: ${a.$G.sans_900_semi.fontSize};
    font-weight: ${a.$G.sans_900_semi.fontWeight};

    line-height: ${a.$G.sans_900_semi.lineHeight};
    justify-self: center;
    text-align: center;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        justify-self: flex-start;
        font-size: ${a.$G.sans_1000_semi.fontSize};
        line-height: ${a.$G.sans_1000_semi.lineHeight};
        padding-left: 24px;
    }
`,c=(n.Ay.p`
    font-size: ${a.$G.sans_500.fontSize};
    font-weight: ${a.$G.sans_500.fontWeight};
    color: ${a.J2.Grey.color};
    line-height: ${a.$G.sans_500.lineHeight};
    margin: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,n.Ay.div`
    display: flex;
`),p=(n.Ay.img`
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    transition: 0.3s;
    transform: rotate(0deg);

    @media (min-width: 768px) {
        display: none;
    }
`,n.Ay.p`
    font-size: ${a.$G.sans_700_semi.fontSize};
    line-height: ${a.$G.sans_700_semi.lineHeight};
    font-weight: ${a.$G.sans_700_semi.fontWeight};
    margin-top: 48px;
    &:first-of-type {
        margin-bottom: 36px;
    }
`),h=n.Ay.div`
    width: calc((100% - 16px) / 2);
    aspect-ratio: 1/1;
    border-radius: ${a.Qk.radius_12.borderRadius};
    box-shadow: ${a.E_.shadow_100.boxShadow};
    padding: ${a.dB.spacing_300.padding};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 24px;
    cursor: pointer;
    @media (min-width: 768px) {
        width: calc((100% - 72px) / 3);
    }
    @media (min-width: 1024px) {
        width: calc((100% - 24px) / 2);
    }
`,g=n.Ay.img`
    max-width: 150px;
    width: 85%;
    aspect-ratio: 3/2;
    object-fit: contain;
`,u=n.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};

    position: absolute;
    bottom: 16px;
    left: 16px;
`,x=n.Ay.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: ${a.dB.spacing_250.gap};
`,m=n.Ay.p`
    font-size: ${a.$G.sans_700_semi.fontSize};
    line-height: ${a.$G.sans_700_semi.lineHeight};
    font-weight: ${a.$G.sans_700_semi.fontWeight};
    color: ${a.J2.Grey1.color};
    margin-top: 48px;
`,f=n.Ay.p`
    font-size: ${a.$G.sans_500.fontSize};
    line-height: ${a.$G.sans_500.lineHeight};
    font-weight: ${a.$G.sans_500.fontWeight};
    color: ${a.J2.Grey1.color};
`,y=n.Ay.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${a.dB.spacing_400.gap};
`,$=n.Ay.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${a.dB.spacing_250.padding};
    &:hover {
        background-color: ${a.J2.Grey5.color};
    }
`,v=n.Ay.div`
    height: fit-content;
    border-bottom: 1px solid ${a.J2.Grey2.color};
    display: flex;
    flex-direction: column;
    cursor: pointer;
`,b=n.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,w=n.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    font-weight: ${a.$G.sans_400_semi.fontWeight};

    line-height: ${a.$G.sans_400_semi.lineHeight};
    margin: 0;
`,_=n.Ay.div`
    height: fit-content;
    width: 363px;
    margin-left: 80px;
    margin-top: 40px;
    border-radius: ${a.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${a.dB.spacing_400.padding};
    border: 1px solid ${a.J2.Grey2.color};

    @media (max-width: 1024px) {
        display: none;
    }
`,A=n.Ay.p`
    margin: ${a.dB.spacing_300.margin} 0 ${a.dB.spacing_250.margin};
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    color: ${a.J2.Grey.color};
    font-weight: ${a.$G.sans_300.fontWeight};
`,j=n.Ay.button`
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    text-decoration: underline;

    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
`,S=n.Ay.div`
    width: 100%;
    background: ${a.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: ${a.dB.spacing_400.padding} ${a.dB.spacing_400.padding} ${a.dB.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        padding: ${a.dB.spacing_400.padding};
    }
`,G=(n.Ay.div`
    width: calc(100% - 48px);
    margin: 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
    cursor: pointer;
`,n.Ay.p`
    font-size: ${a.$G.sans_500_semi.fontSize};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    font-weight: ${a.$G.sans_500_semi.fontWeight};

    text-align: center;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-top: 8px;
`),k=(n.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};

    text-align: center;
    margin: 0 auto;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: center;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_400_semi.fontSize};
        line-height: ${a.$G.sans_400_semi.lineHeight};
    }
`,n.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};

    text-align: center;
    margin: 0 auto;
    max-width: 200px;
    margin-bottom: 32px;
`),z=n.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};

    margin-top: 12px;
    margin-bottom: 24px;
`,I=n.Ay.input`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    background: none;
    border: 1px solid ${e=>e.passwordInvalid?a.J2.Red1.color:a.J2.Grey1.color};
    outline: none;
    padding-left: 16px;
    font-size: ${a.$G.sans_400.fontSize};
    line-height: ${a.$G.sans_400.lineHeight};
    font-weight: ${a.$G.sans_400.fontWeight};
`,C=n.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};
    color: ${a.J2.Red1.color};
    margin-top: 12px;
    margin-bottom: 24px;
`,R=(n.Ay.button`
    background: none;
    border: none;
    font-size: ${a.Ox.sans_button_100.fontSize};
    text-decoration: underline;
    font-weight: ${a.Ox.sans_button_100.fontWeight};

    line-height: ${a.Ox.sans_button_100.lineHeight};
    align-self: flex-start;
    margin-left: 24px;
    margin-top: 12px;
    cursor: pointer;

    @media (min-width: 768px) {
    }
`,n.Ay.button`
    height: 48px;
    width: 104px;
    border-radius: 9px;
    background: ${a.J2.Black.color};
    border: none;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    color: ${a.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 104px;
        font-size: ${a.Ox.sans_button_200.fontSize};
        line-height: ${a.Ox.sans_button_200.lineHeight};
    }
`,n.Ay.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
`),B=n.Ay.p`
    font-size: ${a.so.sans_text_300.fontSize};
    font-weight: ${a.so.sans_text_300.fontWeight};
    line-height: ${a.so.sans_text_300.lineHeight};

    margin-top: 24px;
    margin-bottom: 0;
`,J=n.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 32px;

    @media (min-width: 1280px) {
        height: 80px;
        width: 80px;
    }
`,N=n.Ay.p`
    font-size: ${a.$G.sans_600_bold.fontSize};
    line-height: ${a.$G.sans_600_bold.lineHeight};
    font-weight: ${a.$G.sans_600_bold.fontWeight};

    margin: 0 auto;
    margin-bottom: 12px;
    text-align: center;
    max-width: 369px;
`,H=n.Ay.p`
    font-size: ${a.$G.sans_400.fontSize};
    line-height: ${a.$G.sans_400.lineHeight};
    font-weight: ${a.$G.sans_400.fontWeight};

    text-align: center;
    margin: 0 auto 96px;
    max-width: 245px;
`,W=((0,n.Ay)(o.N_)`
    background: none;
    padding: 0;
    border: none;
    height: 34px;
    display: flex;
    align-items: center;
    cursor: pointer;
`,n.Ay.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
    display: flex;
    align-items: center;
    margin-right: 24px;
`,n.Ay.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${a.J2.White.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${a.E_.shadow_300.boxShadow};
    z-index: 102;

    @media (min-width: 768px) {
        width: 560px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 14px;
        bottom: unset;
    }
`),E=n.Ay.button`
    background: none;
    padding: 0;
    margin: ${a.dB.spacing_400.margin};
    border: none;
    align-self: flex-start;
    margin-bottom: 0;
    cursor: pointer;
`,O=n.Ay.img`
    height: 16px;
    object-fit: cover;
`,U=n.Ay.img`
    margin-top: 24px;
    width: 64px;
    height: 64px;
    object-fit: cover;

    @media (min-width: 768px) {
        width: 80px;
        height: 80px;
    }
`,L=n.Ay.p`
    font-size: ${a.$G.sans_600_bold.fontSize};
    line-height: ${a.$G.sans_600_bold.lineHeight};
    font-weight: ${a.$G.sans_600_bold.fontWeight};

    margin: 0;
    margin-top: 48px;
`,T=n.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    font-weight: ${a.$G.sans_300.fontWeight};
    line-height: ${a.$G.sans_300.lineHeight};

    text-align: center;
    margin: 0;
    margin-top: 12px;
    max-width: 200px;
`,P=n.Ay.input`
    height: 54px;
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: 32px;
    padding-left: 16px;
    border-radius: 9px;
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    font-weight: ${a.$G.sans_300.fontWeight};

    border: 1px solid ${a.J2.Grey1.color};

    ::placeholder {
        color: ${a.J2.Grey1.color} !important;
        font-size: ${a.$G.sans_300.fontSize};
        line-height: ${a.$G.sans_300.lineHeight};
        font-weight: ${a.$G.sans_300.fontWeight};
    }
`,D=n.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: auto;
    padding: ${a.dB.spacing_300.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        padding: ${a.dB.spacing_400.padding} 0;
    }
`,V=n.Ay.button`
    background: none;
    border: none;
    padding: 0;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};

    margin: 0;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${a.Ox.sans_button_300.fontSize};
        line-height: ${a.Ox.sans_button_300.lineHeight};
    }
`,M=(n.Ay.button`
    background: ${a.J2.Black.color};
    border: none;
    padding: 0 32px;
    color: ${a.J2.White.color};
    border-radius: 9px;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    cursor: pointer;
`,n.Ay.div`
    & .verification-container {
        ${e=>e.mfaInvalid?`border: 1px solid ${a.J2.Red1.color};`:null}
    }
`),Y=n.Ay.p`
    text-align: left;
    width: 100%;
    font-size: ${a.$G.sans_200.fontSize};
    line-height: ${a.$G.sans_200.lineHeight};
    color: ${e=>e.mfaInvalid?a.J2.Red1.color:a.J2.Black.color};
    font-weight: ${a.$G.sans_200.fontWeight};
    margin-top: 12px;
    margin-bottom: 24px;
    span {
        color: ${a.J2.Black.color} !important;
    }
`,Z=n.Ay.div`
    border-radius: 10px;
    border: 1px solid ${a.J2.Grey2.color};
    margin-bottom: 12px;
    width: 100%;
`,F=n.Ay.div`
    padding: ${a.dB.spacing_300.padding};
    border-bottom: 1px solid ${a.J2.Grey2.color};
    &:last-child {
        border-bottom: none;
    }
`,Q=n.Ay.input`
    border: none;
    outline: none;
    font-size: ${a.$G.sans_400_med.fontSize};
    font-weight: ${a.$G.sans_400_med.fontWeight};
    line-height: ${a.$G.sans_400_med.lineHeight};

    width: 100%;
    &::placeholder {
        color: ${a.J2.Grey.color};
    }
`,K=n.Ay.img`
    width: 147px;
    margin-top: 38px;
    margin-bottom: 46px;
    object-fit: contain;
`,q=n.Ay.p`
    font-size: ${a.$G.sans_700_semi.fontSize};
    font-weight: ${a.$G.sans_700_semi.fontWeight};
    line-height: ${a.$G.sans_700_semi.lineHeight};

    margin-bottom: 32px;
`,X=n.Ay.p`
    color: ${a.J2.Red.color};
    opacity: ${e=>e.invalidKey?"1":"0"};
    margin-right: auto;
    margin-bottom: 66px;
`},9709:(e,t,i)=>{i.d(t,{U:()=>a});var n=i(831),o=i(2493);const a=(0,n.selector)({key:"stripeAccountSelector",get:e=>{let{get:t}=e;return t(o._)},set:(e,t)=>{let{set:i}=e;return i(o._,t)}})}}]);
//# sourceMappingURL=1462.5e644f7a.chunk.js.map
//# debugId=67198807-7e28-5e5e-b300-3af45a95be26
