import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
    
    return(<div className={styles.box}>
        <div className={styles["box__header"]}>
            <h2 className={styles["box__header-title"]}>{title}</h2>
            <div className={styles["box__header-arrow"]}>
                <button className={styles["box__header-btn"]} onClick={() => promo.current.prev()}><FupsIcon color={prevStatus ? "#c0c0cc" : "#17171a"} size="20px" icon={"prev"} /></button>
                <button className={styles["box__header-btn"]} onClick={() => promo.current.next()}><FupsIcon color={nextStatus ? "#c0c0cc" : "#17171a"} size="20px" icon={"next"} /></button>
            </div>
        </div>
        <div className={styles["box__content"]}>
            <Carousel ref={promo} className={styles.promo} slidesToShow={4.2} slidesToScroll={1} infinite={false} swipeToSlide draggable beforeChange={(current, next) => {
                setCurrentSlide(Math.round(next))
            }}>
                { list.map(item => {
                    let image = require('../../Assets/images/dummy/' + item.image);
                    return (
                        <div>
                            <div className={styles["promo__item"]}>
                                <div className={styles["promo__image"]}>
                                    <img src={image} alt={item.title} />
                                </div>
                                <div className={styles["promo__content"]}>
                                    <h3 className={styles["promo__content-title"]}>{item.title}</h3>
                                    <p className={styles["promo__content-text"]}>{item.description}</p>
                                    <Link className={styles["promo__content-link"]} to={item.link}>
                                        <FupsIcon size="12px" icon={"right"} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </Carousel>
        </div>
    </div>)
}

export default FupsCarousel;