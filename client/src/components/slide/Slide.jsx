import { memo } from 'react';
import { Card, Image } from 'react-bootstrap';
import { apiUrl } from '../../../app/services/slides.api';
import styles from './Slide.module.css';

const Slide = ({ slide }) => (
  <Card className={styles['slide']}>
    {slide?.type === 'image' ? (
      <Image
        src={`${apiUrl}${slide.image}`}
        alt="slide"
        className={styles['slide-image']}
      />
    ) : (
      <Card.Body className={styles['text-slide']}>
        <Card.Text>{slide?.content}</Card.Text>
      </Card.Body>
    )}
  </Card>
);

export default memo(Slide);
