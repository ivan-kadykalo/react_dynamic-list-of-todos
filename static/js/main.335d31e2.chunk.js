(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n,s=c(6),a=c.n(s),r=c(4),o=c(2),l=c(3),i=c.n(l),u=c(1),d=(c(13),c(14),c(15),c(16),c(7)),j=c.n(d),b=c(0),O=function(e){var t=e.todo,c=e.selectNewUser,n=Object(u.useState)(t.completed),s=Object(o.a)(n,2),a=s[0],r=s[1],l=Object(u.useCallback)((function(){r((function(e){return!e}))}),[a]);return Object(b.jsxs)("li",{className:j()("TodoItem",{"TodoItem--checked":a,"TodoItem--unchecked":!a}),children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",checked:a,readOnly:!0,onClick:l}),Object(b.jsx)("p",{children:t.title})]}),Object(b.jsx)("button",{className:" TodoItem__user-button TodoItem__user-button--selected button ",type:"button",onClick:function(){return c(t.userId)},"data-cy":"userButton",children:"User #".concat(t.userId)})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={}));var p,h=function(e){var t=e.todos,c=e.selectNewUser,s=Object(u.useState)(""),a=Object(o.a)(s,2),r=a[0],l=a[1],i=Object(u.useState)(n.All),d=Object(o.a)(i,2),j=d[0],p=d[1],h=Object(u.useState)(!1),f=Object(o.a)(h,2),m=f[0],x=f[1],v=function(){switch(j){case n.Active:return t.filter((function(e){return!e.completed}));case n.Completed:return t.filter((function(e){return e.completed}));case n.All:default:return t}}().filter((function(e){var t=e.title.toLowerCase(),c=r.toLowerCase();return t.includes(c)})),_=m?v.sort((function(){return Math.random()-.5})):v,N=Object(u.useCallback)((function(e){p(e.target.value)}),[]),C=Object(u.useCallback)((function(e){l(e.target.value)}),[]),k=Object(u.useCallback)((function(){x((function(e){return!e}))}),[]);return Object(b.jsxs)("div",{className:"TodoList",children:[Object(b.jsx)("h2",{children:"Todos:"}),Object(b.jsxs)("div",{className:"TodoList__buttons",children:[Object(b.jsxs)("label",{className:"TodoList__label",children:["Filter",Object(b.jsx)("input",{"data-cy":"filterByTitle",className:"TodoList__input",type:"text",value:r,onChange:C})]}),Object(b.jsxs)("label",{className:"TodoList__label",children:["Select",Object(b.jsxs)("select",{className:"TodoList__input",value:j,onChange:N,children:[Object(b.jsx)("option",{value:n.All,children:"All"}),Object(b.jsx)("option",{value:n.Active,children:"Active"}),Object(b.jsx)("option",{value:n.Completed,children:"Completed"})]})]}),Object(b.jsxs)("div",{className:"TodoList__label",children:["Random order",Object(b.jsx)("button",{type:"button",className:"TodoList__input",onClick:k,children:"Shuffle list"})]})]}),Object(b.jsx)("div",{className:"TodoList__list-container",children:Object(b.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:_.map((function(e){return Object(b.jsx)(O,{todo:e,selectNewUser:c},e.id)}))})})]})},f=function(){var e=Object(r.a)(i.a.mark((function e(t,c){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t).concat(c));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();c(18);!function(e){e.Initial="",e.Error="Can't download user"}(p||(p={}));var m=function(e){var t=e.userId,c=e.selectNewUser,n=Object(u.useState)(null),s=Object(o.a)(n,2),a=s[0],l=s[1],d=Object(u.useState)(p.Initial),j=Object(o.a)(d,2),O=j[0],h=j[1];Object(u.useEffect)((function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://mate.academy/students-api/users","/".concat(t));case 3:c=e.sent,l(c),h(p.Initial),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),l(null),h(p.Error);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var m=Object(u.useCallback)((function(){c(0)}),[]);return Object(b.jsxs)(b.Fragment,{children:[a&&Object(b.jsxs)("div",{className:"CurrentUser",children:[Object(b.jsx)("button",{type:"button",className:"button CurrentUser__button",onClick:m,children:"Clear user"}),Object(b.jsx)("h2",{className:"CurrentUser__title",children:Object(b.jsx)("span",{children:"Selected user: ".concat(a.id)})}),Object(b.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:a.name}),Object(b.jsx)("p",{className:"CurrentUser__email",children:a.email}),Object(b.jsx)("p",{className:"CurrentUser__phone",children:a.phone})]}),O&&Object(b.jsx)("h2",{children:O})]})},x=function(){var e=Object(u.useState)(0),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(u.useState)([]),a=Object(o.a)(s,2),l=a[0],d=a[1],j=Object(u.useState)(""),O=Object(o.a)(j,2),p=O[0],x=O[1];Object(u.useEffect)((function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://mate.academy/students-api/todos","");case 3:t=e.sent,d(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x("Can't download data from server!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var v=Object(u.useCallback)((function(e){n(e)}),[]);return Object(b.jsx)("div",{className:"App",children:p.length>0?Object(b.jsx)("h2",{children:p}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"App__sidebar",children:Object(b.jsx)(h,{todos:l,selectNewUser:v})}),Object(b.jsx)("div",{className:"App__content",children:Object(b.jsx)("div",{className:"App__content-container",children:c?Object(b.jsx)(m,{userId:c,selectNewUser:v}):"No user selected"})})]})})};a.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.335d31e2.chunk.js.map