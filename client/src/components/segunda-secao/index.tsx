import React from "react";
import {
  GreenLine,
  LeftContainer,
  MainContainer,
  Paragraph,
  RigthContainer,
  TitleSegundaSecao,
  TitleSegundaSecao2,
} from "./style";
import CardVerdinho from "components/card-verdinho";

type Props = {
  title: string;
  title2: string;
  children: string;
};

export default function SegundaSecao({ title, title2, children }: Props) {
  return (
    <MainContainer>
      <LeftContainer>
        <TitleSegundaSecao>{title}</TitleSegundaSecao>
        <TitleSegundaSecao2>{title2}</TitleSegundaSecao2>
        <GreenLine></GreenLine>
        <Paragraph>{children}</Paragraph>
      </LeftContainer>
      <RigthContainer>
        <CardVerdinho title="Missão">
          Entregar soluções com ideais de um futuro sustentável e tecnológico.
        </CardVerdinho>

        <CardVerdinho title="Visão">
          Ser referência em inovação com impacto positivo no mercado.
        </CardVerdinho>

        <CardVerdinho title="Valores">
          Cliente de sucesso, empresa de sucesso; Formamos líderes, somos donos;
          Somos especialistas em constante reinvenção; Comunicação empática e
          assertiva; Feedbacks que transformam.
        </CardVerdinho>
      </RigthContainer>
    </MainContainer>
  );
}
