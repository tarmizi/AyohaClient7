Ext.define('BuskartApp.view.LoyaltyCard.FloatLoyaltyCardPoint_RedeemPrizeHistoryLog', {

});

var _FloatLoyaltyCardPoint_RedeemPrizeHistoryLog=null;


var isFloatLoyaltyCardPoint_RedeemPrizeHistoryLogOpen = 'N';


function FloatLoyaltyCardPoint_RedeemPrizeHistoryLogCreateIfNeeded() {
    if (_FloatLoyaltyCardPoint_RedeemPrizeHistoryLog && !_FloatLoyaltyCardPoint_RedeemPrizeHistoryLog.destroyed) return;
    _FloatLoyaltyCardPoint_RedeemPrizeHistoryLog =
    Ext.create('Ext.Container', {

       floated: true,
       centered: true,
       fullscreen: true,            // ✅ ganti height/width 100%
       closeAction: 'hide',
       draggable: false,
       modal: false,
       id: 'LoadingFloatLoyaltyCardPoint_RedeemPrizeHistoryLogID',
       zIndex: 220,
       styleHtmlContent: true,
       layout: 'fit',
       style: ayohaThemeColor_Hero(),
      
        layout: {
            type: 'vbox'
        },
        showAnimation: {
            type: 'popIn',
            duration: 150,
            easing: 'ease-in'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250
          },
        
        listeners: {
           beforehide: function () {
             return true;
           }
         },
       
       

    
        

            items: [





                {

                    xtype: 'container',
                    width: '100%',
                    docked: 'top',
                    height: 50,
                    style: ' background-color:transparent;',

                    id: 'containerFloatLoyaltyCardPoint_RedeemPrizeHistoryLogHeader',
                  
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
                                             id: 'btnFloatLoyaltyCardPoint_RedeemPrizeHistoryLogBack',
                                             margin: '0 0 0 0',
                                             height: 30,
                                             width: 65,
                                             // iconCls: 'list',
                                             html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                             ui: 'plain',
                                             handler: function () {

                                                FloatLoyaltyCardPoint_RedeemPrizeHistoryLogHide(false);

                                             }
                                         },

                                          {
                                              xtype: 'spacer',

                                          },


                                          {
                                              margin: '0 0 0 0',
                                              html: '<div style="width:160px;border-radius: 0px 0px 0px 0px;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:bold;color:white;height:20px">Redemption Status Log</div>'
                                          },

                                          {
                                           xtype: 'spacer',
                                           width: 20

                                       },










                           ]

                },



           {


               // xtype: 'button',
               xtype: 'container',
               margin: '0 0 0 0',
               id: 'FloatLoyaltyCardPoint_RedeemPrizeHistoryLogBorderBg',
               //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
               style: 'background-color:white;',
               height:'100%',
               width: '100%',
               // style: 'border:2px solid #D25959;',
               layout: {
                   type: 'vbox',
                   pack: 'left',
                   align: 'left'
               },
               items: [



                {
                    xtype: 'list',
                    id: 'FloatLoyaltyCardPoint_RedeemPrizeHistoryLogListID',
                    cls: 'ayohaRedeemLogList',          // ✅ guna class untuk CSS full width
                  //  store: _DataStore_LoyaltyPointRedeemPrizeHistoryLogLoadStore, // adjust ikut store kau
                    mode: 'SINGLE',
                    disableSelection: true,
                  
                    width: '100%',
                    height: '100%',
                  
                    style: 'background:#fff;',          // ✅ list bg putih
                  
                    scrollable: {
                      direction: 'vertical',
                      indicators: {
                        y: { autoHide: true },
                        x: { autoHide: true }
                      }
                    },
                  
                    // ✅ EMPTY MESSAGE (optional)
                    deferEmptyText: false,
                    emptyText:
                      '<div class="ayohaEmptyWrap">' +
                        '<div class="ayohaEmptyCard">' +
                          '<div class="ayohaEmptyTitle">No Status Log</div>' +
                          '<div class="ayohaEmptyDesc">No redemption status updates found yet.</div>' +
                        '</div>' +
                      '</div>',
                  
                    itemTpl:
                      '<div class="redeemLogItem">' +
                        '<div class="redeemLogTitle">{RedeemHistoryStatus}</div>' +
                  
                        '<div class="redeemLogRow"><span class="k">Remarks</span><span class="v">{Remarks}</span></div>' +
                        '<div class="redeemLogRow"><span class="k">Created By</span><span class="v">{AccountName}</span></div>' +
                        '<div class="redeemLogRow"><span class="k">Created Date</span><span class="v">{RedeemHistoryStatusDate}</span></div>' +
                      '</div>'
                  }
                  



                //    {
                //        xtype: 'list',
                //        //  flex: 1,
                //       // store: 'LoyaltyPointRedeemPrizeHistoryLogLoadStore',
                //        id: 'FloatLoyaltyCardPoint_RedeemPrizeHistoryLogListID',
                //        mode: 'SINGLE',
                //        disableSelection: false,
                //        style: 'background-color:rgba(255,255,255,1);border-radius: 0px 0px 0px 0px;',
                     

                //        itemTpl: '<div class="myContent" style="background-color:white">' +

                //            '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px;background-color:transparent;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:98%;"><b>{RedeemHistoryStatus}</b><br><font size=2>Remarks:{Remarks}</font><br><font size=2>Created By:{AccountName}</font><br><font size=2>Created Date:{RedeemHistoryStatusDate}</font></div>' +

                          
                //                   '</div>',

                //        width: '100%',
                //        height: '100%',
                //        disableSelection: true,

                       





                //    },


               ]


           },









            ]




      







    });
}








function FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow(val) {

    // Ext.Viewport.remove(_FloatLoyaltyCardPoint_RedeemPrizeHistoryLog);
    // this.overlay = Ext.Viewport.add(FloatLoyaltyCardPoint_RedeemPrizeHistoryLog());
    // this.overlay.show();
    // AddRoutePages("FloatLoyaltyCardPoint_RedeemPrizeHistoryLogHide()");







    
    FloatLoyaltyCardPoint_RedeemPrizeHistoryLogCreateIfNeeded();


    _FloatLoyaltyCardPoint_RedeemPrizeHistoryLog.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatLoyaltyCardPoint_RedeemPrizeHistoryLog', function () {
     
        FloatLoyaltyCardPoint_RedeemPrizeHistoryLogHide(true);
      });
    }
    isFloatLoyaltyCardPoint_RedeemPrizeHistoryLogOpen = 'Y';
    FloatLoyaltyCardPoint_RedeemPrizeHistoryLog_LoyaltyPointRedeemPrizeHistoryLogLoadStore(val);
}


function FloatLoyaltyCardPoint_RedeemPrizeHistoryLogHide(fromBack, animCfg) {
    // if (isFloatLoyaltyCardPoint_RedeemPrizeHistoryLogOpen == "Y") {
    //     _FloatLoyaltyCardPoint_RedeemPrizeHistoryLog.hide(); isFloatLoyaltyCardPoint_RedeemPrizeHistoryLogOpen = 'N';
    //     RemovePages("FloatLoyaltyCardPoint_RedeemPrizeHistoryLogHide()");
    // }


    if (isFloatLoyaltyCardPoint_RedeemPrizeHistoryLogOpen == 'Y') {
       
        _FloatLoyaltyCardPoint_RedeemPrizeHistoryLog.hide();

        if (animCfg) {
            _FloatLoyaltyCardPoint_RedeemPrizeHistoryLog.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatLoyaltyCardPoint_RedeemPrizeHistoryLog.hide();
          }
          isFloatLoyaltyCardPoint_RedeemPrizeHistoryLogOpen = 'N';                         
       
         // RemovePages("FloatPanel_ForgotPasswordHide()");
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatLoyaltyCardPoint_RedeemPrizeHistoryLog');
          }
    }
   
}




function FloatLoyaltyCardPoint_RedeemPrizeHistoryLog_LoyaltyPointRedeemPrizeHistoryLogLoadStore(val) {



   
    var RedeemHistoryCode = _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.findRecord('ID', val, 0, false, false, true);
    var RedeemHistoryStatusBy = _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.findRecord('ID', val, 0, false, false, true);



    _DataStore_LoyaltyPointRedeemPrizeHistoryLogLoadStore.getProxy().setExtraParam('RedeemHistoryCode', RedeemHistoryCode.get('RedeemHistoryCode'));
    _DataStore_LoyaltyPointRedeemPrizeHistoryLogLoadStore.getProxy().setExtraParam('RedeemHistoryStatusBy', RedeemHistoryStatusBy.get('RedeemHistoryStatusBy'));
    _DataStore_LoyaltyPointRedeemPrizeHistoryLogLoadStore.getProxy().setUrl(GetAPIurl() + '/LoyaltyPointRedeemPrizeHistoryLog/LoyaltyPointRedeemPrizeHistoryLogLoad');
   
   
    _DataStore_LoyaltyPointRedeemPrizeHistoryLogLoadStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {

                Ext.getCmp('FloatLoyaltyCardPoint_RedeemPrizeHistoryLogListID').setStore(_DataStore_LoyaltyPointRedeemPrizeHistoryLogLoadStore);
               
            } else {
              //  alert('Failed to load store data or no record found.');
                
            }
        }
    });











    // console.log(RedeemHistoryCode.get('RedeemHistoryCode'));
    // console.log(RedeemHistoryStatusBy.get('RedeemHistoryStatusBy'));
    // Ext.getStore('LoyaltyPointRedeemPrizeHistoryLogLoadStore').getProxy().setExtraParams({
    //     RedeemHistoryCode: RedeemHistoryCode.get('RedeemHistoryCode'),
    //     RedeemHistoryStatusBy: RedeemHistoryStatusBy.get('RedeemHistoryStatusBy'),
    // });
    // Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLogLoadStore').load();
    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     Ext.getStore('LoyaltyPointRedeemPrizeHistoryLogLoadStore').getProxy().setExtraParams({
    //         RedeemHistoryCode: RedeemHistoryCode.get('RedeemHistoryCode'),
    //         RedeemHistoryStatusBy: RedeemHistoryStatusBy.get('RedeemHistoryStatusBy'),
    //     });
    //     Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLogLoadStore').load();
    //     var myStore = Ext.getStore('LoyaltyPointRedeemPrizeHistoryLogLoadStore');
    //     //StampCount = myStore.getCount();
    //     //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
    //     // adjustHeight();
    //     Ext.Viewport.setMasked(false);

    // });
    // task.delay(500);
}




