import { useRef, useState } from 'react';
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


import styled from 'styled-components';
import { pxToRem } from '../../lib/functions/pxToRem';
import { colors } from '../primitives/colors';
import { useEffect } from 'react';
import SoundIcon from '../buttons/SoundIcon';
import { useDarkMode } from '../../hooks/useDarkMode';

import { useSpring, animated } from 'react-spring';




gsap.registerPlugin(ScrollTrigger);


export default function LoaderIntro(props) {



    // on stocke les ref des "words" dans la variable suivante. Et l'attribut .current donne accès à la ref
    const wordsArrayRef = useRef([]);
    wordsArrayRef.current = [];

    const addToArrayWordRefs = (wordRef) => {
        if (wordRef) {
            wordsArrayRef.current.push(wordRef);
        }
    };


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
            {/* <LoaderContainer>
                {
                    props.introQuery && props.introQuery.map((word, index) => {
                        return (
                            <Word key={index} ref={addToArrayWordRefs}>{word.wordItem}</Word>
                        )
                    })
                }
            </LoaderContainer> */}

            <SoundIcon />
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



