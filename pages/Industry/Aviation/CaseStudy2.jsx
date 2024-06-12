import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const CaseStudyPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/AviationPage/CaseStudy2'),
    {
        ssr: false,
        loading: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        )
      }
)

const CaseStudy2 = () => {
  return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./icon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>
          Innovating Aviation Excellence | Giri InfoTech
        </title>

        <meta
          name="description"
          content="Explore the forefront of aviation technology with Giri InfoTech. Our innovative solutions redefine air travel, enhance safety, and optimize operations. From cutting-edge aircraft systems to smart navigation, discover how Giri InfoTech is shaping the future of aviation." />

        <meta
          name="keywords"
          content="Aviation, Aviation Technology, Aircraft Innovation, Flight Safety Solutions, Smart Navigation Systems, Aerospace Engineering, Air Traffic Management, Aviation Excellence, Aircraft Systems Optimization, Next-Gen Aviation Solutions, Aerospace Technology Trends" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/aviation/c43517b76e.jfif" />
        </Head>
    <CaseStudyPage />
    </>
  )
}

export default CaseStudy2