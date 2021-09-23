import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";

import userData from "@constants/data";

export default function contact() {
  return (
    <ContainerBlock title={`Contact - ${userData.name}`}>
      <Contact />
    </ContainerBlock>
  );
}
