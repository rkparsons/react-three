import React, { FC, Suspense, useEffect, useRef, useState } from 'react'

import { Canvas } from 'react-three-fiber'
import { Mesh } from 'three/src/Three'
import { PointerEvent } from 'react-three-fiber/canvas'
import VideoURL from './video.mp4'

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    const [isHover, setIsHover] = useState(false)    
    const [video, setVideo] = useState<HTMLVideoElement>()
    const meshRef = useRef<Mesh>()

    useEffect(() => {
        const video = document.createElement('video')
        video.src = VideoURL
        video.muted = true
        video.loop = true
        video.crossOrigin = 'anonymous'
        video.width = 640
        video.height = 320
        video.play().then(() => video.pause())

        setVideo(video)
    }, [])

    function onPointerOver() {
        if (video) {
            video.play()
            setIsHover(true)
        }
    }

    function onPointerOut() {
        if (video) {
            video.pause()
            setIsHover(false)
        }
    }

    function onPointerMove(event: PointerEvent) {
        event.stopPropagation()
    }

    if (!video) {
        return <></>
    }

    return (
        <Canvas>
            <Suspense fallback={null}>
            <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh
                    position={[0, 0, 0]}
                    scale={[0.3, 0.3, 0.3]}
                    rotation={[0.3, 0.8, 0]}
                    ref={meshRef}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    onPointerMove={onPointerMove}
                >
                    <boxBufferGeometry attach="geometry" args={[16, 9, 2]} />
                    <meshBasicMaterial
                        attach="material"
                        transparent={true}
                        opacity={isHover ? 1 : 0.6}
                    >
                        <videoTexture attach="map" args={[video]} />
                    </meshBasicMaterial>
                </mesh>
            </Suspense>            
        </Canvas>
    )
}