export const commonStyle = `
  margin-top: 30px;
  width: 65vw;

  display: grid;

  @media (max-width: 1400px) {
    width: 80vw;
  }

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 800px) {
    width: 95vw;
  }

  @media (max-width: 700px) {
    grid-template-rows: 70px 450px auto;
  }

  @media (max-width: 550px) {
    grid-template-rows: 70px 400px auto;
  }

  @media (max-width: 430px) {
    grid-template-rows: 70px 370px auto;
  }
`;
