import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import MainForm from '../form/MainForm'
import FooterNavLayout from './FooterNavLayout'
import HeaderLayout from './HeaderLayout'
import styles from './RootLayout.module.css'

type initialStateTypes = {
  titleText: string
  placeholderText: string
  buttonText: string
}

const initialState = {
  titleText: '',
  placeholderText: '',
  buttonText: '',
}

const RootLayout = () => {
  const [formData, setFormData] = useState<initialStateTypes>(initialState)
  const location = useLocation()

  useEffect(() => {
    let title = location.pathname.slice(1)

    switch (title) {
      case 'recipes':
        setFormData({
          titleText: 'Recipes',
          placeholderText: 'Search recipe...',
          buttonText: 'Search',
        })
        break
      case 'calories':
        setFormData({
          titleText: 'Calories',
          placeholderText: 'Check ingredient calories...',
          buttonText: 'Check',
        })
        break
      case 'favorites':
        setFormData({
          titleText: 'Favorites',
          placeholderText: 'Search favorite recipe...',
          buttonText: 'Search',
        })
        break
      case 'shopping_list':
        setFormData({
          titleText: 'Shopping List',
          placeholderText: 'Add product to list...',
          buttonText: 'Add',
        })
        break
      default:
        setFormData({
          titleText: 'Recipes',
          placeholderText: 'Search recipe...',
          buttonText: 'Search',
        })
    }
  }, [location.pathname])

  return (
    <>
      <header className={styles.header}>
        <HeaderLayout titleTxt={formData.titleText} />
        <MainForm
          placeholderTxt={formData.placeholderText}
          buttonTxt={formData.buttonText}
        />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <FooterNavLayout />
      </footer>
    </>
  )
}

export default RootLayout
