"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="95ee2759-780f-57b6-b5dc-afe3ff4ff86a")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[3915],{3212:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(2119),o=i(4936);const a=n.Ay.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${o.J2.Grey1.color};
    box-shadow:
        22px 0 ${o.J2.Grey1.color},
        -22px 0 ${o.J2.Grey1.color};
    position: relative;
    animation: ${n.i7`
    0% {
      background-color: ${o.J2.White.color};
      box-shadow: 22px 0 ${o.J2.White.color}, -22px 0 ${o.J2.Grey1.color};
    }
    50% {
      background-color: ${o.J2.Grey1.color};
      box-shadow: 22px 0 ${o.J2.White.color}, -22px 0 ${o.J2.White.color};
    }
    100% {
      background-color: ${o.J2.White.color};
      box-shadow: 22px 0 ${o.J2.Grey1.color}, -22px 0 ${o.J2.White.color};
    }
`} 0.5s ease-out infinite alternate;
`;var s=i(579);const d=function(e){return(0,s.jsx)(a,{...e})}},5242:(e,t,i)=>{i.d(t,{AV:()=>y,Fh:()=>l,G9:()=>h,Hw:()=>w,IF:()=>p,Jx:()=>m,Me:()=>c,R7:()=>s,RP:()=>j,XP:()=>r,bW:()=>A,cD:()=>g,cM:()=>v,if:()=>u,l3:()=>$,nw:()=>x,sh:()=>_,un:()=>f,vC:()=>d,xR:()=>b});var n=i(2119),o=i(5475),a=i(4936);const s=n.Ay.div`
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    /* overflow-y: auto; */
    padding-bottom: 128px;

    @media (min-width: 768px) {
        padding: 0;
        padding-top: 80px;
        width: calc(100% - 64px);
        ::-webkit-scrollbar {
            display: none;
        }
    }
`,d=n.Ay.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,l=n.Ay.div`
    height: fit-content;
    width: 363px;
    margin-left: 80px;
    margin-top: 40px;
    border-radius: ${a.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${a.dB.spacing_400.padding};
    border: 1px solid ${a.J2.Grey2.color};

    @media (max-width: 1013px) {
        display: none;
    }
`,r=n.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    padding-top: 64px;

    @media (min-width: 768px) {
        position: relative;
        border: none;
        padding-top: 48px;
        justify-content: flex-start;
    }
`,c=n.Ay.p`
    font-size: ${a.$G.sans_900_semi.fontSize};
    font-weight: ${a.$G.sans_900_semi.fontWeight};

    line-height: ${a.$G.sans_900_semi.lineHeight};
    justify-self: center;
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1000_bold.fontSize};
        line-height: ${a.$G.sans_1000_bold.lineHeight};
        justify-self: flex-start;
        padding-left: 24px;
    }
`,g=n.Ay.div`
    display: flex;
`,u=n.Ay.div`
    width: 100%;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto 1fr;
    border-bottom: 1px solid ${a.J2.Grey2.color};
    gap: ${a.dB.spacing_400.gap};
    height: 40px;
`,p=n.Ay.button`
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    color: ${e=>e.selected?a.J2.Black.color:a.J2.Grey.color};
    padding-bottom: 16px !important;
    margin: 0;
    background: none;
    border: none;
    border-bottom: ${e=>e.selected?"2px solid black":"2px solid transparent"};
    padding: 0;
    cursor: pointer;
`,h=n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${a.J2.Grey2.color};
    margin-top: 48px;
    margin-bottom: 0px;

    //Temporarily hidden
    display: none;
`,x=n.Ay.div`
    font-size: ${a.$G.sans_600_bold.fontSize};
    font-weight: ${a.$G.sans_600_bold.fontWeight};
    margin: 0;
    line-height: ${a.$G.sans_600_bold.lineHeight};

    margin-bottom: 16px;
`,f=n.Ay.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`,y=n.Ay.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
`,m=n.Ay.div`
    display: flex;
    flex-direction: column;
`,$=n.Ay.p`
    font-size: ${a.$G.sans_700_semi.fontSize};
    line-height: ${a.$G.sans_700_semi.lineHeight};
    font-weight: ${a.$G.sans_700_semi.fontWeight};
    color: ${a.J2.Grey1.color};
    margin: 0;
    margin-bottom: 12px;
`,b=n.Ay.p`
    font-size: ${a.$G.sans_500.fontSize};
    line-height: ${a.$G.sans_500.lineHeight};
    font-weight: ${a.$G.sans_500.fontWeight};
    color: ${a.J2.Grey1.color};
    margin: 0;
    margin-bottom: 90px;
    width: 180px;
`,v=n.Ay.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`,_=n.Ay.p`
    font-size: ${a.so.sans_text_300.fontSize};
    font-weight: ${a.so.sans_text_300.fontWeight};
    line-height: ${a.so.sans_text_300.lineHeight};

    margin-top: 24px;
    margin-bottom: 0;
`,A=(0,n.Ay)(o.N_)`
    text-decoration: none;
    cursor: pointer;
`,w=n.Ay.img`
    width: 8px;
    height: 12px;
    object-fit: cover;
`,j=n.Ay.div`
    padding: 0;
    border: none;
    background: none;
    margin-left: auto;
    cursor: pointer;
`;n.Ay.p`
    font-size: ${a.$G.sans_600_bold.fontSize};
    font-weight: ${a.$G.sans_600_bold.fontWeight};
    line-height: ${a.$G.sans_600_bold.lineHeight};

    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 16px;
`,n.Ay.p`
    max-width: 210px;
    font-size: ${a.$G.sans_300.fontSize};
    font-weight: ${a.$G.sans_300.fontWeight};
    line-height: ${a.$G.sans_300.lineHeight};

    margin: 0 auto;
    text-align: center;
`,n.Ay.img`
    width: 64px;
    height: 64px;
    object-fit: cover;
    text-align: center;
    margin: 0 auto;
    margin-top: auto;
`,n.Ay.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    margin: ${a.dB.spacing_400.margin};
    margin-right: auto;
`,n.Ay.img`
    height: 16px;
    object-fit: cover;
`},3915:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Ve});var n=i(5043),o=i(3216),a=i(7426),s=i(2119),d=i(620),l=i(5475),r=i(4936);const c=s.Ay.div`
    display: flex;
`,g=s.Ay.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,u=s.Ay.div`
    height: fit-content;
    width: 363px;
    margin-left: 80px;
    margin-top: 40px;
    border-radius: ${r.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${r.dB.spacing_400.padding};
    border: 1px solid ${r.J2.Grey2.color};

    @media (max-width: 1024px) {
        display: none;
    }
`,p=((0,s.Ay)(l.N_)`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`,s.Ay.p`
    font-size: ${r.so.sans_text_300.fontSize};
    font-weight: ${r.so.sans_text_300.fontWeight};
    line-height: ${r.so.sans_text_300.lineHeight};

    margin-top: 24px;
    margin-bottom: 0;
`),h=(s.Ay.img`
    /* position: relative; */
    width: 9px;
    height: 16px;
    margin: 0;
    padding: 0;
    justify-self: flex-start;
    margin-right: auto;
    display: flex;
    align-items: center;
    object-fit: cover;
`,s.Ay.div`
    width: 100%;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto 1fr;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    gap: ${r.dB.spacing_400.gap};
    height: 40px;
`),x=s.Ay.button`
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    color: ${e=>e.selected?r.J2.Black.color:r.J2.Grey.color};
    border: none;
    border-bottom: ${e=>e.selected?"2px solid black":"2px solid transparent"};
    padding-bottom: 16px !important;
    margin: 0;
    background: none;
    padding: 0;
    cursor: pointer;
`,f=(s.Ay.div`
    width: 100%;
    height: 3px;
    background: ${r.J2.Black.color};
    align-self: flex-end;
    transition: 0.3s;
    grid-column: ${e=>e.selected?"1/2":"2/3"};
    grid-row: 1/2;
`,s.Ay.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
`),y=s.Ay.p`
    font-size: ${r.$G.sans_700_semi.fontSize};
    line-height: ${r.$G.sans_700_semi.lineHeight};
    font-weight: ${r.$G.sans_700_semi.fontWeight};
    margin: 0;

    margin-bottom: 8px;
`,m=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin: 0;
    color: ${r.J2.Grey.color};
    margin-bottom: 32px;

    span {
        font-weight: ${r.$G.sans_200_semi.fontWeight};
    }

    @media (min-width: 768px) {
        margin-bottom: 32px;
        br {
            display: none;
        }
    }
`,$=s.Ay.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`,b=s.Ay.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    padding: ${r.dB.spacing_400.padding} 0px ${r.dB.spacing_250.padding};
    justify-content: space-between;
    align-items: center;
`,v=s.Ay.p`
    margin: 0;
    font-size: ${r.$G.sans_400_semi.fontSize};

    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
`,_=s.Ay.div`
    width: 128px;
    display: flex;
    justify-content: center;
    align-content: center;
`,A=s.Ay.button`
    text-decoration: underline;
    background: none;
    padding: 0;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    margin: 0;
    color: ${e=>e.selected?r.J2.Black.color:r.J2.Grey1.color};
    border: none;
    cursor: pointer;
`,w=s.Ay.button`
    width: 195px;
    height: 48px;
    border-radius: 9px;
    margin-top: 24px;
    margin-bottom: 16px;
    background: ${r.J2.Black.color};
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    color: ${r.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    padding: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,j=s.Ay.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background: ${r.J2.White.color};
    position: fixed;
    z-index: 9;
    flex-direction: column;
    bottom: 0;
    left: 0;

    @media (min-width: 768px) {
        display: none;
    }
`,G=s.Ay.button`
    width: calc(100% - 48px);
    height: 48px;
    border-radius: 9px;
    margin-top: 16px;
    background: ${r.J2.Black.color};
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    color: ${r.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`,k=s.Ay.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`,S=(s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${r.J2.Grey2.color};
`,s.Ay.div`
    font-size: ${r.$G.sans_600_bold.fontSize};
    font-weight: ${r.$G.sans_600_bold.fontWeight};
    margin: 0;
    line-height: ${r.$G.sans_600_bold.lineHeight};

    margin-bottom: 32px;
`,s.Ay.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 5;
    min-height: 50vh;
    background: ${r.J2.White.color};
    border-radius: 14px 14px 0 0;
    box-shadow: ${r.E_.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    transform: translateY(${e=>e.addCard?"0":"100vh"});
    transition: 0.3s;
`,s.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    margin: ${r.dB.spacing_400.margin};
    padding-bottom: 24px;
    // flex-direction: column;
    gap: ${r.dB.spacing_300.gap};
    text-align: center;
    border-bottom: 1px solid ${r.J2.Grey2.color};
`,s.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};

    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 4px;
`,s.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    font-weight: ${r.$G.sans_400.fontWeight};
    margin: 0;

    a {
        font-weight: ${r.$G.sans_300_semi.fontWeight};
    }
`),z=(s.Ay.form`
    height: calc(70vh - 120px);
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,s.Ay.button`
    height: 100px;
    width: calc(50% - 8px);
    border-radius: 9px;
    border: ${e=>e.selected?`1px solid ${r.J2.Blue.color}`:`1px solid ${r.J2.Grey1.color}`};
    outline: ${e=>e.selected?`1px solid ${r.J2.Blue.color}`:null};
    padding: ${r.dB.spacing_250.padding} ${r.dB.spacing_300.padding};
    display: flex;
    flex-direction: column;
    background: none;
    text-align: left;
    cursor: pointer;
`,s.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};

    margin: 0;
`,s.Ay.p`
    font-size: ${r.$G.sans_200.fontSize};
    font-weight: ${r.$G.sans_200.fontWeight};
    line-height: ${r.$G.sans_200.lineHeight};

    margin: 0;
    margin-top: 8px;
`,s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`),B=s.Ay.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${r.dB.spacing_250.padding};
    &:hover {
        background-color: ${r.J2.Grey5.color};
    }
`,J=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    padding-bottom: 12px;
    cursor: pointer;
`,W=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,P=s.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    font-weight: ${r.$G.sans_400_semi.fontWeight};

    line-height: ${r.$G.sans_400_semi.lineHeight};
    margin: 0;
`,C=s.Ay.button`
    background: none;
    border: none;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};

    padding: 0;
    margin: 0;
    text-decoration: underline;
    cursor: pointer;
`,I=s.Ay.p`
    margin: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    font-size: ${r.$G.sans_300.fontSize};
    color: ${r.J2.Grey.color};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin-top: 16px;
`,H=s.Ay.p`
    font-size: ${r.$G.sans_500_semi.fontSize};
    line-height: ${r.$G.sans_500_semi.lineHeight};

    font-weight: ${r.$G.sans_500_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 12px;
    text-align: center;
`,D=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0 auto;
    color: ${e=>e.invalid?r.J2.Red1.color:r.J2.Black.color};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin-bottom: 32px;
    max-width: 230px;
    text-align: center;
`,F=(s.Ay.button`
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    background: none;
    border: none;
    text-decoration: underline;

    text-align: left;
    align-self: flex-start;
    cursor: pointer;
`,s.Ay.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${r.dB.spacing_400.padding} ${r.dB.spacing_400.padding} ${r.dB.spacing_300.padding};
    background: ${r.J2.White.color};
    box-shadow: ${r.E_.shadow_300.boxShadow};
    min-height: 395px;

    @media (min-width: 768px) {
        width: 560px;
        display: flex;
        flex-direction: column;
    }
`),M=s.Ay.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    height: fit-content;
    padding: ${r.dB.spacing_400.padding} ${r.dB.spacing_400.padding} ${r.dB.spacing_300.padding};
    padding-bottom: 100px;
    background: ${r.J2.White.color};
    box-shadow: ${r.E_.shadow_300.boxShadow};

    @media (min-width: 768px) {
        width: 560px;
        padding: ${r.dB.spacing_400.padding};
        display: flex;
        flex-direction: column;
    }
`,N=s.Ay.p`
    font-size: ${r.$G.sans_700_semi.fontSize};
    line-height: ${r.$G.sans_700_semi.lineHeight};
    font-weight: ${r.$G.sans_700_semi.fontWeight};
    margin: ${r.dB.spacing_500.margin} 0 ${r.dB.spacing_250.margin};
`,O=s.Ay.p`
    margin: 0;

    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    max-width: 250px;
    text-align: center;
    font-weight: ${r.$G.sans_300.fontWeight};
    margin-bottom: 32px;
`,T=s.Ay.div`
    padding-bottom: 24px;
    width: 100%;
`,V=s.Ay.div`
    display: grid;
    grid-template-columns: 50% 50%;
`,R=s.Ay.input`
    height: 54px;
    width: 100%;
    border: 1px solid ${r.J2.Grey1.color};
    border-radius: 9px;
    padding-left: 16px;
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 8px;
    outline: none;
`,U=s.Ay.label`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0;
    font-weight: ${r.$G.sans_300.fontWeight};
`,E=(s.Ay.button`
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    color: ${r.J2.White.color};
    background: ${r.J2.Blue.color};
    cursor: pointer;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 48px;
    width: 156px;
    ${e=>e.disabled&&"opacity: 0.5; cursor: not-allowed;"};

    @media (min-width: 768px) {
        width: 120px;
    }
`,s.Ay.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_200.gap};
    font-size: ${r.$G.sans_200.fontSize};
    font-weight: ${r.$G.sans_200.fontWeight};

    line-height: ${r.$G.sans_200.lineHeight};
    margin-bottom: 24px;

    & .StripeElement {
        height: 50px !important;
    }
`,s.Ay.input`
    height: 54px;
    border-radius: 9px;
    background: none;
    border: 1px solid ${r.J2.Grey1.color};
    padding-left: 16px;
    outline: none;
`,s.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_250.gap};
    width: 100%;
`),L=s.Ay.input`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    border: 1px solid ${r.J2.Grey1.color};
    padding-left: 16px;

    &::placeholder {
        font-size: ${r.$G.sans_400.fontSize};
        font-weight: ${r.$G.sans_400.fontWeight};
        color: ${r.J2.Grey1.color};
        line-height: ${r.$G.sans_400.lineHeight};
    }
`,Q=s.Ay.label`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};

    margin: 0;
    margin-bottom: 24px;
`,Z=s.Ay.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${r.dB.spacing_300.gap};
`,Y=s.Ay.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 499px;
    background: ${r.J2.White.color};
    /* bottom: 0;
    left: 0;
    position: fixed;
    z-index: 102; */
    box-shadow: ${r.E_.shadow_300.boxShadow};
    padding: ${r.dB.spacing_400.padding} ${r.dB.spacing_400.padding} ${r.dB.spacing_300.padding};

    @media (min-width: 768px) {
        min-height: unset !important;
        height: 600px !important;
        /* border-radius: 14px; */
        width: 560px;
        padding: ${r.dB.spacing_400.padding};
        /* left: 50%;
        top: 50%;
        transform: translate(-50%, -50%); */
        display: flex;
        flex-direction: column;
    }
`,X=s.Ay.div`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    border: 1px solid ${r.J2.Grey1.color};
    outline: none;
    display: flex;
    position: relative;
    margin-bottom: 456px;
    @media (min-width: 768px) {
        margin-bottom: 96px;
    }
`,q=(0,s.Ay)(d.default)`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    color: ${r.J2.Grey1.color};
    line-height: ${r.$G.sans_400.lineHeight};
    border-radius: 9px;
    border: none;
    outline: none;
    padding: 0;
    padding-left: 16px;
    padding-right: 50px;
`,K=s.Ay.button`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${r.J2.Grey3.color};
    margin-right: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
`,ee=s.Ay.img`
    height: 10px;
    width: 10px;
`,te=s.Ay.p`
    font-size: ${r.$G.sans_500_semi.fontSize};
    font-weight: ${r.$G.sans_500_semi.fontWeight};
    line-height: ${r.$G.sans_500_semi.lineHeight};

    margin: 0;
    margin-top: 32px;
    margin-bottom: 12px;
`,ie=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${e=>e.invalid?r.J2.Red1.color:r.J2.Black.color};
    margin: 0;
    margin-bottom: 32px;
    max-width: 248px;
    text-align: center;
`,ne=s.Ay.button`
    width: 100%;
    min-height: ${e=>e.uploaded?"64px":"100px"};
    border-radius: 9px;
    color: ${r.J2.Grey.color};
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    background: none;
    border: 1px dashed ${r.J2.Grey1.color};
    position: relative;

    @media (min-width: 768px) {
        width: 100%;
        height: 128px;
        font-size: ${r.Ox.sans_button_200.fontSize};
        line-height: ${r.Ox.sans_button_200.lineHeight};
        margin-bottom: 32px;
    }
`,oe=s.Ay.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${r.dB.spacing_300.gap};
`,ae=s.Ay.div`
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
`,se=s.Ay.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
    grid-column: 1/2;
    grid-row: 1/2;
`,de=s.Ay.button`
    grid-column: 1/2;
    grid-row: 1/2;
    height: 32px;
    width: 32px;
    background: ${r.J2.White.color};
    border-radius: ${r.Qk.radius_8.borderRadius};
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border: none;
    margin: auto;
    margin-top: 16px;
    margin-right: 16px;
`,le=s.Ay.img`
    height: 16px;
    width: 16px;
    object-fit: cover;
`,re=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,ce=s.Ay.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
    margin-top: 120px;
`,ge=s.Ay.p`
    font-size: ${r.$G.sans_600_semi.fontSize};
    line-height: ${r.$G.sans_600_semi.lineHeight};
    font-weight: ${r.$G.sans_600_semi.fontWeight};

    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 16px;
    text-align: center;
`,ue=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};

    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0 auto;
    max-width: 270px;
    text-align: center;
    margin-bottom: 148px;
`,pe=s.Ay.button`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${r.J2.White.color};
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    cursor: pointer;
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    border-radius: 9px;
    border: none;
    background: ${r.J2.Black.color};
    padding: 0;
    margin-top: 24px;
`,he=s.Ay.div`
    width: 100%;
    border-radius: ${r.Qk.radius_12.borderRadius};
    border: ${e=>e.selected?`1px solid ${r.J2.Blue.color}`:`1px solid ${r.J2.Grey1.color}`};
    padding: ${r.dB.spacing_400.padding};
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_250.gap};
    margin-bottom: 16px;
`,xe=s.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};

    margin: 0;
`,fe=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};

    margin: 0;

    strong {
        font-weight: ${r.$G.sans_300_semi.fontWeight};
    }
`,ye=s.Ay.p`
    height: 50px;
    width: 100%;
    background: ${r.J2.Grey3.color};
    border-radius: 9px;
    padding-left: 24px;
    display: flex;
    align-items: center;
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${r.J2.Grey.color};
    font-weight: ${r.$G.sans_300.fontWeight};
`,me=s.Ay.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 48px;
    margin-top: 124px;

    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`,$e=s.Ay.p`
    font-size: ${r.$G.sans_800_bold.fontSize};
    line-height: ${r.$G.sans_800_bold.lineHeight};
    font-weight: ${r.$G.sans_800_bold.fontWeight};

    text-align: center;
    margin: 0 auto;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        margin-right: auto;
    }
`,be=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};

    text-align: center;
    margin: 0 auto;
    max-width: 260px;
    margin-bottom: 145px;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_400.fontSize};
        line-height: ${r.$G.sans_400.lineHeight};
    }
`;var ve=i(9856),_e=i(1372),Ae=i(579);const we=e=>{let{selected:t,standardServiceFee:i,toggleServiceFeePopup:o}=e;const[a,s]=(0,n.useState)(i),[d,l]=(0,n.useState)(i?1:2),c=(0,ve.A)(t,o);return(0,Ae.jsx)(_e.A,{ref:c,backBtnType:"Arrow",closePopup:o,noContinueBtn:!0,children:(0,Ae.jsxs)(F,{children:[(0,Ae.jsx)(N,{children:"Service fee"}),(0,Ae.jsxs)(he,{selected:1===d,onClick:()=>{l(1),s(!0)},children:[(0,Ae.jsx)(xe,{style:{color:r.J2.Blue.color},children:"Standard (7.5 - 13.5%)"}),(0,Ae.jsxs)(fe,{children:[(0,Ae.jsx)("strong",{children:"Your guests won't be charged a service fee."})," We deduct a single service fee of 7.5% to 13.5% from your booking's total."]})]}),2===d&&(0,Ae.jsx)(ye,{children:"This may result in fewer bookings!"})]})})};var je=i(4281),Ge=i(9709),ke=i(831);const Se=e=>{let{selected:t,IdVerifyFlag:i,toggleIdVerifyFlag:o,togglePreviousPageFlag:s,toggleIDVerification:d,accessToken:l,toggleBankAccountAdded:r,previousPageFlag:c,toggleAdressMenu:g,toggleAdressMenuManual:u,toggleBankAccountMenu:p}=e;const[h,x]=(0,n.useState)(!1),[f,y]=(0,n.useState)(!1),[m,$]=(0,n.useState)([]),b=(0,n.useRef)(null),[v,_]=(0,n.useState)(!1),A=(0,ve.A)(t,(()=>{i?(o(),s(0),d()):d()})),[w,j]=(0,ke.useRecoilState)(Ge.U),G=e=>new Promise(((t,i)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>{t(n.result)},n.onerror=e=>{i(e)}})),k=(0,n.useCallback)((e=>{$((t=>[...t,e]))}),[]),S=e=>{for(var t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=i.charAt(Math.floor(62*Math.random()));return t="stripe-payout-verification-"+t},z=(0,n.useCallback)((async e=>{const t=["image/gif","image/jpeg","image/png","image/apng","image/heic","image/avif","image/webp"],i=e.filter((e=>t.includes(e.type)));if(0===i.length)return void console.log("No valid image types found in the uploaded files.");(await Promise.all(i.map((async e=>{const t=await G(e);return{id:S(10),data:t}})))).forEach((e=>k(e)))}),[k]),{getRootProps:B,getInputProps:J}=(0,je.VB)({onDrop:z});return(0,Ae.jsx)(Ae.Fragment,{children:(0,Ae.jsx)(_e.A,{ref:A,backBtnType:"Arrow",closePopup:()=>{2===c?(s(1),g()):3===c?(s(1),u()):1===c&&(s(0),p()),d()},handleSave:()=>(async()=>{_(!0),x(!0);const e=[],t=JSON.parse(JSON.stringify(w));for(let i=0;i<m.length;i++){const t=m[i].data.split(",")[1];e.push(t)}try{await(0,a.p)("post","dev-anystay-user","user/id/verify",{body:{images:e},headers:{Authorization:l}}).then((e=>{e.success?(d(),_(!1),y(!1),x(!1),i&&(o(),s(0),r()),t.individual.verification.status="pending",j(t)):(x(!1),y(!0),t.individual.verification.details_code="failed",j(t))})).catch((e=>{console.log(e),x(!1),y(!0),_(!1),t.individual.verification.details_code="failed",j(t)}))}catch(n){x(!1),y(!0),_(!1),t.individual.verification.details_code="failed",j(t)}})(),cancelPopup:()=>{i?(o(),s(0),d()):d()},disable:0===m.length||v,isContinueBtnLoading:v,children:(0,Ae.jsxs)(Y,{children:[(0,Ae.jsx)(te,{children:"Verify your identity"}),(0,Ae.jsx)(ie,{invalid:f,children:f?"Please upload a valid ID document and try again.":"Upload the front and back of any Government issued ID."}),(0,Ae.jsxs)(ne,{...B(),uploaded:0!==m.length,type:"button",onClick:()=>{var e;null===(e=b.current)||void 0===e||e.click()},children:[(0,Ae.jsx)("input",{...J(),type:"file",name:"file",ref:b,onChange:async e=>{if(e.target.files){const t=Array.from(e.target.files);(await Promise.all(t.map((async e=>{const t=await G(e);return{id:S(10),data:t}})))).forEach((e=>k(e)))}},style:{display:"none"},multiple:!0,onClick:e=>{e.currentTarget.value=""}}),"Drop files or click to upload."]}),m.length<1&&(0,Ae.jsx)(ie,{invalid:!1,children:"Your documents will only be used to verify your identity."}),(0,Ae.jsx)(oe,{children:m.length>0&&m.map((e=>(0,Ae.jsxs)(ae,{children:[(0,Ae.jsx)(se,{src:e.data,alt:"ID-Document"}),(0,Ae.jsx)(de,{type:"button",onClick:()=>(e=>{let t=m;t=t.filter((t=>t.id!==e)),$(t)})(e.id),children:(0,Ae.jsx)(le,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg",alt:"delete icon"})})]},e.id)))})]})})})},ze=e=>{let{bankAccountMenuFailed:t,IdVerifyFlag:i,toggleIdVerifyFlag:n,togglePreviousPageFlag:o,toggleBankAccountMenu:a,toggleBankAccountMenuFailed:s}=e;const d=(0,ve.A)(t,(()=>{i&&(n(),o(0)),a()})),l=()=>{i&&n(),a(),s()};return(0,Ae.jsx)(_e.A,{ref:d,backBtnType:"Arrow",closePopup:l,handleSave:l,cancelPopup:()=>{i&&n(),s()},btnText:"Continue",children:(0,Ae.jsxs)(F,{ref:d,style:{alignItems:"flex-start"},children:[(0,Ae.jsx)(me,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Failed icon"}),(0,Ae.jsx)($e,{children:i?"ID verification failed":"Invalid bank account"}),(0,Ae.jsx)(be,{children:"Unfortunately, we could not validate your "+(i?"government ID.":"bank account.")})]})})};var Be=i(7607);const Je=e=>{let{bankAccountMenu:t,toggleBankAccountMenu:i,accessToken:o,addressVerified:s,idVerified:d,fetchStripeAccount:l,togglePreviousPageFlag:r,toggleIdVerifyFlag:c,toggleAdressMenu:g,toggleIDVerification:u,toggleBankAccountAdded:p,toggleBankAccountMenuFailed:h}=e;const x=(0,ve.A)(t,i),[f,y]=(0,n.useState)(""),[m,$]=(0,n.useState)(""),[b,v]=(0,n.useState)(""),[_,A]=(0,n.useState)(!1),[w,j]=(0,ke.useRecoilState)(Be.o);return(0,Ae.jsx)(_e.A,{ref:x,backBtnType:"Arrow",closePopup:()=>{i()},handleSave:async()=>{if(A(!0),f&&m&&b){const e={headers:{Authorization:o},body:{accountID:null===w||void 0===w?void 0:w.stripeAccountID,bankAccountData:{accountName:f,bsb:m,accountNumber:b}}};await(0,a.p)("put","dev-anystay-user","user/payout/method",e).then((async e=>{e.success?(await l(),i(),s&&d?p():(r(1),s||d?s?u():g():(c(),g()))):(i(),h()),A(!1)})).catch((e=>{console.log(e),i(),h(),A(!1)}))}},isContinueBtnLoading:_,disable:!(f&&m&&b)||_,btnText:"Continue",children:(0,Ae.jsxs)(F,{ref:x,style:{alignItems:"flex-start"},children:[(0,Ae.jsx)(N,{children:"Add bank account"}),(0,Ae.jsxs)(S,{style:{marginBottom:"32px"},children:["By linking your payout method, you unconditionally agree to our ",(0,Ae.jsx)("a",{href:"https://www.anystay.com.au/terms-and-conditions",children:"Terms of service"})," and the"," ",(0,Ae.jsx)("a",{href:"https://stripe.com/au/legal/connect-account",children:"Stripe Recipient Agreement."})]}),(0,Ae.jsxs)(E,{children:[(0,Ae.jsx)(L,{type:"text",value:f,onChange:e=>{const t=e.target.value.replace(/[^a-zA-Z\xc0-\u017e\s\-'.]/g,"");y(t)}}),(0,Ae.jsx)(Q,{children:"Account name"})]}),(0,Ae.jsxs)(Z,{children:[(0,Ae.jsxs)(E,{style:{width:"calc(100% - 12px)"},children:[(0,Ae.jsx)(L,{type:"text",value:m,onChange:(G=$,e=>{if(e.target.value.length>6)return;const t=e.target.value.replace(/\D/g,"");G(t||"")})}),(0,Ae.jsx)(Q,{children:"BSB"})]}),(0,Ae.jsxs)(E,{style:{width:"calc(100% - 12px)"},children:[(0,Ae.jsx)(L,{type:"text",value:b,onChange:(e=>t=>{if(t.target.value.length>10)return;const i=t.target.value.replace(/\D/g,"");e(i||"")})(v)}),(0,Ae.jsx)(Q,{children:"Account number"})]})]})]})});var G},We=e=>{let{taxNumberMenu:t,toggleTaxNumber:i,accessToken:o}=e;const[s,d]=(0,n.useState)(""),[l,r]=(0,n.useState)(!1),[c,g]=(0,ke.useRecoilState)(Be.o),[u,p]=(0,ke.useRecoilState)(Ge.U),h=(0,ve.A)(t,i);return(0,Ae.jsx)(_e.A,{ref:h,backBtnType:"Arrow",closePopup:i,handleSave:async()=>{r(!0),await(async()=>{const e={headers:{Authorization:o},body:{stripeAccountID:null===c||void 0===c?void 0:c.stripeAccountID,taxnumber:s}};await(0,a.p)("post","dev-anystay-user","user/taxnumber",e).then((e=>{if(e.success){const e=JSON.parse(JSON.stringify(u));e.company.tax_id_provided=!0,p(e)}})).catch((e=>console.log(e)))})(),r(!1),i()},btnText:"Continue",disable:!s||l,isContinueBtnLoading:l,children:(0,Ae.jsxs)(F,{children:[(0,Ae.jsx)(H,{children:"Taxes"}),(0,Ae.jsx)(O,{children:"Add or change your organisation's current ABN or ACN"}),(0,Ae.jsxs)(T,{children:[(0,Ae.jsx)(R,{value:s,placeholder:"i.e. ABN / ACN",onChange:e=>{d(e.target.value)}}),(0,Ae.jsx)(U,{children:"Add ABN or ACN number"})]})]})})},Pe={Australia:"AU","New Zealand":"NZ",default:"AU"},Ce=e=>{let{updateAddressMenuManual:t,IdVerifyFlag:i,toggleIdVerifyFlag:o,togglePreviousPageFlag:s,toggleAdressMenuManual:d,accessToken:l,toggleIDVerification:r}=e;const c=(0,ve.A)(t,(()=>{i&&(o(),s(0)),d()})),[g,u]=(0,n.useState)(!1),[p,h]=(0,n.useState)({city:"",unitNumber:"",streetAddress:"",state:"",postcode:"",country:""}),[x,f]=(0,ke.useRecoilState)(Be.o),[y,m]=(0,ke.useRecoilState)(Ge.U),$=async()=>{await(0,a.p)("post","dev-anystay-user","user/address",{headers:{Authorization:l},body:{stripeAccountID:null===x||void 0===x?void 0:x.stripeAccountID,city:p.city,unitNumber:p.unitNumber,street:p.streetAddress,state:p.state,country:p.country?Pe[p.country]:Pe.default,postal_code:p.postcode}}).then((async e=>{(async()=>{const e=JSON.parse(JSON.stringify(y));e.individual.address.line1=`${p.unitNumber?`${p.unitNumber}/`:""}${p.streetAddress}`,e.individual.address.city=`${p.city}`,e.individual.address.state=`${p.state}`,e.individual.address.country=`${p.country}`,m(e)})()})).catch((e=>console.log(e)))};return(0,Ae.jsx)(_e.A,{ref:c,backBtnType:"Arrow",closePopup:()=>d(),handleSave:async()=>{u(!0),await $(),i&&(s(3),r()),u(!1),d()},btnColor:"blue",btnText:i?"Continue":"Save",disable:!(p.streetAddress&&p.city&&p.state&&p.postcode)||g,isContinueBtnLoading:g,children:(0,Ae.jsxs)(M,{children:[(0,Ae.jsx)(N,{children:"Payout address"}),(0,Ae.jsxs)(T,{children:[(0,Ae.jsx)(R,{value:p.streetAddress,placeholder:"i.e. 60 Sherwood road, Toowong",onChange:e=>{const{value:t}=e.target;h((e=>({...e,streetAddress:t})))}}),(0,Ae.jsx)(U,{children:"Street address"})]}),(0,Ae.jsxs)(T,{children:[(0,Ae.jsx)(R,{value:p.unitNumber,placeholder:"i.e. 3",onChange:e=>{const{value:t}=e.target;h((e=>({...e,unitNumber:t})))}}),(0,Ae.jsx)(U,{children:"Unit number"})]}),(0,Ae.jsxs)(V,{children:[(0,Ae.jsxs)(T,{style:{width:"calc(100% - 16px)"},children:[(0,Ae.jsx)(R,{value:p.city,placeholder:"i.e. Brisbane",onChange:e=>{const{value:t}=e.target;h((e=>({...e,city:t})))}}),(0,Ae.jsx)(U,{children:"City"})]}),(0,Ae.jsxs)(T,{children:[(0,Ae.jsx)(R,{value:p.state,placeholder:"i.e. QLD",onChange:e=>{const{value:t}=e.target;h((e=>({...e,state:t})))}}),(0,Ae.jsx)(U,{children:"State / Province"})]})]}),(0,Ae.jsxs)(T,{children:[(0,Ae.jsx)(R,{value:p.postcode,placeholder:"i.e. 4066",onChange:e=>{const{value:t}=e.target;h((e=>({...e,postcode:t})))}}),(0,Ae.jsx)(U,{children:"Postcode"})]})]})})},Ie={Australia:"AU","New Zealand":"NZ",default:"AU"},He=e=>{let{updateAddressMenu:t,toggleAdressMenu:i,previousPageFlag:o,togglePreviousPageFlag:s,toggleBankAccountMenu:d,toggleAdressMenuManual:l,accessToken:c,IdVerifyFlag:g,toggleIDVerification:u}=e;const p=(0,ve.A)(t,i,!0),[h,x]=(0,n.useState)(!1),[f,y]=(0,n.useState)(null),[m,$]=(0,n.useState)(""),[b,v]=(0,n.useState)({city:null,unitNumber:null,streetAddress:null,state:null,postcode:null,country:null}),[_,A]=(0,ke.useRecoilState)(Ge.U),[w,j]=(0,ke.useRecoilState)(Be.o),[G,k]=(0,n.useState)(!1),S=(0,ve.A)(!0,(()=>B));(0,n.useEffect)((()=>{var e,t;_&&(_.individual&&null!==_&&void 0!==_&&null!==(e=_.individual)&&void 0!==e&&null!==(t=e.address)&&void 0!==t&&t.line1&&_.individual.address.city&&_.individual.address.state&&_.individual.address.country&&$(`${_.individual.address.line2?`${_.individual.address.line2}/`:""}${_.individual.address.line1}, ${_.individual.address.city}, ${_.individual.address.state}, ${_.individual.address.country}`))}),[_]);const z=async()=>{const e={headers:{Authorization:c},body:{stripeAccountID:null===w||void 0===w?void 0:w.stripeAccountID,city:b.city,unitNumber:b.unitNumber,street:b.streetAddress,state:b.state,country:b.country?Ie[b.country]:Ie.default,postal_code:b.postcode}};await(0,a.p)("post","dev-anystay-user","user/address",e).then((async e=>{(async()=>{const e=JSON.parse(JSON.stringify(_));e.individual.address.line1=`${b.unitNumber?`${b.unitNumber}/`:""}${b.streetAddress}`,e.individual.address.city=`${b.city}`,e.individual.address.state=`${b.state}`,e.individual.address.country=`${b.country}`,A(e)})()})).catch((e=>console.log(e)))},B=()=>{1===o?(s(0),d(),i()):i()};return(0,Ae.jsx)(_e.A,{ref:S,backBtnType:"Arrow",closePopup:B,handleSave:async()=>{f?(x(!0),await z(),g&&(s(2),u()),x(!1),i()):k(!0)},cancelPopup:()=>{i(),l()},cancelBtnText:"Do manually",btnText:g?"Continue":"Save",disable:h,isContinueBtnLoading:h,children:(0,Ae.jsxs)(F,{style:{minHeight:"395px"},ref:p,children:[(0,Ae.jsx)(H,{children:"Add payout address"}),(0,Ae.jsx)(D,{invalid:G,children:G?"Please select an address from the dropdown.":"Enter the address linked to your bank account."}),(0,Ae.jsxs)(X,{children:[(0,Ae.jsx)(q,{value:m,apiKey:"AIzaSyDaEjGS7y451ceRwjvbFq_FpXsPjLnRgQk",onPlaceSelected:e=>{var t,i,n,o,a,s,d,l,r,c,g,u,p,h,x;k(!1);let f=null===(t=e.address_components)||void 0===t?void 0:t.filter((e=>"subpremise"===e.types[0])),m=null===(i=e.address_components)||void 0===i?void 0:i.filter((e=>"street_number"===e.types[0])),b=null===(n=e.address_components)||void 0===n?void 0:n.filter((e=>"route"===e.types[0])),_=null===(o=e.address_components)||void 0===o?void 0:o.filter((e=>"locality"===e.types[0])),A=null===(a=e.address_components)||void 0===a?void 0:a.filter((e=>"administrative_area_level_1"===e.types[0])),w=null===(s=e.address_components)||void 0===s?void 0:s.filter((e=>"country"===e.types[0])),j=null===(d=e.address_components)||void 0===d?void 0:d.filter((e=>"administrative_area_level_2"===e.types[0])),G=null===(l=e.address_components)||void 0===l?void 0:l.filter((e=>"postal_code"===e.types[0])),S=f&&f.length>0?f[0].long_name:null,z=m&&(null===(r=m[0])||void 0===r?void 0:r.long_name),B=b&&(null===(c=b[0])||void 0===c?void 0:c.long_name),J=_&&(null===(g=_[0])||void 0===g?void 0:g.long_name),W=A&&(null===(u=A[0])||void 0===u?void 0:u.short_name),P=w&&(null===(p=w[0])||void 0===p?void 0:p.long_name),C=j&&(null===(h=j[0])||void 0===h?void 0:h.long_name),I=G&&(null===(x=G[0])||void 0===x?void 0:x.long_name);y(e),$(`${S?`${S}/`:""}${z}, ${B}, ${J}, ${W}, ${P}`),v({streetAddress:`${z} ${B}`,unitNumber:S,city:C,state:W,postcode:I,country:P})},onChange:e=>{$(e.target.value),y(null)},options:{types:["address"],componentRestrictions:{country:["au","nz"]}},style:{width:"100%",borderRadius:"10px",color:r.J2.Black.color},placeholder:"Enter your payout address"}),""!==m&&(0,Ae.jsx)(K,{type:"button",onMouseDown:()=>{$(""),y(null)},children:(0,Ae.jsx)(ee,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg",alt:"Clear address"})})]})]})})},De=e=>{let{toggleBankAccountAdded:t}=e;return(0,Ae.jsx)(_e.A,{ref:t,backBtnType:"Arrow",closePopup:t,noContinueBtn:!0,children:(0,Ae.jsx)(F,{style:{paddingBottom:"24px"},children:(0,Ae.jsxs)(re,{children:[(0,Ae.jsx)(ce,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg",alt:"Connected icon"}),(0,Ae.jsx)(ge,{children:"Payout connected"}),(0,Ae.jsx)(ue,{children:"You can start receiving payouts to your bank account."}),(0,Ae.jsx)(pe,{type:"button",onClick:t,children:"Done"})]})})})};var Fe=i(3212),Me=i(9082),Ne=i(8306),Oe=i(1852),Te=i(5242);const Ve=()=>{var e,t,i,s,d,l,r,S,H,D,F,M;const[N,O]=(0,ke.useRecoilState)(Ge.U),[T,V]=(0,ke.useRecoilState)(Be.o),[R,U]=(0,ke.useRecoilState)(Me.H),E=(0,o.Zp)(),[L,Q]=(0,n.useState)(!1),[Z,Y]=(0,n.useState)(!1),[X,q]=(0,n.useState)(!1),[K,ee]=(0,n.useState)(!1),[te,ie]=(0,n.useState)(!1),[ne,oe]=(0,n.useState)(!1),[ae,se]=(0,n.useState)(!1),[de,le]=(0,n.useState)(!1),[re,ce]=(0,n.useState)(!1),[ge,ue]=(0,n.useState)(!1),[pe,he]=(0,n.useState)(!1),[xe,fe]=(0,n.useState)(0),[ye,me]=(0,n.useState)([]),[$e,be]=(0,n.useState)({loading:!1,bankAccountID:null}),ve=(0,n.useCallback)((()=>{var e,t,i,n,o,a,s,d,l,r,c,g,u,p;N&&(N.individual&&(ce(Boolean((null===N||void 0===N||null===(e=N.individual)||void 0===e||null===(t=e.address)||void 0===t?void 0:t.city)&&(null===N||void 0===N||null===(i=N.individual)||void 0===i||null===(n=i.address)||void 0===n?void 0:n.country)&&(null===N||void 0===N||null===(o=N.individual)||void 0===o||null===(a=o.address)||void 0===a?void 0:a.state)&&(null===N||void 0===N||null===(s=N.individual)||void 0===s||null===(d=s.address)||void 0===d?void 0:d.postal_code)&&(null===N||void 0===N||null===(l=N.individual)||void 0===l||null===(r=l.address)||void 0===r?void 0:r.line1))),ue(Boolean("verified"===(null===N||void 0===N||null===(c=N.individual)||void 0===c||null===(g=c.verification)||void 0===g?void 0:g.status)||"pending"===(null===N||void 0===N||null===(u=N.individual)||void 0===u||null===(p=u.verification)||void 0===p?void 0:p.status)))))}),[N]),_e=(0,n.useCallback)((async()=>{const e={headers:{Authorization:R}};await(0,a.p)("get","dev-anystay-user","user/payout/methods",e).then((async e=>{console.log(e),e&&e.body.bankAccounts&&me(e.body.bankAccounts.data)}))}),[R]);(0,n.useEffect)((()=>{_e()}),[_e]),(0,n.useEffect)((()=>{ve()}),[ve]);const je=()=>{he(!pe)},Pe=e=>{fe(0<=e&&e<=2?e:0)},Ie=()=>{Q(!L)},Ve=()=>{le(!de)},Re=()=>{Y(!Z)},Ue=()=>{q(!X)},Ee=()=>{ee(!K)},Le=()=>{se(!ae)},Qe=()=>{ie(!te)};return(0,Ae.jsxs)(n.Fragment,{children:[(0,Ae.jsx)(Ne.A,{title:"Profile | Anystay"}),(0,Ae.jsxs)(Te.R7,{children:[(0,Ae.jsxs)(Te.XP,{children:[(0,Ae.jsx)(Oe.A,{onClick:()=>E("/settings"),type:"Arrow",mobileLeft:24,mobileTop:24}),(0,Ae.jsx)(Te.Me,{children:"Payments & payouts"})]}),(0,Ae.jsxs)(c,{children:[(0,Ae.jsxs)(g,{children:[(0,Ae.jsxs)(h,{children:[(0,Ae.jsx)(x,{selected:!1,onClick:()=>E("/payment-settings/"),children:"Payment"}),(0,Ae.jsx)(x,{selected:!0,children:"Payout"})]}),(0,Ae.jsxs)(f,{children:[(0,Ae.jsx)(y,{children:"Payout method"}),(0,Ae.jsxs)(m,{style:{marginBottom:"24px",color:"#222222",fontSize:"16px",lineHeight:"24px",marginTop:"4px"},children:["Payments received for bookings are paid via our secure payout system.\xa0",(0,Ae.jsx)("span",{children:"Currently, we only accept Australian bank accounts."})]}),0!==ye.length?ye.map(((e,t)=>(0,Ae.jsxs)(b,{children:[(0,Ae.jsxs)(v,{children:[e.bank_name," ",e.last4," ",e.default_for_currency&&"(Default)"]}),(0,Ae.jsx)(_,{children:$e.loading&&$e.bankAccountID===e.id?(0,Ae.jsx)(Fe.A,{}):(0,Ae.jsx)(Ae.Fragment,{children:!e.default_for_currency&&(0,Ae.jsxs)(Ae.Fragment,{children:[(0,Ae.jsx)(A,{disabled:$e.loading,onClick:async()=>(async e=>{be({loading:!0,bankAccountID:e});const t={headers:{Authorization:R},body:{accountID:null===T||void 0===T?void 0:T.stripeAccountID,bankAccountID:e}};await(0,a.p)("post","dev-anystay-user","user/payout/method/default",t).then((async e=>{await _e(),be({loading:!1,bankAccountID:null})})).catch((e=>{be({loading:!1,bankAccountID:null}),console.log(e)}))})(e.id),selected:!e.default_for_currency,children:"Default"}),(0,Ae.jsx)(A,{disabled:$e.loading,onClick:async()=>(async e=>{be({loading:!0,bankAccountID:e});const t={headers:{Authorization:R},body:{accountID:null===T||void 0===T?void 0:T.stripeAccountID,bankAccountID:e}};await(0,a.p)("del","dev-anystay-user","user/payout/method",t).then((async e=>{await _e(),be({loading:!1,bankAccountID:null})})).catch((e=>{be({loading:!1,bankAccountID:null}),console.log(e)}))})(e.id),style:{marginLeft:"16px"},selected:!e.default_for_currency,children:"Remove"})]})})})]},t))):(0,Ae.jsxs)(b,{onClick:Ue,style:{cursor:"pointer"},children:[(0,Ae.jsx)(v,{children:"Not connected"}),(0,Ae.jsx)(A,{selected:!0,onClick:Ue,children:"Add"})]}),(0,Ae.jsx)(w,{type:"button",onClick:Ue,children:"Add payout method"})]}),(0,Ae.jsxs)(f,{style:{marginTop:"48px"},children:[(0,Ae.jsx)($,{children:(0,Ae.jsx)(y,{children:"Payout details"})}),(0,Ae.jsx)(m,{style:{maxWidth:"400px"},children:"Provide and update your details."})]}),(0,Ae.jsxs)(z,{children:[(0,Ae.jsx)(B,{children:(0,Ae.jsxs)(J,{onClick:Ie,children:[(0,Ae.jsxs)(W,{children:[(0,Ae.jsx)(P,{children:"Address"}),(0,Ae.jsx)(C,{type:"button",onClick:Ie,children:"Edit"})]}),(0,Ae.jsx)(I,{children:N&&null!==N&&void 0!==N&&N.individual&&null!==N&&void 0!==N&&null!==(e=N.individual)&&void 0!==e&&null!==(t=e.address)&&void 0!==t&&t.city&&N.individual.address.country&&N.individual.address.state&&N.individual.address.line1?`${N.individual.address.line1}, ${N.individual.address.city}, ${N.individual.address.state}, ${N.individual.address.country}`:"Add payout address"})]})}),N&&ye.length>0&&(0,Ae.jsx)(B,{children:(0,Ae.jsxs)(J,{onClick:Le,children:[(0,Ae.jsxs)(W,{children:[(0,Ae.jsx)(P,{children:"Government ID"}),(0,Ae.jsx)(C,{type:"button",onClick:Le,style:{display:"verified"===(null===N||void 0===N||null===(i=N.individual)||void 0===i||null===(s=i.verification)||void 0===s?void 0:s.status)?"none":"block"},children:"Edit"})]}),(0,Ae.jsx)(I,{children:N.individual&&("verified"===(null===N||void 0===N||null===(d=N.individual)||void 0===d||null===(l=d.verification)||void 0===l?void 0:l.status)?"Verified":"pending"===(null===N||void 0===N||null===(r=N.individual)||void 0===r||null===(S=r.verification)||void 0===S?void 0:S.status)?"Pending":null!==N&&void 0!==N&&null!==(H=N.individual)&&void 0!==H&&null!==(D=H.verification)&&void 0!==D&&D.details_code&&N.individual.verification.details_code.includes("failed")?"Verification failed":"unverified"===(null===N||void 0===N||null===(F=N.individual)||void 0===F||null===(M=F.verification)||void 0===M?void 0:M.status)?"Not verified":"")})]})}),N&&(0,Ae.jsx)(B,{children:(0,Ae.jsxs)(J,{onClick:Re,children:[(0,Ae.jsxs)(W,{children:[(0,Ae.jsx)(P,{children:"Taxes"}),(0,Ae.jsx)(C,{type:"button",onClick:Re,children:"Edit"})]}),(0,Ae.jsx)(I,{children:N.company?N.company.tax_id_provided?"Provided":"None":""})]})})]}),(0,Ae.jsx)(j,{children:(0,Ae.jsx)(G,{type:"button",onClick:Ue,children:"Add payout method"})})]}),(0,Ae.jsxs)(u,{children:[(0,Ae.jsx)(k,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Payment+safety.svg",alt:"Payments icon"}),(0,Ae.jsx)(p,{children:"Payouts are sent 24 hours after check-in and may take up to 5 business days to arrive."})]})]})]}),X&&(0,Ae.jsx)(Je,{addressVerified:re,idVerified:ge,toggleIDVerification:Le,toggleAdressMenu:Ie,toggleIdVerifyFlag:je,togglePreviousPageFlag:Pe,fetchStripeAccount:_e,bankAccountMenu:X,toggleBankAccountMenu:Ue,toggleBankAccountMenuFailed:Ee,toggleBankAccountAdded:Qe,accessToken:R}),L&&(0,Ae.jsx)(He,{toggleAdressMenu:Ie,toggleAdressMenuManual:Ve,updateAddressMenu:L,toggleIDVerification:Le,IdVerifyFlag:pe,previousPageFlag:xe,togglePreviousPageFlag:Pe,toggleBankAccountMenu:Ue,accessToken:R}),de&&(0,Ae.jsx)(Ce,{toggleAdressMenuManual:Ve,updateAddressMenuManual:de,IdVerifyFlag:pe,togglePreviousPageFlag:Pe,accessToken:R,toggleIDVerification:Le,toggleIdVerifyFlag:je}),Z&&(0,Ae.jsx)(We,{toggleTaxNumber:Re,taxNumberMenu:Z,accessToken:R}),K&&(0,Ae.jsx)(ze,{bankAccountMenuFailed:K,toggleBankAccountMenu:Ue,toggleBankAccountMenuFailed:Ee,toggleIdVerifyFlag:je,IdVerifyFlag:pe,togglePreviousPageFlag:Pe}),ae&&(0,Ae.jsx)(Se,{toggleIDVerification:Le,selected:ae,toggleIdVerifyFlag:je,toggleBankAccountAdded:Qe,previousPageFlag:xe,togglePreviousPageFlag:Pe,toggleBankAccountMenu:Ue,toggleAdressMenu:Ie,toggleAdressMenuManual:Ve,IdVerifyFlag:pe,accessToken:R}),te&&(0,Ae.jsx)(De,{toggleBankAccountAdded:Qe}),ne&&(0,Ae.jsx)(we,{selected:ne,standardServiceFee:null===T||void 0===T?void 0:T.standardServiceFee,toggleServiceFeePopup:()=>{oe(!ne)}})]})}},9709:(e,t,i)=>{i.d(t,{U:()=>a});var n=i(831),o=i(2493);const a=(0,n.selector)({key:"stripeAccountSelector",get:e=>{let{get:t}=e;return t(o._)},set:(e,t)=>{let{set:i}=e;return i(o._,t)}})}}]);
//# sourceMappingURL=3915.29bce166.chunk.js.map
//# debugId=95ee2759-780f-57b6-b5dc-afe3ff4ff86a
