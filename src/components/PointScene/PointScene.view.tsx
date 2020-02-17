import { Canvas, useFrame } from 'react-three-fiber'
import { CardContent, Grid, Slider, Typography } from '@material-ui/core'
import React, { ChangeEvent, useCallback, useRef, useState } from 'react'

import { Mesh } from 'three'

function PointSphere({ radius }: { radius: number }) {
    const mesh = useRef<Mesh>()

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })

    return (
        <mesh ref={mesh}>
            <sphereBufferGeometry attach="geometry" args={[radius, 8, 8]} />
            <pointsMaterial attach="material" color="red" />
        </mesh>
    )
}

export default () => {
    const [radius, setRadius] = useState<number>(16)

    const handleRadiusChange = (event: any, newValue: number | number[]) => {
        setRadius(newValue as number)
    }

    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <Typography id="discrete-slider" gutterBottom>
                        Radius
                    </Typography>
                    <Slider
                        value={radius}
                        onChange={handleRadiusChange}
                        aria-labelledby="discrete-slider"
                    />
                </Grid>
            </Grid>
            <Canvas camera={{ position: [0, 0, 35] }}>
                <ambientLight intensity={2} />
                <pointLight position={[40, 40, 40]} />
                <PointSphere radius={radius} />
            </Canvas>
        </>
    )
}
