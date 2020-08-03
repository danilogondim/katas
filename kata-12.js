// function that compares recipes and two different stocks and returns the recipe that matches the ingredients in stock

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    let ingredientOne = false;
    let ingredientTwo = false;
    for (let ingredient of recipe.ingredients) {
      for (let stock of bakeryA) {
        if (ingredient === stock) {
          ingredientOne = true;
        }
      }
      for (let stock of bakeryB) {
        if (ingredient === stock) {
          ingredientTwo = true;
        }
      }
    }
    if (ingredientOne && ingredientTwo) {
      return recipe.name;
    }

  }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));