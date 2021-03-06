	var vsmLinks=chrome.extension.getURL("Vweb/sistemas.html");
	var vsmPainel=chrome.extension.getURL("Vweb/painel.html");
document.addEventListener("DOMContentLoaded", function() {
    CheckRTL();
    InitWebTools()
});

function CheckRTL() {
    IsRTL() && (document.body.style.direction = "rtl")
}

function GetLinkItem(a, b, c, d, e, g) {
    var a = 1 == a ? ' class="li2"' : "",
        f = g ? MYLANG(d) : d,
        e = g ? MYLANG(e) : e,
        b = "data:" == b.substr(0, 5) ? "<div style=\"background:url('" + b + '\') no-repeat top left;width:32px;height:32px;border:0px" title="' + d + '">' : '<img src="image/tools/' + b + '" ALT="' + d + '">';
    return "<li" + a + '><table class="tbl_urlitem"><tr><td title="' + f + '"><div class="url_logo">' + b + '</div></td><td class="url_txt" title="' + f + '"><a href="#" id="' + c + '" title="' + f + '">' + e + "</a></td></tr></table></li>"
}

function InitWebTools() {
    var a = {
            "0": 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0
        },
        b = GetConfig("config_oatquery_text", "");
    if (b && "{" == b.substring(0, 1)) {
        var c = JSON.parse(b);
        if (c.flag_show)
            for (b = 0; 9 > b; b++) {
                var d = "web_" + (b + 1);
                c[d] && (a[b] = c[d], a[b].lang = 0)
            }
    }
    c = {
        "0": {
            img_ico: "tradutor-ims.png",
            link_id: "lnk_web_oat",
            tips: "Open Admin Tools for webmasters",
            txt: "Tradutor IMS",
            lang: 0,
            url: "https://127.0.0.1/?ref=oat_chrome_tools"
        },
        1: {
            img_ico: "hosting.png",
            link_id: "lnk_web_hosting",
            tips: "Top 10 Web Hosting: Scalable and Reliable Web Hosting Services",
            txt: "Top 10 Web Hosting",
            lang: 0,
            url: "http://topwebhosting.chromefans.org/?ref=ext_pr_tool"
        },
        2: {
            img_ico: "screenres.png",
            link_id: "lnk_web_screenres",
            tips: MYLANG("Tool_ScreenRes"),
            txt: MYLANG("Tool_ScreenRes"),
            lang: 0,
            url: "http://www.screenresolution.org/?ref=ext_pr"
        },
        3: {
            img_ico: "ping.png",
            link_id: "lnk_web_ping",
            tips: MYLANG("Free_ping"),
            txt: MYLANG("Free_ping"),
            lang: 0,
            url: "https://ping.2openadmintools.com/?ref=ext_pr"
        },
        4: {
            img_ico: "whois.png",
            link_id: "lnk_web_whois",
            tips: MYLANG("Whois"),
            txt: MYLANG("Whois"),
            lang: 0,
            url: "http://whois.chromefans.org/?ref=ext_pr"
        },
        5: {
            img_ico: "ip.png",
            link_id: "lnk_web_geoip",
            tips: MYLANG("Tool_GEOIP"),
            txt: MYLANG("Tool_GEOIP"),
            lang: 0,
            url: "https://ip.3openadmintools.com/?ref=oat_chrome_tools"
        },
        6: {
            img_ico: "useragent.png",
            link_id: "lnk_web_useragent",
            tips: MYLANG("Tool_UserAgent"),
            txt: MYLANG("Tool_UserAgent"),
            lang: 0,
            url: "http://www.httpuseragent.org/?ref=ext_pr"
        },
        7: {
            img_ico: "myip.png",
            link_id: "lnk_web_myip",
            tips: "Detect the current public IP address",
            txt: "IP Lookup",
            lang: 0,
            url: "https://chrome.google.com/webstore/detail/what-is-my-ip-address/floedkhigbndbnimpflddnlefhopmfhc"
        },
        8: {
            img_ico: "w3c.png",
            link_id: "lnk_w3c_lnkchk",
            tips: "W3C Link Checker",
            txt: "W3C Link Checker",
            lang: 0,
            url: "http://validator.w3.org/checklink"
        }
    };
    for (b = 0; 9 > b; b++) a[b] || (a[b] = c[b]);
	
    $("#content").html('<table class="urltbl"><tr class="tr_head"><td><div class="subtitle">Ferramentas VSMonitor</div></td></tr><tr><td class="td_items"><ul class="urllist">' 
	+ GetLinkItem(0, "vsm-links.png", "lnk_se_links", "Links", "Links", 1) 
	+ GetLinkItem(0, "painel3.png", "lnk_se_painel", "Painel Diagnostico", "Painel Diagnostico", 1) 
	+ GetLinkItem(1, "zip.png", "lnk_se_vsmonitorzip", "VSMonitor Zip", "VSMonitor Zip",1) 
	//+ GetLinkItem(2, "gkeywords.png", "lnk_gg_key", "Tool_GG_Key", "Tool_GG_Key", 1) 
	+ '</ul>'
	//+'<ul class="urllist">' 
	//+ GetLinkItem(0, "bing.png", "lnk_se_bing", "Webmaster_Bing", "Webmaster_Bing", 1) 
	//+ GetLinkItem(1, "baidu.png", "lnk_se_baidu", "Webmaster_Baidu", "Webmaster_Baidu", 1) 
	//+ GetLinkItem(2, "yandex.png", "lnk_se_yandex", "Webmaster_Yandex", "Webmaster_Yandex", 1) 
	//+ '</ul>'
	+'</td></tr>'
	+'</table><div class="space"></div><table class="urltbl"><tr class="tr_head"><td><div class="subtitle">Mais Ferramentas</div></td></tr><tr><td class="td_items"><ul class="urllist">'
    //+GetLinkItem(0, a[0].img_ico, a[0].link_id, a[0].tips, a[0].txt, a[0].lang)
	+ GetLinkItem(0, "tradutor-ims.png", "lnk_se_tradutor", "Tradutor-IMS", "Tradutor-IMS", 1) 
	//+GetLinkItem(1, a[1].img_ico, a[1].link_id, a[1].tips, a[1].txt, a[1].lang)
	//+GetLinkItem(2, a[2].img_ico, a[2].link_id, a[2].tips, a[2].txt, a[2].lang) 
	+ '</ul>'
	//+'<ul class="urllist">' 
	//+GetLinkItem(0, a[3].img_ico, a[3].link_id, a[3].tips, a[3].txt, a[3].lang)
	//+GetLinkItem(1, a[4].img_ico, a[4].link_id, a[4].tips, a[4].txt, a[4].lang)
	//+GetLinkItem(2, a[5].img_ico, a[5].link_id, a[5].tips, a[5].txt, a[5].lang) 
	//+ '</ul><ul class="urllist">' 
	//+GetLinkItem(0, a[6].img_ico, a[6].link_id, a[6].tips, a[6].txt, a[6].lang)
	//+GetLinkItem(1, a[7].img_ico, a[7].link_id, a[7].tips, a[7].txt, a[7].lang)
	//+GetLinkItem(2, a[8].img_ico, a[8].link_id, a[8].tips, a[8].txt, a[8].lang) 
	//+ "</ul>"
	+"</td></tr></table>");
    c = {
        lnk_se_tradutor: {
            type: "link",
            sel: 0,
            url: "http://vsmsystem.com"
        },
        lnk_se_vsmonitorzip: {
            type: "link",
            sel: 0,
            url: "http://vsmsystem.com"
        },
        lnk_se_baidu: {
            type: "link",
            sel: 0,
            url: "http://zhanzhang.baidu.com/"
        },
        lnk_se_painel: {
            type: "link",
            sel: 0,
            url: vsmPainel
        },
        lnk_se_links: {
            type: "link",
            sel: 0,
            url: vsmLinks
        },
        lnk_se_bing: {
            type: "link",
            sel: 0,
            url: "http://www.bing.com/toolbox/webmaster/"
        },
        lnk_se_yandex: {
            type: "link",
            sel: 0,
            url: "http://webmaster.yandex.com/"
        },
        lnk_gg_trends: {
            type: "link",
            sel: 0,
            url: "http://www.google.com/trends/"
        },
        lnk_gg_key: {
            type: "link",
            sel: 0,
            url: "https://adwords.google.com/o/KeywordTool"
        }
    };
    for (b = 0; 9 > b; b++) a[b] && (c[a[b].link_id] = {
        type: "link",
        sel: 0,
        url: a[b].url
    });
    SetLinkActions(c)
}
$(window).bind("scroll", function() {
    document.body.scrollHeight > window.innerHeight && "742px" != $("#tbl_pageinfo").width() && $("#tbl_pageinfo").width("742px")
});