var g_arrLinks={};document.addEventListener("DOMContentLoaded",function(){CheckRTL();InitPageInfo(sessionStorage.title);CheckDataReady()});function CheckDataReady(){void 0==sessionStorage.status_pageinfo_ok||0==sessionStorage.status_pageinfo_ok?setTimeout(CheckDataReady,1E3):ShowData()}function CheckRTL(){IsRTL()&&(document.body.style.direction="rtl")}
function InitPageInfo(){""==sessionStorage.url?$("#content").html(""):$("#content").html('<div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div>')}function ShowPageInfoItem(a,e,c,b){$("#"+a).html(""==e?MYLANG("NotFound2"):e);c&&$("#"+a+"_num").html(""==e?"-":FormatNum(-1==b?e.length:b))}
function GetLinkText(a,e){if(1==sessionStorage["PI_link"+a+"_count"]){var c=GetLinkTextItem(a,0,e);return'<div title="'+c.title+'">'+c.text+"</div>"}for(var b='<table class="tbl_linktext">',d=0;d<sessionStorage["PI_link"+a+"_count"];d++)c=GetLinkTextItem(a,d,e),b+='<tr><td class="l1">'+(d+1)+'.</td><td title="'+c.title+'"><div class="l2">'+c.text+"</div></td></tr>";return b+"</table>"}
function GetLinkTextItem(a,e,c){var b=sessionStorage["PI_link"+a+"_text"+e+"type"],d=sessionStorage["PI_link"+a+"_text"+e+"data"];return"NA"==b?{title:MYLANG("NA"),text:'<span class="na">'+MYLANG("NA")+"</span>"}:"TXT"==b?(d=d.replace(/"/ig,"&#034;").replace(/</ig,"&lt;").replace(/>/ig,"&gt;"),d=d.length>c?d.substr(0,c)+"...":d,{title:d,text:d}):"IMG"==b?{title:d,text:'<span class="tag">IMG</span> '+FormatURL(d,c,"Img"+a+"_"+e)}:{title:"",text:""}}
function FormatURL(a,e,c){if(""==a)return"";var b=a,d="https://"==a.substr(0,8);"http://"==a.substr(0,7)?b=a.substr(7):d&&(b=a.substr(8));b.length>e&&(b=b.substr(0,e-5)+"..."+b.substr(b.length-5));g_arrLinks[c]={type:"link",sel:0,url:a};return'<a href="#" id="'+c+'" title="'+a+'"'+(d?' class="https"':"")+">"+b+"</a>"}
function ShowData(){if(""==sessionStorage.url)$("#content").html("");else if(0==sessionStorage.PI_link_count)$("#content").html('<div id="loading">'+MYLANG("LinkEmpty")+"</div>");else{for(var a=t_strInternal="",e=t_iIn=t_iNow=0,c=0;c<sessionStorage.PI_link_count;c++){t_iNow=1==sessionStorage["PI_link"+c+"_is_internal"]?++t_iIn:++e;var b=1==sessionStorage["PI_link"+c+"_nofollow"]?'<br>(<span class="tag">rel="nofollow"</span>)':"",b='<tr class="'+(0==t_iNow%2?"tr_bg1":"tr_bg2")+'"><td class="col">'+
t_iNow+'.</td><td class="col"><div class="t1">'+FormatURL(sessionStorage["PI_link"+c+"_href"],100,"Lnk"+c)+b+'</div></td><td class="col"><div class="t2">'+GetLinkText(c,100)+"</div></td></tr>";1==sessionStorage["PI_link"+c+"_is_internal"]?t_strInternal+=b:a+=b}""==a&&(a='<tr class="tr_no"><td class="col" colspan="3">'+MYLANG("NotFound2")+"</td></tr>");a+='<tr class="tr_h2"><td class="col" colspan="3">&nbsp;</td></tr>';""==t_strInternal&&(t_strInternal='<tr class="tr_no"><td class="col" colspan="3">'+
MYLANG("NotFound2")+"</td></tr>");$("#content").html('<table id="tbl_links"><thead><tr class="tr_head"><td class="col c1">#</td><td class="col c2">'+MYLANG("URL")+'</td><td class="col c3" >'+MYLANG("AnchorText")+'</td></tr></thead><tbody><tr class="tr_h2"><td class="col" colspan="3">'+MYLANG("LinkExternal")+": "+FormatNum(sessionStorage.PI_link_external)+" ("+MYLANG("LinkNofollow").replace("%NUM%",FormatNum(sessionStorage.PI_link_external_nofollow))+")</td></tr>"+a+'<tr class="tr_h2" id="internal"><td class="col" colspan="3">'+
MYLANG("LinkInternal")+": "+FormatNum(sessionStorage.PI_link_internal)+" ("+MYLANG("LinkNofollow").replace("%NUM%",FormatNum(sessionStorage.PI_link_internal_nofollow))+")</td></tr>"+t_strInternal+"</tbody></table>");for(var d in g_arrLinks)SetLinkAction(d,g_arrLinks[d])}};
