import React from 'react'
import Nav from './Nav'
import Chatbot from './Chatbot'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

function Layout({children}) {
  return (
    <>
        <Nav />
        <div className={styles.main}>
            {children}
        </div>
        <Chatbot />
        <Footer />
    </>
  )
}

export default Layout