//validate.js

function validate()
{
  var pass = document.querySelector("#pass");
  var conf_pass = document.querySelector("#conf_pass");
  if (pass.value!=conf_pass.value){
    alert("The passwords do not match")
  }
  else if (pass.value.length<8){
    alert("The password must be at least 8 characters long")
  }

}
