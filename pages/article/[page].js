import Layout from '../../components/Layout';
import Pill from '../../components/Pill';
import TextBanner from '../../components/TextBanner';
import ArticleText from '../../components/ArticleText';
import ArticleBlock from '../../components/ArticleBlock';
import style from '../../styles/Article.module.css'
import data from '../../data/articles.json';

const ArticlePage = ({
  data
}) => {
  const title = data.intro;
  const body = data.body;
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
      <ArticleText
        title="Intro"
        text={title}
      />
      <img className={style.articleImage} src="https://via.placeholder.com/750x548.png"/>
      <TextBanner text="“Shared codebase across all devices on the Hybris Commerce platform."/>
      <ArticleBlock>
        {body.map((content) => {
          return (
            <ArticleText
              title={content.heading}
              text={content.text}
            />          
          )
        })}
      </ArticleBlock>
      <img className={style.articleImage} src="https://via.placeholder.com/750x548.png"/>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }) => {
  const pageText = data[query.page];
  return { 
    props: {
      data: pageText,
    }
  }
}

export default ArticlePage;