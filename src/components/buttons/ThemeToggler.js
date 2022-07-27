// TUTO FOUND ON : https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
import styled, { css, keyframes } from "styled-components";
import { useSpring, animated, interpolate } from "react-spring";
import { useState, useEffect } from "react";
import { pxToRem } from "../../lib/functions/pxToRem";

export default function ThemeToggler(props) {
  const active = props.active;

  const { x } = useSpring({
    config: { duration: 100 },
    x: active ? 1 : 0,
  });

  return (
    <>
      <Button onClick={props.toggleTheme} active={props.active}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.path
            d={x.to({
              range: [0, 1],
              output: [
                "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7 32 16Z",
                "M14.3942 15.7611C14.5931 25.591 24.9983 29.9793 24.9983 29.9793C12 36.5725 0.999984 26.0725 1.00002 16.5725C0.5 7.07248 10.5 -3.92752 23.1547 1.38879C23.1547 1.38879 14.1905 5.69712 14.3942 15.7611Z",
              ],
            })}
          />
        </svg>

        <SunBeam active={props.active} />
        <SunBeam active={props.active} />
        <SunBeam active={props.active} />
        <SunBeam active={props.active} />
        <SunBeam active={props.active} />
        <SunBeam active={props.active} />
        <SunBeam active={props.active} />
        <SunBeam active={props.active} />
      </Button>
    </>
  );
}

const SunBeamActive = keyframes`
  0%{
    width: ${pxToRem(24)};
    opacity: 1;
  }
  20% {
    width: ${pxToRem(26)};
    opacity: 1;
  }

  100% {
    width: ${pxToRem(0)};
    opacity: 0;
  }
`;

const SunBeamInactive = keyframes`
  0% {
    width: ${pxToRem(0)};
    opacity: 0;
  }
  70% {
    width: ${pxToRem(28)};
    opacity: 1;
  }

  100% {
    width: ${pxToRem(24)};
    opacity: 1;
  }
`;

const SunBeam = styled.span`
  position: absolute;
  display: block;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  transform-origin: center center;
  /* transition: all 0.2s linear; */
  animation: ${(props) =>
    props.active
      ? css`
          ${SunBeamActive} 0.1s cubic-bezier(0.65,0.05,0.36,1) forwards
        `
      : css`
          ${SunBeamInactive} 0.5s cubic-bezier(0.65,0.05,0.36,1) forwards
        `};
  &:after {
    display: block;
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    width: ${pxToRem(4)};
    height: ${pxToRem(2)};
    border-radius: ${pxToRem(90)};
    background-color: ${({ theme }) => theme.text};
  }
  &:nth-of-type(1) {
    transform: rotate(0deg);
  }
  &:nth-of-type(2) {
    transform: rotate(45deg);
  }
  &:nth-of-type(3) {
    transform: rotate(90deg);
  }
  &:nth-of-type(4) {
    transform: rotate(135deg);
  }
  &:nth-of-type(5) {
    transform: rotate(180deg);
  }
  &:nth-of-type(6) {
    transform: rotate(225deg);
  }
  &:nth-of-type(7) {
    transform: rotate(270deg);
  }
  &:nth-of-type(8) {
    transform: rotate(315deg);
  }
`;

const Button = styled.button`
  position: relative;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  padding: 0.6rem;
  transform: ${(props) =>
    props.active ? "rotate(-45deg) " : "rotate(45deg) "};
  transition: all 0.2s linear;

  svg {
    transform: ${(props) => (props.active ? "scale(1)" : "scale(0.6)")};
    transition: all 0.2s linear;
    fill: ${({ theme }) => theme.text};
  }
`;
