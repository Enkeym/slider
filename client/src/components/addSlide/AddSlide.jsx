import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAddSlideMutation } from '../../../app/services/slides.api';
import { addSlide } from '../../../features/create.slice';
import FormSlider from '../formSlider/FormSlider';
import styles from './AddSlide.module.css';

const AddSlide = ({ isPlaying }) => {
  const [show, setShow] = useState(false);
  const [addSlideToServer] = useAddSlideMutation();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddSlide = async (formData) => {
    try {
      const newSlide = await addSlideToServer(formData).unwrap();
      dispatch(addSlide(newSlide));
      handleClose();
    } catch (error) {
      console.error('Failed to add slide', error);
    }
  };

  return (
    <>
      <Button
        className={styles['add-slide-button']}
        onClick={handleShow}
        disabled={isPlaying}
      >
        Add Slide
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles['modal-header']}>
          <Modal.Title className={styles['modal-title']}>Add New Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles['modal-body']}>
          <FormSlider onSubmit={handleAddSlide} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddSlide;
