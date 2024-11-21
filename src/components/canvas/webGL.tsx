'use client'
import { Canvas } from "@react-three/fiber";
import {Suspense} from "react";

import Room from "@canvas/objects/room";
import Lighting from "@canvas/objects/lighting";
import CameraControl from "@canvas/base/cameraControl";
import FrameLimiter from "@canvas/base/frameLimiter";

const WebGLCanvas = () => {
    return (
        <div style={{
            height: "100vh"
        }}>
            <Canvas
                camera={{
                    position: [1, 1.5, 0],
                    rotation: [0, -1.5, 0]
                }}
            >
                <Lighting />
                <CameraControl />

                <Suspense fallback={null}>
                    <Room/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default WebGLCanvas;