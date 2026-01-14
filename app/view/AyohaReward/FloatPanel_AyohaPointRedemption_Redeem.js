Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaPointRedemption_Redeem', {

});







var _FloatPanel_AyohaPointRedemption_Redeem;

function FloatPanel_AyohaPointRedemption_Redeem() {

    _FloatPanel_AyohaPointRedemption_Redeem = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaPointRedemption_RedeemID',
            // xtype: 'panel',
            zIndex: 111,
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
                                _FloatPanel_AyohaPointRedemption_Redeem.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
                                RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
                              
                            } if (e.direction == "right") {
                                _FloatPanel_AyohaPointRedemption_Redeem.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
                                RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
                               
                            } if (e.direction == "up") {
                                _FloatPanel_AyohaPointRedemption_Redeem.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'up',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
                                RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
                            }
                            if (e.direction == "down") {
                                _FloatPanel_AyohaPointRedemption_Redeem.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'down',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
                                RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");

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
                        id: 'containerFloatPanel_AyohaPointRedemption_RedeemHeader',
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
                                       id: 'btnFloatPanel_AyohaPointRedemption_RedeemBack',
                                       height: 30,
                                       width: 35,
                                       margin: '7 0 0 10',
                                       // iconCls: 'list',
                                       html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                       ui: 'plain',
                                       handler: function () {
                                           _FloatPanel_AyohaPointRedemption_Redeem.hide(Ext.fx.Animation({
                                               type: 'slideOut',
                                               direction: 'left',
                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                               duration: 250

                                           }));
                                           is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
                                           RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
                                       }
                                   },

                                              {
                                                  xtype: 'spacer',

                                              },

                                              {
                                                  xtype: 'button',
                                                  margin: '0 0 0 0',
                                                  zIndex: 100,
                                                  html: '<font size=2 color=white><b>Ayoha Points Redemption Item</b></font>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      is_FloatPanel_AyohaPointRedemption_RedeemOpen.hide(Ext.fx.Animation({
                                                          type: 'slideOut',
                                                          direction: 'right',
                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                          duration: 250

                                                      }));
                                                      is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
                                                      RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
                                                  }
                                              },

                                    {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_AyohaPointRedemption_RedeemBacksLogo',
                                        height: 30,
                                        width: 30,
                                        hidden:true,
                                        // iconCls: 'list',
                                        margin: '-5 3 0 0',
                                        html: '<div><img src="resources/icons/AyohaPointRedemptionWhite.png" width="25" height="25" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            _FloatPanel_AyohaPointRedemption_Redeem.hide(Ext.fx.Animation({
                                                type: 'slideOut',
                                                direction: 'right',
                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
                                            RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
                                        }
                                    },












                               ]

                    },





                    {
                        xtype: 'button',
                        //  align: 'stretch',
                        // hidden:true,
                        id: 'btnFloatPanel_AyohaPointRedemption_Redeem_ItemPoint',
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

                           // FloatPanel_AyohaPointRedemption_RedeemHide();

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
                        id: 'htmlFloatPanel_AyohaPointRedemption_Redeem_ItemImage',
                        name: 'clickableContainerFloatPanel_AyohaPointRedemption_Redeem',
                        //margin: '0 0 0 0',
                        //id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                        //badgeText: "2",
                        html: '<img src="resources/icons/Samsung Galaxy.png" style="width: 270px; height: 350px; border:1px none white;margin:23px 0px 0px -2px; " alt="Company Name">',
                        //  html: '<img src="resources/icons/AyohaRankingRewardContest.png" style="width:99%;height:710px" alt="Company Name">',
                        //handler: function () {

                        //    FloatPanel_AyohaPointRedemption_RedeemHide();

                        //},

                    },
                      {
                          xtype: 'button',
                          //  align: 'stretch',
                          // hidden:true,
                          id: 'btnFloatPanel_AyohaPointRedemption_Redeem_ItemName',
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

                             // FloatPanel_AyohaPointRedemption_RedeemHide();

                          },


                      },

                        {
                              xtype: 'button',
                            //  align: 'stretch',
                            // hidden:true,
                            id: 'btnFloatPanel_AyohaPointRedemption_Redeem_ItemPrice',
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

                               // FloatPanel_AyohaPointRedemption_RedeemHide();

                            },


                        },









                        {
                            xtype: 'container',                           
                            style: 'background-color:transparent;',
                            docked: 'bottom',
                            width:'100%',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                            },
                            items:[


                                {
                                    margin: '0 0 0 0',
                                    html: '<div style="background: transparent;width:100%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >Are you sure,you want to redeem this item?</div>',
                                },
                            {
                                xtype: 'container',
                                width: '100%',
                                margin: '10 0 0 0',
                                style: 'background-color:transparent;',                           
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        margin: '0 0 0 0',
                                        width: '50%',
                                        id: 'FloatPanel_AyohaPointRedemption_Redeem_Redeem_No',
                                        html: '<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AyohaPointRedemption_RedeemHide()" class="buttonAyohaPointRedemption_Redeem_No" style="margin:0px 0px 0px 0px;">No</button></div>'
                                    },
                                    {
                                        margin: '0 0 0 0',
                                        width: '50%',
                                        id: 'FloatPanel_AyohaPointRedemption_Redeem_Redeem',
                                        html: '<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AyohaPointRedemption_RedeemNow()" class="buttonAyohaPointRedemption_Redeem_Yes" style="margin:0px 0px 0px 0px;">Yes</button></div>'
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

    return _FloatPanel_AyohaPointRedemption_Redeem;
}

var globalFloatPanel_AyohaPointRedemption_Point;
var globalFloatPanel_AyohaPointRedemption_ItemCode;
function FloatPanel_AyohaPointRedemption_RedeemShow(Point, ItemImage, ItemName, ItemPrice, ItemCode) {
    Ext.Viewport.remove(_FloatPanel_AyohaPointRedemption_Redeem);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaPointRedemption_Redeem());
    this.overlay.show();
    is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
    globalFloatPanel_AyohaPointRedemption_Point = Point;
    globalFloatPanel_AyohaPointRedemption_ItemCode = ItemCode;

    Ext.getCmp('btnFloatPanel_AyohaPointRedemption_Redeem_ItemPoint').setHtml('<font size=8px color=white><center><b>' + Point + '</b></center></font><font size=2px color=white>Ayoha Point</font>');
    Ext.getCmp('htmlFloatPanel_AyohaPointRedemption_Redeem_ItemImage').setHtml('<img src="' + ItemImage + '" style="width: 270px; height: 350px; border:1px none white;margin:23px 0px 0px -2px; " alt="Company Name">');
    Ext.getCmp('btnFloatPanel_AyohaPointRedemption_Redeem_ItemName').setHtml('<div style="background: transparent;width:80%;font-size: 20px;font-weight:bold;color:white;text-align:center;" ><b>' + ItemName + '</b></div>');
    Ext.getCmp('btnFloatPanel_AyohaPointRedemption_Redeem_ItemPrice').setHtml('<div style="background: transparent;width:80%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >Worth (RM):' + ItemPrice + '</div>');
    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_AyohaPointRedemption_Redeem]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
       //   window.open('http://42.1.63.57/termandcondition.html', '_system'); return false;
          window.open("http://google.com/search?q=" + ItemName + "",'_system'); return false;
      }
    );
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_AyohaPointRedemption_RedeemHide();
    //});
    //task.delay(2000);


}
var is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';

function FloatPanel_AyohaPointRedemption_RedeemHide() {

    if (is_FloatPanel_AyohaPointRedemption_RedeemOpen == 'Y') {
        _FloatPanel_AyohaPointRedemption_Redeem.hide();
        is_FloatPanel_AyohaPointRedemption_RedeemOpen = 'N';
        RemovePages("FloatPanel_AyohaPointRedemption_RedeemHide()");
    }

}







function FloatPanel_AyohaPointRedemption_RedeemNow() {

   
   
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
                    FloatPanel_AyohaPointRedemption_RedeemHide()
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
    }else
    {
        swalFireWarning("Not Enough Ayoha Point!");
    }




}