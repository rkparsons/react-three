import { Canvas, useFrame } from 'react-three-fiber'
import React, { useState } from 'react'

type BoxProps = {
    position: number[]
}

const Box = (props: BoxProps) => {
    const [isHover, setIsHover] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [rotation, setRotation] = useState(0)

    useFrame(() => {
        setRotation(rotation + 0.01)
    })

    return (
        <mesh
            {...props}
            scale={isActive ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={e => setIsActive(!isActive)}
            onPointerOver={e => setIsHover(true)}
            onPointerOut={e => setIsHover(false)}
            rotation={[rotation, rotation, 0]}
        >
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color={isHover ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default () => (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
    </Canvas>
)
