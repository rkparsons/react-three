import { Grid, Slider, Typography } from '@material-ui/core'

import ControlGrid from '~/components/ControlGrid'
import React from 'react'

type ViewProps = {
    opacity: number
    controls: Control[]
}

export default ({ opacity, controls }: ViewProps) => (
    <ControlGrid opacity={opacity}>
        {controls.map(control => (
            <Grid item xs={2}>
                <Typography>{control.label}</Typography>
                <Slider
                    value={control.value}
                    min={control.min}
                    max={control.max}
                    onChange={(event: any, newValue: number | number[]) => {
                        control.set(newValue as number)
                    }}
                />
            </Grid>
        ))}
    </ControlGrid>
)
