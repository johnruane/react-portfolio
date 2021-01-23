import DefaultLayout from "../layouts/DefaultLayout";
import Template from "../templates/Home";
import { fetchByContentType } from "../utils/contentful";

const Home = ({ articles, aboutMe }) => {
  return (
    <DefaultLayout>
      <Template articles={articles} aboutMe={aboutMe}></Template>
    </DefaultLayout>
  );
};

export default Home;

export const getServerSideProps = async ({ query }) => {
  const aboutResponse = await fetchByContentType('aboutMe');
  const articlesResponse = await fetchByContentType('postType1');

  const about = await aboutResponse.map((p) => {
    return {
      heading: p.heading,
      body: p.body,
      src: p.image.fields.file.url,
    }
  });

  console.log(articlesResponse)

  const articles = await articlesResponse.map((p) => {
    return {
      slug: p.slug,
      src: p.previewImage.fields.file.url,
      heading: p.heading,
      subHeading: p.subHeading,
      released: p.released,
      dateStamp: p.dateStamp,
    };
  });

  return {
    props: {
      aboutMe: about[0],
      articles: articles
    },
  };
};