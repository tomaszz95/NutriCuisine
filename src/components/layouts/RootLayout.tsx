import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import useUrlAddress from '../hooks/useUrlAddress'
import { InitialRootLayoutState } from '../helpers/initialStates'
import Navigation from '../navigation/Navigation'
import HeaderLayout from './HeaderLayout'
import MainForm from '../form/MainForm'
import styles from './RootLayout.module.css'

const RootLayout = () => {
  const [formData, setFormData] = useState(InitialRootLayoutState)
  const [layoutPage, setLayoutPage] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const urlQuery: string = location.pathname.slice(1)
    const formTextData = useUrlAddress(urlQuery)
    setFormData({ urlQuery, ...formTextData })

    if (
      urlQuery === 'login' ||
      urlQuery === 'signup' ||
      urlQuery.includes('detail')
    ) {
      setLayoutPage(false)
    } else {
      setLayoutPage(true)
    }
  }, [location.pathname])

  return (
    <>
      {layoutPage && (
        <header className={styles.header}>
          <HeaderLayout
            titleText={formData.titleText ? formData.titleText : ''}
          />
          <MainForm
            placeholderText={formData.placeholderText}
            buttonText={formData.buttonText}
            urlQuery={formData.urlQuery}
          />
        </header>
      )}
      <main
        className={`${styles.main} ${
          !layoutPage && !location.pathname.slice(1).includes('detail')
            ? styles.login
            : ''
        }`}
      >
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </>
  )
}

export default RootLayout
