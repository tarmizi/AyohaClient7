var strBil;


Ext.define('BuskartApp.model.AyohaMerchantInfoMembershipLoyaltyProgram.AyohaMerchantInfoMembershipLoyaltyProgramModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'MembershipSegmentCode',
             'Bilangan',
              'MembershipcardName',
             'MembershipcardImg',
             'AyohaLoyaltyProgram',
             'LoyaltyProgramCode',
             'SumBilangan',
             {
                 name: 'AyohaLoyaltyProgramIcon',
                 convert: function (value, record) {
                     var _value;

                     var str = record.get('AyohaLoyaltyProgram');

                     if (str == "Loyalty Event") {
                         _value = 'resources/icons/iwillattending.png'
                        
                        
                     }

                     if (str == "Loyalty Voucher") {
                         _value = 'resources/icons/Voucherloylty.png'

                     }

                     if (str == "Loyalty Contest") {
                         _value = 'resources/icons/entercontest01.png'
                     }

                   
                     if (str == "Point Loyalty Card") {
                         _value = 'resources/icons/PointLoyaltyCardi.png'
                                                   
                     }
                     if (str == "Stamp Loyalty Card") {
                         _value = 'resources/icons/AyohaStampCardPurple.png'
                     }
                     if (str == "Loyalty Discount") {
                         _value = 'resources/icons/voucheri.png'
                     }
                  

                     return _value;


                 }
             },
            
        ]
    }
});