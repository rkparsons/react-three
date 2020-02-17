import { Canvas, useFrame } from 'react-three-fiber'
import React, { useRef } from 'react'

import { Mesh } from 'three'
import { SceneContainer } from './TextScene.style'

function PointSphere() {
    const mesh = useRef<Mesh>()

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    return (
        <mesh ref={mesh}>
            <sphereBufferGeometry attach="geometry" args={[16, 8, 8]} />
            <pointsMaterial attach="material" color="red" />
        </mesh>
    )
}

export default () => {
    return (
        <SceneContainer>
            <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <PointSphere />
            </Canvas>
        </SceneContainer>
    )
}
