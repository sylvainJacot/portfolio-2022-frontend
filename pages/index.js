import Head from "next/head";
import { gql } from "@apollo/client";
import GlobalStyle from "../src/components/layout/GlobalStyle";
import GridHelper from "../src/components/layout/gridHelper";
import Projects from "../src/components/projects/Projects";
import client from "./api/apollo-client";
import { useEffect, useState } from "react";
import LoaderIntro from "../src/components/loader/Loader";
import { lightTheme, darkTheme } from "../src/components/layout/Themes";
import { ThemeProvider } from "styled-components";
import ThemeToggler from "../src/components/buttons/ThemeToggler";
import { useDarkMode } from "../src/hooks/useDarkMode";
import Dashboard from "../src/components/dashboard/Dashboard";

export default function Home({ dashboardQuery, projectsQuery, introQuery }) {
  console.log(dashboardQuery);

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <GridHelper />
        <Head>
          <title>Portfolio 2022</title>
          <meta
            name="description"
            content="Portfolio Jacot Sylvain Frontend developer"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeToggler toggleTheme={themeToggler} />
        <LoaderIntro introQuery={introQuery} />
        <Projects projectsQuery={projectsQuery} />
        <Dashboard
          mainTitle={dashboardQuery.MainTitle}
          mainDescription={dashboardQuery.MainDescription}
        />
      </ThemeProvider>
    </>
  );
}

// getStaticProps() ne peut être utilisé QUE sur les pages (index.js, contact.js...)
export async function getStaticProps() {
  const { data: data } = await client.query({
    query: gql`
      query getProjects {
        projects {
          data {
            id
            attributes {
              Title
              Description
              URL
              MainPicture {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              MainColor
            }
          }
        }
      }
    `,
  });

  const { data: dataIntro } = await client.query({
    query: gql`
      query getIntro {
        introduction {
          data {
            id
            attributes {
              WordIntro {
                wordItem
              }
            }
          }
        }
      }
    `,
  });

  const { data: dataDashboard } = await client.query({
    query: gql`
      query getDashboard {
        dashboard {
          data {
            attributes {
              MainTitle
              MainDescription
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      projectsQuery: data.projects.data,
      introQuery: dataIntro.introduction.data.attributes.WordIntro,
      dashboardQuery: dataDashboard.dashboard.data.attributes,
    },
  };
}
