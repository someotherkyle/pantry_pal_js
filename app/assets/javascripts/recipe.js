$(function(){
  console.log("JS can suck my weiner");
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
    console.log(data);
    let recipe = new Recipe(data);
    let displayHTML = recipe.postHTML();
    document.getElementById("recipe-display").innerHTML = displayHTML;
    //recipeHash = JSON.parse(data.body);
    //$("#recipe-display").text(recipeHash);
  });
}

class Recipe {
  constructor(object){
    this.id = object.id;
    this.name = object.name;
    this.instructions = object.instructions;
    this.required_ingredients = object.required_ingredients;
  }
}

Recipe.prototype.postHTML = function(){
  return(`
    <div>
      <h3>${this.name}</h3>
      <p>${this.instructions}</p>
    </div>
  `)
}
