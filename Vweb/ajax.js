
	
//############################################################################
function getSisnum(){
	var qtd = document.getElementsByClassName('field_table').length;
	var arr=document.getElementsByClassName('field_table');

	for(i=0;i<qtd;i++){
		if(arr[i].innerText.indexOf('Registro no Sisnum')>-1){
			var saida = arr[i].innerText;
			console.log('['+i+'] - '+arr[i].innerText);
		}
		
	}
	document.getElementById("testeadicionais").innerHTML=saida;
}
//--------------------------------------
function getFacilidade(){
	var saida = document.getElementsByName('emuladorTelNet')[0].value;
	document.getElementById("testeadicionais").innerHTML='<pre>'+saida+'</pre>';
}
//--------------------------------------
function buscapn(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://pnadmin.gvt.com.br/pn/pn.jsp?numero=4330641172&protocolo=&nequip=&invokeId=&pnId=&submit=GO', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("pTexto="+g+"&pTelefone=&pNome=&pSobreNome=&pMatricula=&pDepartamento=&pCidade=&buscaAvancada=&pArea=&pResultadosPorPagina=20&pagNum=1&servico=buscarColaboradores");
	xhr.responseType = "text";
	xhr.onload = function(){
	  document.getElementById("tela").innerHTML=this.response;
  	  sisnum();

	}
}

function buscaSas(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://gvtapp/sas/configurar?telefoneDMS=4330641172&cmd=consultar&fecha=1', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("pTexto="+g+"&pTelefone=&pNome=&pSobreNome=&pMatricula=&pDepartamento=&pCidade=&buscaAvancada=&pArea=&pResultadosPorPagina=20&pagNum=1&servico=buscarColaboradores");
	xhr.responseType = "text";
	xhr.onload = function(){
	  document.getElementById("tela").innerHTML=this.response;
  	  getFacilidade();

	}
}

function buscaManobra(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://appsagre.gvt.net.br/Manobraunica/main', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("ba=&acao=TEL&telefone=6238777944&x=24&y=13&opcaotelefone=&opcaoBa=");
	xhr.responseType = "text";
	xhr.onload = function(){
	  console.log(this.response);
  	  
	}
}

function buscaWise(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://wisetool.gvt.net.br/wisetool/SmartTools.action', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("redeAcessoVivo1=false&isTecnologiaDTH=false&acao=informacoesSagre&portaIdFxs=&instanciaInformacoesSip=&tipoBridge=&deviceId=&idElemento=&indexElemento=&nomeElemento=&cpeId=&serialNumber=&modemSerialNumber=&action=&dnsReverso=&numIPCliente=&serviceOrderId=&prefixosOnt=ASKY%2CMTSC%2CMSTC%2CPACE%2CSAGE&idSsHistoricoCertificacao=&idBaHistoricoCertificacao=&tipoCertificacao=&defautModulation=VDSL+17A+SUV&defautModulation=null&tipoPesquisa=Instancia&searchValue=2135703564&nmFerramentas=&baCertificar=&modem=&redeSemFio=&nomeModem=&ipMacAddress=&ipMacAddressValue=");
	xhr.responseType = "text";
	xhr.onload = function(){
	  console.log(this.response).replace(/src/gi, "alt");;
  	  document.getElementById('toolnow').innerHTML=this.response;
	}
}
//-------------------------------------------
function msTime(ms){
	  function duas_casas(numero){
		if (numero <= 9){
		  numero = "0"+numero;
		}
		return numero;
	  }
	segundos = duas_casas(parseInt(( ms / 1000 ) % 60));      // se não precisar de segundos, basta remover esta linha.
	minutos  = duas_casas(parseInt(( ms / 60000 ) % 60));     // 60000   = 60 * 1000
	horas    = duas_casas(parseInt(ms / 3600000));            // 3600000 = 60 * 60 * 1000
	resultado = horas+":"+minutos+":"+segundos;
	return resultado;
}

function msTime2(ms){
  function duas_casas(numero){
    if (numero <= 9){
      numero = "0"+numero;
    }
    return numero;
  }
  s=parseInt(ms/1000);
  hora = duas_casas(parseInt(s/3600));
  minuto = duas_casas(parseInt((s%3600)/60));
  segundo = duas_casas((s%3600)%60);
  formatado = hora+":"+minuto+":"+segundo;
  console.log(formatado);
  return formatado;
}


//msTime(new Date().getTime() - start_date);


function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true,
	instancia: ''
  }, function(items) {
    //document.getElementById('color').value = items.favoriteColor;
    //document.getElementById('like').checked = items.likesColor;
	document.getElementById('instancia').value = items.instancia;
  });
}
restore_options();
//=====================================================================

function diagnosticoX(modo,dados){
	if(modo=='request'){
		var instancia=jQuery('#instancia').val();
		blockUI(jQuery('#diagnostico_x'));
		//var instancia="4330641172";
		var url = "http://gvtapp/sas/configurar?telefoneDMS="+instancia+"&cmd=consultar&fecha=1";
		jaxDiag(url,diagnosticoX);
		console.log('jax-request');
	}
	else if(modo=='response'){
		var resposta = dados;
		var tempDiv = jQuery('<div>').html(resposta);
		unblockUI(jQuery('#diagnostico_x'));
		//document.getElementsByClassName('menu_hq')[0].innerText
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	jQuery('#diagnostico_x').html(tempDiv);
		
	}
	else{}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - -

function diagnosticoSas(modo,dados){
if(modo=='request'){
	blockUI(jQuery('#diagnostico_SAS'));
	var instancia=jQuery('#instancia').val();
	var url = "http://gvtapp/sas/configurar?telefoneDMS="+instancia+"&cmd=consultar&fecha=1";
	jaxDiag(url,diagnosticoSas);
	console.log('jax-request');
}
else if(modo=='response'){
	var resposta = dados;
	unblockUI(jQuery('#diagnostico_SAS'));
	var tempDiv = jQuery('<div>').html(resposta);
	var raw = jQuery('<div>').html(resposta);
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	resposta=tempDiv.html();
	telnet=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
	facilidade=telnet.split('\n');
	for(f=0;f<facilidade.length;f++){
	if(facilidade[f].indexOf('LINE EQUIPMENT NUMBER')>-1){
		facilidadeEncontrada=facilidade[f].replace('LINE EQUIPMENT NUMBER: ','').trim();
	}
	if(facilidade[f].indexOf('OPTIONS:')>-1){
		servicos=facilidade[f+1].trim();
	}
	}
	jQuery('#diagnostico_SASc').html('<div style="white-space:pre-wrap;">'+facilidadeEncontrada+'\n'+servicos+'</div>');
	jQuery('#debugbox').html(resposta);
}
else{}

}
//===========================================================================
//Nova função AJAX será feita mais ou menos nos moldes da função abaixo
var jaxDiag = function(url,response) {

   var request = jQuery.ajax({
        url:        url,
        dataType:   "text",
        type:       "post",
    });          
    request.done(function(){console.log('Concluido')});
    return request.always(function(){response('response',request.responseText);return request;});
}
//===========================================================================



function buscaDiagnostico(url,saida){
var instancia=document.getElementById('instancia').value;
jQuery.ajax({
beforeSend: function() {blockUI(jQuery('#diagnostico_SAS'))},
timeout: 20000,
url: 'http://gvtapp/sas/configurar?telefoneDMS='+instancia+'&cmd=consultar&fecha=1',
//data: {id: 123},
type: "GET",
dataType : "text",
})
  // terminou, e retornou algo
  .done(function( resposta ) {
saida(resposta,'out');
  })
  // falhou
  .fail(function( xhr, status, errorThrown ) {
    //console.log( "Error: " + errorThrown );
    console.log( "Status-error: " + status );
toastr.warning("Algo deu errado", "Ops...");
  })
  // executa no final independente se deu certo ou nao
  .always(function( xhr, status ) {
unblockUI(jQuery('#diagnostico_SAS'));
if(localStorage.getItem('ajaxDebug')=="sim"){
jQuery('#modal-3').modal('show');
}
    console.log( "The request is complete!" );
  });
}


function tecOfensor(modo,dados){
	if(modo=='request'){
		var instancia=jQuery('#tecnico').val();
		blockUI(jQuery('#diagnostico_x'));
		//var instancia="4330641172";
		var url = "http://sv2kppag2/plcontrol/modulos/regional/checklist/checklistbanew/GetTecOfensor.php"
		jaxDiag(url,diagnosticoX);
		console.log('jax-request');
	}
	else if(modo=='response'){
		var resposta = dados;
		var tempDiv = jQuery('<div>').html(resposta);
		unblockUI(jQuery('#diagnostico_x'));
		//document.getElementsByClassName('menu_hq')[0].innerText
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	jQuery('#diagnostico_x').html(tempDiv);
		
	}
	else{}
}



document.addEventListener('click', function(e){
  if(e.target.id == "diagnosticarX"){
 e.preventDefault();
 diagnosticoX('request');
    return false;
  }
});

document.addEventListener('click', function(e){
  if(e.target.id == "tecOfensor"){
 e.preventDefault();
 tecOfensor();
    return false;
  }
});