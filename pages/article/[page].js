import Layout from "../../components/Layout";
import Pill from "../../components/Pill";
import TextBanner from "../../components/TextBanner";
import ArticleText from "../../components/ArticleText";
import ArticleBlock from "../../components/ArticleBlock";
import style from "../../styles/Article.module.css";
import data from "../../data/articles.json";

const ArticlePage = ({ data, data2 }) => {
  const title = data.intro;
  const body = data.body;
  const content = data2.items[0].fields;

  return (
    <Layout
      className="articleCoverSlot"
      coverSlot={
        <>
          <article className={style.article}>
            <div className={style.supHeadingText}>{content.subHeading}</div>
            <div className={style.headingText}>{content.heading}</div>
            <div className={style.subHeadingText}>
              {`Released ${content.released}`}
            </div>
          </article>
          <div className={style.subFooterWrapper}>
            <div className={style.subFooterHeadingText}>Technology</div>
            <Pill items={content.techList.join(",")} />
          </div>
        </>
      }
    >
      <ArticleText title="Intro" text={title} />
      <img
        className={style.articleImage}
        src="https://via.placeholder.com/750x548.png"
      />
      <TextBanner text="“Shared codebase across all devices on the Hybris Commerce platform." />
      <ArticleBlock>
        {body.map((content) => {
          return <ArticleText title={content.heading} text={content.text} />;
        })}
      </ArticleBlock>
      <img
        className={style.articleImage}
        src="https://via.placeholder.com/750x548.png"
      />
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const pageText = data[query.page];
  const res = await fetch(
    `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  );
  const data2 = await res.json();
  return {
    props: {
      data: pageText,
      data2,
    },
  };
};

export default ArticlePage;
