import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavElementClick = () => {
    closeMenu();
  };

  return (
    <>
      <div className={`${styles.nav} ${show && styles.navWhite}`}>
        <div className={styles.navContents}>
          <Link href="/">
            <h1 className={`${styles.Logo} ${show && styles.LogoWhite}`}>LJW's Portfolio</h1>
          </Link>
          <ul className={`${styles.navContent} ${menuOpen && styles.navContentMobile}`}>
            <Link href="#AboutMe">
              <li className={`${styles.navElement} ${show && styles.navElementWhite}`} onClick={handleNavElementClick}>About Me</li>
            </Link>
            <Link href="#skills">
              <li className={`${styles.navElement} ${show && styles.navElementWhite}`} onClick={handleNavElementClick}>Skills</li>
            </Link>
            <Link href="#">
              <li className={`${styles.navElement} ${show && styles.navElementWhite}`} onClick={handleNavElementClick}>Projects</li>
            </Link>
            <Link href="#">
              <li className={`${styles.navElement} ${show && styles.navElementWhite}`} onClick={handleNavElementClick}>Career</li>
            </Link>
          </ul>
          <button className={styles.barbutton} onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} className={styles.bars} />
          </button>
        </div>
        {menuOpen && <div className={styles.menuBackground} onClick={closeMenu}></div>}
      </div>
    </>
  );
}

export default Nav;
