// import ogongoThumb from "../../public/img/Project-ogongo.png";
const OgongoThumb = "/img/projectOgongo.png";
const NCThumb = "/img/projectNC.png";
const PoolfinoThumb = "/img/projectPoolfino.png";
const FebecoopThumb = "/img/projectFebeccop.png";

export const projectsData = {
  data: [
    {
      id: 1,
      attributes: {
        Title: "Bluefino",
        Description:
          "At Bluefino, they are changing the way they are thinking about pool design by making it easier for people to realize their dreams. Their pools are solid, quick to install, modular and ready to use",
        MainColor: "#FFF7F2",
        Baseline:
          "Swimming pool providers, creator of well-being for more than 50 years",
        URL: "https://www.bluefino.be/",
        TextColor: "#235897",
        TextColorNeg: "#235897",
        MainPicture: {
          data: {
            id: 3,
            attributes: {
              name: "Bluefino website thumbnail",
              alternativeText: "Bluefino website thumbnail",
              url: PoolfinoThumb,
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        Title: "Ogongo",
        Description:
          "Ogongo sell a bike to conquer the urban jungle with style and forget the traffic jam. Speed and lightness, everything becomes possible.",
        MainColor: "#161617",
        Baseline:
          "Electric bikes to create your own fun and comfortable riding",
        URL: "https://www.ogongo.com/",
        TextColor: "white",
        TextColorNeg: "#161617",
        MainPicture: {
          data: {
            id: 3,
            attributes: {
              name: "Ogongo website thumbnail",
              alternativeText: "Ogongo website thumbnail",
              url: OgongoThumb,
            },
          },
        },
      },
    },
    {
      id: 4,
      attributes: {
        Title: "Febecoop",
        Description:
          "Febecoop is an intersectoral platform of companies and associations which shares the will to develop an economy respectful of man and his environment, activated on utility and social equity, by means of companies organized on the basis of values, ethics and cooperative principles.",
        MainColor: "#efedf3",
        Baseline: "Febecoop defends, promotes and supports cooperatives",
        URL: "https://febecoop.be/",
        TextColor: "#19005a",
        TextColorNeg: "#19005a",
        MainPicture: {
          data: {
            id: 3,
            attributes: {
              name: "Febecoop website thumbnail",
              alternativeText: "Febecoop website thumbnail",
              url: FebecoopThumb,
            },
          },
        },
      },
    },
    {
      id: 6,
      attributes: {
        Title: "Nemec+Chvatal",
        Description:
          "Nemec+Chvatal is an independent public affairs consultancy situated in the heart of the Brussels EU district.",
        MainColor: "#0e1c34",
        Baseline: "Steering your business through a changing world",
        URL: "https://www.nemecchvatal.com/",
        TextColor: "white",
        TextColorNeg: "#0e1c34",
        MainPicture: {
          data: {
            id: 3,
            attributes: {
              name: "Nemec+Chvatal website thumbnail",
              alternativeText: "Nemec+Chvatal website thumbnail",
              url: NCThumb,
            },
          },
        },
      },
    },
  ],
};
