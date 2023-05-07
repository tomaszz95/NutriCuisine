import { json } from 'react-router-dom'

const RECIPESADDRESS = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${
  import.meta.env.VITE_RECIPEID
}&app_key=${import.meta.env.VITE_RECIPEKEY}&diet=balanced&random=true`

const PRODUCTSADDRESS = `https://api.edamam.com/api/food-database/v2/parser?app_id=${
  import.meta.env.VITE_CALORIESID
}&app_key=${import.meta.env.VITE_CALORIESKEY}&nutrition-type=cooking`

export async function recipesLoader() {
  try {
    const response = await fetch(RECIPESADDRESS)
    const resData = await response.json()
    return resData
  } catch {
    throw json({ message: 'Could not fetch recipes.' }, { status: 500 })
  }
}

export async function productsLoader() {
  try {
    const response = await fetch(PRODUCTSADDRESS)

    const resData = await response.json()
    return resData
  } catch {
    throw json({ message: 'Could not fetch products.' }, { status: 500 })
  }
}

export async function detailRecipeLoader(params: any) {
  const RECIPEDETAIL = `https://api.edamam.com/api/recipes/v2/${
    params.params.recipeId
  }?type=public&app_id=${import.meta.env.VITE_RECIPEID}&app_key=${
    import.meta.env.VITE_RECIPEKEY
  }`

  try {
    const response = await fetch(RECIPEDETAIL)
    const resData = await response.json()
    return resData
  } catch {
    throw json({ message: 'Could not fetch recipe.' }, { status: 500 })
  }
}
