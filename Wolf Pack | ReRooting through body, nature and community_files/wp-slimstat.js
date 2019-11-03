var SlimStat={base64_key_str:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-",fingerprint_hash:"",utf8_encode:function(e){var t,a,n="";for(e=e.replace(/\r\n/g,"\n"),t=0;t<e.length;t++)(a=e.charCodeAt(t))<128?n+=String.fromCharCode(a):(127<a&&a<2048?n+=String.fromCharCode(a>>6|192):(n+=String.fromCharCode(a>>12|224),n+=String.fromCharCode(a>>6&63|128)),n+=String.fromCharCode(63&a|128));return n},base64_encode:function(e){var t,a,n,r,i,o,s,l="",d=0;for(e=SlimStat.utf8_encode(e);d<e.length;)r=(t=e.charCodeAt(d++))>>2,i=(3&t)<<4|(a=e.charCodeAt(d++))>>4,o=(15&a)<<2|(n=e.charCodeAt(d++))>>6,s=63&n,isNaN(a)?o=s=64:isNaN(n)&&(s=64),l=l+SlimStat.base64_key_str.charAt(r)+SlimStat.base64_key_str.charAt(i)+SlimStat.base64_key_str.charAt(o)+SlimStat.base64_key_str.charAt(s);return l},get_page_performance:function(){return slim_performance=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},void 0===slim_performance.timing?0:slim_performance.timing.loadEventEnd-slim_performance.timing.responseEnd},get_server_latency:function(){return slim_performance=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},void 0===slim_performance.timing?0:slim_performance.timing.responseEnd-slim_performance.timing.connectEnd},optout:function(e,t){e.preventDefault(),"string"==typeof SlimStatParams.baseurl&&0!=SlimStatParams.baseurl.length||(SlimStatParams.baseurl="/"),expiration=new Date,expiration.setTime(expiration.getTime()+31536e6),document.cookie="slimstat_optout_tracking="+t+";path="+SlimStatParams.baseurl+";expires="+expiration.toGMTString(),e.target.parentNode.parentNode.removeChild(e.target.parentNode)},show_optout_message:function(){opt_out_cookies=SlimStat.empty(SlimStatParams.oc)?[]:SlimStatParams.oc.split(","),Array.isArray(opt_out_cookies)||(opt_out_cookies=[]),show_optout=0<opt_out_cookies.length;for(var e=0;e<opt_out_cookies.length;e++)""!=SlimStat.get_cookie(opt_out_cookies[e])&&(show_optout=!1);if(show_optout){try{xhr=new XMLHttpRequest}catch(e){return!1}if("object"==typeof xhr)return xhr.open("POST",SlimStatParams.ajaxurl,!0),xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.withCredentials=!0,xhr.send("action=slimstat_optout_html"),xhr.onreadystatechange=function(){4==xhr.readyState&&document.body.insertAdjacentHTML("beforeend",xhr.responseText)},!0}},add_event:function(e,t,a){e&&e.addEventListener?e.addEventListener(t,a,!1):e&&e.attachEvent?(e["e"+t+a]=a,e[t+a]=function(){e["e"+t+a](window.event)},e.attachEvent("on"+t,e[t+a])):e["on"+t]=e["e"+t+a]},in_array:function(e,t){for(var a=0;a<t.length;a++)if(-1!=e.indexOf(t[a].trim()))return!0;return!1},empty:function(e){return void 0===e||null==e||("number"==typeof e?0==e:"boolean"==typeof e?!e:"string"!=typeof e&&"object"!=typeof e||0==e.length)},get_cookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return 2==t.length?t.pop().split(";").shift():""},send_to_server:function(e,t){if(SlimStat.empty(SlimStatParams.ajaxurl)||SlimStat.empty(e))return!1;if(void 0===t&&(t=!0),t&&navigator.sendBeacon)navigator.sendBeacon(SlimStatParams.ajaxurl,e);else{try{xhr=new XMLHttpRequest}catch(e){return!1}if("object"==typeof xhr)return xhr.open("POST",SlimStatParams.ajaxurl,!0),xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.withCredentials=!0,xhr.send(e),xhr.onreadystatechange=function(){4==xhr.readyState&&(parsed_id=parseInt(xhr.responseText),!isNaN(parsed_id)&&0<parsed_id&&(SlimStatParams.id=xhr.responseText))},!0}return!1},ss_track:function(e,t){if(SlimStat.empty(SlimStatParams.id)||isNaN(parseInt(SlimStatParams.id))||parseInt(SlimStatParams.id)<=0)return!1;if(note_array=[],SlimStat.empty(e)||note_array.push(e),void 0===t&&(t=!0),SlimStat.empty(window.event))return!1;if(SlimStat.empty(window.event.target)){if(SlimStat.empty(window.event.srcElement))return!1;target_node=window.event.srcElement}else target_node=window.event.target;var a="",n="";if(SlimStat.empty(window.event.type)||"focus"==window.event.type)return!1;switch(note_array.push("Type:"+window.event.type),"keypress"==window.event.type?note_array.push("Keypress:"+String.fromCharCode(parseInt(window.event.which))):"click"==window.event.type&&note_array.push("Button:"+(1==window.event.which?"left":2==window.event.which?"middle":"right")),target_node.nodeName.toLowerCase()){case"input":case"button":for(;!SlimStat.empty(target_node)&&!SlimStat.empty(target_node.nodeName)&&"form"!=target_node.nodeName.toLowerCase();)target_node=target_node.parentNode;SlimStat.empty(target_node)||SlimStat.empty(target_node.action)||(a=target_node.action);break;default:if(SlimStat.empty(target_node.href)||"string"!=typeof target_node.href){for(parent_node=target_node.parentNode;!SlimStat.empty(parent_node)&&!SlimStat.empty(parent_node.nodeName)&&SlimStat.empty(parent_node.href);)parent_node=parent_node.parentNode;SlimStat.empty(parent_node)||(SlimStat.empty(parent_node.hash)||parent_node.hostname!=location.hostname?SlimStat.empty(parent_node.href)||(a=parent_node.href):a=parent_node.hash,"function"==typeof parent_node.getAttribute&&(SlimStat.empty(parent_node.getAttribute("title"))||note_array.push("Parent Title:"+parent_node.getAttribute("title")),SlimStat.empty(parent_node.getAttribute("id"))||note_array.push("Parent ID:"+parent_node.getAttribute("id"))))}else a=SlimStat.empty(target_node.hash)?target_node.href:target_node.hash;"function"==typeof target_node.getAttribute&&(SlimStat.empty(target_node.getAttribute("title"))||note_array.push("Title:"+target_node.getAttribute("title")),SlimStat.empty(target_node.getAttribute("id"))||note_array.push("ID:"+target_node.getAttribute("id")))}if(do_not_track=SlimStat.empty(SlimStatParams.dnt)?[]:SlimStatParams.dnt.split(","),!SlimStat.empty(a)){if(!SlimStat.empty(do_not_track)&&SlimStat.in_array(a,do_not_track))return!1;n="&fh="+SlimStat.fingerprint_hash}return target_classes=SlimStat.empty(target_node.className)||"string"!=typeof target_node.className?[]:target_node.className.split(" "),!!(SlimStat.empty(do_not_track)||SlimStat.empty(target_classes)||0==target_classes.filter(function(e){return-1!==do_not_track.indexOf(e)}).length&&(SlimStat.empty(target_node.attributes)||SlimStat.empty(target_node.attributes.rel)||SlimStat.empty(target_node.attributes.rel.value)||!SlimStat.in_array(target_node.attributes.rel.value,do_not_track)))&&(position="0,0",SlimStat.empty(window.event.pageX)||SlimStat.empty(window.event.pageY)?SlimStat.empty(window.event.clientX)||SlimStat.empty(document.body.scrollLeft)||SlimStat.empty(document.documentElement.scrollLeft)||(position=window.event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft+","+window.event.clientY+document.body.scrollTop+document.documentElement.scrollTop):position=window.event.pageX+","+window.event.pageY,SlimStat.send_to_server("action=slimtrack&id="+SlimStatParams.id+"&res="+SlimStat.base64_encode(a)+"&pos="+position+"&no="+SlimStat.base64_encode(note_array.join(","))+n,t),!0)},get_slimstat_data:function(e){return screenres=SlimStat.get_component_value(e,"screenResolution",[0,0]),"&sw="+screenres[0]+"&sh="+screenres[1]+"&bw="+window.innerWidth+"&bh="+window.innerHeight+"&sl="+SlimStat.get_server_latency()+"&pp="+SlimStat.get_page_performance()+"&fh="+SlimStat.fingerprint_hash+"&tz="+SlimStat.get_component_value(e,"timezoneOffset",0)},get_component_value:function(e,t,a){for(x=0;x<e.length;x++)if(e[x].key===t)return e[x].value;return a},init_fingerprint_hash:function(e){values=e.map(function(e){return e.value}),SlimStat.fingerprint_hash=Fingerprint2.x64hash128(values.join(""),31)}};"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),SlimStat.add_event(window,"load",function(){if(slimstat_data="",use_beacon=!0,!SlimStat.empty(SlimStatParams.id)&&0<parseInt(SlimStatParams.id)?slimstat_data="action=slimtrack&id="+SlimStatParams.id:(slimstat_data="action=slimtrack&ref="+SlimStat.base64_encode(document.referrer)+"&res="+SlimStat.base64_encode(window.location.href),SlimStat.empty(SlimStatParams.ci)||(slimstat_data+="&ci="+SlimStatParams.ci),use_beacon=!1),0<slimstat_data.length){window.requestIdleCallback?requestIdleCallback(function(){Fingerprint2.get(function(e){SlimStat.init_fingerprint_hash(e),SlimStat.send_to_server(slimstat_data+SlimStat.get_slimstat_data(e),use_beacon),SlimStat.show_optout_message()})}):setTimeout(function(){Fingerprint2.get(function(e){SlimStat.init_fingerprint_hash(e),SlimStat.send_to_server(slimstat_data+SlimStat.get_slimstat_data(e),use_beacon),SlimStat.show_optout_message()})},250)}all_clickable=document.querySelectorAll("a,button,input,area");for(var e=0;e<all_clickable.length;e++)SlimStat.add_event(all_clickable[e],"click",function(e){SlimStat.ss_track()})}),SlimStat.add_event(window,"beforeunload",function(){!SlimStat.empty(document.activeElement)&&!SlimStat.empty(document.activeElement.nodeName)&&"body"==document.activeElement.nodeName.toLowerCase()&&!SlimStat.empty(SlimStatParams.id)&&0<parseInt(SlimStatParams.id)&&SlimStat.send_to_server("action=slimtrack&id="+SlimStatParams.id,!0)}),function(e,t,a){"use strict";"undefined"!=typeof window&&"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&module.exports?module.exports=a():t.exports?t.exports=a():t.Fingerprint2=a()}(0,this,function(){"use strict";function u(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]+t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]+t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]+t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]+t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]}function m(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]*t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]*t[3],a[1]+=a[2]>>>16,a[2]&=65535,a[2]+=e[3]*t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]*t[3],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[2]*t[2],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[3]*t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]}function g(e,t){return 32==(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function f(e,t){return 0==(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function p(e,t){return[e[0]^t[0],e[1]^t[1]]}function h(e){return e=p(e,[0,e[0]>>>1]),e=m(e,[4283543511,3981806797]),e=p(e,[0,e[0]>>>1]),e=m(e,[3301882366,444984403]),p(e,[0,e[0]>>>1])}function s(e,t){t=t||0;for(var a=(e=e||"").length%16,n=e.length-a,r=[0,t],i=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],d=[1291169091,658871167],c=0;c<n;c+=16)o=[255&e.charCodeAt(c+4)|(255&e.charCodeAt(c+5))<<8|(255&e.charCodeAt(c+6))<<16|(255&e.charCodeAt(c+7))<<24,255&e.charCodeAt(c)|(255&e.charCodeAt(c+1))<<8|(255&e.charCodeAt(c+2))<<16|(255&e.charCodeAt(c+3))<<24],s=[255&e.charCodeAt(c+12)|(255&e.charCodeAt(c+13))<<8|(255&e.charCodeAt(c+14))<<16|(255&e.charCodeAt(c+15))<<24,255&e.charCodeAt(c+8)|(255&e.charCodeAt(c+9))<<8|(255&e.charCodeAt(c+10))<<16|(255&e.charCodeAt(c+11))<<24],o=m(o,l),o=g(o,31),o=m(o,d),r=p(r,o),r=g(r,27),r=u(r,i),r=u(m(r,[0,5]),[0,1390208809]),s=m(s,d),s=g(s,33),s=m(s,l),i=p(i,s),i=g(i,31),i=u(i,r),i=u(m(i,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],a){case 15:s=p(s,f([0,e.charCodeAt(c+14)],48));case 14:s=p(s,f([0,e.charCodeAt(c+13)],40));case 13:s=p(s,f([0,e.charCodeAt(c+12)],32));case 12:s=p(s,f([0,e.charCodeAt(c+11)],24));case 11:s=p(s,f([0,e.charCodeAt(c+10)],16));case 10:s=p(s,f([0,e.charCodeAt(c+9)],8));case 9:s=p(s,[0,e.charCodeAt(c+8)]),s=m(s,d),s=g(s,33),s=m(s,l),i=p(i,s);case 8:o=p(o,f([0,e.charCodeAt(c+7)],56));case 7:o=p(o,f([0,e.charCodeAt(c+6)],48));case 6:o=p(o,f([0,e.charCodeAt(c+5)],40));case 5:o=p(o,f([0,e.charCodeAt(c+4)],32));case 4:o=p(o,f([0,e.charCodeAt(c+3)],24));case 3:o=p(o,f([0,e.charCodeAt(c+2)],16));case 2:o=p(o,f([0,e.charCodeAt(c+1)],8));case 1:o=p(o,[0,e.charCodeAt(c)]),o=m(o,l),o=g(o,31),o=m(o,d),r=p(r,o)}return r=p(r,[0,e.length]),i=p(i,[0,e.length]),r=u(r,i),i=u(i,r),r=h(r),i=h(i),r=u(r,i),i=u(i,r),("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}function d(e,t){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t);else if(e.length===+e.length)for(var a=0,n=e.length;a<n;a++)t(e[a],a,e);else for(var r in e)e.hasOwnProperty(r)&&t(e[r],r,e)}function l(e,n){var r=[];return null==e?r:Array.prototype.map&&e.map===Array.prototype.map?e.map(n):(d(e,function(e,t,a){r.push(n(e,t,a))}),r)}function a(e){if(null==navigator.plugins)return e.NOT_AVAILABLE;for(var t=[],a=0,n=navigator.plugins.length;a<n;a++)navigator.plugins[a]&&t.push(navigator.plugins[a]);return i(e)&&(t=t.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),l(t,function(e){var t=l(e,function(e){return[e.type,e.suffixes]});return[e.name,e.description,t]})}function n(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}function r(){if(!n())return!1;var e=S();return!!window.WebGLRenderingContext&&!!e}function c(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")}var e={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"},i=function(e){for(var t=!1,a=0,n=e.plugins.sortPluginsFor.length;a<n;a++){var r=e.plugins.sortPluginsFor[a];if(navigator.userAgent.match(r)){t=!0;break}}return t},S=function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t=t||null},t=[{key:"userAgent",getData:function(e){e(navigator.userAgent)}},{key:"webdriver",getData:function(e,t){e(null==navigator.webdriver?t.NOT_AVAILABLE:navigator.webdriver)}},{key:"language",getData:function(e,t){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||t.NOT_AVAILABLE)}},{key:"colorDepth",getData:function(e,t){e(window.screen.colorDepth||t.NOT_AVAILABLE)}},{key:"deviceMemory",getData:function(e,t){e(navigator.deviceMemory||t.NOT_AVAILABLE)}},{key:"pixelRatio",getData:function(e,t){e(window.devicePixelRatio||t.NOT_AVAILABLE)}},{key:"hardwareConcurrency",getData:function(e,t){e(function(e){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:e.NOT_AVAILABLE}(t))}},{key:"screenResolution",getData:function(e,t){e(function(e){var t=[window.screen.width,window.screen.height];return e.screen.detectScreenOrientation&&t.sort().reverse(),t}(t))}},{key:"availableScreenResolution",getData:function(e,t){e(function(e){if(window.screen.availWidth&&window.screen.availHeight){var t=[window.screen.availHeight,window.screen.availWidth];return e.screen.detectScreenOrientation&&t.sort().reverse(),t}return e.NOT_AVAILABLE}(t))}},{key:"timezoneOffset",getData:function(e){e((new Date).getTimezoneOffset())}},{key:"timezone",getData:function(e,t){window.Intl&&window.Intl.DateTimeFormat?e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone):e(t.NOT_AVAILABLE)}},{key:"sessionStorage",getData:function(e,t){e(function(t){try{return!!window.sessionStorage}catch(e){return t.ERROR}}(t))}},{key:"localStorage",getData:function(e,t){e(function(t){try{return!!window.localStorage}catch(e){return t.ERROR}}(t))}},{key:"indexedDb",getData:function(e,t){e(function(t){try{return!!window.indexedDB}catch(e){return t.ERROR}}(t))}},{key:"addBehavior",getData:function(e){e(!(!document.body||!document.body.addBehavior))}},{key:"openDatabase",getData:function(e){e(!!window.openDatabase)}},{key:"cpuClass",getData:function(e,t){e(function(e){return navigator.cpuClass||e.NOT_AVAILABLE}(t))}},{key:"platform",getData:function(e,t){e(function(e){return navigator.platform?navigator.platform:e.NOT_AVAILABLE}(t))}},{key:"doNotTrack",getData:function(e,t){e(function(e){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:e.NOT_AVAILABLE}(t))}},{key:"plugins",getData:function(e,t){"Microsoft Internet Explorer"===navigator.appName||"Netscape"===navigator.appName&&/Trident/.test(navigator.userAgent)?t.plugins.excludeIE?e(t.EXCLUDED):e(function(t){var e=[];return Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window?e=l(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],function(e){try{return new window.ActiveXObject(e),e}catch(e){return t.ERROR}}):e.push(t.NOT_AVAILABLE),navigator.plugins&&(e=e.concat(a(t))),e}(t)):e(a(t))}},{key:"canvas",getData:function(e,t){n()?e(function(e){var t=[],a=document.createElement("canvas");a.width=2e3,a.height=200,a.style.display="inline";var n=a.getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),t.push("canvas winding:"+(!1===n.isPointInPath(5,5,"evenodd")?"yes":"no")),n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",e.dontUseFakeFontInCanvas?n.font="11pt Arial":n.font="11pt no-real-font-123",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),n.globalCompositeOperation="multiply",n.fillStyle="rgb(255,0,255)",n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(0,255,255)",n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,255,0)",n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,0,255)",n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill("evenodd"),a.toDataURL&&t.push("canvas fp:"+a.toDataURL()),t}(t)):e(t.NOT_AVAILABLE)}},{key:"webgl",getData:function(e,t){r()?e(function(){function e(e){return o.clearColor(0,0,0,1),o.enable(o.DEPTH_TEST),o.depthFunc(o.LEQUAL),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),"["+e[0]+", "+e[1]+"]"}var o;if(!(o=S()))return null;var s=[],t=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,t);var a=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);o.bufferData(o.ARRAY_BUFFER,a,o.STATIC_DRAW),t.itemSize=3,t.numItems=3;var n=o.createProgram(),r=o.createShader(o.VERTEX_SHADER);o.shaderSource(r,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),o.compileShader(r);var i=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(i,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),o.compileShader(i),o.attachShader(n,r),o.attachShader(n,i),o.linkProgram(n),o.useProgram(n),n.vertexPosAttrib=o.getAttribLocation(n,"attrVertex"),n.offsetUniform=o.getUniformLocation(n,"uniformOffset"),o.enableVertexAttribArray(n.vertexPosArray),o.vertexAttribPointer(n.vertexPosAttrib,t.itemSize,o.FLOAT,!1,0,0),o.uniform2f(n.offsetUniform,1,1),o.drawArrays(o.TRIANGLE_STRIP,0,t.numItems);try{s.push(o.canvas.toDataURL())}catch(e){}s.push("extensions:"+(o.getSupportedExtensions()||[]).join(";")),s.push("webgl aliased line width range:"+e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE))),s.push("webgl aliased point size range:"+e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE))),s.push("webgl alpha bits:"+o.getParameter(o.ALPHA_BITS)),s.push("webgl antialiasing:"+(o.getContextAttributes().antialias?"yes":"no")),s.push("webgl blue bits:"+o.getParameter(o.BLUE_BITS)),s.push("webgl depth bits:"+o.getParameter(o.DEPTH_BITS)),s.push("webgl green bits:"+o.getParameter(o.GREEN_BITS)),s.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var a=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===a&&(a=2),a}return null}(o)),s.push("webgl max combined texture image units:"+o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),s.push("webgl max cube map texture size:"+o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE)),s.push("webgl max fragment uniform vectors:"+o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS)),s.push("webgl max render buffer size:"+o.getParameter(o.MAX_RENDERBUFFER_SIZE)),s.push("webgl max texture image units:"+o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS)),s.push("webgl max texture size:"+o.getParameter(o.MAX_TEXTURE_SIZE)),s.push("webgl max varying vectors:"+o.getParameter(o.MAX_VARYING_VECTORS)),s.push("webgl max vertex attribs:"+o.getParameter(o.MAX_VERTEX_ATTRIBS)),s.push("webgl max vertex texture image units:"+o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),s.push("webgl max vertex uniform vectors:"+o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS)),s.push("webgl max viewport dims:"+e(o.getParameter(o.MAX_VIEWPORT_DIMS))),s.push("webgl red bits:"+o.getParameter(o.RED_BITS)),s.push("webgl renderer:"+o.getParameter(o.RENDERER)),s.push("webgl shading language version:"+o.getParameter(o.SHADING_LANGUAGE_VERSION)),s.push("webgl stencil bits:"+o.getParameter(o.STENCIL_BITS)),s.push("webgl vendor:"+o.getParameter(o.VENDOR)),s.push("webgl version:"+o.getParameter(o.VERSION));try{var l=o.getExtension("WEBGL_debug_renderer_info");l&&(s.push("webgl unmasked vendor:"+o.getParameter(l.UNMASKED_VENDOR_WEBGL)),s.push("webgl unmasked renderer:"+o.getParameter(l.UNMASKED_RENDERER_WEBGL)))}catch(e){}return o.getShaderPrecisionFormat&&d(["FLOAT","INT"],function(i){d(["VERTEX","FRAGMENT"],function(r){d(["HIGH","MEDIUM","LOW"],function(n){d(["precision","rangeMin","rangeMax"],function(e){var t=o.getShaderPrecisionFormat(o[r+"_SHADER"],o[n+"_"+i])[e];"precision"!==e&&(e="precision "+e);var a=["webgl ",r.toLowerCase()," shader ",n.toLowerCase()," ",i.toLowerCase()," ",e,":",t].join("");s.push(a)})})})}),s}()):e(t.NOT_AVAILABLE)}},{key:"webglVendorAndRenderer",getData:function(e){r()?e(function(){try{var e=S(),t=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL)}catch(e){return null}}()):e()}},{key:"adBlock",getData:function(e){e(function(){var e=document.createElement("div");e.innerHTML="&nbsp;";var t=!(e.className="adsbox");try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t}())}},{key:"hasLiedLanguages",getData:function(e){e(function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1}())}},{key:"hasLiedResolution",getData:function(e){e(window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight)}},{key:"hasLiedOs",getData:function(e){e(function(){var e,t=navigator.userAgent.toLowerCase(),a=navigator.oscpu,n=navigator.platform.toLowerCase();if(e=0<=t.indexOf("windows phone")?"Windows Phone":0<=t.indexOf("win")?"Windows":0<=t.indexOf("android")?"Android":0<=t.indexOf("linux")||0<=t.indexOf("cros")?"Linux":0<=t.indexOf("iphone")||0<=t.indexOf("ipad")?"iOS":0<=t.indexOf("mac")?"Mac":"Other",("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&"Windows Phone"!=e&&"Android"!=e&&"iOS"!=e&&"Other"!=e)return!0;if(void 0!==a){if(0<=(a=a.toLowerCase()).indexOf("win")&&"Windows"!=e&&"Windows Phone"!=e)return!0;if(0<=a.indexOf("linux")&&"Linux"!=e&&"Android"!=e)return!0;if(0<=a.indexOf("mac")&&"Mac"!=e&&"iOS"!=e)return!0;if((-1===a.indexOf("win")&&-1===a.indexOf("linux")&&-1===a.indexOf("mac"))!=("Other"==e))return!0}return 0<=n.indexOf("win")&&"Windows"!=e&&"Windows Phone"!=e||(0<=n.indexOf("linux")||0<=n.indexOf("android")||0<=n.indexOf("pike"))&&"Linux"!=e&&"Android"!=e||(0<=n.indexOf("mac")||0<=n.indexOf("ipad")||0<=n.indexOf("ipod")||0<=n.indexOf("iphone"))&&"Mac"!=e&&"iOS"!=e||(n.indexOf("win")<0&&n.indexOf("linux")<0&&n.indexOf("mac")<0&&n.indexOf("iphone")<0&&n.indexOf("ipad")<0)!=("Other"==e)||void 0===navigator.plugins&&"Windows"!=e&&"Windows Phone"!=e}())}},{key:"hasLiedBrowser",getData:function(e){e(function(){var e,t=navigator.userAgent.toLowerCase(),a=navigator.productSub;if(("Chrome"==(e=0<=t.indexOf("firefox")?"Firefox":0<=t.indexOf("opera")||0<=t.indexOf("opr")?"Opera":0<=t.indexOf("chrome")?"Chrome":0<=t.indexOf("safari")?"Safari":0<=t.indexOf("trident")?"Internet Explorer":"Other")||"Safari"==e||"Opera"==e)&&"20030107"!==a)return!0;var n,r=eval.toString().length;if(37===r&&"Safari"!=e&&"Firefox"!=e&&"Other"!=e)return!0;if(39===r&&"Internet Explorer"!=e&&"Other"!=e)return!0;if(33===r&&"Chrome"!=e&&"Opera"!=e&&"Other"!=e)return!0;try{throw"a"}catch(e){try{e.toSource(),n=!0}catch(e){n=!1}}return n&&"Firefox"!=e&&"Other"!=e}())}},{key:"touchSupport",getData:function(e){e(function(){var e,t=0;void 0!==navigator.maxTouchPoints?t=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(t=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(t){e=!1}return[t,e,"ontouchstart"in window]}())}},{key:"fonts",getData:function(e,t){var c=["monospace","sans-serif","serif"],u=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];t.fonts.extendedJsFonts&&(u=u.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"])),u=(u=u.concat(t.fonts.userDefinedFonts)).filter(function(e,t){return u.indexOf(e)===t});function m(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e}function a(e){for(var t=!1,a=0;a<c.length;a++)if(t=e[a].offsetWidth!==i[c[a]]||e[a].offsetHeight!==o[c[a]])return t;return t}var n=document.getElementsByTagName("body")[0],r=document.createElement("div"),g=document.createElement("div"),i={},o={},s=function(){for(var e=[],t=0,a=c.length;t<a;t++){var n=m();n.style.fontFamily=c[t],r.appendChild(n),e.push(n)}return e}();n.appendChild(r);for(var l=0,d=c.length;l<d;l++)i[c[l]]=s[l].offsetWidth,o[c[l]]=s[l].offsetHeight;var f=function(){for(var e,t,a,n={},r=0,i=u.length;r<i;r++){for(var o=[],s=0,l=c.length;s<l;s++){var d=(e=u[r],t=c[s],a=void 0,(a=m()).style.fontFamily="'"+e+"',"+t,a);g.appendChild(d),o.push(d)}n[u[r]]=o}return n}();n.appendChild(g);for(var p=[],h=0,S=u.length;h<S;h++)a(f[u[h]])&&p.push(u[h]);n.removeChild(g),n.removeChild(r),e(p)},pauseBefore:!0},{key:"fontsFlash",getData:function(t,e){return void 0!==window.swfobject?window.swfobject.hasFlashPlayerVersion("9.0.0")?e.fonts.swfPath?void function(t,e){var a="___fp_swf_loaded";window[a]=function(e){t(e)};var n,r=e.fonts.swfContainerId;(n=document.createElement("div")).setAttribute("id",(void 0).fonts.swfContainerId),document.body.appendChild(n);var i={onReady:a};window.swfobject.embedSWF(e.fonts.swfPath,r,"1","1","9.0.0",!1,i,{allowScriptAccess:"always",menu:"false"},{})}(function(e){t(e)},e):t("missing options.fonts.swfPath"):t("flash not installed"):t("swf object not loaded")},pauseBefore:!0},{key:"audio",getData:function(a,e){var t=e.audio;if(t.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))return a(e.EXCLUDED);var n=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(null==n)return a(e.NOT_AVAILABLE);var r=new n(1,44100,44100),i=r.createOscillator();i.type="triangle",i.frequency.setValueAtTime(1e4,r.currentTime);var o=r.createDynamicsCompressor();d([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(e){void 0!==o[e[0]]&&"function"==typeof o[e[0]].setValueAtTime&&o[e[0]].setValueAtTime(e[1],r.currentTime)}),i.connect(o),o.connect(r.destination),i.start(0),r.startRendering();var s=setTimeout(function(){return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "'+navigator.userAgent+'".'),r.oncomplete=function(){},r=null,a("audioTimeout")},t.timeout);r.oncomplete=function(e){var t;try{clearTimeout(s),t=e.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(e,t){return e+Math.abs(t)},0).toString(),i.disconnect(),o.disconnect()}catch(e){return void a(e)}a(t)}}},{key:"enumerateDevices",getData:function(t,e){if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices)return t(e.NOT_AVAILABLE);navigator.mediaDevices.enumerateDevices().then(function(e){t(e.map(function(e){return"id="+e.deviceId+";gid="+e.groupId+";"+e.kind+";"+e.label}))}).catch(function(e){t(e)})}}];return c.get=function(a,n){(function(e,t){var a,n;if(null!=t)for(n in t)null==(a=t[n])||Object.prototype.hasOwnProperty.call(e,n)||(e[n]=a)})(a=n?a||{}:(n=a,{}),e),a.components=a.extraComponents.concat(t);var r={data:[],addPreprocessedComponent:function(e,t){"function"==typeof a.preprocessor&&(t=a.preprocessor(e,t)),r.data.push({key:e,value:t})}},i=-1,o=function(e){if((i+=1)>=a.components.length)n(r.data);else{var t=a.components[i];if(a.excludes[t.key])o(!1);else{if(!e&&t.pauseBefore)return i-=1,void setTimeout(function(){o(!0)},1);try{t.getData(function(e){r.addPreprocessedComponent(t.key,e),o(!1)},a)}catch(e){r.addPreprocessedComponent(t.key,String(e)),o(!1)}}}};o(!1)},c.getPromise=function(a){return new Promise(function(e,t){c.get(a,e)})},c.getV18=function(i,o){return null==o&&(o=i,i={}),c.get(i,function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];if(n.value===(i.NOT_AVAILABLE||"not available"))t.push({key:n.key,value:"unknown"});else if("plugins"===n.key)t.push({key:"plugins",value:l(n.value,function(e){var t=l(e[2],function(e){return e.join?e.join("~"):e}).join(",");return[e[0],e[1],t].join("::")})});else if(-1!==["canvas","webgl"].indexOf(n.key))t.push({key:n.key,value:n.value.join("~")});else if(-1!==["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(n.key)){if(!n.value)continue;t.push({key:n.key,value:1})}else n.value?t.push(n.value.join?{key:n.key,value:n.value.join(";")}:n):t.push({key:n.key,value:n.value})}var r=s(l(t,function(e){return e.value}).join("~~~"),31);o(r,t)})},c.x64hash128=s,c.VERSION="2.1.0",c});