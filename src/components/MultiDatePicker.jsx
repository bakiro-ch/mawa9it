import Calendar from "react-calendar";

const MultiDatePicker = ({ className }) => {
  return (
    <div>
      <Calendar className={className} />
    </div>
  );
};

export default MultiDatePicker;
// import { Calendar } from "react-multi-date-picker";
// import arabic from "react-date-object/calendars/arabic";
// import gregorian from "react-date-object/calendars/gregorian";
// import arabic_en from "react-date-object/locales/arabic_en";
// import gregorian_en from "react-date-object/locales/gregorian_en";

// const MultiDatePicker = ({ calendar, locale, className }) => {
//   return (
//     <div>
//       <Calendar
//         className={className}
//         currentDate={"bg-primary"}
//         calendar={calendar === "arabic" ? arabic : gregorian}
//         locale={locale === "arabic_en" ? arabic_en : gregorian_en}
//       />{" "}
//     </div>
//   );
// };

// export default MultiDatePicker;
