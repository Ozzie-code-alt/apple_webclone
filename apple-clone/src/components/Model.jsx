import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models } from "../contants";
import { sizes } from "../contants";
const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iphone 15 Pro in Natutal Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  //camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRed={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRed={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5 ">
              {model.title}
            </p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className="w-6 rounded-full mx-2 cursor-pointer h-6"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => {
                      setModel(item);
                    }}
                  ></li>
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    className="size-btn"
                    key={label}
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
