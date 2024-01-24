import React from "react";
import { Head } from "./style";
import { LogoInovagroJr } from "assets";


export default function Headere(){
    return(
        <>
            <Head>
                <img src={LogoInovagroJr.src} alt="/"></img>
                <a href="#inicio">Início</a>
                <a href="#quem-somos">Quem somos</a>
                <a href="#serv">Serviços</a>
                <a href="#cont">
                    <button><p>Contato</p></button>
                </a>
            </Head>
        </>
    )
}