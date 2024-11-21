const Lighting = () => {
    return (
        <>
            <ambientLight intensity={1} position={[1, 1, 1]}/>
            <directionalLight position={[-10, 6, 10]} rotation={[1,0,1]} intensity={2}/>
        </>
    )
}

export default Lighting;