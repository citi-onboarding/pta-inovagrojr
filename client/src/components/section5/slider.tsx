import React from "react";
import Cards from "components/cards";
import { DivCarrossel } from "./style";


const Carrossel = () => {
  const cards = [
    <Cards
            title="Consultoria Agropecuária"
            content=" Neste projeto, será planejado todo o sistema de irrigação da propriedade.
            Através de análises para descobrir a distância entre as espécies a ser irrigadas,
            bem como a área a ser cultivada, o turno de rega das mesmas, o ciclo de vida das
            plantas e outros dados imprescindíveis para o levantamento. Posteriormente, será
            elaborado o projeto do sistema contendo os pontos de irrigação, obedecendo os cálculos
            de coeficiente de cultura e de outros parâmetros."
            strong="Irrigação:"
    />,
    <Cards
            title="Manejo de Plantas Daninhas:"
            content="O manejo consiste na adoção de uma série de medidas para prevenir e controlar
            plantas invasoras que afetam as culturas. As possibilidades de controle de plantas daninhas
            incluem os métodos preventivo, cultural, mecânico e químico. A escolha do método de controle
            das diversas espécies de plantas daninhas na área de interesse deve levar em conta as condições
            locais para uso de mão de obra e de equipamentos, sem esquecer dos aspectos ambientais e econômicos."
    />,
    <Cards
            title="Planejamento Agrícola:"
            content="O planejamento agrícola é responsável por determinar e traçar estratégias na gestão rural,
            com o objetivo de reduzir custos, aumentando a produtividade e a sustentabilidade do negócio. Este projeto
            é direcionado tanto para proprietários de terras que almejam iniciar suas atividades agrícolas, quanto para 
            os donos de terras que já cultivam e querem escalonar seus resultados."
    />, 
    <Cards
            title="Manejo Integrado de Pragas:"
            content="O MIP faz o uso integrado dos métodos de controle selecionados com base em parâmetros técnicos apropriados
            e adequados para cada cultivo, com o intuito de manter o controle e estabilização da população. A finalidade do MIP
            é a redução da população de pragas de modo que seus inimigos naturais permaneçam na lavoura agindo sob suas presas,
            proporcionando a volta do equilíbrio natural do sistema."
    />,
    <Cards
            title="Gestão Agropecuária:"
            content="Este projeto visa atender às necessidades do proprietário rural no que tange à criação de
            aves, gado, ovinos, caprinos, suínos ou equinos. Proprietários que visam ingressar na pecuária ou
            que desejam escalonar seus resultados podem ser atendidos por este serviço, que trabalha com viabilidade
            da pastagem, construção e manutenção de aviário, confinamento bovino e outras atividades. O cliente
            irá dispor de análises e estudos essenciais para as atividades, bem como o zoneamento da sua área,
            projetos para a construção das estruturas, elaboração da dieta dos animais, e outros serviços."
    />,
    <Cards
            title="Assessoria de Regularização:"
            subtitle="Plano de Gerenciamento de Resíduos Sólidos (PGRS)"
            content="É um documento técnico, com valor jurídico que demonstra a capacidade de um empreendimento 
            de gerir seus resíduos gerados de forma ambientalmente adequada. Nele são descritos os procedimentos
            que a empresa já pratica e os que serão adotados quanto ao gerenciamento dos resíduos nas etapas de 
            segregação, armazenamento, coleta, transporte, tratamento, destinação ou disposição final. Este documento
            é exigido pelos órgãos públicos para o licenciamento de empreendimentos que produzem resíduos perigosos
            ou em grandes quantidades."
    />,
    <Cards
            title="Cadastro Ambiental Rural (CAR):"
            content="Trata-se de um registro eletrônico, obrigatório para todos os imóveis rurais, que tem por
            finalidade integrar as informações ambientais referentes à situação das Áreas de Preservação Permanente,
            das áreas de Reserva Legal, das florestas e dos remanescentes de vegetação nativa, das Áreas de Uso
            Restrito das áreas consolidadas das propriedades e posses rurais do país. Os dados do CAR farão parte
            do Sistema Nacional de Cadastro Ambiental Rural."
    />,
    <Cards
            title="Licenciamento Ambiental:"
            content="O Licenciamento ambiental é um dos instrumentos da Política Nacional de Meio Ambiente. É
            através da regularização ambiental que a administração pública controla empreendimentos e atividades
            efetivas ou potencialmente poluidoras ou que possam causar a degradação ambiental. Para isso, a construção,
            instalação, ampliação e funcionamento de estabelecimentos dependerão de prévio licenciamento ambiental,
            sendo o processo dividido na obtenção das licenças: LP, LI, LO, LPS e ASV."
    />,
    <Cards
            title="Consultoria Ambiental:"
            content=" Um projeto de paisagismo pode ir muito além do que apenas fazer um jardim bonito.
            O paisagismo funcional traz a proposta da criação de espaços que, além de apresentarem a importância
            estética, desempenham uma função. Os jardins são planejados de acordo com uma finalidade desejada,
            como a de fornecer alimentação, ser educativo ou terapêutico ou para restauração ambiental. Um projeto
            de paisagismo é uma representação gráfica, onde constam de forma detalhada todas as informações
            necessárias de como será executado o trabalho."
            strong="Paisagismo:"
    />,
    <Cards
            title="Compostagem:"
            content=" A compostagem é uma técnica que permite a transformação da matéria orgânica em adubo natural
            que pode ser usado na agricultura, em jardins e plantas, substituindo o uso de produtos químicos. São
            sobras de legumes, frutas e alimentos em geral, além de resíduos da jardinagem, bagaço de cana e outras
            substâncias orgânicas como o esterco que servem de insumo para a produção orgânica de adubo. Este
            projeto visa implementar uma estação de compostagem no empreendimento atendido. Realizando todos 
            os estudos necessários e construindo toda a estrutura de produção e armazenamento do adubo orgânico."
    />,
    <Cards
            title="Educação Ambiental:"
            content="A educação ambiental é a base para o desenvolvimento sustentável, uma vez que são as atitudes
            coletivas que determinam quanto é poluído, degradado ou desperdiçado. Trabalhar com pessoas ambientalmente
            conscientes pode reduzir os custos com água, energia e gás, como consequência do uso econômico desses
            recursos. É pensando nisso que a Inovagro Jr. oferece o projeto de educação ambiental para empresas
            dos mais variados nichos, de escolas a grandes corporações. Nesse projeto, serão realizadas atividades
            dinâmicas, palestras e capacitações com certificação para o contratante."
    />,
    <Cards
            title="Marketing Verde:"
            content="Hoje em dia, na era das redes sociais, ter boas práticas e consciência ambiental e estar
            em dia com seus deveres com a natureza é algo que deve ser mostrado. Principalmente quando a maior
            parte do público já exige isso das empresas, selecionando as marcas com maior caráter ecológico.
            A Inovagro Jr. oferece o serviço de marketing verde visando promover o contratante nesse contexto,
            elaborando e divulgando projetos de educação ambiental."
    />,
    <Cards
            title="Reaproveitamento de Água da chuva:"
            content="O reaproveitamento de água da chuva e esgoto é uma prática cada vez mais importante em
            todo o mundo, principalmente em regiões onde a escassez de água é um problema recorrente. A coleta
            e tratamento da água da chuva podem ser feitos através de sistemas simples, como a instalação de
            cisternas e filtros, que permitem o uso da água para atividades como irrigação de plantas e limpeza
            de áreas externas. O reaproveitamento de água é uma prática sustentável que contribui para a
            preservação dos recursos hídricos e para a redução do consumo de água potável."
    />
    // Adicione mais cards conforme necessário
  ];

  const [currentCard, setCurrentCard] = React.useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <DivCarrossel>
      <button onClick={handlePrevious}>&lt;</button>
      {cards[currentCard]}
      <button onClick={handleNext}>&gt;</button>
    </DivCarrossel>
  );
};

export default Carrossel;
