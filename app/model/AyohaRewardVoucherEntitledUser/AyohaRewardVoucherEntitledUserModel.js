Ext.define('BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'EntitledVoucherStartDate',
      'EntitledVoucherEndDate',
      'EntitledVoucherStatus',
      'EntitledVoucherNote',
      'VoucherCode',
      'DayLeft',
      'MembershipCardCode',
      'VoucherName',
      'VoucherImgPath',
      'VoucherAmount',
      'VoucherTermAndCondition',
      'EnterpriseName',
      'EnterpriseLogo',
      'SearchCol',
      'isMember',
       {
           name: 'ModifiedWidth',
           convert: function (value, record) {
               var _value = parseInt(window.innerWidth)-14;            

               return _value;
           }
       },
        {
            name: 'isThisVoucherUsed',
            convert: function (value, record) {
                var _value;
                var EntitledVoucherStatus = record.get('EntitledVoucherStatus');
                var VoucherAmount = parseFloat(record.get('VoucherAmount'));
                var VoucherCode = record.get('VoucherCode');

                console.log(EntitledVoucherStatus);
                if (EntitledVoucherStatus == "ShoppingCart") {
                    //_value = '<input type="checkbox"  checked class="largerCheckbox" onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_OnChangeCheckbox (' + this + ',' + VoucherCode + ',' + VoucherAmount + ')" name="checkbox" />';
                    _value = 'checked';
                } else {
                    _value = '';
                }




                return _value;
            }
        },
       
        ]
    }
});