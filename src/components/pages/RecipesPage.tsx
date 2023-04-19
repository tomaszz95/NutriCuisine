import { useLoaderData } from 'react-router-dom'

const RecipesPage = () => {
  const data = useLoaderData()
  console.log(data)
  return <div>RecipesPage</div>
}

export default RecipesPage
