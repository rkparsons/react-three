import { Grid, Slider, Typography } from '@material-ui/core'

import ControlGrid from '~/components/ControlGrid'
import React from 'react'

type Controls = {
    curveSegments: number
    setCurveSegments(curveSegments: number): void
}

type ViewProps = {
    opacity: number
    controls: Controls
}

export default ({ opacity, controls }: ViewProps) => (
    <ControlGrid opacity={opacity}>
        <Grid item xs={2}>
            <Typography>Curve Segments</Typography>
            <Slider
                value={controls.curveSegments}
                min={1}
                max={100}
                onChange={(event: any, newValue: number | number[]) => {
                    controls.setCurveSegments(newValue as number)
                }}
            />
        </Grid>
    </ControlGrid>
)
