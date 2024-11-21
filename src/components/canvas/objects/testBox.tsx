import {useRef} from "react";
import {Mesh} from "three";
import {useFrame} from "@react-three/fiber";

const TestBox = () => {
    const meshRef = useRef<Mesh>(null!);

    useFrame((state, delta) => {
        meshRef.current.rotation.x += 5 * delta;
    })

    return (
        <mesh
            ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={"red"}/>
        </mesh>
    )
}

export default TestBox;