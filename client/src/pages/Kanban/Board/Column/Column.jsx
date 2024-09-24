import { Droppable } from 'react-beautiful-dnd';
import styles from './Column.module.css';
import Task from '../Task/Task';

const Column = (props) => {

    const data = props.tasks.map((task, index) => <Task task={task} index={index}/>);
    
    return <div id={props.id} className={styles.category}>
        <div className={styles.categoryHeader}>{props.title}</div>
        <Droppable droppableId={props.id}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} 
                    {...provided.droppableProps}
                    isdraggingover={snapshot.isDraggingOver.toString()}
                    className={styles.tasksContainer}
                    key={props.id}
                >
                    {data}
                    
                </div>
            )}
            
        </Droppable>
        
    </div>

};

export default Column;