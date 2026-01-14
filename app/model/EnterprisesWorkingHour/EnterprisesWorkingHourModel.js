Ext.define('BuskartApp.model.EnterprisesWorkingHour.EnterprisesWorkingHourModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'EnterpriseAccNo',
      'isWorkingDay',
      'WorkingDay',
      'WorkingHourStart',
      'WorkingHourStartAMPM',
      'WorkingHourEnd',
      'WorkingHourEndAMPM',
      'RowStatus',
      'Note',
	  'WorkingDaySequence',
      'WorkingMode',
        {
            name: 'ModifiedisWorkingDay',
            convert: function (value, record) {
                var _value;
                var floatTransactionAmount = parseFloat(record.get('TransactionAmount'));
                var isWorkingDay = record.get('isWorkingDay');
                var WorkingDay = record.get('WorkingDay');
                var WorkingHourStart = record.get('WorkingHourStart');

                var WorkingHourStartAMPM = record.get('WorkingHourStartAMPM');
                var WorkingHourEnd = record.get('WorkingHourEnd');


                var WorkingHourEndAMPM = record.get('WorkingHourEndAMPM');
                var Note = record.get('Note');
                var WorkingMode = record.get('WorkingMode');
                if (WorkingMode == "inPremise")
                {
                    if (isWorkingDay == 'Y') {
                        _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:100%;text-align:left;margin:2px 0px 0px 0px;">' + WorkingDay + ' (' + WorkingHourStart + ' ' + WorkingHourStartAMPM + '-' + WorkingHourEnd + ' ' + WorkingHourEndAMPM + ')</div>';
                    } else {
                        _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:100%;text-align:left;margin:2px 0px 0px 0px;color:green;"><b>' + WorkingDay + ' (Holiday)</b></div>';
                    }
                } else {
                    if (isWorkingDay == 'Y') {
                        _value = '<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:100%;text-align:left;margin:2px 0px 0px 0px;"><b> Open 24/7 </b></div>';
                    } else {
                        _value = '<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:100%;text-align:left;margin:2px 0px 0px 0px;color:green;"><b>' + WorkingDay + ' (Holiday)</b></div>';
                    }
                }
               




                return _value;
            }
        },
        ]
    }
});