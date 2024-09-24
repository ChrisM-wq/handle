import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import styles from './OAuthLogins.module.css';

const OAuthLogins = () => {

    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const githubLogin = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    };

    const facebookLogin = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    return <>
        <button onClick={googleLogin} className={`${styles.googleButton} ${styles.oAuthButton}`}><FcGoogle size={'20px'}/>Continue with Google</button>
        <button onClick={githubLogin} className={`${styles.githubButton} ${styles.oAuthButton}`}><BsGithub size={'20px'} color={'#fff'}/>Continue with GitHub</button>
        <button onClick={facebookLogin} className={`${styles.facebookButton} ${styles.oAuthButton}`}><BsFacebook size={'20px'} color={'#fff'}/>Continue with Facebook</button>
    </>
};

export default OAuthLogins;