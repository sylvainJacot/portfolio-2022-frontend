import { useState } from 'react';
import styled from 'styled-components';

import useSound from 'use-sound';
import { IcSound } from '../primitives/iconsRaw';

const vaderSound = '/sounds/vaderBreath.mp3';
const soundOn = '/sounds/soundOn.mp3';


export default function SoundIcon() {

    const [soundState, setSoundState] = useState(false);
    const [playSoundOn] = useSound(soundState ? vaderSound : soundOn);

    return (
    
       <>
                <IcSoundWrapper state={soundState}
                type="button"
                aria-label="Disable sounds"
                title="Disable sounds"
                onClick={() => { playSoundOn(); setSoundState(!soundState); }}
                >
                <IcSound state={soundState} />

                </IcSoundWrapper>
       </>
    )
}

const IcSoundWrapper = styled.button`
background-color: transparent;
border: none;
svg {
    #speaker {
        fill : ${props => props.state ? "green" : "blue"};
    }
    #wave-1{
        fill : ${props => props.state ? "green" : "blue"};
        opacity: ${props => props.state ? "0" : "1"};
        transition: ${props => props.state ? "opacity 0.2s ease-out 0.1s" : "opacity 0.1s ease-out"};
    }
    #wave-2{
        fill : ${props => props.state ? "green" : "blue"};
        opacity: ${props => props.state ? "0" : "1"};
        transition: ${props => props.state ? "opacity 0.2s ease-out" : "opacity 0.1s ease-out 0.1s"};
    }
}

`;