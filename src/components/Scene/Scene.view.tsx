import { Card, CardActions, CardContent, Grid } from './Scene.style'
import React, { ReactNode, useState } from 'react'

import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import { IconButton } from '@material-ui/core'

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
        <Grid isFullScreen={isFullScreen}>
            <Card>
                <CardContent isFullScreen={isFullScreen}>{children}</CardContent>
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
