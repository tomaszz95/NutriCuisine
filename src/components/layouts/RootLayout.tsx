import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Input from './Input'

import styles from './RootLayout.module.css'

const RootLayout = () => {
  const [urlParam, setUrlParam] = useState<string>('')
  const location = useLocation()

  useEffect(() => {
    const title = location.pathname.slice(1).replace('_', ' ')
    setUrlParam(title)
  }, [location.pathname])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.shadow} />
        <div className={styles.container}>
          <i className={`fa-solid fa-scroll ${styles.logo}`}></i>
          <h1 className={styles.title}>{urlParam}</h1>
          <button className={styles.button} aria-label="Click to login">
            <i className={`fa-solid fa-circle-user ${styles.icon}`} />
          </button>
        </div>
        <Input inputPage={urlParam} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
