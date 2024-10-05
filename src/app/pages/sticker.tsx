import Image from "next/image";
import ImgSticker from "../assets/img-sticker.svg";

const sticker = () => {
  const buttonList = [{}];
  return (
    <div className="bg-ourgray min-h-[45rem] w-full  ">
      <div className="lg:gap-10 lg:flex px-12 lg:px-32 py-20 lg:py-36 ">
        <div className="lg:w-1/2">
          <Image
            className="w-[40rem]"
            src={ImgSticker}
            width={0}
            height={0}
            alt="Picture of the author"
          />
        </div>
        <div className=" lg:w-1/2 text-white mt-5 lg:mt-20">
          <h1 className="lg:text-[4rem] lg:leading-[4rem] text-4xl font-bold">
            Premium bread, crafted with care.
          </h1>
          <p className="lg:w-[90%] mt-5 text-2xl  lg:text-4xl lg:font-normal font-light">
            Our breads are made with quality and flavor in every bite, made
            fresh from the oven for a more premium taste.
          </p>
          <button className="bg-ourwhite px-4 py-2 w-full text-ourgray font-semibold  rounded-xl mt-5">
            100+ store around the world
          </button>
        </div>
      </div>
    </div>
  );
};
export default sticker;
