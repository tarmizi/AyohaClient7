Ext.define('BuskartApp.view.Master.FloatPanel_YearOnly', {

});

var _FloatPanel_YearOnly= null;


var isFloatPanel_YearOnlyOpen = 'N';





function FloatPanel_YearOnlyCreateIfNeeded() {
    if (_FloatPanel_YearOnly && !_FloatPanel_YearOnly.destroyed) return;
_FloatPanel_YearOnly =
     Ext.create('Ext.Container', {
  id: 'LoadingFloatPanel_YearOnlyID',
         xtype: 'container',
         height: 350,
         width: '100%',
        bottom: 0,
           floated: true,
         draggable: false,
  closeAction: 'destroy',
  styleHtmlContent: true,
        layout: 'fit',

         centered: false,
         //bottom: 64,
        
       //  zIndex: 250,
         modal: true,
         hideOnMaskTap: true,
        //  layout: {
        //      type: 'vbox'
        //  },
         showAnimation: {
           
             type: 'slideIn',
             direction: 'up',
             easing: 'cubic-bezier(.2,0,.2,1)',
             duration: 250
         },
         hideAnimation: {
           
             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.2,0,.2,1)',
             duration: 250
         
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         //style: 'border-bottom:1px none;background-color:white;',
       
  style: 'background-color:transparent !important;border-radius:20px 20px 0 0;',
         //  style: "background-color: #D25959;",




           items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     height: ayoha_HeaderHeight(),
                   style:ayohaThemeColor_Header(),
docked: 'top',
                     id: 'containerFloatPanel_YearOnlyHeader',
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
                                              id: 'btnFloatPanel_YearOnlyBack',
                                              height: 30,
                                         width: 65,
                                         margin: '0 0 0 10',
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
FloatPanel_YearOnlyHide(false)

                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },


                                             {
                                                //  margin: '-10 -13 0 0',
                                                 // zIndex: 100,
                                                 // html: '<font size=2 color=white><b>Ayoha Points(AP)</b></font>',
                                                   html:ayohaTheme_HeaderText('Filter By Year'),
                                             },



{
                                               xtype: 'spacer',
                                               width: 20,

                                           },








                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_YearOnlyBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:white;',
                height: 290,
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
    id: 'FloatPanel_YearOnlyLoadMasterListID',
    store: Ext.create('Ext.data.Store', {
        fields: [
            { name: 'Year', type: 'string' }
        ],
        data: generateYearOnlyData()
    }),
    mode: 'SINGLE',
    disableSelection: true,
    width: '100%',
    height: 290,
    cls: 'FloatPanelYearOnlyListCls',
    style: 'background-color:#ffffff;border-radius:0;',
    scrollable: {
        direction: 'vertical',
        indicators: {
            y: { autoHide: true },
            x: { autoHide: true }
        }
    },

    itemTpl: [
    '<div onclick="FloatPanel_YearOnly_Filter(\'{Year}\');" ',
        'style="width:100%;',
               'height:44px;',
               'box-sizing:border-box;',
               'display:flex;',
               'align-items:center;',
               'justify-content:center;',
               'background:#ffffff;',
               'border-bottom:1px solid #f3f4f6;',
               'cursor:pointer;">',

        '<div style="width:100%;',
                    'text-align:center;',
                    'font-family:Arial,sans-serif;',
                    'font-size:17px;',
                    'font-weight:700;',
                    'color:#111827;',
                    'margin:0 auto;">',
            '{Year}',
        '</div>',
    '</div>'
].join('')
}


                ]


            },









             ]
        







     });
}








function FloatPanel_YearOnlyShow() {

    // Ext.Viewport.remove(_FloatPanel_YearOnly);
    // this.overlay = Ext.Viewport.add(FloatPanel_YearOnly());
    // this.overlay.show();
    // isFloatPanel_YearOnlyOpen = 'Y';
    // AddRoutePages("FloatPanel_YearOnlyHide()");



    FloatPanel_YearOnlyCreateIfNeeded();


    _FloatPanel_YearOnly.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_YearOnly', function () {
     
        FloatPanel_YearOnlyHide(true);
      });
    }





    isFloatPanel_YearOnlyOpen = 'Y';



    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_YearOnlyID').setZIndex(410);
    }
}












function FloatPanel_YearOnlyShow_AyohaPointRedemptionHistory() {

   
    FloatPanel_YearOnlyCreateIfNeeded();


    _FloatPanel_YearOnly.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_YearOnly', function () {
     
        FloatPanel_YearOnlyHide(true);
      });
    }





    isFloatPanel_YearOnlyOpen = 'Y';

}

function FloatPanel_YearOnlyHide(fromBack,animCfg) {

    if (isFloatPanel_YearOnlyOpen == 'Y') {
     




        
        if (animCfg) {
            _FloatPanel_YearOnly.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_YearOnly.hide();
          }
         isFloatPanel_YearOnlyOpen = 'N';
        
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_YearOnly');
          }
          _FloatPanel_YearOnly.destroy();
          _FloatPanel_YearOnly = null;
    }
  
}


function FloatPanel_YearOnly_Filter(Year) {
   // alert(Year);
    if (isFloatPanel_AyohaReward_RedemptionHistoryOpen == 'Y') {
        FloatPanel_AyohaReward_RedemptionHistory_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore_Filter(Year);
          return;
    }
    if (isFloatPanel_AyohaReward_PointTransactionsOpen == 'Y') {
        FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointLoadBySubscriberAccNoStore_ByYear(Year);
        return;
    }
    //if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
    //    document.getElementById('input-htmlFloatPanel_AyohaStore_Cart_Year').value = Year;
    //}
    if (isFloatPanel_AyohaeWallet_TransactionHistoryOpen == 'Y') {
        FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(Year);
          return;
    }

    if(isMyAccount_AllTransactionHistoryOpen=='Y'){
        MyAccount_AllTransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(Year);
          return;
    }
 
 
}





function generateYearOnlyData() {
    var startYear = 2026;
    var endYear = Math.max(new Date().getFullYear(), 2030);
    var data = [];
    var i;

    for (i = startYear; i <= endYear; i++) {
        data.push({
            Year: i.toString()
        });
    }

    return data;
}