// Create array & prompt user for entries
var wordArr = [];
for (var i = 0; i < 3; i++){
  wordArr.push(prompt("Enter a word please,"));
}

addToList("list1", wordArr);

var newWordArr = wordArr.map(swapString);

// Adds functionality to the Swap button
var button = document.getElementById("Swap");
button.addEventListener("click", function(){
  var title = document.getElementById("title");
  var words = document.createTextNode("1st last letters swapped");
  title.append(words);
  document.getElementById("Hidden1").remove();
  document.getElementById("Swap").remove();
  addToList("list2", newWordArr);
});

// Functions
function addToList(l, a){
  /* Function to add array items to a list
     input: list ID & array */
  for(var j = 0; j < a.length; j++){
    var entry = document.createElement("li");
    var word = document.createTextNode(a[j]);
    entry.append(word);
    document.getElementById(l).appendChild(entry);
  }
}

function swapString(s) {
  /* Function swap parts of a string by splitting it into an array, 
     swapping the first & last elements in the array, 
     and recombining the array */
  var splitWord = s.split("");  
  var temp = splitWord[0];
  splitWord[0] = splitWord[splitWord.length - 1];
  splitWord[splitWord.length - 1] = temp; 
  var newWord = splitWord.join("");
  return newWord;
}
