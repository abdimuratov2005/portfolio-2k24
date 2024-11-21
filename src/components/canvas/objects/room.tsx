import { useGLTF } from '@react-three/drei'
// @ts-nocheck
export default function Room() {
    const { nodes, materials } = useGLTF('/blender_models/portfolio.glb')

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={nodes.Plane.material}
                position={[-2, -1, 0]}
                scale={[0.7, 0.7, 0.7]}
            />
        </group>
    )
}

useGLTF.preload('/blender_models/portfolio.glb')

