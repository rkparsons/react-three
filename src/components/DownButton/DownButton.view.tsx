import { Button, GridContainer, Icon } from './DownButton.style'

import { Grid } from '@material-ui/core'
import React from 'react'

type ViewProps = {
    size: number
}

export default ({ size }: ViewProps) => {
    return (
        <GridContainer container justify="center">
            <Grid item>
                <Button>
                    <Icon size={size} />
                </Button>
            </Grid>
        </GridContainer>
    )
}
