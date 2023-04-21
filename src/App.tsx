import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './components/layouts/RootLayout'
import ErrorPage from './components/pages/ErrorPage'
import RecipesPage from './components/pages/RecipesPage'
import ProductsPage from './components/pages/ProductsPage'
import FavoritesPage from './components/pages/FavoritesPage'
import ShoppingListPage from './components/pages/ShoppingListPage'
import LoginPage from './components/pages/LoginPage'
import SingupPage from './components/pages/SingupPage'
import { recipesLoader, productsLoader } from './components/helpers/loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RecipesPage />, loader: recipesLoader },
      {
        path: 'recipes',
        element: <RecipesPage />,
        loader: recipesLoader,
      },
      {
        path: 'products',
        element: <ProductsPage />,
        loader: productsLoader,
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
