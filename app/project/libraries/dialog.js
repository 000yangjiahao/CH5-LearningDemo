const DialogModel = (() => {

    function createModelDialog(id, config) {
        const parent = document.getElementById(id);

        parent.innerHTML += `
        <ch5-modal-dialog receiveStateShowPulse=${config.receiveStateShowPulse} dismissable okButtonLabel="确认" cancelButtonLabel="取消"
            okButtonStyle=" color:black;width:8vw;height:5vh; background: linear-gradient(#F5F5F5 0%, #D2D2D2 49%, #C1C2C5 51%, #C0C1C4 100%); 
            border: 1px solid black; margin-left: 8vw;margin-top: 2vh;font-size: clamp(0.7rem, 0.489rem + 1.05vw, 2rem);" 
            cancelButtonStyle="width:8vw;height:5vh; background: linear-gradient(#F5F5F5 0%, #D2D2D2 49%, #C1C2C5 51%, #C0C1C4 100%); border: 1px solid black; margin-right: 8vw;
            margin-top: 2vh;font-size: clamp(0.7rem, 0.489rem + 1.05vw, 2rem);" customclass="dialog" sendeventonok=${config.sendeventonok}>
                <div style="font-size: clamp(0.7rem, 0.489rem + 1.05vw, 2rem);">
                <span>确认是否调用此模式?</span><br>
                <span>Please confirm whether to call this mode</span>
                </div>
        </ch5-modal-dialog>
        `
    }

    function createStateDialog(id,config){
        const parent = document.getElementById(id);

        parent.innerHTML += `
            <div class="confirm" style="font-size: clamp(0.7rem, 0.6rem + 1.5vw, 4rem);"
                data-ch5-show=${config.show} data-ch5-noshow-type="remove">
                <div style="margin-top: 3%;">${config.prompt}</div>
                <div>Starting the class?</div>
                <div style="display: flex; flex-direction: row;justify-content: center;margin-top: 5%;">
                    <div style="width: 20%; font-size: clamp(0.7rem, 0.4rem + 1.05vw, 2rem);">
                        <span>取消</span><br>
                        <span>Cancel</span>
                    </div>
                    <ch5-slider value="50" min="0" max="100" customstyle="margin-top:1vh" id=${config.id}>
                    </ch5-slider>
                    <div style="width: 20%; font-size: clamp(0.7rem, 0.4rem + 1.05vw, 2rem);">
                        <span>${config.zh}</span><br>
                        <span>${config.en}</span>
                    </div>
                </div>
            </div>
        `
    }
    return {
        createModelDialog,
        createStateDialog
    }
})();
