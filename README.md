tiniAjax
========

*The tini tiny jQuery Ajax replacement*

tiniAjax is an extremely small (less than 1 KB) ajax library designed to mimick jQuery's $.ajax, without the need of the rest of ajax. It is very simple, and only supports the following subset of config params:
* url - The URL to send to
* data	- object containing parameters to send
* type ('POST' or 'GET) - HTTP METHOD to use
* success - function to be executed upon success. This function should expect a string of response data.

Release Notes
-------------

*1.2*

Now performs deep parameterization of *data*, just like jQuery. For example:

	Tini.ajax({
		url:'example.com'
		,data:{
			name:{
				first: 'Jordan'
				,last: 'Wambaugh'
			}
			,age: 29
			,hobbies:["Programming","Guitar","Motorcycles"]
		}
	})

This would get passed to the server as:

	"name%5Bfirst%5D=Jordan&name%5Blast%5D=Wambaugh&age=29&hobbies%5B0%5D=Programming&hobbies%5B1%5D=Guitar&hobbies%5B2%5D=Motorcycles&"

And unescaped:

	name[first]=Jordan&name[last]=Wambaugh&age=29&hobbies[0]=Programming&hobbies[1]=Guitar&hobbies[2]=Motorcycles&


*1.1*

This new version is no longer creates jQuery variables. In order to use as a replacement for jQuery, simply create the *$* and *jQuery* variables yourself and assign them to *Tini*

*1.0*

Initial release


Example:
--------
	var $ = Tini;
	$.ajax({
		url:"http://www.example.com/test"
		,type:'POST'
		,data:{
			name:'Jordan'
			,email:'jordan@example.com'
		}
		,success:function(response){
			alert("response was: "+response);
		}
	
	});

License
-------
Copyright (c) 2012, Jordan CM Wambaugh
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
