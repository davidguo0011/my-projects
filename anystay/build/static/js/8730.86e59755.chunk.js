"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6d60917c-db41-5ce8-a98e-293d44ddf215")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[8730],{9138:(e,i,n)=>{n.d(i,{A:()=>a});var t=n(2119),o=n(4936);const s=t.Ay.span`
    width: 28px;
    height: 28px;
    border: 5px solid ${o.J2.Grey3.color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${t.i7`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`} 1s linear infinite;
`;var r=n(579);function a(e){return(0,r.jsx)(s,{...e})}},2945:(e,i,n)=>{n.d(i,{Xy:()=>s,Yw:()=>o,mE:()=>t});const t="\n  subscription onUpdateConversationByMessageOwnerID($messageownerID: ID!) {\n    onUpdateConversationByMessageOwnerID(messageownerID: $messageownerID) {\n      id\n      owners\n      bookingrequestID\n      listingmodelID\n      messageownerID\n      userhostmodelID\n      status\n      guestSeen\n      hostSeen\n      updatedAt\n      MessageModels(limit: 10, sortDirection: DESC) {\n        items {\n          updatedAt\n          id\n          createdAt\n          conversationmodelID\n          body\n          author\n        }\n      }\n    }\n  }\n",o="\n  subscription onUpdateConversationByUserHostModelID($userhostmodelID: ID!) {\n    onUpdateConversationByUserHostModelID(userhostmodelID: $userhostmodelID) {\n      id\n      owners\n      bookingrequestID\n      listingmodelID\n      messageownerID\n      userhostmodelID\n      status\n      guestSeen\n      hostSeen\n      updatedAt\n      MessageModels(limit: 10, sortDirection: DESC) {\n        items {\n          updatedAt\n          id\n          createdAt\n          conversationmodelID\n          body\n          author\n        }\n      }\n    }\n  }\n",s="\n  subscription onMessageByConversationModelID($conversationmodelID: ID!) {\n    onMessageByConversationModelID(conversationmodelID: $conversationmodelID) {\n      id\n      owners\n      isNote\n      isTimestamp\n      guestNoteBody\n      hostNoteBody\n      conversationmodelID\n      author\n      body\n    }\n  }\n"},7986:(e,i,n)=>{n.d(i,{Bw:()=>B,CD:()=>y,D9:()=>fe,Du:()=>de,E4:()=>Y,FO:()=>j,FQ:()=>le,FV:()=>z,G_:()=>Z,Gl:()=>c,Hb:()=>T,Hm:()=>D,Hq:()=>W,Ip:()=>re,JB:()=>H,Jb:()=>we,Ly:()=>ee,M2:()=>_,Mq:()=>N,NG:()=>J,Nw:()=>C,Ov:()=>S,Rc:()=>X,Ss:()=>se,T:()=>ge,VS:()=>P,Vv:()=>I,W7:()=>L,WG:()=>m,XM:()=>A,Y6:()=>ue,Yy:()=>d,Z1:()=>te,_m:()=>U,_o:()=>G,av:()=>F,bM:()=>f,cQ:()=>x,cT:()=>oe,cx:()=>Ae,f7:()=>ye,f9:()=>r,ff:()=>q,ft:()=>l,g5:()=>M,gT:()=>k,hA:()=>$,hY:()=>pe,jM:()=>ie,kL:()=>u,kl:()=>p,m4:()=>ce,mH:()=>be,mU:()=>$e,mX:()=>_e,nM:()=>ne,p1:()=>O,p8:()=>V,pI:()=>me,pM:()=>a,pb:()=>R,ps:()=>ve,qR:()=>b,qj:()=>w,rc:()=>v,sX:()=>he,tL:()=>g,v:()=>ae,wt:()=>xe,xM:()=>Q,xU:()=>ze,yC:()=>h,yk:()=>Ge,yt:()=>K,zW:()=>E});var t=n(2119),o=n(5475),s=n(4936);const r=t.Ay.div`
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60px auto 1fr;

    @media (min-width: 768px) {
        grid-template-columns: 289px 1fr;
        grid-template-rows: auto auto 1fr;
        margin-top: 80px;
        max-height: calc(100vh - 80px);
        height: calc(100vh - 80px);
    }

    @media (min-width: 1280px) {
        grid-template-columns: 368px 1fr 368px;
    }
`,a=t.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`,d=t.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`,g=t.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    height: 60px;
    margin: 0 24px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`,l=(t.Ay.button`
    height: 16px;
    padding: 0;
    background: none;
    border: none;
`,t.Ay.div`
    display: none;
    overflow: hidden;
    //disable scroll bar
    ::-webkit-scrollbar {
        display: none;
    }
    position: relative;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media (min-width: 1280px) {
        grid-row: 1/4;
        grid-column: 3/4;
        height: 100%;
        width: 100%;
        border-left: 1px solid ${s.J2.Grey2.color};
        padding: 0px 24px;
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
`),h=t.Ay.p`
    margin-left: 16px;
    font-size: ${s.$G.sans_500_semi.fontSize};
    line-height: ${s.$G.sans_500_semi.lineHeight};
    font-weight: ${s.$G.sans_500_semi.fontWeight};
`,p=(t.Ay.img`
    width: 16px;
    height: 16px;
    padding: 0;
`,t.Ay.p`
    width: 100%;
    margin: 0;
    margin-top: 8px;
    border-radius: ${s.Qk.radius_100.borderRadius};
    font-size: ${s.$G.sans_200_semi.fontSize};
    line-height: ${s.$G.sans_200_semi.lineHeight};
    font-weight: ${s.$G.sans_200_semi.fontWeight};
    color: ${s.J2.Grey.color};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_300_semi.fontSize};
    }
`),c=t.Ay.p`
    font-size: ${s.$G.sans_200_semi.fontSize};
    line-height: ${s.$G.sans_200_semi.lineHeight};
    font-weight: ${s.$G.sans_200_semi.fontWeight};
    color: ${s.J2.Grey.color};
    text-align: center;
    margin: ${s.dB.spacing_400.margin} auto ${s.dB.spacing_200.margin};

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_300_semi.fontSize};
        line-height: ${s.$G.sans_300_semi.lineHeight};
    }
`,$=t.Ay.div`
    grid-row: 3/4;
    grid-column: 1/2;
    width: 100%;
    max-height: calc(100% - 142px);
    overflow-y: scroll !important;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 768px) {
        grid-column: 2/3;
        margin: 0 auto;
    }

    @media (min-width: 1280px) {
        max-height: calc(100% - 110px);
        max-width: 704px;
    }
    //disable scroll bar for both window and mac
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`,m=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    padding: 14px 16px;
    border-radius: ${s.Qk.radius_24.borderRadius};
    background: ${s.J2.Grey4.color};
    margin: 0;
    margin-top: 4px;
    overflow-wrap: anywhere;
    max-width: calc(100% - 44px);
    width: fit-content;

    @media (min-width: 768px) {
        border-radius: 25px;
        padding: 14px 20px;
    }
`,f=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    padding: 14px 16px;
    border-radius: ${s.Qk.radius_24.borderRadius};
    background: ${s.J2.Grey5.color};
    margin: 0;
    margin-top: ${e=>e.isSameAuthor?"4px":"24px"};
    overflow-wrap: anywhere;
    max-width: calc(100% - 44px);
    width: fit-content;

    @media (min-width: 768px) {
        border-radius: 25px;
        padding: 14px 20px;
    }
`,x=t.Ay.div`
    width: 100%;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-bottom: 16px;
`,_=t.Ay.div`
    grid-row: 3/4;
    grid-column: 1/2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    padding: 0 24px;
    padding-bottom: 16px;
    position: fixed;
    bottom: 0;
    background-color: white;

    @media (min-width: 768px) {
        position: unset;
        margin: 0 auto;
        grid-column: 2/3;
        padding-bottom: 8px;
        max-width: 704px;
    }
`,u=t.Ay.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 28px;
    height: 28px;
    margin-left: 12px;
`,y=t.Ay.img`
    width: 28px;
    height: 28px;
`,b=t.Ay.input`
    background: none;
    font-size: ${s.$G.sans_400.fontSize};
    line-height: ${s.$G.sans_400.lineHeight};
    font-weight: ${s.$G.sans_400.fontWeight};
    color: ${s.J2.Grey.color};
    outline: none;
    width: 100%;
    height: 40px;
    border-radius: ${s.Qk.radius_100.borderRadius};
    border: 1px solid ${s.J2.Grey1.color};
    padding: 0 16px;
`,w=(t.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    gap: ${s.dB.spacing_300.gap};
    grid-row: 2/3;
    grid-column: 1/2;
    margin: 0 24px;
    border-bottom: 1px solid ${s.J2.Grey2.color};
`,t.Ay.img`
    width: 50px;
    height: 50px;
    border-radius: ${s.Qk.radius_8.borderRadius};
    object-fit: cover;
    margin: ${s.dB.spacing_300.margin} 0;
`,t.Ay.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${s.dB.spacing_300.margin} 0;
`,t.Ay.p`
    margin: 0;
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
`,t.Ay.button`
    height: 66px;
    display: flex;
    background: none;
    text-align: left;
    padding: ${s.dB.spacing_250.padding};
    width: calc(100% - 48px);
    margin: 0 auto 24px;
    gap: ${s.dB.spacing_250.gap};
    border-radius: ${s.Qk.radius_12.borderRadius};
    border: 1px solid ${s.J2.Grey5.color};
    box-shadow: ${s.E_.shadow_100.boxShadow};

    @media (min-width: 768px) {
        display: none;
    }
`),G=t.Ay.img`
    width: 42px;
    height: 42px;
    border-radius: ${s.Qk.radius_8.borderRadius};
    object-fit: cover;
`,A=t.Ay.div`
    display: flex;
    flex-direction: column;
`,z=t.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    margin: 0;
    margin-bottom: 4px;
    white-space: nowrap;
`,v=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    font-weight: ${s.$G.sans_300.fontWeight};
    color: ${e=>e.confirmed?s.J2.Black.color:s.J2.Yellow.color};
    margin: 0;
`,k=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${s.J2.Grey.color};
    margin: 0;
`,S=t.Ay.div`
    padding: ${s.dB.spacing_400.padding};
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    grid-column: 2/3;
    grid-row: 1/2;
    align-items: center;
    @media (max-width: 767px) {
        display: none;
    }
`,J=t.Ay.a`
    width: 32px;
    height: 32px;
    border-radius: ${s.Qk.radius_100.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: ${s.J2.Grey5.color};
    }
`,W=t.Ay.a`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`,H=t.Ay.img``,D=t.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    margin: 0;
`,B=t.Ay.div`
    height: 32px;
    padding: 0 12px;
    background-color: ${s.J2.White.color};
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: ${s.Qk.radius_8.borderRadius};
    box-shadow: ${s.E_.shadow_100.boxShadow};
`,I=t.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    margin: 0;
`,j=t.Ay.div`
    grid-column: 1/2;
    grid-row: 1/4;
    border-right: 1px solid ${s.J2.Grey2.color};
    padding: ${s.dB.spacing_400.padding} ${s.dB.spacing_250.padding};
    overflow: scroll;

    //hide scroll bar for window
    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media (max-width: 767px) {
        display: none;
    }
`,M=t.Ay.p`
    font-size: ${s.$G.sans_800_semi.fontSize};
    line-height: ${s.$G.sans_800_semi.lineHeight};
    font-weight: ${s.$G.sans_800_semi.fontWeight};
    color: ${s.J2.Black.color};
    margin-bottom: 16px;
    margin-left: 12px;
`,O=(0,t.Ay)(o.N_)`
    width: 100%;
    border-radius: 9px;
    background: ${e=>e.selected?`${s.J2.Grey4.color} !important`:"none"};
    // order: ${e=>e.selected?"-1":"unset"};
    display: flex;
    text-decoration: none;
    justify-content: center;
    gap: ${s.dB.spacing_300.gap};
    padding: ${s.dB.spacing_300.padding} ${s.dB.spacing_250.padding};

    &:hover {
        background: ${s.J2.Grey5.color};
    }
`,R=t.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,Q=(t.Ay.button`
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 24px;
`,t.Ay.img`
    height: 56px;
    width: 56px;
    border-radius: ${s.Qk.radius_8.borderRadius};
`),C=t.Ay.img`
    height: 56px;
    width: 56px;
    border-radius: 50%;
`,E=t.Ay.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
`,N=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,q=t.Ay.p`
    font-size: ${s.$G.sans_200.fontSize};
    line-height: ${s.$G.sans_200.lineHeight};
    font-weight: ${s.$G.sans_200.fontWeight};
    color: ${s.J2.Grey.color};
    margin: 0;
`,U=t.Ay.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 1280px) {
        display: none;
    }
`,F=(t.Ay.a`
    height: 48px;
    border-radius: 9px;
    width: calc(50% - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s.J2.Red.color};
    font-size: ${s.Ox.sans_button_200.fontSize};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    color: ${s.J2.White.color};
    text-decoration: none;
    border: none;
`,t.Ay.div`
    padding-bottom: 24px;
`),T=(0,t.Ay)(o.N_)`
    height: 48px;
    border-radius: 9px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s.mh.Red.background};
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    color: ${s.J2.White.color};
    text-decoration: none;
    border: none;
`,Y=(0,t.Ay)(o.N_)`
    min-height: 48px;
    border-radius: 9px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s.mh.Red.background};
    font-size: ${s.Ox.sans_button_200.fontSize};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    color: ${s.J2.White.color};
    text-decoration: none;
    border: none;
`,L=(t.Ay.button`
    min-height: 48px;
    border-radius: 9px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s.J2.Red.color};
    font-size: ${s.Ox.sans_button_200.fontSize};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    color: ${s.J2.White.color};
    text-decoration: none;
    border: none;
`,t.Ay.img`
    width: calc(100% + 48px);
    aspect-ratio: 4/3;
    object-fit: cover;
    margin-top: -24px;
    margin-left: -24px;
`),V=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${s.J2.Grey.color};
    margin: 0;
    margin-bottom: 24px;
`,X=t.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    margin: 0;
    margin-top: 16px;
    margin-bottom: 8px;
    max-width: 100%;
    word-wrap: break-word;
`,P=t.Ay.div`
    display: grid;
    grid-template-columns: 50% 50%;
    border-top: 1px solid ${s.J2.Grey2.color};
    border-bottom: 1px solid ${s.J2.Grey2.color};
    width: 100%;
    padding: ${s.dB.spacing_400.padding} 0;
`,Z=t.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    color: ${s.J2.Black.color};
    margin: 0;
`,K=t.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    color: ${s.J2.Black.color};
    margin: 0;
    margin-top: 8px;
`,ee=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${s.J2.Grey.color};
    margin: 0;
    margin-top: 8px;
`,ie=t.Ay.div`
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: flex-end;
    align-self: center;
    width: 1px;
    height: 32px;
    background: ${s.J2.Grey2.color};
`,ne=t.Ay.div`
    padding: ${s.dB.spacing_400.padding} 0;
    border-bottom: 1px solid ${s.J2.Grey2.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,te=t.Ay.div`
    background: ${s.J2.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);
    margin-left: -24px;
    width: calc(100% + 48px);
    min-height: 8px;
`,oe=(0,t.Ay)(o.N_)`
    height: 32px;
    border-radius: ${s.Qk.radius_8.borderRadius};
    /* background: ${s.mh.Red.background}; */
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${s.J2.Black.color};
    text-decoration: underline;
`,se=t.Ay.div`
    height: 32px;
    border-radius: ${s.Qk.radius_8.borderRadius};
    /* background: ${s.J2.Grey1.color}; */
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${s.J2.Grey.color};
    text-decoration: underline;
`,re=t.Ay.button`
    height: 32px;
    border-radius: ${s.Qk.radius_8.borderRadius};
    background: none;
    font-size: ${s.Ox.sans_button_200.fontSize};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${s.J2.Black.color};
    text-decoration: underline;
    border: none;
`,ae=t.Ay.button`
    border: none;
    background: none;
    font-size: ${s.Ox.sans_button_200.fontSize};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    padding: 0;
    cursor: pointer;
    text-decoration: underline;
`,de=t.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    width: 100%;
    margin: 0;
    margin-top: 32px;
`,ge=t.Ay.div`
    padding: ${s.dB.spacing_500.padding} 0;
    border-bottom: 1px solid ${s.J2.Grey2.color};
    font-size: ${s.so.sans_text_300.fontSize};
    font-weight: ${s.so.sans_text_300.fontWeight};
    line-height: ${s.so.sans_text_300.lineHeight};
    width: 100%;
    margin: 0;

    strong {
        font-weight: ${s.$G.sans_400_semi.fontWeight};
    }
`,le=t.Ay.a`
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    margin: 0;
    margin-top: 20px;
    padding-bottom: 48px;
    text-decoration: underline;
    width: fit-content;
    cursor: pointer;
`,he=t.Ay.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    width: 100%;
`,pe=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    margin: 0;

    strong {
        font-weight: ${s.$G.sans_400_semi.fontWeight};
    }
`,ce=(t.Ay.div`
    width: 100%;
    height: 1px;
    background: ${s.J2.Grey2.color};
    margin-top: 9px;
    margin-bottom: 21px;
`,t.Ay.div`
    display: flex;
    padding-bottom: 32px;
`),$e=t.Ay.div`
    height: 100px;
    width: 80px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
`,me=t.Ay.img`
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 1/2;
`,fe=(t.Ay.div`
    position: relative;
    height: 33px;
    width: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-end;
    border-radius: 9px;
    background: ${s.J2.White.color};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
`,t.Ay.div`
    padding-left: 16px;
    display: flex;
    flex-direction: column;
`),xe=t.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    color: ${s.J2.Black.color};
    margin: 0;
    margin-bottom: 4px;
`,_e=t.Ay.p`
    font-size: ${s.$G.sans_500_semi.fontSize};
    font-weight: ${s.$G.sans_500_semi.fontWeight};
    line-height: ${s.$G.sans_500_semi.lineHeight};
    color: ${s.J2.Black.color};
    margin: 0;
    margin-bottom: 4px;
`,ue=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${s.J2.Black.color};
    text-decoration: underline;
    margin: 0;
    margin-top: 4px;
    word-break: break-all;
`,ye=t.Ay.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${s.dB.spacing_500.padding} 0;
    border-bottom: 1px solid ${s.J2.Grey2.color};
`,be=t.Ay.p`
    margin: 0;
    font-size: ${s.$G.sans_400.fontSize};
    line-height: ${s.$G.sans_400.lineHeight};
    font-weight: ${s.$G.sans_400.fontWeight};
`,we=t.Ay.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    top: 12px;
`,Ge=(0,t.Ay)(o.N_)`
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    margin: 0;
    text-decoration: underline;
`,Ae=(t.Ay.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
`,t.Ay.button`
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 0;
`),ze=t.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    color: ${s.J2.Grey1.color};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    margin: 0 auto;
    margin-top: 192px;
    margin-bottom: 12px;
    text-align: center;
`,ve=t.Ay.p`
    font-size: ${s.$G.sans_500.fontSize};
    line-height: ${s.$G.sans_500.lineHeight};
    color: ${s.J2.Grey1.color};
    font-weight: ${s.$G.sans_500.fontWeight};
    margin: 0 auto;
    max-width: 199px;
    text-align: center;
`;t.Ay.div`
    height: 1px;
    width: 100%;
    background: ${s.J2.Grey2.color};
    margin-bottom: 32px;
    margin-top: 32px;
`},6879:(e,i,n)=>{n.d(i,{A:()=>t});const t=(e,i)=>{const n=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${e}`,edits:{resize:{width:i,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(n)}`}},6546:(e,i,n)=>{n.d(i,{D:()=>r});var t=n(8545),o=n(336),s=n(3234),r=function(e,i,n){return void 0===i&&(i={}),{query:e,variables:i,authToken:n}},a=new(function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return(0,t.C6)(i,e),i.prototype.getModuleName=function(){return"GraphQLAPI"},i.prototype.graphql=function(i,n){return e.prototype.graphql.call(this,i,n)},i}(s.Vq))(null);o.H.register(a)}}]);
//# sourceMappingURL=8730.86e59755.chunk.js.map
//# debugId=6d60917c-db41-5ce8-a98e-293d44ddf215
