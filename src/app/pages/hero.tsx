import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

const hero = () => {
  return (
    <div>
      <div className="hero-bg px-12 w-full h-[100vh] lg:px-32 py-14">
        <nav className="text-white flex items-center justify-between">
          <div className="text-3xl lg:text-5xl font-bold">
            <span>Breado</span>
          </div>
          <div className="text-white lg:flex  lg:gap-20 lg:text-4xl font-medium lg:block hidden">
            <span>Home</span>
            <span>Signature</span>
            <span>Menu</span>
          </div>
        </nav>
        <div className="text-white   mt-[6rem] lg:mt-[15rem] 2xl:mt-[10rem] lg:w-2/3">
          <span className="text-5xl lg:text-8xl  ">Breado | Bakery Store</span>
          <div className="lg:text-xl text-white font-medium lg:w-2/3 mt-10  glass p-5 text-justify">
            <p>
              Breado is more than just a bakery. With an extensive global
              network, Breado has captured the hearts of customers around the
              world with its premium quality breads. Every bite of Breado bread
              is a journey of amazing flavors, taking you to explore the
              delights of bread from around the world. As the first choice of
              bread lovers, Breado is always committed to delivering an
              unforgettable culinary experience.
            </p>
          </div>
          <button className="px-5 py-2 w-fit mt-10 lg:mt-5 glass text-xl flex gap-x-4 items-center">
            <span>Taste Our Greatness </span>
            <ChevronDoubleRightIcon className="size-6"></ChevronDoubleRightIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
