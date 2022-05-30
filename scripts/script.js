// Start JQuery
// Author: J.P. Alves
// Date: 2022-05-20

$(document).ready(function () {
  $("input").on("blur", function () {
    let elem = $(this);
    let val = elem.val();

    if (val !== "") elem.addClass("filled");
    else elem.removeClass("filled");
  });

  // SIGN UP
  $("#signup-form").on("submit", function (e) {
    e.preventDefault();

    let form = $(this);
    let data = form.serialize();
    data += "&action=signup";

    console.log(data);
  });
});
