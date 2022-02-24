import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from './redux/slice/productsSlice'
import Money from "./components/Money";
import Products from "./components/Products";
import Total from './components/Total'

function App() {

    const count = useSelector((state) => state.products.value)
    const dispatch = useDispatch()


  return (
      <div className={"body"}>
        <div className={"container"}>
            <Header/>
            <Money />
            <Products/>
            <Total />
        </div>
      </div>
  );
}

export default App;
