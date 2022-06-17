import Project from './Project';
import { gsap } from "gsap";
import { useEffect, useRef, React, useMemo, createRef } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function Projects(props) {

  // const itemsRef = useMemo(() => Array(props.projectsQuery.length).fill().map(() => createRef()), [props.projectsQuery]);
  // const picRef = useRef();

  // const itemsImgRef = useMemo(() => Array(props.projectsQuery.length).fill().map(() => createRef()), [props.projectsQuery]);
  
    return (

      
    
       <>
       {props.projectsQuery && props.projectsQuery.map((project, index) => 
       { 

         const bgColor = project.attributes.MainColor
         
        
        {/* useEffect(() => {

        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            gsap.core.globals(" ScrollTrigger", ScrollTrigger);
          }

          const projectItem = itemsRef[index].current
          const projectItemPic = itemsRef[index].current

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: projectItem,
              scrub: true,
              pin: projectItem,
              markers: true,
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "+=500", // end after scrolling 500px beyond the start
            },
          });

          tl.to(
            projectItemPic,
            {
              opacity: 0.3,
            }
          )

        }) */}

         return (
        <Project 
          // ref={(itemsRef[index])}
          // picRef={picRef}
          key={index}
          title={project.attributes.Title}
          description={project.attributes.Description}
          src={project.attributes.MainPicture.data.attributes.url}
          mainColor={project.attributes.MainColor}
        />
         )
         })}
       </>
    )
}



