import axios from 'axios';
import styles from './Board.module.css';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column/Column';
const Board = () => {


    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    const [tasks, setTasks] = useState();

    const [update, setUpdate] = useState(false);

    const [backlog, setBacklog] = useState([]);
    const [onHold, setOnHold] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [inReview, setInReview] = useState([]);
    const [complete, setComplete] = useState([]);
    // Redux for fetching data

    const fetchTasks = async() => {
        const data = await axios.get('http://localhost:5000/tasks', { withCredentials: true, mode: 'cors' });
        
        const updatedBacklog = [];
        const updatedOnHold = [];
        const updatedInProgress = [];
        const updatedInReview = [];
        const updatedComplete = [];

        await data['data']['data']['tasks'].forEach((task) => {
          switch (task.status) {
            case 1:
              updatedBacklog.push(task);
              break;
            case 2:
              updatedOnHold.push(task);
              break;
            case 3:
              updatedInProgress.push(task);
              break;
            case 4:
              updatedInReview.push(task);
              break;
            case 5:
              updatedComplete.push(task);
              break;
            default:
              // handle invalid status
              break;
          }
        });
        setBacklog(updatedBacklog);
        setOnHold(updatedOnHold);
        setInProgress(updatedInProgress);
        setInReview(updatedInReview);
        setComplete(updatedComplete);
      };
      
    useEffect(() => {
      fetchTasks();
    }, []);

    useEffect(() => {
        
    }, [update]);

    const updateTask = async (_id, status) => {

      const taskData = {
        _id,
        status
      };
    
      await axios.patch('http://localhost:5000/task/updateStatus', taskData, { withCredentials: true, mode: 'cors' })
        .then(response => {
          console.log("Updated Successfully!");
        })
        .catch(error => {
          console.log("Error Updating!");
        });
    };



    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        const setTaskCategory = {'1': setBacklog, '2': setOnHold, '3': setInProgress, '4': setInReview, '5': setComplete};
        const taskCategory = {'1': backlog, '2': onHold, '3': inProgress, '4': inReview, '5': complete};


        // if (source.droppableId === destination.droppableId) return; Mustn't execute the update call but sort

        if (!destination) return;
       
        // Find task by ID
        let taskNumber = undefined;
        let task;
        for (let i = 0; i < taskCategory[source.droppableId].length; i++) {
            if (taskCategory[source.droppableId][i]._id === draggableId) {
                task = taskCategory[source.droppableId][i];
                taskNumber = i;
                task.status = Number(destination.droppableId);
            };
        };

        // Pop it from current loacation

       
        
        setTaskCategory[source.droppableId]((current) => {
            current.splice(taskNumber, 1);
            return current;
        });
      

        setTaskCategory[destination.droppableId](current => {
          const newCurrent = [...current];
          newCurrent.splice(destination.index, 0, task); // Insert the task at the specified index
          return newCurrent;
        });

        updateTask(task._id, destination.droppableId)
   
        setUpdate(!update);

    };


    return <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.board}>
            <Column title={'Backlog'} tasks={backlog} id={'1'}/>
            <Column title={'On Hold'} tasks={onHold} id={'2'}/>
            <Column title={'In Progress'} tasks={inProgress} id={'3'}/>
            <Column title={'In Review'} tasks={inReview} id={'4'}/>
            <Column title={'Complete'} tasks={complete} id={'5'}/>
        </div>
    </DragDropContext>
};

export default Board;