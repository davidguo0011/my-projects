"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f9be1e1b-cfbd-5649-8522-e95686e81b9f")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[7316],{7316:(e,t,s)=>{s.r(t),s.d(t,{default:()=>z});var i=s(5043),n=s(7426),r=s(3690),a=s(7013),o=s(9340),d=s(2119),l=s(4936);d.Ay.div`
    width: 100%;
    border-radius: 14px;
    box-shadow: ${l.E_.shadow_100.boxShadow};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(100vw - 48px) auto auto auto;
    padding: 0;
    @media (min-width: 444px) {
        grid-template-rows: 318px auto auto auto;
    }
`;const c=d.Ay.div`
    width: 100%;
    height: 100%;
    border-radius: ${l.Qk.radius_16.borderRadius};
    background: ${l.J2.Grey2.color};
`,u=d.Ay.div`
    width: 100%;
    aspect-ratio: 16/10;
    @media (min-width: 768px) {
        display: none;
    }
`,g=d.Ay.div`
    height: 130px;
    @media (min-width: 768px) {
        display: none;
    }
`,h=(d.Ay.p`
    height: 32px;
    width: 90px;
    background: ${l.J2.White.color};
    margin: ${l.dB.spacing_300.margin};
    border-radius: ${l.Qk.radius_8.borderRadius};
    z-index: 1;
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: flex-start;
    box-shadow: ${l.E_.shadow_100.boxShadow};
`,d.Ay.div`
    width: 100%;
    height: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
    background: ${l.J2.Grey2.color};
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`,d.Ay.p`
    margin: ${l.dB.spacing_300.margin} ${l.dB.spacing_300.margin} 0;
    width: 50%;
    height: 24px;
    background: ${l.J2.Grey2.color};
`,d.Ay.p`
    margin: ${l.dB.spacing_100.margin} ${l.dB.spacing_300.margin} ${l.dB.spacing_300.margin} ${l.dB.spacing_300.margin};
    width: 20%;
    height: 18px;
    background: ${l.J2.Grey2.color};
`,d.Ay.div`
    width: 100%;
    padding: 0 ${l.dB.spacing_300.margin} ${l.dB.spacing_300.margin};
    display: flex;
    justify-content: space-between;
`,d.Ay.div`
    display: flex;
    align-self: flex-end;
`,d.Ay.p`
    width: 60px;
    height: 22px;
    background: ${l.J2.Grey2.color};
    margin: 0;
`,d.Ay.div`
    width: 1px;
    height: 12px;
    align-self: center;
    background: ${l.J2.Grey1.color};
    margin: 0px 16px;
`,d.Ay.button`
    width: 180px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: ${l.Qk.radius_16.borderRadius};
    background: none;
    text-align: left;
    padding: 0;

    @media (max-width: 767px) {
        display: none;
    }

    @media (min-width: 768px) {
        width: calc(33.33% - 16px);
    }

    @media (min-width: 1280px) {
        width: calc(20% - 19.2px);
    }

    /* @media (min-width: 1440px) {
        width: calc(16.66% - 20px);
    } */
`),p=d.Ay.div`
    width: 100%;
    aspect-ratio: 1/1;
    border: 4px solid ${l.J2.White.color};
    background: ${l.J2.Grey1.color};
    border-radius: ${l.Qk.radius_16.borderRadius};
    overflow: hidden;
    box-shadow: ${l.E_.shadow_100.boxShadow};
`,x=d.Ay.p`
    margin-top: 12px;
    width: 50%;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: ${l.J2.Grey1.color};
`,y=d.Ay.div`
    width: 100%;
    height: 20px;
    width: 50%;
    margin-top: 2px;
    margin-bottom: 8px;
    color: ${l.J2.Grey.color};
    background: ${l.J2.Grey1.color};
`,w=d.Ay.p`
    color: ${l.J2.Grey.color};
    margin: 0;
    background: ${l.J2.Grey1.color};
    height: 18px;
    width: 30%;
`;var m=s(579);const b=()=>(0,m.jsxs)(c,{children:[(0,m.jsx)(u,{}),(0,m.jsx)(g,{})]});var j=s(3216),$=s(6879),f=s(5660);const v=e=>{let{bookingRequest:t,listingData:s}=e;const n=(0,j.Zp)(),[a,o]=(0,i.useState)(""),d=()=>{let e=new Date(t.arrivalDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`},c=()=>{let e=new Date(t.departureDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`},u=e=>{o(e),document.body.style.overflow="hidden"};return s?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(r.y4,{onClick:()=>{n(`/your-booking/${t.id}`)},children:[(0,m.jsx)(r.$M,{style:{color:l.J2.Black.color},children:(()=>{if("Booking Requested"===t.status)return"Requested";if("Change Requested"===t.status)return t.status;if("Refund Requested"===t.status)return t.status;if("Confirmed"===t.status){let e=new Date,s=new Date(t.arrivalDate),i=new Date(t.departureDate);if(s.setUTCHours(0,0,0,0),i.setUTCHours(0,0,0,0),s>e){if(t.daysUntilArrival>1)return`Arriving in ${t.daysUntilArrival} days`;if(1===t.daysUntilArrival)return"Arriving tomorrow";let e=new Date(t.arrivalDate).getUTCHours();const s=new Date(t.arrivalDate).getUTCMinutes(),i=e>=12?"pm":"am";return e%=12,e=e||12,`Check-in after ${e}:${s<10?"0"+s:s}${i}`}{if(t.daysUntilDeparture>1)return`Departing in ${t.daysUntilDeparture} days`;if(1===t.daysUntilDeparture)return"Departing tomorrow";let e=new Date(t.departureDate).getUTCHours();const s=new Date(t.departureDate).getUTCMinutes(),i=e>=12?"pm":"am";return e%=12,e=e||12,`Checkout before ${e}:${s<10?"0"+s:s}${i}`}}return"Review Pending"===t.status||"Stay Review Pending"===t.status||"Guest Review Pending"===t.status||"Reviewed"===t.status?"Complete":""})()}),(0,m.jsx)(r.Vh,{children:s&&(0,m.jsx)(r.dg,{src:(0,$.A)(JSON.parse(s.listingImages[0]).key,800),alt:"Featured image"})}),"Review Pending"===t.status||"Stay Review Pending"===t.status?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r._u,{children:"Review your stay"}),(0,m.jsx)(r.LG,{children:(()=>{const e=[],s=t.overallReviewScore;for(let i=1;i<=5;i++)e.push((0,m.jsx)(r._6,{onClick:e=>{e.stopPropagation()},to:`/review-stay/${t.id}/${t.listingmodelID}`,children:(0,m.jsx)("svg",{width:"34",height:"34",viewBox:"0 0 31 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M14.2997 0.885909C14.7438 -0.181772 16.2562 -0.181774 16.7003 0.885907L19.8239 8.39584C20.0111 8.84595 20.4344 9.15349 20.9203 9.19244L29.0279 9.84243C30.1806 9.93484 30.6479 11.3733 29.7697 12.1256L23.5926 17.4169C23.2224 17.7341 23.0607 18.2317 23.1738 18.7059L25.061 26.6175C25.3293 27.7423 24.1057 28.6313 23.1189 28.0286L16.1776 23.7889C15.7616 23.5348 15.2384 23.5348 14.8224 23.7889L7.88113 28.0286C6.8943 28.6313 5.67067 27.7423 5.93898 26.6175L7.82619 18.7059C7.9393 18.2317 7.77762 17.7341 7.40739 17.4169L1.23025 12.1256C0.352056 11.3733 0.819438 9.93484 1.97209 9.84243L10.0797 9.19245C10.5656 9.15349 10.9889 8.84595 11.1761 8.39584L14.2997 0.885909Z",fill:s&&i<=s?l.J2.Red.color:l.J2.Grey2.color})})},i));return e})()})]}):(0,m.jsxs)(r.ns,{children:[(0,m.jsx)(r.lc,{children:s?s.propertyTitle:""}),(0,m.jsxs)(r.iz,{children:[s.unitNumber&&`${s.unitNumber}/`,s.streetNumber," ",s.street,", ",s.suburb]}),(0,m.jsxs)(r._0,{children:[s.unitNumber&&`${s.propertyTitle}/`,s.streetNumber," ",s.street,", ",s.suburb]}),(0,m.jsx)(r.oi,{children:(0,m.jsxs)(r.IF,{children:[(0,m.jsx)(r.fm,{style:{marginRight:"16px"},children:d()}),(0,m.jsx)(r.ky,{style:{marginRight:"16px"},children:d()}),(0,m.jsx)(r.I9,{}),(0,m.jsx)(r.fm,{style:{marginLeft:"16px"},children:c()}),(0,m.jsx)(r.ky,{style:{marginLeft:"16px"},children:c()})]})}),(()=>{if(s.checkInInstructions)try{let e=JSON.parse(s.checkInInstructions);return(e.steps[0].instruction||e.steps[0].imgKey)&&(()=>{const e=new Date(new Date(t.departureDate.slice(0,-1)).setHours(0,0,0,0)),s=new Date(new Date(t.arrivalDate.slice(0,-1)).getTime()-1728e5),i=new Date;return i>=s&&i<e})()?(0,m.jsxs)(r.AF,{onClick:e=>{e.stopPropagation(),u("YourStaysCheckInInstructions")},children:[(0,m.jsx)(r.wD,{children:(0,m.jsx)(r.p8,{src:"https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg",alt:"Check in guid icon"})}),(0,m.jsxs)(r.ZE,{children:[(0,m.jsx)(r.we,{children:"Check-in guide"}),(0,m.jsxs)(r.UF,{children:["Hosted by ",s.UserHostModel.UserModel.firstName]})]})]}):null}catch(e){return(0,m.jsxs)(r.AF,{onClick:e=>{e.stopPropagation(),u("YourStaysCheckInInstructions")},children:[(0,m.jsx)(r.wD,{children:(0,m.jsx)(r.p8,{src:"https://d292awxalydr86.cloudfront.net/Stays+page/Menu.svg",alt:"Check in guid icon"})}),(0,m.jsxs)(r.ZE,{children:[(0,m.jsx)(r.we,{children:"Check-in guide"}),(0,m.jsxs)(r.UF,{children:["Hosted by ",s.UserHostModel.UserModel.firstName]})]})]})}})()]}),"YourStaysCheckInInstructions"===a&&(0,m.jsx)(f.A,{checkInInstructions:s.checkInInstructions,deactivatePopupCards:async()=>{o(""),document.body.style.overflow="unset"}})]})}):null};var C=s(6138),S=s(5475);const k=d.Ay.div`
    overflow: scroll;
    width: 100%;
    ::-webkit-scrollbar {
        display: none;
    }
`,D=d.Ay.div`
    padding-top: 48px;
    padding-bottom: 48px;
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_600.gap};
    width: 100%;
    min-width: 903px;
    @media (max-width: 767px) {
        padding: ${l.dB.spacing_400.padding} ${l.dB.spacing_400.padding} ${l.dB.spacing_500.padding};
    }
`,A=(0,d.Ay)(S.N_)`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${l.dB.spacing_300.gap};
`,R=d.Ay.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
`,J=d.Ay.a`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
    text-decoration: none;
`,_=d.Ay.div`
    width: 56px;
    height: 56px;
    border-radius: 10px;
    border: 1px solid ${l.J2.Grey3.color};
    background-color: ${l.J2.Grey5.color};
    display: flex;
    justify-content: center;
    align-items: center;
`,M=d.Ay.img`
    width: 20px;
    height: 20px;
`,U=d.Ay.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`,I=d.Ay.p`
    font-size: ${l.$G.sans_400_semi.fontSize};
    font-weight: ${l.$G.sans_400_semi.fontWeight};
    line-height: ${l.$G.sans_400_semi.lineHeight};

    margin-bottom: 4px;
`,T=d.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    font-weight: ${l.$G.sans_300.fontWeight};
    line-height: ${l.$G.sans_300.lineHeight};
    color: ${l.J2.Grey.color};
`;var G=s(9856);const q=e=>{let{bookingRequest:t}=e;const[s,n]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1),o=(e,t)=>{e?(window.Intercom("hide"),t(!1)):(window.Intercom("showNewMessage",""),t(!0))},d=(0,G.A)(r,(()=>o(r,a)));return(0,m.jsx)(k,{children:(0,m.jsxs)(D,{children:[(0,m.jsxs)(A,{to:`/conversation/${t.conversationmodelID}`,children:[(0,m.jsx)(_,{children:(0,m.jsx)(M,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Inbox+new+(guest).svg",alt:"message icon"})}),(0,m.jsxs)(U,{children:[(0,m.jsx)(I,{children:"Send a message"}),(0,m.jsx)(T,{children:"We typically reply in a few minutes"})]})]}),(0,m.jsxs)(J,{href:"tel:1300237472",children:[(0,m.jsx)(_,{children:(0,m.jsx)(M,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Call.svg",alt:"phone icon"})}),(0,m.jsxs)(U,{children:[(0,m.jsxs)(I,{children:["Call ",t.hostPhoneNumber]}),(0,m.jsx)(T,{children:"Contact your host by phone"})]})]}),(0,m.jsxs)(R,{onClick:()=>o(r,a),ref:d,children:[(0,m.jsx)(_,{children:(0,m.jsx)(M,{src:"https://d292awxalydr86.cloudfront.net/Stays+page/Concierge.svg",alt:"concierge icon"})}),(0,m.jsxs)(U,{children:[(0,m.jsx)(I,{children:"Get help from us"}),(0,m.jsx)(T,{children:"Get anything you need"})]})]})]})})},B=e=>{let{bookingRequest:t,setStayMapCardSuburb:s,setStateMapCardStateShort:a}=e;const[d,l]=(0,i.useState)(null),[c,u]=(0,i.useState)(!0),g=(0,C.A)(),h=(0,i.useCallback)((async e=>{let t=await(0,n.p)("get","dev-anystay-listing",`listing/${e}/your-stay-card`);l(t.body.listing),a(t.body.listing.stateShort?t.body.listing.stateShort:""),s(t.body.listing.suburb),u(!1)}),[a,s]);return(0,i.useEffect)((()=>{(async()=>{await h(t.listingmodelID)})()}),[t.listingmodelID,h]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.HP,{children:c?(0,m.jsx)(b,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{bookingRequest:t,listingData:d}),g&&(0,m.jsx)(o.A,{containerStyle:{width:"100%",height:"100%",position:"absolute",borderRadius:"12px"},lat:d&&JSON.parse(d.location).lat,lng:d&&JSON.parse(d.location).lon,zoom:16,minZoom:13,zoomControl:!0,scrollWheelZoom:!1})]})}),(0,m.jsx)(q,{bookingRequest:t}),(0,m.jsx)(r.jb,{})]})},N=()=>(0,m.jsxs)(h,{children:[(0,m.jsx)(p,{}),(0,m.jsx)(x,{}),(0,m.jsx)(y,{}),(0,m.jsx)(w,{})]}),F=e=>{let{bookingRequest:t}=e;const s=(0,j.Zp)(),[a,o]=(0,i.useState)(null),[d,c]=(0,i.useState)(!0);(0,i.useEffect)((()=>{(async()=>{await(async e=>{try{let t=await(0,n.p)("get","dev-anystay-listing",`listing/${e.listingmodelID}/your-stay-card`);o(t.body.listing),c(!1)}catch{c(!1)}})(t)})()}),[t]);return d||!a?(0,m.jsx)(N,{}):(0,m.jsxs)(r.u4,{children:[(0,m.jsx)(r.Zb,{onClick:()=>{s(`/your-booking/${t.id}`)},children:(0,m.jsx)(r.aK,{src:(0,$.A)(JSON.parse(a.listingImages[0]).key,800),alt:"Featured image"})}),(0,m.jsx)(r.nb,{children:a?a.propertyTitle:""}),(0,m.jsxs)(r.Cw,{children:[(()=>{let e=new Date(t.arrivalDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()," - ",(()=>{let e=new Date(t.departureDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()]}),"Review Pending"===t.status||"Stay Review Pending"===t.status?(0,m.jsx)(r.G2,{children:(0,m.jsx)(r.vP,{children:(()=>{const e=[],s=t.overallReviewScore;for(let i=1;i<=5;i++)e.push((0,m.jsx)(r.ft,{to:`/review-stay/${t.id}/${t.listingmodelID}`,children:(0,m.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 31 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M14.2997 0.885909C14.7438 -0.181772 16.2562 -0.181774 16.7003 0.885907L19.8239 8.39584C20.0111 8.84595 20.4344 9.15349 20.9203 9.19244L29.0279 9.84243C30.1806 9.93484 30.6479 11.3733 29.7697 12.1256L23.5926 17.4169C23.2224 17.7341 23.0607 18.2317 23.1738 18.7059L25.061 26.6175C25.3293 27.7423 24.1057 28.6313 23.1189 28.0286L16.1776 23.7889C15.7616 23.5348 15.2384 23.5348 14.8224 23.7889L7.88113 28.0286C6.8943 28.6313 5.67067 27.7423 5.93898 26.6175L7.82619 18.7059C7.9393 18.2317 7.77762 17.7341 7.40739 17.4169L1.23025 12.1256C0.352056 11.3733 0.819438 9.93484 1.97209 9.84243L10.0797 9.19245C10.5656 9.15349 10.9889 8.84595 11.1761 8.39584L14.2997 0.885909Z",fill:s&&i<=s?l.J2.Red.color:l.J2.Grey2.color})})},i));return e})()})}):(0,m.jsx)(r.$x,{children:"Reviewed"===t.status?"Complete":"Cancelled"===t.status?"Cancelled":"Declined"===t.status?"Declined":"Overdue"===t.status?"Expired":"Complete"})]})},L=e=>{let{bookingRequest:t}=e;const s=(0,j.Zp)(),[a,o]=(0,i.useState)(null),[d,l]=(0,i.useState)(!0);(0,i.useEffect)((()=>{(async()=>{await(async e=>{try{let t=await(0,n.p)("get","dev-anystay-listing",`listing/${e.listingmodelID}/your-stay-card`);o(t.body.listing),l(!1)}catch{l(!1)}})(t)})()}),[t]);return d||!a?(0,m.jsx)(N,{}):(0,m.jsxs)(r.u4,{children:[(0,m.jsx)(r.Zb,{onClick:()=>{s(`/your-booking/${t.id}`)},children:(0,m.jsx)(r.aK,{src:(0,$.A)(JSON.parse(a.listingImages[0]).key,800),alt:"Featured image"})}),(0,m.jsx)(r.nb,{children:a.propertyTitle}),(0,m.jsxs)(r.Cw,{children:[(()=>{let e=new Date(t.arrivalDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()," - ",(()=>{let e=new Date(t.departureDate);return`${e.getUTCDate()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getUTCMonth()]}`})()]}),(0,m.jsx)(r.$x,{children:"Booking Requested"===t.status?"Requested":"Change Requested"===t.status||"Refund Requested"===t.status?t.status:`Arriving in ${t.daysUntilArrival} day`})]})};var P=s(9082),O=s(1869),H=s(831),Z=s(8306),E=s(6806);const z=()=>{const[e,t]=(0,H.useRecoilState)(P.H),[s,o]=(0,H.useRecoilState)(O.e),[d,l]=(0,i.useState)(0),[c,u]=(0,i.useState)([]),[g,h]=(0,i.useState)([]),[p,x]=(0,i.useState)(0),[y,w]=(0,i.useState)(0),[b,j]=(0,i.useState)(1),[$,f]=(0,i.useState)(1),[v,S]=(0,i.useState)(1),[k,D]=(0,i.useState)(1),A=(0,C.A)(),[R,J]=(0,i.useState)(""),[_,M]=(0,i.useState)(""),U=(0,i.useCallback)((async()=>{if(!s)return;const t=await(0,n.p)("post","dev-anystay-user","user/guest/bookings",{headers:{Authorization:e},body:{get:"all",userModelId:s.id,today:(new Date).toString()}});x(t.body.currentTotal),w(t.body.pastTotal),S(t.body.currentTotalPages),j(t.body.pastTotalPages),u({1:t.body.currentBookingRequests}),h({1:t.body.pastBookingRequests})}),[e,s]);(0,i.useEffect)((()=>{U()}),[U]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z.A,{title:"Your stays | Anystay"}),(0,m.jsx)(a.A,{hide:!1}),(0,m.jsxs)(r.FV,{children:[(0,m.jsx)(r.TN,{children:(0,m.jsx)(r.af,{children:(()=>{const e=_?`, ${_}`:"";if(p>0&&c[k]){if("Booking Requested"===c[k][0].status&&R)return`Your stay in ${R}${e} is pending`;if("Change Requested"===c[k][0].status)return`Your change request in ${R}${e} is pending`;if("Refund Requested"===c[k][0].status)return`Your refund in ${R}${e} is pending`;if("Confirmed"===c[k][0].status&&R)return c[k][0].daysUntilArrival>0?`You\u2019re arriving in ${R}${e}`:`Welcome to ${R}${e}`}return y>0&&g[$]&&("Review Pending"===g[$][0].status||"Stay Review Pending"===g[$][0].status)&&R?`Review your stay in ${g[$][0].state}`:"Stays"})()})}),p>0&&c[k]?(0,m.jsx)(B,{setStayMapCardSuburb:J,setStateMapCardStateShort:M,bookingRequest:c[k][0]}):y>0&&g[$]&&("Review Pending"===g[$][0].status||"Stay Review Pending"===g[$][0].status)?(0,m.jsx)(B,{setStayMapCardSuburb:J,setStateMapCardStateShort:M,bookingRequest:g[$][0]}):(0,m.jsxs)(r.WT,{children:[(0,m.jsx)(r.F3,{children:"No stays yet"}),(0,m.jsx)(r.n,{children:"Search where you want to go and book your first stay"})]}),p>1&&c[k]&&(0,m.jsxs)(r.KA,{children:[(0,m.jsx)(r.tQ,{children:"Upcoming arrivals"}),A?(0,m.jsx)(r.Di,{children:c[k].map(((e,t)=>0===t?null:(0,m.jsx)(L,{bookingRequest:e},e.id)))}):(0,m.jsx)(r.po,{className:"mySwiper",modules:[E.Vx,E.FJ,E.U1],navigation:!0,mousewheel:!0,freeMode:!0,pagination:{clickable:!0},loop:!1,onSlideChange:e=>{},initialSlide:0,slidesPerView:"auto",children:c[k].map(((e,t)=>0===t?null:(0,m.jsx)(r.JB,{children:(0,m.jsx)(L,{bookingRequest:e})},e.id)))})]}),y>0&&g[$]&&(0,m.jsxs)(r.VZ,{children:[(0,m.jsx)(r.Op,{children:"Recent stays"}),A?(0,m.jsx)(r.Di,{children:g[$].map((e=>(0,m.jsx)(F,{bookingRequest:e},e.id)))}):(0,m.jsx)(r.po,{className:"mySwiper",modules:[E.Vx,E.FJ,E.U1],navigation:!0,mousewheel:!0,freeMode:!0,pagination:{clickable:!0},loop:!1,onSlideChange:e=>{},initialSlide:0,slidesPerView:"auto",children:g[$].map((e=>(0,m.jsx)(r.JB,{children:(0,m.jsx)(F,{bookingRequest:e})},e.id)))})]})]})]})}}}]);
//# sourceMappingURL=7316.abcf34c7.chunk.js.map
//# debugId=f9be1e1b-cfbd-5649-8522-e95686e81b9f
