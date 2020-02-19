import { GridContainer, GridItem } from './SceneGrid.style'
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
        setSpeed(Math.max(-2, Math.min(2, speed)))
    }

    return (
        <GridContainer onScroll={handleScroll} container alignItems="center" justify="center">
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
            <DownButton size={Math.max(1, speed)} />
        </GridContainer>
    )
}
