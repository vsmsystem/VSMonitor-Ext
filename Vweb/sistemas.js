//Sistemas.html
/*
document.getElementById("btframe1").addEventListener("click", function(){
	firstFrame();
});
document.getElementById("btframe2").addEventListener("click", function(){
	secondFrame();
});
document.getElementById("btngps").addEventListener("click", function(){
	document.title='V+GPS';
});
document.getElementById("btnMU").addEventListener("click", function(){
	document.title='V+Manobra';
});
document.getElementById("btnSAS").addEventListener("click", function(){
	document.title='V+SAS2';
});
document.getElementById("btnWise").addEventListener("click", function(){
	document.title='V+Wise';
});
document.getElementById("btnPn").addEventListener("click", function(){
	document.title='V+PnAdmin'
});
document.getElementById("btnBPM").addEventListener("click", function(){
	document.title='V+BPM';
});
document.getElementById("btnMail").addEventListener("click", function(){
	document.title='V+Outlook';
});
document.getElementById("btnTTV").addEventListener("click", function(){
	document.title='V+TTV';
});
document.getElementById("btnIps").addEventListener("click", function(){
	document.title='V+IPsNortel';
});
document.getElementById("btnSAS2").addEventListener("click", function(){
	document.title='V+SAS2';
});
document.getElementById("btnNWBPM").addEventListener("click", function(){
	window.open('http://bpmportal.gvt.com.br/PortalFederado_v1/login/logout.jsp','second');
});
*/
function firstFrame(){
document.getElementById("first").style.display = "block";
document.getElementById("second").style.display = "none";
document.getElementById("btframe1").className = "scr_on";
document.getElementById("btframe2").className = "scr_off";
}
function secondFrame(){
document.getElementById("first").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("btframe1").className = "scr_off";
document.getElementById("btframe2").className = "scr_on";
}
//Botao de ocultar
document.getElementById("escondeMenu").addEventListener("click", function(){
	escondeMenu();
});
function escondeMenu(){
	var menu = document.getElementById('tmain-a').style.display;
	if(menu==''){
		document.getElementById('tmain-a').style.display='none';
		document.getElementById('escondeMenu').style.left='0px';
		document.getElementById("escondeMenuIcon").src = "img/max.png";
	}else{
		document.getElementById('tmain-a').style.display='';
		document.getElementById('escondeMenu').style.left='170px';
		document.getElementById("escondeMenuIcon").src = "img/min.png";
	}
}

function criaMenu(){
var sistemas1 = [
	['opt_01_eta','ETA','chrome',				'0','https://d-gvt.etadirect.com/'],
	['opt_02_gps','GPS','chrome',				'1','http://gpsco.gvt.net.br/gps/co/atendimento/'],
	['opt_03_mun','Manobra Unica','chrome',		'1','http://appsagre.gvt.net.br/Manobraunica/Acesso?dado=usr'],
	['opt_04_sas','SAS','chrome',				'1','http://gvtapp/sas/configurar'],
	['opt_05_sa2','Duplo SAS','chrome',			'0','SPP.html'],
	['opt_06_wst','WiseTool','chrome',			'1','http://wisetool.gvt.net.br/wisetool/index.jsp'],
	['opt_07_pit','Portal IT','chrome',			'0','http://portalitatendimento.gvt.net.br/Portal_IT/Portal_IT.html'],
	['opt_08_plc','PL Control','ie',			'0','http://sv2kppag2/plcontrol'],
	['opt_09_pna','PnAdmin','chrome',			'1','http://pnadmin.gvt.com.br/pn/index.jsp'],
	['opt_09b_ctr','Connector','chrome',		'1','http://portabilitysoaconnector.gvt.net.br/soa-web'],
	['','divisor','','',''],
	['opt_10_efk','Efika','chrome',				'0','http://efika/web/'],
	['opt_10_ef2','Efika Vivo','chrome',		'0','http://efika/vivo/'],
	['opt_11_ttv','Total View','chrome',		'0','http://sv2kpwfm3/agent/disableSSLandForward.do'],
	['opt_12_fcl','Ficha Limpa','chrome',		'1','http://svuxpopews14:8080/FichaLimpa'],
	['opt_13_mms','Manobra Massiva','chrome',	'1','http://manobramassiva.gvt.net.br/ManobraMassiva/init.do'],
	['opt_14_acs','ACS','chrome',				'0','http://10.200.6.150:8080/nbbs/login.ui'],
	['opt_15_sap','SAS Portability','chrome',	'1','http://gvtapp/sas/portability'],
	['opt_16_cat','Choose a Target','chrome',	'1','http://10.200.1.220/cricket/grapher.cgi?target=%2Fdslams'],
	['opt_16_wfm','Workforce (WFM)','chrome',	'1','http://appwfm.gvt.net.br/wfm-search/consultarWorkOrder.xhtml'],
	['opt_16_gdb','Gestor Bloqueios','chrome',	'1','http://gestordebloqueios.gvt.net.br/spmweb/pages/geral.xhtml'],
	['opt_17_bpm','Portal BPM','ie',			'0','http://bpmportal.gvt.com.br/'],
	['opt_18_sbl','Siebel8','ie',				'0','http://novosiebel.gvt.com.br/ecommunications_ptb/'],
	['opt_19_act','Activia','ie',				'0','https://activia.gvt.com.br/activia/jsp/login.jsp'],
	['opt_20_san','SAN','chrome',				'1','http://portalsan.gvt.net.br/PortalSAN/'],
	['opt_21_sin','SAN - Instancias','chrome',	'0','http://formulariositsuporte/ProblemasComInstancia/'],
	['opt_22_sbl','SAN - Bloqueios','chrome',	'0','http://formulariositsuporte/ProblemaDesbloqueio/'],
	['opt_23_otw','Outlook Webmail','ie',		'1','https://webmail.gvt.com.br/'],
	['','divisor','','',''],
	['opt_24_int','Intranet','chrome',			'0','http://intranetcorporativa.telefonica.br/'],
	['opt_25_cnt','Contatos','chrome',			'1','http://portalcolaboradores/IntranetCorporativa'],
	['opt_26_cnt','Consulta EA (abr)','chrome',	'0','http://consultanumero.abr.net.br:8080/consultanumero/consulta/consultaSituacaoAtualCtg'],
	['opt_27_rmu','Ramais / URA','chrome',		'1','abertura.html'],
	['opt_28_spv','Simulador PIV','chrome',		'1','http://portalefika/simuladorpiv/'],
	['','divisor','','',''],

];

//Gestor que não funciona: http://mbuservices.gvt.net.br/spmweb/pages/geral.xhtml

//===============================
var novoHtml ='';
document.getElementsByClassName('tmenu')[0].innerHTML='';
	var novoHtml=novoHtml+''
		+'<tr style="background-color:#dddddd;">'
		+'	<td width="175px"><img id="linkstarter" style="cursor:pointer" src="img/play.png"> <strong>Sistemas</strong></td>'
		+'	<td width="50px"> </td>'
		+'</tr>';

	for(lks=0;lks<sistemas1.length;lks++){
		if(sistemas1[lks][1]=='divisor'){
			var novoHtml=novoHtml+''
			+'<tr style="background-color:#dddddd;">'
				+'<td>&nbsp;</td><td>'
			+'</td></tr>';
		}else{
			var novoHtml=novoHtml+''
			+'<tr>'
			+'	<td>'
			+'	<input id="'+sistemas1[lks][0]+'" type="checkbox" class="opt" value="'+sistemas1[lks][4]+'"/> '
			+'	'+sistemas1[lks][1]
			+'	</td>	'
			+'	<td>'
			+'		<a class="'+sistemas1[lks][2]+'" target="_blank" href="'+sistemas1[lks][4]+'"> </a>'
			if(sistemas1[lks][3]=='1'){
				var novoHtml=novoHtml+'<a class="mon2c" id="btngps" target="first" href="'+sistemas1[lks][4]+'"></a>'
			}
			

			+'	</td>'
			+'</tr>';	
		}
	}
	document.getElementsByClassName('tmenu')[0].innerHTML=novoHtml;
}
criaMenu();


document.getElementById("linkstarter").addEventListener("click", function(){
	//window.open('http://bpmportal.gvt.com.br/PortalFederado_v1/login/logout.jsp','second');
	comecar();
});
function comecar(){
	/*var sites=[];
	sites[0]="http://gpsco.gvt.net.br/gps/co/atendimento/";
	sites[1]="https://d-gvt.etadirect.com/";
	sites[2]="http://appsagre.gvt.net.br/Manobraunica/Acesso?dado=usr";
	sites[3]="SPP.html";
	sites[4]="http://wisetool.gvt.net.br/wisetool/index.jsp";
	sites[5]="http://portalitatendimento.gvt.net.br/Portal_IT/Portal_IT.html";
	sites[6]="http://efika/web/";*/
	
	var qtd=localStorage.length;
	var qtdnow=0;
	var id = setInterval(go, 500);
	function go() {
		if (qtdnow > qtd) {
		  clearInterval(id);
		} else {
			var key = localStorage.key(qtdnow);
			var value = localStorage[key];
			if(key.match(/opt_/g)){		
				window.open(value,qtdnow);
			}
			qtdnow++;
		}
	}
}
	
function recuperarBox (){
	for (contRec=0;contRec<document.getElementsByClassName('opt').length;contRec++){
		if(localStorage[document.getElementsByClassName('opt')[contRec].id]!=undefined){
		document.getElementsByClassName('opt')[contRec].checked=true;
		}
	}	
}
recuperarBox();
function adicionarEvento (){
	for (contOpt=0;contOpt<document.getElementsByClassName('opt').length;contOpt++){
			document.getElementsByClassName('opt')[contOpt].addEventListener("click", function(){
	boxChecker(this.id,this.value);
			});
	}	
}
adicionarEvento();
//<input type="checkbox" id="teste" onclick="boxChecker(this.id);"></input>
function boxChecker(qualbox,qual_link){
	var qualboxval = localStorage.getItem(qualbox);
	if(qualboxval==null){qualboxval='';}
	if(qualboxval==''){
		localStorage.setItem(qualbox,qual_link);
	}else{
		localStorage.removeItem(qualbox);
	}
}
document.getElementById("linkstarter").addEventListener("click", function(){
	boxChecker(this.id);
});


