// Returns a theme color style string for use in ExtJS component 'style' property
function ayohaThemeColor_Body() {
   // return "background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);";
     // return "background: linear-gradient(90deg, #F3E8FF  100%, #FFF1F9 0%);";
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