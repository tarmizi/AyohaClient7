Ext.define('BuskartApp.view.CheckOut.FloatPanel_CheckOut_NonMember', {

});

var _FloatPanel_CheckOut_NonMember;


var isFloatPanel_CheckOut_NonMemberOpen = 'N';











function FloatPanel_CheckOut_NonMember() {

    _FloatPanel_CheckOut_NonMember =
     Ext.create('Ext.Container', {

         xtype: 'container',
//height: 0,
        height: 347,
         width: '100%',
         id: 'LoadingFloatPanel_CheckOut_NonMemberID',
         draggable: false,



         centered: true,
         //bottom: 64,
         bottom:0,
         zIndex: 30,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             //type: 'popIn',
             //duration: 250,
             //easing: 'ease-out'
             type: 'slideIn',
             direction: 'up',
             easing: 'cubic-bezier(.2,0,.2,1)',
             duration: 250
         },
         hideAnimation: {

               type: 'slideOut',
                                direction: 'down',
                                duration: 420,
                             //   easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                          //   easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                             easing: 'cubic-bezier(.2,0,.2,1)',

                                offset: 20 

            //  type: 'slideOut',
            //  direction: 'down',
            //  easing: 'cubic-bezier(.2,0,.2,1)',
            //  duration: 250

         },
      //  style: 'background-color:transparent;',
        style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%)",
      //   style: 'background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);border-radius:30px 30px 0px 0px',
         // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "down") {
                             _FloatPanel_CheckOut_NonMember.hide(Ext.fx.Animation({
                                // type: 'slideOut',
                                // direction: 'down',
                                // duration: 420,
                                // easing: 'cubic-bezier(0.22, 1, 0.36, 1)'


                                type: 'slideOut',
                                direction: 'down',
                                duration: 420,                        // ✅ lebih slow & premium
                                easing: 'cubic-bezier(.2,0,.2,1)',
                                offset: 20  // (optional) kalau version Ext support

                             }));
                             isFloatPanel_CheckOut_NonMemberOpen = 'N';
                             AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
                         } 
                         
                         
                        //  if (e.direction == "right") {
                        //      _FloatPanel_CheckOut_NonMember.hide(Ext.fx.Animation({
                        //          type: 'slideOut',
                        //          direction: 'right',
                        //          easing: 'cubic-bezier(.7,0,.7,1)',
                        //          duration: 250

                        //      }));
                        //      isFloatPanel_CheckOut_NonMemberOpen = 'N';
                        //      AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
                        //  }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
          // style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);border-radius:30px 30px 0px 0px",
          style: 'background-color:transparent;',
           //  style: ' background-color:transparent;',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: 'background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_CheckOut_NonMemberHeader',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'transparent',
                     //    // border: '2px'
                     //},
                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                     layout: {
                         type: 'vbox',
                         pack: 'start',
                         align: 'center',
                     },
                     // hidden:true,
                     items:
                            [



                                {
                                    xtype: 'container',
                                    style: 'background-color:transparent;',
                                   // cls: 'confirmation-modal-head', // New class for the head
                                    width: '100%', // Ensure it's full width for icon centering
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items: [
                                        // The icon for the confirmed page (coins)
                                        { 
                                            hidden:true,
                                            xtype: 'component', 
                                            margin:'-170 0 0 0',
                                        html: '<img src="resources/icons/checkOut08.png" alt="Coins" style="width:200px;height:170px"/>' },
                                    ]
                                },
                               









                            ]

                 },



                 {
                    xtype: 'container',
                     style: 'border-bottom:0px solid;background:linear-gradient(180deg,#7c3aed,#5b21b6);border-radius:0px 0px 0px 0px',
                  //   style: 'border-bottom:1px none;background-color:white;border-radius:30px 30px 0px 0px',
                   // style: ayohaThemeColor_Hero(),
       width:'100%',
       height:60,
       //hidden:true,
                    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
       
                    },
                    items:[
                        {
                            xtype:'spacer',
                            width:14
                                                    },
                        {
                            margin: '0 0 0 0',
                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                            
                              hidden:true,
                                xtype: 'component', 
                                margin:'0 0 0 0',
                            html: '<img  src="resources/icons/checkOut11.png" alt="Coins" style="width:28px;height:28px"/>' 
                        },
                        {
                            margin: '0 0 0 4',
                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 18px;font-weight:bold;color:white;margin:0px 0px 0px 0px">Merchant Check Out</div>',

                            //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                        },
                        {
xtype:'spacer'
                        },
                        {
                            margin: '0 0 0 0',
                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                            
                              
                                xtype: 'component', 
                                margin:'0 0 0 0',
                            html: '<img onclick="FloatPanel_CheckOut_NonMemberHide();" src="resources/icons/DropDownWhite.png" alt="Coins" style="width:28px;height:28px"/>' 
                        },
                        {
                            xtype:'spacer',
                            width:14
                                                    },
                    ]
                 },




                 {
                    xtype: 'container',
                    width: '100%',
                    // docked: 'top',
                    // width: 40,
                    style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%)",
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,

                    id: 'containerFloatPanel_CheckOut_NonMemberMainContainer',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'transparent',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center',
                    },
                    items:[

                   
                    {
                       margin:'10 0 0 0',
                       xtype: 'container',
                   style: 'background-color:transparent;',
                     //  style: ayohaThemeColor_Hero(),
          width:'100%',
          height:30,
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       layout: {
                           type: 'hbox',
                           pack: 'start',
                           align: 'left'
          
                       },
                       items:[
                           {
                               margin: '0 0 0 14',
                               //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:#3A0ca3;margin:0px 0px 0px 0px">Currently Check-In At:</div>',
   
                               //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                           },
                       ]
                    },
                    {
                     
                       margin:'0 0 0 0',
                       xtype: 'container',
                   style: 'background-color:transparent;',
                     //  style: ayohaThemeColor_Hero(),
          width:'100%',
          height:80,
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       layout: {
                           type: 'hbox',
                           pack: 'start',
                           align: 'center'
          
                       },
                       items:[
   
                           {
                               width:'23%',
                               margin:'0 0 0 0',
                               height:80,
                               style: 'background-color:transparent;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'right'
                  
                               },
                               items:[
                                   {
                                      
           
                                       margin:'0 0 0 0',
                                       id:'htmlFloatPanel_CheckOut_NonMember_EnterpriseLogo',
                                       html:
                                       '<div style="width:70px;height:70px;background:#fff;border:1px solid #d1d5db;border-radius:20px;' +
                                                   'display:flex;align-items:center;justify-content:center;overflow:hidden;padding:6px;box-sizing:border-box;">' +
                                         '<img src="resources/icons/communityCoffea.png" alt="Merchant Logo" ' +
                                              'style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;">' +
                                       '</div>'
                                  
                                
                                   }
                               ]
   
                           },
                           {
                               width:'77%',
                               margin:'0 0 0 0',
                               height:80,
                               style: 'background-color:transparent;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'left'
                  
                               },
                               items:[
                                {
                                    margin: '0 0 0 10',
                                    width:'100%',  
                                    //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                    id:'htmlFloatPanel_CheckOut_NonMember_EnterpriseName',
                                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:18px;color:#111827;">Ayu Kuala Sepetang</div>',
        
                                },
                                {
                                              
                                    xtype:'component',
                                    margin:'0 0 0 10',
                                    width:'100%',              
                                   // style:'width:100%;',  // ✅ extra safety                                               
                                    //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                    id:'htmlFloatPanel_CheckOut_NonMember_EnterpriseLocation',
                                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:13px;color:#6B7280;">Kuala Sepetang</div>',
        
                                },
                                //    {
                                //        width:'100%',
                                //        margin:'0 0 0 0',
                                //        height:40,
                                //        style: 'background-color:transparent;',
                                //        layout: {
                                //            type: 'vbox',
                                //            pack: 'bottom',
                                //            align: 'left'
                          
                                //        }, 
                                //        items:[
                                //            {
                                //                margin: '0 0 0 10',
                                //                //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                //                id:'htmlFloatPanel_CheckOut_NonMember_EnterpriseName',
                                //                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:18px;color:#111827;">Ayu Kuala Sepetang</div>',
                   
                                //            }
                                //        ]
                                //    },
                                //    {
                                //        width:'100%',
                                //        margin:'0 0 0 0',
                                //        height:40,
                                //        style: 'background-color:transparent;',
                                //        layout: {
                                //            type: 'vbox',
                                //            pack: 'top',
                                //           // align: 'left',
                                //            align:'stretch'   // ✅ penting: stretch child jadi full width
                          
                                //        }, 
                                //        items:[
                                //            {
                                              
                                //                xtype:'component',
                                //                margin:'0 0 0 10',
                                //                width:'100%',              
                                //               // style:'width:100%;',  // ✅ extra safety                                               
                                //                //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                //                id:'htmlFloatPanel_CheckOut_NonMember_EnterpriseLocation',
                                //                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:13px;color:#6B7280;">Kuala Sepetang</div>',
                   
                                //            }
                                //        ]
                                //    },

                               ]
                           },
                           
                       ]
                    },
                   
                    {
                       margin:'10 0 0 0',
                       xtype: 'container',
                   style: 'background-color:transparent;',
                     //  style: ayohaThemeColor_Hero(),
          width:'100%',
          height:20,
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       layout: {
                           type: 'hbox',
                           pack: 'start',
                           align: 'left'
          
                       },
                       items:[
                           {
                               margin: '0 0 0 14',
                               //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:#3A0ca3;margin:0px 0px 0px 0px">This Session Activity</div>',
   
                               //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                           },
                       ]
                    },
   
   
               {
   
   
                   // xtype: 'button',
                   xtype: 'container',
                   margin: '5 0 0 0',
                  id: 'containerFloatPanel_CheckOut_NonMemberActivityList',
                   //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                   style: ' background-color:transparent;',
                 height: 0,
                  // height: 80,
                   width: '100%',
                   // style: 'border:2px solid #D25959;',
                   layout: {
                       type: 'vbox',
                       pack: 'start',
                       align: 'center'
                   },
                   items: [
   
   
   
   
   
   
   
                       {
              
                           xtype: 'list',
                         //  cls: 'ayohaHappeningList',
                           width:'90%',
                          // height:'100%',
                           id:'listFloatPanel_CheckOutNonMember',
                          // store: storeHappeningNow,
                           scrollable: {
                               direction: 'vertical',
                               directionLock: true,
                               indicators: false
                           },
                           disableSelection: true,
   style: 'background-color:rgba(255,255,255, 0);border-radius: 0px 0px 0px 0px;',
                           
                           // itemCls: 'ayohaHItem',
                           itemTpl: new Ext.XTemplate(
                               '<div class="ayohaActItem">',
                             
                                 // LEFT ICON
                                 '<div class="ayohaActIconWrap">',
                                   '<tpl if="badge == \'pin\'">',
                                     '<div class="ayohaBadge ayohaBadgePin" title="Checked-in">',
                                       '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
                                     '</div>',
                                   '</tpl>',
                             // ✅ Check-out (SVG baru)
'<tpl if="badge == \'checkout\'">',
'<div class="ayohaBadge ayohaBadgeCheckout" title="Checked-out">',
  '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">',
    '<path d="M10 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    '<path d="M17 16l4-4-4-4" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    '<path d="M21 12H9" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  '</svg>',
'</div>',
'</tpl>',
                                   '<tpl if="badge == \'card\'">',
                                     '<div class="ayohaBadge ayohaBadgeCard" title="Joined">',
                                       '<div class="ayohaCardIcon"></div>',
                                       '<div class="ayohaPlusMini">+</div>',
                                     '</div>',
                                   '</tpl>',
                             
                                   '<tpl if="badge == \'stamp\'">',
                                     '<div class="ayohaBadge ayohaBadgeStamp" title="Stamp Collected">',
                                       '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M7 3h10v4h2v4c0 1.1-.9 2-2 2h-1v4l-4-2-4 2v-4H7c-1.1 0-2-.9-2-2V7h2V3zm2 2v2h6V5H9zm-2 4v2h10V9H7z"/></svg>',
                                     '</div>',
                                   '</tpl>',
                             
                                   '<tpl if="badge == \'point\'">',
                                     '<div class="ayohaBadge ayohaBadgePoint" title="Points Collected">',
                                       '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M12 2l2.2 4.8L19 7.4l-3.6 3.5.9 5.1L12 14.9 7.7 16l.9-5.1L5 7.4l4.8-.6L12 2z"/></svg>',
                                     '</div>',
                                   '</tpl>',
                             
                                   '<tpl if="badge == \'event\'">',
                                     '<div class="ayohaBadge ayohaBadgeEvent" title="Event Responded">',
                                       '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M7 2v2H5a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm14 8H3V6h18v4zm-3.8 4.2-6.2 6.2L7 16.6l1.4-1.4 2.6 2.6 4.8-4.8 1.4 1.2z"/></svg>',
                                     '</div>',
                                   '</tpl>',
                             
                                   '<tpl if="badge == \'store\'">',
                                     '<div class="ayohaBadge ayohaBadgeStore" title="Ayoha Store">',
                                       '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M3 9l1-5h16l1 5v2a3 3 0 0 1-3 3c-1.1 0-2-.6-2.6-1.4A3.2 3.2 0 0 1 12 14a3.2 3.2 0 0 1-3.4-1.4A3 3 0 0 1 6 14a3 3 0 0 1-3-3V9zm2 6h14v7H5v-7zm3 2v3h3v-3H8z"/></svg>',
                                     '</div>',
                                   '</tpl>',
                             
                                   '<tpl if="badge == \'contest\'">',
                                     '<div class="ayohaBadge ayohaBadgeContest" title="Contest Activity">',
                                       '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M6 2h12v3h2v3c0 3-2 5-5 5h-1.2A5.8 5.8 0 0 1 13 15.7V18h3v2H8v-2h3v-2.3A5.8 5.8 0 0 1 10.2 13H9C6 13 4 11 4 8V5h2V2zm-1 6c0 1.7 1.3 3 3 3h.2A7.6 7.6 0 0 1 7 7V6H5v2zm14-2h-2v1c0 1.4-.4 2.7-1.2 4H16c1.7 0 3-1.3 3-3V6z"/></svg>',
                                     '</div>',
                                   '</tpl>',
                                 '</div>',
                             
                                 // MIDDLE TEXT
                                 '<div class="ayohaActText">',
                                   '<div class="ayohaActLabel">{ActivityName}</div>',
                                   '<div class="ayohaActSub">{UpdatedTime}</div>',
                                   // '<tpl if="ActivitySub">',
                                   //   '<div class="ayohaActSub">{ActivitySub}</div>',
                                   // '</tpl>',
                                 '</div>',
                             
                                 // RIGHT VALUE
                                //  '<tpl if="ActivitySub">',
                                 '<div class="ayohaActValue {ValueCls}">{ActivitySub}</div>',
                                  //      '</tpl>',
                             
                               '</div>'
                             ),
                             
                             
                           listeners: {
                               itemtap: function (dv, index, target, record) {
                                   // TODO: action bila tap user
                                   // console.log(record.get('name'));
                               }
                           }
                      
                     }
   
   
                   ]
   
   
               },
               {
                margin:'17 0 0 0',
                xtype: 'container',
            style: 'background-color:transparent;',
              //  style: ayohaThemeColor_Hero(),
   width:'100%',
   height:20,
                // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'center'
   
                },
                items:[
                    {
                        margin: '0 0 0 14',
                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:#3A0ca3;margin:0px 0px 0px 0px">Rate Us</div>',

                        //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                    },
                    {
xtype:'spacer'
                    },
                    {
                        hidden:true,
                        margin: '0 14 0 0',
                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                        html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:#3A0ca3;margin:0px 0px 0px 0px">Ayoha Store</div>',

                        //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                    },
                ]
             },
   {
    xtype: 'container',
    width: '95%',
    height: 90,
    style: 'background-color: transparent;',
    //id: 'containerFloatPanel_CheckOutNonMemberEnterpriseLoveUs',

    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'left',
    },
    items:[
        {
            xtype: 'container',
            width: '100%',
           // flex: 1,
            margin: '0 0 0 0',
            height: 70,
            id: 'containerFloatPanel_CheckOutNonMemberReviewAndRate',
           // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
            // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
            style: "background-color: transparent;",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'

            },
            items: [
                {
                    xtype: 'container',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: 20,
                    // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                    style: "background-color: transparent;",
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'

                    },
                    items:[
                        {
                            margin: '0 0 0 0',
                            width: '100%',
                            height: 20,
                            id: 'htmlFloatPanel_CheckOutNonMemberReviewAndRateCount',
                          //  html: '<div style="color:black;text-align: center;font-family:Arial, sans-serif;font-size:18px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',
                             html:'<div style="width100%;text-align:center;background-color: transparent;font-family:Arial, sans-serif;font-size:20px;color:black;font-weight:bold;overflow:hidden;">0.0</div>',
                        },
                    ]
                },
              

                {
                    xtype: 'container',
                    width: '100%',
                    margin: '5 0 0 0',
                    height: 20,
                    // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                    style: "background-color: transparent;",
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'

                    },
                    items: [

                        {
                            id: 'htmlFloatPanel_CheckOutNonMember_Star1',
                            height: 20,
                            width: 20,
                            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
                        },
                        {
                            xtype:'spacer',
                            width:3
                            },
{
id: 'htmlFloatPanel_CheckOutNonMember_Star2',
height: 20,
width: 20,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
},
{
xtype:'spacer',
width:3
},
{
id: 'htmlFloatPanel_CheckOutNonMember_Star3',
height: 20,
width: 20,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
},
{
    xtype:'spacer',
    width:3
    },
{
id: 'htmlFloatPanel_CheckOutNonMember_Star4',
height: 20,
width: 20,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',
},
{
    xtype:'spacer',
    width:3
    },
{
id: 'htmlFloatPanel_CheckOutNonMember_Star5',
height: 20,
width: 20,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="20" height="20" alt="Company Name"></div>',

},
                    ]
                },


                {
                    xtype: 'container',
                    width: '100%',
                    margin: '5 0 0 0',
                    height: 20,
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            id: 'htmlFloatPanel_CheckOutNonMember_ReviewByCount',
                            html:'<div style="width100%;text-align:center;background-color: transparent;font-family:Arial, sans-serif;font-size:18px;color:black;font-weight:normal;overflow:hidden;">0 Reviews</div>',
                           // html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:20px;color:black;font-weight:bold;overflow:hidden;">0 Reviews</div>',
                        },
                    ]
                },
                 //{
                 //    margin: '0 0 0 0',
                 //    height: 15,
                 //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
                 //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                 //}
            ]
        },
    ]
   },
            //    {
            //         // xtype: 'button',
            //         xtype: 'container',
            //         margin: '0 0 0 0',
            //        docked:'bottom',
            //      //   id: 'FloatPanel_CheckOut_NonMemberBorderBg',
            //         //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
            //        // style: ' background-color:transparent;',
            //         height: 100,
            //         width: '100%',
            //         style: 'border-top:2px solid rgba(124,58,237,.14);border-bottom:2px none #D25959;border-left:2px none #D25959;border-right:2px none #D25959;background-color:red;',
            //         layout: {
            //             type: 'vbox',
            //             pack: 'start',
            //             align: 'center'
            //         },
            //         items:[
            //            {
            //                width: '90%',
            //                //height: 30,
            //                html:
            //              '<div class="ayohaMActions">' +
            //                '<button class="ayohaCheckOutBtn" onclick="Ayoha_CheckInAgain &amp;&amp; Ayoha_CheckInAgain();">Confirm Check-Out</button>' +
                          
            //             '</div>' 
                         
                         
                         
            //              },
            //              {
            //                 margin: '8 0 0 0',
            //                 //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
            //                // id:'htmlFloatPanel_CheckOut_NonMember_EnterpriseName',
            //                 html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:12px;color:#111827;">You can check-in again anytime</div>',

            //             }
            //         ]
            //    }


                    ]
               

                },




                {
                    // xtype: 'button',
                    xtype: 'container',
                    margin: '0 0 0 0',
                   docked:'bottom',
                 //   id: 'FloatPanel_CheckOut_NonMemberBorderBg',
                    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                   // style: ' background-color:transparent;',
                    height: 100,
                    width: '100%',
                    style: 'border-top:2px solid rgba(124,58,237,.14);border-bottom:2px none #D25959;border-left:2px none #D25959;border-right:2px none #D25959;background-color:transparent;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                    },
                    items:[
                       {
                           width: '90%',
                           //height: 30,
                           html:
                         '<div class="ayohaMActions">' +
                           '<button class="ayohaCheckOutBtn" onclick="FloatPanel_CheckOut_NonMember_CheckOut();">Confirm Check-Out</button>' +
                          
                        '</div>' 
                         
                         
                         
                         },
                         {
                            margin: '11 0 0 0',
                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                           // id:'htmlFloatPanel_CheckOut_NonMember_EnterpriseName',
                            html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:12px;color:#111827;">*You can check-in again anytime</div>',

                        }
                    ]
               }







             ]




         }







     });
    return _FloatPanel_CheckOut_NonMember;





}

function FloatPanel_CheckOut_NonMemberShow() {

    Ext.Viewport.remove(_FloatPanel_CheckOut_NonMember);
    this.overlay = Ext.Viewport.add(FloatPanel_CheckOut_NonMember());
    this.overlay.show();
    isFloatPanel_CheckOut_NonMemberOpen = 'Y';
    AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
   // FloatPanel_CheckOut_NonMember_EnterprisesWorkingHourLoadByEnterpriseAccNoStore();



   Ext.getCmp('htmlFloatPanel_CheckOut_NonMember_EnterpriseLogo').setHtml('<div style="width:70px;height:70px;background:#fff;border:1px solid #d1d5db;border-radius:20px;' +
   'display:flex;align-items:center;justify-content:center;overflow:hidden;padding:6px;box-sizing:border-box;">' +
'<img src="'+globalFloatPanelMerchantDetailPage_EnterpriseLogo+'" alt="Merchant Logo" ' +
'style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;">' +
'</div>');


var bandar = (globalFloatPanelMerchantDetailPage_Bandar || '').replace(/\u00a0/g,' ').trim();
var negeri = (globalFloatPanelMerchantDetailPage_Negeri || '').replace(/\u00a0/g,' ').trim();


Ext.getCmp('htmlFloatPanel_CheckOut_NonMember_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:18px;color:#111827;">'+globalFloatPanelMerchantDetailPage_EnterpriseName+'</div>')
Ext.getCmp('htmlFloatPanel_CheckOut_NonMember_EnterpriseLocation').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:12px;color:#6B7280;">'+bandar+', '+negeri+'</div>')

// Ext.getCmp('htmlFloatPanel_CheckOut_NonMember_EnterpriseLocation').setHtml(
//     '<span style="display:block;font-family:Century Gothic;font-weight:700;font-size:13px;color:#6B7280;margin:0;padding:0;">' +
//     bandar + ', ' + negeri +
//     '</span>'
//   );
   SuccessCheckinController_DashboardSuccessCheckIn_LoadMerchantDashboard_CheckOutActivityStore();
}


// function FloatPanel_CheckOut_NonMemberShow_AyohaPointRedemptionHistory() {

//     Ext.Viewport.remove(_FloatPanel_CheckOut_NonMember);
//     this.overlay = Ext.Viewport.add(FloatPanel_CheckOut_NonMember());
//     this.overlay.show();
//     isFloatPanel_CheckOut_NonMemberOpen = 'Y';
//     AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
// }

function FloatPanel_CheckOut_NonMemberHide() {

    if (isFloatPanel_CheckOut_NonMemberOpen == 'Y') {
        _FloatPanel_CheckOut_NonMember.hide(); isFloatPanel_CheckOut_NonMemberOpen = 'N';
        RemovePages("FloatPanel_CheckOut_NonMemberHide()");
    }

}





function FloatPanel_CheckOut_NonMember_EnterprisesWorkingHourLoadByEnterpriseAccNoStore() {
  





    _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/EnterprisesWorkingHour/EnterprisesWorkingHourLoadByEnterpriseAccNo');
    _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.getCount();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}


function FloatPanel_CheckOut_NonMember_CheckOut(){
   LoadingPanelShow(getLoadingIcon(), 'Checking-Out...');
   FloatPanel_CheckOut_NonMemberHide();
   
  // FloatPanel_CheckOut_ConfirmedCheckOu_DashboardAyohaGoTop();
   //return
    var objn = {
        "EnterpriseHQAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
        "EnterpriseAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "CheckInCode":globalFloatPanelMerchantDetailPage_CheckInCode,
        "CheckInMethod": "CheckOut",
        "CheckInPage": "CheckOut",
    };
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_InsertCheckOut',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        success: function (result, request) {
            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
               
                
                DashboardAyohaUserMainStore();
                     
                       // loadAdvertisementloadHotSeatStore();
                    
                      //  AyohaMerchantReward_loadVIAAdvertisement();
                        FloatPanel_CheckOut_ConfirmedCheckOutShow();
                       // FloatPanel_CheckOut_ConfirmedCheckOut_DashboardAyohaGoTop();
              //  FloatPanel_CheckOut_NonMemberHide();
               // Dashboard_MerchantDetailPageShow();
            } else {
                swalFireFail("Fail!->" + result.responseText.trim());
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();
        },
        failure: function (result, request) {
            swalFireFail("Fail!" + result.responseText.trim());
            Ext.Viewport.unmask();
            LoadingPanelHide();
        }
    });
}