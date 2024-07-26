import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png' 
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterlight from '../../assets/twitter-light.svg'
import twitterdark from '../../assets/twitter-dark.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon=theme==='light' ? sun : moon;
    const twitterIcon=theme==='light' ? twitterlight : twitterdark;
    const githubIcon=theme==='light' ? githublight : githubdark;
    const linkedInIcon=theme==='light' ? linkedinlight : linkedindark;
  return (
    <section id='hero' className={styles.container}>
        <div 
        className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile Picture" 
        />
        <img className={styles.colorMode}
        src={themeIcon} 
        alt="ThemeIcon" onClick={toggleTheme}/>
        </div>


        <div className={styles.info}>
            <h1>Usman Ali <br />Ashraf</h1>
            <h2>Frontend Developer</h2>

            <span>
                <a href="twitter.com"target="blank" > 
                <img src={twitterIcon} alt="TwitterLogo" />
                </a>
                <a href="github.com"target="blank" > 
                <img src={githubIcon} alt="GithubLogo" />
                </a>
                <a href="linkedIn.com"target="blank" > 
                <img src={linkedInIcon} alt="LinkedInLogo" />
                </a>
            </span>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit architecto culpa.</p>
            <a href={CV} download>
                <button className='hover' >
                    Resume
                </button>
            </a>
        </div>

    </section>
  )
}
export default Hero
