var g_arrCache={};chrome.extension.onMessage.addListener(function(a,b){"getSpeed"==a.action&&(g_arrCache[b.tab.id]={},g_arrCache[b.tab.id]=a,g_arrCache[b.tab.id].status_pagespeed_url=b.tab.url)});chrome.tabs.onRemoved.addListener(function(a){delete g_arrCache[a]});document.addEventListener("DOMContentLoaded",function(){ClearLocalCache();CheckVersion();QueryOatSite(0)});chrome.tabs.onUpdated.addListener(function(a,b){"undefined"==typeof b.url||""==b.url||eOk(b.url)&&AjaxUpdateTab(b.url,a)});
chrome.tabs.onSelectionChanged.addListener(function(a){chrome.tabs.get(a,function(b){"undefined"==typeof b.url||""==b.url||eOk(b.url)&&AjaxUpdateTab(b.url,a)})});function GetLast(a){a="t"+a;return"undefined"==typeof localStorage[a]?{tm:0,url:""}:(a=localStorage[a].match(/([0-9,]+);(.*)/i))?{tm:a[1],url:a[2]}:{tm:0,url:""}}function SetLast(a,b){1E3<localStorage.length&&ClearLocalCache();var d=Date.parse(new Date)/1E3;localStorage["t"+a]=d+";"+b}
function ClearLocalCache(){if(0!=localStorage.length)for(var a,b=localStorage.length-1;0<=b;b--)a=localStorage.key(b),"t"==a.substr(0,1)&&localStorage.removeItem(a)}function AjaxUpdateTab(a){var b=a.indexOf("#");-1!=b&&a.substr(0,b)}function OnGGTabEnd(a,b,d){var c="?";if(""!=d&&(c=d.substr(9,2).replace(/\s$/,""),""==c||isNaN(1*c)))c="?";updatePR(c,a,b,!0)};