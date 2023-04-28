import styled from 'styled-components';

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:  8px;
  padding: 16px 64px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 16px 0px;
`
export const Card = styled.div`
  background-color: #F2F2F2;
  padding: 16px;
  border-radius: 5px;
  width: 300px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`