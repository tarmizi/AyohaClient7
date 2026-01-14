
Ext.define('BuskartApp.view.Membership.FloatPanel_Membership_CheckInPage', {

});



var _FloatPanel_Membership_CheckInPage;


var isFloatPanel_Membership_CheckInPageOpen = 'N';






// function FloatPanel_Membership_CheckInPage() {

//     _FloatPanel_Membership_CheckInPage =
//     Ext.create('Ext.Container', {
//         zIndex: 95,
//         xtype: 'container',
//         height: 530,
//         //height: '100%',
//         width: '90%',
//         id: 'FloatPanel_Membership_CheckInPageID',
//         draggable: false,

//         styleHtmlContent: true,

//         centered: true,
//         //bottom: 64,
//         // zIndex: 100,
//        // modal: true,
//         // hideOnMaskTap: true,
//         // width         : Ext.os.is.Phone ? '92%' : 420,
//         // height        : Ext.os.is.Phone ? 460 : 500,
//       //  cls           : 'ayo-modal-card',
//         layout: {
//           type: 'fit'
//         //   type: 'vbox',
//         //   pack: 'start',
//         //   align: 'center'
//         },
//         showAnimation: {
//             type: 'popIn',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         hideAnimation: {
            


//             type: 'popOut',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         style: 'border:1px grey solid;background-color:white;border-radius:10px',
//        // style: 'background-color:white;',
//        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      
//         items: [
           

           
//             {
//                 xtype: 'container',
//                 width: '100%',
//                 height: '100%',
//                 id: 'FloatPanel_Membership_CheckInPageListContentID',
//                 layout: {
//                     type: 'vbox',
//                     pack: 'start',
//                     align: 'center'

//                 },
//                 style: 'background-color:transparent',

//                 items: [
//                     {
//                         xtype: 'container',
//                         cls  : 'ayo-modal-head',
//                         items: [
//                             { xtype:'component', html:'<div class="ayo-modal-icon">🎁</div>' },
                           
//                         ]
//                     },


//                     {
//                         margin: '-20 0 0 0',
//                         html: '<div style="background: transparent;width:100%;font-size: 16px;font-weight:normal;black:white;text-align:center;" >Ayoha Reward Membership</div>',
//                     },
//                     {
//                         margin: '0 0 0 0',
//                         html: '<div style="background: transparent;width:100%;font-size: 22px;font-weight:bold;black:white;text-align:justify;" >Check-In Point Loyalty</div>',
//                     },
//                     {  
//                         xtype: 'container',
//                         width: '90%',
//                         height: 1,
//                         style: 'background-color: #ECF0F1;',

//                     },
//                     {  
//                         xtype: 'container',
//                         width: '100%',
//                         height: 60,

//                     },
//                     //{ xtype:'component', itemId:'title', html:'<div class="ayo-title">Check-In Point Loyalty</div>' },
//                     {
//                         xtype: 'container',
//                         width: '100%',
//                         height: 40,
//                       //  id: 'containerFloatPanel_AyohaStore_CompanyInfo',


//                         margin: '0 0 0 0',
//                         //style: {
//                         //    // background: '#D25959',
//                         //    background: 'rgba(76, 175, 80, 0.3);',
//                         //    // border: '2px'
//                         //},
//                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                         style: 'background-color:transparent',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'center',
//                             align: 'center',
//                         },
//                         items: [
//                          {
//                              margin: '0 0 0 0',
//                              id: 'htmlFloatPanel_Membership_CheckInPage_CompanyLogo',
//                              //badgeText: "2",
//                              //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
//                              html: '<div ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="80" height="65" alt="Company Name"></div>',

//                          },
//                                {

//                                    id: 'htmlFloatPanel_Membership_CheckInPage_CompanyInfo_Name',
//                                    width: '100%',
//                                    html: '<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div>',


//                                },
//                                 // {

//                                 //     id: 'htmlFloatPanel_AyohaStore_CompanyInfo_Line',
//                                 //     width: '100%',
//                                 //     margin: '0 0 0 0',
//                                 //     html: '<div style="background-color:black;text-align: center;font-size:14px;width:80%;font-weight:bold;height:1px"></div>',


//                                 // },
//                                 {

//                                     id: 'htmlFloatPanel_Membership_CheckInPage_CompanyInfo_Tagline',

//                                     width: '100%',
//                                     // iconCls: 'list',
//                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
//                                     html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',


//                                 },
                                

//                         ]
//                     },
//                     {  
//                         xtype: 'container',
//                         width: '100%',
//                         height: 50,

//                     },
//                     {
//                         xtype: 'component',
//                         itemId:'desc',
//                        // margin: '20 0 0 0',
//                         cls  : 'ayo-desc',
//                         styleHtmlContent:true,
//                         html : 'Get <b>10 FREE Ayoha Points</b> just for visiting today. ' +
//                                'You can claim this reward up to <b>3 times per day!</b>'
//                     },
//                     // {
//                     //     xtype: 'button',
//                     //     itemId:'cta',
//                     //     cls  : 'ayo-cta',
//                     //     text : 'Tap to Check-In',
//                     //     handler: function(btn){
//                     //         FloatPanel_Membership_CheckInPageHide();
//                     //     }
//                     // },
//                     {  
//                         xtype: 'container',
//                         width: '100%',
//                         height: 20,

//                     },
//                     {
//                         //xtype: 'button',
//                         ////  align: 'stretch',

//                         //ui: 'plain',
//                         width: '70%',
//                         margin:'0 0 0 0',
//                         height: 50,
//                         //id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard',
//                         //hidden: true,
//                         //<br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>get 10 Ayoha Points!</b></div>
//                      // html:'<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:150px;width:150px"><div style="color:white;text-align: center;font-size:28px;width:100%;margin:70px 0px 0px 0px;"><b>Check-In</b></div></div>',
//                       html: '<button onclick="FloatPanel_Membership_CheckInPageHide()" class="ayo-cta">Tap to Check-In</button>',
//                         //handler: function () {
//                         //    getMembershipCard();
//                         //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
//                         //},


//                     },
//                     {
//                         xtype: 'component',
//                         styleHtmlContent:true,
//                         html : '<div onclick="FloatPanel_Membership_CheckInPageHide()" class="ayo-later">Maybe Later</div>'
//                     }
//                 ],
//             },







          


//         ]





//     });
//     return _FloatPanel_Membership_CheckInPage;



// }





function FloatPanel_Membership_CheckInPage() {

    _FloatPanel_Membership_CheckInPage =
    Ext.create('Ext.Container', {
        zIndex: 100,
        xtype: 'container',
       // height: 530,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_Membership_CheckInPageID',
      //  draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: false,
        // hideOnMaskTap: true,
        //left: 10,
        //top:10,
        layout: {
            type: 'vbox',
            pack: 'center',
                    align: 'center'
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            


            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
       // style: 'border:1px grey solid;background-color:white;border-radius:10px',
      //  style: 'background-color:rgba(255,255,255, 0.5);border-radius: 0px 0px 0px 0px;',
        style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
       // style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      
        items: [
           

           
            {
                xtype: 'container',
                height: 530,
                //height: '100%',
                width: '95%',
                id: 'FloatPanel_Membership_CheckInPageListContentID',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
             //   style: 'background-color:transparent',
                style: 'border:1px grey solid;background-color:white;border-radius:10px',

                items: [
                    {
                        xtype: 'container',
                        cls  : 'ayo-modal-head',
                        items: [
                            { xtype:'component', html:'<div class="ayo-modal-icon">🎁</div>' },
                           
                        ]
                    },


                    {
                        margin: '-20 0 0 0',
                        html: '<div style="background: transparent;width:100%;font-size: 16px;font-weight:normal;black:white;text-align:center;" >Ayoha Reward Membership</div>',
                    },
                    {
                        margin: '0 0 0 0',
                        html: '<div style="background: transparent;width:100%;font-size: 22px;font-weight:bold;black:white;text-align:justify;" >Check-In Point Loyalty</div>',
                    },
                    {  
                        xtype: 'container',
                        width: '90%',
                        height: 1,
                        style: 'background-color: #ECF0F1;',

                    },
                    {  
                        xtype: 'container',
                        width: '100%',
                        height: 60,

                    },
                    //{ xtype:'component', itemId:'title', html:'<div class="ayo-title">Check-In Point Loyalty</div>' },
                    {
                        xtype: 'container',
                        width: '100%',
                        height: 40,
                      //  id: 'containerFloatPanel_AyohaStore_CompanyInfo',


                        margin: '0 0 0 0',
                        //style: {
                        //    // background: '#D25959',
                        //    background: 'rgba(76, 175, 80, 0.3);',
                        //    // border: '2px'
                        //},
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                         {
                             margin: '0 0 0 0',
                             id: 'htmlFloatPanel_Membership_CheckInPage_CompanyLogo',
                             //badgeText: "2",
                             //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
                             html: '<div ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="80" height="65" alt="Company Name"></div>',

                         },
                               {

                                   id: 'htmlFloatPanel_Membership_CheckInPage_CompanyInfo_Name',
                                   width: '100%',
                                   html: '<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div>',


                               },
                                // {

                                //     id: 'htmlFloatPanel_AyohaStore_CompanyInfo_Line',
                                //     width: '100%',
                                //     margin: '0 0 0 0',
                                //     html: '<div style="background-color:black;text-align: center;font-size:14px;width:80%;font-weight:bold;height:1px"></div>',


                                // },
                                {

                                    id: 'htmlFloatPanel_Membership_CheckInPage_CompanyInfo_Tagline',

                                    width: '100%',
                                    // iconCls: 'list',
                                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                    html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',


                                },
                                

                        ]
                    },
                    {  
                        xtype: 'container',
                        width: '100%',
                        height: 50,

                    },
                    {
                        xtype: 'component',
                        itemId:'desc',
                       // margin: '20 0 0 0',
                        cls  : 'ayo-desc',
                        styleHtmlContent:true,
                        html : 'Get <b>10 FREE Ayoha Points</b> just for visiting today. ' +
                               'You can claim this reward up to <b>3 times per day!</b>'
                    },
                    // {
                    //     xtype: 'button',
                    //     itemId:'cta',
                    //     cls  : 'ayo-cta',
                    //     text : 'Tap to Check-In',
                    //     handler: function(btn){
                    //         FloatPanel_Membership_CheckInPageHide();
                    //     }
                    // },
                    {  
                        xtype: 'container',
                        width: '100%',
                        height: 20,

                    },
                    {
                        //xtype: 'button',
                        ////  align: 'stretch',

                        //ui: 'plain',
                        width: '70%',
                        margin:'0 0 0 0',
                        height: 50,
                        //id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard',
                        //hidden: true,
                        //<br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>get 10 Ayoha Points!</b></div>
                     // html:'<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:150px;width:150px"><div style="color:white;text-align: center;font-size:28px;width:100%;margin:70px 0px 0px 0px;"><b>Check-In</b></div></div>',
                      html: '<button onclick="FloatPanel_Membership_CheckInPageHide()" class="ayo-cta">Tap to Check-In</button>',
                        //handler: function () {
                        //    getMembershipCard();
                        //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                        //},


                    },
                    {
                        xtype: 'component',
                        styleHtmlContent:true,
                        html : '<div onclick="FloatPanel_Membership_CheckInPageHide()" class="ayo-later">Maybe Laterxxxxxx</div>'
                    }
                ],
            },







          


        ]





    });
    return _FloatPanel_Membership_CheckInPage;



}


















function FloatPanel_Membership_CheckInPageShowOri(){



    Ext.Viewport.remove(_FloatPanel_Membership_CheckInPage);
    this.overlay = Ext.Viewport.add(FloatPanel_Membership_CheckInPage());
    this.overlay.show();
    AddRoutePages("FloatPanel_Membership_CheckInPageHide()");
    isFloatPanel_Membership_CheckInPageOpen = 'Y';





   

 
    Ext.getCmp('htmlFloatPanel_Membership_CheckInPage_CompanyLogo').setHtml('<div><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" style="width:78px;height:78px;background-color:transparent;border:2px none white" alt="Company Name"></div>');
    Ext.getCmp('htmlFloatPanel_Membership_CheckInPage_CompanyInfo_Name').setHtml('<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    Ext.getCmp('htmlFloatPanel_Membership_CheckInPage_CompanyInfo_Tagline').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + FloatPanel_AyohaStore_getEnterpriseTagLine() + '</div>');
}



function FloatPanel_Membership_CheckInPageHide() {
    // FloatPanel_AyohaMerchantInfo_PointCardLoyaltyProgram_AddCardHide();
   
    if (isFloatPanel_Membership_CheckInPageOpen == "Y") {
        _FloatPanel_Membership_CheckInPage.hide(); isFloatPanel_Membership_CheckInPageOpen = 'N';
        RemovePages("FloatPanel_Membership_CheckInPageHide()");
    }
  
}