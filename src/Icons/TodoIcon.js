import { IoCloseSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import "../Styles/TodoIcon.css";

const iconTypes = {
    'check': (color) => <IoCheckmarkSharp className="Icon-svg" stroke={color} fill={color} />,
    'delete': (color) => <IoCloseSharp className="Icon-svg" stroke={color} fill={color} />
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };
