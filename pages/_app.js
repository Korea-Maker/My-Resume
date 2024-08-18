import "@/styles/globals.css";
import Layout from '../components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* Bilingual Title */}
          <title>Jongwook LEE - AI-Powered Resume Portfolio | 종욱 이 - 인공지능 이력서 포트폴리오</title>

          {/* Bilingual Meta Description */}
          <meta name="description" content="Explore the AI-powered resume and portfolio of Jongwook LEE. Dive into interactive content, projects, and an AI chatbot that provides insights into my career and skills. | 종욱 이의 인공지능 기반 이력서와 포트폴리오를 탐험하세요. 대화형 콘텐츠, 프로젝트 및 경력과 기술에 대한 인사이트를 제공하는 AI 챗봇을 확인하세요." />

          {/* Open Graph Meta Tags for Social Sharing */}
          <meta property="og:title" content="Jongwook LEE - AI-Powered Resume Portfolio | 종욱 이 - 인공지능 이력서 포트폴리오" />
          <meta property="og:description" content="Explore the AI-powered resume and portfolio of Jongwook LEE. Dive into interactive content, projects, and an AI chatbot that provides insights into my career and skills. | 종욱 이의 인공지능 기반 이력서와 포트폴리오를 탐험하세요. 대화형 콘텐츠, 프로젝트 및 경력과 기술에 대한 인사이트를 제공하는 AI 챗봇을 확인하세요." />
          <meta property="og:image" content="https://raw.githubusercontent.com/Korea-Maker/My-Resume/main/public/favicon.ico" />
          <meta property="og:type" content="website" />

          {/* Viewport Meta Tag */}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

          {/* Google Site Verification */}
          <meta name="google-site-verification" content="HfdzZrfkpS5AeQ2-fR_lH5gNF6PPkljLTIWiqTNclyI" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://resume.jongwook.xyz/" />

          {/* Structured Data with Bilingual Content */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Jongwook LEE | 종욱 이",
                "url": "https://resume.jongwook.xyz",
                "image": "https://raw.githubusercontent.com/Korea-Maker/My-Resume/main/public/favicon.ico",
                "jobTitle": "Software Engineer | 소프트웨어 엔지니어",
                "description": "Explore the AI-powered resume and portfolio of Jongwook LEE. Dive into interactive content, projects, and an AI chatbot that provides insights into my career and skills. | 종욱 이의 인공지능 기반 이력서와 포트폴리오를 탐험하세요.",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Your Company Name"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/yourprofile",
                  "https://github.com/yourgithubprofile"
                ]
            })}}
          />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jongwook LEE - AI-Powered Resume Portfolio | 종욱 이 - 인공지능 이력서 포트폴리오" />
          <meta name="twitter:description" content="Explore the AI-powered resume and portfolio of Jongwook LEE. | 종욱 이의 인공지능 기반 이력서와 포트폴리오를 탐험하세요." />
          <meta name="twitter:image" content="https://raw.githubusercontent.com/Korea-Maker/My-Resume/main/public/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
