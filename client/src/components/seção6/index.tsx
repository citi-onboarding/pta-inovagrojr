import React from "react";
import { Contat } from "./style";
import { Caixa } from "./style";

type Propis = {
    texto: string;
    textocaixa: string;
}



export default function Contato({texto, textocaixa}: Propis) {
    return (
        <>
            <Contat>
                <a></a>
                <p>{texto}</p>
            </Contat>

            <Caixa>
                <a>
                    <p>{textocaixa}</p>
                    <input placeholder="Nome"></input>
                    <b></b>
                    <input placeholder="Telefone"></input>
                    <b></b>
                    <input placeholder="Serviço"></input>
                    <b></b>
                    <input placeholder="Descreva sua demanda"></input>
                    <i></i>
                    <span>
                        <button>Enviar</button>
                    </span>
                </a>

            </Caixa>
        </>
    )
}
