import styled from "styled-components"
import { gridColSizes, gridColCount, GridWrapper } from "../layout/Grid";

const ProjectWrapper = styled(GridWrapper)`
height: 100vh;

img {
    width: calc(${gridColSizes.desktop} * 4) ;
}

`

export default function Project(props) {

    const { key, title, description, src} = props;

    return (

        <>
            <ProjectWrapper key={key}>
                <h3>{title}</h3>
                <p>
                {description}
                </p>
                <img src={process.env.NEXT_PUBLIC_STRAPI_URL + src} alt="me" />
            </ProjectWrapper>
        </>
    )
}

