import CoverSlot from '../../components/CoverSlot';
import PreviewCard from '../../components/PreviewCard';
import style from './Home.module.css';

const Home = ({ articles }) => {
  console.log(articles)
  return (
    <div>
      <CoverSlot></CoverSlot>
      <article className={`grid ${style.galleryContent}`}>
        <h2 className={style.galleryHeading}>It's a work thing</h2>
        <h3 className={style.gallerySubHeading}>Case studies</h3>
        <div className={style.galleryPreviewsWrapper}>
          {articles.map(article => (
            <PreviewCard
              href="/article/simplybeint"
              imgSrc="/images/simplybe-international-preview.png"
              heading={article.heading}
              subHeading={article.subHeading}
              text={article.released}
            />
          ))}
        </div>
      </article>

      <article className={`grid ${style.aboutContent}`}>
        <div className={style.aboutImageWrapper}>
          <img className={style.aboutImage} src="/images/profile.png" />
        </div>
        <h2 className={style.aboutHeading}>A bit about me</h2>
        <p className={style.aboutText}>
          I am a frontend developer working at N Brown Group in Manchester and
          have 10+ years designing and building user interfaces for the web,
          specifically for ecommerce. Web accessibility and performance are at
          the forefront of every project I work on - delivering an amazing
          experience to all customer across all devices.
          <br />
          <br />
          Most recently I have moved away from UI design into a more full stack
          development role - CI/CD, integration testing & docker. I have been
          developing frontends with React and a number of other technologies
          such as Node, Redux, Typescript, Jest & REST APIs.
          <br />
          <br />
          Through the purpose of what and who our ecommerce websites are for I
          have built up strong skills in web accessibility and performance.
          <br />
          <br />I have a BSc honors degree in Computing from Manchester
          Metropolitan University.
        </p>
      </article>
    </div>
  );
};

export default Home;
