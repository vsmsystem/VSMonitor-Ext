/*
setInterval(function(){
	if(document.getElementById('j_idt29:login_erro')){
		if(document.getElementById('j_idt29:login_erro').innerText=="" 
		&& document.getElementById('j_idt29:login').value.length>4 
		&& document.getElementById('j_idt29:senha').value.length>4)
		{

			//document.body.click();
			//document.getElementById('j_idt29:login').focus();
			//document.getElementById('j_idt29:botao_entrar').click();
			//document.getElementById('j_idt29').submit();
			
		}else
		{
			//document.getElementById('j_idt29:login').click();
			//document.getElementById('j_idt29:botao_entrar').click();
			//document.getElementById('j_idt29').submit();
			//console.log('blank')
			//document.body.click();
			//document.body.click();
		}
	}
},1000)
*/

function indexteste(){
	//$('#j_idt29\\:login').val()
	var senha = $('#j_idt29\\:senha').val()
	//$('input[name|="j_idt29"]').val()
	var view = $('#javax\\.faces\\.ViewState').val()
	
	var url = "http://mbuservices.gvt.net.br/spmweb/index.xhtml";
	var request = jQuery.ajax({
		url:        url,
		dataType:   "text",
		type:       "get",

	});                
	request.done(function(){console.log('Sucesso')});
	request.fail(function(xhr, status, errorThrown){console.log(xhr+' - '+status+' - '+errorThrown)});
	request.always(function(){
		//console.log(request.responseText);
		if(request.responseText.length<3){console.log('deslogado')}else{
			console.log('Passo1!')
			
			resposta = request.responseText;
			tempDiv = jQuery('<div>').html(resposta);
			raw = jQuery('<div>').html(resposta);
			jQuery(tempDiv).find("script").remove();
			jQuery(tempDiv).find("link").remove();
			jQuery(tempDiv).find("style").remove();
			

		}
		
		});
}


function testegestor(){
	//$('#j_idt29\\:login').val()
	var senha = $('#j_idt29\\:senha').val()
	//$('input[name|="j_idt29"]').val()
	var view = $('#javax\\.faces\\.ViewState').val()
	
	var url = "http://mbuservices.gvt.net.br/spmweb/pages/geral.xhtml";
	var request = jQuery.ajax({
		url:        url,
		dataType:   "text",
		type:       "post",
		data: {
			"j_idt29":"j_idt29",
			"javax.faces.ViewState":view,
			"j_idt29:login":"G0056638",
			"j_idt29:senha":senha,
			"j_idt29:botao_entrar":""
		}
	});                
	request.done(function(){console.log('Sucesso')});
	request.fail(function(xhr, status, errorThrown){console.log(xhr+' - '+status+' - '+errorThrown)});
	request.always(function(){
		//console.log(request.responseText);
		if(request.responseText.length<300){console.log('deslogado')}else{
			console.log('Passo1!')
			
			resposta = request.responseText;
			tempDiv = jQuery('<div>').html(resposta);
			raw = jQuery('<div>').html(resposta);
			jQuery(tempDiv).find("script").remove();
			jQuery(tempDiv).find("link").remove();
			jQuery(tempDiv).find("style").remove();
			
			theinput = jQuery(tempDiv).find("input")
			var ctr = theinput.length
			for(lc=0;lc<ctr;lc++){
				console.log(theinput[lc].value);
				
			}
		}
		
		});
}








function testegestor2(view){
	//$('#j_idt29\\:login').val()
	//var senha = $('#j_idt29\\:senha').val()
	//$('input[name|="j_idt29"]').val()
	//var view = $('#javax\\.faces\\.ViewState').val()
	
	var url = "http://mbuservices.gvt.net.br/spmweb/pages/geral.xhtml";
	var request = jQuery.ajax({
		url:        url,
		dataType:   "text",
		type:       "post",
		data: {

			"javax.faces.partial.ajax":"true",
			"javax.faces.source":"tabGestorBloqueio:formConsulta:btonSearch",
			"javax.faces.partial.execute":"@all",
			"javax.faces.partial.render":"tabGestorBloqueio:formConsulta",
			"tabGestorBloqueio:formConsulta:btonSearch":"tabGestorBloqueio:formConsulta:btonSearch",
			"tabGestorBloqueio:formConsulta":"tabGestorBloqueio:formConsulta",
			"javax.faces.ViewState":view,
			"tabGestorBloqueio:formConsulta:txt1":"8430250416"
		}
	});                
	request.done(function(){console.log('Sucesso')});
	request.fail(function(xhr, status, errorThrown){console.log(xhr+' - '+status+' - '+errorThrown)});
	request.always(function(){
		console.log(request.responseText);
		if(request.responseText.length<5){console.log('deslogado')}else{
			console.log('Passo1!')
			console.log(view)
			
			resposta = request.responseText;
			tempDiv = jQuery('<div>').html(resposta);
			raw = jQuery('<div>').html(resposta);
			jQuery(tempDiv).find("script").remove();
			jQuery(tempDiv).find("link").remove();
			jQuery(tempDiv).find("style").remove();
			
			theinput = jQuery(tempDiv).find("input")
			var ctr = theinput.length
			for(lc=0;lc<ctr;lc++){
				console.log(theinput[lc].value);
				
			}
		}
		
		});
}