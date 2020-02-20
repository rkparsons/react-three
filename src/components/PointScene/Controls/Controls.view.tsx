import { Grid, Slider, Typography } from '@material-ui/core'

import ControlGrid from '~/components/ControlGrid'
import React from 'react'

type Controls = {
    radius: number
    setRadius(radius: number): void
    widthSegments: number
    setWidthSegments(widthSegments: number): void
    heightSegments: number
    setHeightSegments(heightSegments: number): void
}

type ViewProps = {
    opacity: number
    controls: Controls
}

export default ({ opacity, controls }: ViewProps) => (
    <ControlGrid opacity={opacity}>
        <Grid item xs={2}>
            <Typography>Radius</Typography>
            <Slider
                value={controls.radius}
                min={6}
                max={24}
                onChange={(event: any, newValue: number | number[]) => {
                    controls.setRadius(newValue as number)
                }}
            />
        </Grid>
        <Grid item xs={2}>
            <Typography>Width Segments</Typography>
            <Slider
                value={controls.widthSegments}
                min={6}
                max={24}
                onChange={(event: any, newValue: number | number[]) => {
                    controls.setWidthSegments(newValue as number)
                }}
            />
        </Grid>
        <Grid item xs={2}>
            <Typography>Height Segments</Typography>
            <Slider
                value={controls.heightSegments}
                min={6}
                max={24}
                onChange={(event: any, newValue: number | number[]) => {
                    controls.setHeightSegments(newValue as number)
                }}
            />
        </Grid>
    </ControlGrid>
)
