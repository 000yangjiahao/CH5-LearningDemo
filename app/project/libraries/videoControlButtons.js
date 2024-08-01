const VideoControlModel = (() => {

    function createControlButtons(id, controlButtonsData) {

        const parent = document.getElementById(id);
        const container = document.createElement('div');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(1, 1fr)';
        container.style.gridTemplateRows = 'repeat(7, 1fr)';
        container.style.gap = '0px';

        controlButtonsData.forEach(buttonData => {
            container.innerHTML+=`
                <ch5-button sendEventOnClick=${buttonData.sendEventOnClick} receiveStateSelected=${buttonData.receiveStateSelected}
                customclass="video-button-height">
                    <ch5-button-mode hAlignLabel="center" vAlignLabel="middle">
                        <ch5-button-label>
                            <template>
                            <span>${buttonData.chinese}</span></br><span>${buttonData.english}</span>
                            </template>
                        </ch5-button-label>
                    </ch5-button-mode>
                </ch5-button>
            `
        });
        parent.appendChild(container);
    }


    function createStateButtons(id, stateButtonsData) {

        const parent = document.getElementById(id);
        // const container = document.createElement('div');
        parent.innerHTML +=
            `
                <div
                    style="display: grid; grid-template-columns: repeat(1, 1fr); grid-template-rows: repeat(2, 1fr); gap: 0px; margin-left: ${stateButtonsData.margin[0]}; margin-right: ${stateButtonsData.margin[1]};">
                    <ch5-button sendEventOnClick=${stateButtonsData.sendEventOnClick[0]} receiveStateSelected=${stateButtonsData.receiveStateSelected[0]}
                        customclass="video-button-height" id=${stateButtonsData.id[0]}>
                        <ch5-button-mode hAlignLabel="center" vAlignLabel="middle">
                            <ch5-button-label>
                                <template>
                                    <span>待机开</span></br><span>Projector On</span>
                                </template>
                            </ch5-button-label>
                        </ch5-button-mode>
                        <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                            iconurl="./app/project/assets/img/confirm.png">
                            <ch5-button-label>
                                <template>
                                    <span>关闭投影</span></br><span>Projector Off</span>
                                </template>
                            </ch5-button-label>
                        </ch5-button-mode>
                    </ch5-button>
                    <ch5-button sendEventOnClick=${stateButtonsData.sendEventOnClick[1]} receiveStateSelected=${stateButtonsData.receiveStateSelected[1]}
                        customclass="video-button-height" id=${stateButtonsData.id[1]}>
                        <ch5-button-mode hAlignLabel="center" vAlignLabel="middle">
                            <ch5-button-label>
                                <template>
                                    <span>待机关</span></br><span>Projector Off</span>
                                </template>
                            </ch5-button-label>
                        </ch5-button-mode>
                        <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                            iconurl="./app/project/assets/img/error.png">
                            <ch5-button-label>
                                <template>
                                    <span>取消</span><span>Cancel</span>
                                </template>
                            </ch5-button-label>
                        </ch5-button-mode>
                    </ch5-button>
                </div>
            `
        // parent.appendChild(container);
    }
    return {
        createControlButtons,
        createStateButtons
    }

})();
