"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="228fbecd-2d5f-5582-9d93-4af3f0fa47f6")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[5021],{2076:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var a=n(6156),i=n(2119),o=n(4936),r=n(5475);const s=i.Ay.div`
    margin-top: 80px;
    display: flex;
    @media (max-width: 767px) {
        display: none;
    }
`,d=i.Ay.div`
    flex: 1;
    .calendar-day-title-container {
        height: 54px;
        .ReactVirtualized__Grid {
            height: 54px !important;
            div[class="ReactVirtualized__Grid__innerScrollContainer"] {
                height: 54px !important;
                max-height: 54px !important;
            }
        }
    }
    .calendar-day-title-container .calendar-day-title-text-border {
        height: 54px !important;
        padding-top: 24px;
        padding-bottom: 8px;
    }
    .calendar-day-title-container .calendar-day-title-action-container {
        top: 17px;
        margin-right: 24px;
    }

    /* .calendar-day-date-container .calendar-day-date-operation-right-container {
        width: 24px;
        background-color: ${o.J2.White.color};
    }

    .calendar-day-date-container .calendar-day-date-operation-container {
        background-color: ${o.J2.White.color};
        z-index: 1;
    }

    .calendar-day-date-container .calendar-day-date-operation-container:first-child {
        position: absolute;
        width: 24px;
        height: 100%;
        left: 0;
        top: 0;
    }

    .calendar-day-date-container .calendar-day-date-operation-right-container::before {
        display: none;
    }

    .calendar-day-date-container .calendar-day-date-operation-container::before {
        display: none;
    }

    .calendar-day-date-container .calendar-day-date-operation-right-container img {
        width: 16px;
        height: 16px;
    }

    .calendar-day-date-container .calendar-day-date-operation-container img {
        width: 16px;
        height: 16px;
    } */

    /* .calendar-day-table-container {
        padding: 0;
    } */

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper .calendar-day-table-row-column-content-occupied-image-container img {
        height: 40px;
        width: 40px;
    }

    .calendar-day-table-row-column-content-occupied-image-container {
        height: 56px;
        width: 56px;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper {
        height: 56px;
        margin-top: 14px;
        margin-bottom: 16px;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper .calendar-day-table-row-column-content-occupied-image-container {
        padding: ${o.dB.spacing_200.padding};
    }

    .calendar-day-date-container .ReactVirtualized__Grid {
        ::-webkit-scrollbar {
            display: none;
        }
    }

    .calendar-day-date-value-container {
        overflow-y: hidden !important;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper {
        top: 0;
        max-width: 0;
    }

    .calendar-day-table-container .calendar-day-table-row-column-container .calendar-day-table-row-column-content-occupied-wrapper:hover {
        max-width: 320px;
        transition:
            max-width 125ms ease-in,
            z-index 0s;
    }

    .calendar-day-table-container .calendar-day-table-return-today-container {
        display: ${e=>e.popupActive?"none":"unset"};
        height: 48px;
        background-color: ${o.J2.Black.color};
        box-shadow: ${o.E_.shadow_100.boxShadow};
        border: none;
        border-radius: ${o.Qk.radius_100.borderRadius};
        color: ${o.J2.White.color};
        cursor: pointer;
        position: fixed;
        top: unset !important;
        left: calc(400px + (100vw - 400px - 24px) / 2) !important;
        transform: translateX(-50%);
        bottom: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        padding: 0 24px !important;
    }

    .calendar-day-table-container .calendar-day-table-return-today-container .calendar-day-table-return-today-btn {
        font-size: ${o.$G.sans_400_semi.fontSize};
        line-height: ${o.$G.sans_400_semi.lineHeight};
        font-weight: ${o.$G.sans_400_semi.fontWeight};
        box-shadow: unset;
        background-color: ${o.J2.Black.color};
        padding: ${o.dB.spacing_100.padding} 0;
    }

    .calendar-day-table-container .calendar-day-table-return-today-container .calendar-day-table-return-today-btn span {
        color: ${o.J2.White.color};
    }

    .calendar-day-title-container {
        background-color: ${o.J2.White.color};
    }

    .calendar-month-table-container {
        height: 100%;
    }
`,l=i.Ay.div`
    min-height: calc(100vh - 80px);
    /* width: 400px; */
    width: 35%;
    padding: ${o.dB.spacing_400.padding};
    border-right: 1px solid ${o.J2.Grey2.color};
    @media (min-width: 1024px) {
        width: 368px;
    }
`,c=i.Ay.p`
    font-size: ${o.$G.sans_800_semi.fontSize};
    line-height: ${o.$G.sans_800_semi.lineHeight};
    font-weight: ${o.$G.sans_800_semi.fontWeight};
    color: ${o.J2.Black.color};
`,p=i.Ay.div`
    height: 32px;
    margin: 11px 0;
`,h=i.Ay.div`
    display: flex;
    flex-direction: column;
`,u=(0,i.Ay)(r.N_)`
    display: flex;
    gap: ${o.dB.spacing_300.gap};
    padding: ${o.dB.spacing_250.padding} 0;
    height: 85px;
    text-decoration: none;
    width: 100%;
`,g=i.Ay.img`
    width: 61px;
    height: 61px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
`,x=i.Ay.div`
    flex-grow: 1;
    overflow: hidden;
`,m=i.Ay.p`
    width: 100%;
    font-size: ${o.$G.sans_300_semi.fontSize};
    line-height: ${o.$G.sans_300_semi.lineHeight};
    font-weight: ${o.$G.sans_300_semi.fontWeight};
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,y=i.Ay.p`
    font-size: ${o.$G.sans_200.fontSize};
    line-height: ${o.$G.sans_200.lineHeight};
    font-weight: ${o.$G.sans_200.fontWeight};
    color: ${o.J2.Grey.color};
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,f=i.Ay.p`
    font-size: ${o.$G.sans_200.fontSize};
    line-height: ${o.$G.sans_200.lineHeight};
    font-weight: ${o.$G.sans_200.fontWeight};
    color: ${o.J2.Green.color};
`,b=i.Ay.div`
    width: 100%;
    height: 476px;
    margin: 0 auto;
    background: #fdfaf9;
    border-radius: 15px;
    padding: ${o.dB.spacing_600.padding} 39px;
`,$=i.Ay.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    color: #ccc;
    text-align: center;
    width: 249px;
    margin: 0 auto;
`,w=i.Ay.div`
    display: flex;
    flex-direction: column;
    padding: ${o.dB.spacing_500.padding} ${o.dB.spacing_400.padding};
    @media (min-width: 768px) {
        display: none;
    }
`,_=i.Ay.h1`
    font-size: 26px;
    font-style: normal;
    font-weight: 625;
    color: #262626;
    margin: 0;
    margin-bottom: 24px;
`;var v=n(5043);const j=e=>{let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`},S=e=>{let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`},k=e=>{let t=new Date(e);return{month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],day:String(t.getDate()).padStart(2,"0"),dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]}},A=i.Ay.div`
    min-width: 400px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    padding: ${o.dB.spacing_400.padding} ${o.dB.spacing_400.padding} ${o.dB.spacing_300.padding} ${o.dB.spacing_400.padding};
    border-top: 1px solid ${o.J2.Grey2.color};
    border-left: 1px solid ${o.J2.Grey2.color};
    overflow-y: scroll;
    position: fixed;
    right: 0;
    z-index: 100;
    top: -2px;
    background-color: white;
    margin-top: 80px;
`,D=i.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${o.dB.spacing_350.gap};
    margin-top: 8px;
`,G=i.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,z=i.Ay.div`
    width: 18px;
    height: 5px;
    margin-top: 10px;
    background-color: black;
`,R=i.Ay.p`
    margin: 0;
    font-weight: ${o.$G.sans_700_semi.fontWeight};
    font-size: ${o.$G.sans_700_semi.fontSize};
`,B=i.Ay.p`
    margin: 0;
    font-weight: ${o.$G.sans_1300_bold.fontWeight};
    font-size: ${o.$G.sans_1300_bold.fontSize};
`,J=i.Ay.p`
    margin: 0;
    font-size: ${o.$G.sans_400_semi.fontSize};
    font-weight: ${o.$G.sans_400_semi.fontWeight};
`,M=i.Ay.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`,W=i.Ay.button`
    border: none;
    background-color: ${e=>e.active?o.J2.Black.color:"white"};
    color: ${e=>e.active?"white":o.J2.Grey.color};
    width: 102px;
    height: 36px;
    border-radius: ${o.Qk.radius_100.borderRadius};
    font-size: ${o.Ox.sans_button_100.fontSize};
    font-weight: ${o.Ox.sans_button_100.fontWeight};
    cursor: pointer;
`,C=i.Ay.button`
    border: none;
    background-color: transparent;
    position: absolute;
    top: 24px;
    left: 24px;
    cursor: pointer;
`,P=i.Ay.button`
    border: none;
    background-color: transparent;
    position: absolute;
    top: 24px;
    left: 24px;
    cursor: pointer;
`,N=i.Ay.img`
    width: 16px;
    height: 16px;
`,E=i.Ay.img`
    width: 16px;
    height: 16px;
`,H=(i.Ay.button`
    width: 28px;
    height: 28px;
    position: absolute;
    top: 19px;
    right: 30px;
    cursor: pointer;
    border: none;
    background-color: transparent;
`,i.Ay.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`,i.Ay.button`
    border: none;
    width: 102px;
    height: 48px;
    border-radius: 9px;
    background-color: ${o.J2.Blue.color};
    color: white;
    font-size: ${o.Ox.sans_button_200.fontSize};
    font-weight: ${o.Ox.sans_button_200.fontWeight};
    line-height: ${o.Ox.sans_button_200.lineHeight};
    cursor: pointer;
`,i.Ay.div`
    width: 100%;
`),O=i.Ay.div`
    border-radius: 9px;
    /* border-radius: 10px 10px 0px 0px; */
    /* border-bottom: 1px; */
    background: ${o.J2.White.color};
    height: 91px;
    display: flex;
    gap: ${o.dB.spacing_300.gap};
    justify-content: center;
    align-items: center;
    box-shadow: ${o.E_.shadow_100.boxShadow};
    padding: ${o.dB.spacing_400.padding};
    cursor: pointer;
    position: relative;
`,U=i.Ay.p`
    font-size: ${o.$G.sans_800_semi.fontSize};
    font-weight: ${o.$G.sans_800_semi.fontWeight};
    line-height: ${o.$G.sans_800_semi.lineHeight};
    position: absolute;
    top: 30px;
`,I=(i.Ay.div`
    border-radius: 0px 0px 10px 10px;
    border: 1px solid ${o.J2.Grey1.color};
    background: ${o.J2.White.color};
    height: 91px;
    display: flex;
    flex-direction: column;
    gap: ${o.dB.spacing_200.gap};
    padding: ${o.dB.spacing_300.padding};
`,i.Ay.input`
    font-size: ${o.$G.sans_800_semi.fontSize};
    font-style: normal;
    font-weight: ${o.$G.sans_800_semi.fontWeight};
    line-height: ${o.$G.sans_800_semi.lineHeight};
    border: none;
    outline: none;
    margin-left: 20px;
    ::placeholder {
        color: ${o.J2.Grey1.color};
    }
`),Z=i.Ay.p`
    font-size: ${o.$G.sans_1000_semi.fontSize};
    font-weight: ${o.$G.sans_1000_semi.fontWeight};
    line-height: ${o.$G.sans_1000_semi.lineHeight};
`,q=i.Ay.p`
    color: ${o.J2.Red1.color};
    font-size: ${o.$G.sans_300.fontSize};
    line-height: ${o.$G.sans_300.lineHeight};
    font-weight: ${o.$G.sans_300.fontWeight};
    margin: 0;
    margin-top: 12px;
`,F=(i.Ay.div`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${o.J2.Grey1.color};
    cursor: pointer;
`,i.Ay.img`
    width: 12px;
    height: 12px;
`,i.Ay.p`
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: ${o.$G.sans_700_semi.fontSize};
    font-weight: ${o.$G.sans_700_semi.fontWeight};
    line-height: ${o.$G.sans_700_semi.lineHeight};
`);var L=n(4204),T=n(579);const V=e=>{let{setEditState:t,setNewPrice:n}=e;const[a,i]=(0,v.useState)(null),[o,r]=(0,v.useState)(""),[s,d]=(0,v.useState)(!1),l=(0,v.useRef)(null),[c,p]=(0,v.useState)(!1);(0,v.useEffect)((()=>{l.current&&l.current.focus()}),[]);return(0,v.useEffect)((()=>{a&&(a<10?(r("Price must be at least $10 AUD"),d(!0)):a>1e5?(r("Price must be below $100000 AUD "),d(!0)):(r(""),d(!1)))}),[a]),(0,T.jsxs)(A,{children:[(0,T.jsx)(P,{onClick:()=>{t("main")},children:(0,T.jsx)(E,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"back button"})}),(0,T.jsx)(F,{children:"Price"}),(0,T.jsxs)(H,{children:[(0,T.jsxs)(O,{style:{justifyContent:"unset"},children:[(0,T.jsx)(U,{children:"$"}),(0,T.jsx)(I,{ref:l,type:"text",placeholder:"0",value:a,onChange:e=>{const t=e.target.value.replace(/\D/g,"");i(Number(t))}})]}),s&&(0,T.jsx)(q,{children:o})]}),(0,T.jsx)(L.A,{background:"black",style:{width:"fit-content"},disabled:s||!a,isLoading:c,onClick:()=>{p(!0),t("main"),n(a.toString()),p(!1)},children:"Done"})]})};var Q=n(9082),Y=n(831),X=n(7426);const K=e=>{let{currentSelection:t,closePopup:n,loadListings:a}=e;const i=(0,v.useMemo)((()=>{const e=[];if(void 0!==t.rows){t.rows.forEach((t=>{t.cells.forEach((t=>{e.push(Number(t.value.replace("$","")))}))}))}else if(void 0!==t.cells){t.cells.forEach((t=>{e.push(Number(t.value.replace("$","")))}))}const n=Math.min(...e),a=Math.max(...e);return n!==a?`$${n} - $${a}`:`$${n}`}),[t]),o=(0,v.useMemo)((()=>{let e=!1,n=!1;if(void 0!==t.rows){t.rows.forEach((t=>{t.cells.forEach((t=>{"Normal"===t.status?e=!0:"Block"===t.status&&(n=!0)}))}))}else if(void 0!==t.cells){t.cells.forEach((t=>{"Normal"===t.status?e=!0:"Block"===t.status&&(n=!0)}))}return e&&n?null:!!e||!n&&void 0}),[t]),r=(0,v.useMemo)((()=>k(t.startDate)),[t.startDate]),s=(0,v.useMemo)((()=>k(t.endDate)),[t.endDate]),[d,l]=(0,v.useState)(o),[c,p]=(0,v.useState)(!1),[h,u]=(0,v.useState)("main"),[g,x]=(0,v.useState)(""),[m,y]=(0,Y.useRecoilState)(Q.H);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{style:{height:"100%",width:"100%",position:"fixed",left:0,bottom:0,zIndex:99,background:"rgba(0, 0, 0, 0.25)",backdropFilter:"blur(0px)"},onClick:n}),"main"===h&&(0,T.jsxs)(A,{children:[(0,T.jsx)(C,{onClick:n,children:(0,T.jsx)(N,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Cross.svg",alt:"close btn"})}),(0,T.jsxs)(D,{children:[(0,T.jsxs)(G,{children:[(0,T.jsx)(R,{children:r.month}),(0,T.jsx)(B,{children:r.day}),(0,T.jsx)(J,{children:r.dayOfWeek})]}),(0,T.jsx)(z,{children:"-"}),(0,T.jsxs)(G,{children:[(0,T.jsx)(R,{children:s.month}),(0,T.jsx)(B,{children:s.day}),(0,T.jsx)(J,{children:s.dayOfWeek})]})]}),(0,T.jsxs)(M,{children:[(0,T.jsx)(W,{active:!0===d,onClick:()=>{l(!0)},children:"Available"}),(0,T.jsx)(W,{active:!1===d,onClick:()=>{l(!1)},children:"Unavailable"})]}),(0,T.jsx)(H,{children:(0,T.jsx)(O,{onClick:()=>{u("price")},children:(0,T.jsx)(Z,{children:g?`$${g}`:i})})}),(0,T.jsx)(L.A,{background:"black",style:{width:"fit-content"},isLoading:c,disabled:c||null===d,onClick:async()=>{if(void 0!==t.rows){const i=t.rows.map((e=>e.id));p(!0);try{let e=await(0,X.p)("post","dev-anystay-listing","listing/calendar/rules",{headers:{Authorization:m,listingModelIds:i.join(",")},body:{startDate:new Date(t.startDate).toString(),endDate:new Date(t.endDate).toString(),listingModelIds:i,minimumPrice:100*Number(g),disabled:!d}});e.success&&(console.log(e),await a(null),p(!1),n())}catch(e){p(!1),console.log(e)}}},children:"Done"})]}),"price"===h&&(0,T.jsx)(V,{setEditState:u,setNewPrice:x})]})};var ee=n(8069),te=n(9531),ne=n(3216);const ae=e=>{let{listings:t,loadListings:n}=e;const[i,o]=(0,v.useState)(null),[r,s]=(0,v.useState)(!1),l=(0,v.useRef)(null),c=(0,v.useMemo)((()=>t.map((e=>({rowId:e.id,value:"$"+e.minimumPrice/100})))),[t]),p=e=>{switch(e.status){case"Change Requested":return"Changes requested";case"Refund Requested":return"Refund requested";case"Booking Requested":return"Stay requested";case"Review Pending":return"Review Guest";case"Guest Review Pending":return"Reviewed";default:return"Confirmed"}},h=(0,ne.Zp)(),u=(0,v.useMemo)((()=>{const e=[],n=[],a=[];return t.forEach((t=>{const i=[],o=[],r=[];t.iCalUnavailableDates.forEach((e=>{let n=JSON.parse(e),a=n.beginDate.replace("Z",""),i=n.endDate.replace("Z","");o.push({startDate:j(a),endDate:j(i),value:"$"+t.minimumPrice/100})})),t.BookingRequestModels.items.filter((e=>!e.cancelled&&!e.declined&&"Declined"!==e.status&&"Overdue"!==e.status)).forEach((e=>{if("externalUnavailableDate"!==e.id){var t,n;let a=e.arrivalDate.replace("Z",""),i=e.departureDate.replace("Z","");const o=null!==(t=e.UserModel)&&void 0!==t&&t.profilePicture?(0,ee.A)(e.UserModel.profilePicture,e.UserModel.identityID,null):null;r.push({startDate:S(a),endDate:S(i),name:null===(n=e.UserModel)||void 0===n?void 0:n.firstName,text:p(e),link:e.id,avatar:o||"https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"})}else{let t=e.arrivalDate.replace("Z",""),n=e.departureDate.replace("Z","");r.push({startDate:S(t),endDate:S(n),name:"External Booking",text:p(e),link:e.id,avatar:"https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"})}})),t.rules.forEach((e=>{let n=e.beginDate.replace("Z",""),a=e.endDate.replace("Z","");e.disabled?o.push({startDate:j(n),endDate:j(a),value:e.minimumPrice?"$"+e.minimumPrice/100:"$"+t.minimumPrice/100}):i.push({startDate:j(n),endDate:j(a),value:e.minimumPrice?"$"+e.minimumPrice/100:"$"+t.minimumPrice/100})})),e.push({rowId:t.id,columns:i}),n.push({rowId:t.id,columns:o}),a.push({rowId:t.id,columns:r})})),{fillRowsData:e,blockedRowsData:n,occupiedRowsData:a}}),[t]);return(0,T.jsxs)(d,{popupActive:r,children:[(0,T.jsx)(a.V,{type:te.B.Month,ref:l,columnWidth:85,subtractMonthNumber:24,totalMonthNumber:60,rows:c,blockRows:u.blockedRowsData,fillRows:u.fillRowsData,occupiedRows:u.occupiedRowsData,onSelect:e=>{o(e),s(!0)},onOccupiedClick:e=>{"externalUnavailableDate"!==e&&h(`/booking-request/${e}`)}}),r&&i&&(0,T.jsx)(K,{currentSelection:i,closePopup:()=>{o(null),s(!1),l.current&&l.current.forceClearSelect()},loadListings:n})]})};var ie=n(6879);const oe=e=>{let{listing:t}=e;const n=(0,v.useMemo)((()=>JSON.parse(t.listingImages[0]).key),[t.listingImages]);return(0,T.jsxs)(u,{to:`/edit-listing/${t.id}`,children:[(0,T.jsx)(g,{src:(0,ie.A)(n,300)}),(0,T.jsxs)(x,{children:[(0,T.jsx)(m,{children:t.propertyTitle}),(0,T.jsx)(y,{children:`${t.unitNumber?`${t.unitNumber}/`:""}${t.streetNumber} ${t.street}, ${t.suburb}`}),(0,T.jsx)(f,{children:(a=t.status,a.charAt(0).toUpperCase()+a.slice(1))})]})]});var a},re=e=>{let{listings:t}=e;return(0,T.jsxs)(l,{children:[(0,T.jsx)(c,{children:"Calendar"}),(0,T.jsx)(p,{}),(0,T.jsx)(h,{children:t.map((e=>(0,T.jsx)(oe,{listing:e},e.id)))})]})};var se=n(7013);const de=()=>{const[e,t]=(0,Y.useRecoilState)(Q.H),n=(0,v.useRef)(null),a=(0,v.useRef)(!1),[i,o]=(0,v.useState)([]),r=(0,v.useCallback)((async t=>{a.current=!0;let i=await(0,X.p)("post","dev-anystay-user","user/host/calendar/listings",{headers:{Authorization:e},body:{nextToken:t}});const r=i.body.listings.filter((e=>!e.draft));n.current=i.body.nextToken,o(t?e=>[...e,...r]:r),a.current=!1}),[e]);return(0,v.useEffect)((()=>{r(null)}),[r]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(w,{children:[(0,T.jsx)(_,{children:"Calendar"}),(0,T.jsx)(b,{children:(0,T.jsx)($,{children:"Mobile calendar features are not yet available"})})]}),(0,T.jsxs)(s,{children:[(0,T.jsx)(re,{listings:i}),(0,T.jsx)(ae,{listings:i,loadListings:r})]}),(0,T.jsx)(se.A,{})]})}},6879:(e,t,n)=>{n.d(t,{A:()=>a});const a=(e,t)=>{const n=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${e}`,edits:{resize:{width:t,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(n)}`}}}]);
//# sourceMappingURL=5021.f8a6f2c4.chunk.js.map
//# debugId=228fbecd-2d5f-5582-9d93-4af3f0fa47f6
