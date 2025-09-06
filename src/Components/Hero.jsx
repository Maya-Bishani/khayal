import { IoIosArrowBack } from "react-icons/io";
import arrows from "../assets/image/arrows.svg";
export default function Hero() {
  return (
    <div className="pt-40 md:pt-48 flex flex-col text-white justify-center items-center space-y-7 z-1 px-4 sm:px-8 md:px-16 lg:px-36 xl:px-64">
      <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-full leading-11 lg:leading-[90px] md:max-w-[851px] text-center">
        اقتني منزل أحلامك مع خيال
      </p>
      <p className="leading-10 font-normal text-lg sm:text-xl md:text-xl lg:text-xl max-w-full md:max-w-[779px] text-center">
        شركة خيال شركة متخصصة في مجال التشطيبات بأيدي فريق عمل متخصص وبأقل وقت وسعر مع
        إمكانية التقسيط للتشطيبات
      </p>
      <a href="#packages"
        className="rounded-4xl w-56 sm:w-60 md:w-64 py-3.5 flex justify-center items-center text-base sm:text-base md:text-base font-normal text-[#FFFFFF] border border-white "
      >
        <IoIosArrowBack className="text-white text-lg" />
        <IoIosArrowBack className="text-white opacity-60 text-lg -ml-2.5" />
        <IoIosArrowBack className="text-white opacity-30 text-lg -ml-2.5" />
        <span className="ml-1">استعرض خدمات موقعنا</span>
      </a>
      <a href ="#packages">
        <img src={arrows} alt="button" />
      </a>
    </div>
  );
}
