import{b as t}from"./index-c06c0c49.js";const m=e=>({"":[{$formkit:"text",prefixIcon:"tools",outerClass:"col-12 sm:col-6 md:col-6",name:"teamMemberName",validation:"required",placeholder:e("teamMemberName"),label:e("teamMemberName")},{$formkit:"text",prefixIcon:"tools",outerClass:"col-12 sm:col-6 md:col-6",name:"jobTitle",validation:"required",placeholder:e("jobTitle"),label:e("jobTitle")},{$cmp:"FormKit",props:{outerClass:"col-12 sm:col-6 md:col-2",type:"image",name:"teamMemberImage",value:"0.701566374267176.png"}}]}),r="team_members_list",n=async(e,a)=>new Promise(o=>{if(a=="create"){const i={context:{title:"team_member_create",submitHandler:{endpoint:t.teamMemberCreate,redirectRoute:r},sections:m(e)}};setTimeout(()=>o(i),100);return}const s={context:{title:"team_member_update",submitHandler:{endpoint:t.teamMemberUpdate,redirectRoute:r},sections:m(e),findHandler:{endpoint:t.teamMemberFindForUpdate,requestPropertyName:"teamMemberId"}}};setTimeout(()=>o(s),100)});export{n as g};
