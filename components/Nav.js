import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

function Nav() {
  const [show, setShow] = useState(false); // nav 스크롤 감지 상태

  const scrollNavbar = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => window.removeEventListener("scroll", scrollNavbar);
  }, []);
  

return (
  <>
    <div className={`${styles.nav} ${show && styles.navWhite}`}>
      <div className={styles.navContents}>
        <Link href="/">
          <h1 className={`${styles.Logo} ${show && styles.LogoWhite}`}>LJW's Portfolio</h1>
        </Link>
        <ul className={styles.navContent}>
          <Link href="#AboutMe">
            <li className={`${styles.navElement} ${show && styles.navElementWhite}`}>About Me</li>
          </Link>
          <Link href="#">
            <li className={`${styles.navElement} ${show && styles.navElementWhite}`}>Skills</li>
          </Link>
          <Link href="#">
            <li className={`${styles.navElement} ${show && styles.navElementWhite}`}>Projects</li>
          </Link>
          <Link href="#">
            <li className={`${styles.navElement} ${show && styles.navElementWhite}`}>Carrer</li>
          </Link>
          <Link href="#">
            <li className={`${styles.navElement} ${show && styles.navElementWhite}`}>Personal Statement</li>
          </Link>
        </ul>
      </div>
    </div>
    
  </>
);
}

export default Nav;