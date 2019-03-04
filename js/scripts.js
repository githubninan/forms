String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

$(document).ready(function() {
$("#blanks form").submit(function(event) {
var person1Input = $("input#inputName").val();
$(".person1").text(person1Input);
$("#blanks").hide();
$("#letter").fadeIn();
event.preventDefault();
  });

  $("button#click-submit").click(function() {

//  $("textarea#text-input").addClass("uppercaseText");

var textInput = $("#text-input").val();
var words=textInput.split(' ');
var newArray = words.map(function (word) {
  if (word.length>=3){
    return word;
  }
});
console.log(newArray);
newArray.reverse();
console.log(newArray);
newArray.join();
alert (newArray);
});

$("button#submit").click(function() {
var stringInput = $("#string-input").val();
var words = stringInput;
console.log(words);

var dash ="-";
 for (index = 0; index<words.length; index +=1)
 {
    var symbol = words[index];
    if (symbol == "a" || symbol == "e" || symbol == "i" || symbol == "o" ||symbol == "u" )
    {
        words = words.replaceAt(index,"-");
        //alert ("ee");
    }
 }
alert (words);
//     var puzzle = words.map(function(phrase)
//      {
//       if (phrase == "a")
//        {
//         dash +=phrase;
//       };
// });
// console.log (puzzle);
});

}); //document.ready





$("#order form").submit(function(event) {
var nameInput = $("input#fullName").val();
var addressInput = $("input#address").val();
var cityInput = $("input#city").val();
var zipcodeInput = $("input#zipcode").val();

$(".customer").text(orderInput);
$("div#order").hide();
$("div#receipt").fadeIn();
event.preventDefault();
  });
