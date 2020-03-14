import {
    BackSide,
    BufferGeometry,
    CanvasTexture,
    FrontSide,
    LinearFilter,
    Side,
    Texture,
} from 'three'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { useFrame, useResource } from 'react-three-fiber'

import { Canvas } from './CanvasTextureScene.view.style'
import Controls from '~/components/Controls'

type MaterialProps = {
    texture: Texture
    side: Side
}

const Material = ({ texture, side }: MaterialProps) => (
    <meshBasicMaterial attach="material" map={texture} color={'white'} side={side} transparent />
)

type ImageTextureProps = {
    isHover: boolean
    setIsHover(isHover: boolean): void
}

const ImageTexture = ({ isHover, setIsHover }: ImageTextureProps) => {
    const [rotation, setRotation] = useState(0)
    const [geometryRef, geometry] = useResource<BufferGeometry>()
    const [textureRef, texture] = useResource<CanvasTexture>()
    const [speed, setSpeed] = useState(0.01)

    const canvasWidth = 2048,
        canvasHeight = canvasWidth / 4,
        radiusTop = canvasWidth / (2 * Math.PI),
        radiusBottom = 1.2 * radiusTop,
        height = canvasHeight,
        radialSegments = 64,
        heightSegments = 1,
        isOpenEnded = true,
        thetaStart = 0,
        thetaLength = 2 * Math.PI,
        scale = 512 / canvasWidth

    const canvas = useMemo(() => {
        const ctx = document.createElement('canvas').getContext('2d')!
        ctx.canvas.width = canvasWidth
        ctx.canvas.height = canvasHeight
        ctx.fillStyle = 'white'
        ctx.font = `${canvasWidth / 19.1}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('MOVING BORDERS MOVING BORDERS', ctx.canvas.width / 2, ctx.canvas.height / 2)

        return ctx.canvas
    }, [canvasWidth, canvasHeight])

    useEffect(() => {
        setSpeed(isHover ? 0.02 : 0.01)
    }, [isHover])

    useFrame(() => {
        setRotation(rotation + speed)
    })

    return (
        <>
            <cylinderBufferGeometry
                ref={geometryRef}
                args={[
                    radiusTop,
                    radiusBottom,
                    height,
                    radialSegments,
                    heightSegments,
                    isOpenEnded,
                    thetaStart,
                    thetaLength,
                ]}
            />
            <canvasTexture ref={textureRef} image={canvas} minFilter={LinearFilter} />
            <group
                scale={[scale, scale, scale]}
                rotation={[0.4, -rotation, 0]}
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
            >
                <mesh renderOrder={2} geometry={geometry}>
                    <Material texture={texture} side={FrontSide} />
                </mesh>
                <mesh geometry={geometry}>
                    <Material texture={texture} side={BackSide} />
                </mesh>
            </group>
        </>
    )
}

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <>
            <Canvas camera={{ position: [0, 0, 200] }} isHover={isHover}>
                <Suspense fallback={null}>
                    <ImageTexture isHover={isHover} setIsHover={setIsHover} />
                </Suspense>
            </Canvas>
        </>
    )
}
