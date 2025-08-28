import { Clear } from "../components/icons/Clear";
import Lang from "../components/icons/Lang";
import { useState } from "react";
import Logo from "../assets/icons/Logo.svg";
import List from "../assets/icons/List.svg";
import { Link } from "react-router-dom";
import { LocationContext } from "../contexts/Context";

const Navbar = () => {
  const [diplayNavbarItems, setDisplayNavbarItems] = useState(false);
  // const { setApiAlAdhan } = useContext(LocationContext);
  const [active, setActive] = useState("home");
  const navbarItems = () => {
    return (
      <div className="lg:hidden h-screen backdrop-blur-sm bg-primary/90 flex absolute z-999 w-full items-center">
        <ul className=" text-background/90 flex flex-col justify-center items-center gap-11 font-bold h-1/2  w-full text-md">
          <Link to="/">
            <li
              onClick={() => {
                // setApiAlAdhan(true);
                setDisplayNavbarItems(false);
                setActive("home");
              }}
              className={`cursor-pointer ${
                active === "home" ? "text-secondary" : "text-background"
              } hover:text-secondary`}
            >
              Home
            </li>
          </Link>

          <Link to="/prayerTimes">
            <li
              onClick={() => {
                setActive("prayerTime");
                setDisplayNavbarItems(false);
              }}
              className={`cursor-pointer ${
                active === "prayerTime" ? "text-secondary" : "text-background"
              } hover:text-secondary`}
            >
              Prayer Times
            </li>
          </Link>
          <li
            onClick={() => {
              setActive("qibla");
              setDisplayNavbarItems(false);
            }}
            className={`cursor-pointer ${
              active === "qibla" ? "text-secondary" : "text-background"
            } hover:text-secondary`}
          >
            Qibla Direction
          </li>
          <li
            onClick={() => {
              setActive("calendar");
              setDisplayNavbarItems(false);
            }}
            className={`cursor-pointer ${
              active === "calendar" ? "text-secondary" : "text-background"
            } hover:text-secondary`}
          >
            Calendar
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div>
      <nav className="w-full h-15 bg-primary text-background sticky top-0">
        <ul className="flex lg:justify-between justify-between pr-4 lg:px-15 h-full items-center">
          <li>
            <ul className="flex items-center">
              <li>
                <img
                  className="mt-4"
                  src={Logo}
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
              <Link to="/">
                <li
                  onClick={() => {
                    // setApiAlAdhan(true);
                    setActive("home");
                  }}
                  className={`cursor-pointer ${
                    active === "home" ? "text-secondary" : "text-background"
                  } hover:text-secondary`}
                >
                  Home
                </li>
              </Link>
              <Link to="prayerTimes">
                <li
                  onClick={() => setActive("prayerTime")}
                  className={`cursor-pointer ${
                    active === "prayerTime"
                      ? "text-secondary"
                      : "text-background"
                  } hover:text-secondary`}
                >
                  Prayer Times
                </li>
              </Link>

              <li
                onClick={() => setActive("qibla")}
                className={`cursor-pointer ${
                  active === "qibla" ? "text-secondary" : "text-background"
                } hover:text-secondary`}
              >
                Qibla Direction
              </li>
              <li
                onClick={() => setActive("calendar")}
                className={`cursor-pointer ${
                  active === "calendar" ? "text-secondary" : "text-background"
                } hover:text-secondary`}
              >
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
                  src={List}
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
