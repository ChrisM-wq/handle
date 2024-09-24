
// import { redirect } from "react-router-dom";

// const loader = async () => {
//   const user = await getUser();
//   if (!user) {
//     return redirect("/login");
//   }
//   return null;
// };
import { useEffect } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../assets/HandleNewLogo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NavProfile from '../NavProfile/NavProfile';
const Navbar = (props) => {
    
    const logoutHandler = () => {
        axios.get('http://localhost:5000/auth/logout', { withCredentials: true });
    };

    
    return <div className={styles.navbar}>
        <div className={styles.left}>
            <img src={Logo} alt='' className={styles.logo}/>
            <div className={styles.brand}>Handle</div>
        </div>
        <div className={styles.right}>
            <NavProfile profile={props.profile} />
            
            {/* <Link to={'/'} onClick={logoutHandler}>Logout</Link> */}
        </div>
    </div>
};

export default Navbar;