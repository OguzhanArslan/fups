import React from "react"
import { Modal } from 'antd'
import Lottie from 'react-lottie'

import styles from "./Modal.module.scss"

import { Data_Loading } from "../../../Data/index"

function LoginModal({ visible }) {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Data_Loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (<Modal
    title={null}
    footer={null}
    closable={false}
    visible={visible}
    className={styles.modal}
    wrapClassName={styles["modal__wrap"]}
    width={331}
    height={242}
    centered
    modalRender={modal => (
        <div>
            {modal}
        </div>
    )}>
        <Lottie 
            options={lottieOptions}
            height={140}
            width={140}
        />
        <h2>GİRİŞ YAPILIYOR…</h2>
    </Modal>)
}

export default LoginModal