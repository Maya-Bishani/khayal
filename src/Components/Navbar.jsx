import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // نراقب السكرول
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[100px] z-50 transition-all duration-300 border-nav ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-16 flex justify-between items-center py-4 relative">
        {/* الزر الأخضر للشاشات الكبيرة */}
        <a href="#packages"
          className={`rounded-4xl  hover:bg-[#1fa094] w-72 py-3.5 justify-center items-center text-base font-normal border hidden lg:flex ${
            scrolled
              ? "bg-[#21B7A6] text-white border-white"
              : "bg-[#21B7A6] text-white border-white"
          }`}
        >
          <IoIosArrowBack className="text-white text-lg" />
          <IoIosArrowBack className="text-white opacity-60 text-lg -ml-2.5" />
          <IoIosArrowBack className="text-white opacity-30 text-lg -ml-2.5" />
          <span className="ml-1">استعرض خدمات موقعنا</span>
        </a>

        {/* اللوغو */}
        <div className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="logo" 
            className={`w-44 mt-2 transition-all duration-300 ${
              scrolled ? "brightness-0" : ""
            }`}
          />
        </div>

        {/* أيقونة الهامبرغر */}
      {/* أيقونة الهامبرغر / الإغلاق */}
<div className="lg:hidden flex-none z-50 ml-4 sm:ml-0">
  <button
    aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
    onClick={() => setMenuOpen(!menuOpen)}
    className="w-12 h-12 flex items-center justify-center rounded-full border border-white bg-[#21B7A6] transition-colors duration-300"
  >
    {menuOpen ? (
      <HiOutlineX className="text-white text-2xl" />
    ) : (
      <div className="flex flex-col justify-between h-4 ">
        <span className="block w-5 h-[2px] bg-white"></span>
        <span className="block w-5 h-[2px] bg-white "></span>
        <span className="block w-5 h-[2px] bg-white "></span>
      </div>
    )}
  </button>
</div>


        {/* روابط الناف للشاشات الكبيرة */}
        <div
          className={`flex gap-10 text-xl font-normal pt-4 hidden lg:flex transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <a href="https://khialdevelopment.com/property-category/apartment" className="hover:text-[#21B7A6]">
            للبيع
          </a>
          < a href ="https://khialdevelopment.com/property-category/apartment" className="hover:text-[#21B7A6]">
            للأجار
          </a>
          <a href="#packages" className="hover:text-[#21B7A6]">
            أعمال التشطيب
          </a>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-full z-40">
          <div className="bg-white flex flex-col text-lg font-normal text-[#21B7A6] pb-7">
            <a href="https://khialdevelopment.com/property-category/apartment"
              onClick={() => setMenuOpen(false)}
              className="w-full py-7 pr-6 relative text-right hover:bg-[#21B7A6] hover:text-white"
            >
              للبيع
              <div className="h-[0.9px] w-full bg-gradient-to-l from-[#21B7A6] to-transparent absolute bottom-0 right-0"></div>
            </a>

            <a href="https://khialdevelopment.com/property-category/apartment"
              to="/"
              onClick={() => setMenuOpen(false)}
              className="w-full py-7 pr-6 relative text-right  hover:bg-[#21B7A6] hover:text-white"
            >
              للأجار
              <div className="h-[0.9px] w-full bg-gradient-to-l from-[#21B7A6] to-transparent absolute bottom-0 right-0"></div>
            </a>

            <a href="#packages"
              onClick={() => setMenuOpen(false)}
              className="w-full py-7 pr-6 relative text-right  hover:bg-[#21B7A6] hover:text-white"
            >
              أعمال التشطيب
              <div className="h-[0.9px] w-full bg-gradient-to-l from-[#21B7A6] to-transparent absolute bottom-0 right-0"></div>
            </a>

            {/* زر أخضر للموبايل */}
            <div className="flex justify-center mt-6">
              <a href="#packages"
               
                onClick={() => setMenuOpen(false)}
                className="bg-[#21B7A6] rounded-4xl w-72 py-5 flex justify-center items-center text-base font-normal text-[#FFFFFF] border border-white"
              >
                <IoIosArrowBack className="text-white text-lg" />
                <IoIosArrowBack className="text-white opacity-60 text-lg -ml-2.5" />
                <IoIosArrowBack className="text-white opacity-30 text-lg -ml-2.5" />
                <span className="ml-1">استعرض خدمات موقعنا</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
