import{d as n,u as m,w as u,a as p,F as d,af as _,b as s,o as f,c as v,e as x,S as b,f as h,i as N,H as w}from"./index-c06c0c49.js";const S=n({__name:"ServicesList",async setup(C){let e,t;const{t:a}=m(),{records:o,deletedRecords:r,options:c}=([e,t]=u(()=>s.servicesList({})),e=await e,t(),e),i={serviceName:new p("serviceName",{sortable:!0,isGlobalFilter:!0,filter:{matchMode:d.CONTAINS,input:{$formkit:"text",prefixIcon:"tools",outerClass:"col-12 sm:col-6 md:col-6",name:"serviceName",placeholder:a("serviceName")}}}),serviceImage:new _("serviceImage",{sortable:!0,isGlobalFilter:!0})},l={context:{title:"services",dataKey:"serviceId",records:o,exportable:!0,deletedRecords:r,displayType:"table",fetchFn:s.servicesList,options:c,headers:i}};return(I,y)=>(f(),v(b,{timeout:"0"},{default:x(()=>[h(N(w),{class:"sm-column",context:l.context},null,8,["context"])]),_:1}))}});export{S as default};
