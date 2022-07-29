import styled from "styled-components";
import useMousePosition from "../../hooks/useMousePosition";
import { colors } from "../primitives/colors";
import { pxToRem } from "../../lib/functions/pxToRem";
import { useContext } from "react";
import { MouseContext } from "../../context/mouse-context";
import { transitionDefault } from "../animations/transitions";
import { InterTitleStyle } from "../primitives/typography";

export default function Cursor() {
  const { x, y } = useMousePosition();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <CursorMain
        hover={cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></CursorMain>
      <CursorTrail
        hover={cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></CursorTrail>
      <CursorProject
        hover={cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        View Website
      </CursorProject>
    </>
  );
}

const handleCursorHover = (hover) => {
  switch (hover) {
    case "hoverProject":
      return `
        background-color: green;
        transform: translate(-50%, -50%) scale(0);
      `;
    case "hoverLink":
      return `
      background-color: white;
      transform: translate(-50%, -50%) scale(1.3);
        `;

    default:
      return `
        background-color: white;
      `;
  }
};

const handleCursorTrailHover = (hover) => {
  switch (hover) {
    case "hoverProject":
      return `
        background-color: green;
      `;
    case "hoverLink":
      return `
      animation: pulse 1.5s ease-out infinite;
        `;

    default:
      return `
        background-color: white;
      `;
  }
};

const handleCursorProjectHover = (hover) => {
  switch (hover) {
    case "hoverProject":
      return `
      transform: translate(-50%, -50%) scale(1);
      animation: grow ${transitionDefault} ease-out forwards;
      `;
    case "hoverLink":
      return `
      transform: translate(-50%, -50%) scale(0);
        `;

    default:
      return `
      transform: translate(-50%, -50%) scale(0);
      `;
  }
};

const CursorMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  border-radius: 100%;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%) scale(1);
  ${({ hover }) => handleCursorHover(hover)};
`;

const CursorProject = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(120)};
  height: ${pxToRem(120)};
  background-color: white;
  mix-blend-mode: difference;
  border-radius: 100%;
  z-index: 999;
  transform: translate(-50%, -50%) scale(0);
  will-change: width, height, transform, border;
  pointer-events: none;
  ${InterTitleStyle};
  ${({ hover }) => handleCursorProjectHover(hover)};

  @keyframes grow {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const CursorTrail = styled.div`
  position: fixed;
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%) scale(0);
  background-color: ${colors.White};
  /* transition: all 0.25s linear; */
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0.3;
    }
    70% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.4);
      opacity: 0;
    }
  }
  ${({ hover }) => handleCursorTrailHover(hover)};
`;
