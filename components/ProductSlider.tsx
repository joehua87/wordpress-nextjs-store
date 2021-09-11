import 'keen-slider/keen-slider.min.css'

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import clsx from 'clsx'
import { MediaItemFragment } from '../generated/graphql'
import DewImage from './DewImage'

export interface ProductSliderProps {
  className?: string
  images: MediaItemFragment[]
  imageId?: string
}

export default function ProductSlider({
  className,
  images,
  imageId,
}: ProductSliderProps) {
  const [sliderIndex, setSliderIndex] = useState(() =>
    Math.max(
      images.findIndex((v) => v.id === imageId),
      0,
    ),
  )
  const [index, setIndex] = useState(() =>
    Math.max(
      images.findIndex((v) => v.id === imageId),
      0,
    ),
  )
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    initial: index,
    slideChanged: (s) => {
      setSliderIndex(s.details().absoluteSlide)
    },
  })
  return (
    <div
      className={clsx('grid grid-rows-5 grid-cols-6 w-full gap-4', className)}
    >
      <div className="flex flex-col col-span-1 row-span-5">
        {images.slice(0, 5).map((x, idx) => (
          <div
            key={x.id}
            className={clsx(
              'relative w-full aspect-w-1 aspect-h-1 mb-4 cursor-pointer shadow-sm',
              idx === sliderIndex && 'ring ring-sky-600',
            )}
            onClick={() => {
              slider?.moveToSlide(idx)
            }}
          >
            <DewImage
              loading="lazy"
              layout="fill"
              src={x.mediumUrl || ''}
              alt=""
              className="object-cover"
            />
            {idx === 4 && images.length > 5 && (
              <div
                className="bg-black flex bg-opacity-30 text-lg text-white inset-0 absolute items-center justify-center"
                onClick={() => {
                  //   setIsOpen(true)
                  setIndex(idx)
                }}
              >
                {images.length - 5}+
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        className="flex-auto col-span-5 col-start-2 row-span-5 keen-slider"
        ref={ref}
      >
        {images.map((x, idx) => (
          <div key={x.id} className="min-w-full keen-slider__slide">
            <div className="w-full aspect-w-1 aspect-h-1">
              <DewImage
                loading="lazy"
                layout="fill"
                className="object-cover"
                alt=""
                src={x.sourceUrl || ''}
                onClick={() => {
                  setIndex(idx)
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
