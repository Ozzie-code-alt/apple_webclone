import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Model = () => {

    useGSAP(() => {
        gsap.to("#heading",{
           y:0, opacity:1, duration:1, ease:"power2.inOut"
        })
    },[])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
            Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">

                </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
