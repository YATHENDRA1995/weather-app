import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Weather from "../../modules/weather/Weather";
import { appId, baseUrl } from "@/config/Config";

const zip = () => {
  const router = useRouter();
  const { zip } = router?.query;
  const [weatherData, setWeatherData] = useState(null)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (zip) {
      const info = async () => {
        setLoader(true)
        const weatherInfo = await axios.get(
          `${baseUrl}zip=${Number(zip)},us&appid=${appId}`
        );
        setWeatherData(weatherInfo?.data)
        setLoader(false)
      };
      info();
    }
  }, [zip]);

  return <Weather weatherData={weatherData} loader={loader} />;
};

export default zip;
