import { Canvas, useFrame } from 'react-three-fiber'
import React, { useRef, useState } from 'react'

import Head from '~/components/Head'
import { Mesh } from 'three'
import { graphql } from 'gatsby'

type BoxProps = {
    position: number[]
}

const Box = (props: BoxProps) => {
    const mesh = useRef<Mesh>()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        if (mesh && mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={e => setActive(!active)}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default () => (
    <div>
        <Head title="Home" />
        <ul>
            <li>3d character surrounded by radial menu</li>
            <li>scroll with depth perception effect</li>
        </ul>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    </div>
)
