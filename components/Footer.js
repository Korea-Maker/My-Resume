import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerContent}>
        <Link href="https://maker5587.tistory.com/">
          <li className={styles.footerElement}>
            <FontAwesomeIcon icon={faT} className={styles.fontawesome} />
          </li>
        </Link>
        <Link href="https://www.linkedin.com/in/jong-wook-lee-9b0a44250/">
          <li className={styles.footerElement}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.fontawesome} />
          </li>
        </Link>
        <Link href="https://github.com/Korea-Maker">
          <li className={styles.footerElement}>
            <FontAwesomeIcon icon={faGithub} className={styles.fontawesome} />
          </li>
        </Link>
      </ul>
      <div className={styles.footerCopyRight}>© 2024. Jong Wook LEE All rights reserved.</div>
    </div>
  );
}

export default Footer;
