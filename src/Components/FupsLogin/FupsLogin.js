import React from "react"
import styles from "./FupsLogin.module.scss"

import Header from "./Header/Header.js"
import Form from "./Form/Form.js"
import Info from "./Info/Info.js"

function FupsLogin({setLogin}) {
    return (<div className={styles.login}>
        <div className={styles["login__left"]}>
            <Header />
            <Form setLogin={setLogin} />
        </div>
        <Info />
    </div>)
}

export default FupsLogin