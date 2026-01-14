
var UserName;
var LastLoginDate;
Ext.define('BuskartApp.view.AyohaLogin', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'AyohaLogin',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
        scrollable: false,
        style: "background-color:white;",
        //  style: "background-color: white; color:black;",
        //   style: 'background-image: url("resources/icons/latestCmoveloginNochart.png"); background-size: 100% 100%;border-bottom:1px none;background-repeat: no-repeat;',
       // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       // style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 30%;border-bottom:1px none;',
        items: [


            
          


            {
                xtype: 'container',
                style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 280px;background-repeat: no-repeat;',
              //  style: "background-color: transparent;",
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                items: [

                    {
                        xtype: 'container',
                      //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                        style: "background-color: transparent;",
                        docked:'top',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        width: '100%',
                        height:300,
                        items: [
                             {
                                 margin: '10 0 0 0',
                                 height: 160,
                                 width: 160,
                                 html: '<img src="resources/icons/ayohaReward01.gif" alt="Image" style="width:160px;height:160px;">',
                             },
                             {
                               
                                 margin: '0 0 0 0',
                                 // height: 20,
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 25px;font-weight:bold;color:white;">Ayoha Rewards</div>'
                             },
                              {

                                  margin: '-3 0 0 0',
                                  // height: 20,
                                  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:white;">Double Tripel Bonus Rewards</div>'
                              },
                        ]

                    },
                    {
                        xtype: 'container',
                        //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                        style: "background-color: transparent;",                     
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        width: '100%',
                        height: '100%',
                        items: [
                             {

                                 margin: '0 0 0 -200',
                                 // height: 20,
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:normal;color:grey;">User Login</div>'
                             },

                            {
                                html: '<input type="text" id="ip2" placeHolder="Email"/>'
                            },
                             {
                                 margin: '10 0 0 0',
                                 html: '<input type="password" id="ip3" placeHolder="Password"/>'
                             },
                            {

                                margin: '20 0 0 150',
                                // height: 20,
                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;"><u>Forgot Password ?</u></div>'
                            },
                            {
                                margin: '18 0 0 0',
                                width:'100%',
                                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="loadAyohaUserProfile()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Login</button></div>'
                            },

                        {
                            xtype: 'container',
                            docked:'bottom',
                            //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                            style: "background-color: transparent;",
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'

                            },
                            width: '100%',
                            height: 100,
                            items: [

                                {
                                    margin: '0 0 0 0',
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">Dont Have Ayoha Account ?.</div>'
                                },
                                 {
                                     margin: '-5 0 0 0',
                                     width: '100%',
                                     html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AyohaUserRegistrationAddNewShow()" class="buttonRegisterNow" style="margin:0px 0px 0px 0px;">Sign Up Now!</button></div>'
                                 },

                                 {

                                     margin: '-5 0 0 0',
                                     // height: 20,
                                     html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">By Signing up you are agree</div>'
                                 },

                                   {

                                       margin: '-3 0 0 0',
                                       // height: 20,
                                       html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">to the terms and conditions of services </div>'
                                   },
                               

                            ]
                    }

                        ]

                    },


                      

                ]

            },







            






        ]
    },
    initialize: function () {


    }
});



