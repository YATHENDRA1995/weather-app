import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  margin: 12px 0px;
`
export const Description = styled.p`
  text-align: center;
  margin: 12px 0px;
`
export const Button = styled.button`
  height: 100%;
  padding: 8px 24px;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    opacity: 0.9;
    pointer-events: none;
  }
`;