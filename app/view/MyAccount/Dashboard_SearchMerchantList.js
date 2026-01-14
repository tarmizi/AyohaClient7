Ext.define('BuskartApp.view.MyAccount.Dashboard_SearchMerchantList', {

});

var _Dashboard_SearchMerchantList;


var isDashboard_SearchMerchantListOpen = 'N';

var glonbalDashboard_SearchMerchantList_FullCompanyAddress;









function Dashboard_SearchMerchantList() {

    _Dashboard_SearchMerchantList =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingDashboard_SearchMerchantListID',
         draggable: false,



         centered: true,
         //bottom: 64,
        zIndex: 70,
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
                             _Dashboard_SearchMerchantList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             RemovePages("Dashboard_SearchMerchantListHide()");
                         } if (e.direction == "right") {
                             _Dashboard_SearchMerchantList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             RemovePages("Dashboard_SearchMerchantListHide()");
                         }
                        
                        // 
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 height: 75,
                 // docked: 'top',
                 // width: 40,
                 style: ' background-color: white;',
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerDashboard_SearchMerchantListHeader',
                 //style: {
                 //    // background: '#D25959',
                 //    background: 'transparent',
                 //    // border: '2px'
                 //},
                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                 layout: {
                     type: 'vbox',
                     pack: 'left',
                     align: 'left',
                    
                 },
                 // hidden:true,
                 items:
                        [
                            // {
                            //     xtype: 'button',
                            //   //  id: 'btnDashboard_SearchMerchantListBack',
                            //     height: 30,
                            //     width: 35,
                            //     margin: '-38 0 0 10',
                            //     // iconCls: 'list',
                            //     html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                            //     ui: 'plain',
                            //     handler: function () {
                            //         RemovePages("Dashboard_SearchMerchantListHide()");
                            //         _Dashboard_SearchMerchantList.hide(Ext.fx.Animation({
                            //             type: 'slideOut',
                            //             direction: 'left',
                            //             easing: 'cubic-bezier(.7,0,.7,1)',
                            //             duration: 250
    
                            //         }));
                                   
    
                            //     }
                            // },
                               
                            {
                                id: 'htmlDashboard_SearchMerchantList',
                                margin: '15 0 0 10',

                                // zIndex: -10,
                                width: '94.5%',
                                // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                // original background text box color----> #f0f2f5
                                html: '<input  type="text" id="input-Dashboard_SearchMerchantList" style="width:100%;height: 50px;padding: 5px 45px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 5px;background-color:#f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="Search Ayoha Merchant">',
                            },
                         



                          {
                              xtype: 'button',
                              id: 'btnDashboard_SearchMerchantListBack',
                              height: 30,
                              width: 35,
                              margin: '-38 0 0 10',
                              // iconCls: 'list',
                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                              ui: 'plain',
                              handler: function () {
                                  RemovePages("Dashboard_SearchMerchantListHide()");
                                  _Dashboard_SearchMerchantList.hide(Ext.fx.Animation({
                                      type: 'slideOut',
                                      direction: 'left',
                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                      duration: 250

                                  }));
                                 

                              }
                          },
                          
                          {
                            xtype: 'button',
                         //   id: 'btnDashboard_SearchMerchantListBack',
                            height: 42,
                            width: 42,
                            margin: '-35 0 0 305',
                            // iconCls: 'list',
                            html: '<div ><img src="resources/icons/scanQrCodePurple.png" width="32" height="32" alt="Company Name"></div>',
                            ui: 'plain',
                            
                            handler: function () {
                                Ext.getCmp('mainView').setHidden(true);
                                Dashboard_SearchMerchantListHide();
                                FloatPanel_QrCodeScanner_ScanAyohaStoreShow();
                         
                            }
                        },



                                    //  {
                                    //      xtype: 'button',
                                    //      id: 'btnDashboard_SearchMerchantListBack',
                                    //      height: 30,
                                    //      width: 35,
                                    //      margin: '-38 -50 0 0',
                                    //      zIndex: 10,
                                    //      // iconCls: 'list',
                                    //      html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                    //      ui: 'plain',
                                    //      handler: function () {
                                    //          RemovePages("Dashboard_SearchMerchantListHide()");
                                    //          _Dashboard_SearchMerchantList.hide(Ext.fx.Animation({
                                    //              type: 'slideOut',
                                    //              direction: 'left',
                                    //              easing: 'cubic-bezier(.7,0,.7,1)',
                                    //              duration: 250

                                    //          }));
                                            

                                    //      }
                                    //  },






                        ]

             },
             {
                 width: '100%',
                 height: 25,
                 hidden:true,
                 id:'Dashboard_FilterMerchantTypeID',
                 html: '<div style="width:100%; height: 20px; border:3px none white;padding:0px 20px;margin:0px 0px 0px 0px;font-size:14px;font-weight:normal;color:black;text-align:right"><u>Filter Merchant Type: <b>Hijab</b></u></div>',
             },
                 {
                     xtype: 'list',

                     //  flex: 1,
                    // store: _DataStore_EnterprisesLoadByMerchantCategory,
                     store: _DataStore_EnterprisesLoadByMerchantCategory_temp,
                     id: 'Dashboard_SearchMerchantListLoadAllStoreID',
                     mode: 'SINGLE',
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
                     style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
                    
                     //itemTpl: '<div class="myContent" style="background-color:transparent;width:103%">' +
                     //    '{ModifiedIsMemberDashboardMerchantList}' +
                     //    '<div style="overflow:hidden;width:100%;margin:-45px 0px 0px 0px;background-color:transparent;height:60px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:17%;margin:5px 0px 0px 0px;background-color:transparent;"><img src="{EnterpriseLogoPath}" style="border:1px none white; width:35px;height:35px;margin:3px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:80%;margin:10px 0px 0px -20px;background-color:transparent;color:black"><b>{EnterpriseName}</b><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><i>{EnterpriseTagLine}</i></div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:right;margin:0px -25px 0px 0px;background-color:transparent;color:black;width:30%;">{ModifiedCountStar}</div></div>' +

                     //           '</div>' +
                     //           '<br><div style="width:100%;text-align:center;margin:-51px 0px 0px 0px;height: 23px;background-color:transparent;"></div>',


                     itemTpl: '<div class="myContent" style="background-color:transparent;width:103%">' +
                         '{ModifiedIsMemberDashboardMerchantList}' +
                         '<div style="overflow:hidden;width:100%;margin:-45px 0px 0px 0px;background-color:transparent;height:60px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:17%;margin:5px 0px 0px 0px;background-color:transparent;"><img src="{EnterpriseLogoPath}" style="border:1px none white; width:35px;height:35px;margin:3px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:80%;margin:3px 0px 0px -20px;background-color:transparent;color:black"><b>{EnterpriseName}</b><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><i>{EnterpriseTagLine}</i></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-5px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><img src="resources/icons/locationThree.png" style="width:16px;height:12px;"/>{Bandar},{Negeri}</div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:right;margin:-10px -25px 0px 0px;background-color:transparent;color:black;width:30%;">{ModifiedCountStar}</div></div>' +

                                '</div>' +
                                '<br><div style="width:100%;text-align:center;margin:-51px 0px 0px 0px;height: 23px;background-color:transparent;"></div>',



                     emptyText: '<div style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;font-size=16;font-weight:bold;color:black">Not Found!</div>',
                     listeners: {
                         itemtap: function (list, idx, target, records, evt) {
                             LoadingPanelShow(getLoadingIcon(),'Loading....');
                             MembershipTag= records.get('isMember');
                             glonbalDashboard_SearchMerchantList_FullCompanyAddress=records.get('NamaJalan')+',<br>'+records.get('Postkod')+' '+records.get('Bandar')+'.<br> '+records.get('Negeri')
                            // FloatPanel_RewardStore_OpenStore(records.get('ID'));
                           
                             FloatPanel_MerchantDetailPageShow(records.get('ID'), records.get('EnterpriseAccNo'), records.get('EnterpriseLogoPath'), records.get('EnterpriseName'), records.get('EnterpriseTagLine'),
                                 records.get('NamaJalan'), records.get('Postkod'), records.get('Bandar'), records.get('Negeri'), records.get('EnterpriseCoordinate'), records.get('EnterpriseDescriptions'), records.get('EnterprisePhoneNo')
                                 , records.get('PICContactNo'), records.get('EnterpriseFacebook'), records.get('EnterpriseWebsite'), records.get('EnterpriseInstagram'), records.get('EnterpriseTwiter'), records.get('BusinessMode')
                                 );


                         },
                         deselect: function (list, records) {

                         }
                     },


                     width: '100%',
                     //height: 440,
                     height: '90%',
                     disableSelection: true,

                     //listeners: {


                     //    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                     //        //  var BusinessType = record.get('BusinessTypeGroups');
                     //        var BusinessTypeGroupCode = record.get('BusinessTypeGroupCode');
                     //        FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(BusinessTypeGroupCode);

                     //        //if (isDashboard_SearchMerchantListOpen == 'Y') {
                     //        //    _Dashboard_SearchMerchantList.hide(Ext.fx.Animation({
                     //        //        type: 'popOut',
                     //        //        easing: 'easeInOut',
                     //        //        duration: 250,

                     //        //    }));

                     //        //}

                     //        Dashboard_SearchMerchantListHide();
                     //        isDashboard_SearchMerchantListOpen = 'N';

                     //    },

                     //    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                     //        //   var BusinessType = record.get('BusinessTypeGroups');
                     //        var BusinessTypeGroupCode = record.get('BusinessTypeGroupCode');
                     //        FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(BusinessTypeGroupCode);
                     //        //if (isDashboard_SearchMerchantListOpen == 'Y') {
                     //        //    _Dashboard_SearchMerchantList.hide(Ext.fx.Animation({
                     //        //        type: 'popOut',
                     //        //        easing: 'easeInOut',
                     //        //        duration: 250,

                     //        //    }));

                     //        //}
                     //        Dashboard_SearchMerchantListHide();
                     //        isDashboard_SearchMerchantListOpen = 'N';

                     //        //var ReceiptImg = (record.get('ID'));
                     //        //MovementClaimReceiptImageShow(ReceiptImg);
                     //    }


                     //}





                 },
         ]







     });
    return _Dashboard_SearchMerchantList;





}

function Dashboard_SearchMerchantListShow() {
    AddRoutePages("Dashboard_SearchMerchantListHide()");
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    Ext.Viewport.remove(_Dashboard_SearchMerchantList);
    this.overlay = Ext.Viewport.add(Dashboard_SearchMerchantList());
    this.overlay.show();
   
    isDashboard_SearchMerchantListOpen = 'Y';
    Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStore();
   // document.getElementById('input-Dashboard_SearchMerchant').value = "";
        //   document.getElementById("input-Dashboard_SearchMerchantList_SearchTxt").addEventListener("keyup", SearchBusinessTypeListOnKeyUp);
    // _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();

    document.getElementById("input-Dashboard_SearchMerchantList").addEventListener("keyup", Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStoreOnKeyUp);


    if (isFloatPanel_MembershipCardList_MyMembershipCardOpen == "Y") {
        // Ext.getCmp('LoadingDashboard_SearchMerchantListID').setZIndex(60);
        FloatPanel_MembershipCardList_MyMembershipCardHide();
    }

    
}


function Dashboard_SearchMerchantListShow_FromAyohaMerchant(EnterpriseBusinessType) {
    AddRoutePages("Dashboard_SearchMerchantListHide()");
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    Ext.Viewport.remove(_Dashboard_SearchMerchantList);
    this.overlay = Ext.Viewport.add(Dashboard_SearchMerchantList());
    this.overlay.show();
   
    isDashboard_SearchMerchantListOpen = 'Y';
    Ext.getCmp('Dashboard_FilterMerchantTypeID').setHidden(false);
    Ext.getCmp('Dashboard_FilterMerchantTypeID').setHtml('<div style="width:100%; height: 20px; border:3px none white;padding:0px 20px;margin:0px 0px 0px 0px;font-size:14px;font-weight:normal;color:black;text-align:right"><u>Filter Merchant Type: <b>' + EnterpriseBusinessType + '</b></u></div>');
   
    Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessTypeStore(EnterpriseBusinessType);

    document.getElementById("input-Dashboard_SearchMerchantList").addEventListener("keyup", Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStoreOnKeyUp);
}

function Dashboard_SearchMerchantListHide() {
   // _Dashboard_SearchMerchantList.hide(); isDashboard_SearchMerchantListOpen = 'N';
   // RemovePages("Dashboard_SearchMerchantListHide()");

    //alert(isDashboard_SearchMerchantListOpen)
    if (isDashboard_SearchMerchantListOpen == "Y") {
        _Dashboard_SearchMerchantList.hide(); isDashboard_SearchMerchantListOpen = 'N';
        RemovePages("Dashboard_SearchMerchantListHide()");
    }
    
}





var _DataStore_EnterprisesLoadByMerchantCategory_temp;


function Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStore() {
  


    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('RowStatus', 'Active');
    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantList');
    // _DataStore_EnterprisesLoadByMerchantCategory.load();

    
    _DataStore_EnterprisesLoadByMerchantCategory_temp.getProxy().setExtraParam('RowStatus', 'Active');
    _DataStore_EnterprisesLoadByMerchantCategory_temp.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory_temp.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantList');
  //  _DataStore_EnterprisesLoadByMerchantCategory_temp.load();



    _DataStore_EnterprisesLoadByMerchantCategory_temp.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
             
               
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });











    //var store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //store.get('RowNumber')


    // var task = Ext.create('Ext.util.DelayedTask', function () {
       

    //     //_DataStore_EnterprisesLoadByMerchantCategory.load();
    //     var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
    //     var counted = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
    //    // alert(count + ' - ' + counted);
    // //    setTimeout(function () {
    // //        document.getElementById('input-Dashboard_SearchMerchant').blur();
    // //    }, 1000);
    //     //Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + _DataStore_EnterprisesLoadByMerchantCategory.getCount() + ')</b></font>')
    //     LoadingPanelHide();


    // });
    // task.delay(500);


    Ext.Viewport.setMasked(false);
}








function Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessTypeStore(EnterpriseBusinessType) {
    //_DataStore_EnterprisesLoadAyohaMerchantListStore.getProxy().setExtraParam('RowStatus', 'Active');
    //_DataStore_EnterprisesLoadAyohaMerchantListStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantList');
    //_DataStore_EnterprisesLoadAyohaMerchantListStore.load();


    _DataStore_EnterprisesLoadByMerchantCategory_temp.getProxy().setExtraParam('RowStatus', 'Active');
    _DataStore_EnterprisesLoadByMerchantCategory_temp.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory_temp.getProxy().setExtraParam('EnterpriseBusinessType', EnterpriseBusinessType);
    _DataStore_EnterprisesLoadByMerchantCategory_temp.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessType');
    _DataStore_EnterprisesLoadByMerchantCategory_temp.load();







    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('RowStatus', 'Active');
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseBusinessType', EnterpriseBusinessType);
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessType');
    _DataStore_EnterprisesLoadByMerchantCategory.load();



    //var store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //store.get('RowNumber')


    var task = Ext.create('Ext.util.DelayedTask', function () {


        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        setTimeout(function () {
            document.getElementById('input-Dashboard_SearchMerchant').blur();
        }, 500);
        //Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + _DataStore_EnterprisesLoadByMerchantCategory.getCount() + ')</b></font>')
        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}















function Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStoreOnKeyUp() {






   // console.log('SearchEnterpriseOnKeyUp');
    var countEnterprisesLoadAyohaMerchantListStore = 0;


    _DataStore_EnterprisesLoadByMerchantCategory_temp.clearFilter();

    var queryString = document.getElementById('input-Dashboard_SearchMerchantList').value;

console.log('queryString: ' + queryString);

    if (queryString) {
        

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_EnterprisesLoadByMerchantCategory_temp.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        _DataStore_EnterprisesLoadByMerchantCategory_temp.clearFilter();
        return false;
    }




}
