Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_LikeStatusList', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_LikeStatusList=null;


var isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';



function FloatPanel_AyohaStore_LikeStatusListCreateIfNeeded() {
    if (_FloatPanel_AyohaStore_LikeStatusList&& !_FloatPanel_AyohaStore_LikeStatusList.destroyed) return;
     _FloatPanel_AyohaStore_LikeStatusList =
     Ext.create('Ext.Container', {

id: 'LoadingFloatPanel_AyohaStore_LikeStatusListID',
 zIndex: 60,
  width: '95%',
         height: 585,
        floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'hide',
      // closeAction: 'destroy',
        draggable: false,
        modal: true,
        styleHtmlContent: true,
        layout: 'fit',

        
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
            type: 'popOut',
            //direction: 'up',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
         //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'border-bottom:1px none;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:white;',

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
                style: ' background-color:white;',
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
                             height: 60,
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
                                                      margin: '5 0 0 5',
                                                      width: 65,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {
 FloatPanel_AyohaStore_LikeStatusListHide(false);
                                                        //   _FloatPanel_AyohaStore_LikeStatusList.hide(Ext.fx.Animation({
                                                        //       type: 'slideOut',
                                                        //       direction: 'left',
                                                        //       easing: 'cubic-bezier(.7,0,.7,1)',
                                                        //       duration: 250

                                                        //   }));
                                                        //   isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';
                                                        //   RemovePages("FloatPanel_AyohaStore_LikeStatusListHide()");

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
                                                  FloatPanel_AyohaStore_LikeStatusListHide(false);
                                                }
                                            },












                                    ]

                         },
{
  xtype: 'list',
  id: 'FloatPanel_AyohaStore_LikeStatusList',
  store: _DataStore_AyohaStoreLoadLikeStatusStore,
  width: '100%',
  height: '100%',
  mode: 'SINGLE',
  disableSelection: true,

  userCls: 'ayohaListWhite',     // ✅ guna userCls (lebih reliable)
  itemCls: 'ayohaLikeItem',      // ✅ senang target item

  style: 'background-color:#fff;', // root sahaja

  scrollable: {
    direction: 'vertical',
    indicators: { y: { autoHide: true }, x: { autoHide: true } }
  },

itemTpl:
                        '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="FloatPanel_AyohaStore_LikeStatus_OpenMemberImage({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{Photo}" style="border:1px solid black; width:75px;height:75px;border-radius:50%;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{AccountName}</b><br>{ModifiedDate}</td></tr></table>'+
                     '<br>'+
                      '<div style="width:100%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/likeOn.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',


//   itemTpl:
//       '<div style="width:100%;display:block;box-sizing:border-box;background:#fff;padding:12px 14px;">'
//     +   '<div style="display:flex;align-items:center;gap:12px;width:100%;box-sizing:border-box;">'
//     +     '<div style="position:relative;flex:0 0 75px;width:75px;height:75px;">'
//     +       '<img src="{Photo}" style="width:75px;height:75px;border-radius:50%;object-fit:cover;border:1px solid #ddd;display:block;" />'
//     +       '<img src="resources/icons/likeOn.png" style="position:absolute;left:-6px;bottom:-6px;width:23px;height:23px;" />'
//     +     '</div>'
//     +     '<div style="flex:1;min-width:0;">'
//     +       '<div style="font-weight:700;font-size:15px;line-height:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{AccountName}</div>'
//     +       '<div style="margin-top:6px;font-size:12px;color:#6b7280;line-height:16px;">{ModifiedDate}</div>'
//     +     '</div>'
//     +   '</div>'
//     + '</div>',

  emptyText: '<div class="myContent">Be the first to love this Merchant!</div>'



},

//                    {
//                        xtype: 'list',
//                        width: '100%',
//                        height: '100%',
//                        store: _DataStore_AyohaStoreLoadLikeStatusStore,
//                        id: 'FloatPanel_AyohaStore_LikeStatusList',
//                        mode: 'SINGLE',
//                        // width: '100%',
//                        disableSelection: true,
                      
//     cls: 'ayohaListWhite',          // ✅ tambah ni
//     style: 'background:#fff;',      // optional (root sahaja)

//                        disableSelection: true,
//                        scrollable: {
//                            direction: 'vertical',
//                            indicators: {
//                                y: {
//                                    autoHide: true
//                                },
//                                x: {
//                                    autoHide: true
//                                }
//                            }
//                        },
//                        itemTpl:
//     '<div  style="'
//   + 'width:100%;'
//   + 'box-sizing:border-box;'
//   + 'background:#fff;'
//   + 'padding:12px 14px;'
//   + '">' 

//     // row clickable
//   +   '<div  style="'
//   +   'display:flex;'
//   +   'align-items:center;'
//   +   'gap:12px;'
//   +   'width:100%;'
//   +   'box-sizing:border-box;'
//   +   '">' 

//         // avatar + like overlay
//   +     '<div style="position:relative;flex:0 0 75px;width:75px;height:75px;">'
//   +       '<img src="{Photo}" style="'
//   +       'width:75px;height:75px;'
//   +       'border-radius:50%;'
//   +       'object-fit:cover;'
//   +       'border:1px solid #ddd;'
//   +       'display:block;'
//   +       '" />'
//   +       '<img src="resources/icons/likeOn.png" style="'
//   +       'position:absolute;'
//   +       'left:-6px;'
//   +       'bottom:-6px;'
//   +       'width:23px;height:23px;'
//   +       '" />'
//   +     '</div>'

//         // text
//   +     '<div style="flex:1;min-width:0;">'
//   +       '<div style="'
//   +       'font-weight:700;'
//   +       'font-size:15px;'
//   +       'line-height:18px;'
//   +       'white-space:nowrap;'
//   +       'overflow:hidden;'
//   +       'text-overflow:ellipsis;'
//   +       '">{AccountName}</div>'
//   +       '<div style="'
//   +       'margin-top:6px;'
//   +       'font-size:12px;'
//   +       'color:#6b7280;'
//   +       'line-height:16px;'
//   +       '">{ModifiedDate}</div>'
//   +     '</div>'

//   +   '</div>'
//   + '</div>',
//                     //    itemTpl: '<div class="ayohaLikeStatusList" style="background-color:white ;width:100%">' +


//                     //      '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="FloatPanel_AyohaStore_LikeStatus_OpenMemberImage({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{Photo}" style="border:1px solid black; width:75px;height:75px;border-radius:50%;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{AccountName}</b><br>{ModifiedDate}</td></tr></table>'+
//                     //    '<br>'+
//                     //        '<div style="width:100%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/likeOn.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',

//                        emptyText: '<div class="myContent">Be the first to love this Merchant!</div>',
                     
                       

//                    },


  {

      xtype: 'container',
      width: '100%',
      docked: 'bottom',
      height: 50,
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
          pack: 'right',
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

                  
{
                              xtype: 'panel',
                              width:20
                          },











             ]

  },



                ]


            },



             ]




         }







     });
}


// function FloatPanel_AyohaStore_LikeStatusList() {

   
//     return _FloatPanel_AyohaStore_LikeStatusList;





// }









var general_fp;
function FloatPanel_AyohaStore_LikeStatusListShow() {

    // Ext.Viewport.remove(_FloatPanel_AyohaStore_LikeStatusList);
    // this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_LikeStatusList());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_AyohaStore_LikeStatusListHide()");





FloatPanel_AyohaStore_LikeStatusListCreateIfNeeded();




// ✅ push browser back (ikut style kau)

 general_fp = Ext.getCmp('FloatPanel_AyohaStoreID');
  if (general_fp) {
    general_fp.setMasked({ xtype: 'mask', cls: 'ayohaModalMask' });
  }




 if (general_fp) general_fp.add(_FloatPanel_AyohaStore_LikeStatusList); else Ext.Viewport.add(_FloatPanel_AyohaStore_LikeStatusList);
 
 _FloatPanel_AyohaStore_LikeStatusList.show();
if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
  AyohaBrowserBack.push('FloatPanel_AyohaStore_LikeStatusList', function () {
 
    FloatPanel_AyohaStore_LikeStatusListHide(true);
  });
}








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
    Ext.Ajax.request({

        // type: "POST",

        // url: GetAPIurl() + '/AyohaStore_LikeStatus/AyohaStoreLikeStatusInsertUpdate',

        // dataType: "json",
        // data: JSON.stringify(objn),
        // headers: {
        //     "Content-Type": "application/json; charset=utf-8"
        // },



                  
    url: GetAPIurl() + '/AyohaStore_LikeStatus/AyohaStoreLikeStatusInsertUpdate',
   method: 'POST',
   jsonData: objn,
   headers: { 'Content-Type': 'application/json; charset=utf-8' },
 
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
   // _DataStore_AyohaStoreLoadLikeStatusStore.load();
    _DataStore_AyohaStoreLoadLikeStatusStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
            if( isFloatPanel_AyohaStore_LikeStatusListOpen == 'Y'){
                Ext.getCmp('htmlFloatPanel_AyohaStore_LikeStatusList_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + records.length + ' Loves</div>');
            }
               
       
                LoadingPanelHide(false);
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide(false);
            }
        }
    });

}





function FloatPanel_AyohaStore_LikeStatusListHide(fromBack,animCfg) {
    // if (isFloatPanel_AyohaStore_LikeStatusListOpen == "Y") {
    //     _FloatPanel_AyohaStore_LikeStatusList.hide(); isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';
    //     RemovePages("FloatPanel_AyohaStore_LikeStatusListHide()");
    // }
    

 
    if (isFloatPanel_AyohaStore_LikeStatusListOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_AyohaStore_LikeStatusList.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaStore_LikeStatusList.hide();
          }
          isFloatPanel_AyohaStore_LikeStatusListOpen = 'N';
         
  if (general_fp) general_fp.setMasked(false);
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaStore_LikeStatusList');
          }
    }


}














