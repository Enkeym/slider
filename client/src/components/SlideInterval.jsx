import {Form} from 'react-bootstrap';

const SlideInterval = ({slideInterval, setSlideInterval}) => {
  return (
    <Form.Group controlId="intervalInput" className="w-50">
      <Form.Label>Slide Interval (milliseconds)</Form.Label>
      <Form.Control
        type="number"
        value={slideInterval}
        onChange={(e) => setSlideInterval(Number(e.target.value))}
        min="1000"
        step="1000"
        placeholder="Enter interval in milliseconds"
      />
    </Form.Group>
  );
};

export default SlideInterval;
