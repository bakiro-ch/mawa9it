import { DayPicker, getDefaultClassNames } from "react-day-picker";

const MyCalendar = () => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="flex h-screen  justify-evenly items-center ">
      <div className="w-fit">
        <DayPicker
          classNames={{
            root: `${defaultClassNames.root} px-10 scale-90 bg-primary rounded-lg text-white shadow-lg p-5`,
            day: "rounded-full hover:bg-secondary", // جميع الأيام
            selected: "bg-secondary text-white rounded-full", // اليوم المختار
            today: "text-secondary hover:text-white font-bold", // اليوم الحالي
            caption: "text-lg font-semibold", // عنوان الشهر
            chevron: "fill-secondary hover:fill-white",
            month_caption: `${defaultClassNames.month_caption} text-secondary`,
          }}
          mode="single"
        />
      </div>
      <div className=" w-fit">
        <DayPicker
          classNames={{
            root: `${defaultClassNames.root} px-10 scale-90 bg-background rounded-lg text-black shadow-lg p-5`,
            day: "rounded-full hover:bg-secondary", // جميع الأيام
            selected: "bg-secondary text-primary rounded-full", // اليوم المختار
            today: "text-secondary hover:text-primary font-bold", // اليوم الحالي
            caption: "text-lg font-semibold", // عنوان الشهر
            chevron: "fill-secondary hover:fill-primary",
            month_caption: `${defaultClassNames.month_caption} text-secondary`,
          }}
          mode="single"
        />
      </div>
    </div>
  );
};

export default MyCalendar;
