import styled from "styled-components"
import { Children } from 'react';
import media from './Mediaqueries';

export const gridColCount = {
    mobile : 11,
    tablet : 17, 
    laptop : 23, 
    desktop : 23 
}

export const gridColSizes = {
    mobile : 90 / gridColCount.mobile + 'vw',
    tablet : 90 / gridColCount.tablet + 'vw', 
    laptop : 95 / gridColCount.laptop + 'vw', 
    desktop : 95 / gridColCount.desktop + 'vw' 
}

export const gridSizes = {
    mobile : gridColCount.mobile * gridColSizes.mobile + 'vw',
    tablet : gridColCount.tablet * gridColSizes.tablet + 'vw', 
    laptop : gridColCount.laptop * gridColSizes.laptop + 'vw', 
    desktop : gridColCount.desktop * gridColSizes.desktop + 'vw' 
}

export const GridWrapper = styled.div`
        width: calc(${gridColSizes.mobile} * ${gridColCount.mobile}) ;
        margin: auto;

    ${media.tablet} {
        width: calc(${gridColSizes.tablet} * ${gridColCount.tablet}) ;
    }
    ${media.laptop} {
        width: calc(${gridColSizes.laptop} * ${gridColCount.laptop}) ;
    }
    ${media.desktop} {
        width: calc(${gridColSizes.desktop} * ${gridColCount.desktop}) ;
    }
`

export default function Grid(props) {

    return (
    
       <>
            <GridWrapper>{props.Children}</GridWrapper>
       </>
    )
}
