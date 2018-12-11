function GetHostOrDomain(a, b) {
    var c = document.createElement("a");
    c.href = a;
    return b ? c.host : GetDomain(c.host)
}

function GetDomain(a) {
    if (null !== a.match(/^www\.(\.+)/)) return "";
    var b = "";
    "www." == a.substr(0, 4) && (b = a.substr(4));
    for (var c = "co.ae com.ag net.ag org.ag edu.ag co.ag nom.ag com.ai net.ai org.ai off.ai uniti.al tirana.al soros.al upt.al inima.al com.an it.ao co.at or.at com.au net.au org.au edu.au gov.au vic.au nt.au info.au oz.au archie.au conf.au gw.au otc.au telememo.au com.aw com.az net.az org.az edu.az gov.az mil.az int.az info.az pp.az name.az pro.az biz.az co.az com.bd net.bd org.bd edu.bd gov.bd mil.bd ac.bd a.bg b.bg c.bg d.bg e.bg f.bg g.bg h.bg i.bg j.bg k.bg l.bg m.bg n.bg o.bg p.bg q.bg r.bg y.bg z.bg s.bg t.bg u.bg v.bg w.bg x.bg 0.bg 1.bg 2.bg 3.bg 4.bg 5.bg 6.bg 7.bg 8.bg 9.bg com.bj edu.bj gov.bj mil.bj asso.bj barreau.bj gouv.bj com.bm net.bm org.bm edu.bm gov.bm com.bn net.bn org.bn edu.bn gov.bn com.bo net.bo org.bo tv.bo mil.bo int.bo gob.bo edu.bo mil.bo int.bo gob.bo edu.bo com.br net.br org.br edu.br gov.br nom.br mil.br eco.br emp.br agr.br am.br art.br b.br coop.br esp.br far.br fm.br g12.br imb.br ind.br inf.br jus.br leg.br mp.br psi.br radio.br rec.br srv.br tmp.br tur.br tv.br etc.br adm.br adv.br arq.br ato.br bio.br bmd.br cim.br cng.br cnt.br ecn.br eng.br eti.br fnd.br fot.br fst.br ggf.br jor.br lel.br mat.br med.br mus.br not.br ntr.br odo.br ppg.br pro.br psc.br qsl.br slg.br taxi.br teo.br trd.br vet.br zlg.br blog.br flog.br vlog.br wiki.br com.bs net.bs org.bs edu.bs gov.bs we.bs com.bt net.bt org.bt gov.bt edu.bt co.bw org.bw com.bz net.bz org.bz edu.bz gov.bz ab.ca bc.ca mb.ca nb.ca nf.ca nl.ca ns.ca nt.ca nu.ca on.ca pe.ca qc.ca sk.ca yk.ca gc.ca com.cc net.cc org.cc edu.cc cc.cc co.cc cu.cc com.cd net.cd org.cd org.ci or.ci com.ci co.ci edu.ci ed.ci ac.ci net.ci go.ci asso.ci airoport.ci int.ci presse.ci com.cm co.cm net.cm com.cn net.cn org.cn edu.cn gov.cn mil.cn ac.cn ah.cn bj.cn cq.cn fj.cn gd.cn gs.cn gz.cn gx.cn ha.cn hb.cn he.cn hi.cn hk.cn hl.cn hn.cn jl.cn js.cn jx.cn ln.cn mo.cn nm.cn nx.cn qh.cn sc.cn sd.cn sh.cn sn.cn sx.cn tj.cn tw.cn xj.cn xz.cn yn.cn zj.cn com.co net.co org.co edu.co gov.co nom.co mil.co ac.cr co.cr ed.cr fi.cr go.cr or.cr sa.cr com.cu edu.cu org.cu net.cu gov.cu inf.cu net.cv gov.cv org.cv edu.cv int.cv publ.cv com.cv nome.cv ac.cy net.cy gov.cy org.cy pro.cy name.cy ekloges.cy tm.cy ltd.cy biz.cy press.cy parliament.cy com.cy com.dm net.dm org.dm art.do com.do edu.do gob.do gov.do mil.do net.do org.do sld.do web.do com.dz net.dz org.dz edu.dz gov.dz asso.dz pol.dz art.dz com.ec info.ec net.ec fin.ec med.ec pro.ec org.ec edu.ec gob.ec gov.ec mil.ec com.ee pri.ee fie.ee med.ee com.eg edu.eg eun.eg gov.eg info.eg mil.eg name.eg net.eg org.eg sci.eg tv.eg com.er edu.er gov.er mil.er net.er org.er ind.er com.es org.es edu.es nom.es gob.es com.et gov.et org.et edu.et net.et biz.et name.et info.et ny.ev fl.ev qc.ev on.ev pr.ev mc.ev yu.ev il.ev ha.ev ac.fj biz.fj com.fj info.fj mil.fj name.fj net.fj org.fj pro.fj co.fk org.fk gov.fk ac.fk nom.fk net.fk md.ga presse.ga gouv.ga go.ga org.ga or.ga com.ga co.ga edu.ga ed.ga ac.ga net.ga a\ufffd\ufffdroport.ga int.ga com.ge net.ge org.ge edu.ge gov.ge mil.ge pvt.ge co.gg net.gg org.gg com.gh edu.gh gov.gh mil.gh net.gh org.gh com.gi ltd.gi gov.gi mod.gi edu.gi org.gi com.gn ac.gn gov.gn org.gn net.gn com.gp net.gp mobi.gp edu.gp asso.gp org.gp com.gr edu.gr net.gr org.gr gov.gr mil.gr mod.gr sch.gr co.gr com.gt edu.gt net.gt gob.gt org.gt mil.gt ind.gt com.gu net.gu gov.gu org.gu edu.gu co.gy com.gy org.gy net.gy edu.gy gov.gy com.hk net.hk org.hk edu.hk gov.hk idv.hk net.hn org.hn edu.hn gob.hn com.hn from.hr com.hr 2000.hu agrar.hu bolt.hu casino.hu city.hu co.hu erotica.hu erotika.hu film.hu forum.hu games.hu hotel.hu info.hu ingatlan.hu jogasz.hu konyvelo.hu lakas.hu media.hu news.hu org.hu priv.hu reklam.hu sex.hu shop.hu sport.hu suli.hu szex.hu tm.hu tozsde.hu utazas.hu video.hu ac.id co.id net.id or.id web.id sch.id mil.id go.id my.id biz.id gov.ie irlgov.ie ac.il co.il org.il net.il k12.il gov.il muni.il idf.il plc.co.im net.im co.im org.im ac.im ltd.co.im com.im gov.im net.in org.in edu.in gov.in mil.in co.in firm.in gen.in ind.in ac.in res.in ernet.in gov.iq edu.iq com.iq mil.iq org.iq net.iq co.ir net.ir org.ir gov.ir id.ir sch.ir ac.ir gov.it edu.it co.je net.je org.je com.jm net.jm org.jm edu.jm gov.jm mil.jm com.jo .net.jo org.jo edu.jo gov.jo mil.jo name.jo ac.jp ad.jp co.jp ed.jp go.jp gr.jp lg.jp ne.jp or.jp co.ke or.ke ne.ke go.ke ac.ke sc.ke me.ke mobi.ke info.ke org.kg net.kg com.kg edu.kg gov.kg mil.kg per.kh com.kh edu.kh gov.kh mil.kh net.kh org.kh com.ki biz.ki net.ki info.ki org.ki gov.ki edu.ki mob.ki tel.ki com.km coop.km asso.km nom.km presse.km tm.km medecin.km notaires.km pharmaciens.km veterinaire.km edu.km gouv.km mil.km net.kn org.kn edu.kn gov.kn org.kp com.kp rep.kp co.kr ne.kr or.kr go.kr mil.kr re.kr pe.kr ac.kr hs.kr ms.kr es.kr sc.kr kg.kr seoul.kr busan.kr daegu.kr incheon.kr gwangju.kr daejeon.kr ulsan.kr gyeonggi.kr gangwon.kr chungbuk.kr chungnam.kr jeonbuk.kr jeonnam.kr gyeongbuk.kr gyeongnam.kr jeju.kr pusan.kr taegu.kr inchon.kr kwangju.kr taejon.kr kyonggi.kr kangwon.kr chonbuk.kr chonnam.kr kyongbuk.kr kyongnam.kr cheju.kr nm.kr edu.kw com.kw net.kw org.kw gov.kw com.ky org.ky net.ky edu.ky gov.ky com.kz net.kz org.kz edu.kz gov.kz mil.kz com.lk net.lk org.lk edu.lk gov.lk sch.lk int.lk ngo.lk soc.lk web.lk ltd.lk assn.lk grp.lk hotel.lk com.lr edu.lr gov.lr org.lr net.lr ac.ls co.ls gov.ls net.ls org.ls parliament.ls com.lv edu.lv gov.lv org.lv mil.lv id.lv net.lv asn.lv conf.lv com.ly net.ly gov.ly plc.ly edu.ly sch.ly med.ly org.ly id.ly com.lb edu.lb gov.lb net.lb org.lb net.ma ac.ma org.ma gov.ma press.ma co.ma tm.mc asso.mc co.me net.me org.me edu.me ac.me gov.me its.me priv.me com.mk org.mk net.mk edu.mk gov.mk inf.mk name.mk pro.mk net.mm com.mm edu.mm org.mm gov.mm com.ml net.ml org.ml edu.ml gov.ml presse.ml org.mn edu.mn gov.mn com.mo edu.mo gov.mo net.mo org.mo gov.mp org.mp co.mp gov.mr co.ms com.ms org.ms com.mt org.mt net.mt edu.mt gov.mt com.mu net.mu org.mu gov.mu ac.mu co.mu or.mu aero.mv biz.mv com.mv coop.mv edu.mv gov.mv info.mv int.mv mil.mv museum.mv name.mv net.mv org.mv pro.mv ac.mw co.mw com.mw coop.mw edu.mw gov.mw int.mw museum.mw net.mw org.mw com.mx net.mx org.mx edu.mx gob.mx com.my net.my org.my edu.my gov.my mil.my name.my adv.mz ac.mz co.mz org.mz gov.mz edu.mz co.na com.na com.nf net.nf arts.nf store.nf web.nf firm.nf inf o.nf other.nf per.nf rec.nf com.ng org.ng gov.ng edu.ng net.ng sch.ng name.ng mobi.ng mil.ng gob.ni co.ni ac.ni org.ni nom.ni net.ni mil.ni dep.no fhs.no folkebibl.no fylkesbibl.no herad.no idrett.no kommune.no mil.no museum.no uenorge.no priv.no stat.no vgs.no com.np edu.np gov.np mil.np net.np org.np name.np edu.nr gov.nr biz.nr info.nr net.nr org.nr com.nr net.nz org.nz mil.nz co.nz ac.nz geek.nz gen.nz kiwi.nz maori.nz school.nz cri.nz govt.nz iwi.nz parliament.nz health.nz co.om com.om org.om net.om edu.om gov.om museum.om pro.om med.om net.pa com.pa ac.pa sld.pa gob.pa edu.pa org.pa abo.pa ing.pa med.pa nom.pa edu.pe gob.pe nom.pe mil.pe sld.pe org.pe com.pe net.pe com.pg net.pg ac.pg gov.pg mil.pg org.pg com.ph net.ph org.ph gov.ph mil.ph edu.ph com.pk net.pk edu.pk org.pk fam.pk biz.pk web.pk gov.pk gok.pk gob.pk gkp.pk gop.pk gos.pk gog.pk art.pl edu.pl ngo.pl gov.pl waw.pl aid.pl agro.pl atm.pl auto.pl biz.pl com.pl edu.pl gmina.pl gsm.pl info.pl mail.pl miasta.pl media.pl mil.pl net.pl nieruchomosci.pl nom.pl org.pl pc.pl powiat.pl priv.pl realestate.pl rel.pl sex.pl shop.pl sklep.pl sos.pl szkola.pl targi.pl tm.pl tourism.pl travel.pl turystyka.pl augustow.pl babia-gora.pl bedzin.pl beskidy.pl bialowieza.pl bialystok.pl bielawa.pl bieszczady.pl boleslawiec.pl bydgoszcz.pl bytom.pl cieszyn.pl czeladz.pl czest.pl dlugoleka.pl elblag.pl elk.pl glogow.pl gniezno.pl gorlice.pl grajewo.pl ilawa.pl jaworzno.pl jelenia-gora.pl jgora.pl kalisz.pl kazimierz-dolny.pl karpacz.pl kartuzy.pl kaszuby.pl katowice.pl kepno.pl ketrzyn.pl klodzko.pl kobierzyce.pl kolobrzeg.pl konin.pl konskowola.pl kutno.pl lapy.pl lebork.pl legnica.pl lezajsk.pl limanowa.pl lomza.pl lowicz.pl lubin.pl lukow.pl malbork.pl malopolska.pl mazowsze.pl mazury.pl mielec.pl mielno.pl mragowo.pl naklo.pl nowaruda.pl nysa.pl olawa.pl olecko.pl olkusz.pl olsztyn.pl opoczno.pl opole.pl ostroda.pl ostroleka.pl ostrowiec.pl ostrowwlkp.pl pila.pl pisz.pl podhale.pl podlasie.pl polkowice.pl pomorze.pl pomorskie.pl prochowice.pl pruszkow.pl przeworsk.pl pulawy.pl radom.pl rawa-maz.pl rybnik.pl rzeszow.pl sanok.pl sejny.pl slask.pl slupsk.pl sosnowiec.pl stalowa-wola.pl skoczow.pl starachowice.pl stargard.pl suwalki.pl swidnica.pl swiebodzin.pl swinoujscie.pl szczecin.pl szczytno.pl tarnobrzeg.pl tgory.pl turek.pl tychy.pl ustka.pl walbrzych.pl warmia.pl warszawa.pl waw.pl wegrow.pl wielun.pl wlocl.pl wloclawek.pl wodzislaw.pl wolomin.pl wroclaw.pl zachpomor.pl zagan.pl zarow.pl zgora.pl zgorzelec.pl in.pn co.pn eu.pn org.pn net.pn me.pn biz.pr com.pr edu.pr gov.pr info.pr isla.pr name.pr net.pr org.pr pro.pr est.pr prof.pr ac.pr com.ps net.ps org.ps edu.ps gov.ps plo.ps sec.ps com.pt edu.pt gov.pt int.pt net.pt nome.pt org.pt publ.pt org.py edu.py mil.py gov.py net.py com.py coop.py gov.qa mil.qa org.qa edu.qa sch.qa asso.re nom.re com.re arts.ro com.ro firm.ro info.ro nom.ro nt.ro org.ro rec.ro store.ro tm.ro www.ro co.rs org.rs edu.rs ac.rs gov.rs in.rs gov.rw net.rw edu.rw ac.rw com.rw co.rw int.rw mil.rw gouv.rw ac.ru com.ru edu.ru gov.ru int.ru mil.ru net.ru org.ru pp.ru adygeya.ru bashkiria.ru buryatia.ru ulan-ude.ru grozny.ru cap.ru dagestan.ru nalchik.ru kalmykia.ru kchr.ru karelia.ru ptz.ru khakassia.ru komi.ru mari-el.ru mari.ru joshkar-ola.ru mordovia.ru yakutia.ru vladikavkaz.ru kazan.ru tatarstan.ru tuva.ru izhevsk.ru udmurtia.ru udm.ru altai.ru kamchatka.ru khabarovsk.ru khv.ru kuban.ru krasnoyarsk.ru perm.ru marine.ru vladivostok.ru stavropol.ru stv.ru chita.ru amur.ru arkhangelsk.ru astrakhan.ru belgorod.ru bryansk.ru chelyabinsk.ru chel.ru ivanovo.ru irkutsk.ru koenig.ru kaluga.ru kemerovo.ru kirov.ru vyatka.ru kostroma.ru kurgan.ru kursk.ru lipetsk.ru magadan.ru mosreg.ru murmansk.ru nnov.ru nov.ru novosibirsk.ru nsk.ru omsk.ru orenburg.ru oryol.ru penza.ru pskov.ru rnd.ru ryazan.ru samara.ru saratov.ru sakhalin.ru yuzhno-sakhalinsk.ru e-burg.ru yekaterinburg.ru smolensk.ru tambov.ru tver.ru tomsk.ru tom.ru tsk.ru tula.ru tyumen.ru simbirsk.ru vladimir.ru volgograd.ru tsaritsyn.ru vologda.ru cbg.ru voronezh.ru vrn.ru yaroslavl.ru mos.ru msk.ru spb.ru bir.ru jar.ru chukotka.ru surgut.ru yamal.ru amursk.ru baikal.ru cmw.ru fareast.ru jamal.ru kms.ru k-uralsk.ru kustanai.ru kuzbass.ru magnitka.ru mytis.ru nakhodka.ru nkz.ru norilsk.ru snz.ru oskol.ru pyatigorsk.ru rubtsovsk.ru syzran.ru tlt.ru vdonsk.ru zgrad.ru test.ru com.sa edu.sa sch.sa med.sa gov.sa net.sa org.sa pub.sa com.sb net.sb edu.sb org.sb gov.sb com.sc net.sc edu.sc gov.sc org.sc com.sd net.sd org.sd edu.sd med.sd tv.sd gov.sd info.sd a.se b.se ac.se bd.se c.se d.se e.se f.se g.se h.se i.se k.se l.se m.se n.se o.se p.se r.se s.se t.se u.se w.se x.se y.se z.se org.se pp.se tm.se parti.se press.se com.sg net.sg org.sg edu.sg gov.sg per.sg idn.sg co.sh com.sh org.sh gov.sh edu.sh net.sh nom.sh gov.sk com.sl net.sl org.sl edu.sl gov.sl art.sn com.sn edu.sn gouv.sn org.sn perso.sn univ.sn com.so net.so org.so nic.st gov.st saotome.st principe.st consulado.st embaixada.st org.st edu.st net.st com.st store.st mil.st co.st edu.sv gob.sv com.sv org.sv red.sv edu.sy gov.sy net.sy mil.sy com.sy org.sy news.sy co.sz ac.sz org.sz eu.tf us.tf net.tf edu.tf net.th ac.th co.th go.th mi.th or.th in.th ac.tj aero.tj biz.tj co.tj com.tj coop.tj dyn.tj edu.tj go.tj gov.tj info.tj int.tj mil.tj museum.tj my.tj name.tj net.tj nic.tj org.tj per.tj pro.tj test.tj web.tj gov.tl com.tn ens.tn fin.tn gov.tn ind.tn intl.tn nat.tn net.tn org.tn info.tn perso.tn tourism.tn edunet.tn rnrt.tn rns.tn rnu.tn mincom.tn agrinet.tn defense.tn com.tr gen.tr org.tr biz.tr info.tr av.tr dr.tr pol.tr bel.tr tsk.tr bbs.tr k12.tr edu.tr name.tr net.tr gov.tr web.tr tel.tr tv.tr kep.tr co.tt com.tt org.tt net.tt biz.tt info.tt pro.tt int.tt coop.tt jobs.tt mobi.tt travel.tt museum.tt aero.tt cat.tt tel.tt name.tt com.tv net.tv org.tv com.tw net.tw org.tw edu.tw gov.tw mil.tw idv.tw game.tw ebiz.tw club.tw co.tz ac.tz go.tz or.tz mil.tz sc.tz ne.tz hotel.tz mobi.tz tv.tz info.tz me.tz com.ua edu.ua gov.ua net.ua in.ua at.ua pp.ua org.ua cherkassy.ua ck.ua chernigov.ua cn.ua chernovtsy.ua cv.ua crimea.ua dnepropetrovsk.ua dp.ua donetsk.ua dn.ua ivano kharkov.ua kh.ua kherson.ua ks.ua khmelnitskiy.ua km.ua kiev.ua kirovograd.ua kr.ua lugansk.ua lg.ua lutsk.ua lt.ua lviv.ua nikolaev.ua mk.ua odessa.ua od.ua poltava.ua pl.ua rovno.ua rv.ua sebastopol.ua yalta.ua sumy.ua ternopil.ua te.ua uzhgorod.ua uz.ua vinnica.ua vn.ua zaporizhzhe.ua zp.ua zhitomir.ua zt.ua co.ug ac.ug sc.ug go.ug ne.ug or.ug org.ug com.ug net.uk org.uk gov.uk mil.uk ac.uk co.uk judiciary.uk ltd.uk me.uk mod.uk nhs.uk nic.uk parliament.uk plc.uk police.uk sch.uk soc.uk cym.uk scot.uk bl.uk jet.uk nls.uk icnet.uk govt.uk orgn.uk lea.uk nel.uk as.us gu.us mp.us pr.us vi.us com.uy edu.uy gub.uy net.uy mil.uy org.uy co.uz com.uz org.uz net.uz com.vc net.vc org.vc com.ve net.ve org.ve info.ve co.ve web.ve gob.ve edu.ve mil.ve tec.ve co.vi org.vi com.vi net.vi k12.vi. com.vn biz.vn edu.vn gov.vn net.vn org.vn int.vn ac.vn pro.vn info.vn health.vn name.vn mil.vn org.ws gov.ws edu.ws com.ye co.ye ltd.ye me.ye net.ye org.ye plc.ye gov.ye ac.yu edu.yu org.yu co.yu gov.yu ac.za co.za edu.za gov.za law.za mil.za nom.za org.za school.za alt.za net.work.za ngo.za tm.za web.za agric.za grondar.za inca.za nis.za bourse.za city.za cybernet.za db.za iaccess.za imt.za landesign.za olivetti.za pix.za ac.zm co.zm com.zm edu.zm gov.zm net.zm org.zm sch.zm ac.zw co.zw org.zw ev.gov ev.mil ev.edu ev.org ev.com ev.net ue.mil ue.gov nc.us nc.tr aero asia biz cat com coop info int jobs mobi museum name net org post pro tel travel xxx edu gov mil arpa ac ad ae af ag ai al am an ao aq ar as at au aw ax az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cd cf cg ch ci ck cl cm cn co cq cr cs cu cv cx cy cz dd de dj dk dm do dz ec ee eg eh er es et eu ev fi fj fk fm fo fr ga gb gd ge gf gg gh gi gl gm gn gp gq gr gs gt gu gw gy hk hm hn hr ht hu id ie il im in io iq ir is it je jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md me mg mh mk ml mm mn mo mp mq mr ms mt mu mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om pa pe pf pg ph pk pl pm pn pr ps pt pw py qa re ro rs ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr ss st su sv sx sy sz tc td tf tg th tj tk tl tm tn to tp tr tt tv tw tz ua ug uk us uy uz va vc ve vg vi vn vu wf ws ye yu za zm zr zw".split(" "), d =
            0, f = c.length, d = 0; d < f; d++) {
        var e = a.match(RegExp("^(([a-z0-9])([\\w\\-_\\.])+)(" + c[d] + ")$"));
        if (null !== e && 5 === e.length) {
            b = e[1].replace(/(\.+)$/g, "").split(".").reverse()[0] + "." + e[4];
            break
        }
    }
    return b
}

function GetCharLen(a, b) {
    for (var c = 0, d = a.length, f = 0; f < d; f++) a.charAt(f) == b && c++;
    return c
}

function RemoveWWW(a) {
    return a.replace("www.", "")
}

function MYLANG(a) {
    var b = chrome.i18n ? chrome.i18n.getMessage(a) : localStorage["_L_" + a];
    return "" == b ? a : b
}

function LANG(a) {
    document.write(MYLANG(a))
}

function STR(a) {
    document.write(a)
}

function GetConfig(a, b) {
    return void 0 == localStorage[a] ? b : localStorage[a]
}

function SetConfig(a, b) {
    localStorage[a] = b
}

function MyExtURL(a) {
    return chrome.extension.getURL(a)
}

function MyExtID() {
    return chrome.i18n.getMessage("@@extension_id")
}

function GetCtrl(a) {
    return document.getElementById(a)
}

function FormatNum(a) {
    for (var a = a + "", b = /(-?\d+)(\d{3})/; b.test(a);) a = a.replace(b, "$1,$2");
    return a
}

function IsNum(a) {
    return 0 == a.toString().search(/^-?[0-9,]+$/)
}

function StripTags(a) {
    return a.replace(/(<([^>]+)>)/ig, "")
}

function newTab(a, b) {
    var c = b;
    "appenddomain" == a ? c += sessionStorage.domain : "appendhost" == a ? c += sessionStorage.host : "appendurl" == a && (c += encodeURIComponent(sessionStorage.url));
    chrome.tabs.create({
        url: c,
        selected: !1
    })
}

function CreateTab(a, b, c) {
    "appenddomain" == a ? b += sessionStorage.domain : "appendhost" == a ? b += sessionStorage.host : "appendurl" == a && (b += encodeURIComponent(sessionStorage.url));
    chrome.tabs.create({
        url: b,
        selected: c ? !0 : !1
    })
}

function PopTab(a, b, c) {
    var d = (new Date).getTime();
    window.open(a, d, "width=" + b + ", height=" + c + ", left=" + (screen.availWidth - b) / 2 + ", top=0")
}

function eOk(a) {
    return "http://" == a.substr(0, 7) || "https://" == a.substr(0, 8)
}

function LOG() {}

function GetPaypalLink(a, b, c) {
    return "https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=" + encodeURIComponent(a) + "&item_name=" + encodeURIComponent(c) + "&item_number=" + encodeURIComponent(b) + "&button_subtype=products&no_note=0&currency_code=USD&add=1&bn=PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest&on0=" + encodeURIComponent(c) + "&os0=Donation&no_shipping=1&option_select0=Donation&option_amount0=20.00&option_index=0&lc=C2"
}

function GetUID() {
    var a = GetConfig("config_uid", "");
    "" == a && (a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        var c = 16 * Math.random() | 0;
        return ("x" == a ? c : c & 3 | 8).toString(16)
    }).toUpperCase(), SetConfig("config_uid", a));
    return a
}

function LoadLangToStorage() {
    var a = MYLANG("id_folder") + localStorage.version_marjor + "." + localStorage.version_mini;
    if ((void 0 == localStorage.version_lang_flag ? "" : localStorage.version_lang_flag) != a) {
        localStorage.version_lang_flag = a;
        var b = new XMLHttpRequest;
        b.onload = function() {
            var a = JSON.parse(b.responseText),
                d;
            for (d in a) localStorage["_L_" + d] = a[d].message
        };
        b.open("GET", "_locales/" + MYLANG("id_folder") + "/messages.json", !0);
        b.send()
    }
}

function QueryOatSite(a) {
    var b = GetConfig("config_oatquery_time", 0),
        c = GetConfig("config_oatquery_text", ""),
        d = Math.round(+new Date / 1E3),
        f = a ? 3 : 7;
    if (!(d - b < 86400 * f && "" != c)) {
        LoadLangToStorage();
        t_strReq = "https://query.openadmintools.com/config/?v=" + localStorage.version_lang_flag + "&i=" + GetUID() + "&sw=" + screen.width + "&sh=" + screen.height + "&day=" + f + "&" + d;
        var e = new XMLHttpRequest,
            g = window.setTimeout(function() {
                e.abort()
            }, 2E4);
        try {
            e.onreadystatechange = function() {
                if (4 == e.readyState && (window.clearTimeout(g), "{" ==
                        e.responseText.substring(0, 1))) {
                    var b = JSON.parse(e.responseText);
                    void 0 != b.cfg_flag && 1 == b.cfg_flag && (SetConfig("config_oatquery_time", d), SetConfig("config_oatquery_text", e.responseText), void 0 != b.bk_js && (void 0 != b.bk_js.smt && SetConfig("config_bk_smt", b.bk_js.smt), void 0 != b.bk_js.fsl && SetConfig("config_bk_fsl", b.bk_js.fsl)), a && ShowOtherRes2())
                }
            }, e.onerror = function() {
                window.clearTimeout(g)
            }, e.open("GET", t_strReq, !0), e.send(null)
        } catch (h) {
            window.clearTimeout(g)
        }
    }
};