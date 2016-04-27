var potraitLocation = "assets/portraits/"

function initHeroData(){
  $('.character-name').text(hero1.Name);

  var portraitSource = potraitLocation + hero1.Name + ".jpg";

  $('.character-card .avatar img').attr('src', portraitSource);
}

var hero1Data;

function load(){
  //var actual_JSON = $.getJSON("/../assets/test.json");
  //console.log(actual_JSON);

  console.log(hero1);
}



$(document).ready(function() {
    load();
    initHeroData();
});
