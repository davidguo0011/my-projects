"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c6915957-5b7f-5919-bd0a-05055b9edcf6")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[8426],{8426:(e,n,t)=>{t.r(n),t.d(n,{default:()=>hn});var i=t(5043),o=t(3216),s=t(7426),r=t(9340),a=t(2119),l=t(6779),d=t(5475),c=t(4167),h=t(4936);const g=a.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        grid-column: 1/2;
    }
`,p=a.Ay.div`
    position: fixed;
    top: 0;
    right: 0;
    grid-column: 2/3;
    grid-row: 1/2;
    width: calc(100% - 600px);
    height: 100vh;
    @media (max-width: 1280px) {
        width: calc(100% - 600px);
    }

    @media (max-width: 767px) {
        display: none;
    }
`,x=a.Ay.div`
    @media (min-width: 768px) {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 600px 1fr;
    }
`,u=a.Ay.button`
    width: calc(100% - 48px);
    height: 72px;
    margin: ${h.dB.spacing_400.margin};
    border: 1px solid ${h.J2.Grey5.color};
    border-radius: ${h.Qk.radius_12.borderRadius};
    background-color: ${h.J2.White.color};
    border-top: 1px solid ${h.J2.Grey2.color};
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    cursor: pointer;
`,f=a.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column; /* Stack items vertically */
    z-index: 2;
    top: 0;
    left: 0;
    margin: 0 24px;
    align-items: flex-start; /* Align items to the left */
    position: absolute;
    top: 32px;
`,m=a.Ay.button`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
`,$=a.Ay.p`
    font-size: ${h.$G.sans_900_semi.fontSize};
    font-weight: ${h.$G.sans_900_semi.fontWeight};
    line-height: ${h.$G.sans_900_semi.lineHeight};
    color: ${h.J2.White.color};
    margin: 0;
    margin-top: 24px;
    margin-right: auto;
`,y=(a.Ay.p`
    position: relative;
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    color: ${h.J2.Yellow.color};
    margin: 0;
`,a.Ay.img`
    width: 9px;
    height: 16px;
    margin-top: 3px;
    object-fit: cover;
`),w=a.Ay.button`
    height: 44px;
    width: fit-content;
    z-index: 2;
    align-self: flex-end;
    border: none;
    justify-self: center;
    background: ${h.J2.White.color};
    border-radius: ${h.Qk.radius_100.borderRadius};
    cursor: pointer;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    padding: 0 20px;
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    color: ${h.J2.White.color};
    background: ${h.J2.Black.color};
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%);
`,b=a.Ay.div`
    position: relative;
`,_=(0,a.Ay)(c.RC)`
    width: 100%;
    // height: 393px;
    aspect-ratio: 1/1;
    .swiper-pagination {
        display: none;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 13px;
        font-weight: 1000;
    }

    .swiper-button-prev,
    .swiper-button-next {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        background: ${h.J2.White.color};
        color: ${h.J2.Black.color};
        box-shadow: ${h.E_.shadow_100.boxShadow};
    }

    .swiper-button-prev {
        display: ${e=>1===e.index?"none":"flex"};
        margin-left: 16px;
    }

    .swiper-button-next {
        margin-right: 16px;
    }

    .swiper-pagination {
        display: none;
    }

    ::selection {
        display: none;
    }

    @media (min-width: 768px) {
        aspect-ratio: 16/10;
    }

    @media (max-width: 767px) {
        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }
    }
`,j=(a.Ay.img`
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.29) 13%, rgba(0, 0, 0, 0) 33%);
    cursor: pointer;
    user-select: none;
`,a.Ay.img`
    grid-column: 1/2;
    grid-row: 1/2;
    height: 100%;
    width: 100%;
    object-fit: cover;
    user-select: none;
`),G=(a.Ay.h1`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};

    grid-column: 2/3;
    grid-row: 1/2;
    align-self: flex-start;
    margin: 0;
`,(0,a.Ay)(d.N_)`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};

    line-height: ${h.$G.sans_300.lineHeight};
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
    align-self: flex-end;
    cursor: pointer;
`,a.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${h.dB.spacing_500.padding} 0;
    border-bottom: 1px solid ${h.J2.Grey2.color};

    @media (min-width: 768px) {
        order: -1;
        padding-top: 0;
        border-bottom: none;
    }
`,a.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    order: -1;
    margin-top: 44px;
    padding-bottom: 32px;

    @media (max-width: 767px) {
        display: none;
    }
`,a.Ay.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
`,a.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};
    color: ${e=>e.selected?h.J2.Green.color:h.J2.Yellow.color};
    line-height: ${h.$G.sans_400.lineHeight};
    margin: 0;
`,a.Ay.p`
    font-size: ${h.$G.sans_800_bold.fontSize};
    font-weight: ${h.$G.sans_800_bold.fontWeight};

    line-height: ${h.$G.sans_800_bold.lineHeight};
    margin: 0;
`,a.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${h.dB.spacing_400.padding} 0;
    border-bottom: 1px solid ${h.J2.Grey2.color};
`),v=a.Ay.button`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${h.dB.spacing_400.padding} 0;
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: 1px solid ${h.J2.Grey2.color};
`,A=a.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding-top: 32px;
`,k=a.Ay.p`
    font-size: ${h.$G.sans_700_semi.fontSize};
    line-height: ${h.$G.sans_700_semi.lineHeight};
    font-weight: ${h.$G.sans_700_semi.fontWeight};

    margin: 0;
    margin-bottom: 24px;
`,S=a.Ay.p`
    font-size: ${h.so.sans_text_300.fontSize};
    font-weight: ${h.so.sans_text_300.fontWeight};
    line-height: ${h.so.sans_text_300.lineHeight};

    margin: 0;
    margin-bottom: 32px;
`,z=a.Ay.img`
    height: 12px;
    width: 12px;
    transform: rotate(180deg);
`,C=(a.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        border-radius: ${h.Qk.radius_8.borderRadius};
        box-shadow: ${h.E_.shadow_100.boxShadow};
        padding: 10px 16px;
        height: 80px;
        display: grid;
        grid-template-rows: 50% 50%;
        grid-template-columns: 52px 1fr;
    }
`,a.Ay.img`
    height: 32px;
    width: 32px;
    grid-column: 1/2;
    grid-row: 1/3;
    align-self: center;
    justify-self: flex-start;
    object-fit: cover;

    @media (max-width: 767px) {
        display: none;
    }
`,a.Ay.p`
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: ${h.$G.sans_300_semi.fontSize};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    color: ${h.J2.Yellow.color};
    margin: 0;
    @media (min-width: 768px) {
        align-self: flex-end;
        margin-bottom: 4px;
    }
`,a.Ay.p`
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: ${h.$G.sans_200.fontSize};
    font-weight: ${h.$G.sans_200.fontWeight};
    line-height: ${h.$G.sans_200.lineHeight};

    margin: 0;

    @media (min-width: 768px) {
        align-self: flex-start;
        margin-top: 4px;
    }
`,a.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${h.dB.spacing_400.padding} 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${h.J2.Grey2.color};

    @media (min-width: 768px) {
    }
`),D=a.Ay.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,J=a.Ay.p`
    font-size: ${h.$G.sans_300_semi.fontSize};
    line-height: ${h.$G.sans_300_semi.lineHeight};
    font-weight: ${h.$G.sans_300_semi.fontWeight};
    margin: 0;
`,B=a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};

    margin-top: 8px;
    margin-bottom: 8px;
`,T=a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};
    color: ${h.J2.Grey.color};
    margin-bottom: 0px;
    margin-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,W=a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};
    color: ${h.J2.Grey.color};
    margin: 0;
`,R=a.Ay.div`
    width: 1px;
    height: 32px;
    background: ${h.J2.Grey2.color};
    align-self: center;
`,H=(a.Ay.div`
    width: 1px;
    height: 32px;
    background: ${h.J2.Grey2.color};
    align-self: center;

    @media (min-width: 768px) {
        display: none;
    }
`,(0,a.Ay)(d.N_)`
    text-decoration: none;
    margin: 0;
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
`),M=a.Ay.div`
    text-decoration: none;
    margin: 0;
    font-size: ${h.$G.sans_400.fontSize};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: ${h.$G.sans_400.lineHeight};

    font-weight: ${h.$G.sans_400.fontWeight};
    cursor: pointer;
`,q=a.Ay.a`
    text-decoration: none;
    margin: 0;
    font-size: ${h.$G.sans_400.fontSize};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: ${h.$G.sans_400.lineHeight};

    font-weight: ${h.$G.sans_400.fontWeight};
`,U=a.Ay.p`
    text-decoration: none;
    margin: 0;
    font-size: ${h.$G.sans_400.fontSize};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    line-height: ${h.$G.sans_400.lineHeight};

    font-weight: ${h.$G.sans_400.fontWeight};
`,P=a.Ay.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,I=(0,a.Ay)(d.N_)`
    height: 32px;
    padding: 0 16px;
    border-radius: ${h.Qk.radius_8.borderRadius};
    background: ${h.mh.Red.background};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    text-decoration: none;
    color: ${h.J2.White.color};
    border: none;
    cursor: pointer;
`,O=a.Ay.button`
    height: 32px;
    width: 82.5px;
    border-radius: ${h.Qk.radius_8.borderRadius};
    background: ${h.J2.Grey1.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    cursor: pointer;
    text-decoration: none;
    color: ${h.J2.White.color};
    border: none;
    cursor: pointer;
`,Y=a.Ay.div`
    display: flex;
    flex-direction: column;
`,F=a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};

    margin: 0;
    margin-bottom: 8px;
`,N=a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};

    margin: 0;

    @media (min-width: 768px) {
        font-size: ${h.$G.sans_400.fontSize};
        line-height: ${h.$G.sans_400.lineHeight};
    }
`,L=a.Ay.p`
    min-width: 100%;
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};
    line-height: ${h.$G.sans_400.lineHeight};
    cursor: pointer;

    text-decoration: none;
    justify-content: space-between;
    display: flex;
    align-items: center;
`,E=a.Ay.div`
    width: 100%;
    background: ${h.J2.White.color};
    padding: ${h.dB.spacing_400.padding} ${h.dB.spacing_400.padding} ${h.dB.spacing_300.padding};
    display: flex;
    flex-direction: column;
    box-shadow: ${h.E_.shadow_300.boxShadow};
    ${e=>e.showSpinner&&"justify-content:center; align-items:center;"}
    ${e=>e.showSpinner&&"height: 548px;"}
    padding-top: 48px;
    border-radius: ${e=>e.noContinueBtn?"14px":"14px 14px 0 0"};
    @media (min-width: 768px) {
        width: 560px;
        padding: ${h.dB.spacing_400.padding};
        padding-top: 48px;
        margin: auto;
    }
`,Z=a.Ay.div`
    width: 100%;
    padding-top: 48;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,Q=a.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};
    line-height: ${h.$G.sans_400.lineHeight};
    width: 320px;
    text-align: left;
    margin-bottom: 24px;
`,K=a.Ay.p`
    font-size: ${h.$G.sans_700_semi.fontSize};
    font-weight: ${h.$G.sans_700_semi.fontWeight};
    line-height: ${h.$G.sans_700_semi.lineHeight};
    margin: ${h.dB.spacing_250.margin} 0;
    text-align: center;
`,V=(a.Ay.button`
    height: 90px;
    width: 100%;
    border: none;
    border-top: 1px solid ${h.J2.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    padding: 0;
    cursor: pointer;
    text-align: left;

    @media (min-width: 768px) {
        margin: 0 auto;
    }
`,a.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_100.gap};
`,a.Ay.div`
    display: flex;
    gap: ${h.dB.spacing_500.gap};
    width: 100%;
    padding: ${h.dB.spacing_400.padding} 0;
    align-items: center;
    border-bottom: 1px solid ${h.J2.Grey2.color};
    &:last-child {
        border-bottom: none;
    }

    @media (min-width: 768px) {
        margin: 0 auto;
    }
`),X=a.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_200.gap};
    width: fit-content;
`,ee=a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};

    margin: 0;
`,ne=a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};

    line-height: ${h.$G.sans_300.lineHeight};
    margin: 0;
    width: 128px;
`,te=a.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};

    line-height: ${h.$G.sans_400.lineHeight};
    margin: 0;
`,ie=a.Ay.button`
    height: 48px;
    border-radius: 9px;
    background: ${h.J2.Red.color};
    color: ${h.J2.White.color};
    border: none;
    font-size: ${h.Ox.sans_button_200.fontSize};
    line-height: ${h.Ox.sans_button_200.lineHeight};
    font-weight: ${h.Ox.sans_button_200.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 32px;
`,oe=(a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};

    margin: 0;

    span {
        font-size: ${h.$G.sans_300.fontSize};
        line-height: ${h.$G.sans_300.lineHeight};
        font-weight: ${h.$G.sans_300.fontWeight};
        color: ${h.J2.Grey.color};
    }
`,a.Ay.img`
    position: relative;
    width: 8px;
    height: 12px;
    margin: 0;
    padding: 0;
    transform: rotate(180deg);
`,a.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`),se=a.Ay.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-top: 149px;
    margin-bottom: 48px;
`,re=a.Ay.p`
    text-align: center;
    max-width: 320px;
    font-size: ${h.$G.sans_900_bold.fontSize};
    font-weight: ${h.$G.sans_900_bold.fontWeight};
    line-height: ${h.$G.sans_900_bold.lineHeight};
    margin: 0;
`,ae=a.Ay.p`
    margin: 0;
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};
    text-align: center;
    line-height: ${h.$G.sans_400.lineHeight};
    margin-top: 12px;
    margin-bottom: 162px;
    @media (min-width: 768px) {
        margin-bottom: 148px;
    }
`,le=(a.Ay.div`
    width: calc(100% - 48px);
    height: 1px;
    background: ${h.J2.Grey2.color};
    margin: 0 auto;
    margin-top: auto;
`,a.Ay.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    background: ${h.J2.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${h.J2.White.color};
    font-size: ${h.Ox.sans_button_100.fontSize};
    line-height: ${h.Ox.sans_button_100.lineHeight};
    font-weight: ${h.Ox.sans_button_100.fontWeight};
    margin: 0 auto;
    border: none;
    margin-top: auto;
    cursor: pointer;
`),de=a.Ay.textarea`
    width: 100%;
    min-height: 240px;
    border-radius: 9px;
    font-size: ${h.$G.sans_400.fontSize};
    line-height: ${h.$G.sans_400.lineHeight};
    font-weight: ${h.$G.sans_400.fontWeight};

    padding: ${h.dB.spacing_300.padding};
    border: 1px solid ${h.J2.Grey1.color};
    resize: none;
    margin-bottom: 96px;

    &::placeholder {
        color: ${h.J2.Grey1.color};
    }

    &:focus {
        outline: none;
    }
`,ce=a.Ay.p`
    font-size: ${h.$G.sans_600_semi.fontSize};
    font-weight: ${h.$G.sans_600_semi.fontWeight};

    line-height: ${h.$G.sans_600_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;
`,he=a.Ay.p`
    font-size: ${h.so.sans_text_300.fontSize};
    font-weight: ${h.so.sans_text_300.fontWeight};
    line-height: ${h.so.sans_text_300.lineHeight};

    margin: 0;
    margin-bottom: 32px;
`,ge=a.Ay.div`
    height: 1px;
    width: 100%;
    background: ${h.J2.Grey2.color};
    margin-bottom: 32px;
`,pe=a.Ay.p`
    font-size: ${h.$G.sans_600_semi.fontSize};
    line-height: ${h.$G.sans_600_semi.lineHeight};
    font-weight: ${h.$G.sans_600_semi.fontWeight};

    margin: ${h.dB.spacing_200.margin} 0 ${h.dB.spacing_250.margin} 0;
    text-align: center;
`,xe=a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};

    margin: 0 auto;
    text-align: center;
    margin-bottom: 32px;
    max-width: 327px;
    @media (min-width: 768px) {
        font-size: ${h.$G.sans_400.fontSize};
        line-height: ${h.$G.sans_400.lineHeight};
    }
`,ue=a.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 48px);
    margin: 0 24px;
`,fe=a.Ay.div`
    height: 1px;
    width: 100%;
    background: ${h.J2.Grey2.color};
    margin: 0 auto;
`,me=a.Ay.div`
    height: 1px;
    width: 100%;
    background: ${h.J2.Grey2.color};
    margin: 0 auto;

    @media (min-width: 768px) {
        opacity: 0;
    }
`,$e=a.Ay.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,ye=(a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};

    text-decoration: underline;
    margin: 0;
    line-height: ${h.$G.sans_300.lineHeight};
`,a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    font-weight: ${h.$G.sans_300.fontWeight};

    margin: 0;
    line-height: ${h.$G.sans_300.lineHeight};
`,a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};

    margin: ${h.dB.spacing_500.margin} 0;
`),we=a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};

    margin: ${h.dB.spacing_500.margin} 0;
`,be=a.Ay.p`
    font-size: ${h.$G.sans_700_semi.fontSize};
    line-height: ${h.$G.sans_700_semi.lineHeight};

    font-weight: ${h.$G.sans_700_semi.fontWeight};
    margin: 0;
    margin-bottom: 24px;
    margin-top: 8px;
`,_e=a.Ay.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`,je=a.Ay.p`
    font-size: ${h.$G.sans_400.fontSize};
    font-weight: ${h.$G.sans_400.fontWeight};

    line-height: ${h.$G.sans_400.lineHeight};
    margin: 0;
`,Ge=(a.Ay.div`
    width: 100%;
    height: 1px;
    background: ${h.J2.Grey2.color};
    margin-top: 20px;
    margin-bottom: 20px;
`,a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-weight: ${h.$G.sans_400_semi.fontWeight};

    line-height: ${h.$G.sans_400_semi.lineHeight};
    margin: 0;
`),ve=a.Ay.div`
    width: 100%;
    height: 8px;
    margin: 0;
    background: ${h.J2.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);
`,Ae=((0,a.Ay)(l.P.div)`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 11;
    left: 0;
    background: ${h.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    max-height: 600px;
    box-shadow: ${h.E_.shadow_300.boxShadow};

    @media (min-width: 768px) {
        width: 550px;
        min-height: unset;
        height: 600px;
        border-radius: 14px;
        z-index: 3;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: auto;
        margin-left: auto;
    }
`,a.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    padding: ${h.dB.spacing_500.padding} 0;
    display: flex;
    flex-direction: column;
    gap: ${h.dB.spacing_100.gap};
    align-items: center;
    border-bottom: 1px solid ${h.J2.Grey2.color};

    @media (min-width: 768px) {
        padding: ${h.dB.spacing_500.padding} ${h.dB.spacing_350.padding};
    }
`),ke=a.Ay.p`
    font-size: ${h.$G.sans_400_semi.fontSize};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    color: ${e=>e.color};
    margin: 0;
`,Se=a.Ay.p`
    font-size: ${h.$G.sans_300.fontSize};
    line-height: ${h.$G.sans_300.lineHeight};
    font-weight: ${h.$G.sans_300.fontWeight};
    color: ${h.J2.Grey.color};
    margin: 0;
`;var ze=t(9856),Ce=t(1372),De=t(579);const Je=e=>{let{accessToken:n,bookingRequest:t,activateCard:o,deactivatePopupCards:r,setRefundAmount:a}=e;const l=(0,ze.A)(!0,r,!0),d=()=>{let e=new Date(t.arrivalDate);return e.setUTCDate(e.getUTCDate()-7),`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`},c=()=>{let e=new Date(t.arrivalDate);return e.setUTCDate(e.getUTCDate()),`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`},h=e=>{const n=new Date((new Date).toString().split(" ").slice(1,5).join(" ")+" GMT+0000"),t=new Date(e).getTime()-n.getTime();return Math.ceil(t/1e3/3600/24)},g=e=>{if(e<100||e>2400)return null;return`${1200===e||2400===e?12:e/100%12}:00${e>1100&&e<2400?" pm":" am"}`};return(0,De.jsx)(Ce.A,{ref:l,closePopup:r,cancelBtnText:"Cancel stay",backBtnType:"Arrow",btnText:"Done",handleSave:r,btnColor:"red",cancelPopup:async()=>{await(0,s.p)("post","dev-anystay-booking","booking/guest/cancel/check",{headers:{Authorization:n,bookingId:t.id},body:{bookingRequestID:t.id}}).then((e=>{e.success&&(a(e.refund),o("cancelStayMenuRefundSummary"))})).catch((e=>console.log(e)))},children:(0,De.jsxs)(E,{children:[(0,De.jsxs)(Z,{children:[(0,De.jsx)(K,{children:"Cancellation policy"}),(0,De.jsx)(Q,{children:"Review your host\u2019s cancellation policy for your booking."})]}),"flexible"===t.cancellationPolicy?(0,De.jsxs)(i.Fragment,{children:[(0,De.jsxs)(V,{children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:(()=>{let e=new Date(t.arrivalDate);return e.setUTCDate(e.getUTCDate()-1),`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()}),(0,De.jsxs)(ne,{children:["Before ",g(t.checkInTime)]})]}),(0,De.jsx)(te,{children:"Full refund including cleaning and service fee"})]}),(0,De.jsxs)(V,{style:{marginBottom:"16px"},children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:new Date(t.departureDate).toLocaleDateString("au",{month:"short",day:"numeric"})}),(0,De.jsxs)(ne,{children:["Before ",g(t.checkOutTime)]})]}),(0,De.jsx)(te,{children:"Full refund of unspent nights minus cleaning and service fee"})]})]}):"moderate"===t.cancellationPolicy?(0,De.jsxs)(i.Fragment,{children:[h(t.arrivalDate)>=7&&(0,De.jsxs)(V,{children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:d()}),(0,De.jsxs)(ne,{children:["Before ",g(t.checkInTime)]})]}),(0,De.jsx)(te,{children:"Full refund including cleaning and service fee"})]}),(0,De.jsxs)(V,{style:{marginBottom:"16px"},children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:new Date(t.departureDate).toLocaleDateString("au",{month:"short",day:"numeric"})}),(0,De.jsxs)(ne,{children:["Before ",g(t.checkOutTime)]})]}),(0,De.jsx)(te,{children:"50% refund of unspent nights minus cleaning and service fee"})]})]}):"strict"===t.cancellationPolicy?(0,De.jsxs)(i.Fragment,{children:[h(t.arrivalDate)>7&&h(t.confirmedAt)>=-2?(0,De.jsxs)(V,{children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:(()=>{let e=new Date(t.confirmedAt);return e.setUTCDate(e.getUTCDate()+2),`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()}),(0,De.jsxs)(ne,{children:["Before ",g(t.checkInTime)]})]}),(0,De.jsx)(te,{children:"Full refund including cleaning and service fee"})]}):h(t.arrivalDate)>=7&&(0,De.jsxs)(V,{children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:d()}),(0,De.jsxs)(ne,{children:["Before ",g(t.checkInTime)]})]}),(0,De.jsx)(te,{children:"50% refund of unspent nights minus cleaning fee"})]}),(0,De.jsxs)(V,{children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:c()}),(0,De.jsxs)(ne,{children:["Before ",g(t.checkInTime)]})]}),(0,De.jsx)(te,{children:"Refund cleaning fee"})]}),(0,De.jsxs)(V,{style:{marginBottom:"16px"},children:[(0,De.jsxs)(X,{children:[(0,De.jsx)(ee,{children:c()}),(0,De.jsxs)(ne,{children:["After ",g(t.checkInTime)]})]}),(0,De.jsx)(te,{children:"No refund"})]})]}):null]})})},Be=e=>{let{refundAmount:n,bookingRequest:t,activateCard:i,deactivatePopupCards:o}=e;const s=(0,ze.A)(!0,o);return(0,De.jsx)(Ce.A,{ref:s,closePopup:o,cancelBtnText:"Don't cancel",backBtnType:"Arrow",btnText:"Continue",btnColor:"red",handleSave:()=>{i("cancelStayMenuRefundMessage")},children:(0,De.jsxs)(E,{children:[(0,De.jsxs)(ue,{children:[(0,De.jsx)(pe,{children:`You will be refunded $${n>0?Number(n/100).toFixed(2):"0.00"}`}),(0,De.jsx)(xe,{children:"You will be refunded according to this booking's cancellation policy."})]}),(0,De.jsx)(fe,{}),(0,De.jsxs)($e,{children:[(0,De.jsx)(ye,{children:"You paid"}),(0,De.jsxs)(we,{children:["$",Number(t.paymentAmount/100).toFixed(2)]})]}),(0,De.jsx)(fe,{}),(0,De.jsxs)($e,{children:[(0,De.jsx)(ye,{children:"Your refund"}),(0,De.jsxs)(we,{children:["$",Number(n/100).toFixed(2)]})]}),(0,De.jsx)(me,{style:{marginBottom:"16px"}})]})})},Te=e=>{let{accessToken:n,bookingRequest:t,activateCard:o,deactivatePopupCards:r,setBookingRequest:a,setGuestPriceBreakdown:l}=e;const[d,c]=(0,i.useState)(""),[h,g]=(0,i.useState)(!1),p=(0,ze.A)(!0,r);return(0,De.jsx)(Ce.A,{ref:p,closePopup:r,cancelBtnText:"Don't cancel",backBtnType:"Arrow",btnText:"Cancel stay",handleSave:async()=>{try{g(!0);const e=await(0,s.p)("post","dev-anystay-booking","booking/guest/cancel",{headers:{Authorization:n,bookingId:t.id},body:{bookingRequestID:t.id,message:d}});g(!1),l(JSON.parse(e.body.bookingRequest.guestPriceBreakdown)),a((e=>({...e,cancelled:!0}))),o("cancelStayPopupSubmitted")}catch(e){g(!1),console.log(e)}},disable:h,isContinueBtnLoading:h,btnColor:"red",children:(0,De.jsx)(E,{children:(0,De.jsxs)(Z,{style:{borderBottom:"none"},children:[(0,De.jsx)(K,{children:"Send a message"}),(0,De.jsx)(Q,{children:"Tell your host why you had to cancel your stay."}),(0,De.jsx)(de,{placeholder:"Type your message",value:d,onChange:e=>c(e.target.value),maxLength:4096})]})})})},We=e=>{let{deactivatePopupCards:n}=e;const t=(0,ze.A)(!0,n);return(0,De.jsx)(Ce.A,{ref:t,closePopup:n,backBtnType:"Arrow",noContinueBtn:!0,children:(0,De.jsxs)(E,{noContinueBtn:!0,children:[(0,De.jsxs)(Z,{style:{borderBottom:"none",marginTop:"10px"},children:[(0,De.jsx)(ce,{children:"Booking cancelled"}),(0,De.jsx)(he,{children:"Eligible refunds have been processed and will arrive back in your original payment method shortly."}),(0,De.jsx)(ge,{}),(0,De.jsx)(ce,{children:"Our commitment"}),(0,De.jsx)(he,{children:"We are commited to providing you with a perfect accomodation experience. On the rare occasionm things go wrong, rest assured knowing our friendly support team is here to help you out."})]}),(0,De.jsx)(ie,{style:{marginTop:"auto",width:"100%"},type:"button",onClick:n,children:"Done"})]})})};var Re=t(1869),He=t(831);const Me=e=>{let{deactivatePopupCards:n}=e;const t=(0,ze.A)(!0,n),[i,o]=(0,He.useRecoilState)(Re.e);return(0,De.jsx)(Ce.A,{ref:t,closePopup:n,backBtnType:"Arrow",noContinueBtn:!0,children:(0,De.jsxs)(E,{noContinueBtn:!0,children:[(0,De.jsxs)(oe,{children:[(0,De.jsx)(se,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/email.svg",alt:"Email rceipt icon"}),(0,De.jsx)(re,{children:"Your receipt has been sent to your email"}),(0,De.jsx)(ae,{children:i&&i.email})]}),(0,De.jsx)(le,{type:"button",onClick:n,children:"Done"})]})})};var qe=t(6806),Ue=t(9376),Pe=t(6879);const Ie=e=>{let{listingData:n,bookingRequest:t}=e;const[s,r]=(0,i.useState)(0),[a,l]=(0,i.useState)(!1),[d,h]=(0,He.useRecoilState)(Re.e),g=(0,o.Zp)(),p=(0,i.useMemo)((()=>n.listingImages.map((e=>(0,Pe.A)(JSON.parse(e).key,800)))),[n]);return(0,De.jsxs)(De.Fragment,{children:[(0,De.jsxs)(b,{children:[(0,De.jsx)(_,{index:s,slidesPerView:1,centeredSlides:!0,loop:!0,pagination:{clickable:!0},onSlideChange:()=>{},navigation:!0,modules:[qe.Vx,qe.dK],className:"mySwiper",children:p.map(((e,n)=>(0,De.jsx)(c.qr,{onClick:()=>{l(!a),r(n)},children:(0,De.jsx)(j,{src:e,alt:"Featured listing image"})},n)))}),(0,De.jsx)(w,{type:"button",onClick:()=>g(`/listing/${n.id}`),children:"See listing"}),(0,De.jsxs)(f,{children:[(0,De.jsx)(m,{onClick:()=>{d&&g(-1)},children:(0,De.jsx)(y,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/White+back+icon.png",alt:"Back icon"})}),t&&(0,De.jsx)($,{children:t.declined?"Declined":t.cancelled?"Cancelled":t.confirmed?"Stay confirmed":"Stay requested"})]})]}),a&&(0,De.jsx)(Ue.A,{mainSrc:p[s],nextSrc:p[(s+1)%p.length],prevSrc:p[(s+p.length-1)%p.length],onCloseRequest:()=>l(!1),onMovePrevRequest:()=>{r((s+p.length-1)%p.length)},onMoveNextRequest:()=>{r((s+1)%p.length)},enableZoom:!1})]})},Oe=a.Ay.div`
    border-radius: 50%;
    background-color: ${h.J2.White.color};
    border: 2px solid ${h.J2.Black.color};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    font-size: ${h.$G.sans_400_semi.fontSize};
`,Ye=a.Ay.button`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: ${h.dB.spacing_300.padding} 17px;
    width: 567px;
    height: 82px;
    border-radius: ${h.Qk.radius_12.borderRadius};
    margin: ${h.dB.spacing_400.margin} auto;
    box-shadow: ${h.E_.shadow_100.boxShadow};
    background: white;
    border: none;
    cursor: pointer;
    @media (max-width: 767px) {
        width: calc(100% - 48px);
    }
`,Fe=a.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1;
    overflow: hidden;
    margin-left: 20px;
`,Ne=a.Ay.div`
    font-size: ${h.$G.sans_400_semi.fontSize};
    font-style: normal;
    font-weight: ${h.$G.sans_400_semi.fontWeight};
    line-height: ${h.$G.sans_400_semi.lineHeight};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Le=a.Ay.div`
    font-size: ${h.$G.sans_300.fontSize};
    font-style: normal;
    font-weight: ${h.$G.sans_300.fontWeight};
    line-height: ${h.$G.sans_300.lineHeight};
    color: ${h.J2.Grey.color};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`,Ee=(a.Ay.img`
    width: 12px;
    height: 12px;
    transform: rotate(180deg);
    margin-left: auto;
`,e=>{let{bookingRequest:n}=e;return(0,De.jsxs)(Ye,{children:[(0,De.jsx)(Oe,{children:n.overall}),(0,De.jsxs)(Fe,{children:[(0,De.jsxs)(Ne,{children:["You rated your stay ",n.overall," out of 5.0"]}),(0,De.jsx)(Le,{children:n.reviewContent?n.reviewContent:"You have not left a review yet"})]})]})}),Ze=a.Ay.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: none;
    border: none;
    cursor: pointer;
`,Qe=a.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${h.dB.spacing_300.gap};
    margin: ${h.dB.spacing_300.margin} auto 0px auto;
`,Ke=e=>{let{bookingRequest:n}=e;const t=(0,o.Zp)();return(0,De.jsx)(Qe,{children:(()=>{const e=[];for(let i=1;i<=5;i++)e.push((0,De.jsx)(Ze,{onClick:()=>{t(`/review-stay/${n.id}/${n.listingmodelID}`)},children:(0,De.jsx)("svg",{width:"31",height:"29",viewBox:"0 0 31 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,De.jsx)("path",{d:"M14.2997 0.885909C14.7438 -0.181772 16.2562 -0.181774 16.7003 0.885907L19.8239 8.39584C20.0111 8.84595 20.4344 9.15349 20.9203 9.19244L29.0279 9.84243C30.1806 9.93484 30.6479 11.3733 29.7697 12.1256L23.5926 17.4169C23.2224 17.7341 23.0607 18.2317 23.1738 18.7059L25.061 26.6175C25.3293 27.7423 24.1057 28.6313 23.1189 28.0286L16.1776 23.7889C15.7616 23.5348 15.2384 23.5348 14.8224 23.7889L7.88113 28.0286C6.8943 28.6313 5.67067 27.7423 5.93898 26.6175L7.82619 18.7059C7.9393 18.2317 7.77762 17.7341 7.40739 17.4169L1.23025 12.1256C0.352056 11.3733 0.819438 9.93484 1.97209 9.84243L10.0797 9.19245C10.5656 9.15349 10.9889 8.84595 11.1761 8.39584L14.2997 0.885909Z",fill:h.J2.Grey2.color})})},i));return e})()})},Ve=e=>{let{bookingRequest:n,refundRequested:t,changesRequested:i}=e,o="",s="",r="";if(n.stayReviewed)return(0,De.jsx)(Ee,{bookingRequest:n});if(n){if((new Date).getTime()>new Date(n.departureDate.replace("Z","")).getTime())return(0,De.jsxs)(Ae,{children:[(0,De.jsx)(ke,{color:h.J2.Black.color,children:"How was your stay?"}),(0,De.jsx)(Ke,{bookingRequest:n})]});if(n.declined)o="Your stay was declined",s="Your host has declined your stay",r=h.J2.Black.color;else if(n.cancelled)o="Your stay was cancelled",s="Your stay has been cancelled",r=h.J2.Black.color;else if(n.completed)if(t)o="Your refund was requested",s="Your host will respond within 24 hours",r=h.J2.Yellow.color;else{if(!i)return null;o="Your changes were requested",s="Your host will respond within 24 hours",r=h.J2.Yellow.color}else o="Your stay is pending",s="Your host will respond within 24 hours",r=h.J2.Yellow.color}return(0,De.jsxs)(Ae,{children:[(0,De.jsx)(ke,{color:r,children:o}),(0,De.jsx)(Se,{children:s})]})},Xe=e=>{let{bookingRequest:n}=e;const t=e=>{if(e<100||e>2400)return null;return`${1200===e||2400===e?12:e/100%12}:00${e>1100&&e<2400?" pm":" am"}`};return(0,De.jsxs)(C,{children:[(0,De.jsxs)(D,{children:[(0,De.jsx)(J,{children:"Arrive"}),(0,De.jsx)(B,{children:`${(()=>{let e=new Date(n.arrivalDate);return`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getUTCDay()]}, ${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}, ${e.getUTCFullYear()}`})()}`}),(0,De.jsx)(W,{children:`${t(n.checkInTime)}`})]}),(0,De.jsx)(R,{}),(0,De.jsxs)(D,{style:{marginLeft:"24px"},children:[(0,De.jsx)(J,{children:"Depart"}),(0,De.jsx)(B,{children:`${(()=>{let e=new Date(n.departureDate);return`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getUTCDay()]}, ${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}, ${e.getUTCFullYear()}`})()}`}),(0,De.jsx)(W,{children:`${t(n.checkOutTime)}`})]})]})},en=e=>{let{listingData:n}=e;return(0,De.jsxs)(G,{children:[(0,De.jsx)(J,{children:"Address"}),(0,De.jsx)(B,{style:{paddingRight:"32px"},children:`${n.streetNumber} ${n.street}, ${n.suburb},  ${n.city},  ${n.postcode},  ${n.country}`}),(0,De.jsx)(T,{children:n.propertyTitle})]})},nn=e=>{let{bookingRequest:n,listingData:t,changesRequested:s,refundRequested:r,activateCard:a,hostData:l}=e;const[d,c]=(0,i.useState)(!1),{id:g}=(0,o.g)();return(0,De.jsxs)(De.Fragment,{children:[(0,De.jsx)(G,{children:(0,De.jsx)(P,{children:(0,De.jsxs)(k,{style:{margin:"8px 0 0 0"},children:["Your stay at ",l.firstName,"'s ",t.propertyType," in ",t.suburb," "]})})}),(0,De.jsx)(G,{children:(0,De.jsxs)(P,{children:[(0,De.jsxs)(Y,{children:[(0,De.jsx)(F,{children:"Dates"}),(0,De.jsx)(N,{children:n?`${(()=>{let e=new Date(n.arrivalDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()} - ${(()=>{let e=new Date(n.departureDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()}`:""})]}),!n.confirmed||n.cancelled||n.declined||s||r?(0,De.jsx)(O,{children:"Change"}):(0,De.jsx)(I,{to:`/change-your-booking/${g}`,children:"Change"})]})}),(0,De.jsx)(G,{children:(0,De.jsxs)(P,{children:[(0,De.jsxs)(Y,{children:[(0,De.jsx)(F,{children:"Guests"}),(0,De.jsx)(N,{children:(()=>{const e=[];return n.adults>0&&e.push(`${n.adults} adult${n.adults>1?"s":""}`),n.children>0&&e.push(`${n.children} child${n.children>1?"ren":""}`),n.infants>0&&e.push(`${n.infants} infant${n.infants>1?"s":""}`),n.pets>0&&e.push(`${n.pets} pet${n.pets>1?"s":""}`),e.join(", ")})()})]}),!n.confirmed||n.cancelled||n.declined||s||r?(0,De.jsx)(O,{children:"Change"}):(0,De.jsx)(I,{to:`/change-your-booking/${g}`,children:"Change"})]})}),(0,De.jsx)(G,{children:(0,De.jsxs)(P,{children:[(0,De.jsxs)(Y,{children:[(0,De.jsx)(F,{children:"Booking ref."}),(0,De.jsx)(N,{children:n.confirmationCode})]}),(0,De.jsx)(O,{type:"button",style:{background:h.mh.Red.background},onClick:()=>{c(!0),navigator.clipboard.writeText(n.confirmationCode)},children:d?"Copied!":"Copy"})]})}),!n.cancelled&&(0,De.jsx)(v,{type:"button",onClick:()=>a("sendReceiptPopup"),children:(0,De.jsxs)(U,{children:["Get receipt",(0,De.jsx)(z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon"})]})}),!n.cancelled&&(0,De.jsx)(v,{type:"button",onClick:()=>a("cancelStayMenuPolicy"),style:{borderBottom:"none"},children:(0,De.jsxs)(U,{children:["Cancellations",(0,De.jsx)(z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon"})]})})]})},tn=()=>{const[e,n]=(0,i.useState)(!1),t=()=>{e?(window.Intercom("hide"),n(!1)):(window.Intercom("showNewMessage",""),n(!0))},o=(0,ze.A)(e,t);return(0,De.jsxs)(A,{children:[(0,De.jsx)(k,{children:"Get support"}),(0,De.jsxs)(S,{children:["Get in touch with our friendly support team. ",(0,De.jsx)("br",{})," We're ready to assist you with anything you need during your stay."]}),(0,De.jsx)(G,{style:{width:"100%",margin:0,borderBottom:"none",padding:"24px 0",borderTop:`1px solid ${h.J2.Grey2.color}`},children:(0,De.jsxs)(M,{onClick:()=>t(),ref:o,children:["Contact support",(0,De.jsx)(z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon"})]})})]})},on=e=>{let{guestPriceBreakdown:n}=e;return(0,De.jsxs)(G,{children:[(0,De.jsx)(be,{children:"Price details"}),n.priceItems.filter((e=>"Deposit"!==e.label)).map((e=>(0,De.jsxs)(_e,{children:[(0,De.jsx)(je,{children:e.label}),(0,De.jsx)(je,{children:e.amountFormatted})]},e.label))),n.subTotalItems.map(((e,n)=>(0,De.jsxs)(_e,{children:[(0,De.jsx)(Ge,{style:{fontWeight:0===n?"600":"400"},children:e.label}),(0,De.jsx)(Ge,{style:{fontWeight:0===n?"600":"400"},children:e.amountFormatted})]},e.label)))]})},sn=e=>{let{bookingRequest:n}=e;const t=(0,o.Zp)();return(0,De.jsx)(G,{style:{borderBottom:"0"},children:n.confirmed||n.declined||n.expired?(0,De.jsxs)(L,{onClick:()=>t(`/manage-payments/${n.id}`),children:["Manage payments",(0,De.jsx)(z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon"})]}):(0,De.jsxs)(L,{children:["Manage payments",(0,De.jsx)(z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon"})]})})};var rn=t(9082),an=t(8306),ln=t(3690),dn=t(5660),cn=t(5439);const hn=()=>{const{id:e}=(0,o.g)(),n=(0,o.Zp)(),[t,a]=(0,He.useRecoilState)(rn.H),[l,d]=(0,i.useState)(null),[c,h]=(0,i.useState)(null),[f,m]=(0,i.useState)(null),[$,y]=(0,i.useState)(null),[b,_]=(0,i.useState)(""),[j,v]=(0,i.useState)(0),[A,k]=(0,i.useState)(!1),[S,C]=(0,i.useState)(!1),D=(0,i.useCallback)((async()=>{let n=await(0,s.p)("get","dev-anystay-booking",`booking/${e}`,{headers:{Authorization:t,bookingId:e}});n=n.body.bookingRequest,d(n),y(JSON.parse(n.guestPriceBreakdown)),console.log(n),h(n.ListingModel),m(n.UserHostModel.UserModel),n.changeRequested&&k(!0),n.refundRequested&&C(!0)}),[e,t]);(0,i.useEffect)((()=>{D()}),[D]);const J=async()=>{_(""),document.body.style.overflow="unset"},B=e=>{_(e),document.body.style.overflow="hidden"};return l&&f&&c?(0,De.jsxs)(x,{children:[(0,De.jsx)(an.A,{title:`Your stay in ${c.suburb} | ${l.confirmationCode} | Anystay`}),(0,De.jsxs)(g,{children:[(0,De.jsx)(Ie,{listingData:c,bookingRequest:l}),(()=>{if(null===c||void 0===c||!c.checkInInstructions)return null;try{let e=(0,cn.D)(c.checkInInstructions,!0);return(e.steps[0].instruction||e.steps[0].imgKey)&&(()=>{if(l){const e=new Date(new Date(l.departureDate.slice(0,-1)).setHours(0,0,0,0)),n=new Date(new Date(l.arrivalDate.slice(0,-1)).getTime()-1728e5),t=new Date;return t>=n&&t<e}return!1})()?(0,De.jsxs)(u,{onClick:e=>{B("YourStaysCheckInInstructions")},children:[(0,De.jsx)(ln.wD,{style:{marginLeft:"16px"},children:(0,De.jsx)(ln.p8,{src:"https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg",alt:"Check in guid icon"})}),(0,De.jsxs)(ln.ZE,{children:[(0,De.jsx)(ln.we,{children:"Check-in guide"}),(0,De.jsxs)(ln.UF,{children:["Arrive after ",e.checkInOutTime.startTime]})]})]}):null}catch(e){return(0,De.jsxs)(u,{onClick:e=>{B("YourStaysCheckInInstructions")},children:[(0,De.jsx)(ln.wD,{style:{marginLeft:"16px"},children:(0,De.jsx)(ln.p8,{src:"https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg",alt:"Check in guid icon"})}),(0,De.jsxs)(ln.ZE,{children:[(0,De.jsx)(ln.we,{children:"Check-in guide"}),(0,De.jsxs)(ln.UF,{children:["Arrive after ",c.checkInTime/100+":00"]})]})]})}})(),(0,De.jsx)(Ve,{bookingRequest:l,refundRequested:S,changesRequested:A}),(0,De.jsx)(Xe,{bookingRequest:l}),(0,De.jsx)(en,{listingData:c}),(0,De.jsx)(G,{children:(0,De.jsxs)(H,{to:`/conversation/${l.conversationmodelID}`,children:["Message host",(0,De.jsx)(z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon"})]})}),(0,De.jsx)(G,{style:{borderBottom:"none"},children:(0,De.jsxs)(q,{href:`tel:${f.phone}`,children:["Call host",(0,De.jsx)(z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"arrow icon"})]})}),(0,De.jsx)(ve,{}),(0,De.jsx)(nn,{bookingRequest:l,listingData:c,changesRequested:A,refundRequested:S,activateCard:B,hostData:f}),(0,De.jsx)(ve,{}),(0,De.jsx)(tn,{}),(0,De.jsx)(ve,{}),(0,De.jsx)(on,{guestPriceBreakdown:$}),(0,De.jsx)(sn,{bookingRequest:l}),"cancelStayMenuPolicy"===b&&(0,De.jsx)(Je,{accessToken:t,bookingRequest:l,activateCard:B,deactivatePopupCards:J,setRefundAmount:v}),"cancelStayMenuRefundSummary"===b&&(0,De.jsx)(Be,{refundAmount:j,bookingRequest:l,activateCard:B,deactivatePopupCards:J}),"cancelStayMenuRefundMessage"===b&&(0,De.jsx)(Te,{accessToken:t,bookingRequest:l,activateCard:B,deactivatePopupCards:J,setBookingRequest:d,setGuestPriceBreakdown:y}),"cancelStayPopupSubmitted"===b&&(0,De.jsx)(We,{deactivatePopupCards:J}),"sendReceiptPopup"===b&&(0,De.jsx)(Me,{deactivatePopupCards:J}),"YourStaysCheckInInstructions"===b&&(0,De.jsx)(dn.A,{checkInInstructions:c.checkInInstructions,deactivatePopupCards:J}),(0,De.jsx)(w,{type:"button",onClick:()=>n(`/listing/${c.id}`),children:"See listing"})]}),(0,De.jsx)(p,{children:(0,De.jsx)(r.A,{containerStyle:{width:"100%",height:"100%",borderRadius:"0px",position:"absolute",bottom:-25},lat:JSON.parse(c.location).lat,lng:JSON.parse(c.location).lon,zoom:16,minZoom:13})})]}):null}}}]);
//# sourceMappingURL=8426.31c927cc.chunk.js.map
//# debugId=c6915957-5b7f-5919-bd0a-05055b9edcf6
