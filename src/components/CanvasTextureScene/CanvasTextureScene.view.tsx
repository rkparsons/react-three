import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { CanvasTexture, Color, DoubleSide, Loader, Side, Texture } from 'three'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'

import Controls from '~/components/Controls'

type ImageTextureProps = {
    position: number[]
}

const ImageTexture = ({ position }: ImageTextureProps) => {
    const [rotation, setRotation] = useState(0)

    const ctx = document.createElement('canvas').getContext('2d')!
    ctx.canvas.width = 512
    ctx.canvas.height = 512
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
            <mesh scale={[1, 1, 1]} rotation={[0.4, rotation, 0]}>
                <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
                <meshStandardMaterial attach="material" color={'white'}>
                    <canvasTexture attach="map" image={ctx.canvas} />
                </meshStandardMaterial>
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
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <ImageTexture position={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </>
    )
}
