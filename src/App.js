import Icon from "awesome-react-icons";
import { useHistory, useLocation } from "react-router-dom";
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
import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
extend({ EffectComposer, RenderPass, UnrealBloomPass });
// import MyNav from "./OtherNav";

export default function App() {
  function Main({ children }) {
    const scene = useRef();
    const { gl, camera } = useThree();
    useFrame(() => {
      gl.autoClear = false;
      gl.clearDepth();
      gl.render(scene.current, camera);
    }, 2);
    return <scene ref={scene}>{children}</scene>;
  }

  return (
    <>
      <Canvas linear camera={{ position: [0, 0, 30] }}>
        {/* <MyNav /> */}
        <CameraController />
        <Main>
          <pointLight />
          <ambientLight />
        </Main>
        <Bloom>
          <ambientLight />
          <RandomSpheres />
          {/* <CenterSphere /> */}
        </Bloom>
      </Canvas>
    </>
  );
}
