import { Canvas, useFrame } from 'react-three-fiber'
import React, { useState } from 'react'

import Controls from '~/components/Controls'

type BoxProps = {
    position: number[]
    size: number
    rotationSpeed: number
}

const Box = ({ position, size, rotationSpeed }: BoxProps) => {
    const [isHover, setIsHover] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [rotation, setRotation] = useState(0)

    useFrame(() => {
        setRotation(rotation + rotationSpeed / 1000)
    })

    return (
        <mesh
            position={position}
            scale={(isActive ? [1.5, 1.5, 1.5] : [1, 1, 1]).map(axis => (axis * size) / 100)}
            onClick={() => setIsActive(!isActive)}
            onPointerOver={() => setIsHover(true)}
            onPointerOut={() => setIsHover(false)}
            rotation={[rotation, rotation, 0]}
        >
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color={isHover ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    const [size, setSize] = useState(75)
    const [rotationSpeed, setRotationSpeed] = useState(25)

    const controls = [
        {
            label: 'Size',
            value: size,
            set: setSize,
            min: 1,
            max: 100,
        },
        {
            label: 'Rotation Speed',
            value: rotationSpeed,
            set: setRotationSpeed,
            min: 1,
            max: 100,
        },
    ]

    return (
        <>
            <Controls opacity={controlsOpacity} controls={controls} />
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} size={size} rotationSpeed={rotationSpeed} />
            </Canvas>
        </>
    )
}
