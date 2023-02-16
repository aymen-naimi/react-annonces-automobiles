import { useState, useEffect } from 'react';
import '../styles/body.css'
import ListAds from './list-ads';
import Cart from './cart';
import OrderService from './../services/commande';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Body() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderInProgress, setOrderInProgress] = useState(false)
  const [cart, setcart] = useState([]);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    setTotalPrice(totalPrice)

  }, [cart]);

  const order = () => {
    OrderService.order(cart)
      .then(() => {
        setOrderInProgress(true);
        toast.success("Commande Envoyée");
      }).catch(() => {
        toast.warn("Commande non Envoyée !");
      });
  }

  const vidercart = () => {
    if (orderInProgress) {
      setOrderInProgress(false);
    }
    setcart([]);
  }

  return <div>
    <div className='body__container'>
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        orderInProgress={orderInProgress}
        order={order}
        vidercart={vidercart}
      />
      <ListAds
        cart={cart}
        setcart={setcart}
      />
      <ToastContainer />
    </div>
  </div>
}

export default Body
