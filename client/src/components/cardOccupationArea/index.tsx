import React from "react";
import { AreaIcon1, AreaIcon2, AreaIcon3 } from "assets";
import { CardContainer, CardTitle, CardParagraph } from "components/cardOccupationArea/style";

type CardProps = {
  icon: string;
  title: string;
  content: string;
}

export default function CardOccupationArea({icon, title, content}:CardProps) {
  return (
    <CardContainer>
      <img src={icon} alt=""/>
      <CardTitle>{title}</CardTitle>
      <CardParagraph>{content}</CardParagraph>
    </CardContainer>
    
  );
}
