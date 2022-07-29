import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Dashboard from "../dashboard/Dashboard";

export default function LoaderDashboard(props) {
  const LoaderContainer = useRef();
  const Features = useRef();

  const [socialsState, setSocialsState] = useState(false);
  const [datetimestate, setdatetimestate] = useState(false);
  const [apiState, setApiState] = useState(false);
  const [mapState, setMapState] = useState(false);

  const wordsArrayRef = useRef([]);
  wordsArrayRef.current = [];

  const addToArrayWordRefs = (wordRef) => {
    if (wordRef) {
      wordsArrayRef.current.push(wordRef);
    }
  };

  useEffect(() => {
    // const produceVaderSound = () => {
    //   play();
    // };

    // let timeLineWords = gsap.timeline().to(wordsArrayRef.current, {
    //   opacity: 1,
    //   duration: 1.3,
    //   stagger: 0.5,
    //   ease: Power2.out,
    // });
    // let loaderFadeOut = gsap.timeline().to(LoaderContainer.current, {
    //   opacity: 0,
    //   duration: 0.3,
    //   ease: Power2.out,
    // });
    let dasboardIntro = gsap
      .timeline()
      .to(Features.current, {
        onEnter: () => setSocialsState(true),
      })
      .to(
        Features.current,
        {
          onEnter: () => setdatetimestate(true),
        },
        "-=0.2"
      )
      .to(
        Features.current,
        {
          onEnter: () => setApiState(true),
        },
        "-=0.2"
      )
      .to(
        Features.current,
        {
          onEnter: () => setMapState(true),
        },
        "-=0.2"
      );

    let masterTimeLineWords = gsap
      .timeline()
      // .add(timeLineWords)
      // .add(loaderFadeOut)
      .add(dasboardIntro);
    // .call(produceVaderSound);
    // .add(timeLineWordsTest);
    // End useEffect
  });

  return (
    <>
      {/* <LoaderIntro
        loaderQuery={props.loaderQuery}
        LoaderContainer={LoaderContainer}
        addToArrayWordRefs={addToArrayWordRefs}
      /> */}
      <Dashboard
        mainTitle={props.mainTitle}
        mainDescription={props.mainDescription}
        fact={props.fact}
        Skills={props.Skills}
        Socials={props.Socials}
        Features={Features}
        socialsState={socialsState}
        datetimestate={datetimestate}
        apiState={apiState}
        mapState={mapState}
      />
    </>
  );
}
