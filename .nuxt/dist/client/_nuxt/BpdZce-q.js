import{s as y}from"./Q9pR6I4P.js";import{s as A}from"./C9otwUhM.js";import P from"./BIG26Bfg.js";import k from"./BoW035Zk.js";import _ from"./DCGMoA2j.js";import{s as I}from"./48u16HRE.js";import{O as C,a3 as s,g as v,v as f,x as d,a1 as x,M as B,N,G as l,B as u,A as b,F as S,E as g,a4 as p,z as w}from"./BxJg9kvP.js";import"./bwqmDGYB.js";import"./Be1fzYNM.js";import"./BWtejpK4.js";import"./U2t6PJoL.js";import"./CWk3miUC.js";import"./DmfvTtO6.js";var H=({dt:e})=>`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${e("accordion.panel.border.width")};
    border-color: ${e("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${e("accordion.header.padding")};
    color: ${e("accordion.header.color")};
    background: ${e("accordion.header.background")};
    border-style: solid;
    border-width: ${e("accordion.header.border.width")};
    border-color: ${e("accordion.header.border.color")};
    font-weight: ${e("accordion.header.font.weight")};
    border-radius: ${e("accordion.header.border.radius")};
    transition: background ${e("accordion.transition.duration")}, color ${e("accordion.transition.duration")}, outline-color ${e("accordion.transition.duration")}, box-shadow ${e("accordion.transition.duration")};
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${e("accordion.header.first.border.width")};
    border-start-start-radius: ${e("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${e("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${e("accordion.header.focus.ring.shadow")};
    outline: ${e("accordion.header.focus.ring.width")} ${e("accordion.header.focus.ring.style")} ${e("accordion.header.focus.ring.color")};
    outline-offset: ${e("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${e("accordion.header.hover.background")};
    color: ${e("accordion.header.hover.color")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${e("accordion.header.active.background")};
    color: ${e("accordion.header.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
    background: ${e("accordion.header.active.hover.background")};
    color: ${e("accordion.header.active.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${e("accordion.content.border.width")};
    border-color: ${e("accordion.content.border.color")};
    background-color: ${e("accordion.content.background")};
    color: ${e("accordion.content.color")};
    padding: ${e("accordion.content.padding")};
}
`,E={root:"p-accordion p-component"},D=C.extend({name:"accordion",style:H,classes:E}),z={name:"BaseAccordion",extends:I,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:D,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},F={name:"Accordion",extends:z,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(o){this.d_value=o},activeIndex:{immediate:!0,handler:function(o){this.hasAccordionTab&&(this.d_value=this.multiple?o==null?void 0:o.map(String):o==null?void 0:o.toString())}}},methods:{isItemActive:function(o){var r;return this.multiple?(r=this.d_value)===null||r===void 0?void 0:r.includes(o):this.d_value===o},updateValue:function(o){var r,t=this.isItemActive(o);this.multiple?t?this.d_value=this.d_value.filter(function(i){return i!==o}):this.d_value?this.d_value.push(o):this.d_value=[o]:this.d_value=t?null:o,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(r=this.d_value)===null||r===void 0?void 0:r.map(Number):Number(this.d_value)),this.$emit(t?"tab-close":"tab-open",{originalEvent:void 0,index:Number(o)})},isAccordionTab:function(o){return o.type.name==="AccordionTab"},getTabProp:function(o,r){return o.props?o.props[r]:void 0},getKey:function(o,r){return this.getTabProp(o,"header")||r},getHeaderPT:function(o,r){var t=this;return{root:s({onClick:function(a){return t.onTabClick(a,r)}},this.getTabProp(o,"headerProps"),this.getTabPT(o,"header",r)),toggleicon:s(this.getTabProp(o,"headeractionprops"),this.getTabPT(o,"headeraction",r))}},getContentPT:function(o,r){return{root:s(this.getTabProp(o,"contentProps"),this.getTabPT(o,"toggleablecontent",r)),transition:this.getTabPT(o,"transition",r),content:this.getTabPT(o,"content",r)}},getTabPT:function(o,r,t){var i=this.tabs.length,a={props:o.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:t,count:i,first:t===0,last:t===i-1,active:this.isItemActive("".concat(t))}};return s(this.ptm("accordiontab.".concat(r),a),this.ptmo(this.getTabProp(o,"pt"),r,a))},onTabClick:function(o,r){this.$emit("tab-click",{originalEvent:o,index:r})}},computed:{tabs:function(){var o=this;return this.$slots.default().reduce(function(r,t){return o.isAccordionTab(t)?r.push(t):t.children&&t.children instanceof Array&&t.children.forEach(function(i){o.isAccordionTab(i)&&r.push(i)}),r},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:_,AccordionHeader:k,AccordionContent:P,ChevronUpIcon:A,ChevronRightIcon:y}};function K(e,o,r,t,i,a){var m=v("AccordionHeader"),$=v("AccordionContent"),T=v("AccordionPanel");return d(),f("div",s({class:e.cx("root")},e.ptmi("root")),[a.hasAccordionTab?(d(!0),f(B,{key:0},N(a.tabs,function(n,c){return d(),l(T,{key:a.getKey(n,c),value:"".concat(c),pt:{root:a.getTabPT(n,"root",c)},disabled:a.getTabProp(n,"disabled")},{default:u(function(){return[b(m,{class:S(a.getTabProp(n,"headerClass")),pt:a.getHeaderPT(n,c)},{toggleicon:u(function(h){return[h.active?(d(),l(p(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[e.collapseIcon,h.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(n,"headericon",c)),null,16,["class"])):(d(),l(p(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[e.expandIcon,h.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(n,"headericon",c)),null,16,["class"]))]}),default:u(function(){return[n.children&&n.children.headericon?(d(),l(p(n.children.headericon),{key:0,isTabActive:a.isItemActive("".concat(c)),active:a.isItemActive("".concat(c)),index:c},null,8,["isTabActive","active","index"])):g("",!0),n.props&&n.props.header?(d(),f("span",s({key:1,ref_for:!0},a.getTabPT(n,"headertitle",c)),w(n.props.header),17)):g("",!0),n.children&&n.children.header?(d(),l(p(n.children.header),{key:2})):g("",!0)]}),_:2},1032,["class","pt"]),b($,{pt:a.getContentPT(n,c)},{default:u(function(){return[(d(),l(p(n)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):x(e.$slots,"default",{key:1})],16)}F.render=K;export{F as default};
