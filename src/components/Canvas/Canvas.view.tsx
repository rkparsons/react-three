import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from 'three'
import React, { useEffect, useRef } from 'react'

import { useMousePosition } from '~/hooks/useMousePosition'

export default () => {
    const canvasEl = useRef<HTMLDivElement>(null)
    const position = useMousePosition()

    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new Scene()
        var camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
        var renderer = new WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)

        if (canvasEl && canvasEl.current) {
            canvasEl.current.appendChild(renderer.domElement)
        }

        var geometry = new BoxGeometry(1, 1, 1)
        var material = new MeshBasicMaterial({ color: 0x00ff00 })
        var cube = new Mesh(geometry, material)
        scene.add(cube)
        camera.position.z = 5
        var animate = function() {
            requestAnimationFrame(animate)
            camera.position.set(position.x / window.innerWidth, position.y / window.innerHeight, 5)
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            renderer.render(scene, camera)
        }
        animate()

        return function cleanup() {
            if (canvasEl && canvasEl.current) {
                canvasEl.current.removeChild(renderer.domElement)
            }
        }
    })

    return (
        <div>
            {position.x} {position.y}
            <div ref={canvasEl} />
        </div>
    )
}
