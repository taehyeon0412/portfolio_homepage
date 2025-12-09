import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// 별똥별 떨어지는 애니메이션
// 고정 각도 대신 CSS 변수 var(--angle) 사용
const shoot = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(var(--angle));
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-500px) translateY(500px) rotate(var(--angle));
    opacity: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: transparent;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
`;

// 별똥별
const ShootingStar = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 1);
  border-radius: 100%;
  opacity: 0;

  /* 빛 번짐 효과*/
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 6px rgba(255, 255, 255, 0.1);

  /* 랜덤 각도 */
  --angle: ${(props) => props.angle}deg;

  /* 랜덤 속도,  */
  animation: ${shoot} ${(props) => props.duration || 4}s linear infinite;
  animation-delay: ${(props) => props.delay}s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => props.tailWidth}px; /* 꼬리 길이 */
    height: 1px;
    background: linear-gradient(90deg, white, transparent);
    left: 10px; /* 뒤쪽으로 꼬리 붙이기 */
    opacity: ${(props) => props.tailOpacity}; /* 랜덤 꼬리 투명도 */
  }
`;

const StarrySky = () => {
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const shootingStarCount = 4;
    const newShootingStars = [];
    for (let i = 0; i < shootingStarCount; i++) {
      newShootingStars.push({
        // top: -10% ~ 40% (화면 위쪽에서 시작해야 길게 떨어짐)
        top: Math.random() * 50 - 10,
        left: 100,
        // 딜레이
        delay: i === 0 ? 3 : Math.random() * 20 + 0.5,

        // 랜덤 속도
        duration: Math.random() * 2 + 2,

        // 랜덤 꼬리 투명도: 0.3 ~ 0.8
        tailOpacity: Math.random() * 0.2 + 0.5,

        // 꼬리 길이 랜덤
        tailWidth: Math.random() * 200 + 100,

        // 랜덤 각도
        angle: Math.random() * 10 + 315,
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <Container>
      {shootingStars.map((sStar, index) => (
        <ShootingStar
          key={`shooting-${index}`}
          top={sStar.top}
          left={sStar.left}
          delay={sStar.delay}
          duration={sStar.duration}
          tailOpacity={sStar.tailOpacity}
          tailWidth={sStar.tailWidth}
          angle={sStar.angle}
        />
      ))}
    </Container>
  );
};

export default StarrySky;
