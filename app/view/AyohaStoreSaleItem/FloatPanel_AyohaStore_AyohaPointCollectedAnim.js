
Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_AyohaPointCollectedAnim', {

});

var _FloatPanel_AyohaStore_AyohaPointCollectedAnim;


var isFloatPanel_AyohaStore_AyohaPointCollectedAnimOpen = 'N';






function FloatPanel_AyohaStore_AyohaPointCollectedAnim() {

    _FloatPanel_AyohaStore_AyohaPointCollectedAnim =
    Ext.create('Ext.Container', {
       zIndex: 200,
       // zIndex: 1061,
        xtype: 'container',
        height: '100%',
        //  height: 350,
        width: '100%',
        id: 'FloatPanel_AyohaStore_AyohaPointCollectedAnimID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: false,
        layout: {
            type: 'fit'
        },
        showAnimation: {
            //type: 'popIn',
            //duration: 250,
            //easing: 'ease-out'

            type: 'slideIn',
            direction: 'down',
            easing: 'ease-in',
            //easing: 'cubic-bezier(1.97,0,1.97,1.97)',
            duration: 1500
        },
        hideAnimation: {
            //type: 'popOut',
            //duration: 250,
            //easing: 'ease-out'
            type: 'slideOut',
            direction: 'down',
            easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 1250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        //  style: 'border-bottom:1px solid;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaStore_AyohaPointCollectedAnim.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaStore_AyohaPointCollectedAnimHide()");
                            isFloatPanel_AyohaStore_AyohaPointCollectedAnimOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaStore_AyohaPointCollectedAnim.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaStore_AyohaPointCollectedAnimOpen = 'N';
                            RemovePages("FloatPanel_AyohaStore_AyohaPointCollectedAnimHide()");
                        }
                       
                    }
                });
            }
        },

        items: [
             {
                 xtype: 'container',
                 id: 'containerFloatPanel_AyohaStore_AyohaPointCollectedAnim',
                 name: 'clickableContainerFloatPanel_AyohaStore_AyohaPointCollectedAnim',
                 height: '100%',
                 width: '100%',
                 layout: {
                     type: 'vbox',
                     pack: 'center',
                     align: 'center'
                 },
                 // style: ' background-color:transparent;',
                 //  style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                 style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                 items: [
                     {
                         xtype: 'container',
                         width: '100%',
                         height: 330,
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center'

                         },
                         // style: 'background-color:#f7f7f7',
                         // style: ' background-color:transparent;',
                         style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 30px 30px 30px 30px;',
                         // style: 'border-bottom:1px solid white;border-top:1px solid white;border-left:1px solid white;border-right:1px solid white;background-color:white;border-radius:5px 5px 5px 5px;',
                         // style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                         items: [

                             
                         ]
                     },
                 ]
             },













        ]





    });
    return _FloatPanel_AyohaStore_AyohaPointCollectedAnim;



}








function FloatPanel_AyohaStore_AyohaPointCollectedAnimShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_AyohaPointCollectedAnim);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_AyohaPointCollectedAnim());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_AyohaPointCollectedAnimHide()");
    isFloatPanel_AyohaStore_AyohaPointCollectedAnimOpen = 'Y';

    // FloatPanel_AyohaStore_AyohaPointCollectedAnimAdjustHeight();
    var containerViewclickableContainerFloatPanel_AyohaStore_AyohaPointCollectedAnim = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_AyohaStore_AyohaPointCollectedAnim]')[0];
    var containerViewElclickableContainerFloatPanel_AyohaStore_AyohaPointCollectedAnim = containerViewclickableContainerFloatPanel_AyohaStore_AyohaPointCollectedAnim.element;
    containerViewElclickableContainerFloatPanel_AyohaStore_AyohaPointCollectedAnim.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_AyohaPointCollectedAnimHide();
      }
    );
  //  FloatPanel_AyohaStore_AyohaPointCollectedAnim_LatestAyohaPoint();
}





function FloatPanel_AyohaStore_AyohaPointCollectedAnimHide() {
    // FloatPanel_AyohaStore_AyohaPointCollectedAnim_AddCardHide();
   
    if (isFloatPanel_AyohaStore_AyohaPointCollectedAnimOpen == 'Y') {
        _FloatPanel_AyohaStore_AyohaPointCollectedAnim.hide(); isFloatPanel_AyohaStore_AyohaPointCollectedAnimOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_AyohaPointCollectedAnimHide()");
      //document.getElementById("Dashboard_AyohaRewardPoint").textContent = globalFloatPanel_AyohaStore_AyohaPointCollectedAnim_LatestAyohaPoint;
      //  Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div id="odometera" class="odometer" style="color:white;text-align: center;font-size:48px;width:100%;margin:70px 0px 0px 0px;"><b>' + globalFloatPanel_AyohaStore_AyohaPointCollectedAnim_LatestAyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Collected Ayoha Points</b></div></div>');
        FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();
    }

}




var PointCollected;
var globalFloatPanel_AyohaStore_AyohaPointCollectedAnim_LatestAyohaPoint;
function FloatPanel_AyohaStore_AyohaPointCollectedAnim_LatestAyohaPoint_NotUsed() {
    PointCollected = 0;



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "SubscriberAccNo": GetCurrAyohaUserAccountNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/DashboardAyohaUser/DashboardAyohaUserMaingetAyohaPoint',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        var currentAyohaPoint = parseInt(globalDashboard_AyohaPoint);
                        globalFloatPanel_AyohaStore_AyohaPointCollectedAnim_LatestAyohaPoint = parseInt(data.results[0].AyohaPoint);
                        PointCollected = globalFloatPanel_AyohaStore_AyohaPointCollectedAnim_LatestAyohaPoint - currentAyohaPoint;
                       
                        document.getElementById("Dashboard_AyohaRewardPoint").textContent = PointCollected;
                        
                       // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="color:white;text-align: center;font-size:68px;width:100%;margin:45px 0px 0px 0px;"><b> +' + PointCollected + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-46px 0px 0px 0px"><b>Earn New Ayoha Point</b></div><br><div class="blink_me" style="color:white;text-align: center;font-size:16px;width:100%;margin:-25px 0px 0px 0px"><b>Hooray!!</b></div></div>');

                       // console.log(AyohaPoint)
                       

                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {

                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);


}




function FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter() {
    $('.odometer').each(function (index) {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(parseFloat(now).toFixed(size));
            }
        });
    });
}





//<style>
//       .odometer {
//    font-size: 24px;
//           /*background-color: red;
//           color: white;*/
//}
//.InvoiceDashboardIssued {
//    font-family:Arial, sans-serif;font-size:36px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#3531ff;font-weight:bold;background-color:#3531ff;color:#ffffff;text-align:left
//    /* font-family:Arial, sans-serif;font-size:40px;padding:7px 20px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#3531ff;font-weight:bold;background-color:#3531ff;color:#ffffff;text-align:center;
//      background-color: red;
//      color: white;*/
//} .InvoiceDashboardCollection {

//    font-family:Arial, sans-serif;font-size:36px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#cb0000;font-weight:bold;background-color:#cb0000;color:#ffffff;text-align:left
//    /*font-family:Arial, sans-serif;font-size:40px;padding:7px 20px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#cb0000;font-weight:bold;background-color:#cb0000;color:#ffffff;text-align:center
   
//     background-color: red;
//     color: white;*/
//}
//.elInvoiceStatusRefundHtmTbl{
//    font-family:Arial, sans-serif;font-size:36px;font-weight:bold;padding:7px 20px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#989ddd;background-color:#989ddd;color:#ffffff;text-align:center
//}
//</style>