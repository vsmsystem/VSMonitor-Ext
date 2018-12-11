/*
Implementações futuras
---
Correção do loading:
add event listener
document.getElementById('checklistBox').style.zIndex=parseInt(document.getElementById('ajaxRequestStatus').style.zIndex)+1;
---
OBS: este arquivo é injetado quando o link http://gpsco.gvt.net.br/gps/co/atendimento/index.jsf é acessado via chrome
Hoje em dia este recurso foi substituido pelo painel da extensão


*/
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function designador(){
	var lista = document.getElementsByTagName("li");
	var contador = lista.length;
	for (i = 0; i < lista.length; i++) { 
		if(lista[i].innerHTML.match(/Banda/g)){
			return lista[i].innerHTML;
		}
	}
}

function designadores(){
	var designadores = document.getElementById("formDadosClienteAtendimento:listaInstancia_input");
	for (i = 0; i < designadores.length; i++) { 
			console.log(designadores[i].innerHTML);
	}
	

}
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
	if(modo==2){
		datestr = ''+dia+'/'+mes+'/'+ano+'';
		return datestr;		
	}
	if(modo==3){
		datestr = ''+ano+mes+dia+h+m+s+'';
		return datestr;		
	}
	if(modo==4){
		datestr = ''+h+m+s+'';
		return datestr;		
	}
	if(modo==5){
		datestr = ''+ano+mes+dia+'';
		return datestr;		
	}
	if(modo==6){
		datestr = ''+ano+'-'+mes+'-'+dia+' '+h+':'+m+':'+s;
		return datestr;		
	}
}



/* //Desativada, faltou espaço, passei a utilizar a de baixo, que cria um select/combobox
function listarSalvos(){
	var hoje = xDate(2);
	document.getElementById('historicochamadas').innerHTML=''
	+'<div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all" > Atendimentos em  '+hoje+'</div>'
	+'<div id="historicochamadaslista" style="overflow-y:auto;height:100px">';
	for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    //console.log(key + " => " + value);
	document.getElementById('historicochamadaslista').innerHTML+=''
	+'<div style="clear:both;">'
    +'   <span class="ui-button-text ui-c" style="float:left;">'+key+'</span> '
    +'   <span onclick="verSalvo('+key+');" class="ui-button-icon-left ui-icon ui-c ui-icon-search" style="float:right;"></span>'
    +'</div>'
	
	+'</div>';
	document.getElementById('historicochamadas').innerHTML+='</div>';
	}
	
}
*/




//Read more: http://www.linhadecodigo.com.br/artigo/3537/trabalhando-com-html5-web-storage.aspx#ixzz4D6rI7amb
function fullReset(){
	if(confirm("Atenção: Você perderá o atendimento atual e o historico de ligações.")){
		localStorage.clear();
		location.reload(true);
	}
	
}
function inserirFrase(frase){
	if(document.getElementById('txtnotas')){
		document.getElementById('txtnotas').value+=frase+'\n';
		document.getElementById('frasesProntas').selectedIndex=0;
		preencheNotas();
	}
}
function listarFrases(){
	var hoje = xDate(2);
	document.getElementById('frasesprontas').innerHTML=''
	//+'<div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all" > Frases Prontas</div>'
	+'<select onchange="inserirFrase(this.value);" id="frasesProntas" style="width:100%;">'
	+'<option> Frases Prontas </option>'
	+'<option> Manobra concluída, voz e navegação ok. </option>'
	+'<option> Manobra efetuada, porém ligação caiu antes de concluir os testes </option>'
	+'<option> Não há portas disponíveis, técnico orientado a abrir RDM </option>'
	+'<option> Ferramenta SAS com problemas ao buscar a central correta do cliente </option>'
	+'<option> Conforme orientado pelo setor de Problemas Sistemicos validadas as configurações na central correta pela célula de Cadastro. </option>'
	+'<option> Ligação caiu.</option>'
	+'<option> Manobra não concluída.</option>'
	+'<option> Linha já estava ativa.</option>'
	+'<option> Cadastro corrigido.</option>'
	+'<option> Não foi necessária Manobra, linha estava configurada corretamente, validado cadastro e parâmetros no ARD.</option>'
	+'<option> Foi necessária abertura de chamado para correção do problema.</option>'
	+'<option> Ordem pendenciada devido abertura de chamado.</option>'
	+'</select>';
	//+'<select id="historicochamadaslista" style="width:100%;">';
	
	/*for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    //console.log(key + " => " + value);
	document.getElementById('historicochamadaslista').innerHTML+=''
    +'   <option>'+key+'</option>'
	
	+'</select>';
	document.getElementById('historicochamadas').innerHTML+='</div>';
	}*/
	
}


//http://imasters.com.br/desenvolvimento/como-inserir-elementos-html-com-javascript/?trace=1519021197&source=single




function keepRestore(act){
	//var store_prelist = document.getElementById('prelist').innerHTML;//em chkfull
	var store_chkfull = document.getElementById('chkfull').innerHTML; //atualizar
	//var store_premanobra = document.getElementById('premanobra').innerHTML;//em chkfull
	//var store_presas = document.getElementById('presas').innerHTML;//em chkfull
	//var store_prewise = document.getElementById('prewise').innerHTML;//em chkfull
	//var store_prenotas = document.getElementById('prenotas').innerHTML;//em chkfull
	var store_utilInfo = document.getElementById('utilInfo').innerHTML;
	var store_txtnotas = document.getElementById('txtnotas').value;
	var store_txtparticular = document.getElementById('txtparticular').value;
	
	if(act=='salvar'){
		var instanciaRecuperada = localStorage.getItem('instancia');
		if(instanciaRecuperada!=null){
			localStorage.setItem('store_chkfull',store_chkfull);
			localStorage.setItem('store_utilInfo',store_utilInfo);
			localStorage.setItem('store_txtnotas',store_txtnotas);
			localStorage.setItem('store_txtparticular',store_txtparticular);
			console.log('salvo');
		}
		
	}
	if(act=='restaurar'){
		document.getElementById('chkfull').innerHTML		=localStorage.getItem('store_chkfull');
		document.getElementById('utilInfo').innerHTML		=localStorage.getItem('store_utilInfo');
		document.getElementById('txtnotas').value			=localStorage.getItem('store_txtnotas');
		document.getElementById('txtparticular').value		=localStorage.getItem('store_txtparticular');
		console.log('recarregado');
	}

}
//#####################################################################################

function limparChecklist(){
	localStorage.removeItem('instancia');
	localStorage.removeItem('instancia');
	localStorage.removeItem('store_chkfull');
	localStorage.removeItem('store_utilInfo');
	localStorage.removeItem('store_txtnotas');
	localStorage.removeItem('store_txtparticular');
	localStorage.removeItem('iniciadoEm');
	localStorage.removeItem('tbscheckbox');
	localStorage.removeItem('fulltestbox');
	localStorage.removeItem('radiuscheckbox');
	
	document.getElementById("wnd-checklist").style.display = "";
	document.getElementById("emAtendimento").innerHTML ="";
	document.getElementById("utilInfo").innerHTML ="";
	document.getElementById("prelist").innerHTML ="";
	document.getElementById("premanobra").innerHTML ="";
	document.getElementById("presas").innerHTML ="";
	document.getElementById("prewise").innerHTML ="";
	document.getElementById("prenotas").innerHTML ="";
	document.getElementById("txtnotas").value ="";
	document.getElementById("txtparticular").value ="";
	document.getElementById("menuLancador").innerHTML ="";
	document.getElementById("chkpainel").style.display = "none";
	document.getElementById("tbscheckbox").checked=false;
	document.getElementById("fulltestbox").checked=false;
	document.getElementById("radiuscheckbox").checked=false;

	
}
// icons =======================================================================
var extVSMonitorId = document.getElementById('vsmid').value;
var $wrapperXic = document.querySelector('head');
    HTMLNovoXic=''
	+'<link rel="apple-touch-icon" sizes="180x180" href="chrome-extension://'+extVSMonitorId+'/imgs/icons/apple-touch-icon.png">'
	+'<link rel="icon" type="image/png" href="chrome-extension://'+extVSMonitorId+'/imgs/icons/favicon-32x32.png" sizes="32x32">'
	+'<link rel="icon" type="image/png" href="chrome-extension://'+extVSMonitorId+'/imgs/icons/favicon-16x16.png" sizes="16x16">'
	+'<link rel="manifest" href="chrome-extension://'+extVSMonitorId+'/imgs/icons/manifest.json">'
	+'<link rel="mask-icon" href="chrome-extension://'+extVSMonitorId+'/imgs/icons/safari-pinned-tab.svg" color="#5bbad5">'
	+'<meta name="theme-color" content="#ffffff">';
	$wrapperXic.insertAdjacentHTML('afterbegin', HTMLNovoXic);

// cria posição localstorage de hoje caso não exista ===============================

var checklistName = 'Checklist-'+xDate(5).substr(2,6);
var checklistHj = localStorage.getItem(checklistName);
if (checklistHj===null)	
{
	localStorage.setItem(checklistName, '[ '+xDate(6)+' ] Checknote iniciado ====================================================================================== \n');
	//
	//document.getElementById('atendimentosctrhj').value=1;
	localStorage.setItem('atendimentosctrhj',1);
}
else
{
	//ja está criado, fazer nada
}

function menuLancador(){
	var instancia = localStorage.getItem('instancia');
		document.getElementById('menuLancador').innerHTML=''
		+'<button type="button" onclick="window.open(\'https://gvt.etadirect.com/\', \'_blank\');">ETA</button>'
		+'<button type="button" onclick="window.open(\'http://appsagre.gvt.net.br/Manobraunica/\', \'_blank\');">Man. Unica</button>'
		+'<button type="button" onclick="window.open(\'http://gvtapp/sas/configurar\', \'_blank\');">SAS</button>'
		+'<button type="button" onclick="window.open(\'http://wisetool.gvt.net.br/wisetool/\', \'_blank\');">Wise</button>'
		+'<button type="button" onclick="window.open(\'http://portalitatendimento.gvt.net.br/Portal_IT/Portal_IT.html\', \'_blank\');">PortalIT</button>'
		+'<button type="button" onclick="window.open(\'http://pnadmin.gvt.com.br/pn/pn.jsp\', \'_blank\');">Pn</button>'
		+'<button type="button" onclick="window.open(\'http://manobramassiva.gvt.net.br/ManobraMassiva/init.do\', \'_blank\');">Man. Massiva</button>'
		+'<button type="button" onclick="window.open(\'http://gvtapp/sas/portability\', \'_blank\');">Portability</button>'
		+'<button type="button" onclick="window.open(\'http://novosiebel.gvt.com.br/ecommunications_ptb/\', \'_blank\');">Siebel</button>';
}
// Checklist HTML ==================================================================	
function newChecklist(){
// Seleciona o elemento no DOM

var $wrapper = document.querySelector('.body'),
	
      // String de texto
    HTMLNovo=''
	+'<style>'
	+'#checklistBox ::-webkit-scrollbar { width: 6px; }'
	+'#checklistBox ::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); }'
	+'#checklistBox ::-webkit-scrollbar-thumb, #checklistBox ::-webkit-scrollbar-thumb:window-inactive  { background: #aaa; }'
	+'</style>'
	+'<div style="position:fixed;top:0px;left:0px;z-index:8000;width:2px;height:100%;" onmouseover="tgChecknote();"></div>'
	+'<a id="tgChecknote" style="position:fixed;top:9px;margin-left:12px;z-index:7001;" onclick="tgChecknote();" href="javascript:void(0)" class="ui-panel-titlebar-icon ui-corner-all ui-state-default"><span  class="ui-icon ui-icon-copy"></span></a>'
	//+'<img src="list.png" style="position:absolute;top:83px;margin-left:3px;z-index:9998;background:#000055;" onclick="exibirChecklist();" />'
	+'<style>'
	+'.edtspan{min-width:200px;width:200px;}'
	+'.edtspan:hover{background-color:#ccccff;}'
	+'.negrito { font-weight: bold;font-size:12px;}'
	+'.vermelho{color:red;}'
	+'.verde{color:#00aa00;}'
	+'.azul{color:blue;}'
	+'.laranja{color:orange;}'
	+'</style>'
	
	//painel de diagnostico
	+'<div id="checklistRightPanel" class="ui-tooltip ui-widget ui-widget-content ui-shadow ui-corner-all" style="display: none;width:300px;height:650px; top: 10px; left: 722px;z-index:999;position:fixed;">'
	+'	<div id="yyy" class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">'
	+'		<span class="ui-panel-title"> &nbsp;&nbsp;&nbsp; Diagnóstico</span>'
	+'	</div>'
	+'	<div id="xxx" class="ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix" role="toolbar" style="background: linear-gradient(rgb(204, 204, 204) 0%, rgb(238, 238, 238) 100%) !important;">        '
	+'		<div class="ui-toolbar-group-left">'
	+'		<button id="" name="" onclick="executarDiagnostico();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" type="button" role="button" aria-disabled="false">'
	+'			<span class="ui-button-icon-left ui-icon ui-c ui-icon-clipboard"></span>                '
	+'			<span class="ui-button-text ui-c">Executar diagnóstico</span>            '
	+'		</button>                    '
	+'		<span class="ui-separator"><span class="ui-icon ui-icon-grip-dotted-vertical"></span></span>'
	+'		<button id="" name="" onclick="recarregaInstancia();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Save" type="button" role="button" aria-disabled="false">                '
	+'			<span class="ui-button-icon-left ui-icon ui-c ui-icon-arrowrefresh-1-s"></span>                <span class="ui-button-text ui-c">Save</span>            '
	+'		</button>                 '
	+'		<button id="" name=""  class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Print" type="button" role="button" aria-disabled="false">                '
	+'			<span class="ui-button-icon-left ui-icon ui-c ui-icon-wrench"></span>                <span class="ui-button-text ui-c">Print</span>            '
	+'		</button>	     '
	+'	</div>        '
	+'	<div class="ui-toolbar-group-right"></div>    '
	+'	</div>'
	+'	<div id="painelDiagnostico"></div>'
	+'</div>'
	
	//painel de Filtro / Pesquisa
	+'<div id="checklistRightPanelFiltro" class="ui-tooltip ui-widget ui-widget-content ui-shadow ui-corner-all" style="display: none;width:500px;height:650px; top: 10px; left: 722px;z-index:999;position:fixed;overflow:auto;">'
	+'	<div id="yyy" class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">'
	+'		<span class="ui-panel-title"> &nbsp;&nbsp;&nbsp; Filtro e Pesquisa</span>'
	+'	</div>'
	+'	<div id="xxx" class="ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix" role="toolbar" style="background: linear-gradient(rgb(204, 204, 204) 0%, rgb(238, 238, 238) 100%) !important;">        '
	+'		<div class="ui-toolbar-group-left">'
	+'		<input id="filtrarHistoricoTexto" type="text" class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all" style="height:16px;">'
	+'		<button id="" name="" onclick="filtrarHistoricoTexto();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" type="button" role="button" aria-disabled="false">'
	+'			<span class="ui-button-icon-left ui-icon ui-c ui-icon-clipboard"></span>                '
	+'			<span class="ui-button-text ui-c">Executar diagnóstico</span>            '
	+'		</button>                    '
	+'		<span class="ui-separator"><span class="ui-icon ui-icon-grip-dotted-vertical"></span></span>'
	+'		<button id="" name="" onclick="recarregaInstancia();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Save" type="button" role="button" aria-disabled="false">                '
	+'			<span class="ui-button-icon-left ui-icon ui-c ui-icon-arrowrefresh-1-s"></span>                <span class="ui-button-text ui-c">Save</span>            '
	+'		</button>                 '
	+'		<button id="" name=""  class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Print" type="button" role="button" aria-disabled="false">                '
	+'			<span class="ui-button-icon-left ui-icon ui-c ui-icon-wrench"></span>                <span class="ui-button-text ui-c">Print</span>            '
	+'		</button>	     '
	+'	</div>        '
	+'	<div class="ui-toolbar-group-right"></div>    '
	+'	</div>'
	+'	<div id="textofiltrado"></div>'
	+'</div>'

	//corpo da checknote abaixo
	//setTimeout(function(){ alert("Hello"); }, 3000);
	//document.getElementById('ajaxRequestStatus').style.left="700px";
	+'<div id="checklistBox" class="ui-tooltip ui-widget ui-widget-content ui-shadow ui-corner-all" style="display: block; top: 0px; left: 2px;z-index:999;position:fixed;">'
	+'	<div id="" class="ui-panel ui-widget ui-widget-content ui-corner-all" data-widget="" style="min-width:700px;">'
	+'		<div id="formDadosClienteAtendimento:j_idt95_header" class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">'
	+'		<span class="ui-panel-title"> &nbsp;&nbsp;&nbsp; Checknote</span><span id="emAtendimento"></span>'
	+'		</div>'
//Barra checklist main
+'<div>'
+'    <span id="" class="ui-growl-pl" data-widget="" data-summary="data-summary" data-detail="data-detail" data-severity="all,error" data-redisplay="true"></span>'
+'    <div id="barraprincipal" class="ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix" role="toolbar">'
+'        <div class="ui-toolbar-group-left">'
+'            <button id="" name="" onclick="wndSelect(\'wnd-checklist\');" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-clipboard"></span>'
+'                <span class="ui-button-text ui-c">Checklist</span>'
+'            </button>'
+'            <button id="" name="" onclick="wndSelect(\'wnd-historico\');" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-folder-open">'
+'                </span><span class="ui-button-text ui-c"  >Abrir Hist&oacute;rico</span>'
+'			  </button>'
+'            <span class="ui-separator">'
+'                <span class="ui-icon ui-icon-grip-dotted-vertical"></span>'
+'            </span>'
+'            <button id="" name="" onclick="recarregaInstancia();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Save" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-arrowrefresh-1-s"></span>'
+'                <span class="ui-button-text ui-c">Save</span>'
+'            </button>'
//+'            <button id="" name="" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Delete" type="button" role="button" aria-disabled="false">'
//+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-trash"></span>'
//+'                <span class="ui-button-text ui-c">Delete</span>'
//+'            </button>'
+'            <button id="" name="" onclick="tgRightPanel();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Print" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-wrench	"></span>'
+'                <span class="ui-button-text ui-c">Print</span>'
+'            </button>'
	+'			<select>'
	+'				<option>Chamados</option>'
	+'				<option> </option>'
	+'				<option>San - Wise</option>'
	+'				<option>San - TBS</option>'
	+'				<option>San - Instancias</option>'
	+'				<option>San - Bloqueios</option>'
	+'				<option>San - Desbloqueios</option>'
	+'				<option> </option>'
	+'				<option>Feedback</option>'
	+'				<option>Feedback Critico</option>'
	+'			</select>'
+'        </div>'
+'        <div class="ui-toolbar-group-right">'
+'            <span id="" class="ui-menubutton">'
+'                <button id="" name="" onclick="wndSelect(\'wnd-opcoes\');" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" role="button" aria-disabled="false">'
+'                    <span class="ui-button-icon-left ui-icon ui-c ui-icon-gear"></span>'
+'                    <span class="ui-button-text ui-c">Op&ccedil;&otilde;es</span>'
+'                </button>'
+''
+'            </span>'
+'                        <span id="" class="ui-menubutton">'
+'                <button id="" name="" onclick="tgChecknote();" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" role="button" aria-disabled="false">'
+'                    <span class="ui-button-icon-left ui-icon ui-c ui-icon-carat-1-w"></span>'
+'                    <span class="ui-button-text ui-c">Ocultar</span>'
+'                </button>'
+''
+'            </span>'
+'        </div>'
+'    </div>'
+'</div>'

//Barra Historico 
+'<div id="wnd-historico-barra" style="display:none;">'
+'    <span class="ui-growl-pl" data-widget="" data-summary="data-summary" data-detail="data-detail" data-severity="all,error" data-redisplay="true"></span>'
+'    <div id="containerhistorico" class="ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix" role="toolbar">'
+'        <div class="ui-toolbar-group-left">'
+'			  <input id=" " type="text" class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all"></input>'
+'            <button id="" name="" onclick="" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-folder-open">'
+'                </span><span class="ui-button-text ui-c"  >Filtrar</span>'
+'			  </button>'
+'            <button id="" name="" onclick="tgRightPanelFiltro()" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Print" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-print"></span>'
+'                <span class="ui-button-text ui-c">Print</span>'
+'            </button>'
+'            <span class="ui-separator">'
+'                <span class="ui-icon ui-icon-grip-dotted-vertical"></span>'
+'            </span>'
+'            <button id="" name="" onclick="recarregaInstancia();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Save" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-arrowrefresh-1-s"></span>'
+'                <span class="ui-button-text ui-c">Save</span>'
+'            </button>'
+'            <button id="" name="" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Delete" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-trash"></span>'
+'                <span class="ui-button-text ui-c">Delete</span>'
+'            </button>'
+'            <button id="downchkbtn" name="" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Print" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-arrowthickstop-1-s"></span>'
+'                <span class="ui-button-text ui-c">Download</span>'
+'            </button>'

+'        </div>'
+'        <div class="ui-toolbar-group-right">'
+'            <span id="" class="ui-menubutton">'
+'                <button id="" name="" onclick="tgChecknote();" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" role="button" aria-disabled="false">'
+'                    <span class="ui-button-icon-left ui-icon ui-c ui-icon-circle-close"></span>'
+'                    <span class="ui-button-text ui-c">Deletar todas as Checklists</span>'
+'                </button>'
+'            </span>'
+'        </div>'
+'    </div>'
+'</div>'
	+'		<div id="" class="ui-panel-content ui-widget-content" style="width:700px;height:600px;margin:5px;">'
	+'							'
	+'			<!-- Checklist -->		'
	//+'			<button style="float:right;" type="button" onclick="tgChecknote();">Ocultar</button>'
	//+'			<button style="float:right;" type="button" onclick="preencherChecklist();">Preencher</button>  &nbsp;'
	//+'			<button style="float:right;" type="button" onclick="limparChecklist();">Limpar</button>  &nbsp;'
	//+'			<select>'
	//+'				<option>Chamados</option>'
	//+'				<option>San - Wise</option>'
	//+'				<option>San - TBS</option>'
	//+'				<option>Ionix - Sgen</option>'
	//+'			</select><hr>'
	+'          <div id="wnd-checklist" style="display:;">'
	+'			<button id="btNovoAtendimento" name="" onclick="preencherChecklist();" onmouseover="preencheNotas();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-priority-primary" onclick="" type="button" role="button" aria-disabled="false"><span class="ui-button-text ui-c">Novo</span></button>'
+'            <button id="" name="" onclick="salvarFechar();" onmouseover="preencheNotas();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-disk">'
+'                </span><span class="ui-button-text ui-c"  >Salvar</span></button>'
+'            <span class="ui-separator">'
+'            <button id="" name="" onclick="limparChecklist();" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Delete" type="button" role="button" aria-disabled="false">'
+'                <span class="ui-button-icon-left ui-icon ui-c ui-icon-trash"></span>'
+'                <span class="ui-button-text ui-c">Delete</span>'
+'            </button>'
	+'			<select id="tipoChecklist"><option>Manobra</option><option>TL</option></select>'
	+'			<span id="menuLancador">'	
	+'			</span><hr>'
	+'			<div id="chkpainel" style="display:none">'
	+'			'
	+'			<div style="">'
	+'			<div style="float:left;width:265px;" >'
	+'			<label>TBS: <input type="checkbox" id="tbscheckbox" onclick="optionsChecker(this.id);"></input></label><span style="display:inline-block;" class="ui-icon ui-icon-grip-dotted-vertical">.</span><label>FullTest: <input type="checkbox" id="fulltestbox" onclick="optionsChecker(this.id);"></input></label><label><span style="display:inline-block;" class="ui-icon ui-icon-grip-dotted-vertical">.</span><label>Radius: <input type="checkbox" id="radiuscheckbox" onclick="optionsChecker(this.id);"></input><label>' 
	+'			'
//	+'			<label>Sinalizar no ETA: <input type="checkbox" id="etaimportante"></input><label> <span style="display:inline-block;" class="ui-icon ui-icon-grip-dotted-vertical">.</span>'
	+'			<div style="padding:3px;border:dotted 1px #999999;margin-top:0px;height:38px;"> <button class="copiar" type="button" onmouseover="preencheNotas();" >Copiar</button><span id="cpstatus"></span></div> </div>'
	+'			<div style="float:left;">  </div>'
	+'			<div style="float:left;"> </div>'
	+'          <div style="float:left;width:10px;"> &nbsp; </div>'
	+'			<div style="float:left;"> <input type="checkbox" checked="checked" id="filtroManobra" onclick="boxChecker(this.id);" />Manobra: <br><textarea id="txtmanobra" onblur="preencheManobra();" style="width: 70px;height:40px;"></textarea></div>'
	+'			<div style="float:left;"> <input type="checkbox" checked="checked" id="filtroSas" onclick="boxChecker(this.id);" />SAS:     <br><textarea id="txtsas" onblur="preencheSas();" style="width: 70px;height:40px;"></textarea></div>'
	+'			<div style="float:left;"> <input type="checkbox" checked="checked" id="filtroWise" onclick="boxChecker(this.id);" />Wise/Efika:    <br><textarea id="txtwise" onblur="preencheWise();" style="width: 70px;height:40px;"></textarea></div>'
	+'			<div style="float:left;width:150px;margin-left:5px;margin-bottom:5px;display:none" id="rotaantigo">'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota">'
	+'					<option>Voz / Linha</option>'
	+'					<option value="0,5,4,0">Ativação de linha</option>'	
	+'					<option value="0,5,4,1">Curto /  PLO</option>'	
	+'					<option value="0,5,4,7">Ocupado por outro assinante</option>'	
	+'					<option value="0,5,4,4">Mudo sem bateria</option>'	
	+'					<option value="0,5,4,3" >Mudo com bateria  </option>'	
	+'					<option value="0,5,4,9" >Ruido chiado  </option>'	
	+'					<option>Sem ring  </option>'	
	+'				</select>'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota">'
	+'					<option>Dados / Banda</option>'
	+'					<option value="0,5,0,7" > Sem Sincronismo </option>'
	+'					<option value="0,5,0,1" > Sem Autenticação </option>'
	+'					<option value="0,5,0,6" > Sem Navegação </option>'
	+'					<option value="0,5,0,2" > Downgrade </option>'
	+'					<option value="0,5,0,10" > Upgrade </option>'
	+'					<option value="0,5,0,11" > Velocidade </option>'
	+'					<option value="0,5,0,4" > Erro de Cadastro </option>'
	+'				</select>'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota">'
	+'					<option>Instalação + Informação</option>'
	+'					<option value="0,5,2,5" > Consulta Facilidade </option>'
	+'					<option value="0,5,2,1"> Consulta Parâmetros </option>'
	+'					<option value="0,5,2,0"> Consulta Cadastro </option>'
	+'					<option value="0,5,2,2"> Consulta Quedas </option>'
	+'					<option value="0,5,2,8"> Ligação Indevida </option>'
	+'					<option value="0,5,2,9,1"> Indisponibilidade sistêmica </option>'
	+'					<option value="0,5,3,1"> Ativação Linha </option>'
	+'					<option value="0,5,3,0"> Ativação Banda </option>'
	+'					<option value="0,5,3,5"> Mudança de endereço </option>'
	+'				</select>'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota"> '
	+'					<option>TL</option>'
	+'					<option value="0,9,0,1">Produtiva</option>'
	+'					<option value="0,9,0,0">Improdutiva</option>'
	+'					<option value="0,9,0,2">Produtiva com alteração</option>'
	+'				</select>'
	+'			</div>'
	
	+'			<div style="float:left;width:150px;margin-left:5px;margin-bottom:5px;" id="rota">'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota">'
	+'					<option>Voz / Linha</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,LInha,LInha muda"> Linha muda e PLO</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,LInha,Não efetua e não recebe"> Nao efetua/Recebe e Bloqueio</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,LInha,Ocupado por outro assinante"> Ocupado por outro Assinante</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,LInha,Ruido e chiado"> Ruido/Chiado</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,LInha,Sem ring"> Sem ring</option>'	
	+'				</select>'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota">'
	+'					<option>Dados / Banda</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Banda larga,Sincronismo"> Sincronismo e Quedas</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Banda larga,Autenticação"> Autenticação</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Banda larga,Não navega"> Navegação</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Banda larga,Mudança de velocidade"> Mudança de velocidade (D/U)</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Banda larga,Não atinge velocidade contratada"> Não atinge velocidade contratada</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Banda larga,Erro de cadastro"> Erro de Cadastro</option>'
	+'				</select>'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota">'
	+'					<option>Instalação + Informação</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Informação,Consultas"> Consulta </option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Informação,Ligação indevida"> Ligação Indevida</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,TV,PVC de video"> PVC de vídeo</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Secundario"> Atualização de Secundário</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Instalação,Desconexão de banda"> Desconexão de Banda</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Instalação,Ativação de banda"> Ativação de banda</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Instalação,Ativação de linha"> Ativação de linha</option>'
	+'					<option value="Suporte Técnico,FULL teste cadastro,Manobra,Instalação,Mudança de endereço"> Mudança de endereço</option>'
	+'				</select>'
	+'				<select onchange="rotaDeFluxo(this.value);tgChecknote();" style="width:190px;" class="seletorrota"> '
	+'					<option>TL  /  SGEN  /  Chamados</option>'
	+'					<option> </option>'
	+'					<option value="Suporte Técnico,Cadastro,TL,Improdutiva"> TL Improdutiva</option>'
	+'					<option value="Suporte Técnico,Cadastro,TL,Produtiva"> TL Produtiva</option>'
	+'					<option value="Suporte Técnico,Cadastro,TL,Produtiva com alteração"> TL Produtiva com alteração</option>'
	+'					<option> </option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Autenticação"> SGEN Autenticação</option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Mudo"> SGEN Mudo</option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Não Acessa Site Especifico"> SGEN Não Acessa Site Especifico</option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Ruido e chiado"> SGEN Ruido chiado</option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Sem gerencia"> SGEN Sem gerencia</option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Sem navegação"> SGEN Sem navegação</option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Sem Ring"> SGEN Sem Ring</option>'
	+'					<option value="Suporte Técnico,Cadastro,SGEN,Sem sincronismo"> SGEN Sem sincronismo</option>'
	+'					<option> </option>'
	+'					<option value="Suporte Técnico,Cadastro,Abertura de chamados,Chamados IT"> Abertura de chamados</option>'

	+'				</select>'
	+'			</div>'

	+'			<hr style="clear: both;"></div>'
	+'			<table style="width:700px;vertical-align:top;" border="0" cellspacing="0" cellpadding="0">'
	+'			<tr>'
	+'			<td style="vertical-align:top;">'
	+'			 <div id="chkfull" class="chkfull" contenteditable="false" class="preventnew"   style="background:#dddddd;overflow:scroll;max-width:455px;max-height:500px;height:490px;" >'
	+'			 <pre id="prelist" contenteditable="true" class="preventnew"  onblur="keepRestore(\'salvar\');" style="margin:0px;width:100%;clear:both;display:;white-space: pre-wrap;border:dotted 1px #cccccc;background:#ffffff;"></pre>'
	+'			 <pre id="presas" contenteditable="true" class="preventnew"   onblur="keepRestore(\'salvar\');" style="margin:0px;float:left;width:100%;display:;white-space: pre-wrap;border:dotted 1px #cccccc;background:#ffffff;"></pre>'
	+'			 <pre id="premanobra" contenteditable="true" class="preventnew" onblur="keepRestore(\'salvar\');" style="margin:0px;float:left;width:100%;display:;white-space: pre-wrap;border:dotted 1px #cccccc;background:#ffffff;"></pre>'
	+'			 <pre id="prewise" contenteditable="true" class="preventnew"   onblur="keepRestore(\'salvar\');" style="margin:0px;float:left;width:100%;display:;white-space: pre-wrap;border:dotted 1px #cccccc;background:#ffffff;"></pre>'
	+'			 <pre id="prenotas" contenteditable="true" class="preventnew"  onblur="keepRestore(\'salvar\');" style="margin:0px;float:left;width:100%;display:;white-space: pre-wrap;border:dotted 1px #cccccc;background:#ffffff;"></pre>'
	+'			 </div>'
	+'			</td>'
	+'			<td style="width:235px;vertical-align:top;">'
	+'			Informações Uteis:<div id="utilInfo"></div><br>'
	+'			Notas do Operador:<br><textarea id="txtnotas" class="txtnotas" onblur="preencheNotas();" style="width:98%;height:130px;border:dotted 1px #000099;"></textarea><br>'
	+'			<div id="frasesprontas" style="overflow:auto;clear:both;width:100%;"></div><br>'
	+'			Notas Particulares:<br><textarea id="txtparticular" onblur="preencheNotas();" style="width:98%;height:100px;border:dotted 1px #000099;"></textarea>'
	+'			</td>'
	+'			</tr>'
	+'			</table>'
	+'			</div>'
	+'					</div>'
	+'			<!-- Checklist --------------------------------------------------------------------------------------------- -->	'
	// Historico callhistmenu
	+'			<!-- Historico ---------------------------------------------------------------------------------------------- -->	'
	+'			<div id="wnd-historico" style="display:none;">	'
	+'				<div class="ContentSideSections Implementation" style="overflow: ;">'
	+'				<div style="min-width: 300px; min-height: 550px; overflow: visible; position: relative;" class="ui-layout-container">'
	+'				<div id="" class="ui-layout-unit ui-widget ui-widget-content ui-corner-all ui-layout-west ui-layout-pane ui-layout-pane-west" style="position: absolute; margin: 0px; left: 0px; right: auto; top: 0px; bottom: 0px; min-height: 550px; z-index: 0; width: 135px; display: block; visibility: visible;overflow:auto;">'
	+'				<div id="callhistmenu" class="ui-layout-unit-content ui-widget-content" style="position: relative; height: 550px; visibility: visible;">'
	+'					'
	+'				</div>'
	+'				</div>'
	+'				<div id="" class="ui-layout-unit ui-widget ui-widget-content ui-corner-all ui-layout-center ui-layout-pane ui-layout-pane-center" style="position: absolute; margin: 0px; left: 135px; right: 0px; top: 0px; bottom: 0px; height: auto; width: auto; z-index: 0; display: block; visibility: visible;">'
	+'				<div id="callhistcontent" class="ui-layout-unit-content ui-widget-content" style="position: relative; height: 550px; visibility: visible;overflow:auto;">'
	+'				'
	+'				</div>	'
	+'				</div></div>'
    +'            </div>'
	+'			</div>'
	+'			<!-- Historico ---------------------------------------------------------------------------------------------- -->	'
	// Opcoes
	+'			<!-- Opcoes -->	'
	+'			<div id="wnd-opcoes" style="display:none;">'
	+'				<div class="ContentSideSections Implementation" style="overflow: ;">'
	+'				<div style="min-width: 300px; min-height: 550px; overflow: visible; position: relative;" class="ui-layout-container">'
	+'				<div id="" class="ui-layout-unit ui-widget ui-widget-content ui-corner-all ui-layout-west ui-layout-pane ui-layout-pane-west" style="position: absolute; margin: 0px; left: 0px; right: auto; top: 0px; bottom: 0px; min-height: 550px; z-index: 0; width: 92px; display: block; visibility: visible;">'
	+'				<div class="ui-layout-unit-content ui-widget-content" style="position: relative; height: 550px; visibility: visible;">'
	+'					Geral'
	+'				</div>'
	+'				</div>'
	+'				<div id="" class="ui-layout-unit ui-widget ui-widget-content ui-corner-all ui-layout-center ui-layout-pane ui-layout-pane-center" style="position: absolute; margin: 0px; left: 106px; right: 0px; top: 0px; bottom: 0px; height: auto; width: auto; z-index: 0; display: block; visibility: visible;">'
	+'				<div class="ui-layout-unit-content ui-widget-content" style="position: relative; height: 550px; visibility: visible;overflow:auto;">'
	+'				Nome e Matriula: <input id="localuser" onblur="localUserSet();" type="text"></input><button type="button">Ok</button> <span id="localuserspan">Ex: Joao (G0012345)</span>'
	+'				<br><br><button type="button" onclick="fullReset();">Full Reset</button> <span>Atenção, ao clicar aqui você perderá seu histórico de ligações</span>'
	+'				<br>'
	+'				</div>	'
	+'				</div><div id="j_idt89-resizer" class="ui-layout-resizer ui-layout-resizer-west ui-draggable-handle ui-layout-resizer-open ui-layout-resizer-west-open" title="Resize" style="position: absolute; padding: 0px; margin: 0px; font-size: 1px; text-align: left; overflow: hidden; z-index: 2; cursor: w-resize; left: 100px; height: 200px; width: 6px; top: 0px;"></div></div>'
    +'            </div>'
	+'			</div>'
	+'			<!-- Opcoes ---------------------------------------------------------------------------------------------------- -->'
	+'		</div>'
	+'	</div>'
	+'</div>'
	+'<div style="position: absolute;top:-9000px; width: 99px; height: 66px; margin: 0px;">'
	+'<textarea id="txtfinal" class="txtfinal" > &nbsp; </textarea>'
	+'<textarea id="txttemp" class="txttemp" > &nbsp; </textarea>'
	+'<input id="n2save" type="hidden" />'
	+'<input id="atendimentosctrhj" type="hidden" />'
	+'</div>'

	//document.getElementById('checklistBox').innerHTML+='</div>';

	// Insere o texto antes do conteúdo atual do elemento
	$wrapper.insertAdjacentHTML('afterbegin', HTMLNovo);
	//Alguns javascripts de estilização:
	document.getElementById('containerhistorico').style.setProperty('background', 'inherit', 'important');
	document.getElementById('barraprincipal').style.cssText = 'background:linear-gradient(to bottom, #ccc 0%,#eee 100%) !important;';
	//document.getElementById('barraprincipal').style.setProperty('background', 'inherit', 'important');
	//linear-gradient(to bottom, #0064ae 0%,#004266 100%) !important;

}
newChecklist();
listarFrases();
function optionsChecker(optionsBox){
	var optBox = localStorage.getItem(optionsBox);
	if(optBox==null){optBox='false';}
	if(optBox=='false'){
		localStorage.setItem(optionsBox,'true');
	}else{
		localStorage.setItem(optionsBox,'false');
	}
}
function filtrarHistoricoTexto(){
	var saida='';
	var procurar = jQuery('#filtrarHistoricoTexto').val();

	var historico = document.getElementById('callhistcontent').innerText.split('\n');
	
	for(i=0;i<historico.length;i++){
		if(historico[i].indexOf(procurar)>-1)
		var saida=saida+historico[i]+'\n';
	}
	jQuery('#textofiltrado').html('<div style="white-space: pre-wrap;padding:10px;">'+saida+'</div>');
	//
}
function optionsCheckerInit(){
	if(localStorage.getItem('tbscheckbox')=='true'){document.getElementById('tbscheckbox').checked=true;}
	if(localStorage.getItem('fulltestbox')=='true'){document.getElementById('fulltestbox').checked=true;}
	if(localStorage.getItem('radiuscheckbox')=='true'){document.getElementById('radiuscheckbox').checked=true;}
}
optionsCheckerInit();

function boxChecker(qualbox){
	var qualboxval = localStorage.getItem(qualbox);
	if(qualboxval==null){qualboxval='true';}
	if(qualboxval=='false'){
		localStorage.setItem(qualbox,'true');
	}else{
		localStorage.setItem(qualbox,'false');
	}
	console.log(localStorage.getItem(qualbox));
}
function boxCheckerInit(){
	if(localStorage.getItem('filtroManobra')=='false'){document.getElementById('filtroManobra').checked=false}
	if(localStorage.getItem('filtroSas')=='false'){document.getElementById('filtroSas').checked=false}
	if(localStorage.getItem('filtroWise')=='false'){document.getElementById('filtroWise').checked=false}
}
boxCheckerInit();
function wndSelect(wnd){
	var wnds = ["wnd-checklist","wnd-historico","wnd-opcoes"];

	
	for(i=0;i<wnds.length;i++){
		if(wnd==wnds[i]){
			document.getElementById(wnds[i]).style.display = "";
			document.getElementById(wnds[i]).style.display = "";
			if(wnd=='wnd-historico'){
				document.getElementById('wnd-historico-barra').style.display = "";
			}else{document.getElementById('wnd-historico-barra').style.display = "none";}
			
			}
		else{
			document.getElementById(wnds[i]).style.display = "none";
			}
	}
	
}


// ####################################################################################

var instanciaRecuperada = localStorage.getItem('instancia');
var atendctr = localStorage.getItem('atendimentosctrhj');
if(instanciaRecuperada!=null){
	document.getElementById("emAtendimento").innerHTML="( Recarregado: "+instanciaRecuperada+") - "+atendctr;
	keepRestore('restaurar');
	recarregaInstancia();
	menuLancador();
	document.getElementById('chkpainel').style.display='';
}


function recarregaInstancia(){
	
	var instanciaRecuperada = localStorage.getItem('instancia');
	//document.getElementById("emAtendimento").innerHTML="( Recarregado: "+instanciaRecuperada+")";
	document.getElementById('formFiltroPesquisa:txtInstancia').value=instanciaRecuperada
	document.getElementById("formFiltroPesquisa:buttonPesquisa").click();
}
function salvarFechar(){
	salvarStorage();
	limparChecklist();
}
function preencherChecklist(){
	var qualChecklist = document.getElementById('tipoChecklist').options.selectedIndex;
	wndSelect('wnd-checklist');
	
	localStorage.setItem('iniciadoEm',xDate(6));
	
	if(typeof(document.getElementById('prelist')) !== 'undefined' && document.getElementById('prelist') !== null) {
		if(document.getElementById('prelist').innerText.length>200){
			//alert(xDate(5).substr(2,6));
			//if(confirm('Isto vai SALVAR a checklist atual, e gerar uma nova, continuar?')){
				salvarStorage();
				limparChecklist();				
			//}
		}
	}
	document.getElementById('chkpainel').style.display='';
		//detectar se tem atendimento aberto, se tiver, carrega, se nao tiver, continua
		
		
		//inicia preenchimento automatico
		var info = document.getElementsByTagName("label");
				

		

		var dados = [];
		for (i = 0; i < info.length; i++) { 
		//if(lista[i].innerHTML.match(/P/g)){
		if(info[i].innerHTML=="Atividade:")	{dados['atividade']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="Documento:")	{dados['documento']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="Tipo:")		{dados['tipo']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="Técnico:")	{dados['tecnico']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="Cliente:")	{dados['cliente']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="PON:")		{dados['pon']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="Armário:")	{dados['armario']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="Instância:")	{dados['instancia']=info[i+1].innerHTML.replace(/TV por Assinatura: |Linha Telefônica: |Banda Larga: | - Ativo| - Pendente| - Inativo/gi,"");}
		if(info[i].innerHTML=="Status:")	{dados['status']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="Matrícula:")	{dados['matricula']=info[i+1].innerHTML;}
		if(info[i].innerHTML=="RPON:")		{dados['rpon']=info[i+1].innerHTML;}if(info[i].innerHTML=="RPON:")		{dados['rpon']=info[i+1].innerHTML;}
		if(info[i].innerHTML.match(/G00/g) && (info[i].innerHTML.indexOf('-')>0)){console.log(info[i].innerText);dados['userDetectado']=info[i].innerHTML;}
		if(info[i].innerHTML.match(/node Address:/g)){dados['facilidade']=info[i].innerText.split('node Address:')[1].split(',')[0].trim();}
		if(info[i].innerHTML.match(/Porta : /g)){//explodir portas e detectar primario
		var portasExplodidas = info[i].innerText.split('Porta : ');
		dados['facilidade']='';
				for (pexplo = 0; pexplo < portasExplodidas.length; pexplo++) { 
				if(pexplo>0){dados['facilidade']+=portasExplodidas[pexplo].split(' ')[0]+' ';}
				//alert(portasExplodidas[1]);
				}
			}
		}
		
		//Designadores e Rpon
		var designadores = document.getElementById("formDadosClienteAtendimento:listaInstancia_input");
		
		produtos='<div class="ui-datalist-item">'
					+'<a href="#" class="ui-commandlink ui-widget ui-icon ui-icon-arrow-1-e" style="float:left;" title="">&nbsp;</a><span style="display:inline-block;height:16px;">'
					+'CPF | <span style=\"color:;\">'+dados['documento'].replace(/\.|-|\//gi,"")
					+'</span></span></div>';
		//var produtos = "CPF: "+dados['documento'].replace(/\.|-/gi,"")+"<br>";
		for (i = 0; i < designadores.length; i++) { 
			var desColor = ' ';
			var Destitle = ' ';
			var desIcon=' ';// check clock alert
			var desId='';
			var desType='';
			if(designadores[i].innerHTML.match(/Banda/g)){			desId='desbl'+i;desType=' BL <img onclick="ctrlc(\'desbl'+i+'\',\'Designador BL '+i+'\');" id="imgicbl" src="chrome-extension://'+extVSMonitorId+'/imgs/icons/icon-copy.png" style="cursor:pointer;" /> <img id="" src="chrome-extension://'+extVSMonitorId+'/imgs/icons/blank.png" />'; desColor='blue';		}
			if(designadores[i].innerHTML.match(/TV/g)){		        desId='destv'+i;desType=' TV <img onclick="ctrlc(\'destv'+i+'\',\'Designador TV '+i+'\');" id="imgictv" src="chrome-extension://'+extVSMonitorId+'/imgs/icons/icon-copy.png" style="cursor:pointer;" /> <img id="" src="chrome-extension://'+extVSMonitorId+'/imgs/icons/blank.png" />';  }
			if(designadores[i].innerHTML.match(/Linha/g)){			desId='desdn'+i;desType=' Dn <img onclick="ctrlc(\'desdn'+i+'\',\'Instancia '+i+'\');"     id="imgicdn" src="chrome-extension://'+extVSMonitorId+'/imgs/icons/icon-copy.png" style="cursor:pointer;" /> <img id="imgicdntbs_desdn'+i+'" src="chrome-extension://'+extVSMonitorId+'/imgs/icons/tbs-12g.png" onclick="tbsFormat(\'desdn'+i+'\');ctrlc(\'desdn'+i+'\',\'Instancia-TBS '+i+'\');" style="cursor:pointer;" />';   desColor='orange';		}
			if(designadores[i].innerHTML.match(/ - Ativo/g)){		desIcon='check';desTitle = 'Ativo';desIna='text-decoration:none;';}
			if(designadores[i].innerHTML.match(/ - Inativo/g)){		desIcon='alert';desTitle = 'Inativo';desColor='#cccccc';desIna='color:#cccccc;';}
			if(designadores[i].innerHTML.match(/ - Pendente/g)){	desIcon='clock';desTitle = 'Pendente';desIna='text-decoration:none;';}
			
			produtos+='<div class="ui-datalist-item">'
					+'<a href="#" class="ui-commandlink ui-widget ui-icon ui-icon-'+desIcon+'" style="float:left;" title="'+desTitle+'">&nbsp;</a><span style="display:inline-block;height:16px;'+desIna+'">'
					+desType+'  <span id="'+desId+'" style=\"color:'+desColor+';\">'+designadores[i].innerHTML.replace(/TV por Assinatura: |Linha Telefônica: |Banda Larga: | - Ativo| - Pendente| - Inativo/gi,"")
					+'</span></span></div>';
		}
		//Fim Designadores e Rpon
		
		menuLancador();
		
		document.getElementById("utilInfo").innerHTML=produtos;
		var atendctr = localStorage.getItem('atendimentosctrhj');
		document.getElementById("emAtendimento").innerHTML="( Em atendimento: "+dados['instancia']+")"+" - "+atendctr;
		localStorage.setItem('instancia',dados['instancia']);
	//document.getElementById('formFiltroPesquisa:txtInstancia');
	
	//guardar na Chrome Storage os dados do GPS
	/*var csInstancia = dados['instancia'];
	var csPon = dados['pon'];
	
	function salvarOpcoesCS() {
	var csInstancia = dados['instancia'];
	var csPon = dados['pon'];
	
  chrome.storage.sync.set({
    csInstancia: csInstancia,
    csPon: csPon,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status').innerHTML = 'Options saved.';
    
    setTimeout(function() {
      document.getElementById('status').innerHTML = '';
    }, 750);
  });
}*/
	
	var usuarioatual = localStorage.getItem('localUserG');
	var tipoChecklistin = document.getElementById('tipoChecklist');
	if(usuarioatual<2){usuarioatual=dados['userDetectado'];}
	if(qualChecklist==0){ //manobra <------------------------------------------------------------------------------
		
		
		localStorage.setItem('xmatricula',dados['matricula']);
		localStorage.setItem('xcliente',dados['cliente']);
		localStorage.setItem('xtecnico',dados['tecnico']);
		localStorage.setItem('xatividade',dados['atividade']);
		
		document.getElementById("prelist").innerHTML=''
		+'C.O '+tipoChecklistin[tipoChecklistin.selectedIndex].innerText+' - '+usuarioatual
		+'<br>|| Instância      : '+dados['instancia']
		+'<br>|| Técnico        : <b style="color:#009900;">'+dados['tecnico']+'</b> ('+dados['matricula']+')'
		+'<br>|| Cliente        : '+dados['cliente']
		+'<br>|| Tipo           : '+dados['tipo']
		+'<br>|| PDA            : '
		+'<br>|| Motivo         : '
		+'<br>|| Par Primário   : '+dados['facilidade']
		+'<br>|| Pares Testados : '
		+'<br>|| Binadas        : ';
		if(dados['instancia'].length > 5 ){
			document.getElementById("prelist").style.display = ""; 
			document.getElementById("wnd-checklist").style.display = "";
		}
		
		document.getElementById('n2save').value=dados['instancia'];

	}
	if(qualChecklist==1){ //TL <--------------------------------------------------------------------------------
		document.getElementById('menuLancador').innerHTML=''
		+'<button type="button">Man. Unica</button>'
		+'<button type="button">Siebel</button>'
		+'<button type="button">Sagre Oper</button>'
		+'<button type="button">OSP</button>'
		+'<button type="button">BPM</button>';
		
		document.getElementById("prelist").style.display = ""; 
		document.getElementById("prelist").innerHTML=''
		+'C.O '+tipoChecklistin[tipoChecklistin.selectedIndex].innerText+' - '+usuarioatual+'<br>'
		+'======================================'
		//+'<span>Numero TL  :</span><span class="edtspan"> Aqui </span><br>'
		//+'<span>Motivo     :</span><span class="edtspan"> Aqui </span><br>'
		//+'<span>UF e Cidade:</span><span class="edtspan"> Aqui </span><br>'
		//+'<span>SS ID      :</span><span class="edtspan"> Aqui </span><br>'
		//+'<span>Técnico    :</span><span class="edtspan"> Aqui </span><br>'
		+'<br>'
		+'<br>'
		+'======================================';		//
	}
	
	
	keepRestore('salvar');
	localStorage.setItem('atividade',dados['atividade']);
	statusCopiar('<span style="display:inline-block;text-align:center;color:#66ccff;border:solid 1px #66ccff;padding:2px;width:200px;"> Novo atendimento.</span>') 
}

// ####################################################################################

function tgChecknote(){
			if(document.getElementById("checklistBox").style.display=='none'){
				//document.getElementById("checklistBox").style.display = "block";
				$("#checklistBox").animate({width:'toggle'},100);
				//$("#checklistRightPanel").animate({width:'toggle'},100);

			}
			else {
				//document.getElementById("checklistBox").style.display = "none";
				$("#checklistBox").animate({width:'toggle'},100);
				$("#checklistRightPanel").animate({width:'hide'},100);
			}
			
}
function showChecknote(){
			if(document.getElementById("checklistBox").style.display=='none'){
				document.getElementById("checklistBox").style.display = "block";
			}
			else {
				//document.getElementById("checklistBox").style.display = "none";
			}
			
}
function tgRightPanel(){
	$("#checklistRightPanel").animate({width:'toggle'},100);
	executarDiagnostico();
}
function tgRightPanelFiltro(){
	$("#checklistRightPanelFiltro").animate({width:'toggle'},100);
	//executarDiagnostico();
}
function verificaNavegador(){
var txtmanobra = document.getElementById("txtmanobra").value;
var txtsas = document.getElementById("txtsas").value;
var txtwise = document.getElementById("txtwise").value;
				
	if (txtwise.indexOf('IP DO MODEM DO CLIENTE')>-1){
	navegadorwise = "ie";
	}else{
	navegadorwise = "gc";
	}
	if (txtsas.indexOf('Novo LEN:')>-1){
	navegadorsas = "ie";
	}else{
	navegadorsas = "gc";
	}
	if (txtmanobra.indexOf('Pesquisar por: Telefone BA')>-1){
	navegadormu = "ie";
	}else{
	navegadormu = "gc";
	}
//console.log (navegadorwise);
//console.log (navegadorsas);
//console.log (navegadormu);
}
function preencheManobra(){
	verificaNavegador();
	if(document.getElementById("txtmanobra").value.length>5){
		var texto = document.getElementById("txtmanobra").value;
		//var texto = document.getElementById("txtmanobra").value.replace(/(?:\r\n|\r|\n)/g, '<br />');
		if(localStorage.getItem('filtroManobra')=='false'){
			document.getElementById("premanobra").innerHTML = '<br>|| [ Manobra Única: ]<br>'+texto; //.replace(/(?:\r\n|\r|\n)/g, '<br />')
			//document.getElementById("premanobra").innerHTML = '<br>[ Manobra Única: ]<br>'+document.getElementById("txtmanobra").value; //.replace(/(?:\r\n|\r|\n)/g, '<br />')
			
			
			document.getElementById("txtmanobra").value='';
			keepRestore('salvar');
		}else{
			if((texto.indexOf('alimentador')>0) && (texto.indexOf('distribuidor')>0) && (texto.indexOf('OSS - MANOBRA')>0)){
				if(texto.indexOf('Consulta Telefone')>-1){
				var texto = texto.split('alimentador')[1];
				var texto = texto.split('distribuidor')[0];
				}else if(texto.indexOf('Pesquisar por:')>-1){
				var texto = texto.split('alimentador')[1];
				var texto = texto.split('Motivo')[0];
				}
				var texto = texto.replace(/Armário\n/gi,"Armário: ");
				var texto = texto.replace(/Porta\n/gi,"Porta: ");
				var texto = texto.replace(/Secundário\n/gi,"Secundário: ");
				var texto = texto.replace(/Caixa\n/gi,"Caixa: ");
				var texto = texto.replace(/Sagre\n/gi,"");
				var texto = texto.replace(/Sagre \n/gi,"");
				var texto = texto.replace(/Sagre/gi,"");
				var texto = texto.replace(/Banda Larga\n/gi,"");
				var texto = texto.replace(/Banda Larga \n/gi,"");
				var texto = texto.replace(/Banda Larga/gi,"");
				var texto = texto.replace(/Encapsulamento	-/gi,"");
				var texto = texto.replace(/Encapsulamento -  /gi,"");
				var texto = texto.replace(/\n /gi,"");
				//var texto = document.getElementById("txtmanobra").value.replace(/Armário\n|Porta\n|Banda Larga\n|Secundário\n|Sagre\n| - Inativo/gi,"");
				
				document.getElementById("premanobra").innerHTML = '<br>|| [ Manobra Única: ]<br>'+texto; //.replace(/(?:\r\n|\r|\n)/g, '<br />')
				//document.getElementById("premanobra").innerHTML = '<br>[ Manobra Única: ]<br>'+document.getElementById("txtmanobra").value; //.replace(/(?:\r\n|\r|\n)/g, '<br />')
				
				
				document.getElementById("txtmanobra").value='';
				keepRestore('salvar');
				
			}else{
				//alert('Copie e cole o Manobra unica inteiro (CTRL+A, CTRL+C)');
				statusCopiar('<span style="display:inline-block;text-align:center;color:#ff0000;background:#fff;border:solid 1px #ff0000;padding:2px;width:200px;"> Manobra Unica não reconhecido</span>') ;
				document.getElementById("txtmanobra").value='';
			}
		}

	}
}
function preencheSas(){
	verificaNavegador();
	var texto = document.getElementById("txtsas").value;
	if(document.getElementById("txtsas").value.length>5){
		if(texto.indexOf('LINE EQUIPMENT NUMBER: ')>0){
				//SAS TDM IE
				var inicio = document.getElementById("txtsas").value.indexOf('LINE EQUIPMENT NUMBER');
				var recorte = document.getElementById("txtsas").value.slice(inicio,(inicio+45));
			document.getElementById("presas").innerHTML +='<br>TDM '+recorte.replace(/(?:\r\n|\r|\n)/g, '');
				//document.getElementById("presas").innerHTML +='<br>'+ document.getElementById("txtsas").value.replace(/(?:\r\n|\r|\n)/g, '<br />');
		}
		else if ((document.getElementById("presas").innerHTML.length<3) & (texto.indexOf('Tecnologia central/voz:')>-1)){document.getElementById("presas").innerHTML = '<br>|| [ SAS: ]';}
		//verifica navegador
			if(texto.indexOf('Tecnologia central/voz:')>-1){
			var texto = document.getElementById("txtsas").value;
			var tecno = texto.split('Tecnologia central/voz:')[1].split('Rede Acesso:')[0].replace(/(?:\r\n|\r|\n|\t| )/g, '');}
			/*if(texto.indexOf('Novo LEN:')>-1){
				var navega = "ie"
			}else{
				var navega = "gc"
			}*/
		//verifica o filtro	
		if(localStorage.getItem('filtroSas')=='false'){
			document.getElementById("presas").innerHTML+=texto;	
			document.getElementById("txtsas").value='';
			keepRestore('salvar');
		}else{
			if(navegadorsas == "ie"){
				//var texto = document.getElementById("txtmanobra").value.replace(/(?:\r\n|\r|\n)/g, '<br />');
				if((tecno=="IMS/H248")&&(navegadorsas=="ie")){
					//SAS IMS 240
					var txt = document.getElementById("txtsas").value.split('Novo LEN:')[1];
					var eid=0;
					var cidade = txt.split('ANINFO')[1].split('OK')[0].replace(/(?:\r\n|\r|\n|\t| )/g, '');
					var eid = txt.split('EID')[1].split('OK')[0].replace(/(?:\r\n|\r|\n|\t| )/g, '');
					var porta = txt.split('TID')[1].split('OK')[0].replace(/(?:\r\n|\r|\n|\t| )/g, '');
					var armario = txt.split('EDESC')[1].replace(/(?:\r\n|\r|\n|\t| )/g, '\t').split('\t')[1];
					var registro = txt.split('Registro do Cliente (TEL)')[1].split('(TEL)')[1].split('Especifica')[0].replace(/(?:\r\n|\r|\n|\t)/g, '');
					if(eid.length>1){
						document.getElementById("presas").innerHTML +='<br>IMS h248:'+eid+'  Cidade:'+cidade+'  Porta:'+porta+' Armario:'+armario;
					}
					 document.getElementById("presas").innerHTML +=' Status:'+registro+'<br>';
					
				}
				else if((tecno=="IMS/V5.2")&&(navegadorsas=="ie")){
					//SAS IMS V5
					var txt = document.getElementById("txtsas").value.split('Novo LEN:')[1];
					var v5iid=0;
					var cidade = txt.split('ANINFO')[1].split('OK')[0].replace(/(?:\r\n|\r|\n|\t| )/g,'');
					var v5iid = txt.split('V5IID')[1].split('OK')[0].replace(/(?:\r\n|\r|\n|\t| )/g,'');
					var porta = txt.split('L3ADDR')[1].split('Não se aplica')[0].replace(/(?:\r\n|\r|\n|\t| )/g,'');
					var registro = txt.split('Registro do Cliente (TEL)')[1].split('(TEL)')[1].split('Especifica')[0].replace(/(?:\r\n|\r|\n|\t)/g,'');
					
					if(v5iid.length>1){
						document.getElementById("presas").innerHTML +='<br>IMS V5ID:'+v5iid+'  Cidade:'+cidade+'  Porta:'+porta;
					}
					 document.getElementById("presas").innerHTML +=' Status:'+registro+'<br>';
				}
			}else if (navegadorsas == "gc"){
				if((texto.indexOf('SAS - Switch Advanced Support')>0) && (texto.indexOf('Tecnologia central/voz:	IMS/H248')>0) && (texto.indexOf('M2000	ASBR	EID	')>0) ){
				//SAS IMS 240
				var eid=0;
				var cidade = document.getElementById("txtsas").value.split('M2000	ASBR	ANINFO	')[1].split('\t')[0];
				var eid = document.getElementById("txtsas").value.split('M2000	ASBR	EID	')[1].split('\t')[0];
				var porta = document.getElementById("txtsas").value.split('M2000	ASBR	TID	')[1].split('\t')[0];
				var armario = document.getElementById("txtsas").value.split('M2000	ASBR	EDESC	')[1].split('\t')[0];
				var registro = document.getElementById("txtsas").value.split('HSS	HDYNDATA	IMSUSERST (TEL)	')[1].split('\t');
				
						if(eid.length>1){
							document.getElementById("presas").innerHTML +='<br>IMS h248:'+eid+'  Cidade:'+cidade+'  Porta:'+porta+' Armario:'+armario;
						}
						 document.getElementById("presas").innerHTML +=' Status:'+registro[0]+'-'+registro[2].split('\n')[0]+'<br>';
				
				}
				else if((texto.indexOf('SAS - Switch Advanced Support')>0) && (texto.indexOf('Tecnologia central/voz:	IMS/V5.2')>0) && (texto.indexOf('M2000	ASBR	V5IID')>0)){
				//SAS IMS V5
				var v5iid=0;
				var cidade = document.getElementById("txtsas").value.split('M2000	ASBR	ANINFO	')[1].split('\t')[0];
				var v5iid = document.getElementById("txtsas").value.split('M2000	ASBR	V5IID	')[1].split('\t')[0];
				var porta = document.getElementById("txtsas").value.split('M2000	ASBR	L3ADDR	')[1].split('\t')[0];
				var registro = document.getElementById("txtsas").value.split('Registro do Cliente (TEL)	HSS	HDYNDATA	IMSUSERST (TEL)	')[1].split('\t');
				
						if(v5iid.length>1){
							document.getElementById("presas").innerHTML +='<br>IMS V5ID:'+v5iid+'  Cidade:'+cidade+'  Porta:'+porta;
						}
						 document.getElementById("presas").innerHTML +=' Status:'+registro[0]+'-'+registro[2].split('\n')[0]+'<br>';	
				}
				/*else if((texto.indexOf('LINE EQUIPMENT NUMBER: ')>0)){
				//SAS TDM GC
				var inicio = document.getElementById("txtsas").value.indexOf('LINE EQUIPMENT NUMBER');
				var recorte = document.getElementById("txtsas").value.slice(inicio,(inicio+45));
				document.getElementById("presas").innerHTML +='<br>TDM '+recorte.replace(/(?:\r\n|\r|\n)/g, '');
				//document.getElementById("presas").innerHTML +='<br>'+ document.getElementById("txtsas").value.replace(/(?:\r\n|\r|\n)/g, '<br />');
				}*/
			}else{
			statusCopiar('<span style="display:inline-block;text-align:center;color:#ff0000;background:#fff;border:solid 1px #ff0000;padding:2px;width:200px;"> SAS não reconhecido</span>') ;
			document.getElementById("txtsas").value='';				
			}
			document.getElementById("txtsas").value='';
			keepRestore('salvar');
		}
	}
}
function preencheWise(){
	verificaNavegador();
	var txtnotas = document.getElementById("txtnotas").value;
	var txtwise = document.getElementById("txtwise").value;
	if(document.getElementById("txtwise").value.length>5){
		if(localStorage.getItem('filtroWise')=='false'){
			document.getElementById("prewise").innerHTML = '<br>|| [ Banda Larga: ]<br>'+document.getElementById("txtwise").value.replace(/(?:\r\n|\r|\n)/g, '<br />');
			document.getElementById("txtwise").value='';
			keepRestore('salvar');
		}//fecha o if do sem filtro
		else{
				if(document.getElementById("txtwise").value.indexOf('Velocidade Sincronizada (Mbps)')>-1){
						

					//WISETOOL: KEYMILE - SUVD11
					/* Modo Valdecir
					var texto = document.getElementById("txtwise").value.replace(/(?:\r\n|\r|\n)/g, '<br />');
					var texto = texto.split('<br />');
					for(tt=0;tt<texto.length;tt++){
						if(texto[tt].indexOf('Distância do armário até a casa do cliente:')>-1){console.log(texto[tt]);}
						if(texto[tt].indexOf('Velocidade Sincronizada (Mbps)')>-1){console.log(texto[tt]);}
						if(texto[tt].indexOf('Sinal Ruído (dB)')>-1){console.log(texto[tt]);}
						if(texto[tt].indexOf('Atenuação (dB)')>-1){console.log(texto[tt]);}
					}*/
					
					//Modo Harumi =========================================
					
					var veltxt = document.getElementById("txtwise").value;
					var veltxt = veltxt.split('Velocidade Sincronizada (Mbps)');
					var veltxt = veltxt[1];
					var veltxt = veltxt.split('>=');
					var veltxt = veltxt[0].replace(/(?:\r\n|\r|\n|\t| )/g,'a').replace(/(?:aa|a)/g,'b');
					var veltxtf = veltxt.split ('b');
					var veltxtf = "Velocidade:  [ "+veltxtf[1]+" / "+veltxtf[2]+" ] \n";

					var snrtxt = document.getElementById("txtwise").value;
					var snrtxt = snrtxt.split('Sinal Ruído (dB)');
					var snrtxt = snrtxt[1];
					var snrtxt = snrtxt.split('>=');
					var snrtxt = snrtxt[0].replace(/(?:\r\n|\r|\n|\t| )/g,'a').replace(/(?:aa|a)/g,'b');
					var snrtxtf = snrtxt.split ('b');
					var snrtxtf = "Sinal Ruído: [ "+snrtxtf[1]+" / "+snrtxtf[2]+" ] \n";

					var atntxt = document.getElementById("txtwise").value;
					var atntxt = atntxt.split('Atenuação (dB)');
					var atntxt = atntxt[1];
					var atntxt = atntxt.split('>=');
					var atntxt = atntxt[0].replace(/(?:\r\n|\r|\n|\t| )/g,'a').replace(/(?:aa|a)/g,'b');
					var atntxtf = atntxt.split ('b');
					var atntxtf = "Atenuação:   [ "+atntxtf[1]+" / "+atntxtf[2]+" ] \n";

					

					if (txtwise.indexOf("Distância do armário até a casa do cliente")> -1){
						var distxt = document.getElementById("txtwise").value;
						var distxt = distxt.split('Distância do armário até a casa do cliente');
						var distxt = distxt[1];
						var distxt = distxt.split('Informações de Bloqueios');
						var distxt = distxt[0].replace(/(?:\r\n|\r|\n|\t| |\+)/g,'a').replace(/(?:aa|a)/g,'b');
						var distxtf = distxt.split ('b');
						var distxtf = "Distância: "+distxtf[1]+distxtf[2]+"\n";
						//console.log(distxtf);

						var txtwisefinal = veltxtf+snrtxtf+atntxtf;
						var distancia = distxtf;
					}//fecha o if do wise com distancia
					else {
						var txtwisefinal = veltxtf+snrtxtf+atntxtf;
					}//fecha o if do wise sem distancia
					if (txtwise.indexOf("Distância do armário até a casa do cliente")> -1){
						if(txtnotas.indexOf("Distância:")> -1){	
									document.getElementById("prewise").innerHTML = '<br>|| [ Banda Larga: ]<br>'+txtwisefinal;
									document.getElementById("txtwise").value='';
									keepRestore('salvar');						
						}//fecha if que preenche parametros sem distancia
						else{
									document.getElementById("prewise").innerHTML = '<br>|| [ Banda Larga: ]<br>'+txtwisefinal;
									document.getElementById("txtwise").value='';
									document.getElementById("txtnotas").value=distancia+document.getElementById("txtnotas").value;
									keepRestore('salvar');
						}//fecha else que preenche distancia no notas e parametros
					}//fecha if distancia existe
					else {
							document.getElementById("prewise").innerHTML = '<br>|| [ Banda Larga: ]<br>'+txtwisefinal;
							document.getElementById("txtwise").value='';
							keepRestore('salvar');
					}//fecha else distancia não existe
				}//fecha o if do wise
				else if (document.getElementById("txtwise").value.indexOf('Executar')>-1){
					//console.log('modo efika');

					var txtwise = document.getElementById("txtwise").value.replace(/(?:\r\n|\r|\n|\t)/g, '<br />');
					var txtwise = txtwise.replace(/(?:<br \/><br \/>)/g, '<br />').split('Primário')[1].split('Executar')[0].split('Down')[1];
					
					var veltxtefk = txtwise;
					var veltxtefk = veltxtefk.split('Velocidade')[1].split ('<br />');
					var veltxtefkdf = veltxtefk[1];
					var veltxtefkupf = veltxtefk[2].split ('Snr')[0];
					var veltxtefktf = "Velocidade: [ "+veltxtefkdf+" / "+veltxtefkupf+" ] ";
					var veltxtefktf = veltxtefktf.replace(/(?:\r\n|\r|\n)/g, '');
					
					var snrtxtefk = txtwise;
					var snrtxtefk = snrtxtefk.split('Snr')[1].split ('<br />');
					var snrtxtefkdf = snrtxtefk [1];		
					var snrtxtefkupf = snrtxtefk [2];
					var snrtxtefktf = "Sinal Ruído: [ "+snrtxtefkdf+" / "+snrtxtefkupf+" ] ";
					var snrtxtefktf = snrtxtefktf.replace(/(?:\r\n|\r|\n)/g, '');
					
					var atntxtefk = txtwise;
					var atntxtefk = atntxtefk.split('Atn')[1].split('<br />');
					var atntxtefkdf = atntxtefk [1];		
					var atntxtefkupf = atntxtefk [2];
					var atntxtefktf = "Atenuação: [ "+atntxtefkdf+" / "+atntxtefkupf+" ] ";
					var atntxtefktf = atntxtefktf.replace(/(?:\r\n|\r|\n)/g, '');
					
					var txtwisefinal = veltxtefktf+'\n'+snrtxtefktf+'\n'+atntxtefktf+'\n';
				
					document.getElementById("prewise").innerHTML = '<br>|| [ Banda Larga: ]<br>'+txtwisefinal;
					document.getElementById("txtwise").value='';
					keepRestore('salvar');

				}/*fecha if efika*/ 
				else {
					statusCopiar('<span style="display:inline-block;text-align:center;color:#ff0000;background:#fff;border:solid 1px #ff0000;padding:2px;width:200px;"> Parametros não reconhecidos</span>') ;
					document.getElementById("txtwise").value='';
				}
			}//fecha else do filtro
	}//fecha if length>5
	else {
	}//fecha else length>5
	
	
}//fecha function
function preencheNotas(){
	if(document.getElementById("txtnotas").value.length>=0){
		document.getElementById("prenotas").innerHTML = '<br>|| [ ----------- Notas ----------- ]<br>'+document.getElementById("txtnotas").value.replace(/(?:\r\n|\r|\n)/g, '<br />');
		//document.getElementById("txtnotas").value='';
		keepRestore('salvar');
	}
	
}

// ####################################################################################
function localUserSet(){
	var localuser = document.getElementById('localuser').value;
	localStorage.setItem('localUserG',localuser);	
}
//if(localStorage.getItem('localUserG')!=null){document.getElementById('localuser').value=localStorage.getItem('localUserG');}else{alert('Configure seu nome e matricula na guia Opções.')}
document.getElementById('localuser').value=localStorage.getItem('localUserG');
// ####################################################################################


function salvarLocal(){
	var texto = document.getElementById('chkfull').innerText;
	var numero = document.getElementById('n2save').value;
	localStorage.setItem(numero, texto);
	listarSalvos();
}

function salvarStorage(){
	//localStorage.setItem('atendimentosctrhj',1);
	//localStorage.getItem('atendimentosctrhj');
	boxTbs = localStorage.getItem('tbscheckbox');
	boxFullTest = localStorage.getItem('fulltestbox');
	boxRadius = localStorage.getItem('radiuscheckbox');
	if (boxFullTest == 'true'){avisoFullTest = "FullTest ";}else{avisoFullTest = "";}
	if (boxTbs == 'true'){avisoTbs = "TBS ";}else{avisoTbs = "";}
	if (boxRadius == 'true'){avisoRadius = "Radius ";}else{avisoRadius = "";}

	var atendimentoatual = localStorage.getItem('atendimentosctrhj');
	var atividade = localStorage.getItem('atividade');
	var concluir = '###################################################################################### \n';
	var concluir = concluir+atendimentoatual+' - '+atividade+'\n';
	var iniciadoem = localStorage.getItem('iniciadoEm');
	var concluir = concluir+'Gerado em: '+iniciadoem+'\n';
	var concluir = concluir+'Salvo  em: '+xDate(6)+'\n';
	var concluir = concluir+'Options:';
	var concluir = concluir+' '+avisoFullTest+' '+avisoRadius+' '+avisoTbs+'\n';
	var concluir = concluir+document.getElementById('chkfull').innerText+'\n';
	if(document.getElementById('txtparticular').value.length>1){
		var concluir = concluir+'\n ============ Notas Particulares ============\n';
		var concluir = concluir+document.getElementById('txtparticular').value+'\n';
		//alert('teste');
	}
	var atendimentoatual = parseInt(atendimentoatual)+1;
	localStorage.setItem('atendimentosctrhj',atendimentoatual);
	var gravar = localStorage.getItem(checklistName);
	var gravar =gravar+concluir;
	localStorage.setItem(checklistName,gravar);
	
}


function testarSalvo(){
	var numero = document.getElementById('n2save').value;
	alert(localStorage.getItem(numero));
}

function verSalvo(numero){
	alert(localStorage.getItem(numero));
}
//========================================================================================
function tbsFormat(id){
	//if (indice){}else{var indice='';}
	if(document.getElementById(id).innerText.length<11){
		//converter pro formato tbs
		document.getElementById('imgicdntbs_'+id).src='chrome-extension://'+extVSMonitorId+'/imgs/icons/tbs-12.png';
		var dnp1 = document.getElementById(id).innerText.substr(0,3);
		var dnp2 = document.getElementById(id).innerText.substr(3,3);
		var dnp3 = document.getElementById(id).innerText.substr(6,4);
		document.getElementById(id).innerHTML=dnp1+'-'+dnp2+'-'+dnp3;
		

	}else{
		//converter para formato normal
		document.getElementById('imgicdntbs_'+id).src='chrome-extension://'+extVSMonitorId+'/imgs/icons/tbs-12g.png';
		dn0 = document.getElementById(id).innerText.split('-')[0];
		dn1 = document.getElementById(id).innerText.split('-')[1];
		dn2 = document.getElementById(id).innerText.split('-')[2];
		document.getElementById(id).innerHTML=dn0+dn1+dn2;
		//document.getElementById('n2save').value;
	}	
		//ctrlc('desdn','Instancia');
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
elementoeditavel = document.getElementById('chkfull');
elementoeditavel.addEventListener('keydown', function(e) {
	
    if (e.keyCode == 13) { 
	//e.preventDefault();
      // insert 2 br tags (if only one br tag is inserted the cursor won't go to the second line)
      //document.execCommand('insertHTML', false, '<br><br>');
      // prevent the default behaviour of return key pressed
      return false;
    }else{}
}, false);


//========================================================================================
elemento = document.getElementsByTagName('body')[0];
elemento.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && ( e.keyCode==192) ) {
        console.log( "Debug" );
		//alert(document.getElementById('chkfull').innerText);
		document.getElementById('checklistBox').style.zIndex=parseInt(document.getElementById('ajaxRequestStatus').style.zIndex)+1;
    }
}, false);
//========================================================================================
function statusCopiar(msg) {
	document.getElementById('cpstatus').innerHTML=msg;
	setTimeout(function () {
		document.getElementById('cpstatus').innerHTML=' ';
	}, 3000);
}
	

var copyTextareaBtn = document.querySelector('.copiar');
copyTextareaBtn.addEventListener('click', function(e) {
	//if ((e.metaKey || e.ctrlKey) && ( e.keyCode==13) ) {
			
		localStorage.setItem('checklist_ETA',document.getElementById('chkfull').innerText);
		var storageFilter = localStorage.getItem('checklist_ETA');
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
	//}
});

//========================================================================================
var copyTextareaBtn = document.querySelector('#txtparticular');
addEventListener('keydown', function(e) {
	if ((e.metaKey || e.ctrlKey) && ( e.keyCode==13) ) {
			
		
		//document.getElementById('txtfinal').value=document.getElementById('chkfull').innerText;
		var copyTextarea = document.querySelector('#txtparticular');
		copyTextarea.value='';
		copyTextarea.select();
		var editor = document.getElementById("txtparticular");
		editor.focus();
		

		try {
			var successful = document.execCommand('paste');
			
			var msg = successful ? statusCopiar('<span style="color:#00aa00;border:solid 1px #008800;padding:2px;"> Colado .</span>') 
			: statusCopiar('<span style="color:#aa0000;border:solid 1px #990000;padding:2px;"> Erro ao colar .</span>');
			//alert('Texto colado? ' + msg);
			
		} catch (err) {
			
		}
	}
});
//========================================================================================

//Tentei fazer a função de rota dessa forma, mas falhoum, e fiz a proxima função abaixo baseado em pesquisas
function rotaDeFluxo_quefalhou(rota){
	var rota_i=rota.split(',')
	var timing=1;
	for(i=0;i<rota_i.length;i++){
		setTimeout(function(){ 
		console.log('Nivel:'+i+' | opcao:'+rota_i[i]);
		
		var opcao = rota_i[i];
		document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+i+'_input').options[opcao].selected=true;
		document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+i+'_input').options[opcao].click();
		
		}, timing);
		timing = timing + 300; 
	}
}
function numeraOpcao(nivel,opcao){
	for(i=0;i<document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+nivel+'_input').length;i++)
	{
		if(document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+nivel+'_input').options[i].text==opcao){
			//console.log(document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+nivel+'_input').options[i].text+'-'+i);
			return i;
		}
		
	}
}
function rotaDeFluxo(rota, period) {
    period = period || 200;
	var arr = rota.split(',');

    var i = 0;
	var limite = 0;
    var interval = setInterval(
		function() {
			limite++;
			if (limite>15){ clearInterval(interval);}
			console.log('Nivel[' + i + ']: opcao[' + arr[i] + ']' );
			document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+i+'_input').options[numeraOpcao(i,arr[i])].selected=true;
			document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+i+'_input').options[numeraOpcao(i,arr[i])].click();
			if (++i >= arr.length) { clearInterval(interval);}
		}
	, period);
	 for(ressel=0;ressel<document.getElementsByClassName('seletorrota').length;ressel++){
		 document.getElementsByClassName('seletorrota')[ressel].selectedIndex=0;
	 }
}

function rotaDeFluxoAntigo(rota, period) {
    period = period || 200;
	var arr = rota.split(',');
    var i = 0;
	var limite = 0;
    var interval = setInterval(
		function() {
			limite++;
			if (limite>15){ clearInterval(interval);}
			console.log('Nivel[' + i + ']: opcao[' + arr[i] + ']' );
			document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+i+'_input').options[arr[i]].selected=true;
			document.getElementById('formPainelSelecaoTipificacao:selecaoTipificacaoFluxoAtend:nivel'+i+'_input').options[arr[i]].click();
			if (++i >= arr.length) { clearInterval(interval);}
		}
	, period);
	 for(ressel=0;ressel<document.getElementsByClassName('seletorrota').length;ressel++){
		 document.getElementsByClassName('seletorrota')[ressel].selectedIndex=0;
	 }
}

//loop([0, 5, 4, 4], 0 );


function downloadChecklist(filename) {
	var conteudo= document.getElementById('callhistcontent').innerText.replace(/(?:\r\n|\r|\n)/g, '\r\n');
    var ancora = document.createElement('a');
    ancora.href = 'data:application/txt,' + encodeURIComponent(conteudo);
    //ancora.href = 'data:application/octet-stream;charset=utf-8,' + conteudo;
	//window.open("data:application/txt," + encodeURIComponent(conteudo), "_self");
    ancora.download = filename;
    ancora.click();
}

function listarHist(){
	var hoje = xDate(2);
	document.getElementById('callhistmenu').innerHTML='';
	//
	for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    //console.log(key + " => " + value);
	if(key.match(/Checklist-/g)){
		document.getElementById('callhistmenu').innerHTML+=''
		+'<button id="" name="" onclick="acessarHist(\''+key+'\');" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" type="button" role="button" aria-disabled="false">  '              
		+'<span class="ui-button-icon-left ui-icon ui-c ui-icon-folder-open">                </span>'
		+'<span class="ui-button-text ui-c">'+key
		+'</span>'
		+'</button>';
	}
	
    //+'   <option>'+key+'</option>';

	}
	
}
listarHist();
function acessarHist(lista){
	document.getElementById('downchkbtn').onclick = function() { downloadChecklist(lista+'.txt'); };
	for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    //console.log(key + " => " + value);
	if(key==lista){
		console.log(lista);
		document.getElementById('callhistcontent').innerHTML='<pre style="white-space: pre-wrap;display:block;overflow:none;width:550px;word-wrap: break-word;">'+value+'</pre>';
	}
	
    //+'   <option>'+key+'</option>';

	}
	
}
function notify() {
    Notification.requestPermission(function() {
        var notification = new Notification("Misããããão!", {
            icon: 'https://cdn3.iconfinder.com/data/icons/simple-microphone-icon/512/Clock_Icon-3-128.png',
            body: "Óia a PAUSA miseravi"
        });
        notification.onclick = function() {
            //func
        }
    });
}  

function executarDiagnostico(){
	/**
	* Diagnostico
	* A proposta desta parte do sowtware e da função em si é fazer de forma automatica e rapida algumas consultas que 
	* hoje são feitas manualmente, e diminuir a incidencia de erro humano na fase inicial do atendimento (fase de diagnostico).
	* Para isto, a ideia seria buscar os dados do PLcontrol verificando se o tecnico0 é checklist e se o cliente é heavy user,
	* buscar os dados do TBS checando se está nas portas de voz e dados corretas, consultar o SAS e o PnAdmin verificando se a
	* central nos 2 estão de acordo, checar configurações de numero de equipamento, facilidade, configurações de serviço e bloqueio,
	* verificar evento massivo e SGEN, consultar o Wisetool e verificar se está no armário correto, distância do cliente, cartão
	* assinalado (se está em adsl ou vdsl), porta configurada, BRAS, ver está sincronizado e autenticado, verificar se a sincronia está
	* apta, e opcionalmente poder "Comparar com a binada", ou seja, inserir a linha que o técnico binou e o sistema comparar se está na 
	* mesma contagem e armário, se está configurado na mesma central, se o custgroup está correto, e se está com o shasta correto.
	*/
	document.getElementById('painelDiagnostico').innerHTML=''
	+'<input id=""  type="text" maxlength="15" size="20" title="Binada" class="ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all" role="textbox" aria-disabled="false" aria-readonly="false">'
	+'<span id="" class="ui-menubutton">                <button id="" name="" onclick="" type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left" role="button" aria-disabled="false">                    <span class="ui-button-icon-left ui-icon ui-c ui-icon-gear"></span>                    <span class="ui-button-text ui-c">Comparar Binada</span>                </button>            </span>';
	
	//cria loading Info
	setTimeout(function () {
		document.getElementById('painelDiagnostico').innerHTML+=''	
		+'<div>'
		+'	<div id="" class="ui-widget ui-widget-content ui-corner-all">'
		+'	<div id="" class="ui-datalist ui-widget">'
		+'		<div class="ui-datalist-header ui-widget-header ui-corner-top" style="background: linear-gradient(rgb(204, 204, 204) 0%, rgb(238, 238, 238) 100%) !important;">'
		+'			<span style="color:#000;">Informações Adicionais</span>'
		+'		</div>'
		+'		<div id="diagnosticoInfo" class="ui-datalist-content ui-widget-content">'
		+'	      <div style="text-align:center;">  <img id="" src="chrome-extension://'+vsmid.value+'/imgs/LoadingBar02.gif" /></div>'
		+'		</div>'
		+'	</div>'	
		+'	</div>'
		+'</div>';
	}, 0);
	setTimeout(function () {
		document.getElementById('diagnosticoInfo').innerHTML=''
		+'Tecnico Checklist: <span class="negrito vermelho">Sim</span><br>'
		+'Cliente HeavyUser: <span class="negrito verde">Nao</span> <br>'
		+'Massiva associada ao SAS: <span class="negrito verde">Nao</span> <br>';
	}, 1500);
	//cria loading TBS
	setTimeout(function () {
		document.getElementById('painelDiagnostico').innerHTML+=''	
		+'<div>'
		+'	<div id="" class="ui-widget ui-widget-content ui-corner-all">'
		+'	<div id="" class="ui-datalist ui-widget">'
		+'		<div class="ui-datalist-header ui-widget-header ui-corner-top" style="background: linear-gradient(rgb(204, 204, 204) 0%, rgb(238, 238, 238) 100%) !important;">'
		+'			<span style="color:#000;">TBS</span>'
		+'		</div>'
		+'		<div id="diagnosticoTBS" class="ui-datalist-content ui-widget-content">'
		+'	      <div style="text-align:center;">  <img id="" src="chrome-extension://'+vsmid.value+'/imgs/LoadingBar02.gif" /></div>'
		+'		</div>'
		+'	</div>'	
		+'	</div>'
		+'</div>';
	}, 800);
	setTimeout(function () {
		document.getElementById('diagnosticoTBS').innerHTML=''
		+'Armário: <span class="negrito verde">O1A60</span><br>'
		+'Secundário: TBS <span class="negrito verde">1300</span> \ Sagre: A600130 Par <span class="negrito verde">1300</span><br>'
		+'Voz	<span class="negrito verde">RJOA-601-319</span> Primário V3-H1-15-79<br>'
		+'Dados	<span class="negrito verde">VDSL-1319</span> ETH Primário V3-H1-15-79 TDM/H248<br>'
		+'Rin	<span class="negrito verde">A60-RIN-136</span><br>';
	}, 4500);
	//cria loading SAS
	setTimeout(function () {
		document.getElementById('painelDiagnostico').innerHTML+=''	
		+'<div>'
		+'	<div id="" class="ui-widget ui-widget-content ui-corner-all">'
		+'	<div id="" class="ui-datalist ui-widget">'
		+'		<div class="ui-datalist-header ui-widget-header ui-corner-top" style="background: linear-gradient(rgb(204, 204, 204) 0%, rgb(238, 238, 238) 100%) !important;">'
		+'			<span style="color:#000;">SAS+PnAdmin</span>'
		+'		</div>'
		+'		<div id="diagnosticoSAS" class="ui-datalist-content ui-widget-content">'
		+'	      <div style="text-align:center;">  <img id="" src="chrome-extension://'+vsmid.value+'/imgs/LoadingBar02.gif" /></div>'
		+'		</div>'
		+'	</div>'	
		+'	</div>'
		+'</div>';
	}, 1500);
	setTimeout(function () {
		document.getElementById('diagnosticoSAS').innerHTML=''
		+'Central Pn: <span class="negrito verde">DFBSA_CBS01</span><br>'
		+'Central SAS: <span class="negrito verde">DFBSA_CBS01</span><br>'
		+'Numero de Equipamento: Nao<br>'
		+'Bloqueio: <span class="negrito vermelho">SIM</span><br>'
		+'Facilidade: <span class="negrito verde">BSAA  26 5 01 05</span><br>'
		+'CUSTGRP: <span class="negrito verde">BSA_POS</span><br>'
		+'NCOS: 115<br>'
		+'OPTIONS: <span class="negrito verde">DGT DDN NOAMA CWT 3WC</span><br>'
		+'Evento Massivo: <span class="negrito verde">NAO</span> <br>'
		
	}, 12500);
	//cria loading Wise
	setTimeout(function () {
		document.getElementById('painelDiagnostico').innerHTML+=''	
		+'<div>'
		+'	<div id="" class="ui-widget ui-widget-content ui-corner-all">'
		+'	<div id="" class="ui-datalist ui-widget">'
		+'		<div class="ui-datalist-header ui-widget-header ui-corner-top" style="background: linear-gradient(rgb(204, 204, 204) 0%, rgb(238, 238, 238) 100%) !important;">'
		+'			<span style="color:#000;">Wisetool+Radius</span>'
		+'		</div>'
		+'		<div id="diagnosticoWise" class="ui-datalist-content ui-widget-content">'
		+'	      <div style="text-align:center;">  <img id="" src="chrome-extension://'+vsmid.value+'/imgs/LoadingBar02.gif" /></div>'
		+'		</div>'
		+'	</div>'	
		+'	</div>'
		+'</div>';
	}, 3500);
	setTimeout(function () {
		document.getElementById('diagnosticoWise').innerHTML=''
		+'Armário: 	<span class="negrito verde">GOGNA_O1B03</span><br>'
		+'Distancia TPA: <span class="negrito azul">602 metros</span><br>'
		+'Modelo DSLAM:	KEYMILE - SUVD11<br>'
		+'Ender. Seq. da Porta:	<span class="negrito verde">1328</span><br>'
		+'Slot:	15<br>'
		+'RIN:	223<br>'
		+'Shelf:	5<br>'
		+'BRAS:	<span class="negrito verde">gna1b:10.161.88.39 - gna1a:10.161.88.250</span><br>'
		+'Velocidade Contratada:	<span class="negrito azul">25600 / 2048</span>  <br>'
		+'Velocidade Sincronizada (Mbps)	<span class="negrito vermelho">24100 / 2596</span><br>'
		+'Sinal Ruído (dB)	<span class="negrito verde">16 / 21</span><br>'
		+'Atenuação (dB)	<span class="negrito verde">17 / 5</span><br>'
		+'Autenticação: <span class="negrito vermelho">STOP / 2016-08-07 12:53:47</span><br>'
	}, 16500);
	
	
	


}