import Image from "next/image";
import styled from "styled-components";
import { Heading01Style, ParagraphBigStyle } from "../primitives/typography";
import ScrollDown from "../scrollDown/ScrollDown";
import { gridColSizes, GridWrapper } from "../layout/Grid";
import media from "../layout/Mediaqueries";
import { pxToRem } from "../../lib/functions/pxToRem";
import Features from "./Features";
import { AvatarContext } from "../../context/avatar-context";
import { useContext } from "react";

export default function Dashboard(props) {
  const mainTitle = props.mainTitle;
  const mainDescription = props.mainDescription;

  const { avatar, setAvatar } = useContext(AvatarContext);

  return (
    <>
      <DashboardContainer>
        <GridWrapperExtended>
          <MainWrapper>
            <MainContent>
              <AvatarWrapper>
                <Avatar>
                  <Image src={avatar} />
                </Avatar>
              </AvatarWrapper>
              <MainTitle dangerouslySetInnerHTML={{ __html: mainTitle }} />
              <MainDescription
                dangerouslySetInnerHTML={{ __html: mainDescription }}
              />
            </MainContent>

            <Features
              fact={props.fact}
              Socials={props.Socials}
              ref={props.Features}
              socialsState={props.socialsState}
              datetimestate={props.datetimestate}
              apiState={props.apiState}
              mapState={props.mapState}
            />
          </MainWrapper>

          <ScrollDown />
        </GridWrapperExtended>
      </DashboardContainer>
    </>
  );
}

const DashboardContainer = styled.div`
  position: relative;
  width: 100vw;
  background: ${({ theme }) => theme.background};
  padding-top: ${pxToRem(88)};

  ${media.tablet} {
    padding-top: ${pxToRem(120)};
  }

  ${media.laptop} {
    padding-top: ${pxToRem(88)};
    height: 100vh;
    width: auto;
  }
`;

const GridWrapperExtended = styled(GridWrapper)`
  height: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${media.tablet} {
    padding: 0 0 0 calc(1 * ${gridColSizes.tablet});
    flex-direction: row;
    justify-content: space-between;
  }
  ${media.laptop} {
    padding: 0 0 0 calc(1 * ${gridColSizes.laptop});
  }
  ${media.desktop} {
    padding: 0 calc(1 * ${gridColSizes.desktop}) 0
      calc(2 * ${gridColSizes.desktop});
  }
  ${media.max} {
    padding: 0 calc(1 * ${gridColSizes.max}) 0 calc(2 * ${gridColSizes.max});
  }
`;

const MainContent = styled.div`
  width: calc(10 * ${gridColSizes.mobile});
  ${media.tablet} {
    width: calc(7 * ${gridColSizes.tablet});
  }
  ${media.laptop} {
    width: calc(10 * ${gridColSizes.laptop});
  }
  ${media.desktop} {
    width: calc(8 * ${gridColSizes.desktop});
  }
  ${media.max} {
    width: calc(8 * ${gridColSizes.max});
  }
`;

const MainTitle = styled.h1`
  ${Heading01Style}
  color: ${({ theme }) => theme.Text};
  margin-bottom: ${pxToRem(32)};

  strong {
    ${Heading01Style}
    color: ${({ theme }) => theme.TextStrong};
  }

  ${media.tablet} {
    margin-bottom: ${pxToRem(40)};
  }
  ${media.desktop} {
    margin-bottom: ${pxToRem(48)};
  }
`;

const MainDescription = styled.p`
  ${ParagraphBigStyle}
  color: ${({ theme }) => theme.Text};
  margin-bottom: ${pxToRem(80)};
`;

const Avatar = styled.div`
  width: 75%;
  height: 75%;
`;

const AvatarWrapper = styled.div`
  width: calc(3 * ${gridColSizes.mobile});
  background-color: ${({ theme }) => theme.Text};
  border-radius: 50%;
  aspect-ratio: 1/1;
  margin-bottom: ${pxToRem(32)};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${media.tablet} {
    width: calc(3 * ${gridColSizes.tablet});
    margin-bottom: ${pxToRem(40)};
  }
  ${media.laptop} {
    width: calc(3 * ${gridColSizes.laptop});
  }
  ${media.desktop} {
    width: calc(2 * ${gridColSizes.desktop});
    margin-bottom: ${pxToRem(48)};
  }
  ${media.max} {
    width: calc(2 * ${gridColSizes.max});
  }
`;
