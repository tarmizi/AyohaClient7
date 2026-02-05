
Ext.define('BuskartApp.view.common.AyohaBackManager', {
});

var AyohaBackManager = (function () {
    var stack = [];
    var installed = false;
  
    var markerActive = false;
    var suppressPop = false;
  
    function install() {
      if (installed) return;
      installed = true;
  
      window.addEventListener('popstate', onPopState, false);
  
      // Cordova Android back (ignore if not available)
      try { document.addEventListener('backbutton', onHardwareBack, false); } catch (e) {}
    }
  
    function pushMarker() {
      if (markerActive) return;
      markerActive = true;
      try { history.pushState({ ayoha: 'modal' }, document.title, window.location.href); } catch (e) {}
    }
  
    function popMarker() {
      if (!markerActive) return;
      markerActive = false;
  
      suppressPop = true;
      try { history.back(); } catch (e) {}
  
      Ext.defer(function () { suppressPop = false; }, 80);
    }
  
    function closeTopAsBack() {
      // buang destroyed items
      while (stack.length && (!stack[stack.length - 1] || stack[stack.length - 1].destroyed)) {
        stack.pop();
      }
  
      var top = stack[stack.length - 1];
      if (!top) return;
  
      // confirm/dialog yang ada _resolve -> treat as NO
      if (typeof top._resolve === 'function') {
        top._resolve(false);
        return;
      }
  
      if (top.hide) top.hide();
    }
  
    function onPopState() {
      if (suppressPop) return;
  
      if (stack.length > 0) {
        closeTopAsBack();
  
        // kalau masih ada overlay, push marker semula
        Ext.defer(function () {
          if (stack.length > 0) {
            markerActive = false;
            pushMarker();
          }
        }, 10);
  
        return;
      }
      // stack kosong -> biar browser navigate biasa
    }
  
    function onHardwareBack(e) {
      if (stack.length > 0) {
        if (e && e.preventDefault) e.preventDefault();
        closeTopAsBack();
  
        Ext.defer(function () {
          if (stack.length > 0) {
            markerActive = false;
            pushMarker();
          }
        }, 10);
      }
    }
  
    function register(cmp) {
      install();
      if (stack.indexOf(cmp) !== -1) return;
  
      if (stack.length === 0) pushMarker();
      stack.push(cmp);
    }
  
    function unregister(cmp) {
      var idx = stack.indexOf(cmp);
      if (idx !== -1) stack.splice(idx, 1);
  
      if (stack.length === 0) popMarker();
    }
  
    return { install: install, register: register, unregister: unregister };
  })();
  