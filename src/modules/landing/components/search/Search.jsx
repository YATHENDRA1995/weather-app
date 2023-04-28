import { useEffect, useState } from "react";
import { SearchContainer, Input, Error } from "./Search.style";
import { Button } from "@/styles/sharedStyles";

const Search = (props) => {
  const { onSubmit } = props;
  const [zip, setZip] = useState("");
  const [isValidZip, setIsValidZip] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(zip);
  };

  useEffect(() => {
    zip?.length === 5 ? setIsValidZip(true) : setIsValidZip(false);
  }, [zip]);

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter Zip Code"
          className="no-arrows"
        />
        <Button type="submit" disabled={!isValidZip}>
          Check Weather
        </Button>
      </form>
      {!isValidZip && zip !== "" ? <Error>Invalid Zip code</Error> : null}
    </SearchContainer>
  );
};

export default Search;
