import React from "react";
import { Section5Div, Section5H2 } from "./style";
import Carrossel from "./slider";



export default function Section5() {
  return (
    <Section5Div>
        <hr></hr>
        <Section5H2>Descrição de cada serviço:</Section5H2>
        <Carrossel/>
    </Section5Div>
  );
};


