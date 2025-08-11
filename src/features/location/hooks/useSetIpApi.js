import { useEffect } from "react";
// import { LocationContext } from "../../../../contexts/Context";

export function useSetIpApi({ location, setLocation, setApiAlAdhan }) {
  //   const [region, setRegion] = useState();
  console.log("chofi");

  useEffect(() => {
    console.log("chofi2");

    const fetchData = async () => {
      console.log("chofi3");
      if (location != "Al-Riyadh, Saudi Arabia") {
        setApiAlAdhan(true);
        return;
      }
      try {
        const response = await fetch("https://ipwho.is/");
        const data = await response.json();
        const region = data.region;
        // setRegion(r);
        setLocation(region);
        // console.log(r);
        setApiAlAdhan(true);
        // console.log(region);
        console.log("ipwho.is");
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fetchData();
    // console.log(region);
  }, []);
}
