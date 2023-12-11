import React from "react";
import { Container, Paragraph } from "./style";

type Props = {
  title: string;
  children: string;
};

function CardVerdinho({ title, children }: Props) {
  return (
    <Container>
      <Paragraph>
        <strong>{title}: </strong>
        {children}
      </Paragraph>
    </Container>
  );
}

export default CardVerdinho;
