

Ext.define('BuskartApp.view.QrCodeScannerInstascan.Scan_QRCode_Process', {

});



function Scan_QRCode_VerifyQRCode_StampCampaign(QrCode) {
    //var audio = document.getElementById("audioScanQRCodeSound");
    //audio.play();
    //var TempStampQRCode = GetCurrStampCardQrCode();

    //Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHtml('<div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;">Processing...</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">Verify QR Code:' + QrCode + '</div>');

    //14955 - 25905 - 0193397961 - NoEnterprise - 25905 - 0193397961 - Custome
    //25905 - 0193397961 - NoEnterprise

    var EntAccNo = QrCode.split('-');
    var EnterpriseAccNo = EntAccNo[1] + '-' + EntAccNo[2] + '-' + EntAccNo[3];
    var StampedCampaignCode = QrCode;
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
   // FloatPanel_AyohaeWallet_IconShow();
    FloatPanel_AyohaCardManagement_PreviewCard_FromQrCodeShow(StampedCampaignCode, EnterpriseAccNo, SubscriberAccNo);
   
}



function Scan_QRCode_VerifyQRCode_PointCampaign(QrCode) {
    //var audio = document.getElementById("audioScanQRCodeSound");
    //audio.play();
    //var TempStampQRCode = GetCurrStampCardQrCode();

    //Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHtml('<div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;">Processing...</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">Verify QR Code:' + QrCode + '</div>');

    //14955 - 25905 - 0193397961 - NoEnterprise - 25905 - 0193397961 - Custome
    //41337-55462-01226543120-NoEnterprise-55462-01226543120-Point
    //55462-01226543120-NoEnterprise
    //56923-4468-0123456789-NoEnterprise-4468-0123456789-Point
    var EntAccNo = QrCode.split('-');
    var EnterpriseAccNo = EntAccNo[1] + '-' + EntAccNo[2] + '-' + EntAccNo[3];
    var StampedCampaignCode = QrCode;
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    
 
    //Ext.getStore('MembershipsCheckIsMemberStore').getProxy().setExtraParams({
    //CampaignCode: QrCode,
    //SubscriberAccNo:GetCurrAyohaUserAccountNo(),
    //EnterpriseAccNo:EnterpriseAccNo
    //});

    //Ext.StoreMgr.get('MembershipsCheckIsMemberStore').load();





    _DataStore_MembershipsCheckIsMemberStore.getProxy().setExtraParam('CampaignCode', QrCode);
    _DataStore_MembershipsCheckIsMemberStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsCheckIsMemberStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_MembershipsCheckIsMemberStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsCheckIsMember');
    _DataStore_MembershipsCheckIsMemberStore.load();






    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('MembershipsCheckIsMemberStore').getProxy().setExtraParams({
        //    CampaignCode: QrCode,
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //    EnterpriseAccNo: EnterpriseAccNo
        //});

        //Ext.StoreMgr.get('MembershipsCheckIsMemberStore').load();

        //var myStore = Ext.getStore('MembershipsCheckIsMemberStore');

       var count = _DataStore_MembershipsCheckIsMemberStore.getCount();
       
        if (count >= 1) {
            var modelRecord = _DataStore_MembershipsCheckIsMemberStore.getAt(0)
            var EnterprisesLogo = modelRecord.get('EnterprisesLogo');
            var EnterprisesName = modelRecord.get('EnterprisesName');
            var CampaignName = modelRecord.get('CampaignName');
            var PointCampaignEndDate = modelRecord.get('PointCampaignEndDate');
            var EnterpriseHQAccNo = modelRecord.get('EnterpriseHQAccNo');
            var isRequiredStartEndDate = modelRecord.get('isRequiredStartEndDate');
            var isCampaignExpired = modelRecord.get('isCampaignExpired');

          //  FloatLoyaltyCardPointShow(CampaignName, QrCode, EnterprisesLogo, EnterprisesName, EnterpriseAccNo);
            FloatLoyaltyCardPointShow(CampaignName, QrCode, EnterprisesLogo, EnterprisesName, EnterpriseAccNo, PointCampaignEndDate, isRequiredStartEndDate, isCampaignExpired);
            //Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHtml('<div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;">Processing....</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">QR Code:' + QrCode + ' NOT VALID !</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">QR Code Already Exist !<img src="resources/icons/errorklipklip.gif" style="width:22px;height:22px;margin:0px 0px 0px 6px;"></div>');
            //swalFireFail('Stamped Fail !!');

            //  FloatPanel_QrCodeScanner_ScanCampaignHide();
           // FloatPanel_AyohaeWallet_IconShow();
            return

        } else {
            
            Swal.fire({
                title: 'Ayoha Reward v 1.0',
                text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
                imageUrl: "resources/icons/infoPurple.png",
                imageWidth: 400,
                imageHeight: 230,
                showCloseButton: true,
                showCancelButton: false,
                //  confirmButtonColor: '#3085d6',
                confirmButtonColor: '#9932cc',
                cancelButtonColor: '#d33',
                confirmButtonText: 'JOIN',
                footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
            }).then(function (result) {
                if (result.isConfirmed) {
                    localStorage.setItem("MembershipByMethod", "QRCode");
                    // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()

                   
                    FloatPanel_RewardStoreMembershipCardShow_FromQrCode(EnterpriseAccNo, EnterpriseAccNo);
                }
            });
           // FloatPanel_AyohaeWallet_IconShow();
           // FloatPanel_QrCodeScanner_ScanCampaignHide();
        }

    });
    task.delay(800);

}