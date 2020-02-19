import { ButtonContainer, GridContainer, GridItem } from './SceneGrid.style'
import { Grid, IconButton } from '@material-ui/core'
import React, { UIEvent, useState } from 'react'

import BoxScene from '~/components/BoxScene'
import DownButton from '~/components/DownButton'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import TextScene from '~/components/TextScene'
import UpButton from '~/components/UpButton'

export default () => {
    const [position, setPosition] = useState(0)
    const [time, setTime] = useState(0)
    const [speed, setSpeed] = useState(0)

    const handleScroll = (event: UIEvent<HTMLElement>): void => {
        event.stopPropagation()
        const currentTime = event.timeStamp
        const currentPosition = event.currentTarget.scrollTop

        const ellapsedTime = currentTime - time
        const distancedTravelled = currentPosition - position
        const speed = ellapsedTime === 0 ? 0 : distancedTravelled / ellapsedTime

        setTime(currentTime)
        setPosition(currentPosition)
        setSpeed(speed)
    }

    return (
        <GridContainer onScroll={handleScroll} container alignItems="center" justify="center">
            <UpButton emphasis={speed > 0 ? 0 : Math.abs(2 * speed)} />
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
            <DownButton emphasis={speed < 0 ? 0 : 2 * speed} />
        </GridContainer>
    )
}
