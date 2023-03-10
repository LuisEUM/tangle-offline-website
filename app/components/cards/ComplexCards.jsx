'use client'
import { motion, useSpring } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useParentSize } from './hook/Hooks'
import { Tile } from './Tile/Tile'
import imgageData from '../../data/images.json'
//  Create some data where each item
//  in the array will represent an unique card

// const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const data = imgageData.cards

// Mapping function to create duplicates with UIDs
const mapData = (data, prefix) =>
  data.map((item, i) => ({
    id: `${prefix}${i}`,
    content: item
  }))

// Array we are going to work with
const dataClone = [
  // First 3 duplicates are going to be rendered:
  // One is for exit animations
  ...mapData(data, '1'),
  // Second one is being displayed on screen
  ...mapData(data, '2'),
  // Third one is for inital aniamtion
  ...mapData(data, '3'),
  // Last one is to avoid cards animation
  // from the final position to the initial one
  ...mapData(data, '4')
]

// ************************************************** //
// *                                                * //
// *       https://twitter.com/wojciech_dobry       * //
// *      for more interaction design content,      * //
// *         just hit the follow button  :)         * //
// *                                                * //
// ************************************************** //

// ************************************************** //
// *                                                * //
// *        This code is more of a prototype.       * //
// *   T'd optimize if before using in production   * //
// *                                                * //
// ************************************************** //

export default function ComplexCards ({ desktop, tablet, mobile, className }) {
  // I like to work with relative sizes, rather than px
  // useParentSize gets parent size, so I can
  // size everything relatively to the container.
  // You can work with pixels if you like

  const [ref, size] = useParentSize()
  const [state, setState] = useState({ current: 0, arr: dataClone })

  // A function to rotate the array by n steps
  // (btw. This could be a signle loop)
  // I just find it easier to read

  const rotateArray = useCallback((n = 1) => {
    const newArr = [...state.arr]
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        const first = newArr.shift()
        newArr.push(first)
      }
      setState({ current: n, arr: newArr })
    } else {
      for (let i = 0; i < -n; i++) {
        const last = newArr.pop()
        newArr.unshift(last)
      }
      setState({ current: n, arr: newArr })
    }
  }, [state.arr])

  useEffect(() => {
    const interval = setInterval(() => {
      rotateArray()
    }, 3000)
    return () => clearInterval(interval)
  }, [rotateArray])

  return (
    <Tile
      ref={ref}
      perspective
      perspectiveDist={size * 90}
      className={className}
    >
      {state.arr.map(
        (item, i) =>
          // Render only first 3 copies of data.
          // The fourth copy should be out of render,
          // otherwise cards will also animate
          // from last to first position
          i < data.length * 3 && (
            <Card
              key={item.id}
              i={i}
              current={state.current}
              name={item.content}
              rotateArray={rotateArray}
              length={data.length}
              size={size}
              style={state.style}
              desktop={desktop}
              tablet={tablet}
              mobile={mobile}
            />
          )
      )}
    </Tile>
  )
}

// Spring configuration
const spring = {
  type: 'spring',
  damping: 70,
  stiffness: 600,
  restDelta: 0.0001,
  restSpeed: 0.0001
}

const Card = ({ i, name, length, size, rotateArray, current, desktop, tablet, mobile }) => {
  // Card is sized relatively to the container,
  // just to maintain all ratios.

  const cardWidth = size * 0.35 * 1 * (mobile ? 1.50 : 1)
  const cardHeight = size * 0.55 * 1 * (mobile ? 1.50 : 1)

  // Bunch of helpers
  // to get the correct array slice
  const { isLeft, isFirst, isCenter, isRight } = {
    isLeft: i < length,
    isFirst: i === length,
    isCenter: i > length && i <= length * 2 - 1,
    isRight: i > length * 2 - 1 && i < length * 3
  }

  // Another helper to start counting
  // from the "first visible" card
  const iFromFirst = i - length

  // I usually work with hsl() model
  // bgLightness defines the l component of the background
  const bgLightness = 13

  // I don't want any card to be darker
  // than the background itself
  const clampLightness = (value) => Math.max(value, bgLightness)

  // Helpers, helpers, helpers...
  const lightnessHSL = (value) => `hsl(0,0%,${clampLightness(value)}%)`
  const offsetCalc = (start, step) => start * size + step * i
  const backgroundCalc = (start, step) =>
    lightnessHSL(start + step * iFromFirst)

  // Actual styles for each card set.
  // I want to have control over:
  // ??? first card (the draggable one)
  // ??? center (visible cards)
  // ??? left (out of container but matters for exit animation)
  // ??? right (out of container but matters for initial animation)

  let styles = {}

  if (desktop) {
    styles = {
      [isLeft]: {
        posX: offsetCalc(-1.25, 0),
        posY: offsetCalc(-0.25, 0),
        posZ: offsetCalc(0, 1),
        rotX: 0,
        rotY: 45,
        rotZ: -90,
        background: backgroundCalc(95, 0)
      },
      [isFirst]: {
        posX: offsetCalc(-0.25, -cardWidth / 6 / i),
        posY: offsetCalc(-0.4, 2.5),
        posZ: offsetCalc(-1, i * i * -0.1),
        rotX: 0,
        rotY: 0,
        rotZ: 0,
        background: backgroundCalc(95, 0)
      },
      [isCenter]: {
        posX: offsetCalc(i * 0.20, -i * 1 - 0.67 * cardWidth),
        posY: offsetCalc(-0.4, 2),
        posZ: offsetCalc(-1, i * i * -0.1),
        rotX: i * 1,
        rotY: i * 1,
        rotZ: 30 + i * -4.3,
        background: backgroundCalc(100, -25)
      },
      [isRight]: {
        posX: offsetCalc(-1.5, 0),
        posY: offsetCalc(0.25, 0),
        posZ: offsetCalc(-0.25, -20),
        rotX: 0,
        rotY: 0,
        rotZ: 0,
        background: backgroundCalc(0, 0)
      }
    }
  }

  if (tablet) {
    styles = {
      [isLeft]: {
        posX: offsetCalc(-1.25, 0),
        posY: offsetCalc(-0.25, 0),
        posZ: offsetCalc(0, 1),
        rotX: 0,
        rotY: 45,
        rotZ: -90,
        background: backgroundCalc(95, 0)
      },
      [isFirst]: {
        posX: offsetCalc(0.12, -cardWidth / 6 / i),
        posY: offsetCalc(-0.4, 2.5),
        posZ: offsetCalc(-1, i * i * -0.1),
        rotX: 0,
        rotY: 0,
        rotZ: 2,
        background: backgroundCalc(95, 0)
      },
      [isCenter]: {
        posX: offsetCalc(i * 0.205, -i * 5.5 - 0.45 * cardWidth),
        posY: offsetCalc(-0.4, 2),
        posZ: offsetCalc(-1, i * i * -0.1),
        rotX: i * 1,
        rotY: i * 1,
        rotZ: 30 + i * -3.3,
        background: backgroundCalc(100, -25)
      },
      [isRight]: {
        posX: offsetCalc(-1.5, 0),
        posY: offsetCalc(0.25, 0),
        posZ: offsetCalc(-0.25, -20),
        rotX: 0,
        rotY: 0,
        rotZ: 0,
        background: backgroundCalc(0, 0)
      }
    }
  }

  if (mobile) {
    styles = {
      [isLeft]: {
        posX: offsetCalc(-1.25, 0),
        posY: offsetCalc(-0.25, 0),
        posZ: offsetCalc(0, 1),
        rotX: 0,
        rotY: 45,
        rotZ: -90,
        background: backgroundCalc(95, 0)
      },
      [isFirst]: {
        posX: offsetCalc(-0.105, -cardWidth / 10 / i),
        posY: offsetCalc(0.005 * i, -cardHeight / 15),
        posZ: offsetCalc(-1, i * i * -0.1),
        rotX: 0,
        rotY: 0,
        rotZ: 2,
        background: backgroundCalc(95, 0)
      },
      [isCenter]: {
        posX: offsetCalc(i * 0.205, -i * 0.04 - 0.42 * cardWidth),
        posY: offsetCalc(-0.5105, i * 1.04 - cardHeight / 19),
        posZ: offsetCalc(-1, i * i * -0.1),
        rotX: i * 1,
        rotY: i * 1,
        rotZ: 2,
        background: backgroundCalc(100, -25)
      },
      [isRight]: {
        posX: offsetCalc(-1.5, 0),
        posY: offsetCalc(0.25, 0),
        posZ: offsetCalc(-0.25, -20),
        rotX: 0,
        rotY: 0,
        rotZ: 0,
        background: backgroundCalc(0, 0)
      }
    }
  }

  // All cards are styled based on their index:
  const { posX, posY, posZ, background, rotX, rotY, rotZ } = styles[
    isLeft || isRight || isCenter || isFirst
  ]

  // Springs for drag animation
  const dPosX = useSpring(posX, spring)
  const dPosY = useSpring(posY, spring)
  const dPosZ = useSpring(posZ, spring)

  const dRotX = useSpring(rotX, spring)
  const dRotY = useSpring(rotY, spring)
  const dRotZ = useSpring(rotZ, spring)

  // This function controlls the drag behavior
  // and constrains verical and horizontal drag force
  const setXY = (info, consX, consY) => {
    dPosX.set(posX + (info.offset.x * size * consX) / 1000)
    dPosY.set(posY + (info.offset.y * size * consY) / 1000)
    dRotX.set(rotX + ((info.offset.y / size) * 120000 * consY) / 1000)
    dRotY.set(rotY + ((info.offset.x / size) * -120000 * consY) / 1000)
    dRotZ.set(rotZ + ((info.offset.x / size) * 120000 * consY) / 1000)
  }

  const handlePanEnd = (info) => {
    const minVelocity = Math.abs(info.velocity.x) > 80
    const minDistance = Math.abs(info.offset.x) > size / 48
    const direction = info.offset.x > 0 ? -1 : 1

    if (minDistance && minVelocity && isFirst) {
      rotateArray(direction)
      setXY(info, 0, 0)
    } else {
      setXY(info, 0, 0)
    }
  }

  return (
    <motion.div
      onTap={() => {
        rotateArray(i - length)
      }}
      onPan={(_, info) => {
        isFirst ? setXY(info, 0.8, 0.35) : setXY(info, 0.15, 0.15)
      }}
      onPanEnd={(_, info) => {
        handlePanEnd(info)
      }}
      whileHover={{ scale: 1.1 }}
      transition={spring}
      animate={{
        x: posX,
        y: posY,
        z: posZ,
        rotateX: rotX,
        rotateY: rotY,
        rotateZ: rotZ,
        background,
        transition: {
          delay: (iFromFirst + current) * 0.025
        }
      }}
      style={{
        position: 'absolute',
        x: dPosX,
        y: dPosY,
        z: dPosZ,
        rotateX: dRotX,
        rotateY: dRotY,
        rotateZ: dRotZ,
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        top: '50%',
        left: '50%',
        zIndex: length - i,
        borderRadius: `${size * 0.035}px`,
        userSelect: 'none',
        overflow: 'hidden',
        cursor: isFirst ? 'grab' : 'pointer',
        touchAction: 'auto',
        backgroundColor: '#0C101C'
      }}
    >
      <div className='w-full h-full bg-cover bg-no-repeat bg-tangle-oxford-blue' style={{ backgroundImage: `url(${name})` }} />
    </motion.div>
  )
}
