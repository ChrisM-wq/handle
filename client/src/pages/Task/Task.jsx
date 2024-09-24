import { useNavigate, useLocation } from 'react-router-dom';
import MainDetails from '../../components/MainDetails/MainDetails';
import classes from './Task.module.css';
import { useEffect } from 'react';

const Task = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (!location.state) navigate('../tasks');
    }); 

    return (location.state && <div className={classes.spacingContainer}>
        <div className={classes.contents}>
            <MainDetails links="Projects / 🖥️ IT Team / 📄 REP-1" title={location.state.task.title} desc={location.state.task.summary}/>
        </div>
        
    </div>)
};

export default Task;