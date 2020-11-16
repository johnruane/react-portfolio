import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import About from '../components/About';
import Divider from '../components/Divider';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Karla|Pacifico"></link>
      </Head>

      <div className="grid">
        <Header/>
        <div className={styles.displayHeading}>Hello</div>
        <div className={styles.displayHeadingSubText}>I'm a frontend developer from Manchester.</div>
        <div className={styles.bannerContainer}>
          <Banner additionlClasses="simplyBeInternational" dateText="December 2015" text="SimplyBe International" subText="Responsive" color="D3D7D6"/>
          <Banner additionlClasses="simplyBe" dateText="September 2013" text="SimplyBe" subText="Tablet" color="F5ECE5"/>
          <Banner additionlClasses="jacamo" dateText="June 2013" text="Jacamo" subText="Mobile" color="93AAB5"/>
          <Banner additionlClasses="jdwilliams" dateText="June 2010" text="JDWilliams" subText="Desktop" color="F7F2EE"/>
        </div>
        <Divider/>
        <About/>
        <Footer/>
      </div>
    </div>
  )
}
