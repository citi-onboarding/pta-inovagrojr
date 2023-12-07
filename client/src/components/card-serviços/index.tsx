import React from "react";
import { Retangulo , Quadrado } from "components/card-serviços/style";
import { AR, agropecuaria_tenorio_moraes, ball, baobarba, colegio_integral, grupo_ibrap, habibs, lógica_ambiental, refugio_do_rio_bonito,  } from "assets";


export default function Clients() {
  return (
    <>
      <Retangulo>
        
        <img src={colegio_integral.src} alt="/">
          
        </img>

        <img src={agropecuaria_tenorio_moraes.src} alt="/">
          
        </img>

        <img src={grupo_ibrap.src} alt="/">
          
        </img>

        <img src={baobarba.src} alt="/">
          
        </img>

        <img src={lógica_ambiental.src} alt="/">
          
        </img>

        

      </Retangulo>
      
      <Quadrado>

        <img src={ball.src} alt="/"></img>

        <img src={habibs.src} alt="/"></img>

        <img src={refugio_do_rio_bonito.src} alt="/"></img>

        <img src={AR.src} alt="/"></img>

      </Quadrado>
    </>

    
    
    
  );
}