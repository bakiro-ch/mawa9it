const Dialog = ({ setDialog, children }) => {
  return (
    <div className="absolute flex justify-center items-center w-full h-full">
      <div
        onClick={() => setDialog(false)}
        className="w-full h-full bg-black/60"
      >
        {" "}
      </div>

      <div className="lg:max-w-140 absolute  z-1 rounded-sm flex justify-center items-center px-10 py-10 lg:h-90 w-full max-w-90 h-80 backdrop-blur-xs ">
        {children}{" "}
        <button
          onClick={() => setDialog(false)}
          className=" bg-red-500 hover:bg-red-600 border-none px-2 text-background cursor-pointer relative left-7 top-[-140px] lg:top-[-160px]"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Dialog;
