import { Draggable } from 'react-beautiful-dnd';
import styles from './Task.module.css';

const Task = (props) => {
    const colors = {'1': styles.backlog, '2': styles.onHold, '3': styles.inProgress, '4': styles.inReview, '5': styles.complete};
    return <Draggable draggableId={`${props.task._id}`} key={props.task._id} index={props.index}>
        {(provided, snapshot) => (
           <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isdragging={snapshot.isDragging.toString()}
            className={`${styles.categoryItems} ${colors[props.task.status]}`}
            key={props.task._id} 
            >
                <div className={styles.title}>
                    {props.task.title}
                </div>
                <div className={styles.summary}>
                    {props.task.summary}
                </div>
            </div> 
        )}
    </Draggable>

};

export default Task;