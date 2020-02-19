import { GridContainer, GridItem } from './SceneGrid.style'
import React, { UIEvent, useEffect, useRef, useState } from 'react'

import BoxScene from '~/components/BoxScene'
import DownButton from '~/components/DownButton'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import TextScene from '~/components/TextScene'
import { Typography } from '@material-ui/core'
import UpButton from '~/components/UpButton'
import useWindowDimensions from '~/hooks/useWindowDimensions'

export default () => {
    const [position, setPosition] = useState(0)
    const [time, setTime] = useState(0)
    const [speed, setSpeed] = useState(0)
    const { height } = useWindowDimensions()

    const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
        e.stopPropagation()
        const currentTime = e.timeStamp
        const currentPosition = e.currentTarget.scrollTop

        const ellapsedTime = currentTime - time
        const distancedTravelled = currentPosition - position
        const speed = Math.abs(distancedTravelled) < 10 ? 0 : distancedTravelled / ellapsedTime

        setTime(currentTime)
        setPosition(currentPosition)
        setSpeed(speed)
    }

    return (
        <GridContainer onScroll={handleScroll} container alignItems="center" justify="center">
            <Typography style={{ position: 'absolute', left: 0 }}>{speed.toFixed(2)}</Typography>
            <UpButton />
            <GridItem item>
                <Scene>
                    <BoxScene />
                </Scene>
            </GridItem>
            <GridItem item>
                <Scene>
                    <TextScene />
                </Scene>
            </GridItem>
            <GridItem item>
                <Scene>
                    <PointScene />
                </Scene>
            </GridItem>
            <DownButton isScrolling={speed > 0} />
        </GridContainer>
    )
}
