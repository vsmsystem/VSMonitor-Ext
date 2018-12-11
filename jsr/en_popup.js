$(document).ready(function(){
	//Menu da esquerda
	document.getElementById("tbl_btns").innerHTML=''
	+'<tr id="btn_novidades"		class="active"><td class="hotline"></td><td class="img"><div id="img_9dds"  ></div></td><td class="txt"><div id="lbl_novidades" ></div></td><td id="out1" class="out"></td></tr>'
	+'<tr id="btn_atendimentos"		class="active"><td class="hotline"></td><td class="img"><div id="img_atend"  ></div></td><td class="txt"><div id="lbl_atendimentos" ></div></td><td id="out1" class="out"></td></tr>'
	+'<tr id="btn_matricula"  		class="active"><td class="hotline"></td><td class="img"><div id="img_matricula"    ></div></td><td class="txt"><div id="lbl_matricula" ></div></td><td id="out1" class="out"></td></tr>'
	//+'<tr id="btn_seostats"  		class="active"><td class="hotline"></td><td class="img"><div id="img_seo"    ></div></td><td class="txt"><div id="lbl_seostats" ></div></td><td id="out1" class="out"></td></tr>'
	//+'<tr id="btn_traffic"   		class="active"><td class="hotline"></td><td class="img"><div id="img_traffic"></div></td><td class="txt"><div id="lbl_traffic"></div></td><td id="out2" class="out"></td></tr>'
	//+'<tr id="btn_siteinfo"  		class="active"><td class="hotline"></td><td class="img"><div id="img_site" ></div></td><td class="txt"><div id="lbl_siteinfo" ></div></td><td id="out3" class="out"></td></tr>'
	//+'<tr id="btn_pageinfo"  		class="active"><td class="hotline"></td><td class="img"><div id="img_page" ></div></td><td class="txt"><div id="lbl_pageinfo" ></div></td><td id="out4" class="out"></td></tr>'
	//+'<tr id="btn_links"  		class="active"><td class="hotline"></td><td class="img"><div id="img_links" ></div></td><td class="txt"><div id="lbl_links" ></div></td><td id="out4" class="out"></td></tr>'
	//+'<tr id="btn_pagespeed" 		class="active"><td class="hotline"></td><td class="img"><div id="img_speed"></div></td><td class="txt"><div id="lbl_pagespeed"></div></td><td id="out5" class="out"></td></tr>'
	+'<tr id="btn_webtools"  		class="active"><td class="hotline"></td><td class="img"><div id="img_tools"></div></td><td class="txt"><div id="lbl_webtools" ></div></td><td id="out6" class="out"></td></tr>'
	+'<tr id="btn_suporte"  		class="active"><td class="hotline"></td><td class="img"><div id="img_suporte"></div></td><td class="txt"><div id="lbl_suporte" ></div></td><td id="out7" class="out"></td></tr>'
	;

	//Corpo da pagina
	document.getElementById("tab_page").innerHTML=''
	+'<div id="page_novidades"></div>'
	+'<div id="page_atendimentos"></div>'
	//+'<div id="page_seostats" class="noshow"></div>'
	+'<div id="page_matricula" class="noshow"></div>'
	//+'<div id="page_siteinfo" class="noshow"></div>'
	//+'<div id="page_traffic" class="noshow" ></div>'
	//+'<div id="page_pageinfo" class="noshow" ></div>'
	//+'<div id="page_links" class="noshow"></div>'
	//+'<div id="page_pagespeed" class="noshow"></div>'
	+'<div id="page_webtools" class="noshow"></div>'
	+'<div id="page_suporte" class="noshow"></div>'
	;
	document.getElementById('idVersao').innerHTML='v'+chrome.runtime.getManifest().version
});
function ShowTabLinks() {
    var a = GetConfig("config_firstopen", "novidades"),
        b = {
            novidades: {txt: "Novidades",tips: "Novidades"},
            atendimentos: {txt: "Atendimento",tips: "Atendimento"},
            //seostats: {txt: "SEOStats",tips: "SEOStats"},
            matricula: {txt: "Consulta Colaborador",tips: "Consulta Colaborador"},
            //traffic: {txt: "TrafficStats",tips: "TrafficStats"},
            //siteinfo: {txt: "PageSite",tips: "PageSite"},
            //pageinfo: {txt: "PageInfo",tips: "PageInfo"},
            //links: {txt: "LinksStats",tips: "LinksStats"},
            //pagespeed: {txt: "PageSpeed",tips: "PageSpeed"},
            webtools: {txt: "Ferramentas",tips: "WebmasterTools"},
            suporte: {txt: "Suporte",tips: "Suporte"},
            options: {txt: "Options",tips: "Options"},
            history: {txt: "Novidades",tips: "Novidades"},
            donate: {txt: "Reportar Bug",tips: "Reportar Bug"}
        },
        c;
    for (c in b) $("#lbl_" +c).html(MYLANG(b[c].txt)), $("#btn_" + c).attr("title", MYLANG(b[c].tips));
    $("#btn_novidades").click(function() {        ActiveTab("novidades")    });
    $("#btn_atendimentos").click(function() {        ActiveTab("atendimentos")    });
	//$("#btn_seostats").click(function() {        ActiveTab("seostats")    });
	$("#btn_matricula").click(function() {        ActiveTab("matricula")    });
    //$("#btn_traffic").click(function() {        ActiveTab("traffic")    });
    //("#btn_siteinfo").click(function() {        ActiveTab("siteinfo")    });
    //$("#btn_pageinfo").click(function() {        ActiveTab("pageinfo")    });
    //$("#btn_links").click(function() {        ActiveTab("links")    });
    //$("#btn_pagespeed").click(function() {        ActiveTab("pagespeed")    });
    $("#btn_webtools").click(function() {        ActiveTab("webtools")    });
    $("#btn_suporte").click(function() {        ActiveTab("suporte")    });
    $("#btn_options").click(function() {        OpenOptions()    });
    $("#btn_history").click(function() {        OpenHistory()    });
    $("#btn_donate").click(function() {        OpenDonate()    });
    ActiveTab(a)
}
function ActiveTab(a) {
    ShowTab("novidades", "novidades" == a);
    ShowTab("atendimentos", "atendimentos" == a);
    //ShowTab("seostats", "seostats" == a);
    ShowTab("matricula", "matricula" == a);
    //ShowTab("traffic", "traffic" == a);
    //ShowTab("siteinfo", "siteinfo" == a);
    //ShowTab("pageinfo", "pageinfo" == a);
    //ShowTab("links", "links" == a);
    //ShowTab("pagespeed", "pagespeed" == a);
    ShowTab("webtools", "webtools" == a)
    ShowTab("suporte", "suporte" == a)
}
function ShowFrameLoading() {
    $("#page_novidades").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    $("#page_atendimentos").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    //$("#page_seostats").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    $("#page_matricula").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    //$("#page_traffic").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    //$("#page_siteinfo").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    //$("#page_pageinfo").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    //$("#page_links").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    //$("#page_pagespeed").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>');
    $("#page_suporte").html('<div id="loading_out"><div id="loading"><img src="image/loading-big-2b.gif" ALT=""></div></div>')
}

function ShowFramePages() {
    $("#page_novidades").html('<IFRAME src="frame-novidades.html" scrolling="YES" id="frame_seostats" class="framepage"></frame>');
    $("#page_atendimentos").html('<IFRAME src="frame-atendimentos.html" scrolling="YES" id="frame_seostats" class="framepage"></frame>');
    $("#page_matricula").html('<IFRAME src="frame-matricula.html" scrolling="YES" id="frame_seostats" class="framepage"></frame>');
    //$("#page_seostats").html('<IFRAME src="frame-seostats.html" scrolling="YES" id="frame_seostats" class="framepage"></frame>');
    //$("#page_traffic").html('<IFRAME src="frame-traffic.html" scrolling="YES" id="frame_traffic" class="framepage"></frame>');
    //$("#page_siteinfo").html('<IFRAME src="frame-siteinfo.html" scrolling="YES" id="frame_siteinfo" class="framepage"></frame>');
    //$("#page_pageinfo").html('<IFRAME src="frame-pageinfo.html" scrolling="YES" id="frame_pageinfo" class="framepage"></frame>');
    //$("#page_links").html('<IFRAME src="frame-links.html" scrolling="YES" id="frame_links" class="framepage"></frame>');
    //$("#page_pagespeed").html('<IFRAME src="frame-pagespeed.html" scrolling="YES" id="frame_pagespeed" class="framepage"></frame>');
    $("#page_webtools").html('<IFRAME src="frame-webtools.html" scrolling="YES" id="frame_webtools" class="framepage"></frame>');
    $("#page_suporte").html('<IFRAME src="frame-suporte.html" scrolling="YES" id="frame_suporte" class="framepage"></frame>');
    "" != sessionStorage.url && chrome.tabs.executeScript(null, {
        file: "jsr/en_content.js"
    });
    GetSpeedValues();
    CheckDomainSession();
    CheckHostSession();
    CheckPageSession();
    CheckAllSession()
}
function OnLoadHistory() {
    $("#a_pop_pp").click(function() {
        OpenDonate()
    });
    SetLinkActions({
        a_pop_history: {
            type: "link",
            sel: 0,
            url: "http://pagerank.chromefans.org/updates/?ref=ext-pr"
        },
        a_pop_blue_en: {
            type: "link",
            sel: 1,
            url: "http://www.bluehost.com/track/chromefans/bluehost-news-en"
        },
        a_pop_blue_zh_tw: {
            type: "link",
            sel: 1,
            url: "http://www.bluehost.com/track/chromefans/bluehost-news-zh-tw"
        },
        a_pop_sns_facebook: {
            type: "link",
            sel: 1,
            url: "https://www.facebook.com/pagerankstatus"
        },
        a_pop_sns_gplusr: {
            type: "link",
            sel: 1,
            url: "http://g.chromefans.org/?ref=ext_pr"
        },
        a_pop_sns_twitter: {
            type: "link",
            sel: 1,
            url: "https://twitter.com/lovechrome"
        },
        a_pop_taobao: {
            type: "link",
            sel: 1,
            url: "https://item.taobao.com/item.htm?id=7754768889"
        },
        a_pop_lid_lt: {
            type: "link",
            sel: 0,
            url: "http://smartechas.eu"
        },
        a_pop_huang: {
            type: "link",
            sel: 0,
            url: "http://bluelephant3d.com/"
        }
    })
}
var g_xReqDB = 0,
    g_xDB = 0,
    g_arrStatsType = {
        domain_dns: {
            type: 1,
            key: "dn"
        },
        domain_dns2: {
            type: 1,
            key: "d2"
        },
        tf_compete: {
            type: 1,
            key: "tp"
        },
        geoip_ip: {
            type: 2,
            key: "gi"
        },
        geoip_city: {
            type: 2,
            key: "gt"
        },
        geoip_country: {
            type: 2,
            key: "gc"
        },
        geoip_code: {
            type: 2,
            key: "gd"
        },
        tf_alexa: {
            type: 2,
            key: "ta"
        },
        tf_alexa_cnt_code: {
            type: 2,
            key: "td"
        },
        tf_alexa_cnt_name: {
            type: 2,
            key: "tn"
        },
        tf_alexa_cnt: {
            type: 2,
            key: "tc"
        },
        tf_quantcast: {
            type: 2,
            key: "tq"
        },
        on_robots: {
            type: 2,
            key: "or"
        },
        on_sitemap: {
            type: 2,
            key: "os"
        },
        idx_bing: {
            type: 2,
            key: "ib"
        },
        idx_baidu: {
            type: 2,
            key: "ia"
        },
        idx_goo: {
            type: 2,
            key: "ig"
        },
        idx_google: {
            type: 2,
            key: "il"
        },
        idx_sogou: {
            type: 2,
            key: "is"
        },
        idx_yandex: {
            type: 2,
            key: "iy"
        },
        idx_360: {
            type: 2,
            key: "i3"
        },
        bl_google_w: {
            type: 2,
            key: "lg"
        },
        bl_sogou: {
            type: 2,
            key: "ls"
        },
        sec_norton: {
            type: 2,
            key: "en"
        },
        sec_siteadv: {
            type: 2,
            key: "es"
        },
        sec_wot: {
            type: 2,
            key: "ew"
        },
        sns_ggplus: {
            type: 3,
            key: "ng"
        },
        sns_stumbles: {
            type: 3,
            key: "ns"
        },
        ch_archive: {
            type: 3,
            key: "ca"
        },
        ch_google: {
            type: 3,
            key: "cg"
        }
    };
document.addEventListener("DOMContentLoaded", function() {
    CheckVersion();
    LoadLangToStorage();
    sessionStorage.status_cache_db_1 = sessionStorage.status_cache_db_2 = sessionStorage.status_cache_db_3 = 0;
    sessionStorage.status_cache_remote_1 = sessionStorage.status_cache_remote_2 = sessionStorage.status_cache_remote_3 = 0;
    sessionStorage.status_pageinfo_ok = 0;
    sessionStorage.status_pagespeed_ok = 0;
    sessionStorage.status_nowtime = Date.parse(new Date) / 1E3;
    chrome.tabs.getSelected(null, function(a) {
        SaveSession(a.id, a.url, a.title);
        InitDatabaseAndCache();
        window.setTimeout(function() {
            ShowFramePages()
        }, 1100)
    });
    CheckRTL();
    ShowFrameLoading();
    ShowTopLinks();
    ShowTabLinks();
    ShowOtherRes();
    ShowOtherRes2();
    OpenHistoryOnce();
    QueryOatSite(1)
});
function OpenCHistory() {
    var a = MYLANG("id"),
        a = void 0 == g_arrHistry[a] ? g_arrHistry.en : g_arrHistry[a];
    $("#pop_history").html('<div id="h2_new">Atualizado para '+g_strShowHistory+' ... </div>' 
	+ a	
	+ '<a id="close_x" class="close sprited" href="#" title="Fechar"></a>');
    $("#pop_history").lightbox_me({
        centered: !0,
        onLoad: function() {
            //OnLoadHistory()
        }
    })
}

function OpenHistory() {
    var a = MYLANG("id"),
        a = void 0 == g_arrHistry[a] ? g_arrHistry.en : g_arrHistry[a];
    $("#pop_history").html('<div id="h2_new">Atualizado para '+g_strShowHistory+'</div>' 
	+ a	
	+ '<a id="close_x" class="close sprited" href="#" title="Fechar"></a>');
    $("#pop_history").lightbox_me({
        centered: !0,
        onLoad: function() {
            //OnLoadHistory()
        }
    })
}

function primeiroAcesso() {
    var a = MYLANG("id"),
        a = void 0 == g_arrNew[a] ? g_arrNew.en : g_arrNew[a];
    $("#pop_history").html('<div id="h2_new">Bem Vindo!</div>' 
	+ a	
	+ '<a id="close_x" class="close sprited" href="#" title="Fechar"></a>');
    $("#pop_history").lightbox_me({
        centered: !0,
        onLoad: function() {
            //OnLoadHistory()
        }
    })
}

function OpenHistoryOnce() {
	//if ((void 0 == localStorage.version_show ? "" : localStorage.version_show) != g_strShowHistory) localStorage.version_show = g_strShowHistory, OpenHistory()
		
	if(void 0 == localStorage.version_show){
		//primeiro acesso
		if ((void 0 == localStorage.version_show ? "" : localStorage.version_show) != g_strShowHistory){
			jQuery.ajax({
				url:"http://10.40.174.101:8000/vsm-base/api/userlog/",
				type: "POST",
				data:{
					"usuario":"Chrome",
					"nome":"Extension",
					"setor":"",
					"acao":"install",
					"msg":g_strShowHistory
				}
			});
			localStorage.version_show = g_strShowHistory, primeiroAcesso()
		} 
	}else{
		//update
		if ((void 0 == localStorage.version_show ? "" : localStorage.version_show) != g_strShowHistory){
			jQuery.ajax({
				"url":"http://10.40.174.101:8000/vsm-base/api/userlog/",
				"type": "POST",
				"data":{
					"usuario":"Chrome",
					"nome":"Extension",
					"setor":"",
					"acao":"updated",
					"msg":g_strShowHistory
				}
			});
			localStorage.version_show = g_strShowHistory, OpenHistory()
		} 
	}
}

function OpenDonate() {
    $("#pop_donate").html('<h1>Este canal não está online, mas caso tenha algum bug a reportar ou sugestão de melhorias, enviar para <span style="color:#ff0000">Ana.Okahara@telefonica.com</span> !</h1>');
    $("#pop_donate").lightbox_me({
        centered: !0,
        onLoad: function() {
            OnLoadDonate()
        }
    })
}

function OnLoadDonate() {
    var a = {
        a_pop_pp2: {
            type: "link",
            sel: 1,
            url: GetPaypalLink("pp@chromefans.org", "EXT-PR", "Donate for Open SEO Stats")
        }
    };
    SetLinkActions(a)
}

function CheckRTL() {
    IsRTL() && (document.body.style.direction = "rtl", $("#out1").attr("class", "outRTL"), $("#out2").attr("class", "outRTL"), $("#out3").attr("class", "outRTL"), $("#out4").attr("class", "outRTL"), $("#out5").attr("class", "outRTL"), $("#out6").attr("class", "outRTL"), $("#out7").attr("class", "outRTL"), $("#out8").attr("class", "outRTL"), $("#out9").attr("class", "outRTL"), $("#out10").attr("class", "outRTL"), $("#space_out").attr("class", "shadowRTL"))
}

function ShowTopLinks() {
	/*
    $("#title_info").html('<div id="title_h1">Open SEO Stats</div><div id="title_desc">' + MYLANG("ChromeSeobar") + " (" + MYLANG("FormerName") + ": <b>PageRank Status</b>)</div>");
    $("#search_btn").click(function() {
        OnBtnStats()
    });
    document.getElementById("q").placeholder = MYLANG("EnterURL") + "..."
	*/
}



function OpenOptions() {
    t_strURL = MyExtURL("Vweb/options.html");
    chrome.tabs.create({
        url: t_strURL,
        selected: !0
    })
}



function ShowTab(a, b) {
    GetCtrl("btn_" + a).className = b ? "active" : "normal";
    GetCtrl("page_" + a).className = b ? "" : "noshow"
}



function ShowOtherRes2() {/*
    var a = GetConfig("config_oatquery_text", "");
    if ("" != a && "{" == a.substring(0, 1)) {
        var b = JSON.parse(a);
        if (b.flag_show)
            if (MYLANG("id_folder").toLowerCase() != b.flag_lang) SetConfig("config_oatquery_text", ""), SetConfig("config_oatquery_time", 0);
            else {
                a = GetLnkFromJson(b.pop_txt1);
                b = GetLnkFromJson(b.pop_txt2);
                $("#pop_txt1").html(a.link);
                $("#pop_txt2").html(b.link);
                var c = {};
                c["a_" + a.id] = {
                    type: "link",
                    sel: 0,
                    url: a.url
                };
                c["a_" + b.id] = {
                    type: "link",
                    sel: 0,
                    url: b.url
                };
                SetLinkActions(c)
            }
    }
*/}

function GetLnkFromJson(a) {
    var b = GetLink("a_" + a.link_id, a.txt, a.tips, "a_" + a.link_id + "_img", a.img_ico, "icon_16", 0);
    return {
        id: a.link_id,
        url: a.url,
        link: b
    }
}

function GetAD(a) {
    var b = MYLANG("id"),
        b = void 0 == a[b] ? a.en : a[b],
        c = GetLink("a_" + a.link_id, b.txt, b.tips, "a_" + a.link_id + "_img", a.img_ico, "icon_16", 0);
    return {
        id: a.link_id,
        url: b.url,
        link: c
    }
}

function ShowOtherRes() {

    
	$("#other_res").html(''
	+'<table>    '
	+'<tr>      '
	+'	<td class="otd1" rowspan="2" style="display:none;">'
	+'	<a href="#" id="a_facebook" title="Like us on Facebook">'
	+'	<img src="image/lnk-facebook.png" ALT="" width=44 height=44></a>'
	+'	</td>      '
	+'	<td class="otd2 feedback"><a href="#"><IMG SRC="image/icon-email16.png" class="icon_16"></a> <a href="#"><span class="">Ana.Okahara@telefonica.com</span></a></td>'
    +'	<td class="otd_space" rowspan="2"><div class="space_top"></div><div class="space_bottom"></div></td>      '
	+'	<td class="otd3"><a href="#"><IMG SRC="image/icon-open.gif" class="icon_16"></a> <a href="./Vweb/painel.html" target="_blank" title="">Painel</a></td>      '
	+'	<td class="otd_space" rowspan="2"><div class="space_top"></div><div class="space_bottom"></div></td>      '
	+'	<td class="otd4" id="pop_txt1"><a href="#"><IMG SRC="image/icon-sa-grey.png" class="icon_16"></a> <a href="http://efika/vsm/VSMonitor-Ext-Tutorial.php" target="_blank" title="">Como usar a extensão?</a></td>    '
	+'</tr>    '
	+'<tr>      '
	+'<td>    '
	+'	<a href="#" id=""><IMG SRC="image/icon_chrome.png" class="icon_16"></a>   <a href="http://vsmsystem.com/" title="" id=""><span class="">vsmsystem.com</span></a>'
	//+'	<a href="#" target=_blank title="#" title="Support site"><div id="sns_site" class="sns_follow"></div></a>    '
	//+'	<a href="#" target=_blank title="Follow us on Google Plus"><div id="sns_ggplus" class="sns_follow"></div></a>    '
	//+'	<a href="#" target=_blank title="Follow us on Twitter"><div id="sns_twitter" class="sns_follow"></div></a>    '
	//+'	<a href="#" target=_blank title="RSS Feed"><div id="sns_rss" class="sns_follow"></div></a>    	'
	//+'	<a href="#" target=_blank title="Subscribe by Email"><div id="sns_email" class="sns_follow"></div></a></div>'
	+'</td>      '
	+'<td><div id="trans_txt"><a href="http://efika/web/"><IMG SRC="image/icon-open.gif" class="icon_16"></a> <a href="./Vweb/sistemas.html" target="_blank" title="" id="">Links</a></div></td>      <td id="pop_txt2"></td>    '
	+'</tr></table>');
    /*a = {
        a_facebook: {type: "link",sel: 0,url: "https://www.facebook.com/etc"},
        a_feedback: {type: "mail",sel: 0,url: "mailto:valdecir.merli@telefonica.com"},
        a_donate: {type: "link",sel: 1,url: GetPaypalLink("vsm@vsmsystem.com", "EXT-PR", "Donate")},
        a_translate: {type: "link",sel: 0,url: "http://#"},
        a_rateit: {type: "link",sel: 0,url: "https://#"}
    };
	*/
    //SetLinkActions(a);
    //GetCtrl("a_feedback").target = "_blank";
    //GetCtrl("a_feedback_img").target = "_blank"
}

function SaveSession(a, b, c) {
    if (eOk(b)) {
        var d = b.indexOf("#"); - 1 != d && (b = b.substr(0, d));
        sessionStorage.id = a;
        sessionStorage.url = b;
        sessionStorage.title = c;
        sessionStorage.domain = GetHostOrDomain(b, 0);
        sessionStorage.host = GetHostOrDomain(b, 1);
        sessionStorage.protocal = "https://" == b.substr(0, 8) ? "https" : "http";
        document.getElementById("q").value = sessionStorage.protocal + "://" + sessionStorage.host + "/"
    } else sessionStorage.url = "", sessionStorage.host = "", sessionStorage.protocal = ""
}
chrome.extension.onMessage.addListener(function(a) {
    var b = a.url,
        c = b.indexOf("#"); - 1 != c && (b = b.substr(0, c));
    if ("getSource" == a.action && b == sessionStorage.url) {
        sessionStorage.PI_url = b;
        sessionStorage.PI_title = a.title;
        sessionStorage.PI_keywords = a.keywords;
        sessionStorage.PI_description = a.description;
        sessionStorage.PI_robots = a.robots;
        sessionStorage.PI_h1 = a.h1;
        sessionStorage.PI_h1_len = a.h1_len;
        sessionStorage.PI_h2 = a.h2;
        sessionStorage.PI_h2_len = a.h2_len;
        sessionStorage.PI_b = a.b;
        sessionStorage.PI_b_len = a.b_len;
        sessionStorage.PI_i = a.i;
        sessionStorage.PI_i_len = a.i_len;
        sessionStorage.PI_alt = a.alt;
        sessionStorage.PI_alt_len = a.alt_len;
        sessionStorage.PI_body = a.body;
        sessionStorage.PI_body_len = a.body_len;
        sessionStorage.PI_link_canonical = a.link_canonical;
        sessionStorage.PI_link_internal = a.link_internal;
        sessionStorage.PI_link_internal_nofollow = a.link_internal_nofollow;
        sessionStorage.PI_link_external = a.link_external;
        sessionStorage.PI_link_external_nofollow = a.link_external_nofollow;
        var c = 0,
            d;
        for (d in a.link_map)
            if (a.link_map.hasOwnProperty(d)) {
                b =
                    a.link_map[d];
                sessionStorage["PI_link" + c + "_count"] = b.count;
                sessionStorage["PI_link" + c + "_href"] = b.href;
                sessionStorage["PI_link" + c + "_hostname"] = b.hostname;
                sessionStorage["PI_link" + c + "_nofollow"] = b.nofollow;
                sessionStorage["PI_link" + c + "_is_internal"] = b.is_internal;
                for (var e = 0; e < b.count; e++) sessionStorage["PI_link" + c + "_text" + e + "type"] = b.text[e].type, sessionStorage["PI_link" + c + "_text" + e + "data"] = b.text[e].data;
                c++
            }
        sessionStorage.PI_link_count = c;
        sessionStorage.status_pageinfo_ok = 1
    } else "getSpeed" == a.action ?
        GetSpeedValues() : "openPage" == a.action && ActiveTab(a.page)
});

function GetSpeedValues() {
    var a = chrome.extension.getBackgroundPage().g_arrCache[sessionStorage.id];
    if (void 0 != a && a.status_pagespeed_url == sessionStorage.url) {
        for (var b in a) sessionStorage[b] = a[b];
        sessionStorage.status_pagespeed_ok = 1
    }
}

function CheckDomainSession() {
    1 != sessionStorage.status_cache_db_1 && (CheckSessionComplete(1) || setTimeout(CheckDomainSession, 1100))
}

function CheckHostSession() {
    1 != sessionStorage.status_cache_db_2 && (CheckSessionComplete(2) || setTimeout(CheckHostSession, 1100))
}

function CheckPageSession() {
    1 != sessionStorage.status_cache_db_3 && (CheckSessionComplete(3) || setTimeout(CheckPageSession, 1100))
}

function IsRootSite(a) {
    var b = a.match(/(http|https):\/\/([^\/]+)/i);
    return !b ? 0 : a == b[1] + "://" + b[2] + "/" ? 1 : 0
}

function CheckAllSession() {
    if (IsRootSite(sessionStorage.url) && !(1 == sessionStorage.status_cache_db_1 && 1 == sessionStorage.status_cache_db_2 && 1 == sessionStorage.status_cache_db_3)) {
        var a;
        for (a = 1; 4 > a; a++)
            if (0 == sessionStorage["status_cache_db_" + a] && 0 == sessionStorage["status_cache_remote_" + a]) {
                setTimeout(CheckAllSession, 1100);
                return
            }
        t_strReq = "https://query.openadmintools.com/?v=" + localStorage.version_lang_flag + "&i=" + GetUID() + "&sw=" + screen.width + "&sh=" + screen.height;
        for (a = 1; 4 > a; a++)
            if (0 == sessionStorage["status_cache_db_" +
                    a] && 1 == sessionStorage["status_cache_remote_" + a]) {
                switch (a) {
                    case 1:
                        t_strReq = t_strReq + "&d=" + encodeURIComponent(sessionStorage.domain);
                        break;
                    case 2:
                        t_strReq = t_strReq + "&h=" + encodeURIComponent(sessionStorage.host);
                        break;
                    case 3:
                        t_strReq = t_strReq + "&u=" + encodeURIComponent(sessionStorage.url)
                }
                for (var b in g_arrStatsType)
                    if (g_arrStatsType[b].type == a) {
                        var c = void 0 == sessionStorage["remote_" + b] ? sessionStorage["cache_" + b] : sessionStorage["remote_" + b];
                        if ("" == c) return;
                        t_strReq = t_strReq + "&" + g_arrStatsType[b].key + "=" +
                            encodeURIComponent(c)
                    }
            }
        var d = new XMLHttpRequest,
            e = window.setTimeout(function() {
                d.abort()
            }, 2E4);
        try {
            d.onreadystatechange = function() {
                4 == d.readyState && window.clearTimeout(e)
            }, d.onerror = function() {
                window.clearTimeout(e)
            }, d.open("GET", t_strReq, !0), d.send(null)
        } catch (f) {
            window.clearTimeout(e)
        }
    }
}

function CheckSessionComplete(a) {
    for (var b in g_arrStatsType)
        if (g_arrStatsType[b].type == a && void 0 == sessionStorage["remote_" + b] && (void 0 == sessionStorage["cache_" + b] || "" == sessionStorage["cache_" + b]) && "tf_alexa_cnt_code" != b && "tf_alexa_cnt_name" != b && "tf_alexa_cnt" != b) return 0;
    sessionStorage["status_cache_remote_" + a] = 1;
    if (!g_xDB) return 1;
    var c = t_strVal = t_strStore = "";
    switch (a) {
        case 1:
            t_strStore = "DomainInfo";
            c = "domain";
            t_strVal = sessionStorage.domain;
            break;
        case 2:
            t_strStore = "SiteInfo";
            c = "host";
            t_strVal = sessionStorage.host;
            break;
        case 3:
            t_strStore = "PageInfo", c = "url", t_strVal = sessionStorage.url
    }
    var d = {};
    d[c] = t_strVal;
    d.time = sessionStorage.status_nowtime;
    for (b in g_arrStatsType) g_arrStatsType[b].type == a && (d[b] = void 0 == sessionStorage["remote_" + b] ? sessionStorage["cache_" + b] : sessionStorage["remote_" + b]);
    g_xDB.transaction([t_strStore], "readwrite").objectStore(t_strStore).put(d);
    return 1
}

function InitDatabaseAndCache() {
    if (!(void 0 == sessionStorage.url || "" == sessionStorage.url) && window.indexedDB) 2 > GetConfig("version_database", 1) && window.indexedDB.deleteDatabase("PRS-DB"), g_xReqDB = window.indexedDB.open("PRS-DB", 1), g_xReqDB.onerror = function() {}, g_xReqDB.onsuccess = function(a) {
        localStorage.version_database = 2;
        g_xDB = a.target.result;
        a = GetConfig("config_cache_hours", 24);
        0 != a && (ExportToCache("DomainInfo", sessionStorage.domain, a, 1), ExportToCache("SiteInfo", sessionStorage.host, a, 2), ExportToCache("PageInfo",
            sessionStorage.url, a, 3))
    }, g_xReqDB.onupgradeneeded = function(a) {
        g_xDB = a.target.result;
        g_xDB.createObjectStore("DomainInfo", {
            keyPath: "domain"
        });
        g_xDB.createObjectStore("SiteInfo", {
            keyPath: "host"
        });
        g_xDB.createObjectStore("PageInfo", {
            keyPath: "url"
        })
    }
}

function ExportToCache(a, b, c, d) {
    var e = g_xDB.transaction([a], "readwrite").objectStore(a),
        f = e.get(b);
    f.onerror = function() {
        SetDBToCache(0, d)
    };
    f.onsuccess = function() {
        void 0 == f.result ? SetDBToCache(0, d) : sessionStorage.status_nowtime - 3600 * c > f.result.time ? (SetDBToCache(0, d), e["delete"](b)) : SetDBToCache(f.result, d)
    }
}

function SetDBToCache(a, b) {
    sessionStorage["status_cache_db_" + b] = 0 == a ? 0 : 1;
    if (0 == a)
        for (var c in g_arrStatsType) g_arrStatsType[c].type == b && (sessionStorage["cache_" + c] = "");
    else
        for (c in a) sessionStorage["cache_" + c] = a[c], "" == a[c] && ("tf_alexa_cnt_code" != c && "tf_alexa_cnt_name" != c && "tf_alexa_cnt" != c) && (sessionStorage["status_cache_db_" + b] = 0)
}

function OnBtnStats() {
    var a = document.getElementById("q").value,
        a = a.toLowerCase();
    "http://" == a.substring(0, 7) ? a = a.substring(7) : "https://" == a.substring(0, 8) && (a = a.substring(8));
    var b = a.indexOf("/"); - 1 != b && (a = a.substring(0, b));
    if ("" == a || -1 == a.indexOf(".") || "" == GetDomain(a)) return !1;
    a = "https://www.openadmintools.com/" + GetWebLangID() + "/" + a + "/";
    CreateTab("link", a, !0);
    return !1
};


