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

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= slides.length ? 0 : prevIndex + 1));
  }, [slides.length]);
  const handlePrev = useCallback(() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1)), [slides.length]);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 >= slides.length ? 0 : prevIndex + 1));
      }, slideInterval);
      return () => clearInterval(intervalId);
    }
  }, [isPlaying, slideInterval, slides.length]);

  return (
    <Container fluid className={styles['slider-container']}>
      <Row className="justify-content-center">
        <Col xs={12} lg={8} className={styles['slide-wrapper']}>
          {slides.length > 0 && (
            <Slide
              slide={slides?.[currentIndex]}
              isPlaying={isPlaying}
            />
          )}
        </Col>
      </Row>

      <Row className={styles['control-row']}>
        <Col xs={12} lg={6} className={styles['controls-left-wrapper']}>
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
        <Col xs={12} lg={6} className={styles['controls-right-wrapper']}>
          <AddSlide isPlaying={isPlaying} />
          <DeleteSlide slideId={slides[currentIndex]?.id} isPlaying={isPlaying} />
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
