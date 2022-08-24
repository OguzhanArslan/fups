import { Button } from "antd";
import classnames from "classnames"
import styles from "./FupsButton.module.scss"

function FupsButton(props) {
    return(<>
        <Button className={classnames({
            [styles.FupsButton]: true,
            [styles["FupsButton__primary"]]: props.type && true,
        })} {...props}>{props.text}</Button>
    </>);
}

export default FupsButton