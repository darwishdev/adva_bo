import{b as t}from"./index-c06c0c49.js";const r=e=>({"":[{$formkit:"text",prefixIcon:"tools",outerClass:"col-12 sm:col-6 md:col-5",name:"projectName",validation:"required",placeholder:e("projectName"),label:e("projectName")},{$formkit:"dropdownCustom",outerClass:"col-6",name:"categoryId",validation:"required",options:"categoriesInputList",requestValue:1,cacheName:"projectCategories",placeholder:e("categories"),label:e("categories")},{$cmp:"FormKit",props:{outerClass:"col-12 sm:col-6 md:col-2",type:"image",name:"projectImage",value:"0.701566374267176.png"}}]}),s="projects_list",p=async(e,c)=>new Promise(o=>{if(c=="create"){const i={context:{title:"projects_create",submitHandler:{endpoint:t.projectCreate,redirectRoute:s},sections:r(e)}};setTimeout(()=>o(i),100);return}const a={context:{title:"projects_update",submitHandler:{endpoint:t.projectUpdate,redirectRoute:s},sections:r(e),findHandler:{endpoint:t.projectFindForUpdate,requestPropertyName:"projectId"}}};setTimeout(()=>o(a),100)});export{p as g};
