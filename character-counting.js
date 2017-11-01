/*
This program count how many instances of each letter were found in the string.
*/



function countLetters (str){
  var characterCounter = {}; //an object that can represent the stats

  for (var i = 0; i < str.length; i++) {
    // skipping spaces
    if (str[i] === " ") {
      continue;
    }
    if (characterCounter[str[i]]){ //if match the charater, update object
      characterCounter[str[i]]++;
    }else{
      characterCounter[str[i]] = 1;//if no other match
    }
    //console.log(characterCounter);
  }

  return characterCounter;
}


var output = countLetters("lighthouse in the house");
console.log(output);
