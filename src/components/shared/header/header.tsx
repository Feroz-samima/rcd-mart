import SocialBar from "./Social-bar";
import Logobar from "../header/logobar";
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
