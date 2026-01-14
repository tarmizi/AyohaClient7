Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_PointTransactions', {

});

var _FloatPanel_AyohaReward_PointTransactions;


var isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';

var _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";









function FloatPanel_AyohaReward_PointTransactions() {

    _FloatPanel_AyohaReward_PointTransactions =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaReward_PointTransactionsID',
         draggable: false,
         zIndex: 140,


         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: true,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',

         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {
                         //if (e.direction == "up") {
                         //    FloatPanel_AyohaReward_PointTransactionsHide();
                         //}
                         if (e.direction == "left") {
                             _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                             RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                             RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                         }
                        
                     }
                 });
             }
         },


         items: [


          
             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 //  style: "background-color: transparent;",
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'vbox',
                     pack: 'center',
                     align: 'center'
                 },
                 items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        // width: 40,
                        //zIndex:-10,
                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,
                        docked: 'top',
                       height:50,
                        id: 'containerFloatPanel_AyohaReward_PointTransactionsHeader1',
                        style: "background-color: transparent;",
                        //style: {
                        //    // background: '#D25959',
                        //    background: 'transparent',
                        //    // border: '2px'
                        //},
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
                                       xtype: 'button',
                                       id: 'btnFloatPanel_AyohaReward_PointTransactionsBack',
                                       height: 30,
                                       width: 35,
                                       margin: '0 0 0 0',
                                       // iconCls: 'list',
                                       html: '<div ><img src="resources/icons/backwhite03Ori.png"   width="25" height="20" alt="Company Name"></div>',
                                       ui: 'plain',
                                       handler: function () {
                                           _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                               type: 'slideOut',
                                               direction: 'left',
                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                               duration: 250
        
                                           }));
                                           isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                                           _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
                                           RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                                       }
                                   },
        
                                              {
                                                  xtype: 'spacer',
        
                                              },
        
                                              {
                                                  xtype: 'button',
                                                  margin: '-10 -13 0 0',
                                                  zIndex: 100,
                                                  html: '<font size=2 color=white><b>Ayoha Points(AP)</b></font>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                                          type: 'slideOut',
                                                          direction: 'right',
                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                          duration: 250
        
                                                      }));
                                                      isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                                                      _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
                                                      RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                                                  }
                                              },
        
                                    {
                                        xtype: 'button',
                                        id: 'btnbtnFloatPanel_AyohaReward_PointTransactionsBacksLogo',
                                        height: 35,
                                        width: 35,
                                        // iconCls: 'list',
                                        margin: '-5 3 0 0',
                                        html: '<div><img src="resources/icons/Logo/LogoWhiteSimplifed.png" width="25" height="25" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                                type: 'slideOut',
                                                direction: 'right',
                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250
        
                                            }));
                                            isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                                            _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
                                            RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                                        }
                                    },
        
                                                     
                                                   
        
        
        
        
        
        
        
        
        
                               ]
        
                    },
        

                     {
                         xtype: 'container',
                        // height: 135,
                         height: 120,
                         //  hidden:true,
                         //flex: 1,
                         // height:'35%',
                         //height: 198,

                         //  height: 173,
                         width: '100%',
                         id: 'containerFloatPanel_AyohaReward_PointTransactionsCompanyLogoHeaderMaster',
                         docked: 'top',
                         style: "background-color: transparent;",
                         //   style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',
                         //style: {

                         //    background: 'transparent',

                         //},

                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items: [



                             {

                                 xtype: 'container',
                                 margin: '-31 0 0 0',
                                 //width: '100%',
                                 // zIndex: 190,
                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                 //hidden: true,
                                 docked: 'top',
                                 id: 'containerFloatPanel_AyohaReward_PointTransactionsCompanyLogoHeader',
                                 style: "background-color: transparent;",
                                 //style: {
                                 //    // background: '#D25959',
                                 //    background: 'transparent',
                                 //    // border: '2px'
                                 //},

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
                                                   //  hidden:true,
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center'

                                                     },
                                                     items: [

                                                         {
                                                             width: 16,
                                                             height: 16,
                                                             html: '<div style="margin:30px 0px 0px 40px"><img src="resources/icons/shiningIcon.png" width="16" height="16" alt="Company Name"></div>',
                                                         },
                                                         {
                                                             xtype: 'spacer'
                                                         },
                                                         {
                                                             width: 30,
                                                             height: 30,
                                                             html: '<div style="margin:5px 0px 0px 20px"><img src="resources/icons/shiningIcon.png" width="30" height="30" alt="Company Name"></div>',
                                                         },
                                                          {
                                                              xtype: 'spacer'
                                                          },
                                                          {
                                                              width: 36,
                                                              height: 36,
                                                              hidden:true,
                                                              html: '<div style="margin:20px 0px 0px -40px"><img src="resources/icons/shiningIcon.png" width="36" height="36" alt="Company Name"></div>',
                                                          },
                                                         {
                                                             xtype: 'spacer'
                                                         },
                                                         {
                                                             width: 26,
                                                             height: 26,
                                                             html: '<div style="margin:20px 0px 0px -40px"><img src="resources/icons/shiningIcon.png" width="26" height="26" alt="Company Name"></div>',
                                                         },
                                                     ]

                                                 },





                                            {
                                                xtype: 'container',
                                                styleHtmlContent: true,
                                                // hidden:true,
                                                //margin: '-1 0 0 0',
                                                //margin: '20 0 0 -20',
                                                // margin: '-85 0 0 -28',
                                                margin: '-55 0 0 0',
                                                width: '100%',
                                                //zIndex: 90,
                                                style: 'background-color: transparent;',

                                                //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 80%;background-repeat: no-repeat;',
                                                //  style: 'border-right:4px none #fac;border-left:4px none #fac;border-bottom:4px none #fac;border-top:2px none #ECF0F1 ;background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;border-radius: 0px 0px 250px 250px;',


                                                //style: 'border-right:4px solid #fac;border-left:4px solid #fac;border-bottom:4px solid #fac;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 0px 0px 250px 250px;',




                                                //zIndex: 80,
                                                //height: 90,
                                                //width: 90,
                                                // margin: '70 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_PointTransactionsCompanyLogo',
                                                layout: {

                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [

                                                    {
                                                        //xtype: 'button',

                                                        //  width: 150,

                                                        margin: '0 0 0 0',
                                                        id: 'htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected',
                                                        //badgeText: "2",
                                                        // hidden:true,
                                                        //html: '<div style="margin:3px 0px 0px 0px"><img src="resources/icons/ayohaReward01.gif" width="150" height="150" alt="Company Name"></div>',
                                                        html: '<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>2560</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-28px 0px 0px 0px"><b>Ayoha Point</b></div><br>'
                                                    },



                                                ]
                                            },


                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                               //  hidden: true,
                                                 margin: '-30 0 0 0',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [

                                                     {
                                                         width: 46,
                                                         height: 46,
                                                         hidden:true,
                                                         html: '<div style="margin:-60px 0px 0px 20px"><img src="resources/icons/shiningIcon.png" width="46" height="46" alt="Company Name"></div>',
                                                     },
                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                      {
                                                          width: 36,
                                                          height: 36,
                                                          html: '<div style="margin:5px 0px 0px -120px"><img src="resources/icons/shiningIcon.png" width="30" height="30" alt="Company Name"></div>',
                                                      },
                                                     {
                                                         width: 30,
                                                         height: 30,
                                                         html: '<div style="margin:22px 0px 0px 40px"><img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name"></div>',
                                                     },
                                                      {
                                                          xtype: 'spacer'
                                                      },
                                                     {
                                                         width: 20,
                                                         height: 20,
                                                         html: '<div style="margin:-20px 0px 0px -20px"><img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name"></div>',
                                                     },
                                                 ]

                                             },





                                                            {
                                                                margin: '0 0 0 0',
                                                                id: 'htmlFloatPanel_AyohaReward_PointTransactionsPointsCollectedx',
                                                                hidden: true,
                                                                html: '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:40px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;color:white;width:100%;height:110px">1005</div>',

                                                                //  html: '<font size=13 color=black><b>1005</b></font>'
                                                            },
                                                            {
                                                                margin: '-70 0 0 0',
                                                                hidden: true,
                                                                // html: '<font size=2 color=white><b>Ayoha Rewards Points</b></font>'
                                                                html: '<div style="color:white;text-align: center;font-size:12px;width:100%;"><b>Points</b></div>'
                                                            },

                                        ]

                             },


                         ]
                     },
                 


{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaReward_PointTransactionsMasterHeaderTop',
    // hidden:true,
    width: '100%',
    height: 25,
    docked: 'top',
    //  zIndex: 90,

    // style: "background-color: transparent;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;",
    // style: 'border-bottom:1px solid #D25959;background-color:transparent',
    //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;',
    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
    style: {
        // background: '#D25959',
        background: 'transparent',
        // border: '2px'
    },
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items: [
        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaReward_PointTransactionsMasterHeader',
            width: '100%',
            height: 25,
            // style: "background-color: white",
            // style: 'border-bottom:1px solid #D25959;background-color:transparent',
            style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
            // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
            //style: "background-color: #F35B57;",

            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [

                {
                    width: 20,
                    height: 20,
                    margin: '0 0 0 10',
                    id: 'htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderIcon',
                    html: '<img src="resources/icons/transaction01.png" width="15" height="15" alt="Company Name">',
                },
                {
                    //  width: 150,
                    margin: '-5 0 0 -5',
                    id: 'htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt',
                    html: '<font size=1 color=black>Ayoha Point Transaction</font>'
                },
                {
                    xtype: 'spacer'
                },
                 {
                     xtype: 'button',
                     id: 'btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Maximize',
                     //  badgeText: '1',
                     margin: '-2 10 0 0',
                   //  hidden: true,
                     height: 30,
                     width: 30,
                     html: '<img src="resources/icons/filterPurpleThree.png" width="20" height="20" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                         FloatPanel_YearOnlyShow();
                         //////Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Minimize').setHidden(false);
                         //////Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Maximize').setHidden(true);
                         //////Ext.getCmp('containerFloatPanel_AyohaReward_PointTransactionsCompanyLogoHeaderMaster').setHidden(true);
                         //////var a = adjustHeight() + 135;
                         //////Ext.getCmp('List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory').setHeight(a);

                         //
                     }
                 },
                   {
                       xtype: 'button',
                       id: 'btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Minimize',
                       //  badgeText: '1',
                       margin: '-2 10 0 0',
                       hidden: true,
                       height: 25,
                       width: 25,
                       html: '<img src="resources/icons/minimizepurple.png" width="15" height="15" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           // FloatLoyaltyCardStampShow();
                           // FloatPanel_AyohaReward_PointTransactions_MoveCarousel(2);
                           Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Minimize').setHidden(true);
                           Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Maximize').setHidden(false);


                           Ext.getCmp('containerFloatPanel_AyohaReward_PointTransactionsCompanyLogoHeaderMaster').setHidden(false);
                           var a = adjustHeight();
                           Ext.getCmp('List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory').setHeight(a);

                           //
                       }
                   },
                //{
                //    id: 'FloatPanel_AyohaReward_PointTransactionsMasterHeader_PointHistorySearchTxt',
                //    margin: '-5 10 0 0',
                //    width: 120,
                //    height: 16,
                //    html: '<input type="text" id="input-RedeemListHistorySearchTxt" placeholder="Search " style="border-color:purple;color:black;width:120px;text-align: center">'
                //}
            ]

        },
    ]
},


//{


//    xtype: 'list',
//    // height: '64%',
//    // height: '100%',
//    // height: 200,
//    //   flex: 2,
//    store: 'AyohaRewardPointLoadBySubscriberAccNoStore',
//    id: 'List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory',
//    mode: 'SINGLE',
//    disableSelection: true,
//    grouped: true,
//    // disableSelection: true,


//    itemTpl: '<div class="myContent">' +


//                            '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{EnterpriseName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-1px 0px 0px 0px;">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-10px 0px 0px 0px;"><b>({AyohaPointType})</b></div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right">{ModifiedTypeCRDB}{AyohaPoint} Point(s)</div></td></tr></table>' +

//    '</div>',
//    emptyText: '<div class="myContent">No Transactions</div>',
//    width: '100%',
//    // height: 600,
//    // height: '100%',

//    listeners: {


//        itemdoubletap: function (dataview, index, target, record, e, eOpts) {


//        },

//        itemsingletap: function (dataview, index, target, record, e, eOpts) {

//        }
//    }






//},


//{
//    xtype: 'carousel',

//    //hidden: true,
//    id: 'carouselFloatPanel_AyohaReward_PointTransactions_AyohaPointHistory',
//    style: 'background-color:#f7f7f7',
//    width: '100%',
//    height: '100%',
//    indicator: false,
//    items: [
      

//    ]
//},


      {
          xtype: 'container',
          id: 'containerFloatPanel_AyohaReward_PointTransactions_AyohaPointHistory',
          style: ' background-color: transparent',
          margin: '0 0 0 0',
          height: '100%',
          width: '100%',
          layout: {
              type: 'vbox',
              pack: 'start',
              align: 'left'

          },
          items: [
              {


                  xtype: 'list',
                  // height: '64%',
                  // height: '100%',
                  // height: 200,
                  //   flex: 2,
                  store: _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore,
                  id: 'List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory',
                  mode: 'SINGLE',
                  disableSelection: true,
                  grouped: true,
                  scrollable: {
                      direction: 'vertical',
                      indicators: {
                          y: {
                              autoHide: true
                          },
                          x: {
                              autoHide: true
                          }
                      }
                  },
                  // disableSelection: true,

                  itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:90px;">' +
                //  itemTpl: '<div class="myContent">' +


                                       

                                        // '<table onclick="FloatPanel_AyohaReward_PointTransaction_ShowTransactionDetail({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode_AyohaStore_Order}' + "'" + ',' + "'" + '{AyohaPointType}' + "'" + ',' + "'" + '{GUIDRow}' + "'" + ',' + "'" + '{PaymentNo}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{PointAmountEquation}' + "'" + ',' + "'" + '{PaymentAmount}' + "'" + ',' + "'" + '{PaymentNoDisplay}' + "'" + ',' + "'" + '{MembershipCardImg}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{PaymentNote}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{EnterpriseAddress}' + "'" + ',' + "'" + '{EnterpriseTagLine}' + "'" + ')" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:100px;" ><thead><tr><th style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:bottom;word-break:normal"><div style="margin:5px 0px 0px 0px">{ModifiedEnterpriseName}</div></th><th style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">{ModifiedTypeCRDB}</th></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal">{ModifiedMembershipCardName}<br><div style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;margin:0px 0px 0px 0px">{ModifiedCreatedDate_DateOnly} {ModifiedCreatedDate_TimeOnly}</div></td></tr></thead></table>' +
  '<table onclick="FloatPanel_AyohaReward_PointTransaction_ShowTransactionDetail({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode_AyohaStore_Order}' + "'" + ',' + "'" + '{AyohaPointType}' + "'" + ',' + "'" + '{GUIDRow}' + "'" + ',' + "'" + '{PaymentNo}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{PointAmountEquation}' + "'" + ',' + "'" + '{PaymentAmount}' + "'" + ',' + "'" + '{PaymentNoDisplay}' + "'" + ',' + "'" + '{MembershipCardImg}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{PaymentNote}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{EnterpriseAddress}' + "'" + ',' + "'" + '{EnterpriseTagLine}' + "'" + ')" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:100px;" ><thead><tr><th style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:bottom;word-break:normal"><div style="margin:5px 0px 0px 0px;">{ModifiedMembershipCardName}</div></th><th style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">{ModifiedTypeCRDB}</th></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal">{ModifiedEnterpriseName}<div style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;margin:0px 0px 0px 0px;font-weight:normal;">{ModifiedCreatedDate_DateOnly} {ModifiedCreatedDate_TimeOnly}</div></td></tr></thead></table>' +



                '</div>',
                  emptyText: '<div class="myContent">No Transactions</div>',
                  width: '100%',
                  // height: 600,
                  // height: '100%',

                  //listeners: {


                  //    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                  //        var AyohaPointType = record.get('AyohaPointType');
                  //        var RedeemHistoryCode = record.get('GUIDRow');
                  //        var str = AyohaPointType;
                  //        var boolAyohaPointType = str.includes("Ayoha Point Redemption");
                  //        if (boolAyohaPointType) {
                  //            FloatPanel_AyohaReward_RedemptionHistoryShow_FromFloatPanel_AyohaReward_PointTransaction(RedeemHistoryCode);
                  //        }
                         

                  //    },

                  //    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                  //        var AyohaPointType = record.get('AyohaPointType');
                  //        var RedeemHistoryCode = record.get('GUIDRow');
                  //        var str = AyohaPointType;
                  //        var boolAyohaPointType = str.includes("Ayoha Point Redemption");
                  //        if (boolAyohaPointType) {
                  //            FloatPanel_AyohaReward_RedemptionHistoryShow_FromFloatPanel_AyohaReward_PointTransaction(RedeemHistoryCode);
                  //        }

                  //    }
                  //}






              },
          ]

      },









                 ]

             },




         ]















     });
    return _FloatPanel_AyohaReward_PointTransactions;



}



function FloatPanel_AyohaReward_PointTransactionsShow() {
   
    Ext.Viewport.remove(_FloatPanel_AyohaReward_PointTransactions);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_PointTransactions());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_PointTransactionsHide()");
    isFloatPanel_AyohaReward_PointTransactionsOpen = 'Y';
    FloatPanel_AyohaReward_PointTransactionsAdjustHeight();
   
    FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointLoadBySubscriberAccNoStore();


    //Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    //AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();


if(isFloatPanel_AyohaStore_CheckOutOpen=="Y"){
    Ext.getCmp('FloatPanel_AyohaReward_PointTransactionsID').setZIndex(400);
}

}





function FloatPanel_AyohaReward_PointTransactionsHide() {

    if (isFloatPanel_AyohaReward_PointTransactionsOpen == "Y") {
        _FloatPanel_AyohaReward_PointTransactions.hide(); isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
        _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
        RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
    }

 
}





function FloatPanel_AyohaReward_PointTransactionsAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder='N';

    var newHeights = x - 196;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_AyohaReward_PointTransactionsID').setHeight(x + 20);
    Ext.getCmp('List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory').setHeight(newHeights);


}











function FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointLoadBySubscriberAccNoStore() {


    
   

    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Point Transaction - Year ' + GetCurrentYear() + '</font>');

    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('Year', GetCurrentYear());
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointLoadBySubscriberAccNo');
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              //  alert('Store loaded successfully, total records: ' + records.length);
    
                var store = records[0]; // Access only the first record
                var count = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getCount();
                if (count > 0) {
                   // var store = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getAt(0);
                    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + store.get('AyohaPoint_Yearly') + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');
        
                } else {
                    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');
        
                }
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getCount();
    //     if (count > 0) {
    //         var store = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getAt(0);
    //         Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + store.get('AyohaPoint_Yearly') + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

    //     } else {
    //         Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

    //     }
      
    // });
    // task.delay(1000);


    // Ext.Viewport.setMasked(false);




}





function FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointLoadBySubscriberAccNoStore_ByYear(Year) {



 
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Point Transaction - Year ' + Year + '</font>');
    FloatPanel_YearOnlyHide();
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('Year', Year);
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointLoadBySubscriberAccNo');
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getCount();
        if (count > 0) {
            var store = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getAt(0);
            Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + store.get('AyohaPoint_Yearly') + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

        } else {
            Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

        }
      
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);




}


function FloatPanel_AyohaReward_PointTransaction_ShowTransactionDetail(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, AyohaPointType, GUIDRow, PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate,OrderNo,CreatedBy,EnterpriseAddress,EnterpriseTagLine) {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaStore_CheckOut";
    //var AyohaPointType = record.get('AyohaPointType');
    //var RedeemHistoryCode = record.get('GUIDRow');
   
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseAccNo = EnterpriseAccNo;
    glonbalDashboard_SearchMerchantList_FullCompanyAddress=EnterpriseAddress;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseTagLine = EnterpriseTagLine;

    localStorage.setItem("EnterpriseAccNo",EnterpriseAccNo);
    localStorage.setItem("PaymentNo",PaymentNo);
//FloatPanel_AyohaReward_PointTransactionsHide();



// alert(ItemCartCode)
// alert(PaymentNo)
    if (AyohaPointType == "(Point Loyalty Card)") {


       // PN-370-152-0-0-72666-0134292934-NoEnterprise
        if (PaymentNo) {
            if (PaymentNo.startsWith('ePN')) {
                FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
            } 
            if (PaymentNo.startsWith('PN')) {
               // FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo,CreatedDate);

            } 
            else {
                // FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore(ItemCartCode, MembershipCardCode_AyohaStore_Order);
               
               if(PaymentNo=="NotRequired"){

               }else{
                
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo, CreatedDate);

               }
               
               
               
            }
        } else {
           
        }
     

       
   

        return;
    }

    if (AyohaPointType == "<font color=purple class=blink_me> <b>Ayoha eWallet Greeting Point! </b></font>") {

        swalFireStampInfo("Opening Account Point,Complementary Point from Ayoha Reward.Com!","resources/icons/Logo/LogoOrangeSimplifed.png");

       return;
    }

    if (AyohaPointType == "(Stamp Loyalty Card)") {
      //  FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore(ItemCartCode, MembershipCardCode_AyohaStore_Order);
       // FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo)


        if (PaymentNo) {
            if (PaymentNo.startsWith('PN')) {
                //FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);

            } else {

                //FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);


            }
        } else {
           
            if(CreatedBy=="Auto-PaidOnline"){
                swalFireStampInfo("Complementary Point from Ayoha Reward.Com!","resources/icons/Logo/LogoOrangeSimplifed.png");
                return;
            }
            if(CreatedBy=="AyohaAdmin"){
                swalFireStampInfo("Opening Account Point,Complementary Point from Ayoha Reward.Com!","resources/icons/Logo/LogoOrangeSimplifed.png");
                return;
            }
            else{
                swalFireStampInfo("Stamp Thru QR Code by Merchant!","resources/icons/stampAnimation.gif");
                return;
            }
            
        }
        
       
        //if (PaymentNo.startsWith('ePN')) {
        //    FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
        //} else {
           
        //}

       
        return;
    }
    

    var str = AyohaPointType;
    var boolAyohaPointType;
    boolAyohaPointType = str.includes("Ayoha Point Redemption");
    if (boolAyohaPointType) {
        FloatPanel_AyohaReward_RedemptionHistoryShow_FromFloatPanel_AyohaReward_PointTransaction(GUIDRow);
    }
    boolAyohaPointType = str.includes("Winner TAP And Win Contest Point");
    if (boolAyohaPointType) {
        //FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
        // FloatPanel_AyohaeWallet_Transaction_DetailShow(CreatedDate, EnterpriseName, EnterpriseLogo, EnterpriseAccNo, PaymentNote, TransactionAmount, "AyohaRewardContest_TapAndWin", "NA", "NA", "NA", EnterpriseName, PaymentNo)
        var arrPayNote = PaymentNote.split(".");
        var strPayAmount1 = arrPayNote[1];
        var strPayAmount2 = arrPayNote[2];

        var last = strPayAmount1.charAt(strPayAmount1.length - 1);

      //  console.log(strPayAmount1);
        var modifiedPayAmount = last + '.' + strPayAmount2;

        FloatPanel_AyohaeWallet_Transaction_DetailShow(CreatedDate, EnterpriseName, EnterpriseLogo, EnterpriseAccNo, PaymentNote, modifiedPayAmount, "AyohaRewardContest_TapAndWin", "NA", "NA", "NA", EnterpriseName, PaymentNo)
    }
   
}