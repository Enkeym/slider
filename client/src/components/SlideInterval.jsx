import {useState} from 'react';
import {Form} from 'react-bootstrap';

const SlideInterval = ({slideInterval, setSlideInterval}) => {
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

  // Функция для очистки невалидных символов
  const handleBlur = () => {
    if (intervalInSeconds === '') {
      setIntervalInSeconds(slideInterval / 1000);
    }
  };

  return (
    <Form.Group controlId="intervalInput" className="w-50">
      <Form.Label>Slide Interval (seconds)</Form.Label>
      <Form.Control
        type="text"
        value={intervalInSeconds}
        onChange={handleIntervalChange}
        onBlur={handleBlur}
        placeholder="Enter interval in seconds"
      />
    </Form.Group>
  );
};

export default SlideInterval;
