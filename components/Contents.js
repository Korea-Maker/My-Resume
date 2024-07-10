import styles from '../styles/Contents.module.css'

function Contents({children}) {
  return (
    <div className={styles.contents}>
        {children}
    </div>
  )
}

export default Contents
