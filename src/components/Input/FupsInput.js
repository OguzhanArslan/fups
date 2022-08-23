import { Input } from "antd";
import styles from "./FupsInput.module.scss"

const FupsInput = (props) => {
    return(<>
        <Input className={styles.input} {...props} />
    </>);
}

export default FupsInput