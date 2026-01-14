Ext.define('BuskartApp.view.Membership.FloatPanel_Membership_TermAndCondition', {

});




var _FloatPanel_Membership_TermAndCondition;

function FloatPanel_Membership_TermAndCondition() {

    _FloatPanel_Membership_TermAndCondition = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_Membership_TermAndConditionID',
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
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {

                            if (e.direction == "left") {
                                _FloatPanel_Membership_TermAndCondition.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_Membership_TermAndConditionOpen = 'N';
                                RemovePages("FloatPanel_Membership_TermAndConditionHide()");
                            } if (e.direction == "right") {
                                _FloatPanel_Membership_TermAndCondition.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_Membership_TermAndConditionOpen = 'N';
                                RemovePages("FloatPanel_Membership_TermAndConditionHide()");
                            }
                           
                        }
                    });
                }
            },

            items: {
                //zIndex: 40,
                xtype: 'container',
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

                        id: 'containerFloatPanel_Membership_TermAndConditionHeader',
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
                                                 id: 'btnFloatPanel_Membership_TermAndConditionCardBack',
                                                 height: 30,
                                                 width: 35,
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     _FloatPanel_Membership_TermAndCondition.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'left',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     is_FloatPanel_Membership_TermAndConditionOpen = 'N';
                                                     RemovePages("FloatPanel_Membership_TermAndConditionHide()");

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
                                                    xtype:'panel',
                                                    width:5
                                                }

                                               






                               ]

                    },


                  {
                      xtype: 'container',
                      width: '100%',
                      height: 912,
                      // width: 40,

                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                      //hidden: true,

                      id: 'containerFloatPanel_Membership_TermAndConditionBody',
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
               html: '<textarea id="input-FloatPanel_Membership_TermAndCondition_TermAndConditionTxt"  style="border: 1px none white;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:612px;" wrap="hard">'
           },




                                   ]
                               },


                      ]

                  },





               {
                   xtype: 'container',
                   margin: '9 0 0 0',
                   docked: 'bottom',
                   hidden: true,
                   id: 'containerTermStatusDraf',
                   width: '100%',
                   style: {

                       background: 'transparent',

                   },
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [


{
    xtype: 'container',

    style: ' background-color:transparent',
    width: '50%',

    margin: '10 0 0 0',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
         {
             xtype: 'togglefield',
             // text:'NO/YES',
             //    name: 'toggleName',
             margin: '-12 0 0 -10',
             height: 5,
             // width:20,
             id: 'togglefieldFloatPanel_Membership_TermAndCondition_TermsStatus',
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


                         globalTermAndConditionStatus = "CONFIRMED";
                         Ext.getCmp('htmlFloatPanel_Membership_TermAndCondition_DrafFinalise').setHtml('<font size=2 color=white>CONFIRMED</font>');


                         Swal.fire(
'Membership Card Status(CONFIRM)',
'Status CONFIRMED will disable edit function. you no longer able to edit this Term and Condition.',
'warning'
)

                     }


                         // if(newValue == false)
                     else { // else make it false

                         Ext.getCmp('htmlFloatPanel_Membership_TermAndCondition_DrafFinalise').setHtml('<font size=2 color=white>DRAF</font>');
                         //  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHtml('<font size=2 color=white>.</font>');
                         //   Ext.getCmp('htmlisStampRulePopUpText').setHidden(true);
                         globalTermAndConditionStatus = "DRAF";
                     }


                 },


             }


         },
                        {
                            margin: '0 0 0 0',
                            id: 'htmlFloatPanel_Membership_TermAndCondition_DrafFinalise',
                            html: '<font size=2 color=white>DRAF</font>',

                        },

    ]
},


               {
                   xtype: 'button',
                   //  align: 'stretch',

                   ui: 'plain',
                   width: '50%',
                   height: 50,
                   margin: '10 0 0 0',
                   // width: '80%',
                   //style: {
                   //    background: '#FA8072',
                   //},
                   // padding: '10px',
                   //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                   text: '<button class="button3viewloyaltycard">Save</button>',

                   handler: function () {

                       FloatPanel_Membership_TermAndCondition_Save();
                   },


               },

                   ]
               },




        {
            xtype: 'container',
            margin: '9 0 0 0',
            docked: 'bottom',
            id: 'containerTermStatusConfirm',
            width: '100%',
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
    xtype: 'container',
    hidden:true,
    style: ' background-color:transparent',
    width: '100%',

    margin: '10 0 0 0',
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'left'
    },
    items: [

                        {
                            margin: '0 0 0 0',
                            id: 'htmlFloatPanel_Membership_TermAndCondition_FullStatus',
                            html: '<div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:white;"><b>Created By:Dr Izzati Bt Abdul Rahman</b></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:white"><b>Status:CONFIRMED</b></div>',

                        },

    ]
},




            ]
        },

                ]

            },






        });

    return _FloatPanel_Membership_TermAndCondition;
}



function FloatPanel_Membership_TermAndConditionShow() {
    Ext.Viewport.remove(_FloatPanel_Membership_TermAndCondition);
    this.overlay = Ext.Viewport.add(FloatPanel_Membership_TermAndCondition());
    this.overlay.show();
    AddRoutePages("FloatPanel_Membership_TermAndConditionHide()");
    is_FloatPanel_Membership_TermAndConditionOpen = 'Y';
    FloatPanel_Membership_TermAndCondition_Load();
    

}


var is_FloatPanel_Membership_TermAndConditionOpen = 'N';

function FloatPanel_Membership_TermAndConditionHide() {
    if (is_FloatPanel_Membership_TermAndConditionOpen == 'Y') {
        _FloatPanel_Membership_TermAndCondition.hide();
        is_FloatPanel_Membership_TermAndConditionOpen = 'N';
        RemovePages("FloatPanel_Membership_TermAndConditionHide()");
    }

}


function FloatPanel_Membership_TermAndCondition_Load() {


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
                        document.getElementById('input-FloatPanel_Membership_TermAndCondition_TermAndConditionTxt').value = messagetoSend;


                     //   Ext.getCmp('htmlFloatPanel_Membership_TermAndCondition_FullStatus').setHtml('<div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:white;"><b>Created By:' + globalMembershipCardTermsAndConditionCreatedBy + '</b></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px;color:white"><b>Status:' + globalTermAndConditionStatus + ' - ' + globalMembershipCardTermsAndConditionCreatedDate + '</b></div>');


                    } else {
                        document.getElementById('input-FloatPanel_Membership_TermAndCondition_TermAndConditionTxt').value = "\n\n\n\n\n\nMERCHANT NOT SET ANY TERM AND CONDITIONS.";
                    }




                    //var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;
                    //Ext.getCmp('htmlAyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">' + TotalAvg.toFixed(1) + '</div>');


                    //Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalVoter + ' Reviews</div>');


                }
                if (data.total == 0) {
                    document.getElementById('input-FloatPanel_Membership_TermAndCondition_TermAndConditionTxt').value = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n           MERCHANT NOT SET ANY TERM AND CONDITIONS.";

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
