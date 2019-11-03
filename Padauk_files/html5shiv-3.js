/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
(function(n,t){function p(n,t){var i=n.createElement("p"),r=n.getElementsByTagName("head")[0]||n.documentElement;return i.innerHTML="x<style>"+t+"<\/style>",r.insertBefore(i.lastChild,r.firstChild)}function l(){var n=i.elements;return typeof n=="string"?n.split(" "):n}function w(n,t){var r=i.elements;typeof r!="string"&&(r=r.join(" "));typeof n!="string"&&(n=n.join(" "));i.elements=r+" "+n;s(t)}function o(n){var t=c[n[h]];return t||(t={},e++,n[h]=e,c[e]=t),t}function a(n,i,u){if(i||(i=t),r)return i.createElement(n);u||(u=o(i));var f;return f=u.cache[n]?u.cache[n].cloneNode():y.test(n)?(u.cache[n]=u.createElem(n)).cloneNode():u.createElem(n),f.canHaveChildren&&!v.test(n)&&!f.tagUrn?u.frag.appendChild(f):f}function b(n,i){if(n||(n=t),r)return n.createDocumentFragment();i=i||o(n);for(var f=i.frag.cloneNode(),u=0,e=l(),s=e.length;u<s;u++)f.createElement(e[u]);return f}function k(n,t){t.cache||(t.cache={},t.createElem=n.createElement,t.createFrag=n.createDocumentFragment,t.frag=t.createFrag());n.createElement=function(r){return i.shivMethods?a(r,n,t):t.createElem(r)};n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/[\w\-:]+/g,function(n){return t.createElem(n),t.frag.createElement(n),'c("'+n+'")'})+");return n}")(i,t.frag)}function s(n){n||(n=t);var u=o(n);return!i.shivCSS||f||u.hasCSS||(u.hasCSS=!!p(n,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),r||k(n,u),n}var u=n.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,h="_html5shiv",e=0,c={},r,i;(function(){try{var n=t.createElement("a");n.innerHTML="<xyz><\/xyz>";f="hidden"in n;r=n.childNodes.length==1||function(){t.createElement("a");var n=t.createDocumentFragment();return typeof n.cloneNode=="undefined"||typeof n.createDocumentFragment=="undefined"||typeof n.createElement=="undefined"}()}catch(i){f=!0;r=!0}})();i={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.2",shivCSS:u.shivCSS!==!1,supportsUnknownElements:r,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:b,addElements:w};n.html5=i;s(t)})(this,document);