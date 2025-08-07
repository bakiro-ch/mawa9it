import Navbar from "../layout/NavBar";
import NextPrayer from "../features/nextPrayer/components/NextPrayer";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <NextPrayer />
    </div>
  );
};

export default Home;
