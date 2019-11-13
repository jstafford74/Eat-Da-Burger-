$(function () {

  // Add a new burger.
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("Added new burger");
      // Reload the page to get the updated burger list.
      location.reload();
    });
  });

  $(".eatburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(function () {
      console.log("Burger devoured");
      location.reload();
    });
  });

  $('.eat-burger').on('click', function (event) {
    const id = $(this).data('id');
    console.log(id);
    // Send the DELETE request.
    $.ajax('/api/burgers/' + id, {
      type: 'DELETE',
    }).then(
      function () {
        console.log('Devoured burger #' + id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
