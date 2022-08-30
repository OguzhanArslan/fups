import { Select } from 'antd';
import FloatLabel from "../FupsFloatLabel/FloatLabel";
import FupsIcon from "../FupsIcon/FupsIcon"
import styles from "./FupsSelect.module.scss"

function FupsSelect(props) {
    return(<FloatLabel label={props.labeltext} name="lastName" value={props.value}>
        <Select className={styles.FupsSelect} suffixIcon={ <FupsIcon size="20px" color="#17171a" icon="down" /> } {...props} />
    </FloatLabel>);
}

export default FupsSelect