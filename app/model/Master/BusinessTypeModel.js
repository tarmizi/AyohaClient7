//Ext.define('BuskartApp.model.Master.BusinessTypeModel', {
//    extend: 'Ext.data.Model',
//    config: {
//        fields: [
//            'ID',
//                 'BusinessType',
//                 'BusinessTypeCode',
//                 'RowStatus',
//                 'BusinessTypeGroup'
//        ]
//    }
//});

Ext.define('BuskartApp.model.Master.BusinessTypeModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'BusinessTypeGroupCode',
                 'BusinessTypeGroups',
                 'BusinessTypeGroupsIconPath',
                 'Counted',
                  {
                      name: 'ModifiedBusinessTypeGroupsIconPath',
                      convert: function (value, record) {
                          var _value;
                         
                          var BusinessTypeGroupsIconPath = record.get('BusinessTypeGroupsIconPath');
                          _value = BusinessTypeGroupsIconPath.replace("White", "Purple");

                          return _value
                      }
                  },
        ]
    }
});