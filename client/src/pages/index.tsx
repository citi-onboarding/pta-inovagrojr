import React from "react";
import { Clients } from "components";
import TextoComLinha from "components/seção3";

export default function Home() {
  return (
    <>
      <TextoComLinha titulo="Empresas Impactadas:" />
      <Clients/>
    </>
  );
}
