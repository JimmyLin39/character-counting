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
  var findIndex = [];
  for (var i = 0; i < str.length; i++) {

    if (characterCounter[str[i]]){ //if match the charater, update object
      //var findIndex = i;
      findIndex.push(i.toString());
      console.log(findIndex);

      characterCounter[str[i]].push(i);
      console.log(characterCounter);

      //findIndex.push(characterCounter[str[i]]);
    }else{//if no other match
      findIndex.push(i.toString());
      characterCounter[str[i]] = [i];
      //characterCounter[str[i]].push(i);
      //console.log(typeof characterCounter["l"]);
      //findIndex.push(characterCounter);

      console.log(i);
      console.log(findIndex);
      console.log(characterCounter);
    }
    //console.log(characterCounter);
  }
  return characterCounter;
}

var output = countLetters("lighthouse in the house");
console.log(output);