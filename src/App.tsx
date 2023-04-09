import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import ErrorPage from './components/pages/ErrorPage'
import MenuPage from './components/pages/MenuPage'
import FavoritesPage from './components/pages/FavoritesPage'
import ShoppingListPage from './components/pages/ShoppingListPage'
import IngredientsPage from './components/pages/IngredientsPage'
import LoginPage from './components/pages/LoginPage'
import SingupPage from './components/pages/SingupPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MenuPage /> },
      {
        path: 'menu',
        element: <MenuPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'shopping_list',
        element: <ShoppingListPage />,
      },
      {
        path: 'ingredients',
        element: <IngredientsPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SingupPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
