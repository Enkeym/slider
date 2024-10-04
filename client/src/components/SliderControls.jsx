import {Button, ButtonGroup} from 'react-bootstrap';
import {FaArrowLeft, FaArrowRight, FaPlay, FaStop} from 'react-icons/fa';

const SliderControls = ({handlePrev, handleNext, handlePlay, handleStop, isPlaying}) => (
  <ButtonGroup>
    <Button onClick={handlePrev} variant="primary" disabled={isPlaying}>
      <FaArrowLeft />
    </Button>
    {!isPlaying ? (
      <Button onClick={handlePlay} variant="success">
        <FaPlay />
      </Button>
    ) : (
      <Button onClick={handleStop} variant="danger">
        <FaStop />
      </Button>
    )}
    <Button onClick={handleNext} variant="primary" disabled={isPlaying}>
      <FaArrowRight />
    </Button>
  </ButtonGroup>
);

export default SliderControls;
