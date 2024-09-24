import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillCaretDown } from 'react-icons/ai';
import styles from './NavProfile.module.css';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
const NavProfile = (props) => {

    const [showDropdown, setShowDropdown] = useState(false);


    const showDropdownHandler = () => {
        console.log(props)
        setShowDropdown(!showDropdown);
    };

    const logoutHandler = () => {
        showDropdownHandler();
        axios.post('http://localhost:5000/auth/logout', { withCredentials: true });
        // add logic to clear cookie here
    };

    return <div className={styles.profile}>
        <div className={styles.nameContainer} onClick={showDropdownHandler}> 
            {props.profile.picture && <img src={props.profile.picture} alt='' className={styles.avatar}/>}
            <div className={styles.name}>{props.profile.name}</div>
            <Transition in={showDropdown} timeout={200}>
                {state => (<AiFillCaretDown style={{
                    transition: "all 0.2s linear",
                    rotate: (state === 'entering' || state === 'entered') ? '-180deg' : '0deg'
                    }} color={'#fff'} />)}
            </Transition>
            
            

            
        </div>
        {showDropdown && (
        <div className={styles.dropdown}>
            <Link to={'account'} className={styles.dropdownLink}onClick={showDropdownHandler}>Account</Link>
            <Link to={'/'} onClick={logoutHandler} className={styles.dropdownLink}>Logout</Link>
        </div>
      )}
    
    </div>
};

export default NavProfile;