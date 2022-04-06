import Head from 'next/head'
import { gql } from "@apollo/client";
import client from './api/apollo-client';
import GlobalStyle from '../src/components/layout/GlobalStyle';
import Image from 'next/image'
import Project from '../src/components/projects/project';
import GridHelper from '../src/components/layout/gridHelper';



export default function Home({projects}) {
  return (
    <>
      <GlobalStyle/>
      <GridHelper/>
      <Head>
      <title>Portfolio 2022</title>
      <meta name="description" content="Portfolio Jacot Sylvain Frontend developer" />
      <link rel="icon" href="/favicon.ico" />
      </Head>

      {projects.map((country) => (
        <Project 
          key={country.id}
          title={country.attributes.Title}
          description={country.attributes.Description}
          src={country.attributes.MainPicture.data.attributes.url}
        />
  ))}
  </>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query getProjects {
      projects {
        data{
          id, 
          attributes
          {
            Title,
            Description,
            URL
            MainPicture {data{attributes{url,alternativeText}}}
          }
        }
      }
    }
    `,
  });

  return {
    props: {
      projects: data.projects.data,
    },
 };
}

