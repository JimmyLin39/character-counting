/*
This program return all the indices (zero-based positions)
in the string where each character is found.
*/

var characterCounter = {}; //an object that can represent the stats

function countLetters (str){
  var noSpace = str.split(" ").join(""); //turing string into an no space string

  compareLetters(noSpace);

  return characterCounter;
}

function compareLetters(str){
  for (var i = 0; i < str.length; i++) {

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