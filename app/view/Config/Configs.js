Ext.define('BuskartApp.view.Config.Configs', {
});

var FlatBillID;
var FlatBillStatus;
var FlatBillUpdateDate;
var FlatBillID_ID;



function AddRoutePages(val) {
   // console.log(val);
    //var n = ArrappRoute.includes(Page);
    var n = ArrappRouteisOpen.includes(val);
    if (n) {
        console.log(val);
    } else {
        //ArrappRoute.push(Page);
        //ArrappRouteisOpen.push(val);

        // ArrappRoute.push(Page);
        console.log(val);
        ArrappRouteisOpen.push(val);

    }


  //  alert(isFloatPanel_MembershipCardList_MyMembershipCardOpen);
    // if(isFloatPanel_MembershipCardList_MyMembershipCardOpen=='Y'){
    //     FloatPanel_ScannedMerchantHide()
    // }
    //FloatPanel_ScannedMerchantHide();
    //console.log(ArrappRouteisOpen.length);

    // console.log(ArrappRouteisOpen.length);

}


function RoutePages() {



    var a = swal.isVisible();
    if (a) {
        swal.close();
        return;
    }

    var ii = ArrappRouteisOpen.length - 1;
    var pagesRoute;
    if (ArrappRouteisOpen.length > 0) {
        pagesRoute = ArrappRouteisOpen[ii];


        console.log(pagesRoute);

        eval(pagesRoute);

        var indexss = ArrappRouteisOpen.indexOf(pagesRoute);
        if (indexss > -1) {

            ArrappRouteisOpen.splice(indexss, 1);
        }
        ii--;

    } else {
        FloatPanel_ExitDialogBoxShow();
    }



}

//function RemovePages(Page,val) {
function RemovePages(val) {
    //var indexs = ArrappRoute.indexOf(Page);
    //if (indexs > -1) {      
    //    ArrappRoute.splice(indexs, 1);
    //}

    console.log(val);

    var indexss = ArrappRouteisOpen.indexOf(val);
    if (indexss > -1) {
        ArrappRouteisOpen.splice(indexss, 1);
    }

}



var globalConfig_ResizeUploadedImage;
var globalConfig_ResizeUploadedImageName;
function ResizeUploadedImage(val) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var filesToUploads = document.getElementById(val).files;

        globalConfig_ResizeUploadedImageName = document.getElementById(val).files[0].name;
        var file = filesToUploads[0];
        if (file) {

            var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function (e) {

                var img = document.createElement("img");
                img.src = e.target.result;

                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                var MAX_WIDTH = 1000;
                var MAX_HEIGHT = 1000;
                var width = img.width;
                var height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                globalConfig_ResizeUploadedImage = "";

                globalConfig_ResizeUploadedImage = canvas.toDataURL(file.type);

                // document.getElementById('output').src = dataurl;

                // Ext.getCmp('FloatPanel_AyohaUserRegistrationPicProfile').setHtml('<img src="' + dataurl + '"  style="width: 140px; height: 140px; border:2px solid white; border-radius: 50%; "/>');

                // console.log("Resize image:" + globalUserPicProfile64)
            }
            reader.readAsDataURL(file);

        }

    } else {
        alert('The File APIs are not fully supported.');
    }
}





var animatedClickTabExtComponant=null;
function animatedClickTabExt(Componant) {
if(animatedClickTabExtComponant){
    Ext.getCmp(animatedClickTabExtComponant).setStyle('background-color:transparent;border-bottom:3px none purple');
}
    

    $("#"+Componant).animate({
        opacity: 0.25,
        //left: "+=50",
        //height: "toggle",
        colour: 'rgba(220,220,220,0.25)',
    }, 200, function () {
        $("#" + Componant).animate({
            opacity: 1,
            //left: "+=50",
            //height: "toggle",
            //colour: 'rgba(0,0,0,0.11)',
        }, 100, function () {

        });
    });
    Ext.getCmp(Componant).setStyle('background-color:transparent;border-bottom:3px solid #c800ffc9');
    animatedClickTabExtComponant = Componant;

    
}

var animatedClickTabExtComponant_AyohaMerchantReward=null;
function animatedClickTabExt_AyohaMerchantReward(Componant) {
if(animatedClickTabExtComponant_AyohaMerchantReward){
    Ext.getCmp(animatedClickTabExtComponant_AyohaMerchantReward).setStyle('background-color:transparent;border-bottom:3px none purple');
}
    

    $("#"+Componant).animate({
        opacity: 0.25,
        //left: "+=50",
        //height: "toggle",
        colour: 'rgba(220,220,220,0.25)',
    }, 200, function () {
        $("#" + Componant).animate({
            opacity: 1,
            //left: "+=50",
            //height: "toggle",
            //colour: 'rgba(0,0,0,0.11)',
        }, 100, function () {

        });
    });
    Ext.getCmp(Componant).setStyle('background-color:transparent;border-bottom:3px solid #c800ffc9');
    animatedClickTabExtComponant_AyohaMerchantReward = Componant;

    
}




var highlightedTextComponant=null;
function highlightedText(Componant,TextVal1,TextVal2) {  
    if(highlightedTextComponant){
        if(TextVal1=='Home'){

        }
        Ext.getCmp(highlightedTextComponant).setStyle('background-color:transparent;border-bottom:3px none purple');
    }
 }

function animatedAccordian() {

 
    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").slideToggle("slow");
    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");

    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").click(function () {
    //    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
    //});


    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").animate({
        height: '-=' + globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi + 'px',
    }, 500, function () {
       Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHidden(true);
       Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHeight(0);
       Ext.getCmp('FloatPanel_MerchantDetailPage_OnlineStoreList').setHeight(0);
       
    });
}

function animatedAccordianSlideDown() {


    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").slideToggle("slow");
    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");

    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").click(function () {
    //    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
    //});

    tinggi = globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount * 80;
   

    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").animate({
        height: '+=' + tinggi + 'px',
    }, 500, function () {
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHidden(false);
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHeight(tinggi);
        Ext.getCmp('FloatPanel_MerchantDetailPage_OnlineStoreList').setHeight(tinggi);
        tinggi = 0;
        
    });
}
function animatedClickTab() {
  

    $("#containerMyAccount_Dashboard_MenuBottom_MyStore").animate({
        opacity: 0.25,
        //left: "+=50",
        //height: "toggle",
        colour: 'rgba(0,0,0,1)',
    }, 500, function () {
      
      FloatPanel_DashboardMerchantRewardShow();
        $("#containerMyAccount_Dashboard_MenuBottom_MyStore").animate({
            opacity: 1,
            //left: "+=50",
            //height: "toggle",
            //colour: 'rgba(0,0,0,0.11)',
        }, 100, function () {

        });
    });
}

function PlayAyohaSound(sound) {
    var audio = new Audio();
    audio.src = 'https://setkita.com/AyohaSoundExternal/'+sound;
    audio.play();
}

function toastMsgTapWIN(Msg) {



    //   LoadingPanelShow(Msg, Icon);

    swal.fire({
        toast: true,
        backdrop: true,
        title: '<div onclick="FloatPanel_AyohaReward_AyohaTapContest_PlayAgain();"><font size=5 >' + Msg + '</font></div>',
       // modal:true,
       // html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContest_PlayAgain();" style="width:100%;height:20px;text-align:center;font-size: 20px;font-weight:bold;color:black;background-color:White;">' + Msg + '</div>',
       // html: '<div style="width:100%;height:52px;text-align:center;"><img src="resources/icons/addtocart01.gif" style="width:42px;height:42px;"/></div><br><div style="background: transparent;height:5px;font-size: 12px;font-weight:bold;color:black;text-align:center;width:100%;margin:-15px 0px 0px 0px;" >Add to cart...</div>',
       // html: '<div style="width:100%;height:52px;text-align:center;"><img src="' + Icon + '" style="width:42px;height:42px;"/></div><br><div style="background: transparent;height:5px;font-size: 12px;font-weight:bold;color:black;text-align:center;width:100%;margin:-15px 0px 0px 0px;" >' + Msg + '</div>',
        animation: true,
       // width: 200,
        //height:20,
        position: 'bottom',
        showConfirmButton: false,
        //timer: 30500,
        //timerProgressBar: false,
        showCloseButton: false,
        allowOutsideClick: true,
        timer: false,
    }
);
}

function toastMsg(Msg, Icon) {



 //   LoadingPanelShow(Msg, Icon);

    swal.fire({
        toast: true,
       // backdrop: true,
        //html: '<div style="width:100%;height:52px;text-align:center;"><img src="resources/icons/addtocart01.gif" style="width:42px;height:42px;"/></div><br><div style="background: transparent;height:5px;font-size: 12px;font-weight:bold;color:black;text-align:center;width:100%;margin:-15px 0px 0px 0px;" >Add to cart...</div>',
        html: '<div style="width:100%;height:52px;text-align:center;"><img src="'+Icon+'" style="width:42px;height:42px;"/></div><br><div style="background: transparent;height:5px;font-size: 12px;font-weight:bold;color:black;text-align:center;width:100%;margin:-15px 0px 0px 0px;" >'+ Msg +'</div>',
        animation: true,
        position: 'center',
        showConfirmButton: false,
       
        timer: 1250,
        timerProgressBar: true,
    }
);
}






//// Close programatically swal.close()

var currentTimeGlobal = new Date()

function swalFireSuccess(Msg) {
    event.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '<font size=5 >'+Msg+'</font>',
        showConfirmButton: true,
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        // timer: 2500
    });
}


// function swalFireFail(Msg) {
//     event.preventDefault();


//     Swal.fire({
//         title: '<font size=5 color=white>Failed!</font><br><font size=3 color=red>' + Msg + '</font>',
//         text:'' ,
//         imageUrl: "resources/icons/errorklipklip.gif",
//         imageWidth: 400,
//         imageHeight: 230,
//         showCloseButton: true,
//         showCancelButton: false,
//         //  confirmButtonColor: '#3085d6',
//         confirmButtonColor: 'red',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'OK',
//         footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
//     }).then(function (result) {
//         if (result.isConfirmed) {

           

//         }
//     });


//     Ext.Viewport.unmask();
// }



function swalFireGeneralMsg(Msg) {
    event.preventDefault();
    Swal.fire({
        title:'',
        text: Msg,
        showConfirmButton: false,
        //imageUrl: "resources/icons/cloudrewardlogopurple.png",
        imageUrl: "resources/icons/AyoharewardlogoPurple.png",
        imageWidth: 400,
        imageHeight: 230,
        imageAlt: 'Ayoha-Reward Pro v 1.0',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })
}


function swalFireFailCustome(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        showCloseButton: true,
        showConfirmButton: false,
        confirmButtonColor: 'red',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        //imageUrl: "resources/icons/cloudrewardlogopurple.png",
        imageUrl: "resources/icons/errorklipklip.gif",
        imageWidth: 400,
        imageHeight: 230,
       // imageAlt: 'Ayoha-Reward Pro v 1.0',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })
}


function swalFireInformationMsg(Msg) {
    event.preventDefault();
    Swal.fire({
       // title: GetCurrAyohaVersion(),
        text: Msg,
        showConfirmButton: false,
        imageUrl: "resources/icons/informationPurple1.png",
        imageWidth: 400,
        imageHeight: 150,
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
     //   imageAlt: 'Cloud-Reward Pro v 1.0',
      //  footer: '<a href>Ayoha Reward v 1.0</a>'
    })
}


function swalFireInfo(Msg) {
   // event.preventDefault();
    Swal.fire({
        text: '<font size=5 color=white>Ayoha Reward v 1.0</font>',
        text:  Msg ,
        imageUrl: "resources/icons/infoPurple.png",
        imageWidth: 350,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {

            
            
        }
    });
}
function swalFireShoppingBag(Msg) {
    // event.preventDefault();
     Swal.fire({
         text: '<font size=5 color=white>Ayoha Reward v 1.0</font>',
         text:  Msg ,
         imageUrl: "resources/icons/Shoppingbag03.png",
         imageWidth: 350,
         imageHeight: 230,
         showCloseButton: true,
         showCancelButton: false,
         //  confirmButtonColor: '#3085d6',
         confirmButtonColor: '#9932cc',
         cancelButtonColor: '#d33',
         confirmButtonText: 'OK',
         footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
     }).then(function (result) {
         if (result.isConfirmed) {
 
             
             
         }
     });
 }

function swalFireInfo_NoRedemptionItem(Msg) {
    event.preventDefault();
    Swal.fire({
        text: '<font size=5 color=white>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/infoPurple.png",
        imageWidth: 350,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ayoha Merchants',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {

            Dashboard_SearchMerchantListShow()

        }
    });
}

function swalFireSuccesSendEmail(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/successendemail.gif",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}

function swalFireDynamicIconWithMessage(Path,Msg,fontColor,ButtonColor) {
    event.preventDefault();
    Swal.fire({
        title: '<font color=' + fontColor + ' size=3>' + Msg + '</font>',
        text: '',
        imageUrl: Path,
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        //confirmButtonColor: '#9932cc',
        confirmButtonColor: ButtonColor,
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}


function swalFireDynamicIconWithMessage_NoPreventDefault(Path, Msg, fontColor, ButtonColor) {
   
    Swal.fire({
        title: '<font color=' + fontColor + ' size=3>' + Msg + '</font>',
        text: '',
        imageUrl: Path,
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        //confirmButtonColor: '#9932cc',
        confirmButtonColor: ButtonColor,
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}
function swalFireSuccesPostReview(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/postReviewSucces02.gif",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: false
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}




function swalFireAyohaRewardContest_TapAndWin_WINMessage(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Hooray,You Win.!</font>',
        html: Msg,
        imageUrl: "resources/icons/tabandwin03.jpg",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Open Ayoha eWallet',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: true
    }).then(function (result) {
        if (result.isConfirmed) {
            FloatPanel_AyohaeWalletShow();


        }
    });
}

function swalFireAyohaRewardContest_TapAndWin_WINMessage_HaveBalance(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Hurry Up Dear!</font>',
        html: Msg,
        imageUrl: "resources/icons/hurryUpTapAndWin.png",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Play Again',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: true
    }).then(function (result) {
        if (result.isConfirmed) {
            FloatPanel_AyohaReward_AyohaTapContestHide();
            LoadingPanelShow(getLoadingIcon(), 'Reset....');
            var task = Ext.create('Ext.util.DelayedTask', function () {
                FloatPanel_AyohaReward_AyohaTapContestShow();
                LoadingPanelHide();
                FloatPanel_AyohaStore_AyohaPointCollectedAnimHide();

            });
            task.delay(2500);

        }
    });
}

function swalFireAyohaRewardContest_TapAndWin_WINMessage_HaveNoBalance(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>You have used all chances</font>',
        html: Msg,
        imageUrl: "resources/icons/buyNowAyohaTabAndWin.png",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Open Ayoha Merchant',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: true
    }).then(function (result) {
        if (result.isConfirmed) {
            Dashboard_SearchMerchantListShow();


        }
    });
}



function swalFireAyohaRewardContest_TapAndWin_WINMessage_HaveUndefinedBalance(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Buy Item to join Ayoha TAPS and WIN!</font>',
        html: Msg,
        imageUrl: "resources/icons/buyNowAyohaTabAndWin.png",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Open Ayoha Merchant',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>',
        allowOutsideClick: true
    }).then(function (result) {
        if (result.isConfirmed) {
            Dashboard_SearchMerchantListShow();


        }
    });
}

function swalFireSuccesDeletePostReview(Msg) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: "resources/icons/deleteAnimated01.gif",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}




function swalFireInfoMerchantButtonLink(Msg, Module) {

    var icon;

    if (Module == "WhatsApp") {
        icon = "resources/icons/whatsappdisable.png";
    } if (Module == "FB") {
        icon = "resources/icons/facebookdisabled.png";
    } if (Module == "Location") {
        icon = "resources/icons/locationdisable.png";
    } if (Module == "Insta") {
        icon = "resources/icons/instagram01.png";
    }

  //  event.preventDefault();

    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: icon,
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
       // footer: '<a href>Ayoha Reward v 1.0</a>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}
function swalFireStampInfo(Msg,Icon) {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha Reward v 1.0</font>',
        text: Msg,
        imageUrl: Icon,
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}




function swalFireSuccessStampedCardMsg(Msg) {
    event.preventDefault();
    Swal.fire({
        // title: GetCurrAyohaVersion(),
        title:Msg,
       // text: Msg,
        // background: 'rgba(255, 255, 255, 0.0)',
        showConfirmButton: false,
        imageUrl: "resources/icons/redeemAnimatedOne.gif",
        width: '280px', /*set width container*/
        height: '80px', /*set width container*/
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Ayoha-Reward Pro v 1.0',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    });
   // $(".swal2-modal").css('background-color', 'transparent');//Optional changes the color of the sweetalert 
    //$(".swal2-container.in").css('background-color', 'rgba(43, 165, 137, 0.45)');//changes the color of the overlay
    $(".swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation").css('background-color', 'rgba(0, 0, 0, 0.0)');//changes the color of the overlay


    

}

function swalFireHoorayMessage(Msg) {
    event.preventDefault();
    Swal.fire({
      // title: 'Are you sure want to delete?',
        text: Msg,
       
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/redeemAnimatedOne.gif",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
       
    });

    
}



function swalFireWarning_NoPreventDefault(Msg) {
    Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}



function swalFireWarning(Msg) {
    event.preventDefault();
     Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}



function swalFireGeneralMessaging(Msg,IconPath) {
   // event.preventDefault();
    Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: IconPath,
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}
function swalFireLoginFailed(Msg, IconPath) {
    // event.preventDefault();
    Swal.fire({
        title: '',
        // text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
        title: '<font size=4 color=black>' + Msg + '</font>',
        imageUrl: IconPath,
        imageWidth: 200,
        imageHeight: 180,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: 'red',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    })

}

function GetCurrStampCardQrCode() {

    var _value = localStorage.getItem('CurrStampCardQrCode');
   // var _value = '0133376958-346273';
    return _value;
}


function GetMembershipByMethod() {

    var _value = localStorage.getItem('MembershipByMethod');
    // var _value = '0133376958-346273';
    return _value;
}


function GetCurrStampCampaignCode() {

    var _value = localStorage.getItem('StampCampaignCode');
    return _value;
}

function GetCurrAyohaEnterpriseUserAccountNo() {

    //var _value = localStorage.getItem('AyohaEnterpriseUserAccountNo');
    var _value = '0133376958-346273';
    return _value;
}


function GetCurrAyohaVersion() {

    var _value = localStorage.getItem('AyohaVersion');
    return _value;
}


function GetAyohaUserPicProfile() {
    var _value = globalLogginAyohaUser_AyohaUserPicProfile;
   // localStorage.getItem('AyohaUserPicProfile');
    return _value;
}
function GetAyohaUserAccountNames() {
    //var _value = localStorage.getItem('AyohaUserAccountNames');
    //return _value;

    var _value;
    var AccountName = globalLogginAyohaUser_AyohaUserAccountNames;
  //  var AccountNames = AccountName.toLowerCase();
  //  var AccountNames = AccountName.toLowerCase();
   // _value = capitalize_Words(AccountNames);
    _value = AccountName.toUpperCase();
    return _value;
}



function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

function GetCurrAyohaUserGroupCode() {

    var _value = localStorage.getItem('AyohaUserGroupCode');
    return _value;
}


function GetCurrAyohaUserVerifiedString() {

    var _value = localStorage.getItem('AyohaUserVerifiedString');
    return _value;
}
function GetCurrAyohaUserAccountNo() {

    var _value = localStorage.getItem('AyohaUserAccountNo');
    return _value;
}
function GetCurrAyohaUserID() {

    var _value = localStorage.getItem('AyohaUserID');
    return _value;
}

function GetCurrAyohaUserKatalaluan() {

    var _value = localStorage.getItem('AyohaUserKatalaluan');
    return _value;
}

function GetStartDateStampCardCampaign() {

    var _value = localStorage.getItem('StartDateStampCardCampaign');
    return _value;
}

function GetEndDateStampCardCampaign() {

    var _value = localStorage.getItem('EndDateStampCardCampaign');
    return _value;
}

function getLoadingIcon() {
    var _value = "resources/icons/loadingBlade01.gif";
    return _value;
}

function GetOriginalAdevertisementStartDate() {

    var _value = localStorage.getItem('OriginalAdevertisementStartDate');
    return _value;
}

function GetOriginalAdevertisementEndDate() {

    var _value = localStorage.getItem('OriginalAdevertisementEndDate');
    return _value;
}

function GetOriginalAdvertisementPeriod() {

    var _value = localStorage.getItem('OriginalAdvertisementPeriod');
    return _value;
}
function GetCurrAdvertisementType() {

    var _value = localStorage.getItem('AdvertisementType');
    return _value;
}

function CreateAdvertisementCode() {

    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            var r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            var r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid  + '-' + GetEnterpriseAccNo();
  
}


function GenerateRandomNo()
{
    var _value;
    _value= Math.floor((Math.random() * 9999999) + 1);
    return _value;
}
function GetDateToday() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;

    return today;
}

function GetCurrentMonth() {

    var _value = currentTimeGlobal.getMonth() + 1;
    return _value;
}

function GetCurrentYear() {

    var _value = currentTimeGlobal.getFullYear();
    return _value;
}


function GetCurrentDay() {

    var _value = currentTimeGlobal.getDate();
    return _value;
}
function GetCurrentdevicemodel() {

    var _value = device_model;
    return _value;
}

function GetCurrentdeviceplatform() {

    var _value = device_platform;
    return _value;
}

function GetCurrentdeviceuuid() {

    var _value = device_uuid;
    return _value;
}

function GetCurrentdeviceversion() {

    var _value = device_version;
    return _value;
}
function GetCurrentdevicemanufacturer() {

    var _value = device_manufacturer;
    return _value;
}

function GetCurrentdeviceisVirtual() {

    var _value = device_isVirtual;
    return _value;
}



function GetCurrentdeviceserial() {
   // var _value = localStorage.getItem('device_serial');
    var _value = "K3V4C19312000961";
    return _value;
}


function GetCurrentIP() {

    var _value = currIP;
    return _value;
}

function GetCurrentConnectionState() {

    var _value = currConnectionState;
    return _value;
}
function GetCurrentFlatBillID_ID() {

    var _value = FlatBillID_ID;
    return _value;
}

function GetCurrentFlatBillID() {

    var _value = FlatBillID;   
    return _value;
}


function GetCurrentFlatBillStatus() {

    var _value = FlatBillStatus;
    return _value;
}


function GetFlatBillStatusUpdateDate() {

    var _value = FlatBillUpdateDate;
    return _value;
}
function setMessage_toBeAyohaMember(){
    //var val="<br><br><b>Join the Ayoha Rewards Revolution!</b><br><br>Maximize your benefits with every purchase by becoming a member of our online stores.<br><br>Tap <b>JOIN</b> now to get your exclusive membership card and unlock amazing rewards today!";
    var val="<br><br>🎉 Join the Ayoha Rewards Revolution 🎉<br><br>Get exclusive perks & rewards with every purchase.Tap Get Membership Card now to unlock your benefits!";
    return val;
}
function setMessage_toBeAyohaMemberNotYetSubscribe(){
   // var val="<br><br><b>Join the Ayoha Rewards Revolution!</b><br><br>Maximize your benefits with every purchase by becoming a member of our online stores.<br><br>Tap <b>Get Membership Card!</b> now to get your exclusive membership card and unlock amazing rewards today!";
var val="<br><br>🎉 Join the Ayoha Rewards Revolution 🎉<br><br>Get exclusive perks & rewards with every purchase.Tap Get Membership Card now to unlock your benefits!";
    return val;
}
function GetAPIurl() {

   // var _value = 'http://42.1.63.57:17655';
    // var _value = 'http://192.168.0.107:9018';
   // var _value = 'https://BuskartApp.com/webapiresit/webapiresit/';
    //var _value = 'https://42.1.63.57/CRMOBILEAPI/';
    var _value = 'https://setkita.com/CRMOBILEAPI/';
   // var _value = 'https://setkita.com/AyohaMobile/';
  //  var _value = 'http://tarmizi-004-site6.etempurl.com/webapiresit/webapiresit/';
  //  var _value = 'http://cloudreceipts.sytes.net:9018/'
    return _value;
}

function GetDomainName() {
    var _value = 'https://setkita.com/';
    return _value;  
}

function GetAPIurl_Web() {

    var _value = 'https://setkita.com/AYOHA_M_API/';
     return _value;
 }
function GetCurrentOneSignalPlayerID() {

    var _value = OneSignalPlayerID;
    return _value;
}
function GetCurrentOneSimInfo() {

    var _value = SimInfo;
    return _value;
}

function GetCurrentAccountID() {

    var _value = localStorage.getItem('CurrAccountID');
    return _value;
}

function GetCurrentMyKadNo() {

    var _value = localStorage.getItem('CurrMykadNo');
    return _value;
}

function GetCurrentAccountNo() {

    var _value = localStorage.getItem('CurrAccountNo');
    return _value;
}


function GetCurrentUserAccountNo() {

    var _value = localStorage.getItem('CurrentUserAccountNo');
    return _value;
}


function GetCurrentAccountName() {

    var _value = localStorage.getItem('CurrAccountName');
    return _value;
}

function GetAyohaUserisUserVerified() {
    var _value = localStorage.getItem('AyohaUserisUserVerified');
    return _value;
}





function GetCurrentUserLogin() {

    var _value = localStorage.getItem('CurrentUserLogin');
    return _value;
}


function GetCurrentUserName() {

    var _value = localStorage.getItem('CurrUserName');
    return _value;
}
function GetCurrentPassword() {

    var _value = localStorage.getItem('CurrPassword');
    return _value;
}

function GetCurrentEmail() {

    var _value = localStorage.getItem('CurrEmail');
    return _value;
}
function GetCurrentPhoneNumber() {

    var _value = localStorage.getItem('CurrPhoneNumber');
    return _value;
}

function GetAyohaUserEmail() {

    var _value = localStorage.getItem('AyohaUserEmail');
    return _value;
}





function GetCurrentRegisterDate() {

    var _value = localStorage.getItem('CurrRegisterDate');
    return _value;
}
function GetCurrentAccountStatus() {

    var _value = localStorage.getItem('CurrAccountStatus');
    return _value;
}

function GetCurrentLastLoginDate() {

    var _value = localStorage.getItem('CurrLastLoginDate');
    return _value;
}

function GetCurrentLoginIP() {

    var _value = localStorage.getItem('CurrLoginIP');
    return _value;
}

function GetCurrentVersion() {

    var _value = localStorage.getItem('CurrVersion');
    return _value;
}

function GetCurrFlatBillStatusAndCategory() {
    var _value = localStorage.getItem('CurrFlatBillStatusAndCategory');
    return _value;
}


function GetCurrCloudReceiptAccount() {

    var _value = localStorage.getItem('CurrCloudReceiptAccount');
    return _value;
}

function GetCurrCountNotificationTypeR() {
    var _value = localStorage.getItem('CurrCountNotificationTypeR');
    return _value;
}

function GetCurrCountNotificationTypeNN() {
    var _value = localStorage.getItem('CurrCountNotificationTypeNN');
    return _value;
}

function GetCurrSumCountNotification() {
    var _value = localStorage.getItem('CurrSumCountNotification');
    return _value;
}


function GetCurrPictureProfile() {
    var _value = localStorage.getItem('CurrPictureProfile');
    return _value;
}

function GetCurrDayLeft() {
    var _value = localStorage.getItem('CurrDayLeft');
    return _value;
}

function GetCurrentToolbarStyle() {

    var _value = 'background: #f44336';
    if (GetCurrentVersion() == 'Standard 1.1') {
        _value = 'background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;';
    } 

   
    return _value;
   
}





function GetNotificationDate() {
    var _value = localStorage.getItem('NotificationDate');
    return _value;
}

function GetNotificationLogo64() {
    var _value = localStorage.getItem('NotificationLogo64');
    return _value;
   
}
function GetSentFrom() {
    var _value = localStorage.getItem('SentFrom');
    return _value;
}
function GetEnterpriseAccNo() {
    var _value = localStorage.getItem('EnterpriseAccNo');
    return _value;
}

function GetEnterpriseHQAccNo() {
    var _value = localStorage.getItem('EnterpriseHQAccNo');
    return _value;
}
function GetEnterpriseAddress() {
    var _value = localStorage.getItem('EnterpriseAddress');
    return _value;
}

function GetNotificationTitle() {
    var _value = localStorage.getItem('NotificationTitle');
    return _value;
}

function GetNotification() {
    var _value = localStorage.getItem('Notification');
    return _value;
}

function GetAdvertisementImage() {
    var _value = localStorage.getItem('AdvertisementImage');
    return _value;
}



function GetQRCodeImg() {

    var _value = localStorage.getItem('QRCodeImg');
    return _value;

}

function ConvertMonth(Month) {
    var Bulan
    if (Month == '1') {
        Bulan = 'January';
    }
    if (Month == '2') {
        Bulan = 'February';
    } if (Month == '3') {
        Bulan = 'March';
    } if (Month == '4') {
        Bulan = 'April';
    } if (Month == '5') {
        Bulan = 'May';
    } if (Month == '6') {
        Bulan = 'June';
    } if (Month == '7') {
        Bulan = 'July';
    } if (Month == '8') {
        Bulan = 'August';
    } if (Month == '9') {
        Bulan = 'September';
    } if (Month == '10') {
        Bulan = 'Oktober';
    } if (Month == '11') {
        Bulan = 'November';
    } if (Month == '12') {
        Bulan = 'December';
    }





    return Bulan
}

function ConvertMonthShort(Month) {
    var Bulan
    if (Month == 'January') {
        Bulan = '1';
    }
    if (Month == 'February') {
        Bulan = '2';
    } if (Month == 'March') {
        Bulan = '3';
    } if (Month == 'April') {
        Bulan = '4';
    } if (Month == 'May') {
        Bulan = '5';
    } if (Month == 'June') {
        Bulan = '6';
    } if (Month == 'July') {
        Bulan = '7';
    } if (Month == 'August') {
        Bulan = '8';
    } if (Month == 'September') {
        Bulan = '9';
    } if (Month == 'Oktober') {
        Bulan = '10';
    } if (Month == 'November') {
        Bulan = '11';
    } if (Month == 'December') {
        Bulan = '12';
    }





    return Bulan
}

function ConvertinputTypeMonth(Month) {
    var Bulan
    if (Month == '1') {
        Bulan = '01';
    }
    if (Month == '2') {
        Bulan = '02';
    } if (Month == '3') {
        Bulan = '03';
    } if (Month == '4') {
        Bulan = '04';
    } if (Month == '5') {
        Bulan = '05';
    } if (Month == '6') {
        Bulan = '06';
    } if (Month == '7') {
        Bulan = '07';
    } if (Month == '8') {
        Bulan = '08';
    } if (Month == '9') {
        Bulan = '09';
    } if (Month == '10') {
        Bulan = '10';
    } if (Month == '11') {
        Bulan = '11';
    } if (Month == '12') {
        Bulan = '12';
    }





    return Bulan
}

function notificationdateonchange() {
    var MonthYearNoti = document.getElementById('NotificationmonthID').value;
   

    if (MonthYearNoti.includes("01")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    }
    if (MonthYearNoti.includes("02")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -37 0 0');
    }
    if (MonthYearNoti.includes("03")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -54 0 0');
    } if (MonthYearNoti.includes("04")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -65 0 0');
    } if (MonthYearNoti.includes("05")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    }
    if (MonthYearNoti.includes("06")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -64 0 0');
    } if (MonthYearNoti.includes("07")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -69 0 0');
    } if (MonthYearNoti.includes("08")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -50 0 0');
    } if (MonthYearNoti.includes("09")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -26 0 0');
    } if (MonthYearNoti.includes("10")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    } if (MonthYearNoti.includes("11")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -28 0 0');
    } if (MonthYearNoti.includes("12")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -30 0 0');
    }

    var input0 = MonthYearNoti;
    var partsOfStr = input0.split('-');
    loadNotificationTypeN_All_fromInputMonthYear(partsOfStr[0], partsOfStr[1])
    document.getElementById("input-SearchNotificationPanel_SearchTxt").addEventListener("keyup", inputSearchNotificationPanel_SearchTxtOnKeyUp);
    _DataStore_SearchNotificationPanelSearchTxt = Ext.getStore('NotificationTypeNAllStore');
    //if (MonthYearNoti.includes("05")) {
    //    Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    //}



}




function Initialnotificationdateonchange(val) {
    var MonthYearNoti = val;
    if (MonthYearNoti.includes("01")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    }
    if (MonthYearNoti.includes("02")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -37 0 0');
    }
    if (MonthYearNoti.includes("03")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -54 0 0');
    } if (MonthYearNoti.includes("04")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -65 0 0');
    } if (MonthYearNoti.includes("05")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    }
    if (MonthYearNoti.includes("06")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -64 0 0');
    } if (MonthYearNoti.includes("07")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -69 0 0');
    } if (MonthYearNoti.includes("08")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -50 0 0');
    } if (MonthYearNoti.includes("09")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -26 0 0');
    } if (MonthYearNoti.includes("10")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    } if (MonthYearNoti.includes("11")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -28 0 0');
    } if (MonthYearNoti.includes("12")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -30 0 0');
    }
    //if (MonthYearNoti.includes("05")) {
    //    Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    //}



}
function setTheme() {
    if (GetCurrentVersion() == 'Standard 1.1') {
      ////  Ext.getCmp('xtypeLogin').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('DashboardstoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //// // Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('toolbarMyAccountTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('DetailReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('RegistrationsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //////  Ext.getCmp('LoyaltyCardStamptoolbarTop').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');
      ////  //Ext.getCmp('LoyaltyCardPointtoolbarTop').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');
      ////  Ext.getCmp('LoyaltyCardPointtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))');
      ////  //Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/BGsummary6.jpg"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('imgSearchNotificationPanel').setHidden(false);
      ////  Ext.getCmp('SearchNotificationPanel_SearchTxt').setHidden(false);

      ////  Ext.getCmp('labelCountSearchNotificationPanel').setHidden(false);
      ////  Ext.getCmp('Notificationmonth').setHidden(false);
      ////  Ext.getCmp('btnNotificationmonthIDcalender').setHidden(false);
      ////  Ext.getCmp('lblYearNotificationsPanel').setHidden(true);
      ////  Ext.getCmp('lblMonthNotificationsPanel').setHidden(true);
      ////  //////Ext.getCmp('DashboardstoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('toolbarMyAccountTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('DetailReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('RegistrationsTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.1</font>');
        
        
    } else {
        //Ext.getCmp('xtypeLogin').setStyle('background: #f44336');
        //Ext.getCmp('DashboardstoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background: #f44336');
        //Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('toolbarMyAccountTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('DetailReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('RegistrationsTop').setStyle('background: #f44336');



        Ext.getCmp('xtypeLogin').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('DashboardstoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //  Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('toolbarMyAccountTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('DetailReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('RegistrationsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
     
        Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
        Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.0</font>');
        Ext.getCmp('imgSearchNotificationPanel').setHidden(false);
        Ext.getCmp('SearchNotificationPanel_SearchTxt').setHidden(false);

        Ext.getCmp('labelCountSearchNotificationPanel').setHidden(false);
        Ext.getCmp('Notificationmonth').setHidden(false);
        Ext.getCmp('btnNotificationmonthIDcalender').setHidden(false);
        Ext.getCmp('lblYearNotificationsPanel').setHidden(true);
        Ext.getCmp('lblMonthNotificationsPanel').setHidden(true);
    }

}



function setThemeloginpage() {
  
    //if (GetCurrentVersion() == 'Standard 1.1') {
    //    Ext.getCmp('xtypeLogin').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');      
    //    Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.1</font>');


    //} else {
    //    Ext.getCmp('xtypeLogin').setStyle('background: #f44336');     
    //    Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.0</font>');
      
    //}

}


function setThemeNotificationPanelIndividual() {
    if (GetCurrentVersion() == 'Standard 1.1') {
     
        Ext.getCmp('NotificationIndividualPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');



    } else {
      
        Ext.getCmp('NotificationIndividualPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      
    }
}


function summaryreceiptbottomtoolbarVstandard1point1(val) {
    console.log("summaryreceiptbottomtoolbarVstandard1point1");





    if (val == 'NewReceipt') {
        //ori
       
       // Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black"><u><b>New Receipt(s)</b></u></font>');
      //  Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/newreceiptredlatestedit.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="red"><u><b>New Receipt(s)</b></u></font>');


        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white">Partially Paid</font>')

    } if (val == 'Claimable') {
        

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="red"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white">Partially Paid</font>')
    } if (val == 'Partially Paid') {

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="red"><b><u>Partially Paid</u></b></font>')

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')
    }

    if (val == 'Deposit') {
      

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="red"><b><u>Deposit</u></b></font>')

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>')

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')
    }

    if (val == 'Warranty') {
     

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="red"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');

    } if (val == 'General') {
      

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="red"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');

    } if (val == 'RecentlyConfirm') {
        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="red"><b><u>Recently Confirm</u></b></font>')


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');
    } if (val == 'RecentlyVoid') {

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="red"><b><u>Recently Reject</u></b></font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white"><b><u>Recently Confirm</u></b></font>')


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        
    }
  
    receiptCategoryCount();

}





//var summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//function summaryreceiptlistbackgroundcolor() {
//    summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//    if (GetCurrentVersion() == 'Standard 1.1') {

//        summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//        console.log('if');
//    } else {
//        console.log('else')
//        summaryreceiptlistbackgroundcolorset = 'Picture62.jpg';
//    }
//}

//function getValuesummaryreceiptlistbackgroundcolor() {
//    window.summaryreceiptlistbackgroundcolorset; // yup, it's "test"
//}



var summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';

var objs = {
    fs: function () {
        
        summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';
        if (GetCurrentVersion() == 'Standard 1.1') {

            summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';
            console.log('if');
        } else {
            console.log('else')
            summaryreceiptlistcolorset = 'backgroundlistdowngrades.jpg';
        }
      
    }
};
//objs.fs();












var summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';

var obj = {
    f: function () {
       
        summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';
       
        if (GetCurrentVersion() == 'Standard 1.1') {

            summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';
            localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
            console.log('if');
        } else {
            console.log('else')
            summaryreceiptlistbackgroundcolorset = 'Picture62.jpg';
            localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistdowngrades.jpg');
        }
       
    }
};
//obj.f();









function CustomePanelSetHeight(containerOne, containerTwo) {

    var x = parseInt(screen.width);
    var y = parseInt(screen.height)-270;
    var y2 = parseInt(screen.height) - 274;
    console.log("y:" + y + "  y2:" + y2);


   



    Ext.getCmp(containerOne).setHeight(y);
    Ext.getCmp(containerTwo).setHeight(y2);







}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return '#fac;background-image: linear-gradient(#ff00de75, #c800ffc9)';
}


function GetEnterprisePhoneNo() {

    var _value = localStorage.getItem('EnterprisePhoneNo');
    return _value;
}
function GetEnterpriseEmail() {

    var _value = localStorage.getItem('EnterpriseEmail');
    return _value;
}

function GetEnterpriseWebsite() {

    var _value = localStorage.getItem('EnterpriseWebsite');
    return _value;
}

function GetEnterpriseFacebook() {

    var _value = localStorage.getItem('EnterpriseFacebook');
    return _value;
}
function GetEnterpriseTwiter() {

    var _value = localStorage.getItem('EnterpriseTwiter');
    return _value;
}

function GetEnterpriseInstagram() {

    var _value = localStorage.getItem('EnterpriseInstagram');
    return _value;
}
function GetEnterpriseCoordinate() {

    var _value = localStorage.getItem('EnterpriseCoordinate');
    return _value;
}

function GetPICContactNo() {

    var _value = localStorage.getItem('PICContactNo');
    return _value;
}

function GetPersonInCharge() {

    var _value = localStorage.getItem('PersonInCharge');
    return _value;
}

function getCurrentScreen() {
    var _value =parseInt(screen.width);

    
    return _value;
}





function getCurrentOs() {
    var os;
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}




function eWalletWarningToBeMembershipFirst() {
    event.preventDefault();
    Swal.fire({
        title: '',
       // html: "<b>Hi!, " + GetAyohaUserAccountNames() + "</b>.<br><br>To use the ayoha ewallet facility, we need you to be a member of our ayoha reward application platform. A variety of exciting gift reward offers await you when you become a member of our platform.join us now!",
      
        html:'<img src="'+globalLogginAyohaUser_AyohaUserPicProfile+'" style="width:100px;height:100px;border-radius:50%" alt=Company Name/><br><b>Hello!, '+ GetAyohaUserAccountNames() +'</b>.<br><br>Unlock Ayoha eWallet,Become Ayoha Member First! 🚀<br><br>Just one step away! Simply join as an Ayoha Reward member to activate your eWallet and access exclusive rewards, gifts, and special perks.<br><br>Membership is your gateway to everything awesome in Ayoha Reward.',
      
       // imageUrl:globalLogginAyohaUser_AyohaUserPicProfile,
        //imageUrl: "resources/icons/Logo/LogoOrangeSimplifed.png",
       // imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
       // imageWidth: 350,
        //imageHeight: 200,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: '<div class="blink_me">Sign up today and unlock your Ayoha eWallet!</div>',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {
            FloatPanel_AyohaMembershipAdvantagesShow();
        }
    });
}




function swalFireCannotReviewDueToNotMember(){
    event.preventDefault();
    Swal.fire({
        title: '',
        html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMember(),
       // html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
        //imageUrl: "resources/icons/membershipPurpleThree.png",
        imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
        imageWidth: 350,
        imageHeight: 200,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'JOIN',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {
            AyohaMerchantReviewHide();
            // localStorage.setItem("MembershipByMethod", "AyohaStore");
            // // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()
            // FloatPanel_AyohaStore_SaleItemDetailHide();
            // var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
            // FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
        }
    });
}



function swalFireFailLogin() {
    // event.preventDefault();
  

      Swal.fire({
        title: '<font size=5 color=black>Login Failed!</font><br><font size=3 color=grey>Invalid UserName Or Password</font><br>',
        //  title: '<font size=4 color=black>Error!</font><br>',
       //   text: Msg,
      //     width:200,
      height:200,
        width: '400px', /*set width container*/
         //height: '150px', /*set width container*/
          imageUrl: "resources/icons/wired-gradient-94-lock-unlock.gif",
         imageWidth: 200,
         imageHeight: 200,
          showCloseButton: true,
          showCancelButton: false,
          //  confirmButtonColor: '#3085d6',
          confirmButtonColor: 'purple',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
          footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
      }).then(function (result) {
          if (result.isConfirmed) {
  
  
  
          }
      });
  
  
      Ext.Viewport.unmask();
  }





  function swalFireFail(Msg) {
    event.preventDefault();
  
  var nMssg=Msg.replace("Save Failed!!!<br>","");
      Swal.fire({
        title: '<font size=5 color=black>Error!</font><br><font size=3 color=grey>' + nMssg.replace("size=2","size=3") + '</font><br>',
        //  title: '<font size=4 color=black>Error!</font><br>',
       //   text: Msg,
      //     width:200,
      height:200,
        width: '400px', /*set width container*/
         //height: '150px', /*set width container*/
          imageUrl: "resources/icons/wired-gradient-1140-error.gif",
         imageWidth: 200,
         imageHeight: 200,
          showCloseButton: true,
          showCancelButton: false,
          //  confirmButtonColor: '#3085d6',
          confirmButtonColor: 'purple',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
          footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
      }).then(function (result) {
          if (result.isConfirmed) {
  
  
  
          }
      });
  
  
      Ext.Viewport.unmask();
  }



  var globalsetMessage_toBeAyohaMember_tag="NA";
  function setMessage_NotYetMembershipMessage() {
  
// if(globalsetMessage_toBeAyohaMember_tag=="MerchantLoyaltyCampaign" && isFloatPanel_MembershipCardList_NotYetSubscribedOpen=='N'){
//     Swal.fire({
//         title: '',
//         html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMemberNotYetSubscribe(),
//        // html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
//         //imageUrl: "resources/icons/membershipPurpleThree.png",
//         imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
//         imageWidth: 350,
//         imageHeight: 200,
//         showCloseButton: true,
//         showCancelButton: false,
//         //  confirmButtonColor: '#3085d6',
//         confirmButtonColor: '#9932cc',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'JOIN',
//         footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
//     }).then(function (result) {
//         if (result.isConfirmed) {


//             // if(isFloatPanel_MembershipCardList_NotYetSubscribedOpen=='Y'){

                
//             //  //   Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardID').setZIndex(350);
//             //     return
//             // }


//             FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(globalFloatPanelMerchantDetailPage_MembershipCardCode, globalFloatPanelMerchantDetailPage_EnterpriseAccNo, MembershipTag,'NA',globalFloatPanelMerchantDetailPage_CountStar,globalFloatPanelMerchantDetailPage_CountReviewer)
//             localStorage.setItem("MembershipByMethod", "MerchantLoyaltyCampaign");
//             FloatPanel_AyohaStore_SaleItemDetailHide();
//            // var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
//            // FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
//         }
//     });
// }










    Swal.fire({
        title: '',
        html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMemberNotYetSubscribe(),
       // html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
        //imageUrl: "resources/icons/membershipPurpleThree.png",
        imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
        imageWidth: 350,
        imageHeight: 200,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {
            // if(isFloatPanel_MembershipCardList_NotYetSubscribedOpen=='Y'){

            //     alert("Please close the existing membership panel first.");
            //     if (isFloatPanel_AyohaCardManagement_PreviewCardOpen == "Y"){
            //         //FloatPanel_AyohaCardManagement_PreviewCardHide();
            //    Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardID').setZIndex(350);
            //     }
            
            //     return
            // }
            // FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(globalFloatPanelMerchantDetailPage_MembershipCardCode, globalFloatPanelMerchantDetailPage_EnterpriseAccNo, MembershipTag,'NA',globalFloatPanelMerchantDetailPage_CountStar,globalFloatPanelMerchantDetailPage_CountReviewer)
            // localStorage.setItem("MembershipByMethod", "MerchantLoyaltyCampaign");
            // FloatPanel_AyohaStore_SaleItemDetailHide();
        
        }
    });




   



}



function is_prompt_setMessage_NotYetMembershipMessage(){
    var value;
if(MembershipTag == 'NO'){
    setMessage_NotYetMembershipMessage();
    value=true;
}
if(MembershipTag == 'YES'){
    value=false;
}

    return value;
}

function setMessage_NotYetMembershipMessage_WithJoinButton(){
    Swal.fire({
        title: '',
        html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMember(),
       // html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
        //imageUrl: "resources/icons/membershipPurpleThree.png",
        imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
        imageWidth: 350,
        imageHeight: 200,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'JOIN',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {
    
    FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(globalFloatPanelMerchantDetailPage_MembershipCardCode, globalFloatPanelMerchantDetailPage_EnterpriseAccNo, MembershipTag,'NA',globalFloatPanelMerchantDetailPage_CountStar,globalFloatPanelMerchantDetailPage_CountReviewer)
    localStorage.setItem("MembershipByMethod", "AyohaStore");
    FloatPanel_AyohaStoreHide();
    
          
        }
    });
}







function SampleRefactoreLoadDataStore01() {
   
        globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
        globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
        _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain');
        
        _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    var allData = records;
        
                    // Store - MembershipCardFee > 0
                    var storeWithFee = Ext.create('Ext.data.Store', {
                        model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                        data: allData.filter(function (record) {
                            return record.get('MembershipCardFee') > 0;
                        })
                    });
        
                    // Store - MembershipCardFee <= 0
                    var storeFOC = Ext.create('Ext.data.Store', {
                        model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                        data: allData.filter(function (record) {
                            return record.get('MembershipCardFee') <= 0;
                        })
                    });
        
                    // Store - Top Rated (3.5 stars and above, sorted descending)
                    var storeTopRated = Ext.create('Ext.data.Store', {
                        model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                        data: allData
                            .filter(function (record) {
                                var star = record.get('CountStar');
                                return star !== null && star !== undefined && star >= 3.5;
                            })
                            .sort(function (a, b) {
                                return b.get('CountStar') - a.get('CountStar');
                            })
                    });
        
                    // Set stores to list components
                    Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardList').setStore(storeFOC);
                    Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardListDesignOne').setStore(storeWithFee);
                    Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardListDesignTwo').setStore(storeTopRated);
        
                    console.log('Stores updated based on loaded membership card data.');
                } else {
                    console.log('Failed to load membership card data or no records returned.');
                }
            }
        });
        
    
    
    
    
    
    
    
    
    
    
    }
    
    function SampleRefactoreLoadDataStore02(){
        _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
        _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
        _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion');
        
        _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.load({
            callback: function (records, operation, success) {
                if (success) {
                    console.log('Store loaded successfully, total records: ' + records.length);
        
                    // Loop through all records
                    records.forEach(function (record) {
                        var planCode = record.get('PaymentPlanCode');
                        var fee = record.get('MembershipCardFee');
                        var cycle = record.get('MembershipCardFeePaymentCycle');
        
                        console.log('Plan Code:', planCode);
                        console.log('Fee:', fee);
                        console.log('Cycle:', cycle);
                        globalFloatPanel_MembershipCardList_NotYetSubscribed_price = parseFloat(fee);
                        globalFloatPanel_MembershipCardList_NotYetSubscribed_plan = cycle;
                        globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode = cycle;
        
                        // You can also trigger UI actions here like:
                      // changeBackground(null, fee, cycle, 1);
                        //changeBackground
                        changeBackgroundfromdataload(document.querySelector('.membership-card-container'), fee, cycle, 1);
                        //changeBackground(event,{MembershipCardFee},`{MembershipCardFeePaymentCycle}`,`{1}`)
                    });
        
                    // Optionally continue your task after loading
                    FloatPanel_MembershipCardList_NotYetSubscribed_loadEnterprise();
                    LoadingPanelHide();
                } else {
                    console.error('Failed to load store data.');
                    LoadingPanelHide();
                }
            }
        });
}


function SampleRefactoreLoadDataStore03(){
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion');

_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.load({
    callback: function (records, operation, success) {
        if (success && records.length > 0) {
            console.log('Store loaded successfully, total records: ' + records.length);

            var record = records[0]; // Access only the first record
            var planCode = record.get('PaymentPlanCode');
           
            LoadingPanelHide();
        } else {
            console.error('Failed to load store data or no record found.');
            LoadingPanelHide();
        }
    }
});
}


function convertDateToDayMonthYearNo1(dateStr) {
    // var date = new Date(dateString);
    // var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    // return date.toLocaleDateString('en-GB', options); // Use 'en-GB' for day/month/year format






console.log('convertDateToDayMonthYear called with dateStr:', dateStr);
    // Parse string tarikh
  const date = new Date(dateStr);

  // Pilih opsyen format
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Guna Intl.DateTimeFormat untuk format
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}



function convertDateToDayMonthYear(dateStr) {
    console.log('convertDateToDayMonthYear called with dateStr:', dateStr);
  
    if (!dateStr || typeof dateStr !== "string" || !dateStr.includes("-")) {
      return 'Non Ayoha Member';
    }
  
    const [datePart] = dateStr.split(" ");
    const parts = datePart.split("-");
  
    if (parts.length !== 3) {
      return 'Non Ayoha Member';
    }
  
    const [day, month, year] = parts;
  
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const d = parseInt(day);
    const m = parseInt(month);
    
    if (isNaN(d) || isNaN(m) || !year) {
      return 'Non Ayoha Member';
    }
  
    return `${d} ${months[m - 1]} ${year}`;
  }


// --- SLIDE UP (muncul dari bawah → ke tempat asal) ---
function slideUpShow(cmpId, duration) {
    var cmp = Ext.getCmp(cmpId);
    cmp.show();
    Ext.Animator.run({
      element  : cmp.element,
      duration : duration || 500,
      easing   : 'ease-out',
      from     : { translateY: 50, opacity: 0 },
      to       : { translateY: 0,  opacity: 1 }
    });
    // if (cmp && cmp.isHidden()) {
    //   cmp.show();
    //   Ext.Animator.run({
    //     element  : cmp.element,
    //     duration : duration || 500,
    //     easing   : 'ease-out',
    //     from     : { translateY: 50, opacity: 0 },
    //     to       : { translateY: 0,  opacity: 1 }
    //   });
    // }
  }
  
  function slideUpHide(cmpId, duration) {
    var cmp = Ext.getCmp(cmpId);
    if (cmp && !cmp.isHidden()) {
      Ext.Animator.run({
        element  : cmp.element,
        duration : duration || 500,
        easing   : 'ease-in',
        from     : { translateY: 0,  opacity: 1 },
        to       : { translateY: -50, opacity: 0 },
        listeners: {
          animationend: function () {
            cmp.hide();
            // reset transform supaya layout normal bila show semula
            cmp.element.setStyle('transform', '');
            cmp.element.setStyle('opacity', '');
          }
        }
      });
    }
  }
  
  // --- SLIDE DOWN (muncul dari atas → ke tempat asal) ---
  function slideDownShow(cmpId, duration) {
    var cmp = Ext.getCmp(cmpId);

    cmp.show();
    Ext.Animator.run({
      element  : cmp.element,
      duration : duration || 500,
      easing   : 'ease-out',
      from     : { translateY: -50, opacity: 0 },
      to       : { translateY: 0,   opacity: 1 }
    });





    if (cmp && cmp.isHidden()) {
      cmp.show();
      Ext.Animator.run({
        element  : cmp.element,
        duration : duration || 500,
        easing   : 'ease-out',
        from     : { translateY: -50, opacity: 0 },
        to       : { translateY: 0,   opacity: 1 }
      });
    }
  }
  


  function slideDownHide(cmpId, duration) {
    var cmp = Ext.getCmp(cmpId);
   // if (!cmp || cmp.isHidden()) return;
  
    var el = cmp.element;
    var dur = duration || 500;
  
    // kunci ketinggian semasa & enable transition
    var h = el.getHeight(); // atau cmp.getHeight()
    el.setStyle({
      overflow: 'hidden',
      height: h + 'px',
      opacity: 1,
      '-webkit-transition': 'height ' + dur + 'ms ease, opacity ' + dur + 'ms ease',
      'transition'        : 'height ' + dur + 'ms ease, opacity ' + dur + 'ms ease'
    });
  
    // force reflow supaya transition apply
    el.dom.offsetHeight;
  
    // animate → collapse
    el.setStyle({ height: '0px', opacity: 0 });
  
    Ext.defer(function () {
      cmp.hide();
      // bersihkan inline style
      el.setStyle({ overflow:'', height:'', opacity:'', '-webkit-transition':'', 'transition':'' });
    }, dur);
  }
  

  function slideDownShow(cmpId, duration) {
    var cmp = Ext.getCmp(cmpId);
    if (!cmp || !cmp.isHidden()) return;
  
    var el = cmp.element;
    var dur = duration || 500;
  
    cmp.show();                    // perlu appear dulu untuk kira scrollHeight
    el.setStyle({ height: 'auto'}); // pastikan kita dapat tinggi sebenar
    var target = el.dom.scrollHeight;
  
    // mula dari 0
    el.setStyle({
      overflow: 'hidden',
      height: '0px',
      opacity: 0,
      '-webkit-transition': 'height ' + dur + 'ms ease, opacity ' + dur + 'ms ease',
      'transition'        : 'height ' + dur + 'ms ease, opacity ' + dur + 'ms ease'
    });
  
    // force reflow
    el.dom.offsetHeight;
  
    // animate → expand ke tinggi sebenar
    el.setStyle({ height: target + 'px', opacity: 1 });
  
    Ext.defer(function () {
      // clear height supaya ikut content (auto)
      el.setStyle({ overflow:'', height:'', '-webkit-transition':'', 'transition':'' });
    }, dur);
  }
  




  function slideDownHideOri(cmpId, duration) {
    var cmp = Ext.getCmp(cmpId);

    Ext.Animator.run({
        element  : cmp.element,
        duration : duration || 500,
        easing   : 'ease-in',
        from     : { translateY: 0,   opacity: 1 },
        to       : { translateY: 50,  opacity: 0 },
        listeners: {
          animationend: function () {
            cmp.hide();
            cmp.element.setStyle('transform', '');
            cmp.element.setStyle('opacity', '');
          }
        }
      });




    // if (cmp && !cmp.isHidden()) {
    //   Ext.Animator.run({
    //     element  : cmp.element,
    //     duration : duration || 500,
    //     easing   : 'ease-in',
    //     from     : { translateY: 0,   opacity: 1 },
    //     to       : { translateY: 50,  opacity: 0 },
    //     listeners: {
    //       animationend: function () {
    //         cmp.hide();
    //         cmp.element.setStyle('transform', '');
    //         cmp.element.setStyle('opacity', '');
    //       }
    //     }
    //   });
    // }
  }
  



function FloatPanel_Membership_CheckInPageShow(logoUrl,EnterpriseName,EnterpriseTagline,CheckInCount) {
    // Create a new div element to hold our custom HTML
    const popupContent = document.createElement('div');
    // This HTML is unchanged
    popupContent.innerHTML = `
        <div class="checkin-popup">
            <div class="checkin-icon-top">🎁</div>
            <div class="checkin-header">Ayoha Reward Membership</div>
            <h2 class="checkin-title">Check-In Point Loyalty</h2>
            <hr class="checkin-divider">
            <div class="checkin-stamp">
               
                <img src="${logoUrl}" alt="${EnterpriseName} Logo" style="width:78px;height:78px; object-fit: contain; border-radius: 10px;">
            </div>
            
      
            <p class="checkin-subtitle">${EnterpriseName}</p>
           
            <span class="checkin-subtitle-small">${EnterpriseTagline}</span>
            <div class="checkin-info">
                <p>Get <strong>10 FREE Ayoha Points</strong> just for visiting our ayoha merchant -<strong> ${EnterpriseName}</strong> today. You can collect this<strong>10 point </strong>up to <strong>3 times per day!</strong></p>
            </div>
        </div>
    `;

    // --- THIS IS THE UPDATED SweetAlert2 CODE ---
    Swal.fire({
        // Use 'html' to pass the DOM element
        html: popupContent,

        // Use 'customClass' to apply ALL our custom styles
        customClass: {
            popup: 'ayoha-checkin-swal', // The main modal
            confirmButton: 'swal-button--confirm-custom', // The confirm button
            cancelButton: 'swal-button--cancel-custom'   // The cancel button
        },
        allowOutsideClick: false, // Prevents closing on overlay click
        allowEscapeKey: false,    // Prevents closing with the Esc key
        // --- Button configuration ---
        showCancelButton: true,
        confirmButtonText: "Tap to Check-In",
        cancelButtonText: "Maybe Later",

        // --- Remove default SweetAlert2 elements ---
        showCloseButton: false,
        showConfirmButton: true,
        title: ' ', // Hides the title but keeps the space
        padding: 0, // We will control padding with CSS
        
    }).then((result) => {
        // --- THIS IS THE UPDATED .then() LOGIC ---
        // Handle the button clicks
        if (result.isConfirmed) {
            
            // The "Tap to Check-In" popup has now closed automatically.
            // Now, run your Sencha AJAX request to save the check-in.

            var objn = {
                "EnterpriseHQAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
                "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
                "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                "CheckInCode": "CIC-" + GenerateRandomNo() + '-' + GetCurrAyohaUserAccountNo(),
                "CheckInMethod": "Online",
                "CheckInPage": globalFloatPanel_AyohaStore_ModuleTagging
            };
            var _value = Ext.Ajax.request({
                type: "POST",
                url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_Insert',
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                success: function (result, request) {
                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        
                        // After the save is successful,
                        // show your animation and the *new* "Confirmed" popup.
                        FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                        FloatPanel_Membership_CheckInPage_ConfirmedShow(CheckInCount); // This is correct.
                        CoreFunction_DashboardAyohaUser();
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

            // --- I HAVE REMOVED THE OLD PLACEHOLDER FUNCTION CALL FROM HERE ---

        } else if (result.isDismissed) {
            // User clicked "Maybe Later" or closed the modal
            // The popup also closes automatically here.
        }
    });
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     .then((result) => {
//         // --- THIS IS THE UPDATED .then() LOGIC ---
//         // Handle the button clicks
//         if (result.isConfirmed) {



// /////////////////




// var objn = {
   
//      "EnterpriseHQAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
//      "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
//      "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
//      "CheckInCode":"CIC-"+ GenerateRandomNo()+'-'+GetCurrAyohaUserAccountNo(),
//      "CheckInMethod": "Online",
//      "CheckInPage": globalFloatPanel_AyohaStore_ModuleTagging
// };
// var _value = Ext.Ajax.request({

//     type: "POST",

//     url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_Insert',

//     dataType: "json",
//     data: JSON.stringify(objn),
//     headers: {
//         "Content-Type": "application/json; charset=utf-8"
//     },

//     success: function (result, request) {

//         //console.log(result.responseText);


//         data = Ext.decode(result.responseText.trim());

//         if (data.success == "true") {

//             FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
//             FloatPanel_Membership_CheckInPage_ConfirmedShow()
          

          


//         }
//         else {
           
//            swalFireFail("Fail!->" + result.responseText.trim());
//            LoadingPanelHide();
//             Ext.Viewport.unmask();
          
//         }
//         Ext.Viewport.unmask();

//     },

//     failure: function (result, request) {
       
//         swalFireFail("Fail!" + result.responseText.trim());
//         Ext.Viewport.unmask();
//         LoadingPanelHide();
//     }

// });











// //////










//             // FloatPanel_CheckInConfirmedPageShow(
//             //     10,         // pointsEarned
//             //     CheckInCount,          // currentCheckIns (example, you'll get this dynamically)
//             //     3           // maxCheckIns
//             // );
//             // ---
//             // TODO: Add your Sencha Touch AJAX call here to save the check-in
//             // ---

//         } else if (result.isDismissed) {
//             // User clicked "Maybe Later" or closed the modal
//         }
//     });
// }




// Function to show the Check-In Confirmation popup
function FloatPanel_CheckInConfirmedPageShow(pointsEarned, currentCheckIns, maxCheckIns) {

  
    // Default values if not provided
    // pointsEarned = pointsEarned || 10;
    // currentCheckIns = currentCheckIns || 1;
    // maxCheckIns = maxCheckIns || 3;

    // Calculate progress for the bar
    const progressPercentage = (currentCheckIns / maxCheckIns) * 100;

    const confirmationPopupContent = document.createElement('div');
    confirmationPopupContent.innerHTML = `
        <div class="confirmation-popup">
            <div class="confirmation-icon-top">
                <img src="resources/icons/ayohapointcoint03.png" alt="Coins" class="coins-icon">
            </div>
            <h2 class="confirmation-title">Check-In Confirmed!</h2>
            <p class="confirmation-subtitle">Thanks for visiting. Here are your points.</p>
            
            <div class="points-display">
                <span class="points-value">+${pointsEarned}</span>
                <span class="points-label">Ayoha Points Earned</span>
            </div>

            <div class="checkins-progress-text">
                Today's Check-ins: ${currentCheckIns} of ${maxCheckIns}
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${progressPercentage}%;"></div>
            </div>
        </div>
    `;

    Swal.fire({
        html: confirmationPopupContent,
        customClass: {
            popup: 'ayoha-confirmation-swal', // Custom class for this specific popup
            confirmButton: 'swal-button--awesome', // New custom class for "Awesome!" button
            cancelButton: 'swal-button--continue-shopping' // New custom class for "Continue Shopping"
        },
        showCancelButton: true,
        confirmButtonText: "View my Ayoha Point!",
        cancelButtonText: "Continue Shopping",
        showCloseButton: false,
        title: ' ',
        padding: 0,
        allowOutsideClick: false,
        allowEscapeKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            // User clicked "Awesome!"
            // Maybe navigate somewhere or close all popups
            console.log("Awesome! button clicked.");
        } else if (result.isDismissed) {
            // User clicked "Continue Shopping" or closed the modal
            console.log("Continue Shopping clicked or modal dismissed.");
        }
    });
}






function animatedContainer(containerName) {
    var el = Ext.getCmp(containerName).element;
    el.animate({
        duration: 200,
        easing: 'ease-in',
        keyframes: {
        0: {
            scale: 1
        },
        50: {
            scale: 0.9
        },
        100: {
            scale: 1
        }
        }
    });
}






function Config_apiPostJson(endpoint, payload, onOk, onErr) {
  Ext.Ajax.request({
    url: GetAPIurl() + endpoint,
    method: 'POST',
    jsonData: payload,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },

    success: function (response) {
      var raw = (response.responseText || '').trim();
      var data = raw ? Ext.decode(raw) : null;

      if (onOk) onOk(data, response);
    },

    failure: function (response) {
      if (onErr) onErr(response);
    }
  });
}
