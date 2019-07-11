$(function(){
  console.log("pantry.JS can also suck my weiner");
  pantryLinkListener()

})

function pantryLinkListener(){
  $("a.pantry-link").on('click', function(e){
    e.preventDefault();
    console.log("Clicker works");
    displayPantryForm();
  });
}

function displayPantryForm(){
  const formHTML =
  document.getElementById("pantry-form").innerHTML = formHTML;
}

function appendPantry(){
  //div id = "pantry-list"
}
