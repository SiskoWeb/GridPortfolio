import { useState,useCallback } from 'react'

import Particles from "react-particles";
// import particlesInit from "react-particles";
import { loadFull } from "tsparticles";

export default function Practice() {
    const particlesInit = async (main) => {
        console.log(main);
     
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
       
      console.log(container);
    };
    
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
            color: {
                value: "rgb(252, 250, 244)",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "rgb(240, 180, 61)",
            },
            links: {
                color: "rgb(240, 180, 61)",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
/>


  )
}
