import styles from "./Login.module.scss"
import Logo from "../../Assets/images/logo.svg"
import QrImage from "../../Assets/images/login/qr.webp"
import FupsList from "../../Components/FupsList/FupsList"
import { Form } from 'antd';
import FupsSelect from "../../Components/FupsSelect/FupsSelect"
import FupsInput from "../../Components/FupsInput/FupsInput"
import FupsButton from "../../Components/FupsButton/FupsButton"

import { Data_Login } from "../../Data/index"


function Login() {
    const { users } = Data_Login;
    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(Data_Login.users)
        const userData = users.find((user) => user.username === values.username && user.password === values.password);
        console.log("userData", userData)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (<div className={styles.login}>
        <div className={styles["login__left"]}>
            <div className={styles["login__header"]}>
                <div className={styles["login__header-logo"]}>
                    <img src={Logo} alt="Fups" />
                </div>
                <div className={styles["login__header-btn"]}>
                    <FupsButton text="KAYIT OL" />
                </div>
            </div>
            <div className={styles["login__content"]}>
                <div className={styles["login__form"]}>
                    <h1>Kullanıcı Girişi</h1>
                    <p>Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.</p>
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="type"
                            rules={[{ required: true, message: 'Please input your type!' }]}
                        >
                            <FupsSelect placeholder="Kullanıcı Tipi" options={[{ label: "Standart Hesap", value: 0 }, { label: "Onaylı Hesap", value: 1 }, { label: "Premium Hesap", value: 2 }]} />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <FupsInput placeholder="Kullanıcı Adı" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <FupsInput placeholder="Şifren" />
                        </Form.Item>
                        <Form.Item>
                            {/* <a className="login-form-forgot" href="#">Şifremi Unuttum</a> */}
                            <FupsButton type="primary" htmlType="submit" text="GİRİŞ YAP" />
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
        <div className={styles["login__right"]}>
            <div className={styles["login__right-content"]}>
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
            <div className={styles["login__right-image"]}>
                <img src={QrImage} alt="" className={styles["login__right-image"]} />
            </div>
        </div>
    </div>)
}

export default Login