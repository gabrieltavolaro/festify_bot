// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://festify.us/party/-LcMDRlQDBR9Cyqtu59w
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){

        var musica = "Cheap Thrills";

        var lista = document.querySelector('body > app-shell').shadowRoot.querySelector('view-party').shadowRoot.querySelector('app-drawer-layout > div > iron-pages > party-queue').shadowRoot.querySelector('dom-flip').querySelectorAll('party-track')

        for (var x of lista) {

            var titulo = x.shadowRoot.querySelector('div.metadata-wrapper > h2');
            console.log(titulo.innerText);

            if ( musica == titulo.innerText ) {
                x.shadowRoot.querySelector('div.icon-wrapper paper-icon-button').click();
                console.log('**ACHEI**');

                indexedDB.deleteDatabase('firebaseLocalStorageDb');
                location.reload();

                break;

            }

        }

        

    }, 6000);


})();
