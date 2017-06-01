//Very light ajax lib that replaces jQuery. By Jordan Wambaugh. V1.3 github.com/martamius/tiniAjax
var Tini={};
Tini.r=function(){try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(e){try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(e){return new XMLHttpRequest()}}};
Tini.s=function(u,f,m,a){var r=Tini.r();r.open(m,u,true);r.onreadystatechange=function(){if(r.readyState==4 && f){f(r.responseText)}};if(m=='POST')r.setRequestHeader('Content-type','application/x-www-form-urlencoded');r.send(a)};
Tini.p=function(o,k){var p='';for(var x in o){var d=o[x];var l;if(k!=undefined)l=k+"["+x+"]";else l=x;if(typeof(d)=='object')p+=Tini.p(d,l);else p+=escape(l)+"="+escape(d)+'&'}return p};
Tini.ajax=function(c){var p="";if(c.data!=undefined){p=Tini.p(c.data)}if(c.type.toLowerCase()=='post'){Tini.s(c.url,c.success,'POST',p)}else{if(c.url.indexOf('?')==-1)c.url+='?';else c.url+='&';Tini.s(c.url+p,c.success,'GET')}};
