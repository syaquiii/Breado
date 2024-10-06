import Hero from "./pages/hero";
import Sticker from "./pages/sticker";
import Menus from "./pages/menus";

export default function Home() {
  return (
    <div className="font-Ubuntu bg-ourwhite">
      <Hero></Hero>
      <Sticker></Sticker>
      <Menus></Menus>
    </div>
  );
}
