"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import '../style.css';


gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const main = useRef();
  const tl = gsap.timeline();

  useGSAP(
    () => {
      gsap.to('.chars', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
      });

      const st = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top 80%",
          anticipatePin: 0,
          scrub: 2,
          pin: false,
          end: "+=500",
          markers: true,
          pinnedContainer: ".canvas",
        },
      });

      tl.fromTo(".line", { width: 0 }, { width: "50%", duration: 2 })
        .fromTo(
          ".hello",
          { y: 20, opacity: 0 },
          { y: -5, opacity: 1, duration: 1 }
        )

        .fromTo(".box-2", { opacity: 0 }, { opacity: 1, duration: 2 });

      st.to(".top-line", { width: "100%", duration: 5 })
        .to(".right-line", { height: "100%", duration: 5 })
        .to(".bottom-line", { width: "100%", duration: 5 })
        .to(".left-line", { height: "100%", duration: 5 })
        .fromTo(
          ".study",
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 8 }
        );
    },


    {
      scope: main,
    }
  );

  return (
    <>
      <div ref={main} className="" id="smooth-wrapper">
        <div id="smooth-content">
          <div className="w-11/12 mx-auto h-[90vh] bg-black relative flex flex-col justify-center">
            <div className="box-1 w-full min-h-screen bg-black text-center flex flex-col justify-center">
              <h1 className="hello uppercase text-white text-4xl md:text-8xl" id="welcome">Welcome</h1>
              <div className="line w-6/12 h-2 md:h-4 bg-white mx-auto"></div>
              <h2 className="text-lg mt-10">Hello my name is Siraphop Tinthuwanon</h2>
            </div>
            <div className="box-2 w-full opacity-0 mx-auto px-10 absolute top-[70%] md:right-[0]">
              <p className="text-white text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div
            className="canvas flex flex-col justify-start w-11/12 h-[100vh] mx-auto"
            id="container"
          >
            <div className="w-6/12 h-[400px] relative mx-auto flex flex-col justify-center">
              <h2 className="study uppercase text-center text-5xl">
                chiang mai university
              </h2>
              <div className="absolute bg-white h-[2px] w-0 top-line top-0 left-0"></div>
              <div className="absolute bg-white w-[2px] h-0 top-0 right-0 right-line "></div>
              <div className="absolute bg-white h-[2px] w-0 bottom-line bottom-0 right-0"></div>
              <div className="absolute bg-white h-0 w-[2px] left-line bottom-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
