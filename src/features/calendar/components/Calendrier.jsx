import MultiDatePicker from "../../../components/MultiDatePicker";
// import MyCalendar from "./MyCalendar";

const Calendrier = () => {
  return (
    <div className="flex lg:flex-row flex-col h-screen gap-y-5 justify-evenly items-center ">
      <MultiDatePicker
        className={
          "gregorian-calendar scale-75 lg:scale-none w-90 h-100 flex flex-col text-white font-Lexend gap-6 items-center shadow-2xl! bg-primary!"
        }
      />
      <MultiDatePicker
        className={
          "hijri-calendar scale-75 lg:scale-none calendar w-90 h-100 flex flex-col font-Lexend gap-6 shadow-2xl items-center   bg-white! "
        }
      />
    </div>
  );
};

export default Calendrier;
// import MultiDatePicker from "../../../components/MultiDatePicker";
// // import MyCalendar from "./MyCalendar";

// const Calendrier = () => {
//   return (
//     <div className="flex lg:flex-row flex-col h-screen gap-y-5 justify-evenly items-center ">
//       <MultiDatePicker
//         className={
//           "gregorian-calendar h-70 w-70! lg:h-80! lg:w-80! lg:scale-[1.1] flex justify-center items-center  bg-primary!"
//         }
//         calendar={"gregorian"}
//         locale={"gregorian_en"}
//       />
//       <MultiDatePicker
//         className={
//           "hijri-calendar h-70 w-70! lg:h-80! lg:w-80! lg:scale-[1.1] flex justify-center items-center "
//         }
//         calendar={"arabic"}
//         locale={"arabic_en"}
//       />
//     </div>
//   );
// };

// export default Calendrier;
