// Returns a theme color style string for use in ExtJS component 'style' property
function ayohaThemeColor_Body() {
   // return "background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);";
  
   return "background-color:  white";
  // return "background-color: #F6F7FB";
     return "background-color: #FAF5FF;";
    //  #F3F4F6
      return "background: linear-gradient(180deg, #FFF1F9 50%, #F3E8FF 50%);"
}

// Expose globally for usage in other files
if (typeof window !== 'undefined') {
    window.ayohaThemeColor_Body = ayohaThemeColor_Body;
}





function ayohaThemeColor_TitleTextColor(Title){
   
    var value="<div style=\"color:#3A0ca3;text-align: left;font-size:18px;width:100%;margin:0px 0px 0px 0px\"><b>" + Title + "</b></div>";
      return value;
  }


function ayohaThemeColor_Background(){
    var value="background-color:#491A7F;";
    //  var value="background: linear-gradient(90deg, #491A7F 0%, #7027A5 100%, #9537C8 50%);";
      return value;
  }
function ayohaThemeColor_Hero(){
    var value="background: linear-gradient(180deg, #491A7F 0%, #7027A5 50%, #9537C8 100%);";
    //  var value="background: linear-gradient(90deg, #491A7F 0%, #7027A5 100%, #9537C8 50%);";
      return value;
  }
  

  function ayohaThemeColor_Card(){
  var value="background: linear-gradient(180deg, #491A7F 0%, #7027A5 50%, #9537C8 100%);border:1px solid white;border-radius:20px";
    // var value= [
    //   'border-radius:20px;',
    //   'border:2px solid transparent;',
    //   'background: linear-gradient(180deg,#491A7F 0%,#7027A5 50%,#9537C8 100%) padding-box,',
    //   'linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.18)) border-box;',
    //   'box-shadow: 0 18px 45px rgba(0,0,0,.38), 0 0 22px rgba(149,55,200,.25), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -10px 18px rgba(0,0,0,.22);'
    // ].join('')
      return value;


      style: [
        'border-radius:20px;',
        'border:2px solid transparent;',
        'background: linear-gradient(180deg,#491A7F 0%,#7027A5 50%,#9537C8 100%) padding-box,',
        'linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.18)) border-box;',
        'box-shadow: 0 18px 45px rgba(0,0,0,.38), 0 0 22px rgba(149,55,200,.25), inset 0 1px 0 rgba(255,255,255,.18), inset 0 -10px 18px rgba(0,0,0,.22);'
      ].join('')
  }
  

  
  function ayohaTheme_HeaderText(Title){
    var value='<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:16px;color:white">'+Title+'</div>';
     //var value="background: linear-gradient(180deg,#F3E8FF 0%,#FFF1F9 100%);";
      return value;
  }

  function ayohaThemeColor_Header(){
    var value="background-color:#491A7F;";
    //  var value="background: linear-gradient(90deg, #491A7F 0%, #7027A5 100%, #9537C8 50%);";
      return value;
  }

  function ayoha_HeaderHeight(){
    var value=60;
    //  var value="background: linear-gradient(90deg, #491A7F 0%, #7027A5 100%, #9537C8 50%);";
      return value;
  }

  function ayoha_BorderColor(){
    var value="border:2px solid rgba(124,58,237,.14);"
    //  var value="background: linear-gradient(90deg, #491A7F 0%, #7027A5 100%, #9537C8 50%);";
      return value;
    
  }

  function ayoha_BorderColor_1px(){
    var value="border:1px solid rgba(124,58,237,.14);"
    //  var value="background: linear-gradient(90deg, #491A7F 0%, #7027A5 100%, #9537C8 50%);";
      return value;
    
  }


  function ayohaThemeColor_Background_ForgotPassword(){
    var value="background-color:White;";
    //  var value="background: linear-gradient(90deg, #491A7F 0%, #7027A5 100%, #9537C8 50%);";
      return value;
  }







     function AyohaLogoText(Title) {
        Title = Ext.htmlEncode(Title || '');
        return '<div style="width:100%;background-color:transparent;text-align:center;' +
            'border:1px none white;font-family:Century Gothic;font-weight:700;font-size:16px;color:black">' +
            Title + '</div>';
    }

    function AyohaSubLogoText (Title) {
        Title = Ext.htmlEncode(Title || '');
        return '<div style="width:100%;background-color:transparent;text-align:center;' +
            'border:1px none white;font-family:Century Gothic;font-weight:700;font-size:10px;color:black">' +
            Title + '</div>';
    }




    function ayohaThemeColor_Body_Container() {
    return "background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);";
     
    //  return "background-color:  white";
     // return "background-color: #F6F7FB";
        return "background-color: #FAF5FF;";
       //  #F3F4F6
         return "background: linear-gradient(180deg, #FFF1F9 50%, #F3E8FF 50%);"
   }


   function ayohaThemeColor_Body_ThemeColor(){
    var value="background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);";
     //var value="background: linear-gradient(180deg,#F3E8FF 0%,#FFF1F9 100%);";
      return value;
  }

  function ayohaThemeColor_Body_ThemeColor_Border(){
    var value="background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);border:5px solid #6126E6;";
     //var value="background: linear-gradient(180deg,#F3E8FF 0%,#FFF1F9 100%);";
      return value;
  }








  
  function AyohaAppMessageBox(SubText) {
    //let subText = "Redeem Perks Submitted Successful!";
  
    if (window.Swal && Swal.isVisible && Swal.isVisible()) Swal.close();
  
    Swal.fire({
      target: document.body, // ✅ pastikan attach ke body (bukan dalam Ext container/transform)
  
      title:'',
    
      html: `
      <div class="ayohaSwalCard">
        <div class="ayohaSwalMessageBox">
          <img src="resources/icons/successregister.gif" style="width:70px;height:70px;object-fit:contain;display:block;">
        </div>
        <div class="ayohaSwalTitle">${escapeHtml(SubText)}</div>
      </div>
    `,
    

      confirmButtonText: 'OK',
      showConfirmButton: true,
      buttonsStyling: false,
  
      // ✅ jangan auto close
      timer: undefined,
      allowOutsideClick: true,
      allowEscapeKey: true,
  
      heightAuto: false,
      position: 'center',
  
      customClass: {
        container: 'ayohaRewardSwalContainer',
        popup: 'ayohaRewardSwalPopup',
        backdrop: 'ayohaRewardSwalBackdrop',
        htmlContainer: 'ayohaRewardSwalHtml',
        confirmButton: 'ayohaRewardSwalBtn'
      },
  
      didOpen: () => {
        document.body.classList.add('ayohaRewardOverlayOn');
        document.documentElement.classList.add('ayohaRewardOverlayOn');
    //  const popup = Swal.getPopup();
    //       if (popup) spawnConfettiFromCoin(popup, 1000);
        // ✅ paksa z-index runtime (kalau ExtJS override)
        const c = Swal.getContainer();
        if (c) c.style.zIndex = '99999999';
      },
  
      willClose: () => {
        document.body.classList.remove('ayohaRewardOverlayOn');
        document.documentElement.classList.remove('ayohaRewardOverlayOn');
      }
    });
  }
  






  function AyohaDecorateTrxGroupHeaders(listCmp) {
    try {
        var list = listCmp || Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardTransactionList');
        if (!list || !list.element || !list.element.dom) return;

        // Cari kemungkinan header class (ikut version/theme)
        var headers = list.element.dom.querySelectorAll(
            '.x-list-header, .x-list-group-title, .x-group-header, [class*="list-header"]'
        );

        if (!headers || !headers.length) return;

        Ext.Array.each(headers, function (hdr) {
            if (!hdr) return;

            // Elak decorate berulang
            if (hdr.getAttribute('data-ayoha-grouphdr') === '1') return;

            var txt = (hdr.textContent || hdr.innerText || '').replace(/\s+/g, ' ').trim();
            if (!txt) return;

            // Parse "FEBRUARY 2026 (16)"
            var m = txt.match(/^(.*?)(?:\s*\((\d+)\))?\s*$/);
            var label = (m && m[1]) ? m[1] : txt;
            var count = (m && m[2]) ? m[2] : '';

            // Encode text (safe)
            if (Ext.String && Ext.String.htmlEncode) {
                label = Ext.String.htmlEncode(label);
            }

            hdr.setAttribute('data-ayoha-grouphdr', '1');

            // Replace content jadi premium header
            hdr.innerHTML =
                '<div class="trxGroupHdrInline">' +
                    '<div class="trxGroupHdrInlineLeft">' +
                        '<span class="trxGroupDot"></span>' +
                        '<span class="trxGroupHdrLabel">' + label + '</span>' +
                        (count ? '<span class="trxGroupHdrCount">(' + count + ')</span>' : '') +
                    '</div>' +
                    '<span class="trxGroupHdrCaret"></span>' +
                '</div>';
        });

    } catch (e) {
        console.log('AyohaDecorateTrxGroupHeaders error:', e);
    }
}



function AyohaPatchTrxGroupHeaderLive() {
  var list = Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardTransactionList');
  if (!list || !list.element || !list.element.dom) return;

  // scope luas sikit sebab sticky header kadang render luar list subtree
  var scopeRoot = (list.up && list.up()) ? (list.up().element && list.up().element.dom) : null;
  if (!scopeRoot) scopeRoot = document.body;

  function isMonthHeaderText(txt) {
      if (!txt) return false;
      txt = txt.replace(/\s+/g, ' ').trim();
      // contoh: FEBRUARY 2026 (16)
      return /^(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)\s+\d{4}(?:\s*\(\d+\))?$/i.test(txt);
  }

  function patchOne(el) {
      if (!el || el.nodeType !== 1) return false;
      if (el.getAttribute('data-ayoha-grouphdr') === '1') return true;

      var txt = (el.textContent || el.innerText || '').replace(/\s+/g, ' ').trim();
      if (!isMonthHeaderText(txt)) return false;

      // pastikan element nampak macam header row (avoid patch text lain)
      var rect = el.getBoundingClientRect ? el.getBoundingClientRect() : null;
      if (rect && rect.height > 80) return false; // header biasanya rendah

      // mark
      el.setAttribute('data-ayoha-grouphdr', '1');

      // ✅ inline style terus (selector/theme-proof)
      el.style.background = 'linear-gradient(180deg, rgba(124,58,237,.14), rgba(124,58,237,.05))';
      el.style.border = '1px solid rgba(124,58,237,.18)';
      el.style.borderRadius = '12px';
      el.style.padding = '9px 12px';
      el.style.margin = '8px 10px 6px 10px';
      el.style.boxShadow = 'none';
      el.style.color = '#2b1658';
      el.style.fontWeight = '900';
      el.style.fontSize = '13px';
      el.style.letterSpacing = '.4px';
      el.style.textTransform = 'uppercase';
      el.style.lineHeight = '1.2';
      el.style.boxSizing = 'border-box';

      // kalau ada child wrapper, style dia juga
      if (el.firstElementChild) {
          el.firstElementChild.style.margin = '0';
          el.firstElementChild.style.padding = '0';
          el.firstElementChild.style.background = 'transparent';
      }

      return true;
  }

  function scanAndPatch() {
      try {
          // scan dalam scope root
          var nodes = scopeRoot.querySelectorAll('div, span, li');
          for (var i = 0; i < nodes.length; i++) {
              patchOne(nodes[i]);
          }

          // fallback scan seluruh body (untuk sticky header luar subtree)
          var bodyNodes = document.body.querySelectorAll('div, span, li');
          for (var j = 0; j < bodyNodes.length; j++) {
              patchOne(bodyNodes[j]);
          }
      } catch (e) {
          console.log('AyohaPatchTrxGroupHeaderLive scan error:', e);
      }
  }

  // run awal
  scanAndPatch();

  // observer (header kadang recreate masa scroll)
  if (!window._AyohaTrxGroupHdrObserver) {
      window._AyohaTrxGroupHdrObserver = new MutationObserver(function () {
          scanAndPatch();
      });

      window._AyohaTrxGroupHdrObserver.observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true
      });
  }

  // expose manual refresh helper
  window._AyohaPatchTrxGroupHeaderNow = scanAndPatch;
}