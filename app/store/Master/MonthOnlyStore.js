Ext.define("BuskartApp.store.Master.MonthOnlyStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'ListofMonthOnlyStore',
    config: {
        model: 'BuskartApp.model.Master.MonthOnlyModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            //{ Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            { Month: 'January' },
            { Month: 'February' },
            { Month: 'March' },
            { Month: 'April' },
            { Month: 'May' },
            { Month: 'June' },
            { Month: 'July' },
            { Month: 'August' },
            { Month: 'September' },
            { Month: 'October' },
              { Month: 'November' },
            { Month: 'December' },

        ]
    }
});
