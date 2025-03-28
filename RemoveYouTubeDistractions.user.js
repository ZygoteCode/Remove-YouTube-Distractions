// ==UserScript==
// @name         YouTube Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Remove all the YouTube distractions to get concentrated on what's really important
// @author       ZygoteCode
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://github.com/ZygoteCode/Remove-YouTube-Distractions/raw/main/RemoveYouTubeDistractions.user.js
// @downloadURL  https://github.com/ZygoteCode/Remove-YouTube-Distractions/raw/main/RemoveYouTubeDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    const head = document.head || document.getElementsByTagName('head')[0];
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = "#contentContainer,#buttons,#start,a[href='/feed/library'],a[href='/feed/history'],a[href='/playlist?list=WL'],a[href='/playlist?list=LL'],a[href='/account'],a[href='/reporthistory'],a[title='Guida'],a[title='Invia feedback'],button[aria-label='Esegui una ricerca vocale'],button[aria-label='Notifiche'],.ytd-reel-shelf-renderer{display:none!important;visibility:hidden!important;}";
    head.appendChild(styleElement);
})();
