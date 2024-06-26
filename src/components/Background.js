import React from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const Base = styled.div`
  width: 65vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  opacity: 0.6;
  & svg {
    position: fixed;
    fill: none;
    transition: all 3s ease-in-out;
  }
`;

const Yellow = styled.svg`
  top: 0;
  right: 0;
  ${(props) =>
    props.location === "/" ||
    props.location === "/home" ||
    props.location.startsWith("/home/")
      ? css`
          width: 455px;
          filter: blur(100px);
          transform: translate(-50vw, 50vh);

          @media (max-width: 500px) {
            width: 255px;
          }
        `
      : css`
          width: 500px;
          filter: blur(150px);
          transform: translate(-40vw, 10vh) rotate(20deg);

          @media (max-width: 500px) {
            width: 355px;
          }
        `}
`;

const Blue = styled.svg`
  top: 0;
  right: 0;
  ${(props) =>
    props.location === "/" ||
    props.location === "/home" ||
    props.location.startsWith("/home/")
      ? css`
          width: 443px;
          filter: blur(80px);
          transform: translate(0vw, 20vh);

          @media (max-width: 500px) {
            width: 245px;
          }
        `
      : css`
          width: 500px;
          transform: translate(5vw, 30vh) rotate(45deg);
          filter: blur(150px);

          @media (max-width: 500px) {
            width: 305px;
          }
        `}
`;

//---------------------------------------- styled

export default function Background() {
  const location = useLocation().pathname;

  return (
    <Base>
      <Yellow
        viewBox="0 0 425 345"
        xmlns="http://www.w3.org/2000/svg"
        location={location}
      >
        <path
          d="M0.760196 83.725C-10.2909 -69.6711 107.732 36.9319 243.144 27.1764C295.644 23.3942 414.832 65.6761 422.144 167.176C433.195 320.572 401.368 334.054 265.955 343.809C130.543 353.565 11.8113 237.121 0.760196 83.725Z"
          fill="#FFC960"
        />
      </Yellow>
      <Blue
        viewBox="0 0 573 581"
        xmlns="http://www.w3.org/2000/svg"
        location={location}
      >
        <path
          d="M572.395 450.755C572.395 699.701 420.627 513.861 233.413 513.861C46.1987 513.861 28 513.861 0 390.225C0 141.28 46.1987 0 233.413 0C420.627 0 572.395 201.81 572.395 450.755Z"
          fill="#63CAF7"
        />
      </Blue>
    </Base>
  );
}
