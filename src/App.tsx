// 신승주
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Payment from './pages/Payment';
import Company from './pages/Company';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CreateUsedProduct from './pages/CreateUsedProduct';
import UsedProductList from './pages/UsedProductList';
import { FixedStore } from './stores/Fixed.store';
import FloatingActionButtons from './components/FabIcon';
import ScrollToTop from './utils/scrollToTop';
import { ProductStore } from './stores/Product.store';
import { useEffect } from 'react';
import { UserStore } from './stores/User.store';
import { getUserById } from './services/userServices';

function App() {
  const { isFixed } = FixedStore();
  const { fetchProducts } = ProductStore();
  const { setUser } = UserStore();
  const location = useLocation();

  // 사용자 정보를 전역에 저장
  useEffect(() => {
    if (location.state && location.state.user) {
      setUser(location.state.user);
    }
  }, [location.state, setUser]);

  useEffect(() => {
    // 기본 값을 신승주로 로그인 시켜두기
    const fetchDefaultUser = async () => {
      try {
        const user = await getUserById(1);
        console.log('작동햇나');
        setUser(user);
      } catch (error) {
        console.error('Error fetching default user:', error);
      }
    };
    // 새로고침해도 로그인 상태 유지
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user);
    } else {
      fetchDefaultUser();
    }
  }, [setUser]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className={`${isFixed ? 'fixed' : ''}`}>
      <FloatingActionButtons />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/myPage/*' element={<MyPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search/:query?' element={<Search />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/company' element={<Company />} />
        <Route path='/category/:categoryName' element={<ProductList />} />
        <Route
          path='/category/:categoryName/product/:productId'
          element={<ProductDetail />}
        />
        <Route path='/createUsedProduct' element={<CreateUsedProduct />} />
        <Route path='/UsedProductList' element={<UsedProductList />} />
      </Routes>
    </div>
  );
}

export default App;
