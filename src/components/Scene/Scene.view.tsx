import { ButtonBox, FadeBox, SceneBox } from './Scene.style'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

import EditButton from '~/components/EditButton'

type ViewProps = {
    windowHeight: number | undefined
    children: ReactNode
}

export default ({ windowHeight, children }: ViewProps) => {
    const scene = useRef<HTMLDivElement>(null)
    const [fractionInFocus, setFractionInFocus] = useState(1)

    function convertRange(value: number, r1: number[], r2: number[]) {
        return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0]
    }

    function isSceneVisible() {
        return fractionInFocus > 0
    }

    function getChildrenOpacity() {
        return fractionInFocus > 0 ? 1 : 0
    }

    function getButtonOpacity() {
        return fractionInFocus > 0.7 ? convertRange(fractionInFocus, [0.7, 1], [0, 1]) : 0
    }

    useEffect(() => {
        if (windowHeight && scene.current) {
            const yPosition = scene.current.getBoundingClientRect().y
            setFractionInFocus(Math.max(0, 1 - Math.abs(yPosition / windowHeight)))
        }
    }, [scene.current?.getBoundingClientRect()])

    return (
        <div ref={scene}>
            <SceneBox>
                <FadeBox opacity={getChildrenOpacity()}>{isSceneVisible() && children}</FadeBox>
                <ButtonBox opacity={getButtonOpacity()}>
                    <EditButton />
                </ButtonBox>
            </SceneBox>
        </div>
    )
}
