import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropertyCard from "@/features/common/modules/PropertyCard/PropertyCard";
import { useIsDesktop } from "@/features/common/Hooks/useIsDesktop";

const PropertySlider = ({featuredProperties}) => {
  const {isDesktop} = useIsDesktop();
  return (
    <Swiper
    //Inserir o Hook customizado e definir quantos slides serão exibidos por vez: desktop 3 e mobile 1
      style={{"--swiper-navigation-color": "green",
      "--swiper-pagination-color": "green"}}
      slidesPerView={isDesktop ? 3 : 1}
      spaceBetween={10}
      loop={true} //True para continuar a transição dos slides
      centeredSlides={true}
      autoplay={{ delay:2000, disableOnInteraction:true }}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ dynamicBullets: true }}
      modules={ [Autoplay, Pagination]}
      className="mySwiper"
    >
      {featuredProperties.map((property) => (
        <SwiperSlide key={property.id}>
          <PropertyCard {...property}/>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default PropertySlider;
