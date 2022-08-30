import { Badge, Dropdown, Menu } from 'antd';
import styles from "./Avatar.module.scss"
import { Data_Types } from "../../../Data/index"

function Avatar({ isLogin, setLogin }) {
    const userInfo = JSON.parse(isLogin);
    const getType = Data_Types.types.find((type) => type.value === userInfo.type);

    const menu = (
        <Menu
            items={[
                {
                    label: 'Çıkış Yap',
                    key: '1',
                    onClick: () => {
                        localStorage.removeItem("token");
                        setLogin(false)
                    }
                },
            ]}
        />
    );

    return(
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <div className={styles.avatar}>
                <Badge className={styles["avatar__badge"]} count={12}>
                    <img src={require('../../../Assets/images/dummy/' + userInfo.image)} alt={userInfo.name} />
                </Badge>
                <div className={styles["avatar__text"]}>
                    <p className={styles["avatar__name"]}>{userInfo.name}</p>
                    <p className={styles["avatar__type"]}>{getType.label}</p>
                </div>
            </div>
        </Dropdown>
    );
}

export default Avatar