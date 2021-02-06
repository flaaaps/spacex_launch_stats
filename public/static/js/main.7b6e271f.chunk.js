(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,s){},58:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var c,n=s(2),a=s(36),r=s.n(a),l=(s(48),s(43)),i=s(8),o=s(21),j=s(7),h=s(23),d=s(24),b=s(19),m=s.n(b),u=s(27),x=s(20),O=s.n(x),g=s(37),p=s.n(g),_=s(4);function f({launch:{flight_number:e,mission_name:t,launch_date_local:s,launch_success:c}}){return Object(_.jsx)("div",{className:"card card-body mb-3",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsxs)("div",{className:"col-md-9",children:[Object(_.jsxs)("h4",{children:["Mission:"," ",Object(_.jsx)("span",{className:O()({"text-success":c,"text-danger":!c}),children:t})]}),Object(_.jsxs)("p",{children:["Date: ",Object(_.jsx)(p.a,{format:"YYYY-MM-DD HH:mm",children:s})]})]}),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsx)(o.b,{to:"/launch/".concat(e),className:"btn btn-secondary",children:"Launch Details"})})]})})}function y(){return Object(_.jsxs)("div",{className:"my-3",children:[Object(_.jsxs)("p",{children:[Object(_.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(_.jsxs)("p",{children:[Object(_.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})}const N=m()(c||(c=Object(d.a)(["\n\tquery LaunchesQuery {\n\t\tlaunches {\n\t\t\tflight_number\n\t\t\tmission_name\n\t\t\tlaunch_date_local\n\t\t\tlaunch_success\n\t\t}\n\t}\n"])));var k,v=function(){const e=Object(u.b)(N),t=e.loading,s=e.error,c=e.data,a=Object(n.useState)([]),r=Object(h.a)(a,2),l=r[0],i=r[1],o=Object(n.useState)("desc"),j=Object(h.a)(o,2),d=j[0],b=j[1];return t?Object(_.jsx)("h1",{className:"display-4 my-3",children:"Loading..."}):(s&&console.log(s),c&&0===l.length&&i(c.launches),Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(_.jsx)(y,{}),Object(_.jsxs)("button",{className:"btn btn-secondary mb-4",onClick:function(){i(l.reverse()),b((e=>"asc"===e?"desc":"asc"))},children:[Object(_.jsx)("strong",{children:"Order by date: "}),"asc"===d?"Ascending":"Descending"]}),Object(_.jsx)(n.Fragment,{children:l.map((e=>Object(_.jsx)(f,{launch:e},e.flight_number)))})]}))},w=s(61);const L=m()(k||(k=Object(d.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"])));class D extends n.Component{render(){let e=this.props.match.params.flight_number;return e=parseInt(e),Object(_.jsx)(n.Fragment,{children:Object(_.jsx)(w.a,{query:L,variables:{flight_number:e},children:({loading:e,error:t,data:s})=>{if(e)return Object(_.jsx)("h4",{children:"Loading..."});t&&console.log(t);const c=s.launch,n=c.mission_name,a=c.flight_number,r=c.launch_year,l=c.launch_success,i=c.rocket,j=i.rocket_id,h=i.rocket_name,d=i.rocket_type;return Object(_.jsxs)("div",{children:[Object(_.jsxs)("h1",{className:"display-4 my-3",children:[Object(_.jsx)("span",{className:"text-dark",children:"Mission:"})," ",n]}),Object(_.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(_.jsxs)("ul",{className:"list-group",children:[Object(_.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",a]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",r]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Launch Successful:"," ",Object(_.jsx)("span",{className:O()({"text-success":l,"text-danger":!l}),children:l?"Yes":"No"})]})]}),Object(_.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(_.jsxs)("ul",{className:"list-group",children:[Object(_.jsxs)("li",{className:"list-group-item",children:["Rocket ID: ",j]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",h]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",d]})]}),Object(_.jsx)("hr",{}),Object(_.jsx)(o.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})}})})}}var S=D,M=(s(58),s.p+"static/media/logo.91169fa6.png");var Y=function(){const e=Object(n.useState)(!0),t=Object(h.a)(e,2),s=t[0],c=t[1];return Object(_.jsxs)("div",{className:O()("alert","alert-warning","alert-dismissible","fade","mt-4","fixed-bottom",{show:s}),style:{left:window.innerWidth-430,width:400},role:"alert",children:[Object(_.jsx)("strong",{children:"Note!"})," This page isn't hosted by"," ",Object(_.jsx)("a",{href:"https://traversymedia.com",target:"_blank",rel:"noreferrer",children:"Traversy Media"})," ","anymore, it is a modified version of Brad's React GraphQL"," ",Object(_.jsx)("a",{href:"https://www.youtube.com/watch?v=SEMTj8w04Z8",target:"_blank",rel:"noreferrer",children:"tutorial"}),". If you (Brad) do not like this idea, please contact me on"," ",Object(_.jsx)("a",{href:"https://twitter.com/jvliix",target:"_blank",rel:"noreferrer",children:"Twitter"}),".",Object(_.jsx)("button",{type:"button",className:"close",onClick:()=>c(!1),"data-dismiss":"alert","aria-label":"Close",children:Object(_.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})};const B=new l.a({uri:"/graphql"});class C extends n.Component{render(){return Object(_.jsx)(i.a,{client:B,children:Object(_.jsx)(o.a,{children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(Y,{}),Object(_.jsx)("img",{src:M,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),Object(_.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(_.jsx)(j.a,{exact:!0,path:"/launch/:flight_number",component:S})]})})})}}var F=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(_.jsx)(F,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.7b6e271f.chunk.js.map