Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaPointRedemption_Cancel', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaPointRedemption_Cancel;


var isFloatPanel_AyohaPointRedemption_CancelOpen = 'N';

var starCount = 0;









function FloatPanel_AyohaPointRedemption_Cancel() {

    _FloatPanel_AyohaPointRedemption_Cancel =
     Ext.create('Ext.Panel', {
         zIndex: 300,
         xtype: 'container',
         // height: '50%',
         width: '95%',
         height: 385,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaPointRedemption_CancelID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
         //hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px none;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaPointRedemption_Cancel.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaPointRedemption_CancelOpen = 'N';
                             RemovePages("FloatPanel_AyohaPointRedemption_CancelHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaPointRedemption_Cancel.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaPointRedemption_CancelOpen = 'N';
                             RemovePages("FloatPanel_AyohaPointRedemption_CancelHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaPointRedemption_CancelBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                             // width: 40,
                             style: ' background-color:transparent;',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_AyohaPointRedemption_CancelHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_AyohaPointRedemption_CancelBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backblack.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaPointRedemption_Cancel.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaPointRedemption_CancelOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaPointRedemption_CancelHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '0 0 0 0',
                                                       id: 'htmlFloatPanel_AyohaPointRedemption_Cancel_TitleHeaderTxt',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Cancel Redemption</div>',

                                                       //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                   },

                                            {
                                                xtype: 'button',

                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 40,
                                                width: 40,
                                                // iconCls: 'list',
                                                id: 'btnFloatPanel_AyohaPointRedemption_Cancel_PicProfile',
                                                html: '<div ><img src="resources/icons/UnableRedeem01.png" width="30" height="30" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_AyohaPointRedemption_Cancel.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));

                                                    isFloatPanel_AyohaPointRedemption_CancelOpen = "N";
                                                    RemovePages("FloatPanel_AyohaPointRedemption_CancelHide()");
                                                }
                                            },












                                    ]

                         },


                    {
                        margin: '0 0 0 10',
                        id: 'htmlFloatPanel_AyohaPointRedemption_Cancel_ReviewTxt',
                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Cancel Redemption Remarks</div>',
                        //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                    },


               //{
               //    xtype: 'container',
               //    style: 'background-color: white;',
               //    id: 'containerFloatPanel_AyohaPointRedemption_CancelInner',

               //    width: '100%',
               //    layout: {

               //        type: 'vbox',
               //        pack: 'start',
               //        align: 'center'
               //    },
               //    height: 201,
               //    //scrollable: {
               //    //    direction: 'vertical',
               //    //    directionLock: true
               //    //},

               //    items: [





               //    ]


               //},
 //{
 //    xtype: 'panel',
 //    height: 20
 //},




            {
                xtype: 'container',
                width: '100%',
                id: 'containerFloatPanel_AyohaPointRedemption_Cancel_BodyMsg',
                style: ' background-color: transparent',
                height: 261,
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },

                items: [

                     {

                         margin: '10 0 0 0',
                         width: '95%',
                         height: '100%',
                         // height: 20,
                         id: 'htmlFloatPanel_AyohaPointRedemption_Cancel_BodyMsg',
                         html: '<textarea id="input-FloatPanel_AyohaPointRedemption_Cancel_BodyMsg"  placeHolder="Remarks is Compulsory"  style="border-bottom: 1px solid grey;border-top: 0px; border-right: 0px;border-left: 0px;color:grey;text-align: left;font-family:Century Gothic;font-size:16px;background-color: #f5f5f5;width:100%;height:200px;"    maxlength="1250"  wrap="hard">'
                     },

                ]

            },
 

  {
      xtype: 'container',
      width: '100%',
      margin: '-40 0 0 0',
      height: 35,
      layout: {
          type: 'vbox',
          pack: 'center',
          align: 'center',
      },
      items: [
          {
             
              id: 'htmlFloatPanel_AyohaPointRedemption_Cancel_ReviewTxt2',
              html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Are you sure want to cancel?</div>',
              //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
          },

      ]
  },
    



                {
                    xtype: 'container',
                    width: '100%',
                    height: 40,
                    margin: '6 0 0 0',
                    // docked: 'bottom',
                    // height:'70%',
                    // width: 40,
                    style: ' background-color:transparent;',
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,
                    // style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    id: 'containerFloatPanel_AyohaPointRedemption_Cancelbottom',
                    layout: {
                        type: 'hbox',
                        pack: 'right',
                        align: 'right',
                    },
                    items: [

                        {
                            xtype: 'button',
                            // width: 200,
                            // hidden: true,
                            //  align: 'stretch',

                            ui: 'plain',
                            //  width: '80%',
                            height: 40,
                            margin: '0 0 0 0',
                            id: 'btnFloatPanel_AyohaPointRedemption_Cancel_Delete',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                            html: '<button class="buttonDeleteReview">No</button>',

                            handler: function () {
                                //  FloatPanel_AyohaUserRegistration_Save();
                           
                                FloatPanel_AyohaPointRedemption_CancelHide();







                            },
                        },
                        {
                            xtype: 'button',
                            // width: 200,
                            // hidden: true,
                            //  align: 'stretch',

                            ui: 'plain',
                            //  width: '80%',
                            height: 40,
                            margin: '0 0 0 0',
                            id: 'btnFloatPanel_AyohaPointRedemption_Cancel_AddPostReview',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                            html: '<button class="buttonPostReview">Yes</button>',

                            handler: function () {
                          
                                FloatPanel_AyohaPointRedemption_Cancel_YES();


                            },


                        },

                           
                    ]
                },



                ]


            },







                //{
                //    //width: '100%',
                //    //height: '50%',

                //    xtype: 'container',
                //    width: '100%',
                //    docked: 'bottom',
                //    height:'30%',
                //    //  ui: 'confirm',
                //    style: ' background-color:transparent;',
                //     style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 360px;background-repeat: no-repeat;',
                //    layout: {
                //        type: 'vbox',
                //        pack: 'end',
                //        align: 'center',
                //    },
                //    items: [
                //                    //{
                //                    //    html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //                    //}
                //    ]
                //    //style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                //    // html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //    //handler: function () {

                //    //}
                //},


             ]




         }







     });
    return _FloatPanel_AyohaPointRedemption_Cancel;





}












function FloatPanel_AyohaPointRedemptionCancelShow(ID) {

    Ext.Viewport.remove(_FloatPanel_AyohaPointRedemption_Cancel);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaPointRedemption_Cancel());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaPointRedemption_CancelHide()");
    isFloatPanel_AyohaPointRedemption_CancelOpen = 'Y';

   // var IDs = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var ItemCode = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var RedeemHistoryCode = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var RedeemPoint = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);

    FloatPanel_AyohaPointRedemption_Cancel_ID = ID;
    FloatPanel_AyohaPointRedemption_Cancel_ItemCode = ItemCode.get('ItemCode');
    FloatPanel_AyohaPointRedemption_Cancel_ItemHistoryCode = RedeemHistoryCode.get('RedeemHistoryCode');
    FloatPanel_AyohaPointRedemption_Cancel_RedeemPoint = RedeemPoint.get('RedeemPoint');

   

}

function FloatPanel_AyohaPointRedemption_CancelHide() {
    if (isFloatPanel_AyohaPointRedemption_CancelOpen == "Y") {
        _FloatPanel_AyohaPointRedemption_Cancel.hide(); isFloatPanel_AyohaPointRedemption_CancelOpen = 'N';
        RemovePages("FloatPanel_AyohaPointRedemption_CancelHide()");
    }
   
}












var FloatPanel_AyohaPointRedemption_Cancel_ID;
var FloatPanel_AyohaPointRedemption_Cancel_ItemCode;
var FloatPanel_AyohaPointRedemption_Cancel_ItemHistoryCode;
var FloatPanel_AyohaPointRedemption_Cancel_RedeemPoint;
var FloatPanel_AyohaPointRedemption_Cancel_Remarks;
function FloatPanel_AyohaPointRedemption_Cancel_YES() {

   var remarks= document.getElementById('input-FloatPanel_AyohaPointRedemption_Cancel_BodyMsg').value;

    
    //console.log(CurrAyohaPoint);10009
    //console.log(globalFloatPanel_AyohaPointRedemption_Point);5000
   if (remarks.length < 5) {
        swalFireWarning("Remarks is required!");
        return;
    }
    //if (globalFloatPanel_AyohaPointRedemption_Point < CurrAyohaPoint) {

    //    return;
    //}



    

        var obj = {
            "ID": FloatPanel_AyohaPointRedemption_Cancel_ID,
            "ItemCode": FloatPanel_AyohaPointRedemption_Cancel_ItemCode,
            "RedeemHistoryCode": FloatPanel_AyohaPointRedemption_Cancel_ItemHistoryCode,
            "RedeemHistoryStatus": "Cancel",
            "RedeemHistoryStatusBy": GetCurrAyohaUserAccountNo(),
            "RedeemPoint": FloatPanel_AyohaPointRedemption_Cancel_RedeemPoint,
            "Remarks": remarks,
            "RowStatus": 'Active',
            "AyohaPoint": 0,

        };
        console.log(obj);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryInsertUpdate',

            dataType: "json",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Redeem item has been cancelled!");
                    FloatPanel_AyohaPointRedemption_RedeemHide()
                    //  Dashboard_AyohaRewardSummary();
                    // FloatPanel_RedeemPrizeHide();

                }
                else {

                    swalFireFail("Redeem cancel Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


                }

                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                // swalFireFail("Scan Failed!!");

            }

        });
    

}



