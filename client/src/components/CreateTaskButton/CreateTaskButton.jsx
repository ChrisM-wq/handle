import classes from './CreateTaskButton.module.css';
import { useState } from 'react';
import {Transition} from 'react-transition-group';
import { MdOutlineAdd } from 'react-icons/md';
import CreateTask from '../CreateTask/CreateTask';
const CreateTaskButton = () => {
    const [openedCreateTask, setOpenedCreateTask] = useState(false);

    return <div className={classes.btnContainer}>

            <button className={classes.btn} onClick={() => setOpenedCreateTask(true)}><div className={classes.btnContent}><MdOutlineAdd size={"24px"} color={"#383737"}/>Create Task</div></button>

            
            <Transition   
                in={openedCreateTask} 
                timeout={300}
                unmountOnExit={true}
                mountOnEnter={false}
                >
                    
            {state => (
            <div>
                <div style={{
                    position: 'fixed',
                    display: 'flex',
                    top: '10%',
                    left: 'calc(50% - 400px - 2em)',
                    opacity: state === 'entering' ? 0 : state === 'entered' ? 1 : 0,
                    transition: "all 0.3s ease-out",
                    zIndex: 1002,
                }}>
                <CreateTask openedCreateTask={openedCreateTask} setOpenedCreateTask={setOpenedCreateTask}/></div>
                <div onClick={() => {setOpenedCreateTask(false)}}>
                    <div style={{
                        position: 'fixed',
                        bottom: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: '#212121',
                        transition: "all 0.3s ease-out",
                        opacity: state === 'entering' ? 0 : state === 'entered' ? 0.5 : 0,
                        zIndex: 1001,
                    }} >
                    </div>
                </div>
                </div>
            )}
        </Transition>
      
    </div>
};

export default CreateTaskButton;