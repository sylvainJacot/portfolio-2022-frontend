import styled from "styled-components";
import BackgroundOverlay from "../layout/BackgroundOverlay";
import { colors } from "../primitives/colors";
import { Heading01, ParagraphBig } from "../primitives/typography";
import MiniMap from "./MiniMap";
import ScrollDown from "./ScrollDown";

export default function Dashboard(props) {
  return (
    <>
      <DashboardContainer>
        <BackgroundOverlay />

        <MainTitle>{props.mainTitle}</MainTitle>
        <MainDescription>{props.mainDescription}</MainDescription>
        <ScrollDown />

        <MiniMap />
      </DashboardContainer>
    </>
  );
}

const DashboardContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${colors.Primary};
`;

const MainTitle = styled(Heading01)`
  color: ${colors.White};
`;

const MainDescription = styled(ParagraphBig)`
  color: ${colors.White};
`;
