import { Table } from 'antd';
import { Link } from 'react-router-dom';
import classnames from "classnames"
import FupsIcon from "../../Components/FupsIcon/FupsIcon"

import styles from "./FupsTable.module.scss"

const columns = [
    {
        title: 'Info',
        dataIndex: 'info',
        key: 'info',
        width: "40px",
        render: (_, record) => (
            <div className={styles["table__info"]}>
                <div className={styles["table__info-user"]}>
                    {record?.info?.user?.image ? 
                        (<img src={require('../../Assets/images/dummy/' + record.info.user.image)} alt={record.info.user.name} />) : 
                        (<span className={styles["table__info-plus"]}><FupsIcon size="12px" color="#ffffff" icon={"plus"} /></span>)
                    }
                </div>
                <div className={styles["table__info-icon"]} style={{backgroundColor: record.info.color}}>
                    <FupsIcon size="36px" color="#ffffff" icon={record.info.icon} />
                </div>
            </div>
        ),
    },
    {
        title: 'Content',
        dataIndex: 'content',
        key: 'content',
        render: (_, record) => (
            <div className={styles["table__content"]}>
                <h3 className={styles["table__content-title"]}>{record.content.title}</h3>
                <h4 className={styles["table__content-description"]}>{record.content.description}</h4>
            </div>
        ),
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (_, record) => (
            <div className={styles["table__price"]}>
                <h3 className={classnames({
                    [styles["table__price-total"]]: true,
                    [styles["table__price-total--green"]]: record.price.status === "ingoing" && true,
                })}>
                    {record.price.status === "outgoing" && (<span className={styles["table__price-status"]}>-</span>)}
                    {(record.price.unit === "gr" ? record.price.total + record.price.unit : record.price.unit + record.price.total)}
                </h3>
                <h4 className={styles["table__price-ago"]}>{record.price.ago}</h4>
            </div>
        ),
    }
];

function FupsTable(props) {
    const { title, link, list } = props;
    return (<div className={styles.box}>
        <div className={styles["box__header"]}>
            <h2 className={styles["box__header-title"]}>{ title }</h2>
            <Link className={styles["box__header-link"]} to={ link.to }>
                <span>{ link.text }</span>
                <FupsIcon size="20px" color="#155ed4" icon={"next"} />
            </Link>
        </div>
        <div className={styles["box__content"]}>
            <Table
                className={styles.table}
                columns={columns}
                showHeader={false}
                pagination={{
                    position: ["none", "bottomCenter"],
                    pageSize: 3
                }}
                dataSource={list}
            />
        </div>
    </div>)
}

export default FupsTable