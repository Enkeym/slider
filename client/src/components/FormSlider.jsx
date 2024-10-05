import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const FormSlider = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    type: 'text',
    content: '',
    image: null,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleImageChange = (e) => {
    setFormData({...formData, image: e.target.files[0]});
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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="slideType">
        <Form.Label>Slide Type</Form.Label>
        <Form.Control
          as="select"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
        </Form.Control>
      </Form.Group>

      {formData.type === 'text' && (
        <Form.Group controlId="content" className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter slide content"
            required
          />
        </Form.Group>
      )}

      {formData.type === 'image' && (
        <Form.Group controlId="image" className="mt-3">
          <Form.Label>Upload Slide Image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} required />
        </Form.Group>
      )}

      <Button variant="primary" type="submit" className="mt-3">
        Add slide
      </Button>
    </Form>
  );
};

export default FormSlider;
