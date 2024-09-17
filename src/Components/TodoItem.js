import { CompleteIcon } from '../Icons/CompleteIcon'
import { DeleteIcon } from '../Icons/DeleteIcon'
import '../Styles/TodoItem.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">

      <CompleteIcon
        completed={props.completed}
        onCompleted={props.onCompleted}
      />

      <p className={`TodoItem-p  ${props.completed && "TodoItem-p-complete"}`}>{props.text}</p>

      <DeleteIcon
        onDelete={props.onDeleted}
      />

    </li>
  );
}

export { TodoItem }