import FupsIcon from "../../Components/FupsIcon/FupsIcon"

import styles from "./FupsList.module.scss"

function FupsList(props) {
    return(<>
        <ul className={styles.list}>
            {props.data.map(function(item, index) {
                return (
                    <li className={styles["list__item"]} key={index}>
                        <span className={styles["list__icon"]}><FupsIcon color={item.icon.color} size="20px" icon={item.icon.name} /></span>
                        <span className={styles["list__title"]}>{item.title}</span>
                    </li>
                )
            })}
        </ul>
    </>);
}

export default FupsList