import React from "react"
import styles from "./Header.module.scss"

import Logo from "../../../Assets/images/logo.svg"
import FupsButton from "../../FupsButton/FupsButton"

function Header() {
    return (<div className={styles.header}>
        <div className={styles["header__logo"]}>
            <img src={Logo} alt="Fups" />
        </div>
        <div className={styles["header__btn"]}>
            <FupsButton text="KAYIT OL" />
        </div>
    </div>)
}

export default Header