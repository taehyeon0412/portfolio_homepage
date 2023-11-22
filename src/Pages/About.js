import styled from "styled-components";
import React, { useEffect, useState } from "react";

//component
import Navigation from "../components/Navigation";
import { commonStyle } from "./Home";

const Wrapper = styled.div`
  ${commonStyle}
  grid-template-rows: 70px auto;
  opacity: ${(props) => (props.show === "true" ? "1" : "0")};
  transition: opacity 3s ease;
`;

function About() {
  const [showWrapper, setShowWrapper] = useState("false");

  useEffect(() => {
    setShowWrapper("true");
  }, []);
  // 로딩될 때, Wrapper의 opacity를 1로 변경

  return (
    <Wrapper show={showWrapper}>
      <Navigation menuName={"about"} />
    </Wrapper>
  );
}

export default About;
