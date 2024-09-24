import { GrAttachment } from 'react-icons/gr';
import { BsLink45Deg, BsThreeDots } from 'react-icons/bs';
import { TbSubtask } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import classes from './MainDetails.module.css';

const MainDetails = (props) => {
    return <div className={classes.mainDetailsContainer}>
        <div className={classes.links}>{props.links}</div>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.tools}>
            <div className={classes.subTools}><GrAttachment /><div>Attach</div></div>
            <div className={classes.subTools}><TbSubtask /><div>Create subtask</div></div>
            <div className={classes.subTools}><BsLink45Deg /><div>Link issue</div></div>
            
            <div className={classes.endTools}>   
            <div className={classes.verticalLine}></div>
                <MdOutlineKeyboardArrowDown />
                <BsThreeDots />
            </div>
        </div>
        <div className={classes.descriptionContainer}>
            <div className={classes.descriptionTitle}>Description</div>
            <div className={classes.description}>{props.desc}</div>
        </div>
        
    </div>
};

export default MainDetails;