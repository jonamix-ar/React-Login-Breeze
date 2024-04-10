import{u as r,r as e}from"./main-e1ade5b4.js";import{a}from"./index-db2fb923.js";const c=()=>{const o=r();return e.useEffect(()=>{(async()=>{try{await a.post("/logout"),localStorage.removeItem("user"),localStorage.removeItem("token"),o("/")}catch(t){console.error("Error during logout:",t)}})()},[o]),null};export{c as default};
//# sourceMappingURL=Logout-7f1ff1c8.js.map
