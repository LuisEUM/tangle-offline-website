'use client'
import { useRef, forwardRef } from 'react'

export const Tile = forwardRef(
  (
    {
      children,
      perspective = false,
      dark = false,
      perspectiveDist = 400
    },
    ref
  ) => {
    const wrapperRef = useRef()

    return (
      <div ref={wrapperRef} className='relative pt-[100%] overflow-hidden rounded-lg outline-none'>
        <div
          className='absolute top-0 right-0 left-0 bottom-0'
          ref={ref}
          style={{
            background: dark ? 'hsla(0, 0%, 13%, 1)' : 'transparent',
            perspective: perspective ? `${perspectiveDist * 2}px` : 'none',
            touchAction: 'none'
          }}
        >
          {children}
        </div>
      </div>
    )
  }
)

Tile.displayName = 'Tile'
