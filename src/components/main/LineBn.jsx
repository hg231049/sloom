import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import { lineBn } from '../../assets/main';

const Line_Bn = [
  { id: 1, alt:"슬라이드 띠배너1", link: "/logout", src:lineBn },
  { id: 2, alt:"슬라이드 띠배너2", link: "/logout", src:lineBn},
];

const LineBn = () => {
    return (
            <div className="main-box box3 line-bn w-full mb-[70px] ">
                <Swiper
                    modules={[Autoplay]} 
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    >
                    {Line_Bn.map((item, index) => (
                        <SwiperSlide key={`${item.id}-${index}`} className=''>
                            <a href={item.link}><img src={item.src} alt={item.alt} className='w-full'/></a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
}

export default LineBn;