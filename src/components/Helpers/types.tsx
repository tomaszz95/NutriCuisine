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
    carbohydrates: string
    fat: string
    protein: string
    fiber: string
  }
]

// PRODUCT ITEM
export type ProductItemType = {
  productName: string
}
