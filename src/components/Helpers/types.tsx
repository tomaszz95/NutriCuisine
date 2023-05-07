// HEADER LAYOUT
export type HeaderLayoutTypes = {
  titleText: string
}

// SECTION LAYOUT
export type SectionLayoutTypes = {
  title: string
  children: React.ReactNode
}

// USEURLADDRESS
export type UrlHookObjectTypes = {
  titleText: string
  placeholderText: string
  buttonText: string
}

// MAIN FORM / ROOT LAYOUT
export type MainFormTypes = {
  titleText?: string
  placeholderText: string
  buttonText: string
  urlQuery: string
}

// PRODUCT LIST / PRODUCT STORE
export type InitialProductStateTypes = [
  {
    ingredient: string
    image: string
    kcal: string
    carbohydrates: string
    fat: string
    protein: string
    fiber: string
    id: string
  }
]

// PRODUCT ITEM
export type ProductItemTypes = {
  productName: string
  productImage: string
  productKcal: string
  productCarbo: string
  productFat: string
  productProtein: string
  productFiber: string
  shoppingList: InitialShoppingTypes[]
  key: string
}

// SHOPPING ITEM
export type InitialShoppingTypes = {
  productName: string
  bought: boolean
}

// RECIPE LIST
export type InitialRecipesStateTypes = [
  {
    name: string
    image: string
    calories: string
    weight: string
    cuisine: string
    ingredients: string[]
    mealType: string
    id: string
  }
]

// RECIPE ITEM
export type RecipeItemTypes = {
  recipeName: string
  recipeImage: string
  recipeCalories: string
  recipeWeight: string
  recipeCuisine: string
  recipeIngredients: string[]
  recipeType: string
  recipeId: string
  favoriteList: RecipeItemTypes[]
}

// FAVORITE ITEM
export type FavoriteItemTypes = {
  recipeName: string
  recipeImage: string
  recipeIngredients: string[]
  recipeId: string
}

// RECIPE DETAILS
export type RecipeDetailsTypes = {
  name: string
  calories: string
  image: string
  mealType: string[]
  dishType: string[]
  totalWeight: string
  totalTime: string
  url: string
  ingredientLines: string[]
  dietLabels: string[]
  healthLabels: string[]
  totalNutrients: string[]
  totalDaily: string[]
  cautions: string[]
}

// RECIPE DETAILS
export type RecipeDetailItemProps = {
  recipeData: RecipeDetailsTypes
}
