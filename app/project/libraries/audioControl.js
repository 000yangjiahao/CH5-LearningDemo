const AudioControlModel = (() => {

    const mircoIconUrl = [
        "./app/project/assets/img/micro.png",
        "./app/project/assets/img/microG.png",
        "./app/project/assets/img/microR.png",
        "./app/project/assets/img/microY.png"
    ]

    function createSlider(id, config) {
        const parent = document.getElementById(id);

        const container = document.createElement('div');
        container.innerHTML = 
        ` 
            <div><ch5-jointotext-numeric
                    receiveStateValue=${config.receiveStateValue}></ch5-jointotext-numeric> db</div>
            <ch5-slider sendEventOnChange=${config.sendEventOnChange} receiveStateValue=${config.receiveStateValue}
                handleShape="circle" orientation="vertical" max="60">
            </ch5-slider>
            <div class="Audio-Text">
                <div style="margin-top: 1vh;">${config.zh}</div>
                <div style="margin-bottom: 1vh;">${config.en}</div>
            </div>
            <ch5-button customstyle="width:5vw; height:5vh" id=${config.en}>
                <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                    iconurl="./app/project/assets/img/micro.png"></ch5-button-mode>
                <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                    iconurl="./app/project/assets/img/microG.png"></ch5-button-mode>
                <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                    iconurl="./app/project/assets/img/microR.png"></ch5-button-mode>
                <ch5-button-mode hAlignLabel="center" vAlignLabel="middle"
                    iconurl="./app/project/assets/img/microY.png"></ch5-button-mode>
            </ch5-button>
        `
    parent.appendChild(container)
    }

    return {
        createSlider
    }
})();