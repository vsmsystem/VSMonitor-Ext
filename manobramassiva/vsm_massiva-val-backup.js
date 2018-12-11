
var extVSMonitorId = document.getElementById('vsmid').value;
//criar array de UF
function listaEstados(){
	var estados = document.getElementsByName('perfil')[0];
	for(i=0;i<estados.options.length;i++){
		estados.options[i].innerHTML.split("PRIMARIO_")[1];
		ards[i]
	}
}


//esperar x tempo, ou simular carregamento de pagina
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


//objeto json a ser usado mais pra frente
var ard = [
	{"estado":"PR", "cidade":"Curitiba", "armario":"PRCTA_O1A11"},
	{"estado":"PR", "cidade":"Curitiba", "armario":"PRCTA_O1B22"},
	{"estado":"PR", "cidade":"Londrina", "armario":"PRLDN_O1C33"},
	{"estado":"PR", "cidade":"Maringa", "armario":"PRMGA_O1D44"}
];

function ims2() {
	var ard = document.getElementsByName("shelfOrigem.equipmentId");
	var cont = 0;
	var ards = ard[0].options.length -1;
	for (i = 0; i < ard[0].options.length; i++) {	
		if(ard[0].options[i].innerHTML.match(/IMS/g)){
			cont++;
		}
		}
		
	alert ("ards:"+ ards +" - ims:"+ cont);
}

//cidadeOrigem.cityName
//armarioOrigem.locationId
//shelfOrigem.equipmentId

function rushFor(){
	// FOR cidades
	var ctr_cidades = document.getElementsByName('cidadeOrigem.cityName');
	for(c=0;c<ctr_cidades[0].options.length;c++){
		console.log(ctr_cidades[0].options[c].innerText);
	
	}
}



/* 
* 
* FUNÇÕES ABAIXO SÃO DE AÇÃO, ESTÃO ANOTADAS AÍ PRA ACOPLAR MAIS TARDE
* 
*/


//function sets(){
	function cfgCidade(){
		var cidades = document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex="24";
		javascript:VerificaCidade('Cidade');
	}
	function cfgArd(){
		var ards = document.getElementsByName('armarioOrigem.locationId')[0].selectedIndex="4";
		javascript:verificaOrigemDestinoArmario('origem');
	}
	function cfgshelf(){
		var ards = document.getElementsByName('shelfOrigem.equipmentId')[0].selectedIndex="2";
		javascript:atualizaValorTecnologia('origem');
	}
	
	//setTimeout(cfgCidade(), 1000);
	//setTimeout(cfgArd(), 2000);
	//setTimeout(cfgShelf(), 3000);
	
//}
function dropArds(){
	var db = openDatabase ('ManobraMassiva', '1.0', 'Banco local Manobra Massiva', 2 * 1024 * 1024);
	db.transaction (function (tx) {
			tx.executeSql ("drop table ARDS");
			tx.executeSql ("CREATE TABLE IF NOT EXISTS ARDS (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, uf, cidade, armario, shelf, tecnologia)");
		});
}
function insertTest(){
	var db = openDatabase ('ManobraMassiva', '1.0', 'Banco local Manobra Massiva', 2 * 1024 * 1024);
	db.transaction (function (tx) {
				tx.executeSql ("INSERT INTO ARDS (uf, cidade, armario, shelf, tecnologia) VALUES (?,?,?,?,?) ", ['teste','teste','teste','teste','teste'], null, null);
		});	
}
function manPanel(){
// Seleciona o elemento no DOM
var $wrapper = document.querySelector('.purple'),
	//ler dados salvos
	
	
      // String de texto
    HTMLNovo=''
	+'<div id="manobraunicapainel" style="display:block;padding:5px;border:solid 1px #000000;background:#eeeeee;color:#bbbbbb;margin:2px;">'
	+'<div style="float:left;">Manobra Unica:<br><textarea id="manobraunicabox" style="height:40px;width:200px" onblur="irsozinho();"></textarea><br>'
	+'<button type="button" onclick="irsozinho();">Configurar</button> <button type="button" onclick="limparBox();">Limpar</button></div><div style="float:left;width:20px;">&nbsp;</div>'
	+'<div id="showGo" style="float:left; height:50px;"></div>'
	+'<div style="clear:both;"> &nbsp; </div>'
	+'<div id="debugtext" ></div>'
	+'</div>'
	+'<div id="manpanel" style="display:none;">'
	+'<div>'
	+'<button onclick="mostrarTecnologia();" type="button" >TechList</button> '
	+'<button onclick="cfgCidade();" type="button" >Cidade</button> '
	+'<button onclick="cfgArd();" type="button" >Armario</button> '
	+'<button onclick="cfgshelf();" type="button" >Shelf</button> | '
	+'<button onclick="dropArds();" type="button" >Drop Ards</button>'
	+'<button onclick="rushforStatus(\'ativar\');" type="button" >Ativar Rushfor</button>'
	+'<button onclick="rushforStatus(\'desativar\');" type="button" >Desativar Rushfor</button>'
	+' UF: <input id="localuf" onblur="setLocalUF();" type="text" ></input>'
	+'</div>'
	+'<div style="padding:5px;border:solid 1px #000000;background:#eeeeee;color:#bbbbbb;margin:2px;">'
	+'	Cidade [<span style="color:#00aa00;" id="citynow">x</span>] | Ard [<span style="color:#00aa00;" id="ardnow">x</span>] '
	+'</div>'
	+'<div style="padding:5px;border:solid 1px #000000;background:#eeeeee;color:#bbbbbb;margin:2px;">'
	+'	TDM [ <span id="istdm"> &nbsp;</span> ] -  IMS h248/v5 [ <span id="isims"> &nbsp;</span> ] - IMS Sip [ <span id="issip"> &nbsp;</span> ]  |  Tecnologia Predominante:  <span id="ardtech"> &nbsp;</span> '
	+'</div>'
	+'<div id="debuglist" style="display:none;padding:5px;border:solid 1px #000000;background:#eeeeee;color:#bbbbbb;margin:2px;">'
	+'</div>'
	+'</div>'
	+'';
	//=======================================
	
	// Insere o texto antes do conteúdo atual do elemento
	$wrapper.insertAdjacentHTML('afterbegin', HTMLNovo);

	// ======================================
	
		
	
	
		
}
//localStorage.setItem('localUF',localuf);
manPanel();

document.getElementById('manobraunicabox').value=sessionStorage.getItem('texto');

//teste de manobra massiva Go

function irsozinho() {
	var inst = document.getElementById("manobraunicabox").value.replace(/(?:\r\n|\r|\n|\t)/g, '\n');
	var inst = inst.split ('Telefone')[1];
	var inst = inst.split ('\n')[1];
	var inst = inst.replace(/(?:\r\n|\r|\n|\t)/g, '');
	
	var estado = document.getElementById("manobraunicabox").value.replace(/(?:\r\n|\r|\n|\t)/g, '\n');
	var estado = estado.split('Localidade\nEsta')[1];
	var estado = estado.split('\n')[7];
	var estado = estado.replace(/(?:\r\n|\r|\n|\t)/g, '');	

	var cidade = document.getElementById("manobraunicabox").value.replace(/(?:\r\n|\r|\n|\t)/g, '\n');
	var cidade = cidade.split('Localidade\nEsta')[1];
	var cidade = cidade.split('\n')[8];
	var cidade = cidade.replace(/(?:\r\n|\r|\n|\t)/g, '');
	
	var ard = document.getElementById("manobraunicabox").value.replace(/(?:\r\n|\r|\n|\t)/g, '\n');
	var ard = ard.split('alimentador')[1];
	var ard = ard.split ('rio')[1];
	var ard = ard.split ('Porta')[0];
	var ard = ard.replace(/(?:\r\n|\r|\n|\t)/g, '');
	//utilizar indexOf para encontrar este trecho do ard no select
	
	
	var rin = document.getElementById("manobraunicabox").value.replace(/(?:\r\n|\r|\n|\t)/g, '\n');
	var rin = rin.split('alimentador')[1];
	var rin = rin.split ('Rin')[1];
	var rin = rin.split ('\n')[1];
	var rin = rin.split('Encapsulamento')[0];
	var rin = rin.replace(/(?:\r\n|\r|\n|\t)/g, '');
	
	var contagem = document.getElementById("manobraunicabox").value.replace(/(?:\r\n|\r|\n|\t)/g, '\n');
	var contagem = contagem.split('alimentador')[1];
	var contagem = contagem.split ('Voz')[1];
	var contagem = contagem.split ('Prim')[0];
	var contagem = contagem.split ('-');
	var contagemA = contagem[0];
	var contagemB = contagem[1];
	var contagemF = contagemA+'-'+contagemB;
	var contagemF = contagemF.replace(/(?:\r\n|\r|\n|\t)/g, '');
	
	sessionStorage.setItem('texto',document.getElementById("manobraunicabox").value);
	sessionStorage.setItem('inst',inst);
	sessionStorage.setItem('estado',estado);
	sessionStorage.setItem('cidade',cidade);
	sessionStorage.setItem('ard',ard);
	sessionStorage.setItem('rin',rin);
	sessionStorage.setItem('contagem',contagemF);
	
	
	//console.log ('Instância: '+inst+'\nCidade: '+cidade+'\nArmário: '+ard+'\nContagem: '+contagemF+'\nRin: '+rin);
	
	
	
	setTimeout(function (){
		//MASSIVA_PRIMARIO_AC
		if(typeof(document.getElementsByName('perfil')[0]) !== 'undefined' && document.getElementsByName('perfil')[0] !== null) {
			var perfil = document.getElementsByName('perfil')[0].options.selectedIndex;
			if (perfil==0|perfil==null){
				for (p=0;p<document.getElementsByName('perfil')[0].options.length;p++){
					if(document.getElementsByName('perfil')[0].options[p].text=='MASSIVA_PRIMARIO_'+sessionStorage.getItem('estado')){
						//console.log(document.getElementsByName('perfil')[0].options[i].text+'-'+i);
						document.getElementsByName('perfil')[0].options[p].selected=true;
						sessionStorage.setItem ('continuar', 'sim');
						document.initForm.submit();
					}
				}
			}
		}				
		var cidadeOrigem = document.getElementsByName('cidadeOrigem.cityName')[0].options.selectedIndex;
		var armarioOrigem = document.getElementsByName('armarioOrigem.locationId')[0].options.selectedIndex;
		var shelfOrigem = document.getElementsByName('shelfOrigem.equipmentId')[0].options.selectedIndex;

		if ((cidadeOrigem==0|cidadeOrigem==null)&sessionStorage.getItem('setCidade')!='ok'){
			for (i=0;i<document.getElementsByName('cidadeOrigem.cityName')[0].options.length;i++){
				if(document.getElementsByName('cidadeOrigem.cityName')[0].options[i].text==sessionStorage.getItem('cidade')){
					//console.log(document.getElementsByName('cidadeOrigem.cityName')[0].options[i].text+'-'+i);
					document.getElementsByName('cidadeOrigem.cityName')[0].options[i].selected=true;
					sessionStorage.setItem ('continuar', 'sim');
					sessionStorage.setItem ('setCidade','ok');
					VerificaCidade('Cidade');
				}
			}
		}
		else if((armarioOrigem==0|armarioOrigem!=null)&sessionStorage.getItem('setOrigem')!='ok'){
			for (j=0;j<document.getElementsByName('armarioOrigem.locationId')[0].options.length;j++){
				if (document.getElementsByName('armarioOrigem.locationId')[0].options[j].text.indexOf(sessionStorage.getItem('ard'))> -1){
					document.getElementsByName('armarioOrigem.locationId')[0].options[j].selected=true;
					sessionStorage.setItem ('continuar', 'sim');
					sessionStorage.setItem ('setOrigem','ok');
					verificaOrigemDestinoArmario('origem');
				}				
			}	
		}
		else if ((shelfOrigem==0|shelfOrigem!=null)&sessionStorage.getItem('setRin')!='ok') {
			for (l=0;l<document.getElementsByName('shelfOrigem.equipmentId')[0].options.length;l++){
				if (document.getElementsByName('shelfOrigem.equipmentId')[0].options[l].text.indexOf(sessionStorage.getItem('rin'))> -1){
					document.getElementsByName('shelfOrigem.equipmentId')[0].options[l].selected=true;
					sessionStorage.setItem ('continuar', 'sim');
					sessionStorage.setItem ('setRin','ok');
					atualizaValorTecnologia('origem');
				}
			}
		}
		else {
			sessionStorage.setItem ('continuar', 'nao');
		}	
	}, 1000);
	document.getElementsByName('instancias')[0].value=sessionStorage.getItem('inst');
}
if(sessionStorage.getItem ('continuar')=='sim'){
	irsozinho();
}
if(sessionStorage.getItem('inst').length!=null){	
	document.getElementById('showGo').innerHTML= '<table style="clear:both;">'
	+'<tr><td class="purple">Instancia: </td><td style="color:#009900";>'+sessionStorage.getItem('inst')+'</td></tr>'
	+'<tr><td class="purple">Cidade: </td><td style="color:#009900";>'+sessionStorage.getItem('cidade')+'</td></tr>'
	+'<tr><td class="purple">Armario: </td><td style="color:#009900";>'+sessionStorage.getItem('ard')+'</td></tr>'
	+'<tr><td class="purple">Rin: </td><td style="color:#009900";>'+sessionStorage.getItem('rin')+'</td></tr>'
	+'<tr><td class="purple">Contagem: </td><td style="color:#009900";>'+sessionStorage.getItem('contagem')+'</td></tr></table>';
}
function limparBox(){
	document.getElementById('manobraunicabox').value='';
	sessionStorage.clear();
	window.location ='http://manobramassiva.gvt.net.br/ManobraMassiva/';
	//location.reload();
}

function ims2() {
	var ard = document.getElementsByName("shelfOrigem.equipmentId");
	var imsCont = 0; var tdmCont = 0; var sipCont = 0;
	var ards = ard[0].options.length -1;
	var isIMS='<span style="color:red;">N</span>';
	var isSIP='<span style="color:red;">N</span>';
	var isTDM='<span style="color:red;">N</span>';
	var isTECH_tdm='';var isTECH_ims='';var isTECH_sip='';
	
	for (i = 0; i < ard[0].options.length; i++) {

		if(ard[0].options[i].innerHTML.match(/SIP/g)){
			sipCont++;isTECH_sip=' SIP ';
			isSIP='<span style="color:green;">Sim</span>';
		}
		else if(ard[0].options[i].innerHTML.match(/IMS/g)){
			imsCont++; isTECH_ims=' IMS ';
			isIMS='<span style="color:green;">Sim</span>';
		}
		else{
			if(i!=0){
				tdmCont++;isTECH_tdm=' TDM ';
				isTDM='<span style="color:green;">Sim</span>';
			}
			
		}
	}
		
	//console.log ("ards:"+ ards +" - ims:"+ imsCont+" - TDM: "+tdmCont+" - SIP: "+sipCont);
	document.getElementById('istdm').innerHTML=isTDM;
	document.getElementById('isims').innerHTML=isIMS;
	document.getElementById('issip').innerHTML=isSIP;
	document.getElementById('ardtech').innerHTML=isTECH_tdm+isTECH_ims+isTECH_sip;
	
}
ims2();
/*
function rushfor(){
	for(cid=0;cid<cidades[0].options.length;cid++){
		console.log(cidades[0].options[i].text);
		
	}
}
*/
function setLocalUF(){
	var localuf = document.getElementById('localuf').value;
	localStorage.setItem('localUF',localuf);
	
}
document.getElementById('localuf').value=localStorage.getItem('localUF');

function zeraContadores(){
	localStorage.setItem('counterCity',1);
	localStorage.setItem('counterArd',1);
	document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex=1; 
	document.getElementsByName('armarioOrigem.locationId')[0].selectedIndex=1; 
}

function rushforStatus(comando){
	if(comando=='ativar'){
		localStorage.setItem('rushCommand','ativado');
		alert('iniciar');
		localStorage.setItem('counterCity',1);
		localStorage.setItem('counterArd',1);
		document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex=1; 
		document.getElementsByName('armarioOrigem.locationId')[0].selectedIndex=1; 
		document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex=1;
		document.getElementsByName('armarioOrigem.locationId')[0].selectedIndex=1;
		location.reload();
	}
	if(comando=='desativar'){
		localStorage.setItem('rushCommand','desativado');
		zeraContadores();
	}
}


document.getElementsByName('shelfOrigem.equipmentId')[0].multiple=true;
document.getElementsByName('shelfOrigem.equipmentId')[0].style.height='100';

function exploreCities(){
	
	//if(contador == null){ localStorage.setItem('counterCity',1); }
	var cidadeAtual   	= localStorage.getItem('counterCity'); 
	var armarioAtual  	= localStorage.getItem('counterArd'); 
	var totalCidades  	= document.getElementsByName('cidadeOrigem.cityName')[0]; // 72-1 no paraná
	var totalArmarios 	= document.getElementsByName('armarioOrigem.locationId')[0]; // 418-1 em curitiba	
	var status   		= localStorage.getItem('rushCommand');
	var dataArd 		= '';

	if(totalCidades.length>0){
		document.getElementById('citynow').innerHTML=' '+totalCidades.options[totalCidades.selectedIndex].innerText+'  <span style="color:orange;">'+totalCidades.selectedIndex+'/'+(totalCidades.length-1)+'</span>';
	}
	if(totalArmarios.length>1){// 0  é vazio, 1 é --selecione--
	
		document.getElementById('ardnow').innerHTML=''+totalArmarios.options[totalArmarios.selectedIndex].innerText+' <span style="color:orange;">'+totalArmarios.selectedIndex+'/'+(totalArmarios.length-1)+'</span>';
		var shelfs = document.getElementsByName('shelfOrigem.equipmentId')[0];
		if(shelfs.length>1){ /* ... */	}
		var db = openDatabase ('ManobraMassiva', '1.0', 'Banco local Manobra Massiva', 2 * 1024 * 1024);
		db.transaction (function (tx) {
			tx.executeSql ("CREATE TABLE IF NOT EXISTS ARDS (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, uf, cidade, armario, shelf, tecnologia)");
		});
		var inUF=localStorage.getItem('localUF');
		var inCity=totalCidades.options[totalCidades.selectedIndex].innerText;
		var inArd=totalArmarios.options[totalArmarios.selectedIndex].innerText;
		var inShelf=null;
		var inTech = document.getElementById('ardtech').innerHTML;
		if (status=='ativado'){
			db.transaction (function (tx) {
				for (cShelf=0;cShelf<shelfs.length;cShelf++){
					if (cShelf==0){continue;}
					inShelf=shelfs[cShelf].innerHTML;
					tx.executeSql ("INSERT INTO ARDS (uf, cidade, armario, shelf, tecnologia) VALUES (?,?,?,?,?) ", [inUF,inCity,inArd,inShelf,inTech], null, null);
					
					
					var dataArd = localStorage.getItem('dataArd');
					console.log(''+inCity+';'+inArd+';'+inShelf+';'+inTech+'\n');
					dataArd +=inUF+';'+inCity+';'+inArd+';'+inShelf+';'+inTech+'\n';
					localStorage.setItem('dataArd',dataArd);
				}
				//tx.executeSql ("drop table ards");
			});
		}
	}
	if (status=='ativado'){
		console.log('Cidade: '+cidadeAtual+' | armario atual:'+armarioAtual+', total armarios:'+totalArmarios.length+'')
		if(armarioAtual<totalArmarios.length){
			wait(300);
			document.getElementsByName('armarioOrigem.locationId')[0].selectedIndex=armarioAtual;
			armarioAtual++;
			localStorage.setItem('counterArd',armarioAtual);
			javascript:verificaOrigemDestinoArmario('origem');
			
		}else{
			wait(300);
			localStorage.setItem('counterArd',1);
			cidadeAtual++;
			localStorage.setItem('counterCity',cidadeAtual);
			document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex=parseInt(cidadeAtual);;
			javascript:VerificaCidade('Cidade');
		}
	}
}
exploreCities();



//===============================================================
 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'chrome-extension://'+extVSMonitorId+'/db/shelfs.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 
 function mostrarTecnologia(){
	 //document.getElementById('debuglist').style.display='';
	 var cidade = document.getElementsByName('cidadeOrigem.cityName')[0].options[document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex].text;
	 loadJSON(function(response) {
	  // Parse JSON string into object
		var data = JSON.parse(response);
		for(i=0;i<data.length;i++){
			if (data[i].cidade==cidade){
				if(data[i].armario!=data[i+1].armario){
					//document.getElementById('debuglist').innerHTML+=data[i].armario+' - '+data[i].tec+'<br>';
					for(ish=0;ish<document.getElementsByName('armarioDestino.locationId')[0].options.length;ish++){
						//console.log(document.getElementsByName('selShelf')[0].options[ish].innerText);
						if(document.getElementsByName('armarioDestino.locationId')[0].options[ish].innerText.indexOf(data[i].armario)>-1){
							document.getElementsByName('armarioDestino.locationId')[0].options[ish].innerText=data[i].armario+' - '+data[i].tec;

							
						}
					}
				}
			}
		}
		//ao adicionar a tecnologia no text das options, o manobra massiva buga, pois ele usa o value do option + o texto do option, correção: 
		document.getElementsByName('armarioDestino.locationId')[0].options[document.getElementsByName('armarioDestino.locationId')[0].selectedIndex].innerText=document.getElementsByName('armarioDestino.locationId')[0].options[document.getElementsByName('armarioDestino.locationId')[0].selectedIndex].innerText.split(' - ')[0];

	 });
	}
mostrarTecnologia();

/*
function mostrarTecnologia(){
	//console.log('chrome-extension://'+extVSMonitorId+'/db/shelfs.json');
	if(document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex>0){
			var cidade = document.getElementsByName('cidadeOrigem.cityName')[0].options[document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex].text;
			var dataArds = loadJSON('chrome-extension://'+extVSMonitorId+'/db/shelfs.json',
			 function(data) {
				var dataArdsShow='';
				var dataArdTempFull='';
				for(i=0;i<data.length;i++){
					if (data[i].cidade==cidade){
						var dataArdini=dataArdini+data[i].cidade+' | '+data[i].armario+' | '+data[i].tec+'<br>';
							var dataArdsShow=dataArdsShow+dataArdTemp[0]+' / <span style="color:#ff0000">'+dataArdTemp[1]+'</span><br>';
							//CONCATENAR SHELF E RIN DENTRO DA COMBOBOX
							for(ish=0;ish<document.getElementsByName('selShelf')[0].options.length;ish++){
								//console.log(document.getElementsByName('selShelf')[0].options[ish].innerText);
								if(document.getElementsByName('selShelf')[0].options[ish].innerText.indexOf(dataArdTemp[0])>-1){
									document.getElementsByName('selShelf')[0].options[ish].innerText=dataArdTemp[0]+' | '+dataArdTemp[1];
									console.log(dataArdTemp[0]);
									
								}
							}
					}
				}
				document.getElementById('debuglist').style.didplay='';
				document.getElementById('debuglist').innerHTML=dataArdini;

			 //return data 
			 
			 
			 },
			 function(xhr) { console.error(xhr); }
		);
	}
}
*/
//document.getElementsByName('armarioDestino.locationId')[0].options
//var cidade = document.getElementsByName('cidadeOrigem.cityName')[0].options[document.getElementsByName('cidadeOrigem.cityName')[0].selectedIndex].text
var todos = document.getElementsByName('armarioDestino.locationId');
var td2 = todos[0].parentNode;
td2.innerHTML = td2.innerHTML+'<a id="ardref" href="#popup1" ><img title="info" alt="info" width="12px" height="12px" src="chrome-extension://'+extVSMonitorId+'/imgs/info.png" /></a>';


var $wrapper = document.querySelector('body');
    HTMLNovo=''
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
	+'<div id="listartecno" class="overlay">'
	+'	<div class="popup">'
	+'		<h2>RJRJO_O1A60</h2>'
	+'		<a class="close" href="#">&times;</a>'
	+'		<div class="content">'
	+'			ZHONE - MXK 823 - A60-RIN-136 RJOA-601 MXK - MIX VDSL <br>'
	+'			KEYMILE - MG2500 - A60-RIN-134 RJOA-600 MIX - RJOA-600 <br>'
	+'			KEYMILE - MG2500 - A60-RIN-422 RJOA-604 COMBO - RJOA-604 <br>'
	+'		</div>'
	+'	</div>'
	+'</div>';
	$wrapper.insertAdjacentHTML('beforeend', HTMLNovo);

//===============================================================

function getManobra(){
	//Pegar UF, Cidade, Telefone, Armario, Rin
	document.getElementById('manobraunicabox').style.height="100px";
	var manobratexto = document.getElementById('manobraunicabox').value;
	var muTelefone = manobratexto.split('Telefone')[1].split('Consulta')[0];
	var muUF = manobratexto.split('Sagre Oper On Line')[1].split('\t')[14];
	var muCidade = manobratexto.split('Sagre Oper On Line')[1].split('\t')[15];
	var muArmario=manobratexto.split('Porta')[0].split('rio')[1];
	var muRin='';
	var testexxx = manobratexto.indexOf('Uf');
	//document.getElementById('debugtext').innerHTML=muTelefone+'<br>';
	//document.getElementById('debugtext').innerHTML+=muUF+'<br>';
	//document.getElementById('debugtext').innerHTML+=muCidade+'<br>';
	//alert('['+muArmario+']');
}

/* 
//CONEXÃO SIMPLES COM BANCO

var db = openDatabase ('ManobraMassiva', '1.0', 'Banco local Manobra Massiva', 2 * 1024 * 1024);
			db.transaction (function (tx) {
			tx.executeSql ("CREATE TABLE IF NOT EXISTS vsmx (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, teste)");
			tx.executeSql ("INSERT INTO vsmx (teste) VALUES (?)", ['teste'], null, null);
		});
db.transaction (function (tx) {
					tx.executeSql ("INSERT INTO ARDS (teste) VALUES (?) ", ['teste'], null, null);
			});

// MODELO DE COMO FAZER DOWNLOAD DE ALGO
function downloadFile(conteudo, filename) {
    var ancora = document.createElement('a');
    ancora.href = 'data:application/octet-stream;charset=utf-8,' + conteudo;
    ancora.download = filename;
    ancora.click();
}
*/



