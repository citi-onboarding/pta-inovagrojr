import React from "react";
import { TextoComLinhaEmcima } from "./style";
import Clients from "components/card-serviços";
import { Sessão3 } from "./style";

type Prop = {
    titulo: string;
}



export default function TextoComLinha({titulo}: Prop) {
    return (
      <>
        <Sessão3>
          <TextoComLinhaEmcima>
              <p>{titulo}</p>
          </TextoComLinhaEmcima>
          <Clients/>        
        </Sessão3>
      </>
    );
  }
