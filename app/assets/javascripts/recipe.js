$(function(){
  console.log("JS is actually fucking loading");
  listenForClick();
})

function listenForClick(){
  $("a.recipe-link").on('click', function(e){
    e.preventDefault();
    getRecipe(e.currentTarget.dataset.id);
  });
}

function getRecipe(id){
  $.ajax({
    url: "http://localhost:3000/recipes/" + id,
    method: 'get',
    dataType: 'json'
  }).done(function(data){
    console.log(data)
  });
}

