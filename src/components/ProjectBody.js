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

      <Section>SEE MORE ON GITHUB</Section>
      <Section>
        <SkillsHeader>Skills & Tools</SkillsHeader>
        {/* 스킬 이미지 그리드로 나오게 하기 */}
      </Section>
    </Wrapper>
  );
}

export default ProjectBody;
