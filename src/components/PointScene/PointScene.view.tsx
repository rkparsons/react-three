import { Canvas, useFrame } from 'react-three-fiber'
import React, { useState } from 'react'

import Controls from './Controls'

type SphereProps = { radius: number; widthSegments: number; heightSegments: number }

function PointSphere({ radius, widthSegments, heightSegments }: SphereProps) {
    const [rotation, setRotation] = useState(0)

    useFrame(() => {
        setRotation(rotation + 0.01)
    })

    return (
        <points rotation={[rotation, rotation, 0]}>
            <sphereBufferGeometry
                attach="geometry"
                args={[radius, widthSegments, heightSegments]}
            />
            <pointsMaterial attach="material" color="red" />
        </points>
    )
}

type ViewProps = {
    controlsOpacity: number
    isEditMode: boolean
}

export default ({ controlsOpacity, isEditMode }: ViewProps) => {
    const [radius, setRadius] = useState<number>(16)
    const [widthSegments, setWidthSegments] = useState<number>(8)
    const [heightSegments, setHeightSegments] = useState<number>(8)

    return (
        <>
            <Controls
                controlsOpacity={controlsOpacity}
                isEditMode={isEditMode}
                controls={{
                    radius,
                    setRadius,
                    widthSegments,
                    setWidthSegments,
                    heightSegments,
                    setHeightSegments,
                }}
            />

            <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <PointSphere
                    radius={radius}
                    widthSegments={widthSegments}
                    heightSegments={heightSegments}
                />
            </Canvas>
        </>
    )
}
