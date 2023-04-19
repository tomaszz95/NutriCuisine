import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import MainForm from '../form/MainForm'
import FooterNavLayout from './FooterNavLayout'
import HeaderLayout from './HeaderLayout'
import useUrlAddress from '../hooks/useUrlAddress'
import styles from './RootLayout.module.css'

type initialStateTypes = {
  titleText: string
  placeholderText: string
  buttonText: string
  errorText: string
  urlQuery: string
}

const initialState = {
  titleText: '',
  placeholderText: '',
  buttonText: '',
  errorText: '',
  urlQuery: '',
}

const RootLayout = () => {
  const [formData, setFormData] = useState<initialStateTypes>(initialState)
  const location = useLocation()

  useEffect(() => {
    let urlQuery = location.pathname.slice(1)
    const formTextData = useUrlAddress(urlQuery)
    setFormData({ urlQuery, ...formTextData })
  }, [location.pathname])

  return (
    <>
      <header className={styles.header}>
        <HeaderLayout titleText={formData.titleText} />
        <MainForm
          placeholderText={formData.placeholderText}
          buttonText={formData.buttonText}
          errorText={formData.errorText}
          urlQuery={formData.urlQuery}
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
