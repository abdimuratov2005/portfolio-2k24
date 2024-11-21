import {useFrame} from "@react-three/fiber";

const FPS = 60;

const FrameLimiter = () => {
    useFrame((state) => {
        const timeUntilNextFrame = (1000 / FPS) - state.clock.getDelta();

        setTimeout(() => {
            state.invalidate();
        }, Math.max(0, timeUntilNextFrame));

    });
    return <></>;
};

export default FrameLimiter;