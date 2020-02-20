import { Canvas, useFrame } from 'react-three-fiber'
import { Grid, Slider, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Controls } from './PointScene.style'

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
            {isEditMode && (
                <Controls container spacing={2} justify="center" opacity={controlsOpacity}>
                    <Grid item xs={2}>
                        <Typography>Radius</Typography>
                        <Slider
                            value={radius}
                            min={6}
                            max={24}
                            onChange={(event: any, newValue: number | number[]) => {
                                setRadius(newValue as number)
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>Width Segments</Typography>
                        <Slider
                            value={widthSegments}
                            min={6}
                            max={24}
                            onChange={(event: any, newValue: number | number[]) => {
                                setWidthSegments(newValue as number)
                            }}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>Height Segments</Typography>
                        <Slider
                            value={heightSegments}
                            min={6}
                            max={24}
                            onChange={(event: any, newValue: number | number[]) => {
                                setHeightSegments(newValue as number)
                            }}
                        />
                    </Grid>
                </Controls>
            )}

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
