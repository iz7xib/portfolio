import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";
import userData from "@constants/data";

export default function about() {
  return (
    <ContainerBlock title={`About - ${userData.name}`}>
      <AboutMe />
    </ContainerBlock>
  );
}
