import styles from "./FupsHeader.module.scss"
import classnames from "classnames";

import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import Avatar from './Avatar/Avatar'

function Header({ menu, isLogin, setLogin }) {
    return(<header className={classnames({
        "container": true,
        [styles.header] : true
    })}>
        <Logo />
        <Menu menu={menu} />
        <Avatar isLogin={isLogin} setLogin={setLogin} />
    </header>);
}

export default Header