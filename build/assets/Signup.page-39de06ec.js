import{j as e}from"./index-e7381bb3.js";import{H as x}from"./HeaderComponent-8179ead5.js";import{u as h,F as p,b as n,d as l,e as o,f as m,I as c,g as d,B as j,t as u,s as f}from"./button-e62b41fb.js";function b(){const t=h({resolver:u(f),mode:"all"}),i=async a=>{console.log(a)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx("div",{className:"bg-primary min-h-screen flex items-center justify-center  pt-16",children:e.jsxs("div",{className:"mt-14",children:[e.jsxs("div",{className:"md:w-[446px] w-auto md h-auto flex flex-col items-center justify-center bg-white mx-4 md:mx-0  rounded-lg overflow-y-auto overflow-hidden ",children:[e.jsx("div",{className:"",children:e.jsx("p",{className:"font-inter font-bold text-2xl text-primary-dark pt-10",children:"Sign up with"})}),e.jsx("div",{className:"flex justify-center  flex-col w-full py-3 mt-5",children:e.jsxs("div",{className:"md:px-10 px-4",children:[e.jsx("div",{className:"",children:e.jsx(p,{...t,children:e.jsxs("form",{method:"post",onSubmit:t.handleSubmit(i),children:[e.jsxs("div",{className:"flex justify-between gap-1 py-2 ",children:[e.jsx(n,{control:t.control,name:"firstname",render:({field:a,fieldState:s})=>{var r;return e.jsxs(l,{children:[e.jsxs(o,{className:"text-sm font-semibold",children:["First Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(m,{children:e.jsx(c,{type:"firstname",autoComplete:"firstname",placeholder:"Enter here",...a})}),s.error&&e.jsx(d,{children:(r=s.error)==null?void 0:r.message})]})}}),e.jsx(n,{control:t.control,name:"lastname",render:({field:a,fieldState:s})=>{var r;return e.jsxs(l,{children:[e.jsxs(o,{className:"text-sm font-semibold",children:["Last Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(m,{children:e.jsx(c,{type:"lastname",autoComplete:"lastname",placeholder:"Enter here",...a})}),s.error&&e.jsx(d,{children:(r=s.error)==null?void 0:r.message})]})}})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{control:t.control,name:"email",render:({field:a,fieldState:s})=>{var r;return e.jsxs(l,{children:[e.jsxs(o,{className:"text-sm font-semibold",children:["Email ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(m,{children:e.jsx(c,{type:"email",autoComplete:"email",placeholder:"Enter your Email here",...a})}),s.error&&e.jsx(d,{children:(r=s.error)==null?void 0:r.message})]})}}),e.jsx(n,{control:t.control,name:"password",render:({field:a,fieldState:s})=>{var r;return e.jsxs(l,{children:[e.jsxs(o,{className:"text-sm font-semibold",children:["Password ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(m,{children:e.jsx(c,{type:"password",autoComplete:"password",placeholder:"Enter your Password here",...a})}),s.error&&e.jsx(d,{children:(r=s.error)==null?void 0:r.message})]})}}),e.jsx(n,{control:t.control,name:"confirmPassword",render:({field:a,fieldState:s})=>{var r;return e.jsxs(l,{children:[e.jsxs(o,{className:"text-sm font-semibold",children:["Retype Password",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(m,{children:e.jsx(c,{type:"password",autoComplete:"password",placeholder:"Enter your Password again",...a})}),s.error&&e.jsx(d,{children:(r=s.error)==null?void 0:r.message})]})}})]}),e.jsx("div",{className:"md:mt-8 mt-5 mb-5",children:e.jsx(j,{type:"submit",children:"Sign up"})})]})})}),e.jsxs("div",{className:"flex justify-center items-center font-normal text-base text-primary-dark md:pt-3 md:pb-8 pb-5 pt-0 px-1 gap-2",children:[e.jsx("p",{children:" Already have an account? "}),e.jsx("a",{className:"font-bold",href:"/login",children:"Login here"})]})]})})]}),e.jsx("div",{className:"flex font-normal text-xs text-center text-white justify-center items-center pt-4 pb-9 md:w-[446px] w-auto px-16 md:text-sm",children:"By creating an account, you agree to our terms of service and privacy policy"})]})})]})}export{b as default};