Ext.define("BuskartApp.store.Master.YearOnlyStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'ListofMarkerStore',
    config: {
        model: 'BuskartApp.model.Master.YearOnlyModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            //{ Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            { Year: '2021' },
            { Year: '2022' },
            { Year: '2023' },
            { Year: '2024' },
            { Year: '2025' },
            { Year: '2026' },
            { Year: '2027' },
            { Year: '2028' },
            { Year: '2029' },
            { Year: '2030' },

        ]
    }
});
