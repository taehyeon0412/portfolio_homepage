import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";
import React from "react";

//assets
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkIcon } from "../assets/link.svg";

//util
import useWindowDimensions from "./../util/useWindow";

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

    /* &:hover {
      cursor: pointer;
    } */

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;

    @media (max-width: 850px) {
      width: 80%;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
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

    @media (max-width: 430px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.9);
    white-space: pre-line;
    line-height: 1.5;
    font-weight: 700;

    @media (max-width: 430px) {
      white-space: normal;
    }
  }

  @media (max-width: 850px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    padding-left: 0;
    width: 80%;
  }

  @media (max-width: 700px) {
    padding-left: 0;
    width: 80%;
  }
`;
//포토폴리오 오른쪽 설명 div

const PortfolioDcSkillDiv = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1150px) {
    gap: 5px;
  }

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 90%;
    text-align: center;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(6, 1fr);
    width: 90%;
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(5, 1fr);
    width: 90%;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(4, auto);
    width: 100%;
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

function PortfolioItem({ item, menuName }) {
  const navigate = useNavigate();
  const width = useWindowDimensions();

  const modalMatch = useMatch(`/${menuName}/:Img_id`);

  const onBoxClicked = () => {
    navigate(`/${menuName}/${item.Img_id}`, { replace: true });

    if (modalMatch) {
      console.log(`모달매치됨 +${menuName} ${item.Img_id}`);
    }
  };
  //모달 매치기능은 넣어놨으나 내용물을 뭘 할지 구상이 안되서 일단 보류

  const contentRender =
    width <= 850 ? (
      <>
        <img
          src={item.Img}
          alt="portfolio_Img"
          onClick={() => {
            onBoxClicked(item.Img_id);
          }}
        />
        <PortfolioDescriptionDiv {...item} />
      </>
    ) : item.Img_id % 2 === 1 ? (
      <>
        <img
          src={item.Img}
          alt="portfolio_Img"
          onClick={() => {
            onBoxClicked(item.Img_id);
          }}
        />
        <PortfolioDescriptionDiv {...item} />
      </>
    ) : (
      <>
        <PortfolioDescriptionDiv {...item} />
        <img
          src={item.Img}
          alt="portfolio_Img"
          onClick={() => {
            onBoxClicked(item.Img_id);
          }}
        />
      </>
    );

  return <PortfolioDiv>{contentRender}</PortfolioDiv>;
}

export default React.memo(PortfolioItem);
