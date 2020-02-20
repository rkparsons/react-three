import { Canvas, useFrame, useLoader, useUpdate } from 'react-three-fiber'
import { FontLoader, Mesh, TextBufferGeometry } from 'three'
import React, { Suspense, useMemo, useRef, useState } from 'react'

import Controls from './Controls'

type TextProps = {
    children: string
    curveSegments: number
}

function Text({ children, curveSegments }: TextProps) {
    const mesh = useRef<Mesh>()
    const font = useLoader(
        FontLoader,
        'https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json'
    )
    const config = useMemo(
        () => ({
            font,
            size: 100,
            height: 30,
            curveSegments: curveSegments,
            bevelEnabled: true,
            bevelThickness: 6,
            bevelSize: 2.5,
            bevelOffset: 0,
            bevelSegments: 8,
        }),
        [font]
    )

    const text = useUpdate<TextBufferGeometry>(
        self => {
            if (mesh.current) {
                self.computeBoundingBox()
                self.boundingBox.getCenter(mesh.current.position).multiplyScalar(-1)
            }
        },
        [children]
    )
    return (
        <group scale={[0.1, 0.1, 0.1]}>
            <mesh ref={mesh}>
                <textBufferGeometry ref={text} attach="geometry" args={[children, config]} />
                <meshNormalMaterial attach="material" />
            </mesh>
        </group>
    )
}

function AnimatedTextGroup({ children, curveSegments }: TextProps) {
    const [rotation, setRotation] = useState(0)

    useFrame(({ clock }) => {
        const speed = 0.1
        const rotation = clock.getElapsedTime() * speed
        setRotation(rotation)
    })

    return (
        <group rotation={[rotation, rotation, rotation]}>
            <Text children={children} curveSegments={curveSegments} />
        </group>
    )
}

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    const [curveSegments, setCurveSegments] = useState(32)

    return (
        <>
            <Controls
                opacity={controlsOpacity}
                controls={{
                    curveSegments,
                    setCurveSegments,
                }}
            />
            <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <Suspense fallback={null}>
                    <AnimatedTextGroup children="React" curveSegments={curveSegments} />
                </Suspense>
            </Canvas>
        </>
    )
}
