import { render } from "react-dom";
import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import "./styles.css";
import { Bloom } from "./Effects";
import { RandomSpheres } from "./Generator";
import { CenterSphere } from "./Spheres";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { CameraController } from "./Controller";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
extend({ EffectComposer, RenderPass, UnrealBloomPass });

render(
  // <BrowserRouter>
    <App />,
  // </BrowserRouter>,
  document.querySelector("#root")
);
