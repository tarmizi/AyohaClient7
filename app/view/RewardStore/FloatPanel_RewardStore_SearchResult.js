
Ext.define('BuskartApp.view.RewardStore.FloatPanel_RewardStore_SearchResult', {

});

var _FloatPanel_RewardStore_SearchResult;


var isFloatPanel_RewardStore_SearchResultOpen = 'N';






function FloatPanel_RewardStore_SearchResult() {

    _FloatPanel_RewardStore_SearchResult =
    Ext.create('Ext.Container', {
        zIndex: 200,
        xtype: 'container',
        height: '100%',
      //  height: 350,
        width: '100%',
        id: 'FloatPanel_RewardStore_SearchResultID',
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
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
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
                            _FloatPanel_RewardStore_SearchResult.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                            isFloatPanel_RewardStore_SearchResultOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_RewardStore_SearchResult.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_RewardStore_SearchResultOpen = 'N';
                        }
                        RemovePages(_FloatPanel_RewardStore_SearchResult, "isFloatPanel_RewardStore_SearchResultOpen");
                    }
                });
            }
        },

        items: [
             {
                 xtype: 'container',
                 id: 'containerFloatPanel_RewardStoreSearchResult_List',
                 name: 'clickableContainerFloatPanel_RewardStoreSearchResult_List',
                 height: '100%',
                 width: '100%',
                 layout: {
                     type: 'vbox',
                     pack: 'center',
                     align: 'center'
                 },
                 // style: ' background-color:transparent;',
                 style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
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

                             {
                                 xtype: 'list',
                                 //  flex: 1,
                                 margin:'-10 0 0 0',
                                 width: '100%',
                               //  style: ' background-color:transparent;',
                                 store: _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore,
                                 // store: 'EnterprisesLoadByRowStatusStore',
                                 id: 'FloatPanel_RewardStoreSearchResult_List',
                                style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 30px 30px 30px 30px;',
                                 // grouped: true,
                                 mode: 'SINGLE',
                                 //  indexBar: true,
                                 disableSelection: true,
                                // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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



                                 itemTpl: '<div class="myContent" style="margin:-30px 0px 0px -7px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;height:310px;">' +
                                                             '<div style="width:50%;text-align:left;margin:30px 0px 0px 25px;background-color: transparent;height:5px;"><img src="{EnterpriseLogoPath}"style="width: 120px; height: 120px;border-color:grey;border-style:none;border-width:1px;;margin:20px 0px 0px 0px; " /></div>' +
                                                                '<table style="border-collapse:collapse;border-spacing:0;width:100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:20px;font-weight:normal;overflow:hidden;padding:17px 0px;text-align:right;vertical-align:middle;word-break:normal" colspan="2"><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:white;font-weight:bold;overflow:hidden;margin:7px 0px 0px 0px;height:35px">{EnterpriseBusinessType}&nbsp;<img src="{BusinessTypeIconPath}" alt="Image" style="width:35px;height:35px;margin:0px 10px -15px 0px;"> </div><br><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:white;font-weight:normal;overflow:hidden;margin:-45px 0px 0px -50px;">{EnterpriseDescriptions}</div></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-right: 1px solid white;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;font-weight:normal;" colspan="2">{ModifiedRecommendedByAyoha}<br><div style="width100%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:18px;color:black;font-weight:bold;overflow:hidden;margin:-30px 0px 0px 10px;">{EnterpriseName} <font size=1 color=black>{ModifiedEnterpriseRegistrationNo}</font></div><br><div style="width:70%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:normal;overflow:hidden;margin:-21px 0px 0px 10px;height:52px;">{EnterpriseAddress}</div><br>{ModifiedSocialMediaButton}<br></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 0px 20px; height:50px">{ModifiedMerchantLinkType}</td><td style="background-color:#ffffff;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 20px 0px;" ><button OnClick="FloatPanel_RewardStore_SearchResult_MembershipCardShow({ID})" class="buttonGetMemberhipCard" style="margin:0px 0px 0px -5px;" >Get Membership Card</button></td></tr></tbody></table>' +
                                                              '</div>',

                                 height: '100%',



                             },
                         ]
                     },
                 ]
             },


            










        ]





    });
    return _FloatPanel_RewardStore_SearchResult;



}








function FloatPanel_RewardStore_SearchResultShow(EnterpriseAccNo) {

    Ext.Viewport.remove(_FloatPanel_RewardStore_SearchResult);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStore_SearchResult());
    this.overlay.show();
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages(_FloatPanel_RewardStore_SearchResult, "isFloatPanel_RewardStore_SearchResultOpen");
    isFloatPanel_RewardStore_SearchResultOpen = 'Y';
    FloatPanel_RewardStore_SearchResult_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore(EnterpriseAccNo);
    // alert(globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus)

    // FloatPanel_RewardStore_SearchResultAdjustHeight();
    var containerViewclickableContainerFloatPanel_RewardStoreSearchResult_List = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_RewardStoreSearchResult_List]')[0];
    var containerViewElclickableContainerFloatPanel_RewardStoreSearchResult_List = containerViewclickableContainerFloatPanel_RewardStoreSearchResult_List.element;
    containerViewElclickableContainerFloatPanel_RewardStoreSearchResult_List.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_RewardStore_SearchResultHide();
      }
    );
}





function FloatPanel_RewardStore_SearchResultHide() {
    // FloatPanel_RewardStore_SearchResult_AddCardHide();

    if (isFloatPanel_RewardStore_SearchResultOpen == 'Y') {
        _FloatPanel_RewardStore_SearchResult.hide(); isFloatPanel_RewardStore_SearchResultOpen = 'N';
        RemovePages(_FloatPanel_RewardStore_SearchResult, "isFloatPanel_RewardStore_SearchResultOpen");
    }
   
}









function FloatPanel_RewardStore_SearchResult_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore(EnterpriseAccNo) {




    
    _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNo');
    _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
        //});

        ////  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        ////  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        ////console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)


        //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

        //var myStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');
        //_DataStore_MembershipsLoadBySubscriberAccNoStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');

        //alert(_DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getCount());

        LoadingPanelHide();
        Ext.Viewport.setMasked(false);










    });
    task.delay(500);




}




function FloatPanel_RewardStore_SearchResult_OpenStore(ID) {
    globalFloatPanel_AyohaStore_ModuleTagging = "AyohaMerchant";
    var EnterpriseAccNo = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    //  var EnterpriseAdvertisementTitle = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseFacebook = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var PICContactNo = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var MerchantLinkType = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseDescriptions = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_RewardStore_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_RewardStore_EnterpriseName = EnterpriseName.get('EnterpriseName');
    globalFloatPanel_RewardStore_EnterpriseLogoPath = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_EnterpriseFacebook = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_RewardStore_EnterpriseInstagram = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_RewardStore_PICContactNo = PICContactNo.get('PICContactNo');
    globalFloatPanel_RewardStore_EnterpriseCoordinate = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_RewardStore_EnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_MerchantLinkType = MerchantLinkType.get('MerchantLinkType');
    globalFloatPanel_RewardStore_EnterpriseDescriptions = EnterpriseDescriptions.get('EnterpriseDescriptions');
    globalFloatPanel_RewardStore_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanel_RewardStore_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');


    if (globalFloatPanel_RewardStore_MerchantLinkType.includes("WebSite")) {
        var UrlEnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');

        setTimeout(function () { window.open(UrlEnterpriseWebsite, '_system'); return false; }, 25);
    } else {
        setTimeout(function () { FloatPanel_AyohaStoreShow_AyohaMerchant() }, 50);
    }







}



function FloatPanel_RewardStore_SearchResult_MembershipCardShow(ID) {

    Ext.Viewport.remove(_FloatPanel_RewardStoreMembershipCard);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStoreMembershipCard());
    this.overlay.show();
    isFloatPanel_RewardStoreMembershipCardOpen = 'Y';

    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_RewardStoreMembershipCard";


    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseAccNo = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseHQAccNo = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
   
    FloatPanel_RewardStoreMembershipCard_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore(EnterpriseHQAccountNo, EnterpriseAccountNo);

    FloatPanel_RewardStore_SearchResultHide();
    Dashboard_SearchMerchantListHide();
}