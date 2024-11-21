import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useState } from "react";

// Define camera points for different rooms
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
    },
};

const CameraControl = () => {
    const [isDragging, setDragging] = useState(false);
    const state = useThree();

    // Generic type T constrained to extend Event to ensure proper typing
    function handleTouchDown<T extends Event>(event: T) {
        setDragging(true);
        console.log("down");
    }

    function handleTouchPress<T extends Event>(event: T) {
        if (!isDragging) return;

        // Narrow the event type for specific properties
        const touchX =
            "touches" in event && event instanceof TouchEvent
                ? event.touches[0].clientX
                : event instanceof MouseEvent
                    ? event.clientX
                    : 0;

        const touchY =
            "touches" in event && event instanceof TouchEvent
                ? event.touches[0].clientY
                : event instanceof MouseEvent
                    ? event.clientY
                    : 0;

        // Animate camera position using GSAP
        gsap.to(state.camera.position, {
            x: touchX * state.clock.getDelta(),
            y: touchY * state.clock.getDelta(),
        });

        console.log(state.camera.position.x);
        console.log("press");
    }

    function handleTouchUp<T extends Event>(event: T) {
        setDragging(false);
        console.log("up");
    }

    useEffect(() => {
        // Add event listeners
        document.addEventListener("mousedown", handleTouchDown);
        document.addEventListener("mousemove", handleTouchPress);
        document.addEventListener("wheel", handleTouchPress);
        document.addEventListener("mouseup", handleTouchUp);
        document.addEventListener("touchstart", handleTouchDown);
        document.addEventListener("touchmove", handleTouchPress);
        document.addEventListener("touchend", handleTouchUp);

        return () => {
            // Remove event listeners
            document.removeEventListener("mousedown", handleTouchDown);
            document.removeEventListener("mousemove", handleTouchPress);
            document.removeEventListener("wheel", handleTouchPress);
            document.removeEventListener("mouseup", handleTouchUp);
            document.removeEventListener("touchstart", handleTouchDown);
            document.removeEventListener("touchmove", handleTouchPress);
            document.removeEventListener("touchend", handleTouchUp);
        };
    }, [isDragging]);

    return null; // Component has no visual output
};

export default CameraControl;

