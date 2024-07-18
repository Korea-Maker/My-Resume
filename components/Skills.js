import styles from '../styles/Skills.module.css'
import Image from 'next/image'

function Skills() {
  return (
    <div className={styles.skills} id="skills">
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
                <Image src="/next.png" alt="frontend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Next.js</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Backend
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/python.png" alt="backend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Python</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/flask.svg" alt="backend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Flask</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/fastapi.png" alt="backend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>FastAPI</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/mysql.png" alt="backend" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>MySQL</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Version Control
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/git.png" alt="versionControl" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Git</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/github.png" alt="versionControl" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Github</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Observability
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/splunk.png" alt="observability" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Splunk</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/ElasticSearch.png" alt="observability" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>ElasticSearch</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/Grafana.jpeg" alt="observability" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Grafana</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Security
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/splunk.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Splunk</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/Qrader.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Qrader</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/Snort.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Snort</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/kali.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Kali linux</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/firewall.jpg" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Firewall</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/idsips.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>IDS/IPS</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/waf.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>WAF</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/antiddos.png" alt="security" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Anti DDoS</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Deployment
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/AWS.png" alt="deployment" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>AWS</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/vercel.png" alt="deployment" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Vercel</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/docker.png" alt="deployment" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Docker</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/kubernetes.png" alt="deployment" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Kubernetes</div>
              </div>
            </div>
          </div>
          <div className={styles.technicalStack}>
            <div className={styles.stackTitle}>
              Communication
            </div>
            <div className={styles.stackList}>
              <div className={styles.stackImgContainer}>
                <Image src="/jira.png" alt="communication" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Jira</div>
              </div>
              <div className={styles.stackImgContainer}>
                <Image src="/atlassian.png" alt="communication" width={100} height={100} className={styles.stackImg} />
                <div className={styles.stackImgText}>Atlassian</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
