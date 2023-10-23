import styled from "styled-components";
import { portfolioList } from "./../util/portfolioList";

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

const PortfolioDiv = styled.div`
  margin-bottom: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    border-radius: 20px;
    width: 100%;
  }
`;

const PortfolioDc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 50px;

  span {
    font-family: "Nanum Pen Script", cursive;
    font-size: 40px;
    font-weight: 700;

    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #0abde3,
      #a162e8,
      #f7ce68 46%,
      #0abde3,
      #85ffbd
    );
  }

  p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.9);
    white-space: pre-line;
    line-height: 1.5;
    font-weight: 700;
  }
`;

const SkillsHeader = styled.header``;

const SkillsImg = styled.div``;

function ProjectBody() {
  return (
    <Wrapper>
      <Section className="PortfolioSection">
        <h1>Project</h1>
        {portfolioList.map((it) => (
          <PortfolioDiv key={it.Img_id}>
            <img src={it.Img} alt="portfolio Img" />
            <PortfolioDc>
              <span>{it.Title}</span>
              <p>{it.description}</p>
            </PortfolioDc>
          </PortfolioDiv>
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
