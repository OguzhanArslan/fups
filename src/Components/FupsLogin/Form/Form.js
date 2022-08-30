import React, {useState} from "react"
import { Form } from 'antd'
import FupsSelect from "../../../Components/FupsSelect/FupsSelect"
import FupsInput from "../../../Components/FupsInput/FupsInput"
import FupsButton from "../../../Components/FupsButton/FupsButton"

import styles from "./Form.module.scss"

import { Data_Users, Data_Types } from "../../../Data/index"

import LoginModal from "../Modal/Modal"

function LoginForm({setLogin}) {
    const [visible, setVisible] = useState(false);
    const { users } = Data_Users;

    const onFinish = (values) => {
        const userData = users.find((user) => user.username === values.username && user.password === values.password && values.type === user.type);

        if(userData) {
            const newLogin = JSON.stringify({
                name: userData.name,
                username: userData.username,
                type: userData.type,
                image: userData.image
            });

            setVisible(true);
            
            setTimeout(() => {
                localStorage.setItem("token", newLogin)
                setLogin(newLogin)
            }, 2000)
        }
    };

    const onFinishFailed = (errorInfo) => {
        //setVisible(true);
    };

    return (<div className={styles.form}>
        <div className={styles["form__content"]}>
            <h1>Kullanıcı Girişi</h1>
            <p>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.</p>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item name="type" rules={[{ required: true, message: 'Kullanıcı tipi boş geçilemez.' }]}>
                    <FupsSelect placeholder="Kullanıcı Tipi" options={Data_Types.types} />
                </Form.Item>
                <Form.Item name="username" rules={[{ required: true, message: 'Kullanıcı adı boş geçilemez.' }]}>
                    <FupsInput placeholder="Kullanıcı Adı" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Şifre boş geçilemez.' }]}>
                    <FupsInput placeholder="Şifren" />
                </Form.Item>
                <Form.Item>
                    {/* <a className="login-form-forgot" href="#">Şifremi Unuttum</a> */}
                    <FupsButton type="primary" htmlType="submit" text="GİRİŞ YAP" />
                </Form.Item>
            </Form>
            <LoginModal visible={visible} />
        </div>
    </div>)
}

export default LoginForm