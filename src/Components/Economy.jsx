import { IoIosArrowRoundBack, IoIosArrowRoundDown } from "react-icons/io";
import photo1 from "../assets/image/Packages/photo1.svg";
import photo2 from "../assets/image/Packages/photo2.svg";
import photo3 from "../assets/image/Packages/photo3.svg";
import helmet from "../assets/image/Packages/helmet.svg";
import verify from "../assets/image/Packages/verify.svg";
import stars from "../assets/image/Packages/stars.svg";
import gift from "../assets/image/Packages/gift.svg";

export default function Economy({ index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  const toggleOpen = () => {
    setOpenIndex(isOpen ? null : index);
  };

  const electricityWorks = [
    ["تأسيس أسلاك سويدي أو سعودي درجة أولي", "خرطوم P V C و علب ماجيك", "لوحه تأسيس 24 خط من نوع فينوس", "قواطع السويدي ( هيميل )"],
    ["سلك دش لكامل الوحده", "تليفون لكامل الوحده", "عمل برايز للشفاط جنب شباك المطبخ و الحمام", "نقط نت في الريسبشن و غرفه واحده"],
    ["عمل مفاتيح للتكيفات والسخانات", "تأسيس كهرباء للتكييفات باكامل", "دفتيرفي كامل الوحده", "قواطع السويدي ( هيميل )"],
    ["سلك دش لكامل الوحده", "تليفون لكامل الوحده", "عمل مفاتيح للتكيفات و السخانات", "تاسيس كهرباء للتكييفات باكامل"],
    ["دفتيرفي كامل الوحده", "مفاتيح و برايز فينوس", "تاسيس لزوم الكاميرات", "تاسيس سون سيستم"],
    ["تأسيس حساس اضاءه علي باب الشقه", "تأسيس ليد بروفيل في الطرق", "تاسيس كشافات مقاومه للماء ف الريسبشن و الطرق", "تأسيس كشافات سقف ديكور لتابلوهات"],
    ["تأسيس عدد 2 شفاطات في الوحده", "تأسيس انتركم مرئي", "عمل كبل HD من مكتبه التلفزيون الي اقرب مكان جلوس الريسبشن و غرفه المعيشه"],
    ["تأسيس شاتر كامل الوحده", "تأسيس مخرج الدرسينج روم"]
  ];

  const FinishingWorks = [
    ["توريد و تركيب خامات عزل الرطوبة للحمام", "توريد و تركيب خامات عزل لزوم تسريب المياه", "عمل طبقة لياسة اسمنتية لارضية الحمام"],
    ["تأسيس التغذيه الحمام و المطبخ من نوع (BR)", "تأسيس الصرف من نوع كاسيل الماني (اعطاء شهاده ضمان علي اعمال التاسيس و التغذيه)", "محبس عمومي من نوع ريجو"],
    ["صرف تكيفات", "يتم اضافه تغذيه و صرف للغساله الملابس و اطباق علي حسب رغبت العميل", "تأسيس بانيو او كابينة شور", "عمل صرف امطار في البلكونه"],
    ["تأسيس و صرف مكان حوض سمك أو نافوره علي حسب طلب العميل", "علي حسب رغبه العميل يمكن استبدال البنيو او كابينه الشور بي جاكوزي و الفرق علي العميل", "تأسيس اجهزه استشعار التسرب"]
  ];

  const sections = [
    { title: "أعمال الأسقف", items: ["توريد و تركيب خامات من نوع كناوف لزوم الجبس بورد فلات لكامل الوحده", "الأعمال تشمل تركيب الاسبوتات والليد", "كناوف اخضر للحمامات", "كناوف احمر للمطابخ"] },
    { title: "أعمال النجارة", items: ["باب شقه مستورد تركي 11 مم", "ابواب داخلية موسكي بدهان استر او دوكو او ابواب MDF حسب طلب العميل"] },
    { title: "أعمال الدهانات", items: ["وش سيلر مائي", "3سكينة سافيتو", "4 سكاكين معجون GLC", "3 وش بطانة 70 في 70 تشطيب نهائي من شركه جوتن قابل للغسيل"] },
    { title: "أعمال الأرضيات", items: ["توريد و تركيب سيراميك كامل الريسبشن و الطرق ارضيات لا يتعدي سعر المتر 360جنية", "توريد و تركيب سيراميك باقي الوحده ارضيات وحوائط لا يتعدي سعر المتر 320جنية", "توريد و تشوين الاسمنت و الرمال و ماده السقية وكل ما يخص ذلك البند"] },
    { title: "الالوميتال", items: ["PS صغير الريسبشن و الغرف", "PS صغير بزجاج مصنفر للحمامات و المطابخ"] },
    { title: "الديكور", items: ["عمل جنب قطيفه في حدود 5 متر او استوكا انتيكا في حدود 5 متر", "جانب بديل خشب لا يتعدي 3 متر", "جانب بديل رخام لا يتعدي 3 متر", "عمل بانو جبس في الريسبشن و الطرقه", "عمل خلفيه 3d في اوضه الاطفال علي حسب طلب العميل"] },
    { title: "التصميم", items: ["2D & 3D"] },
    { title: "الرخام", items: ["يتم استبدال السيراميك بي الرخام و حساب تكلفه والفرق علي العميل"] }
  ];

  return (
    <div className="text-white" dir="rtl">
      <div className="flex flex-col px-5 md:px-16">
        <div className="flex items-center justify-between">
          <p className="text-white text-base md:text-[25px] font-semibold">
            0.2 الباقة الاقتصادية
            <span className="text-[#21B7A6] text-xs md:text-[22px] pr-2.5">3500 جينيه</span>
          </p>

          <div onClick={toggleOpen} className={`p-[1px] rounded-full cursor-pointer ${isOpen ? "bg-gradient-to-b from-[#21B7A6]/50 to-[#21B7A6]" : "bg-gradient-to-b from-white/50 to-white"}`}>
            <div className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#171717]">
              {isOpen ? <IoIosArrowRoundDown className="text-[#21B7A6] text-3xl" /> : <IoIosArrowRoundBack className="text-white text-3xl" />}
            </div>
          </div>
        </div>

        <div className={`h-[1px] w-full mt-2 ${isOpen ? "bg-gradient-to-l from-[#21B7A6] to-transparent" : "bg-gradient-to-l from-white to-transparent"}`}></div>
      </div>

      {isOpen && (
        <div className="px-10">
          {/* الصور */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-3 flex-wrap lg:flex-row my-6">
            <img src={photo1} className="w-full max-w-[400px] object-contain" alt="photo1" />
            <img src={photo2} className="w-full max-w-[400px] object-contain" alt="photo2" />
            <img src={photo3} className="w-full max-w-[400px] object-contain" alt="photo3" />
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

            {/* التشطيب */}
            <div className="text-white mt-6">
              <div className="flex space-x-2 items-center">
                <img src={stars} className="w-10" />
                <p className="font-medium text-xl">التشطيب</p>
              </div>
              <p className="font-normal text-base tracking-tight">توريد وتركيب خامات تشطيب الكهرباء من لقم و اوشوش و شاسيهات ( فينوس او اوسا ) ضمان مدي الحياه</p>

              {/* أعمال السباكة */}
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

              {/* تشطيب إضافي هدايا */}
              <div className="flex space-x-2 mt-5 items-center text-white">
                <img src={stars} className="w-10 mb-2.5" />
                <p className="font-medium text-xl mb-2.5">التشطيب</p>
              </div>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-3">
                <div className="flex items-center text-white space-x-1">
                  <img src={verify} alt="check"/>
                  <p className="text-sm md:text-base font-normal">تشطيب السباكه قاعده و حوض بحد اقصي 10000 جنية للحمام الواحد بحد اقصي 2 حمام</p>
                </div>
                <div className="flex items-center text-white space-x-1">
                  <img src={verify} alt="check"/>
                  <p className="text-sm md:text-base font-normal">تركيب خلاطات للحمام والمطبخ بحد اقصي 11000جنية</p>
                </div>
                <div className="flex items-center text-white space-x-1">
                  <img src={gift} className="w-6" alt="gift"/>
                  <p className="text-sm md:text-base font-normal">هدية مراية ليد في الحمام</p>
                </div>
              </div>

              {/* الأقسام: الأسقف، الأرضيات، الديكور... */}
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
        </div>
      )}
    </div>
  );
}
