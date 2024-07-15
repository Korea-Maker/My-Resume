import "@/styles/globals.css";
import Layout from '../components/Layout';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>My Resume</title>
          <meta property="og:title" content="LJW's Portfolio" />
          <meta property="og:description" content="Jongwook, LEE Portfolio Web Site (feat. AI Chatbot)" />
          <meta property="og:image" content="https://raw.githubusercontent.com/Korea-Maker/My-Resume/main/public/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
