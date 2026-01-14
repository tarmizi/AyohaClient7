Ext.define('BuskartApp.model.AyohaStoreOrder.AyohaStoreOrderPeding_MainDashboardModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'CreatedDate',
      'GrandTotal',
      'AyohaPointEarn',
      'TotalStampEarn',
      'MembershipCardCode',
      'ItemCartCode',
      'OrderNo',
      'OrderStatus',
      'ItemName',
      'ItemQuantity',
      'TotalQuantity',
      'Row_num',
      'EnterpriseName',
      'EnterpriseLogo',
      'EnterpriseAddress',
      {
        name: 'ModifiedOrderStatus',
        convert: function (value, record) {
            var _value;

            var OrderStatus = record.get('OrderStatus');
            if (OrderStatus == 'OrderPaid') {
                _value = '<span style="background-color: blue; color: white; padding: 2px 8px;margin:-15px 20px 0px 0px;' +
                'border-radius: 6px; font-size: 9px; font-weight: 600;text-align:center;width:90px">Order Paid</span>';
               

            } else {
                _value = '<span style="background-color: red; color: white; padding: 2px 8px;margin:-15px 20px 0px 0px;' +
                'border-radius: 6px; font-size: 9px; font-weight: 600;text-align:center;width:90px">Order UnPaid</span>';

            }



            return _value;
        }
    },   
        ]
    }
});
