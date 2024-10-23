"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f0a7dec9-bb28-5c04-acd9-c59a33bc35e4")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[5508],{9340:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(5043),o=n(3216),s=n(9942),r=n(579);const a=e=>{function t(e){Object.defineProperty(e,"ctrlKey",{value:!0})}(0,i.useEffect)((()=>(document.addEventListener("wheel",t,!0),()=>{document.removeEventListener("wheel",t,!0)})),[]);const[n,a]=i.useState(null),l=(0,o.zy)(),[d,c]=(0,i.useState)(window.innerWidth>=768&&window.innerWidth<=1024);(0,i.useEffect)((()=>{const e=()=>{c(window.innerWidth>=768&&window.innerWidth<=1024)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const p=(0,i.useMemo)((()=>l.pathname.includes("/your-stays")&&d),[l,d]),g=i.useCallback((function(t){setTimeout((()=>{const i=new window.google.maps.LatLngBounds({lat:e.lat,lng:e.lng});t.fitBounds(i),a(t),n&&window.google&&window.google.maps&&n.setOptions({zoomControlOptions:{position:window.google.maps.ControlPosition.TOP_RIGHT}})}),300)}),[e.lat,e.lng]),h=i.useCallback((function(){a(null)}),[]);return(0,r.jsx)(s.u6,{mapContainerStyle:e.containerStyle,center:{lat:p?e.lat+.006:e.lat,lng:e.lng},onLoad:g,onUnmount:h,options:{fullscreenControl:!1,disableDefaultUI:!0,minZoom:e.minZoom,zoom:e.zoom,styles:[{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#919191"}]},{featureType:"administrative.province",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#fbf4ed"}]},{featureType:"landscape.man_made",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{lightness:10}]},{featureType:"landscape.natural",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{lightness:25}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"on"}]},{featureType:"poi.attraction",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#c3e7a3"},{visibility:"on"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"poi.school",elementType:"geometry.fill",stylers:[{color:"#c3e7a3"},{visibility:"on"}]},{featureType:"poi.sports_complex",elementType:"geometry.fill",stylers:[{color:"#c3e7a3"},{visibility:"on"}]},{featureType:"poi.sports_complex",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#d1d1d1"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#737373"}]},{featureType:"road.highway.controlled_access",stylers:[{visibility:"on"}]},{featureType:"road.highway.controlled_access",elementType:"labels.icon",stylers:[{lightness:15}]},{featureType:"road.highway.controlled_access",elementType:"labels.text.fill",stylers:[{color:"#737373"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{lightness:35}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{lightness:30}]},{featureType:"transit",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#dbdbdb"}]},{featureType:"transit.station.airport",elementType:"geometry.fill",stylers:[{color:"#f2f2f2"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#a5e0f3"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#6aacc8"}]}],gestureHandling:"greedy",zoomControl:!!e.zoomControl,scrollwheel:e.scrollWheelZoom},children:(0,r.jsx)(s.X0,{position:{lat:e.lat,lng:e.lng},icon:"https://d292awxalydr86.cloudfront.net/Universal+icons/Map_marker.svg"})})},l=i.memo(a)},5508:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ge});var i=n(5043),o=n(2119),s=n(5475),r=n(4936);const a=o.Ay.div`
    width: 100%;
    height: 100%;
    background: ${r.J2.White.color};
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 600px 1fr;
        grid-template-rows: 84px 175px 140px auto;
    }
`,l=o.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    padding-top: 64px;
    padding-bottom: 24px;

    @media (min-width: 768px) {
        grid-column: 1/2;
        border-top: none;
        padding: 0;
        flex-direction: column-reverse;
        align-items: unset;
        justify-content: center;
    }
`,d=o.Ay.p`
    font-size: ${r.$G.sans_900_semi.fontSize};
    line-height: ${r.$G.sans_900_semi.lineHeight};
    font-weight: ${r.$G.sans_900_semi.fontWeight};
    color: ${r.J2.Black.color};
    margin: 0;

    @media (min-width: 768px) {
        margin-left: 16px;
    }
`,c=(o.Ay.button`
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
`,o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        margin-bottom: 8px;
    }
`,o.Ay.img`
    position: relative;
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    justify-self: flex-start;
    margin-right: auto;
`,o.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    gap: ${r.dB.spacing_300.gap};
    height: 132px;
    padding: ${r.dB.spacing_300.padding} 0;
    margin: 0 24px;
    border-bottom: 1px solid ${r.J2.Grey2.color};

    @media (min-width: 768px) {
        grid-column: 1/2;
        padding: ${r.dB.spacing_350.padding} 0;
        height: 152px;
    }
`),p=o.Ay.img`
    border-radius: 9px;
    height: 100px;
    width: 116px;
    object-fit: cover;

    @media (min-width: 768px) {
        width: 138px;
        height: 110px;
    }
`,g=o.Ay.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`,h=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 4px;
`,u=o.Ay.p`
    margin: 0;
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    font-weight: ${r.$G.sans_400.fontWeight};
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 240px;
    width: calc(100% - 24px);
`,f=o.Ay.img`
    position: absolute;
    margin-top: 48px;
    width: 8px;
    height: 14px;
    align-self: flex-end;
    justify-self: center;
    object-fit: cover;
    transform: rotate(180deg);
`,m=o.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    color: ${e=>e.confirmed||e.declined?r.J2.Black.color:r.J2.Yellow.color};
    margin: 0;
    margin-top: auto;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_400_semi.fontSize};
        line-height: ${r.$G.sans_400_semi.lineHeight};
    }
`,x=o.Ay.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    flex-direction: column;

    grid-column: 1/2;
    @media (min-width: 768px) {
        padding: 0 32px;
    }
`,y=(o.Ay.div`
    width: 100%;
    display: flex;
    gap: ${r.dB.spacing_400.gap};
    border-bottom: 1px solid ${r.J2.Grey2.color};
`,o.Ay.button`
    font-size: ${r.Ox.sans_button_200.fontSize};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    color: ${e=>e.selected?r.J2.Black.color:r.J2.Grey.color};
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    transition: 0.2s;
    padding-bottom: ${e=>e.selected?"9px":"12px"};
    border-bottom: ${e=>e.selected?`2px solid ${r.J2.Red.color}`:"none"};
    cursor: pointer;
`,o.Ay.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${r.dB.spacing_400.padding} 0;
    border: none;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    width: 100%;
    background: none;
    box-shadow: none;
    cursor: pointer;
`),b=o.Ay.div`
    background: none;
    border-radius: ${r.Qk.radius_8.borderRadius};
    text-decoration: none;
    border: none;
    color: ${r.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.$G.sans_300_bold.fontWeight};
    cursor: pointer;
`,$=o.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_100.gap};
`,_=o.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    margin: 0;
    text-align: left;
`,w=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${r.J2.Grey.color};
    margin: 0;
    width: fit-content;
`,j=o.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${r.dB.spacing_400.padding} 0;
    margin: 0 24px;
    border-bottom: 1px solid ${r.J2.Grey2.color};

    @media (min-width: 768px) {
        grid-column: 1/2;
        padding: 0;
    }
`,v=o.Ay.button`
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    color: ${r.J2.White.color};
    border: none;
    background: ${e=>e.selected?r.J2.Black.color:r.J2.Grey1.color};
    border-radius: 9px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 48px;
    }
`,A=o.Ay.div`
    min-height: calc(100vh - 80px);
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/5;
    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`,G=o.Ay.div`
    padding: ${r.dB.spacing_400.padding} ${r.dB.spacing_400.padding} ${r.dB.spacing_300.padding};
    width: 100%;
    border-radius: 14px 14px 0 0;
    background: ${r.J2.White.color};
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        height: fit-content;
        width: 560px;
        border-radius: 14px;
        padding: ${r.dB.spacing_400.padding};
    }
`,z=o.Ay.div`
    height: 65px;
    width: calc(100% - 48px);
    margin: 0 auto;
    border-bottom: 1px solid ${r.J2.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        width: calc(100% - 88px);
        height: 75px;
    }
`,T=o.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${r.$G.sans_400_semi.fontSize};
        line-height: ${r.$G.sans_400_semi.lineHeight};
    }
`,k=o.Ay.div`
    width: 100%;
    margin-top: auto;

    @media (min-width: 768px) {
        border: none;
    }
`,S=o.Ay.button`
    width: 100%;
    height: 48px;
    background: ${r.J2.Red.color};
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    border: none;
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    color: ${r.J2.White.color};
    cursor: pointer;

    @media (min-width: 768px) {
        width: 105px;
        margin-left: auto;
    }
`,W=o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,R=o.Ay.img`
    height: 64px;
    width: 64px;
    object-fit: cover;
    margin-bottom: 48px;
    margin-top: 96px;
    @media (min-width: 768px) {
        height: 80px;
        width: 80px;
        margin-bottom: 64px;
    }
`,J=o.Ay.p`
    font-size: ${r.$G.sans_600_bold.fontSize};
    line-height: ${r.$G.sans_600_bold.lineHeight};
    font-weight: ${r.$G.sans_600_bold.fontWeight};
    margin: 0;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_800_bold.fontSize};
        line-height: ${r.$G.sans_800_bold.lineHeight};
    }
`,H=o.Ay.p`
    max-width: 260px;
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    text-align: center;
    margin: 0;
    margin-top: 24px;
    @media (min-width: 768px) {
        font-size: ${r.$G.sans_400.fontSize};
        line-height: ${r.$G.sans_400.lineHeight};
        max-width: 290px;
        margin-top: 32px;
    }
`,O=o.Ay.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
`,C=o.Ay.div`
    display: flex;
    flex-direction: column;
    max-width: 246px;
    margin: ${r.dB.spacing_300.margin} auto 0;
    text-align: center;
`,B=o.Ay.p`
    font-size: ${r.$G.sans_500_semi.fontSize};
    font-weight: ${r.$G.sans_500_semi.fontWeight};
    line-height: ${r.$G.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;
    margin-top: 8px;
`,P=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 32px;
`,N=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`,q=o.Ay.button`
    padding: ${r.dB.spacing_400.padding} 0px;
    display: flex;
    align-items: center;
    border: none;
    text-align: left;
    background: none;
    cursor: pointer;
    border-top: 1px solid ${r.J2.Grey2.color};
    justify-content: space-between;

    @media (min-width: 768px) {
        padding: ${r.dB.spacing_500.padding} 0px;
    }
`,U=o.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_100.gap};
`,D=o.Ay.p`
    font-size: ${r.$G.sans_400_semi.fontSize};
    font-weight: ${r.$G.sans_400_semi.fontWeight};
    line-height: ${r.$G.sans_400_semi.lineHeight};
    margin: 0;
`,L=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${r.J2.Grey.color};
    margin: 0;
`,M=o.Ay.textarea`
    height: 240px;
    border-radius: 10px;
    padding: ${r.dB.spacing_300.padding};
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    border: 1px solid ${r.J2.Grey1.color};
    width: 100%;
    outline: none;
    resize: none;
    margin-bottom: 48px;

    &::placeholder {
        color: ${r.J2.Grey1.color};
    }
`,F=o.Ay.input`
    height: 110px;
    border-radius: ${r.Qk.radius_12.borderRadius};
    padding: ${r.dB.spacing_300.padding};
    font-size: ${r.$G.sans_1000_semi.fontSize};
    font-weight: ${r.$G.sans_1000_semi.fontWeight};
    line-height: ${r.$G.sans_1000_semi.lineHeight};
    border: 1px solid ${r.J2.Grey1.color};
    width: 100%;
    outline: none;
    display: flex;
    align-items: center;

    &::placeholder {
        color: ${r.J2.Grey1.color};
    }
`,I=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${r.J2.Red1.color};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin: 0;
    margin-top: 12px;
    margin-bottom: 96px;
    opacity: ${e=>e.invalid?1:0};
`,E=o.Ay.button`
    padding: 0 32px;
    height: 48px;
    background: ${r.J2.Red.color};
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    border: none;
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    color: ${r.J2.White.color};
    cursor: pointer;
`,Z=o.Ay.button`
    background: none;
    padding: 0;
    text-decoration: underline;
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    border: none;
    font-weight: ${r.Ox.sans_button_200.fontWeight};

    @media (min-width: 768px) {
        font-size: ${r.Ox.sans_button_300.fontSize};
        line-height: ${r.Ox.sans_button_300.lineHeight};
    }
`,Y=o.Ay.p`
    width: 100%;
    font-size: ${r.$G.sans_500_semi.fontSize};
    line-height: ${r.$G.sans_500_semi.lineHeight};
    font-weight: ${r.$G.sans_500_semi.fontWeight};
    margin-top: 8px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_600_semi.fontSize};
        line-height: ${r.$G.sans_600_semi.lineHeight};
    }
`,K=o.Ay.p`
    width: 100%;
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    font-weight: ${r.$G.sans_400.fontWeight};
    margin-top: 0px;
    margin-bottom: 32px;
`,Q=o.Ay.div`
    width: 100%;
    margin: 0 auto;
    height: 1px;
    background: ${r.J2.Grey2.color};
`,X=(0,o.Ay)(s.N_)`
    text-decoration: none;
    cursor: pointer;
`,V=o.Ay.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    min-height: 632px;
    background: ${r.J2.White.color};
    border-radius: 25px 25px 0px 0px;
    box-shadow: ${r.E_.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 102;
    @media (min-width: 768px) {
        height: 622px;
        width: 560px;
        border-radius: 14px;
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        bottom: 0;
        top: 0;
    }
`,ee=o.Ay.a`
    padding: 0;
    text-decoration: underline;
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
`,te=(o.Ay.a`
    padding: 0;
    color: ${r.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.$G.sans_300_bold.fontWeight};
    height: 50px;
    width: 156px;
    border-radius: 9px;
    border: none;
    background: ${r.J2.Red.color};
`,o.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`),ne=o.Ay.img`
    width: 64px;
    height: 64px;
    margin-top: 148px;
    object-fit: cover;
    margin-bottom: 48px;
`,ie=o.Ay.p`
    font-size: ${r.$G.sans_600_bold.fontSize};
    line-height: ${r.$G.sans_600_bold.lineHeight};
    font-weight: ${r.$G.sans_600_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
`,oe=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    margin: 0 auto;
    max-width: 170px;
    margin-top: 16px;
    text-align: center;
`;var se=n(6879),re=n(579);function ae(e){let{payment:t}=e;return t.paymentIntent?(0,re.jsxs)(y,{type:"button",onClick:()=>window.open(t.charge.receipt_url,"_blank"),children:[(0,re.jsxs)($,{children:[t.charge.amount_refunded&&t.charge.amount_refunded>0?(0,re.jsxs)(_,{children:["$",((t.charge.amount-t.charge.amount_refunded)/100).toFixed(2)," (-$",(t.charge.amount_refunded/100).toFixed(2),")"]}):(0,re.jsxs)(_,{children:["$",(t.charge.amount/100).toFixed(2)]}),(0,re.jsx)(w,{children:(()=>{if(t.charge.amount_refunded&&t.charge.amount_refunded>0)return"Refunded";{let e=(e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e])(new Date(1e3*t.charge.created).getMonth());return`Paid on ${new Date(1e3*t.charge.created).getDate()} ${e}`}})()})]}),(0,re.jsx)(b,{children:(0,re.jsx)(f,{style:{margin:0},src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"Listing header button"})})]}):null}var le=n(9697);function de(e){let{togglePopup:t}=e;return(0,re.jsx)(le.A,{children:(0,re.jsxs)(G,{children:[(0,re.jsx)(z,{children:(0,re.jsx)(T,{children:"Region not supported"})}),(0,re.jsxs)(W,{children:[(0,re.jsx)(R,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Unavailable icon"}),(0,re.jsx)(J,{children:"Feature unavailable"}),(0,re.jsx)(H,{children:"Custom payments are not available in your region yet."})]}),(0,re.jsx)(k,{children:(0,re.jsx)(S,{type:"button",onClick:t,children:"Done"})})]})})}var ce=n(1372),pe=n(9856);function ge(e){let{togglePopup:t,toggleNext:n,updateRefundReason:i}=e;const o=(0,pe.A)(!0,t);return(0,re.jsx)(ce.A,{ref:o,backBtnType:"Arrow",closePopup:t,noContinueBtn:!0,children:(0,re.jsxs)(G,{children:[(0,re.jsxs)(C,{children:[(0,re.jsx)(B,{children:"Request refund"}),(0,re.jsx)(P,{children:"Your host has 24 hours to respond to your refund request."})]}),(0,re.jsxs)(N,{children:[(0,re.jsxs)(q,{onClick:()=>{i("Booking related"),n(),t()},children:[(0,re.jsxs)(U,{children:[(0,re.jsx)(D,{children:"Booking related"}),(0,re.jsx)(L,{children:"Refund for booking related issues"})]}),(0,re.jsx)(O,{style:{transform:"rotate(180deg)"},src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"refund backl button"})]}),(0,re.jsxs)(q,{onClick:()=>{i("Property related"),n(),t()},children:[(0,re.jsxs)(U,{children:[(0,re.jsx)(D,{children:"Property related"}),(0,re.jsx)(L,{children:"Refund for property related issues"})]}),(0,re.jsx)(O,{style:{transform:"rotate(180deg)"},src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"refund backl button"})]}),(0,re.jsxs)(q,{onClick:()=>{i("Service related"),n(),t()},children:[(0,re.jsxs)(U,{children:[(0,re.jsx)(D,{children:"Service related"}),(0,re.jsx)(L,{children:"Refund for service related issues"})]}),(0,re.jsx)(O,{style:{transform:"rotate(180deg)"},src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"refund backl button"})]}),(0,re.jsxs)(q,{onClick:()=>{i("Other reasons"),n(),t()},children:[(0,re.jsxs)(U,{children:[(0,re.jsx)(D,{children:"Other reasons"}),(0,re.jsx)(L,{children:"Please describe the issue for your refund"})]}),(0,re.jsx)(O,{style:{transform:"rotate(180deg)"},src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"refund backl button"})]})]})]})})}function he(e){let{togglePopup:t,updateRefundMessage:n,createRefundRequest:o,toggleNext:s,refundMessage:r}=e;const[a,l]=(0,i.useState)(!1),d=(0,pe.A)(!0,t);return(0,re.jsx)(ce.A,{ref:d,backBtnType:"Arrow",closePopup:t,handleSave:async()=>{l(!0),await o(),l(!1),s(),t()},disable:a,isContinueBtnLoading:a,btnColor:"red",btnText:"Request",children:(0,re.jsxs)(G,{children:[(0,re.jsxs)(C,{children:[(0,re.jsx)(B,{children:"Refund details"}),(0,re.jsx)(P,{children:"Share the reason for your refund and your ideal refund amount."})]}),(0,re.jsx)(M,{value:r,onChange:e=>n(e.target.value),placeholder:"Start writing here"})]})})}function ue(e){let{togglePopup:t,updateRefundAmount:n,paymentAmount:o,toggleNext:s}=e;const[r,a]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[c,p]=(0,i.useState)(""),g=(0,pe.A)(!0,t);return(0,re.jsx)(ce.A,{ref:g,backBtnType:"Arrow",closePopup:t,handleSave:()=>{""===c?d(!0):Number((100*Number(c)).toFixed())>o?a(!0):(n(Number((100*Number(c)).toFixed())),s(),t())},btnColor:"red",btnText:"Continue",children:(0,re.jsxs)(G,{children:[(0,re.jsxs)(C,{children:[(0,re.jsx)(B,{children:"Refund amount"}),(0,re.jsx)(P,{children:"Please select the amount you are requesting to be refunded."})]}),(0,re.jsx)(F,{onKeyDown:e=>{const{key:t}=e;"."===t&&c.includes(".")||""===c&&"."===t||""===c&&","===t||(p((e=>{let n=e;if("Backspace"===t)n=n.substring(0,n.length-1);else if(!Number.isNaN(parseInt(t))||","===t||"."===t){const i=c.split(".");if(c.includes(".")&&2===i.length&&i[1].length>=2&&"Backspace"!==t)return e;n+=t}return n})),a(!1))},value:""!==c?`$${c}`:"",onChange:e=>{},placeholder:"$0.00"}),(0,re.jsx)(I,{invalid:r||l,children:r?`You can request a maximum of ${Number(o/100).toFixed(2)}`:"Please enter a valid amount"})]})})}function fe(e){let{togglePopup:t}=e;return(0,re.jsx)(ce.A,{noBackBtn:!0,noContinueBtn:!0,closePopup:t,children:(0,re.jsxs)(G,{children:[(0,re.jsx)(Y,{children:"Request sent"}),(0,re.jsx)(K,{children:"You have successfully sent a refund request, your host has 24 hours to respond."}),(0,re.jsx)(Q,{}),(0,re.jsx)(Y,{children:"Our commitment"}),(0,re.jsx)(K,{children:"We are committed to providing you with a perfect accomodation experience. On the rare occasion of things going wrong, rest assured knowing our friendly support team is here to help you out."}),(0,re.jsxs)(k,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,re.jsx)(Z,{type:"button",onClick:t,children:"Contact host"}),(0,re.jsx)(E,{type:"button",onClick:t,children:"Done"})]})]})})}var me=n(4204);function xe(e){let{togglePopup:t}=e;return(0,re.jsx)(le.A,{children:(0,re.jsxs)(V,{children:[(0,re.jsx)(ne,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:""}),(0,re.jsx)(ie,{children:"Refund unavailable"}),(0,re.jsx)(oe,{children:"Refund requests are not currently available."}),(0,re.jsxs)(te,{children:[(0,re.jsx)(ee,{className:"intercom_custom_launcher",href:"#",children:"Get support"}),(0,re.jsx)(me.A,{isLoading:!1,disabled:!1,background:"red",onClick:t,children:"Done"})]})]})})}var ye=n(4677),be=n(9340),$e=n(3216),_e=n(9082),we=n(831),je=n(7426),ve=n(8306),Ae=n(1852);function Ge(){const[e,t]=(0,we.useRecoilState)(_e.H),[n,o]=(0,i.useState)(!1),[s,r]=(0,i.useState)(!1),[y,b]=(0,i.useState)(!1),[$,_]=(0,i.useState)(!1),[w,G]=(0,i.useState)(!1),[z,T]=(0,i.useState)(!1),[k,S]=(0,i.useState)(""),[W,R]=(0,i.useState)(""),[J,H]=(0,i.useState)(0),[O,C]=(0,i.useState)(!1),[B,P]=(0,i.useState)(!1),[N,q]=(0,i.useState)(null),[U,D]=(0,i.useState)(null),[L,M]=(0,i.useState)([]),[F,I]=(0,i.useState)(!0),{id:E}=(0,$e.g)(),Z=(0,$e.Zp)(),Y=(0,i.useCallback)((async()=>{let t=await(0,je.p)("get","dev-anystay-booking",`booking/${E}`,{headers:{Authorization:e,bookingId:E}});t=t.body.bookingRequest;let n=await(0,je.p)("get","dev-anystay-booking",`booking/payments/${E}`,{headers:{Authorization:e,bookingId:E}}),i=!0;(t.changeRequested||t.refundRequested||!0!==t.confirmed)&&(i=!1),C(t.refundRequested),q(t.ListingModel),D(t),P(i),M(n.body.payments),I(!1)}),[E,e]);(0,i.useEffect)((()=>{Y()}),[Y]);return!F&&U&&N?(0,re.jsxs)(i.Fragment,{children:[(0,re.jsx)(ve.A,{title:`${U.confirmationCode} | Anystay`}),(0,re.jsxs)(a,{children:[(0,re.jsx)(l,{children:(0,re.jsxs)("div",{style:{display:"flex",alignItems:"center",maxWidth:"fit-content"},children:[(0,re.jsx)(Ae.A,{onClick:()=>{Z(-1)},type:"Arrow",mobileTop:24,mobileLeft:24}),(0,re.jsx)(d,{children:U.refundedAmount?`$${(U.paymentAmount/100).toFixed(2)} (-$${(U.refundedAmount/100).toFixed(2)}) AUD`:`$${(U.paymentAmount/100).toFixed(2)} AUD`})]})}),(0,re.jsx)(X,{to:`/your-booking/${E}`,children:(0,re.jsxs)(c,{children:[(0,re.jsx)(p,{src:(0,se.A)(JSON.parse(N.listingImages[0]).key,500),alt:"Manage payments listing featured image"}),(0,re.jsxs)(g,{children:[(0,re.jsx)(h,{children:(()=>{let e="House";switch(N.typeOfPlace){case"entire-place":e="Entire place";break;case"private-room":e="Private room";break;case"shared-room":e="Shared room"}return e})()}),(0,re.jsx)(u,{children:N.propertyTitle}),(0,re.jsx)(m,{confirmed:U.confirmed,declined:U.declined,children:U&&U.cancelled?"Cancelled":O?"Refund requested":U.confirmed?"Confirmed":U.declined?"Declined":"Requested"}),(0,re.jsx)(f,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"Listing header button"})]})]})}),(0,re.jsx)(j,{children:(0,re.jsx)(v,{type:"button",selected:B&&U.paymentAmount>0,onClick:()=>{B&&U.paymentAmount>0&&b(!0)},children:"Request refund"})}),(0,re.jsx)(x,{children:L.length>0&&(0,re.jsx)("div",{children:L.map(((e,t)=>(0,re.jsx)(ae,{payment:e},t)))})}),(0,re.jsx)(A,{children:(0,re.jsx)(be.A,{containerStyle:{width:"100%",height:"100vh",borderRadius:"0px",position:"absolute",bottom:-25},lat:JSON.parse(N.location).lat,lng:JSON.parse(N.location).lon,zoom:16,minZoom:13})})]}),n&&(0,re.jsx)(de,{togglePopup:()=>o(!1)}),y&&(0,re.jsx)(ge,{updateRefundReason:e=>{R(e)},toggleNext:()=>r(!0),togglePopup:()=>b(!1)}),s&&(0,re.jsx)(ue,{paymentAmount:U.paymentAmount,updateRefundAmount:e=>{H(e)},toggleNext:()=>_(!0),togglePopup:()=>r(!1)}),$&&(0,re.jsx)(he,{createRefundRequest:async()=>{B&&await(0,je.p)("put","dev-anystay-booking","booking/guest/refund",{headers:{Authorization:e,bookingId:E},body:{bookingRequestID:E,refundReason:W,refundMessage:k,refundAmount:J}}).then((e=>{console.log(e),e.success&&(C(!0),P(!1))})).catch((e=>{console.log(e)}))},refundMessage:k,toggleNext:()=>G(!0),updateRefundMessage:e=>{S(e)},togglePopup:()=>_(!1)}),w&&(0,re.jsx)(fe,{togglePopup:()=>G(!1)}),z&&(0,re.jsx)(xe,{togglePopup:()=>T(!1)})]}):(0,re.jsx)(ye.A,{reverse:!0,guestMode:!0})}},6879:(e,t,n)=>{n.d(t,{A:()=>i});const i=(e,t)=>{const n=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${e}`,edits:{resize:{width:t,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(n)}`}}}]);
//# sourceMappingURL=5508.048dd2a0.chunk.js.map
//# debugId=f0a7dec9-bb28-5c04-acd9-c59a33bc35e4
