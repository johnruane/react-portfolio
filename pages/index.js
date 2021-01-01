import Head from 'next/head'
import Layout from '../components/Layout';
import PreviewCard from '../components/PreviewCard';
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Karla|Noto"></link>
      </Head>

      <Layout>
        <article className={`grid ${style.salutationWrapper}`}>
          <div className={style.salutationText}>Hello,</div>
          <div className={style.salutationSubText}>I'm a frontend developer from Manchester.</div>
        </article>
        
        <article className={`grid ${style.galleryWrapper}`}>
          <h2 className={style.galleryHeading}>It's a work thing</h2>
          <h3 className={style.gallerySubHeading}>Case studies</h3>
          <div className={style.galleryPreviewsWrapper}>
            <PreviewCard/>
            <PreviewCard/>
          </div>          
        </article>

        <article className={`grid ${style.aboutWrapper}`}>
          <img className={style.aboutImage} src="http://via.placeholder.com/500x690.png"/>
          <h2 className={style.aboutHeading}>A bit about me</h2>
          <p className={style.aboutText}>I am a frontend developer working at N Brown Group in Manchester and have 10+ years designing and building user interfaces for the web, specifically for ecommerce. Web accessibility and performance are at the forefront of every project I work on - delivering an amazing experience to all customer across all devices.<br /><br /> 
        Most recently I have moved away from UI design into a more full stack development role - CI/CD, integration testing & docker. I have been developing frontends with React and a number of other technologies such as Node, Redux, Typescript, Jest & REST APIs.<br /><br />
        Through the purpose of what and who our ecommerce websites are for I have built up strong skills in web accessibility and performance.<br /><br />
        I have a BSc honors degree in Computing from Manchester Metropolitan University.</p>
        </article>

        {/*
        <h3 className={`sectionHeading ${style.sectionHeading}`}>A bit about me</h3>
        <p className={style.aboutText}>I am a frontend developer working at N Brown Group in Manchester and have 10+ years designing and building user interfaces for the web, specifically for ecommerce. Web accessibility and performance are at the forefront of every project I work on - delivering an amazing experience to all customer across all devices. 
        Most recently I have moved away from UI design into a more full stack development role - CI/CD, integration testing & docker. I have been developing frontends with React and a number of other technologies such as Node, Redux, Typescript, Jest & REST APIs.
        Through the purpose of what and who our ecommerce websites are for I have built up strong skills in web accessibility and performance.
        I have a BSc honors degree in Computing from Manchester Metropolitan University.</p> */}
      </Layout>
    </div>
  )
}
