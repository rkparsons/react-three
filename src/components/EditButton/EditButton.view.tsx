import { Button, GridContainer, Icon } from './EditButton.style'

import { Grid } from '@material-ui/core'
import React from 'react'

type ViewProps = {
    opacity: number
}

export default ({ opacity }: ViewProps) => {
    return (
        <GridContainer container alignItems="center">
            <Grid item>
                <Button>
                    <Icon opacity={opacity} />
                </Button>
            </Grid>
        </GridContainer>
    )
}
