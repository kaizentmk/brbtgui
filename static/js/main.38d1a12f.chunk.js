(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],[,,,,,,,,function(e,n,t){},,,,,,,function(e,n,t){},,,function(e,n,t){e.exports=t.p+"static/media/home.da15f9a2.svg"},,function(e,n,t){e.exports=t(61)},,,,,function(e,n,t){},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,r,i,c=t(4),s=t(0),o=t.n(s),l=t(7),u=t.n(l),d=(t(25),t(1)),m=t(19),f=t(2),k=t(5),g=Object(f.b)("SHOW_APP"),v=Object(f.b)("SHOW_LOADING"),b=Object(f.b)("SET_APP_DISPLAY"),E=Object(f.b)("SET_APP_MODE"),p=Object(f.b)("SET_APP_STATE"),w=Object(f.b)("SET_APP_VIEW"),O={display:"APP_DISPLAY_DRINKER",view:"APP_VIEW",state:"APP_STATE_STARTED",mode:"APP_MODE_DASHBOARD"},_=Object(f.c)(O,(a={},Object(k.a)(a,g,(function(e,n){e.view="APP_VIEW"})),Object(k.a)(a,v,(function(e,n){e.view="APP_VIEW_LOADING"})),Object(k.a)(a,b,(function(e,n){e.display=n.payload})),Object(k.a)(a,E,(function(e,n){e.mode=n.payload})),Object(k.a)(a,p,(function(e,n){e.state=n.payload})),Object(k.a)(a,w,(function(e,n){e.view=n.payload})),a)),h=Object(f.b)("SHOW_CATEGORIES"),j=Object(f.b)("CHOOSE_CATEGORY"),y={view:"CATEGORIES_VIEW",categories:[{id:"list",name:"lista drink\xf3w",aside:"wide"},{id:"prefs",name:"twoje preferencje",aside:"wide"},{id:"top",name:"TOP 10",aside:"narrow"},{id:"random",name:"niespodzianka",aside:"narrow"},{id:"custom",name:"twoja kompozycja",aside:"wide"},{id:"alco",name:"alkohol",aside:"narrow"}],category:{}},N=Object(f.c)(y,(r={},Object(k.a)(r,h,(function(e,n){e.view="CATEGORIES_VIEW",e.category={}})),Object(k.a)(r,j,(function(e,n){e.view="CATEGORY_VIEW",e.category=n.payload})),r)),A=t(3),C=t.n(A),D=Object(f.b)("DRINKS_SET_DATA"),I=Object(f.b)("RESET_DRINKS"),S=Object(f.b)("SET_DRINKS_LIST_VIEW"),P=Object(f.b)("SET_DRINK"),R=Object(f.b)("SET_RANDOM_DRINK"),T=Object(f.b)("SET_TOP_DRINKS"),q=Object(f.b)("SET_DRINKS_PREFS_VIEW"),x=Object(f.b)("FILTER_DRINKS"),L=Object(f.b)("SET_DRINK_NR"),B=Object(f.b)("FIND_DRINK_BY_NR"),W=(Object(f.b)("INGS_SET"),Object(f.b)("INGS_PREFS_TOGGLE_WANT")),F=Object(f.b)("INGS_PREFS_TOGGLE_NOT_WANT"),U=Object(f.b)("INGS_PREFS_RESET"),G=Object(f.b)("INGS_CUSTOM_ADD"),V=Object(f.b)("INGS_CUSTOM_REM"),M=Object(f.b)("INGS_CUSTOM_IDX"),H=Object(f.b)("INGS_CUSTOM_RESET");Object(f.b)("INGS_TOGGLE_USABLE"),Object(f.b)("INGS_TOGGLE_NOT_USABLE");function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(A.map)(Object(A.filter)(e,["usable",n]),"id")}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(A.map)(Object(A.filter)(e,["wanted",!0]),"id")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(A.map)(Object(A.filter)(e,["notWanted",!0]),"id")}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=!!Object(A.intersection)(e.ings,n).length,i=!t.length||!!Object(A.intersection)(e.ings,t).length,s=!Object(A.intersection)(e.ings,a).length;return Object(c.a)(Object(c.a)({},e),{usable:r&&i&&s})}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=z(n),a=K(n),r=Y(n);return e.map((function(e){return J(e,t,a,r)})).filter((function(e){return e.usable}))}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(c.a)(Object(c.a)({},e),{},{nameAndIngsStr:e.name.toLowerCase()+" "+e.ings.join(" ").toLowerCase()})}var Q={origDrinks:[],drinks:[],drink:{},origIngs:{},ings:{},drinksList:{view:"drinks_list_view_list",nameOrIng:"",nr:""},drinksPrefs:{view:"Ings",count:0},drinkCustom:{}},$=Object(f.c)(Q,(i={},Object(k.a)(i,D,(function(e,n){!function(e){Object(A.forEach)(Q,(function(n,t){return e[t]=n}))}(e),e.origDrinks=n.payload.drinks,e.origIngs=n.payload.ings,e.ings=n.payload.ings,e.drinksList={view:"drinks_list_view_list",nameOrIng:"",nr:""},e.drinks=Z(e.origDrinks.map(X),e.ings);e.drinkCustom={ings:[],max:200,total:0,ingsCounts:{},left:200,ingsOrder:[]}})),Object(k.a)(i,S,(function(e,n){e.drinksList.view=n.payload})),Object(k.a)(i,P,(function(e,n){e.drink=n.payload})),Object(k.a)(i,R,(function(e,n){e.drink=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(A.random)(e.length-1);return e[n]}(e.drinks)})),Object(k.a)(i,T,(function(e,n){e.drinks=Object(A.shuffle)(e.origDrinks.map(X)).slice(0,10)})),Object(k.a)(i,I,(function(e,n){e.drinks=Z(e.origDrinks.map(X),e.ings),e.drink={},e.ings=e.origIngs,e.drinksList={view:"drinks_list_view_list",nameOrIng:"",nr:""},e.drinksPrefs.view="Ings"})),Object(k.a)(i,L,(function(e,n){var t=n.payload;(0===t.length||t.length<=3)&&(e.drinksList.nr=t),0===t.length||t.length<=3?e.drinks=e.origDrinks.map(X).filter((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.nr.indexOf(n)>-1}(e,t)})):e.drinks=e.origDrinks})),Object(k.a)(i,B,(function(e,n){var t=n.payload||e.drinksList.nr;(0===t.length||t.length<=3)&&(e.drinksList.nr=t),0===t.length||t.length<=3?e.drinks=e.origDrinks.map(X).filter((function(e){return e.nr===t})):e.drinks=e.origDrinks})),Object(k.a)(i,x,(function(e,n){var t=n.payload;e.drinksList.nameOrIng=t,0===t.length||t.length>=3?e.drinks=e.origDrinks.map(X).filter((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=n.toLowerCase().match(/\S+/g)||[];return!t.length||t.filter((function(n){return e.nameAndIngsStr.indexOf(n)>-1})).length===t.length}(e,t)})):e.drinks=e.origDrinks})),Object(k.a)(i,q,(function(e,n){e.drinksPrefs.view=n.payload})),Object(k.a)(i,U,(function(e,n){Object.keys(e.ings).forEach((function(n){var t=e.ings[n];e.ings[n]=Object(c.a)(Object(c.a)({},t),{wanted:!1,notWanted:!1})})),e.drinks=Z(e.origDrinks.map(X),e.ings),e.drinksPrefs.count=0})),Object(k.a)(i,W,(function(e,n){var t=n.payload.id,a=e.ings[t].wanted;e.ings[t].wanted=!a,e.ings[t].notWanted=!1,e.drinks=Z(e.origDrinks.map(X),e.ings),e.drinksPrefs.count=Object(A.toArray)(e.ings).filter((function(e){return e.wanted||e.notWanted})).length})),Object(k.a)(i,F,(function(e,n){var t=n.payload.id,a=e.ings[t].notWanted;e.ings[t].wanted=!1,e.ings[t].notWanted=!a,e.drinks=Z(e.origDrinks.map(X),e.ings),e.drinksPrefs.count=Object(A.toArray)(e.ings).filter((function(e){return e.wanted||e.notWanted})).length})),Object(k.a)(i,G,(function(e,n){var t=n.payload,a=Object(c.a)({},e.drinkCustom),r=a.ings,i=a.max,s=a.total,o=a.ingsOrder,l=s+t.portion;l<=i&&(e.drinkCustom.ings.push(t),e.drinkCustom.total=l,e.drinkCustom.ingsCounts=Object(A.countBy)(r,(function(e){return e.id})),e.drinkCustom.left=i-l,o[o.length-1]!==t.id&&e.drinkCustom.ingsOrder.push(t.id))})),Object(k.a)(i,H,(function(e,n){e.drinkCustom.ings=[],e.drinkCustom.total=0,e.drinkCustom.ingsCounts={},e.drinkCustom.left=e.drinkCustom.max,e.drinkCustom.ingsOrder=[]})),i)),ee=Object(f.c)({dataFromUsb:[],dataToUsb:[]},{});var ne=function(){var e,n={},t={},a=function(e){Object.values(n).forEach((function(n){return n(e)}))},r=function(e){Object.values(t).forEach((function(n){return n(e)}))};return{addOnReadSucClbk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!Object(A.isFunction)(t))throw new Error("Not a function: "+e);n[e]=t},addOnReadErrClbk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;if(!Object(A.isFunction)(n))throw new Error("Not a function: "+e);t[e]=n},connectGui:function(n,t){(e=n).connectGui(t,a,r)},connectDevice:function(n){e.connectDevice(n,a,r)},exec:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(a,r){t.length?e[n](t,a,r):e[n](a,r)}))}}}(),te=Object(f.b)("USB_MSG_FROM_DEVICE"),ae=Object(f.b)("USB_INIT"),re=Object(f.b)("USB_GUI_CONNECT"),ie=Object(f.b)("USB_DEVICE_CONNECT"),ce=(Object(f.b)("USB_WRITE"),Object(f.b)("USB_DISPATCH"),function(){}),se={connectGui:function(e,n,t){setTimeout((function(){n('{"type": "gui", "data":"connected"}'),ce=n,t}),C.a.random(1e3,3e3))},connectDevice:function(e,n,t){setTimeout((function(){ce('{"type": "device.connected", "data":"connected"}')}),C.a.random(3e3,5e3))},write:function(e,n,t){t(e)},dispatch:function(e,n,t){t(e)}},oe=window.JSON;var le,ue={tojson:(le=oe).stringify,fromjson:le.parse},de=window.console,me=null,fe=0,ke=[];function ge(e){fe++,me.innerText=+fe+".\t"+e+"\r\n\r\n"+me.innerText}var ve=function(e){return{init:function(e){me=document.getElementById(e),fe=-1,ge("console OK"),ke.forEach(ge)},log:function(n){e.log(n),ke.push(n),me&&ge(n)},err:function(n){e.error(n);var t="_ERR_: "+n;ke.push(t),me&&ge(t)},clear:function(){me&&(me.innerText="",fe=0,ke=[])}}}(de),be=Object(c.a)({},ue).fromjson,Ee=Object(c.a)({},ve).err,pe=function(e){return function(n){return function(t){if(ae.type===t.type){e.dispatch(p("APP_STATE_USB_INITIALIZING"));try{ne.addOnReadSucClbk("action",(function(n){return e.dispatch(te(n))})),ne.addOnReadErrClbk("action",(function(n){return e.dispatch(te(n))})),e.dispatch(re(t.payload))}catch(s){Ee(s)}}if(re.type===t.type){e.dispatch(p("APP_STATE_USB_GUI_CONNECTING"));try{var a=t.payload.params||{},r=t.payload.cordova;r?ne.connectGui(r.plugins.tmkusb,a):ne.connectGui(se,a)}catch(s){Ee(s)}}if(ie.type===t.type){e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTING"));var i=t.payload||{};ne.connectDevice(i)}if(te.type===t.type){var c=be(t.payload||"{}");"gui"===c.type&&"connected"===c.data&&(e.dispatch(p("APP_STATE_USB_GUI_CONNECTED")),e.dispatch(ie())),"device.connecting"===c.type&&"connecting"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTING")),"device.connected"===c.type&&"connected"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTED")),"device.error"===c.type&&"error"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_ERROR")),"device.detached"===c.type&&"detached"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_DETACHED"))}n(t)}}},we=Object(c.a)({},ve),Oe=we.log,_e=we.err,he=function(e){return function(e){return function(n){if(n.type===te.type&&n.payload)try{var t=ue.fromjson(n.payload);Oe("_:action = "+n.type+"\r\n"+t.time+" "+t.type+":\r\n"+t.data.replace(/,/g,"\r\n"))}catch(a){_e(a),_e("::action = "+n.type+" \r\n action.payload = "+n.payload)}else Oe("log::action = "+n.type+" \r\n"+ue.tojson(n.payload));e(n)}}},je=function(e){return function(n){return function(t){t.type===j.type&&("random"===t.payload.id&&e.dispatch(R()),"top"===t.payload.id&&e.dispatch(T())),t.type===v.type&&setTimeout((function(){return e.dispatch(g())}),Object(A.random)(1e3,3e3)),n(t)}}},ye=Object(f.a)({reducer:{app:_,categories:N,drinks:$,usb:ee},middleware:[he,pe,je].concat(Object(m.a)(Object(f.d)()))});window.store=ye;var Ne=ye;t(31),t(32),t(33),t(34);var Ae=Object(d.c)((function(e){return{view:e.app.view}}))((function(e){var n="APP_VIEW_LOADING"===e.view?"intro.gif?a="+Math.random():"";return o.a.createElement("img",{id:"app-loading",className:"center",src:n,alt:"loading"})})),Ce=(t(35),t(36),{"cat-alco":"0 0 72 32","cat-list":"0 0 55 45","cat-custom":"0 0 28 42","cat-prefs":"0 0 160 160","cat-random":"0 0 160 160","cat-top":"0 0 83 160"});var De=function(e){var n="cat-"+e.category.id;return o.a.createElement("div",{className:"category-icon "+n},o.a.createElement("span",{className:"category-icon "+n},o.a.createElement("img",{className:"category-icon "+n,alt:"",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}),o.a.createElement("svg",{className:"category-icon "+n,viewBox:Ce[n]},o.a.createElement("use",{xlinkHref:"#"+n}))))};t(37);var Ie=function(e){var n=e.category,t="cat-"+n.id;return o.a.createElement("h2",{className:"category-name "+t},o.a.createElement("span",{className:"category-name "+t},n.name))};var Se=Object(d.c)((function(e){return{categories:e.categories.categories,drinksPresent:e.drinks.drinks.length}}),(function(e){return{chooseCategory:function(n){return e(j(n))}}}))((function(e){var n=e.categories,t=e.drinksPresent,a=e.chooseCategory,r=n.map((function(e){return o.a.createElement("li",{key:e.id,className:"categories",onClick:function(){return t?a(e):null}},o.a.createElement(De,{category:e}),o.a.createElement(Ie,{category:e}))})),i=t?"":"categories-inactive";return o.a.createElement("ul",{className:"categories "+i},r)})),Pe=(t(38),t(8),t(17)),Re=t.n(Pe),Te=t(18),qe=t.n(Te);t(40);var xe=function(e){var n=e.action;return o.a.createElement("button",{className:"cats-home-btn",onClick:function(){return n()}},o.a.createElement(Re.a,{id:"home-icon",option:{file:qe.a,animTimingFunction:"EASE",type:"oneByOne",onReady:console.log},style:{height:"100%",width:"auto"},callback:console.log}))};var Le=function(e){var n=e.category,t=e.cssClassSuffix,a=e.children,r=e.showCategories,i="cat-aside-"+t;return o.a.createElement("aside",{className:i},o.a.createElement(De,{category:n}),o.a.createElement(Ie,{category:n}),a,o.a.createElement("nav",{className:i},o.a.createElement(xe,{action:r})))};t(41);var Be=function(e){var n=e.drinks;return o.a.createElement("div",{className:"drinks-count"},o.a.createElement("h3",{className:"drinks-count"},"Liczba drink\xf3w:"),o.a.createElement("p",{className:"drinks-count"},n.length))};var We=Object(d.c)((function(e){return{view:e.drinks.drinksList.view}}),(function(e){return{setDrinksListView:function(n){"drinks_list_view_list"===n&&e(B(0)),e(S(n))}}}))((function(e){var n=e.view,t=e.setDrinksListView;return"drinks_list_view_list"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_find_by_nr")},className:"drinks-find-by-nr"},"Podaj nr drinka"):"drinks_list_view_find_by_nr"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_list")},className:"drinks-find-by-nr"},"Wr\xf3\u0107 do pe\u0142nej listy"):""}));var Fe=Object(d.c)((function(e){return{view:e.drinks.drinksList.view}}),(function(e){return{setDrinksListView:function(n){"drinks_list_view_list"===n&&e(x("")),e(S(n))}}}))((function(e){var n=e.view,t=e.setDrinksListView;return"drinks_list_view_list"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_filter")},className:"drinks-filter"},"Wyszukaj po nazwie lub sk\u0142adniku"):"drinks_list_view_filter"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_list")},className:"drinks-filter"},"Wr\xf3\u0107 do pe\u0142nej listy"):""}));t(42);var Ue=Object(d.c)((function(e){return{drinks:e.drinks.drinks}}))((function(e){var n=e.drinks;return o.a.createElement("div",{className:"cat-aside cat-aside-list"},o.a.createElement(Be,{drinks:n}),o.a.createElement(We,null),o.a.createElement(Fe,null))}));t(43);var Ge=Object(d.c)((function(e){var n=e.drinks.drinks,t=e.drinks.drinksPrefs,a=t.view,r=t.count;return{isShowingDrinksAllowed:n.length&&e.drinks.origDrinks.length!==n.length,drinks:n,view:a,count:r}}),(function(e){return{ingsPrefsReset:function(){return e(U())},setDrinksPrefsIngsView:function(){return e(q("Ings"))},setDrinksPrefsListView:function(){return e(q("DrinkList"))}}}))((function(e){var n=e.view,t=e.count,a=e.drinks,r=e.setDrinksPrefsIngsView,i=e.setDrinksPrefsListView,c=e.ingsPrefsReset,s=e.isShowingDrinksAllowed,l="Ings"===n?o.a.createElement("button",{className:"cat-aside cat-aside-prefs",disabled:!s,onClick:function(){return!!s&&i()}},"POKA\u017b"):o.a.createElement("button",{className:"cat-aside-prefs",onClick:function(){return r()}},"WR\xd3\u0106 DO PREFERENCJI"),u="Ings"===n?o.a.createElement("button",{className:"cat-aside cat-aside-prefs",disabled:!t,onClick:function(){return c()}},"RESETUJ"):"";return o.a.createElement("div",{className:"cat-aside cat-aside-prefs"},o.a.createElement(Be,{drinks:a}),l,u)}));t(44);var Ve=Object(d.c)((function(e){var n=Object(c.a)({},e.drinks.drinkCustom),t=n.max,a=n.total,r=n.ingsOrder;return{ings:e.drinks.ings,max:t,total:a,ingsOrder:r}}))((function(e){var n=e.ings,t=e.max,a=e.total,r=e.ingsOrder,i=a/t,c=i?1.5-Math.sqrt(i)/2:1,s=(10+75*i)*c,l=r.map((function(e){return e}));return l.reverse(),o.a.createElement("div",{className:"drink-custom-glass"},o.a.createElement("div",{style:{height:s?s+"%":s},className:"drink-custom-glass-level"}),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass1",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass1"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass2",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass2"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass3",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass3"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass-bg",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass-bg"})),o.a.createElement("ul",{style:{height:s?s+"%":s},className:"drink-custom-glass-level"},l.map((function(e,t,a){return o.a.createElement("li",{key:"d-c-g-"+e,className:"drink-custom-glass-level",style:{fontSize:50+(a.length-t)*i*15+"%"}},n[e].name)}))))}));t(45);var Me=Object(d.c)((function(e){return{ingsOrder:Object(c.a)({},e.drinks.drinkCustom).ingsOrder}}),(function(e){return{ingsReset:function(){return e(H())}}}))((function(e){var n=e.ingsReset;return o.a.createElement("div",{className:"cat-aside cat-aside-custom"},o.a.createElement(Ve,null),o.a.createElement("button",{onClick:function(){return n()},className:"drink-custom-glass"},"Resetuj"),o.a.createElement("button",{className:"drink-custom-glass"},"Zr\xf3b drinka"))}));t(46);var He=function(){return o.a.createElement("div",{className:"tmk"},o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_1"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_2"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_3"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_4"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_5"})))),o.a.createElement("div",null,o.a.createElement("svg",{className:"all ",viewBox:"0 0 100 150"},o.a.createElement("circle",{className:"all-circle ",cx:"50",cy:"50",r:"50"}),o.a.createElement("image",{href:"drinks/kd1_calosc.svg",className:"all-img"}))))};var ze=function(){return o.a.createElement("div",{className:"drink-custom-hdr"},"WYBIERZ SK\u0141ADNIKI DO SWOJEGO DRINKA")};t(47);var Ke=Object(d.c)((function(e){var n=Object(c.a)({},e.drinks.drinkCustom);return{ingsCounts:n.ingsCounts,left:n.left,orders:n.ingsOrder.reduce((function(e,n,t){var a=e[n]||[];return a.push(t+1),e[n]=a,e}),{})}}),(function(e){return{addIng:function(n,t){Object(d.b)((function(){return Object(A.times)(t,(function(){return e(G(n))}))}))},remIng:function(n){return e(V(n))},remIngByIdx:function(n){return e(M(n))}}}))((function(e){var n=e.ing,t=e.left,a=e.addIng,r=e.ingsCounts,i=(e.orders,r[n.id]||0),c=n.portion<=t;return o.a.createElement("div",{onClick:function(){return!!c&&a(n,1)},className:"ing-custom"},o.a.createElement("p",{className:"ing-custom"},n.name),[0,1,2,3].map((function(e){var a=e<i,r=!a&&(e+1-i)*n.portion<=t,c=a?" ing-custom-selected":r?"":" ing-custom-hidden";return o.a.createElement("span",{key:n.id+e,className:"ing-custom"+c},"\xa0")})))}));var Ye=function(e){var n=e.ing,t=void 0===n?{}:n,a=e.clickFn,r=e.cssClass,i=void 0===r?"":r;return o.a.createElement("span",{onClick:function(){return a(t)},className:"ing-prefs "+i},t.name)};t(15);var Je=Object(d.c)(null,(function(e){return{want:function(n){return e(W(n))},notWant:function(n,t){e(F(t)),n.stopPropagation()}}}))((function(e){var n=e.ing,t=e.want,a=(e.notWant,n.usable&&n.wanted?" ing-prefs-wanted":"");return o.a.createElement(Ye,{ing:n,clickFn:t,cssClass:a})}));var Ze=Object(d.c)(null,(function(e){return{want:function(n){return e(W(n))},notWant:function(n){return e(F(n))}}}))((function(e){var n=e.ing,t=(e.want,e.notWant),a=n.usable&&n.notWanted?" ing-prefs-wanted-not":"";return o.a.createElement(Ye,{ing:n,clickFn:t,cssClass:a})}));t(48);var Xe=Object(d.c)((function(e){var n=e.categories.category,t="Ings"+n.id[0].toUpperCase()+n.id.slice(1);return{ings:Object(A.sortBy)(Object(A.toArray)(e.drinks.ings),"name"),ingsViewName:t}}))((function(e){var n=e.ings,t=void 0===n?[]:n,a=e.ingsViewName,r=void 0===a?"":a,i=e.ingsKind,c=void 0===i?"":i,s=e.cssClass,l=void 0===s?"":s,u={IngsCustom:Ke,IngsPrefsWant:Je,IngsPrefsWantNot:Ze}[r+c];return o.a.createElement("ul",{className:"ings "+l},t.map((function(e,n,t){return o.a.createElement("li",{key:e.id,className:"ings "+l},o.a.createElement(u,{key:e.id,ing:e}))})))}));t(49);var Qe=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ze,null),o.a.createElement(Xe,{cssClass:"ings-custom"}))};t(50),t(51);var $e=function(e){var n=e.drink;return o.a.createElement("h2",{className:"drink-name"},o.a.createElement("span",{className:"drink-name center-top-grh"},n.name))};t(52);var en=function(e){var n=e.drink,t=e.ings;return o.a.createElement("ul",{className:"drink-ings"},(t||[]).map((function(e,t,a){var r=o.a.createElement("li",{key:n.id+"-ings-sep"+t,className:"drink-ings drink-ings-sep"},"\xa0");return o.a.createElement(o.a.Fragment,{key:n.id+"-ings-fragment"+t},o.a.createElement("li",{key:n.id+"-ings"+t,className:"drink-ings"},e),r)})))};var nn=function(e){var n=e.drink;return o.a.createElement("div",{className:"drinks-list-item"},o.a.createElement($e,{drink:n}),o.a.createElement(en,{drink:n,ings:n.mainIngs}))};t(53),t(54);var tn=function(e){var n=e.drink;return o.a.createElement("div",{className:"drink-icon "},o.a.createElement("img",{className:"drink-icon center",src:n.icon,alt:n.name}))};var an=Object(d.c)(null,(function(e){return{chooseDrink:function(n){Object(d.b)((function(){e(I()),e(h()),e(v())}))}}}))((function(e){var n=e.drink,t=e.chooseDrink;return o.a.createElement("div",{className:"drink"},o.a.createElement($e,{drink:n}),o.a.createElement(tn,{drink:n}),o.a.createElement(en,{drink:n,ings:n.ings}),o.a.createElement("nav",{className:"drink"},o.a.createElement("button",{className:"drink",disabled:!n.ings,onClick:function(){return t(n)}},"ZR\xd3B DRINKA")))}));t(55);var rn=Object(d.c)((function(e){var n=e.drinks;return{drink:n.drink,drinks:n.drinks}}),(function(e){return{setDrink:function(n){return e(P(n))}}}))((function(e){var n=e.cssClass,t=void 0===n?"":n,a=e.drink,r=e.drinks,i=e.setDrink;return r.length?o.a.createElement("ul",{className:"drinks-list "+t},r.filter((function(e){return e.usable})).map((function(e,n){var t=e.id===a.id||1===r.length,c="drinks-list "+(t?"drinks-list-selected":""),s=t?{id:-1}:e,l=o.a.createRef();return o.a.createElement("li",{key:e.id,ref:l,className:c,onClick:function(){l.current.scrollIntoView({behavior:"smooth",block:"center"}),i(s)}},o.a.createElement("span",{className:"drinks-list-nr"},e.nr),t?o.a.createElement(an,{drink:e,key:e.id+"d"}):o.a.createElement(nn,{key:e.id+"dli",drink:e}))}))):o.a.createElement("ul",{className:"drinks-list "+t},o.a.createElement("li",{className:"drinks-list-empty"},"brak drink\xf3w do wy\u015bwietlenia"))}));var cn=function(e){var n=e.text,t=void 0===n?"":n,a=e.cssTopActive,r=void 0===a?"":a,i=e.clearFn,c=e.bkspaceFn;return o.a.createElement("div",{className:"kbrd-row kbrd-row-top"},o.a.createElement("span",{onClick:function(){return i()},className:"kbrd-btn"+r},"czy\u015b\u0107"),o.a.createElement("span",{className:"kbrd-btn kbrd-txt"+r},t),o.a.createElement("span",{onClick:function(){return c()},className:"kbrd-btn"+r},"\u232b"))};var sn=function(e){var n=e.keys,t=void 0===n?[]:n,a=e.keyClickFn;return o.a.createElement("div",{className:"kbrd-row kbrd-row-keys"},t.map((function(e){return o.a.createElement("span",{onClick:function(){return a(e)},key:"kbrd-key-"+e,className:"kbrd-btn"},e)})))};var on=function(e){var n=e.keyBtm,t=e.cssBtmActive,a=void 0===t?"":t,r=e.keyClickFn,i=e.showFn;return o.a.createElement("div",{className:"kbrd-row kbrd-row-btm"},o.a.createElement("span",{onClick:function(){return i()},className:"kbrd-btn "+a},"poka\u017c"),o.a.createElement("span",{className:"kbrd-btn",onClick:function(){return r(n)}},n),o.a.createElement("span",{onClick:function(){return i()},className:"kbrd-btn "+a},"poka\u017c"))};t(56);var ln=function(e){var n=e.cssClass,t=void 0===n?"":n,a=e.placeholder,r=void 0===a?"":a,i=e.txt,c=void 0===i?"":i,s=e.clearFn,l=e.bkspaceFn,u=e.cssTopActive,d=void 0===u?"":u,m=e.keyRows,f=void 0===m?[]:m,k=e.keyClickFn,g=e.keyBtm,v=void 0===g?"":g,b=e.showFn,E=e.cssBtmActive,p=void 0===E?"":E,w=c.length?c:r,O=c.length?" kbrd-active":" kbrd-inactive";return o.a.createElement("div",{className:"kbrd "+t},o.a.createElement(cn,{text:w,cssTopActive:d||O,clearFn:s,bkspaceFn:l}),f.map((function(e,n){return o.a.createElement(sn,Object.assign({key:"kbrd-row-"+n},{keys:e,keyClickFn:k}))})),o.a.createElement(on,{keyBtm:v,cssBtmActive:p||O,keyClickFn:k,showFn:b}))};var un=[[1,2,3],[4,5,6],[7,8,9]];var dn=Object(d.c)((function(e){return{nr:e.drinks.drinksList.nr,drinksLen:e.drinks.drinks.length}}),(function(e){return{setDrinkNr:function(n){return e(L(n))},findDrinkByNr:function(n){return e(B(n))}}}))((function(e){var n=e.nr,t=e.drinksLen,a=e.setDrinkNr,r=e.findDrinkByNr,i=n.length&&t>1?" kbrd-active":" kbrd-inactive";return o.a.createElement(ln,{cssClass:"kbrd-digipad",placeholder:"numer drinka",txt:n,clearFn:function(){return a("")},bkspaceFn:function(){return a(n.slice(0,-1))},keyClickFn:function(e){return a(n+e)},keyRows:un,keyBtm:0,showFn:function(){return t>1&&r(n)},cssBtmActive:i})}));var mn=[["\u0105","\u0107","\u0119","\u0142","\u0144","\xf3","\u015b","\u017a","\u017c"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]];var fn=Object(d.c)((function(e){return{nameOrIng:e.drinks.drinksList.nameOrIng}}),(function(e){return{filterDrinks:function(n){return e(x(n))}}}))((function(e){var n=e.nameOrIng,t=void 0===n?"":n,a=e.filterDrinks,r=t.length>2,i=t.length>2?" kbrd-active":" kbrd-inactive";return o.a.createElement(ln,{placeholder:"min 3 litery",txt:t,clearFn:function(){return a("")},bkspaceFn:function(){return a(t.slice(0,-1))},keyClickFn:function(e){return a(t+e)},keyRows:mn,keyBtm:" ",cssBtmActive:i,showFn:function(){return!!r&&console.log("todo")}})}));t(57);var kn=Object(d.c)((function(e){return{view:e.drinks.drinksList.view}}))((function(e){var n=e.view;return"drinks_list_view_list"===n?o.a.createElement(rn,null):"drinks_list_view_filter"===n?o.a.createElement(o.a.Fragment,null,o.a.createElement(rn,{cssClass:"drinks-list-compact"}),o.a.createElement(fn,{placeholder:"nazwa drinka lub sk\u0142adnika"})):"drinks_list_view_find_by_nr"===n?o.a.createElement(o.a.Fragment,null,o.a.createElement(rn,{cssClass:"drinks-list-compact"}),o.a.createElement(dn,null)):"NO PROPER VIEW"}));var gn=function(){return o.a.createElement("div",{className:"drink-prefs-hdr"},"WYBIERZ CO LUBISZ A CO NIE")};t(58);var vn=Object(d.c)((function(e){return{view:e.drinks.drinksPrefs.view}}))((function(e){var n=e.view;return"Ings"===n?o.a.createElement(o.a.Fragment,null,o.a.createElement(gn,null),o.a.createElement(Xe,{ingsKind:"Want",cssClass:"ings-wanted"}),o.a.createElement(Xe,{ingsKind:"WantNot",cssClass:"ings-wanted-not"})):"DrinkList"===n?o.a.createElement(rn,null):"NO DRINKS PREFS VIEW"}));t(59);var bn={DrinksAlco:He,DrinksCustom:Qe,DrinksList:kn,DrinksPrefs:vn,DrinksRandom:Object(d.c)((function(e){return{drink:e.drinks.drink}}),(function(e){return{setRandomDrink:function(){return e(R())}}}))((function(e){var n=e.drink,t=e.setRandomDrink;return o.a.createElement(o.a.Fragment,null,o.a.createElement(an,{drink:n}),o.a.createElement("div",{className:"drinks-random"},o.a.createElement("button",{onClick:function(){return t()},className:"drinks-random"},o.a.createElement("img",{src:"categories/cat-random.svg",alt:"",className:"drinks-random"}),"Losuj jeszcze raz",o.a.createElement("img",{src:"categories/cat-random.svg",alt:"",className:"drinks-random"}))))})),DrinksTop:function(e){return o.a.createElement(rn,e)}},En={CategoryAsideList:Ue,CategoryAsidePrefs:Ge,CategoryAsideCustom:Me};var pn={CATEGORY_VIEW:Object(d.c)((function(e){var n=e.categories.category,t=n.id[0].toUpperCase()+n.id.slice(1);return{cat:n,DrinksView:bn["Drinks"+t],AsideContent:En["CategoryAside"+t]||""}}),(function(e){return{showCategories:function(){Object(d.b)((function(){e(I()),e(h())}))}}}))((function(e){var n=e.cat,t=e.showCategories,a=e.DrinksView,r=e.AsideContent,i="category-"+n.id+" category-aside-"+n.aside,c=r?o.a.createElement(r,{category:n}):o.a.createElement("div",{className:"cat-aside-"+n.aside+"-spacer"},"\xa0");return o.a.createElement("div",{className:"category "+i},o.a.createElement(a,null),o.a.createElement(Le,{category:n,cssClassSuffix:n.aside,showCategories:t},c))})),CATEGORIES_VIEW:Se};var wn=Object(d.c)((function(e){return{View:pn[e.categories.view]}}))((function(e){var n=e.View;return o.a.createElement(n,null)}));var On=function(){return o.a.createElement("div",null,"DrinkerAux")},_n=(t(60),{vodka:{id:"vodka",name:"vodka",usable:!0,wanted:!1,notWanted:!1,portion:50},jin:{id:"jin",name:"jin",usable:!0,wanted:!1,notWanted:!1,portion:25},rum:{id:"rum",name:"rum",usable:!0,wanted:!1,notWanted:!1,portion:50},tequila:{id:"tequila",name:"tequila",usable:!0,wanted:!1,notWanted:!1,portion:25},gin:{id:"gin",name:"gin",usable:!0,wanted:!1,notWanted:!1,portion:50},whisky:{id:"whisky",name:"whisky",usable:!0,wanted:!1,notWanted:!1,portion:25},cola:{id:"cola",name:"cola",usable:!0,wanted:!1,notWanted:!1,portion:50},curacao:{id:"curacao",name:"curacao",usable:!0,wanted:!1,notWanted:!1,portion:25},tomato:{id:"tomato",name:"tomato",usable:!0,wanted:!1,notWanted:!1,portion:25},liqueur:{id:"liqueur",name:"liqueur",usable:!0,wanted:!1,notWanted:!1,portion:50},orange:{id:"orange",name:"orange",usable:!0,wanted:!1,notWanted:!1,portion:25},milk:{id:"milk",name:"milk",usable:!0,wanted:!1,notWanted:!1,portion:25}}),hn=Object(A.random)(17,17),jn=Object(A.times)(hn,(function(e){return{id:"drink-"+e,name:"drink "+e,nr:""+(e+1),desc:{0:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat pellentesque commodo. ",1:"Phasellus ornare eros lorem, quis venenatis ante sodales at. Nullam vehicula ut eros sit amet aliquet. ",2:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",3:"Duis suscipit nibh sapien, lobortis dictum turpis mollis nec. In hac habitasse platea dictumst.",4:"Praesent finibus, odio ac venenatis interdum, mauris erat rutrum neque, et viverra mauris nisl nec metus. ",5:"Maecenas ut tincidunt metus, in luctus neque. Ut vehicula turpis eu massa imperdiet tempus.",6:"Aliquam metus lorem, consectetur eu gravida ac, luctus id dolor. Ut sit amet quam quis dui vehicula cursus in ut turpis.",7:"Morbi id interdum tellus. Nunc in augue nibh. ",8:"Vivamus porttitor rutrum mauris eget venenatis. Aenean sollicitudin, est et tincidunt placerat."}[""+(0===e?0:e%9)],ings:{0:["jin","abc","xyz","qwe","ghj"],1:["jin","asdfqwerqwe","qwer","qwerqwr qwerq","qwerqewrq qfasdfaf","qwer","xxbxvbxv"],2:["rum","asdf","qwerqwerqwerqew","qwerqwerqwerqew"],3:["milk","rum","qwer","adfdafs adfqww","eeeeewer"],4:["curacao","asdf","qwer"],5:["jin","abc","xyz","qwe"],6:["jin","abc","xyz","qwe","ghj","qwerqwerqwerqew"],7:["jin","abc","xyz","qwe","ghj","klm","opr"],8:["vodka","asdf","qwer"],9:["tonic","asdf","qwer"]}[""+(0===e?0:e%9)],mainIngs:{0:["jin","abc","xyz","qwe","ghj"],1:["jin","asdfqwerqwe","qwer","qwerqwr qwerq","qwerqewrq qfasdfaf","qwer","xxbxvbxv"],2:["rum","asdf","qwerqwerqwerqew","qwerqwerqwerqew"],3:["milk","rum","qwer","adfdafs adfqww","eeeeewer"],4:["curacao","asdf","qwer"],5:["jin","abc","xyz","qwe"],6:["jin","abc","xyz","qwe","ghj","qwerqwerqwerqew"],7:["jin","abc","xyz","qwe","ghj","klm","opr"],8:["vodka","asdf","qwer"],9:["tonic","asdf","qwer"]}[""+(0===e?0:e%9)].slice(0,3),icon:"icon.png",usable:!0,nameAndIngsStr:""}}));var yn=Object(c.a)({},ve),Nn=yn.log,An=yn.err;var Cn=Object(d.c)((function(e){return{appMode:e.app.mode,drinksData:{drinks:jn,ings:_n}}}),(function(e){return{setModeDashboard:function(n){"APP_MODE_DASHBOARD"===n&&e(E("APP_MODE_DASHBOARD_FULL_SCREEN")),"APP_MODE_DASHBOARD_FULL_SCREEN"===n&&e(E("APP_MODE_DASHBOARD"))},setMockDrinksData:function(n){e(D(n))},clearLogs:ve.clear,closeDashboard:function(){return e(E("APP_MODE_NORMAL"))},kioskOn:function(){return ne.exec("dispatch","kioskOn").then(Nn).catch(An)},kioskOff:function(){return ne.exec("dispatch","kioskOff").then(Nn).catch(An)},getUsbPluginLogs:function(){return ne.exec("dispatch","getLogs").then(Nn).catch(An)},clearUsbPluginLogs:function(){return ne.exec("dispatch","clearLogs").then(Nn).catch(An)},getUsbDeviceInfo:function(){return ne.exec("dispatch","getUsbDeviceInfo").then(Nn).catch(An)},getUsbDeviceConfig:function(){return ne.exec("dispatch","getUsbDeviceConfig").then(Nn).catch(An)}}}))((function(e){var n=e.appMode,t=e.setModeDashboard,a=e.kioskOn,r=e.kioskOff,i=e.drinksData,c=e.setMockDrinksData,l=e.clearLogs,u=e.closeDashboard,d=e.getUsbPluginLogs,m=e.clearUsbPluginLogs,f=e.getUsbDeviceInfo;return e.getUsbDeviceConfig,Object(s.useEffect)((function(){ve.init("dashboard-console"),Nn("Dashboard.jsx:: dashboard-console: connected")}),[]),o.a.createElement("div",{className:"dashboard"},o.a.createElement("div",null,o.a.createElement("button",{className:"dashboard-button",onClick:function(){return u()}},"-X-"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return a()}},"kiosk on"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return r()}},"kiosk off"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return t(n)}},"toggle fullscreen"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return c(i)}},"load mock data"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return l()}},"clear"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return m()}},"clear usb logs"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return d()}},"get usb logs"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return f()}},"device info")),o.a.createElement("div",{id:"dashboard-console",className:"dashboard-console"}))}));var Dn=Object(d.c)((function(e){var n="APP_DISPLAY_DRINKER"===e.app.display?wn:On;return{AppView:"APP_VIEW"===e.app.view?n:Ae,appMode:e.app.mode,appState:e.app.state}}),(function(e){return{usbInit:function(n){return e(ae(n))}}}))((function(e){var n=e.cordova,t=e.appState,a=e.AppView,r=e.appMode,i=e.usbInit;return Object(s.useEffect)((function(){i({cordova:n})}),[]),"APP_MODE_NORMAL"===r?o.a.createElement(a,null):"APP_MODE_DASHBOARD"===r?o.a.createElement("div",{id:"app"},o.a.createElement("div",{id:"app-view-wrapper"},t),o.a.createElement("div",{id:"app-dashboard-wrapper"},o.a.createElement(Cn,null))):"APP_MODE_DASHBOARD_FULL_SCREEN"===r?o.a.createElement(Cn,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"no proper mode"),o.a.createElement("div",null,t),o.a.createElement("div",null,r))})),In=Object(c.a)({},ve).log;({initialize:function(){var e=!!window.cordova;In("index.js:: cordovaIsPresent = "+e),e?document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1):u.a.render(o.a.createElement(d.a,{store:Ne},o.a.createElement(Dn,null)),document.getElementById("root"))},onDeviceReady:function(){In("index.js::deviceready"),u.a.render(o.a.createElement(d.a,{store:Ne},o.a.createElement(Dn,{cordova:window.cordova})),document.getElementById("root"),(function(){}))}}).initialize()}],[[20,1,2]]]);
//# sourceMappingURL=main.38d1a12f.chunk.js.map