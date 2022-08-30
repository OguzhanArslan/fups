import React from "react"
import { Modal } from 'antd'

import styles from "./Modal.module.scss"


function LoginModal({ visible, children, onCancel, closable }) {
    return (<Modal
        title={null}
        footer={null}
        closable={closable}
        onCancel={onCancel}
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
        )
    }>
        {children}
    </Modal>)
}

export default LoginModal