var g_arrRTLs={"0":"he",1:"ar",2:"fa"},g_arrXML={};function GetWebLangID(){var a=MYLANG("id");return"en"!=a&&"zh-cn"!=a&&"zh-tw"!=a?"en":a}
function GetLink(a,b,c,e,f,d,i){var g="";""!=f&&(g="data:"==f.substr(0,5)?'<a href="#" title="'+c+'" id="'+e+'"><IMG class="'+d+'" style="background:url(\''+f+"') no-repeat top left;\"></a>":'<a href="#" title="'+c+'" id="'+e+'"><IMG SRC="image/'+f+'" ALT="'+c+'" class="'+d+'"></a>');i||(""!=g&&(g+=" "),g+='<a href="#" title="'+c+'" id="'+a+'">'+b+"</a>");return g}
function OutputLink(a,b,c,e,f,d,i,g){var h="a_"+a,j=h+"_val",k={},f=f.replace(/%SITE%/g,e);$("#lnk_"+a).html(GetLink(h,e,f,"","","",0));$("#"+a).html(GetLink("","",f,j,d,i,1));k[h]=k[j]={type:b,sel:c,url:g};SetLinkActions(k)}
function UpdateEndResult(a,b,c){var e=MYLANG(g_arrSites[a].text_id),f=""==g_arrSites[a].tip_id?e:e+"("+MYLANG(g_arrSites[a].tip_id)+")",a="a_"+a,d=a+"_val";""==b&&(b=MYLANG("NA"));c=c.replace(/%SITE%/g,e);c=c.replace(/%SITENAME%/g,f);c=c.replace(/%VALUE%/g,b);c=c.replace(/%DOMAIN%/g,sessionStorage.domain);$("#"+a).attr("title",c);$("#"+d).attr("title",c);$("#"+d).html(b)}
function SetLinkAction(a,b){var c=$("#"+a);c&&("mail"==b.type?c.attr("href",b.url):c.click(function(){CreateTab(b.type,b.url,b.sel);return!1}))}function TabLink(a){var b="http://pagerank.chromefans.org/?ref=ext-pr";"top10"==a?b="http://topwebhosting.chromefans.org/?ref=ext-pr":"hostgator"==a?b="http://secure.hostgator.com/~affiliat/cgi-bin/affiliates/clickthru.cgi?id=coolhost":"seomoz"==a&&(b="http://go.seomoz.org/aff_c?offer_id=1&aff_id=4358&aff_sub=ext_pr_top");CreateTab("link",b,!1)}
function SetLinkActions(a){for(var b in a)t_xCtrlImg=t_xCtrl=0,SetLinkAction(b+"_txt",a[b]),SetLinkAction(b+"_img",a[b]),SetLinkAction(b,a[b])}function MakeIconLink(a,b,c){c="<a href=\"javascript:newTab('link', '"+c+'\');" title="'+b+'">';return c+'<IMG SRC="'+a+'" ALT="'+b+'" class="icon_16"></a> '+c+b+"</a>"}function FixVal(a,b,c){return"N/A"==a?a:c?FormatNum(IsNum(a)?a:parseInt(a)):a.length>b?a.substr(0,b):a}
function OnTimeOut(a,b){g_arrXML[a+"_ajax_xhr_"+b].abort();$("#"+a).html(MYLANG("NA"))}
function AjaxUpdate(a,b){var c=g_arrSites[a];if(void 0!=sessionStorage["cache_"+a]&&""!=sessionStorage["cache_"+a]&&c.OnOutput){var e=0;"domain_dns"==a&&(e=""==sessionStorage.cache_geoip_ip);if(!e){c.OnStart&&c.OnStart(a);c.OnOutput(a,1);return}}var e=0==b?"OnStart":"OnStart2",f=0==b?"OnEnd":"OnEnd2",e=c[e]?c[e](a):"";if(""!=e){var d=a+"_ajax_xhr_"+b;g_arrXML[d]=new XMLHttpRequest;var i=window.setTimeout(function(){OnTimeOut(a,b)},2E4),g=function(){window.clearTimeout(i)},h=0;try{g_arrXML[d].onreadystatechange=
function(){"ch_archive"==a&&1==g_arrXML[d].readyState&&g_arrXML[d].setRequestHeader("Accept-Language","en-US");if("on_robots"==a||"on_sitemap"==a){if(3==g_arrXML[d].readyState){g();var b=void 0==g_arrXML[d].status?0:g_arrXML[d].status;h=200==b?1:0;c[f](a,200==b?"OK":"");g_arrXML[d].abort()}!h&&4==g_arrXML[d].readyState&&(g(),b=void 0==g_arrXML[d].status?0:g_arrXML[d].status,c[f](a,200==b?"OK":""),g_arrXML[d].abort())}else 4==g_arrXML[d].readyState&&(g(),c[f](a,200==g_arrXML[d].status?g_arrXML[d].responseText:
""))},g_arrXML[d].onerror=function(){g();c[f](a,"")},g_arrXML[d].open("GET",e,!0),g_arrXML[d].send(null)}catch(j){g(),c[f](a,"")}}}function IsRTL(){var a=MYLANG("id"),b;for(b in g_arrRTLs)if(a==g_arrRTLs[b])return 1;return 0};
