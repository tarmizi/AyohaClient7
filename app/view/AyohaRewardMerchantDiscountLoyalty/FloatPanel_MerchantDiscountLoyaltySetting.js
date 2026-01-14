
Ext.define('BuskartApp.view.AyohaRewardMerchantDiscountLoyalty.FloatPanel_MerchantDiscountLoyaltySetting', {

});

var _FloatPanel_MerchantDiscountLoyaltySetting;


var isFloatPanel_MerchantDiscountLoyaltySettingOpen = 'N';






function FloatPanel_MerchantDiscountLoyaltySetting() {

    _FloatPanel_MerchantDiscountLoyaltySetting =
    Ext.create('Ext.Container', {
        zIndex: 170,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_MerchantDiscountLoyaltySettingID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
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
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_MerchantDiscountLoyaltySetting.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_MerchantDiscountLoyaltySetting.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                }

        //            }
        //        });
        //    }
        //},

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                style: ' background-color:white',
                layout: {
                    type: 'fit',

                },
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked:'top',
                        height: 50,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_MerchantDiscountLoyaltySettingHeader',
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                        },
                        // hidden:true,
                        items:
                               [
                                   {
                                       xtype: 'spacer',
                                      // height: 30,
                                       width: 20,
                                   },

                                   {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_MerchantDiscountLoyaltySetting_TitleHeaderTxt',
                                    html: '<font size=3 color=black><b>Membership Card Discount Setting</b></font>'
                                },
                                             
                                              {
                                                  xtype: 'spacer',

                                              },


                                            
                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_MerchantDiscountLoyaltySettingBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                   // FloatPanel_MerchantDiscountLoyaltySettingHide();
                                                    // FloatPanel_MerchantDiscountLoyaltySetting_AddCardHide();
                                                    isFloatPanel_MerchantDiscountLoyaltySettingOpen = 'N';
                                                    _FloatPanel_MerchantDiscountLoyaltySetting.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                       // duration: 250

                                                    }));
                                                   // FloatPanel_MerchantDiscountLoyaltySetting_AddCardHide();

                                                }
                                            },    
                                            {
                                                xtype: 'spacer',
                                               // height: 30,
                                                width: 20,
                                            },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_MerchantDiscountLoyaltySetting_CardIcon',
                                                        height: 30,
                                                        width: 35,
                                                        hidden:true,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/membershicardsetting.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           
                                                            isFloatPanel_MerchantDiscountLoyaltySettingOpen = 'N';

                                                            _FloatPanel_MerchantDiscountLoyaltySetting.hide(Ext.fx.Animation({
                                                                type: 'slideOut',
                                                                direction: 'right',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                            //FloatPanel_MerchantDiscountLoyaltySetting_AddCardHide();
                                                        }
                                                    },



{
xtype: 'spacer',
height: 30,
width: 8,
},





                               ]

                    },
                    {
                        xtype: 'container',


                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'left'

                        },
                        items: [
                          



                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_MerchantDiscountLoyaltySettingStampCardList',
                                hidden:true,
                               // margin: '-10 0 0 0',
                                width: '25%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_MerchantDiscountLoyaltySettingCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'

                                },
                              

                                items: [
                                    {
                                        xtype: 'panel',
                                        height:5
                                    },

                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      height: '100%',
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left'

                                      },
                                      items: [

                                          
                                           {
                                               xtype: 'panel',
                                               height: 5
                                           },

                                              
{
    xtype: 'container',
    width: '100%',
    height:'100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    style: 'background-color:transparent',
    items:[

     
        {
            xtype: 'container',
            width: 420,
            margin:'18 0 0 0',
            height:'100%',

            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'

            },
            style: 'background-color:transparent',
            
            items: [
                {
                    margin: '0 0 0 20', 
                    width: '100%',                 
                    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membership Card Selected</u></div>',
                },
                {
                    xtype: 'list',
                    margin: '7 0 0 0', 
                    //flex:1,
                    height: '96%',
                    store: _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore,
                    id: 'FloatPanel_MerchantDiscountLoyaltySettingLoyaltyCardID',
                    mode: 'SINGLE',
                    //grouped: true,
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
                    style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                    //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
                    //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                    //   '</div>' +
                    //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',

                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                  //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                    '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                '</div>' +
                                                // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                    '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Members</div></div>' +
                    '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-31px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:30px;font-weight:bold;">{MembersCount}</div></div>' +
                   //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +

                    '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Privilage Level</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fee</div></div>' +
                  //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                    //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                      '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardType}</div><div style="width:100%;text-align:right;margin:-23px 0px 0px -25px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">RM{MembershipCardFee}</div></div>',

                    //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',







                    width: '100%',
                    listeners: {
                        itemsingletap: function (list, idx, target, records, evt) {

                          //  var ID = records.get('ID');

                           // FloatPanel_MerchantDiscountLoyaltySetting_EditCardShow_Edit(ID);

                        },
                        deselect: function (list, records) {

                        }
                    },

                },
            ]
        },
    ]
},
                                           
                                          
        
                                      ]
                                  },
                                  
                                ]

                            },

                            {
                                xtype: 'container',
                                width: 110,
                                height: '100%',
                            },
{
    xtype: 'container',
                                id: 'containerFloatPanel_MerchantDiscountLoyaltySettingDetails',
                               // margin: '-10 0 0 0',
                                width: '30%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                              //  title: 'FloatPanel_MerchantDiscountLoyaltySettingCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'

                                },
                                items:[
                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:35,
                                    },
                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membershp Card Entitled Discount(%)</u></div>',
                                    },
                                    {
            
                                        id: 'FloatPanel_MerchantDiscountLoyaltySetting_discountSetting',
                                        margin: '5 0 0 0',
                                        width: '90%',
                                        height: 20,
                                        html: '<input type="number" id="input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                           
                           
                                    },
                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:30,
                                    },
                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membershp Card Discount Campaign Name</u></div>',
                                    },
                                    {
            
                                        id: 'FloatPanel_MerchantDiscountLoyaltySetting_discountSetting_name',
                                        margin: '5 0 0 0',
                                        width: '90%',
                                        height: 20,
                                        html: '<input type="text" id="input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting_name"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                           
                           
                                    },

                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:30,
                                    },

                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>is Membership card  discount required End Date?</u></div>',
                                    },

                                    {
                                        xtype: 'container',
                                        margin: '10 0 0 0',
                                        width: '100%',
                                        id: 'containertogglefieldFloatPanel_MerchantDiscountLoyaltySettingYesNo',
                                        style: {
          
                                            background: 'transparent',
          
                                        },
                                        layout: {
                                            type: 'hbox',
                                            pack: 'left',
                                            align: 'left'
          
                                        },
                                        items: [
                                           
                                            {
                                                xtype: 'togglefield',
                                                // text:'NO/YES',
                                                //    name: 'toggleName',
                                                margin: '-12 0 0 -10',
                                                height: 5,
                                                // width:20,
                                                id: 'togglefieldFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo',
                                                //label: 'Manual',
                                                disabled: false,
                                                value: false,
                                                style: {
          
                                                    // background: '#f44336',
                                                    background: 'transparent',
          
                                                },
                                                listeners: {
                                                    change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                                                        //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                                                        if (newValue == true) { // if toggle is true then enable the slider
          
                                                            globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate="Yes";
                                                            Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo').setHtml('<font size=2 color=black>YES</font>');
                                                            // globalEditCard_RequireApprovalYesNo = "YES";
                                                            // Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');
          
                                                            
          
                                                        }
          
          
                                                            // if(newValue == false)
                                                        else { // else make it false
          
                                                            Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo').setHtml('<font size=2 color=black>NO</font>');
                                                            globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate="No";
                                                            // globalEditCard_RequireApprovalYesNo = "NO";
                                                        }
          
          
                                                    },
          
          
                                                }
          
          
                                            },
                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlisFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo',
                                                 html: '<font size=2 color=black>NO</font>',
          
                                             },
                                        ]
          
                                    },

                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:30,
                                    },
                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membershp Card Entitled Discount End Date</u></div>',
                                    },
                                    {
            
                                        id: 'FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting',
                                        margin: '5 0 0 0',
                                        width: '90%',
                                        height: 20,
                                        html: '<input type="date" id="input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting"  style="border-color:grey;color:black;width:250px;text-align: left;font-size:16px;">'
                           
                           
                                    },



                                    {
                                        xtype: 'container',
                                        width: '100%', 
                                        height:30,
                                    },
                                    {
                                        margin: '0 0 0 0', 
                                        width: '100%',                 
                                        html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membershp Card Discount Image</u></div>',
                                    },

                                    {

                                        xtype: 'container',
                                        style: ' background-color:transparent',
                                        margin: '5 0 0 0',
                                        width: '100%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left'
                                        },
                                        items: [
                                            {
                           
                                                id: 'FloatPanel_MerchantDiscountLoyaltySetting_BackgroundImgCard',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/goldcardbg.jpeg" style="width:110%;height:150px;border-radius:10px 10px 10px 10px;" alt="Company Name"></div>',
                           
                                            },
                           
                                        ]
                           
                                    },
                           
                                    {
                                        xtype: 'container',
                                        style: ' background-color:transparent',
                                        id: 'ContainerFloatPanel_MerchantDiscountLoyaltySetting_BackgroundImgUploadImage',
                                        //hidden: true,
                                        margin: '0 0 0 0',
                                        width: '100%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'center'
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                style: ' background-color:transparent',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'start',
                                                    align: 'center'
                           
                                                },
                                                items: [
                           
                                                         {
                                                             xtype: 'container',
                           
                                                             width: '90%',
                                                             style: {
                           
                                                                 background: 'transparent',
                           
                                                             },
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'left',
                                                                 align: 'left'
                           
                                                             },
                                                             items: [
                           
                           
                                                                 {
                                                                     xtype: 'container',
                           
                                                                     width: '100%',
                                                                     style: {
                           
                                                                         background: 'transparent',
                           
                                                                     },
                                                                     layout: {
                                                                         type: 'hbox',
                                                                         pack: 'start',
                                                                         align: 'center'
                           
                                                                     },
                                                                     items: [
                                                                           {
                                                                               margin: '3 0 0 0',
                           
                                                                               html: '<font size=1 color=black>*Uploaded Image limit to < 2MB</font>',
                           
                                                                           },
                           
                           
                                                                     ]
                                                                 },
                           
                           
                                              {
                                                  id: 'HtmlinputImgFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage',
                                                  hidden: true,
                                                  margin: '0 0 0 0',
                                                  width: '100%',
                                                  html: '<input type="file" id="inputImg-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage" accept="image/*"  onchange="FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
                           
                                                  //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
                           
                           
                           
                           
                           
                                              },
                           
                           
                           
                           
                           
                           
                                                           {
                           
                                                               margin: '-2 0 0 0',
                                                               width: '105%',
                                                               height: 20,
                                                               html: '<input type="text" id="inputName-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                                           },
                           
                                                             ]
                           
                                                         },
                           
                           
                                                          //{
                                                          //    xtype:'container'
                           
                                                          //},
                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_MerchantDiscountLoyaltySetting_UploadBackgroundImage',
                                                                name: 'clickablebtnFloatPanel_MerchantDiscountLoyaltySetting_UploadBackgroundImage',
                                                                //  badgeText: '1',
                                                                margin: '0 0 -10 0',
                                                                height: 35,
                                                                width: 35,
                                                                html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                  
                                                                }
                                                            },
                           
                                                ]
                           
                                            },
                           
                                        ]
                                    },
                           
                                ]
   
},

{
    xtype: 'container',
    width: 50,
    height: '100%',
},

{
    xtype: 'container',
    width: '45%',
    height: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'
    },
    items:[
       
        {
            xtype: 'container',
            width: '100%', 
            height:30,
        },
        {
            margin: '0 0 0 0', 
            width: '100%',                 
            html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Membershp Card Discount Term And Conditions(if Any)</u></div>',
        },
        {
            margin: '5 0 0 0',
            width: '70%', 
            height: 450,
            html:'<textarea id="input-FloatPanel_MerchantDiscountLoyaltySetting_TermAndConditionTxt" style="border: 1px solid black;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:450px;" wrap="hard"></textarea>'
        },
        {
            xtype: 'container',
            width: '100%', 
            height:30,
        },

        {
            margin: '0 0 0 0', 
            width: '100%',                 
            html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold"><u>Activated Discount Campaign?</u></div>',
        },

        {
            xtype: 'container',
            margin: '10 0 0 0',
            width: '100%',
            id: 'containertoggleFloatPanel_MerchantDiscountLoyaltySetting_RowStatus',
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'

            },
            items: [

                {
                    xtype: 'togglefield',
                    // text:'NO/YES',
                    //    name: 'toggleName',
                    margin: '-12 0 0 -10',
                    height: 5,
                    // width:20,
                    id: 'togglefieldFloatPanel_MerchantDiscountLoyaltySetting_RowStatus',
                    //label: 'Manual',
                    disabled: false,
                    value: false,
                    style: {

                        // background: '#f44336',
                        background: 'transparent',

                    },
                    listeners: {
                        change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                            //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                            if (newValue == true) { // if toggle is true then enable the slider


                                // globalEditCard_RequireApprovalYesNo = "YES";
                                Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RowStatus').setHtml('<font size=2 color=black>YES</font>');
                                globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus="Active";



                            }


                                // if(newValue == false)
                            else { // else make it false

                                Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RowStatus').setHtml('<font size=2 color=black>NO</font>');
                              
                                globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus="InActive";

                            }


                        },


                    }


                },
                 {
                     margin: '0 0 0 0',
                     id: 'htmlisFloatPanel_MerchantDiscountLoyaltySetting_RowStatus',
                     html: '<font size=2 color=black>NO</font>',

                 },
            ]

        },
    ]
},












                        ]
                    },





















                    
                    {
                        xtype: 'container',
                        margin: '0 0 0 0',
                        id: 'FloatPanel_MerchantDiscountLoyaltySettingTitleOutter',
                        height:50,
                        width: '100%',
                        docked: 'bottom',
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                 
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
 
                        },
                        items: [
 
 
                        {
                            xtype: 'button',
                           // id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PreviewCard',
                            id:'btnFloatPanel_MerchantDiscountLoyaltySetting_Preview',
                            //  badgeText: '1',
                            // hidden:true,
                            margin: '0 -18 -8 0',
                            //height: 35,
                            //width: 35,
                            html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
 
                            }
                        },
            {
                xtype: 'button',
                //hidden:true,
               
                id:'txtFloatPanel_MerchantDiscountLoyaltySetting_Preview',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>PreView </font>',
                ui: 'plain',
                handler: function () {
                   
                }
            },
 
 
            {
                xtype: 'spacer'
            },
                    {
                        xtype: 'button',
                        
                        id:'btnFloatPanel_MerchantDiscountLoyaltySetting_DeleteDiscountLoyalty',
                        //  badgeText: '1',
                        margin: '0 -18 -8 0',
                        //height: 35,
                        //width: 35,
                        html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                        ui: 'plain',
                        handler: function () {
                            // var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType').value;
                            // if (CardType == "Auto-Default") {
                            //     Swal.fire({
                            //         icon: 'error',
                            //         title: 'Defautl Card',
                            //         text: 'Default Card cannot be deleted!',
                            //     })
                            //     return
                            // }
 
 
                            Swal.fire({
                                title: 'Are you sure To delete?',
                                text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes'
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus="InActive";
                                    FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate_Edit()
                                    // FloatPanel_AyohaCardManagement_EditCard_Point_save("InActive");
                                }
                            });
 
 
 
 
                        }
                    },
            {
                xtype: 'button',
                id:'txtFloatPanel_MerchantDiscountLoyaltySetting_DeleteDiscountLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>*Delete</font>',
                ui: 'plain',
                handler: function () {
 
 
 
 
 
 
 
 
 
 
 
                    Swal.fire({
                        title: 'Are you sure To delete?',
                        text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus="InActive";
                        FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate_Edit()
                        // FloatPanel_AyohaCardManagement_EditCard_Point_save("InActive");
                        }
                    });
                }
            },
 
                 {
                     xtype: 'button',
                     id:'btnFloatPanel_MerchantDiscountLoyaltySetting_SaveDiscountLoyalty',
                     //  badgeText: '1',
                     margin: '0 -18 -8 0',
                     //height: 35,
                     //width: 35,
                     html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                        FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate();
                     }
                 },
            {
                xtype: 'button',
                //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                id:'txtFloatPanel_MerchantDiscountLoyaltySetting_SaveDiscountLoyalty',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Save</font>',
                ui: 'plain',
                handler: function () {
                    FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate();
                }
            },














            {
                xtype: 'button',
                id:'btnFloatPanel_MerchantDiscountLoyaltySetting_EditDiscountLoyalty',
                //  badgeText: '1',
                margin: '0 -18 -8 0',
                //height: 35,
                //width: 35,
                html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate_Edit();
                }
            },
       {
           xtype: 'button',
           //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
           id:'txtFloatPanel_MerchantDiscountLoyaltySetting_EditDiscountLoyalty',
           //  badgeText: '1',
           margin: '7 0 0 7',
           //height: 40,
           //width: 130,
           html: '<font size=2 color=grey>Edit</font>',
           ui: 'plain',
           handler: function () {
            FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate_Edit();
           }
       },
                        ]
                    },

























                ]
            },












        ]





    });
    return _FloatPanel_MerchantDiscountLoyaltySetting;



}







var globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode;
var globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountCode;
var globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate="No";
var globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus="Active";
var globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountEndDate="1983-02-19";
function FloatPanel_MerchantDiscountLoyaltySettingShow(MembershipCardCode,DiscountCode) {

    Ext.Viewport.remove(_FloatPanel_MerchantDiscountLoyaltySetting);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantDiscountLoyaltySetting());
    this.overlay.show();
    isFloatPanel_MerchantDiscountLoyaltySettingOpen = 'Y';    
    globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode=MembershipCardCode;
    globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountCode=DiscountCode;
    globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage="ExistingImage";
    FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignLoadByEnterpriseAccNoMembershipCardCode(DiscountCode);
    //FloatPanel_MerchantDiscountLoyaltySetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(DiscountCode);
    FloatPanel_DrawerMenu_MainHide();
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MerchantDiscountLoyaltySetting_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

        FloatPanel_MerchantDiscountLoyaltySetting_UploadImage();
      }
    );
    Ext.getCmp('btnFloatPanel_MerchantDiscountLoyaltySetting_SaveDiscountLoyalty').setHidden(true);
    Ext.getCmp('txtFloatPanel_MerchantDiscountLoyaltySetting_SaveDiscountLoyalty').setHidden(true);
}
function FloatPanel_MerchantDiscountLoyaltySettingShow_AddNew() {

    Ext.Viewport.remove(_FloatPanel_MerchantDiscountLoyaltySetting);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantDiscountLoyaltySetting());
    this.overlay.show();
    isFloatPanel_MerchantDiscountLoyaltySettingOpen = 'Y';
    globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus="Active";
    globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage="NA";
   // FloatPanel_AyohaCardManagement_AddCardHide();
    FloatPanel_DrawerMenu_MainHide();
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MerchantDiscountLoyaltySetting_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

        FloatPanel_MerchantDiscountLoyaltySetting_UploadImage();
      }
    );
    Ext.getCmp('btnFloatPanel_MerchantDiscountLoyaltySetting_EditDiscountLoyalty').setHidden(true);
    Ext.getCmp('txtFloatPanel_MerchantDiscountLoyaltySetting_EditDiscountLoyalty').setHidden(true);
   // FloatPanel_MerchantDiscountLoyaltySetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore('00');
}

function FloatPanel_MerchantDiscountLoyaltySetting_UploadImage() {
    
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage").click();
    });
}


function FloatPanel_MerchantDiscountLoyaltySettingHide() {
   // FloatPanel_MerchantDiscountLoyaltySetting_AddCardHide();
    _FloatPanel_MerchantDiscountLoyaltySetting.hide(); isFloatPanel_MerchantDiscountLoyaltySettingOpen = 'N';
}

function FloatPanel_MerchantDiscountLoyaltySetting_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore(MembershipCardCode) {


    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    
  
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersion');
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        
        var count = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getCount();

    
        if (count > 0) {
            var Store = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore.getAt(0);
            
        }

       

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}






function FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignLoadByEnterpriseAccNoMembershipCardCode(DiscountCode){
   
  
    var task = Ext.create('Ext.util.DelayedTask', function () {
       
        var objn = {
            "EnterpriseAccNo": GetEnterpriseAccNo(),
            "DiscountCode": DiscountCode
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/DiscountCampaign/DiscountCampaignLoadByEnterpriseAccNoDiscountCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                 
                    if (data.total > 0) {
                        var mydate=data.results[0].DiscountEndDate;
                        
                        var mydate2=mydate.replace("12:00:00 AM","");
                       
                       
                        ID = data.results[0].ID;
                    document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting").value=data.results[0].DiscountPercent;
                    document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting_name").value=data.results[0].DiscountName;
                    document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value=mydate2;
                    Ext.getCmp('FloatPanel_MerchantDiscountLoyaltySetting_BackgroundImgCard').setHtml('<img src="'+data.results[0].DiscountImgPath+'" style="width:110%;height:150px;border-radius:10px 10px 10px 10px;" alt="Company Name">');  
                    document.getElementById("inputName-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage").value=data.results[0].DiscountImgName;
                    document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_TermAndConditionTxt").value=data.results[0].DiscountTermAndCondition;
                   // document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value=data.results[0].DiscountEndDate;
                    globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate=data.results[0].isRequireDiscountEndDate;
                    globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus=data.results[0].RowStatus;
                 


if(globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate=="Yes"){
    Ext.getCmp('togglefieldFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo').setValue(true);
    Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo').setHtml('<font size=2 color=black>YES</font>');
}else{
    Ext.getCmp('togglefieldFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo').setValue(false);
    Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RequireYesNo').setHtml('<font size=2 color=black>NO</font>');
}
if(globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus=="Active"){
    Ext.getCmp('togglefieldFloatPanel_MerchantDiscountLoyaltySetting_RowStatus').setValue(true);
    Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RowStatus').setHtml('<font size=2 color=black>YES</font>');
}else{
    Ext.getCmp('togglefieldFloatPanel_MerchantDiscountLoyaltySetting_RowStatus').setValue(false);
    Ext.getCmp('htmlisFloatPanel_MerchantDiscountLoyaltySetting_RowStatus').setHtml('<font size=2 color=black>NO</font>');
}                 





                        LoadingPanelHide();
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        LoadingPanelHide();
                        Ext.Viewport.unmask();

                    }





                }
                else {

                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
               alert(result.responseText.trim());
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }

        });



    });

   
    task.delay(500);
}








function FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate(){

    if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting").value)
    {

    }
    else{
        swalFireFail("Not valid discount value percent!");
        return;
    }

    if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid discount campaign name !");
        return;
    }
   

    if(globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate=="Yes"){
        if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value){
            globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountEndDate=document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value;
        }else{
            swalFireFail("End Date Discount campaign is requred !");
            return;
        }

    }else{
        
        globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountEndDate="1983-02-19";
    }

    if(document.getElementById("inputName-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("Discount campaign image is required!");
        return;
    }


    if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Not Valid term and condition !");
        return; 
    }
   

   





    LoadingPanelShow(getLoadingIcon(), 'Saving....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "DiscountCode":"DC-"+GenerateRandomNo()+"-"+GetEnterpriseAccNo(),
            "DiscountName":document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting_name").value,
            "DiscountImgPath":globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage,
            "DiscountImgName":document.getElementById('inputName-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage').value,
            "DiscountPercent":document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting").value,
            "DiscountTermAndCondition":document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_TermAndConditionTxt").value,
            "RowStatus":globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus,
            "CreatedBy":GetCurrentUserAccountNo(),
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "DiscountType":"Merchant",
            //"MembershipCardCode":globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode,
            "MembershipCardCode":"NA",
           // "DiscountEndDate":document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value,
           "DiscountEndDate":globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountEndDate,
           "DiscountNote":"NA",
            "isRequireDiscountEndDate":globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/DiscountCampaign/DiscountCampaignInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    swalFireSuccess("Save" + " Succesfully!");
                    LoadingPanelHide();
                    FloatPanel_MerchantDiscountLoyaltySettingHide();
                    FloatPanel_MerchantDiscountLoyaltyHide();
                    
                  //  var dc="DC-"+globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode+"-"+GetEnterpriseAccNo();
                  //  MembershipCardCampaingEntitled_InsertUpdate(dc, "Membership Card Discount",0,globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode);



                }
                else {

                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }

        });



    });

   
    task.delay(500);
}

function FloatPanel_MerchantDiscountLoyaltySetting_DiscountCampaignInsertUpdate_Edit(){


    if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting").value)
    {

    }
    else{
        swalFireFail("Not valid discount value percent!");
        return;
    }

    if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting_name").value)
    {

    }
    else{
        swalFireFail("Not valid discount campaign name !");
        return;
    }
   

    if(globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate=="Yes"){
        if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value){
            globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountEndDate=document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value;
        }else{
            swalFireFail("End Date Discount campaign is requred !");
            return;
        }

    }else{
        
        globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountEndDate="1983-02-19";
    }

    if(document.getElementById("inputName-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage").value)
    {

    }
    else{
        swalFireFail("Discount campaign image is required!");
        return;
    }


    if(document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_TermAndConditionTxt").value)
    {

    }
    else{
        swalFireFail("Not Valid term and condition !");
        return; 
    }
   

   
    //document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_TermAndConditionTxt").value=data.results[0].DiscountTermAndCondition;
   // document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountEndDateSetting").value=data.results[0].DiscountEndDate;
    //globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate=data.results[0].isRequireDiscountEndDate;
    //globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus=data.results[0].RowStatus;
 







    LoadingPanelShow(getLoadingIcon(), 'Saving....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "DiscountCode":globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountCode,
            "DiscountName":document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting_name").value,
            "DiscountImgPath":globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage,
            "DiscountImgName":document.getElementById('inputName-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage').value,
            "DiscountPercent":document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_discountSetting").value,
            "DiscountTermAndCondition":document.getElementById("input-FloatPanel_MerchantDiscountLoyaltySetting_TermAndConditionTxt").value,
            "RowStatus":globalFloatPanel_MerchantDiscountLoyaltySetting_RowStatus,
            "CreatedBy":GetCurrentUserAccountNo(),
            "EnterpriseAccNo":GetEnterpriseAccNo(),
            "DiscountType":"Merchant",
            "MembershipCardCode":globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode,
           // "MembershipCardCode":"NA",
            "DiscountEndDate":globalFloatPanel_MerchantDiscountLoyaltySetting_DiscountEndDate,
            "DiscountNote":"NA",
            "isRequireDiscountEndDate":globalFloatPanel_MerchantDiscountLoyaltySetting_isRequireDiscountEndDate
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/DiscountCampaign/DiscountCampaignInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    swalFireSuccess("Save" + " Succesfully!");
                    LoadingPanelHide();
                    FloatPanel_MerchantDiscountLoyaltySettingHide();
                    FloatPanel_MerchantDiscountLoyaltyHide();
                    
                  //  var dc="DC-"+globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode+"-"+GetEnterpriseAccNo();
                  //  MembershipCardCampaingEntitled_InsertUpdate(dc, "Membership Card Discount",0,globalFloatPanel_MerchantDiscountLoyaltySetting_MembershipCardCode);



                }
                else {

                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }

        });



    });

   
    task.delay(500);
}
var globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage="ExistingImage";
function FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    if (FileSize > 4096) {


        swalFireFail("Image size cannot exceeds 4 MB!");
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage = event.target.result;
                    document.getElementById('inputName-FloatPanel_MerchantDiscountLoyaltySetting_UploadedImage').value = fileName;


                    Ext.getCmp('FloatPanel_MerchantDiscountLoyaltySetting_BackgroundImgCard').setHtml('<div ><img src="' + globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage + '"  style="width:110%;height:150px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


                };


            }
            else {
                globalFloatPanel_MerchantDiscountLoyaltySetting_UploadedImage="ExistingImage";
            }
        }
    }
}