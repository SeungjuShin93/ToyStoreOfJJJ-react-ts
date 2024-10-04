import styles from '../styles/pages/NotFound.module.css';
import { Button } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex__container'>
      <Header></Header>
      <div className={styles.no__page}>
        <h3>잘못된 요청입니다.</h3>
        <Button onClick={() => navigate('/')} sx={{ mt: 3 }}>
          쇼핑하러 가기
        </Button>
      </div>
      <Footer></Footer>
    </div>
  );
}
