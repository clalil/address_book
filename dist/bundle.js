!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var i=window.localStorage,o=function(){var e=JSON.parse(i.getItem("contacts")),n=document.querySelector("#contact-list");e?(n.innerHTML="",e.forEach((function(e){var t=document.createElement("div");t.innerHTML='\n  <div class="ui column">\n        <div class="ui card">\n            <div class="image"><img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg"></div>\n          <div class="content">\n            <h3>'+e.name+'</h3>\n            <div class="description">\n              <p>'+e.notes+'</p>    \n              <p class="company"><i class="briefcase icon"></i>'+e.company+'</p>\n            </div>\n          </div>\n          <div class="extra content">\n            <p><i class="phone icon"></i>'+e.phone+'</p>\n            <p><i class="mail icon"></i>'+e.email+'</p>\n            <p><i class="twitter icon"></i><a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a></p>\n          </div>\n        </div>\n  </div>\n",n.appendChild(t)}))):n.innerHTML="<p>You haven't added any contacts yet.</p>"};document.addEventListener("DOMContentLoaded",(function(){o();var e=document.querySelector("#new-contact-form");e.addEventListener("submit",(function(n){n.preventDefault();var t=e.elements,r=t.name,a=t.email,c=t.phone,s=t.company,l=t.notes,u=t.twitter,d={id:Date.now(),name:r.value,email:a.value,phone:c.value,company:s.value,notes:l.value,twitter:u.value};console.log("Saving the following contact: "+JSON.stringify(d));var p=JSON.parse(i.getItem("contacts"))||[];p.push(d),i.setItem("contacts",JSON.stringify(p)),o(),e.reset()}))}))}]);