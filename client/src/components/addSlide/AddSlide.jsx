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
        variant="success"
        onClick={handleShow}
        disabled={isPlaying}
        className={styles['add-slide-button']}
      >
        Add Slide
      </Button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add New Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormSlider onSubmit={handleAddSlide} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddSlide;
