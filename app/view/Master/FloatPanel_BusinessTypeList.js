Ext.define('BuskartApp.view.Master.FloatPanel_BusinessTypeList', {

});

var _FloatPanel_BusinessTypeList;


var isFloatPanel_BusinessTypeListOpen = 'N';











function FloatPanel_BusinessTypeList() {

    _FloatPanel_BusinessTypeList =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_BusinessTypeListID',
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
                             _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_BusinessTypeListOpen = 'N';
                         RemovePages("FloatPanel_BusinessTypeListHide()");
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

                 id: 'containerFloatPanel_BusinessTypeListHeader',
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
                                          id: 'btnFloatPanel_BusinessTypeListBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("FloatPanel_BusinessTypeListHide()");
                                              _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_BusinessTypeListOpen = 'N';
                                              FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },

                                      {
                                          margin: '0 0 0 0',
                                          html: '<font size=2 color=black><b>Ayoha Merchant Category</b></font>'
                                      },
                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_BusinessTypeListIcon',
                                               height: 30,
                                               width: 35,
                                               hidden:true,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/filterMerchantWhite.png" width="25" height="20" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                   RemovePages("FloatPanel_BusinessTypeListHide()");
                                                   _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                                       type: 'slideOut',
                                                       direction: 'right',
                                                       easing: 'cubic-bezier(.7,0,.7,1)',
                                                       duration: 250

                                                   }));
                                                   isFloatPanel_BusinessTypeListOpen = 'N';
                                                   FloatPanel_RewardStoreHide();
                                                 //  FloatPanel_RewardStoreHide();

                                               }
                                           },















                        ]

             },

                 {
                     xtype: 'list',
                    
                     //  flex: 1,
                     store: 'BusinessTypeLoadStore',
                     id: 'FloatPanel_BusinessTypeListLoadAllStoreID',
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

                     itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +
                         '<div onclick="FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(' + "'" + '{BusinessTypeGroupCode}' + "'" + '); FloatPanel_BusinessTypeListHide();" style="overflow:auto;width:104%;margin:-12px 0px 0px -13px;background-color:white;height:60px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 20px;background-color:white;"><img src="{ModifiedBusinessTypeGroupsIconPath}" style="border:1px none white; width:35px;height:35px;" /></div><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:70%;margin:15px 0px 0px -20px;background-color:white;color:black"><b>{BusinessTypeGroups} ({Counted})</b></div><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:10%;margin:15px 0px 0px 0px;background-color:white;color:black"><b></b></div>' +

                                '</div><br><div style="width:104%;text-align:center;margin:-65px 0px 0px 0px;height: 23px;background-color:transparent;"></div>',
                     
                    
                     width: '100%',
                     //height: 440,
                     height:'96%',
                     disableSelection: true,

                     //listeners: {

                        
                     //    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                     //      //  var BusinessType = record.get('BusinessTypeGroups');
                     //        var BusinessTypeGroupCode = record.get('BusinessTypeGroupCode');
                     //        FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(BusinessTypeGroupCode);
                           
                     //        //if (isFloatPanel_BusinessTypeListOpen == 'Y') {
                     //        //    _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                     //        //        type: 'popOut',
                     //        //        easing: 'easeInOut',
                     //        //        duration: 250,

                     //        //    }));

                     //        //}

                     //        FloatPanel_BusinessTypeListHide();
                     //        isFloatPanel_BusinessTypeListOpen = 'N';

                     //    },

                     //    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                     //     //   var BusinessType = record.get('BusinessTypeGroups');
                     //        var BusinessTypeGroupCode = record.get('BusinessTypeGroupCode');
                     //        FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(BusinessTypeGroupCode);
                     //        //if (isFloatPanel_BusinessTypeListOpen == 'Y') {
                     //        //    _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                     //        //        type: 'popOut',
                     //        //        easing: 'easeInOut',
                     //        //        duration: 250,

                     //        //    }));

                     //        //}
                     //        FloatPanel_BusinessTypeListHide();
                     //        isFloatPanel_BusinessTypeListOpen = 'N';
                            
                     //        //var ReceiptImg = (record.get('ID'));
                     //        //MovementClaimReceiptImageShow(ReceiptImg);
                     //    }


                     //}





                 },
         ]







     });
    return _FloatPanel_BusinessTypeList;





}
var _DataStore_BusinessTypeList;
function FloatPanel_BusinessTypeListShow() {

    Ext.Viewport.remove(_FloatPanel_BusinessTypeList);
    this.overlay = Ext.Viewport.add(FloatPanel_BusinessTypeList());
    this.overlay.show();
    AddRoutePages("FloatPanel_BusinessTypeListHide()");
    isFloatPanel_BusinessTypeListOpen = 'Y';
 //   document.getElementById("input-FloatPanel_BusinessTypeList_SearchTxt").addEventListener("keyup", SearchBusinessTypeListOnKeyUp);
    // _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        FloatPanel_RewardStoreShow_FromBusinessTypelist();



    });
    task.delay(1000);
}


function FloatPanel_BusinessTypeListHide() {
    if (isFloatPanel_BusinessTypeListOpen == 'Y') {
        _FloatPanel_BusinessTypeList.hide(); isFloatPanel_BusinessTypeListOpen = 'N';
        RemovePages("FloatPanel_BusinessTypeListHide()");
      //  FloatPanel_RewardStoreHide();
    }
  
}








function SearchBusinessTypeListOnKeyUp() {






    console.log('SearchBusinessTypeListOnKeyUp');
    var countEnterprise = 0;


    _DataStore_BusinessTypeList.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_BusinessTypeList_SearchTxt').value;



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
