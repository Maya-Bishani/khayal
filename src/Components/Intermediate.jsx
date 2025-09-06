import photo1 from "../assets/image/Packages/photo1.svg";
import photo_1 from "../assets/image/imagewebp/photo_1.webP";
import photo_2 from "../assets/image/imagewebp/photo_2.webP";
import photo_3 from "../assets/image/imagewebp/photo_3.webP";
import photo2 from "../assets/image/Packages/photo2.svg";
import photo3 from "../assets/image/Packages/photo3.svg";
import helmet from "../assets/image/Packages/helmet.svg";
import verify from "../assets/image/Packages/verify.svg";
import stars from "../assets/image/Packages/stars.svg";
import { IoIosArrowRoundBack, IoIosArrowRoundDown } from "react-icons/io";

export default function Intermediate({ index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  // بيانات أعمال الكهرباء
  const electricityWorks = [
    ["ىتأسيس أسلاك سويدي أو سعودي درجة اولي", "خرطوم و علب ماجيك و فليكسبل مصطفي محمود", "لوحه تأسيس 18 خط من نوع فينوس", "قواطع السويدي ( هيميل )"],
    ["سلك دش لكامل الوحده", "تليفون لكامل الوحده", "نقط نت في الريسبشن و غرفه واحده", "عمل برايز للشفاط جنب شباك المطبخ و الحمام"],
    ["عمل مفاتيح للتكيفات والسخانات", "تأسيس كهرباء للتكييفات بالكامل", "دفتيرفي كامل الوحده"],
    ["مفاتيح و برايز فينوس", "تأسيس لزوم الكاميرات", "تأسيس أماكن سبوتات في أركان الغرف"],
  ];

  // السباكة
  const FinishingWorks = [
    ["توريد و تركيب خامات عزل الرطوبة للحمام", "عمل طبقة لياسة اسمنتية لارضية الحمام", "تاسيس التغذيه الحمام و المطبخ من نوع (BR)"],
    ["تأسيس الصرف من نوع كاسيل ألماني (اعطاء شهادة ضمان على أعمال التأسيس و التغذية", "محبس عمومي من نوع ريجو", "يتم اضافه تغذيه و صرف للغساله الملابس و اطباق  علي حسب رغبة العميل"],
    ["صرف تكيفات", "تأسيس بانيو او كابينة شور", "عمل صرف امطار في البلكونه"],
  ];

  const sections = [
    { title: "أعمال الأسقف", items: ["للريسبشن و الطرق بيت نور فقط النوع كناوف الصاج 4 من 10 من افضل انواع الجبس بورد", "كرانيش باقي الغرف"] },
    { title: "أعمال النجارة", items: ["باب شقه مستورد تركي 10 مم", "ابواب داخلية موسكي بدهان استر او دوكو او ابواب MDF حسب طلب العميل"] },
    { title: "أعمال الدهانات", items: ["وش سيلر مائي", "2 سكينة سافيتو", "3 سكاكين معجون GLC", "2 وش بطانة 30 في 30", "تشطيب نهائي من شركه جوتن قابل للغسيل"] },
    { title: "أعمال الأرضيات", items: ["توريد و تركيب سيراميك كامل الريسبشن و الطرق ارضيات لا يتعدي سعر المتر 260 جنية", "توريد و تركيب سيراميك باقي الوحده ارضيات وحوائط لا يتعدي سعر المتر 240 جنية", "توريد و تشوين الاسمنت و الرمال و ماده السقية وكل ما يخص ذلك البند"] },
    { title: "أعمال الالوميتال", items: ["توريد و تركيب الالوميتال PS صغير في الشباك الحمام و المطبخ فقط"] },
    { title: "الديكور", items: ["عمل جنب قطيفه في حدود 5 متر او استوكا انتيكا في حدود 5 متر", "عمل بانو جبس في الريسبشن و الطرقه"] },
    { title: "التصميم", items: ["2D"] },
  ];

  return (
    <div className="text-white my-1.5" dir="rtl">
      <div className="flex flex-col px-5 md:px-16">
        {/* اسم الباقة والسعر */}
        <div className="flex items-center justify-between">
          <p className="text-white text-left text-base md:text-[25px] font-semibold">
            0.3 الباقة المتوسطة
            <span className="text-[#21B7A6] text-xs md:text-[22px] pr-2.5">3900 جينيه</span>
          </p>

          {/* أيقونة الفتح/الإغلاق */}
          <div
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className={`p-[1px] rounded-full cursor-pointer ${isOpen ? "bg-gradient-to-b from-[#21B7A6]/50 to-[#21B7A6]" : "bg-gradient-to-b from-white/50 to-white"}`}
          >
            <div className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#171717]">
              {isOpen ? <IoIosArrowRoundDown className="text-[#21B7A6] text-3xl" /> : <IoIosArrowRoundBack className="text-white text-3xl" />}
            </div>
          </div>
        </div>

        {/* الخط الغرادينت */}
        <div className={`h-[1px] w-full mt-2 ${isOpen ? "bg-gradient-to-l from-[#21B7A6] to-transparent" : "bg-gradient-to-l from-white to-transparent"}`}></div>
      </div>

      {isOpen && (
        <div className="px-10">
          {/* الصور */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-3 flex-wrap lg:flex-row my-6">
            <img src={photo_1} className="w-full max-w-[400px] object-contain" alt="photo1" />
            <img src={photo_2} className="w-full max-w-[400px] object-contain" alt="photo2" />
            <img src={photo_3} className="w-full max-w-[400px] object-contain" alt="photo3" />
          </div>

          {/* أعمال الكهرباء */}
          <div className="px-10">
            <p className="text-white font-medium text-base md:text-3xl">أعمال الكهرباء</p>
            <div className="flex mt-3.5 space-x-2 items-center">
              <img src={helmet} alt="icon" />
              <p className="text-white font-medium text-sm md:text-xl tracking-tight">التأسيس</p>
            </div>
            <div className="flex flex-col space-y-5">
              {electricityWorks.map((row, rowIndex) => (
                <div key={rowIndex} className="flex space-x-2 flex-col md:flex-row flex-wrap text-white font-normal text-base">
                  {row.map((item, i) => (
                    <div key={i} className="flex items-center space-x-1 mt-2.5">
                      <img src={verify} alt="check" />
                      <p className="text-sm md:text-base font-normal">{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* أعمال السباكة */}
            <div className="mt-6 text-white">
              <div className="flex space-x-2 mt-5 items-center">
                <img src={stars} className="w-10" />
                <p className="font-medium text-sm md:text-xl">التشطيب</p>
              </div>
              <p className="font-normal text-base tracking-tight">توريد وتركيب خامات تشطيب الكهرباء من لقم و اوشوش و شاسيهات ( فينوس ) ضمان مدي الحياه</p>

              <p className="mt-6 text-white font-medium text-base md:text-3xl">أعمال السباكة</p>
              <div className="flex mt-3.5 space-x-2 items-center">
                <img src={helmet} alt="icon" />
                <p className="text-white font-medium text-sm md:text-xl tracking-tight">التأسيس</p>
              </div>
              <div className="flex flex-col space-y-3">
                {FinishingWorks.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex space-x-2 flex-col md:flex-row flex-wrap text-white font-normal text-base">
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

            {/* الأقسام الأخرى */}
            <div className="flex flex-col space-y-[25px] mt-6">
              {sections.map((section, index) => (
                <div key={index}>
                  <p className="text-base md:text-3xl font-medium mb-2 md:mb-4">{section.title}</p>
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
  );
}
