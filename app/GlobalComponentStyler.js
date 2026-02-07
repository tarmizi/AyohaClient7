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
