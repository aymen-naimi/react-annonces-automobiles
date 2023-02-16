import '../styles/cart.css';

function cart({cart, totalPrice, orderInProgress, order, vidercart}) {
	return (
    <div className='body-auto'>
    <h2>cart</h2>

    {cart.map((item, index) => (<div key={index} className='item-cart'>
      <div>{item.marque} {item.modele}</div>
      <div>{item.price.toLocaleString()} €</div>
    </div>))}


    <h3>total : { totalPrice.toLocaleString()} €</h3>
    <button onClick={() => vidercart()} disabled={!cart.length}>Vider le panier</button>

    <button onClick={() => order()} disabled={!cart.length || orderInProgress}>Commander</button>
  </div>)
}

export default cart
