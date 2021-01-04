import Head from 'next/head'
import Layout from '../components/Layout';
import PreviewCard from '../components/PreviewCard';
import style from '../styles/Home.module.css'

const Article = () => {
  return (
    <Layout
      coverSlot={        
        <article>
          <div>Responsive</div>
          <div>SimplyBe Int'l</div>
          <div>Release 2003</div>
          <div>Technology</div>
          <div>Responsive, LESS, Wireframing, Prototyping, UX testing, Card sorting, Grunt</div>
        </article>
      }
    >
      <article>
        <h2>Intro</h2>
        <p>In late 2014 the IT department at N Brown Group began a transformation programme called 'Fit4Future' - the largest business transformation the company had ever undertaken. Its aim was to transfer all the old tech that had been powering our websites for decades, and move them to new systems that can truly make Brown a modern digital retailer. The platform that the current website ran on was top on the list for migrating. A new web platform also meant a new frontend - built from scratch.<br /><br />
        Previously we had separate codebases for desktop, mobile and tablet in order to provide different content to customers optimised to for the viewport they were browsing on. Over the years managing the UI over three codebases inevitably fell out of sync and building new features always took priority. The new frontend would be responsive in order to cater for all viewport widths. It also had to be modular; the UI would be built as fragments and blocks so it could be reused and would mean consistency across the different pages.</p>
      </article>
      <img src="https://via.placeholder.com/750x548.png"/>
    </Layout>
  )
}

export default Article;