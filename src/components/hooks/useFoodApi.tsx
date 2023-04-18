import { json } from 'react-router-dom'

const useIngredient = async (ingr: string) => {
  const ingUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${
    import.meta.env.VITE_CALORIESID
  }&app_key=${
    import.meta.env.VITE_CALORIESKEY
  }&ingr=${ingr}&nutrition-type=cooking`

  try {
    const response = await fetch(ingUrl)
    const resData = await response.json()
    return resData
  } catch {
    throw json({ message: 'Could not fetch ingredient.' }, { status: 500 })
  }
}

export default useIngredient
