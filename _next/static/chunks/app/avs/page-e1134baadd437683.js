(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6940],{56454:function(e,t,s){Promise.resolve().then(s.bind(s,5887))},5887:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return q}});var l,n,r=s(81438),a=s(4766),i=s(66427),o=s(15628),c=s.n(o),d=s(84710),u=s(42140),x=s(305);let m="flex flex-col gap-3 rounded-lg border border-blue-100 p-4 bg-white";function h(e){let{aggregateStats:t}=e,{avs:s,metadata:l,restakedEthValue:n,stakerCount:o,operatorCount:c,historicalAggregateAPR:h}=t,f=(0,i.useMemo)(()=>[{label:"TOTAL VALUE RESTAKED",value:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Lm,{value:n,format:"tvl"})," ",(0,r.jsx)("span",{className:"text-blue-400",children:"ETH"})]})},{label:"STAKERS",value:(0,r.jsx)(a.Lm,{value:o,format:"count"})},{label:"OPERATORS",value:(0,r.jsx)(a.Lm,{value:c,format:"count"})},{label:"HISTORICAL AGGREGATE APR",value:(0,r.jsxs)("div",{className:"flex items-center gap-1 rounded-[100px] bg-blue-50 px-2 py-1",children:[(0,r.jsx)(x.Z,{tokens:h.tokens}),(0,r.jsx)("div",{children:(0,r.jsxs)(a._T,{intent:"TextS",weight:"medium",children:[(0,r.jsx)(a.Lm,{value:h.aprMin,format:"percentage"})," -"," ",(0,r.jsx)(a.Lm,{value:h.aprMax,format:"percentage"})]})})]})}],[n,o,c,h]);return(0,r.jsxs)(d.default,{href:"/avs/".concat(s),className:m,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("img",{src:l.logo||"/tokenIcon/beaconChainETH.svg",onError:e=>{e.currentTarget.src="/tokenIcon/beaconChainETH.svg"},alt:l.name,className:"h-8 w-8"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(a._T,{weight:"medium",children:l.name}),(0,r.jsx)(a._T,{intent:"TextS",weight:"medium",className:"text-blue-400",children:(0,u.Xn)(s)})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(a._T,{intent:"TextS",weight:"medium",className:"line-clamp-3 h-[60px] text-blue-400",children:l.description})}),(0,r.jsx)("div",{className:"flex flex-col",children:f.map(e=>{let{label:t,value:s}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-between border-b border-blue-50 py-3 last:border-0",children:[(0,r.jsx)(a._T,{font:"ibmPlexMono",intent:"TextXS",className:"text-blue-400",children:t}),(0,r.jsx)(a._T,{intent:"TextS",weight:"medium",children:s})]},t)})})]})}function f(){return(0,r.jsx)(r.Fragment,{children:Array.from({length:v},(e,t)=>(0,r.jsxs)("div",{className:m,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(a.yg,{className:"h-8 w-8"}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(a.yg,{className:"w-36",intent:"TextM"}),(0,r.jsx)(a.yg,{className:"w-24",intent:"TextS"})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(a.yg,{className:"h-[60px] w-full"})}),(0,r.jsx)("div",{children:Array.from({length:4},(e,t)=>(0,r.jsxs)("div",{className:"flex items-center justify-between border-b border-blue-50 py-3 last:border-0",children:[(0,r.jsx)(a.yg,{className:"w-24",intent:"TextXS"}),(0,r.jsx)(a.yg,{className:"w-24",intent:"TextS"})]},"skel-".concat(t)))})]},"skel-".concat(t)))})}var p=s(10023),g=s(96587);let b=[{key:"restakedEthValue",direction:"DESC",label:"Total value restaked: Desc"},{key:"restakedEthValue",direction:"ASC",label:"Total value restaked: Asc"},{key:"aprMin",direction:"DESC",label:"APR Min: Desc"},{key:"aprMin",direction:"ASC",label:"APR Min: Asc"},{key:"aprMax",direction:"DESC",label:"APR Max: Desc"},{key:"aprMax",direction:"ASC",label:"APR Max: Asc"},{key:"name",direction:"DESC",label:"Name: Desc"},{key:"name",direction:"ASC",label:"Name: Asc"},{key:"stakerCount",direction:"DESC",label:"Stakers: Desc"},{key:"stakerCount",direction:"ASC",label:"Stakers: Asc"},{key:"operatorCount",direction:"DESC",label:"Operators: Desc"},{key:"operatorCount",direction:"ASC",label:"Operators: Asc"}];function j(e){let{selected:t,setSelected:s}=e,[l,n]=(0,i.useState)(!1);return(0,r.jsxs)(g.fC,{open:l,onOpenChange:n,children:[(0,r.jsx)(g.xz,{className:"w-full cursor-pointer outline-none sm:w-[270px]",children:(0,r.jsxs)("div",{className:"flex w-full items-center gap-2 whitespace-nowrap rounded-[100px] border border-blue-100 bg-white px-4 py-3 sm:w-[270px]",children:[(0,r.jsx)(p.Z,{className:"h-5 w-5 text-blue-800"}),(0,r.jsxs)(a._T,{intent:"TextS",weight:"medium",children:[(0,r.jsx)("span",{className:"text-blue-400",children:"Sort: "}),t.label]})]})}),(0,r.jsx)(g.VY,{align:"end",sideOffset:1,className:"z-10",children:(0,r.jsx)("div",{className:"w-full rounded-lg border border-blue-100 bg-white p-2",children:b.map(e=>(0,r.jsx)("div",{className:"cursor-pointer rounded-md px-4 py-1 hover:bg-blue-100",onClick:()=>{s(e),n(!1)},children:(0,r.jsx)(a._T,{intent:"TextS",children:e.label})},e.label))})})]})}let v=12;function N(){let[e,t]=(0,i.useState)(0),[s,l]=(0,i.useState)(""),[n,o]=(0,i.useState)(""),[d,u]=(0,i.useState)(b[0]),{data:x,isLoading:m,totalCount:p}=(0,a.QH)({first:v,skip:e*v,search:n,sortBy:d.key,sortDirection:d.direction}),g=(0,i.useMemo)(()=>c()(e=>{o(e),t(0)},500),[o,t]);return(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center gap-3 sm:flex-row",children:[(0,r.jsx)(a.oi,{search:!0,value:s,onChange:e=>{l(e),g(e)},placeholder:"Search",iconClassName:"text-blue-300",containerClassName:"w-full"}),(0,r.jsx)(j,{selected:d,setSelected:e=>{u(e),t(0)}})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",children:m?(0,r.jsx)(f,{}):null==x?void 0:x.map(e=>(0,r.jsx)(h,{aggregateStats:e},e.avs))}),(0,r.jsx)(a.ML,{pageIndex:e,totalPages:p?Math.ceil(p/v):1,onPageChange:t,truncate:!0})]})}var T=s(89298),w=s.n(T),y=s(36069),S=s(80475),A=s(33849),k=s(84497),C=function(e){let{path:t,name:s,address:l,logo:n,tag:i,description:o,stats:c,footer:d,dataCypress:u}=e;return(0,r.jsxs)(A.Z,{className:"min-[320px] flex h-full cursor-pointer flex-col gap-6 rounded-lg bg-white-950 p-6 transition duration-200 hover:bg-white-600","data-cypress":u,href:t,children:[(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsx)("img",{src:n||"/tokenIcon/beaconChainETH.svg",onError:e=>{e.currentTarget.src="/tokenIcon/beaconChainETH.svg"},height:48,width:48,alt:"operator logo",className:"h-12 w-12 rounded object-contain"}),(0,r.jsxs)("div",{className:"flex flex-col truncate",children:[(0,r.jsx)(a._T,{intent:"DisplayXS",className:"hover:underline",children:s||(0,r.jsx)(a.Lp,{address:l})}),(0,r.jsx)(a._T,{intent:"TextXS",font:"ibmPlexMono",className:"text-tertiaryFg cursor-pointer hover:underline",children:(0,r.jsx)(a.Lp,{address:l})})]}),i]}),(0,r.jsx)("div",{className:"border-accentGreen border-t py-4",children:(0,r.jsx)(a._T,{intent:"TextS",className:"text-tertiaryFg line-clamp-3 h-16",children:(0,r.jsx)(k.Z,{text:o})})}),(0,r.jsx)("div",{className:"text-tertiaryFg mt-auto",children:c}),d]},s)};function _(){return(0,r.jsxs)("div",{className:"flex h-72 flex-col rounded-lg bg-white p-7",children:[(0,r.jsx)("div",{className:"mb-4 flex items-center justify-between gap-2 pb-4",children:(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)(a.yg,{className:"h-[48px] w-[48px] rounded"}),(0,r.jsxs)("div",{className:"flex flex-col gap-0.5 pl-2",children:[(0,r.jsx)(a.yg,{intent:"TextM",className:"w-32"}),(0,r.jsx)(a.yg,{intent:"TextXS",font:"ibmPlexMono",className:"w-16"})]})]})}),(0,r.jsx)(a.yg,{className:"mb-4 h-16"}),(0,r.jsxs)("div",{className:"mb-4 mt-auto grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"relative flex flex-col",children:[(0,r.jsx)(a.yg,{intent:"TextXS",className:"mb-1 w-16"}),(0,r.jsx)(a.yg,{intent:"TextXS",font:"ibmPlexMono"})]}),(0,r.jsxs)("div",{className:"relative flex flex-col",children:[(0,r.jsx)(a.yg,{intent:"TextXS",className:"mb-1 w-16"}),(0,r.jsx)(a.yg,{intent:"TextXS",font:"ibmPlexMono"})]})]})]})}var M=s(15800);(l=n||(n={})).tvlAsc="TVL Asc.",l.tvlDesc="TVL Desc.",l.stakersAsc="Num Stakers Asc.",l.stakersDesc="Num Stakers Desc.",l.alphaAsc="Alphabetical Asc.",l.alphaDesc="Alphabetical Desc.",l.random="Random",l.operatorsAsc="Num Operators Asc.",l.operatorsDesc="Num Operators Desc.";var E=function(e){let{selected:t,setSelected:s,items:l}=e,[n,o]=(0,i.useState)(!1);return(0,r.jsxs)(g.fC,{open:n,onOpenChange:e=>{o(e)},children:[(0,r.jsx)(g.xz,{className:"transiton flex min-w-fit justify-end rounded-full outline-none duration-300 hover:bg-blue-100",children:(0,r.jsx)(a.oi,{value:"Sort by: ".concat(t),containerClassName:"w-full max-w-auto sm:max-w-[225px] cursor-pointer outline-none",inputClassName:"cursor-pointer outline-none text-ShortTextS",size:a.dr.SM,icon:(0,r.jsx)(M.Z,{className:"h-3.5 w-3.5 transition-transform duration-200 ".concat(n?"rotate-180":"")}),iconAtEnd:!0,readOnly:!0,dataCypress:"sortTrigger"})}),(0,r.jsx)(g.VY,{align:"end",sideOffset:1,children:(0,r.jsx)("div",{className:"w-full rounded-lg border bg-blue-100 p-2",children:l.map(e=>(0,r.jsx)("div",{className:"cursor-pointer rounded-md px-4 hover:bg-white-950",onClick:()=>{s(e),o(!1)},"data-cypress":"sortOption-".concat(e),children:(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",children:e})},e))})})]})},D=s(23285),L=s.n(D),P=s(86706),O=s(43424);let R=O.O.NEXT_PUBLIC_RESTAKE_DISPLAY.display_order.filter(e=>!["lst","native"].includes(e));function X(e){let{tvlByGroup:t,name:s,totalOperators:l}=e;if(!t)return null;let{native:n,lst:i,...o}=t,c=L()(i,"ethValue")+L()(n,"ethValue");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between gap-2",children:[(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"uppercase",children:"ETH RESTAKED"}),l>0&&0===c?(0,r.jsx)(P.Z,{avsName:s}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"".concat(!c&&"text-blue-200"," ml-auto"),dataCypress:"operatorCardTVL",children:(0,r.jsx)(a.Lm,{value:c,format:"tvl"})}),(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"w-14 rounded-md bg-blue-200 px-1 text-center uppercase",children:"ETH"})]})]}),R.map(e=>{let t=L()(o[e],"tvl");return t?o[e].map(e=>(0,r.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,r.jsxs)(a._T,{intent:"TextS",className:"uppercase",font:"ibmPlexMono",children:[e.symbol," RESTAKED"]}),(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",dataCypress:"operatorCardTVL",className:"ml-auto",children:(0,r.jsx)(a.Lm,{value:t,format:"tvl"})}),(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"w-16 rounded-md bg-blue-200 px-1 text-center uppercase",children:e.symbol})]},e.name)):null})]})}var V=s(77723);let Z=(0,i.memo)(e=>{let{tokenSelections:t,className:s}=e,l="";if(0===t.length)return null;let n=[...t];return n.length>2&&(l="+".concat(n.length-2),n=n.slice(0,2)),(0,r.jsxs)("div",{className:(0,u.cn)("flex h-6 items-center gap-1",s),children:[n.map((e,t)=>{let{weiAmount:s,icon:l}=e;return(0,r.jsxs)("div",{className:"flex items-center gap-1 rounded-full border border-blue-100 px-2 py-1 hover:bg-blue-200",children:[""!==l?(0,r.jsx)(V.Z,{src:l,fill:!1,className:"h-6 w-6 rounded-full border-2 border-blue-100 bg-blue-100",style:{left:"".concat(8*t,"px")}}):(0,r.jsx)("div",{className:"h-6 w-6 rounded-full border-2 border-blue-100 bg-blue-300",style:{left:"".concat(8*t,"px")}}),(0,r.jsx)(a.Lm,{value:s,format:"balance"})]},t)}),l&&(0,r.jsx)(a._T,{intent:"TextXS",className:"flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 p-4 hover:bg-blue-200",children:l})]})});Z.displayName="TokenIconAndAmountDisplay";var F=s(78130),I=s(37860),H=s(38648);let B="grid w-full grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3";function z(e){let{isFilterOptionsVisible:t=!0,items:s,isLoading:l}=e,[o,c]=(0,i.useState)(""),{data:d}=(0,F.O4)(),{isEarnTokensModalOpenClose:x,openCloseEarnTokensModal:m,earnTokensModalData:h,setEarnTokensModalData:f}=(0,I.Y)(),[p,g]=(0,y._)("AVS_TABLE_SORT_KEY",n.stakersDesc),b=(0,i.useRef)([]),j=(0,i.useMemo)(()=>{if(l)return[];if(p===n.random&&!l&&s.length&&b.current.length===s.length){let e=new Set(s.map(e=>{let{address:t}=e;return t}));if(b.current.every(t=>{let{address:s}=t;return e.has(s)}))return b.current}let e=s.sort((e,t)=>{var s,l,r,a,i,o;let c=null!==(s=e.stakerCount)&&void 0!==s?s:0,d=null!==(l=t.stakerCount)&&void 0!==l?l:0,u=null!==(r=e.operatorCount)&&void 0!==r?r:0,x=null!==(a=t.operatorCount)&&void 0!==a?a:0,m=null!==(i=null==e?void 0:e.totalTVL)&&void 0!==i?i:0,h=null!==(o=null==t?void 0:t.totalTVL)&&void 0!==o?o:0;switch(p){case n.tvlAsc:return m-h;case n.tvlDesc:return h-m;case n.stakersAsc:return c-d;case n.stakersDesc:return d-c;case n.operatorsAsc:return u-x;case n.operatorsDesc:return x-u;case n.random:return Math.random()-.5;default:return 0}});return p!==n.random||l||(b.current=e),e},[s,p,l]),v=(0,i.useMemo)(()=>{let e=new(w())(j,{keys:["metadata.name","address","metadata.website"],threshold:.3});return o?e.search(o).map(e=>e.item):j},[j,o]),[N,T]=(0,i.useState)(0),A=v.slice(12*N,12*N+12);return(0,r.jsxs)("div",{className:"flex w-full flex-col items-center",children:[(0,r.jsx)(S.Z,{title:"Reward tokens for ".concat(null==h?void 0:h.title),isOpen:x,onClose:m,earnTokenModalTableData:null==h?void 0:h.tokens,isOnlyTokens:!0}),t&&(0,r.jsxs)("div",{className:"mb-2 grid w-full grid-cols-1 gap-1 sm:mb-4 sm:grid-cols-2 sm:gap-4",children:[(0,r.jsx)(a.oi,{search:!0,value:o,onChange:e=>{T(0),c(e)},placeholder:"Search by address/name/website",containerClassName:"w-full text-black-300",size:a.dr.SM,dataCypress:"avs-search"}),(0,r.jsx)("div",{className:"flex w-full justify-end",children:(0,r.jsx)("div",{className:"flex items-center gap-2",children:(0,r.jsx)(E,{selected:p,setSelected:e=>{T(0),g(e)},items:[n.tvlAsc,n.tvlDesc,n.stakersAsc,n.stakersDesc,n.operatorsAsc,n.operatorsDesc]})})})]}),l?(0,r.jsx)("div",{className:B,children:Array.from({length:6}).map((e,t)=>(0,r.jsx)(_,{},t))}):v.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:B,children:A.map(e=>{var t;let{address:s,metadata:l,operators:n,stakerCount:i,operatorCount:o,tvlByGroup:c,rewardTokens:x}=e;return(0,r.jsx)(C,{path:"/avs/".concat(s),name:null==l?void 0:l.name,address:s,description:null==l?void 0:l.description,website:null==l?void 0:l.website,logo:null==l?void 0:l.logo,dataCypress:"avsCard",stats:(0,r.jsxs)("div",{className:"[&>*]:border-t-disabledFg last:border-b-disabledFg flex flex-col last:border-b [&>*]:border-t [&>*]:py-2",children:[(0,r.jsx)(X,{tvlByGroup:c,name:null!==(t=null==l?void 0:l.name)&&void 0!==t?t:(0,u.Xn)(s),totalOperators:o}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"text-quarternaryFg uppercase",children:"Total Num. Operators"}),(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"".concat(!o&&"text-disabledFg"),children:(0,r.jsx)(a.Lm,{value:o,format:"count"})})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"text-quarternaryFg uppercase",children:"Total Num. Stakers"}),(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",children:(0,r.jsx)(a.Lm,{value:i,format:"count"})})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between py-0",children:[(0,r.jsx)(a._T,{intent:"TextS",font:"ibmPlexMono",className:"text-quarternaryFg uppercase",children:"Reward Tokens"}),x&&(0,r.jsx)(a.xk,{intent:"nav",className:"border-none p-0 hover:bg-transparent",size:a.dr.XS,onClick:e=>{var t;e.stopPropagation(),e.preventDefault(),f({tokens:(0,H.A$)(x),title:null!==(t=null==l?void 0:l.name)&&void 0!==t?t:(0,u.Xn)(s)}),m()},children:(0,r.jsx)(Z,{tokenSelections:(0,H.A$)(x),className:"h-4"})})]})]}),tag:(null==n?void 0:n.find(e=>e.toUpperCase()===(null==d?void 0:d.toUpperCase())))&&(0,r.jsx)(a.u,{asChild:!0,trigger:(0,r.jsx)(a.Vp,{color:"green",className:"ml-auto truncate",children:(0,r.jsx)(a._T,{intent:"TextXS",font:"ibmPlexMono",className:"truncate",children:"Delegated"})}),content:"Your stake is delegated to an operator that is opted in to this avs"})},s)})}),(0,r.jsx)(a.tl,{totalPages:Math.ceil(v.length/12),pageIndex:N,onPageChange:e=>{T(e)},truncate:!0})]}):(0,r.jsx)(a._T,{children:"No services found. Try a different search term"})]})}var U=s(51016),K=s.n(U),Y=s(77809),G=s(64087),W=()=>{let{data:{avsInfo:e}={avsInfo:[]},isLoading:t}=Y.h.avs.getAllAVS.useQuery(),{data:{strategyTokenMap:s},isLoading:l}=(0,G.r)();return{AVSList:(0,i.useMemo)(()=>e&&s?null==e?void 0:e.map(e=>{let t=Object.entries(e.strategyAndShare).map(e=>{let[t,l]=e,n=s[t];if(!n||!l)return;let r=Number(n.convertSharesToUnderlying(BigInt(l),{format:"decimal"}));return{...n,ethValue:n.ethValue*r,tvl:r}}).filter(Boolean),l=K().chain(t).groupBy("group").value(),n=(0,U.sumBy)(l.native,"ethValue")+(0,U.sumBy)(l.lst,"ethValue")+(0,U.sumBy)(l.WETH,"ethValue");return{...e,totalTVL:n,tvlByGroup:l}}):[],[e,s]),isLoading:t||l}},q="m0"===O.O.NEXT_PUBLIC_SLASHING_VERSION?function(){let{AVSList:e,isLoading:t}=W();return(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(a._T,{intent:"DisplayS",weight:"medium",className:"text-blue-800",children:"Discover"}),(0,r.jsx)(a._T,{intent:"DisplayXS",className:"mb-4 block",children:"Actively Validated Services"}),(0,r.jsx)(z,{items:e,isLoading:t})]})}:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a._T,{intent:"DisplayS",weight:"medium",className:"mb-5 block",children:"Actively Validated Services"}),(0,r.jsx)(N,{})]})}},86706:function(e,t,s){"use strict";var l=s(81438),n=s(87457),r=s(4766);t.Z=function(e){let{avsName:t}=e;return(0,l.jsx)(r.u,{trigger:(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(n.Z,{className:"h-4 w-4 text-red-400"}),(0,l.jsx)(r._T,{intent:"TextM",className:"uppercase",children:"unavailable"})]}),contentClassName:"bg-blue-200 rounded-lg shadow-2xl p-4 z-10 w-60",content:(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(r._T,{intent:"TextS",className:"bold",children:"".concat(t," TVL Unavailable")}),(0,l.jsx)(r._T,{intent:"TextXS",children:"A TVL does exist, but there is likely a\n                              misconfiguration on the AVSs service manager.\n                             "}),(0,l.jsx)("a",{href:"https://docs.eigenlayerAI.xyz/eigenlayerAI/avs-guides/avs-dashboard-onboarding#interface",target:"_blank",rel:"noopener noreferrer",className:"flex w-fit items-center gap-2 rounded-lg border border-blue-400 p-2 hover:bg-blue-400 hover:text-white",children:(0,l.jsx)(r._T,{intent:"TextS",className:"",children:"Onboarding Guide"})})]})})}},12166:function(e,t,s){"use strict";var l=s(81438),n=s(4766),r=s(33849),a=s(77723),i=s(43424);t.Z=function(e){let{icon:t,tokenAddress:s,name:o,symbol:c,rewardsMode:d="select"}=e;return(0,l.jsxs)("div",{className:"flex items-center gap-1 ".concat("select"===d?"":"py-2"),children:[""!==t?(0,l.jsx)(a.Z,{src:t,fill:!1,className:"h-6 w-6 rounded-full border-2 border-blue-100 bg-blue-100"}):(0,l.jsx)("div",{className:"h-6 w-6 rounded-full border-2 border-blue-100 bg-blue-300"}),(0,l.jsxs)(r.Z,{isExternalLink:!0,href:"".concat(i.O.NEXT_PUBLIC_BLOCK_EXPLORER_URL,"/address/").concat(s),className:"hidden items-center gap-1 font-abcRepro text-TextXS text-blue-700 underline-offset-1 hover:underline md:flex",children:[(0,l.jsx)(n._T,{intent:"TextXS",weight:"medium",className:"hidden text-blue-700 underline-offset-1 lg:block",dataCypress:"dashboardTokenName",children:null!=o?o:s}),c&&(0,l.jsx)(n._T,{intent:"TextXS",className:"text-blue-400",children:c})]})]})}},54131:function(e,t,s){"use strict";var l=s(81438),n=s(4766);t.Z=function(e){let{weiAmount:t}=e;return(0,l.jsx)("div",{className:"flex items-center justify-end gap-1 py-3",children:(0,l.jsx)(n._T,{intent:"TextXS",className:"text-[10px] text-blue-700 sm:text-[12px]",children:(0,l.jsx)(n.Lm,{value:t,format:"balance"})})})}},80475:function(e,t,s){"use strict";var l=s(81438),n=s(66427),r=s(84465),a=s(4766),i=s(27196),o=s(24343),c=s(38648),d=s(70806),u=s(13715);t.Z=(0,n.memo)(function(e){let{apr:t,earnTokenModalTableData:s=[],title:x,isOpen:m,onClose:h,isOnlyTokens:f}=e,[p,g]=(0,n.useState)([]),{isConnected:b,address:j}=(0,i.Z)();(0,n.useEffect)(()=>{s&&s.length>0&&g(s)},[s]);let{isRewardsPending:v}=(0,o.Z)(j);return(0,l.jsx)(r.fC,{open:m,children:(0,l.jsxs)(r.h_,{children:[(0,l.jsx)(r.aV,{className:"fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black-200",onClick:h}),(0,l.jsx)(r.VY,{className:"fixed left-1/2 top-1/2 z-20 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-4 rounded-lg bg-white outline-none sm:top-1/3 sm:mt-20 sm:h-[450px] sm:w-[420px]",children:b?(0,l.jsxs)("div",{className:"flex h-full w-full flex-col gap-4 rounded-lg border border-blue-100 bg-white-950 px-4 py-6",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a._T,{intent:"TextXL",weight:"medium",children:x})}),f?(0,l.jsx)(u.Z,{rewardData:p}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2 rounded-lg border border-blue-100 px-4 py-6",children:[(0,l.jsx)(d.Z,{}),v?(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(a._T,{intent:"DisplayXS",weight:"medium",className:"mr-1.5",children:"Pending"}),(0,l.jsx)(a._T,{intent:"TextXS",className:"text-blue-400",children:"Rewards may take up to 48 hours to be reflected"})]}):(0,l.jsx)(a._T,{intent:"DisplayXS",weight:"medium",className:"mr-1.5",dataCypress:"restakeBalance",children:(0,c.so)(null!=t?t:0)?(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(a.Lm,{value:100*Number(null!=t?t:0),format:"balance"}),"%"]}):"N/A"})]}),p.length>0&&(0,l.jsx)(u.Z,{rewardData:p,hiddenCols:["weiAmount"]})]})]}):(0,l.jsxs)("div",{className:"flex h-full w-full flex-col gap-4 rounded-lg border border-blue-100 bg-white-950 px-4 py-6",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a._T,{intent:"TextXL",weight:"medium",children:x})}),(0,l.jsxs)("div",{className:"flex flex-col gap-2 rounded-lg border border-blue-100 px-4 py-6",children:[(0,l.jsx)(d.Z,{}),(0,l.jsx)("div",{children:"- - -"})]})]})})]})})})},70806:function(e,t,s){"use strict";var l=s(81438),n=s(86360),r=s(4766);t.Z=function(){return(0,l.jsxs)(r._T,{intent:"TextXS",font:"ibmPlexMono",className:"flex gap-1 text-blue-400",children:["Historical APR",(0,l.jsxs)(r.ag,{children:[(0,l.jsx)(r.ag.Trigger,{children:(0,l.jsx)(n.Z,{className:"h-4 w-4 text-blue-400"})}),(0,l.jsx)(r.ag.Content,{children:(0,l.jsx)("div",{className:"w-64 text-center text-blue-800",children:(0,l.jsx)(r._T,{intent:"TextS",children:"Your estimated annualized historical 7-day reward rate for delegating the selected asset to this Operator."})})})]})]})}},13715:function(e,t,s){"use strict";var l=s(81438),n=s(66427),r=s(4766),a=s(12166),i=s(54131),o=s(58529);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{field:"name",headerName:"REWARD TOKEN",resizable:!1,hide:e.includes("name"),suppressMovable:!0,flex:1,minWidth:80,wrapHeaderText:!0,wrapText:!0,autoHeight:!0,headerClass:"ag-eigen-header-left",cellRenderer:e=>(0,l.jsx)(a.Z,{icon:e.data.icon,name:e.data.name,tokenAddress:e.data.address,symbol:e.data.symbol,rewardsMode:"claim"}),headerComponent:o.sj},{field:"weiAmount",hide:e.includes("weiAmount"),headerName:"AMOUNT",resizable:!1,suppressMovable:!0,flex:1,minWidth:80,wrapHeaderText:!0,wrapText:!0,autoHeight:!0,type:"rightAligned",headerClass:"ag-eigen-header-right",valueFormatter:e=>{let{value:t}=e;return Number(t).toString()},comparator:(e,t)=>Number(e)-Number(t),cellRenderer:e=>(0,l.jsx)("div",{className:"mr-6",children:(0,l.jsx)(i.Z,{weiAmount:e.data.weiAmount})}),headerComponent:o.sj}]};t.Z=(0,n.memo)(function(e){let{rewardData:t,hiddenCols:s,isLoading:n=!1}=e;return(0,l.jsx)(o.wQ,{tableWrapperClassName:"h-full min-h-full",containerClassName:"grow",data:t,columnDefs:c(s),animateRows:!1,isLoading:n,className:"h-full",domLayout:"normal",suppressRowHoverHighlight:!0,noRowsOverlayComponent:()=>(0,l.jsx)(r._T,{intent:"TextM",className:"text-blue-400",children:"No rewards available"}),localStorageSortKey:"rewards-modal-table"})})},84497:function(e,t,s){"use strict";var l=s(81438);t.Z=function(e){let{text:t}=e;if(!t)return null;let s=/https?:\/\/[\w.-]+(?::[0-9]+)?(?:[^\s]*[^\s.])?/g,n=t.split(s),r=t.match(s)||[],a=[];return n.forEach((e,t)=>{a.push(e),t<r.length&&a.push((0,l.jsx)("a",{href:r[t],target:"_blank",rel:"noreferrer",className:"hover:text-200 break-words text-blue-800 underline",onClick:e=>e.stopPropagation(),children:r[t]},t))}),(0,l.jsx)(l.Fragment,{children:a})}},305:function(e,t,s){"use strict";var l=s(81438),n=s(4766),r=s(42140);t.Z=function(e){let{tokens:t}=e;return(0,l.jsxs)("span",{className:"inline-flex",children:[t.slice(0,3).map(e=>{let{logo:t,symbol:s}=e;return(0,l.jsx)("img",{src:t,alt:"token logo",className:"-ml-1.5 h-5 w-5 rounded-full border border-white bg-white first:ml-0"},s)}),t.length>3&&(0,l.jsx)("div",{className:(0,r.cn)("-ml-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border border-white bg-blue-100 text-blue-500",t.length>9&&"px-0.5"),children:(0,l.jsxs)(n._T,{intent:"TextXS",children:["+",t.length-3]})})]})}},37860:function(e,t,s){"use strict";s.d(t,{Y:function(){return n}});var l=s(66427);function n(){let[e,t]=(0,l.useState)(!1),[s,n]=(0,l.useState)(null);return{isEarnTokensModalOpenClose:e,openCloseEarnTokensModal:(0,l.useCallback)(()=>t(e=>!e),[t]),earnTokensModalData:s,setEarnTokensModalData:n}}},38648:function(e,t,s){"use strict";s.d(t,{A$:function(){return i},TL:function(){return c},_f:function(){return a},so:function(){return o}});var l=s(11442),n=s(42140),r=s(3993);let a=e=>e?i(e.flatMap(e=>e.tokens)):[],i=e=>e?e.map(e=>{var t,s;let l=(0,r.M1)(e.tokenAddress);return l?{name:l.name,address:e.tokenAddress,symbol:l.symbol,icon:l.icon,weiAmount:BigInt(null!==(s=e.weiAmount)&&void 0!==s?s:0)}:{name:(0,n.Xn)(e.tokenAddress),address:e.tokenAddress,symbol:"",icon:"",weiAmount:BigInt(null!==(t=e.weiAmount)&&void 0!==t?t:0)}}).filter(e=>e.weiAmount>0n):[],o=e=>{let t=e<.1;return t||l.v.addError({message:"APR is greater than 0.1: ".concat(e)}),t},c=e=>e.map(e=>(0,r.M1)(e)||{name:(0,n.Xn)(e),slug:"",address:e,types:["reward"],strategyAddress:"0x",symbol:"",icon:"",decimals:18,rebasing:!1,apiID:"",group:"token",usedForPoints:!1,about:""})}},function(e){e.O(0,[9971,9091,421,340,4428,6299,7382,4710,4227,2110,1442,9144,4648,4465,8208,6058,4766,8140,5160,4168,2271,1744],function(){return e(e.s=56454)}),_N_E=e.O()}]);
//# sourceMappingURL=page-e1134baadd437683.js.map