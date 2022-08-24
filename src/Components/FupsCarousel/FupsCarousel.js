import { Carousel } from 'antd';

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
            <div>
                <h3 style={contentStyle}>1</h3>
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