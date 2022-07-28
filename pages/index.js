import Head from "next/head";
import GlobalStyle from "../src/components/layout/GlobalStyle";
import GridHelper from "../src/components/layout/gridHelper";
import Projects from "../src/components/sections/Projects";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../src/components/layout/Themes";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../src/hooks/useDarkMode";
import Dashboard from "../src/components/dashboard/Dashboard";
import IconsBoard from "../src/components/dashboard/IconsBoard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoaderDashboard from "../src/components/sections/LoaderDashboard";
import SkillsSection from "../src/components/sections/Skills";
import ScrollDownTarget from "../src/components/scrollDown/ScrollDownTarget";
import Cursor from "../src/components/cursor/Cursor";
import BackgroundOverlay from "../src/components/layout/BackgroundOverlay";
import SmoothScroller from "../src/components/smoothScroller/SmoothScroller";
import useSound from "use-sound";
import { OverallContext } from "../src/context/overallContext";
import Footer from "../src/components/sections/Footer";
import ScrollUpTarget from "../src/components/scrollUp/ScrollUpTarget";

const switchOn = "/sounds/switch-on.mp3";
const switchOff = "/sounds/switch-off.mp3";

export default function Home({
  dashboardQuery,
  projectsQuery,
  loaderQuery,
  factQuery,
}) {
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

  // useEffect(() => {
  //   console.clear();
  // }, []);

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
          <SmoothScroller>
            <ScrollUpTarget />
            <LoaderDashboard
              loaderQuery={loaderQuery.Words}
              mainTitle={dashboardQuery.MainTitle}
              mainDescription={dashboardQuery.MainDescription}
              fact={factQuery}
              Socials={dashboardQuery.Social}
            />
            <ScrollDownTarget />
            <SkillsSection Skills={dashboardQuery.Skills} />
            <Projects projectsQuery={projectsQuery} />
            <Footer />
          </SmoothScroller>
          <Cursor />
          <IconsBoard toggleTheme={toggleTheme} active={active} />
          <BackgroundOverlay />
        </ThemeProvider>
      </OverallContext>
    </>
  );
}

// getStaticProps() ne peut être utilisé QUE sur les pages (index.js, contact.js...)
export async function getStaticProps({ locale }) {
  const resFact = await fetch("https://catfact.ninja/fact");
  const dataFact = await resFact.json();

  // DASHBOARD
  const resDashboard = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL_API}/dashboard`
  );
  const dataDashboard = await resDashboard.json();

  // LOADER
  const resLoader = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL_API}/loader`
  );
  const dataLoader = await resLoader.json();

  // PROJECTS

  const resProjects = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL_API}/projects?populate=deep`
  );
  const dataProjects = await resProjects.json();

  return {
    props: {
      projectsQuery: dataProjects.data,
      loaderQuery: dataLoader.data.attributes,
      dashboardQuery: dataDashboard.data.attributes,
      factQuery: dataFact.fact,
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
