import DefaultLayout from "../layouts/DefaultLayout";
import Template from "../templates/Home";
import { fetchEntries } from "../utils/contentful";

const Home = ({ articles }) => {
  return (
    <DefaultLayout>
      <Template articles={articles}></Template>
    </DefaultLayout>
  );
};

export default Home;

export const getServerSideProps = async ({ query }) => {
  const res = await fetchEntries();
  const articles = await res.map((p) => {
    return p.fields;
  });
  return {
    props: {
      articles,
    },
  };
};
