import styled from "styled-components";

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
      margin-bottom: 50px;
    }
  }

  &.GotoGithubSection {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      font-size: 20px;
      padding: 10px 15px 10px 15px;
      border: 2px solid white;
      border-radius: 20px;

      &:hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.5);
        border: 2px solid rgba(255, 255, 255, 0.5);
      }
    }
  }

  &.SkillsSection {
    margin-top: 120px;
    margin-bottom: 200px;
  }
`;

const SkillsHeader = styled.header`
  font-size: 25px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
`;

const SkillsImgWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(6, auto);
  align-items: center;
`;

const SkillsImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 90px;
    height: 90px;
  }

  span {
    text-align: center;
    font-weight: 700;
  }
`;

//---------------------------------------- styled

function ProjectBody() {
  return (
    <Wrapper>
      <Section className="PortfolioSection">
        <h1>Project</h1>

        {portfolioList.map((it, index) => (
          <PortfolioItem key={it.Img_id} item={it} />
        ))}
      </Section>

      <Section className="GotoGithubSection">
        <a
          href="https://github.com/taehyeon0412"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>SEE MORE ON GITHUB</div>
        </a>
      </Section>
      <Section className="SkillsSection">
        <SkillsHeader>Skills & Tools</SkillsHeader>

        <SkillsImgWrapper>
          {skillList.map((skill, index) => (
            <SkillsImg key={index}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </SkillsImg>
          ))}
        </SkillsImgWrapper>
      </Section>
    </Wrapper>
  );
}

export default ProjectBody;
