import styled from "styled-components"
import { gridColSizes, GridWrapper } from "../layout/Grid";
import React, { forwardRef, useEffect, useRef } from 'react';
import { ProjectTitle } from "../primitives/typography";
import { imgCover } from "../../lib/functions/imgCover";
import media from '../layout/Mediaqueries';
import { pxToRem } from '../../lib/functions/pxToRem';
import { colors } from '../primitives/colors';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Project = ((props) => {

    const { title, description, src, mainColor} = props;

    const itemMainRef = useRef([]);
    itemMainRef.current = [];


    const itemPicRef = useRef([]);
    itemPicRef.current = [];

    const itemTitleRef = useRef([]);
    itemTitleRef.current = [];


    const addToMainItemRef = (mainRef) => {
        if (mainRef) {
            itemMainRef.current.push(mainRef);
        }
      };
    
      const addToPicRef = (picRef) => {
        if (picRef) {
            itemPicRef.current.push(picRef);
        }
      };
    
      const addToTitleRef = (titleRef) => {
        if (titleRef) {
            itemTitleRef.current.push(titleRef);
        }
      };


useEffect(() => {
        if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        gsap.core.globals(" ScrollTrigger", ScrollTrigger);
      }


      itemMainRef.current.map((item, index) => {

        let timeLineProject = gsap.timeline({

            scrollTrigger: {
              trigger: item,
              start: "top center+=100",
              toggleActions: "play none none reverse",
              markers: true
            },

          });

          timeLineProject.from(item, {
            opacity: 0,
            duration: 2,
          });
          timeLineProject.fromTo(itemPicRef.current, 
            
            {
                autoAlpha: 0,
                // y: 20,
                scale: 1.5,
                ease: Power2,
                clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
              },
              {
                // y: 0,
                duration: 0.5,
                autoAlpha: 1,
                scale: 1,
                ease: Power2,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }

        , "-=1.6")

      });
    }

  , [itemMainRef, itemPicRef,itemTitleRef]);



    return (

        <>
            <ProjectWrapper mainColor={mainColor} className="project-wrapper" ref={addToMainItemRef}>
                <ProjectContent>
                        <TitlePicture>
                            <TextHeader>
                                <Title ref={addToTitleRef}>{title}</Title>
                                <SubTitle>Test - test -test</SubTitle>
                            </TextHeader>
                            <PictureWrapper  ref={addToPicRef}>
                                <img src={process.env.NEXT_PUBLIC_STRAPI_URL + src} alt="me" />
                            </PictureWrapper>
                        </TitlePicture>
                        <DescriptionWrapper>
                        <p>{description}</p>
                        </DescriptionWrapper>
                </ProjectContent>
            </ProjectWrapper>
        </>
    )
})
export default Project

const TextHeader = styled.div`
margin-bottom: ${pxToRem(24)};
margin-left: ${gridColSizes.mobile};
`;

const Title = styled(ProjectTitle)`
color: red;
margin-bottom: ${pxToRem(16)};
`

const SubTitle = styled.p`

`

const PictureWrapper = styled.div`
    width: calc(${gridColSizes.mobile} * 9);
    aspect-ratio: 1/1;
    margin-left: calc(${gridColSizes.mobile} * 2);
    ${imgCover}

    ${media.tablet} {
        width: calc(${gridColSizes.tablet} * 10);
    }
    ${media.laptop} {
        width: calc(${gridColSizes.laptop} * 12);
    }
    ${media.desktop} {
        width: calc(${gridColSizes.desktop} * 12); 
    }
    ${media.max} {
        width: calc(${gridColSizes.max} * 12); 
    }
`

const ProjectContent = styled.div`

`

const TitlePicture = styled.div`
display: flex;
flex-direction: column;
`

const DescriptionWrapper = styled.div`
background-color: white;
    width: calc(${gridColSizes.mobile} * 8);
    padding: ${gridColSizes.mobile};
    transform: translateY(${pxToRem(-80)});

    ${media.tablet} {
        width: calc(${gridColSizes.tablet} * 9);
        padding: ${gridColSizes.tablet};
    }
    ${media.laptop} {
        width: calc(${gridColSizes.laptop} * 12);
        padding: ${gridColSizes.laptop};
    }
    ${media.desktop} {
        width: calc(${gridColSizes.desktop} * 12);
        padding: ${gridColSizes.desktop};
    }
    ${media.max} {
        width: calc(${gridColSizes.max} * 12);
        padding: ${gridColSizes.max};
    }

    p{ 
        font-size: ${pxToRem(16)};
        color: ${colors.Primary}
    }
`

const ProjectWrapper = styled(GridWrapper)`
display: flex;
        align-items: center;
    border: 1px solid purple;
    min-height:100vh;
    height: 120vh;
    padding: 6vw 0;
    /* background-color: ${props => props.mainColor ? "#"+props.mainColor : "purple"}; */
    opacity: 1;
`