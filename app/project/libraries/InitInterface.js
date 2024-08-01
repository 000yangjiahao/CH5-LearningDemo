const InitInterface = (() => {


    const videoControlButtons = ['VCB1', 'VCB2', 'VCB3']

    const videoControlButtonsData = [
        { chinese: "讲台桌插", english: "HDMI", sendEventOnClick: "", receiveStateSelected: "" },
        { chinese: "左辅助", english: "Ass.L", sendEventOnClick: "", receiveStateSelected: "" },
        { chinese: "右辅助", english: "Ass.R", sendEventOnClick: "", receiveStateSelected: "" },
        { chinese: "无线投屏", english: "Wireless", sendEventOnClick: "", receiveStateSelected: "" },
        { chinese: "黑屏", english: "V.Blank", sendEventOnClick: "", receiveStateSelected: "" },
        { chinese: "送返显屏", english: "To LCD", sendEventOnClick: "", receiveStateSelected: "" },
        { chinese: "自动跟踪", english: "Mic Trace", sendEventOnClick: "", receiveStateSelected: "" },
    ];

    const micorConfig = [
        { zh: '桌面话筒', en: 'DNC', receiveStateValue: 'slider0.value', sendEventOnChange: 'slider0.change' },
        { zh: '头戴', en: 'Head Mic', receiveStateValue: 'slider1.value', sendEventOnChange: 'slider1.change' },
        { zh: '领夹', en: 'Clip', receiveStateValue: 'slider2.value', sendEventOnChange: 'slider2.change' },
        { zh: '手持话筒1', en: 'Wireless1', receiveStateValue: 'slider3.value', sendEventOnChange: 'slider3.change' },
        { zh: '手持话筒2', en: 'Wireless2', receiveStateValue: 'slider4.value', sendEventOnChange: 'slider4.change' },
        { zh: '手持话筒3', en: 'Wireless3', receiveStateValue: 'slider5.value', sendEventOnChange: 'slider5.change' },
        { zh: '手持话筒4', en: 'Wireless4', receiveStateValue: 'slider6.value', sendEventOnChange: 'slider6.change' },
        { zh: '讲台桌插', en: 'HDMI', receiveStateValue: 'slider7.value', sendEventOnChange: 'slider7.change' },
    ]

    const controlStateButton = [
        { sendEventOnClick: ["Projector1On", "Projector1Off"], receiveStateSelected: ["isProjector1On", "isProjector1Off"], margin: ["20px", "0px"], id: ["Projector1On", "Projector1Off"] },
        { sendEventOnClick: ["Projector2On", "Projector2Off"], receiveStateSelected: ["isProjector2On", "isProjector2Off"], margin: ["10px", "10px"], id: ["Projector1On", "Projector1Off"] },
        { sendEventOnClick: ["Projector3On", "Projector3Off"], receiveStateSelected: ["isProjector3On", "isProjector3Off"], margin: ["0px", "20px"], id: ["Projector1On", "Projector1Off"] },
    ]

    const lightingButtonConfig = [
        { zh: '全开', en: 'All On', sendEventOnClick: '', receiveStateSelected: '' },
        { zh: '全关', en: 'All Off', sendEventOnClick: '', receiveStateSelected: '' },
        { zh: '投影模式', en: 'Present', sendEventOnClick: '', receiveStateSelected: '' },
        { zh: '清洁模式', en: 'Maintain', sendEventOnClick: '', receiveStateSelected: '' },
        { zh: '投影50%', en: 'Projector50%', sendEventOnClick: '', receiveStateSelected: '' },
        { zh: '投影70%', en: 'Projector70%', sendEventOnClick: '', receiveStateSelected: '' },
    ]

    const allScreenButtonConfig = [
        { zh: '显示器 开', en: 'All Screen On', sendEventOnClick: 'ScreenOn', receiveStateSelected: 'isScreenOn' },
        { zh: '显示器 关', en: 'All Screen Off', sendEventOnClick: 'ScreenOff', receiveStateSelected: 'isScreenOff' },
    ]

    const modeButtonConfig1 = [
        { zh: '日常模式', en: 'Default Mode', sendEventOnClick: 'daily_click', receiveStateSelected: 'is_daily_selected', receiveStateEnable: 'is_start_selected', iconUrl: ['./app/project/assets/img/dailyB.png', './app/project/assets/img/dailyW.png'], id: 'dailyButton' },
        { zh: '教授模式 A', en: 'Professor Mode A', sendEventOnClick: 'teachA_click', receiveStateSelected: 'is_teachA_selected', receiveStateEnable: 'is_start_selected', iconUrl: ['./app/project/assets/img/teachB.png', './app/project/assets/img/teachW.png'], id: 'teachAButton' },
        { zh: '教师模式 B', en: 'Professor Mode B', sendEventOnClick: 'teachB_click', receiveStateSelected: 'is_teachB_selected', receiveStateEnable: 'is_start_selected', iconUrl: ['./app/project/assets/img/teachB.png', './app/project/assets/img/teachW.png'], id: 'teachBButton' },
    ]

    const modeButtonConfig2 = [
        { zh: '线上模式', en: 'Online Mode', sendEventOnClick: 'online_click', receiveStateSelected: 'is_online_selected', receiveStateEnable: 'is_start_selected', iconUrl: ['./app/project/assets/img/onlineB.png', './app/project/assets/img/onlineW.png'], id: 'onlineButton' },
        { zh: '自定义模式', en: 'Custom Mode', sendEventOnClick: 'custom_click', receiveStateSelected: 'is_custom_selected', receiveStateEnable: 'is_start_selected', iconUrl: ['./app/project/assets/img/customB.png', './app/project/assets/img/customW.png'], id: 'customButton' },
    ]

    const modelDialogConfig = [
        { receiveStateShowPulse: 'daily_click', sendeventonok: 'daily_select' },
        { receiveStateShowPulse: 'teachA_click', sendeventonok: 'teachA_select' },
        { receiveStateShowPulse: 'teachB_click', sendeventonok: 'teachB_select' },
        { receiveStateShowPulse: 'online_click', sendeventonok: 'online_select' },
        { receiveStateShowPulse: 'custom_click', sendeventonok: 'custom_select' },
    ]

    const stateDialogeModel = [
        { prompt: "是否开始课程?", zh: '开始课程', en: 'Start the class', id: 'startSlider',show:'start_confirm_show' },
        { prompt: "是否结束课程?", zh: '结束课程', en: 'End the class', id: 'endSlider',show:'end_confirm_show' }
    ]

    function init() {
        initVideoControlButtons()
        initControlSlider()
        initControlStateButton()
        initLightingButton()
        initAllScreenButton()
        initModeButton()
        initModelDialog()
        initStateDialog()
    }

    function initVideoControlButtons() {
        videoControlButtons.map(id => {
            VideoControlModel.createControlButtons(id, videoControlButtonsData)
        })
    }

    function initControlSlider() {

        ToolModel.createContainer("microContain", "slider", 8)
        micorConfig.map((n, index) => {
            AudioControlModel.createSlider("slider" + index, n)
        })
    }

    function initControlStateButton() {
        ToolModel.createContainer("controlStateButtonContain", "controlStateButton", 3)

        controlStateButton.map((n, index) => {
            VideoControlModel.createStateButtons("controlStateButton" + index, n)
        })
    }

    function initLightingButton() {
        ToolModel.createContainer("LightingControl", "lightingButton", 6)
        lightingButtonConfig.map((n, index) => {
            ToolModel.doubleLayerButton("lightingButton" + index, n)
        })
    }

    function initAllScreenButton() {

        ToolModel.createContainer("AllScreen", "screenButton", 2)
        allScreenButtonConfig.map((n, index) => {
            ToolModel.doubleLayerButton("screenButton" + index, n)
        })

    }

    function initModeButton() {
        modeButtonConfig1.map(n => {
            ToolModel.doubleModeButton("modeButtonContainerA", n)
        })
        modeButtonConfig2.map(n => {
            ToolModel.doubleModeButton("modeButtonContainerB", n)
        })
    }

    function initModelDialog() {
        modelDialogConfig.map(n => {
            DialogModel.createModelDialog("home-page", n)
        })
    }

    function initStateDialog(){
        stateDialogeModel.map(n=>{
            DialogModel.createStateDialog("viewcontent",n)
        })
    }

    return {
        init
    }
})();
