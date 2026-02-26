// "use client";

// import React from "react";
// import { useState } from "react"
// // import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// import "./image-slider.css"

// type ImageSliderProps = {
//   images: {
//     id: string
//     url: string
//     alt: string
//   }[]
// }

// export function ImageSlider({ images }: ImageSliderProps) {
//   const [imageIndex, setImageIndex] = useState(0)

//   // function showNextImage() {
//   //   setImageIndex(index => {
//   //     if (index === images.length - 1) return 0
//   //     return index + 1
//   //   })
//   // }

//   // function showPrevImage() {
//   //   setImageIndex(index => {
//   //     if (index === 0) return images.length - 1
//   //     return index - 1
//   //   })
//   // }

//   function showNextImage() {
//     setImageIndex(index => (index + 1) % images.length)
//   }

//   function showPrevImage() {
//     setImageIndex(index => 
//       (index - 1 + images.length) % images.length
//     )
//   }

//   return (
//     <section
//       aria-label="Image Slider"
//       style={{ width: "100%", height: "100%", position: "relative" }}
//     >
//       <a href="#after-image-slider-controls" className="skip-link">
//         Skip Image Slider Controls
//       </a>
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           overflow: "hidden",
//         }}
//       >
//         {images.map(({ id, url, alt }, index) => (
//           <img
//             key={id}
//             src={url}
//             alt={alt}
//             aria-hidden={imageIndex !== index}
//             className="img-slider-img"
//             style={{ translate: `${-100 * imageIndex}%` }}
//           />
//         ))}
//       </div>
//       <button
//         onClick={showPrevImage}
//         className="img-slider-btn"
//         style={{ left: 0 }}
//         aria-label="View Previous Image"
//       >
//         <ArrowBackIcon aria-hidden />
//       </button>
//       <button
//         onClick={showNextImage}
//         className="img-slider-btn"
//         style={{ right: 0 }}
//         aria-label="View Next Image"
//       >
//         <ArrowForwardIcon aria-hidden />
//       </button>
//       <div
//         style={{
//           position: "absolute",
//           bottom: ".5rem",
//           left: "50%",
//           translate: "-50%",
//           display: "flex",
//           gap: ".25rem",
//         }}
//       >
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className="img-slider-dot-btn"
//             aria-label={`View Image ${index + 1}`}
//             onClick={() => setImageIndex(index)}
//           >
//             {index === imageIndex ? (
//               <RadioButtonCheckedIcon aria-hidden />
//             ) : (
//               <RadioButtonUncheckedIcon aria-hidden />
//             )}
//           </button>
//         ))}
//       </div>
//       <div id="after-image-slider-controls" />
//     </section>
//   )
// }


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
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        ref={sliderRef}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}>
        {extendedImages.map(({ id, url, alt }, index) => (
          <img
            key={index}
            src={url}
            alt={alt}
            className="img-slider-img"
            style={{
              flex: "0 0 100%",
              transform: `translateX(-${imageIndex * 100}%)`,
              transition: isTransitioning ? "transform 300ms ease-in-out" : "none",
            }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}>
        <ArrowBackIcon />
      </button>

      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}>
        <ArrowForwardIcon />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
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
              onClick={() => setImageIndex(index + 1)}>
              {index === realIndex ? (
                <RadioButtonCheckedIcon />
              ) : (
                <RadioButtonUncheckedIcon />
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}