import { useRouter } from "next/router";
import { Button, Description, Heading } from "@/styles/sharedStyles";
import { Card, CardContainer, Empty, HeaderContent, WeatherContainer } from "./Weather.style";

const Weather = (props) => {
  const { weatherData, loader } = props;
  const router = useRouter()

  if (loader) return <Empty>Loading...</Empty>
  if (!weatherData) return <Empty>Invalid Zip code</Empty>;
  return (
    <WeatherContainer>
      <HeaderContent>
        <Button onClick={() => router?.push('/')}>back</Button>
        <Heading>
          Weather Report: {weatherData?.city?.name}&nbsp;(
          {weatherData?.city?.country})
        </Heading>
        <div></div>
      </HeaderContent>
      <Description>
        This is a detailed weather report showing a 3 hour forecast for the next
        5 days.
      </Description>
      <CardContainer>
        {weatherData?.list?.map((item, index) => (
          <Card key={index}>
            <h2>
              {new Date(item.dt_txt).toLocaleDateString()}{" "}
              {new Date(item.dt_txt).toLocaleTimeString()}
            </h2>
            <p>Temperature: {item.main.temp} °F</p>
            <p>Feels like: {item.main.feels_like} °F</p>
            <p>Humidity: {item.main.humidity}%</p>
            <p>Wind Speed: {item.wind.speed} mph</p>
            <p>Weather: {item.weather[0].description}</p>
          </Card>
        ))}
      </CardContainer>
    </WeatherContainer>
  );
};

export default Weather;
