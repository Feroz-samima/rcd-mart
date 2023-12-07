import * as React from "react";
import { Menu } from "lucide-react";
import { CategoriesCard } from "../../custom/categories-card";
import Icon from "../../custom/icon";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "HOME", path: "#" },
    { title: "FEATURES", path: "#" },
    { title: "PAGES", path: "#" },
    { title: "CATEGORIES", path: "#" },
    { title: "ACCESSORIES", path: "#" },
    { title: "BLOG", path: "#" },
  ];

  return (
    <nav className=" w-full border-b-4 border-b-red-500">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <CategoriesCard />
          <div className=" flex md:hidden">
            <Icon />
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-4 md:flex md:space-x-2 md:space-y-0">
            {menus.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-white px-2 py-2 rounded-sm hover:bg-red-500 font-semibold"
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
