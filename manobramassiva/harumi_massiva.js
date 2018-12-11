function ims(){
	var ard = document.getElementsByName("shelfOrigem.equipmentId");
	var lista = document.getElementsByTagName("option");
	for (i = 0; i < lista.length; i++) { 
	   if(lista[i].innerHTML.match(/IMS/g)){
					   return lista[i].innerHTML;
	   }
	}
}
alert (ims());

function ims2() {
	var ard = document.getElementsByName("shelfOrigem.equipmentId");
	return ard;	
}

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

res = ims2();
	if  
/*ard[0].options.length;
ard[0].options[1].innerHTML;


<button onclick="ims2();" type="button">Testar</button>

RIO BRANCO - AC - NDA
RIO LARGO - AL - NDA
BOCA DA MATA - AL - NDA
MACEIO - AL - A01/A03/A04/A05/A07/A08/A09/A10/A11/A13/A14/A15/A16/A19/A20/A21/A22/A23/A24/A25/A27/A28/A29/A30/A33/A34/A35/A37/A38/A41/A42/A43/A44/A45/A46/A48/A51/A53/A57/A61/A64/A69/A70/A71/A74/A77/A82/A83/A84/A85/A86/A89/T01
MANAUS - AM - NDA
AP - NDA
ALAGOINHAS - BA - A01/A02
BRUMADO - BA - NDA
CACULE - BA -  NDA
CAMACARI - BA - T02
CANDEIAS - BA -  NDA 
CASTRO ALVES - BA -  NDA
CONTENDAS DO SINCORÁ - BA -  NDA
FEIRA DE SANTANA - BA - A27/A31/T01
IACU - BA -  NDA
IRAMAIA - BA -  NDA
JACU - BA -  NDA
LAURO DE FREITAS - BA - A12/A13/A14/A15/T02
MATA DE SAO JOAO - BA -  NDA
MUCURI - BA -  NDA
PETIM - BA -  NDA
SALVADOR - BA - 
SANTO AMARO - BA -  NDA
SIMOES FILHO - BA - T02
URANDI - BA - 
*/
