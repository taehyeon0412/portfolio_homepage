import styled from "styled-components";

//assets
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkIcon } from "../assets/link.svg";

const PortfolioDiv = styled.div`
  margin-bottom: 120px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    border-radius: 20px;
    width: 100%;

    &:hover {
      cursor: pointer;
    }

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;
//포토폴리오 전체 div

const PortfolioDc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 50px;

  span {
    font-family: "Nanum Pen Script", cursive;
    font-size: 45px;
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
//포토폴리오 오른쪽 설명 div

const PortfolioDcSkillDiv = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1150px) {
    gap: 5px;
  }
`;
//포토폴리오 오른쪽 설명 스킬div

const PortfolioDcSkill = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  border: 2px solid;
  border-radius: 10px;
`;
//포토폴리오 오른쪽 설명 개별 스킬div

const LinkDiv = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
`;

const commonLinkStyle = `
width: 40px;
height: 40px;
fill: white;

&:hover {
  cursor: pointer;
  fill : rgba(255, 255, 255, 0.5);
  scale: 1.1;
  }
`;

const LinkGithubIcon = styled(GithubIcon)`
  ${commonLinkStyle}
`;

const LinkWepIcon = styled(LinkIcon)`
  ${commonLinkStyle}
`;

// ---------------------------------------------styled

const PortfolioDescriptionDiv = ({
  Title,
  description,
  skill,
  githubURL,
  wepURL,
}) => (
  <PortfolioDc>
    <span>{Title}</span>
    <p>{description}</p>
    {/* 타이틀+설명 */}

    <PortfolioDcSkillDiv>
      {skill.map((skill, index) => (
        <PortfolioDcSkill key={index}>{skill}</PortfolioDcSkill>
      ))}
      {/* skill 부분 map으로 각각 div로 불러옴  */}
    </PortfolioDcSkillDiv>

    <LinkDiv>
      <a href={githubURL} target="_blank" rel="noopener noreferrer">
        <LinkGithubIcon />
      </a>
      <a href={wepURL} target="_blank" rel="noopener noreferrer">
        <LinkWepIcon />
      </a>
    </LinkDiv>
    {/* 클릭시 외부링크 새창으로 열림 */}
  </PortfolioDc>
);

/* it.Img_id가 짝수일때 img, PortfolioDc 순서
   it.Img_id가 홀수일때 PortfolioDc ,img 순서 겹치는 부분 모듈화하고
   ProjectBody에 props를 넘겨준다  */

function PortfolioItem({ item }) {
  return (
    <PortfolioDiv>
      {item.Img_id % 2 === 1 ? (
        <>
          <img src={item.Img} alt="portfolio_Img" />
          <PortfolioDescriptionDiv {...item} />
        </>
      ) : (
        <>
          <PortfolioDescriptionDiv {...item} />
          <img src={item.Img} alt="portfolio_Img" />
        </>
      )}
    </PortfolioDiv>
  );
}

export default PortfolioItem;
