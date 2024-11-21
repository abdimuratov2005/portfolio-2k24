import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Room() {
    const gltf = useLoader(GLTFLoader, '/blender_models/portfolio.glb')
    return (
        <primitive
            object={gltf.scene}
            castShadow={true}
            receiveShadow={true}
            position={[-2, -1, 0]}
            scale={[0.7, 0.7, 0.7]}
        />
    )
}