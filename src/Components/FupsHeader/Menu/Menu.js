import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from "classnames"
import FupsIcon from "../../FupsIcon/FupsIcon"
import styles from "./Menu.module.scss"


function Menu(props) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const {menu} = props;

    useEffect(() => {
        if(mobileMenu) {
            document.querySelector("body").classList.add("navopen")
        } else {
            document.querySelector("body").classList.remove("navopen")
        }
    }, [mobileMenu])

    return(<nav className={classnames({
        [styles.nav] : true,
        [styles["nav--active"]]: mobileMenu
    })}>
        <div className={styles["nav__icon"]} onClick={() => setMobileMenu(!mobileMenu)}>
            <span></span><span></span><span></span>
        </div>
        <ul className={styles.menu}>
            { menu.map(item => {
                return (
                    <li className={classnames({
                        [styles["menu__item"]]: true,
                        [styles["menu__item--active"]]: item.active
                    })} key={item.key}>
                        <Link to={item.link} className={styles["menu__link"]}>
                            <FupsIcon className={styles["menu__icon"]} size="36px" icon={item.icon} />
                            <span className={styles["menu__name"]}>{item.name}</span>
                        </Link>
                        {(item.sublist && (
                            <ul className={styles.submenu}>
                                {item.sublist.map((sub) => (
                                    <li className={styles["submenu__item"]} key={sub.key}>
                                        <Link to={sub.link} className={styles["submenu__link"]}>
                                            {sub.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </li>
                )
            })}
        </ul>
    </nav>);
}

export default Menu