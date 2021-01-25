import DefaultLayout from "../../layouts/DefaultLayout";
import Template from '../../templates/Article';
import Pill from "../../components/Pill";
import style from "../../styles/Article.module.css";

const ArticlePage = ({ 
  heading,
  subHeading,
  subHeadingText,
  released,
  techList,
  body
 }) => {

  const document = body.json;

  return (
    <DefaultLayout
      className="articleCoverSlot"
      coverSlot={
        <>
          <article className={style.article}>
            <div className={style.supHeadingText}>{subHeading}</div>
            <div className={style.headingText}>{heading}</div>
            <div className={subHeadingText}>
              {`Released ${released}`}
            </div>
          </article>
          <div className={style.subFooterWrapper}>
            <div className={style.subFooterHeadingText}>Technology</div>
            <Pill items={techList.join(",")} />
          </div>
        </>
      }
    >
      <Template document={document}/>
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

  console.log(data.postType1);

  return {
    props: data.postType1
  };
};

export default ArticlePage;
