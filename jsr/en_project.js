/*
var g_strShowHistory = "1.0.7",
    g_strVersionMajor = "1",
    g_strVersionMini = "0.7",
*/

var g_strShowHistory = chrome.runtime.getManifest().version,
    g_strVersionMajor = chrome.runtime.getManifest().version.substr(0,1),
    g_strVersionMini = chrome.runtime.getManifest().version.substr(2,4),
    g_arrNew = {
        en: '<div class="pop_subject">'
		+'Você instalou a versão '+g_strShowHistory+' do VSMonitor. </div>  <div class="pop_items">   '
		+'O desenvolvimento desta ferramenta ainda é experimental, muita coisa ainda está sendo criada e corrigida. Caso precie de ajuda ou queira conhecer um pouco mais sobre os recursos clique no icone <img src="image/icon-sa-grey.png" class="icon_16"> na parte de baixo no canto direito desta página.<br><br><br>     '
		+'</div>  '
		+''
	},
	g_arrHistry = {
		//texto usado para updates
        en: '<div class="pop_subject">'
		+'Sua versão do VSMonitor atualizou para a versão '+g_strShowHistory+' </div>  <div class="pop_items">   '
		+'<hr>Caso identifique algum problema ou detalhe e queira informar, envie para <strong>Ana.Okahara@telefonica.com</strong> <br><br><br>     '
		+'</div>  '
		+'',
        "zh-cn": '<div class="pop_subject"><span class="b">' + MYLANG("History") + ': Open SEO Stats 9.41</span> (2016-05-25)</div>  <div class="pop_items">    <ul>      <li>\u4ece<b>\u7ad9\u70b9\u4fe1\u606f</b>\u4e2d\u79fb\u9664 <b>Delicious Likes</b> \u6307\u6807\u3002Delicious \u5df2\u7ecf\u505c\u6b62\u4e86\u67e5\u8be2 Delicious Likes \u7684\u516c\u7528 API\u3002</li>      <li>\u5c0f BUG \u4fee\u590d\u3002<br><br>      <a href="#" id="a_pop_history">' +
            MYLANG("MoreDetails") + ' &#187;</a><br><br>      Open SEO Stats (PageRank Status) \u4e00\u76f4\u5728\u4e0d\u65ad\u52aa\u529b\u5b8c\u5584\u3002\u5982\u679c\u60a8\u5728\u4f7f\u7528\u4e2d\u6709\u4efb\u4f55\u95ee\u9898\u6216\u5efa\u8bae\uff0c\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 pr@chromefans.org (\u53ef\u4f7f\u7528\u4e2d\u6587)\u3002<br><br>      </li>    </ul>  </div>  <div class="pop_items">  <strong>' + MYLANG("Follow_me") + '</strong>:    <ul>      <li><a href="#" id=a_pop_sns_facebook><img src="image/icon-facebook.png" class="icon_16" alt="Facebook"> Facebook</a> &nbsp;          <a href="#" id=a_pop_sns_gplusr><img src="image/icon-googleplus.png" class="icon_16" alt="Google Plus"> Google+</a> &nbsp;          <a href="#" id=a_pop_sns_twitter><img src="image/icon-twitter-h.png" class="icon_16" alt="Twitter"> Twitter</a>       </li>      <li><img src="image/icon-qq.png" class="icon_16" alt="QQ\u90e1\u53f7"> \u63d2\u4ef6\u5b98\u65b9 <strong>QQ \u8ba8\u8bba\u7fa4</strong>\uff1a<span class="r">295234</span> (\u9a8c\u8bc1\u8bf7\u6ce8\u660e"\u63d2\u4ef6\u7528\u6237")</li>    </ul>  </div>  <div class="pop_items">  <strong>' +
            MYLANG("Recommendation") + '</strong>:    <ul>      <li><img src="image/icon-server.png" class="icon_16"> <a href="#" id="a_pop_taobao" title="\u4e13\u4e1a\u5916\u8d38\u3001\u535a\u5ba2\u4e3b\u673a(\u5e26CPanel \u6700\u591a\u53ef\u7ed110\u57df\u540d)\uff0c\u5e74\u4ed8\uffe5108\u5143\u8d77"> \u4e13\u4e1a\u5916\u8d38\u3001\u535a\u5ba2\u4e3b\u673a(\u5e26CPanel\u652f\u6301\u4e2d\u82f1\u6587)\uff0c\u5e74\u4ed8\uffe5108\u5143\u8d77</a></li>    </ul><hr>    <div style="text-align:left">      <img src="image/icon-email16.png" class="icon_16"> <a href="mailto:pr@chromefans.org" title="' +
            MYLANG("Feedback") + ': pr@chromefans.org" id="a_feedback" target="_blank">' + MYLANG("Feedback") + ': pr@chromefans.org</a>      <div style="float:right;width:180px;text-align:right"><img src="image/icon-donate.png" class="icon_16"> <a href="#" id="a_pop_pp">' + MYLANG("DonateIt") + " &#187;</a></div>    </div>  </div>",
        "zh-tw": '<div class="pop_subject"><span class="b">' + MYLANG("History") + ': Open SEO Stats 9.41</span> (2016-05-25)</div>  <div class="pop_items">    <ul>      <li>\u5f9e<b>\u7db2\u7ad9\u8cc7\u8a0a</b>\u4e2d\u79fb\u9664 Delicious Likes \u6307\u6a19\u3002 Delicious \u5df2\u7d93\u505c\u6b62\u4e86\u67e5\u8a62 Delicious Likes \u7684\u516c\u7528 API\u3002</li>      <li>\u5c0f BUG \u4fee\u5fa9\u3002<br><br>      <a href="#" id="a_pop_history">' +
            MYLANG("MoreDetails") + ' &#187;</a><br><br>      Open SEO Stats (PageRank Status) \u4e00\u76f4\u5728\u4e0d\u65b7\u52aa\u529b\u5b8c\u5584\uff0c\u5982\u679c\u60a8\u5728\u4f7f\u7528\u4e2d\u6709\u4efb\u4f55\u5efa\u8b70\uff0c\u8acb\u767c\u9001\u90f5\u4ef6\u81f3pr@chromefans.org (\u53ef\u7528\u4e2d\u6587)\uff0c\u8b1d\u8b1d\uff01</li>    </ul>  </div>  <div class="pop_items">  <strong>' + MYLANG("Follow_me") + '</strong>:    <ul>      <li><a href="#" id=a_pop_sns_facebook><img src="image/icon-facebook.png" class="icon_16" alt="Facebook"> Facebook</a> &nbsp;          <a href="#" id=a_pop_sns_gplusr><img src="image/icon-googleplus.png" class="icon_16" alt="Google Plus"> Google+</a> &nbsp;          <a href="#" id=a_pop_sns_twitter><img src="image/icon-twitter-h.png" class="icon_16" alt="Twitter"> Twitter</a>       </li>    </ul>  </div>  <div class="pop_items">  <strong>' +
            MYLANG("Recommendation") + '</strong>:    <ul>      <li><img src="image/icon-bluehost.png" class="icon_16"> <a href="#" id="a_pop_blue_zh_tw" title="\u7f8e\u570b Bluehost \u7121\u9650\u4f3a\u670d\u5668\u6bcf\u6708$4.95\uff0c\u7121\u9644\u52a0\u8cbb\u7528\uff0c\u53ef\u96a8\u6642\u7533\u8acb\u9000\u6b3e">\u7f8e\u570b Bluehost <span class="r">\u7121\u9650\u4f3a\u670d\u5668\u6bcf\u6708$4.95</span>\uff0c\u7121\u4efb\u4f55\u5176\u4ed6\u9644\u52a0\u8cbb\u7528</a></li>    </ul><hr>    <div style="text-align:left">      <img src="image/icon-email16.png" class="icon_16"> <a href="mailto:pr@chromefans.org" title="' +
            MYLANG("Feedback") + ': pr@chromefans.org" id="a_feedback" target="_blank">' + MYLANG("Feedback") + ': pr@chromefans.org</a>      <div style="float:right;width:180px;text-align:right"><img src="image/icon-donate.png" class="icon_16"> <a href="#" id="a_pop_pp">' + MYLANG("DonateIt") + " &#187;</a></div>    </div>  </div>"
    },
    g_arrGeoLang = {
        en: 1,
        "zh-cn": 1,
        "zh-tw": 1
    },
    g_arrSites = {
        rank_alexa: {
            tab: "seostats",
            text_id: "AlexaRank",
            tip_id: "",
            OnStart: function(a) {
                return OnAlexRankStart(a)
            },
            OnEnd: 0
        },
        rank_compete: {
            tab: "seostats",
            text_id: "site_compete",
            tip_id: "",
            OnStart: function(a) {
                return OnCompeteRankStart(a)
            },
            OnEnd: 0
        },
        idx_ask: {
            tab: "seostats",
            text_id: "site_ask",
            tip_id: "",
            OnStart: function(a) {
                return OnAskIdxStart(a)
            },
            OnEnd: 0
        },
        idx_baidu: {
            tab: "seostats",
            text_id: "site_baidu",
            tip_id: "SEChinaL",
            OnStart: function(a) {
                return OnBaiduIdxStart(a)
            },
            OnEnd: function(a, b) {
                return OnBaiduIdxEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnBaiduIdxOutput(a, b)
            }
        },
        idx_bing: {
            tab: "seostats",
            text_id: "site_bing",
            tip_id: "",
            OnStart: function(a) {
                return OnBingIdxStart(a)
            },
            OnEnd: function(a, b) {
                return OnBingIdxEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnBingIdxOutput(a, b)
            }
        },
        idx_goo: {
            tab: "seostats",
            text_id: "site_goo",
            tip_id: "SEJapan",
            OnStart: function(a) {
                return OnGooIdxStart(a)
            },
            OnEnd: function(a, b) {
                return OnGooIdxEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnGooIdxOutput(a, b)
            }
        },
        idx_google: {
            tab: "seostats",
            text_id: "site_google",
            tip_id: "SEWorld",
            OnStart: function(a) {
                return OnGGIdxStart(a)
            },
            OnEnd: function(a, b) {
                return OnGGIdxEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnGGIdxOutput(a, b)
            }
        },
        idx_sogou: {
            tab: "seostats",
            text_id: "site_sogou",
            tip_id: "SEChina",
            OnStart: function(a) {
                return OnSogouIdxStart(a)
            },
            OnEnd: function(a, b) {
                return OnSogouIdxEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnSogouIdxOutput(a, b)
            }
        },
        idx_yahoo: {
            tab: "seostats",
            text_id: "site_yahoo",
            tip_id: "",
            OnStart: function(a) {
                return OnYahooIdxStart(a)
            },
            OnEnd: 0
        },
        idx_yandex: {
            tab: "seostats",
            text_id: "site_yandex",
            tip_id: "SERussinL",
            OnStart: function(a) {
                return OnYandexIdxStart(a)
            },
            OnEnd: function(a, b) {
                return OnYandexIdxEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnYandexIdxOutput(a, b)
            }
        },
        idx_360: {
            tab: "seostats",
            text_id: "site_360",
            tip_id: "SEChina",
            OnStart: function(a) {
                return On360IdxStart(a)
            },
            OnEnd: function(a, b) {
                return On360IdxEnd(a, b)
            },
            OnOutput: function(a, b) {
                On360IdxOutput(a, b)
            }
        },
        bl_google_w: {
            tab: "seostats",
            text_id: "site_google",
            tip_id: "SEWorld",
            OnStart: function(a) {
                return OnGGLinkStart(a)
            },
            OnEnd: function(a, b) {
                return OnGGLinkEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnGGLinkOutput(a, b)
            }
        },
        bl_ose: {
            tab: "seostats",
            text_id: "site_ose",
            tip_id: "",
            OnStart: function(a) {
                return OnOSELinkStart(a)
            },
            OnEnd: 0
        },
        bl_sogou: {
            tab: "seostats",
            text_id: "site_sogou",
            tip_id: "SEChina",
            OnStart: function(a) {
                return OnSogouLinkStart(a)
            },
            OnEnd: function(a, b) {
                return OnSogouLinkEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnSogouLinkOutput(a, b)
            }
        },
        ch_archive: {
            tab: "seostats",
            text_id: "site_archive",
            tip_id: "",
            OnStart: function(a) {
                return OnArchiveStart(a)
            },
            OnEnd: function(a, b) {
                return OnArchiveEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnArchiveOutput(a, b)
            }
        },
        ch_google: {
            tab: "seostats",
            text_id: "site_google",
            tip_id: "SEWorld",
            OnStart: function(a) {
                return OnGGCacheStart(a)
            },
            OnEnd: function(a, b) {
                return OnGGCacheEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnGGCacheOutput(a, b)
            }
        },
        geoip_ip2: {
            tab: "seostats",
            text_id: "IP",
            tip_id: "",
            OnStart: function(a) {
                return OnGeoip2Start(a)
            },
            OnEnd: 0
        },
        geoip_city2: {
            tab: "seostats",
            text_id: "City",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        geoip_country2: {
            tab: "seostats",
            text_id: "Country",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        geoip_whois2: {
            tab: "seostats",
            text_id: "IP WHOIS",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        tf_alexa: {
            tab: "traffic",
            text_id: "AlexaRank",
            tip_id: "",
            OnStart: function(a) {
                return OnAlexStart(a)
            },
            OnEnd: function(a, b) {
                return OnAlexEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnAlexaOutput(a, b)
            }
        },
        tf_alexa_cnt: {
            tab: "traffic",
            text_id: "AlexaRankCnt",
            tip_id: "",
            OnStart: function(a) {
                return OnAlexCntStart(a)
            },
            OnEnd: 0
        },
        tf_compete: {
            tab: "traffic",
            text_id: "site_compete",
            tip_id: "",
            OnStart: function(a) {
                return OnCompeteStart(a)
            },
            OnEnd: function(a, b) {
                return OnCompeteEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnCompeteOutput(a, b)
            }
        },
        tf_quantcast: {
            tab: "traffic",
            text_id: "site_quantcast",
            tip_id: "",
            OnStart: function(a) {
                return OnQuantcastStart(a)
            },
            OnEnd: function(a, b) {
                return OnQuantcastEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnQuancastOutput(a, b)
            }
        },
        domain_whois: {
            tab: "siteinfo",
            text_id: "Whois",
            tip_id: "",
            OnStart: function(a) {
                return OnWhoisStart(a)
            },
            OnEnd: 0
        },
        domain_dns: {
            tab: "siteinfo",
            text_id: "DNS1",
            tip_id: "",
            OnStart: function(a) {
                return OnDnsIPStart(a)
            },
            OnEnd: function(a, b) {
                return OnDnsIPEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnDnsIpOutput(a, b)
            }
        },
        domain_dns2: {
            tab: "siteinfo",
            text_id: "DNS2",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        geoip_ip: {
            tab: "siteinfo",
            text_id: "IP",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        geoip_city: {
            tab: "siteinfo",
            text_id: "City",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        geoip_country: {
            tab: "siteinfo",
            text_id: "Country",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        geoip_whois: {
            tab: "siteinfo",
            text_id: "IP WHOIS",
            tip_id: "",
            OnStart: 0,
            OnEnd: 0
        },
        sec_norton: {
            tab: "siteinfo",
            text_id: "SecNorton",
            tip_id: "",
            OnStart: function(a) {
                return OnNortonStart(a)
            },
            OnEnd: function(a, b) {
                return OnNortonEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnNortonOutput(a, b)
            }
        },
        sec_siteadv: {
            tab: "siteinfo",
            text_id: "SecSiteadv",
            tip_id: "",
            OnStart: function(a) {
                return OnSiteadvStart(a)
            },
            OnEnd: function(a, b) {
                return OnSiteadvEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnSiteadvOutput(a, b)
            }
        },
        sec_wot: {
            tab: "siteinfo",
            text_id: "SecWot",
            tip_id: "",
            OnStart: function(a) {
                return OnWotStart(a)
            },
            OnEnd: function(a, b) {
                return OnWotEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnWotOutput(a, b)
            }
        },
        on_robots: {
            tab: "siteinfo",
            text_id: "robots.txt",
            tip_id: "",
            OnStart: function(a) {
                return OnRobotsStart(a)
            },
            OnEnd: function(a, b) {
                return OnRobotsEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnRobotsOutput(a, b)
            }
        },
        on_sitemap: {
            tab: "siteinfo",
            text_id: "sitemap.xml",
            tip_id: "",
            OnStart: function(a) {
                return OnSitemapStart(a)
            },
            OnEnd: function(a, b) {
                return OnSitemapEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnSitemapOutput(a, b)
            }
        },
        on_builtwith: {
            tab: "siteinfo",
            text_id: "site_builtwith",
            tip_id: "",
            OnStart: function(a) {
                return OnBuiltWithStart(a)
            },
            OnEnd: 0
        },
        on_source: {
            tab: "siteinfo",
            text_id: "Sourcecode",
            tip_id: "",
            OnStart: function(a) {
                return OnSourcecode(a)
            },
            OnEnd: 0
        },
        sns_facebook: {
            tab: "siteinfo",
            text_id: "site_facebook",
            tip_id: "",
            OnStart: function(a) {
                return OnFacebookStart(a)
            },
            OnEnd: function(a,
                b) {
                return OnFacebookEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnFacebookOutput(a, b)
            }
        },
        sns_ggplus: {
            tab: "siteinfo",
            text_id: "site_ggplus",
            tip_id: "",
            OnStart: function(a) {
                return OnGGPlusStart(a)
            },
            OnEnd: function(a, b) {
                return OnGGPlusEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnGGPlusOutput(a, b)
            }
        },
        sns_stumbles: {
            tab: "siteinfo",
            text_id: "site_stumbles",
            tip_id: "",
            OnStart: function(a) {
                return OnStumblesStart(a)
            },
            OnEnd: function(a, b) {
                return OnStumblesEnd(a, b)
            },
            OnOutput: function(a, b) {
                OnStumbesOutput(a, b)
            }
        }
    };

function OnGGPRStart(a) {
    OutputLink(a, "appendurl", 0, MYLANG("GooglePR"), MYLANG("CheckOnline"), "loading.gif", "icon_16", "http://pagerank.chromefans.org/pagerank-button/?ref=ext_pr&f_url=");
    return "http://toolbarqueries.google.com/tbr?client=navclient-auto&features=Rank&ch=6" + makehash(sessionStorage.url) + "&q=info:" + sessionStorage.url
}

function OnGGPREnd(a, b) {
    var c = "?";
    if ("" != b && (c = b.substr(9, 2).replace(/\s$/, ""), "" == c || isNaN(1 * c))) c = "?";
    sessionStorage.remote_rank_ggpr = c;
    OnGGPROutput("rank_ggpr", 0)
}

function OnGGPROutput(a, b) {
    updatePR(sessionStorage[b ? "cache_" + a : "remote_" + a], sessionStorage.url, 0, !1)
}

function updatePR(a, b, c, d) {
    d ? (b = "URL: " + b + "\r\n" + MYLANG("PR") + ": " + ("?" == a ? MYLANG("Unranked") : a) + "\r\n" + MYLANG("MoreInfo"), a = "?" == a ? "image/prx.png" : "image/pr" + parseInt(a) + ".png", chrome.browserAction.setTitle({
        title: b,
        tabId: c
    }), chrome.browserAction.setIcon({
        path: a,
        tabId: c
    })) : (c = "?" == a ? "x" : parseInt(a), d = "?" == a ? "?" : a, encodeURIComponent(sessionStorage.url), b = MYLANG("PR") + ": " + ("?" == a ? MYLANG("Unranked") : a + "/10") + "\r\n" + MYLANG("ClickPR"), UpdateEndResult("rank_ggpr", '<img src="image/prp' + c + '.png" class="middle" alt=""> ' +
        d, b))
}

function showPR(a, b, c) {
    if (void 0 != a)
        if (null != a.match(/^(http|https):\/\/([\w.]+)(:\d+)?/)) {
            var d = getPR(a);
            if ("" == d || isNaN(1 * d)) d = "?";
            updatePR(d, a, b, c)
        } else updatePR("?", a, b, c)
}

function getPR(a) {
    var a = "http://toolbarqueries.google.com/tbr?client=navclient-auto&features=Rank&ch=6" + makehash(a) + "&q=info:" + a,
        b = new XMLHttpRequest;
    b.open("GET", a, !1);
    b.send(null);
    return b.responseText.substr(9, 2).replace(/\s$/, "")
}

function ajax_getPR(a) {
    url = "http://toolbarqueries.google.com/tbr?client=navclient-auto&features=Rank&ch=6" + makehash(a) + "&q=info:" + a;
    var a = url.match(/^(http|https):\/\/([\w.]+)(:\d+)?/),
        b = new XMLHttpRequest,
        c = window.setTimeout(function() {
            b.abort()
        }, 2E4);
    try {
        b.onreadystatechange = function() {
            if (4 == b.readyState) {
                window.clearTimeout(c);
                var d = b.responseText.substr(9, 2).replace(/\s$/, "");
                if ("" == d || isNaN(1 * d)) d = "?";
                updatePR(d, a, 0, !1)
            }
        }, b.onerror = function() {
            window.clearTimeout(c);
            updatePR("?", a, 0, !1)
        }, b.open("GET",
            url, !0), b.send(null)
    } catch (d) {
        window.clearTimeout(c), updatePR("?", a, 0, !1)
    }
}

function showAlexaRank(a) {
    t_strText = -1 == a ? "Unranked" : FormatNum(a);
    t_strPRURL = "http://www.alexa.com/siteinfo/" + sessionStorage.host;
    t_strLink = '<a href="' + t_strPRURL + '" target=_blank title="' + chrome.i18n.getMessage("AlexaRank") + '">';
    document.getElementById("tf_alexa").innerHTML = t_strLink + t_strText + "</a>"
}

function getAlexaB(a) {
    var b = /<POPULARITY URL="\s*(.+?)" TEXT="\s*(.+?)"/i,
        a = "http://data.alexa.com/data/TCaX/0+qO000fV?cli=10&dat=snba&ver=7.0&cdt=alx_vw=20&wid=31472&act=00000000000&ss=1024x768&bw=639&t=0&ttl=4907&vis=1&rq=23&url=" + a;
    if ("not" != a & void 0 != a && a) {
        var c = new XMLHttpRequest,
            d = window.setTimeout(function() {
                c.abort()
            }, 2E4);
        try {
            c.onreadystatechange = function() {
                    if (4 == c.readyState) {
                        window.clearTimeout(d);
                        retHtml = c.responseText;
                        var a = retHtml.match(b);
                        null !== a && showAlexaRank(a[2])
                    }
                }, c.onerror = function() {
                    window.clearTimeout(d)
                },
                c.open("GET", a, !0), c.send(null)
        } catch (e) {
            window.clearTimeout(d)
        }
    }
}
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];

function base64encode(a) {
    var b, c, d, e, g, f;
    d = a.length;
    c = 0;
    for (b = ""; c < d;) {
        e = a.charCodeAt(c++) & 255;
        if (c == d) {
            b += base64EncodeChars.charAt(e >> 2);
            b += base64EncodeChars.charAt((e & 3) << 4);
            b += "==";
            break
        }
        g = a.charCodeAt(c++);
        if (c == d) {
            b += base64EncodeChars.charAt(e >> 2);
            b += base64EncodeChars.charAt((e & 3) << 4 | (g & 240) >> 4);
            b += base64EncodeChars.charAt((g & 15) << 2);
            b += "=";
            break
        }
        f = a.charCodeAt(c++);
        b += base64EncodeChars.charAt(e >> 2);
        b += base64EncodeChars.charAt((e & 3) << 4 | (g & 240) >> 4);
        b += base64EncodeChars.charAt((g & 15) << 2 | (f & 192) >>
            6);
        b += base64EncodeChars.charAt(f & 63)
    }
    return b
}

function makehash(a) {
    var b = function(a, b) {
            var c = parseInt(8E7, 16);
            c & a ? (a = a >> 1 & ~c, a |= 1073741824, a >>= b - 1) : a >>= b;
            return a
        },
        c = function(a, c, d) {
            a = a - c - d;
            a ^= b(d, 13);
            c = c - d - a;
            c ^= a << 8;
            d -= a;
            d -= c;
            d ^= b(c, 13);
            a -= c;
            a -= d;
            a ^= b(d, 12);
            c -= d;
            c -= a;
            c ^= a << 16;
            d -= a;
            d -= c;
            d ^= b(c, 5);
            a -= c;
            a -= d;
            a ^= b(d, 3);
            c -= d;
            c -= a;
            c ^= a << 10;
            d -= a;
            d -= c;
            d ^= b(c, 15);
            return [a, c, d]
        },
        d = "info:" + a,
        a = [];
    for (i = 0; i < d.length; i++) a[i] = d[i].charCodeAt(0);
    length = a.length;
    for (var e = d = 2654435769, g = 3862272608, f = 0, j = length, h = []; 12 <= j;) d += a[f + 0] + (a[f + 1] << 8) + (a[f + 2] << 16) +
        (a[f + 3] << 24), e += a[f + 4] + (a[f + 5] << 8) + (a[f + 6] << 16) + (a[f + 7] << 24), g += a[f + 8] + (a[f + 9] << 8) + (a[f + 10] << 16) + (a[f + 11] << 24), h = c(d, e, g), d = h[0], e = h[1], g = h[2], f += 12, j -= 12;
    g += length;
    switch (j) {
        case 11:
            g += a[f + 10] << 24;
        case 10:
            g += a[f + 9] << 16;
        case 9:
            g += a[f + 8] << 8;
        case 8:
            e += a[f + 7] << 24;
        case 7:
            e += a[f + 6] << 16;
        case 6:
            e += a[f + 5] << 8;
        case 5:
            e += a[f + 4];
        case 4:
            d += a[f + 3] << 24;
        case 3:
            d += a[f + 2] << 16;
        case 2:
            d += a[f + 1] << 8;
        case 1:
            d += a[f]
    }
    h = c(d, e, g);
    return 0 > h[2] ? 4294967296 + h[2] : h[2]
};

function OnAlexRankStart(a) {
    OutputLink(a, "link", 0, MYLANG("AlexaRank"), MYLANG("ClickMore"), "loading.gif", "icon_16", "http://www.alexa.com/siteinfo/" + sessionStorage.host);
    return ""
}

function OnAlexCntStart() {
    return ""
}

function OnAlexStart(a) {
    OutputLink(a, "link", 0, MYLANG("AlexaRank"), MYLANG("ClickMore"), "loading.gif", "icon_16", "http://www.alexa.com/siteinfo/" + sessionStorage.host);
    return "http://data.alexa.com/data/TCaX/0+qO000fV?cli=10&dat=snba&ver=7.0&cdt=alx_vw=20&wid=31472&act=00000000000&ss=1024x768&bw=639&t=0&ttl=4907&vis=1&rq=23&url=" + sessionStorage.host
}

function OnAlexEnd(a, b) {
    var c = b.match(/<POPULARITY URL="\s*(.+?)" TEXT="\s*(.+?)"/i),
        c = c ? FixVal(c[2], 0, 1) : -1,
        d = b.match(/<COUNTRY CODE="(.*)" NAME="(.*)" RANK="(.*)"/i),
        e = d ? FixVal(d[3], 0, 1) : -1;
    sessionStorage.remote_tf_alexa_cnt_code = d ? d[1] : "";
    sessionStorage.remote_tf_alexa_cnt_name = d ? d[2] : "";
    sessionStorage.remote_tf_alexa_cnt = "" == b ? "" : e;
    sessionStorage.remote_tf_alexa = "" == b ? "" : c;
    OnAlexaOutput(a, 0)
}

function OnAlexaOutput(a, b) {
    var c = b ? "cache_" : "remote_",
        d = sessionStorage[c + "tf_alexa_cnt"],
        e = -1 == sessionStorage[c + "tf_alexa"] ? MYLANG("Unranked") : sessionStorage[c + "tf_alexa"],
        g = -1 == d ? MYLANG("Unranked") : d,
        f = -1 == d || "" == d ? MYLANG("AlexaRankCnt") : MYLANG("AlexaRankCnt2").replace("%COUNTRY-NAME%", sessionStorage[c + "tf_alexa_cnt_name"]),
        c = -1 == d || "" == d ? "" : ' <img src="image/flags/' + sessionStorage[c + "tf_alexa_cnt_code"] + '.png" ALT="' + sessionStorage[c + "tf_alexa_cnt_name"] + '" class="icon_flag">',
        d = f + ": " + g + "\r\n" +
        MYLANG("ClickMore");
    OutputLink("tf_alexa_cnt", "link", 0, f + c, MYLANG("ClickMore"), "loading.gif", "icon_16", "http://www.alexa.com/siteinfo/" + sessionStorage.host);
    UpdateEndResult("tf_alexa_cnt", g, d);
    UpdateEndResult(a, e, MYLANG("AlexaRank") + ": " + e + "\r\n" + MYLANG("ClickMore"))
}

function OnWhoisStart(a) {
    OutputLink(a, "appenddomain", 0, MYLANG("Whois"), MYLANG("Whois") + " " + sessionStorage.domain + "\r\n" + MYLANG("ClickMore"), "icon-open.gif", "icon_16", "http://whois.chromefans.org/");
    return ""
}

function OnDnsIPStart() {
    $("#domain_dns").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#domain_dns2").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#geoip_ip").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#geoip_city").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#geoip_country").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#geoip_whois").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    return "http://api.geoipview.com/ext-pr.php?pr817&ref=ext_pr&lang=" +
        MYLANG("id") + "&q=" + sessionStorage.domain + "&host=" + sessionStorage.host
}

function OnGeoip2Start() {
    $("#geoip_ip2").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#geoip_city2").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#geoip_country2").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    $("#geoip_whois2").html('<img src="image/loading.gif" class="icon_16" ALT="">');
    return ""
}

function OnDnsIPEnd(a, b) {
    var c = 0;
    "" != b && (c = JSON.parse(b));
    c ? ("" == c.dns0 ? sessionStorage.remote_domain_dns = sessionStorage.remote_domain_dns2 = "" : (sessionStorage.remote_domain_dns = void 0 == c.dns0 ? "" : c.dns0, sessionStorage.remote_domain_dns2 = void 0 == c.dns1 ? "" : c.dns1), "" == c.ip ? (sessionStorage.remote_geoip_ip = sessionStorage.remote_geoip_city = sessionStorage.remote_geoip_country = sessionStorage.remote_geoip_code = "", sessionStorage.remote_geoip_subdomain = "www") : (sessionStorage.remote_geoip_city = c.city, sessionStorage.remote_geoip_country =
        c.country, sessionStorage.remote_geoip_subdomain = "en" == c.lang ? "www" : c.lang, sessionStorage.remote_geoip_code = c.code.toLowerCase(), sessionStorage.remote_geoip_ip = c.ip), OnDnsIpOutput(a, 0)) : (c = MYLANG("NA"), $("#domain_dns").html(c), $("#domain_dns2").html(c), $("#geoip_ip").html(c), $("#geoip_city").html(c), $("#geoip_country").html(c), $("#geoip_whois").html(c), sessionStorage.remote_domain_dns = sessionStorage.remote_domain_dns2 = sessionStorage.remote_geoip_ip = sessionStorage.remote_geoip_city = sessionStorage.remote_geoip_country =
        sessionStorage.remote_geoip_code = "")
}

function OnDnsIpOutput(a, b) {
    var c = MYLANG("ClickMore"),
        d = MYLANG("NA"),
        e = b ? "cache_" : "remote_",
        g = MYLANG("id"),
        g = void 0 == g_arrGeoLang[g] ? "en" : g;
    if ("" == sessionStorage[e + "domain_dns"]) $("#domain_dns").html(d), $("#domain_dns2").html(d);
    else {
        var f = "" == sessionStorage[e + "domain_dns2"] ? "DNS 1: " + sessionStorage[e + "domain_dns"] : "DNS 1: " + sessionStorage[e + "domain_dns"] + "\r\nDNS 2: " + sessionStorage[e + "domain_dns2"];
        OutputLink("domain_dns", "link", 0, MYLANG("DNS1"), c, "loading.gif", "icon_16", "https://ip.openadmintools.com/" +
            g + "/" + sessionStorage[e + "domain_dns"] + "/?ref=oat_chrome_dns");
        OutputLink("domain_dns2", "link", 0, MYLANG("DNS2"), c, "loading.gif", "icon_16", "https://ip.openadmintools.com/" + g + "/" + sessionStorage[e + "domain_dns2"] + "/?ref=oat_chrome_dns");
        UpdateEndResult("domain_dns", sessionStorage[e + "domain_dns"], f);
        UpdateEndResult("domain_dns2", sessionStorage[e + "domain_dns2"], f)
    }
    "" == sessionStorage[e + "geoip_ip"] ? ($("#geoip_ip").html(d), $("#geoip_city").html(d), $("#geoip_country").html(d), $("#geoip_whois").html(d)) : (d = "https://ip.openadmintools.com/" +
        g + "/" + sessionStorage[e + "geoip_ip"] + "/?ref=oat_chrome_site", g = "http://whois.chromefans.org/" + sessionStorage[e + "geoip_ip"], OutputLink("geoip_ip", "link", 0, MYLANG("ip"), "", "loading.gif", "icon_16", d), OutputLink("geoip_city", "link", 0, MYLANG("City"), "", "loading.gif", "icon_16", d), OutputLink("geoip_country", "link", 0, MYLANG("Country"), "", "loading.gif", "icon_16", d), OutputLink("geoip_whois", "link", 0, MYLANG("IP WHOIS"), c, "icon-open.gif", "icon_16", g), UpdateEndResult("geoip_ip", sessionStorage[e + "geoip_ip"], MYLANG("IP") +
            ": " + sessionStorage[e + "geoip_ip"] + "\r\n" + c), UpdateEndResult("geoip_city", sessionStorage[e + "geoip_city"], MYLANG("IP") + ": " + sessionStorage[e + "geoip_ip"] + "\r\n" + MYLANG("City") + ": " + sessionStorage[e + "geoip_city"] + "\r\n" + c), UpdateEndResult("geoip_country", sessionStorage[e + "geoip_country"] + ' <img src="image/flags/' + sessionStorage[e + "geoip_code"] + '.png" class="icon_flag">', MYLANG("IP") + ": " + sessionStorage[e + "geoip_ip"] + "\r\n" + MYLANG("Country") + ": " + sessionStorage[e + "geoip_country"] + "\r\n" + c))
}

function OnCompeteStart(a) {
    var b = "http://siteanalytics.compete.com/" + sessionStorage.host + "/";
    OutputLink(a, "link", 0, MYLANG("site_compete"), MYLANG("ClickMore"), "loading.gif", "icon_16", b);
    return b
}

function OnCompeteEnd(a, b) {
    var c = b.match(/ajax_keys : {"cr": "([^"]+)", "st": "([^"]+)"/i);
    if (null == c) sessionStorage["remote_" + a] = "" == b ? "" : -1, OnCompeteOutput(a, 0);
    else {
        var d = "https://siteanalytics.compete.com/data/trend/" + sessionStorage.host + "/" + c[2] + "/?check_limit=1";
        g_arrSites[a].OnStart2 = function() {
            return d
        };
        g_arrSites[a].OnEnd2 = function(a, b) {
            OnCompeteEnd2(a, b)
        };
        AjaxUpdate(a, 1)
    }
}

function OnCompeteEnd2(a, b) {
    var c = "";
    "" != b && (c = b.match(/"rank": ([^}]+)}], "site": "([^"]+)"/i), c = null == c ? -1 : "null" == c[1] ? -1 : c[1]);
    sessionStorage["remote_" + a] = c;
    OnCompeteOutput(a, 0)
}

function OnCompeteOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        c = -1 == sessionStorage[c] ? MYLANG("Unranked") : FixVal(sessionStorage[c], 0, 1);
    UpdateEndResult(a, c, MYLANG("site_compete") + ": " + c + "\r\n" + MYLANG("ClickMore"))
}

function OnCompeteRankStart(a) {
    OutputLink(a, "link", 0, MYLANG("site_compete"), MYLANG("ClickMore"), "loading.gif", "icon_16", "http://siteanalytics.compete.com/" + sessionStorage.host + "/");
    return ""
}

function OnQuantcastStart(a) {
    var b = "http://www.quantcast.com/" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_quantcast"), MYLANG("ClickMore"), "loading.gif", "icon_16", b);
    return b
}

function OnQuantcastEnd(a, b) {
    var c = b.match(/jump-to=([0-9]+)">/i),
        d = -1,
        d = c ? c[1] : "" == b ? "" : -1;
    sessionStorage["remote_" + a] = d;
    OnQuancastOutput(a, 0)
}

function OnQuancastOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        c = -1 == sessionStorage[c] ? MYLANG("Unranked") : FixVal(sessionStorage[c], 0, 1);
    UpdateEndResult(a, c, MYLANG("site_quantcast") + ": " + c + "\r\n" + MYLANG("ClickMore"))
}

function OnRobotsStart(a) {
    var b = "http://" + sessionStorage.host + "/robots.txt";
    OutputLink(a, "link", 0, "robots.txt", b, "loading.gif", "icon_16", b);
    return b
}

function OnRobotsEnd(a, b) {
    sessionStorage["remote_" + a] = "" != b ? "Y" : "N";
    OnRobotsOutput(a, 0)
}

function OnRobotsOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        d = MYLANG("Y" == sessionStorage[c] ? "IsAvailable" : "NotFound").replace("%FILE%", "robots.txt");
    UpdateEndResult(a, '<img src="image/' + ("Y" == sessionStorage[c] ? "icon-yes.png" : "icon-no.png") + '" class="icon_16" ALT="">', d)
}

function OnSitemapStart(a) {
    var b = "http://" + sessionStorage.host + "/sitemap.xml";
    OutputLink(a, "link", 0, "sitemap.xml", b, "loading.gif", "icon_16", b);
    return b
}

function OnSitemapEnd(a, b) {
    sessionStorage["remote_" + a] = "" != b ? "Y" : "N";
    OnSitemapOutput(a, 0)
}

function OnSitemapOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        d = MYLANG("Y" == sessionStorage[c] ? "IsAvailable" : "NotFound").replace("%FILE%", "sitemap.xml");
    UpdateEndResult(a, '<img src="image/' + ("Y" == sessionStorage[c] ? "icon-yes.png" : "icon-no.png") + '" class="icon_16" ALT="">', d)
}

function OnBuiltWithStart(a) {
    var b = "http://builtwith.com/" + sessionStorage.host,
        c = MYLANG("ClickMore");
    OutputLink(a, "link", 0, MYLANG("site_builtwith"), c, "icon-open.gif", "icon_16", b);
    return ""
}

function OnSourcecode(a) {
    var b = "view-source:" + sessionStorage.url;
    OutputLink(a, "link", 0, MYLANG("Sourcecode"), b, "icon-open.gif", "icon_16", b);
    return ""
}

function OnFacebookStart(a) {
    $("#" + a).html('<img src="image/loading.gif" class="icon_16" ALT="">');
    return "http://graph.facebook.com/?ids=" + sessionStorage.url
}

function OnFacebookEnd(a, b) {
    var c = "";
    if ("" != b) {
        var d = sessionStorage.url,
            e = JSON.parse(b);
        e.hasOwnProperty(d) && (c = 0);
        e.hasOwnProperty(d) && e[d].hasOwnProperty("likes") ? c = e[d].likes : e.hasOwnProperty(d) && e[d].hasOwnProperty("shares") && (c = e[d].shares)
    }
    sessionStorage["remote_" + a] = "" == b ? "" : c;
    OnFacebookOutput(a, 0)
}

function OnFacebookOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        c = "" == sessionStorage[c] ? MYLANG("NA") : FixVal(sessionStorage[c], 0, 1);
    $("#" + a).html(c);
    $("#" + a).attr("title", MYLANG("site_facebook") + ": " + c)
}

function OnGGPlusStart(a) {
    var b = "http://googleplussearch.chromefans.org/?ref=lnk_pagerank&q=" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_ggplus"), MYLANG("GplusPosts").replace("%DOMAIN%", sessionStorage.domain), "loading.gif", "icon_16", b);
    return "https://plusone.google.com/u/0/_/%2B1/fastbutton?count=true&url=" + sessionStorage.url
}

function OnGGPlusEnd(a, b) {
    var c = b.match(/{c: (.*) ,/i);
    sessionStorage["remote_" + a] = "" == b ? "" : c ? FixVal(c[1], 0, 1) : 0;
    OnGGPlusOutput(a, 0)
}

function OnGGPlusOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        c = "" == sessionStorage[c] ? MYLANG("NA") : sessionStorage[c];
    UpdateEndResult(a, c, MYLANG("site_ggplus") + ": " + c + "\r\n" + MYLANG("GplusPosts"))
}

function OnTwitterOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        c = "" == sessionStorage[c] ? MYLANG("NA") : sessionStorage[c];
    $("#" + a).html(FormatNum(c));
    $("#" + a).attr("title", MYLANG("site_twitter") + ": " + c)
}

function OnStumblesStart(a) {
    $("#" + a).html('<img src="image/loading.gif" class="icon_16" ALT="">');
    return "http://www.stumbleupon.com/services/1.01/badge.getinfo?url=" + escape(sessionStorage.url)
}

function OnStumblesEnd(a, b) {
    var c = JSON.parse(b);
    sessionStorage["remote_" + a] = "" != b && c && c.success ? c.result.in_index ? c.result.views : 0 : "";
    OnStumbesOutput(a, 0)
}

function OnStumbesOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        c = "" == sessionStorage[c] ? MYLANG("NA") : FormatNum(sessionStorage[c]);
    $("#" + a).html(c);
    $("#" + a).attr("title", MYLANG("site_stumbles") + ": " + c)
}

function OnDeliciousStart(a) {
    $("#" + a).html('<img src="image/loading.gif" class="icon_16" ALT="">');
    return "http://feeds.delicious.com/v2/json/urlinfo/data?url=" + escape(sessionStorage.url)
}

function OnDeliciousEnd(a, b) {
    var c = b.match(/"total_posts": (.*), "top_tags"/i);
    sessionStorage["remote_" + a] = "" == b ? "" : c ? FixVal(c[1], 0, 1) : 0;
    OnDeliciousOutput(a, 0)
}

function OnDeliciousOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        c = "" == sessionStorage[c] ? MYLANG("NA") : sessionStorage[c];
    $("#" + a).html(c);
    $("#" + a).attr("title", MYLANG("site_delicious") + ": " + c)
}

function OnArchiveStart(a) {
    var b = "http://wayback.archive.org/web/*/" + sessionStorage.url;
    OutputLink(a, "link", 0, MYLANG("site_archive"), MYLANG("ClickMore"), "loading.gif", "icon_16", b);
    return "http://wayback.archive.org/web/*/" + sessionStorage.url
}

function OnArchiveEnd(a, b) {
    var c = b.match(/Saved <strong>([^<]+)<\/strong>([^<]+)<a href="([^"]+)">([^<]+)<\/a>/i);
    sessionStorage["remote_" + a] = c ? FixVal(StripTags(c[4]), 30, 0) : "";
    OnArchiveOutput(a, 0)
}

function OnArchiveOutput(a, b) {
    UpdateEndResult(a, sessionStorage[b ? "cache_" + a : "remote_" + a], MYLANG("CacheFirst") + "\r\n" + MYLANG("ClickMore"))
}

function OnGGCacheStart(a) {
    var b = "http://webcache.googleusercontent.com/search?cd=1&hl=en&ct=clnk&gl=us&q=cache:" + escape(sessionStorage.url);
    OutputLink(a, "link", 0, MYLANG("site_google"), MYLANG("ClickMore"), "loading.gif", "icon_16", b);
    return b
}

function OnGGCacheEnd(a, b) {
    var c = b.match(/it appeared on (.*) GMT/i);
    sessionStorage["remote_" + a] = c ? FixVal(c[1], 30, 0) : "";
    OnGGCacheOutput(a, 0)
}

function OnGGCacheOutput(a, b) {
    UpdateEndResult(a, sessionStorage[b ? "cache_" + a : "remote_" + a], MYLANG("CacheLast") + "\r\n" + MYLANG("ClickMore"))
}

function OnAskIdxStart(a) {
    var b = "http://www.ask.com/web?qsrc=1&o=0&l=dir&q=site%3A" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_ask"), MYLANG("MoreIdx"), "icon-open.gif", "icon_16", b);
    return ""
}

function OnBaiduIdxStart(a) {
    var b = "http://www.baidu.com/s?ie=utf-8&wd=site:" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_baidu"), MYLANG("MoreIdx"), "loading.gif", "icon_16", b);
    return b
}

function ExtractInt(a) {
    if (0 == a || "" == a) return 0;
    var b = a.match(/(.*)\u4ebf(.*)\u4e07/i);
    return b && 0 < b[1] ? 1E8 * b[1] + 1E4 * b[2] : 0 == a || "" == a ? 0 : a.replace(/\D/g, "")
}

function OnBaiduIdxEnd(a, b) {
    var c = b.match(/\u627e\u5230\u76f8\u5173\u7ed3\u679c\u6570\u7ea6(.*)\u4e2a/i),
        c = c ? ExtractInt(c[1]) : 0;
    0 == c && (c = (c = b.match(/\u8be5\u7f51\u7ad9\u5171\u6709([^<]+)<b style="color:#333">([^<]+)<\/b>/i)) ? ExtractInt(c[2]) : 0);
    sessionStorage["remote_" + a] = "" == b ? "" : FixVal(c, 0, 1);
    OnBaiduIdxOutput(a, 0)
}

function OnBaiduIdxOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumIndex") + "\r\n" + MYLANG("MoreIdx"))
}

function OnBingIdxStart(a) {
    var b = "http://www.bing.com/search?scope=web&setmkt=en-US&setplang=en-us&setlang=en-us&FORM=W5WA&q=site:" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_bing"), MYLANG("MoreIdx"), "loading.gif", "icon_16", b);
    return b
}

function OnBingIdxEnd(a, b) {
    sessionStorage["remote_" + a] = GetBingResult(b);
    OnBingIdxOutput(a, 0)
}

function GetBingResult(a) {
    if ("" == a) return "";
    var b = a.match(/<span class="sb_count"(| id="count")>([^<]*) result(|s)<\/span>/i),
        c = a.match(/<span class="sb_count"(| id="count")>([^<]*) of ([^<]*) result(|s)<\/span>/i),
        b = FixVal(c ? c[3] : b ? b[2] : 0, 0, 1);
    if (0 < b) return b;
    a = a.match(/<span class="sb_count"(| id="count")>([^<]*)<\/span>/i);
    return !a ? "" : FixVal(ExtractInt(a[2]), 0, 1)
}

function OnBingIdxOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumIndex") + "\r\n" + MYLANG("MoreIdx"))
}

function OnGooIdxStart(a) {
    var b = "http://search.goo.ne.jp/web.jsp?mode=0&sbd=goo001&IE=UTF-8&OE=UTF-8&from=s_b_top_web&PT=&MT=site%3A" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_goo"), MYLANG("MoreIdx"), "loading.gif", "icon_16", b);
    return b
}

function OnGooIdxEnd(a, b) {
    var c = b.match(/\u691c\u7d22\u7d50\u679c \uff08\u7d04([0-9,]+)\u4ef6/i);
    sessionStorage["remote_" + a] = "" == b ? "" : FixVal(c ? c[1] : 0, 0, 1);
    OnGooIdxOutput(a, 0)
}

function OnGooIdxOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumIndex") + "\r\n" + MYLANG("MoreIdx"))
}

function OnGGIdxStart(a) {
    var b = "https://www.google.com/search?filter=0&hl=en&q=site:" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_google"), MYLANG("MoreIdx"), "loading.gif", "icon_16", b);
    return b
}

function OnGGIdxEnd(a, b) {
    sessionStorage["remote_" + a] = GetGoogleResult(b);
    OnGGIdxOutput(a, 0)
}

function OnGGIdxOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumIndex") + "\r\n" + MYLANG("MoreIdx"))
}

function GetGoogleResult(a) {
    var b = a.match(/id="resultStats">(About |)([0-9,]+) result(|s)</i);
    return "" == a ? "" : FixVal(ExtractInt(b ? b[2] : 0), 0, 1)
}

function OnGGLinkStart(a) {
    var b = "https://www.google.com/search?filter=0&hl=en&q=link:" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_google"), MYLANG("MoreLink"), "loading.gif", "icon_16", b);
    return b
}

function OnGGLinkEnd(a, b) {
    sessionStorage["remote_" + a] = GetGoogleResult(b);
    OnGGLinkOutput(a, 0)
}

function OnGGLinkOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumLink") + "\r\n" + MYLANG("MoreLink"))
}

function OnSogouLinkStart(a) {
    var b = "http://www.sogou.com/web?ie=utf8&query=link%3A" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_sogou"), MYLANG("MoreLink"), "loading.gif", "icon_16", b);
    return b
}

function OnSogouLinkEnd(a, b) {
    var c = b.match(/<resnum id="scd_num">(.*)<\/resnum>/i);
    sessionStorage["remote_" + a] = "" == b ? "" : FixVal(c ? ExtractInt(c[1]) : 0, 0, 1);
    OnSogouLinkOutput(a, 0)
}

function OnSogouLinkOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumLink") + "\r\n" + MYLANG("MoreLink"))
}

function OnSogouIdxStart(a) {
    var b = "http://www.sogou.com/web?ie=utf8&query=site%3A" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_sogou"), MYLANG("MoreIdx"), "loading.gif", "icon_16", b);
    return b
}

function OnSogouIdxEnd(a, b) {
    var c = b.match(/<resnum id="scd_num">(.*)<\/resnum>/i);
    sessionStorage["remote_" + a] = "" == b ? "" : FixVal(c ? ExtractInt(c[1]) : 0, 0, 1);
    OnSogouIdxOutput(a, 0)
}

function OnSogouIdxOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumIndex") + "\r\n" + MYLANG("MoreIdx"))
}

function OnYahooIdxStart(a) {
    var b = "http://search.yahoo.com/search?fr=sfp&p=site:" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_yahoo"), MYLANG("MoreIdx"), "icon-open.gif", "icon_16", b);
    return ""
}

function OnYandexIdxStart(a) {
    var b = "https://www.yandex.com/search/?text=site:" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_yandex"), MYLANG("MoreIdx"), "loading.gif", "icon_16", b);
    return b
}

function OnYandexIdxEnd(a, b) {
    var c = b.match(/Yandex:([\W]{1})has([\W]{1})found([\W]{1})(.*)([\W]{1})answers/i),
        d = "";
    if (c && c[4]) {
        var e = c[4].match(/([0-9]+)([\W]{1})(thousand|million)/i);
        e ? "thousand" == e[3] ? d = 1E3 * e[1] : "million" == e[3] && (d = 1E6 * e[1]) : d = c[4]
    }
    sessionStorage["remote_" + a] = "" == d ? "" : FixVal(d, 0, 1);
    OnYandexIdxOutput(a, 0)
}

function OnYandexIdxOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumIndex") + "\r\n" + MYLANG("MoreIdx"))
}

function On360IdxStart(a) {
    var b = "http://www.so.com/s?ie=utf-8&src=360sou_home&q=site%3A" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_360"), MYLANG("MoreIdx"), "loading.gif", "icon_16", b);
    return b
}

function On360IdxEnd(a, b) {
    var c = b.match(/<p class="ws-total">\u627e\u5230\u76f8\u5173\u7ed3\u679c\u7ea6(.*)\u4e2a<\/p>/i);
    sessionStorage["remote_" + a] = "" == b ? "" : FixVal(c ? ExtractInt(c[1]) : 0, 0, 1);
    On360IdxOutput(a, 0)
}

function On360IdxOutput(a, b) {
    UpdateEndResult(a, sessionStorage[(b ? "cache_" : "remote_") + a], MYLANG("NumIndex") + "\r\n" + MYLANG("MoreIdx"))
}

function OnOSELinkStart(a) {
    var b = "http://www.opensiteexplorer.org/links?site=" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("site_ose"), MYLANG("MoreLink"), "icon-open.gif", "icon_16", b);
    return ""
}

function OnWotStart(a) {
    OutputLink(a, "link", 0, MYLANG("SecWot"), MYLANG("ClickMore"), "loading.gif", "icon_16", "http://www.mywot.com/en/scorecard/" + sessionStorage.host);
    return "http://api.mywot.com/0.4/public_query2?target=" + sessionStorage.host
}

function OnWotEnd(a, b) {
    var c = (new DOMParser).parseFromString(b, "text/xml").documentElement.childNodes,
        d = -1;
    0 < c.length && (d = c[0].getAttribute("r"));
    sessionStorage["remote_" + a] = 80 <= d ? 5 : 60 <= d ? 4 : 40 <= d ? 3 : 20 <= d ? 2 : 0 <= d ? 1 : 0;
    OnWotOutput(a, 0)
}

function OnWotOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        d = {
            "0": MYLANG("RateUntested"),
            1: MYLANG("RateVerypoor"),
            2: MYLANG("RatePoor"),
            3: MYLANG("RateUnsat"),
            4: MYLANG("RateGood"),
            5: MYLANG("RateExcellent")
        };
    UpdateEndResult(a, '<img src="image/icon-wot' + sessionStorage[c] + '.png" class="" ALT="">', MYLANG("Rating") + ": " + d[sessionStorage[c]])
}

function OnSiteadvStart(a) {
    var b = "http://www.siteadvisor.com/sites/" + sessionStorage.host + "?ref=safe&locale=en-US";
    OutputLink(a, "link", 0, MYLANG("SecSiteadv"), MYLANG("ClickMore"), "loading.gif", "icon_16", b);
    return b
}

function OnSiteadvEnd(a, b) {
    var c = "grey",
        d = b.match(/(green|yellow|red)-xbg2/im);
    null != d && (c = d[1]);
    sessionStorage["remote_" + a] = c;
    OnSiteadvOutput(a, 0)
}

function OnSiteadvOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        d = {
            green: MYLANG("RateSafe"),
            yellow: MYLANG("RateCaution"),
            grey: MYLANG("RateUntested"),
            red: MYLANG("RateWarning")
        };
    UpdateEndResult(a, '<img src="image/icon-sa-' + sessionStorage[c] + '.png" class="icon_16" ALT=""/>', MYLANG("Rating") + ": " + d[sessionStorage[c]])
}

function OnNortonStart(a) {
    var b = "http://safeweb.norton.com/report/show?url=" + sessionStorage.host;
    OutputLink(a, "link", 0, MYLANG("SecNorton"), MYLANG("ClickMore"), "loading.gif", "icon_16", b);
    return b
}

function OnNortonEnd(a, b) {
    var c = "icoUntested",
        d = b.match(/class="big_clip ([^"]+)"/im);
    null != d && (c = d[1]);
    sessionStorage["remote_" + a] = c;
    OnNortonOutput(a, 0)
}

function OnNortonOutput(a, b) {
    var c = b ? "cache_" + a : "remote_" + a,
        d = {
            icoSafe: MYLANG("RateSafe"),
            icoCaution: MYLANG("RateCaution"),
            icoUntested: MYLANG("RateUntested"),
            icoWarning: MYLANG("RateWarning"),
            icoNSecured: MYLANG("RateNortonsec")
        };
    UpdateEndResult(a, '<img src="image/icon-norton-' + sessionStorage[c] + '.png" class="icon_16" ALT=""/>', MYLANG("Rating") + ": " + d[sessionStorage[c]])
}

function CheckVersion() {
    var a = 0,
        b = 0,
        c = void 0 == localStorage.version_marjor ? "" : localStorage.version_marjor + localStorage.version_mini,
        d = g_strVersionMajor + g_strVersionMini;
    void 0 == localStorage.version_marjor ? a = 1 : localStorage.version_marjor != g_strVersionMajor ? b = 1 : localStorage.version_mini != g_strVersionMini && (localStorage.version_mini = g_strVersionMini);
    c != d && GetUID();
    if (a || b) localStorage.version_marjor = g_strVersionMajor, localStorage.version_mini = g_strVersionMini
};