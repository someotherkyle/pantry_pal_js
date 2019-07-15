$(function(){
  recipeLinkListener();
})

function recipeLinkListener(){
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
    //issue here w/ JSON.parse(data.body); if I find motivation and want to explore (ie when this shit keeps me up at night)
    let recipe = new Recipe(data);
    let displayHTML = recipe.postHTML();
    document.getElementById("recipe-display").innerHTML = displayHTML;
  });
}

class Recipe {
  constructor(object){
    this.id = object.id;
    this.name = object.name;
    this.instructions = object.instructions.replace(/\r\n/g, "<br>");
    this.ingredients = object.ingredients;
    this.required_ingredients = object.required_ingredients;
  }
}

Recipe.prototype.hashifyIng = function(){
  let ingHash = {};
  for(let i = 0; i < this.ingredients.length; i++){ // MAY BE A BUILT IN FUNCTION TO SIMPLIFY THIS
    ingHash[`${this.ingredients[i].id}`] = [`${this.ingredients[i].name}`];
  }
  for(let i = 0; i < this.required_ingredients.length; i++){ // MAY BE A BUILT IN FUNCTION TO SIMPLIFY THIS
    ingHash[`${this.required_ingredients[i].ingredient_id}`].push(this.required_ingredients[i].quantity);
  }
  //ADD UNITS TO ARRAY
  return(ingHash);
}

Recipe.prototype.displayIng = function(){
  ingredients = Object.values(this.hashifyIng());
  output = `<ol>`
  for(let i = 0; i < ingredients.length; i++){
    output += `<li>${ingredients[i][0]} Quantity: ${ingredients[i][1]}</li>`; //ADD UNITS TO DISPLAY
  }
  output += `</ol>`;
  return(output);
}

Recipe.prototype.postHTML = function(){
  return(`
    <div>
      <h2>${this.name}</h2>
      <h3>Ingredients:</h3>
      ${this.displayIng()}
      <h3>Instructions:</h3>
      <p>${this.instructions}</p>
    </div>
  `)
}
