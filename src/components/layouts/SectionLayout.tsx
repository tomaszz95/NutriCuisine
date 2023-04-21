import { SectionTitleType } from '../helpers/types'
import styles from './SectionLayout.module.css'

const SectionTitle: React.FC<SectionTitleType> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}

export default SectionTitle
