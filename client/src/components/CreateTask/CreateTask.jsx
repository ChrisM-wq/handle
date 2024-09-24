
import classes from './CreateTask.module.css';
import { useState} from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { GrAttachment } from 'react-icons/gr';

const CreateTask = (props) => {

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [priority, setPriority] = useState(2);
    const [status, setStatus] = useState(1);
    const [attachmentName, setAttachmentName] = useState('Add attachment');
    const [message, setMessage] = useState("");
    // Toggle for enabling deadline and deadline input
    const [deadlineEnabled, setDeadlineEnabled] = useState(true);
    const [deadline, setDeadline] = useState();


    const clearDeadline = () => {
        let datepickerObject = document.getElementById("deadline");
        datepickerObject.value = null; 
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            title: title,
            summary: summary,
            priority: priority,
            status: status,
          
        });
        try {
            fetch('http://localhost:5000/task/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: body,
                credentials: 'include' 
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));

                // if (res.status === 201) {
                //     setTitle("");
                //     setSummary("");
                //     setPriority(0);
                //     setStatus("");
 
                //     console.log("Task created successfully");
                // } else { 
                //     console.log("Some error occured");
                // } 
           
        } catch (err) {
          console.log(err);
        }
    };










    const closeCreateTask = () => {
        return props.setOpenedCreateTask(!props.openedCreateTask);
    };


    return <div className={classes.createTaskContainer}>



        <div className={classes.header}>
            <div>
                Create Task
            </div>
            <AiOutlineClose className={classes.closeIcon} size={'24px'} onClick={closeCreateTask}/>
        </div>






    <form onSubmit={handleSubmit} >
        <div className={classes.div}>
        {/* Title input */}
        <div className={classes.titleInput}>
            <label htmlFor='title'>Title<span className={classes.required}>*</span></label>
            <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.title}/> 
        </div>

        {/* Status input */}
        <div className={classes.titleInput}>
            <label htmlFor='status'>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} id="status" className={classes.status}>
                <option value={1}>Backlog</option>
                <option value={2}>On Hold</option>
                <option value={3}>In Progress</option>
                <option value={4}>In Review</option>
                <option value={5}>Complete</option>
            </select>
        </div>

        {/* Attachment input */}
        <div className={classes.titleInput}>
            <div>Attachment</div>
            <label htmlFor="attachment" className={classes.attachmentLabel}><GrAttachment size={'14px'} color='#909090'/>{attachmentName}</label>
            <input type="file" id="attachment" name="attachment" className={classes.attachment} onChange={(e) => {
                e.preventDefault();
                setAttachmentName( e.target.files[0].name );
            }}/>
        </div>

        {/* Description input */}
        <div className={classes.titleInput}>

            <label htmlFor='description'>Description<span className={classes.required}>*</span></label>
            <textarea type="text" value={summary} id="description" onChange={(e) => setSummary(e.target.value)} className={classes.description}/>
        </div>

        {/* Priority input */}
        <div className={classes.titleInput}>
            <label htmlFor='priority'>Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} id="priority" className={classes.priority}>
                <option value={4}>Immediate</option>
                <option value={3}>High</option>
                <option value={2}>Medium</option>
                <option value={1}>Low</option>
            </select>
        </div>




        <div className={classes.titleInput}>
            <label>Task deadline required?</label>
            <input type='checkbox' className={classes.deadlineRequired} onClick={() => {setDeadlineEnabled(!deadlineEnabled); clearDeadline();}}/>
        <label htmlFor="deadline">Deadline</label>
        <input type="date" id="deadline" name="deadline" className={classes.deadline} disabled={deadlineEnabled} onChange={(e) => setDeadline(e.target.value)}/>
        </div>
        

        </div>

    <div className={classes.footer}>
            <button className={classes.cancelBtn} onClick={closeCreateTask}>Cancel</button>
            <button className={classes.createBtn}>Create</button>
        </div>
        
        </form>
        </div>
    
};

export default CreateTask;