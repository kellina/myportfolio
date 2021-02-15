import React from 'react'
import Particles from 'react-particles-js'
import Welcome from '../components/Welcome'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Projects from '../components/Projects'
import particlesConfig from '../data/particles.config.json'
import "./App.css"
import About from '../components/About'


const App = props => (
    <div className="App">
        <Menu />
        <Particles params={particlesConfig}/>
        <Welcome />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
)
export default App