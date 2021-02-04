import PreviewCard from '../../components/PreviewCard';
import style from './Home.module.css';
import { convertContentfulString } from '../../utils/stringUtils';

const Home = ({ previews, aboutMe }) => {
  const sortedPreviews = previews.sort((a,b) => {
    return parseInt(b.released) - parseInt(a.released);
  });

  const bodyText = convertContentfulString(aboutMe.body);

  return (
    <div>
      <div className={`grid ${style.coverSlotContent}`}>
        <div className={style.coverSlot}>
          <article className={style.salutationWrapper}>
              <div className={style.salutationText}>Hello,</div>
              <div className={style.salutationSubText}>
                I'm a frontend developer from Manchester.
              </div>
          </article>
        </div>
      </div>
      <article className={`grid ${style.galleryContent}`}>
        <h2 className={style.galleryHeading}>It's a work thing</h2>
        <h3 className={style.gallerySubHeading}>Case studies</h3>
        <div className={style.galleryPreviewsWrapper}>
          {sortedPreviews.map(preview => (
            <PreviewCard
              key={preview.link}
              href={`article/${preview.link}`}
              src={preview.src}
              heading={preview.heading}
              subHeading={preview.subHeading}
              text={preview.released}
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
            {bodyText}
        </div>
      </article>
    </div>
  );
};

export default Home;
