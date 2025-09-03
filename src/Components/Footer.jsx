import logo from "../assets/image/logo.svg"
import call from "../assets/image/icons/call.svg"
import sms from "../assets/image/icons/sms.svg"
import location from "../assets/image/icons/location.svg"
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Footer(){
    return (
        <>
        <div className="bg-[#101010] pb-6  text-white" dir="rtl">
            <div className="flex flex-col justify-center items-center lg:justify-evenly md:px-12 lg:flex-row">
                <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start px-3 lg:px-0">
                    <img src={logo} className="w-48 mt-12 " alt="logo"/>
                    <p className="font-normal max-w-[458px] text-center md:text-start text-sm pt-2 pb-5 ">
                        شركة خيال شركة متخصصة في مجال التشطيبات بأيدي فريق عمل متخصص 
                        وبأقل وقت وسعر مع إمكانية التقسيط للتشطيبات
                    </p>
                    <Link to="https://api.whatsapp.com/send/?phone=201028264763&amp;type=phone_number&amp;app_absent=0" className="bg-[#21B7A6] border border-[#21B7A6] py-3.5 px-3.5 rounded-full w-44 font-medium text-base text-center mb-5  hover:bg-[#1fa094] transition-colors duration-300">
                        تواصل معنا
                    </Link>
                    <p className=" font-normal text-base tracking-wide mb-3.5"> أو تواصل معنا عن طريق : </p>

                    {/* Social media icons*/}
                    <div className="flex space-x-2.5">
                    <Link to="https://www.facebook.com/khialdevelopment/" className="bg-white text-lg text-[#21B7A6] rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#21B7A6] hover:text-white">
                            <LuFacebook />
                    </Link>
                    <Link to="https://www.instagram.com/khialdevelopment?igsh=MWZqMG9oaGpyMnZhag==" className="bg-white text-lg text-[#21B7A6] rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#21B7A6] hover:text-white">
                            <FaInstagram />
                    </Link>
                    <Link to="https://api.whatsapp.com/send/?phone=201028264763&amp;type=phone_number&amp;app_absent=0" className="bg-white text-lg text-[#21B7A6] rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#21B7A6] hover:text-white">
                            <FaWhatsapp />
                     </Link>
                     <a href="tel:+201554330399" className="bg-white text-lg text-[#21B7A6] rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#21B7A6] hover:text-white">
                          <IoCallOutline />
                    </a>

                    <a href="mailto:contact@khialdevelopment.com" className="bg-white text-lg text-[#21B7A6] rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#21B7A6] hover:text-white">
                            <MdOutlineEmail />
                    </a>
                    </div>
                </div>
                <div className="flex flex-col  lg:flex-row">
                    {/* الغرادينت العمودي */}
                <div className="hidden lg:block bg-gradient-to-b from-[#21B7A6] to-transparent w-[1px] min-h-full mx-0"></div>
                <div className="block lg:hidden bg-gradient-to-l from-[#21B7A6] to-transparent h-[1px]  my-6"></div>
               {/* القسم التاني*/}
              <div className="pt-6 lg:pt-12 ">
                    <div className="flex flex-col justify-center items-center space-y-6 order-2 lg:order-1 ">
                    <div className="flex space-x-0 pr-4 md:space-x-8 lg:pr-16  ">
                         <div className="flex flex-col space-y-3 pr-2.5 md:pr-0  w-40">
                            <p className="font-medium text-base md:text-2xl  ">الصفحات</p>
                            <a href="#packages" className="font-normal text-xs md:text-base tracking-tight hover:text-[#21B7A6]">أعمال التشطيب</a>
                            <a href="https://khialdevelopment.com/property-category/apartment" className="font-normal text-xs md:text-base tracking-tight hover:text-[#21B7A6]">بيع العقارات</a>
                            <a href="https://khialdevelopment.com/property-category/apartment"  className="font-normal text-xs md:text-base tracking-tight hover:text-[#21B7A6] ">إيجار العقارات</a>
                        </div>
                        {/* قسم التواصل */}
                        <div className="space-y-4 text-xs md:text-base">
                            <p className="font-medium text-base md:text-2xl ">معلومات التواصل</p>
                            
                            <div className="flex items-center gap-2  font-normal text-base">
                            <img src={location} alt="address" className="w-6"/>
                                <p className="font-normal text-xs md:text-base hover:text-[#21B7A6]">البوايه التانيه القديمه (خفرع) عماره رقم 187 وحدائق الاهرام</p>
                            </div>

                            {/* call email section */}
                            <div className="flex flex-col   gap-3">      
                               <div className="flex items-center gap-2  font-normal text-xs md:text-base">
                                    <img src={sms} alt="email" className="w-6"/>
                                    <a href="mailto:contact@khialdevelopment.com" className="hover:text-[#21B7A6]">contact@khialdevelopment.com</a>
                                </div>
                                <div className="flex items-center gap-2  font-normal text-xs md:text-base">
                                    <img src={call} alt="phone" className="w-6"/>
                                    <a href="tel:+96551675316" dir="ltr" className="hover:text-[#21B7A6]">+965 516 75316</a>
                               </div>
                           </div>
                        </div>
                    </div>
                   {/* الخط الأفقي الغرادينت */}
                    <div className="bg-gradient-to-l from-[#21B7A6] to-transparent h-[1px] w-full my-6"></div>

               {/* الكوبي رايت */}
               <p className="text-center text-white text-sm font-normal opacity-50 font-inter">
                             © 2025 Copyright KHIAL .CO EGYPT
               </p>

                </div>
  </div>
</div>
          </div> 

        </div>
        </>
    );
}