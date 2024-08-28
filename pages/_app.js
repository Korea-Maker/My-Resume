import "@/styles/globals.css";
import Layout from '../components/Layout';
import Head from 'next/head';
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';

config.autoAddCss = false;

const metaData = {
  title: "이종욱의 AI 이력서 | Jongwook LEE's AI-Powered Resume",
  description: "AI와 만나는 나의 커리어 여정! 이종욱의 인터랙티브 포트폴리오에서 프로젝트 경험과 기술 스택을 확인하세요. AI 챗봇과 대화하며 더 자세한 이야기를 들어보세요. | Embark on an AI-driven journey through my career! Explore Jongwook LEE's interactive portfolio, featuring projects and skills. Chat with our AI bot for an in-depth look into my professional story.",
  image: "https://raw.githubusercontent.com/Korea-Maker/My-Resume/main/public/favicon.ico",
  siteUrl: "https://resume.jongwook.xyz/",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "이종욱 (Jongwook LEE)",
  "url": metaData.siteUrl,
  "image": metaData.image,
  "jobTitle": "정보보안 엔지니어 (Information Security Engineer)",
  "description": "AI 기술로 구현한 혁신적인 이력서. 프로젝트 경험과 기술 스택을 인터랙티브하게 탐험해보세요. | An innovative AI-powered resume showcasing project experiences and tech stack in an interactive way.",
  "worksFor": {
    "@type": "Organization",
    "name": "NCITS"
  },
  "sameAs": [
    "https://www.linkedin.com/in/jong-wook-lee-9b0a44250/",
    "https://github.com/Korea-Maker"
  ]
};

const renderHeadMetaTags = () => (
  <>
    <title>{metaData.title}</title>
    <meta name="description" content={metaData.description} />
    <meta property="og:title" content={metaData.title} />
    <meta property="og:description" content={metaData.description} />
    <meta property="og:image" content={metaData.image} />
    <meta property="og:type" content="website" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="google-site-verification" content="HfdzZrfkpS5AeQ2-fR_lH5gNF6PPkljLTIWiqTNclyI" />
    <link rel="canonical" href={metaData.siteUrl} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metaData.title} />
    <meta name="twitter:description" content="AI로 만나는 특별한 이력서 경험! 이종욱의 커리어 스토리를 인터랙티브하게 탐험해보세요. | Experience a unique AI-powered resume! Dive into Jongwook LEE's career story interactively." />
    <meta name="twitter:image" content={metaData.image} />
  </>
);

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Check for paths starting with '/admin' or '/management'
  const isAdminOrManagementPage = router.pathname.startsWith('/admin') || router.pathname.startsWith('/management');

  return (
    <>
      <Head>
        {renderHeadMetaTags()}
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-62GY45001Z" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-62GY45001Z', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {!isAdminOrManagementPage ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
