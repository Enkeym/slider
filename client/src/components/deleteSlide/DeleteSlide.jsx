import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useDeleteSlideMutation } from '../../../app/services/slides.api';
import { deleteSlide } from '../../../features/create.slice';
import styles from './DeleteSlide.module.css';

const DeleteSlide = ({ slideId, isPlaying }) => {
  const [deleteSlideFromServer] = useDeleteSlideMutation();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (!slideId) {
      console.error('Slide ID is undefined');
      return;
    }

    try {
      const result = await deleteSlideFromServer(slideId).unwrap();
      dispatch(deleteSlide(slideId));
      console.log('Slide deleted successfully:', result);
    } catch (error) {
      console.error('Failed to delete slide:', error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className={styles['delete-slide-button']}
      disabled={isPlaying || !slideId}
    >
      <FaTrash /> Delete Slide
    </button>
  );
};

export default DeleteSlide;
