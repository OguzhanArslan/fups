import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import Lottie from 'react-lottie'
import FupsSelect from "../../../Components/FupsSelect/FupsSelect"
import FupsInput from "../../../Components/FupsInput/FupsInput"
import FupsPassword from "../../FupsPassword/FupsPassword"
import FupsButton from "../../../Components/FupsButton/FupsButton"
import LoginModal from "../Modal/Modal"

import styles from "./Form.module.scss"

import { Data_Users, Data_Types, Data_Loading } from "../../../Data/index"

function LoginForm({setLogin}) {
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { users } = Data_Users;

    useEffect(() => {
        if(errorMessage !== null) {
            setIsModalVisible(true);
        }
    }, [errorMessage])

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Data_Loading,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

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
            
        } else if(users.find((user) => user.username === values.username && user.password === values.password)) {
            setErrorMessage("Kullanıcı Tipini yanlış seçtiniz!")
        } else if(users.find((user) => user.username === values.username && values.type === user.type)) {
            setErrorMessage("Şifreniz yanlış!")
        } else if(users.find((user) => user.password === values.password && user.type === values.type)) {
            setErrorMessage("Kullanıcı adınız yanlış!")
        } else {
            setErrorMessage("Kullanıcı bulunamadı!")
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (<div className={styles.form}>
        <div className={styles["form__content"]}>
            <h1>Kullanıcı Girişi</h1>
            <p>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.</p>
            <Form name="basic" onFinish={onFinish} autoComplete="off">
                <Form.Item name="type" rules={[{ required: true, message: 'Kullanıcı tipi boş geçilemez.' }]}>
                    <FupsSelect labeltext="Kullanıcı Tipi" options={Data_Types.types} />
                </Form.Item>
                <Form.Item name="username" rules={[{ required: true, message: 'Kullanıcı adı boş geçilemez.' }]}>
                    <FupsInput labeltext="Kullanıcı Adı" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Şifre boş geçilemez.' }]}>
                    <FupsPassword labeltext="Şifren" />
                </Form.Item>
                <div className={styles["form__btns"]}>
                    <Link className={styles["form__btns-link"]} to="/">
                        Şifremi Unuttum
                    </Link>
                    <FupsButton type="primary" htmlType="submit" text="GİRİŞ YAP" />
                </div>
            </Form>
            <LoginModal visible={visible} onCancel={null} closable={false}>
                <Lottie 
                    options={lottieOptions}
                    height={140}
                    width={140}
                />
                <h2>GİRİŞ YAPILIYOR…</h2>
            </LoginModal>
            <LoginModal visible={isModalVisible} onCancel={handleCancel} closable={true}>
                <p>{errorMessage}</p>
            </LoginModal>
        </div>
    </div>)
}

export default LoginForm