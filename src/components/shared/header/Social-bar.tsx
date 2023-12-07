import { Facebook, Instagram, Linkedin, LockIcon, Twitter } from "lucide-react";
import Currency from "../../custom/currency";
import Language from "../../custom/language";

const SocialBar = () => {
  return (
    <div className=" flex justify-between  items-center w-full h-[50px] bg-slate-500 max-md:justify-between ">
      <div className="flex justify-between">
        <div className="flex max-md:hidden md:pl-24">
          <a href="#">
            <Facebook className="border mx-2 rounded-sm p-1" size={32} />
          </a>
          <a href="#">
            <Twitter className="border mx-2 rounded-sm p-1" size={32} />
          </a>
          <a href="#">
            <Linkedin className="border mx-2 rounded-sm p-1" size={32} />
          </a>
          <a href="#">
            <Instagram className="border mx-2 rounded-sm p-1" size={32} />
          </a>
        </div>
        <div className="flex">
          <Currency />
          <Language />
        </div>
      </div>
      <div className=" flex mx-3">
        <LockIcon className=" text-red-500" size={20} />
        <a href="#" className=" text-white px-2 hover:bg-red-500">
          Login
        </a>
        <a href="#" className=" text-white px-2 hover:bg-red-500">
          Register
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
