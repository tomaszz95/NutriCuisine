import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import MainForm from '../Form/MainForm'
import FooterNavLayout from './FooterNavLayout'
import HeaderLayout from './HeaderLayout'
import styles from './RootLayout.module.css'

const RootLayout = () => {
  const [urlParam, setUrlParam] = useState<string>('')
  const location = useLocation()

  useEffect(() => {
    let title = location.pathname.slice(1).replace('_', ' ')
    if (title === '') {
      title = 'menu'
    }
    setUrlParam(title)
  }, [location.pathname])

  return (
    <>
      <header className={styles.header}>
        <HeaderLayout inputPage={urlParam} />
        <MainForm inputPage={urlParam} />
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
