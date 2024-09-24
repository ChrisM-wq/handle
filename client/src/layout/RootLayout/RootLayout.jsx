import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import styles from './RootLayout.module.css';
import { useNavigate, Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const RootLayout = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);
    const [data, setData] = useState(null);

    const getUser = async () => {
      await axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/user/profile",
      }).then((res) => {
        setProfile(res.data['user']);
        console.log(res.data);
      }).catch((err) => {
        navigate('/');
      })
    };

    useEffect(() => {
      getUser();
    }, []);

    return <>
        <Navbar profile={profile}/>
        <Sidebar />
        {/* context={[opened, user]} */}
        <div className={styles.outlet}><Outlet /></div>
    </>
};

export default RootLayout;