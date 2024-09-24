import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsChevronDown } from 'react-icons/bs';
import styles from './Tasks.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';


import { useNavigate } from 'react-router-dom';

const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState();
    


    const navigate = useNavigate();
    const openTask = (task) => {
      navigate("../task", {
        state: {
          task
        }
      })
    }


    useEffect(() => {
        axios.get('http://localhost:5000/tasks', { withCredentials: true, mode: 'cors' })
        .then((data) => {
            console.log(data['data']['data']['tasks']);
            setTasks(data['data']['data']['tasks']);
        });
    }, []);


    

    

    const data = tasks.map(task => (
        <div key={task._id} className={`${styles.task2} ${styles.listItemText}`} onClick={() => openTask(task)}>
          <div className={styles.title}>{task.title}</div>
          <div className={styles.summary}>{task.summary}</div>
          <div className={styles.status}>{task.status}</div>
          <div className={styles.priority}>{task.priority}</div>
          <div className={styles.published}>{task.published?.substring(0, task.published.indexOf("T"))}</div>
          <div className={styles.deadline}>{task.deadline?.substring(0, task.deadline.indexOf("T")) || '-'}</div>
        </div>
      ));


    return <div className={styles.layout}>
    
    <div className={styles.headerContainer}>
      <div className={styles.header}>All Tasks</div>
      
      <SearchBar setSearch={setSearch} tasks={tasks}/>
      
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>Sort <BsChevronDown className={styles.icon}/></button>
          <div className={styles.dropdownContent}>
            <p>Status</p>
            <p>Priority</p>
            <p>Deadline</p>
            <p>Published</p>
          </div>
      </div>
      
        
      
    </div>
  
    <div className={styles.tasksContainer}>
      <div key={'titles'} className={styles.task}>
          <div className={`${styles.title} ${styles.listTitleText}`}>Title</div>
          <div className={`${styles.summary} ${styles.listTitleText}`}>Description</div>
          <div className={`${styles.status} ${styles.listTitleText}`}>Status</div>
          <div className={`${styles.priority} ${styles.listTitleText}`}>Priority</div>
          <div className={`${styles.published} ${styles.listTitleText}`}>Created</div>
          <div className={`${styles.deadline} ${styles.listTitleText}`}>Deadline</div>
      </div>
      {data}
    </div> 
   </div>
};

export default Tasks;