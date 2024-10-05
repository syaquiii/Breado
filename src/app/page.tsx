import Image from "next/image";
import Hero from "./pages/hero";
import Sticker from "./pages/sticker";

export default function Home() {
  return (
    <div className="font-Ubuntu">
      <Hero></Hero>
      <Sticker></Sticker>
    </div>
  );
}
