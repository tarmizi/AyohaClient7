Ext.define('BuskartApp.model.Customer.CustomerModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'CustomerId',
                 'CustomerName',
                 'CustomerStatusId',
                 'CustomerNumber',
                 'IdentityNumber',
                 'Address',
                 'PhoneNumber',
                 'Email',
                 'UTCRegistration',
                 'UserDetailId',
                 'VehicleId',
                 'PlateNumber',
                 'VehicleModelId',
                 'CustomerId',
                 'VehicleImage',
                 'Model',
                 'Type'
        ]
    }
});