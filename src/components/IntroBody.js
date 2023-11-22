import React, { useMemo, useState } from "react";
import styled from "styled-components";
import useInterval from "use-interval";

//SVG
import { ReactComponent as ShootingStar } from "../assets/shooting_star.svg";

const Wrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  position: relative;
`;

const ShootingStarContainer = styled.div`
  position: absolute;
  background-color: transparent;
  height: 300px;
  right: 0;

  @media (max-width: 1000px) {
    height: 250px;
  }

  @media (max-width: 900px) {
    height: 200px;
  }

  @media (max-width: 650px) {
    height: 150px;
    right: 10%;
    top: -80%;
  }

  @media (max-width: 550px) {
    top: -110%;
  }

  @media (max-width: 430px) {
    top: -170%;
  }
`;
//SVG컨테이너

const ShootingStarSVG = styled(ShootingStar)`
  width: 100%;
  height: 100%;
`;

const IntroTitle = styled.span`
  position: relative;
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;

  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #0abde3,
    #a162e8,
    #f7ce68 46%,
    #a162e8,
    #85ffbd
  );

  @keyframes typingCursor {
    from {
      border-right: 2px solid white;
    }
    to {
      border-right: 2px solid black;
    }
  }

  animation: typingCursor 1s ease-in-out 0ms 5;

  white-space: pre-line;
  //jsx에서 개행문자나 태그 동작하게 함 \n

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
`;

const IntroP = styled.p`
  position: relative;
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  line-height: 1.5;
  opacity: 0;

  animation: fadein 2s;
  animation-delay: 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-fill-mode: forwards;
  //애니메이션이 끝나고도 마지막 상태를 유지하도록 설정

  @media (max-width: 430px) {
    font-size: 15px;
  }

  @media (max-width: 385px) {
    font-size: 14px;
  }
`;

//-----------------------------styled

function IntroBody() {
  const completedTitle = useMemo(() => {
    return "안녕하세요! \n 프론트엔드 개발자를 꿈꾸는 \n 곽태현입니다.";
  }, []);
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useInterval(() => {
    // 만약, count가 completedTitle의 길이와 같거나 커지면 반복을 멈춘다.
    if (count >= completedTitle.length) {
      return;
    }

    setLandingTitle((prev) => {
      // 빈 문자열("")은 false이므로 completedTitle의 가장 앞 글자가 result에 할당된다.
      /* 그 뒤로는 landingTitle이 빈 문자열이 아니므로
       이전에 존재하던 것과 count번 인덱스에 존재하는 문자열을 합쳐서
       다시 result에 할당한다. */
      let result = prev ? prev + completedTitle[count] : completedTitle[0];

      // count를 증가시킨다.
      setCount((prev) => prev + 0.5);
      //useInterval 버그인지 모르겠는데 1로 하면 1357..로 글자가 나와서0.5로 수정함

      /* 배포를 할때는 0.5로 하면 undefined가 나오는데 
         npm start에서는 잘나옴 이유를 모르겠음 */

      return result;
    });
  }, 50);

  return (
    <Wrapper>
      <ShootingStarContainer>
        <ShootingStarSVG />
      </ShootingStarContainer>

      <IntroTitle>{landingTitle}</IntroTitle>

      <IntroP>
        차별화된 서비스를 만들어내는 개발자
        <br />
        꼼꼼하게 빈 틈을 채워나가는 개발자
        <br />
        사람들이 필요로 하는 것이 무엇인지 고민하는 개발자
      </IntroP>
    </Wrapper>
  );
}

export default React.memo(IntroBody);
