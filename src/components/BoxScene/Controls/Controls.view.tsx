import { Grid, Slider, Typography } from '@material-ui/core'

import { Controls } from './Controls.style'
import React from 'react'

type Controls = {
    size: number
    setSize(size: number): void
    rotationSpeed: number
    setRotationSpeed(rotationSpeed: number): void
}

type ViewProps = {
    controlsOpacity: number
    controls: Controls
}

export default ({ controlsOpacity, controls }: ViewProps) => (
    <Controls container spacing={2} justify="center" opacity={controlsOpacity}>
        <Grid item xs={2}>
            <Typography>Size</Typography>
            <Slider
                value={controls.size}
                min={1}
                max={100}
                onChange={(event: any, newValue: number | number[]) => {
                    controls.setSize(newValue as number)
                }}
            />
        </Grid>
        <Grid item xs={2}>
            <Typography>Rotation Speed</Typography>
            <Slider
                value={controls.rotationSpeed}
                min={1}
                max={100}
                onChange={(event: any, newValue: number | number[]) => {
                    controls.setRotationSpeed(newValue as number)
                }}
            />
        </Grid>
    </Controls>
)
