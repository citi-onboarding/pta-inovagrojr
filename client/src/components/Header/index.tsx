import React from "react";
import { Head } from "./style";
import { LogoInovagroJr } from "assets";


export default function Headere(){
    return(
        <>
            <Head>
                <img src={LogoInovagroJr.src} alt="/"></img>
                <a>Início</a>
                <a>Quem somos</a>
                <a>Serviços</a>
                <button><p>Contato</p></button>
            </Head>
        </>
    )
}