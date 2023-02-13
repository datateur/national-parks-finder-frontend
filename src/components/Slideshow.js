import './Slideshow.css'
import { useState, useEffect } from "react";

const Slideshow = ({park}) => {
  let slideIndex = 1;

  const useShowSlides = (slideIndex) => {
    console.log(slideIndex)

    var slides = document.getElementsByClassName("mySlides");
    if (!slides.length) {
      return;             
    }                     
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    if (slideIndex < 1) {
      slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  };

  // const plusSlides = (n) => {
  //   console.log("click")
  //   useShowSlides(slideIndex += n);
  // };

  const totalImages = Object.keys(park.images).length;

  return (
    <section className="slideshow-container">

      <button className="prev" onClick={useShowSlides(slideIndex - 1)}>&#10094;</button>
      <button className="next" onClick={useShowSlides(slideIndex + 1)}>&#10095;</button>

      {park.images.map((image) => (
        <>
        <div className="mySlides fade">
          <div className="number-text">1 / {totalImages}</div>
          <img src={image.url} className='img' alt={image.altText}></img>
          <div className="text">{image.caption}</div>
        </div>
        </>
      ))}

    </section>
  )
};

export default Slideshow;