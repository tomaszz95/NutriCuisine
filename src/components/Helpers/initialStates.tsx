import {
  InitialProductStateTypes,
  MainFormTypes,
  RecipeDetailsTypes,
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
export const InitialDetailRecipeState: RecipeDetailsTypes = {
  name: '',
  calories: '',
  image: '',
  mealType: [],
  dishType: [],
  totalWeight: '',
  totalTime: '',
  url: '',
  ingredientLines: [],
  dietLabels: [],
  healthLabels: [],
  totalNutrients: [],
  totalDaily: [],
  cautions: [],
}
