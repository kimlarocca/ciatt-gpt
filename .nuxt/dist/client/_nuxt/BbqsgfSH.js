import{s as b}from"./48u16HRE.js";import{O as z,v as l,x as o,M as f,N as v,a3 as i,a1 as s,y as h,F as y,z as g,g as k,E as d,A as c}from"./BxJg9kvP.js";var M=({dt:e})=>`
.p-metergroup {
    display: flex;
    gap: ${e("metergroup.gap")};
}

.p-metergroup-meters {
    display: flex;
    background: ${e("metergroup.meters.background")};
    border-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-label-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-metergroup-label {
    display: inline-flex;
    align-items: center;
    gap: ${e("metergroup.label.gap")};
}

.p-metergroup-label-marker {
    display: inline-flex;
    width: ${e("metergroup.label.marker.size")};
    height: ${e("metergroup.label.marker.size")};
    border-radius: 100%;
}

.p-metergroup-label-icon {
    font-size: ${e("metergroup.label.icon.size")};
    width: ${e("metergroup.label.icon.size")};
    height: ${e("metergroup.label.icon.size")};
}

.p-metergroup-horizontal {
    flex-direction: column;
}

.p-metergroup-label-list-horizontal {
    gap: ${e("metergroup.label.list.horizontal.gap")};
}

.p-metergroup-horizontal .p-metergroup-meters {
    height: ${e("metergroup.meters.size")};
}

.p-metergroup-horizontal .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${e("metergroup.border.radius")};
    border-end-start-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-horizontal .p-metergroup-meter:last-of-type {
    border-start-end-radius: ${e("metergroup.border.radius")};
    border-end-end-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-vertical {
    flex-direction: row;
}

.p-metergroup-label-list-vertical {
    flex-direction: column;
    gap: ${e("metergroup.label.list.vertical.gap")};
}

.p-metergroup-vertical .p-metergroup-meters {
    flex-direction: column;
    width: ${e("metergroup.meters.size")};
    height: 100%;
}

.p-metergroup-vertical .p-metergroup-label-list {
    align-items: flex-start;
}

.p-metergroup-vertical .p-metergroup-meter:first-of-type {
    border-start-start-radius: ${e("metergroup.border.radius")};
    border-start-end-radius: ${e("metergroup.border.radius")};
}

.p-metergroup-vertical .p-metergroup-meter:last-of-type {
    border-end-start-radius: ${e("metergroup.border.radius")};
    border-end-end-radius: ${e("metergroup.border.radius")};
}
`,O={root:function(r){var t=r.props;return["p-metergroup p-component",{"p-metergroup-horizontal":t.orientation==="horizontal","p-metergroup-vertical":t.orientation==="vertical"}]},meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:function(r){var t=r.props;return["p-metergroup-label-list",{"p-metergroup-label-list-vertical":t.labelOrientation==="vertical","p-metergroup-label-list-horizontal":t.labelOrientation==="horizontal"}]},label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},S=z.extend({name:"metergroup",style:M,classes:O}),w={name:"MeterGroup",extends:b,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:"horizontal"},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}},style:S,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}},P={name:"MeterGroupLabel",hostName:"MeterGroup",extends:b,inheritAttrs:!1,props:{value:{type:Array,default:null},labelPosition:{type:String,default:"end"},labelOrientation:{type:String,default:"horizontal"}}};function G(e,r,t,p,$,n){return o(),l("ol",i({class:e.cx("labelList")},e.ptm("labelList")),[(o(!0),l(f,null,v(t.value,function(a,u){return o(),l("li",i({key:u+"_label",class:e.cx("label"),ref_for:!0},e.ptm("label")),[s(e.$slots,"icon",{value:a,class:y(e.cx("labelIcon"))},function(){return[a.icon?(o(),l("i",i({key:0,class:[a.icon,e.cx("labelIcon")],style:{color:a.color},ref_for:!0},e.ptm("labelIcon")),null,16)):(o(),l("span",i({key:1,class:e.cx("labelMarker"),style:{backgroundColor:a.color},ref_for:!0},e.ptm("labelMarker")),null,16))]}),h("span",i({class:e.cx("labelText"),ref_for:!0},e.ptm("labelText")),g(a.label)+" ("+g(e.$parentInstance.percentValue(a.value))+")",17)],16)}),128))],16)}P.render=G;var L={name:"MeterGroup",extends:w,inheritAttrs:!1,methods:{getPTOptions:function(r,t,p){return this.ptm(r,{context:{value:t,index:p}})},percent:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=(r-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,t)))},percentValue:function(r){return this.percent(r)+"%"},meterCalculatedStyles:function(r){return{backgroundColor:r.color,width:this.orientation==="horizontal"&&this.percentValue(r.value),height:this.orientation==="vertical"&&this.percentValue(r.value)}}},computed:{totalPercent:function(){return this.percent(this.value.reduce(function(r,t){return r+t.value},0))},percentages:function(){var r=0,t=[];return this.value.forEach(function(p){r+=p.value,t.push(r)}),t}},components:{MeterGroupLabel:P}},V=["aria-valuemin","aria-valuemax","aria-valuenow"];function C(e,r,t,p,$,n){var a=k("MeterGroupLabel");return o(),l("div",i({class:e.cx("root"),role:"meter","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":n.totalPercent},e.ptmi("root")),[e.labelPosition==="start"?s(e.$slots,"label",{key:0,value:e.value,totalPercent:n.totalPercent,percentages:n.percentages},function(){return[c(a,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):d("",!0),s(e.$slots,"start",{value:e.value,totalPercent:n.totalPercent,percentages:n.percentages}),h("div",i({class:e.cx("meters")},e.ptm("meters")),[(o(!0),l(f,null,v(e.value,function(u,m){return s(e.$slots,"meter",{key:m,value:u,index:m,class:y(e.cx("meter")),orientation:e.orientation,size:n.percentValue(u.value),totalPercent:n.totalPercent},function(){return[n.percent(u.value)?(o(),l("span",i({key:0,class:e.cx("meter"),style:n.meterCalculatedStyles(u),ref_for:!0},n.getPTOptions("meter",u,m)),null,16)):d("",!0)]})}),128))],16),s(e.$slots,"end",{value:e.value,totalPercent:n.totalPercent,percentages:n.percentages}),e.labelPosition==="end"?s(e.$slots,"label",{key:1,value:e.value,totalPercent:n.totalPercent,percentages:n.percentages},function(){return[c(a,{value:e.value,labelPosition:e.labelPosition,labelOrientation:e.labelOrientation,unstyled:e.unstyled,pt:e.pt},null,8,["value","labelPosition","labelOrientation","unstyled","pt"])]}):d("",!0)],16,V)}L.render=C;export{L as default};
