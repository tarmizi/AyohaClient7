Ext.define("BuskartApp.store.Master.StateStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'StateStoreID',
    config: {
        model: 'BuskartApp.model.Master.StateModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            //{ Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            { State: 'Perlis' },
            { State: 'Kedah' },
            { State: 'Pulau Pinang' },
            { State: 'Perak' },
            { State: 'Selangor' },
            { State: 'Negeri Sembilan' },
            { State: 'Melaka' },
            { State: 'Johor' },
            { State: 'Pahang' },
            { State: 'Terengganu' },
            { State: 'Kelantan' },
            { State: 'Sarawak' },
            { State: 'Sabah' },
            { State: 'W/Persekutuan Putrajaya' },
            { State: 'W/Persekutuan Kuala Lumpur' },
            { State: 'W/Persekutuan Labuan' },

        ]
    }
});
