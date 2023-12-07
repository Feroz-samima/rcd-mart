import SocialBar from "./Social-bar";
import Logobar from "../../home/logobar";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="">
      <div>
        <SocialBar />
      </div>
      <div>
        <Logobar />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
