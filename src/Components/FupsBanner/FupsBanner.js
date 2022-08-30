import { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import FupsIcon from "../../Components/FupsIcon/FupsIcon"
import styles from "./FupsBanner.module.scss";

function FupsBanner({ title, description, url, image }) {
    const [bannerShow, setBannerShow] = useState(true);
    const bannerImage = require('../../Assets/images/dummy/' + image);

    return(<div className={classnames({
        "container": true,
        [styles.banner] : true,
        [styles["banner--active"]]: bannerShow
    })}>
        <div className={styles["banner__content"]}>
            <h3 className={styles["banner__content-title"]}>{title}</h3>
            <p className={styles["banner__content-text"]}>{description}</p>
            <Link className={styles["banner__content-link"]} to={url.link}>{url.text}</Link>
        </div>
        <div className={styles["banner__image"]}>
            <img src={bannerImage} alt={title} />
        </div>
        <button className={styles["banner__close"]} onClick={() => setBannerShow(false)}><FupsIcon size="20px" icon={"close"} /></button>
    </div>)
}

export default FupsBanner;