import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ButtonDelete({ id, handleClick }) {
  return (
    <div>
      <IconButton aria-label="delete" onClick={() => handleClick(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
