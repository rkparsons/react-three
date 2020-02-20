import { Grid, Slider, Typography } from '@material-ui/core'

import ControlGrid from '~/components/ControlGrid'
import React from 'react'

type Controls = {
    size: number
    setSize(size: number): void
    rotationSpeed: number
    setRotationSpeed(rotationSpeed: number): void
}

type ViewProps = {
    opacity: number
    controls: Controls
}

export default ({ opacity, controls }: ViewProps) => (
    <ControlGrid opacity={opacity}>
        <Grid item xs={2}>
            <Typography>Size</Typography>
            <Slider
                value={controls.size}
                min={1}
                max={100}
                onChange={(event: any, newValue: number | number[]) => {
                    console.log('size', newValue)
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
    </ControlGrid>
)
