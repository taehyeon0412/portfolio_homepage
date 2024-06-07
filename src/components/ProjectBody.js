import styled from "styled-components";
import React from "react";
import { v4 as uuidv4 } from "uuid";

//util
import { portfolioList } from "./../util/portfolioList";
import { skillList } from "../util/skillList";

//Components
import PortfolioItem from "./PortfolioItem";

const Wrapper = styled.div``;

const Section = styled.section`
  &.PortfolioSection {
    h1 {
      font-size: 30px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 700;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 50px;
    }
  }

  &.SkillsSection {
    margin-top: 120px;
    margin-bottom: 100px;
  }
`;

const SkillsHeader = styled.header`
  font-size: 25px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 500px) {
    font-size: 23px;
  }
`;

const SkillsImgWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

const SkillsImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  white-space: pre;

  margin-bottom: 20px;

  img {
    width: 90px;
    height: 90px;

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;

    @media (max-width: 850px) {
      width: 75px;
      height: 75px;
    }

    @media (max-width: 650px) {
      width: 70px;
      height: 70px;
    }

    @media (max-width: 500px) {
      width: 60px;
      height: 60px;
    }

    @media (max-width: 430px) {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 385px) {
      width: 48px;
      height: 48px;
    }
  }

  span {
    text-align: center;
    font-weight: 700;

    @media (max-width: 650px) {
      font-size: 15px;
    }

    @media (max-width: 500px) {
      font-size: 13px;
    }

    @media (max-width: 385px) {
      font-size: 12px;
    }
  }
`;

//---------------------------------------- styled

function ProjectBody({ menuName }) {
  return (
    <Wrapper>
      <Section className="PortfolioSection">
        <h1>Project</h1>
        <h3>※ 프로젝트를 클릭해 주세요</h3>

        {portfolioList.map((it) => (
          <PortfolioItem key={uuidv4()} item={it} menuName={menuName} />
        ))}
      </Section>

      <Section className="SkillsSection">
        <SkillsHeader>Skills & Tools</SkillsHeader>

        <SkillsImgWrapper>
          {skillList.map((skill) => (
            <SkillsImg key={uuidv4()}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </SkillsImg>
          ))}
        </SkillsImgWrapper>
      </Section>
    </Wrapper>
  );
}

export default React.memo(ProjectBody);
