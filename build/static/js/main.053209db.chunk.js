(this.webpackJsonpbluestacks=this.webpackJsonpbluestacks||[]).push([[0],{100:function(e,a,t){e.exports=t(182)},105:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},124:function(e,a,t){},180:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),i=t.n(c),l=(t(105),t(17)),s=(t(110),t(25)),o=t(79),m=t(98),u=t(13),p=t(80),g=t(81),d=t(20),E=t.n(d),f=Object.freeze({UPCOMING:1,LIVE:2,PAST:3}),v=Object.freeze([{label:"UPCOMING_CAMPAIGNS",id:f.UPCOMING},{label:"LIVE_CAMPAIGNS",id:f.LIVE},{label:"PAST_CAMPAIGNS",id:f.PAST}]);var N=function(){function e(a){var t=a.id,n=a.name,r=a.region,c=a.createdOn,i=a.price,l=a.csv,s=a.report;Object(p.a)(this,e),this.id=t,this.name=n,this.region=r,this.createdOn=1e3*c,this.price=i,this.csv=l,this.report=s}return Object(g.a)(e,[{key:"_buildImagePath",value:function(e){return"./bluestacks/assets/Row Copy ".concat(e,"-Row/Thumb/Bitmap.png")}}],[{key:"build",value:function(a){var t=new e(a);return t.filterCateg=e.computeCategory(t),t.imageUrl=t._buildImagePath(a.id),t}},{key:"computeCategory",value:function(e){return a=e.createdOn,E()(a).isSame(E()(),"day")&&E()(a).isSame(E()(),"month")&&E()(a).isSame(E()(),"year")?f.LIVE:function(e){return E()(e).isBefore(E()().startOf("day"))}(e.createdOn)?f.PAST:f.UPCOMING;var a}}]),e}(),C={loadingCampaigns:!1,campaigns:[],campaignsById:{},activeFilterId:1};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_CAMPAIGNS_START":return Object(u.a)(Object(u.a)({},e),{},{loadingCampaigns:!0});case"LOAD_CAMPAIGNS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{loadingCampaigns:!1,campaigns:Object(m.a)(a.campaignIds),campaignsById:a.campaignsById});case"ON_FILTER":return Object(u.a)(Object(u.a)({},e),{},{activeFilterId:a.filterId});case"UPDATE_DATE":var t=Object(u.a)({},e.campaignsById);return t[a.id]=Object(u.a)(Object(u.a)({},t[a.id]),{},{createdOn:a.newDate}),t[a.id].filterCateg=N.computeCategory(t[a.id]),Object(u.a)(Object(u.a)({},e),{},{campaignsById:t});default:return e}},I=Object(s.c)({appReducer:S}),A=Object(s.d)(I,{},Object(s.a)(o.a)),h=(t(112),t(113),t(190));t(114);var b=function(){var e=Object(h.a)(),a=e.t,t=e.i18n;return r.a.createElement("div",{className:"switch-language"},r.a.createElement("label",{htmlFor:"language-options"},a("SELECT_LANGUAGE")),r.a.createElement("select",{name:"language-options",onChange:function(e){t.changeLanguage(e.target.value)}},r.a.createElement("option",{value:"en"},a("ENGLISH")),r.a.createElement("option",{value:"sp"},a("SPANISH"))))};var O=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("img",{src:"./bluestacks/logo.png",className:"logo",alt:"bluestacks"})),r.a.createElement(b,null))},P=t(189),y=t(63),M=t.n(y),G=t(85),_=function(e){return new Promise((function(a,t){e?a(JSON.parse(window.localStorage.getItem("campaignData"))):t()}))},w={data:[{id:1,name:"Test Whatsapp",region:"US",createdOn:1599332722,price:"Price info of Test Whatsapp",csv:"Some CSV link for Whatsapp",report:"Some report link for Whatsapp",image_url:"Some image url of the campaign"},{id:2,name:"Super Jewels Quest",region:"CA, FR",createdOn:1601924722,price:"Price info of Super Jewels Quest",csv:"Some CSV link for Super Jewels Quest",report:"Some report link for Super Jewels Ques",image_url:"Some image url of the campaign"},{id:3,name:"Mole Slayer",region:"FR",createdOn:1599159922,price:"Price info of Mole Slayer",csv:"Some CSV link for Mole Slayer",report:"Some report link for Mole Slayer",image_url:"Some image url of the campaign"},{id:4,name:"Mancala Mix",region:"JP",createdOn:1599332722,price:"Price info of Mancala Mix",csv:"Some CSV link for Mancala Mix",report:"Some report link for Mancala Mix",image_url:"Some image url of the campaign"}]};var R=Object(l.b)(null,{filterCampaigns:function(e){return function(a){a({type:"ON_FILTER",filterId:e})}}})((function(e){var a=e.filterCampaigns,t=Object(h.a)().t;return r.a.createElement("div",{className:"campaign-filters"},r.a.createElement(P.a,{variant:"tabs",defaultActiveKey:"1",onSelect:function(e){return a(e)}},v.map((function(e){return r.a.createElement(P.a.Item,{key:e.id},r.a.createElement(P.a.Link,{eventKey:e.id},t(e.label)))}))))})),j=t(40),T=t(92),k=t.n(T),V=(t(123),t(43)),L=t.n(V);var D=function(e){var a=e.value,t=e.format,n=void 0===t?"YYYY/MM/DD":t;return r.a.createElement(L.a,{format:n},a)},U=r.a.forwardRef((function(e,a){var t=e.onClick,n=e.path,c=Object(h.a)().t;return r.a.createElement("div",{className:"pointer",onClick:t},r.a.createElement("img",{src:"".concat(n,"/Group/calendar.png"),height:"20",className:"half-breathing-space right-only"}),c("SCHEDULE_AGAIN"))})),B=t(188);t(124);var F=function(e){var a=e.handleClose,t=e.campaign,n=Object(h.a)().t;return r.a.createElement(B.a,{show:!0,onHide:a,dialogClassName:"campaign-modal"},r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,null,r.a.createElement("img",{src:t.imageUrl}),r.a.createElement("div",{className:"name half-breathing-space left-only"},r.a.createElement("div",null,t.name,r.a.createElement("div",{className:"meta"},t.region)),r.a.createElement("div",{className:"meta date"},r.a.createElement(D,{format:"MMM YYYY, DD",value:t.createdOn}))))),r.a.createElement(B.a.Body,null,r.a.createElement("div",null,r.a.createElement("label",{className:"half-breathing-space right-only"},n("PRICE"),": "),t.price),r.a.createElement("div",null,r.a.createElement("label",{className:"half-breathing-space right-only"},n("CSV"),": "),t.csv),r.a.createElement("div",null,r.a.createElement("label",{className:"half-breathing-space right-only"},n("REPORT"),": "),t.report)))},x=r.a.createRef();var W=Object(l.b)((function(e){var a=e.appReducer;return{campaignsById:a.campaignsById,activeFilterId:a.activeFilterId}}),{updateDate:function(e,a){return function(t){t({type:"UPDATE_DATE",id:e.id,newDate:a})}}})((function(e){var a=e.campaignId,t=e.updateDate,c=e.campaignsById,i=e.activeFilterId,l=Object(h.a)().t,s=c[a],o=Object(n.useState)(!1),m=Object(j.a)(o,2),u=m[0],p=m[1],g=r.a.useCallback((function(e){t(s,e)}),[]),d=function(){p((function(e){return!e}))};return s&&s.filterCateg==i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-row"},r.a.createElement("div",{className:"item"},r.a.createElement(D,{format:"MMM YYYY, DD",value:s.createdOn}),s.filterCateg!==f.LIVE&&r.a.createElement("div",{className:"meta text-capitalize"},r.a.createElement(L.a,{fromNow:!0,ago:!0},s.createdOn),s.filterCateg===f.PAST?" ago":" ahead")),r.a.createElement("div",{className:"item campaign-name"},r.a.createElement("img",{src:s.imageUrl}),r.a.createElement("div",{className:"name"},r.a.createElement("span",null,s.name),r.a.createElement("span",{className:"meta"},s.region))),r.a.createElement("div",{className:"item view-pricing",onClick:d},r.a.createElement("img",{src:"".concat("./bluestacks/assets/Row Copy 0-Row","/Group 4/Price.png"),height:"20",className:"half-breathing-space right-only"}),l("VIEW_PRICING")),r.a.createElement("div",{className:"item actions"},r.a.createElement("div",{className:"action-item"},r.a.createElement("img",{src:"".concat("./bluestacks/assets/Row Copy 0-Row","/Group 3/file.png"),height:"20",className:"half-breathing-space right-only"}),l("CSV")),r.a.createElement("div",{className:"action-item"},r.a.createElement("img",{src:"".concat("./bluestacks/assets/Row Copy 0-Row","/Group 2/statistics-report.png"),height:"20",className:"half-breathing-space right-only"}),l("REPORT")),r.a.createElement("div",{className:"action-item",onClick:function(e){return e.stopPropagation()}},r.a.createElement(k.a,{selected:s.createdOn,onChange:function(e){return g(e)},customInput:r.a.createElement(U,{ref:x,path:"./bluestacks/assets/Row Copy 0-Row"})})))),u&&r.a.createElement(F,{campaign:s,handleClose:d})):r.a.createElement(r.a.Fragment,null)}));t(180);var Y=Object(l.b)((function(e){var a=e.appReducer;return{campaigns:a.campaigns,activeFilterId:a.activeFilterId,campaignsById:a.campaignsById,loadingCampaigns:a.loadingCampaigns}}))((function(e){var a=e.campaigns,t=e.activeFilterId,c=e.campaignsById,i=e.loadingCampaigns,l=Object(h.a)().t,s=Object(n.useState)(!0),o=Object(j.a)(s,2),m=o[0],u=o[1],p=Object(n.useState)(!1),g=Object(j.a)(p,2),d=g[0],E=g[1],f=Object(n.useRef)(),v=f.current;return Object(n.useEffect)((function(){f.current=i,v&&!f.current&&E(!0)}),[i]),Object(n.useEffect)((function(){for(var e in c){if(Number(t)===Number(c[e].filterCateg)){u(!0);break}u(!1)}}),[c,t]),r.a.createElement(r.a.Fragment,null,d&&r.a.createElement("div",{className:"campaign-table"},a.length&&r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header table-row"},r.a.createElement("div",{className:"item"},l("DATE")),r.a.createElement("div",{className:"item"},l("CAMPAIGN")),r.a.createElement("div",{className:"item"},l("VIEW")),r.a.createElement("div",{className:"item"},l("ACTIONS"))),r.a.createElement("div",{className:"table-body"},m&&a.map((function(e,a){return r.a.createElement(W,{campaignId:e,key:a})})),!m&&r.a.createElement("div",{className:"text-center"},l("NO_ACTIVE_CAMPAIGNS")))),!a.length&&r.a.createElement("div",null,"Sorry, No campaigns available!")))}));t(181);var H=Object(l.b)((function(e){return{loading:e.appReducer.loading}}),{loadCampaigns:function(){return function(){var e=Object(G.a)(M.a.mark((function e(a){var t,n,r,c,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"LOAD_CAMPAIGNS_START"}),e.prev=1,e.next=4,_(!0);case 4:t=e.sent,n=t.data,r=n.map((function(e,a){return N.build(e,a)})),c=[],i={},r.forEach((function(e){i[e.id]=e,c.push(e.id)})),a({type:"LOAD_CAMPAIGNS_SUCCESS",campaignIds:c,campaignsById:i}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.warn(e.t0),a({type:"LOAD_CAMPAIGNS_ERROR"});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a){return e.apply(this,arguments)}}()}})((function(e){var a=e.loadCampaigns,t=Object(h.a)().t;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("h1",null,t("MANAGE_CAMPAIGNS")),r.a.createElement(R,null),r.a.createElement(Y,null)))}));var J=function(){return window.localStorage.setItem("campaignData",JSON.stringify(w)),r.a.createElement(l.a,{store:A},r.a.createElement("div",{className:"app"},r.a.createElement(O,null),r.a.createElement("div",{className:"app-container"},r.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(67),z=t(41),K={en:{translation:t(95)},sp:{translation:t(96)}};Q.a.use(z.e).init({resources:K,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});Q.a;i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e){e.exports=JSON.parse('{"SELECT_LANGUAGE":"Select language","ENGLISH":"English","SPANISH":"Spanish","MANAGE_CAMPAIGNS":"Manage Campaigns","UPCOMING_CAMPAIGNS":"Upcoming Campaigns","LIVE_CAMPAIGNS":"Live Campaigns","PAST_CAMPAIGNS":"Past Campaigns","NO_ACTIVE_CAMPAIGNS":"No active campaigns in this category.","DATE":"Date","CAMPAIGN":"Campaign","VIEW":"View","ACTIONS":"Actions","PRICE":"Price","CSV":"CSV","REPORT":"Report","VIEW_PRICING":"View Pricing","SCHEDULE_AGAIN":"Schedule Again"}')},96:function(e){e.exports=JSON.parse('{"SELECT_LANGUAGE":"Seleccione el idioma","ENGLISH":"English","SPANISH":"Spanish","MANAGE_CAMPAIGNS":"Gestionar campa\xf1as","UPCOMING_CAMPAIGNS":"Pr\xf3ximas Campa\xf1as","LIVE_CAMPAIGNS":"Campa\xf1as en vivo","PAST_CAMPAIGNS":"Campa\xf1as pasadas","NO_ACTIVE_CAMPAIGNS":"No hay campa\xf1as activas en esta categor\xeda.","NO_CAMPAIGNS":"Lo sentimos, no hay campa\xf1as disponibles.","DATE":"Fecha","CAMPAIGN":"Campa\xf1a","VIEW":"Ver","ACTIONS":"Comportamiento","PRICE":"Precio","CSV":"CSV","REPORT":"Reporte","VIEW_PRICING":"Ver precios","SCHEDULE_AGAIN":"Programar de nuevo"}')}},[[100,1,2]]]);
//# sourceMappingURL=main.053209db.chunk.js.map