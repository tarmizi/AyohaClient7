Ext.define('BuskartApp.view.Dashboard.FloatPanel_DashboardMerchantReward_MembershipEventDetail', {

});




var is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = "N";


var _FloatPanel_DashboardMerchantReward_MembershipEventDetail=null;

function FloatPanel_DashboardMerchantReward_MembershipEventDetailCreateIfNeeded() {
    if (_FloatPanel_DashboardMerchantReward_MembershipEventDetail && !_FloatPanel_DashboardMerchantReward_MembershipEventDetail.destroyed) return;
    _FloatPanel_DashboardMerchantReward_MembershipEventDetail = Ext.create('Ext.Container',


    {
        id: 'FloatPanel_DashboardMerchantReward_MembershipEventDetailID',
        name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
        zIndex: 65,
        floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'hide',
      // closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
            //type: 'slideIn',
            //direction:'down',
            //duration: 1000,
            //easing: 'ease-in'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
            //type: 'slideOut',
            //direction: 'down',
            //duration: 3000,
            //easing: 'ease-in'
        },
        style: ' background-color:white;',    
        // listeners: {
        //     hide: function(cmp){
        //       Ext.Viewport.remove(cmp, true); // true = destroy
        //       _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm = null;
        //     }
        //  } ,      
        listeners: {
 

            // ✅ kalau user tap mask, close macam standard
            beforehide: function () {
              // kalau hide dipanggil bukan dari function kita, block dulu
              // (optional: boleh allow kalau kau nak)
              return true;
            }
          },


            items: [


               {

                   xtype: 'container',
                   width: '100%',
                   docked: 'top',
                   height: ayoha_HeaderHeight(),
                   style:ayohaThemeColor_Header(),

                   id: 'containeFloatPanel_DashboardMerchantReward_MembershipEventDetailHeader',
                  
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
                                            id: 'btnFloatPanel_DashboardMerchantReward_MembershipEventDetailBack',
                                            height: 30,
                                            width: 65,
                                            margin: '0 0 0 10',
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                               
                                                FloatPanel_DashboardMerchantReward_MembershipEventDetailHide(false);
                                            }
                                        },

                                         {
                                             xtype: 'spacer',

                                         },


                                         {
                                             margin: '0 15 0 0',
                                             id: 'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_TitleHeaderTxt',
                                           //  html: '<font size=2 color=black><b>Membership Event Details</b></font>'
                                             html:ayohaTheme_HeaderText('Membership Event Details'),
                                         },

                                         








                          ]

               },


                   {
                       xtype: 'container',
                       id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                       // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                       // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                       style: ' background-color:transparent;',
                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'center'
                       },
                       width: '100%',
                       height: '100%',
                       scrollable: {
                           directionLock: true,
                           indicators: false
                       },
                       items: [

                           
                           {
                               xtype: 'container',
                               id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetailImage',                              
                               style: ' background-color:transparent;',
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                                   align: 'center'
                               },
                               width: '94%',
                               height: 500,
                               items: [
                                
                                    {
                                        margin: '0 0 0 0',
                                        width: '100%',
                                        height: 500,
                                        id: 'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                                        html: '<div class="myContent" style="background-color:white;width:100%;height:400px;">' +
                                                          '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                         '&nbsp;&nbsp;<img src="{EventCoverPhoto}" style="width:{ModifiedWidth}px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                        '<div style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div></div></div><br>',

                                    },
                                   
                               ]
                           },
                           


                           {
                               xtype: 'container',
                               id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetailVoucherDetailHeader',
                               // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                               // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                               style: ' background-color:transparent;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'left'
                               },
                               width: '90%',
                               height: 632,
                               items: [
                                   //{
                                   //    xtype: 'spacer',
                                   //    width:25
                                   //},
                                    {
                                        margin: '0 0 0 10',
                                        width: '100%',
                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                        html: '<div style="color:black;text-align: left;font-size:16px;width:90%;font-weight:bold">Details</div>'
                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                    },
                                    {

                                        margin: '2 0 0 10',
                                        width: '100%',
                                        height: 612,
                                        //id: 'htmlAnimatedIntervalValue',
                                        html: '<textarea id="input-FloatPanel_DashboardMerchantReward_MembershipEventDetailTextArea"  style="border: 1px none white;color:black;text-align: left;font-size:12px;background-color: transparent;width:95%;height:612px;" wrap="hard">'
                                    },
                               ]
                           },


     

                       ]
                   },



                      {

                          xtype: 'container',
                          width: '100%',
                          docked: 'bottom',
                          height: 50,
                        //  hidden: true,
                          // width: 40,

                          //  title: '<font size="3" color="white">Live Tracking Map</font>',
                          //hidden: true,

                          id: 'containeFloatPanel_DashboardMerchantReward_MembershipEventDetailReedemVoucerBottom',
                          //    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                          style: 'background-color:transparent;border-top:1px solid #DCDCDC',

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

                                         xtype: 'container',
                                         width: '50%',
                                         height: 50,
                                         margin: '0 0 0 0',
                                        // name: 'containeFloatPanel_DashboardMerchantReward_MembershipEventDetailRedeemVoucher',
                                         style: 'background-color:transparent;',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         items: [

                                            {
                                                width: '100%',
                                                height: 50,
                                                id: 'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend',
                                                html: '<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div>'
                                            }

                                         ]
                                     },



                                     {
                                         xtype: 'container',
                                         width: '50%',
                                         height: 50,
                                         margin: '0 0 0 0',
                                         style: 'background-color:transparent;',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         items: [

                                             {
                                                 width: '100%',
                                                 height: 50,
                                                 id:'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested',
                                                 html: '<div style="width:100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div>'
                                             }

                                         ]
                                     }



                                 ]

                      },

                    ]






    });


}



// function FloatPanel_DashboardMerchantReward_MembershipEventDetail() {

  

//     return _FloatPanel_DashboardMerchantReward_MembershipEventDetail;
// }














var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID;
var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode;
var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo;
var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate;
var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ModifiedWidth;
//function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(EnterpriseLogo, EnterpriseName, EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID) {
   
   
   
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ModifiedWidth = parseInt(window.innerWidth) - 24;
   
    // AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");
    // Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipEventDetail);
    // this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipEventDetail());
    // this.overlay.show();
   // AddRoutePages(_FloatPanel_DashboardMerchantReward_MembershipEventDetail, "is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen");
  


   FloatPanel_DashboardMerchantReward_MembershipEventDetailCreateIfNeeded();


   _FloatPanel_DashboardMerchantReward_MembershipEventDetail.show();
   // ✅ push browser back (ikut style kau)
   if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
     AyohaBrowserBack.push('FloatPanel_DashboardMerchantReward_MembershipEventDetail', function () {
    
        FloatPanel_DashboardMerchantReward_MembershipEventDetailHide(true);
     });
   }






   






    is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'Y';
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID = ID;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode = EventCode;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate = EventLocationCoordinate;
    

  //  alert(EnterpriseLogo);
    if (EventLocationCoordinate != "NA") {
      



        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml(
            '<div style="background:#fff;width:100%;height:370px;box-sizing:border-box;padding:12px;">' +
          
              // HEADER (logo + enterprise name)
              '<div style="display:flex;align-items:center;gap:10px;padding:4px 2px 10px 2px;">' +
                '<img src="' + EnterpriseLogo + '" style="width:34px;height:34px;border-radius:50%;object-fit:cover;display:block;">' +
                '<div style="font-family:Arial,sans-serif;font-size:16px;font-weight:700;color:#111;line-height:18px;">' + EnterpriseName + '</div>' +
              '</div>' +
          
              // COVER PHOTO
              '<div style="width:100%;border-radius:12px;overflow:hidden;">' +
                //'<img src="' + EventCoverPhoto + '" style="width:100%;height:200px;object-fit:cover;display:block;">' +
                '<img src="' + EventCoverPhoto + '"  style="width:' + globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ModifiedWidth + 'px;height:300px;"></img>' +
              '</div>' +
          
              // CONTENT ROW (date left, details right)
              '<div style="display:flex;gap:12px;align-items:flex-start;margin-top:12px;">' +
          
                // DATE BOX
                '<div style="width:78px;min-width:78px;text-align:center;">' +
                  '<div style="font-family:Arial,sans-serif;font-size:48px;font-weight:800;color:#111;line-height:46px;">' + EventStartDate_Day + '</div>' +
                  '<div style="font-family:Arial,sans-serif;font-size:16px;font-weight:800;color:#e00000;letter-spacing:1px;margin-top:2px;">' + EventStartDate_Month + '</div>' +
                '</div>' +
          
                // DETAILS
                '<div style="flex:1;min-width:0;">' +
                  '<div style="font-family:Arial,sans-serif;font-size:18px;font-weight:800;color:#111;line-height:22px;word-break:break-word;">' + EventName + '</div>' +
          
                  '<div style="font-family:Arial,sans-serif;font-size:12px;color:#333;margin-top:6px;line-height:16px;word-break:break-word;">' +
                    EventStartDate_Day + ' ' + EventStartDate_Month + ', ' + EventStartTime + ' - ' +
                    EventEndDate_Day + ' ' + EventEndDate_Month + ', ' + EventEndTime + '.' +
                  '</div>' +
          
                  // LOCATION (clickable)
                  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetail_OpenLocation();" ' +
                       'style="display:flex;align-items:center;gap:6px;margin-top:8px;cursor:pointer;">' +
                    '<img src="resources/icons/locationOne.png" style="width:18px;height:18px;display:block;">' +
                    '<div style="font-family:Arial,sans-serif;font-size:12px;color:#1e5eff;text-decoration:underline;line-height:16px;word-break:break-word;">' +
                      EventLocationName + '.' +
                    '</div>' +
                  '</div>' +
          
                '</div>' +
              '</div>' +
          
            '</div>'
          );
          





    } else {
        // Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:370px;">' +
        //              '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName + '</div></div>&nbsp;&nbsp;' +
        //             '&nbsp;&nbsp;<img src="' + EventCoverPhoto + '" style="width:' + ModifiedWidth + 'px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;' +
        //            '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

                   Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml(
                    '<div class="myContent" style="background:#fff;width:100%;height:370px;box-sizing:border-box;padding:12px;">' +
                  
                      // HEADER
                      '<div style="display:flex;align-items:center;gap:10px;margin:0 0 10px 0;">' +
                        '<img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;object-fit:cover;display:block;">' +
                        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#000;font-weight:700;">' + EnterpriseName + '</div>' +
                      '</div>' +
                  
                      // COVER
                      '<div style="width:100%;border-radius:12px;overflow:hidden;">' +
                        //'<img src="' + EventCoverPhoto + '" style="width:100%;height:200px;object-fit:cover;display:block;">' +
                       '<img src="' + EventCoverPhoto + '"  style="width:' + globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ModifiedWidth + 'px;height:300px;"></img>' +
                      '</div>' +
                  
                      // BODY ROW
                      '<div style="display:flex;gap:12px;align-items:flex-start;margin-top:12px;">' +
                  
                        // DATE (LEFT)
                        '<div style="width:90px;min-width:90px;text-align:center;">' +
                          '<div style="font-family:Arial,sans-serif;font-size:40px;color:#000;font-weight:800;line-height:40px;">' + EventStartDate_Day + '</div>' +
                          '<div style="font-family:Arial,sans-serif;font-size:16px;color:red;font-weight:800;margin-top:2px;">' + EventStartDate_Month + '</div>' +
                        '</div>' +
                  
                        // DETAILS (RIGHT)
                        '<div style="flex:1;min-width:0;">' +
                          '<div style="font-family:Arial,sans-serif;font-size:14px;color:#000;font-weight:800;line-height:18px;word-break:break-word;">' +
                            EventName +
                          '</div>' +
                  
                          '<div style="margin-top:6px;font-family:Arial,sans-serif;font-size:11px;color:#000;font-weight:400;line-height:15px;word-break:break-word;">' +
                            EventStartDate_Day + ' ' + EventStartDate_Month + ', ' + EventStartTime + ' - ' +
                            EventEndDate_Day + ' ' + EventEndDate_Month + ', ' + EventEndTime + '.' +
                          '</div>' +
                  
                          '<div style="margin-top:6px;font-family:Arial,sans-serif;font-size:11px;color:blue;font-weight:400;line-height:15px;word-break:break-word;">' +
                            '<u><img src="resources/icons/locationOne.png" style="width:18px;height:18px;margin:0 4px -4px 0;display:inline-block;">' +
                            EventLocationName + '.</u>' +
                          '</div>' +
                        '</div>' +
                  
                      '</div>' +
                    '</div>'
                  );
                  
    }

   
   







    var regex = /<br\s*[\/]?>/gi;
    var ModifiedEventDescription = EventDescription.replace(regex, "\n");

    document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipEventDetailTextArea').value = ModifiedEventDescription;

    FloatPanel_MerchantReward_MembershipEventDetail_LoadBySubscriberAccNoAndEventCodeStore(EventCode);

}

function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade(CampaignCode,EnterpriseLogo,EnterpriseName){
   
   // alert(CampaignCode);
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
           
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EventCode": CampaignCode,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNoAndEventCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                 // alert(data.results[0].EventName)

                 var ModifiedWidth = parseInt(window.innerWidth) - 24;

                  FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade_Show(EnterpriseLogo,EnterpriseName, data.results[0].EventCoverPhoto, data.results[0].EventName, data.results[0].EventStartDate_Day, data.results[0].EventStartDate_Month, data.results[0].EventStartTime, data.results[0].EventEndDate_Day, data.results[0].EventEndDate_Month, data.results[0].EventEndTime, data.results[0].EventLocationName, ModifiedWidth, data.results[0].EventDescription, data.results[0].EventLocationCoordinate, data.results[0].EventUrlTicket, data.results[0].EventCode, data.results[0].EnterpriseAccNo, data.results[0].RespondStatus,data.results[0].ID);

                //  FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(EnterpriseLogo, EnterpriseName, EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID);
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);
   
   
   
   

   
   
   
   
   
   
   
   
   
  
}


function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade_Show(EnterpriseLogo,EnterpriseName ,EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID){

    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");
    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipEventDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipEventDetail());
    this.overlay.show();
   // AddRoutePages(_FloatPanel_DashboardMerchantReward_MembershipEventDetail, "is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen");
  // alert(EnterpriseLogo);
   Ext.getCmp('FloatPanel_DashboardMerchantReward_MembershipEventDetailID').setZIndex(330);
    is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'Y';
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID = ID;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode = EventCode;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate = EventLocationCoordinate;
    
    if (EventLocationCoordinate != "NA") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:370px;">' +
                     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName + '</div></div>&nbsp;&nbsp;' +
                    '&nbsp;&nbsp;<img src="' + EventCoverPhoto + '" style="width:' + ModifiedWidth + 'px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;' +
                   '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:blue;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;" onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetail_OpenLocation();"><u><img src="resources/icons/locationOne.png" style="width:22px;height:22px;margin:3px 0px 0px 0px;">' + EventLocationName + '.</u></div></div></div>');

        //'<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-20px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend()"><img src="resources/icons/iwillattend.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested()"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>' +
        // '</div>');
    } else {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:370px;">' +
                     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName + '</div></div>&nbsp;&nbsp;' +
                    '&nbsp;&nbsp;<img src="' + EventCoverPhoto + '" style="width:' + ModifiedWidth + 'px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;' +
                   '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

        //'<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-20px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend()"><img src="resources/icons/iwillattend.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested()"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>' +
        // '</div>');
    }

   
   


    if (RespondStatus == "IwillAttend") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>I Will Attend</u></div></div>');
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div>');
    }
    if (RespondStatus == "Interested") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div>');
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>Interested</u></div></div>');

    }






    var regex = /<br\s*[\/]?>/gi;
    var ModifiedEventDescription = EventDescription.replace(regex, "\n");

    document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipEventDetailTextArea').value = ModifiedEventDescription;
    LoadingPanelHide();
}

function FloatPanel_DashboardMerchantReward_MembershipEventDetailHide(fromBack,animCfg) {





    if (is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_DashboardMerchantReward_MembershipEventDetail.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_DashboardMerchantReward_MembershipEventDetail.hide();
          }
          is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'N';
         
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_DashboardMerchantReward_MembershipEventDetail');
          }
    }

}


function FloatPanel_DashboardMerchantReward_MembershipEventDetail_OpenLocation() {



    var Coordinate = globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate.split(",");
    PlaceMarkerlat = Coordinate[0];
    PlaceMarkerlng = Coordinate[1];





    if (PlaceMarkerlat) {
        if (PlaceMarkerlng) {
            window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system'); return false;
        } else {

            swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
        }
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
    }
}



function FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(RespondStatus) {








    if(is_prompt_setMessage_NotYetMembershipMessage()){
        return
         }
//alert(globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID)


   // LoadingPanelShow(getLoadingIcon(), 'Save Respond....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID": globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID,
            "EventCode": globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "RespondStatus": RespondStatus,
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "Noted": "NA",
            "EnterpriseAccNo": globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo,
        };
        console.log(objn);
       Ext.Ajax.request({

            // type: "POST",

            // url: GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEventRespondInsertUpdate',

            // dataType: "json",
            // data: JSON.stringify(objn),
            // headers: {
            //     "Content-Type": "application/json; charset=utf-8"
            // },



            url: GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEventRespondInsertUpdate',
            method: 'POST',                 // ✅ betul
            jsonData: objn,                 // ✅ auto encode JSON + set body
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_DashboardMerchantReward_MembershipEventDetailHide(false);
                 //   swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/respondEvent.png", "Your Respond Has Been Submitted!", "Purple", "Purple");
                    AyohaAppMessageBox('Your Respond Has Been Submitted!')
                   // FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                   // SuccessCheckinController_Dashboard_LoadEventPerks();
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                  //  LoadingPanelHide();
                }
                Ext.Viewport.unmask();
               // LoadingPanelHide();

            },

            failure: function (result, request) {
               swalFireFail("Fail!");
               // Ext.Viewport.unmask();
               // LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);
}











function FloatPanel_MerchantReward_MembershipEventDetail_LoadBySubscriberAccNoAndEventCodeStore(EventCode) {
  _DataStore_AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
  _DataStore_AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStore.getProxy().setExtraParam('EventCode', EventCode);

  _DataStore_AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNoAndEventCode');
 
 
 
 
 
 
 _DataStore_AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStore.load({
      callback: function (records, operation, success) {
          if (success && records.length > 0) {
          
            var record = records[0];
          //  console.log("Data Loaded:", record.data);

            // --- A. DATA PARSING (Guna Helper) ---
            var RespondStatus   = record.get('RespondStatus');
       //  alert(RespondStatus)   
    if (RespondStatus == "IwillAttend") {
      Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>I Will Attend</u></div></div>');
      Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div>');
  }
  if (RespondStatus == "Interested") {
      Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div>');
      Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>Interested</u></div></div>');

  }

             
          } else {
             
            //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
            
          }
      }
  });
 
 
 
 }