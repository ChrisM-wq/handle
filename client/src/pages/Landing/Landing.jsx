import styles from './Landing.module.css';
import Logo from '../../assets/HandleNewLogo.png';
import Tick from '../../assets/Tick.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return <div>
        <div className={styles.navbar}>
            <div className={styles.left}>
                
                <img src={Logo} alt='' className={styles.logo}/>
                    

                <div className={styles.links}>
                    <div className={styles.brand}>Handle</div>
                    <div>Guide</div>
                    <div>About</div>
                </div>

              
              
            </div>
            <div className={styles.right}>
                <Link to={'/login'} className={styles.signIn}>Sign In</Link>
                <div className={styles.getStarted}>Get Started</div>
            </div>
        </div>

        <div className={styles.landingPageHeaderContainer}>
            <div className={styles.landingPageHeader}>The <span className={styles.gradientText}>Simplified</span><br></br>
Approach To Task Management</div>
            <div className={styles.landingPageDescription}>Plan & organize all your resources to create specific tasks, events, or duties towards completion. Track and manage the progress as it updates swiftly. Sign up now and start letting us handle everything.</div>
            <div className={styles.landingPageCTA}>Get Started</div>
        </div>


        <div className={styles.attributesContainer}>
                <div className={styles.attribute}>
                    <div className={styles.attributeTitleContainer}>
                        <img src={Tick} alt='' className={styles.tick}/>
                        <h4 className={styles.attributeTitle}>Simplistic</h4>
                    </div>
                    <p className={styles.smallDescription}>User-friendly interface with simple model and flow.</p>
                </div>
                <div className={styles.attribute}>
                    <div className={styles.attributeTitleContainer}>
                        <img src={Tick} alt='' className={styles.tick}/>
                        <h4 className={styles.attributeTitle}>Accessibility</h4>
                    </div>
                    <p className={styles.smallDescription}>Accessible on mobile on the go, or at home by your laptop.</p>
                </div>
                <div className={styles.attribute}>
                    <div className={styles.attributeTitleContainer}>
                        <img src={Tick} alt='' className={styles.tick}/>
                        <h4 className={styles.attributeTitle}>Collaboration</h4>
                    </div>
                    <p className={styles.smallDescription}>Share tasks to co-workers and work with others.</p>
                </div>
            </div>



    </div>
};

export default Landing;