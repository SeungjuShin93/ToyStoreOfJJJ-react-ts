import RotateRightIcon from '@mui/icons-material/RotateRight';
import styles from '../styles/components/Loading.module.css';

export default function LoadingIcon() {
  return (
    <div className={styles.rotate__container}>
      <RotateRightIcon className={styles.rotate}></RotateRightIcon>
      <div>Loading...</div>
    </div>
  );
}
