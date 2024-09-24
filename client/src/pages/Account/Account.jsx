import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Account.module.css';

const Account = () => {

    const [profile, setProfile] = useState([]);

    const getUser = () => {
        axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:5000/user/profile",
        }).then((res) => {
          setProfile(res.data['user']);
          console.log(res.data);
        });
      };
  
      useEffect(() => {
        getUser();
      }, []);







    return <div className={styles.accountContainer}>
        <div className={styles.account}>
            <div>Account overview</div>
            <div>Profile</div>
            <div className={styles.accountDetails}>
                <div>{profile.name}</div>
                <div>{profile.email}</div>
                <img src={profile.picture} alt=''/>
            </div>

        </div>
    </div>
};

export default Account;