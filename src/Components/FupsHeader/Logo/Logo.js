import styles from "./Logo.module.scss"
import LogoSvg from "../../../Assets/images/logo.svg"

function Logo() {
    return(<div className={styles.logo}>
        <img src={LogoSvg} alt="Fups" />
    </div>);
}

export default Logo