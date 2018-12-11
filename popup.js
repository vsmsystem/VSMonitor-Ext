
 db = openDatabase('db1', '1.0', 'Test DB', 2 * 1024 * 1024);

	
 db.transaction(function (tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
	tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
	tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
	msg = '<p>Log message created and row inserted.</p>';
	//document.querySelector('#status').innerHTML =  msg;
 });
/*
 db.transaction(function (tx) {
	tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
	    len = results.rows.length, i;
	   msg = "<p>Found rows: " + len + "</p>";
	   document.querySelector('#status').innerHTML +=  msg;
			
	   for (i = 0; i < len; i++){
		  msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
		  document.querySelector('#toolnow').innerHTML +=  msg;
		  alert('x');
	   }
	}, null);
 });
	*/
	
function gReq(g){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://portalcolaboradores/IntranetCorporativa/BuscaContatos/BuscaPaginada/', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xhr.send("pTexto="+g+"&pTelefone=&pNome=&pSobreNome=&pMatricula=&pDepartamento=&pCidade=&buscaAvancada=&pArea=&pResultadosPorPagina=20&pagNum=1&servico=buscarColaboradores");
	xhr.responseType = "text";
	xhr.onload = function(){
	  document.getElementById("toolnow").innerHTML=this.response;
  	  //document.getElementById("toolnow").style.display="block";

	}
}


//document.getElementById("toolnow").innerHTML='teste'+msg;


elemento = document.getElementById('gsearch');
elemento.addEventListener('click', function(e) {
	

}, false);


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#gsearchtext').addEventListener('keydown', function(e) {
	  if (e.keyCode == 13) { 
		  var imgURL = chrome.extension.getURL("imgs/LoadingBar02.gif");
		  document.getElementById("toolnow").innerHTML='<div style="text-align:center;"><img id="" src="'+imgURL+'"></div>';
		  var g = document.getElementById('gsearchtext').value;
		  gReq(g);
	  }
  });
  document.querySelector('#gsearch').addEventListener('click', function(){
	 // document.getElementById('jbt').style.display="none";
	  var imgURL = chrome.extension.getURL("imgs/LoadingBar02.gif");
	  document.getElementById("toolnow").innerHTML='<div style="text-align:center;"><img id="" src="'+imgURL+'"></div>';
	  var g = document.getElementById('gsearchtext').value;
	  gReq(g);
  });
  
  

  
  
});








