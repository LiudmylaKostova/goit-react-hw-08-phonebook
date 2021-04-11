import styles from '../ContactsList/ContactsList.module.css';
import ButtonDelete from '../MyButton/ButtonDelete';

const ContactItem = ({ name, number, id, handleDelete }) => {
  return (
    <li className={styles.li} key={id}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <ButtonDelete id={id} handleClick={handleDelete} />
    </li>
  );
};

export default ContactItem;
