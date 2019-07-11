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
  const formHTML = `
  <input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="Bb2i6MdE8SEKVW3HK3aCDAowhVUMGTV9ye2tSJ23u1smv/7UIKfoE+/6agXVkWUzZR2po6wLaPa67MNLb851jA==">
  <label for="pantry_location">Location</label>
  <input type="text" name="pantry[location]" id="pantry_location">
  <input type="submit" name="commit" value="Create Pantry" data-disable-with="Create Pantry">
`
  document.getElementById("pantry-form").innerHTML = formHTML;
}

function appendPantry(){
  //div id = "pantry-list"
}
