import './Slideshow.css'
import { useState, useEffect } from "react";

const Slideshow = ({park}) => {
  //const [slideIndex, setSlideIndex] = useState(1)

  let slideIndex = 1;
  // useEffect(() => {
  function showSlides(slideIndex) {
    console.log(slideIndex)

    var slides = document.getElementsByClassName(park.parkCode);
    //console.log(slides)
    if (!slides.length) {
      return;             
    }                     
    if (slideIndex > slides.length) {
      //setSlideIndex(1);
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
      //setSlideIndex(slides.length);
    }
    for (let i = 0; i < slides.length; i++) {
      if (i === slideIndex-1){
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    };
    //slides[slideIndex-1].style.display = "block";
  };
// }, [slideIndex, park.parkCode]);

  const plusSlides = (n) => {
    console.log("click")
    //const newIndex = slideIndex + n
    //setSlideIndex(newIndex);
    //showSlides();
    showSlides(slideIndex += n);
  };

  showSlides(slideIndex);

  const totalImages = Object.keys(park.images).length;

  return (
    <section className="slideshow-container">

      <button className="prev" onClick={plusSlides(-1)}>&#10094;</button>
      <button className="next" onClick={plusSlides(1)}>&#10095;</button>

      {park.images.map((image) => (
        <>
        <div className={"mySlides fade " + park.parkCode} >
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