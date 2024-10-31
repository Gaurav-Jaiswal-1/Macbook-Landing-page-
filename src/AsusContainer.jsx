// import React from 'react'
import { useGLTF } from "@react-three/drei"
import * as THREE from 'three';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';


const AsusContainer = () => {
  let model = useGLTF('./mac.glb'); // Load the model
  let tex = useTexture('./red.jpg');
  let mesh = {};
  model.scene.traverse(e => {
   
      mesh[e.name] = e;
    
  });

  console.log(mesh);

  // Check if mesh.screen exists before modifying it
    mesh.screen.rotation.x = THREE.MathUtils.degToRad(180);
    mesh.matte.material.map = tex;
    mesh.matte.material.emissiveIntensity = 0;
    mesh.matte.material.roughness = 1;
    mesh.matte.material.metalness = 0;
  let data = useScroll();

  useFrame((state, delta) => {
   mesh.screen.rotation.x = THREE.MathUtils.degToRad(180-(data.offset*90));
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
     
    </group>  
  );
};

export default AsusContainer;
