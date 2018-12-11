//===========================================================	
//Inicializacao do ambiente
var seletorCodigo = document.URL;
var extVSMonitorId = chrome.runtime.id;
function getFromStorage(){
	chrome.storage.sync.get({
		instancia: ''
	}, function(items) {
		/*
		var $wrapperX3 = document.querySelector('body');
		var HTMLNovoX3='<input type="hidden" id="vsm_instancia" value="'+items.instancia+'" />'
		$wrapperX3.insertAdjacentHTML('afterbegin', HTMLNovoX3);
		*/
		localStorage.setItem('workingNow',items.instancia);
	});
}
getFromStorage();



//===========================================================	
var $wrapperX3 = document.querySelector('body');
    HTMLNovoX3=''
	+'<input type="hidden" id="vsmid" value="'+extVSMonitorId+'" />'
	+'<div id="vsmonitorbar" style="display:none;position:fixed;left:50%;top:0px;margin-left:-150px;width:300px;height:25px;background-color:#999999;z-index:9999; background-image:url(\'https://www.packtpub.com/graphics/9781783283415/graphics/3415OS_01_11.jpg\');">&nbsp;</div>'
	+'';
	$wrapperX3.insertAdjacentHTML('afterbegin', HTMLNovoX3);
	/*
var $wrapperX4 = document.querySelector('body');
    HTMLNovoX4=chrome.extension.getURL('/Vweb/barra_atendimento.html');
	$wrapperX4.insertAdjacentHTML('beforeend', HTMLNovoX4);
	*/
function criarBarraAtendimento(){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", chrome.extension.getURL('Vweb/vsm-bar.html'), true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("dados=teste");
	xhr.responseType = "text";
	xhr.onload = function(){
		var $wrapperX4 = document.querySelector('body');
		HTMLNovoX4=this.response;
		$wrapperX4.insertAdjacentHTML('beforeend', HTMLNovoX4);
		var s = document.createElement("script");
		s.src = "chrome-extension://"+extVSMonitorId+"/Vweb/vsm-bar.js";
		document.body.appendChild(s);

	}
}
/*
	Injects
*/



//ETA direct =======================================================================================
if(seletorCodigo.indexOf("etadirect.com")>-1){
// Injetar
	var s = document.createElement("script");
	s.src = "chrome-extension://"+extVSMonitorId+"/eta/eta.js";
	document.body.appendChild(s);

	
	//Message
function eta_message(){
	setTimeout(function(){
		console.log( "ETAuth - "+localStorage['time'] );	
		chrome.runtime.sendMessage({
			etasessid:localStorage['sessid'],
			etatree: localStorage['tree'],
			etatime: localStorage['time']
		}, function(response) {
			console.log(response.farewell);
		});
	},1000);	
}
window.addEventListener ("load", eta_message, false);
/*
		console.log(localStorage['sessid']);
		console.log(localStorage['tree']);
		console.log(localStorage['time']);
*/
}	
//Gestor de Bloqueios =======================================================================================
if(seletorCodigo.indexOf("mbuservices.gvt.net.br")>-1){
// Injetar
	var s = document.createElement("script");
	s.src = "chrome-extension://"+extVSMonitorId+"/gestorbloqueios/gestorbloqueios.js";
	document.body.appendChild(s);


}	
//GPS =======================================================================================
if(seletorCodigo.match(/gpsco/g)){
	if(seletorCodigo.match(/gpsco\.gvt\.com\.br/g)){
		alert('Para utilizar a extensão VSMonitor Ext, acesse o GPS no endereço http://gpsco.gvt.net.br/ e não em http://gpsco.gvt.com.br/ . Caso tenha alguma necessidade específica, ou problema a relatar, ou sugestão, entrar em contato com G0056638.');
	}else{
		var s = document.createElement("script");
		s.src = "chrome-extension://"+extVSMonitorId+"/checknote/checknote2.js";
		document.body.appendChild(s);
		
		var body = document.getElementsByTagName("body")[0];
		body.addEventListener("load", function(){
			document.getElementById('btNovoAtendimento').addEventListener('click', function() {
				setTimeout(function() {
						chrome.storage.sync.set({
							atividade:'yyyyy',
							instancia: inAtendimento,
							tecnico:'xxxxx',
							tmatricula:'zzzzzz',
							cliente:'wwwwww'
						}, function() {
						// Update status to let user know options were saved.
						//var status = document.getElementById('status').innerHTML = 'Options saved.';
						//console.log('Sincronia: '+inAtendimento+','+xatividade+','+xtecnico+','+xtmatricula+','+xcliente);
						//setTimeout(function() {
						 // document.getElementById('status').innerHTML = '';
						//}, 750);
							
						  });
				}, 500);

			}, false);
		}, false);


	}
function createMessageService(){
	elemento = document.getElementById('btNovoAtendimento');
	elemento.addEventListener('click', function(e) {
		
		//if ((e.metaKey || e.ctrlKey) && ( e.keyCode==13) ) {
			//var xatividade = localStorage.getItem('xatividade');
			//var inAtendimento = document.getElementById('formFiltroPesquisa:txtInstancia').value;
			//var xtecnico = localStorage.getItem('xtecnico');
			//var xtmatricula = localStorage.getItem('xmatricula');
			//var xcliente = localStorage.getItem('xcliente');
			
			/* este codigo aqui funciona, e foi só um teste com um if na ponta remota (extensao)*/
			if (e.metaKey || e.ctrlKey) {
				console.log('modo teste');
				chrome.runtime.sendMessage({
					teste: '999'
				},
				function(response) {	console.log(response.farewell);	});
			}else{
				console.log( "send message - "+localStorage['instancia'] );	
				chrome.runtime.sendMessage({
					greeting: localStorage['instancia'],
					tecnico: localStorage['xtecnico'],
					tmatricula: localStorage['xmatricula'],
					cliente: localStorage['xcliente']
				}, function(response) {
					console.log(response.farewell);
				});
			}

				
		//}
	}, false);
}

//setTimeout(function(){ createMessageService(); }, 1000);

window.addEventListener ("load", myMain, false);
function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        if (    typeof document.getElementById('btNovoAtendimento') != "undefined"
            ||  document.querySelector ("#btNovoAtendimento")
        ) {
            clearInterval (jsInitChecktimer);
            // DO YOUR STUFF HERE.
			createMessageService();
			console.log('msgsystem ok');
        }
    }
}

	//criarBarraAtendimento();
}
//PL Cobntrol =======================================================================================
if(seletorCodigo.match(/sv2kppag2\/plcontrol/g)){
	var ms = document.createElement("script");
	ms.src = "chrome-extension://"+extVSMonitorId+"/plcontrol/vsm_plcontrol.js";
	document.body.appendChild(ms);
	//criarBarraAtendimento();
}


//ManobraMassiva =======================================================================================
if(seletorCodigo.match(/manobramassiva/g)){
	var ms = document.createElement("script");
	ms.src = "chrome-extension://"+extVSMonitorId+"/manobramassiva/vsm_massiva.js";
	document.body.appendChild(ms);
	//criarBarraAtendimento();
}


//ManobraUnica =======================================================================================

//if(seletorCodigo.indexOf('appsagre.gvt.net.br')>-1){
if(seletorCodigo.match(/Manobraunica/g)){
//inserido no inject

elemento = document.getElementsByTagName('body')[0];
elemento.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && ( e.keyCode==192) ) {
        console.log( "Debug" );
		//alert(document.getElementById('chkfull').innerText);
		  chrome.storage.sync.get({
			instancia: ''
		  }, function(items) {
			console.log(items.instancia);
			document.getElementById('telefone').value=items.instancia;
			//javascript: buscaTEL();
		  });
    }
}, false);

	//Recarregar manobra unica quando a sessão expira e o usuário tenta buscar instancia
	if(seletorCodigo.match(/jsp\/jsp\/inicio.jsp/g)){
		localStorage.setItem('ReloadMU',1);	
		//window.open('http://appsagre.gvt.net.br/Manobraunica/main','_self');
		document.querySelector('body').innerHTML="";
		document.querySelector('body').style.background="#DDDDDD";
		var $wrapper2 = document.querySelector('body')
		HTMLNovo2='<META http-equiv="refresh" content="1;URL=http://appsagre.gvt.net.br/Manobraunica/"><div id="loading" style="border:solid 2px #000000;position:absolute;display:fixed;background:#ffffff;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;width:500px;height:100px;top:50%;left:50%;margin-left:-350px;margin-top:-200px;padding:100px;"><img style="float:left;" id="muloadingimg" src="chrome-extension://'+extVSMonitorId+'/imgs/loader016.gif" alt="" /> <div ><h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VSMonitor <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; recarregando Manobra </2></div></div>';
		$wrapper2.insertAdjacentHTML('afterbegin', HTMLNovo2);
	}

	//recarregar manobra unica quando sessão expira e o usuario tenta setar armario/secundario/porta etc (erro de permissão)
	var userNallow = document.getElementsByTagName('body')[0].innerText.indexOf('Você não é um usuário autorizado a utilizar este aplicativo')
	if(userNallow>0){
		//alert('001: Você ficou alguns minutos sem usar o Manobra Única e a sessão expirou, a página será recarregada automaticamente. Caso a pagina não recarregue, feche o manobra e abra novamente, ou edite o link apagando tudo que estiver na frente de Manobraunica/');
		localStorage.setItem('ReloadMU',1);	
		//window.open('http://appsagre.gvt.net.br/Manobraunica/main','_self');
		document.querySelector('body').innerHTML="";
		document.querySelector('body').style.background="#DDDDDD";
		var $wrapper2 = document.querySelector('body')
		HTMLNovo2=''
			//+'<META http-equiv="refresh" content="5;URL=http://appsagre.gvt.net.br/Manobraunica/">'
			+'<div id="loading" style="border:solid 2px #000000;position:absolute;display:fixed;background:#ffffff;width:500px;height:300px;top:50%;left:50%;margin-left:-250px;margin-top:-150px;padding:30px;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">'
			+'	<img style="float:left;display:none" id="muloadingimg" src="chrome-extension://'+extVSMonitorId+'/imgs/loader016.gif" alt="" /> '
			+'	<div> <h2> VSMonitor </h2> <h3><span style="color:#dd0000">Erro :</span> O Manobra Única está se comportando como se houvesse algum problema com login/senha</h3></div>'
			+'	<div> <br> Infelimente não existe um botão "Deslogar" no Manobra Única. Será necessário fechar e reabrir o Chrome (inteiro, não apenas a aba).<br><br>'
			+'		<div style="display:none;border:solid 1px #000;padding:5px;background:#dddddd;width:100px;cursor:pointer;" onclick="resetaManobra();"><img style="" id="muloadingimg" src="chrome-extension://'+extVSMonitorId+'/imgs/resetmanobra.png" alt="" /> Resetar </div>'
			+'	</div>'
			+'</div>';
		$wrapper2.insertAdjacentHTML('afterbegin', HTMLNovo2);

	}
	var erro500 = document.getElementsByTagName('body')[0].innerText.indexOf('Error 500--Internal Server Error');
	if(erro500>0){
		alert('500: Você ficou alguns minutos sem usar o Manobra Única e a sessão expirou, a página será recarregada automaticamente. Caso a pagina não recarregue, feche o manobra e abra novamente, ou edite o link apagando tudo que estiver na frente de Manobraunica/');
		localStorage.setItem('ReloadMU',1);	
		//window.open('http://appsagre.gvt.net.br/Manobraunica/main','_self');
		document.querySelector('body').innerHTML="";
		document.querySelector('body').style.background="#DDDDDD";
		var $wrapper2 = document.querySelector('body')
		HTMLNovo2='<META http-equiv="refresh" content="1;URL=http://appsagre.gvt.net.br/Manobraunica/"><div id="loading" style="border:solid 2px #000000;position:absolute;display:fixed;background:#ffffff;font-family: Helvetica Neue, Helvetica, Arial, sans-serif;width:500px;height:100px;top:50%;left:50%;margin-left:-350px;margin-top:-200px;padding:100px;"><img style="float:left;" id="muloadingimg" src="chrome-extension://'+extVSMonitorId+'/imgs/loader016.gif" alt="" /> <div ><h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VSMonitor <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; recarregando Manobra </2></div></div>';
		$wrapper2.insertAdjacentHTML('afterbegin', HTMLNovo2);
	}

	var mu = document.createElement("script");
	mu.src = "chrome-extension://"+extVSMonitorId+"/manobraunica/vsm_manobraunica.js";
	document.body.appendChild(mu);	//tabConsBa
	
	//var vsmonitorbar = '<div style="position:fixed;left:50%;top:0px;margin-left:-150px;width:300px;height:25px;background-color:#999999; background-image:url(\'https://www.packtpub.com/graphics/9781783283415/graphics/3415OS_01_11.jpg\');">&nbsp;</div>';
	//document.getElementById('reportsFrame').contentDocument.getElementById('searchValue').value="333";

	//var $wrapper = document.querySelector('#tabWL'),
    //HTMLNovo='<div id="rinloading" style="border:solid 2px #000000;position:absolute;display:fixed;background:#ffffff;width:300px;height:100px;;top:300px;"><img style="float:left;" id="muloadingimg" src="http://gpsco.gvt.com.br/gps/co/atendimento/resources/images/load.gif?pfdrid_c=true" alt=""> <h2>Carregando RIN </h2></div>';
	//$wrapper.insertAdjacentHTML('afterbegin', HTMLNovo);
	
	document.querySelector('body').innerHTML+=''
	+'<style>'
+'body {'
+'  font-family: Arial, sans-serif;'
//+'  background: url(bg.jpg);'
+'  background-size: cover;'
+'}'
+''
+'h1 {'
+'  text-align: center;'
+'  font-family: Tahoma, Arial, sans-serif;'
+'  color: #06D85F;'
+'  margin: 100px 0;'
+'}'
+''
+'.box {'
+'  width: 20%;'
+'  margin: 0 auto;'
+'  background: rgba(255,255,255,0.2);'
+'  padding: 35px;'
+'  border: 2px solid #fff;'
+'  border-radius: 20px/50px;'
+'  background-clip: padding-box;'
+'  text-align: center;'
+'}'
+''
+''
+'.overlay {'
+'  position: absolute;'
+'  top: 0;'
+'  bottom: 0;'
+'  left: 0;'
+'  right: 0;'
+'  background: rgba(0, 0, 0, 0.7);'
+'  transition: opacity 500ms;'
+'  visibility: hidden;'
+'  opacity: 0;'
+'}'
+'.overlay:target {'
+'  visibility: visible;'
+'  opacity: 1;'
+'}'

+'.popup {'
+'  margin: 70px auto;'
+'  padding: 20px;'
+'  background: #fff;'
+'  border-radius: 5px;'
+'  width: 700px;'
+'  position: relative;'
+'  transition: all 5s ease-in-out;'
+'}'
+''
+'.popup h2 {'
+'  margin-top: 0;'
+'  color: #333;'
+'  font-family: Tahoma, Arial, sans-serif;'
+'}'
+'.popup .close {'
+'  position: absolute;'
+'  top: 20px;'
+'  right: 30px;'
+'  transition: all 200ms;'
+'  font-size: 30px;'
+'  font-weight: bold;'
+'  text-decoration: none;'
+'  color: #333;'
+'}'
+'.popup .close:hover {'
+'  color: #06D85F;'
+'}'
+'.popup .content {'
+'  max-height: 500px;'
+'  overflow: auto;'
+'}'
+'</style>'
+'<div id="popup1" class="overlay">'
+'	<div class="popup">'
+'		<h2>OBS:</h2>'
+'		<a class="close" href="#">&times;</a>'
+'		<div class="content">'
+'			A lista de RIN/Shelves usada para cruzar dados aqui e facilitar o trabalho da operação é obtido manualmente de tempos em tempos usando uma ferramenta de apoio, portanto algumas vezes podem aparecer divergências entre contagens e RINs, para evitar contratempos basta conferir o nome completo da porta na qual clicou, nela aparece a contagem logo antes da porta.'
+'		</div>'
+'	</div>'
+'</div>';
	

//criarBarraAtendimento();
}

//BPM  =======================================================================================
if(seletorCodigo.indexOf('savvioncrm.gvt.com.br/sbm/bpmportal/myhome/bizsite.task.show?')>-1 && seletorCodigo.indexOf('savvioncrm.gvt.com.br/sbm/bpmportal/myhome/bizsite.task.show')>-1){
	var urlVarsBPM= seletorCodigo.split('?')[1].split('&');
	for(bpmCtr=0;bpmCtr<urlVarsBPM.length;bpmCtr++){
		if(urlVarsBPM[bpmCtr].indexOf('bizsite_taskNameE=')>-1){			
			var urlFinalBPM='http://savvioncrm.gvt.com.br/sbm/bpmportal/myhome/bizsite.task.show?cenabled=null&bizsite_taskNameE='+urlVarsBPM[bpmCtr].split('bizsite_taskNameE=')[1];
		}
	}
	window.location = urlFinalBPM;
//http://savvioncrm.gvt.com.br/sbm/bpmportal/myhome/bizsite.task.show?fromPF=S&action=showframe&bizsite_taskNameE=43656E73757041726D536974654C6F7461646F233131323937383239333A3A416E616C697365205469706F2064652054726174616D656E746F&serverPF=bpmportal.gvt.com.br:80
	
	
	
}
//WiseTool =======================================================================================
if(seletorCodigo.match(/wisetool/g)){

	var wt = document.createElement("script");
	wt.src = "chrome-extension://"+extVSMonitorId+"/wisetool/vsm_wisetool.js";
	
	document.body.appendChild(wt);	//tabConsBa
	//var $wrapper = document.querySelector('#tabWL'),
    //HTMLNovo='<div style="position:fixed;left:50%;top:0px;margin-left:-150px;width:300px;height:25px;background-color:#999999; background-image:url(\'https://www.packtpub.com/graphics/9781783283415/graphics/3415OS_01_11.jpg\');">&nbsp;</div>';
	//$wrapper.insertAdjacentHTML('afterbegin', HTMLNovo);


//criarBarraAtendimento();
}
//testando colar informações no wise
/*
var x = document.getElementById('reportsFrame');
x.contentDocument.getElementById('searchValue').value="2252";
console.log('val3');
*/
