import React from "react";
import { TextoComLinhaEmcima } from "./style";

type Prop = {
    titulo: string;
}



export default function TextoComLinha({titulo}: Prop) {
    return (
      <>
        <TextoComLinhaEmcima>
            <p>{titulo}</p>
        </TextoComLinhaEmcima>
      </>
    );
  }
