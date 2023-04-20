import styles from './SectionLayout.module.css'

type SectionTitleType = {
  title: string
  children: React.ReactNode
}

const SectionTitle: React.FC<SectionTitleType> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}

export default SectionTitle
