import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SVGContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ShootingStarSVG = styled.div`
  width: 300px;
  height: 300px;

  @media (min-width: 1550px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

const AnimatedPath = styled.path`
  &.star {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    animation-delay: 1.5s;
  }
  &.star-2 {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    animation-delay: 1.3s;
  }
  &.star-3 {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    animation-delay: 0.5s;
  }
  &.star-4 {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    animation-delay: 0.7s;
  }
  &.star-5 {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    animation-delay: 1s;
  }
`;

//----------------------------------------------styled

function Loading() {
  return (
    <SVGContainer>
      <ShootingStarSVG>
        <svg
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AnimatedPath
            className="star"
            d="M54.47214,78.28676a1.49621,1.49621,0,0,1-.876-.28271L43.4028,70.6686a1.54443,1.54443,0,0,1-.2207-.18555v-.00049h0c-.02344-.02344-.0459-.04785-.06641-.07275a1.49353,1.49353,0,0,1-.3623-.98828c0-.04444.00293-.08936.00684-.1333v-.00147a1.49773,1.49773,0,0,1,.47656-.957h0l.002-.00147.002-.00195A95.408,95.408,0,0,1,112.268,43.20473l.02734.00146h.002a1.49277,1.49277,0,0,1,1.01758.4878c.00977.01025.01856.0205.02735.03076l.001.001v.00048a1.48663,1.48663,0,0,1,.36231.97559c0,.02246,0,.04492-.001.06787a1.51192,1.51192,0,0,1-.13672.56152,1.49031,1.49031,0,0,1-.3623.49024l-7.71192,6.89551,7.02832,3.53222a1.50017,1.50017,0,0,1,.12793,2.60791l-7.124,4.50879,7.71,7.89893a1.50015,1.50015,0,0,1-1.53808,2.47412,73.61676,73.61676,0,0,0-56.5459,4.38525A1.5007,1.5007,0,0,1,54.47214,78.28676Z"
            fill="#ffeaa7"
          />
          <AnimatedPath
            className="star-2"
            d="M64.5864,80.99233,50.48288,72.54115,49.44968,56.133a1.49984,1.49984,0,0,0-2.48242-1.03662L34.57273,65.89711,18.64792,61.80922a1.50015,1.50015,0,0,0-1.75293,2.041L23.3364,78.9767,14.5278,92.85854a1.5,1.5,0,0,0,1.39942,2.29785l16.376-1.45215,10.48145,12.667a1.49964,1.49964,0,0,0,2.61719-.6206l3.67871-16.02344,15.28711-6.05371a1.50017,1.50017,0,0,0,.21875-2.68115Z"
            fill="#fad390"
          />
          <AnimatedPath
            className="star-3"
            d="M103.62155,100.92787,96.769,96.82192l-.50195-7.97266a1.49983,1.49983,0,0,0-2.48242-1.03662l-6.02246,5.248-7.73731-1.98633a1.50014,1.50014,0,0,0-1.75293,2.041l3.12891,7.34912-4.2793,6.74512a1.5,1.5,0,0,0,1.39942,2.29785l7.956-.70556,5.09375,6.15429a1.49964,1.49964,0,0,0,2.61719-.6206l1.78711-7.78516,7.42773-2.9414a1.50017,1.50017,0,0,0,.21875-2.68116Z"
            fill="#ffeaa7"
          />
          <AnimatedPath
            className="star-4"
            d="M45.28073,22.38832l-4.8125-2.88379-.35254-5.59863a1.49983,1.49983,0,0,0-2.48242-1.03662l-4.22949,3.68555-5.43359-1.395a1.50014,1.50014,0,0,0-1.75293,2.041L28.41452,22.362l-3.00488,4.73681a1.5,1.5,0,0,0,1.39941,2.29785L32.396,28.901l3.57715,4.32178a1.49964,1.49964,0,0,0,2.61718-.62061l1.25489-5.4668L45.062,25.06948a1.50017,1.50017,0,0,0,.21875-2.68116Z"
            fill="#ffeaa7"
          />
          <AnimatedPath
            className="star-5"
            d="M85.23581,26.26381,79.80026,23.007l-.39843-6.32422a1.49984,1.49984,0,0,0-2.48242-1.03662l-4.77735,4.16308-6.13769-1.57568a1.50014,1.50014,0,0,0-1.75293,2.041l2.48242,5.82959-3.39453,5.3501a1.5,1.5,0,0,0,1.39941,2.29785l6.31152-.55957,4.04,4.88184a1.49974,1.49974,0,0,0,2.61719-.62012l1.418-6.17627,5.8916-2.333a1.50017,1.50017,0,0,0,.21875-2.68115Z"
            fill="#ffeaa7"
          />
        </svg>
      </ShootingStarSVG>
    </SVGContainer>
  );
}

export default Loading;