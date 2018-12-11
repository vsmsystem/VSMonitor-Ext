//ao carregar o ETA, capturar as informações necessárias
	function etaGetSID(){
		//console.log(document.getElementsByTagName('body')[0].onload.toString().split("SID=")[1].split("'")[0])
		localStorage['sessid']=_DATA.sessid;
		localStorage['tree']=_DATA.tree_version;
		localStorage['time']=_DATA.struct_change_time;
		
		console.log(localStorage['sessid']);
		console.log(localStorage['tree']);
		console.log(localStorage['time']);
	}
	window.addEventListener("load", etaGetSID); 
