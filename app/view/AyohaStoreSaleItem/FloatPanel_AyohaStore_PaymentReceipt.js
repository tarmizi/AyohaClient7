Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentReceipt', {

});




var _FloatPanel_AyohaStore_PaymentReceipt;


var isFloatPanel_AyohaStore_PaymentReceiptOpen = 'N';





function FloatPanel_AyohaStore_PaymentReceipt() {

    _FloatPanel_AyohaStore_PaymentReceipt =
     Ext.create('Ext.Container', {
         zIndex: 360,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         height: '100%',
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_PaymentReceiptID',
         draggable: false,
         modal: false,

         centered: true,
         //bottom: 64,         
         //modal: true,
        // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px none;background-color:white;',
         style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',

         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {

         //                if (e.direction == "left") {
         //                    _FloatPanel_AyohaStore_PaymentReceipt.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                } if (e.direction == "right") {
         //                    _FloatPanel_AyohaStore_PaymentReceipt.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                }
         //                isFloatPanel_AyohaStore_PaymentReceiptOpen = 'N';
         //                RemovePages(_FloatPanel_AyohaStore_PaymentReceipt, "isFloatPanel_AyohaStore_PaymentReceiptOpen");
         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",
         //items: {




         //    //  margin:'-50 0 0 0',
         //    //height: 150,
         //    //width: 200,

         //    height: '100%',
         //    width: '100%',
         //    xtype: 'container',
         //    // style: 'border-bottom:0px solid;background-color:#353839;',
         //   // style: 'border-bottom:0px solid;background-color:transparent;',
         //    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
         //    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //    layout: {
         //        type: 'vbox',
         //        pack: 'start',
         //        align: 'center'

         //    },

         //    items: [








            

            

         //    ]




         //}



         items: {
         xtype: 'container',
         height: '100%',
         width: '100%',
         layout: {
             type: 'vbox',
             pack: 'center',
             align: 'center'
         },
         // style: ' background-color:transparent;',
         style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
         items: [


               {

                   width: '100%',
                   height: '100%',
                   hidden: true,
                   id: 'htmlPrintPaymentReceipt',
                   html: 'hello'


               },



                               {

                                   xtype: 'container',
                                   style: 'border-bottom:1px solid white;border-top:1px solid white;border-left:1px solid white;border-right:1px solid white;background-color:white;border-radius:5px 5px 5px 5px;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   height: 90,
                                   width: 120,

                                   items: [
                                       {
                                           id: 'htmlIcon',
                                           height: 52,
                                           width: '100%',
                                           margin: '5 0 0 0',
                                           html: '<div style="width:100%;height:52px;text-align:center;"><img src="resources/icons/loadingBlade01.gif" style="width:52px;height:52px;"/></div>',
                                       },
                                    {
                                        //xtype: 'button',
                                        ////   align: 'stretch',
                                        //height: 32,
                                        //width: 92,
                                        id: 'htmlTxt',
                                        // ui: 'plain',
                                        width: '100%',
                                        margin: '5 0 0 0',
                                        html: '<div style="width:100%;text-align:center;font-size:11px;color:black;font-weight:bold;">Generate Receipt..</div>',
                                    }

                                   ]

                               },




         ]
     },



     });
    return _FloatPanel_AyohaStore_PaymentReceipt;





}




function FloatPanel_AyohaStore_PaymentReceipt_PrintHtml() {


  

    _DataStore_AyohaStorePaymentGenerateReceiptStore.getProxy().setExtraParam('OrderNo', globalFloatPanel_AyohaStore_CheckOut_OrderNo);
    _DataStore_AyohaStorePaymentGenerateReceiptStore.getProxy().setExtraParam('ItemCartCode', globalFloatPanel_AyohaStore_Cart_ItemCartCode);
    _DataStore_AyohaStorePaymentGenerateReceiptStore.getProxy().setExtraParam('PaymentNo', localStorage.getItem("PaymentNo"));
    _DataStore_AyohaStorePaymentGenerateReceiptStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStorePaymentGenerateReceiptStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
    _DataStore_AyohaStorePaymentGenerateReceiptStore.getProxy().setUrl(GetAPIurl() + '/AyohaStorePayment/AyohaStorePaymentGenerateReceipt');
   // _DataStore_AyohaStorePaymentGenerateReceiptStore.load();



    _DataStore_AyohaStorePaymentGenerateReceiptStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                var tbltdDesc = "";
                var extraRows = "";    
              //  var Store = records[0]; // Access only the first record
                var count = parseInt(_DataStore_AyohaStorePaymentGenerateReceiptStore.getCount());

        var Stores = _DataStore_AyohaStorePaymentGenerateReceiptStore.getAt(0);
        for (i = 0; i < count; i++) {

            var Store = _DataStore_AyohaStorePaymentGenerateReceiptStore.getAt(i);

            var Amt = parseInt(Store.get('ItemQuantity')) * parseFloat(Store.get('ItemSumPrice'));

            tbltdDesc += '<tr>' +
'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-left: 2px none black;">' + Store.get('Row_num') + '</td>' +
'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border: 2px solid #ffffff;" colspan="7">' + Store.get('ItemName') + '</td>' +
'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border: 2px solid #ffffff;" colspan="2">' + Store.get('ItemQuantity') + '</td>' +
'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border: 2px solid #ffffff;" colspan="2">' + Store.get('ItemSumPrice') + '</td>' +
'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-right: 2px none black;" colspan="2">' + Amt.toFixed(2) + '</td>' +
'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
'</tr>';

        }

        var ii = 0;
        var rowsCount = 1;

        for (ii = 0; ii < rowsCount; ii++) {


            extraRows += '<tr>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-left: 2px none black;">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border: 2px solid #ffffff;" colspan="7">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border: 2px solid #ffffff;" colspan="2">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border: 2px solid #ffffff;" colspan="2">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-right: 2px none black;" colspan="2">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
            '</tr>';




            if (ii == 0) {



                extraRows += '<tr>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-left: 2px none black;border-bottom: 2px solid black;">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-bottom: 2px solid black;" colspan="7">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-bottom: 2px solid black;" colspan="2">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-bottom: 2px solid black;" colspan="2">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 3px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: center; vertical-align: top; border-right: 2px none black;border-bottom: 2px solid black;" colspan="2">&nbsp;</td>' +
            '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
            '</tr>';


            }
        }










        var tandc = "Note to seller/sender:" + Stores.get('NoteToSeller');
        var invoiceFlatInvoiceCompanyNameToUpperCase = Stores.get('PayerName').toUpperCase();
        var CheckInvoiceStatus = Stores.get('PaymentStatus');
        var CheckInvoiceStatusResult;
        if (CheckInvoiceStatus == 'Unpaid') {
            CheckInvoiceStatusResult = '<font size="4" color="red"><b><u>UNPAID</u><b></font>';
        } if (CheckInvoiceStatus == 'PartiallyPaid') {
            CheckInvoiceStatusResult = '<font size="4" color="orange"><b><u>PARTIALLY PAID</u><b></font>';
        } if (CheckInvoiceStatus == 'FullPaid') {
            CheckInvoiceStatusResult = '<font size="4" color="green"><b><u>FULL PAID</u><b></font>';
        } if (CheckInvoiceStatus == 'Cancel') {
            CheckInvoiceStatusResult = '<font size="4" color="red"><b><u>CANCEL</u><b></font>';
        }
        var modifiedAddress = Stores.get('EnterpriseAddress').replace(/,/g, "<br>");
        //var mywindow = window.open('', 'Print', 'height=400,width="100%",resizable=0');
        var mywindow;
        mywindow = '<html><head><title>Cloud-Receipts.Com -' + Stores.get('EnterpriseName') + '</title><style type="text/css" media="print">footer { text-align: center;}@media print { footer { position: fixed;bottom: 0;width:100%}body {-webkit-print-color-adjust: exact;}@page { margin-left: 0px; margin-right: 0px; margin-top: 0px; margin-bottom: 0px; margin: 0;-webkit-print-color-adjust: exact;}}</style></head>' +
      
     '<body>' +
        //mywindow = '<table id="myPrint" class="tg" style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; width: 925px;"><colgroup><col style="width: 20px;" /><col style="width: 41px;" /><col style="width: 20px;" /><col style="width: 20px;" /><col style="width: 20px;" /><col style="width: 20px;" /><col style="width: 40px;" /><col style="width: 33px;" /><col style="width: 306px;" /><col style="width: 56px;" /><col style="width: 35px;" /><col style="width: 29px;" /><col style="width: 115px;" /><col style="width: 123px;" /><col style="width: 21px;" /><col style="width: 26px;" /></colgroup>' +
       '<table id="myPrint"  class="tg" style="border-collapse: collapse; border-spacing: 0; table-layout: fixed; width: 100%;"><colgroup><col style="width: 20px;" /><col style="width: 41px;" /><col style="width: 20px;" /><col style="width: 20px;" /><col style="width: 20px;" /><col style="width: 20px;" /><col style="width: 40px;" /><col style="width: 33px;" /><col style="width: 306px;" /><col style="width: 56px;" /><col style="width: 35px;" /><col style="width: 29px;" /><col style="width: 115px;" /><col style="width: 123px;" /><col style="width: 21px;" /><col style="width: 26px;" /></colgroup>' +

     '<tr>' +
     '<th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</th>' +
     '<th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6" rowspan="2"><img style="display: inline-block; width: 172px; height: 132px; margin-top: 0px;" src="' + Stores.get('EnterpriseLogoPath') + '" alt="" /></th>' +
     '<th style="font-family: Arial, sans-serif; font-size: 34px; font-weight: normal; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: bottom; border: 1px solid #ffffff;" colspan="7"><span style="font-weight: bold;">' + Stores.get('EnterpriseName') + '</span></th>' +
     '<th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</th>' +
     '<th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</th>' +
     '</tr>' +
     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="7">&nbsp;' + Stores.get('EnterpriseAddress') + '.<br />Tel:' + Stores.get('EnterprisePhoneNo') + ' | Email:' + Stores.get('EnterpriseEmail') + '| Website:' + Stores.get('EnterpriseWebsite') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="11">_____________________________________________________________________________________________________________</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 32px; padding: 0px 0px; overflow: hidden; word-break: normal; text-decoration: underline; background-color: #ffffff; text-align: center; vertical-align: top; border: 1px solid #ffffff;" colspan="3"><span style="font-weight: bold;">INVOICE</span></td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 0px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="11">INVOICE TO:</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;">Invoice No:</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="3">' + Stores.get('PaymentNoDisplay') + '</td>' +
     '</tr>' +
     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 15px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="8"><br /><b>' + invoiceFlatInvoiceCompanyNameToUpperCase + '</b><br />' + Stores.get('DeliveryAddress_StreetName') + '<br />' + Stores.get('DeliveryAddress_Postcode') + '<br />' + Stores.get('DeliveryAddress_Town') + '<br />' + Stores.get('DeliveryAddress_StateCode') + '<br />' + Stores.get('DeliveryAddress_CountryCode') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="4">Invoice Date:<br />Payment Method:<br></td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="2">' + Stores.get('CreatedDate') + '<br />' + Stores.get('PaymentMethod') + '<br><font size="4" color="red"><b><u>' + CheckInvoiceStatusResult + '</u><b></font></td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 15px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="13"><br /><span style="font-weight: bold;">Attention:MR/MRS ' + Stores.get('PayerName') + '</span></td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 15px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="14"><br /><span style="font-weight: bold; text-decoration: underline;">Re: Charges for order no:' + Stores.get('DisplayOrderNo') + '</span><br /><br /></td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +


     //'<tr>' +
     //'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     //'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #656565; color: #ffffff; text-align: center; vertical-align: top; border: 1px solid #ffffff;">No</td>' +
     //'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; background-color: #656565; color: #ffffff; text-align: center; vertical-align: top; border: 1px solid #ffffff;" colspan="7"><span style="font-weight: bold;">Descriptions</span></td>' +
     //'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #656565; color: #ffffff; text-align: center; vertical-align: top; border: 1px solid #ffffff;" colspan="2">Qty</td>' +
     //'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #656565; color: #ffffff; text-align: center; vertical-align: top; border: 1px solid #ffffff;" colspan="2">Price(RM)</td>' +
     //'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #656565; color: #ffffff; text-align: center; vertical-align: top; border: 1px solid #ffffff;" colspan="2">Amount(RM)</td>' +
     //'<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     //'</tr>' +

      '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: white; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: white; color: black; text-align: center; vertical-align: top; border-bottom: 2px solid black;">No</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: white; color: black; text-align: center; vertical-align: top; border-bottom: 2px solid black;" colspan="7"><span style="font-weight: bold;">Descriptions</span></td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: white; color: black; text-align: center; vertical-align: top; border-bottom: 2px solid black;" colspan="2">Qty</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: white; color:black; text-align: center; vertical-align: top; border-bottom: 2px solid black;" colspan="2">Price(RM)</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: white; color: black; text-align: center; vertical-align: top; border-bottom: 2px solid black;" colspan="2">Amount(RM)</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: white; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +

       tbltdDesc +
       extraRows +

     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="6">SubTotal:&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="4"><span style="font-weight: bold;">(RM)&nbsp;' + Stores.get('SubTotal') + '</span></td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +

         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +

     //'<td style="font-family: Arial, sans-serif; font-size: 10px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6" rowspan="58">' +
     //tandc +
     //'</td>' +
      '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="6">Tax:&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="4">(RM)&nbsp;0.00</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
       '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
      '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="6">Delivery Charge(' + Stores.get('DeliveryName') + '):&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top;border-bottom: 2px none black;" colspan="4">(RM)&nbsp; ' + Stores.get('DeliveryCharge') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +          
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
      '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="6">Membership Discount(NA):&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top;border-bottom: 2px none black;" colspan="4">(RM)&nbsp;' + Stores.get('MembershipDiscount') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
      '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
      '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="6">Voucher Discount(NA):&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top;border-bottom: 2px none black;" colspan="4">(RM)&nbsp;' + Stores.get('VoucherDiscount') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
      '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 18px; padding: 6px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top;border-bottom: 2px solid black;border-top: 2px solid black;" colspan="6">GRAND TOTAL:&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 18px; padding: 6px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top;border-bottom: 2px solid black;border-top: 2px solid black;" colspan="4">(RM)&nbsp;' + Stores.get('GrandTotal') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
      '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
      '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="6">M.Point Earn:&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top;border-bottom: 2px none black;" colspan="4">&nbsp;&nbsp;' + Stores.get('MerchantPointEarn') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
       '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
      '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: right; vertical-align: top; border: 1px solid #ffffff;" colspan="6">A.Point Earn:&nbsp;&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 16px; padding: 5px 0px; overflow: hidden; word-break: normal; font-weight: bold; background-color: #ffffff; text-align: left; vertical-align: top;border-bottom: 2px none black;" colspan="4">&nbsp;&nbsp;' + Stores.get('AyohaPointEarn') + '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
     '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="3">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +
      

     '<td style="font-family: Arial, sans-serif; font-size: 10px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="6" rowspan="58">' +
     tandc +
     '</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="2">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="2">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="2">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;" colspan="2">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +

         '<tr>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '<td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px 0px; overflow: hidden; word-break: normal; background-color: #ffffff; text-align: left; vertical-align: top; border: 1px solid #ffffff;">&nbsp;</td>' +
     '</tr>' +
     '<tr><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: bottom; height: 51px; width: 603px;" colspan="16"> <footer style="background-color: #656565; color: #ffffff;margin-left: -8px;margin-top: 10px;border: 1px none black;">' + Stores.get('EnterpriseName').toUpperCase() + '.&nbsp;' + Stores.get('EnterpriseTagLine') + '</footer></td></tr>' +
    // '</tbody>' 
     '</table>' +
     '</body></html>';

        
        //setTimeout(function () { printJS('myPrint', 'html') }, 5000);
      //  alert(mywindow);
        setTimeout(function () { Ext.getCmp('htmlPrintPaymentReceipt').setHtml(mywindow); }, 500);
        
        setTimeout(function () { printJS('myPrint', 'html'); FloatPanel_AyohaStore_PaymentReceiptHide(); }, 500);
               




                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });






 


    // var task = Ext.create('Ext.util.DelayedTask', function () {
      
    // });
    // task.delay(1000);









    // return true;




}






function FloatPanel_AyohaStore_PaymentReceiptShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_PaymentReceipt);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_PaymentReceipt());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_PaymentReceiptHide()");
    isFloatPanel_AyohaStore_PaymentReceiptOpen = 'Y';
    FloatPanel_AyohaStore_PaymentReceipt_PrintHtml();









}


function FloatPanel_AyohaStore_PaymentReceiptHide() {


    if (isFloatPanel_AyohaStore_PaymentReceiptOpen == 'Y') {
        _FloatPanel_AyohaStore_PaymentReceipt.hide(); isFloatPanel_AyohaStore_PaymentReceiptOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_PaymentReceiptHide()");
    }
}


