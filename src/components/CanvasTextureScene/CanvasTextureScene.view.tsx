import {
    BackSide,
    BufferGeometry,
    CanvasTexture,
    Color,
    DoubleSide,
    FrontSide,
    LinearFilter,
    Loader,
    Side,
    Texture,
} from 'three'
import { Canvas, useFrame, useLoader, useResource, useThree } from 'react-three-fiber'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'

import Controls from '~/components/Controls'

type ImageTextureProps = {
    position: number[]
}

const ImageTexture = ({ position }: ImageTextureProps) => {
    const { gl, camera } = useThree()
    const [rotation, setRotation] = useState(0)
    const [geometryRef, geometry] = useResource<BufferGeometry>()
    const [textureRef, texture] = useResource<CanvasTexture>()

    const canvasWidth = 500,
        canvasHeight = 250,
        radiusTop = canvasWidth / (2 * Math.PI),
        radiusBottom = radiusTop,
        height = canvasHeight,
        radialSegments = 64,
        heightSegments = 1,
        isOpenEnded = true,
        thetaStart = 0,
        thetaLength = 2 * Math.PI
    const ctx = document.createElement('canvas').getContext('2d')!
    ctx.canvas.width = canvasWidth
    ctx.canvas.height = canvasHeight
    ctx.fillStyle = 'white'
    ctx.font = '50pt Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Moving Borders', ctx.canvas.width / 2, ctx.canvas.height / 2)

    useFrame(() => {
        setRotation(rotation + 10 / 1000)
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
            <canvasTexture ref={textureRef} image={ctx.canvas} minFilter={LinearFilter} />
            <mesh
                scale={[1, 1, 1]}
                rotation={[0.4, -rotation, 0]}
                renderOrder={2}
                geometry={geometry}
            >
                <meshBasicMaterial
                    attach="material"
                    map={texture}
                    color={'white'}
                    side={FrontSide}
                    transparent
                />
            </mesh>
            <mesh scale={[1, 1, 1]} rotation={[0.4, -rotation, 0]} geometry={geometry}>
                <meshBasicMaterial
                    attach="material"
                    map={texture}
                    color={'white'}
                    side={BackSide}
                    transparent
                />
            </mesh>
        </>
    )
}

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 200] }}>
                <Suspense fallback={null}>
                    <ImageTexture position={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </>
    )
}
