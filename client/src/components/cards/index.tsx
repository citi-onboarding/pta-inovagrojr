import React from "react";
import { Card } from "components/cards/style";

type Props = {
  title: string;
  subtitle?: string;
  content: string;
  strong?: string;
}


export default function Cards({title, subtitle, content, strong}: Props) {
  return (
    <>
      
      <Card>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p><strong>{strong}</strong>{content}</p>
      </Card>

    </>
  );
}
