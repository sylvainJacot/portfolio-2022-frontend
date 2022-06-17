import { useRef, useState } from 'react';
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import useSound from 'use-sound';

import styled from 'styled-components';
import { pxToRem } from '../../lib/functions/pxToRem';
import { colors } from '../primitives/colors';
import { useEffect } from 'react';

import { IcSound } from '../primitives/iconsRaw';


gsap.registerPlugin(ScrollTrigger);
const vaderSound = '/sounds/vaderBreath.mp3';
const soundOn = '/sounds/soundOn.mp3';



export default function LoaderIntro(props) {

    const [soundState, setSoundState] = useState(false);

    // on stocke les ref des "words" dans la variable suivante. Et l'attribut .current donne accès à la ref
    const wordsArrayRef = useRef([]);
    wordsArrayRef.current = [];

    const addToArrayWordRefs = (wordRef) => {
        if (wordRef) {
            wordsArrayRef.current.push(wordRef);
        }
    };

    // const [play, { stop }] = useSound(vaderSound);
    const [playSoundOn] = useSound(soundState ? vaderSound : soundOn);


    useEffect(() => {

        // const produceVaderSound = () => {
        //     play()
        // }


        // let timeLineWords = gsap.timeline()
        //     .from(wordsArrayRef.current, {
        //         opacity: 0,
        //         duration: 2,
        //         stagger: 0.5,
        //         ease: Power2.out
        //     })


        // let masterTimeLineWords = gsap.timeline()
        //     .add(timeLineWords)
        //     .call(produceVaderSound)
        // .add(timeLineWordsTest)


        // End useEffect
    });

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
            {/* <LoaderContainer>
                {
                    props.introQuery && props.introQuery.map((word, index) => {
                        return (
                            <Word key={index} ref={addToArrayWordRefs}>{word.wordItem}</Word>
                        )
                    })
                }
            </LoaderContainer> */}
        </>
    )
}



const LoaderContainer = styled.div`
    background-color: ${colors.Primary};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Word = styled.p`
    display: inline-block;  
    color : White;
    font-size: ${pxToRem(40)};
    &:not(:last-child) {
        margin-right: ${pxToRem(8)};
    }
`

const IcSoundWrapper = styled.button`
background-color: transparent;
border: none;
svg {
    #speaker {
        fill : ${props => props.state ? "red" : "blue"}
    }
    #wave-1{
        fill : ${props => props.state ? "red" : "blue"};
        opacity: ${props => props.state ? "0" : "1"};
        transition: ${props => props.state ? "opacity 0.2s ease-out 0.1s" : "opacity 0.1s ease-out"};
    }
    #wave-2{
        fill : ${props => props.state ? "red" : "blue"};
        opacity: ${props => props.state ? "0" : "1"};
        transition: ${props => props.state ? "opacity 0.2s ease-out" : "opacity 0.1s ease-out 0.1s"};
    }
}

`;

