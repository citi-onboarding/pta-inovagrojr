import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  margin-top: 100px;
  padding-left: 50px;
  padding-right: 50px;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;

export const TitleSegundaSecao = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 59px;
  padding-bottom: 1rem;
  color: #000000;
`;

export const TitleSegundaSecao2 = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 59px;
  padding-bottom: 1rem;
  color: #005038;
`;

export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  text-align: justify;
  padding-bottom: 5rem;
  padding-top: 2rem;
  color: #252525;
`;

export const GreenLine = styled.div`
  height: 5px;
  width: 370px;
  background-color: #005038;
`;

export const RigthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LeftContainer = styled.div`
  max-width: 30%;
`;
