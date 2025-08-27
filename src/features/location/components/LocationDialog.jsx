import Dialog from "../../../components/Dialog";
import { LocationContext } from "../../../contexts/Context";

import { useMemo, useState, useContext } from "react";
import { useSearchCities } from "../hooks/useSearchCities";

const LocationDialog = ({ setDialog }) => {
  const [inputValue, setInputValue] = useState("");
  const [optionsDisplay, setOptionsDisplay] = useState(true);

  const { setApiAlAdhan, setLocation } = useContext(LocationContext);

  const results = useSearchCities(inputValue);

  const options = useMemo(
    () =>
      results.map((el) => (
        <div
          key={el}
          onClick={() => {
            setOptionsDisplay(false);
            setInputValue(el);
            setDialog(false);
            setLocation(el);
            setApiAlAdhan(true);
          }}
          className=" hover:bg-background/50 bg-background cursor-pointer px-5 py-2"
        >
          {el}
        </div>
      )),
    [results]
  );

  return (
    <Dialog setDialog={setDialog}>
      <div className="flex flex-col max-h-11/12 w-full">
        <input
          placeholder="Enter the new address"
          autoComplete="off"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            setOptionsDisplay(true);
          }}
          className="mb-0.5 text-black w-full bg-background px-2 py-2 outline-0"
          type="text"
        />
        {optionsDisplay && <div className="overflow-auto">{options}</div>}
        {inputValue && results.length === 0 && (
          <div className="px-5 py-2 text-sm text-background">
            No results found
          </div>
        )}

        {/* <div className=" hover:bg-background/50 bg-background cursor-pointer px-5 py-2">
          Python
        </div>
        <div className=" hover:bg-background/50 bg-background cursor-pointer px-5 py-2">
          JavaScript
        </div> */}
      </div>
    </Dialog>
  );
};

export default LocationDialog;
