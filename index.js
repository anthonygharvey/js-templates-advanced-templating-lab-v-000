function initForm() {
  // Then initialize the form
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'});
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNode = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0; i<ingredientsNode.length; i++) {
    if(ingredientsNode[i] !== "") {
      ingredients.push(ingredientsNode[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return (recipe)
}

function handlebarsSetup() {
 // register partials first!
 Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
 Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
 Handlebars.registerHelper('displayIngredient', function(ingredient){
   return new Handlebars.SafeString('<li>' + ingredient + '</li>')
 }) 
}

function init() {
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
