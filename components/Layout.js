import Nav from './Nav';
import Chatbot from './Chatbot';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import Banner from './Banner';
import Contents from './Contents';
import About from './About';
import Skills from './Skills';
import Blogs from './Blogs';

function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Nav />
      <Contents>
        <Banner />
        <About />
        <Skills />
        <Blogs />
      </Contents>
      <main>{children}</main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default Layout;
