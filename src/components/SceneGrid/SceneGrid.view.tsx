import { GridContainer, GridItem } from './SceneGrid.style'
import React, { useRef } from 'react'

import BoxScene from '~/components/BoxScene'
import DownButton from '~/components/DownButton'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import TextScene from '~/components/TextScene'
import UpButton from '~/components/UpButton'

export default () => {
    const boxScene = useRef<HTMLDivElement>(null)
    const textScene = useRef<HTMLDivElement>(null)
    const pointScene = useRef<HTMLDivElement>(null)

    return (
        <GridContainer container alignItems="center" justify="center">
            <UpButton />
            <GridItem item ref={boxScene}>
                <Scene>
                    <BoxScene />
                </Scene>
            </GridItem>
            <GridItem item ref={textScene}>
                <Scene>
                    <TextScene />
                </Scene>
            </GridItem>
            <GridItem item ref={pointScene}>
                <Scene>
                    <PointScene />
                </Scene>
            </GridItem>
            <DownButton />
        </GridContainer>
    )
}
