import { useCallback, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddSlide from './components/addSlide/AddSlide';
import DeleteSlide from './components/deleteSlide/DeleteSlide';
import Slide from './components/slide/Slide';
import SliderControls from './components/sliderControls/SliderControls';
import styles from './Slider.module.css';

const Slider = ({ slides, initialInterval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideInterval, setSlideInterval] = useState(initialInterval);

  const handleNext = useCallback(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length), [slides.length]);
  const handlePrev = useCallback(() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1)), [slides.length]);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(handleNext, slideInterval);
      return () => clearInterval(intervalId);
    }
  }, [handleNext, isPlaying, slideInterval]);

  return (
    <Container className={styles['slider-container']}>
      <Row>
        <Col xs={12} lg={8}>
          {slides.length > 0 && (
            <Slide
              slide={slides?.[currentIndex]}
              isPlaying={isPlaying}
            />
          )}
        </Col>
      </Row>

      <Row className={styles['control-row']}>
        <Col className={styles['controls-left-wrapper']} xs={6}>
          <SliderControls
            handlePrev={handlePrev}
            handleNext={handleNext}
            handlePlay={() => setIsPlaying(true)}
            handleStop={() => setIsPlaying(false)}
            isPlaying={isPlaying}
            slideInterval={slideInterval}
            setSlideInterval={setSlideInterval}
          />
        </Col>
        <Col className={styles['controls-right-wrapper']} xs={6}>
          <AddSlide isPlaying={isPlaying} />
          <DeleteSlide slideId={slides[currentIndex]?.id} isPlaying={isPlaying} />
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
