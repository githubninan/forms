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
});
