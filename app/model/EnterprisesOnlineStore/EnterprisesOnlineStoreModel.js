Ext.define('BuskartApp.model.EnterprisesOnlineStore.EnterprisesOnlineStoreModel', {
    extend: 'Ext.data.Model',
   
        fields: [
      'EnterpriseAccNo',
      'OnlineStoreCode',
      'OnlineStoreURL',
      'OnlineStoreName',
      'OnlineStoreIconPath'
      ,{
        name: 'ModifiedOnlineStoreName',
         convert: function (value, record) {
             var _value = ""



             var name = record.get('OnlineStoreName');
             if (containsAyoha(name)) {
              _value = 'OFFICIAL'
             } else {
              _value = 'EXTERNAL'
             }





            

             return _value;
         }
     },
        ]
   
});





function containsAyoha(text){
  return String(text || '').toLowerCase().includes('ayoha');
}