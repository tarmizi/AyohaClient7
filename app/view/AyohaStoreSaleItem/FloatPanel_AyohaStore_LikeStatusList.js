Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_LikeStatusList', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_LikeStatusList;


var isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';





function FloatPanel_AyohaStore_LikeStatusList() {

    _FloatPanel_AyohaStore_LikeStatusList =
     Ext.create('Ext.Panel', {
         zIndex: 300,
         xtype: 'container',
         // height: '50%',
         width: '95%',
         height: 585,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_LikeStatusListID',
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
        style: 'border-bottom:1px none;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaStore_LikeStatusList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_LikeStatusListHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_LikeStatusList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_LikeStatusListHide()");
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
                id: 'FloatPanel_AyohaStore_LikeStatusListBorderBg',
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

                             id: 'containerFloatPanel_AyohaStore_LikeStatusListHeader',
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
                                                      id: 'btnFloatPanel_AyohaStore_LikeStatusListBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backblack.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaStore_LikeStatusList.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaStore_LikeStatusListHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '-8 0 0 0',
                                                       id: 'htmlFloatPanel_AyohaStore_LikeStatusList_TitleHeaderTxt',
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
                                                id: 'btnFloatPanel_AyohaStore_LikeStatusList_PicProfile',
                                                html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_AyohaStore_LikeStatusList.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));

                                                    isFloatPanel_AyohaStore_LikeStatusListOpen = "N";
                                                    RemovePages("FloatPanel_AyohaStore_LikeStatusListHide()");
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
                       store: _DataStore_AyohaStoreLoadLikeStatusStore,
                       id: 'FloatPanel_AyohaStore_LikeStatusList',
                       mode: 'SINGLE',
                       // width: '100%',
                       disableSelection: true,
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


                         '<table style="border-collapse:collapse;border-spacing:0;width:104%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="FloatPanel_AyohaStore_LikeStatus_OpenMemberImage({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{Photo}" style="border:1px solid black; width:75px;height:75px;border-radius:50%;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{AccountName}</b><br>{ModifiedDate}</td></tr></table>'+
                       '<br>'+
                           '<div style="width:104%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/likeOn.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',

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
      height: 30,
      // width: 40,
      style: ' background-color:transparent;',
      //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      //  title: '<font size="3" color="white">Live Tracking Map</font>',
      //hidden: true,

      id: 'containerFloatPanel_AyohaStore_LikeStatusListFooter',
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
                                 id: 'btnFloatPanel_AyohaStore_LikeStatusList_CountLovePic',
                                 html: '<div style="margin:2px 0px 0px 0px"><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                
                             },

                          {
                              xtype: 'panel',
                              width:3
                          },

                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaStore_LikeStatusList_CountLoveTxt',
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
    return _FloatPanel_AyohaStore_LikeStatusList;





}



function FloatPanel_AyohaStore_LikeStatusListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_LikeStatusList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_LikeStatusList());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_LikeStatusListHide()");
    isFloatPanel_AyohaStore_LikeStatusListOpen = 'Y';

    Ext.getCmp('htmlFloatPanel_AyohaStore_LikeStatusList_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    Ext.getCmp('btnFloatPanel_AyohaStore_LikeStatusList_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');



    if (countLikeDislikeTap == 0) {
        FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore();
        return
    }

    if (countLikeDislikeTap > 0) {
        FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore_Save();
      
        return
    }


  





}


function FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore_Save() {
    

    var objn = {
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        "isLike": likedStatus
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStore_LikeStatus/AyohaStoreLikeStatusInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                //AyohaMerchantReview_AddEditHide();


                countLikeDislikeTap = 0;
                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload..' });
                var task = Ext.create('Ext.util.DelayedTask', function () {
                    FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore();
                    Ext.Viewport.unmask();
                });
                Ext.Viewport.unmask();
                task.delay(500);

            }
            else {

                swalFireFail("Fail!");
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!");
            Ext.Viewport.unmask();
        }

    });
}





function FloatPanel_AyohaStore_AyohaStoreLoadLikeStatusStore() {


    _DataStore_AyohaStoreLoadLikeStatusStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaStoreLoadLikeStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_LikeStatus/AyohaStoreLoadLikeStatus');
    _DataStore_AyohaStoreLoadLikeStatusStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaStoreLoadLikeStatusStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaStore_LikeStatusList_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + count + ' Loves</div>');
       

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}





function FloatPanel_AyohaStore_LikeStatusListHide() {
    if (isFloatPanel_AyohaStore_LikeStatusListOpen == "Y") {
        _FloatPanel_AyohaStore_LikeStatusList.hide(); isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_LikeStatusListHide()");
    }
    
}














