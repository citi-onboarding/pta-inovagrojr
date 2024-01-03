import React from "react";
import { Headere, PrimeiraSecao, SegundaSecao, TextoComLinha, Section4, Section5, Contato } from "components";
import { PrimeiraSecaoImg } from "assets";

export default function Home() {
  return (
    <div style={{backgroundColor: "#ffffff"}}>
      <Headere/>
      <PrimeiraSecao
        title="Fazemos a diferença no seu negócio!"
        children="Desde 2017, estamos impactando nosso setor com serviços inovadores e personalizados para cada cliente. Fazemos a diferença no seu negócio para que você faça a diferença no mundo! "
        img={PrimeiraSecaoImg.src}
        alt="Imagem de quatro pessoas, da esquerda para direita, um homem e três mulheres, todos sorrindo, com a camisa da Inovagro Jr e ."
        />
      <SegundaSecao
        title="Conheça a"
        title2="Inovagro JR:"
        children="Somos uma empresa formada por estudantes da UFRPE, comprometidos e capacitados, que visam entregar soluções personalizadas e completas para o mercado com foco na sustentabilidade e inovação do setor agropecuário e ambiental, alinhados à boa comunicação e satisfação dos nossos clientes. Fazemos a diferença no seu negócio para que você faça a diferença no mundo."
      />
      <TextoComLinha titulo="Empresas Impactadas:"/>
      <Section4/>
      <Section5/>
      <Contato
       texto="Contato:"
       textocaixa="Solicite seu orçamento:"/>
    </div>
  );
}
