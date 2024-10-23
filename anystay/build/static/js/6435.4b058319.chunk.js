"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0ff57aed-a2fe-5962-a950-76b3af55788a")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[6435],{9820:(i,e,n)=>{n.d(e,{A:()=>g});var t=n(2119),o=n(4936);const s=t.Ay.button`
    height: ${i=>i.size?i.size:"80px"};
    border-radius: ${o.Qk.radius_100.borderRadius};
    width: ${i=>i.size?i.size:"80px"};
    position: relative;
    background: ${i=>i.disabled?o.J2.Grey1.color:"red"===i.background?o.J2.Red.color:"blue"===i.background?o.J2.Blue.color:"black"===i.background?o.J2.Black.color:"grey"===i.background?o.J2.Grey1.color:"white"===i.background?o.J2.White.color:void 0};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${o.Ox.sans_button_200.fontSize};
    font-weight: ${o.Ox.sans_button_200.fontWeight};
    color: ${i=>i.isLoading?"transparent":o.J2.White.color};
    margin-top: auto;
    line-height: ${o.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${o.E_.shadow_100.boxShadow};
    transition:
        transform 0.2s,
        box-shadow 0.2s;
    &:hover {
        transform: ${i=>i.disabled?"none":"translateY(-5px)"};
        box-shadow: ${i=>i.disabled?"1px 3px 12px 0px rgba(0, 0, 0, 0.1)":"1px 3px 12px 0px rgba(0, 0, 0, 0.3)"};
    }

    &:active {
        transform: ${i=>i.disabled?"none":"translateY(0)"};
        box-shadow: ${i=>(i.disabled,"none")};
    }
`,a=t.Ay.img`
    width: ${i=>i.iconSize?i.iconSize:"40px"};
    display: flex;
    align-items: center;
    justify-content: center;
`;var r=n(308),d=n(579);const g=i=>{let{isLoading:e,children:n,disabled:t,background:o,src:g,iconSize:p,size:h,...l}=i;return(0,d.jsxs)(s,{...l,background:o,disabled:t,isLoading:e||!1,size:h,children:[e&&(0,d.jsx)(r.A,{height:"14px",color:"white",width:"32px",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n,!e&&(0,d.jsx)(a,{src:g||"https://d292awxalydr86.cloudfront.net/Universal+icons/Next.svg",alt:"Arrow Btn",iconSize:p})]})}},454:(i,e,n)=>{n.d(e,{$S:()=>ti,A3:()=>v,A4:()=>W,AM:()=>C,Av:()=>Ri,CZ:()=>L,D:()=>ai,D1:()=>r,E7:()=>O,EW:()=>X,EY:()=>d,Eu:()=>hi,F1:()=>K,FE:()=>Li,FF:()=>vi,Fy:()=>x,GE:()=>Yi,GR:()=>Ii,Gd:()=>J,Hc:()=>ji,Hu:()=>Ji,I8:()=>Pi,JL:()=>yi,Ji:()=>$i,K4:()=>fi,Kh:()=>Ai,Kt:()=>m,Ku:()=>Q,Li:()=>j,Lq:()=>di,N0:()=>A,NN:()=>Oi,Nf:()=>M,No:()=>I,P9:()=>l,Q9:()=>ei,Qc:()=>ui,RT:()=>gi,RY:()=>H,UM:()=>xi,UT:()=>li,VL:()=>Wi,Vl:()=>qi,Vz:()=>Xi,Wt:()=>Vi,X5:()=>bi,X9:()=>G,Y:()=>Fi,YT:()=>V,YZ:()=>E,Yh:()=>b,Ym:()=>wi,Yp:()=>Zi,a6:()=>z,aG:()=>y,aP:()=>Si,aW:()=>Ni,aZ:()=>Ti,ae:()=>oi,dm:()=>Ki,eJ:()=>a,eZ:()=>_i,fb:()=>w,gY:()=>S,gZ:()=>q,g_:()=>Qi,gp:()=>c,he:()=>u,i$:()=>k,ig:()=>Z,jR:()=>Di,kL:()=>p,kR:()=>Hi,ks:()=>U,ld:()=>B,li:()=>Ci,ll:()=>P,mN:()=>h,nH:()=>$,nl:()=>Ui,nz:()=>g,oC:()=>ki,oJ:()=>F,oZ:()=>_,om:()=>ri,pD:()=>Y,pY:()=>si,qA:()=>ii,rK:()=>mi,s5:()=>R,tl:()=>Mi,tu:()=>f,uK:()=>Gi,v1:()=>ni,vH:()=>Ei,vJ:()=>T,vM:()=>D,xd:()=>zi,xr:()=>Bi,xs:()=>pi,yk:()=>N,zg:()=>ci});var t=n(2119),o=n(620),s=n(4936);const a=t.Ay.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`,r=t.Ay.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${s.dB.spacing_400.padding} ${s.dB.spacing_400.padding} 0;
    height: 60px;
    @media (min-width: 768px) {
        height: 80px;
        padding: ${s.dB.spacing_500.padding} ${s.dB.spacing_500.padding} 0;
    }
`,d=t.Ay.div`
    width: 100%;
    height: calc(100% - 60px);
    overflow: auto;
    @media (min-width: 768px) {
        height: calc(100% - 80px);
    }
    ::-webkit-scrollbar {
        display: none;
    }
`,g=t.Ay.div`
    width: 100%;
    height: 100%;
    padding: 0 24px 24px;
    margin: auto;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        padding: ${s.dB.spacing_200.padding} 0 ${s.dB.spacing_500.padding};
        width: 640px;
    }
`,p=t.Ay.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
`,h=t.Ay.div`
    flex-shrink: 0;
    display: flex;
    gap: ${s.dB.spacing_400.gap};
    width: 100%;
    overflow-x: scroll;
    padding: ${s.dB.spacing_400.padding} ${s.dB.spacing_300.padding};
    margin: 0 -16px;
    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        position: unset;
        margin: ${s.dB.spacing_600.margin} 0 0;
        width: 100%;
        padding: 0;
        overflow: visible;
    }
`,l=t.Ay.p`
    margin-top: 52px;
    margin-bottom: 24px;
    font-size: ${s.$G.sans_700_semi.fontSize};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    line-height: ${s.$G.sans_700_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 64px;
    }
`,$=t.Ay.div`
    border: ${i=>i.selected?`2px solid ${s.J2.Black.color}`:`2px solid ${s.J2.White.color}`};
    border-radius: ${s.Qk.radius_12.borderRadius};
    cursor: pointer;
    padding: ${s.dB.spacing_400.padding};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    min-width: 280px;
    @media (min-width: 768px) {
        margin: 0;
        width: calc((100% - 24px) / 2);
    }
`,m=t.Ay.div`
    height: 29%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 768px) {
        height: 31%;
    }
`,x=t.Ay.div`
    height: 64px;
    width: 100%;
    display: flex;
    gap: ${s.dB.spacing_300.gap};
    margin-bottom: 24px;
    cursor: pointer;
`,f=t.Ay.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`,_=t.Ay.div`
    width: 64px;
    height: 64px;
    border-radius: 10px;
    background-color: ${s.J2.Grey2.color};
`,c=t.Ay.div`
    display: flex;
    flex-direction: column;
`,y=t.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,w=t.Ay.img`
    width: 128px;
    height: 128px;
    margin: 64px;
`,G=t.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    margin-top: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-right: 24px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_400_semi.fontSize};
        line-height: ${s.$G.sans_400_semi.lineHeight};
    }
`,b=t.Ay.p`
    font-size: ${s.$G.sans_300_semi.fontSize};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    margin-bottom: 4px;
    @media (min-width: 768px) {
        font-size: ${s.$G.sans_400_semi.fontSize};
        line-height: ${s.$G.sans_400_semi.lineHeight};
    }
`,u=t.Ay.p`
    color: ${s.J2.Grey.color};
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    font-weight: ${s.$G.sans_300.fontWeight};

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_400.fontSize};
        line-height: ${s.$G.sans_400.lineHeight};
    }
`,z=t.Ay.div`
    height: 80px;
    position: absolute;
    right: 0;
    bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        z-index: 100;
    }
`,A=t.Ay.div`
    // height: calc(100vh - 105px);
    height: fit-content;

    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        height: auto;
    }
`,v=t.Ay.p`
    margin: 0;
    margin-top: 48px;
    font-size: ${s.$G.sans_900_semi.fontSize};
    font-weight: ${s.$G.sans_900_semi.fontWeight};
    line-height: ${s.$G.sans_900_semi.lineHeight};

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_1000_semi.fontSize};
        font-weight: ${s.$G.sans_1000_semi.fontWeight};
        line-height: ${s.$G.sans_1000_semi.lineHeight};
        margin-top: 32px;
        display: flex;
        align-items: center;
    }
`,S=t.Ay.p`
    margin: 0;
    margin-top: 48px;
    font-size: ${s.$G.sans_900_semi.fontSize};
    font-weight: ${s.$G.sans_900_semi.fontWeight};
    line-height: ${s.$G.sans_900_semi.lineHeight};

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_1000_semi.fontSize};
        font-weight: ${s.$G.sans_1000_semi.fontWeight};
        line-height: ${s.$G.sans_1000_semi.lineHeight};
        margin-top: 32px;
        display: flex;
        align-items: center;
    }
`,H=t.Ay.p`
    margin: 0;
    margin-top: 10px;
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    color: ${s.J2.Grey.color};
    line-height: ${s.$G.sans_400.lineHeight};

    @media (min-width: 768px) {
        margin-top: 8px;
        font-size: ${s.$G.sans_500.fontSize};
        line-height: ${s.$G.sans_500.lineHeight};
    }
`,W=t.Ay.p`
    color: ${s.J2.Grey.color};
    font-size: ${s.$G.sans_500.fontSize};
    font-weight: ${s.$G.sans_500.fontWeight};
    line-height: ${s.$G.sans_500.lineHeight};
    margin: ${s.dB.spacing_200.margin} 0px 0px 0px;
`,k=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    line-height: ${s.$G.sans_400.lineHeight};
    font-weight: ${s.$G.sans_400.fontWeight};
    color: ${i=>i.invalidAddress?s.J2.Red.color:s.J2.Grey.color};
    margin-top: 8px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_500.fontSize};
        line-height: ${s.$G.sans_500.lineHeight};
        margin-bottom: 32px;
    }
`,J=t.Ay.div`
    margin-top: 16px;
    border-radius: 12px;
    border: 1px solid ${s.J2.Grey1.color};
    height: 284px;
    width: 100%;
    max-width: 640px;
`,B=t.Ay.div`
    padding: 9px 16px;
    border-bottom: 1px solid ${s.J2.Grey1.color};
    height: 56px;
    cursor: not-allowed;
    &:last-child {
        border: none;
    }
`,j=t.Ay.div`
    font-size: ${s.$G.sans_200_med.fontSize};
    font-weight: ${s.$G.sans_200_med.fontWeight};
    line-height: ${s.$G.sans_200_med.lineHeight};
    color: ${s.J2.Grey.color};
    margin-bottom: 2px;
`,R=t.Ay.div`
    font-size: ${s.$G.sans_400_med.fontSize};
    font-weight: ${s.$G.sans_400_med.fontWeight};
    line-height: ${s.$G.sans_400_med.lineHeight};
`,Q=t.Ay.input`
    width: 100%;
    height: 100%;
    font-size: ${s.$G.sans_400_med.fontSize};
    line-height: ${s.$G.sans_400_med.lineHeight};
    font-weight: ${s.$G.sans_400_med.fontWeight};
    border: none;
    outline: none;

    &::placeholder {
        color: ${s.J2.Grey.color};
    }
`,Y=t.Ay.div`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    border: 1px solid ${s.J2.Grey1.color};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
`,E=(0,t.Ay)(o.default)`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    color: ${s.J2.Grey1.color};
    line-height: ${s.$G.sans_400.lineHeight};
    padding-left: 16px;
    padding-right: 50px;
    outline: none;
    grid-row: 1/2;
    grid-column: 1/2;
    border: none;
    height: 100%;
`,O=t.Ay.label`
    /* position: relative; */
    /* width: calc(100% - 16px); */
    width: 100%;
    border-radius: ${s.Qk.radius_12.borderRadius};
    border: 1px solid ${s.J2.Grey1.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-top: 16px; */
    cursor: pointer;

    @media (min-width: 768px) {
    }
`,L=t.Ay.input`
    height: 0;
    width: 0;
`,K=t.Ay.img`
    height: 24px;
    width: 24px;
    margin: 0 auto;
    padding: 0;
    margin-top: 24px;

    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
        margin-top: 32px;
    }
`,N=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    line-height: ${s.$G.sans_400.lineHeight};
    font-weight: ${s.$G.sans_400.fontWeight};
    text-align: center;
    margin-top: 12px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 32px;
    }
`,Z=t.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    margin-bottom: 16px;
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    margin-top: 32px;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_500_semi.fontSize};
        line-height: ${s.$G.sans_500_semi.lineHeight};
        margin-top: 48px;
    }
`,F=t.Ay.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`,T=(t.Ay.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    @media (max-width: 767px) {
        overflow: scroll;
    }
`,t.Ay.p`
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        margin-top: 48px;
        font-size: ${s.$G.sans_500_semi.fontSize};
        line-height: ${s.$G.sans_500_semi.lineHeight};
    }
`),C=t.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${s.J2.Grey.color};
    height: 48px;
    background-color: ${s.J2.Grey3.color};
    border-radius: 9px;
    margin-top: 20px;
    font-size: ${s.$G.sans_300.fontSize};
`,D=t.Ay.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow-x: visible;
    grid-gap: ${s.dB.spacing_300.gap};
    padding-bottom: 120px;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`,M=(t.Ay.div`
    padding: 0 1px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: visible;
    grid-gap: ${s.dB.spacing_300.gap};
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`,t.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`),U=t.Ay.p`
    margin-top: 32px;
    margin-bottom: 4px;
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_500_semi.fontSize};
        line-height: ${s.$G.sans_500_semi.lineHeight};
        margin-top: 48px;
    }
`,V=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    margin-top: 0;
    font-weight: ${s.$G.sans_300.fontWeight};
    color: ${s.J2.Grey.color};
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_400.fontSize};
        line-height: ${s.$G.sans_400.lineHeight};
    }
`,q=t.Ay.p`
    font-size: ${s.$G.sans_300.fontSize};
    line-height: ${s.$G.sans_300.lineHeight};
    margin-top: 12px;
    font-weight: ${s.$G.sans_300.fontWeight};
    color: ${s.J2.Grey.color};
    margin-bottom: 0;
`,P=t.Ay.p`
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    font-size: ${s.$G.sans_300_semi.fontSize};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    margin: 0;
    text-align: right;
    width: 100%;
    padding: 0;
`,X=t.Ay.textarea`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: ${i=>"title"===i.textAreaType?"134px;":"320px"};
    font-size: ${i=>i.description?s.so.sans_text_300.fontSize:s.$G.sans_900_semi.fontSize};
    line-height: ${i=>i.description?s.so.sans_text_300.lineHeight:s.$G.sans_900_semi.lineHeight};
    font-weight: ${i=>i.description?s.so.sans_text_300.fontWeight:s.$G.sans_900_semi.fontWeight};
    padding: ${s.dB.spacing_300.padding};
    border-radius: ${s.Qk.radius_12.borderRadius} !important;
    border: 1px solid ${s.J2.Grey2.color};
    outline: none;
    margin-top: 24px;
    margin-bottom: 16px;
    resize: none;

    @media (min-width: 768px) {
        height: ${i=>"title"===i.textAreaType?"177px;":"448px"};
        font-size: ${i=>i.description?s.$G.sans_400.fontSize:s.$G.sans_1000.fontSize};
        padding: ${s.dB.spacing_350.padding};
        margin-top: 32px;
    }

    &::placeholder {
        font-size: ${i=>i.description?s.$G.sans_400.fontSize:s.$G.sans_1000_semi.fontSize};
        line-height: ${i=>i.description?s.$G.sans_400.lineHeight:s.$G.sans_1000_semi.lineHeight};
        font-weight: ${i=>i.description?s.$G.sans_400.fontWeight:s.$G.sans_1000_semi.fontWeight};
        color: ${s.J2.Grey1.color};
        padding-top: 0px;
        padding-right: 12px;
    }
`,I=t.Ay.div`
    display: grid;
    grid-template-columns: 1fr 124px;
    margin-top: 32px;
`,ii=t.Ay.input`
    width: calc(100% - 16px);
    height: 100%;
    font-size: ${s.$G.sans_1000_semi.fontSize};
    font-weight: ${s.$G.sans_1000_semi.fontWeight};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    line-height: ${s.$G.sans_1000_semi.lineHeight};
    padding-left: 8px;
    border-radius: ${s.Qk.radius_12.borderRadius};
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &::placeholder {
        color: ${s.J2.Grey1.color};
    }
`,ei=t.Ay.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: 1px solid ${s.J2.Grey1.color};
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background: ${s.J2.Grey5.color};
    }
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
`,ni=t.Ay.div`
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.2s;
    &:after {
        position: absolute;
        display: block;
        content: "";
        width: 11px;
        height: 11px;
        top: -3.33px;
        border-bottom: solid 1px ${s.J2.Black.color};
        transform: translatex(3.55px);
    }

    &:before {
        position: absolute;
        display: block;
        content: "";
        width: 7.5px;
        height: 7.5px;
        border-top: solid 1px ${s.J2.Black.color};
        border-left: solid 1px ${s.J2.Black.color};
        top: 50%;
        left: 2px;
        transform-origin: 0% 0%;
        transform: rotatez(-45deg);
    }
`,ti=t.Ay.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap: ${s.dB.spacing_400.gap};

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`,oi=t.Ay.div`
    display: flex;
    align-items: center;
`,si=t.Ay.img`
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    margin-right: 16px;
    @media (min-width: 768px) {
        height: 21px;
        width: 21px;
    }
`,ai=t.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    text-decoration: underline;
    margin: 0;
    padding: 0;
    cursor: pointer;
`,ri=t.Ay.div`
    border-radius: ${s.Qk.radius_12.borderRadius};
    margin-top: 32px;
    width: 100%;
    overflow: hidden;
    height: 240px;

    @media (min-width: 768px) {
        height: 400px;
    }
`,di=t.Ay.p`
    font-size: ${s.$G.sans_1000_semi.fontSize};
    font-weight: ${s.$G.sans_1000_semi.fontWeight};
    line-height: ${s.$G.sans_1000_semi.lineHeight};
    margin: 0;
    margin-top: 32px;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        margin-top: 48px;
        font-size: ${s.$G.sans_900_semi.fontSize};
        font-weight: ${s.$G.sans_900_semi.fontWeight};
        line-height: ${s.$G.sans_900_semi.lineHeight};
    }
`,gi=t.Ay.div`
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-start;
    height: 32px;
    background: ${s.J2.White.color};
    font-size: ${s.$G.sans_300_semi.fontSize};
    font-weight: ${s.$G.sans_300_semi.fontWeight};
    line-height: ${s.$G.sans_300_semi.lineHeight};
    z-index: 2;
    padding: 0 16px;
    margin: ${s.dB.spacing_300.margin};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${s.Qk.radius_8.borderRadius};
`,pi=t.Ay.img`
    height: 16px;
    width: 16px;
`,hi=t.Ay.img`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
`,li=t.Ay.button`
    height: 32px;
    width: 32px;
    z-index: 2;
    background: none;
    border: none;
    margin: ${s.dB.spacing_300.margin};
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s.J2.White.color};
    font-size: ${s.Ox.sans_button_200.fontSize};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    border-radius: ${s.Qk.radius_8.borderRadius};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    cursor: pointer;
`,$i=t.Ay.button`
    height: 32px;
    width: 32px;
    z-index: 2;
    background: none;
    border: none;
    margin: ${s.dB.spacing_300.margin};
    margin-right: 56px;
    grid-row: 1/2;
    grid-column: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s.J2.White.color};
    font-size: ${s.Ox.sans_button_200.fontSize};
    line-height: ${s.Ox.sans_button_200.lineHeight};
    border-radius: ${s.Qk.radius_8.borderRadius};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    cursor: pointer;
    touch-action: none;
`,mi=t.Ay.div`
    height: 200px;
    max-height: 200px;
    width: 100%;
    border-radius: ${s.Qk.radius_8.borderRadius};
    overflow: hidden;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        height: 180px;
    }
`,xi=t.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${s.dB.spacing_300.gap};
    margin-top: 16px;
    margin-bottom: 80px;

    @media (min-width: 768px) {
        display: grid !important;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
        margin-top: 24px;
        margin-bottom: unset;
    }
`,fi=t.Ay.div`
    font-size: ${s.$G.sans_300.fontSize};
    font-weight: ${s.$G.sans_300.fontWeight};
    line-height: ${s.$G.sans_300.lineHeight};
    color: ${s.J2.Grey.color};
    background: none;
    min-width: 100%;
    min-height: ${i=>i.expanded?"200px":"128px"};
    border: 1px dashed ${s.J2.Grey1.color};
    border-radius: ${s.Qk.radius_12.borderRadius};
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`,_i=t.Ay.button`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${s.J2.Grey3.color};
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: flex-end;
    margin-right: 16px;
`,ci=t.Ay.img`
    height: 10px;
    width: 10px;
`,yi=t.Ay.p`
    margin: 0;
    margin-top: 8px;
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    color: ${s.J2.Grey.color};

    @media (min-width: 768px) {
        font-size: ${s.$G.sans_500.fontSize};
        font-weight: ${s.$G.sans_500.fontWeight};
        line-height: ${s.$G.sans_500.lineHeight};
    }
`,wi=t.Ay.input`
    height: 80px;
    border-radius: 9px;
    border-color: transparent;
    outline: none;
    font-size: ${s.$G.sans_1300_semi.fontSize};
    line-height: ${s.$G.sans_1300_semi.lineHeight};
    font-weight: ${s.$G.sans_1300_semi.fontWeight};
    text-align: center;

    @media (min-width: 768px) {
        font-size: 72px;
        line-height: 80;
    }
`,Gi=t.Ay.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    overflow: hidden;
`,bi=t.Ay.div`
    font-size: ${s.$G.sans_900_semi.fontSize};
    font-weight: ${s.$G.sans_900_semi.fontWeight};
    line-height: ${s.$G.sans_900_semi.lineHeight};
    margin-bottom: 32px;
    margin-top: 32px;
    @media (min-width: 768px) {
        margin-bottom: 48px;
        margin-top: 48px;
        font-size: ${s.$G.sans_1000_semi.fontSize};
        font-weight: ${s.$G.sans_1000_semi.fontWeight};
        line-height: ${s.$G.sans_1000_semi.lineHeight};
    }
`,ui=t.Ay.div`
    width: 100%;
    display: flex;
    gap: ${s.dB.spacing_400.gap};
    flex-wrap: wrap;
`,zi=t.Ay.div`
    width: calc((100% - 24px) / 2);
    aspect-ratio: 1/1;
    border-radius: 12px;
    box-shadow: 1.3px 3px 16px 0px #0000001a;
    border-radius: ${s.Qk.radius_12.borderRadius};
    box-shadow: ${s.E_.shadow_100.boxShadow};
    border: ${i=>i.selected?`1px solid ${s.J2.Black.color}`:`1px solid ${s.J2.White.color}`};
    outline: ${i=>i.selected?`1px solid ${s.J2.Black.color}`:"none"};
    display: flex;
    flex-direction: column;
    cursor: pointer;
    @media (min-width: 768px) {
        height: 376px;
    }
`,Ai=t.Ay.img`
    border-radius: ${s.Qk.radius_12.borderRadius} 12px 0 0;
    width: 55%;
    height: 55%;
    object-fit: contain;
    margin: auto;
`,vi=t.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    margin-top: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    @media (min-width: 768px) {
        margin-top: 24px;
        margin-left: 24px;
        margin-bottom: 24px;
    }
`,Si=t.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${s.dB.spacing_500.gap};
    margin-top: 32px;
    @media (min-width: 768px) {
        margin-top: 48px;
    }
`,Hi=t.Ay.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: ${s.E_.shadow_100.boxShadow};
    object-fit: contain;
    padding: ${s.dB.spacing_300.padding};
`,Wi=t.Ay.img`
    width: 24px;
    height: 24px;
`,ki=t.Ay.div`
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    margin-bottom: 48px;
`,Ji=t.Ay.p`
    font-size: ${s.$G.sans_1000_semi.fontSize};
    font-weight: ${s.$G.sans_1000_semi.fontWeight};
    line-height: ${s.$G.sans_1000_semi.lineHeight};
    text-align: center;
    margin-bottom: 8px;
`,Bi=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    color: ${s.J2.Grey.color};
    text-align: center;
`,ji=t.Ay.div`
    border-radius: 10px;
    border: 1px solid ${s.J2.Grey2.color};
`,Ri=t.Ay.div`
    padding: ${s.dB.spacing_300.padding};
    border-bottom: 1px solid ${s.J2.Grey2.color};
    &:last-child {
        border-bottom: none;
    }
`,Qi=t.Ay.p`
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};
    margin-bottom: 8px;
`,Yi=t.Ay.p`
    font-size: ${s.$G.sans_300_med.fontSize};
    font-weight: ${s.$G.sans_300_med.fontWeight};
    line-height: ${s.$G.sans_300_med.lineHeight};
    color: ${s.J2.Grey.color};
`,Ei=t.Ay.p`
    font-size: ${s.$G.sans_1000_semi.fontSize};
    font-weight: ${s.$G.sans_1000_semi.fontWeight};
    line-height: ${s.$G.sans_1000_semi.lineHeight};
    margin-top: 48px;
    @media (min-width: 768px) {
        margin-top: 32px;
    }
`,Oi=t.Ay.p`
    font-size: ${s.$G.sans_900_semi.fontSize};
    font-weight: ${s.$G.sans_900_semi.fontWeight};
    line-height: ${s.$G.sans_900_semi.lineHeight};
    margin-top: 37px;
    @media (min-width: 768px) {
        display: none;
    }
`,Li=t.Ay.p`
    font-size: ${s.$G.sans_700_semi.fontSize};
    font-weight: ${s.$G.sans_700_semi.fontWeight};
    line-height: ${s.$G.sans_700_semi.lineHeight};
    margin-bottom: 24px;
`,Ki=t.Ay.div`
    width: 100%;
    margin-bottom: 48px;
`,Ni=t.Ay.div`
    margin-top: 16px;
`,Zi=t.Ay.p`
    font-size: ${s.$G.sans_500_semi.fontSize};
    font-weight: ${s.$G.sans_500_semi.fontWeight};
    line-height: ${s.$G.sans_500_semi.lineHeight};
    margin-bottom: 4px;
`,Fi=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    color: ${s.J2.Grey.color};
`,Ti=t.Ay.a`
    font-size: ${s.$G.sans_400_semi.fontSize};
    font-weight: ${s.$G.sans_400_semi.fontWeight};
    line-height: ${s.$G.sans_400_semi.lineHeight};
`,Ci=t.Ay.img`
    width: 100%;
    height: 400px;
    object-fit: contain;
    border-radius: ${s.Qk.radius_12.borderRadius};
    border: 1px solid ${s.J2.Grey2.color};
`,Di=t.Ay.p`
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    color: ${s.J2.Grey.color};
    @media (min-width: 768px) {
        display: none;
    }
`,Mi=t.Ay.div`
    border-radius: 10px;
    border: 1px solid ${s.J2.Grey2.color};
    margin-top: 32px;
    margin-bottom: 12px;
    @media (min-width: 768px) {
        margin-top: 48px;
    }
`,Ui=t.Ay.p`
    color: ${s.J2.Red.color};
    opacity: ${i=>i.invalidKey?"1":"0"};
    margin-bottom: 48px;
`,Vi=t.Ay.div`
    padding: ${s.dB.spacing_300.padding};
    border-bottom: 1px solid ${s.J2.Grey2.color};
    &:last-child {
        border-bottom: none;
    }
`,qi=t.Ay.input`
    border: none;
    outline: none;
    font-size: ${s.$G.sans_400.fontSize};
    font-weight: ${s.$G.sans_400.fontWeight};
    line-height: ${s.$G.sans_400.lineHeight};
    width: 100%;
    &::placeholder {
        color: ${s.J2.Grey.color};
    }
`,Pi=t.Ay.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-bottom: 32px;
`,Xi=t.Ay.p`
    font-size: ${s.$G.sans_900_semi.fontSize};
    font-weight: ${s.$G.sans_900_semi.fontWeight};
    line-height: ${s.$G.sans_900_semi.lineHeight};
    @media (min-width: 768px) {
        font-size: ${s.$G.sans_1000_semi.fontSize};
        font-weight: ${s.$G.sans_1000_semi.fontWeight};
        line-height: ${s.$G.sans_1000_semi.lineHeight};
    }
`,Ii=t.Ay.div`
    margin-top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`}}]);
//# sourceMappingURL=6435.4b058319.chunk.js.map
//# debugId=0ff57aed-a2fe-5962-a950-76b3af55788a
