Ext.define('BuskartApp.model.AyohaUserProfile.AyohaUserProfile_BankAccountModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
     'ID',
      'SubscriberAccNo',
      'BankAccountNo',
      'BankName',
      'BankAccountType',
      'BankAccountName',
      'eWalletCashOutChargePersent',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
      {
          name: 'ModifiedBankName',
          convert: function (value, record) {
              var _value;

              // var MerchantLinkType = record.get('MerchantLinkType').split("-");
              var BankName = record.get('BankName');


              if (BankName == "AFFIN BANK") {
                  _value = 'resources/icons/BankIcon/AffinBank.jpg';

              }
              if (BankName == "AFFIN ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/AffinBankIslamic.jpg';

              }
              if (BankName == "ALLIANCE BANK") {
                  _value = 'resources/icons/BankIcon/AllianceBank.jpg';

              }
              if (BankName == "ALLIANCE ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/AllianceIslamikBank.jpg';

              }
              if (BankName == "AM BANK") {
                  _value = 'resources/icons/BankIcon/Ambank.jpg';

              }
              if (BankName == "AM ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/AmIslamikBank.jpg';

              }
              if (BankName == "BANK ISLAM") {
                  _value = 'resources/icons/BankIcon/BankIslam.jpg';

              }
              if (BankName == "BANK MUAMALAT") {
                  _value = 'resources/icons/BankIcon/BankMuamalat.jpg';

              }
              if (BankName == "CIMB BANK") {
                  _value = 'resources/icons/BankIcon/CimbBank.jpg';

              }
              if (BankName == "CIMB ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/CimbBankIslamik.jpg';

              }
              if (BankName == "HONG LEONG BANK") {
                  _value = 'resources/icons/BankIcon/HongLeongBank.jpg';

              }
              if (BankName == "HONG LEONG ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/HongLeongBankIslamik.jpg';

              }
              if (BankName == "MAYBANK") {
                  _value = 'resources/icons/BankIcon/Maybank.jpg';

              }
              if (BankName == "MAYBANK ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/MaybankIslamik.jpg';

              }
              if (BankName == "OCBC BANK") {
                  _value = 'resources/icons/BankIcon/Ocbcbank.jpg';

              }
              if (BankName == "OCBC AL AMIN BANK") {
                  _value = 'resources/icons/BankIcon/OcbcbankIslamik.jpg';

              }
              if (BankName == "PUBLIC BANK") {
                  _value = 'resources/icons/BankIcon/PublicBank.jpg';

              }
              if (BankName == "PUBLIC ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/PublicBankIslamik.jpg';

              }
              if (BankName == "RHB BANK") {
                  _value = 'resources/icons/BankIcon/RhbBank.jpg';

              }
              if (BankName == "RHB ISLAMIC BANK") {
                  _value = 'resources/icons/BankIcon/RhbBankIslamik.jpg';

              }
              if (BankName == "STANDARD CHARETED BANK") {
                  _value = 'resources/icons/BankIcon/StandardCharteredBank.jpg';

              }
              if (BankName == "STANDARD CHARTERED SAADIQ") {
                  _value = 'resources/icons/BankIcon/StandardCharteredBankIslamik.jpg';

              }
              if (BankName == "UOB BANK") {
                  _value = 'resources/icons/BankIcon/UOBBank.jpg';

              }

              return _value;
          }
      },
        ]
    }
});

