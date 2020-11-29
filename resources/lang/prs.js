module.exports = {
    GET_STARTED: {
        text: "Please select a language:",
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
                  title:"تماس، پیام های کتبی، بسته های میکس و بسته های انترنتی",
                //   image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                  buttons: [{
                    type: "postback",
                    title: 'تماس، پیام های کتبی، بسته های میکس و بسته های انترنتی',
                    payload: "VOICE_SMS_MIXED"
                  }],
                },
                {
                    title:"خدمات با ارزش",
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "postback",
                      title: 'خدمات با ارزش',
                      payload: "VALUE_ADDED_SERVICES",
                    }]
                },
                {
                    title: 'خدمات قرضه دهي',
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "web_url",
                      title: 'خدمات قرضه دهي',
                      url: "https://www.roshan.af/dari/personal/products/vas-play/emergency-assistance/credit-loan/", 
                      webview_height_ratio: "full",
                    }]
                },
                {
                    title:"پرسشهای مقدار کریدت",
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "postback",
                      title: 'پرسشهای مقدار کریدت',
                      payload: "BALANCE_ENQUIRY",
                    }]
                },
                {
                    title: 'تنظيمات انترنت',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'تنظيمات انترنت',
                        payload: 'GPRS_SETTINGS'
                    }]
                },
                {
                    title: 'بسته های فعلی من',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'بسته های فعلی من',
                        payload: 'MY_CURRENT_PACKAGE'
                    }]
                },
                {
                    title:'3G خدمات',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title:'3G خدمات',
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
                        title:"خدمات ملیونر روشن",
                        image_url:"https://www.roshan.af/Roshan/media/1126/personal-vas-play.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات ملیونر روشن',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/roshan-sms-contest/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"رقابت ذهنی",
                        image_url:"https://www.roshan.af/Roshan/media/1108/personal-3g-internet-2.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'رقابت ذهنی',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/music/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خدمات موسیقی",
                        image_url:"https://www.roshan.af/Roshan/media/1199/islamic.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات موسیقی',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/islamic-service/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خدمات اسلامی",
                        image_url:"https://www.roshan.af/Roshan/media/1201/sms.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات اسلامی',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/sports/sports-services/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خدمات ورزشی",
                        image_url:"https://www.roshan.af/Roshan/media/1196/entertainment.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات ورزشی',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/entertainment/game-services/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خدمات تفریحی",
                        image_url:"https://www.roshan.af/Roshan/media/1108/personal-3g-internet-2.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات تفریحی',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/emergency-assistance/m-sharakat/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خدمات عاجل",
                        image_url:"https://www.roshan.af/Roshan/media/1198/infotainment.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات عاجل',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/information/job-portal/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خدمات معلوماتی",
                        image_url:"https://www.roshan.af/Roshan/media/1195/education.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات معلوماتی',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/education/tips-on-career-and-exams/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خدمات آموزشی",
                        image_url:"https://www.roshan.af/Roshan/media/1201/sms.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خدمات آموزشی',
                                url: "https://www.roshan.af/dari/personal/products/vas-play/utilities/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                ]
            }
        }
    },
    BALANCE_ENQUIRY: {
        text: `با شماره 444 به تماس شده و مقدار کریدت تان را از طریق پیام کتبی معلوم نمایید.
        *444# را دایل نموده و مقدار کریدت تان را از طریق پیام کتبی معلوم نمایید.
        با شماره 333 به تماس شده و با فشار دادن کلید 1 از طریق تماس مقدار کریدت تانرا معلوم نمایید. 
        با شماره 555 به تماس شده و با فشار دادن کلید 1 از طریق تماس مقدار کریدت تانرا معلوم نمایید. 
        `
    },
    GPRS_SETTINGS: {
        text: 'در صفحه پیام کتبی GPRS نوشته و به شماره 167 ارسال کنید.',
    },
    MY_CURRENT_PACKAGE: {
        text: 'با شماره 333 به تماس شده و با تعقیب شماره 2-1-2-2 در مورد بسته ها و خدمات فعلی تان بدانید.',
    },
    '3G_SERVICE': {
        text: 'برای فعالسازی خدمات 3 جی در صفحه پیام کتبی 3G نوشته و به 555 ارسال کنید.',
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
                                url: "https://www.roshan.af/dari/personal/m-paisa/information/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"پیشکش ها",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'پیشکش ها',
                                url: "https://www.roshan.af/dari/personal/m-paisa/promotion/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"پرداخت بل برق از طریق ام پیسه",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'پرداخت بل برق از طریق ام پیسه',
                                url: "https://www.roshan.af/dari/personal/m-paisa/m-paisa-paybill/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"خریداری کریدت",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'خریداری کریدت',
                                url: "https://www.roshan.af/dari/personal/m-paisa/buy-airtime/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"ارسال پول",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'ارسال پول',
                                url: "https://www.roshan.af/dari/personal/m-paisa/domestic-money-transfer/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"سایر خدمات ام پیسه",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'سایر خدمات ام پیسه',
                                url: "https://www.roshan.af/dari/personal/m-paisa/other-m-paisa-services/", 
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
                        title:"بسته های تماس",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'بسته های تماس',
                                payload: 'VOICE_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:" بسته های پیام های کتبی",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: ' بسته های پیام های کتبی',
                                payload: 'SMS_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"بسته های میکس",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'بسته های میکس',
                                payload: 'MIXED_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"بسته های انترنتی",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'بسته های انترنتی',
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
                text: 'چه چیزی را می خواهید در بسته های داده بدانید؟ لطفا یک گزینه را انتخاب کنید.',
                buttons: [
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/voice-bundles/daily-bundles/',
                        title: 'بسته های روزانه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/voice-bundles/weekly-bundles/',
                        title: 'بسته های هفتگی',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/voice-bundles/monthly-bundles/',
                        title: 'بسته های ماهانه',
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
                text: 'What do you want to know about in SMS bundles? Please select an option.',
                buttons: [
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/sms-bundles/daily-bundles/',
                        title: 'بسته های روزانه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/sms-bundles/weekly-bundles/',
                        title: 'بسته های هفتگی',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/sms-bundles/monthly-bundles/',
                        title: 'بسته های ماهانه',
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
                text: 'What do you want to know about in mixed bundles? Please select an option.',
                buttons: [
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/mixed-bundles/daily-bundles/',
                        title: 'بسته های روزانه',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/mixed-bundles/weekly-bundles/',
                        title: 'بسته های هفتگی',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/dari/personal/products/voice-text/mixed-bundles/monthly-bundles/',
                        title: 'بسته های ماهانه',
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
                        title:"معمولی",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/dari/personal/products/3ginternet/normal-data-bundles/',
                                title: 'معمولی',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"اجتماعی",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/dari/personal/products/3ginternet/social-bundles/facebook-bundles/',
                                title: 'اجتماعی',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"اطلاعات اینترنت و 3G",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/dari/personal/products/3ginternet/internet-setting-3g-activation/',
                                title: 'اطلاعات اینترنت و 3G',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"انتقال داده ها و اطلاعات",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/dari/personal/products/3ginternet/data-transfer/',
                                title: 'انتقال داده ها و اطلاعات',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"اطلاعات وام داده ها",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/dari/personal/products/3ginternet/data-loan/',
                                title: 'اطلاعات وام داده ها',
                                webview_height_ratio: "full",
                            }
                        ],
                    },

                ]
            }
        }
    },

    THANK_YOU: {
        text: "متشکرم! ما درخواست شما را دریافت کردیم ، فردی از تیم به زودی با شما در تماس خواهد بود.",
    }
}