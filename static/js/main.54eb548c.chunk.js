(window["webpackJsonphacker-news"]=window["webpackJsonphacker-news"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/bug.0b07ad7b.gif"},21:function(e,t,n){e.exports=n(38)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n(9),o=n(5),s=n(7),u=n.n(s),i=n(10),m=n(11),p=(n(27),function(e){var t=e.serial,n=e.data,a=n.domain,c=n.url,l=n.points,o=n.user,s=n.type,u=n.time_ago,i=n.comments_count,m=n.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2",className:"serial",valign:"top",align:"right",width:"35px"}," ",t,"."," "),r.a.createElement("td",null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"headline"},r.a.createElement("span",{className:"title"}," ",m)))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2",className:"serial",valign:"top",align:"right",width:"35px"}),r.a.createElement("td",null,r.a.createElement("span",{className:"subtext"},l," points by ",o," ",u," | ",s," | ",i," ","comments |"," ",r.a.createElement("a",{href:"http://".concat(a),target:"_blank",rel:"noopener noreferrer"},a)),r.a.createElement("br",null),r.a.createElement("br",null))))}),E=(n(28),function(e){var t=e.page,n=e.changePage;return r.a.createElement("footer",null,t>1&&r.a.createElement("button",{onClick:function(){return n(-1)}},"Prev"),r.a.createElement("button",{onClick:function(){return n(1)}},"Next"))}),g=n(18),f=n.n(g),h=(n(29),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:f.a,alt:"loading...",className:"bug"}),r.a.createElement("span",{id:"errortext"},"Max Limit Reached!"))}),b=function(){var e=Object(a.useState)({page:null,stories:[]}),t=Object(m.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){return l(),function(){return c({})}}),[]);var l=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r,l,o=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,a=n.page+t,e.next=4,fetch("https://api.hnpwa.com/v0/news/".concat(a,".json"));case 4:return l=e.sent,e.prev=5,e.next=8,l.json();case 8:r=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),r=[],a-=t;case 15:c({stories:r,page:a});case 16:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}(),o=n.stories.map((function(e){return r.a.createElement(p,{key:e.id,serial:n.stories.indexOf(e)+1+30*(n.page-1),data:e})}));return r.a.createElement(r.a.Fragment,null,!n.stories.length&&n.page&&r.a.createElement(h,null),n.page&&n.stories.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",{className:"article"},o)),r.a.createElement(E,{changePage:l,page:n.page})))},d=function(){var e=Object(a.useState)({page:null,stories:[]}),t=Object(m.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){return l(),function(){return c({})}}),[]);var l=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r,l,o=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,a=n.page+t,e.next=4,fetch("https://api.hnpwa.com/v0/newest/".concat(a,".json"));case 4:return l=e.sent,e.prev=5,e.next=8,l.json();case 8:r=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),r=[],a-=t;case 15:c({stories:r,page:a});case 16:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}(),o=n.stories.map((function(e){return r.a.createElement(p,{key:e.id,serial:n.stories.indexOf(e)+1+30*(n.page-1),data:e})}));return r.a.createElement(r.a.Fragment,null,!n.stories.length&&n.page&&r.a.createElement(h,null),n.page&&n.stories.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",{className:"article"},o)),r.a.createElement(E,{changePage:l,page:n.page})))},x=(n(30),function(){return r.a.createElement("header",null,r.a.createElement("img",{src:"header.png",alt:"Hacker News",className:"Header"}),r.a.createElement(l.b,{style:{margin:"0 5px 0 5px",fontSize:"13x",color:"black",textDecoration:"none"},to:"/"},r.a.createElement("h3",null,"Home")),r.a.createElement("span",null,"|"),r.a.createElement(l.b,{style:{margin:"0 5px 0 5px",fontSize:"13x",color:"black",textDecoration:"none"},to:"/newStories"},r.a.createElement("h3",null,"New")))});n(36),n(37);Object(c.render)(r.a.createElement((function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"contents"},r.a.createElement(x,{className:"top"}),r.a.createElement(o.d,null,r.a.createElement(o.a,{exact:!0,path:"/",to:"/news"}),r.a.createElement(o.b,{path:"/news",component:b}),r.a.createElement(o.a,{path:"/newStories",to:"/newest"}),r.a.createElement(o.b,{path:"/newest",component:d}),r.a.createElement(o.b,{component:Error})),r.a.createElement("hr",null)))}),null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.54eb548c.chunk.js.map