import { DownIcon, GridContainer, UpIcon } from './ScrollButton.style'
import { Grid, IconButton } from '@material-ui/core'

import Direction from '~/constants/direction'
import React from 'react'

type ViewProps = {
    speed: number
    direction: Direction
}

export default ({ speed, direction }: ViewProps) => {
    const emphasis =
        direction === Direction.Up
            ? speed > 0
                ? 0
                : Math.abs(2 * speed)
            : speed < 0
            ? 0
            : 2 * speed

    return (
        <GridContainer container justify="center" scrollDirection={direction}>
            <Grid item>
                <IconButton>
                    {direction === Direction.Up ? (
                        <UpIcon emphasis={emphasis} />
                    ) : (
                        <DownIcon emphasis={emphasis} />
                    )}
                </IconButton>
            </Grid>
        </GridContainer>
    )
}
