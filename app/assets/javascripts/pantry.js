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
      console.log(data);
    });
  });

}

function appendPantry(){
  //div id = "pantry-list"
}
