Ext.define('BuskartApp.view.Membership.SideMenuMembershipCardList', {

});





var globalSideMenuMembershipCardListExpandShrinkBtn;
var globalSideMenuMembershipCardListColListViewBtn;
var _SideMenuMembershipCardList;





function SideMenuMembershipCardList() {

    _SideMenuMembershipCardList =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: 55,
         width: '100%',
         id: 'LoadingSideMenuMembershipCardListID',
         name: 'nameLoadingSideMenuMembershipCardList',
         draggable: false,



         centered: false,
         //bottom: 64,
         bottom:80,
         zIndex: 5,
        //  modal: true,
        //  hideOnMaskTap: false,
         layout: {
             type: 'vbox',
             pack: 'start',
             align: 'center'
         },
         showAnimation: {
             //type: 'popIn',
             //duration: 250,
             //easing: 'ease-out'
             type: 'slideIn',
             direction: 'up',
             easing: 'cubic-bezier(.2,0,.2,1)',
             duration: 1000
         },
         hideAnimation: {

             //type: 'popOut',
             //easing: 'easeInOut',
             //duration: 250,
             //type: 'fadeOut',
             //duration: 400,

             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.2,0,.2,1)',
             duration: 250

         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:rgba(255,255,255, 0.1);',
       

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
           //  style: 'background-color:transparent;',
           height: 55,
             width: '80%',
            // style: 'background:linear-gradient(90deg,#ff00de,#c800ff); box-shadow:0 16px 36px rgba(200,0,255,.38), 0 2px 0 rgba(255,255,255,.35) inset; border:2px solid rgba(255,255,255,.25); animation: ayohaPulse 1s infinite ease-in-out;border-radius:30px 30px 30px 30px;',
             style: 'background:linear-gradient(90deg,#ff00de,#c800ff); box-shadow:0 16px 36px rgba(200,0,255,.38), 0 2px 0 rgba(255,255,255,.35) inset; border:2px solid rgba(255,255,255,.25);border-radius:30px 30px 30px 30px;',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





           



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'SideMenuMembershipCardListBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: 'background-color:transparent;',
                height: 55,
                width: '100%',
                cls:'getMoreMembershipCard',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [


{
    margin: '5 0 0 0',
html:'<div style="display:inline-flex;align-items:center;font-size:14px;color:white;font-weight:bold"><img src="resources/icons/getMoreMembershipcard04.png" width="20" height="20" alt="Company Name"> - <span>Get More Membership Card!</span></div>'
},

// {
//     html: '<div id="fabGetMoreCard" onclick="if(window.FloatPanel_Membership_MembershipCardHubsShow){FloatPanel_Membership_MembershipCardHubsShow();}" style="width:80%;position:fixed; left:50%; bottom:88px; transform:translateX(-50%); z-index:9999; display:inline-flex; align-items:center; gap:10px; padding:10px 66px; border-radius:999px; color:#fff; font:800 14px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; background:linear-gradient(90deg,#ff00de,#c800ff); box-shadow:0 16px 36px rgba(200,0,255,.38), 0 2px 0 rgba(255,255,255,.35) inset; border:2px solid rgba(255,255,255,.25); animation: ayohaPulse 2.2s infinite ease-in-out;"><span aria-hidden="true" style="display:inline-flex; filter:drop-shadow(0 2px 8px rgba(255,255,255,.35));"><svg width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="6" width="12" height="8" rx="2"></rect><rect x="7" y="8" width="12" height="8" rx="2" opacity=".65"></rect><path d="M17 17v5M14.5 19.5h5" /></g></svg></span><span>Get more membership card</span></div><style>@keyframes ayohaPulse{0%{box-shadow:0 16px 36px rgba(200,0,255,.38), 0 2px 0 rgba(255,255,255,.35) inset; transform:translateX(-50%) scale(1);}50%{box-shadow:0 22px 44px rgba(200,0,255,.5), 0 2px 0 rgba(255,255,255,.35) inset; transform:translateX(-50%) scale(1.02);}100%{box-shadow:0 16px 36px rgba(200,0,255,.38), 0 2px 0 rgba(255,255,255,.35) inset; transform:translateX(-50%) scale(1);}}@media (max-width:380px){#fabGetMoreCard{padding:10px 14px; gap:8px; font-weight:800; font-size:13px;}}</style>',
//     width: '100%',
//     height: 50,
// }


                


                ]


            },









             ]




         }







     });
    return _SideMenuMembershipCardList;





}

function SideMenuMembershipCardListShow() {
    Ext.Viewport.remove(_SideMenuMembershipCardList);
    this.overlay = Ext.Viewport.add(SideMenuMembershipCardList());
    this.overlay.show();
    AddRoutePages("SideMenuMembershipCardListHide()");
    is_SideMenuMembershipCardListOpen = 'Y';

    var containerViewnameLoadingSideMenuMembershipCardList = Ext.ComponentQuery.query('container[name=nameLoadingSideMenuMembershipCardList]')[0];
    var containerViewElnameLoadingSideMenuMembershipCardList = containerViewnameLoadingSideMenuMembershipCardList.element;
    containerViewElnameLoadingSideMenuMembershipCardList.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_Membership_MembershipCardHubsUpgradeShow();
        //Dashboard_SearchMerchantListShow();
      }
    );


    

}
var is_SideMenuMembershipCardListOpen = 'N';

function SideMenuMembershipCardListHide() {
    if (is_SideMenuMembershipCardListOpen == 'Y') {
        _SideMenuMembershipCardList.hide();
        is_SideMenuMembershipCardListOpen = 'N';
        RemovePages("SideMenuMembershipCardListHide()");
    }

}

