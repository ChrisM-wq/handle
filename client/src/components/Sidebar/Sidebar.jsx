import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaRegClipboard, FaTasks } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return <div className={styles.sidebar}>
        <NavLink to={''} className={({ isActive }) => isActive ? styles.highlight : styles.link} end>
            <MdDashboard size={'1.5rem'}/>
        </NavLink>
        <NavLink to={'tasks'} className={({ isActive }) => isActive ? styles.highlight : styles.link}>
            <FaTasks size={'1.5rem'}/>
        </NavLink>
        <NavLink to={'kanban'} className={({ isActive }) => isActive ? styles.highlight : styles.link}>
            <FaRegClipboard size={'1.5rem'}/>
        </NavLink>
    </div>
};
           

export default Sidebar;