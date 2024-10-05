import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './FormSlider.module.css';

const FormSlider = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    type: 'text',
    content: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSlide = new FormData();

    newSlide.append('type', formData.type);
    if (formData.type === 'text') {
      newSlide.append('content', formData.content);
    } else if (formData.type === 'image' && formData.image) {
      newSlide.append('image', formData.image);
    }

    onSubmit(newSlide);
  };

  return (
    <Form onSubmit={handleSubmit} className={styles['form-container']}>
      <Form.Group controlId="slideType" className={styles['form-group']}>
        <Form.Label className={styles['form-label']}>Slide Type</Form.Label>
        <Form.Control
          as="select"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className={styles['form-control']}
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
        </Form.Control>
      </Form.Group>

      {formData.type === 'text' && (
        <Form.Group controlId="content" className={styles['form-group']}>
          <Form.Label className={styles['form-label']}>Content</Form.Label>
          <Form.Control
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter slide content"
            required
            className={styles['form-control']}
          />
        </Form.Group>
      )}

      {formData.type === 'image' && (
        <Form.Group controlId="image" className={styles['form-group']}>
          <Form.Label className={styles['form-label']}>Upload Slide Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleImageChange}
            required
            className={styles['form-control']}
          />
        </Form.Group>
      )}

      <Button variant="primary" type="submit" className={styles['submit-button']}>
        Add slide
      </Button>
    </Form>
  );
};

export default FormSlider;
