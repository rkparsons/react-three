import { Button, GridContainer, Icon } from './MoreButton.style'

import { Grid } from '@material-ui/core'
import React from 'react'

export default () => {
    return (
        <GridContainer container justify="center">
            <Grid item>
                <Button>
                    <Icon />
                </Button>
            </Grid>
        </GridContainer>
    )
}
