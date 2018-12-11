/*
CPEA-040-395
FLAB-075-236
FLAB076-SIP

RJOA-604
RJOA-600
RJOA-601

422
134
136
*/
//if(lista[i].innerHTML.match(/P/g)){
//armario		: td3 / 4	
//var res = str.substr(1, 4);	
//td[6].innerHTML.replace(/^\s+|\s+$/g,"");
//td[4].innerHTML.indexOf('1A');
//ARMARIO: var teste2 = td[4].innerHTML.substr(54,55).replace(/^\s+|\s+$/g,"");
//document.getElementsByClassName('cabecalhoTabelaTitulo')[0].getElementsByTagName('img')[0].src='http://gpsco.gvt.com.br/gps/co/atendimento/resources/images/logo_telefonica_vivo.png?pfdrid_c=true';
//document.getElementsByClassName('cabecalhoTabelaTitulo')[0].getElementsByTagName('img')[0].style.marginRight='30px';

// o codigo fonte original do manobra unica substitui o prototype de string que representa o trim e causa um bug no chrome 70.0 
// foi necessario obrigatoriamente usar um polyfill pra reescrever o prototype novamente e fazer funcionar para esta versão 
// o certo seria atualizar o chrome para versão mais nova, mas a segurança digital da vivo proibiu atualizar o chrome 

String.prototype.trim = function () {
	return this.replace(/^[\s\uFEFF\xA]+|[\s\uFEFF\xA0]+$/g, '');
}

if (document.getElementById('vsmid')) {
	var extVSMonitorId = document.getElementById('vsmid').value;
} else { }

window.addEventListener("load", getSasImsInfo);
/* FUNÇÃO QUE VAI CAPTURAR V5ID E 248 IP  */
function mjax2(a, b) {
	var oReq = new XMLHttpRequest();
	oReq.onload = function () { console.log(this.responseText) };
	oReq.open("get", "http://efika/vsm/legado/inserir_instancia.php?instancia=" + a + "&nodeaddress=" + b, true);
	oReq.send();
}
function getSasImsInfo() {
	if (document.getElementsByClassName('menu_hq')[0].innerText.indexOf('IMS') > -1) {
		console.log("IMS");
		var instanciaInserida = document.getElementById('telefone').value;
		var nodeaddressDetect = document.getElementsByClassName('menu_hq')[0].innerText.split('Porta')[1].split('Prim')[0].split('IMS')[0].trim();
		mjax2(instanciaInserida, nodeaddressDetect);
	} else {
		//console.log("TDM");
	}

	//pega link sas
	//document.getElementById('lnkSAS').getElementsByTagName('a')[0].href
}
window.addEventListener("load", lStart);
function lStart() {
	if (document.getElementsByTagName('img')[0]) {
		var allimgs = document.getElementsByTagName('img')
		for (ctr = 0; ctr < allimgs.length; ctr++) {
			//console.log(allimgs[ctr].getAttribute('alt'))
			if (allimgs[ctr].getAttribute('alt') == "Fechar") {
				console.log(allimgs[ctr])
				var aimagemFechar = allimgs[ctr];
			}
		}
		var el = document.createElement("span");
		el.innerHTML = ' <img src="chrome-extension://' + extVSMonitorId + '/imgs/resetmanobra.png"  onclick="resetaManobra();" alt="Resetar" style="cursor:pointer;">';
		var eDest = aimagemFechar;
		insertAfter(eDest, el);
	}
}

elemento = document.getElementsByTagName('body')[0];
elemento.addEventListener('keydown', function (e) {
	if ((e.metaKey || e.ctrlKey) && (e.keyCode == 192)) {
		setTimeout(function () {
			javascript: buscaTEL();
		}, 300);
	}
}, false);
function resetaManobra() {
	document.cookie = "BIGipServerpool_sagre=123; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
	document.cookie = "JSESSIONID=123; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
	document.cookie = "GVT_USER_LOGIN=123; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
	document.cookie = "GVT_AUTH_TYPE=123; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
	window.location = 'http://appsagre.gvt.net.br/Manobraunica';
}



// icons =======================================================================
var $wrapperXic = document.querySelector('head');
HTMLNovoXic = ''

	+ '<link rel="icon" type="image/png" href="chrome-extension://' + extVSMonitorId + '/128.png" sizes="16x16">'
	+ '<meta name="theme-color" content="#ffffff">';
$wrapperXic.insertAdjacentHTML('afterbegin', HTMLNovoXic);


function jisset(testar) {
	//console.log(testar+' - ');

	if (typeof (testar) !== 'undefined' && testar !== null) {
		return true;
	} else {
		return false;
	}

}

if (typeof (document.getElementById('lnkWL')) !== 'undefined' && document.getElementById('lnkWL') !== null) {
	//code handling myObject
}
else {
	if (document.referrer == 'http://appsagre.gvt.net.br/Manobraunica/' && document.getElementById('telefone').value.length > 5) {
		javascript: buscaTEL();
	}

}
function loadJSON(path, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if (success)
					success(JSON.parse(xhr.responseText));
			} else {
				if (error)
					error(xhr);
			}
		}
	};
	xhr.open("GET", path, true);
	xhr.send();

}

function manobraOrigem() {
	var origem = document.getElementsByClassName('menu_hq');
	var td = origem[0].getElementsByTagName('td');
	var div = '';
	for (i = 0; i < td.length; i++) {
		div = td[i].getElementsByTagName('div');
		if (td[i].innerHTML.match(/Caixa/g)) { alert(td[i].innerHTML + " - " + i); }
		//if(td[i].innerHTML.length<50){console.log(td[i].innerHTML)}
		//console.log(div[0].innerHTML);
	}

}
//manobraOrigem();


function verificarAlimentador() {
	var origem = document.getElementsByClassName('menu_hq');
	var td = origem[0].getElementsByTagName('td');
	for (i = 0; i < td.length; i++) {
		//console.log(i+' - '+td[i].innerText);
		/* Duas formas de incontrar os indexes:
		// 1 - encontrar o ARD, depois somar +7 pra virar index da caixa e +14 prar virar o index do rin'
		// 2 - FOR buscando padroes nas , as palavras ARmário e Caixa Repetem algumas vezes
		*/
		if ((td[i].innerText.length < 8) && (td[i].innerText.indexOf('O1') >= 0)) { indexArd = i; } else { if (td[i].innerText < 5) { td[i].style.background = "#ffcccc"; indexArd = 4; } }
		if (td[i].innerText.indexOf('Caixa') >= 0) { indexCaixa = i + 1; } else { }
		if (td[i].innerText.indexOf('Rin') >= 0) { indexRin = i + 1; } else { }
		if (td[i].innerText.indexOf('Par') >= 0) { if (td[i].innerHTML < 400) { td[i].style.background = "#ffcccc"; } } else { }
	}//console.log('ARD:'+indexArd+' - Caixa:'+indexCaixa+' - Rin:'+indexRin+'');
	if (td[indexCaixa].innerText.length < 5) {
		td[indexCaixa].style.background = "#ffcccc";
		//td[indexCaixa].style.border="solid 2px #ff0000";
	}


	indexesEncontrados = [];
	indexesEncontrados[0] = indexArd;
	indexesEncontrados[1] = indexCaixa;
	if (typeof (indexRin) !== 'undefined' && indexRin !== null) {
		indexesEncontrados[2] = indexRin;
	}

	return indexesEncontrados;

}
verificarAlimentador();


function setArd() {
	var origem = document.getElementsByClassName('menu_hq');
	var td = origem[0].getElementsByTagName('td');
	//HARDCODE: tirar o 4, e detectar com for
	var ard = td[indexesEncontrados[0]].innerHTML.substr(54, 55).replace(/^\s+|\s+$/g, "");
	document.getElementsByName("armarioSelect")[0].value = ard;
	getServletDesenho('armario');

	mostrarShelfs();


}

function mostrarShelfs() {
	if (document.getElementsByName('armarioSelect')[0].selectedIndex > 0) {
		var cidade = document.getElementsByClassName('form_hq')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[7].innerText;
		var cidade = cidade.trim();
		var ardparte1 = document.getElementsByClassName('form_hq')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[8].innerText.split('_')[0];
		var ardparte2 = document.getElementsByName('armarioSelect')[0].options[document.getElementsByName('armarioSelect')[0].selectedIndex].innerText;
		var ardMontado = ardparte1 + '_' + ardparte2;
		var dataArds = loadJSON('chrome-extension://' + extVSMonitorId + '/db/shelfs.json',
			function (data) {
				var dataArdsShow = '';
				var dataArdTempFull = '';
				for (i = 0; i < data.length; i++) {
					//if (data[i].cidade==cidade && data[i].armario.split('_')[1]==ardparte2){
					if (data[i].cidade == cidade && data[i].armario.indexOf(ardparte2) > 0) {
						var dataArdini = data[i].cidade + ' | ' + data[i].armario + ' | ' + data[i].tec + '<br>';
						var dataArdTemp = data[i].shelf.split(' - ')[2].split(' '); // data[i].tec
						var dataArdTempFull = dataArdTempFull + data[i].shelf + '<br>';
						if (data[i].shelf.match(/RIN/g)) {
							var dataArdsShow = dataArdsShow + dataArdTemp[0] + ' / <span style="color:#ff0000">' + dataArdTemp[1] + '</span><br>';
							//CONCATENAR SHELF E RIN DENTRO DA COMBOBOX
							for (ish = 0; ish < document.getElementsByName('selShelf')[0].options.length; ish++) {
								//console.log(document.getElementsByName('selShelf')[0].options[ish].innerText);
								if (document.getElementsByName('selShelf')[0].options[ish].innerText.indexOf(dataArdTemp[0]) > -1) {
									document.getElementsByName('selShelf')[0].options[ish].innerText = dataArdTemp[0] + ' | ' + dataArdTemp[1];
									console.log(dataArdTemp[0]);

								}
							}
						}

					}
				}
				document.getElementById('troublePanel1').innerHTML = '<div style="background:#dddddd;">' + dataArdini + '</div>' + dataArdTempFull;
				document.getElementById('troublePanel2').innerHTML = ''
					+ '<div style="background:#dddddd;">' + dataArdini + '</div>'
					+ dataArdsShow;
				//return data 


			},
			function (xhr) { console.error(xhr); }
		);
	}
}
//document.getElementsByName('selShelf')[0].options[2].innerText="";
//for(i=0;i<document.getElementsByName('selShelf')[0].options.length;i++){console.log(document.getElementsByName('selShelf')[0].options[i].innerText);}
mostrarShelfs();


function setCaixa() {
	//get
	var origem = document.getElementsByClassName('menu_hq');
	var caixaOri = origem[0].getElementsByTagName('td');
	//HARDCODE: tirar o 11, e detectar com for
	var caixaFinal = caixaOri[indexesEncontrados[1]].innerText.split(" Par ");
	var caixa = document.getElementsByName("caixaSelect");
	for (i = 0; i < caixa[0].options.length; i++) {
		//if(texto.indexOf("carro")>=0){console.log("ok")}else{console.log("erro")}
		if (caixa[0].options[i].innerHTML.indexOf(caixaFinal[0]) >= 0) {

			var optPar = caixa[0].options[i].innerText.split(" ")[1].replace("(", "").replace(")", "").split("-");
			if ((Number(Number(caixaFinal[1])) >= optPar[0]) && (Number(caixaFinal[1]) <= optPar[1])) {
				var aptPar = document.getElementsByName("caixaSelect")[0].selectedIndex = caixa[0].options[i].index;
			}


			//seleciona a caixa

		}
	}
	getServletDesenho('caixa');

}




function setRin() {
	//get
	var origem = document.getElementsByClassName('menu_hq');
	var rinOri = origem[0].getElementsByTagName('td');
	//HARDCODE: tirar o 18, e detectar com for
	var rin = rinOri[indexesEncontrados[2]].innerText;
	var caixa = document.getElementsByName("selShelf");
	for (i = 0; i < caixa[0].options.length; i++) {
		if (caixa[0].options[i].innerHTML.indexOf(rin) >= 0) {
			document.getElementsByName("selShelf")[0].selectedIndex = caixa[0].options[i].index;
		}
	}
	getServletDesenho('shelf');



}
//Desativar elementos de loading
document.getElementById('Aguarde').style.display = 'none';
//document.getElementById('rinloading').style.display='none';


//document.getElementById('Aguarde').style.display='none';

//Adiciona loading no RIN
//var tabelaWL = document.getElementById('tabWL');
//var menuHQ2 = tabelaWL.getElementsByClassName('menu_hq')[0];
//var tdhq = menuHQ2.getElementsByTagName('td')[0];
//tdhq.innerHTML = tdhq.innerHTML+'<td><img style="float:left;" id="muloadingimg" src="http://gpsco.gvt.com.br/gps/co/atendimento/resources/images/load.gif?pfdrid_c=true" alt=""> <h2>Carregando RIN </h2></td>';




function infoRins() {
	var distribuidor = document.getElementsByClassName('menu_hq')[2];
	var central = distribuidor.getElementsByTagName('font')[0].innerText;
	alert(central);
}


// portaSelect selMotPRI selShelf selectADSLVoz selMotTB
var todos = document.getElementsByName('armarioSelect');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" onclick="setArd();" class="form">set</button>' + td2.innerHTML;

var todos = document.getElementsByName('caboDistribuidorSelect');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" style="border:solid 1px #cccccc;background:#f6f6f6;color:#dddddd;" disabled="disabled" onclick="" class="form">set</button>' + td2.innerHTML;

var todos = document.getElementsByName('caixaSelect');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" onclick="setCaixa();" class="form">set</button>' + td2.innerHTML;


var todos = document.getElementsByName('selMotPAR');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" style="border:solid 1px #cccccc;background:#f6f6f6;color:#dddddd;" disabled="disabled" onclick="" class="form">set</button>' + td2.innerHTML;

//Filtro das portas de VOZ
function insertAfter(referenceNode, newNode) { referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling); }
var el = document.createElement("span");
el.innerHTML = '<input id="vprimFilter" onkeyup="vfiltrarPortas();" onclick="vfiltrarPortas();" onblur="vfiltrarPortas();" type="text"  class="form" style="text-align:center;width:70px;background:#eeeeee;border:solid 1px #FFC56C;" placeholder=" Filtrar portas "></input>';
var eDest = document.getElementsByName('portaSelect')[0];
insertAfter(eDest, el);

function vfiltrarPortas() {
	document.getElementsByName('portaSelect')[0].selectedIndex = 0;
	var optPortas = document.getElementsByName('portaSelect');
	var filtro = document.getElementById('vprimFilter').value;
	selecionadas = 0;
	if (filtro.indexOf(' ') >= 0) {
		//console.log('modo multiplo');
		//no modo multiplo, colocar todos os options em display none, e depois liberar 1 por 1 no loop
		for (idn = 0; idn < optPortas[0].length; idn++) { optPortas[0].options[idn].style.display = "none"; }
		//filtro multiplo
		var filtroMultiplo = filtro.split(' ');
		for (im = 0; im < filtroMultiplo.length; im++) {
			if (filtroMultiplo[im].length > 0) {
				for (i = 0; i < optPortas[0].length; i++) {
					if (optPortas[0].options[i].innerText.indexOf(filtroMultiplo[im]) >= 0) {
						optPortas[0].options[i].style.display = '';
						selecionadas++;
					}
					else {

					}
				}
			}
		}
	} else {
		//console.log('modo simples');
		for (i = 0; i < optPortas[0].length; i++) {
			if (optPortas[0].options[i].innerText.indexOf(filtro) >= 0) {
				optPortas[0].options[i].style.display = '';
				selecionadas++;
			}
			else {
				optPortas[0].options[i].style.display = "none";
			}
		}
	}

	optPortas[0].options[0].style.display = "";
	if (document.getElementsByName('portaSelect')[0].options.selectedIndex >= 0) {
		optPortas[0].options[0].innerText = 'Filtro: ' + selecionadas + ' / ' + optPortas[0].options.length + ' Portas';
	}

}

//Filtro das portas de DADOS
if (document.getElementsByName('selectADSLDado')[0]) {
	var todos = document.getElementsByName('selectADSLDado');
	var td2 = todos[0].parentNode;
	td2.innerHTML = ' <button type="button" style="border:solid 1px #cccccc;background:#f6f6f6;color:#dddddd;" disabled="disabled" onclick="" class="form">set</button> ' + td2.innerHTML;
	//document.getElementsByName('selectADSLDado')[0].innerHTML='<button type="button" onclick="setArd();" class="form">set</button> ';
	function insertAfter(referenceNode, newNode) { referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling); }
	var el = document.createElement("span");
	el.innerHTML = '<input id="primFilter" onkeyup="filtrarPortas();" onclick="filtrarPortas();" onblur="filtrarPortas();" type="text"  class="form" style="text-align:center;width:70px;background:#eeeeee;border:solid 1px #FFC56C;" placeholder=" Filtrar portas "></input>';
	var eDest = document.getElementsByName('selectADSLDado')[0];
	insertAfter(eDest, el);
}



function filtrarPortas() {
	document.getElementsByName('selectADSLDado')[0].selectedIndex = 0;
	var optPortas = document.getElementsByName('selectADSLDado');
	var filtro = document.getElementById('primFilter').value;
	selecionadas = 0;
	if (filtro.indexOf(' ') >= 0) {
		//console.log('modo multiplo');
		//no modo multiplo, colocar todos os options em display none, e depois liberar 1 por 1 no loop
		for (idn = 0; idn < optPortas[0].length; idn++) { optPortas[0].options[idn].style.display = "none"; }
		//filtro multiplo
		var filtroMultiplo = filtro.split(' ');
		for (im = 0; im < filtroMultiplo.length; im++) {
			if (filtroMultiplo[im].length > 0) {
				for (i = 0; i < optPortas[0].length; i++) {
					if (optPortas[0].options[i].innerText.indexOf(filtroMultiplo[im]) >= 0) {
						optPortas[0].options[i].style.display = '';
						selecionadas++;
					}
					else {

					}
				}
			}
		}
	} else {
		//console.log('modo simples');
		for (i = 0; i < optPortas[0].length; i++) {
			if (optPortas[0].options[i].innerText.indexOf(filtro) >= 0) {
				optPortas[0].options[i].style.display = '';
				selecionadas++;
			}
			else {
				optPortas[0].options[i].style.display = "none";
			}
		}
	}

	optPortas[0].options[0].style.display = "";
	if (document.getElementsByName('selShelf')[0].options.selectedIndex >= 0) {
		optPortas[0].options[0].innerText = 'Filtro: ' + selecionadas + ' / ' + optPortas[0].options.length + ' Portas';
	}

}

function troublePanel() {
	var tds = document.getElementsByTagName('td');
	for (i = 0; i < tds.length; i++) {
		if (tds[i].innerHTML == 'Lista de ferramentas de Troubleshooting') {
			console.log(i + '-' + tds[i].innerHTML);
			var novo = tds[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
			//novo.style.border="solid 1px #ff0000";
			novo.setAttribute('id', 'troublePanel');
		}
	}
	document.getElementById('troublePanel').innerHTML = '<tr> <td style="width:50%;vertical-align:top;font-size:12px;" id="troublePanel1"></td> <td style="width:50%;vertical-align:top;font-size:12px;" id="troublePanel2"></td> </tr>';
	document.getElementById('troublePanel').style.cssText = "width:100%;border:solid 1px #000088;padding:5px;font-size:16px;";
}
troublePanel();
//=========================================
function autoGoMode(start) {
	var contador = localStorage.getItem('autogo');
	if (start == 'start') {
		localStorage.setItem('autogo', 'armario');
		javascript: buscaTEL();
	}
	else {
		if (contador == 'armario') {
			localStorage.setItem('autogo', 'secundario');
			setTimeout(function () { if (document.getElementsByName('armarioSelect')[0].selectedIndex == 0) { setArd(); } }, 100);
		}
		else if (contador == 'secundario') {
			localStorage.setItem('autogo', 'rin');
			setTimeout(function () { if (document.getElementsByName('caixaSelect')[0].selectedIndex == 0) { setCaixa(); } }, 900);
		}
		else if (contador == 'rin') {
			localStorage.setItem('autogo', 'concluido');
			setTimeout(function () { if (document.getElementsByName('selShelf')[0].selectedIndex == 0) { setRin(); } }, 900);

		}
		else {
			localStorage.setItem('autogo', 'concluido');
		}
	}
}
//testar se o problema eh os combobox ser undefined nos primeiros ms, colocar pra 1000 ms, e setar só se o elemento existir, e se for zero, e se o o elemento anterior estiver setado
autoGoMode();
//=========================================
//criar mo botão set
var el = document.createElement("span");
el.innerHTML = ' <input type="image" src="chrome-extension://' + extVSMonitorId + '/imgs/setmanobra.png" onclick="autoGoMode(\'start\');" value="Consulta Telefone" alt="Consulta Telefone" align="middle">';
var eDest = document.getElementById('telefone');
insertAfter(eDest, el);
//
//=========================================




document.getElementsByName('selectADSLDado')[0].options[0].innerText = '' + document.getElementsByName('selectADSLDado')[0].options.length + ' Portas encontradas';

var todos = document.getElementsByName('portaSelect');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" style="border:solid 1px #cccccc;background:#f6f6f6;color:#dddddd;" disabled="disabled" onclick="setArd();" class="form">set</button>' + td2.innerHTML;

var todos = document.getElementsByName('selMotPRI');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" style="border:solid 1px #cccccc;background:#f6f6f6;color:#dddddd;" disabled="disabled" onclick="setArd();" class="form">set</button>' + td2.innerHTML;

var todos = document.getElementsByName('selShelf');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" onclick="setRin();" class="form">set</button>' + td2.innerHTML + '<a href="#popup1" ><img title="info" alt="info" width="12px" height="12px" src="chrome-extension://' + extVSMonitorId + '/imgs/info.png" /></a>';

var todos = document.getElementsByName('selectADSLVoz');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" style="border:solid 1px #cccccc;background:#f6f6f6;color:#dddddd;" disabled="disabled" onclick="setArd();" class="form">set</button>' + td2.innerHTML;

var todos = document.getElementsByName('selMotTB');
var td2 = todos[0].parentNode;
td2.innerHTML = '<button type="button" style="border:solid 1px #cccccc;background:#f6f6f6;color:#dddddd;" disabled="disabled" onclick="setArd();" class="form">set</button>' + td2.innerHTML;

















