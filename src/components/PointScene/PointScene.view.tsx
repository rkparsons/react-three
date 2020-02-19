import { Canvas, useFrame } from 'react-three-fiber'
import { Grid, Slider, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'

import { Mesh } from 'three'
import VisibilitySensor from 'react-visibility-sensor'

type SphereProps = { radius: number; widthSegments: number; heightSegments: number }

function PointSphere({ radius, widthSegments, heightSegments }: SphereProps) {
    const mesh = useRef<Mesh>()

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    return (
        <points ref={mesh}>
            <sphereBufferGeometry
                attach="geometry"
                args={[radius, widthSegments, heightSegments]}
            />
            <pointsMaterial attach="material" color="red" />
        </points>
    )
}

export default () => {
    const [radius, setRadius] = useState<number>(16)
    const [widthSegments, setWidthSegments] = useState<number>(8)
    const [heightSegments, setHeightSegments] = useState<number>(8)

    return (
        <>
            {/* <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Typography>Radius</Typography>
                    <Slider
                        value={radius}
                        min={6}
                        max={24}
                        valueLabelDisplay="auto"
                        onChange={(event: any, newValue: number | number[]) => {
                            setRadius(newValue as number)
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography>Width Segments</Typography>
                    <Slider
                        value={widthSegments}
                        min={6}
                        max={24}
                        valueLabelDisplay="auto"
                        onChange={(event: any, newValue: number | number[]) => {
                            setWidthSegments(newValue as number)
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography>Height Segments</Typography>
                    <Slider
                        value={heightSegments}
                        min={6}
                        max={24}
                        valueLabelDisplay="auto"
                        onChange={(event: any, newValue: number | number[]) => {
                            setHeightSegments(newValue as number)
                        }}
                    />
                </Grid>
            </Grid> */}

            <VisibilitySensor partialVisibility={true}>
                {({ isVisible }) => (
                    <Canvas invalidateFrameloop={!isVisible} camera={{ position: [0, 0, 35] }}>
                        <ambientLight intensity={2} />
                        <pointLight position={[40, 40, 40]} />
                        <PointSphere
                            radius={radius}
                            widthSegments={widthSegments}
                            heightSegments={heightSegments}
                        />
                    </Canvas>
                )}
            </VisibilitySensor>
        </>
    )
}
