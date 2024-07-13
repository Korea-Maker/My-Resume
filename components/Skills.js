import styles from '../styles/Skills.module.css'
import Image from 'next/image'

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            Skills
          </div>
        </div>
        <div className={styles.stackContainer}>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Frontend
            </div>
            <div className={styles.stackList}>
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
              <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Backend
            </div>
            <div className={styles.stackList}>
              <Image src="/images/backend.png" alt="HTML5" width={50} height={50} />
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              CI/CD
            </div>
            <div className={styles.stackList}>
              <Image src="/images/html5.png" alt="HTML5" width={50} height={50} />
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Observability
            </div>
            <div className={styles.stackList}>
              <Image src="/images/html5.png" alt="HTML5" width={50} height={50} />
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Security
            </div>
            <div className={styles.stackList}>
              <Image src="/images/html5.png" alt="HTML5" width={50} height={50} />
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Cloud
            </div>
            <div className={styles.stackList}>
              <Image src="/images/html5.png" alt="HTML5" width={50} height={50} />
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Certificate
            </div>
            <div className={styles.stackList}>
              <Image src="/images/html5.png" alt="HTML5" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
