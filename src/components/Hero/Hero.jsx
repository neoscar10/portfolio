import React from 'react'
import styles from "./Hero.module.css"
import heroImg from "../../assets/hero-img.png"
import profileImg from "../../assets/profile-image-photoaidcom-cropped.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Haladu-CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={profileImg} alt="A profile picture of Haladu Adamu" />
            <img onClick={toggleTheme} className={styles.colorMode} src={themeIcon} alt="Color teme icon" />
        </div>

        <div className={styles.info}>
            <h1>Adamu Haladu</h1>
            <h2>Fullstack Developer </h2>
            <span>
                <a href=""><img src={twitterIcon} alt="Twitter Icon" /></a>
                <a href="https://github.com/neoscar10"><img src={githubIcon} alt="Github Icon" /></a>
                <a href=""><img src={linkedinIcon} alt="Linkedin Icon" /></a>
            </span>
            <p>Passionate about full stack development, I create innovative solutions that integrate frontend and backend for dynamic, user-centric applications.</p>
            <a href={CV} download>
                <button className='hover' >Resume</button>
            </a>

        </div>
    </section>
  )
}

export default Hero