//document.getElementById('reportsFrame').contentDocument.getElementById('searchValue').value="2252";
var extVSMonitorId = document.getElementById('vsmid').value;
var $wrapperXic = document.querySelector('head');
    HTMLNovoXic=''

	+'<link rel="icon" type="image/png" href="chrome-extension://'+extVSMonitorId+'/128.png" sizes="16x16">'
	+'<meta name="theme-color" content="#ffffff">';
	$wrapperXic.insertAdjacentHTML('afterbegin', HTMLNovoXic);
