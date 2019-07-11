$(function(){
  console.log("pantry.JS can suck my weiner");
  enableListeners();
})

function enableListeners(){
  $("#new_pantry").on('submit', function(e){
    e.preventDefault();
    const formValues = $(this).serialize();
    const userId = document.location.href.match(/\d+/g)[1];
    $.post('/users/' + userId + '/pantries', formValues).done(function(data){
      let pantry = new Pantry(data);
      displayNewPantry(pantry);
    });
  });
}

class Pantry{
  constructor(obj){
    this.id = obj.id;
    this.location = obj.location;
    this.user = obj.user;
  }
}

function displayNewPantry(pantry){
  $("#name").html(`
    <h1>${pantry.location}</h1>
    <br>
    <a href="/users/${pantry.user.id}/pantries/${pantry.id}/edit">Edit Pantry</a><br>
    <a href="/recipes/new">Add Recipe</a><br>`);
}
