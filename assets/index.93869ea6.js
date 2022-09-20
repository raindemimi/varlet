import{R as N}from"./index.b48b1ecd.js";import{L as R}from"./index.5ef24b1a.js";import{a as j}from"./elements.6430139a.js";import{c as B,e as f}from"./components.0c747098.js";import{d as $,_ as k,ai as b,D as F,f as y,h as w,N as z,R as L,q as a,S as n,an as t,F as D,P as p,Q as u,M as r,ao as I,ap as A}from"./vue-router.esm-bundler.42d3c0c2.js";import{A as c}from"./AppType.4c910996.js";import{R as C}from"./index.f937bb0a.js";import{a as M}from"./utils.76713588.js";import{u as V,a as E,_ as T,b as q,c as P}from"./index.2dfd012d.js";import"./index.712020a1.js";/* empty css               */import"./shared.dad8d41e.js";function Q(e){return["fill","contain","cover","none","scale-down"].includes(e)}const G={src:{type:String},fit:{type:String,validator:Q,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}},{n:H,classes:J}=B("image"),K=$({name:"VarImage",directives:{Lazy:R,Ripple:N},props:G,setup(e){return{n:H,classes:J,toSizeUnit:j,handleLoad:l=>{const d=l.currentTarget,{lazy:v,onLoad:h,onError:_}=e;v?(d._lazy.state==="success"&&f(h,l),d._lazy.state==="error"&&f(_,l)):f(h,l)},handleError:l=>{const{lazy:d,onError:v}=e;!d&&f(v,l)}}}});const O=["alt","lazy-error","lazy-loading"],W=["alt","src"];function X(e,i,S,l,d,v){const h=b("lazy"),_=b("ripple");return F((y(),w("div",{class:z(e.classes(e.n(),"var--box",[!e.block,"var--inline-block"])),style:L({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?F((y(),w("img",{key:0,class:z(e.n("image")),alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:L({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[1]||(i[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[2]||(i[2]=(...o)=>e.onClick&&e.onClick(...o))},null,46,O)),[[h,e.src]]):(y(),w("img",{key:1,class:z(e.n("image")),alt:e.alt,style:L({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[4]||(i[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[5]||(i[5]=(...o)=>e.onClick&&e.onClick(...o))},null,46,W))],6)),[[_,{disabled:!e.ripple}]])}const s=k(K,[["render",X]]);s.install=function(e){e.component(s.name,s)};const Y={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},Z={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"},{add:U,use:x,pack:m,packs:be,merge:Fe}=V(),ee=e=>{P(e),x(e)};E("zh-CN",T);E("en-US",q);U("zh-CN",Y);U("en-US",Z);const g=e=>(I("data-v-fd904990"),e=e(),A(),e),te={class:"image-example-fit-item"},ae=g(()=>r("div",{class:"image-example-margin-bottom"},"fill",-1)),ie={class:"image-example-fit-item"},se=g(()=>r("div",{class:"image-example-margin-bottom"},"cover",-1)),oe={class:"image-example-fit-item"},re=g(()=>r("div",{class:"image-example-margin-bottom"},"contain",-1)),le={class:"image-example-fit-item"},ne=g(()=>r("div",{class:"image-example-margin-bottom"},"none",-1)),de={class:"image-example-fit-item"},pe=g(()=>r("div",{class:"image-example-margin-bottom"},"scale-down",-1)),ue={setup(e){return M(ee),(i,S)=>(y(),w(D,null,[a(t(c),null,{default:n(()=>[p(u(t(m).basicUsage),1)]),_:1}),a(t(s),{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(c),null,{default:n(()=>[p(u(t(m).fitMode),1)]),_:1}),a(t(C),null,{default:n(()=>[r("div",te,[a(t(s),{width:"22.666vw",height:"22.666vw",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ae]),r("div",ie,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),se]),r("div",oe,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),re]),r("div",le,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ne]),r("div",de,[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),pe])]),_:1}),a(t(c),null,{default:n(()=>[p(u(t(m).setRadius),1)]),_:1}),a(t(C),null,{default:n(()=>[a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",class:"image-example-fit-item"}),a(t(s),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),a(t(c),null,{default:n(()=>[p(u(t(m).useRipple),1)]),_:1}),a(t(s),{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),a(t(c),null,{default:n(()=>[p(u(t(m).useLazyLoad),1)]),_:1}),a(t(s),{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64))}},Ce=k(ue,[["__scopeId","data-v-fd904990"]]);export{Ce as default};
