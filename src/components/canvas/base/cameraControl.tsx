import {RootState, useFrame, useThree} from "@react-three/fiber";
import gsap from "gsap";
import {useEffect, useState} from "react";
import {func} from "prop-types";

const points = {
    room1: {
        camera: {
            position: [0, 0, 0],
            rotation: [0, 0, 0],
        },
        achieved: false,
    },
    room2: {
        camera: {
            position: [0, 0, 0],
            rotation: [0, 0, 0],
        },
        achieved: false,
    }
}

const CameraControl = ()=> {
    const [isDragging, setDragging] = useState(false);
    const [progress, setProgress] = useState(0);
    const state = useThree();

    function handleTouchDown<T>(event: T) {
        setDragging(true);
        console.log("down")
    }
    function handleTouchPress<T>(event: T) {
        if (!isDragging) return;

        const { touches } = event as TouchEvent;
        const { clientX, clientY } = event as MouseEvent;

        const touchX = "touches" in event ? touches[0].clientX : clientX;
        const touchY = "touches" in event ? touches[0].clientY : clientY;

        gsap.to(state.camera.position, {
            x: (touchX || touchY) * state.clock.getDelta()
        })

        console.log(state.camera.position.x)

        console.log("press")
    }
    function handleTouchUp<T>(event: T) {
        setDragging(false);
        console.log("up")
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleTouchDown)
        document.addEventListener("mousemove", handleTouchPress)
        document.addEventListener("wheel", handleTouchPress)
        document.addEventListener("mouseup", handleTouchUp)
        document.addEventListener("touchstart", handleTouchDown)
        document.addEventListener("touchmove", handleTouchPress)
        document.addEventListener("touchend", handleTouchUp)

        return () => {
            document.removeEventListener("mousedown", handleTouchDown)
            document.removeEventListener("mousemove", handleTouchPress)
            document.removeEventListener("wheel", handleTouchPress)
            document.removeEventListener("mouseup", handleTouchUp)
            document.removeEventListener("touchstart", handleTouchDown)
            document.removeEventListener("touchmove", handleTouchPress)
            document.removeEventListener("touchend", handleTouchUp)
        }
    }, [isDragging]);

    return <></>
}

export default CameraControl;