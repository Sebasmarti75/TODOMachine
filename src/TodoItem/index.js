import {CompletedIcon} from '../TodoIcon/CompletedIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css'



function TodoItem(props) {
    return (
      <li className="TodoItem">
        <CompletedIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>

        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
  
    );
  }
export { TodoItem}