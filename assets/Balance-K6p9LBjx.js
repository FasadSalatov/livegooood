import{r as s,h as _,j as e,c as u,B as f}from"./index-CwzTaEDp.js";import{T as i}from"./Modal-D7Bsd-NX.js";const L="/assets/background-ton-coins-Cu1KOZU4.png",g=n=>s.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},s.createElement("rect",{width:40,height:40,rx:20,fill:"#0098EA"}),s.createElement("path",{d:"M26.8309 11H13.1725C10.6612 11 9.06955 13.709 10.3329 15.8988L18.7624 30.5094C19.3124 31.4634 20.691 31.4634 21.241 30.5094L29.6722 15.8988C30.9338 13.7124 29.3422 11 26.8326 11H26.8309ZM18.7555 26.128L16.9197 22.575L12.4901 14.6526C12.1979 14.1456 12.5589 13.4958 13.1708 13.4958H18.7538V26.1297L18.7555 26.128ZM27.5098 14.6509L23.082 22.5767L21.2462 26.128V13.4941H26.8291C27.4411 13.4941 27.802 14.1439 27.5098 14.6509Z",fill:"white"})),j="_wrapper_pei9b_1",C="_label_pei9b_7",T="_balance-wrapper_pei9b_13",v="_balance-text_pei9b_19",t={wrapper:j,label:C,balanceWrapper:T,balanceText:v},N=n=>{var o,l;const{className:p=""}=n,[h,b]=s.useState(0),x=_(),c=window.Telegram.WebApp,r=(l=(o=c==null?void 0:c.initDataUnsafe)==null?void 0:o.user)==null?void 0:l.id,w=async()=>{try{const a=await fetch(`http://45.153.69.74:8000/api/v1/users/${r}`,{headers:{accept:"application/json"}});if(a.ok){const m=await a.json();b(m.ton_amount_total)}else console.error("Ошибка получения данных пользователя:",a.status)}catch(a){console.error("Ошибка запроса:",a)}};s.useEffect(()=>{r&&w()},[r]);const d=()=>{x("/transactions")};return e.jsxs("div",{className:u(t.wrapper,{},[p]),onClick:d,children:[e.jsx(i,{className:t.label,children:"Баланс"}),e.jsxs(f,{className:t.balanceWrapper,children:[e.jsx(g,{}),e.jsxs(i,{className:t.balanceText,children:[e.jsx("span",{children:h})," TON"]})]})]})};export{N as B,L as a};