Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_RedemptionHistory_Details', {

});







var _FloatPanel_AyohaReward_RedemptionHistory_Details;

function FloatPanel_AyohaReward_RedemptionHistory_Details() {

    _FloatPanel_AyohaReward_RedemptionHistory_Details = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaReward_RedemptionHistory_DetailsID',
            // xtype: 'panel',
            zIndex: 300,
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
            modal: false,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
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
            style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    FloatPanel_AyohaReward_RedemptionHistoryHide();
                            //}
                            if (e.direction == "left") {
                                _FloatPanel_AyohaReward_RedemptionHistory_Details.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
                                RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
                            } if (e.direction == "right") {
                                _FloatPanel_AyohaReward_RedemptionHistory_Details.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
                                RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
                            } if (e.direction == "up") {
                                _FloatPanel_AyohaReward_RedemptionHistory_Details.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'up',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
                                RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
                            }
                            if (e.direction == "down") {
                                _FloatPanel_AyohaReward_RedemptionHistory_Details.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'down',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
                                RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
                            }
                          
                        }
                    });
                }
            },


            items: {
                //zIndex: 40,
                xtype: 'container',
                //style: ' background-color:transparent;',
                style: 'background-color:rgba(0, 0, 0, 0.8);border-radius: 0px 0px 0px 0px;',
                // style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                //  margin:'-10 0 0 -7',
                items: [


                    {

                        xtype: 'container',
                        width: '100%',
                        // width: 40,
                        //zIndex:-10,
                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,
                        docked: 'top',
                        id: 'containerFloatPanel_AyohaReward_RedemptionHistory_DetailsHeader',
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
                                       id: 'btnFloatPanel_AyohaReward_RedemptionHistory_DetailsBack',
                                       height: 30,
                                       width: 35,
                                       margin: '0 0 0 0',
                                       // iconCls: 'list',
                                       html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                       ui: 'plain',
                                       handler: function () {
                                           _FloatPanel_AyohaReward_RedemptionHistory_Details.hide(Ext.fx.Animation({
                                               type: 'slideOut',
                                               direction: 'left',
                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                               duration: 250

                                           }));
                                           is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
                                           RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
                                       }
                                   },

                                              {
                                                  xtype: 'spacer',

                                              },

                                              {
                                                  xtype: 'button',
                                                  margin: '0 -13 0 0',
                                                  zIndex: 100,
                                                  html: '<font size=2 color=white><b>Ayoha Points Redemption Item</b></font>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen.hide(Ext.fx.Animation({
                                                          type: 'slideOut',
                                                          direction: 'right',
                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                          duration: 250

                                                      }));
                                                      is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
                                                      RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
                                                  }
                                              },

                                    {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_AyohaReward_RedemptionHistory_DetailsBacksLogo',
                                        height: 30,
                                        width: 30,
                                        // iconCls: 'list',
                                        margin: '-5 3 0 0',
                                        html: '<div><img src="resources/icons/AyohaPointRedemptionWhite.png" width="25" height="25" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            _FloatPanel_AyohaReward_RedemptionHistory_Details.hide(Ext.fx.Animation({
                                                type: 'slideOut',
                                                direction: 'right',
                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
                                            RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
                                        }
                                    },












                               ]

                    },





                    {
                        xtype: 'button',
                        //  align: 'stretch',
                        // hidden:true,
                        id: 'btnFloatPanel_AyohaReward_RedemptionHistory_Details_ItemPoint',
                        ui: 'plain',
                        width: '100%',
                        height: 70,
                        margin: '5 0 0 0',
                        // width: '80%',
                        //style: {
                        //    background: '#FA8072',
                        //},
                        // padding: '10px',
                        html: '<font size=5px color=white><center><b>Welcome!!</center></font>',
                        //html: '<div style="background: transparent;width:80%;font-size: 13px;font-weight:normal;color:white;text-align:center;" >*<i>Dear contestant, please maintain your rank until the end of contest for entitlement to redeem the prize.</i></div>',
                        // text: '<button class="button3">OK</button>',

                        handler: function () {

                            // FloatPanel_AyohaReward_RedemptionHistory_DetailsHide();

                        },


                    },
                    {
                        height: 400,
                        width: 270,

                        xtype: 'container',
                        //style: {
                        //    background: 'white',
                        //},
                        // ui: 'plain',
                        style: 'background-color:white;border-radius: 20px 20px 20px 20px;border:3px solid purple;',
                        id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_Details_ItemImage',
                        name: 'clickableContainerFloatPanel_AyohaReward_RedemptionHistory_Details',
                        //margin: '0 0 0 0',
                        //id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                        //badgeText: "2",
                        html: '<img src="resources/icons/Samsung Galaxy.png" style="width: 270px; height: 350px; border:1px none white;margin:23px 0px 0px -2px; " alt="Company Name">',
                        //  html: '<img src="resources/icons/AyohaRankingRewardContest.png" style="width:99%;height:710px" alt="Company Name">',
                        //handler: function () {

                        //    FloatPanel_AyohaReward_RedemptionHistory_DetailsHide();

                        //},

                    },
                      {
                          xtype: 'button',
                          //  align: 'stretch',
                          // hidden:true,
                          id: 'btnFloatPanel_AyohaReward_RedemptionHistory_Details_ItemName',
                          ui: 'plain',
                          width: '100%',
                          //height: 50,
                          margin: '10 0 0 40',
                          // width: '80%',
                          //style: {
                          //    background: '#FA8072',
                          //},
                          // padding: '10px',
                          // html: '<font size=3px color=white><center>*<i>Dear Contestant ,you need to maintaince your ranking until end of this contest to entitle redeem the prize</i></center></font>',
                          html: '<div style="background: transparent;width:80%;font-size: 20px;font-weight:bold;color:white;text-align:center;" ><b>Muhammad Syazmer Bin Mustapha</b></div>',
                          // text: '<button class="button3">OK</button>',

                          handler: function () {

                              // FloatPanel_AyohaReward_RedemptionHistory_DetailsHide();

                          },


                      },

                        {
                            xtype: 'button',
                            //  align: 'stretch',
                            // hidden:true,
                            id: 'btnFloatPanel_AyohaReward_RedemptionHistory_Details_ItemPrice',
                            ui: 'plain',
                            width: '100%',
                            //height: 50,
                            margin: '0 0 0 40',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            // html: '<font size=3px color=white><center>*<i>Dear Contestant ,you need to maintaince your ranking until end of this contest to entitle redeem the prize</i></center></font>',
                            html: '<div style="background: transparent;width:80%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >Ayoha Account Created Successfully</div>',
                            // text: '<button class="button3">OK</button>',

                            handler: function () {

                                // FloatPanel_AyohaReward_RedemptionHistory_DetailsHide();

                            },


                        },









                        {
                            xtype: 'container',
                            style: 'background-color:transparent;',
                            docked: 'bottom',
                            width: '100%',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                            },
                            items: [


                                {
                                    margin: '0 0 0 0',
                                    html: '<div style="background: transparent;width:100%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >Redeem Status:</div>',
                                },
                            {
                                xtype: 'container',
                                width: '100%',
                                margin: '0 0 0 0',
                                style: 'background-color:transparent;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        margin: '0 0 0 0',
                                        width: '100%',
                                        id: 'FloatPanel_AyohaReward_RedemptionHistory_Details_Redeem_Status',
                                        html: '<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:normal;color:grey;"></div>'
                                    },
                                    

                                ]
                            },
                             {
                                 margin: '0 0 0 0',
                                 html: '<div style="background: transparent;width:100%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >Remarks:</div>',
                             },
                            {
                                xtype: 'container',
                                width: '100%',
                                margin: '0 0 0 0',
                                style: 'background-color:transparent;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        margin: '0 0 0 0',
                                        width: '100%',
                                        id: 'FloatPanel_AyohaReward_RedemptionHistory_Details_Redeem_Remark',
                                        html: '<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:normal;color:white;"></div>'
                                    },


                                ]
                            },
                             {
                                 margin: '0 0 0 0',
                                 html: '<div style="background: transparent;width:100%;font-size: 6px;font-weight:bold;color:black;text-align:center;" >-</div>',
                             },


                            ]
                        }





                ]

            },






        });

    return _FloatPanel_AyohaReward_RedemptionHistory_Details;
}


function FloatPanel_AyohaReward_RedemptionHistory_DetailsShow(ID) {
    Ext.Viewport.remove(_FloatPanel_AyohaReward_RedemptionHistory_Details);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_RedemptionHistory_Details());
    this.overlay.show();
    is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");

    

    var RedeemPoint = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var ImgPath = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var ItemName = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var ItemPrizePriceCost = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var ModifiedRedeemHistoryStatus = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    var Remarks = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.findRecord('ID', ID, 0, false, false, true);
    

    Ext.getCmp('FloatPanel_AyohaReward_RedemptionHistory_Details_Redeem_Remark').setHtml('<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:normal;color:white;width:100%">' + Remarks.get('Remarks') + '</div>');
    Ext.getCmp('FloatPanel_AyohaReward_RedemptionHistory_Details_Redeem_Status').setHtml('<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;width:100%">' + ModifiedRedeemHistoryStatus.get('ModifiedRedeemHistoryStatus') + '</div>');
    Ext.getCmp('btnFloatPanel_AyohaReward_RedemptionHistory_Details_ItemPoint').setHtml('<font size=8px color=white><center><b>' + RedeemPoint.get('RedeemPoint') + '</b></center></font><font size=2px color=white>Ayoha Point</font>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Details_ItemImage').setHtml('<img src="' + ImgPath.get('ImgPath') + '" style="width: 270px; height: 350px; border:1px none white;margin:23px 0px 0px -2px; " alt="Company Name">');
    Ext.getCmp('btnFloatPanel_AyohaReward_RedemptionHistory_Details_ItemName').setHtml('<div style="background: transparent;width:80%;font-size: 20px;font-weight:bold;color:white;text-align:center;" ><b>' + ItemName.get('ItemName') + '</b></div>');
    Ext.getCmp('btnFloatPanel_AyohaReward_RedemptionHistory_Details_ItemPrice').setHtml('<div style="background: transparent;width:80%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >Worth (RM):' + ItemPrizePriceCost.get('ItemPrizePriceCost') + '</div>');
    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_AyohaReward_RedemptionHistory_Details]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {           
          window.open("http://google.com/search?q=" + ItemName.get('ItemName') + "", '_system'); return false;
      }
    );
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_AyohaReward_RedemptionHistory_DetailsHide();
    //});
    //task.delay(2000);


}
var is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';

function FloatPanel_AyohaReward_RedemptionHistory_DetailsHide() {

    if (is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen == 'Y') {
        _FloatPanel_AyohaReward_RedemptionHistory_Details.hide();
        is_FloatPanel_AyohaReward_RedemptionHistory_DetailsOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()");
    }

}







function FloatPanel_AyohaReward_RedemptionHistory_DetailsNow() {



    var CurrAyohaPoint = parseInt(localStorage.getItem("AyohaPoint"));
    var intglobalFloatPanel_AyohaPointRedemption_Point = parseInt(globalFloatPanel_AyohaPointRedemption_Point);
    //console.log(CurrAyohaPoint);10009
    //console.log(globalFloatPanel_AyohaPointRedemption_Point);5000
    //if (CurrAyohaPoint < globalFloatPanel_AyohaPointRedemption_Point) {
    //    swalFireWarning("Not Enough Ayoha Point!");
    //    return;
    //}
    //if (globalFloatPanel_AyohaPointRedemption_Point < CurrAyohaPoint) {

    //    return;
    //}



    if (CurrAyohaPoint >= intglobalFloatPanel_AyohaPointRedemption_Point) {

        var obj = {
            "ID": 0,
            "ItemCode": globalFloatPanel_AyohaPointRedemption_ItemCode,
            "RedeemHistoryCode": GenerateRandomNo() + "-" + globalFloatPanel_AyohaPointRedemption_ItemCode + "-" + GetCurrAyohaUserAccountNo(),
            "RedeemHistoryStatus": "Submitted",
            "RedeemHistoryStatusBy": GetCurrAyohaUserAccountNo(),
            "RedeemPoint": intglobalFloatPanel_AyohaPointRedemption_Point,
            "Remarks": "NA",
            "RowStatus": 'Active',
            "AyohaPoint": CurrAyohaPoint,

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

                    swalFireSuccess("Redeem has been Submitted!");
                    FloatPanel_AyohaReward_RedemptionHistory_DetailsHide()
                    //  Dashboard_AyohaRewardSummary();
                    // FloatPanel_RedeemPrizeHide();

                }
                else {

                    swalFireFail("Redeem Process Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


                }

                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                // swalFireFail("Scan Failed!!");

            }

        });
    } else {
        swalFireWarning("Not Enough Ayoha Point!");
    }




}