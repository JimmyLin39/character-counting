/*
This program return all the indices (zero-based positions)
in the string where each character is found.
*/


//turing string into an no space string
function positionLetters (str){
  //an object that can represent the stats
  var characterCounter = {};

  for (var i = 0; i < str.length; i++) {
     // skipping spaces
    if (str[i] === " ") {
      continue;
    }
    //if match the charater, update object
    if (characterCounter[str[i]]){
      characterCounter[str[i]].push(i);
    }else{//if no other match
      characterCounter[str[i]] = [i];
    }
  }
  return characterCounter;
}

var output = positionLetters("lighthouse in the house");
console.log(output);