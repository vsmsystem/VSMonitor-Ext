//SAS duplo + Portability

	function singleScreen(){
		document.getElementById("tmain-a").style.width = "100%";
		document.getElementById("tmain-b").style.width = "0%";
	}
	function doubleScreen(){
		document.getElementById("tmain-a").style.width = "50%";
		document.getElementById("tmain-b").style.width = "50%";
	}
	function horizontalToggle(){
		var tr = document.getElementById("tr-horizontal").style.display;
		if(tr==""){
			document.getElementById("tr-horizontal").style.display="none";
		}else{
			document.getElementById("tr-horizontal").style.display="";
		}
		
	}
	//setTimeout(function(){location.reload();}, 1000);
	
	document.getElementById("btn1Tela").addEventListener("click", function(){
	singleScreen();
});
document.getElementById("btn2Tela").addEventListener("click", function(){
	doubleScreen();
});
document.getElementById("btnPtb").addEventListener("click", function(){
	horizontalToggle();
});
document.getElementById("btnRfxSAS1").addEventListener("click", function(){
	window.open('http://gvtapp/sas/configurar','sasframe1');
});
document.getElementById("btnRfxPtb1").addEventListener("click", function(){
	window.open('http://gvtapp/sas/portability','sasframe1');
});
document.getElementById("btnRfxPtb2").addEventListener("click", function(){
	window.open('http://gvtapp/sas/portability','sasframe2');
});
document.getElementById("btnRfxSAS2").addEventListener("click", function(){
	window.open('http://gvtapp/sas/configurar','sasframe2');
});