import styled from "styled-components";
import React from "react";

//component
import Navigation from "../components/Navigation";
import { Wrapper } from "./Home";

function About() {
  return (
    <Wrapper>
      <Navigation menuName={"about"} />
    </Wrapper>
  );
}

export default About;
