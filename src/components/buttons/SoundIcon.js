import { useState, useContext } from "react";
import styled from "styled-components";

import useSound from "use-sound";
import { IcSound } from "../primitives/iconsRaw";
import { OverallSoundContext } from "../../context/sound-context";

const soundOff = "/sounds/soundOn-test.mp3";
const soundOn = "/sounds/soundOff-tesst.mp3";

export default function SoundIcon() {
  const { overallSound, overallSoundChangeHandler } =
    useContext(OverallSoundContext);
  const [soundState, setSoundState] = useState(false);
  const [playSoundOn] = useSound(soundState ? soundOff : soundOn);

  return (
    <>
      <IcSoundWrapper
        state={soundState}
        type="button"
        aria-label="Disable sounds"
        title="Disable sounds"
        onClick={() => {
          playSoundOn();
          setSoundState(!soundState);
          overallSoundChangeHandler(!overallSound);
        }}
      >
        <IcSound state={soundState} />
      </IcSoundWrapper>
    </>
  );
}

const IcSoundWrapper = styled.button`
  background-color: transparent;
  border: none;
  svg {
    #speaker {
      fill: ${({ theme }) => theme.text};
      transform: ${(props) =>
        props.state ? "translatex(4px)" : "translatex(0)"};
      opacity: ${(props) => (props.state ? "0.5" : "1")};
      transition: ${(props) =>
        props.state ? "all 0.2s ease-out" : "all 0.1s ease-out"};
    }
    #wave-1 {
      fill: ${({ theme }) => theme.text};
      opacity: ${(props) => (props.state ? "0" : "1")};
      transition: ${(props) =>
        props.state ? "opacity 0.2s ease-out 0.1s" : "opacity 0.1s ease-out"};
    }
    #wave-2 {
      fill: ${({ theme }) => theme.text};
      opacity: ${(props) => (props.state ? "0" : "1")};
      transition: ${(props) =>
        props.state ? "opacity 0.2s ease-out" : "opacity 0.1s ease-out 0.1s"};
    }
  }
`;
