import { json } from 'react-router-dom'

const RECIPESADDRESS = `https://api.edasmam.com/api/recipes/v2?type=public&app_id=${
  import.meta.env.VITE_RECIPEID
}&app_key=${import.meta.env.VITE_RECIPEKEY}&diet=balanced&random=true`

const CALORIESADDRESS = `https://api.edasmam.com/api/food-database/v2/parser?app_id=${
  import.meta.env.VITE_CALORIESID
}&app_key=${import.meta.env.VITE_CALORIESKEY}&nutrition-type=cooking`
console.log(CALORIESADDRESS)

export async function recipesLoader() {
  try {
    const response = await fetch(RECIPESADDRESS)

    const resData = await response.json()
    console.log(resData)
    return resData
  } catch {
    throw json({ message: 'Could not fetch recipes.' }, { status: 500 })
  }
}

export async function caloriesLoader() {
  try {
    const response = await fetch(CALORIESADDRESS)

    const resData = await response.json()
    console.log(resData)
    return resData
  } catch {
    throw json({ message: 'Could not fetch ingredients.' }, { status: 500 })
  }
}
