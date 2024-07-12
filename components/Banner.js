import React from 'react'
import styles from '../styles/Banner.module.css'

function Banner() {
  return (
    <>
      <div className={styles.bannerImg} />
      <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>
          - 이종욱 -
          <br /><br />
          Information Security Engineer
        </div>
      </div>
    </>
  )
}
export default Banner
