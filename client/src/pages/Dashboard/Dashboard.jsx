
import CreateTaskButton from '../../components/CreateTaskButton/CreateTaskButton';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return <div>


        <div className={styles.welcomeContainer}>
            <div className={styles.welcomeTitle}>Welcome, <span className={styles.gradientText}>Chris McHardy</span>!</div>
            <div className={styles.welcomeText}><span className={styles.number}>15</span> task deadlines coming up by the end of this week.</div>
            <CreateTaskButton />
        </div>

        



    </div>
};

export default Dashboard;