import { ButtonGroup } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaPlay, FaStop } from 'react-icons/fa';
import SlideInterval from '../slideInterval/SlideInterval';
import styles from './SliderControls.module.css';

const SliderControls = ({ handlePrev, handleNext, handlePlay, handleStop, isPlaying, slideInterval, setSlideInterval }) => (
  <ButtonGroup className={styles['button-group']}>
    <button
      onClick={handlePrev}
      className={`${styles.button} ${styles['button-primary']}`}
      disabled={isPlaying}
    >
      <FaArrowLeft />
    </button>
    {!isPlaying ? (
      <button
        onClick={handlePlay}
        className={`${styles.button} ${styles['button-success']}`}
      >
        <FaPlay />
      </button>
    ) : (
      <button
        onClick={handleStop}
        className={`${styles.button} ${styles['button-danger']}`}
      >
        <FaStop />
      </button>
    )}

    <SlideInterval slideInterval={slideInterval} setSlideInterval={setSlideInterval} />

    <button
      onClick={handleNext}
      className={`${styles.button} ${styles['button-primary']}`}
      disabled={isPlaying}
    >
      <FaArrowRight />
    </button>
  </ButtonGroup>
);

export default SliderControls;
