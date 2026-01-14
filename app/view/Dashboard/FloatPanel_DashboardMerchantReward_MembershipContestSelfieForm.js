Ext.define('BuskartApp.view.Dashboard.FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm', {
    requires: [
        'Ext.util.DelayedTask'
],
});




var is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = "N";


var _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm;

function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm() {

    _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormID',
          //  name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm',
            // xtype: 'panel',
            zIndex: 160,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,
            
            centered: true,
            //bottom: 64,
            // zIndex: 100,
            // modal: true,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },

            //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            style: ' background-color:white;',
            // style: 'background-image: url("resources/icons/AyohaRankingRewardContest01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            // style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    LoyaltyCardRedeemListHide();
                            //}
                            if (e.direction == "left") {
                                is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = 'N';
                                RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide()");
                                _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            } if (e.direction == "right") {
                                is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = 'N';
                                RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide()");
                                _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            }


                           
                        }
                    });
                }
            },
            items: {
                ////zIndex: 40,
                xtype: 'container',
                id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
              //  name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm',
                style: ' background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                //  margin:'-10 0 0 -7',
                items: [


                   {

                       xtype: 'container',
                       width: '100%',
                       docked: 'top',
                       // width: 40,

                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containeFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHeader',
                       style: {
                           // background: '#D25959',
                           background: 'transparent',
                           // border: '2px'
                       },
                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                       layout: {
                           type: 'hbox',
                           pack: 'center',
                           align: 'center',
                       },
                       // hidden:true,
                       items:
                              [
                                   {
                                       xtype: 'panel',
                                       width: 10
                                   },

                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormBack',
                                                height: 30,
                                                width: 35,
                                                margin: '5 0 0 0',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = 'N';
                                                    _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide()");
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TitleHeaderTxt',
                                                 html: '<font size=2 color=black><b>Take My Selfie!</b></font>'
                                             },

                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             },
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_CardIcon',
                                                       height: 30,
                                                       hidden: true,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = 'N';

                                                           _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages(_FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm, "is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_Main',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm',
                           style: ' background-color:transparent;',
                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'
                           },
                           width: '100%',
                           height: '100%',
                           indicators: false,
                           scrollable: {
                              directionLock: true,
                              indicators: false
                           },
                           items: [

                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage',
                                //   style: ' background-color:transparent;',
                                   style: 'border-top:2px dotted purple;border-left:2px dotted purple;border-right:2px dotted purple;border-bottom:2px dotted purple',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'left',
                                       align: 'left'
                                   },
                                   width: '94%',
                                  // height: 700,
                                   items: [
                                        {
                                            xtype: 'pinchzoomimage',
                                            src: 'resources/icons/selfieIcon.png',
                                            width: '100%',
                                            height: 700,
                                            indicators: false,
                                            id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage',
                                        },
                                         {
                                             id: 'HtmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload',
                                             hidden: true,
                                             margin: '10 0 0 0',
                                             width: '100%',
                                             html: '<input type="file" id="input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload" accept="image/*"  onchange="FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_ImgProcess()"   style="border-color:#53A5F8;color:black;width:268px;text-align: left;font-size:15px;">'

                                             //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                         },




                                      
                                   ]
                               },
                               {
                                xtype: 'container',
                                // hidden:true,
                                margin:'0 0 0 0',
                                id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection',
                                // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail',
                                style: ' background-color:transparent;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'
                                },
                                width: '94%',
                                height: 50,
                                items: [
                                    {margin:'10 0 0 0',
                                        html: '<div style="width: 100%; height:30px; background:white;text-align:left;font-size:12px;">Question:</div>',
                                    },
                                    {
                                     margin: '-15 0 0 0',
                                     id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection',
                                  
                                     width: '100%',
                                     height: 20,
                                     html: '<input type="text" id="input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:12px;font-weight:bold">'
                    
                                 },
                                ]
                            },

   {
                                   xtype: 'container',
                                   // hidden:true,
                                   margin:'-10 0 0 0',
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'left'
                                   },
                                   width: '94%',
                                  // height: 10,
                                  height: 98,
                                   items: [
                                       {margin:'10 0 0 0',
                                           html: '<div style="width: 100%; height:30px; background:white;text-align:left;font-size:12px;">Your Answer:</div>',
                                       },
                                       {
                                        margin: '-12 0 0 0',
                                        id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection',
                                     
                                        width: '100%',
                                        height: 80,
                                        html: '<textarea type="text" id="input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection"  style="border: 1px solid black;color:black;width:100%;text-align: left;font-size:16px;height:80px;" wrap="hard"></textarea>'
                       
                                    },
                                   ]
                               },



                               {
                                xtype: 'container',
                                style: ' background-color:transparent',
                                id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt',                                               
                                margin: '23 0 0 0',
                                height: 10,
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'
                                },
                                items: [
                               
                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        style: ' background-color:transparent',
                                        layout: {
                                            type: 'hbox',
                                            pack: 'start',
                                            align: 'center'
                    
                                        },
                                        items: [
                                            {
                                                xtype:'spacer',
                                                width:14
                                                                                                                },
                                                 {
                                                     xtype: 'container',
                    
                                                     width: '100%',
                                                     style: {
                    
                                                         background: 'transparent',
                    
                                                     },
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'start',
                                                         align: 'left'
                    
                                                     },
                                                     items: [
                    
                    
                                                         {
                                                             xtype: 'container',
                    
                                                             width: '100%',
                                                             style: {
                    
                                                                 background: 'transparent',
                    
                                                             },
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'start',
                                                                 align: 'center'
                    
                                                             },
                                                             items: [
                                                              
                                                                {
                                                                    margin: '0 0 0 0', 
                                                                    width: '100%',                 
                                                                    html: '<div style="color:red;text-align: left;font-size:12px;width:100%;"><i>*Upload Receipt</i></div>',
                                                                },
                    
                    
                                                             ]
                                                         },
                    
                    
                                     
                    
                    
                    
                    
                    
                    
                                                //    {
                    
                                                //        margin: '-2 0 0 0',
                                                //        width: '105%',
                                                //        height: 20,
                                                //        html: '<input type="text" id="inputName-FloatPanel_AyohaContestSetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                //    },
                                                {
                                                    id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage',
                                                    hidden: true,
                                                    margin: '0 0 0 0',
                                                    width: '100%',
                                                    html: '<input type="file" id="inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage" accept="image/*"  onchange="inputImgFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
                             
                                                    //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
                             
                             
                             
                             
                             
                                                },
                                               
                                                {
                                                    margin: '2 0 0 0',
                                                    height: 140,
                                                    hidden: true,
                                                    width: 140,
                                                    id: 'FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage',
                                                    html: '<img src="resources/icons/createpicprofile01.png" style="width: 140px; height: 140px; border:2px solid white; border-radius: 50%; "/>',
                                                },
                                                   {
    
                                                    id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt',
                                                    margin: '-2 0 0 0',
                                                       width: '90%',
                                                    height: 20,
                                                    html: '<input type="text" id="inputName-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt"  readOnly  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                                       
                                       
                                                },
                    
                                                     ]
                    
                                                 },
                    
                    
                                                  //{
                                                  //    xtype:'container'
                    
                                                  //},
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt',
                                                        name: 'clickablebtnFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage',
                                                       // name: 'clickablebtnFloatPanel_AyohaContestSetting_UploadBackgroundImage',
                                                        //  badgeText: '1',
                                                        margin: '0 0 -10 -70',
                                                        height: 35,
                                                        width: 35,
                                                        html: '<img src="resources/icons/upload02.png" width="25" height="25" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                          
                                                        }
                                                    },
                    
                                        ]
                    
                                    },
                    
                                ]
                            },
                            {
                                xtype: 'container',
                                hidden:true,
                                id:'containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt',
                                name:'nameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt',
height:150,
                                width: '100%',
                                style: {

                                    background: 'transparent',

                                },
                                layout: {
                                    type: 'hbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                                items: [
                                    {
                                        xtype:'spacer',
                                        width:14
                                                                                                        },
                                   {
                                       margin: '-70 0 0 0', 
                                       width: '100%', 
                                                       
                                       html: '<div style="color:blue;text-align: left;font-size:10px;width:100%;"><u>View Receipt</u></div>',
                                   },


                                ]
                            },
                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                              height: 60,
                              //  hidden: true,
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormBottom',
                              //    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                              style: 'background-color:transparent;border-top:1px solid #DCDCDC',

                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                              layout: {
                                  type: 'hbox',
                                  pack: 'center',
                                  align: 'center',
                              },
                              // hidden:true,
                              items:
                                     [

                                        {

                                            xtype: 'container',
                                            width: '90%',
                                            height: 60,
                                            hidden:true,
                                            margin: '0 0 0 0',
                                            id: 'containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_SubmitMyAnswer',
                                            // name: 'containeFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormRedeemVoucher',
                                            style: 'background-color:transparent;',
                                            // style:'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:85%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [

                                               {
                                                   width: '100%',
                                                   height: 40,
                                                   id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_SubmitMyAnswer',
                                                   html: '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_SubmitMyAnswer();" style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">Submit My Answer</div></div>'
                                               },
                                              

                                            ]
                                        },

                                         {

                                             xtype: 'container',
                                             width: '90%',
                                             height: 60,
                                             margin: '0 0 0 0',
                                             id: 'containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TakeMySelfie',
                                             // name: 'containeFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormRedeemVoucher',
                                             style: 'background-color:transparent;',
                                             // style:'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:85%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [

                                                {
                                                    width: '100%',
                                                    height: 40,
                                                    id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TakeMySelfie',
                                                    html: '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_ImgProcess_Initialized();" class="example-2" style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">Take My Selfie!</div></div>'
                                                },
                                               

                                             ]
                                         },

                                                                        {

                                                                            xtype: 'container',
                                                                            width: '90%',
                                                                            hidden:true,
                                                                            height: 60,
                                                                            margin: '0 0 0 0',
                                                                            id: 'containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ReTakeMySelfie_Submit',
                                                                            // name: 'containeFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormRedeemVoucher',
                                                                            style: 'background-color:transparent;',
                                                                            // style:'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:85%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;',
                                                                            layout: {
                                                                                type: 'hbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [

                                                                               {
                                                                                   width: '55%',
                                                                                   height: 40,
                                                                                   id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_DetailSubmit',
                                                                                   html: '<div style="font-size: 10px;font-weight:normal;color:black;text-align:left;vertical-align:middle;margin:-10px 0px 0px 0px">Submitted Date:</div><br><div style="font-size: 12px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">19/2/2022</div><br><div style="font-size: 10px;font-weight:normal;color:black;text-align:left;vertical-align:middle;margin:-20px 0px 0px 0px">Contest Status:</div><br><div style="font-size: 12px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">You are Winner!</div>'
                                                                               },
                                                                               {
                                                                                   xtype: 'spacer',
                                                                                   width: '5%',
                                                                               },
                                                                               {
                                                                                   width: '35%',
                                                                                   height: 40,
                                                                                   id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_DeleteSelfie',
                                                                                   html: '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_DeleteMySelfie_Staging();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: white;border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 14px;font-weight:bold;color:red;margin:6px 0px 0px 0px;">Delete</div></div>'
                                                                               },
                                                                            ]
                                                                        },


                                                                                    {

                                                                                        xtype: 'container',
                                                                                        width: '90%',
                                                                                        hidden: true,
                                                                                        height: 60,
                                                                                        margin: '0 0 0 0',
                                                                                        id: 'containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AfterSubmit',
                                                                                        // name: 'containeFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormRedeemVoucher',
                                                                                        style: 'background-color:transparent;',
                                                                                        // style:'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:85%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;',
                                                                                        layout: {
                                                                                            type: 'hbox',
                                                                                            pack: 'center',
                                                                                            align: 'center',
                                                                                        },
                                                                                        items: [

                                                                                           {
                                                                                               width: '45%',
                                                                                               height: 50,
                                                                                               id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_RetakeSelfie',
                                                                                               html: '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_ImgProcess_Initialized();" class="example-2" style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">Re-Take My Selfie!</div></div>'
                                                                                             //  html: '<div style="font-size: 10px;font-weight:normal;color:black;text-align:left;vertical-align:middle;margin:-10px 0px 0px 0px">Submitted Date:</div><br><div style="font-size: 12px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">19/2/2022</div><br><div style="font-size: 10px;font-weight:normal;color:black;text-align:left;vertical-align:middle;margin:-20px 0px 0px 0px">Contest Status:</div><br><div style="font-size: 12px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">You are Winner!</div>'
                                                                                           },
                                                                                           {
                                                                                               xtype: 'spacer',
                                                                                               width: '5%',
                                                                                           },
                                                                                           {
                                                                                               width: '45%',
                                                                                               height: 40,
                                                                                               id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_Re-SubmitSelfie',
                                                                                               html: '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_SubmitMySelfie();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: white;border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 14px;font-weight:bold;color:red;margin:6px 0px 0px 0px;">Submit</div></div>'
                                                                                           },
                                                                                        ]
                                                                                    },



                                     ]

                          },



                ]

            },






        });

    return _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm;
}















//function FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
function FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow() {


    if(is_prompt_setMessage_NotYetMembershipMessage()){
        return
         }
        












    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm());
    this.overlay.show();
    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide()");

    is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = 'Y';
   
    globalConfig_ResizeUploadedImage = "";
    globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ID = 0;
    //alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType);
    if (isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
        
        
        Ext.getCmp('FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormID').setZIndex(335);
    }
   
    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TitleHeaderTxt').setHtml('<font size=2 color=black><b>'+globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestName+'</b></font>');

   
    var containernameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt = Ext.ComponentQuery.query('container[name=nameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt]')[0];
    var containerViewElnameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt = containernameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt.element;
    containerViewElnameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_DashboardMerchantReward_UploadedReceiptShow();
      }
    );



    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage_Image();
      }
    );

    if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Text"){
        var _innerHeight = parseInt(window.innerHeight) - 250;
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setSrc(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_AdvertisementImgPath);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TakeMySelfie').setHidden(true);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_SubmitMyAnswer').setHidden(false);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection').setHidden(false);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection').setHidden(false);
        document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection').value=globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestQuestion;
    }else{
        var _innerHeight = parseInt(window.innerHeight) - 105;
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection').setHidden(true);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection').setHidden(true);
    }
   
//alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus)

if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt=="Yes"){
    var _innerHeight = parseInt(window.innerHeight) - 350;
    Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
    Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').setHidden(false);
    Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt').setHidden(false);
    
}else{
    Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').setHidden(true);
    Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt').setHidden(true);
}

if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus=="New"){
    Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt').setHidden(true);
}


}



function FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit() {

    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm());
    this.overlay.show();
    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide()");
    is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = 'Y';
    // var _innerHeight = parseInt(window.innerHeight) - 105;
    // Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
    // Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
   
    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TitleHeaderTxt').setHtml('<font size=2 color=black><b>'+globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestName+'</b></font>');
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
    if (isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
        
        
        Ext.getCmp('FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormID').setZIndex(335);
    }
   
    var containernameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt = Ext.ComponentQuery.query('container[name=nameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt]')[0];
    var containerViewElnameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt = containernameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt.element;
    containerViewElnameFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_DashboardMerchantReward_UploadedReceiptShow();
      }
    );



    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage_Image();
      }
    );
   // FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCode();
    if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Text"){
        var _innerHeight = parseInt(window.innerHeight) - 250;
        // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_AdvertisementImgPath)
        // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestQuestion)

        
       // Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_Main').setHeight(_innerHeight);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setSrc(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_AdvertisementImgPath);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TakeMySelfie').setHidden(true);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_SubmitMyAnswer').setHidden(false);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection').setHidden(false);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection').setHidden(false);
        document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection').value=globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestQuestion;
   
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_SubmitMyAnswer').setHidden(true);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TakeMySelfie').setHidden(true);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ReTakeMySelfie_Submit').setHidden(true);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AfterSubmit').setHidden(true);
   
   
    }else{
        var _innerHeight = parseInt(window.innerHeight) - 105;
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_QuestionSection').setHidden(true);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection').setHidden(true);
    
    
    
    
    }

    if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt=="Yes"){
        var _innerHeight = parseInt(window.innerHeight) - 350;
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').setHidden(false);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt').setHidden(false);
        
    }else{
        Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').setHidden(true);
        Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt').setHidden(true);
    }



    FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCode();

}


function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCode() {
    globalConfig_ResizeUploadedImage = "ExistingImage";

    _DataStore_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore.getProxy().setExtraParam('ContestCode', globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode);
    _DataStore_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest_SelfieAndWin/AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCode');
    _DataStore_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore.getCount();
//alert(count)
        if (count > 0) {
            var Store = _DataStore_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore.getAt(0);
            var selpieImage = Store.get('SelfieImagePath');
            var ReceiptLink= Store.get('ReceiptLink');
            var ReceiptName= Store.get('ReceiptName');
            globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ID = Store.get('ID');
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo = Store.get('EnterpriseAccNo');
          globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage=ReceiptLink;

            if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Text"){
                                
                document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection').value=selpieImage;
                document.getElementById('inputName-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').value=ReceiptName;
                
              
              
                Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ReTakeMySelfie_Submit').setHidden(false);
                Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_DetailSubmit').setHtml('<div style="font-size: 10px;font-weight:normal;color:black;text-align:left;vertical-align:middle;margin:-10px 0px 0px 0px">Submitted Date:</div><br><div style="font-size: 12px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + Store.get('ModifiedDate') + '</div><br><div style="font-size: 10px;font-weight:normal;color:black;text-align:left;vertical-align:middle;margin:-20px 0px 0px 0px">Status:</div><br><div style="font-size: 12px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + Store.get('ContestStatus') + '</div>');
                id="htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt"
            }
            if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Picture"){
Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setSrc(selpieImage);
Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TakeMySelfie').setHidden(true);
Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ReTakeMySelfie_Submit').setHidden(false);

Ext.getCmp('containeFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormBottom').setStyle('background-color:transparent;border-top:1px none #DCDCDC');


var _innerHeight = parseInt(window.innerHeight) - 105;
Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setHeight(_innerHeight);
//Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AfterSubmit').setHidden(false);
            }
           

          
         //   Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AfterSubmit').setHidden(true);
            



           
        }
        LoadingPanelHide();
   
    });
    task.delay(500);



}

function FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide() {

    if (is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen == 'Y') {
        _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm.hide();
        is_FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormOpen = 'N';
        RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}

function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_ImgProcess_Initialized() {
    $(document).ready(function () {
        $("input#input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload").click();
    });
}

function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_ImgProcess() {
    var file = document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload').files[0];


    var fileName = document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload').files[0].name;
   
   

    if (file) {

        if (file.type.match("image.*")) {
            var reader = new FileReader();
            reader.readAsDataURL(file/*, "UTF-8"*/);
            reader.onload = function (event) {
                globalConfig_ResizeUploadedImage = event.target.result;
              //  document.getElementById('input-FloatPanel_AyohaUserRegistrationPhotoName').value = fileName;
                // console.log("Original Size:" + globalUserPicProfile64);




              
               // LoadingPanelShow(getLoadingIcon(), 'Loading....');
                Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieFormImage').setSrc(globalConfig_ResizeUploadedImage);

                Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_TakeMySelfie').setHidden(true);
                Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ReTakeMySelfie_Submit').setHidden(true);
                Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AfterSubmit').setHidden(false);
               // LoadingPanelHide();

               ResizeUploadedImage('input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload');

            };


        }
        else {
            //  img64AccPicProfile = Picture;
        }
    }
}

var globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ID;
function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_SubmitMySelfie() {
if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt=="Yes"){
var recieptName=document.getElementById('inputName-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').value;
var recieptLink;
if(recieptName){
    recieptLink=globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage;
}else{
    swalFireFail("Fail-Receipt Required!"); 
    return; 
}

}else{
    recieptName="NotRequired";
    globalConfig_ResizeUploadedImage_Receipt="NotRequired";
}










    if (globalConfig_ResizeUploadedImage) {
        LoadingPanelShow(getLoadingIcon(), 'Submit....');
        var task = Ext.create('Ext.util.DelayedTask', function () {

            var objn = {
                "ID": globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ID,
                "ContestCode": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode,
                "SelfieImagePath": globalConfig_ResizeUploadedImage,
                "SelfieImageName": globalConfig_ResizeUploadedImageName,
                "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                "CreatedBy": GetCurrAyohaUserAccountNo(),
                "Noted": "NA",
                "ContestStatus": "Submitted",
                "EnterpriseAccNo": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo,
                "ReceiptLink": recieptLink,
                "ReceiptName": recieptName,
                "isRequiredReceipt": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt,
                "ContestType":globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType
            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaRewardContest_SelfieAndWin/AyohaRewardContestSelfieAndWinInsertUpdate',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide();
                        swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/follow-up.png", "Your Selfie Has Been Submitted!", "Purple", "Purple");
                        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Selfie</div></div>');
                        FloatPanel_DashboardMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                    }
                    else {

                        swalFireFail("Fail!-->" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }
                    Ext.Viewport.unmask();
                    LoadingPanelHide();

                },

                failure: function (result, request) {
                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }

            });

            Ext.Viewport.unmask();
        });
        task.delay(500);
    } else {
        swalFireFail("No Selfie Image!");
    }

 
}


function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_DeleteMySelfie_Staging() {
    Swal.fire({
        title: 'Are you sure want to delete?',
        //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_DeleteMySelfie();
          
        }
    });
}




function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_FileUpload_DeleteMySelfie() {



    LoadingPanelShow(getLoadingIcon(), 'Delete....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID": globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ID,
            "ContestCode": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo()
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardContest_SelfieAndWin/AyohaRewardContestSelfieAndWinDelete',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide();
                    FloatPanel_DashboardMerchantReward_MembershipContestDetailHide();
                    FloatPanel_DashboardMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);
}

var globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage;


function inputImgFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage() {
    var file = document.getElementById('inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage').files[0];


    var fileName = document.getElementById('inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage').files[0].name;

    // var FileSize = file.size / 1024; // in MB
    // console.log(FileSize);
    // if (FileSize > 4096) {


    //     swalFireFail("Image size cannot exceeds 4 MB!");
    //     return;
        
    // } else {
    // }
        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage= event.target.result;
                 //  globalConfig_ResizeUploadedImage_Receipt = event.target.result;

                    document.getElementById('inputName-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').value = fileName;
                 //console.log(globalConfig_ResizeUploadedImage_Receipt)
                    //Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAdd_BackgroundImgCard').setHtml('<div ><img src="' + globalMembershipCardManagement_NewCardAdd_UploadedImage + '"  style="width:100%;height:150px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');
                   
                   
                    Ext.getCmp('FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage').setHtml('<img src="' + globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage + '"  style="width: 140px; height: 140px; border:2px solid purple; border-radius: 50%; "/>');

                   
                  //  LoadingPanelShow(getLoadingIcon(), 'Loading....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

       
      // ResizeUploadedImage_Receipt('inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage');
       ResizeUploadedImage_Receipt();
       
       // LoadingPanelHide();
        Ext.Viewport.unmask();
    });
    task.delay(200);
                   
                   
                   
                
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    
}


var globalConfig_ResizeUploadedImage_Receipt;
var globalConfig_ResizeUploadedImageName_Receipt;
function ResizeUploadedImage_Receipt() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
//         var filesToUploads = document.getElementById('inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage').files;
// console.log(val)
     //  globalConfig_ResizeUploadedImageName_Receipt = document.getElementById('inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage').files[0].name;
      
        var filesToUploads = document.getElementById('inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage').files;
    
       
        var file = filesToUploads[0];
        //var file=globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage;

        
        if (file) {

            var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function (e) {

                var img = document.createElement("img");
                img.src = e.target.result;

                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                var MAX_WIDTH = 1000;
                var MAX_HEIGHT = 1000;
                var width = img.width;
                var height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

              globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage = "";
//var vv;
globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage = canvas.toDataURL(file.type);

                // document.getElementById('output').src = dataurl;

                Ext.getCmp('containerFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ViewReceipt').setHidden(false);

               //alert("Resize image:" + globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage)
           
           
            }
            reader.readAsDataURL(file);

        }

    } else {
        alert('The File APIs are not fully supported.');
    }
}


function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage_Image() {
    $(document).ready(function () {
        $("input#inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage").click();
    });
}







function FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_SubmitMyAnswer() {
    var myAnswer=document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_AnswerSection').value;
    if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt=="Yes"){
    var recieptName=document.getElementById('inputName-FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceipt').value;
    var recieptLink;
    if(recieptName){
        recieptLink=globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage;
    }else{
        swalFireFail("Fail-Receipt Required!"); 
        return; 
    }
    
    }else{
        recieptName="NotRequired";
        globalConfig_ResizeUploadedImage_Receipt="NotRequired";
    }
    
    
    
    
    
    
    
    
    
        if (myAnswer) {
            LoadingPanelShow(getLoadingIcon(), 'Submit....');
            var task = Ext.create('Ext.util.DelayedTask', function () {
    
                var objn = {
                    "ID": globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_ID,
                    "ContestCode": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode,
                    "SelfieImagePath": myAnswer,
                    "SelfieImageName": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType,
                    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                    "CreatedBy": GetCurrAyohaUserAccountNo(),
                    "Noted": "NA",
                    "ContestStatus": "Submitted",
                    "EnterpriseAccNo": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo,
                    "ReceiptLink": recieptLink,
                    "ReceiptName": recieptName,
                    "isRequiredReceipt": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt,
                    "ContestType":globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType
                };
                console.log(objn);
                var _value = Ext.Ajax.request({
    
                    type: "POST",
    
                    url: GetAPIurl() + '/AyohaRewardContest_SelfieAndWin/AyohaRewardContestSelfieAndWinInsertUpdate',
    
                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
    
                    success: function (result, request) {
    
                        //console.log(result.responseText);
    
    
                        data = Ext.decode(result.responseText.trim());
    
                        if (data.success == "true") {
                            FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormHide();
                            swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/AnswerSubmittedIcon.png", "Your Answer Has Been Submitted!", "Purple", "Purple");
                            Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Answer</div></div>');
                            FloatPanel_DashboardMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                        }
                        else {
    
                            swalFireFail("Fail!-->" + result.responseText.trim());
                            Ext.Viewport.unmask();
                            LoadingPanelHide();
                        }
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
    
                    },
    
                    failure: function (result, request) {
                        swalFireFail("Fail!");
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }
    
                });
    
                Ext.Viewport.unmask();
            });
            task.delay(500);
        } else {
            swalFireFail("No Valid Answer !");
        }
    
     
    }
    