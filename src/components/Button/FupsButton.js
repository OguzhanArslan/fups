import { Button } from "antd";
import styles from "./FupsButton.module.scss"

const FupsButton = (props) => {
    return(<>
        <Button className={styles.FupsButton} {...props}>Deneme</Button>
    </>);
}

export default FupsButton