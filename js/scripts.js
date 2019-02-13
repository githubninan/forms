$(document).ready(function() {
  $("#blanks form").submit(function(event) {
var person1Input = $("input#inputName").val();
$(".person1").text(person1Input);
$("#blanks").hide();
$("#letter").fadeIn();
event.preventDefault();
  });
});
