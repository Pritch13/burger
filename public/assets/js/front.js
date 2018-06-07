$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

$(".orderTxt").on("click", function () {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#orderform").val().trim(),
        devoured: 1
      };
    
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
        console.log("New burger ordered!");
        location.reload();
        }
    );
});

$(".devourTxt").on("click", function () {
    var id = $(this).data("id");
    var newDevour = 0;
    var newDevourState = {
        devoured: newDevour
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          location.reload();
        }
      );
});
  