"use client";
import Image from "next/image";
import Menus1 from "../assets/menus-1.svg";
import Menus2 from "../assets/menus-2.svg";


const menus = () => {

  return (
    <div className="bg-menus min-h-[100rem] pt-[5rem] pb-20 lg:py-[10vh]  px-12 lg:px-[14vh]">
      {/* FIRSTT CONTENT */}
      <div className="w-full flex flex-col-reverse mt-22 lg:mt-0 lg:flex-row items-center ">
        <div className="lg:w-[70%] lg:mt-[5rem]">
          <h1 className="lg:text-[6vh] text-4xl text-center lg:text-left font-bold text-ourbrown">
            OUR <span className="text-ourgray">SIGNATURE</span> SOURDOUGH
          </h1>
          <p className="lg:w-2/3 lg:text-[3vh] text-justify text-xl mt-5">
            Experience our delicious sourdough bread made with love and
            patience. The natural fermentation process over many days results in
            a distinctive sour flavor and chewy texture. Perfect with peanut
            butter or cheese.
          </p>
          <button className="bg-ourgray mt-5 px-4 py-2 w-full lg:w-fit lg:text-[3vh] font-semibold text-ourwhite   rounded-xl lg:mt-10">
            Order now and taste the difference
          </button>
        </div>
        <div className="lg:w-[30%] mb-10">
          <Image
            src={Menus1}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* SECOND CONTENT*/}
      <div className="w-full mt-24  lg:mt-[8vh] mt flex flex-col-reverse lg:flex-row-reverse items-center ">
        <div className="lg:w-[60%] lg:mt-[5rem]  lg:pl-[25vh] ">
          <h1 className="lg:text-[6vh] text-4xl text-center  tracking-tighter lg:text-left font-bold text-ourbrown">
            OUR <span className="text-ourgray">BEST SELLER</span> COOKIES
          </h1>
          <p className="lg:w-3/3 lg:text-[3vh] text-xl mt-5 text-justify">
            Savor the crunch of every bite of our chocolate chip cookies!
            Handcrafted from premium quality ingredients, our cookies have the
            perfect crunchy texture and melt-in-your-mouth chocolate chunks.
          </p>
          <button className="bg-ourgray mt-5 px-4 py-2 w-full lg:w-fit lg:text-[3vh] font-semibold text-ourwhite   rounded-xl lg:mt-5">
            Order now and feel the chocolate{" "}
          </button>
        </div>
        <div className="lg:w-[40%] mb-10">
          <Image
            src={Menus2}
            width={700}
            height={700}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* THIRD CONTENT */}
     
    </div>
  );
};

export default menus;
