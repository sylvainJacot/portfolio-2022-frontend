import Head from "next/head";
import { gql } from "@apollo/client";
import GlobalStyle from "../src/components/layout/GlobalStyle";
import GridHelper from "../src/components/layout/gridHelper";
import Projects from "../src/components/projects/Projects";
import client from "./api/apollo-client";
import { useEffect } from "react";
import LoaderIntro from "../src/components/loader/Loader";

export default function Home({ projectsQuery, introQuery }) {
  return (
    <>
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
      <LoaderIntro introQuery={introQuery}/>
      {/* <Projects projectsQuery={projectsQuery}/> */}
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

  return {
    props: {
      projectsQuery: data.projects.data,
      introQuery: dataIntro.introduction.data.attributes.WordIntro,
    },
  };
}
