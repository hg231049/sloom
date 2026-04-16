import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import { mainVisual1,mainVisual2,mainVisual3,mainVisual4,mainVisual5 } from '../../assets/main';

const Main_visual = [
  { id: 1, alt:"메인 비주얼1", link: "/logout", src:mainVisual1 },
  { id: 2, alt:"메인 비주얼2", link: "/logout", src:mainVisual2},
  { id: 3, alt:"메인 비주얼3", link: "/logout", src:mainVisual3 },
  { id: 4, alt:"메인 비주얼4", link: "/logout", src:mainVisual4},
  { id: 5, alt:"메인 비주얼5", link: "/logout", src:mainVisual5 },
];

const Visual = () => {
    return (
            <div className="main-visual overflow-hidden w-full">
                <Swiper
                    modules={[Autoplay]} 
                    centeredSlides={true}
                    slidesPerView={1.25}
                    spaceBetween={0}
                    loop={true}
                    loopedSlides={5} 
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{            
                        1024: {                
                        slidesPerView: 4.5,     
                        spaceBetween: 0,  
                        },
                    }}
                    className="main-swiper [&_.swiper-wrapper]:items-start" // 클래스명을 주면 스타일 잡기 편해요
                    >
                    {[...Main_visual, ...Main_visual].map((item, index) => (
                        <SwiperSlide key={`${item.id}-${index}`} className='transition-transform lg:origin-top ease-in-out duration-500 scale-92 [&.swiper-slide-active]:scale-100'>
                            <a href={item.link}><img src={item.src} alt={item.alt} className='w-full'/></a>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        );
}

export default Visual;