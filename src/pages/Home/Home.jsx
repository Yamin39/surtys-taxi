import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Banner/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-dark h-[12.9rem] sm:hidden"></div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-[1440px] w-10/12 mx-auto"></div>
    </div>
  );
};

export default Home;
