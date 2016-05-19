var potraitLocation = "assets/portraits/";

// function initHeroData(){
//   $('.character-name').text(hero1.Name);
//
//   var portraitSource = potraitLocation + hero1.Name + ".jpg";
//
//   $('.character-card .avatar img').attr('src', portraitSource);
// }

function setupCharacter(characterID) {
  var characterIDString = "#character-id-" + characterID;

  var portraitSource = potraitLocation + characters[i].name + ".jpg";

  $(characterIDString).find('.avatar img').attr('src', portraitSource);
  $(characterIDString).find('.card-up').removeClass('indigo').addClass(getClassColor(characters[i].class));
  $(characterIDString).find(".character-name").text(characters[i].name);
  $(characterIDString).find(".character-class").text(characters[i].domain + " " + characters[i].class);
  $(characterIDString).find(".character-description").text(characters[i].description);
  $(characterIDString).find(".character-sheet").attr('href', characters[i].link);
  if(characters[i].disabled){
    $(characterIDString).addClass("unavailable");
  }
};

function getClassColor(characterClass) {
  switch (characterClass) {
    case "Bard":
      return 'pink';
    case "Barbarian":
      return 'red darken-4';
    case "Cleric":
      return 'yellow accent-4';
    case "Druid":
      return 'teal darken-2';
    case "Fighter":
      return 'grey darken-2';
    case "Paladin":
      return 'amber darken-4 ';
    case "Ranger":
      return 'light-green darken-4';
    case "Rogue":
      return 'black';
    case "Sorcerer":
      return 'light-blue darken-4';
    case "Wizard":
      return 'blue darken-1';
    case "Warlock":
      return 'purple darken-4';
    default:
      return 'indigo';
  };
};

function setupCharacterCards(){
  for(i = 0; i < characters.length; i++){
    setupCharacter(i);
  }
}

$(document).ready(function() {
    setupCharacterCards();
});
