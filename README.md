tiniAjax
========

tiniAjax is an extremely small ajax library designed to mimick jQuery's $.ajax, without the need of the rest of ajax. It is very very simple, and only supports the following config params:
* url - The URL to send to
* data	- object containing parameters to send
* type ('POST' or 'GET) - HTTP METHOD to use
* success - function to be executed upon success. This function should expect a string of response data.

Note that this library creates '$' and "jQuery" variables, so is not compatible alongside jQuery. It's designed to replace jQuery in projects that were written to just use jQuery's ajax, and didn't use it for anything else.

Example:
--------

	$.ajax({
		url:"http://www.example.com/test"
		,type:'post'
		,data:{
			name:'Jordan'
			,email:'jordan@example.com'
		}
		,success:function(response){
			alert("response was: "+response);
		}
	
	});
