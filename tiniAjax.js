//Very light ajax lib that replaces jQuery. By Jordan Wambaugh
var Tini={};
Tini.r=function(){try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(e){try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(e){return new XMLHttpRequest()}}};
Tini.s=function(u,f,m,a){var r=Tini.r();r.open(m,u,true);r.onreadystatechange=function(){if(r.readyState==4){f(r.responseText)}};if(m=='POST')r.setRequestHeader('Content-type','application/x-www-form-urlencoded');r.send(a)};
Tini.ajax=function(c){var p="";if(c.data!=undefined){for(var x in c.data){p+=escape(x)+"="+escape(c.data[x])+'&'}}if(c.type=='POST'){Tini.s(c.url,c.success,'POST',p)}else{if(c.url.indexOf('?')==-1)c.url+='?';else c.url+='&';Tini.s(c.url+p,c.success,'GET')}};
