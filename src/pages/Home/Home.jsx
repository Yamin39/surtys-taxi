import { FaAngleUp } from "react-icons/fa6";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Banner/Navbar/Navbar";
import BookNow from "../../components/BookNow/BookNow";
import BrandSlider from "../../components/BrandSlider/BrandSlider";
import CallAgent from "../../components/CallAgent/CallAgent";
import CallNowBottom from "../../components/CallNowBottom/CallNowBottom";
import ChooseTaxi from "../../components/ChooseTaxi/ChooseTaxi";
import FirstChoice from "../../components/FirstChoice/FirstChoice";
import Footer from "../../components/Footer/Footer";
import NumbersSpeak from "../../components/NumbersSpeak/NumbersSpeak";
import TaxiFares from "../../components/TaxiFares/TaxiFares";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-dark h-[12.9rem] sm:hidden"></div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BookNow></BookNow>
      <FirstChoice></FirstChoice>
      <NumbersSpeak></NumbersSpeak>
      <CallAgent></CallAgent>
      <ChooseTaxi></ChooseTaxi>
      <BrandSlider></BrandSlider>
      <WhyChooseUs></WhyChooseUs>
      <TaxiFares></TaxiFares>
      <CallNowBottom></CallNowBottom>
      <Footer></Footer>

      <button className="scroll-to-top" onClick={() => document.getElementById("home").scrollIntoView()}>
        <FaAngleUp className="scroll-to-top-icon"></FaAngleUp>
      </button>
    </div>
  );
};

export default Home;
