import { json } from 'react-router-dom'

const RECIPESADDRESS = `https://api.edasmam.com/api/recipes/v2?type=public&app_id=${
  import.meta.env.VITE_RECIPEID
}&app_key=${import.meta.env.VITE_RECIPEKEY}&diet=balanced&random=true`

export async function recipesLoader() {
  try {
    const response = await fetch(RECIPESADDRESS)
    const resData = await response.json()
    return resData
  } catch {
    throw json({ message: 'Could not fetch recipes.' }, { status: 500 })
  }
}
