(window["webpackJsonp_aleth_io_ethExtended"]=window["webpackJsonp_aleth_io_ethExtended"]||[]).push([[14],{qr9b:function(e,t,a){"use strict";a.r(t);var n=a("cDcd");var l=a("bb6g");var r=a("F3RY");const o=r["b"].div.withConfig({displayName:"ChartContainer",componentId:"sc-gnhhh4"})`
    /* Position relative to constrain the loading mask */
    position: relative;

    @media ${e=>e.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        display: none;
    }
`;var c=a("sGQ9");var i=a("6ZTl");const s=r["b"].div.withConfig({displayName:"BalanceChartLoadingMaskRoot",componentId:"sc-11emdyh"})`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;const d=r["b"].div.withConfig({displayName:"ContentWrapper",componentId:"sc-1hteoa9"})`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;class m extends n["Component"]{render(){return n["createElement"](s,null,n["createElement"](d,null,this.props.children))}}var p=a("ALqc");var h=a("p6MY");var u=a("wIDB");const g="balanceUsd";var b=a("+96g");var E=a("T0iu");var y=a("dJF0");class x extends n["Component"]{render(){if(!(this.props.active&&this.props.coordinate&&this.props.viewBox&&void 0!==this.props.viewBox.height&&void 0!==this.props.viewBox.width&&this.props.payload))return null;let e=this.props.theme.colors;let t=this.props.payload[0].payload;let a=this.props.referenceEl;let l=Object(b["b"])(a);let r=l.top+("top"===this.props.placement?0:this.props.viewBox.height)-window.scrollY;let o=Object(y["a"])(l.left+this.props.coordinate.x,15,this.props.viewBox.width-15)-window.scrollX;return n["createElement"](E["a"],{offset:this.props.arrow?5:0,noArrow:!this.props.arrow,nonInteractive:!0,placement:this.props.placement,noFlip:!0,visible:!0,referenceElement:{getBoundingClientRect:()=>({bottom:r,left:o,right:o,top:r,height:0,width:0}),clientHeight:0,clientWidth:0},content:this.props.children(t),backgroundColor:e.accountBalanceChartOverlayBg,borderColor:e.accountBalanceChartOverlayBorder,style:{borderRadius:"3px"}},n["createElement"]("div",null))}}const f=Object(r["c"])(x);var v=a("i0eD");var w=a("PlaU");const B=r["b"].div.withConfig({displayName:"Root",componentId:"sc-198dkcc"})`
    padding: 9px 11px;
    display: flex;
`;class C extends n["Component"]{render(){return n["createElement"](B,null,n["createElement"](w["a"],{locale:this.props.locale,wei:this.props.payload.balanceWei,variant:"small"}),n["createElement"](v["a"],{locale:this.props.locale,value:this.props.payload[g],variant:"small"}))}}var k=a("mU3R");const S=r["b"].div.withConfig({displayName:"Root",componentId:"sc-1wm06n1"})`
    padding: 3px 12px 5px 12px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 600;
    color: ${e=>e.theme.colors.valueBox.secondary.text};
`;class F extends n["Component"]{render(){return n["createElement"](S,null,n["createElement"](k["a"],{timestamp:this.props.payload.timestamp,locale:this.props.locale}))}}const T=250;const D="BalanceChart-circleShadow";const O=e=>n["createElement"]("g",null,n["createElement"]("circle",{cx:e.cx,cy:e.cy,r:"12",fill:e.theme.colors.accountBalanceChartOverlayBg,stroke:e.theme.colors.accountBalanceChartOverlayBorder,filter:`url(#${D})`}),n["createElement"]("circle",{cx:e.cx,cy:e.cy,r:"4",fill:e.theme.colors.accountBalanceChartStroke}));const U=Object(r["c"])(O);class V extends n["Component"]{render(){let e=this.props.data;let t=this.props.locale;let a=this.props.theme.colors;let l=this.props.disabled;let r=a.accountBalanceChartFill;let o=l?a.accountBalanceChartDisabledStroke:a.accountBalanceChartStroke;let c=a.accountBalanceChartRefStroke;let i=Math.floor(e.min);let s=Math.ceil(e.max);let d=17;let m=(s-i)/(T-34);return n["createElement"]("div",{ref:e=>this.rootEl=e},n["createElement"](u["e"],{width:"100%",height:T},n["createElement"](u["b"],{margin:{top:0,bottom:0,left:0,right:0},data:e.points},n["createElement"]("defs",null,n["createElement"]("filter",{id:D,x:"-50%",y:"-50%",width:"200%",height:"200%"},n["createElement"]("feOffset",{result:"offOut",in:"SourceAlpha",dx:"0",dy:"2"}),n["createElement"]("feGaussianBlur",{result:"blurOut",in:"offOut",stdDeviation:"6"}),n["createElement"]("feComponentTransfer",null,n["createElement"]("feFuncA",{type:"linear",slope:"0.08"})),n["createElement"]("feMerge",null,n["createElement"]("feMergeNode",null),n["createElement"]("feMergeNode",{in:"SourceGraphic"})))),n["createElement"](u["c"],{x1:0,x2:e.points.length-1,y1:i-17*m,y2:i,fill:r,fillOpacity:1,alwaysShow:!0}),n["createElement"](u["c"],{x1:0,x2:e.points.length-1,y1:s,y2:s+17*m,fillOpacity:0,alwaysShow:!0}),n["createElement"](u["a"],{type:"monotone",dataKey:g,strokeOpacity:0,fill:r,fillOpacity:1,isAnimationActive:!l}),n["createElement"](u["d"],{y:s,stroke:c,strokeDasharray:"3 1"}),n["createElement"](u["d"],{y:Math.round((s+i)/2),stroke:c,strokeDasharray:"3 1"}),n["createElement"](u["d"],{y:i,stroke:c,strokeDasharray:"3 1"}),l?null:n["createElement"](u["f"],{offset:0,cursor:{stroke:c},content:e=>n["createElement"](n["Fragment"],null,n["createElement"](f,Object.assign({placement:"top",arrow:!0},e,{referenceEl:this.rootEl}),e=>n["createElement"](C,{locale:t,payload:e})),n["createElement"](f,Object.assign({placement:"bottom"},e,{referenceEl:this.rootEl}),e=>n["createElement"](F,{locale:t,payload:e}))),isAnimationActive:!1}),n["createElement"](u["a"],{type:"monotone",dataKey:g,stroke:o,strokeWidth:3,fillOpacity:0,activeDot:l?void 0:n["createElement"](U,null),isAnimationActive:!l}),n["createElement"](u["g"],{hide:!0,domain:[i,s]}))))}}const A=Object(r["c"])(V);var L=a("uYCw");let N=class e extends n["Component"]{render(){let{accountBalance:e,isFreshAccount:t,translation:a,locale:l}=this.props;return n["createElement"](o,null,t||e.loadStatus===i["LoadStatus"].Loaded?void 0:n["createElement"](m,null,e.loadStatus===i["LoadStatus"].Loading?n["createElement"](p["a"],{size:36}):n["createElement"](h["a"],{translation:a,size:36})),n["createElement"](A,{data:!t&&e.isLoaded()?this.computeChartData(e.data):this.getPlaceholderChartData(),locale:l,disabled:t||!e.isLoaded()}))}computeChartData(e){let t={max:-1/0,min:1/0,points:[]};t.points=e.computeTotalBalance().map(e=>{let a={[g]:e.usd,balanceWei:e.wei,timestamp:e.timestamp};t.min=Math.min(t.min,e.usd);t.max=Math.max(t.max,e.usd);return a}).reverse();t.max-t.min<1&&(t.max=t.min+1);return t}getPlaceholderChartData(){let e;return{max:10,min:0,points:Array(L["b"]).fill({[g]:0})}}};N=l["b"]([c["observer"]],N);const M=r["b"].div.withConfig({displayName:"ContentBottomSection",componentId:"sc-r9rwr3"})`
    background-color: ${e=>e.theme.colors.mainContentBg};
    box-sizing: border-box;
`;var G=a("bfbg");var P=a("uJLN");var I=a("lvN2");var j=a("INKD");var R=a("C4qQ");var W=a("i22y");var $=a("/oks");var z=a.n($);class K extends n["PureComponent"]{render(){const e=this.props.theme.colors;const t=Math.round(Math.min(100,Math.max(0,this.props.percentage)));const a=[{value:t,color:e.accountPieChartFill},{value:100-t,color:e.accountPieChartBg}];return n["createElement"](z.a,{data:a,totalValue:100,startAngle:270,lengthAngle:this.props.clockwise?-360:360,style:{width:"24px",height:"24px",margin:"1px 0",boxShadow:"0 2px 6px 0 rgba(0,0,0,0.04)",borderRadius:"50%"}})}}const J=Object(r["c"])(K);const Q=18;const _=2;class q extends n["Component"]{render(){let{data:e,theme:t}=this.props;let a=t.colors;let l=a.accountBalanceChartSmallFill;let r=_;let o=(e.max-e.min)/(Q-2*r);return n["createElement"](u["b"],{width:174,height:Q,margin:{top:0,bottom:0,left:0,right:0},data:e.points},n["createElement"](u["c"],{x1:0,x2:e.points.length-1,y1:e.min-r*o,y2:e.min,fill:l,fillOpacity:1,alwaysShow:!0}),n["createElement"](u["c"],{x1:0,x2:e.points.length-1,y1:e.max,y2:e.max+r*o,fillOpacity:0,alwaysShow:!0}),n["createElement"](u["a"],{type:"monotone",dataKey:g,stroke:a.accountBalanceChartSmallStroke,strokeWidth:_,fill:l,fillOpacity:1,isAnimationActive:!1}),n["createElement"](u["g"],{hide:!0,domain:[e.min,e.max]}))}}const H=Object(r["c"])(q);var Y=a("+9Dl");class X extends n["PureComponent"]{render(){let e=this.props.locale;let t;let a=this.props.ethBalance.chart[0];let l=this.props.totalBalance.usd?a.balanceUsd/this.props.totalBalance.usd:1;return n["createElement"](n["Fragment"],null,n["createElement"](Y["a"],null,n["createElement"](w["a"],{wei:a.balance,locale:e})),n["createElement"](G["b"],{behavior:"hide",forScreenWidth:{lowerThan:G["a"].ForFullView}},n["createElement"](Y["a"],null,n["createElement"](W["a"],null,n["createElement"](J,{percentage:100*l})))),n["createElement"](Y["a"],null,n["createElement"](W["a"],null,l.toLocaleString(e,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}))),n["createElement"](G["b"],{behavior:"hide",forScreenWidth:{lowerThan:G["a"].ForFullView}},n["createElement"](Y["a"],null,n["createElement"](W["a"],null,n["createElement"](H,{data:this.getChartData()})))),n["createElement"](Y["a"],{justifyContent:"flex-end"},n["createElement"](v["a"],{colors:"secondary",value:a.balanceUsd,locale:e})))}getChartData(){let e={max:-1/0,min:1/0,points:[]};e.points=this.props.ethBalance.chart.map(t=>{let a={[g]:t.balanceUsd};e.min=Math.min(e.min,t.balanceUsd);e.max=Math.max(e.max,t.balanceUsd);return a}).reverse();e.max-e.min<1&&(e.max=e.min+1);return e}}var Z=a("IZzZ");class ee extends n["PureComponent"]{render(){let e=this.props.locale;let t=this.props.translation;let a=this.props.tokenAggregatedBalance[0].balanceUsd;let l=this.props.totalBalance.usd?a/this.props.totalBalance.usd:0;return n["createElement"](n["Fragment"],null,n["createElement"](Y["a"],null,n["createElement"](Z["a"],{label:t.get("accountView.content.tokens.label"),value:this.props.totalTokenTypes,open:this.props.expanded,locale:e,onClick:this.props.onToggleExpand})),n["createElement"](G["b"],{behavior:"hide",forScreenWidth:{lowerThan:G["a"].ForFullView}},n["createElement"](Y["a"],null,n["createElement"](W["a"],null,n["createElement"](J,{percentage:100*l,clockwise:!0})))),n["createElement"](Y["a"],null,n["createElement"](W["a"],null,l.toLocaleString(e,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2}))),n["createElement"](G["b"],{behavior:"hide",forScreenWidth:{lowerThan:G["a"].ForFullView}},n["createElement"](Y["a"],null,n["createElement"](W["a"],null,n["createElement"](H,{data:this.getChartData()})))),n["createElement"](Y["a"],{justifyContent:"flex-end"},n["createElement"](v["a"],{colors:"secondary",value:a,locale:e})))}getChartData(){let e={max:-1/0,min:1/0,points:[]};e.points=this.props.tokenAggregatedBalance.map(t=>{let a={[g]:t.balanceUsd};e.min=Math.min(e.min,t.balanceUsd);e.max=Math.max(e.max,t.balanceUsd);return a}).reverse();e.max-e.min<1&&(e.max=e.min+1);return e}}var te=a("VBo9");var ae=a("Rtpw");var ne=a("qJXn");var le=a("0jj9");var re=a("0p73");class oe{constructor(e,t){this.locale=e;this.totalBalanceUsd=t}render(e){let t;return(this.totalBalanceUsd?e.chart[0].balanceUsd/this.totalBalanceUsd:0).toLocaleString(this.locale,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:2})}}class ce{render(e){return n["createElement"](H,{data:this.getChartData(e)})}getChartData(e){let t={max:-1/0,min:1/0,points:[]};t.points=e.chart.map(e=>{let a={[g]:e.balanceUsd};t.min=Math.min(t.min,e.balanceUsd);t.max=Math.max(t.max,e.balanceUsd);return a}).reverse();t.max-t.min<1&&(t.max=t.min+1);return t}}var ie=a("clXW");var se=a("lJck");const de=r["b"].div.withConfig({displayName:"TokenBalanceGridDataRoot",componentId:"sc-1crxe0e"})`
    flex-grow: 1;
    display: flex;
`;const me=r["b"].span.withConfig({displayName:"TokenBalanceGridDataSymbol",componentId:"sc-13blk77"})`
    padding-right: 16px;
    color: ${({theme:e})=>e.colors.accountSymbolGrid};
    flex-grow: 1;
    font-weight: 700;
`;class pe{constructor(e,t,a){this.locale=e;this.balanceGetter=t;this.symbolGetter=a}render(e){let t=this.balanceGetter(e);let a=this.symbolGetter(e);return n["createElement"](de,{style:{flexGrow:1,display:"flex"}},n["createElement"](me,null,a),n["createElement"]("div",null,n["createElement"](se["a"],{value:t,locale:this.locale})))}}var he=a("D9CN");var ue=a("grhE");var ge;!function(e){e["Name"]="name";e["Balance"]="balance";e["BalanceUsd"]="balanceUsd";e["Chart"]="chart";e["PercentFraction"]="percentFraction"}(ge||(ge={}));class be extends re["a"]{constructor(e,t,a){super();this.fields=[{label:e.get("accountView.content.balanceGrid.header.name"),fieldKey:ge.Name,type:"string",isSortable:!0,selected:!0,getFieldValue:e=>e.currency.name,renderer:e=>n["createElement"](he["a"],{to:`page://aleth.io/account?accountHash=${e.currency.address}`},e.currency.name)},{label:e.get("accountView.content.balanceGrid.header.balance"),fieldKey:ge.Balance,type:"number",isSortable:!0,selected:!0,getFieldValue:e=>e.chart[0].balance.shiftedBy(-e.currency.decimals),renderer:new pe(t,e=>e.chart[0].balance.shiftedBy(-e.currency.decimals),e=>e.currency.symbol)},{label:e.get("accountView.content.balanceGrid.header.balanceUsd"),fieldKey:ge.BalanceUsd,type:"number",isSortable:!0,selected:!0,getFieldValue:e=>e.chart[0].balanceUsd,renderer:new ie["a"](t,e=>e.chart[0].balanceUsd)},{label:e.get("accountView.content.balanceGrid.header.percent"),fieldKey:ge.PercentFraction,type:"number",isSortable:!0,defaultSortOrder:ue["a"].Descending,selected:!0,getFieldValue:e=>a?e.chart[0].balanceUsd/a:0,renderer:new oe(t,a)},{label:e.get("accountView.content.balanceGrid.header.chart"),fieldKey:ge.Chart,type:"array",isSortable:!1,selected:!0,getFieldValue:e=>e.chart[0].balanceUsd,renderer:new ce}]}get defaultSortedField(){return this.fields.find(e=>e.fieldKey===ge.PercentFraction)}}class Ee extends n["PureComponent"]{constructor(e){super(e);let t=e.tokenBalances.reduce((e,t)=>e+t.chart[0].balanceUsd,0);this.gridFields=new be(e.translation,e.locale,t);this.gridSortingOptions=new le["a"](this.gridFields.defaultSortedField)}componentDidUpdate(e){if(this.props.locale!==e.locale){let e=this.props.tokenBalances.reduce((e,t)=>e+t.chart[0].balanceUsd,0);let{translation:t,locale:a}=this.props;this.gridFields=new be(t,a,e)}}render(){const e=this.props.tokenBalances.map(e=>({key:e.currency.address,data:e}));return n["createElement"](ne["a"],{rows:e,fields:this.gridFields,sortingOptions:this.gridSortingOptions,translation:this.props.translation})}}const ye=Object(r["b"])("div").withConfig({displayName:"BalanceSectionRoot",componentId:"sc-1p5atb9"})`
    @media ${e=>e.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        display: ${e=>e.accountHasTokens?"block":"none"};
    }
`;const xe=r["b"].div.withConfig({displayName:"BalanceSectionGrid",componentId:"sc-18p53c8"})`
    display: grid;
    grid-template-columns: repeat(5, auto);

    @media ${e=>e.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        grid-template-columns: repeat(3, auto);
    }
`;const fe=r["b"].div.withConfig({displayName:"BalanceGridRoot",componentId:"sc-12qzk2s"})`
    max-width: 100vw;
    overflow-y: auto;
`;const ve=r["b"].div.withConfig({displayName:"ContentLeftPadded",componentId:"sc-165zmdz"})`
    box-sizing: border-box;
    padding-left: ${e=>e.theme.spacing.sidebarWidth}px;

    @media ${e=>e.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        padding-left: 0px;
    }
`;let we=class e extends n["Component"]{constructor(){super(...arguments);this.toggleTokenBalanceContent=(()=>{this.tokenBalanceExpanded=!this.tokenBalanceExpanded})}render(){let{translation:e,locale:t,historicalBalance:a,totalBalance:l}=this.props;return n["createElement"](ye,{accountHasTokens:a.isLoaded()&&a.data.hasTokens()},n["createElement"](ve,null,n["createElement"](G["b"],{behavior:"show",forScreenWidth:{lowerThan:540}},n["createElement"](I["a"],null,n["createElement"](j["a"],null,n["createElement"](R["a"],null,e.get("accountView.content.balance.label"))))),n["createElement"](I["a"],{responsive:{ignoreFirstLabel:"forLowRes"}},n["createElement"](j["a"],{autoHeight:!0},n["createElement"](R["a"],null,e.get("accountView.content.balance.label")),a.isLoaded()&&l?n["createElement"](fe,null,n["createElement"](xe,null,n["createElement"](X,{ethBalance:a.data.getEthBalance(),totalBalance:l,locale:t}),a.data.hasTokens()?n["createElement"](ee,{tokenAggregatedBalance:a.data.aggregateTokenBalance(),totalTokenTypes:a.data.getTokenTypeCount(),totalBalance:l,expanded:this.tokenBalanceExpanded,onToggleExpand:this.toggleTokenBalanceContent,locale:t,translation:e}):null)):a.loadStatus===i["LoadStatus"].Loading?n["createElement"](p["a"],null):n["createElement"](h["a"],{translation:e})))),this.tokenBalanceExpanded&&a.isLoaded()&&l?n["createElement"](ae["a"],{duration:.2,delay:.2},n["createElement"](fe,null,n["createElement"](Ee,{tokenBalances:a.data.getAllTokenBalances(),translation:e,locale:t}))):null)}};l["b"]([te["observable"]],we.prototype,"tokenBalanceExpanded",void 0);l["b"]([te["action"]],we.prototype,"toggleTokenBalanceContent",void 0);we=l["b"]([c["observer"]],we);a.d(t,"Balance",function(){return Be});class Be extends n["Component"]{render(){let{historicalBalance:e,isFreshAccount:t,totalBalance:a,translation:l,locale:r}=this.props;return n["createElement"](n["Fragment"],null,n["createElement"](N,{accountBalance:e,isFreshAccount:t,translation:l,locale:r}),n["createElement"](M,null,n["createElement"](G["b"],{behavior:"hide",forScreenWidth:{lowerThan:G["a"].ForStandardView}},n["createElement"](P["a"],{height:"58px"})),t?null:n["createElement"](we,{historicalBalance:e,totalBalance:a,translation:l,locale:r})))}}}}]);
//# sourceMappingURL=d7f641f3903fc599979f.bundle.js.map