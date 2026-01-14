Ext.define('BuskartApp.model.ChargeDeliverySetting.ChargeDeliverySettingModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'ChargeSettingCode',
                 'EnterpriseAccNo',
                 'DeliveryName',
                 'ChargeTypeCode',
                 'FreeDeliveryConditionCode',
                 'Over_Or_Equal',
                 'IsEnableDeliveryChargeSetting',
                 'CreatedBy',
                 'CreatedDate',
                 'ModifiedBy',
                 'ModifiedDate',
                 'RowStatus',
                 'DeliveryRate_Charge',
                 'Locations',
                 'ChargeTypes',
                 'FreeCondition'
        ]
    }
});