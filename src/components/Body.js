import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 150px;
`;

const Section = styled.section`
  &.IntroSection {
    margin-bottom: 100px;
  }

  &.PortfolioSection {
    h1 {
      font-size: 30px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 40px;
    font-weight: 700;

    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: #4158d0;
    background-image: linear-gradient(43deg, #a162e8, #f7ce68 46%, #85ffbd);

    @media (max-width: 700px) {
      font-size: 30px;
    }
    @media (max-width: 530px) {
      font-size: 25px;
    }
    @media (max-width: 430px) {
      font-size: 24px;
    }
    @media (max-width: 400px) {
      font-size: 22px;
    }
    @media (max-width: 370px) {
      font-size: 21px;
    }
  }

  p {
    margin-top: 6px;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
  }
`;

const SkillsHeader = styled.header``;

const SkillsImg = styled.div``;

function Body() {
  return (
    <Wrapper>
      <Section className="IntroSection">
        <Intro>
          <h1>
            안녕하세요!
            <br />
            프론트엔드 개발자 곽태현 입니다.
          </h1>
          <p>
            차별화된 서비스를 만들어내는 개발자
            <br />
            꼼꼼하게 빈 틈을 채워나가는 개발자
            <br />
            사람들이 필요로 하는 것이 무엇인지 고민하는 개발자
          </p>
        </Intro>
      </Section>
      <Section className="PortfolioSection">
        <h1>Project</h1>
      </Section>
      <Section>SEE MORE ON GITHUB</Section>
      <Section>
        <SkillsHeader>Skills & Tools</SkillsHeader>
        {/* 스킬 이미지 그리드로 나오게 하기 */}
      </Section>
    </Wrapper>
  );
}

export default Body;
