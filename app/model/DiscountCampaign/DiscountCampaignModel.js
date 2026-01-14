Ext.define('BuskartApp.model.DiscountCampaign.DiscountCampaignModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'DiscountCode',
      'DiscountName',
      'DiscountImgPath',
      'DiscountImgName',
      'DiscountPercent',
      'DiscountTermAndCondition',
      'RowStatus',
      'CreatedDate',
      'CreatedBy',
      'EnterpriseAccNo',
      'DiscountType',
      'MembershipCardCode',
      'DiscountEndDate',
      'DiscountNote',
      'isRequireDiscountEndDate',
      'EnterpriseLogo',
      'EnterpriseName',
      'SearchCol',
      'isMember',
      {
        name: 'ModifiedWidth',
        convert: function (value, record) {
           // var _value = parseInt(window.innerWidth) - 24;
            var _value = parseInt(window.innerWidth) - 34;
            return _value;
        }
    },
    {
      name: 'ModifiedDiscountEndDate',
      convert: function (value, record) {
      
          var _value;
          var str = record.get('isRequireDiscountEndDate');
          if (str == "No") {
              _value = "Valid Life Time";
          } else {
            _value = record.get('DiscountEndDate');
          }
          return _value;
      }
  },    {
    name: 'ModifiedSearchCol',
    convert: function (value, record) {
    var values;
    var _value;
        var str = record.get('isRequireDiscountEndDate');
        var searchcol = record.get('SearchCol');
        if (str == "No") {
            _value = "Valid Life Time";
        } else {
          _value = record.get('DiscountEndDate');
        }
        
        values =searchcol+"|"+ _value;
          return values;
    }
},   
        ]
    }
});
