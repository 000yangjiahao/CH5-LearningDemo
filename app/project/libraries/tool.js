const ToolModel = (() => {

    function createContainer(id, name, cont) {

        let contain = document.getElementById(id)
        for (let i = 0; i < cont; i++) {
            let temp = document.createElement('div')
            temp.id = name + i
            contain.appendChild(temp)
        }
    }

    function doubleLayerButton(id, config) {
        const parent = document.getElementById(id);

        // const container = document.createElement('div');
        parent.innerHTML +=
            ` 
            <ch5-button sendEventOnClick=${config.sendEventOnClick} receiveStateSelected=${config.receiveStateSelected} customstyle="height:6.5vh;">
                <ch5-button-mode hAlignLabel="center" vAlignLabel="middle">
                    <ch5-button-label>
                        <template>
                            <span>${config.zh}</span></br><span>${config.en}</span>
                        </template>
                    </ch5-button-label>
                </ch5-button-mode>
            </ch5-button>
        `
        // parent.appendChild(container)
    }

    function doubleModeButton(id, config) {
        const parent = document.getElementById(id);
        parent.innerHTML +=
            ` 
           <ch5-button iconposition="top" sendEventOnClick=${config.sendEventOnClick}
                receiveStateSelected=${config.receiveStateSelected} receiveStateEnable=${config.receiveStateEnable}
                id=${config.id}>
                <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                    iconUrl=${config.iconUrl[0]}>
                    <ch5-button-label>
                        <template>
                            <span>${config.zh}</span></br><span>${config.en}</span>
                        </template>
                    </ch5-button-label>
                </ch5-button-mode>
                <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                    iconUrl=${config.iconUrl[1]}>
                    <ch5-button-label>
                        <template>
                            <span>${config.zh}</span></br><span>${config.en}</span>
                        </template>
                    </ch5-button-label>
                </ch5-button-mode>
            </ch5-button>
        `
    }
    return {
        createContainer,
        doubleLayerButton,
        doubleModeButton
    }
})();