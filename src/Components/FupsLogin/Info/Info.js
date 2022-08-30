import React from "react"
import styles from "./Info.module.scss"

import QrImage from "../../../Assets/images/login/qr.webp"
import FupsList from "../../../Components/FupsList/FupsList"

import {Data_Login} from "../../../Data/index"

function Info() {
    return (<div className={styles.info}>
        <div className={styles["info__content"]}>
            <h2>Nasıl giriş yaparım?</h2>
            <FupsList data={Data_Login.info} />
        </div>
        <div className={styles["info__image"]}>
            <img src={QrImage} alt="Nasıl giriş yaparım?" />
        </div>
    </div>)
}

export default Info