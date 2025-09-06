import { IoIosArrowRoundBack, IoIosArrowRoundDown } from "react-icons/io";
import photo1 from "../assets/image/Packages/photo1.svg";
import photo2 from "../assets/image/Packages/photo2.svg";
import photo3 from "../assets/image/Packages/photo3.svg";
import helmet from "../assets/image/Packages/helmet.svg";
import verify from "../assets/image/Packages/verify.svg";
import stars from "../assets/image/Packages/stars.svg";
import gift from "../assets/image/Packages/gift.svg";
import photo_1 from "../assets/image/imagewebp/photo_1.webP";
import photo_2 from "../assets/image/imagewebp/photo_2.webP";
import photo_3 from "../assets/image/imagewebp/photo_3.webP";

export default function VipSU({ index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  const electricityWorks = [
    ["تأسيس أسلاك سويدي أو سعودي درجة أولي", "خرطوم P V C و علب ماجيك ", "لوحه تأسيس 24خط من نوع فينوس ", "قواطع السويدي ( هيميل )"],
    ["سلك دش لكامل الوحده", "تليفون لكامل الوحده", "عمل برايز للشفاط جنب شباك المطبخ و الحمام", "نقط نت في الريسبشن و غرفه واحده"],
    ["عمل مفاتيح للتكيفات والسخانات", "تأسيس كهرباء للتكييفات بالكامل", "دفتيرفي كامل الوحده ", "مفاتيح و برايز فينوس"],
    ["سلك دش لكامل الوحده", "تليفون لكامل الوحده", "عمل مفاتيح للتكيفات و السخانات", "تأسيس كهرباء للتكييفات باكامل"],
    ["دفتيرفي كامل الوحده ", "مفاتيح و برايز فينوس", "تأسيس لزوم الكاميرات", "تأسيس سون سيستم"],
    ["تركيب كاميرا ذاكيه 200 c من تابو بزاويه 360 درجه بخاصية الواي فاي و الاماله بدقه 1080 بكسل – ابيض لا سلكي ", "تأسيس حساس اضاءه علي باب الشقه "],
    ["تأسيس كشاف طوارئ في الريسبشن ", "تأسيس ليد بروفيل في الطرق", "تأسيس كشاف طوارئ في الريسبشن "],
    ["تأسيس ليد مغناطيس في الريسبشن ", "تأسيس كشافات مقاومه للماء ف الريسبشن و الطرق ", "تأسيس كشافات سقف ديكور لتابلوهات "],
    ["تأسيس عدد 2 شفاطات في الوحده ", "عمل كبل HD  من مكتبه التلفزيون الي اقرب مكان جلوس الريسبشن و غرفه المعيشه ", "تأسيس انتركم مرئي"],
    ["تأسيس شاتر كامل الوحده ", "تأسيس مخرج الدرسينج روم"]
  ];

  const FinishingWorks = [
    ["توريد و تركيب خامات عزل الرطوبة للحمام ", "توريد و تركيب خامات عزل لزوم تسريب المياه ", "عمل طبقة لياسة اسمنتية لارضية الحمام "],
    ["تأسيس التغذيه الحمام و المطبخ من نوع (BR)", " تأسيس الصرف من نوع كاسيل ألماني (اعطاء شهادة ضمان على أعمال التأسيس والتغذية", "محبس عمومي من نوع ريجو "],
    ["يتم اضافه تغذيه و صرف للغساله الملابس وأطباق علي حسب رغبة العميل ", "صرف تكيفات" , " تاسيس بانيو أو كابينة شور أو جاكوزي"],
    ["عمل صرف أمطار في البلكونه ", "تأسيس و صرف مكان حوض سمك أو نافوره علي حسب طلب العميل ", "تأسيس أجهزه استشعار التسرب "],
  ];

  const sections = [
    { title: "أعمال الأسقف", items: ["توريد و تركيب خامات من نوع كناوف لزوم الجبس بورد فلات لكامل الوحده ", "الأعمال تشمل تركيب الاسبوتات والليد", "كناوف اخضر للحمامات", "كناوف احمر للمطابخ"] },
    { title: "أعمال النجارة", items: ["باب شقه مستورد تركي  11 مم بقفل اسمارت 3 اقفال عادي ", "ابواب داخلية موسكي بدهان استر او دوكو او ابواب MDF  حسب طلب العميل "] },
    { title: "أعمال الدهانات", items: ["وش سيلر مائي", "3سكينة سافيتو", "4 سكاكين معجون GLC", "3 وش بطانة 70 في 70 تشطيب نهائي من شركه جوتن قابل للغسيل"] },
    { title: "أعمال الأرضيات", items: ["توريد و تركيب سيراميك كامل الريسبشن و الطرق ارضيات لا يتعدي سعر المتر 500 جنية ", "توريد و تركيب سيراميك باقي الوحده ارضيات وحوائط  لا يتعدي سعر المتر 400 جنية ", "توريد و تشوين الاسمنت و الرمال و ماده السقية وكل ما يخص ذلك البند"] },
    { title: "الالوميتال", items: ["PS  صغير الريسبشن و الغرف", "PS  صغير بزجاج مصنفر للحمامات و المطابخ"] },
    { title: "الديكور", items: ["عمل جنب قطيفه في حدود 5 متر او استوكا انتيكا في حدود 5 متر", "جانب بديل خشب لا يتعدي 5 متر", "عمل بانو جبس في الريسبشن و الطرقه", "عمل خلفيه 3d  في اوضه الاطفال على حسب طلب العميل", "جانب بديل رخام لا يتعدي 3 متر "] },
    { title: "التصميم", items: ["2D & 3D"] },
    { title: "الرخام", items: ["يتم استبدال السيراميك  بالرخام و حساب التكلفه والفرق على العميل "] },
    { title: "الفريون", items: ["توريد و تركيب خامات PVC  جنوب افريقي لزوم عمل ثلاث مخارج تكييف بحد اقصي 8 متر للمسار  الواحد او 24 متر اجمالي الوحده "] }
  ];

  return (
    <div className="mb-0 text-white my-1.5" dir="rtl">
      <div className="flex flex-col px-5 md:px-16">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenIndex(isOpen ? null : index)}>
          <div className="text-white flex items-center space-x-1.5 text-left text-base md:text-[25px] font-semibold">
            <p>0.7</p>
            <p>باقة</p>
            <p>Vip_SU</p>
            <span className="text-[#21B7A6] text-xs md:text-[22px] pr-2.5">6200 جينيه</span>
          </div>
          <div className={`p-[1px] rounded-full ${isOpen ? "bg-gradient-to-b from-[#21B7A6]/50 to-[#21B7A6]" : "bg-gradient-to-b from-white/50 to-white"}`}>
            <div className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#171717]">
              {isOpen ? <IoIosArrowRoundDown className="text-[#21B7A6] text-3xl" /> : <IoIosArrowRoundBack className="text-white text-3xl" />}
            </div>
          </div>
        </div>
        <div className={`h-[1px] w-full mt-2 ${isOpen ? "bg-gradient-to-l from-[#21B7A6] to-transparent" : "bg-gradient-to-l from-white to-transparent"}`}></div>
      </div>

      {isOpen && (
        <div className="px-10 mt-5 space-y-6">
          <div className="flex flex-col lg:flex-row gap-3 flex-wrap items-center justify-center">
            <img src={photo_1} className="w-full max-w-[400px] object-contain" alt="photo1" />
            <img src={photo_2} className="w-full max-w-[400px] object-contain" alt="photo2" />
            <img src={photo_3} className="w-full max-w-[400px] object-contain" alt="photo3" />
          </div>

          <Section title="أعمال الكهرباء" subtitle="التأسيس" icon={helmet} rows={electricityWorks} />
          <div className="mt-5">
            <div className="flex items-center space-x-2">
              <img src={stars} className="w-10" />
              <p className="font-medium text-sm md:text-xl">التشطيب</p>
            </div>
            <p className="text-base font-normal tracking-tight mt-2">توريد وتركيب خامات تشطيب الكهرباء من لقم و اوشوش و شاسيهات ( فينوس او اوسا ) ضمان مدي الحياه</p>
          </div>

          <Section title="أعمال السباكة" subtitle="التأسيس" icon={helmet} rows={FinishingWorks} />

          <div className="mt-5 flex flex-col lg:flex-row lg:space-x-3 space-y-2 lg:space-y-0">
            <ItemWithIcon icon={verify} text="تشطيب السباكه قاعده و حوض بحد اقصي 12000 جنية للحمام الواحد بحد اقصي 2 حمام " />
            <ItemWithIcon icon={verify} text="تركيب خلاطات للحمام و المطبخ بحد اقصي 12000جنية " />
            <ItemWithIcon icon={gift} text="هدية مراية ليد في الحمام والريسبشن" iconWidth="w-6" />
          </div>

          <div className="flex flex-col space-y-[25px] mt-6">
            {sections.map((section, idx) => (
              <div key={idx}>
                <p className="text-base md:text-3xl font-medium mb-2 md:mb-4">{section.title}</p>
                <div className="flex flex-col md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-2 space-y-2 md:space-y-0">
                  {section.items.map((item, i) => (
                    <ItemWithIcon key={i} icon={verify} text={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, subtitle, icon, rows }) {
  return (
    <div className="px-0">
      <p className="text-white font-medium text-base md:text-3xl mt-6">{title}</p>
      <div className="flex items-center space-x-2 mt-3.5">
        <img src={icon} alt="icon" />
        <p className="text-white font-medium text-sm md:text-xl tracking-tight">{subtitle}</p>
      </div>
      <div className="flex flex-col space-y-3 mt-2">
        {rows.map((row, idx) => (
          <div key={idx} className="flex flex-col md:flex-row flex-wrap space-x-2 text-white font-normal text-base">
            {row.map((item, i) => (
              <ItemWithIcon key={i} icon={verify} text={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ItemWithIcon({ icon, text, iconWidth }) {
  return (
    <div className="flex items-center space-x-1 text-white mt-2">
      <img src={icon} className={iconWidth || "w-4"} alt="icon" />
      <p className="text-sm md:text-base font-normal">{text}</p>
    </div>
  );
}
