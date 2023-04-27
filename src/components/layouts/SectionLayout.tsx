import { SectionLayoutTypes } from '../helpers/types'
import styles from './SectionLayout.module.css'

const SectionLayout: React.FC<SectionLayoutTypes> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}

export default SectionLayout
