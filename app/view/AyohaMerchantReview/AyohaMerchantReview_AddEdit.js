Ext.define('BuskartApp.view.AyohaMerchantReview.AyohaMerchantReview_AddEdit', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _AyohaMerchantReview_AddEdit;


var isAyohaMerchantReview_AddEditOpen = 'N';

var starCount = 0;









function AyohaMerchantReview_AddEdit() {

    _AyohaMerchantReview_AddEdit =
     Ext.create('Ext.Panel', {
         zIndex:320,
         xtype: 'container',
        // height: '50%',
         width: '95%',
         height: 485,
         //width: 280,
         id: 'LoadingAyohaMerchantReview_AddEditID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
        modal: true,
         //hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         style:ayohaThemeColor_Background(),
         // style: 'border-bottom:1px none;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       //  style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _AyohaMerchantReview_AddEdit.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isAyohaMerchantReview_AddEditOpen = 'N';
                             RemovePages("AyohaMerchantReview_AddEditHide()");
                         } if (e.direction == "right") {
                             _AyohaMerchantReview_AddEdit.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isAyohaMerchantReview_AddEditOpen = 'N';
                             RemovePages("AyohaMerchantReview_AddEditHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             style:ayohaThemeColor_Body(),
            // style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'AyohaMerchantReview_AddEditBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                             // width: 40,
                            style: ' background-color:transparent;',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerAyohaMerchantReview_AddEditHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {
                                                      xtype: 'button',
                                                      id: 'btnAyohaMerchantReview_AddEditBack',
                                                      height: 30,
                                                      margin: '5 0 0 10',
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _AyohaMerchantReview_AddEdit.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isAyohaMerchantReview_AddEditOpen = 'N';
                                                          RemovePages("AyohaMerchantReview_AddEditHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype:'spacer'
                                                  },


                                                   {
                                                       margin: '-8 0 0 0',
                                                       id: 'htmlAyohaMerchantReview_AddEdit_TitleHeaderTxt',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review By</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">Tarmizi Bin Rahim</div>',

                                                       //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                   },

                                            {
                                                xtype: 'button',
                                               
                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 40,
                                                width: 40,
                                                // iconCls: 'list',
                                                id: 'btnAyohaMerchantReview_AddEdit_PicProfile',
                                                html: '<div ><img src="resources/icons/founder.jpg" width="30" height="30" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _AyohaMerchantReview_AddEdit.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                 
                                                    isAyohaMerchantReview_AddEditOpen = "N";
                                                    RemovePages("AyohaMerchantReview_AddEditHide()");
                                                }
                                            },












                                    ]

                         },


                    {
                        margin: '0 0 0 10',
                        id: 'htmlAyohaMerchantReview_AddEdit_ReviewTxt',
                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review</div>',
                        //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                    },
                                                    

               //{
               //    xtype: 'container',
               //    style: 'background-color: white;',
               //    id: 'containerAyohaMerchantReview_AddEditInner',
                  
               //    width: '100%',
               //    layout: {

               //        type: 'vbox',
               //        pack: 'start',
               //        align: 'center'
               //    },
               //    height: 201,
               //    //scrollable: {
               //    //    direction: 'vertical',
               //    //    directionLock: true
               //    //},

               //    items: [
                        




               //    ]


               //},
 //{
 //    xtype: 'panel',
 //    height: 20
 //},




            {
                xtype: 'container',
                width: '100%',
                id: 'containerAyohaMerchantReview_AddEdit_BodyMsg',
                style: ' background-color: transparent',
                height: 261,
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },

                items: [

                     {

                         margin: '10 0 0 0',
                         width: '95%',
                         height: '100%',
                         // height: 20,
                         id: 'htmlAyohaMerchantReview_AddEdit_BodyMsg',
                         html: '<textarea id="input-AyohaMerchantReview_AddEdit_BodyMsg"  placeHolder="Tell the others what you think about this Merchant."  style="border-bottom: 1px solid grey;border-top: 0px; border-right: 0px;border-left: 0px;color:grey;text-align: left;font-family:Century Gothic;font-size:16px;background-color: #f5f5f5;width:100%;height:260px;"    maxlength="1250"  wrap="hard">'
                     },

                ]

            },
  {
      margin: '10 0 0 10',
      id: 'htmlAyohaMerchantReview_AddEdit_RatingTxt',
      html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px"><font size=2 color=red><b>*</b></font>Rating</div>',
      //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
  },

  {
      xtype: 'container',
      width: '100%',
      margin: '2 0 0 10',
      height: 60,
      style: ' background-color:transparent;',
      layout: {
          type: 'hbox',
          pack: 'left',
          align: 'left',
      },
      items: [
          {
              xtype: 'button',
              id: 'btnAyohaMerchantReview_AddEditStar1',
              height: 35,
              width: 35,
              // iconCls: 'list',
              html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
              ui: 'plain',
              handler: function () {
                  starCount = 1;
                  var star1 = Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').getHtml();
                  if (star1 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                      Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                    
                      Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                  } else {
                    //  Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                      Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                  }


              }
          },
            {
                xtype: 'button',
                id: 'btnAyohaMerchantReview_AddEditStar2',
                height: 35,
                width: 35,
                // iconCls: 'list',
                html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                ui: 'plain',
                handler: function () {
                    starCount = 2;
                    var star2 = Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').getHtml();
                    if (star2 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');                     
                      
                        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                    } else {
                        //  Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                       // Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                    }

                }
            },
              {
                  xtype: 'button',
                  id: 'btnAyohaMerchantReview_AddEditStar3',
                  height: 35,
                  width: 35,
                  // iconCls: 'list',
                  html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {

                      starCount = 3;
                      var star3 = Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').getHtml();
                      if (star3 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                          Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                       
                          Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                      } else {
                          //  Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          // Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                         // Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                          Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                      }
                  }
              },
                {
                    xtype: 'button',
                    id: 'btnAyohaMerchantReview_AddEditStar4',
                    height: 35,
                    width: 35,
                    // iconCls: 'list',
                    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                        starCount = 4;
                        var star4 = Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').getHtml();
                        if (star4 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                            Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                           
                            Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                        } else {
                            //  Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            // Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            // Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                           // Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                            Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                        }


                    }
                },
                  {
                      xtype: 'button',
                      id: 'btnAyohaMerchantReview_AddEditStar5',
                      height: 35,
                      width: 35,
                      // iconCls: 'list',
                      html: '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          starCount = 5;
                          var star5 = Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').getHtml();
                          if (star5 == '<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>') {
                              Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
                            

                              Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');

                          } else {
                              //  Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              // Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="25" height="25" alt="Company Name"></div>');
                              Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + starCount + '/5</div>');
                          }

                      }
                  },
                  {
                      margin: '7 0 0 20',
                      id: 'htmlAyohaMerchantReview_AddEdit_RatingCountTxt',                     
                      html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">0/5</div>',
                  }
      ]
  },




                {
                    xtype: 'container',
                    width: '100%',
                    height: 40,
                    margin: '0 0 0 0',
                   // docked: 'bottom',
                    // height:'70%',
                    // width: 40,
                    style: ' background-color:transparent;',
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,
                    // style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    id: 'containerAyohaMerchantReview_AddEditbottom',
                    layout: {
                        type: 'hbox',
                        pack: 'right',
                        align: 'right',
                    },
                    items: [

                        {
                            xtype: 'button',
                           // width: 200,
                            // hidden: true,
                            //  align: 'stretch',

                            ui: 'plain',
                            //  width: '80%',
                            height: 40,
                            margin: '0 0 0 0',
                            id: 'btnAyohaMerchantReview_AddEdit_Delete',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                            html: '<button class="buttonDeleteReview">Delete</button>',

                            handler: function () {
                                //  FloatPanel_AyohaUserRegistration_Save();
                                Swal.fire({
                                    title: 'Are you sure want to delete?',
                                    //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                                    //icon: 'warning',
                                    //showCancelButton: true,
                                    //confirmButtonColor: '#3085d6',
                                    //cancelButtonColor: '#d33',
                                    imageUrl: "resources/icons/attention1.png",
                                    imageWidth: 150,
                                    imageHeight: 150,
                                    showCloseButton: true,
                                  //  showCancelButton: true,
                                    //  confirmButtonColor: '#3085d6',
                                    confirmButtonColor: '#9932cc',
                                    //cancelButtonColor: '#d33',
                                    //cancelButtonText: 'No',
                                    confirmButtonText: 'Yes'
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        AyohaMerchantReview_AddEdit_PostReview_Delete();
                                    }
                                });

                               






                            },
                        },
                        {
                            xtype: 'button',
                           // width: 200,
                            // hidden: true,
                            //  align: 'stretch',

                            ui: 'plain',
                            //  width: '80%',
                            height: 40,
                            margin: '0 0 0 0',
                            id: 'btnAyohaMerchantReview_AddEdit_AddPostReview',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                            html: '<button class="buttonPostReview">Post Review</button>',

                            handler: function () {
                                //  FloatPanel_AyohaUserRegistration_Save();

                                AyohaMerchantReview_AddEdit_PostReview_Add();



                                


                            },


                        },

                           {
                               xtype: 'button',
                               // width: 200,
                               // hidden: true,
                               //  align: 'stretch',

                               ui: 'plain',
                               //  width: '80%',
                               height: 40,
                               margin: '0 0 0 0',
                               id: 'btnAyohaMerchantReview_AddEdit_EditPostReview',
                               // width: '80%',
                               //style: {
                               //    background: '#FA8072',
                               //},
                               // padding: '10px',
                               //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                               html: '<button class="buttonPostReview">Post Review</button>',

                               handler: function () {
                                   //  FloatPanel_AyohaUserRegistration_Save();

                                   AyohaMerchantReview_AddEdit_PostReview_Edit();






                               },


                           },
                    ]
                },



                ]


            },



                



                //{
                //    //width: '100%',
                //    //height: '50%',

                //    xtype: 'container',
                //    width: '100%',
                //    docked: 'bottom',
                //    height:'30%',
                //    //  ui: 'confirm',
                //    style: ' background-color:transparent;',
                //     style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 360px;background-repeat: no-repeat;',
                //    layout: {
                //        type: 'vbox',
                //        pack: 'end',
                //        align: 'center',
                //    },
                //    items: [
                //                    //{
                //                    //    html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //                    //}
                //    ]
                //    //style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                //    // html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //    //handler: function () {

                //    //}
                //},


             ]




         }







     });
    return _AyohaMerchantReview_AddEdit;





}



function AyohaMerchantReview_AddEditShow_Add() {
    AddRoutePages("AyohaMerchantReview_AddEditHide()");
    Ext.Viewport.remove(_AyohaMerchantReview_AddEdit);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview_AddEdit());
    this.overlay.show();
    isAyohaMerchantReview_AddEditOpen = 'Y';


    var AyohaUserPicProfile= AppState.LoginAyohaUser.AyohaUserPicProfile;
    var AyohaUserAccountNames = AppState.LoginAyohaUser.AyohaUserAccountNames;

    Ext.getCmp('htmlAyohaMerchantReview_AddEdit_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review By</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + AyohaUserAccountNames + '</div>');
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_PicProfile').setHtml('<div ><img src="' + AyohaUserPicProfile + '" width="30" height="30" alt="Company Name"></div>');


   
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_Delete').setHidden(true);

    Ext.getCmp('btnAyohaMerchantReview_AddEdit_AddPostReview').setHidden(false);
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_EditPostReview').setHidden(true);

    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    

    
    
}







var globalAyohaMerchantReview_AddEdit_PostReview_ReviewCode;
function AyohaMerchantReview_AddEditShow_Edit(ID) {
if(is_FloatPanel_Membership_MembershipCardSaleDetailOpen=='Y'){
    AyohaMerchantReview_AddEditShow_Edit_FloatPanel_Membership_MembershipCardSaleDetail(ID);
    return;
}



    AddRoutePages("AyohaMerchantReview_AddEditHide()");
    Ext.Viewport.remove(_AyohaMerchantReview_AddEdit);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview_AddEdit());
    this.overlay.show();   
    isAyohaMerchantReview_AddEditOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    var AccountName;
    var Photo;
    var StarReview;
    var ReviewText;
    var ReviewCode;
    var AyohaUserPicProfile;
    var AyohaUserAccountNames;


    if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == 'Y') {
        AccountName = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.findRecord('ID', ID, 0, false, false, true);
        Photo = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.findRecord('ID', ID, 0, false, false, true);
        StarReview = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.findRecord('ID', ID, 0, false, false, true);
        ReviewText = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.findRecord('ID', ID, 0, false, false, true);
        ReviewCode = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.findRecord('ID', ID, 0, false, false, true);
    } else
    {
        AccountName = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
        Photo = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
        StarReview = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
        ReviewText = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
        ReviewCode = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    }


    

    AyohaUserPicProfile = Photo.get('Photo');
    AyohaUserAccountNames = AccountName.get('AccountName');

    Ext.getCmp('htmlAyohaMerchantReview_AddEdit_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review By</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + AyohaUserAccountNames + '</div>');
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_PicProfile').setHtml('<div ><img src="' + AyohaUserPicProfile + '" width="30" height="30" alt="Company Name"></div>');

    var MsgBody=ReviewText.get('ReviewText');
   // .replace(/\n/g, "<br>")
   var str = MsgBody;

var resultMsgBody = str.split('<')[0];

    
    document.getElementById('input-AyohaMerchantReview_AddEdit_BodyMsg').value = resultMsgBody;
    globalAyohaMerchantReview_AddEdit_PostReview_ID = ID;
    globalAyohaMerchantReview_AddEdit_PostReview_ReviewCode = ReviewCode.get('ReviewCode');


    var star1 = StarReview.get('StarReview');
    if (star1 == 1) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 2) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 3) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 4) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 5) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    starCount = star1;
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_Delete').setHidden(false);
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_AddPostReview').setHidden(true);
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_EditPostReview').setHidden(false);




}





function AyohaMerchantReview_AddEditShow_Edit_FloatPanel_Membership_MembershipCardSaleDetail(ID) {
    AddRoutePages("AyohaMerchantReview_AddEditHide()");
    Ext.Viewport.remove(_AyohaMerchantReview_AddEdit);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview_AddEdit());
    this.overlay.show();   
    isAyohaMerchantReview_AddEditOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    var AccountName;
    var Photo;
    var StarReview;
    var ReviewText;
    var ReviewCode;
    var AyohaUserPicProfile;
    var AyohaUserAccountNames;


   
        AccountName = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.findRecord('ID', ID, 0, false, false, true);
        Photo = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.findRecord('ID', ID, 0, false, false, true);
        StarReview = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.findRecord('ID', ID, 0, false, false, true);
        ReviewText = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.findRecord('ID', ID, 0, false, false, true);
        ReviewCode = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.findRecord('ID', ID, 0, false, false, true);
    

    

    AyohaUserPicProfile = Photo.get('Photo');
    AyohaUserAccountNames = AccountName.get('AccountName');

    Ext.getCmp('htmlAyohaMerchantReview_AddEdit_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Review By</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + AyohaUserAccountNames + '</div>');
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_PicProfile').setHtml('<div ><img src="' + AyohaUserPicProfile + '" width="30" height="30" alt="Company Name"></div>');

    var MsgBody=ReviewText.get('ReviewText');
   // .replace(/\n/g, "<br>")
   var str = MsgBody;

var resultMsgBody = str.split('<')[0];

    
    document.getElementById('input-AyohaMerchantReview_AddEdit_BodyMsg').value = resultMsgBody;
    globalAyohaMerchantReview_AddEdit_PostReview_ID = ID;
    globalAyohaMerchantReview_AddEdit_PostReview_ReviewCode = ReviewCode.get('ReviewCode');


    var star1 = StarReview.get('StarReview');
    if (star1 == 1) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 2) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 3) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 4) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    if (star1 == 5) {
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar1').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar2').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar3').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar4').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('btnAyohaMerchantReview_AddEditStar5').setHtml('<div ><img src="resources/icons/star.png" width="25" height="25" alt="Company Name"></div>');
        Ext.getCmp('htmlAyohaMerchantReview_AddEdit_RatingCountTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + star1 + '/5</div>');
    }
    starCount = star1;
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_Delete').setHidden(false);
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_AddPostReview').setHidden(true);
    Ext.getCmp('btnAyohaMerchantReview_AddEdit_EditPostReview').setHidden(false);




}

function AyohaMerchantReview_AddEditHide() {
    if (isAyohaMerchantReview_AddEditOpen == "Y") {
        _AyohaMerchantReview_AddEdit.hide(); isAyohaMerchantReview_AddEditOpen = 'N';
        RemovePages("AyohaMerchantReview_AddEditHide()");
    }
   
}





function AyohaMerchantReview_AddEditSendEmail() {
    AyohaMerchantReview_AddEdit_IsEmailExist();
}






var globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
function AyohaMerchantReview_AddEdit_PostReview_Add() {

    if (starCount == 0) {
        swalFireFail("Rating is Required!");
        return
    }

    if(is_FloatPanel_Membership_MembershipCardSaleDetailOpen=='Y'){
        globalAyohaMerchantReview_ItemCodeReview=globalFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardCode;
        globalEnterpriseAccNo_AyohaMerchantReview=globalFloatPanel_Membership_MembershipCardSaleDetail_EnterpriseAccNo;
    }

        var objn = {
            "ID": 0,
            "ReviewCode": globalEnterpriseAccNo_AyohaMerchantReview + '-' + GenerateRandomNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": globalEnterpriseAccNo_AyohaMerchantReview,
            "StarReview": starCount,
            "ReviewText": document.getElementById('input-AyohaMerchantReview_AddEdit_BodyMsg').value,
            "RowStatusMerchant": "Active",
            "RowStatusAyoha": "Active",
            "ItemCodeReview": globalAyohaMerchantReview_ItemCodeReview
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   AppState.AyohaMerchantReview_AddEdit.RateStarGiven=starCount;
                    swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                    AyohaMerchantReview_AddEditHide();
                    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "Y";


                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });
                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == 'Y') {
                            FloatPanel_AyohaStore_SaleItemDetail_RateAndReview();
                        } else {
                            AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();
                        }

                        
                        Ext.Viewport.unmask();
                    });
                    Ext.Viewport.unmask();
                    task.delay(500);

                }
                else {

                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
            }

        });
 

}




var globalAyohaMerchantReview_AddEdit_PostReview_ID;
function AyohaMerchantReview_AddEdit_PostReview_Edit() {




    if (starCount == 0) {
        swalFireFail("Rating is Required!");
        return
    }


   
        var objn = {
            "ID": globalAyohaMerchantReview_AddEdit_PostReview_ID,
            "ReviewCode": globalAyohaMerchantReview_AddEdit_PostReview_ReviewCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": globalEnterpriseAccNo_AyohaMerchantReview,
            "StarReview": starCount,
            "ReviewText": document.getElementById('input-AyohaMerchantReview_AddEdit_BodyMsg').value,
            "RowStatusMerchant": "Active",
            "RowStatusAyoha": "Active"
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    AppState.AyohaMerchantReview_AddEdit.RateStarGiven=starCount;
                    swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                  
                    AyohaMerchantReview_AddEditHide();
                    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "Y";

                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });
                    var task = Ext.create('Ext.util.DelayedTask', function () {

                        if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == 'Y') {
                            FloatPanel_AyohaStore_SaleItemDetail_RateAndReview();
                        } else {
                            AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();
                        }
                       
                        Ext.Viewport.unmask();
                    });
                    Ext.Viewport.unmask();
                    task.delay(500);

                }
                else {

                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
            }

        });
 

}





function AyohaMerchantReview_AddEdit_PostReview_Delete() {

    if (starCount == 0) {
        swalFireFail("Rating is Required!");
        return
    }

 
        var objn = {
            "ID": globalAyohaMerchantReview_AddEdit_PostReview_ID,
            "ReviewCode": globalAyohaMerchantReview_AddEdit_PostReview_ReviewCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": globalEnterpriseAccNo_AyohaMerchantReview,
            "StarReview": starCount,
            "ReviewText": document.getElementById('input-AyohaMerchantReview_AddEdit_BodyMsg').value,
            "RowStatusMerchant": "Active",
            "RowStatusAyoha": "InActive"
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    AppState.AyohaMerchantReview_AddEdit.RateStarGiven=0;
                    swalFireSuccesDeletePostReview('Post your review/rating delete Successfully!');                  
                    AyohaMerchantReview_AddEditHide();
                    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "Y";
                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });
                    var task = Ext.create('Ext.util.DelayedTask', function () {


                        AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();
                        Ext.Viewport.unmask();
                    });
                    Ext.Viewport.unmask();
                    task.delay(500);


                }
                else {

                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
            }

        });
   

}