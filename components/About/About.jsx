import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <img className={styles.aboutImage} src="/images/profile.png"/>
      <div className={styles.aboutHeading}>A bit about me</div>
      <div className={styles.aboutTextWrapper}>
        <p className={styles.aboutText}>Hi. I'm John Ruane and I am a frontend developer currently working at N Brown Group in Manchester.</p>
        <br/>
        <p className={styles.aboutText}>I have 5+ years experience designing and building UI, and coding with Javascript. Most recently I am 
          developing with React and a number of other technologies such as Node, Redux, Typescript, Jest & REST APIs.</p>
      </div>  
    </>
  )
}

export default About;