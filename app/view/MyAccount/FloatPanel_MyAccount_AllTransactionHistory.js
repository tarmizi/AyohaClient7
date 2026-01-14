Ext.define('BuskartApp.view.MyAccount.FloatPanel_MyAccount_AllTransactionHistory', {

});

var _MyAccount_AllTransactionHistory;


var isMyAccount_AllTransactionHistoryOpen = 'N';











function MyAccount_AllTransactionHistory() {

    _MyAccount_AllTransactionHistory =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingMyAccount_AllTransactionHistoryID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 200,
         // modal: true,
         //  hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px solid;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _MyAccount_AllTransactionHistory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isMyAccount_AllTransactionHistoryOpen = 'N';
                             RemovePages("MyAccount_AllTransactionHistoryHide()");
                         } if (e.direction == "right") {
                             _MyAccount_AllTransactionHistory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isMyAccount_AllTransactionHistoryOpen = 'N';
                             RemovePages("MyAccount_AllTransactionHistoryHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 height: 40,
                 // docked: 'top',
                 // width: 40,
                 style: ' background-color: white;',
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerMyAccount_AllTransactionHistoryHeader',
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
                 style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                 // hidden:true,
                 items:
                        [
                            {
                                xtype:'panel',
                                width:10,
                            },

                                      {
                                          xtype: 'button',
                                          id: 'btnMyAccount_AllTransactionHistoryBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("MyAccount_AllTransactionHistoryHide()");
                                              _MyAccount_AllTransactionHistory.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isMyAccount_AllTransactionHistoryOpen = 'N';
                                              FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },

                                      //{
                                      //    margin: '0 0 0 0',
                                      //    html: '<font size=2 color=black><b>eWallet Transaction History</b></font>'
                                      //},
                                       {
                                           margin: '-4 0 0 0',
                                           id: 'htmlMyAccount_AllTransactionHistory_TitleHeaderTxt',
                                           html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Transaction History </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-23px 0px 0px 0px">YEAR 2021</div>',
                                           // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                           //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                       },
                                           {
                                               xtype: 'panel',
                                               width: 10,
                                           }
















                        ]

             },

             {
                 xtype: 'container',
                 width: '100%',
                 //height: 300,
                 height: '95%',
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'center',
                 },
                 items:[
                     {
                         xtype: 'list',
                         width: '100%',
                         //height: 300,
                         height: '100%',
                         // flex: 1,
                         store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore,
                         // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                         id: 'MyAccount_AllTransactionHistoryID',
                         mode: 'SINGLE',
                         // width: '100%',
                         grouped:true,
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
                         itemTpl: '<div onclick="MyAccount_AllTransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ','+ "'" + '{EnterpriseAddress}' + "'" + ','+ "'" + '{EnterpriseTagLine}' + "'" + ',`{CustomerAccNo}`,{ID},`{CreatedDate}`)" class="myContent" style="background-color:white;width:106%;height:70px;">' +


                         // '<table onclick="MyAccount_AllTransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 10px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                          '<table style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 10px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{CreatedDate}<br>{ModifiedPaymentChannel}</font></td></tr></table><br>'
                        
                          + '<div style="width:96%;height:20px;margin:-80px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 12px;font-weight:bold;">{ModifiedTransactionAmount}<br>({AyohaPoint})</div>'
                              + '</div>',


                         //height: '100%',

                         emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Transaction!</div>',


                     },

                 ]
                 
             },

                    
                    ///////


                    {
                        xtype: 'container',
                        width: '100%',
                        docked: 'bottom',
                        margin: '0 0 0 0',
                        height: 40,
                        style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                        // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid black;',
                        // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #f0f2f5;box-shadow:1px 0px 3px 3px #EEEDED ;',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            
                            {
                                width: '85%',
                                // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                html: '<input type="text" id="input-MyAccount_AllTransactionHistory_SearchCol"   style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 10px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 0px"  placeholder="Search Name or Amount">',
                            },
                            
                        {
                        xtype: 'button',
                        id: 'btnMyAccount_AllTransactionHistory_filter_Year',
    //  badgeText: '1',
    margin: '0 0 0 0',
    height: 35,
    width: 35,
    html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        // FloatPanel_BusinessTypeListShow();
        FloatPanel_YearOnlyShow();
                                                 
    }
},
                            
                        ]
                    },








         ]







     });
    return _MyAccount_AllTransactionHistory;





}

function MyAccount_AllTransactionHistoryShow() {

    Ext.Viewport.remove(_MyAccount_AllTransactionHistory);
    this.overlay = Ext.Viewport.add(MyAccount_AllTransactionHistory());
    this.overlay.show();
    AddRoutePages("MyAccount_AllTransactionHistoryHide()");
    isMyAccount_AllTransactionHistoryOpen = 'Y';
    var currYear = GetCurrentYear();
    MyAccount_AllTransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(currYear);
    document.getElementById("input-MyAccount_AllTransactionHistory_SearchCol").addEventListener("keyup", MyAccount_AllTransactionHistory_SearchCol_OnKeyUp);
    //   document.getElementById("input-MyAccount_AllTransactionHistory_SearchTxt").addEventListener("keyup", SearchBusinessTypeListOnKeyUp);
    // _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();


    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingMyAccount_AllTransactionHistoryID').setZIndex(410);
    }

   
}


function MyAccount_AllTransactionHistoryHide() {
    if (isMyAccount_AllTransactionHistoryOpen == 'Y') {
        _MyAccount_AllTransactionHistory.hide(); isMyAccount_AllTransactionHistoryOpen = 'N';
        RemovePages("MyAccount_AllTransactionHistoryHide()");
        //  FloatPanel_RewardStoreHide();
    }

}



function MyAccount_AllTransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(Year) {

    Ext.getCmp('htmlMyAccount_AllTransactionHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Transaction History </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-23px 0px 0px 0px">YEAR ' + Year + '</div>');

    FloatPanel_YearOnlyHide();
    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
   // alert(Year)
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.getProxy().setExtraParam('FilterType', "Year");
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.getProxy().setExtraParam('eWalletAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.getProxy().setExtraParam('Year', Year);
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.getProxy().setExtraParam('TransactionType', "NA");
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransaction');
   // _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.load();

//alert(GetCurrAyohaUserAccountNo())

    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
             
            } else {
                console.error('Failed to load store data or no record found.');
                //LoadingPanelHide();
            }
        }
    });


    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.getCount();
    //    // alert(count);

    //     Ext.Viewport.setMasked(false);
    //     //  VIAAdvertismentAutoSlide();

    // });
    // task.delay(500);
}




function MyAccount_AllTransactionHistory_SearchCol_OnKeyUp() {

  
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.clearFilter();

    var queryString = document.getElementById('input-MyAccount_AllTransactionHistory_SearchCol').value;



    if (queryString) {
       // console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
              
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
      
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore.clearFilter();
       
        return false;
    }
}




function MyAccount_AllTransactionHistory_AyohaeWalletTransactionStaging(TotalStampEarn,ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName,TransactionReferenceNo,EnterpriseAddress,EnterpriseTagLine,CustomerAccNo, ID,CreatedDate) {

    var strTRN = TransactionReferenceNo;
  



globalFloatPanel_AyohaStore_CheckOut_EnterpriseAccNo = CustomerAccNo;
    glonbalDashboard_SearchMerchantList_FullCompanyAddress=EnterpriseAddress;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseTagLine = EnterpriseTagLine;

    localStorage.setItem("EnterpriseAccNo",CustomerAccNo);
    localStorage.setItem("PaymentNo",TransactionReferenceNo);
//alert(TransactionType)


    if (TransactionType == "AyohaStore_Payment")
    {
        FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(TotalStampEarn,ItemCartCode, MembershipCardCode, OrderNo, TransactionType, AccountName, UserProfileImg,CreatedDate);
        return;
    }
    if (TransactionType == "AyohaStoreOnline_OnlinePayment")
    {
        FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(TotalStampEarn,ItemCartCode, MembershipCardCode, OrderNo, TransactionType, AccountName, UserProfileImg,CreatedDate);
        return;
    }


    if (TransactionType == "Scan_eWalletApp_Debit") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID);
        return;
    }
    if (TransactionType == "AyohaRewardContest_TapAndWin") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, strTRN);
        return;
    }
    if (TransactionType == "CashOut") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow_CashOut(TransactionReferenceNo, ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, strTRN);
        return;
    } if (TransactionType == "eWallet_AppTransferDebit") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID);
        return;
    }
    if (TransactionType == "eWallet_AppTransferCredit") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, strTRN);
        return;
    }
    else {
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID);
    }
}