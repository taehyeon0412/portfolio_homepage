import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 12%;
  right: 100px;
  padding: 30px;

  display: ${(props) => (props.$showButton ? "block" : "none")};
`;

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const downScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -Math.floor(window.scrollY / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 15);
  };
  /* 
  이전 코드 : 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 스크롤 이벤트중 중간에 계속 멈추는 현상 발생하여 위의 코드로 변경함
  */

  useEffect(() => {
    window.addEventListener("scroll", downScroll);
    return () => {
      window.removeEventListener("scroll", downScroll);
    };
  }, []);
  // 페이지 스크롤 이벤트를 감지하여 버튼을 표시 or 숨김 처리

  return (
    <ScrollTopButton $showButton={showButton} onClick={scrollToTop}>
      업
    </ScrollTopButton>
  );
}

export default TopButton;
