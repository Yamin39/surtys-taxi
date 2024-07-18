import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Banner/Navbar/Navbar";
import BookNow from "../../components/BookNow/BookNow";
import CallAgent from "../../components/CallAgent/CallAgent";
import NumbersSpeak from "../../components/NumbersSpeak/NumbersSpeak";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <div className="bg-dark h-[12.9rem] sm:hidden"></div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BookNow></BookNow>
      <NumbersSpeak></NumbersSpeak>
      <CallAgent></CallAgent>
      <WhyChooseUs></WhyChooseUs>
      <div className="max-w-[1440px] w-10/12 mx-auto"></div>
    </div>
  );
};

export default Home;
