(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__3wbfu",contactsButton:"ContactsList_contactsButton__3Ig3V"}},14:function(t,e,n){t.exports={addContactButton:"Button_addContactButton__1F189"}},22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(22),n(16)),l=n(8);function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];return[t].concat(n).join(" ")}var u,b=n(10),m=n.n(b),f=n(6),j=n.n(f),h=n(0),d=s("button",j.a.iconButton,j.a.deleteContactBtn),p=function(t){var e=t.children,n=t.type,a=t.ariaLabel,c=t.width,r=t.height,o=t.onClick,i=t.className;return Object(h.jsx)("button",{type:n,"aria-label":a,width:c,height:r,onClick:o,className:i,children:e})},O=["title","titleId"];function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function x(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function v(t,e){var n=t.title,c=t.titleId,r=x(t,O);return a.createElement("svg",g({viewBox:"0 0 365.717 365",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,u||(u=a.createElement("g",{fill:"currentColor"},a.createElement("path",{d:"M356.34 296.348L69.727 9.734c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.816c-12.5 12.504-12.5 32.77 0 45.25L295.988 356.68c12.504 12.5 32.77 12.5 45.25 0l15.082-15.082c12.524-12.48 12.524-32.75.02-45.25zm0 0"}),a.createElement("path",{d:"M295.988 9.734L9.375 296.348c-12.5 12.5-12.5 32.77 0 45.25l15.082 15.082c12.504 12.5 32.77 12.5 45.25 0L356.34 70.086c12.504-12.5 12.504-32.766 0-45.246L341.258 9.758c-12.5-12.524-32.766-12.524-45.27-.024zm0 0"}))))}var y=a.forwardRef(v),C=(n.p,function(t){var e=t.contacts,n=t.deleteContactsButton,a=s("list"),c=s("link");return Object(h.jsx)("ul",{className:a,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(h.jsxs)("li",{className:m.a.contactsList,children:[Object(h.jsxs)("p",{children:[a," - "]}),Object(h.jsx)("a",{href:"telephone: ".concat(r),className:c,children:r}),Object(h.jsx)(p,{type:"button",ariaLabel:"Delete contact button",width:"40",height:"40",onClick:function(){return n(e)},className:d,children:Object(h.jsx)(y,{width:"20",height:"20"})})]},e)}))})}),_=n(26),w=n(11),S=n(12),L=n(13),B=n(17),I=n(15),N=n(4),F=n.n(N),k=n(14),A=n.n(k),E=function(t){var e=t.children,n=t.type,a=s("button",A.a.addContactButton);return Object(h.jsx)("button",{type:n,className:a,children:e})},z=function(t){Object(B.a)(n,t);var e=Object(I.a)(n);function n(){var t;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmitData(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(L.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:F.a.contactForm,onSubmit:this.onFormSubmit,children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{className:F.a.titleStyle,children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.onInputChange})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{className:F.a.titleStyle,children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.onInputChange})]}),Object(h.jsx)(E,{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),D=n(7),J=n.n(D),M=function(t){var e=t.onFilterChange;return Object(h.jsxs)("label",{children:[Object(h.jsx)("p",{className:J.a.filterLitleTitle,children:"Find contacts by name:"}),Object(h.jsx)("input",{className:J.a.filterInput,type:"text",onChange:e})]})};var P=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),s=o[0],u=o[1];Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n)),0===n.lenght&&localStorage.removeItem("contacts")}),[n]);var b=function(){var t=s.toLocaleLowerCase().trim();return n.filter((function(e){return e.name.toLocaleLowerCase().includes(t)}))}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(z,{onSubmitData:function(t,e){var a={id:Object(_.a)(),name:t,number:e},r=n.find((function(t){return t.name===a.name})),o=n.find((function(t){return t.number===a.number}));r?alert("".concat(a.name," is already in contacts.")):o?alert("".concat(a.number," is already in contacts.")):c((function(t){return[a].concat(Object(i.a)(t))}))}}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(M,{onFilterChange:function(t){u(t.target.value)}}),Object(h.jsx)(C,{contacts:b,deleteContactsButton:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__OrlO3",titleStyle:"ContactForm_titleStyle__1wiXb",formButton:"ContactForm_formButton__2M3aA"}},6:function(t,e,n){t.exports={iconButton:"IconButton_iconButton__3nqcI"}},7:function(t,e,n){t.exports={filterInput:"Filter_filterInput__u16Kg",filterLitleTitle:"Filter_filterLitleTitle__PFDbo"}}},[[24,1,2]]]);
//# sourceMappingURL=main.329d5323.chunk.js.map