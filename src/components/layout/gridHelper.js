import styled  from 'styled-components';
import { gridColCount, gridColSizes } from './Grid';
import media from './Mediaqueries';

const GridHelperWrapper = styled.div`
    position: fixed;
    z-index: -9999;
    pointer-events: none;
    inset: 0;
    display: grid;
    margin: auto;
    grid-template-rows: auto;
    width: calc(${gridColSizes.mobile} * ${gridColCount.mobile}) ;
    grid-template-columns: repeat(${gridColCount.mobile}, ${gridColSizes.mobile});

    ${media.tablet} {
        width: calc(${gridColSizes.tablet} * ${gridColCount.tablet}) ;
        grid-template-columns: repeat(${gridColCount.tablet}, ${gridColSizes.tablet});
    }
    ${media.laptop} {
        width: calc(${gridColSizes.laptop} * ${gridColCount.laptop}) ;
        grid-template-columns: repeat(${gridColCount.laptop}, ${gridColSizes.laptop});
    }
    ${media.desktop} {
        width: calc(${gridColSizes.desktop} * ${gridColCount.desktop}) ;
        grid-template-columns: repeat(${gridColCount.desktop}, ${gridColSizes.desktop});
    }

`
export default function GridHelper() {

    return (
    
       <>
            <GridHelperWrapper></GridHelperWrapper>
       </>
    )
}
