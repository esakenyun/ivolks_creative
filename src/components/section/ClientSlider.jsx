import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ClientSection = ({ clients }) => {
  return (
    <div className="py-[2%] px-[4%]">
      <h2 className="text-3xl font-bold mb-6">Our Clients</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0} // Tidak ada gap antar slide
        slidesPerView={7}
        autoplay={{
          delay: 0, // Menghapus delay antara transisi slide
          disableOnInteraction: false, // Memastikan autoplay terus berjalan meskipun pengguna berinteraksi
          stopOnLastSlide: false,
        }}
        speed={3000} // Kecepatan lebih cepat
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 0, // Gap di breakpoint kecil juga 0
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 0, // Gap di breakpoint menengah juga 0
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 0, // Gap di breakpoint besar juga 0
          },
        }}
        className="clients-slider">
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center !m-0">
            <div className="relative w-28 h-28">
              <Image src={client.imageUrl} alt={client.name} className="grayscale hover:grayscale-0 cursor-pointer object-contain w-full h-full" width={100} height={100} priority title={client.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSection;
