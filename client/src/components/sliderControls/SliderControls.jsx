import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaPlay, FaStop } from 'react-icons/fa';
import styles from './SliderControls.module.css';

const SliderControls = ({ handlePrev, handleNext, handlePlay, handleStop, isPlaying }) => (
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
