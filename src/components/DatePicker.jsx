import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import Calendar from "./icons/Calendar";
import "react-day-picker/style.css";

export function MyDatePicker({ selected, setSelected, setDateChanged }) {
  // التاريخ الحالي
  //   const [selected, setSelected] = useState(new Date());
  // للتحكم في إظهار/إخفاء الـ picker
  const [showPicker, setShowPicker] = useState(false);

  const defaultClassNames = getDefaultClassNames();

  return (
    <div>
      {/* الزر/النص اللي يبين التاريخ الحالي */}
      <button
        className="flex cursor-pointer justify-center items-center gap-1 font-light font-Lexend"
        onClick={() => setShowPicker((prev) => !prev)}
      >
        <div className="w-5 h-5 text-secondary">
          <Calendar />
        </div>

        {selected.toLocaleDateString().replaceAll("/", "-")}
      </button>

      {/* إظهار الـ DayPicker فقط إذا الضغط صار */}

      {showPicker && (
        <div>
          <DayPicker
            classNames={{
              root: `${defaultClassNames.root} scale-90 bg-primary rounded-lg text-white shadow-lg p-5`,
              day: "rounded-full hover:bg-secondary", // جميع الأيام
              selected: "bg-secondary text-white rounded-full", // اليوم المختار
              today: "text-secondary hover:text-white font-bold", // اليوم الحالي
              caption: "text-lg font-semibold", // عنوان الشهر
              chevron: "fill-secondary hover:fill-white",
              month_caption: `${defaultClassNames.month_caption} text-secondary`,
            }}
            mode="single"
            selected={selected}
            onSelect={(date) => {
              if (date) {
                setSelected(date);
                setShowPicker(false); // إخفاء الـ picker بعد الاختيار
                setDateChanged(true);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
