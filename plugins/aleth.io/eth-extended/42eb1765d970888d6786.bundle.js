(window["webpackJsonp_aleth_io_ethExtended"]=window["webpackJsonp_aleth_io_ethExtended"]||[]).push([[9],{CC9R:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var s=r("cDcd");var l=r.n(s);var a=r("ZjfP");var o=r("D9CN");class i{constructor(e){this.gridFieldDataGetter=e}render(e){let t=this.gridFieldDataGetter(e);return s["createElement"](o["a"],{to:`page://aleth.io/tx?txHash=${t}`},s["createElement"](a["a"],null,t))}}},ryaU:function(e,t,r){"use strict";var s=r("bb6g");var l=r("cDcd");var a=r("sGQ9");var o=r("ckoB");var i=r("+Udl");class n extends l["Component"]{render(){return l["createElement"](i["a"],Object.assign({},this.props),l["createElement"]("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l["createElement"]("polygon",{points:"0 0 24 0 24 24 0 24"}),l["createElement"]("path",{d:"M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z M12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 Z M12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 Z",fill:"currentColor"})))}}class h extends l["Component"]{render(){return l["createElement"](i["a"],Object.assign({},this.props),l["createElement"]("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l["createElement"]("polygon",{points:"0 0 24 0 24 24 0 24"}),l["createElement"]("path",{d:"M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z M12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 Z",fill:"currentColor"})))}}r.d(t,"a",function(){return u});const c=o["b"].div`
    padding: 8px 8px 8px 32px;
    position: relative;
`;const p=o["b"].label`
    text-transform: uppercase;
    display: block;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.checkboxLabel};
`;const d=o["b"].div`
    position: absolute;
    top: 4px;
    left: 4px;
    color: ${({theme:e})=>e.colors.checkboxIcon};
`;let u=class e extends l["Component"]{constructor(){super(...arguments);this.onChange=(e=>{this.props.onChange&&this.props.onChange(e,!0,this.props.name,this.props.value)})}render(){return l["createElement"](c,null,l["createElement"]("input",{type:"radio",id:this.props.id,name:"radio_"+this.props.name,value:this.props.value,checked:this.props.checked||!1,onChange:this.onChange,style:{display:"none"}}),l["createElement"](p,{htmlFor:this.props.id},l["createElement"](d,null,this.props.checked?l["createElement"](n,null):l["createElement"](h,null)),this.props.children))}};u=s["b"]([a["observer"]],u)},wzN8:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var s=r("ckoB");const l=Object(s["b"])("div")`
    font-size: 12px;
    height: 28px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0px 32px 0px 24px;
    box-sizing: border-box;
    border: 1px solid ${e=>e.theme.colors.selectBoxBorder};
    border-radius: 4px;
    background-color: ${e=>e.theme.colors.selectBoxBg};
    vertical-align: middle;
    line-height: 24px;
    color: ${e=>e.disabled?e.theme.colors.selectBoxTextDisabled:e.theme.colors.selectBoxText};
    cursor: ${e=>e.disabled?"default":"pointer"};

    position: relative;
    &:before {
        content: "";
        position: absolute;

        border-radius: 50%;
        background-color: ${e=>e.disabled?e.theme.colors.selectBoxTextDisabled:e.theme.colors.selectBoxBubble};
        width: 8px;
        height: 8px;
        top: 9px;
        left: 8px;
    }
    &:after {
        content: "";
        position: absolute;

        top: 10px;
        right: 11px;
        border-top: 5px solid ${e=>e.theme.colors.selectBoxArrow};
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    }
`},xNsJ:function(e,t,r){"use strict";r.r(t);var s=r("bb6g");var l=r("cDcd");var a=r.n(l);var o=r("sGQ9");var i=r("lvN2");var n=r("INKD");var h=r("C4qQ");var c=r("uJLN");var p=r("/Aw6");var d=r("MBSL");var u=r("ryaU");var g=r("wzN8");let m=class e extends l["Component"]{constructor(){super(...arguments);this.onCheckboxChange=((e,t,r,s)=>{t&&this.props.fields.setSelectedField(s);this.requestClose()})}render(){let{translation:e}=this.props;return l["createElement"](d["a"],{disabled:this.props.disabled,offset:{left:-20,top:-47},render:({requestClose:t})=>{this.requestClose=t;return l["createElement"](o["Observer"],null,()=>this.props.fields.getFields().map(t=>l["createElement"](u["a"],{id:"highlight_"+t.key,key:t.key,value:t.key,name:"highlight",checked:this.props.fields.getSelectedField().key===t.key,onChange:this.onCheckboxChange},t.getLabel(e))))}},l["createElement"](g["a"],{disabled:this.props.disabled},this.props.fields.getSelectedField().getLabel(e)))}};m=s["b"]([o["observer"]],m);var b=r("ckoB");var v=r("F3RY");const x=28;const E=({children:e,className:t,onClick:r})=>l["createElement"]("div",{className:t,onClick:r},e);const C=Object(v["b"])(E)`
    height: ${28}px;
    width: ${28}px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    padding: 1px;
    border: 1px solid ${({active:e,theme:t})=>e?t.colors.txViewSelector:"transparent"};
    color: ${({active:e,theme:t})=>e?t.colors.txViewSelectorActive:t.colors.txViewSelector};
    &:hover {
        border: 1px solid ${({theme:e})=>e.colors.txViewSelector};
        color: ${({theme:e})=>e.colors.txViewSelectorActive};
    }
`;var f=r("+Udl");class w extends l["Component"]{render(){return l["createElement"](f["a"],Object.assign({},this.props),l["createElement"]("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l["createElement"]("polygon",{points:"0 0 24 0 24 24 0 24"}),l["createElement"]("path",{d:"M4,20 L8,20 L8,4 L4,4 L4,20 Z M10,4 L10,20 L14,20 L14,4 L10,4 Z M16,4 L16,20 L20,20 L20,4 L16,4 Z",fill:"currentColor",fillRule:"nonzero"})))}}class y extends l["Component"]{render(){return l["createElement"](f["a"],Object.assign({},this.props),l["createElement"]("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l["createElement"]("polygon",{points:"0 0 24 0 24 24 0 24"}),l["createElement"]("path",{d:"M4,11 L11,11 L11,4 L4,4 L4,11 Z M4,20 L11,20 L11,13 L4,13 L4,20 Z M13,20 L20,20 L20,13 L13,13 L13,20 Z M13,4 L13,11 L20,11 L20,4 L13,4 Z",fill:"currentColor",fillRule:"nonzero"})))}}const L=28;const M=b["b"].div`
    padding: 0 7px;
    display: flex;
    width: ${80}px;
    justify-content: space-between;
`;let T=class e extends l["Component"]{constructor(){super(...arguments);this.onListClick=(()=>{this.props.txsViewMode.setToTableList()});this.onGridClick=(()=>{this.props.txsViewMode.setToHeatMapGrid()})}render(){return l["createElement"](M,null,l["createElement"](C,{active:this.props.txsViewMode.isTableList,onClick:this.onListClick},l["createElement"](w,null)),l["createElement"](C,{active:this.props.txsViewMode.isHeatMapGrid,onClick:this.onGridClick},l["createElement"](y,null)))}};T=s["b"]([o["observer"]],T);var k=r("0jj9");class V{constructor(e,t,r){this.txsViewMode=e;this.txsHighlightFields=t;this.txsGridSortingOptions=r}}var S=r("VBo9");var F;!function(e){e[e["TableList"]=0]="TableList";e[e["HeatMapGrid"]=1]="HeatMapGrid"}(F||(F={}));class H{constructor(){this.txsViewMode=1}get getTxsViewMode(){return this.txsViewMode}setTxsViewMode(e){this.txsViewMode=e}setToTableList(){this.setTxsViewMode(0)}setToHeatMapGrid(){this.setTxsViewMode(1)}get isTableList(){return 0===this.txsViewMode}get isHeatMapGrid(){return 1===this.txsViewMode}}s["b"]([S["observable"]],H.prototype,"txsViewMode",void 0);s["b"]([S["computed"]],H.prototype,"getTxsViewMode",null);s["b"]([S["action"]],H.prototype,"setTxsViewMode",null);s["b"]([S["computed"]],H.prototype,"isTableList",null);s["b"]([S["computed"]],H.prototype,"isHeatMapGrid",null);class D{getFields(){return this.fields}getSelectedField(){return this.selectedField}setSelectedField(e){const t=this.fields.find(t=>e===t.key);t&&(this.selectedField=t)}}s["b"]([S["observable"]],D.prototype,"selectedField",void 0);s["b"]([S["action"]],D.prototype,"setSelectedField",null);var G;!function(e){e["Value"]="value";e["ContractMessageCount"]="cmcount";e["GasUsed"]="gasused";e["GasPrice"]="gasprice";e["GasLimit"]="gaslimit";e["ContractCreationCount"]="ccreationcount"}(G||(G={}));class B extends D{constructor(){super();this.fields=[{key:G.Value,getLabel:e=>e.get("blockView.content.transactionsHighlight.value.label"),getData:e=>e.value},{key:G.ContractMessageCount,getLabel:e=>e.get("blockView.content.transactionsHighlight.contractMessageCount.label"),getData:e=>e.contractMsgCount},{key:G.GasUsed,getLabel:e=>e.get("general.gasUsed"),getData:e=>e.gasUsed},{key:G.GasPrice,getLabel:e=>e.get("general.gasPrice"),getData:e=>e.gasPrice},{key:G.GasLimit,getLabel:e=>e.get("general.gasLimit"),getData:e=>e.gasLimit},{key:G.ContractCreationCount,getLabel:e=>e.get("blockView.content.transactionsHighlight.contractCreationCount.label"),getData:e=>e.contractCreationCount}];this.setSelectedField(G.Value)}}class ${create(){return new V(new H,new B,new k["a"])}}var O=r("PlaU");var z=r("i0eD");var j=r("jhrA");var U=r("NdRp");var P=r("JM6r");var Z=r("j+Ih");var N=r("v6by");const R=b["b"].div`
    display: flex;
    padding: 8px 8px 8px 0;

    > * {
        margin-left: 8px;
    }
`;class A extends l["Component"]{render(){let{tx:e,translation:t}=this.props;return l["createElement"](R,null,l["createElement"](U["a"],{variant:"small"},e.hash),l["createElement"](h["a"],null,t.get("general.from")),l["createElement"](P["a"],{variant:"small"},e.from),e.type===Z["a"].Create?l["createElement"](l["Fragment"],null,l["createElement"](h["a"],null,t.get("general.creates")),l["createElement"](P["a"],{variant:"small",Icon:j["a"]},e.to)):l["createElement"](l["Fragment"],null,l["createElement"](h["a"],null,t.get("general.to")),l["createElement"](P["a"],{variant:"small"},e.to)),l["createElement"]("div",{style:{paddingLeft:8}},l["createElement"](h["a"],{arrow:!0,disabled:e.value.isZero()},t.get("txTooltip.value.label"))),l["createElement"]("div",{style:{display:"flex"}},l["createElement"](O["a"],{variant:"smallThin",wei:e.value,locale:this.props.locale}),this.props.latestEthPrice?l["createElement"](z["a"],{variant:"smallThin",value:Object(N["b"])(e.value).multipliedBy(this.props.latestEthPrice).toNumber(),locale:this.props.locale}):null))}}var I=r("T0iu");var W=r("/nIY");var _=r("q7g1");var K=r("MasL");var q=r("LwGa");var J=r("7M1p");const Q=({size:e,highlightThreshold:t})=>l["createElement"](J["ThemeContext"].Consumer,null,r=>l["createElement"](q["a"],{size:e,wrapperSize:r.spacing.bubbleWrapperSize,highlightThreshold:t,backgroundColor:r.colors.txColorCode}));class Y extends l["PureComponent"]{constructor(){super(...arguments);this.handleMouseEnter=(()=>{this.props.onMouseEnter(this.props.tx)});this.handleMouseLeave=(()=>{this.props.onMouseLeave(this.props.tx)})}render(){return l["createElement"](_["a"],{onMount:e=>{e.addEventListener("mouseenter",this.handleMouseEnter);e.addEventListener("mouseleave",this.handleMouseLeave)},onUnmount:e=>{e.removeEventListener("mouseenter",this.handleMouseEnter);e.removeEventListener("mouseleave",this.handleMouseLeave)}},l["createElement"](K["Link"],{to:`page://aleth.io/tx?txHash=${this.props.tx.hash}`},l["createElement"](Q,{size:this.props.bubbleSize,highlightThreshold:this.props.highlightThreshold})))}}class X extends l["PureComponent"]{render(){let{bubbleSizes:e,highlightThreshold:t}=this.props;return l["createElement"](l["Fragment"],null,this.props.transactions.map((r,s)=>l["createElement"](Y,{key:s,tx:r,bubbleSize:e[s],highlightThreshold:t,onMouseEnter:this.props.onTxMouseEnter,onMouseLeave:this.props.onTxMouseLeave})))}}const ee=b["b"].div`
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 2px 0px;
`;let te=class e extends l["Component"]{constructor(e){super(e);this.handleActiveChange=(e=>this.hoveredTx=e);this.handleTxEnter=(e=>{this.multiHover.enter(e)});this.handleTxLeave=(e=>{this.multiHover.leave()});this.handleTooltipEnter=(()=>{this.multiHover.enter(this.hoveredTx)});this.handleTooltipLeave=(()=>{this.multiHover.leave()});this.setupMultiHover(this.props.multiHover)}setupMultiHover(e){e||(e=new W["a"]({enterDelay:400,leaveDelay:400}));this.multiHover=e;this.multiHover.onActiveChange.subscribe(this.handleActiveChange)}componentDidUpdate(e){this.props.multiHover!==e.multiHover&&this.setupMultiHover(this.props.multiHover)}componentWillUnmount(){this.multiHover.onActiveChange.unsubscribe(this.handleActiveChange)}render(){let e=this.props.transactions.map(e=>this.props.highlightDataSelector(e));let t=this.props.scaleValuesFn(e);return l["createElement"](ee,{innerRef:e=>this.rootEl=e},l["createElement"](X,{transactions:this.props.transactions,bubbleSizes:t,highlightThreshold:this.props.highlightThreshold,onTxMouseEnter:this.handleTxEnter,onTxMouseLeave:this.handleTxLeave}),l["createElement"](I["a"],{visible:void 0!==this.hoveredTx,placement:"bottom-start",offset:8,alignmentOffset:-8,noFlip:!0,noArrow:!0,referenceElement:()=>this.rootEl,content:l["createElement"]("div",{onMouseEnter:this.handleTooltipEnter,onMouseLeave:this.handleTooltipLeave},this.props.txTooltipThunk(this.hoveredTx))},l["createElement"]("div",null)))}};s["b"]([S["observable"].ref],te.prototype,"hoveredTx",void 0);te=s["b"]([o["observer"]],te);var re=r("qJXn");var se=r("FhEI");var le=r("0p73");var ae=r("hfe/");var oe=r("CC9R");var ie=r("70YD");const ne=Object(v["b"])("div").withConfig({displayName:"TxHighlight",componentId:"sc-1sbhjyk"})`
    ${({highlight:e})=>e?v["a"]`
        position: relative;
        &:before {
            content: "";
            position: absolute;

            border-radius: 50%;
            background-color: ${e=>e.theme.colors.selectBoxBubble};
            width: 8px;
            height: 8px;
            top: 5px;
            left: -15px;
        }
    `:""}
`;class he{constructor(e,t){this.translation=e;this.highlight=t}render(e){return l["createElement"](ne,{highlight:this.highlight(e)},this.translation.get("general.tx.type."+Z["a"][e.type]))}}class ce extends le["a"]{constructor(e,t,r){super();this.fields=[{label:e.get("general.grid.header.type.label"),fieldKey:de.Type,type:"string",isSortable:!0,selected:!0,getFieldValue:e=>Z["a"][e.type],renderer:new he(e,r)},{label:e.get("general.hash"),fieldKey:de.Hash,type:"string",isSortable:!0,selected:!0,alwaysVisible:!0,getFieldValue:e=>e.hash,renderer:new oe["a"](e=>e.hash)},{label:e.get("general.from"),fieldKey:de.From,type:"string",isSortable:!0,selected:!0,getFieldValue:e=>e.from,renderer:new ie["a"](e=>e.from)},{label:e.get("general.to"),fieldKey:de.To,type:"string",isSortable:!0,selected:!0,getFieldValue:e=>e.to,renderer:new ie["a"](e=>e.to)},{label:e.get("general.valueEth"),fieldKey:de.Value,type:"number",isSortable:!0,selected:!0,getFieldValue:e=>e.value,renderer:new ae["a"](t,e=>e.value)},{label:e.get("general.feeEth"),fieldKey:de.Fee,type:"number",isSortable:!0,selected:!0,getFieldValue:e=>e.gasUsed.multipliedBy(e.gasPrice),renderer:new ae["a"](t,e=>e.gasUsed.multipliedBy(e.gasPrice))}]}}const pe=v["b"].div.withConfig({displayName:"TxsGridRoot",componentId:"sc-1c1a0u6"})`
    margin-top: 16px;
`;var de;!function(e){e["Type"]="type";e["Hash"]="hash";e["From"]="from";e["To"]="to";e["Value"]="value";e["Fee"]="fee"}(de||(de={}));let ue=class e extends l["Component"]{constructor(e){super(e);this.highlight=(e=>{let t=this.scaledHighlightValues.get(e);if(void 0===t)throw new Error(`Missing scaledHighlightValues for txHash "${e.hash}"`);return t>this.props.highlightThreshold});this.gridFields=new ce(e.translation,e.locale,this.highlight);this.gridSortingOptions=this.props.gridSortingOptions}componentDidUpdate(e){this.props.translation!==e.translation&&(this.gridFields=new ce(this.props.translation,this.props.locale,this.highlight))}render(){let e=this.props.transactions.map(e=>this.props.highlightDataSelector(e));this.scaledHighlightValues=this.computeScaledHighlightValues(e);const t=this.props.transactions.map(e=>({key:e.hash,data:e}));return l["createElement"](pe,null,l["createElement"](re["a"],{rows:t,fields:this.gridFields,sortingOptions:this.gridSortingOptions,translation:this.props.translation}))}computeScaledHighlightValues(e){let t=new Map;Object(se["a"])(e).forEach((e,r)=>{t.set(this.props.transactions[r],e)});return t}};s["b"]([S["observable"].ref],ue.prototype,"gridFields",void 0);s["b"]([S["action"]],ue.prototype,"componentDidUpdate",null);ue=s["b"]([o["observer"]],ue);r.d(t,"BlockTxs",function(){return me});const ge=80;let me=class e extends a.a.Component{constructor(e){super(e);this.renderHeatMapTooltip=(e=>a.a.createElement(A,{tx:e,latestEthPrice:this.props.latestEthPrice,translation:this.props.translation,locale:this.props.locale}));let t=this.props.uiStateContainer.blockTxsState;if(!t){t=(new $).create();this.props.uiStateContainer.blockTxsState=t}}render(){let{translation:e,txs:t,locale:r,uiStateContainer:s}=this.props;let{txsGridSortingOptions:l,txsHighlightFields:o,txsViewMode:d}=s.blockTxsState;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i["a"],{minWidth:610},a.a.createElement(n["a"],null,a.a.createElement(h["a"],null,e.get("blockView.content.transactions.label")),a.a.createElement(p["a"],null,t.length)),t.length?a.a.createElement(n["a"],null,a.a.createElement(h["a"],null,e.get("blockView.content.transactionsHighlight.label")),a.a.createElement(m,{fields:o,translation:e}),a.a.createElement(T,{txsViewMode:d})):null),t.length?a.a.createElement(a.a.Fragment,null,d.isHeatMapGrid?a.a.createElement(i["a"],null,a.a.createElement(n["a"],{fullRow:!0,autoHeight:!0},a.a.createElement("div",null),a.a.createElement("div",{style:{maxWidth:600}},a.a.createElement(te,{transactions:t,highlightThreshold:80,highlightDataSelector:o.getSelectedField().getData,scaleValuesFn:se["a"],txTooltipThunk:this.renderHeatMapTooltip})))):a.a.createElement(ue,{transactions:t,highlightThreshold:80,highlightDataSelector:o.getSelectedField().getData,gridSortingOptions:l,locale:r,translation:e}),a.a.createElement(c["a"],{height:"64px"})):null)}};me=s["b"]([o["observer"]],me)}}]);
//# sourceMappingURL=42eb1765d970888d6786.bundle.js.map