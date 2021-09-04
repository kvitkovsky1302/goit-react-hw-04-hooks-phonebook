(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",inputForm:"ContactForm_inputForm__2GJhT",btnForm:"ContactForm_btnForm__RrRV0"}},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(18),n(13)),i=n(3),l=n(12),u=n.n(l),b=n(2),m=n.n(b),j=n(0);var p=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],b=l[1];return Object(j.jsxs)("form",{className:m.a.form,onSubmit:function(t){t.preventDefault(),e(r,u),o(""),b("")},children:[Object(j.jsxs)("label",{className:m.a.label,children:["Name",Object(j.jsx)("input",{className:m.a.inputForm,type:"text",name:"name",value:r,onChange:function(t){o(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:m.a.label,children:["Number",Object(j.jsx)("input",{className:m.a.inputForm,type:"tel",name:"number",value:u,onChange:function(t){b(t.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:m.a.btnForm,type:"submit",children:"Add contact"})]})},f=n(10),d=n.n(f);var _=function(t){var e=t.filter,n=t.onInputChange;return Object(j.jsxs)("label",{className:d.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:d.a.input,type:"text",name:"filter",value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]})},h=n(7),O=n.n(h);var v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:O.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:O.a.contactItem,children:[a," --- ",c,Object(j.jsx)("button",{className:O.a.btnContact,onClick:function(){return n(a)},children:"Delete"})]},e)}))})},x=n(8),C=n.n(x);var g=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(j.jsxs)("div",{className:C.a.wrapper,children:[Object(j.jsx)("h1",{className:C.a.title,children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:function(t,e){if(r=t,n.find((function(t){return t.name===r})))alert("".concat(t," is already in contacts"));else{var a={id:u.a.generate(),name:t,number:e};c((function(t){return[a].concat(Object(s.a)(t))}))}var r}}),n.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:C.a.titleContacts,children:"Contacts"}),Object(j.jsx)(_,{filter:l,onInputChange:function(t){b(t.target.value)}}),Object(j.jsx)(v,{contacts:m,onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.name!==t}))}))}})]})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__14Z-h",contactItem:"ContactList_contactItem__EQAbQ",btnContact:"ContactList_btnContact__1cPva"}},8:function(t,e,n){t.exports={wrapper:"App_wrapper__2Rh_f",title:"App_title__-GfWs",titleContacts:"App_titleContacts__41vwQ"}}},[[28,1,2]]]);
//# sourceMappingURL=main.52d83daa.chunk.js.map