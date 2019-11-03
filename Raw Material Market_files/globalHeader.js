var globalHeader=function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,a=r||i||Function("return this")(),u=a.Symbol,c=Object.prototype,l=c.hasOwnProperty,s=c.toString,f=u?u.toStringTag:void 0;var p=function(e){var t=l.call(e,f),n=e[f];try{e[f]=void 0}catch(e){}var r=s.call(e);return t?e[f]=n:delete e[f],r},d=Object.prototype.toString;var v=function(e){return d.call(e)},m="[object Null]",y="[object Undefined]",h=u?u.toStringTag:void 0;var b=function(e){return null==e?void 0===e?y:m:h&&h in Object(e)?p(e):v(e)},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var _=function(e){var t=void 0===e?"undefined":g(e);return null!=e&&("object"==t||"function"==t)},S="[object AsyncFunction]",w="[object Function]",O="[object GeneratorFunction]",j="[object Proxy]";var D,k=function(e){if(!_(e))return!1;var t=b(e);return t==w||t==O||t==S||t==j},A=a["__core-js_shared__"],M=(D=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"";var T=function(e){return!!M&&M in e},C=Function.prototype.toString;var L=function(e){if(null!=e){try{return C.call(e)}catch(e){}try{return e+""}catch(e){}}return""},I=/^\[object .+?Constructor\]$/,P=Function.prototype,E=Object.prototype,x=P.toString,H=E.hasOwnProperty,J=RegExp("^"+x.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var F=function(e){return!(!_(e)||T(e))&&(k(e)?J:I).test(L(e))};var W=function(e,t){return null==e?void 0:e[t]};var B=function(e,t){var n=W(e,t);return F(n)?n:void 0},N=function(){try{var e=B(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var U=function(e,t,n){"__proto__"==t&&N?N(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n};var R=function(e,t){return e===t||e!=e&&t!=t},q=Object.prototype.hasOwnProperty;var $=function(e,t,n){var r=e[t];q.call(e,t)&&R(r,n)&&(void 0!==n||t in e)||U(e,t,n)};var Q=function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var u=t[i],c=r?r(n[u],e[u],u,n,e):void 0;void 0===c&&(c=e[u]),o?U(n,u,c):$(n,u,c)}return n};var V=function(e){return e};var z=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},G=Math.max;var Y=function(e,t,n){return t=G(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=G(r.length-t,0),a=Array(i);++o<i;)a[o]=r[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=r[o];return u[t]=n(a),z(e,this,u)}};var K=function(e){return function(){return e}},X=N?function(e,t){return N(e,"toString",{configurable:!0,enumerable:!1,value:K(t),writable:!0})}:V,Z=800,ee=16,te=Date.now;var ne=function(e){var t=0,n=0;return function(){var r=te(),o=ee-(r-n);if(n=r,o>0){if(++t>=Z)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(X);var re=function(e,t){return ne(Y(e,t,V),e+"")},oe=9007199254740991;var ie=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=oe};var ae=function(e){return null!=e&&ie(e.length)&&!k(e)},ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce=9007199254740991,le=/^(?:0|[1-9]\d*)$/;var se=function(e,t){var n=void 0===e?"undefined":ue(e);return!!(t=null==t?ce:t)&&("number"==n||"symbol"!=n&&le.test(e))&&e>-1&&e%1==0&&e<t},fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var pe=function(e,t,n){if(!_(n))return!1;var r=void 0===t?"undefined":fe(t);return!!("number"==r?ae(n)&&se(t,n.length):"string"==r&&t in n)&&R(n[t],e)};var de=function(e){return re(function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,a&&pe(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),t=Object(t);++r<o;){var u=n[r];u&&e(t,u,r,i)}return t})},ve=Object.prototype;var me=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ve)};var ye=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var be=function(e){return null!=e&&"object"==(void 0===e?"undefined":he(e))},ge="[object Arguments]";var _e=function(e){return be(e)&&b(e)==ge},Se=Object.prototype,we=Se.hasOwnProperty,Oe=Se.propertyIsEnumerable,je=_e(function(){return arguments}())?_e:function(e){return be(e)&&we.call(e,"callee")&&!Oe.call(e,"callee")},De=Array.isArray;var ke=function(){return!1},Ae=t(function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="object"==n(t)&&t&&!t.nodeType&&t,o=r&&"object"==n(e)&&e&&!e.nodeType&&e,i=o&&o.exports===r?a.Buffer:void 0,u=(i?i.isBuffer:void 0)||ke;e.exports=u}),Me={};Me["[object Float32Array]"]=Me["[object Float64Array]"]=Me["[object Int8Array]"]=Me["[object Int16Array]"]=Me["[object Int32Array]"]=Me["[object Uint8Array]"]=Me["[object Uint8ClampedArray]"]=Me["[object Uint16Array]"]=Me["[object Uint32Array]"]=!0,Me["[object Arguments]"]=Me["[object Array]"]=Me["[object ArrayBuffer]"]=Me["[object Boolean]"]=Me["[object DataView]"]=Me["[object Date]"]=Me["[object Error]"]=Me["[object Function]"]=Me["[object Map]"]=Me["[object Number]"]=Me["[object Object]"]=Me["[object RegExp]"]=Me["[object Set]"]=Me["[object String]"]=Me["[object WeakMap]"]=!1;var Te=function(e){return be(e)&&ie(e.length)&&!!Me[b(e)]};var Ce=function(e){return function(t){return e(t)}},Le=t(function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="object"==n(t)&&t&&!t.nodeType&&t,i=o&&"object"==n(e)&&e&&!e.nodeType&&e,a=i&&i.exports===o&&r.process,u=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=u}),Ie=Le&&Le.isTypedArray,Pe=Ie?Ce(Ie):Te,Ee=Object.prototype.hasOwnProperty;var xe=function(e,t){var n=De(e),r=!n&&je(e),o=!n&&!r&&Ae(e),i=!n&&!r&&!o&&Pe(e),a=n||r||o||i,u=a?ye(e.length,String):[],c=u.length;for(var l in e)!t&&!Ee.call(e,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||se(l,c))||u.push(l);return u};var He=function(e,t){return function(n){return e(t(n))}},Je=He(Object.keys,Object),Fe=Object.prototype.hasOwnProperty;var We=function(e){if(!me(e))return Je(e);var t=[];for(var n in Object(e))Fe.call(e,n)&&"constructor"!=n&&t.push(n);return t};var Be=function(e){return ae(e)?xe(e):We(e)},Ne=Object.prototype.hasOwnProperty,Ue=de(function(e,t){if(me(t)||ae(t))Q(t,Be(t),e);else for(var n in t)Ne.call(t,n)&&$(e,n,t[n])}),Re={attrs:{hdCode:"",serviceType:"",appName:"",runTime:0,currentLocale:"en_US",hdLanguageType:"close"},init:function(e){return Ue(this.attrs,e)},record:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.hasGoldlog()){var t=[],n=this.attrs,r=n.hdCode,o=n.serviceType,i=n.appName,a=n.runTime,u=n.currentLocale,c=n.hdLanguageType;t.push("hd_code="+r),t.push("a_n="+i),t.push("run_t="+a),t.push("biz_pro="+e.bizPro),t.push("pos_val="+e.posVal),void 0!==e.targetLocale&&t.push("target_locale="+e.targetLocale),t.push("lang_type="+c),t.push("current_locale="+u),t.push("m_t="+o);var l=t.join("&"),s=e.gmkey;return this.goldlog().record("/sc.sc_header_footer.sc_hds",s,l,"H1483342551"),l}},hasGoldlog:function(){return!!window.goldlog&&"function"==typeof window.goldlog.record},goldlog:function(){return window.goldlog}},qe={beacon_SourcingSolutions:"Sourcing Solutions",beacon_ServicesMembership:"Services & Membership",beacon_HelpCommunity:"Help & Community",ma_MyAlibaba:"My Alibaba",ma_SignIn:"Sign In",ma_SignOut:"Sign Out",ma_JoinFree:"Join Free",ma_Getstartednow:"Get started now",ma_or:"or",ma_Hi:"Hi","ma_Continuewith:":"Continue with:",ma_Iagreeto:"I agree to",ma_FreeMembershipAgreement:"Free Membership Agreement",ma_ReceiveMarketingMaterials:"Receive Marketing Materials",od_Orders:"Orders",od_Order:"Order",od_OrderProtection:"Order {br}Protection",od_Buying:"Buying",od_Selling:"Selling",od_PendingPayment:"Pending Payment",od_PendingConfirmation:"Pending Confirmation",od_PendingActions:"Pending Actions",od_PendingShipping:"Pending Shipping",od_SecurePayment:"Secure Payment",od_Learnmore:"Learn more",od_LearnmoreCN:"了解更多",od_BuywholesalerOnline:"Buy wholesaler Online",od_TradeAssuranceCN:"信用保障服务",od_TradeAssurance:"Trade Assurance",od_OrderwithTradeAssurance:"Order with Trade Assurance",od_OrderwithTradeAssuranceCN:"起草信用保障订单",od_SafePayments:"Safe Payments",od_Quickandeasytransactions:"Quick and easy transactions",od_Multiplepaymentmethods:"Multiple payment methods",od_MultipleSafePaymentOptions:"Multiple Safe Payment Options",od_WorryFreeShippingQuality:"Worry-Free Shipping & Quality",od_BuildYourCredibility:"Build Your Credibility",od_powerTipsCN1:"显企业实力",od_powerTipsCN2:"让买家信任",od_powerTipsCN3:"获更多商机",fav_Favorites:"Favorites",fav_FavoriteProducts:"Favorite Products",fav_FavoriteSuppliers:"Favorite Suppliers",fav_ViewAllItems:"View All Items",fav_SignIn:"Sign In",fav_SignInTips:"to manage and view all items."},$e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Ve=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=$e({i18nData:qe},t),this.modules=[],this.init()}return Qe(e,[{key:"init",value:function(){var e=this.config,t=e.hdCode,n=e.appName,r=e.loadTime,o=Date.now();this.runTime=o-r,Re.init({hdCode:t,appName:n,loadTime:r})}},{key:"initModules",value:function(e,t,n){var r=new e(t,$e({},this.config,n));this.modules.push(r),"function"==typeof r.render&&r.render()}}]),e}();var ze=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e};var Ge=function(e){return function(t,n,r){for(var o=-1,i=Object(t),a=r(t),u=a.length;u--;){var c=a[e?u:++o];if(!1===n(i[c],c,i))break}return t}}();var Ye=function(e,t){return function(n,r){if(null==n)return n;if(!ae(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&!1!==r(a[i],i,a););return n}}(function(e,t){return e&&Ge(e,t,Be)});var Ke=function(e){return"function"==typeof e?e:V};var Xe=function(e,t){return(De(e)?ze:Ye)(e,Ke(t))};function Ze(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var et={isLoadComplete:!1,SCHeader:null,loadQueue:[],hasLoadComplete:function(){return this.isLoadComplete},fireHeaderLoadComplete:function(){var e=this;this.isLoadComplete=!0,this.SCHeader=window.SCHeader,this.loadQueue.forEach(function(t){t(e.SCHeader)})},onHeaderLoadComplete:function(e){this.hasLoadComplete()&&e(this.SCHeader),this.loadQueue.push(e)},getUserInfo:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;this.hasLoadComplete()?(r=window.SCHD_COMS.hdlib.UserInfoAjaxData).getUserInfo.apply(r,Ze(t)):this.onHeaderLoadComplete(function(){var e;(e=window.SCHD_COMS.hdlib.UserInfoAjaxData).getUserInfo.apply(e,Ze(t))})},getCookie:function(e){var t=("; "+document.cookie).split(e+"=");if(2===t.length)return t.pop().split(";").shift()}};if(window.HEADER_DATA["sc-header-config"].initComplete){var tt=window.HEADER_DATA["sc-header-config"].initComplete;window.HEADER_DATA["sc-header-config"].initComplete=function(e,t,n){"function"==typeof tt&&tt(e,t,n),et.fireHeaderLoadComplete(e,t,n)}}else window.HEADER_DATA["sc-header-config"].initComplete=function(e,t,n){et.fireHeaderLoadComplete(e,t,n)};var nt=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},rt=Object.prototype.hasOwnProperty;var ot=function(e){if(!_(e))return nt(e);var t=me(e),n=[];for(var r in e)("constructor"!=r||!t&&rt.call(e,r))&&n.push(r);return n};var it=function(e){return ae(e)?xe(e,!0):ot(e)},at=de(function(e,t,n,r){Q(t,it(t),e,r)}),ut=He(Object.getPrototypeOf,Object),ct="[object Object]",lt=Function.prototype,st=Object.prototype,ft=lt.toString,pt=st.hasOwnProperty,dt=ft.call(Object);var vt=function(e){if(!be(e)||b(e)!=ct)return!1;var t=ut(e);if(null===t)return!0;var n=pt.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&ft.call(n)==dt},mt="[object DOMException]",yt="[object Error]";var ht=function(e){if(!be(e))return!1;var t=b(e);return t==yt||t==mt||"string"==typeof e.message&&"string"==typeof e.name&&!vt(e)},bt=re(function(e,t){try{return z(e,void 0,t)}catch(e){return ht(e)?e:new Error(e)}});var gt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o};var _t=function(e,t){return gt(t,function(t){return e[t]})},St=Object.prototype,wt=St.hasOwnProperty;var Ot=function(e,t,n,r){return void 0===e||R(e,St[n])&&!wt.call(r,n)?t:e},jt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};var Dt=function(e){return"\\"+jt[e]},kt=/<%=([\s\S]+?)%>/g;var At=function(e){return function(t){return null==e?void 0:e[t]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),Mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt="[object Symbol]";var Ct=function(e){return"symbol"==(void 0===e?"undefined":Mt(e))||be(e)&&b(e)==Tt},Lt=1/0,It=u?u.prototype:void 0,Pt=It?It.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(De(t))return gt(t,e)+"";if(Ct(t))return Pt?Pt.call(t):"";var n=t+"";return"0"==n&&1/t==-Lt?"-0":n};var xt=function(e){return null==e?"":Et(e)},Ht=/[&<>"']/g,Jt=RegExp(Ht.source);var Ft={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:kt,variable:"",imports:{_:{escape:function(e){return(e=xt(e))&&Jt.test(e)?e.replace(Ht,At):e}}}},Wt=/\b__p \+= '';/g,Bt=/\b(__p \+=) '' \+/g,Nt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Rt=/($^)/,qt=/['\n\r\u2028\u2029\\]/g;var $t=function(e,t,n){var r=Ft.imports._.templateSettings||Ft;n&&pe(e,t,n)&&(t=void 0),e=xt(e),t=at({},t,r,Ot);var o,i,a=at({},t.imports,r.imports,Ot),u=Be(a),c=_t(a,u),l=0,s=t.interpolate||Rt,f="__p += '",p=RegExp((t.escape||Rt).source+"|"+s.source+"|"+(s===kt?Ut:Rt).source+"|"+(t.evaluate||Rt).source+"|$","g"),d="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";e.replace(p,function(t,n,r,a,u,c){return r||(r=a),f+=e.slice(l,c).replace(qt,Dt),n&&(o=!0,f+="' +\n__e("+n+") +\n'"),u&&(i=!0,f+="';\n"+u+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=c+t.length,t}),f+="';\n";var v=t.variable;v||(f="with (obj) {\n"+f+"\n}\n"),f=(i?f.replace(Wt,""):f).replace(Bt,"$1").replace(Nt,"$1;"),f="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=bt(function(){return Function(u,d+"return "+f).apply(void 0,c)});if(m.source=f,ht(m))throw m;return m};function Qt(e,t){if(!e)throw new Error(t||"unknown assertion error")}var Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gt=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Yt=function(){},Kt=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tpl=t.tpl,this.element=t.element,this.i18nData=t.i18nData,this.menuInfo=t.menuInfo}return Gt(e,[{key:"render",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Yt,r=e;k(e)&&(n=e,r={}),et.getUserInfo(function(e){var o=(e._attrs||{}).isOverSea,i=void 0===o||o;t.isOverSea=i,t.initMenuItem(r),t.insertLeftMenu(r),n()})}},{key:"initMenuItem",value:function(e){var t=this.menuInfo,n=this.i18nData,r=this.isOverSea,o=this.isInitMenuItem;if(!(void 0!==o&&o)){var i,a,u=$t(this.tpl)(zt({isMenu:!1,renderItem:!1,renderBody:!0,isOverSea:r,i18nData:n,menuInfo:t},e));i=this.element,a=u,Qt(i instanceof HTMLElement,"The first argument must be a HTMLElement, got "+(void 0===i?"undefined":Vt(i))+"."),Qt("string"==typeof a,"The second argument must be a string, got "+(void 0===a?"undefined":Vt(a))+"."),i.insertAdjacentHTML("beforeend",a),this.isInitMenuItem=!0}}},{key:"insertLeftMenu",value:function(e){var t=this.menuInfo,n=this.i18nData,r=this.isOverSea,o=this.isInsertLeftMenu,i=void 0!==o&&o,a=this.leftMenuWapper;if(!i&&a){var u=$t(this.tpl),c=u(zt({isMenu:!0,renderItem:!0,renderBody:!1,isOverSea:r,i18nData:n,menuInfo:t},e)),l=u(zt({isMenu:!0,renderItem:!1,renderBody:!0,isOverSea:r,i18nData:n,menuInfo:t},e));a.replaceItem({MenuItem:c,MenuBody:l})}}}]),e}(),Xt='<% if(isMenu){ %>\n<div class="J-sc-hd-m-beaconnav sc-hd-m-beaconnav">\n<% } %>\n    <% if(renderItem){ %>\n        <span class="J-hd-beaconnav-title sc-hd-ms-title" title="<%=i18nData.beacon_SourcingSolutions %>">\n            <%=i18nData.beacon_SourcingSolutions %>\n        </span>\n    <% }\n    if(renderBody) { %>\n        <div class="sc-hd-ms-hover">\n            <div class="J-hd-beaconnav-links sc-hd-ms-links">\n                <% menuInfo.forEach(function( groupData ){ \n\n                    var groupW = \'\';\n                    if( typeof( groupData.width ) === \'string\' && groupData.width !== \'\' ){\n                        groupW = \'width:\' + groupData.width;\n                    }\n                %>\n\n                <ul style="<%=groupW %>">\n                    <li class="J-beacon-link-group sc-hd-ms-lv1-title">\n                        <span><%=groupData.text%></span>\n                    </li>\n                    <% groupData.list.forEach(function( itemData ){ \n\n                        var itemDisplay = true;\n                        if( itemData.valid.indexOf(\'!isOverSea\') != -1 && isOverSea == true ){\n                            itemDisplay = false;\n                        }else if( itemData.valid.indexOf(\'isOverSea\') != -1 && itemData.valid.indexOf(\'!isOverSea\') == -1 && isOverSea == false ){\n                            itemDisplay = false;\n                        }\n                        if( itemDisplay == true ){\n                    %>\n                            <li><a target="_blank" href="<%=itemData.link %>" rel="nofollow" title="<%=itemData.text %>" >\n                                <%=itemData.text %>\n                            </a></li>\n                    <% \n                         }\n                    }); %>\n                   \n                </ul>\n\n                <% }); %>\n            </div>\n        </div>\n    <% } %>\n<% if(isMenu){ %>\n</div>\n<% } %>\n\n\n',Zt=[];var en='<% if(isMenu){ %>\n<div class="J-sc-hd-m-beaconnav sc-hd-m-beaconnav">\n<% } %>\n    <% if(renderItem){ %>\n        <span class="J-hd-beaconnav-title  sc-hd-ms-title" title="<%=i18nData.beacon_ServicesMembership %>">\n            <%=i18nData.beacon_ServicesMembership %>\n        </span>\n    <% }\n    if(renderBody) { %>\n        <div class="sc-hd-ms-hover">\n            <div class="J-hd-beaconnav-links sc-hd-ms-links">\n                <%  menuInfo.forEach(function( groupData ){ \n\n                    var groupW = \'\';\n                    if( typeof( groupData.width ) === \'string\' && groupData.width !== \'\' ){\n                        groupW = \'width:\' + groupData.width;\n                    }\n                %>\n\n                <ul style="<%=groupW %>">\n                    <li class="J-beacon-link-group sc-hd-ms-lv1-title">\n                        <span><%=groupData.text%></span>\n                    </li>\n                    <% groupData.list.forEach(function( itemData ){ \n\n                        var itemDisplay = true;\n                        if( itemData.valid.indexOf(\'!isOverSea\') != -1 && isOverSea == true ){\n                            itemDisplay = false;\n                        }else if( itemData.valid.indexOf(\'isOverSea\') != -1 && itemData.valid.indexOf(\'!isOverSea\') == -1 && isOverSea == false ){\n                            itemDisplay = false;\n                        }\n                        if( itemDisplay == true ){\n                    %>\n                            <li><a target="_blank" href="<%=itemData.link %>" rel="nofollow" title="<%=itemData.text %>" >\n                                <%=itemData.text %>\n                            </a></li>\n                    <% \n                         }\n                    }); %>\n                   \n                </ul>\n\n                <% }); %>\n            </div>\n        </div>\n    <% } %>\n<% if(isMenu){ %>\n</div>\n<% } %>\n',tn=[];var nn=t(function(e,t){!function(e,t){var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(e){try{delete window[e]}catch(t){window[e]=void 0}}function o(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,a=t.timeout||n.timeout,u=t.jsonpCallback||n.jsonpCallback,c=void 0;return new Promise(function(n,l){var s=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),f=u+"_"+s;window[s]=function(e){n({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),o(f),r(s)},i+=-1===i.indexOf("?")?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+i+u+"="+s),t.charset&&p.setAttribute("charset",t.charset),p.id=f,document.getElementsByTagName("head")[0].appendChild(p),c=setTimeout(function(){l(new Error("JSONP request to "+e+" timed out")),r(s),o(f),window[s]=function(){r(s)}},a),p.onerror=function(){l(new Error("JSONP request to "+e+" failed")),r(s),o(f),c&&clearTimeout(c)}})}}(0,e)}),rn=[],on='<% if(isMenu){ %>\n<div class="J-sc-hd-m-beaconnav sc-hd-m-beaconnav">\n<% } %>\n    <% if(renderItem){ %>\n        <span class="J-hd-beaconnav-title sc-hd-ms-title" title="<%=i18nData.beacon_HelpCommunity %>" >\n            <%=i18nData.beacon_HelpCommunity %>\n        </span>\n    <% }\n    if(renderBody) { %>\n        <div class="sc-hd-ms-hover sc-hd-ms-help">\n            <div class="J-hd-beaconnav-links sc-hd-ms-links">\n\n                <% menuInfo.forEach(function( groupData ){ \n\n                    var groupW = \'\';\n                    if( typeof( groupData.width ) === \'string\' && groupData.width !== \'\' ){\n                        groupW = \'width:\' + groupData.width;\n                    }\n                %>\n\n                <ul style="<%=groupW %>">\n                    <li class="J-beacon-link-group sc-hd-ms-lv1-title">\n                        <span><%=groupData.text%></span>\n                    </li>\n                    <% groupData.list.forEach(function( itemData ){ \n\n                        var itemDisplay = true;\n                        if( itemData.valid.indexOf(\'!isOverSea\') != -1 && isOverSea == true ){\n                            itemDisplay = false;\n                        }else if( itemData.valid.indexOf(\'isOverSea\') != -1 && itemData.valid.indexOf(\'!isOverSea\') == -1 && isOverSea == false ){\n                            itemDisplay = false;\n                        }\n                        if( itemDisplay == true ){\n                    %>\n                            <li><a target="_blank" href="<%=itemData.link %>" rel="nofollow" title="<%=itemData.text %>" >\n                                <%=itemData.text %>\n                            </a></li>\n                    <% \n                         }\n                    }); %>\n                   \n                </ul>\n\n                <% }); %>\n                \n            </div>\n            <% if( hasTips === true){ %>\n            <div class="sc-hd-ms-qa">\n                <div class="sc-hd-ms-qa-title">\n                    <span><i class="sc-hd-i-book"></i>Tips</span>\n                </div>\n                <div class="J-sc-hd-tips sc-hd-ms-qa-tips">\n                <% for(var key in tips) { %>\n                    <a target="_blank" href="<%= tips[key] %>" title="<%= key %>" rel="nofollow"><i class="sc-hd-i-dot-small"></i><%= key %></a>\n                <% }; %>\n                </div>\n            </div>\n            <% } %>\n        </div>\n    <% } %>\n<% if(isMenu){ %>\n</div>\n<% } %>\n',an=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),un=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0};var cn={"什么是信用保障服务？":"http://activities.alibaba.com/alibaba/ta-help-seller.php?tabindex=1&bookindex=1","使用信用保障服务有什么好处？":"http://activities.alibaba.com/alibaba/ta-help-seller.php?tabindex=1&bookindex=1","如何使用信用保障服务？":"http://activities.alibaba.com/alibaba/ta-help-seller.php?tabindex=1&bookindex=3"},ln={"How to use TA to get full protection?":"//activities.alibaba.com/alibaba/ta-help-buyer.php?tabindex=1&bookindex=1&tracelog=from_header","What's TA?":"//activities.alibaba.com/alibaba/ta-help-buyer.php?tabindex=1&bookindex=1&tracelog=from_header"},sn=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.currentLocale=e.currentLocale||"en_US",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Kt),an(t,[{key:"render",value:function(e){var n=this;if(this.data)return un(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this,this.data,e);this.getData().then(function(r){n.data=r,un(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",n).call(n,r,e)})}},{key:"formatData",value:function(e){var t=this.isOverSea,n={};return n.tips=t?ln:cn,n.hasTips="en_US"===this.currentLocale||"zh_CN"===this.currentLocale,Ue(n,e)}},{key:"getData",value:function(){var e=this,t=et.getCookie("ctoken");return nn("//messagebeach.alibaba.com/ajax/personTipsInfo.do?ctoken="+t,{timeout:3e3,cache:!1}).then(function(e){return e.json()}).then(function(t){return e.formatData(t)})}}]),t}();var fn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body;Qt(e instanceof HTMLElement,"[global-commons-selector]: The element must be HTMLElement, when use closest."),Qt("string"==typeof t,"[global-commons-selector]: The selector must be string, when use closest."),Qt(n instanceof HTMLElement||"string"==typeof t,"[global-commons-selector]: The selector must be string or instanceof HTMLElement, when use closest.");for(var r=e,o=r.matches||r.msMatchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector,i=null;r;){if(o.call(r,t)){i=r;break}if(n===r||"string"==typeof n&&o.call(r,n))break;r=r.parentNode||r.parentElement}return i},pn=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var dn=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.menu=n.menu||null,this.i18nData=n.i18nData||qe,this.opts=n,this.MenuMap=[],this.whiteList=[".alibaba.com"]}return pn(e,[{key:"initMenuItems",value:function(){var e,t,n=this.element,r=this.i18nData;return this.MenuMap.push((e={element:n.querySelector(".J-sc-hd-ms-sourcing-solutions"),i18nData:r,menuInfo:this.opts["sourcing-solutions"]},t=Ue({tpl:Xt,menuInfo:Zt,i18nData:qe},e),new Kt(t))),this.MenuMap.push(function(e){var t=Ue({tpl:en,menuInfo:tn,i18nData:qe},e);return new Kt(t)}({element:n.querySelector(".J-sc-hd-ms-services-membership"),i18nData:r,menuInfo:this.opts["services-membership"]})),this.MenuMap.push(function(e){var t=Ue({tpl:on,menuInfo:rn,i18nData:qe},e);return new sn(t)}({element:n.querySelector(".J-sc-hd-ms-help-community"),i18nData:r,menuInfo:this.opts["help-community"]})),this.MenuMap}},{key:"initAttrs",value:function(e){this._attrs=Ue({},this.attrs,e)}},{key:"renderMenuItems",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.MenuMap,n=this.getMenuWapper(e);t.forEach(function(e,t){e.leftMenuWapper=n[t],e.render()})}},{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.initAttrs(),this.initMenuItems(),et.onHeaderLoadComplete(function(n){e.renderMenuItems(n),e.goldlogLog(n),t()})}},{key:"getMenuWapper",value:function(e){return e.getMenu().getMenuItems({delimitCount:1,itemCount:3})}},{key:"beaconHoverDelay",value:function(){var e=this.element.querySelectorAll(".J-sc-hd-m-beaconnav .sc-hd-ms-dp-trigger");e&&e.forEach(function(e){e.addEventListener("mouseenter",function(e){var t=e.currentTarget;t.getAttribute("data-hoverstatus","true"),t.classList.add("sc-hd-beacon-delay"),setTimeout(function(){"true"===t.getAttribute("data-hoverstatus")&&t.classList.remove("sc-hd-beacon-delay")},300)}),e.addEventListener("mouseleave",function(e){var t=e.currentTarget;t.getAttribute("data-hoverstatus","true"),t.classList.add("sc-hd-beacon-delay"),setTimeout(function(){"true"===t.getAttribute("data-hoverstatus")&&t.classList.remove("sc-hd-beacon-delay")},300)})})}},{key:"goldlogLog",value:function(e){var t=this;this.setElDataVal(this.element.querySelectorAll(".J-hd-beaconnav-title")),e.element.delegate(".J-hd-beaconnav-links a","mousedown",function(e){var n=e.currentTarget,r="link_click",o="",i=fn(n,"ul").querySelector(".J-beacon-link-group"),a=fn(n,".sc-hd-m-menu"),u=n.getAttribute("href");a&&(r="menu_link_click"),i.length>0&&(o=(o=i.text()).replace(/\s|\||'|\?|&/gi,"")),t.inWhiteList(u)&&t.clickLog("beaconnav",r,o)}),e.element.delegate(".J-hd-beaconnav-right-links a","mousedown",function(e){var n=e.currentTarget.getAttribute("href");t.inWhiteList(n)&&t.clickLog("beaconnav_right")}),e.element.delegate("a.J-sc-hd-i-logo","mousedown",function(e){var n=e.currentTarget.getAttribute("href");t.inWhiteList(n)&&t.clickLog("alilogo")}),e.element.delegate(".J-sc-hd-tips a","mousedown",function(e){var n=e.currentTarget,r="link_click",o=fn(n,".sc-hd-m-menu"),i=n.getAttribute("href");o&&(r="menu_link_click"),t.inWhiteList(i)&&t.clickLog("beaconnavtips",r)})}},{key:"clickLog",value:function(e,t,n){var r=n?"pos="+e+"|action="+(t||"link_click")+"|group="+n:"pos="+e+"|action="+(t||"link_click");Re.record({gmkey:"CLK",bizPro:r.replace(/=|\|/gi,"_"),posVal:""})}},{key:"inWhiteList",value:function(e){var t=this.whiteList,n=void 0===t?[]:t;if("string"==typeof e)for(var r=0,o=n.length;r<o;r++)if(-1!==e.indexOf(n[r]))return!0;return!1}},{key:"setElDataVal",value:function(e){void 0!==e&&Xe(e,function(e){void 0===e.getAttribute("data-val")&&e.setAttribute("data-val",e.innerText)})}}]),e}();dn.init=function(e){return new dn(e)};var vn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn=new Ve;return mn.version="1.0.0",mn.initModules(dn,document.querySelector(".J-sc-hd-m-beaconnav"),vn({},window.HEADER_DATA["sc-header-config"]["beacon-config"])),mn}();