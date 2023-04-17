import { createBrowserRouter, json, RouterProvider } from 'react-router-dom'

import RootLayout from './components/layouts/RootLayout'
import ErrorPage from './components/pages/ErrorPage'
import MenuPage from './components/pages/MenuPage'
import FavoritesPage from './components/pages/FavoritesPage'
import ShoppingListPage from './components/pages/ShoppingListPage'
import IngredientsPage from './components/pages/IngredientsPage'
import LoginPage from './components/pages/LoginPage'
import SingupPage from './components/pages/SingupPage'

async function menuLoader() {
  try {
    const response = await fetch(
      'https://api.edamam.com/api/recsipes/v2?type=public&app_id=b2183273&app_key=71420af87e9be9808a172563d6f54945&imageSize=REGULAR'
    )

    const resData = await response.json()
    console.log(resData)
    return resData
  } catch {
    throw json({ message: 'Could not fetch data.' }, { status: 500 })
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: menuLoader,
    children: [
      { index: true, element: <MenuPage /> },
      {
        path: 'menu',
        element: <MenuPage />,
      },
      {
        path: 'ingredients',
        element: <IngredientsPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'shopping_list',
        element: <ShoppingListPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SingupPage />,
    errorElement: <ErrorPage />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
