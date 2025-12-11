import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useModalScrollbarPadding() {
  const { pathname } = useLocation();

  useEffect(() => {
    let timeoutId = null;

    // 1287px 이하에서만 동작
    if (window.innerWidth > 1287) {
      // 데스크톱 사이즈에서는 항상 원복 상태 유지
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
      return;
    }

    //테블릿,모바일에서는 작동x
    if (window.innerWidth < 851) {
      return;
    }

    const isContact =
      pathname === "/project/contact-me" || pathname === "/about/contact-me";

    if (isContact) {
      // 모달 열릴 때: 바로 패딩/스크롤 설정
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.paddingRight = "15px";
    } else {
      // contact-me에서 빠져나갈 때: 0.5초 뒤에 원복
      timeoutId = window.setTimeout(() => {
        document.documentElement.style.overflow = "";
        document.documentElement.style.paddingRight = "";
      }, 500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname]);
}
