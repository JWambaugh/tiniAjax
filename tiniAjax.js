//Very light ajax lib that replaces jQuery. By Jordan Wambaugh
var jQuery={};var $=jQuery;
$.x=function(){try{return new ActiveXObject('Msxml2.XMLHTTP')}catch(e){try{return new ActiveXObject('Microsoft.XMLHTTP')}catch(e){return new XMLHttpRequest()}}};
$.send=function(u,f,m,a){var x=$.x();x.open(m,u,true);x.onreadystatechange=function(){if(x.readyState==4){f(x.responseText)}};if(m=='POST')x.setRequestHeader('Content-type','application/x-www-form-urlencoded');x.send(a)};
$.ajax=function(c){var p="";if(c.data!=undefined){for(var x in c.data){p+=escape(x)+"="+escape(c.data[x])+'&'}}if(c.type=='POST'){$.send(c.url,c.success,'POST',p)}else{if(c.url.indexOf('?')==-1)c.url+='?';else c.url+='&';$.send(c.url+p,c.success,'GET')}};