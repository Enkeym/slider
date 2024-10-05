import { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './SlideInterval.module.css';

const SlideInterval = ({ slideInterval, setSlideInterval }) => {
  const [intervalInSeconds, setIntervalInSeconds] = useState(slideInterval / 1000);

  const handleIntervalChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setIntervalInSeconds(value);
      if (value !== '') {
        setSlideInterval(Number(value) * 1000);
      }
    }
  };

  const handleBlur = () => {
    if (intervalInSeconds === '') {
      setIntervalInSeconds(slideInterval / 1000);
    }
  };

  return (
    <Form.Group controlId="intervalInput" className={styles['form-group']}>
      <Form.Control
        type="text"
        value={intervalInSeconds}
        onChange={handleIntervalChange}
        onBlur={handleBlur}
        placeholder="sec"
        className={styles['form-control']}
      />
    </Form.Group>
  );
};

export default SlideInterval;
