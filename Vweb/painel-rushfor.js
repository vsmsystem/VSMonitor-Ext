var extVSMonitorId = chrome.runtime.id;
var $wrapperXic = document.querySelector('head');
    HTMLNovoXic=''
	+'<link rel="apple-touch-icon" sizes="180x180" hrefchrome-extension://'+extVSMonitorId+'/imgs/painelicons/apple-touch-icon.png">'
	+'<link rel="icon" type="image/png" hrefchrome-extension://'+extVSMonitorId+'/imgs/painelicons/favicon-32x32.png" sizes="32x32">'
	+'<link rel="icon" type="image/png" hrefchrome-extension://'+extVSMonitorId+'/imgs/painelicons/favicon-16x16.png" sizes="16x16">'
	+'<link rel="mask-icon" hrefchrome-extension://'+extVSMonitorId+'/imgs/painelicons/safari-pinned-tab.svg" color="#5bbad5">'
	$wrapperXic.insertAdjacentHTML('afterbegin', HTMLNovoXic);
function xDate(modo){
	//modo 1 : AAAA mm dd hh:mm:ss
	//modo 2 : dd/mm/AAAA
	//modo 3 : AAAAmmddhmd
	//modo 4 : hms
	//modo 5 : AAAAmm
	function adz(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	var month=[];
	
	month[0] = '01';
	month[1] = '02';
	month[2] = '03';
	month[3] = '04';
	month[4] = '05';
	month[5] = '06';
	month[6] = '07';
	month[7] = '08';
	month[8] = '09';
	month[9] = '10';
	month[10] = '11';
	month[11] = '12';
	var d = new Date();
	var anoj = d.getYear();
	var ano = d.getFullYear();
	var mes = month[d.getMonth()];
	var dia = adz(d.getDate());
	
	var h = adz(d.getHours());
    var m = adz(d.getMinutes());
    var s = adz(d.getSeconds());
	
	if(modo==1){
		datestr = ''+ano+' '+mes+' '+dia+' '+h+':'+m+':'+s;
		return datestr;		
	}
	else if(modo==2){
		datestr = ''+dia+'/'+mes+'/'+ano+'';
		return datestr;		
	}
	else if(modo==3){
		datestr = ''+ano+mes+dia+h+m+s+'';
		return datestr;		
	}
	else if(modo==4){
		datestr = ''+h+m+s+'';
		return datestr;		
	}
	else if(modo==5){
		datestr = ''+ano+mes+dia+'';
		return datestr;		
	}
	else if(modo==6){
		datestr = ''+ano+'-'+mes+'-'+dia+' '+h+':'+m+':'+s;
		return datestr;		
	}
	else if(modo==7){
		datestr = ''+anoj+mes+dia+'';
		return datestr;		
	}
	else if(modo==8){
		datestr = ''+ano+'-'+mes+'-'+dia+' '+h+':'+m;
		return datestr;		
	}
	else if(modo=='id'){
		var parte1=(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();
		var parte2=(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();
		datestr = ''+ano+mes+dia+h+m+s+parte1+parte2;
		//(Math.floor(Math.random() * (max - min + 1)) + min)
		return datestr;		
	}else{
		datestr = ''+ano+'-'+mes+'-'+dia+' '+h+':'+m+':'+s;
		return datestr;	
	}
}
//========================================================================================
Object.defineProperty(Date.prototype,"diff",{
	writable: false, configurable: false, enumerable: true,

	/**
	 * Returns the difference between two Date objects.
	 * @param {Date} The date to compare to.
	 * @return {Object}
	 * @throws {TypeError}
	 */
	value: function(date) {
		if (date instanceof Date){
			var ms = this-date;
			var diff = {};

			for ( diff.years = 0; ms>=31536000000; diff.years++, ms -= 31536000000);
			for ( diff.months = 0; ms>=2628000000; diff.months++, ms -= 2628000000);
			for ( diff.days = 0; ms>=86400000; diff.days++, ms -= 86400000);
			for ( diff.hours = 0; ms>=3600000; diff.hours++, ms -= 3600000);
			for ( diff.minutes = 0; ms>=60000; diff.minutes++, ms -= 60000);
			for ( diff.seconds = 0; ms>=1000; diff.seconds++, ms -= 1000);
			diff.milliseconds = ms;

			return diff;
		}

		throw new TypeError("invalid date");
	}
});


function msToTime(s) {

  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
}
//========================================================================================
//notify('Pausa 1','xx:xx:xx - yy:yy:yy','pausa-circular.jpg')
function notify(titulo,mensagem,imagem) {
    Notification.requestPermission(function() {
        var notification = new Notification(titulo, {
            icon: 'chrome-extension://'+extVSMonitorId+'/Vweb/images/notify/'+imagem,
            body: mensagem
        });
        notification.onclick = function() {
            //func
        }
    });
} 
//========================================================================================
function ctrlc(id,nome){
	document.getElementById('txtfinal').value='';
	document.getElementById('txtfinal').value=document.getElementById(id).innerText;
	var copyTextarea = document.querySelector('.txtfinal');
	copyTextarea.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? statusCopiar('<span style="color:#00aa00;border:solid 1px #008800;padding:2px;"> '+nome+' (Copiado) .</span>') 
		: statusCopiar('<span style="color:#aa0000;border:solid 1px #990000;padding:2px;"> Erro ao Copiar '+nome+' .</span>');
	} catch (err) {
		
	}
	document.getElementById('txtfinal').value='';
}


//========================================================================================
function statusCopiar(msg) {
	document.getElementById('cpstatus').innerHTML=msg;
	setTimeout(function () {
		document.getElementById('cpstatus').innerHTML=' ';
	}, 3000);
}
//========================================================================================
function copiarChecklist(msg) {
	var atendimento = JSON.parse(localStorage['emAtendimento'])
	if(atendimento.skill=='Manobra' || atendimento.skill=='Multiskill'){
		localStorage['checklist_ETA']=''
		//------------------------------------------------------------
		+''+atendimento.operador+' \n'
		+'Instância: '+atendimento.instancia+' \n'
		+'Técnico: '+atendimento.tecnico+' - '+atendimento.t_matricula+' \n'
		+'Motivo: '+atendimento.motivo+' \n'
		+'Primário: '+atendimento.primario+' \n'
		+'Pares testados: '+atendimento.testados+' \n'
		+'Binadas: '+atendimento.binadas+' \n'
		+''+atendimento.notes_sas+' \n'
		+''+atendimento.notes_tbs+' \n'
		+''+atendimento.notes_banda+' \n'
		+'[ ---------- Notas ---------- ] \n'+atendimento.notes_operador+'\n'
		
		//------------------------------------------------------------
	}

	var storageFilter = localStorage['checklist_ETA'];
	document.getElementById('txtfinal').value=storageFilter;
	var copyTextarea = document.querySelector('.txtfinal');
	copyTextarea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? statusCopiar('<span style="color:#00aa00;border:solid 1px #008800;padding:2px;"> Copiado .</span>') 
		: statusCopiar('<span style="color:#aa0000;border:solid 1px #990000;padding:2px;"> Erro ao Copiar .</span>');
	} catch (err) {
		
	}
	localStorage.setItem('checklist_ETA',xDate(3));
	document.getElementById('txtfinal').value='';
		
}
	


//========================================================================================



function registrarEventosModo2(){
//modo alternativo de registrar os eventos
    var inputs=document.getElementsByClassName('input'),i=0;
    do{
        switch(inputs[i].type){
            case 'button':
            inputs[i].onclick=function(){
				toastr.info(this.value)
                //alert(this.value+'\\'+this.type)
            }
            break;
            case 'checkbox':
            inputs[i].onclick=function(){
				toastr.info(this.checked+' - '+this.type+' - '+this.id)
                //alert(this.value+' - '+this.type+' - '+this.id)
            }
            break;
            case 'text':
            inputs[i].onfocus=function(){
                this.style.backgroundColor='#e5e5e5'
            }
            inputs[i].onblur=function(){
                this.style.backgroundColor=''
            }
            inputs[i].onchange=function(){
                //alert(this.value+' - '+this.type)
				toastr.info(this.value)
            }
            break;
        }
    }
    while(inputs[++i])
}	





function imsdb_automation(){
	if(document.getElementById('imsdb-autocheck').checked==true){
		setTimeout(function(){
			var imsdbtr = document.getElementsByClassName('imsdbtr')[0]

			
			var trElementoClicado = imsdbtr;
			localStorage["imsdb-dataid"]=trElementoClicado.getAttribute("data-id")
			localStorage["imsdb-datashelf"]=trElementoClicado.getAttribute("data-shelf")
			
			jQuery('#diagnostico_SASc').html('');
			jQuery('#diagnostico_TBSc').html('');
			jQuery('#diagnosticoWisec').html('');

			
			//alert(trElementoClicado.getAttribute("data-instancia"))
			diagnosticoTbs({
				'modo':'request',
				'instancia':trElementoClicado.getAttribute("data-instancia"),
				'bloquear':'#diagnostico_TBS',
				'destino':'#diagnostico_TBSc',
				'filtro':filtroTBS_IMS
			});
			diagnosticoSas({
				'modo':'request',
				'instancia':trElementoClicado.getAttribute("data-instancia").slice(0,10),
				'bloquear':'#diagnostico_SAS',
				'destino':'#diagnostico_SASc',
				'filtro':filtroSAS_IMS
			});
			diagnosticoWise('request','consultar',trElementoClicado.getAttribute("data-instancia"))
		},1000)
	}
}
function imsdbAjaxUpdate(idin,infoin){
	//alert(idin+' / '+infoin)
	//return false;
	jQuery.ajax({
		url: 'http://10.40.174.101:8000/vsmonitor-imsdbupdate.php',
		type: 'POST',
		data: {"upw":"PWD248V5UPDATE","id":idin,"info":infoin},
		success: function(retorno){
			if(retorno != null && retorno != undefined && retorno !=''){
				//jQuery('#xxx').html('ok');
				console.log(retorno)
			}else{
				//jQuery('#xxx').html('erro');
				console.log(retorno)
			}
		}
	});
}

function imsupdate(){

	var imsdbId=localStorage["imsdb-dataid"];
	var imsdbShelf=localStorage["imsdb-datashelf"].replace(/-|_/g, "");
	if(localStorage['imsdb-cmd']=='pular'){
		//$.ajax / revisar
		localStorage['imsdb-cmd']=''
		jQuery('.imsdbtr')[0].remove()
		imsdb_automation()
	}
	/*
	pegar a porta do manobra unica e dar split no IMS, pegando 0 e 1
	pegar a tecnologia no sas
	se for h248: confere se o shelf do tbs casa com texto dentro do shelf do sas, e compara portas
	se for v5  : ultimos 3 digitos do shelf e do v5, e compara as portas
	se for sip : 
	*/
	//document.getElementById('painel-SAS-idway').innerText.slice(4,7)
	if(jQuery('#painel-TBS-porta').html() && jQuery('#sasPular').html()){
		imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
		toastr.warning('Revisar')
		jQuery('.imsdbtr')[0].remove()
		imsdb_automation()
	}else if(jQuery('#tbsPular').html() && jQuery('#painel-SAS-idway').html()){
		imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
		toastr.warning('Revisar')
		jQuery('.imsdbtr')[0].remove()
		imsdb_automation()
	}else if(jQuery('#tbsPular').html() && jQuery('#sasPular').html()){
		imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
		toastr.warning('Revisar')
		jQuery('.imsdbtr')[0].remove()
		imsdb_automation()
	}else{}
	
	
	if(jQuery('#painel-TBS-porta').html() && jQuery('#painel-SAS-idway').html()){
		if(jQuery('#painel-SAS-tecnologia').text().trim()!='IMS/SIP' && jQuery('#painel-SAS-tecnologia').text().trim()!='TDM/H248'){
			if(jQuery('#painel-TBS-porta').text().indexOf('IMS')>-1){var string2split='IMS'}
			else if(jQuery('#painel-TBS-porta').text().indexOf('SIP')>-1){var string2split='SIP'}
			else{string2split=''}
			if(string2split!=''){
				var tbsShelf=		jQuery('#painel-TBS-porta').text().trim().split(string2split)[0].replace(/-|_/g, "");
				var tbsPorta=		jQuery('#painel-TBS-porta').text().trim().split(string2split)[1].replace(/-|_/g, "");
			}

		}else{
			var tbsShelf=''
			var tbsPorta=''
		}
		if(jQuery('#painel-SAS-edesc').html()){
			var sasEdesc=		jQuery('#painel-SAS-edesc').text().trim().replace(/-|_/g, "");
		}
		if(tbsPorta.indexOf('(')>-1){var tbsPorta = tbsPorta.split('(')[0]}
		var sasPorta=		jQuery('#painel-SAS-porta').text().trim()
		var sasTecnologia=	jQuery('#painel-SAS-tecnologia').text().trim()
		var sasIdway=	jQuery('#painel-SAS-idway').text().trim()
		if(sasIdway.indexOf(':')>-1){var sasIdway=sasIdway.split(':')[0]}
		
		if(sasTecnologia=="TDM/H248"){
			imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
			toastr.warning('Revisar TDM')
			jQuery('.imsdbtr')[0].remove()
			imsdb_automation()
		}
		else if(sasTecnologia=="IMS/H248"){
			toastr.info(''
				+' <br> Tecnologia :'+sasTecnologia
				+' <hr> SAS Edesc :'+sasEdesc
				+' <br> Dat-shelf :'+imsdbShelf
			);
			
			if( sasEdesc.indexOf(imsdbShelf)>-1 ){
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,sasIdway)
				toastr.success('H248-IP :'+sasIdway)
				jQuery('.imsdbtr')[0].remove()
				imsdb_automation()
			}else{
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
				toastr.warning('Revisar H248')
				jQuery('.imsdbtr')[0].remove()
				imsdb_automation()
				}
		}
		else if(sasTecnologia=="IMS/V5.2"){
			var idfinal = document.getElementById('painel-SAS-idway').innerText.length
			var idinicio= (document.getElementById('painel-SAS-idway').innerText.length-3)
			var idslice = document.getElementById('painel-SAS-idway').innerText.slice(idinicio,idfinal)
			//tbsShelf
			var shfinal = document.getElementById('painel-SAS-idway').innerText.length
			var shinicio= (document.getElementById('painel-SAS-idway').innerText.length-3)
			var shslice = document.getElementById('painel-SAS-idway').innerText.slice(shinicio,shfinal)
			//
			var dbfinal = imsdbShelf.length
			var dbinicio= (imsdbShelf.length-3)
			var dbslice = imsdbShelf.slice(dbinicio,dbfinal)

			toastr.info(''
				+' <br> Tecnologia :'+sasTecnologia
				+' <hr> TBS Shelf: '+tbsShelf
				+' <br> Dat-shelf :'+imsdbShelf
				+' <br> Porta TBS: '+tbsPorta
				+' <br> Porta SAS: '+sasPorta
				
			);
			if( tbsPorta.trim()==sasPorta.trim() ){
				//if(imsdbShelf.indexOf(tbsShelf.trim())>-1){
				alert('['+idslice+'] - ['+dbslice+']')
				if(idslice==dbslice){//4130768527
					imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,sasIdway)
					toastr.success('V5IID :'+sasIdway)
					jQuery('.imsdbtr')[0].remove()
					imsdb_automation()
				}else if(2==5){
					
				}else{
					imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
					toastr.warning('Revisar V5IID [1]:'+sasIdway)
					jQuery('.imsdbtr')[0].remove()
					imsdb_automation()
				}
			}else{
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
				toastr.warning('Revisar V5IID [2]')
				jQuery('.imsdbtr')[0].remove()
				imsdb_automation()
			}
		}
		else if(sasTecnologia=="IMS/SIP"){
			if(jQuery('#painel-Wise-tecnologia').text()=="SIP"){
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar_sip')
				toastr.warning('Revisar TRUE SIP')
			}else{
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id,'revisar')
				toastr.warning('Revisar xSIP')
			}
			
			jQuery('.imsdbtr')[0].remove()
			imsdb_automation()
		}else{
			toastr.error('Erro na tecnologia')
		}

/*
			toastr.info(''
				+'      TBS Shelf: '+tbsShelf
				+' <br> SAS Edesc :'+sasEdesc
				+' <br> Dat-shelf :'+imsdbShelf
				+' <br> Porta TBS: '+tbsPorta
				+' <br> Porta SAS: '+sasPorta
				+' <br> Tecnologia :'+sasTecnologia
				+' <br> H248-IP :'+sasIdway
			);
*/
	}else{}
}


function downloadChecklist(filename) {
	var conteudo= document.getElementById('callhistcontent').innerText.replace(/(?:\r\n|\r|\n)/g, '\r\n');
    var ancora = document.createElement('a');
    ancora.href = 'data:application/txt,' + encodeURIComponent(conteudo);
    //ancora.href = 'data:application/octet-stream;charset=utf-8,' + conteudo;
	//window.open("data:application/txt," + encodeURIComponent(conteudo), "_self");
    ancora.download = filename;
    ancora.click();
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

/*
####################################################
#	
#	
#	Ferramenta de diagnostico
#	
#
####################################################
*/









//===========================================================================
//Manobra Massiva parte doidona
/*
// =========== ESTADOS > CIDADES
http://manobramassiva.gvt.net.br/ManobraMassiva/init.do
operation:
id:
perfil:MASSIVA_PRIMARIO_PR

// =========== CIDADES > ARDS
http://manobramassiva.gvt.net.br/ManobraMassiva/manobraPlanejamentoAction.do
operation:inicio
servletState:3
equipDeName:
equipParaName:
vaba:
equipDesinDesc:
armarioOrigem.clliCode:
armarioDestino.clliCode:
cidadeOrigem.cityName:CURITIBA
instancias:
shelfOrigem.tipoTecnologia:
paraPortaInicial:

===========

ajaxMassiva({
	'modo':'request',
	'perfil':'MASSIVA_PRIMARIO_PR',
	'bloquear':'#massivaPreview',
	'destino':'#massivaPreview',
	'filtro':filtroMassiva
});

ajaxMassiva({
	'modo':'request',
	'perfil':'MASSIVA_PRIMARIO_PR',
	'bloquear':'#massivaPreview',
	'destino':'#massivaPreview',
	'filtro':filtroMassiva
});

*/
//document.querySelector('#cidadeOrigem\\.cityName').dispatchEvent(new Event('change', { 'bubbles': true }))

function ajaxMassiva(opt){
	if(opt){
		if(opt['bloquear']){var bloquearElemento=opt['bloquear'];}
		if(opt['destino']){var popularElemento=opt['destino'];}
		if(opt['perfil']){
			var url = "http://manobramassiva.gvt.net.br/ManobraMassiva/init.do";
			var data = {
				'operation':'',
				'id':'',
				'perfil':opt.perfil
			}
		}
		else if(opt['cidade']){
			var url = "http://manobramassiva.gvt.net.br/ManobraMassiva/manobraPlanejamentoAction.do";
			var data = {
				"operation":"inicio",
				"servletState":"3",
				"equipDeName":"",
				"equipParaName":"",
				"vaba":"",
				"equipDesinDesc":"",
				"armarioOrigem.clliCode":"",
				"armarioDestino.clliCode":"",
				"cidadeOrigem.cityName":opt.cidade,
				"instancias":"",
				"shelfOrigem.tipoTecnologia":"",
				"paraPortaInicial":""
			}
		}
		else if(opt['armario']){
			var url = "http://manobramassiva.gvt.net.br/ManobraMassiva/manobraPlanejamentoAction.do";
			var data = {
				"operation":"inicio",
				"servletState":"",
				"equipDeName":"",
				"equipParaName":"",
				"vaba":"",
				"equipDesinDesc":"",
				"armarioOrigem.clliCode":"",
				"armarioDestino.clliCode":"",
				"cidadeOrigem.cityName":opt.cidadeArmario,
				"armarioOrigem.locationId":opt.armario,
				"instancias":"",
				"armarioDestino.locationId":"",
				"shelfOrigem.tipoTecnologia":"",
				"paraPortaInicial":""
			}
		}
		if(opt['modo']=='request'){
			//blockUI(jQuery(bloquearElemento));
			var request = jQuery.ajax({
				'url':url,
				'timeout': 	5000,
				'dataType':   "text",
				'type':       "post",
				'data' : data
			});          
			request.done(function(){console.log('Manobra Unica : Sucesso');	});
			request.fail(function(xhr, status, errorThrown){console.log('Manobra Unica : Falha');});
			request.always(function(){
				opt.filtro(request);
				//unblockUI(jQuery(bloquearElemento));
				//jQuery('#massivaPreview').html(request.responseText)
			});
		}
		else{}
	}else{console.error('Erro, argumentos invalidos')}
}

//--------------------------

function filtroMassivaPerfil(resposta){
	if(resposta.status==404){toastr.error(resposta.status)}
	else if(resposta.status==500){toastr.error(resposta.status)}
	else if(resposta.status===0){toastr.error(resposta.status)}
	else if(resposta.status==200){
		//toastr.success('M-Massiva: 200 [OK]');
		var resposta = resposta.responseText;
				
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		
		var storeHTML=tempDiv.html();
		var texto=tempDiv.text();
		
		mCidades = jQuery(tempDiv).find("select[name='cidadeOrigem.cityName']");
		//alert('cidades: ' +mCidades[0].options.length)
		 listaCidades = jQuery(tempDiv).find("select[name='cidadeOrigem.cityName']").find('option');
		//for(cityctr=0;cityctr<mCidades[0].options.length;cityctr++){
		//	var listaCidades=listaCidades+mCidades[0].option[cityctr]
		//}
		
		
		jQuery('#cidadeOrigem\\.cityName').empty()
		jQuery.each(listaCidades, function( indice, informacao ){
		  jQuery('#cidadeOrigem\\.cityName').append(informacao)
		  //listaCidades[1].innerText
		});
		jQuery('#cidadeOrigem\\.cityName')[0].options[0].selected=true;
		jQuery('#cidadeOrigem\\.cityName')[0].options[0].innerText='Cidades: '+(jQuery('#cidadeOrigem\\.cityName')[0].options.length-1);

	}else{
		toastr.error('Erro desconhecido '+resposta.status);
		
	}
	rushMassiva();
}
//--------------------------

function filtroMassivaCidade(resposta){
	if(resposta.status==404){toastr.error(resposta.status)}
	else if(resposta.status==500){toastr.error(resposta.status)}
	else if(resposta.status===0){toastr.error(resposta.status)}
	else if(resposta.status==200){
		//toastr.success('M-Massiva: 200 [OK]');
		var resposta = resposta.responseText;
				
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		
		var storeHTML=tempDiv.html();
		var texto=tempDiv.text();
		
		mArds = jQuery(tempDiv).find("select[name='armarioOrigem.locationId']");
		listaArds = jQuery(tempDiv).find("select[name='armarioOrigem.locationId']").find('option');

		
		
		jQuery('#armarioOrigem\\.locationId').empty()
		jQuery.each(listaArds, function( indice, informacao ){
		  jQuery('#armarioOrigem\\.locationId').append(informacao)
		});
		jQuery('#armarioOrigem\\.locationId')[0].options[0].selected=true;
		jQuery('#armarioOrigem\\.locationId')[0].options[0].innerText='Ards: '+(jQuery('#armarioOrigem\\.locationId')[0].options.length-1);

	}else{
		toastr.error('Erro desconhecido '+resposta.status);
		
	}
	rushMassiva();
}
//--------------------------

function filtroMassivaArmario(resposta){

	if(resposta.status==404){toastr.error(resposta.status)}
	else if(resposta.status==500){toastr.error(resposta.status)}
	else if(resposta.status===0){toastr.error(resposta.status)}
	else if(resposta.status==200){
		//toastr.success('M-Massiva: 200 [OK]');
		var resposta = resposta.responseText;
				
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		
		var storeHTML=tempDiv.html();
		var texto=tempDiv.text();
		
		mshelves = jQuery(tempDiv).find("select[name='shelfOrigem.equipmentId']");
		listaShelves = jQuery(tempDiv).find("select[name='shelfOrigem.equipmentId']").find('option');

		
		
		jQuery.each(listaShelves, function( indice, informacao ){
			if(indice>0){
				jQuery('#shelvesColetados').html(parseInt(jQuery('#shelvesColetados').text())+1)
				jQuery('#massivaShelves').append(informacao)
				if(jQuery('#perfil').val() && !localStorage[jQuery('#perfil').val()]){localStorage[jQuery('#perfil').val()]=''}
				/*
				localStorage[jQuery('#perfil').val()]=localStorage[jQuery('#perfil').val()]
				
				//estado
				+jQuery('#perfil').val().split('_')[2]+';'
				//cidade
				+jQuery('#cidadeOrigem\\.cityName').val()+';'
				//id armario
				+jQuery('#armarioOrigem\\.locationId').val()+';'
				//armario
				+jQuery('#armarioOrigem\\.locationId')[0].options[jQuery('#armarioOrigem\\.locationId')[0].selectedIndex].text+';'
				+informacao.value+';'+informacao.text+'\n'
				*/
			}
		});

		
		
	}else{
		toastr.error('Erro desconhecido '+resposta.status);
		
	}
	rushMassiva();
}






function rushMassiva(){
	var ctPerfilTotal = jQuery('#perfil')[0].length-1
	var ctPerfil = jQuery('#perfil')[0].selectedIndex
	jQuery('#ufCounter').html(ctPerfil+' / '+ctPerfilTotal)
	
	var ctCidadeTotal = jQuery('#cidadeOrigem\\.cityName')[0].length-1
	var ctCidade = jQuery('#cidadeOrigem\\.cityName')[0].selectedIndex
	jQuery('#cityCounter').html(ctCidade+' / '+ctCidadeTotal)
	
	var ctArmarioTotal = jQuery('#armarioOrigem\\.locationId')[0].length-1
	var ctArmario = jQuery('#armarioOrigem\\.locationId')[0].selectedIndex
	jQuery('#ardCounter').html(ctArmario+' / '+ctArmarioTotal)
	
	//if(jQuery('#autoRush')[0].checked==true){}
	setTimeout(function(){
		if(ctArmarioTotal==ctArmario){
			if(ctCidadeTotal==ctCidade){
				//uf++
				toastr.info('UF++')
				if(jQuery('#autoRush')[0].checked==true){
					jQuery('#perfil')[0].selectedIndex=(jQuery('#perfil')[0].selectedIndex+1)
						ajaxMassiva({
							'modo':'request',
							'perfil':jQuery('#perfil').val(),
							'bloquear':'#massivaPreview',
							'destino':'#massivaPreview',
							'filtro':filtroMassivaPerfil
						});
						//return false;
					//document.querySelector('#perfil').dispatchEvent(new Event('change', { 'bubbles': true }))	
				}
			}
			else{
				//cidade++
				toastr.info('Cidade++')
				if(jQuery('#autoRush')[0].checked==true){
					jQuery('#cidadeOrigem\\.cityName')[0].selectedIndex=(jQuery('#cidadeOrigem\\.cityName')[0].selectedIndex+1)
						ajaxMassiva({
							'modo':'request',
							'cidade':jQuery('#cidadeOrigem\\.cityName').val(),
							'bloquear':'#massivaPreview',
							'destino':'#massivaPreview',
							'filtro':filtroMassivaCidade
						});	
						//return false;
					//document.querySelector('#cidadeOrigem\\.cityName').dispatchEvent(new Event('change', { 'bubbles': true }))
				}
			}
			




		}
		else {
			jQuery('#armarioOrigem\\.locationId')[0].selectedIndex=(jQuery('#armarioOrigem\\.locationId')[0].selectedIndex+1)
			if(jQuery('#autoRush')[0].checked==true){
				ajaxMassiva({
					'modo':'request',
					'armario':jQuery('#armarioOrigem\\.locationId').val(),
					'cidadeArmario':jQuery('#cidadeOrigem\\.cityName')[0].value,
					'bloquear':'#massivaPreview',
					'destino':'#massivaPreview',
					'filtro':filtroMassivaArmario
				});	
			}
		}

	},0)

		
		
		
	
}
//document.querySelector('#cidadeOrigem\\.cityName').dispatchEvent(new Event('change', { 'bubbles': true }))



// ##########################################################################################
//Adiciona event listeners

//# Clicks : ================================================================================
document.addEventListener('click', function(e){
	
  if(e.target.id == "mostrarDebug"){
	 e.preventDefault();
	 jQuery('#modal-debug').modal('show');
		return false;
	}
	
	
	// -------------------------------------------------------
	
  if(e.target.getAttribute("name") == "MostrarEventoMassivoSAS"){
	 e.preventDefault();
		
		jQuery('#eventosMassivosSAS').modal('show');

	return false;
	}
	
	// -------------------------------------------------------
			
  if(e.target.getAttribute("name") == "bloqueioGestorStatus"){
	 e.preventDefault();
		
		//jQuery('#modalGestor').modal('show');
		//jQuery('#eventosMassivosSAS').modal('show');

	return false;
	}
	
	// -------------------------------------------------------
	if(e.target.getAttribute("name") == "rush-start"){
		rushMassiva();
		return false;
	}
	// -------------------------------------------------------
});

//#Keyup: =======================================================================================
document.addEventListener('keyup', function(e){
	if(e.target.id == "txttransfer"){
		e.preventDefault();
		
			if(e.target.value.length==10){
				//...
			}
			else if(e.target.value.length>10 && e.target.value.length<16){
				//...
			}
			else if(e.target.value.length>15){
				//...
			}
		
		return false;
	}
	// -------------------------------------------------------
});

//#Change: ===========================================================================
document.addEventListener('change', function(e){
	if(e.target.getAttribute("name") == "perfil"){
		ajaxMassiva({
			'modo':'request',
			'perfil':e.target.value,
			'bloquear':'#massivaPreview',
			'destino':'#massivaPreview',
			'filtro':filtroMassivaPerfil
		});

		//alert(e.target.value)		
		return false;
	}
	// -------------------------------------------------------
	if(e.target.getAttribute("name") == "cidadeOrigem.cityName"){
		ajaxMassiva({
			'modo':'request',
			'cidade':e.target.value,
			'bloquear':'#massivaPreview',
			'destino':'#massivaPreview',
			'filtro':filtroMassivaCidade
		});	
		return false;
	}
	// -------------------------------------------------------

	if(e.target.getAttribute("name") == "armarioOrigem.locationId"){
		ajaxMassiva({
			'modo':'request',
			'armario':e.target.value,
			'cidadeArmario':jQuery('#cidadeOrigem\\.cityName')[0].value,
			'bloquear':'#massivaPreview',
			'destino':'#massivaPreview',
			'filtro':filtroMassivaArmario
		});	
		return false;
	}
	// -------------------------------------------------------



	});


//######################################################################################################