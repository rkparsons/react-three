import { Grid, IconButton } from '@material-ui/core'
import { GridContainer, Icon } from './DownButton.style'

import React from 'react'

type ViewProps = {
    emphasis: number
}

export default ({ emphasis }: ViewProps) => {
    return (
        <GridContainer container justify="center">
            <Grid item>
                <IconButton>
                    <Icon emphasis={emphasis} />
                </IconButton>
            </Grid>
        </GridContainer>
    )
}
