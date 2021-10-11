(this["webpackJsonptest-task-for-big-data"]=this["webpackJsonptest-task-for-big-data"]||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(21),a=c.n(s),r=(c(52),c(53),c(29)),o=c.n(r),j=c(39),m=c(47),b=c(6),l=c(40),d=c.n(l).a.create({baseURL:"https://yts.mx/api/v2"}),u=function(e,t){return d.get("/list_movies.json?limit=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},O="movies/SET_MOVIES",v="movies/SET_PAGE_NUMBER",h="movies/SET_TOTAL_MOVIES_COUNT",x="movies/SET_IS_FETCHING",f="movies/SET_MOVIES_ID",g="movies/SET_COMMENT",p="movies/DELETE_COMMENT",N={movies:[],limit:15,totalMoviesCount:0,pageNumber:1,isFetching:!0,currentMoviesId:null,comments:[{id:1,comment:"Some comments"}]},_=function(e){return{type:x,boolean:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{movies:t.moviesList});case v:return Object(b.a)(Object(b.a)({},e),{},{pageNumber:t.page});case h:return Object(b.a)(Object(b.a)({},e),{},{totalMoviesCount:t.count});case x:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.boolean});case f:return Object(b.a)(Object(b.a)({},e),{},{currentMoviesId:t.id});case g:var c={id:e.comments.length+1,comment:t.comment};return Object(b.a)(Object(b.a)({},e),{},{comments:[].concat(Object(m.a)(e.comments),[c])});case p:return Object(b.a)(Object(b.a)({},e),{},{comments:e.comments.filter((function(e){return e.id!==t.id}))});default:return e}},S=c(5),M=c(41),C=function(e){return e.moviesPage.movies},y=function(e){return e.moviesPage.limit},T=function(e){return e.moviesPage.totalMoviesCount},P=function(e){return e.moviesPage.pageNumber},k=function(e){return e.moviesPage.isFetching},I=Object(M.a)(C,(function(e){return e.moviesPage.currentMoviesId}),(function(e,t){return e.filter((function(e){return e.id===t}))})),L=function(e){return e.moviesPage.comments},w=c(3),F=c(1),D=function(e){var t=e.movie,c=Object(w.g)(),n=Object(S.b)(),i=function(e){c.push("/moviecard/"+e),n(function(e){return{type:f,id:e}}(e))};return Object(F.jsxs)("div",{className:"movie-card",children:[Object(F.jsx)("img",{src:t.medium_cover_image||"https://via.placeholder.com/500",alt:t.title}),Object(F.jsx)("h2",{className:"movie-title",children:t.title}),Object(F.jsx)("p",{className:"movie-year",children:t.year}),Object(F.jsx)("button",{className:"movie-btn",onClick:function(){return i(t.id)},children:"More info"})]},t.id)},R=c(43),U=c.n(R),V=function(e){var t=Object(S.b)(),c=Object(S.c)(C),i=Object(S.c)(y),s=Object(S.c)(T),a=Object(S.c)(P),r=Object(S.c)(k),m=Math.ceil(s/i);Object(n.useEffect)((function(){t(function(e,t){return function(){var c=Object(j.a)(o.a.mark((function c(n){var i;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n(_(!0)),c.next=3,u(e,t);case 3:i=c.sent,n((a=i.data.movies,{type:O,moviesList:a})),n((s=i.data.movie_count,{type:h,count:s})),n(_(!1));case 7:case"end":return c.stop()}var s,a}),c)})));return function(e){return c.apply(this,arguments)}}()}(i,a))}),[a]);return Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)("div",{className:"pagination",children:Object(F.jsx)(U.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:m,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var c;t((c=e.selected,{type:v,page:c}))},containerClassName:"pagination",activeClassName:"active"})}),r?Object(F.jsx)("div",{className:"loading",children:"Loading...."}):Object(F.jsx)("div",{className:"movie-list-container",children:c.length>0&&c.map((function(e){return Object(F.jsx)(D,{movie:e},e.id)}))})]})},A=function(e){return Object(F.jsx)("div",{children:Object(F.jsx)(V,{})})},B=c(16),G=function(){return Object(F.jsx)("header",{children:Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("div",{className:"inner-content",children:[Object(F.jsx)("div",{className:"brand",children:Object(F.jsx)(B.b,{to:"/movies",children:"Movie catalog"})}),Object(F.jsxs)("ul",{className:"nav-links",children:[Object(F.jsx)("li",{children:Object(F.jsx)(B.b,{to:"/movies",children:" Some link "})}),Object(F.jsx)("li",{children:Object(F.jsx)(B.b,{to:"/movies",className:"btn",children:" Some btn "})})]})]})})})},J=c(25),X={comment:""},H=function(){var e=Object(S.b)();return Object(F.jsx)("div",{className:"form-container",children:Object(F.jsx)(J.c,{initialValues:Object(b.a)({},X),onSubmit:function(t,c){var n,i=c.resetForm;e((n=t.comment,{type:g,comment:n})),i()},children:Object(F.jsxs)(J.b,{className:"form",children:[Object(F.jsx)(J.a,{id:"comment",as:"textarea",rows:5,cols:50,name:"comment",placeholder:"Enter you comment"}),Object(F.jsx)("div",{className:"form-btn",children:Object(F.jsx)("button",{type:"submit",className:"btn",children:"Send comment"})})]})})})},q=function(){var e=Object(S.c)(I),t=Object(S.b)(),c=Object(S.c)(L),n=function(e){t(function(e){return{type:p,id:e}}(e))};return Object(F.jsx)("div",{className:"container",children:e.map((function(e){return Object(F.jsxs)("div",{className:"movie-card-info",children:[Object(F.jsx)("div",{className:"movie-card-info-img",children:Object(F.jsx)("img",{src:e.large_cover_image,alt:""})}),Object(F.jsxs)("div",{className:" movie-card-info-description",children:[Object(F.jsxs)("h2",{children:["  ",e.title," "]}),Object(F.jsx)("span",{children:e.year}),Object(F.jsxs)("p",{children:[" ",e.description_full]}),Object(F.jsx)("div",{children:Object(F.jsxs)("span",{children:["Rating : ",e.rating]})})]}),Object(F.jsxs)("div",{className:"movie-card-comments",children:[Object(F.jsx)(H,{}),Object(F.jsx)("h2",{children:"Comments"}),c.map((function(e){return Object(F.jsxs)("div",{className:"comments-block",children:[Object(F.jsxs)("h3",{children:["USER_NAME : ",e.comment]}),Object(F.jsx)("div",{children:Object(F.jsx)("button",{className:"btn",onClick:function(){return n(e.id)},children:"Delete"})})]},e.id)}))]})]},e.id)}))})};var z=function(){return Object(F.jsxs)(B.a,{children:[Object(F.jsx)(G,{}),Object(F.jsxs)(w.d,{children:[Object(F.jsx)(w.a,{exact:!0,from:"/",to:"/movies"}),Object(F.jsx)(w.b,{exact:!0,path:"/movies",children:Object(F.jsx)(A,{})}),Object(F.jsx)(w.b,{path:"/moviecard/",children:Object(F.jsx)(q,{})})]})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},Q=c(18),W=c(46),Y=Object(Q.b)({moviesPage:E}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.c,$=Object(Q.d)(Y,Z(Object(Q.a)(W.a)));window.__store__=$;var ee=$;a.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(S.a,{store:ee,children:Object(F.jsx)(z,{})})}),document.getElementById("root")),K()}},[[78,1,2]]]);
//# sourceMappingURL=main.2998ed00.chunk.js.map