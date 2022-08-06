(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{118:function(t,e,n){},119:function(t,e,n){},144:function(t,e,n){"use strict";n.r(e);var a,i,c=n(0),o=n.n(c),r=n(32),s=n.n(r),l=(n(118),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))}),d=(n(119),n(20)),u=n(14),j=n(16),b=n(92),O=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"123d5b87-891c-47a5-804d-6478e65a9a54"}}),f=function(){return O.get("todo-lists")},h=function(t){return O.post("todo-lists",{title:t})},T=function(t){return O.delete("todo-lists/".concat(t))},m=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},p=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},g=function(t,e){return O.delete("todo-lists/".concat(t,"/tasks/").concat(e))},v=function(t,e){return O.post("todo-lists/".concat(t,"/tasks"),{title:e})},x=function(t,e,n){return O.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},k=function(t){return O.post("auth/login",t)},I=function(){return O.delete("auth/login")},S=function(){return O.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var C=function(t,e){t.messages.length?e(D(t.messages[0])):e(D("Some error occurred")),e(w("failed"))},E=function(t,e){e(D(t.message?t.message:"Some error occurred")),e(w("failed"))},y={isLoggedIn:!1},A=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},L={status:"idle",error:null,isInitialized:!1},D=function(t){return{type:"APP/SET-ERROR",error:t}},w=function(t){return{type:"APP/SET-STATUS",status:t}},P=[],F=n(5),N={},R=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(u.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);x(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}else C(i.data,a)})).catch((function(t){E(t,a)}))}else console.warn("task not found in the state")}},G=n(205),K=n(211),M=n(13),U=n(196),H=n(206),B=n(192),V=n(2),z=o.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var i=Object(c.useState)(""),o=Object(M.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)(null),d=Object(M.a)(l,2),u=d[0],j=d[1],b=function(){""!==r.trim()?(e(r),s("")):j("Title is required")};return Object(V.jsxs)("div",{children:[Object(V.jsx)(U.a,{variant:"outlined",disabled:a,error:!!u,value:r,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(V.jsx)(H.a,{color:"primary",onClick:b,disabled:a,children:Object(V.jsx)(B.a,{})})]})})),Z=n(97),q=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(c.useState)(!1),n=Object(M.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(t.value),r=Object(M.a)(o,2),s=r[0],l=r[1];return a?Object(V.jsx)(U.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(s)}}):Object(V.jsx)("span",{onDoubleClick:function(){i(!0),l(t.value)},children:t.value})})),Y=n(203),J=n(193),_=n(198),$=o.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(c.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(V.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(V.jsx)(_.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(V.jsx)(q,{value:t.task.title,onChange:i}),Object(V.jsx)(H.a,{onClick:e,children:Object(V.jsx)(J.a,{})})]},t.task.id)})),Q=["demo"],W=o.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(Z.a)(t,Q);console.log("Todolist called");var o=Object(d.b)();Object(c.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(w("loading")),p(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(w("succeeded"))}))});o(e)}}),[]);var r=Object(c.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(c.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),l=Object(c.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(c.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(c.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(V.jsxs)("div",{children:[Object(V.jsxs)("h3",{children:[Object(V.jsx)(q,{value:i.todolist.title,onChange:s}),Object(V.jsx)(H.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(V.jsx)(J.a,{})})]}),Object(V.jsx)(z,{addItem:r,disabled:"loading"===i.todolist.entityStatus}),Object(V.jsx)("div",{children:b.map((function(t){return Object(V.jsx)($,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(V.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(V.jsx)(Y.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:l,color:"inherit",children:"All"}),Object(V.jsx)(Y.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(V.jsx)(Y.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),X=n(15),tt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(d.c)((function(t){return t.todolists})),i=Object(d.c)((function(t){return t.tasks})),o=Object(d.c)((function(t){return t.auth.isLoggedIn})),r=Object(d.b)();Object(c.useEffect)((function(){if(!n&&o){var t=function(t){t(w("loading")),f().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(w("succeeded"))}))};r(t)}}),[]);var s=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){g(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);r(n)}),[]),l=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){n(w("loading")),v(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(w("succeeded"))}else C(t.data,n)})).catch((function(t){E(t,n)}))}}(t,e);r(n)}),[]),u=Object(c.useCallback)((function(t,e,n){var a=R(t,{status:e},n);r(a)}),[]),j=Object(c.useCallback)((function(t,e,n){var a=R(t,{title:e},n);r(a)}),[]),b=Object(c.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};r(n)}),[]),O=Object(c.useCallback)((function(t){var e,n=(e=t,function(t){t(w("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),T(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(w("succeeded"))}))});r(n)}),[]),p=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){m(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);r(n)}),[]),x=Object(c.useCallback)((function(t){var e=function(t){return function(e){e(w("loading")),h(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(w("succeeded"))}))}}(t);r(e)}),[r]);return o?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(G.a,{container:!0,style:{padding:"20px"},children:Object(V.jsx)(z,{addItem:x})}),Object(V.jsx)(G.a,{container:!0,spacing:3,children:a.map((function(t){var e=i[t.id];return Object(V.jsx)(G.a,{item:!0,children:Object(V.jsx)(K.a,{style:{padding:"10px"},children:Object(V.jsx)(W,{todolist:t,tasks:e,removeTask:s,changeFilter:b,addTask:l,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:p,demo:n})})},t.id)}))})]}):Object(V.jsx)(X.a,{to:"/login"})},et=n(208),nt=n(209),at=n(207),it=n(204),ct=n(210),ot=n(195),rt=n(200),st=n(199),lt=o.a.forwardRef((function(t,e){return Object(V.jsx)(st.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function dt(){var t=Object(d.c)((function(t){return t.app.error})),e=Object(d.b)(),n=function(t,n){"clickaway"!==n&&e(D(null))};return Object(V.jsx)(rt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(V.jsx)(lt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var ut=n(201),jt=n(213),bt=n(212),Ot=n(190),ft=n(101),ht=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.auth.isLoggedIn})),n=Object(ft.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)?t.password?t.password.length<3&&(e.password="Minimum 3 symbol"):e.password="Required":e.email="Invalid email address":e.email="Required",e},onSubmit:function(e){var a;t((a=e,function(t){t(w("loading")),k(a).then((function(e){0===e.data.resultCode?(t(A(!0)),t(w("succeeded"))):(C(e.data,t),t(w("failed")))}))})),n.resetForm()}});return e?Object(V.jsx)(X.a,{to:"/"}):Object(V.jsx)(G.a,{container:!0,justifyContent:"center",children:Object(V.jsx)(G.a,{item:!0,justifyContent:"center",children:Object(V.jsx)("form",{onSubmit:n.handleSubmit,children:Object(V.jsxs)(ut.a,{children:[Object(V.jsxs)(Ot.a,{children:[Object(V.jsxs)("p",{children:["To log in get registered",Object(V.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(V.jsx)("p",{children:"or use common test account credentials:"}),Object(V.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(V.jsx)("p",{children:"Password: free"})]}),Object(V.jsxs)(bt.a,{children:[Object(V.jsx)(U.a,Object(u.a)(Object(u.a)({label:"Email",margin:"normal"},n.getFieldProps("email")),{},{onBlur:n.handleBlur})),n.touched.email&&n.errors.email?Object(V.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(V.jsx)(U.a,Object(u.a)(Object(u.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password")),{},{onBlur:n.handleBlur})),n.touched.password&&n.errors.password?Object(V.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(V.jsx)(jt.a,Object(u.a)({label:"Remember me",control:Object(V.jsx)(_.a,{})},n.getFieldProps("rememberMe"))),Object(V.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},Tt=n(214);var mt=function(t){var e=t.demo,n=void 0!==e&&e;Object(c.useEffect)((function(){r((function(t){S().then((function(e){0===e.data.resultCode?t(A(!0)):C(e.data,t)})).catch((function(e){E(e,t)})).finally((function(){t({type:"SET-INITIALIZED",isInitalized:!0})}))}))}),[]);var a=Object(d.c)((function(t){return t.app.status})),i=Object(d.c)((function(t){return t.app.isInitialized})),o=Object(d.c)((function(t){return t.auth.isLoggedIn})),r=Object(d.b)(),s=function(){r((function(t){t(w("loading")),I().then((function(e){0===e.data.resultCode?(t(A(!1)),t(w("succeeded"))):C(e.data,t)})).catch((function(e){E(e,t)}))}))};return i?Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(dt,{}),Object(V.jsxs)(et.a,{position:"static",children:[Object(V.jsxs)(nt.a,{children:[Object(V.jsx)(H.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(V.jsx)(ot.a,{})}),Object(V.jsx)(at.a,{variant:"h6",children:"News"}),o?Object(V.jsx)(Y.a,{color:"inherit",onClick:s,children:"Logout"}):Object(V.jsx)(Y.a,{color:"inherit",onClick:s,children:"Login"})]}),"loading"===a&&Object(V.jsx)(ct.a,{})]}),Object(V.jsx)(it.a,{fixed:!0,children:Object(V.jsxs)(X.d,{children:[Object(V.jsx)(X.b,{path:"/",element:Object(V.jsx)(tt,{demo:n})}),Object(V.jsx)(X.b,{path:"/login",element:Object(V.jsx)(ht,{})}),Object(V.jsx)(X.b,{path:"/404",element:Object(V.jsx)("h1",{children:"404: PAGE NOT FOUND"})}),Object(V.jsx)(X.b,{path:"*",element:Object(V.jsx)(X.a,{to:"/404"})})]})})]}):Object(V.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(V.jsx)(Tt.a,{})})},pt=n(63),gt=n(100),vt=Object(pt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.task.todoListId,[e.task].concat(Object(j.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(u.a)(Object(u.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(u.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(u.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(u.a)(Object(u.a)({},t),{},Object(F.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(u.a)(Object(u.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error});case"SET-INITIALIZED":return Object(u.a)(Object(u.a)({},t),{},{isInitialized:e.isInitalized});default:return Object(u.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;return"login/SET-IS-LOGGED-IN"===e.type?Object(u.a)(Object(u.a)({},t),{},{isLoggedIn:e.value}):t}}),xt=Object(pt.c)(vt,Object(pt.a)(gt.a));window.store=xt;var kt=n(48);s.a.render(Object(V.jsx)(d.a,{store:xt,children:Object(V.jsx)(kt.a,{children:Object(V.jsx)(mt,{})})}),document.getElementById("root")),l()}},[[144,1,2]]]);
//# sourceMappingURL=main.69485b45.chunk.js.map