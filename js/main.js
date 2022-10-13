'use strict'
import Scene from './scene.js'
import ParticleSystem from './particleSystem.js'
var App = App || {}

var self = this

App.start = function () {
    App.scene = new Scene({ container: 'scene' })
    const particleSystem = new ParticleSystem()
    particleSystem.initialize('data/058.csv')
    App.scene.addObject(particleSystem.getParticleSystems())
    App.scene.render()
}

export default App
