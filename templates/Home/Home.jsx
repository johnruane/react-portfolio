import CoverSlot from '../../components/CoverSlot';
import PreviewCard from '../../components/PreviewCard';
import style from './Home.module.css';
import { convertContentfulString } from '../../utils/stringUtils';

const Home = ({ articles, aboutMe }) => {
  const sortedArticles = articles.sort((a,b) => {
    const aDate = new Date(a.dateStamp);
    const bDate = new Date(b.dateStamp);
    return bDate - aDate;
  });

  return (
    <div>
      <CoverSlot></CoverSlot>
      <article className={`grid ${style.galleryContent}`}>
        <h2 className={style.galleryHeading}>It's a work thing</h2>
        <h3 className={style.gallerySubHeading}>Case studies</h3>
        <div className={style.galleryPreviewsWrapper}>
          {sortedArticles.map(article => (
            <PreviewCard
              href={`articles/${article.slug}`}
              imgSrc={article.src}
              heading={article.heading}
              subHeading={article.subHeading}
              text={article.released}
            />
          ))}
        </div>
      </article>

      <article className={`grid ${style.aboutContent}`}>
        <div className={style.aboutImageWrapper}>
          <img className={style.aboutImage} src={aboutMe.src}/>
        </div>
        <h2 className={style.aboutHeading}>{aboutMe.heading}</h2>
        <div className={style.aboutText}>
            {convertContentfulString(aboutMe.body)}
        </div>
      </article>
    </div>
  );
};

export default Home;
