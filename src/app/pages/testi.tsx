'use client'
import Image from "next/image";
import Pie from "@/app/assets/pie.svg";
import Dika from "../assets/dika.jpg";
import Candra from "../assets/candra.jpg";
import Rapi from "../assets/rapi.jpg";
import Macarons from "../assets/macarons.png";
import cake from "../assets/cake.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testi = () => {

    const TestiData = [
        {id : 1, title : "DELUXE SAVORY PIE WITH MOZARELLA", nama : "Andhika Gusti Al-Fahrezi", img : Dika, roti : Pie, style : "lg:w-[50vh]  ms-[2vh] lg:-mr-[8vh] lg:my-[3vh]", desc: "A Deluxe Savory Pie with Mozzarella is a delightful combination of a flaky, buttery crust filled with a rich and cheesy mixture. The mozzarella cheese provides a gooey, stringy texture that melts beautifully when the pie is baked. The filling can be customized with various ingredients like vegetables, meats, or herbs to create different flavor profiles."},
        {id : 2, title : "PREMIUM CHOCOLATE CAKE", nama : "Nadine Candra Prabs", img : Candra, roti: cake, style : "lg:w-[80vh] my-24 lg:my-4 lg:-ms-[5vh] lg:-mr-[8vh] lg:my-[3vh]", desc : "This chocolate cake slice is a dream come true! The cake is incredibly moist and fluffy, and the chocolate frosting is rich and creamy. The chocolate shavings on top add a beautiful touch. Every bite is pure indulgence."},
        {id : 3, title : "RAINBOW SWEET MACARONS", nama : "Muhammad Rafi Hasbi", img : Rapi, roti:Macarons,style : "lg:w-[50vh] my-[3vh] lg:-ms-[5vh] lg:-mr-[8vh] lg:my-[3vh]", desc:"I've tried macarons from several places, but these are by far the best! The shells are perfectly crisp and chewy, and the fillings are bursting with flavor. The [flavor] one is my favorite - it's so creamy and decadent. I'll definitely be ordering again!"}
    ]

    const TestiShow = TestiData.map((TestiData) => (
        <SwiperSlide key={TestiData.id}><div className="lg:flex lg:items-center  flex-col">
        <h1 className="text-4xl lg:text-[6vh] font-bold  lg:w-[40%] text-ourgray text-center lg:leading-[10vh]">{TestiData.title}</h1>
        <Image className={TestiData.style}
            src={TestiData.roti}
            width={500}
            height={500}
            alt="Picture of the author"
        />
        {/* BREAKER */}
        <div className="lg:w-[40vw] lg:min-h-[30vh]">
            <div>
                <p className="lg:text-[2.5vh] text-justify text-ourgray font-light">{TestiData.desc}</p>
            </div>
            <div className="flex items-center gap-x-5 mt-8">
                <Image className="lg:w-[5vh] w-14 aspect-square rounded-full"
                    src={TestiData.img}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />

                <div className="flex justify-between w-full gap-x10 items-center">
                    <div className="lg:w-[40]">
                        <h4 className="lg:text-[2vh] text-lg font-semibold">{TestiData.nama}</h4>
                        <div className="flex gap-x-4">  
                        <span className="">Customer</span>
                        </div>
                    </div>
                    <p className="lg:w-[55%] hidden lg:block text-right lg:text-sm text-ourgray font-light">Our customers are always satisfied with the products we make, this satisfaction will always be maintained and developed.</p>
                </div>
            </div>
        </div>
    </div></SwiperSlide>
    ))
    return (
        <div className="mt-20 min-h-[50vh] bg-ourwhite pb-10 lg:py-[5vh] bg-big lg:-mt-[30vh] px-12 lg:px-[14vh]">
             <Swiper
      spaceBetween={1}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
    {TestiShow}
    </Swiper>
        </div>
    )
}
export default Testi;