"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="672cc28c-3772-5eb3-9218-c9aa15dd81cf")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[9233],{9233:(e,n,t)=>{t.r(n),t.d(n,{default:()=>De});var i=t(5043),o=t(3216),s=t(5475),a=t(2119),r=t(4936);const l=a.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;

    @media (min-width: 768px) {
        max-width: 752px;
        margin: 0 auto;
        margin-top: 80px;
    }
`,d=a.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    padding-bottom: 24px;
    padding-top: 64px;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    border-top: 1px solid ${r.J2.Grey2.color};
    margin: 0 24px;
    align-items: center;
    position: relative;

    @media (min-width: 768px) {
        border-top: none;
        padding-top: 48px;
        padding-bottom: 32px;
    }
`,g=a.Ay.p`
    position: relative;
    font-size: ${r.$G.sans_900_bold.fontSize};
    font-weight: ${r.$G.sans_900_bold.fontWeight};
    line-height: ${r.$G.sans_900_bold.lineHeight};
    font-size: ${r.$G.sans_900_semi.fontSize};
    font-weight: ${r.$G.sans_900_semi.fontWeight};
    line-height: ${r.$G.sans_900_semi.lineHeight};
    color: ${r.J2.Black.color};
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${r.$G.sans_1000_semi.fontSize};
        line-height: ${r.$G.sans_1000_semi.lineHeight};
        min-width: 300px;
        margin-left: 24px;
    }
`,h=(a.Ay.button`
    background: none;
    padding: 0;
    border: 0;
    cursor: pointer;
`,a.Ay.img`
    display: flex;
    align-items: center;
    height: 16px;
    object-fit: cover;
    margin-right: 24px;
`,a.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    padding: ${r.dB.spacing_500.padding} 0;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    display: flex;
    flex-direction: column;
`),c=a.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,u=a.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,p=a.Ay.a`
    width: 100%;
    height: 40px;
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    border: none;
    padding: 0;
    text-decoration: none;
    border-radius: 9px;
    background: ${r.J2.Black.color};
    color: ${r.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 48px;
        font-size: ${r.$G.sans_400_semi.fontSize};
        font-weight: ${r.$G.sans_400_semi.fontWeight};
        line-height: ${r.$G.sans_400_semi.lineHeight};
    }
`,x=a.Ay.div`
    width: calc(100% - 48px);
    padding: ${r.dB.spacing_500.padding} 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_200.gap};
    border-bottom: 1px solid ${r.J2.Grey2.color};
`,f=a.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    margin: 0;
`,$=a.Ay.div`
    display: flex;
    gap: ${r.dB.spacing_300.gap};
    width: 100%;
`,m=a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0;
`,y=a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0;
    text-decoration: line-through;
`,b=a.Ay.button`
    margin: 0;
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    font-weight: ${r.$G.sans_400.fontWeight};
    text-align: left;
    border: none;
    padding: 0px;
    background: none;

    @media (min-width: 768px) {
        font-size: ${r.Ox.sans_button_200.fontSize};
        line-height: ${r.Ox.sans_button_200.lineHeight};
    }
`,_=a.Ay.p`
    margin: 0;
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
    text-align: left;
`,w=a.Ay.div`
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    color: ${r.J2.Black.color} !important;
    text-decoration: underline;
    cursor: pointer;
`,j=a.Ay.div`
    width: 100%;
    display: grid;
    grid-template-columns: 64px 1fr;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        grid-template-columns: 85px 1fr;
    }
`,k=a.Ay.div`
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
`,G=a.Ay.img`
    grid-row: 1/2;
    grid-column: 1/2;
    height: 64px;
    width: 64px;
    object-fit: cover;
    align-self: flex-start;
    border-radius: 50%;

    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
    }
`,A=a.Ay.p`
    font-size: ${r.$G.sans_500_semi.fontSize};
    font-weight: ${r.$G.sans_500_semi.fontWeight};
    line-height: ${r.$G.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 4px;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_600_semi.fontSize};
        line-height: ${r.$G.sans_600_semi.lineHeight};
    }
`,z=a.Ay.p`
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    color: ${r.J2.Yellow.color};
    margin-top: 0;
    margin-bottom: 4px;
`,D=(0,a.Ay)(s.N_)`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    margin-top: 0px;
    margin-bottom: 4px;
    word-break: break-all;
    max-width: calc(100% - 68px);
`,v=a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100% - 68px);
    overflow: hidden;
`,S=a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${r.J2.Grey.color};
    margin: 0;
    margin-bottom: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100% - 68px);
    overflow: hidden;
`,W=a.Ay.div`
    display: flex;
    align-items: center;
    // gap: ${r.dB.spacing_200.gap};
    // flex-direction: column;
    width: 100%;
    margin: 0 auto;
    /* border-bottom: 1px solid ${r.J2.Grey2.color}; */
`,B=(a.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    margin: 0;
    margin-right: auto;
`,a.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_200.gap};
    width: 100%;
`),R=(a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0;
`,(0,a.Ay)(s.N_)`
    width: 100%;
    height: 40px;
    background: none;
    border-radius: 9px;
    border: 1px solid ${r.J2.Grey1.color};
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        height: 48px;
        font-size: ${r.$G.sans_400_semi.fontSize};
        font-weight: ${r.$G.sans_400_semi.fontWeight};
        line-height: ${r.$G.sans_400_semi.lineHeight};
    }
`),C=a.Ay.p`
    font-size: ${r.$G.sans_700_semi.fontSize};
    line-height: ${r.$G.sans_700_semi.lineHeight};
    font-weight: ${r.$G.sans_700_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
`,q=(a.Ay.p`
    font-size: ${r.$G.sans_200.fontSize};
    font-weight: ${r.$G.sans_200.fontWeight};
    color: ${r.J2.Grey.color};
    line-height: ${r.$G.sans_200.lineHeight};
    margin-top: 8px;
`,a.Ay.button`
    height: 32px;
    border: none;
    background: ${r.J2.Blue.color};
    color: ${r.J2.White.color};
    font-size: ${r.Ox.sans_button_100.fontSize};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    border-radius: ${r.Qk.radius_8.borderRadius};
`,a.Ay.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${r.J2.White.color};
    padding: ${r.dB.spacing_400.padding};
    gap: ${r.dB.spacing_300.gap};

    @media (min-width: 768px) {
        position: unset;
        left: unset;
        bottom: unset;
        align-items: unset;
        justify-content: flex-end;
        padding: 0;
        margin-left: auto;
    }
`),J=(a.Ay.div`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: ${r.dB.spacing_300.gap};
    align-items: center;
    justify-content: space-between;
    margin: ${r.dB.spacing_400.margin};
    width: 280px;
    gap: ${r.dB.spacing_200.gap};
    height: 35px;
    margin-top: 0;
    margin-left: auto;

    @media (max-width: 767px) {
        display: none;
    }
`,a.Ay.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${r.J2.Blue.color};
    font-size: ${r.Ox.sans_button_100.fontSize};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    color: ${r.J2.White.color};
    width: calc(100% - 8px);
    cursor: pointer;

    @media (min-width: 768px) {
        width: 128px;
    }
`,a.Ay.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${r.J2.Grey1.color};
    font-size: ${r.Ox.sans_button_100.fontSize};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    color: ${r.J2.White.color};
    width: 100%;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 128px;
        margin-left: auto;
    }
`,a.Ay.button`
    height: 48px;
    border-radius: 9px;
    border: none;
    background: ${r.J2.Yellow.color};
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    color: ${r.J2.White.color};
    width: 100%;
    padding: 0 32px;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 168px;
        margin-left: auto;
    }
`),T=a.Ay.div`
    width: 100%;
    background: ${r.J2.White.color};
    padding: ${r.dB.spacing_400.padding};
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    align-items: flex-start;

    @media (min-width: 768px) {
        width: 555px;
    }
    @media (min-width: 768px) {
        width: 560px;
        height: fit-content;
        border-radius: 14px;
    }
`,H=(a.Ay.button`
    border: none;
    background: none;
    text-decoration: none;
    padding: none;
    align-self: flex-start;
    cursor: pointer;
`,a.Ay.img`
    width: 8px;
    height: 16px;
    object-fit: cover;
`,a.Ay.p`
    font-size: ${r.$G.sans_700_semi.fontSize};
    line-height: ${r.$G.sans_700_semi.lineHeight};
    font-weight: ${r.$G.sans_700_semi.fontWeight};
    margin: ${r.dB.spacing_250.margin} 0;
`),P=a.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    max-width: 220px;
    margin-bottom: 24px;
    @media (min-width: 768px) {
        max-width: 260px;
    }
`,I=(a.Ay.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    border-top: 1px solid ${r.J2.Grey2.color};
`,a.Ay.button`
    display: flex;
    padding-bottom: 24px;
    border: none;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    background: none;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    cursor: pointer;
`,a.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${r.dB.spacing_200.gap};
`,a.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    color: ${r.J2.Black.color};
    margin: 0;
`,a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${r.J2.Grey.color};
    margin: 0;
`,a.Ay.textarea`
    padding: ${r.dB.spacing_300.padding};
    width: 100%;
    border-radius: ${r.Qk.radius_12.borderRadius};
    height: 240px;
    border: 1px solid ${r.J2.Grey1.color};
    margin: 0;
    margin-bottom: 96px;
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    color: ${r.J2.Black.color};
    resize: none;

    &::placeholder {
        color: ${r.J2.Grey1.color};
    }
`),O=(a.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,a.Ay.button`
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: underline;
`,a.Ay.button`
    width: 156px;
    height: 48px;
    border-radius: 9px;
    background: ${r.J2.Red1.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    cursor: pointer;
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    border: none;
    color: ${r.J2.White.color};
`,a.Ay.p`
    font-size: ${r.$G.sans_600_semi.fontSize};
    font-weight: ${r.$G.sans_600_semi.fontWeight};
    line-height: ${r.$G.sans_600_semi.lineHeight};
    color: ${r.J2.Black.color};
    margin: 0;
    margin-bottom: 16px;
`),M=a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin: 0;
`,N=a.Ay.button`
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    color: ${r.J2.White.color};
    width: 100%;
    height: 48px;
    border-radius: 9px;
    background: ${r.J2.Blue.color};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: auto;
`,F=a.Ay.p`
    font-size: ${r.so.sans_text_300.fontSize};
    font-weight: ${r.so.sans_text_300.fontWeight};
    line-height: ${r.so.sans_text_300.lineHeight};
    margin: 0;
    margin-top: 24px;

    strong {
        font-weight: ${r.$G.sans_400_semi.fontWeight};
    }
`,U=a.Ay.a`
    font-size: ${r.$G.sans_400_semi.fontSize};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    text-decoration: underline;
`,L=a.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    margin: 0;
`,Y=a.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    margin: 0;
`,Z=a.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`,E=(a.Ay.div`
    width: 100%;
    height: 1px;
    margin: ${r.dB.spacing_300.margin} 0;
    background: ${r.J2.Grey2.color};
`,a.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    margin: 0;
    margin-bottom: 8px;
`,a.Ay.div`
    width: 100%;
    height: 8px;
    margin-top: 0;
    background: ${r.J2.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);

    @media (min-width: 768px) {
        display: none;
    }
`),Q=a.Ay.div`
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${r.J2.White.color};
    display: flex;
    flex-direction: column;
    padding: ${r.dB.spacing_400.padding};
    margin-top: 16px;
    align-items: flex-start;

    @media (min-width: 768px) {
        max-width: 560px;
        height: fit-content;
        border-radius: 14px;
    }
`,K=a.Ay.p`
    font-size: ${r.$G.sans_700_semi.fontSize};
    line-height: ${r.$G.sans_700_semi.lineHeight};
    font-weight: ${r.$G.sans_700_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 24px;
    text-align: center;
`,V=a.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 24px;
    max-width: 336px;
    text-align: left;
`,X=(a.Ay.div`
    width: 100%;
    border-top: 1px solid ${r.J2.Grey2.color};
    padding: ${r.dB.spacing_400.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`,a.Ay.div`
    margin: 0;
    padding: 0;
    background: none;
    border: none;
`,a.Ay.img`
    height: 14px;
    object-fit: cover;
    transform: rotate(180deg);
`,a.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_100.gap};
`,a.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    margin: 0;
`,a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
    margin: 0;
`,a.Ay.p`
    font-size: ${r.$G.sans_700_semi.fontSize};
    line-height: ${r.$G.sans_700_semi.lineHeight};
    font-weight: ${r.$G.sans_700_semi.fontWeight};
    margin: 0;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-right: auto;
`),ee=a.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 32px;
    padding-right: 8px;
`,ne=a.Ay.div`
    min-width: 100%;
    height: 1px;
    background: ${r.J2.Grey2.color};
`,te=a.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    margin: 0;

    strong {
        font-weight: ${r.$G.sans_400_semi.fontWeight};
    }
`,ie=(a.Ay.button`
    height: 48px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e=>e.selected?r.J2.Blue.color:r.J2.Grey1.color};
    border-radius: 9px;
    color: ${r.J2.White.color};
    font-size: ${r.Ox.sans_button_100.fontSize};
    cursor: pointer;
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    width: 156px;
`,a.Ay.textarea`
    width: 100%;
    height: 240px;
    border-radius: 9px;
    border: 1px solid ${r.J2.Grey1.color};
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    padding: ${r.dB.spacing_300.padding};
    margin-bottom: 48px;
    resize: none;

    &::placeholder {
        color: ${r.J2.Grey1.color};
    }
    &:focus {
        outline: none;
    }
`),oe=a.Ay.button`
    width: 100%;
    height: 48px;
    border-radius: 9px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: ${r.Ox.sans_button_100.fontSize};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    color: ${r.J2.White.color};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    background: ${r.J2.Blue.color};
`,se=a.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 8px;
    text-align: center;
`,ae=a.Ay.p`
    font-size: ${r.$G.sans_800_semi.fontSize};
    line-height: ${r.$G.sans_800_semi.lineHeight};
    font-weight: ${r.$G.sans_800_semi.fontWeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 0px;
    text-align: center;
`,re=a.Ay.p`
    font-size: ${r.$G.sans_200.fontSize};
    font-weight: ${r.$G.sans_200.fontWeight};
    line-height: ${r.$G.sans_200.lineHeight};
    margin: 0;
    margin-bottom: 32px;
    max-width: 300px;
    text-align: center;

    strong {
        font-weight: ${r.$G.sans_200_semi.fontWeight};
    }
`,le=a.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0 auto;
    text-align: left;
    padding: ${r.dB.spacing_300.padding};
    border-radius: ${r.Qk.radius_12.borderRadius};
    width: 100%;
    height: 250px;
    border: 1px solid ${r.J2.Grey1.color};
    margin-bottom: 64px;
    word-break: break-all;
    white-space: normal;
    overflow-wrap: break-word;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    strong {
        font-weight: ${r.$G.sans_300_semi.fontWeight};
    }
`;var de=t(1372),ge=t(9856),he=t(579);const ce=e=>{let{declineRequestPopup:n,toggleDeclineRequestPopup:t,declineBooking:o,fetchBooking:s,guestData:a}=e;const l=(0,ge.A)(!0,(()=>{t(!n)})),[d,g]=(0,i.useState)(0),[h,c]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[x,f]=(0,i.useState)(!1);return(0,he.jsxs)(he.Fragment,{children:[0===d&&(0,he.jsx)(de.A,{ref:l,backBtnType:"Arrow",closePopup:()=>t(!1),cancelPopup:()=>t(!1),handleSave:async()=>{f(!0),await o(h,u).then((async()=>{s(),g(1)})),f(!1)},btnText:"Decline",disable:x,isContinueBtnLoading:x,children:(0,he.jsxs)(T,{children:[(0,he.jsxs)(H,{children:["Decline ",a&&`${a.firstName}'s`," request"]}),(0,he.jsxs)(P,{children:["Let ",a?a.firstName:"your guest"," know why you had to decline their request to stay."]}),(0,he.jsx)(I,{placeholder:"Type your message",value:u,onChange:e=>{p(e.target.value)}})]})}),1===d&&(0,he.jsx)(de.A,{ref:l,backBtnType:"Arrow",closePopup:()=>{g(0),c(""),p("")},noBackBtn:!0,noContinueBtn:!0,children:(0,he.jsxs)(T,{style:{marginTop:"0"},children:[(0,he.jsx)(O,{children:"Request declined"}),(0,he.jsx)(M,{children:"There are no penalties for declining requests, however if you do it often your account may be reviewed."}),(0,he.jsx)("div",{style:{width:"100%",height:"1px",background:r.J2.Grey2.color,margin:"32px 0"}}),(0,he.jsx)(O,{children:"Our commitment"}),(0,he.jsx)(M,{children:"We are committed to providing you withh a perfect hosting experience. When you don't feel comfortable about a request, rest assured knowing our friendly support team is here to help you out."}),(0,he.jsx)("div",{style:{width:"100%",height:"1px",background:r.J2.Grey2.color,margin:"32px 0"}}),(0,he.jsx)(N,{onClick:()=>t(!1),type:"button",children:"Done"})]})})]})};var ue=t(7426);const pe=e=>{let{toggleCancelBookingMessagePopup:n,guestData:t,bookingRequest:o,reasonCancelled:s,accessToken:a,toggleCancelBookingCancelledPopup:r,fetchBooking:l}=e;const d=(0,ge.A)(!0,(()=>{c||n(!1)})),[g,h]=(0,i.useState)(""),[c,u]=(0,i.useState)(!1);return t?(0,he.jsx)(de.A,{ref:d,backBtnType:"Arrow",closePopup:()=>n(!1),handleSave:async()=>{o&&(u(!0),await(0,ue.p)("post","dev-anystay-booking","booking/host/cancel",{body:{bookingRequestID:o.id,message:g,reasonCancelled:s},headers:{Authorization:a,bookingId:o.id}}).then((async e=>{n(!1),r(!0),await l(),u(!1)})).catch((e=>{console.log(e),u(!1)})))},disable:c,isContinueBtnLoading:c,cancelBtnText:"Don't cancel",btnText:"Cancel booking",children:(0,he.jsxs)(Q,{children:[(0,he.jsxs)(K,{children:["Cancel ",t.firstName,"'s request?"]}),(0,he.jsxs)(V,{children:["Send ",t.firstName," a message to let them know why you had to cancel their booking."]}),(0,he.jsx)(ie,{value:g,onChange:e=>h(e.target.value),placeholder:"Type your message",maxLength:4096})]})}):null},xe=e=>{let{bookingRequest:n,accessToken:t,togglePayoutDetailsPopup:o,toggleCancelBookingMessagePopup:s}=e;const a=(0,ge.A)(!0,(()=>{s(!1)})),[r,l]=(0,i.useState)("$0.00"),[d,g]=(0,i.useState)("$0.00"),h=(0,i.useCallback)((async()=>{n&&await(0,ue.p)("post","dev-anystay-booking","booking/host/cancel/check",{body:{bookingRequestID:n.id},headers:{Authorization:t,bookingId:n.id}}).then((e=>{e.success&&Number(e.bookingRequest.bookingAmount-e.bookingRequest.refunded-e.refund)>0&&l(`$${Number((e.bookingRequest.bookingAmount-e.bookingRequest.refunded-e.refund)/100).toFixed(2)}`)})).catch((e=>{console.log(e)}))}),[n,t]);(0,i.useEffect)((()=>{n&&(Number(n.bookingAmount-n.refundedAmount)>0&&g(`$${Number((n.bookingAmount-n.refundedAmount)/100).toFixed(2)}`),h())}),[n,h]);return(0,he.jsx)(de.A,{ref:a,backBtnType:"Arrow",closePopup:()=>o(!1),handleSave:()=>{o(!1),s(!0)},cancelBtnText:"Don't cancel",btnText:"Continue",children:(0,he.jsxs)(Q,{children:[(0,he.jsxs)(X,{children:["Your payout is ",r]}),(0,he.jsx)(ee,{children:"You'll have to refund your guest for all unspent nights. If you have already been paid, it will be deducted from your payout method."}),(0,he.jsx)(ne,{style:{marginTop:"22px",marginBottom:"22px"}}),(0,he.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,he.jsx)(te,{children:(0,he.jsx)("strong",{children:"Original payout"})}),(0,he.jsx)(te,{children:(0,he.jsx)("strong",{children:d})})]}),(0,he.jsx)(ne,{style:{marginTop:"22px",marginBottom:"22px"}}),(0,he.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,he.jsx)(te,{children:(0,he.jsx)("strong",{children:"New payout"})}),(0,he.jsx)(te,{children:(0,he.jsx)("strong",{children:r})})]})]})})},fe=e=>{let{toggleCancelBookingCancelledPopup:n}=e;const t=(0,ge.A)(!0,(()=>{n(!1)}));return(0,he.jsx)(de.A,{ref:t,backBtnType:"Arrow",closePopup:()=>n(!1),noContinueBtn:!0,children:(0,he.jsxs)(Q,{children:[(0,he.jsx)(X,{children:"Booking cancelled"}),(0,he.jsx)(ee,{children:"Your booking was successfully cancelled. Frequent cancellations may result in your account being reviewed."}),(0,he.jsx)(ne,{}),(0,he.jsx)(X,{children:"Our commitment"}),(0,he.jsx)(ee,{children:"We are committed to providing you with a perfect hosting experience. When you don't feel comfortable about a booking, rest assured knowing our friendly support team is here to help you out."}),(0,he.jsx)(ne,{}),(0,he.jsx)(oe,{type:"button",onClick:()=>n(!1),children:"Done"})]})})},$e=e=>{let{guestData:n,refund:t,confirmRefund:o,declineRefund:s,toggleRefundRequestedPopup:a}=e;const r=(0,ge.A)(!0,(()=>{a(!1)})),[l,d]=(0,i.useState)(!1),[g,h]=(0,i.useState)(!1);return t?(0,he.jsx)(de.A,{ref:r,backBtnType:"Arrow",closePopup:()=>a(!1),handleSave:async()=>{h(!0),await o(),h(!1)},disable:g||l,isContinueBtnLoading:g,btnColor:"blue",cancelPopup:async()=>{d(!0),await s(),d(!0)},btnText:"Accept",cancelBtnText:"Decline",children:(0,he.jsxs)(Q,{children:[(0,he.jsx)(se,{children:"Refund request"}),(0,he.jsxs)(ae,{children:["$",Number(t.refundAmount/100).toFixed(2)," AUD"]}),(0,he.jsxs)(re,{children:["You can offer your guest a refund of $",Number(t.refundAmount/100).toFixed(2)," AUD or decline. ",(0,he.jsx)("strong",{children:"Your booking won't be affected."})]}),(0,he.jsxs)(le,{children:[(0,he.jsxs)("strong",{children:[n?n.firstName:"Guest",": "]}),t.refundMessage?t.refundMessage:"No message provided"]})]})}):null};var me=t(4677),ye=t(4204);const be=e=>{let{bookingRequest:n,changeRequest:t,accessToken:s,fetchBooking:a,toggleRefundedPopup:r,toggleDeclineRequestPopup:l}=e;const[d,g]=(0,i.useState)(!1),[h,c]=(0,i.useState)(!1),u=(0,o.Zp)();return n?(0,he.jsx)(he.Fragment,{children:n.refundRequested?(0,he.jsx)(q,{style:{gridTemplateColumns:"100%"},children:(0,he.jsx)(J,{type:"button",onClick:()=>{r(!0)},children:"Respond"})}):n.changeRequested?(0,he.jsxs)(q,{children:[(0,he.jsx)(ye.A,{style:{width:window.innerWidth<768?"100%":"unset"},disabled:d,isLoading:d,background:"grey",onClick:async()=>{g(!0),await(async()=>{try{n&&t&&(await(0,ue.p)("post","dev-anystay-booking","booking/change/decline",{headers:{Authorization:s,bookingId:n.id},body:{bookingRequestId:n.id,changeBookingRequestId:t.id,listingModelId:n.listingmodelID}}),await a())}catch(e){console.log(e)}})(),g(!1)},children:"Decline"}),(0,he.jsx)(ye.A,{style:{width:window.innerWidth<768?"100%":"unset"},disabled:h,isLoading:h,background:"blue",onClick:async()=>{c(!0),await(async()=>{try{n&&t&&(await(0,ue.p)("post","dev-anystay-booking","booking/change/confirm",{headers:{Authorization:s,bookingId:n.id},body:{bookingRequestId:n.id,changeBookingRequestId:t.id,listingModelId:n.listingmodelID}}),await a())}catch(e){console.log(e)}})(),c(!1)},children:"Accept"})]}):n.confirmed||n.declined?(new Date).getTime()>new Date(n.departureDate).getTime()&&(0,he.jsx)(q,{children:(0,he.jsx)(J,{type:"button",onClick:()=>{u(`/review-guest/${n.id}`)},children:"Review guest"})}):(0,he.jsxs)(q,{children:[(0,he.jsx)(ye.A,{style:{width:window.innerWidth<768?"100%":"unset"},disabled:d,isLoading:d,background:"grey",onClick:()=>{l(!0)},children:"Decline"}),(0,he.jsx)(ye.A,{style:{width:window.innerWidth<768?"100%":"unset"},disabled:h,isLoading:h,background:"blue",onClick:async()=>{c(!0),await(async()=>{try{n&&(await(0,ue.p)("post","dev-anystay-booking","booking/confirm",{headers:{Authorization:s,bookingId:n.id},body:{id:n.id,confirmed:!0}}),await a())}catch(e){console.log(e)}})(),c(!1)},children:"Accept"})]})}):null},_e=e=>{let{bookingRequest:n,bookingRequestConfirmed:t,daysTillArrival:o,daysTillDeparture:s,guestData:a,listingData:l,nightsDifference:d,guestProfilePicture:g,changeRequest:c}=e;const u=(0,i.useMemo)((()=>{const e=[];return null!==n&&void 0!==n&&n.changeRequested&&c?(e.push(`${c.newGuests} guest${c.newGuests>1?"s":""}`),c.newInfants>0&&e.push(`${c.newInfants} infant${c.newInfants>1?"s":""}`),c.newPets>0&&e.push(`${c.newPets} pet${c.newPets>1?"s":""}`)):n&&(e.push(`${n.guests} guest${n.guests>1?"s":""}`),n.infants>0&&e.push(`${n.infants} infant${n.infants>1?"s":""}`),n.pets>0&&e.push(`${n.pets} pet${n.pets>1?"s":""}`)),e.join(", ")}),[c,n]);return n?(0,he.jsx)(h,{children:(0,he.jsxs)(j,{children:[(0,he.jsxs)(k,{children:[(0,he.jsx)(z,{children:n.cancelled?(0,he.jsx)("span",{style:{color:r.J2.Black.color},children:"Cancelled"}):n.changeRequested||n.refundRequested?(0,he.jsx)("span",{style:{color:r.J2.Yellow.color},children:n.expiryTime>0?`Expires in ${n.expiryTime} hours`:"Overdue"}):n.declined?(0,he.jsx)("span",{style:{color:r.J2.Black.color},children:"Declined"}):!0===t?(0,he.jsx)("span",{style:{color:(()=>{if(n){let e=new Date;return(new Date(n.departureDate).getTime()-e.getTime())/864e5<-.5?r.J2.Black.color:null===n.confirmed?r.J2.Yellow.color:(n.confirmed,r.J2.Black.color)}})()},children:o>1?`Arriving in ${Math.ceil(o)} days`:s>0?`Departing in ${Math.ceil(s)} days`:"Complete"}):(0,he.jsx)("span",{style:{color:r.J2.Yellow.color},children:n.expiryTime>0?`Expires in ${n.expiryTime} hours`:"Overdue"})}),(0,he.jsx)(A,{children:a&&`${a.firstName} ${a.lastName}`}),l&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(S,{children:(()=>{if(n){const e=(n.bookingAmount/100).toFixed(2),t=(n.refundedAmount/100).toFixed(2);return`$${e} ${n.refundedAmount>0?`(-$${t})`:""} AUD`}})()}),(0,he.jsx)(D,{to:`/edit-listing/${l.id}`,children:l.propertyTitle}),(0,he.jsxs)(v,{children:[`${d} night${d>1?"s":""}`," \u2022 ",u]})]})]}),(0,he.jsx)(G,{src:g,alt:"Guest profile picture"})]})}):null},we=e=>{let{changeRequest:n,bookingRequest:t,newArrivalDate:i,newDepartureDate:o,arrivalDate:s,guestData:a,departureDate:l}=e;const d=e=>{if(!e)return;const n=new Date(e);return`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][n.getDay()]}, ${n.getDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]} ${n.getFullYear()}`},g=e=>{if(e<100||e>2400)return null;return`${1200===e||2400===e?12:e/100%12}:00${e>1100&&e<2400?"pm":"am"}`},c=()=>{const e=[];return n&&(e.push(`${n.newAdults} adult${n.newAdults>1?"s":""}`),n.newChildren>0&&e.push(`${n.newChildren} child${n.newChildren>1?"ren":""}`),n.newInfants>0&&e.push(`${n.newInfants} infant${n.newInfants>1?"s":""}`),n.newPets>0&&e.push(`${n.newPets} pet${n.newPets>1?"s":""}`)),e.join(", ")},w=()=>{const e=[];return t&&(e.push(`${t.adults} adult${t.adults>1?"s":""}`),t.children>0&&e.push(`${t.children} child${t.children>1?"ren":""}`),t.infants>0&&e.push(`${t.infants} infant${t.infants>1?"s":""}`),t.pets>0&&e.push(`${t.pets} pet${t.pets>1?"s":""}`)),e.join(", ")};return t?(0,he.jsx)(he.Fragment,{children:t.changeRequested?(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)(x,{children:[(0,he.jsx)(f,{children:"Arrive"}),(0,he.jsxs)($,{children:[(0,he.jsx)(m,{children:d(i)}),d(i)!==d(s)&&(0,he.jsx)(y,{children:d(s)})]})]}),(0,he.jsxs)(x,{children:[(0,he.jsx)(f,{children:"Depart"}),(0,he.jsxs)($,{children:[(0,he.jsx)(m,{children:d(o)}),d(o)!==d(l)&&(0,he.jsx)(y,{children:d(l)})]})]}),(0,he.jsxs)(x,{children:[(0,he.jsx)(f,{children:"Guests"}),(0,he.jsxs)($,{children:[(0,he.jsx)(m,{children:c()}),c()!==w()&&(0,he.jsx)(y,{children:w()})]})]})]}):(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)(W,{children:[(0,he.jsx)(h,{style:{borderBottom:"none"},children:(0,he.jsxs)(B,{children:[(0,he.jsx)(b,{style:{fontWeight:600},children:"Arrive"}),(0,he.jsx)(b,{children:d(i||s)}),(0,he.jsx)(_,{children:g(t.checkInTime)})]})}),(0,he.jsx)("div",{style:{height:"32px",width:"1px",background:r.J2.Grey2.color}}),(0,he.jsx)(h,{style:{borderBottom:"none"},children:(0,he.jsxs)(B,{children:[(0,he.jsx)(b,{style:{fontWeight:600},children:"Depart"}),(0,he.jsx)(b,{children:d(o||l)}),(0,he.jsx)(_,{children:g(t.checkOutTime)})]})})]}),(0,he.jsxs)(h,{style:{borderTop:`1px solid ${r.J2.Grey2.color}`,borderBottom:"None"},children:[(0,he.jsxs)(u,{style:{gap:"16px"},children:[(0,he.jsx)(R,{to:`/guest/profile/${t.usermodelID}`,children:"Profile"}),(0,he.jsx)(R,{to:`/host-conversation/${t.conversationmodelID}`,children:"Message"})]}),t.confirmed&&(0,he.jsxs)(p,{href:`tel:${a&&a.phone}`,children:["Call ",a&&a.phone]})]}),(0,he.jsx)(E,{}),(0,he.jsx)(h,{children:(0,he.jsxs)(u,{children:[(0,he.jsx)(b,{children:"Guests"}),(0,he.jsx)(b,{children:w()})]})})]})}):null};var je=t(9082),ke=t(831),Ge=t(8306),Ae=t(8069),ze=t(1852);function De(){const e=(0,o.Zp)(),{id:n}=(0,o.g)(),[t,a]=(0,ke.useRecoilState)(je.H),[p,x]=(0,i.useState)(!0),[f,$]=(0,i.useState)(null),[m,y]=(0,i.useState)(null),[_,j]=(0,i.useState)(null),[k,G]=(0,i.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"),[A,z]=(0,i.useState)(0),[D,v]=(0,i.useState)(0),[S,W]=(0,i.useState)(0),[B,R]=(0,i.useState)(""),[q,J]=(0,i.useState)(null),[T,H]=(0,i.useState)(null),[P,I]=(0,i.useState)(null),[O,M]=(0,i.useState)(null),[N,Q]=(0,i.useState)(!1),[K,V]=(0,i.useState)(!1),[X,ee]=(0,i.useState)(!1),[ne,te]=(0,i.useState)(!1),[ie,oe]=(0,i.useState)(!1),[se,ae]=(0,i.useState)(!1),[re,le]=(0,i.useState)(!1),[de,ye]=(0,i.useState)(null),[De,ve]=(0,i.useState)(null),[Se,We]=(0,i.useState)(""),[Be,Re]=(0,i.useState)(null),[Ce,qe]=(0,i.useState)(!1),[Je,Te]=(0,i.useState)(!1),He=(0,i.useCallback)((async(e,n)=>{let t=new Date,i=e;const o=(n.getTime()-t.getTime())/864e5,s=i.getTime()-t.getTime();v(s/864e5),W(o)}),[]),Pe=(0,i.useCallback)((async()=>{try{let e=await(0,ue.p)("get","dev-anystay-booking",`booking/${n}`,{headers:{Authorization:t,bookingId:n}});e=e.body.bookingRequest;let i=e.UserModel,o=e.ListingModel;if(i.profilePicture){const e=(0,Ae.A)(i.profilePicture,i.identityID,100);G(e)}const s=new Date(e.arrivalDate.replace("Z","")),a=new Date(e.departureDate.replace("Z",""));return e.changeRequested&&(ve(e.ChangeBookingRequestModel),I(new Date(e.ChangeBookingRequestModel.newArrivalDate.replace("Z",""))),M(new Date(e.ChangeBookingRequestModel.newDepartureDate.replace("Z","")))),e.refundRequested&&ye(e.RefundRequestModel),le(e.refundRequested),Re(JSON.parse(e.hostPriceBreakdown)),$(e),j(i),y(o),z(e.changeRequested?e.ChangeBookingRequestModel.nights:e.nights),J(s),H(a),R(e.confirmationCode),Q(e.confirmed),He(s,a),{bookingRequest:e}}catch(e){console.log(e)}}),[He,n,t]);(0,i.useEffect)((()=>{(async()=>{await Pe(),x(!1)})()}),[Pe]);const Ie=(0,i.useMemo)((()=>{const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(q&&f){let n=new Date,t=new Date(q).setUTCDate(q.getUTCDate()-1),i=new Date(q).setUTCDate(q.getUTCDate()-1),o=n.setUTCDate(n.getUTCDate()+2),s=new Date(q).setUTCDate(q.getUTCDate()-28),a=`${new Date(t).getUTCDate()} ${e[new Date(t).getUTCMonth()]}`,r=`${new Date(i).getUTCDate()} ${e[new Date(i).getUTCMonth()]}`,l=`${new Date(o).getUTCDate()} ${e[new Date(o).getUTCMonth()]}`,d=`${new Date(s).getUTCDate()} ${e[new Date(s).getUTCMonth()]}`;switch(f.cancellationPolicy){case"flexible":return(0,he.jsxs)(F,{children:[(0,he.jsxs)("strong",{style:{fontWeight:575},children:["Free cancellation before ",a,"."]})," After that, you will be paid for every night the guest spends. ",(0,he.jsx)("br",{}),(0,he.jsx)(U,{href:"https://help.anystay.com.au/en/articles/7010772-cancellations",target:window.innerWidth>768?"_blank":"",children:"Learn more"})]});case"moderate":return(0,he.jsxs)(F,{children:[(0,he.jsxs)("strong",{style:{fontWeight:575},children:["Free cancellation before ",r,"."]})," After that, you will be paid for every night spent, plus 50% of unspent nights."," ",(0,he.jsx)(U,{href:"https://help.anystay.com.au/en/articles/7010772-cancellations",target:window.innerWidth>768?"_blank":"",children:"Learn more"})]});case"strict":return(0,he.jsxs)(F,{children:[(0,he.jsxs)("strong",{style:{fontWeight:575},children:["Free cancellation before ",l,"."]})," If you cancel before ",d," you will receive a 50% refund minus service fees. After that, you won't be Refunded."," ",(0,he.jsx)(U,{href:"https://help.anystay.com.au/en/articles/7010772-cancellations",target:window.innerWidth>768?"_blank":"",children:"Learn more"})]});default:return""}}}),[q,f]),Oe=e=>{V(e)},Me=e=>{te(e)},Ne=e=>{oe(e)},Fe=e=>{ae(e)},Ue=(e,n)=>{e?(window.Intercom("hide"),n(!1)):(window.Intercom("showNewMessage",""),n(!0))},Le=(0,ge.A)(Ce,(()=>Ue(Ce,qe))),Ye=(0,ge.A)(Je,(()=>Ue(Je,Te)));return p?(0,he.jsx)(me.A,{guestMode:!0,reverse:!1}):(0,he.jsxs)(i.Fragment,{children:[(0,he.jsx)(Ge.A,{title:`${null===_||void 0===_?void 0:_.firstName} stay | ${B} | Anystay`}),(0,he.jsxs)(l,{children:[(0,he.jsxs)(d,{children:[(0,he.jsx)(ze.A,{onClick:()=>{e(-1)},type:"Arrow",mobileTop:24}),(0,he.jsx)(g,{children:(()=>{let e;return e=f?f.refundRequested?"Refund request":f.changeRequested?"Change request":f.confirmed?"Stay details":"Request to stay":"Request to stay",e})()}),(0,he.jsx)(be,{bookingRequest:f,changeRequest:De,accessToken:t,fetchBooking:Pe,toggleRefundedPopup:e=>{le(e)},toggleDeclineRequestPopup:Oe})]}),(0,he.jsx)(_e,{changeRequest:De,bookingRequest:f,bookingRequestConfirmed:N,daysTillArrival:D,daysTillDeparture:S,guestData:_,listingData:m,nightsDifference:A,guestProfilePicture:k}),(0,he.jsx)(we,{changeRequest:De,bookingRequest:f,newArrivalDate:P,newDepartureDate:O,arrivalDate:q,departureDate:T,guestData:_}),f&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(h,{children:(0,he.jsxs)(u,{children:[(0,he.jsx)(b,{children:"Booking date"}),(0,he.jsx)(b,{children:`${new Date(f.createdAt).toDateString().split(" ")[0]}, ${new Date(f.createdAt).toLocaleDateString("au",{day:"numeric",month:"short",year:"numeric"})}`})]})}),(0,he.jsx)(h,{children:(0,he.jsxs)(u,{children:[(0,he.jsx)(b,{children:"Booking ref."}),(0,he.jsx)(b,{children:f.confirmationCode})]})})]}),(null===f||void 0===f?void 0:f.changeRequested)&&(0,he.jsx)(h,{children:(0,he.jsxs)(u,{children:[(0,he.jsx)(b,{children:"Booking ID"}),(0,he.jsx)(b,{children:B})]})}),(0,he.jsx)(h,{children:(0,he.jsx)(u,{children:(0,he.jsx)(s.N_,{to:"/your-calendar",children:(0,he.jsx)(w,{style:{textDecoration:"underline"},children:"See calendar"})})})}),(0,he.jsx)(E,{}),(0,he.jsxs)(h,{children:[(0,he.jsx)(u,{children:(0,he.jsx)(C,{children:"Your payout"})}),null===Be||void 0===Be?void 0:Be.priceItems.map((e=>(0,he.jsxs)(Z,{children:[(0,he.jsx)(L,{children:e.label}),(0,he.jsx)(Y,{children:e.amountFormatted})]},e.label))),null===Be||void 0===Be?void 0:Be.subTotalItems.map(((e,n)=>(0,he.jsxs)(Z,{children:[(0,he.jsx)(L,{style:{fontWeight:0===n?"600":"400"},children:e.label}),(0,he.jsx)(Y,{style:{fontWeight:0===n?"600":"400"},children:e.amountFormatted})]},e.label)))]}),!(null!==f&&void 0!==f&&f.changeRequested)&&(0,he.jsx)(h,{children:(0,he.jsx)(u,{children:f?(0,he.jsx)(s.N_,{to:`/payment-details/${f.id}`,children:(0,he.jsx)(w,{style:{textDecoration:"underline"},children:"Manage payout"})}):null})}),!(null!==f&&void 0!==f&&f.changeRequested)&&(0,he.jsxs)(i.Fragment,{children:[(0,he.jsx)(E,{}),(0,he.jsxs)(h,{children:[(0,he.jsx)(u,{children:(0,he.jsx)(C,{children:"Guest policy"})}),f&&Ie,f&&f.deposit?(0,he.jsxs)(F,{children:[(0,he.jsxs)("strong",{style:{fontWeight:575},children:["You may charge up to $",Number(f.deposit/100).toFixed(2)," AUD in deposit."]})," This is usually processed at check-in."," ",(0,he.jsx)(U,{href:"https://help.anystay.com.au/en/articles/7016835-deposits",target:window.innerWidth>768?"_blank":"",children:"Learn more"})]}):(0,he.jsxs)(F,{children:[(0,he.jsx)("strong",{style:{fontWeight:575},children:"No damage deposit."})," You guest does not have to pay a deposit. However, they may still be liable for damages."," ",(0,he.jsx)(U,{href:"https://help.anystay.com.au/en/articles/7016835-deposits",target:window.innerWidth>768?"_blank":"",children:"Learn more"})]})]}),f&&f.confirmed&&(0,he.jsx)(h,{children:(0,he.jsx)(c,{children:(0,he.jsx)(w,{onClick:()=>e(`/booking-receipt/${f.id}`),children:"Tax invoice"})})}),(0,he.jsx)(h,{children:(0,he.jsx)(c,{children:(0,he.jsx)(w,{onClick:()=>Ue(Je,Te),ref:Ye,children:"Report guest"})})})]}),f&&!0!==f.cancelled&&!0!==f.changeRequested&&(0,he.jsx)(h,{children:(0,he.jsx)(u,{onClick:()=>{f.cancelled?Fe(!0):Me(!0)},children:(0,he.jsx)(w,{style:{color:r.J2.Blue.color,textDecoration:"underline"},children:"Cancel booking"})})}),(0,he.jsx)(E,{}),(0,he.jsxs)(h,{children:[(0,he.jsx)(u,{children:(0,he.jsx)(C,{children:"Get support"})}),(0,he.jsx)(F,{children:"Get in touch with our friendly host support team. We're always ready to assist you with anything you need."})]}),(0,he.jsx)(h,{style:{borderBottom:"0"},children:(0,he.jsx)(c,{children:(0,he.jsx)(w,{onClick:()=>Ue(Ce,qe),ref:Le,children:"Contact support"})})})]}),K&&(0,he.jsx)(ce,{declineRequestPopup:K,fetchBooking:Pe,declineBooking:async(e,n)=>{try{f&&(await(0,ue.p)("post","dev-anystay-booking","booking/decline",{headers:{Authorization:t,bookingId:f.id},body:{id:f.id,reasonDeclined:e,declinedMessage:n}}),await Pe())}catch(i){console.log(i)}},toggleDeclineRequestPopup:Oe,guestData:_}),ne&&(0,he.jsx)(xe,{accessToken:t,bookingRequest:f,togglePayoutDetailsPopup:Me,toggleCancelBookingMessagePopup:Ne}),ie&&(0,he.jsx)(pe,{guestData:_,accessToken:t,reasonCancelled:Se,bookingRequest:f,fetchBooking:Pe,toggleCancelBookingMessagePopup:Ne,toggleCancelBookingCancelledPopup:Fe}),se&&(0,he.jsx)(fe,{toggleCancelBookingCancelledPopup:Fe}),re&&(0,he.jsx)($e,{guestData:_,refund:de,confirmRefund:async()=>{try{f&&de&&(await(0,ue.p)("post","dev-anystay-booking","booking/guest/refund/confirm",{headers:{Authorization:t,bookingId:f.id},body:{bookingRequestID:f.id,refundRequestID:de.id}}),await Pe())}catch(e){console.log(e)}},declineRefund:async()=>{try{f&&de&&(await(0,ue.p)("post","dev-anystay-booking","booking/guest/refund/decline",{headers:{Authorization:t,bookingId:f.id},body:{bookingRequestID:f.id,refundRequestID:de.id}}),await Pe())}catch(e){console.log(e)}},toggleRefundRequestedPopup:e=>{le(e)}})]})}}}]);
//# sourceMappingURL=9233.b62c366c.chunk.js.map
//# debugId=672cc28c-3772-5eb3-9218-c9aa15dd81cf
