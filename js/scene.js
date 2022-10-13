'use strict'
import * as THREE from '../../vendor/three/build/three.module.js'
import { OrbitControls } from '../../vendor/three/examples/jsm/controls/OrbitControls.js'

var App = App || {}

const Scene = function (options) {
    const self = this
    const width = d3.select('.particleDiv').node().clientWidth
    const height = width * 0.85
    self.scene = new THREE.Scene()
    self.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    self.camera.position.set(0, 2, 20)
    self.camera.lookAt(0, 0, 0)
    const light = new THREE.DirectionalLight(0xffffff, 1.5)
    light.position.set(0, 2, 20)
    light.lookAt(0, 0, 0)
    self.camera.add(light)
    self.scene.add(self.camera)
    self.renderer = new THREE.WebGLRenderer()
    self.renderer.setSize(width, height)
    document
        .getElementById(options.container)
        .appendChild(self.renderer.domElement)

    self.controls = new OrbitControls(self.camera, self.renderer.domElement)
    self.public = {
        resize: function () {},
        addObject: function (obj) {
            self.scene.add(obj)
        },
        render: function () {
            requestAnimationFrame(self.public.render)
            self.renderer.render(self.scene, self.camera)
        },
    }
    return self.public
}

export default Scene
