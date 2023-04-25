import {
  InitialProductStateType,
  MainFormType,
  InitialShoppingListType,
} from './types'

// PRODUCT LIST
export const InitialProductState: InitialProductStateType = [
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
export const InitialRootLayoutState: MainFormType = {
  titleText: '',
  placeholderText: '',
  buttonText: '',
  errorText: '',
  urlQuery: '',
}
