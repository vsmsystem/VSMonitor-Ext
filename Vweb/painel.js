//detectar o ID da extensão (isso porque versão DEV e versão Produção tem IDs diferentes)
var extVSMonitorId = chrome.runtime.id;
//Teste de expressão regular na tentativa de remover caractere que buga comentários no ETA
var re = /[\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u037F-\u0383\u038B\u038D\u03A2\u0528-\u0530\u0557\u0558\u0560\u0588\u058B-\u058E\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08A1\u08AD-\u08E3\u08FF\u0978\u0980\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0C00\u0C04\u0C0D\u0C11\u0C29\u0C34\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5A-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C80\u0C81\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D01\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D4F-\u0D56\u0D58-\u0D5F\u0D64\u0D65\u0D76-\u0D78\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F5-\u13FF\u169D-\u169F\u16F1-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191D-\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C80-\u1CBF\u1CC8-\u1CCF\u1CF7-\u1CFF\u1DE7-\u1DFB\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BB-\u20CF\u20F1-\u20FF\u218A-\u218F\u23F4-\u23FF\u2427-\u243F\u244B-\u245F\u2700\u2B4D-\u2B4F\u2B5A-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E3C-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FCD-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA698-\uA69E\uA6F8-\uA6FF\uA78F\uA794-\uA79F\uA7AB-\uA7F7\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C5-\uA8CD\uA8DA-\uA8DF\uA8FC-\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9E0-\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAA7C-\uAA7F\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F-\uABBF\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE27-\uFE2F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]/g;


var $wrapperXic = document.querySelector('head');
HTMLNovoXic = ''
	+ '<link rel="apple-touch-icon" sizes="180x180" hrefchrome-extension://' + extVSMonitorId + '/imgs/painelicons/apple-touch-icon.png">'
	+ '<link rel="icon" type="image/png" hrefchrome-extension://' + extVSMonitorId + '/imgs/painelicons/favicon-32x32.png" sizes="32x32">'
	+ '<link rel="icon" type="image/png" hrefchrome-extension://' + extVSMonitorId + '/imgs/painelicons/favicon-16x16.png" sizes="16x16">'
	+ '<link rel="mask-icon" hrefchrome-extension://' + extVSMonitorId + '/imgs/painelicons/safari-pinned-tab.svg" color="#5bbad5">'
$wrapperXic.insertAdjacentHTML('afterbegin', HTMLNovoXic);


//O javascript tem algumas limitações com, datas, a função abaixo supre algumas necessidades ao gerar datas para finalidades especificas	
//dghdg
/**
 * @author Valdecir Merli
 * @param {number} testew
 * @returns {number} 
 * @summary Data formatada de acordo com o parametro
 */
function xDate(modo) {
	//modo 1 : AAAA mm dd hh:mm:ss
	//modo 2 : dd/mm/AAAA
	//modo 3 : AAAAmmddhmd
	//modo 4 : hms
	//modo 5 : AAAAmmkeeper_sas_login
	function adz(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	var month = [];

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

	if (modo == 1) {
		datestr = '' + ano + ' ' + mes + ' ' + dia + ' ' + h + ':' + m + ':' + s;
		return datestr;
	}
	else if (modo == 2) {
		datestr = '' + dia + '/' + mes + '/' + ano + '';
		return datestr;
	}
	else if (modo == 3) {
		datestr = '' + ano + mes + dia + h + m + s + '';
		return datestr;
	}
	else if (modo == 4) {
		datestr = '' + h + m + s + '';
		return datestr;
	}
	else if (modo == 5) {
		datestr = '' + ano + mes + dia + '';
		return datestr;
	}
	else if (modo == 6) {
		datestr = '' + ano + '-' + mes + '-' + dia + ' ' + h + ':' + m + ':' + s;
		return datestr;
	}
	else if (modo == 7) {
		datestr = '' + anoj + mes + dia + '';
		return datestr;
	}
	else if (modo == 8) {
		datestr = '' + ano + '-' + mes + '-' + dia + ' ' + h + ':' + m;
		return datestr;
	}
	else if (modo == 'id') {
		var parte1 = (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();
		var parte2 = (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000).toString();
		datestr = '' + ano + mes + dia + h + m + s + parte1 + parte2;
		//(Math.floor(Math.random() * (max - min + 1)) + min)
		return datestr;
	} else {
		datestr = '' + ano + '-' + mes + '-' + dia + ' ' + h + ':' + m + ':' + s;
		return datestr;
	}
}
//========================================================================================
//Registrando prototipo para tratativa de diferenças entre ranges de datas
Object.defineProperty(Date.prototype, "diff", {
	writable: false, configurable: false, enumerable: true,

	/**
	 * Returns the difference between two Date objects.
	 * @param {Date} The date to compare to.
	 * @return {Object}
	 * @throws {TypeError}
	 */
	value: function (date) {
		if (date instanceof Date) {
			var ms = this - date;
			var diff = {};

			for (diff.years = 0; ms >= 31536000000; diff.years++ , ms -= 31536000000);
			for (diff.months = 0; ms >= 2628000000; diff.months++ , ms -= 2628000000);
			for (diff.days = 0; ms >= 86400000; diff.days++ , ms -= 86400000);
			for (diff.hours = 0; ms >= 3600000; diff.hours++ , ms -= 3600000);
			for (diff.minutes = 0; ms >= 60000; diff.minutes++ , ms -= 60000);
			for (diff.seconds = 0; ms >= 1000; diff.seconds++ , ms -= 1000);
			diff.milliseconds = ms;

			return diff;
		}

		throw new TypeError("invalid date");
	}
});

//Iniciando objeto global de requests, para recuperar e abortar requests em tempo de execução
window.xRequests = {
	"teste": "ok"
}
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
function notify(titulo, mensagem, imagem) {
	Notification.requestPermission(function () {
		var notification = new Notification(titulo, {
			icon: 'chrome-extension://' + extVSMonitorId + '/Vweb/images/notify/' + imagem,
			body: mensagem,
			requireInteraction: true
		});
		notification.onclick = function () {
			//func
		}
	});
}

function notify1(titulo, mensagem, imagem) {
	Notification.requestPermission(function () {
		var notification = new Notification(titulo, {
			icon: 'chrome-extension://' + extVSMonitorId + '/Vweb/images/notify/' + imagem,
			body: mensagem,
			requireInteraction: false
		});
		notification.onclick = function () {
			//func
		}
	});
}

function notify2(titulo, mensagem, imagem) {
	Notification.requestPermission(function () {
		var notification = new Notification(titulo, {
			icon: 'chrome-extension://' + extVSMonitorId + '/Vweb/images/notify/' + imagem,
			body: mensagem,
			requireInteraction: true
		});
		notification.onclick = function () {
			//func
		}
	});
}
//========================================================================================
function selecionarTexto(el) {
	var range = document.createRange();
	range.selectNodeContents(el);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}
//========================================================================================
function ctrlc(id, nome) {
	document.getElementById('txtfinal').value = '';
	document.getElementById('txtfinal').value = document.getElementById(id).innerText;
	var copyTextarea = document.querySelector('.txtfinal');
	//Codigo experimntal para tentar decetar caracteres invisiveis que bugam o ETA
	/*
	if(copyTextarea.match(re)){
		var copyTextarea = copyTextarea.replace(re, "*");
		alert('Caractere invisivel detectado e convertido')
	}
	*/
	//
	copyTextarea.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? statusCopiar('<span style="color:#00aa00;border:solid 1px #008800;padding:2px;"> ' + nome + ' (Copiado) .</span>')
			: statusCopiar('<span style="color:#aa0000;border:solid 1px #990000;padding:2px;"> Erro ao Copiar ' + nome + ' .</span>');
	} catch (err) {

	}
	document.getElementById('txtfinal').value = '';
}
//========================================================================================
function dblctrlc(texto) {
	document.getElementById('txtfinal').value = texto;
	var copyTextarea = document.querySelector('.txtfinal');
	copyTextarea.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? statusCopiar('<span style="color:#00aa00;border:solid 1px #008800;padding:2px;"> Texto copiado</span>')
			: statusCopiar('<span style="color:#aa0000;border:solid 1px #990000;padding:2px;"> Erro ao Copiar Texto</span>');
	} catch (err) {

	}
	document.getElementById('txtfinal').value = '';
}
//========================================================================================
function tbsFormat(id) {
	var id = id.split('_')[1]
	//if (indice){}else{var indice='';}
	if (document.getElementById(id).innerText.length < 11) {
		//converter pro formato tbs
		document.getElementById('imgicdntbs_' + id).src = 'chrome-extension://' + extVSMonitorId + '/imgs/icons/tbs-12.png';
		var dnp1 = document.getElementById(id).innerText.substr(0, 3);
		var dnp2 = document.getElementById(id).innerText.substr(3, 3);
		var dnp3 = document.getElementById(id).innerText.substr(6, 4);
		document.getElementById(id).innerHTML = dnp1 + '-' + dnp2 + '-' + dnp3;


	} else {
		//converter para formato normal
		document.getElementById('imgicdntbs_' + id).src = 'chrome-extension://' + extVSMonitorId + '/imgs/icons/tbs-12g.png';
		dn0 = document.getElementById(id).innerText.split('-')[0];
		dn1 = document.getElementById(id).innerText.split('-')[1];
		dn2 = document.getElementById(id).innerText.split('-')[2];
		document.getElementById(id).innerHTML = dn0 + dn1 + dn2;
		//document.getElementById('n2save').value;
	}
	//ctrlc('desdn','Instancia');
}
//========================================================================================
function apenasNumeros(a) {
	var b = a.replace(/[^0-9]/g, '');
	return parseInt(b);
}
//========================================================================================
function gerarSelectDataHist() {

	if (localStorage['historico_checknote'].substr(0, 1) == "{") {
		var selectedHistDatei = document.getElementById('painel_historico_date').options.selectedIndex
		var selectedHistDate = document.getElementById('painel_historico_date').options[selectedHistDatei].value
		if (selectedHistDate == 'hoje') { var selectedHistDate = xDate(6).split(' ')[0] }

		var storage = JSON.parse(localStorage['historico_checknote'])
		var storageRegistros = storage.registros
		var ctrStRgF = 0;
		var dataA = '?';
		var dataB = '';
		for (ctrStRg = 0; ctrStRg < storageRegistros.length; ctrStRg++) {
			var dataB = storageRegistros[ctrStRg].inicio.split(' ')[0];
			if (dataA != dataB) {
				var dataA = dataB;
				ctrStRgF++;
				var option = document.createElement("option");
				option.text = dataA;
				option.value = dataA;
				var select = document.getElementById("painel_historico_date");
				select.appendChild(option);

			}
		}
	}

	return false;
}

//========================================================================================
function statusCopiar(msg) {
	document.getElementById('cpstatus').innerHTML = msg;
	setTimeout(function () {
		document.getElementById('cpstatus').innerHTML = ' ';
	}, 3000);
}
//========================================================================================
function copiarChecklist(msg) {
	keepChecknote('', '');
	var atendimento = JSON.parse(localStorage['emAtendimento'])
	if (atendimento.skill == 'Manobra' || atendimento.skill == 'Multiskill' || atendimento.skill == 'Especializada') {
		localStorage['checklist_ETA'] = ''
			//------------------------------------------------------------
			+ '' + atendimento.operador + ' \n'
			+ 'Instância: ' + atendimento.instancia + ' \n'
			+ 'Técnico: ' + atendimento.tecnico + ' - ' + atendimento.t_matricula + ' \n'
			+ 'Motivo: ' + atendimento.motivo + ' \n'
			+ 'Primário: ' + atendimento.primario + ' \n'
			+ 'Pares testados: ' + atendimento.testados + ' \n'
			+ 'Binada: ' + atendimento.binada + ' \n'
			+ '' + atendimento.notes_sas + ' \n'
			+ '' + atendimento.notes_tbs + ' \n'
			+ '' + atendimento.notes_banda + ' \n'
			+ '[ ---------- Notas ---------- ] \n' + atendimento.notes_operador + '\n'

		//------------------------------------------------------------
	} else if (atendimento.skill == 'Manobra-Vivo1') {
		localStorage['checklist_ETA'] = ''
			//------------------------------------------------------------
			+ '' + atendimento.operador + ' \n'
			+ 'Terminal: ' + atendimento.instancia + ' \n'
			+ 'Técnico: ' + atendimento.tecnico + ' \n'
			+ 'Motivo: ' + atendimento.motivo + ' \n'
			+ 'ID Fibra: ' + atendimento.id_fibra + ' \n'
			+ 'CNL: ' + atendimento.cnl + ' \n'
			+ 'Escritorio: ' + atendimento.es + ' \n'
			+ 'Area Telefonica: ' + atendimento.at + ' \n'
			+ 'PON: ' + atendimento.pon + ' \n'
			+ 'ID ONT: ' + atendimento.id_ont + ' \n'
			+ 'Modelo ONT: ' + atendimento.modelo_ont + ' \n'
			+ 'Facilidade Atual: ' + atendimento.fac_at + ' Fibra: ' + atendimento.fibra + ' \n'
			+ 'Facilidade Nova: ' + atendimento.fac_nov + ' Secundaria: ' + atendimento.secundaria + ' \n'
			+ '[ ---------- Notas ---------- ] \n' + atendimento.notes_operador + '\n'
	}

	var storageFilter = localStorage['checklist_ETA'];
	document.getElementById('txtfinal').value = storageFilter;
	var copyTextarea = document.querySelector('.txtfinal');
	copyTextarea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? statusCopiar('<span style="color:#00aa00;border:solid 1px #008800;padding:2px;"> Copiado .</span>')
			: statusCopiar('<span style="color:#aa0000;border:solid 1px #990000;padding:2px;"> Erro ao Copiar .</span>');
	} catch (err) {

	}
	localStorage.setItem('checklist_ETA', xDate(3));
	document.getElementById('txtfinal').value = '';

}



//========================================================================================
function addChecklist(qual) {
	if (qual == 'sas') {
		var notes_sas = '[ Switch / Voz ] :'
		//if(jQuery('#').html()){var notes_sas = notes_sas+' | xxxxxx:'+jQuery('#').text()}
		if (jQuery('#painel-SAS-tecnologia').html()) { var notes_sas = notes_sas + '' + jQuery('#painel-SAS-tecnologia').text() }
		if (jQuery('#painel-SAS-imsutel').html()) { var notes_sas = notes_sas + ' | Registro:' + jQuery('#painel-SAS-imsutel').text() }
		if (jQuery('#painel-SAS-v5iid').html()) { var notes_sas = notes_sas + ' | v5iid: ' + jQuery('#painel-SAS-v5iid').text() }
		if (jQuery('#painel-SAS-eid').html()) { var notes_sas = notes_sas + ' | IP: ' + jQuery('#painel-SAS-eid').text().split(':')[0] }
		if (jQuery('#painel-SAS-porta').html()) { var notes_sas = notes_sas + ' | Porta: ' + jQuery('#painel-SAS-porta').text() }
		if (jQuery('#painel-SAS-len').html()) { var notes_sas = notes_sas + ' Porta: ' + jQuery('#painel-SAS-len').text() }
		jQuery('#notes_sas').val(notes_sas);
	} else if (qual == 'tbs') {
		var notes_tbs = '[ TBS / Cadastro ] : \n'
		if (jQuery('#painel-TBS-armario').html()) { var notes_tbs = notes_tbs + ' Armário:' + jQuery('#painel-TBS-armario').text() + ' \n' }
		if (jQuery('#painel-TBS-porta').html()) { var notes_tbs = notes_tbs + 'Porta: ' + jQuery('#painel-TBS-porta').text() + ' \n' }
		if (jQuery('#painel-TBS-secundario').html()) { var notes_tbs = notes_tbs + 'Secundário TBS : ' + jQuery('#painel-TBS-secundario').text() + ' \n' }
		if (jQuery('#painel-TBS-secundarioSagre').html()) { var notes_tbs = notes_tbs + 'Secundário Sagre:' + jQuery('#painel-TBS-secundarioSagre').text() + ' \n' }
		if (jQuery('#painel-TBS-caixa').html()) { var notes_tbs = notes_tbs + 'Caixa:' + jQuery('#painel-TBS-caixa').text() + ' \n' }
		if (jQuery('#painel-TBS-voz').html()) { var notes_tbs = notes_tbs + 'Voz:' + jQuery('#painel-TBS-voz').text() + ' \n' }
		if (jQuery('#painel-TBS-dados').html()) { var notes_tbs = notes_tbs + 'Dados:' + jQuery('#painel-TBS-dados').text() + ' \n' }
		if (jQuery('#painel-TBS-rin').html()) { var notes_tbs = notes_tbs + 'RIN:' + jQuery('#painel-TBS-rin').text() + ' \n' }
		jQuery('#notes_tbs').val(notes_tbs);
	} else if (qual == 'parametros') {
		var notes_banda = '[ Banda Larga ] : \n'
		if (jQuery('#diagnostico_parametrosc').html()) { var notes_banda = notes_banda + '' + jQuery('#diagnostico_parametrosc').text() + ' \n' }
		jQuery('#notes_banda').val(notes_banda);
	}
}
function setKeeperKey(kstatus) {
	if (kstatus == 'ok') {
		document.getElementById('keeper_key').style.color = '#0d0';
		document.getElementById('keeper_key').style.background = '#eee';
		document.getElementById('keeper_key').style.border = 'solid 1px #0d0';
	} else if (kstatus == 'nok') {
		document.getElementById('keeper_key').style.color = '#f00';
		document.getElementById('keeper_key').style.background = '';
		document.getElementById('keeper_key').style.border = 'solid 1px #f00';
	} else { }

}
//var spiderX = localStorage[btoa('token')];
//var spiderY = localStorage[btoa('ring')];

function g_neration(a, b) {
	localStorage[btoa('token')] = btoa(a);
	localStorage[btoa('ring')] = btoa(b);

	//console.log(localStorage[btoa('token')]);
	//console.log(localStorage[btoa('ring')]);
}
//atob(localStorage[btoa('ring')])
// adicionar eventos dos campos

//Checagem inicial dos storages
if (!localStorage['emAtendimento']) { localStorage['emAtendimento'] = '' }
if (!localStorage['historico_checknote']) { localStorage['historico_checknote'] = JSON.stringify({ "db-version": "0.001", "index": 0, "registros": [] }) }

onload = function () {
	localStorage['tarefasAgendadas'] = JSON.stringify(
		[
			{
				"titulo": "pausa8",
				"id": xDate('id'),
				"horario": "2017-05-16 12:20",
				"acao": "notify",
				"msg": "xxxxxx",
				"img": "xxxx.png"
			},
			{
				"titulo": "pausa1",
				"id": xDate('id'),
				"horario": "2017-05-16 13:55",
				"acao": "notify",
				"msg": "xxxxxx",
				"img": "xxxx.png"

			},
			{
				"titulo": "pausa1",
				"id": xDate('id'),
				"horario": "2017-05-16 15:40",
				"acao": "notify",
				"msg": "xxxxxx",
				"img": "xxxx.png"

			}
		]
	)
	var tarefasAgendadas = setInterval(function () {

		var executarAgora = xDate(8)
		var executarTarefasAgendadas = JSON.parse(localStorage['tarefasAgendadas'])
		for (ctTaGn = 0; ctTaGn < executarTarefasAgendadas.length; ctTaGn++) {
			if (executarTarefasAgendadas[ctTaGn].horario == executarAgora) {
				notify('Pausa', 'Pausa em 5 minutos', 'pausa-circular.jpg')

			}

		}
		//if(xDate(8))
	}, 60000);


	gerarSelectDataHist();
	if (localStorage['skillPadrao']) { } else { localStorage['skillPadrao'] = '' }
	if (localStorage['config_nome']) { } else { localStorage['config_nome'] = '' }
	if (localStorage['config_matricula']) { } else { localStorage['config_matricula'] = '' }

	if (localStorage[btoa('token')] && localStorage[btoa('ring')] && localStorage['skillPadrao'] != '' && localStorage['config_nome'] != '' && localStorage['config_matricula'] != '') {
		setKeeperKey('ok');
		jQuery('#keeper_user').val(atob(localStorage[btoa('token')]));
		//jQuery('#keeper_pass').val('RGV1cyB0YSB2ZW5kbyE=');
		jQuery('#keeper_pass').val('');
		jQuery('#keeper_name').val(localStorage['config_nome']);

		var skillBox = document.getElementById('skillPadrao').options;
		for (skb = 0; skb < skillBox.length; skb++) {
			if (skillBox[skb].value == localStorage['skillPadrao']) {
				skillBox[skb].selected = true;
			}
		}

	} else {
		setKeeperKey('nok');
		jQuery('#modal-keeper').modal('show');

		//no futuro, caso preciso, substituir pela nova versão objeto da diagnosticoPn
		var namerequest = jQuery.ajax({
			url: "http://pnadmin.gvt.com.br/pn/index.jsp",
			timeout: 20000,
			dataType: "text",
			type: "get"
		});
		namerequest.done(function () {
			var tempDivPn = jQuery('<div>').html(namerequest.responseText);
			jQuery(tempDivPn).find("script").remove();
			jQuery(tempDivPn).find("link").remove();
			jQuery(tempDivPn).find("style").remove();
			var nomeEmatricula = jQuery(tempDivPn).find('th')[2].innerText;
			if (nomeEmatricula.indexOf('-') > -1) {
				jQuery('#keeper_name').val(nomeEmatricula.split('-')[1].trim());
				jQuery('#keeper_user').val(nomeEmatricula.split('-')[0].trim());
			}
		});

	}





	getSwitches();
	keeper_sas('request');
	keeper_gestor('request')
	keeper_wise('request');
	keeper_ttv('request');
	keeper_acs('request');
	keeper_eta('request');
	keeper_efika('request');


	//-----------------------------
	//logarSistemas();
	if (localStorage['config_matricula'])
		jQuery.ajax({
			"url": "http://efika/vsm/legado/vsm-base/api/userlog/",
			"method": "post",
			"data": {
				"usuario": localStorage['config_matricula'],
				"nome": localStorage['config_nome'],
				"setor": localStorage['skillPadrao'],
				"acao": "refresh",
				"msg": chrome.runtime.getManifest().version

			}
		}).done(function (data) {
			//console.log(data)
		})
}
//f
function checknoteInit() {
	if (localStorage['emAtendimento']) {
		if ((localStorage['emAtendimento'].substr(0, 1) == "{")) {
			var atendimento = JSON.parse(localStorage['emAtendimento'])
			novaChecknote({ "recarregar": atendimento });
		}
	}
}
checknoteInit();

function registrarEventosModo2() {
	//modo alternativo de registrar os eventos
	var inputs = document.getElementsByClassName('input'), i = 0;
	do {
		switch (inputs[i].type) {
			case 'button':
				inputs[i].onclick = function () {
					toastr.info(this.value)
					//alert(this.value+'\\'+this.type)
				}
				break;
			case 'checkbox':
				inputs[i].onclick = function () {
					toastr.info(this.checked + ' - ' + this.type + ' - ' + this.id)
					//alert(this.value+' - '+this.type+' - '+this.id)
				}
				break;
			case 'text':
				inputs[i].onfocus = function () {
					this.style.backgroundColor = '#e5e5e5'
				}
				inputs[i].onblur = function () {
					this.style.backgroundColor = ''
				}
				inputs[i].onchange = function () {
					//alert(this.value+' - '+this.type)
					toastr.info(this.value)
				}
				break;
		}
	}
	while (inputs[++i])
}

// Saves options to chrome.storage.sync.
function save_options() {
	var color = document.getElementById('color').value;
	var instancia = document.getElementById('instancia').value;
	var likesColor = document.getElementById('like').checked;
	chrome.storage.sync.set({
		favoriteColor: color,
		likesColor: likesColor,
		instancia: instancia
	}, function () {
		// Update status to let user know options were saved.
		var status = document.getElementById('status').innerHTML = 'Options saved.';

		setTimeout(function () {
			document.getElementById('status').innerHTML = '';
		}, 750);
	});
}


var passe = '';
jQuery('body')[0].addEventListener('keydown', function (e) {
	passe = passe + e.key;
	if (passe == "imsdb") { jQuery('#painel_imsdb').show(); jQuery('#painel_imsdb_log').show(); passe = ''; }
	if (passe == "mostrapainel") { jQuery('.panel-body').collapse('show'); passe = ''; }
	if (passe == "escondepainel") { jQuery('.panel-body').collapse('hide'); passe = ''; }

	if (e.metaKey || e.ctrlKey) { passe = ""; }
}, false);

function painelToggle(el) {
	//jQuery('.panel-body').collapse('toggle'); //toggle,show,shide
	//panel é o painel todo
	//body é o panel body
	//ev.preventDefault();

	var $this = jQuery(el),
		$panel = $this.closest('.panel'),
		$body = $panel.children('.panel-body, .table'),
		do_collapse = !$panel.hasClass('panel-collapse');
	console.log($body);
	if ($panel.is('[data-collapsed="1"]')) {
		$panel.attr('data-collapsed', 0);
		$body.hide();
		do_collapse = false;
	}

	if (do_collapse) {
		$body.slideUp('normal');
		$panel.addClass('panel-collapse');
	}
	else {
		$body.slideDown('normal');
		$panel.removeClass('panel-collapse');
	}
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function naoexecutar0001() {
	function restore_options() {
		// Use default value color = 'red' and likesColor = true.
		chrome.storage.sync.get({
			favoriteColor: 'red',
			likesColor: true,
			instancia: '',
			tecnico: '',
			tmatricula: '',
			cliente: ''
		}, function (items) {
			//document.getElementById('color').value = items.favoriteColor;
			//document.getElementById('like').checked = items.likesColor;
			//document.getElementById('instancia').value = items.instancia;
			//jQuery('#tecnico').val(items.tecnico);
			//jQuery('#tmatricula').val(items.tmatricula);
			//jQuery('#cliente').val(items.cliente);
		});
	}
	document.addEventListener('DOMContentLoaded', restore_options);
	document.getElementById('save').addEventListener('click', save_options);
}
function getFirstImsTr() {
	var firstTr = document.getElementsByClassName('imsdbtr')[0];
	return firstTr.getAttribute("data-instancia")

}
function binarTBS() {
	var payAttent = "";
	var compareDDD = jQuery('#infoBinarDDD').val() ? jQuery('#infoBinarDDD').val() : false
	if (jQuery('#infoBinar').val() != null) {
		jQuery('#infoBinar').val(jQuery('#infoBinar').val().trim())
		if (jQuery('#infoBinar').val().length > 4) {
			if (jQuery('#infoBinar').val().length > 8) {
				jQuery('#infoBinar').val(jQuery('#infoBinar').val().substr(0, jQuery('#infoBinar').val().length - 1))

			}
			jQuery("[name='binarViaTBS']").button('loading')

			var requestBinadaTBS = jQuery.ajax({
				url: 'http://10.40.195.81/efika/vsm/api/tbs/binada.php',
				type: 'get',
				data: 'node=' + jQuery('#infoBinar').val()
			})
			requestBinadaTBS.done(function (e) {
				jQuery('#modalBinadas-c2').html(''
					+ '<table id="modalBinadas-c2t" class="table table-condensed table-bordered table-hover table-striped"> '
					+ '<thead> <tr> <th>ARD</th> <th>Porta</th> <th>Instancia</th> <th>Circuito</th> </tr> </thead> '
					+ '</table>'
				);

				jQuery.each(e, function (k, v) {
					if (compareDDD) {
						if (v.CIRCUIT.substr(0, 2) != compareDDD) { var payAttent = "danger" } else { var payAttent = "" }
					}

					var binadaSplit = v.CIRCUIT.split('-');
					jQuery('#modalBinadas-c2t').append('<tr class=' + payAttent + '><td>' + v.ARD + '</td><td>' + v.NODE + '</td><td>' + binadaSplit[0] + binadaSplit[1] + binadaSplit[2] + '</td><td>' + binadaSplit[3] + '</td></tr>')
				});
			})
			requestBinadaTBS.always(function (e) {
				setTimeout(function () {
					jQuery("[name='binarViaTBS']").button('reset')
				}, 700)

			})
		} else {
			toastr.warning('O shelf precisa ter mais de 5 caracteres')
		}

	}
}
function binarVizinho() {

	if (jQuery('#painel-TBS-porta').html()) {
		//toastr.info(jQuery('#painel-TBS-porta').text())
		var minhaPorta = jQuery('#painel-TBS-porta').text();
		var minhaPorta = minhaPorta.replace(/\(Combo\)/gi, '');
		var minhaPorta = minhaPorta.replace(' ', '');
	} else {
		var minhaPorta = '';
	}


	jQuery('#modalBinadas-c').html(''
		+ '<style>'
		+ '.double-input .form-control {'
		+ '	width: 50%;'
		+ '	border-right-width: 0px;'
		+ '}'
		+ '.double-input .form-control:focus {'
		+ '	border-right-width: 1px;'
		+ '}'
		+ '</style>'

		+ '<table width="100%">'
		+ '<tr>'
		+ '<td width="50%" valign="top" style="padding-right:5px;">'
		+ '<div style="width:100%;">'
		//+'Shelf ou Porta a binar:<br>'

		//+'<button name="binarViaTBS" type="button">Binar</button>' 
		+ '<div class="input-group double-input"> '
		+ '<span class="input-group-addon"><i class="entypo-shuffle"></i></span> '
		+ '<input id="infoBinar" placeholder="Shelf" class="form-control" type="text"> '
		+ '<input id="infoBinarDDD" placeholder="DDD" class="form-control" type="text"> '
		+ '<span class="input-group-btn"> '
		+ '	<button name="binarViaTBS" class="btn btn-primary" type="button">Binar</button> '
		+ '</span> '
		+ '</div>'
		+ '</div><br>'
		+ '</td>'
		+ '<td id="modalBinadas-c2" width="50%" valign="top" style="padding-left:5px">'
		+ '</td>'
		+ '</tr>'
		+ '</table>'

	);
	jQuery('#infoBinar').val(minhaPorta);
	jQuery('#infoBinarDDD').val(jQuery('#instancia').val().substr(0, 2));
	jQuery('#modalBinadas').modal('show');
	binarTBS();
}
function launch_form(a) {
	var instancia = jQuery('#instancia').val();
	if (a == 'manobra') {
		jQuery('#launch_newform').html(''
			+ '<form name="launch_manobra" id="manobra" target="_blank" method="post" action="http://appsagre.gvt.net.br/Manobraunica/main">'
			+ 'Manobra Unica<br>'
			+ '	<input type="text" name="ba" value=""><br>'
			+ '	<input type="text" name="acao" value="TEL"><br>'
			+ '	<input type="text" name="telefone" value="' + instancia + '"><br>'
			+ '	<input type="text" name="x" value="30"><br>'
			+ '	<input type="text" name="y" value="10"><br>'
			+ '	<input type="text" name="opcaotelefone" value=""><br>'
			+ '	<input type="text" name="opcaoBa" value=""><br>'
			+ '	<input type="submit" value="ok">'
			+ '</form>'
		);
		document.launch_manobra.submit();
		jQuery('#launch_newform').html('');
	}
	else if (a == 'sas') {
		jQuery('#launch_newform').html(''
			+ '<form name="launch_sas" target="_blank" method="post" action="http://gvtapp/sas/configurar">'
			+ 'SAS<br>'
			+ '	<input type="text" name="cmd" value="consultar"><br>'
			+ '	<input type="text" name="itemCodeId" value=""><br>'
			+ '	<input type="text" name="rn2_" value=""><br>'
			+ '	<input type="text" name="telefoneDMS" value="' + instancia + '"><br>'
			+ '	<input type="text" name="emuladorTelNet" value=""><br>'
			+ '	<input type="text" name="searchType" value="Consultar"><br>'
			+ '	<input type="submit" value="ok">'
			+ '</form>'
		);
		document.launch_sas.submit();
		jQuery('#launch_newform').html('');
	}
	else if (a == 'wise') {
		jQuery('#launch_newform').html(''
			+ '<form name="launch_wise" target="_blank" method="post" action="http://wisetool.gvt.net.br/wisetool/SmartTools.action" enctype="application/x-www-form-urlencoded">'
			+ 'Wise<br>'
			+ '	<input type="text" name="acao" value="consultar"><br>'
			+ '	<input type="text" name="tipoPesquisa" value="instancia"><br>'
			+ '	<input type="text" name="searchValue" value="' + instancia + '"><br>'
			+ '	<input type="submit" value="ok">'
			+ '</form>'
		);
		document.launch_wise.submit();
		jQuery('#launch_newform').html('');
	}
}
function imsdb_automation() {
	if (document.getElementById('imsdb-autocheck').checked == true) {
		setTimeout(function () {
			var imsdbtr = document.getElementsByClassName('imsdbtr')[0]
			var imsdbtrCtr = document.getElementsByClassName('imsdbtr')


			if (imsdbtrCtr.length < 1) {
				if (document.getElementById('imsdb-recursivo').checked == true) {

					imsdb_ajuste('revisar-' + localstorage["imsdb-recursivo"])
				}
			}

			//

			var trElementoClicado = imsdbtr;
			localStorage["imsdb-dataid"] = trElementoClicado.getAttribute("data-id")
			localStorage["imsdb-datashelf"] = trElementoClicado.getAttribute("data-shelf")

			jQuery('#diagnostico_SASc').html('');
			jQuery('#diagnostico_TBSc').html('');
			jQuery('#diagnosticoWisec').html('');


			//alert(trElementoClicado.getAttribute("data-instancia"))
			diagnosticoTbs({
				'modo': 'request',
				'instancia': trElementoClicado.getAttribute("data-instancia"),
				'bloquear': '#diagnostico_TBS',
				'destino': '#diagnostico_TBSc',
				'filtro': filtroTBS_IMS
			});
			diagnosticoSas({
				'modo': 'request',
				'instancia': trElementoClicado.getAttribute("data-instancia").slice(0, 10),
				'bloquear': '#diagnostico_SAS',
				'destino': '#diagnostico_SASc',
				'filtro': filtroSAS_IMS
			});
			diagnosticoWise('request', 'consultar', trElementoClicado.getAttribute("data-instancia"))
		}, 1000)
	} else { alert('Marque a opção Aut caso realmente queira iniciar a automação') }
}
function imsdbAjaxUpdate(idin, infoin) {
	//alert(idin+' / '+infoin)
	//return false;
	jQuery.ajax({
		url: 'http://efika/vsm/legado/vsmonitor-imsdbupdate.php',
		type: 'POST',
		data: { "upw": "PWD248V5UPDATE", "id": idin, "info": infoin },
		success: function (retorno) {
			if (retorno != null && retorno != undefined && retorno != '') {
				//jQuery('#xxx').html('ok');
				console.log('retorno imsdbupdate:')

				if (retorno.status == 0) {
					toastr.error(retorno.msg + ' - ' + retorno.info)
				}
			} else {
				//jQuery('#xxx').html('erro');
				console.log(retorno)
				toastr.error('Erro ao gravar')
			}
		}
	});
}

function imsRemoveTr(msg) {
	var b = jQuery('.imsdbtr')[0]

	jQuery('#painel_imsdb_logcontent').append(xDate(8) + ' | ' + b.dataset.instancia + ', ' + b.dataset.shelf + ', ' + msg + '<br>')
	jQuery('.imsdbtr')[0].remove()
}

function imsupdate() {

	var imsdbId = localStorage["imsdb-dataid"];
	var imsdbShelf = localStorage["imsdb-datashelf"].replace(/-|_/g, "");
	if (localStorage['imsdb-cmd'] == 'pular') {
		//$.ajax / revisar
		localStorage['imsdb-cmd'] = ''
		imsRemoveTr('pulou')
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
	if (jQuery('#painel-TBS-porta').html() && jQuery('#sasPular').html()) {
		imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar')
		toastr.warning('Revisar')
		imsRemoveTr('pulou SAS')
		imsdb_automation()
	} else if (jQuery('#tbsPular').html() && jQuery('#painel-SAS-idway').html()) {
		imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar')
		toastr.warning('Revisar')
		imsRemoveTr('pulou TBS')
		imsdb_automation()
	} else if (jQuery('#tbsPular').html() && jQuery('#sasPular').html()) {
		imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar')
		toastr.warning('Revisar')
		imsRemoveTr('pulou SAS e TBS')
		imsdb_automation()
	} else { }


	if (jQuery('#painel-TBS-porta').html() && jQuery('#painel-SAS-idway').html()) {
		if (jQuery('#painel-SAS-tecnologia').text().trim() != 'IMS/SIP' && jQuery('#painel-SAS-tecnologia').text().trim() != 'TDM/H248') {
			if (jQuery('#painel-TBS-porta').text().indexOf('IMS') > -1) { var string2split = 'IMS' }
			else if (jQuery('#painel-TBS-porta').text().indexOf('SIP') > -1) { var string2split = 'SIP' }
			else { string2split = '' }
			if (string2split != '') {
				var tbsShelf = jQuery('#painel-TBS-porta').text().trim().split(string2split)[0].replace(/-|_/g, "");
				var tbsPorta = jQuery('#painel-TBS-porta').text().trim().split(string2split)[1].replace(/-|_/g, "");
			}

		} else {
			var tbsShelf = ''
			var tbsPorta = ''
		}
		if (jQuery('#painel-SAS-edesc').html()) {
			var sasEdesc = jQuery('#painel-SAS-edesc').text().trim().replace(/-|_/g, "");
		}
		//problema com a linha abaixo:
		//Erro: 4430404018, ARD O1A62, shelf 6-46626-14

		if (tbsPorta.indexOf('(') > -1) { var tbsPorta = tbsPorta.split('(')[0] }
		var sasPorta = jQuery('#painel-SAS-porta').text().trim()
		var sasTecnologia = jQuery('#painel-SAS-tecnologia').text().trim()
		var sasIdway = jQuery('#painel-SAS-idway').text().trim()
		if (sasIdway.indexOf(':') > -1) { var sasIdway = sasIdway.split(':')[0] }

		if (sasTecnologia == "TDM/H248") {
			imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar_tdm')
			toastr.warning('Revisar TDM')
			imsRemoveTr('revisar_tdm')
			imsdb_automation()
		}
		else if (sasTecnologia == "IMS/H248") {
			toastr.info(''
				+ ' <br> Tecnologia :' + sasTecnologia
				+ ' <hr> SAS Edesc :' + sasEdesc
				+ ' <br> Dat-shelf :' + imsdbShelf
			);

			if (sasEdesc.indexOf(imsdbShelf) > -1) {
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, sasIdway)
				toastr.success('H248-IP :' + sasIdway)
				imsRemoveTr('248 ok')
				imsdb_automation()
			} else {
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar_248')
				toastr.warning('Revisar H248')
				imsRemoveTr('248 revisar')
				imsdb_automation()
			}
		}
		else if (sasTecnologia == "IMS/V5.2") {
			var idfinal = document.getElementById('painel-SAS-idway').innerText.length
			var idinicio = (document.getElementById('painel-SAS-idway').innerText.length - 3)
			var idslice = document.getElementById('painel-SAS-idway').innerText.slice(idinicio, idfinal)
			//tbsShelf
			var shfinal = document.getElementById('painel-SAS-idway').innerText.length
			var shinicio = (document.getElementById('painel-SAS-idway').innerText.length - 3)
			var shslice = document.getElementById('painel-SAS-idway').innerText.slice(shinicio, shfinal)
			//
			var dbfinal = imsdbShelf.length
			var dbinicio = (imsdbShelf.length - 3)
			var dbslice = imsdbShelf.slice(dbinicio, dbfinal)

			toastr.info(''
				+ ' <br> Tecnologia :' + sasTecnologia
				+ ' <hr> TBS Shelf: ' + tbsShelf
				+ ' <br> Dat-shelf :' + imsdbShelf
				+ ' <br> Porta TBS: ' + tbsPorta
				+ ' <br> Porta SAS: ' + sasPorta

			);
			if (tbsPorta.trim() == sasPorta.trim()) {
				//if(imsdbShelf.indexOf(tbsShelf.trim())>-1){
				//alert('['+idslice+'] - ['+dbslice+']')
				if (idslice == dbslice) {//4130768527
					imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, sasIdway)
					toastr.success('V5IID :' + sasIdway)
					imsRemoveTr('v5 ok')
					imsdb_automation()
				} else if (2 == 5) {

				} else {
					imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar_v5_A')
					toastr.warning('Revisar V5IID [A]:' + sasIdway)
					imsRemoveTr('v5 revisar A')
					imsdb_automation()
				}
			} else {
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar_v5_B')
				toastr.warning('Revisar V5IID [B]')
				imsRemoveTr('v5 revisar B')
				imsdb_automation()
			}
		}
		else if (sasTecnologia == "IMS/SIP") {
			if (jQuery('#painel-Wise-tecnologia').text() == "SIP") {
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar_sip')
				toastr.warning('Revisar TRUE SIP')
				if (document.getElementById('imsdb-recursivo').checked == false) { imsRemoveTr('true sip') }
			} else {
				imsdbAjaxUpdate(jQuery('.imsdbtr')[0].dataset.id, 'revisar_sas')
				toastr.warning('Revisar SAS xSIP')
				if (document.getElementById('imsdb-recursivo').checked == false) { imsRemoveTr('revisar_sas [falhou]') }
			}




			imsdb_automation()
		} else {
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
	} else { }
}
function erroSenhaRede(a) {
	toastr.error(a);
}

//############################################################################
//Keeper Login

function keeper_sas_login(opt) {
	var url = "http://gvtapp/sas/login";
	var fly = getSpider();
	var request = jQuery.ajax({
		url: url,
		dataType: "text",
		type: "post",
		data: {
			"matricula": bity(fly.a),
			"senha": bity(fly.b)
		}
	});
	request.done(function () {
		if (request.responseText.indexOf("Login/senha inv") > -1) {
			erroSenhaRede("Erro na Senha [SAS]");
			document.getElementById('diagnostico_SAS').style.background = '#ffffe6';
			jQuery('#diagnostico_SASc').html('<br><br><span class="vermelho"><center>Erro ao tentar logar</center></span><br><center>Confira sua senha e tente novamente.</center><br>')

		} else {
			keeper_sas('request');
			if (opt.modo == "retry") { opt.callback(opt.databack) }

		}
	});
	request.fail(function (xhr, status, errorThrown) { console.log(xhr + ' - ' + status + ' - ' + errorThrown) });
	request.always(function () { });
}

function keeper_ttv_login() {
	//var fly=getSpider();
	//bity(fly.a)
	var fly = getSpider();
	var url = "http://sv2kpwfm3/agent/signin.do";
	if (ggg) { var ggg = ggg.toLowerCase(); }
	var request = jQuery.ajax({
		url: url,
		dataType: "text",
		type: "post",
		data: {
			"realmId": "customer1",
			"userName": bity(fly.a).toLowerCase(),
			"password": bity(fly.b),
			"logonSubmit": "Login"
		}
	});
	request.done(function () { console.log('Sucesso'); keeper_ttv('request'); });
	request.fail(function (xhr, status, errorThrown) { console.log(xhr + ' - ' + status + ' - ' + errorThrown) });
	request.always(function () { });
}

function keeper_eta_login() {
	var url = "https://login.etadirect.com/";
	var fly = getSpider();
	var request = jQuery.ajax({
		url: url,
		dataType: "text",
		type: "post",
		data: {
			"username": bity(fly.a),
			"password": bity(fly.b),
			"organization": "gvt"
		}
	});
	request.done(function () { console.log('Sucesso') });
	request.fail(function (xhr, status, errorThrown) { console.log(xhr + ' - ' + status + ' - ' + errorThrown) });
	request.always(function () { keeper_eta('request') });
}


//
function keeper_wise_login_antigoWorkaround() {

	var ggg = atob(spiderX);
	var ppp = atob(spiderY);
	blockUI(jQuery('#keeper_wise'));
	var formt = jQuery('<form target="toolFrame" method="post" action="http://wisetool.gvt.net.br/wisetool/login" enctype="application/x-www-form-urlencoded">'
		+ '<input type="text" name="matricula" value="' + ggg + '" /></br>'
		+ '<input type="password" name="senha" value="' + ppp + '" /></br>'
		+ '<input type="submit" value="ok" />'
		+ '</form>');
	formt.submit();
	var formt = '';
}
function keeper_wise_login(opt) {
	blockUI(jQuery('#keeper_wise'));
	var fly = getSpider();

	var request = jQuery.ajax({
		url: "http://wisetool.gvt.net.br/wisetool/login",
		contentType: "application/x-www-form-urlencoded",
		timeout: 5000,
		dataType: "text",
		type: "post",
		data: {
			"matricula": bity(fly.a),
			"senha": bity(fly.b)
		}
	});
	request.done(function () {/*console.log('wiseExperimental : Sucesso');*/ });
	request.fail(function (xhr, status, errorThrown) {/*console.log('wiseExperimental : Falha');*/ });
	request.always(function () {
		if (request.responseText.indexOf("Login/senha inv") > -1) {
			erroSenhaRede("Erro na Senha [Wise]");
			document.getElementById('diagnostico_Wise').style.background = '#ffffe6';
			jQuery('#diagnosticoWisec').html('<br><br><span class="vermelho"><center>Erro ao tentar logar</center></span><br><center>Confira sua senha e tente novamente.</center><br>')
		} else {
			//keeper_wise();
			filtrokeeper_wise(request.responseText)
			if (opt.modo == "retry") { opt.callback(opt.databack) }

		}
		unblockUI(jQuery('#keeper_wise'));
	});
}
//##############################################################

function gestor_preRequest(modo, callback, opt) {
	var request = jQuery.ajax({
		url: "http://gestordebloqueios.gvt.net.br/spmweb/pages/geral.xhtml",
		timeout: 5000,
		dataType: "text",
		type: "get",
	});
	request.done(function () {
		console.log('Gestor : ok1');
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(request.responseText);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		gestorViewState = jQuery(tempDiv).find("input[name='javax.faces.ViewState']")[0]
		if (modo == 'login') {
			callback('response', gestorViewState.value)
		} else if (modo == 'consulta') {
			if (gestorViewState.value) {
				opt.viewState = gestorViewState.value
				callback(opt);
			} else { console.error('Erro ao obter view') }

		}
	});
	request.fail(function (xhr, status, errorThrown) { console.log('Gestor : Falha, ' + status + ' - ' + errorThrown); });
	request.always(function () { });
}


function keeper_gestor_login(modo, viewState) {
	blockUI(jQuery('#keeper_gestor'));
	var fly = getSpider();
	if (modo == 'request') {
		gestor_preRequest('login', keeper_gestor_login)
	} else if (modo == 'response') {
		var request = jQuery.ajax({
			url: "http://gestordebloqueios.gvt.net.br/spmweb/pages/geral.xhtml",
			contentType: "application/x-www-form-urlencoded",
			timeout: 5000,
			dataType: "text",
			type: "post",
			data: {
				"j_idt29": "j_idt29",
				"javax.faces.ViewState": viewState,
				"j_idt29:login": bity(fly.a),
				"j_idt29:senha": bity(fly.b),
				"j_idt29:botao_entrar": ""
			}
		});
		request.done(function () { console.log('Gestor : Sucesso'); });
		request.fail(function (xhr, status, errorThrown) { console.log('Gestor : Falha'); });
		request.always(function () {
			unblockUI(jQuery('#keeper_gestor'));
			filtrokeeper_gestor(request)
			keeper_gestor();
		});
	} else (console.error('Use o modo [request]'))

}

function keeper_acs_login(modo, viewState) {
	/*
	Vai servir para logar na ACS, porem como ela nao usa senha de rede e o storage particular não está pronto, vai ficar desabilitado por enquanto
	*/
	toastr.warning('Login automatico da ACS desabilitado');
	/*
	blockUI(jQuery('#keeper_gestor'));
	if(modo=='request'){
		gestor_preRequest('login',keeper_gestor_login)
	}else if(modo=='response'){
		var ggg=atob(spiderX);
		var ppp=atob(spiderY);
		var request = jQuery.ajax({
			url:        "http://gestordebloqueios.gvt.net.br/spmweb/pages/geral.xhtml",
			contentType: "application/x-www-form-urlencoded",
			timeout: 	5000,
			dataType:   "text",
			type:       "post",
			data :		{
				"j_idt29":"j_idt29",
				"javax.faces.ViewState":viewState,
				"j_idt29:login":ggg,
				"j_idt29:senha":ppp,
				"j_idt29:botao_entrar":""
			}
		});          
		request.done(function(){console.log('Gestor : Sucesso');	});
		request.fail(function(xhr, status, errorThrown){console.log('Gestor : Falha');});
		request.always(function(){
			unblockUI(jQuery('#keeper_gestor'));
			filtrokeeper_gestor(request)
			keeper_gestor();
		});
	}else(console.error('Use o modo [request]'))
	*/

}
//############################################################################
function getIpTDM(a) {
	if (vSwitches[a]) {
		if (vSwitches[a].tecnologia == "TDM") {
			return vSwitches[a].ip
		}
	}
}
function centralTecnologia(a) {
	if (vSwitches[a]) {
		if (vSwitches[a].tecnologia == "TDM") { return '<img name="showTDM" data-central="' + a + '" width="12px" height="12px" src="images/nortel.png" title="Ferramenta de comandos Nortel">' }
		else if (vSwitches[a].tecnologia == "IMS") { return '<img name="showIMS" data-central="' + a + '" width="12px" height="12px" src="images/huawei.png" title="Ferramenta de comandos IMS">' }
		else if (vSwitches[a].tecnologia == "IMSoff") { return '<img name="showIMS" data-central="' + a + '" width="12px" height="12px" src="images/huawei-disabled.png" title="Central IMS em desuso">' }
		else { return '?' }
	} else {
		return '<img name="showIMS" data-central="' + a + '" width="12px" height="12px" src="images/alert.png" alt="Central não encontrada no banco de dados da extensão!" title="Central não encontrada no banco de dados da extensão!">'
	}
}
function getSwitches() {
	jQuery.ajax({
		url: "../db/switches.json",
		dataType: "text",
		success: function (data) {
			vSwitches = JSON.parse(data);
		}
	});
}

function imsdb_ajuste(modo) {
	if (modo == 'revisar-cad') { var url = 'http://efika/vsm/legado/vsmonitor-imsdb.php?modo=revisarcad'; }
	else if (modo == 'revisar-248') { var url = 'http://efika/vsm/legado/vsmonitor-imsdb.php?modo=revisar248'; }
	else if (modo == 'revisar-v5') { var url = 'http://efika/vsm/legado/vsmonitor-imsdb.php?modo=revisarv5'; }
	else if (modo == 'revisar-sip') { var url = 'http://efika/vsm/legado/vsmonitor-imsdb.php?modo=revisarsip'; }
	else if (modo == 'revisar-sas') { var url = 'http://efika/vsm/legado/vsmonitor-imsdb.php?modo=revisarsas'; }
	else if (modo == 'revisar-pend') { var url = 'http://efika/vsm/legado/vsmonitor-imsdb.php?modo=revisarpend'; }
	else { var url = 'http://efika/vsm/legado/vsmonitor-imsdb.php' }
	jQuery.getJSON(url, function (data) {
		var items = [];
		jQuery.each(data, function (key, val) {
			//"<li id='" + key + "'>" + val + "</li>"
			//2516;8131365765 ;CRUA341-;2017-01-23 13:22:41
			items.push(""
				+ '<tr role="row" class="imsdbtr" id="imsdb' + val.split(';')[0] + '"  data-id="' + val.split(';')[0] + '" data-instancia="' + val.split(';')[1] + '" data-shelf="' + val.split(';')[2] + '" > '
				+ '	<td>' + val.split(';')[0] + '</td> '
				+ '	<td>' + val.split(';')[4].slice(0, 10) + '</td> '
				+ '	<td>' + val.split(';')[1] + '</td> '
				+ '	<td>' + val.split(';')[2] + '</td> '
				+ '	<td>' + val.split(';')[3] + '</td> '
				+ '	<td> <a href="#">    <i data-id="1" name="imsdb-comparar" class="glyphicon glyphicon-new-window"></i>   </a></td> '
				+ '</tr> '
			);


		});
		jQuery('#table-imsdb').html('');
		jQuery('#table-imsdb').html(''
			+ '<thead> '
			+ '<tr role="row">'
			+ '	<th class="sorting" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Student Name: activate to sort column ascending" style="">'
			+ '		ID'
			+ '	</th>'
			+ '	<th class="sorting" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Student Name: activate to sort column ascending" style="">Last</th>'
			+ '	<th class="sorting" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Student Name: activate to sort column ascending" style="">'
			+ '		Instancia'
			+ '	</th>'
			+ '	<th class="sorting" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Average Grade: activate to sort column ascending" style="">'
			+ '		Shelf'
			+ '	</th>'
			+ '	<th class="sorting" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Average Grade: activate to sort column ascending" style="">'
			+ '		Info'
			+ '	</th>'
			+ '	<th class="sorting" tabindex="0" aria-controls="table-2" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="">'
			+ '		Actions'
			+ '	</th>'
			+ '</tr>'
			+ '</thead> '
		);
		jQuery('#ims-linecounter').html(items.length)
		jQuery("<tbody/>", {
			html: items.join("")
		}).appendTo("#table-imsdb");
	});
}

//########################################################
//Abaixo estarao as novas funcoes A B e C do ETA,
//A = primeira requisição
//B =  add "get_dashboard[id]":"0"
//C = "chart[action]":"getdata",
// 	  "chart[dashboard_id]":"6082",
//	  "chart[id]":"25188",

function eta_dashboard(target) {
	//eta_dashboard_a
	var target = "eta_dashboard"
	if (localStorage['eta_sessid'].indexOf('SID=') > -1) {
		var eta_session = localStorage['eta_sessid'].split('=')[1]
		var eta_tree = localStorage['eta_tree'];
		var eta_time = localStorage['eta_time'];
		var eta_date = localStorage['eta_time'].split(' ')[0]


		blockUI(jQuery('#' + target));
		//blockUI(jQuery('#op_dashboard'));
		//blockUI(jQuery('#at_dashboard'));
		var request = jQuery.ajax({
			url: "https://gvt.etadirect.com/gvt/?cmd=reports&sub=dashboard&output=ajax",
			dataType: "text",
			type: "post",
			data: {
				"get_dashboard[id]": "0",
				"targ_el": "elId2",
				"trees[main][tree_identifier]": "main",
				"trees[main][tree_date]": eta_date,
				"trees[main][tree_version]": eta_tree,
				"trees[main][struct_change_time]": eta_time,
				"trees[main][tree_roots]": "2",
				"trees[main][opened_providers]": "2",
				"screen": "reports_dashboard",
				"SID": eta_session
			}
		});
		request.done(function (eeeta) {
			//grafico=JSON.parse(request.responseText)
			//console.log(JSON.parse(eeeta))
			var eeeta = JSON.parse(eeeta);
			//console.log(eeeta.dashboard.dashboard_id)
			//console.log(eeeta.dashboard.charts_order[0])
			//console.log(eeeta.date)
			//console.log(eeeta.trees[0].tree_version)
			//console.log(eeeta.targ_el)


			if (document.getElementById(target)) {
				if (eeeta.dashboard) {
					eta_dashboard_b(
						target,
						eeeta.dashboard.dashboard_id,
						eeeta.dashboard.charts_order[0],
						eeeta.targ_el
					)


				} else {
					console.error('dashboard não encontrado')
					unblockUI(jQuery('#' + target));
				}
			}
			else { console.error('ETA Dashboard nao encontrou elemento para output') }
		});
		request.fail(function (xhr, status, errorThrown) {
			//console.log(xhr.status)
			unblockUI(jQuery('#' + target));
			unblockUI(jQuery('#op_dashboard'));
			unblockUI(jQuery('#at_dashboard'));
		});
		request.always(function () {
			//unblockUI(jQuery('#'+target));
			//unblockUI(jQuery('#op_dashboard'));
			//unblockUI(jQuery('#at_dashboard'));
		});
	}
}
//########################################################
function eta_dashboard_b(target, dashboard_id, chartid, targ_el) {
	var target = "eta_dashboard"
	if (localStorage['eta_sessid'].indexOf('SID=') > -1) {
		var eta_session = localStorage['eta_sessid'].split('=')[1]
		var eta_tree = localStorage['eta_tree'];
		var eta_time = localStorage['eta_time'];
		var eta_date = localStorage['eta_time'].split(' ')[0]


		blockUI(jQuery('#' + target));
		//blockUI(jQuery('#op_dashboard'));
		//blockUI(jQuery('#at_dashboard'));
		var request = jQuery.ajax({
			url: "https://gvt.etadirect.com/gvt/?cmd=reports&sub=dashboard&output=ajax",
			dataType: "text",
			type: "post",
			data: {
				"chart[action]": "getdata",
				"chart[dashboard_id]": dashboard_id,
				"chart[id]": chartid,
				"targ_el": targ_el,
				"trees[main][tree_identifier]": "main",
				"trees[main][tree_date]": eta_date,
				"trees[main][tree_version]": eta_tree,
				"trees[main][struct_change_time]": eta_time,
				"trees[main][tree_roots]": "2",
				"trees[main][opened_providers]": "2",
				"screen": "reports_dashboard",
				"SID": eta_session
			}
		});
		request.done(function (eeeta) {
			grafico = JSON.parse(request.responseText)
			//console.log(JSON.parse(eeeta))
			if (document.getElementById(target)) {
				//console.log(grafico.msg)
				if (grafico.data && grafico.data.rows) {
					document.getElementById(target).innerHTML = '<table width="100%">'
						+ '<tr><td colspan="2" style="border-bottom:solid 1px #f5f5f5;"><strong><span id="call_etadashboard">ETA</span></strong></td></tr>'
						+ '<tr><td>' + grafico.data.rows[0].c[0].v + ' </td><td> ' + grafico.data.rows[0].c[1].v + '</td></tr>'
						+ '<tr><td>' + grafico.data.rows[1].c[0].v + ' </td><td> ' + grafico.data.rows[1].c[1].v + '</td></tr>'
						//+'<tr><td>'+grafico.data.rows[2].c[0].v+' </td><td> '+grafico.data.rows[2].c[1].v+'</td></tr>' //em risco
						+ '<tr><td>' + grafico.data.rows[3].c[0].v + ' </td><td> ' + grafico.data.rows[3].c[1].v + '</td></tr>'
						+ '<tr><td>' + grafico.data.rows[4].c[0].v + ' </td><td> ' + grafico.data.rows[4].c[1].v + '</td></tr>'
						+ '<tr><td>' + grafico.data.rows[5].c[0].v + ' </td><td> ' + grafico.data.rows[5].c[1].v + '</td></tr>'
						//+'<tr><td>'+grafico.data.rows[6].c[0].v+' </td><td> '+grafico.data.rows[6].c[1].v+'</td></tr>' //nao ordenada
						//+'<tr><td>'+grafico.data.rows[7].c[0].v+' </td><td> '+grafico.data.rows[7].c[1].v+'</td></tr>' //nao concluida
						+ '</table>'
				} else {
					if (grafico.win_title) { } else { grafico.win_title = '...' }
					if (grafico.msg) { } else { grafico.msg = '...' }
					document.getElementById(target).innerHTML = '<span class="vermelho">Zeus/ETA diz: </span>' + grafico.win_title + ' ' + grafico.msg;
				}
			}
			else { console.error('ETA Dashboard nao encontrou elemento para output') }
		});
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha') });
		request.always(function () {
			unblockUI(jQuery('#' + target));
			unblockUI(jQuery('#op_dashboard'));
			unblockUI(jQuery('#at_dashboard'));
		});
	}
}
//########################################################
function salvarChecknote() {


	keepChecknote();
	var storeit = JSON.parse(localStorage['emAtendimento'])
	storeit.fim = xDate(6)
	var storage = JSON.parse(localStorage['historico_checknote'])
	storage.registros.push(storeit)
	localStorage['historico_checknote'] = JSON.stringify(storage)
	limparChecknote()
}
function limparChecknote() {
	localStorage['emAtendimento'] = '';
	localStorage['distanciaTPA'] = '';

	jQuery('.nav-tabs a[href="#dtab-geral"]').tab('show')

	document.getElementById('checknote-main').innerHTML = '';
	document.getElementById('checknoteTitle').innerHTML = '';

	document.getElementById('gpsInfo-cliente').innerHTML = '';
	document.getElementById('gpsInfo-documento').innerHTML = '';
	document.getElementById('wiseInfo-distancia').innerHTML = '';
	document.getElementById('wiseInfo-banda').innerHTML = '';
	document.getElementById('gpsInfo2').innerHTML = '';
	document.getElementById('gpsInfo-atividade').innerHTML = '';
	document.getElementById('gpsInfo-pon').innerHTML = '';
	document.getElementById('gpsInfo-armario').innerHTML = '';

	document.getElementById('tecChecklistStatus').innerHTML = '';
	document.getElementById('cliHeavyUserStatus').innerHTML = '';
	document.getElementById('massivaSasStatus').innerHTML = '';
	document.getElementById('bloqueioGestorStatus').innerHTML = '';
	document.getElementById('diagnostico_TBSc').innerHTML = '';
	document.getElementById('diagnostico_SASc').innerHTML = '';
	document.getElementById('diagnosticoWisec').innerHTML = '';
	document.getElementById('diagnostico_parametrosc').innerHTML = '';
	document.getElementById('diagnostico_PNCXc').innerHTML = '';
	document.getElementById('diagnostico_PNc').innerHTML = '';
	jQuery('#erroRadius').css('display', 'none');
	jQuery('#divisorCX').hide();
	jQuery('#wiseAuth').hide();
	jQuery('#diagnostico_auth').html('');
	jQuery('#divisorAuth').css('display', 'none');

	jQuery('#toolbox-equipamentos').html('');
	jQuery('#provisioning-equipamentos').html('');
	jQuery('#toolbox-rpon').html('');
	jQuery('#toolbox-atividade').html('');
	jQuery('#toolbox-instancia').html('');

	jQuery('#acsCounter').css('display', 'none');
	jQuery('#acsCounter').html(' 0 ');


	jQuery('#binadaPN').html('...');
	jQuery('#binadaSAS').html('...');

	jQuery('#targetSwitch').val('');
	jQuery('#cnl').val('');
	jQuery('#instances').val('');

	jQuery('#nowOn').html('');

	//essa linha sempre por ultimo
	jQuery('#painelzao').hide();


}
function keepChecknote(atributo, id) {
	//console.log('save full')
	var allIn = document.getElementsByClassName('keep')
	var storeit = JSON.parse(localStorage['emAtendimento'])
	for (i = 0; i < allIn.length; i++) {
		//pegar aqui o objeto
		if (allIn[i]) {
			//console.log('Field ID: '+allIn[i].id+' | Data ID: '+allIn[i].dataset.info+' Info: '+allIn[i].value)

			if (allIn[i].type == 'radio') {
				if (allIn[i].checked == true) {
					if (allIn[i].value == 'nao' || allIn[i].value == 'sim') {
						storeit[allIn[i].dataset.info] = allIn[i].value
					}
				}
				//storeit[allIn[i].dataset.info]=allIn[i].value
				//$("form :radio")
				//jQuery('input[name=campo_pda]:checked', '#myForm').val());
				//storeit[allIn[i].dataset.info]=jQuery('input[name=campo_pda]:checked').val();
			}
			else {
				storeit[allIn[i].dataset.info] = allIn[i].value
			}
		}
		//gravar aqui o objeto
		localStorage['emAtendimento'] = JSON.stringify(storeit)

		if (atributo && id) {
			//console.log('save orientado a elemento')
			//console.log('Atributo: '+atributo+' / id: '+id)
			//console.log(document.getElementById(id).type)
		} else {
			//...
		}
	}

}
function novaChecknote(opt) {
	//testes iniciais

	if (!opt) { var opt = '' }
	if ((localStorage['emAtendimento'].substr(0, 1) == "{") && !opt.recarregar) {
		if (confirm('Já existe um atendimento aberto, deseja SALVAR e gerar um NOVO ATENDIMENTO?')) {
			salvarChecknote();
			toastr.info('Atendimento salvo. <hr >Novo atendimento iniciado.')


		} else {
			return false;
		}
	}

	if (opt == '') { var skill = localStorage['skillPadrao']; }
	else if (opt == "default") { var skill = localStorage['skillPadrao']; }
	else { var skill = opt }
	if (opt.recarregar) { var skill = opt.recarregar.skill }
	if (skill) {
		localStorage['atSkill'] = skill;
		jQuery('#painelzao').show()
	}

	templateChecknote(skill);

	if (opt.recarregar) {
		jQuery('#checknoteTitle').html(' (Atendimento: ' + opt.recarregar.skill + ', ' + opt.recarregar.inicio.split(' ')[1] + ')')
		jQuery('#campo_operador').val(opt.recarregar.operador)
		jQuery('#instancia').val(opt.recarregar.instancia)
		jQuery('#atividade').val(opt.recarregar.atividade)
		jQuery('#binada').val(opt.recarregar.binada)
		jQuery('#campo_tecnico').val(opt.recarregar.tecnico)
		jQuery('#campo_tmatricula').val(opt.recarregar.t_matricula)
		jQuery('#campo_numcelular').val(opt.recarregar.numcelular)
		jQuery('#campo_cliente').val(opt.recarregar.cliente)
		jQuery('#campo_tipo').val(opt.recarregar.tipo)
		jQuery('#campo_motivo').val(opt.recarregar.motivo)
		jQuery('#campo_primario').val(opt.recarregar.primario)
		jQuery('#campo_testados').val(opt.recarregar.testados)
		//jQuery('#campo_binadas').val(opt.recarregar.binadas)
		jQuery('#notes_sas').val(opt.recarregar.notes_sas)
		jQuery('#notes_tbs').val(opt.recarregar.notes_tbs)
		jQuery('#notes_banda').val(opt.recarregar.notes_banda)
		jQuery('#notes_operador').val(opt.recarregar.notes_operador)
		jQuery('#notes_particular').val(opt.recarregar.notes_particular)

		if (opt.recarregar.pda == 'nao') { jQuery('input[name="campo_pda"][value="nao"]').prop('checked', true); }
		else if (opt.recarregar.pda == 'sim') { jQuery('input[name="campo_pda"][value="sim"]').prop('checked', true); }


		jQuery('#campo_tl').val(opt.recarregar.TL)
		jQuery('#campo_motivo').val(opt.recarregar.motivo)
		jQuery('#campo_sosid').val(opt.recarregar.sosid)
		jQuery('#campo_fechamento').val(opt.recarregar.fechamento)

		jQuery('#instancia').val(opt.recarregar.instancia)
		jQuery('#campo_idfibra').val(opt.recarregar.id_fibra)
		jQuery('#campo_cnl').val(opt.recarregar.cnl)
		jQuery('#campo_escritorio').val(opt.recarregar.es)
		jQuery('#campo_at').val(opt.recarregar.at)
		jQuery('#campo_pon').val(opt.recarregar.pon)
		jQuery('#campo_idont').val(opt.recarregar.id_ont)
		jQuery('#campo_mont').val(opt.recarregar.modelo_ont)
		jQuery('#campo_facat').val(opt.recarregar.fac_at)
		jQuery('#campo_fib').val(opt.recarregar.fibra)
		jQuery('#campo_facnov').val(opt.recarregar.fac_nov)
		jQuery('#campo_cabo').val(opt.recarregar.cabo)
		jQuery('#campo_prim').val(opt.recarregar.primaria)
		jQuery('#campo_sec').val(opt.recarregar.secundaria)

	} else {
		jQuery('#checknoteTitle').html(' (Atendimento: ' + skill + ', ' + xDate(6).split(' ')[1] + ')')
		localStorage['emAtendimento'] = JSON.stringify(
			{
				"id": xDate('id'),
				"skill": skill,
				"sync": false,
				"inicio": xDate(6),
				"fim": "",
				"options": ""
			}
		);



	}

	var demo1 = new autoComplete({
		selector: '#campo_motivo',
		minChars: 1,
		source: function (term, suggest) {
			term = term.toLowerCase();
			var choices = [
				'Mudança de Endereço',
				'Sincronia',
				'Autenticação',
				'Sem designada',
				'Ruído / Chiado',
				'Navegação',
				'Secundário',
				'Linha muda',
				'Linha muda com bateria',
				'Linha muda sem bateria',
				'Upgrade',
				'Downgrade',
				'Retirar bloqueio',
				'Consulta',
				'Ajuste de cadastro',
				'Ativação de linha',
				'Ativação de banda',
				'Não atinge a velocidade',
				'Ocupado por outro assinante',
				'SGEN',
				'Produtiva com alteração',
				'Produtiva sem alteração',
				'Improdutiva',
				'Caixa Lotada',
				'Distância superior a 400 metros',
				'Transbordo suporte multiskill',
				'Bloco Incorreto',
				'Distância',
				'Travessia Irregular',
				'Rede Saturada',
				'Ocupação indevida',
				'Problemas de Sinal'
			];
			var suggestions = []; 1
			for (i = 0; i < choices.length; i++)
				if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
			suggest(suggestions);
		}
	});
	keepChecknote('', '');
	return true;//habilitar leitura do input transfer
}

function templateChecknote(skill) {
	switch (skill) {

		//=================================================================================
		case 'Manobra':
		//=================================================================================
		case 'Especializada':

		//=================================================================================
		case 'Multiskill':

		//=================================================================================
		case 'Triagem':

		//=================================================================================
		case 'Checklist':
			document.getElementById('checknote-main').innerHTML = ''
				+ '<input id="campo_operador" data-control="keep" data-info="operador" value="C.O ' + localStorage["skillPadrao"] + ' - ' + localStorage["config_matricula"] + ' - ' + localStorage["config_nome"] + '" class="noinp keep" type="text" placeholder="Apresentação, ex: Setor - Matricula - Nome" style="width:405px;"  /> '
				+ '<br>'
				+ '<table>'
				+ '<tr>'
				+ '<td> | Instancia: </td>'
				+ '<td><input class="noinp keep" id="instancia" data-control="keep" data-info="instancia" type="text" placeholder="4125251515" style="width:100px" /> '
				+ ' <button name="buscarNoGPS_i" type="button" class="btn btn-default btn-xs" style="border:solid 1px #ccc;height:18px;padding-top:0px;" title="Buscar Instancia no GPS"> <i name="buscarNoGPS_i" class="entypo-location"></i> </button>'
				+ ' | Atividade: <input class="noinp keep" id="atividade" data-control="keep" data-info="atividade" type="text" placeholder="Atividade" style="width:100px" />'
				+ '<button name="buscarNoGPS_a" type="button" class="btn btn-default btn-xs" style="border:solid 1px #ccc;height:18px;padding-top:0px;" title="buscar Atividade no GPS"> <i name="buscarNoGPS_a" class="entypo-location"></i> </button>'
				+ '</td></tr>'
				+ '<tr>'
				+ '<td> | Binada: </td>'
				+ '<td> <input class="noinp keep" id="binada" data-control="keep" data-info="binada" type="text" placeholder="4125251515" style="width:100px" />'
				+ '  <button name="binada2Down" type="button" class="btn btn-default btn-xs" style="border:solid 1px #ccc;height:18px;padding-top:0px;" title="Colar binada nas anotações e limpar este campo"> <i name="binada2Down" class="entypo-down"></i> </button>'
				+ '  <button name="buscarBinada" type="button" class="btn btn-default btn-xs" style="border:solid 1px #ccc;height:18px;padding-top:0px;" title="Consultar binada"> <i name="buscarBinada" class="entypo-search"></i> </button>'
				+ '  <label style="display:none;">'
				+ '	<input type="checkbox" id="like">'
				+ '	Enviar para retorno'
				+ '  </label>'
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  <td> | Tecnico </td><td>'
				+ '  <input id="campo_tecnico" data-control="keep" data-info="tecnico" class="noinp keep" type="text" placeholder="Nome" style="width:250px;" /> '
				+ '  <input id="campo_tmatricula" data-control="keep" data-info="t_matricula" class="noinp keep" type="text" placeholder="Matricula" style="width:100px;" /> '
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  <!-- <input id="numero_pda" data-control="keep" data-info="numero_pda" class="noinp keep" type="text" placeholder="PDA" style="width:100px;" /> -->'
				+ '  <td> | Cliente </td><td>'
				+ '  <input id="campo_cliente" data-control="keep" data-info="cliente" class="noinp keep" data-control="atendimento" type="text"placeholder="Nome" style="width:250px;" />'
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  <td> | Tipo </td><td>'
				+ '  <input id="campo_tipo" data-control="keep" data-info="tipo" class="noinp keep" type="text" placeholder="Instalação / Defeito" style="width:250px;"  />'
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  <td> | PDA </td><td>'
				+ '  <label style="margin:0px;"> Não <input id="campo_pda" name="campo_pda" data-control="keep" data-info="pda" class="noinp keep" type="radio" value="nao" style="margin:0px;" /></label> - '
				+ '  <label style="margin:0px;"> Sim <input id="campo_pda" name="campo_pda" data-control="keep" data-info="pda" class="noinp keep" type="radio" value="sim" style="margin:0px;" /></label>  '
				+ '  <input class="noinp keep" id="campo_numcelular" data-control="keep" data-info="numcelular" type="text" placeholder="Num. Celular" style="width:160px" />'
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  <td> | Motivo </td><td>'
				+ '  <input id="campo_motivo" data-control="keep" data-info="motivo" class="noinp keep" type="text" placeholder="Motivo" style="width:250px;" />'
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  <td> | Primario </td><td>'
				+ '  <input id="campo_primario" data-control="keep" data-info="primario" class="noinp keep" type="text" placeholder="Primario" style="width:250px;" />'
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  <td> | Testados </td><td>'
				+ '  <input id="campo_testados" data-control="keep" data-info="testados" class="noinp keep" type="text" placeholder="Testados"  style="width:250px;" />'
				+ '  </td></tr>'
				+ '  <tr>'
				+ '  </table>'
				+ '  <table width="100%">'
				+ '  <tr>'
				+ '  <td valign="top" width="60%" style="padding-right:2px;">'
				+ '  Testes e Log:'
				+ '	  	<textarea id="notes_sas" data-control="keep" data-info="notes_sas" contenteditable="true" placeholder="SAS" class="keep" style="height:40px;border:dashed 1px #aaa;background:none;width:100%;"></textarea>'
				+ '	  	<textarea id="notes_tbs" data-control="keep" data-info="notes_tbs" contenteditable="true" placeholder="TBS" class="keep" style="height:100px;border:dashed 1px #aaa;background:none;width:100%;"></textarea>'
				+ '	  	<textarea id="notes_banda" data-control="keep" data-info="notes_banda" contenteditable="true" placeholder="Banda" class="keep" style="height:100px;border:dashed 1px #aaa;background:none;width:100%;"></textarea>'
				+ '  </td>'
				+ '  <td valign="top" width="40%">'
				+ '  Notas de Operador:<br>'
				+ '  <select id="frasesProntas" style="width:100%;">'
				+ '		<option>Frases Prontas</option>'
				+ '		<option>Manobra Ok </option>'
				+ '		<option>Manobra concluída, voz e navegação OK </option>'
				+ '		<option>Cadastro corrigido </option>'
				+ '		<option>Ligação caiu </option>'
				+ '		<option>Bloqueio indevido removido </option>'
				+ '		<option>Manobra Únuca não mostra informação, porém cadastro ok no TBS </option>'
				+ '		<option>SAS exibindo erro, porém configuração na central está correta </option>'
				+ '		<option>Sem energia no armário, tecnico efetuará teste de navegação na casa do cliente. </option>'
				+ '		<option>Transferido para a pesquisa por falta de comunicação </option>'
				+ '		<option>Não foi necessário manobrar, linha estava criada corretamente, validado cadastro e parâmetros no ARD </option>'
				+ '	</select><br>'
				+ '  <textarea id="notes_operador" data-control="keep" data-info="notes_operador" class="keep" style="width:100%;min-height:110px;background:#dfdfdf;border:dashed 1px #aaa;"></textarea>'
				+ '  '
				+ '  Notas Particulares:<br>'
				+ '  <textarea id="notes_particular" data-control="keep" data-info="notes_particular" class="keep" style="width:100%;min-height:100px;background:#dfdfdf;border:dashed 1px #aaa;"></textarea>'
				+ '  </td>'
				+ '  </tr>'
				+ '  </table>'
				+ ''
				+ '  <div id="status"></div>'
				+ '';
			jQuery('#nowOn').html('<span id="" class="badge badge-info" style="background: #0734d8;">Vivo2</span>');
			break;

		//=================================================================================
		case 'TL':
			document.getElementById('checknote-main').innerHTML = ''
				+ '<input id="campo_operador" data-control="keep" data-info="operador" value="C.O ' + localStorage["skillPadrao"] + ' - ' + localStorage["config_matricula"] + ' - ' + localStorage["config_nome"] + '" class="noinp keep" type="text" placeholder="Apresentação, ex: Setor - Matricula - Nome" style="width:405px;"  /> '
				+ '<br>'
				+ '<table>'
				+ '<tr>'
				+ '	<td valign="top">'
				+ '		<table>'
				+ '		<tr>'
				+ '			<td>TL: </td>'
				+ '			<td><input class="noinp keep" id="campo_tl" data-control="keep" data-info="TL" type="text" placeholder="4125251515"  /> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '			<td>Motivo: </td>'
				+ '			<td><input class="noinp keep" id="campo_motivo" data-control="keep" data-info="motivo" type="text" placeholder="4125251515"  /> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Matricula </td>'
				+ '		  <td><input id="campo_tmatricula" class="noinp keep" data-control="keep" data-info="t_matricula" type="text" placeholder="Matricula" style="width:250px;" /></td>'
				+ '		  <!-- <input class="noinp" type="text" placeholder="PDA" style="width:100px;" /> -->'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Tecnico </td>'
				+ '		  <td> <input id="campo_tecnico" class="noinp keep" data-control="keep" data-info="tecnico" type="text" placeholder="Nome" style="width:250px;" /> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '			<td>SOSid: </td>'
				+ '			<td><input class="noinp keep" id="campo_sosid" data-control="keep" data-info="sosid" type="text" placeholder="4125251515"  /> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '			<td>Instancia: </td>'
				+ '			<td><input class="noinp keep" id="instancia" data-control="keep" data-info="instancia" type="text" placeholder="4125251515"  /> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Fechamento </td>'
				+ '		  <td><input id="campo_fechamento" class="noinp keep" data-control="keep" data-info="fechamento" type="text"placeholder="Numero de fechamento" style="width:250px;" /></td>'
				+ '		</tr>'
				+ '  	</table>'
				+ '  </td>'
				+ '  <td valign="top" width="40%">'
				+ '  	Notas de Operador:<br>'
				+ '  	<select style="width:100%;"><option>Frases Prontas</option></select><br>'
				+ '  	<textarea id="notes_operador" data-control="keep" data-info="notes_operador" class="keep" style="width:100%;min-height:100px;background:#dfdfdf;border:dashed 1px #aaa;"></textarea>'
				+ '  '
				+ '  	Notas Particulares:<br>'
				+ '  	<textarea id="notes_particular" data-control="keep" data-info="notes_particular" class="keep" style="width:100%;min-height:100px;background:#dfdfdf;border:dashed 1px #aaa;"></textarea>'
				+ '  </td>'
				+ '</tr>'
				+ '</table>'
				+ '';
			jQuery('#nowOn').html('<span id="" class="badge badge-info" style="background: #0734d8;">Vivo2</span>')
			break;

		//=================================================================================
		case 'Manobra-Vivo1':
			//var atendimento = JSON.parse(localStorage['emAtendimento'])
			document.getElementById('checknote-main').innerHTML = ''
				+ '<input id="campo_operador" data-control="keep" data-info="operador" value="C.O ' + localStorage["skillPadrao"] + ' - ' + localStorage["config_matricula"] + ' - ' + localStorage["config_nome"] + '" class="noinp keep" type="text" placeholder="Apresentação, ex: Setor - Matricula - Nome" style="width:405px;"  /> '
				+ '<br>'
				+ '<table>'
				+ '<tr>'
				+ '			<td >Terminal: </td>'
				+ '			<td><input class="noinp keep" id="instancia" data-control="keep" data-info="instancia" type="text" placeholder="4125251515" style="width:100px" />'
				+ '			<button name="buscarNoGPS_i" type="button" class="btn btn-default btn-xs" style="border:solid 1px #ccc;height:18px;padding-top:0px;" title="Buscar Instancia no GPS"> <i name="buscarNoGPS_i" class="entypo-location"></i> </button>'
				+ '			 Atividade: <input class="noinp keep" id="atividade" data-control="keep" data-info="atividade" type="text" placeholder="Atividade" style="width:100px" />'
				+ '			<button name="buscarNoGPS_a" type="button" class="btn btn-default btn-xs" style="border:solid 1px #ccc;height:18px;padding-top:0px;" title="buscar Atividade no GPS"> <i name="buscarNoGPS_a" class="entypo-location"></i> </button>'
				+ '			</td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '			<td>Tipo </td>'
				+ '			<td>'
				+ '			<input id="campo_tipo" data-control="keep" data-info="tipo" class="noinp keep" type="text" placeholder="Instalação / Defeito" style="width:100%;"  />'
				+ '  		</td></tr>'
				+ '		<tr>'
				+ '			<td>Motivo: </td>'
				+ '			<td><input class="noinp keep" id="campo_motivo" data-control="keep" data-info="motivo" type="text" placeholder="Motivo da Manobra"  style="width:100%;"/> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Tecnico </td>'
				+ '		  <td><input id="campo_tecnico" class="noinp keep" data-control="keep" data-info="tecnico" type="text" placeholder="Nome" style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Id Fibra </td>'
				+ '		  <td><input id="campo_idfibra" class="noinp keep" data-control="keep" data-info="id_fibra" type="text" placeholder="id_fibra"style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '			<td>CNL: </td>'
				+ '			<td><input class="noinp keep" id="campo_cnl" data-control="keep" data-info="cnl" type="text" placeholder="CLN"  style="width:100%;"/> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '			<td>Escritorio: </td>'
				+ '			<td><input class="noinp keep" id="campo_escritorio" data-control="keep" data-info="es" type="text" placeholder="ES"  style="width:100%;"/> </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> AT </td>'
				+ '		  <td><input id="campo_at" class="noinp keep" data-control="keep" data-info="at" type="text"placeholder="AT" style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> PON </td>'
				+ '		  <td><input id="campo_pon" class="noinp keep" data-control="keep" data-info="pon" type="text"placeholder="PON" style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> ID ONT </td>'
				+ '		  <td><input id="campo_idont" class="noinp keep" data-control="keep" data-info="id_ont" type="text"placeholder="ID ONT" style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Modelo ONT </td>'
				+ '		  <td><input id="campo_mont" class="noinp keep" data-control="keep" data-info="modelo_ont" type="text"placeholder="MODELO ONT" style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Fac Atual </td>'
				+ '		  <td><input id="campo_facat" class="noinp keep" data-control="keep" data-info="fac_at" type="text" placeholder="00-F#00" style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Fibra </td>'
				+ '		  <td><input id="campo_fib" class="noinp keep" data-control="keep" data-info="fibra" type="text" style="width:100%;" placeholder="Fibra"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td> Fac Nova </td>'
				+ '		  <td>'
				+ '		  <input id="campo_facnov" class="noinp keep" data-control="keep" data-info="fac_nov"  type="text" placeholder="00-F#00" style="width:100%;"/>'
				+ '		  </td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td><input id="campo_cabo" class="noinp keep" data-control="keep" data-info="cabo" type="text" placeholder="Cabo" /></td>'
				+ '		  <td><input id="campo_prim" class="noinp keep" data-control="keep" data-info="primaria" type="text" placeholder="Primaria" style="width:100%;"/></td>'
				+ '		</tr>'
				+ '		<tr>'
				+ '		  <td><input id="campo_sec" class="noinp keep" data-control="keep" data-info="secundaria" type="text" placeholder="Secundaria" /></td>'
				+ '		</tr>'
				+ '  	</table>'
				+ '  <table width="100%">'
				+ '  <tr>'
				+ '  <td valign="top">'
				+ '  Notas de Operador:<br>'
				+ '  <select id="frasesProntas" style="width:100%;">'
				+ '		<option>Frases Prontas</option>'
				+ '		<option>Manobra Ok </option>'
				+ '		<option>Cadastro corrigido </option>'
				+ '		<option>Ligação caiu </option>'
				+ '		<option>Mudança de Endereço, necessaria abertura de chamado para correção de facilidade </option>'
				+ '		<option>Orientado a ligar na Inviabilidade Tecnica </option>'
				+ '		<option>Não existem secundarias disponiveis para facilidade </option>'
				+ '		<option>Transferido para a pesquisa por falta de comunicação </option>'
				+ '	</select><br>'
				+ '  <textarea id="notes_operador" data-control="keep" data-info="notes_operador" class="keep" style="width:100%;min-height:110px;background:#dfdfdf;border:dashed 1px #aaa;"></textarea>'
				+ '  '
				+ '  Notas Particulares:<br>'
				+ '  <textarea id="notes_particular" data-control="keep" data-info="notes_particular" class="keep" style="width:100%;min-height:100px;background:#dfdfdf;border:dashed 1px #aaa;"></textarea>'
				+ '  </td>'
				+ '  </tr>'
				+ '  </table>'
				+ ''
				+ '  <div id="status"></div>'
				+ '';
			jQuery('#nowOn').html('<span id="" class="badge badge-info" style="background: #9f3ad2;">Vivo1</span>');

			break;

		//=================================================================================
		default:
			toastr.warning('Erro no skill')
	}

}
function preencheFac(cabo, prim) {
	if (document.getElementById('campo_cabo') && document.getElementById('campo_prim')) {
		cabo = document.getElementById('campo_cabo').value;
		prim = document.getElementById('campo_prim').value;
		document.getElementById("campo_facnov").value = cabo + "-F#" + prim;
	}
	//console.log(document.getElementById("campo_facnov").value);
}

function inserirFrase(frase) {
	if (document.getElementById('notes_operador')) {
		document.getElementById('notes_operador').value += frase + '\n';
		document.getElementById('frasesProntas').selectedIndex = 0;
		keepChecknote('', '');
	}
}


function downloadChecklist(filename) {
	var conteudo = document.getElementById('callhistcontent').innerText.replace(/(?:\r\n|\r|\n)/g, '\r\n');
	var ancora = document.createElement('a');
	ancora.href = 'data:application/txt,' + encodeURIComponent(conteudo);
	//ancora.href = 'data:application/octet-stream;charset=utf-8,' + conteudo;
	//window.open("data:application/txt," + encodeURIComponent(conteudo), "_self");
	ancora.download = filename;
	ancora.click();
}

//############################################################################
function getSisnum() {
	var qtd = document.getElementsByClassName('field_table').length;
	var arr = document.getElementsByClassName('field_table');

	for (i = 0; i < qtd; i++) {
		if (arr[i].innerText.indexOf('Registro no Sisnum') > -1) {
			var saida = arr[i].innerText;
			console.log('[' + i + '] - ' + arr[i].innerText);
		}

	}
	document.getElementById("testeadicionais").innerHTML = saida;
}
//--------------------------------------
function getFacilidade() {
	var saida = document.getElementsByName('emuladorTelNet')[0].value;
	document.getElementById("testeadicionais").innerHTML = '<pre>' + saida + '</pre>';
}
//--------------------------------------
function buscapn(g) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://pnadmin.gvt.com.br/pn/pn.jsp?numero=4330641172&protocolo=&nequip=&invokeId=&pnId=&submit=GO', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("pTexto=" + g + "&pTelefone=&pNome=&pSobreNome=&pMatricula=&pDepartamento=&pCidade=&buscaAvancada=&pArea=&pResultadosPorPagina=20&pagNum=1&servico=buscarColaboradores");
	xhr.responseType = "text";
	xhr.onload = function () {
		document.getElementById("tela").innerHTML = this.response;
		sisnum();

	}
}

function buscaSas(g) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://gvtapp/sas/configurar?telefoneDMS=4330641172&cmd=consultar&fecha=1', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("pTexto=" + g + "&pTelefone=&pNome=&pSobreNome=&pMatricula=&pDepartamento=&pCidade=&buscaAvancada=&pArea=&pResultadosPorPagina=20&pagNum=1&servico=buscarColaboradores");
	xhr.responseType = "text";
	xhr.onload = function () {
		document.getElementById("tela").innerHTML = this.response;
		getFacilidade();

	}
}

function buscaManobra(g) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://appsagre.gvt.net.br/Manobraunica/main', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("ba=&acao=TEL&telefone=6238777944&x=24&y=13&opcaotelefone=&opcaoBa=");
	xhr.responseType = "text";
	xhr.onload = function () {
		console.log(this.response);

	}
}

function buscaWise(g) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://wisetool.gvt.net.br/wisetool/SmartTools.action', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("redeAcessoVivo1=false&isTecnologiaDTH=false&acao=informacoesSagre&portaIdFxs=&instanciaInformacoesSip=&tipoBridge=&deviceId=&idElemento=&indexElemento=&nomeElemento=&cpeId=&serialNumber=&modemSerialNumber=&action=&dnsReverso=&numIPCliente=&serviceOrderId=&prefixosOnt=ASKY%2CMTSC%2CMSTC%2CPACE%2CSAGE&idSsHistoricoCertificacao=&idBaHistoricoCertificacao=&tipoCertificacao=&defautModulation=VDSL+17A+SUV&defautModulation=null&tipoPesquisa=Instancia&searchValue=2135703564&nmFerramentas=&baCertificar=&modem=&redeSemFio=&nomeModem=&ipMacAddress=&ipMacAddressValue=");
	xhr.responseType = "text";
	xhr.onload = function () {
		console.log(this.response).replace(/src/gi, "alt");;
		document.getElementById('toolnow').innerHTML = this.response;
	}
}
//-------------------------------------------
function msTime(ms) {
	function duas_casas(numero) {
		if (numero <= 9) {
			numero = "0" + numero;
		}
		return numero;
	}
	segundos = duas_casas(parseInt((ms / 1000) % 60));      // se não precisar de segundos, basta remover esta linha.
	minutos = duas_casas(parseInt((ms / 60000) % 60));     // 60000   = 60 * 1000
	horas = duas_casas(parseInt(ms / 3600000));            // 3600000 = 60 * 60 * 1000
	resultado = horas + ":" + minutos + ":" + segundos;
	return resultado;
}

function msTime2(ms) {
	function duas_casas(numero) {
		if (numero <= 9) {
			numero = "0" + numero;
		}
		return numero;
	}
	s = parseInt(ms / 1000);
	hora = duas_casas(parseInt(s / 3600));
	minuto = duas_casas(parseInt((s % 3600) / 60));
	segundo = duas_casas((s % 3600) % 60);
	formatado = hora + ":" + minuto + ":" + segundo;
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

//Funções auxiliares
function registroIms(registro) {
	if (registro == '0') {
		return '<span class="vermelho">Sem registro</span>';
	}
	else if (registro == '1') {
		return '<span class="verde">Registrado</span>';
	}
	else if (registro == '2') {
		return '<span class="vermelho">Perdeu registro</span>';
	}
	else { }
}

//===========================================================================
//Filtros AJAX response
function filtro_desativado_SAS(resposta) {
	alert('euusoisso?');
	//reseta variaveis antes de usa-las
	var facilidadeEncontrada = "Erro";
	var servicos = "Erro";
	//coloca o conteudo da resposta em uma div não implementada
	var tempDiv = jQuery('<div>').html(resposta);
	var raw = jQuery('<div>').html(resposta);
	//remove tags de link, estilo e imagem da resposta
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	//...
	var resposta = tempDiv.html();
	var telnet = jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
	var facilidade = telnet.split('\n');
	for (f = 0; f < facilidade.length; f++) {
		if (facilidade[f].indexOf('LINE EQUIPMENT NUMBER') > -1) {
			var facilidadeEncontrada = facilidade[f].replace('LINE EQUIPMENT NUMBER: ', '').trim();
		}
		if (facilidade[f].indexOf('OPTIONS:') > -1) {
			var servicos = facilidade[f + 1].trim();
		}
	}
	jQuery('#diagnostico_SASc').html('<div style="white-space:pre-wrap;">'
		+ 'Facilidade: <span class="verde">' + facilidadeEncontrada + '</span>\n'
		+ 'Serviços: ' + servicos + '</div>');
	jQuery('#debug-sas').html(resposta);
}

//===========================================================================
//http://efika/vsm/legado/vsm-base/VSMonitorJS/whoami
function ativarCoisas(opt) {
	if (opt) {
		var request = jQuery.ajax({
			url: "http://efika/vsm/legado/vsm-base/VSMonitorJS/whoami",
			contentType: "application/x-www-form-urlencoded;charset=utf8",
			dataType: "text",
			type: "post",
			data: {
				"codigo": opt,
			}
		});
		request.done(function () {
			//console.log(request.responseText);
			if (request.responseText == "ativar") {
				document.getElementById('painel_imsdb').style.display = 'block';
			}

		});
		//request.fail(function(xhr, status, errorThrown){console.log('Manobra Unica : Falha');});
		//request.always(function(){opt.filtro(request);unblockUI(jQuery(bloquearElemento))});


	} else { console.error('Erro, argumentos invalidos') }
}
//===========================================================================
/*
function obelix(opt){
	if(opt){
		var request = jQuery.ajax({
			url:        "http://appsagre.gvt.net.br/Manobraunica/main",
			contentType: "application/x-www-form-urlencoded;charset=utf8",
			timeout: 	20000,
			dataType:   "text",
			type:       "post",
			data :		{
				ba:"",
				acao:"TEL",
				telefone:instancia,
				x:"35",
				y:"10",
				opcaotelefone:"",
				opcaoBa:""
			}
		});          
		request.done(function(){console.log('Manobra Unica : Sucesso');	});
		request.fail(function(xhr, status, errorThrown){console.log('Manobra Unica : Falha');});
		request.always(function(){opt.filtro(request);unblockUI(jQuery(bloquearElemento))});
		

	}else{console.error('Erro, argumentos invalidos')}
}
*/
//===========================================================================
//Efika DSL
/*
Zhone  : combo, mxk, ftth /  IP,Slot,Porta,Rin,Primário + modulação
Keymile: Suad, Suvd /  IP,Slot,Porta,Rin,Primário


diagnosticoTbs({
	'modo':'request',
	'input':'#instancia',
	'instancia':'',
	'bloquear':'#diagnostico_TBS',
	'destino':'#diagnostico_TBSc',
	'filtro':filtroTBS
});
*/

/*
Lista de comandos:
Keymile:
Mac modem suad: 167
Mac modem suvd: 197
parametros suad: 172
parametros suvd: 202
recriar bridge: 

Zhone:


Zhone: http://efika/web/action/exec_Zhone.php
	Combo
		"comando":"76",
		"slot":slot,
		"porta":porta,
		"rin":rin,
		"primario":primario,
		"modulacao":"null",
		"velocidade":"",
		"vlanvoip":"",
		"ip":ip,
		"ard":"",
		"instancia":"4334223029",
		"login":"G0056638",
		"qlgerencia":"zhone",
		"vlanvod":""
	MXK
		comando:134
		slot:10
		porta:23
		rin:038
		primario:1287
		modulacao:null
		velocidade:51200
		vlanvoip:1038
		ip:10.164.81.8
		ard:GORVD_O1A06
		instancia:6430513229
		login:G0056638
		qlgerencia:zhone
		vlanvod:3038
		//veldown velup snrdown snrup atndown atnup
		
		

Keymile: http://efika/web/action/exec_Keymile.php
		"comando":"172",
		"slot":slot,
		"porta":porta,
		"ard":"",
		"vlanvod":"",
		"vlanvoip":"",
		"sip":"",
		"hib":"",
		"rin":rin,
		"ip":ip,
		"primario":primario,
		"modulacao":null,
		"qlgerencia":"milho",
		"card":"",
		"login":"G0056638",
		"instancia":"",
		"velocidade":null
	suad
		comando:172
		slot:5
		porta:25
		ard:PRCTA_O1C39
		vlanvod:3279
		vlanvoip:1279
		sip:
		hib:
		rin:322
		ip:10.141.232.214
		primario:121
		modulacao:null
		qlgerencia:milho
		card:SUAD3
		login:G0056638
		instancia:4130894760
		velocidade:15360
		//Suad: veldown velup snrdown snrup atndown atnup

	suvd
		comando:202
		slot:12
		porta:37
		ard:
		vlanvod:
		vlanvoip:
		sip:
		hib:
		rin:340
		ip:10.221.146.26
		primario:1277
		modulacao:null
		qlgerencia:milho
		card:
		login:G0056638
		instancia:
		velocidade:null
		//Suvd: veldown velup snrdown1 snrup0 atndown1 atnup0
   
*/

function efikaDslam(opt) {

	if (opt) {
		//
	}
	var erro = "";
	var dslam = "";
	if (jQuery('#painel-Wise-porta').text()) { var porta = jQuery('#painel-Wise-porta').text(); } else { var erro = "Porta não encontrada" }
	if (jQuery('#painel-Wise-slot').text()) { var slot = jQuery('#painel-Wise-slot').text(); } else { var erro = "Slot não encontrada" }
	if (jQuery('#painel-Wise-rin').text()) { var rin = jQuery('#painel-Wise-rin').text(); } else { var erro = "RIN não encontrado" }
	if (jQuery('#painel-Wise-seqporta').text()) { var primario = jQuery('#painel-Wise-seqporta').text(); } else { var erro = "Primário não encontrado" }
	if (jQuery('#painel-Wise-iparmario').text()) { var ip = jQuery('#painel-Wise-iparmario').text(); } else { var erro = "IP não encontrado" }
	if (jQuery('#painel-Wise-dslam').text()) { var dslam = jQuery('#painel-Wise-dslam').text(); } else { var erro = "DSLAM não encontrado" }
	/*
	$.ajax({
		type: 'POST',
		data: 'login='+localStorage['config_matricula']+'&comando='+comando+'&ip='+ip+'&instancia=0',
		url: 'http://efika/web/action/salva_Comandos.php',
		success: function(salvoucomando){
			$('#salvoucomando').html(salvoucomando);
		}
	});
	*/
	if (dslam.match(/ZHONE/gi)) {
		if (dslam.match(/MXK/gi)) { var comando = 134; }
		else if (dslam.match(/COMBO/gi)) { var comando = 76; }
		else { var dslam = "Efika: erro ao detectar o tipo do DSLAM ZHONE" }
		var url = "http://efika/web/action/exec_Zhone.php";
		var data = {
			"comando": comando,
			"slot": slot,
			"porta": porta,
			"rin": rin,
			"primario": primario,
			"modulacao": "null",
			"velocidade": "",
			"vlanvoip": "",
			"ip": ip,
			"ard": "",
			"instancia": "",
			"login": "VSMonitor",
			"qlgerencia": "zhone",
			"vlanvod": ""
		}
	} else if (dslam.match(/KEYMILE/gi)) {
		if (dslam.match(/suad/gi)) { var comando = 172; }
		else if (dslam.match(/suvd/gi)) { var comando = 202; }
		else { var dslam = "Efika: erro ao detectar o tipo do DSLAM KEYMILE" }
		var url = "http://efika/web/action/exec_Keymile.php";
		//SUAD 172, SUVD 202
		dslam = "KEYMILE";
		var data = {
			"comando": comando,
			"slot": slot,
			"porta": porta,
			"ard": "",
			"vlanvod": "",
			"vlanvoip": "",
			"sip": "",
			"hib": "",
			"rin": rin,
			"ip": ip,
			"primario": primario,
			"modulacao": null,
			"qlgerencia": "milho",
			"card": "",
			"login": "VSMonitor",
			"instancia": "",
			"velocidade": null
		}
	}

	if (erro) {
		toastr.warning(erro);
	} else {
		blockUI(jQuery('#diagnostico_parametrosc'));
		var request = jQuery.ajax({
			url: url,
			contentType: "application/x-www-form-urlencoded;charset=utf8",
			dataType: "text",
			type: "post",
			data: data
		});
		request.done(function () {
			//console.log(request.responseText);	
			var requestResult = request.responseText.replace(/div/gi, 'div');
			var tempDiv = jQuery('<div>').html(requestResult);

			if (requestResult.indexOf('demorou demais para responder') > -1) {
				toastr.warning("Efika: A gerência demorou demais");
			}

			//Suvd: veldown velup snrdown1 snrup0 atndown1 atnup0
			//Suad: veldown velup snrdown snrup atndown atnup

			switch (comando) {
				// =================================================================
				case 167: //MAC do modem
					alert(jQuery(tempDiv).find('table').text())
					break;

				// =================================================================
				case 172: //keymile suad //Suad: veldown velup snrdown snrup atndown atnup

					if (jQuery(tempDiv).find('#veldown').text()) {
						var veldown = jQuery(tempDiv).find('#veldown').text().replace('\n', '');
						var velup = jQuery(tempDiv).find('#velup').text().replace('\n', '');
						var snrdown = jQuery(tempDiv).find('#snrdown').text().replace('\n', '');
						var snrup = jQuery(tempDiv).find('#snrup').text().replace('\n', '');
						var atndown = jQuery(tempDiv).find('#atndown').text().replace('\n', '');
						var atnup = jQuery(tempDiv).find('#atnup').text().replace('\n', '');

						jQuery('#diagnostico_parametrosc').html(''
							+ '<div style="font-family: Calibri;font-weight:bolder;color:#0b66ba;">EFIKA</div>\n'
							+ '<div>Velocidade: ' + veldown + ' - ' + velup + '</div>\n'
							+ '<div>Sinal ruído: ' + snrdown + ' - ' + snrup + '</div>\n'
							+ '<div>Atenuação: ' + atndown + ' - ' + atnup + '</div>\n'
						);
						if (veldown != 0) { addChecklist('parametros') }
						//alert('Sincronizado')
					} else {
						toastr.warning('EFIKA: NSYNC')
						//alert('SEM sincronia'+jQuery(tempDiv).text())
					}


					break;

				// =================================================================
				case 76: //MAC do modem


					if (jQuery(tempDiv).find('#veldown').text()) {
						var veldown = jQuery(tempDiv).find('#veldown') //.text().replace('\n','');
						var velup = jQuery(tempDiv).find('#velup')//.text().replace('\n','');
						var snrdown = jQuery(tempDiv).find('#snrdown')//.text().replace('\n','');
						var snrup = jQuery(tempDiv).find('#snrup')//.text().replace('\n','');
						var atndown = jQuery(tempDiv).find('#atndown')//.text().replace('\n','');
						var atnup = jQuery(tempDiv).find('#atnup')//.text().replace('\n','');

						jQuery('#diagnostico_parametrosc').html(''
							+ '<div style="font-family: Calibri;font-weight:bolder;color:#0b66ba;">EFIKA</div>\n'
							+ '<div>Velocidade: <span class=' + veldown[0].className + '>' + veldown.text() + '</span> - <span class=' + velup[0].className + '>' + velup.text() + '</span></div>\n'
							+ '<div>Sinal ruído: <span class=' + snrdown[0].className + '>' + snrdown.text() + '</span> - <span class=' + snrup[0].className + '>' + snrup.text() + '</span></div>\n'
							+ '<div>Atenuação: <span class=' + atndown[0].className + '>' + atndown.text() + '</span> - <span class=' + atnup[0].className + '>' + atnup.text() + '</span></div>\n'
						);
						if (veldown != 0) { addChecklist('parametros') }
						//alert('Sincronizado')
					} else {
						toastr.warning('EFIKA: NSYNC')
						//alert('SEM sincronia'+jQuery(tempDiv).text())
					}



					//veldown velup snrdown snrup atndown atnup
					break;

				// =================================================================
				case 134: //ZHONE MXK


					if (jQuery(tempDiv).find('#veldown').text()) {
						var veldown = jQuery(tempDiv).find('#veldown')//.text().replace('\n','');
						var velup = jQuery(tempDiv).find('#velup')//.text().replace('\n','');
						var snrdown = jQuery(tempDiv).find('#snrdown')//.text().replace('\n','');
						var snrup = jQuery(tempDiv).find('#snrup')//.text().replace('\n','');
						var atndown = jQuery(tempDiv).find('#atndown')//.text().replace('\n','');
						var atnup = jQuery(tempDiv).find('#atnup')//.text().replace('\n','');

						jQuery('#diagnostico_parametrosc').html(''
							+ '<div style="font-family: Calibri;font-weight:bolder;color:#0b66ba;">EFIKA</div>\n'
							+ '<div>Velocidade: <span class=' + veldown[0].className + '>' + veldown.text() + '</span> - <span class=' + velup[0].className + '>' + velup.text() + '</span></div>\n'
							+ '<div>Sinal ruído: <span class=' + snrdown[0].className + '>' + snrdown.text() + '</span> - <span class=' + snrup[0].className + '>' + snrup.text() + '</span></div>\n'
							+ '<div>Atenuação: <span class=' + atndown[0].className + '>' + atndown.text() + '</span> - <span class=' + atnup[0].className + '>' + atnup.text() + '</span></div>\n'
						);
						if (veldown != 0) { addChecklist('parametros') }
						//alert('Sincronizado')
					} else {
						toastr.warning('EFIKA: NSYNC')

						//alert('SEM sincronia'+jQuery(tempDiv).text())
					}



					//veldown velup snrdown snrup atndown atnup
					break;
				// =================================================================
				case 202: //Suvd: veldown velup snrdown1 snrup0 atndown1 atnup0


					if (jQuery(tempDiv).find('#veldown').text()) {
						var veldown = jQuery(tempDiv).find('#veldown').text().replace('\n', '');
						var velup = jQuery(tempDiv).find('#velup').text().replace('\n', '');
						var snrdown = jQuery(tempDiv).find('#snrdown1').text().replace('\n', '');
						var snrup = jQuery(tempDiv).find('#snrup0').text().replace('\n', '');
						var atndown = jQuery(tempDiv).find('#atndown1').text().replace('\n', '');
						var atnup = jQuery(tempDiv).find('#atnup0').text().replace('\n', '');

						jQuery('#diagnostico_parametrosc').html(''
							+ '<div style="font-family: Calibri;font-weight:bolder;color:#0b66ba;">EFIKA</div>\n'
							+ '<div>Velocidade: ' + veldown + ' - ' + velup + '</div>\n'
							+ '<div>Sinal ruído: ' + snrdown + ' - ' + snrup + '</div>\n'
							+ '<div>Atenuação: ' + atndown + ' - ' + atnup + '</div>\n'
						);
						if (veldown != 0) { addChecklist('parametros') }
						//alert('Sincronizado')
					} else {
						if (jQuery(tempDiv).text().match(/sem sincronia/gi)) {
							//
						}
						toastr.warning('EFIKA: NSYNC')

						//console.log(jQuery(tempDiv).text())
						//alert('SEM sincronia'+jQuery(tempDiv).text())
					}


					break;
				// =================================================================
				case 99999992://Suad: veldown velup snrdown snrup atndown atnup
					//
					break;
			}
		});
		request.fail(function (xhr, status, errorThrown) { toastr.error('Efika Dslam falhou') });
		request.always(function () { unblockUI(jQuery('#diagnostico_parametrosc')) });
	}

}



//===========================================================================
//buscar ims id
function imsID(imsInput) {
	//var imsInput=jQuery('.buscarImsInfo').val();
	if (imsInput.match(/IMS/gi)) {
		//É IMS
		var imsInput = imsInput.toUpperCase();
		var imsInput = imsInput.split('IMS')[0];
		if (imsInput.length < 7) {
			jQuery('#painel-IMS-ID').html("<span class='badge badge-default badge-roundless' title='A Consulta de IMS-ID V5/248 falhou'>Erro de Engenharia no TBS</span> <button type='button' class='btn btn-default btn-xs' style='border:solid 1px #aaa;' name='corrigir-engenharia'><i class='entypo-ccw' name='corrigir-engenharia'></i></button>")
			jQuery('#painel-IMS-ID').parent().css('display', '')
		} else {

			var request = jQuery.ajax({
				url: "http://efika/vsm/legado/vsm-base/api/ims/id/",
				method: 'GET',
				data: { 'id': imsInput }
			});

			request.done(function (imsid) {
				if (imsid[0]) {
					jQuery('#painel-IMS-ID').html("<span class='badge badge-default badge-roundless' title='IMS-ID (V5/H248)'>" + imsid[0].v5id_248ip + "</span>")
					//setTimeout(function(){jQuery('#buscarImsRes').html('');},3000)
				} else {
					jQuery('#painel-IMS-ID').html("<span style='color:#f00;' title='IMS-ID não encontrado'>" + imsInput + " não encontrado</span>")
					//setTimeout(function(){jQuery('#buscarImsRes').html('');},3000)
					jQuery.ajax({
						url: 'http://efika/vsm/legado/inserir_instancia_eng.php?instancia=' + jQuery('#instancia').val() + '&nodeaddress=' + imsInput
					})
					//
				}
				//jQuery('#painel-IMS-ID').fadeIn();

			});

			request.fail(function (xhr, status, errorThrown) {
				console.log(xhr + ' - ' + status + ' - ' + errorThrown)
				jQuery('#painel-IMS-ID').html("<span title='A Consulta de IMS-ID V5/248 falhou'>Falha de Rede</span>")
			});

			request.always(function (imsid) {/*painel-IMS-ID*/jQuery('#painel-IMS-ID').parent().css('display', '') });
			//console.log(request)

		}

	} else {
		//Nao é IMS
		jQuery('#painel-IMS-ID').html('');
		//jQuery('#buscarImsRes').fadeIn();
		//setTimeout(function(){jQuery('#buscarImsRes').fadeOut();},3000)
	}
}


//===========================================================================
//Diagnostico TBS Manobra Unica
/*
Como ajustar as outras funções para este modelo?
 - adicioanr antes do request as opts de bloquear, destino, e instancia
 - ajustar done com apenas console.log, fail com xhr,status e console.log
 - ajustar always com o filtro escolhido em opts, e jogar no filtro a request toda
 - tira o callresponse
 - troca o modo=='request' por opt['modo']=='request' , e o modo response não é mais usado
 - blockUI(jQuery('#diagnostico_SAS')); unblock no always
 
filtro(){
 	if(resposta.status==404){
		//ratativa de erro 
	}
	else if(resposta.status=="500"){
		tratativa de erro
	}
	else if(resposta.status==="0"){
		tratativa de erro
	}
	else if(resposta.status=="200"){
		var resposta = resposta.responseText;
	}
	else{ }
}

diagnosticoTbs({
	'modo':'request',
	'input':'#instancia',
	'instancia':'',
	'bloquear':'#diagnostico_TBS',
	'destino':'#diagnostico_TBSc',
	'filtro':filtroTBS
});
*/
function diagnosticoTbs(opt) {
	if (opt) {
		if (opt['bloquear']) { var bloquearElemento = opt['bloquear']; }//#diagnostico_TBS
		if (opt['destino']) { var popularElemento = opt['destino']; }//#diagnostico_TBSc
		if (opt['instancia']) { var instancia = opt['instancia'] } else { var instancia = jQuery('#instancia').val(); }
		//else{var elementoDestino='#diagnostico_TBSc';}
		if (opt['modo'] == 'request') {
			if (xRequests.tbs) { xRequests.tbs.abort() }
			var reqStart = Date.now();
			blockUI(jQuery(bloquearElemento));
			xRequests.tbs = jQuery.ajax({
				url: "http://appsagre.gvt.net.br/Manobraunica/main",
				contentType: "application/x-www-form-urlencoded;charset=utf8",
				timeout: 20000,
				dataType: "text",
				type: "post",
				data: {
					ba: "",
					acao: "TEL",
					telefone: instancia,
					x: "35",
					y: "10",
					opcaotelefone: "",
					opcaoBa: ""
				}
			});
			xRequests.tbs.done(function () { console.log('Manobra Unica : Sucesso'); });
			xRequests.tbs.fail(function (xhr, status, errorThrown) { console.log('Manobra Unica : Falha'); });
			xRequests.tbs.always(function () {
				opt.filtro(xRequests.tbs); unblockUI(jQuery(bloquearElemento))
				var reqEnd = Date.now();
				var reqTime = reqEnd - reqStart;
				log_request('Manobra: ' + instancia + ' | ' + xDate(8) + ' | Inicio:' + reqStart + ' | Fim:' + reqEnd + ' | Tempo:' + reqTime + 'ms | Status:' + xRequests.tbs.status, xRequests.tbs.status);
			});
		}
		else if (opt['modo'] == 'response') {
			unblockUI(jQuery(bloquearElemento));
			filtroTBS(dados);
			//document.getElementsByClassName('menu_hq')[0].innerText
		}
		else { }
	} else { console.error('Erro, argumentos invalidos') }
}

//--------------------------

function filtroTBS(resposta) {
	if (resposta.status == 404) {
		toastr.warning('Manobra Única: Erro 400');
		var resposta = ''
			+ '<center><img src="chrome-extension://dehheadpmhimcoldleepicbogjngiikh/imgs/ajax-loader4.gif" /></center>'
			+ '<br>'
			+ '<center class="vermelho">Erro 404, recarregando Manobra Unica</center>'
			+ '<br>';
		jQuery('#diagnostico_TBSc').html(resposta)
		//Reinicia a sessão do manobra unica quando ela está expirada
		xRequests.tbs = jQuery.ajax({
			url: "http://appsagre.gvt.net.br/Manobraunica/Acesso?dado=usr",
			dataType: "text",
			type: "post"
		});
		xRequests.tbs.always(function () {
			diagnosticoTbs({
				'modo': 'request',
				'input': '#instancia',
				'bloquear': '#diagnostico_TBS',
				'destino': '#diagnostico_TBSc',
				'filtro': filtroTBS
			});
		});

	}
	else if (resposta.status == 500) {
		toastr.warning('Manobra Única: Erro 500');
		var resposta = "Erro 500";
	}
	else if (resposta.status === 0) {
		toastr.warning('Manobra Única: Erro 0');
		var resposta = "Erro 0";
		jQuery('#diagnostico_TBSc').html(''
			+ '<span class="vermelho">O Manobra Unica falhou</span>, clique em <i name="diagnosticarTBS" class="entypo-arrows-ccw"></i> para tentar novamente.'
			+ '')

	}
	else if (resposta.status == 200) {
		//toastr.success('Manobra Única: 200 [OK]');
		var resposta = resposta.responseText;
		var resposta = resposta.replace(/src=/gi, "alt=");
		//Declarar as variaveis para evitar except
		var saida = '';
		var armario = '';
		var porta = '';
		var secundarioTbs = '?';
		var caixa = '';
		var par = '';
		var secundarioSagre = '';
		var dados = '';
		var voz = '';
		var rin = '';
		var bandaLarga = '';
		var erro = '';

		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);

		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();

		var storeHTML = tempDiv.html();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getArmario == 'sim' && armario == '') { if (temp[0] == "M") { getArmario = ''; } else { var armario = temp; getArmario = ''; } }
				if (getPorta == 'sim' && porta == '') { var porta = temp; getPorta = ''; }
				if (getSecTbs == 'sim' && secundarioTbs == '?') { if (temp == "Sagre") { getSecTbs = '' } else { var secundarioTbs = temp; getSecTbs = ''; } }
				if (getCaixa == 'sim' && caixa == '') { if (temp == "Par") { getCaixa = '' } else { var caixa = temp; getCaixa = '' } }
				if (getPar == 'sim' && par == '') { if (temp == "alimentador") { getPar = '' } else { var par = temp; getPar = '' } }
				if (getDados == 'sim' && dados == '') { var dados = temp; getDados = ''; }
				if (getVoz == 'sim' && voz == '') { var voz = temp; getVoz = ''; }
				if (getRin == 'sim' && rin == '') { var rin = temp; getRin = ''; }
				if (getBandaLarga == 'sim' && bandaLarga == '') { var bandaLarga = temp; getBandaLarga = ''; }
				if (getErro == 'sim' && erro == '') { var erro = temp; getErro = ''; }

				if (temp == 'Arm\u00e1rio') { var getArmario = 'sim'; }
				if (temp == 'Porta') { var getPorta = 'sim'; }
				if (temp == 'Secund\u00e1rio') { var getSecTbs = 'sim'; }
				if (temp == 'Caixa') { var getCaixa = 'sim'; }
				if (temp == 'Par') { var getPar = 'sim'; }
				if (temp == 'Dados') { var getDados = 'sim'; }
				if (temp == 'Voz') { var getVoz = 'sim'; }
				if (temp == 'Rin') { var getRin = 'sim'; }
				if (temp == 'Banda Larga') { var getBandaLarga = 'sim'; }
				if (temp == 'ERRO') { var getErro = 'sim'; }

				/*Debug Log*/
				saida += '[' + d + '] - [' + temp + ']<br>';
			}
		}
		//pegar cidade e estado, isto veio do modelo antigo, passar a pegar esta informação no for acima
		var corpo = jQuery(tempDiv).find("table")
		var td = jQuery(corpo[11]).find('td');
		var estado = jQuery(td[16]).text().trim();
		var cidade = jQuery(td[17]).text().trim();
		//filtro geral

		//alert(texto);

		if (erro) {
			if (erro.length > 1) {
				document.getElementById('diagnostico_TBS').style.background = '#ffebe6';
				jQuery('#diagnostico_TBSc').html('<span class="vermelho">' + erro + '</span>');
			}
		} else {

			document.getElementById('diagnostico_TBS').style.background = '';
			jQuery('#diagnostico_TBSc').html(''
				+ '<div><span class="azul">' + estado + ' - ' + cidade + '</span></div>'
				+ '<div>Armário: ' + '<span id="painel-TBS-armario" class="verde cptxt">' + armario + '</span></div>'
				+ '<div>Porta: ' + '<span id="painel-TBS-porta" class="dados_ok cptxt">' + porta + '</span></div>'
				+ '<div style="display:none;">IMS ID: <span id="painel-IMS-ID"></span></div>'
				+ '<div>Secundário: ' + '<span id="painel-TBS-secundario" class="' + (secundarioTbs == "?" ? "dados_erro" : "verde") + ' cptxt">' + secundarioTbs + '</span></div>'
				+ '<div>Caixa: ' + '<span id="painel-TBS-caixa" class="' + (caixa == "?" ? "dados_erro" : "verde") + ' cptxt">' + caixa + '</span> Par <span id="painel-TBS-secundarioSagre" class="' + (par == "?" ? "dados_erro" : "verde") + '">' + par + '</span> (Sagre)</div>'
				+ '<div style="display:' + (bandaLarga ? "" : "none") + ';">'
				+ '<div>Voz	' + '<span id="painel-TBS-voz" class="dados_ok cptxt">' + voz + '</span></div>'
				+ '<div>Dados	' + '<span id="painel-TBS-dados" class="dados_ok cptxt">' + dados + '</span></div>'
				+ '<div>Rin	' + '<span id="painel-TBS-rin" class="verde cptxt">' + rin + '</span></div>'
				+ '</div>'
			);
			if (!jQuery('#notes_tbs').val()) { addChecklist('tbs') }
			if (jQuery('#autochecklist').prop('checked')) { addChecklist('tbs') }
			if (secundarioTbs) {
				if (par) {
					if (par != secundarioTbs) {
						jQuery('#painel-TBS-secundario').removeClass('verde');
						jQuery('#painel-TBS-secundarioSagre').removeClass('verde');
						jQuery('#painel-TBS-secundario').addClass('dados_erro');
						jQuery('#painel-TBS-secundarioSagre').addClass('dados_erro');
					}
				}
			}
			imsID(porta)
		}
		jQuery('#debug-manobra').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	} else {
		toastr.error('Manobra Única: Erro desconhecido ' + resposta.status);
		jQuery('#diagnostico_TBSc').html('Ocorreu um erro no manobra unica, provavelmente falha por lentidão');
	}

}



function filtroTBS_IMS(resposta) {
	if (resposta.status == 404) {
		toastr.warning('Manobra Única: Erro 400');
		var resposta = ''
			+ '<center><img src="chrome-extension://dehheadpmhimcoldleepicbogjngiikh/imgs/ajax-loader4.gif" /></center>'
			+ '<br>'
			+ '<center class="vermelho">Erro 404, recarregando Manobra Unica</center>'
			+ '<br>';
		jQuery('#diagnostico_TBSc').html(resposta)
		//Reinicia a sessão do manobra unica quando ela está expirada
		var request = jQuery.ajax({
			url: "http://appsagre.gvt.net.br/Manobraunica/Acesso?dado=usr",
			dataType: "text",
			type: "post"
		});
		request.always(function () {
			var trElementoClicado = document.getElementsByClassName('imsdbtr')[0]
			diagnosticoTbs({
				'modo': 'request',
				'instancia': trElementoClicado.getAttribute("data-instancia"),
				'bloquear': '#diagnostico_TBS',
				'destino': '#diagnostico_TBSc',
				'filtro': filtroTBS_IMS
			});
		});



	}
	else if (resposta.status == 500) {
		toastr.warning('Manobra Única: Erro 500');
		if (document.getElementById('imsdb-recursivo').checked == true) {
			//recursividade desabilitada aqui pois o manobra usa usa auht basic e reconsultar aqui seria falha critica (loop infinito)
			//imsdb_automation();
		}
		else { jQuery('#diagnostico_TBSc').html('<span class="vermelho">' + erro + '</span><br><span id="tbsPular" class="vermelho">IMSDB: pular [500]</span>') }

	}
	else if (resposta.status === 0) {
		toastr.warning('Manobra Única: Erro 0');
		var resposta = "Erro 0";




		if (document.getElementById('imsdb-recursivo').checked == true) {
			var trElementoClicado = document.getElementsByClassName('imsdbtr')[0]
			jQuery('#diagnostico_TBSc').html('<span class="vermelho">http error 0, retry recursivo ativado</span>')
			diagnosticoTbs({
				'modo': 'request',
				'instancia': trElementoClicado.getAttribute("data-instancia"),
				'bloquear': '#diagnostico_TBS',
				'destino': '#diagnostico_TBSc',
				'filtro': filtroTBS_IMS
			});
		}
		else {
			jQuery('#diagnostico_TBSc').html('<span class="vermelho">' + erro + '</span><br><span id="tbsPular" class="vermelho">IMSDB: pular</span>');
			if (jQuery('#painel-SAS-idway').text() == "revisar") {
				imsupdate('pular')
			}
		}




	}
	else if (resposta.status == 200) {
		//toastr.success('Manobra Única: 200 [OK]');
		var resposta = resposta.responseText;
		var resposta = resposta.replace(/src=/gi, "alt=");
		//Declarar as variaveis para evitar except
		var saida = '';
		var armario = '';
		var porta = '';
		var secundarioTbs = '';
		var caixa = '';
		var par = '';
		var secundarioSagre = '';
		var dados = '';
		var voz = '';
		var rin = '';
		var erro = '';

		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);

		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();

		var storeHTML = tempDiv.html();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getArmario == 'sim' && armario == '') { var armario = temp; getArmario = ''; }
				if (getPorta == 'sim' && porta == '') { var porta = temp; getPorta = ''; }
				if (getSecTbs == 'sim' && secundarioTbs == '') { var secundarioTbs = temp; getSecTbs = ''; }
				if (getCaixa == 'sim' && caixa == '') { var caixa = temp; getCaixa = ''; }
				if (getPar == 'sim' && par == '') { var par = temp; getPar = ''; }
				if (getDados == 'sim' && dados == '') { var dados = temp; getDados = ''; }
				if (getVoz == 'sim' && voz == '') { var voz = temp; getVoz = ''; }
				if (getRin == 'sim' && rin == '') { var rin = temp; getRin = ''; }
				if (getErro == 'sim' && erro == '') { var erro = temp; getErro = ''; }

				if (temp == 'Arm\u00e1rio') { var getArmario = 'sim'; }
				if (temp == 'Porta') { var getPorta = 'sim'; }
				if (temp == 'Secund\u00e1rio') { var getSecTbs = 'sim'; }
				if (temp == 'Caixa') { var getCaixa = 'sim'; }
				if (temp == 'Par') { var getPar = 'sim'; }
				if (temp == 'Dados') { var getDados = 'sim'; }
				if (temp == 'Voz') { var getVoz = 'sim'; }
				if (temp == 'Rin') { var getRin = 'sim'; }
				if (temp == 'ERRO') { var getErro = 'sim'; }

				/*Debug Log*/ // saida+='['+d+'] - ['+temp+']<br>';
			}
		}
		//pegar cidade e estado, isto veio do modelo antigo, passar a pegar esta informação no for acima
		var corpo = jQuery(tempDiv).find("table")
		var td = jQuery(corpo[11]).find('td');
		var estado = jQuery(td[16]).text().trim();
		var cidade = jQuery(td[17]).text().trim();
		//filtro geral

		//alert(texto);

		if (erro) {
			if (erro.length > 1) {
				document.getElementById('diagnostico_TBS').style.background = '#ffebe6';
				jQuery('#diagnostico_TBSc').html('<span class="vermelho">' + erro + '</span><br><span id="tbsPular" class="vermelho">IMSDB: pular</span>');

				imsupdate('pular')
			}
		} else {
			document.getElementById('diagnostico_TBS').style.background = '';
			jQuery('#diagnostico_TBSc').html(''
				+ '<span id="painel-TBS-cidade" class="azul cptxt">' + estado + ' - ' + cidade + '</span>'
				+ '<br>Armário: ' + '<span id="painel-TBS-armario" class="verde cptxt">' + armario + '</span>'
				+ '<br>Porta: ' + '<span id="painel-TBS-porta" class="dados_ok cptxt">' + porta + '</span>'
				+ '<br>Secundário: ' + '<span id="painel-TBS-secundario" class="verde cptxt">' + secundarioTbs + '</span>'
				+ '<br>Caixa: ' + '<span id="painel-TBS-secundariosagre" class="verde cptxt">' + caixa + '</span> Par <span class="verde">' + par + '</span> (Sagre)'
				+ '<br>Voz	' + '<span id="painel-TBS-voz" class="dados_ok cptxt">' + voz + '</span>'
				+ '<br>Dados	' + '<span id="painel-TBS-dados" class="dados_ok cptxt">' + dados + '</span>'
				+ '<br>Rin	' + '<span id="painel-TBS-rin"  class="verde cptxt">' + rin + '</span>'
			);
			imsupdate();
		}
		jQuery('#debug-manobra').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	} else {
		toastr.error('Manobra Única: Erro desconhecido ' + resposta.status);
		jQuery('#diagnostico_TBSc').html('Ocorreu um erro no manobra unica, provavelmente falha por lentidão');
	}

}








//===========================================================================
//Diagnostico SAS
/*
diagnosticoSas({
	'modo':'request',
	'input':'#instancia',
	'instancia':'',
	'bloquear':'#diagnostico_TBS',
	'destino':'#diagnostico_TBSc',
	'filtro':filtroTBS
});
*/
function diagnosticoSas(opt) {
	if (opt) {
		if (opt['bloquear']) { var bloquearElemento = opt['bloquear']; }
		if (opt['destino']) { var popularElemento = opt['destino']; }
		if (opt['instancia']) { var instancia = opt['instancia'] } else { var instancia = jQuery('#instancia').val(); }
		if (opt['input']) { var instancia = jQuery(opt.input).val(); }



		if (opt['modo'] == 'request') {
			if (window.xRequests.sas) { window.xRequests.sas.abort() }
			var reqStart = Date.now();
			blockUI(jQuery(bloquearElemento));
			var url = "http://gvtapp/sas/configurar";
			window.xRequests.sas = jQuery.ajax({
				url: url,
				dataType: "text",
				type: "post",
				data: {
					"cmd": "consultar",
					"itemCodeId": "",
					"rn2_": "",
					"telefoneDMS": instancia,
					"emuladorTelNet": "",
					"searchType": "Consultar"
				}
			});
			window.xRequests.sas.done(function () { console.log('SAS : Sucesso'); });
			window.xRequests.sas.fail(function (xhr, status, errorThrown) { console.log('SAS : Falha'); });
			window.xRequests.sas.always(function () {
				var reqEnd = Date.now();
				var reqTime = reqEnd - reqStart;
				log_request('SAS: ' + instancia + ' | ' + xDate(8) + ' | Inicio:' + reqStart + ' | Fim:' + reqEnd + ' | Tempo:' + reqTime + 'ms | Status:' + window.xRequests.sas.status, xRequests.tbs.status);
				opt.filtro(window.xRequests.sas, opt);
				unblockUI(jQuery(bloquearElemento))

			});
		}
		else if (opt['modo'] == 'response') {
			//response desativado
		}
		else { }
	} else { console.error('Erro, argumentos invalidos') }
}

//===========================================================================
//Tive de criar uma função separada para binada para resolver um problema de compatibilidade RARO
function diagnosticoSasBinada(opt) {
	if (opt) {
		if (opt['bloquear']) { var bloquearElemento = opt['bloquear']; }
		if (opt['destino']) { var popularElemento = opt['destino']; }
		if (opt['instancia']) { var instancia = opt['instancia'] } else { var instancia = jQuery('#instancia').val(); }
		if (opt['input']) { var instancia = jQuery(opt.input).val(); }

		if (opt['modo'] == 'request') {
			if (xRequests.sasB) { xRequests.sasB.abort() }
			blockUI(jQuery(bloquearElemento));
			var reqStart = Date.now();
			var url = "http://gvtapp/sas/configurar";
			window.xRequests.sasB = jQuery.ajax({
				url: url,
				dataType: "text",
				type: "post",
				data: {
					"cmd": "consultar",
					"itemCodeId": "",
					"rn2_": "",
					"telefoneDMS": instancia,
					"emuladorTelNet": "",
					"searchType": "Consultar"
				}
			});
			xRequests.sasB.done(function () { console.log('SAS : Sucesso'); });
			xRequests.sasB.fail(function (xhr, status, errorThrown) { console.log('SAS : Falha'); });
			xRequests.sasB.always(function () {
				opt.filtro(xRequests.sasB, opt); unblockUI(jQuery(bloquearElemento))
				var reqEnd = Date.now();
				var reqTime = reqEnd - reqStart;
				log_request('SAS-b: ' + instancia + ' | ' + xDate(8) + ' | Inicio:' + reqStart + ' | Fim:' + reqEnd + ' | Tempo:' + reqTime + 'ms | Status:' + xRequests.sas.status, xRequests.tbs.status);

			});
		}
		else if (opt['modo'] == 'response') {
			//response desativado
		}
		else { }
	} else { console.error('Erro, argumentos invalidos') }
}

//===========================================================================

//Filtros SAS
function filtroSAS(resposta, opt) {
	if (resposta.status == 404) {
		//ratativa de erro 
	}
	else if (resposta.status == 500) {
		//tratativa de erro
	}
	else if (resposta.status === 0) {
		//tratativa de erro
		toastr.warning('SAS: Consulta Cancelada')
	}
	else if (resposta.status == 200) {
		var resposta = resposta.responseText;
		var resposta = resposta.replace(/src=/gi, "alt=");

		//reseta variaveis antes de usa-las
		var debugMode = "sim";
		var instancia = jQuery('#instancia').val();
		var saida = '';
		var central = '';
		var tecnologia = ''; // TDM/H248 , IMS/H248 , IMS/V5.2 , IMS/SIP
		var ip = '';
		var localidade = '';
		var tdmDn = '';
		var facilidadeEncontrada = "";
		var servicos = "";
		var equip = '';
		var T_len = '';
		var custgrp = '';
		var imsuSip = '';
		var imsuTel = '';
		var aninfo = '';
		var v5iid = '';
		var eid = '';
		var edesc = '';
		var subgrp = '';
		var ncos = '';
		var tid = '';
		var l3addr = '';
		var T_options = '';
		var S_registro = '';
		var ipControlador = '';
		var ipcolor = 'verde';
		var ipcompact = '';
		var eventoAtivo = '';
		var eMassPAYTV = '';
		var desigBanda = '';
		var sasErro = '';
		var login = '';
		var senha = '';
		var entrar = '';

		//coloca o conteudo da resposta em uma div não implementada
		tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//.indexOf('LINE EQUIPMENT NUMBER:')
		var texto = tempDiv.text();

		// # Tratamento de evento massivos


		var eMassivosH = jQuery(tempDiv).find('#tabEvento').html()
		var eMassivosT = jQuery(tempDiv).find('#tabEvento').text()
		jQuery('#eventosMassivosSAS-c').html(eMassivosH)


		document.getElementById('eventoMassivoMSG').style.display = 'none';
		document.getElementById('eventoMassivoMSG').innerHTML = '';
		var existeMassivaSAS = '';

		var eMassTDs = jQuery(tempDiv).find('td')
		for (eMassCtr = 0; eMassCtr < eMassTDs.length; eMassCtr++) {
			if (eMassTDs[eMassCtr].getAttribute('onmouseover')) {
				if (eMassTDs[eMassCtr].getAttribute('onmouseover').indexOf('PayTV') > -1) { var eMassPAYTV = 'sim'; } else { var eMassPAYTV = 'nao' }
				if (eMassTDs[eMassCtr].getAttribute('onmouseover').indexOf('overlib') > -1) {
					document.getElementById('eventoMassivoMSG').style.display = 'block';
					document.getElementById('eventoMassivoMSG').innerHTML = ''
						+ '<p> <strong>Detectado:</strong> </p> '
						+ '<p> ' + eMassTDs[eMassCtr].getAttribute('onmouseover').replace(/overlib\(\'|\'\); return true;/gi, '') + ' </p> ';
					var existeMassivaSAS = 'detectado';
				}
			}
		}
		if (existeMassivaSAS == 'detectado' && eMassPAYTV != 'sim') {
			jQuery('#eventosMassivosSAS').modal('show');
		}




		var tdmCriado = texto.indexOf('LINE EQUIPMENT NUMBER:');
		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getTecnologia == 'sim' && tecnologia == '') { var tecnologia = temp; getTecnologia = ''; }
				if (getCentral == 'sim' && central == '') { var central = temp; getCentral = ''; }
				if (getIP == 'sim' && ip == '') { var ip = temp; getIP = ''; }
				if (getLocalidade == 'sim' && localidade == '') { var localidade = temp; getLocalidade = ''; }
				if (getImsuSip == 'sim' && imsuSip == '') { var imsuSip = temp; getImsuSip = ''; }
				if (getImsuTel == 'sim' && imsuTel == '') { var imsuTel = temp; getImsuTel = ''; }
				if (getAninfo == 'sim' && aninfo == '') { var aninfo = temp; getAninfo = ''; }
				if (getV5iid == 'sim' && v5iid == '') { var v5iid = temp; getV5iid = ''; }
				if (getEid == 'sim' && eid == '') { var eid = temp; getEid = ''; }
				if (getEdesc == 'sim' && edesc == '') { var edesc = temp; getEdesc = ''; }
				if (getTid == 'sim' && tid == '') { var tid = temp; getTid = ''; }
				if (getL3addr == 'sim' && l3addr == '') { var l3addr = temp; getL3addr = ''; }
				if (getOptions == 'sim' && T_options == '') { var T_options = temp; getOptions = ''; }
				if (getIpControlador == 'sim' && ipControlador == '') { var ipControlador = temp; getIpControlador = ''; }
				if (getRegistroSip == 'sim' && S_registro == '') { var S_registro = temp; getRegistroSip = ''; }
				if (getEventoAtivo == 'sim' && eventoAtivo == '') { var eventoAtivo = temp; getEventoAtivo = ''; }
				if (getDesigBanda == 'sim' && desigBanda == '') { var desigBanda = temp; getDesigBanda = ''; }

				if (temp == 'central/voz:') { var getTecnologia = 'sim'; }
				if (temp == 'Central:') { var getCentral = 'sim'; }
				if (temp == 'IP de Acesso:') { var getIP = 'sim'; }
				if (temp == 'Localidade:') { var getLocalidade = 'sim'; }
				if (temp == 'IMSUSERST (SIP)') { var getImsuSip = 'sim'; }
				if (temp == 'IMSUSERST (TEL)') { var getImsuTel = 'sim'; }
				if (temp == 'ANINFO') { var getAninfo = 'sim'; }
				if (temp == 'V5IID') { var getV5iid = 'sim'; }
				if (temp == 'EID') { var getEid = 'sim'; }
				if (temp == 'EDESC') { var getEdesc = 'sim'; }
				if (temp == 'TID') { var getTid = 'sim'; }
				if (temp == 'L3ADDR') { var getL3addr = 'sim'; }
				if (temp == 'OPTIONS:') { var getOptions = 'sim'; }
				if (temp == 'Registro IMS:') { var getRegistroSip = 'sim'; }
				if (temp == 'IP Controlador:') { var getIpControlador = 'sim'; }
				if (temp == 'Nenhum evento') { var getEventoAtivo = 'sim'; }
				if (temp == 'Banda Larga Associada:') { var getDesigBanda = 'sim'; }

				if (temp == 'Numero não configurado para Switch Huawei') { var sasErro = 'Numero não configurado para Switch Huawei. (Efetuar Manobra Massiva)'; }


				//Banda Larga Associada:


				if (temp.indexOf('DN:          ') > -1) { var equipNc = temp.replace('DN:', '').trim() }
				if (temp.indexOf('DN:') > -1) { var T_dn = temp.replace('DN:', '').trim() }
				if (temp.indexOf('SNPA:') > -1) { var T_snpa = temp.replace('SNPA:', '').split('SIG:')[0].trim() }
				if (temp.indexOf('LINE EQUIPMENT NUMBER:') > -1) { var T_len = temp.split(':')[1].trim(); }
				if (temp.indexOf('CUSTGRP:') > -1) { var T_cust = temp; }

				if (temp.indexOf('Login:') > -1) { var login = 'sim' }
				if (temp.indexOf('Senha:') > -1) { var senha = 'sim' }
				if (temp.indexOf('Entrar') > -1) { var entrar = 'sim' }



				/*Debug Log*/
				if (debugMode == 'sim') {
					saida += '[' + d + '] - [' + temp + ']<br>';
				}

			}
		}
		if (eventoAtivo == 'ativo.') {
			jQuery('#massivaSasStatus').html('<span name="MostrarEventoMassivoSAS" style="cursor:pointer;" class="label label2 label-success">Nao</span>');
		} else {
			jQuery('#massivaSasStatus').html('<span name="MostrarEventoMassivoSAS" title="Algo está diferente: Verifique no SAS ou no Wise se existe evento massivo" style="cursor:pointer;" class="label label2 label-warning2">Ver</span>');
		}
		if (tecnologia == 'TDM/H248') {
			var vswIp = getIpTDM(central)
			if (vswIp) {
				if (vswIp.length > 5) {
					if (vswIp != ip) { var ip = vswIp; var ipcolor = 'azul2' }
					if (ip.split('.')[3] == '80') { var ipcompact = ' <span class="laranja">(compact)</span> ' } else { var ipcompact = '' }
				}
			}
			if (tdmCriado < 0) {
				// nãoe executa caso seja TDM e não esteja criado
			}
			else {
				var equip = T_snpa + T_dn;//quando apresentar numero de equipamento errado, corrigir nesta linha (snpa+dn)
				if (instancia == equip) { equip = 'Nao possui' } else { }
				var T_cust = T_cust.replace('CUSTGRP:', '').replace('SUBGRP:', ';').replace('NCOS:', ';');
				var T_cust = T_cust.split(';');
				var custgrp = T_cust[0].trim();
				var subgrp = T_cust[1].trim();
				var ncos = T_cust[2].trim();
			}
		}

		//...
		//if(desigBanda){var desigBanda=desigBanda}else{desigBanda=''}
		var sasFinal = '';
		var sasGeral = ''
			+ 'Central: <span id="painel-SAS-central" class="verde">' + central + '</span><br>'
			+ 'Localidade: <span id="painel-SAS-localidade" class="verde">' + localidade + '</span><br>'
			+ 'Tecnologia: <span id="painel-SAS-tecnologia" class="verde">' + tecnologia + '</span><br>'
		var sasTdm = ''
			+ 'IP da Central: <span  id="painel-SAS-ipswitch"  class="' + ipcolor + ' cptxt">' + ip + '</span>' + ipcompact + '<br>'
			+ 'Equipamento: <span  id="painel-SAS-equip"  class="verde cptxt">' + equip + '</span><br>'
			+ 'Facilidade: <span  id="painel-SAS-len"  class="dados_ok cptxt">' + T_len + '</span><br>'
			+ 'Serviços: <span  id="painel-SAS-options"  class="verde cptxt">' + T_options + '</span><br>'
			+ 'Custgrp: <span  id="painel-SAS-custgrp" class="verde cptxt">' + custgrp + '</span> '
			+ 'Subgrp: <span  id="painel-SAS-subgrp" class="verde">' + subgrp + '</span> '
			+ 'Ncos: <span  id="painel-SAS-ncos" class="verde">' + ncos + '</span><br>';
		var sas248 = ''
			+ 'IP Controlador: <span  id="painel-SAS-ipcontrolador" class="verde cptxt" style="font-weight:bold;">' + ipControlador + '</span><br>'
			+ 'imsuSip: <span  id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span  id="painel-SAS-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>'
			+ 'aninfo: <span  id="painel-SAS-aninfo" class="verde cptxt">' + aninfo + '</span><br>'
			+ 'eid: <span  id="painel-SAS-eid" class="verde cptxt">' + eid + '</span><br>'
			+ 'edesc: <span  id="painel-SAS-edesc" class="verde cptxt">' + edesc + '</span><br>'
			+ 'Porta: <span  id="painel-SAS-porta" class="verde cptxt">' + tid + '</span><br>';
		var sasV5 = ''
			+ 'IP Controlador: <span  id="painel-SAS-ipcontrolador" class="verde cptxt">' + ipControlador + '</span><br>'
			+ 'imsuSip: <span  id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span  id="painel-SAS-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>'
			+ 'aninfo: <span id="painel-SAS-aninfo" class="verde cptxt">' + aninfo + '</span><br>'
			+ 'v5iid: <span  id="painel-SAS-v5iid" class="verde cptxt">' + v5iid + '</span><br>'
			+ 'Porta: <span  id="painel-SAS-porta" class="verde cptxt">' + l3addr + '</span><br>';
		var sasSip = ''
			+ 'Registro: <span id="painel-SAS-registrosip"  class="verde">' + S_registro + '</span><br>'
			+ 'imsuSip: <span  id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span  id="painel-SAS-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>'


		var sasIms = ''
			+ '<span class="vermelho"><br>Telefone IMS não configurado<br></span><br>'


		//TDM/H248 , IMS/H248 , IMS/V5.2 , IMS/SIP
		if (tecnologia == 'TDM/H248') {
			if (tdmCriado < 0) {
				var sasFinal = sasGeral
					+ 'IP da Central: <span class="verde cptxt">' + ip + '</span><br>'
					+ 'DN: <span class="verde cptxt">' + equipNc + '</span><br>'
					+ '<span class="vermelho"><br>Telefone TDM não configurado<br></span><br>';
			}
			else {
				var sasFinal = sasGeral + sasTdm;
			}

		}
		if (tecnologia == 'IMS/H248') { var sasFinal = sasGeral + sas248 }
		if (tecnologia == 'IMS/V5.2') { var sasFinal = sasGeral + sasV5 }
		if (tecnologia == 'IMS/SIP') { var sasFinal = sasGeral + sasSip }
		if (tecnologia == 'IMS') { var sasFinal = sasGeral + sasIms }
		if (login == 'sim' && senha == 'sim' && entrar == 'sim') {
			//If keeper ativado:
			keeper_sas_login({
				'modo': 'retry',
				'callback': diagnosticoSas,
				'databack': {
					'modo': 'request',
					'input': '#instancia',
					'bloquear': '#diagnostico_SAS',
					'destino': '#diagnostico_SASc',
					'filtro': filtroSAS
				}
			});

			//---
			document.getElementById('diagnostico_SAS').style.background = '#ffffe6';
			var sasFinal = '<br><br><center><span class="vermelho">SAS Deslogado</span></center><br><center>Faça login na página do SAS, ou caso queira usar relogin automatico, ative o Keeper</center><br>'
		} else {
			document.getElementById('diagnostico_SAS').style.background = '';
		}


		jQuery(opt.destino).html('<div style="white-space:pre-wrap;">'
			+ sasFinal
			+ '</div>');

		if (sasErro) {
			document.getElementById('diagnostico_SASc').innerHTML = ''
				+ '<div class="vermelho">' + sasErro + '</div>'
				+ document.getElementById('diagnostico_SASc').innerHTML + ''
		}

		if (jQuery('#notes_sas')) {
			if (!jQuery('#notes_sas').val()) {
				addChecklist('sas')
			}

		}
		if (jQuery('#autochecklist').prop('checked')) { addChecklist('sas') }


		if (debugMode == 'sim') {
			jQuery('#debug-sas').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			//jQuery('#modal-3').modal('show');
		}

	}
	else { console.log(resposta) }

}



function filtroSASbinada(resposta, opt) {
	if (resposta.status == 404) {
		//ratativa de erro 
	}
	else if (resposta.status == 500) {
		//tratativa de erro
	}
	else if (resposta.status === 0) {
		//tratativa de erro
		toastr.warning('SAS: Consulta Binada Cancelada');
	}
	else if (resposta.status == 200) {
		var resposta = resposta.responseText;
		var resposta = resposta.replace(/src=/gi, "alt=");

		//reseta variaveis antes de usa-las
		var debugMode = "sim";
		var instancia = jQuery('#instancia').val();
		var saida = '';
		var central = '';
		var tecnologia = ''; // TDM/H248 , IMS/H248 , IMS/V5.2 , IMS/SIP
		var ip = '';
		var localidade = '';
		var tdmDn = '';
		var facilidadeEncontrada = "";
		var servicos = "";
		var equip = '';
		var T_len = '';
		var custgrp = '';
		var imsuSip = '';
		var imsuTel = '';
		var aninfo = '';
		var v5iid = '';
		var eid = '';
		var edesc = '';
		var subgrp = '';
		var ncos = '';
		var tid = '';
		var l3addr = '';
		var T_options = '';
		var S_registro = '';
		var ipControlador = '';
		var ipcolor = 'verde';
		var ipcompact = '';
		var eventoAtivo = '';
		var eMassPAYTV = '';
		var sasErro = '';
		var login = '';
		var senha = '';
		var entrar = '';

		//coloca o conteudo da resposta em uma div não implementada
		tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//.indexOf('LINE EQUIPMENT NUMBER:')
		var texto = tempDiv.text();

		// # Tratamento de evento massivos


		var eMassivosH = jQuery(tempDiv).find('#tabEvento').html()
		var eMassivosT = jQuery(tempDiv).find('#tabEvento').text()
		jQuery('#eventosMassivosSAS-c').html(eMassivosH)


		document.getElementById('eventoMassivoMSG').style.display = 'none';
		document.getElementById('eventoMassivoMSG').innerHTML = '';
		var existeMassivaSAS = '';

		var eMassTDs = jQuery(tempDiv).find('td')
		for (eMassCtr = 0; eMassCtr < eMassTDs.length; eMassCtr++) {
			if (eMassTDs[eMassCtr].getAttribute('onmouseover')) {
				if (eMassTDs[eMassCtr].getAttribute('onmouseover').indexOf('PayTV') > -1) { var eMassPAYTV = 'sim'; } else { var eMassPAYTV = 'nao' }
				if (eMassTDs[eMassCtr].getAttribute('onmouseover').indexOf('overlib') > -1) {
					document.getElementById('eventoMassivoMSG').style.display = 'block';
					document.getElementById('eventoMassivoMSG').innerHTML = ''
						+ '<p> <strong>Detectado:</strong> </p> '
						+ '<p> ' + eMassTDs[eMassCtr].getAttribute('onmouseover').replace(/overlib\(\'|\'\); return true;/gi, '') + ' </p> ';
					var existeMassivaSAS = 'detectado';
				}
			}
		}
		if (existeMassivaSAS == 'detectado' && eMassPAYTV != 'sim') {
			jQuery('#eventosMassivosSAS').modal('show');
		}




		var tdmCriado = texto.indexOf('LINE EQUIPMENT NUMBER:');
		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getTecnologia == 'sim' && tecnologia == '') { var tecnologia = temp; getTecnologia = ''; }
				if (getCentral == 'sim' && central == '') { var central = temp; getCentral = ''; }
				if (getIP == 'sim' && ip == '') { var ip = temp; getIP = ''; }
				if (getLocalidade == 'sim' && localidade == '') { var localidade = temp; getLocalidade = ''; }
				if (getImsuSip == 'sim' && imsuSip == '') { var imsuSip = temp; getImsuSip = ''; }
				if (getImsuTel == 'sim' && imsuTel == '') { var imsuTel = temp; getImsuTel = ''; }
				if (getAninfo == 'sim' && aninfo == '') { var aninfo = temp; getAninfo = ''; }
				if (getV5iid == 'sim' && v5iid == '') { var v5iid = temp; getV5iid = ''; }
				if (getEid == 'sim' && eid == '') { var eid = temp; getEid = ''; }
				if (getEdesc == 'sim' && edesc == '') { var edesc = temp; getEdesc = ''; }
				if (getTid == 'sim' && tid == '') { var tid = temp; getTid = ''; }
				if (getL3addr == 'sim' && l3addr == '') { var l3addr = temp; getL3addr = ''; }
				if (getOptions == 'sim' && T_options == '') { var T_options = temp; getOptions = ''; }
				if (getIpControlador == 'sim' && ipControlador == '') { var ipControlador = temp; getIpControlador = ''; }
				if (getRegistroSip == 'sim' && S_registro == '') { var S_registro = temp; getRegistroSip = ''; }
				if (getEventoAtivo == 'sim' && eventoAtivo == '') { var eventoAtivo = temp; getEventoAtivo = ''; }

				if (temp == 'central/voz:') { var getTecnologia = 'sim'; }
				if (temp == 'Central:') { var getCentral = 'sim'; }
				if (temp == 'IP de Acesso:') { var getIP = 'sim'; }
				if (temp == 'Localidade:') { var getLocalidade = 'sim'; }
				if (temp == 'IMSUSERST (SIP)') { var getImsuSip = 'sim'; }
				if (temp == 'IMSUSERST (TEL)') { var getImsuTel = 'sim'; }
				if (temp == 'ANINFO') { var getAninfo = 'sim'; }
				if (temp == 'V5IID') { var getV5iid = 'sim'; }
				if (temp == 'EID') { var getEid = 'sim'; }
				if (temp == 'EDESC') { var getEdesc = 'sim'; }
				if (temp == 'TID') { var getTid = 'sim'; }
				if (temp == 'L3ADDR') { var getL3addr = 'sim'; }
				if (temp == 'OPTIONS:') { var getOptions = 'sim'; }
				if (temp == 'Registro IMS:') { var getRegistroSip = 'sim'; }
				if (temp == 'IP Controlador:') { var getIpControlador = 'sim'; }
				if (temp == 'Nenhum evento') { var getEventoAtivo = 'sim'; }

				if (temp == 'Numero não configurado para Switch Huawei') { var sasErro = 'Numero não configurado para Switch Huawei. (Efetuar Manobra Massiva)'; }


				//Banda Larga Associada:


				if (temp.indexOf('DN:          ') > -1) { var equipNc = temp.replace('DN:', '').trim() }
				if (temp.indexOf('DN:') > -1) { var T_dn = temp.replace('DN:', '').trim() }
				if (temp.indexOf('SNPA:') > -1) { var T_snpa = temp.replace('SNPA:', '').split('SIG:')[0].trim() }
				if (temp.indexOf('LINE EQUIPMENT NUMBER:') > -1) { var T_len = temp.split(':')[1].trim(); }
				if (temp.indexOf('CUSTGRP:') > -1) { var T_cust = temp; }

				if (temp.indexOf('Login:') > -1) { var login = 'sim' }
				if (temp.indexOf('Senha:') > -1) { var senha = 'sim' }
				if (temp.indexOf('Entrar') > -1) { var entrar = 'sim' }



				/*Debug Log*/
				if (debugMode == 'sim') {
					saida += '[' + d + '] - [' + temp + ']<br>';
				}

			}
		}
		if (eventoAtivo == 'ativo.') {
			jQuery('#massivaSasStatus').html('<span name="MostrarEventoMassivoSAS" style="cursor:pointer;" class="label label2 label-success">Nao</span>');
		} else {
			jQuery('#massivaSasStatus').html('<span name="MostrarEventoMassivoSAS" title="Algo está diferente: Verifique no SAS ou no Wise se existe evento massivo" style="cursor:pointer;" class="label label2 label-warning2">Ver</span>');
		}
		if (tecnologia == 'TDM/H248') {
			var vswIp = getIpTDM(central)
			if (vswIp) {
				if (vswIp.length > 5) {
					if (vswIp != ip) { var ip = vswIp; var ipcolor = 'azul2' }
					if (ip.split('.')[3] == '80') { var ipcompact = ' <span class="laranja">(compact)</span> ' } else { var ipcompact = '' }
				}
			}
			if (tdmCriado < 0) {
				// nãoe executa caso seja TDM e não esteja criado
			}
			else {
				var equip = T_snpa + T_dn;//quando apresentar numero de equipamento errado, corrigir nesta linha (snpa+dn)
				if (instancia == equip) { equip = 'Nao possui' } else { }
				var T_cust = T_cust.replace('CUSTGRP:', '').replace('SUBGRP:', ';').replace('NCOS:', ';');
				var T_cust = T_cust.split(';');
				var custgrp = T_cust[0].trim();
				var subgrp = T_cust[1].trim();
				var ncos = T_cust[2].trim();
			}
		}

		//...

		var sasFinal = '';
		var sasGeral = ''
			+ 'Central: <span id="painel-SASb-central" class="verde cptxt">' + central + '</span><br>'
			+ 'Localidade: <span id="painel-SASb-localidade" class="verde cptxt">' + localidade + '</span><br>'
			+ 'Tecnologia: <span id="painel-SASb-tecnologia" class="verde">' + tecnologia + '</span><br>'
		var sasTdm = ''
			+ 'IP da Central: <span  id="painel-SASb-ipswitch"  class="' + ipcolor + ' cptxt">' + ip + '</span>' + ipcompact + '<br>'
			+ 'Equipamento: <span  id="painel-SASb-equip"  class="verde cptxt">' + equip + '</span><br>'
			+ 'Facilidade: <span  id="painel-SASb-len"  class="dados_ok cptxt">' + T_len + '</span><br>'
			+ 'Serviços: <span  id="painel-SASb-options"  class="verde cptxt">' + T_options + '</span><br>'
			+ 'Custgrp: <span  id="painel-SASb-custgrp" class="verde cptxt">' + custgrp + '</span> '
			+ 'Subgrp: <span  id="painel-SASb-subgrp" class="verde">' + subgrp + '</span> '
			+ 'Ncos: <span  id="painel-SASb-ncos" class="verde">' + ncos + '</span><br>';
		var sas248 = ''
			+ 'IP Controlador: <span  id="painel-SASb-ipcontrolador" class="verde cptxt">' + ipControlador + '</span><br>'
			+ 'imsuSip: <span  id="painel-SASb-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span  id="painel-SASb-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>'
			+ 'aninfo: <span  id="painel-SASb-aninfo" class="verde cptxt">' + aninfo + '</span><br>'
			+ 'eid: <span  id="painel-SASb-eid" class="verde cptxt">' + eid + '</span><br>'
			+ 'edesc: <span  id="painel-SASb-edesc" class="verde cptxt">' + edesc + '</span><br>'
			+ 'Porta: <span  id="painel-SAS-porta" class="verde cptxt">' + tid + '</span><br>';
		var sasV5 = ''
			+ 'IP Controlador: <span  id="painel-SAS-ipcontrolador" class="verde cptxt">' + ipControlador + '</span><br>'
			+ 'imsuSip: <span  id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span  id="painel-SAS-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>'
			+ 'aninfo: <span id="painel-SAS-aninfo" class="verde cptxt">' + aninfo + '</span><br>'
			+ 'v5iid: <span  id="painel-SAS-v5iid" class="verde cptxt">' + v5iid + '</span><br>'
			+ 'Porta: <span  id="painel-SAS-porta" class="verde cptxt">' + l3addr + '</span><br>';
		var sasSip = ''
			+ 'Registro: <span id="painel-SAS-registrosip"  class="verde">' + S_registro + '</span><br>'
			+ 'imsuSip: <span  id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span  id="painel-SAS-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>';
		var sasIms = ''
			+ '<span class="vermelho"><br>Telefone IMS não configurado<br></span><br>'


		//TDM/H248 , IMS/H248 , IMS/V5.2 , IMS/SIP
		if (tecnologia == 'TDM/H248') {
			if (tdmCriado < 0) {
				var sasFinal = sasGeral
					+ 'IP da Central: <span class="verde cptxt">' + ip + '</span><br>'
					+ 'DN: <span class="verde cptxt">' + equipNc + '</span><br>'
					+ '<span class="vermelho"><br>Telefone TDM não configurado<br></span><br>';
			}
			else {
				var sasFinal = sasGeral + sasTdm;
			}

		}
		if (tecnologia == 'IMS/H248') { var sasFinal = sasGeral + sas248 }
		if (tecnologia == 'IMS/V5.2') { var sasFinal = sasGeral + sasV5 }
		if (tecnologia == 'IMS/SIP') { var sasFinal = sasGeral + sasSip }
		if (tecnologia == 'IMS') { var sasFinal = sasGeral + sasIms }
		if (login == 'sim' && senha == 'sim' && entrar == 'sim') {
			//If keeper ativado:
			keeper_sas_login('retry');
			keeper_sas('request');
			setTimeout(function () {
				diagnosticoSas({
					'modo': 'request',
					'input': '#instancia',
					'bloquear': '#diagnostico_SAS',
					'destino': '#diagnostico_SASc',
					'filtro': filtroSASbinada
				});
			}, 100)
			//---
			document.getElementById('diagnostico_SAS').style.background = '#ffffe6';
			var sasFinal = '<br><br><center><span class="vermelho">SAS Deslogado</span></center><br><center>Faça login na página do SAS, ou caso queira usar relogin automatico, ative o Keeper</center><br>'
		} else {
			document.getElementById('diagnostico_SAS').style.background = '';
		}


		jQuery(opt.destino).html('<div style="white-space:pre-wrap;">'
			+ sasFinal
			+ '</div>');

		if (sasErro) {
			document.getElementById('diagnostico_SASc').innerHTML = ''
				+ '<div class="vermelho">' + sasErro + '</div>'
				+ document.getElementById('diagnostico_SASc').innerHTML + ''
		}

		if (jQuery('#notes_sas')) {
			if (!jQuery('#notes_sas').val()) {
				addChecklist('sas')
			}

		}
		if (jQuery('#autochecklist').prop('checked')) { addChecklist('sas') }


		if (debugMode == 'sim') {
			jQuery('#debug-sas').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			//jQuery('#modal-3').modal('show');
		}

	}
	else { }

}



//	telnet=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();




function filtroSAS_IMS(resposta) {
	console.log('IMS SAS filter')
	if (resposta.status == 200) {

		var resposta = resposta.responseText;
		var resposta = resposta.replace(/src=/gi, "alt=");

		//reseta variaveis antes de usa-las
		var debugMode = "sim";
		var sHinstancia = '';
		var saida = '';
		var central = '';
		var tecnologia = ''; // TDM/H248 , IMS/H248 , IMS/V5.2 , IMS/SIP
		var ip = '';
		var localidade = '';
		var tdmDn = '';
		var facilidadeEncontrada = "";
		var servicos = "";
		var equip = '';
		var T_len = '';
		var custgrp = '';
		var imsuSip = '';
		var imsuTel = '';
		var aninfo = '';
		var v5iid = '';
		var eid = '';
		var edesc = '';
		var subgrp = '';
		var ncos = '';
		var tid = '';
		var l3addr = '';
		var T_options = '';
		var S_registro = '';
		var eventoAtivo = '';
		var login = '';
		var senha = '';
		var entrar = '';

		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//.indexOf('LINE EQUIPMENT NUMBER:')
		var texto = tempDiv.text();
		var tdmCriado = texto.indexOf('LINE EQUIPMENT NUMBER:');
		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getTecnologia == 'sim' && tecnologia == '') { var tecnologia = temp; getTecnologia = ''; }
				if (getCentral == 'sim' && central == '') { var central = temp; getCentral = ''; }
				if (getIP == 'sim' && ip == '') { var ip = temp; getIP = ''; }
				if (getLocalidade == 'sim' && localidade == '') { var localidade = temp; getLocalidade = ''; }
				if (getImsuSip == 'sim' && imsuSip == '') { var imsuSip = temp; getImsuSip = ''; }
				if (getImsuTel == 'sim' && imsuTel == '') { var imsuTel = temp; getImsuTel = ''; }
				if (getAninfo == 'sim' && aninfo == '') { var aninfo = temp; getAninfo = ''; }
				if (getV5iid == 'sim' && v5iid == '') { var v5iid = temp; getV5iid = ''; }
				if (getEid == 'sim' && eid == '') { var eid = temp; getEid = ''; }
				if (getEdesc == 'sim' && edesc == '') { var edesc = temp; getEdesc = ''; }
				if (getTid == 'sim' && tid == '') { var tid = temp; getTid = ''; }
				if (getL3addr == 'sim' && l3addr == '') { var l3addr = temp; getL3addr = ''; }
				if (getHinstancia == 'sim' && sHinstancia == '') { var sHinstancia = temp; getHinstancia = ''; }
				if (getOptions == 'sim' && T_options == '') { var T_options = temp; getOptions = ''; }
				if (getRegistroSip == 'sim' && S_registro == '') { var S_registro = temp; getRegistroSip = ''; }
				if (getEventoAtivo == 'sim' && eventoAtivo == '') { var eventoAtivo = temp; getEventoAtivo = ''; }

				if (temp == 'central/voz:') { var getTecnologia = 'sim'; }
				if (temp == 'Central:') { var getCentral = 'sim'; }
				if (temp == 'IP de Acesso:') { var getIP = 'sim'; }
				if (temp == 'Localidade:') { var getLocalidade = 'sim'; }
				if (temp == 'IMSUSERST (SIP)') { var getImsuSip = 'sim'; }
				if (temp == 'IMSUSERST (TEL)') { var getImsuTel = 'sim'; }
				if (temp == 'ANINFO') { var getAninfo = 'sim'; }
				if (temp == 'V5IID') { var getV5iid = 'sim'; }
				if (temp == 'EID') { var getEid = 'sim'; }
				if (temp == 'EDESC') { var getEdesc = 'sim'; }
				if (temp == 'TID') { var getTid = 'sim'; }
				if (temp == 'L3ADDR') { var getL3addr = 'sim'; }
				if (temp == 'Número Telefônico:') { var getHinstancia = 'sim'; }
				if (temp == 'OPTIONS:') { var getOptions = 'sim'; }
				if (temp == 'Registro IMS:') { var getRegistroSip = 'sim'; }
				if (temp == 'Nenhum evento') { var getEventoAtivo = 'sim'; }
				if (temp == 'Aconteceu um erro!') { var sasErro = 'sim'; }
				if (temp == 'Numero não configurado para Switch Huawei') { var sasErro = 'Numero não configurado para Switch Huawei. (Efetuar Manobra Massiva)'; }

				//Banda Larga Associada:


				if (temp.indexOf('DN:          ') > -1) { var equipNc = temp.replace('DN:', '').trim() }
				if (temp.indexOf('DN:') > -1) { var T_dn = temp.replace('DN:', '').trim() }
				if (temp.indexOf('SNPA:') > -1) { var T_snpa = temp.replace('SNPA:', '').split('SIG:')[0].trim() }
				if (temp.indexOf('LINE EQUIPMENT NUMBER:') > -1) { var T_len = temp.split(':')[1].trim(); }
				if (temp.indexOf('CUSTGRP:') > -1) { var T_cust = temp; }

				if (temp.indexOf('Login:') > -1) { var login = 'sim' }
				if (temp.indexOf('Senha:') > -1) { var senha = 'sim' }
				if (temp.indexOf('Entrar') > -1) { var entrar = 'sim' }



				/*Debug Log*/
				if (debugMode == 'sim') {
					saida += '[' + d + '] - [' + temp + ']<br>';
				}

			}
		}
		if (eventoAtivo == 'ativo.') {
			jQuery('#massivaSasStatus').html('<span style="" class="label label2 label-success">Nao</span>');
		} else {
			jQuery('#massivaSasStatus').html('<span title="Algo está diferente: Verifique no SAS ou no Wise se existe evento massivo" style="" class="label label2 label-warning2">Ver</span>');
		}
		if (tecnologia == 'TDM/H248') {
			if (tdmCriado < 0) {
				// nãoe executa caso seja TDM e não esteja criado
			}
			else {
				var equip = T_snpa + T_dn;//quando apresentar numero de equipamento errado, corrigir nesta linha (snpa+dn)
				if (sHinstancia == equip) { equip = 'Nao possui' } else { }
				var T_cust = T_cust.replace('CUSTGRP:', '').replace('SUBGRP:', ';').replace('NCOS:', ';');
				var T_cust = T_cust.split(';');
				var custgrp = T_cust[0].trim();
				var subgrp = T_cust[1].trim();
				var ncos = T_cust[2].trim();
			}
		}

		//...

		var sasFinal = '';
		var sasGeral = ''
			+ 'Central: <span id="painel-SAS-central"  class="verde">' + central + '</span><br>'
			+ 'Localidade: <span id="painel-SAS-cidade" class="verde">' + localidade + '</span><br>'
			+ 'Tecnologia: <span id="painel-SAS-tecnologia" class="verde">' + tecnologia + '</span><br>'
		var sasTdm = ''
			+ 'IP da Central: <span id="painel-SAS-ipcentral" class="verde">' + ip + '</span><br>'
			+ 'Equipamento: <span id="painel-SAS-equipamento" class="verde">' + equip + '</span><br>'
			+ 'Facilidade: <span id="painel-SAS-facilidade" class="dados_ok">' + T_len + '</span><br>'
			+ 'Serviços: <span id="painel-SAS-servicos" class="verde">' + T_options + '</span><br>'
			+ 'Custgrp: <span id="painel-SAS-custgroup" class="laranja">' + custgrp + '</span> '
			+ 'Subgrp: <span id="painel-SAS-subgrp" class="verde">' + subgrp + '</span> '
			+ 'Ncos: <span id="painel-SAS-ncos" class="verde">' + ncos + '</span><br>'
			+ 'Info <span id="painel-SAS-idway" class="laranja">revisar</span><br>'
		var sas248 = ''
			+ 'imsuSip: <span id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> / imsuTel: <span class="verde">' + imsuTel + '</span><br>'
			+ 'aninfo: <span id="painel-SAS-aninfo" class="verde">' + aninfo + '</span><br>'
			+ 'eid: <span id="painel-SAS-idway" class="laranja">' + eid + '</span><br>'
			+ 'edesc: <span id="painel-SAS-edesc" class="verde">' + edesc + '</span><br>'
			+ 'Porta: <span id="painel-SAS-porta" class="laranja">' + tid + '</span><br>'
		var sasV5 = ''
			+ 'imsuSip: <span id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span id="painel-SAS-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>'
			+ 'aninfo: <span id="painel-SAS-aninfo" class="verde">' + aninfo + '</span><br>'
			+ 'v5iid: <span id="painel-SAS-idway" class="laranja">' + v5iid + '</span><br>'
			+ 'Porta: <span id="painel-SAS-porta" class="laranja">' + l3addr + '</span><br>'
		if (S_registro == 'OK') { var sipColor = 'verde' } else { var sipColor = 'vermelho' }
		var sasSip = ''
			+ 'Registro: <span id="painel-SAS-registrosip" class="' + sipColor + '">' + S_registro + '</span><br>'
			+ 'imsuSip: <span id="painel-SAS-imsusip" class="verde">' + imsuSip + '</span> - ' + registroIms(imsuSip) + '<br>'
			+ 'imsuTel: <span id="painel-SAS-imsutel" class="verde">' + imsuTel + '</span> - ' + registroIms(imsuTel) + '<br>'
			+ 'Info <span id="painel-SAS-idway" class="laranja">revisar</span><br>'

		var sasIms = ''
			+ '<span class="vermelho"><br>Telefone IMS não configurado<br></span><br>'
			+ '<span id="sasPular" class="vermelho"><br>IMSDB: pular</span><br>'


		//TDM/H248 , IMS/H248 , IMS/V5.2 , IMS/SIP
		if (tecnologia == 'TDM/H248') {
			if (tdmCriado < 0) {
				var sasFinal = sasGeral
					+ 'IP da Central: <span class="verde">' + ip + '</span><br>'
					+ 'DN: <span class="verde">' + equipNc + '</span><br>'
					+ '<span class="vermelho"><br>Telefone TDM não configurado<br></span><br>'
					+ '<span id="sasPular" class="vermelho"><br>IMSDB: pular</span><br>'

				imsupdate('pular')
			}
			else {
				var sasFinal = sasGeral + sasTdm;
			}

		}
		if (tecnologia == 'IMS/H248') { var sasFinal = sasGeral + sas248 }
		if (tecnologia == 'IMS/V5.2') { var sasFinal = sasGeral + sasV5 }
		if (tecnologia == 'IMS/SIP') { var sasFinal = sasGeral + sasSip }
		if (tecnologia == 'IMS') {
			var sasFinal = sasGeral + sasIms

			imsupdate('pular')
		}
		if (login == 'sim' && senha == 'sim' && entrar == 'sim') {
			//If keeper ativado:
			keeper_sas_login('request');
			keeper_sas('request');
			setTimeout(function () {
				diagnosticoSas({
					'modo': 'request',
					'input': getFirstImsTr('instancia'),
					'bloquear': '#diagnostico_SAS',
					'destino': '#diagnostico_SASc',
					'filtro': filtroSAS_IMS
				});
			}, 100)
			//---
			document.getElementById('diagnostico_SAS').style.background = '#ffffe6';
			var sasFinal = '<br><br><center><span class="vermelho">IMS | SAS Deslogado</span></center><br><center>Faça login na página do SAS, ou caso queira usar relogin automatico, ative o Keeper</center><br>'
		} else {
			document.getElementById('diagnostico_SAS').style.background = '';
		}

		jQuery('#diagnostico_SASc').html('<div style="white-space:pre-wrap;">'
			+ sasFinal
			+ '</div>');
		if (sasErro) { jQuery('#diagnostico_SASc').html('<span id="sasPular" class="vermelho"><br>IMSDB: pular</span><br>') }
		imsupdate();




		if (debugMode == 'sim') {
			jQuery('#debug-sas').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			//jQuery('#modal-3').modal('show');
		}

	}
	else {
		if (document.getElementById('imsdb-recursivo').checked == true) { imsdb_automation(); }
		else { jQuery('#diagnostico_SASc').html('<span id="sasPular" class="vermelho"><br>IMSDB: pular [' + resposta.status + ']</span><br>') }
	}

}


//===========================================================================
//PN binada... depois remover isso e fundir com o pn normal, criei separa porque vou precisar reescrever a parte do pn inteira
function diagnosticoPnBinada(modo, dados) {
	var elementoDestino = "#binadaPN";
	var callResponse = diagnosticoPnBinada;
	if (modo == 'request') {
		//jQuery('#diagnostico_PNc').html('<div style="white-space:pre-wrap;"><br><br><br></div>');
		blockUI(jQuery(elementoDestino));
		var instancia = jQuery('#binada').val();
		var url = "http://pnadmin.gvt.com.br/pn/pn.jsp?numero=" + instancia + "&protocolo=&nequip=&invokeId=&pnId=&submit=GO";
		setTimeout(function () {
			var request = jQuery.ajax({
				url: url,
				dataType: "text",
				type: "post",
			});
			request.done(function () { console.log('Sucesso') });
			request.fail(function () { console.log('Falha') });
			request.always(function () { callResponse('response', request.responseText); });
		}, 30)
	}
	else if (modo == 'response') {
		filtroPNbinada(dados);

		unblockUI(jQuery(elementoDestino));
	}
	else { }

}


//Filtros PNb
function filtroPNbinada(resposta) {
	//reseta variaveis antes de usa-las
	var debugMode = "sim";
	var instancia = jQuery('#binada').val();
	var saida = '';
	var central = '';
	var lista = '';
	var listaStatus = '';
	var listaSwitch = '';
	var equip = '';
	var equipSwitch = '';
	var aCNL = '';

	//coloca o conteudo da resposta em uma div não implementada
	var tempDiv = jQuery('<div>').html(resposta);
	var raw = jQuery('<div>').html(resposta);
	//remove tags de link, estilo e imagem da resposta
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	//...
	//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
	var pnTables = jQuery(tempDiv).find('table');
	for (tbctr = 0; tbctr < pnTables.length; tbctr++) {
		//
		if (jQuery(pnTables[tbctr]).find('tr')[0].innerText.trim() == 'Registro no Sisnum') {
			var tables_sisn = pnTables[tbctr];
			var trsisn = jQuery(tables_sisn).find('tr')[3];
			var lista = jQuery(trsisn).find('td')[0].innerText
			var listaStatus = jQuery(trsisn).find('td')[4].innerText
			var listaSwitch = jQuery(trsisn).find('td')[3].innerText
			if (jQuery(trsisn).find('td')[7]) { var equip = jQuery(trsisn).find('td')[7].innerText } else { var equip = 'N' }
			if (jQuery(trsisn).find('td')[9]) { var equipSwitch = jQuery(trsisn).find('td')[9].innerText } else { var equipSwitch = 'N' }
			//console.log('lista: '+lista)
			//console.log('lista: '+listaSwitch)
			//console.log('lista: '+equip)
			//console.log('lista: '+equipSwitch)
		}
		if (jQuery(pnTables[tbctr]).find('tr')[0].innerText.trim() == 'CX') {
			var tables_cx = pnTables[tbctr];
			var trcx = jQuery(tables_cx).find('tr')[2];

			if (jQuery(tables_cx).find('tr')[2].innerText.match(/Sem registros para o PTS/gi)) { var histcx = "Sem registros para o PTS<br>" }
			else {
				var trcx2 = jQuery(tables_cx).find('tr')[3];
				var cx_tipo = jQuery(trcx2).find('td')[0].innerText
				var cx_envio = jQuery(trcx2).find('td')[10].innerText
				var cx_resposta = jQuery(trcx2).find('td')[11].innerText
				var cx_erro = jQuery(trcx2).find('td')[13].innerText
				var histcx = ''
					+ 'Envio:&nbsp;&nbsp; ' + cx_envio + ' - ' + cx_tipo + '<br>'
					+ 'Resposta: ' + cx_resposta + ' - ' + cx_erro + '<br>'
			}

		}
		if (pnTables[tbctr].innerText.trim().indexOf('Registro no Sisnum') == 0) { var tables_sisnum = pnTables[tbctr]; }
	}


	var texto = tempDiv.text();
	var texto = texto.split('\n');
	for (d = 0; d < texto.length; d++) {
		var temp = '';
		var temp = texto[d].trim();
		if (temp.length > 0) {
			//if(temp=="Utilizando Efika Comandos"){var status='OK';}

			if (getCNL == 'sim' && aCNL == '' && (temp.indexOf('-') > 5 && temp.indexOf('-') < 9)) { var aCNL = temp; getCNL = ''; }

			if (temp == 'Id Oper.') { var getCNL = 'sim'; }


			if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
		}
	}


	if (equip != 'N') { var existeEquip = 'Eqp: <span class="verde">' + equip + '</span> Switch: <span id="painel-PNbinada-equipSwitch" class="verde cptxt">' + equipSwitch + '</span> ' + centralTecnologia(equipSwitch) + '<br>'; }
	else { var existeEquip = '' }
	jQuery('#binadaPN').html('<div style="white-space:pre-wrap;">'
		+ 'Lista: <span class="verde">' + lista + '</span> Switch: <span class="verde" id="painel-PNbinada-listaSwitch">' + listaSwitch + '</span> ' + centralTecnologia(listaSwitch) + '<br>'
		+ existeEquip
		+ 'CNL Atual: <span class="verde  cptxt" id="painel-PNbinada-CNL">' + aCNL + '</span><br>'
		+ 'Status: <span class="verde">' + listaStatus + '</span><br>'
		+ histcx
		+ '</div>');










	if (debugMode == "sim") {
		jQuery('#debug-pn').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}

//===========================================================================
//Diagnostico PNADMIN
function diagnosticoPn(modo, dados) {
	var elementoDestino = "#diagnostico_PNc";
	var callResponse = diagnosticoPn;
	if (modo == 'request') {
		//jQuery('#diagnostico_PNc').html('<div style="white-space:pre-wrap;"><br><br><br></div>');
		blockUI(jQuery(elementoDestino));
		var instancia = jQuery('#instancia').val();
		var url = "http://pnadmin.gvt.com.br/pn/pn.jsp?numero=" + instancia + "&protocolo=&nequip=&invokeId=&pnId=&submit=GO";
		setTimeout(function () {
			var request = jQuery.ajax({
				url: url,
				dataType: "text",
				type: "post",
			});
			request.done(function () { console.log('Sucesso') });
			request.fail(function () { console.log('Falha') });
			request.always(function () { callResponse('response', request.responseText); });
		}, 30)
	}
	else if (modo == 'response') {
		filtroPN(dados);

		unblockUI(jQuery(elementoDestino));
	}
	else { }

}


//Filtros PN
function filtroPN(resposta) {
	//reseta variaveis antes de usa-las
	var debugMode = "sim";
	var instancia = jQuery('#instancia').val();
	var saida = '';
	var central = '';
	var lista = '';
	var listaSwitch = '';
	var equip = '';
	var equipSwitch = '';
	var aCNL = '';

	//coloca o conteudo da resposta em uma div não implementada
	var tempDiv = jQuery('<div>').html(resposta);
	var raw = jQuery('<div>').html(resposta);
	//remove tags de link, estilo e imagem da resposta
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	//...
	//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
	var pnTables = jQuery(tempDiv).find('table');
	for (tbctr = 0; tbctr < pnTables.length; tbctr++) {
		//
		if (jQuery(pnTables[tbctr]).find('tr')[0].innerText.trim() == 'Registro no Sisnum') {
			var tables_sisn = pnTables[tbctr];
			var trsisn = jQuery(tables_sisn).find('tr')[3];
			var lista = jQuery(trsisn).find('td')[0].innerText
			var listaSwitch = jQuery(trsisn).find('td')[3].innerText
			if (jQuery(trsisn).find('td')[7]) { var equip = jQuery(trsisn).find('td')[7].innerText } else { var equip = 'N' }
			if (jQuery(trsisn).find('td')[9]) { var equipSwitch = jQuery(trsisn).find('td')[9].innerText } else { var equipSwitch = 'N' }
			//console.log('lista: '+lista)
			//console.log('lista: '+listaSwitch)
			//console.log('lista: '+equip)
			//console.log('lista: '+equipSwitch)
		}
		if (jQuery(pnTables[tbctr]).find('tr')[0].innerText.trim() == 'CX') {
			var tables_cx = pnTables[tbctr];
			var trcx = jQuery(tables_cx).find('tr')[2];

			if (jQuery(tables_cx).find('tr')[2].innerText.match(/Sem registros para o PTS/gi)) { var histcx = "Sem registros para o PTS<br>" }
			else {
				var trcx2 = jQuery(tables_cx).find('tr')[3];
				var cx_tipo = jQuery(trcx2).find('td')[0].innerText
				var cx_envio = jQuery(trcx2).find('td')[10].innerText
				var cx_resposta = jQuery(trcx2).find('td')[11].innerText
				var cx_erro = jQuery(trcx2).find('td')[13].innerText
				var histcx = ''
					+ 'Envio:&nbsp;&nbsp; ' + cx_envio + ' - ' + cx_tipo + '<br>'
					+ 'Resposta: ' + cx_resposta + ' - ' + cx_erro + '<br>'
			}

		}
		if (pnTables[tbctr].innerText.trim().indexOf('Registro no Sisnum') == 0) { var tables_sisnum = pnTables[tbctr]; }
	}


	var texto = tempDiv.text();
	var texto = texto.split('\n');
	for (d = 0; d < texto.length; d++) {
		var temp = '';
		var temp = texto[d].trim();
		if (temp.length > 0) {
			//if(temp=="Utilizando Efika Comandos"){var status='OK';}

			if (getCNL == 'sim' && aCNL == '' && (temp.indexOf('-') > 5 && temp.indexOf('-') < 9)) { var aCNL = temp; getCNL = ''; }

			if (temp == 'Id Oper.') { var getCNL = 'sim'; }


			if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
		}
	}


	if (equip != 'N') { var existeEquip = 'Eqp: <span id="painel-PN-eqp" class="verde  cptxt">' + equip + '</span> Switch: <span class="verde  cptxt">' + equipSwitch + '</span> ' + centralTecnologia(equipSwitch) + '<br>'; }
	else { var existeEquip = '' }
	jQuery('#diagnostico_PNc').html('<div style="white-space:pre-wrap;">'
		+ 'Lista: <span id="painel-PN-lista" class="verde cptxt">' + lista + '</span> Switch: <span class="verde  cptxt">' + listaSwitch + '</span> ' + centralTecnologia(listaSwitch) + '<br>'
		+ existeEquip
		+ 'CNL Atual: <span class="verde">' + aCNL + '</span><br>'
		+ histcx
		+ '</div>');










	if (debugMode == "sim") {
		jQuery('#debug-pn').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}

//===========================================================================
//Diagnostico PNADMIN PTS/CX
function diagnosticoPnCx(modo, dados) {
	var elementoDestino = "#diagnostico_PNCXc"; jQuery('#divisorCX').show()
	var callResponse = diagnosticoPnCx;
	if (modo == 'request') {
		jQuery('#diagnostico_PNCXc').html('<div style="white-space:pre-wrap;"><br><br><br><br></div>');
		blockUI(jQuery(elementoDestino));
		var instancia = jQuery('#instancia').val();
		var url = "http://pnadmin.gvt.com.br/pn/ptsInfo.jsp?numLista=" + instancia;
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
		});
		request.done(function () { console.log('Sucesso') });
		request.fail(function () { console.log('Falha') });
		request.always(function () { callResponse('response', request.responseText); });
	}
	else if (modo == 'response') {
		filtroPNCX(dados);
		unblockUI(jQuery(elementoDestino));
	}
	else { }

}


//Filtros PNCX
function filtroPNCX(resposta) {
	//reseta variaveis antes de usa-las
	var debugMode = "nao";
	var instancia = jQuery('#instancia').val();
	var saida = '';
	var lista = '';
	var equip = '';

	//coloca o conteudo da resposta em uma div não implementada
	var tempDiv = jQuery('<div>').html(resposta);
	var raw = jQuery('<div>').html(resposta);
	//remove tags de link, estilo e imagem da resposta
	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	//...
	//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
	ptsTables = jQuery(tempDiv).find('table');
	var saida = jQuery(tempDiv).text();
	for (tbctr = 0; tbctr < ptsTables.length; tbctr++) {
		//

		if (jQuery(ptsTables[tbctr]).find('tr')[0].innerText.trim() == 'Configuração no PTS/CX') {
			tables_pts = ptsTables[tbctr];
			trPts = jQuery(tables_pts).find('tr')[2];
			if (jQuery(trPts).find('td')[1]) {
				lista = jQuery(trPts).find('td')[1].innerText
			} else { lista = "ERRO, tente novamente" }
			if (jQuery(trPts).find('td')[2]) {
				equip = jQuery(trPts).find('td')[2].innerText
			} else { equip = "ERRO, tente novamente" }



			//if(jQuery(trPts).find('td')[7]){equip = jQuery(trPts).find('td')[7].innerText}else{equip='N'}
			//if(jQuery(trPts).find('td')[9]){equipSwitch = jQuery(trPts).find('td')[9].innerText}else{equipSwitch ='N'}
		}

	}
	//if(equip!='N'){existeEquip='Equip: <span class="verde">'+equip+'</span> Switch: <span class="verde">'+equipSwitch +'</span><br>';}
	//else{existeEquip=''}
	if (lista) { } else { var lista = 'N' }
	if (equip) { } else { var equip = 'N' }

	jQuery('#diagnostico_PNCXc').html('<div style="white-space:pre-wrap;">'
		+ 'Lista: <span class="verde">' + lista + '</span> '
		+ 'Equip: <span class="verde">' + equip + '</span> '
		+ '</div>');



	if (debugMode == "sim") {
		jQuery('#debug-pncx').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}




//===========================================================================
//Diagnostico Gestor
/*
diagnosticoGestor({
	'modo':'request',
	'input':'#instancia',
	'instancia':'',
	'bloquear':'#diagnostico_TBS',
	'destino':'#diagnostico_TBSc',
	'filtro':filtroTBS
});
*/
function diagnosticoGestor(opt) {
	if (opt) {
		if (opt['bloquear']) { var bloquearElemento = opt['bloquear']; }//#diagnostico_TBS
		if (opt['destino']) { var popularElemento = opt['destino']; }//#diagnostico_TBSc
		if (opt['instancia']) { var instancia = opt['instancia'] } else { var instancia = jQuery('#instancia').val(); }
		//else{var elementoDestino='#diagnostico_TBSc';}
		if (!opt['viewState']) {
			gestor_preRequest('consulta', diagnosticoGestor, opt)
		} else {
			if (opt['modo'] == 'request') {
				blockUI(jQuery(bloquearElemento));
				var request = jQuery.ajax({
					url: "http://gestordebloqueios.gvt.net.br/spmweb/pages/geral.xhtml",
					contentType: "application/x-www-form-urlencoded;charset=utf8",
					timeout: 45000,
					dataType: "text",
					type: "post",
					data: {
						"javax.faces.partial.ajax": "true",
						"javax.faces.source": "tabGestorBloqueio:formConsulta:btonSearch",
						"javax.faces.partial.execute": "@all",
						"javax.faces.partial.render": "tabGestorBloqueio:formConsulta",
						"tabGestorBloqueio:formConsulta:btonSearch": "tabGestorBloqueio:formConsulta:btonSearch",
						"tabGestorBloqueio:formConsulta": "tabGestorBloqueio:formConsulta",
						"javax.faces.ViewState": opt.viewState,
						"tabGestorBloqueio:formConsulta:txt1": instancia
					}
				});
				request.done(function () { console.log('Gestor : Sucesso'); });
				request.fail(function (xhr, status, errorThrown) { console.log('Gestor : Falha'); });
				request.always(function () { opt.filtro(request); unblockUI(jQuery(bloquearElemento)) });
			}
			else if (opt['modo'] == 'response') {
				unblockUI(jQuery(bloquearElemento));
				//	filtroTBS(dados);
				//document.getElementsByClassName('menu_hq')[0].innerText
			}
			else { }

		}
	} else { console.error('Erro, argumentos invalidos') }
}

//--------------------------

function filtroGestor(resposta) {
	if (resposta.status == 404) {
		//toastr.warning('Erro 400');
		var resposta = "Erro 404";
	}
	else if (resposta.status == 500) {
		//toastr.warning('Erro 500');
		var resposta = "Erro 500";
	}
	else if (resposta.status === 0) {
		//toastr.warning('Erro 0');
		var resposta = "Erro 0";
	}
	else if (resposta.status == 200) {
		//toastr.success('Gestor 200 [OK]');
		var resposta = resposta.responseText;
		//Declarar as variaveis para evitar except
		var saida = '';
		var bloqStat = '';
		var dbloqStat = '';
		var erro = '';

		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);

		//console.log(tempDiv[0].innerHTML);

		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		jQuery(tempDiv).find("button").remove();
		jQuery(tempDiv).find("img").remove();

		var storeHTML = tempDiv.html();
		var texto = tempDiv.text();
		var gestorTable = jQuery(tempDiv).find("#tabGestorBloqueio\\:formConsulta\\:j_idt83_data");
		var gestorTableFll = jQuery(tempDiv).find("#tabGestorBloqueio\\:formConsulta\\:j_idt83");
		var gestorTR = jQuery(tempDiv).find("tr");
		for (gbctr = 0; gbctr < gestorTR.length; gbctr++) {
			//console.log(gestorTR[gbctr].innerText)
		}
		var gestorTD = jQuery(tempDiv).find("td");
		for (gbctd = 0; gbctd < gestorTD.length; gbctd++) {
			//console.log(gestorTD[gbctd].innerText)
			gestorTD[gbctd].style.width = ''
			if (gestorTD[gbctd].innerText == 'Bloqueado') {
				var bloqStat = 'Bloqueado';
			}
			else if (gestorTD[gbctd].innerText == 'Desbloqueado') {
				var dbloqStat = 'Desbloqueado';
			} else { }
		}
		//alert(gestorTable.innerHTML)

		jQuery('#modalGestor-c').html(gestorTableFll.html())
		if (bloqStat == 'Bloqueado') {
			jQuery('#bloqueioGestorStatus').html('<span name="MostrarbloqueioGestorStatus" title="Clique para verificar os bloqueios." style="cursor:pointer;" class="label label2 label-warning2">Ver</span>');
			jQuery('#modalGestor').modal('show');
		} else if (dbloqStat == 'Desbloqueado') {
			jQuery('#bloqueioGestorStatus').html('<span name="MostrarbloqueioGestorStatus" style="cursor:pointer;" class="label label2 label-success">Nao</span>');
		} else {
			jQuery('#bloqueioGestorStatus').html('<span name="MostrarbloqueioGestorStatus" style="cursor:pointer;" class="label label2 label-default">Deslogado</span>');
			document.getElementById("keeper_gestor").className = "keeper_btn keeper_off";
		}





		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getArmario == 'sim' && armario == '') { var armario = temp; getArmario = ''; }

				if (temp == 'Arm\u00e1rio') { var getArmario = 'sim'; }


				/*Debug Log*/ // 
				saida += '[' + d + '] - [' + temp + ']<br>';
			}
		}
		//pegar cidade e estado, isto veio do modelo antigo, passar a pegar esta informação no for acima
		var corpo = jQuery(tempDiv).find("table")
		var td = jQuery(corpo[11]).find('td');
		var estado = jQuery(td[16]).text().trim();
		var cidade = jQuery(td[17]).text().trim();
		//filtro geral

		//alert(texto);

		if (erro) {
			if (erro.length > 1) {
				//jQuery('#diagnostico_TBSc').html('<span class="vermelho">'+erro+'</span>');
			}
		} else {
			//jQuery('#diagnostico_TBSc').html('');			
		}
		jQuery('#debug-gestor').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	} else {
		toastr.error('Gestor: Erro desconhecido ' + resposta.status);
		jQuery('#diagnostico_TBSc').html('Ocorreu um erro no manobra unica, provavelmente falha por lentidão');
	}

}




//===========================================================================
//Keeper efika
function keeper_efika(modo, dados) {

	var callResponse = keeper_efika;
	console.log('keeper efika ' + modo)
	if (modo == 'request') {
		blockUI(jQuery('#keeper_efika'));
		var instancia = jQuery('#instancia').val();
		var url = "http://efika/web/action/news.php";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
			data: { perfil: "G" }
		});
		request.done(function () { console.log('Sucesso'); callResponse('response', request.responseText); });
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha') });
		request.always(function () { });
	}
	else if (modo == 'response') {
		filtrokeeper_efika(dados);
		unblockUI(jQuery('#keeper_efika'));
	}
	else { }
}

//Filtros keeper efika
function filtrokeeper_efika(resposta) {
	var debugMode = "sim";
	if (resposta == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta === 0) {
		//toastr.warning('erro 0')	
	}
	else {
		var saida, statusL, statusP;
		var status = 'Erro';
		//toastr.info('keeper TTV: [ok]')
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getSincronizada=='sim' && Sinc==''){var Sinc = temp;getSincronizada='';}

				//if(temp=='Velocidade Sincronizada (Mbps)'){	var getSincronizada='sim';}
				if (temp == "Utilizando Efika Comandos") { var status = 'OK'; }
				if (temp == 'Login:') { var statusL = 'Erro'; }
				if (temp == 'Senha:') { var statusP = 'Erro'; }




				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//alert(texto)
		if (statusL == 'Erro' && statusP == 'Erro') { document.getElementById("keeper_efika").className = "keeper_btn keeper_off" }
		else if (status == 'OK') { document.getElementById("keeper_efika").className = "keeper_btn keeper_on"; }
		else { document.getElementById("keeper_efika").className = "keeper_btn keeper_undefined"; }
	}
	if (debugMode == "sim") {
		jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}

//===========================================================================
//Keeper Gestor
function keeper_gestor(modo, dados) {
	if (modo == 'request') {
		blockUI(jQuery('#keeper_gestor'));
		var url = "http://gestordebloqueios.gvt.net.br/spmweb/pages/geral.xhtml";
		var request = jQuery.ajax({
			url: url,
			timeout: 40000,
			dataType: "text",
			type: "get",
		});
		request.done(function () { console.log('Sucesso') });
		request.fail(function (xhr, status, errorThrown) { console.log('Falha') });
		request.always(function () { filtrokeeper_gestor(request); unblockUI(jQuery('#keeper_gestor')); });
	} else { }
}

//Filtros keeper Gestor
function filtrokeeper_gestor(resposta) {
	var debugMode = "sim";
	if (resposta.status == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta.status == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta.status === 0) {
		//toastr.warning('erro 0')	
	}
	else if (resposta.status == 200) {
		var resposta = resposta.responseText;
		var saida, statusL, statusP;
		var status = 'Erro';
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getSincronizada=='sim' && Sinc==''){var Sinc = temp;getSincronizada='';}

				//if(temp=='Velocidade Sincronizada (Mbps)'){	var getSincronizada='sim';}
				if (temp == "Logout") { var status = 'OK'; }
				if (temp == 'Login:') { var statusL = 'Erro'; }
				if (temp == 'Senha:') { var statusP = 'Erro'; }




				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//alert(texto)
		if (statusL == 'Erro' && statusP == 'Erro') { document.getElementById("keeper_gestor").className = "keeper_btn keeper_off" }
		else if (status == 'OK') { document.getElementById("keeper_gestor").className = "keeper_btn keeper_on"; }
		else { document.getElementById("keeper_gestor").className = "keeper_btn keeper_undefined"; }
		if (debugMode == "sim") {
			jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			//jQuery('#modal-debug').modal('show');
		}


	} else { }






}


//===========================================================================
//Keeper ACS
function keeper_acs(modo, dados) {
	if (modo == 'request') {
		blockUI(jQuery('#keeper_acs'));
		var url = "http://10.200.6.150:8080/nbbs/admin/reports.ui";
		var request = jQuery.ajax({
			url: url,
			timeout: 40000,
			dataType: "text",
			type: "get",
		});
		//request.done(function(){console.log('Sucesso')});
		//request.fail(function(xhr, status, errorThrown){console.log('Falha')});
		request.always(function () { filtrokeeper_acs(request); unblockUI(jQuery('#keeper_acs')); });
	} else { }
}

//Filtros keeper Gestor
function filtrokeeper_acs(resposta) {
	var debugMode = "sim";
	if (resposta.status == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta.status == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta.status === 0) {
		//toastr.warning('erro 0')	
	}
	else if (resposta.status == 200) {
		var resposta = resposta.responseText;
		var saida, statusL, statusP;
		var status = 'Erro';
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...

		if (jQuery(tempDiv).find('#login-rightbox').text()) {
			//toastr.warning('ACS deslogada')
			document.getElementById("keeper_acs").className = "keeper_btn keeper_off"
		}
		else if (jQuery(tempDiv).find('#header-links').text()) {
			//toastr.success('ACS Online')
			document.getElementById("keeper_acs").className = "keeper_btn keeper_on";
		} else {
			document.getElementById("keeper_acs").className = "keeper_btn keeper_undefined";
		}

		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {
				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		if (debugMode == "sim") {
			jQuery('#debug-acs').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			//jQuery('#modal-debug').modal('show');
		}
	} else { }
}



//===========================================================================
//Filtros keeper sas
//Keeper sas
function keeper_sas(modo, dados) {

	var callResponse = keeper_sas;
	console.log('keeper sas ' + modo)
	if (modo == 'request') {
		blockUI(jQuery('#keeper_sas'));
		var instancia = jQuery('#instancia').val();
		var url = "http://gvtapp/sas/configurar";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "get",
		});
		request.done(function () { console.log('Sucesso'); callResponse('response', request.responseText); });
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha') });
		request.always(function () { });
	}
	else if (modo == 'response') {
		filtrokeeper_sas(dados);
		unblockUI(jQuery('#keeper_sas'));
	}
	else { }
}

//Filtros keeper sas
function filtrokeeper_sas(resposta) {
	var debugMode = "sim";
	if (resposta == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta === 0) {
		//toastr.warning('erro 0')	
	}
	else {
		var saida, statusL, statusP;
		var status = 'Erro';
		//toastr.info('keeper TTV: [ok]')
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getSincronizada=='sim' && Sinc==''){var Sinc = temp;getSincronizada='';}

				//if(temp=='Velocidade Sincronizada (Mbps)'){	var getSincronizada='sim';}
				if (temp == "FERRAMENTAS DE TROUBLESHOOTING:") { var status = 'OK'; }
				if (temp == 'Login:') { var statusL = 'Erro'; }
				if (temp == 'Senha:') { var statusP = 'Erro'; }




				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//alert(texto)
		if (statusL == 'Erro' && statusP == 'Erro') { document.getElementById("keeper_sas").className = "keeper_btn keeper_off" }
		else if (status == 'OK') { document.getElementById("keeper_sas").className = "keeper_btn keeper_on"; }
		else { document.getElementById("keeper_sas").className = "keeper_btn keeper_undefined"; }
	}
	if (debugMode == "sim") {
		jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}

//===========================================================================
//Keeper LOGIN wise
function keeper_login_wise_desativado(modo, dados) {
	alert('desativar?')
	var callResponse = keeper_wise;
	console.log('keeper wise login ' + modo)
	if (modo == 'request') {
		blockUI(jQuery('#keeper_wise'));
		var instancia = jQuery('#instancia').val();
		var url = "http://wisetool.gvt.net.br/wisetool/login.jsp";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			xhrFields: { withCredentials: true },
			//setRequestHeader( 'Authorization', 'Basic ' + btoa( 'g0056638':'xxxx' ) )
			data: {
				"matricula": "g0056638",
				"senha": "?"
			}
		});
		request.done(function () { console.log('Sucesso'); callResponse('response', request.responseText); });
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha') });
		request.always(function () { });
	}
	else if (modo == 'response') {
		filtrokeeper_wise(dados);
		unblockUI(jQuery('#keeper_wise'));
	}
	else { }
}

//Filtros keeper wise
function filtrokeeper_wise(resposta) {
	var debugMode = "sim";
	if (resposta == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta === 0) {
		//toastr.warning('erro 0')	
	}
	else {
		var saida, statusL, statusP;
		var status = 'Erro';
		//toastr.info('keeper TTV: [ok]')
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getSincronizada=='sim' && Sinc==''){var Sinc = temp;getSincronizada='';}

				//if(temp=='Velocidade Sincronizada (Mbps)'){	var getSincronizada='sim';}
				if (temp == "Provisioning") { var status = 'OK'; }
				if (temp == 'Login:') { var statusL = 'Erro'; }
				if (temp == 'Senha:') { var statusP = 'Erro'; }




				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//alert(texto)
		if (statusL == 'Erro' && statusP == 'Erro') { document.getElementById("keeper_wise").className = "keeper_btn keeper_off" }
		else if (status == 'OK') { document.getElementById("keeper_wise").className = "keeper_btn keeper_on"; }
		else { document.getElementById("keeper_wise").className = "keeper_btn keeper_undefined"; }
	}
	if (debugMode == "sim") {
		jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}

//===========================================================================
//Keeper wise
function keeper_wise(modo, dados) {

	var callResponse = keeper_wise;
	//console.log('keeper wise '+modo)
	if (modo == 'request') {
		blockUI(jQuery('#keeper_wise'));
		//var instancia=jQuery('#instancia').val();
		var url = "http://wisetool.gvt.net.br/wisetool/index.jsp";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "get",
		});
		request.done(function () { console.log('Sucesso'); callResponse('response', request.responseText); });
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha') });
		request.always(function () { });
	}
	else if (modo == 'response') {
		filtrokeeper_wise(dados);
		unblockUI(jQuery('#keeper_wise'));
	}
	else { }
}

//Filtros keeper wise
function filtrokeeper_wise(resposta) {
	var debugMode = "sim";
	if (resposta == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta === 0) {
		//toastr.warning('erro 0')	
	}
	else {
		var saida, statusL, statusP;
		var status = 'Erro';
		//toastr.info('keeper TTV: [ok]')
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getSincronizada=='sim' && Sinc==''){var Sinc = temp;getSincronizada='';}

				//if(temp=='Velocidade Sincronizada (Mbps)'){	var getSincronizada='sim';}
				if (temp == "Provisioning") { var status = 'OK'; }
				if (temp == 'Login:') { var statusL = 'Erro'; }
				if (temp == 'Senha:') { var statusP = 'Erro'; }




				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//alert(texto)
		if (statusL == 'Erro' && statusP == 'Erro') { document.getElementById("keeper_wise").className = "keeper_btn keeper_off" }
		else if (status == 'OK') { document.getElementById("keeper_wise").className = "keeper_btn keeper_on"; }
		else { document.getElementById("keeper_wise").className = "keeper_btn keeper_undefined"; }
	}
	if (debugMode == "sim") {
		jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}
//===========================================================================
//Dashboard ETA
/*
Obs interessante sobre ETA: usando https://login.etadirect.com/gvt para testar session em certos momentos gera divergencia, o eta mantem a sessao aberta no dominio principal, e expirada no subdominio login quando usando o subdiretorio /gvt
*/
function teste_eta(modo, dados) {

	var callResponse = teste_eta;
	console.log('keeper eta ' + modo)
	if (modo == 'request') {
		var url = "https://gvt.etadirect.com/gvt/?cmd=reports&sub=dashboard&output=ajax";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
			data: {
				"targ_el": "elId4",
				"trees[main][tree_identifier]": "main",
				"trees[main][tree_date]": "2016-12-07",
				"trees[main][tree_version]": "2520857",
				"trees[main][struct_change_time]": "2016-12-07 23:42:34",
				"trees[main][tree_roots]": "2",
				"trees[main][opened_providers]": "2",
				"screen": "reports_dashboard",
				"SID": "4c94832f14e7777afe4d047fbef94508000-30962bb026c33c0ff6acc66432912195-afa2bae025043a33c643658a64d053e5"
			}
		});
		request.done(function () { console.log('Sucesso'); callResponse('response', request.responseText); });
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha') });
		request.always(function (xhr, status, errorThrown) { console.log(request.responseText) });
	}
	else if (modo == 'response') {
		filtroteste_eta(dados);
	}
	else { }
}

//Filtros keeper ETA
function filtroteste_eta(resposta) {
	var debugMode = "sim";
	if (resposta == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta === 0) {
		//toastr.warning('erro 0')	
	}
	else {
		var saida, statusL, statusP;
		var status = 'Erro';
		//toastr.info('keeper TTV: [ok]')
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getSincronizada=='sim' && Sinc==''){var Sinc = temp;getSincronizada='';}

				//if(temp=='Velocidade Sincronizada (Mbps)'){	var getSincronizada='sim';}
				if (temp.indexOf('Since your browser does not support JavaScript, you must press the button below once to proceed') > -1) { var status = 'OK'; }
				if (temp == 'Login') { var statusL = 'Erro'; }
				if (temp == 'Password') { var statusP = 'Erro'; }




				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//alert(texto)
		if (statusL == 'Erro' && statusP == 'Erro') { }
		else if (status == 'OK') { }
		else { }
	}
	if (debugMode == "sim") {
		jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}
//===========================================================================
//Keeper ETA
/*
Obs interessante sobre ETA: usando https://login.etadirect.com/gvt para testar session em certos momentos gera divergencia, o eta mantem a sessao aberta no dominio principal, e expirada no subdominio login quando usando o subdiretorio /gvt
modo 1:https://login.etadirect.com/gvt  e testar strings "not suport, login e password". (falhou para subdominio login + sub diretorio gvt)
modo 2:https://login.etadirect.com/ e testar strings "not suport, login e password". (Testado poucas vezes mas funcionando)
modo 3:https://gvt.etadirect.com/gvt/?cmd=reports&sub=dashboard&output=ajax e testar objeto logout

*/
function keeper_eta(modo, dados) {

	var callResponse = keeper_eta;
	console.log('keeper eta ' + modo)
	if (modo == 'request') {
		blockUI(jQuery('#keeper_eta'));
		var instancia = jQuery('#instancia').val();
		var url = "https://login.etadirect.com/";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "get",
		});
		request.done(function () { console.log('Sucesso'); callResponse('response', request.responseText); });
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha') });
		request.always(function () { });
	}
	else if (modo == 'response') {
		filtrokeeper_eta(dados);
		unblockUI(jQuery('#keeper_eta'));
	}
	else { }
}

//Filtros keeper ETA
function filtrokeeper_eta(resposta) {
	var debugMode = "sim";
	if (resposta == 404) {
		//toastr.warning('erro 404')
	}
	else if (resposta == 500) {
		//toastr.warning('erro 500')
	}
	else if (resposta === 0) {
		//toastr.warning('erro 0')	
	}
	else {
		var saida, statusL, statusP;
		var status = 'Erro';
		//toastr.info('keeper TTV: [ok]')
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);

		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getSincronizada=='sim' && Sinc==''){var Sinc = temp;getSincronizada='';}

				//if(temp=='Velocidade Sincronizada (Mbps)'){	var getSincronizada='sim';}
				if (temp.indexOf('Since your browser does not support JavaScript, you must press the button below once to proceed') > -1) { var status = 'OK'; }
				if (temp == 'Login') { var statusL = 'Erro'; }
				if (temp == 'Password') { var statusP = 'Erro'; }
				//localStorage['eta_session']=jQuery(raw).find('input[name="window_session_id"]')[0].value;



				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//alert(texto)
		if (statusL == 'Erro' && statusP == 'Erro') { document.getElementById("keeper_eta").className = "keeper_btn keeper_off" }
		else if (status == 'OK') { document.getElementById("keeper_eta").className = "keeper_btn keeper_on"; }
		else { document.getElementById("keeper_eta").className = "keeper_btn keeper_undefined"; }
	}
	if (debugMode == "sim") {
		jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}
//===========================================================================
/*
		var url = "http://sv2kpwfm3/agent/signin.do";
			data:{
				"realmId":"customer1",
				"userName":"g0056638",
				"password":"d3",
				"logonSubmit":"Login"
			}
*/
//Keeper TTV
function keeper_ttv(modo, dados) {
	var ttvhoje = xDate(7);
	var callResponse = keeper_ttv;
	console.log('keeper ttv ' + modo)
	if (modo == 'request') {
		blockUI(jQuery('#keeper_ttv'));
		var instancia = jQuery('#instancia').val();
		//var url = "http://sv2kpwfm3/agent/displayMyScheduleAction.do?startDay="+ttvhoje+"&viewFormat=weekly";
		var url = "http://sv2kpwfm3/agent/displayMyScheduleAction.do?startDay=" + ttvhoje + "&viewFormat=daily";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "get"
		});
		request.done(function () { console.log('Sucesso'); callResponse('response', request.responseText); });
		request.fail(function (xhr, status, errorThrown) { callResponse('response', xhr.status); console.log('Falha'); });
		request.always(function () { });
	}
	else if (modo == 'response') {
		filtrokeeper_ttv(dados);
		unblockUI(jQuery('#keeper_ttv'));
	}
	else { }
}

//Filtros keeper TTV
function filtrokeeper_ttv(resposta) {
	var debugMode = "sim";
	if (resposta == 404) {
		//toastr.warning('TTV erro 404')
	}
	else if (resposta == 500) {
		//toastr.warning('TTV erro 500')
	}
	else if (resposta === 0) {
		//toastr.warning('TTV erro 0')	
	}
	else {
		var saida;
		var status = 'Erro';
		//toastr.info('keeper TTV: [ok]')
		//coloca o conteudo da resposta em uma div não implementada
		var resposta = resposta.replace(/src=/gi, "alt=");
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		jQuery(tempDiv).find("img").remove();
		jQuery(tempDiv).find("button").remove();
		//jQuery(tempDiv).find("tr:contains('Logado')").css('display','none');

		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';
			var temp = texto[d].trim();
			if (temp.length > 0) {
				if (temp == 'ScheduleViewer') {
					var status = 'OK';
				}
				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		if (status == 'Erro') {
			document.getElementById("keeper_ttv").className = "keeper_btn keeper_off";
			var saida = "Off";
		}
		else if (status == 'OK') {
			document.getElementById("keeper_ttv").className = "keeper_btn keeper_on";
			var escalas = jQuery(tempDiv).find("#scheduleDetailTableDiv");
			console.log(escalas)
			jQuery('#ttv_box').html(escalas);
			jQuery('#ttv_box').find('table')[0].style = '';
			var evenR = jQuery('#ttv_box').find('tr');
			for (evr = 0; evr < evenR.length; evr++) {
				//console.log(evenR[evr])
				if (evenR[evr].innerText.match(/Logado/gi)) {
					if (evr < 2) { continue }
					evenR[evr].style.display = "none"
				}
				evenR[evr].onclick = function (ee) { console.log(this.innerText) }
			}



			//alert(jQuery('.evenRow')[0].text())
			//jQuery('#ttv_box').find("tr.evenRow").css('display','');
			//jQuery('#ttv_box').find("tr.evenRow")[0].style.display='block'
		}
		else { document.getElementById("keeper_ttv").className = "keeper_btn keeper_undefined"; }
	}
	if (debugMode == "sim") {
		jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
		//jQuery('#modal-3').modal('show');
	}
}

//=================================================================================
//Informações adicionais para o diagnostico do wise
function diagnosticoWiseAdicionais(modo, dados) {

	var elementoDestino = "#wiseInfo-distancia";//jQuery('#divisorCX').show()
	var callResponse = diagnosticoWiseAdicionais;
	if (modo == 'request') {

		if (dados == 'informacoesSagre') { var qualAcao = 'informacoesSagre' }
		else if (dados == 'informacoesSAS') { var qualAcao = 'informacoesSAS' }
		else if (dados == 'dns') { var qualAcao = 'dns' }
		else { var qualAcao = 'consultar' }

		//jQuery('#diagnosticoWisec').html('<div style="white-space:pre-wrap;"><br><br><br><br></div>');
		blockUI(jQuery(elementoDestino));
		var instancia = jQuery('#instancia').val();
		var url = "http://wisetool.gvt.net.br/wisetool/SmartTools.action";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
			cache: false,
			data: {
				redeAcessoVivo1: false,
				isTecnologiaDTH: false,
				acao: qualAcao,
				portaIdFxs: '',
				instanciaInformacoesSip: '',
				tipoBridge: '',
				deviceId: '',
				idElemento: '',
				indexElemento: '',
				nomeElemento: '',
				cpeId: '',
				serialNumber: '',
				modemSerialNumber: '',
				action: '',
				dnsReverso: '',
				numIPCliente: '',
				serviceOrderId: '',
				prefixosOnt: 'ASKY,MTSC,MSTC,PACE,SAGE',
				idSsHistoricoCertificacao: '',
				idBaHistoricoCertificacao: '',
				tipoCertificacao: '',
				defautModulation: 'ADSL 2+ ONLY SUAD',
				defautModulation: null,
				tipoPesquisa: 'Instancia',
				searchValue: instancia,
				nmFerramentas: '',
				baCertificar: '',
				modem: 147,
				redeSemFio: true,
				nomeModem: '',
				ipMacAddress: '',
				ipMacAddressValue: ''
			}
		});
		request.done(function () {
			console.log('Wise Adicionais Sucesso');
			//callResponse('response',request.responseText);
		});
		request.fail(function (xhr, status, errorThrown) {
			//callResponse('response',xhr.status);
			console.log('Wise Adicionais Falha');
		});
		request.always(function () {
			unblockUI(jQuery(elementoDestino));
		});
	}
	else if (modo == 'response') {
		//filtroWise(dados);

	}
	else { }

}

//===========================================================================
//Diagnostico WiseTool
//informacoesSagre , informacoesSAS , dns
function diagnosticoWise(modo, dados, gambi) {

	var elementoDestino = "#diagnosticoWisec";//jQuery('#divisorCX').show()
	var callResponse = diagnosticoWise;
	if (modo == 'request') {
		if (xRequests.wisetool) { xRequests.wisetool.abort() }

		var reqStart = Date.now();

		if (dados == 'informacoesSagre') { var qualAcao = 'informacoesSagre'; localStorage['distanciaTPA'] = '?' }
		else if (dados == 'informacoesSAS') { var qualAcao = 'informacoesSAS' }
		else if (dados == 'dns') { var qualAcao = 'dns' }
		else if (dados == 'velocity') { var qualAcao = 'velocity' }
		else if (dados == 'updateRadius') { var qualAcao = 'updateRadius' }
		else if (dados == 'reset') { var qualAcao = 'reset' }
		else { var qualAcao = 'consultar' }

		//jQuery('#diagnosticoWisec').html('<div style="white-space:pre-wrap;"><br><br><br><br></div>');
		blockUI(jQuery("#diagnostico_parametros"));
		blockUI(jQuery("#diagnostico_Wise"));
		if (gambi) { var instancia = gambi } else { var instancia = jQuery('#instancia').val(); }
		var url = "http://wisetool.gvt.net.br/wisetool/SmartTools.action";
		xRequests.wisetool = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
			cache: false,
			data: {
				redeAcessoVivo1: false,
				isTecnologiaDTH: false,
				acao: qualAcao,
				portaIdFxs: '',
				instanciaInformacoesSip: '',
				tipoBridge: '',
				deviceId: '',
				idElemento: '',
				indexElemento: '',
				nomeElemento: '',
				cpeId: '',
				serialNumber: '',
				modemSerialNumber: '',
				action: '',
				dnsReverso: '',
				numIPCliente: '',
				serviceOrderId: '',
				prefixosOnt: 'ASKY,MTSC,MSTC,PACE,SAGE',
				idSsHistoricoCertificacao: '',
				idBaHistoricoCertificacao: '',
				tipoCertificacao: '',
				defautModulation: 'ADSL 2+ ONLY SUAD',
				defautModulation: null,
				tipoPesquisa: 'Instancia',
				searchValue: instancia,
				nmFerramentas: '',
				baCertificar: '',
				modem: 147,
				redeSemFio: true,
				nomeModem: '',
				ipMacAddress: '',
				ipMacAddressValue: ''
			}
		});
		xRequests.wisetool.done(function () {
			//console.log('Wise Sucesso');
			callResponse('response', xRequests.wisetool.responseText);
		});
		xRequests.wisetool.fail(function (xhr, status, errorThrown) {
			callResponse('response', xhr.status);
			//console.log('Wise Falha');
		});
		xRequests.wisetool.always(function () {
			var reqEnd = Date.now();
			var reqTime = reqEnd - reqStart;
			log_request('Wise: ' + instancia + ' | ' + xDate(8) + ' | Inicio:' + reqStart + ' | Fim:' + reqEnd + ' | Tempo:' + reqTime + 'ms | Status:' + xRequests.wisetool.status, xRequests.tbs.status);

		});
	}
	else if (modo == 'response') {
		filtroWise(dados);
		unblockUI(jQuery("#diagnostico_parametros"));
		unblockUI(jQuery("#diagnostico_Wise"));
	}
	else { }

}
//diagnosticoWise('request','informacoesSagre');

//Filtros Wise
function filtroWise(resposta) {

	if (resposta.length > 200) {

		//reseta variaveis antes de usa-las
		var debugMode = "sim";
		var instancia = jQuery('#instancia').val();
		var Sinc = '';
		var snr = '';
		var atn = '';
		var armario = '';
		var armarioIp = '';
		var produto = '';
		var tecnologia = '';
		var status = '';
		var slot = '';
		var porta = '';
		var rin = '';
		var seqPorta = '';
		var perfil = '';
		var nomeBRAS = '';
		var dslam = '';
		var distancia = '';
		var distanciaFinal = '';
		var designadorW = '';
		var profileConf = '';
		var erro = '';
		var erroMin = '';
		var erroTR = '';
		var wiseFinal = '';
		var msgRadius = '';
		var powOnt = '';
		var powOlt = '';
		var desAcess = '';
		var nPortaLogica = '';
		var nPortaOlt = '';
		var saida = '';
		var login = '';
		var senha = '';
		var entrar = '';
		var tempDiv = '';

		var resposta = resposta.replace(/script/gi, "textarea");
		var resposta = resposta.replace(/src=/gi, "alt=");
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		jQuery(tempDiv).find("img").remove();
		//console.log(jQuery(tempDiv).text())

		//console.log(jQuery(tempDiv).find(".tableborder4"))
		//tableborder4

		//console.log(resposta)

		//console.log(jQuery(tempDiv).find("input#devecorrigirvelocidade").val());
		var textScripts = jQuery(tempDiv).find("textarea");
		var wiseErros = {};
		wiseErros['devecorrigirvelocidade'] = jQuery(tempDiv).find("input#devecorrigirvelocidade").val();
		wiseErros['deveretornarmodulacao'] = jQuery(tempDiv).find("input#deveretornarmodulacao").val();//SIM=msg3 & botao retMod
		wiseErros['devecorrigirmodulacao'] = jQuery(tempDiv).find("input#devecorrigirmodulacao").val();//SIM=msg2
		wiseErros['mensagemValorForaPadrao'] = jQuery(tempDiv).find("input#mensagemValorForaPadrao").val();//SIM=msg6
		wiseErros['devecorrigirvelocidaderadius'] = jQuery(tempDiv).find("input#devecorrigirvelocidaderadius").val();

		/*
		"var israstreador = '';" - msg5
		
		var rindivergente = 'SIM';
		var portadivergente = 'SIM';  msg4
		var cabinetDivergente = '';
		 erroProfile
		*/
		jQuery('#erroRadius').css('display', 'none'); wiseErros['devecorrigirradius'] = '';
		if (textScripts) {
			for (iwe = 0; iwe < textScripts.length; iwe++) {
				if (textScripts[iwe].value.indexOf('portadivergente') > -1) {
					//alert('achei');
					if (textScripts[iwe].value.indexOf("var rindivergente = 'SIM';") > -1) { wiseErros['devecorrigirradius'] = 'SIM'; jQuery('#erroRadius').css('display', '') }
					if (textScripts[iwe].value.indexOf("var portadivergente = 'SIM';") > -1) { wiseErros['devecorrigirradius'] = 'SIM'; jQuery('#erroRadius').css('display', '') }
					if (textScripts[iwe].value.indexOf("var cabinetDivergente = 'SIM';") > -1) { wiseErros['devecorrigirradius'] = 'SIM'; jQuery('#erroRadius').css('display', '') }
					//console.log(textScripts[iwe].value);
				}
			}
		}
		if (wiseErros['devecorrigirvelocidade'] == "SIM") {
			jQuery('#erroProfile').css('display', '');
		} else { jQuery('#erroProfile').css('display', 'none'); }
		//console.log(wiseErros)

		//...
		var provisionTD = jQuery(tempDiv).find("td");
		for (iacs = 0; iacs < provisionTD.length; iacs++) {
			//console.log('['+iacs+'] '+provisionTD[iacs].innerText.slice(0,40).trim())
			if (provisionTD[iacs].innerText.slice(0, 40).trim().indexOf('Equipamentos:') > -1) {
				//alert(provisionTD[iacs+1].innerText)
				//
				jQuery('#provisioning-equipamentos').html(provisionTD[iacs + 1].innerText)
				var acsEquips = provisionTD[iacs + 1].innerText

				//alert(provisionTD[iacs+1].innerText.split('\n').length)

			}
		}

		//Plataforma ACS
		//Equipamentos:
		if (acsEquips) {
			if (acsEquips.indexOf('\n') > -1) {
				var acsEquipsSplit = acsEquips.split('\n');
				var acsEqpCtrF = 0;
				for (acsEqpCtr = 0; acsEqpCtr < acsEquipsSplit.length; acsEqpCtr++) {
					if (acsEquipsSplit[acsEqpCtr].length > 5) {
						acsEqpCtrF++;
					}
				}
			}

			//alert(acsEquips+' / '+acsEqpCtrF)
			jQuery('#acsCounter').css('display', '')
			jQuery('#acsCounter').html(' ' + acsEqpCtrF + ' ')
		} else {
			jQuery('#acsCounter').css('display', '')
			jQuery('#acsCounter').html(' 0 ')
		}


		//Caputar dados da autenticacao
		if (jQuery(tempDiv).find('#autenticacao').text()) {
			var authStatus = '';
			var authIp = '';
			var authDes = '';
			var authHora = '';
			//divisorAuth
			jQuery('#divisorAuth').css('display', '');

			var textoA = jQuery(tempDiv).find('#autenticacao').text().split('\n');

			//alert(jQuery(tempDiv).find('#autenticacao').text());
			for (d2 = 0; d2 < textoA.length; d2++) {
				var temp = '';


				var temp = textoA[d2].trim();
				if (temp.length > 0) {
					console.log(temp)
					if (getAuthDes == 'sim' && authDes == '') { var authDes = temp; getAuthDes = ''; }
					if (getAuthStatus == 'sim' && authStatus == '') { var authStatus = temp; getAuthStatus = ''; }
					if (getAuthIp == 'sim' && authIp == '') { var authIp = temp; getAuthIp = ''; }
					if (getAuthHora == 'sim' && authHora == '') { var authHora = temp; getAuthHora = ''; }

					//jQuery('#wiseAuth').show();

					if (temp == 'Designador:') { var getAuthDes = 'sim'; }
					if (temp == 'Status:') { var getAuthStatus = 'sim'; }
					if (temp == 'IP V4:') { var getAuthIp = 'sim'; }
					if (temp == 'Data/Hora:') { var getAuthHora = 'sim'; }


					//if(debugMode=="sim"){saida+='['+d2+'] - ['+temp+']<br>';}
				}
			}
			if (authStatus == 'Autenticado') { authStatus = "<span class='verde'>Autenticado</span>" }
			jQuery('#diagnostico_auth').html(''
				+ '<div>Designador: ' + authDes + '</div>'
				+ '<div>Status: ' + authStatus + '</div>'
				+ '<div>Hora: ' + authHora + '</div>'

				+ '');


		} else {
			jQuery('#diagnostico_auth').html('');
			jQuery('#divisorAuth').css('display', 'none');
		}


		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		if (texto.length < 100) {
			console.log('Wise deslogado?');
				/*
				setTimeout(function(){
					var request = jQuery.ajax({
						url:        "http://wisetool.gvt.net.br/wisetool/login",
						dataType:   "text",
						type:       "post",
						data: {
							matricula:'g0054321',
							senha:'@12345'
							}
					});   
					request.always(function(){diagnosticoWise('request')});
				},1000)
       
				
			*/}
		for (d = 0; d < texto.length; d++) {
			var temp = '';

			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getSincronizada == 'sim' && Sinc == '') { var Sinc = temp; getSincronizada = ''; }
				if (getSNR == 'sim' && snr == '') { var snr = temp; getSNR = ''; }
				if (getATN == 'sim' && atn == '') { var atn = temp; getATN = ''; }
				if (getArmario == 'sim' && armario == '') { var armario = temp; getArmario = ''; }
				if (getArmarioIp == 'sim' && armarioIp == '') { var armarioIp = temp; getArmarioIp = ''; }
				if (getProduto == 'sim' && produto == '') { var produto = temp; getProduto = ''; }
				if (getTecnologia == 'sim' && tecnologia == '') { var tecnologia = temp; getTecnologia = ''; }
				if (getStatus == 'sim' && status == '') { var status = temp; getStatus = ''; }
				if (getSlot == 'sim' && slot == '') { var slot = temp; getSlot = ''; }
				if (getPorta == 'sim' && porta == '') { var porta = temp; getPorta = ''; }
				if (getRin == 'sim' && rin == '') { var rin = temp; getRin = ''; }
				if (getSeqPorta == 'sim' && seqPorta == '') { var seqPorta = temp; getSeqPorta = ''; }
				if (getPerfil == 'sim' && perfil == '') { var perfil = temp; getPerfil = ''; }
				if (getNomeBRAS == 'sim' && nomeBRAS == '') { var nomeBRAS = temp; getNomeBRAS = ''; }
				if (getDSLAM == 'sim') {
					//if(dslam.match(//gi))
					if (dslam == '') {
						var dslam = temp;
						var getDSLAM = 'sim'
					} else {
						var dslam = dslam + temp;
						var getDSLAM = ''
					}
				}
				if (getDistancia == 'sim' && distancia == '') { var distancia = temp; getDistancia = ''; }
				if (getDesignA == 'sim' && designadorW == '') { var designadorW = temp; getDesignA = ''; isHeavyUser(designadorW) }
				if (getProfileConf == 'sim' && profileConf == '') { var profileConf = temp; getProfileConf = ''; isHeavyUser(designadorW) }
				if (getPowOnt == 'sim' && powOnt == '') { var powOnt = temp; getPowOnt = ''; }
				if (getPowOlt == 'sim' && powOlt == '') { var powOlt = temp; getPowOlt = ''; }
				if (getdesAcess == 'sim' && desAcess == '') { var desAcess = temp; getdesAcess = ''; }
				if (getnPortaLogica == 'sim' && nPortaLogica == '') { var nPortaLogica = temp; getnPortaLogica = ''; }
				if (getnPortaOlt == 'sim' && nPortaOlt == '') { var nPortaOlt = temp; getnPortaOlt = ''; }

				//jQuery('#wiseAuth').show();

				if (temp == 'Velocidade Sincronizada (Mbps)') { var getSincronizada = 'sim'; }
				if (temp == 'Sinal Ruído (dB)') { var getSNR = 'sim'; }
				if (temp == 'Atenuação (dB)') { var getATN = 'sim'; }
				if (temp == 'Nome do Armário:') { var getArmario = 'sim'; }
				if (temp == 'Ip do Armário:') { var getArmarioIp = 'sim'; }
				if (temp == 'Produto Contratado:') { var getProduto = 'sim'; }
				if (temp == 'Tecnologia de Voz:') { var getTecnologia = 'sim'; }
				if (temp == 'Status:') { var getStatus = 'sim'; }
				if (temp == 'Slot:') { var getSlot = 'sim'; }
				if (temp == 'N° da Porta:') { var getPorta = 'sim'; }
				if (temp == 'RIN:') { var getRin = 'sim'; }
				if (temp == 'Ender. Seq. da Porta:') { var getSeqPorta = 'sim'; }
				if (temp == 'Indicador de Perfil:') { var getPerfil = 'sim'; }
				if (temp == 'Nome do BRAS:') { var getNomeBRAS = 'sim'; }
				if (temp == 'Modelo DSLAM:') { var getDSLAM = 'sim'; }
				if (temp == 'armário até a casa do cliente:') { var getDistancia = 'sim'; }
				if (temp == 'Designador ADSL:') { var getDesignA = 'sim'; }
				if (temp == 'Veloc. Profile Down/Up (Mbps):') { var getProfileConf = 'sim'; }
				if (temp == 'Potência ONT:') { var getPowOnt = 'sim'; }
				if (temp == 'Potência OLT:') { var getPowOlt = 'sim'; }
				if (temp == 'Designador de Acesso:') { var getdesAcess = 'sim'; }
				if (temp == 'N° da Porta Lógica:') { var getnPortaLogica = 'sim'; }
				if (temp == 'N° da Porta OLT:') { var getnPortaOlt = 'sim'; }


				if (temp == 'Designador de Banda Larga não foi encontrado.') { var erro = 'Designador de Banda Larga não foi encontrado.'; }
				if (temp == 'Erro ao buscar informações Wise Tool.') { var erroMin = 'Erro ao buscar informações Wise Tool.'; }
				if (temp == 'Existe uma divergêcia entre TBS e Radius nos campos:') { var erroTR = 'Existe uma divergêcia entre TBS e Radius.<br>'; }
				if (temp == 'Login:') { var login = 'sim'; }
				if (temp == 'Senha:') { var senha = 'sim'; }
				if (temp == 'Entrar') { var entrar = 'sim'; }




				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		//tratamentos





		//parametros fora em vermelho
		/* Ideia: o ideal seria transformar em função, nao tratar o produto/mbps aqui dentro, transforamr a velocidade e dados em variavel, a funcao só recebe parametros, q eh plano, sinc, snr e atn, e ai decide q cor vai colocar neles */





		/*
			5MB : 5120  750 , 6 5  1 2 ... 8534825542
			10MB: 11742 1024, 6 5, 1 2
			15MB: 17503 1024, 6 5, 1 1
			25MB: 26680 2344, 6 5, 2 0
			35MB: 37000 3600, 6 5, 2 0 ... 4230254027
			50MB: 26680 2344, 6 5, 2 0 ... 6730226220
		*/
		if (produto == 'Power 5 Mbps') {
			SincDwRefMin = 5120; SincUpRefMin = 750; atnDwRefMin = 1; atnUpRefMin = 2; snrDwRefMin = 6; snrUpRefMin = 5;
			SincDwRefMax = ''; SincUpRefMax = ''; atnDwRefMax = ''; atnUpRefMax = ''; snrDwRefMax = ''; snrUpRefMax = '';
		}
		else if (produto == 'Power 10 Mbps') {
			SincDwRefMin = 11742; SincUpRefMin = 1024; atnDwRefMin = 1; atnUpRefMin = 2; snrDwRefMin = 6; snrUpRefMin = 5;
			SincDwRefMax = ''; SincUpRefMax = ''; atnDwRefMax = ''; atnUpRefMax = ''; snrDwRefMax = ''; snrUpRefMax = '';
		}
		else if (produto == 'Power 15 Mbps') {
			SincDwRefMin = 17503; SincUpRefMin = 1024; atnDwRefMin = 1; atnUpRefMin = 1; snrDwRefMin = 6; snrUpRefMin = 5;
			SincDwRefMax = ''; SincUpRefMax = ''; atnDwRefMax = ''; atnUpRefMax = ''; snrDwRefMax = ''; snrUpRefMax = '';
		}
		else if (produto == 'Power 25 Mbps') {
			SincDwRefMin = 26680; SincUpRefMin = 2344; atnDwRefMin = 2; atnUpRefMin = 0; snrDwRefMin = 6; snrUpRefMin = 5;
			SincDwRefMax = ''; SincUpRefMax = ''; atnDwRefMax = ''; atnUpRefMax = ''; snrDwRefMax = ''; snrUpRefMax = '';
		}
		else if (produto == 'Power 35 Mbps') {
			SincDwRefMin = 37000; SincUpRefMin = 3600; atnDwRefMin = 2; atnUpRefMin = 0; snrDwRefMin = 6; snrUpRefMin = 5;
			SincDwRefMax = ''; SincUpRefMax = ''; atnDwRefMax = ''; atnUpRefMax = ''; snrDwRefMax = ''; snrUpRefMax = '';
		}
		else if (produto == 'Power 50 Mbps') {
			SincDwRefMin = 51172; SincUpRefMin = 5120; atnDwRefMin = 2; atnUpRefMin = 0; snrDwRefMin = 6; snrUpRefMin = 5;
			SincDwRefMax = ''; SincUpRefMax = ''; atnDwRefMax = ''; atnUpRefMax = ''; snrDwRefMax = ''; snrUpRefMax = '';
		}
		else {
			//nao processar validação
			SincDwRefMin = ''; SincUpRefMin = ''; atnDwRefMin = ''; atnUpRefMin = ''; snrDwRefMin = ''; snrUpRefMin = '';
			SincDwRefMax = ''; SincUpRefMax = ''; atnDwRefMax = ''; atnUpRefMax = ''; snrDwRefMax = ''; snrUpRefMax = '';
		}

		if (Sinc) {
			var SincUp = ''; SincDw = '';//<span class="verde">
			var SincUp = parseInt(Sinc.split(' ')[1]);
			var SincDw = parseInt(Sinc.split(' ')[0]);
			var atnUp = parseInt(atn.split(' ')[1]);
			var atnDw = parseInt(atn.split(' ')[0]);
			var snrUp = parseInt(snr.split(' ')[1]);
			var snrDw = parseInt(snr.split(' ')[0]);

			if (SincDw < SincDwRefMin) { SincDwColor = 'vermelho' } else { SincDwColor = 'verde' }
			if (SincUp < SincUpRefMin) { SincUpColor = 'vermelho' } else { SincUpColor = 'verde' }
			if (atnDw < atnDwRefMin) { atnDwColor = 'vermelho' } else { atnDwColor = 'verde' }
			if (atnUp < atnUpRefMin) { atnUpColor = 'vermelho' } else { atnUpColor = 'verde' }
			if (snrDw < snrDwRefMin) { snrDwColor = 'vermelho' } else { snrDwColor = 'verde' }
			if (snrUp < snrUpRefMin) { snrUpColor = 'vermelho' } else { snrUpColor = 'verde' }

		}

		//fim validação parametros





		//definir cores quando um filtro de erro for encontrado
		if (status == "BLOQUEADO") { var status = 'Status: <span class="dados_erro">' + status + '</span>' }
		else if (status == "BLOQUEIO PARCIAL") { var status = 'Status: <span class="dados_erro">' + status + '</span>' }
		else if (status == "ATIVO") { var status = 'Status: <span class="verde">' + status + '</span>' }

		if (perfil == "cobranca_parcial_redback") { var perfil = 'Perfil: <span class="dados_erro">' + perfil + '</span>' }
		if (perfil == "ab") { var perfil = 'Perfil: <span class="dados_erro">' + perfil + '</span>' }

		if (parseInt(seqPorta) == 0) {
			var seqPorta = 'Primário: <span id="painel-Wise-seqporta" class="dados_erro">' + seqPorta + '</span>';
			setTimeout(function () { diagnosticoWise('request') }, 1000)
		}
		else {
			var seqPorta = 'Primário: <span id="painel-Wise-seqporta" class="dados_ok">' + seqPorta + '</span>';
			//aqui vai o if que detecta localstorage da distancia e faz a consulta do wiseadicionais, nao esquecer de remover esse localstorage quando salvar ou deletar o atendimento atual

			if (!localStorage['distanciaTPA'] && !erro) {
				//se nao existe, busca a distancia
				diagnosticoWise('request', 'informacoesSagre');

			}
			else if (localStorage['distanciaTPA'] == '?' && distancia) {
				//grava ou ok, ou grava erro, mas nao deixa em branco e nem deixa em '?'
				if (distancia.indexOf('(metros)') > -1) {
					console.log('Gravar: ' + distancia)
					localStorage['distanciaTPA'] = distancia;
					var distanciaFinal = localStorage['distanciaTPA'];
					jQuery('#wiseInfo-distancia').html(distanciaFinal)
					//notes_operador add distancia
					if (jQuery('#notes_operador').val().indexOf('(metros)') > -1) { } else {
						var temp_notes_operador = jQuery('#notes_operador').val()
						jQuery('#notes_operador').val('Distância: ' + distanciaFinal + '\n' + temp_notes_operador)
					}
				} else {
					console.log('Gravar: Distancia nao encontrada')
					localStorage['distanciaTPA'] = 'E:' + distancia + '';
				}
			}
			else if (localStorage['distanciaTPA'] == '?' && !distancia) {
				//algo mandou buscar a distancia, mas falhou, consultar novamente (pode virar loop infinito)
				// o que fazer?
				//diagnosticoWise('request','informacoesSagre');
				localStorage['distanciaTPA'] = 'Erro'

			} else if (localStorage['distanciaTPA'].indexOf('(metros)') > -1) {
				var distancia = localStorage['distanciaTPA']
			} else {
				console.log('Sem ação ao buscar distância Wise/Sagre')
			}
			//console.log('testeloop')
		}

		jQuery('#wiseInfo-banda').html(produto)


		if (erro) {
			jQuery('#diagnosticoWisec').html('<div style="white-space:pre-wrap;"><span class="vermelho">' + erro + '</span></div><br>');
		} else {
			if (login == 'sim' && senha == 'sim' && entrar == 'sim') {
				//If keeper ativado:
				keeper_wise_login({
					'modo': 'retry',
					'callback': diagnosticoWise,
					'databack': 'request'
				});
				//keeper_wise('request');
				//setTimeout(function(){diagnosticoWise('request')},100)
				//---
				document.getElementById('diagnostico_Wise').style.background = '#ffffe6';
				jQuery('#diagnosticoWisec').html('<br><br><span class="vermelho"><center>WiseTool Deslogado</center></span><br><center>Faça login na página do Wise, ou caso queira usar relogin automatico, ative o Keeper</center><br>')
			} else {
				if (nPortaLogica) {
					var dadosPrimario = seqPorta + ' / Slot:<span id="painel-Wise-slot" class="verde">' + slot + '</span> / RIN:<span id="painel-Wise-rin" class="verde">' + rin + '</span> <br> Porta Lógica: <span id="painel-Wise-porta" class="verde">' + nPortaLogica + '</span> / Porta OLT: <span id="painel-Wise-Olt" class="verde">' + nPortaOlt + '</span><br>'
				} else if (porta) {
					var dadosPrimario = seqPorta + ' (Slot:<span id="painel-Wise-slot" class="verde">' + slot + '</span> / Porta: <span id="painel-Wise-porta" class="verde">' + porta + '</span> / RIN:<span id="painel-Wise-rin" class="verde">' + rin + '</span>)<br>'
				} else {
					var dadosPrimario = '...'
				}
				document.getElementById('diagnostico_Wise').style.background = '';
				jQuery('#diagnosticoWisec').html('<div style="white-space:pre-wrap;">'
					// +'<span class="vermelho">'+erroTR+'</span>'
					+ 'Armario: <span id="painel-Wise-armario" class="verde cptxt">' + armario + '</span> / IP: <span id="painel-Wise-iparmario" class="verde  cptxt">' + armarioIp + '</span><br>'
					+ 'DSLAM: <span id="painel-Wise-dslam" class="verde">' + dslam + '</span><br>'
					+ dadosPrimario
					+ 'Produto: <span id="painel-Wise-produto" class="azul">' + produto + '</span><br>'
					+ 'Tecnologia: <span id="painel-Wise-tecnologia" class="azul">' + tecnologia + '</span><br>'
					+ status + '<br>'
					+ 'BRAS: <span class="verde cptxt">' + nomeBRAS + '</span> / Perfil:<span class="verde">' + perfil + '</span><br>'
					+ 'Distancia: <span class="azul cptxt">' + distancia + '<br>'
					+ '</div>');

				if (SincDw) {
					jQuery('#diagnostico_parametrosc').html('<div style="white-space:pre-wrap;">'
						+ 'Profile: <span class="detectar">' + profileConf + '</span>\n'
						+ 'Sincronizado: <span class="' + SincDwColor + '">' + SincDw + '</span> - <span class="' + SincUpColor + '">' + SincUp + '</span>\n'
						+ 'Sinal Ruído: <span class="' + snrDwColor + '">' + snrDw + '</span> - <span class="' + snrUpColor + '">' + snrUp + '</span>\n'
						+ 'Atenuação: <span class="' + atnDwColor + '">' + atnDw + '</span> - <span class="' + atnUpColor + '">' + atnUp + '</span>\n'
						+ '</div>');
				} else if (powOlt) {
					jQuery('#diagnostico_parametrosc').html('<div style="white-space:pre-wrap;">'
						+ 'Designador Acesso: <span class="verde"> ' + desAcess + '</span>\n'
						+ 'Profile: <span class="detectar"> ' + profileConf + '</span>\n'
						+ 'Potência ONT: <span class="' + (validaPotencia(powOnt) ? 'verde' : 'vermelho') + '">' + powOnt + '</span>\n'
						+ 'Potência OLT: <span class="' + (validaPotencia(powOlt) ? 'verde' : 'vermelho') + '">' + powOlt + '</span>\n'
						+ '</div>');
				} else {
					jQuery('#diagnostico_parametrosc').html('<div style="white-space:pre-wrap;">'
						+ 'Profile: <span class="detectar">' + profileConf + '</span>\n'
						+ 'Sincronizado: <span class="' + SincDwColor + '">' + SincDw + '</span> - <span class="' + SincUpColor + '">' + SincUp + '</span>\n'
						+ 'Sinal Ruído: <span class="' + snrDwColor + '">' + snrDw + '</span> - <span class="' + snrUpColor + '">' + snrUp + '</span>\n'
						+ 'Atenuação: <span class="' + atnDwColor + '">' + atnDw + '</span> - <span class="' + atnUpColor + '">' + atnUp + '</span>\n'
						+ '</div>');
				}

				//alert(SincDw);
				if (SincDw > 0 || parseFloat(powOnt) < 0) {
					if (jQuery('#notes_banda')) {
						if (!jQuery('#notes_banda').val()) {
							addChecklist('parametros')
						}

					}
					if (jQuery('#autochecklist').prop('checked')) { addChecklist('parametros') }
				}


			}
		}




		if (debugMode == "sim") {
			jQuery('#debug-wise').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			jQuery('#modal-3').modal('show');
		}
	}
	else if (resposta == "404") {
		jQuery('#diagnosticoWisec').html('Erro 404')
	}
	else if (resposta == "401") {
		jQuery('#diagnosticoWisec').html('Erro 401: Para corrigir abra o wise original pelo menos 1 vez.')
	}
	else {
		toastr.warning('Wisetool: Consulta Cancelada')
	}

}

function validaPotencia(p) {

	var pow = parseFloat(p);
	if (pow > -25 & pow < -8) {
		output = true;
	} else {
		output = false;
	}
	return output;
}
//function para buscar ViewState do GPS

function gps_preRequest(modo, callback, opt) {
	var request = jQuery.ajax({
		url: "http://gpsco.gvt.net.br/gps/co/atendimento/",
		timeout: 5000,
		dataType: "text",
		type: "get",
	});
	request.done(function () {
		console.log('Gps : ok1');
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(request.responseText);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//toastr.info("pré");
		var gpsViewState = "";
		gpsViewState = jQuery(tempDiv).find("input[name='javax.faces.ViewState']")[0]
		if (gpsViewState.value) {
			//toastr.info(gpsViewState.value);
			opt.viewState = gpsViewState.value
			//callback(opt);
			consultaGps(opt.modo, opt.dados, opt.viewState)
			//callback(opt.modo,opt.dados,opt.viewState)
		} else { console.error('Erro ao obter view') }

	});
	request.fail(function (xhr, status, errorThrown) { console.log('Gps : Falha, ' + status + ' - ' + errorThrown); });
	request.always(function () { });
}

//===========================================================================
//Buscar GPS
/*
OBS IMPORTANTE:
quanto tem duas ordens no gps ele apresenta uma popup e nao carrega nenhuma das duas...
id da box de pergunta: jQuery('#formInformacoesAtendimento\\:tableInformacoesAtendimento_data').find('tr')
pegar os TRs da table, e pegar o data-rk de cada TR, cada TR é referente a uma ordem
teste[0].getAttribute('data-rk')

pegar os produtos do cliente: jQuery('#formDadosClienteAtendimento\\:listaInstancia_input').find('option')

consultaGps('request',inst_ou_ativ)
*/
function consultaGps(modo, dados, viewState) {
	var callResponse = consultaGps;
	if (modo == 'request') {
		//var viewState={};
		//console.log(viewState);
		if (!viewState) {
			var opt = {};
			opt.modo = "request"
			opt.dados = dados
			gps_preRequest('consulta', consultaGps, opt)
			return;
		} else {
			//console.log ("aha!")
		}
		blockUI(jQuery("#gpsInfoS"));
		//var instancia=jQuery('#instancia').val();
		//var atividade=jQuery('#atividade').val();
		if (dados.length < 10) { var instancia = ""; var atividade = dados; }
		else { var instancia = dados; var atividade = ""; }


		var url = "http://gpsco.gvt.net.br/gps/co/atendimento/index.jsf";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
			cache: false,
			data: {
				"javax.faces.partial.ajax": "true",
				"javax.faces.source": "formFiltroPesquisa:buttonPesquisa",
				"javax.faces.partial.execute": "@all",
				"javax.faces.partial.render": "formInformacoesAtendimento:dialogInformacoesAtendimento formAtalhos formDadosClienteAtendimento formPainelSelecaoTipificacao formMenuAbas formVisualizacaoAbas formExecucaoDiagnostico formLinks formSelecaoResultadoAtendimento formFerramentasTroubleshooting",
				"formFiltroPesquisa:buttonPesquisa": "formFiltroPesquisa:buttonPesquisa",
				"formFiltroPesquisa": "formFiltroPesquisa",
				"formFiltroPesquisa:txtTt": atividade,
				"formFiltroPesquisa:txtDocumento": "",
				"formFiltroPesquisa:txtInstancia": instancia,
				"javax.faces.ViewState": viewState
			}
		});
		request.done(function () {
			console.log('GPS Sucesso');
			callResponse('response', request.responseText);
		});
		request.fail(function (xhr, status, errorThrown) {
			callResponse('response', xhr.status);
			console.log('GPS Falha');
		});
		request.always(function () { unblockUI(jQuery("#gpsInfoS")); });
	}
	else if (modo == 'response') {
		//unblockUI(jQuery("#gpsInfoS"));
		filtroGPS(dados);
	}
	else { }

}


//Filtros GPS    
function filtroGPS(resposta) {
	if (resposta == "404") {
		toastr.warning('Erro 404')
	}
	else if (resposta == "401") {
		toastr.warning('GPS negou acesso')
	}
	else {
		//reseta variaveis antes de usa-las
		var debugMode = "sim";
		//var instancia = jQuery('#instancia').val(); //Nao me lembro porque criei esta linha
		var saida = '', gpsCliente = '';
		var gpsPosicaofisica = [];
		var gpsPosicaofisicaFinal = '';
		var getInstancia = '';
		ttt = resposta;
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		// Tentativa de detectar o G
		//jQuery('#campo_operador').val(jQuery(tempDiv).find('label#formFiltroPesquisa\\:j_idt37').text());
		//alert(jQuery(tempDiv).find('label#formFiltroPesquisa\\:j_idt37').text())

		// Detectar se o cliente tem mais de uma ordem aberta
		var seExiste2os = jQuery(tempDiv).find('#formInformacoesAtendimento\\:dialogInformacoesAtendimento').html()
		if (seExiste2os) {
			var seExiste2osTBL = jQuery(tempDiv).find('#formInformacoesAtendimento\\:tableInformacoesAtendimento_data')
			var seExiste2osTR = jQuery(tempDiv).find('tr')
			for (x1x2 = 0; x1x2 < seExiste2osTR.length; x1x2++) {
				if (x1x2 > 0) {
					if (seExiste2osTR[x1x2].dataset.rk) {
						alert(seExiste2osTR[x1x2].dataset.rk)
						jQuery('#ordensAtivasGPS-c').html(seExiste2os)
						jQuery('#ordensAtivasGPS').modal('show');
					}
				}
			}


		}


		gpsProds = jQuery(tempDiv).find('#formDadosClienteAtendimento\\:listaInstancia_input').find('option');
		gpsLineProds = '';
		gLprodutos = ''
		for (i = 0; i < gpsProds.length; i++) {
			gpsLineProds = gpsLineProds + gpsProds[i].innerText + '<br>';

			var desColor = ' ';
			var Destitle = ' ';
			var desIcon = ' ';// check clock alert
			var desId = '';
			var desType = '';
			if (gpsProds[i].innerHTML.match(/Banda/g)) { desId = 'desbl' + i; desType = ' BL <img data-id="desbl' + i + '" data-msg="Designador BL ' + i + '" name="imgicp" src="chrome-extension://' + extVSMonitorId + '/imgs/icons/icon-copy.png" style="cursor:pointer;" /> <img id="" src="chrome-extension://' + extVSMonitorId + '/imgs/icons/blank.png" />'; desColor = 'blue'; }
			if (gpsProds[i].innerHTML.match(/TV/g)) { desId = 'destv' + i; desType = ' TV <img data-id="destv' + i + '" data-msg="Designador TV ' + i + '" name="imgicp" src="chrome-extension://' + extVSMonitorId + '/imgs/icons/icon-copy.png" style="cursor:pointer;" /> <img id="" src="chrome-extension://' + extVSMonitorId + '/imgs/icons/blank.png" />'; }
			if (gpsProds[i].innerHTML.match(/Linha/g)) { desId = 'desdn' + i; desType = ' Dn <img data-id="desdn' + i + '" data-msg="Instancia ' + i + '"     name="imgicp" src="chrome-extension://' + extVSMonitorId + '/imgs/icons/icon-copy.png" style="cursor:pointer;" /> <img id="imgicdntbs_desdn' + i + '" src="chrome-extension://' + extVSMonitorId + '/imgs/icons/tbs-12g.png"  style="cursor:pointer;" name="tbsformat" data-id="desdn' + i + '" data-msg="Instancia ' + i + '"/>'; desColor = 'orange'; }
			if (gpsProds[i].innerHTML.match(/ - Ativo/g)) { desIcon = 'check'; desTitle = 'Ativo'; desIna = 'text-decoration:none;'; }
			if (gpsProds[i].innerHTML.match(/ - Inativo/g)) { desIcon = 'alert'; desTitle = 'Inativo'; desColor = '#cccccc'; desIna = 'color:#cccccc;'; }
			if (gpsProds[i].innerHTML.match(/ - Pendente/g)) { desIcon = 'clock'; desTitle = 'Pendente'; desIna = 'text-decoration:none;'; }

			gLprodutos += '<div class="ui-datalist-item">'
				+ '<a href="#" class="ui-commandlink ui-widget ui-icon ui-icon-' + desIcon + '" style="float:left;" title="' + desTitle + '">&nbsp;</a><span style="display:inline-block;height:16px;' + desIna + '">'
				+ desType + '  <span id="' + desId + '" style=\"color:' + desColor + ';\">' + gpsProds[i].innerHTML.replace(/TV por Assinatura: |Linha Telefônica: |Banda Larga: | - Ativo| - Pendente| - Inativo/gi, "")
				+ '</span></span></div>';
		}
		jQuery('#gpsInfo2').html(gLprodutos)
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';

			var temp = texto[d].trim();
			if (temp.length > 0) {

				//if(getCliente=='sim' && gpsCliente==''){var gpsCliente = temp;getCliente='';}
				if (getAtividade == 'sim') { var gpsAtividade = temp; getAtividade = ''; }
				if (getInstancia == 'sim') { var gpsInstancia = temp; getInstancia = ''; }
				if (getCliente == 'sim') { var gpsCliente = temp; getCliente = ''; }
				if (getTecnico == 'sim') { var gpsTecnico = temp; getTecnico = ''; }
				if (getTMatricula == 'sim') { var gpsTMatricula = temp; getTMatricula = ''; }
				if (getDocumento == 'sim') { var gpsDocumento = temp.replace(/\.|-|\//gi, ""); getDocumento = ''; }
				if (getPon == 'sim') { var gpsPon = temp; getPon = ''; }
				if (getRpon == 'sim') { var gpsRpon = temp; getRpon = ''; }
				if (getArmario == 'sim') { var gpsArmario = temp; getArmario = ''; }
				if (getTipo == 'sim') { var gpsTipo = temp; getTipo = ''; }

				//if(temp=='Cliente:'){	var getCliente='sim';}

				if (temp == 'Atividade:') { var getAtividade = 'sim'; }
				if (temp == 'Instância:') { getInstancia = 'sim'; }
				if (temp == 'Cliente:') { var getCliente = 'sim'; }
				if (temp == 'Técnico:') { var getTecnico = 'sim'; }
				if (temp == 'Matrícula:') { var getTMatricula = 'sim'; }
				if (temp == 'Documento:') { var getDocumento = 'sim'; }
				if (temp == 'PON:') { var getPon = 'sim'; }
				if (temp == 'RPON:') { var getRpon = 'sim'; }
				if (temp == 'Armário:') { var getArmario = 'sim'; }
				if (temp == 'Tipo:') { var getTipo = 'sim'; }

				//if(temp.match(/Posição Física:/g)){} //tirei o bloco abaixo de dentro deste for pq usando meu modo via jquery a posição fisica se quebra em duas partes e nao da pra tratar como uma string completa em 1 linha
				if (temp.match(/node Address:/g)) { gpsPosicaofisica[0] = temp.split('node Address:')[1].split(',')[0].trim(); }
				if (temp.match(/Porta : /g)) {
					var portasExplodidas = temp.split('Porta : ');
					if (!gpsPosicaofisica[0]) {
						gpsPosicaofisica[0] = portasExplodidas[1].split(' ')[0] + ' ';
						console.log(portasExplodidas[1].split(' ')[0] + ' ')
					}
					else if (!gpsPosicaofisica[1]) {
						gpsPosicaofisica[1] = portasExplodidas[1].split(' ')[0] + ' ';
						console.log(portasExplodidas[1].split(' ')[0] + ' ')
					}
					else { }

				} else { }


				//Filtrar sujeiras
				if (gpsCliente.indexOf('ui-button') > -1) { var gpsCliente = gpsCliente.split('ui-button')[0] }


				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}
		if (gpsPosicaofisica) {
			if (gpsPosicaofisica.length > 1) {
				var gpsPosicaofisicaFinal = gpsPosicaofisica[0] + ' *  * ' + gpsPosicaofisica[1]
				if (gpsPosicaofisica[0] == gpsPosicaofisica[1]) { gpsPosicaofisicaFinal = gpsPosicaofisica[0] }
			} else if (gpsPosicaofisica.length == 1) {
				var gpsPosicaofisicaFinal = gpsPosicaofisica[0]
			} else {
				var gpsPosicaofisicaFinal = 'Indefinido'
			}
		}


		//Jogar as informações nos campos que estiverem em branco
		jQuery('#gpsInfo-atividade').html(gpsAtividade)
		jQuery('#gpsInfo-pon').html(gpsPon)
		jQuery('#gpsInfo-armario').html(gpsArmario)
		if (jQuery('#atividade').val()) {/*...*/ } else { jQuery('#atividade').val(gpsAtividade) }
		if (jQuery('#instancia').val()) {/*...*/ } else { jQuery('#instancia').val(gpsInstancia) }
		if (jQuery('#campo_tecnico').val()) {/*...*/ } else { jQuery('#campo_tecnico').val(gpsTecnico) }
		if (jQuery('#campo_tmatricula').val()) {/*...*/ } else { jQuery('#campo_tmatricula').val(gpsTMatricula); isChecklist(); }
		if (jQuery('#campo_cliente').val()) {/*...*/ } else { jQuery('#campo_cliente').val(gpsCliente); }
		if (jQuery('#campo_tipo').val()) {/*...*/ } else { jQuery('#campo_tipo').val(gpsTipo); }
		if (jQuery('#campo_primario').val()) {/*...*/ } else { jQuery('#campo_primario').val(gpsPosicaofisicaFinal); }
		if (jQuery('#campo_pon').val()) {/*...*/ } else { jQuery('#campo_pon').val(gpsPon) }
		//
		jQuery('#toolbox-rpon').html(gpsRpon);
		jQuery('#toolbox-atividade').html(gpsAtividade);
		jQuery('#toolbox-instancia').html(gpsInstancia);
		keepChecknote()

		jQuery('#gpsInfo-cliente').html(gpsCliente);
		jQuery('#gpsInfo-tecnico').html(gpsTecnico);
		jQuery('#gpsInfo-documento').html(gpsDocumento);



		if (debugMode == "sim") {
			jQuery('#debug-gps').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			//jQuery('#debugbox').modal('show');
		}
	}

}


//===========================================================================
//Diagnostico Modelo
/*
	Funlção modelo
	quando o elementop alvo para resposta é mais de 1, igual o caso de wise parametros e wise autenticação, q sao obtidos na mesma função mas com tempos e execuções diferentes, o que fazer?
	definir o nome da função, e replicar ele na callresponse a cada vez que duplicar o modelo
*/

function diagnosticoModelo(modo, dados) {
	var callResponse = diagnosticoModelo;
	if (modo == 'request') {
		//adicionar espaços em branco só para nao bugar layout quando um elemento tem resposta antes do outro e a td aumenta
		jQuery('#diagnostico_Modeloc').html('<div style="white-space:pre-wrap;"><br><br><br><br></div>');
		blockUI(jQuery("#diagnostico_Modelo"));
		var instancia = jQuery('#instancia').val();
		var url = "http://wisetool.gvt.net.br/wisetool/SmartTools.action";
		var request = jQuery.ajax({
			url: url,
			dataType: "text",
			type: "post",
			cache: false,
			data: {
				redeAcessoVivo1: '',
				isTecnologiaDTH: '',
				acao: 'consultar',
				portaIdFxs: '',
				instanciaInformacoesSip: '',
				tipoBridge: '',
				deviceId: '',
				idElemento: '',
				indexElemento: '',
				nomeElemento: '',
				cpeId: '',
				serialNumber: '',
				modemSerialNumber: '',
				action: '',
				dnsReverso: '',
				numIPCliente: '',
				serviceOrderId: '',
				prefixosOnt: 'ASKY,MTSC,MSTC,PACE,SAGE',
				idSsHistoricoCertificacao: '',
				idBaHistoricoCertificacao: '',
				tipoCertificacao: '',
				defautModulation: null,
				defautModulation: null,
				tipoPesquisa: 'Instancia',
				searchValue: instancia,
				nmFerramentas: '',
				baCertificar: '',
				modem: '',
				redeSemFio: true,
				nomeModem: '',
				ipMacAddress: '',
				ipMacAddressValue: ''
			}
		});
		request.done(function () {
			console.log('Wise Sucesso');
			callResponse('response', request.responseText);
		});
		request.fail(function (xhr, status, errorThrown) {
			callResponse('response', xhr.status);
			console.log('Wise Falha');
		});
		request.always(function () { });
	}
	else if (modo == 'response') {
		filtroWise(dados);
		unblockUI(jQuery("#diagnostico_parametros"));
		unblockUI(jQuery("#diagnostico_Wise"));
	}
	else { }

}


//Filtros Wise
function filtroModelo(resposta) {
	if (resposta == "404") {
		jQuery('#diagnosticoWisec').html('Erro 404')
	}
	else if (resposta == "401") {
		jQuery('#diagnosticoWisec').html('Erro 401: Para corrigir abra o wise original pelo menos 1 vez.')
	}
	else {
		//reseta variaveis antes de usa-las
		var debugMode = "nao";
		var instancia = jQuery('#instancia').val();
		var Sinc = '';
		var snr = '';
		var atn = '';
		var armario = '';
		var armarioIp = '';
		var produto = '';
		var tecnologia = '';
		var status = '';
		var slot = '';
		var porta = '';
		var rin = '';
		var seqPorta = '';
		var perfil = '';
		var nomeBRAS = '';
		var dslam = '';
		var distancia = '';
		var saida = '';

		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//...
		//var pnTables=jQuery(tempDiv).find('textarea[name="emuladorTelNet"]').text();
		var texto = tempDiv.text();
		//texto=texto.split('Sagre Oper On Line')[1];

		//inicia a magica
		var texto = texto.split('\n');
		for (d = 0; d < texto.length; d++) {
			var temp = '';

			var temp = texto[d].trim();
			if (temp.length > 0) {

				if (getSincronizada == 'sim' && Sinc == '') { var Sinc = temp; getSincronizada = ''; }
				if (getSNR == 'sim' && snr == '') { var snr = temp; getSNR = ''; }
				if (getATN == 'sim' && atn == '') { var atn = temp; getATN = ''; }
				if (getArmario == 'sim' && armario == '') { var armario = temp; getArmario = ''; }
				if (getArmarioIp == 'sim' && armarioIp == '') { var armarioIp = temp; getArmarioIp = ''; }
				if (getProduto == 'sim' && produto == '') { var produto = temp; getProduto = ''; }
				if (getTecnologia == 'sim' && tecnologia == '') { var tecnologia = temp; getTecnologia = ''; }
				if (getStatus == 'sim' && status == '') { var status = temp; getStatus = ''; }
				if (getSlot == 'sim' && slot == '') { var slot = temp; getSlot = ''; }
				if (getPorta == 'sim' && porta == '') { var porta = temp; getPorta = ''; }
				if (getRin == 'sim' && rin == '') { var rin = temp; getRin = ''; }
				if (getSeqPorta == 'sim' && seqPorta == '') { var seqPorta = temp; getSeqPorta = ''; }
				if (getPerfil == 'sim' && perfil == '') { var perfil = temp; getPerfil = ''; }
				if (getNomeBRAS == 'sim' && nomeBRAS == '') { var nomeBRAS = temp; getNomeBRAS = ''; }
				if (getDSLAM == 'sim' && dslam == '') { var dslam = temp; getDSLAM = ''; }
				if (getDistancia == 'sim' && distancia == '') { var distancia = temp; getDistancia = ''; }


				if (temp == 'Velocidade Sincronizada (Mbps)') { var getSincronizada = 'sim'; }
				if (temp == 'Sinal Ruído (dB)') { var getSNR = 'sim'; }
				if (temp == 'Atenuação (dB)') { var getATN = 'sim'; }
				if (temp == 'Nome do Armário:') { var getArmario = 'sim'; }
				if (temp == 'Ip do Armário:') { var getArmarioIp = 'sim'; }
				if (temp == 'Produto Contratado:') { var getProduto = 'sim'; }
				if (temp == 'Tecnologia de Voz:') { var getTecnologia = 'sim'; }
				if (temp == 'Status:') { var getStatus = 'sim'; }
				if (temp == 'Slot:') { var getSlot = 'sim'; }
				if (temp == 'N° da Porta:') { var getPorta = 'sim'; }
				if (temp == 'RIN:') { var getRin = 'sim'; }
				if (temp == 'Ender. Seq. da Porta:') { var getSeqPorta = 'sim'; }
				if (temp == 'Indicador de Perfil:') { var getPerfil = 'sim'; }
				if (temp == 'Nome do BRAS:') { var getNomeBRAS = 'sim'; }
				if (temp == 'Modelo DSLAM:') { var getDSLAM = 'sim'; }
				if (temp == 'Distância do armário até a casa do cliente:') { var getDistancia = 'sim'; }

				if (debugMode == "sim") { saida += '[' + d + '] - [' + temp + ']<br>'; }
			}
		}


		jQuery('#diagnosticoWisec').html('<div style="white-space:pre-wrap;">'
			+ 'Armario: <span class="verde">' + armario + '</span> / IP: <span class="verde">' + armarioIp + '</span><br>'
			+ 'DSLAM: <span class="verde">' + dslam + '</span><br>'
			+ 'Slot:<span class="verde">' + slot + '</span> / <span class="verde">Porta:' + porta + '</span> / RIN:<span class="verde">' + rin + '</span> / Primário: <span class="verde">' + seqPorta + '</span><br>'
			+ 'Produto: <span class="verde">' + produto + '</span><br>'
			+ 'Tecnologia: <span class="verde">' + tecnologia + '</span><br>'
			+ 'Status: <span class="verde">' + status + '</span><br>'
			+ 'BRAS: <span class="verde">' + nomeBRAS + '</span> / Perfil:<span class="verde">' + perfil + '</span><br>'
			+ 'Distancia: <span class="azul">' + distancia + '<br>'

			+ '</div>');
		jQuery('#diagnostico_parametrosc').html('<div style="white-space:pre-wrap;">'
			+ 'Sincronizado: <span class="verde">' + Sinc + '</span><br>'
			+ 'Sinal Ruído: <span class="verde">' + snr + '</span><br>'
			+ 'Atenuação: <span class="verde">' + atn + '</span><br>'
			+ '</div>');



		if (debugMode == "sim") {
			jQuery('#debugbox').html('<div style="white-space:pre-wrap;">' + saida + '</div>');
			jQuery('#modal-3').modal('show');
		}
	}

}




//===========================================================================
// Cliente HeavyUser, adaptado do original no PL
//cliHeavyUserStatus
function isHeavyUser(designador) {
	if (designador) {
		var VlrCkFraude = designador;
	} else {
		var VlrCkFraude = jQuery('#instancia').val();
	}
	if (VlrCkFraude) {
		jQuery.ajax({
			url: 'http://sv2kppag2/plcontrol/modulos/regional/Checklist/ChecklistBAnew/getFraude.php',
			type: 'POST',
			data: 'VlrCkFraude=' + VlrCkFraude,
			//dataType: "json",
			success: function (retorno) {

				//alert(VlrCkFraude);
				//alert('111:'+retorno);

				if (retorno != null && retorno != undefined && retorno != '') {
					//$("#help-frd").text("Cliente Heavy User - Duvidas Verificar EFIKA ou SUPERVISOR").css( "color", "red" );
					jQuery('#cliHeavyUserStatus').html('<span style="" class="label label2 label-danger">Sim</span>');
				} else {
					//$("#help-frd").text("Heavy User não encontrada").css( "color", "black" );
					jQuery('#cliHeavyUserStatus').html('<span style="" class="label label2 label-success">Nao</span>');
				}
			}
		});
	}



}

//------------------------------






//===========================================================================
// Cliente HeavyUser, adaptado do original no PL
//cliHeavyUserStatus
function isHeavyUser_antigo(designador) {
	if (designador) {
		var VlrCkFraude = designador;
	} else {
		var VlrCkFraude = jQuery('instancia').val();
		jQuery('#cliHeavyUserStatus').html('<img src="../imgs/ajax-loader2.gif">');
		setTimeout(function () {
			jQuery.ajax({
				url: 'http://sv2kppag2/plcontrol/modulos/regional/Checklist/ChecklistBAnew/getFraude.php',
				type: 'POST',
				data: 'VlrCkFraude=' + VlrCkFraude,
				//dataType: "json",
				success: function (retorno) {

					//alert(VlrCkFraude);
					//alert('111:'+retorno);

					if (retorno != null && retorno != undefined && retorno != '') {
						jQuery('#cliHeavyUserStatus').html('<span style="" class="label label2 label-danger">Sim</span>');
					} else {
						jQuery('#cliHeavyUserStatus').html('<span style="" class="label label2 label-success">Nao</span>');
					}
				},
				error: function (xhr) { console.log(xhr.responseText) }
			});
		}, 400);

		//var VlrCkFraude = 'CTA-81LRSWIT1-013';

		//alert('00000:'+VlrCkFraude);


	}

}





//===========================================================================//===========================================================================
//Tecnico Checklist adaptado do original no PL 
function isChecklist() {
	jQuery('#tecChecklistStatus').html('<img src="../imgs/ajax-loader2.gif">');
	setTimeout(function () {
		var LoginTecnico = jQuery('#campo_tmatricula').val();

		//jQuery('[name=chamadaindevida]').val('0');

		var PrimeiroCaracter = jQuery('#campo_tmatricula').val().substr(0, 1);

		if (PrimeiroCaracter != 'g'
			&& PrimeiroCaracter != 'G'
			&& PrimeiroCaracter != 'p'
			&& PrimeiroCaracter != 'P'
			&& PrimeiroCaracter != 'a'
			&& PrimeiroCaracter != 'A'
			&& PrimeiroCaracter != 'r'
			&& PrimeiroCaracter != 'R'
			&& PrimeiroCaracter != '8'
		) {
			document.getElementById('campo_tmatricula').style.border = "solid 1px #ff0000";
			jQuery('#tecChecklistStatus').html('<span style="" class="label label2 label-default">Invalido</span>');
		} else if (LoginTecnico.length < 8) {
			document.getElementById('campo_tmatricula').style.border = "solid 1px #ff0000";
			jQuery('#tecChecklistStatus').html('<span style="" class="label label2 label-default">Invalido</span>');
			//alert("Matrícula inválida");
		} else {
			document.getElementById('campo_tmatricula').style.border = "solid 1px #ddd";
			jQuery.ajax({
				url: 'http://sv2kppag2/plcontrol/modulos/regional/checklist/checklistbanew/GetTecOfensor.php',
				type: 'POST',
				data: 'LoginTecnico=' + LoginTecnico,
				dataType: "json",
				success: function (ret) {
					//alert(ret.LOGIN);
					if (ret.LOGIN != null && ret.LOGIN != undefined) {
						jQuery('#tecChecklistStatus').html('<span style="" class="label label2 label-warning2">Sim</span>');
					} else {
						jQuery('#tecChecklistStatus').html('<span style="" class="label label2 label-success">Nao</span>');
					}
				}

			});
		}
	}, 600);

}
//evento change no input matricula
jQuery("#campo_tmatricula").change(function (event) {
	isChecklist();
});

//===========================================================================

function detectarCNL(opt) {
	/*
		criar as duas funções principais:
		1 - corrigir erro de engenharia IMS e reconsultar Id
		2 - detectar CNL correto0 na hora de enviar CX (substituir o auto preencher atual)
		
		if corrigir-engenharia: imsID(sigla+portaComErro)
		unblockUI(jQuery(opt.destino));
		
		opt.instancia
		opt.destino
		opt.tbs
		
	*/
	if (opt) {
		console.log(opt)
		opt.instancia = apenasNumeros(opt.instancia);
		blockUI(jQuery('#' + opt.destino));
		if (xRequests.detectCNL) { xRequests.detectCNL.abort() }
		xRequests.detectCNL = jQuery.ajax({
			url: "http://pnadmin.gvt.com.br/pn/cnl.jsp?tipoConsulta=getCNL&cep=&sigla=&codigo=&telefone=" + opt.instancia,
			contentType: "application/x-www-form-urlencoded;charset=utf8",
			timeout: 5000,
			dataType: "text",
			type: "get",

		});
		xRequests.detectCNL.done(function () {/**/ });
		xRequests.detectCNL.fail(function (xhr, status, errorThrown) {/**/ });
		xRequests.detectCNL.always(function () { detectarCNL_filtro(xRequests.detectCNL, opt); unblockUI(jQuery('#' + opt.destino)); });



	} else { console.error('Erro, argumentos invalidos') }
}

function detectarCNL_filtro(response, opt) {

	var response = response.responseText.replace(/src=/gi, "alt=");
	var tempDiv = jQuery('<div>').html(response);

	jQuery(tempDiv).find("script").remove();
	jQuery(tempDiv).find("link").remove();
	jQuery(tempDiv).find("style").remove();
	jQuery(tempDiv).find("form").remove();
	jQuery(tempDiv).find("hr").remove();

	var table = jQuery(tempDiv).find(".field_table")[0]
	//aqui retorna a sigla da cidade
	//console.log(jQuery(table).find("td")[0].innerText)
	var sigla = jQuery(table).find("td")[0].innerText;
	//var sigla = sigla+sigla.indexOf('-')>-1?'':'-';
	//alert(sigla)
	//aqui retorna o CNL numerico
	console.log(jQuery(table).find("td")[1].innerText)

	//depois fazer os ifs e validar antes de chamar a imsID
	imsID(sigla + opt.tbs)

}
//===========================================================================
//Logar sistemas
function logarSistemas() {
	// ---
	keeper_eta_login();
	// ---
	keeper_ttv_login();
	keeper_ttv('request');
	// ---
	keeper_wise_login();
	setTimeout(function () {
		document.getElementsByName('toolFrame')[0].src = "";
		keeper_wise('request');
	}, 1000)
	// ---
	keeper_sas_login();
	keeper_sas('request');
	// ---
	var request = jQuery.ajax({
		url: "http://appsagre.gvt.net.br/Manobraunica/Acesso?dado=usr",
		dataType: "text",
		type: "post"
	});
	request.always(function () {
		/*diagnosticoTbs({
			'modo':'request',
			'input':'#instancia',
			'bloquear':'#diagnostico_TBS',
			'destino':'#diagnostico_TBSc',
			'filtro':filtroTBS
		});*/
	});
	// ---
	keeper_gestor_login('request');
	keeper_gestor('request');
	// ---
}

//===========================================================================
//Massiva SAS
function massivaSAS() {
	//
	jQuery('#massivaSasStatus').html('<img src="../imgs/ajax-loader2.gif">');
	//setTimeout(function(){
	//jQuery('#massivaSasStatus').html('<span style="" class="label label2 label-default">Non</span>');
	//},800);

}
function bloqueioGestor() {
	// função de simulador criada para qu7ando o gestor não conseguia responder a iontegração, remover função
	/*
	jQuery('#bloqueioGestorStatus').html('<img src="../imgs/ajax-loader2.gif">');
	setTimeout(function(){
		jQuery('#bloqueioGestorStatus').html('<span style="" class="label label2 label-default">Erro</span>');
	},700);
	
	
	setTimeout(function(){
		jQuery('#bloqueioGestorStatus').html('<img src="../imgs/ajax-loader2.gif">');
	},1000);
	setTimeout(function(){
		jQuery('#bloqueioGestorStatus').html('<span style="" class="label label2 label-default">Erro</span>');
	},1600);
	
		
	setTimeout(function(){
		jQuery('#bloqueioGestorStatus').html('<img src="../imgs/ajax-loader2.gif">');
	},1900);
	setTimeout(function(){
		jQuery('#bloqueioGestorStatus').html('<span style="" class="label label2 label-default">Erro</span>');
	},2300);
	
		
	setTimeout(function(){
		jQuery('#bloqueioGestorStatus').html('<img src="../imgs/ajax-loader2.gif">');
	},2700);
	setTimeout(function(){
		jQuery('#bloqueioGestorStatus').html('<span style="" class="label label2 label-default">Erro</span>');
	},3100);
	
	*/

}
function centralOrigem() {
	jQuery('#centralOrigem').html('<img src="../imgs/ajax-loader2.gif">');
	setTimeout(function () {
		jQuery('#swLogoOri').html('<img src="images/huawei.png">');
		jQuery('#centralOrigem').html('<div style="" class="label label2 label-default">IMS</div>');
	}, 1000);

	jQuery('#centralAtual').html('<img src="../imgs/ajax-loader2.gif">');
	setTimeout(function () {
		jQuery('#swLogoNow').html('<img src="images/nortel.png">');
		jQuery('#centralAtual').html('<div style="" class="label label2 label-default">Nortel</div>');
	}, 1300);
	//<img src="images/huawei.png">
	//<div style="" class="label label2 label-default">IMS</div>


}
//===========================================================================

function getSpider() {
	var spider = {};
	spider["a"] = localStorage[btoa('token')];
	spider["b"] = localStorage[btoa('ring')];
	return spider;
}
function bity(a) { return atob(a); }
//===========================================================================
//http://efika/web/action/lista_cidades_ims.php
//cod_area:11
/*
efikaCidadesIMS('instancia')
*/
function efikaCidadesIMS(opt) {
	if (opt) {
		var ddd = opt.substring(0, 2);
		//blockUI(jQuery(bloquearElemento));
		var request = jQuery.ajax({
			url: "http://efika/web/action/lista_cidades_ims.php",
			contentType: "application/x-www-form-urlencoded;charset=utf8",
			timeout: 5000,
			dataType: "text",
			type: "post",
			data: {
				"cod_area": ddd
			}
		});
		request.done(function () {/*---*/ });
		request.fail(function (xhr, status, errorThrown) { });
		request.always(function () {
			console.log(request.responseText);
			//unblockUI(jQuery(bloquearElemento));
			jQuery('#efk_cidades').html(request.responseText)
		});

	} else { console.error('Erro, argumentos invalidos') }
}
//===========================================================================
//
function efikaPriorizacaoChamado() {
	//if(opt){
	blockUI(jQuery('#priorizacaoINC'));
	var request = jQuery.ajax({
		url: "http://efika/web/action/consultaChamados_it.php",
		contentType: "application/x-www-form-urlencoded;charset=utf8",
		timeout: 5000,
		dataType: "text",
		type: "post",
		data: {
			"chamado_instancia": jQuery('#instancia').val()
		}
	});
	request.done(function () {
		var resposta = request.responseText
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//.indexOf('INC')

		var incPrior = jQuery(tempDiv).find('#vsm-inc').text()
		if (incPrior.match(/INC/gi)) {
			jQuery('#priorizacaoINC').html('<span name="MostrarPriorizacaoChamados" style="cursor:pointer" class="label label2 label-default">' + incPrior + '</span>')
		} else {
			jQuery('#priorizacaoINC').html('<span name="" style="" class="label label2 label-default">Nao</span>')
		}


	});
	request.fail(function (xhr, status, errorThrown) {
		jQuery('#priorizacaoINC').html('<span style="" class="label label2 label-default">Erro</span>')
	});
	request.always(function () {
		//console.log(request.responseText);
		//unblockUI(jQuery(bloquearElemento));
		//jQuery('#efk_cidades').html(request.responseText)
	});

	//}else{console.error('Erro, argumentos invalidos')}
}
//===========================================================================
//efikaConsultaChamado
function efikaConsultaChamado() {
	//if(opt){
	//blockUI(jQuery('#priorizacaoINC'));
	var request = jQuery.ajax({
		url: "http://sv2kppag1:8080/efika/painel_backoffice/consulta_auto_geral.php",
		contentType: "application/x-www-form-urlencoded;charset=utf8",
		timeout: 5000,
		dataType: "text",
		type: "get",
		data: {
			"get": jQuery('[name=MostrarPriorizacaoChamados]').text()
		}
	});
	request.done(function () {
		jQuery('#modalPriorizacao').modal('show');
		var resposta = request.responseText
		//coloca o conteudo da resposta em uma div não implementada
		var tempDiv = jQuery('<div>').html(resposta);
		var raw = jQuery('<div>').html(resposta);
		//remove tags de link, estilo e imagem da resposta
		jQuery(tempDiv).find("script").remove();
		jQuery(tempDiv).find("link").remove();
		jQuery(tempDiv).find("style").remove();
		//.indexOf('INC')
		jQuery('#modalPriorizacao-c').html(tempDiv)

	});
	request.fail(function (xhr, status, errorThrown) {
		jQuery('#priorizacaoINC').html('<span style="" class="label label2 label-default">Erro</span>')
	});
	request.always(function () {
		//console.log(request.responseText);
		//unblockUI(jQuery(bloquearElemento));
		//jQuery('#efk_cidades').html(request.responseText)
	});

	//}else{console.error('Erro, argumentos invalidos')}
}
//===========================================================================
/*
efikaGerarIMS({
	"op":"criar",
	"instancia":"",
	"ip_central":"",
	"cidade":"",
	"porta":""
})

Comandios:
4 - criar V5
5 - deletar v5
6 - listar v5
7 - Criar 248
8 - deletar 248
9 - listar

*/
function efikaGerarIMS(opt) {
	if (opt) {
		var instancia = jQuery('#efk_instancia').val();
		var ip_central = jQuery('#efk_ip_central').val();
		var cidade = jQuery('#efk_cidades').val();
		var porta = jQuery('#efk_porta').val();
		var comando = "";
		var erros = "";

		if (opt.op == "criar") { if (ip_central.indexOf('.') > -1) {/*248*/var comando = "7"; } else {/*v5*/var comando = "4"; } }
		if (opt.op == "deletar") { if (ip_central.indexOf('.') > -1) {/*248*/var comando = "8"; } else {/*v5*/var comando = "5"; } }
		if (opt.op == "listar") { if (ip_central.indexOf('.') > -1) {/*248*/var comando = "9"; } else {/*v5*/var comando = "6"; } }
		if (opt.op == "listar2") { if (ip_central.indexOf('.') > -1) {/*248*/var comando = "9"; } else {/*v5*/var comando = "6"; } jQuery('#efk_agcf')[0].selectedIndex = 2 }
		if (opt.op == "listarp") { toastr.warning('not yet') }


		//detectar comando
		//detectar modo do id, se v5 ou 248

		setTimeout(function () {
			if (jQuery('#efk_agcf').val().length > 5) {
				var agcf = jQuery('#efk_agcf').val()
			} else {
				var agcf = jQuery('#efk_agcf')[0].options[1].innerText
			}
			var request = jQuery.ajax({
				url: "http://efika/web/action/geracomandoims.php",
				contentType: "application/x-www-form-urlencoded;charset=utf8",
				timeout: 5000,
				dataType: "text",
				type: "post",
				data: {
					"comando": comando,
					"ip_central": ip_central,
					"instancia": instancia,
					"cidade": cidade,
					"porta": porta,
					"bloqueio": "null",
					"softxip": agcf,
					"senha_sip": "",
					"servs": "",
					"agrup_members": ""
				}
			});
			request.done(function () {/*---*/ });
			request.fail(function (xhr, status, errorThrown) { });
			request.always(function () {
				console.log(request.responseText);
				unblockUI(jQuery('#comando_ims'));

				//coloca o conteudo da resposta em uma div não implementada
				var tempDiv = jQuery('<div>').html(request.responseText);

				//remove tags de link, estilo e imagem da resposta
				jQuery(tempDiv).find("script").remove();
				jQuery(tempDiv).find("link").remove();
				jQuery(tempDiv).find("style").remove();
				jQuery(tempDiv).find("hr").remove();

				var storeHTML = tempDiv.html();
				var texto = tempDiv.text();

				//var storeHTML=storeHTML.replace(/SOFTXIP/gi,'<span class="azul">IP</span>');

				var arrayOut = [];
				if (texto.indexOf('ims1.gvt.net.br') > -1) {
					var imsLcNum = 'ims1.gvt.net.br'
				}
				else if (texto.indexOf('ims2.gvt.net.br') > -1) {
					var imsLcNum = 'ims2.gvt.net.br'
				}
				else if (texto.indexOf('ims3.gvt.net.br') > -1) {
					var imsLcNum = 'ims3.gvt.net.br'
				} else {
					var imsLcNum = 'ERRO_INTERNO'
				}

				if (opt.op == "criar") {
					var arrayIn = storeHTML.split('\n');
					for (a = 0; a < arrayIn.length; a++) {
						//concatenar ativacao de servicos
						if (arrayIn[a].match(/ADD SBR:IMPU/g)) {
							arrayOut[a] = arrayIn[a].replace(/TEMPLATEIDX=1;/, "TEMPLATEIDX=1, <span class=azul>LMTGRP=65534, ENUMIDX=115;<br>MOD SS:IMPU=\"sip:+55" + jQuery('#efk_instancia').val() + "<strong class='laranja'>@" + imsLcNum + "</strong>\", NSSCCA=1, NSCLIP=1, NSNPTY=1, NSCW=1;") + "</span>"
						}


						//duplica RMV de AGCF para remover de 25 e 40, limpando resquicios e evitando falhas na SPG
						//efika implementou recurso de agcf,desabilitado 

						else if (arrayIn[a].match(/RMV_ASBR: SOFTXIP/g)) {

							//arrayOut[a]="<span class=azul>"+arrayIn[a]+arrayIn[a].replace(/\.25\"|\.15\"/,".40\"")+"</span>"

						}


						//corrigindo AGCF de destino (versao V5)
						/*else if(arrayIn[a].match(/ADD ASBR: SOFTXIP/g)){
							if(jQuery('#efk_agcf').val().length>5){
								//efika implementou recurso de agcf,desabilitado 
								//arrayOut[a]="ADD ASBR: SOFTXIP=\"<span class=azul>"+jQuery('#efk_agcf').val()+"</span>\", PUI"+arrayIn[a].split('PUI')[1]+""
								arrayOut[a]=arrayIn[a]
							}else{
								arrayOut[a]=arrayIn[a]
							}
						}*/


						//corrigindo AGCF de destino (versao H248)
						/*else if(arrayIn[a].match(/ADD_ASBR: SOFTXIP/g)){
							//if(jQuery('#efk_agcf').val().length>5){
								//efika implementou recurso de agcf,desabilitado 
								//arrayOut[a]="ADD_ASBR: SOFTXIP=\"<span class=azul>"+jQuery('#efk_agcf').val()+"</span>\", PUI"+arrayIn[a].split('PUI')[1]+""
							//}else{
								arrayOut[a]=arrayIn[a]
							//}
						}*/

						else if (arrayIn[a].match(/RLI=/g)) { arrayOut[a] = arrayIn[a].replace(/RLI=/, "<strong class=laranja>RLI</strong>=") }
						else if (arrayIn[a].match(/NETINFO=/g)) { arrayOut[a] = arrayIn[a].replace(/NETINFO=/, "<span class=laranja>NETINFO</span>=") }
						else {
							arrayOut[a] = arrayIn[a]

						}
					}
				} else {
					/*
					for(a=0;a<arrayIn.length;a++){
						if(arrayIn[a].match(/SOFTXIP/g)){
							if(jQuery('#efk_agcf').val().length>5){
								//arrayOut[a]=arrayIn[a].split('SOFTXIP')[0]+"SOFTXIP=\"<span class=azul>"+jQuery('#efk_agcf').val()+"</span>\", PUI"+arrayIn[a].split('PUI')[1]+""
								arrayOut[a]=arrayIn[a];
							}else{
								arrayOut[a]=arrayIn[a]
							}
						}else{
							arrayOut[a]=arrayIn[a]
						}
					}
					*/
					var arrayIn = storeHTML.split('\n');
					for (a = 0; a < arrayIn.length; a++) {
						arrayOut[a] = arrayIn[a]
					}

				}

				var finalOutput = arrayOut.join('\n');

				//analisar erros antes de modigficar o output com os highlights
				if (finalOutput.indexOf('RLI=""') > -1) { var erros = erros + 'Cidade não identificada, clique em <button><i class="entypo-down"></i></button> ao lado da instancia e selecione a cidade novamente.\n' }
				else if (finalOutput.indexOf('@"') > -1) { var erros = erros + 'O SAS ainda não carregou, Clique em <button name="efkbt_buscaInstCit" ><i name="efkbt_buscaInstCit" class="entypo-down"  style="color:#000;"></i></button> e selecione uma cidade manualmente.<hr>Dica: <br>se estiver <strong style="color:#000;">CRIANDO, ALTERANDO ou DELETANDO</strong> algo, selecione a cidade correta. <br>Caso esteja apenas <strong style="color:#000;">CONSULTANDO</strong>, escolha qualquer cidade (todas as listadas tem o mesmo DDD, não afetará para casos de consulta)' }
				else if (finalOutput.indexOf('SOFTXIP=""') > -1) { var erros = erros + 'AGCF não identificado.' }
				else if (finalOutput.indexOf('V5IID=,') > -1) { var erros = erros + 'V5 / IP H248 não identificado.' }
				else if (finalOutput.indexOf('EID=""') > -1) { var erros = erros + 'V5 / IP H248 não identificado.' }
				else if (finalOutput.indexOf('TID=""') > -1) { var erros = erros + 'Porta não identificada.' }
				else if (finalOutput.indexOf('L3ADDR=,') > -1) { var erros = erros + 'Porta não identificada.' }
				else { }


				//Highlights fora do loop para evitar sobreposicao
				var finalOutput = finalOutput.replace(/RLI=/g, "<strong class=laranja>RLI</strong>=");
				var finalOutput = finalOutput.replace(/NETINFO=/g, "<strong class=laranja>NETINFO</strong>=");
				var finalOutput = finalOutput.replace(/SOFTXIP=/g, "<strong class=laranja>SOFTXIP</strong>=");
				var finalOutput = finalOutput.replace(/ EID=/g, "<strong class=laranja>EID</strong>=");
				var finalOutput = finalOutput.replace(/ TID=/g, "<strong class=laranja>TID</strong>=");
				var finalOutput = finalOutput.replace(/V5IID=/g, "<strong class=laranja>V5IID</strong>=");
				var finalOutput = finalOutput.replace(/L3ADDR=/g, "<strong class=laranja>L3ADDR</strong>=");


				//se for listar2,adicionar o agcf1 no final
				if (opt.op == "listar2") {
					var finalOutput = finalOutput + ''
						+ '<br>'
						+ 'USE ME:MENAME=M2000;<br>'
						+ 'LST_ASBR: SOFTXIP="' + jQuery('#efk_agcf')[0].options[1].value + '", PUI="sip:+55' + instancia + '@' + imsLcNum + '";'
						+ '';

				}


				if (erros) {
					var erros = erros.replace('undefined', '');
					jQuery('#comando_ims').html("<span class='vermelho'>" + erros + "</span>")
				} else {
					jQuery('#comando_ims').html(finalOutput)
				}


			});

			jQuery.ajax({
				type: 'POST',
				data: 'login=' + localStorage['config_matricula'] + '&comando=' + comando + '&instancia=' + instancia + '&origem=VSMonitor',
				url: 'http://efika/qa/action/salvaLogComandoIms.php'
			});

		}, 600)
		blockUI(jQuery('#comando_ims'));

	} else { console.error('Erro, argumentos invalidos') }
}

//===========================================================================
function log_request(msg, status) {
	console.log(msg);
	if (status == 200) {
		jQuery('#debug-reqdelay').append('<span class="">' + msg + '</span><br>')
	} else {
		jQuery('#debug-reqdelay').append('<span class="vermelho">' + msg + '</span><br>')
	}

}
//===========================================================================
function tbs2sasFacility(a) {
	var erro = '';
	if (a) {
		if (a.length > 5) {
			f = [];
			var b = a.toUpperCase();
			var b = b.replace("(COMBO)", "");
			var b = b.replace("(SIP)", "");
			var b = b.trim();
			if (b.split('-').length == 2) { var b = b.replace("-", "-021-") }
			else if (b.split('-').length == 3) {/*ok*/ }
			else { toastr.warning('Porta no TBS não reconhecida'); return; }
			var b = b.split('-');
			f[0] = b[0];
			f[1] = b[1][0] + b[1][1] + ' ' + b[1][2];

			if (b[2].length == 4) { f[2] = b[2][0] + b[2][1] + ' ' + b[2][2] + b[2][3]; }
			else if (b[2].length == 3) { f[2] = '0' + b[2][0] + ' ' + b[2][1] + b[2][2] }
			else if (b[2].length == 2) { f[2] = '00' + ' ' + b[2][0] + b[2][1] }
			else if (b[2].length == 1) { f[2] = '00 0' + b[2][0] }
			else { var erro = 'Porta no TBS não reconhecida'; }
			var ff = f.join(' ');
			//console.log(ff);
		} else { var erro = 'Porta no TBS não reconhecida'; }
	} else { var erro = 'Porta no TBS não reconhecida' }
	if (erro) { toastr.warning(erro) } else {
		return ff;
	}
}
//===========================================================================
function cmdTDMgen() {
	if (jQuery('#vcmd_instancia').val()) { var instancia = jQuery('#vcmd_instancia').val(); } else { var instancia = "<span class='laranja'>??????????</span>"; }
	if (jQuery('#vcmd_porta').val()) { var facilidade = jQuery('#vcmd_porta').val(); } else { var facilidade = "<span class='laranja'>????_??_?_??_??</span>"; }
	if (jQuery('#vcmd_custgrp').val()) { var custgrp = jQuery('#vcmd_custgrp').val(); } else { var custgrp = "<span class='laranja'>???_???</span>"; }
	if (facilidade) { var facilidadeNodisp = facilidade.split(' ')[0] + ' ' + facilidade.split(' ')[1] + ' ' + facilidade.split(' ')[2] + ' ' + facilidade.split(' ')[3]; }

	if (facilidade.match(/IMS/gi)) { aviso_ims = '<div class="alert alert-warning"><strong>Aviso: </strong> A porta parece ser IMS, preencha manualmente.</div>'; } else { aviso_ims = '' }
	if (jQuery('#painel-SAS-len').text()) {
		var cmd_manobrar = '' +
			'<i class="entypo-keyboard"></i> Manobrar/CLN linha<br>' +
			'<code class="cptxt">CLN $ <strong>' + jQuery('#painel-SAS-len').text() + '</strong> <strong>' + facilidade + '</strong> Y</code><br>' +
			'<br>';
	} else { var cmd_manobrar = '' }

	jQuery('#comando_tdm').html(''
		+ aviso_ims
		+ '<i class="entypo-keyboard"></i> criar linha<br>'
		+ '<code class="cptxt">NEW $ <strong>' + instancia + '</strong> ibn <strong>' + custgrp + '</strong> 0 115 <strong>' + facilidade + '</strong> DGT DDN NOAMA 3WC CWT $ Y</code><br>'
		+ '<br>'
		+ '<i class="entypo-keyboard"></i> Deletar linha<br>'
		+ '<code class="cptxt">OUT $ <strong>' + instancia + '</strong> <strong>' + facilidade + '</strong> BLDN Y</code><br>'
		+ '<br>'
		+ cmd_manobrar
		+ '<i class="entypo-keyboard"></i> Consultar LEN <br>'
		+ '<code class="cptxt">QLEN <strong>' + facilidade + '</strong></code><br>'
		+ '<br>'
		+ '<i class="entypo-keyboard"></i> adicionar serviços<br>'
		+ '<code class="cptxt">ADO $ <strong>' + instancia + '</strong> CWT 3WC DDN NOAMA $ Y</code><br>'
		+ '<br>'
		+ '<i class="entypo-keyboard"></i> desativar suspensão temporaria<br>'
		+ '<code class="cptxt">RES $ <strong>' + instancia + '</strong> <strong>' + facilidade + '</strong> Y</code><br>'
		+ '<br>'
		+ '<i class="entypo-keyboard"></i> Desativar BIO - Suspensão Total<br>'
		+ '<code class="cptxt">CHG $ LINE <strong>' + instancia + '</strong> CUST <strong>' + custgrp + '</strong> Y</code><br>'
		+ '<br>'
		+ '<i class="entypo-keyboard"></i> nodisp<br>'
		+ '<code class="cptxt cptxt">mapci nodisp;mtc;lns;ltp;post l <strong>' + facilidadeNodisp + '</strong> print</code><br>'
		+ '<br>'
		+ '<i class="entypo-keyboard"></i> Remover do agrupamento (Remover Hunt Member)<br>'
		+ '<code class="cptxt">DEO $ xxxxxxxxxx DNH $ Y</code><br>'
		+ '');
}
//===========================================================================
function configTDM(pnCentralshow) {
	/*
	document.getElementById('centraltech-conteudo').innerHTML='';
	document.getElementById('centraltech-conteudo').innerHTML=''
	+'Nome: '+vSwitches[pnCentralshow].nome+' / '
	+'Cidade: '+vSwitches[pnCentralshow].cidade+'<br>'
	+'IP: '+vSwitches[pnCentralshow].ip+'<br>';
	*/


	document.getElementById('centraltech-conteudo').innerHTML = '';
	document.getElementById('centraltech-conteudo').innerHTML = ''
		//+'<div class="alert alert-warning"><strong>OBS: </strong> Este é um recurso experimental feito para mesclar os dados do atendimento atual e automatiza-los usando o Efika como gerador.</div>'
		//+'Cidade: '+vSwitches[pnCentralshow].cidade+'<br>'

		+ '<div class="panel panel-default panel-shadow">'//1
		+ '    <div class="panel-heading">'//2
		+ '        <div class="panel-title">'//3
		+ '			  Comandos Nortel TDM <span class="badge badge-success badge-roundless">' + vSwitches[pnCentralshow].nome + '</span>'
		+ '			  <span class="badge badge-default badge-roundless cptxt">' + vSwitches[pnCentralshow].ip + '</span>'
		//+'			  <small><code>Automação experimental via EFIKA</code></small>'
		+ '		  </div>'//3
		+ '        <div class="panel-options"> '//4
		+ '			  <a href="#sample-modal" data-toggle="modal" data-target="#sample-modal-dialog-1" class="bg">'
		+ '			  <i class="entypo-cog"></i></a> <a href="#" data-rel="collapse">'
		+ '			  <i class="entypo-down-open"></i></a> <a href="#" data-rel="reload">'
		+ '			  <i class="entypo-arrows-ccw"></i></a> <a href="#" data-rel="close">'
		+ '			  <i class="entypo-cancel"></i></a> '
		+ '	      </div>'//4
		+ '    </div>'//2
		+ '    <div class="panel-body">'//5
		+ '        <div class="row">'//6
		+ '          <div class="col-md-3">'//7
		+ '              <div class="form-group"> '//8
		+ '			      <select id="nortel_cmd" name="efk_agcf" class="form-control" style="margin-bottom:2px;"> '
		+ '                    <option>Criar</option>'
		+ '                    <option>Deletar</option>'
		+ '                    <option>Ajustar Serviços</option>'
		+ '			      </select> '
		+ '			      <div class="input-group" style="margin-bottom:2px;"> '
		+ '			          <span class="input-group-addon"><i class="entypo-phone"></i></span> '
		+ '			          <input type="text" id="vcmd_instancia" name="vcmd_instancia" placeholder="Instancia" class="form-control"> '
		+ '			          <span class="input-group-btn"><button name="efkbt_buscaInstCit" class="btn btn-default" type="button"><i name="efkbt_buscaInstCit" class="entypo-down"></i></button> </span>  '
		+ '			      </div>'
		+ '			      <div class="input-group" style="margin-bottom:2px;"> '
		+ '			          <span class="input-group-addon">Grp</span>  '
		+ '			          <input type="text" id="vcmd_custgrp" name="vcmd_custgrp" placeholder="CustGroup" class="form-control"> '
		+ '			      </div>'
		+ '			      <div class="input-group" style="margin-bottom:2px;"> '
		+ '			          <span class="input-group-addon">LEN </span>  '
		+ '			          <input type="text" id="vcmd_porta" name="vcmd_porta" placeholder="Facilidade" class="form-control"> '
		+ '			      </div>'
		+ '              </div> '//8
		+ '              <div class="form-group"> '//9
		+ '			       <button name="vcmdTDMcriar"   type="button" class="btn btn-success" style="display:none;">Atualizar Comandos</button> '
		//+'			       <button name="vcmdIMSlistar" type="button" class="btn">Listar</button> '
		//+'			       <button name="vcmdIMSdeletar" type="button" class="btn">Deletar</button> '
		+ '			    </div>'//9
		+ '		     </div>'//7
		+ '           <div class="col-md-9">'//10
		+ '                 <div contenteditable="true" id="comando_tdm" style="border:solid 1px #ddd;padding:10px;">'
		+ '		     </div>'//10
		+ '	      </div>'//6
		+ '    </div>'//5
		+ '</div>'//1
		+ '';
	if (jQuery('#painel-PN-eqp').text()) { jQuery('#vcmd_instancia').val(jQuery('#painel-PN-eqp').text().trim()) }
	else { jQuery('#vcmd_instancia').val(jQuery('#instancia').val()) }

	if (jQuery('#painel-SASb-custgrp').text()) {
		jQuery('#vcmd_custgrp').val(jQuery('#painel-SASb-custgrp').text().toUpperCase().replace('_BIO', '_POS'))
	}
	if (jQuery('#painel-TBS-porta').text()) {
		jQuery('#vcmd_porta').val(tbs2sasFacility(jQuery('#painel-TBS-porta').text()))
	}
	cmdTDMgen();

}
function configIMS(pnCentralshow) {

	document.getElementById('centraltech-conteudo').innerHTML = '';
	document.getElementById('centraltech-conteudo').innerHTML = ''
		+ '<div style="display:none" class="alert alert-warning"><strong>OBS: </strong> Este é um recurso experimental feito para mesclar os dados do atendimento atual e automatiza-los usando o Efika como gerador.</div>'
		//+'Cidade: '+vSwitches[pnCentralshow].cidade+'<br>'

		+ '<div class="panel panel-default panel-shadow">'//1
		+ '    <div class="panel-heading">'//2
		+ '        <div class="panel-title">'//3
		+ '			  Comandos IMS <span class="badge badge-success badge-roundless">' + vSwitches[pnCentralshow].nome + '</span>'
		+ '			  <span class="badge badge-default badge-roundless cptxt">' + vSwitches[pnCentralshow].ip + '</span>'
		+ '			  <small><code>Automação experimental via EFIKA</code></small>'
		+ '		  </div>'//3
		+ '        <div class="panel-options"> '//4
		+ '			  <a href="#sample-modal" data-toggle="modal" data-target="#sample-modal-dialog-1" class="bg">'
		+ '			  <i class="entypo-cog"></i></a> <a href="#" data-rel="collapse">'
		+ '			  <i class="entypo-down-open"></i></a> <a href="#" data-rel="reload">'
		+ '			  <i class="entypo-arrows-ccw"></i></a> <a href="#" data-rel="close">'
		+ '			  <i class="entypo-cancel"></i></a> '
		+ '	      </div>'//4
		+ '    </div>'//2
		+ '    <div class="panel-body">'//5
		+ '        <div class="row">'//6
		+ '          <div class="col-md-3">'//7
		+ '              <div class="form-group"> '//8
		+ '			      <div class="input-group" style="margin-bottom:2px;"> '
		+ '			          <span class="input-group-addon"><i class="entypo-phone"></i></span> '
		+ '			          <input type="text" id="efk_instancia" name="efk_instancia" placeholder="Instancia" class="form-control"> '
		+ '			          <span class="input-group-btn"><button name="efkbt_buscaInstCit" class="btn btn-default" type="button"><i name="efkbt_buscaInstCit" class="entypo-down"></i></button> </span>  '
		+ '			      </div>'
		+ '			      <select id="efk_cidades" name="efk_cidades" class="form-control" style="margin-bottom:2px;"> <option>Cidades</option> </select> '
		+ '			      <div class="input-group" style="margin-bottom:2px;"> '
		+ '			          <span class="input-group-addon">ID/IP &nbsp;</span>  '
		+ '			          <input type="text" id="efk_ip_central" name="efk_ip_central" placeholder="V5IID ou EID(IP)" class="form-control"> '
		+ '			      </div>'
		+ '			      <div class="input-group" style="margin-bottom:2px;"> '
		+ '			          <span class="input-group-addon">Porta </span>  '
		+ '			          <input type="text" id="efk_porta" name="efk_porta" placeholder="Primário" class="form-control"> '
		+ '			      </div>'
		+ '			      <select id="efk_agcf" name="efk_agcf" class="form-control"> '
		+ '                    <option>AGCF</option>'
		+ '                    <option>' + vSwitches[pnCentralshow].AGCF1.IP + '</option>'
		+ '                    <option>' + vSwitches[pnCentralshow].AGCF2.IP + '</option> '
		+ '			      </select> '
		+ '              </div> '//8
		+ '              <div class="form-group"> '//9
		+ '			       <button name="efkIMScriar"   type="button" class="btn btn-success">Criar</button> '
		+ '			       <button name="efkIMSlistarp" type="button" class="btn" disabled=disabled>Listar Porta</button> '
		+ '			       <button name="efkIMSlistar" type="button" class="btn">Listar Linha</button> '
		+ '				   <div style="height:3px;"></div>'
		+ '			       <button name="efkIMSlistar2" type="button" class="btn">Listar Linha x2</button> '
		//+'			       <button name="efkIMSdeletar" type="button" class="btn">Deletar</button> '
		+ '			    </div>'//9
		+ '		     </div>'//7
		+ '           <div class="col-md-9">'//10
		+ '                 <div contenteditable="true" id="comando_ims" style="border:solid 1px #ddd;padding:10px;">'
		+ '		     </div>'//10
		+ '	      </div>'//6
		+ '    </div>'//5
		+ '</div>'//1
		+ '';
	jQuery('#efk_instancia').val(jQuery('#instancia').val())
	if (jQuery('#painel-SAS-localidade').text()) {
		jQuery('#efk_cidades').html('<option>' + jQuery('#painel-SAS-localidade').text().trim() + '</option>')
	}
	if (jQuery('#painel-TBS-porta').text()) {
		if (jQuery('#painel-TBS-porta').text().indexOf('IMS') > -1) {
			jQuery('#efk_porta').val(apenasNumeros(jQuery('#painel-TBS-porta').text().split('IMS')[1]))
		}

	}
	if (jQuery('#painel-IMS-ID').text()) {
		jQuery('#efk_ip_central').val(jQuery('#painel-IMS-ID').text())
	}

}
//===========================================================================
function configIMS_antigo(pnCentralshow) {

	document.getElementById('centraltech-conteudo').innerHTML = '';
	document.getElementById('centraltech-conteudo').innerHTML = ''
		+ '<div class="alert alert-warning"><strong>OBS: </strong> Este é um recurso experimental feito para mesclar os dados do atendimento atual e automatiza-los usando o Efika como gerador.</div>'
		//+'Cidade: '+vSwitches[pnCentralshow].cidade+'<br>'

		+ '<div class="panel panel-default panel-shadow">'
		+ '    <div class="panel-heading">'
		+ '        <div class="panel-title">'
		+ '			Comandos IMS <span class="badge badge-success badge-roundless">' + vSwitches[pnCentralshow].nome + '</span>'
		+ '			<small><code>Automação experimental via EFIKA</code></small>'
		+ '		</div>'
		+ '        <div class="panel-options"> '
		+ '			<a href="#sample-modal" data-toggle="modal" data-target="#sample-modal-dialog-1" class="bg">'
		+ '			<i class="entypo-cog"></i></a> <a href="#" data-rel="collapse">'
		+ '			<i class="entypo-down-open"></i></a> <a href="#" data-rel="reload">'
		+ '			<i class="entypo-arrows-ccw"></i></a> <a href="#" data-rel="close">'
		+ '			<i class="entypo-cancel"></i></a> '
		+ '		</div>'
		+ '    </div>'
		+ '    <div class="panel-body">'
		//+'        Central: <span class="badge badge-success badge-roundless">'+vSwitches[pnCentralshow].nome+'</span> | <a href="'+vSwitches[pnCentralshow].ip+'">'+vSwitches[pnCentralshow].ip+'</a><br>'
		+ '        <div class="row">'
		+ '        	<div class="col-md-3">'
		+ '            <div class="form-group"> '
		+ '				 <label class="control-label">Instancia</label> '
		+ '				 <input type="text" class="form-control" name="efk_instancia" placeholder="Instancia"> '
		+ '			  </div>'
		+ '		   </div>'
		+ '        	<div class="col-md-3">'
		+ '            <div class="form-group"> '
		+ '				 <label class="control-label">Cidade</label> '
		+ '				 <select name="efk_cidades" class="form-control"> <option>Cidades</option> </select> '
		+ '			  </div>'
		+ '		   </div>'
		+ '        	<div class="col-md-3">'
		+ '            <div class="form-group"> '
		+ '				 <label class="control-label">h248IP/V5IID</label> '
		+ '				 <input type="text" class="form-control" name="efk_instancia" placeholder="Porta"> '
		+ '			  </div>'
		+ '		   </div>'
		+ '        	<div class="col-md-3">'
		+ '            <div class="form-group"> '
		+ '				 <label class="control-label">Porta</label> '
		+ '				 <input type="text" class="form-control" name="efk_instancia" placeholder="Porta"> '
		+ '			  </div>'
		+ '		   </div>'
		+ '	  </div>'
		+ '            <div class="form-group"> '
		+ '			<button type="button" class="btn btn-success">Criar</button> <button type="button" class="btn">Deletar</button> '
		+ '			</div>'
		+ '    </div>'
		+ '</div>'
		+ '';
}

//===========================================================================
//Diagnostico 


function fullSearch() {
	//Manobra Especializada Multiskill Triagem TL Manobra-Vivo1
	switch (localStorage['atSkill']) {
		case 'Manobra':
		case 'Multiskill':
		case 'Especializada':
		case 'Multiskill':
		case 'Triagem':
		case 'TL':
			//toastr.success(localStorage['atSkill'])

			isChecklist();
			isHeavyUser();
			massivaSAS();
			centralOrigem();
			efikaPriorizacaoChamado();
			consultaGps('request', jQuery('#instancia').val())
			diagnosticoSas({
				'modo': 'request',
				'input': '#instancia',
				'bloquear': '#diagnostico_SAS',
				'destino': '#diagnostico_SASc',
				'filtro': filtroSAS
			});
			diagnosticoTbs({
				'modo': 'request',
				'input': '#instancia',
				'bloquear': '#diagnostico_TBS',
				'destino': '#diagnostico_TBSc',
				'filtro': filtroTBS
			});
			diagnosticoGestor({
				'modo': 'request',
				'input': '#instancia',
				'bloquear': '#bloqueioGestorStatus',
				'filtro': filtroGestor
			});
			diagnosticoPn('request');
			diagnosticoPnCx('request');
			diagnosticoWise('request');

			break;

		case 'Manobra-Vivo1':
			toastr.warning('VIVO1 ainda em desenvolvimento')
			break;

		default:
			toastr.warning('skill nulo')
	}


}
function historicoFcr(e) {
	if (e) {
		console.log(e.target.id);
		var storage = JSON.parse(localStorage['historico_checknote']);
		//exemplo com jqyery
		jQuery.each(storage.registros, function (chave, valor) {
			if (jQuery(".Manobra")) {
				if (e.target.id == valor.id) {
					if (storage.registros[chave].fcr == true) {
						storage.registros[chave].fcr = false;
					} else {
						storage.registros[chave].fcr = true;
					}
				}
			} else {
				storage.registros[chave].fcr = false;
			}
		})
		localStorage["historico_checknote"] = JSON.stringify(storage);
	}

	// console.log(storage)

	var rechamadas = jQuery(".Manobra:checked").length;
	var total = jQuery(".Manobra").length;
	var calculo = 100 - ((rechamadas * 100) / total);
	jQuery("#fcrcalc").html("FCR: " + calculo.toFixed(2) + "%");
	jQuery("#reccalc").html("Rechamadas: " + jQuery(".Manobra:checked").length);
	//exemplo com javascript puro
	// for(i=0;i<storage.registros.length;i++){
	// 	if(e.target.id==storage.registros[i].id){
	// 		storage.registros[i].fcr=true;
	// 	}
	// }
	// console.log(storage)
}


function historicoTma() {
	var storage = JSON.parse(localStorage['historico_checknote']);
	var TMA = 0;
	var inicio = 0;
	var fim = 0;
	var calculoTMA = 0;
	var IVivo = 0;
	var FVivo = 0;
	var TMAVivo = 0;
	var TTMAVivo = 0;
	var TTMA = 0;
	var atendidas = 0

	jQuery.each(storage.registros, function (chave, valor) {
		if (storage.registros[chave].inicio.split(' ')[0] == xDate().split(" ")[0]) {
			var inicio = Date.parse(storage.registros[chave].inicio);
			var fim = Date.parse(storage.registros[chave].fim);
			var elapsedTTL = fim - inicio;
			TMA = TMA + elapsedTTL;
			if (storage.registros[chave].skill == "Manobra-Vivo1") {
				var IVivo = Date.parse(storage.registros[chave].inicio);
				var FVivo = Date.parse(storage.registros[chave].fim);
				var TMAVivo = FVivo - IVivo
				TTMAVivo = TTMAVivo + TMAVivo;
			}
		}
	})



	console.log("TMA total somado é: " + TMA + " total de vivo 1 é: " + TTMAVivo)
	var TTMA = TMA - TTMAVivo
	var atendidas = jQuery(".conffcr").length - jQuery(".Manobra-Vivo1").length
	var calculoTMA = TTMA / atendidas
	var tmaFinal = msToTime(calculoTMA);
	jQuery("#tmacalc").html("TMA: " + tmaFinal);
}
function listarHistorico(e) {
	e.preventDefault();
	var selectedHistDatei = document.getElementById('painel_historico_date').options.selectedIndex
	var selectedHistDate = document.getElementById('painel_historico_date').options[selectedHistDatei].value
	if (selectedHistDate == 'hoje') { var selectedHistDate = xDate(6).split(' ')[0] }

	var painelHistorico = document.getElementById('painel_historico')
	var storage = JSON.parse(localStorage['historico_checknote'])
	var storageRegistros = storage.registros
	var painelHistoricoContent = ''
		+ '<div style="padding:5px;">'
		+ '	<span class="label label-success" id="ligcalc" >Ligações: ??? </span> &nbsp;'
		+ '	<span class="label label-default" id="reccalc" >Rechamadas: ??? </span>  &nbsp;'
		+ '	<span class="label label-warning2" id="tmacalc" >TMA: ??? </span>  &nbsp;'
		+ '	<span class="label label-success" id="fcrcalc" >FCR: ??? </span>  &nbsp;'
		+ '</div>'
		+ '<table class="table table-bordered table-striped datatable dataTable no-footer" id="table-historico" role="grid" aria-describedby="table-2_info"> '
		+ '<tr> '
		+ '<td> </td> '
		+ '<td>inicio</td> '
		+ '<td>fim</td> '
		+ '<td>tempo</td> '
		+ '<td>skill</td> '
		+ '<td>instancia</td> '
		+ '<td>!FCR</td> '
		+ '<td>info</td> '
		+ '</tr>'
	var ctrStRg2 = 0;
	for (ctrStRg = 0; ctrStRg < storageRegistros.length; ctrStRg++) {
		if (storageRegistros[ctrStRg].inicio.split(' ')[0] == selectedHistDate) {
			ctrStRg2++;
			var elpStart = Date.parse(storageRegistros[ctrStRg].inicio)
			var elpEnd = Date.parse(storageRegistros[ctrStRg].fim)
			var elapsedTTL = elpEnd - elpStart;
			var painelHistoricoContent = painelHistoricoContent + ''
				/*if(storageRegistros[ctrStRg].instancia===undefined){
					storageRegistros[ctrStRg].instancia=storageRegistros[ctrStRg].terminal
				}*/
				+ '<tr>'
				+ '<td>' + (ctrStRg + 1) + ' / ' + ctrStRg2 + '</td>'
				+ '<td>' + storageRegistros[ctrStRg].inicio.split(' ')[1] + '</td>'
				+ '<td>' + storageRegistros[ctrStRg].fim.split(' ')[1] + '</td>'
				+ '<td>' + msToTime(elapsedTTL) + '</td>'
				+ '<td>' + storageRegistros[ctrStRg].skill + '</td>'
				+ '<td>' + storageRegistros[ctrStRg].instancia + '</td>'
				+ '<td><input type="checkbox" ' + (storageRegistros[ctrStRg].fcr === true ? 'checked=checked' : '') + ' name="conffcr" class="' + (storageRegistros[ctrStRg].skill) + ' conffcr" id="' + storageRegistros[ctrStRg].id + '"></td>'
				+ '<td></td>'
				+ '</tr>'
		}

		//if(ctrStRg==(storageRegistros.length-1)){}

	}
	painelHistorico.innerHTML = painelHistoricoContent + '</table>'
	jQuery("#ligcalc").html("Ligações: " + ctrStRg2);
	localStorage["historico_checknote"] = JSON.stringify(storage);
	historicoFcr();
	historicoTma();
}


// ##########################################################################################
//Adiciona event listeners

//# Clicks : ================================================================================
document.addEventListener('click', function (e) {

	if (e.target.id == "mostrarDebug") {
		e.preventDefault();
		jQuery('#modal-debug').modal('show');
		return false;
	}


	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "MostrarEventoMassivoSAS") {
		e.preventDefault();

		jQuery('#eventosMassivosSAS').modal('show');

		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "bloqueioGestorStatus") {
		e.preventDefault();

		//jQuery('#modalGestor').modal('show');
		//jQuery('#eventosMassivosSAS').modal('show');

		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "MostrarPriorizacaoChamados") {
		e.preventDefault();

		efikaConsultaChamado();


		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "MostrarbloqueioGestorStatus") {
		e.preventDefault();

		jQuery('#modalGestor').modal('show');
		//jQuery('#eventosMassivosSAS').modal('show');

		return false;
	}

	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "vcmdTDMcriar") {
		e.preventDefault();
		cmdTDMgen();
		return false;
	}
	// -------------------------------------------------------
	//efkbt_buscaInstCit
	if (e.target.getAttribute("name") == "efkbt_buscaInstCit") {
		e.preventDefault();

		efikaCidadesIMS(jQuery('#efk_instancia').val())


		return false;
	}
	// -------------------------------------------------------
	//binada2Down
	if (e.target.getAttribute("name") == "binada2Down") {
		e.preventDefault();
		if (jQuery('#binada').val().length > 0) {
			jQuery('#notes_particular').val(''
				+ jQuery('#binada').val() + '\n'
				+ jQuery('#notes_particular').val()
				+ '');
			jQuery('#binada').val('');
			keepChecknote('', '');
		}

		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "addchecklist-full") {
		e.preventDefault();
		addChecklist('sas')
		addChecklist('tbs')
		addChecklist('parametros')
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "addchecklist-sas") {
		e.preventDefault();
		//alert('teste')
		addChecklist('sas')
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "addchecklist-tbs") {
		e.preventDefault();
		addChecklist('tbs')
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "addchecklist-parametros") {
		e.preventDefault();
		addChecklist('parametros')
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "imsdb-comparar") {
		e.preventDefault();


		var trElementoClicado = e.target.parentElement.parentElement.parentElement
		localStorage["imsdb-dataid"] = trElementoClicado.getAttribute("data-id")
		localStorage["imsdb-datashelf"] = trElementoClicado.getAttribute("data-shelf")


		jQuery('#diagnostico_SASc').html('');
		jQuery('#diagnostico_TBSc').html('');
		jQuery('#diagnosticoWisec').html('');


		//alert(trElementoClicado.getAttribute("data-instancia"))
		diagnosticoTbs({
			'modo': 'request',
			'instancia': trElementoClicado.getAttribute("data-instancia"),
			'bloquear': '#diagnostico_TBS',
			'destino': '#diagnostico_TBSc',
			'filtro': filtroTBS_IMS
		});
		diagnosticoSas({
			'modo': 'request',
			'instancia': trElementoClicado.getAttribute("data-instancia").slice(0, 10),
			'bloquear': '#diagnostico_SAS',
			'destino': '#diagnostico_SASc',
			'filtro': filtroSAS_IMS
		});
		alert('x')

		diagnosticoWise('request', 'consultar', trElementoClicado.getAttribute("data-instancia"))



		//document.getElementsByName('imsdb-comparar')[0].parentElement.parentElement.parentElement
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "launch_form") {
		e.preventDefault();
		launch_form(e.target.dataset.launch);

		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "binarViaTBS") {
		e.preventDefault();
		binarTBS();
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "binarVizinho") {
		e.preventDefault();
		binarVizinho();
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "imsdb-auto") {
		e.preventDefault();
		imsdb_automation();
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "imsdb-carregar") {
		e.preventDefault();
		imsdb_ajuste();
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "imsdb-filtrar") {
		e.preventDefault();
		var imsDbFiltrarTr = jQuery('.imsdbtr')
		for (imsdft001 = 0; imsdft001 < imsDbFiltrarTr.length; imsdft001++)
			if (jQuery(imsDbFiltrarTr[imsdft001]).find('td')[4].innerHTML.length > 0) {
				jQuery(imsDbFiltrarTr[imsdft001]).remove()
			}
		//imsRemoveTr()
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "imsdb-goto") {
		e.preventDefault();
		var imsdbGotoF = jQuery('#imsdb-goto-f').val()
		var imsDbFiltrarTr = jQuery('.imsdbtr')
		if (imsdbGotoF.indexOf('-') > -1) {
			var ctPsdIn = imsdbGotoF.replace(/-/g, '')
			for (imsdft001 = 0; imsdft001 < imsDbFiltrarTr.length; imsdft001++) {
				var ctPsdTr = jQuery(imsDbFiltrarTr[imsdft001]).find('td')[1].innerHTML.replace(/-/g, '')
				if (parseInt(ctPsdTr) > ctPsdIn) {
					jQuery(imsDbFiltrarTr[imsdft001]).remove()
				}
			}

		}
		else {
			for (imsdft001 = 0; imsdft001 < imsDbFiltrarTr.length; imsdft001++) {
				if (parseInt(jQuery(imsDbFiltrarTr[imsdft001]).find('td')[0].innerHTML) < imsdbGotoF) {
					jQuery(imsDbFiltrarTr[imsdft001]).remove()
				}
			}
		}


		//imsRemoveTr()
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "imsdb-pular") {
		e.preventDefault();
		imsRemoveTr('pulou')
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "imsdb-revisar") {
		e.preventDefault();
		if (e.target.dataset.revisar == "cad") {
			imsdb_ajuste('revisar-cad')
			localStorage["imsdb-recursivo"] = "cad";
		}
		else if (e.target.dataset.revisar == "248") {
			imsdb_ajuste('revisar-248')
			localStorage["imsdb-recursivo"] = "248";
		}
		else if (e.target.dataset.revisar == "v5") {
			imsdb_ajuste('revisar-v5')
			localStorage["imsdb-recursivo"] = "v5";
		}
		else if (e.target.dataset.revisar == "sip") {
			imsdb_ajuste('revisar-sip')
			localStorage["imsdb-recursivo"] = "sip";
		}
		else if (e.target.dataset.revisar == "sas") {
			imsdb_ajuste('revisar-sas')
			localStorage["imsdb-recursivo"] = "sas";
		}
		else if (e.target.dataset.revisar == "pend") {
			imsdb_ajuste('revisar-pend')
			localStorage["imsdb-recursivo"] = "pend";
		}


		return false;
	}

	// -------------------------------------------------------
	//efikaGerarIMS
	if (e.target.getAttribute("name") == "efkIMScriar") {
		e.preventDefault();
		efikaGerarIMS({ "op": "criar" })
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "efkIMSlistar2") {
		e.preventDefault();
		efikaGerarIMS({ "op": "listar2" })
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "efkIMSlistar") {
		e.preventDefault();
		efikaGerarIMS({ "op": "listar" })
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "efkIMSlistarp") {
		e.preventDefault();
		efikaGerarIMS({ "op": "listarp" })
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "efkIMSdeletar") {
		e.preventDefault();
		efikaGerarIMS({ "op": "deletar" })
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "historico-listar") {

		listarHistorico(e);

		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "conffcr") {

		historicoFcr(e);

		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "historico-download") {

		e.preventDefault();
		downloadChecklist(e.target.innerText);


		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "historico-mostrar") {
		e.preventDefault();
		var selectedHistDatei = document.getElementById('painel_historico_date').options.selectedIndex
		var selectedHistDate = document.getElementById('painel_historico_date').options[selectedHistDatei].value
		if (selectedHistDate == 'hoje') { var selectedHistDate = xDate(6).split(' ')[0] }

		var painelHistorico = document.getElementById('painel_historico')
		var storage = JSON.parse(localStorage['historico_checknote'])
		var storageRegistros = storage.registros
		var painelHistoricoContent = ''
			+ '<div style="padding:5px;">'
			+ '	<span class="label label-success" id="ligcalc" >Ligações: ??? </span> &nbsp;'
			+ '	<span class="label label-default" id="reccalc" >Rechamadas: ??? </span>  &nbsp;'
			+ '	<span class="label label-warning2" id="tmacalc" >TMA: ??? </span>  &nbsp;'
			+ '	<span class="label label-success" id="fcrcalc" >FCR: ??? </span>  &nbsp;'
			+ '</div>'
			+ '<hr>'
			+ ' &nbsp;&nbsp;&nbsp; <button name="historico-download" type="button" class="btn btn-default btn-icon">Checklist-' + selectedHistDate.slice(2, 10).replace(/-/g, '') + '.txt<i class="entypo-download"></i> </button>'
			+ '  <button type="button" class="btn btn-default btn-icon pull-right" style="margin-right:10px;">Deletar<i class="entypo-trash"></i> </button> '
			+ '<hr>'
			+ '<div id="callhistcontent" style="white-space: pre-wrap;padding:10px;"> '
		var ctrStRgF = 0;
		for (ctrStRg = 0; ctrStRg < storageRegistros.length; ctrStRg++) {
			if (storageRegistros[ctrStRg].instancia == undefined) {
				storageRegistros[ctrStRg].instancia = storageRegistros[ctrStRg].terminal
			}
			if (storageRegistros[ctrStRg].inicio.split(' ')[0] == selectedHistDate) {
				ctrStRgF++;

				var elpStart = Date.parse(storageRegistros[ctrStRg].inicio)
				var elpEnd = Date.parse(storageRegistros[ctrStRg].fim)
				var elapsedTTL = elpEnd - elpStart;

				if (storageRegistros[ctrStRg].skill == 'Manobra' || storageRegistros[ctrStRg].skill == 'Multiskill') {
					var painelHistoricoContent = painelHistoricoContent + ''
						+ '' + (ctrStRgF) + ' | Skill: ' + storageRegistros[ctrStRg].skill + ' | Atividade ' + storageRegistros[ctrStRg].atividade + ' \n'
						+ ' - Inicio  : ' + storageRegistros[ctrStRg].inicio + '\n'
						+ ' - Fim     : ' + storageRegistros[ctrStRg].fim + '\n'
						+ ' - Tempo   : ' + msToTime(elapsedTTL) + '\n'
						+ ' - Options : ' + storageRegistros[ctrStRg].options + '\n\n'
						+ '' + storageRegistros[ctrStRg].operador + '\n'
						+ '|| Instância: ' + storageRegistros[ctrStRg].instancia + '\n'
						+ '|| Técnico  : ' + storageRegistros[ctrStRg].tecnico + ' - ' + storageRegistros[ctrStRg].t_matricula + '\n'
						+ '|| Tipo: ' + storageRegistros[ctrStRg].tipo + '\n'
						+ '|| Motivo   : ' + storageRegistros[ctrStRg].motivo + '\n'
						+ '|| Primário : ' + storageRegistros[ctrStRg].primario + '\n'
						+ '|| Pares testados:' + storageRegistros[ctrStRg].testados + '\n'
						//+'|| Binadas : '+storageRegistros[ctrStRg].binadas+'\n'
						+ '' + storageRegistros[ctrStRg].notes_sas + '\n'
						+ '' + storageRegistros[ctrStRg].notes_tbs + '\n'
						+ '' + storageRegistros[ctrStRg].notes_banda + '\n'
						+ '[ ---------- Notas ----------] \n'
						+ '' + storageRegistros[ctrStRg].notes_operador + '\n'
						+ '[ ---------- Notas Particulares ----------] \n'
						+ '' + storageRegistros[ctrStRg].notes_particular + '\n'
						+ '############################################################################## \n'
				} else if (storageRegistros[ctrStRg].skill == 'TL') {
					var painelHistoricoContent = painelHistoricoContent + ''
						+ '' + (ctrStRgF) + ' | Skill: ' + storageRegistros[ctrStRg].skill + ' | Atividade 00000000 \n'
						+ ' - Inicio  : ' + storageRegistros[ctrStRg].inicio + '\n'
						+ ' - Fim     : ' + storageRegistros[ctrStRg].fim + '\n'
						+ ' - Tempo   : ' + msToTime(elapsedTTL) + '\n'
						+ ' - Options : ' + storageRegistros[ctrStRg].options + '\n\n'
						+ '' + storageRegistros[ctrStRg].operador + '\n'
						+ '|| TL: ' + storageRegistros[ctrStRg].TL + '\n'
						+ '|| Motivo: ' + storageRegistros[ctrStRg].motivo + '\n'
						+ '|| Técnico  : ' + storageRegistros[ctrStRg].tecnico + ' - ' + storageRegistros[ctrStRg].t_matricula + '\n'
						+ '|| SOS ID: ' + storageRegistros[ctrStRg].sosid + '\n'
						+ '|| Instância: ' + storageRegistros[ctrStRg].instancia + '\n'
						+ '|| Fechamento: ' + storageRegistros[ctrStRg].fechamento + '\n'
						+ '[ ---------- Notas ----------] \n'
						+ '' + storageRegistros[ctrStRg].notes_operador + '\n'
						+ '[ ---------- Notas Particulares ----------] \n'
						+ '' + storageRegistros[ctrStRg].notes_particular + '\n' + '############################################################################## \n'
				} else if (storageRegistros[ctrStRg].skill == 'Manobra-Vivo1') {
					var painelHistoricoContent = painelHistoricoContent + ''
						+ '' + (ctrStRgF) + ' | Skill: ' + storageRegistros[ctrStRg].skill + ' | Atividade 00000000 \n'
						+ ' - Inicio  : ' + storageRegistros[ctrStRg].inicio + '\n'
						+ ' - Fim     : ' + storageRegistros[ctrStRg].fim + '\n'
						+ ' - Tempo   : ' + msToTime(elapsedTTL) + '\n'
						+ '' + storageRegistros[ctrStRg].operador + '\n'
						+ '|| Terminal: ' + storageRegistros[ctrStRg].instancia + '\n'
						+ '|| Motivo: ' + storageRegistros[ctrStRg].motivo + '\n'
						+ '|| Técnico  : ' + storageRegistros[ctrStRg].tecnico + '\n'
						+ '|| ID Fibra: ' + storageRegistros[ctrStRg].id_fibra + '\n'
						+ '|| CNL: ' + storageRegistros[ctrStRg].cnl + '\n'
						+ '|| Escritorio: ' + storageRegistros[ctrStRg].es + '\n'
						+ '|| Area Telefonica: ' + storageRegistros[ctrStRg].at + '\n'
						+ '|| PON: ' + storageRegistros[ctrStRg].pon + '\n'
						+ '|| ID ONT: ' + storageRegistros[ctrStRg].id_ont + '\n'
						+ '|| Modelo ONT: ' + storageRegistros[ctrStRg].modelo_ont + '\n'
						+ '|| Facilidade Atual: ' + storageRegistros[ctrStRg].fac_at + ' Fibra: ' + storageRegistros[ctrStRg].fibra + '\n'
						+ '|| Facilidade Nova: ' + storageRegistros[ctrStRg].fac_nov + ' Secundaria: ' + storageRegistros[ctrStRg].secundaria + '\n'
						+ '[ ---------- Notas ----------] \n'
						+ '' + storageRegistros[ctrStRg].notes_operador + '\n'
						+ '[ ---------- Notas Particulares ----------] \n'
						+ '' + storageRegistros[ctrStRg].notes_particular + '\n' + '############################################################################## \n'
				}


			}

			//if(ctrStRg==(storageRegistros.length-1)){}
		}
		painelHistorico.innerHTML = painelHistoricoContent + '</div>'


		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "keeper_key") {
		e.preventDefault();
		if (e.metaKey || e.ctrlKey) {
			toastr.info('Comandos enviados')
			logarSistemas();

		} else {
			jQuery('#modal-keeper').modal('show');
		}
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "keeper_deletar") {
		e.preventDefault();
		setKeeperKey('nok');
		g_neration('', '')
		jQuery('#keeper_name').val('');
		jQuery('#keeper_user').val('');
		jQuery('#keeper_pass').val('');
		document.getElementById('skillPadrao').options[0].selected = true;
		document.getElementById('keeper_msg').style.display = 'none'
		jQuery('#keeper_msg').html('<div class="alert alert-success">Dados deletados</div>');
		jQuery('#keeper_msg').fadeIn('slow');
		setTimeout(function () {
			jQuery('#keeper_msg').fadeOut('slow');
		}, 5000);
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "corrigir-engenharia") {
		detectarCNL({
			"instancia": jQuery('#instancia').val(),
			"destino": "painel-IMS-ID",
			"tbs": jQuery('#painel-TBS-porta').text()


		});

		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "tbsformat") {
		tbsFormat(e.target.id)
		ctrlc(e.target.dataset.id, e.target.dataset.msg)
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "imgicp") {
		ctrlc(e.target.dataset.id, e.target.dataset.msg)
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "keeper_confirma") {
		//e.preventDefault();
		if (document.keeper_form.checkValidity()) {
			setKeeperKey('ok');
			g_neration(jQuery('#keeper_user').val(), jQuery('#keeper_pass').val())

			localStorage['skillPadrao'] = jQuery('#skillPadrao').val();
			localStorage['config_nome'] = jQuery('#keeper_name').val();
			localStorage['config_matricula'] = jQuery('#keeper_user').val();
			//jQuery('#keeper_pass').val('RGV1cyB0YSB2ZW5kbyE=');
			//jQuery('#keeper_pass').val('');

			jQuery.ajax({
				"url": "http://efika/vsm/legado/vsm-base/api/userlog/",
				"method": "post",
				"data": {
					"usuario": localStorage['config_matricula'],
					"nome": localStorage['config_nome'],
					"setor": localStorage['skillPadrao'],
					"acao": "login",
					"msg": chrome.runtime.getManifest().version

				}
			}).done(function (data) {
				//console.log(data)
			})
			document.getElementById('keeper_msg').style.display = 'none'
			jQuery('#keeper_msg').html('<div class="alert alert-success">Dados gravados</div>');
			jQuery('#keeper_msg').fadeIn('slow');
			setTimeout(function () {
				jQuery('#keeper_msg').fadeOut('slow');
				//jQuery('#keeper_msg').html('');
			}, 5000);

		}


		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "abreWiseProvisioning") {
		e.preventDefault();
		window.open("http://wisetool.gvt.net.br/wisetool/aba_self_provisioning.jsp", "toolFrame");
		jQuery('#toolbox-notas').text(jQuery('#notes_particular').val());
		jQuery('#modal-frame').modal('show');
		return false;
	}
	// -------------------------------------------------------	
	//			

	if (e.target.getAttribute("name") == "recarregarPNePTS") {
		e.preventDefault();
		diagnosticoPn('request');
		diagnosticoPnCx('request');
		return false;
	}
	// -------------------------------------------------------	
	if (e.target.getAttribute("name") == "abreSanProbInstancia") {
		e.preventDefault();
		window.open("http://portalsan.gvt.net.br/BU_IT/formularios/suporteSistemas/problemasComInstancia.san", "toolFrame");
		jQuery('#toolbox-notas').text(jQuery('#notes_particular').val());
		jQuery('#modal-frame').modal('show');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "abreWisePortability") {
		e.preventDefault();
		//window.open("http://gvtapp/sas/portability", "toolFrame");
		if (jQuery('#painel-PNbinada-equipSwitch').text()) {
			jQuery('#targetSwitch').val(jQuery('#painel-PNbinada-equipSwitch').text().trim());
		} else if (jQuery('#painel-PNbinada-listaSwitch').text()) {
			jQuery('#targetSwitch').val(jQuery('#painel-PNbinada-listaSwitch').text().trim());
		}
		jQuery('#instances').val(jQuery('#instancia').val());

		if (jQuery('#painel-PNbinada-CNL').text()) {
			jQuery('#cnl').val(apenasNumeros(jQuery('#painel-PNbinada-CNL').text())); //painel-PNbinada-CNL
		}



		jQuery('#toolbox-notas').text(jQuery('#notes_particular').val());
		jQuery('#modal-frame').modal('show');
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "inputInsert") {
		e.preventDefault();
		if (confirm("Tem certeza de que os campos CENTRAL, CNL e INSTANCIA estão corretos?")) {
			document.getElementById("form-PTSsisnum").submit();
		} else {
			//fazer nada
		}
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "fullSearch") {
		e.preventDefault();
		fullSearch();
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "diagnosticarSAS") {
		e.preventDefault();
		diagnosticoSas({
			'modo': 'request',
			'input': '#instancia',
			'bloquear': '#diagnostico_SAS',
			'destino': '#diagnostico_SASc',
			'filtro': filtroSAS
		});
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "diagnosticarTBS") {
		e.preventDefault();
		diagnosticoTbs({
			'modo': 'request',
			'input': '#instancia',
			'bloquear': '#diagnostico_TBS',
			'destino': '#diagnostico_TBSc',
			'filtro': filtroTBS
		});
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "efikaNortel-listarportas") {
		e.preventDefault();
		efikaNortel({
			'modo': 'request',
			'input': '#instancia',
			'bloquear': '#diagnostico_TBS',
			'destino': '#diagnostico_TBSc',
			'filtro': filtroEfika
		});
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "efikaNortel-criarlinha") {
		e.preventDefault();
		efikaNortel({
			'modo': 'request',
			'input': '#instancia',
			'bloquear': '#diagnostico_TBS',
			'destino': '#diagnostico_TBSc',
			'filtro': filtroEfika
		});
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "efikaNortel-deletarlinha") {
		e.preventDefault();
		efikaNortel({
			'modo': 'request',
			'input': '#instancia',
			'bloquear': '#diagnostico_TBS',
			'destino': '#diagnostico_TBSc',
			'filtro': filtroEfika
		});
		return false;
	}

	// -------------------------------------------------------
	if (e.target.id == "copiarChecklist") {
		e.preventDefault();
		copiarChecklist()
		return false;
	}

	// -------------------------------------------------------
	if (e.target.id == "diagnosticarPN") {
		e.preventDefault();
		diagnosticoPn('request');
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "diagnosticarPNCX") {
		e.preventDefault();
		diagnosticoPnCx('request');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "wiseReset") {

		e.preventDefault();
		diagnosticoWise('request', 'reset');

		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "erroProfile") {
		e.preventDefault();
		diagnosticoWise('request', 'velocity');

		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "erroRadius") {
		e.preventDefault();
		diagnosticoWise('request', 'updateRadius');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "wiseAuth") {
		e.preventDefault();
		diagnosticoWise('request', 'dns');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "diagnosticoWise") {
		e.preventDefault();
		diagnosticoWise('request');
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "wiseDistancia") {
		e.preventDefault();
		diagnosticoWise('request', 'informacoesSagre');
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "terminalCon") {
		e.preventDefault();

		//document.getElementById('terminalFrame').src="";
		window.open("http://bellard.org/jslinux/", "terminalFrame");
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "dashboard-check") {
		e.preventDefault();
		eta_dashboard('eta_dashboard');
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "call_etadashboard") {
		e.preventDefault();
		eta_dashboard('eta_dashboard');
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "checknote-deletar") {
		limparChecknote();
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "showTDM") {
		jQuery('#modal-centraltech').modal('show');
		var pnCentralshow = '';
		var pnCentralshow = e.target.getAttribute("data-central");
		configTDM(pnCentralshow);

		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "buscarNoGPS_i") {
		consultaGps('request', jQuery('#instancia').val())
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "buscarNoGPS_a") {
		consultaGps('request', jQuery('#atividade').val())
		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "buscarBinada") {
		diagnosticoPnBinada('request');

		diagnosticoSasBinada({
			'modo': 'request',
			'input': '#binada',
			'bloquear': '#binadaSAS',
			'destino': '#binadaSAS',
			'filtro': filtroSASbinada
		});
		jQuery('.nav-tabs a[href="#dtab-binada"]').tab('show')



		return false;
	}
	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "efikaParametros") {
		efikaDslam();
		return false;
	}

	// -------------------------------------------------------

	if (e.target.getAttribute("name") == "showIMS") {
		jQuery('#modal-centraltech').modal('show');
		var pnCentralshow = '';
		var pnCentralshow = e.target.getAttribute("data-central");
		configIMS(pnCentralshow);
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "checknote-novoManobra") {
		novaChecknote('Manobra');
		return false;
	}

	// -------------------------------------------------------

	if (e.target.id == "checknote-novoManobraVivo1") {
		novaChecknote('Manobra-Vivo1');
		return false;
	}

	// -------------------------------------------------------

	if (e.target.id == "checknote-novoTL") {
		novaChecknote('TL');
		return false;
	}

	// -------------------------------------------------------

	if (e.target.id == "checknote-novoMultiskill") {
		novaChecknote('Multiskill');
		return false;
	}

	// -------------------------------------------------------

	if (e.target.id == "checknote-novoEspecializada") {
		novaChecknote('Especializada');
		return false;
	}

	// -------------------------------------------------------
	if (e.target.id == "novoDefault") {
		novaChecknote('default');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "salvarChecknote") {
		salvarChecknote();
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "keeper_eta") {
		keeper_eta_login();
		keeper_eta('request');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "keeper_ttv") {
		keeper_ttv_login();
		keeper_ttv('request');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "keeper_wise") {
		keeper_wise_login();
		setTimeout(function () {
			document.getElementsByName('toolFrame')[0].src = "";
			keeper_wise('request');
		}, 1000)

		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "keeper_sas") {
		keeper_sas_login();
		keeper_sas('request');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "keeper_gestor") {
		keeper_gestor_login('request');
		keeper_gestor('request');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "keeper_acs") {
		keeper_acs_login('request');
		keeper_acs('request');
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "keeper_efika") {
		keeper_efika('request');
		return false;
	}
	// -------------------------------------------------------
});
//#Keyup: =======================================================================================
document.addEventListener('dblclick', function (e) {

	if (e.target.className.indexOf("cptxt") > -1) {
		dblctrlc(e.target.innerText);
		selecionarTexto(e.target)
		//alert(e.target.innerText)
		return false;
	}
	// -------------------------------------------------------
});

//#Keyup: =======================================================================================
document.addEventListener('keyup', function (e) {
	if (e.target.id == "txttransfer") {
		e.preventDefault();

		if (e.target.value.length == 10) {
			var gerarNovoAtendimento = novaChecknote();
			if (gerarNovoAtendimento) {
				console.log('Instancia: ' + e.target.value);
				document.getElementById('instancia').value = document.getElementById('txttransfer').value;
				document.getElementById('txttransfer').value = '';
				fullSearch();
			} else {
				document.getElementById('txttransfer').value = '';
			}

		}
		else if (e.target.value.length > 10 && e.target.value.length < 16) {
			var gerarNovoAtendimento = novaChecknote();
			if (gerarNovoAtendimento) {
				console.log('Instancia: ' + e.target.value);
				document.getElementById('instancia').value = document.getElementById('txttransfer').value.trim();
				document.getElementById('txttransfer').value = '';
				fullSearch();

			}
			else {
				document.getElementById('txttransfer').value = '';
			}

		}
		else if (e.target.value.length > 15) {
			var gerarNovoAtendimento = novaChecknote();
			if (gerarNovoAtendimento) {
				//alert('teste:'+e.target.id);
				var finalTransfer = '';
				var txttransfer = '';
				var transfer_operador = '';
				var transfer_documento = '';
				var transfer_cliente = '';
				var transfer_instancia = '';
				var transfer_atividade = '';
				var transfer_tecnologiaVoz = '';
				var transfer_tipo = '';
				var transfer_tecnico = '';
				var transfer_tmatricula = '';
				var transfer_rpon = '';
				var transfer_pon = '';
				var transfer_armario = '';
				var transfer_posicaoFisica = '';

				var txttransfer = document.getElementById('txttransfer').value;
				var txttransfer = txttransfer.replace(/Documento:/gi, "\nDocumento:");
				var txttransfer = txttransfer.replace(/Cliente:/gi, "\nCliente:");
				var txttransfer = txttransfer.replace(/ui-button/gi, "\n");
				var txttransfer = txttransfer.replace(/Instância:/gi, "\nInstância:");
				var txttransfer = txttransfer.replace(/Atividade:/gi, "\nAtividade:");
				var txttransfer = txttransfer.replace(/Tecnologia Voz:/gi, "\nTecnologia Voz:");
				var txttransfer = txttransfer.replace(/Rede TV:/gi, "\nRede TV:");
				var txttransfer = txttransfer.replace(/Tecnologia TV:/gi, "\nTecnologia TV:");
				var txttransfer = txttransfer.replace(/Tipo:/gi, "\nTipo:");
				var txttransfer = txttransfer.replace(/Status:/gi, "\nStatus:");
				var txttransfer = txttransfer.replace(/Técnico:/gi, "\nTécnico:");
				var txttransfer = txttransfer.replace(/Matrícula:/gi, "\nMatrícula:");
				var txttransfer = txttransfer.replace(/RPON:/gi, "\nRP0N:");
				var txttransfer = txttransfer.replace(/PON:/gi, "\nPON:");
				var txttransfer = txttransfer.replace(/Armário:/gi, "Armário:");
				var txttransfer = txttransfer.replace(/Posição Física:/gi, "\nPosição Física:");
				//var txttransfer = txttransfer.replace(/RPXN:/gi, "RPON:");

				var txttransfer = txttransfer.split('\n');
				for (trf = 0; trf < txttransfer.length; trf++) {
					txttransfer[trf] = txttransfer[trf].trim();
					if (txttransfer[trf].length > 0) {
						var finalTransfer = finalTransfer + txttransfer[trf].trim() + '\n';
						if (txttransfer[trf].indexOf('G00') == 0 && txttransfer[trf].indexOf(' - ') > 5) { var transfer_operador = txttransfer[trf] }
						if (txttransfer[trf].indexOf('Documento:') > -1) { var transfer_documento = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Cliente:') > -1) { var transfer_cliente = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Instância:') > -1) { var transfer_instancia = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Tecnologia Voz:') > -1) { var transfer_tecnologiaVoz = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Tipo:') > -1) { var transfer_tipo = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Técnico:') > -1) { var transfer_tecnico = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Matrícula:') > -1) { var transfer_tmatricula = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('RP0N:') > -1) { var transfer_rpon = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('PON:') > -1) { var transfer_pon = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Armário:') > -1) { var transfer_armario = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Posição Física:') > -1) { var transfer_posicaoFisica = txttransfer[trf].split(':')[1].trim() }
						if (txttransfer[trf].indexOf('Posi') > -1) { var trf = 999999 }
					}

				}
				novaChecknote();
				//jQuery('#campo_operador').val(transfer_operador);
				jQuery('#instancia').val(transfer_instancia);
				jQuery('#campo_tecnico').val(transfer_tecnico);
				jQuery('#campo_tmatricula').val(transfer_tmatricula);
				jQuery('#campo_cliente').val(transfer_cliente);
				jQuery('#campo_tipo').val(transfer_tipo);
				fullSearch();

				document.getElementById('txttransfer').value = '';
				jQuery('#debug-transferb').html('<div style="white-space:pre-line;">'
					//+finalTransfer
					+ '<hr>'
					+ transfer_operador + '<br>'
					+ transfer_documento + '<br>'
					+ transfer_cliente + '<br>'
					+ transfer_instancia + '<br>'
					+ transfer_tecnologiaVoz + '<br>'
					+ transfer_tipo + '<br>'
					+ transfer_tecnico + '<br>'
					+ transfer_tmatricula + '<br>'
					+ transfer_rpon + '<br>'
					+ transfer_pon + '<br>'
					+ transfer_armario + '<br>'
					+ transfer_posicaoFisica + '<br>'
					+ '</div>');
				//jQuery('#modal-debug').modal('show');

			}
			else {
				document.getElementById('txttransfer').value = '';
			}
		}

		return false;
	}
	// -------------------------------------------------------
});

//#Change: ===========================================================================
document.addEventListener('change', function (e) {
	// -------------------------------------------------------
	if (e.target.id == "campo_numcelular") {
		if (e.target.value) {
			e.target.value = apenasNumeros(e.target.value)
		}
		keepChecknote();
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "campo_tmatricula") {

		isChecklist();
		keepChecknote();
		return false;
	}

	// -------------------------------------------------------
	if (e.target.id == "frasesProntas") {

		inserirFrase(e.target.value)
		return false;
	}


	// -------------------------------------------------------
	if (e.target.id == "campo_prim") {

		preencheFac(e.target.value)
		return false;
	}
	// -------------------------------------------------------
	if (e.target.id == "campo_cabo") {

		preencheFac(e.target.value)
		return false;
	}
	// -------------------------------------------------------

	//
	if (e.target.id == "infoBinar") {
		binarTBS();

		return false;
	}
	// -------------------------------------------------------
	//
	if (e.target.id == "efk_instancia") {
		efikaCidadesIMS(document.getElementById('efk_instancia').value);

		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("name") == "vcmd_instancia" || e.target.getAttribute("name") == "vcmd_custgrp" || e.target.getAttribute("name") == "vcmd_porta") {
		e.preventDefault();
		cmdTDMgen();
		return false;
	}
	// -------------------------------------------------------

	if (e.target.id == "binada") {
		if (e.target.value) {
			e.target.value = apenasNumeros(e.target.value)
		}

		keepChecknote('', '');
		e.target.value = e.target.value.trim();
		if (e.target.value.length > 9) {
			diagnosticoPnBinada('request');
			//alert()
			e.target.value
			diagnosticoSasBinada({
				'modo': 'request',
				'input': '#binada',
				'bloquear': '#binadaSAS',
				'destino': '#binadaSAS',
				'filtro': filtroSASbinada
			});
			jQuery('.nav-tabs a[href="#dtab-binada"]').tab('show')
		} else if (e.target.value.length == 8) {
			if (jQuery('#instancia').val().length == 10) {
				e.target.value = jQuery('#instancia').val().slice(0, 2) + e.target.value
				// -----------------------------------
				diagnosticoPnBinada('request');
				//alert()
				e.target.value
				diagnosticoSasBinada({
					'modo': 'request',
					'input': '#binada',
					'bloquear': '#binadaSAS',
					'destino': '#binadaSAS',
					'filtro': filtroSASbinada
				});
				jQuery('.nav-tabs a[href="#dtab-binada"]').tab('show')
				// -----------------------------------
			}
			//e.target.value+' - '+jQuery('#instancia').val().slice(0,2);
		}
		return false;
	}
	// -------------------------------------------------------
	if (e.target.getAttribute("data-control") == "keep") {

		//input text
		var keep_nomedocampo = e.target.getAttribute("data-info");
		var keep_iddocampo = e.target.id;

		//tratar textarea e divs editaveis
		keepChecknote(keep_nomedocampo, keep_iddocampo);

		return false;
	}
	// -------------------------------------------------------

});

// -------------------------------------------------------
// Uma outra ideia de como usar o change:
jQuery(document).on("change", "#instancia", function (event) {
	//jQuery("#instancia").change(function(event) {
	event.currentTarget.value = event.currentTarget.value.trim();
	if (event.currentTarget.value.trim().length > 9) {
		fullSearch();
		/*
		//alert(event.currentTarget.value);
			//isChecklist();
			//isHeavyUser();
			//massivaSAS();
			//centralOrigem();
			consultaGps('request')
		diagnosticoSas({
			'modo':'request',
			'input':'#instancia',
			'bloquear':'#diagnostico_SAS',
			'destino':'#diagnostico_SASc',
			'filtro':filtroSAS
		});
		diagnosticoTbs({
			'modo':'request',
			'input':'#instancia',
			'bloquear':'#diagnostico_TBS',
			'destino':'#diagnostico_TBSc',
			'filtro':filtroTBS
		});
		
		*/
		/*
		diagnosticoGestor({
			'modo':'request',
			'input':'#instancia',
			'bloquear':'#bloqueioGestorStatus',
			'filtro':filtroGestor
		});
			diagnosticoPn('request');
			diagnosticoPnCx('request');
			diagnosticoWise('request');
			*/
	} else {
		console.log('caracteres insuficiente')
	}


});


//######################################################################################################
jQuery('[data-toggle=confirmation]').confirmation({
	html: true,
	content: '<input type="text" />',
	singleton: true,
	popout: true,
	buttons: [
		{
			label: 'Add',
			class: 'btn btn-xs btn-success',
			//onClick: function() {alert('add')},
			icon: 'glyphicon glyphicon-ok'
		},
		{
			label: 'Del',
			class: 'btn btn-xs btn-danger',
			//onClick: function() {alert('del')},
			icon: 'glyphicon glyphicon-remove'
		},
		{
			label: 'Revisar',
			class: 'btn btn-xs btn-warning',
			//onClick: function() {alert('rev')},
			icon: 'glyphicon glyphicon-search'
		},
		{
			label: 'Adiar',
			class: 'btn btn-xs btn-default',
			//onClick: function() {alert('adiar')},
			icon: 'glyphicon glyphicon-time'
		}
	]
});