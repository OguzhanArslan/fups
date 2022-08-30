import React from "react"
import styles from "./Info.module.scss"

import QrImage from "../../../Assets/images/login/qr.webp"
import FupsList from "../../../Components/FupsList/FupsList"

function Info() {
    return (<div className={styles.info}>
        <div className={styles["info__content"]}>
            <h2>Nasıl giriş yaparım?</h2>
            <FupsList data={
                [
                    { 
                        icon: { name: "mobile", color: "#8066cc" },
                        title: "Telefonunuzdan Fups uygulamasını açın."
                    },
                    { 
                        icon: { name: "user", color: "#ffb44d" },
                        title: "Profil fotoğrafınızdaki QR ikonuna basın."
                    },
                    { 
                        icon: { name: "identify", color: "#41bf9f" },
                        title: "QR Kodu okutarak internet şubeye giriş yapabilirsiniz."
                    }
                ]
            } />
        </div>
        <div className={styles["info__image"]}>
            <img src={QrImage} alt="Nasıl giriş yaparım?" />
        </div>
    </div>)
}

export default Info