var UserName;
var LastLoginDate;
Ext.define('BuskartApp.view.LoginAyohaUser', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    requires: [
          'Ext.util.DelayedTask',
    ],
    xtype: 'LoginAyohaUser',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
       // scrollable: false,
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
                        docked: 'top',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        width: '100%',
                        //height: '35%',
                        height: 300,
                        items: [
                            {
                                xtype: 'container',
                                //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                                style: "background-color: transparent;",
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'right'
        
                                },
                                width: '100%',
                                height:10,
                                items:[
                                    {

                                        margin: '0 0 0 0',
                                        // height: 20,
                                        html: '<div class="blink_me" style="width:100%;background-color: orange;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:white;border-radius:5px 5px 5px 5px">&nbsp; - BETA VERSION - &nbsp;</div>'
                                    },
                                ]
                            },
                           
                             {
                               
                                // ori// margin: '10 0 0 -10',
                                 margin: '0 0 0 -10',
                                 height: 160,
                                 width: 160,
                                 //html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:160px;height:160px;">',
                                 html: '<img src="resources/icons/Logo/LogoWhiteSimplifed.png" alt="Image" style="width:160px;height:160px;">',

                                 
                             },
                             {

                                 margin: '0 0 0 0',
                                 // height: 20,
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 25px;font-weight:bold;color:white;">Ayoha Reward</div>'
                             },
                              {

                                  margin: '-3 0 0 0',
                                  // height: 20,
                                  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:white;">One hub, Double Rewards </div>'
                              },
                              
                        ]

                    },
                    {
                        xtype: 'container',
                        docked: 'bottom',
                       // margin: '-60 0 0 0',
                       // height: 400,
                        //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                        style: "background-color: transparent;",
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        width: '100%',
                       height: '53%',
                        items: [
                            {
                                xtype: 'container',
                                width: '100%',
                                //margin: '-20 0 0 0',
                                //zIndex: 100,
                               // height: 300,
                                //docked: 'bottom',
                                //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                                style: "background-color: transparent;",
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
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
                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;"><button OnClick="ForgotPassword()" class="buttonForgotPassword" style="margin:0px 0px 0px 0px;"><u>Forgot Password ?</u></button></div>'
                            },
                            {

                                margin: '18 0 0 0',
                                width: '100%',
                                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="loadAyohaUserProfileLoginBody()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Login xxx</button></div>'
                                //html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="loadAyohaUserProfile()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Login</button></div>'
                            },
                                ]

                            },
                             
                            //{
                            //    xtype: 'spacer',
                            //    height: '5%',
                            //},
                        
                        {
                            xtype: 'container',
                             docked: 'bottom',
                            //  style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 40%;background-repeat: no-repeat;',
                            style: "background-color: transparent;",
                            layout: {
                                type: 'vbox',
                                pack: 'end',
                                align: 'center'

                            },
                            width: '100%',
                            // height: 100,
                          //  height: '15%',
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
                                     html: '<div onclick="termandcondtionpage()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">By Signing up you are agree</div>'
                                 },

                                   {

                                       margin: '-3 0 0 0',
                                       // height: 20,
                                       html: '<div onclick="termandcondtionpage()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:grey;">to the <font color=purple><u><i>terms and conditions</i></u> </font> of services </div>'
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


function detectOs() {
    var OS;
    if (Ext.os.is('Android')) {

        OS = 'Andriod';


    } else
        if (Ext.os.is('Windows')) {
            OS = 'Windows';
        }
        else
            if (Ext.os.is('iOS')) {
                OS = 'iOS';
            }
            else
                if (Ext.os.is('iPad')) {
                    OS = 'iPad';
                }
                else
                    if (Ext.os.is('iPhone')) {
                        OS = 'iPhone';
                    }
                    else
                        if (Ext.os.is('iPod')) {
                            OS = 'iPod';
                        }
                        else
                            if (Ext.os.is('WebOS')) {
                                OS = 'WebOS';
                            }
                            else
                                if (Ext.os.is('Bada')) {
                                    OS = 'BlackBerry';
                                }
                                else
                                    if (Ext.os.is('MacOS')) {
                                        OS = 'MacOS';
                                    }
                                    else
                                        if (Ext.os.is('RIMTablet')) {
                                            OS = 'RIMTablet';
                                        }
                                        else
                                            if (Ext.os.is('Linux')) {
                                                OS = 'Linux';
                                            } else (OS = 'other')

    return OS;

}















function loadAyohaUserProfile() {
  


    //var UN =Ext.getCmp('loginuserNameTextField').getValue();
    //var PWD = Ext.getCmp('loginpasswordTextField').getValue();
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
    var UN = document.getElementById('ip2').value;
    var PWD = document.getElementById('ip3').value;

    console.log(UN);
    console.log(PWD);
    localStorage.setItem('CurrentUserLogin', UN);
    Ext.getStore('AyohaUserProfileLoginStore').getProxy().setExtraParams({
        UserName: UN,
        KataLaluan: PWD,
        //LoginOS: localStorage.getItem('device_platform'),
        //LoginIP: localStorage.getItem('device_ip'),
        //PhoneModel: localStorage.getItem('device_model'),
        //PhoneImeiNo: localStorage.getItem('device_uuid'),
        //PhoneVersion: localStorage.getItem('device_version'),
        //PhonePlatform: localStorage.getItem('device_platform'),
        //PhonePlatformVersion: localStorage.getItem('device_version'),
        //PhoneManufacturer: localStorage.getItem('device_manufacturer'),
        //PhoneSerial: GetCurrentdeviceserial(),
        //RawPhoneInfo: localStorage.getItem('SimInfo'),
        "LoginOS": "NotRequired",
        "LoginIP": "NotRequired",
        "PhoneModel": "NotRequired",
        "PhoneImeiNo": "NotRequired",
        "PhoneVersion": "NotRequired",
        "PhonePlatform": "NotRequired",
        "PhonePlatformVersion": "NotRequired",
        "PhoneManufacturer": "NotRequired",
        "PhoneSerial": "NotRequired",
        "RawPhoneInfo": "NotRequired",
        PlayerID: localStorage.getItem('player_id'),

    });
    Ext.StoreMgr.get('AyohaUserProfileLoginStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoginStore').getProxy().setExtraParams({
            UserName: UN,
            KataLaluan: PWD,
            //LoginOS: localStorage.getItem('device_platform'),
            //LoginIP: localStorage.getItem('device_ip'),
            //PhoneModel: localStorage.getItem('device_model'),
            //PhoneImeiNo: localStorage.getItem('device_uuid'),
            //PhoneVersion: localStorage.getItem('device_version'),
            //PhonePlatform: localStorage.getItem('device_platform'),
            //PhonePlatformVersion: localStorage.getItem('device_version'),
            //PhoneManufacturer: localStorage.getItem('device_manufacturer'),
            //PhoneSerial: GetCurrentdeviceserial(),
            //RawPhoneInfo: localStorage.getItem('SimInfo'),
            "LoginOS": "NotRequired",
            "LoginIP": "NotRequired",
            "PhoneModel": "NotRequired",
            "PhoneImeiNo": "NotRequired",
            "PhoneVersion": "NotRequired",
            "PhonePlatform": "NotRequired",
            "PhonePlatformVersion": "NotRequired",
            "PhoneManufacturer": "NotRequired",
            "PhoneSerial": "NotRequired",
            "RawPhoneInfo": "NotRequired",
            PlayerID: localStorage.getItem('player_id'),
        });
        Ext.StoreMgr.get('AyohaUserProfileLoginStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoginStore');
        var modelRecord = myStore.getAt(0);
        count = myStore.getCount();
      
       // Ext.getCmp('basicform').getTabBar().hide();
       
        if (count >= 1) {
          //  Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
            localStorage.setItem('AyohaUserAccountNo', modelRecord.get('AccountNo'));
            localStorage.setItem('AyohaUserKatalaluan', modelRecord.get('Katalaluan'));
            //routeCurrPage = '15';
            //routesArray.push("mainView,view,15");
            Ext.getCmp('mainView').setActiveItem(1);

      
            //Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + modelRecord.get('AyohaVersion') + '</b></font>');
            Ext.getCmp('btnMyAccount_DashboardRankIcon').setHidden(false);
            var AccountName = modelRecord.get('AccountName').substring(0, 7);
            Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '</b></font>');
            Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
            localStorage.setItem('AyohaVersion', modelRecord.get('AyohaVersion'));
            localStorage.setItem('AyohaUserGroupCode', modelRecord.get('AyohaUserGroupCode'));
            localStorage.setItem('AyohaUserPicProfile', modelRecord.get('Photo'));
            localStorage.setItem('AyohaUserAccountNames', modelRecord.get('AccountName'));
            localStorage.setItem('AyohaUserisUserVerified', modelRecord.get('isUserVerified'));


         

          
            if (AccountName == "Muhamma")
            {
              
                Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi Muham</b></font>');
            }

          
            initializeContainerSingleTapEvent();
            // Dashboard_NearestRedeem();
            Dashboard_AyohaUserDashBoardNearestRedeemItemStampCardStore();
            DashboardAyohaUserMainStore();
           // loadVIAAdvertisement();
           // FloatPanel_AyohaeWallet_IconShow();
            loadAdvertisementloadHotSeatStore();
            //
           // Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesContactUsLinkStore();
        } else {
            swalFireFail("Login Failed !");
            Ext.Viewport.setMasked(false);
        }
       // LoadingCustomMsgHide();
       








    });
    task.delay(1000);
}







var globalLogginAyohaUser_AyohaUserPicProfile;
var globalLogginAyohaUser_AyohaUserAccountNames;
var globalLogginAyohaUser_AyohaUserAccountNames_DisplayName;
var globalLogginAyohaUser_AccountNo_Display;
var globalLogginAyohaUser_UserVerifiedDate;
// function loadAyohaUserProfileLoginBody() {





//    // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
//  //   LoadingPanelShow(getLoadingIcon(), 'Login....');

//     var UN = document.getElementById('ip2').value;
//     var PWD = document.getElementById('ip3').value;
//     localStorage.setItem('CurrentUserLogin', UN);
//     localStorage.setItem('CurrentUserPassword', PWD);
//     var task = Ext.create('Ext.util.DelayedTask', function () {
//         var objn = {

//             "UserName": UN,
//             "Katalaluan": PWD,
//             "LoginOS":"NotRequired",
//             "LoginIP": "NotRequired",
//             "PhoneModel": "NotRequired",
//             "PhoneImeiNo": "NotRequired",
//             "PhoneVersion": "NotRequired",
//             "PhonePlatform": "NotRequired",
//             "PhonePlatformVersion": "NotRequired",
//             "PhoneManufacturer": "NotRequired",
//             "PhoneSerial": "NotRequired",
//             "RawPhoneInfo": "NotRequired",
//             //"LoginOS": localStorage.getItem('device_platform'),
//             //"LoginIP": localStorage.getItem('device_ip'),
//             //"PhoneModel": localStorage.getItem('device_model'),
//             //"PhoneImeiNo": localStorage.getItem('device_uuid'),
//             //"PhoneVersion": localStorage.getItem('device_version'),
//             //"PhonePlatform": localStorage.getItem('device_platform'),
//             //"PhonePlatformVersion": localStorage.getItem('device_version'),
//             //"PhoneManufacturer": localStorage.getItem('device_manufacturer'),
//             //"PhoneSerial": localStorage.getItem('device_serial'),
//             //"RawPhoneInfo": "NotRequired",
//             "PlayerID": localStorage.getItem('player_id'),
//         };
//         var _value = Ext.Ajax.request({

//             type: "POST",

//             url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoginBody',

//             dataType: "json",
//             data: JSON.stringify(objn),
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8"
//             },

//             success: function (result, request) {
//                 data = Ext.decode(result.responseText.trim());

//                 if (data.success == "true") {

//                     if (data.total > 0) {
//                         Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
//                         Ext.getCmp('tabpanelAyohaMerchantRewards').getTabBar().hide();
//                        Ext.getCmp('tabpanelDashboard_PerksInfo').getTabBar().hide();
//                         AyohaMerchantReward_InitializedTabEvent();
//                         localStorage.setItem('AyohaUserAccountNo',data.results[0].AccountNo);
//                         localStorage.setItem('AyohaUserKatalaluan', data.results[0].Katalalan);
//                         globalLogginAyohaUser_UserVerifiedDate = data.results[0].UserVerifiedDate;
                       

                    
//                         //routeCurrPage = '15';
//                         //routesArray.push("mainView,view,15");
//                       //  ArrappRoute.push("MainDashBoard");
//                         Ext.getCmp('mainView').setActiveItem(1);
//                         animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_Home');
//                       //  Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Ayoha-Reward</b></font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-5px 0px 0px 0px">' + data.results[0].AyohaVersion + '</div>');

//                         //Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + data.results[0].AyohaVersion + '</b></font>');
//                         var AccountName = data.results[0].AccountName.substring(0, 9);
//                        localStorage.setItem('AyohaUserAccountNameDisplay', AccountName);
//                        globalLogginAyohaUser_AyohaUserAccountNames_DisplayName=AccountName;
//                         //Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '</b></font>');
//                      // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>');
                        
//                       Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                      
                      
//                         // Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + data.results[0].Photo + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
//                         Ext.getCmp('btnMyAccount_DashboardPicProfileIcon').setHtml('<div ><img src="' + data.results[0].Photo + '"  style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>');



//                         localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
//                         localStorage.setItem('AyohaUserGroupCode',data.results[0].AyohaUserGroupCode);
//                        // localStorage.setItem('AyohaUserPicProfile',data.results[0].Photo);
//                         globalLogginAyohaUser_AyohaUserPicProfile = data.results[0].Photo;
//                        // localStorage.setItem('AyohaUserAccountNames', data.results[0].AccountName);
//                         globalLogginAyohaUser_AyohaUserAccountNames = data.results[0].AccountName;
//                         localStorage.setItem('AyohaUserisUserVerified',data.results[0].isUserVerified);
//                         localStorage.setItem('CurrPhoneNumber', data.results[0].PhoneNo);
//                         localStorage.setItem('AyohaUserVerifiedString', data.results[0].VerifyString);
//                         localStorage.setItem('AyohaUserEmail', data.results[0].Email);

//                         AppState.LoginAyohaUser.CurrPhoneNumber = data.results[0].CurrPhoneNumber;
//                         AppState.LoginAyohaUser.AyohaUserVerifiedString = data.results[0].AyohaUserVerifiedString;
//                         AppState.LoginAyohaUser.AyohaUserEmail = data.results[0].AyohaUserEmail;
//                         AppState.LoginAyohaUser.AyohaUserAccountNo = data.results[0].AccountName;
//                         AppState.LoginAyohaUser.AyohaUserKatalaluan = data.results[0].Katalaluan;
//                         AppState.LoginAyohaUser.AyohaVersion = data.results[0].AyohaVersion;
//                         AppState.LoginAyohaUser.AyohaUserGroupCode = data.results[0].AyohaUserGroupCode;
//                         AppState.LoginAyohaUser.AyohaUserPicProfile = data.results[0].Photo;
//                         AppState.LoginAyohaUser.AyohaUserAccountNames = data.results[0].AccountName;
//                         AppState.LoginAyohaUser.AyohaUserisUserVerified = data.results[0].isUserVerified;







//                         var AccountNoDisplay = data.results[0].AccountNo.split('-');
//                         localStorage.setItem('AccountNoDisplay', AccountNoDisplay[1] + '-' + AccountNoDisplay[2]);
//                         globalLogginAyohaUser_AccountNo_Display= AccountNoDisplay[1];
//                         AppState.LoginAyohaUser.AccountNoDisplay = AccountNoDisplay[1];
//                         CoreFunction_SetProfieAndGreeting(AccountName,data.results[0].isUserVerified);

//                         // alert(data.results[0].isUserVerified)
//                         // if (data.results[0].isUserVerified == "YES") {
//                         //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
//                         // }
//                         // if (data.results[0].isUserVerified == "NO") {
//                         //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
//                         // }






                       

//                         //if (AccountName == "Muhamma") {

//                         //    Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi Muham</b></font>');
//                         //}

                      
//                         initializeContainerSingleTapEvent();
//                         DashboardAyohaUserMainStore();
                      
//                         //AyohaRedeemPrize_LoadByRowStatusAndGCStore();
//                         Dashboard_LoadAyohaEwallet();
//                         initTapListener_AyohaMerchantsIcon();
                     
//                         loadAdvertisementloadHotSeatStore();
//                       //  Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
//                         AyohaMerchantReward_loadVIAAdvertisement();
//                        AyohaMerchantReward_containerDashboardMerchantRewardScroller();
//                        AyohaMerchantReward_Initialized_SearchText();
//                      //  SuccessCheckinController_DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo();
//                         //   FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbord_CountStore();
                      
//                     }
//                     if (data.total <= 0) {
//                         // swalFireFail("Login Failed!");
//                         LoadingPanelHide();
//                         swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
//                         //alert("Login Failed!");
//                         Ext.Viewport.unmask();

//                     }


//                 }
//                 else {
//                     LoadingPanelHide();
//                     swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
//                     Ext.Viewport.unmask();
//                 }
              

//             },

//             failure: function (result, request) {
//                 Ext.Viewport.unmask();
//                 LoadingPanelHide();
//                 swalFireLoginFailed("Login Failed!" + result.responseText.trim());
               
//             }

//         });
//     });
    
//     task.delay(1000);


// }

function loadAyohaUserProfileLoginBody() {

  var UN = document.getElementById('ip2').value;
  var PWD = document.getElementById('ip3').value;

  localStorage.setItem('CurrentUserLogin', UN);
  localStorage.setItem('CurrentUserPassword', PWD);

  var task = Ext.create('Ext.util.DelayedTask', function () {

    var objn = {
      "UserName": UN,
      "Katalaluan": PWD,
      "LoginOS": "NotRequired",
      "LoginIP": "NotRequired",
      "PhoneModel": "NotRequired",
      "PhoneImeiNo": "NotRequired",
      "PhoneVersion": "NotRequired",
      "PhonePlatform": "NotRequired",
      "PhonePlatformVersion": "NotRequired",
      "PhoneManufacturer": "NotRequired",
      "PhoneSerial": "NotRequired",
      "RawPhoneInfo": "NotRequired",
      "PlayerID": localStorage.getItem('player_id')
    };

    Ext.Ajax.request({
      url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoginBody',
      method: 'POST',
      jsonData: objn,

      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },

      success: function (response) {
        var data = Ext.decode((response.responseText || '').trim());

        if (data.success == "true") {

          if (data.total > 0) {
            Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
            Ext.getCmp('tabpanelAyohaMerchantRewards').getTabBar().hide();
            Ext.getCmp('tabpanelDashboard_PerksInfo').getTabBar().hide();

            AyohaMerchantReward_InitializedTabEvent();

            localStorage.setItem('AyohaUserAccountNo', data.results[0].AccountNo);
            localStorage.setItem('AyohaUserKatalaluan', data.results[0].Katalalan);
            globalLogginAyohaUser_UserVerifiedDate = data.results[0].UserVerifiedDate;

            Ext.getCmp('mainView').setActiveItem(1);
            animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_Home');

            var AccountName = data.results[0].AccountName.substring(0, 9);
            localStorage.setItem('AyohaUserAccountNameDisplay', AccountName);
            globalLogginAyohaUser_AyohaUserAccountNames_DisplayName = AccountName;

            Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml(
              '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br>' +
              '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' +
              AccountName.toUpperCase() +
              '</div>'
            );

            Ext.getCmp('btnMyAccount_DashboardPicProfileIcon').setHtml(
              '<div ><img src="' + data.results[0].Photo + '"  style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>'
            );
            

            localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
            localStorage.setItem('AyohaUserGroupCode', data.results[0].AyohaUserGroupCode);

            globalLogginAyohaUser_AyohaUserPicProfile = data.results[0].Photo;
            globalLogginAyohaUser_AyohaUserAccountNames = data.results[0].AccountName;

            localStorage.setItem('AyohaUserisUserVerified', data.results[0].isUserVerified);
            localStorage.setItem('CurrPhoneNumber', data.results[0].PhoneNo);
            localStorage.setItem('AyohaUserVerifiedString', data.results[0].VerifyString);
            localStorage.setItem('AyohaUserEmail', data.results[0].Email);

            AppState.LoginAyohaUser.CurrPhoneNumber = data.results[0].CurrPhoneNumber;
            AppState.LoginAyohaUser.AyohaUserVerifiedString = data.results[0].AyohaUserVerifiedString;
            AppState.LoginAyohaUser.AyohaUserEmail = data.results[0].AyohaUserEmail;
            AppState.LoginAyohaUser.AyohaUserAccountNo = data.results[0].AccountName;
            AppState.LoginAyohaUser.AyohaUserKatalaluan = data.results[0].Katalaluan;
            AppState.LoginAyohaUser.AyohaVersion = data.results[0].AyohaVersion;
            AppState.LoginAyohaUser.AyohaUserGroupCode = data.results[0].AyohaUserGroupCode;
            AppState.LoginAyohaUser.AyohaUserPicProfile = data.results[0].Photo;
            AppState.LoginAyohaUser.AyohaUserAccountNames = data.results[0].AccountName;
            AppState.LoginAyohaUser.AyohaUserisUserVerified = data.results[0].isUserVerified;

            var AccountNoDisplay = data.results[0].AccountNo.split('-');
            localStorage.setItem('AccountNoDisplay', AccountNoDisplay[1] + '-' + AccountNoDisplay[2]);
            globalLogginAyohaUser_AccountNo_Display = AccountNoDisplay[1];
            AppState.LoginAyohaUser.AccountNoDisplay = AccountNoDisplay[1];

            CoreFunction_SetProfieAndGreeting(AccountName, data.results[0].isUserVerified);

            initializeContainerSingleTapEvent();
            DashboardAyohaUserMainStore();
            Dashboard_LoadAyohaEwallet();
            initTapListener_AyohaMerchantsIcon();
            loadAdvertisementloadHotSeatStore();
            AyohaMerchantReward_loadVIAAdvertisement();
            AyohaMerchantReward_containerDashboardMerchantRewardScroller();
            AyohaMerchantReward_Initialized_SearchText();
          }

          if (data.total <= 0) {
            LoadingPanelHide();
            swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
            Ext.Viewport.unmask();
          }

        } else {
          LoadingPanelHide();
          swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
          Ext.Viewport.unmask();
        }
      },

      failure: function (response) {
        Ext.Viewport.unmask();
        LoadingPanelHide();
        swalFireLoginFailed("Login Failed!" + (response.responseText || '').trim());
      }
    });

  });

  task.delay(1000);
}


function loadUserProfileWithOutLogOut() {
   // Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
    Ext.getCmp('mainView').setActiveItem(1);


    // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Preparing....' });
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    var UN = localStorage.getItem('CurrentUserLogin');
    var PWD = localStorage.getItem('AyohaUserKatalaluan');
    localStorage.setItem('CurrentUserLogin', UN);
    localStorage.setItem('CurrentUserPassword', PWD);


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {

            "UserName": UN,
            "Katalaluan": PWD,
            "LoginOS": "NotRequired",
            "LoginIP": "NotRequired",
            "PhoneModel": "NotRequired",
            "PhoneImeiNo": "NotRequired",
            "PhoneVersion": "NotRequired",
            "PhonePlatform": "NotRequired",
            "PhonePlatformVersion": "NotRequired",
            "PhoneManufacturer": "NotRequired",
            "PhoneSerial": "NotRequired",
            "RawPhoneInfo": "NotRequired",
            //"LoginOS": localStorage.getItem('device_platform'),
            //"LoginIP": localStorage.getItem('device_ip'),
            //"PhoneModel": localStorage.getItem('device_model'),
            //"PhoneImeiNo": localStorage.getItem('device_uuid'),
            //"PhoneVersion": localStorage.getItem('device_version'),
            //"PhonePlatform": localStorage.getItem('device_platform'),
            //"PhonePlatformVersion": localStorage.getItem('device_version'),
            //"PhoneManufacturer": localStorage.getItem('device_manufacturer'),
            //"PhoneSerial": localStorage.getItem('device_serial'),
            //"RawPhoneInfo": "NotRequired",
            "PlayerID": localStorage.getItem('player_id'),
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoginBody',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    // if (data.total > 0) {
                    //  //   Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
                    //     localStorage.setItem('AyohaUserAccountNo', data.results[0].AccountNo);
                    //     localStorage.setItem('AyohaUserKatalaluan', data.results[0].Katalaluan);
                    //     Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
                    //     Ext.getCmp('tabpanelAyohaMerchantRewards').getTabBar().hide();
                    //     Ext.getCmp('tabpanelDashboard_PerksInfo').getTabBar().hide();
                    //     //routeCurrPage = '15';
                    //     //routesArray.push("mainView,view,15");
                    //     //  ArrappRoute.push("MainDashBoard");
                    //     Ext.getCmp('mainView').setActiveItem(1);

                    //    // Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Ayoha-Reward</b></font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-5px 0px 0px 0px">' + data.results[0].AyohaVersion + '</div>');

                    //     //Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + data.results[0].AyohaVersion + '</b></font>');
                    //     var AccountName = data.results[0].AccountName.substring(0, 9);
                    //     localStorage.setItem('AyohaUserAccountNameDisplay', AccountName);
                    //     //Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '</b></font>');
                    //    // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>');
                    //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                      
                      
                    //     // Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + data.results[0].Photo + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                    //     Ext.getCmp('btnMyAccount_DashboardPicProfileIcon').setHtml('<div ><img src="' + data.results[0].Photo + '"  style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>');



                    //     localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
                    //     localStorage.setItem('AyohaUserGroupCode', data.results[0].AyohaUserGroupCode);
                    //     localStorage.setItem('AyohaUserPicProfile', data.results[0].Photo);
                    //     localStorage.setItem('AyohaUserAccountNames', data.results[0].AccountName);
                    //     localStorage.setItem('AyohaUserisUserVerified', data.results[0].isUserVerified);
                    //     localStorage.setItem('CurrPhoneNumber', data.results[0].PhoneNo);
                    //     localStorage.setItem('AyohaUserVerifiedString', data.results[0].VerifyString);
                    //     localStorage.setItem('AyohaUserEmail', data.results[0].Email);

                    //     var AccountNoDisplay = data.results[0].AccountNo.split('-');
                    //     localStorage.setItem('AccountNoDisplay', AccountNoDisplay[1] + '-' + AccountNoDisplay[2]);
                    //     CoreFunction_SetProfieAndGreeting(AccountName,data.results[0].isUserVerified);

                    //     // if (data.results[0].isUserVerified == "YES") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
                    //     // }
                    //     // if (data.results[0].isUserVerified == "NO") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                    //     // }
                    //     // if (data.results[0].isUserVerified == "YES") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
                    //     // }
                    //     // if (data.results[0].isUserVerified == "NO") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                    //     // }






                    //     //if (AccountName == "Muhamma") {

                    //     //    Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi Muham</b></font>');
                    //     //}


                    //     initializeContainerSingleTapEvent();
                    //     Dashboard_AyohaUserDashBoardNearestRedeemItemStampCardStore();
                    //     DashboardAyohaUserMainStore();
                    //     //loadVIAAdvertisement();

                    //     //FloatPanel_AyohaeWallet_IconShow();
                    //     AyohaRedeemPrize_LoadByRowStatusAndGCStore();
                    //     // FloatPanel_Advertisement_FloatAdvertisementShow();
                    //     Dashboard_LoadAyohaEwallet();
                    //     initTapListener_AyohaMerchantsIcon();
                    //     //
                    //     //loadEnterprisesContactUsLinkStore();
                    //     loadAdvertisementloadHotSeatStore();
                    //     Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                     
                    //     // TestRoutePanelShow();
                    // }

                    if (data.total > 0) {
                        Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
                        Ext.getCmp('tabpanelAyohaMerchantRewards').getTabBar().hide();
                       Ext.getCmp('tabpanelDashboard_PerksInfo').getTabBar().hide();
                        AyohaMerchantReward_InitializedTabEvent();
                        localStorage.setItem('AyohaUserAccountNo',data.results[0].AccountNo);
                        localStorage.setItem('AyohaUserKatalaluan', data.results[0].Katalalan);
                        globalLogginAyohaUser_UserVerifiedDate = data.results[0].UserVerifiedDate;
                       

                    
                        //routeCurrPage = '15';
                        //routesArray.push("mainView,view,15");
                      //  ArrappRoute.push("MainDashBoard");
                        Ext.getCmp('mainView').setActiveItem(1);
                        animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_Home');
                      //  Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Ayoha-Reward</b></font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-5px 0px 0px 0px">' + data.results[0].AyohaVersion + '</div>');

                        //Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + data.results[0].AyohaVersion + '</b></font>');
                        var AccountName = data.results[0].AccountName.substring(0, 9);
                       localStorage.setItem('AyohaUserAccountNameDisplay', AccountName);
                       globalLogginAyohaUser_AyohaUserAccountNames_DisplayName=AccountName;
                        //Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '</b></font>');
                     // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>');
                        
                      Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                      
                      
                        // Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + data.results[0].Photo + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                        Ext.getCmp('btnMyAccount_DashboardPicProfileIcon').setHtml('<div ><img src="' + data.results[0].Photo + '"  style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>');



                        localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
                        localStorage.setItem('AyohaUserGroupCode',data.results[0].AyohaUserGroupCode);
                       // localStorage.setItem('AyohaUserPicProfile',data.results[0].Photo);
                        globalLogginAyohaUser_AyohaUserPicProfile = data.results[0].Photo;
                       // localStorage.setItem('AyohaUserAccountNames', data.results[0].AccountName);
                        globalLogginAyohaUser_AyohaUserAccountNames = data.results[0].AccountName;
                        localStorage.setItem('AyohaUserisUserVerified',data.results[0].isUserVerified);
                        localStorage.setItem('CurrPhoneNumber', data.results[0].PhoneNo);
                        localStorage.setItem('AyohaUserVerifiedString', data.results[0].VerifyString);
                        localStorage.setItem('AyohaUserEmail', data.results[0].Email);

                        AppState.LoginAyohaUser.CurrPhoneNumber = data.results[0].CurrPhoneNumber;
                        AppState.LoginAyohaUser.AyohaUserVerifiedString = data.results[0].AyohaUserVerifiedString;
                        AppState.LoginAyohaUser.AyohaUserEmail = data.results[0].AyohaUserEmail;
                        AppState.LoginAyohaUser.AyohaUserAccountNo = data.results[0].AccountName;
                        AppState.LoginAyohaUser.AyohaUserKatalaluan = data.results[0].Katalaluan;
                        AppState.LoginAyohaUser.AyohaVersion = data.results[0].AyohaVersion;
                        AppState.LoginAyohaUser.AyohaUserGroupCode = data.results[0].AyohaUserGroupCode;
                        AppState.LoginAyohaUser.AyohaUserPicProfile = data.results[0].Photo;
                        AppState.LoginAyohaUser.AyohaUserAccountNames = data.results[0].AccountName;
                        AppState.LoginAyohaUser.AyohaUserisUserVerified = data.results[0].isUserVerified;







                        var AccountNoDisplay = data.results[0].AccountNo.split('-');
                        localStorage.setItem('AccountNoDisplay', AccountNoDisplay[1] + '-' + AccountNoDisplay[2]);
                        globalLogginAyohaUser_AccountNo_Display= AccountNoDisplay[1];
                        AppState.LoginAyohaUser.AccountNoDisplay = AccountNoDisplay[1];
                        CoreFunction_SetProfieAndGreeting(AccountName,data.results[0].isUserVerified);

                        // alert(data.results[0].isUserVerified)
                        // if (data.results[0].isUserVerified == "YES") {
                        //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
                        // }
                        // if (data.results[0].isUserVerified == "NO") {
                        //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                        // }






                       

                        //if (AccountName == "Muhamma") {

                        //    Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi Muham</b></font>');
                        //}

                      
                        initializeContainerSingleTapEvent();
                        DashboardAyohaUserMainStore();
                      
                        AyohaRedeemPrize_LoadByRowStatusAndGCStore();
                        Dashboard_LoadAyohaEwallet();
                        initTapListener_AyohaMerchantsIcon();
                     
                        loadAdvertisementloadHotSeatStore();
                        Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                        AyohaMerchantReward_loadVIAAdvertisement();
                       AyohaMerchantReward_containerDashboardMerchantRewardScroller();
                       AyohaMerchantReward_Initialized_SearchText();
                     //  SuccessCheckinController_DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo();
                        //   FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbord_CountStore();
                      
                    }












                    if (data.total <= 0) {
                        // swalFireFail("Login Failed!");
                        LoadingPanelHide();
                        swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
                        //alert("Login Failed!");
                        Ext.Viewport.unmask();

                    }


                }
                else {
                    LoadingPanelHide();
                    swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                LoadingPanelHide();
                swalFireLoginFailed("Login Failed!" + result.responseText.trim());

            }

        });
    });
















    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    var objn = {

    //        "UserName": UN,
    //        "Katalaluan": PWD,
    //        //"LoginOS":"NotRequired",
    //        //"LoginIP": "NotRequired",
    //        //"PhoneModel": "NotRequired",
    //        //"PhoneImeiNo": "NotRequired",
    //        //"PhoneVersion": "NotRequired",
    //        //"PhonePlatform": "NotRequired",
    //        //"PhonePlatformVersion": "NotRequired",
    //        //"PhoneManufacturer": "NotRequired",
    //        //"PhoneSerial": "NotRequired",
    //        //"RawPhoneInfo": "NotRequired",
    //        "LoginOS": localStorage.getItem('device_platform'),
    //        "LoginIP": localStorage.getItem('device_ip'),
    //        "PhoneModel": localStorage.getItem('device_model'),
    //        "PhoneImeiNo": localStorage.getItem('device_uuid'),
    //        "PhoneVersion": localStorage.getItem('device_version'),
    //        "PhonePlatform": localStorage.getItem('device_platform'),
    //        "PhonePlatformVersion": localStorage.getItem('device_version'),
    //        "PhoneManufacturer": localStorage.getItem('device_manufacturer'),
    //        "PhoneSerial": localStorage.getItem('device_serial'),
    //        "RawPhoneInfo": localStorage.getItem('SimInfo'),
    //        "PlayerID": localStorage.getItem('player_id'),
    //    };
    //    var _value = Ext.Ajax.request({

    //        type: "POST",

    //        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoginBody',

    //        dataType: "json",
    //        data: JSON.stringify(objn),
    //        headers: {
    //            "Content-Type": "application/json; charset=utf-8"
    //        },

    //        success: function (result, request) {
    //            data = Ext.decode(result.responseText.trim());

    //            if (data.success == "true") {

    //                if (data.total > 0) {

    //                    localStorage.setItem('AyohaUserAccountNo', data.results[0].AccountNo);
    //                    localStorage.setItem('AyohaUserKatalaluan', data.results[0].Katalaluan);

    //                    //routeCurrPage = '15';
    //                    //routesArray.push("mainView,view,15");
    //                    //  ArrappRoute.push("MainDashBoard");



    //                    Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + data.results[0].AyohaVersion + '</b></font>');
    //                    var AccountName = data.results[0].AccountName.substring(0, 7);
    //                    // localStorage.setItem('AyohaUserAccountName', AccountName);
    //                    Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '</b></font>');
    //                    Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + data.results[0].Photo + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
    //                    localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
    //                    localStorage.setItem('AyohaUserGroupCode', data.results[0].AyohaUserGroupCode);
    //                    localStorage.setItem('AyohaUserPicProfile', data.results[0].Photo);
    //                    localStorage.setItem('AyohaUserAccountNames', data.results[0].AccountName);
    //                    localStorage.setItem('AyohaUserisUserVerified', data.results[0].isUserVerified);



    //                    if (AccountName == "Muhamma") {

    //                        Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi Muham</b></font>');
    //                    }


    //                    initializeContainerSingleTapEvent();
    //                    Dashboard_AyohaUserDashBoardNearestRedeemItemStampCardStore();
    //                    DashboardAyohaUserMainStore();
    //                    // loadVIAAdvertisement();
    //                    //FloatPanel_AyohaeWallet_IconShow();
    //                    AyohaRedeemPrize_LoadByRowStatusAndGCStore();
    //                    //
    //                    //loadEnterprisesContactUsLinkStore();
    //                    loadAdvertisementloadHotSeatStore();
    //                }
    //                if (data.total <= 0) {
    //                    swalFireFail("Login Failed!");
    //                    //alert("Login Failed!");
    //                    Ext.Viewport.unmask();

    //                }


    //            }
    //            else {

    //                swalFireFail("Login Failed!");
    //                Ext.Viewport.unmask();
    //            }


    //        },

    //        failure: function (result, request) {
    //            Ext.Viewport.unmask();
    //            swalFireFail("Login Failed!" + result.responseText.trim());

    //        }

    //    });
    //});

    task.delay(1000);


}










function loadAyohaUserProfileLoginBodyAfterCreatedAccount(valUserName,valKataLalu) {
   // console.log(getCurrentOs());

    //if (getCurrentOs() == "Windows") {
    //    localStorage.setItem("player_id", "webAccess_Windows");
    //} else if (getCurrentOs() == "MacOS") {
    //    localStorage.setItem("player_id", "webAccess_MacOS");
    //}else if (getCurrentOs() == "Linux") {
    //    localStorage.setItem("player_id", "webAccess_Linux");
    //}
    //else { 

    //    window.plugins.OneSignal.getPermissionSubscriptionState(function (status) {
    //        localStorage.setItem("player_id", status.subscriptionStatus.userId);

    //    });
    //}




   
    LoadingPanelShow(getLoadingIcon(), 'Login....');
    var UN = valUserName;
    var PWD = valKataLalu;
    localStorage.setItem('CurrentUserLogin', UN);
    localStorage.setItem('CurrentUserPassword', PWD);
   



    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {

            "UserName": UN,
            "Katalaluan": PWD,
            "LoginOS": "NotRequired",
            "LoginIP": "NotRequired",
            "PhoneModel": "NotRequired",
            "PhoneImeiNo": "NotRequired",
            "PhoneVersion": "NotRequired",
            "PhonePlatform": "NotRequired",
            "PhonePlatformVersion": "NotRequired",
            "PhoneManufacturer": "NotRequired",
            "PhoneSerial": "NotRequired",
            "RawPhoneInfo": "NotRequired",
            //"LoginOS": localStorage.getItem('device_platform'),
            //"LoginIP": localStorage.getItem('device_ip'),
            //"PhoneModel": localStorage.getItem('device_model'),
            //"PhoneImeiNo": localStorage.getItem('device_uuid'),
            //"PhoneVersion": localStorage.getItem('device_version'),
            //"PhonePlatform": localStorage.getItem('device_platform'),
            //"PhonePlatformVersion": localStorage.getItem('device_version'),
            //"PhoneManufacturer": localStorage.getItem('device_manufacturer'),
            //"PhoneSerial": localStorage.getItem('device_serial'),
            //"RawPhoneInfo": "NotRequired",
            "PlayerID": localStorage.getItem('player_id'),
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoginBody',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    // if (data.total > 0) {
                        
                    //    // Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
                    //     localStorage.setItem('AyohaUserAccountNo', data.results[0].AccountNo);
                    //     localStorage.setItem('AyohaUserKatalaluan', data.results[0].Katalaluan);
                    //     Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
                    //     Ext.getCmp('tabpanelAyohaMerchantRewards').getTabBar().hide();
                    //    Ext.getCmp('tabpanelDashboard_PerksInfo').getTabBar().hide();
                    //     //routeCurrPage = '15';
                    //     //routesArray.push("mainView,view,15");
                    //     //  ArrappRoute.push("MainDashBoard");
                    //     Ext.getCmp('mainView').setActiveItem(1);

                    //    // Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Ayoha-Reward</b></font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-5px 0px 0px 0px">' + data.results[0].AyohaVersion + '</div>');

                    //     //Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + data.results[0].AyohaVersion + '</b></font>');
                    //     var AccountName = data.results[0].AccountName.substring(0, 9);
                    //     localStorage.setItem('AyohaUserAccountNameDisplay', AccountName);
                    //     //Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '</b></font>');
                    //    // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>');
                    //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                      
                      
                    //     // Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + data.results[0].Photo + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                    //     Ext.getCmp('btnMyAccount_DashboardPicProfileIcon').setHtml('<div ><img src="' + data.results[0].Photo + '"  style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>');



                    //     localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
                    //     localStorage.setItem('AyohaUserGroupCode', data.results[0].AyohaUserGroupCode);
                    //     localStorage.setItem('AyohaUserPicProfile', data.results[0].Photo);
                    //     localStorage.setItem('AyohaUserAccountNames', data.results[0].AccountName);
                    //     localStorage.setItem('AyohaUserisUserVerified', data.results[0].isUserVerified);
                    //     localStorage.setItem('CurrPhoneNumber', data.results[0].PhoneNo);
                    //     localStorage.setItem('AyohaUserVerifiedString', data.results[0].VerifyString);
                    //     localStorage.setItem('AyohaUserEmail', data.results[0].Email);

                    //     var AccountNoDisplay = data.results[0].AccountNo.split('-');
                    //     localStorage.setItem('AccountNoDisplay', AccountNoDisplay[1] + '-' + AccountNoDisplay[2]);
                    //     CoreFunction_SetProfieAndGreeting(AccountName,data.results[0].isUserVerified);

                    //     // if (data.results[0].isUserVerified == "YES") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
                    //     // }
                    //     // if (data.results[0].isUserVerified == "NO") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                    //     // }
                    //     // if (data.results[0].isUserVerified == "YES") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
                    //     // }
                    //     // if (data.results[0].isUserVerified == "NO") {
                    //     //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                    //     // }






                    //     //if (AccountName == "Muhamma") {

                    //     //    Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi Muham</b></font>');
                    //     //}

                    //     FloatPanel_GraphicConfetiShow();
                    //     initializeContainerSingleTapEvent();                       
                    //     Dashboard_AyohaUserDashBoardNearestRedeemItemStampCardStore();
                    //     Ext.getCmp('htmlFloatPanel_GraphicConfeti_Success_ImgProfile').setHtml('<img src="' + data.results[0].Photo + '" style="width: 240px; height: 240px; border:1px solid white; border-radius: 50%; " alt="Company Name">');
                    //     Ext.getCmp('btnFloatPanel_GraphicConfeti_Success_textName').setHtml('<div style="background: transparent;width:80%;font-size: 20px;font-weight:bold;color:white;text-align:center;" ><b>' + data.results[0].AccountName + '</b></div>');
                    //     DashboardAyohaUserMainStore();
                    //     AyohaRedeemPrize_LoadByRowStatusAndGCStore();
                    //     Dashboard_LoadAyohaEwallet();
                    //     initTapListener_AyohaMerchantsIcon();
                    //     loadAdvertisementloadHotSeatStore();
                    //     Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    //     LoginAyohaUser_OneSignalCreateAccountMessage();
                      


                      

                    // }

                    if (data.total > 0) {
                        Ext.getCmp('tabpanelMyAccount_Dashboard').getTabBar().hide();
                        Ext.getCmp('tabpanelAyohaMerchantRewards').getTabBar().hide();
                       Ext.getCmp('tabpanelDashboard_PerksInfo').getTabBar().hide();
                        AyohaMerchantReward_InitializedTabEvent();
                        localStorage.setItem('AyohaUserAccountNo',data.results[0].AccountNo);
                        localStorage.setItem('AyohaUserKatalaluan', data.results[0].Katalalan);
                        globalLogginAyohaUser_UserVerifiedDate = data.results[0].UserVerifiedDate;
                       

                    
                        //routeCurrPage = '15';
                        //routesArray.push("mainView,view,15");
                      //  ArrappRoute.push("MainDashBoard");
                        Ext.getCmp('mainView').setActiveItem(1);
                        animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_Home');
                      //  Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Ayoha-Reward</b></font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-5px 0px 0px 0px">' + data.results[0].AyohaVersion + '</div>');

                        //Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + data.results[0].AyohaVersion + '</b></font>');
                        var AccountName = data.results[0].AccountName.substring(0, 9);
                       localStorage.setItem('AyohaUserAccountNameDisplay', AccountName);
                       globalLogginAyohaUser_AyohaUserAccountNames_DisplayName=AccountName;
                        //Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '</b></font>');
                     // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>');
                        
                      Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                      
                      
                        // Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + data.results[0].Photo + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                        Ext.getCmp('btnMyAccount_DashboardPicProfileIcon').setHtml('<div ><img src="' + data.results[0].Photo + '"  style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>');



                        localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
                        localStorage.setItem('AyohaUserGroupCode',data.results[0].AyohaUserGroupCode);
                       // localStorage.setItem('AyohaUserPicProfile',data.results[0].Photo);
                        globalLogginAyohaUser_AyohaUserPicProfile = data.results[0].Photo;
                       // localStorage.setItem('AyohaUserAccountNames', data.results[0].AccountName);
                        globalLogginAyohaUser_AyohaUserAccountNames = data.results[0].AccountName;
                        localStorage.setItem('AyohaUserisUserVerified',data.results[0].isUserVerified);
                        localStorage.setItem('CurrPhoneNumber', data.results[0].PhoneNo);
                        localStorage.setItem('AyohaUserVerifiedString', data.results[0].VerifyString);
                        localStorage.setItem('AyohaUserEmail', data.results[0].Email);

                        AppState.LoginAyohaUser.CurrPhoneNumber = data.results[0].CurrPhoneNumber;
                        AppState.LoginAyohaUser.AyohaUserVerifiedString = data.results[0].AyohaUserVerifiedString;
                        AppState.LoginAyohaUser.AyohaUserEmail = data.results[0].AyohaUserEmail;
                        AppState.LoginAyohaUser.AyohaUserAccountNo = data.results[0].AccountName;
                        AppState.LoginAyohaUser.AyohaUserKatalaluan = data.results[0].Katalaluan;
                        AppState.LoginAyohaUser.AyohaVersion = data.results[0].AyohaVersion;
                        AppState.LoginAyohaUser.AyohaUserGroupCode = data.results[0].AyohaUserGroupCode;
                        AppState.LoginAyohaUser.AyohaUserPicProfile = data.results[0].Photo;
                        AppState.LoginAyohaUser.AyohaUserAccountNames = data.results[0].AccountName;
                        AppState.LoginAyohaUser.AyohaUserisUserVerified = data.results[0].isUserVerified;







                        var AccountNoDisplay = data.results[0].AccountNo.split('-');
                        localStorage.setItem('AccountNoDisplay', AccountNoDisplay[1] + '-' + AccountNoDisplay[2]);
                        globalLogginAyohaUser_AccountNo_Display= AccountNoDisplay[1];
                        AppState.LoginAyohaUser.AccountNoDisplay = AccountNoDisplay[1];
                        CoreFunction_SetProfieAndGreeting(AccountName,data.results[0].isUserVerified);

                        // alert(data.results[0].isUserVerified)
                        // if (data.results[0].isUserVerified == "YES") {
                        //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
                        // }
                        // if (data.results[0].isUserVerified == "NO") {
                        //     Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
                        // }






                       

                        //if (AccountName == "Muhamma") {

                        //    Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi Muham</b></font>');
                        //}

                      
                        initializeContainerSingleTapEvent();
                        DashboardAyohaUserMainStore();
                      
                        AyohaRedeemPrize_LoadByRowStatusAndGCStore();
                        Dashboard_LoadAyohaEwallet();
                        initTapListener_AyohaMerchantsIcon();
                     
                        loadAdvertisementloadHotSeatStore();
                      //  Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                        AyohaMerchantReward_loadVIAAdvertisement();
                       AyohaMerchantReward_containerDashboardMerchantRewardScroller();
                       AyohaMerchantReward_Initialized_SearchText();
                     //  SuccessCheckinController_DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo();
                        //   FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbord_CountStore();
                      
                    }



                 


                    if (data.total <= 0) {
                        // swalFireFail("Login Failed!");
                        LoadingPanelHide();
                        swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
                        //alert("Login Failed!");
                        Ext.Viewport.unmask();

                    }


                }
                else {
                    LoadingPanelHide();
                    swalFireLoginFailed("<font color=red>Login Failed!</font>", "resources/icons/loginfailed01.png");
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                LoadingPanelHide();
                swalFireLoginFailed("Login Failed!" + result.responseText.trim());

            }

        });
    });

    task.delay(1000);


}



function LoginAyohaUser_OneSignalCreateAccountMessage() {
    
      








        var task = Ext.create('Ext.util.DelayedTask', function () {
            var objn = {

                "AccountName": localStorage.getItem('AyohaUserAccountNames'),
                "PlayerID": localStorage.getItem('player_id'),
            };
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/OneSignal/onesignalAPIAyohaNotificationUserProfileCreated',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {
                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {


                        LoadingPanelHide();
                    }
                    else {
                        LoadingPanelHide();
                        Ext.Viewport.unmask();
                    }


                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    LoadingPanelHide();

                }

            });
        });

        task.delay(500);
}



function ForgotPassword() {
   // alert(getCurrentOs());
   // alert(getOS());
    FloatPanel_ForgotPasswordShow();
}





var slideIndex = 0;




function loadEnterprisesContactUsLinkStore() {
    Ext.getStore('EnterprisesContactUsLinkStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

    });
    Ext.StoreMgr.get('EnterprisesContactUsLinkStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisesContactUsLinkStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('EnterprisesContactUsLinkStore').load();
        var myStore = Ext.getStore('EnterprisesContactUsLinkStore');
        var count = myStore.getCount();
        var modelRecord = myStore.getAt(0);







        if (count >= 1) {

            localStorage.setItem("EnterprisePhoneNo", modelRecord.get('EnterprisePhoneNo'));
            localStorage.setItem("EnterpriseEmail", modelRecord.get('EnterpriseEmail'));
            localStorage.setItem("EnterpriseWebsite", modelRecord.get('EnterpriseWebsite'));
            localStorage.setItem("EnterpriseFacebook", modelRecord.get('EnterpriseFacebook'));
            localStorage.setItem("EnterpriseTwiter", modelRecord.get('EnterpriseTwiter'));
            localStorage.setItem("EnterpriseInstagram", modelRecord.get('EnterpriseInstagram'));
            localStorage.setItem("EnterpriseCoordinate", modelRecord.get('EnterpriseCoordinate'));
            localStorage.setItem("PICContactNo", modelRecord.get('PICContactNo'));
            localStorage.setItem("PersonInCharge", modelRecord.get('PersonInCharge'));

        } else {
            localStorage.setItem("EnterprisePhoneNo", "NA");
            localStorage.setItem("EnterpriseEmail", "NA");
            localStorage.setItem("EnterpriseWebsite", "NA");
            localStorage.setItem("EnterpriseFacebook", "NA");
            localStorage.setItem("EnterpriseTwiter", "NA");
            localStorage.setItem("EnterpriseInstagram", "NA");
            localStorage.setItem("EnterpriseCoordinate", "NA");
            localStorage.setItem("PICContactNo", "NA");
            localStorage.setItem("PersonInCharge", "NA");
        }










        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);
}






function termandcondtionpage() {
   
    window.open('https://setkita.com/termandcondition.html', '_system'); return false;
}