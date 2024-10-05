// components/Slider.jsx
import React, {useCallback, useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import AddSlide from './components/AddSlide';
import Slide from './components/Slide';
import SlideInterval from './components/SlideInterval';
import SliderControls from './components/SliderControls';


const Slider = ({slides, initialInterval = 3000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideInterval, setSlideInterval] = useState(initialInterval);

  const handleNext = useCallback(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length));
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(handleNext, slideInterval);
      return () => clearInterval(intervalId);
    }
  }, [handleNext, isPlaying, slideInterval, slides.length]);

  return (
    <Container className="slider-container">
      <Row className="justify-content-center">
        <Col xs={12} lg={8}>
          {slides.length > 0 && (
            <Slide
              slide={slides[currentIndex]}
              isPlaying={isPlaying}
            />
          )}
        </Col>
      </Row>

      <Row className="justify-content-center">
        <SliderControls
          handlePrev={handlePrev}
          handleNext={handleNext}
          handlePlay={() => setIsPlaying(true)}
          handleStop={() => setIsPlaying(false)}
          isPlaying={isPlaying}
        />
      </Row>

      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <AddSlide isPlaying={isPlaying} />
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <SlideInterval slideInterval={slideInterval} setSlideInterval={setSlideInterval} />
      </Row>
    </Container>
  );
};

export default Slider;
