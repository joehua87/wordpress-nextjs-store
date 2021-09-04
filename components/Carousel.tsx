import Link from 'next/link'
import clsx from 'clsx'
import DewImage from '../components/DewImage'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import React, { useState } from 'react'
import { Gallery } from '../types'

export function Carousel({ gallery }: { gallery: Gallery }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    afterChange(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <div ref={ref} className="keen-slider">
      {gallery?.items?.map((item) =>
        item.href ? (
          <Link href={item.href}>
            <a
              key={item.id}
              className="keen-slider__slide min-w-full aspect-w-3 aspect-h-1"
            >
              <DewImage
                className="object-cover object-center"
                src={item.src || ''}
                alt={item.alt || undefined}
                layout="fill"
              />
            </a>
          </Link>
        ) : (
          <div
            key={item.id}
            className="keen-slider__slide min-w-full aspect-w-3 aspect-h-1"
          >
            <DewImage
              className="object-cover object-center"
              src={item.src || ''}
              alt={item.alt || undefined}
              layout="fill"
            />
          </div>
        ),
      )}
      {slider && (
        <div className="absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2 grid gap-2 grid-flow-col p-2">
          {[...Array(gallery?.items?.length || 0)].map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={clsx(
                  'block w-3 h-3 bg-gray-400 rounded-full',
                  currentSlide === idx && 'bg-gray-700',
                )}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
