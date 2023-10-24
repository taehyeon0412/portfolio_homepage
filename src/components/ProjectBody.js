import styled from "styled-components";

//util
import { portfolioList } from "./../util/portfolioList";

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
    margin-top: 150px;
    margin-bottom: 200px;
  }
`;

const SkillsHeader = styled.header``;

const SkillsImg = styled.div``;

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
        {/* 스킬 이미지 그리드로 나오게 하기 */}
      </Section>
    </Wrapper>
  );
}

export default ProjectBody;
