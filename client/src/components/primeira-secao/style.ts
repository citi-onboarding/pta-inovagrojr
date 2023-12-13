import styled from "styled-components";
import "@fontsource/montserrat";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  gap: 60px;
`;

export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 33px;
  text-align: justify;
  padding-bottom: 5rem;
  color: #252525;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 65px;
  line-height: 79px;
  padding-bottom: 1rem;
  color: #005038;
`;

export const GreenLine = styled.div`
  height: 5px;
  width: 380px;
  background-color: #0ebe68;
`;

export const IconText = styled.p`
  font-family: "Montserrat";
  color: #666666;
  margin: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
