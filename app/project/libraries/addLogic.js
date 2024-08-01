const AddLogic = (() => {

    let homeButtons = [
        { buttonName: 'dailyButton', selectedName: 'is_daily_selected', button: null },
        { buttonName: 'teachAButton', selectedName: 'is_teachA_selected', button: null },
        { buttonName: 'teachBButton', selectedName: 'is_teachB_selected', button: null },
        { buttonName: 'onlineButton', selectedName: 'is_online_selected', button: null },
        { buttonName: 'customButton', selectedName: 'is_custom_selected', button: null }
    ];

    let homeSliders = [
        { sliderName: 'startSlider', sliderFun: 'start_confirm_show', slider: null },
        { sliderName: 'endSlider', sliderFun: 'end_confirm_show', slider: null },
    ]

    
    let logo
    let fork

    function init(){
        initButton()
        initLogo()
        initFork()
        initHomeSlider()
    }

    function initButton() {
        homeButtons.forEach(btn => {
            btn.button = document.getElementById(btn.buttonName);
        });

        homeButtons.map(btn => {
            CrComLib.subscribeState('b', btn.selectedName, value => {
                if (value) {
                    btn.button.setMode(1);
                } else {
                    btn.button.setMode(0);
                }
            });
        });
    }

    function initLogo() {
        logo = document.getElementById('logo')
        logo.addEventListener('click', () => {
            templatePageModule.navigateTriggerViewByPageName('unlock')
        })
    }

    function initFork() {
        fork = document.getElementById('fork')
        fork.addEventListener('click', () => {
            CrComLib.publishEvent('b', 'is_end_selected', false)
        })
    }

    function initHomeSlider() {

        homeSliders.forEach(sld => {
            sld.slider = document.getElementById(sld.sliderName);
        });

        homeSliders.map(sld => {
            sld.slider.addEventListener('slideend', function (e) {
                let end = e.detail.value[0]
                console.log(end);
                if (end == 0) {
                    CrComLib.publishEvent('b', sld.sliderFun, false);
                }
            });
        })
    }

    return {
        init
    }
})();