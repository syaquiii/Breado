import Image from "next/image";
import ImgSticker from "../assets/img-sticker.svg";

const sticker = () => {
  const StickerList = [
    {
      id: 1,
      title: "100+ Stores around the globe  ",
    },
    {
      id: 2,
      title: "Made by experienced bakers",
    },
  ];

  const StickerShow = StickerList.map((StickerList) => (
    <button
      key={StickerList.id}
      className="bg-ourwhite px-4 py-2 w-full text-ourgray lg:text-[2vh] font-semibold  rounded-xl mt-5"
    >
      {StickerList.title}
    </button>
  ));
  return (
    <div className="bg-ourgray h-fit w-full  ">
      <div className="lg:gap-10 lg:flex px-12 lg:px-[10vh] py-20 lg:py-[10vh] ">
        <div className="lg:w-1/2">
          <Image
            className="w-[70vh]"
            src={ImgSticker}
            width={0}
            height={0}
            alt="Picture of the author"
          />
        </div>
        <div className=" lg:w-1/2 text-white mt-5 lg:mt-[8vh]">
          <h1 className="lg:text-[6vh] lg:leading-[4rem] text-4xl font-bold">
            Premium bread, crafted with care.
          </h1>
          <p className="lg:w-[90%] mt-5 lg:mt-0 text-2xl text-justify  lg:text-[3vh] lg:font-normal font-light">
            Our breads are made with quality and flavor in every bite, made
            fresh from the oven for a more premium taste.
          </p>
          <div className="lg:flex gap-x-8 lg:w-[90%]">{StickerShow}</div>
        </div>
      </div>
    </div>
  );
};
export default sticker;
