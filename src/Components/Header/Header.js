import { Menu, Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FupsIcon from "../../Components/FupsIcon/FupsIcon"
import Logo from "../../Assets/images/logo.svg"

import styles from "./Header.module.scss"
import { Link } from 'react-router-dom';
import UserAvatar from "../../Assets/images/dummy/avatar.webp"

function Header(props) {
    return(<header className={styles.header}>
        <div className={styles["header__logo"]}>
            <img src={Logo} alt="Fups" />
        </div>
        <div className={styles["header__menu"]}>
            <Menu mode="horizontal" defaultSelectedKeys={['hesaplar']}>
                <Menu.Item key="hesaplar" icon={<FupsIcon color={"#909099"} size="20px" icon={"filled"} />}>
                    <Link to="/dashboard">
                        <a>Hesaplar</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="kartlar" icon={<FupsIcon color={"#909099"} size="20px" icon={"card"} />}>
                    <Link to="/dashboard">
                        <a>Kartlar</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="islemler" icon={<FupsIcon color={"#909099"} size="20px" icon={"function"} />}>
                    <Link to="/dashboard">
                        <a>İşlemler</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="kampanyalar" icon={<FupsIcon color={"#909099"} size="20px" icon={"star"} />}>
                    <Link to="/dashboard">
                        <a>Kampanyalar</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
        
        <div  className={styles["header__avatar"]}>
            <Badge className={styles["header__avatar-badge"]} count={12}>
                <img src={UserAvatar} alt="Sercan Cihangir" />
            </Badge>
            <div className={styles["header__avatar-text"]}>
                <p className={styles["header__avatar-name"]}>Sercan Cihangir</p>
                <p className={styles["header__avatar-type"]}>Standart</p>
            </div>
        </div>
    </header>);
}

export default Header