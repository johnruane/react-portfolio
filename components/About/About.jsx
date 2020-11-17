import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <img className={styles.aboutImage} src="/images/profile.png"/>
      <div className={styles.aboutHeading}>A bit about me</div>
      <div className={styles.aboutTextWrapper}>
        <p className={styles.aboutText}>I am a frontend developer working at N Brown Group in Manchester and have 10+ years designing and building user interfaces for the web, specifically for ecommerce. Web accessibility and performance are at the forefront of every project I work on - delivering an amazing experience to all customer across all devices.</p>
        <br/>
        <p className={styles.aboutText}>Most recently I have moved away from UI design into a more full stack development role - CI/CD, integration testing & docker. I have been developing frontends with React and a number of other technologies such as Node, Redux, Typescript, Jest & REST APIs.</p>
        <br/>
        <p className={styles.aboutText}>Through the purpose of what and who our ecommerce websites are for I have built up strong skills in web accessibility and performance.</p>
        <br/>
        <p className={styles.aboutText}>I have a BSc honors degree in Computing from Manchester Metropolitan University.</p>
      </div>  
    </>
  )
}

export default About;