Ext.define("BuskartApp.store.Master.CountryStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'CountryStoreID',
    config: {
        model: 'BuskartApp.model.Master.CountryModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            //{ Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            { Country: 'MALAYSIA' },
            { Country: 'INDONESIA' },
            { Country: 'SINGAPURA' },
            { Country: 'BRUNEI' },
            { Country: 'THAILAND' },
        ]
    }
});
