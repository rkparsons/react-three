import { GridContainer, GridItem } from './SceneGrid.style'
import React, { UIEvent, useRef, useState } from 'react'

import BoxScene from '~/components/BoxScene'
import Direction from '~/constants/direction'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import ScrollButton from '~/components/ScrollButton'
import TextScene from '~/components/TextScene'
import { useWindowSize } from '~/hooks/useWindowSize'

export default () => {
    const windowSize = useWindowSize()
    const [position, setPosition] = useState(0)
    // const [time, setTime] = useState(0)
    // const [speed, setSpeed] = useState(0)

    const handleScroll = (event: UIEvent<HTMLElement>): void => {
        event.stopPropagation()
        // const currentTime = event.timeStamp
        const currentPosition = event.currentTarget.scrollTop
        // const ellapsedTime = currentTime - time
        // const distancedTravelled = currentPosition - position
        // const speed = ellapsedTime === 0 ? 0 : distancedTravelled / ellapsedTime
        // setTime(currentTime)
        setPosition(currentPosition)
        // setSpeed(speed)
    }

    return (
        <GridContainer onScroll={handleScroll} container alignItems="center" justify="center">
            {/* <ScrollButton speed={speed} direction={Direction.Up} /> */}
            <GridItem item>
                <Scene windowHeight={windowSize.height}>
                    {isVisible => <BoxScene isVisible={isVisible} />}
                </Scene>
            </GridItem>
            <GridItem item>
                <Scene windowHeight={windowSize.height}>
                    {isVisible => <TextScene isVisible={isVisible} />}
                </Scene>
            </GridItem>
            <GridItem item>
                <Scene windowHeight={windowSize.height}>
                    {isVisible => <PointScene isVisible={isVisible} />}
                </Scene>
            </GridItem>
            {/* <ScrollButton speed={speed} direction={Direction.Down} /> */}
        </GridContainer>
    )
}
