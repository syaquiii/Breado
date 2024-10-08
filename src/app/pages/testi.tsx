import Image from "next/image";
import Pie from "@/app/assets/pie.svg"
import Dika from "../assets/dika.jpg"
import Candra from "../assets/candra.jpg"
import Rapi from "../assets/rapi.jpg"


const Testi = () => {

    const TestiData = [
        {id : 1, title : "DELUXE SAVORY PIE WITH MOZARELLA", nama : "Andhika Gusti Al-Fahrezi", img : Dika},
        {id : 2, title : "PREMIUM CHOCOLATE CAKE", nama : "Nadine Candra Prabs", img : Candra}
    ]
    return (
        <div className=" min-h-[50vh] bg-ourwhite pb-10 lg:py-[5vh] bg-big lg:-mt-[30vh] px-12 lg:px-[14vh]">
            <div className="lg:flex lg:items-center flex-col">
                <h1 className="text-4xl lg:text-[6vh] lg:w-[60%] text-ourgray text-center lg:leading-[10vh]"><span className="text-ourbrown">DELUXE</span> SAVOURY PIE WITH MOZZARELA</h1>
                <Image className="lg:w-[50vh] ms-[2vh] lg:-mr-[8vh] lg:-mt-[2vh]"
                    src={Pie}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                {/* BREAKER */}
                <div className="lg:w-[40vw] lg:min-h-[30vh]">
                    <div>
                        <p className="lg:text-[2.5vh] text-justify text-ourgray font-light">'A <span className="text-ourbrown font-semibold">Deluxe</span> Savory Pie with Mozzarella is a delightful combination of a flaky, buttery crust filled with a rich and cheesy mixture. The mozzarella cheese provides a gooey, stringy texture that melts beautifully when the pie is baked. The filling can be customized with various ingredients like vegetables, meats, or herbs to create different flavor profiles.'</p>
                    </div>
                    <div className="flex items-center gap-x-5 mt-8">
                        <Image className="lg:w-[5vh] w-14 aspect-square rounded-full"
                            src={Dika}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />

                        <div className="flex justify-between w-full gap-x10 items-center">
                            <div className="lg:w-[40]">
                                <h4 className="lg:text-[2vh] text-lg font-semibold">Andhika Gusti Al-Fahrezi</h4>
                                <div className="flex gap-x-4">  
                                <span className="">Customer</span>
                                </div>
                            </div>
                            <p className="lg:w-[55%] hidden lg:block text-right lg:text-sm text-ourgray font-light">Our customers are always satisfied with the products we make, this satisfaction will always be maintained and developed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testi;