//User Interface Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
  event.preventDefault();
  var english = $("input#english").val();

  var answer = "";
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];


// this is our first case, adding an ay to single vowel inputs
//if (english.length === 1 && vowels.includes(english)) {
  // answer = english + "ay";
//
var vowelStart = function(english){
  return english + "ay";
}
var consonantStart = function(english){}


 if (vowels.includes(english[0])){
  answer = vowelStart(english);

} else if (consonants.includes(english[0])){
  var index = 0;

word = english.split("")
  word.forEach(function(letter){
    if (vowels.includes(letter) && index === 0)
      index = word.indexOf(letter);
  });


  var firstCons = english.slice(0, index);
  var remainder = english.slice(index);

  answer = remainder + firstCons + "ay";
}



//  var answer = finalString;


//  var split = english.split("");
//  var length = split.length;

//  var finalString = [];
//  for(var index = 0; index < length; index +=1) {
//    var character = split.shift();
//    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//      finalString.push(character);
//    } else {
//      finalString.push("")+ "ay";
//    }
//  }

//  var finalOutput = finalString.join("");

    $("#translation").text(answer);
   $("#result").show();

  });
});

//BACK_END Logic



// var function = finalString()
//
// console.log(finalString);








// var nonLetter = function(english) {
//   if (english === vowels) {
//   return ("yes");
// }
// };
//  }  else  {
//   return ("letters only please");
// }
//   console.log("nonLetter");
//
// };


//  var split = english.split("");
//  var length = split.length
//
//  var finalArray = [];
//  for(var index = 0; index < length; index +=1) {
//    var character = split.shift();
//    if (character === "a") {
//      finalArray.push(character);
//    } else {
//      finalArray.push("");
//    }
//  }
//
// var finalOutput = finalArray.join("");

//   $("#translation").text(finalArray);
//   $("#result").show();
//
//   });
// });
// var vowels = ["a", "e", "i", "o", "u"];
// var findVowels =
//   vowels.forEach(function(vowel){
//     vowel.display();
// })
