
Ext.define('BuskartApp.view.Advertisement.FloatPanel_PreviewAdvertisement', {
    requires: [
         'Ext.carousel.Carousel',
         'Ext.util.DelayedTask',
         'Ext.Video'
    ],
});

var _FloatPanel_PreviewAdvertisement;
var valCaptionText;
var swipeDirection;
var globalMediaFileName;
var isFloatPanel_PreviewAdvertisementOpen = 'N';
var _FloatPanel_PreviewAdvertisement_isFirstLoad = 'Y';





function FloatPanel_PreviewAdvertisement() {

    _FloatPanel_PreviewAdvertisement =
    Ext.create('Ext.Container', {
        requires: [
          'Ext.carousel.Carousel',
          'Ext.util.DelayedTask',
          'Ext.Video'
        ],
        zIndex: 370,
       // zIndex:410,
        xtype: 'container',
        //height: 465,
        // height: '82%',
        // width: '95%',
        height: '80%',
        width: '90%',
        id: 'FloatPanel_PreviewAdvertisementID',
        draggable: false,
        styleHtmlContent: true,
       // styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        hideOnMaskTap: true,
        layout: {
            type: 'fit'
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:rgba(0, 0, 0, 0.7);border:2px solid white;border-radius: 30px 30px 30px 30px;',
       // style: 'background-color:rgba(0, 0, 0, 0.7);border-radius: 30px 30px 30px 30px;border:1px solid white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_PreviewAdvertisement.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_PreviewAdvertisement.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                }

        //            }
        //        });
        //    }
        //},

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color:transparent;',
               // style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                // width: 40,
                                docked:'top',

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_PreviewAdvertisementHeader',
                                style: {
                                    // background: '#D25959',
                                    background: 'transparent',
                                    // border: '2px'
                                },
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center',
                                },
                                // hidden:true,
                                items:
                                       [


                                           {

                                               xtype: 'container',
                                               width: '100%',
                                             

                                               //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                               //hidden: true,

                                               id: 'containerFloatPanel_PreviewAdvertisementHeaderInner',
                                               style: {
                                                   // background: '#D25959',
                                                   background: 'transparent',
                                                   // border: '2px'
                                               },
                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'right',
                                                   align: 'right',
                                               },
                                               items: [

                                                     {
                                                         xtype: 'button',
                                                         id: 'btnFloatPanel_PreviewAdvertisementBacks',
                                                         hidden:true,
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                       
                                                             _FloatPanel_PreviewAdvertisement_isFirstLoad = 'Y';
                                                             isFloatPanel_PreviewAdvertisementOpen = 'N';
                                                             _FloatPanel_PreviewAdvertisement.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_PreviewAdvertisementHide()");

                                                         }
                                                     },
                                                    
                                                      {
                                                          xtype: 'spacer',

                                                      },
                                                       {
                                                           margin: '0 0 0 0',
                                                           hidden:true,
                                                           id: 'htmlFloatPanel_PreviewAdvertisement_TitleHeaderTxt',
                                                           html: '<font size=2 color=white><b>Preview Advertisement</b></font>'
                                                       },
                                                        {
                                                            xtype: 'spacer',

                                                        },
                                                         {
                                                             xtype: 'button',
                                                             id: 'btnhtmlFloatPanel_PreviewAdvertisement_Icon',
                                                             height: 20,
                                                             width: 20,
                                                             margin:'7 0 0 0',
                                                             // iconCls: 'list',
                                                             html: '<div ><img src="resources/icons/closeXwhite.png" width="10" height="10" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {

                                                                 FloatPanel_PreviewAdvertisementHide();
                                                                 //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'Y';
                                                                 //isFloatPanel_PreviewAdvertisementOpen = 'N';
                                                                 //_FloatPanel_PreviewAdvertisement.hide(Ext.fx.Animation({
                                                                 //    type: 'slideOut',
                                                                 //    direction: 'right',
                                                                 //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 //    duration: 250

                                                                 //}));
                                                                 //RemovePages(_FloatPanel_PreviewAdvertisement, "isFloatPanel_PreviewAdvertisementOpen");

                                                             }
                                                         },
                                                          {
                                                              xtype: 'panel',
                                                              width:15

                                                          },
                                               ]
                                           },

                                           {
                                               xtype: 'container',
                                               //   margin: '0 0 0 5',
                                               // hidden: true,
                                               style: 'background-color: transparent;',
                                               //  style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                               //height: 25,
                                               //width: 70,
                                               margin: '0 0 0 0',
                                              // height: 100,
                                               id: 'containerFloatPanel_PreviewAdvertisementHeaderOutter',
                                               layout: {

                                                   type: 'hbox',
                                                   pack: 'start',
                                                   align: 'center'
                                               },
                                               items: [


                                                 {
                                                    // xtype: 'button',
                                                     id: 'btnFloatPanel_PreviewAdvertisement_PicProfile',
                                                     margin: '0 0 0 20',
                                                     height: 60,
                                                     width: 60,
                                                     // iconCls: 'list',
                                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                     html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                                                     //ui: 'plain',
                                                     //handler: function () {


                                                     //}
                                                 },
                                                 {
                                                     xtype: 'container',
                                                     style: 'background-color: transparent;',
                                                     margin: '0 0 0 5',
                                                     layout: {

                                                         type: 'vbox',
                                                         pack: 'center',
                                                         align: 'left'
                                                     },
                                                     height: 80,
                                                     width: 250,
                                                     items: [

                                                        
                                                           {
                                                              // xtype: 'button',
                                                               id: 'htmlFloatPanel_PreviewAdvertisement_CompanyName',
                                                               margin: '10 0 0 0',
                                                              height: 28,
                                                               width: 250,
                                                               // iconCls: 'list',
                                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                               html: '<div style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div>',

                                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                              
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               style: 'background-color: white;',
                                                               margin: '-5 0 0 0',
                                                               height: 1,
                                                               width: '90%',

                                                           },
                                                           {
                                                              // xtype: 'button',
                                                               id: 'htmlFloatPanel_PreviewAdvertisement_CompanyTagLine',
                                                               margin: '0 0 0 0',
                                                               height: 28,
                                                               width: 250,
                                                               // iconCls: 'list',
                                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                               html: '<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',

                                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                              
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               style: 'background-color: transparent;',
                                                               margin: '-12 0 0 -7',
                                                               layout: {

                                                                   type: 'hbox',
                                                                   pack: 'start',
                                                                   align: 'left'
                                                               },
                                                               items: [
                                                                    
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 28,
                                                                              width: 28,
                                                                            //  hidden: true,
                                                                              margin: '0 0 0 0',
                                                                              id: 'btnFloatPanel_PreviewAdvertisementbottom_FB',
                                                                              //badgeText: "2",
                                                                              html: '<div ><img src="resources/icons/Facebooklogo.png" width="18" height="18" alt="Company Name"></div>',
                                                                              ui: 'plain',
                                                                              handler: function () {


                                                                                  // globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                                                                  var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                      FloatPanel_PreviewAdvertisement_OpenFB();
                                                                                  });
                                                                                  task.delay(150);



                                                                              }
                                                                          },
                                                                           {
                                                                               xtype: 'button',
                                                                               height: 28,
                                                                               width: 28,
                                                                               margin: '0 0 0 0',
                                                                              // hidden: true,
                                                                               id: 'btnFloatPanel_PreviewAdvertisementbottom_Insta',
                                                                               //badgeText: "2",
                                                                               html: '<div ><img src="resources/icons/instagram.png" width="18" height="18" alt="Company Name"></div>',
                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                   // alert(GetEnterpriseInstagram());




                                                                                   // globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                                                                   var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                       FloatPanel_PreviewAdvertisement_OpenInsta();
                                                                                   });
                                                                                   task.delay(150);




                                                                               }
                                                                           },
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 28,
                                                                              width: 28,
                                                                              // hidden: true,
                                                                              margin: '0 0 0 0',
                                                                              id: 'btnFloatPanel_PreviewAdvertisementbottom_Location',
                                                                              //badgeText: "2",
                                                                              html: '<div ><img src="resources/icons/locationThree.png" width="18" height="18" alt="Company Name"></div>',
                                                                              ui: 'plain',
                                                                              handler: function () {


                                                                                  //  globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                                                                  var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                      FloatPanel_PreviewAdvertisement_OpenLocation();
                                                                                  });
                                                                                  task.delay(150);





                                                                              }
                                                                          },
                                                                          
                                                                            {
                                                                                xtype: 'button',
                                                                                height: 28,
                                                                                width: 28,
                                                                                margin: '0 0 0 0',
                                                                               // hidden: true,
                                                                                id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassap',
                                                                                //badgeText: "2",
                                                                                html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                                                                ui: 'plain',
                                                                                handler: function () {



                                                                                    // window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://BuskartApp.com/ayohaimg/"+ModifiedMediaFileName);

                                                                                    //  window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);




                                                                                    // globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
                                                                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                                        FloatPanel_PreviewAdvertisement_OpenWhatsApp();
                                                                                    });
                                                                                    task.delay(150);




                                                                                }
                                                                            },
                                                               ]
                                                           }
                                                     ]
                                                 },
                                                 //////{
                                                 //////    xtype: 'button',
                                                 //////    id: 'htmlFloatPanel_PreviewAdvertisement_CompanyName',
                                                 //////    margin: '0 0 0 0',
                                                 //////    height: 60,
                                                 //////    width: 270,
                                                 //////    // iconCls: 'list',
                                                 //////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                 //////    html: '<div style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',

                                                 //////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                 //////    ui: 'plain',
                                                 //////    handler: function () {


                                                 //////    }
                                                 //////},
                                                  //{
                                                  //    xtype: 'button',
                                                  //    id: 'btnFloatPanel_PreviewAdvertisement_Audio',
                                                  //    margin: '0 0 0 0',
                                                  //    height: 55,
                                                  //    width: 55,
                                                  //    // iconCls: 'list',
                                                  //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/audioPurple.png" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;"></div>',
                                                  //    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                  //    ui: 'plain',
                                                  //    handler: function () {


                                                  //    }
                                                  //},

                                                   //{
                                                   //    xtype: 'button',
                                                   //    id: 'btnMyAccount_DashboardeWalletsss',
                                                   //    margin: '10 0 0 0',
                                                   //    height: 45,
                                                   //    width: 45,
                                                   //    // iconCls: 'list',
                                                   //    html: '<div ><img src="resources/icons/audioPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                   //    ui: 'plain',
                                                   //    handler: function () {
                                                   //        DrawerMenuShow();

                                                   //    }
                                                   //},
                                               ]
                                           },


                                                      {
                                                          xtype: 'container',
                                                           
                                                          // hidden: true,
                                                          style: 'background-color: transparent;',
                                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                         // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                          height: 0,
                                                          width: '100%',
                                                          // margin: '70 0 0 0',
                                                          id: 'containerFloatPanel_PreviewAdvertisement_HeaderTitleAndMedia',
                                                          layout: {

                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                              {
                                                                  xtype: 'container',
                                                                  margin: '5 0 0 0',
                                                                  // hidden: true,
                                                                  style: 'background-color: transparent;',
                                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                                  height: 3,
                                                                  width: '100%',
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_PreviewAdvertisement_HeaderTitleAndMedia_TimingBar',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [
                                                                      {
                                                                          xtype:'spacer'
                                                                      },
 {
     xtype: 'button',
     id: 'btnFloatPanel_PreviewAdvertisement_Timing0',
     margin: '0 0 0 0',
     flex: 1,
    // hidden: true,
     // iconCls: 'list',
     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
     html: '<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">',

     // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
     ui: 'plain',
     handler: function () {


     }
 },
  {
      xtype: 'button',
      id: 'btnFloatPanel_PreviewAdvertisement_Timing1',
      margin: '0 0 0 0',
      flex: 1,
      html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
      // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
      ui: 'plain',
      hidden: true,
      handler: function () {


      }
  },
   {
       xtype: 'button',
       id: 'btnFloatPanel_PreviewAdvertisement_Timing2',
       margin: '0 0 0 0',
       flex: 1,
       // iconCls: 'list',
       //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
      // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
       html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
       // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
       ui: 'plain',
       hidden: true,
       handler: function () {


       }
   },
    {
        xtype: 'button',
        id: 'btnFloatPanel_PreviewAdvertisement_Timing3',
        margin: '0 0 0 0',
        flex: 1,
        hidden: true,
        // iconCls: 'list',
        //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
        // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
        html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
        // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
        ui: 'plain',
        handler: function () {


        }
    },
     {
         xtype: 'button',
         id: 'btnFloatPanel_PreviewAdvertisement_Timing4',
         margin: '0 0 0 0',
         flex: 1,
         hidden: true,
         // iconCls: 'list',
         //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
         // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
         html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
         // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
         ui: 'plain',
         handler: function () {


         }
     },
      {
          xtype: 'button',
          id: 'btnFloatPanel_PreviewAdvertisement_Timing5',
          margin: '0 0 0 0',
          flex: 1,
          hidden: true,
          // iconCls: 'list',
          //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
          // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
          html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
          // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
          ui: 'plain',
          handler: function () {


          }
      },
       {
           xtype: 'button',
           id: 'btnFloatPanel_PreviewAdvertisement_Timing6',
           margin: '0 0 0 0',
           flex: 1,
           hidden: true,
           // iconCls: 'list',
           //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
           // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
           html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
           // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
           ui: 'plain',
           handler: function () {


           }
       },
        {
            xtype: 'button',
            id: 'btnFloatPanel_PreviewAdvertisement_Timing7',
            margin: '0 0 0 0',
            flex: 1,
            hidden: true,
            // iconCls: 'list',
            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
            // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
            html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
            ui: 'plain',
            handler: function () {


            }
        },
         {
             xtype: 'button',
             id: 'btnFloatPanel_PreviewAdvertisement_Timing8',
             margin: '0 0 0 0',
             flex: 1,
             hidden: true,
             // iconCls: 'list',
             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
             // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
             html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
             // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
             ui: 'plain',
             handler: function () {


             }
         },
          {
              xtype: 'button',
              id: 'btnFloatPanel_PreviewAdvertisement_Timing9',
              margin: '0 0 0 0',
              flex: 1,
              hidden:true,
              // iconCls: 'list',
              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
              // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
              html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
              ui: 'plain',
              handler: function () {


              }
          },
   {
       xtype: 'spacer'
   },
                                                                  ]
                                                              },

                                                              //////////////////////////////////////////{
                                                              //////////////////////////////////////////    xtype: 'container',
                                                              //////////////////////////////////////////    //   margin: '0 0 0 5',
                                                              //////////////////////////////////////////    // hidden: true,
                                                              //////////////////////////////////////////    style: 'background-color: transparent;',
                                                              //////////////////////////////////////////  //  style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                              //////////////////////////////////////////    //height: 25,
                                                              //////////////////////////////////////////    //width: 70,
                                                              //////////////////////////////////////////     margin: '50 15 0 0',
                                                              //////////////////////////////////////////     id: 'containerFloatPanel_PreviewAdvertisementHeaderOutter',
                                                              //////////////////////////////////////////    layout: {

                                                              //////////////////////////////////////////        type: 'hbox',
                                                              //////////////////////////////////////////        pack: 'start',
                                                              //////////////////////////////////////////        align: 'center'
                                                              //////////////////////////////////////////    },
                                                              //////////////////////////////////////////    items: [


                                                              //////////////////////////////////////////      {
                                                              //////////////////////////////////////////          xtype: 'button',
                                                              //////////////////////////////////////////          id: 'btnFloatPanel_PreviewAdvertisement_PicProfile',
                                                              //////////////////////////////////////////          margin: '0 0 0 20',
                                                              //////////////////////////////////////////          height: 60,
                                                              //////////////////////////////////////////          width: 60,
                                                              //////////////////////////////////////////          // iconCls: 'list',
                                                              //////////////////////////////////////////          //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                              //////////////////////////////////////////          html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                                                              //////////////////////////////////////////          // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                              //////////////////////////////////////////          ui: 'plain',
                                                              //////////////////////////////////////////          handler: function () {
                                                                           

                                                              //////////////////////////////////////////          }
                                                              //////////////////////////////////////////      },
                                                              //////////////////////////////////////////      {
                                                              //////////////////////////////////////////          xtype: 'button',
                                                              //////////////////////////////////////////          id: 'htmlFloatPanel_PreviewAdvertisement_CompanyName',
                                                              //////////////////////////////////////////          margin: '0 0 0 0',
                                                              //////////////////////////////////////////          height: 60,
                                                              //////////////////////////////////////////          width: 270,
                                                              //////////////////////////////////////////          // iconCls: 'list',
                                                              //////////////////////////////////////////          //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                              //////////////////////////////////////////          html: '<div style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',

                                                              //////////////////////////////////////////          // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                              //////////////////////////////////////////          ui: 'plain',
                                                              //////////////////////////////////////////          handler: function () {


                                                              //////////////////////////////////////////          }
                                                              //////////////////////////////////////////      },
                                                              //////////////////////////////////////////       //{
                                                              //////////////////////////////////////////       //    xtype: 'button',
                                                              //////////////////////////////////////////       //    id: 'btnFloatPanel_PreviewAdvertisement_Audio',
                                                              //////////////////////////////////////////       //    margin: '0 0 0 0',
                                                              //////////////////////////////////////////       //    height: 55,
                                                              //////////////////////////////////////////       //    width: 55,
                                                              //////////////////////////////////////////       //    // iconCls: 'list',
                                                              //////////////////////////////////////////       //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/audioPurple.png" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;"></div>',
                                                              //////////////////////////////////////////       //    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                              //////////////////////////////////////////       //    ui: 'plain',
                                                              //////////////////////////////////////////       //    handler: function () {


                                                              //////////////////////////////////////////       //    }
                                                              //////////////////////////////////////////       //},
                                                                     
                                                              //////////////////////////////////////////        //{
                                                              //////////////////////////////////////////        //    xtype: 'button',
                                                              //////////////////////////////////////////        //    id: 'btnMyAccount_DashboardeWalletsss',
                                                              //////////////////////////////////////////        //    margin: '10 0 0 0',
                                                              //////////////////////////////////////////        //    height: 45,
                                                              //////////////////////////////////////////        //    width: 45,
                                                              //////////////////////////////////////////        //    // iconCls: 'list',
                                                              //////////////////////////////////////////        //    html: '<div ><img src="resources/icons/audioPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                              //////////////////////////////////////////        //    ui: 'plain',
                                                              //////////////////////////////////////////        //    handler: function () {
                                                              //////////////////////////////////////////        //        DrawerMenuShow();

                                                              //////////////////////////////////////////        //    }
                                                              //////////////////////////////////////////        //},
                                                              //////////////////////////////////////////    ]
                                                              //////////////////////////////////////////},

                                                          ]
                                                      },
                                                              
                                                           







                                       ]

                            },



                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_PreviewAdvertisementTitleOutter',
                                width: '100%',
                               // height: 35,
                                docked: 'bottom',
                                height: 70,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                                style: "background-color: transparent;",
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center',
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        id: 'containerPreviewAdvertisementTitleInner',
                                        width: '100%',
                                        //height: 35,
                                        height: 70,
                                       // margin: '-85 0 0 0',
                                        style: "background-color:transparent;",
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'center',
                                        },
                                        items: [
                                            ////{
                                            ////    xtype: 'container',
                                            ////    width: '96%',
                                            ////    id: 'containerFloatPanel_Advertisement_CaptionText',
                                            ////    docked: 'top',
                                            ////   // hidden:true,
                                            ////   // margin: '-80 0 0 0',
                                            ////    height: 75,
                                            ////    style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                            ////    layout: {
                                            ////        type: 'vbox',
                                            ////        pack: 'center',
                                            ////        align: 'center'

                                            ////    },
                                            ////    items: [
                                            ////        {
                                            ////            id:'htmlFloatPanel_Advertisement_CaptionText',
                                            ////            html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">Aslam cucu angah rahem..</div>',
                                            ////        }
                                            ////    ]
                                            ////},
                                            //{
                                            //    xtype: 'spacer',
                                            //    width: '96%',
                                            //    height:55
                                            //},


                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                id: 'containerFloatPanel_Advertisement_BottomPanel',
                                                docked:'bottom',
                                                // hidden:true,
                                               // margin: '-30 0 0 0',
                                               height: 70,
                                                style: 'background-color:transparent',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'

                                                },
                                                items: [


                                                    
                                                        {
                                                            margin: '-2 0 0 0',
                                                            hidden: true,
                                                            id: 'htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle',
                                                            html: '<font size=2 color=white><b>Loading Online Store.....</b></font>',
                                                        },
                                                    
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        //hidden: true,
                                                        id: 'containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon',
                                                       // name: 'namecontainerFloatPanel_Advertisement_BottomPanel_OnlineShop',
                                                        // hidden:true,
                                                        margin: '0 0 0 0',
                                                        // height: 75,
                                                        style: 'background-color:transparent',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [

                                                            {
                                                                xtype: 'container',
                                                                width: 52,
                                                                height: 42,
                                                                id: 'containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_0',
                                                                name: 'namecontainerFloatPanel_Advertisement_BottomPanel_OnlineShop0',
                                                                hidden:true,
                                                                margin: '0 0 0 0',
                                                                // height: 75,
                                                                style: 'background-color:transparent',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'center',
                                                                    align: 'center'

                                                                },
                                                                items: [
                                                                    {
                                                                        height: 32,
                                                                        width: 32,
                                                                        margin: '0 0 0 0',
                                                                        id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon0',
                                                                        //badgeText: "2",
                                                                        html: '<div ><img src="https://setkita.com/AyohaImgCard/eStoreLogo/kiahStoreLogo.png" width="32" height="32" alt="Company Name"></div>',
                                                                    },
                                                                    {
                                                                        id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName0',
                                                                        html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Kiah</div>',
                                                                    }
                                                                ]
                                                            },
                                                               {
                                                                   xtype: 'container',
                                                                   width: 52,
                                                                   height: 42,
                                                                   //hidden: true,
                                                                   id: 'containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_1',
                                                                   name: 'namecontainerFloatPanel_Advertisement_BottomPanel_OnlineShop1',
                                                                   hidden:true,
                                                                   margin: '0 0 0 0',
                                                                   // height: 75,
                                                                   style: 'background-color:transparent',
                                                                   layout: {
                                                                       type: 'vbox',
                                                                       pack: 'center',
                                                                       align: 'center'

                                                                   },
                                                                   items: [
                                                                       {
                                                                           height: 32,
                                                                           width: 32,
                                                                           margin: '0 0 0 0',
                                                                           id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon1',
                                                                           //badgeText: "2",
                                                                           html: '<div ><img src="https://setkita.com/AyohaImgCard/eStoreLogo/shoopeeLogo.png" width="32" height="32" alt="Company Name"></div>',
                                                                       },
                                                                       {
                                                                           id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName1',
                                                                           html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Shoope</div>',
                                                                       }
                                                                   ]
                                                               },
                                                                {
                                                                    xtype: 'container',
                                                                    width: 52,
                                                                    height: 42,
                                                                    //hidden: true,
                                                                    id: 'containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_2',
                                                                    name: 'namecontainerFloatPanel_Advertisement_BottomPanel_OnlineShop2',
                                                                    hidden:true,
                                                                    margin: '0 0 0 0',
                                                                    // height: 75,
                                                                    style: 'background-color:transparent',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'center'

                                                                    },
                                                                    items: [
                                                                        {
                                                                            height: 32,
                                                                            width: 32,
                                                                            margin: '0 0 0 0',
                                                                            id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon2',
                                                                            html: '<div ><img src="https://setkita.com/AyohaImgCard/eStoreLogo/AyohaStoreLogo.png" width="32" height="32" alt="Company Name"></div>',
                                                                        },
                                                                        {
                                                                            id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName2',
                                                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Ayoha</div>',
                                                                        }
                                                                    ]
                                                                }
                                                        ]
                                                    },






                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        hidden:true,
                                                        id: 'containerFloatPanel_Advertisement_BottomPanel_OnlineShop',
                                                        name:'namecontainerFloatPanel_Advertisement_BottomPanel_OnlineShop',
                                                        // hidden:true,
                                                        margin: '-10 0 0 0',
                                                       // height: 75,
                                                        style: 'background-color:transparent',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                           
                                                               {
                                                                   //xtype: 'button',
                                                                   height: 52,
                                                                   width: 52,
                                                                   //margin: '0 0 0 0',
                                                                   //hidden: false,
                                                                   margin: '0 0 0 -1',
                                                                   id: 'htmlFloatPanel_PreviewAdvertisementbottom_eStoreIcon',
                                                                   //badgeText: "2",
                                                                   html: '<div style="background-color:black;width:52px;height:52px;"></div>',
                                                                   //ui: 'plain',
                                                                   //handler: function () {

                                                                   //    window.open(GetEnterpriseWebsite());
                                                                   //    //setTimeout(function () { window.open(GetEnterpriseWebsite()); }, 25);
                                                                   //    //setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

                                                                   //}
                                                               },
                                                                {
                                                                    margin: '0 0 0 5',
                                                                    id: 'htmlFloatPanel_PreviewAdvertisementbottom_eStoreName',
                                                                    html: '<font  size=2 color=white><b>Loading...</b></font>',
                                                                },
                                                        ]
                                                    },

                                                    {
                                                        xtype: 'container',
                                                        width: '40%',
                                                        hidden:true,
                                                        id: 'containerFloatPanel_Advertisement_BottomPanel_ContactUs',
                                                        // hidden:true,
                                                        //margin: '-20 0 0 -30',
                                                        margin: '-20 0 0 0',
                                                        // height: 75,
                                                        style: 'background-color:transparent',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'right',
                                                            align: 'right'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '0 5 0 0',
                                                                html: '<font size=2 color=transparent><b>.</b></font>',
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                id: 'containerPreviewAdvertisementButton_bottom',
                                                                //hidden:true,
                                                                width:'100%',
                                                                style: "background-color: transparent",
                                                                //style: "background-color: #F35B57;",
                                                                margin: '0 10 0 0',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'right',
                                                                    align: 'right'

                                                                },


                                                                items: [

                                                                     {
                                                                         xtype: 'button',
                                                                         height: 38,
                                                                         width: 38,
                                                                         hidden: true,
                                                                         margin: '0 0 0 0',
                                                                         id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStore1',
                                                                         //badgeText: "2",
                                                                         html: '<div ><img src="resources/icons/locationThree.png" width="28" height="28" alt="Company Name"></div>',
                                                                         ui: 'plain',
                                                                         handler: function () {


                                                                          




                                                                         }
                                                                     },
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 38,
                                                                              width: 38,
                                                                              hidden: true,
                                                                              margin: '0 0 0 0',
                                                                              id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStore2',
                                                                              //badgeText: "2",
                                                                              html: '<div ><img src="resources/icons/Facebooklogo.png" width="28" height="28" alt="Company Name"></div>',
                                                                              ui: 'plain',
                                                                              handler: function () {

                                                                                 
                                                                               

                                                                              }
                                                                          },
                                                                           {
                                                                               xtype: 'button',
                                                                               height: 38,
                                                                               width: 38,
                                                                               margin: '0 0 0 0',
                                                                               hidden: true,
                                                                               id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStore3',
                                                                               //badgeText: "2",
                                                                               html: '<div ><img src="resources/icons/instagram.png" width="28" height="28" alt="Company Name"></div>',
                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                 



                                                                               }
                                                                           },
                                                                         

                                                                         
                                                                          
                                                                            {
                                                                                xtype: 'button',
                                                                                height: 38,
                                                                                width: 38,
                                                                                margin: '0 0 0 0',
                                                                                hidden: true,
                                                                                id: 'btnFloatPanel_PreviewAdvertisementbottom_OnlineStore4',
                                                                                //badgeText: "2",
                                                                                html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="28" height="28" alt="Company Name"/></a>',
                                                                                ui: 'plain',
                                                                                handler: function () {






                                                                                }
                                                                            },
                                                                ]

                                                            },
                                                               
                                                        ]
                                                    }

                                                ]
                                            },



                                              //{
                                              //    margin: '-30 0 0 0',

                                              //    html: '<font size=2 color=white><b>Contact Us</b></font>',
                                              //},
                                            
                                        ]
                                    },

                                ]
                            },

                            


                           


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////
                              
                              {
                                  xtype: 'container',
                                  width: '98%',
                                  height: '99%',
                                  margin: '3 0 0 0',
                                 // style: 'background-color:transparent',
                                  style: ' background-color:transparent;border-radius: 30px 30px 30px 30px;',
                                //  style: 'background-color:black',
                                  //style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'

                                  },
                                  items: [
                                            {
                                                xtype: 'container',
                                                width: '96%',
                                                id: 'containerFloatPanel_Advertisement_CaptionText',
                                                docked: 'bottom',
                                                // hidden:true,
                                                // margin: '-80 0 0 0',
                                                height: 75,
                                                style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'

                                                },
                                                items: [
                                                    {
                                                        id: 'htmlFloatPanel_Advertisement_CaptionText',
                                                        html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">Aslam cucu angah rahem..</div>',
                                                    }
                                                ]
                                            },
                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_PreviewAdvertisement_CarouselLoading',
                                           width: '80%',
                                           height: '100%',
                                           //hidden:true,
                                           style: "background-color: transparent",
                                           //style: "background-color: #F35B57;",
                                           //style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center'

                                           },
                                           items: [

                                               {
                                                   xtype: 'container',
                                                   id: 'containerFloatPanel_PreviewAdvertisement_CarouselLoadingInner',
                                                   width: '80%',
                                                   height: 300,
                                                   margin: '-90px 0px 0px 0px ',
                                                  // height: '70%',
                                                   //hidden:true,
                                                   // style: "background-color: transparent",
                                                   //style: "background-color: #F35B57;",
                                                   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'

                                                   },
                                               }

                                           ]

                                       },
                                       
                                       {
                                           xtype: 'carousel',
                                           //hidden:true,
                                           id: 'FloatPanel_PreviewAdvertisement_Carousel',
                                           name:'nameFloatPanel_PreviewAdvertisement_Carousel',
                                           width: '96%',
                                           height: '90%',
                                           //height: '100%',
                                          // margin: '-90px 0px 0px 0px ',
                                           margin:'20px 0px 0px 0px ',
                                           indicator: false,
                                           requires: [
        'Ext.carousel.Carousel',
        'Ext.util.DelayedTask',
        'Ext.Video'
                                           ],
                                           listeners: {
                                               //initialize: function (c) {
                                               //    this.element.on({
                                               //        tap: function (e, node, options) {
                                               //            FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
                                               //        }
                                               //    });
                                               //},
                                               //initialize: function (c) {
                                               //    this.element.on({
                                               //        swipe: function (e, node, options) {
                                               //            if (e.direction == "left") {
                                               //                swipeDirection = "Left";
                                                             
                                               //            } else {
                                               //                swipeDirection = "Right";
                                               //            }
                                               //        }
                                               //    });
                                               //},
                                               activeitemchange: function (container, newCard, oldCard, index) {
                                                   console.log('Current index:' + container.getActiveIndex());
                                                  

                                                   if (_FloatPanel_PreviewAdvertisement_isFirstLoad == 'N') {
                                                       console.log('Masuk Dah:' + container.getActiveIndex());
                                                       valCaptionText = ArrCaptionText[container.getActiveIndex()];
                                                       globalMediaFileName = ArrMediaFileName[container.getActiveIndex()];

                                                       if (ArrCaptionText[container.getActiveIndex()] != 'NULL') {
                                                           Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(false);
                                                       
                                                           Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setMargin('40px 0px 0px 0px');
                                                          
                                                           if (valCaptionText) {
                                                               Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold;font-style: italic;">' + valCaptionText + '</div>');
                                                               //if (valCaptionText.length < 200)
                                                               //{
                                                               //    Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + valCaptionText + '</div>');

                                                               //}

                                                               if (valCaptionText.length > 200) {
                                                                   Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setWidth('100%');
                                                                   Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setMargin('-30 0 0 0');
                                                                   Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<textarea id="input-htmlFloatPanel_Advertisement_CaptionTextArea"  style="border: 1px none white;color:white;text-align: left;font-size:13px;background-color: transparent;width:100%;height:120px;font-style: italic;" wrap="hard">');
                                                                   document.getElementById('input-htmlFloatPanel_Advertisement_CaptionTextArea').value = valCaptionText;

                                                               }

                                                           }


                                                   

                                                          
                                                       } else {
                                                           Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
                                                           Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setMargin('20px 0px 0px 0px');
                                                       }

                                                       var NextIndex = container.getActiveIndex() + 1;
                                                     


                                                       if (myCarousel.getInnerItems().indexOf(oldCard) > myCarousel.getInnerItems().indexOf(newCard)) {
                                                           console.log("kanan");
                                                           Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + NextIndex).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                                                         //  Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + myCarousel.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');

                                                       } else {
                                                           console.log("kiri");
                                                           Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">');
                                                       }
                                                     
                                                   }

                                               },
                                             
                                           },
                                        
                                           //listeners: {
                                           //    element: 'element',
                                           //    delegate: 'a.navigation',
                                           //    tap: function (e) {
                                           //        var target = e.getTarget(null, 1, true),
                                           //            direction = target.getAttribute('direction'),
                                           //            active = this.getActiveItem(),
                                           //            items = this.getInnerItems(),
                                           //            idx = items.indexOf(active);

                                           //        this.setActiveItem(idx + (direction === 'next' ? 1 : -1));
                                           //    }
                                           //},

                                           //listeners: {
                                           //    cardswitch: function (container, newCard, oldCard, index) {
                                           //        console.log(container, newCard, oldCard, index);
                                           //        Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + index + '</div>');
                                           //    },
                                           //},


                                           //listeners: {
                                           //    order: 'after',
                                           //    initialize: function(c) {
                                           //        this.element.on({
                                           //            swipe: function(event, node, options) {    
                               
                                
                                           //                console.log("CountAdvertisementMedia:" + CountAdvertisementMedia);
                        
                                           //                if(event.direction == "left" ) {
                                                              
                                           //                    MoveCountSwipe = MoveCountSwipe + 1;                                                           
                                           //                    Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + MoveCountSwipe + '</div>');
                                           //                    console.log("Swipe left:" + MoveCountSwipe);
                                                               

                                           //                    if (MoveCountSwipe >= CountAdvertisementMedia) {
                                           //                        MoveCountSwipe = CountAdvertisementMedia;
                                           //                        console.log("Swipe left,reset to=" + CountAdvertisementMedia);
                                                                  
                                           //                    }
                                           //                   // var CaptionText = ArrCaptionText = [CountAdvertisementMedia];
                                                              
                                           //                }
                                
                                           //                if (event.direction == "right") {
                                                             
                                           //                    MoveCountSwipe = MoveCountSwipe - 1;
                                                            
                                           //                    Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + MoveCountSwipe + '</div>');
                                           //                    console.log("Swipe right:" + MoveCountSwipe);
                                           //                    if (MoveCountSwipe <= 1) {
                                           //                        MoveCountSwipe = 1;
                                           //                        console.log("Swipe right,reset to=1");
                                                                   
                                           //                    }
                                           //                }
                                           //            }
                                           //        });
                                           //    }
                                           //},


                                         // margin: '-20 0 0 0',
                                          // items: [
                                            //   {
                                            //       xtype: 'image',
                                            //       id: 'carouselFloatPanel_PreviewAdvertisement_1',
                                            //      // hidden:true,
                                            //       src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/satay.jpg',
                                            //       height: '100%',
                                            //       width: '100%',
                                            //       mode: 'image'
                                            //   },
                                            //   {
                                            //       xtype: 'image',
                                            //       id: 'carouselFloatPanel_PreviewAdvertisement_2',
                                            //       hidden: true,
                                            //       src: '',
                                            //       height: '100%',
                                            //       width: '100%',
                                            //       mode: 'image'
                                            //   },
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_3',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //  {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_4',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  }, {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_5',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  },
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_6',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //  {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_7',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  }, {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_8',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  },
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_9',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_10',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //{
                                            //    xtype: 'video',
                                            //    enableControls: true,
                                            //    //x: 600,
                                            //    //y: 300,
                                            //    //width: 300,
                                            //    //height: 250,
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    url: 'http://42.1.63.57/AyohaImgCard/AdvertisementVideo/CRCom-71100/aslam.mp4',
                                            //    loop: true,
                                            //    posterUrl: 'resources/icons/videoPurple.png',
                                            //    mode: 'video'
                                            //},
                                         //  ]
                                       },







                                  ]
                              },



                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_PreviewAdvertisement;



}






var MoveCountSwipe;
var globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath;
var globalFloatPanel_PreviewAdvertisement_EnterpriseName;
var globalFloatPanel_PreviewAdvertisement_AdvertisementTitle;
var globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
function FloatPanel_PreviewAdvertisementShow(Module, EnterpriseLogoPath, EnterpriseName, AdvertisementTitle,EnterpriseAccNo) {
   // function FloatPanel_PreviewAdvertisementShow(Module) {
    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';
    globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
    globalFloatPanel_PreviewAdvertisement_EnterpriseName = EnterpriseName;
    globalFloatPanel_PreviewAdvertisement_AdvertisementTitle = AdvertisementTitle;
    globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
    AdvertismentTypeTag = 'HotSeatAdvertisement';
    //carousel.add({ xtype: 'image', src: 'image URL' });
    //carousel.add({ xtype: 'image', src: 'image URL' });
    //carousel.add({ xtype: 'image', src: 'image URL' });
    Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
  //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + AdvertisementTitle + '</div>');

    Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module, EnterpriseAccNo);
    ////////////////////var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_Advertisement_BottomPanel_OnlineShop]')[0];
    ////////////////////var containerViewEl = containerView.element;
    ////////////////////containerViewEl.on('tap',
    ////////////////////  function (event, node, options, eOpts) {

    ////////////////////      FloatPanel_PreviewAdvertisement_OpenOnlineShop();
    ////////////////////  }
    ////////////////////);
 



    ////////////////////var containerViewnameFloatPanel_PreviewAdvertisement_Carousel = Ext.ComponentQuery.query('container[name=nameFloatPanel_PreviewAdvertisement_Carousel]')[0];
    ////////////////////var containerViewElnameFloatPanel_PreviewAdvertisement_Carousel = containerViewnameFloatPanel_PreviewAdvertisement_Carousel.element;
    ////////////////////containerViewElnameFloatPanel_PreviewAdvertisement_Carousel.on('tap',
    ////////////////////  function (event, node, options, eOpts) {

    ////////////////////      FloatPanel_PreviewAdvertisement_OpenOnlineShop();
    ////////////////////  }
    ////////////////////);

    

}





function FloatPanel_PreviewAdvertisementShow_FloatingAdvertisement(Module) {
    // function FloatPanel_PreviewAdvertisementShow(Module) {
    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';
    AdvertismentTypeTag = 'Floating_Advertisement';
   
   

    Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + globalFloatPanel_FloatingAdvertisement_CompanyLogo + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
    //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + globalFloatPanel_FloatingAdvertisement_CompanyName + '</div>');
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_FloatingAdvertisement_AdvertismentTitle + '</div>');




    

    Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module, globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo);

   

}
















function FloatPanel_PreviewAdvertisementShow_VIAAdvertisement(Module) {
    // function FloatPanel_PreviewAdvertisementShow(Module) {
    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';
    AdvertismentTypeTag = 'VIAAdvertisement';

  
   
    Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + globalDashboardVIAAdvertisement_EnterpriseLogoPath + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
    //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + globalDashboardVIAAdvertisement_EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalDashboardVIAAdvertisement_AdvertisementTitle + '</div>');
   





    Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module, globalDashboardVIAAdvertisement_EnterpriseAccNo);
  
  

}


function FloatPanel_PreviewAdvertisementShow_StampCard(Module) {
    // function FloatPanel_PreviewAdvertisementShow(Module) {
    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';
    AdvertismentTypeTag = 'StampCardAdvertisement';
   

    Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + globalStampCampaignEnterpriseLogo + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
    //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + globalStampCampaignEnterpriseName + '</div>');
   
//alert(globalStampCampaignAdvertisementTitle)
//alert(Module)

    Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module, globalStampCampaignEnterpriseAccNo);
   
    //var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_Advertisement_BottomPanel_OnlineShop]')[0];
    //var containerViewEl = containerView.element;
    //containerViewEl.on('tap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_PreviewAdvertisement_OpenOnlineShop_FromStampCard();
    //  }
    //);

    //var containerViewnameFloatPanel_PreviewAdvertisement_Carousel = Ext.ComponentQuery.query('container[name=nameFloatPanel_PreviewAdvertisement_Carousel]')[0];
    //var containerViewElnameFloatPanel_PreviewAdvertisement_Carousel = containerViewnameFloatPanel_PreviewAdvertisement_Carousel.element;
    //containerViewElnameFloatPanel_PreviewAdvertisement_Carousel.on('tap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_PreviewAdvertisement_OpenOnlineShop();
    //  }
    //);
}
function FloatPanel_PreviewAdvertisementShow_PointCard() {
    Ext.getCmp('LoadingFloatLoyaltyCardPointID').setZIndex(360);
    // function FloatPanel_PreviewAdvertisementShow(Module) {
    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';
    AdvertismentTypeTag = 'PointCardAdvertisement';
   
    
    Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
    // //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName + '</div>');
    
    LoadFloatPanel_PreviewAdvertisementShow_PointCard();
}


function FloatPanel_PreviewAdvertisementShow_RewardStore(Module) {
    // function FloatPanel_PreviewAdvertisementShow(Module) {
    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';
    AdvertismentTypeTag = 'RewardStoreAdvertisement';


    Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + globalFloatPanel_RewardStore_EnterpriseLogoPath + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
    //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + globalFloatPanel_RewardStore_EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_RewardStore_EnterpriseTagLine + '</div>');




    Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module, globalFloatPanel_RewardStore_EnterpriseAccNo);

}





function FloatPanel_PreviewAdvertisementShow_PushNotification(Module) {
    // function FloatPanel_PreviewAdvertisementShow(Module) {
    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';
    AdvertismentTypeTag = 'PushNotification';


    Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
    //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + globalFloatPanel_AyohaNotification_Notification_EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_AyohaNotification_Notification_EnterpriseTagLine + '</div>');




    Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module, globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo);

}


var iCount_FloatPanel_PreviewAdvertisement=0;
function FloatPanel_PreviewAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo) {
   
  // alert("FloatPanel_PreviewAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo): " + EnterpriseAccNo);
    _DataStore_EnterprisesContactUsLinkStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
    _DataStore_EnterprisesContactUsLinkStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesContactUsLink');
    _DataStore_EnterprisesContactUsLinkStore.load();

    iCount_FloatPanel_PreviewAdvertisement=0;
    


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Store = _DataStore_EnterprisesContactUsLinkStore.getAt(0);  

        globalFloatPanel_PreviewAdvertisement_FBLink = Store.get('EnterpriseFacebook');
        globalFloatPanel_PreviewAdvertisement_TwitterLink = Store.get('EnterpriseTwiter');
        globalFloatPanel_PreviewAdvertisement_InstaLink = Store.get('EnterpriseInstagram');
        globalFloatPanel_PreviewAdvertisement_CoordinateLink = Store.get('EnterpriseCoordinate');
        globalFloatPanel_PreviewAdvertisement_EmailLink = Store.get('EnterpriseEmail');
        globalFloatPanel_PreviewAdvertisement_WebSiteLink = Store.get('EnterpriseWebsite');
       // var EnterprisePhoneNo = Store.get('EnterprisePhoneNo');
        globalFloatPanel_PreviewAdvertisement_WhatsAppLink = Store.get('PICContactNo');
        globalFloatPanel_PreviewAdvertisement_MerchantLinkType = Store.get('MerchantLinkType');
        globalFloatPanel_PreviewAdvertisement_eStoreName = Store.get('eStoreName');
      //  var checkisWebsiteOrEcommerce=globalFloatPanel_PreviewAdvertisement_MerchantLinkType;

///alert("globalFloatPanel_PreviewAdvertisement_WhatsAppLink: " + globalFloatPanel_PreviewAdvertisement_WhatsAppLink);
        
      
        if (globalFloatPanel_PreviewAdvertisement_WhatsAppLink !="NA") {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Wassap').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Wassap').setHidden(true);
        }
        //if (globalFloatPanel_PreviewAdvertisement_EmailLink) {
        //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Email').setHidden(false);
        //} else {
        //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Email').setHidden(true);
        //}
        if (globalFloatPanel_PreviewAdvertisement_WebSiteLink != "NA") {
            Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreIcon').setHidden(false);
        } else {
            Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreIcon').setHidden(true);
        }
        if (globalFloatPanel_PreviewAdvertisement_FBLink != "NA") {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_FB').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_FB').setHidden(true);
        }
        //if (globalFloatPanel_PreviewAdvertisement_TwitterLink) {
        //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Twitter').setHidden(false);
        //} else {
        //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Twitter').setHidden(true);
        //}
        if (globalFloatPanel_PreviewAdvertisement_InstaLink != "NA") {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Insta').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Insta').setHidden(true);
        }
        if (globalFloatPanel_PreviewAdvertisement_CoordinateLink != "NA") {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Location').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Location').setHidden(true);
        }
        

        //if (globalFloatPanel_PreviewAdvertisement_MerchantLinkType.includes("eCommerce")) {
           
        //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreIcon').setHtml('<div class="blink_me"><img src="' + Store.get('eStoreIconPath') + '" width="52" height="52" alt="Company Name"></div>');
        //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreName').setHtml('<div  class="blink_me" style="width:100%;margin:25px 0px 0px 0px;"><font size=2 color=white><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=white><b>' + Store.get('eStoreName') + '</b></font></div></div>');

        //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreName').setMargin('-25 0 0 5');

        //  //  margin:'0 0 0 5' ,
        //} else {
        //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreIcon').setHtml('<div class="blink_me"><img src="resources/icons/websiteIcon.png" width="52" height="52" alt="Company Name"></div>');
        //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreName').setHtml('<font class="blink_me" size=2 color=white><b>Visit Our Website</b></font>');

        //}


        var Stores;
        if (_DataStore_EnterprisesContactUsLinkStore.getCount() >= 1) {
            Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle').setHtml('<font size=2 color=white><b>Visit Our Online Store</b></font>');
            for (iCount_FloatPanel_PreviewAdvertisement = 0; iCount_FloatPanel_PreviewAdvertisement <= _DataStore_EnterprisesContactUsLinkStore.getCount() ; iCount_FloatPanel_PreviewAdvertisement++) {
                Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(iCount_FloatPanel_PreviewAdvertisement);
              console.log(iCount_FloatPanel_PreviewAdvertisement)
              console.log(_DataStore_EnterprisesContactUsLinkStore.getCount())
              if (iCount_FloatPanel_PreviewAdvertisement == _DataStore_EnterprisesContactUsLinkStore.getCount()) { 
                break; }
                if (Stores.get('eStoreName')) {
                    
                    if (iCount_FloatPanel_PreviewAdvertisement > 2) { 
                        break; }
                    Ext.getCmp('containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_'+iCount_FloatPanel_PreviewAdvertisement).setHidden(false);
                    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon' + iCount_FloatPanel_PreviewAdvertisement).setHtml('<div ><img src="' + Stores.get('eStoreIconPath') + '" width="32" height="32" alt="Company Name" onclick="FloatPanel_PreviewAdvertisement_OpenOnlineStore' + i + '()"></div>');
                    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName' + iCount_FloatPanel_PreviewAdvertisement).setHtml('<div  style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + Stores.get('eStoreName') + '</div>');
                   
                   
                   
                } else {
                    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle').setHtml('<font size=2 color=white><b>No Online Store</b></font>');
                    return;
                }
              
            }
        } 
        
        
       
        
        
        
        else {
            Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle').setHtml('<font size=2 color=white><b>No Online Store</b></font>');
        }


        
    });
    task.delay(1000);


    Ext.Viewport.setMasked(false);
}


function FloatPanel_PreviewAdvertisement_OpenOnlineStore0() {
   // 
    var Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(0);
  
    if (Stores.get('eStoreName') == "Ayoha Store") {
        if (AdvertismentTypeTag == 'VIAAdvertisement') {

            FloatPanel_AyohaStoreShow_VIA();
        } if (AdvertismentTypeTag == 'StampCardAdvertisement') {

            FloatPanel_AyohaStoreShow_FromStampCard();
        } if (AdvertismentTypeTag == 'Floating_Advertisement') {

            FloatPanel_AyohaStoreShow_FloatingAdvertisement();
        }
        if (AdvertismentTypeTag == 'PushNotification') {

            FloatPanel_AyohaStoreShow_FromPushNotification();
        }
        else {
            FloatPanel_AyohaStoreShow();
        }
    } else {
        window.open(Stores.get('OnlineStoreUrl'), '_system'); return false;
    }
}

function closeBackLoyaltyProgramCard(){
    // if(isFloatLoyaltyCardPointOpen=='Y'){
    //     FloatLoyaltyCardPointHide();
    // }

    // _FloatLoyaltyCardPoint.hide(Ext.fx.Animation({
    //     type: 'slideOut',
    //     direction: 'left',
    //     easing: 'cubic-bezier(.7,0,.7,1)',
    //     duration: 250

    // }));
    // isFloatLoyaltyCardPointOpen = 'N';
    // _FloatLoyaltyCardPoint_isFirstLoad = "N";
    // RemovePages("FloatLoyaltyCardPointHide()");




    if(isFloatAdvertisementOpen=='Y'){
        FloatPanel_Advertisement_FloatAdvertisementHide();
    }
}

function FloatPanel_PreviewAdvertisement_OpenOnlineStore1() {
  //alert('FloatPanel_PreviewAdvertisement_OpenOnlineStore1')
 // alert(AdvertismentTypeTag)
    var Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(1);
  //  closeBackLoyaltyProgramCard();
    if (Stores.get('eStoreName') == "Ayoha Store") {
        if (AdvertismentTypeTag == 'VIAAdvertisement') {

            FloatPanel_AyohaStoreShow_VIA();
        } if (AdvertismentTypeTag == 'StampCardAdvertisement') {

            FloatPanel_AyohaStoreShow_FromStampCard();
        } if (AdvertismentTypeTag == 'Floating_Advertisement') {

            FloatPanel_AyohaStoreShow_FloatingAdvertisement();
        }
        if (AdvertismentTypeTag == 'PushNotification') {

            FloatPanel_AyohaStoreShow_FromPushNotification();
        } if (AdvertismentTypeTag == 'PointCardAdvertisement') {

            FloatPanel_AyohaStoreShow_FromPointCard();
        }
        else {
            FloatPanel_AyohaStoreShow();
        }
    } else {
        window.open(Stores.get('OnlineStoreUrl'), '_system'); return false;
    }

}
function FloatPanel_PreviewAdvertisement_OpenOnlineStore2() {
    var Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(2);
 
      if (Stores.get('eStoreName') == "Ayoha Store") {
        if (AdvertismentTypeTag == 'VIAAdvertisement') {

            FloatPanel_AyohaStoreShow_VIA();
        } if (AdvertismentTypeTag == 'StampCardAdvertisement') {

            FloatPanel_AyohaStoreShow_FromStampCard();
        } if (AdvertismentTypeTag == 'Floating_Advertisement') {

            FloatPanel_AyohaStoreShow_FloatingAdvertisement();
        }
        if (AdvertismentTypeTag == 'PushNotification') {

            FloatPanel_AyohaStoreShow_FromPushNotification();
        }
        else {
            FloatPanel_AyohaStoreShow();
           // closeBackLoyaltyProgramCard();
        }
    } else {
        window.open(Stores.get('OnlineStoreUrl'), '_system'); return false;
    }
}
function FloatPanel_PreviewAdvertisement_OpenOnlineStore3() {
    var Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(3);
    closeBackLoyaltyProgramCard();
    if (Stores.get('eStoreName') == "Ayoha Store") {
        if (AdvertismentTypeTag == 'VIAAdvertisement') {

            FloatPanel_AyohaStoreShow_VIA();
        } if (AdvertismentTypeTag == 'StampCardAdvertisement') {

            FloatPanel_AyohaStoreShow_FromStampCard();
        } if (AdvertismentTypeTag == 'Floating_Advertisement') {

            FloatPanel_AyohaStoreShow_FloatingAdvertisement();
        }
        if (AdvertismentTypeTag == 'PushNotification') {

            FloatPanel_AyohaStoreShow_FromPushNotification();
        }
        else {
            FloatPanel_AyohaStoreShow();
        }
    } else {
        window.open(Stores.get('OnlineStoreUrl'), '_system'); return false;
    }
}
function FloatPanel_PreviewAdvertisement_OpenOnlineStore4() {
    closeBackLoyaltyProgramCard();
    var Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(4);
    if (Stores.get('eStoreName') == "Ayoha Store") {
        if (AdvertismentTypeTag == 'VIAAdvertisement') {

            FloatPanel_AyohaStoreShow_VIA();
        } if (AdvertismentTypeTag == 'StampCardAdvertisement') {

            FloatPanel_AyohaStoreShow_FromStampCard();
        } if (AdvertismentTypeTag == 'Floating_Advertisement') {

            FloatPanel_AyohaStoreShow_FloatingAdvertisement();
        }
        if (AdvertismentTypeTag == 'PushNotification') {

            FloatPanel_AyohaStoreShow_FromPushNotification();
        }
        else {
            FloatPanel_AyohaStoreShow();
        }
    } else {
        window.open(Stores.get('OnlineStoreUrl'), '_system'); return false;
    }
}
function FloatPanel_PreviewAdvertisement_OpenOnlineStore5() {
    closeBackLoyaltyProgramCard();
    var Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(5);
    if (Stores.get('eStoreName') == "Ayoha Store") {
        if (AdvertismentTypeTag == 'VIAAdvertisement') {

            FloatPanel_AyohaStoreShow_VIA();
        } if (AdvertismentTypeTag == 'StampCardAdvertisement') {

            FloatPanel_AyohaStoreShow_FromStampCard();
        } if (AdvertismentTypeTag == 'Floating_Advertisement') {

            FloatPanel_AyohaStoreShow_FloatingAdvertisement();
        }
        if (AdvertismentTypeTag == 'PushNotification') {

            FloatPanel_AyohaStoreShow_FromPushNotification();
        }
        else {
            FloatPanel_AyohaStoreShow();
        }
    } else {
        window.open(Stores.get('OnlineStoreUrl'), '_system'); return false;
    }
}
function FloatPanel_PreviewAdvertisementHide() {
  
    if (isFloatPanel_PreviewAdvertisementOpen == "Y") {
  _FloatPanel_PreviewAdvertisement_isFirstLoad = 'Y';
 _FloatPanel_PreviewAdvertisement.hide(); isFloatPanel_PreviewAdvertisementOpen = 'N';
 RemovePages("FloatPanel_PreviewAdvertisementHide()");
    }
   
}


var myCarousel;
var globalFloatPanel_PreviewAdvertisement_EmailLink;
var globalFloatPanel_PreviewAdvertisement_WebSiteLink;
var globalFloatPanel_PreviewAdvertisement_FBLink;
var globalFloatPanel_PreviewAdvertisement_TwitterLink;
var globalFloatPanel_PreviewAdvertisement_InstaLink;
var globalFloatPanel_PreviewAdvertisement_CoordinateLink;
var globalFloatPanel_PreviewAdvertisement_WhatsAppLink;
var globalFloatPanel_PreviewAdvertisement_MerchantLinkType;
var globalFloatPanel_PreviewAdvertisement_eStoreName;
var globalFloatPanel_PreviewAdvertisement_AdvertismentCodes;
function Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module,EnterpriseAccNo) {
   

    //FloatPanel_AyohaCardManagement_AdvertisementButton
//     alert(Module)
// alert(globalPointCampaignCode_FloatLoyaltyCardPoint)
    var AdvertismentCodes;
   
    if (Module == "FloatPanel_PreviewAdvertisement") {
        AdvertismentCodes = document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value;


    }
    if (Module == "Dashboard_PreviewAdvertisement") {
        AdvertismentCodes = localStorage.getItem("Dashboard_AdvertismentCode");
        Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Hot Seat Advertisement</b></font>');
    }
    if (Module == "Dashboard_PreviewVIAAdvertisement") {
        AdvertismentCodes = localStorage.getItem("Dashboard_VIAAdvertismentCode");
        Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_TitleHeaderTxt').setHtml('<font size=2 color=white><b>VIA Advertisement</b></font>');
    }
  
    if (Module == "FloatPanel_AyohaCardManagement_AdvertisementButton") {
        AdvertismentCodes = localStorage.getItem("FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode");
        Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Advertisement</b></font>');
    }
    if (Module == "FloatPanel_AyohaCardManagement_AdvertisementButton_Point") {
        AdvertismentCodes =  localStorage.getItem('FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode');
        Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Advertisement</b></font>');
    }
    if (Module == "FloatPanel_AyohaStore") {
        AdvertismentCodes = globalFloatPanel_RewardStore_AdvertisementCode;
    }
   
    if (Module == "Floating_Advertisement") {
       // alert("Module:" + Module);
        AdvertismentCodes = localStorage.getItem("Floating_AdvertismentCode");
    }
    if (Module == "PushNotification") {
        // alert("Module:" + Module);
        AdvertismentCodes = globalFloatPanel_AyohaNotification_Notification_AdvertisementCode;
    }
    if (Module == "Dashboard_PremiumAdvertisement") {
        // alert("Module:" + Module);
        AdvertismentCodes =    localStorage.getItem("Dashboard_AdvertismentCode");
        Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Premium Advertisement</b></font>');
    }
    globalFloatPanel_PreviewAdvertisement_AdvertismentCodes = AdvertismentCodes;
    globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
  
    myCarousel = Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel');

    

    _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getProxy().setExtraParam('AdvertisementCode', AdvertismentCodes);
    _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadMediaAyohaUserDashboard');
    _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AdvertisementloadMediaAyohaUserDashboardStore').getProxy().setExtraParams({
        //    AdvertisementCode: AdvertismentCodes
        //});
        //Ext.StoreMgr.get('AdvertisementloadMediaAyohaUserDashboardStore').load();
        //var myStore = Ext.getStore('AdvertisementloadMediaAyohaUserDashboardStore');

        var count = _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getCount();


        if (count <= 0) {
          
            FloatPanel_PreviewAdvertisementHide();
            swalFireGeneralMessaging("No Sale Advertisement!", "resources/icons/noAdvertisementIcon.jpg");
            return;
        }



        var modelRecorded = _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getAt(0);
        var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        var EnterpriseName = modelRecorded.get('EnterpriseName');
        var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
        var SocialMediaLink = modelRecorded.get('SocialMediaLink');
        var ModifiedSocialMediaLink=SocialMediaLink.split("|");
        
        
        Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
        globalStampCampaignAdvertisementTitle=AdvertisementTitle;


      

   

      

       
        CountAdvertisementMedia = count - 1;
       // console.log(CountAdvertisementMedia);
        //console.log(GetEnterpriseHQAccNo());
        //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
        //var modelRecord = myStore.getAt(0);

        //var Complaint = modelRecord.get('Complaint');
        // var MinStoreAlert = modelRecord.get('MinStoreAlert');
        // var StoreBalance = modelRecord.get('TotalStock');
      
       // myCarousel = Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel');
        ArrCaptionText.length = 0;
        ArrMediaFileName.length = 0;
       
        for (i = 0; i < count; i++) {
            var modelRecord = _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getAt(i);

            var AdvertismentMediaUrl =modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote =modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var MediaFileName = modelRecord.get('MediaFileName');
            
           


            ArrMediaFileName.push(MediaFileName);
            
            Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + i).setHidden(false);
          //  xtype: 'pinchzoomimage',
            if (MediaType == "Image") {
               myCarousel.add({ xtype: 'image', src: AdvertismentMediaUrl , height: '100%', width: '100%', mode: 'image' });
               // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            }
            if (MediaType == "Video") {
                myCarousel.add({ xtype: 'video', url: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, });

            }

            if (AdvertismentMediaNote) {
                ArrCaptionText.push(AdvertismentMediaNote);
            } else {
                ArrCaptionText.push('NULL');
            }
          
           
            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }
        if (ArrCaptionText[0] != 'NULL') {
            Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(false);
            valCaptionText = ArrCaptionText[0];
            Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setMargin('40px 0px 0px 0px');
            Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold;font-style: italic;">' + ArrCaptionText[0] + '</div>');

        } else {
            Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
            Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setMargin('20px 0px 0px 0px');
        }
        

        Ext.getCmp('containerFloatPanel_PreviewAdvertisement_CarouselLoading').setHidden(true);
        Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(false);
        _FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
        FloatPanel_PreviewAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);
        FloatPanel_PreviewAdvertisement_AdvertisementAnalsysInsertUpdate();
        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);
}







function LoadFloatPanel_PreviewAdvertisementShow_PointCard(){
    myCarousel = Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel');
var advCode=localStorage.getItem('FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode');
    //FloatPanel_PreviewAdvertisementShow_PointCard()
//alert(globalPointCampaignCode_FloatLoyaltyCardPoint)

    _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getProxy().setExtraParam('AdvertisementCode', advCode);
    _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadMediaAyohaUserDashboard');
    _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AdvertisementloadMediaAyohaUserDashboardStore').getProxy().setExtraParams({
        //    AdvertisementCode: AdvertismentCodes
        //});
        //Ext.StoreMgr.get('AdvertisementloadMediaAyohaUserDashboardStore').load();
        //var myStore = Ext.getStore('AdvertisementloadMediaAyohaUserDashboardStore');

        var count = _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getCount();


        if (count <= 0) {
          
            FloatPanel_PreviewAdvertisementHide();
            swalFireGeneralMessaging("No Sale Advertisement!", "resources/icons/noAdvertisementIcon.jpg");
            return;
        }



        var modelRecorded = _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getAt(0);
        var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        var EnterpriseName = modelRecorded.get('EnterpriseName');
        var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
        var SocialMediaLink = modelRecorded.get('SocialMediaLink');
        var ModifiedSocialMediaLink=SocialMediaLink.split("|");
        
        
        Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
        globalStampCampaignAdvertisementTitle=AdvertisementTitle;


      

   

      

       
        CountAdvertisementMedia = count - 1;
       // console.log(CountAdvertisementMedia);
        //console.log(GetEnterpriseHQAccNo());
        //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
        //var modelRecord = myStore.getAt(0);

        //var Complaint = modelRecord.get('Complaint');
        // var MinStoreAlert = modelRecord.get('MinStoreAlert');
        // var StoreBalance = modelRecord.get('TotalStock');
      
       // myCarousel = Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel');
        ArrCaptionText.length = 0;
        ArrMediaFileName.length = 0;
       
        for (i = 0; i < count; i++) {
            var modelRecord = _DataStore_AdvertisementloadMediaAyohaUserDashboardStore.getAt(i);

            var AdvertismentMediaUrl =modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote =modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var MediaFileName = modelRecord.get('MediaFileName');
            
           


            ArrMediaFileName.push(MediaFileName);
            
            Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + i).setHidden(false);
          //  xtype: 'pinchzoomimage',
            if (MediaType == "Image") {
               myCarousel.add({ xtype: 'image', src: AdvertismentMediaUrl , height: '100%', width: '100%', mode: 'image' });
               // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            }
            if (MediaType == "Video") {
                myCarousel.add({ xtype: 'video', url: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, });

            }

            if (AdvertismentMediaNote) {
                ArrCaptionText.push(AdvertismentMediaNote);
            } else {
                ArrCaptionText.push('NULL');
            }
          
           
            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }
        if (ArrCaptionText[0] != 'NULL') {
            Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(false);
            valCaptionText = ArrCaptionText[0];
            Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setMargin('40px 0px 0px 0px');
            Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold;font-style: italic;">' + ArrCaptionText[0] + '</div>');

        } else {
            Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
            Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setMargin('20px 0px 0px 0px');
        }
        

        Ext.getCmp('containerFloatPanel_PreviewAdvertisement_CarouselLoading').setHidden(true);
        Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(false);
        _FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
        FloatPanel_PreviewAdvertisement_EnterprisesContactUsLinkStore(globalEnterpriseAccNo_FloatLoyaltyCardPoint);
        FloatPanel_PreviewAdvertisement_AdvertisementAnalsysInsertUpdate();
        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);
}
var ArrCaptionText = [];
var ArrMediaFileName = [];
var CountAdvertisementMedia


function  FloatPanel_PreviewAdvertisement_OpenOnlineShop() {
   
   // alert(globalFloatPanel_PreviewAdvertisement_WebSiteLink);
    if (globalFloatPanel_PreviewAdvertisement_eStoreName == "Ayoha") {
        FloatPanel_AyohaStoreShow();
    } else {
        window.open(globalFloatPanel_PreviewAdvertisement_WebSiteLink, '_system'); return false;
    }

    //if (globalFloatPanel_PreviewAdvertisement_MerchantLinkType.includes("eCommerce")) {
        
    //} else {
    //    window.open(globalFloatPanel_PreviewAdvertisement_WebSiteLink, '_system'); return false;
    //}
   
}



function FloatPanel_PreviewAdvertisement_OpenOnlineShop_VIA() {

    alert(globalFloatPanel_PreviewAdvertisement_eStoreName);
    if (globalFloatPanel_PreviewAdvertisement_eStoreName == "Ayoha") {
        alert('via')
        FloatPanel_AyohaStoreShow_VIA();
    } else {
        window.open(globalFloatPanel_PreviewAdvertisement_WebSiteLink, '_system'); return false;
    }


}

function FloatPanel_PreviewAdvertisement_OpenOnlineShop_FromStampCard() {

    // alert(globalFloatPanel_PreviewAdvertisement_WebSiteLink);


    if (globalFloatPanel_PreviewAdvertisement_MerchantLinkType.includes("eCommerce")) {
        if (globalFloatPanel_PreviewAdvertisement_eStoreName == "Ayoha Store") {
            FloatPanel_AyohaStoreShow_FromStampCard();
        } else {
            window.open(globalFloatPanel_PreviewAdvertisement_WebSiteLink, '_system'); return false;
        }
    } else {
        window.open(globalFloatPanel_PreviewAdvertisement_WebSiteLink, '_system'); return false;
    }

}


function FloatPanel_PreviewAdvertisement_OpenFB() {

    //var WhatsAppLink = FloatPanel_AyohaStore_getWhatsAppLink();
    //var FBLink = FloatPanel_AyohaStore_getFBLink();
    //var InstaLink = FloatPanel_AyohaStore_getInstaLink();
    //var CoordinateLink = FloatPanel_AyohaStore_getCoordinateLink();

    if (FloatPanel_AyohaStore_getFBLink()) {

        //  setTimeout(function () { window.open("fb://page/" + globalFloatPanel_PreviewAdvertisement_FBLink + ""); }, 25);
        setTimeout(function () { window.open("fb://page/" + FloatPanel_AyohaStore_getFBLink() + "", '_system'); return false; }, 25);
    } else {

        swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
    }
}

function FloatPanel_PreviewAdvertisement_OpenInsta() {
   


    if (FloatPanel_AyohaStore_getInstaLink()) {
        setTimeout(function () { window.open("instagram://user?username=" + FloatPanel_AyohaStore_getInstaLink() + "", '_system'); return false; }, 25);
    } else {

        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Instagram Link.,Help Merchant to know this Message!", "Insta")
    }
}

function FloatPanel_PreviewAdvertisement_OpenWhatsApp() {

   

    if (FloatPanel_AyohaStore_getWhatsAppLink()) {
        window.open("https://api.whatsapp.com/send?phone=" + FloatPanel_AyohaStore_getWhatsAppLink() + "&text=Hi", '_system'); return false;
        // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
    }
}
function FloatPanel_PreviewAdvertisement_OpenLocation() {

   

    var Coordinate = FloatPanel_AyohaStore_getCoordinateLink().split(",");
    PlaceMarkerlat = Coordinate[0];
    PlaceMarkerlng = Coordinate[1];





    if (PlaceMarkerlat) {
        if (PlaceMarkerlng) {
            window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system'); return false;
        } else {

            swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
        }
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function FloatPanel_PreviewAdvertisement_AdvertisementAnalsysInsertUpdate() {


    var EntAccNo = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;

    Dashboard_VisitorAnalsysInsertUpdate("Advertisement", globalFloatPanel_PreviewAdvertisement_AdvertismentCodes, EntAccNo);



    //var obj = {
        
    //    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
    //    "IPAddress": "IPADDRESS",
    //    "EnterpriseAccNo": globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo,
    //    "AdvertisementCode": globalFloatPanel_PreviewAdvertisement_AdvertismentCodes,
    //    "AccessedPlatform": "AccessedPlatform",

    //};
    //console.log(obj);
    //var _value = Ext.Ajax.request({

    //    type: "POST",

    //    url: GetAPIurl() + '/AdvertisementAnalsys/AdvertisementAnalsysInsertUpdate',

    //    dataType: "json",
    //    data: JSON.stringify(obj),
    //    headers: {
    //        "Content-Type": "application/json; charset=utf-8"
    //    },

    //    success: function (result, request) {

    //        //console.log(result.responseText);


    //        data = Ext.decode(result.responseText.trim());

    //        if (data.success == "true") {

    //            console.log("Log view Advertisement success!");
               

    //        }
    //        else {

    //            console.log("Log view Advertisement Failed!");



    //        }

    //        Ext.Viewport.unmask();

    //    },

    //    failure: function (result, request) {
    //        Ext.Viewport.unmask();
    //        // swalFireFail("Scan Failed!!");

    //    }

    //});
}







