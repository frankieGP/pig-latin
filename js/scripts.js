//User Interface Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
  event.preventDefault();
  var english = $("input#english").val();

  $("#translation").text(english);
  $("#result").show();
  });
});
