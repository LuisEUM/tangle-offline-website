'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = ({ id }) => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id={id}
      className='-z-10 h-full absolute top-0 right-0 w-1/2 '
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: ' transparent'
          }
        },
        fullScreen: {
          enable: false
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: false,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        life: {
          duration: {
            sync: true,
            value: 5
          },
          count: 1
        },
        particles: {
          color: {
            value: ['#86208B', '#EA1E6D']
          },
          links: {
            color: {
              value: ['#154078']
            },
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 0.5
          },
          collisions: {
            enable: true
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 0.6,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 160
          },
          opacity: {
            value: {
              max: 0.8,
              min: 0
            }
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default ParticlesBackground
