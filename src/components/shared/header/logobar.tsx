import Icon from "../../custom/icon";
import Logo from "../../custom/logo";

const Logobar = () => {
  return (
    <div className="flex justify-between items-center mx-5 max-md:justify-center">
      <div className=" flex items-center">
        <Logo />
        <h1 className="italic text-5xl font-bold font text-red-500">
          AUTOPARTS
        </h1>
      </div>
      <div className=" flex max-md:hidden items-center">
        <Icon />
        <div className=" border flex items-center p-2 rounded-sm shadow-lg">
          <span className=" font-semibold">My Cart =&nbsp;</span>{" "}
          <span className=" text-red-400 font-semibold">${162.0}</span>
        </div>
      </div>
    </div>
  );
};

export default Logobar;
