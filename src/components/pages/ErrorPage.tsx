import { useRouteError } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import styles from './ErrorPage.module.css'

const ErrorPage = () => {
  const error: any = useRouteError()

  let title, message, messageInfo

  if (error.status === 500) {
    title = 'An error occurred!'
    message = error.data.message
    message === 'Could not fetch recipes.'
      ? (messageInfo = 'Try to enter valid recipe name!')
      : (messageInfo = 'Try to enter valid product name!')
  }

  if (error.status === 404) {
    title = 'Not found!'
    message = 'Could not find resource or page!'
    messageInfo = 'Try enter a proper url address!'
  }

  return (
    <>
      <RootLayout />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.message}>{message}</span>
        <span className={styles.messageInfo}>{messageInfo}</span>
      </div>
    </>
  )
}

export default ErrorPage
