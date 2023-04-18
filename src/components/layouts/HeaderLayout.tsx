import styles from './HeaderLayout.module.css'

type HeaderLayoutType = {
  titleTxt: string
}

const HeaderLayout: React.FC<HeaderLayoutType> = ({ titleTxt }) => {
  return (
    <>
      <div className={styles.shadow} />
      <div className={styles.container}>
        <i className={`fa-solid fa-scroll ${styles.logo}`}></i>
        <h1 className={styles.title}>{titleTxt}</h1>
        <button className={styles.button} aria-label="Click to login">
          <i className={`fa-solid fa-circle-user ${styles.icon}`} />
        </button>
      </div>
    </>
  )
}

export default HeaderLayout
