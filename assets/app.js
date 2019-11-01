// Updates the link to be at the right location
window.addEventListener("hashchange", function() {
  scrollBy(0, -50);
});

$(".nav-link").click(function() {
  $(".nav-link").removeClass("active");
  // $(this).addClass("active");
  $("div.show").removeClass("show");
});

$(document).ready(function() {
  $("#sendMessageButton").click(function(event) {
    const formFields = {};

    document.addEventListener("DOMContentLoaded", function() {
      fields.name = document.getElementById("name");
      fields.email = document.getElementById("email");
      fields.phoneNumber = document.getElementById("phone");
      fields.message = document.getElementById("message");
    });
    //get value from the form
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const message = $("#message").val().trim();
    const status = $("#sendMessageButton").trim();
    status.empty();

    function checkInput(){
      if (name.length >= 3 && email.length > 5 && email.includes("@") && email.includes(".")) {
        status.append("Thank you!");
      } else {
        status.append("Try again");
      }
    // }
    // if (name.length >= 3) {
    //   status.append("<div>Name is valid</div>");
    // } else {
    //   status.append("<div>Name is not valid</div>");
    // }

    // if (email.length > 5 && email.includes("@") && email.includes(".")) {
    //   email.append("<div>email is valid</div>");
    // } else {
    //   event.preventDefault();
    //   status.append("<div>email is not valid</div>");
    // }

    // if (phone.length >= 7) {
    //   status.append("<div>Phone number is valid</div>");
    // } else {
    //   status.append("<div>Phone number is not valid</div>");
    // }

    // if (message.length >= 10) {
    //   status.append("<div> Message is valid</div>");
    // } else {
    //   status.append("<div>Message is not valid</div>");
    // }
  });
});
