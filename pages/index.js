import Head from "next/head";
import GlobalStyle from "../src/components/layout/GlobalStyle";
import GridHelper from "../src/components/layout/gridHelper";
import Projects from "../src/components/sections/Projects";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../src/components/layout/Themes";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../src/hooks/useDarkMode";
import IconsBoard from "../src/components/dashboard/IconsBoard";
import LoaderDashboard from "../src/components/sections/LoaderDashboard";
import SkillsSection from "../src/components/sections/Skills";
import ScrollDownTarget from "../src/components/scrollDown/ScrollDownTarget";
import Cursor from "../src/components/cursor/Cursor";
import BackgroundOverlay from "../src/components/layout/BackgroundOverlay";
import useSound from "use-sound";
import { OverallContext } from "../src/context/overallContext";
import Footer from "../src/components/sections/Footer";
import ScrollUpTarget from "../src/components/scrollUp/ScrollUpTarget";
import { dashboardData } from "../src/data/dashboard-data";
import { projectsData } from "../src/data/data-projects";
const switchOn = "./sounds/switch-on.mp3";
const switchOff = "./sounds/switch-off.mp3";

export default function Home({ loaderQuery, factQuery }) {
  const dashboardQuery = dashboardData.data.attributes;
  const projectsQuery = projectsData.data;

  const [theme, themeToggler] = useDarkMode();
  const [active, setActive] = useState(true);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [soundSwitchState, setSoundSwitchState] = useState(false);
  const [playSoundSwitch] = useSound(soundSwitchState ? switchOn : switchOff);

  const toggleTheme = () => {
    themeToggler();
    setActive(!active);
    setSoundSwitchState(!soundSwitchState);
    playSoundSwitch();
  };

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <>
      <OverallContext>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <GridHelper />
          <Head>
            <title>Portfolio 2022</title>
            <meta
              name="description"
              content="Portfolio Jacot Sylvain Frontend developer"
            />
            <meta name="theme-color" content="#4285f4"></meta>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap"
              rel="stylesheet"
            />
          </Head>
          <ScrollUpTarget />
          <LoaderDashboard
            mainTitle={dashboardQuery.MainTitle}
            mainDescription={dashboardQuery.MainDescription}
            fact={factQuery}
            Socials={dashboardQuery.Social}
          />
          <ScrollDownTarget />
          <SkillsSection Skills={dashboardQuery.Skills} />
          <Projects projectsQuery={projectsQuery} />
          <Footer />
          <Cursor />
          <IconsBoard toggleTheme={toggleTheme} active={active} />
          <BackgroundOverlay />
        </ThemeProvider>
      </OverallContext>
    </>
  );
}

// getStaticProps() ne peut être utilisé QUE sur les pages (index.js, contact.js...)
export async function getStaticProps() {
  const resFact = await fetch("https://catfact.ninja/fact");
  const dataFact = await resFact.json();

  return {
    props: {
      factQuery: dataFact.fact,
    },
  };
}
