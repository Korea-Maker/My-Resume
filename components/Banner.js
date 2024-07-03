import React from 'react'
import styles from '../styles/Banner.module.css'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImg}>
      </div>
      <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>
          - 이종욱 -
          <br />
          .......
        </div>
      </div>
    </div>
  )
}
export default Banner
