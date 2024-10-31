// import React from 'react'
import {Canvas} from "@react-three/fiber"
import './style.css';
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import AsusContainer from "./AsusContainer";

const App = () => {
  
  return <div className="w-full h-screen ">
    <div className="absolute text-white top-32 left-1/2 -translate-x-1/2">
    <h3 className="text-3xl font-[700] tracking-tighter glow-text">MacBook Pro</h3>
    </div>
    <Canvas camera={{fov:12, position: [0, -10, 220]}}>
    <OrbitControls/>
    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr']}/>

    <ScrollControls pages={3}>
    <AsusContainer/>
    </ScrollControls>
  </Canvas>
  </div>
}

export default App
