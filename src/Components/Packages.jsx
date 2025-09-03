import { useState } from "react";
import cement from "../assets/image/cement.svg";
import arrow from "../assets/image/arrow.svg";
import { IoIosArrowRoundBack, IoIosArrowRoundDown } from "react-icons/io";
import photo1 from "../assets/image/Packages/photo1.svg";
import photo2 from "../assets/image/Packages/photo2.svg";
import photo3 from "../assets/image/Packages/photo3.svg";
import helmet from "../assets/image/Packages/helmet.svg";
import verify from "../assets/image/Packages/verify.svg";
import stars from "../assets/image/Packages/stars.svg";
import gift from"../assets/image/Packages/gift.svg";

// استدعاء المكونات
import Vip from "../Components/Vip";
import Saving from "../Components/Saving";
import Khayal from "../Components/Khayal";
import Intermediate from "./Intermediate";
import VipU from "./VipU";
import VipSU from "./VipSU";
import Economy from "./Economy";

export default function Packages() {
  // حالة الباقة المفتوحة حالياً
  const [openIndex, setOpenIndex] = useState(null);

  // بيانات أعمال الكهرباء
  const electricityWorks = [
    [
      "تأسيس أسلاك سويدي أو سعودي درجة أولي",
      "خرطوم P V C و علب ماجيك",
      "لوحه تأسيس 24 خط من نوع فينوس",
      "قواطع السويدي ( هيميل )",
    ],
    [
      "سلك دش لكامل الوحده",
      "تليفون لكامل الوحده",
      "عمل برايز للشفاط جنب شباك المطبخ و الحمام",
      "نقط نت في الريسبشن و غرفه واحده",
    ],
    [
      "عمل مفاتيح للتكيفات والسخانات",
      "تأسيس كهرباء للتكييفات باكامل",
      "دفتيرفي كامل الوحده ",
      "قواطع السويدي  ( هيميل )",
    ],
    [
      "سلك دش لكامل الوحده",
      "تليفون لكامل الوحده",
      "عمل مفاتيح للتكيفات و السخانات",
      "تاسيس كهرباء للتكييفات باكامل",
    ],
    [
      "دفتيرفي كامل الوحده ",
      "مفاتيح و برايز فينوس",
      "تاسيس لزوم الكاميرات",
      "تاسيس سون سيستم",
    ],
    [
      "تأسيس حساس اضاءه علي باب الشقه",
      "تأسيس ليد بروفيل في الطرق",
      "تاسيس كشافات مقاومه للماء ف الريسبشن و الطرق",
      "تأسيس كشافات سقف ديكور لتابلوهات",
    ],
    [
      "تأسيس عدد 2 شفاطات في الوحده",
      "تأسيس انتركم مرئي",
      "عمل كبل HD  من مكتبه التلفزيون الي اقرب مكان جلوس الريسبشن و غرفه المعيشه",
    ],
    [
      "تأسيس شاتر كامل الوحده",
      "تأسيس مخرج الدرسينج روم"
    ]
  ];

  // أعمال التشطيب
  const FinishingWorks = [
    [
      "توريد و تركيب خامات عزل الرطوبة للحمام",
      "توريد و تركيب خامات عزل لزوم تسريب المياه",
      "عمل طبقة لياسة اسمنتية لارضية الحمام",
    ],
    [
      "تأسيس التغذيه الحمام و المطبخ من نوع (BR)",
      "تأسيس الصرف من نوع كاسيل الماني ( اعطاء شهاده ضمان علي اعمال التاسيس و التغذيه )",
      "محبس عمومي من نوع ريجو",
    ],
    [
      "صرف تكيفات",
      "يتم اضافه تغذيه و صرف للغساله الملابس و اطباق  علي حسب رغبت العميل",
      "تأسيس بانيو او كابينة شور",
      "عمل صرف امطار في البلكونه",
    ],
    [
      "تأسيس و صرف مكان حوض سمك أو نافوره علي حسب طلب العميل",
      "علي حسب رغبه العميل يمكن استبدال البنيو او كابينه الشور بي جاكوزي و الفرق علي العميل",
      "تأسيس اجهزه استشعار التسرب",
    ],
  ];

  // باقي الأقسام
  const sections = [
    {
      title: "أعمال الأسقف",
      items: [
        "توريد و تركيب خامات من نوع كناوف لزوم الجبس بورد فلات لكامل الوحده",
        "الاعمال تشمل تركيب الاسبوتات والليد",
        "كناوف اخضر للحمامات",
        "كناوف احمر للمطابخ",
      ],
    },
    {
      title: "أعمال النجارة",
      items: [
        "باب شقه مستورد تركي  11 مم",
        "ابواب داخلية موسكي بدهان استر او دوكو او ابواب MDF  حسب طلب العميل",
      ],
    },
    {
      title: "أعمال الدهانات",
      items: [
        "وش سيلر مائي",
        "3سكينة سافيتو",
        "4 سكاكين معجون GLC",
        "3 وش بطانة 70 في 70 تشطيب نهائي من شركه جوتن قابل للغسيل",
      ],
    },
    {
      title: "أعمال الأرضيات",
      items: [
        "توريد و تركيب سيراميك كامل الريسبشن و الطرق ارضيات لا يتعدي سعر المتر 360جنية",
        "توريد و تركيب سيراميك باقي الوحده ارضيات وحوائط  لا يتعدي سعر المتر 320جنية",
        "توريد و تشوين الاسمنت و الرمال و ماده السقية وكل ما يخص ذلك البند",
      ],
    },
    {
      title: "الالوميتال",
      items: [
        "PS  صغير الريسبشن و الغرف",
        "PS  صغير بزجاج مصنفر للحمامات و المطابخ",
      ],
    },
    {
      title: "الديكور",
      items: [
        "عمل جنب قطيفه في حدود 5 متر او استوكا انتيكا في حدود 5 متر",
        "جانب بديل خشب لا يتعدي 3 متر",
        "جانب بديل رخام لا يتعدي 3 متر",
        "عمل بانو جبس في الريسبشن و الطرقه",
        "عمل خلفيه 3d في اوضه الاطفال علي حسب طلب العميل",
      ],
    },
    {
      title: "التصميم",
      items: [
        "2D & 3D",
      ],
    },
    {
      title: "الرخام",
      items: [
        "يتم استبدال السيراميك بي الرخام و حساب تكلفه والفرق علي العميل",
      ],
    },
  ];

  return (
    <div id="packages" className="mb-12 text-white" dir="rtl">
      <div className="flex flex-col justify-center items-center space-y-4 text-white px-5 md:px-16 mb-3.5">
        <img src={cement} className="w-24 pt-2" alt="icon" />
        <p className="font-semibold text-2xl md:text-4xl">باقات التشطيب</p>
        <p className="font-normal text-xl text-center">
          نحن لدينا الخبرة أكثر من عشر سنوات في مجال التصميم ونقدم أفضل خدمة
          تشطيب. (شقة - فيلا - دوبلكس - مقرات إدارية) و نحن نعمل بنظام
          المقايسة (نسبة إشراف هندسي على إجمال المقايسة 20%) يوجد لدينا نظام
          تقسيط على الشقق سعر المتر يبدأ من 3200 جنيها لتفاصيل أكثر والتعاقد
          وطلب المعاينة يرجى التواصل مع مهندسين الشركة
        </p>
        <a
          href="#packages"
          className="bg-[#21B7A6] border border-[#0D7368] rounded-[100px] w-[200px] md:w-[250px] text-center text-sm md:text-xl font-medium py-5 px-9 mt-1.5 hover:bg-[#1fa094] transition-colors duration-300"
        >
          باقات تناسب أعمالك
        </a>
        <img src={arrow} className="w-12" alt="arrow-icon" />
      </div>

      {/* باقة التوفير */}
      <Saving index={0} openIndex={openIndex} setOpenIndex={setOpenIndex} />

      {/* الباقات الأخرى */}
      <Economy index={1} openIndex={openIndex} setOpenIndex={setOpenIndex} />
      <Intermediate index={2} openIndex={openIndex} setOpenIndex={setOpenIndex} />
      
      <Khayal index={3} openIndex={openIndex} setOpenIndex={setOpenIndex} />
      <Vip index={4} openIndex={openIndex} setOpenIndex={setOpenIndex} />
      <VipU index={5} openIndex={openIndex} setOpenIndex={setOpenIndex} />
      <VipSU index={6} openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </div>
  );
}
