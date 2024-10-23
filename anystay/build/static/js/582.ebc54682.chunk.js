"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3dcfc16d-55bd-510b-875b-1e349acbae8c")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[582],{1340:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(9697),s=i(1852),o=i(3832),r=i(4204),a=i(579);const d=e=>{let{...t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsxs)(o.LZ,{mobileHeight:t.mobileHeight,children:[(0,a.jsx)(s.A,{onClick:t.backBtnOnClick,type:t.backBtnType?t.backBtnType:"Close",desktopTop:32,desktopLeft:32,mobileLeft:24,mobileTop:24,disabled:!!t.backBtnDisabled&&t.backBtnDisabled}),t.noContentWrapper?(0,a.jsx)(a.Fragment,{children:t.children}):(0,a.jsx)(o.Gj,{children:t.children}),!t.noContentWrapper&&(0,a.jsxs)(o.HN,{children:[(0,a.jsx)(o.GO,{onClick:t.cancelBtnOnClick,disabled:!!t.cancelBtnDisabled&&t.cancelBtnDisabled,children:t.cancelBtnText?t.cancelBtnText:"Cancel"}),(0,a.jsx)(r.A,{background:t.continueBtnBgColor?t.continueBtnBgColor:"black",style:{width:"unset"},onClick:t.continueBtnOnClick,isLoading:!!t.continueBtnLoading&&t.continueBtnLoading,disabled:!!t.continueBtnDisabled&&t.continueBtnDisabled,children:t.continueBtnText?t.continueBtnText:"Save"})]})]})})}},582:(e,t,i)=>{i.r(t),i.d(t,{default:()=>We});var n=i(5043),s=i(2119),o=i(5475),r=i(4936);const a=s.Ay.div`
    width: calc(100% - 64px);
    margin: 0 32px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        margin: 0 auto;
        border-top: none;
        margin-top: 80px;
        min-height: calc(100vh - 80px);
        max-width: calc(100vw - 64px);
    }
    @media (min-width: 1024px) {
        max-width: 1024px;
    }
`,d=(0,s.Ay)(o.N_)`
    text-decoration: none;
    cursor: pointer;
`,l=s.Ay.h1`
    font-size: ${r.$G.sans_1000_semi.fontSize};
    line-height: ${r.$G.sans_1000_semi.lineHeight};
    font-weight: ${r.$G.sans_1000_semi.fontWeight};

    margin: 0;
`,c=s.Ay.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: ${r.dB.spacing_300.gap};

    @media (min-width: 768px) {
        width: 100%;
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`,h=s.Ay.div`
    width: 100%;
    min-height: 127px;
    border-radius: ${r.Qk.radius_12.borderRadius};
    box-shadow: ${r.E_.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    padding: ${r.dB.spacing_500.padding} ${r.dB.spacing_400.padding};
    position: relative;
`,g=s.Ay.img`
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 0;
`,x=s.Ay.div`
    margin-top: 16px;
    width: 100%;
    display: flex;
    align-items: center;
`,p=s.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    line-height: ${r.$G.sans_400_semi.lineHeight};

    margin: 0;
`,f=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
    margin: 0;
    margin-top: 8px;
`,m=s.Ay.button`
    width: 100%;
    height: 450px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://d292awxalydr86.cloudfront.net/Home+page/Upload+Listing+Cover.jpg");
    background-size: cover;
    border: none;
    cursor: pointer;
    text-align: left;
    margin-bottom: 48px;
    margin-top: 32px;
    border-radius: ${r.Qk.radius_12.borderRadius};
    background-position: center;
    padding: 0;

    // Hidden
    display: none;

    @media (min-width: 768px) {
        height: 320px;
        margin: 44px auto 64px;
    }
`,u=s.Ay.div`
    display: grid;
    height: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`,y=s.Ay.p`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-start;
    font-size: ${r.$G.sans_1000_bold.fontSize};
    font-weight: ${r.$G.sans_1000_bold.fontWeight};
    line-height: ${r.$G.sans_1000_bold.lineHeight};
    color: ${r.J2.White.color};
    margin: 0 24px;
    margin-top: 48px;
    position: relative;
    max-width: 240px;

    @media (min-width: 768px) {
        margin-left: 48px;
        margin-top: 48px;
        width: 260px;
    }
`,$=((0,s.Ay)(o.N_)`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-end;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.Ox.sans_button_100.fontSize};
    background: ${r.J2.White.color};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};

    border: none;
    text-decoration: none;
    border-radius: ${r.Qk.radius_100.borderRadius};
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-bottom: 32px;
    cursor: pointer;

    @media (min-width: 768px) {
        max-width: 300px;
        align-self: flex-end;
        margin-bottom: 64px;
        margin-right: 64px;
        justify-self: flex-end;
    }
`,s.Ay.div`
    display: flex;
    margin-top: 32px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-top: 48px;
        margin-bottom: 32px;
    }
`),_=s.Ay.button`
    font-size: ${r.Ox.sans_button_100.fontSize};
    /* line-height: ${r.Ox.sans_button_100.lineHeight}; */
    margin: 0 auto;
    margin-bottom: 24px;
    margin-top: 48px;
    height: 40px;

    font-weight: ${r.Ox.sans_button_100.fontWeight};
    border-radius: ${r.Qk.radius_100.borderRadius};
    cursor: pointer;
    background: none;
    border: none;
    padding: 0 24px;
    border: 1px solid ${r.J2.Grey1.color};

    @media (min-width: 768px) {
        margin-top: 64px;
        margin-bottom: 120px;
    }
`,w=s.Ay.div`
    width: 100%;
    background: ${r.J2.White.color};
    border-radius: 14px 14px 0 0;
    min-height: calc(100vh - 12px);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        width: 550px;
        max-height: 600px !important;
        height: 600px !important;
        min-height: unset !important;
        margin: auto auto 24px;
    }
`,j=s.Ay.img`
    height: 128px;
    width: 128px;
    border-radius: ${r.Qk.radius_12.borderRadius};
    border: 4px solid ${r.J2.White.color};
    box-shadow: ${r.E_.shadow_100.boxShadow};
    margin-bottom: 48px;

    margin-top: 64px;
    @media (max-width: 767px) {
        margin-top: 119px;
    }
`,b=s.Ay.p`
    font-size: ${r.$G.sans_1000_bold.fontSize};
    font-weight: ${r.$G.sans_1000_bold.fontWeight};
    line-height: ${r.$G.sans_1000_bold.lineHeight};

    margin-bottom: 12px;
    text-align: center;
    max-width: 270px;

    @media (min-width: 768px) {
    }
`,G=s.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};

    text-align: center;
    margin: 0;
    max-width: 270px;

    @media (min-width: 768px) {
        max-width: 320px;
    }
`,A=s.Ay.button`
    height: 48px;
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-top: auto;
    margin-bottom: 24px;
    border-radius: 9px;
    background-color: ${r.J2.Black.color};
    border: none;
    font-size: ${r.$G.sans_400_semi.fontSize};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    color: ${r.J2.White.color};
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 32px;
        margin-bottom: 32px;
        margin-top: auto;
    }
`,v=(0,s.Ay)(o.N_)`
    border-radius: ${r.Qk.radius_12.borderRadius};
    box-shadow: ${r.E_.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_200.gap};
    padding: ${r.dB.spacing_350.padding} ${r.dB.spacing_400.padding} ${r.dB.spacing_300.padding};
    background: ${r.J2.White.color};

    text-decoration: none;
`,k=s.Ay.p`
    font-size: ${r.$G.sans_200.fontSize};
    line-height: ${r.$G.sans_200.lineHeight};
    font-weight: ${r.$G.sans_200.fontWeight};
    margin: 0;
`,S=s.Ay.p`
    font-size: ${r.$G.sans_900_semi.fontSize};
    line-height: ${r.$G.sans_900_semi.lineHeight};
    font-weight: ${r.$G.sans_900_semi.fontWeight};
    margin: 0;
`,z=s.Ay.button`
    width: 100%;
    height: 20px;
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};

    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
    text-decoration: underline;
    margin-top: 48px;
    margin-bottom: 64px;
`;var B=i(8108),H=i(7013),M=i(1869),W=i(7607),C=i(831),R=i(3216),J=i(6250),P=i(8306),D=i(6138),N=i(6495);const O=s.Ay.div`
    width: 100%;
    padding: 0 24px;
    padding-bottom: 112px;
`,L=s.Ay.div`
    margin: ${e=>e.isGuestMode?"32px 0 48px":"36px 0 32px"};
    display: flex;
    justify-content: space-between;
    align-items: center;
`,E=(0,s.Ay)(o.N_)`
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
`,F=s.Ay.div`
    width: 24px;
    height: 24px;
    position: relative;
`,U=s.Ay.h1`
    font-size: ${r.$G.sans_900_semi.fontSize};
    line-height: ${r.$G.sans_900_semi.lineHeight};
    font-weight: ${r.$G.sans_900_semi.fontWeight};
`,T=s.Ay.div`
    display: flex;
    flex-direction: ${e=>e.isGuestMode?"column":"row"};
    align-items: ${e=>e.isGuestMode?"center":"flex-start"};
    gap: ${e=>e.isGuestMode?"24px":"16px"};
    ${e=>e.isGuestMode?"":"height: 96px"}
`,I=s.Ay.div`
    box-sizing: border-box;
    width: ${e=>e.isGuestMode?"128px":"96px"};
    height: ${e=>e.isGuestMode?"128px":"96px"};
    border-radius: 50%;
    border: ${e=>e.isGuestMode?`4px solid ${r.J2.White.color}`:"none"};
    box-shadow: ${r.E_.shadow_100.boxShadow};
`,Q=s.Ay.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,Z=s.Ay.h1`
    font-size: ${r.$G.sans_900_bold.fontSize};
    line-height: ${r.$G.sans_900_bold.lineHeight};
    font-weight: ${r.$G.sans_900_bold.fontWeight};
`,q=s.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_100.gap};
`,V=s.Ay.p`
    font-size: ${r.$G.sans_600_semi.fontSize};
    line-height: ${r.$G.sans_600_semi.lineHeight};
    font-weight: ${r.$G.sans_600_semi.fontWeight};
`,X=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
`,Y=s.Ay.div`
    display: flex;
    gap: ${r.dB.spacing_300.gap};
`,K=s.Ay.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${r.dB.spacing_100.gap};
`,ee=s.Ay.p`
    font-size: ${r.$G.sans_500_semi.fontSize};
    line-height: ${r.$G.sans_500_semi.lineHeight};
    font-weight: ${r.$G.sans_500_semi.fontWeight};
`,te=s.Ay.p`
    font-size: ${r.$G.sans_200.fontSize};
    line-height: ${r.$G.sans_200.lineHeight};
    font-weight: ${r.$G.sans_200.fontWeight};
    color: ${r.J2.Grey.color};
`,ie=s.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    font-weight: ${r.$G.sans_400.fontWeight};

    margin: ${r.dB.spacing_500.margin} 0;
`,ne=(0,s.Ay)(o.N_)`
    text-decoration: none;
`,se=s.Ay.div`
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    padding: ${r.dB.spacing_300.padding};
    border-radius: ${r.Qk.radius_12.borderRadius};
    box-shadow: ${r.E_.shadow_100.boxShadow};
`,oe=s.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,re=s.Ay.h1`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
`,ae=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
`,de=s.Ay.p`
    font-size: ${r.$G.sans_900_semi.fontSize};
    line-height: ${r.$G.sans_900_semi.lineHeight};
    font-weight: ${r.$G.sans_900_semi.fontWeight};

    margin-top: 8px;
`,le=s.Ay.div`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid ${r.J2.Grey2.color};
    border-radius: ${r.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 48px;
`,ce=s.Ay.img`
    width: 48px;
    height: 48px;
    margin-top: 32px;
`,he=s.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    text-align: center;
    width: 240px;
    margin-top: 24px;
`,ge=(0,s.Ay)(o.N_)`
    text-decoration: none;
    width: 100%;
    height: 48px;
    background-color: ${r.J2.Black.color};
    margin: ${r.dB.spacing_400.margin} 0 ${r.dB.spacing_300.margin} 0;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    color: ${r.J2.White.color};
`,xe=s.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_500.gap};
    margin-bottom: 48px;
`,pe=((0,s.Ay)(o.N_)`
    text-decoration: none;
`,s.Ay.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`),fe=s.Ay.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${r.dB.spacing_300.gap};
`,me=s.Ay.img`
    width: 24px;
    height: 24px;
`,ue=s.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    font-weight: ${r.$G.sans_400.fontWeight};
`,ye=s.Ay.img`
    width: 8px;
    height: 12px;
    transform: rotate(180deg);
`,$e=s.Ay.div`
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    margin-bottom: 16px;
`,_e=s.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
    margin-bottom: 32px;
`,we=s.Ay.div`
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
`,je=s.Ay.img`
    width: 100%;
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
`;var be=i(7426),Ge=i(9082),Ae=i(8069),ve=i(8411),ke=i(1340),Se=i(579);function ze(e){let{userHostModel:t,userModel:i,setSwitchModeCard:s}=e;const[o,r]=(0,n.useState)([]),[a,l]=(0,C.useRecoilState)(Ge.H),[c,h]=(0,n.useState)(0),[g,x]=(0,n.useState)(!1),p=(0,R.Zp)(),f=i.id,m=(0,n.useCallback)((async()=>{await(0,be.p)("get","dev-anystay-user",`user/guest/profile/${f}`).then((async e=>{r(e.body.userModel.ReviewGuestModel?e.body.userModel.ReviewGuestModel.items:[])})).catch((e=>{console.log("ERROR"),console.log(e)}))}),[f]),u=(0,n.useCallback)((async e=>{try{if(!t)return;let i=await(0,be.p)("post","dev-anystay-user","user/host/bookings",{headers:{Authorization:e},body:{userHostModelId:t.id,today:(new Date).toString()}});h(i.body.totalEarning)}catch(i){console.log(i)}}),[t]);return(0,n.useEffect)((()=>{m(),i&&!i.guestMode&&u(a)}),[m,a,u,i]),(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsxs)(O,{children:[(0,Se.jsx)(L,{isGuestMode:i.guestMode,children:i.guestMode?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)(E,{to:"/edit-profile",children:"Edit"}),(0,Se.jsx)(F,{onTouchEnd:()=>{x(!0)},children:(0,Se.jsx)(N.wl,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Notifications+icon.png",alt:"Any stay nofications"})})]}):(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)(U,{children:"Profile"}),(0,Se.jsx)(F,{onTouchEnd:()=>{x(!0)},children:(0,Se.jsx)(N.wl,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Notifications+icon.png",alt:"Any stay nofications"})})]})}),(0,Se.jsxs)(T,{isGuestMode:i.guestMode,children:[(0,Se.jsx)(I,{isGuestMode:i.guestMode,children:(0,Se.jsx)(je,{src:i.profilePicture?(0,Ae.A)(i.profilePicture,i.identityID,100):"https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png",alt:"profile pic"})}),i.guestMode?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)(Z,{children:i.firstName}),(0,Se.jsxs)(Y,{children:[(0,Se.jsxs)(K,{children:[(0,Se.jsx)(ee,{children:i.BookingRequestModels.items.length}),(0,Se.jsx)(te,{children:"Stays"})]}),(0,Se.jsxs)(K,{children:[(0,Se.jsx)(ee,{children:3*i.BookingRequestModels.items.length+1}),(0,Se.jsx)(te,{children:"Nights"})]}),(0,Se.jsxs)(K,{children:[(0,Se.jsx)(ee,{children:o.length}),(0,Se.jsx)(te,{children:"Reviews"})]})]})]}):(0,Se.jsxs)(Q,{children:[(0,Se.jsxs)(q,{children:[(0,Se.jsx)(V,{children:i.firstName}),(0,Se.jsx)(X,{children:"Host"})]}),(0,Se.jsx)(E,{to:"/edit-profile",children:"Edit profile"})]})]}),i.guestMode?(0,Se.jsx)(ie,{children:""===i.profileDescription||null===i.profileDescription?"Write a bio...":i.profileDescription}):(0,Se.jsx)(ne,{to:"/payouts",children:(0,Se.jsxs)(se,{children:[(0,Se.jsxs)(oe,{children:[(0,Se.jsx)(re,{children:"Next payout"}),(0,Se.jsx)(ae,{children:"Today"})]}),(0,Se.jsxs)(de,{children:["$",(c/100).toFixed(2)," AUD"]})]})}),(0,Se.jsxs)(le,{children:[(i.guestMode,(0,Se.jsx)(ce,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Referral.svg",alt:"invite a friend banner icon"})),(0,Se.jsx)(he,{children:i.guestMode?"Get 10% off your stay when you invite 5 or more friends":"Get 10% off your stay when you invite 5 or more hosts"}),(0,Se.jsx)(ge,{to:"/referral-page",children:i.guestMode?"Invite a friend":"Refer a friend"})]}),(0,Se.jsxs)(xe,{children:[(0,Se.jsx)(d,{to:"/edit-profile",children:(0,Se.jsxs)(pe,{children:[(0,Se.jsxs)(fe,{children:[(0,Se.jsx)(me,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Profile.svg",alt:"Edit profile icon"}),(0,Se.jsx)(ue,{children:"Your details"})]}),(0,Se.jsx)(ye,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"setting link right arrow"})]})}),(0,Se.jsx)(d,{to:"/security-settings",children:(0,Se.jsxs)(pe,{children:[(0,Se.jsxs)(fe,{children:[(0,Se.jsx)(me,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Login.svg",alt:"Login info icon"}),(0,Se.jsx)(ue,{children:"Login & sharing"})]}),(0,Se.jsx)(ye,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"setting link right arrow"})]})}),(0,Se.jsx)(d,{to:i?i.guestMode?"/payment-settings":"/payout-settings":"",children:(0,Se.jsxs)(pe,{children:[(0,Se.jsxs)(fe,{children:[(0,Se.jsx)(me,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/payments+and+payouts.svg",alt:"Payment info icon"}),(0,Se.jsx)(ue,{children:"Payments & payouts"})]}),(0,Se.jsx)(ye,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"setting link right arrow"})]})}),(0,Se.jsx)(d,{to:"/referral-page",children:(0,Se.jsxs)(pe,{children:[(0,Se.jsxs)(fe,{children:[(0,Se.jsx)(me,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Gift.svg",alt:"invite a friend icon"}),(0,Se.jsx)(N.IS,{style:{position:"absolute",left:"20px",bottom:"20px"}}),(0,Se.jsx)(ue,{children:"Invite a friend"})]}),(0,Se.jsx)(ye,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"setting link right arrow"})]})}),(0,Se.jsx)("a",{href:"https://help.anystay.com.au/en/",style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:(0,Se.jsxs)(pe,{children:[(0,Se.jsxs)(fe,{children:[(0,Se.jsx)(me,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Help+center.svg",alt:"help center icon"}),(0,Se.jsx)(ue,{children:"Help center"})]}),(0,Se.jsx)(ye,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"setting link right arrow"})]})}),(0,Se.jsx)("a",{href:"https://rvjc88mc1ia.typeform.com/to/VJ6eFIXJ",style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:(0,Se.jsxs)(pe,{children:[(0,Se.jsxs)(fe,{children:[(0,Se.jsx)(me,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Feedback.svg",alt:"feedback icon"}),(0,Se.jsx)(ue,{children:"Feedback"})]}),(0,Se.jsx)(ye,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"setting link right arrow"})]})})]}),i.guestMode?(0,Se.jsx)($e,{onClick:()=>{t&&t.ListingModels.items.length>0?p("/dashboard"):s(!0)},children:"Switch to hosting"}):(0,Se.jsx)($e,{onClick:()=>{p("/")},children:"Switch to staying"}),(0,Se.jsx)(_e,{children:"1.0.9"}),(0,Se.jsx)(we,{onClick:async()=>{await(0,J.y)(),p("/")},children:"Log out"})]}),g&&(0,Se.jsx)(ke.A,{noContentWrapper:!0,mobileHeight:"100%",backBtnOnClick:()=>x(!1),children:(0,Se.jsx)(ve.A,{notificationsPopup:g,closeNotificationDropDown:()=>x(!1),setNotificationsPopup:x})})]})}var Be=i(9856),He=i(1372);function Me(e){let{switchModeCard:t,setSwitchModeCard:i}=e;const n=(0,Be.A)(t,(()=>{i(!1)})),[s,o]=(0,C.useRecoilState)(M.e),[r,a]=(0,C.useRecoilState)(W.o),d=(0,R.Zp)();return(0,Se.jsx)(He.A,{ref:n,backBtnType:"Arrow",closePopup:()=>i(!t),noContinueBtn:!0,children:(0,Se.jsxs)(w,{children:[(0,Se.jsx)(j,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Switch+mode+image.webp",alt:"switch mode card img"}),(0,Se.jsx)(b,{children:`Become a host, ${s&&s.firstName}`}),(0,Se.jsx)(G,{children:"Join a global network of hosts and unlock rental income."}),(0,Se.jsx)(A,{onClick:()=>{d(`/create-listing/${r&&r.id}`)},type:"button",children:"Create a listing"})]})})}function We(){const[e,t]=(0,n.useState)(!1),[i,s]=(0,C.useRecoilState)(M.e),[o,r]=(0,C.useRecoilState)(W.o),w=(0,R.Zp)(),j=(0,D.A)();if(!i)return null;const b=()=>(0,Se.jsxs)(v,{to:"/payouts",children:[(0,Se.jsx)(k,{children:"Pending"}),(0,Se.jsx)(S,{children:"$0.00 AUD"})]});return(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsx)(P.A,{title:"Profile | Anystay"}),(0,Se.jsx)(H.A,{}),e&&(0,Se.jsx)(Me,{switchModeCard:e,setSwitchModeCard:t}),j?(0,Se.jsxs)(Se.Fragment,{children:[(0,Se.jsxs)(a,{children:[(0,Se.jsx)($,{children:(0,Se.jsx)(l,{children:i.firstName})}),(0,Se.jsxs)(c,{children:[window.innerWidth<768&&i&&!1===i.guestMode&&(0,Se.jsx)(b,{}),(0,Se.jsx)(d,{to:"/edit-profile",children:(0,Se.jsxs)(h,{children:[(0,Se.jsx)(g,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Profile.svg",alt:"Edit profile icon"}),(0,Se.jsx)(x,{children:(0,Se.jsx)(p,{children:"Edit profile"})}),(0,Se.jsxs)(f,{children:["Personal information and",(0,Se.jsx)("br",{})," contact details"]})]})}),(0,Se.jsx)(d,{to:"/security-settings",children:(0,Se.jsxs)(h,{children:[(0,Se.jsx)(g,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Login.svg",alt:"Login info icon"}),(0,Se.jsx)(x,{children:(0,Se.jsx)(p,{children:"Login & sharing"})}),(0,Se.jsxs)(f,{children:["Password reset and social",(0,Se.jsx)("br",{})," sharing preferences"]})]})}),(0,Se.jsx)(d,{to:i?i.guestMode?"/payment-settings":"/payout-settings":"",children:(0,Se.jsxs)(h,{children:[(0,Se.jsx)(g,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/payments+and+payouts.svg",alt:"Payment info icon"}),(0,Se.jsx)(x,{children:(0,Se.jsx)(p,{children:"Payments & payouts"})}),(0,Se.jsxs)(f,{children:["Payment methods, payouts,",(0,Se.jsx)("br",{})," taxes and coupons"]})]})}),(0,Se.jsx)(d,{to:"/referral-page",children:(0,Se.jsxs)(h,{children:[(0,Se.jsx)(g,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Gift.svg",alt:"Payment info icon"}),(0,Se.jsx)(N.IS,{style:{position:"absolute",left:"44px",top:"23px"}}),(0,Se.jsx)(x,{children:(0,Se.jsx)(p,{children:"Invite a friend"})}),(0,Se.jsxs)(f,{children:["Payment methods, payouts,",(0,Se.jsx)("br",{})," taxes and coupons"]})]})}),(0,Se.jsx)("a",{href:"https://help.anystay.com.au/en/",style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:(0,Se.jsxs)(h,{children:[(0,Se.jsx)(g,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Help+center.svg",alt:"help center icon"}),(0,Se.jsx)(x,{children:(0,Se.jsx)(p,{children:"Help center"})}),(0,Se.jsxs)(f,{children:["Payment methods, payouts,",(0,Se.jsx)("br",{})," taxes and coupons"]})]})}),(0,Se.jsx)("a",{style:{textDecoration:"none"},href:"https://rvjc88mc1ia.typeform.com/to/VJ6eFIXJ",target:"_blank",rel:"noopener noreferrer",children:(0,Se.jsxs)(h,{children:[(0,Se.jsx)(g,{src:"https://d292awxalydr86.cloudfront.net/Settings+page/Feedback.svg",alt:"feedback icon"}),(0,Se.jsx)(x,{children:(0,Se.jsx)(p,{children:"Feedback"})}),(0,Se.jsxs)(f,{children:["Help us improve Anystay by",(0,Se.jsx)("br",{})," giving your feedback"]})]})})]}),window.innerWidth>768&&(0,Se.jsx)(m,{type:"button",onClick:()=>w("/list-your-place"),children:(0,Se.jsx)(u,{children:(0,Se.jsx)(y,{children:"Host stays with any place"})})}),i.guestMode?(0,Se.jsx)(_,{onClick:()=>{o&&o.ListingModels.items.length>0?w("/dashboard"):t(!0)},type:"button",children:"Switch to hosting"}):(0,Se.jsx)(_,{onClick:()=>{w("/")},type:"button",children:"Switch to staying"})]}),window.innerWidth<768&&(0,Se.jsx)(z,{onClick:async()=>{await(0,J.y)(),w("/")},children:"Log out"}),(0,Se.jsx)(B.A,{})]}):(0,Se.jsx)(ze,{userModel:i,userHostModel:o,setSwitchModeCard:t})]})}}}]);
//# sourceMappingURL=582.ebc54682.chunk.js.map
//# debugId=3dcfc16d-55bd-510b-875b-1e349acbae8c
