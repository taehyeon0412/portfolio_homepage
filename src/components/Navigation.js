import styled from "styled-components";

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

const ItemUl = styled.ul`
  display: flex;
  gap: 15px;
`;

const ItemLi = styled.li`
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;

function Navigation() {
  return (
    <Wrapper>
      <ItemUl>
        <ItemLi>Projects</ItemLi>
        <ItemLi>Contact</ItemLi>
        <ItemLi>Resume</ItemLi>
      </ItemUl>
    </Wrapper>
  );
}

export default Navigation;
