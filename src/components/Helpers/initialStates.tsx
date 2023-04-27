import {
  InitialProductStateTypes,
  MainFormTypes,
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
