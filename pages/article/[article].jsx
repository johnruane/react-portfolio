import DefaultLayout from "../../layouts/DefaultLayout";
import Template from '../../templates/Article';

const ArticlePage = ({ ...props }) => {

  return (
    <DefaultLayout>
      <Template {...props}/>
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
              links {
                assets {
                  block {
                    url
                  }
                }
              }
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
    props: data.postType1
  };
};

export default ArticlePage;
