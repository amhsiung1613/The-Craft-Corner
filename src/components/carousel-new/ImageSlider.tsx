"use client"

import React, { useState, useRef, useEffect } from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked"
import "./image-slider.css"

type ImageSliderProps = {
  images: {
    id: string
    url: string
    alt: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(1) // start at 1
  const [isTransitioning, setIsTransitioning] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  const extendedImages = [
    images[images.length - 1], // clone last
    ...images,
    images[0], // clone first
  ]

  function showNextImage() {
    setImageIndex((index) => index + 1)
  }

  function showPrevImage() {
    setImageIndex((index) => index - 1)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleTransitionEnd = () => {
      if (imageIndex === extendedImages.length - 1) {
        // if at cloned first
        setIsTransitioning(false)
        setImageIndex(1)
      }

      if (imageIndex === 0) {
        // if at cloned last
        setIsTransitioning(false)
        setImageIndex(extendedImages.length - 2)
      }
    }

    slider.addEventListener("transitionend", handleTransitionEnd)
    return () => slider.removeEventListener("transitionend", handleTransitionEnd)
  }, [imageIndex, extendedImages.length])

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
    }
  }, [isTransitioning])

  return (
    <section className="img-slider" aria-label="Image Slider">
      <div
        ref={sliderRef}
        className={`img-slider-track ${isTransitioning ? "transition" : ""}`}
        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
      >
        {extendedImages.map(({ id, url, alt }, index) => (
          <img
            key={index}
            src={url}
            alt={alt}
            className="img-slider-img"
          />
        ))}
      </div>

      <button onClick={showPrevImage} className="img-slider-btn prev">
        <ArrowBackIcon />
      </button>

      <button onClick={showNextImage} className="img-slider-btn next">
        <ArrowForwardIcon />
      </button>

      <div className="img-slider-dots">
        {images.map((_, index) => {
          const realIndex =
            imageIndex === 0
              ? images.length - 1
              : imageIndex === extendedImages.length - 1
              ? 0
              : imageIndex - 1

          return (
            <button
              key={index}
              className="img-slider-dot-btn"
              onClick={() => setImageIndex(index + 1)}
            >
              {index === realIndex
                ? <RadioButtonCheckedIcon />
                : <RadioButtonUncheckedIcon />}
            </button>
          )
        })}
      </div>
    </section>
  )
}