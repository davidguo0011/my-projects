"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fd4738b7-4909-5c2b-bfed-86f9500ce41d")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[4725],{9820:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(2119),a=i(4936);const s=n.Ay.button`
    height: ${e=>e.size?e.size:"80px"};
    border-radius: ${a.Qk.radius_100.borderRadius};
    width: ${e=>e.size?e.size:"80px"};
    position: relative;
    background: ${e=>e.disabled?a.J2.Grey1.color:"red"===e.background?a.J2.Red.color:"blue"===e.background?a.J2.Blue.color:"black"===e.background?a.J2.Black.color:"grey"===e.background?a.J2.Grey1.color:"white"===e.background?a.J2.White.color:void 0};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${a.Ox.sans_button_200.fontSize};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    color: ${e=>e.isLoading?"transparent":a.J2.White.color};
    margin-top: auto;
    line-height: ${a.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${a.E_.shadow_100.boxShadow};
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
`,o=n.Ay.img`
    width: ${e=>e.iconSize?e.iconSize:"40px"};
    display: flex;
    align-items: center;
    justify-content: center;
`;var l=i(308),r=i(579);const d=e=>{let{isLoading:t,children:i,disabled:n,background:a,src:d,iconSize:c,size:h,...p}=e;return(0,r.jsxs)(s,{...p,background:a,disabled:n,isLoading:t||!1,size:h,children:[t&&(0,r.jsx)(l.A,{height:"14px",color:"white",width:"32px",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),i,!t&&(0,r.jsx)(o,{src:d||"https://d292awxalydr86.cloudfront.net/Universal+icons/Next.svg",alt:"Arrow Btn",iconSize:c})]})}},1340:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(9697),a=i(1852),s=i(3832),o=i(4204),l=i(579);const r=e=>{let{...t}=e;return(0,l.jsx)(n.A,{children:(0,l.jsxs)(s.LZ,{mobileHeight:t.mobileHeight,children:[(0,l.jsx)(a.A,{onClick:t.backBtnOnClick,type:t.backBtnType?t.backBtnType:"Close",desktopTop:32,desktopLeft:32,mobileLeft:24,mobileTop:24,disabled:!!t.backBtnDisabled&&t.backBtnDisabled}),t.noContentWrapper?(0,l.jsx)(l.Fragment,{children:t.children}):(0,l.jsx)(s.Gj,{children:t.children}),!t.noContentWrapper&&(0,l.jsxs)(s.HN,{children:[(0,l.jsx)(s.GO,{onClick:t.cancelBtnOnClick,disabled:!!t.cancelBtnDisabled&&t.cancelBtnDisabled,children:t.cancelBtnText?t.cancelBtnText:"Cancel"}),(0,l.jsx)(o.A,{background:t.continueBtnBgColor?t.continueBtnBgColor:"black",style:{width:"unset"},onClick:t.continueBtnOnClick,isLoading:!!t.continueBtnLoading&&t.continueBtnLoading,disabled:!!t.continueBtnDisabled&&t.continueBtnDisabled,children:t.continueBtnText?t.continueBtnText:"Save"})]})]})})}},3212:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(2119),a=i(4936);const s=n.Ay.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${a.J2.Grey1.color};
    box-shadow:
        22px 0 ${a.J2.Grey1.color},
        -22px 0 ${a.J2.Grey1.color};
    position: relative;
    animation: ${n.i7`
    0% {
      background-color: ${a.J2.White.color};
      box-shadow: 22px 0 ${a.J2.White.color}, -22px 0 ${a.J2.Grey1.color};
    }
    50% {
      background-color: ${a.J2.Grey1.color};
      box-shadow: 22px 0 ${a.J2.White.color}, -22px 0 ${a.J2.White.color};
    }
    100% {
      background-color: ${a.J2.White.color};
      box-shadow: 22px 0 ${a.J2.Grey1.color}, -22px 0 ${a.J2.White.color};
    }
`} 0.5s ease-out infinite alternate;
`;var o=i(579);const l=function(e){return(0,o.jsx)(s,{...e})}},4725:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Sa});var n=i(5043),a=i(7426),s=i(2119),o=i(620),l=i(5475),r=i(1962),d=i(9413),c=i(5067),h=i(4936);const p=s.Ay.div`
    width: 100%;
    max-width: 1600px;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 auto;
        margin-top: 128px;
    }
    @media (min-width: 1024px) {
        width: calc(100% - 160px);
    }
`,g=s.Ay.div`
    width: 100%;
    padding-bottom: 80px;
`,u=s.Ay.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,m=s.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};
    color: ${h.J2.Grey.color};
    margin: 0;
    width: 100%;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
`,x=s.Ay.div`
    margin-left: 24px;
    display: flex;
    align-items: center;
    width: fit-content;
    margin-top: 8px;
    @media (min-width: 768px) {
        margin-left: 0px;
    }
`,y=s.Ay.img`
    width: 14px;
    height: 14px;
    margin-left: 9px;
    cursor: pointer;
`,f=s.Ay.input`
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};
    border: none;
    border-bottom: 1px solid ${h.J2.Grey.color};
    outline: none;
    width: 100%;
`,b=s.Ay.div`
    font-size: ${h.$G.sans_900_bold.fontSize};
    font-weight: ${h.$G.sans_900_bold.fontWeight};
    line-height: ${h.$G.sans_900_bold.lineHeight};
    display: flex;
    align-items: center;
    margin: 0;
    margin-right: auto;
    padding-right: 24px;
    width: 65%;
    position: relative;
    @media (min-width: 1024px) {
        width: 70%;
    }
    @media (min-width: 1200px) {
        width: 75%;
    }
`,$=s.Ay.button`
    display: flex;
    align-items: center;
    font-size: ${h.Ox.sans_button_200.fontSize};
    font-weight: ${h.Ox.sans_button_200.fontWeight};
    height: fit-content;
    gap: ${h.dB.spacing_250.gap};
    border: none;
    line-height: ${h.Ox.sans_button_200.lineHeight};
    background-color: transparent;
    border-radius: 9px;
    height: 48px;
    justify-content: center;
    padding: 0 24px;
    margin-right: 12px;
    margin-top: -12px;
    cursor: pointer;
    &:hover {
        background-color: ${h.J2.Grey5.color};
    }
`,v=s.Ay.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${e=>e.selected?h.J2.Green.color:h.J2.Red1.color};
`,w=s.Ay.button`
    padding: 0 32px;
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${h.Ox.sans_button_200.fontSize};
    font-weight: ${h.Ox.sans_button_200.fontWeight};
    border: none;
    line-height: ${h.Ox.sans_button_200.lineHeight};
    background: none;
    border: 1px solid ${h.J2.Black.color};
    margin-top: -12px;
    cursor: pointer;
`,C=s.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    gap: ${h.dB.spacing_400.gap};
    margin: 0 24px;
    padding-top: 64px;

    @media (min-width: 768px) {
        display: none;
    }
`,k=s.Ay.p`
    font-size: ${h.$G.sans_900_semi.fontSize};
    font-weight: ${h.$G.sans_900_semi.fontWeight};
    line-height: ${h.$G.sans_900_semi.lineHeight};
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
        margin-left: 24px;
    }
`,j=(s.Ay.div`
    height: 100px;
    border-radius: ${h.Qk.radius_8.borderRadius};
    overflow: hidden;
`,s.Ay.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
`),_=s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    border-bottom: 1px solid ${h.J2.Grey2.color};
    @media (min-width: 768px) {
        width: 100%;
    }
`,A=s.Ay.div`
    width: calc(100% + 48px);
    margin-left: -24px;
    padding: 0 24px;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    gap: ${h.dB.spacing_400.gap};
    padding-top: 48px;

    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        width: 100%;
        margin-left: 0;
        padding-left: 0;
        padding-right: 0;
    }
`,S=s.Ay.p`
    margin: 0;
    padding-bottom: 16px;
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    min-width: fit-content;
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    color: ${e=>e.selected?h.J2.Black.color:h.J2.Grey.color};
    border-bottom: ${e=>e.selected?`2px solid ${h.J2.Black.color}`:"none"};
    cursor: pointer;
`,G=s.Ay.div`
    width: calc(100% - 48px);
    height: 100%;
    margin: ${h.dB.spacing_600.margin} ${h.dB.spacing_400.margin} 0;
    display: flex;
    flex-direction: row;
    gap: ${h.dB.spacing_400.gap};
    flex-wrap: wrap;

    @media (min-width: 768px) {
        width: 100%;
        margin: ${h.dB.spacing_600.margin} 0 0;
    }
`,B=s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 100%;
        margin: 0;
    }
`,D=s.Ay.div`
    width: 100%;
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        margin-top: 0px;
        margin-bottom: 24px;
    }
`,z=s.Ay.div`
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`,T=s.Ay.p`
    font-size: ${h.$G.sans_500_semi.fontSize};
    line-height: ${h.$G.sans_500_semi.lineHeight};
    font-weight: ${h.$G.sans_500_semi.fontWeight};
    margin: 0;
`,I=s.Ay.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    cursor: pointer;
    padding: 0;
`,R=s.Ay.div`
    border-bottom: 1px solid ${h.J2.Grey2.color};
    @media (min-width: 768px) {
        margin-top: 48px;
    }
`,L=s.Ay.div`
    margin-left: -24px;
    height: 128px;
    overflow-x: scroll;
    display: flex;
    margin: ${h.dB.spacing_300.margin} 0;
    flex-direction: row;
    gap: ${h.dB.spacing_200.gap};
    margin-bottom: 12px;

    //scroll images left and right overflow
    width: calc(100% + 48px);
    padding: 0 24px;
    margin-left: -24px;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        width: 100%;
        height: 160px;
        margin-bottom: 24px;
        padding: 0;
        margin-left: 0;
    }
`,O=s.Ay.div`
    height: 100%;
    min-width: 192px;
    /* max-height: 200px; */
    width: 100%;
    border-radius: 9px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    aspect-ratio: 3/2;
    cursor: pointer;

    @media (min-width: 768px) {
        min-width: 240px;
    }
`,J=s.Ay.img`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 160px;
    }
`,P=s.Ay.div`
    display: flex;
    flex-direction: row;
    gap: ${h.dB.spacing_400.gap};
    margin-bottom: 12px;
    //scroll images left and right overflow
    overflow-x: scroll;
    padding-top: 10px;
    margin-top: -10px;

    width: calc(100% + 48px);
    padding-left: 24px;
    padding-right: 24px;
    margin-left: -24px;

    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding-right: 10px;
        padding-left: 5px;
        margin-left: -5px;
        width: calc(100% + 10px);
        margin-bottom: 24px;
    }
`,W=s.Ay.div`
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_300.gap};
    cursor: pointer;
    @media (min-width: 768px) {
        width: 180px;
    }
`,H=(s.Ay.div`
    box-shadow: ${h.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 128px;
    box-sizing: border-box;
    border: 2px solid ${h.J2.White.color};
    border-radius: ${h.Qk.radius_12.borderRadius};

    @media (min-width: 768px) {
        width: 180px;
        height: 180px;
        border: 4px solid ${h.J2.White.color};
        border-radius: 14px;
    }
`,s.Ay.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${h.Qk.radius_12.borderRadius};
    @media (min-width: 768px) {
        border-radius: 14px;
    }
`,s.Ay.img`
    width: 24px;
    height: 24px;
`,s.Ay.p`
    width: 100%;
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`),N=s.Ay.img`
    height: 16px;
    width: 16px;
`,U=s.Ay.img`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,M=s.Ay.button`
    height: 32px;
    width: 32px;
    z-index: 2;
    background: none;
    border: none;
    margin: ${h.dB.spacing_300.margin};
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${h.J2.White.color};
    font-size: ${h.Ox.sans_button_200.fontSize};
    border-radius: ${h.Qk.radius_8.borderRadius};
    font-weight: ${h.Ox.sans_button_200.fontWeight};
    line-height: ${h.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    box-shadow: ${h.E_.shadow_100.boxShadow};
`,E=s.Ay.div`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    height: 32px;
    background: ${h.J2.White.color};
    font-size: ${h.$G.sans_300_semi.fontSize};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
    z-index: 2;
    padding: 0 16px;
    margin: ${h.dB.spacing_300.margin};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${h.Qk.radius_8.borderRadius};
    box-shadow: ${h.E_.shadow_100.boxShadow};
`,F=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,K=s.Ay.p`
    font-size: ${h.$G.sans_500_semi.fontSize};
    line-height: ${h.$G.sans_500_semi.lineHeight};
    font-weight: ${h.$G.sans_500_semi.fontWeight};
    margin-top: 20px;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        margin-top: 36px;
        margin-bottom: 20px;
    }
`,V=s.Ay.div`
    margin-top: 24px;
`,q=s.Ay.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${h.dB.spacing_250.padding};
    &:hover {
        background-color: ${h.J2.Grey5.color};
    }
`,Q=s.Ay.div`
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    cursor: pointer;
`,Y=s.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};
    margin: 0;
    margin-bottom: 16px;
`,Z=s.Ay.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    cursor: pointer;
    padding: 0;
`,X=s.Ay.p`
    cursor: pointer;
    width: 100%;
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    color: ${h.J2.Grey.color};
    line-height: ${h.$G.sans_300.lineHeight};
    margin: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid ${h.J2.Grey2.color};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ee=(s.Ay.button`
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${e=>e.selected?h.J2.Blue.color:h.J2.Yellow.color};
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    color: ${h.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: 24px;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`,s.Ay.div`
    width: 100%;

    /* Fixed height needs to go */
    /* height: ${e=>0===e.selected?"1328px":1===e.selected?"816px":2===e.selected?"871px":"964px"};

    @media (min-width: 768px) {
        height: ${e=>0===e.selected?"fit-content":1===e.selected?"916px":2===e.selected?"1090px":"1300px"};
    } */
`),te=s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 100%;
        margin: 0;
    }
`,ie=s.Ay.div`
    width: 100%;
    display: flex;
    align-items: flex-end;

    @media (min-width: 768px) {
        min-height: unset;
        height: unset;
    }
`,ne=s.Ay.p`
    position: relative;
    font-size: ${h.$G.sans_900_semi.fontSize};
    font-weight: ${h.$G.sans_900_semi.fontWeight};
    line-height: ${h.$G.sans_900_semi.lineHeight};
    padding-right: 16px;
    margin: 0 auto;
`,ae=(s.Ay.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
    cursor: pointer;
`,s.Ay.p`
    font-size: ${h.$G.sans_900_semi.fontSize};
    font-weight: ${h.$G.sans_900_semi.fontWeight};
    line-height: ${h.$G.sans_900_semi.lineHeight};
    margin-bottom: 12px;
    text-align: left;
`),se=s.Ay.p`
    font-size: ${h.$G.sans_600_semi.fontSize};
    font-weight: ${h.$G.sans_600_semi.fontWeight};
    line-height: ${h.$G.sans_600_semi.lineHeight};
    margin-top: 8px;
    margin-bottom: 16px;
    margin-right: auto;
    text-align: center;
`,oe=s.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};
    line-height: ${h.$G.sans_400.lineHeight};
    color: ${e=>e.invalid?h.J2.Red1.color:h.J2.Grey.color};
    margin: 0 0 32px;
    text-align: left;
    max-width: 480px;

    strong {
        font-weight: ${h.$G.sans_200_semi.fontWeight};
    }
`,le=s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    margin-top: 0;
    margin-bottom: 32px;
    text-align: left;
    max-width: calc(100% - 48px);

    strong {
        font-weight: ${h.$G.sans_300_semi.fontWeight} !important;
    }

    @media (min-width: 768px) {
        font-size: ${h.$G.sans_400.fontSize};
        line-height: ${h.$G.sans_400.lineHeight};
        max-width: calc(100% - 88px);
    }
`,re=s.Ay.input`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${h.J2.Grey1.color};
    padding-left: 16px;
    outline: none;
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};
`,de=s.Ay.div`
    width: 100%;
    margin-bottom: 96px;
    color: ${h.J2.Red1.color};
    font-size: 12px;
    text-align: left;
    margin-top: 8px;
`,ce=s.Ay.p`
    text-align: left;
    margin-left: auto;
    font-size: ${h.$G.sans_300_semi.fontSize};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
    margin-top: 12px;
    margin-bottom: 64px;

    @media (min-width: 768px) {
        margin-right: 0px;
    }
`,he=s.Ay.input`
    min-height: 128px;
    width: 100%;
    border: none;
    text-align: center;
    outline: none;
    font-size: ${h.$G.sans_1200_semi.fontSize};
    font-weight: ${h.$G.sans_1200_semi.fontWeight};
    line-height: ${h.$G.sans_1200_semi.lineHeight};

    @media (min-width: 768px) {
    }
`,pe=s.Ay.textarea`
    height: ${e=>e.height?e.height:"240px"};
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${h.J2.Grey2.color};
    padding: ${h.dB.spacing_300.padding};
    outline: none;
    font-size: ${h.so.sans_text_300.fontSize};
    font-weight: ${h.so.sans_text_300.fontWeight};
    line-height: ${h.so.sans_text_300.lineHeight};
    resize: none;
    ${e=>e.margin?`margin: ${e.margin};`:""}

    @media (min-width: 768px) {
        width: 100%;
    }
`,ge=((0,s.Ay)(r.A)`
    height: 16px;
    width: 16px;
    border-radius: 3px;
    border: 1px solid ${h.J2.Grey.color};

    @media (min-width: 768px) {
        height: 22px;
        width: 22px;
        border-radius: ${h.Qk.radius_4.borderRadius};
    }
`,(0,s.Ay)(d.A)`
    position: relative;
    align-self: center;
    height: 140px;
    width: calc(100% - 48px);
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: calc(100% - 96px);
    }
`,(0,s.Ay)(c.A)`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    padding-bottom: 8px;

    & span {
        padding-left: 12px;
        @media (min-width: 768px) {
            padding-left: 18px;
        }
    }

    @media (min-width: 768px) {
        font-size: ${h.$G.sans_400.fontSize};
        line-height: ${h.$G.sans_400.lineHeight};
    }
`,s.Ay.div`
    background: ${h.J2.White.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    margin-top: auto;

    @media (min-width: 768px) {
        border: none;
    }
`,s.Ay.button`
    background: none;
    border: none;
    text-decoration: underline;
    font-size: ${h.Ox.sans_button_200.fontSize};
    line-height: ${h.Ox.sans_button_200.lineHeight};
    font-weight: ${h.Ox.sans_button_200.fontWeight};
    cursor: pointer;
    padding: 0;
`,s.Ay.div`
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${h.J2.Grey1.color};
    margin-bottom: 12px;
`),ue=s.Ay.div`
    padding: 9px 16px;
    border-bottom: 1px solid ${h.J2.Grey1.color};
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:last-child {
        border: none;
    }
`,me=s.Ay.div`
    font-size: ${h.$G.sans_200.fontSize};
    font-weight: ${h.$G.sans_200.fontWeight};
    line-height: ${h.$G.sans_200.lineHeight};
    color: ${h.J2.Grey.color};
    margin-bottom: 2px;
`,xe=s.Ay.input`
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};
    line-height: ${h.$G.sans_400.lineHeight};
    color: ${h.J2.Black.color};
    outline: none;
    border: none;
`,ye=s.Ay.p`
    font-size: ${h.$G.sans_300_med.fontSize};
    font-weight: ${h.$G.sans_300_med.fontWeight};
    line-height: ${h.$G.sans_300_med.lineHeight};
    margin-bottom: 66px;
    text-align: left;
    color: ${e=>!0===e.success?h.J2.Green.color:!1===e.success?h.J2.Red2.color:"transparent"};
    margin-right: auto;
    height: 18px;
`,fe=(s.Ay.button`
    background: none;
    border: none;
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    color: ${h.J2.White.color};
    background: ${h.J2.Blue.color};
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 32px;

    @media (min-width: 768px) {
        font-size: ${h.Ox.sans_button_200.fontSize};
        line-height: ${h.Ox.sans_button_200.lineHeight};
        padding: 0 32px;
    }
`,(0,s.Ay)(l.N_)`
    background: none;
    border: none;
    font-size: ${h.$G.sans_300_bold.fontSize};
    font-weight: ${h.$G.sans_300_bold.fontWeight};
    color: ${h.J2.White.color};
    line-height: ${h.$G.sans_300_bold.lineHeight};
    background: ${h.J2.Blue.color};
    height: 50px;
    width: 160px;
    border-radius: 9px;
    text-decoration: none;
    margin: ${h.dB.spacing_400.margin} 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;

    @media (min-width: 768px) {
        max-width: 104px;
    }
`,s.Ay.div`
    margin-top: 24px;
    width: 100%;
`),be=s.Ay.div`
    width: 100%;
    max-height: 150px;

    .select-add-room__menu {
        z-index: 11;
    }
`,$e=s.Ay.p`
    width: 100%;
    text-align: left;
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    margin-top: 12px;
    margin-bottom: 0;
`,ve=s.Ay.p`
    width: 100%;
    text-align: left;
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    margin-top: 12px;
    margin-bottom: 64px;
`,we=s.Ay.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${h.dB.spacing_300.gap};
    justify-content: start;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        gap: ${h.dB.spacing_400.gap};
    }
`,Ce=s.Ay.button`
    background: none;
    margin: 0;
    padding: 0;
    border: ${e=>e.selected?`1px solid ${h.J2.Black.color}`:`1px solid ${h.J2.Grey1.color}`};
    outline: ${e=>e.selected?`1px solid ${h.J2.Black.color}`:null};
    border-radius: ${h.Qk.radius_12.borderRadius};
    width: calc(50% - 9px);
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 133px;
        width: calc(50% - 13px);
    }
`,ke=s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${h.$G.sans_400.fontSize};
        line-height: ${h.$G.sans_400.lineHeight};
    }
`,je=s.Ay.span`
    height: 12px;
    width: 12px;
    margin-right: 12px;
    border-radius: 50%;
    background: ${h.J2.Green.color};
    content: "";
`,_e=s.Ay.img`
    height: 24px;
    width: 24px;
    margin-top: 24px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
        margin-top: 32px;
        margin-bottom: 12px;
    }
`,Ae=s.Ay.div`
    width: 100%;
    outline: none;
    position: relative;
`,Se=s.Ay.button`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${h.J2.Grey3.color};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 16px;
`,Ge=s.Ay.img`
    height: 10px;
    width: 10px;
`,Be=(0,s.Ay)(o.default)`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: ${h.$G.sans_400_med.fontSize};
    font-weight: ${h.$G.sans_400_med.fontWeight};
    line-height: ${h.$G.sans_400_med.lineHeight};
    border: none;
    outline: none;
    width: 100%;
    padding-right: 50px;

    &::placeholder {
        color: ${h.J2.Grey1.color};
    }
`,De=s.Ay.div`
    width: 100%;
`,ze=s.Ay.button`
    background: none;
    border: ${e=>e.selected?`1px solid ${h.J2.Black.color}`:`1px solid ${h.J2.Grey1.color}`};
    outline: ${e=>e.selected?`1px solid ${h.J2.Black.color}`:null};
    border-radius: ${h.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    width: 98%;
    margin-left: 2px;
    padding: ${h.dB.spacing_400.padding};
    margin-bottom: 16px;
    cursor: pointer;
`,Te=s.Ay.button`
    background: none;
    border: ${e=>e.selected?`1px solid ${h.J2.Red1.color}`:`1px solid ${h.J2.Grey1.color}`};
    outline: ${e=>e.selected?`1px solid ${h.J2.Red1.color}`:null};
    border-radius: ${h.Qk.radius_12.borderRadius} !important;
    display: flex;
    flex-direction: column;
    width: 98%;
    margin-left: 2px;
    padding: ${h.dB.spacing_400.padding};
    margin-bottom: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin-bottom: 20px;
    }
`,Ie=s.Ay.span`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    margin: 0;
    margin-right: 12px;
    background: ${e=>e.active?h.J2.Green.color:h.J2.Red1.color};
    content: "";
`,Re=s.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    margin: 0;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    text-align: center;
`,Le=s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    text-align: left;
    line-height: ${h.$G.sans_300.lineHeight};
    color: ${h.J2.Grey.color};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${h.$G.sans_400.fontSize};
        line-height: ${h.$G.sans_400.lineHeight};
    }
`,Oe=(s.Ay.div`
    height: 65px;
    width: calc(100% - 48px);
    border-bottom: 1px solid ${h.J2.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`,s.Ay.p`
    font-size: ${h.$G.sans_300_semi.fontSize};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
    margin: 0;
`,s.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin-top: 96px;
    margin-bottom: 48px;
`,s.Ay.p`
    font-size: ${h.$G.sans_600_bold.fontSize};
    font-weight: ${h.$G.sans_600_bold.fontWeight};
    line-height: ${h.$G.sans_600_bold.lineHeight};
    margin: 0;
`,s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    margin: 0;
    text-align: center;
    max-width: 250px;
    margin-top: 16px;
    margin-bottom: 248px;
`,s.Ay.div`
    width: calc((100% - 4 * 32px) / 5);
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_300.gap};
`),Je=s.Ay.div`
    width: calc(100% + 32px);
    display: flex;
    flex-wrap: wrap;
    gap: ${h.dB.spacing_500.gap};
    overflow-y: scroll;
    padding: ${h.dB.spacing_300.padding};
    margin: -16px;
    ::-webkit-scrollbar {
        display: none;
    }
`,Pe=s.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,We=(s.Ay.p`
    font-size: ${h.$G.sans_200.fontSize};
    font-weight: ${h.$G.sans_200.fontWeight};
    color: ${e=>e.added?h.J2.Grey.color:h.J2.Blue.color};
    line-height: ${h.$G.sans_200.lineHeight};
    margin: 0;
    margin-left: 16px;
`,s.Ay.div`
    width: 100%;
    /* margin: 0 auto; */
    /* margin-top: 4px; */
    /* margin-bottom: 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`),He=s.Ay.p`
    font-size: ${h.$G.sans_900_semi.fontSize};
    line-height: ${h.$G.sans_900_semi.lineHeight};
    font-weight: ${h.$G.sans_900_semi.fontWeight};
`,Ne=s.Ay.button`
    display: none;

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
    }
`,Ue=s.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-top: 24px;
    margin-bottom: 32px;
    gap: ${h.dB.spacing_250.gap};
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`,Me=s.Ay.div`
    background: none;
    height: 40px;
    padding: 0 16px;
    border: 1px solid ${h.J2.Grey1.color};
    box-sizing: border-box;
    border-radius: ${h.Qk.radius_100.borderRadius};
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    color: ${h.J2.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
`,Ee=s.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${h.dB.spacing_400.gap};
    margin: ${h.dB.spacing_600.margin} 0 ${h.dB.spacing_300.margin};
    padding: 0 24px;
    @media (min-width: 768px) {
        margin: ${h.dB.spacing_600.margin} 0 ${h.dB.spacing_400.margin};
    }
`,Fe=s.Ay.p`
    margin: 0 auto;
    font-size: ${h.$G.sans_600_bold.fontSize};
    font-weight: ${h.$G.sans_600_bold.fontWeight};
    line-height: ${h.$G.sans_600_bold.lineHeight};
    text-align: center;
`,Ke=s.Ay.p`
    margin: 0 auto;
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    max-width: 240px;
    text-align: center;
`,Ve=s.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,qe=s.Ay.img`
    height: 64px;
    width: 64px;
    margin: 0 auto;
    object-fit: cover;
`,Qe=(s.Ay.div`
    width: 100%;
    background: ${h.J2.White.color};
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    left: 0;
    bottom: 0;
`,s.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 1px;
    background: ${h.J2.Grey2.color};
`,s.Ay.button`
    width: calc(100% - 48px);
    height: 48px;
    font-size: ${h.Ox.sans_button_200.fontSize};
    line-height: ${h.Ox.sans_button_200.lineHeight};
    margin: ${h.dB.spacing_300.margin} auto;
    font-weight: ${h.Ox.sans_button_200.fontWeight};
    color: ${h.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    border: none;
    background: ${h.J2.Blue.color};
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`,s.Ay.p`
    font-size: ${h.$G.sans_700_bold.fontSize};
    line-height: ${h.$G.sans_700_bold.lineHeight};
    font-weight: ${h.$G.sans_700_bold.fontWeight};
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 12px;
    max-width: 320px;
    text-align: center;
`),Ye=s.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};
    margin: 0 auto;
    max-width: 240px;
    text-align: center;
    margin-bottom: 170px;
`,Ze=s.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_300.gap};
    margin-top: 24px;

    @media (min-width: 768px) {
        display: grid !important;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
    }
`,Xe=s.Ay.div`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    color: ${h.J2.Grey.color};
    background: none;
    min-width: 100%;
    height: 96px;
    border: 1px dashed ${h.J2.Grey1.color};
    border-radius: ${h.Qk.radius_12.borderRadius};
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`,et=s.Ay.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;

    //hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
`,tt=(s.Ay.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`,s.Ay.div`
    height: 54px;
    width: 100%;
    margin-top: 32px;
    margin: 0 auto;
    margin-bottom: 12px;
    padding: 0 8px 0 16px;
    border-radius: 9px;
    border: 1px solid ${h.J2.Grey1.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
`),it=s.Ay.input`
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};
    width: 70%;
    z-index: 10;
    border: none;
    outline: none;
    overflow: scroll;
    @media (min-width: 768px) {
        width: 80%;
    }

    &::placeholder {
        color: ${h.J2.Grey1.color};
    }
`,nt=s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 10;
    border: none;
    outline: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 70%;
    overflow: hidden;

    &::placeholder {
        color: ${h.J2.Grey1.color};
    }
`,at=s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    margin: 0;
    line-height: ${h.$G.sans_300.lineHeight};
    text-align: left;
    margin-right: auto;
    margin-bottom: 32px;
`,st=s.Ay.button`
    height: 38px !important;
    width: 83px !important;
    border-radius: ${h.Qk.radius_8.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${h.J2.White.color};
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    border: none;
    background: ${h.J2.Blue.color};
    text-decoration: none;
    cursor: pointer;
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 11;
    margin-left: auto;
`,ot=s.Ay.div`
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 16px;
    cursor: pointer;
    border: 1px solid ${h.J2.Grey1.color};
    border-radius: 9px;
    background: none;
    text-decoration: none;
    margin-bottom: 16px;
`,lt=s.Ay.p`
    z-index: 10;
    font-size: ${h.$G.sans_300_semi.fontSize};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
    overflow: scroll;
    width: 80%;
    white-space: nowrap;
    //hide scroll bar
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        width: 85%;
    }
`,rt=s.Ay.p`
    z-index: 11;
    height: 21px;
    width: 21px;
    border-radius: 50%;
    display: flex;
    align-items: enter;
    background: ${h.J2.Grey3.color};
    justify-content: center;
    margin-left: auto;
`,dt=s.Ay.div`
    width: 100%;
    margin-bottom: 24px;
    height: 200px;
`,ct=s.Ay.button`
    height: 32px;
    width: 32px;
    z-index: 2;
    background: none;
    border: none;
    margin: ${h.dB.spacing_300.margin};
    margin-right: 56px;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${h.J2.White.color};
    font-size: ${h.Ox.sans_button_200.fontSize};
    border-radius: ${h.Qk.radius_8.borderRadius};
    font-weight: ${h.Ox.sans_button_200.fontWeight};
    line-height: ${h.Ox.sans_button_200.lineHeight};
    cursor: grab;
    touch-action: none;
`,ht=s.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    background-color: ${h.J2.White.color};
    box-shadow: ${h.E_.shadow_100.boxShadow};
    border-radius: 9px;
    padding: 0 24px;
    width: fit-content;
`,pt=s.Ay.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`,gt=s.Ay.input`
    height: 80px;
    border-radius: 9px;
    border-color: transparent;
    outline: none;
    font-size: ${h.$G.sans_1300_bold.fontSize};
    line-height: ${h.$G.sans_1300_bold.lineHeight};
    font-weight: ${h.$G.sans_1300_bold.fontWeight};
    text-align: center;

    @media (min-width: 768px) {
        font-size: 72px;
        line-height: 80;
    }
`,ut=s.Ay.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 38px;
    font-size: ${h.$G.sans_500_semi.fontSize};
    font-weight: ${h.$G.sans_500_semi.fontWeight};
    line-height: ${h.$G.sans_500_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 31px;
    }
`,mt=s.Ay.p`
    width: 174px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 12px;
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};

    @media (min-width: 768px) {
        margin-top: 8px;
    }
`,xt=s.Ay.div`
    position: fixed;
    width: 100dvw;
    height: 100dvh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
`,yt=s.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,ft=s.Ay.p`
    margin: ${h.dB.spacing_600.margin} 0 ${h.dB.spacing_500.margin};
    font-size: ${h.$G.sans_800_semi.fontSize};
    font-weight: ${h.$G.sans_800_semi.fontWeight};
    line-height: ${h.$G.sans_800_semi.lineHeight};
    color: ${h.J2.White.color};
`,bt=s.Ay.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${h.J2.Black.color};
    padding: 14px 32px;
    border-radius: 9px;
    cursor: pointer;
`,$t=s.Ay.p`
    color: ${h.J2.White.color};
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};
`,vt=s.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${h.dB.spacing_500.gap};
    margin-top: 32px;
    @media (min-width: 768px) {
        margin-top: 48px;
    }
`,wt=s.Ay.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    object-fit: contain;
    padding: ${h.dB.spacing_300.padding};
`,Ct=s.Ay.img`
    width: 24px;
    height: 24px;
`,kt=s.Ay.button`
    display: ${e=>e.subPageIndex<2?"none":"flex"};
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: transparent;
    border: 1px solid ${h.J2.Grey1.color};
    border-radius: 50%;
    position: absolute;
    left: 24px;
    top: 24px;
    cursor: pointer;
    &:hover {
        background: ${h.J2.Grey5.color};
    }
    @media (min-width: 768px) {
        left: 32px;
        top: 32px;
        width: 40px;
        height: 40px;
    }
`,jt=s.Ay.div`
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.2s;
    &:after {
        position: absolute;
        display: block;
        content: "";
        width: 11px;
        height: 11px;
        top: -3.33px;
        border-bottom: solid 1px ${h.J2.Black.color};
        transform: translatex(3.55px);
    }

    &:before {
        position: absolute;
        display: block;
        content: "";
        width: 7.5px;
        height: 7.5px;
        border-top: solid 1px ${h.J2.Black.color};
        border-left: solid 1px ${h.J2.Black.color};
        top: 50%;
        left: 2px;
        transform-origin: 0% 0%;
        transform: rotatez(-45deg);
    }
`,_t=(s.Ay.div`
    position: fixed;
    width: 100%;
    height: 98%;
    bottom: 0;
    left: 0;
    border-radius: ${h.Qk.radius_16.borderRadius} 16px 0 0;
    box-shadow: ${h.E_.shadow_300.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${h.J2.White.color};
    z-index: 102;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        border-radius: unset;
        height: 100%;
    }
`,s.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 36px 24px 16px;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        width: 50%;
        min-width: 720px;
        padding: ${h.dB.spacing_800.padding};
    }
`,s.Ay.p`
    font-size: ${h.$G.sans_600_semi.fontSize};
    line-height: ${h.$G.sans_600_semi.lineHeight};
    font-weight: ${h.$G.sans_600_semi.fontWeight};
    margin: 0;
    text-align: center;
    @media (min-width: 768px) {
        font-size: ${h.$G.sans_1000_semi.fontSize};
        line-height: ${h.$G.sans_1000_semi.lineHeight};
        font-weight: ${h.$G.sans_1000_semi.fontWeight};
        text-align: left;
    }
`),At=s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    color: ${h.J2.Grey.color};
    margin: ${h.dB.spacing_200.margin} 0 16px;
    text-align: center;
    @media (min-width: 768px) {
        font-size: ${h.$G.sans_500.fontSize};
        font-weight: ${h.$G.sans_500.fontWeight};
        line-height: ${h.$G.sans_500.lineHeight};
        margin: ${h.dB.spacing_250.margin} 0 ${h.dB.spacing_500.margin};
        text-align: left;
    }
`,St=(s.Ay.div`
    position: fixed;
    width: 100%;
    height: ${e=>e.mobileHeight?e.mobileHeight:"98%"};
    bottom: 0;
    left: 0;
    border-radius: ${h.Qk.radius_16.borderRadius} 16px 0 0;
    box-shadow: ${h.E_.shadow_300.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${h.J2.White.color};
    z-index: 102;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        border-radius: unset;
        height: 100%;
    }
`,s.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 36px 24px 16px;
    ${e=>e.paddingTop?`padding-top: ${e.paddingTop};`:null}

    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        padding: ${h.dB.spacing_800.padding};
    }
`),Gt=(s.Ay.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: ${h.dB.spacing_600.padding} ${h.dB.spacing_400.padding} ${h.dB.spacing_300.padding};
    @media (min-width: 768px) {
        padding: ${h.dB.spacing_1000.padding} 0 ${h.dB.spacing_300.padding};
        width: 640px;
    }
`,s.Ay.h1`
    font-size: ${h.$G.sans_500_semi.fontSize};
    font-weight: ${h.$G.sans_500_semi.fontWeight};
    line-height: ${h.$G.sans_500_semi.lineHeight};
    margin-bottom: ${e=>e.marginBottom?e.marginBottom:"24px"};
    text-align: center;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
        text-align: left;
        font-size: ${h.$G.sans_900_semi.fontSize};
        font-weight: ${h.$G.sans_900_semi.fontWeight};
        line-height: ${h.$G.sans_900_semi.lineHeight};
        margin-bottom: ${e=>e.marginBottom?e.marginBottom:"32px"};
    }
`),Bt=s.Ay.p`
    height: 48px;
    width: 100%;
    background: ${h.J2.Grey3.color};
    color: ${h.J2.Grey.color};
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    border-radius: 10px;
`,Dt=s.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_300.gap};
    margin-bottom: 16px;
    @media (min-width: 768px) {
        gap: ${h.dB.spacing_400.gap};
    }
`,zt=s.Ay.p`
    font-size: ${h.$G.sans_300_semi.fontSize};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    margin-top: 12px;
    text-align: right;
`,Tt=s.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    text-align: center;
    margin-bottom: 14px;
    @media (min-width: 768px) {
        text-align: left;
        font-size: ${h.$G.sans_500.fontSize};
        font-weight: ${h.$G.sans_500.fontWeight};
        color: ${h.J2.Grey.color};
        line-height: ${h.$G.sans_500.lineHeight};
    }
`,It=s.Ay.div`
    padding-top: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,Rt=s.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};

    @media (min-width: 768px) {
        font-size: ${h.$G.sans_500_semi.fontSize};
        line-height: ${h.$G.sans_500_semi.lineHeight};
        font-weight: ${h.$G.sans_500_semi.fontWeight};
    }
`,Lt=s.Ay.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: ${h.dB.spacing_250.gap};
`,Ot=s.Ay.div`
    height: 35px;
    width: 35px;
    background: ${h.J2.White.color};
    border-radius: 50%;
    color: ${e=>e.disabled?`${h.J2.Grey2.color}`:`${h.J2.Black.color}`};
    font-size: ${h.$G.sans_700_semi.fontSize};
    line-height: ${h.$G.sans_700_semi.lineHeight};
    font-weight: ${h.$G.sans_700_semi.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${e=>e.disabled?`1px solid ${h.J2.Grey2.color}`:`1px solid ${h.J2.Grey1.color}`};
    ${e=>e.disabled?"pointer-events: none;":null}
`,Jt=s.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`,Pt=s.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    margin: ${h.dB.spacing_500.margin} 0 ${h.dB.spacing_400.margin};
    @media (min-width: 768px) {
        margin: ${h.dB.spacing_600.margin} 0 ${h.dB.spacing_400.margin};
        font-size: ${h.$G.sans_700_semi.fontSize};
        line-height: ${h.$G.sans_700_semi.lineHeight};
        font-weight: ${h.$G.sans_700_semi.fontWeight};
    }
`,Wt=s.Ay.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${h.dB.spacing_400.gap};
`,Ht=s.Ay.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`,Nt=s.Ay.div`
    width: calc(100% + 32px);
    display: flex;
    flex-wrap: wrap;
    padding: ${h.dB.spacing_300.padding};
    margin: -16px;
    overflow: hidden scroll;
    gap: ${h.dB.spacing_300.gap};
`,Ut=s.Ay.div`
    width: calc((100% - 16px) / 2);
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_250.gap};
`,Mt=s.Ay.p`
    width: 90%;
    font-size: ${h.$G.sans_350_semi.fontSize};
    line-height: ${h.$G.sans_350_semi.lineHeight};
    font-weight: ${h.$G.sans_350_semi.fontWeight};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,Et=s.Ay.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    right: 24px;
    bottom: 24px;
`,Ft=s.Ay.p`
    font-size: ${h.$G.sans_1000_semi.fontSize};
    font-weight: ${h.$G.sans_1000_semi.fontWeight};
    line-height: ${h.$G.sans_1000_semi.lineHeight};
    margin-top: 8px;
    margin-bottom: 12px;
    text-align: start;
`,Kt=s.Ay.p`
    font-size: ${h.$G.sans_500.fontSize};
    font-weight: ${h.$G.sans_500.fontWeight};
    line-height: ${h.$G.sans_500.lineHeight};
    width: 100%;
    color: ${h.J2.Grey.color};
    margin-bottom: 32px;
    text-align: start;
`,Vt=s.Ay.input`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${h.J2.Grey1.color};
    padding-left: 16px;
    outline: none;
    margin-bottom: 32px;
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};
`,qt=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    gap: ${h.dB.spacing_500.gap};
    @media (min-width: 768px) {
        gap: ${h.dB.spacing_600.gap};
    }
`,Qt=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Yt=s.Ay.div`
    width: 100%;
    aspect-ratio: 4/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${h.dB.spacing_400.gap};
    box-shadow: ${h.E_.shadow_100.boxShadow};
    border-radius: ${h.Qk.radius_12.borderRadius};
`,Zt=s.Ay.button`
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${h.J2.Grey5.color};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`,Xt=s.Ay.img`
    width: 16px;
    height: 16px;
`,ei=s.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${h.dB.spacing_300.gap};
    @media (min-width: 768px) {
        gap: ${h.dB.spacing_400.gap};
    }
`,ti=s.Ay.div`
    width: calc((100% - 16px * 3) / 2);
    & .mbsc-windows.mbsc-textfield-wrapper {
        margin: 0;
        input {
            height: 80px;
            border-radius: 10px;
            text-align: center;
            @media (min-width: 768px) {
                height: 96px;
                font-size: ${h.$G.sans_1300_semi.fontSize};
                line-height: ${h.$G.sans_1300_semi.lineHeight};
                font-weight: ${h.$G.sans_1300_semi.fontWeight};
                ::placeholder {
                    text-align: left;
                    position: relative;
                    transform: translateY(-50%);
                    font-size: ${h.$G.sans_900.fontSize};
                    line-height: ${h.$G.sans_900.lineHeight};
                    font-weight: ${h.$G.sans_900.fontWeight};
                }
            }
        }
    }
    @media (min-width: 768px) {
        width: calc((100% - 24px * 3) / 2);
        height: 96px;
    }
`,ii=s.Ay.div`
    width: 16px;
    height: 1px;
    background: ${h.J2.Grey.color};
    @media (min-width: 768px) {
        width: 24px;
    }
`;var ni=i(9856),ai=i(9082),si=i(831),oi=i(579);function li(e){let{internalName:t,setInternalName:i,listingID:s}=e;const[o,l]=(0,si.useRecoilState)(ai.H),[r,d]=(0,n.useState)(""),[c,h]=(0,n.useState)(!1),p=(0,ni.A)(c,(async()=>{r!==t?await g(r):h(!1)}));(0,n.useEffect)((()=>{null!==t&&d(t)}),[t]);const g=async e=>{await(0,a.p)("post","dev-anystay-listing","listing/internal-name",{headers:{Authorization:o,listingid:s},body:{internalName:e}}).then((async t=>{i(e),h(!1)})).catch((e=>console.log(e)))};return(0,oi.jsx)(x,{ref:p,children:c?(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsx)(f,{type:"text",value:r,onChange:e=>{d(e.target.value)},onKeyDown:async e=>{"Enter"===e.key&&(r!==t?await g(r):h(!1))},placeholder:"Add internal name",maxLength:100})}):(0,oi.jsxs)(oi.Fragment,{children:[(0,oi.jsx)(m,{children:r||"Add internal name"}),(0,oi.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Edit.svg",alt:"Internal edit icon",onClick:()=>{h(!0)}})]})})}var ri=i(6879);const di=s.Ay.div`
    border-radius: ${e=>e.borderRadius?e.borderRadius:h.Qk.radius_12.borderRadius};
    width: ${e=>e.width};
    aspect-ratio: 1/1;
    ${e=>e.height?`height: ${e.height};`:null}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    ${e=>e.noShadow?null:`box-shadow: ${h.E_.shadow_100.boxShadow};`}
    cursor: ${e=>e.cursorStyle?e.cursorStyle:"pointer"};
    ${e=>e.hasBackground?`background: ${h.J2.Grey5.color};`:null}
    @media (min-width: 768px) {
        width: ${e=>e.desktopWidth?e.desktopWidth:e.width};
    }
`,ci=s.Ay.img`
    width: ${e=>e.hasImage?"100%":e.iconSize?e.iconSize:"24px"};
    aspect-ratio: 1/1;
    height: ${e=>e.hasImage?"100%":e.iconSize?e.iconSize:"24px"};
    border-radius: ${e=>e.hasImage?e.borderRadius?e.borderRadius:"12px":"none"};
    object-fit: cover;
`,hi=e=>{let{src:t,alt:i,hasImage:n,iconSize:a,borderRadius:s,desktopWidth:o,...l}=e;return(0,oi.jsx)(di,{hasImage:n,borderRadius:s,desktopWidth:o,...l,children:(0,oi.jsx)(ci,{src:t,alt:i,hasImage:n,borderRadius:s,iconSize:a})})};var pi=i(6138);function gi(e){let{activateCard:t,listingData:i,getTypeOfPlace:n}=e;const a=(0,pi.A)();return(0,oi.jsxs)(B,{children:[(0,oi.jsx)(ui,{activateCard:t,listingImages:i.listingImages}),(0,oi.jsx)(xi,{activateCard:t,rooms:i.RoomModels.items}),(0,oi.jsxs)(F,{children:[(0,oi.jsx)(K,{style:a?{marginTop:"48px"}:{marginTop:"32px"},children:"Basic details"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateTitleCard"),children:[(0,oi.jsx)(Y,{children:"Title"}),(0,oi.jsx)(Z,{onClick:()=>t("updateTitleCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateTitleCard"),children:i.propertyTitle?i.propertyTitle:"No title yet"})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateDescriptionCard"),children:[(0,oi.jsx)(Y,{children:"Description"}),(0,oi.jsx)(Z,{onClick:()=>t("updateDescriptionCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateDescriptionCard"),children:i.propertyDescription?i.propertyDescription.length>44?`${i.propertyDescription.slice(0,44)}...`:i.propertyDescription:"No description yet"})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateAmenitiesCard"),children:[(0,oi.jsx)(Y,{children:"Amenities"}),(0,oi.jsx)(I,{onClick:()=>t("updateAmenitiesCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateAmenitiesCard"),children:i.amenities.length})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateGuestsCard"),children:[(0,oi.jsx)(Y,{children:"Guests"}),(0,oi.jsx)(Z,{onClick:()=>t("updateGuestsCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginBottom:0},onClick:()=>t("updateGuestsCard"),children:i.guests})]})]}),(0,oi.jsx)(K,{children:"Property info"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateAddressCard"),children:[(0,oi.jsx)(Y,{children:"Location"}),(0,oi.jsx)(Z,{onClick:()=>t("updateAddressCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateAddressCard"),children:`${i.unitNumber?`${i.unitNumber}/`:""}${i.streetNumber&&i.street&&i.suburb?`${i.streetNumber} ${i.street}, ${i.suburb}`:"Invalid address"}`})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updatePropertyTypeCard"),children:[(0,oi.jsx)(Y,{children:"Property type"}),(0,oi.jsx)(Z,{onClick:()=>t("updatePropertyTypeCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updatePropertyTypeCard"),children:n(i.typeOfPlace,i.propertyType)})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateListingAreaCard"),children:[(0,oi.jsx)(Y,{children:"Area"}),(0,oi.jsx)(Z,{onClick:()=>t("updateListingAreaCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginBottom:"0px"},onClick:()=>t("updateListingAreaCard"),children:i.areaUnit?`${i.areaValue} ${i.areaUnit}`:"No area set"})]}),(0,oi.jsx)(V,{children:(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(z,{onClick:()=>t("updateListingStatusCard"),children:[(0,oi.jsx)(T,{children:"Status"}),(0,oi.jsx)(I,{onClick:()=>t("updateListingStatusCard"),type:"button",children:"Edit"})]}),(0,oi.jsxs)(X,{style:{marginBottom:0,display:"flex",alignItems:"center"},onClick:()=>t("updateListingStatusCard"),children:[(0,oi.jsx)(Ie,{active:"active"===i.status}),"active"===i.status?"Active":"Inactive"]})]})})]})}function ui(e){let{listingImages:t,activateCard:i}=e;return t.length>0?(0,oi.jsxs)(R,{children:[(0,oi.jsxs)(D,{children:[(0,oi.jsx)(T,{children:"Photos"}),(0,oi.jsx)(I,{type:"button",onClick:()=>i("updatePhotosCard"),children:"Edit"})]}),(0,oi.jsx)(L,{children:t.map((function(e,t){return(0,oi.jsx)(mi,{imgKey:JSON.parse(e).key,activateCard:i},JSON.parse(e).key)}))})]}):(0,oi.jsx)("div",{children:"No images uploaded yet"})}function mi(e){let{imgKey:t,activateCard:i}=e;return(0,oi.jsx)(O,{onClick:()=>i("updatePhotosCard"),children:(0,oi.jsx)(J,{id:`edit-listing-${t}`,src:(0,ri.A)(t,500),alt:"Featured Listing Image"})})}function xi(e){let{rooms:t,activateCard:i}=e;const n=t.sort(((e,t)=>{const i=e=>{switch(e){case"bedroom":return 1;case"bathroom":return 2;case"half-bathroom":return 3;case"living-space":return 4;default:return 5}};return i(e.roomType)-i(t.roomType)}));return(0,oi.jsxs)(R,{children:[(0,oi.jsxs)(D,{children:[(0,oi.jsx)(T,{children:"Rooms & spaces"}),(0,oi.jsx)(I,{type:"button",onClick:()=>i("updateRoomsCard"),children:"Edit"})]}),(0,oi.jsx)(P,{children:t.length>0?n.map(((e,t)=>{return(0,oi.jsxs)(W,{onClick:()=>i("updateRoomsCard"),children:[(0,oi.jsx)(hi,{hasImage:e.images.length>0,src:e.images.length>0?(0,ri.A)(e.images[0]):(n=e.roomType,"bedroom"===n?"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg":"bathroom"===n||"half-bathroom"===n?"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bathrooms.svg":"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg"),width:"160px",alt:"room image",desktopWidth:"180px"}),(0,oi.jsx)(H,{children:e.roomTitle})]},t);var n})):(0,oi.jsxs)(W,{onClick:()=>i("updateRoomsCard"),children:[(0,oi.jsx)(hi,{hasImage:!1,src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg",width:"128px",desktopWidth:"180px",alt:"add room icon"}),(0,oi.jsx)(H,{children:"Add a room"})]})})]})}const yi=s.Ay.div`
    min-width: calc((100% - 24px) / 2);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: ${h.Qk.radius_16.borderRadius};
    box-shadow: ${h.E_.shadow_100.boxShadow};
    aspect-ratio: 1 / 1;
    cursor: pointer;

    @media (min-width: 768px) {
        min-width: calc((100% - 72px) / 4);
    }

    @media (min-width: 1024px) {
        min-width: calc((100% - 96px) / 5);
    }
`,fi=s.Ay.img`
    width: 32px;
    height: 32px;
`,bi=s.Ay.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${h.dB.spacing_100.gap};
`,$i=s.Ay.div`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    color: ${h.J2.Black.color};
`,vi=s.Ay.div`
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};
    color: ${h.J2.Grey.color};
`;function wi(e){let{icon:t,title:i,subTitle:n,onClick:a}=e;return(0,oi.jsxs)(yi,{onClick:a,children:[(0,oi.jsx)(fi,{src:t,alt:i}),(0,oi.jsxs)(bi,{children:[(0,oi.jsx)($i,{children:i}),(0,oi.jsx)(vi,{children:n})]})]})}function Ci(e){let{listingData:t,activateCard:i}=e;const n=[{icon:"https://d292awxalydr86.cloudfront.net/Universal+icons/Guide.svg",title:"Check-in",subTitle:`After ${t.checkInTime/100}:00`,PopupName:"updateCheckInInstructionsCard"},{icon:"https://d292awxalydr86.cloudfront.net/Universal+icons/Guide.svg",title:"Check out",subTitle:`Before ${t.checkOutTime/100}:00`,PopupName:"updateCheckOutInstructionsCard"},{icon:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Wifi.svg",title:"Wi-Fi",subTitle:"Add info",PopupName:"updateWifi"}];return(0,oi.jsx)(G,{children:n.map(((e,t)=>(0,oi.jsx)(wi,{icon:e.icon,title:e.title,subTitle:e.subTitle,onClick:()=>i(e.PopupName)},t)))})}function ki(e){let{activateCard:t,listingData:i}=e;const n=(0,pi.A)();return(0,oi.jsxs)(te,{children:[(0,oi.jsx)(K,{style:n?{marginTop:"48px"}:{marginTop:"32px"},children:"Pricing"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updatePriceCard"),children:[(0,oi.jsx)(Y,{children:"Base price"}),(0,oi.jsx)(Z,{onClick:()=>t("updatePriceCard"),type:"button",children:"Edit"})]}),(0,oi.jsxs)(X,{style:{marginBottom:0},onClick:()=>t("updatePriceCard"),children:["$",Number(i.minimumPrice/100)]})]}),(0,oi.jsx)(K,{children:"Discounts"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateDiscountCard"),children:[(0,oi.jsx)(Y,{children:"Weekly discount"}),(0,oi.jsx)(Z,{onClick:()=>t("updateDiscountCard"),type:"button",children:"Edit"})]}),(0,oi.jsxs)(X,{onClick:()=>t("updateDiscountCard"),children:[i.weeklyDiscount,"%"]})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateDiscountCard"),children:[(0,oi.jsx)(Y,{children:"Monthly discount"}),(0,oi.jsx)(Z,{onClick:()=>t("updateDiscountCard"),type:"button",children:"Edit"})]}),(0,oi.jsxs)(X,{style:{marginBottom:0},onClick:()=>t("updateDiscountCard"),children:[i.monthlyDiscount,"%"]})]}),(0,oi.jsx)(K,{children:"Additional fees"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{style:{marginTop:"0px"},onClick:()=>t("updateCleaningCard"),children:[(0,oi.jsx)(Y,{children:"Cleaning fee"}),(0,oi.jsx)(I,{onClick:()=>t("updateCleaningCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginTop:"8px"},onClick:()=>t("updateCleaningCard"),children:null===i.cleaningFee?"$0":`$${Number(i.cleaningFee/100)}`})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{style:{marginTop:"0px"},onClick:()=>t("updateExtraGuestCard"),children:[(0,oi.jsx)(Y,{children:"Extra guest fee"}),(0,oi.jsx)(I,{onClick:()=>t("updateExtraGuestCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginTop:"8px"},onClick:()=>t("updateExtraGuestCard"),children:i.extraGuestFee?`$${Number(i.extraGuestFee/100)}`:"$0"})]})]})}function ji(e){let{activateCard:t,listingData:i,iCalToken:n}=e;const a=(0,pi.A)();return(0,oi.jsxs)(te,{children:[(0,oi.jsx)(K,{style:a?{marginTop:"48px"}:{marginTop:"32px"},children:"Stay length"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateMinimumStayCard"),children:[(0,oi.jsx)(Y,{children:"Minimum stay"}),(0,oi.jsx)(Z,{onClick:()=>t("updateMinimumStayCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateMinimumStayCard"),children:i.minimumStay?`${i.minimumStay} nights`:"Unset"})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateMinimumStayCard"),children:[(0,oi.jsx)(Y,{children:"Maximum stay"}),(0,oi.jsx)(Z,{onClick:()=>t("updateMinimumStayCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginBottom:0},onClick:()=>t("updateMinimumStayCard"),children:i.maximumStay?`${i.maximumStay} nights`:"Unset"})]}),(0,oi.jsx)(K,{children:"Calendar sync"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateICalCard"),children:[(0,oi.jsx)(Y,{children:"Import iCal link"}),(0,oi.jsx)(Z,{onClick:()=>t("updateICalCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateICalCard"),children:"iCal link"})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateICalExportCard"),children:[(0,oi.jsx)(Y,{children:"Export iCal link"}),(0,oi.jsx)(Z,{onClick:()=>t("updateICalExportCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginBottom:0},onClick:()=>t("updateICalExportCard"),children:n})]}),(0,oi.jsx)(K,{children:"Availability"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateAdvancedNoticeCard"),children:[(0,oi.jsx)(Y,{children:"Advance notice"}),(0,oi.jsx)(Z,{onClick:()=>t("updateAdvancedNoticeCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateAdvancedNoticeCard"),children:0===i.advanceNotice?"Same day bookings":1===i.advanceNotice?"1 day notice":2===i.advanceNotice?"2 day notice":3===i.advanceNotice?"3 day notice":"Not set"})]}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updateAvailableDatesCard"),children:[(0,oi.jsx)(Y,{children:"Availability window"}),(0,oi.jsx)(Z,{onClick:()=>t("updateAvailableDatesCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:()=>t("updateAvailableDatesCard"),children:i.availabilityRange?"all-future-dates"===i.availabilityRange?"All future dates":"24-months"===i.availabilityRange?"24 months in advance":"18-months"===i.availabilityRange?"18 months in advance":"12-months"===i.availabilityRange?"12 months in advance":"6-months"===i.availabilityRange?"6 months in advance":"3-months"===i.availabilityRange?"3 months in advance":"All future dates":"All future dates"})]})]})}function _i(e){let{activateCard:t,listingData:i,editListingIndex:a}=e;const s=[{name:"Cancellation policy",clickFun:()=>t("updateCancellationCard"),questionTextContent:i.cancellationPolicy?i.cancellationPolicy:"Flexible"},{name:"Instant book",clickFun:()=>t("updateInstantBookCard"),questionTextContent:i.instantBookEnabled?"Enabled":"Request only"},{name:"Deposit",clickFun:()=>t("updateDepositCard"),questionTextContent:i.deposit?`$${Number(i.deposit/100).toFixed(2)}`:"None"}],o=(0,pi.A)();return(0,oi.jsxs)(te,{children:[(0,oi.jsx)(K,{style:o?{marginTop:"48px"}:{marginTop:"32px"},children:"Policies"}),s.map((e=>(0,oi.jsx)(n.Fragment,{children:(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:e.clickFun,children:[(0,oi.jsx)(Y,{children:e.name}),(0,oi.jsx)(Z,{onClick:e.clickFun,type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{onClick:e.clickFun,children:e.questionTextContent.charAt(0).toUpperCase()+e.questionTextContent.slice(1)})]})},e.name))),(0,oi.jsx)(K,{children:"House rules"}),(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(Q,{onClick:()=>t("updatePreparationTimeCard"),children:[(0,oi.jsx)(Y,{children:"Preparation time"}),(0,oi.jsx)(Z,{onClick:()=>t("updatePreparationTimeCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginBottom:0},onClick:()=>t("updatePreparationTimeCard"),children:i.timeBeforeCheckIn>0&&i.timeAfterCheckOut>0?`${i.timeBeforeCheckIn} days before, ${i.timeAfterCheckOut} days after`:i.timeBeforeCheckIn>0?`${i.timeBeforeCheckIn} days before`:i.timeAfterCheckOut>0?`${i.timeAfterCheckOut} days after`:"None"})]}),(0,oi.jsx)(V,{children:(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(z,{onClick:()=>t("updateHouseRulesCard"),children:[(0,oi.jsx)(T,{children:"Other rules"}),(0,oi.jsx)(I,{onClick:()=>t("updateHouseRulesCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginTop:0,marginBottom:0},onClick:()=>t("updateHouseRulesCard"),children:i.houseRules.length>0?i.houseRules.length:"None"})]})}),("NSW"===i.state||"VIC"===i.state)&&(0,oi.jsx)(n.Fragment,{children:(0,oi.jsx)(V,{children:(0,oi.jsxs)(q,{children:[(0,oi.jsxs)(z,{onClick:()=>t("updateStraIDCard"),children:[(0,oi.jsx)(T,{children:"STRA"}),(0,oi.jsx)(I,{onClick:()=>t("updateStraIDCard"),type:"button",children:"Edit"})]}),(0,oi.jsx)(X,{style:{marginTop:0,marginBottom:0},onClick:()=>t("updateStraIDCard"),children:i.straID?i.straID:"None"})]})})})]})}var Ai=i(1340);const Si=s.Ay.div`
    padding: ${e=>e.withImg?"48px":"24px"};
    width: 100%;
    border-radius: ${h.Qk.radius_12.borderRadius};
    box-shadow: ${h.E_.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_400.gap};
    cursor: pointer;
    ${e=>e.withImg&&"align-items: center;"}
`,Gi=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    gap: ${e=>e.textGap?e.textGap:"8px"};
    ${e=>e.textCenter?"align-items: center;":null}
`,Bi=s.Ay.h1`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    text-align: left;
`,Di=s.Ay.p`
    width: 100%;
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    color: ${h.J2.Grey.color};
    line-height: ${h.$G.sans_300.lineHeight};
    text-align: ${e=>e.textCenter?"center":"left"};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zi=e=>{let{...t}=e;return(0,oi.jsxs)(Si,{withImg:t.withImg,onClick:t.onClick,children:[t.withImg&&(0,oi.jsx)(hi,{hasImage:!!t.imgSrc,src:t.imgSrc?t.imgSrc:"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg",alt:t.imgSrc?"image":"plus icon",width:"110px",hasBackground:!t.imgSrc,noShadow:!t.imgSrc}),t.withImgContent?t.withImgContent:(0,oi.jsxs)(Gi,{textGap:t.textGap,textCenter:t.textCenter,children:[(0,oi.jsx)(Bi,{children:t.title}),(0,oi.jsx)(Di,{textCenter:t.textCenter,children:t.subTitle})]})]})};var Ti=i(5439);function Ii(e){let{isCheckIn:t,deactivateUpdateCards:i,listingData:a,accessToken:s,setListingData:o,activateCard:l}=e;const[r,d]=(0,n.useState)(!1),c=(0,Ti.D)(t?a.checkInInstructions:a.checkOutInstructions,t);return(0,oi.jsxs)(Ai.A,{backBtnOnClick:i,cancelBtnDisabled:r,cancelBtnOnClick:()=>{i()},continueBtnDisabled:r,continueBtnLoading:r,continueBtnOnClick:()=>{i()},continueBtnText:"Done",children:[(0,oi.jsxs)(_t,{children:[t?"Check-in":"Check-out"," instructions"]}),(0,oi.jsxs)(At,{children:["Write detailed ",t?"check-in":"check-out"," instructions for your guest"]}),(0,oi.jsxs)(Dt,{children:[(0,oi.jsx)(zi,{withImg:!0,textCenter:!0,title:t?"Check-in guide":"Check-out guide",onClick:()=>{i(),l(""+(t?"updateCheckInStepsCard":"updateCheckOutStepsCard"))}}),(0,oi.jsx)(zi,{title:"Type",subTitle:c.type,onClick:()=>{l(""+(t?"updateCheckInTypeCard":"updateCheckOutTypeCard"))}}),(0,oi.jsx)(zi,{title:t?"Check-in time":"Check-out time",subTitle:`${c.checkInOutTime.startTime} - ${c.checkInOutTime.endTime}`,onClick:()=>{l(""+(t?"updateCheckInTimeCard":"updateCheckOutTimeCard"))}})]})]})}var Ri=i(3832),Li=i(1852),Oi=i(4204),Ji=i(9697);const Pi=(0,n.forwardRef)(((e,t)=>{let{children:i,closePopup:n,style:a,handleSave:s,disable:o,isContinueBtnLoading:l,btnText:r,btnColor:d,backBtnType:c,noContinueBtn:h,desktopWidth:p,height:g,backBtnBackground:u,cancelBtnText:m,cancelPopup:x}=e;const y=(0,pi.A)();return(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsx)(Ji.A,{direction:y?"horizontal":"vertical",children:(0,oi.jsxs)(Ri.Zg,{ref:t,style:a,children:[(0,oi.jsx)(Li.A,{onClick:()=>n(),type:c||"Close",mobileTop:24,mobileLeft:24,desktopTop:24,desktopLeft:24,hasBackground:u}),(0,oi.jsx)(Ri.xk,{children:i}),!h&&(0,oi.jsxs)(Ri.sk,{children:[(0,oi.jsx)(Ri.Zb,{disabled:l,onClick:()=>{void 0!==x?x():n()},children:m||"Cancel"}),(0,oi.jsx)(Oi.A,{background:d||"black",style:{width:"unset",margin:"0"},onClick:s,disabled:o||!1,isLoading:l||!1,children:r||"Save"})]})]})})})}));function Wi(e){let{updateTitleCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(s.propertyTitle?s.propertyTitle:""),[h,p]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/title",{headers:{Authorization:o,listingid:s.id},body:{title:d}});l((t=>({...t,propertyTitle:e.body.listing.propertyTitle}))),i()}catch(e){console.log(e),p(!1)}})()},disable:!d||h,isContinueBtnLoading:h,children:[(0,oi.jsx)(ae,{children:"Title"}),(0,oi.jsx)(oe,{invalid:!1,children:"Use as many characters as you can for better results."}),(0,oi.jsx)(re,{type:"text",value:d,onChange:e=>{e.target.value.length<=50&&c(e.target.value)}}),(0,oi.jsx)(ce,{children:50-d.length})]})}function Hi(e){let{updateDescriptionCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(s.propertyDescription),[h,p]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async e=>{try{const t=await(0,a.p)("post","dev-anystay-listing","listing/description",{headers:{Authorization:o,listingid:s.id},body:{description:e}});l((e=>({...e,propertyDescription:t.body.listing.propertyDescription}))),i()}catch(t){console.log(t),p(!1)}})(d)},disable:!d||h,isContinueBtnLoading:h,children:[(0,oi.jsx)(ae,{children:"Description"}),(0,oi.jsx)(oe,{invalid:!1,children:"Write a detailed description of your place."}),(0,oi.jsx)(pe,{value:d,onChange:e=>(async e=>{let t=e.split("");e=t.slice(0,2500).join("").toString(),c(e)})(e.target.value)}),(0,oi.jsx)(ce,{style:{marginBottom:"48px"},children:2500-d.length})]})}var Ni=i(9028);function Ui(e){let{updateGuestsCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(null),[h,p]=(0,n.useState)(!1),g=(0,n.useMemo)((()=>{let e=[];for(let t=1;t<=100;t++)e.push({value:t,label:`${t} ${t>1?"guests":"guest"}`});return e}),[]),u=(0,n.useCallback)((()=>{s.guests>0&&c({value:s.guests,label:`${s.guests} ${s.guests>1?"guests":"guest"}`})}),[s.guests]);(0,n.useEffect)((()=>{u()}),[u]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async e=>{try{const t=await(0,a.p)("post","dev-anystay-listing","listing/guests",{headers:{Authorization:o,listingid:s.id},body:{guests:e}});l((e=>({...e,guests:t.body.listing.guests}))),i()}catch(t){console.log(t),p(!1)}})(d?d.value:1)},disable:h,isContinueBtnLoading:h,children:[(0,oi.jsx)(ae,{children:"Guests"}),(0,oi.jsx)(oe,{invalid:!1,children:"Select the maximum number of guests you can accommodate"}),(0,oi.jsx)(be,{style:{marginBottom:"96px"},children:(0,oi.jsx)(Ni.A,{options:g,onChange:e=>{c(e)},placeholder:s.guests,initialValue:d})})]})}const Mi=[{value:"house",label:"House"},{value:"apartment",label:"Apartment"},{value:"townhouse",label:"Townhouse"},{value:"cabin",label:"Cabin"},{value:"guest",label:"Guest house"},{value:"studio",label:"Studio"},{value:"chalet",label:"Chalet"},{value:"hotel",label:"Hotel"},{value:"serviced-apartment",label:"Serviced apartment"},{value:"resort",label:"Resort"},{value:"bed-and-breakfast",label:"Bed & Breakfast"},{value:"farm-stay",label:"Farm stay"},{value:"hostel",label:"Hostel"},{value:"motel",label:"Motel"},{value:"beach-house",label:"Beach house"},{value:"tree-house",label:"Tree house"},{value:"condo",label:"Condo"},{value:"cottage",label:"Cottage"},{value:"villa",label:"Villa"},{value:"lodge",label:"Lodge"},{value:"estate",label:"Estate"},{value:"tiny-home",label:"Tiny home"},{value:"yurt",label:"Yurt"},{value:"glamping",label:"Glamping"},{value:"guest-suite",label:"Guest suite"},{value:"penthouse",label:"Penthouse"},{value:"campsite",label:"Campsite"},{value:"station",label:"Station"},{value:"dome",label:"Dome"},{value:"boutique-hotel",label:"Boutique hotel"},{value:"barn",label:"Barn"},{value:"shed",label:"Shed"},{value:"shack",label:"Shack"},{value:"caravan",label:"Caravan"},{value:"wagon",label:"Wagon"},{value:"boat",label:"Boat"},{value:"yacht",label:"Yacht"},{value:"castle",label:"Castle"},{value:"island",label:"Island"},{value:"lake-house",label:"Lake house"},{value:"tower",label:"Tower"},{value:"aparthotel",label:"Aparthotel"},{value:"nature-lodge",label:"Nature lodge"},{value:"houseboat",label:"Houseboat"},{value:"lighthouse",label:"Lighthouse"},{value:"bungalow",label:"Bungalow"},{value:"hut",label:"Hut"},{value:"loft",label:"Loft"},{value:"train",label:"Train"},{value:"teepee",label:"Teepee"},{value:"bus",label:"Bus"},{value:"suite",label:"Suite"},{value:"cave",label:"Cave"},{value:"chatea",label:"Chateau"},{value:"riad",label:"Riad"},{value:"rv",label:"RV"},{value:"windmill",label:"Windmill"},{value:"sheperds-hut",label:"Shepherds hut"},{value:"tram",label:"Tram"},{value:"igloo",label:"Igloo"},{value:"church",label:"Church"},{value:"eco-house",label:"Eco house"},{value:"bunker",label:"Bunker"}],Ei=[{value:"entire-place",label:"Entire place"},{value:"private-room",label:"Private room"},{value:"shared-room",label:"Shared room"},{value:"hotel-room",label:"Hotel room"}];function Fi(e){let{updatePropertyTypeCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{g||i()})),[d,c]=(0,n.useState)(null),[h,p]=(0,n.useState)(null),[g,u]=(0,n.useState)(!1),m=(0,n.useCallback)((async()=>{for(let e=0;e<Mi.length;e++)Mi[e].value===s.propertyType&&c(Mi[e]);for(let e=0;e<Ei.length;e++)Ei[e].value===s.typeOfPlace&&p(Ei[e])}),[s.propertyType,s.typeOfPlace]);(0,n.useEffect)((()=>{m()}),[m]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{u(!0),await(async(e,t)=>{try{const n=await(0,a.p)("post","dev-anystay-listing","listing/property-type",{headers:{Authorization:o,listingID:s.id},body:{propertyType:e,typeOfPlace:t}});l((e=>({...e,propertyType:n.body.listing.propertyType,typeOfPlace:n.body.listing.typeOfPlace}))),i()}catch(n){console.log(n),u(!1)}})(d?d.value:"",h?h.value:"")},disable:g,isContinueBtnLoading:g,children:[(0,oi.jsx)(ae,{children:"Property type"}),(0,oi.jsx)(oe,{invalid:!1,children:"You can edit your property type and type of place."}),(0,oi.jsx)(be,{style:{textTransform:"capitalize"},children:(0,oi.jsx)(Ni.A,{placeholder:"i.e. House, Apartment, Hotel",options:Mi,onChange:e=>c(e),initialValue:d})}),(0,oi.jsx)($e,{children:"Property type"}),(0,oi.jsx)(be,{style:{marginTop:"24px"},children:(0,oi.jsx)(Ni.A,{placeholder:"i.e. Entire place, Private room",options:Ei,onChange:e=>p(e),initialValue:h})}),(0,oi.jsx)(ve,{style:{marginBottom:"96px"},children:"Type of place"})]})}function Ki(e){let{updatePriceCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{m||i()})),[d,c]=(0,n.useState)(Number(s.minimumPrice/100)),[h,p]=(0,n.useState)(!1),[g,u]=(0,n.useState)(!1),[m,x]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{x(!0),await(async e=>{try{const t=await(0,a.p)("post","dev-anystay-listing","listing/price",{headers:{Authorization:o,listingid:s.id},body:{minimumPrice:100*e}});l((e=>({...e,minimumPrice:t.body.listing.minimumPrice}))),i()}catch(t){console.log(t),x(!1)}})(d)},disable:h||g||m,isContinueBtnLoading:m,children:[(0,oi.jsx)(ae,{style:{marginTop:"0"},children:"Nightly price"}),(0,oi.jsx)(oe,{invalid:!1,children:"Adjust your listing's base price per night."}),(0,oi.jsx)(he,{type:"text",value:`$ ${Number(d)}`,onChange:e=>{let t=e.target.value.replace(/\D/g,"");Number(t)<10?p(!0):Number(t)>1e5?u(!0):(u(!1),p(!1)),c(Number(t.replace("$","")))}}),h&&(0,oi.jsx)(ht,{children:"Price must be at least $10 AUD"}),g&&(0,oi.jsx)(ht,{children:"Price must be below $100000 AUD"})]})}const Vi=[{value:0,label:"0%"},{value:5,label:"5%"},{value:10,label:"10%"},{value:15,label:"15%"},{value:20,label:"20%"},{value:35,label:"35%"},{value:50,label:"50%"},{value:65,label:"65%"}],qi=[{value:0,label:"0%"},{value:5,label:"5%"},{value:10,label:"10%"},{value:20,label:"20%"},{value:30,label:"30%"},{value:40,label:"40%"},{value:50,label:"50%"},{value:60,label:"60%"},{value:70,label:"70%"}];function Qi(e){let{updateDiscountCard:t,deactivateUpdateCards:i,accessToken:s,listingData:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{d||i()})),[d,c]=(0,n.useState)(!1),[h,p]=(0,n.useState)(null),[g,u]=(0,n.useState)(null),m=(0,n.useCallback)((async()=>{for(let e=0;e<Vi.length;e++)Vi[e].value===o.weeklyDiscount&&p(Vi[e]);for(let e=0;e<qi.length;e++)qi[e].value===o.monthlyDiscount&&u(qi[e])}),[o.monthlyDiscount,o.weeklyDiscount]);(0,n.useEffect)((()=>{m()}),[m]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{c(!0),await(async(e,t)=>{try{const n=await(0,a.p)("post","dev-anystay-listing","listing/base-discounts",{headers:{Authorization:s,listingID:o.id},body:{weeklyDiscount:e,monthlyDiscount:t}});l((e=>({...e,weeklyDiscount:n.body.listing.weeklyDiscount,monthlyDiscount:n.body.listing.monthlyDiscount}))),i()}catch(n){console.log(n),c(!1)}})(h?h.value:0,g?g.value:0)},disable:d,isContinueBtnLoading:d,children:[(0,oi.jsx)(ae,{children:"Long stay discounts"}),(0,oi.jsx)(oe,{invalid:!1,children:"Edit your weekly and monthly discounts."}),(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{placeholder:"No weekly discount",options:Vi,onChange:e=>p(e),initialValue:h})}),(0,oi.jsx)($e,{children:"Weekly discount"}),(0,oi.jsx)(be,{style:{marginTop:"24px"},children:(0,oi.jsx)(Ni.A,{placeholder:"No monthly discount",options:qi,onChange:e=>u(e),initialValue:g})}),(0,oi.jsx)(ve,{style:{marginBottom:"96px"},children:"Monthly discount"})]})}function Yi(e){let{updateCleaningCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{p||i()})),[d,c]=(0,n.useState)(s.cleaningFee/100),[p,g]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{g(!0),await(async e=>{try{if(e<=1e4){const t=await(0,a.p)("post","dev-anystay-listing","listing/cleaning-fee",{headers:{Authorization:o,listingID:s.id},body:{cleaningFee:Number(100*e)}});l((e=>({...e,cleaningFee:t.body.listing.cleaningFee}))),i()}}catch(t){console.log(t),g(!1)}})(Number(d))},disable:p||u,isContinueBtnLoading:p,children:[(0,oi.jsx)(ae,{children:"Cleaning fee"}),(0,oi.jsx)(oe,{invalid:!1,children:"The cleaning fee you set will be added to your guest's total."}),(0,oi.jsx)(re,{placeholder:"$0.00",style:{marginTop:"0px"},type:"text",value:`$${Number(d)}`,onChange:e=>{let t=e.target.value.replace(/\D/g,"");c(Number(t.replace("$",""))),Number(t.replace("$",""))>1e4?m(!0):m(!1)}}),(0,oi.jsx)(ve,{style:{color:u?h.J2.Red.color:h.J2.Black.color},children:u?"Invalid price number":"This fee is charged once per stay"})]})}function Zi(e){let{updateExtraGuestCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{g||i()})),[d,c]=(0,n.useState)(s.extraGuestFee?s.extraGuestFee/100:0),[h,p]=(0,n.useState)({value:0,label:"None selected"}),[g,u]=(0,n.useState)(!1),[m,x]=(0,n.useState)(!1),[y,f]=(0,n.useState)(""),b=(0,n.useMemo)((()=>{let e=[];for(let t=0;t<s.guests;t++)0===t?e.push({value:0,label:"None selected"}):e.push({value:t,label:`${t} guest${t>1?"s":""}`});return e}),[s.guests]),$=(0,n.useCallback)((()=>{s.extraMaxGuests&&p({value:s.extraMaxGuests,label:`${s.extraMaxGuests} guest${s.extraMaxGuests>1?"s":""}`})}),[s.extraMaxGuests]);(0,n.useEffect)((()=>{$()}),[$]);(0,n.useEffect)((()=>{d>s.minimumPrice/100?(f("Price cannot exceed $"+s.minimumPrice/100),x(!0)):x(!1)}),[d,s.minimumPrice]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{u(!0),await(async(e,t)=>{try{const n=await(0,a.p)("post","dev-anystay-listing","listing/extra-guests",{headers:{Authorization:o,listingID:s.id},body:{extraGuestFee:100*e,extraMaxGuests:t}});l((e=>({...e,extraGuestFee:n.body.listing.extraGuestFee,extraMaxGuests:n.body.listing.extraMaxGuests}))),i()}catch(n){console.log(n),u(!1)}})(d,h.value)},disable:g||m,isContinueBtnLoading:g,children:[(0,oi.jsx)(ae,{children:"Extra guest fee"}),(0,oi.jsx)(oe,{invalid:!1,children:"You can select your extra guest threshold and price."}),(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{placeholder:"None selected",options:b,onChange:e=>{p(e)},initialValue:h})}),(0,oi.jsx)($e,{children:"Apply when guests is over"}),(0,oi.jsx)(re,{placeholder:"$0.00",style:{marginTop:"32px"},type:"text",value:`$${d}`,onChange:e=>{let t=e.target.value.replace(/\D/g,"");c(Number(t.replace("$","")))}}),m?(0,oi.jsx)(ve,{style:{color:"red"},children:y}):(0,oi.jsx)(ve,{children:"Per night, per extra guest"})]})}function Xi(e){let{updateMinimumStayCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{g||i()})),[d,c]=(0,n.useState)(s.minimumStay?Number(s.minimumStay):""),[h,p]=(0,n.useState)(s.maximumStay?Number(s.maximumStay):""),[g,u]=(0,n.useState)(!1),m=e=>t=>{if(t.target.value){const i=parseInt(t.target.value);isNaN(i)||e(i>1e3?1e3:i)}else e(0)};return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{u(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/stay-length",{headers:{Authorization:o,listingid:s.id},body:{minimumStay:Number(d),maximumStay:Number(h)}});l((t=>({...t,minimumStay:e.body.listing.minimumStay,maximumStay:e.body.listing.maximumStay}))),i()}catch(e){console.log(e),u(!1)}})()},disable:g||!(d&&h&&Number(d)<=Number(h)&&Number(d)>0&&Number(h)<=1e3),isContinueBtnLoading:g,children:[(0,oi.jsx)(ae,{children:"Stay length"}),(0,oi.jsx)(oe,{invalid:!1,children:"Edit your minimum and maximum stay in nights"}),(0,oi.jsx)(re,{type:"text",value:d,onChange:m(c)}),(0,oi.jsx)($e,{children:"Minimum nights"}),(0,oi.jsx)(re,{type:"text",style:{marginTop:"24px"},value:h,onChange:m(p)}),(0,oi.jsx)(ve,{children:"Maximum nights"})]})}const en=[{value:1200,label:"12:00pm"},{value:1300,label:"1:00pm"},{value:1400,label:"2:00pm"},{value:1500,label:"3:00pm"},{value:1600,label:"4:00pm"},{value:1700,label:"5:00pm"},{value:1800,label:"6:00pm"},{value:1900,label:"7:00pm"},{value:2e3,label:"8:00pm"},{value:2100,label:"9:00pm"},{value:2200,label:"10:00pm"},{value:2300,label:"11:00pm"},{value:2400,label:"12:00am"}],tn=[{value:0,label:"Allow same day bookings"},{value:1,label:"One day notice"},{value:2,label:"Two day notice"},{value:3,label:"Three day notice"}];function nn(e){let{updateAdvancedNoticeCard:t,deactivateUpdateCards:i,accessToken:s,setListingData:o,listingData:l}=e;const r=(0,ni.A)(t,(()=>{g||i()})),[d,c]=(0,n.useState)(null),[h,p]=(0,n.useState)(null),[g,u]=(0,n.useState)(!1),m=(0,n.useCallback)((async()=>{let e=null,t=null;for(let i=0;i<tn.length;i++)if(tn[i].value===l.advanceNotice){e=tn[i];break}for(let i=0;i<en.length;i++)if(en[i].value===l.advanceNoticeTime){t=en[i];break}c(e),p(t)}),[l.advanceNotice,l.advanceNoticeTime]);(0,n.useEffect)((()=>{m()}),[m]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{u(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/advance-notice",{headers:{Authorization:s,listingID:l.id},body:{advanceNotice:d?d.value:0,advanceNoticeTime:h?h.value:1200}});o((t=>({...t,advanceNotice:e.body.listing.advanceNotice,advanceNoticeTime:e.body.listing.advanceNoticeTime}))),i()}catch(e){console.log(e),u(!1)}})()},disable:g,isContinueBtnLoading:g,children:[(0,oi.jsx)(ae,{children:"Advance notice"}),(0,oi.jsx)(oe,{invalid:!1,children:"Edit your same day booking rules and cut-off times"}),(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{placeholder:"Allow same day bookings",options:tn,onChange:e=>c(e),initialValue:d})}),(0,oi.jsx)($e,{children:"Advance notice"}),(0,oi.jsx)(be,{style:{marginTop:"24px"},children:(0,oi.jsx)(Ni.A,{placeholder:"Allow same day bookings",options:en,onChange:e=>p(e),initialValue:h})}),(0,oi.jsx)(ve,{children:"Same day booking cut-off"})]})}var an=i(441);function sn(e){let{deactivateUpdateCards:t,updateAmenitiesCard:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(i,(()=>{h||t()})),[d,c]=(0,n.useState)(s.amenities),[h,p]=(0,n.useState)(!1),g=(0,pi.A)();return(0,oi.jsx)(Pi,{ref:r,closePopup:t,handleSave:async()=>{p(!0),await(async e=>{try{const i=await(0,a.p)("post","dev-anystay-listing","listing/amenities",{headers:{Authorization:o,listingID:s.id},body:{amenities:e}});l((e=>({...e,amenities:i.body.listing.amenities}))),t()}catch(i){console.log(i),p(!1)}})(d)},disable:h,isContinueBtnLoading:h,style:g?{height:"100%"}:{height:"98%"},children:(0,oi.jsx)(an.A,{amenities:d,addAmenitie:async e=>{let t=[...d,e];c(t)},removeAmenitie:async e=>{let t=[...d].filter((t=>t!==e));c(t)}})})}function on(e){var t;let{listingData:i,updateAddressCard:s,deactivateUpdateCards:o,setListingData:l,accessToken:r}=e;const d=(0,ni.A)(s,(()=>{A||o()}),!0),[c,h]=(0,n.useState)(""),[p,g]=(0,n.useState)(i.streetNumber&&i.street?`${i.streetNumber} ${i.street}`:""),[u,m]=(0,n.useState)(i.unitNumber),[x,y]=(0,n.useState)(null!==(t=i.suburb)&&void 0!==t?t:""),[f,b]=(0,n.useState)(i.state),[$,v]=(0,n.useState)(i.postcode),w=(0,n.useRef)(!1),[C,k]=(0,n.useState)(""),[j,_]=(0,n.useState)(null),[A,S]=(0,n.useState)(!1),G=async e=>{try{const t=await(0,a.p)("post","dev-anystay-listing","listing/address",{headers:{Authorization:r,listingID:i.id},body:{listingID:i.id,placeID:e,unitNumber:u,updateStatus:!(!i||!i.hostawayListingId||i.street||i.streetNumber||i.suburb||"inactive"!==i.status)}});l((e=>({...e,unitNumber:t.body.updateListing.unitNumber,streetNumber:t.body.updateListing.streetNumber,street:t.body.updateListing.street,suburb:t.body.updateListing.suburb,state:t.body.updateListing.state,postcode:t.body.updateListing.postcode,stateShort:t.body.updateListing.stateShort,status:t.body.updateListing.status})))}catch(t){console.log(t)}},B=e=>{var t;function i(e,t){var i,n;return(null===(i=e.address_components)||void 0===i||null===(n=i.find((e=>e.types.includes(t))))||void 0===n?void 0:n.long_name)||null}let n=i(e,"subpremise"),a=i(e,"street_number"),s=i(e,"route"),o=i(e,"locality"),l=i(e,"administrative_area_level_1"),r=i(e,"postal_code");n&&m(n),h(null!==(t=e.place_id)&&void 0!==t?t:""),a?(w.current=!1,g(`${a} ${s}`)):(w.current=!0,g(s||"")),y(o||""),b(l||""),v(r||"")},D=()=>{h(""),k(""),_(null)};return(0,oi.jsxs)(Pi,{ref:d,closePopup:o,handleSave:async()=>{if(S(!0),c){if(w.current)return k("Your address must include a street number"),_(!1),void S(!1);await G(c),_(!0),S(!1),o()}else try{if(!p)throw new Error;const t=await(e=p,new Promise(((t,i)=>{(new window.google.maps.places.AutocompleteService).getPlacePredictions({input:e,componentRestrictions:{country:["au","nz"]}},((e,n)=>{n===window.google.maps.places.PlacesServiceStatus.OK&&null!==e&&e.length>0?t(e[0].place_id):i(n)}))}))),i=await(e=>new Promise(((t,i)=>{new window.google.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:e},((e,n)=>{n===window.google.maps.places.PlacesServiceStatus.OK?t(e):i(n)}))})))(t);if(B(i),w.current)return k("Your address must include a street number"),_(!1),void S(!1);i.place_id&&await G(i.place_id),_(!0),S(!1),o()}catch(t){return k("Your address is invalid"),_(!1),void S(!1)}var e},disable:A,isContinueBtnLoading:A,children:[(0,oi.jsx)(ae,{children:"Listing address"}),(0,oi.jsx)(oe,{invalid:!1,children:"Changes to your address are subject to review by us."}),(0,oi.jsxs)(ge,{children:[(0,oi.jsx)(ue,{children:(0,oi.jsx)(xe,{value:u||"",placeholder:"Unit, level, etc... (if applicable)",onChange:e=>{m(e.target.value)}})}),(0,oi.jsxs)(ue,{children:[(0,oi.jsx)(me,{children:"Street address"}),(0,oi.jsxs)(Ae,{children:[(0,oi.jsx)(Be,{apiKey:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",onPlaceSelected:B,onChange:e=>{D(),g(e.target.value)},value:p||"",placeholder:"Enter a city, suburb or street",language:"en-AU",options:{types:["address"],componentRestrictions:{country:["au","nz"]}}}),""!==p&&(0,oi.jsx)(Se,{type:"button",onMouseDown:()=>{console.log("clear address"),D(),g("")},children:(0,oi.jsx)(Ge,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg",alt:"Clear address"})})]})]}),(0,oi.jsxs)(ue,{children:[(0,oi.jsx)(me,{children:"Suburb"}),(0,oi.jsx)(xe,{value:x||"",onChange:e=>{D(),y(e.target.value)}})]}),(0,oi.jsxs)(ue,{children:[(0,oi.jsx)(me,{children:"State"}),(0,oi.jsx)(xe,{value:f||"",onChange:e=>{D(),b(e.target.value)}})]}),(0,oi.jsxs)(ue,{children:[(0,oi.jsx)(me,{children:"Postcode"}),(0,oi.jsx)(xe,{value:$||"",onChange:e=>{D(),(e=>{const t=e.replace(/\D/g,"");t.length>4||v(t||"")})(e.target.value)}})]})]}),(0,oi.jsx)(ye,{success:j,children:C})]})}var ln=i(4281),rn=i(8581),dn=i(1648),cn=i(1024);const hn=function(e){let{id:t,imgKey:i,index:n,removeItem:a}=e;const{attributes:s,listeners:o,setNodeRef:l,transform:r,transition:d}=(0,dn.gl)({id:t.key}),c={transform:cn.Ks.Transform.toString(r),transition:d};return(0,oi.jsxs)(O,{ref:l,style:c,children:[0===n?(0,oi.jsx)(E,{children:"COVER"}):null,(0,oi.jsx)(ct,{...s,...o,children:(0,oi.jsx)(N,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/all-directions.png",alt:"delete icon"})}),(0,oi.jsx)(M,{onClick:()=>{a(i.key)},type:"button",children:(0,oi.jsx)(N,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg",alt:"delete icon"})}),(0,oi.jsx)(U,{id:`edit-listing-${t}`,src:(0,ri.A)(i.key,500),alt:"Featured Listing Image"})]})};var pn=i(3585);const gn=function(e){let{items:t,updateItemOrder:i,removeItem:n}=e;return(0,oi.jsx)(Ze,{children:(0,oi.jsx)(pn.Mp,{collisionDetection:pn.fp,onDragEnd:e=>{const{active:n,over:a}=e;if(a&&n.id!==a.id){const e=t.findIndex((e=>e.key===n.id)),s=t.findIndex((e=>e.key===a.id));-1!==e&&-1!==s&&i((0,dn.be)(t,e,s))}},autoScroll:!1,children:(0,oi.jsx)(dn.gB,{items:t.map((e=>({id:e.key}))),strategy:window.innerWidth<768?dn._G:dn.kL,children:t.map(((e,t)=>(0,oi.jsx)(hn,{removeItem:n,id:e,imgKey:e,index:t},e.key)))})})})};function un(e){let{updatePhotosCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(s.listingImages.map((e=>JSON.parse(e)))),[h,p]=(0,n.useState)(!1),[g,u]=(0,n.useState)(!1),m=(0,pi.A)();return(0,oi.jsx)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async e=>{try{const t=await(0,a.p)("post","dev-anystay-listing","listing/images",{headers:{Authorization:o,listingID:s.id},body:{listingImages:e}});l((e=>({...e,listingImages:t.body.listing.listingImages}))),i()}catch(t){console.log(t),p(!1)}})(d.map((e=>JSON.stringify(e))))},disable:d.length<8||d.length>100||h||g,isContinueBtnLoading:h,style:m?{height:"100%"}:{height:"98%"},children:(0,oi.jsxs)(et,{children:[(0,oi.jsx)(ae,{children:"Photos"}),(0,oi.jsx)(oe,{style:{marginBottom:"32px"},invalid:!1,children:"Upload at least 8 photos. You can add as many as you want."}),(0,oi.jsxs)(De,{children:[(0,oi.jsx)(mn,{addImgKey:(e,t,i)=>{c((n=>[...n,{key:e,alt:"",height:t,width:i,priority:null}]))},setIsImgUploading:u}),d&&d.length>0&&(0,oi.jsx)(gn,{removeItem:async e=>{let t=d.filter((t=>t.key!==e));c(t)},updateItemOrder:e=>{c(e)},items:d})]})]})})}function mn(e){let{addImgKey:t,setIsImgUploading:i}=e;const a=e=>{for(var t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=i.charAt(Math.floor(62*Math.random()));return t},{getRootProps:s,getInputProps:o}=(0,ln.VB)({onDrop:async e=>{const n=["image/gif","image/jpeg","image/png","image/apng","image/heic","image/avif","image/webp"];i(!0);const s=Object.keys(e).map((async function(i,s){return new Promise(((s,o)=>{let l=e[i],r=new FileReader;r.onload=function(e){let i=new Image;i.onload=async function(){let e=a(12);if(!n.includes(l.type))return console.log("The uploaded file is not an accepted image type"),void o();try{await rn.d.put(e,l,{contentType:l.type}).then((e=>{t(e.key,this.height,this.width),s("updated")}))}catch(i){console.log("Error uploading file: ",i),o()}},e.target&&(i.src=e.target.result)},r.readAsDataURL(l)}))}));try{await Promise.all(s),i(!1),console.log("All files processed successfully")}catch(o){i(!1),console.log("Error processing files:",o)}}}),l=(0,n.useRef)(null);return(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsxs)(Xe,{...s(),onClick:e=>{l.current&&l.current.click()},children:[(0,oi.jsx)("input",{...o(),style:{display:"none"},type:"file",name:"file",ref:l,onChange:async e=>{const n=e.target.files,s=["image/gif","image/jpeg","image/png","image/apng","image/heic","image/avif","image/webp"];if(i(!0),n){const e=Object.keys(n).map((function(e,i){return new Promise(((i,o)=>{let l=n[e],r=new FileReader;r.onload=function(e){let n=new Image;n.onload=async function(){let e=a(12);if(!s.includes(l.type))return console.log("The uploaded file is not an accepted image type"),void o();try{await rn.d.put(e,l,{contentType:l.type}).then((e=>{t(e.key,this.height,this.width),i("updated")}))}catch(n){console.log("Error uploading file: ",n),o()}},e.target&&(n.src=e.target.result)},r.readAsDataURL(l)}))}));try{await Promise.all(e),i(!1),console.log("All files processed successfully")}catch(o){i(!1),console.log("Error processing files:",o)}}},multiple:!0,accept:"image/*",onClick:e=>{e.target.value=""}}),(0,oi.jsx)("p",{className:"new-listing-image-upload-input",children:"Drop files or click to upload"})]})})}const xn=[{value:"24-months",label:"24 months in advance"},{value:"18-months",label:"18 months in advance"},{value:"12-months",label:"12 months in advance"},{value:"6-months",label:"6 months in advance"},{value:"3-months",label:"3 months in advance"}];function yn(e){let{updateAvailableDatesCard:t,deactivateUpdateCards:i,accessToken:s,listingData:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)({value:"24-months",label:"24 months in advance"}),[h,p]=(0,n.useState)(!1),g=(0,n.useCallback)((()=>{for(let e of xn)if(e.value===o.availabilityRange)return void c(e)}),[o.availabilityRange]);(0,n.useEffect)((()=>{g()}),[g]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/availability-range",{headers:{Authorization:s,listingid:o.id},body:{availabilityRange:d.value}});l((t=>({...t,availabilityRange:e.body.listing.availabilityRange}))),i()}catch(e){console.log(e),p(!1)}})()},disable:h,isContinueBtnLoading:h,children:[(0,oi.jsx)(ae,{children:"Availability window"}),(0,oi.jsx)(oe,{invalid:!1,children:"Guest can book in advance for your availability window"}),(0,oi.jsx)(be,{style:{marginBottom:"96px"},children:(0,oi.jsx)(Ni.A,{options:xn,onChange:e=>{c(e)},initialValue:d})})]})}var fn=i(3212);function bn(e){let{updateICalCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(""),[h,p]=(0,n.useState)(!1),[g,u]=(0,n.useState)(!1),[m,x]=(0,n.useState)(""),[y,f]=(0,n.useState)({loading:!1,index:null}),b=async e=>{const t=JSON.parse(JSON.stringify(s));t.iCalImportLinks=e,l(t)};return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:i,disable:h,isContinueBtnLoading:h,btnText:"Done",children:[(0,oi.jsx)(ae,{children:"Import calendars"}),(0,oi.jsx)(oe,{style:{height:"40px"},invalid:g,children:g&&m?m:"Paste iCal links from other apps to sync your calendar"}),(0,oi.jsxs)(tt,{children:[(0,oi.jsx)(it,{placeholder:"Paste your iCal link here",value:d,onChange:e=>{c(e.target.value)}}),(0,oi.jsx)(Oi.A,{style:{height:"38px",width:"83px",borderRadius:"8px",gridRow:"1/2",gridColumn:"1/2",marginLeft:"auto",zIndex:11,marginBottom:"7px"},isLoading:h,background:"blue",disabled:""===d||h,continueType:"button",onClick:async()=>{p(!0),await(0,a.p)("post","dev-anystay-listing",`listing/ical/${s.id}`,{headers:{Authorization:o,listingID:s.id},body:{iCalLink:d}}).then((e=>{console.log(e),e.success?(b(e.body.iCalLinks),u(!1),x("")):(u(!0),x(e.message)),p(!1)})).catch((e=>{console.log(e),p(!1),u(!0),x("Something went wrong, please try again")}))},children:"Import"})]}),(0,oi.jsx)(at,{children:"Sync with other platforms and services."}),(0,oi.jsx)(dt,{children:s.iCalImportLinks.map(((e,t)=>(0,oi.jsxs)(ot,{style:{marginBottom:t===s.iCalImportLinks.length-1?"64px":"16px"},children:[(0,oi.jsx)(lt,{children:e}),y.loading&&y.index===t?(0,oi.jsx)(fn.A,{style:{marginLeft:"auto",marginRight:"16px"}}):(0,oi.jsx)(rt,{onClick:()=>{(async(e,t)=>{f({loading:!0,index:t}),await(0,a.p)("del","dev-anystay-listing",`listing/ical/${s.id}`,{headers:{Authorization:o,listingID:s.id},body:{iCalLink:e}}).then((e=>{console.log(e),e.success&&(b(e.body.iCalLinks),f({loading:!1,index:null}))})).catch((e=>{console.log(e),f({loading:!1,index:null})}))})(e,t)},children:"x"})]},e)))})]})}function $n(e){let{updateICalExportCard:t,deactivateUpdateCards:i,iCalToken:a}=e;const s=(0,ni.A)(t,i),[o,l]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:s,closePopup:i,handleSave:i,disable:!1,isContinueBtnLoading:!1,btnText:"Done",children:[(0,oi.jsx)(ae,{children:"Export your calendar"}),(0,oi.jsxs)(oe,{invalid:!1,children:["Copy your iCal link to sync Anystay's calendar with other apps. ",(0,oi.jsx)("a",{children:"Learn more"})]}),(0,oi.jsxs)(tt,{children:[(0,oi.jsx)(nt,{children:a}),(0,oi.jsx)(st,{type:"button",onClick:()=>{l(!0),navigator.clipboard.writeText(a)},children:o?"Copied":"Copy"})]})]})}function vn(e){let{updateCancellationCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{p||i()})),[d,c]=(0,n.useState)(s.cancellationPolicy),[p,g]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{g(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/cancellation-policy",{headers:{Authorization:o,listingID:s.id},body:{cancellationPolicy:d}});l((t=>({...t,cancellationPolicy:e.body.listing.cancellationPolicy}))),i()}catch(e){console.log(e),g(!1)}})()},disable:p,isContinueBtnLoading:p,children:[(0,oi.jsx)(ie,{style:{margin:"8px 0"},children:(0,oi.jsx)(ne,{style:{marginLeft:0},children:"Cancellation policy"})}),(0,oi.jsxs)(ze,{onClick:()=>{c("flexible")},style:{marginTop:"16px"},selected:"flexible"===d,children:[(0,oi.jsx)(Re,{style:{color:h.J2.Black.color},children:"Flexible"}),(0,oi.jsx)(Le,{style:{textAlign:"left"},children:"Free cancellation until 24 hours before arrival. After that, you'll be paid for spent nights."})]}),(0,oi.jsxs)(ze,{onClick:()=>{c("moderate")},selected:"moderate"===d,children:[(0,oi.jsx)(Re,{children:"Moderate"}),(0,oi.jsx)(Le,{style:{textAlign:"left"},children:"Free cancellation until 7 days before arrival. After that, you'll be paid for spent nights plus 50% of unspent nights."})]}),(0,oi.jsxs)(ze,{onClick:()=>{c("strict")},selected:"strict"===d,children:[(0,oi.jsx)(Re,{children:"Strict"}),(0,oi.jsx)(Le,{style:{textAlign:"left"},children:"48 hour free cancellation. You're paid 50% until 7 days before arrival. After that, you'll be paid in full."})]})]})}function wn(e){let{updateInstantBookCard:t,deactivateUpdateCards:i,accessToken:s,setListingData:o,listingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(l.instantBookEnabled),[h,p]=(0,n.useState)(!1),g=async e=>{try{const t=await(0,a.p)("post","dev-anystay-listing","listing/instant-book",{headers:{Authorization:s,listingID:l.id},body:{instantBookEnabled:e}});o((e=>({...e,instantBookEnabled:t.body.listing.instantBookEnabled}))),i()}catch(t){console.log(t),p(!1)}};return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async()=>{d?await g(!0):await g(!1)})()},disable:h,isContinueBtnLoading:h,children:[(0,oi.jsx)(ie,{children:(0,oi.jsx)(ne,{style:{marginLeft:0},children:"Instant book"})}),(0,oi.jsxs)(ze,{onClick:async()=>{c(!0)},style:{marginTop:"16px"},selected:d,children:[(0,oi.jsx)(Re,{children:"On"}),(0,oi.jsx)(Le,{children:"Allow requests and instant bookings. You can always change this later."})]}),(0,oi.jsxs)(ze,{onClick:async()=>{c(!1)},selected:!d,children:[(0,oi.jsx)(Re,{children:"Requests only"}),(0,oi.jsx)(Le,{children:"Allow requests only, this may result in less bookings from guests."})]})]})}const Cn=[{value:900,label:"9:00 AM"},{value:1e3,label:"10:00 AM"},{value:1100,label:"11:00 AM"},{value:1200,label:"12:00 PM"},{value:1300,label:"1:00 PM"},{value:1400,label:"2:00 PM"},{value:1500,label:"3:00 PM"}],kn=[{value:1e3,label:"10:00 AM"},{value:1100,label:"11:00 AM"},{value:1200,label:"12:00 PM"},{value:1300,label:"1:00 PM"},{value:1400,label:"2:00 PM"},{value:1500,label:"3:00 PM"},{value:1600,label:"4:00 PM"}];function jn(e){let{updateCheckInCheckOutCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{g||i()})),[d,c]=(0,n.useState)(null),[h,p]=(0,n.useState)(null),[g,u]=(0,n.useState)(!1),m=(0,n.useCallback)((async()=>{for(let e=0;e<Cn.length;e++)Cn[e].value===s.checkInTime&&c(Cn[e]);for(let e=0;e<Cn.length;e++)kn[e].value===s.checkOutTime&&p(kn[e])}),[s.checkInTime,s.checkOutTime]);(0,n.useEffect)((()=>{console.log(s),m()}),[m,s]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{u(!0),await(async(e,t)=>{try{const n=await(0,a.p)("post","dev-anystay-listing","listing/checkin-checkout-time",{headers:{Authorization:o,listingID:s.id},body:{checkInTime:e,checkOutTime:t}});l((e=>({...e,checkInTime:n.body.listing.checkInTime,checkOutTime:n.body.listing.checkOutTime}))),i()}catch(n){console.log(n),u(!1)}})(d?d.value:900,h?h.value:1e3)},disable:g,isContinueBtnLoading:g,children:[(0,oi.jsx)(ae,{children:"Check-in and out"}),(0,oi.jsx)(oe,{invalid:!1,children:"Edit your check-in and check out times."}),(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{placeholder:"2PM",options:Cn,onChange:e=>c(e),initialValue:d})}),(0,oi.jsx)($e,{children:"Check-in after"}),(0,oi.jsx)(fe,{children:(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{placeholder:"11AM",options:kn,onChange:e=>p(e),initialValue:h})})}),(0,oi.jsx)(ve,{children:"Check-out before"})]})}const _n=[{value:0,label:"None"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"}],An=[{value:0,label:"None"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"}];function Sn(e){let{listingData:t,updatePreparationTimeCard:i,deactivateUpdateCards:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(i,(()=>{g||s()})),[d,c]=(0,n.useState)(null),[h,p]=(0,n.useState)(null),[g,u]=(0,n.useState)(!1),m=(0,n.useCallback)((()=>{if(null!==t.timeBeforeCheckIn)for(let e=0;e<_n.length;e++)_n[e].value===t.timeBeforeCheckIn&&c(_n[e]);else c(_n[0])}),[t.timeBeforeCheckIn]),x=(0,n.useCallback)((()=>{if(null!==t.timeAfterCheckOut)for(let e=0;e<An.length;e++)An[e].value===t.timeAfterCheckOut&&p(An[e]);else p(An[0])}),[t.timeAfterCheckOut]);(0,n.useEffect)((()=>{m(),x()}),[x,m]);return(0,oi.jsxs)(Pi,{ref:r,closePopup:s,handleSave:async()=>{u(!0),await(async(e,i)=>{try{const n=await(0,a.p)("post","dev-anystay-listing","listing/preparation-time",{headers:{Authorization:o,listingid:t.id},body:{timeBeforeCheckIn:e,timeAfterCheckOut:i}});l((e=>({...e,timeBeforeCheckIn:n.body.listing.timeBeforeCheckIn,timeAfterCheckOut:n.body.listing.timeAfterCheckOut}))),s()}catch(n){console.log(n),u(!1)}})(d?d.value:0,h?h.value:0)},disable:g,isContinueBtnLoading:g,children:[(0,oi.jsx)(ae,{children:"Preparation time"}),(0,oi.jsx)(oe,{invalid:!1,children:"Block days before or after your guest's stay."}),(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{placeholder:"None",options:_n,onChange:e=>c(e),initialValue:d})}),(0,oi.jsx)($e,{children:"Before check-in"}),(0,oi.jsx)(fe,{children:(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{placeholder:"None",options:An,onChange:e=>p(e),initialValue:h})})}),(0,oi.jsx)(ve,{children:"After check out"})]})}function Gn(e){let{updateDepositCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{p||i()})),[d,c]=(0,n.useState)(s.deposit?Number(s.deposit/100):0),[p,g]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{g(!0),await(async e=>{try{if(Number(100*e)<=1e6){const t=await(0,a.p)("post","dev-anystay-listing","listing/deposit",{headers:{Authorization:o,listingid:s.id},body:{deposit:Number(100*e)}});l((e=>({...e,deposit:t.body.listing.deposit}))),i()}}catch(t){console.log(t),g(!1)}})(d)},disable:d<0||void 0===d||null===d||u||p,isContinueBtnLoading:p,children:[(0,oi.jsx)(se,{children:"Damage deposit"}),(0,oi.jsxs)(le,{style:{maxWidth:"100%",textAlign:"left"},children:["You may collect a damage deposit up to the amount you set. Deposits must follow our"," ",(0,oi.jsx)("a",{target:window.innerWidth<768?"":"_blank",href:"https://help.anystay.com.au/en/articles/7016835-deposits",rel:"nooreferrer noreferrer",children:"deposit guidelines"}),". ",(0,oi.jsx)("strong",{children:"You are responsible for the collection and return of guest deposits."})]}),(0,oi.jsx)(re,{style:{border:`1px solid ${u?h.J2.Red1.color:h.J2.Grey1.color}`},placeholder:"$0.00",type:"text",value:`$${Number(d)}`,onChange:e=>{let t=e.target.value.replace(/\D/g,"");c(Number(t.replace("$",""))),Number(t.replace("$",""))>1e4?m(!0):m(!1)}}),(0,oi.jsx)(de,{style:{textAlign:"left",visibility:u?"visible":"hidden"},children:"Invalid price number"})]})}const Bn=[{title:"No smoking",src:"https://d292awxalydr86.cloudfront.net/House+rules+icons/No+smoking.svg",styleProps:{justifySelf:"flex-end"}},{title:"No events",src:"https://d292awxalydr86.cloudfront.net/House+rules+icons/No+events.svg",styleProps:{}},{title:"No children",src:"https://d292awxalydr86.cloudfront.net/House+rules+icons/No+children.svg",styleProps:{justifySelf:"flex-end"}},{title:"No infants",src:"https://d292awxalydr86.cloudfront.net/House+rules+icons/No+infants.svg",styleProps:{justifySelf:"flex-end"}},{title:"No pets",src:"https://d292awxalydr86.cloudfront.net/House+rules+icons/No+pets.svg",styleProps:{justifySelf:"flex-end"}},{title:"Commercial use",src:"https://d292awxalydr86.cloudfront.net/House+rules+icons/Commercial+use.svg",styleProps:{justifySelf:"flex-end"}}];function Dn(e){let{updateHouseRulesCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(s.houseRules),[h,p]=(0,n.useState)(!1),g=async e=>{let t=[...d,e];c(t)},u=async e=>{let t=[...d].filter((t=>t!==e));c(t)};return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async e=>{try{const t=await(0,a.p)("post","dev-anystay-listing","listing/house-rules",{headers:{Authorization:o,listingID:s.id},body:{houseRules:e}});l((e=>({...e,houseRules:t.body.listing.houseRules}))),i()}catch(t){console.log(t),p(!1)}})(d)},disable:h,isContinueBtnLoading:h,children:[(0,oi.jsx)(ie,{style:{marginTop:"8px"},children:(0,oi.jsx)(ne,{style:{marginLeft:0},children:"House rules"})}),(0,oi.jsx)(we,{children:Bn.map((e=>(0,oi.jsx)(zn,{houseRules:d,removeHouseRule:u,addHouseRule:g,styleProps:e.styleProps,title:e.title,src:e.src},e.title)))})]})}function zn(e){let{src:t,title:i,houseRules:n,styleProps:a,addHouseRule:s,removeHouseRule:o}=e;return(0,oi.jsxs)(Ce,{style:a,onClick:()=>{n.includes(i)?o(i):s(i)},selected:n.includes(i),children:[(0,oi.jsx)(_e,{src:t,alt:"Amenitie icon"}),(0,oi.jsx)(ke,{children:i})]})}var Tn=i(7607);function In(e){let{updateListingStatusCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l,activateCard:r}=e;const d=(0,ni.A)(t,(()=>{g||i()})),[c,p]=(0,n.useState)(s.status),[g,u]=(0,n.useState)(!1),[m,x]=(0,si.useRecoilState)(Tn.o),y="Suspended"===s.status;return(0,oi.jsxs)(Pi,{ref:d,closePopup:i,handleSave:async()=>{u(!0),await(async e=>{try{if("delete"===e){const e=await(0,a.p)("post","dev-anystay-listing",`listing/delete/check/${s.id}`,{headers:{Authorization:o,listingID:s.id},body:{listingmodelID:s.id}}),t=JSON.parse(JSON.stringify(m));m&&(t.ListingModels.items=m.ListingModels.items.filter((e=>e.id!==s.id))),x(t),e.success&&(i(),e.body.canDeactivate?(i(),r("deleteListingCard")):(i(),r("deleteListingFailedCard")))}else{const t=await(0,a.p)("post","dev-anystay-listing","listing/status",{headers:{Authorization:o,listingID:s.id},body:{status:e}});l((e=>({...e,status:t.body.listing.status}))),i()}}catch(t){console.log(t),u(!1)}})(c)},disable:g,isContinueBtnLoading:g,children:[(0,oi.jsx)(ie,{children:(0,oi.jsx)(ne,{style:{marginLeft:0},children:"Listing status"})}),(0,oi.jsxs)(ze,{onClick:()=>{y||p("active")},style:{marginTop:"16px"},selected:"active"===c,disabled:y,children:[(0,oi.jsxs)(Re,{children:[(0,oi.jsx)(je,{}),"Active"]}),(0,oi.jsx)(Le,{children:"Your listing is available to find and book across our platform"})]}),(0,oi.jsxs)(ze,{onClick:()=>{y||p("inactive")},selected:"inactive"===c,disabled:y,children:[(0,oi.jsxs)(Re,{children:[(0,oi.jsx)(je,{style:{background:h.J2.Red1.color}}),"Inactive"]}),(0,oi.jsx)(Le,{children:"Your listing is not available to find and book across our platform"})]}),(0,oi.jsxs)(Te,{onClick:()=>{p("delete")},selected:"delete"===c,style:{marginBottom:"48px"},children:[(0,oi.jsx)(Re,{style:{color:"hsla(0, 0%, 15%, 1)"},children:"Delete listing"}),(0,oi.jsx)(Le,{children:"Permanently delete this listing, you won\u2019t be able to recover it"})]})]})}function Rn(e){let{updateStraIDCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{h||i()})),[d,c]=(0,n.useState)(s.straID?s.straID:""),[h,p]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{p(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/stra-id",{headers:{Authorization:o,listingID:s.id},body:{straId:d}});l(e.body.listing),i()}catch(e){console.log(e),p(!1)}})()},disable:h,isContinueBtnLoading:h,children:[(0,oi.jsx)(ae,{children:"STRA Registration"}),(0,oi.jsx)(oe,{invalid:!1,children:"Display your STRA ID on your listing as required by your local government"}),(0,oi.jsx)(re,{type:"text",value:d,onChange:e=>c(e.target.value)})]})}var Ln=i(3216);function On(e){let{deleteListingCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o}=e;const l=(0,ni.A)(t,(()=>{c||i()})),[r,d]=(0,si.useRecoilState)(Tn.o),[c,h]=(0,n.useState)(!1),p=(0,Ln.Zp)();return(0,oi.jsx)(Pi,{ref:l,closePopup:i,handleSave:async()=>{h(!0),await(async()=>{try{const e=await(0,a.p)("del","dev-anystay-listing",`listing/${s.id}`,{headers:{Authorization:o,listingID:s.id},body:{listingmodelID:s.id}});e.listing&&null!==e.listing.deleteListingModel&&r&&(i(),p(`/your-listings/${r.id}`))}catch(e){console.log(e),h(!1)}})()},disable:c,isContinueBtnLoading:c,children:(0,oi.jsxs)(Ve,{children:[(0,oi.jsx)(qe,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"delete icon"}),(0,oi.jsx)(Qe,{children:"You're about to permanently delete your listing"}),(0,oi.jsx)(Ye,{children:"You won't be able to recover it"})]})})}function Jn(e){let{deleteListingFailedCard:t,deactivateUpdateCards:i}=e;const n=(0,ni.A)(t,i);return(0,oi.jsxs)(Pi,{ref:n,closePopup:i,handleSave:i,disable:!1,isContinueBtnLoading:!1,btnColor:"red",btnText:"Go back",children:[(0,oi.jsx)(We,{children:(0,oi.jsx)(qe,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"delete icon"})}),(0,oi.jsx)(Qe,{children:"You have active bookings!"}),(0,oi.jsx)(Ye,{children:"You must decline or cancel any active bookings before you delete your listing"})]})}var Pn=i(8297);const Wn="\n  mutation UpdateListingModel(\n    $input: UpdateListingModelInput!\n    $condition: ModelListingModelConditionInput\n  ) {\n    updateListingModel(input: $input, condition: $condition) {\n      id\n      owner\n      unitNumber\n      streetNumber\n      street\n      suburb\n      postcode\n      state\n      city\n      country\n      bedrooms\n      bathrooms\n      propertyType\n      typeOfPlace\n      propertyDescription\n      listingImages\n      status\n      amenities\n      categories\n      deposit\n      guests\n      minimumStay\n      minimumPrice\n      maximumPrice\n      maximumStay\n      weeklyMinimumPrice\n      weeklyMaximumStay\n      location\n      propertyTitle\n      houseRules\n      draft\n      verified\n      verifiedDocuments\n      weeklyDiscount\n      monthlyDiscount\n      cleaningFee\n      cleaningFrequency\n      availabilityRange\n      rooms\n      userhostmodelID\n      cancellationPolicy\n      onceOffPaymentsOnly\n      instantBookEnabled\n      stayType\n      checkInTime\n      checkOutTime\n      timeBeforeCheckIn\n      timeAfterCheckOut\n      extraGuestFee\n      extraMaxGuests\n      unavailableDates\n      iCalUnavailableDates\n      straID\n      advanceNotice\n      advanceNoticeTime\n      approved\n      standardServiceFee\n      checkInInstructions\n      checkOutInstructions\n      createdAt\n      updatedAt\n    }\n  }\n";function Hn(e){let{updatePaymentPolicyCard:t,deactivateUpdateCards:i,listingData:a,setListingData:s}=e;const{id:o}=(0,Ln.g)(),[l,r]=(0,n.useState)(a.onceOffPaymentsOnly?2:0),[d,c]=(0,n.useState)(a.onceOffPaymentsOnly),h=(0,ni.A)(t,(()=>{p||i()})),[p,g]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:h,closePopup:i,handleSave:async()=>{g(!0),await(async e=>{try{const t={id:o,onceOffPaymentsOnly:e};await Pn.n.graphql({query:Wn,variables:{input:t}});const n=JSON.parse(JSON.stringify(a));n.onceOffPaymentsOnly=e,s(n),i()}catch(t){console.log(t),g(!1)}})(d)},disable:p,isContinueBtnLoading:p,children:[(0,oi.jsx)(ie,{style:{marginTop:"8px"},children:(0,oi.jsx)(ne,{style:{marginLeft:0},children:"Payment policy"})}),(0,oi.jsxs)(ze,{onClick:()=>{r(0),c(!1)},style:{marginTop:"16px"},selected:0===l,children:[(0,oi.jsx)(Re,{children:"Flexible (Recommended)"}),(0,oi.jsx)(Le,{children:"Accept weekly and once off payments from guests"})]}),(0,oi.jsxs)(ze,{onClick:()=>{r(2),c(!0)},selected:2===l,children:[(0,oi.jsx)(Re,{children:"Once off only"}),(0,oi.jsx)(Le,{children:"Only accept once off payments from guests"})]})]})}function Nn(e){let{updateWifiCard:t,deactivateUpdateCards:i,listingData:a,accessToken:s,setListingData:o}=e;const l=(0,ni.A)(t,(()=>{p||i()})),[r,d]=(0,n.useState)(""),[c,h]=(0,n.useState)(""),[p,g]=(0,n.useState)(!1);return(0,oi.jsxs)(Pi,{ref:l,closePopup:i,handleSave:async()=>{g(!0)},disable:!r&&!c||p,isContinueBtnLoading:p,children:[(0,oi.jsx)(Ft,{children:"Wi-Fi"}),(0,oi.jsx)(Kt,{children:"Add instructions for guests to access your Wi-Fi."}),(0,oi.jsx)(Vt,{type:"text",value:r,onChange:e=>{e.target.value.length<=50&&d(e.target.value)},placeholder:"SSID"}),(0,oi.jsx)(Vt,{type:"text",value:c,onChange:e=>{e.target.value.length<=50&&h(e.target.value)},placeholder:"Password"})]})}var Un=i(2383);function Mn(e){let{updateListingAreaCard:t,deactivateUpdateCards:i,listingData:s,accessToken:o,setListingData:l}=e;const r=(0,ni.A)(t,(()=>{g||i()})),[d,c]=(0,n.useState)(s.areaValue?s.areaValue:""),[h,p]=(0,n.useState)(s.areaUnit?s.areaUnit:"m\xb2"),[g,u]=(0,n.useState)(!1),m=(0,n.useRef)(null);return(0,oi.jsxs)(Pi,{ref:r,closePopup:i,handleSave:async()=>{u(!0),await(async(e,t)=>{try{const n=await(0,a.p)("post","dev-anystay-listing","listing/area",{headers:{Authorization:o,listingID:s.id},body:{areaValue:Number(e),areaUnit:t}});l((e=>({...e,areaUnit:n.body.listing.areaUnit,areaValue:n.body.listing.areaValue}))),i()}catch(n){console.log(n),u(!1)}})(d,h)},disable:g||!d,isContinueBtnLoading:g,children:[(0,oi.jsx)(pt,{children:(0,oi.jsx)(gt,{ref:m,onChange:e=>{const t=e.target.value?e.target.value:e.target.value+`${h}`;if(t.length<=8){const e=t.length>2?t.length-2:t.length;let i=Number(t.replace(/\D/g,""));c(i),setTimeout((()=>{m.current&&m.current.setSelectionRange(e,e)}),0)}else setTimeout((()=>{m.current&&m.current.setSelectionRange(t.length-3,t.length-3)}),0)},onKeyDown:e=>{"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||e.preventDefault()},value:d>0?d+`${""!==h?h:"m\xb2"}`:"",placeholder:`0${""!==h?h:"m\xb2"}`,onFocus:e=>{const t=e.target,i=t.value.length>2?t.value.length-2:t.value.length;t.setSelectionRange(i,i)},onBlur:e=>{const t=e.target,i=t.value.length>2?t.value.length-2:t.value.length;t.setSelectionRange(i,i)}})}),(0,oi.jsx)(ut,{children:"Area"}),(0,oi.jsx)(mt,{children:"Add the total area your guests can access."}),(0,oi.jsx)(Un.A,{setAreaUnit:p,areaUnit:h,style:{marginTop:"32px"}})]})}const En=e=>{let{deactivateUpdateCards:t,hostawayListingId:i}=e;return(0,oi.jsxs)(xt,{children:[(0,oi.jsx)(kt,{type:"button",subPageIndex:3,onClick:()=>t(),children:(0,oi.jsx)(jt,{})}),(0,oi.jsxs)(yt,{children:[(0,oi.jsxs)(vt,{children:[(0,oi.jsx)(wt,{style:{background:"white"},src:"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+black.svg",alt:"anystay logo icon"}),(0,oi.jsx)(Ct,{src:"https://d292awxalydr86.cloudfront.net/Create+listing+page/Integrate.svg",alt:"connect icon"}),(0,oi.jsx)(wt,{style:{background:"white"},src:"https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg",alt:"target service icon"})]}),(0,oi.jsx)(ft,{children:"Edit your listing on Hostaway"}),(0,oi.jsx)(bt,{href:i?`https://dashboard.hostaway.com/listing/${i}`:"",target:"_blank",children:(0,oi.jsx)($t,{children:"Go to Hostaway"})})]})]})},Fn=async e=>{let{instructions:t,isCheckIn:i,setListingData:n,accessToken:s,listingData:o,deactivateUpdateCards:l}=e;try{const e=await(0,a.p)("post","dev-anystay-listing",`listing/${i?"checkin":"checkout"}-instructions`,{headers:{Authorization:s,listingID:o.id},body:i?{checkInInstructions:t}:{checkOutInstructions:t}});n(i?t=>({...t,checkInInstructions:e.body.listing.checkInInstructions}):t=>({...t,checkOutInstructions:e.body.listing.checkOutInstructions})),l&&l()}catch(r){console.log(r)}},Kn=e=>{let{isCheckIn:t,setListingData:i,listingData:a,deactivateUpdateCards:s,activateCard:o,accessToken:l}=e;const[r,d]=(0,n.useState)(!1),[c,h]=(0,n.useState)((0,Ti.D)(t?a.checkInInstructions:a.checkOutInstructions,t)),p=(0,n.useRef)({}),g=(0,n.useRef)({}),u=async(e,t)=>{const i=e.target.files[0];try{i?await rn.d.put((e=>{let t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<e;n++)t+=i.charAt(Math.floor(62*Math.random()));return t})(12),i,{contentType:"image/*"}).then((e=>{((e,t)=>{h((i=>{const n=i.steps.map((i=>i.step===t?{...i,imgKey:e}:i));return{...i,steps:n}}))})(e.key,t)})):console.log("No file selected.")}catch(n){console.log("Error uploading file: ",n)}};return(0,oi.jsxs)(Ai.A,{backBtnOnClick:()=>{s(),o(""+(t?"updateCheckInInstructionsCard":"updateCheckOutInstructionsCard"))},backBtnDisabled:r,cancelBtnOnClick:()=>s(),cancelBtnDisabled:r,continueBtnDisabled:r,continueBtnLoading:r,continueBtnOnClick:async()=>{d(!0),await Fn({instructions:JSON.stringify(c),isCheckIn:t,setListingData:i,accessToken:l,listingData:a,deactivateUpdateCards:s}),o(""+(t?"updateCheckInInstructionsCard":"updateCheckOutInstructionsCard"))},children:[(0,oi.jsxs)(_t,{children:[t?"Check-in":"Check-out"," guide"]}),(0,oi.jsxs)(At,{children:["Write detailed ",t?"check-in":"check-out"," instructions for your guest"]}),(0,oi.jsx)(qt,{children:c.steps.map(((e,t)=>(0,oi.jsxs)(Qt,{ref:e=>((e,t)=>{t?g.current[e]=t:delete g.current[e]})(t,e),children:[(0,oi.jsxs)(Yt,{children:[(0,oi.jsx)(hi,{width:"128px",hasImage:!!e.imgKey,noShadow:!e.imgKey,hasBackground:!e.imgKey,src:e.imgKey?(0,ri.A)(e.imgKey):"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg",alt:"check-in/out step image",cursorStyle:"unset"}),(0,oi.jsx)("input",{style:{display:"none"},type:"file",name:"file",ref:e=>((e,t)=>{t?p.current[e]=t:delete p.current[e]})(t,e),onChange:t=>u(t,e.step)}),(0,oi.jsx)(Oi.A,{background:"black",style:{width:"unset",borderRadius:"100px",marginTop:"unset"},onClick:()=>{var e;p.current&&p.current[t]&&(null===(e=p.current[t])||void 0===e||e.click())},isLoading:r,disabled:r,children:"Upload Photo"})]}),(0,oi.jsx)(pe,{height:"117px",maxLength:2e3,placeholder:"Type your instruction",margin:"32px 0",value:e.instruction,onChange:e=>((e,t)=>{h((i=>{const n=i.steps.map((i=>i.step===t+1?{...i,instruction:e.target.value}:i));return{...i,steps:n}}))})(e,t)}),(0,oi.jsx)(Zt,{onClick:()=>{(e=>{c.steps.length-1===e?(h((t=>({...t,steps:[...t.steps,{step:e+2,imgKey:"",instruction:""}]}))),setTimeout((()=>{g.current[e+1].scrollIntoView({behavior:"smooth",block:"end"})}),0)):(h((t=>{const i=t.steps.filter(((t,i)=>i!==e+1));return{...t,steps:i.map(((e,t)=>({step:t+1,imgKey:e.imgKey,instruction:e.instruction})))}})),setTimeout((()=>{g.current[e].scrollIntoView({behavior:"smooth",block:"end"})}),0))})(t)},children:(0,oi.jsx)(Xt,{src:c.steps.length-1===t?"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg":"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg",alt:"check-in check-out step add/delete button icon"})})]},`instruction step: ${t}`)))})]})},Vn=[{value:"Smart lock",label:"Smart lock"},{value:"Keypad",label:"Keypad"},{value:"Lockbox",label:"Lockbox"},{value:"In-person greeting",label:"In-person greeting"},{value:"Other",label:"Other"}],qn=e=>{let{isCheckIn:t,setListingData:i,listingData:a,deactivateUpdateCards:s,activateCard:o,accessToken:l}=e;const[r,d]=(0,n.useState)(!1),[c,h]=(0,n.useState)((0,Ti.D)(t?a.checkInInstructions:a.checkOutInstructions,t));return console.log("checkinOUT type"),(0,oi.jsxs)(Ai.A,{mobileHeight:"55%",backBtnOnClick:()=>{s(),o(""+(t?"updateCheckInInstructionsCard":"updateCheckOutInstructionsCard"))},backBtnDisabled:r,cancelBtnOnClick:()=>s(),cancelBtnDisabled:r,continueBtnDisabled:r,continueBtnLoading:r,continueBtnOnClick:async()=>{d(!0),await Fn({instructions:JSON.stringify(c),isCheckIn:t,setListingData:i,accessToken:l,listingData:a,deactivateUpdateCards:s}),o(""+(t?"updateCheckInInstructionsCard":"updateCheckOutInstructionsCard"))},children:[(0,oi.jsxs)(_t,{children:["How can guests ",t?"check-in":"check-out","?"]}),(0,oi.jsxs)(At,{children:["Please select ",t?"check-in":"check-out"," type for your guest"]}),(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{options:Vn,onChange:e=>{var t;t=e.value,h((e=>({...e,type:t})))},placeholder:`Select ${t?"check-in":"check-out"} type`,initialValue:{value:c.type,label:c.type}})})]})};var Qn=i(7668);const Yn=e=>parseInt(e.replace(":","")),Zn=e=>{let{isCheckIn:t,setListingData:i,listingData:s,deactivateUpdateCards:o,activateCard:l,accessToken:r}=e;const d=(0,Ti.D)(t?s.checkInInstructions:s.checkOutInstructions,t),[c,h]=(0,n.useState)(!1),[p,g]=(0,n.useState)(JSON.stringify(d)),[u,m]=(0,n.useState)(d.checkInOutTime.startTime),[x,y]=(0,n.useState)(d.checkInOutTime.endTime),f=(e,t)=>{const i=t?{...d,checkInOutTime:{startTime:e,endTime:x}}:{...d,checkInOutTime:{startTime:u,endTime:e}};g(JSON.stringify(i))};return(0,oi.jsxs)(Ai.A,{mobileHeight:"55%",backBtnOnClick:()=>{o(),l(t?"updateCheckInInstructionsCard":"updateCheckOutInstructionsCard")},backBtnDisabled:c,cancelBtnOnClick:()=>o(),cancelBtnDisabled:c,continueBtnDisabled:c,continueBtnLoading:c,continueBtnOnClick:async()=>{h(!0),await Fn({instructions:p,isCheckIn:t,setListingData:i,accessToken:r,listingData:s}),await(async(e,t)=>{try{const n=await(0,a.p)("post","dev-anystay-listing","listing/checkin-checkout-time",{headers:{Authorization:r,listingID:s.id},body:{checkInTime:e,checkOutTime:t}});i((e=>({...e,checkInTime:n.body.listing.checkInTime,checkOutTime:n.body.listing.checkOutTime}))),o()}catch(n){console.log(n),h(!1)}})(t?Yn(u):s.checkInTime,t?s.checkOutTime:Yn(x)),l(t?"updateCheckInInstructionsCard":"updateCheckOutInstructionsCard")},children:[(0,oi.jsxs)(_t,{children:[t?"Check-in":"Check-out"," time"]}),(0,oi.jsxs)(At,{children:["Let guests know when they can ",t?"arrive at":"depart from"," your place."]}),(0,oi.jsxs)(ei,{children:[(0,oi.jsx)(ti,{children:(0,oi.jsx)(Qn.t1,{controls:["time"],select:"date",timeFormat:"H:00",touchUi:!0,theme:"auto",themeVariant:"light",placeholder:"From",value:u,valid:t?[{start:"00:00",end:"15:00"}]:[{start:"00:00",end:"23:00"}],onChange:e=>{m(e.valueText),f(e.valueText,!0)}})}),(0,oi.jsx)(ii,{}),(0,oi.jsx)(ti,{children:(0,oi.jsx)(Qn.t1,{controls:["time"],select:"date",timeFormat:"H:00",touchUi:!0,theme:"auto",themeVariant:"light",placeholder:"To",value:x,valid:t?[{start:"00:00",end:"23:00"}]:[{start:"00:00",end:"16:00"}],onChange:e=>{y(e.valueText),f(e.valueText,!1)}})})]})]})};function Xn(e){let{popupName:t,setListingData:i,listingData:n,deactivateUpdateCards:a,accessToken:s,iCalToken:o,activateCard:l}=e;return(0,oi.jsxs)(oi.Fragment,{children:["updateTitleCard"===t&&(0,oi.jsx)(Wi,{updateTitleCard:"updateTitleCard"===t,setListingData:i,listingData:n,deactivateUpdateCards:a,accessToken:s}),"updateDescriptionCard"===t&&(0,oi.jsx)(Hi,{updateDescriptionCard:"updateDescriptionCard"===t,setListingData:i,listingData:n,deactivateUpdateCards:a,accessToken:s}),("updateCheckInInstructionsCard"===t||"updateCheckOutInstructionsCard"===t)&&(0,oi.jsx)(Ii,{isCheckIn:"updateCheckInInstructionsCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a,activateCard:l}),("updateCheckInStepsCard"===t||"updateCheckOutStepsCard"===t)&&(0,oi.jsx)(Kn,{isCheckIn:"updateCheckInStepsCard"===t,setListingData:i,listingData:n,deactivateUpdateCards:a,activateCard:l,accessToken:s}),("updateCheckInTypeCard"===t||"updateCheckOutTypeCard"===t)&&(0,oi.jsx)(qn,{isCheckIn:"updateCheckInTypeCard"===t,setListingData:i,listingData:n,deactivateUpdateCards:a,activateCard:l,accessToken:s}),("updateCheckOutTimeCard"===t||"updateCheckInTimeCard"===t)&&(0,oi.jsx)(Zn,{isCheckIn:"updateCheckInTimeCard"===t,setListingData:i,listingData:n,deactivateUpdateCards:a,activateCard:l,accessToken:s}),"updateListingAreaCard"===t&&(0,oi.jsx)(Mn,{updateListingAreaCard:"updateListingAreaCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateGuestsCard"===t&&(0,oi.jsx)(Ui,{updateGuestsCard:"updateGuestsCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updatePropertyTypeCard"===t&&(0,oi.jsx)(Fi,{updatePropertyTypeCard:"updatePropertyTypeCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updatePriceCard"===t&&(0,oi.jsx)(Ki,{updatePriceCard:"updatePriceCard"===t,listingData:n,accessToken:s,setListingData:i,deactivateUpdateCards:a}),"updateDiscountCard"===t&&(0,oi.jsx)(Qi,{updateDiscountCard:"updateDiscountCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateCleaningCard"===t&&(0,oi.jsx)(Yi,{updateCleaningCard:"updateCleaningCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateExtraGuestCard"===t&&(0,oi.jsx)(Zi,{updateExtraGuestCard:"updateExtraGuestCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateMinimumStayCard"===t&&(0,oi.jsx)(Xi,{updateMinimumStayCard:"updateMinimumStayCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateAdvancedNoticeCard"===t&&(0,oi.jsx)(nn,{updateAdvancedNoticeCard:"updateAdvancedNoticeCard"===t,accessToken:s,setListingData:i,listingData:n,deactivateUpdateCards:a}),"updateAmenitiesCard"===t&&(0,oi.jsx)(sn,{updateAmenitiesCard:"updateAmenitiesCard"===t,accessToken:s,setListingData:i,listingData:n,deactivateUpdateCards:a}),"updateAddressCard"===t&&(0,oi.jsx)(on,{updateAddressCard:"updateAddressCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updatePhotosCard"===t&&(0,oi.jsx)(un,{updatePhotosCard:"updatePhotosCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateAvailableDatesCard"===t&&(0,oi.jsx)(yn,{updateAvailableDatesCard:"updateAvailableDatesCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateICalCard"===t&&(0,oi.jsx)(bn,{accessToken:s,updateICalCard:"updateICalCard"===t,setListingData:i,listingData:n,deactivateUpdateCards:a}),"updateICalExportCard"===t&&(0,oi.jsx)($n,{updateICalExportCard:"updateICalExportCard"===t,deactivateUpdateCards:a,iCalToken:o}),"updateCancellationCard"===t&&(0,oi.jsx)(vn,{updateCancellationCard:"updateCancellationCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateInstantBookCard"===t&&(0,oi.jsx)(wn,{updateInstantBookCard:"updateInstantBookCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateCheckInCheckOutCard"===t&&(0,oi.jsx)(jn,{updateCheckInCheckOutCard:"updateCheckInCheckOutCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updatePreparationTimeCard"===t&&(0,oi.jsx)(Sn,{updatePreparationTimeCard:"updatePreparationTimeCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateDepositCard"===t&&(0,oi.jsx)(Gn,{updateDepositCard:"updateDepositCard"===t,setListingData:i,listingData:n,deactivateUpdateCards:a,accessToken:s}),"updateHouseRulesCard"===t&&(0,oi.jsx)(Dn,{updateHouseRulesCard:"updateHouseRulesCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"updateListingStatusCard"===t&&(0,oi.jsx)(In,{updateListingStatusCard:"updateListingStatusCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a,activateCard:l}),"updateStraIDCard"===t&&(0,oi.jsx)(Rn,{updateStraIDCard:"updateStraIDCard"===t,setListingData:i,accessToken:s,listingData:n,deactivateUpdateCards:a}),"deleteListingCard"===t&&(0,oi.jsx)(On,{accessToken:s,deleteListingCard:"deleteListingCard"===t,listingData:n,deactivateUpdateCards:a}),"deleteListingFailedCard"===t&&(0,oi.jsx)(Jn,{deleteListingFailedCard:"deleteListingFailedCard"===t,deactivateUpdateCards:a}),"updatePaymentPolicyCard"===t&&(0,oi.jsx)(Hn,{updatePaymentPolicyCard:"updatePaymentPolicyCard"===t,listingData:n,deactivateUpdateCards:a,setListingData:i}),"updateWifi"===t&&(0,oi.jsx)(Nn,{updateWifiCard:"updateWifi"===t,listingData:n,accessToken:s,deactivateUpdateCards:a,setListingData:i}),"blocker"===t&&(0,oi.jsx)(En,{deactivateUpdateCards:a,hostawayListingId:n.hostawayListingId})]})}var ea=i(1142),ta=i(9820);const ia={bedroom:"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg",bathroom:"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bathrooms.svg",other:"https://d292awxalydr86.cloudfront.net/Listing+page+icons/Bedrooms.svg"};function na(e){let{updateRoomsCard:t,deactivateUpdateCards:i,listingData:n,activateCard:a,setEditRoomIndex:s}=e;const o=e=>{if(e.length>0){let t=e.filter((e=>"bedroom"!==e.roomType&&"bathroom"!==e.roomType&&"half-bathroom"!==e.roomType)).map((e=>e.roomType));return[...new Set(t)]}return[]},l=(0,oi.jsxs)(oi.Fragment,{children:[(0,oi.jsx)(Nt,{children:n.RoomModels.items.map(((e,t)=>(0,oi.jsxs)(Ut,{onClick:()=>{s(e.id),a("editRoomCard")},children:[(0,oi.jsx)(hi,{hasImage:e.images.length>0,width:"100%",src:e.images.length>0?(0,ri.A)(e.images[0]):ia[e.roomType]||ia.other,alt:"room image"}),(0,oi.jsx)(Mt,{children:e.roomTitle})]},`${e.id}-${t}`)))}),(0,oi.jsx)(Et,{children:(0,oi.jsx)(ta.A,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg",background:"white",onClick:()=>{a("addRoomCard")},iconSize:"24px",size:"64px"})})]}),r=(0,oi.jsx)(Je,{children:n.RoomModels.items.map(((e,t)=>(0,oi.jsxs)(Oe,{onClick:()=>{s(e.id),a("editRoomCard")},id:`room-${t}`,children:[(0,oi.jsx)(aa,{type:e.roomType,imgKeys:e.images}),(0,oi.jsx)(Pe,{children:e.roomTitle})]},`${e.id}-${t}`)))});return(0,oi.jsx)(Ai.A,{backBtnOnClick:i,noContentWrapper:!0,children:(0,oi.jsxs)(St,{paddingTop:"72px",children:[(0,oi.jsxs)(We,{children:[(0,oi.jsx)(He,{children:"Rooms & spaces"}),(0,oi.jsx)(Ne,{type:"button",onClick:()=>{a("addRoomCard")},children:(0,oi.jsx)(ea.Ch,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Plus.svg",alt:"Add a listing"})})]}),(0,oi.jsxs)(Ue,{children:[(0,oi.jsxs)(Me,{children:[n.bedrooms," ",n.bedrooms>1?"Bedrooms":"Bedroom"]}),(0,oi.jsxs)(Me,{children:[n.bathrooms/2," ",n.bathrooms>1?"Bathrooms":"Bathroom"]}),o(n.RoomModels.items).length>0?o(n.RoomModels.items).map(((e,t)=>(0,oi.jsx)(Me,{children:e.charAt(0).toUpperCase()+e.slice(1)},`${e} - ${t}`))):null]}),window.innerWidth<768?l:r]})})}function aa(e){let{imgKeys:t,type:i}=e;return t&&t.length?(0,oi.jsx)(hi,{hasImage:!0,width:"100%",src:(0,ri.A)(t[0],200),alt:"Room image"}):(0,oi.jsx)(hi,{hasImage:!1,width:"100%",src:ia[i]||ia.other,alt:"Room image"})}const sa=[{value:"bedroom",label:"Bedroom"},{value:"bathroom",label:"Bathroom"},{value:"half-bathroom",label:"Half bathroom"},{value:"living-space",label:"Living space"},{value:"kitchen",label:"Kitchen"},{value:"dining",label:"Dining room"},{value:"outdoors",label:"Outdoors"},{value:"parking",label:"Parking"},{value:"workspace",label:"Workspace"},{value:"cellar",label:"Cellar"},{value:"workshop",label:"Workshop"},{value:"balcony",label:"Balcony"},{value:"pool",label:"Pool"},{value:"cinema",label:"Cinema"},{value:"game-room",label:"Game room"},{value:"kitchenette",label:"Kitchenette"},{value:"library",label:"Library"},{value:"sun-room",label:"Sun room"}];function oa(e){let{addRoomCard:t,deactivateUpdateCards:i,listingData:s,setListingData:o,activateCard:l}=e;const[r,d]=(0,n.useState)(null),[c,h]=(0,si.useRecoilState)(ai.H),[p,g]=(0,n.useState)(!1);return(0,oi.jsxs)(Ai.A,{backBtnOnClick:()=>{l("updateRoomsCard")},backBtnType:"Arrow",mobileHeight:"55%",backBtnDisabled:p,cancelBtnOnClick:()=>{i()},cancelBtnDisabled:p,continueBtnDisabled:!r||p,continueBtnLoading:p,continueBtnOnClick:async()=>{g(!0),await(async()=>{try{const e=await(0,a.p)("put","dev-anystay-listing","listing/room",{headers:{Authorization:c,listingid:s.id},body:{roomType:r&&r.value}}),t=JSON.parse(JSON.stringify(s));t.RoomModels.items.push(e.body.room.createRoomModel),t.bathrooms=e.body.bathroomNumber,t.bedrooms=e.body.bedroomNumber,o(t),l("updateRoomsCard")}catch(e){console.log(e),g(!1)}})()},continueBtnText:"Add",children:[(0,oi.jsx)(Gt,{children:"What are you adding?"}),(0,oi.jsx)(be,{children:(0,oi.jsx)(Ni.A,{options:sa,onChange:e=>{d(e)},placeholder:"Select room type",initialValue:r})}),(0,oi.jsx)(Bt,{children:"Rooms must accurately reflect your place"})]})}function la(e){let{editRoomCard:t,deactivateUpdateCards:i,listingData:a,editRoomIndex:s,activateCard:o}=e;const l=(0,n.useMemo)((()=>a.RoomModels.items.filter((e=>e.id===s))[0]),[s,a.RoomModels.items]);if(!l)return null;return(0,oi.jsxs)(Ai.A,{backBtnOnClick:()=>{i(),o("updateRoomsCard")},backBtnType:"Arrow",cancelBtnOnClick:()=>{o("deleteRoomCard")},cancelBtnText:"Delete room",continueBtnOnClick:()=>{i(),o("updateRoomsCard")},children:[(0,oi.jsx)(Gt,{children:l.roomTitle}),(0,oi.jsxs)(Dt,{children:[(0,oi.jsx)(zi,{withImg:!0,imgSrc:l.images[0]?(0,ri.A)(l.images[0],200):"",textCenter:!0,textGap:"4px",title:"Photo",subTitle:l.images[0]?"Selected":"None",onClick:()=>{i(),o("editRoomImageCard")}}),(0,oi.jsx)(zi,{title:"Title",subTitle:l.roomTitle,onClick:()=>{i(),o("editRoomTitleCard")}}),(0,oi.jsx)(zi,{title:"Description",subTitle:l.roomDescription?l.roomDescription:"None",onClick:()=>{i(),o("editRoomDescriptionCard")}}),"bedroom"===l.roomType&&(0,oi.jsx)(zi,{title:"Beds",subTitle:l.roomBeds.length>0&&l.roomBeds.length>0?(e=>{const t={single:0,double:0,queen:0,king:0};e.forEach((e=>{t[e]++}));return Object.entries(t).filter((e=>{let[t,i]=e;return i>0})).map((e=>{let[t,i]=e;return`${i} ${t} bed${i>1?"s":""}`})).join(", ")})(l.roomBeds):"None",onClick:()=>{i(),o("editRoomBedsCard")}})]})]})}var ra=i(1372);function da(e){let{deleteRoomCard:t,deactivateUpdateCards:i,editRoomIndex:s,listingData:o,setListingData:l,activateCard:r}=e;const d=(0,ni.A)(t,(()=>{c||i()})),[c,h]=(0,n.useState)(!1),[p,g]=(0,si.useRecoilState)(ai.H),u=(0,n.useMemo)((()=>o.RoomModels.items.filter((e=>e.id===s))[0]),[s,o.RoomModels.items]);return(0,oi.jsx)(ra.A,{ref:d,closePopup:i,handleSave:async()=>{h(!0),await(async()=>{try{const e=await(0,a.p)("del","dev-anystay-listing","listing/room",{headers:{Authorization:p,listingid:o.id},body:{roomid:u.id}}),t=JSON.parse(JSON.stringify(o));t.RoomModels.items=t.RoomModels.items.filter((t=>t.id!==e.body.room.id)),t.bathrooms=e.body.bathroomNumber,t.bedrooms=e.body.bedroomNumber,l(t),r("updateRoomsCard")}catch(e){console.log(e),h(!1)}})()},disable:c,isContinueBtnLoading:c,btnText:"Delete",backBtnType:"Close",children:(0,oi.jsxs)(Ee,{children:[(0,oi.jsx)(qe,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Warning icon"}),u&&(0,oi.jsxs)(Fe,{children:["Delete ",u.title,"?"]}),(0,oi.jsx)(Ke,{children:"Any details you have entered will be removed"})]})})}function ca(e){let{editRoomTitleCard:t,deactivateUpdateCards:i,editRoomIndex:s,listingData:o,setListingData:l,activateCard:r}=e;const[d,c]=(0,n.useState)(o.RoomModels.items.filter((e=>e.id===s))[0].roomTitle),[h,p]=(0,n.useState)(!1),[g,u]=(0,si.useRecoilState)(ai.H),m=(0,n.useMemo)((()=>o.RoomModels.items.filter((e=>e.id===s))[0]),[s,o.RoomModels.items]);return(0,oi.jsxs)(Ai.A,{mobileHeight:"55%",backBtnType:"Arrow",backBtnOnClick:()=>{r("editRoomCard")},backBtnDisabled:h,cancelBtnDisabled:h,cancelBtnOnClick:()=>{r("editRoomCard")},continueBtnDisabled:h,continueBtnLoading:h,continueBtnOnClick:async()=>{p(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/room/title",{headers:{Authorization:g,listingid:o.id},body:{roomid:m.id,title:d}});let t=o,i=t.RoomModels.items.findIndex((t=>t.id===e.body.room.id));t.RoomModels.items[i]=e.body.room,l(t),r("editRoomCard")}catch(e){console.log(e),p(!1)}})()},children:[(0,oi.jsx)(Gt,{children:"What is your room called?"}),(0,oi.jsx)(re,{type:"text",value:d,onChange:e=>c(e.target.value),maxLength:30}),(0,oi.jsx)(zt,{children:30-d.length})]})}const ha=s.Ay.div`
    position: relative;
    width: 100%;
    aspect-ratio: 3/2;
    flex-shrink: 0;
    border-radius: 10px;
    @media (min-width: 768px) {
        width: 308px;
    }
`,pa=s.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${h.J2.Grey3.color};
    border-radius: 10px;
    background-color: ${h.J2.Grey5.color};
`,ga=s.Ay.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`,ua=s.Ay.div`
    position: relative;
    width: 100%;
    aspect-ratio: 3/2;
    border-radius: 10px;
    cursor: grab;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        width: 308px;
    }
`,ma=s.Ay.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`,xa=s.Ay.div`
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${e=>e.selected?h.J2.Black.color:h.J2.White.color};
    right: 16px;
    top: 16px;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    border: ${e=>e.selected?"none":`0.5px solid ${h.J2.Grey2.color}`};
    display: flex;
    justify-content: center;
    align-items: center;
`,ya=s.Ay.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${h.J2.White.color};
`,fa=s.Ay.div`
    width: ${e=>e.size?e.size:"32px"};
    height: ${e=>e.size?e.size:"32px"};
    border-radius: ${e=>e.borderRadius?e.borderRadius:"8px"};
    display: flex;
    justify-content: center;
    align-items: center;
    touch-action: none;
    position: absolute;
    cursor: grab;
    background: ${e=>e.background?e.background:h.J2.White.color};
    ${e=>e.left?`left: ${e.left};`:""}
    ${e=>e.top?`top: ${e.top};`:""}
    ${e=>e.right?`right: ${e.right};`:""}
    ${e=>e.bottom?`bottom: ${e.bottom};`:""}
`,ba=s.Ay.img`
    width: 16px;
    height: 16px;
`,$a=e=>{let{selected:t}=e;return(0,oi.jsx)(xa,{selected:t,children:t?(0,oi.jsx)(ya,{}):null})},va=e=>{let{id:t,dropped:i}=e;const{setNodeRef:n}=(0,pn.zM)({id:t});return(0,oi.jsx)(ha,{ref:n,children:i?(0,oi.jsxs)(oi.Fragment,{children:[(0,oi.jsx)($a,{selected:!0}),(0,oi.jsx)(ga,{src:(0,ri.A)(i.key),alt:"selected room image"})]}):(0,oi.jsx)(pa,{children:"Drop or select a photo from all photos"})})},wa=e=>{let{id:t,imgKey:i,handleClick:n}=e;const{attributes:a,listeners:s,setNodeRef:o,transform:l,transition:r}=(0,dn.gl)({id:t}),d={transform:cn.Ks.Translate.toString(l),transition:r};return(0,oi.jsxs)(ua,{ref:o,style:d,onClick:()=>n(i),children:[(0,oi.jsx)($a,{}),(0,oi.jsx)(fa,{...s,...a,size:"24px",left:"16px",top:"16px",children:(0,oi.jsx)(ba,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/all-directions.png",alt:"drag icon"})}),(0,oi.jsx)(ma,{src:(0,ri.A)(i),alt:"Draggable image"})]})};function Ca(e){let{editRoomImageCard:t,deactivateUpdateCards:i,editRoomIndex:s,listingData:o,setListingData:l,activateCard:r}=e;const[d,c]=(0,si.useRecoilState)(ai.H),h=(0,n.useMemo)((()=>o.RoomModels.items.filter((e=>e.id===s))[0]),[s,o.RoomModels.items]),[p,g]=(0,n.useState)(h.images.length>0?{key:h.images[0]}:null),[u,m]=(0,n.useState)(o.listingImages.map((e=>({key:JSON.parse(e).key})))),[x,y]=(0,n.useState)(!1);let f=[...u];p&&(f=f.filter((e=>e.key!==p.key)));const b=(0,pn.FR)((0,pn.MS)(pn.AN,{activationConstraint:{distance:8}}),(0,pn.MS)(pn.uN,{coordinateGetter:dn.JR})),$=e=>{m((t=>p?[...f,p].filter((t=>t.key!==e)):t.filter((t=>t.key!==e)))),g({key:e})};return(0,oi.jsx)(Ai.A,{backBtnOnClick:()=>{r("editRoomCard")},backBtnType:"Arrow",backBtnDisabled:x,cancelBtnDisabled:x,cancelBtnOnClick:()=>{r("editRoomCard")},continueBtnDisabled:x,continueBtnLoading:x,continueBtnOnClick:async()=>{y(!0),await(async()=>{try{if(!p)return void r("editRoomCard");const e=await(0,a.p)("post","dev-anystay-listing","listing/room/images",{headers:{Authorization:d,listingid:o.id},body:{roomid:h.id,images:[p.key]}});let t=JSON.parse(JSON.stringify(o)),i=t.RoomModels.items.findIndex((t=>t.id===e.body.room.updateRoomModel.id));t.RoomModels.items[i]=e.body.room.updateRoomModel,l(t),r("editRoomCard")}catch(e){console.log(e),y(!1)}})()},children:(0,oi.jsx)(Ht,{children:(0,oi.jsxs)(pn.Mp,{onDragOver:e=>{const{active:t,over:i}=e;if(i&&"droppable"===i.id){const e=f.find((e=>e.key===t.id));e&&(m((t=>p?[...f,p].filter((t=>t.key!==e.key)):t.filter((t=>t.key!==e.key)))),g(e))}},onDragEnd:e=>{const{active:t,over:i}=e;i&&t.id!==i.id&&"droppable"!==i.id&&m((e=>{const n=e.findIndex((e=>e.key===t.id)),a=e.findIndex((e=>e.key===i.id));return(0,dn.be)(e,n,a)}))},collisionDetection:pn.fp,sensors:b,children:[(0,oi.jsx)(Gt,{children:"Choose a photo of your room"}),(0,oi.jsx)(va,{id:"droppable",dropped:p}),(0,oi.jsx)(Pt,{children:"All photos"}),(0,oi.jsx)(Wt,{children:(0,oi.jsx)(dn.gB,{items:f.map((e=>e.key)),strategy:window.innerWidth<768?dn._G:dn.kL,children:f.map((e=>(0,oi.jsx)(wa,{id:e.key,imgKey:e.key,handleClick:$},e.key)))})})]})})})}function ka(e){let{editRoomBedsCard:t,deactivateUpdateCards:i,editRoomIndex:s,activateCard:o,listingData:l,setListingData:r}=e;const[d,c]=(0,n.useState)({singleBeds:l.RoomModels.items.filter((e=>e.id===s))[0].roomBeds.filter((e=>"single"===e)).length,doubleBeds:l.RoomModels.items.filter((e=>e.id===s))[0].roomBeds.filter((e=>"double"===e)).length,queenBeds:l.RoomModels.items.filter((e=>e.id===s))[0].roomBeds.filter((e=>"queen"===e)).length,kingBeds:l.RoomModels.items.filter((e=>e.id===s))[0].roomBeds.filter((e=>"king"===e)).length}),[h,p]=(0,n.useState)(!1),[g,u]=(0,si.useRecoilState)(ai.H),m=(0,n.useMemo)((()=>l.RoomModels.items.filter((e=>e.id===s))[0]),[s,l.RoomModels.items]);return(0,oi.jsxs)(Ai.A,{mobileHeight:"55%",backBtnOnClick:()=>{o("editRoomCard")},backBtnDisabled:h,backBtnType:"Arrow",cancelBtnDisabled:h,cancelBtnOnClick:()=>{o("editRoomCard")},continueBtnDisabled:h,continueBtnLoading:h,continueBtnOnClick:async()=>{p(!0),await(async()=>{try{let e=[];for(let a=0;a<d.singleBeds;a++)e.push("single");for(let a=0;a<d.doubleBeds;a++)e.push("double");for(let a=0;a<d.queenBeds;a++)e.push("queen");for(let a=0;a<d.kingBeds;a++)e.push("king");const t=await(0,a.p)("post","dev-anystay-listing","listing/room/beds",{headers:{Authorization:g,listingid:l.id},body:{roomid:m.id,beds:e}});let i=JSON.parse(JSON.stringify(l)),n=i.RoomModels.items.findIndex((e=>e.id===t.body.room.id));i.RoomModels.items[n]=t.body.room,r(i),o("editRoomCard")}catch(e){console.log(e),p(!1)}})()},children:[(0,oi.jsx)(Gt,{marginBottom:"8px",children:"What beds are in your room?"}),(0,oi.jsx)(Tt,{children:"Select available bed types in your bedroom."}),(0,oi.jsxs)(It,{children:[(0,oi.jsx)(Rt,{children:"Single bed"}),(0,oi.jsxs)(Lt,{children:[(0,oi.jsx)(Ot,{onClick:()=>{d.singleBeds<10&&c((e=>({...e,singleBeds:e.singleBeds+1})))},children:"+"}),(0,oi.jsx)(Jt,{children:d.singleBeds}),(0,oi.jsx)(Ot,{onClick:()=>{d.singleBeds>0&&c((e=>({...e,singleBeds:e.singleBeds-1})))},disabled:0===d.singleBeds,children:"-"})]})]}),(0,oi.jsxs)(It,{children:[(0,oi.jsx)(Rt,{children:"Double bed"}),(0,oi.jsxs)(Lt,{children:[(0,oi.jsx)(Ot,{onClick:()=>{d.doubleBeds<10&&c((e=>({...e,doubleBeds:e.doubleBeds+1})))},children:"+"}),(0,oi.jsx)(Jt,{children:d.doubleBeds}),(0,oi.jsx)(Ot,{onClick:()=>{d.doubleBeds>0&&c((e=>({...e,doubleBeds:e.doubleBeds-1})))},disabled:0===d.doubleBeds,children:"-"})]})]}),(0,oi.jsxs)(It,{children:[(0,oi.jsx)(Rt,{children:"Queen bed"}),(0,oi.jsxs)(Lt,{children:[(0,oi.jsx)(Ot,{onClick:()=>{d.queenBeds<10&&c((e=>({...e,queenBeds:e.queenBeds+1})))},children:"+"}),(0,oi.jsx)(Jt,{children:d.queenBeds}),(0,oi.jsx)(Ot,{onClick:()=>{d.queenBeds>0&&c((e=>({...e,queenBeds:e.queenBeds-1})))},disabled:0===d.queenBeds,children:"-"})]})]}),(0,oi.jsxs)(It,{children:[(0,oi.jsx)(Rt,{children:"King bed"}),(0,oi.jsxs)(Lt,{children:[(0,oi.jsx)(Ot,{onClick:()=>{d.kingBeds<10&&c((e=>({...e,kingBeds:e.kingBeds+1})))},children:"+"}),(0,oi.jsx)(Jt,{children:d.kingBeds}),(0,oi.jsx)(Ot,{onClick:()=>{d.kingBeds>0&&c((e=>({...e,kingBeds:e.kingBeds-1})))},disabled:0===d.kingBeds,children:"-"})]})]})]})}function ja(e){let{editRoomDescriptionCard:t,deactivateUpdateCards:i,editRoomIndex:s,listingData:o,setListingData:l,activateCard:r}=e;const[d,c]=(0,n.useState)(o.RoomModels.items.filter((e=>e.id===s))[0].roomDescription),[h,p]=(0,n.useState)(!1),[g,u]=(0,si.useRecoilState)(ai.H),m=(0,n.useMemo)((()=>o.RoomModels.items.filter((e=>e.id===s))[0]),[s,o.RoomModels.items]);return(0,oi.jsxs)(Ai.A,{mobileHeight:"55%",backBtnOnClick:()=>{r("editRoomCard")},backBtnType:"Arrow",backBtnDisabled:h,cancelBtnDisabled:h,cancelBtnOnClick:()=>{r("editRoomCard")},continueBtnDisabled:h,continueBtnLoading:h,continueBtnOnClick:async()=>{p(!0),await(async()=>{try{const e=await(0,a.p)("post","dev-anystay-listing","listing/room/description",{headers:{Authorization:g,listingid:o.id},body:{roomid:m.id,roomDescription:d}});let t=o,i=t.RoomModels.items.findIndex((t=>t.id===e.body.room.id));t.RoomModels.items[i]=e.body.room,l(t),r("editRoomCard")}catch(e){console.log(e),p(!1)}})()},children:[(0,oi.jsx)(Gt,{children:"How do you describe this room?"}),(0,oi.jsx)(pe,{value:d,onChange:e=>c(e.target.value),maxLength:2500,placeholder:"Please write a description for this room."}),(0,oi.jsx)(zt,{children:2500-d.trim().length})]})}function _a(e){let{popupName:t,activateCard:i,listingData:a,setListingData:s,deactivateUpdateCards:o}=e;const[l,r]=(0,n.useState)("0");return(0,oi.jsxs)(oi.Fragment,{children:["updateRoomsCard"===t&&(0,oi.jsx)(na,{updateRoomsCard:"updateRoomsCard"===t,activateCard:i,listingData:a,deactivateUpdateCards:o,setEditRoomIndex:r}),"addRoomCard"===t&&(0,oi.jsx)(oa,{addRoomCard:"addRoomCard"===t,listingData:a,setListingData:s,deactivateUpdateCards:o,activateCard:i}),"editRoomCard"===t&&(0,oi.jsx)(la,{activateCard:i,editRoomCard:"editRoomCard"===t,editRoomIndex:l,listingData:a,deactivateUpdateCards:o}),"deleteRoomCard"===t&&(0,oi.jsx)(da,{deleteRoomCard:"deleteRoomCard"===t,activateCard:i,editRoomIndex:l,listingData:a,setListingData:s,deactivateUpdateCards:o}),"editRoomTitleCard"===t&&(0,oi.jsx)(ca,{activateCard:i,editRoomIndex:l,listingData:a,setListingData:s,deactivateUpdateCards:o,editRoomTitleCard:"editRoomTitleCard"===t}),"editRoomDescriptionCard"===t&&(0,oi.jsx)(ja,{activateCard:i,editRoomIndex:l,listingData:a,setListingData:s,deactivateUpdateCards:o,editRoomDescriptionCard:"editRoomDescriptionCard"===t}),"editRoomImageCard"===t&&(0,oi.jsx)(Ca,{activateCard:i,editRoomIndex:l,listingData:a,setListingData:s,deactivateUpdateCards:o,editRoomImageCard:"editRoomImageCard"===t}),"editRoomBedsCard"===t&&(0,oi.jsx)(ka,{activateCard:i,editRoomIndex:l,listingData:a,setListingData:s,deactivateUpdateCards:o,editRoomBedsCard:"editRoomBedsCard"===t}),"blocker"===t&&(0,oi.jsx)(En,{deactivateUpdateCards:o,hostawayListingId:a.hostawayListingId})]})}var Aa=i(8306);function Sa(){const e=(0,Ln.Zp)(),{id:t}=(0,Ln.g)(),[i,s]=(0,si.useRecoilState)(ai.H),[o,l]=(0,n.useState)(null),[r,d]=(0,n.useState)(0),[c,h]=(0,n.useState)(""),[m,x]=(0,n.useState)(""),[y,f]=(0,n.useState)(""),G=(0,n.useCallback)((async()=>{let e=await(0,a.p)("get","dev-anystay-listing",`listing/${t}/edit-listing`);e=e.body.listing,l(e),x(e.internalName)}),[t]),B=(0,n.useCallback)((async()=>{await(0,a.p)("get","dev-anystay-listing",`listing/icaltoken/${t}`,{headers:{Authorization:i,listingID:t}}).then((e=>{if(e.success){let t=`https://api.anystay.com.au/listing/ical/${e.body.iCalToken}`;t=`https://api.anystay.com.au/dev/listing/ical/${e.body.iCalToken}`,f(t)}})).catch((e=>{console.log(e)}))}),[t,i]);(0,n.useEffect)((()=>{G(),B()}),[B,G]);const D=(e,t)=>{if(e&&t){const i={"entire-place":"Entire","private-room":"Private room in","hotel-room":"Hotel room in","shared-room":"Shared room in"}[e],n=t.split("-"),a=n.indexOf("and");-1!==a&&(n[a]="&");return`${i}${` ${n.join(" ")}`}`}},z=async()=>{h(""),document.body.style.overflow="unset"},T=e=>{const t=o&&o.hostawayListingId,i=t&&o.street&&o.streetNumber&&o.suburb;h(t?t&&!i&&"updateAddressCard"===e?e:"blocker":e),document.body.style.overflow="hidden"},I=()=>{e(-1)};if(!o)return null;return(0,oi.jsxs)(p,{children:[(0,oi.jsx)(Aa.A,{title:"Edit listing | Anystay"}),(0,oi.jsxs)(g,{children:[(0,oi.jsxs)(C,{children:[(0,oi.jsx)(Li.A,{onClick:I,type:"Arrow",mobileTop:24}),(0,oi.jsx)(k,{children:o.propertyTitle})]}),(0,oi.jsxs)(u,{children:[(0,oi.jsxs)(b,{children:[(0,oi.jsx)(Li.A,{onClick:I,type:"Arrow"}),(0,oi.jsx)(k,{children:o.propertyTitle})]}),(0,oi.jsxs)($,{onClick:()=>{T("updateListingStatusCard")},children:[(0,oi.jsx)(v,{selected:"active"===o.status}),"active"===o.status?"Active":"Suspended"===o.status?"Suspended":"Inactive"]}),(0,oi.jsx)(w,{type:"button",onClick:()=>{window.open(`/listing/${t}`,"_blank")},children:"View"})]}),(0,oi.jsx)(li,{internalName:m,setInternalName:x,listingID:o.id}),(0,oi.jsxs)(j,{children:[(0,oi.jsx)(_,{children:(0,oi.jsxs)(A,{children:[(0,oi.jsx)(S,{selected:0===r,onClick:()=>{d(0),window.scrollTo(0,0)},children:"Details"}),(0,oi.jsx)(S,{selected:1===r,onClick:()=>{d(1),window.scrollTo(0,0)},children:"Experience"}),(0,oi.jsx)(S,{selected:2===r,onClick:()=>{d(2),window.scrollTo(0,0)},children:"Pricing and fees"}),(0,oi.jsx)(S,{selected:3===r,onClick:()=>{d(3),window.scrollTo(0,0)},children:"Calendar and bookings"}),(0,oi.jsx)(S,{selected:4===r,onClick:()=>{d(4),window.scrollTo(0,0)},children:"Rules and policies"})]})}),(0,oi.jsx)(ee,{selected:r,children:(e=>{switch(e){case 0:default:return(0,oi.jsx)(gi,{editListingIndex:e,getTypeOfPlace:D,listingData:o,activateCard:T});case 1:return(0,oi.jsx)(Ci,{editListingIndex:e,listingData:o,activateCard:T});case 2:return(0,oi.jsx)(ki,{editListingIndex:e,listingData:o,activateCard:T});case 3:return(0,oi.jsx)(ji,{editListingIndex:e,listingData:o,activateCard:T,iCalToken:y});case 4:return(0,oi.jsx)(_i,{editListingIndex:e,listingData:o,activateCard:T})}})(r)})]}),(0,oi.jsx)(Xn,{popupName:c,listingData:o,deactivateUpdateCards:z,setListingData:l,accessToken:i,iCalToken:y,activateCard:T}),(0,oi.jsx)(_a,{popupName:c,listingData:o,setListingData:l,activateCard:T,deactivateUpdateCards:z})]})]})}},5439:(e,t,i)=>{i.d(t,{D:()=>n});const n=(e,t)=>{const i={type:"None",checkInOutTime:{startTime:t?"15:00":"9:00",endTime:t?"17:00":"11:00"},steps:[{step:1,imgKey:"",instruction:""}]};if(!e)return i;const n=JSON.parse(JSON.stringify(i));try{let t=JSON.parse(e);return"object"!==typeof t||(t.type&&(n.type=t.type),t.checkInOutTime&&(n.checkInOutTime=t.checkInOutTime),t.steps&&(n.steps=t.steps)),n}catch(a){return n.steps[0].instruction=e,n}}},1142:(e,t,i)=>{i.d(t,{BU:()=>w,Cg:()=>k,Ch:()=>y,Dc:()=>p,Ee:()=>f,Kl:()=>d,LF:()=>j,Le:()=>g,MQ:()=>m,NF:()=>l,Op:()=>o,Sb:()=>u,YH:()=>h,Zd:()=>r,bD:()=>C,i0:()=>v,js:()=>x,l1:()=>c,sD:()=>$,zP:()=>b});var n=i(2119),a=i(5475),s=i(4936);const o=n.Ay.div`
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
        padding: ${s.dB.spacing_800.padding};
        padding-top: 0;
    }
`,l=n.Ay.h1`
    font-size: ${s.$G.sans_900_semi.fontSize};
    line-height: ${s.$G.sans_900_semi.lineHeight};
    font-weight: ${s.$G.sans_900_semi.fontWeight};

    margin: 0;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_1000_semi.fontSize};
        line-height: ${s.$G.sans_1000_semi.lineHeight};
        font-weight: ${s.$G.sans_1000_semi.fontWeight};
        margin-top: 48px;
        margin-bottom: 32px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        margin: 0 auto;
        margin-top: 48px;
        margin-bottom: 32px;
    }
`,r=n.Ay.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: ${s.dB.spacing_300.gap};

    @media (min-width: 768px) {
        gap: ${s.dB.spacing_500.gap} 24px;
    }
`,d=n.Ay.div`
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
`,c=n.Ay.div`
    width: 100%;
    border-radius: ${s.Qk.radius_12.borderRadius};
    overflow: hidden;
    aspect-ratio: 1/1;
    background-color: ${s.J2.Grey3.color};

    @media (min-width: 768px) {
        aspect-ratio: 20/19;
    }
`,h=n.Ay.img`
    object-fit: cover;
    border-radius: ${s.Qk.radius_12.borderRadius};
    width: 100%;
    height: 100%;
`,p=n.Ay.p`
    margin: ${s.dB.spacing_250.margin} 0 0 0;
    font-size: ${s.$G.sans_350_semi.fontSize};
    line-height: ${s.$G.sans_350_semi.lineHeight};
    font-weight: ${s.$G.sans_350_semi.fontWeight};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_400_semi.fontSize};
        line-height: ${s.$G.sans_400_semi.lineHeight};
    }
`,g=n.Ay.p`
    margin-top: 2px;
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    font-weight: ${s.$G.sans_300.fontWeight};
    color: ${s.J2.Grey.color};
`,u=n.Ay.div`
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
    font-size: ${s.Ox.sans_button_100.fontSize};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    font-weight: ${s.Ox.sans_button_100.fontWeight};
    margin-top: 2px;
    text-transform: capitalize;
    color: ${e=>e.draft?s.J2.Yellow.color:"active"===e.status?s.J2.Green.color:s.J2.Red1.color};
`,x=(n.Ay.div`
    position: fixed;
    bottom: 89px;
    left: 0;
    background: ${s.J2.White.color};
    display: flex;
    align-items: center;
    z-index: 4;
    justify-content: center;
    width: 100%;
    padding: ${s.dB.spacing_400.padding};
    border-top: 1px solid ${s.J2.Grey2.color};
    border-bottom: 1px solid ${s.J2.Grey2.color};
`,(0,n.Ay)(a.N_)`
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: ${s.J2.Grey5.color};
    }
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
`),y=n.Ay.img`
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }
`,f=(0,n.Ay)(a.N_)`
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
`,b=(n.Ay.div`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    margin: ${s.dB.spacing_300.margin};
    border-radius: ${s.Qk.radius_8.borderRadius};
    background: ${s.J2.White.color};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    height: 25px;
    width: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e=>"active"===e.status?s.J2.Green.color:s.J2.Red1.color};
    font-size: ${s.$G.sans_200_semi.fontSize};
    font-weight: ${s.$G.sans_200_semi.fontWeight};
    line-height: ${s.$G.sans_200_semi.lineHeight};
    z-index: 2;
    text-transform: capitalize;

    @media (min-width: 768px) {
        margin: ${s.dB.spacing_350.margin};
        margin-left: 32px;
        font-size: ${s.$G.sans_300_semi.fontSize};
        line-height: ${s.$G.sans_300_semi.lineHeight};
        height: 33px;
        box-shadow: none;
        height: unset;
        width: unset;
        padding: 0;
        align-self: flex-end;
    }
`,n.Ay.button`
    border-radius: ${s.Qk.radius_8.borderRadius};
    background: ${s.J2.White.color};
    box-shadow: ${s.E_.shadow_100.boxShadow};
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
`),$=n.Ay.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
    @media (min-width: 768px) {
        height: 20px;
        width: 20px;
    }
`,v=n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${s.dB.spacing_250.gap};
    margin-top: 16px;

    @media (min-width: 768px) {
        margin: 0 auto;
        margin-top: 32px;
    }
`,w=n.Ay.p`
    font-size: ${s.$G.sans_600_semi.fontSize};
    line-height: ${s.$G.sans_600_semi.lineHeight};
    font-weight: ${s.$G.sans_600_semi.fontWeight};
    color: ${s.J2.Grey1.color};
    margin: 0;
`,C=n.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    color: ${s.J2.Grey1.color};
    margin: 0;
`,k=(n.Ay.div`
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
    gap: ${s.dB.spacing_350.gap};
`,n.Ay.button`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background: ${s.J2.White.color};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    cursor: pointer;
    @media (min-width: 1280px) {
        margin: 0 12px;
    }
`,n.Ay.img`
    width: 12px;
    object-fit: cover;
`,n.Ay.button`
    font-size: ${s.Ox.sans_button_100.fontSize};
    line-height: ${s.Ox.sans_button_100.lineHeight};
    font-weight: ${s.Ox.sans_button_100.fontWeight};
    height: 32px;
    width: 32px;
    border: none;
    border-radius: 50%;
    color: ${e=>e.selected?s.J2.White.color:s.J2.Black.color};
    background: ${e=>e.selected?s.J2.Blue.color:"none"};
    cursor: pointer;

    @media (min-width: 1280px) {
        font-size: ${s.Ox.sans_button_200.fontSize};
        line-height: ${s.Ox.sans_button_200.lineHeight};
        height: 44px;
        width: 44px;
    }
`,n.Ay.p`
    margin: 0 auto;
    font-size: ${s.$G.sans_200.fontSize};
    font-weight: ${s.$G.sans_200.fontWeight};

    line-height: ${s.$G.sans_200.lineHeight};
    @media (min-width: 1280px) {
        font-size: ${s.$G.sans_300.fontSize};
        line-height: ${s.$G.sans_300.lineHeight};
    }
`,(0,n.Ay)(a.N_)`
    height: 80px;
    width: 100%;
    background: ${s.J2.White.color};
    border-radius: ${s.Qk.radius_12.borderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${s.E_.shadow_100.boxShadow};
    text-decoration: none;
    margin: 0 auto;
    margin-bottom: 24px;
    padding: 18px 24px;
    max-width: 1024px;
    cursor: pointer;
`,n.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    font-weight: ${s.$G.sans_300_semi.fontWeight};

    margin: 0;
`,n.Ay.p`
    font-size: ${s.$G.sans_200.fontSize};
    line-height: ${s.$G.sans_200.lineHeight};
    font-weight: ${s.$G.sans_200.fontWeight};

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
        background-color: ${s.J2.Grey5.color};
    }

    .MuiPaginationItem-page.Mui-selected {
        background-color: ${s.J2.Blue.color} !important;
        color: ${s.J2.White.color};
        font-size: ${s.$G.sans_400_semi.fontSize};
        line-height: ${s.$G.sans_400_semi.lineHeight};
        font-weight: ${s.$G.sans_400_semi.fontWeight};
    }
`),j=n.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    color: ${s.J2.Grey.color};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    margin: 0;
    margin-top: 24px;
`}}]);
//# sourceMappingURL=4725.1c00ab4c.chunk.js.map
//# debugId=fd4738b7-4909-5c2b-bfed-86f9500ce41d
