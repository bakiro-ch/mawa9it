const Dialog = ({ setDialog, children }) => {
  return (
    <div className="absolute flex justify-center lg:items-center h-full w-full">
      <div
        onClick={() => setDialog(false)}
        className="w-full h-full bg-black/60"
      >
        {" "}
      </div>

      <div className="lg:max-w-140 absolute shadow-2xl z-1 rounded-sm flex justify-center items-center px-10 py-10 lg:h-90 w-full max-w-90 h-screen backdrop-blur-xs ">
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
