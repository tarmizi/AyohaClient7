Ext.define('BuskartApp.view.Membership.FloatPanel_MembershipCardManagement_TermAndCondition', {

});




var _FloatPanel_MembershipCardManagement_TermAndCondition;

function FloatPanel_MembershipCardManagement_TermAndCondition() {

    _FloatPanel_MembershipCardManagement_TermAndCondition = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_MembershipCardManagement_TermAndConditionID',
            // xtype: 'panel',
            //zIndex: 210,
            // xtype: 'panel',
            zIndex: 330,
            xtype: 'container',
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: true,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
            },

           style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
           // style: ' background-color: white;',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {

                            if (e.direction == "left") {
                                _FloatPanel_MembershipCardManagement_TermAndCondition.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';
                                RemovePages("FloatPanel_MembershipCardManagement_TermAndConditionHide()");
                            } if (e.direction == "right") {
                                _FloatPanel_MembershipCardManagement_TermAndCondition.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';
                                RemovePages("FloatPanel_MembershipCardManagement_TermAndConditionHide()");
                            }
                          
                        }
                    });
                }
            },

            items: {
                //zIndex: 40,
                xtype: 'container',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: white;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators: false
                },



                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_MembershipCardManagement_TermAndConditionHeader',
                        style: {
                            // background: '#D25959',
                            background: 'transparent',
                            // border: '2px'
                        },
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
                                                 id: 'btnFloatPanel_MembershipCardManagement_TermAndConditionCardBack',
                                                 height: 30,
                                                 width: 35,
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     _FloatPanel_MembershipCardManagement_TermAndCondition.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'left',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';
                                                     RemovePages("FloatPanel_MembershipCardManagement_TermAndConditionHide()");

                                                 }
                                             },

                                              {
                                                  xtype: 'spacer',

                                              },



                                                {
                                                    margin: '0 0 0 0',
                                                    html: '<font size=2 color=black><b>Terms And Condition</b></font>'
                                                },

                                                {
                                                    xtype: 'panel',
                                                    width:10,
                                                }

                                                 //{
                                                 //    xtype: 'button',
                                                 //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                 //    height: 30,
                                                 //    width: 35,
                                                 //    // iconCls: 'list',
                                                 //    html: '<div ><img src="resources/icons/AddNewMembershipCardWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                 //    ui: 'plain',
                                                 //    handler: function () {
                                                 //        _FloatPanel_MembershipCardManagement_TermAndCondition.hide(Ext.fx.Animation({
                                                 //            type: 'slideOut',
                                                 //            direction: 'right',
                                                 //            easing: 'cubic-bezier(.7,0,.7,1)',
                                                 //            duration: 250

                                                 //        }));
                                                 //        is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';
                                                 //    }
                                                 //},







                               ]

                    },


                  {
                      xtype: 'container',
                      width: '100%',
                      height: 912,
                      // width: 40,

                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                      //hidden: true,

                      id: 'containerFloatPanel_MembershipCardManagement_TermAndConditionBody',
                      style: {
                          // background: '#D25959',
                          background: 'white',
                          // border: '2px'
                      },
                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'center',
                      },

                      items: [
                               {
                                   xtype: 'container',
                                   style: ' background-color:transparent',
                                   width: '100%',
                                   height: 612,
                                   margin: '13 0 0 0',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'
                                   },

                                   items: [


                                         //{
                                         //    margin: '3 0 0 0',

                                         //    html: '<font size=2 color=white>Membership Card  Terms And Conditions</font>',

                                         //},

           {

               margin: '-2 0 0 0',
               width: '98%',
               height: 612,
               //id: 'htmlAnimatedIntervalValue',
               html: '<textarea id="input-FloatPanel_MembershipCardManagement_TermAndCondition_TermAndConditionTxt"  style="border: 1px none white;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:612px;" wrap="hard">'
           },




                                   ]
                               },


                      ]

                  },





               




        {
            xtype: 'container',
            margin: '8 0 0 0',
            docked: 'bottom',
            id: 'containerTermStatusConfirm',
            height: 50,
            width: '100%',
            style: {

                background: 'white',

            },
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'

            },
            items: [


{
    xtype: 'container',

    style: ' background-color:white',
    width: '100%',
    height:50,

    margin: '0 0 0 0',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items: [

                        {
                            margin: '-10 0 0 0',
                            id: 'htmlFloatPanel_MembershipCardManagement_TermAndCondition_FullStatus',
                            html: '<div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;color:white;font-size:12px;"><i>By tap <b>I Agree</b>  button below you are agreed to the term and condition of this membership card.</i></div>',

                        },

                        {
                            xtype: 'container',
                            style: ' background-color:transparent',
                            name:'nameContainerFloatPanel_MembershipCardManagement_TermAndConditionAgree',
                            width: '100%',
                            height: 50,

                            margin: '0 0 0 0',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [



                                 {

                                     //html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 20px 20px;width:200px;height:40px;font-size: 14px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:8px 0px 0px -30px;">I Agree</div></div>'

                                     html: '<div  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:200px;height:40px;font-size: 14px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:8px 0px 0px -30px;">I Agree</div></div>'


                                 },
                                        {

                                            html: '<img src="resources/icons/shakehandwhite.png"  style="width: 30px; height: 30px;   margin:10px 0px 0px -80px;">'



                                        },






                                   //{
                                   //    xtype: 'button',
                                   //    // width: 200,
                                   //    // hidden: true,
                                   //    //  align: 'stretch',

                                   //    ui: 'plain',
                                   //    //  width: '80%',
                                   //    height: 45,
                                   //    margin: '5 0 0 -30',
                                   //    id: 'btnFloatPanel_MembershipCardManagement_TermAndCondition_Confirm',
                                   //    // width: '80%',
                                   //    //style: {
                                   //    //    background: '#FA8072',
                                   //    //},
                                   //    // padding: '10px',
                                   //    //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                                   //    html: '<button class="buttonConfirmMembershipCard">Confirm</button>',

                                   //    handler: function () {






                                   //    },
                                   //},

                                   //    {

                                   //        margin: '0 0 0 0',
                                   //        id: 'htmlFloatPanel_MembershipCardManagement_TermAndCondition_ConfirmIcon',
                                   //        // zIndex:200,
                                   //        html: '<img src="resources/icons/shakeHand01.png"  style="width:28px;height:28px;" alt="Company Name" >',


                                   //    },
                            ]
                        },
                     

                     

    ]
},




            ]
        },

                ]

            },






        });

    return _FloatPanel_MembershipCardManagement_TermAndCondition;
}


var globalTermAndConditionStatus;
function FloatPanel_MembershipCardManagement_TermAndConditionShow() {
    Ext.Viewport.remove(_FloatPanel_MembershipCardManagement_TermAndCondition);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardManagement_TermAndCondition());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardManagement_TermAndConditionHide()");
    FloatPanel_MembershipCardManagement_TermAndCondition_Load();



    is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'Y';

    var containerView = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MembershipCardManagement_TermAndConditionAgree]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          stagingMembeshipCardAgree();
         
      }
    );


}


var is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';

function FloatPanel_MembershipCardManagement_TermAndConditionHide() {
    if (is_FloatPanel_MembershipCardManagement_TermAndConditionOpen == 'Y') {
        _FloatPanel_MembershipCardManagement_TermAndCondition.hide();
        is_FloatPanel_MembershipCardManagement_TermAndConditionOpen = 'N';
        RemovePages("FloatPanel_MembershipCardManagement_TermAndConditionHide()");
    }

}




function FloatPanel_MembershipCardManagement_TermAndCondition_Load() {


    console.log(_FloatPanel_MembershipCardList_Upgrade_MembershipCode);
    console.log(_FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);
   
    var objn = {
        "MembershipCardCode": _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
        "EnterpriseAccNo": _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo
    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/MembershipCardTerms/MembershipCardTermsLoadByMembershipCardCodePostStyle',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                //var newData = JSON.parse(JSON.stringify(result.results.Email))
                //console.log(result.results.Email);
                //  //data.results[0];
                // console.log(data.total);
                if (data.total > 0) {
                    var TermAndCondition = data.results[0].TermAndConditions;


                    if (TermAndCondition) {
                        var messagetoSend = TermAndCondition.replace(/\n/g, "\n")
                        document.getElementById('input-FloatPanel_MembershipCardManagement_TermAndCondition_TermAndConditionTxt').value = messagetoSend;

                    } else {
                        document.getElementById('input-FloatPanel_MembershipCardManagement_TermAndCondition_TermAndConditionTxt').value = "\n\n\n\n\n\nMERCHANT NOT SET ANY TERM AND CONDITIONS.";
                    }
                   
                 
                 

                    //var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;
                    //Ext.getCmp('htmlAyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">' + TotalAvg.toFixed(1) + '</div>');


                    //Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalVoter + ' Reviews</div>');

                 
                }
                if (data.total == 0) {
                    document.getElementById('input-FloatPanel_MembershipCardManagement_TermAndCondition_TermAndConditionTxt').value = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n           MERCHANT NOT SET ANY TERM AND CONDITIONS.";
                
                }





            }
            else {


                Ext.Viewport.unmask();
            }


        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
        }

    });

}



function stagingMembeshipCardAgree() {
    MembershipCardAgree();
}



function MembershipCardAgree() {
    var obj = {
        "CampaignEnterpriseAccNo": _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        //"MembershipByMethod": "AyohaStoreRequest",
        "MembershipByMethod": GetMembershipByMethod(),        
        "ReferalSubscriberAccNo": "NA",
        "MembershipCardCode": _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
        "CreatedBy": GetCurrentUserLogin(),

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsInsert',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                FloatPanel_MembershipCardManagement_TermAndConditionHide();
                swalFireHoorayMessage("Membership Process Successfully!,Please Check your Card in Membership Card List.");
                FloatPanel_MembershipCardList_UpgradeHide();
                FloatPanel_RewardStoreMembershipCardHide();
                Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore();
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

                //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();
               
                if (isFloatPanel_AyohaStoreOpen == "Y") {
                    FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
                }
               
               
            }
            else {

                swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}