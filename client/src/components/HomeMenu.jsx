import { useState } from 'react';
import { menuData } from '../data';
import '../styles/homeMenu.scss';
import HomeMenuCarousel from './HomeMenuCarousel';

const HomeMenu = () => {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [imgDataIndex, setImgDataIndex] = useState(0);
  return (
    <>
    {
        isCarouselOpen && <HomeMenuCarousel menuData={menuData[imgDataIndex]} setIsCarouselOpen={setIsCarouselOpen} />
    }
        <section className='homeMenuSection'>
            {
                menuData.map((data,index) => (
                    <div className="menuContainer" key={data.id}>
                        <h1>{data.title}</h1>
                        <div className="menuContainerImgContainer" style={{
                            gridTemplateColumns:`repeat(${data.images.length}, 350px)`
                        }}>
                            {data.images.map((menu,i) => <img 
                                key={i} 
                                src={menu} 
                                alt={data.title} 
                                onClick={() => {

                                    setIsCarouselOpen(true)
                                    setImgDataIndex(index)
                                }}
                            />)}
                        </div>
                    </div>
                ))
            }
            
        </section>
    </>
  )
}

export default HomeMenu