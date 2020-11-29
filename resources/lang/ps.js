module.exports = {
    GET_STARTED: {
        text: "مهرباني وکړئ د خپلې خوښې ژبه وټاکئ",
        quick_replies:[
            {
                content_type: 'text',
                title: 'English',
                payload: 'SHOW_SELECTION|en',
            },
            {
                content_type: 'text',
                title: 'پښتو',
                payload: 'SHOW_SELECTION|ps',
            },
            {
                content_type: 'text',
                title: 'دري',
                payload: 'SHOW_SELECTION|prs',
            },
        ]
    },

    SHOW_SELECTION: {
        attachment:{
            type:"template",
            payload:{
              template_type:"generic",
              elements:[
                {
                  title:"اړیکې، لیکلي پیغامونه، میکس بنډلونه او انټرنټي بنډلونه.",
                //   image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                  buttons: [{
                    type: "postback",
                    title: 'اړیکې، لیکلي پیغامونه، میکس بنډلونه او انټرنټي بنډلونه.',
                    payload: "VOICE_SMS_MIXED"
                  }],
                },
                {
                    title: 'ارزښتمن خدمتونه',
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "postback",
                      title: 'ارزښتمن خدمتونه',
                      payload: "VALUE_ADDED_SERVICES",
                    }]
                },
                {
                    title:"د کرېډټ پور خدمتونه",
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "web_url",
                      title: 'د کرېډټ پور خدمتونه',
                      url: "https://www.roshan.af/ps/personal/products/vas-play/emergency-assistance/credit-loan/", 
                      webview_height_ratio: "full",
                    }]
                },
                {
                    title:"د کرېډټ اندازې پوښتنې",
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "postback",
                      title: 'د کرېډټ اندازې پوښتنې',
                      payload: "BALANCE_ENQUIRY",
                    }]
                },
                {
                    title: 'د انټرنټ تنظیمات په موبایل کې',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'د انټرنټ تنظیمات په موبایل کې',
                        payload: 'GPRS_SETTINGS'
                    }]
                },
                {
                    title: 'زما اوسني بنډلونه',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'زما اوسني بنډلونه',
                        payload: 'MY_CURRENT_PACKAGE'
                    }]
                },
                {
                    title:'3G خدمتونه',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title:'3G خدمتونه',
                        payload: '3G_SERVICE'
                    }]
                },
                {
                    title: 'ام پیسه',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'ام پیسه',
                        payload: 'M_PAISA'
                    }]
                }
              ]
            }
          }
    },
    VALUE_ADDED_SERVICES: {
        attachment:{
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: [
                    {
                        title:"د روشن میلیونر خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1126/personal-vas-play.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'د روشن میلیونر خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/millionaire-contest/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"ذهني سیالۍ",
                        image_url:"https://www.roshan.af/Roshan/media/1108/personal-3g-internet-2.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'ذهني سیالۍ',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/music/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"د موسیقي خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1199/islamic.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'د موسیقي خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/islamic-service/islamic-service/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"اسلامي خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1201/sms.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'اسلامي خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/sports/live-commentary/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"ورزشي خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1196/entertainment.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'ورزشي خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/entertainment/game-services/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"تفریحي خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1108/personal-3g-internet-2.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'تفریحي خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/emergency-assistance/m-sharakat/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"بېړني خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1198/infotainment.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'بېړني خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/information/job-portal/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"معلوماتي خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1195/education.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'معلوماتي خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/education/tips-on-career-and-exams/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"ښوونیز خدمتونه",
                        image_url:"https://www.roshan.af/Roshan/media/1201/sms.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'ښوونیز خدمتونه',
                                url: "https://www.roshan.af/ps/personal/products/vas-play/utilities/missed-call-notification/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                ]
            }
        }
    },
    BALANCE_ENQUIRY: {
        text: `د ۴۴۴ شمېرې سره په اړیکه کې شئ او د خپل کریډټ اندازه د لیکلي پیغام له لارې مالومه کړئ.
        *444# ډایل کړئ او د خپل کریډټ اندازه د لیکلي پیغام له لارې مالومه کړئ.
        د ۳۳۳شمېرې سره په اړیکه کې شئ او د ۱ تڼۍ  په کېکاږلو سره د اړیکې له لارې د خپل کرېډټ اندازه مالومه کړئ.
        د ۵۵۵ شمېرې سره په اړیکه کې شئ او د کریډټ اندازه مو مالومه کړئ`
    },
    GPRS_SETTINGS: {
        text: 'په پیغام پاڼه کې GPRS ولیکئ او ۱۶۷ شمېرې ته یې واستوئ.',
    },
    MY_CURRENT_PACKAGE: {
        text: 'د ۳۳۳ شمېرې سره په اړیکه کې شئ او بیا 2-1-2-2 تڼۍ کېکاږئ او د خپل اوسني بنډلونو او خدمتونو په اړه پوه شئ.',
    },
    '3G_SERVICE': {
        text: 'د 3 جي خدمتونو فعالولو لپاره په پیغام پاڼه کې 3G ولیکئ او ۵۵۵ ته یې واستوئ.',
    },
    M_PAISA: {
        attachment:{
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: [
                    {
                        title:"معلومات",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'معلومات',
                                url: "https://www.roshan.af/ps/personal/m-paisa/information/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"وړاندیزونه",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'وړاندیزونه',
                                url: "https://www.roshan.af/ps/personal/m-paisa/promotion/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"د برښنا بل تأدیه کول د ام پیسه له لارې",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: "د برښنا بل تأدیه کول د ام پیسه له لارې",
                                url: "https://www.roshan.af/ps/personal/m-paisa/m-paisa-paybill/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"د کریډټ پیریدل",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'د کریډټ پیریدل',
                                url: "https://www.roshan.af/ps/personal/m-paisa/buy-airtime/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"پیسې استول",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'پیسې استول',
                                url: "https://www.roshan.af/ps/personal/m-paisa/domestic-money-transfer/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"د ام پیسه نور خدمتونه",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'د ام پیسه نور خدمتونه',
                                url: "https://www.roshan.af/ps/personal/m-paisa/other-m-paisa-services/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                ]
            }
        }
    },

    VOICE_SMS_MIXED: {
        attachment:{
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: [
                    {
                        title:"د اړیکې بنډلونه",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'د اړیکې بنډلونه',
                                payload: 'VOICE_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"د لیکلي پیغام بنډلونه",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'د لیکلي پیغام بنډلونه',
                                payload: 'SMS_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"مېکس بنډلونه",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'مېکس بنډلونه',
                                payload: 'MIXED_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"انټرنټي بنډلونه",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'انټرنټي بنډلونه',
                                payload: 'DATA_BUNDLE_INFO',
                            }
                        ],
                    },
                ]
            }
        }
    },

    VOICE_BUNDLES: {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'button',
                text: 'تاسو غواړئ  د اړیکې بنډلونو په اړه  په څه پوه شئ؟ مهرباني وکړئ یوه غوراوي وټاکئ',
                buttons: [
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/voice-bundles/daily-bundles/',
                        title: 'ورځني بنډلونه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/voice-bundles/weekly-bundles/',
                        title: 'اونیز بنډلونه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/voice-bundles/monthly-bundles/',
                        title: 'میاشتني بنډلونه',
                        webview_height_ratio: "full",
                    }
                ]
            }
        }
    },

    SMS_BUNDLES: {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'button',
                text: 'تاسو غواړئ  د لیکلي پیغام بنډلونو په اړه  په څه پوه شئ؟ مهرباني وکړئ یوه غوراوي وټاکئ',
                buttons: [
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/sms-bundles/daily-bundles/',
                        title: 'ورځڼي بنډلونه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/sms-bundles/weekly-bundles/',
                        title: 'اونیز بنډلونه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/sms-bundles/monthly-bundles/',
                        title: 'میاشتني بنډلونه',
                        webview_height_ratio: "full",
                    }
                ]
            }
        }
    },

    MIXED_BUNDLES: {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'button',
                text: 'تاسو غواړئ  د میکس  بنډلونو په اړه  په څه پوه شئ؟ مهرباني وکړئ یوه غوراوي وټاکئ',
                buttons: [
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/mixed-bundles/daily-bundles/',
                        title: 'ورځڼي بنډلونه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/mixed-bundles/weekly-bundles/',
                        title: 'اونیز بنډلونه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/ps/personal/products/voice-text/mixed-bundles/monthly-bundles/',
                        title: 'میاشتني بنډلونه',
                        webview_height_ratio: "full",
                    }
                ]
            }
        }
    },

    DATA_BUNDLE_INFO: {
        attachment:{
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: [
                    {
                        title:"نورمال",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/ps/personal/products/3ginternet/normal-data-bundles/',
                                title: 'نورمال',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"ټولنیز",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/ps/personal/products/3ginternet/social-bundles/facebook-bundles/',
                                title: 'ټولنیز',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:'3G اطلاعات اینترنت و',
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/ps/personal/products/3ginternet/internet-setting-3g-activation/',
                                title:'3G اطلاعات اینترنت و',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"د انټرنټ استولو په اړه معلومات",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/ps/personal/products/3ginternet/data-transfer/',
                                title: 'د انټرنټ استولو په اړه معلومات',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"د انټرنټ پور په اړه معلومات",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/ps/personal/products/3ginternet/data-loan/',
                                title: 'د انټرنټ پور په اړه معلومات',
                                webview_height_ratio: "full",
                            }
                        ],
                    },

                ]
            }
        }
    },

    THANK_YOU: {
        text: 'مننه! موږ ستاسو پوښتنې ترلاسه کړې ، د ډلې څخه یو څوک به ژر ستاسو سره تماس ونیسي.',
    }
}