import Layout from '../components/Layout';
import Pill from '../components/Pill';
import style from '../styles/Article.module.css'

const Article = () => {
  return (
    <Layout
      className="articleCoverSlot"
      coverSlot={     
        <>   
          <article className={style.article}>
            <div className={style.supHeadingText}>Responsive</div>
            <div className={style.headingText}>SimplyBe Int'l</div>
            <div className={style.subHeadingText}>Released 2003</div>
          </article>
          <div className={style.subFooterWrapper}>
            <div className={style.subFooterHeadingText}>Technology</div>
            <Pill items={"Responsive, LESS, Wireframing, Prototyping, Flow diagrams, Useability testing, Requirements gathering, Card sorting, Grunt, Templating, Agile, Hybris"} />
          </div>
        </>
      }
    >
      <article className={`grid ${style.articleWrapper}`}>
        <h2 className={style.articleHeading}>Intro</h2>
        <p className={style.articleText}>In late 2014 the IT department at N Brown Group began a transformation programme called 'Fit4Future' - the largest business transformation the company had ever undertaken. Its aim was to transfer all the old tech that had been powering our websites for decades, and move them to new systems that can truly make Brown a modern digital retailer. The platform that the current website ran on was top on the list for migrating. A new web platform also meant a new frontend - built from scratch.<br /><br />
        Previously we had separate codebases for desktop, mobile and tablet in order to provide different content to customers optimised to for the viewport they were browsing on. Over the years managing the UI over three codebases inevitably fell out of sync and building new features always took priority. The new frontend would be responsive in order to cater for all viewport widths. It also had to be modular; the UI would be built as fragments and blocks so it could be reused and would mean consistency across the different pages.</p>
      </article>
      <img className={style.articleImage} src="https://via.placeholder.com/750x548.png"/>
    </Layout>
  )
}

export default Article;