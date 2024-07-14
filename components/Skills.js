import styles from '../styles/Skills.module.css'
import Image from 'next/image'

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            SKILLS
          </div>
        </div>
        <div className={styles.stackContainer}>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Frontend
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/html5.png" alt="html5" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>HTML5</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/css.png" alt="css" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>CSS</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/javascript.png" alt="javascript" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>JavaScript</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/react.png" alt="react" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>React</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Frontend</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Frontend</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Frontend</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Frontend</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Frontend</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Frontend</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Backend
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="backend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Backend</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              CI/CD
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="CI/CD" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>CI/CD</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Observability
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="observability" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Observability</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Security
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Security</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Cloud
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="cloud" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Cloud</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Certificate
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/frontend.png" alt="certificate" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Certificate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
