import { Input } from "antd";
import FloatLabel from "../FupsFloatLabel/FloatLabel";
import styles from "./FupsInput.module.scss"

function FupsInput(props) {
    return(<FloatLabel label={props.labeltext} name="lastName" value={props.value}>
        <Input className={styles.FupsInput} {...props} />
    </FloatLabel>);
}

export default FupsInput