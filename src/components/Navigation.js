import { AnimatePresence, motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

//Components
import ContactModal from "./ContactModal";

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  font-size: 23px;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 510px) {
    justify-content: center;
  }
`;

const ContactDiv = styled(motion.div)`
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;

function Navigation({ menuName }) {
  const navigate = useNavigate();

  const navigateToModal = () => {
    navigate(`/${menuName}/contact-me`, { replace: true });

    if (modalMatch) {
      console.log(`모달매치됨 +${menuName}`);
    }
  };

  const modalMatch = useMatch(`/${menuName}/contact-me`);

  return (
    <Wrapper>
      <AnimatePresence>
        <ContactDiv onClick={navigateToModal} layoutId="contact" key="contact">
          Contact
        </ContactDiv>

        {modalMatch ? <ContactModal menuName={menuName} /> : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Navigation;
