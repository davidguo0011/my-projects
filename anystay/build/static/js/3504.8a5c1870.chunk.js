"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a205e164-b660-5505-8582-f0a25e05dbe5")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[3504],{2383:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(2119),i=n(4936);const o=s.Ay.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 48px;
    margin-bottom: 40px;
    cursor: pointer;
`,a=s.Ay.div`
    width: 144px;
    height: 48px;
    font-size: 72px;
    font-weight: 600;
    background-color: ${i.J2.Grey3.color};
    display: flex;
    border-radius: ${i.Qk.radius_100.borderRadius};
    align-items: center;
    position: relative;
`,r=s.Ay.div`
    width: 77px;
    height: 40px;
    border-radius: ${i.Qk.radius_100.borderRadius};
    background-color: ${i.J2.White.color};
    font-size: ${i.$G.sans_400_semi.fontSize};
    font-weight: ${i.$G.sans_400_semi.fontWeight};
    line-height: ${i.$G.sans_400_semi.lineHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${i.dB.spacing_100.margin};
    box-shadow: ${i.E_.shadow_100.boxShadow};
    transition: margin-left 0.2s;
    margin-left: ${e=>"Ha"===e.areaUnit?"calc(100% - 77px - 4px)":"4px"};
    z-index: 2;
`,d=s.Ay.p`
    font-size: ${i.$G.sans_400_semi.fontSize};
    line-height: ${i.$G.sans_400_semi.lineHeight};
    font-weight: ${i.$G.sans_400_semi.fontWeight};
    color: ${i.J2.Grey.color};
    position: absolute;
    top: 14px;
    left: 28px;
    z-index: 1;
`,c=s.Ay.p`
    font-size: ${i.$G.sans_400_semi.fontSize};
    line-height: ${i.$G.sans_400_semi.lineHeight};
    font-weight: ${i.$G.sans_400_semi.fontWeight};
    color: ${i.J2.Grey.color};
    position: absolute;
    top: 14px;
    right: 28px;
    z-index: 1;
`;var l=n(579);const m=e=>{let{setAreaUnit:t,areaUnit:n}=e;return(0,l.jsx)(o,{onClick:()=>{t("Ha"===n?"m\xb2":"Ha")},children:(0,l.jsxs)(a,{children:[(0,l.jsx)(r,{areaUnit:n,children:""!==n?n:"m\xb2"}),(0,l.jsx)(d,{children:"m\xb2"}),(0,l.jsx)(c,{children:"Ha"})]})})}},441:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(2119),i=n(4936);const o=s.Ay.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`,a=s.Ay.p`
    margin: 0;
    margin-top: 48px;
    font-size: ${i.$G.sans_900_bold.fontSize};
    font-weight: ${i.$G.sans_900_bold.fontWeight};
    line-height: ${i.$G.sans_900_bold.lineHeight};

    @media (min-width: 768px) {
        font-size: ${i.$G.sans_1000_bold.fontSize};
        font-weight: ${i.$G.sans_1000_bold.fontWeight};
        line-height: ${i.$G.sans_1000_bold.lineHeight};
        margin-top: 0;
        display: flex;
        align-items: center;
    }
`,r=s.Ay.p`
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: ${i.$G.sans_400_semi.fontSize};
    font-weight: ${i.$G.sans_400_semi.fontWeight};
    line-height: ${i.$G.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 32px;
        font-size: ${i.$G.sans_500_semi.fontSize};
        line-height: ${i.$G.sans_500_semi.lineHeight};
    }
`,d=s.Ay.div`
    padding: 0 1px;
    width: fit-content;
    display: flex;
    gap: ${i.dB.spacing_300.gap} 12px;
    flex-wrap: wrap;
    overflow: visible;
    padding-bottom: 10px;
    margin-top: 12px;
    @media (min-width: 768px) {
        &::-webkit-scrollbar {
            display: none;
        }
    }
`,c=s.Ay.label`
    border-radius: ${i.Qk.radius_100.borderRadius};
    border: 1px solid ${i.J2.Grey1.color};
    display: flex;
    flex-direction: row;
    gap: ${i.dB.spacing_200.gap};
    align-items: center;
    cursor: pointer;
    padding: 10px 16px;
`,l=s.Ay.input`
    display: none;
`,m=s.Ay.img`
    height: 16px;
    width: 16px;
`,h=s.Ay.p`
    font-size: ${i.$G.sans_400.fontSize};
    line-height: ${i.$G.sans_400.lineHeight};
    font-weight: ${i.$G.sans_400.fontWeight};
    text-align: center;
`;var p=n(579);const g={suggestedAmenities:[{name:"Wifi",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Wifi.svg"},{name:"Aircon",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Aircon.svg"},{name:"Pool",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Pool.svg"},{name:"TV",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Television.svg"},{name:"Kitchen",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Kitchen.svg"},{name:"Toiletries",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Toiletries.svg"},{name:"Towels",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Towels.svg"},{name:"Bedding",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Bedding.svg"}],parking:[{name:"Free parking",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg"},{name:"Paid parking",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg"},{name:"Street parking",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg"},{name:"Valet parking",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Parking.svg"}],indoors:[{name:"Washer",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Washer.svg"},{name:"Dryer",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Dryer.svg"},{name:"Desk",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Desk.svg"},{name:"Cutlery",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Cutlery.svg"},{name:"Pots and pans",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/pots+and+pans.svg"},{name:"Dishwasher",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Dishwasher.svg"},{name:"Heating",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Heating.svg"},{name:"Iron",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Iron.svg"},{name:"Hair dryer",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Hair+dryer.svg"},{name:"Spa",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Spa.svg"},{name:"Safe",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Safe.svg"},{name:"BBQ",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/BBQ.svg"},{name:"Gym",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Gym.svg"},{name:"Lift",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Lift.svg"},{name:"Kettle",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Kettle.svg"},{name:"Microwave",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Microwave.svg"},{name:"Tea and coffee",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Tea+and+coffee.svg"},{name:"Bathtub",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Bathtub.svg"},{name:"Fridge",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Fridge.svg"},{name:"Vacuum",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Vacuum.svg"},{name:"High chair",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/High+chair.svg"},{name:"Alarm",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Alarm.svg"},{name:"Oven",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Oven.svg"},{name:"Ice maker",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Ice+maker.svg"},{name:"EV charger",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/EV+charger.svg"},{name:"Fireplace",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Fireplace.svg"},{name:"Video games",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Video+games.svg"},{name:"Books",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Books.svg"},{name:"Pool table",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Pool+table.svg"},{name:"Printer",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Printer.svg"},{name:"Hot tub",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Hot+tub.svg"},{name:"Pizza oven",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Pizza+oven.svg"},{name:"Chef's kitchen",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Chef's+kitchen.svg"},{name:"Cinema",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Cinema.svg"},{name:"Speakers",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Speakers.svg"},{name:"Cleaning products",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Cleaning+products.svg"},{name:"Outdoor shower",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Outdoor+shower.svg"},{name:"Hangers",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Hangers.svg"},{name:"Toys",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Toys.svg"},{name:"Stove",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Stove.svg"},{name:"Bicycle",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Bicycle.svg"},{name:"Soap",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Soap.svg"},{name:"Shampoo",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Shampoo.svg"},{name:"Conditioner",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Conditioner.svg"},{name:"Piano",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Piano.svg"},{name:"High speed internet",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/High+speed+internet.svg"},{name:"Room service",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Room+service.svg"},{name:"Reception desk",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Reception+desk.svg"},{name:"Toaster",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Toaster.svg"},{name:"Luggage storage",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Luggage+storage.svg"},{name:"Bar",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Bar.svg"},{name:"Beach essentials",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Beach+essentials.svg"},{name:"Balcony",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Balcony.svg"},{name:"Cooking basics",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Cooking+basics.svg"},{name:"Backyard",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Backyard.svg"},{name:"Linen",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Linen.svg"},{name:"Mosquito net",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Mosquito+net.svg"},{name:"Wood stove",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Wood+stove.svg"},{name:"Dry cleaning",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Dry+cleaning.svg"}],kitchenDining:[{name:"BBQ utensils",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/BBQ+utensils.svg"},{name:"Bread maker",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Bread+maker.svg"},{name:"Mini fridge",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Mini+fridge.svg"},{name:"Rice maker",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Rice+maker.svg"},{name:"Spices",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Spices.svg"},{name:"Trash compactor",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Trash+compactor.svg"},{name:"Thermomix",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Thermomix.svg"}],bathroom:[{name:"Bidet",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Bidet.svg"},{name:"Rain shower",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Rain+shower.svg"}],family:[{name:"Baby bath",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Baby+bath.svg"},{name:"Baby monitor",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Baby+monitor.svg"},{name:"Babysitting",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Babysitting.svg"},{name:"Children's books",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Children's+books.svg"},{name:"Child friendly utensils",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Child+friendly+utensils.svg"}],entertainment:[{name:"Ping pong",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Ping+pong.svg"},{name:"Record player",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Record+player.svg"},{name:"Netflix",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Netflix.svg"},{name:"Foxtel",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Foxtel.svg"},{name:"Playstation",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Playstation.svg"},{name:"Xbox",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Xbox.svg"},{name:"Prime",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Prime.svg"},{name:"Disney plus",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Disney+plus.svg"},{name:"HBO",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/HBO.svg"},{name:"Apple TV",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Apple+TV.svg"},{name:"Nintendo switch",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Nintendo+switch.svg"},{name:"Arcade",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Arcade.svg"}],outdoors:[{name:"Boat",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Boat.svg"},{name:"Tennis court",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Tennis+court.svg"},{name:"Fire pit",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Fire+pit.svg"},{name:"Golf",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Golf.svg"}],safety:[{name:"Safety gate",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Safety+gate.svg"},{name:"Carbon monoxide detector",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Carbon+monoxide+detector.svg"},{name:"Deadbolt",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Deadbolt.svg"},{name:"Keycard access",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Keycard+access.svg"},{name:"Fire extinguisher",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Fire+extinguisher.svg"},{name:"First aid kit",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/First+aid+kit.svg"},{name:"Outlet covers",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Outlet+covers.svg"},{name:"Alarm system",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Alarm+system.svg"},{name:"Smoke detector",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Smoke+detector.svg"}],accessibility:[{name:"Ceiling hoist",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Ceiling+hoist.svg"},{name:"Wide doorways",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Wide+doorways.svg"},{name:"Wheelchair access",src:"https://d292awxalydr86.cloudfront.net/Amenities+icons/Wheelchair+access.svg"}]},f={suggestedAmenities:"Suggested amenities",parking:"Parking",indoors:"Indoors",kitchenDining:"Kitchen & dining",bathroom:"Bathroom",entertainment:"Entertainment",safety:"Safety",family:"Family",outdoors:"Outdoors",accessibility:"Accessibility"};function x(e){let{amenities:t,addAmenitie:n,removeAmenitie:s,amenitiesTitle:x}=e;return(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{children:x||"Amenities"}),Object.entries(g).map((e=>{let[o,a]=e;return(0,p.jsxs)("div",{children:[(0,p.jsx)(r,{children:f[o]}),(0,p.jsx)(d,{children:a.map((e=>(0,p.jsxs)(c,{style:t.includes(e.name)?{border:`1px solid ${i.J2.Blue.color}`,outline:`1px solid ${i.J2.Blue.color}`}:{border:`1px solid ${i.J2.Grey1.color}`},children:[(0,p.jsx)(l,{type:"checkbox",checked:t.includes(e.name),onChange:()=>{t.includes(e.name)?s(e.name):n(e.name)}}),(0,p.jsx)(m,{src:e.src}),(0,p.jsx)(h,{children:e.name})]},e.name)))})]},o)}))]})}},9028:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(5043),i=n(2119),o=n(4936);const a=i.Ay.div`
    width: 100%;
    max-height: 150px;
    position: relative;
`,r=i.Ay.div`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 9px;
    border: 1px solid ${o.J2.Grey1.color};
    font-size: ${o.$G.sans_400.fontSize};
    font-weight: ${o.$G.sans_400.fontWeight};
    cursor: pointer;
    padding: 0 16px 0 16px;
`,d=i.Ay.img`
    width: 8px;
    height: 12px;
    transform: rotate(-90deg);
    transition: 0.1s;
    object-fit: cover;
`,c=i.Ay.ul`
    width: 100%;
    max-height: 253px;
    list-style: none;
    padding: 0;
    margin-top: 10px;
    border-radius: 9px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: ${o.J2.White.color};
    display: ${e=>e.isOpen?"block":"none"};
    overflow-y: scroll;
    z-index: 1000;
    position: absolute;

    @media screen and (max-width: 767px) {
        width: 100%;
        max-height: 248px;
    }
`,l=i.Ay.li`
    padding: ${o.dB.spacing_350.padding};
    z-index: 1000;
    height: 54px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: ${e=>e.selectedOption?o.J2.Grey4.color:"transparent"};

    &:hover {
        background-color: ${o.J2.Grey5.color};
    }
`;var m=n(9856),h=n(579);function p(e){let{options:t,onChange:n,placeholder:i,initialValue:o,styles:p}=e;const[g,f]=(0,s.useState)(null),[x,y]=(0,s.useState)(!1);(0,s.useEffect)((()=>{if(o){const e=t.find((e=>e.value===o.value));e&&f(e)}}),[o,t]);const u=(0,m.A)(x,(()=>{y(!1)}),!0);return(0,s.useEffect)((()=>{if(x&&g&&u.current){const e=u.current.querySelector(`[data-value="${g.value}"]`);if(e){const t=e.offsetTop-u.current.offsetTop;u.current.scrollTop=t}}}),[x,g,u]),(0,h.jsxs)(a,{children:[(0,h.jsxs)(r,{onClick:()=>{y(!x)},ref:u,children:[(0,h.jsx)("p",{children:g?g.label:i}),(0,h.jsx)(d,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",alt:"Select arrow"})]}),(0,h.jsx)(c,{isOpen:x,style:p,children:t.map(((e,t)=>(0,h.jsx)(l,{onMouseDown:()=>{return t=e,y(!1),f(t),void(n&&n(t));var t},selectedOption:g&&g.value===e.value||!1,children:e.label},t)))})]})}},6879:(e,t,n)=>{n.d(t,{A:()=>s});const s=(e,t)=>{const n=JSON.stringify({bucket:"anystayd5a42d592a26430fa01b77cb5f594d9743601-dev",key:`public/${e}`,edits:{resize:{width:t,fit:"cover"}}});return`https://d2x27wzwb18st4.cloudfront.net/${btoa(n)}`}}}]);
//# sourceMappingURL=3504.8a5c1870.chunk.js.map
//# debugId=a205e164-b660-5505-8582-f0a25e05dbe5
