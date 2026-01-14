
Ext.define('BuskartApp.view.CheckOut.FloatPanel_CheckOut_ConfirmedCheckOut', {

});



var _FloatPanel_CheckOut_ConfirmedCheckOut;


var isFloatPanel_CheckOut_ConfirmedCheckOutOpen = 'N';




function FloatPanel_CheckOut_ConfirmedCheckOut() {

    _FloatPanel_CheckOut_ConfirmedCheckOut =
    Ext.create('Ext.Container', {
        zIndex: 100,
        xtype: 'container',
        height: '100%', // This is the FULL-SCREEN BACKDROP
        width: '100%',  // This is the FULL-SCREEN BACKDROP
        id: 'FloatPanel_CheckOut_ConfirmedCheckOutID',
        name: 'nameFloatPanel_CheckOut_ConfirmedCheckOut',
        styleHtmlContent: true,
        centered: true,
        
        // --- START: Key Changes for Backdrop ---
        modal: false, // Use Sencha's modal handling
        hideOnMaskTap: false, // Prevent closing on tap
        style: 'background-color:rgba(0, 0, 0, 0.5);', // Style for the BACKDROP
        layout: {
            type: 'vbox',
            pack: 'center',  // Center the white box vertically
            align: 'center'  // Center the white box horizontally
        },
        // --- END: Key Changes for Backdrop ---

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
        
        items: [
            // --- NEW: This is the white modal box ---
            {
                xtype: 'container',
               // height:350,
                width: '100%',         // The white box will be 90% of the screen
                maxWidth: '400px',    // ...but no wider than 380px
                id: 'FloatPanel_CheckOut_ConfirmedCheckOutListContentID', // Your original content ID
                
                // --- Style for the WHITE modal box ---
                style: 'background-color:white; border-radius:16px; overflow:visible !important; padding-top: 50px; box-shadow: 0 5px 20px rgba(0,0,0,0.2);',

                layout: {
                    type: 'vbox',
                    align: 'center' // Center all items *inside* the white box
                },

                // --- All your original items go INSIDE this new container ---
                items: [
                    {
                        xtype: 'container',
                        cls: 'confirmation-modal-head', // New class for the head
                        width: '100%', // Ensure it's full width for icon centering
                        items: [
                            // The icon for the confirmed page (coins)
                            { xtype: 'component', html: '<div class="confirmation-modal-icon"><img src="resources/icons/checkmark.gif" alt="Coins" class="successMark-icon"></div>' },
                        ]
                    },
                    {
                        xtype: 'component',
                       // cls: 'confirmation-title-text', // New class for the main title
                        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 22px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Check-Out Successfull !</div>',

                        margin: '5 0 0 0', // Adjusted margin
                    },
                    {
                        xtype: 'component',
                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:12px;color:#6B7280;">See You Again at Ayu Kuala Sepetang</div>',
                        margin: '5 0 0 0', // Space above points display
                    },
                    {
                        xtype: 'container',
                        width: '90%', // Ensure it's full width for icon centering
                        height:25,
                        style: 'background-color:transparent;',
                    },
                    {
                        xtype: 'container',
                        width: '90%', // Ensure it's full width for icon centering
                        height:1,
                        style: 'background-color:#E5E7EB;',
                    },
                    {
                        xtype: 'container',
                        width: '90%', // Ensure it's full width for icon centering
                        height:10,
                        style: 'background-color:transparent;',
                    },
                    {
                        xtype: 'component',
                       // cls: 'confirmation-title-text', // New class for the main title
                        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Your Session Summary:</div>',

                        margin: '5 0 0 0', // Adjusted margin
                    },
                    {
                        xtype: 'container',
                        width: '90%', // Ensure it's full width for icon centering
                        height:10,
                        style: 'background-color:transparent;',
                    },
                    {
                        xtype: 'container',
                        width: '90%', // Ensure it's full width for icon centering
                        height:25,
                        style: 'background-color:transparent;',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
           
                        },
                        items:[
                            {
                                xtype: 'component',
                                width: '100%', // Ensure it's full width for icon centering
                                height:25,
                               // cls: 'confirmation-title-text', // New class for the main title
                               id:'htmlFloatPanel_CheckOut_ConfirmedCheckOut_PointEarned',
                                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size:26px;font-weight:bold;color:purple;margin:0px 0px 0px 0px">+ 10 A.pts Earned</div>',
        
                                margin: '5 0 0 0', // Adjusted margin
                            },
                        //     {  width: '1%', // Ensure it's full width for icon centering
                        //     height:25,

                        //    // margin: '0 0 0 -60', // Adjusted margin
                        //         html: '<img  src="resources/icons/AyohaTabCoinBag.png"  style="width:45px;height:45px;margin:0px 0px 0px -50px" alt="Company Name">'
                        //     }
        
                        ]
                    },
                    {
                        xtype: 'container',
                        width: '90%', // Ensure it's full width for icon centering
                        height:25,
                        style: 'background-color:transparent;',
                    },
                    {
                        xtype: 'container',
                        width: '90%', // Ensure it's full width for icon centering
                        height:1,
                        style: 'background-color:#E5E7EB;',
                    },
                    
                    {
                        xtype: 'container',
                        width: '100%', // Ensure it's full width for icon centering
                       // height:70,
                        height:110,
                       hidden:true,
                      id:'containerFloatPanel_CheckOut_ConfirmedCheckOut_Rating',
                      style: 'background-color:transparent;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
           
                        },
                        items:[
                            {
                                xtype: 'container',
                                width: '100%', // Ensure it's full width for icon centering
                                height:10,
                                style: 'background-color:transparent;',
                            },
                            {
                                xtype: 'container',
                                width: '100%',
                                margin: '0 0 0 0',
                                height: 40,
                                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                style: 'background-color:transparent;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'
            
                                },
                                items:[
                                    {
                                        margin: '0 0 0 0',
                                        width: '100%',
                                        
                                        id: 'htmlFloatPanel_CheckOut_ConfirmedCheckOut_ReviewAndRateCount',
                                      //  html: '<div style="color:black;text-align: center;font-family:Arial, sans-serif;font-size:18px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',
                                         html:'<div style="width100%;text-align:center;background-color: transparent;font-family:Century Gothic;font-size:26px;color:purple;font-weight:bold;overflow:hidden;">0.0</div>',
                                    },
                                ]
                            },
                            {
                                xtype: 'container',
                                width: '100%',
                                margin: '0 0 0 0',
                                height: 30,
                                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                               // style: "background-color: transparent;",
                               style: 'background-color:transparent;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'
            
                                },
                                items: [
            
                                    {
                                        id: 'htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1',
                                        height: 20,
                                        width: 20,
                                        html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
                                    },
                                    {
                                        xtype:'spacer',
                                        width:3
                                        },
            {
            id: 'htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2',
            height: 20,
            width: 20,
            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
            },
            {
            xtype:'spacer',
            width:3
            },
            {
            id: 'htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3',
            height: 20,
            width: 20,
            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',            },
            {
                xtype:'spacer',
                width:3
                },
            {
            id: 'htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4',
            height: 20,
            width: 20,
            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
            },
            {
                xtype:'spacer',
                width:3
                },
            {
            id: 'htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5',
            height: 20,
            width: 20,
            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
            
            },
                                ]
                            },
                            // {
                            //     xtype: 'container',
                            //     width: '100%', // Ensure it's full width for icon centering
                            //     height:5,
                            //     style: 'background-color:transparent;',
                            // },
                            {
                                xtype: 'container',
                                width: '100%', // Ensure it's full width for icon centering
                                height:30,
                                style: 'background-color:transparent;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'
                   
                                },
                                items:[
                                    {
                                        //  xtype: 'component',
                                         // cls: 'confirmation-title-text', // New class for the main title
                                          html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Thank you for your rating !</div>',
                                        //  height: 10,
                                          margin: '0 0 0 0', // Adjusted margin
                                      },
                                ]
                            },
                          
        
                        ]
                    },


                    // {
                    //     xtype: 'container', // Spacer container
                    //     height: 40, // Space below progress bar before buttons
                    // },
                      
                   {
                    xtype: 'container',
                    width: '100%', // Ensure it's full width for icon centering
                 // height:130,
                   height:100,
                    style: 'background-color:transparent;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
       
                    },
                    items:[
                           {
                        xtype: 'container', // Spacer container
                        height: 10, // Space below progress bar before buttons
                    },
                        {
                            width: '80%', // 80% width *of the white box*
                            height: 50,
                            html: '<div class="ayohaMActions"><button onclick="FloatPanel_CheckOut_ConfirmedCheckOutHide()" class="ayohaCheckOutBtn">Done</button></div>',
                        },
                    ]
                   },

                 
                   
                ]
                // --- End of original items ---
            }
            // --- End of new white modal box ---
        ]
    });

    return _FloatPanel_CheckOut_ConfirmedCheckOut;
}











  function FloatPanel_CheckOut_ConfirmedCheckOutShow(){
    // (Re)create + show the modal
    Ext.Viewport.remove(_FloatPanel_CheckOut_ConfirmedCheckOut);
    const overlay = Ext.Viewport.add(FloatPanel_CheckOut_ConfirmedCheckOut());
    overlay.show();
  
    AddRoutePages("FloatPanel_CheckOut_ConfirmedCheckOutHide()");
    isFloatPanel_CheckOut_ConfirmedCheckOutOpen = 'Y';
    //AyohaScrollToTop_AutoFind('MainMaincontainerDashbord');



    var star=AppState.AyohaMerchantReview_AddEdit.RateStarGiven;

    if(star>0){
        Ext.getCmp('containerFloatPanel_CheckOut_ConfirmedCheckOut_Rating').setHidden(false);
        FloatPanel_CheckOut_ConfirmedCheckOut_CalculateRating();
    }

    // var containerViewnameFloatPanel_CheckOut_ConfirmedCheckOut = Ext.ComponentQuery.query('container[name=nameFloatPanel_CheckOut_ConfirmedCheckOut]')[0];
    // var containerViewElnameFloatPanel_CheckOut_ConfirmedCheckOut = containerViewnameFloatPanel_CheckOut_ConfirmedCheckOut.element;
    // containerViewElnameFloatPanel_CheckOut_ConfirmedCheckOut.on('tap',
    //   function (event, node, options, eOpts) {
    //     _FloatPanel_CheckOut_ConfirmedCheckOut.hide(); isFloatPanel_CheckOut_ConfirmedCheckOutOpen = 'N';
    //    // Dashboard_LoadLastCheckIn();
    //     RemovePages("FloatPanel_CheckOut_ConfirmedCheckOutHide()");
    //    // FloatPanel_CheckOut_ConfirmedCheckOut_EnterprisesCheckIn();
    //   }
    // );



  
 
  }
  
  


function FloatPanel_CheckOut_ConfirmedCheckOutHide() {
    // FloatPanel_AyohaMerchantInfo_PointCardLoyaltyProgram_AddCardHide();
 

    if (isFloatPanel_CheckOut_ConfirmedCheckOutOpen == "Y") {
        _FloatPanel_CheckOut_ConfirmedCheckOut.hide(); isFloatPanel_CheckOut_ConfirmedCheckOutOpen = 'N';
       // Dashboard_LoadLastCheckIn();
       // FloatPanelMerchantDetailPage_AyohaStore();
        RemovePages("FloatPanel_CheckOut_ConfirmedCheckOutHide()");
        FloatPanel_CheckOut_ConfirmedCheckOut_DashboardAyohaGoTop();
    }
  
}


function FloatPanel_CheckOut_ConfirmedCheckOut_DashboardAyohaGoTop(){
    var cmp = Ext.getCmp('MainMaincontainerDashbord');
    if (!cmp) return;
  
    var cur = cmp;
  
    while (cur) {
      var scrollable = cur.getScrollable && cur.getScrollable();
      var scroller   = scrollable && scrollable.getScroller && scrollable.getScroller();
  
      if (scroller && scroller.getMaxPosition) {
        var maxY = scroller.getMaxPosition().y;
  
        if (maxY > 0) {
          // ✅ jangan letak easing (avoid alias error)
          scroller.scrollTo(0, 0, { duration: 650 });
          return;
        }
      }
  
      cur = cur.getParent && cur.getParent();
    }
  }
  
  

  function AyohaScrollToTop_AutoFind(startCmpId){
    var cmp = Ext.getCmp('MainMaincontainerDashbord');
    if (!cmp) return;
  
    var cur = cmp;
  
    while (cur) {
      var scrollable = cur.getScrollable && cur.getScrollable();
      var scroller   = scrollable && scrollable.getScroller && scrollable.getScroller();
  
      if (scroller && scroller.getMaxPosition) {
        var maxY = scroller.getMaxPosition().y;
  
        if (maxY > 0) {
          // ✅ jangan letak easing (avoid alias error)
          scroller.scrollTo(0, 0, { duration: 1000 });
          return;
        }
      }
  
      cur = cur.getParent && cur.getParent();
    }
  }
  
  
  


  function FloatPanel_CheckOut_ConfirmedCheckOut_CalculateRating() {


    var RateReview =parseFloat(AppState.AyohaMerchantReview_AddEdit.RateStarGiven);
    var RateReviews =parseInt(AppState.AyohaMerchantReview_AddEdit.RateStarGiven);
             
       Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_ReviewAndRateCount').setHtml('<div style="width100%;text-align:center;background-color: transparent;font-family:Century Gothic;font-size:26px;color:purple;font-weight:bold;overflow:hidden;">'+RateReview.toFixed(1)+'</div>');
    if (RateReviews == 5) {
       
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');


    }
    if ((RateReviews >= 4) && (RateReviews < 5)) {
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');


        if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="20" height="20" alt="Company Name"></div>');

        }
        if (RateReviews == 4.5) {
           
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="20" height="20" alt="Company Name"></div>');
        }
        if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
           
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="20" height="20" alt="Company Name"></div>');
        }
        if (RateReviews == 4.9) {                               
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="20" height="20" alt="Company Name"></div>');
        }



    }
    if ((RateReviews >= 3) && (RateReviews < 4)) {
        
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');





        if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
           
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');

        }
        if (RateReviews == 3.5) {
          
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');





        }
        if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
           
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        }
        if (RateReviews == 3.9) {                               
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        }



    }
    if ((RateReviews >= 2) && (RateReviews < 3)) {
      

        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');


        if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
           
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        }
        if (RateReviews == 2.5) {
          
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        }
        if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {                               
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        }
        if (RateReviews == 2.9) {                               
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');

        }





    }
    if ((RateReviews >= 1) && (RateReviews < 2)) {
      
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');

        if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
           

            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');


        }
        if (RateReviews == 1.5) {
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');

        }
        if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        }
        if (RateReviews == 1.9) {
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/star.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        }

    }
    if ((RateReviews >= 0) && (RateReviews < 1)) {
      
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_ConfirmedCheckOut_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>');


    }




























  
}