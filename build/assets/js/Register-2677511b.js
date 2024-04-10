import{f as a,j as r,L as y}from"./main-e1ade5b4.js";import{u as h,a as f}from"./index-db2fb923.js";function j(){const{setUser:c}=h(),[s,t]=a.useState(""),[o,d]=a.useState(""),[l,m]=a.useState(""),n=async i=>{i.preventDefault();const{name:u,email:p,password:x,cpassword:g}=i.target.elements,b={name:u.value,email:p.value,password:x.value,password_confirmation:g.value};try{const e=await f.post("/register",b);if(e.status===200)return c(e.data.user),r.jsx(Navigate,{to:"/profile"})}catch(e){e.response.status===422&&(console.log(e.response.data.errors),e.response.data.errors.name?t(e.response.data.errors.name[0]):t(""),e.response.data.errors.email?d(e.response.data.errors.email[0]):d(""),e.response.data.errors.password?m(e.response.data.errors.password[0]):m(""))}};return r.jsx("section",{className:"bg-gray-50 dark:bg-gray-900",children:r.jsxs("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:[r.jsxs("a",{href:"#",className:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white",children:[r.jsx("img",{className:"w-8 h-8 mr-2",src:"https://dcodemania.com/img/logo.svg",alt:"logo"}),"DCodemania"]}),r.jsx("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:r.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[r.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Create and account"}),r.jsxs("form",{className:"space-y-4 md:space-y-6",action:"#",method:"post",onSubmit:n,children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Full Name"}),r.jsx("input",{type:"text",name:"name",id:"name",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Jhone Doe",required:!0}),s&&r.jsx("p",{className:"text-sm text-red-600",children:s})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),r.jsx("input",{type:"email",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:!0}),o&&r.jsx("p",{className:"text-sm text-red-600",children:o})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),r.jsx("input",{type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0}),l&&r.jsx("p",{className:"text-sm text-red-600",children:l})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"cpassword",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Confirm password"}),r.jsx("input",{type:"password",name:"cpassword",id:"cpassword",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),r.jsx("button",{type:"submit",className:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",children:"Create an account"}),r.jsxs("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Already have an account?"," ",r.jsx(y,{to:"/",className:"font-medium text-primary-600 hover:underline dark:text-primary-500",children:"Login here"})]})]})]})})]})})}export{j as default};
//# sourceMappingURL=Register-2677511b.js.map