// Create array & prompt user for entries
var wordArr = [];
for (var i = 0; i < 3; i++){
  wordArr.push(prompt("Enter a word please,"));
}

addToList("list1", wordArr);

// reverse words and add to second list
var newWordArr = [];
for (var t = 0; t < wordArr.length; t++){
  newWordArr.push(reverseString(wordArr[t]));
}

addToList("list2", newWordArr);

// Functions
function addToList(l, a){
  /* Function to add array items to a list
     inputs: list ID & array */
  for(var j = 0; j < a.length; j++){
    var entry = document.createElement("LI");
    var word = document.createTextNode(a[j]);
    entry.append(word);
    document.getElementById(l).appendChild(entry);
  }
}

function reverseString(str) {
  /* Function reverse a string by splitting it into an array, 
     reverseing the array, and rejoining the array */
  var splitWord = str.split("");
  var revWord = splitWord.reverse();
  var newWord = revWord.join("");
  return newWord;
}
