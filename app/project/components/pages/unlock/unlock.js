/**
 * Copyright (C) 2024 to the present, Crestron Electronics, Inc.
 * All rights reserved.
 * No part of this software may be reproduced in any form, machine
 * or natural, without the express written consent of Crestron Electronics.
 * Use of this source code is subject to the terms of the Crestron Software License Agreement 
 * under which you licensed this source code.  
 *
 * This code was automatically generated by Crestron's code generation tool.
*/
/*jslint es6 */
/*global serviceModule, CrComLib */

const unlockModule = (() => {
    'use strict';

    // BEGIN::CHANGEAREA - your javascript for page module code goes here         
    let buttons = [
        { name: 'A', button: null },
        { name: 'B', button: null },
        { name: 'C', button: null },
        { name: '1', button: null },
        { name: '2', button: null },
        { name: '3', button: null },
        { name: '4', button: null },
        { name: '5', button: null },
        { name: '6', button: null },
        { name: '7', button: null },
        { name: '8', button: null },
        { name: '9', button: null },
        { name: '0', button: null },
        { name: 'back', button: null },
        { name: 'confirm', button: null }
    ]

    const password = 'A3115'
    let input = []
    /**
     * Initialize Method
     */
    function onInit() {
        serviceModule.addEmulatorScenarioNoControlSystem("./app/project/components/pages/unlock/unlock-emulator.json");
        // Uncomment the below line and comment the above to load the emulator all the time.
        // serviceModule.addEmulatorScenario("./app/project/components/pages/unlock/unlock-emulator.json");       
    }

    /**
     * private method for page class initialization
     */
    let loadedSubId = CrComLib.subscribeState('o', 'ch5-import-htmlsnippet:unlock-import-page', (value) => {
        if (value['loaded']) {
            onInit();

            initButtons();

            setTimeout(() => {
                CrComLib.unsubscribeState('o', 'ch5-import-htmlsnippet:unlock-import-page', loadedSubId);
                loadedSubId = '';
            });
        }
    });

    function initButtons() {
        buttons.forEach(btn => {
            btn.button = document.getElementById(btn.name);
        });

        buttons
            .filter(btn => btn.name !== 'back' && btn.name !== 'confirm')
            .map(btn => btn.button.addEventListener('click', () => {
                input.push(btn.name);
            }))

        buttons
            .filter(btn => btn.name == 'back')
            .map(btn => btn.button.addEventListener('click', () => {
                input.pop();
            }))

        buttons
            .filter(btn => btn.name == 'confirm')
            .map(btn => btn.button.addEventListener('click', () => {
                let inputPassword = input.join('')
                input = []
                if (inputPassword == password) {
                    templatePageModule.navigateTriggerViewByPageName('home')
                } else {
                    console.log('error');
                }
            }))
    }
    /**
     * All public method and properties are exported here
     */
    return {
    };

    // END::CHANGEAREA

})();