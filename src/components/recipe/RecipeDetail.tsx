import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import { InitialDetailRecipeState } from '../helpers/initialStates'
import SectionLayout from '../layouts/SectionLayout'
import RecipeDetailItem from './RecipeDetailItem'

const RecipeDetail = () => {
  const [recipeData, setRecipeData] = useState(InitialDetailRecipeState)
  const loaderData: any = useLoaderData()

  useEffect(() => {
    setRecipeData({
      name: loaderData.recipe.label,
      calories: loaderData.recipe.calories.toFixed(),
      image: loaderData.recipe.image,
      mealType: loaderData.recipe.mealType,
      dishType: loaderData.recipe.dishType,
      totalWeight: loaderData.recipe.totalWeight.toFixed(),
      totalTime: loaderData.recipe.totalTime,
      url: loaderData.recipe.url,
      ingredientLines: loaderData.recipe.ingredientLines,
      dietLabels: loaderData.recipe.dietLabels,
      healthLabels: loaderData.recipe.healthLabels,
      totalNutrients: loaderData.recipe.totalNutrients,
      totalDaily: loaderData.recipe.totalDaily,
      cautions: loaderData.recipe.cautions,
    })
  }, [loaderData])

  return (
    <>
      <SectionLayout title="Detail informations about recipe">
        <RecipeDetailItem recipeData={recipeData} />
      </SectionLayout>
    </>
  )
}

export default RecipeDetail
