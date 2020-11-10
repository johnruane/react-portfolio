import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Karla|Pacifico"></link>
      </Head>

      <main className="grid">
        <div className="displayHeading">Hello</div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
