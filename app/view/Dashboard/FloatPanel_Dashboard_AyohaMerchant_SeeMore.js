Ext.define('BuskartApp.view.Dashboard.FloatPanel_Dashboard_AyohaMerchant_SeeMore', {

});

var _FloatPanel_Dashboard_AyohaMerchant_SeeMore;


var isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';











function FloatPanel_Dashboard_AyohaMerchant_SeeMore() {

    _FloatPanel_Dashboard_AyohaMerchant_SeeMore =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_Dashboard_AyohaMerchant_SeeMoreID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 300,
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
                             _FloatPanel_Dashboard_AyohaMerchant_SeeMore.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';
                             RemovePages("FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_Dashboard_AyohaMerchant_SeeMore.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';
                             RemovePages("FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide()");
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
                 //height: 35,
                 // docked: 'top',
                 // width: 40,
                 style: ' background-color: white;',
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerFloatPanel_Dashboard_AyohaMerchant_SeeMoreHeader',
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
                                          id: 'btnFloatPanel_Dashboard_AyohaMerchant_SeeMoreBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide()");
                                              _FloatPanel_Dashboard_AyohaMerchant_SeeMore.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';
                                             // FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },

                                      {
                                          margin: '0 10 0 0',
                                          html: '<font size=2 color=black><b>Ayoha Merchant Category</b></font>'
                                      },
                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_Dashboard_AyohaMerchant_SeeMoreIcon',
                                               height: 30,
                                               width: 35,
                                               hidden: true,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/filterMerchantWhite.png" width="25" height="20" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                   RemovePages("FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide()");
                                                   _FloatPanel_Dashboard_AyohaMerchant_SeeMore.hide(Ext.fx.Animation({
                                                       type: 'slideOut',
                                                       direction: 'right',
                                                       easing: 'cubic-bezier(.7,0,.7,1)',
                                                       duration: 250

                                                   }));
                                                   isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';
                                                  // FloatPanel_RewardStoreHide();
                                                   //  FloatPanel_RewardStoreHide();

                                               }
                                           },















                        ]

             },

                 {
                     xtype: 'list',

                     //  flex: 1,
                     store: _DataStore_BusinessTypeGroupMerchantCategoryStore,                    
                     id: 'FloatPanel_Dashboard_AyohaMerchant_SeeMoreLoadAllStoreID',
                     mode: 'SINGLE',
                     disableSelection: false,

                     //itemTpl: '<div class="myContent">' +
                     //   '<div><b>{ID}</b></div>' +
                     //   '<div>{ReceiptName}</div>' +
                     //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                     //   '<div><b>{Amount}</b></div>' +
                     //    '<div style="display: none;">{ID}</div>' +
                     //   '</div>',
                     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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

                     itemTpl: '<div onclick="Dashboard_SearchMerchantListShow_FromAyohaMerchant(' + "'" + '{BusinessTypeGroups}' + "'" + '); FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide();" class="myContent" style="background-color:white;width:104%">' +
                         '<div onclick="Dashboard_SearchMerchantListShow_FromAyohaMerchant(' + "'" + '{BusinessTypeGroups}' + "'" + '); FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide();" style="overflow:auto;width:104%;margin:-12px 0px 0px -13px;background-color:white;height:60px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 20px;background-color:white;"><img src="{ModifiedBusinessTypeGroupsIconPath}" style="border:1px none white; width:35px;height:35px;" /></div><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:70%;margin:15px 0px 0px -20px;background-color:white;color:black"><b>{BusinessTypeGroups} ({Counted})</b></div><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:10%;margin:15px 0px 0px 0px;background-color:white;color:black"><b></b></div>' +

                                '</div><br><div onclick="Dashboard_SearchMerchantListShow_FromAyohaMerchant(' + "'" + '{BusinessTypeGroups}' + "'" + '); FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide();" style="width:104%;text-align:center;margin:-65px 0px 0px 0px;height: 23px;background-color:transparent;"></div>',

                 



                     width: '100%',
                     //height: 440,
                     height: '96%',
                     disableSelection: true,

                     //listeners: {


                     //    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                     //      //  var BusinessType = record.get('BusinessTypeGroups');
                     //        var BusinessTypeGroupCode = record.get('BusinessTypeGroupCode');
                     //        FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(BusinessTypeGroupCode);

                     //        //if (isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen == 'Y') {
                     //        //    _FloatPanel_Dashboard_AyohaMerchant_SeeMore.hide(Ext.fx.Animation({
                     //        //        type: 'popOut',
                     //        //        easing: 'easeInOut',
                     //        //        duration: 250,

                     //        //    }));

                     //        //}

                     //        FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide();
                     //        isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';

                     //    },

                     //    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                     //     //   var BusinessType = record.get('BusinessTypeGroups');
                     //        var BusinessTypeGroupCode = record.get('BusinessTypeGroupCode');
                     //        FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(BusinessTypeGroupCode);
                     //        //if (isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen == 'Y') {
                     //        //    _FloatPanel_Dashboard_AyohaMerchant_SeeMore.hide(Ext.fx.Animation({
                     //        //        type: 'popOut',
                     //        //        easing: 'easeInOut',
                     //        //        duration: 250,

                     //        //    }));

                     //        //}
                     //        FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide();
                     //        isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';

                     //        //var ReceiptImg = (record.get('ID'));
                     //        //MovementClaimReceiptImageShow(ReceiptImg);
                     //    }


                     //}





                 },
         ]







     });
    return _FloatPanel_Dashboard_AyohaMerchant_SeeMore;





}
var _DataStore_BusinessTypeList;
function FloatPanel_Dashboard_AyohaMerchant_SeeMoreShow() {

    Ext.Viewport.remove(_FloatPanel_Dashboard_AyohaMerchant_SeeMore);
    this.overlay = Ext.Viewport.add(FloatPanel_Dashboard_AyohaMerchant_SeeMore());
    this.overlay.show();
    AddRoutePages("FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide()");
    isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'Y';
    FloatPanel_Dashboard__DataStore_BusinessTypeGroupMerchantCategoryStore();

}

function FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide() {
    if (isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen == 'Y') {
        _FloatPanel_Dashboard_AyohaMerchant_SeeMore.hide(); isFloatPanel_Dashboard_AyohaMerchant_SeeMoreOpen = 'N';
        RemovePages("FloatPanel_Dashboard_AyohaMerchant_SeeMoreHide()");
        //  FloatPanel_RewardStoreHide();
    }

}






function FloatPanel_Dashboard__DataStore_BusinessTypeGroupMerchantCategoryStore() {
  

    _DataStore_BusinessTypeGroupMerchantCategoryStore.getProxy().setUrl(GetAPIurl() + '/BusinessTypeGroup/BusinessTypeGroupMerchantCategory');
    _DataStore_BusinessTypeGroupMerchantCategoryStore.load();



    //var store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //store.get('RowNumber')


    var task = Ext.create('Ext.util.DelayedTask', function () {


        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_BusinessTypeGroupMerchantCategoryStore.getCount();
        
        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}








    function SearchBusinessTypeListOnKeyUp() {






        console.log('SearchBusinessTypeListOnKeyUp');
        var countEnterprise = 0;


        _DataStore_BusinessTypeList.clearFilter();

        var queryString = document.getElementById('input-FloatPanel_Dashboard_AyohaMerchant_SeeMore_SearchTxt').value;



        if (queryString) {
            console.log(queryString.length);

            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_BusinessTypeList.filterBy(function (record) {
                if (thisRegEx.test(record.get('BusinessType'))) {
                    console.log('ada0');

                    //countEnterprise = _DataStore_BusinessTypeList.getCount();
                    //Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                    return true;

                };
                return false;
                console.log('tiada1');

                //  return false;
            });
            console.log('tiada3');
            //countEnterprise = _DataStore_BusinessTypeList.getCount();

            //Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }


        else {
            console.log('tiada2');
            _DataStore_BusinessTypeList.clearFilter();
            return false;
        }



    }

