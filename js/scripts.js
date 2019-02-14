$(document).ready(function() {
$("#blanks form").submit(function(event) {
var person1Input = $("input#inputName").val();
$(".person1").text(person1Input);
$("#blanks").hide();
$("#letter").fadeIn();
event.preventDefault();
  });

  $("button#click-submit").click(function() {

$("textarea#textInput").addClass("uppercaseText");
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
