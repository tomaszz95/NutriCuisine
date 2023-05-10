import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import { InitialDetailRecipeState } from '../helpers/initialStates'
import SectionLayout from '../layouts/SectionLayout'
import RecipeDetail from '../recipeDetail/RecipeDetail'

const RecipeDetailPage = () => {
  const [recipeData, setRecipeData] = useState(InitialDetailRecipeState)
  const loaderData: any = useLoaderData()

  useEffect(() => {
    setRecipeData({
      name: loaderData.recipe.label,
      totalCalories: loaderData.recipe.calories.toFixed(),
      image: loaderData.recipe.image,
      mealType: loaderData.recipe.mealType[0],
      totalWeight: loaderData.recipe.totalWeight.toFixed(),
      totalTime: loaderData.recipe.totalTime.toString(),
      url: loaderData.recipe.url,
      ingredientLines: loaderData.recipe.ingredientLines,
      dietLabels: loaderData.recipe.dietLabels,
      healthLabels: loaderData.recipe.healthLabels,
      totalDaily: loaderData.recipe.totalDaily,
      cautions: loaderData.recipe.cautions,
      cuisine: loaderData.recipe.cuisineType[0],
    })
  }, [loaderData])

  return (
    <>
      <SectionLayout title="Detail informations about recipe">
        <RecipeDetail recipeData={recipeData} />
      </SectionLayout>
    </>
  )
}

export default RecipeDetailPage
