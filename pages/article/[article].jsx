import DefaultLayout from "../../layouts/DefaultLayout";
import Pill from "../../components/Pill";
import TextBanner from "../../components/TextBanner";
import ArticleText from "../../components/ArticleText";
import ArticleBlock from "../../components/ArticleBlock";
import style from "../../styles/Article.module.css";

const ArticlePage = ({ data }) => {

  const article = data.postType1;

  return (
    <DefaultLayout
      className="articleCoverSlot"
      coverSlot={
        <>
          <article className={style.article}>
            <div className={style.supHeadingText}>{article.subHeading}</div>
            <div className={style.headingText}>{article.heading}</div>
            <div className={style.subHeadingText}>
              {`Released ${article.released}`}
            </div>
          </article>
          <div className={style.subFooterWrapper}>
            <div className={style.subFooterHeadingText}>Technology</div>
            <Pill items={article.techList.join(",")} />
          </div>
        </>
      }
    >
      <ArticleText title="Intro" text={article.intro} />
      <img
        className={style.articleImage}
        src="https://via.placeholder.com/750x548.png"
      />
      <TextBanner text="“Shared codebase across all devices on the Hybris Commerce platform." />
      <ArticleBlock>
        {article.body.json.content.map((article) => {
          return (
            <ArticleText
              key={article.heading}
              title={article.heading}
              text={article.text}
            />
          );
        })}
      </ArticleBlock>
      <img
        className={style.articleImage}
        src="https://via.placeholder.com/750x548.png"
      />
    </DefaultLayout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        {
          postType1(id: "${query.article}") {
            heading
            subHeading
            released
            techList
            intro
            body {
              json
            }
            webLink
          }
        }
        `,
      }),
    },
  );

  const { data } = await res.json();

  return {
    props: {
      data: data
    },
  };
};

export default ArticlePage;
