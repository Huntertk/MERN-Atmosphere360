import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/homeMenuCarousel.scss';
import { IoClose } from "react-icons/io5";
const HomeMenuCarousel = ({menuData, setIsCarouselOpen}) => {
  return (
    <div className="carouselContainer">
        <IoClose onClick={() => setIsCarouselOpen(false)} /> 
        <Carousel
         showThumbs={false}
         autoPlay={true}
         infiniteLoop={true}
        >
            {
                menuData.images.map((im, i) => (
                    <div className="imgContainer" key={i}>
                    <img src={im} alt={menuData.title} />
                </div>
                ))
            }
            </Carousel>
    </div>
  )
}

export default HomeMenuCarousel