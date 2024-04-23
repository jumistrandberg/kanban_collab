import AddUserModal from "./AddUserModal";
import styles from "../../styling/AddUserModal.module.css";


const ColorSelector = ( { color, showCurrentColor }) => {
   
  return (
    <div className={styles.colorSelectorSwitcher} style={{'background-color': color}} onClick={showCurrentColor}>
        
    </div>

  )
}

export default ColorSelector