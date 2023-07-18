import { OrbitControls } from "three-stdlib";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 200;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
