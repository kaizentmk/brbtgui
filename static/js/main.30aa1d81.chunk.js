(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],[,,,,,,,,function(e,n,t){},,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/home.da15f9a2.svg"},,function(e,n,t){e.exports=t(62)},,,,,function(e,n,t){},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,r,i,c=t(4),s=t(0),o=t.n(s),l=t(7),u=t.n(l),d=(t(24),t(1)),m=t(18),f=t(2),g=t(5),k=Object(f.b)("SHOW_APP"),b=Object(f.b)("SHOW_LOADING"),E=Object(f.b)("SET_APP_DISPLAY"),v=Object(f.b)("SET_APP_MODE"),p=Object(f.b)("SET_APP_STATE"),w=Object(f.b)("SET_APP_VIEW"),O={display:"APP_DISPLAY_DRINKER",view:"APP_VIEW",state:"APP_STATE_STARTED",mode:"APP_MODE_DASHBOARD"},_=Object(f.c)(O,(a={},Object(g.a)(a,k,(function(e,n){e.view="APP_VIEW"})),Object(g.a)(a,b,(function(e,n){e.view="APP_VIEW_LOADING"})),Object(g.a)(a,E,(function(e,n){e.display=n.payload})),Object(g.a)(a,v,(function(e,n){e.mode=n.payload})),Object(g.a)(a,p,(function(e,n){e.state=n.payload})),Object(g.a)(a,w,(function(e,n){e.view=n.payload})),a)),h=Object(f.b)("SHOW_CATEGORIES"),y=Object(f.b)("CHOOSE_CATEGORY"),N={view:"CATEGORIES_VIEW",categories:[{id:"list",name:"lista drink\xf3w",aside:"wide"},{id:"prefs",name:"twoje preferencje",aside:"wide"},{id:"top",name:"TOP 10",aside:"narrow"},{id:"random",name:"niespodzianka",aside:"narrow"},{id:"custom",name:"twoja kompozycja",aside:"wide"},{id:"alco",name:"alkohol",aside:"narrow"}],category:{}},j=Object(f.c)(N,(r={},Object(g.a)(r,h,(function(e,n){e.view="CATEGORIES_VIEW",e.category={}})),Object(g.a)(r,y,(function(e,n){e.view="CATEGORY_VIEW",e.category=n.payload})),r)),D=t(3),C=t.n(D),I=Object(f.b)("DRINKS_SET_DATA"),S=Object(f.b)("RESET_DRINKS"),A=Object(f.b)("SET_DRINKS_LIST_VIEW"),P=Object(f.b)("SET_DRINK"),q=Object(f.b)("SET_RANDOM_DRINK"),T=Object(f.b)("SET_TOP_DRINKS"),R=Object(f.b)("SET_DRINKS_PREFS_VIEW"),x=Object(f.b)("FILTER_DRINKS"),L=Object(f.b)("SET_DRINK_NR"),W=Object(f.b)("FIND_DRINK_BY_NR"),B=(Object(f.b)("INGS_SET"),Object(f.b)("INGS_PREFS_TOGGLE_WANT")),U=Object(f.b)("INGS_PREFS_TOGGLE_NOT_WANT"),G=Object(f.b)("INGS_PREFS_RESET"),V=Object(f.b)("INGS_CUSTOM_ADD"),M=Object(f.b)("INGS_CUSTOM_REM"),F=Object(f.b)("INGS_CUSTOM_IDX"),z=Object(f.b)("INGS_CUSTOM_RESET");Object(f.b)("INGS_TOGGLE_USABLE"),Object(f.b)("INGS_TOGGLE_NOT_USABLE");function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(D.map)(Object(D.filter)(e,["usable",n]),"id")}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(D.map)(Object(D.filter)(e,["wanted",!0]),"id")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(D.map)(Object(D.filter)(e,["notWanted",!0]),"id")}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=!!Object(D.intersection)(e.ings,n).length,i=!t.length||!!Object(D.intersection)(e.ings,t).length,s=!Object(D.intersection)(e.ings,a).length;return Object(c.a)(Object(c.a)({},e),{usable:r&&i&&s})}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=H(n),a=K(n),r=Y(n);return e.map((function(e){return J(e,t,a,r)})).filter((function(e){return e.usable}))}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(c.a)(Object(c.a)({},e),{},{nameAndIngsStr:e.name.toLowerCase()+" "+e.ings.join(" ").toLowerCase()})}var Q={origDrinks:[],drinks:[],drink:{},origIngs:{},ings:{},drinksList:{view:"drinks_list_view_list",nameOrIng:"",nr:""},drinksPrefs:{view:"Ings",count:0},drinkCustom:{}},$=Object(f.c)(Q,(i={},Object(g.a)(i,I,(function(e,n){!function(e){Object(D.forEach)(Q,(function(n,t){return e[t]=n}))}(e),e.origDrinks=n.payload.drinks,e.origIngs=n.payload.ings,e.ings=n.payload.ings,e.drinksList={view:"drinks_list_view_list",nameOrIng:"",nr:""},e.drinks=Z(e.origDrinks.map(X),e.ings);e.drinkCustom={ings:[],max:200,total:0,ingsCounts:{},left:200,ingsOrder:[]}})),Object(g.a)(i,A,(function(e,n){e.drinksList.view=n.payload})),Object(g.a)(i,P,(function(e,n){e.drink=n.payload})),Object(g.a)(i,q,(function(e,n){e.drink=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(D.random)(e.length-1);return e[n]}(e.drinks)})),Object(g.a)(i,T,(function(e,n){e.drinks=Object(D.shuffle)(e.origDrinks.map(X)).slice(0,10)})),Object(g.a)(i,S,(function(e,n){e.drinks=Z(e.origDrinks.map(X),e.ings),e.drink={},e.ings=e.origIngs,e.drinksList={view:"drinks_list_view_list",nameOrIng:"",nr:""},e.drinksPrefs.view="Ings"})),Object(g.a)(i,L,(function(e,n){var t=n.payload;(0===t.length||t.length<=3)&&(e.drinksList.nr=t),0===t.length||t.length<=3?e.drinks=e.origDrinks.map(X).filter((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.nr.indexOf(n)>-1}(e,t)})):e.drinks=e.origDrinks})),Object(g.a)(i,W,(function(e,n){var t=n.payload||e.drinksList.nr;(0===t.length||t.length<=3)&&(e.drinksList.nr=t),0===t.length||t.length<=3?e.drinks=e.origDrinks.map(X).filter((function(e){return e.nr===t})):e.drinks=e.origDrinks})),Object(g.a)(i,x,(function(e,n){var t=n.payload;e.drinksList.nameOrIng=t,0===t.length||t.length>=3?e.drinks=e.origDrinks.map(X).filter((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=n.toLowerCase().match(/\S+/g)||[];return!t.length||t.filter((function(n){return e.nameAndIngsStr.indexOf(n)>-1})).length===t.length}(e,t)})):e.drinks=e.origDrinks})),Object(g.a)(i,R,(function(e,n){e.drinksPrefs.view=n.payload})),Object(g.a)(i,G,(function(e,n){Object.keys(e.ings).forEach((function(n){var t=e.ings[n];e.ings[n]=Object(c.a)(Object(c.a)({},t),{wanted:!1,notWanted:!1})})),e.drinks=Z(e.origDrinks.map(X),e.ings),e.drinksPrefs.count=0})),Object(g.a)(i,B,(function(e,n){var t=n.payload.id,a=e.ings[t].wanted;e.ings[t].wanted=!a,e.ings[t].notWanted=!1,e.drinks=Z(e.origDrinks.map(X),e.ings),e.drinksPrefs.count=Object(D.toArray)(e.ings).filter((function(e){return e.wanted||e.notWanted})).length})),Object(g.a)(i,U,(function(e,n){var t=n.payload.id,a=e.ings[t].notWanted;e.ings[t].wanted=!1,e.ings[t].notWanted=!a,e.drinks=Z(e.origDrinks.map(X),e.ings),e.drinksPrefs.count=Object(D.toArray)(e.ings).filter((function(e){return e.wanted||e.notWanted})).length})),Object(g.a)(i,V,(function(e,n){var t=n.payload,a=Object(c.a)({},e.drinkCustom),r=a.ings,i=a.max,s=a.total,o=a.ingsOrder,l=s+t.portion;l<=i&&(e.drinkCustom.ings.push(t),e.drinkCustom.total=l,e.drinkCustom.ingsCounts=Object(D.countBy)(r,(function(e){return e.id})),e.drinkCustom.left=i-l,o[o.length-1]!==t.id&&e.drinkCustom.ingsOrder.push(t.id))})),Object(g.a)(i,z,(function(e,n){e.drinkCustom.ings=[],e.drinkCustom.total=0,e.drinkCustom.ingsCounts={},e.drinkCustom.left=e.drinkCustom.max,e.drinkCustom.ingsOrder=[]})),i)),ee=Object(f.c)({dataFromUsb:[],dataToUsb:[]},{});var ne=function(){var e,n={},t={},a=function(e){Object.values(n).forEach((function(n){return n(e)}))},r=function(e){Object.values(t).forEach((function(n){return n(e)}))};return{addOnReadSucClbk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!Object(D.isFunction)(t))throw new Error("Not a function: "+e);n[e]=t},addOnReadErrClbk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;if(!Object(D.isFunction)(n))throw new Error("Not a function: "+e);t[e]=n},connectGui:function(n,t){(e=n).connectGui(t,a,r)},connectDevice:function(n){e.connectDevice(n,a,r)},exec:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(a,r){t.length?e[n](t,a,r):e[n](a,r)}))}}}(),te=Object(f.b)("USB_MSG_FROM_DEVICE"),ae=Object(f.b)("USB_INIT"),re=Object(f.b)("USB_GUI_CONNECT"),ie=Object(f.b)("USB_DEVICE_CONNECT"),ce=(Object(f.b)("USB_WRITE"),Object(f.b)("USB_DISPATCH"),function(){}),se={connectGui:function(e,n,t){setTimeout((function(){n('{"type": "gui", "data":"connected"}'),ce=n,t}),C.a.random(1e3,3e3))},connectDevice:function(e,n,t){setTimeout((function(){ce('{"type": "device.connected", "data":"connected"}')}),C.a.random(3e3,5e3))},write:function(e,n,t){t(e)},dispatch:function(e,n,t){t(e)}},oe=window.JSON;var le,ue={tojson:(le=oe).stringify,fromjson:le.parse},de=window.console,me=null,fe=0,ge=[];function ke(e){fe++,me.innerText=+fe+".\t"+e+"\r\n\r\n"+me.innerText}var be=function(e){return{init:function(e){me=document.getElementById(e),fe=-1,ke("console OK"),ge.forEach(ke)},log:function(n){e.log(n),ge.push(n),me&&ke(n)},err:function(n){e.error(n);var t="_ERR_: "+n;ge.push(t),me&&ke(t)},clear:function(){me&&(me.innerText="",fe=0,ge=[])}}}(de),Ee=Object(c.a)({},ue).fromjson,ve=Object(c.a)({},be).err,pe=function(e){return function(n){return function(t){if(ae.type===t.type){e.dispatch(p("APP_STATE_USB_INITIALIZING"));try{ne.addOnReadSucClbk("action",(function(n){return e.dispatch(te(n))})),ne.addOnReadErrClbk("action",(function(n){return e.dispatch(te(n))})),e.dispatch(re(t.payload))}catch(s){ve(s)}}if(re.type===t.type){e.dispatch(p("APP_STATE_USB_GUI_CONNECTING"));try{var a=t.payload.params||{},r=t.payload.cordova;r?ne.connectGui(r.plugins.tmkusb,a):ne.connectGui(se,a)}catch(s){ve(s)}}if(ie.type===t.type){e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTING"));var i=t.payload||{};ne.connectDevice(i)}if(te.type===t.type){var c=Ee(t.payload||"{}");"gui"===c.type&&"connected"===c.data&&(e.dispatch(p("APP_STATE_USB_GUI_CONNECTED")),e.dispatch(ie())),"device.connecting"===c.type&&"connecting"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTING")),"device.connected"===c.type&&"connected"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTED")),"device.error"===c.type&&"error"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_ERROR")),"device.detached"===c.type&&"detached"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_DETACHED"))}n(t)}}},we=Object(c.a)({},be),Oe=we.log,_e=we.err,he=function(e){return function(e){return function(n){if(n.type===te.type&&n.payload)try{var t=ue.fromjson(n.payload);Oe("_:action = "+n.type+"\r\n"+t.time+" "+t.type+":\r\n"+t.data.replace(/,/g,"\r\n"))}catch(a){_e(a),_e("::action = "+n.type+" \r\n action.payload = "+n.payload)}else Oe("log::action = "+n.type+" \r\n"+ue.tojson(n.payload));e(n)}}},ye=function(e){return function(n){return function(t){t.type===y.type&&("random"===t.payload.id&&e.dispatch(q()),"top"===t.payload.id&&e.dispatch(T())),t.type===b.type&&setTimeout((function(){return e.dispatch(k())}),Object(D.random)(1e3,3e3)),n(t)}}},Ne=Object(f.a)({reducer:{app:_,categories:j,drinks:$,usb:ee},middleware:[he,pe,ye].concat(Object(m.a)(Object(f.d)()))});window.store=Ne;var je=Ne;t(30),t(31),t(32),t(33);var De=Object(d.c)((function(e){return{view:e.app.view}}))((function(e){var n="APP_VIEW_LOADING"===e.view?"intro.gif?a="+Math.random():"";return o.a.createElement("img",{id:"app-loading",className:"center",src:n,alt:"loading"})}));t(34),t(35);var Ce=function(e){var n="cat-"+e.category.id;return o.a.createElement("div",{className:"category-icon "+n},o.a.createElement("svg",{className:"category-icon "+n,viewBox:"0 0 100 100"},o.a.createElement("circle",{className:"category-icon "+n,cx:"50",cy:"50",r:"50"}),o.a.createElement("image",{href:"categories/"+n+".svg",className:"category-icon "+n})))};t(36);var Ie=function(e){var n=e.category,t="cat-"+n.id;return o.a.createElement("h2",{className:"category-name "+t},o.a.createElement("span",{className:"category-name "+t},n.name))};var Se=Object(d.c)((function(e){return{categories:e.categories.categories,drinksPresent:e.drinks.drinks.length}}),(function(e){return{chooseCategory:function(n){return e(y(n))}}}))((function(e){var n=e.categories,t=e.drinksPresent,a=e.chooseCategory,r=n.map((function(e){return o.a.createElement("li",{key:e.id,className:"categories",onClick:function(){return t?a(e):null}},o.a.createElement(Ce,{category:e}),o.a.createElement(Ie,{category:e}))})),i=t?"":"categories-inactive";return o.a.createElement("ul",{className:"categories "+i},r)})),Ae=(t(37),t(8),t(16)),Pe=t.n(Ae),qe=t(17),Te=t.n(qe);t(39);var Re=function(e){var n=e.action;return o.a.createElement("button",{className:"cats-home-btn",onClick:function(){return n()}},o.a.createElement(Pe.a,{id:"home-icon",option:{file:Te.a,animTimingFunction:"EASE",type:"oneByOne",onReady:console.log},style:{height:"100%",width:"auto"},callback:console.log}))};var xe=function(e){var n=e.category,t=e.cssClassSuffix,a=e.children,r=e.showCategories,i="cat-aside-"+t;return o.a.createElement("aside",{className:i},o.a.createElement(Ce,{category:n}),o.a.createElement(Ie,{category:n}),a,o.a.createElement("nav",{className:i},o.a.createElement(Re,{action:r})))};t(40);var Le=function(e){var n=e.drinks;return o.a.createElement("div",{className:"drinks-count"},o.a.createElement("h3",{className:"drinks-count"},"Liczba drink\xf3w:"),o.a.createElement("p",{className:"drinks-count"},n.length))};var We=Object(d.c)((function(e){return{view:e.drinks.drinksList.view}}),(function(e){return{setDrinksListView:function(n){"drinks_list_view_list"===n&&e(W(0)),e(A(n))}}}))((function(e){var n=e.view,t=e.setDrinksListView;return"drinks_list_view_list"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_find_by_nr")},className:"drinks-find-by-nr"},"Podaj nr drinka"):"drinks_list_view_find_by_nr"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_list")},className:"drinks-find-by-nr"},"Wr\xf3\u0107 do pe\u0142nej listy"):""}));var Be=Object(d.c)((function(e){return{view:e.drinks.drinksList.view}}),(function(e){return{setDrinksListView:function(n){"drinks_list_view_list"===n&&e(x("")),e(A(n))}}}))((function(e){var n=e.view,t=e.setDrinksListView;return"drinks_list_view_list"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_filter")},className:"drinks-filter"},"Wyszukaj po nazwie lub sk\u0142adniku"):"drinks_list_view_filter"===n?o.a.createElement("button",{onClick:function(){return t("drinks_list_view_list")},className:"drinks-filter"},"Wr\xf3\u0107 do pe\u0142nej listy"):""}));t(41);var Ue=Object(d.c)((function(e){return{drinks:e.drinks.drinks}}))((function(e){var n=e.drinks;return o.a.createElement("div",{className:"cat-aside cat-aside-list"},o.a.createElement(Le,{drinks:n}),o.a.createElement(We,null),o.a.createElement(Be,null))}));t(42);var Ge=Object(d.c)((function(e){var n=e.drinks.drinks,t=e.drinks.drinksPrefs,a=t.view,r=t.count;return{isShowingDrinksAllowed:n.length&&e.drinks.origDrinks.length!==n.length,drinks:n,view:a,count:r}}),(function(e){return{ingsPrefsReset:function(){return e(G())},setDrinksPrefsIngsView:function(){return e(R("Ings"))},setDrinksPrefsListView:function(){return e(R("DrinkList"))}}}))((function(e){var n=e.view,t=e.count,a=e.drinks,r=e.setDrinksPrefsIngsView,i=e.setDrinksPrefsListView,c=e.ingsPrefsReset,s=e.isShowingDrinksAllowed,l="Ings"===n?o.a.createElement("button",{className:"cat-aside cat-aside-prefs",disabled:!s,onClick:function(){return!!s&&i()}},"POKA\u017b"):o.a.createElement("button",{className:"cat-aside-prefs",onClick:function(){return r()}},"WR\xd3\u0106 DO PREFERENCJI"),u="Ings"===n?o.a.createElement("button",{className:"cat-aside cat-aside-prefs",disabled:!t,onClick:function(){return c()}},"RESETUJ"):"";return o.a.createElement("div",{className:"cat-aside cat-aside-prefs"},o.a.createElement(Le,{drinks:a}),l,u)}));t(43);var Ve=Object(d.c)((function(e){var n=Object(c.a)({},e.drinks.drinkCustom),t=n.max,a=n.total,r=n.ingsOrder;return{ings:e.drinks.ings,max:t,total:a,ingsOrder:r}}))((function(e){var n=e.ings,t=e.max,a=e.total,r=e.ingsOrder,i=a/t,c=i?1.5-Math.sqrt(i)/2:1,s=(10+75*i)*c,l=r.map((function(e){return e}));return l.reverse(),o.a.createElement("div",{className:"drink-custom-glass"},o.a.createElement("div",{style:{height:s?s+"%":s},className:"drink-custom-glass-level"}),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass1",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass1"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass2",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass2"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass3",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass3"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass-bg",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass-bg"})),o.a.createElement("ul",{style:{height:s?s+"%":s},className:"drink-custom-glass-level"},l.map((function(e,t,a){return o.a.createElement("li",{key:"d-c-g-"+e,className:"drink-custom-glass-level",style:{fontSize:50+(a.length-t)*i*15+"%"}},n[e].name)}))))}));t(44);var Me=Object(d.c)((function(e){return{ingsOrder:Object(c.a)({},e.drinks.drinkCustom).ingsOrder}}),(function(e){return{ingsReset:function(){return e(z())}}}))((function(e){var n=e.ingsReset;return o.a.createElement("div",{className:"cat-aside cat-aside-custom"},o.a.createElement(Ve,null),o.a.createElement("button",{onClick:function(){return n()},className:"drink-custom-glass"},"Resetuj"),o.a.createElement("button",{className:"drink-custom-glass"},"Zr\xf3b drinka"))}));t(45);var Fe=function(){return o.a.createElement("div",{className:"tmk"},o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_1"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_2"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_3"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_4"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_5"})))),o.a.createElement("div",null,o.a.createElement("svg",{className:"all ",viewBox:"0 0 100 150"},o.a.createElement("circle",{className:"all-circle ",cx:"50",cy:"50",r:"50"}),o.a.createElement("image",{href:"drinks/kd1_calosc.svg",className:"all-img"}))))};var ze=function(){return o.a.createElement("div",{className:"drink-custom"},"WYBIERZ SK\u0141ADNIKI DO SWOJEGO DRINKA")};t(46);var He=Object(d.c)((function(e){var n=Object(c.a)({},e.drinks.drinkCustom);return{ingsCounts:n.ingsCounts,left:n.left,orders:n.ingsOrder.reduce((function(e,n,t){var a=e[n]||[];return a.push(t+1),e[n]=a,e}),{})}}),(function(e){return{addIng:function(n,t){Object(d.b)((function(){return Object(D.times)(t,(function(){return e(V(n))}))}))},remIng:function(n){return e(M(n))},remIngByIdx:function(n){return e(F(n))}}}))((function(e){var n=e.ing,t=e.left,a=e.addIng,r=e.ingsCounts,i=(e.orders,r[n.id]||0),c=n.portion<=t;return o.a.createElement("div",{onClick:function(){return!!c&&a(n,1)},className:"ing-custom"},o.a.createElement("p",{className:"ing-custom"},n.name+" "+i),[0,1,2,3].map((function(e){var a=e<i,r=!a&&(e+1-i)*n.portion<=t,c=a?" ing-custom-selected":r?"":" ing-custom-hidden";return o.a.createElement("span",{key:n.id+e,className:"ing-custom"+c},"\xa0")})))}));t(47);var Ke=Object(d.c)(null,(function(e){return{want:function(n){return e(B(n))},notWant:function(n,t){e(U(t)),n.stopPropagation()}}}))((function(e){var n=e.ing,t=e.want,a=e.notWant,r=(n.usable&&n.wanted?" ing-prefs-wanted":"")+(n.usable&&n.notWanted?" ing-prefs-wanted-not":"")+(n.usable?"":" ing-prefs-inactive"),i=n.usable?o.a.createElement("button",{className:"ing-prefs ing-prefs-want",onClick:function(){return n.usable&&t(n)}},o.a.createElement("img",{src:"ings/ings-prefs-want.svg",alt:"want",className:"ing-prefs ing-prefs-want"})):"",c=n.usable?o.a.createElement("button",{className:"ing-prefs ing-prefs-want-not",onClick:function(e){return n.usable&&a(e,n)}},o.a.createElement("img",{src:"ings/ings-prefs-want-not.svg",alt:"want-not",className:"ing-prefs ing-prefs-want-not"})):"";return o.a.createElement(o.a.Fragment,null,c,o.a.createElement("span",{onClick:function(){return n.usable&&t(n)},className:"ing-prefs"+r},n.name),i)})),Ye=(t(48),{IngsCustom_:He,IngsPrefs_:Ke});var Je=Object(d.c)((function(e){var n=e.categories.category,t="Ings"+n.id[0].toUpperCase()+n.id.slice(1)+"_";return{ings:Object(D.sortBy)(Object(D.toArray)(e.drinks.ings),"name"),IngsView:Ye[t]}}),(function(e){return{setDrink:function(n){return e(P(n))}}}))((function(e){var n=e.ings,t=e.IngsView;return o.a.createElement("ul",{className:"ings "},n.filter((function(e){return e.usable})).map((function(e,n,a){return o.a.createElement("li",{key:e.id,className:"ings "},o.a.createElement(t,{key:e.id,ing:e}))})))}));t(49);var Ze=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ze,null),o.a.createElement(Je,null))};t(50),t(51);var Xe=function(e){var n=e.drink;return o.a.createElement("h2",{className:"drink-name"},o.a.createElement("span",{className:"drink-name center-top-grh"},n.name))};t(52);var Qe=function(e){var n=e.drink,t=e.ings;return o.a.createElement("ul",{className:"drink-ings"},(t||[]).map((function(e,t,a){var r=o.a.createElement("li",{key:n.id+"-ings-sep"+t,className:"drink-ings drink-ings-sep"},"\xa0");return o.a.createElement(o.a.Fragment,{key:n.id+"-ings-fragment"+t},o.a.createElement("li",{key:n.id+"-ings"+t,className:"drink-ings"},e),r)})))};var $e=function(e){var n=e.drink;return o.a.createElement("div",{className:"drinks-list-item"},o.a.createElement(Xe,{drink:n}),o.a.createElement(Qe,{drink:n,ings:n.mainIngs}))};t(53),t(54);var en=function(e){var n=e.drink;return o.a.createElement("div",{className:"drink-icon "},o.a.createElement("img",{className:"drink-icon center",src:n.icon,alt:n.name}))};var nn=Object(d.c)(null,(function(e){return{chooseDrink:function(n){Object(d.b)((function(){e(S()),e(h()),e(b())}))}}}))((function(e){var n=e.drink,t=e.chooseDrink;return o.a.createElement("div",{className:"drink"},o.a.createElement(Xe,{drink:n}),o.a.createElement(en,{drink:n}),o.a.createElement(Qe,{drink:n,ings:n.ings}),o.a.createElement("nav",{className:"drink"},o.a.createElement("button",{className:"drink",disabled:!n.ings,onClick:function(){return t(n)}},"ZR\xd3B DRINKA")))}));t(55);var tn=Object(d.c)((function(e){var n=e.drinks;return{drink:n.drink,drinks:n.drinks}}),(function(e){return{setDrink:function(n){return e(P(n))}}}))((function(e){var n=e.cssClass,t=void 0===n?"":n,a=e.drink,r=e.drinks,i=e.setDrink;return r.length?o.a.createElement("ul",{className:"drinks-list "+t},r.filter((function(e){return e.usable})).map((function(e,n){var t=e.id===a.id||1===r.length,c="drinks-list "+(t?"drinks-list-selected":""),s=t?{id:-1}:e,l=o.a.createRef();return o.a.createElement("li",{key:e.id,ref:l,className:c,onClick:function(){l.current.scrollIntoView({behavior:"smooth",block:"center"}),i(s)}},o.a.createElement("span",{className:"drinks-list-nr"},e.nr),t?o.a.createElement(nn,{drink:e,key:e.id+"d"}):o.a.createElement($e,{key:e.id+"dli",drink:e}))}))):o.a.createElement("ul",{className:"drinks-list "+t},o.a.createElement("li",{className:"drinks-list-empty"},"brak drink\xf3w do wy\u015bwietlenia"))}));t(56);var an=[[1,2,3],[4,5,6],[7,8,9]],rn=[-1,0];var cn=Object(d.c)((function(e){return{nr:e.drinks.drinksList.nr,drinksLen:e.drinks.drinks.length}}),(function(e){return{setDrinkNr:function(n){return e(L(n))},findDrinkByNr:function(n){return e(W(n))}}}))((function(e){var n=e.nr,t=e.drinksLen,a=e.setDrinkNr,r=e.findDrinkByNr,i=n.length?n:"numer drinka",c=n.length?" ":" digipad-txt-placeholder",s=!!n.length,l=s?"":" keyboard-btn-inactive",u=s&&t>1?"":" keyboard-btn-inactive";return o.a.createElement("div",{className:"digipad"},o.a.createElement("div",{className:"digipad-row digipad-row-txt"},o.a.createElement("span",{onClick:function(){return!!s&&a("")},key:"kbrdcls",className:"keyboard-btn"+l},"czy\u015b\u0107"),o.a.createElement("span",{className:"digipad-txt"+c},i),o.a.createElement("span",{onClick:function(){return!!s&&a(n.slice(0,-1))},className:"keyboard-btn"+l},"\u232b")),an.map((function(e){return o.a.createElement("div",{className:"digipad-row"},e.map((function(e){return o.a.createElement("span",{onClick:function(){return a(n+e)},key:"kbrd"+e,className:"keyboard-btn"},e)})))})),o.a.createElement("div",{className:"digipad-row digipad-row-btm"},rn.map((function(e){return o.a.createElement("span",{onClick:function(){return a(n+e)},key:"kbrd"+e,className:"keyboard-btn"},e)})),o.a.createElement("span",{className:"keyboard-btn"+u,onClick:function(){return!!(s&&t>1)&&r(n)}},"poka\u017c")))}));t(57);var sn=[["\u0105","\u0107","\u0119","\u0142","\u0144","\xf3","\u015b","\u017a","\u017c"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]];var on=Object(d.c)((function(e){return{nameOrIng:e.drinks.drinksList.nameOrIng}}),(function(e){return{filterDrinks:function(n){return e(x(n))}}}))((function(e){var n=e.nameOrIng,t=e.filterDrinks,a=n.length?n:"min 3 litery",r=n.length?" ":" keyboard-txt-placeholder",i=!!n.length?"":" keyboard-btn-inactive";return o.a.createElement("div",{className:"keyboard"},o.a.createElement("div",{className:"keyboard-row keyboard-row-txt"},o.a.createElement("span",{onClick:function(){return t("")},key:"kbrdcls",className:"keyboard-btn"+i},"czy\u015b\u0107"),o.a.createElement("span",{className:"keyboard-txt"+r},a),o.a.createElement("span",{onClick:function(){return t(n.slice(0,-1))},className:"keyboard-btn"+i},"\u232b")),sn.map((function(e){return o.a.createElement("div",{className:"keyboard-row"},e.map((function(e){return o.a.createElement("span",{onClick:function(){return t(n+e)},key:"kbrd"+e,className:"keyboard-btn"},e)})))})),o.a.createElement("div",{className:"keyboard-row keyboard-row-btm"},o.a.createElement("span",{onClick:function(){return t(n+" ")},key:"kbrd_0_",className:"keyboard-btn"},"\xa0")))}));t(58);var ln=Object(d.c)((function(e){return{view:e.drinks.drinksList.view}}))((function(e){var n=e.view;return"drinks_list_view_list"===n?o.a.createElement(tn,null):"drinks_list_view_filter"===n?o.a.createElement(o.a.Fragment,null,o.a.createElement(tn,{cssClass:"drinks-list-compact"}),o.a.createElement(on,null)):"drinks_list_view_find_by_nr"===n?o.a.createElement(o.a.Fragment,null,o.a.createElement(tn,{cssClass:"drinks-list-compact"}),o.a.createElement(cn,null)):"NO PROPER VIEW"}));var un=function(){return o.a.createElement("div",{className:"drink-prefs"},"WYBIERZ CO LUBISZ A CO NIE")};t(59);var dn=Object(d.c)((function(e){return{view:e.drinks.drinksPrefs.view}}))((function(e){var n=e.view;return"Ings"===n?o.a.createElement(o.a.Fragment,null,o.a.createElement(un,null),o.a.createElement(Je,null)):"DrinkList"===n?o.a.createElement(tn,null):"NO DRINKS PREFS VIEW"}));t(60);var mn={DrinksAlco:Fe,DrinksCustom:Ze,DrinksList:ln,DrinksPrefs:dn,DrinksRandom:Object(d.c)((function(e){return{drink:e.drinks.drink}}),(function(e){return{setRandomDrink:function(){return e(q())}}}))((function(e){var n=e.drink,t=e.setRandomDrink;return o.a.createElement(o.a.Fragment,null,o.a.createElement(nn,{drink:n}),o.a.createElement("div",{className:"drinks-random"},o.a.createElement("button",{onClick:function(){return t()},className:"drinks-random"},o.a.createElement("img",{src:"categories/cat-random.svg",alt:"",class:"drinks-random"}),"Losuj jeszcze raz",o.a.createElement("img",{src:"categories/cat-random.svg",alt:"",class:"drinks-random"}))))})),DrinksTop:function(e){return o.a.createElement(tn,e)}},fn={CategoryAsideList:Ue,CategoryAsidePrefs:Ge,CategoryAsideCustom:Me};var gn={CATEGORY_VIEW:Object(d.c)((function(e){var n=e.categories.category,t=n.id[0].toUpperCase()+n.id.slice(1);return{cat:n,DrinksView:mn["Drinks"+t],AsideContent:fn["CategoryAside"+t]||""}}),(function(e){return{showCategories:function(){Object(d.b)((function(){e(S()),e(h())}))}}}))((function(e){var n=e.cat,t=e.showCategories,a=e.DrinksView,r=e.AsideContent,i="category-"+n.id+" category-aside-"+n.aside,c=r?o.a.createElement(r,{category:n}):o.a.createElement("div",{className:"cat-aside-"+n.aside+"-spacer"},"\xa0");return o.a.createElement("div",{className:"category "+i},o.a.createElement(a,null),o.a.createElement(xe,{category:n,cssClassSuffix:n.aside,showCategories:t},c))})),CATEGORIES_VIEW:Se};var kn=Object(d.c)((function(e){return{View:gn[e.categories.view]}}))((function(e){var n=e.View;return o.a.createElement(n,null)}));var bn=function(){return o.a.createElement("div",null,"DrinkerAux")},En=(t(61),{vodka:{id:"vodka",name:"vodka",usable:!0,wanted:!1,notWanted:!1,portion:50},jin:{id:"jin",name:"jin",usable:!0,wanted:!1,notWanted:!1,portion:25},rum:{id:"rum",name:"rum",usable:!0,wanted:!1,notWanted:!1,portion:50},tequila:{id:"tequila",name:"tequila",usable:!0,wanted:!1,notWanted:!1,portion:25},gin:{id:"gin",name:"gin",usable:!0,wanted:!1,notWanted:!1,portion:50},whisky:{id:"whisky",name:"whisky",usable:!0,wanted:!1,notWanted:!1,portion:25},cola:{id:"cola",name:"cola",usable:!0,wanted:!1,notWanted:!1,portion:50},curacao:{id:"curacao",name:"curacao",usable:!0,wanted:!1,notWanted:!1,portion:25},tomato:{id:"tomato",name:"tomato",usable:!0,wanted:!1,notWanted:!1,portion:25},liqueur:{id:"liqueur",name:"liqueur",usable:!0,wanted:!1,notWanted:!1,portion:50},orange:{id:"orange",name:"orange",usable:!0,wanted:!1,notWanted:!1,portion:25},milk:{id:"milk",name:"milk",usable:!0,wanted:!1,notWanted:!1,portion:25}}),vn=Object(D.random)(17,17),pn=Object(D.times)(vn,(function(e){return{id:"drink-"+e,name:"drink "+e,nr:""+(e+1),desc:{0:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat pellentesque commodo. ",1:"Phasellus ornare eros lorem, quis venenatis ante sodales at. Nullam vehicula ut eros sit amet aliquet. ",2:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",3:"Duis suscipit nibh sapien, lobortis dictum turpis mollis nec. In hac habitasse platea dictumst.",4:"Praesent finibus, odio ac venenatis interdum, mauris erat rutrum neque, et viverra mauris nisl nec metus. ",5:"Maecenas ut tincidunt metus, in luctus neque. Ut vehicula turpis eu massa imperdiet tempus.",6:"Aliquam metus lorem, consectetur eu gravida ac, luctus id dolor. Ut sit amet quam quis dui vehicula cursus in ut turpis.",7:"Morbi id interdum tellus. Nunc in augue nibh. ",8:"Vivamus porttitor rutrum mauris eget venenatis. Aenean sollicitudin, est et tincidunt placerat."}[""+(0===e?0:e%9)],ings:{0:["jin","abc","xyz","qwe","ghj"],1:["jin","asdfqwerqwe","qwer","qwerqwr qwerq","qwerqewrq qfasdfaf","qwer","xxbxvbxv"],2:["rum","asdf","qwerqwerqwerqew","qwerqwerqwerqew"],3:["milk","rum","qwer","adfdafs adfqww","eeeeewer"],4:["curacao","asdf","qwer"],5:["jin","abc","xyz","qwe"],6:["jin","abc","xyz","qwe","ghj","qwerqwerqwerqew"],7:["jin","abc","xyz","qwe","ghj","klm","opr"],8:["vodka","asdf","qwer"],9:["tonic","asdf","qwer"]}[""+(0===e?0:e%9)],mainIngs:{0:["jin","abc","xyz","qwe","ghj"],1:["jin","asdfqwerqwe","qwer","qwerqwr qwerq","qwerqewrq qfasdfaf","qwer","xxbxvbxv"],2:["rum","asdf","qwerqwerqwerqew","qwerqwerqwerqew"],3:["milk","rum","qwer","adfdafs adfqww","eeeeewer"],4:["curacao","asdf","qwer"],5:["jin","abc","xyz","qwe"],6:["jin","abc","xyz","qwe","ghj","qwerqwerqwerqew"],7:["jin","abc","xyz","qwe","ghj","klm","opr"],8:["vodka","asdf","qwer"],9:["tonic","asdf","qwer"]}[""+(0===e?0:e%9)].slice(0,3),icon:"icon.png",usable:!0,nameAndIngsStr:""}}));var wn=Object(c.a)({},be),On=wn.log,_n=wn.err;var hn=Object(d.c)((function(e){return{appMode:e.app.mode,drinksData:{drinks:pn,ings:En}}}),(function(e){return{setModeDashboard:function(n){"APP_MODE_DASHBOARD"===n&&e(v("APP_MODE_DASHBOARD_FULL_SCREEN")),"APP_MODE_DASHBOARD_FULL_SCREEN"===n&&e(v("APP_MODE_DASHBOARD"))},setMockDrinksData:function(n){e(I(n))},clearLogs:be.clear,closeDashboard:function(){return e(v("APP_MODE_NORMAL"))},kioskOn:function(){return ne.exec("dispatch","kioskOn").then(On).catch(_n)},kioskOff:function(){return ne.exec("dispatch","kioskOff").then(On).catch(_n)},getUsbPluginLogs:function(){return ne.exec("dispatch","getLogs").then(On).catch(_n)},clearUsbPluginLogs:function(){return ne.exec("dispatch","clearLogs").then(On).catch(_n)},getUsbDeviceInfo:function(){return ne.exec("dispatch","getUsbDeviceInfo").then(On).catch(_n)},getUsbDeviceConfig:function(){return ne.exec("dispatch","getUsbDeviceConfig").then(On).catch(_n)}}}))((function(e){var n=e.appMode,t=e.setModeDashboard,a=e.kioskOn,r=e.kioskOff,i=e.drinksData,c=e.setMockDrinksData,l=e.clearLogs,u=e.closeDashboard,d=e.getUsbPluginLogs,m=e.clearUsbPluginLogs,f=e.getUsbDeviceInfo;return e.getUsbDeviceConfig,Object(s.useEffect)((function(){be.init("dashboard-console"),On("Dashboard.jsx:: dashboard-console: connected")}),[]),o.a.createElement("div",{className:"dashboard"},o.a.createElement("div",null,o.a.createElement("button",{className:"dashboard-button",onClick:function(){return u()}},"-X-"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return a()}},"kiosk on"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return r()}},"kiosk off"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return t(n)}},"toggle fullscreen"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return c(i)}},"load mock data"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return l()}},"clear"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return m()}},"clear usb logs"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return d()}},"get usb logs"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return f()}},"device info")),o.a.createElement("div",{id:"dashboard-console",className:"dashboard-console"}))}));var yn=Object(d.c)((function(e){var n="APP_DISPLAY_DRINKER"===e.app.display?kn:bn;return{AppView:"APP_VIEW"===e.app.view?n:De,appMode:e.app.mode,appState:e.app.state}}),(function(e){return{usbInit:function(n){return e(ae(n))}}}))((function(e){var n=e.cordova,t=e.appState,a=e.AppView,r=e.appMode,i=e.usbInit;return Object(s.useEffect)((function(){i({cordova:n})}),[]),"APP_MODE_NORMAL"===r?o.a.createElement(a,null):"APP_MODE_DASHBOARD"===r?o.a.createElement("div",{id:"app"},o.a.createElement("div",{id:"app-view-wrapper"},t),o.a.createElement("div",{id:"app-dashboard-wrapper"},o.a.createElement(hn,null))):"APP_MODE_DASHBOARD_FULL_SCREEN"===r?o.a.createElement(hn,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"no proper mode"),o.a.createElement("div",null,t),o.a.createElement("div",null,r))})),Nn=Object(c.a)({},be).log;({initialize:function(){var e=!!window.cordova;Nn("index.js:: cordovaIsPresent = "+e),e?document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1):u.a.render(o.a.createElement(d.a,{store:je},o.a.createElement(yn,null)),document.getElementById("root"))},onDeviceReady:function(){Nn("index.js::deviceready"),u.a.render(o.a.createElement(d.a,{store:je},o.a.createElement(yn,{cordova:window.cordova})),document.getElementById("root"),(function(){}))}}).initialize()}],[[19,1,2]]]);
//# sourceMappingURL=main.30aa1d81.chunk.js.map