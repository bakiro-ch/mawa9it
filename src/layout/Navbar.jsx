import { Clear } from "../components/icons/Clear";
import Lang from "../components/icons/Lang";
import { useState } from "react";

const Navbar = () => {
  const [diplayNavbarItems, setDisplayNavbarItems] = useState("false");
  const navbarItems = () => {
    return (
      <div className="lg:hidden h-screen backdrop-blur-sm bg-primary/60 flex absolute z-999 w-full items-center">
        <ul className=" text-background/90 flex flex-col justify-center items-center gap-11 font-bold h-1/2  w-full text-md">
          <li className="cursor-pointer hover:text-secondary">Home</li>
          <li className="cursor-pointer hover:text-secondary">Prayer Times</li>
          <li className="cursor-pointer hover:text-secondary">
            Qibla Direction
          </li>
          <li className="cursor-pointer hover:text-secondary">Calendar</li>
        </ul>
      </div>
    );
  };
  return (
    <div>
      <nav className="w-full h-15 bg-primary text-background sticky top-0">
        <ul className="flex lg:justify-between justify-around lg:px-15 h-full items-center">
          <li>
            <ul className="flex items-center">
              <li>
                <img
                  className="mt-4"
                  src="../assets/icons/logo.svg"
                  alt="logo.svg"
                  height={"80px"}
                  width={"80px"}
                />
              </li>
              <li className="text-secondary font-Lexend font-bold text-2xl">
                Mawa9it
              </li>
            </ul>
          </li>
          <li>
            <ul className="hidden lg:flex gap-16 text-md font-medium">
              <li className="cursor-pointer text-background hover:text-secondary">
                Home
              </li>
              <li className="cursor-pointer text-background hover:text-secondary">
                Prayer Times
              </li>
              <li className="cursor-pointer text-background hover:text-secondary">
                Qibla Direction
              </li>
              <li className="cursor-pointer text-background hover:text-secondary">
                Calendar
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex gap-4">
              <li className="text-secondary hidden cursor-pointer lg:inline">
                <Clear />
              </li>
              <li className="cursor-pointer hidden lg:inline">
                <Lang />
              </li>
              <li onClick={() => setDisplayNavbarItems(!diplayNavbarItems)}>
                <img
                  className="lg:hidden cursor-pointer"
                  src="/src/assets/icons/list.svg"
                  alt="list"
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {diplayNavbarItems == true ? navbarItems() : <></>}
    </div>
  );
};

export default Navbar;
