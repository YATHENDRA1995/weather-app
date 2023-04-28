import { useRouter } from "next/router";
import Search from "./components/search/Search";
import { Container, Content } from "./Landing.style";
import { Heading } from "@/styles/sharedStyles";

const Landing = () => {
  const router = useRouter();

  const handleSearch = (zip) => {
    router.push(`/weather/${zip}`);
  };

  return (
    <Container>
      <Content>
        <Heading>Weather App</Heading>
        <Search onSubmit={handleSearch} />
      </Content>
    </Container>
  );
};

export default Landing;
