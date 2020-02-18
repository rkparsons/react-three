import { Card, CardActions, CardContent } from './Scene.style'
import { Grid, IconButton } from '@material-ui/core'
import React, { ReactNode, useState } from 'react'

import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import FullscreenIcon from '@material-ui/icons/Fullscreen'

type ViewProps = {
    isFullScreen: boolean
    isVisible: boolean
    setIsFullScreen: (isFullScreen: boolean) => void
    children: ReactNode
}

export default ({ isFullScreen, isVisible, setIsFullScreen, children }: ViewProps) => {
    if (!isVisible) {
        return <></>
    }
    return (
        <Grid item xs={12} md={isFullScreen ? 12 : 6} lg={isFullScreen ? 12 : 4}>
            <Card>
                <CardContent>{children}</CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        onClick={() => {
                            setIsFullScreen(!isFullScreen)
                        }}
                    >
                        {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}
