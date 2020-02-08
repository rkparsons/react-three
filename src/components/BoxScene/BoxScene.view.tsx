import { Canvas, useFrame } from 'react-three-fiber'
import React, { useRef, useState } from 'react'

import { Mesh } from 'three'

type BoxProps = {
    position: number[]
}

const Box = (props: BoxProps) => {
    const mesh = useRef<Mesh>()

    const [isHover, setIsHover] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useFrame(() => {
        if (mesh && mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={isActive ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={e => setIsActive(!isActive)}
            onPointerOver={e => setIsHover(true)}
            onPointerOut={e => setIsHover(false)}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={isHover ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default () => (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
    </Canvas>
)
