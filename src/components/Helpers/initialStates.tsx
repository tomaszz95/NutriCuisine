import {
  InitialProductStateTypes,
  MainFormTypes,
  RecipeDetailTypes,
} from './types'

// PRODUCT LIST
export const InitialProductState: InitialProductStateTypes = [
  {
    ingredient: '',
    image: '',
    kcal: '',
    carbohydrates: '',
    fat: '',
    protein: '',
    fiber: '',
    id: '',
  },
]

// ROOT LAYOUT
export const InitialRootLayoutState: MainFormTypes = {
  titleText: '',
  placeholderText: '',
  buttonText: '',
  urlQuery: '',
}

// DETAIL RECIPE
export const InitialDetailRecipeState: RecipeDetailTypes = {
  name: '',
  totalCalories: '',
  image: '',
  mealType: '',
  totalWeight: '',
  totalTime: '',
  url: '',
  ingredientLines: [],
  dietLabels: [],
  healthLabels: [],
  totalNutrients: [],
  totalDaily: [],
  cautions: [],
  cuisine: '',
}
