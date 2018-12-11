/*
Remover blur dos documentos inline do scribd
*/
document.addEventListener('click', function(e){
	console.log('Detect: '+e.target.className)
	if(e.target.className == "page_blur_promo_title"){
		console.log('[ - Remover - ]')
		jQuery('.page_blur_promo').remove()
		jQuery('.absimg').css('opacity',1)
		jQuery('.text_layer').css('text-shadow','black 0 0')
	}

});