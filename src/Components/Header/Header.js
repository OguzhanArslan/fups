import { Menu, Badge } from 'antd';
import FupsIcon from "../../Components/FupsIcon/FupsIcon"
import Logo from "../../Assets/images/logo.svg"

import styles from "./Header.module.scss"
import { Link } from 'react-router-dom';
import UserAvatar from "../../Assets/images/dummy/avatar.webp"

function Header(props) {
    const { menu } = props;

    return(<header className={styles.header}>
        <div className={styles["header__logo"]}>
            <img src={Logo} alt="Fups" />
        </div>
        <div className={styles["header__menu"]}>
            <Menu mode="horizontal" defaultSelectedKeys={['hesaplar']}>
                { menu.map(menu => {
                    return (
                        <Menu.Item className={styles["header__menu-item"]} key={menu.key} icon={<FupsIcon color={"#909099"} size="20px" icon={menu.icon} />}>
                            <Link to={menu.link} className={styles["header__menu-link"]}>{menu.name}</Link>
                        </Menu.Item>
                    )
                })}
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