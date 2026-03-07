Ext.define('BuskartApp.view.Master.FloatPanel_State', {

});

var _FloatPanel_State=null;


var isFloatPanel_StateOpen = 'N';



   
function FloatPanel_StateCreateIfNeeded() {
    if (_FloatPanel_State && !_FloatPanel_State.destroyed) return;
     _FloatPanel_State =
     Ext.create('Ext.Container', {

  id: 'LoadingFloatPanel_StateID',
floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'hide',
      // closeAction: 'destroy',
        draggable: false,
        modal: true,
        styleHtmlContent: true,
        // width: '90%',
        //  height: 350,
        layout: 'fit',



         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px solid;background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:white;',

             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     height: ayoha_HeaderHeight(),
                    style:ayohaThemeColor_Header(),

                     id: 'containerFloatPanel_StateHeader',
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
                                              id: 'btnFloatPanel_StateBack',
                                              height: 30,
                                                      width: 65,
                                                      margin: '0 0 0 10',
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
FloatPanel_StateHide(false)
                                                

                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },


                                             {
                                                   margin: '0 15 0 0',
                                                    html:ayohaTheme_HeaderText('State'),
                                                 
                                             },












                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_StateBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: 'background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },
                items: [



{
    xtype: 'list',
    id: 'FloatPanel_StateLoadMasterListID',
    width: '100%',
    height: '100%',
    scrollable: true,
    cls: 'stateMasterList',

    store: {
        fields: ['State'],
        data: [
            { State: 'Johor' },
            { State: 'Kedah' },
            { State: 'Kelantan' },
            { State: 'Melaka' },
            { State: 'Negeri Sembilan' },
            { State: 'Pahang' },
            { State: 'Perak' },
            { State: 'Perlis' },
            { State: 'Pulau Pinang' },
            { State: 'Sabah' },
            { State: 'Sarawak' },
            { State: 'Selangor' },
            { State: 'Terengganu' },
            { State: 'W.P. Kuala Lumpur' },
            { State: 'W.P. Labuan' },
            { State: 'W.P. Putrajaya' }
        ]
    },

    itemTpl: [
        '<div class="stateMasterListItem">{State}</div>'
    ],

    listeners: {
        itemtap: function (list, index, target, record) {
            FloatPanel_StateLoadMaster_SetState(record.get('State'));
        }
    }
},



                    // {
                    //     xtype: 'list',                       
                    //     store: 'StateStore',
                    //     id: 'FloatPanel_StateLoadMasterListID',
                    //     mode: 'SINGLE',
                    //     disableSelection: false,                   

                    //     itemTpl: '<div class="myContent">' +

                    //         '<div onclick="FloatPanel_StateLoadMaster_SetState(' + "'" + '{State}' + "'" + ')" style="overflow:auto;width:100%;height:100%;text-align:center"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:center;width:100%;text-align:center;color:black"><b>{State}</b></div>' +

                    //                '</div>',

                    //     width: '100%',
                    //     height: 290,
                    //     disableSelection: true,                    





                    // },


                ]


            },









             ]




         }







     });
}






function FloatPanel_StateShow() {

    // Ext.Viewport.remove(_FloatPanel_State);
    // this.overlay = Ext.Viewport.add(FloatPanel_State());
    // this.overlay.show();
  
    // AddRoutePages("FloatPanel_StateHide()");







    
FloatPanel_StateCreateIfNeeded();



_FloatPanel_State.show();
  isFloatPanel_StateOpen = 'Y';
// ✅ push browser back (ikut style kau)
if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
  AyohaBrowserBack.push('FloatPanel_State', function () {
 
    FloatPanel_StateHide(true);
  });
}

}


function FloatPanel_StateShow_AyohaPointRedemptionHistory() {

    Ext.Viewport.remove(_FloatPanel_State);
    this.overlay = Ext.Viewport.add(FloatPanel_State());
    this.overlay.show();
    isFloatPanel_StateOpen = 'Y';
    AddRoutePages(_FloatPanel_State, "isFloatPanel_StateOpen");
}

function FloatPanel_StateHide(animCfg, fromBack) {
    // _FloatPanel_State.hide(); isFloatPanel_StateOpen = 'N';
    // RemovePages("FloatPanel_StateHide()");



    if (isFloatPanel_StateOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_State.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_State.hide();
          }
          isFloatPanel_StateOpen = 'N';
          
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_State');
          }
    }



}


function FloatPanel_StateLoadMaster_SetState(State) {


    if(isFloatPanel_SubscriberMasterOpen=="Y"){
        document.getElementById('input-FloatPanel_SubscriberMasterState_edit').value = State;
    }else
    {
        document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_State').value = State;
    }
    
    

    

    if (isFloatPanel_StateOpen == 'Y') {
        _FloatPanel_State.hide(Ext.fx.Animation({
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
            //type: 'fadeOut',
            //duration: 400,
        }));

    }
    isFloatPanel_StateOpen = 'N';
    RemovePages("FloatPanel_StateHide()");
}





