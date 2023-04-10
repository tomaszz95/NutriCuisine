import styles from './HeaderLayout.module.css'

const HeaderLayout = ({ inputPage }: { inputPage: string }) => {
  return (
    <>
      <div className={styles.shadow} />
      <div className={styles.container}>
        <i className={`fa-solid fa-scroll ${styles.logo}`}></i>
        <h1 className={styles.title}>{inputPage}</h1>
        <button className={styles.button} aria-label="Click to login">
          <i className={`fa-solid fa-circle-user ${styles.icon}`} />
        </button>
      </div>
    </>
  )
}

export default HeaderLayout
