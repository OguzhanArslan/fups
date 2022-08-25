import { Menu, Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FupsIcon from "../../Components/FupsIcon/FupsIcon"
import Logo from "../../Assets/images/logo.svg"

import styles from "./Header.module.scss"

function Header(props) {
    return(<header className={styles.header}>
        <div className={styles["header__logo"]}>
            <img src={Logo} alt="Fups" />
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['hesaplar']}>
            <Menu.Item key="hesaplar" icon={<FupsIcon color={"#909099"} size="20px" icon={"filled"} />}>
                Hesaplar
            </Menu.Item>
            <Menu.Item key="kartlar" icon={<FupsIcon color={"#909099"} size="20px" icon={"card"} />}>
                Kartlar
            </Menu.Item>
            <Menu.Item key="islemler" icon={<FupsIcon color={"#909099"} size="20px" icon={"function"} />}>
                İşlemler
            </Menu.Item>
            <Menu.Item key="kampanyalar" icon={<FupsIcon color={"#909099"} size="20px" icon={"star"} />}>
                Kampanyalar
            </Menu.Item>
        </Menu>
        <span className="avatar-item">
            <Badge count={12}>
                <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
            <p><strong>Sercan Cihangir</strong></p>
            <p>Standart</p>
        </span>
    </header>);
}

export default Header