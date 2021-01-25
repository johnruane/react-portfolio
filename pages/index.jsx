import DefaultLayout from "../layouts/DefaultLayout";
import Template from "../templates/Home";

const Home = ({ previews, aboutMe }) => {
  return (
    <DefaultLayout>
      <Template previews={previews} aboutMe={aboutMe}></Template>
    </DefaultLayout>
  );
};

export default Home;

export const getServerSideProps = async () => {

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
          aboutMeCollection {
            items {
              image {
                url
              }
              heading
              body
            }
          }
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

  const aboutMeContent = await data.aboutMeCollection.items.map((a) => {
    return {
      src: a.image.url,
      heading: a.heading,
      body: a.body
    }
  });

  return {
    props: {
      aboutMe: aboutMeContent[0],
      previews: previewEntries
    },
  };
};