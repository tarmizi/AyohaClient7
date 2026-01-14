Ext.define('BuskartApp.model.Merchantperk.Merchantperk_ViewModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ItemType',
                 'PrimaryCode',
                 'SecondaryCode',
                 'Name',
                 'ImagePath',
                 'Amount',
                 'Percentage',
                 'Points',
                 'Fees',
                 'Description',
                 'Terms',
                 'EventType',
                 'MembershipCardCode',
                 'StartDate',
                 'StartTime',
                 'EndDate',
                 'EndTime',
                 'IsEndDateRequired',
                  'EnterpriseAccNo',
                 'MembershipCardCode',
                 'Status',
                 'CreatedDate',
                 'EnterpriseLogo',
                 'EnterpriseName',
                  'EnterpriseTagLine',
                 'EnterpriseCountStar',
                 'TotalReviewer',
                 'BusinessMode',
                 'EnterpriseDescription',
                 'SearchCol',
            //      {
            //       name: 'ModifiedName',
            //       convert: function (value, record) {
       
            //           var _value;
            //           var str = record.get('Name');
            //           if(str){
            //             if(str.length > 18){
            //               _value = str.substring(0, 15) + '...';
            //             }else{
            //               _value = str;
            //             }
            //           }else{
            //             _value = 'No Name';
            //           }
                    
            //           return _value;
            //       }
            //   },

                {
      name: 'ModifiedName',
      depends: ['Name'],
      calculate: function (data) {
        var str = data.Name;
        if (!str) return 'No Name';
        str = String(str);
        return (str.length > 18) ? (str.substring(0, 15) + '...') : str;
      }
    },

    {
      name: 'ModifiedImagePath_Dashboard',
      depends: ['ItemType', 'ImagePath'],
      calculate: function (data) {
        var type = data.ItemType;
        var ImagePath = data.ImagePath || '';

        if (type === "Stamp") {
          var v = ImagePath;
          v = v.replace("width:70px", "width:100%");
          v = v.replace("height:70px", "height:100%");
          v = v.replace("font-size: 35px;", "font-size: 45px;");
          v = v.replace("margin:7px 0px 0px 0px", "margin:-8px 0px 0px 0px");
          v = v.replace("margin:-90px 0px 0px 0px", "margin:-120px 0px 0px 0px");
          v = v.replace('size="3"', 'size="4"');
          v = v.replace("border-radius: 50px", "border-radius: 0px");
          return v;
        }

        return '<img src="' + ImagePath +
          '" alt="" style="width:100%; height:100%; object-fit:cover; display:block;" />';
      }
    },


            
                 {
                    name: 'ModifiedImagePath',
                    convert: function (value, record) {
         
                        var _value1;
                        var _value2;
                        var _value3;
                        var _value4;
                        var _value5;
                        var _value6;
                        var _value;
                        var str = record.get('ItemType');
                        var ImagePath = record.get('ImagePath');
                        if (str === "Stamp") {
                            _value1= ImagePath.replace("width:70px", "width:100%");
                            _value2=_value1.replace("height:70px", "height:250px");
                            _value3 = _value2.replace("font-size: 35px;", "font-size: 60px;");
                            _value4 = _value3.replace("margin:7px 0px 0px 0px", "margin:70px 0px 0px 0px")
                            _value5 = _value4.replace("margin:-90px 0px 0px 0px", "margin:-150px 0px 0px 0px")
                            _value6 = _value5.replace('size="3"', 'size="6"')
                            _value = _value6.replace("border-radius: 50px", "border-radius: 0px")
                            

                            
                        }else
                        {
                            _value = '<img src="'+ImagePath+'" alt="Pandan Butter Latte" style="width: 100%; height: auto; display: block;">';
                          
                        }
                        return _value;
                    }
                },
            //     {
            //       name: 'ModifiedImagePath_Dashboard',
            //       convert: function (value, record) {
       
            //           var _value1;
            //           var _value2;
            //           var _value3;
            //           var _value4;
            //           var _value5;
            //           var _value6;
            //           var _value;
            //           var str = record.get('ItemType');
            //           var ImagePath = record.get('ImagePath');
            //           if (str === "Stamp") {
            //               _value1= ImagePath.replace("width:70px", "width:100%");
            //               _value2=_value1.replace("height:70px", "height:100%");
            //               _value3 = _value2.replace("font-size: 35px;", "font-size: 45px;");
            //               _value4 = _value3.replace("margin:7px 0px 0px 0px", "margin:-8px 0px 0px 0px")
            //               _value5 = _value4.replace("margin:-90px 0px 0px 0px", "margin:-120px 0px 0px 0px")
            //               _value6 = _value5.replace('size="3"', 'size="4"')
            //               _value = _value6.replace("border-radius: 50px", "border-radius: 0px")
                          

                          
            //           }else
            //           {
            //               _value = '<img src="'+ImagePath+'" alt="Hari Malaysia Banner" style="width:100%; height:100%; object-fit:cover; display:block;" />';
                        
            //           }

            //           console.log('_value Dashboard ImagePath: ', _value);
            //           return _value;
            //       }
            //   },
                  {
                    name: 'ModifiedButtonBottomDisplay',
                    convert: function (value, record) {
                      var str = record.get('ItemType');

                     
                
                      // text hari berbaki
                      var Text = (DayLeft == null) ? '-' : (DayLeft < 0 ? 'Expired' : (DayLeft + ' days left'));
                      if (str === "Voucher") {
                        var VoucherName = record.get('Name');
                        var VoucherImgPath = record.get('ImagePath');
                        var EntitledVoucherEndDate = record.get('EndDate');
                       // var DayLeft = getDaysLeft(EntitledVoucherEndDate);
                       var DayLeft  = record.get('DayLeft');
                        var VoucherCode = record.get('PrimaryCode');
                        var VoucherAmount = record.get('Amount');
                        var VoucherTermAndCondition = record.get('Terms');
                        var MembershipCardCode = record.get('MembershipCardCode');
                        var EnterpriseCountStar = record.get('EnterpriseCountStar');
                        var EnterpriseAccNo = record.get('EnterpriseAccNo');
                        var TotalReviewer = record.get('TotalReviewer');
                  
                        // Kemas dalam payload dan encode — SELAMAT untuk attribute HTML
                        var payload = {
                          VoucherName,
                          VoucherImgPath,
                          EntitledVoucherEndDate,
                          DayLeft,
                          VoucherCode,
                          VoucherAmount,
                          VoucherTermAndCondition,
                          MembershipCardCode,
                          EnterpriseCountStar,
                          EnterpriseAccNo,
                          TotalReviewer
                        };



                       
                        var encoded = encodeURIComponent(JSON.stringify(payload));
                  
                        // Tiada inline JS, tiada backtick; data disimpan dalam data-voucher
                        return '' +
                          '<button type="button" class="voucher-btn" ' +
                          'data-voucher="' + encoded + '" ' +
                          'style="width:97%; background-image:linear-gradient(#ff00de75,#c800ffc9); background-color:#fac; color:white; border:none; padding:15px; border-radius:12px; font-size:14px; font-weight:bold; cursor:pointer; text-shadow:0 1px 1px rgba(0,0,0,0.2); box-shadow:0 4px 10px rgba(247,151,30,0.4); transition:transform 0.2s ease, box-shadow 0.2s ease;" ' +
                          'onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 12px rgba(247,151,30,0.5)\'" ' +
                          'onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 10px rgba(247,151,30,0.4)\'">' +
                          'View Membership Voucher' +
                          '</button>';
                      } else {

                        var MembershipCardCode = record.get('MembershipCardCode');
                        var EnterpriseCountStar = record.get('EnterpriseCountStar');
                        var EnterpriseAccNo = record.get('EnterpriseAccNo');
                        var TotalReviewer = record.get('TotalReviewer');

 // Kemas dalam payload dan encode — SELAMAT untuk attribute HTML
 var payload_perk = {    
    MembershipCardCode,
    EnterpriseCountStar,
    EnterpriseAccNo,
    TotalReviewer
  };



 
  var encoded_perk = encodeURIComponent(JSON.stringify(payload_perk));


                        return '' +
                          '<button type="button" class="voucher-btn" ' +
                          'data-perk="' + encoded_perk + '" ' +
                          'style="width:97%; background-image:linear-gradient(#ff00de75,#c800ffc9); background-color:#fac; color:white; border:none; padding:15px; border-radius:12px; font-size:14px; font-weight:bold; cursor:pointer; text-shadow:0 1px 1px rgba(0,0,0,0.2); box-shadow:0 4px 10px rgba(247,151,30,0.4); transition:transform 0.2s ease, box-shadow 0.2s ease;" ' +
                          'onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 12px rgba(247,151,30,0.5)\'" ' +
                          'onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 10px rgba(247,151,30,0.4)\'">' +
                          'View Membership Card' +
                          '</button>';
                      }
                    }
                  },
                  
                 {
                    name: 'ModifiedPercentage',
                    convert: function (value, record) {
         
                        var _value;
                        var str = record.get('ItemType');
                        _value = 'none';
                        if (str === "Discount") {
                            _value = 'block';
                        }
         
                        return _value;
                    }
                },
                {
                    name: 'ModifiedCampaignColor',
                    convert: function (value, record) {
         
                        var _value;
                        var str = record.get('ItemType');
                        _value = 'none';
                        if (str === "Discount") {
                            _value = '#9b59b6';
                        } if (str === "Voucher") {
                            _value = '#FF8C00';
                        }if (str === "Point") {
                            _value = '#1E90FF';
                        }if (str === "Stamp") {
                            _value = '#808000';
                        }if (str === "Contest") {
                            _value = '#5F9EA0';
                        }if (str === "Event") {
                            _value = '#32CD32';
                        }
         
                        return _value;
                    }
                },
                {
                  name: 'ModifiedCampaignName',
                  convert: function (value, record) {
       
                      var _value;
                      var str = record.get('ItemType');
                      _value = 'none';
                      if (str === "Discount") {
                          _value = '#9b59b6';
                      } if (str === "Voucher") {
                          _value = '#FF8C00';
                      }if (str === "Point") {
                          _value = '#1E90FF';
                      }if (str === "Stamp") {
                          _value = '#808000';
                      }if (str === "Contest") {
                          _value = '#5F9EA0';
                      }if (str === "Event") {
                          _value = '#32CD32';
                      }
       
                      return _value;
                  }
              },
                {
                    name: 'ModifiedVoucherDisplay',
                    convert: function (value, record) {
         
                        var _value;
                        var str = record.get('ItemType');
                      
                        if (str === "Voucher") {
                            _value = 'flex';
                         
                        }else
                        if (str === "Discount") {
                            _value = 'flex';
                         
                        }else
                        if (str === "Point") {
                            _value = 'flex';
                          
                        }else{
                            _value = 'none';
                          
                        }
                        return _value;
                    }
                },
                {
                  name: 'ModifiedAmount',
                  convert: function (value, record) {
       
                      var _value;
                      var Amount = record.get('Amount');
                      var Percentage = record.get('Percentage');
                      var Points = record.get('Points');
                      var str = record.get('ItemType');                     
                      if (str === "Discount") {
                          _value = noDecimals(Percentage)+'%';
                          
                      }else if (str === "Voucher") {
                          _value='<span style="font-size:14px; margin:0;">'+noDecimals(Amount)+'</span> <span style="font-size:12px; margin:0;">RM</span>';
                         // _value = '<div style="margin:1px 0px 0px 0px;font-size:12px">'+noDecimals(Amount)+'</div><br><div style="margin:-5px 0px 0px 0px;font-size:10px">RM</div>';
                       
                      }else if (str === "Point") {
                          _value='<span style="font-size:6px; margin:0;">Redeem</span><span style="font-size:12px; margin:0;">'+Points+'</span> <span style="font-size:6px; margin:0;">Points</span>';
                         // _value =Points;
                       
                      }
                      return _value;





                    
       
                     
                  }
              },
                {
                  name: 'ModifiedAmount_Dashboard',
                  convert: function (value, record) {
       
                      var _value='';
                      var Amount = record.get('Amount');
                      var Percentage = record.get('Percentage');
                      var Points = record.get('Points');
                      var str = record.get('ItemType');                     
                      if (str === "Discount") {
                         
                          _value = '<span style="font-size:10px; line-height:1;">'+noDecimals(Percentage)+'</span><span style="font-size:10px; line-height:1;">%</span>';
                          
                      }else if (str === "Voucher") {
                          //_value='<span style="font-size:14px; margin:0;">'+noDecimals(Amount)+'</span> <span style="font-size:12px; margin:0;">RM</span>';
                          _value = '<span style="font-size:10px; line-height:1;">'+noDecimals(Amount)+'</span><span style="font-size:10px; line-height:1;">RM</span>';
                       
                      }else if (str === "Point") {
                         // _value='<span style="font-size:6px; margin:0;">Redeem</span><span style="font-size:12px; margin:0;">'+Points+'</span> <span style="font-size:6px; margin:0;">Points</span>';
                          _value = '<span style="font-size:10px; line-height:1;">'+Points+'</span><span style="font-size:10px; line-height:1;">Redeem</span>';
                       
                      }
                      return _value;





                    
       
                     
                  }
              },

              {
                name: 'ModifiedtagMargin',
                convert: function (value, record) {
     
                    var _value;
                    var str = record.get('ItemType');
                    _value = 'margin:0px 0px 0px 0px';
                    if (str === "Stamp") {
                        _value = 'margin:-2px 0px 0px 0px';
                    }if (str === "Contest") {
                        _value = 'margin:-2px 0px 0px 0px';
                    }if (str === "Event") {
                        _value = 'margin:-2px 0px 0px 0px';
                    }
     
                    return _value;
                }
            },

              {
                name: 'Modified_DashboardHeight',
                convert: function (value, record) {
     
                    var _value='height:20px';
                    var Amount = record.get('Amount');
                    var Percentage = record.get('Percentage');
                    var Points = record.get('Points');
                    var str = record.get('ItemType');                     
                    if (str === "Discount") {
                       
                        _value = 'height:40px';
                        
                    }else if (str === "Voucher") {
                        //_value='<span style="font-size:14px; margin:0;">'+noDecimals(Amount)+'</span> <span style="font-size:12px; margin:0;">RM</span>';
                        _value = 'height:40px';
                     
                    }else if (str === "Point") {
                       // _value='<span style="font-size:6px; margin:0;">Redeem</span><span style="font-size:12px; margin:0;">'+Points+'</span> <span style="font-size:6px; margin:0;">Points</span>';
                        _value = 'height:40px';
                     
                    }
                    return _value;





                  
     
                   
                }
            },




                {
                    name: 'ModifiedTermAndDescription',
                    convert: function (value, record) {
         
                        var _value;
                        var Terms = record.get('Terms');
                        var Description = record.get('Description');
                        var str = record.get('ItemType');                     
                        if (str === "Discount") {
                            _value =limitWords(Terms, 20);
                            
                        }else if (str === "Voucher") {
                            _value =limitWords(Terms, 20);
                          
                        }else if (str === "Point") {
                            _value =limitWords(Description, 20);
                         
                        }else if (str === "Event") {
                            _value =limitWords(Description, 20);
                         
                        }else if (str === "Contest") {
                            _value =limitWords(Description, 20);
                         
                        }
                        return _value;





                      
         
                       
                    }
                }
        ]
    }
});


function toTwoDigitsNoDecimals(value) {
    const n = Number(String(value).replace(/[^\d.-]/g, '')); // strip RM etc.
    if (!Number.isFinite(n)) return "00";
    const i = Math.trunc(n); // drop decimal part
    return String(Math.abs(i)).padStart(2, '0').slice(-2); // "7.99" -> "07", "13.40" -> "13"
  }

  function noDecimals(value, { round = false } = {}) {
    const n = Number(String(value).replace(/[^\d.-]/g, '')); // strip "RM", commas, etc.
    if (!Number.isFinite(n)) return "0";
    const i = round ? Math.round(n) : Math.trunc(n); // pick rounding behavior
    return String(i); // no pad, so 2.00 -> "2"
  }


  // Potong teks ke maks 20 patah perkataan
function limitWords(text, maxWords = 20) {
    if (!text) return '';
    const words = String(text).trim().split(/\s+/);
    if (words.length <= maxWords) {
      // Jika pakai Ext JS, elok encode
      return (window.Ext && Ext.String) 
        ? Ext.String.htmlEncode(text)
        : text;
    }
    const shortText = words.slice(0, maxWords).join(' ');
    const encoded = (window.Ext && Ext.String) 
        ? Ext.String.htmlEncode(shortText)
        : shortText;
    return encoded + ' <span style="color:#1e90ff;">see more</span>';
  }

/**
 * getDaysLeft(enddate)
 * - Return: integer hari berbaki, boleh negatif; atau null jika input tak sah/kosong
 * - Terima: Date, number (ms/s), string ISO, 'YYYY-MM-DD', 'YYYY/MM/DD', 'DD/MM/YYYY', 'DD-MM-YYYY'
 * - Anggap tarikh tanpa masa sebagai hujung hari (23:59:59.999) waktu tempatan
 */
function getDaysLeft(enddate) {
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
  
    // 1) Kosong atau "null-like" string
    if (enddate == null) return null;
    if (typeof enddate === 'string') {
      const s = enddate.trim();
      if (!s) return null;
      const nullish = new Set([
        '0000-00-00', '0000-00-00 00:00:00', 'null', 'undefined', 'Invalid date'
      ]);
      if (nullish.has(s)) return null;
    }
  
    // 2) Parse selamat
    const parsed = _safeParseToDate(enddate);
    if (!parsed) return null;
  
    // 3) Kira hari
    const target = _toEndOfDayLocal(parsed);
    const now = new Date();
    const diffMs = target - now;
    return Math.ceil(diffMs / MS_PER_DAY);
  }
  
  // --- helpers ---
  function _safeParseToDate(value) {
    // Date instance
    if (value instanceof Date) {
      const t = value.getTime();
      return Number.isNaN(t) ? null : new Date(t);
    }
  
    // Number atau string angka (ms atau seconds)
    if (typeof value === 'number' || (typeof value === 'string' && /^[+-]?\d+(\.\d+)?$/.test(value.trim()))) {
      const n = Number(value);
      if (!Number.isFinite(n)) return null;
      // Heuristik: < 1e12 dianggap seconds (Unix), selainnya ms
      const ms = Math.abs(n) < 1e12 ? n * 1000 : n;
      const d = new Date(ms);
      return Number.isNaN(d.getTime()) ? null : d;
    }
  
    if (typeof value === 'string') {
      const s = value.trim();
  
      // YYYY-MM-DD atau YYYY/MM/DD
      let m = /^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/.exec(s);
      if (m) {
        const [, y, mo, d] = m.map(Number);
        const dt = new Date(y, mo - 1, d);
        return _validYMD(dt, y, mo, d) ? dt : null;
      }
  
      // DD/MM/YYYY atau DD-MM-YYYY (format biasa MY)
      m = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(s);
      if (m) {
        const [ , d, mo, y ] = m.map(Number);
        const dt = new Date(y, mo - 1, d);
        return _validYMD(dt, y, mo, d) ? dt : null;
      }
  
      // ISO / lain-lain yang disokong native Date
      const iso = new Date(s);
      if (!Number.isNaN(iso.getTime())) return iso;
    }
  
    // Tak boleh parse
    // console.warn('getDaysLeft: invalid date input', value);
    return null;
  }
  
  function _validYMD(dt, y, mo, d) {
    return dt.getFullYear() === y && dt.getMonth() === (mo - 1) && dt.getDate() === d;
  }
  
  function _toEndOfDayLocal(d) {
    const out = new Date(d.getTime());
    out.setHours(23, 59, 59, 999);
    return out;
  }
  

  // Safe untuk letak nilai sebagai argumen string JS dalam onclick (single-quoted)
function jsStr(v) {
    if (v == null) return 'null';         // atau return "''" jika nak string kosong
    return "'" + String(v)
      .replace(/\\/g, '\\\\')             // backslash
      .replace(/'/g, "\\'")               // single quote
      .replace(/\r/g, '\\r')              // CR
      .replace(/\n/g, '\\n')              // LF
      .replace(/\u2028/g, '\\u2028')      // line sep
      .replace(/\u2029/g, '\\u2029') + "'"; // para sep
  }
  


  // Delegation: cari button yang ada data-voucher dan baca payloadnya
document.addEventListener('click', function (e) {
    const btn = e.target.closest('button[data-voucher]');
    if (!btn) return;
  
    try {
      const payload = JSON.parse(decodeURIComponent(btn.dataset.voucher));
      // Call fungsi asal anda dengan data yang selamat
      FloatPanel_AyohaRewardVoucherDetailShow_MerchantPerks(
        payload.VoucherName,
        payload.VoucherImgPath,
        payload.EntitledVoucherEndDate,
        payload.DayLeft,
        payload.VoucherCode,
        payload.VoucherAmount,
        payload.VoucherTermAndCondition,
        payload.MembershipCardCode,
        payload.EnterpriseCountStar,
        payload.EnterpriseAccNo,
        payload.TotalReviewer
      );
    } catch (err) {
      console.error('Invalid voucher payload:', err, btn.dataset.voucher);
    }
  });
  


    // Delegation: cari button yang ada data-voucher dan baca payloadnya
document.addEventListener('click', function (e) {
    const btn = e.target.closest('button[data-perk]');
    if (!btn) return;
    
    try {
      const payload = JSON.parse(decodeURIComponent(btn.dataset.perk));
      // Call fungsi asal anda dengan data yang selamat
      FloatPanel_AyohaEnterpriseRewardItem_MembershipCardLoadByMembershipCardCodeStore(       
        payload.MembershipCardCode,
        payload.EnterpriseCountStar,
        payload.EnterpriseAccNo,
        payload.TotalReviewer
      );
    } catch (err) {
      console.error('Invalid membeship payload:', err, btn.dataset.perk);
    }
  });