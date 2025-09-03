import { useState } from "react";
import cement from "../assets/image/cement.svg";
import arrow from "../assets/image/arrow.svg";
import { IoIosArrowRoundBack} from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import photo1 from "../assets/image/Packages/photo1.svg";
import photo2 from "../assets/image/Packages/photo2.svg";
import photo3 from "../assets/image/Packages/photo3.svg";
import helmet from "../assets/image/Packages/helmet.svg";
import verify from "../assets/image/Packages/verify.svg"
import stars from "../assets/image/Packages/stars.svg";
import gift from"../assets/image/Packages/gift.svg";
export default function Saving() {
  const [open, setOpen] = useState(false);
  // بيانات أعمال الكهرباء
const electricityWorks = [
    [
      "تأسيس أسلاك سويدي او سعودي معتمد او ما يماثله",
      "خرطوم و علب ماجيك و فليكسبل مصطفي محمود",
      "لوحه تأسيس 12 خط من نوع فينوس ",
     
    ],
    [
        "قواطع السويدي ( هيميل )",
      "سلك دش الريسبشن فقط " ,
      "تليفون الريسبشن فقط ",
      "عمل برايز للشفاط جنب شباك المطبخ و الحمام",
      "نقط نت في الريسبشن و غرفه واحده",
    ],
    [
      "عمل مفاتيح للتكيفات والسخانات",
      "تأسيس كهرباء للتكييفات باكامل",
      "دفتيرفي الريسبشن ",
      "مفاتيح و برايز خيند",
    ],
    [
        "سلك دش لكامل الوحده",
        "تليفون لكامل الوحده",
        "عمل مفاتيح للتكيفات و السخانات",
        "تأسيس كهرباء للتكييفات باكامل",
      ],
      [
        "دفتيرفي كامل الوحده ",
        "مفاتيح و برايز فينوس",
        "تأسيس لزوم الكاميرات",
        "تأسيس سون سيستم في الريسبشن والطرق تاسيس سون سيستم",
      ],
      [
        "تركيب كاميرا ذاكيه 200 c من تابو بزاويه 360 درجه بخاصية الواي فاي و الاماله بدقه 1080 بكسل – ابيض لا سلكي ",
        "تأسيس حساس اضاءه علي باب الشقه ",
       
      ],
      [
        "تأسيس كشاف طوارئ في الريسبشن ",
        "تأسيس ليد مغناطيس في الريسبشن ",
         "تأسيس كشاف طوارئ في الريسبشن ",
        "تأسيس ليد مغناطيس في الريسبشن ",
          
      ],
      [
        "تأسيس ليد بروفيل في الطرق",
        "تأسيس كشافات مقاومه للماء ف الريسبشن و الطرق ",
        "تاسيس كشافات سقف ديكور لتابلوهات ",


      ],
  ];
  //السباكة
  const FinishingWorks = [
    [
      "توريد و تركيب خامات عزل الرطوبة للحمام ",
      "تأسيس الصرف من نوع الشريف  (اعطاء شهاده ضمان علي اعمال التأسيس و التغذيه )",
      "عمل طبقة لياسة اسمنتية لارضية الحمام ",
      
    ],
    [
        "تأسيس التغذيه الحمام و المطبخ من نوع (BR)",
        " تأسيس الصرف من نوع كاسيل ألماني (اعطاء شهادة ضمان على أعمال التأسيس والتغذية",
        "محبس عمومي من نوع ريجو ",
    ],
    [
        "يتم اضافه تغذيه و صرف للغساله الملابس وأطباق علي حسب رغبة العميل ",
        "تاسيس بانيو او كابينة شور ",
    ],
   
  ];
  const sections = [
    {
      title: "أعمال الأسقف",
      items: [
        "توريد وتركيب خامات لزوم عمل كرانيش من نوع ماليزي للغرف ",
        "عمل كرانيش و شكل ديكور من الجبس بورد في الريسبشن ",
      ],
    },
    {
      title: "أعمال النجارة",
      items: [
        "باب شقه مستورد صيني 10 مم",
        "أبواب داخلية موسكي بدهان استر او لاكية",
      ],
    },
  ,
  {
    title: "أعمال الدهانات",
    items: [
      "وش سيلر مائي",
      "3 سكين معجون من نوع دايتون",
     "وش دهان من نوع الجزيرة"
    ],
  },
  ,
  {
    title: "أعمال الأرضيات",
    items: [
     "توريد و تركيب سيراميك كامل للوحده ارضيات و حوائط لا يتعدي سعر المتر 130 جنية ",
     "توريد و تشوين الاسمنت و الرمال و ماده السقية وكل ما يخص ذلك البند"
    ],
  },
  {
    title: "الالوميتال",
    items: [
      "توريد و تركيب عدد 2 شباك للحمام و المطبخ "
    ],
  },
  {
    title: "التصميم",
    items: [
     "2D",
    ],
  },
   
  ];
  
  

  return (
    <>
      <div className="mb-0 text-white my-1.5" dir="rtl">

        {/* Packages */}
        <div className="flex flex-col px-5 md:px-16">
          {/* VIP*/}
          <div className="flex items-center justify-between">
            {/* اسم الباقة والسعر */}
            <p className="text-white text-left text-base md:text-[25px] font-semibold">
                0.3  باقة التوفير
              <span className="text-[#21B7A6] text-xs md:text-[22px] pr-2.5">
                2800 جينيه
              </span>
            </p>

            {/* الأيقونة */}
            <div
              onClick={() => setOpen(!open)}
              className={`p-[1px] rounded-full cursor-pointer ${
                open
                  ? "bg-gradient-to-b from-[#21B7A6]/50 to-[#21B7A6]"
                  : "bg-gradient-to-b from-white/50 to-white"
              }`}
            >
              <div className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#171717]">
                {open ? (
                  <IoIosArrowRoundDown className="text-[#21B7A6] text-3xl" />
                ) : (
                  <IoIosArrowRoundBack className="text-white text-3xl" />
                )}
              </div>
            </div>
          </div>

          {/* الخط الغرادينت */}
          <div
            className={`h-[1px] w-full mt-2 ${
              open
                ? "bg-gradient-to-l from-[#21B7A6] to-transparent"
                : "bg-gradient-to-l from-white to-transparent"
            }`}
          ></div>
        </div>
        {open && (
            <div className="px-10">
                   <div className="flex flex-col items-center lg:items-start justify-center gap-3 flex-wrap lg:flex-row my-6">
                       <img src={photo1} className="w-full max-w-[400px] object-contain" alt="photo1" />
                       <img src={photo2} className="w-full max-w-[400px] object-contain" alt="photo2" />
                       <img src={photo3} className="w-full max-w-[400px] object-contain" alt="photo3" />
                   </div>
         {/* أعمال الكهرباء */}
<div className="px-10">
  <p className="text-white font-medium text-base md:text-3xl">أعمال الكهرباء</p>
  <div className="flex mt-3.5 space-x-2 items-center ">
    <img src={helmet} alt="icon" />
    <p className="text-white font-medium text-sm md:text-xl tracking-tight">التأسيس</p>
  </div>
  <div className="flex flex-col space-y-5">
    {electricityWorks.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="flex space-x-2 flex-col md:flex-row flex-wrap text-white font-normal text-base"
      >
        {row.map((item, i) => (
          <div key={i} className="flex items-center space-x-1 mt-2.5">
            <img src={verify} alt="check" />
            <p className="text-sm md:text-base font-normal">{item}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
 {/* التشطيب */}
       <div className="text-white">
        <div className="flex space-x-2 mt-5 items-center " >
        <img src={stars} className="w-10"/>
          <p className="font-medium text-xl">التشطيب</p>
        </div>
        <p className="font-normal text-base tracking-tight">توريد وتركيب خامات تشطيب الكهرباء من لقم و اوشوش و شاسيهات ( خيند ) ضمان  مدي الحياه</p>
        {/** اعمال السباكة */}
        <p className="mt-6 text-white font-medium text-base md:text-3xl">أعمال السباكة</p>
  <div className="flex mt-3.5 space-x-2 items-center ">
    <img src={helmet} alt="icon" />
    <p className="text-white font-medium text-sm md:text-xl tracking-tight">التأسيس</p>
  </div>

  <div className="flex flex-col space-y-3">
    {FinishingWorks.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="flex space-x-2 flex-col md:flex-row flex-wrap text-white font-normal text-base"
      >
        {row.map((item, i) => (
          <div key={i} className="flex items-center space-x-1 mt-2.5">
            <img src={verify} alt="check" />
            <p className="text-sm md:text-base font-normal">{item}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
       

       </div>
       {/* التشطيب */}
       <div className="flex space-x-2 mt-5 items-center text-white " >
        <img src={stars} className="w-10 mb-2.5 "/>
          <p className="font-medium text-xl mb-2.5">التشطيب</p>
        </div>
        <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-3 " >
        <div className="flex items-center text-white space-x-1">
          <img src={verify} alt="check"/>
          <p className="text-sm md:text-base font-normal">تشطيب السباكه قاعده و حوض بحد اقصي 6000 جنية للحمام الواحد ( ويكون تكلفه الحمام الثاني علي العميل )</p>

        </div>
        <div className="flex items-center text-white space-x-1 ">
          <img src={verify} alt="check"/>
          <p className="text-sm md:text-base font-normal">تركيب خلاطات للحمام و المطبخ بحد اقصي 5000 جنية </p>
        </div>

        </div>
          {/*    و الارضيات والرخام ...أعمال الأسقف*/}   
          <div className="flex flex-col space-y-[25px] mt-6">
  {sections.map((section, index) => (
    <div key={index}>
      <p className="text-3xl font-medium mb-4">{section.title}</p>
      <div className="flex flex-col space-y-2 md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-2">
        {section.items.map((item, i) => (
          <div key={i} className="flex items-start text-white space-x-1">
            <img src={verify} alt="check" className="mt-1" />
            <p className="text-sm md:text-base font-normal">{item}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
</div>
        
          </div>
          
        )}
      </div>
    </>
  );
}
