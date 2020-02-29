import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { CanvasTexture, Color, DoubleSide, Loader, Side, Texture } from 'three'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'

import Controls from '~/components/Controls'

type ImageTextureProps = {
    position: number[]
}

const ImageTexture = ({ position }: ImageTextureProps) => {
    const ctx = document.createElement('canvas').getContext('2d')!
    ctx.canvas.width = 100
    ctx.canvas.height = 100
    ctx.fillStyle = 'white'
    ctx.font = '10px Arial'
    ctx.fillText('Hello World', 10, 100)
    const texture = new CanvasTexture(ctx.canvas)

    return (
        <>
            <mesh
                position={position}
                scale={[1, 1, 1].map(axis => (axis * 75) / 100)}
                rotation={[0.4, 0, 0]}
            >
                <cylinderBufferGeometry attach="geometry" args={[2, 2, 0.5, 64, 1, true]} />
                <meshStandardMaterial
                    attach="material"
                    map={texture}
                    side={DoubleSide}
                    color="orange"
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
