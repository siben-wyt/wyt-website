function submitToAPI(e) {
   e.preventDefault();
   var URL = "https://l9ebdufdyl.execute-api.ap-south-1.amazonaws.com/dev/register";
   var email = $("#email").val();
   var data = {
      email: email
   };
   $.ajax({
      type: "POST",
      url: URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function () {
         location.reload();
      },
      error: function () {}
   });
}
