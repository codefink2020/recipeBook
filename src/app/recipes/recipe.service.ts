import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel - Just Awesome',
      'https://get.pxhere.com/photo/food-dish-cuisine-ingredient-produce-recipe-staple-food-side-dish-stuffing-vegetable-meat-pilaf-Southwestern-united-states-food-jambalaya-Pebre-salad-1613433.jpg',
      [
        new Ingredient("meat", 1),
        new Ingredient("French ries", 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'The Fattest there is.',
      'https://c.pxhere.com/photos/df/fc/burgers_grilling_good_mat_hungry_summer_bread_tomato-716666.jpg!d',
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice()
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id]
  }
  addIngredienstToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)

  }


}
