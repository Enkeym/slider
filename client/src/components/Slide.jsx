import { Card, Image } from 'react-bootstrap';
import { apiUrl } from '../../app/services/slides.api';
import DeleteSlide from './deleteSlide/DeleteSlide';

const Slide = ({ slide, isPlaying }) => (

  <Card className="slide">
    {slide.type === 'image' ? (
      <Image src={`${apiUrl}${slide.image}`} alt="slide" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} />
    ) : (
      <Card.Body className="d-flex align-items-center justify-content-center" style={{ height: '400px', backgroundColor: '#f8f9fa' }}>
        <Card.Text className="h3">{slide.content}</Card.Text>
      </Card.Body>
    )}
    <DeleteSlide slideId={slide.id} isPlaying={isPlaying} />
  </Card>
);

export default Slide;
