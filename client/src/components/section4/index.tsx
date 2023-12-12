import React from "react"
import { AreaIcon1, AreaIcon2, AreaIcon3 } from "assets";
import { CardOccupationArea } from "components";
import { SectionDiv, SectionH2, SectionDivCards } from "./style";

export default function Section4(){
    return(
    <SectionDiv>
        <hr/>
        <SectionH2>Nossas áreas de atuação:</SectionH2>
        <SectionDivCards>
        <CardOccupationArea
        icon={AreaIcon1.src}
        title="Consultoria Agropecuária"
        content="Irrigação, Manejo de Plantas Daninhas, Planejamento Agrícola, Manejo Integrado de Pragas e Gestão Agropecuária."/>

        <CardOccupationArea
        icon={AreaIcon2.src}
        title="Assessoria de Regularização"
        content="Plano de Gerenciamento de Áreas Degradadas (PGRS), Cadastro Ambiental Rural (CAR), Licenciamento Ambiental e Inventário Florestal."/>

        <CardOccupationArea
        icon={AreaIcon3.src}
        title="Consultoria Ambiental"
        content="Paisagismo, Compostagem, Educação Ambiental, Marketing Verde e Reaproveitamento de Água da chuva."/>
        </SectionDivCards>
    </SectionDiv>
    );
}