import './form.css'
import { useState } from "react";
import form from "../assets/image/form.svg";
import calendar from "../assets/image/calendar.svg"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [unit, setUnit] = useState("");
  const [preferredTime, setPreferredTime] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !unit || !message) {
      alert("يرجى ملء جميع الحقول المطلوبة!");
      return;
    }

    const phoneNumber = "201554330399";

    const formattedTime = preferredTime
      ? preferredTime.toLocaleString("ar-SY", {
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "غير محدد";

    const text = `━━━━━━━━━━━━━━━━━━━━━━
                 📌طلب جديد من الموقع
                 ━━━━━━━━━━━━━━━━━━━━━━━
                👤 الاسم: ${name}
                📞 الهاتف: ${phone}
                📍 عنوان الوحدة: ${unit}
                ⏰ الوقت المفضل للتواصل: ${formattedTime}
                💬 الرسالة: 
                ${message}
          ━━━━━━━━━━━━━━━`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setName("");
    setPhone("");
    setUnit("");
    setPreferredTime(null);
    setMessage("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d+.]/g, "");
    setPhone(value);
  };

  return (
    
    <div
      className="text-white flex flex-col lg:flex-row justify-between px-8 mx-5 md:mx-11 bg-[#2D2D2D] rounded-3xl border-t-2 border-l border-r border-b border-[#21B7A6]/20 relative"
      dir="rtl"
    >
      <div className="pt-11 max-w-[585px]">
        <p className="font-semibold text-xl md:text-5xl text-white mb-2.5">
          تواصل معنا
        </p>
        <p className="font-normal text-xs md:text-lg text-white opacity-60 mb-8">
          نحن في خدمتك دائمًا، سواء كان لديك استفسار، ملاحظة، أو تحتاج إلى
          مساعدة في أي من خدماتنا. تواصل معنا عبر القنوات المتاحة وسنقوم بالرد
          عليك
        </p>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          {/* الاسم ورقم الموبايل */}
          <div className="flex flex-col md:flex-row-reverse gap-5">
            <div className="w-full md:w-[283px] flex flex-col">
              <label className="mb-2.5 font-normal text-sm md:text-base text-white">
                رقم الموبايل
              </label>
              <input
                type="text"
                placeholder="رقم الموبايل"
                value={phone}
                onChange={handlePhoneChange}
                required
                className="w-full bg-[#2A2A2A] border border-[#FFFFFF33] font-normal text-xs md:text-sm rounded-md p-2 py-3 focus:outline-none focus:border-[#21B7A6] focus:ring-1 focus:ring-[#21B7A6]"
              />
            </div>
            <div className="w-full md:w-[283px] flex flex-col">
              <label className="mb-2.5 font-normal text-sm md:text-base text-white">
                الاسم
              </label>
              <input
                type="text"
                placeholder="الاسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full font-normal text-xs md:text-sm bg-[#2A2A2A] border border-[#FFFFFF33] rounded-md p-2 py-3 focus:outline-none focus:border-[#21B7A6] focus:ring-1 focus:ring-[#21B7A6]"
              />
            </div>
          </div>

          {/* عنوان الوحدة */}
          <div className="flex flex-col md:flex-row-reverse gap-5 w-full md:w-[583px]">
            <div className="w-full flex flex-col">
              <label className="mb-2.5 text-white text-sm md:text-base font-normal">
                عنوان الوحدة
              </label>
              <input
                type="text"
                placeholder="عنوان الوحدة"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                required
                className="w-full font-normal text-xs md:text-sm bg-[#2A2A2A] border border-[#FFFFFF33] rounded-md py-3.5 pr-3.5 placeholder:text-right focus:outline-none focus:border-[#21B7A6] focus:ring-1 focus:ring-[#21B7A6]"
              />
            </div>
          </div>
           {/* الوقت المفضل للتواصل */}
          <div className="flex flex-col md:flex-row-reverse gap-5 w-full md:w-[583px]">
             <div className="w-full flex flex-col">
               <label className="mb-2.5 text-white text-sm md:text-base font-normal">
                 الوقت المفضل للتواصل
              </label>
                 <div className="relative w-full">
                    <img src={calendar} alt="calendar"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10"
                   />
                  <DatePicker
                 selected={preferredTime}
                 onChange={(date) => setPreferredTime(date)}
                 showTimeSelect
                 timeFormat="HH:mm"
                 timeIntervals={30}
                 dateFormat="MMMM d, yyyy h:mm aa"
                 placeholderText="اختر اليوم والوقت"
                 wrapperClassName="w-full"
                 className="w-full bg-[#2A2A2A] border border-[#FFFFFF33] rounded-md py-3.5 pr-10 pl-3.5 placeholder:text-right text-white text-xs md:text-sm focus:outline-none focus:border-[#21B7A6] focus:ring-1 focus:ring-[#21B7A6]"
                 calendarClassName="custom-calendar"
                 popperClassName="custom-popper"
                 popperModifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, 5], 
                    },
                  },
                 {
                   name: "computeStyles",
                  options: {
                     adaptive: false, 
                  },
                  },
                ]}
             />

          </div>
       </div>   
    </div>
          {/* الرسالة */}
          <div className="flex flex-col md:flex-row-reverse gap-5 w-full md:max-w-[583px]">
            <div className="w-full flex flex-col">
              <label className="mb-2.5 text-white text-sm md:text-base font-normal">
                نص الرسالة
              </label>
              <textarea
                placeholder="اكتب الاستفسار أو المشكلة التي تواجهك..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="opacity-60 w-full font-normal placeholder:text-white text-xs md:text-sm bg-[#2A2A2A] border border-[#FFFFFF33] rounded-md pr-6 pt-3.5 h-32 resize-none placeholder:text-right focus:outline-none focus:border-[#21B7A6] focus:ring-1 focus:ring-[#21B7A6]"
              ></textarea>
            </div>
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="self-start bg-[#21B7A6] hover:bg-[#1fa094] text-white rounded-lg px-6 py-3 mb-8 w-[200px] mx-auto transition-colors duration-300"
          >
            إرسال
          </button>
        </form>
      </div>
      <div className="mt-auto lg:mt-0 lg:self-end">
        <img
          src={form}
          className="w-[255px] sm:w-[400px] md:w-[500px] lg:w-[661px] h-auto"
          alt="photo"
        />
      </div>
    </div>
  );
}
