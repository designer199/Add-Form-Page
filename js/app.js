$(document).ready(function() {
    function fail()
{
    $(".custom-alert-fail").hide(300);
}
$.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  var form = $( "form" );
  form.validate();
  $( ".submitbtn" ).click(function() {
      if(form.valid())
    setTimeout(success, 5000);
    else
    setTimeout(fail, 5000);
  });

function success()
{

    $(".custom-alert-success").hide(300);
}



  
});