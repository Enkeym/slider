import {Button} from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import {useDeleteSlideMutation} from '../../app/services/slides.api';
import {deleteSlide} from '../../features/create.slice';


const DeleteSlide = ({slideId, isPlaying}) => {
  const [deleteSlideFromServer] = useDeleteSlideMutation();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await deleteSlideFromServer(slideId).unwrap();
      dispatch(deleteSlide(slideId));
    } catch (error) {
      console.error('Failed to delete slide', error);
    }
  };

  return (
    <Button onClick={handleDelete} className="btn btn-danger" disabled={isPlaying}>
      <FaTrash /> Delete Slide
    </Button>
  );
};

export default DeleteSlide;
