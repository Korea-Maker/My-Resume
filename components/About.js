import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className={styles.aboutMe} id="AboutMe">
      <div className={styles.aboutMeBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>About Me</div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.infoImg}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.contentField}>
                <div className={styles.contentLabel}>이름</div>
                <div className={styles.contentValue}>이종욱</div>
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.infoImg}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.contentField}>
                <div className={styles.contentLabel}>생년월일</div>
                <div className={styles.contentValue}>2000.01.21</div>
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.infoImg}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.contentField}>
                <div className={styles.contentLabel}>주소지</div>
                <div className={styles.contentValue}>대구광역시 달서구</div>
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.infoImg}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.contentField}>
                <div className={styles.contentLabel}>연락처</div>
                <div className={styles.contentValue}>010-9519-1871</div>
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.infoImg}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.contentField}>
                <div className={styles.contentLabel}>이메일</div>
                <div className={styles.contentValue}>project5587@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <div className={styles.infoImg}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.contentField}>
                <div className={styles.contentLabel}>학력</div>
                <div className={styles.contentValue}>학점은행제 컴퓨터공학</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
