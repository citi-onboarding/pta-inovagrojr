import React from "react";
import { CardSemSubtitulo, CardComSubtitulo } from "components/cards/style";


export default function Cards() {
  return (
    <>
      
      <CardSemSubtitulo>
        <h1>Consultoria Agropecuária:</h1>
        <p><strong>Irrigação:</strong> Neste projeto, será planejado todo o sistema de irrigação da propriedade. Através de análises para descobrir a distância entre as espécies a ser irrigadas, bem como a área a ser cultivada, o turno de rega das mesmas, o ciclo de vida das plantas e outros dados imprescindíveis para o levantamento. Posteriormente, será elaborado o projeto do sistema contendo os pontos de irrigação, obedecendo os cálculos de coeficiente de cultura e de outros parâmetros.</p>
      </CardSemSubtitulo>

      <CardComSubtitulo>
        <h1>Assessoria de Regularização:</h1>
        <h2>Plano de Gerenciamento de Resíduos Sólidos (PGRS)</h2>
        <p>É um documento técnico, com valor jurídico que demonstra a capacidade de um empreendimento de gerir seus resíduos gerados de forma ambientalmente adequada. Nele são descritos os procedimentos que a empresa já pratica e os que serão adotados quanto ao gerenciamento dos resíduos nas etapas de segregação, armazenamento, coleta, transporte, tratamento, destinação ou disposição final. Este documento é exigido pelos órgãos públicos para o licenciamento de empreendimentos que produzem resíduos perigosos ou em grandes quantidades.</p>
      </CardComSubtitulo>

    </>
  );
}
