Ext.define('BuskartApp.view.AyohaHotMerchant.FloatPanel_AyohaHotMerchant_OnlineStoreList', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaHotMerchant_OnlineStoreList;


var isFloatPanel_AyohaHotMerchant_OnlineStoreListOpen = 'N';





function FloatPanel_AyohaHotMerchant_OnlineStoreList() {

    _FloatPanel_AyohaHotMerchant_OnlineStoreList =
     Ext.create('Ext.Panel', {
         zIndex: 300,
         xtype: 'container',
         // height: '50%',
         width: '95%',
         height: 500,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaHotMerchant_OnlineStoreListID',
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
             type: 'popOut',
             duration: 150,
             easing: 'ease-out'
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaHotMerchant_OnlineStoreList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaHotMerchant_OnlineStoreList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaHotMerchant_OnlineStoreListOpen = 'N';
                         RemovePages("FloatPanel_AyohaHotMerchant_OnlineStoreListHide()");
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
                id: 'FloatPanel_AyohaHotMerchant_OnlineStoreListBorderBg',
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

                             id: 'containerFloatPanel_AyohaHotMerchant_OnlineStoreListHeader',
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
                                                      id: 'btnFloatPanel_AyohaHotMerchant_OnlineStoreListBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaHotMerchant_OnlineStoreList.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaHotMerchant_OnlineStoreListOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaHotMerchant_OnlineStoreListHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '-8 0 0 0',
                                                       id: 'htmlFloatPanel_AyohaHotMerchant_OnlineStoreList_TitleHeaderTxt',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                       // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                                       //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                   },

                                            {
                                                xtype: 'button',

                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 40,
                                                width: 40,
                                                // iconCls: 'list',
                                                id: 'btnFloatPanel_AyohaHotMerchant_OnlineStoreList_PicProfile',
                                                html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_AyohaHotMerchant_OnlineStoreList.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));

                                                    isFloatPanel_AyohaHotMerchant_OnlineStoreListOpen = "N";
                                                    RemovePages("FloatPanel_AyohaHotMerchant_OnlineStoreListHide()");
                                                }
                                            },












                                    ]

                         },


                   {
                       xtype: 'list',
                       width: '100%',
                       height: '100%',
                       // height: '98%',
                       // flex: 1,
                       store: _DataStore_EnterprisesContactUsLinkStore,
                       id: 'FloatPanel_AyohaHotMerchant_OnlineStoreList',
                       mode: 'SINGLE',
                       style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                       disableSelection: true,
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
                       itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +


                         '<table onclick="FloatPanel_AyohaHotMerchant_OnlineStoreList_OpenStore(' + "'" + '{eStoreName}' + "'" + ',' + "'" + '{OnlineStoreUrl}' + "'" + ');" style="border-collapse:collapse;border-spacing:0;width:104%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="FloatPanel_AyohaHotMerchant_OnlineStoreList_OpenStore(' + "'" + '{eStoreName}' + "'" + ',' + "'" + '{OnlineStoreUrl}' + "'" + ');"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{eStoreIconPath}" style="border:1px solid black; width:75px;height:75px;border-radius:50%;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{eStoreName}</b><br>{OnlineStoreUrl}</td></tr></table>' +
                       '<br>' +
                           '<div style="width:104%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',

                       emptyText: '<div class="myContent">Be the first to love this Merchant!</div>',
                       //listeners: {
                       //    itemsingletap: function (list, idx, target, records, evt) {

                       //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                       //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                       //        //var MembershipCardCode = records.get('MembershipCardCode');
                       //        //var ID = records.get('ID');
                       //        ////FloatPanel_AyohaNotification_EditCardShow_Edit(ID);
                       //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                       //        //setTimeout(function () {
                       //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                       //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);

                       //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                       //        //}, 2000);



                       //    },
                       //    deselect: function (list, records) {

                       //    }
                       //},
                       listeners: {
                           itemswipe: function (list, idx, target, record, evt) {
                               //  To get the selection you should use getSelection() instead
                               //////var selected = list.getActiveItem();
                               //////alert(list.getActiveItem());
                               //////if (!selected) { return; }

                               //////var selectedIndex = selected[0];
                               //////alert([selectedIndex, idx]);
                               //Ext.Msg.alert('itemswipe', idx);


                           } // itemswipe
                       }

                   },


  {

      xtype: 'container',
      width: '100%',
      docked: 'bottom',
      hidden:true,
      height: 30,
      // width: 40,
      style: ' background-color:transparent;',
      //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      //  title: '<font size="3" color="white">Live Tracking Map</font>',
      //hidden: true,

      id: 'containerFloatPanel_AyohaHotMerchant_OnlineStoreListFooter',
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
          align: 'center',
      },
      // hidden:true,
      items:
             [


                             {

                                 height: 30,
                                 width: 30,
                                 // iconCls: 'list',
                                 id: 'btnFloatPanel_AyohaHotMerchant_OnlineStoreList_CountLovePic',
                                 html: '<div style="margin:2px 0px 0px 0px"><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',

                             },

                          {
                              xtype: 'panel',
                              width: 3
                          },

                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaHotMerchant_OnlineStoreList_CountLoveTxt',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:4px 0px 0px 0px">2 LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },














             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaHotMerchant_OnlineStoreList;





}



function FloatPanel_AyohaHotMerchant_OnlineStoreListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaHotMerchant_OnlineStoreList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaHotMerchant_OnlineStoreList());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaHotMerchant_OnlineStoreListHide()");
    isFloatPanel_AyohaHotMerchant_OnlineStoreListOpen = 'Y';

    Ext.getCmp('htmlFloatPanel_AyohaHotMerchant_OnlineStoreList_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:8px 0px 0px 0px">' + globalDashboard_AyohaHotMerchant_EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-24px 0px 0px 0px">' + _DataStore_EnterprisesContactUsLinkStore.getCount() + ' Online Store</div>');
    Ext.getCmp('btnFloatPanel_AyohaHotMerchant_OnlineStoreList_PicProfile').setHtml('<div ><img src="' + globalDashboard_AyohaHotMerchant_EnterpriseLogo + '" width="30" height="30" alt="Company Name"></div>');



   








}


function FloatPanel_AyohaHotMerchant_OnlineStoreList_OpenStore(eStoreName, eStoreURL) {


    // globalDashboard_AyohaHotMerchant_EnterpriseAccNo

    if (eStoreURL != "ayohastore") {
        window.open(eStoreURL, '_system'); return false;
        return
    } else {
        FloatPanel_AyohaHotMerchant_OnlineStoreListAyohaStore();
        FloatPanel_AyohaHotMerchant_OnlineStoreListHide();
    }

   
}



function FloatPanel_AyohaHotMerchant_OnlineStoreListHide() {
    if (isFloatPanel_AyohaHotMerchant_OnlineStoreListOpen == "Y") {
        _FloatPanel_AyohaHotMerchant_OnlineStoreList.hide(); isFloatPanel_AyohaHotMerchant_OnlineStoreListOpen = 'N';
        RemovePages("FloatPanel_AyohaHotMerchant_OnlineStoreListHide()");
    }
  
}














function FloatPanel_AyohaHotMerchant_OnlineStoreListAyohaStore(idx) {

    globalDashboard_AyohaHotMerchant_EnterpriseAccNo = arrAyohaHotMerchantEnterpriseAccNo[idx];
    globalFloatPanel_AyohaStore_ModuleTagging = "Dashboard_AyohaHotMerchant";
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';




  
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
        var ID = Store.get('ID');
        FloatPanel_OrderCartHide();

       

        FloatPanel_RewardStore_OpenStore_FromAyohaHotMerchant_OnlineStoreList(ID);
        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}



function FloatPanel_AyohaHotMerchant_HotItems_OnlineStoreListAyohaStore(idx) {

    globalDashboard_AyohaHotMerchant_EnterpriseAccNo = arrAyohaHotMerchantEnterpriseAccNo[idx];
    globalFloatPanel_AyohaStore_ModuleTagging = "Dashboard_AyohaHotMerchant";
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';





    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
        var ID = Store.get('ID');
        FloatPanel_OrderCartHide();
        FloatPanel_RewardStore_OpenStore_FromAyohaHotMerchant_OnlineStoreList_HotItems(ID);
        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}