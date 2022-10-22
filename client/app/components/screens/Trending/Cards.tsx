import React, { useState } from "react"
import { useSprings , animated, to as interpolate } from "react-spring"
import { useDrag} from '@use-gesture/react'

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  opacity: 1,
  rotation: -10 + Math.random() * 20
})

const from = (_i: number) => ({ x: 0, rotation: 0, opacity: 0.3, scale: 1.5, y: -5 })

const transform = (rotation: number, scaling: number) => 
  `perspective(1500px) rotateX(30deg) rotateY(${rotation / 10}deg) rotateZ(${rotation}deg) scale(${scaling})`


const cards = [
  'Yolka',
  'Cheskhi',
  'deposit',
  'Pekingese',
  '94.84.158.153',
  'Raven.Howell@gmail.com',
  '8f:a0:6e:c2:2b:d2'
]

const Cards: React.FC = () => {
  const [ goneCards ] = useState(() => new Set())
  const [ props, api ] = useSprings(cards.length, (index) => ({
    from: from(index),
    to: to(index),
    delay: index * 100,
  }))

  const bind = useDrag( ({ args: [index], active, movement: [mx, movY], direction: [dirX, dirY], velocity: [vx, vy] }) => {
    const isHardSwipe = vy > 0.2 // * Когда пизда свапнешь тогда улетит нахуй
    if ( !active && isHardSwipe ) { 
      goneCards.add(index) 
    }

    api.start(i => {
      if (index !== i) return // * Меняем пропы ток конкретной нахуй карте

      const isGone = goneCards.has(index) 
      const y = isGone 
        ? (window.innerHeight + 200) * dirY 
        :
        active ? movY : 0

      const rotation = movY / 100 + (isGone ? (dirY * vy * 10) : 0) // * Чем сильнее бросишь тем сильнее запидорасит
      const scale    = active ? 1.1 : 1 // * Активные карты типа припадымаюца сук

      return {
        y, 
        rotation, 
        scale,
        config: {
          friction: 50,
          tension: active 
            ? 800
            : 
            isGone ? 200 : 500 
        }
      }
    })

    if ( !active && goneCards.size === cards.length ) {
      setTimeout(() => {
        goneCards.clear()
        api.start(i => to(i))
      }, 1000)
    }
  }, {axis: 'y'})  

  return (
    <>
      {props.map( ({x, y, rotation, scale, opacity}, index) => {
        return (
          <animated.div
            {...bind(index)}
            style={{
              background: 'blue',
              padding: '20px',
              width: '400px',
              userSelect: 'none',
              x, y, opacity,
              transform: interpolate([rotation, scale], transform)
            }}
            key={index}
        >
          {cards[index]}
        </animated.div>
        )
      })}
    </>
  )
}

export default Cards