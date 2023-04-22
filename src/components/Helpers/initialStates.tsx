import { InitialProductStateType, MainFormType } from './types'

// PRODUCT LIST
export const InitialProductState: InitialProductStateType = [
  {
    ingredient: '',
    image: '',
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
