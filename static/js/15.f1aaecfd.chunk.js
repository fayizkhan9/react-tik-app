(this["webpackJsonptokyo-free-black-react-admin-dashboard-js"]=this["webpackJsonptokyo-free-black-react-admin-dashboard-js"]||[]).push([[15],{382:function(e,t,n){"use strict";var i=n(390),r=n.n(i).a.create({baseURL:"http://localhost:5000",headers:{"Content-Type":"application/json"}});r.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&console.log("dispatch logout"),Promise.reject(e)})),t.a=r},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(533),r=n(96),a=function(e,t){return function(n){var a=Object(i.a)();n({type:r.b,payload:{msg:e,alertType:t,id:a}}),setTimeout((function(){return n({type:r.a,payload:a})}),3e3)}}},525:function(e,t,n){"use strict";n.r(t);var i=n(386),r=n(385),a=n(15),c=n(0),s=n(382),l=n(120),o=n(383),d=(n(391),n(486)),j=n(527),u=n(373),b=n(417),p=n(1),f={display:"flex",flexDirection:"row",textAlign:"center"},h={padding:"10px",flex:"20%",minWidth:"20%"},x={padding:"10px",flex:"80%"};t.default=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],O=t[1],y=Object(c.useState)(""),v=Object(a.a)(y,2),k=v[0],m=v[1],g=Object(c.useState)(""),L=Object(a.a)(g,2),w=L[0],C=L[1],S=Object(c.useState)(""),T=Object(a.a)(S,2),D=T[0],R=T[1],A=Object(c.useState)(""),E=Object(a.a)(A,2),P=E[0],W=E[1];Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/store/getLinks");case 2:t=e.sent,n=t.data[0].links,O(n.link1),m(n.link2),C(n.link3),R(n.link4),W(n.link5);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(!localStorage.admin)return window.location.href="/login";!function(){e.apply(this,arguments)}()}),[]);var B=function(){var e=Object(r.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/store/addLinks",{link1:n,link2:k,link3:w,link4:D,link5:P});case 3:l.a.dispatch(Object(o.a)("Added Sucessfully !","info")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0&&l.a.dispatch(Object(o.a)("Something went wrong !","error"));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(d.a,{style:{padding:"15px",margin:"15px"},children:[Object(p.jsxs)("p",{style:{margin:"10px",fontSize:"20px"},children:[" ",Object(p.jsx)("b",{children:"Manage Shareable Links "})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:f,children:[Object(p.jsx)("div",{style:h,children:Object(p.jsx)(b.a,{title:"Link 1 : ",titleTypographyProps:{variant:"h6"}})}),Object(p.jsxs)("div",{style:x,children:["  ",Object(p.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(p.jsx)(j.a,{fullWidth:!0,placeholder:"Enter Link",name:"link1",value:n,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",onClick:B,style:{width:"30%",borderTopLeftRadius:0,borderBottomLeftRadius:0,marginLeft:"-3px"},children:"Add"})]})})]})]}),Object(p.jsxs)("div",{style:f,children:[Object(p.jsx)("div",{style:h,children:Object(p.jsx)(b.a,{title:"Link 2 : ",titleTypographyProps:{variant:"h6"}})}),Object(p.jsx)("div",{style:x,children:Object(p.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(p.jsx)(j.a,{fullWidth:!0,placeholder:"Enter Link",name:"link2",value:k,onChange:function(e){return m(e.target.value)}}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",style:{width:"30%",borderTopLeftRadius:0,borderBottomLeftRadius:0,marginLeft:"-3px"},onClick:B,children:"Add"})]})})})]}),Object(p.jsxs)("div",{style:f,children:[Object(p.jsx)("div",{style:h,children:Object(p.jsx)(b.a,{title:"Link 3 : ",titleTypographyProps:{variant:"h6"}})}),Object(p.jsx)("div",{style:x,children:Object(p.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(p.jsx)(j.a,{fullWidth:!0,placeholder:"Enter Link",name:"link3",value:w,onChange:function(e){return C(e.target.value)}}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",style:{width:"30%",borderTopLeftRadius:0,borderBottomLeftRadius:0,marginLeft:"-3px"},onClick:B,children:"Add"})]})})})]}),Object(p.jsxs)("div",{style:f,children:[Object(p.jsx)("div",{style:h,children:Object(p.jsx)(b.a,{title:"Link 4 : ",titleTypographyProps:{variant:"h6"}})}),Object(p.jsx)("div",{style:x,children:Object(p.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(p.jsx)(j.a,{fullWidth:!0,placeholder:"Enter Link",name:"link4",value:D,onChange:function(e){return R(e.target.value)}}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",style:{width:"30%",borderTopLeftRadius:0,borderBottomLeftRadius:0,marginLeft:"-3px"},onClick:B,children:"Add"})]})})})]}),Object(p.jsxs)("div",{style:f,children:[Object(p.jsx)("div",{style:h,children:Object(p.jsx)(b.a,{title:"Link 5 : ",titleTypographyProps:{variant:"h6"}})}),Object(p.jsx)("div",{style:x,children:Object(p.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(p.jsx)(j.a,{fullWidth:!0,placeholder:"Enter Link",name:"link5",value:P,onChange:function(e){return W(e.target.value)}}),Object(p.jsx)(u.a,{type:"submit",variant:"contained",style:{width:"30%",borderTopLeftRadius:0,borderBottomLeftRadius:0,marginLeft:"-3px"},onClick:B,children:"Add"})]})})})]})]})})}}}]);
//# sourceMappingURL=15.f1aaecfd.chunk.js.map