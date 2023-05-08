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
export type RecipeDetailTypes = {
  name: string
  totalCalories: string
  image: string
  mealType: string
  totalWeight: string
  totalTime: string
  url: string
  ingredientLines: string[]
  dietLabels: string[]
  healthLabels: string[]
  totalNutrients: string[]
  totalDaily: string[]
  cautions: string[]
  cuisine: string
}

// RECIPE DETAILS
export type RecipeDetailProps = {
  recipeData: RecipeDetailTypes
}

// RECIPE DETAILS ICON LIST
export type RecipeDetailIconListProps = {
  totalCalories: string
  totalWeight: string
  cuisine: string
  mealType: string
  totalTime: string
}

// RECIPE DETAILS ICONS
export type RecipeDetailIconsProps = {
  iconClass: string
  headingText: string
  property: string
}

// RECIPE DETAILS INGREDIENTS
export type RecipeDetailIngredientsProps = {
  ingredients: string[]
}

// RECIPE DETAILS LABELS
export type RecipeDetailLabelsProps = {
  cautions: string[]
  dietLabels: string[]
  healthLabels: string[]
}
