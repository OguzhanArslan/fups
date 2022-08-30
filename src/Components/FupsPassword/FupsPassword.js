import { Input } from "antd";
import FloatLabel from "../FupsFloatLabel/FloatLabel";
import styles from "./FupsPassword.module.scss"


function FupsPassword(props) {
    return(<FloatLabel label={props.labeltext} name="lastName" value={props.value}>
        <Input.Password className={styles.FupsPassword} {...props} />
    </FloatLabel>);
}

export default FupsPassword