import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import verifyMark from "../assets/verifyMark.png";
import toolMark from "../assets/tasks.png";

const TestimonialsCarousel = () => {
  const cards = [
    {
      title: "Easy to setup and use",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
      icon: verifyMark,
    },
    {
      title: "Strong Tools Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
      icon: toolMark,
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      pause
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        468: { slidesPerView: 1 },
      }}
    >
      {cards.map((element, index) => (
        <SwiperSlide key={index}>
          <section className="h-90 border-4 border-orange-500 rounded-2xl flex flex-col gap-4 items-center p-6">
            <img src={element.icon} alt={element.title} className="w-16 h-16" />
            <h1 className="capitalize text-orange-500 font-extrabold text-2xl text-center">
              {element.title}
            </h1>
            <p className="text-center text-slate-600 text-md max-w-164 pt-4">
              {element.description}
            </p>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsCarousel;
