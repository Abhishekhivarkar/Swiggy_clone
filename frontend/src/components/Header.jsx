import { RxCaretDown, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineLocalOffer, MdOutlineLiveHelp } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isUserLoggedIn);
  }, []);

  const handleToggle = () => setToggle(true);
  const toggleCross = () => setToggle(false);
  const toggleSearchBar = () => setToggleSearch((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/log_in");
  };

  return (
    <>
      <div
        className="black-overlay h-full w-full fixed duration-500 z-50"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="h-full w-[400px] absolute rounded-2xl bg-white duration-[600ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <RxCross2 onClick={toggleCross} className="ml-auto m-7 text-[25px]" />
          <div className="ml-6">
            <input
              className="border shadow-xl p-2"
              type="text"
              placeholder="Search for area, street name."
            />
          </div>
        </div>
      </div>

      <header className="p-3 shadow-xl z-40 sticky top-0 bg-white">
        <div className="max-w-[1200px] h-[60px] mx-auto flex items-center">
          <div className="w-[40px] cursor-pointer" onClick={() => navigate("/")}>
            <img className="w-full" src="/Image/Swiggy.png" alt="Swiggy" />
          </div>

          <div className="ml-4 text-[15px]">
            <p>
              <span className="font-bold border-b-2 border-[#fc8091]">
                Chinchwad{" "}
              </span>
              Pune, Maharashtra, India{" "}
              <RxCaretDown
                onClick={handleToggle}
                className="inline text-[#fc8091] text-[25px] font-bold cursor-pointer"
              />
            </p>
          </div>

          <div className="flex flex-1">
            <div className="ml-auto flex gap-6">
              <div
                className="flex gap-[2px] text-center cursor-pointer"
                onClick={toggleSearchBar}
              >
                <FaMagnifyingGlass className="m-1" />
                <div>Search</div>
              </div>

              <div className="flex gap-[2px] text-center cursor-pointer">
                <MdOutlineLocalOffer className="m-1" />
                <div>Offers</div>
              </div>

              <div className="flex gap-[2px] text-center cursor-pointer">
                <MdOutlineLiveHelp className="m-1" />
                <div>Help</div>
              </div>

              <div className="flex gap-[2px] text-center cursor-pointer">
                <RiAccountPinBoxLine className="m-1" />
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="text-red-500 font-semibold"
                  >
                    Logout
                  </button>
                ) : (
                  <button onClick={handleLogin}>Login</button>
                )}
              </div>
             <Link to="/cart">
              <div className="flex gap-[2px] text-center cursor-pointer">
                <GiShoppingCart className="m-1" />
                <div>
                  Cart<sup className="m-1">0</sup>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {toggleSearch && (
        <div className="flex justify-center items-center mt-4 w-full">
          <input
            placeholder="Search for Restaurants and Food"
            className="w-3/4 border border-black rounded-lg h-[40px] p-2"
          />
        </div>
      )}
    </>
  );
}

export default Header;