import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import classnames from "classnames";
import { Carousel } from 'antd';
import FupsIcon from "../../Components/FupsIcon/FupsIcon"
import styles from "./FupsCarousel.module.scss";

function FupsCarousel(props) {
    const { title, list } = props;
    const [prevStatus, setPrevStatus] = useState(true);
    const [nextStatus, setNextStatus] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const promo = useRef(null);
    
    useEffect(() => {
        setPrevStatus(currentSlide === 0);
        setNextStatus(currentSlide === Math.round(promo.current.innerSlider.state.slideCount / 4));
    }, [currentSlide]);
    
    return(<>
        <div className={classnames({
            "container": true,
            [styles["promo__header"]]: true
        })}>
            <h2 className={styles["promo__header-title"]}>{title}</h2>
            <div className={styles["promo__header-arrow"]}>
                <button className={styles["promo__header-btn"]} onClick={() => promo.current.prev()}><FupsIcon color={prevStatus ? "#c0c0cc" : "#17171a"} size="20px" icon={"prev"} /></button>
                <button className={styles["promo__header-btn"]} onClick={() => promo.current.next()}><FupsIcon color={nextStatus ? "#c0c0cc" : "#17171a"} size="20px" icon={"next"} /></button>
            </div>
        </div>
        <Carousel ref={promo} className={styles.promo} slidesToShow={4.2} slidesToScroll={1} infinite={false} swipeToSlide draggable beforeChange={(current, next) => {
                setCurrentSlide(Math.round(next))
            }} responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}>
                { list.map((item, index) => {
                    const { title, description, url, image } = item;
                    let promoImage = require('../../Assets/images/dummy/' + image);
                    return (
                        <div key={index}>
                            <div className={styles["promo__item"]}>
                                <div className={styles["promo__image"]}>
                                    <img src={promoImage} alt={title} />
                                </div>
                                <div className={styles["promo__content"]}>
                                    <h3 className={styles["promo__content-title"]}>{title}</h3>
                                    <p className={styles["promo__content-text"]}>{description}</p>
                                    <Link className={styles["promo__content-link"]} to={url}>
                                        <FupsIcon size="12px" icon={"right"} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </Carousel>
    </>)
}

export default FupsCarousel;