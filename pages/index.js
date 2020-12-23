import Head from 'next/head'
import About from '../components/About';
import Layout from '../components/Layout';
import Homepage from '../components/Template/Homepage';

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
        <Homepage>
          <div>Hello</div>
          <div>I'm a frontend developer from Manchester.</div>
          <h3>It's a work thing</h3>
          <h4>Case studies</h4>
          <About/>          
        </Homepage>        
      </Layout>
    </div>
  )
}
