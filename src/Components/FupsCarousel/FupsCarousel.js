import { Carousel } from 'antd';
import styles from "./FupsCarousel.module.scss";

import FupsIcon from "../../Components/FupsIcon/FupsIcon"
import Turkcell from "../../Assets/images/dummy/turkcell.webp";
import TurkTelekom from "../../Assets/images/dummy/turktelekom.webp";
import Ucretsiz from "../../Assets/images/dummy/ucretsiz.webp";
import { Link } from 'react-router-dom';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginRight: "30px"
};

function FupsCarousel() {
    return(<>
        <Carousel slidesToShow={4} swipeToSlide draggable>
            <div className={styles["promo__item"]}>
                <div className={styles["promo__image"]}>
                    <img src={Turkcell} alt="TURKCELL KAMPANYASI" />
                </div>
                <div className={styles["promo__content"]}>
                    <h3 className={styles["promo__content-title"]}>TURKCELL KAMPANYASI</h3>
                    <p className={styles["promo__content-text"]}>Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.</p>
                    <Link to="#">
                        <a><FupsIcon color={"#909099"} size="20px" icon={"right"} /></a>
                    </Link>
                </div>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
            <div>
                <h3 style={contentStyle}>5</h3>
            </div>
            <div>
                <h3 style={contentStyle}>6</h3>
            </div>
        </Carousel>
    </>)
}

export default FupsCarousel;