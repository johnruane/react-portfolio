import fetch from 'isomorphic-fetch';
import DefaultLayout from "../layouts/DefaultLayout";
import Template from "../templates/Home";
import { fetchByContentType } from "../utils/contentful";

const gql = `
{
  previewCollection {
    items {
      heading
      subHeading
      released
      link {
        sys {
          id
        }
      }
    }
  }
}`

const Home = ({ previews, aboutMe }) => {
  return (
    <DefaultLayout>
      <Template previews={previews} aboutMe={aboutMe}></Template>
    </DefaultLayout>
  );
};

export default Home;

export const getServerSideProps = async ({ query }) => {
  const aboutResponse = await fetchByContentType('aboutMe');
  // const articlesResponse = await fetchByContentType('preview');

  const about = await aboutResponse.map((p) => {
    return {
      heading: p.heading,
      body: p.body,
      src: p.image.fields.file.url,
    }
  });

  // const articles = await articlesResponse.map((p) => {
  //   return {
  //     src: p.image.fields.file.url,
  //     heading: p.heading,
  //     subHeading: p.subHeading,
  //     released: p.released,
  //     link: p.link.fields.slug
  //   };
  // });

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST', // GraphQL *always* uses POST requests!
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`, // add our access token header
      },
      // send the query we wrote in GraphiQL as a string
      body: JSON.stringify({
        // all requests start with "query: ", so we'll stringify that for convenience
        query: `
        {
          previewCollection {
            items {
              image {
                url
              }
              heading
              subHeading
              released
              link {
                sys {
                  id
                }
              }
            }
          }
        }
        `,
      }),
    },
  );
  // grab the data from our response
  const { data } = await res.json();

  const previewEntries = await data.previewCollection.items.map((d) => {
    return {
      src: d.image.url,
      heading: d.heading,
      subHeading: d.subHeading,
      released: d.released,
      link: d.link.sys.id
    };
  });

  return {
    props: {
      aboutMe: about[0],
      previews: previewEntries
    },
  };
};