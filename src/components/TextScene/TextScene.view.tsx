import { Canvas, useFrame, useLoader, useUpdate } from 'react-three-fiber'
import { FontLoader, Group, Mesh, Vector3 } from 'three'
import React, { Suspense, useMemo, useRef } from 'react'

import { SceneContainer } from './TextScene.style'

function Text({
    children = 'testing',
    vAlign = 'center',
    hAlign = 'center',
    size = 1,
    color = '#000000',
    ...props
}) {
    const font = useLoader(
        FontLoader,
        'https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json'
    )
    const config = useMemo(
        () => ({
            font,
            size: 100,
            height: 30,
            curveSegments: 32,
            bevelEnabled: true,
            bevelThickness: 6,
            bevelSize: 2.5,
            bevelOffset: 0,
            bevelSegments: 8,
        }),
        [font]
    )
    const mesh = useUpdate<Mesh>(
        self => {
            const size = new Vector3()
            self.geometry.computeBoundingBox()
            self.geometry.boundingBox.getSize(size)
            self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
            self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
        },
        [children]
    )
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh}>
                <textGeometry attach="geometry" args={[children, config]} />
                <meshNormalMaterial attach="material" />
            </mesh>
        </group>
    )
}

function AnimatedTextGroup() {
    const ref = useRef<Group>()
    useFrame(({ clock }) => {
        if (ref && ref.current) {
            ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
                Math.sin(clock.getElapsedTime()) * 0.3
        }
    })
    return (
        <group ref={ref}>
            <Text hAlign="left" position={[0, 4.2, 0]} children="REACT" />
        </group>
    )
}

export default () => {
    return (
        <SceneContainer>
            <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <Suspense fallback={null}>
                    <AnimatedTextGroup />
                </Suspense>
            </Canvas>
        </SceneContainer>
    )
}
