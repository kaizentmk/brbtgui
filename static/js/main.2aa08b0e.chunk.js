(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],[,,,,,,,,function(e,n,t){},,,,,function(e,n,t){},,,,function(e,n,t){e.exports=t(54)},,,,,function(e,n,t){},,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,r,i,c=t(4),s=t(0),o=t.n(s),u=t(7),l=t.n(u),d=(t(22),t(2)),m=t(16),f=t(1),g=t(5),b=Object(f.b)("SHOW_APP"),E=Object(f.b)("SHOW_LOADING"),k=Object(f.b)("SET_APP_DISPLAY"),v=Object(f.b)("SET_APP_MODE"),p=Object(f.b)("SET_APP_STATE"),O=Object(f.b)("SET_APP_VIEW"),w={display:"APP_DISPLAY_DRINKER",view:"APP_VIEW",state:"APP_STATE_STARTED",mode:"APP_MODE_DASHBOARD"},h=Object(f.c)(w,(a={},Object(g.a)(a,b,(function(e,n){e.view="APP_VIEW"})),Object(g.a)(a,E,(function(e,n){e.view="APP_VIEW_LOADING"})),Object(g.a)(a,k,(function(e,n){e.display=n.payload})),Object(g.a)(a,v,(function(e,n){e.mode=n.payload})),Object(g.a)(a,p,(function(e,n){e.state=n.payload})),Object(g.a)(a,O,(function(e,n){e.view=n.payload})),a)),_=Object(f.b)("SHOW_CATEGORIES"),j=Object(f.b)("CHOOSE_CATEGORY"),N={view:"CATEGORIES_VIEW",categories:[{id:"list",name:"lista drink\xf3w",aside:"narrow"},{id:"prefs",name:"twoje preferencje",aside:"wide"},{id:"top",name:"TOP 10",aside:"narrow"},{id:"random",name:"niespodzianka",aside:"narrow"},{id:"custom",name:"twoja kompozycja",aside:"wide"},{id:"alco",name:"alkohol",aside:"narrow"}],category:{}},y=Object(f.c)(N,(r={},Object(g.a)(r,_,(function(e,n){e.view="CATEGORIES_VIEW",e.category={}})),Object(g.a)(r,j,(function(e,n){e.view="CATEGORY_VIEW",e.category=n.payload})),r)),D=t(3),C=t.n(D),I=Object(f.b)("DRINKS_SET_DATA"),A=Object(f.b)("RESET_DRINKS"),P=Object(f.b)("SHOW_DRINK"),S=(Object(f.b)("CHOOSE_DRINK"),Object(f.b)("SET_DRINKS_PREFS_VIEW")),T=(Object(f.b)("INGS_SET"),Object(f.b)("INGS_TOGGLE_WANT")),R=Object(f.b)("INGS_TOGGLE_NOT_WANT"),x=Object(f.b)("INGS_CUSTOM_ADD"),q=Object(f.b)("INGS_CUSTOM_REM"),W=Object(f.b)("INGS_CUSTOM_IDX"),U=Object(f.b)("INGS_CUSTOM_RESET");Object(f.b)("INGS_TOGGLE_USABLE"),Object(f.b)("INGS_TOGGLE_NOT_USABLE");function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Object(D.map)(Object(D.filter)(e,["usable",n]),"id")}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(D.map)(Object(D.filter)(e,["wanted",!0]),"id")}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(D.map)(Object(D.filter)(e,["notWanted",!0]),"id")}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=B(n);console.log("usableIngs = ",t);var a=G(n);console.log("wantedIngs = ",a);var r=L(n);return console.log("notWantedIngs = ",r),e.map((function(e){var n=!!Object(D.intersection)(e.ings,t).length,i=!a.length||!!Object(D.intersection)(e.ings,a).length,s=!Object(D.intersection)(e.ings,r).length;return Object(c.a)(Object(c.a)({},e),{usable:n&&i&&s})})).filter((function(e){return e.usable}))}var M={origDrinks:[],drinks:[],drink:{},origIngs:{},ings:{},drinksPrefs:{view:"Ings"},drinkCustom:{}},H=Object(f.c)(M,(i={},Object(g.a)(i,I,(function(e,n){!function(e){Object(D.forEach)(M,(function(n,t){return e[t]=n}))}(e),e.origDrinks=n.payload.drinks,e.origIngs=n.payload.ings,e.ings=n.payload.ings,e.drinks=V(e.origDrinks,e.ings);e.drinkCustom={ings:[],max:200,total:0,ingsCounts:{},left:200,ingsOrder:[]}})),Object(g.a)(i,P,(function(e,n){e.drink=n.payload})),Object(g.a)(i,A,(function(e,n){e.drinks=V(e.origDrinks,e.ings),e.drink={},e.ings=e.origIngs,e.drinksPrefs.view="Ings"})),Object(g.a)(i,T,(function(e,n){var t=n.payload.id,a=e.ings[t].wanted;e.ings[t].wanted=!a,e.ings[t].notWanted=!1,e.drinks=V(e.origDrinks,e.ings)})),Object(g.a)(i,R,(function(e,n){var t=n.payload.id,a=e.ings[t].notWanted;e.ings[t].wanted=!1,e.ings[t].notWanted=!a,e.drinks=V(e.origDrinks,e.ings)})),Object(g.a)(i,S,(function(e,n){e.drinksPrefs.view=n.payload})),Object(g.a)(i,x,(function(e,n){var t=n.payload,a=Object(c.a)({},e.drinkCustom),r=a.ings,i=a.max,s=a.total,o=a.ingsOrder,u=s+t.portion;u<=i&&(e.drinkCustom.ings.push(t),e.drinkCustom.total=u,e.drinkCustom.ingsCounts=Object(D.countBy)(r,(function(e){return e.id})),e.drinkCustom.left=i-u,o[o.length-1]!==t.id&&e.drinkCustom.ingsOrder.push(t.id))})),Object(g.a)(i,U,(function(e,n){e.drinkCustom.ings=[],e.drinkCustom.total=0,e.drinkCustom.ingsCounts={},e.drinkCustom.left=e.drinkCustom.max,e.drinkCustom.ingsOrder=[]})),i)),F=Object(f.c)({dataFromUsb:[],dataToUsb:[]},{});var K=function(){var e,n={},t={},a=function(e){Object.values(n).forEach((function(n){return n(e)}))},r=function(e){Object.values(t).forEach((function(n){return n(e)}))};return{addOnReadSucClbk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!Object(D.isFunction)(t))throw new Error("Not a function: "+e);n[e]=t},addOnReadErrClbk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;if(!Object(D.isFunction)(n))throw new Error("Not a function: "+e);t[e]=n},connectGui:function(n,t){(e=n).connectGui(t,a,r)},connectDevice:function(n){e.connectDevice(n,a,r)},exec:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(a,r){t.length?e[n](t,a,r):e[n](a,r)}))}}}(),z=Object(f.b)("USB_MSG_FROM_DEVICE"),Y=Object(f.b)("USB_INIT"),J=Object(f.b)("USB_GUI_CONNECT"),Z=Object(f.b)("USB_DEVICE_CONNECT"),X=(Object(f.b)("USB_WRITE"),Object(f.b)("USB_DISPATCH"),function(){}),Q={connectGui:function(e,n,t){setTimeout((function(){n('{"type": "gui", "data":"connected"}'),X=n,t}),C.a.random(1e3,3e3))},connectDevice:function(e,n,t){setTimeout((function(){X('{"type": "device.connected", "data":"connected"}')}),C.a.random(3e3,5e3))},write:function(e,n,t){t(e)},dispatch:function(e,n,t){t(e)}},$=window.JSON;var ee,ne={tojson:(ee=$).stringify,fromjson:ee.parse},te=window.console,ae=null,re=0,ie=[];function ce(e){re++,ae.innerText=+re+".\t"+e+"\r\n\r\n"+ae.innerText}var se=function(e){return{init:function(e){ae=document.getElementById(e),re=-1,ce("console OK"),ie.forEach(ce)},log:function(n){e.log(n),ie.push(n),ae&&ce(n)},err:function(n){e.error(n);var t="_ERR_: "+n;ie.push(t),ae&&ce(t)},clear:function(){ae&&(ae.innerText="",re=0,ie=[])}}}(te),oe=Object(c.a)({},ne).fromjson,ue=Object(c.a)({},se).err,le=function(e){return function(n){return function(t){if(Y.type===t.type){e.dispatch(p("APP_STATE_USB_INITIALIZING"));try{K.addOnReadSucClbk("action",(function(n){return e.dispatch(z(n))})),K.addOnReadErrClbk("action",(function(n){return e.dispatch(z(n))})),e.dispatch(J(t.payload))}catch(s){ue(s)}}if(J.type===t.type){e.dispatch(p("APP_STATE_USB_GUI_CONNECTING"));try{var a=t.payload.params||{},r=t.payload.cordova;r?K.connectGui(r.plugins.tmkusb,a):K.connectGui(Q,a)}catch(s){ue(s)}}if(Z.type===t.type){e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTING"));var i=t.payload||{};K.connectDevice(i)}if(z.type===t.type){var c=oe(t.payload||"{}");"gui"===c.type&&"connected"===c.data&&(e.dispatch(p("APP_STATE_USB_GUI_CONNECTED")),e.dispatch(Z())),"device.connecting"===c.type&&"connecting"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTING")),"device.connected"===c.type&&"connected"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_CONNECTED")),"device.error"===c.type&&"error"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_ERROR")),"device.detached"===c.type&&"detached"===c.data&&e.dispatch(p("APP_STATE_USB_DEVICE_DETACHED"))}n(t)}}},de=Object(c.a)({},se),me=de.log,fe=de.err,ge=function(e){return function(e){return function(n){if(n.type===z.type&&n.payload)try{var t=ne.fromjson(n.payload);me("_:action = "+n.type+"\r\n"+t.time+" "+t.type+":\r\n"+t.data.replace(/,/g,"\r\n"))}catch(a){fe(a),fe("::action = "+n.type+" \r\n action.payload = "+n.payload)}else me("log::action = "+n.type+" \r\n"+ne.tojson(n.payload));e(n)}}},be=function(e){return function(n){return function(t){if(t.type===j.type&&"random"===t.payload.id){var a=e.getState().drinks;if(a.drinks.length){var r=Object(D.random)(a.drinks.length-1),i=a.drinks[r];Object(d.b)((function(){e.dispatch(P(i))}))}}t.type===E.type&&setTimeout((function(){return e.dispatch(b())}),Object(D.random)(1e3,3e3)),n(t)}}},Ee=Object(f.a)({reducer:{app:h,categories:y,drinks:H,usb:F},middleware:[ge,le,be].concat(Object(m.a)(Object(f.d)()))});window.store=Ee;var ke=Ee;t(31),t(32),t(33),t(34);var ve=Object(d.c)((function(e){return{view:e.app.view}}))((function(e){var n="APP_VIEW_LOADING"===e.view?"intro.gif?a="+Math.random():"";return o.a.createElement("img",{id:"app-loading",className:"center",src:n,alt:"loading"})}));t(35),t(36);var pe=function(e){var n="cat-"+e.category.id;return o.a.createElement("div",{className:"category-icon "+n},o.a.createElement("svg",{className:"category-icon "+n,viewBox:"0 0 100 100"},o.a.createElement("circle",{className:"category-icon "+n,cx:"50",cy:"50",r:"50"}),o.a.createElement("image",{href:"categories/"+n+".svg",className:"category-icon "+n})))};t(37);var Oe=function(e){var n=e.category,t="cat-"+n.id;return o.a.createElement("h2",{className:"category-name "+t},n.name)};var we=Object(d.c)((function(e){return{categories:e.categories.categories,drinksPresent:e.drinks.drinks.length}}),(function(e){return{chooseCategory:function(n){return e(j(n))}}}))((function(e){var n=e.categories,t=e.drinksPresent,a=e.chooseCategory,r=n.map((function(e){return o.a.createElement("li",{key:e.id,className:"categories",onClick:function(){return t?a(e):null}},o.a.createElement(pe,{category:e}),o.a.createElement(Oe,{category:e}))})),i=t?"":"categories-inactive";return o.a.createElement("ul",{className:"categories "+i},r)}));t(38),t(8),t(39);var he=function(e){var n=e.action;return o.a.createElement("button",{className:"cats-home-btn",onClick:function(){return n()}},o.a.createElement("img",{className:"cats-home-btn ",src:"home.svg",alt:"home.svg"}))};var _e=function(e){var n=e.category,t=e.cssClassSuffix,a=e.children,r=e.showCategories,i="cat-aside-"+t;return o.a.createElement("aside",{className:i},o.a.createElement(pe,{category:n}),o.a.createElement(Oe,{category:n}),a,o.a.createElement("nav",{className:i},o.a.createElement(he,{action:r})))};t(40);var je=Object(d.c)((function(e){var n=e.drinks.drinks;return{isShowingDrinksAllowed:n.length&&e.drinks.origDrinks.length!==n.length,drinks:n,view:e.drinks.drinksPrefs.view}}),(function(e){return{setDrinksPrefsIngsView:function(){Object(d.b)((function(){e(S("Ings"))}))},setDrinksPrefsListView:function(){Object(d.b)((function(){e(S("DrinkList"))}))}}}))((function(e){e.props;var n=e.view,t=e.drinks,a=e.setDrinksPrefsIngsView,r=e.setDrinksPrefsListView,i=e.isShowingDrinksAllowed,c="Ings"===n?o.a.createElement("button",{className:"cat-aside-prefs",disabled:!i,onClick:function(){return!!i&&r()}},"POKA\u017b"):o.a.createElement("button",{className:"cat-aside-prefs",onClick:function(){return a()}},"WR\xd3\u0106 DO PREFERENCJI?");return o.a.createElement("div",{className:"cat-aside-prefs"},o.a.createElement("h3",{className:"cat-aside-prefs"},"Liczba drink\xf3w:"),o.a.createElement("p",{className:"cat-aside-prefs"},t.length),c)}));t(41);var Ne=Object(d.c)((function(e){var n=Object(c.a)({},e.drinks.drinkCustom),t=n.max,a=n.total,r=n.left,i=n.ingsOrder;return{ings:e.drinks.ings,left:r,max:t,total:a,ingsOrder:i}}),(function(e){return{ingsReset:function(){return e(U())}}}))((function(e){var n=e.ings,t=e.ingsReset,a=e.max,r=15+e.total/a*70,i=e.ingsOrder.map((function(e){return e}));return i.reverse(),o.a.createElement("div",{className:"cat-aside-custom"},o.a.createElement("div",{className:"drink-custom-glass"},o.a.createElement("ul",{style:{height:r?r+"%":r},className:"drink-custom-glass-level"},i.map((function(e){return o.a.createElement("li",{key:"d-c-g-"+e,className:"drink-custom-glass-level"},n[e].name)}))),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass1",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass1"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass2",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass2"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass3",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass3"})),o.a.createElement("svg",{className:"drink-custom-glass drink-custom-glass-bg",viewBox:"0 0 240 240"},o.a.createElement("use",{xlinkHref:"#drink-custom-glass-bg"}))),o.a.createElement("button",{onClick:function(){return t()},className:"drink-custom-glass"},"Resetuj"),o.a.createElement("button",{className:"drink-custom-glass"},"Zr\xf3b drinka"))}));t(42);var ye=function(){return o.a.createElement("div",{className:"tmk"},o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_1"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_2"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_3"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_4"})),o.a.createElement("svg",{viewBox:"0 0 100 150"},o.a.createElement("use",{xlinkHref:"#Warstwa_5"})))),o.a.createElement("div",null,o.a.createElement("svg",{className:"all ",viewBox:"0 0 100 150"},o.a.createElement("circle",{className:"all-circle ",cx:"50",cy:"50",r:"50"}),o.a.createElement("image",{href:"drinks/kd1_calosc.svg",className:"all-img"}))))};t(13);var De=Object(d.c)((function(e){return{drink:e.drinks.drinkCustom}}))((function(e){return e.drink,o.a.createElement("div",{className:"drink-custom"},"WYBIERZ SK\u0141ADNIKI DO SWOJEGO DRINKA")}));t(43);var Ce=Object(d.c)((function(e){var n=Object(c.a)({},e.drinks.drinkCustom);return{ingsCounts:n.ingsCounts,left:n.left,orders:n.ingsOrder.reduce((function(e,n,t){var a=e[n]||[];return a.push(t+1),e[n]=a,e}),{})}}),(function(e){return{addIng:function(n,t){Object(d.b)((function(){return Object(D.times)(t,(function(){return e(x(n))}))}))},remIng:function(n){return e(q(n))},remIngByIdx:function(n){return e(W(n))}}}))((function(e){var n=e.ing,t=e.left,a=e.addIng,r=e.ingsCounts,i=e.orders,c=i[n.id]?i[n.id].join(", "):"";return console.log("ingPos ",c),o.a.createElement("div",{className:"ing-custom"},o.a.createElement("p",{className:"ing-custom"},n.name),[0,1,2,3].map((function(e){var i=r[n.id]||0,c=e<i,s=e+1-i,u=!c&&s*n.portion<=t,l=c?" ing-custom-selected":u?"":" ing-custom-hidden",d=!c;return o.a.createElement("span",{key:n.id+e,onClick:function(){return!!d&&a(n,s)},className:"ing-custom"+l},"\xa0")})))}));t(44);var Ie=Object(d.c)(null,(function(e){return{want:function(n){return e(T(n))},notWant:function(n,t){e(R(t)),n.stopPropagation()}}}))((function(e){var n=e.ing,t=e.want,a=e.notWant,r=(n.usable&&n.wanted?" ing-prefs-wanted":"")+(n.usable&&n.notWanted?" ing-prefs-wanted-not":"")+(n.usable?"":" ing-prefs-inactive"),i=n.usable?o.a.createElement("button",{className:"ing-prefs ing-prefs-want",onClick:function(){return n.usable&&t(n)}},o.a.createElement("img",{src:"ings/ings-prefs-want.svg",alt:"want",className:"ing-prefs ing-prefs-want"})):"",c=n.usable?o.a.createElement("button",{className:"ing-prefs ing-prefs-want-not",onClick:function(e){return n.usable&&a(e,n)}},o.a.createElement("img",{src:"ings/ings-prefs-want-not.svg",alt:"want-not",className:"ing-prefs ing-prefs-want-not"})):"";return o.a.createElement(o.a.Fragment,null,c,o.a.createElement("span",{className:"ing-prefs"+r},n.name),i)})),Ae=(t(45),{IngsCustom_:Ce,IngsPrefs_:Ie});var Pe=Object(d.c)((function(e){var n=e.categories.category,t="Ings"+n.id[0].toUpperCase()+n.id.slice(1)+"_";return{ings:Object(D.sortBy)(Object(D.toArray)(e.drinks.ings),"name"),IngsView:Ae[t]}}),(function(e){return{showDrink:function(n){return e(P(n))}}}))((function(e){var n=e.ings,t=e.IngsView;return o.a.createElement("ul",{className:"ings "},n.filter((function(e){return e.usable})).map((function(e,n,a){return o.a.createElement("li",{key:e.id,className:"ings "},o.a.createElement(t,{key:e.id,ing:e}))})))}));var Se=function(e){var n=e.props;return o.a.createElement(o.a.Fragment,null,o.a.createElement(De,n),o.a.createElement(Pe,n))};t(46),t(47);var Te=function(e){var n=e.drink;return o.a.createElement("h2",{className:"drink-name"},o.a.createElement("span",{className:"drink-name center-top-grh"},n.name," ",""+n.usable))};t(48);var Re=function(e){var n=e.drink;return o.a.createElement("ul",{className:"drink-ings"},(n.ings||[]).map((function(e,t,a){var r=o.a.createElement("li",{key:n.id+"-ings-sep"+t,className:"drink-ings drink-ings-sep"},"\xa0");return o.a.createElement(o.a.Fragment,{key:n.id+"-ings-fragment"+t},o.a.createElement("li",{key:n.id+"-ings"+t,className:"drink-ings"},e),r)})))};var xe=function(e){var n=e.drink;return o.a.createElement("div",{className:"drinks-list-item"},o.a.createElement(Te,{drink:n}),o.a.createElement(Re,{drink:n}))};t(49),t(50);var qe=function(e){var n=e.drink;return o.a.createElement("div",{className:"drink-icon "},o.a.createElement("img",{className:"drink-icon center",src:n.icon,alt:n.name}))};var We=Object(d.c)((function(e){return{drink:e.drinks.drink}}),(function(e){return{chooseDrink:function(n){Object(d.b)((function(){e(A()),e(_()),e(E())}))}}}))((function(e){var n=e.drink,t=e.chooseDrink;return o.a.createElement("div",{className:"drink"},o.a.createElement(Te,{drink:n}),o.a.createElement(qe,{drink:n}),o.a.createElement(Re,{drink:n}),o.a.createElement("nav",{className:"drink"},o.a.createElement("button",{className:"drink",disabled:!n.ings,onClick:function(){return t(n)}},"ZR\xd3B DRINKA")))}));t(51);var Ue=Object(d.c)((function(e){return{drink:e.drinks.drink,drinks:e.drinks.drinks}}),(function(e){return{showDrink:function(n){return e(P(n))}}}))((function(e){var n=e.drink,t=e.drinks,a=e.showDrink;return t.length?o.a.createElement("ul",{className:"drinks-list"},t.filter((function(e){return e.usable})).map((function(e){var t=e.id===n.id,r="drinks-list "+(t?"drinks-list-selected":""),i=t?{id:-1}:e,c=o.a.createRef();return o.a.createElement("li",{key:e.id,ref:c,className:r,onClick:function(){c.current.scrollIntoView({behavior:"smooth",block:"center"}),a(i)}},t?o.a.createElement(We,{key:e.id+"d"}):o.a.createElement(xe,{key:e.id+"dli",drink:e}))}))):o.a.createElement("ul",{className:"drinks-list"},o.a.createElement("li",null,"no drinks"))})),Be=(t(52),{Ings:Pe,DrinkList:Ue});var Ge=Object(d.c)((function(e){var n=e.drinks.drinksPrefs.view;return{DrinksPrefsView:Be[n]}}))((function(e){var n=e.props,t=e.DrinksPrefsView;return o.a.createElement(t,n)}));var Le={DrinksAlco:ye,DrinksCustom:Se,DrinksList:Ue,DrinksPrefs:Ge,DrinksRandom:function(e){var n=e.props;return o.a.createElement(We,n)},DrinksTop:function(e){return o.a.createElement(Ue,e)}},Ve={CategoryAsidePrefs:je,CategoryAsideCustom:Ne};var Me={CATEGORY_VIEW:Object(d.c)((function(e){var n=e.categories.category,t=n.id[0].toUpperCase()+n.id.slice(1);return{cat:n,DrinksView:Le["Drinks"+t],AsideContent:Ve["CategoryAside"+t]||""}}),(function(e){return{showCategories:function(){Object(d.b)((function(){e(A()),e(_())}))}}}))((function(e){var n=e.cat,t=e.showCategories,a=e.DrinksView,r=e.AsideContent,i="category-"+n.id+" category-aside-"+n.aside,c=r?o.a.createElement(r,{category:n}):o.a.createElement("div",{className:"cat-aside-"+n.aside+"-spacer"},"\xa0");return o.a.createElement("div",{className:"category "+i},o.a.createElement(a,null),o.a.createElement(_e,{category:n,cssClassSuffix:n.aside,showCategories:t},c))})),CATEGORIES_VIEW:we};var He=Object(d.c)((function(e){return{View:Me[e.categories.view]}}))((function(e){var n=e.View;return o.a.createElement(n,null)}));var Fe=function(){return o.a.createElement("div",null,"DrinkerAux")},Ke=(t(53),{vodka:{id:"vodka",name:"vodka",usable:!0,wanted:!1,notWanted:!1,portion:50},jin:{id:"jin",name:"jin",usable:!0,wanted:!1,notWanted:!1,portion:25},rum:{id:"rum",name:"rum",usable:!0,wanted:!1,notWanted:!1,portion:50},tequila:{id:"tequila",name:"tequila",usable:!0,wanted:!1,notWanted:!1,portion:25},gin:{id:"gin",name:"gin",usable:!0,wanted:!1,notWanted:!1,portion:50},whisky:{id:"whisky",name:"whisky",usable:!0,wanted:!1,notWanted:!1,portion:25},cola:{id:"cola",name:"cola",usable:!0,wanted:!1,notWanted:!1,portion:50},curacao:{id:"curacao",name:"curacao",usable:!0,wanted:!1,notWanted:!1,portion:25},tomato:{id:"tomato",name:"tomato",usable:!0,wanted:!1,notWanted:!1,portion:25},liqueur:{id:"liqueur",name:"liqueur",usable:!0,wanted:!1,notWanted:!1,portion:50},orange:{id:"orange",name:"orange",usable:!0,wanted:!1,notWanted:!1,portion:25},milk:{id:"milk",name:"milk",usable:!0,wanted:!1,notWanted:!1,portion:25}}),ze=Object(D.random)(57,57),Ye=Object(D.times)(ze,(function(e){return{id:"drink-"+e,name:"drink "+e,desc:{0:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat pellentesque commodo. ",1:"Phasellus ornare eros lorem, quis venenatis ante sodales at. Nullam vehicula ut eros sit amet aliquet. ",2:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",3:"Duis suscipit nibh sapien, lobortis dictum turpis mollis nec. In hac habitasse platea dictumst.",4:"Praesent finibus, odio ac venenatis interdum, mauris erat rutrum neque, et viverra mauris nisl nec metus. ",5:"Maecenas ut tincidunt metus, in luctus neque. Ut vehicula turpis eu massa imperdiet tempus.",6:"Aliquam metus lorem, consectetur eu gravida ac, luctus id dolor. Ut sit amet quam quis dui vehicula cursus in ut turpis.",7:"Morbi id interdum tellus. Nunc in augue nibh. ",8:"Vivamus porttitor rutrum mauris eget venenatis. Aenean sollicitudin, est et tincidunt placerat."}[""+(0===e?0:e%9)],ings:{0:["jin","abc","xyz","qwe","ghj"],1:["jin","asdfqwerqwe","qwer","qwerqwr qwerq","qwerqewrq qfasdfaf","qwer","xxbxvbxv"],2:["rum","asdf","qwerqwerqwerqew","qwerqwerqwerqew"],3:["milk","rum","qwer","adfdafs adfqww","eeeeewer"],4:["curacao","asdf","qwer"],5:["jin","abc","xyz","qwe"],6:["jin","abc","xyz","qwe","ghj","qwerqwerqwerqew"],7:["jin","abc","xyz","qwe","ghj","klm","opr"],8:["vodka","asdf","qwer"],9:["tonic","asdf","qwer"]}[""+(0===e?0:e%9)],icon:"icon.png",usable:!0}}));var Je=Object(c.a)({},se),Ze=Je.log,Xe=Je.err;var Qe=Object(d.c)((function(e){return{appMode:e.app.mode,drinksData:{drinks:Ye,ings:Ke}}}),(function(e){return{setModeDashboard:function(n){"APP_MODE_DASHBOARD"===n&&e(v("APP_MODE_DASHBOARD_FULL_SCREEN")),"APP_MODE_DASHBOARD_FULL_SCREEN"===n&&e(v("APP_MODE_DASHBOARD"))},setMockDrinksData:function(n){e(I(n))},clearLogs:se.clear,closeDashboard:function(){return e(v("APP_MODE_NORMAL"))},kioskOn:function(){return K.exec("dispatch","kioskOn").then(Ze).catch(Xe)},kioskOff:function(){return K.exec("dispatch","kioskOff").then(Ze).catch(Xe)},getUsbPluginLogs:function(){return K.exec("dispatch","getLogs").then(Ze).catch(Xe)},clearUsbPluginLogs:function(){return K.exec("dispatch","clearLogs").then(Ze).catch(Xe)},getUsbDeviceInfo:function(){return K.exec("dispatch","getUsbDeviceInfo").then(Ze).catch(Xe)},getUsbDeviceConfig:function(){return K.exec("dispatch","getUsbDeviceConfig").then(Ze).catch(Xe)}}}))((function(e){var n=e.appMode,t=e.setModeDashboard,a=e.kioskOn,r=e.kioskOff,i=e.drinksData,c=e.setMockDrinksData,u=e.clearLogs,l=e.closeDashboard,d=e.getUsbPluginLogs,m=e.clearUsbPluginLogs,f=e.getUsbDeviceInfo;return e.getUsbDeviceConfig,Object(s.useEffect)((function(){se.init("dashboard-console"),Ze("Dashboard.jsx:: dashboard-console: connected")}),[]),o.a.createElement("div",{className:"dashboard"},o.a.createElement("div",null,o.a.createElement("button",{className:"dashboard-button",onClick:function(){return l()}},"-X-"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return a()}},"kiosk on"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return r()}},"kiosk off"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return t(n)}},"toggle fullscreen"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return c(i)}},"load mock data"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return u()}},"clear"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return m()}},"clear usb logs"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return d()}},"get usb logs"),o.a.createElement("button",{className:"dashboard-button",onClick:function(){return f()}},"device info")),o.a.createElement("div",{id:"dashboard-console",className:"dashboard-console"}))}));var $e=Object(d.c)((function(e){var n="APP_DISPLAY_DRINKER"===e.app.display?He:Fe;return{AppView:"APP_VIEW"===e.app.view?n:ve,appMode:e.app.mode,appState:e.app.state}}),(function(e){return{usbInit:function(n){return e(Y(n))}}}))((function(e){var n=e.cordova,t=e.appState,a=e.AppView,r=e.appMode,i=e.usbInit;return Object(s.useEffect)((function(){i({cordova:n})}),[]),"APP_MODE_NORMAL"===r?o.a.createElement(a,null):"APP_MODE_DASHBOARD"===r?o.a.createElement("div",{id:"app"},o.a.createElement("div",{id:"app-view-wrapper"},t),o.a.createElement("div",{id:"app-dashboard-wrapper"},o.a.createElement(Qe,null))):"APP_MODE_DASHBOARD_FULL_SCREEN"===r?o.a.createElement(Qe,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"no proper mode"),o.a.createElement("div",null,t),o.a.createElement("div",null,r))})),en=Object(c.a)({},se).log;({initialize:function(){var e=!!window.cordova;en("index.js:: cordovaIsPresent = "+e),e?document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1):l.a.render(o.a.createElement(d.a,{store:ke},o.a.createElement($e,null)),document.getElementById("root"))},onDeviceReady:function(){en("index.js::deviceready"),l.a.render(o.a.createElement(d.a,{store:ke},o.a.createElement($e,{cordova:window.cordova})),document.getElementById("root"),(function(){}))}}).initialize()}],[[17,1,2]]]);
//# sourceMappingURL=main.2aa08b0e.chunk.js.map