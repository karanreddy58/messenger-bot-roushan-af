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
                  title:"Voice, SMS, Mixed and Data Bundles",
                //   image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                  buttons: [{
                    type: "postback",
                    title: 'Voice, SMS & More',
                    payload: "VOICE_SMS_MIXED"
                  }],
                },
                {
                    title:"Value Added Service",
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "postback",
                      title: 'Value Added Services',
                      payload: "VALUE_ADDED_SERVICES",
                    }]
                },
                {
                    title:"Credit Loan Information",
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "web_url",
                      title: 'Credit Loan Information',
                      url: "https://www.roshan.af/en/personal/products/vas-play/emergency-assistance/credit-loan/", 
                      webview_height_ratio: "full",
                    }]
                },
                {
                    title:"Balance Enquiry",
                    // image_url:"https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg",
                    buttons: [{
                      type: "postback",
                      title: 'Balance Enquiry',
                      payload: "BALANCE_ENQUIRY",
                    }]
                },
                {
                    title: 'Handset GPRS Settings',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'Handset GPRS Settings',
                        payload: 'GPRS_SETTINGS'
                    }]
                },
                {
                    title: 'My Current Package',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'My Current Package',
                        payload: 'MY_CURRENT_PACKAGE'
                    }]
                },
                {
                    title: '3G SERVICE',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: '3G Service',
                        payload: '3G_SERVICE'
                    }]
                },
                {
                    title: 'M Paisa',
                    // image_url: 'https://www.telecomstechnews.com/media/xsmart-city-and-telecommunication-network-concept-abstract-mixed-media-picture-id861165648.jpg.800x600_q96.png.pagespeed.ic.tMEamVT9w0.jpg',
                    buttons: [{
                        type: 'postback',
                        title: 'M Paisa',
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
                        title:"Roshan Millionaire Contest",
                        image_url:"https://www.roshan.af/Roshan/media/1126/personal-vas-play.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Roshan Millionaire Contest',
                                url: "https://www.roshan.af/en/personal/products/vas-play/roshan-sms-contest/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Music",
                        image_url:"https://www.roshan.af/Roshan/media/1108/personal-3g-internet-2.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Music',
                                url: "https://www.roshan.af/en/personal/products/vas-play/music/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Islamic Service",
                        image_url:"https://www.roshan.af/Roshan/media/1199/islamic.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Islamic Service',
                                url: "https://www.roshan.af/en/personal/products/vas-play/islamic-service/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Sports",
                        image_url:"https://www.roshan.af/Roshan/media/1201/sms.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Sports',
                                url: "https://www.roshan.af/en/personal/products/vas-play/sports/sports-services/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Entertainment",
                        image_url:"https://www.roshan.af/Roshan/media/1196/entertainment.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Entertainment',
                                url: "https://www.roshan.af/en/personal/products/vas-play/entertainment/game-services/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Emergency Assistance",
                        image_url:"https://www.roshan.af/Roshan/media/1108/personal-3g-internet-2.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Emergency Assistance',
                                url: "https://www.roshan.af/en/personal/products/vas-play/emergency-assistance/m-sharakat/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Information",
                        image_url:"https://www.roshan.af/Roshan/media/1198/infotainment.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Information',
                                url: "https://www.roshan.af/en/personal/products/vas-play/information/job-portal/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Education",
                        image_url:"https://www.roshan.af/Roshan/media/1195/education.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Education',
                                url: "https://www.roshan.af/en/personal/products/vas-play/education/tips-on-career-and-exams/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Utilities",
                        image_url:"https://www.roshan.af/Roshan/media/1201/sms.jpg",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Utilities',
                                url: "https://www.roshan.af/en/personal/products/vas-play/utilities/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                ]
            }
        }
    },
    BALANCE_ENQUIRY: {
        text: `1. Call to 444 to know your balance via SMS\n2. *444# to know your balance via SMS\n3. Call 333->1 to know your balance via IVR\n4. Call 555->2 to know your balance via IVR`
    },
    GPRS_SETTINGS: {
        text: 'Write in message GPRS and send to 167',
    },
    MY_CURRENT_PACKAGE: {
        text: 'Call to 333 then follow 2-1-2-2 to know your current offer/services.',
    },
    '3G_SERVICE': {
        text: 'Write 3G in message and send to 555 to get benefit from 3G service',
    },
    M_PAISA: {
        attachment:{
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: [
                    {
                        title:"Information",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Information',
                                url: "https://www.roshan.af/en/personal/m-paisa/information/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Promotion",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Promotion',
                                url: "https://www.roshan.af/en/personal/m-paisa/promotion/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"M-Paise Paybill",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'M-Paise Paybill',
                                url: "https://www.roshan.af/en/personal/m-paisa/m-paisa-paybill/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Buy Airtime",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Buy Airtime',
                                url: "https://www.roshan.af/en/personal/m-paisa/buy-airtime/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Domestic Money Transfer",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Domestic Money Transfer',
                                url: "https://www.roshan.af/en/personal/m-paisa/domestic-money-transfer/", 
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Other M-Paise Services",
                        image_url:"https://www.roshan.af/media/1555/mpaisa-landing-page.png",
                        buttons: [
                            {
                                type: "web_url",
                                title: 'Other M-Paise Services',
                                url: "https://www.roshan.af/en/personal/m-paisa/other-m-paisa-services/", 
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
                        title:"Voice Bundles",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'Voice Bundles',
                                payload: 'VOICE_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"SMS Bundles",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'SMS Bundles',
                                payload: 'SMS_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"Mixed Bundles",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'Mixed Bundles',
                                payload: 'MIXED_BUNDLES',
                            }
                        ],
                    },
                    {
                        title:"Data Bundles and Info",
                        image_url:"https://www.roshan.af/Roshan/media/1128/personal-voice_text.jpg",
                        buttons: [
                            {
                                type: "postback",
                                title: 'Data Bundles and info',
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
                text: 'What do you want to know about in data bundles? Please select an option.',
                buttons: [
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/en/personal/products/voice-text/voice-bundles/daily-bundles/',
                        title: 'Daily Bundles',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/en/personal/products/voice-text/voice-bundles/weekly-bundles/',
                        title: 'Weekly Bundles',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/en/personal/products/voice-text/voice-bundles/monthly-bundles/',
                        title: 'Monthly Bundles',
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
                        url: 'https://www.roshan.af/en/personal/products/voice-text/sms-bundles/daily-bundles/',
                        title: 'Daily Bundles',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/en/personal/products/voice-text/sms-bundles/weekly-bundles/',
                        title: 'Weekly Bundles',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/en/personal/products/voice-text/sms-bundles/monthly-bundles/',
                        title: 'Monthly Bundles',
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
                        url: 'https://www.roshan.af/en/personal/products/voice-text/mixed-bundles/daily-bundles/',
                        title: 'Daily Bundles',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/en/personal/products/voice-text/mixed-bundles/weekly-bundles/',
                        title: 'Weekly Bundles',
                        webview_height_ratio: "full",
                    },
                    {
                        type: 'web_url',
                        url: 'https://www.roshan.af/en/personal/products/voice-text/mixed-bundles/monthly-bundles/',
                        title: 'Monthly Bundles',
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
                        title:"Normal",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/en/personal/products/3ginternet/normal-data-bundles/',
                                title: 'Normal',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Social",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/en/personal/products/3ginternet/social-bundles/facebook-bundles/',
                                title: 'Social',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Internet & 3G Information",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/en/personal/products/3ginternet/internet-setting-3g-activation/',
                                title: 'Internet & 3G Information',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Data Transfer & Info",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/en/personal/products/3ginternet/data-transfer/',
                                title: 'Data Transfer & Info',
                                webview_height_ratio: "full",
                            }
                        ],
                    },
                    {
                        title:"Data Loan Info",
                        buttons: [
                            {
                                type: "web_url",
                                url: 'https://www.roshan.af/en/personal/products/3ginternet/data-loan/',
                                title: 'Data Transfer & Info',
                                webview_height_ratio: "full",
                            }
                        ],
                    },

                ]
            }
        }
    },

    THANK_YOU: {
        text: "Thank you! We have received your query, someone from the team shall get back in touch with you soon.",
    }
}