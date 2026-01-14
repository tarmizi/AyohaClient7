Ext.define('BuskartApp.model.EnterprisesCoverMedia.EnterprisesCoverMediaModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'EnterpriseAccNo',
      'CoverMediaUrl',
      'CoverMediaName',
      'CoverMediaType',
      'CoverMediaSequence',
      'RowStatus',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'isWorkingDay',
      'WorkingDay',
      'WorkingHourStart',
      'WorkingHourStartAMPM',
      'WorkingHourEnd',
      'WorkingHourEndAMPM',
      'Note',
      'isLikeStatus',
       'CountLike',
       'CountOnlineStore',
       'CountMembershipCard'
        ]
    }
});




//<div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:2px;color:black;font-weight:bold;overflow:hidden;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_OpenLink_Wassap({ID})" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/wassap.png" alt="" /></button><button OnClick="FloatPanel_OpenLink_Location({ID})" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/locationOne.png" alt="" /></button><button OnClick="FloatPanel_OpenLink_FB({ID})" class="buttonMediaSocial" style="margin:0px 17px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/Facebooklogo.png" alt="" /></button></div>

