"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="49f31a81-9e40-538b-b934-69a020043a65")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[1080],{3212:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(2119),a=n(4936);const o=i.Ay.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${a.J2.Grey1.color};
    box-shadow:
        22px 0 ${a.J2.Grey1.color},
        -22px 0 ${a.J2.Grey1.color};
    position: relative;
    animation: ${i.i7`
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
`;var s=n(579);const r=function(e){return(0,s.jsx)(o,{...e})}},1080:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var i=n(5043),a=n(7426),o=n(5762),s=n(7445),r=n(9856),d=n(2284),c=n(831),l=n(470);const h=(0,c.selector)({key:"userSelector",get:e=>{let{get:t}=e;return t(l.D)},set:(e,t)=>{let{set:n}=e;t instanceof c.DefaultValue&&n(l.D,t)}});var p=n(9380),g=n.n(p),x=n(1372),u=n(579);const f=e=>{let{popupName:t,deactivatePopupCards:n,updateCodeDeliveryDetails:a,codeDeliveryDetails:l}=e;const p=(0,r.A)("resetPassword"===t,n),[f,$]=(0,c.useRecoilState)(h),[y,m]=(0,i.useState)(!1),[w,_]=(0,i.useState)(!1),[b,v]=(0,i.useState)(""),[A,j]=(0,i.useState)(!1),[G,S]=(0,i.useState)(""),[z,k]=(0,i.useState)(!0),[C,W]=(0,i.useState)(!1),[H,B]=(0,d.A)(60),J=(0,i.useRef)(!0),P=(0,i.useCallback)((async()=>{z&&f&&(k(!1),await s.N.forgotPassword(f.username).then((e=>{a(e.CodeDeliveryDetails)})).catch((e=>{"LimitExceededException"===e.code&&_(!0),console.log(e)})),B(!0),setTimeout((()=>{k(!0)}),6e4))}),[B,z,a,f]);(0,i.useEffect)((()=>{"resetPassword"===t&&z&&J.current?(P(),J.current=!1):"resetPassword"!==t&&z&&(J.current=!0)}),[z,P,t]);if("resetPassword"!==t)return null;return(0,u.jsx)(x.A,{ref:p,backBtnType:"Arrow",closePopup:n,handleSave:async()=>{W(!0),await(async()=>{G.length<8?j(!0):f&&await s.N.forgotPasswordSubmit(f.username,b,G).then((e=>{console.log("successfully changed password"),n()})).catch((e=>{"CodeMismatchException"===e.code&&m(!0),console.log(e)}))})(),W(!1)},disable:!b||6!==b.length||""===G||C,isContinueBtnLoading:C,btnText:"Save",cancelBtnText:z?"Resend code?":`Try again in ${H}s`,cancelPopup:P,children:(0,u.jsxs)(o.g7,{children:[(0,u.jsx)(o.e0,{children:"Reset password"}),(0,u.jsx)(o.Ii,{children:"Never share your password with anyone."}),(0,u.jsx)(o.Q0,{mfaInvalid:y,children:(0,u.jsx)(g(),{value:b,length:6,placeholder:"",validChars:"0-9",autoFocus:!0,onChange:e=>{m(!1),v(e)},classNames:{container:"verification-container",character:"verification-character",characterInactive:"verification-character--inactive",characterSelected:"verification-character--selected"}})}),(0,u.jsx)(o.ew,{mfaInvalid:y||w,children:w?"Reset attempts exceeded, please try again later":y?"You have entered the wrong code, please try again":`6 digit code sent to ${l?l.Destination:""}`}),(0,u.jsx)(o.O3,{type:"password",value:G,passwordInvalid:A,onChange:e=>{S(e.target.value),j(!1)},placeholder:"Enter your new password"}),(0,u.jsx)(o.ew,{mfaInvalid:A||w,children:w?"Reset attempts exceeded, please try again later":A?"You must enter a password with at least 8 chars":"New password"})]})})};function $(e){let{activateCard:t,deactivatePopupCards:n}=e;const a=(0,r.A)(!0,n),[d,c]=(0,i.useState)(!1),[l,h]=(0,i.useState)(""),[p,g]=(0,i.useState)(""),[f,$]=(0,i.useState)(!1),[y,m]=(0,i.useState)(!1),[w,_]=(0,i.useState)(""),[b,v]=(0,i.useState)(!1),[A,j]=(0,i.useState)("");return(0,u.jsx)(x.A,{ref:a,backBtnType:"Arrow",closePopup:n,handleSave:async()=>{$(!0),await(async(e,t)=>{let i=!0;t||(m(!0),_("New password cannot be empty"),i=!1),t.length<8&&(m(!0),_("8 characters minimum"),i=!1),0===e.length&&(v(!0),j("Current password cannot be empty"),i=!1),i&&await s.N.currentAuthenticatedUser().then((n=>s.N.changePassword(n,e,t))).then((e=>{n()})).catch((e=>{"NotAuthorizedException"===e.code?(v(!0),j("Current password is invalid")):"LimitExceededException"===e.code&&c(!0),$(!1)}))})(l,p),$(!1)},disable:f,isContinueBtnLoading:f,children:(0,u.jsxs)(o.g7,{children:[(0,u.jsx)(o.e0,{children:"Reset password"}),(0,u.jsx)(o.Ii,{children:"Never share your password with anyone."}),(0,u.jsx)(o.O3,{type:"password",passwordInvalid:b,value:l,onChange:e=>{h(e.target.value),v(!1)},placeholder:"Current password"}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[d?(0,u.jsx)(o.Qp,{children:"Reset attempts exceeded"}):b?(0,u.jsx)(o.Qp,{children:A}):(0,u.jsx)(o.Wi,{children:"Current password"}),!d]}),(0,u.jsx)(o.O3,{type:"password",passwordInvalid:y,value:p,onChange:e=>{g(e.target.value),m(!1),_("")},placeholder:"New password"}),y?(0,u.jsx)(o.Qp,{children:w}):(0,u.jsx)(o.Wi,{children:"New password"})]})})}var y=n(3216),m=n(6250);function w(e){let{deactivatePopupCards:t,accessToken:n}=e;const s=(0,r.A)(!0,t),[d,c]=(0,i.useState)(!1),l=(0,y.Zp)();return(0,u.jsx)(x.A,{ref:s,backBtnType:"Arrow",closePopup:t,handleSave:async()=>{c(!0),await(async()=>{try{(await(0,a.p)("del","dev-anystay-user","user/deactivate",{headers:{Authorization:n}})).success&&(l("/"),(0,m.y)())}catch(e){return void console.error(e)}})(),c(!1)},btnText:"Deactivate",btnColor:"red",disable:d,isContinueBtnLoading:d,children:(0,u.jsxs)(o.g7,{children:[(0,u.jsx)(o.x7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Alert icon"}),(0,u.jsx)(o.r$,{children:"You're about to permanently deactivate your account"}),(0,u.jsx)(o.lG,{children:"You won't be able to recover it"})]})})}function _(e){let{deactivatePopupCards:t}=e;const n=(0,r.A)(!0,t);return(0,u.jsx)(x.A,{ref:n,backBtnType:"Arrow",closePopup:t,handleSave:t,btnText:"Go back",children:(0,u.jsxs)(o.g7,{children:[(0,u.jsx)(o.x7,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Alert icon"}),(0,u.jsx)(o.r$,{children:"You're unable to deactivate your account"}),(0,u.jsx)(o.lG,{children:"Deactivate listings and cancel all bookings to continue."})]})})}var b=n(3212),v=n(9082);const A=e=>{let{activateCard:t,deactivatePopupCards:n,hostawayKey:s,hostawaySecret:d}=e;const[l,h]=(0,i.useState)(s),[p,g]=(0,i.useState)(d),[f,$]=(0,i.useState)(!1),[y,m]=(0,i.useState)(!1),[w,_]=(0,c.useRecoilState)(v.H),b=(0,r.A)(!0,n);return(0,u.jsx)(x.A,{ref:b,backBtnType:"Arrow",closePopup:n,handleSave:async()=>{m(!0);try{if(!l||!p)throw new Error;if(!(await(0,a.p)("post","dev-anystay-hostaway","user/host/update-credentials",{headers:{Authorization:w},body:{hostawayKey:l,hostawaySecret:p}})).success)throw new Error;if(!(await(0,a.p)("get","dev-anystay-hostaway","listings/sync",{headers:{Authorization:w}})).success)throw new Error;m(!1),n()}catch(e){$(!0),m(!1)}},disable:y,isContinueBtnLoading:y,btnText:"Save",cancelBtnText:"Remove",cancelPopup:()=>{t("confirmDisconnectPopup")},children:(0,u.jsxs)(o.g7,{style:{alignItems:"center"},children:[(0,u.jsx)(o.e8,{src:"https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg",alt:"hostaway logo"}),(0,u.jsx)(o.vH,{children:"Edit your Hostaway integration"}),(0,u.jsxs)(o.tl,{children:[(0,u.jsx)(o.Wt,{children:(0,u.jsx)(o.Vl,{value:l,onChange:e=>{$(!1);const t=e.target.value.replace(/\D/g,"");h(t||"")},placeholder:"Account ID"})}),(0,u.jsx)(o.Wt,{children:(0,u.jsx)(o.Vl,{value:p,onChange:e=>{$(!1),g(e.target.value)},placeholder:"Hostaway API key"})})]}),(0,u.jsx)(o.nl,{invalidKey:f,children:"Incorrect or expired key"})]})})};var j=n(1869),G=n(8306),S=n(2119),z=n(4936);const k=S.Ay.p`
    margin-top: 40px;
    font-size: ${z.$G.sans_800_bold.fontSize};
    line-height: ${z.$G.sans_800_bold.lineHeight};
    font-weight: ${z.$G.sans_800_bold.fontWeight};
    margin-bottom: 16px;
`,C=S.Ay.p`
    margin: 0;
    font-size: ${z.$G.sans_400.fontSize};
    line-height: ${z.$G.sans_400.lineHeight};
    max-width: 270px;
    font-weight: ${z.$G.sans_400.fontWeight};
    text-align: center;
`,W=(S.Ay.div`
    width: 100%;
`,S.Ay.img`
    width: 16px;
    height: 16px;
    cursor: pointer;
`,S.Ay.div`
    width: 90%;
    height: calc(100vh - 120px);
    background: ${z.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${z.E_.shadow_300.boxShadow};
    padding: ${z.dB.spacing_400.padding} ${z.dB.spacing_400.padding} ${z.dB.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        height: 600px;
        border-radius: 14px 14px 0 0;
        padding: ${z.dB.spacing_400.padding};
    }
`),H=(S.Ay.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
`,S.Ay.button`
    cursor: pointer;
    height: 48px;
    background-color: ${e=>"back"===e.buttonType?"transparent":z.J2.Red.color};
    border-radius: 9px;
    text-decoration: ${e=>"back"===e.buttonType?"underline":"none"};
    color: ${e=>"back"===e.buttonType?"black":"white"};
    border: none;
    width: ${e=>"back"===e.buttonType?"":"142px"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${z.Ox.sans_button_100.fontWeight};
    font-size: ${z.Ox.sans_button_100.fontSize};
    padding: 0 !important;

    @media (min-width: 768px) {
        width: ${e=>"back"===e.buttonType?"50px":"120px"};
        font-size: ${z.Ox.sans_button_200.fontSize};
    }
`,S.Ay.img`
    width: 80px;
    height: 80px;
`),B=e=>{let{titleText:t,subtitleText:n,closeModal:a,submitFunc:o,activateCard:s}=e;const d=(0,r.A)(!0,(()=>{c||s("handleConnectedService")})),[c,l]=(0,i.useState)(!1);return(0,u.jsx)(x.A,{ref:d,backBtnType:"Arrow",closePopup:()=>s("handleConnectedService"),handleSave:async()=>{l(!0),await o(),l(!1)},disable:c,isContinueBtnLoading:c,btnText:"Disconnect",children:(0,u.jsxs)(W,{children:[(0,u.jsx)(H,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Unavailable feature icon"}),(0,u.jsx)(k,{children:t}),(0,u.jsx)(C,{children:n})]})})};var J=n(1852);const P=()=>{const[e,t]=(0,c.useRecoilState)(j.e),[n,s]=(0,c.useRecoilState)(h),[r,d]=(0,c.useRecoilState)(v.H),l=(0,y.Zp)(),[p,g]=(0,i.useState)(""),[x,m]=(0,i.useState)(null),[S,z]=(0,i.useState)(!1),k=async()=>{g(""),document.body.style.overflow="unset"},C=e=>{g(e),document.body.style.overflow="hidden"},[W,H]=(0,i.useState)(""),[P,T]=(0,i.useState)(""),D=async()=>{try{const e=await(0,a.p)("get","dev-anystay-user","user/deactivate/check",{headers:{Authorization:r}});e.success&&(e.body.canDeactivate?C("deactivateAccount"):C("deactivateAccountFailed"))}catch(e){throw console.error(e),new Error("error checking deactivated account: ",e.message)}},O=(0,i.useCallback)((async()=>{try{const e=await(0,a.p)("get","dev-anystay-hostaway","hostaway/details",{headers:{Authorization:r}});e.success&&(H(e.body.hostawayKey),T(e.body.hostawaySecret)),console.log(e)}catch(e){console.log(e)}}),[r]);(0,i.useEffect)((()=>{O()}),[O]);return e?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(G.A,{title:"Security | Anystay"}),(0,u.jsxs)(o.Gs,{children:[(0,u.jsxs)(o.M$,{children:[(0,u.jsx)(J.A,{onClick:()=>{l(-1)},type:"Arrow",mobileTop:24,mobileLeft:24}),(0,u.jsx)(o.lW,{children:"Login & sharing"})]}),(0,u.jsxs)(o.DB,{children:[(0,u.jsxs)(o.oh,{children:[(0,u.jsx)(o.kU,{children:"Login"}),(0,u.jsx)(o.Bw,{children:(0,u.jsxs)(o.xV,{onClick:()=>C("changePassword"),children:[(0,u.jsxs)(o.Tr,{children:[(0,u.jsx)(o.Gd,{children:"Password"}),(0,u.jsx)(o.IL,{onClick:()=>C("changePassword"),children:"Reset"})]}),(0,u.jsx)(o.NQ,{children:"Never share your password!"})]})}),(0,u.jsx)(o.Bw,{children:(0,u.jsxs)(o.xV,{onClick:async()=>{S||(z(!0),await D(),z(!1))},children:[(0,u.jsxs)(o.Tr,{children:[(0,u.jsx)(o.Gd,{children:"Account"}),S?(0,u.jsx)(b.A,{}):(0,u.jsx)(o.IL,{onClick:async e=>{e.stopPropagation(),z(!0),await D(),z(!1)},children:"Deactivate"})]}),(0,u.jsx)(o.NQ,{children:"Your account is active"})]})}),(0,u.jsx)(o.kU,{children:"Connected services"}),(0,u.jsxs)(o.jS,{children:[W&&P&&(0,u.jsxs)(o.vg,{onClick:()=>C("handleConnectedService"),children:[(0,u.jsx)(o.wC,{src:"https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway.svg",alt:"hostaway logo"}),(0,u.jsx)(o.zO,{children:"Hostaway"})]}),!(W&&P)&&(0,u.jsxs)(o.r0,{children:[(0,u.jsx)(o.mD,{children:"No connected services"}),(0,u.jsx)(o.S0,{children:"Your third party connections will appear here"})]})]})]}),(0,u.jsxs)(o.s3,{children:[(0,u.jsx)(o.mt,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Profile.svg",alt:"Profile icon"}),(0,u.jsx)(o._q,{children:"Don't share your password with anyone, we will never ask for it."})]})]}),"changePassword"===p&&(0,u.jsx)($,{activateCard:C,deactivatePopupCards:k}),"resetPassword"===p&&(0,u.jsx)(f,{updateCodeDeliveryDetails:e=>m(e),popupName:p,deactivatePopupCards:k,codeDeliveryDetails:x}),"deactivateAccount"===p&&(0,u.jsx)(w,{accessToken:r,deactivatePopupCards:k}),"deactivateAccountFailed"===p&&(0,u.jsx)(_,{deactivatePopupCards:k}),"handleConnectedService"===p&&(0,u.jsx)(A,{deactivatePopupCards:k,activateCard:C,hostawayKey:W,hostawaySecret:P}),"confirmDisconnectPopup"===p&&(0,u.jsx)(B,{titleText:"Disconnect Hostaway?",subtitleText:"You will no longer be able to update your listings and calendar.",closeModal:()=>{k()},submitFunc:async()=>{try{const e=await(0,a.p)("del","dev-anystay-hostaway","hostaway/details",{headers:{Authorization:r}});e.success&&(H(""),T(""),k()),console.log(e)}catch(e){console.log(e)}},activateCard:C})]})]}):null}},5762:(e,t,n)=>{n.d(t,{Bw:()=>m,DB:()=>l,Gd:()=>b,Gs:()=>r,IL:()=>j,Ii:()=>z,Kc:()=>Q,M$:()=>d,MZ:()=>D,NQ:()=>A,O3:()=>C,Q0:()=>Y,Qp:()=>W,Rc:()=>E,S0:()=>$,Tr:()=>_,Vl:()=>M,Vt:()=>R,Vw:()=>L,Wi:()=>k,Wt:()=>F,Ye:()=>O,_q:()=>B,cZ:()=>I,e0:()=>S,e8:()=>Z,ew:()=>U,g7:()=>G,jS:()=>y,jv:()=>N,kU:()=>h,lG:()=>T,lW:()=>c,mD:()=>f,mt:()=>H,nl:()=>X,oh:()=>s,pk:()=>V,r$:()=>P,r0:()=>u,s3:()=>v,tl:()=>K,vH:()=>q,vg:()=>p,wC:()=>g,x7:()=>J,xV:()=>w,zO:()=>x});var i=n(2119),a=n(5475),o=n(4936);const s=i.Ay.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,r=(i.Ay.button`
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`,i.Ay.div`
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
`),d=i.Ay.div`
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
`,c=i.Ay.p`
    font-size: ${o.$G.sans_900_semi.fontSize};
    font-weight: ${o.$G.sans_900_semi.fontWeight};

    line-height: ${o.$G.sans_900_semi.lineHeight};
    justify-self: center;
    text-align: center;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        justify-self: flex-start;
        font-size: ${o.$G.sans_1000_semi.fontSize};
        line-height: ${o.$G.sans_1000_semi.lineHeight};
        padding-left: 24px;
    }
`,l=(i.Ay.p`
    font-size: ${o.$G.sans_500.fontSize};
    font-weight: ${o.$G.sans_500.fontWeight};
    color: ${o.J2.Grey.color};
    line-height: ${o.$G.sans_500.lineHeight};
    margin: 0;

    @media (max-width: 767px) {
        display: none;
    }
`,i.Ay.div`
    display: flex;
`),h=(i.Ay.img`
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    transition: 0.3s;
    transform: rotate(0deg);

    @media (min-width: 768px) {
        display: none;
    }
`,i.Ay.p`
    font-size: ${o.$G.sans_700_semi.fontSize};
    line-height: ${o.$G.sans_700_semi.lineHeight};
    font-weight: ${o.$G.sans_700_semi.fontWeight};
    margin-top: 48px;
    &:first-of-type {
        margin-bottom: 36px;
    }
`),p=i.Ay.div`
    width: calc((100% - 16px) / 2);
    aspect-ratio: 1/1;
    border-radius: ${o.Qk.radius_12.borderRadius};
    box-shadow: ${o.E_.shadow_100.boxShadow};
    padding: ${o.dB.spacing_300.padding};
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
`,g=i.Ay.img`
    max-width: 150px;
    width: 85%;
    aspect-ratio: 3/2;
    object-fit: contain;
`,x=i.Ay.p`
    font-size: ${o.$G.sans_400_semi.fontSize};
    line-height: ${o.$G.sans_400_semi.lineHeight};
    font-weight: ${o.$G.sans_400_semi.fontWeight};

    position: absolute;
    bottom: 16px;
    left: 16px;
`,u=i.Ay.div`
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: ${o.dB.spacing_250.gap};
`,f=i.Ay.p`
    font-size: ${o.$G.sans_700_semi.fontSize};
    line-height: ${o.$G.sans_700_semi.lineHeight};
    font-weight: ${o.$G.sans_700_semi.fontWeight};
    color: ${o.J2.Grey1.color};
    margin-top: 48px;
`,$=i.Ay.p`
    font-size: ${o.$G.sans_500.fontSize};
    line-height: ${o.$G.sans_500.lineHeight};
    font-weight: ${o.$G.sans_500.fontWeight};
    color: ${o.J2.Grey1.color};
`,y=i.Ay.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${o.dB.spacing_400.gap};
`,m=i.Ay.div`
    width: calc(100% + 24px);
    margin-left: -12px;
    border-radius: 10px;
    padding: ${o.dB.spacing_250.padding};
    &:hover {
        background-color: ${o.J2.Grey5.color};
    }
`,w=i.Ay.div`
    height: fit-content;
    border-bottom: 1px solid ${o.J2.Grey2.color};
    display: flex;
    flex-direction: column;
    cursor: pointer;
`,_=i.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,b=i.Ay.p`
    font-size: ${o.$G.sans_400_semi.fontSize};
    font-weight: ${o.$G.sans_400_semi.fontWeight};

    line-height: ${o.$G.sans_400_semi.lineHeight};
    margin: 0;
`,v=i.Ay.div`
    height: fit-content;
    width: 363px;
    margin-left: 80px;
    margin-top: 40px;
    border-radius: ${o.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    padding: ${o.dB.spacing_400.padding};
    border: 1px solid ${o.J2.Grey2.color};

    @media (max-width: 1024px) {
        display: none;
    }
`,A=i.Ay.p`
    margin: ${o.dB.spacing_300.margin} 0 ${o.dB.spacing_250.margin};
    font-size: ${o.$G.sans_300.fontSize};
    line-height: ${o.$G.sans_300.lineHeight};
    color: ${o.J2.Grey.color};
    font-weight: ${o.$G.sans_300.fontWeight};
`,j=i.Ay.button`
    font-size: ${o.Ox.sans_button_100.fontSize};
    line-height: ${o.Ox.sans_button_100.lineHeight};
    font-weight: ${o.Ox.sans_button_100.fontWeight};
    text-decoration: underline;

    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
`,G=i.Ay.div`
    width: 100%;
    background: ${o.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: ${o.dB.spacing_400.padding} ${o.dB.spacing_400.padding} ${o.dB.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        padding: ${o.dB.spacing_400.padding};
    }
`,S=(i.Ay.div`
    width: calc(100% - 48px);
    margin: 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
    cursor: pointer;
`,i.Ay.p`
    font-size: ${o.$G.sans_500_semi.fontSize};
    line-height: ${o.$G.sans_500_semi.lineHeight};
    font-weight: ${o.$G.sans_500_semi.fontWeight};

    text-align: center;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-top: 8px;
`),z=(i.Ay.p`
    font-size: ${o.$G.sans_300_semi.fontSize};
    line-height: ${o.$G.sans_300_semi.lineHeight};
    font-weight: ${o.$G.sans_300_semi.fontWeight};

    text-align: center;
    margin: 0 auto;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: center;

    @media (min-width: 768px) {
        font-size: ${o.$G.sans_400_semi.fontSize};
        line-height: ${o.$G.sans_400_semi.lineHeight};
    }
`,i.Ay.p`
    font-size: ${o.$G.sans_300.fontSize};
    line-height: ${o.$G.sans_300.lineHeight};
    font-weight: ${o.$G.sans_300.fontWeight};

    text-align: center;
    margin: 0 auto;
    max-width: 200px;
    margin-bottom: 32px;
`),k=i.Ay.p`
    font-size: ${o.$G.sans_300.fontSize};
    line-height: ${o.$G.sans_300.lineHeight};
    font-weight: ${o.$G.sans_300.fontWeight};

    margin-top: 12px;
    margin-bottom: 24px;
`,C=i.Ay.input`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    background: none;
    border: 1px solid ${e=>e.passwordInvalid?o.J2.Red1.color:o.J2.Grey1.color};
    outline: none;
    padding-left: 16px;
    font-size: ${o.$G.sans_400.fontSize};
    line-height: ${o.$G.sans_400.lineHeight};
    font-weight: ${o.$G.sans_400.fontWeight};
`,W=i.Ay.p`
    font-size: ${o.$G.sans_300.fontSize};
    line-height: ${o.$G.sans_300.lineHeight};
    font-weight: ${o.$G.sans_300.fontWeight};
    color: ${o.J2.Red1.color};
    margin-top: 12px;
    margin-bottom: 24px;
`,H=(i.Ay.button`
    background: none;
    border: none;
    font-size: ${o.Ox.sans_button_100.fontSize};
    text-decoration: underline;
    font-weight: ${o.Ox.sans_button_100.fontWeight};

    line-height: ${o.Ox.sans_button_100.lineHeight};
    align-self: flex-start;
    margin-left: 24px;
    margin-top: 12px;
    cursor: pointer;

    @media (min-width: 768px) {
    }
`,i.Ay.button`
    height: 48px;
    width: 104px;
    border-radius: 9px;
    background: ${o.J2.Black.color};
    border: none;
    font-size: ${o.Ox.sans_button_200.fontSize};
    line-height: ${o.Ox.sans_button_200.lineHeight};
    font-weight: ${o.Ox.sans_button_200.fontWeight};
    color: ${o.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 104px;
        font-size: ${o.Ox.sans_button_200.fontSize};
        line-height: ${o.Ox.sans_button_200.lineHeight};
    }
`,i.Ay.img`
    height: 32px;
    width: 32px;
    object-fit: cover;
`),B=i.Ay.p`
    font-size: ${o.so.sans_text_300.fontSize};
    font-weight: ${o.so.sans_text_300.fontWeight};
    line-height: ${o.so.sans_text_300.lineHeight};

    margin-top: 24px;
    margin-bottom: 0;
`,J=i.Ay.img`
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
`,P=i.Ay.p`
    font-size: ${o.$G.sans_600_bold.fontSize};
    line-height: ${o.$G.sans_600_bold.lineHeight};
    font-weight: ${o.$G.sans_600_bold.fontWeight};

    margin: 0 auto;
    margin-bottom: 12px;
    text-align: center;
    max-width: 369px;
`,T=i.Ay.p`
    font-size: ${o.$G.sans_400.fontSize};
    line-height: ${o.$G.sans_400.lineHeight};
    font-weight: ${o.$G.sans_400.fontWeight};

    text-align: center;
    margin: 0 auto 96px;
    max-width: 245px;
`,D=((0,i.Ay)(a.N_)`
    background: none;
    padding: 0;
    border: none;
    height: 34px;
    display: flex;
    align-items: center;
    cursor: pointer;
`,i.Ay.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
    display: flex;
    align-items: center;
    margin-right: 24px;
`,i.Ay.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${o.J2.White.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${o.E_.shadow_300.boxShadow};
    z-index: 102;

    @media (min-width: 768px) {
        width: 560px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 14px;
        bottom: unset;
    }
`),O=i.Ay.button`
    background: none;
    padding: 0;
    margin: ${o.dB.spacing_400.margin};
    border: none;
    align-self: flex-start;
    margin-bottom: 0;
    cursor: pointer;
`,R=i.Ay.img`
    height: 16px;
    object-fit: cover;
`,I=i.Ay.img`
    margin-top: 24px;
    width: 64px;
    height: 64px;
    object-fit: cover;

    @media (min-width: 768px) {
        width: 80px;
        height: 80px;
    }
`,N=i.Ay.p`
    font-size: ${o.$G.sans_600_bold.fontSize};
    line-height: ${o.$G.sans_600_bold.lineHeight};
    font-weight: ${o.$G.sans_600_bold.fontWeight};

    margin: 0;
    margin-top: 48px;
`,E=i.Ay.p`
    font-size: ${o.$G.sans_300.fontSize};
    font-weight: ${o.$G.sans_300.fontWeight};
    line-height: ${o.$G.sans_300.lineHeight};

    text-align: center;
    margin: 0;
    margin-top: 12px;
    max-width: 200px;
`,L=i.Ay.input`
    height: 54px;
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: 32px;
    padding-left: 16px;
    border-radius: 9px;
    font-size: ${o.$G.sans_300.fontSize};
    line-height: ${o.$G.sans_300.lineHeight};
    font-weight: ${o.$G.sans_300.fontWeight};

    border: 1px solid ${o.J2.Grey1.color};

    ::placeholder {
        color: ${o.J2.Grey1.color} !important;
        font-size: ${o.$G.sans_300.fontSize};
        line-height: ${o.$G.sans_300.lineHeight};
        font-weight: ${o.$G.sans_300.fontWeight};
    }
`,Q=i.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: auto;
    padding: ${o.dB.spacing_300.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        padding: ${o.dB.spacing_400.padding} 0;
    }
`,V=i.Ay.button`
    background: none;
    border: none;
    padding: 0;
    font-size: ${o.Ox.sans_button_200.fontSize};
    line-height: ${o.Ox.sans_button_200.lineHeight};
    font-weight: ${o.Ox.sans_button_200.fontWeight};

    margin: 0;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${o.Ox.sans_button_300.fontSize};
        line-height: ${o.Ox.sans_button_300.lineHeight};
    }
`,Y=(i.Ay.button`
    background: ${o.J2.Black.color};
    border: none;
    padding: 0 32px;
    color: ${o.J2.White.color};
    border-radius: 9px;
    font-size: ${o.Ox.sans_button_200.fontSize};
    line-height: ${o.Ox.sans_button_200.lineHeight};
    font-weight: ${o.Ox.sans_button_200.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    cursor: pointer;
`,i.Ay.div`
    & .verification-container {
        ${e=>e.mfaInvalid?`border: 1px solid ${o.J2.Red1.color};`:null}
    }
`),U=i.Ay.p`
    text-align: left;
    width: 100%;
    font-size: ${o.$G.sans_200.fontSize};
    line-height: ${o.$G.sans_200.lineHeight};
    color: ${e=>e.mfaInvalid?o.J2.Red1.color:o.J2.Black.color};
    font-weight: ${o.$G.sans_200.fontWeight};
    margin-top: 12px;
    margin-bottom: 24px;
    span {
        color: ${o.J2.Black.color} !important;
    }
`,K=i.Ay.div`
    border-radius: 10px;
    border: 1px solid ${o.J2.Grey2.color};
    margin-bottom: 12px;
    width: 100%;
`,F=i.Ay.div`
    padding: ${o.dB.spacing_300.padding};
    border-bottom: 1px solid ${o.J2.Grey2.color};
    &:last-child {
        border-bottom: none;
    }
`,M=i.Ay.input`
    border: none;
    outline: none;
    font-size: ${o.$G.sans_400_med.fontSize};
    font-weight: ${o.$G.sans_400_med.fontWeight};
    line-height: ${o.$G.sans_400_med.lineHeight};

    width: 100%;
    &::placeholder {
        color: ${o.J2.Grey.color};
    }
`,Z=i.Ay.img`
    width: 147px;
    margin-top: 38px;
    margin-bottom: 46px;
    object-fit: contain;
`,q=i.Ay.p`
    font-size: ${o.$G.sans_700_semi.fontSize};
    font-weight: ${o.$G.sans_700_semi.fontWeight};
    line-height: ${o.$G.sans_700_semi.lineHeight};

    margin-bottom: 32px;
`,X=i.Ay.p`
    color: ${o.J2.Red.color};
    opacity: ${e=>e.invalidKey?"1":"0"};
    margin-right: auto;
    margin-bottom: 66px;
`}}]);
//# sourceMappingURL=1080.1d8826f4.chunk.js.map
//# debugId=49f31a81-9e40-538b-b934-69a020043a65
