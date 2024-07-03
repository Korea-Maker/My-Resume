import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer}>
        <ul className={styles.footerContent}>
          <Link href="https://maker5587.tistory.com/"><li className={styles.footerElement}>Blog</li></Link>
          <Link href="#"><li className={styles.footerElement}>LinkedIn</li></Link>
          <Link href="https://github.com/Korea-Maker"><li className={styles.footerElement}>Github</li></Link>
        </ul>
    </div>
  )
  }

export default Footer
