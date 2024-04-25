import NavbarApple from "./components/NavbarApple";
import HeroApple from "./components/HeroApple";
import HighlighApple from "./components/HighlighApple";
import Model from "./components/Model";
import Features from "./components/Features";
import HowitWorks from "./components/HotitWorks";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="">
      <NavbarApple />
      <HeroApple />
      <HighlighApple />
      <Model/>
      <Features/>
      <HowitWorks/>
      <Footer/>
    </main>
  );
};

export default App;
