import Slider from "react-slick"
import { ArrowNext, ArrowPrev } from "../sections/Arrow"

const ProductSlider = (props) => {

    return (
        <Slider
            {...{
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: props.item ?? 6,
                slidesToScroll: props.item ?? 6,
                nextArrow: <ArrowNext type="next" className="fad fa-angle-right fa-slick fa-slick-right" />,
                prevArrow: <ArrowPrev type="prev" className="fad fa-angle-left fa-slick fa-slick-left" />,
                responsive: [
                    {
                        breakpoint: 1382,
                        settings: {
                            slidesToShow: props.item ?? 6, slidesToScroll:  props.item ?? 6, infinite: true, dots: true
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4, slidesToScroll: 4, initialSlide: 4
                        }
                    },
                    {
                        breakpoint: 975,
                        settings: {
                            slidesToShow: 3, slidesToScroll: 3, initialSlide: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2, slidesToScroll: 2 ,dots: false
                        }
                    },
                    {
                        breakpoint: 458,
                        settings: {
                            slidesToShow: 2, slidesToScroll: 2  ,dots: false
                        }
                    },
                    {
                        breakpoint: 0,
                        settings: {
                            slidesToShow: 2, slidesToScroll: 2  ,dots: false
                        }
                    },
                ]
            }}

        >
            {props.children}
        </Slider>
    )
}

export default ProductSlider