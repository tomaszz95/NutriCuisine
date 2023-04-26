// HEADER LAYOUT
export type HeaderLayoutType = {
  titleText: string
}

// SECTION LAYOUT
export type SectionTitleType = {
  title: string
  children: React.ReactNode
}

// USEURLADDRESS
export type TextObjectTypes = {
  titleText: string
  placeholderText: string
  buttonText: string
  errorText: string
}

// MAIN FORM / ROOT LAYOUT
export type MainFormType = {
  titleText?: string
  placeholderText: string
  buttonText: string
  errorText: string
  urlQuery: string
}

// PRODUCT LIST / PRODUCT STORE
export type InitialProductStateType = [
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

// SINGLE PRODUCT
export type SingleProductType = {
  ingredient: string
  image: string
  kcal: string
  carbohydrates: string
  fat: string
  protein: string
  fiber: string
  id: string
}

// PRODUCT ITEM
export type ProductItemType = {
  productName: string
  productImage: string
  productKcal: string
  productCarbo: string
  productFat: string
  productProtein: string
  productFiber: string
  shoppingList: InitialShoppingType[]
  key: string
}

// SHOPPING ITEM
export type InitialShoppingType = {
  productName: string
  bought: boolean
}
