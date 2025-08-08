import { useEffect } from "react";
// import { LocationContext } from "../../../../contexts/Context";

export function useSetIpApi({ location, setLocation, setApiAlAdhan }) {
  //   const [region, setRegion] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (location != "Al-Riyadh, Saudi Arabia") return;
      try {
        const response = await fetch("https://ipwho.is/");
        const data = await response.json();
        const region = data.region;
        // setRegion(r);
        setLocation(region);
        // console.log(r);
        setApiAlAdhan(true);
        // console.log(region);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    fetchData();
    // console.log(region);
  }, []);
}
